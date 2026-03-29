---
source_url: https://support.claude.com/en/articles/12702546-deploying-enterprise-grade-mcp-servers-with-desktop-extensions
title: "Deploying enterprise-grade MCP servers with desktop extensions"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Desktop extensions are installable packages that run Model Context Protocol (MCP) servers locally on your machine. They provide Claude Desktop with secure access to your local resources, internal systems, and personal tools without the complexity of remote infrastructure.

<!-- para:0002 -->
With desktop extensions, you can deploy enterprise-grade MCP implementations with fine-grained admin controls. This article explains why desktop extensions are valuable for organizations and how to use them effectively.

<!-- para:0003 -->
Desktop extensions operate within your corporate network boundaries, using the user’s existing authenticated context without requiring additional firewall rules or VPN configurations. They leverage existing SSO and browser sessions automatically with no token management required – credentials stay securely on user devices.

<!-- para:0004 -->
Desktop extensions connect to internal wikis, JIRA, Confluence, and other systems behind your firewall. They can query private databases and APIs without VPN configuration, connect to on-premises systems like SAP, Oracle, and custom applications, and access internal resources without exposing them on public infrastructure.

<!-- para:0005 -->
Desktop extensions provide access to local resources that remote connectors cannot reach. This includes direct filesystem access for code editing and Git operations, integration with locally installed tools like Docker, IDEs, and databases, control over desktop applications via local APIs, and hardware integration for specialized workflows.

<!-- para:0006 -->
One-click installation through Claude Desktop comes with no dependencies to manage. The built-in [Node.js](http://node.js/) runtime is included, there’s no cloud infrastructure to provision, and updates are distributed directly through the extension marketplace.

<!-- para:0007 -->
Organization owners can upload custom extensions to their organization and control which desktop extensions their users have access to through the desktop extension allowlist. To learn more about managing desktop extensions in your organization, see Enabling and using the desktop extension allowlist.

<!-- para:0008 -->
**Multiple enterprises are building desktop extensions to serve a variety of use cases:**

<!-- para:0009 -->
Desktop extensions eliminate the traditional tradeoff between security and usability—providing Claude with powerful capabilities while maintaining your enterprise security posture.
