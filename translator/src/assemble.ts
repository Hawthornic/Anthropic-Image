import fs from "node:fs/promises";
import path from "node:path";

export type SourceBlock = {
  id: string;
  kind: "code" | "heading" | "hr" | "list" | "paragraph" | "quote" | "table";
  markdown: string;
};

export type SourceDocument = {
  blocks: SourceBlock[];
  metadata: Record<string, string>;
  rawBody: string;
};

export type BilingualBlock = {
  id: string;
  kind: SourceBlock["kind"];
  source: string;
  translations: Record<string, string>;
};

const FRONTMATTER_PATTERN = /^---\n([\s\S]*?)\n---\n*/;
const PARA_PATTERN = /<!--\s*para:(\d+)\s*-->\n([\s\S]*?)(?=(?:\n<!--\s*para:\d+\s*-->)|\s*$)/g;

export async function readSourceDocument(sourcePath: string): Promise<SourceDocument> {
  const markdown = await fs.readFile(sourcePath, "utf8");
  return parseSourceDocument(markdown);
}

export function parseSourceDocument(markdown: string): SourceDocument {
  const frontmatterMatch = markdown.match(FRONTMATTER_PATTERN);
  const metadata = frontmatterMatch ? parseFrontmatter(frontmatterMatch[1]) : {};
  const rawBody = frontmatterMatch ? markdown.slice(frontmatterMatch[0].length) : markdown;
  const blocks = Array.from(rawBody.matchAll(PARA_PATTERN)).map((match) => {
    const id = match[1];
    const blockMarkdown = match[2].trim();
    return {
      id,
      kind: inferBlockKind(blockMarkdown),
      markdown: blockMarkdown,
    };
  });

  return {
    metadata,
    rawBody,
    blocks,
  };
}

export function assembleBilingualMarkdown(payload: {
  metadata: Record<string, string>;
  blocks: BilingualBlock[];
  targetLangs: string[];
}): string {
  const lines: string[] = ["---"];

  for (const [key, value] of Object.entries(payload.metadata)) {
    lines.push(`${key}: ${JSON.stringify(value)}`);
  }

  lines.push(`languages: [${["en", ...payload.targetLangs].map((lang) => JSON.stringify(lang)).join(", ")}]`);
  lines.push("---", "");

  for (const block of payload.blocks) {
    lines.push(`<!-- para:${block.id} -->`);
    lines.push("::: bilingual");
    lines.push("::: en");
    lines.push(block.source);
    lines.push(":::");

    for (const lang of payload.targetLangs) {
      lines.push(`::: ${lang}`);
      lines.push(block.translations[lang] ?? "");
      lines.push(":::");
    }

    lines.push(":::", "");
  }

  return `${lines.join("\n").trim()}\n`;
}

export function mapCrawlerOutputToContentPath(sourcePath: string): string {
  const sourceRoot = path.resolve(process.cwd(), "..", "crawler", "output");
  const relativePath = path.relative(sourceRoot, sourcePath);
  const normalizedPath = relativePath.replace(/index\.html\.md$/, "index.md");
  return path.resolve(process.cwd(), "..", "site", "content", normalizedPath);
}

export function inferBlockKind(markdown: string): SourceBlock["kind"] {
  if (markdown === "---") {
    return "hr";
  }

  if (markdown.startsWith("```")) {
    return "code";
  }

  if (/^#{1,6}\s/.test(markdown)) {
    return "heading";
  }

  if (/^(?:- |\d+\. )/m.test(markdown)) {
    return "list";
  }

  if (/^\|.+\|$/m.test(markdown)) {
    return "table";
  }

  if (/^>\s/m.test(markdown)) {
    return "quote";
  }

  return "paragraph";
}

function parseFrontmatter(frontmatter: string): Record<string, string> {
  const entries = frontmatter
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separator = line.indexOf(":");
      if (separator === -1) {
        return null;
      }

      const key = line.slice(0, separator).trim();
      const rawValue = line.slice(separator + 1).trim();
      return [key, rawValue.replace(/^"(.*)"$/, "$1")] as const;
    })
    .filter((entry): entry is readonly [string, string] => entry !== null);

  return Object.fromEntries(entries);
}
