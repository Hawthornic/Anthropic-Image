---
source_url: https://support.claude.com/en/articles/13198485-enforce-network-level-access-control-with-tenant-restrictions
title: "Enforce network-level access control with Tenant Restrictions"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Tenant Restrictions enable IT administrators on Enterprise plans to enforce network-level access control for Claude. This feature ensures that users on corporate networks can only access approved organizational accounts, preventing unauthorized use of personal accounts.

<!-- para:0002 -->
When enabled, your network proxy injects an HTTP header into requests to Claude. Anthropic validates this header and blocks access from any organization not in the allowed list.

<!-- para:0003 -->
**Supported authentication methods:**

<!-- para:0004 -->
**Example:**

<!-- para:0005 -->
Members of Enterprise plans can find this in two different places:

<!-- para:0006 -->
Members of Console organizations can find this in **[Settings > Organization](https://platform.claude.com/settings/organization)**.

<!-- para:0007 -->
Configure your proxy to inject the header for Claude traffic:

<!-- para:0008 -->
From restricted network, test with your org's API key:

<!-- para:0009 -->
When access is blocked, users receive the following error:
