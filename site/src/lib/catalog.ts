import { listDocumentPaths, readMirrorDocument, sourcePathToSlug, type MirrorDocument } from "./content";

export type SiteMeta = {
  description: string;
  label: string;
  sectionOrder: string[];
  shortLabel: string;
};

export type DocumentRecord = {
  date: string | null;
  description: string;
  document: MirrorDocument;
  hasTranslations: boolean;
  host: string;
  href: string;
  section: string;
  slug: string[];
  title: string;
};

export type SectionGroup = {
  docsPrefix?: string[];
  items: DocumentRecord[];
  section: string;
};

const SITE_META: Record<string, SiteMeta> = {
  "www.anthropic.com": {
    label: "Anthropic",
    shortLabel: "anthropic.com",
    description: "Company site, research, engineering, and news.",
    sectionOrder: ["research", "engineering", "news"],
  },
  "claude.com": {
    label: "Claude",
    shortLabel: "claude.com",
    description: "Product site, blog, and product collections.",
    sectionOrder: ["home", "blog", "blog-category", "product", "solutions", "customers", "connectors", "resources"],
  },
  "platform.claude.com": {
    label: "Claude API Docs",
    shortLabel: "platform.claude.com",
    description: "Developer documentation and guides.",
    sectionOrder: ["docs"],
  },
  "support.claude.com": {
    label: "Claude Support",
    shortLabel: "support.claude.com",
    description: "Help center and support articles.",
    sectionOrder: ["articles"],
  },
  "alignment.anthropic.com": {
    label: "Alignment Science Blog",
    shortLabel: "alignment.anthropic.com",
    description: "Alignment and safety research blog.",
    sectionOrder: ["blog"],
  },
  "red.anthropic.com": {
    label: "Red Team Blog",
    shortLabel: "red.anthropic.com",
    description: "Safety, cyber, and threat research.",
    sectionOrder: ["blog"],
  },
};

let cache: Promise<DocumentRecord[]> | null = null;

export async function getCatalog(): Promise<DocumentRecord[]> {
  cache ??= buildCatalog();
  return cache;
}

export async function getHosts(): Promise<Array<{ count: number; host: string; meta: SiteMeta }>> {
  const catalog = await getCatalog();
  return Object.entries(SITE_META)
    .map(([host, meta]) => ({
      host,
      meta,
      count: catalog.filter((item) => item.host === host).length,
    }))
    .filter((item) => item.count > 0);
}

export async function getHostSections(host: string): Promise<SectionGroup[]> {
  const catalog = await getCatalog();
  const items = catalog.filter((item) => item.host === host);
  const meta = SITE_META[host];
  const sectionNames = Array.from(new Set(items.map((item) => item.section))).sort((left, right) => {
    const leftIndex = meta?.sectionOrder.indexOf(left) ?? -1;
    const rightIndex = meta?.sectionOrder.indexOf(right) ?? -1;
    if (leftIndex === -1 && rightIndex === -1) {
      return left.localeCompare(right);
    }
    if (leftIndex === -1) {
      return 1;
    }
    if (rightIndex === -1) {
      return -1;
    }
    return leftIndex - rightIndex;
  });

  return sectionNames.map((section) => {
    const sectionItems = items.filter((item) => item.section === section);
    return {
      section,
      items: sectionItems,
      docsPrefix: host === "platform.claude.com" && section === "docs" ? ["docs", "en"] : undefined,
    };
  });
}

export async function getDocsGroups(): Promise<Array<{ items: DocumentRecord[]; label: string; slug: string }>> {
  const catalog = await getCatalog();
  const docs = catalog.filter((item) => item.host === "platform.claude.com" && item.section === "docs");
  const groups = new Map<string, DocumentRecord[]>();

  for (const item of docs) {
    const label = item.slug.slice(2, 4).join(" / ") || "Overview";
    const current = groups.get(label) ?? [];
    current.push(item);
    groups.set(label, current);
  }

  return Array.from(groups.entries())
    .map(([label, items]) => ({
      label,
      items: items.sort(compareByDateAndTitle).slice(0, 12),
      slug: items[0]?.slug.slice(0, 4).join("/") ?? "",
    }))
    .sort((left, right) => left.label.localeCompare(right.label));
}

export async function getSupportHighlights(): Promise<DocumentRecord[]> {
  const catalog = await getCatalog();
  return catalog
    .filter((item) => item.host === "support.claude.com")
    .sort(compareByDateAndTitle)
    .slice(0, 24);
}

export async function getRelatedDocuments(record: DocumentRecord): Promise<DocumentRecord[]> {
  const catalog = await getCatalog();
  const prefixLength = record.host === "platform.claude.com" ? 4 : 2;
  const prefix = record.slug.slice(0, prefixLength).join("/");

  return catalog
    .filter((item) => item.href !== record.href)
    .filter((item) => item.host === record.host)
    .filter((item) => item.section === record.section || item.slug.slice(0, prefixLength).join("/") === prefix)
    .sort(compareByDateAndTitle)
    .slice(0, 12);
}

export function getSiteMeta(host: string): SiteMeta {
  return SITE_META[host] ?? {
    label: host,
    shortLabel: host,
    description: "Mirrored site content.",
    sectionOrder: [],
  };
}

export function getBreadcrumbs(record: DocumentRecord): Array<{ href: string; label: string }> {
  const crumbs = [{ href: "/", label: "Home" }, { href: `/${record.host}/`, label: getSiteMeta(record.host).label }];
  let current = "";
  for (const segment of record.slug.slice(1, -1)) {
    current = `${current}/${segment}`;
    crumbs.push({
      href: `/${record.host}${current}/`,
      label: prettifySegment(segment),
    });
  }
  return crumbs;
}

export function prettifySegment(value: string): string {
  return value
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

async function buildCatalog(): Promise<DocumentRecord[]> {
  const paths = await listDocumentPaths();
  const documents = await Promise.all(paths.map((file) => readMirrorDocument(file)));

  return documents
    .map((document) => {
      const slug = sourcePathToSlug(document.sourcePath);
      const host = slug[0] ?? "unknown";
      const section = deriveSection(slug, document.metadata.section);
      const title = document.metadata.title ?? slug.at(-1) ?? host;
      const description = firstParagraph(document);
      return {
        slug,
        host,
        section,
        title,
        date: document.metadata.date ?? null,
        description,
        document,
        href: `/${slug.join("/")}/`,
        hasTranslations: document.entries.some((entry) => Object.keys(entry.translations).length > 1),
      };
    })
    .sort(compareByDateAndTitle);
}

function deriveSection(slug: string[], metadataSection: string | undefined): string {
  if (slug[0] === "platform.claude.com") {
    return "docs";
  }

  if (slug[0] === "support.claude.com") {
    return "articles";
  }

  if (slug[0] === "alignment.anthropic.com" || slug[0] === "red.anthropic.com") {
    return "blog";
  }

  if (slug.length > 1) {
    return slug[1];
  }

  return metadataSection ?? "home";
}

function firstParagraph(document: MirrorDocument): string {
  for (const entry of document.entries) {
    const first = entry.translations.en ?? Object.values(entry.translations)[0];
    if (!first) {
      continue;
    }

    const stripped = first
      .replace(/[#>*`[\]()!-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (stripped.length > 40) {
      return stripped.slice(0, 180);
    }
  }

  return "";
}

function compareByDateAndTitle(left: DocumentRecord, right: DocumentRecord): number {
  const leftDate = left.date ?? "";
  const rightDate = right.date ?? "";
  if (leftDate !== rightDate) {
    return rightDate.localeCompare(leftDate);
  }
  return left.title.localeCompare(right.title);
}
