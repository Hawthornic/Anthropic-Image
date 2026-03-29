---
source_url: https://support.claude.com/en/articles/13694757-access-engagement-and-adoption-data-with-the-analytics-api
title: "Access engagement and adoption data with the Analytics API"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
The Analytics API gives Enterprise plan Primary Owners programmatic access to engagement and adoption data for their organization. Use it to build internal dashboards, track adoption trends, and feed Claude engagement data into your existing reporting tools.

<!-- para:0002 -->
All three options give you different views into your organization's data:

<!-- para:0003 -->
The **Analytics dashboard** (accessed via **[Analytics](https://claude.ai/analytics/activity)**) shows visualized usage data in the product. It's the right tool for day-to-day monitoring when you don't need to integrate data elsewhere.

<!-- para:0004 -->
The **Analytics API** returns the same aggregated usage and engagement metrics, but programmatically—so you can pull them into BI tools, map them against org charts, or automate reporting workflows. Data is aggregated per organization, per day.

<!-- para:0005 -->
The **Compliance API** is for governance and auditing use cases. It gives you access to individual user actions, raw activity events, and conversation content. If you need aggregated engagement metrics for dashboards, rather than raw events for auditing, use the Analytics API.

<!-- para:0006 -->
To access the Analytics API, you need Primary Owner access to your Enterprise organization.

<!-- para:0007 -->
Follow these steps:

<!-- para:0008 -->
For full authentication details, endpoint references, and code examples, refer to our **[Claude Enterprise Analytics API reference guide](https://support.claude.com/en/articles/13703965-claude-enterprise-analytics-api-reference-guide)**.

<!-- para:0009 -->
The Analytics API includes five endpoints. All data is aggregated per organization, per day, and is available for up to the past 90 days (not before January 1, 2026).

<!-- para:0010 -->
All endpoints return data for a single date or date range. Data is only available after January 1, 2026, and for dates more than three days ago.

<!-- para:0011 -->
The API has a default rate limit of 60 requests per minute. If this doesn't meet your organization's needs, reach out to your Anthropic Contact or our **[Sales team](https://claude.com/contact-sales)**.
