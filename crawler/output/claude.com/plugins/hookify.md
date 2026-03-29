---
source_url: https://claude.com/plugins/hookify
title: "Hookify"
section: plugins
---

<!-- para:0001 -->
# Hookify

<!-- para:0002 -->
Create custom hooks via markdown to prevent unwanted behaviors from conversation patterns or explicit instructions.

<!-- para:0003 -->
- Anthropic Verified
- Install in [Claude Code](https://claude.com/plugins/hookify#)
- Made by: [Anthropic](https://anthropic.com/)
- Installs33062

<!-- para:0004 -->
Hookify lets you create custom behavioral guardrails for Claude using simple markdown files. Define rules to warn about or block unwanted behaviors like dangerous bash commands, debug code in production files, or hardcoded credentials—all without writing any code.

<!-- para:0005 -->
Rules are configured with YAML frontmatter in markdown files, supporting regex pattern matching across different event types: bash commands, file edits, user prompts, and session stops. Changes take effect immediately without restarting Claude.

<!-- para:0006 -->
**How to use: **

<!-- para:0007 -->
Create rules from natural language: `/hookify Warn me when I use rm -rf commands` or `/hookify Don't use console.log in Type Script files`. Run `/hookify` without arguments to analyze recent conversation and auto-generate rules from behaviors you've corrected. Use `/hookify:list` to see active rules and `/hookify:configure` for interactive management.

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
