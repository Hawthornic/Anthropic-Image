---
source_url: https://claude.com/plugins/sourcegraph
title: "Sourcegraph"
section: plugins
---

<!-- para:0001 -->
# Sourcegraph

<!-- para:0002 -->
Search code across codebases, trace references, analyze refactor impact, investigate incidents, run security sweeps.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/sourcegraph#)
- Made by: [Sourcegraph Community](https://github.com/sourcegraph-community/sourcegraph-claudecode-plugin)
- Installs2318

<!-- para:0004 -->
Search, navigate, and understand code across all your repositories directly from Claude Code. This plugin connects to your Sourcegraph instance via MCP, giving you access to semantic search, keyword/regex search, commit and diff history, symbol navigation, reference tracing, and Sourcegraph's Deep Search — all without leaving your terminal.

<!-- para:0005 -->
With twelve integrated tools spanning search, code navigation, and analysis, you can explore unfamiliar codebases, trace how symbols are used across repositories, investigate incidents through commit history, audit code for security patterns, and assess the impact of refactors before making changes.

<!-- para:0006 -->
**How to use: ** Set your `SOURCEGRAPH_ENDPOINT` and `SOURCEGRAPH_ACCESS_TOKEN` environment variables, then try these commands and prompts:**

<!-- para:0007 -->
`/sourcegraph:sg-search` — Run a Sourcegraph search using natural language or keyword syntax (e.g., "find all callers of parse Config across our Go services"). `/sourcegraph:sg-file` — Retrieve and summarize a file from any repository, highlighting key symbols and suggesting related files to explore. "Search for all uses of the deprecated handle Auth function and show me which repos still depend on it." "Find recent commits that modified database migration files across all backend repos." "Trace where the User Session type is defined and list every file that references it."

<!-- para:0008 -->
## Related plugins

<!-- para:0009 -->
### Frontend Design

<!-- para:0010 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0011 -->
413623

<!-- para:0012 -->
installs

<!-- para:0013 -->
### Superpowers

<!-- para:0014 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0015 -->
294839

<!-- para:0016 -->
### Context7

<!-- para:0017 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0018 -->
212236

<!-- para:0019 -->
### Code Review

<!-- para:0020 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0021 -->
191903
