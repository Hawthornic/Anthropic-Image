---
source_url: https://support.claude.com/en/articles/12622667-enterprise-configuration
title: "Enterprise configuration"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Administrators on Team or Enterprise plans can control Claude Desktop through system policies.

<!-- para:0002 -->
Deploy configuration settings through your MDM solution using configuration profiles. Claude Desktop reads preferences from the domain `com.anthropic.claudefordesktop`. Use your MDM tool (Jamf Pro, Kandji, Microsoft Intune) to deploy configuration profiles to target machines or user groups. Configuration profiles allow you to manage Claude Desktop settings centrally without user intervention.

<!-- para:0003 -->
**Configuration profile tools:**

<!-- para:0004 -->
Deploy configuration settings through your enterprise management solution using **[Group Policy](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/policy/group-policy-objects)** or Intune policies. Settings can be configured at machine-wide (HKLM) or per-user (HKCU) level. Machine-level settings take priority over user-level settings when both are configured.
