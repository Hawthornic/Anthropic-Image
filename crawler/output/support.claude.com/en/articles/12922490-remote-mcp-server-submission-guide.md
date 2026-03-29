---
source_url: https://support.claude.com/en/articles/12922490-remote-mcp-server-submission-guide
title: "Remote MCP Server Submission Guide"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This is a complete guide for submitting your remote MCP server to Anthropic's MCP Directory for broader distribution and discoverability.

<!-- para:0002 -->
Before server submission, you should have:

<!-- para:0003 -->
New to remote MCP development? See [Getting Started with Custom Connectors Using Remote MCP](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp) first. For technical best practices and protocol details, see [MCP Protocol Documentation](https://modelcontextprotocol.io/).

<!-- para:0004 -->
**Discoverability and trust:**

<!-- para:0005 -->
**User experience:**

<!-- para:0006 -->
**Support and credibility:**

<!-- para:0007 -->
**All major Claude platforms:**

<!-- para:0008 -->
All requirements in this section are **mandatory for directory approval**. Missing any of these will result in rejection or revision requests.

<!-- para:0009 -->
YES - Every tool MUST have accurate safety annotations.

<!-- para:0010 -->
**Required on every tool:**

<!-- para:0011 -->
See [MCP Protocol - Tool Annotations](https://modelcontextprotocol.io/legacy/concepts/tools) for complete schema and implementation details.

<!-- para:0012 -->
**Not optional.** This is a hard requirement derived from the [MCP Directory Policy](https://support.claude.com/en/articles/11697096-anthropic-mcp-directory-policy).**

<!-- para:0013 -->
**How to decide which annotation:**

<!-- para:0014 -->
**Additional recommended annotation:**

<!-- para:0015 -->
YES - If your server requires authentication.

<!-- para:0016 -->
**What to provide:**

<!-- para:0017 -->
**Test accounts should have:**

<!-- para:0018 -->
**How to provide:**

<!-- para:0019 -->
YES - If your server requires authentication.

<!-- para:0020 -->
**OAuth implementation requirements:**

<!-- para:0021 -->
**Common OAuth issues to avoid:**

<!-- para:0022 -->
Implementation guidance: See [OAuth 2.0 Authorization Framework](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization) for complete OAuth implementation details.

<!-- para:0023 -->
**YES - Must allowlist Claude's IP addresses for claude.ai compatibility**

<!-- para:0024 -->
For servers behind firewalls, allowlist IP addresses from [https://docs.claude.com/en/api/ip-addresses](https://docs.claude.com/en/api/ip-addresses).

<!-- para:0025 -->
Required for: Claude.ai and Claude Desktop

<!-- para:0026 -->
Not required for: Claude Code (connects directly from user's machine)

<!-- para:0027 -->
Comprehensive server documentation with specific sections.

<!-- para:0028 -->
**Recommended sections:**

<!-- para:0029 -->
**Example documentation structure:**

<!-- para:0030 -->
MINIMUM of three working examples demonstrating core functionality.

<!-- para:0031 -->
**What qualifies as a good example:**

<!-- para:0032 -->
**Example format:**

<!-- para:0033 -->
**Requirements:**

<!-- para:0034 -->
Server must be in General Availability (GA) status.

<!-- para:0035 -->
**Production-ready means:**

<!-- para:0036 -->
**Cannot be included:** Beta versions, development servers, or limited-access services. ​**

<!-- para:0037 -->
Must meet the core technical compliance standards.

<!-- para:0038 -->
**Transport and Performance:**

<!-- para:0039 -->
**Security and Data:**

<!-- para:0040 -->
Follow this step-by-step submission process:

<!-- para:0041 -->
**1. Pre-submission checklist:**

<!-- para:0042 -->
Verify mandatory requirements:

<!-- para:0043 -->
**Test your server:**

<!-- para:0044 -->
**2. Complete submission form:**

<!-- para:0045 -->
**Submission form:** [MCP Directory Server Review Form](https://docs.google.com/forms/d/e/1FAIpQLSeafJF2NDI7oYx1r8o0ycivCSVLNq92Mpc1FPxMKSw1CzDkqA/viewform)**

<!-- para:0046 -->
**Required information:** Server details, documentation links, test credentials, examples (minimum 3), and contact information. Form provides a complete list.**

<!-- para:0047 -->
While we strive to review every submission as quickly as we can, due to the amount of interest we cannot promise that we will accept your submission or respond to it individually.

<!-- para:0048 -->
These are the top issues based on submission data:

<!-- para:0049 -->
**1. Missing tool annotations**

<!-- para:0050 -->
**2. OAuth implementation issues**

<!-- para:0051 -->
**3. Incomplete documentation**

<!-- para:0052 -->
**4. Production readiness concerns**

<!-- para:0053 -->
**5. Privacy policy/support channel issues**

<!-- para:0054 -->
Follow these prevention best practices:

<!-- para:0055 -->
**1. Complete the checklist thoroughly**

<!-- para:0056 -->
**2. Test OAuth implementation extensively**

<!-- para:0057 -->
**3. Validate tool annotations**

<!-- para:0058 -->
**4. Test server connectivity**

<!-- para:0059 -->
**5. Document comprehensively**

<!-- para:0060 -->
**Success rate:** Servers following this prevention guide have significantly fewer revision requests and faster approval times.**

<!-- para:0061 -->
All servers must comply with the [Anthropic MCP Directory Policy](https://support.claude.com/en/articles/11697096-anthropic-mcp-directory-policy).

<!-- para:0062 -->
Yes. Removal can occur for various reasons.

<!-- para:0063 -->
**Voluntary removal:**

<!-- para:0064 -->
**Removal by Anthropic:**

<!-- para:0065 -->
Anthropic may remove extensions from the directory at any time and for any reason, at its sole discretion.

<!-- para:0066 -->
**Recommendations to avoid removal:**

<!-- para:0067 -->
For technical questions about MCP development, consult the [MCP Protocol Documentation](https://modelcontextprotocol.io/).

<!-- para:0068 -->
For directory submission questions, use the submission form or contact support through official channels.
