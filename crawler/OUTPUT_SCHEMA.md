# Output Schema

This document defines the crawler output contract that downstream translation and site-generation steps should rely on.

## Directory layout

```text
crawler/
  output/
    www.anthropic.com/
      research/
      engineering/
      news/
    support.claude.com/
      en/
        articles/
    _runs/
    _manifests/
```

## Markdown document contract

Each crawled page is written as a single Markdown file.

Required frontmatter fields:

```yaml
---
source_url: https://www.anthropic.com/research/example
title: "Example title"
section: research
date: 2025-02-03
---
```

Rules:

- `source_url`: original canonical crawl URL.
- `title`: extracted page title.
- `section`: site-level content bucket such as `research`, `engineering`, `news`, or `articles`.
- `date`: normalized ISO date when available.

Body rules:

- Every non-divider block is preceded by a paragraph marker comment.
- Marker format is `<!-- para:0001 -->`.
- Markers are stable only relative to the current extracted output and must be treated as block sequence IDs, not semantic IDs.

Example:

```md
<!-- para:0001 -->
## Section heading

<!-- para:0002 -->
Paragraph text.
```

## Section manifest contract

Each crawler run updates one section manifest:

```text
output/_manifests/<site>-<section>.json
```

Example shape:

```json
{
  "updated_at": "2026-03-28T00:00:00.000Z",
  "site": "www.anthropic.com",
  "section": "research",
  "items": [
    {
      "source_url": "https://www.anthropic.com/research/example",
      "title": "Example title",
      "date": "2025-02-03",
      "output_path": "/abs/path/to/file.md",
      "block_count": 42
    }
  ]
}
```

Rules:

- `items` are sorted by `source_url`.
- `output_path` is an absolute path in the local workspace.
- `block_count` is the number of extracted content blocks written into the Markdown body.
- `block_count` may be `0` for link-out or placeholder pages that expose metadata but no substantive on-page body.
- Current validated manifests include `www.anthropic.com` and `support.claude.com`.

## Run report contract

Each batch run writes:

- `output/_runs/<crawler>-run-<timestamp>.json`
- `output/_runs/<crawler>-failures.json`

These files are operational artifacts for crawl monitoring, not long-term content inputs.
