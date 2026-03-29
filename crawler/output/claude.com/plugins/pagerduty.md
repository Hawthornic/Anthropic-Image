---
source_url: https://claude.com/plugins/pagerduty
title: "Pager Duty Pre-Commit Risk Score"
section: plugins
---

<!-- para:0001 -->
# Pager Duty Pre-Commit Risk Score

<!-- para:0002 -->
Score pre-commit diffs against Pager Duty incident history and surface deployment risk before you ship.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/pagerduty#)
- Made by: [Pager Duty](https://www.pagerduty.com/)
- Installs1341

<!-- para:0004 -->
Assess pre-commit risk by correlating Pager Duty incident history with your current code changes. The `/risk-score` command maps your repo to a Pager Duty service, checks for active incidents, analyzes 90 days of incident history, and identifies correlations between areas you're changing and areas that have caused past incidents.

<!-- para:0005 -->
Outputs a structured risk assessment with a 0-5 score, incident context, structural risk signals, and actionable recommendations. Requires a Pager Duty API key.

<!-- para:0006 -->
**How to use: **

<!-- para:0007 -->
Run `/risk-score` before committing changes to a production service. The plugin checks if there are active P1/P2 incidents on your service and warns you if your changes touch code related to the ongoing incident, helping you avoid making things worse during an outage.

<!-- para:0008 -->
Run `/risk-score` after modifying database migration files or authentication code. The plugin identifies structural risk signals in your diff and cross-references them with past incident patterns, surfacing whether similar changes have preceded incidents in the last 90 days.

<!-- para:0009 -->
Run `/risk-score` on a new repo. The plugin auto-detects your Pager Duty service by matching the repo name, or lets you pick from a list. It caches the mapping so subsequent checks are instant.

<!-- para:0010 -->
## Related plugins

<!-- para:0011 -->
### Frontend Design

<!-- para:0012 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0013 -->
413623

<!-- para:0014 -->
installs

<!-- para:0015 -->
### Superpowers

<!-- para:0016 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0017 -->
294839

<!-- para:0018 -->
### Context7

<!-- para:0019 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0020 -->
212236

<!-- para:0021 -->
### Code Review

<!-- para:0022 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0023 -->
191903
