---
source_url: https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access
title: "Manage Claude’s tool access"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
When you connect many services to Claude, you can control how those connectors are loaded into your conversations. This helps Claude work more accurately and efficiently, especially if you've added 10 or more connectors.

<!-- para:0002 -->
Each connector takes up space in a conversation. With a small number of connected services, this is rarely noticeable. But as your connector library grows, the combined overhead can limit how much room is left for your actual work: documents, code, and conversation history.

<!-- para:0003 -->
To address this, Claude supports three tool access modes that control when and how your connectors are loaded.

<!-- para:0004 -->
You can manage Claude’s access to your connectors per conversation using the **Tool access** setting in your chat.

<!-- para:0005 -->
Choose from three options:

<!-- para:0006 -->
You can set your tool access mode per conversation by following these steps:

<!-- para:0007 -->
Your selection only applies to that conversation. You can change it at any time.

<!-- para:0008 -->
Claude searches for the most relevant connectors based on your request, so it works well for most tasks. For connectors that need to be available every time, use “Always available” or set that connector's access individually.

<!-- para:0009 -->
In “On demand” mode, Claude searches for the right tool before using it. This search step adds one interaction, but keeps your conversation from hitting length limits when you have many tools connected.
