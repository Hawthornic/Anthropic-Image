---
source_url: https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans
title: "How large is the context window on paid Claude plans?"
section: articles
date: 2026-03-25
---

<!-- para:0001 -->
Claude’s context window size is 200K, meaning it can ingest 200K+ tokens (about 500 pages of text or more) when using a paid Claude plan.

<!-- para:0002 -->
When using Claude Code with a Pro, Max, Team, or Enterprise plan, Opus 4.6 supports a 1M token context window. Pro users need to enable extra usage to access Opus 4.6 in Claude Code. Sonnet 4.6 also supports a 1M context window for all paid Claude plans on Claude Code, but extra usage must be enabled to access it (except for usage-based Enterprise plans).

<!-- para:0003 -->
For users on paid plans with code execution enabled, Claude automatically manages your conversation context. When your conversation approaches the context window limit, Claude summarizes earlier messages to make room for new content. This does not count towards your usage limit, and allows conversations to continue indefinitely in most cases.

<!-- para:0004 -->
Your full chat history is preserved so Claude can reference it, even after earlier portions have been summarized. You may occasionally notice Claude "organizing its thoughts" during long conversations—this is the automatic context management at work.

<!-- para:0005 -->
While context is managed automatically for most conversations, you can still optimize how you use your available context space:
