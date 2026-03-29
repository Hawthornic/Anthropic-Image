---
source_url: https://claude.com/plugins/migration-to-aws
title: "Migration to AWS"
section: plugins
---

<!-- para:0001 -->
# Migration to AWS

<!-- para:0002 -->
Assess cloud usage/billing, compare AWS services/pricing, recommend migration or continued use of current provider.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/migration-to-aws#)
- Made by: [Amazon Web Services](https://aws.amazon.com/)
- Installs709

<!-- para:0004 -->
Provides a structured, five-phase workflow for migrating cloud infrastructure from Google Cloud Platform to Amazon Web Services. The plugin analyzes your existing Terraform-defined GCP resources, maps them to AWS equivalents using a re-platform strategy, estimates costs with live AWS pricing data, and produces a detailed execution plan with risk mitigation and rollback strategies.

<!-- para:0005 -->
The migration workflow progresses through five phases: **Discover** (parse Terraform files to inventory GCP resources), **Clarify** (gather migration requirements via a structured questionnaire), **Design** (map each GCP service to its AWS equivalent, e.g. Cloud Run to Fargate, Cloud SQL to RDS), **Estimate** (project monthly AWS costs with ROI analysis), and **Execute** (create an implementation timeline with risk register). Progress is tracked across sessions in timestamped migration directories so you can resume where you left off.

<!-- para:0006 -->
Connects to two MCP servers for enhanced accuracy: **AWS Pricing** for real-time cost data (with offline fallback) and **AWS Knowledge** for service documentation, regional availability, and architecture best practices.

<!-- para:0007 -->
**How to use: ** Point the plugin at a project containing Terraform files (`.tf`) and use prompts like `"Migrate my GCP infrastructure to AWS"`, `"Move off Google Cloud"`, `"Migrate Cloud SQL to RDS"`, `"Migrate GKE to EKS"`, or `"Estimate the cost of moving our Google Cloud setup to AWS"`. The plugin will guide you through each phase interactively, asking clarifying questions about scope, compliance, and budget before producing architecture mappings and cost estimates.**

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
