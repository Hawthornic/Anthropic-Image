---
source_url: https://claude.com/blog/context-management
title: "Managing context on the Claude Developer Platform"
section: blog
date: 2025-09-29
---

<!-- para:0001 -->
Today, we’re introducing new capabilities for managing your agents’ context on the Claude Developer Platform: context editing and the memory tool.

<!-- para:0002 -->
With our latest model, [Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5), these capabilities enable developers to build AI agents capable of handling long-running tasks at higher performance and without hitting context limits or losing critical information.

<!-- para:0003 -->
## Context windows have limits, but real work doesn’t

<!-- para:0004 -->
As production agents handle more complex tasks and generate more tool results, they often exhaust their effective context windows—leaving developers stuck choosing between cutting agent transcripts or degrading performance. Context management solves this in two ways, helping developers ensure only relevant data stays in context and valuable insights get preserved across sessions.

<!-- para:0005 -->
**Context editing** automatically clears stale tool calls and results from within the context window when approaching token limits. As your agent executes tasks and accumulates tool results, context editing removes stale content while preserving the conversation flow, effectively extending how long agents can run without manual intervention. This also increases the effective model performance as Claude focuses only on relevant context.**

<!-- para:0006 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6909051d7a73a4b74ba8767a_8ad2952bc0513750088cdfd309ee83ba0fd15438-1920x800.webp)

<!-- para:0007 -->
**The memory tool** enables Claude to store and consult information outside the context window through a file-based system. Claude can create, read, update, and delete files in a dedicated memory directory stored in your infrastructure that persists across conversations. This allows agents to build up knowledge bases over time, maintain project state across sessions, and reference previous learnings without having to keep everything in context.**

<!-- para:0008 -->
The memory tool operates entirely client-side through tool calls. Developers manage the storage backend, giving them complete control over where the data is stored and how it’s persisted.

<!-- para:0009 -->
Claude Sonnet 4.5 enhances both capabilities with built-in context awareness—tracking available tokens throughout conversations to manage context more effectively.

<!-- para:0010 -->
Together, these updates create a system that improves agent performance:

<!-- para:0011 -->
- Enable longer conversations by automatically removing stale tool results from context
- Boost accuracy by saving critical information to memory—and bring that learning across successive agentic sessions

<!-- para:0012 -->
## Building long-running agents

<!-- para:0013 -->
Claude Sonnet 4.5 is the best model in the world for building agents. These features unlock new possibilities for long-running agents—processing entire codebases, analyzing hundreds of documents, or maintaining extensive tool interaction histories. Context management builds on this foundation, ensuring agents can leverage this expanded capacity efficiently while still handling workflows that extend beyond any fixed limit. Use cases include:

<!-- para:0014 -->
- **Coding: ** Context editing clears old file reads and test results while memory preserves debugging insights and architectural decisions, enabling agents to work on large codebases without losing progress.
- **Research: **Memory stores key findings while context editing removes old search results, building knowledge bases that improve performance over time.
- **Data processing: **Agents store intermediate results in memory while context editing clears raw data, handling workflows that would otherwise exceed token limits.

<!-- para:0015 -->
## Performance improvements with context management

<!-- para:0016 -->
On an internal evaluation set for agentic search, we tested how context management improves agent performance on complex, multi-step tasks. The results demonstrate significant gains: combining the memory tool with context editing improved performance by 39% over baseline. Context editing alone delivered a 29% improvement.

<!-- para:0017 -->
In a 100-turn web search evaluation, context editing enabled agents to complete workflows that would otherwise fail due to context exhaustion—while reducing token consumption by 84%.

<!-- para:0018 -->
## Getting started

<!-- para:0019 -->
These capabilities are available today in public beta on the Claude Developer Platform, natively and in Amazon Bedrock and Google Cloud’s Vertex AI. Explore the documentation for [context editing](https://docs.claude.com/en/docs/build-with-claude/context-editing) and the [memory tool](https://docs.claude.com/en/docs/agents-and-tools/tool-use/memory-tool), or visit our [cookbook](https://platform.claude.com/cookbook/tool-use-memory-cookbook) to learn more.

<!-- para:0020 -->
*Anthropic is not affiliated with, endorsed by, or sponsored by CATAN GmbH or CATAN Studio. The CATAN trademark and game are the property of CATAN GmbH.*
