---
source_url: https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans
title: "Configure custom data retention controls for Enterprise plans"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
*This article is about our commercial products such as Claude for Work and the Anthropic API. For our consumer products such as Claude Free, Pro, Max and when accounts from those plans use Claude Code, see **[here](https://privacy.claude.com/en/collections/10663362-consumers)**.*

<!-- para:0002 -->
Custom data retention controls allow organizations to manage how long Claude stores conversation and project data. This article explains how to set up and manage data retention periods for your organization.

<!-- para:0003 -->
Data retention is based on the last observed activity:

<!-- para:0004 -->
The minimum retention period is 30 days, and each month is counted as 30 days. For example, a three-month retention period equals 90 days.

<!-- para:0005 -->
When data reaches the end of its retention period:

<!-- para:0006 -->
If a conversation’s last message is at 3PM UTC on March 1 with a 30-day retention period, the deletion will occur at midnight UTC on March 31.

<!-- para:0007 -->
All retention-related actions and changes are automatically tracked in **[audit logs](https://support.claude.com/en/articles/9970975-how-to-access-audit-logs)**. You can access these logs to monitor changes to retention settings and data deletion events.
