---
source_url: https://claude.com/plugins/firetiger
title: "Firetiger"
section: plugins
---

<!-- para:0001 -->
# Firetiger

<!-- para:0002 -->
Claude Code plugin for Firetiger observability workflows and MCP-powered investigations.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/firetiger#)
- Made by: [Firetiger](https://firetiger.com/)
- Installs167

<!-- para:0004 -->
Firetiger brings autonomous observability workflows directly into Claude Code. Connect to Firetiger's MCP-powered platform to monitor your applications, investigate production issues, and query telemetry data — all without leaving your editor. The plugin provides six slash commands covering the full observability lifecycle from setup and instrumentation to active monitoring and incident investigation.

<!-- para:0005 -->
Get started quickly with `/firetiger:setup`, which auto-detects your stack (Vercel, AWS, GCP, Cloudflare), connects integrations, instruments your code with Open Telemetry, and creates a monitoring agent — all in one guided flow. Use `/firetiger:instrument` to add Open Telemetry instrumentation to Node.js, Python, Go, or Rust projects with framework-specific templates and automatic credential management.

<!-- para:0006 -->
Create autonomous monitoring agents with `/firetiger:create-agent` using plain English goals like "monitor API routes for errors and slow responses" or "watch for authentication failures." Track deployments by commenting `@firetiger` on PRs with `/firetiger:monitor-deploy` — the agent monitors health from 10 minutes to 72 hours post-deploy and reports issues directly on the PR.

<!-- para:0007 -->
**How to use: ** Run `/firetiger:setup` to onboard your project. Query your traces, logs, and metrics with SQL using `/firetiger:query` (e.g., "show me the slowest API calls in the last hour"). Start a structured diagnosis session with `/firetiger:investigate` to systematically track down error spikes, latency regressions, or missing data. Use `/firetiger:create-agent` to spin up always-on monitoring for any part of your system.**

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
