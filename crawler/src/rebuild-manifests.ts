import fs from "node:fs/promises";
import path from "node:path";

type ManifestItem = {
  block_count: number;
  date: string | null;
  output_path: string;
  source_url: string;
  title: string;
};

type DocumentMetadata = {
  date: string | null;
  section: string;
  source_url: string;
  title: string;
};

const OUTPUT_ROOT = path.resolve(process.cwd(), "output");
const MANIFEST_ROOT = path.join(OUTPUT_ROOT, "_manifests");

async function main(): Promise<void> {
  const siteDirectories = await fs.readdir(OUTPUT_ROOT, { withFileTypes: true });

  await fs.mkdir(MANIFEST_ROOT, { recursive: true });

  for (const entry of siteDirectories) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) {
      continue;
    }

    const siteRoot = path.join(OUTPUT_ROOT, entry.name);
    const markdownPaths = await collectMarkdownFiles(siteRoot);
    const itemsBySection = new Map<string, ManifestItem[]>();

    for (const markdownPath of markdownPaths) {
      const item = await parseMarkdownFile(markdownPath);
      const items = itemsBySection.get(item.section) ?? [];
      items.push({
        block_count: item.block_count,
        date: item.date,
        output_path: markdownPath,
        source_url: item.source_url,
        title: item.title,
      });
      itemsBySection.set(item.section, items);
    }

    for (const [section, items] of itemsBySection) {
      await writeManifest(entry.name, section, items);
      console.log(`Wrote manifest for ${entry.name}/${section} (${items.length} items)`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function collectMarkdownFiles(root: string): Promise<string[]> {
  const queue = [root];
  const paths: string[] = [];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current) {
      continue;
    }

    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        queue.push(fullPath);
        continue;
      }

      if (entry.isFile() && fullPath.endsWith(".md")) {
        paths.push(fullPath);
      }
    }
  }

  return paths.sort();
}

async function parseMarkdownFile(markdownPath: string): Promise<ManifestItem & { section: string }> {
  const content = await fs.readFile(markdownPath, "utf8");
  const metadata = parseFrontmatter(content);
  const blockCount = Array.from(content.matchAll(/^<!-- para:\d{4} -->$/gm)).length;

  return {
    block_count: blockCount,
    date: metadata.date,
    output_path: markdownPath,
    section: metadata.section,
    source_url: metadata.source_url,
    title: metadata.title,
  };
}

function parseFrontmatter(content: string): DocumentMetadata {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    throw new Error("Missing frontmatter");
  }

  const fields = new Map<string, string>();
  for (const line of match[1].split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    fields.set(key, value);
  }

  const sourceUrl = fields.get("source_url");
  const title = fields.get("title");
  const section = fields.get("section");

  if (!sourceUrl || !title || !section) {
    throw new Error("Missing required frontmatter fields");
  }

  return {
    source_url: sourceUrl,
    title: parseYamlString(title),
    section,
    date: fields.get("date") ?? null,
  };
}

function parseYamlString(value: string): string {
  if (value.startsWith("\"")) {
    return JSON.parse(value) as string;
  }

  return value;
}

async function writeManifest(site: string, section: string, items: ManifestItem[]): Promise<void> {
  const manifestPath = path.join(MANIFEST_ROOT, `${site}-${section}.json`);
  const normalizedItems = [...items].sort((left, right) => left.source_url.localeCompare(right.source_url));

  await fs.writeFile(
    manifestPath,
    JSON.stringify(
      {
        updated_at: new Date().toISOString(),
        site,
        section,
        items: normalizedItems,
      },
      null,
      2,
    ),
    "utf8",
  );
}
