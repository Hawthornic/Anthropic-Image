import fs from "node:fs/promises";
import path from "node:path";

import { extractAnthropicArticle } from "./lib/extract-anthropic-article.js";
import { fetchText } from "./lib/http.js";
import { buildMarkdownDocument, buildOutputPath } from "./lib/markdown.js";

const DEFAULT_URL = "https://www.anthropic.com/research/constitutional-classifiers";

async function main(): Promise<void> {
  const targetUrl = process.argv[2] ?? DEFAULT_URL;
  const html = await fetchText(targetUrl);
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
