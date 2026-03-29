---
source_url: https://claude.com/blog/extending-claude-capabilities-with-skills-mcp-servers
title: "Extending Claude’s capabilities with skills and MCP servers"
section: blog
date: 2025-12-19
---

<!-- para:0001 -->
***Update: ****We've published*[*Agent Skills*](https://agentskills.io/)*as an open standard for cross-platform portability. (December 18, 2025)* Since [launching Skills](https://claude.com/blog/skills), two of the biggest questions we’ve heard from customers are: "How do skills and MCP work together? When should I use one versus the other?"***

<!-- para:0002 -->
[Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) connects Claude to third-party tools, and skills teach Claude how to use them well. When you combine both, you can build agents that follow your team’s workflows, not generic processes that require constant correction.

<!-- para:0003 -->
For example, an MCP connection to Notion lets Claude search your workspace. Add a skill for meeting prep, and Claude knows *which* pages to pull from, *how* to format the prep document, and *what* your team’s standards are for delivering meeting notes. The connection becomes useful instead of just available.

<!-- para:0004 -->
In this article, we break down the relationship between skills and MCP, how to combine them to build agents that follow your workflows to produce consistent outputs, and walk through a few real-world examples of how they work together in practice.

<!-- para:0005 -->
## **Understanding skills and MCP**

<!-- para:0006 -->
You walk into a hardware store looking to fix a broken cabinet. The store has everything you need (wood glue, clamps, replacement hinges) but knowing what items to buy and how to use them is a different problem.

<!-- para:0007 -->
MCP is like having access to the aisles. Skills, meanwhile, are like an employee's expertise. All the inventory in the world won't help if you don't know which items you need or how to use them. A skill is like the helpful employee who walks you through the repair process, points you to the right supplies, and shows you proper technique.

<!-- para:0008 -->
Put more concretely, an MCP server gives Claude access to your external systems, services, and platforms, while skills provide the context Claude needs to use those connections effectively, teaching Claude what to do now that it has this access. Without the context that skills provide, Claude has to guess at what you want. With a skill, Claude can follow your playbook instead.

<!-- para:0009 -->
## **Why skills and MCP work well together**

<!-- para:0010 -->
MCP handles connectivity: secure, standardized access to external systems. Whether you're connecting to Git Hub, Salesforce, Notion, or your own internal APIs, MCP servers give Claude the ability to reach your tools and data.

<!-- para:0011 -->
Skills handle expertise: the domain knowledge and workflow logic that turn raw tool access into reliable outcomes. A skill knows when to query your CRM, what to look for in the results, how to format the output, and which edge cases require different handling. This separation keeps the architecture composable. A single skill can orchestrate multiple MCP servers, while a single MCP server can support dozens of different skills. Add a new connection, and existing skills can incorporate it. Refine a skill, and it works across all your connected tools.

<!-- para:0012 -->
#### **When you combine skills and MCP, you get: **

<!-- para:0013 -->
**Clear discovery**: Claude stops guessing where to look. A meeting prep skill might specify: check the project page first, then previous meeting notes, then stakeholder profiles. A research skill might say: start with the shared drive, cross-reference against the CRM, then fill gaps with web search. The skill encodes institutional knowledge about which sources matter for which tasks.**

<!-- para:0014 -->
**Reliable orchestration**: Multi-step workflows become predictable. Without a skill, Claude might pull data and format it before checking whether it has everything. Skills define the sequence explicitly, so Claude executes the workflow the same way every time.**

<!-- para:0015 -->
**Consistent performance**: Outputs actually meet standards. Generic results need editing. Skills define what "done" looks like for your team: the right structure, the right level of detail, the right tone for your audience.**

<!-- para:0016 -->
Over time, teams build up collections of interrelated skills and connections that give Claude expertise in their specific domain.

<!-- para:0017 -->
**Further reading**: Tim O'Reilly on what [MCP and skills mean for open source AI](https://www.oreilly.com/radar/what-mcp-and-claude-skills-teach-us-about-open-source-for-ai/)**

<!-- para:0018 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6945b3dfa8f134d0104e4e23_How%20Skills%20and%20MCP%20work%20together%20-%20v3B%402x%20(2).png)

How skills and MCP work together: MCP provides tool access, skills provide workflow logic.

<!-- para:0019 -->
#### **Where skills and MCP may overlap**‍

<!-- para:0020 -->
MCP servers may contain instructions in the form of tool usage hints and prompts for common tasks. This keeps tool-specific knowledge close to the tool. However, these instructions should be kept generic by design.

<!-- para:0021 -->
The rule of thumb: MCP instructions cover how to use the server and its tools correctly. Skill instructions cover how to use them for a given process or in a multiserver workflow.

<!-- para:0022 -->
For example, a Salesforce MCP server might specify query syntax and API formats. A skill would specify which records to check first, how to cross-reference them against Slack conversations for recent context, and how to structure the output for your team's pipeline review. When combining MCP servers and skills, watch for conflicting instructions. If your MCP server says to return JSON and your skill says to format as markdown tables, Claude has to guess which one is right. Let MCP handle connectivity, and let skills handle presentation, sequencing, and workflow logic.

<!-- para:0023 -->
**Further reading: ** Learn how skills use [progressive disclosure](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) to load context on-demand and [programmatic tool calling](https://www.anthropic.com/engineering/advanced-tool-use) to orchestrate MCP tools efficiently.**

<!-- para:0024 -->
## **Real-world examples of using skills and MCP together**

<!-- para:0025 -->
Now let's look at how skills and MCP combine in real workflows. We'll walk through two examples: financial analysts pulling live market data for company valuations, and project managers using Notion's Meeting Intelligence skill for meeting prep.

<!-- para:0026 -->
In both cases, MCP servers provide access to the tools and the skills define what to do with them.

<!-- para:0027 -->
#### **Financial analysis: Automating company valuations skill**

<!-- para:0028 -->
[Anthropic released a set of pre-built skills](https://www.anthropic.com/news/advancing-claude-for-financial-services) for common financial workflows, including comparable company analysis. Comparable company analysis is a standard valuation method. Analysts doing comparable company analysis spend hours pulling financial metrics from multiple sources, applying the same valuation methodology, and formatting outputs to meet compliance standards. It's repetitive, error-prone, and exactly the kind of workflow that benefits from skills and MCP working together.

<!-- para:0029 -->
**Skill**: [Comparable company analysis](https://www.anthropic.com/news/advancing-claude-for-financial-services) automates this valuation workflow, pulling data from multiple sources, applying consistent methodology, and formatting outputs to specific standards.**

<!-- para:0030 -->
**MCP servers**: Connections to S&P Capital IQ, Daloopa, and Morningstar for live market data**

<!-- para:0031 -->
**Workflow**:**

<!-- para:0032 -->
1. Skill identifies which data sources to query (Discovery)
2. MCP connections pull live financial data
3. Skill applies methodology and formats output (Orchestration)
4. Skill validates against compliance requirements (Performance)

<!-- para:0033 -->
#### **Meeting preparation: Notion's Meeting Intelligence skill**

<!-- para:0034 -->
Meeting prep is tedious. You need to pull context from multiple places, such as project docs, previous meeting notes, and stakeholder info, then synthesize it into a pre-read and an agenda. It's the kind of multi-step process you end up re-explaining every time.

<!-- para:0035 -->
**Skill**: [Meeting Intelligence](https://notiondevs.notion.site/notion-skills-for-claude) defines which pages to search, how to structure outputs, what sections to include**

<!-- para:0036 -->
**MCP server**: Notion connection that searches, reads, and creates pages**

<!-- para:0037 -->
1. Skill identifies relevant pages to search, including projects, previous meetings, stakeholder info (Discovery)
2. MCP connection searches and retrieves content from Notion
3. Skill structures two documents: internal pre-read and external agenda (Orchestration)
4. MCP connection saves both documents to Notion, organized and linked
5. Skill ensures outputs match formatting standards (Performance)

<!-- para:0038 -->
## **When to use skills vs. MCP**

<!-- para:0039 -->
**‍**Skills and MCP solve different problems, but deciding which to use for a specific workflow isn't always obvious.**

<!-- para:0040 -->
#### **What to use skills for**

<!-- para:0041 -->
Skills capture the knowledge that would otherwise live in your head, or that gets re-explained every time someone new joins the team. They work best for:

<!-- para:0042 -->
- **Multi-step workflows involving tools**: Meeting prep that pulls from multiple sources, then creates structured documents
- **Processes where consistency matters**: Quarterly financial analyses that must follow the same methodology every time, compliance reviews with mandatory checkpoints
- **Domain expertise you want to capture and share**: Research methodologies, code review standards, writing guidelines
- **Workflows that should survive when team members leave**: Institutional knowledge encoded in reusable instructions

<!-- para:0043 -->
#### **What to use MCP servers for**

<!-- para:0044 -->
MCP extends what Claude can access and use. Use an MCP when you need:

<!-- para:0045 -->
- **Real-time data access**: Searching Notion pages, reading Slack messages, querying databases
- **Actions in external systems**: Creating Git Hub issues, updating project management tools, sending notifications
- **File operations**: Reading from and writing to Google Drive, accessing local filesystems
- **API integrations**: Connecting to services that don't have native Claude support

<!-- para:0046 -->
If you're explaining *how* to do something, that's a skill. If you need Claude to *access* something, that's MCP.

<!-- para:0047 -->
‍

<!-- para:0048 -->
#### ***Quick reference table: How skills and MCP differ***

<!-- para:0049 -->
## **Common questions**

<!-- para:0050 -->
#### **Do skills replace MCP?**

<!-- para:0051 -->
No. Skills and MCP solve different problems. MCP provides connectivity to external tools and data. Skills provide procedural knowledge for how to use that connectivity effectively. Most powerful workflows use both.

<!-- para:0052 -->
#### **Can one skill use multiple MCP servers?**

<!-- para:0053 -->
Yes. A single skill can coordinate multiple MCP servers at once. A technical competitive analysis skill might search Google Drive for internal research, pull competitor repos from Git Hub, and gather market data via web search.

<!-- para:0054 -->
#### **Can I build multiple skills for one MCP server?**

<!-- para:0055 -->
Yes. A skill can enhance the value you get from a single MCP connection. Notion demonstrates this pattern with separate skills for meeting prep, research, knowledge capture, and spec-to-implementation—check them out [here](https://claude.com/connectors/notion).

<!-- para:0056 -->
## **Getting started**

<!-- para:0057 -->
Ready to build with skills *and* MCP? Here's how to start:

<!-- para:0058 -->
**With skills: **

<!-- para:0059 -->
- Enable skills in Settings → Capabilities on [claude.ai](https://claude.ai/)
- Browse the [skills library](https://github.com/anthropics/skills) for pre-built examples
- Read the [skills documentation](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills)

<!-- para:0060 -->
**With MCP: **

<!-- para:0061 -->
- Browse [MCP servers](https://github.com/modelcontextprotocol/servers) for your tools
- Read the [MCP documentation](https://modelcontextprotocol.io/introduction)
- Build your own server with the [MCP quick start](https://modelcontextprotocol.io/quickstart)

<!-- para:0062 -->
**Combine both: **

<!-- para:0063 -->
- Connect an MCP server, then add a skill that uses it

<!-- para:0064 -->
## **Related articles**

<!-- para:0065 -->
Explore more insights on building with Claude's agentic capabilities.

<!-- para:0066 -->
- [Skills explained: How Skills compares to prompts, Projects, MCP, and subagents](https://www.claude.com/blog/skills-explained)
- [Improving frontend design through Skills](https://www.claude.com/blog/improving-frontend-design-through-skills)
- [Equipping agents for the real world with Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
