---
source_url: https://claude.com/blog/claude-code-on-the-web
title: "Claude Code on the web"
section: blog
date: 2025-10-20
---

<!-- para:0001 -->
***Update: ****Claude Code on the web is now available in research preview for Team and Enterprise users with premium seats, in addition to Pro and Max users. Claude Code on the web is on by default for these users, and account admins can toggle access in the Claude settings. November 12, 2025****

<!-- para:0002 -->
Today, we're introducing Claude Code on the web, a new way to delegate coding tasks directly from your browser.

<!-- para:0003 -->
Now in beta as a research preview, you can assign multiple coding tasks to Claude that run on Anthropic-managed cloud infrastructure, perfect for tackling bug backlogs, routine fixes, or parallel development work.

<!-- para:0004 -->
## Run coding tasks in parallel

<!-- para:0005 -->
Claude Code on the web lets you kick off coding sessions without opening your terminal. Connect your Git Hub repositories, describe what you need, and Claude handles the implementation.

<!-- para:0006 -->
Each session runs in its own isolated environment with real-time progress tracking, and you can actively steer Claude to adjust course as it’s working through tasks.

<!-- para:0007 -->
With Claude Code running in the cloud, you can now **run multiple tasks in parallel** across different repositories from a single interface and **ship faster** with automatic PR creation and clear change summaries.

<!-- para:0008 -->
## Flexible for every workflow

<!-- para:0009 -->
The web interface complements your existing Claude Code workflow. Running tasks in the cloud is especially effective for:

<!-- para:0010 -->
- Answering questions about how projects work and how repositories are mapped
- Bugfixes and routine, well-defined tasks
- Backend changes, where Claude Code can use test-driven development to verify changes

<!-- para:0011 -->
You can also use Claude Code on mobile. As part of this research preview, we’re making Claude Code available on our iOS app so developers can explore coding with Claude on the go. It’s an early preview, and we hope to quickly refine the mobile experience based on your feedback.

<!-- para:0012 -->
## Security-first cloud execution

<!-- para:0013 -->
Every Claude Code task runs in an isolated sandbox environment with network and filesystem restrictions. Git interactions are handled through a secure proxy service that ensures Claude can only access authorized repositories—helping keep your code and credentials protected throughout the entire workflow.

<!-- para:0014 -->
You can also add custom network configuration to choose what domains Claude Code can connect to from its sandbox. For example, you can allow Claude to download npm packages over the internet so that it can run tests and validate changes.

<!-- para:0015 -->
Read our [engineering blog](https://www.anthropic.com/engineering/claude-code-sandboxing) and [documentation](https://docs.claude.com/en/docs/claude-code/sandboxing) for a deep dive on Claude Code’s sandboxing approach.

<!-- para:0016 -->
## Getting started

<!-- para:0017 -->
Claude Code on the web is available now in research preview for Pro and Max users. Visit [claude.com/code](http://claude.com/code) to connect your first repository and start delegating tasks.

<!-- para:0018 -->
Cloud-based sessions share rate limits with all other Claude Code usage. [Explore our documentation](https://docs.claude.com/en/docs/claude-code/claude-code-on-the-web) to learn more.
