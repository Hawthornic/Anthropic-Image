export type ExtractedBlock = {
  kind: "paragraph" | "heading" | "list" | "image" | "quote" | "code" | "hr";
  markdown: string;
};

export type ExtractedDocument = {
  sourceUrl: string;
  title: string;
  date: string | null;
  section: string;
  blocks: ExtractedBlock[];
};
