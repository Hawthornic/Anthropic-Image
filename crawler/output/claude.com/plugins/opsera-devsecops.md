---
source_url: https://claude.com/plugins/opsera-devsecops
title: "Opsera Dev Sec Ops"
section: plugins
---

<!-- para:0001 -->
# Opsera Dev Sec Ops

<!-- para:0002 -->
Opsera Dev Sec Ops Agent — AI-powered architecture analysis, security scanning, compliance auditing, and SQL security f...

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/opsera-devsecops#)
- Made by: [Opsera](https://agent.opsera.ai/)
- Installs191

<!-- para:0004 -->
AI-powered Dev Sec Ops agent that analyzes your codebase for security vulnerabilities, architectural risks, and compliance gaps. Connects to Opsera's cloud platform via MCP to deliver risk-focused architecture analysis, vulnerability scanning with secret detection, evidence-based compliance auditing across SOC2/HIPAA/PCI-DSS/ISO 27001 frameworks, and SQL injection detection with automated fixes. Includes a pre-commit security gate that automatically scans staged changes and blocks commits with critical or high-severity issues.

<!-- para:0005 -->
The plugin provides four core analysis tools — each producing detailed findings with severity ratings and actionable remediation steps. Architecture analysis examines auth routes, failure modes, and generates quantified architecture diagrams. Security scanning covers SAST, container security, infrastructure-as-code checks, and secret detection. Compliance auditing maps your codebase against regulatory frameworks and produces remediation roadmaps. SQL security discovers PII exposure, privilege escalation risks, and offers AI-powered auto-fix suggestions.

<!-- para:0006 -->
**How to use: ** Run `/architecture-analyze` to perform a risk-focused review of your system design. Use `/security-scan` to scan for vulnerabilities and secrets across your codebase. Run `/compliance-audit` to assess alignment with SOC2, HIPAA, PCI-DSS, or ISO 27001 standards. Use `/sql-security` to detect SQL injection risks and PII exposure. You can also use natural language — try "analyze the architecture of this project for risks" or "audit this repo for HIPAA compliance." The pre-commit security gate runs automatically before git commits to catch issues early.**

<!-- para:0007 -->
Requires an Opsera account (free trial available). No source code is transmitted — only anonymous usage metadata is reported to the Opsera analytics dashboard.

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
