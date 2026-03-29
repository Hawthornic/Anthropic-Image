import fs from "node:fs/promises";
import path from "node:path";

export type MirrorEntry = {
  id: string;
  translations: Record<string, string>;
};

export type MirrorDocument = {
  entries: MirrorEntry[];
  metadata: Record<string, string>;
  sourcePath: string;
};

const FRONTMATTER_PATTERN = /^---\n([\s\S]*?)\n---\n*/;
const SOURCE_ENTRY_PATTERN = /<!--\s*para:(\d+)\s*-->\n([\s\S]*?)(?=(?:\n<!--\s*para:\d+\s*-->)|\s*$)/g;
const BILINGUAL_ENTRY_PATTERN = /<!--\s*para:(\d+)\s*-->\n::: bilingual\n([\s\S]*?)\n:::\n(?=(?:<!--\s*para:\d+\s*-->)|\s*$)/g;
const LANGUAGE_PATTERN = /::: ([^\n]+)\n([\s\S]*?)\n:::/g;

export async function listDocumentPaths(): Promise<string[]> {
  const routeMap = new Map<string, string>();

  for (const file of await walkMarkdownFiles(getCrawlerRoot())) {
    if (path.basename(file).startsWith("_")) {
      continue;
    }

    const slug = sourcePathToSlug(file);
    routeMap.set(slug.join("/"), file);
  }

  for (const file of await walkMarkdownFiles(getBilingualRoot())) {
    const slug = sourcePathToSlug(file);
    routeMap.set(slug.join("/"), file);
  }

  return Array.from(routeMap.values()).sort();
}

export async function readMirrorDocument(sourcePath: string): Promise<MirrorDocument> {
  const markdown = await fs.readFile(sourcePath, "utf8");
  const frontmatterMatch = markdown.match(FRONTMATTER_PATTERN);
  const metadata = frontmatterMatch ? parseFrontmatter(frontmatterMatch[1]) : {};
  const body = frontmatterMatch ? markdown.slice(frontmatterMatch[0].length) : markdown;

  if (body.includes("::: bilingual")) {
    return {
      entries: Array.from(body.matchAll(BILINGUAL_ENTRY_PATTERN)).map((match) => ({
        id: match[1],
        translations: Object.fromEntries(
          Array.from(match[2].matchAll(LANGUAGE_PATTERN)).map((langMatch) => [langMatch[1].trim(), langMatch[2].trim()]),
        ),
      })),
      metadata,
      sourcePath,
    };
  }

  return {
    entries: Array.from(body.matchAll(SOURCE_ENTRY_PATTERN)).map((match) => ({
      id: match[1],
      translations: {
        en: match[2].trim(),
      },
    })),
    metadata,
    sourcePath,
  };
}

export function sourcePathToSlug(sourcePath: string): string[] {
  const root = sourcePath.startsWith(getBilingualRoot()) ? getBilingualRoot() : getCrawlerRoot();
  const relative = path.relative(root, sourcePath).replace(/\.md$/, "");
  const parts = relative.split(path.sep).filter(Boolean);

  if (parts.at(-1) === "index") {
    return parts.slice(0, -1);
  }

  if (parts.at(-1) === "index.html") {
    return parts.slice(0, -1);
  }

  return parts;
}

export async function resolveDocumentPath(slug: string[]): Promise<string> {
  const bilingualCandidates = slugToCandidatePaths(slug, getBilingualRoot());
  for (const candidate of bilingualCandidates) {
    if (await exists(candidate)) {
      return candidate;
    }
  }

  const crawlerCandidates = slugToCandidatePaths(slug, getCrawlerRoot(), true);
  for (const candidate of crawlerCandidates) {
    if (await exists(candidate)) {
      return candidate;
    }
  }

  throw new Error(`No content file found for slug ${slug.join("/")}`);
}

async function walkMarkdownFiles(root: string): Promise<string[]> {
  const paths: string[] = [];

  async function walk(dir: string): Promise<void> {
    let items: fs.Dirent[];
    try {
      items = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        if (item.name.startsWith("_")) {
          continue;
        }
        await walk(fullPath);
        continue;
      }

      if (item.isFile() && item.name.endsWith(".md")) {
        paths.push(fullPath);
      }
    }
  }

  await walk(root);
  return paths;
}

function slugToCandidatePaths(slug: string[], root: string, includeCrawlerIndexHtml = false): string[] {
  const directPath = path.join(root, ...slug) + ".md";
  const nestedIndexPath = path.join(root, ...slug, "index.md");
  const candidates = [directPath, nestedIndexPath];

  if (includeCrawlerIndexHtml) {
    candidates.push(path.join(root, ...slug, "index.html.md"));
  }

  return candidates;
}

function parseFrontmatter(frontmatter: string): Record<string, string> {
  const entries = frontmatter
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separator = line.indexOf(":");
      if (separator === -1) {
        return null;
      }

      const key = line.slice(0, separator).trim();
      const rawValue = line.slice(separator + 1).trim();
      return [key, rawValue.replace(/^"(.*)"$/, "$1")] as const;
    })
    .filter((entry): entry is readonly [string, string] => entry !== null);

  return Object.fromEntries(entries);
}

async function exists(targetPath: string): Promise<boolean> {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function getBilingualRoot(): string {
  return path.resolve(process.cwd(), "content");
}

function getCrawlerRoot(): string {
  return path.resolve(process.cwd(), "..", "crawler", "output");
}
