---
source_url: https://claude.com/resources/use-cases/surface-themes-from-all-your-feedback-channels
title: "Surface themes from all your feedback channels"
section: resources
---

<!-- para:0001 -->
# Surface themes from all your feedback channels

<!-- para:0002 -->
- Author Anthropic
- Category: Research
- Model Sonnet 4.5
- Features Cowork
- Share [Copy link](https://claude.com/resources/use-cases/surface-themes-from-all-your-feedback-channels#)https://claude.com/resources/use-case/surface-themes-from-all-your-feedback-channels

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
In Cowork, Claude connects to multiple feedback sources at once (call transcripts in a folder, Slack, your CRM, Linear) and pulls from all of them in parallel to spot patterns across platforms.

<!-- para:0005 -->
Tell Claude what you're looking for: theme frequency, cross-platform patterns, representative quotes. It structures the feedback analysis around your priorities.

<!-- para:0006 -->
I need to understand what customers are really asking for by synthesizing feedback from multiple sources.

<!-- para:0007 -->
Sources:

<!-- para:0008 -->
- Call transcripts: Scattered across my downloads folder
- Slack in channels like #customer-feedback and #support-questions
- Salesforce: Opportunity notes and lost deal reasons
- Linear: Open feature requests and bug reports

<!-- para:0009 -->
Find the main themes and patterns across all sources — what keeps coming up? Give me counts by source, cross-platform patterns, and representative quotes. Then prioritize into product ideas based on frequency and business impact.

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
[Cowork](https://claude.com/resources/tutorials/claude-cowork-a-research-preview) is a workspace in [Claude Desktop](https://claude.com/download) that connects to your tools via [connectors](https://claude.com/connectors) and works with your local files. Give it access to your call transcripts and connect your other feedback sources. Cowork pulls from all of them in parallel.

<!-- para:0012 -->
**What to expect: ** After your initial prompt in Cowork, Claude may ask you questions about what themes matter most or how to prioritize, then build a plan you can review in the sidebar. This helps it work more independently and surface more useful patterns.**

<!-- para:0013 -->
## Required context

<!-- para:0014 -->
To get started:

<!-- para:0015 -->
- Download [Claude Desktop](https://claude.com/download) and start a Cowork session
- Select ***Work in a folder*** in the chat bar to give Cowork access to your call transcripts
- Add [connectors](https://claude.com/connectors) for Slack, CRM, and Linear

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
- Theme taxonomy your team already uses
- Customer segment definitions for filtering

<!-- para:0018 -->
## What Claude creates

<!-- para:0019 -->
Claude synthesizes feedback from all connected sources, identifies themes with counts and attribution, highlights patterns that appear across multiple platforms, and suggests prioritized product ideas.

<!-- para:0020 -->
I analyzed feedback from all four sources. Here's what emerged:

<!-- para:0021 -->
#### Top Themes by Frequency

<!-- para:0022 -->
1. **Mobile app issues (57 total)** — Calls: 11 | Slack: 31 | CRM: 1 | Linear: 14
2. **Reporting limitations (45 total)** — Calls: 15 | Slack: 23 | CRM: 2 | Linear: 5
3. **Salesforce integration (41 total)** — Calls: 18 | Slack: 12 | CRM: 8 | Linear: 3

<!-- para:0023 -->
#### Cross-Platform Patterns

<!-- para:0024 -->
**Mobile app (High Signal): ** Appears in ALL four sources — this is genuine pain, not just vocal users.**

<!-- para:0025 -->
**SSO integration (Revenue Signal): ** Low volume overall but appears heavily in CRM lost deal notes. This is a deal-blocker, not a usage issue.**

<!-- para:0026 -->
#### Prioritized Product Ideas

<!-- para:0027 -->
- Priority 1: Mobile app stability
- Priority 2: Okta SSO integration
- Priority 3: Report customization

<!-- para:0028 -->
## Follow up prompts

<!-- para:0029 -->
### Pull everything on one theme

<!-- para:0030 -->
Go deep on what matters most. Get every mention across all sources with full context — who said it, when, and what they were trying to do.

<!-- para:0031 -->
*"Pull every mention of mobile app issues across all four sources. For each one, give me the full context — who said it, when, what they were trying to accomplish, and how frustrated they seemed."*

<!-- para:0032 -->
### Build a roadmap proposal

<!-- para:0033 -->
Turn insights into a document for stakeholders. Cowork writes directly to your folder. Have it create a roadmap doc with evidence from the synthesis, ready to share with leadership.

<!-- para:0034 -->
*"Based on this analysis, draft a one-page roadmap proposal for Q1. Prioritize by cross-platform signal strength and business impact. Include the key quotes that support each recommendation."*

<!-- para:0035 -->
### Track what specific customers said

<!-- para:0036 -->
Follow up with customers who raised issues. See everything a specific customer mentioned across sources to prepare for a conversation.

<!-- para:0037 -->
*"What did Acme Corp say across all these sources? Pull everything they mentioned in calls, Slack, and CRM notes so I can follow up with them directly."*

<!-- para:0038 -->
## Tricks, tips, and troubleshooting

<!-- para:0039 -->
### Try asking Claude to spin up subagents for parallel pulls

<!-- para:0040 -->
When pulling from multiple sources, you can ask Claude to spin up subagents to query Slack, Linear, and Salesforce simultaneously.

<!-- para:0041 -->
### Watch the progress panel and steer as Claude works

<!-- para:0042 -->
Cowork shows which sources Claude is querying and what it's finding in real time. If one platform is returning less than expected, you can adjust mid-process.

<!-- para:0043 -->
### Your feedback data stays on your machine

<!-- para:0044 -->
Cowork runs in an isolated environment locally. Call transcripts, CRM notes, and Slack exports stay on your computer.

<!-- para:0045 -->
## Ready to try for yourself?
