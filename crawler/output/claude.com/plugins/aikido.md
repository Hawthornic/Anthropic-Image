---
source_url: https://claude.com/plugins/aikido
title: "Aikido Security"
section: plugins
---

<!-- para:0001 -->
# Aikido Security

<!-- para:0002 -->
Aikido Security scanning for Claude Code — SAST, secrets, and IaC vulnerability detection by Aikido MCP server.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/aikido#)
- Made by: [Aikido Security](https://aikido.dev/)
- Installs396

<!-- para:0004 -->
Aikido Security scanning for Claude Code detects SAST vulnerabilities, exposed secrets, and Infrastructure-as-Code misconfigurations in code you write or modify. Powered by the Aikido MCP server, it scans your files in real time and guides Claude to fix issues before they ship.

<!-- para:0005 -->
The plugin automatically identifies files generated or changed during your session, runs a full security scan (up to 50 files per request), and when vulnerabilities are found, applies remediation guidance and re-scans — repeating up to three times until the code is clean. Each finding includes its title, severity, location, and line numbers.

<!-- para:0006 -->
**How to use: ** After installing, run `/aikido:setup your-api-key` to configure your Aikido API key (get one from app.aikido.dev → Settings → Integrations → IDE Plugins). Then use `/aikido:scan` to scan modified or new files for security issues, apply fixes, and re-scan until clean. You can also ask Claude naturally — for example, "scan my code for security vulnerabilities" or "check for exposed secrets in the files I changed."**

<!-- para:0007 -->
Requires Node.js 18 or later and an Aikido API key.

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
