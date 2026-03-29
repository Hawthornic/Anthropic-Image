---
source_url: https://support.claude.com/en/articles/11940350-claude-code-model-configuration
title: "Claude Code model configuration"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This guide shows you three ways to change which Claude model you're using with Claude Code: the quick `/model` command for instant changes, the `--model` flag for one-time session changes, and environment variables to set your preferred model as the permanent default.

<!-- para:0002 -->
The simplest way to change models is to use the /model command directly within Claude Code. This works immediately without restarting your terminal.

<!-- para:0003 -->
Use the `--model` flag when starting Claude Code.

<!-- para:0004 -->
**Step 1)** Check your shell type by running: `echo $SHELL`**

<!-- para:0005 -->
**Step 2)** Add model setting to your shell config:**

<!-- para:0006 -->
**Step 3)** Apply the changes:**

<!-- para:0007 -->
**Step 4)** Close Terminal completely, then reopen it.**

<!-- para:0008 -->
**Step 5)** Start Claude Code in a fresh Terminal session: `claude`.**

<!-- para:0009 -->
Now your chosen model will be the default for all future Claude Code sessions.
