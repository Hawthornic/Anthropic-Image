---
source_url: https://claude.com/plugins/imessage
title: "i Message"
section: plugins
---

<!-- para:0001 -->
# i Message

<!-- para:0002 -->
i Message messaging bridge with built-in access control. Reads chat.db directly, sends via Apple Script. Manage pairing...

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/imessage#)
- Made by: [Anthropic](https://anthropic.com/)
- Installs553

<!-- para:0004 -->
Bridge Claude Code to i Message on macOS. This plugin reads your local `chat.db` directly and sends replies through Apple Script — no external servers, no tokens, fully local. With built-in access control, you decide exactly who can reach your assistant: allowlist specific contacts by phone number or Apple ID, use code-based pairing for approval, or restrict to self-chat only. Group chats are supported with configurable mention patterns so Claude only responds when addressed.

<!-- para:0005 -->
Security is a core design principle. Access control mutations can only happen through direct terminal invocation, never from incoming messages, preventing prompt-injection attacks. File sending blocks config directory paths, pairing codes expire after one hour, and a static mode locks down access at boot for unattended operation.

<!-- para:0006 -->
**How to use: ** After installing, grant your terminal Full Disk Access in macOS System Settings, then run `/imessage:configure` for guided setup. Use `/imessage:access` to manage who can message your assistant — for example, `/imessage:access allow +15551234567` to allowlist a contact, or `/imessage:access policy allowlist` to set the access mode. Once configured, send yourself an i Message to start chatting with Claude through Messages.app.**

<!-- para:0007 -->
## Related plugins

<!-- para:0008 -->
### Frontend Design

<!-- para:0009 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0010 -->
413623

<!-- para:0011 -->
installs

<!-- para:0012 -->
### Superpowers

<!-- para:0013 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0014 -->
294839

<!-- para:0015 -->
### Context7

<!-- para:0016 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0017 -->
212236

<!-- para:0018 -->
### Code Review

<!-- para:0019 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0020 -->
191903
