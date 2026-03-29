import fs from "node:fs/promises";
import path from "node:path";

import Anthropic from "@anthropic-ai/sdk";
import YAML from "yaml";

import {
  assembleBilingualMarkdown,
  inferBlockKind,
  mapCrawlerOutputToContentPath,
  readSourceDocument,
  type BilingualBlock,
} from "./assemble.js";

type GlossaryTerm = {
  source: string;
  [lang: string]: string;
};

type TranslateOptions = {
  force: boolean;
  langs: string[];
  mock: boolean;
  model: string;
  source: string;
};

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const sourcePath = path.resolve(process.cwd(), options.source);
  const sourceDocument = await readSourceDocument(sourcePath);
  const glossary = await readGlossary();
  const styleGuide = await fs.readFile(path.resolve(process.cwd(), "src", "style-guide.md"), "utf8");
  const outputPath = mapCrawlerOutputToContentPath(sourcePath);

  const client = options.mock ? null : createAnthropicClient();

  const blocks: BilingualBlock[] = [];
  for (const block of sourceDocument.blocks) {
    const translations: Record<string, string> = {};

    for (const lang of options.langs) {
      translations[lang] = options.mock
        ? block.markdown
        : await translateBlock({
            client,
            glossary,
            lang,
            model: options.model,
            styleGuide,
            text: block.markdown,
            type: inferBlockKind(block.markdown),
          });
    }

    blocks.push({
      id: block.id,
      kind: block.kind,
      source: block.markdown,
      translations,
    });
  }

  const markdown = assembleBilingualMarkdown({
    metadata: sourceDocument.metadata,
    blocks,
    targetLangs: options.langs,
  });

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, markdown, "utf8");
  await updateSyncState(sourcePath, outputPath, options.langs, blocks);

  console.log(`Translated ${sourceDocument.blocks.length} blocks -> ${path.relative(path.resolve(process.cwd(), ".."), outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function translateBlock(payload: {
  client: Anthropic | null;
  glossary: GlossaryTerm[];
  lang: string;
  model: string;
  styleGuide: string;
  text: string;
  type: string;
}): Promise<string> {
  if (!payload.client) {
    throw new Error("Anthropic client unavailable");
  }

  const promptName = selectPrompt(payload.type);
  const promptPath = path.resolve(process.cwd(), "src", "prompts", promptName);
  const promptTemplate = await fs.readFile(promptPath, "utf8");
  const prompt = promptTemplate
    .replaceAll("{target_lang}", payload.lang)
    .replaceAll("{style_guide}", payload.styleGuide.trim())
    .replaceAll("{glossary}", formatGlossary(payload.glossary, payload.lang))
    .replaceAll("{text}", payload.text);

  const response = await payload.client.messages.create({
    model: payload.model,
    max_tokens: 4096,
    temperature: 0.2,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const text = response.content
    .filter((item): item is Anthropic.TextBlock => item.type === "text")
    .map((item) => item.text)
    .join("\n")
    .trim();

  if (!text) {
    throw new Error("Empty translation result");
  }

  return text;
}

function selectPrompt(type: string): string {
  switch (type) {
    case "code":
      return "code-comment.txt";
    case "heading":
      return "heading.txt";
    case "table":
      return "table.txt";
    default:
      return "paragraph.txt";
  }
}

function createAnthropicClient(): Anthropic {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is required unless --mock is used");
  }

  return new Anthropic({ apiKey });
}

async function readGlossary(): Promise<GlossaryTerm[]> {
  const file = await fs.readFile(path.resolve(process.cwd(), "src", "glossary.yaml"), "utf8");
  const parsed = YAML.parse(file) as { terms?: GlossaryTerm[] };
  return parsed.terms ?? [];
}

function formatGlossary(terms: GlossaryTerm[], lang: string): string {
  return terms
    .filter((term) => term[lang])
    .map((term) => `- ${term.source} => ${term[lang]}`)
    .join("\n");
}

function parseArgs(args: string[]): TranslateOptions {
  const options: TranslateOptions = {
    force: false,
    langs: ["zh-Hant", "ja"],
    mock: false,
    model: "claude-sonnet-4-5",
    source: "",
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--source") {
      options.source = args[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (arg === "--langs") {
      options.langs = (args[index + 1] ?? "")
        .split(",")
        .map((lang) => lang.trim())
        .filter(Boolean);
      index += 1;
      continue;
    }

    if (arg === "--model") {
      options.model = args[index + 1] ?? options.model;
      index += 1;
      continue;
    }

    if (arg === "--mock") {
      options.mock = true;
      continue;
    }

    if (arg === "--force") {
      options.force = true;
      continue;
    }

    if (arg.startsWith("--")) {
      throw new Error(`Unknown argument: ${arg}`);
    }

    if (!options.source) {
      options.source = arg;
      continue;
    }

    throw new Error(`Unexpected positional argument: ${arg}`);
  }

  if (!options.source) {
    throw new Error("Missing required --source argument");
  }

  if (options.langs.length === 0) {
    throw new Error("At least one target language is required");
  }

  return options;
}

async function updateSyncState(
  sourcePath: string,
  outputPath: string,
  langs: string[],
  blocks: BilingualBlock[],
): Promise<void> {
  const syncStatePath = path.resolve(process.cwd(), "..", "sync-state.json");
  const current = JSON.parse(await fs.readFile(syncStatePath, "utf8")) as {
    pages: Record<string, unknown>;
    version: number;
  };

  current.pages[sourcePath] = {
    output_path: outputPath,
    languages: langs,
    updated_at: new Date().toISOString(),
    paragraph_ids: blocks.map((block) => block.id),
  };

  await fs.writeFile(syncStatePath, JSON.stringify(current, null, 2), "utf8");
}
