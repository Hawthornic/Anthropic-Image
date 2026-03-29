---
source_url: https://support.claude.com/en/articles/12304248-managing-api-key-environment-variables-in-claude-code
title: "Managing API key environment variables in Claude Code"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
When using Claude Code, it's important to understand how authentication methods are prioritized to avoid unexpected API charges and ensure you're using your intended account.

<!-- para:0002 -->
**To use Claude Code with your Claude subscription:** Keep the ANTHROPIC_API_KEY environment variable unset.**

<!-- para:0003 -->
Claude Code will notify you when there's a conflict between your authenticated subscription and an environment variable API key:

<!-- para:0004 -->
To verify if an API key is set as an environment variable, run /status in Claude Code. This will show you which authentication method is currently active.

<!-- para:0005 -->
To check your environment variable directly, run one of these commands in a terminal (outside of Claude Code):

<!-- para:0006 -->
macOS/Linux:

<!-- para:0007 -->
Windows CMD:

<!-- para:0008 -->
Windows PowerShell:

<!-- para:0009 -->
If you need to use an API key for the current terminal session only:

<!-- para:0010 -->
macOS/Linux:

<!-- para:0011 -->
Windows CMD:

<!-- para:0012 -->
Windows PowerShell:

<!-- para:0013 -->
macOS/Linux:

<!-- para:0014 -->
Windows:

<!-- para:0015 -->
macOS/Linux (temporary):

<!-- para:0016 -->
macOS (permanent):

<!-- para:0017 -->
Linux (permanent)

<!-- para:0018 -->
Windows CMD:

<!-- para:0019 -->
Windows PowerShell:

<!-- para:0020 -->
Windows (permanent): Delete the variable from System Environment Variables settings.

<!-- para:0021 -->
If you have any questions, please [contact our Support team](https://support.claude.com/en/articles/9015913-how-to-get-support).
