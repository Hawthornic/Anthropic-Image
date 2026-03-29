import fs from "node:fs/promises";
import path from "node:path";

const PARA_PATTERN = /<!--\s*para:(\d+)\s*-->\n::: bilingual\n([\s\S]*?)\n:::\n/g;

async function main(): Promise<void> {
  const target = process.argv[2];
  if (!target) {
    throw new Error("Usage: tsx src/validators/alignment-check.ts <bilingual-markdown>");
  }

  const filePath = path.resolve(process.cwd(), target);
  const markdown = await fs.readFile(filePath, "utf8");
  const matches = Array.from(markdown.matchAll(PARA_PATTERN));

  if (matches.length === 0) {
    throw new Error("No bilingual paragraph blocks found");
  }

  for (const match of matches) {
    const paraId = match[1];
    const block = match[2];
    const languages = Array.from(block.matchAll(/::: ([^\n]+)\n/g)).map((item) => item[1].trim());
    if (!languages.includes("en")) {
      throw new Error(`Paragraph ${paraId} is missing ::: en`);
    }

    const unique = new Set(languages);
    if (unique.size !== languages.length) {
      throw new Error(`Paragraph ${paraId} has duplicated language blocks`);
    }
  }

  console.log(`Alignment OK: ${matches.length} paragraphs`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
