import { load, type CheerioAPI } from "cheerio";

import type { ExtractedBlock, ExtractedDocument } from "./content.js";

type DistillSiteConfig = {
  homeUrl: string;
  section: string;
  siteTitle: string;
};

type HtmlNode = {
  attribs?: Record<string, string>;
  children?: HtmlNode[];
  data?: string;
  name?: string;
  type?: string;
};

export async function discoverDistillArticleUrls(
  config: DistillSiteConfig,
  limit?: number,
): Promise<string[]> {
  const response = await fetch(config.homeUrl, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Request to ${config.homeUrl} failed with status ${response.status}`);
  }

  const html = await response.text();
  const $ = load(html);
  const urls = Array.from(
    new Set(
      $("a[href]")
        .toArray()
        .map((node) => $(node).attr("href") ?? "")
        .map((href) => absolutizeUrl(href, config.homeUrl))
        .filter((href) => isDistillArticleUrl(href, config.homeUrl)),
    ),
  ).sort();

  return typeof limit === "number" ? urls.slice(0, limit) : urls;
}

export function extractDistillArticle(
  sourceUrl: string,
  html: string,
  config: DistillSiteConfig,
): ExtractedDocument {
  const $ = load(html);
  const article = $("d-article").first();
  const title =
    collapseWhitespace($("d-title h1").first().text()) ||
    collapseWhitespace($("h1").first().text()) ||
    collapseWhitespace($("title").text());

  if (!article.length || !title) {
    throw new Error(`Unable to locate ${config.siteTitle} article content`);
  }

  const blocks: ExtractedBlock[] = [];
  for (const child of article.children().toArray()) {
    collectBlocks($, child as HtmlNode, sourceUrl, blocks);
  }

  dedupeLeadingTitle(blocks, title);
  sanitizeBlocks(blocks, extractDate($, article));

  if (blocks.length === 0) {
    throw new Error(`Unable to extract ${config.siteTitle} article content blocks`);
  }

  return {
    sourceUrl,
    title,
    date: extractDate($, article),
    section: config.section,
    blocks,
  };
}

function isDistillArticleUrl(value: string, homeUrl: string): boolean {
  try {
    const articleUrl = new URL(value);
    const siteUrl = new URL(homeUrl);
    if (articleUrl.hostname !== siteUrl.hostname) {
      return false;
    }

    const path = articleUrl.pathname.replace(/^\/+|\/+$/g, "");
    if (!path || path === "index.html") {
      return false;
    }

    if (path.startsWith("anthropic-serve/")) {
      return false;
    }

    return /^(20\d{2})\/.+/.test(path);
  } catch {
    return false;
  }
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
  if (shouldSkipElement(element)) {
    return;
  }

  const block = serializeBlock($, node, sourceUrl);
  if (block) {
    const previous = blocks.at(-1);
    if (!previous || previous.kind !== block.kind || previous.markdown !== block.markdown) {
      blocks.push(block);
    }
    return;
  }

  for (const child of element.children().toArray()) {
    collectBlocks($, child as HtmlNode, sourceUrl, blocks);
  }
}

function shouldSkipElement(element: ReturnType<CheerioAPI>): boolean {
  if (element.closest("script, style, noscript, nav").length) {
    return true;
  }

  if (element.closest("#hubspot-form-container, form").length) {
    return true;
  }

  if (element.attr("hidden") != null || element.attr("aria-hidden") === "true") {
    return true;
  }

  const style = (element.attr("style") ?? "").toLowerCase();
  if (style.includes("display: none")) {
    return true;
  }

  return false;
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

  if (tagName === "figure") {
    const imageUrl = absolutizeUrl($(node as never).find("img").first().attr("src") ?? "", sourceUrl);
    const caption = collapseWhitespace($(node as never).find("figcaption").first().text());
    if (!imageUrl) {
      return caption ? { kind: "paragraph", markdown: caption } : null;
    }

    if (imageUrl.startsWith("data:")) {
      return caption ? { kind: "paragraph", markdown: caption } : null;
    }

    const markdown = caption ? `![${caption}](${imageUrl})` : `![](${imageUrl})`;
    return { kind: "image", markdown };
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

  if (shouldSkipElement($(node as never))) {
    return "";
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
    case "sup":
      return text ? `^${text}^` : "";
    case "sub":
      return text ? `~${text}~` : "";
    default:
      return inner;
  }
}

function extractDate($: CheerioAPI, article: ReturnType<CheerioAPI>): string | null {
  const sectionAuthors = article.find(".section-authors").first();
  if (sectionAuthors.length) {
    const floated = collapseWhitespace(sectionAuthors.find("[style*='float: right']").first().text());
    if (looksLikeDate(floated)) {
      return floated;
    }
  }

  for (const paragraph of article.children("p").toArray().slice(0, 3)) {
    const text = collapseWhitespace($(paragraph).text());
    if (looksLikeDate(text)) {
      return text;
    }
  }

  return null;
}

function looksLikeDate(value: string): boolean {
  return /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(
    value,
  );
}

function dedupeLeadingTitle(blocks: ExtractedBlock[], title: string): void {
  const normalizedTitle = collapseWhitespace(title).toLowerCase();
  while (blocks.length > 0) {
    const first = blocks[0];
    if (first.kind === "heading" && collapseWhitespace(first.markdown.replace(/^#+\s*/, "")).toLowerCase() === normalizedTitle) {
      blocks.shift();
      continue;
    }
    break;
  }
}

function sanitizeBlocks(blocks: ExtractedBlock[], date: string | null): void {
  while (blocks.length > 0) {
    const first = blocks[0];
    if (first.kind === "paragraph" && date && collapseWhitespace(first.markdown) === date) {
      blocks.shift();
      continue;
    }
    break;
  }

  while (blocks.length > 0) {
    const last = blocks.at(-1);
    if (!last) {
      break;
    }

    const normalized = collapseWhitespace(last.markdown.replace(/^#+\s*/, "")).toLowerCase();
    if (normalized === "subscribe") {
      blocks.pop();
      continue;
    }

    break;
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
