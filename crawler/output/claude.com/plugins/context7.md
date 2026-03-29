---
source_url: https://claude.com/plugins/context7
title: "Context7"
section: plugins
---

<!-- para:0001 -->
# Context7

<!-- para:0002 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/context7#)
- Made by: [Upstash](https://upstash.com/)
- Installs212236

<!-- para:0004 -->
Context7 is an MCP server that delivers up-to-date, version-specific documentation and code examples directly into your prompts. It solves a common problem with LLMs: outdated training data leading to hallucinated APIs and deprecated code patterns. Instead of relying on stale information, Context7 pulls current documentation straight from source repositories.

<!-- para:0005 -->
The plugin provides two main tools: **resolve-library-id** for matching library names to Context7-compatible identifiers, and **query-docs** for retrieving documentation for specific libraries. You can even target specific versions by mentioning them in your prompt.

<!-- para:0006 -->
**How to use: ** Simply add "use context7" to any prompt where you need current documentation. For example: "Create a Next.js middleware that checks for a valid JWT in cookies. use context7" or "Configure a Cloudflare Worker script to cache JSON API responses. use context7". You can also specify exact libraries with "use library /supabase/supabase for API and docs".**

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
### Code Review

<!-- para:0016 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0017 -->
191903

<!-- para:0018 -->
### Code Simplifier

<!-- para:0019 -->
Code clarity agent: simplifies and refines recently modified code while preserving functionality and consistency.

<!-- para:0020 -->
159908
