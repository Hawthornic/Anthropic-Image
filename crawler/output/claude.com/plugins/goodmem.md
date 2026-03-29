---
source_url: https://claude.com/plugins/goodmem
title: "Good Mem"
section: plugins
---

<!-- para:0001 -->
# Good Mem

<!-- para:0002 -->
Good Mem: AI memory infrastructure. Python SDK and MCP tools manage embedders, spaces, memories via natural language.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/goodmem#)
- Made by: [PAIR Systems](https://docs.goodmem.ai/)
- Installs434

<!-- para:0004 -->
Good Mem provides memory infrastructure for AI agents, enabling storage, retrieval, and semantic search over vector embeddings. The plugin exposes 41 MCP tools across 10 functional namespaces — covering embedder management, memory spaces, semantic retrieval, LLM and reranker registration, OCR, and administration. A built-in registry of 79 models (29 embedders, 34 LLMs, 16 rerankers) auto-infers provider types, endpoints, and dimensionality from a model identifier, reducing manual setup.

<!-- para:0005 -->
The plugin supports two usage modes. You can perform Good Mem operations directly through natural language — Claude will invoke the underlying MCP tools to create embedders, manage memory spaces, store documents, and run semantic searches. Alternatively, you can ask Claude to generate Python scripts using the Good Mem SDK for building complete RAG pipelines and retrieval applications.

<!-- para:0006 -->
Supported providers include OpenAI, Cohere, Voyage, Google, Jina, Anthropic, and Mistral for embeddings, language models, and rerankers. SaaS provider credentials are validated before API calls, with clear error messages for missing keys. Configuration can be done via environment variables or interactively in chat.

<!-- para:0007 -->
**How to use: ** After installing, configure your Good Mem credentials by setting `GOODMEM_BASE_URL` and `GOODMEM_API_KEY` environment variables, or say "configure Good Mem" to set them interactively. Then try prompts like: "Create an embedder using OpenAI text-embedding-3-small", "Create a memory space called 'project-docs' and ingest this file", "Search my memories for authentication error handling", or "Write a Python RAG pipeline using the Good Mem SDK". Use `/goodmem:help` for setup guidance, `/goodmem:mcp` for the full MCP tools reference, and `/goodmem:python` for Python SDK documentation.**

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
