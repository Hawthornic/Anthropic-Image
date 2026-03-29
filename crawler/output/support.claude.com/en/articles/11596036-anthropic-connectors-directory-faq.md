---
source_url: https://support.claude.com/en/articles/11596036-anthropic-connectors-directory-faq
title: "Anthropic Connectors Directory FAQ"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
MCP stands for Model Context Protocol, an open standard created by Anthropic that allows AI applications to connect to tools and data sources. For comprehensive information about MCPs and how to get started, please refer to our remote MCP guide: [Getting Started with Custom Connectors Using Remote MCP](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp).

<!-- para:0002 -->
The [Connectors Directory](https://claude.com/connectors) aims to showcase Model Context Protocol servers that work with Claude across all our platforms - Claude web, Claude Desktop, our Claude mobile apps, Claude Code, and our API. The Connectors Directory serves as a single hub where users can discover MCP servers that Anthropic has reviewed.

<!-- para:0003 -->
You can fill out our [Connectors Directory server review form](https://docs.google.com/forms/d/e/1FAIpQLSeafJF2NDI7oYx1r8o0ycivCSVLNq92Mpc1FPxMKSw1CzDkqA/viewform) and we'll reach out about next steps if your MCP would be a good fit for the directory at this time.

<!-- para:0004 -->
Yes, servers must adhere to the security, safety, and compatibility standards laid out in our [MCP Directory Policy](https://support.claude.com/en/articles/11697096-anthropic-mcp-directory-policy). Adherence to these standards does not guarantee inclusion in the directory.

<!-- para:0005 -->
While we strive to review every submission as quickly as we can, due to overwhelming interest we cannot promise that we will accept your submission or respond to it individually.

<!-- para:0006 -->
OAuth 2.0 is only required if authentication is needed for the MCP server. Servers that do not require authentication do not require OAuth.

<!-- para:0007 -->
No. Pure client credentials flow (machine-to-machine OAuth with just client_id/client_secret and no user interaction) is not supported. We can provision a static client_id/client_secret for Claude, but users must still complete an OAuth consent flow to authenticate their individual accounts. This works on claude.ai and Claude Desktop, but not Claude Code because Claude Code establishes connections directly from user’s computer to your MCP server (and thus don’t have access to the static credentials).

<!-- para:0008 -->
No. OAuth is the only way to uniquely identify users. We do not forward IP addresses, user IDs, or other metadata from end-users to MCP servers.

<!-- para:0009 -->
It depends on the product surface. Communication occurs through Anthropic servers (claude.ai, Claude Desktop), user's browser, or user's local clients (Claude Code). There is no centralized connection method across all surfaces currently.

<!-- para:0010 -->
Yes. Users authenticate with MCP servers on a per-server basis. They can use personal authentication credentials for MCP servers even when logged into claude.ai with a corporate account.

<!-- para:0011 -->
No. OAuth occurs when the client connects to the MCP server, not at the tool level. You can enforce tool-level permissions based on user authentication after server connection is established.

<!-- para:0012 -->
Tokens are removed from Anthropic's systems but not from your own systems. Access and refresh tokens at your identity provider remain valid until expiration, and session cookies are not cleared (as they are browser-level, outside Claude's control).

<!-- para:0013 -->
Return a 401 Unauthorized response. To trigger full regeneration of DCR client credentials, return an invalid_client error as per RFC 6749 section 5.2.

<!-- para:0014 -->
No. Client credentials are not required for standard OAuth flows with user authentication.

<!-- para:0015 -->
Per-user rate limiting requires OAuth. Without OAuth, your options are:

<!-- para:0016 -->
We strongly recommend using OAuth and not using IP allowlisting. However, this is possible using the static IP addresses available at [https://docs.claude.com/en/api/ip-addresses](https://docs.claude.com/en/api/ip-addresses).

<!-- para:0017 -->
Important limitations:

<!-- para:0018 -->
No. MCP server owners must implement their own rate limiting and abuse prevention measures.

<!-- para:0019 -->
25,000 tokens. Use pagination, filtering, or limit parameters to reduce response size if needed.

<!-- para:0020 -->
Timeouts vary by component:

<!-- para:0021 -->
All users can access connectors, except for custom connectors, which are available for paid plans only (Pro, Max, Team, and Enterprise).

<!-- para:0022 -->
No. Any organization can submit to the directory regardless of plan type.

<!-- para:0023 -->
If your server requires authentication / an account to use, we will need you to provide us with a testing account for initial QA purposes. Including dummy data in the account is also helpful to check functionality.

<!-- para:0024 -->
No minimum or maximum requirement. We recommend that you start with a useful set of tools and expand capabilities over time.

<!-- para:0025 -->
There are currently no specific SLA requirements. However, connectors with performance or reliability issues may be removed from the directory.

<!-- para:0026 -->
Top issue: Missing tool annotations (30% of rejections)

<!-- para:0027 -->
Requirement: All tools MUST include readOnlyHint or destructiveHint

<!-- para:0028 -->
Impact: Immediate rejection, requires code changes.

<!-- para:0029 -->
Not optional: Compliance requirement per MCP Directory Policy

<!-- para:0030 -->
Example:

<!-- para:0031 -->
Telemetry includes all parameters and data passed into tool calls as well as the response from MCP server.

<!-- para:0032 -->
We only train on consumer data when users explicitly opt in. See [https://www.anthropic.com/news/updates-to-our-consumer-terms](https://www.anthropic.com/news/updates-to-our-consumer-terms) for details. We do not train on Team/Enterprise plans.

<!-- para:0033 -->
No. MCP servers cannot determine the Claude SKU being used.

<!-- para:0034 -->
Provide a URL to your company's data processing terms applicable to the MCP service. This does not need to be MCP-specific - your standard DPA is acceptable.

<!-- para:0035 -->
Connectors are available to Claude users globally. Geographic restriction is not supported. You can guide the user and Claude’s understanding of any geographic limitations to your MCP description or tool descriptions if needed (e.g., 'only U.S. organizations available').

<!-- para:0036 -->
Key resources:

<!-- para:0037 -->
MCP servers must handle compliance independently from Claude. If a user exercises a legal data protection right with your service, you must handle this on your end.

<!-- para:0038 -->
In your .mcpb, there are two required locations:

<!-- para:0039 -->
1. README.md - Add a "Privacy Policy" section with URL or full text.

<!-- para:0040 -->
2. manifest.json - Add privacy_policies array with HTTPS URLs (requires manifest_version 0.2+)

<!-- para:0041 -->
Example:

<!-- para:0042 -->
**Must cover:** What data is collected, how it's used/stored, third-party sharing, retention, and contact info. ⚠️ Missing privacy policy will lead to an immediate rejection.**

<!-- para:0043 -->
We use the Google provided favicon, so you can customize your connector’s icon URL by updating the favicon for your connector URL. You can verify the icon that we will use at [https://www.google.com/s2/favicons?domain=<YOUR_CONNECTOR_URL>&sz=64](https://www.google.com/s2/favicons?domain=%3CYOUR_CONNECTOR_URL%3E&sz=64)

<!-- para:0044 -->
Be sure to test each favicon size (16, 32, 48, 64, 96, 128) by updating the &sz= portion of the URL.

<!-- para:0045 -->
**Remote connectors:**

<!-- para:0046 -->
Otherwise, provide us with a URL with the favicon you wish to use as your icon.

<!-- para:0047 -->
**Local connectors (desktop extensions):**Replace `icon.png` in your bundle and redistribute the updated `.mcpb` package to users.**

<!-- para:0048 -->
Yes. Markdown formatting is supported in connector descriptions.

<!-- para:0049 -->
Yes. Please include account requirement language (e.g., 'free registered account required') and hyperlinks to sign-up pages in the connector details.

<!-- para:0050 -->
Implement an OAuth screen. This is the only way to guarantee TOS display. Without OAuth, users could theoretically add connectors to Claude Desktop by directly editing claude_desktop_config.json.

<!-- para:0051 -->
Include language in the connector description, but there is no special consent flow or popup. Use an OAuth screen to ensure users see and agree to terms.

<!-- para:0052 -->
You must use Streamable HTTP.

<!-- para:0053 -->
Only tool-level descriptions are currently supported. No server-level description exists. This requires repeating steering guidance across individual tool descriptions. We recognize this is inconvenient and are exploring improvements.

<!-- para:0054 -->
Use the [plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces). Node.js is recommended over Python or other languages for local MCPs due to better compatibility with Claude Desktop's built-in runtime.

<!-- para:0055 -->
Local MCPs can only log to ~/Library/Logs/Claude/mcp*.log. Users must manually share log files for troubleshooting. Direct log transmission from local MCP servers is not supported due to security constraints.

<!-- para:0056 -->
Temporarily remove the IP allowlist to verify other configuration is correct. If connection works without allowlist, the issue is with IP filtering configuration.

<!-- para:0057 -->
Essential testing prevents 80% of submission delays. See our guides for submitting remote and local connectors for best-practices and a pre-submission checklist.

<!-- para:0058 -->
Choose based on your security requirements and constraints:

<!-- para:0059 -->
***Option 1: No Auth + Global Rate Limiting***

<!-- para:0060 -->
Best for: Public data with low abuse risk

<!-- para:0061 -->
***Option 2: Full OAuth with User Registration***

<!-- para:0062 -->
Best for: Enterprise security, sensitive data, per-user rate limiting

<!-- para:0063 -->
***Option 3: IP-allowlisting***

<!-- para:0064 -->
We strongly recommend Option 2 over Option 3, but if implementing OAuth is truly infeasible, you can still get some restricted access to Claude users only

<!-- para:0065 -->
Important links:
