---
source_url: https://support.claude.com/en/articles/8243635-our-approach-to-rate-limits-for-the-claude-api
title: "Our approach to rate limits for the Claude API"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Your rate limit depends on your usage tier, and is currently measured in three key metrics:

<!-- para:0002 -->
If you exceed any of these rate limits, you will get a 429 error describing which rate limit was exceeded, along with a `retry-after` header indicating how long to wait.

<!-- para:0003 -->
Rate limits are set at the organization level and are defined by usage tiers. Each tier has different spend and rate limits, with automatic tier advancement based on usage thresholds up to Tier 4.

<!-- para:0004 -->
You can view your organization's current tier and limits in the [Claude Console](https://platform.claude.com/).

<!-- para:0005 -->
More information on usage tiers and rate limits can be found in [our Claude docs](https://docs.claude.com/en/api/rate-limits).
