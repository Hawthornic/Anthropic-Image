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
  href: string;
  items: DocumentRecord[];
  label: string;
  section: string;
};

export type ArchiveChild = {
  count: number;
  description: string;
  href: string;
  label: string;
};

export type ArchiveRecord = {
  children: ArchiveChild[];
  description: string;
  host: string;
  href: string;
  items: DocumentRecord[];
  slug: string[];
  title: string;
};

export type SidebarNavGroup = {
  items: Array<{ href: string; label: string; meta?: string }>;
  label: string;
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

const SUPPORT_TOPIC_RULES = [
  { label: "Getting Started", keywords: ["get started", "getting started", "what is", "choose", "sign up", "max plan"] },
  { label: "Billing & Plans", keywords: ["billing", "invoice", "receipt", "refund", "coupon", "plan", "subscription", "tax", "seat"] },
  {
    label: "Apps & Features",
    keywords: ["desktop", "ios", "android", "chrome", "slack", "voice", "memory", "chat search", "styles", "widget", "project"],
  },
  {
    label: "Claude Code & API",
    keywords: ["claude code", "api", "console", "model", "mcp", "skills", "prompt", "web search", "extended thinking", "research"],
  },
  {
    label: "Teams & Enterprise",
    keywords: ["enterprise", "team", "sso", "scim", "organization", "roles", "permissions", "admin", "provision", "member"],
  },
  {
    label: "Safety & Policy",
    keywords: ["safety", "policy", "privacy", "security", "report", "vulnerability", "copyright", "blocked", "restriction"],
  },
  { label: "General", keywords: [] },
] as const;

let archiveCache: Promise<ArchiveRecord[]> | null = null;
let catalogCache: Promise<DocumentRecord[]> | null = null;

export async function getCatalog(): Promise<DocumentRecord[]> {
  catalogCache ??= buildCatalog();
  return catalogCache;
}

export async function getArchivePaths(): Promise<string[][]> {
  return (await getArchives()).map((archive) => archive.slug);
}

export async function getArchiveRecord(slug: string[]): Promise<ArchiveRecord | null> {
  const joined = slug.join("/");
  return (await getArchives()).find((archive) => archive.slug.join("/") === joined) ?? null;
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
    const archiveSlug = getSectionArchiveSlug(host, section);
    return {
      section,
      label: prettifySegment(section),
      items: sectionItems,
      href: archiveSlug ? `/${archiveSlug.join("/")}/` : `/${host}/`,
      docsPrefix: host === "platform.claude.com" && section === "docs" ? ["docs", "en"] : undefined,
    };
  });
}

export async function getDocsGroups(): Promise<Array<{ items: DocumentRecord[]; label: string; slug: string }>> {
  const catalog = await getCatalog();
  const docs = catalog.filter((item) => item.host === "platform.claude.com" && item.section === "docs");
  const groups = new Map<string, DocumentRecord[]>();

  for (const item of docs) {
    const label = item.slug.slice(3, 5).join(" / ") || "Overview";
    const current = groups.get(label) ?? [];
    current.push(item);
    groups.set(label, current);
  }

  return Array.from(groups.entries())
    .map(([label, items]) => ({
      label,
      items: items.sort(compareByDateAndTitle).slice(0, 12),
      slug: items[0]?.slug.slice(0, 5).join("/") ?? "",
    }))
    .sort((left, right) => left.label.localeCompare(right.label));
}

export async function getDocsNavigation(slug: string[]): Promise<SidebarNavGroup[]> {
  const catalog = await getCatalog();
  const docs = catalog.filter((item) => item.host === "platform.claude.com" && item.section === "docs");
  const areas = new Map<string, number>();

  for (const item of docs) {
    const area = item.slug[3];
    if (!area) {
      continue;
    }
    areas.set(area, (areas.get(area) ?? 0) + 1);
  }

  const groups: SidebarNavGroup[] = [
    {
      label: "Areas",
      items: Array.from(areas.entries())
        .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
        .map(([area, count]) => ({
          label: prettifySegment(area),
          href: `/platform.claude.com/docs/en/${area}/`,
          meta: `${count} pages`,
        })),
    },
  ];

  const currentArea = slug[3];
  if (currentArea) {
    const sectionGroups = new Map<string, DocumentRecord[]>();
    const areaRoots: DocumentRecord[] = [];

    for (const item of docs.filter((entry) => entry.slug[3] === currentArea)) {
      const section = item.slug[4];
      if (!section) {
        areaRoots.push(item);
        continue;
      }

      const current = sectionGroups.get(section) ?? [];
      current.push(item);
      sectionGroups.set(section, current);
    }

    groups.push({
      label: `In ${prettifySegment(currentArea)}`,
      items: areaRoots
        .sort(compareByDateAndTitle)
        .map((item) => ({
          label: item.title,
          href: item.href,
        })),
    });

    if (sectionGroups.size > 0) {
      groups.push({
        label: `Sections in ${prettifySegment(currentArea)}`,
        items: Array.from(sectionGroups.entries())
          .sort((left, right) => right[1].length - left[1].length || left[0].localeCompare(right[0]))
          .map(([section, items]) => ({
            label: prettifySegment(section),
            href: `/platform.claude.com/docs/en/${currentArea}/${section}/`,
            meta: `${items.length} pages`,
          })),
      });
    }

    const currentSection = slug[4];
    if (currentSection) {
      groups.push({
        label: `Pages in ${prettifySegment(currentSection)}`,
        items: docs
          .filter((item) => item.slug[3] === currentArea && item.slug[4] === currentSection)
          .sort(compareByDateAndTitle)
          .map((item) => ({
            label: item.title,
            href: item.href,
          })),
      });
    }
  }

  return groups.filter((group) => group.items.length > 0);
}

export async function getSupportHighlights(): Promise<DocumentRecord[]> {
  const catalog = await getCatalog();
  return catalog
    .filter((item) => item.host === "support.claude.com")
    .sort(compareByDateAndTitle)
    .slice(0, 24);
}

export async function getSupportTopicGroups(): Promise<Array<{ items: DocumentRecord[]; label: string }>> {
  const catalog = await getCatalog();
  const supportItems = catalog.filter((item) => item.host === "support.claude.com");
  const buckets = new Map<string, DocumentRecord[]>();

  for (const item of supportItems) {
    const bucket = resolveSupportTopic(item.title);
    const current = buckets.get(bucket) ?? [];
    current.push(item);
    buckets.set(bucket, current);
  }

  return SUPPORT_TOPIC_RULES.map((rule) => ({
    label: rule.label,
    items: (buckets.get(rule.label) ?? []).sort(compareByDateAndTitle).slice(0, 24),
  })).filter((group) => group.items.length > 0);
}

export async function getRelatedDocuments(record: Pick<DocumentRecord, "host" | "href" | "section" | "slug">): Promise<DocumentRecord[]> {
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

export async function getSectionNavigation(
  host: string,
): Promise<Array<{ count: number; href: string; label: string; section: string }>> {
  return (await getHostSections(host)).map((section) => ({
    count: section.items.length,
    href: section.href,
    label: section.label,
    section: section.section,
  }));
}

export function getSiteMeta(host: string): SiteMeta {
  return SITE_META[host] ?? {
    label: host,
    shortLabel: host,
    description: "Mirrored site content.",
    sectionOrder: [],
  };
}

export function getBreadcrumbsFromSlug(slug: string[]): Array<{ href: string; label: string }> {
  if (slug.length === 0) {
    return [{ href: "/", label: "Home" }];
  }

  const crumbs = [{ href: "/", label: "Home" }, { href: `/${slug[0]}/`, label: getSiteMeta(slug[0]).label }];
  let current = "";
  for (const segment of slug.slice(1, -1)) {
    current = `${current}/${segment}`;
    crumbs.push({
      href: `/${slug[0]}${current}/`,
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

async function getArchives(): Promise<ArchiveRecord[]> {
  archiveCache ??= buildArchives();
  return archiveCache;
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

async function buildArchives(): Promise<ArchiveRecord[]> {
  const catalog = await getCatalog();
  const exactRoutes = new Set(catalog.map((item) => item.slug.join("/")));
  const archiveBuckets = new Map<string, DocumentRecord[]>();

  for (const item of catalog) {
    for (const prefix of getArchivePrefixes(item.slug)) {
      const key = prefix.join("/");
      if (exactRoutes.has(key)) {
        continue;
      }
      const current = archiveBuckets.get(key) ?? [];
      current.push(item);
      archiveBuckets.set(key, current);
    }
  }

  return Array.from(archiveBuckets.entries())
    .map(([key, items]) => {
      const slug = key.split("/");
      return {
        slug,
        host: slug[0] ?? "unknown",
        href: `/${slug.join("/")}/`,
        title: getArchiveTitle(slug),
        description: getArchiveDescription(slug, items),
        items: items.sort(compareByDateAndTitle),
        children: buildArchiveChildren(slug, items),
      };
    })
    .sort((left, right) => left.href.localeCompare(right.href));
}

function buildArchiveChildren(prefix: string[], items: DocumentRecord[]): ArchiveChild[] {
  const groups = new Map<string, DocumentRecord[]>();

  for (const item of items) {
    if (item.slug.length <= prefix.length) {
      continue;
    }

    const child = item.slug[prefix.length];
    const current = groups.get(child) ?? [];
    current.push(item);
    groups.set(child, current);
  }

  return Array.from(groups.entries())
    .map(([segment, descendants]) => ({
      label: prettifySegment(segment),
      href: `/${prefix.concat(segment).join("/")}/`,
      count: descendants.length,
      description: descendants.find((item) => item.description)?.description ?? "",
    }))
    .sort((left, right) => right.count - left.count || left.label.localeCompare(right.label));
}

function getArchivePrefixes(slug: string[]): string[][] {
  const host = slug[0];
  if (!host) {
    return [];
  }

  if (host === "platform.claude.com") {
    const prefixes: string[][] = [];
    for (let length = 3; length < slug.length; length += 1) {
      prefixes.push(slug.slice(0, length));
    }
    return prefixes;
  }

  if (host === "support.claude.com") {
    return slug.length > 3 ? [slug.slice(0, 3)] : [];
  }

  if (host === "alignment.anthropic.com" || host === "red.anthropic.com") {
    return slug.length > 2 ? [slug.slice(0, 2)] : [];
  }

  return slug.length > 2 ? [slug.slice(0, 2)] : [];
}

function getArchiveTitle(slug: string[]): string {
  const host = slug[0] ?? "";
  const meta = getSiteMeta(host);

  if (host === "platform.claude.com") {
    if (slug.length === 3) {
      return "Documentation";
    }
    return prettifySegment(slug.at(-1) ?? "Docs");
  }

  if (host === "support.claude.com") {
    return "Support Articles";
  }

  return `${meta.label} ${prettifySegment(slug.at(-1) ?? "Section")}`;
}

function getArchiveDescription(slug: string[], items: DocumentRecord[]): string {
  const host = slug[0] ?? "";
  const meta = getSiteMeta(host);

  if (host === "platform.claude.com") {
    if (slug.length === 3) {
      return "Browse the mirrored Claude developer documentation by section, with direct links into each docs subtree.";
    }
    return `A mirrored index for the ${prettifySegment(slug.at(-1) ?? "docs")} documentation area.`;
  }

  if (host === "support.claude.com") {
    return "A mirrored help center archive with direct links into the full support article corpus.";
  }

  const latest = items[0]?.description;
  return latest || `${meta.label} archive for ${prettifySegment(slug.at(-1) ?? "this section")}.`;
}

function getSectionArchiveSlug(host: string, section: string): string[] | null {
  if (host === "platform.claude.com" && section === "docs") {
    return [host, "docs", "en"];
  }

  if (host === "support.claude.com" && section === "articles") {
    return [host, "en", "articles"];
  }

  if (host === "alignment.anthropic.com" || host === "red.anthropic.com") {
    return null;
  }

  return [host, section];
}

function resolveSupportTopic(title: string): string {
  const normalized = title.toLowerCase();
  for (const rule of SUPPORT_TOPIC_RULES) {
    if (rule.keywords.some((keyword) => normalized.includes(keyword))) {
      return rule.label;
    }
  }
  return "General";
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
