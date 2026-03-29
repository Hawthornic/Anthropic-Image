---
source_url: https://claude.com/plugins/revenuecat
title: "Revenue Cat"
section: plugins
---

<!-- para:0001 -->
# Revenue Cat

<!-- para:0002 -->
Configure Revenue Cat projects, apps, products, entitlements, and offerings directly from Claude Code.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/revenuecat#)
- Made by: [Revenue Cat](https://github.com/Revenue Cat)
- Installs225

<!-- para:0004 -->
Manage your Revenue Cat in-app purchase backend directly from Claude Code. This plugin connects to the Revenue Cat MCP server via OAuth, giving you full control over projects, apps, products, entitlements, offerings, and webhooks without leaving your development workflow. It supports iOS, Android, and Web platforms.

<!-- para:0005 -->
The plugin includes four slash commands: `/rc:status` gives a quick overview of your project configuration with counts and health indicators for apps, products, entitlements, and offerings; `/rc:create-app` walks you through setting up an iOS or Android app with store credentials and SDK code snippets; `/rc:create-product` guides you through creating subscriptions, consumables, or one-time purchases; and `/rc:apikey` retrieves your public SDK keys with ready-to-use Swift, Kotlin, or Java Script code.

<!-- para:0006 -->
Three specialized agents handle more involved tasks. The Project Bootstrap agent automates full project setup from scratch — tell it your platforms and monetization model, and it creates apps, products, entitlements, and offerings in the correct dependency order. The Troubleshooting agent systematically diagnoses subscription and purchase issues, checking product configuration, entitlement wiring, webhook setup, and platform-specific gotchas like iOS 18.x Store Kit bugs. The Paywall Builder agent creates styled paywalls integrated with your app's design system.

<!-- para:0007 -->
**How to use: ** Try prompts like `/rc:status` to see your project overview, `/rc:create-app ios com.myapp.bundle` to set up an iOS app, `/rc:create-product subscription monthly` to create a monthly subscription, or ask "help me set up Revenue Cat from scratch" to launch the bootstrap agent. For debugging, say "my users can't restore purchases on Android" to engage the troubleshooting agent.**

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
