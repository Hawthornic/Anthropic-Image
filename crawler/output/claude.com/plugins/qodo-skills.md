---
source_url: https://claude.com/plugins/qodo-skills
title: "Qodo Skills"
section: plugins
---

<!-- para:0001 -->
# Qodo Skills

<!-- para:0002 -->
Qodo Skills: AI agents that integrate code quality, testing, security, and compliance checks into your SDLC.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/qodo-skills#)
- Made by: [Qodo.ai](https://github.com/qodo-ai/qodo-skills)
- Installs6454

<!-- para:0004 -->
Qodo Skills brings shift-left code review capabilities into your development workflow. It connects Claude Code to the Qodo platform, letting you fetch and enforce repository-specific coding rules before you commit, and resolve Qodo PR review issues directly from your terminal. Rules are organized by severity—ERROR (mandatory), WARNING (recommended), and RECOMMENDATION (optional)—and are scoped hierarchically across organization, repository, and path levels.

<!-- para:0005 -->
The plugin includes two core skills: **get-qodo-rules** fetches your team's coding standards from the Qodo API and applies them during code generation, refactoring, and review tasks. **qodo-pr-resolver** pulls Qodo review comments from open pull requests and lets you fix issues interactively or in batch mode, with automatic commits and PR summary comments. It supports Git Hub, Git Lab, Bitbucket, and Azure Dev Ops.

<!-- para:0006 -->
**How to use: ** Say `get qodo rules` or `load coding rules` before writing or modifying code to enforce your team's standards. To resolve PR feedback, say `resolve pr`, `qodo fix`, or `fix qodo issues` while on a branch with an open pull request. The resolver will display outstanding issues and let you choose manual review or auto-fix mode.**

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
