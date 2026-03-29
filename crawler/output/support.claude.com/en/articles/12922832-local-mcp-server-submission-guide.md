---
source_url: https://support.claude.com/en/articles/12922832-local-mcp-server-submission-guide
title: "Local MCP Server Submission Guide"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This is a complete guide for submitting your local server (MCPB) to Anthropic's public directory for broader distribution and discoverability.

<!-- para:0002 -->
**Before reading this guide, you should have:**

<!-- para:0003 -->
**New to MCPB development?** See [Building MCPB Extensions](https://support.claude.com/en/articles/12922929-building-desktop-extensions-with-mcpb) first. For technical best practices (testing, error messages, portability), see [MCPB Repository](https://github.com/anthropics/mcpb).**

<!-- para:0004 -->
**Discoverability and trust:**

<!-- para:0005 -->
**User experience:**

<!-- para:0006 -->
**Support and credibility:**

<!-- para:0007 -->
**All requirements in this section are mandatory for directory approval.** Missing any of these will result in rejection or a revision request.**

<!-- para:0008 -->
For general MCPB development best practices (testing, error handling, portability), see the [MCPB Repository README](https://github.com/modelcontextprotocol/mcpb/blob/main/README.md).

<!-- para:0009 -->
YES. Every tool MUST have and maintain accurate safety annotations.

<!-- para:0010 -->
**Required on every tool:**

<!-- para:0011 -->
See [MCP Protocol - Tool Annotations](https://modelcontextprotocol.io/legacy/concepts/tools) for complete schema and implementation details.

<!-- para:0012 -->
**Not optional.** This is a hard requirement derived from the [MCP Directory Policy](https://support.claude.com/en/articles/11697096-anthropic-mcp-directory-policy).**

<!-- para:0013 -->
**How to decide which annotation:**

<!-- para:0014 -->
**Implementation details:** See [MCP Protocol - Tools](https://modelcontextprotocol.io/docs/concepts/tools) for:**

<!-- para:0015 -->
**Validation before submission:**

<!-- para:0016 -->
# Check all tools have annotations

<!-- para:0017 -->
grep -A 5 -B 5 "readOnlyHint\|destructiveHint" server/

<!-- para:0018 -->
# Verify each tool has exactly one annotation

<!-- para:0019 -->
**Impact:** The first thing we check and the most common reason for a revision request.**

<!-- para:0020 -->
**Additional recommended annotation:**

<!-- para:0021 -->
Yes, privacy policies are required in two locations:

<!-- para:0022 -->
**Location 1: README.md**

<!-- para:0023 -->
Add a "Privacy Policy" section to your README with link to your full privacy policy so that users are aware of your practices:

<!-- para:0024 -->
**Location 2: manifest.json**

<!-- para:0025 -->
Add `privacy_policies` array with publicly accessible HTTPS URLs:

<!-- para:0026 -->
**Complete implementation:** See [MCPB Manifest Spec - Privacy Policies](https://github.com/anthropics/mcpb/blob/main/MANIFEST.md) for:**

<!-- para:0027 -->
**Privacy policy must cover:**

<!-- para:0028 -->
**Requirements:**

<!-- para:0029 -->
**Common mistakes:**

<!-- para:0030 -->
**Impact:** One of the most common causes of rejection - straightforward to fix but frequently overlooked.**

<!-- para:0031 -->
MINIMUM of three working examples demonstrating core functionality.

<!-- para:0032 -->
**What qualifies as a good example:**

<!-- para:0033 -->
**Example format (in README.md):**

<!-- para:0034 -->
**What to include:**

<!-- para:0035 -->
**Requirements:**

<!-- para:0036 -->
**Impact:** A frequent source of delays or rejections - reviewers need complete documentation to properly evaluate submissions.**

<!-- para:0037 -->
If your MCPB requires authentication or external service access, then YES.

<!-- para:0038 -->
**Required when:**

<!-- para:0039 -->
**Not required when:**

<!-- para:0040 -->
**What to provide:**

<!-- para:0041 -->
**How to provide:**

<!-- para:0042 -->
**Best practice:** Create dedicated test account separate from production to:**

<!-- para:0043 -->
**Impact:** Delays review process if missing when needed**

<!-- para:0044 -->
Comprehensive documentation in README.md with minimum required sections.

<!-- para:0045 -->
**Minimum required sections:**

<!-- para:0046 -->
**Example README.md structure:**

<!-- para:0047 -->
**Additional recommended sections:**

<!-- para:0048 -->
**Best practices:**

<!-- para:0049 -->
Before submitting to the directory, complete this step-by-step submission process:

<!-- para:0050 -->
**1. Pre-submission checklist:**

<!-- para:0051 -->
**Test your MCPB:**

<!-- para:0052 -->
**Verify mandatory requirements:**

<!-- para:0053 -->
**Prepare documentation:**

<!-- para:0054 -->
**2. Package final version:**

<!-- para:0055 -->
**3. Submit via official form:**

<!-- para:0056 -->
**Submission form:** [https://forms.gle/tyiAZvch1kDADKoP9](https://forms.gle/tyiAZvch1kDADKoP9)**

<!-- para:0057 -->
**Required information:** Server details, documentation links, test credentials, examples (minimum 3), and contact information. Form provides a complete list.**

<!-- para:0058 -->
While we strive to review every submission as quickly as we can, due to the amount of interest we cannot promise that we will accept your submission or respond to it individually.

<!-- para:0059 -->
These are the top issues based on submission data:

<!-- para:0060 -->
**1. Missing tool annotations**

<!-- para:0061 -->
**2. Portability issues**

<!-- para:0062 -->
**3. Missing privacy policy**

<!-- para:0063 -->
**4. Incomplete documentation**

<!-- para:0064 -->
Follow these prevention best practices:

<!-- para:0065 -->
**1. Complete the checklist**

<!-- para:0066 -->
**2. Test like an end user**

<!-- para:0067 -->
**3. Validate tool annotations**

<!-- para:0068 -->
**4. Privacy policy verification**

<!-- para:0069 -->
**5. Example quality self-assessment**

<!-- para:0070 -->
**Success rate:** Extensions following this prevention guide have fewer revision requests.**

<!-- para:0071 -->
Yes. Removal can occur for various reasons.

<!-- para:0072 -->
**Voluntary removal (your choice):**

<!-- para:0073 -->
**Removal by Anthropic:**

<!-- para:0074 -->
Anthropic may remove extensions from the directory at any time and for any reason, at its sole discretion.

<!-- para:0075 -->
**Recommendations to avoid removal:**

<!-- para:0076 -->
All extensions must comply with the [Anthropic MCP Directory Policy](https://support.claude.com/en/articles/11697096-anthropic-mcp-directory-policy).

<!-- para:0077 -->
This guide assumes you already have a working MCPB. If you're just getting started with MCPB development, see our companion guide: [Building Desktop Extensions with MCPB](https://support.claude.com/en/articles/12922929-building-desktop-extensions-with-mcpb).

<!-- para:0078 -->
The building guide covers:
