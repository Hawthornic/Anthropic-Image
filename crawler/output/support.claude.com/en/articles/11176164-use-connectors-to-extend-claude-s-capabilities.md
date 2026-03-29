---
source_url: https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
title: "Use connectors to extend Claude's capabilities"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This guide explains how to enable and use connectors with Claude to enhance its capabilities.

<!-- para:0002 -->
Connectors let Claude access your apps and services, retrieve your data, and take actions within connected services. For example, you can connect Claude to Linear to create issues, to Slack to send messages, or to Google Drive to search your files. Connectors work across Claude, Claude Desktop, Claude Code, and the API (via the **[MCP Connector](https://platform.claude.com/docs/en/agents-and-tools/mcp-connector)**).

<!-- para:0003 -->
You can find available connectors in the **[Connectors Directory](https://claude.ai/connectors)**, where each connector has a page detailing its use cases, read/write capabilities, and availability. You can also add custom connectors or connect to any service that supports MCP.

<!-- para:0004 -->
You can browse the directory from two areas:

<!-- para:0005 -->
**From a chat**

<!-- para:0006 -->
**From settings**

<!-- para:0007 -->
To connect a service from the directory:

<!-- para:0008 -->
Before members of Team and Enterprise plans can use connectors, an Owner or Primary Owner needs to enable them for the organization:

<!-- para:0009 -->
Once enabled at the org level, individual users follow the same steps described above to connect and authenticate.

<!-- para:0010 -->
Once you connect to a service on Claude or Claude Desktop, it will be available to use the next time you log in to your account on Claude for iOS or Android.

<!-- para:0011 -->
Once connected, services become available in your conversations:

<!-- para:0012 -->
For example, after connecting Linear, you can ask Claude to "Create a new issue for the login bug" and Claude will use Linear to create the issue in your workspace.

<!-- para:0013 -->
Some connectors are interactive and can render live interfaces — like dashboards, task boards, and design tools — directly within your conversation. Look for the **Interactive** badge in the Connectors Directory to find connectors with this capability.

<!-- para:0014 -->
When you add many connectors, Claude gives you control over how they load. You can find the **Tool access** setting by clicking the “+” button in the lower left corner of your chat, or typing “/” to open the menu. Hover over “Connectors,” then “Tool access” to choose your preferred mode. For most users, **Auto** (the default) works well. If you have 10 or more connectors active, consider switching to **On demand** to give your conversations more room.

<!-- para:0015 -->
Learn more about tool access modes: **[Manage Claude's tool access](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access)**.

<!-- para:0016 -->
To manage your connected services:

<!-- para:0017 -->
In addition to directory connectors, you can add custom connectors:

<!-- para:0018 -->
For more information, see **[Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)**.

<!-- para:0019 -->
All data transfers are encrypted. When using connectors, you can only sync content to Claude that you have permission to view in the original source.

<!-- para:0020 -->
When connecting to services from the directory, review what access the service is requesting during the connection process. Disconnect services you no longer need or use.

<!-- para:0021 -->
**For Team and Enterprise plans:**

<!-- para:0022 -->
If you're having trouble connecting to a service, try these steps: check that you have a stable internet connection, verify you have an active account with the connector, review any permissions or account type requirements, and if authentication fails, try disconnecting and reconnecting.
