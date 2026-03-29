---
source_url: https://support.claude.com/en/articles/13163631-configuring-session-security-settings
title: "Configuring session security settings"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Session duration controls allow Enterprise and Console Admins to set a maximum session length for all users in their organization. When enabled, users will need to sign in again after the specified period, even if they've been actively using Claude. This helps protect your organization by limiting how long a compromised session could remain valid.

<!-- para:0002 -->
You can change the session duration at any time by selecting a new value from the dropdown. If you select a shorter duration:

<!-- para:0003 -->
To disable session duration, select "Disable" next to**Shortened session length**. Existing active sessions will continue to expire at their scheduled time. New sessions will return to default behavior, where sessions remain active as long as the user stays active.

<!-- para:0004 -->
If a user belongs to multiple organizations with different session duration settings, the shortest duration will be applied. For example, if a user is a member of Organization A (7-day limit) and Organization B (28-day limit), their sessions will expire after seven days. This is because a single session is used across all their organizations, so the most restrictive setting takes precedence.
