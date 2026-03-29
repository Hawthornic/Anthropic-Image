---
source_url: https://support.claude.com/en/articles/10593882-sharing-and-unsharing-chats
title: "Sharing and Unsharing Chats"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Learn how to create shareable links to your chats with Claude. While chats are always private by default, you can easily create snapshots of your conversations to share via direct link. This guide walks you through the process of sharing and unsharing chats.

<!-- para:0002 -->
To share a chat:

<!-- para:0003 -->
Once a chat has been shared, anyone with the link can view the chat snapshot. The chat snapshot includes all messages that were sent prior to sharing the chat, including any artifacts. All messages sent after sharing a chat will remain private by default. However, if you unshare the chat and share it again, the snapshot will be updated to include any new messages.

<!-- para:0004 -->
When sharing chats that include uploaded files or MCP (Model Context Protocol) integrations, it's important to understand what information is included in the shared snapshot.

<!-- para:0005 -->
**Attached files:** If you share a chat that contains an attached file, the file itself is not included in the shared snapshot and remains private. Only the conversation and Claude's responses will be visible to anyone with the link.**

<!-- para:0006 -->
**MCP tool calls:** When sharing chats that use MCP integrations, the raw data retrieved from MCP tool calls remains hidden in the shared snapshot. Only the final chat output and conversation will be visible to viewers. The underlying tool call data stays private.**

<!-- para:0007 -->
This ensures that sensitive information from your files and connected tools is protected, even when you share a chat snapshot.

<!-- para:0008 -->
To unshare a chat:

<!-- para:0009 -->
Users on free, Pro, or Max plans can review a log of shared chats by navigating to [Settings > Privacy](https://claude.ai/settings/data-privacy-controls). Find the **Privacy settings** section and click “Manage” next to **Shared chats:**

<!-- para:0010 -->
This will open a **Shared chats** modal listing the title, date shared, and link to each chat, allowing you to easily review and access all your previously-shared content. From here, you also have the option to click “Unshare” next to each listed chat to revoke access to the last snapshot you shared:

<!-- para:0011 -->
If you don’t have any shared chat snapshots, the **Shared chats** modal will show “No shared content found”:
