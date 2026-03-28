import { load, type CheerioAPI } from "cheerio";

import type { ExtractedBlock, ExtractedDocument } from "./content.js";

const SITEMAP_URL = "https://support.claude.com/sitemap.xml";

type SupportArticleBlock = {
  type?: string;
  text?: string;
  items?: Array<{ text?: string }>;
};

type SupportArticleContent = {
  articleId?: string;
  blocks?: SupportArticleBlock[];
  lastUpdatedISO?: string;
  title?: string;
};

export async function discoverSupportClaudeUrls(limit?: number): Promise<string[]> {
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
  const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g))
    .map((match) => match[1].trim())
    .filter((url) => isEnglishSupportArticleUrl(url));

  return typeof limit === "number" ? urls.slice(0, limit) : urls;
}

export function extractSupportClaudeArticle(sourceUrl: string, html: string): ExtractedDocument {
  const $ = load(html);
  const payload = JSON.parse($("#__NEXT_DATA__").text()) as {
    props?: {
      pageProps?: {
        articleContent?: SupportArticleContent;
      };
    };
  };
  const article = payload.props?.pageProps?.articleContent;

  if (!article?.title || !Array.isArray(article.blocks)) {
    throw new Error("Unable to locate support.claude.com article payload");
  }

  const blocks = article.blocks
    .map((block) => serializeSupportBlock(block, sourceUrl))
    .filter((block): block is ExtractedBlock => block !== null);

  return {
    sourceUrl,
    title: article.title,
    date: article.lastUpdatedISO ?? null,
    section: "articles",
    blocks,
  };
}

function isEnglishSupportArticleUrl(value: string): boolean {
  const url = new URL(value);
  const parts = url.pathname.split("/").filter(Boolean);

  if (url.hostname !== "support.claude.com") {
    return false;
  }

  return parts.length >= 3 && parts[0] === "en" && parts[1] === "articles";
}

function serializeSupportBlock(block: SupportArticleBlock, sourceUrl: string): ExtractedBlock | null {
  if (block.type === "paragraph") {
    const markdown = normalizeInlineHtml(block.text ?? "", sourceUrl);
    return markdown ? { kind: "paragraph", markdown } : null;
  }

  if (block.type === "heading") {
    const markdown = normalizeInlineHtml(block.text ?? "", sourceUrl);
    return markdown ? { kind: "heading", markdown: `## ${markdown}` } : null;
  }

  if (block.type === "unordered_list" || block.type === "ordered_list") {
    const ordered = block.type === "ordered_list";
    const items = (block.items ?? [])
      .map((item, index) => {
        const markdown = normalizeInlineHtml(item.text ?? "", sourceUrl);
        if (!markdown) {
          return "";
        }

        return ordered ? `${index + 1}. ${markdown}` : `- ${markdown}`;
      })
      .filter(Boolean);

    return items.length ? { kind: "list", markdown: items.join("\n") } : null;
  }

  if (block.type === "quote") {
    const markdown = normalizeInlineHtml(block.text ?? "", sourceUrl);
    return markdown ? { kind: "quote", markdown: `> ${markdown}` } : null;
  }

  return null;
}

function normalizeInlineHtml(value: string, sourceUrl: string): string {
  const $ = load(`<div>${value}</div>`);
  return serializeChildren($, $("div").first().contents().toArray(), sourceUrl)
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function serializeChildren(
  $: CheerioAPI,
  nodes: Array<{ data?: string; name?: string; type?: string; attribs?: Record<string, string>; children?: unknown[] }>,
  sourceUrl: string,
): string {
  return nodes
    .map((node) => {
      if (node.type === "text") {
        return node.data ?? "";
      }

      if (node.type !== "tag") {
        return "";
      }

      const element = $(node as any);
      const inner = serializeChildren(
        $,
        element.contents().toArray() as Array<{ data?: string; name?: string; type?: string; attribs?: Record<string, string>; children?: unknown[] }>,
        sourceUrl,
      );
      const text = inner.replace(/\s+/g, " ").trim();

      switch (node.name) {
        case "a": {
          const href = absolutizeUrl(element.attr("href") ?? "", sourceUrl);
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
        case "br":
          return "\n";
        default:
          return inner;
      }
    })
    .join("");
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
