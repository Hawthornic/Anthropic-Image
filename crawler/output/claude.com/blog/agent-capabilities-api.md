---
source_url: https://claude.com/blog/agent-capabilities-api
title: "New capabilities for building agents on the Anthropic API"
section: blog
date: 2025-05-22
---

<!-- para:0001 -->
Today, we're announcing four new capabilities on the Anthropic API that enable developers to build more powerful AI agents: the code execution tool, MCP connector, Files API, and the ability to cache prompts for up to one hour.

<!-- para:0002 -->
### Building better AI agents

<!-- para:0003 -->
Together with [Claude Opus 4 and Sonnet 4](https://www.anthropic.com/news/claude-4), these beta features enable developers to build agents that execute code for advanced data analysis, connect to external systems through MCP servers, store and access files efficiently across sessions, and maintain context for up to 60 minutes with cost-effective caching—without building custom infrastructure.

<!-- para:0004 -->
For example, a project management AI agent can use the MCP connector with Asana to reference tasks and assign work, upload relevant reports via the Files API, analyze progress and risks with the code execution tool, and maintain full context throughout—all while keeping costs down through extended prompt caching.

<!-- para:0005 -->
These capabilities join existing features like [web search](https://www.anthropic.com/news/web-search-api) and [citations](https://www.anthropic.com/news/introducing-citations-api) as part of a comprehensive toolkit for building AI agents. Read on to explore each new capability in detail.

<!-- para:0006 -->
### Code execution tool

<!-- para:0007 -->
We're introducing a [code execution tool](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/code-execution-tool) on the Anthropic API, giving Claude the ability to run Python code in a sandboxed environment to produce computational results and data visualizations. This transforms Claude from a code-writing assistant into a data analyst that can iterate on visualizations, clean datasets, and derive insights directly within API calls.

<!-- para:0008 -->
With the code execution tool, Claude can load datasets, generate exploratory charts, identify patterns, and iteratively refine outputs based on execution results—all within a single interaction. This means that Claude can handle complex analytical tasks end-to-end, rather than just suggesting code for you to run separately.

<!-- para:0009 -->
Key use cases include:

<!-- para:0010 -->
- **Financial modeling**: Generate financial projections, analyze investment portfolios, and calculate complex financial metrics.
- **Scientific computing**: Execute simulations, process experimental data, and analyze research datasets.
- **Business intelligence**: Create automated reports, analyze sales data, and generate performance dashboards.
- **Document processing**: Extract and transform data across formats, generate formatted reports, and automate document workflows.
- **Statistical analysis**: Perform regression analysis, hypothesis testing, and predictive modeling on datasets.

<!-- para:0011 -->
Organizations receive 50 free hours of usage with the code execution tool per day, then pay $0.05 per hour per container for additional usage. Explore the [documentation](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/code-execution-tool) to learn more about pricing.

<!-- para:0012 -->
### MCP connector

<!-- para:0013 -->
The [MCP connector](https://docs.anthropic.com/en/docs/agents-and-tools/mcp-connector) on the Anthropic API enables developers to connect Claude to any remote Model Context Protocol (MCP) server without writing client code.

<!-- para:0014 -->
Previously, connecting to MCP servers required building your own client harness to handle MCP connections. Now, the Anthropic API handles all connection management, tool discovery, and error handling automatically. Simply add a remote MCP server URL to your API request and you can immediately access powerful third-party tools, dramatically reducing the complexity of building tool-enabled agents.

<!-- para:0015 -->
When Claude receives a request with MCP servers configured, it automatically:

<!-- para:0016 -->
- Connects to the specified MCP servers
- Retrieves available tools
- Reasons about what tool to call and what arguments to pass
- Executes tool calls agentically until a sufficient result is achieved
- Manages authentication and error handling
- Returns the enhanced response with integrated data

<!-- para:0017 -->
The growing ecosystem of remote MCP servers means you can easily add capabilities to your AI applications without building one-off integrations. You can integrate with any remote MCP server, including those from [Zapier](https://zapier.com/mcp) and [Asana](https://developers.asana.com/docs/using-asanas-model-control-protocol-mcp-server). See more remote MCP servers in our [documentation](https://docs.anthropic.com/en/docs/agents-and-tools/remote-mcp-servers).

<!-- para:0018 -->
### Files API

<!-- para:0019 -->
The [Files API](https://docs.anthropic.com/en/docs/build-with-claude/files) simplifies how developers store and access documents when building with Claude. Instead of managing file uploads in every request, you can now upload documents once and reference them repeatedly across conversations.

<!-- para:0020 -->
This streamlines development workflows, particularly for applications that need to work with large document sets such as knowledge bases, technical documentation, or datasets.

<!-- para:0021 -->
The Files API will integrate with the code execution tool, enabling Claude to access and process uploaded files directly during code execution and produce files such as charts and graphs as part of the response. This means developers can upload a dataset through the Files API once, then have Claude analyze it across multiple sessions without re-uploading.

<!-- para:0022 -->
### Extended prompt caching

<!-- para:0023 -->
Developers can now choose between our standard 5-minute time to live (TTL) for [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) or opt for an [extended 1-hour TTL](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching#1-hour-cache-duration-beta) at an [additional cost](https://docs.claude.com/en/docs/build-with-claude/prompt-caching#pricing)—a 12x improvement that can reduce expenses for long-running agent workflows. With extended caching, customers can provide Claude with extensive background knowledge and examples while reducing costs by up to 90% and latency by up to 85% for long prompts.

<!-- para:0024 -->
This makes it practical to build agents that maintain context over extended periods, whether they're handling multi-step workflows, analyzing complex documents, or coordinating with other systems. Long-running agent applications that previously faced prohibitive costs can now operate efficiently at scale.

<!-- para:0025 -->
### Getting started

<!-- para:0026 -->
All of these features are now available in public beta on the Anthropic API. [Visit our documentation](https://docs.anthropic.com/en/docs/overview) to learn more or [watch the keynote](https://www.youtube.com/live/EvtPBaaykdo) from our developer conference to see these capabilities in action.
