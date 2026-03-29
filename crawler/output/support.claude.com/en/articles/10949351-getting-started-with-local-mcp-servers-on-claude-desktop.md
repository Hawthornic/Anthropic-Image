---
source_url: https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop
title: "Getting Started with Local MCP Servers on Claude Desktop"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
The Model Context Protocol (MCP) is an open protocol that enables seamless integration between LLM applications and external data sources and tools. With the introduction of desktop extensions, installing and managing local MCP servers has become significantly easier.

<!-- para:0002 -->
Desktop extensions provide a streamlined way to install and manage local MCP servers through single-click installable packages. Instead of manually configuring JSON files and managing dependencies, you can now install local MCP servers on your computer as easily as browser extensions.

<!-- para:0003 -->
Owners and Primary Owners of Team and Enterprise plans can manage team access to desktop extensions using two controls:

<!-- para:0004 -->
These controls allow organizations to fully customize their registries by adding only the extensions the team needs to access, and removing any others.

<!-- para:0005 -->
Owners and Primary Owners of Team and Enterprise organizations can manage which desktop extensions are enabled for your organization and accessible to other members via Claude Desktop. See [Enabling and using the desktop extension allowlist](https://support.claude.com/en/articles/12592343-enabling-and-using-the-desktop-extension-allowlist)

<!-- para:0006 -->
for specific instructions.

<!-- para:0007 -->
Custom desktop extensions uploads allow Team and Enterprise plans to leverage organization-specific workflows that aren’t available in the public directory. After creating a custom desktop extension, Owners and Primary Owners can navigate to Settings > Extensions within Claude Desktop and click “Advanced settings” to access the **Extension Developer** section:

<!-- para:0008 -->
Click “Install Extension…” and select the .mcpb file. Follow the prompts to install and configure your custom desktop extension. For more in-depth information, please refer to our [desktop extension developer documentation](https://github.com/anthropics/mcpb).

<!-- para:0009 -->
For controlling desktop extensions through system policies, please refer to our [desktop enterprise configuration documentation](https://support.claude.com/en/articles/12622667-enterprise-configuration).

<!-- para:0010 -->
Click the "+" button on bottom the chat box within Claude Desktop, then select "Connectors." This will show you connected MCP servers and their tools. Alternatively, you can visit Developer settings (under **Desktop app**) to see connection status and look at the logs for any MCP servers.

<!-- para:0011 -->
Desktop extensions support Node.js, Python, and binary MCP servers. Claude Desktop includes a built-in Node.js environment, so Node.js installation isn't required.

<!-- para:0012 -->
Mark configuration fields as "sensitive": true in your manifest.json. Claude Desktop will automatically encrypt these values using the operating system's secure storage (Keychain on macOS, Credential Manager on Windows).

<!-- para:0013 -->
Yes, you can share .mcpb files directly with specific users or teams. For broader distribution, you can submit extensions to the official directory.

<!-- para:0014 -->
Enable debug logging in Claude Desktop settings, check the extension logs in the Extensions settings panel, and refer to the MCP debugging guide for protocol-specific troubleshooting.

<!-- para:0015 -->
Extensions from the official directory update automatically by default. For privately distributed extensions, users will need to install updated .mcpb files manually.

<!-- para:0016 -->
For more in-depth information on building your own MCP clients and servers, we recommend reviewing the following resources:

<!-- para:0017 -->
If you need further guidance, visit our guide on [How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support) for additional support options.
