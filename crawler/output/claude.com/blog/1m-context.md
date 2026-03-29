---
source_url: https://claude.com/blog/1m-context
title: "Claude Sonnet 4 now supports 1M tokens of context"
section: blog
date: 2025-08-12
---

<!-- para:0001 -->
***Update: ****Now available on Google Cloud's Vertex AI (Aug 26, 2025)****

<!-- para:0002 -->
Claude Sonnet 4 now supports up to 1 million tokens of context on the Anthropic API—a 5x increase that lets you process entire codebases with over 75,000 lines of code or dozens of research papers in a single request.

<!-- para:0003 -->
Long context support for Sonnet 4 is now in public beta on the Claude Developer Platform natively, and in Amazon Bedrock and Google Cloud’s Vertex AI.

<!-- para:0004 -->
### Longer context, more use cases

<!-- para:0005 -->
With longer context, developers can run more comprehensive and data-intensive use cases with Claude, including:

<!-- para:0006 -->
- **Large-scale code analysis: **Load entire codebases including source files, tests, and documentation. Claude can understand project architecture, identify cross-file dependencies, and suggest improvements that account for the complete system design.
- **Document synthesis: ** Process extensive document sets like legal contracts, research papers, or technical specifications. Analyze relationships across hundreds of documents while maintaining full context.
- **Context-aware agents: **Build agents that maintain context across hundreds of tool calls and multi-step workflows. Include complete API documentation, tool definitions, and interaction histories without losing coherence.

<!-- para:0007 -->
### API pricing

<!-- para:0008 -->
To account for increased computational requirements, [pricing](https://www.anthropic.com/pricing#api) adjusts for prompts over 200K tokens:

<!-- para:0009 -->
When combined with [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), users can reduce latency and costs for Claude Sonnet 4 with long context. The 1M context window can also be used with [batch processing](https://docs.anthropic.com/en/docs/build-with-claude/batch-processing) for an additional 50% cost savings.

<!-- para:0010 -->
### Customer spotlight: Bolt.new

<!-- para:0011 -->
Bolt.new transforms web development by integrating Claude into their browser-based development platform.

<!-- para:0012 -->
“Claude Sonnet 4 remains our go-to model for code generation workflows, consistently outperforming other leading models in production. With the 1M context window, developers can now work on significantly larger projects while maintaining the high accuracy we need for real-world coding," said Eric Simons, CEO and Co-founder of Bolt.new.

<!-- para:0013 -->
### Customer spotlight: i Gent AI

<!-- para:0014 -->
London-based i Gent AI is advancing the field of software development with Maestro, an AI partner that transforms conversations into executable code.

<!-- para:0015 -->
"What was once impossible is now reality: Claude Sonnet 4 with 1M token context has supercharged autonomous capabilities in Maestro, our software engineering agent at i Gent AI. This leap unlocks true production-scale engineering—multi-day sessions on real-world codebases—establishing a new paradigm in agentic software engineering," said Sean Ward, CEO and Co-founder of i Gent AI.

<!-- para:0016 -->
### Get started

<!-- para:0017 -->
Long context support for Sonnet 4 is now in public beta on the Claude Developer Platform for customers with Tier 4 and custom rate limits, with broader availability rolling out over the coming weeks. Long context is also available in Amazon Bedrock and on Google Cloud's Vertex AI. We’re also exploring how to bring long context to other Claude products.

<!-- para:0018 -->
To learn more about Sonnet 4 and the 1M context window, see our [documentation](https://docs.anthropic.com/en/docs/build-with-claude/context-windows#1m-token-context-window) and [pricing page](https://www.anthropic.com/pricing#api).
