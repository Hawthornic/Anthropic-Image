---
source_url: https://claude.com/resources/use-cases/build-a-daily-briefing-across-your-tools
title: "Build a daily briefing across your tools"
section: resources
---

<!-- para:0001 -->
# Build a daily briefing across your tools

<!-- para:0002 -->
- Author Anthropic
- Category: Professional
- Model Sonnet 4.5
- Features Cowork
- Share [Copy link](https://claude.com/resources/use-cases/build-a-daily-briefing-across-your-tools#)https://claude.com/resources/use-case/build-a-daily-briefing-across-your-tools

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
In Cowork, Claude connects to your messaging, task tools, and dashboards at the same time, reading full conversation histories, surfacing discussions you weren't part of, and tying metrics to the threads behind them.

<!-- para:0005 -->
In your prompt, describe how you want the briefing structured and what counts as urgent. Claude pulls together what matters into a single briefing.

<!-- para:0006 -->
I need my morning briefing. Pull from Slack and Notion, and visit my team dashboard: https://metrics.acme-corp.com/ops-team

<!-- para:0007 -->
Structure it as:

<!-- para:0008 -->
- Urgent items from the dashboard (anything red or trending down)
- Slack threads where I'm mentioned — read the full threads for context
- Threads I'm not in but should probably know about based on my current tasks
- Tasks due this week and anything blocking them

<!-- para:0009 -->
For urgent items, pull the deeper context: who's involved, what's been discussed, what's still unresolved.

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
[Cowork](https://claude.com/resources/tutorials/claude-cowork-a-research-preview) is a workspace in [Claude Desktop](https://claude.com/download) that connects to your tools via [connectors](https://claude.com/connectors) and reads from browser tabs via [Claude in Chrome](https://claude.com/chrome). Add your messaging, tasks, and dashboard sources. Cowork queries them in parallel.

<!-- para:0012 -->
**What to expect: ** After your initial prompt in Cowork, Claude may ask you questions, like which channels matter most, what timeframe to cover, or how to format the briefing. It then builds a plan you can review in the sidebar. This helps it run more independently and deliver something closer to finished.**

<!-- para:0013 -->
## Required context

<!-- para:0014 -->
To get started:

<!-- para:0015 -->
- Download [Claude Desktop](https://claude.com/download) and start a Cowork session
- Add [connectors](https://claude.com/connectors) for Slack, Notion, and any other tools you want in the briefing
- [Install Claude in Chrome](https://claude.com/chrome) and add it as a connector for dashboard access

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
- Calendar for meeting context
- Email for external communications

<!-- para:0018 -->
## What Claude creates

<!-- para:0019 -->
Cowork creates a structured briefing organized by priority, with cross-platform context synthesized into single items where relevant. Using the Claude in Chrome connector, Claude opens your dashboard in a new browser tab and reads it directly, pulling metrics and context alongside your Slack and Notion data.

<!-- para:0020 -->
Here's your morning briefing for January 22:

<!-- para:0021 -->
#### Dashboard alerts

<!-- para:0022 -->
- **Pipeline velocity is down 15% this week** — I found a related thread in #sales where Maria mentioned two deals slipping to next quarter.
- **Support ticket volume trending up** — 23% increase over the last 3 days.

<!-- para:0023 -->
#### Threads where you're needed

<!-- para:0024 -->
1. #ops-team — Lisa tagged you about the vendor contract renewal. Related to your Notion task due Friday.
2. #leadership — Discussion about headcount planning. You weren't tagged but it relates to your hiring request.

<!-- para:0025 -->
#### Tasks due this week

<!-- para:0026 -->
- "Finalize Q1 vendor agreements" — due Friday, blocked on budget confirmation
- "Review marketing brief" — due tomorrow

<!-- para:0027 -->
## Follow up prompts

<!-- para:0028 -->
### Go deeper on a dashboard alert

<!-- para:0029 -->
Get the full context behind a metric. Cowork pulls the related threads, tasks, and history so you understand what's driving the number.

<!-- para:0030 -->
*"Tell me more about the pipeline velocity drop. Pull the full thread from #sales, any related tasks, and what's been discussed about those slipping deals."*

<!-- para:0031 -->
### Draft a response with full context

<!-- para:0032 -->
Move from briefing to action. Cowork drafts a reply using everything it knows about the topic — the thread history, related tasks, and your current priorities.

<!-- para:0033 -->
*"Draft a response to Lisa's vendor contract thread. I want to confirm we're moving forward but need to flag the budget dependency."*

<!-- para:0034 -->
### Surface everything on one topic

<!-- para:0035 -->
Pull together all mentions of a project, person, or issue across sources.

<!-- para:0036 -->
*"What else has been said about headcount planning? Pull from Slack, Notion, and anything on the dashboard related to hiring or team size."*

<!-- para:0037 -->
## Tricks, tips, and troubleshooting

<!-- para:0038 -->
### Watch the progress panel

<!-- para:0039 -->
Cowork shows which connectors are being queried in real-time. If your briefing is taking longer than expected, you can see which platform is the bottleneck.

<!-- para:0040 -->
### Iterate in the same conversation

<!-- para:0041 -->
Your first briefing request establishes context. Follow-up prompts can refine without re-querying everything.

<!-- para:0042 -->
### Data stays on your machine

<!-- para:0043 -->
Cowork processes briefings locally. Internal Slack discussions, roadmap debates, and task details never leave your computer.

<!-- para:0044 -->
## Ready to try for yourself?
