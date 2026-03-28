import fs from "node:fs/promises";
import path from "node:path";

import { discoverResearchArticleUrls } from "./lib/anthropic-sitemap.js";
import { extractAnthropicArticle } from "./lib/extract-anthropic-article.js";
import { fetchText } from "./lib/http.js";
import { buildMarkdownDocument, buildOutputPath } from "./lib/markdown.js";

async function main(): Promise<void> {
  const limitArg = process.argv[2];
  const limit = limitArg ? Number.parseInt(limitArg, 10) : undefined;
  if (limitArg && Number.isNaN(limit)) {
    throw new Error(`Invalid limit: ${limitArg}`);
  }

  const urls = await discoverResearchArticleUrls(limit);
  console.log(`Discovered ${urls.length} research article URLs`);

  let successCount = 0;
  for (const url of urls) {
    try {
      const html = await fetchText(url);
      const article = extractAnthropicArticle(url, html);
      const markdown = buildMarkdownDocument(article);
      const outputPath = path.resolve(process.cwd(), buildOutputPath(article.sourceUrl));

      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      await fs.writeFile(outputPath, markdown, "utf8");

      successCount += 1;
      console.log(`[ok] ${article.title}`);
    } catch (error) {
      console.error(`[failed] ${url}`);
      console.error(error);
    }
  }

  console.log(`Finished: ${successCount}/${urls.length} pages saved`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
