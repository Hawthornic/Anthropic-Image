import { load } from "cheerio";

export type ExtractedBlock = {
  kind: "paragraph" | "heading" | "list" | "image" | "quote" | "code" | "hr";
  markdown: string;
};

export type ExtractedArticle = {
  sourceUrl: string;
  title: string;
  date: string | null;
  section: string;
  blocks: ExtractedBlock[];
};

type HtmlNode = {
  type?: string;
  name?: string;
  data?: string;
  attribs?: Record<string, string>;
  children?: HtmlNode[];
};

export function extractAnthropicArticle(sourceUrl: string, html: string): ExtractedArticle {
  const $ = load(html);
  const pathnameParts = new URL(sourceUrl).pathname.split("/").filter(Boolean);
  const section = pathnameParts[0] ?? "unknown";
  const header = $(".PostDetail-module-scss-module__UQuRMa__header").first();
  const body = $(".Body-module-scss-module__z40yvW__body").first();
  const footnotes = $(".PostDetail-module-scss-module__UQuRMa__footnotes").first();

  if (!header.length || !body.length) {
    throw new Error("Unable to locate Anthropic article body");
  }

  const title = collapseWhitespace(header.find("h1").first().text() || $("title").text());
  const dateText = collapseWhitespace(header.find("time").first().text() || header.find(".agate").first().text());

  const blocks: ExtractedBlock[] = [];
  for (const child of body.children().toArray()) {
    const block = serializeBlock($, child as HtmlNode, sourceUrl);
    if (block) {
      blocks.push(block);
    }
  }

  if (footnotes.length) {
    const footnoteHeading = collapseWhitespace(footnotes.find("h1,h2,h3,h4,h5,h6").first().text());
    if (footnoteHeading) {
      blocks.push({ kind: "heading", markdown: `## ${footnoteHeading}` });
    }

    for (const paragraph of footnotes.children("p").toArray()) {
      const markdown = collapseWhitespace(serializeChildren($, paragraph as HtmlNode, sourceUrl));
      if (markdown) {
        blocks.push({ kind: "paragraph", markdown });
      }
    }
  }

  return {
    sourceUrl,
    title,
    date: dateText || null,
    section,
    blocks,
  };
}

function serializeBlock($: ReturnType<typeof load>, node: HtmlNode, sourceUrl: string): ExtractedBlock | null {
  if (node.type !== "tag" || !node.name) {
    return null;
  }

  const tagName = node.name.toLowerCase();
  if (tagName === "div") {
    const className = node.attribs?.class ?? "";
    if (className.includes("media-column")) {
      const figure = $(node).find("figure").first().get(0) as HtmlNode | undefined;
      return figure ? serializeBlock($, figure, sourceUrl) : null;
    }
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
      .map((item, index) => {
        const marker = ordered ? `${index + 1}. ` : "- ";
        const value = collapseWhitespace(serializeChildren($, item, sourceUrl));
        return value ? `${marker}${value}` : "";
      })
      .filter(Boolean);
    return items.length ? { kind: "list", markdown: items.join("\n") } : null;
  }

  if (tagName === "blockquote") {
    const markdown = collapseWhitespace(serializeChildren($, node, sourceUrl));
    return markdown ? { kind: "quote", markdown: `> ${markdown}` } : null;
  }

  if (tagName === "pre") {
    const code = $(node).find("code").first().text() || $(node).text();
    const markdown = code.trimEnd();
    return markdown ? { kind: "code", markdown: `\`\`\`\n${markdown}\n\`\`\`` } : null;
  }

  if (tagName === "hr") {
    return { kind: "hr", markdown: "---" };
  }

  if (tagName === "figure") {
    const image = $(node).find("img").first();
    if (!image.length) {
      return null;
    }

    const alt = collapseWhitespace(image.attr("alt") ?? "");
    const src = absolutizeUrl(image.attr("src") ?? "", sourceUrl);
    const caption = collapseWhitespace($(node).find("figcaption").first().text());
    const lines = [`![${alt}](${src})`];
    if (caption) {
      lines.push(caption);
    }
    return { kind: "image", markdown: lines.join("\n\n") };
  }

  return null;
}

function serializeChildren($: ReturnType<typeof load>, node: HtmlNode, sourceUrl: string): string {
  return (node.children ?? []).map((child) => serializeInline($, child, sourceUrl)).join("");
}

function serializeInline($: ReturnType<typeof load>, node: HtmlNode, sourceUrl: string): string {
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
    case "sup":
      return text ? `^${text}^` : "";
    default:
      return inner;
  }
}

function escapeMarkdown(value: string): string {
  return value.replace(/\\/g, "\\\\");
}

function collapseWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").replace(/\u00a0/g, " ").trim();
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
