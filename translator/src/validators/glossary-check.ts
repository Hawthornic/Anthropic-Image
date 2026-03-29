import fs from "node:fs/promises";
import path from "node:path";

import YAML from "yaml";

type GlossaryTerm = {
  source: string;
  [lang: string]: string;
};

async function main(): Promise<void> {
  const target = process.argv[2];
  const lang = process.argv[3];
  if (!target || !lang) {
    throw new Error("Usage: tsx src/validators/glossary-check.ts <bilingual-markdown> <lang>");
  }

  const glossaryPath = path.resolve(process.cwd(), "src", "glossary.yaml");
  const glossaryFile = await fs.readFile(glossaryPath, "utf8");
  const glossary = (YAML.parse(glossaryFile) as { terms?: GlossaryTerm[] }).terms ?? [];
  const markdown = await fs.readFile(path.resolve(process.cwd(), target), "utf8");

  const issues = glossary
    .filter((term) => term[lang])
    .filter((term) => markdown.includes(term.source) && !markdown.includes(term[lang]))
    .map((term) => `${term.source} => ${term[lang]}`);

  if (issues.length > 0) {
    throw new Error(`Glossary terms missing in ${lang} output:\n${issues.join("\n")}`);
  }

  console.log(`Glossary OK for ${lang}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
