---
source_url: https://claude.com/plugins/cockroachdb
title: "CockroachDB"
section: plugins
---

<!-- para:0001 -->
# CockroachDB

<!-- para:0002 -->
CockroachDB plugin for Claude Code — explore schemas, write SQL, debug queries, manage clusters

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/cockroachdb#)
- Made by: [Cockroach Labs](https://www.cockroachlabs.com/)
- Installs193

<!-- para:0004 -->
Connect Claude Code directly to your CockroachDB clusters for hands-on database work. This plugin provides three core MCP tools — execute SQL, list schemas, and list tables — letting you explore database structure, run queries, and manage data without leaving your coding session. It includes a specialized DBA agent with deep knowledge of CockroachDB distributed SQL internals for diagnosing performance issues, reviewing schema designs, analyzing query plans, and planning multi-region deployments.

<!-- para:0005 -->
The plugin ships with 22+ structured skills across 9 operational domains: onboarding and migrations (MOLT fetch, replicator, and verify), observability and diagnostics (range distribution analysis, statement and transaction fingerprint profiling, live SQL activity triage), operations and lifecycle (cluster provisioning, maintenance, upgrades, health reviews), and security and governance (audit logging, TLS certificates, SSO/SCIM, CMEK encryption, compliance documentation). Built-in safety hooks validate SQL before execution and check SQL files after edits to prevent destructive operations and catch anti-patterns.

<!-- para:0006 -->
**How to use: ** Install with `claude plugin install cockroachdb`, then set your connection environment variables (COCKROACHDB_HOST, COCKROACHDB_PORT, COCKROACHDB_USER, COCKROACHDB_PASSWORD, COCKROACHDB_DATABASE). Try prompts like: "List all tables in my database and describe their schemas", "Write an optimized query to find the top 10 customers by order volume", "Analyze the EXPLAIN plan for this slow query and suggest indexes", "Review my schema for write hotspot risks", or "Help me plan a multi-region deployment for this cluster". Use the DBA agent for autonomous deep-dive diagnostics with prompts like "Diagnose why this query is slow" or "Check my cluster health and recommend improvements".**

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
