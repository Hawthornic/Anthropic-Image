import fs from "node:fs/promises";
import path from "node:path";

async function main(): Promise<void> {
  const target = process.argv[2];
  if (!target) {
    throw new Error("Usage: tsx src/validators/format-check.ts <bilingual-markdown>");
  }

  const filePath = path.resolve(process.cwd(), target);
  const markdown = await fs.readFile(filePath, "utf8");

  if (!markdown.startsWith("---\n")) {
    throw new Error("Missing frontmatter start");
  }

  const bilingualStarts = (markdown.match(/::: bilingual/g) ?? []).length;
  const bilingualEnds = (markdown.match(/\n:::\n/g) ?? []).length;
  if (bilingualStarts === 0) {
    throw new Error("No bilingual blocks found");
  }

  if (bilingualEnds < bilingualStarts) {
    throw new Error("Unbalanced bilingual block terminators");
  }

  console.log(`Format OK: ${bilingualStarts} bilingual blocks`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
