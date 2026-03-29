---
source_url: https://claude.com/plugins/data-engineering
title: "Data Engineering"
section: plugins
---

<!-- para:0001 -->
# Data Engineering

<!-- para:0002 -->
Data engineering plugin - warehouse exploration, pipeline authoring, Airflow integration

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/data-engineering#)
- Made by: [Astronomer](https://www.astronomer.io/)
- Installs841

<!-- para:0004 -->
A comprehensive data engineering plugin that brings warehouse exploration, pipeline authoring, and Apache Airflow management directly into your coding workflow. It provides over 30 specialized skills spanning DAG development, data analysis, dbt integration, data lineage tracing, and Airflow deployment — plus an MCP server for full Airflow REST API access. An integrated `af` CLI tool lets you interact with Airflow instances from your terminal to list DAGs, trigger runs, diagnose failures, and manage connections.

<!-- para:0005 -->
Query your data warehouse to answer business questions using natural language, profile tables, check data freshness, and trace upstream or downstream lineage across your pipelines. The plugin caches discovered patterns and table-to-concept mappings so repeated analysis gets faster over time.

<!-- para:0006 -->
Author new Airflow DAGs through a guided Discover → Plan → Implement → Validate → Test → Iterate workflow, with built-in validation commands that catch errors before you deploy. Integrate dbt projects into Airflow using Astronomer Cosmos, with support for multiple execution modes and parsing strategies. Migrate pipelines from Airflow 2.x to 3.x with dedicated upgrade assistance.

<!-- para:0007 -->
**How to use: ** Ask questions and give commands like: "Create a new DAG that ingests data from S3 into Snowflake every hour", "Why did my ETL pipeline fail last night?", "Trace the upstream lineage of the orders table", "How many active users signed up last month?", "Profile the customers table and check freshness", "Help me migrate this DAG from Airflow 2 to 3", or "Set up a dbt project with Cosmos in my Airflow environment".**

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
