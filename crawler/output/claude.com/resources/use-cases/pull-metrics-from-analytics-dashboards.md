---
source_url: https://claude.com/resources/use-cases/pull-metrics-from-analytics-dashboards
title: "Pull metrics from analytics dashboards"
section: resources
---

<!-- para:0001 -->
# Pull metrics from analytics dashboards

<!-- para:0002 -->
- Author Anthropic
- Category: Claude in Chrome
- Model Haiku 4.5
- Features Browser Use
- Share [Copy link](https://claude.com/resources/use-cases/pull-metrics-from-analytics-dashboards#)https://claude.com/resources/use-case/pull-metrics-from-analytics-dashboards

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude navigates your analytics dashboards—Amplitude, Mixpanel, or other tools—and extracts the metrics you specify. It reads the same reports you would, pulls the numbers, and compiles them into a summary you can paste into a team update or Slack.

<!-- para:0005 -->
Specify which metrics matter and from which tools. Claude handles the navigation and extraction.

<!-- para:0006 -->
Pull my weekly metrics from both my Amplitude and Mixpanel open tabs.

<!-- para:0007 -->
**From Amplitude: **

<!-- para:0008 -->
- Weekly active users (WAU) — past 4 weeks
- New user signups — this week vs. last week
- Retention (Day 1, Day 7, Day 30) — for the cohort from 30 days ago

<!-- para:0009 -->
**From Mixpanel: **

<!-- para:0010 -->
- Feature adoption rate for new dashboard (% of WAU who used it)
- Conversion rate through onboarding flow
- Top 5 events by volume this week

<!-- para:0011 -->
**Output: ** Format as a summary I can paste into our weekly product update.**

<!-- para:0012 -->
## Give Claude context

<!-- para:0013 -->
Claude uses browser use to navigate your analytics tools through your existing browser sessions. If you're logged into Amplitude and Mixpanel, Claude can access the same dashboards and reports you see—no API keys or integrations to configure.

<!-- para:0014 -->
## Required context

<!-- para:0015 -->
Log into your analytics tools in Chrome before starting. Claude navigates to the dashboards and reports using your sessions.

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
If you have saved dashboards or reports in your analytics tools, mention them by name. Claude can navigate directly to a saved report rather than building queries from scratch.

<!-- para:0018 -->
## What Claude creates

<!-- para:0019 -->
Claude compiles metrics from both tools into a single summary.

<!-- para:0020 -->
**Weekly Product Metrics Summary**

<!-- para:0021 -->
**User Growth**

<!-- para:0022 -->
*Source: Amplitude*

<!-- para:0023 -->
WeekWAUChange4 weeks ago24,312—3 weeks ago25,891+6.5%2 weeks ago26,455+2.2%This week27,102+2.4%

<!-- para:0024 -->
**Key Stats: **

<!-- para:0025 -->
- **New signups: ** 1,847 this week vs 1,623 last week (+13.8%)
- **Retention (30-day-old cohort): ** Day 1: 68% → Day 7: 41% → Day 30: 23%

<!-- para:0026 -->
**Feature Engagement**

<!-- para:0027 -->
*Source: Mixpanel*

<!-- para:0028 -->
- **New dashboard adoption: ** 34% of WAU (up from 28% last week)
- **Onboarding conversion: ** 71% complete the full flow

<!-- para:0029 -->
**Top Events This Week: **

<!-- para:0030 -->
Event Count Dashboard viewed45,221Report exported12,847Filter applied11,293Team member invited4,891Integration connected3,442

<!-- para:0031 -->
**Summary for Your Update**

<!-- para:0032 -->
WAU grew **11.5% over the past month** to 27.1K. New signups are up 14% week-over-week. The new dashboard is seeing solid adoption at 34% of active users. Retention remains steady with 23% of users still active at Day 30.

<!-- para:0033 -->
## Follow up prompts

<!-- para:0034 -->
### Dig into a specific metric

<!-- para:0035 -->
Have Claude investigate before you share the report and get more detail when something looks off.

<!-- para:0036 -->
The onboarding conversion dropped from 78% last week. Can you go into Mixpanel and show me where in the flow people are dropping off? I need to understand this before the meeting.

<!-- para:0037 -->
### Share the output in a different channel

<!-- para:0038 -->
Once your summary is ready, have Claude format it and post it directly to your team channel.

<!-- para:0039 -->
This looks good. Can you turn it into a few bullet points and post it to #product-weekly in Slack? Just the highlights and anything that changed significantly.

<!-- para:0040 -->
### Add another data source

<!-- para:0041 -->
Pull in another data source without starting over. Claude can look in a new tab and add to your summary.

<!-- para:0042 -->
Can you also pull our revenue metrics from Stripe? I need MRR, new subscriptions this week, and churn rate. Add them to the summary.

<!-- para:0043 -->
## Tricks, tips, and troubleshooting

<!-- para:0044 -->
### Schedule weekly metrics pulls

<!-- para:0045 -->
Click the clock icon in the extension panel to schedule this workflow. Set it to run Monday morning and Claude will have your metrics summary ready before your weekly product sync. No more scrambling to pull numbers before the meeting.

<!-- para:0046 -->
### Drag all your analytics tabs into one group

<!-- para:0047 -->
For multi-tool metrics, drag Amplitude, Mixpanel, and any other dashboards into Claude's tab group. You'll see a green banner confirming Claude can access all of them. Now Claude reads across every tool simultaneously—no manual switching.

<!-- para:0048 -->
### Save your workflow as a shortcut

<!-- para:0049 -->
Once you have a metrics pull that covers what you need, save it as a shortcut by clicking on the shortcut icon below a successful prompt. You can also set a schedule for when you want the workflow to run next. Alternatively, manually trigger the workflow, by typing "/" and selecting the shortcut.

<!-- para:0050 -->
### Grant permission to your analytics platforms

<!-- para:0051 -->
If Claude asks for permission on every dashboard page, go to Settings → Permissions and enable "Always allow actions on this site" for Amplitude, Mixpanel, and other trusted work tools. Persistent access speeds up multi-page navigation significantly.

<!-- para:0052 -->
## Ready to try for yourself?
