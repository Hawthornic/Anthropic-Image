---
source_url: https://claude.com/blog/contribution-metrics
title: "Understand Claude Code’s impact with contribution metrics"
section: blog
date: 2026-01-29
---

<!-- para:0001 -->
Today, we're introducing contribution metrics in Claude Code, available in public beta. Engineering teams can now measure how Claude Code impacts their team’s velocity, tracking PRs shipped and code committed with Claude's help.

<!-- para:0002 -->
## **How we're shipping at Anthropic**

<!-- para:0003 -->
Engineering teams at Anthropic use Claude Code extensively, and contribution data has helped us quantify its impact. As Claude Code adoption has increased internally, we've seen a 67% increase in PRs merged per engineer per day. Across teams, 70–90% of code is now being written with Claude Code assistance.

<!-- para:0004 -->
While pull requests alone are an incomplete measure of developer velocity, we’ve found them to be a close proxy for what engineering teams care about: shipping features, fixing bugs, and delighting users faster.

<!-- para:0005 -->
The new contribution metrics in Claude Code help you measure this impact in your own organization.

<!-- para:0006 -->
## **Measure velocity with Claude Code**

<!-- para:0007 -->
By integrating with Git Hub, contribution metrics surface the following data points:

<!-- para:0008 -->
- **Pull requests merged**: Track PRs created with and without Claude Code assistance
- **Code committed**: See lines of code committed to your repositories with and without Claude Code assistance
- **Per-user contribution data**: Identify adoption patterns across your team

<!-- para:0009 -->
Contribution data is calculated by matching Claude Code session activity with Git Hub commits and PRs. We calculate this conservatively, and only code where we have high confidence in Claude Code's involvement is counted as assisted.

<!-- para:0010 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/697aba6d44c54e6710747e68_contribution-metrics-2.png)

<!-- para:0011 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/697aba633790d097ad08c6fc_contribution-metrics-1.png)

<!-- para:0012 -->
The metrics appear in your existing Claude Code analytics dashboard, accessible to workspace admins and owners. No external tools or data pipelines are required. Simply install our Git Hub App and authenticate to your organization’s Git Hub account, and metrics will automatically populate on the dashboard.

<!-- para:0013 -->
Contribution metrics are designed to complement your existing engineering KPIs. Use them alongside DORA metrics, sprint velocity, or other measures to understand directional changes from bringing Claude Code to your team.

<!-- para:0014 -->
## **Getting started**

<!-- para:0015 -->
Code contribution metrics are available now in beta for Claude Team and Enterprise customers. To enable them:

<!-- para:0016 -->
1. Install the [Claude Git Hub App](https://github.com/apps/claude) for your organization
2. Navigate to [Admin settings > Claude Code](http://claude.ai/admin-settings/claude-code) and toggle on Git Hub Analytics
3. Authenticate to your Git Hub organization

<!-- para:0017 -->
Metrics begin populating automatically as your team uses Claude Code. View the [documentation](https://code.claude.com/docs/en/analytics) for detailed setup instructions and guidance on interpreting your metrics.
