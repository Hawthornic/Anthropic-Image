---
source_url: https://support.claude.com/en/articles/12466728-troubleshoot-claude-error-messages
title: "Troubleshoot Claude error messages"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This article explains common error messages and warnings you may encounter when using Claude and provides guidance on how to address them.

<!-- para:0002 -->
Usage limit warnings appear when you're approaching your plan’s limit within a five-hour session: *“Approaching 5-hour limit.”*

<!-- para:0003 -->
If you hit your plan’s limit after the warning appears, you’ll see a blocking error message letting you know when you can use Claude again: *“5-hour limit reached - resets [time].”*

<!-- para:0004 -->
Looking for ways to maximize your Claude usage? Refer to **[Usage limit best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)**.

<!-- para:0005 -->
Paid Claude users with extra usage enabled in Usage settings will see a slightly different usage limit error:*“5-hour limit resets [time] - continuing with extra usage.”* Note that this will only appear for members with access to extra usage.

<!-- para:0006 -->
Refer to these articles for more information about this feature depending on your plan:

<!-- para:0007 -->
You may encounter a length limit error when your message to Claude exceeds the maximum input length allowed: "Your message will exceed the length limit for this chat. Try attaching fewer or smaller files or starting a new conversation." This error indicates that your message is too long and needs to be shortened before sending it to Claude.

<!-- para:0008 -->
For users on paid plans with code execution enabled, Claude automatically manages long conversations by summarizing earlier messages when context limits are approached. This means most users will rarely encounter length limit errors during normal use. Your full chat history is preserved so Claude can reference it even after summarization. In rare cases where you still encounter this error (such as when sending a very large first message), you can:

<!-- para:0009 -->
If you see a generic error message when attempting to log in to your Claude account (e.g, "There was an error logging you in"), try the following troubleshooting steps:

<!-- para:0010 -->
If you're still seeing an error, check **[our status page](http://status.claude.com/)** for active incidents.

<!-- para:0011 -->
Capacity issues occur when Claude’s infrastructure experiences high demand system-wide. When capacity is constrained, you may see this message when chatting with Claude: *"Due to unexpected capacity constraints, Claude is unable to respond to your message. Please try again soon."*

<!-- para:0012 -->
Capacity issues will not appear on our status page because they represent normal load management rather than technical problems.

<!-- para:0013 -->
Service incidents are disruptions where Claude is unavailable or significantly degraded for all or most users. These represent actual technical problems with our systems. To check for confirmed incidents, visit status.claude.com, where you'll find real-time updates on scope, impact, and resolution progress for any active incidents.
