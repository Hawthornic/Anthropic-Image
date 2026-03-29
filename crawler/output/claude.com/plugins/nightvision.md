---
source_url: https://claude.com/plugins/nightvision
title: "Night Vision"
section: plugins
---

<!-- para:0001 -->
# Night Vision

<!-- para:0002 -->
Night Vision: DAST/API Discovery platform finding exploitable vulnerabilities in web applications and APIs

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/nightvision#)
- Made by: [Night Vision Engineering](https://www.nightvision.net/)
- Installs183

<!-- para:0004 -->
Night Vision is a white-box-assisted DAST (Dynamic Application Security Testing) and API Discovery platform that finds exploitable vulnerabilities in web applications and REST APIs. This plugin brings Night Vision's security scanning capabilities directly into your development workflow, letting you configure scans, triage findings, discover APIs, and set up CI/CD integrations through natural language.

<!-- para:0005 -->
The plugin provides four core skills. **Scan Configuration** helps you set up DAST scans by creating targets, configuring authentication (Playwright, headers, or cookies), managing projects, recording HTTP traffic for complex workflows, and defining scope exclusions. **Scan Triage** interprets scan results from ZAP and Nuclei engines in SARIF or CSV format, pinpoints vulnerable code using Code Traceback annotations, constructs curl commands for validation, and suggests remediations for issues like SQL injection, XSS, SSRF, and more. **API Discovery** extracts OpenAPI specifications from source code via static analysis across Python, Java, Java Script, C#, Go, and Ruby frameworks — no running application required — and can diff specs to detect breaking API changes. **CI/CD Integration** generates pipeline configurations for Git Hub Actions, Git Lab CI, Azure Dev Ops, Jenkins, Bit Bucket, and JFrog.

<!-- para:0006 -->
**How to use: ** Install the Night Vision CLI and authenticate with your API token, then try prompts like: `"Set up a Night Vision scan for my web app at https://myapp.com"`, `"Triage the results from my latest Night Vision scan"`, `"Extract an OpenAPI spec from this codebase"`, or `"Add Night Vision scanning to my Git Hub Actions pipeline"`. You can also invoke skills directly with `/scan-configuration`, `/scan-triage`, `/api-discovery`, or `/ci-cd-integration`.**

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
