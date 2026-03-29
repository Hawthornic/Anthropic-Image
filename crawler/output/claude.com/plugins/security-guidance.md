---
source_url: https://claude.com/plugins/security-guidance
title: "Security Guidance"
section: plugins
---

<!-- para:0001 -->
# Security Guidance

<!-- para:0002 -->
Security hook warns about command injection, XSS, and unsafe code patterns when editing files

<!-- para:0003 -->
- Anthropic Verified
- Install in [Claude Code](https://claude.com/plugins/security-guidance#)
- Made by: [Anthropic](https://anthropic.com/)
- Installs97925

<!-- para:0004 -->
A security reminder hook that automatically warns about potential security vulnerabilities when Claude edits files. The plugin intercepts Write, Edit, and Multi Edit operations and scans code for dangerous patterns before changes are applied.

<!-- para:0005 -->
The plugin detects eight major vulnerability categories including command injection in Git Hub Actions workflows, unsafe child_process.exec() calls, eval() and new Function() usage, XSS vectors like dangerously Set InnerHTML and innerHTML, Python pickle deserialization risks, and os.system() command injection.

<!-- para:0006 -->
**How it works: ** The plugin runs automatically as a pre-tool hook - no commands needed. When Claude attempts to write code containing potentially unsafe patterns, you'll see a warning with specific remediation advice before the edit proceeds. Warnings are session-scoped so you only see each one once.**

<!-- para:0007 -->
**Example warnings you might see: **

<!-- para:0008 -->
- Suggestions to use exec File NoThrow() instead of child_process.exec() to prevent shell injection
- Alerts about XSS risks when using innerHTML or dangerously Set InnerHTML
- Warnings about Git Hub Actions injection when editing workflow files

<!-- para:0009 -->
## Related plugins

<!-- para:0010 -->
### Frontend Design

<!-- para:0011 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0012 -->
413623

<!-- para:0013 -->
installs

<!-- para:0014 -->
### Superpowers

<!-- para:0015 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0016 -->
294839

<!-- para:0017 -->
### Context7

<!-- para:0018 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0019 -->
212236

<!-- para:0020 -->
### Code Review

<!-- para:0021 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0022 -->
191903
