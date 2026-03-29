---
source_url: https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp
title: "Get started with custom connectors using remote MCP"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Custom connectors let you connect Claude directly to the tools and data sources that matter most to your workflows. This enables Claude to operate within your favorite software and draw insights from the complete context of your external tools.

<!-- para:0002 -->
You can:

<!-- para:0003 -->
The Model Context Protocol (MCP) is an open standard, created by Anthropic, for AI applications to connect to tools and data.

<!-- para:0004 -->
Previously, **[MCP servers only ran locally](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)** (i.e. on a user's laptop). Now, developers can build and host remote MCP servers that communicate with AI apps over the internet.

<!-- para:0005 -->
Remote MCP servers give models access to internet-hosted tools and data, transforming Claude into an informed teammate that can independently handle complex, multi-step projects tailored to your needs.

<!-- para:0006 -->
**Preliminary steps for owners:**

<!-- para:0007 -->
Before members of Team and Enterprise plans can configure custom connectors, an Owner or Primary Owner needs to follow these initial steps to add a custom connector to your organization:

<!-- para:0008 -->
**Steps for members after connector is configured:**

<!-- para:0009 -->
If you are using an individual Pro or Max plan, follow these steps to add a custom connector:

<!-- para:0010 -->
You can enable connectors for individual conversations via the “+” button on the lower left of your chat interface, then "Connectors." You'll see your configured connectors with toggles allowing you to enable/disable them per conversation.

<!-- para:0011 -->
You can remove a custom connector by following these steps:

<!-- para:0012 -->
If you're hoping to edit a custom connector, you'll need to remove it first, then re-add it using the updated details.

<!-- para:0013 -->
To learn about building connectors to use with Claude, see Building custom connectors via remote MCP servers.

<!-- para:0014 -->
Custom connectors allow you to connect Claude to arbitrary services that have not been verified by Anthropic. When you connect Claude to external services, you're granting it the ability to access and potentially modify data within those services based on your permissions. It’s important to make sure you’re only connecting to remote MCP servers that you trust and that you’re aware of Claude’s interactions with web connectors.

<!-- para:0015 -->
When you add a custom connector to Claude, you'll typically go through an OAuth authentication process to securely sign in to the application and grant specific permissions. This allows Claude to interact with the application on your behalf, without Claude ever seeing your actual password. You can revoke these permissions at any time by disconnecting the connector in Claude's settings or the third-party service's security settings.

<!-- para:0016 -->
Remote MCP servers act as intermediaries between Claude and external applications. You should:

<!-- para:0017 -->
If you become aware of a malicious MCP server, please report it to our **[vulnerability disclosure program](https://hackerone.com/anthropic-vdp/)**, and choose [`https://github.com/modelcontextprotocol`](https://github.com/modelcontextprotocol) as the Asset.

<!-- para:0018 -->
Remote MCP servers give Claude tools it can invoke during your conversation. The developer of an MCP server can define what these tools do, including:

<!-- para:0019 -->
Claude can only access resources that you've given the server permission to access, but you should:

<!-- para:0020 -->
Some connectors can display interactive interfaces directly within your Claude conversations. Instead of only returning text-based responses, these connectors can open live, interactive apps — like dashboards, task boards, or design tools — right in the chat.

<!-- para:0021 -->
Interactive connectors appear in two ways:

<!-- para:0022 -->
You can interact with these connectors directly — filtering data, checking off tasks, adjusting settings — without leaving the conversation. Any actions you take within the interface use the same permissions you granted when connecting the tool.

<!-- para:0023 -->
**Admin controls:** Team and Enterprise plan owners can disable specific tool calls that render interactive connectors within **[Organization settings > Connectors](https://claude.ai/admin-settings/connectors)**.**

<!-- para:0024 -->
Research allows Claude to deeply investigate queries by searching through hundreds of internal and external sources. During the research process, Claude can invoke tools from your connectors automatically without further approval.

<!-- para:0025 -->
When using Research with custom connectors:

<!-- para:0026 -->
See **[Using Research on Claude](https://support.claude.com/en/articles/11088861-using-research-on-claude)** for more information about this feature.
