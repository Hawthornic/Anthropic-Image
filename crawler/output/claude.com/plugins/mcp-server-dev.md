---
source_url: https://claude.com/plugins/mcp-server-dev
title: "MCP Server Dev"
section: plugins
---

<!-- para:0001 -->
# MCP Server Dev

<!-- para:0002 -->
Design and build MCP servers for Claude. Learn deployment (HTTP, MCPB, local), tools, auth, and interactive apps.

<!-- para:0003 -->
- Anthropic Verified
- Install in [Claude Code](https://claude.com/plugins/mcp-server-dev#)
- Made by: [Anthropic](https://anthropic.com/)
- Installs1181

<!-- para:0004 -->
A comprehensive guide for designing and building MCP (Model Context Protocol) servers that work seamlessly with Claude. This plugin provides three composable skills that walk you through the entire process — from choosing the right deployment model and tool design patterns to scaffolding code, adding authentication, and packaging for distribution. It covers remote streamable-HTTP servers, interactive MCP apps with embedded UI widgets, and MCPB bundles for local machine access.

<!-- para:0005 -->
The core **build-mcp-server** skill follows a structured five-phase workflow: it interrogates your use case, recommends a deployment model (remote HTTP, elicitation, MCP app, MCPB, or local stdio), selects a tool-design pattern (one-tool-per-action vs. search+execute for large APIs), picks a framework (Type Script SDK or FastMCP for Python), and scaffolds your project. The **build-mcp-app** skill adds interactive UI capabilities — form widgets, searchable pickers, confirmation dialogs, charts, and live-updating status displays — rendered directly in chat via sandboxed iframes. The **build-mcpb** skill handles packaging local stdio servers with their runtime into installable bundles that require no Node.js or Python on the user's machine.

<!-- para:0006 -->
**How to use: ** Invoke the entry skill with `/mcp-server-dev:build-mcp-server` or simply ask "help me build an MCP server" to start the guided workflow. Use `/mcp-server-dev:build-mcp-app` when you need to add interactive widgets like contact pickers or confirmation dialogs to your server. Use `/mcp-server-dev:build-mcpb` to package a local server into a distributable MCPB bundle. Each skill includes reference files covering auth flows, widget templates, iframe sandbox constraints, manifest schemas, and security hardening guidelines.**

<!-- para:0007 -->
## Related plugins

<!-- para:0008 -->
### Frontend Design

<!-- para:0009 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0010 -->
413623

<!-- para:0011 -->
installs

<!-- para:0012 -->
### Superpowers

<!-- para:0013 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0014 -->
294839

<!-- para:0015 -->
### Context7

<!-- para:0016 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0017 -->
212236

<!-- para:0018 -->
### Code Review

<!-- para:0019 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0020 -->
191903
