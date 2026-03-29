---
source_url: https://support.claude.com/en/articles/13454812-use-interactive-connectors-in-claude
title: "Use interactive connectors in Claude"
section: articles
date: 2026-03-25
---

<!-- para:0001 -->
Some connectors can now display live, interactive apps directly within your Claude conversations. Instead of returning text-only responses, these connectors render interfaces—like analytics dashboards, task boards, or design tools—that you can interact with without leaving the chat.

<!-- para:0002 -->
For example, you might ask Claude about your project status, and instead of just describing it, Claude opens your Asana board right in the conversation. You can check off tasks, update statuses, and keep chatting with Claude—all in one place.

<!-- para:0003 -->
Claude can also generate its own custom visuals—diagrams, charts, and simple interactive elements built from scratch for your question. When a connected service offers an interactive interface that handles your request, like an MCP app, Claude will use it. Custom visuals fill the gaps when no connector interface fits what you’re asking for.

<!-- para:0004 -->
For more on Claude-generated visuals, see **[Custom visuals in chat](https://support.claude.com/en/articles/13979539-custom-visuals-in-chat)**.

<!-- para:0005 -->
Interactive connectors display in two ways:

<!-- para:0006 -->
**Inline cards** are compact components embedded directly in the conversation. They're ideal for quick summaries, confirmations, and single actions—like a status update or a message draft ready to send.**

<!-- para:0007 -->
**Fullscreen view** provides an immersive interface for complex interactions like data visualizations, document editing, or detailed project views. The conversation input remains available so you can continue talking to Claude while interacting with the connector.**

<!-- para:0008 -->
You can interact directly with elements inside the connector:

<!-- para:0009 -->
If you need to ask Claude to modify something, refine a result, or navigate to a different context, type in the conversation input—Claude can interpret your request and update the interface accordingly.

<!-- para:0010 -->
In the **[Connectors Directory](https://claude.ai/directory)**, connectors with this capability are marked with an "Interactive” badge. Current interactive connectors include:

<!-- para:0011 -->
We’re adding support for more interactive connectors over time.

<!-- para:0012 -->
Yes. Team and Enterprise owners can disable the specific tool calls that render interactive connectors within **[Organization settings > Connectors](https://claude.ai/admin-settings/connectors)**. This does not disable the connector itself — text-based tool functionality continues to work normally.

<!-- para:0013 -->
Interactive connectors run in sandboxed iframes with strict Content Security Policies. All communication between the interface and Claude uses auditable JSON-RPC messaging. Servers must predeclare which external domains they need, and the host can review HTML content before rendering.

<!-- para:0014 -->
No. Interactive connectors use the same permissions you granted when connecting the tool. They don't request additional access to your data.

<!-- para:0015 -->
No. Purchases through third-party interactive connectors are not supported.

<!-- para:0016 -->
MCP Apps is the open-source extension to the Model Context Protocol that powers interactive apps. If you are building your own interactive connector, note that it must meet additional design, security, and testing requirements. See the **[Remote MCP Server Submission Guide](https://support.claude.com/en/articles/12922490)** for details.
