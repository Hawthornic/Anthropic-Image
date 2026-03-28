import fs from "node:fs/promises";
import path from "node:path";

import { extractAnthropicArticle } from "./lib/extract-anthropic-article.js";
import { buildMarkdownDocument, buildOutputPath } from "./lib/markdown.js";

const DEFAULT_URL = "https://www.anthropic.com/research/constitutional-classifiers";

async function main(): Promise<void> {
  const targetUrl = process.argv[2] ?? DEFAULT_URL;
  const response = await fetch(targetUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const html = await response.text();
  const article = extractAnthropicArticle(targetUrl, html);
  const markdown = buildMarkdownDocument(article);
  const outputPath = path.resolve(process.cwd(), buildOutputPath(article.sourceUrl));

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, markdown, "utf8");

  console.log(`Saved ${article.blocks.length} blocks to ${outputPath}`);
  console.log(`Title: ${article.title}`);
  console.log(`Date: ${article.date ?? "unknown"}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
