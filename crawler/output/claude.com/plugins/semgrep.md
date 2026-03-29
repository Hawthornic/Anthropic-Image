---
source_url: https://claude.com/plugins/semgrep
title: "Semgrep"
section: plugins
---

<!-- para:0001 -->
# Semgrep

<!-- para:0002 -->
Semgrep catches security vulnerabilities in real-time and guides Claude to write secure code from the start.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/semgrep#)
- Made by: [Semgrep](https://semgrep.dev/)
- Installs8085

<!-- para:0004 -->
Semgrep catches security vulnerabilities in real-time as Claude writes code. The plugin integrates Semgrep's static analysis engine directly into your Claude Code workflow, automatically scanning files after every edit for issues like injection flaws, hardcoded secrets, and insecure patterns — then guiding Claude to produce secure code from the start.

<!-- para:0005 -->
At session start and with each prompt, Semgrep injects secure coding defaults so Claude follows security best practices by default. After every file write or edit, a post-tool hook automatically runs a Semgrep scan on the changed code, catching vulnerabilities before they make it into your codebase. This provides a continuous security feedback loop without any manual intervention.

<!-- para:0006 -->
The plugin connects to Semgrep's MCP server, giving Claude access to Semgrep's full analysis capabilities including SAST (static application security testing), SCA (software composition analysis), and secrets detection — all powered by Semgrep's extensive rule library with minimal false positives.

<!-- para:0007 -->
**How to use: ** After installing, run `/semgrep-plugin:setup_semgrep_plugin` to configure Semgrep and authenticate your account. Once set up, the plugin works automatically — security scans run in the background on every code change, and Claude receives secure coding guidance with each prompt. No additional commands needed for day-to-day use.**

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
