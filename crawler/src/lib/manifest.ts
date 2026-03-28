import fs from "node:fs/promises";
import path from "node:path";

import { toIsoDate } from "./markdown.js";

type ManifestItem = {
  block_count: number;
  date: string | null;
  output_path: string;
  source_url: string;
  title: string;
};

export async function writeSectionManifest(payload: {
  items: ManifestItem[];
  section: string;
}): Promise<void> {
  const manifestDir = path.resolve(process.cwd(), "output", "_manifests");
  await fs.mkdir(manifestDir, { recursive: true });

  const manifestPath = path.join(manifestDir, `anthropic-${payload.section}.json`);
  const items = [...payload.items]
    .map((item) => ({
      ...item,
      date: toIsoDate(item.date),
    }))
    .sort((left, right) => left.source_url.localeCompare(right.source_url));

  await fs.writeFile(
    manifestPath,
    JSON.stringify(
      {
        updated_at: new Date().toISOString(),
        site: "www.anthropic.com",
        section: payload.section,
        items,
      },
      null,
      2,
    ),
    "utf8",
  );
}
