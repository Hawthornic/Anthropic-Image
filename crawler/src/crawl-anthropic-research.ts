import fs from "node:fs/promises";
import path from "node:path";

import { discoverResearchArticleUrls } from "./lib/anthropic-sitemap.js";
import { runWithConcurrency } from "./lib/batch.js";
import { extractAnthropicArticle } from "./lib/extract-anthropic-article.js";
import { fetchText } from "./lib/http.js";
import { buildMarkdownDocument, buildOutputPath } from "./lib/markdown.js";

type CrawlFailure = {
  url: string;
  error: string;
};

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));

  const urls = await discoverResearchArticleUrls(options.limit);
  console.log(`Discovered ${urls.length} research article URLs`);

  let successCount = 0;
  const failures: CrawlFailure[] = [];
  const savedPaths: string[] = [];

  await runWithConcurrency(urls, options.concurrency, async (url, index) => {
    try {
      const html = await fetchText(url, { retries: options.retries });
      const article = extractAnthropicArticle(url, html);
      const markdown = buildMarkdownDocument(article);
      const outputPath = path.resolve(process.cwd(), buildOutputPath(article.sourceUrl));

      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, markdown, "utf8");

      successCount += 1;
      savedPaths.push(outputPath);
      console.log(`[ok ${index + 1}/${urls.length}] ${article.title}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push({ url, error: message });
      console.error(`[failed ${index + 1}/${urls.length}] ${url}`);
      console.error(message);
    }
  });

  await writeRunArtifacts({
    urlsDiscovered: urls.length,
    successCount,
    failureCount: failures.length,
    concurrency: options.concurrency,
    retries: options.retries,
    failures,
    savedPaths,
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
  const reportPath = path.join(outputDir, `anthropic-research-run-${timestamp}.json`);
  const failurePath = path.join(outputDir, "anthropic-research-failures.json");

  await fs.writeFile(
    reportPath,
    JSON.stringify(
      {
        created_at: new Date().toISOString(),
        crawler: "anthropic-research",
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
        failures: payload.failures,
      },
      null,
      2,
    ),
    "utf8",
  );
}
