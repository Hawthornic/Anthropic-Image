---
source_url: https://claude.com/plugins/code-review
title: "Code Review"
section: plugins
---

<!-- para:0001 -->
# Code Review

<!-- para:0002 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0003 -->
- Anthropic Verified
- Install in [Claude Code](https://claude.com/plugins/code-review#)
- Made by: [Anthropic](https://anthropic.com/)
- Installs191903

<!-- para:0004 -->
Automates pull request code review using multiple specialized agents working in parallel. Five independent reviewers analyze your changes from different angles: CLAUDE.md compliance checking, bug detection, git history context analysis, previous PR comment review, and code comment verification. Each finding is scored on a 0-100 confidence scale, and only high-confidence issues (default threshold: 80) are posted as comments, dramatically reducing false positives and review noise.

<!-- para:0005 -->
The plugin intelligently filters out PRs that don't need review—closed, draft, automated, or already-reviewed pull requests are automatically skipped. Comments include direct Git Hub links with full SHA hashes and line number ranges for easy navigation to the exact code in question.

<!-- para:0006 -->
**How to use: ** Run `/code-review` on any PR branch to launch the full automated review. The system will analyze your changes, score potential issues, and post actionable feedback directly to Git Hub. You can customize the confidence threshold or focus areas (security, performance, accessibility) by editing the command configuration.**

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
### Code Simplifier

<!-- para:0019 -->
Code clarity agent: simplifies and refines recently modified code while preserving functionality and consistency.

<!-- para:0020 -->
159908
