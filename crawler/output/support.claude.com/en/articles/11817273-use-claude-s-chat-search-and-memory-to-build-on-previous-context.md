---
source_url: https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context
title: "Use Claude’s chat search and memory to build on previous context"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
You can now prompt Claude to search through your previous conversations to find and reference relevant information in new chats. Additionally, Claude can remember context from previous chats, creating continuity across your conversations. This article introduces Claude’s chat search and memory capabilities and explains how they work, what Claude can and can’t remember, and how you can toggle the features on/off.

<!-- para:0002 -->
You can prompt Claude to search through your previous conversations to find relevant information across sessions and reference specific details when needed. Simply ask Claude to find what you discussed before, and it will pull together the appropriate context to keep your conversation flowing. These searches use Retrieval-Augmented Generation (RAG) and will appear as tool calls during your conversations.

<!-- para:0003 -->
You can prompt Claude to search conversations within these boundaries:

<!-- para:0004 -->
Once the ability to search past chats is rolled out to your account, it will be enabled by default. Just ask Claude about your previous conversations naturally to use it, such as:

<!-- para:0005 -->
When Claude searches your previous chats, you will see this reflected in your current chat as a tool call.

<!-- para:0006 -->
Yes, navigate to **[Settings > Capabilities](http://claude.ai/settings/capabilities)** and find the **Preferences** section. Switch the toggle next to “Search and reference chats” off:

<!-- para:0007 -->
When starting a new chat with Claude outside of a project, you'll see a ghost icon in the upper right corner of your screen:

<!-- para:0008 -->
Clicking the ghost icon will open an incognito chat, creating a temporary conversation that isn’t saved to your chat history. Claude won’t pull information from incognito chats when searching previous conversations.

<!-- para:0009 -->
Claude can now generate memory based on your chat history. With the addition of memory, Claude transforms from a stateless chat interface into a knowledgeable collaborator that builds understanding over time.

<!-- para:0010 -->
In addition to searching past chats, enabling Claude’s memory feature adds several capabilities.

<!-- para:0011 -->
Claude will automatically summarize your conversations and create a synthesis of key insights across your chat history (not including chats in projects). This synthesis is updated every 24 hours and provides context for every new standalone conversation.

<!-- para:0012 -->
Each project has its own separate memory space and dedicated project summary, so the context within each of your projects is focused, relevant, and separate from other projects or non-project chats.

<!-- para:0013 -->
You can toggle Claude’s memory on by navigating to [Settings > Capabilities](http://claude.ai/settings/capabilities):

<!-- para:0014 -->
If you want to disable Claude’s memory, click the toggle to see two options:

<!-- para:0015 -->
Claude focuses on work-related context that helps improve collaboration. You will see this information reflected in your memory or project summary:

<!-- para:0016 -->
When starting a chat with Claude outside of a project, you will see a ghost icon in the upper right corner of your screen; clicking this enables incognito chats. When this mode is switched on, Claude won’t remember your chats, so they won’t be saved to Claude’s memory or your chat history. Close your current incognito chat when you’re ready for Claude to start remembering your conversations again.

<!-- para:0017 -->
All memory will be retained in accordance with existing chat data retention policies.

<!-- para:0018 -->
You have several mechanisms for managing and overseeing Claude's memory.

<!-- para:0019 -->
See exactly what Claude remembers about you by navigating to **[Settings > Capabilities](http://claude.ai/settings/capabilities)** and clicking “View and edit memory.” The **Manage memory** modal displays everything Claude remembers about you. In addition to asking Claude to edit the existing summary, you can also tell Claude what you want it to remember. To add custom instructions to Claude’s memory, click the pencil icon in the lower left corner of the summary.

<!-- para:0020 -->
You can also update your memory summary directly from your chats. Simply tell Claude what you'd like it to remember, and it will update your memory summary without needing to leave the conversation. Any edits made in this way will immediately apply to your next conversation, so you don’t need to wait for the daily synthesis to run.

<!-- para:0021 -->
When Claude references previous conversations, you'll see citations linking back to the original chats, along with the option to delete specific conversations.

<!-- para:0022 -->
You maintain control over Claude’s ability to search past chats and use memory – you can always disable these features and enable them again when needed in **[Settings > Capabilities](http://claude.ai/settings/capabilities)**.

<!-- para:0023 -->
You can now transfer your memory between Claude and other AI services. This feature lets you import memories from other AI assistants or export your Claude memory for backup or migration. This feature is experimental and still in active development, but for best practices, see this article: **[Importing and exporting your memory from Claude](https://support.claude.com/en/articles/12123587-importing-and-exporting-your-memory-from-claude)**.

<!-- para:0024 -->
Enterprise plan Owners and Primary Owners have specific controls for managing memory features across their organization.

<!-- para:0025 -->
The organization-wide **Generate memory from chat history** toggle is enabled by default. When enabled, individual users can manage their own memory settings. Owners can disable the memory summary feature for their entire organization by navigating to **[Organization settings > Capabilities](https://claude.ai/admin-settings/capabilities)**. When disabled by an Owner, it immediately deletes all existing memory synthesis data for all users, and individual users cannot modify or access the memory synthesis setting.

<!-- para:0026 -->
Team plans do not have organization-level controls for memory features. Individual Team plan members manage their own memory settings directly.
