const SITEMAP_URL = "https://www.anthropic.com/sitemap.xml";
const EXCLUDED_URLS = new Set<string>([
  // This path currently resolves to Claude Code docs content rather than the Anthropic site article template.
  "https://www.anthropic.com/engineering/claude-code-best-practices",
  // This path currently resolves to claude.com/blog content rather than the Anthropic site article template.
  "https://www.anthropic.com/news/fine-tune-claude-3-haiku",
]);

export type AnthropicSection = "engineering" | "news" | "research";

export async function discoverAnthropicSectionUrls(
  section: AnthropicSection,
  limit?: number,
): Promise<string[]> {
  const xml = await fetchSitemapXml();
  const urls = extractUrls(xml).filter((url) => isAnthropicSectionUrl(url, section));

  return typeof limit === "number" ? urls.slice(0, limit) : urls;
}

async function fetchSitemapXml(): Promise<string> {
  const response = await fetch(SITEMAP_URL, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    },
  });

  if (!response.ok) {
    throw new Error(`Request to ${SITEMAP_URL} failed with status ${response.status}`);
  }

  return response.text();
}

function extractUrls(xml: string): string[] {
  const matches = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g));
  return matches.map((match) => match[1].trim());
}

function isAnthropicSectionUrl(value: string, section: AnthropicSection): boolean {
  const url = new URL(value);
  const parts = url.pathname.split("/").filter(Boolean);

  if (EXCLUDED_URLS.has(value)) {
    return false;
  }

  if (url.hostname !== "www.anthropic.com") {
    return false;
  }

  if (parts[0] !== section) {
    return false;
  }

  if (parts.length !== 2) {
    return false;
  }

  if (section === "research" && parts[1] === "team") {
    return false;
  }

  return true;
}
