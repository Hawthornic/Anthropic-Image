---
source_url: https://claude.com/plugins/fastly-agent-toolkit
title: "Fastly Agent Toolkit"
section: plugins
---

<!-- para:0001 -->
# Fastly Agent Toolkit

<!-- para:0002 -->
Fastly development tools and platform skills

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/fastly-agent-toolkit#)
- Made by: [Fastly](https://www.fastly.com/)
- Installs218

<!-- para:0004 -->
A collection of six specialized skills that give your coding agent deep knowledge of the Fastly edge cloud platform. Covers the full Fastly development lifecycle — from writing and linting VCL, to running Compute applications locally, to managing services, caching, security, and deployment via the Fastly CLI and API.

<!-- para:0005 -->
The toolkit includes skills for: **Fastly platform** knowledge (services, caching, WAF, TLS, DDoS, purging, and API usage), **Fastly CLI** operations, **Falco** (VCL linting, testing, simulation, and formatting), **Viceroy** (local WASM-based Compute execution and testing for Rust projects), **Fastlike** (Go-based local Compute execution), and **XVCL** (a VCL transpiler with metaprogramming features like loops, constants, and macros).

<!-- para:0006 -->
Each skill provides curated reference documentation that the agent consults when working on Fastly projects, helping it avoid common pitfalls like VCL scope violations, incorrect Vary header placement, missing local_server configuration, and deprecated syntax.

<!-- para:0007 -->
### How to use

<!-- para:0008 -->
Install individual skills based on your workflow — for example, add the `falco` and `viceroy` skills if you're developing Fastly Compute apps in Rust. Once installed, skills activate automatically based on context. Try prompts like: "Lint my VCL files and fix any errors", "Set up a local Viceroy dev server for this Compute app", "Configure a new Fastly service with caching and WAF rules", "Transpile my XVCL files to VCL and test them with Falco", or "Help me set up logging endpoints and purge strategies for this Fastly service".

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
