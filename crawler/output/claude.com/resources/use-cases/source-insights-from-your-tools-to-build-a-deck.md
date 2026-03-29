---
source_url: https://claude.com/resources/use-cases/source-insights-from-your-tools-to-build-a-deck
title: "Source insights from your tools to build a deck"
section: resources
---

<!-- para:0001 -->
# Source insights from your tools to build a deck

<!-- para:0002 -->
- Author Anthropic
- Category: Professional
- Model Opus 4.6
- Features Extended Thinking Browser Use
- Share [Copy link](https://claude.com/resources/use-cases/source-insights-from-your-tools-to-build-a-deck#)https://claude.com/resources/use-case/source-insights-from-your-tools-to-build-a-deck

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Opus 4.6 follows leads across your connected tools without needing direction at each step. Give it a starting point and it pulls search terms from what it finds, follows people to their updates, follows updates to the data they reference, and reconciles sources that disagree. By the time it builds the deck, it's working from evidence it gathered and cross-referenced itself.

<!-- para:0005 -->
Once the deck exists, [Claude in Power Point](https://claude.com/claude-for-powerpoint) lets you keep refining directly in your slides — restructuring sections, adjusting talking points, or adding charts.

<!-- para:0006 -->
*I’m prepping for board meeting Friday. Q3 was the quarter where everything happened at once: we shipped the platform consolidation, closed the Apex partnership, and lost two enterprise accounts.*

<!-- para:0007 -->
*Start with the Q3 project tracker in my local files — it has the key people, channels, and documents. Follow each person across their channels, emails, and documents they reference. When you find data, check it against other sources — the revenue numbers probably don’t agree. Figure out which is current.*

<!-- para:0008 -->
*The board needs to understand whether the consolidation bet is paying off despite the churn. Create a Power Point deck (12–15 slides) with speaker notes, an Excel data appendix, and a two-page Word brief. Make an argument, not a summary.*

<!-- para:0009 -->
## Give Claude context

<!-- para:0010 -->
Through Cowork in [Claude Desktop](https://claude.com/download) [Research Preview], connect your local files and tools. Point Claude at a Slack channel, a Drive folder, or an email thread to give it a starting point.

<!-- para:0011 -->
Connect Slack and Google Drive through connectors. [Claude in Chrome](https://claude.com/resources/tutorials/simplify-your-browsing-experience-with-claude-for-chrome) [beta] grabs current data from live dashboards.

<!-- para:0012 -->
[Extended Thinking](https://support.anthropic.com/en/articles/11145627-what-is-extended-thinking-and-how-do-i-use-it) lets Opus 4.6 scale its reasoning to match the complexity of the task — more sources and more conflicting data means deeper thinking before it starts building.

<!-- para:0013 -->
## Required context

<!-- para:0014 -->
- Cowork with access to local files ([supported formats](https://claude.com/download))
- At least one connected source: Slack, Google Drive, or email
- Adaptive Thinking: ON

<!-- para:0015 -->
## Optional context

<!-- para:0016 -->
- [Extended Thinking](https://support.anthropic.com/en/articles/11145627-what-is-extended-thinking-and-how-do-i-use-it) lets Opus 4.6 scale its reasoning to match the complexity of the task — more sources and more conflicting data means deeper thinking before it starts building.
- [Claude in Chrome](https://claude.com/resources/tutorials/simplify-your-browsing-experience-with-claude-for-chrome) (for live dashboard data from analytics or revenue platforms)
- Previous quarter’s board deck (for continuity and comparison)

<!-- para:0017 -->
## What Claude creates

<!-- para:0018 -->
Opus 4.6 works outward from the starting point you give it, pulls context from each source it finds, and saves three files locally: a presentation with narrative structure, a supporting data appendix, and an executive pre-read. If Claude in Chrome is connected, Claude opens relevant pages in new browser tabs to pull live data from dashboards and analytics platforms directly.

<!-- para:0019 -->
Here’s what I found and how I pieced it together:

<!-- para:0020 -->
I started in #platform-consolidation on Slack. The kickoff thread from July identified the core team: @maria (engineering), @james (partnerships), and @priya (customer success). From there:

<!-- para:0021 -->
- @maria’s weekly updates in #engineering-updates gave me the velocity metrics and the 22% cost reduction from consolidation.
- @james’s messages in #partnerships led me to the Apex term sheet in your local files and the close date (September 28).
- @priya flagged the two enterprise losses in #customer-success. I found the full churn details in a CSV on your desktop and the related email thread where both customers cited migration friction.
- The finance team’s Q3 report on Drive shows $4.2M revenue, but I pulled the Looker dashboard via Chrome and it shows $4.6M — the difference is the Apex revenue that closed after the report was finalized. I used $4.6M and noted the discrepancy in the appendix.
- Current NPS from Delighted (via Chrome): 47, down from 52 last quarter. The drop tracks with the two enterprise losses.

<!-- para:0022 -->
**The quarter’s argument in one sentence: ** The platform consolidation cut engineering costs 22% and landed the Apex partnership, but migration friction cost you two enterprise accounts — and the retention data shows that’s a fixable execution problem, not a product problem.**

<!-- para:0023 -->
I’ve saved three files:

<!-- para:0024 -->
1. **Q3 Board Presentation** (q3-board-deck.pptx): 14 slides with speaker notes and anticipated board questions.
2. **Data Appendix** (q3-data-appendix.xlsx): Six tabs covering revenue reconciliation, customer retention, NPS trends, engineering velocity, pipeline, and Apex partnership economics.
3. **Executive Brief** (q3-executive-brief.docx): Two-page pre-read framing the consolidation bet and what the churn data actually shows.

<!-- para:0025 -->
## Follow up prompts

<!-- para:0026 -->
### Turn the deck into an interactive board briefing

<!-- para:0027 -->
Static slides work in the room. An interactive version lets board members explore the data on their own time.

<!-- para:0028 -->
*Take the board deck and build an interactive HTML briefing I can share as a link. Each section should have the narrative up top with expandable charts underneath — let them click into the revenue reconciliation, the NPS trend, the churn timeline. Make the Apex partnership economics explorable so they can adjust assumptions.*

<!-- para:0029 -->
### Pre-brief each board member on what matters to them

<!-- para:0030 -->
Opus 4.6 already knows the quarter’s full context. Use that to draft targeted pre-reads before the meeting.

<!-- para:0031 -->
*Draft a Slack message for each board member based on what they’ll care about most. The CFO gets the revenue reconciliation and Apex economics. The product lead gets the consolidation impact and engineering velocity. The customer advocate gets the churn story and the NPS data. Personalize each one — don’t just cut the same deck three ways.*

<!-- para:0032 -->
### Stress-test the narrative before you present it

<!-- para:0033 -->
The hardest board questions come from the data you glossed over. Opus 4.6 has read every source and knows where the weak points are.

<!-- para:0034 -->
*You’ve seen all the raw data. Play devil’s advocate — what are the three toughest questions the board could ask about this quarter, and where is our narrative weakest? Then update the speaker notes with how to handle each one, citing specific data points from the appendix.*

<!-- para:0035 -->
## Tricks, tips, and troubleshooting

<!-- para:0036 -->
### Point Opus 4.6 at a starting resource and tell it to follow what it finds

<!-- para:0037 -->
Opus 4.6 can pull search terms from what it reads, so a document that names people, channels, and files gives it more threads to follow across your tools. A project tracker or kickoff doc works well. Once you have the tools you'd like Claude to access, tell it to work outward: "Follow each person across their channels, emails, and documents they reference. Check data against other sources." Paired with Cowork, it sustains that work across as many steps as the task requires.

<!-- para:0038 -->
### Keep refining in Power Point

<!-- para:0039 -->
Once Claude has finished the task, the output files save to your working folder through Cowork. Open the deck in Power Point and use [Claude in Power Point](https://claude.com/claude-for-powerpoint) to make pinpoint edits, restructure slides, or add charts. Ask Claude to update the appendix or brief to match.

<!-- para:0040 -->
### Build a plugin for recurring presentations

<!-- para:0041 -->
If your team builds quarterly decks with a consistent structure, you can package that process as a Cowork plugin. A plugin teaches Claude your specific framework: which sources to check, which metrics the board expects, how to structure the argument, and what format the deliverables should follow.

<!-- para:0042 -->
### Start another task while this one runs

<!-- para:0043 -->
Cross-source research and deck building runs across many steps. Open a new session from the sidebar for other work. You'll see a grey dot in the sidebar when this one needs attention.

<!-- para:0044 -->
## Ready to try for yourself?
