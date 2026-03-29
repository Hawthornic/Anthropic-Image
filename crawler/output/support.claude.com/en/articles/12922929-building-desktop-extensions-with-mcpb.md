---
source_url: https://support.claude.com/en/articles/12922929-building-desktop-extensions-with-mcpb
title: "Building Desktop Extensions with MCPB"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This guide will help you build an MCP Bundle (.mcpb) to create a desktop extension for internal use, private distribution, or as a foundation for submission to [Anthropic’s Connectors Directory](https://claude.ai/directory).

<!-- para:0002 -->
MCPB (.mcpb) files are zip archives containing a local MCP server and manifest.json. They enable single-click installation in Claude Desktop, similar to browser extensions.

<!-- para:0003 -->
**Key characteristics:**

<!-- para:0004 -->
**Learn more:**

<!-- para:0005 -->
Choose a local server (MCPB) for:

<!-- para:0006 -->
**Internal Systems and Security**

<!-- para:0007 -->
**Local Resources**

<!-- para:0008 -->
**Enterprise Deployment**

<!-- para:0009 -->
Choose a remote connector for:

<!-- para:0010 -->
**Key difference:** MCPBs run on the user's machine via stdio transport with access to local and internal resources. Remote connectors run on your servers via HTTPS and are accessed through Anthropic's infrastructure.**

<!-- para:0011 -->
**Real-world use:** Organizations are building MCPBs as secure proxies to internal MCP servers, for internal documentation access, and to connect development tools while maintaining their security architecture.**

<!-- para:0012 -->
**For remote connector guidance:** See [MCP Partner FAQ](https://support.claude.com/en/articles/11596036-anthropic-connectors-directory-faq) for complete remote connector documentation.**

<!-- para:0013 -->
**Node.js is strongly recommended** because:**

<!-- para:0014 -->
Claude Desktop runs on:

<!-- para:0015 -->
Specify supported platforms in your manifest.json compatibility section.

<!-- para:0016 -->
**Best practice:** Test on both platforms even if you primarily develop on one.**

<!-- para:0017 -->
**Platform compatibility details:** See [MCPB Manifest Spec - Compatibility](https://github.com/modelcontextprotocol/mcpb/blob/main/MANIFEST.md#compatibility) for platform specification and runtime requirements.**

<!-- para:0018 -->
Follow this five-step process:

<!-- para:0019 -->
1. Install MCPB CLI: `npm install -g @anthropic-ai/mcpb`

<!-- para:0020 -->
2. Create your MCP server (see MCP SDK)

<!-- para:0021 -->
3. Run mcpb init to create manifest.json

<!-- para:0022 -->
4. Run mcpb pack to bundle

<!-- para:0023 -->
5. Install and test in Claude Desktop

<!-- para:0024 -->
**For detailed implementation guidance:**

<!-- para:0025 -->
**For comprehensive guidance on development, testing, and best practices,** see the [MCPB README's "For Bundle Developers" section](https://github.com/modelcontextprotocol/mcpb/blob/main/README.md).**

<!-- para:0026 -->
The manifest.json file is required metadata that describes your MCPB - what it does, how to run it, which tools it provides, and what configuration it needs.

<!-- para:0027 -->
For the most up to date information, refer to the official MCPB Specification.

<!-- para:0028 -->
Icons are optional but recommended for professional appearance.

<!-- para:0029 -->
**Basic approach:** Include icon.png file in your bundle root directory and reference it in manifest.json.**

<!-- para:0030 -->
**Requirements:**

<!-- para:0031 -->
**Advanced options:** Multiple icon variants for different sizes and themes (light/dark mode support).**

<!-- para:0032 -->
**Implementation details:** See [MCPB Manifest Spec - Icons](https://github.com/modelcontextprotocol/mcpb/blob/main/MANIFEST.md#icons) for:**

<!-- para:0033 -->
Define user_config section in manifest.json. Claude Desktop automatically creates a settings UI where users can configure your extension.

<!-- para:0034 -->
See [MCPB Manifest Spec - User Configuration](https://github.com/modelcontextprotocol/mcpb/blob/main/MANIFEST.md#user-configuration) for the complete implementation:

<!-- para:0035 -->
There are three different installation methods:

<!-- para:0036 -->
**All methods open installation UI** where users can:**

<!-- para:0037 -->
**Installation scope:** Per-user installation - each user must install separately on their own system.**

<!-- para:0038 -->
**User experience and admin controls:** For detailed information about the end-user installation experience and enterprise admin controls (including Team/Enterprise organization management and policy configuration), see:**

<!-- para:0039 -->
**MCPB Framework:**

<!-- para:0040 -->
**MCP Protocol:**

<!-- para:0041 -->
**Claude Desktop:**

<!-- para:0042 -->
**Support channels:**

<!-- para:0043 -->
**Community resources:**

<!-- para:0044 -->
If you've built a working MCPB and want to submit it to the Anthropic Directory for broader distribution and discoverability, see our companion guide: [Submitting to Anthropic Directory](https://support.claude.com/en/articles/12922832-local-mcp-server-submission-guide).

<!-- para:0045 -->
The directory guide covers additional requirements including:
