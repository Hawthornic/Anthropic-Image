---
source_url: https://claude.com/resources/use-cases/generate-project-status-reports
title: "Generate project status reports"
section: resources
---

<!-- para:0001 -->
# Generate project status reports

<!-- para:0002 -->
- Author Anthropic
- Category: Professional
- Model Sonnet 4.5
- Features Connectors
- Share [Copy link](https://claude.com/resources/use-cases/generate-project-status-reports#)https://claude.com/resources/use-case/generate-project-status-reports

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Status reporting often means sifting through your various tools and messages to find updates and decisions. Claude simplifies this by querying multiple data sources at once, extracting information from different formats, and creating organized reports. This turns hours of manual work into minutes.

<!-- para:0005 -->
Ask Claude to pull information from your connected tools and create a tracker that consolidates everything. The key is being specific about what you need tracked and where to look.

<!-- para:0006 -->
I need to consolidate project status from multiple sources into a task tracker.

<!-- para:0007 -->
Pull information from:

<!-- para:0008 -->
- Gmail (past 2 weeks, search "Project Hermes")
- Slack #hermes-sprint channel
- Google Drive "Project Hermes" folder
- Recent calendar meetings

<!-- para:0009 -->
For each task, I need to see:

<!-- para:0010 -->
- Who owns it and what they're working on
- Current status (not started, in progress, blocked, done)
- Any blockers and how long they've been stuck
- Notes from their updates about plans and challenges

<!-- para:0011 -->
Create an Excel tracker and include these features: visual status indicators, cell comments with context from sources (so I can hover and see the details), dropdown menus for status and priority (to make updates easy), and data bars showing progress visually. The tracker should make it obvious at a glance where the problems are and who needs help.

<!-- para:0012 -->
## Give Claude context

<!-- para:0013 -->
Enable [connectors](https://claude.com/blog/connectors-directory) and [integrations](https://support.claude.com/en/articles/10168395-setting-up-claude-integrations) to give Claude direct access to your tools as live data sources, not just pasted snippets.

<!-- para:0014 -->
## Required context

<!-- para:0015 -->
Once you’ve connected your [Google Drive](https://support.claude.com/en/articles/10166901-using-the-google-drive-integration), [Gmail, Google Calendar](https://support.claude.com/en/articles/11088742-using-the-gmail-and-google-calendar-integrations?q=googel+driv), and [Slack](https://www.claude.com/claude-and-slack) tools, make sure they are toggled on in the chat bar settings. Claude can then access your email threads, Drive file updates, calendar events, and Slack conversations to piece together what's actually happening with your project.

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
Use [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) for better results when making Word, Excel, and Power Point files.

<!-- para:0018 -->
## What Claude creates

<!-- para:0019 -->
Claude searches your connected tools, finds status updates from different sources, reconciles them into a single view, and creates an Excel tracker with visual indicators and context in cell comments.

<!-- para:0020 -->
I've searched your connected tools for Project Hermes updates and created a consolidated tracker.

<!-- para:0021 -->
Found across your tools:

<!-- para:0022 -->
- 147 Gmail messages mentioning Project Hermes
- 312 Slack messages in #hermes-sprint
- 23 documents in Google Drive /Project Hermes folder
- 18 calendar meetings with "Hermes" in the title

<!-- para:0023 -->
Key insights from consolidation:

<!-- para:0024 -->
- Sarah said "80% done" in Slack but mentioned complexity in her 1-on-1 notes, so I adjusted to 45% in the tracker
- Mike's been blocked on API spec for 4 days (mentioned in Slack Nov 1, still blocked Nov 4)
- Lisa's approval escalated to VP Engineering (email thread shows 3 escalation attempts)
- Team consensus from standup: data migration is highest risk item
- I’ve created a spreadsheet file with 25 tasks, visual indicators, and cell comments with context from all sources.

<!-- para:0025 -->
## Follow up prompts

<!-- para:0026 -->
### Deep dive blockers

<!-- para:0027 -->
Pull all related conversations about a blocker to understand the full context.

<!-- para:0028 -->
The tracker shows Lisa's been blocked on approval for 4 days. Find every mention of this blocker across Slack, email, and meeting notes. I need to see the complete escalation history and current status.

<!-- para:0029 -->
### Create weekly status report

<!-- para:0030 -->
Generate an executive summary from the tracker data.

<!-- para:0031 -->
Using the task tracker data, create a one-page status report for leadership. Include: overall progress percentage, number of blockers, which workstreams are at risk, and top 3 items that need executive attention.

<!-- para:0032 -->
## Tricks, tips, and troubleshooting

<!-- para:0033 -->
### Create a Skill for recurring reports

<!-- para:0034 -->
Create a custom [skill](https://support.claude.com/en/articles/12512176-what-are-skills) for generating status reports to embed all the steps involved in the process. Once created, you can use the skill anywhere in Claude by referencing its name or description. This triggers Claude to run the workflow automatically.

<!-- para:0035 -->
### Specify how to handle missing information

<!-- para:0036 -->
If Claude can't find certain information—maybe there's no Slack discussion or Drive files haven't been updated—it's better to say "no progress documented" than to have gaps silently smoothed over. In your prompt, you can specify: "If you don't find information for a work stream, note that explicitly rather than omitting it."

<!-- para:0037 -->
### Add visual polish

<!-- para:0038 -->
Claude can opt for certain default fonts, colors, and styles. For differentiated outputs, you can request changes: "Choose a color scheme that's unique and aesthetically beautiful—avoid standard blues and grays," or "Select typography that feels modern and confident, not generic corporate." Specificity drives better design.

<!-- para:0039 -->
## Ready to try for yourself?
