import path from "node:path";

import type { ExtractedDocument } from "./content.js";

export function toIsoDate(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString().slice(0, 10);
}

export function buildMarkdownDocument(article: ExtractedDocument): string {
  const lines: string[] = [
    "---",
    `source_url: ${article.sourceUrl}`,
    `title: ${quoteYaml(article.title)}`,
    `section: ${article.section}`,
  ];

  const isoDate = toIsoDate(article.date);
  if (isoDate) {
    lines.push(`date: ${isoDate}`);
  }

  lines.push("---", "");

  let paraIndex = 1;
  for (const block of article.blocks) {
    const normalizedMarkdown = normalizeMarkdownBlock(block.markdown);
    if (block.kind !== "hr") {
      lines.push(`<!-- para:${String(paraIndex).padStart(4, "0")} -->`);
      paraIndex += 1;
    }
    lines.push(normalizedMarkdown, "");
  }

  return `${lines.join("\n").trim()}\n`;
}

export function buildOutputPath(sourceUrl: string): string {
  const url = new URL(sourceUrl);
  const slugParts = url.pathname.split("/").filter(Boolean);
  const fileName = `${slugParts.pop() ?? "index"}.md`;
  return path.join("output", url.hostname, ...slugParts, fileName);
}

function quoteYaml(value: string): string {
  return JSON.stringify(value);
}

function normalizeMarkdownBlock(value: string): string {
  const match = value.match(/^(\*{1,4})(?!\s)([\s\S]+)$/);
  if (!match) {
    return value;
  }

  const marker = match[1];
  return value.endsWith(marker) ? value : `${value}${marker}`;
}
