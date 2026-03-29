---
source_url: https://claude.com/plugins/astronomer-data-agents
title: "Astronomer Data Agents"
section: plugins
---

<!-- para:0001 -->
# Astronomer Data Agents

<!-- para:0002 -->
Apache Airflow/Astronomer: author DAGs, debug failures, trace lineage, profile tables, migrate 2→3, manage deployments

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/astronomer-data-agents#)
- Made by: [Astronomer](https://astronomer.io/)
- Installs211

<!-- para:0004 -->
A comprehensive data engineering toolkit for Apache Airflow and Astronomer. This plugin equips Claude with 22+ specialized skills spanning the full data pipeline lifecycle — from authoring DAGs with best practices, to debugging pipeline failures, tracing data lineage, profiling warehouse tables, and managing local and cloud deployments. It includes an Airflow MCP server providing full REST API integration for DAG management, triggering, task logs, and system health monitoring.

<!-- para:0005 -->
Key capabilities include a structured DAG authoring workflow with validation checkpoints, deep failure diagnosis with root cause analysis, upstream and downstream data lineage tracing (including column-level lineage), table profiling with data quality scoring, and a guided Airflow 2-to-3 migration path powered by automated Ruff linting rules. The plugin also integrates with dbt via Cosmos for analytics engineering workflows, and supports 25+ warehouse backends including Snowflake, Big Query, and PostgreSQL.

<!-- para:0006 -->
The plugin provides an `af` CLI tool for terminal-based Airflow interaction, enabling commands like listing DAGs, triggering runs, inspecting task logs, and checking environment health — all without leaving your coding session.

<!-- para:0007 -->
**How to use: ** Skills are invoked automatically based on your prompts, or you can trigger them directly. Try prompts like:**

<!-- para:0008 -->
- "Write a DAG that loads CSV files from S3 into Snowflake on a daily schedule"
- "Debug why my etl_pipeline DAG failed last night"
- "Trace where the orders_fact table gets its data from"
- "Profile the customers table and check data quality"
- "Migrate my Airflow 2 DAGs to Airflow 3"
- "Set up a new Astro project and deploy it locally"

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
