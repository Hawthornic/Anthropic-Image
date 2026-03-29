---
source_url: https://claude.com/plugins/netlify-skills
title: "Netlify Skills"
section: plugins
---

<!-- para:0001 -->
# Netlify Skills

<!-- para:0002 -->
Netlify platform skills for Claude Code — functions, edge functions, blobs, database, image CDN, forms, config, CLI, ...

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/netlify-skills#)
- Made by: [Netlify](https://www.netlify.com/)
- Installs328

<!-- para:0004 -->
Provides comprehensive Netlify platform knowledge directly in Claude Code. This plugin bundles 12 factual, up-to-date skill references covering the full Netlify ecosystem — serverless functions, edge functions, Blobs object storage, managed Postgres (Netlify DB), Image CDN, forms, caching, configuration, CLI and deployment, framework adapters, and AI Gateway. Each skill is loaded on demand when relevant, giving Claude precise guidance on modern Netlify patterns, APIs, and best practices.

<!-- para:0005 -->
Skills cover practical details like the modern function syntax (`export default async (req, context)`), Drizzle ORM setup for Netlify DB, edge function middleware with Deno runtime, CDN cache control, image transformation URLs, `netlify.toml` configuration, and deployment workflows. The plugin emphasizes current Netlify conventions — v2 functions, `Netlify.env.get()` for environment variables, and framework-aware adapters for Vite, Astro, Next.js, and Tan Stack.

<!-- para:0006 -->
**How to use: ** Once installed, the skills activate automatically when you're working on Netlify projects. Ask Claude to help with any Netlify feature and it will draw on the relevant skill. Example prompts:**

<!-- para:0007 -->
- *"Create a serverless function that handles POST requests at /api/submit"*
- *"Set up Netlify DB with Drizzle ORM and create a users table"*
- *"Add an edge function for geolocation-based redirects"*
- *"Configure image CDN transforms for responsive thumbnails"*
- *"Set up caching headers and CDN purging for my API routes"*
- *"Deploy my site with the Netlify CLI and set up environment variables"*
- *"Route AI requests through the Netlify AI Gateway"*

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
