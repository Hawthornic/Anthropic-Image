---
source_url: https://claude.com/plugins/remember
title: "Remember"
section: plugins
---

<!-- para:0001 -->
# Remember

<!-- para:0002 -->
Continuous memory for Claude Code: extracts, summarizes, compresses conversations into tiered daily logs.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/remember#)
- Made by: [Digital Process Tools](https://github.com/Digital-Process-Tools)
- Installs1635

<!-- para:0004 -->
Continuous memory for Claude Code. This plugin automatically captures your sessions, compresses them through Claude Haiku into tiered daily logs, and reloads context when you start a new session. Claude remembers what you worked on yesterday — the files you changed, decisions you made, and where you left off — without any manual effort.

<!-- para:0005 -->
The memory pipeline works in layers: sessions are extracted and filtered, then summarized by Haiku into daily buffers. Hourly compression consolidates same-day entries, and daily consolidation organizes everything into 7-day "recent" and older "archive" files. On session start, relevant memory is automatically injected into Claude's context. You can also define a persistent identity file so Claude maintains consistent personality and conventions across sessions. Typical cost is less than $0.01 per session save.

<!-- para:0006 -->
The plugin installs Session Start and Post Tool Use hooks that run automatically in the background. It includes a Python-based processing pipeline for extraction, summarization, and consolidation, along with shell scripts for orchestration with built-in locking and cooldowns.

<!-- para:0007 -->
**How to use: ** After installing, the plugin works automatically — sessions are saved and restored via hooks with no manual intervention needed. Use the `/remember` slash command to create a concise handoff document capturing your current project state, next steps, and important context for the next session. Example prompts: `/remember` to save a handoff before ending your session, or simply start a new session and Claude will already have context from your previous work.**

<!-- para:0008 -->
## Related plugins

<!-- para:0009 -->
### Frontend Design

<!-- para:0010 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0011 -->
413623

<!-- para:0012 -->
installs

<!-- para:0013 -->
### Superpowers

<!-- para:0014 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0015 -->
294839

<!-- para:0016 -->
### Context7

<!-- para:0017 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0018 -->
212236

<!-- para:0019 -->
### Code Review

<!-- para:0020 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0021 -->
191903
