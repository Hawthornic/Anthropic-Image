---
source_url: https://support.claude.com/en/articles/11503834-building-custom-connectors-via-remote-mcp-servers
title: "Building custom connectors via remote MCP servers"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
To get started with remote servers, start with the following resources:

<!-- para:0002 -->
Other resources (like [this](https://simplescraper.io/blog/how-to-mcp)) may also be helpful to learn about considerations when building, deploying, and troubleshooting remote servers.

<!-- para:0003 -->
In addition, some [solutions like Cloudflare](https://developers.cloudflare.com/agents/guides/remote-mcp-server/) provide remote MCP server hosting with built-in autoscaling, OAuth token management, and deployment.

<!-- para:0004 -->
**Auth support**

<!-- para:0005 -->
See [here](https://docs.anthropic.com/en/api/ip-addresses#ipv4-2) for the IP addresses used by Claude for inbound and outbound connections to MCP servers. Server developers wishing to disallow non-Claude MCP Clients can whitelist these IP addresses, Claude’s OAuth callback URL, and/or Claude’s OAuth client name.

<!-- para:0006 -->
The best way to test and validate a server is to try [adding it to Claude](https://support.anthropic.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp#h_3d1a65aded).

<!-- para:0007 -->
Alternatively, use the [inspector tool](https://github.com/modelcontextprotocol/inspector). This will allow you to validate:

<!-- para:0008 -->
See the [MCP documentation](https://modelcontextprotocol.io/docs/tools/inspector) for more details on using inspector and for other tips on how to debug and troubleshoot your server.

<!-- para:0009 -->
In addition, other solutions like [Cloudflare’s AI Playground](https://playground.ai.cloudflare.com/) allow you to test remote MCP server functionality.
