import fs from "node:fs/promises";
import path from "node:path";

import { runWithConcurrency } from "./lib/batch.js";
import { discoverClaudeUrls, extractClaudePage } from "./lib/claude-site.js";
import { fetchText } from "./lib/http.js";
import { writeSectionManifest } from "./lib/manifest.js";
import { buildMarkdownDocument, buildOutputPath } from "./lib/markdown.js";

type CrawlFailure = {
  url: string;
  error: string;
};

type ManifestItem = {
  block_count: number;
  date: string | null;
  output_path: string;
  source_url: string;
  title: string;
};

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const urls = await discoverClaudeUrls(options.limit, options.sections);
  console.log(`Discovered ${urls.length} claude.com URLs`);

  let successCount = 0;
  const failures: CrawlFailure[] = [];
  const itemsBySection = new Map<string, ManifestItem[]>();
  const savedPaths: string[] = [];

  await runWithConcurrency(urls, options.concurrency, async (url, index) => {
    try {
      const html = await fetchText(url, { retries: options.retries });
      const page = extractClaudePage(url, html);
      const markdown = buildMarkdownDocument(page);
      const outputPath = path.resolve(process.cwd(), buildOutputPath(page.sourceUrl));

      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, markdown, "utf8");

      const sectionItems = itemsBySection.get(page.section) ?? [];
      sectionItems.push({
        block_count: page.blocks.length,
        date: page.date,
        output_path: outputPath,
        source_url: page.sourceUrl,
        title: page.title,
      });
      itemsBySection.set(page.section, sectionItems);

      successCount += 1;
      savedPaths.push(outputPath);
      console.log(`[ok ${index + 1}/${urls.length}] ${page.title}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push({ url, error: message });
      console.error(`[failed ${index + 1}/${urls.length}] ${url}`);
      console.error(message);
    }
  });

  for (const [section, items] of itemsBySection) {
    await writeSectionManifest({
      site: "claude.com",
      section,
      items,
    });
  }

  await writeRunArtifacts({
    concurrency: options.concurrency,
    failureCount: failures.length,
    failures,
    retries: options.retries,
    savedPaths,
    successCount,
    urlsDiscovered: urls.length,
  });

  console.log(`Finished: ${successCount}/${urls.length} pages saved`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

type CrawlOptions = {
  concurrency: number;
  limit?: number;
  retries: number;
  sections?: string[];
};

function parseArgs(args: string[]): CrawlOptions {
  const options: CrawlOptions = {
    concurrency: 3,
    retries: 2,
  };

  let positionalLimit: number | undefined;
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--concurrency") {
      options.concurrency = parseNumberArg(arg, args[index + 1]);
      index += 1;
      continue;
    }

    if (arg === "--retries") {
      options.retries = parseNumberArg(arg, args[index + 1]);
      index += 1;
      continue;
    }

    if (arg === "--limit") {
      positionalLimit = parseNumberArg(arg, args[index + 1]);
      index += 1;
      continue;
    }

    if (arg === "--sections") {
      options.sections = parseListArg(arg, args[index + 1]);
      index += 1;
      continue;
    }

    if (arg.startsWith("--")) {
      throw new Error(`Unknown argument: ${arg}`);
    }

    positionalLimit = parseNumberArg("limit", arg);
  }

  if (typeof positionalLimit === "number") {
    options.limit = positionalLimit;
  }

  return options;
}

function parseNumberArg(flag: string, value: string | undefined): number {
  if (!value) {
    throw new Error(`Missing value for ${flag}`);
  }

  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    throw new Error(`Invalid value for ${flag}: ${value}`);
  }

  return parsed;
}

function parseListArg(flag: string, value: string | undefined): string[] {
  if (!value) {
    throw new Error(`Missing value for ${flag}`);
  }

  const items = value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (items.length === 0) {
    throw new Error(`Invalid value for ${flag}: ${value}`);
  }

  return items;
}

async function writeRunArtifacts(payload: {
  concurrency: number;
  failureCount: number;
  failures: CrawlFailure[];
  retries: number;
  savedPaths: string[];
  successCount: number;
  urlsDiscovered: number;
}): Promise<void> {
  const outputDir = path.resolve(process.cwd(), "output", "_runs");
  await fs.mkdir(outputDir, { recursive: true });

  const timestamp = new Date().toISOString().replace(/[:]/g, "-");
  const reportPath = path.join(outputDir, `claude-site-run-${timestamp}.json`);
  const failurePath = path.join(outputDir, "claude-site-failures.json");

  await fs.writeFile(
    reportPath,
    JSON.stringify(
      {
        created_at: new Date().toISOString(),
        crawler: "claude-site",
        site: "claude.com",
        ...payload,
      },
      null,
      2,
    ),
    "utf8",
  );

  await fs.writeFile(
    failurePath,
    JSON.stringify(
      {
        created_at: new Date().toISOString(),
        crawler: "claude-site",
        site: "claude.com",
        failures: payload.failures,
      },
      null,
      2,
    ),
    "utf8",
  );
}
