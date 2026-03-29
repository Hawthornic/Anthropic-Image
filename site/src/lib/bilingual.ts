import fs from "node:fs/promises";
import path from "node:path";

export type BilingualEntry = {
  id: string;
  translations: Record<string, string>;
};

export type BilingualDocument = {
  entries: BilingualEntry[];
  metadata: Record<string, string>;
  sourcePath: string;
};

const FRONTMATTER_PATTERN = /^---\n([\s\S]*?)\n---\n*/;
const ENTRY_PATTERN = /<!--\s*para:(\d+)\s*-->\n::: bilingual\n([\s\S]*?)\n:::\n(?=(?:<!--\s*para:\d+\s*-->)|\s*$)/g;
const LANGUAGE_PATTERN = /::: ([^\n]+)\n([\s\S]*?)\n:::/g;

export async function listContentPaths(): Promise<string[]> {
  const contentRoot = getContentRoot();
  const paths: string[] = [];

  async function walk(dir: string): Promise<void> {
    const items = await fs.readdir(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        await walk(fullPath);
        continue;
      }

      if (item.isFile() && item.name.endsWith(".md")) {
        paths.push(fullPath);
      }
    }
  }

  await walk(contentRoot);
  return paths.sort();
}

export async function readBilingualDocument(sourcePath: string): Promise<BilingualDocument> {
  const markdown = await fs.readFile(sourcePath, "utf8");
  const frontmatterMatch = markdown.match(FRONTMATTER_PATTERN);
  const metadata = frontmatterMatch ? parseFrontmatter(frontmatterMatch[1]) : {};
  const body = frontmatterMatch ? markdown.slice(frontmatterMatch[0].length) : markdown;
  const entries = Array.from(body.matchAll(ENTRY_PATTERN)).map((match) => ({
    id: match[1],
    translations: Object.fromEntries(
      Array.from(match[2].matchAll(LANGUAGE_PATTERN)).map((langMatch) => [langMatch[1].trim(), langMatch[2].trim()]),
    ),
  }));

  return {
    entries,
    metadata,
    sourcePath,
  };
}

export function pathToSlug(sourcePath: string): string[] {
  const relative = path.relative(getContentRoot(), sourcePath).replace(/\.md$/, "");
  const parts = relative.split(path.sep);
  return parts.at(-1) === "index" ? parts.slice(0, -1) : parts;
}

export function slugToCandidatePaths(slug: string[]): string[] {
  const directPath = path.join(getContentRoot(), ...slug) + ".md";
  const nestedIndexPath = path.join(getContentRoot(), ...slug, "index.md");
  return [directPath, nestedIndexPath];
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

function getContentRoot(): string {
  return path.resolve(process.cwd(), "content");
}
