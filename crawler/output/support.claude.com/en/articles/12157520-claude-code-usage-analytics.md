---
source_url: https://support.claude.com/en/articles/12157520-claude-code-usage-analytics
title: "Claude Code usage analytics"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This feature allows Console users and owners of Team and Enterprise plans to monitor how their organization uses Claude Code, tracking productivity metrics and adoption patterns across teams.

<!-- para:0002 -->
The Claude Code Usage page displays the following metrics for your organization:

<!-- para:0003 -->
**Individual usage**: View each team member's email address and their total lines of code accepted for the current month. You can search for specific users or click the “Export” button to generate a CSV of members’ email addresses and total lines of code.**

<!-- para:0004 -->
**Lines of code accepted** measures the actual code your team incorporates into their work from Claude Code suggestions, helping you understand the tool's practical impact on development productivity.**

<!-- para:0005 -->
**Suggestion accept rate** indicates how relevant and useful Claude Code's suggestions are for your team's specific coding needs and practices.**

<!-- para:0006 -->
**Activity trends** show adoption patterns and help identify peak usage periods, allowing you to understand how Claude Code fits into your team's workflow.**

<!-- para:0007 -->
Contribution metrics are a new feature in public beta that helps Team and Enterprise organizations measure how Claude Code affects engineering velocity. By connecting to your organization's GitHub account, these metrics track code shipping activity with and without Claude Code, so you can see where it's making a difference.

<!-- para:0008 -->
For a more in-depth look at contribution metrics, see **[our Claude Code docs](https://code.claude.com/docs/en/analytics#enable-contribution-metrics)**.

<!-- para:0009 -->
Contribution metrics require a few steps beyond the base analytics setup:

<!-- para:0010 -->
After setup, metrics begin populating automatically. Allow up to 24 hours for data to appear. The dashboard currently processes data once daily.

<!-- para:0011 -->
If you see "GitHub app required. Install the GitHub app to view analytics," the GitHub App hasn't been installed yet. If the app is authenticated but no data appears, confirm the GitHub App is installed and that your team has started using Claude Code.

<!-- para:0012 -->
Once enabled, the following metrics appear in your Claude Code analytics dashboard:

<!-- para:0013 -->
Data is collected by correlating Claude Code session activity with GitHub commits and pull requests.

<!-- para:0014 -->
Usage metrics display data for the current calendar month and reset at the beginning of each month. Historical data visualization shows daily granularity for tracking trends over time.

<!-- para:0015 -->
Review your organization's code acceptance rate to understand if teams are finding Claude Code's suggestions valuable. If rates are lower than expected, consider providing additional training on effective prompting techniques.

<!-- para:0016 -->
Monitor individual usage patterns to identify power users who can share best practices with the broader team, or to spot team members who might benefit from additional support.

<!-- para:0017 -->
Track activity trends to understand when your team uses Claude Code most effectively and ensure adequate seat allocation during peak periods.

<!-- para:0018 -->
Claude Code usage analytics are not available to individual Pro or Max plans at this time.

<!-- para:0019 -->
If you notice that a specific user isn't showing up in your analytics, you should have them update Claude Code to the most recent version. The first Claude Code version to support this feature is **version 2.0.28**, so users should run `claude update` to manually update Claude Code if needed.

<!-- para:0020 -->
See **[Analytics](https://code.claude.com/docs/en/analytics)** in our Claude Code docs for more information.
