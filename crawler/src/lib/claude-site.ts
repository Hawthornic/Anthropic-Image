import { load, type CheerioAPI } from "cheerio";

import type { ExtractedBlock, ExtractedDocument } from "./content.js";

const SITEMAP_URL = "https://claude.com/sitemap.xml";
const LOCALE_PREFIXES = new Set(["de-de", "fr-fr", "ja-jp", "ko-kr"]);

type HtmlNode = {
  attribs?: Record<string, string>;
  children?: HtmlNode[];
  data?: string;
  name?: string;
  parent?: HtmlNode;
  type?: string;
};

export async function discoverClaudeUrls(limit?: number): Promise<string[]> {
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
        .filter((url) => isEnglishClaudeUrl(url)),
    ),
  ).sort();

  return typeof limit === "number" ? urls.slice(0, limit) : urls;
}

export function extractClaudePage(sourceUrl: string, html: string): ExtractedDocument {
  const $ = load(html);
  const root = selectContentRoot($, sourceUrl);
  const title = selectTitle($);
  const date = selectDate($);

  if (!root.length || !title) {
    throw new Error("Unable to locate claude.com page content");
  }

  const blocks: ExtractedBlock[] = [];
  const seen = new Set<string>();

  for (const child of root.children().toArray()) {
    collectBlocks($, child as HtmlNode, sourceUrl, blocks, seen);
  }

  if (blocks.length === 0) {
    throw new Error("Unable to extract claude.com content blocks");
  }

  return {
    sourceUrl,
    title,
    date,
    section: deriveSection(sourceUrl),
    blocks,
  };
}

function isEnglishClaudeUrl(value: string): boolean {
  const url = new URL(value);
  const parts = url.pathname.split("/").filter(Boolean);

  if (url.hostname !== "claude.com") {
    return false;
  }

  if (parts[0] && LOCALE_PREFIXES.has(parts[0])) {
    return false;
  }

  return true;
}

function selectContentRoot($: CheerioAPI, sourceUrl: string) {
  const pathname = new URL(sourceUrl).pathname;

  if (pathname.startsWith("/blog/")) {
    const richText = $(".u-rich-text-blog").first();
    if (richText.length) {
      return richText;
    }
  }

  return $("main").first();
}

function selectTitle($: CheerioAPI): string | null {
  const heading = collapseWhitespace($("main h1").first().text());
  if (heading) {
    return heading;
  }

  const documentTitle = collapseWhitespace($("title").text()).replace(/\s*\|\s*Claude\s*$/i, "");
  return documentTitle || null;
}

function selectDate($: CheerioAPI): string | null {
  const scripts = $('script[type="application/ld+json"]')
    .map((_, element) => $(element).text())
    .get();

  for (const script of scripts) {
    const values = extractJsonValues(script);
    for (const value of values) {
      if (typeof value?.datePublished === "string") {
        return value.datePublished;
      }
    }
  }

  const datetime = $("time").first().attr("datetime");
  if (datetime) {
    return datetime;
  }

  return null;
}

function extractJsonValues(raw: string): Array<Record<string, unknown>> {
  const values: Array<Record<string, unknown>> = [];

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      for (const item of parsed) {
        if (item && typeof item === "object") {
          values.push(item as Record<string, unknown>);
        }
      }
    } else if (parsed && typeof parsed === "object") {
      values.push(parsed as Record<string, unknown>);
      const graph = (parsed as { ["@graph"]?: unknown })["@graph"];
      if (Array.isArray(graph)) {
        for (const item of graph) {
          if (item && typeof item === "object") {
            values.push(item as Record<string, unknown>);
          }
        }
      }
    }
  } catch {
    return values;
  }

  return values;
}

function deriveSection(sourceUrl: string): string {
  const parts = new URL(sourceUrl).pathname.split("/").filter(Boolean);
  return parts[0] ?? "home";
}

function collectBlocks(
  $: CheerioAPI,
  node: HtmlNode,
  sourceUrl: string,
  blocks: ExtractedBlock[],
  seen: Set<string>,
): void {
  if (node.type !== "tag" || !node.name) {
    return;
  }

  const element = $(node as never);
  if (shouldSkipElement($, element)) {
    return;
  }

  const block = serializeBlock($, node, sourceUrl);
  if (block) {
    const signature = `${block.kind}:${block.markdown}`;
    if (!seen.has(signature)) {
      blocks.push(block);
      seen.add(signature);
    }
    return;
  }

  for (const child of element.children().toArray()) {
    collectBlocks($, child as HtmlNode, sourceUrl, blocks, seen);
  }
}

function shouldSkipElement($: CheerioAPI, element: ReturnType<CheerioAPI["root"]>): boolean {
  if (element.closest("nav, footer, form, script, style, noscript").length) {
    return true;
  }

  if (element.attr("aria-hidden") === "true") {
    return true;
  }

  const className = element.attr("class") ?? "";
  return (
    className.includes("nav_") ||
    className.includes("footer_") ||
    className.includes("form_") ||
    className.includes("newsletter") ||
    className.includes("locale_picker") ||
    className.includes("breadcrumb")
  );
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
    const image = $(node as never).find("img").first();
    if (!image.length) {
      return null;
    }

    const alt = collapseWhitespace(image.attr("alt") ?? "");
    const src = absolutizeUrl(image.attr("src") ?? "", sourceUrl);
    const caption = collapseWhitespace($(node as never).find("figcaption").first().text());
    const lines = [`![${alt}](${src})`];

    if (caption) {
      lines.push(caption);
    }

    return src ? { kind: "image", markdown: lines.join("\n\n") } : null;
  }

  return null;
}

function serializeChildren($: CheerioAPI, node: HtmlNode, sourceUrl: string): string {
  return (node.children ?? []).map((child) => serializeInline($, child, sourceUrl)).join("");
}

function serializeInline($: CheerioAPI, node: HtmlNode, sourceUrl: string): string {
  if (node.type === "text") {
    return escapeMarkdown(node.data ?? "");
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
    case "em":
    case "i":
      return text ? `*${text}*` : "";
    case "strong":
    case "b":
      return text ? `**${text}**` : "";
    case "code":
      return text ? `\`${text}\`` : "";
    default:
      return inner;
  }
}

function escapeMarkdown(value: string): string {
  return value.replace(/\\/g, "\\\\");
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
