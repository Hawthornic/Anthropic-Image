import { load, type CheerioAPI } from "cheerio";

import type { ExtractedBlock, ExtractedDocument } from "./content.js";

const SITEMAP_URL = "https://platform.claude.com/sitemap.xml";

type HtmlNode = {
  attribs?: Record<string, string>;
  children?: HtmlNode[];
  data?: string;
  name?: string;
  type?: string;
};

export async function discoverPlatformDocsUrls(limit?: number): Promise<string[]> {
  const response = await fetch(SITEMAP_URL, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Request to ${SITEMAP_URL} failed with status ${response.status}`);
  }

  const xml = await response.text();
  const urls = Array.from(
    new Set(
      Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g))
        .map((match) => match[1].trim())
        .filter((url) => isPlatformDocsUrl(url)),
    ),
  ).sort();

  return typeof limit === "number" ? urls.slice(0, limit) : urls;
}

export function extractPlatformDocsPage(sourceUrl: string, html: string): ExtractedDocument {
  const $ = load(html);
  const root = selectContentRoot($);
  const title = collapseWhitespace($("h1").first().text()) || collapseWhitespace($("title").text());

  if (!root.length || !title) {
    throw new Error("Unable to locate platform docs content");
  }

  const blocks: ExtractedBlock[] = [];
  for (const child of root.children().toArray()) {
    collectBlocks($, child as HtmlNode, sourceUrl, blocks);
  }

  if (blocks.length === 0) {
    throw new Error("Unable to extract platform docs content blocks");
  }

  return {
    sourceUrl,
    title: title.replace(/\s*\|\s*Anthropic API\s*$/i, ""),
    date: null,
    section: "docs",
    blocks,
  };
}

function isPlatformDocsUrl(value: string): boolean {
  const url = new URL(value);
  return url.hostname === "platform.claude.com" && url.pathname.startsWith("/docs/en/");
}

function selectContentRoot($: CheerioAPI) {
  const candidates = $("article, main article, main .prose")
    .toArray()
    .map((node) => $(node as never))
    .sort((left, right) => {
      const paragraphDelta = right.find("p").length - left.find("p").length;
      if (paragraphDelta !== 0) {
        return paragraphDelta;
      }

      return right.text().length - left.text().length;
    });

  if (candidates[0]?.length) {
    return candidates[0];
  }

  return $("main").first();
}

function collectBlocks(
  $: CheerioAPI,
  node: HtmlNode,
  sourceUrl: string,
  blocks: ExtractedBlock[],
): void {
  if (node.type !== "tag" || !node.name) {
    return;
  }

  const element = $(node as never);
  if (element.closest("nav, aside, script, style, noscript").length || element.attr("aria-hidden") === "true") {
    return;
  }

  const block = serializeBlock($, node, sourceUrl);
  if (block) {
    const prev = blocks.at(-1);
    if (!prev || prev.kind !== block.kind || prev.markdown !== block.markdown) {
      blocks.push(block);
    }
    return;
  }

  for (const child of element.children().toArray()) {
    collectBlocks($, child as HtmlNode, sourceUrl, blocks);
  }
}

function serializeBlock($: CheerioAPI, node: HtmlNode, sourceUrl: string): ExtractedBlock | null {
  const tagName = node.name?.toLowerCase();
  if (!tagName) {
    return null;
  }

  if (tagName === "p") {
    const markdown = collapseWhitespace(serializeChildren($, node, sourceUrl));
    return markdown ? { kind: "paragraph", markdown } : null;
  }

  if (/^h[1-6]$/.test(tagName)) {
    const depth = Number.parseInt(tagName.slice(1), 10);
    const markdown = collapseWhitespace(serializeChildren($, node, sourceUrl));
    return markdown ? { kind: "heading", markdown: `${"#".repeat(depth)} ${markdown}` } : null;
  }

  if (tagName === "ul" || tagName === "ol") {
    const ordered = tagName === "ol";
    const items = (node.children ?? [])
      .filter((child) => child.type === "tag" && child.name === "li")
      .map((child, index) => {
        const marker = ordered ? `${index + 1}. ` : "- ";
        const text = collapseWhitespace(serializeChildren($, child, sourceUrl));
        return text ? `${marker}${text}` : "";
      })
      .filter(Boolean);

    return items.length ? { kind: "list", markdown: items.join("\n") } : null;
  }

  if (tagName === "blockquote") {
    const markdown = collapseWhitespace(serializeChildren($, node, sourceUrl));
    return markdown ? { kind: "quote", markdown: `> ${markdown}` } : null;
  }

  if (tagName === "pre") {
    const code = $(node as never).find("code").first().text() || $(node as never).text();
    const markdown = code.trimEnd();
    return markdown ? { kind: "code", markdown: `\`\`\`\n${markdown}\n\`\`\`` } : null;
  }

  if (tagName === "hr") {
    return { kind: "hr", markdown: "---" };
  }

  return null;
}

function serializeChildren($: CheerioAPI, node: HtmlNode, sourceUrl: string): string {
  return (node.children ?? []).map((child) => serializeInline($, child, sourceUrl)).join("");
}

function serializeInline($: CheerioAPI, node: HtmlNode, sourceUrl: string): string {
  if (node.type === "text") {
    return node.data ?? "";
  }

  if (node.type !== "tag" || !node.name) {
    return "";
  }

  const tagName = node.name.toLowerCase();
  if (tagName === "br") {
    return "\n";
  }

  const inner = serializeChildren($, node, sourceUrl);
  const text = collapseWhitespace(inner);

  switch (tagName) {
    case "a": {
      const href = absolutizeUrl(node.attribs?.href ?? "", sourceUrl);
      return href ? `[${text || href}](${href})` : text;
    }
    case "strong":
    case "b":
      return text ? `**${text}**` : "";
    case "em":
    case "i":
      return text ? `*${text}*` : "";
    case "code":
      return text ? `\`${text}\`` : "";
    default:
      return inner;
  }
}

function collapseWhitespace(value: string): string {
  return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function absolutizeUrl(value: string, sourceUrl: string): string {
  if (!value) {
    return "";
  }

  try {
    return new URL(value, sourceUrl).href;
  } catch {
    return value;
  }
}
