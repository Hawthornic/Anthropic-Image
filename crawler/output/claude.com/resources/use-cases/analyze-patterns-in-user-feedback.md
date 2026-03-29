---
source_url: https://claude.com/resources/use-cases/analyze-patterns-in-user-feedback
title: "Analyze patterns in user feedback"
section: resources
---

<!-- para:0001 -->
# Analyze patterns in user feedback

<!-- para:0002 -->
- Author Anthropic
- Category: Professional
- Model Sonnet 4.5
- Features Connectors
- Share [Copy link](https://claude.com/resources/use-cases/analyze-patterns-in-user-feedback#)https://claude.com/resources/use-case/analyze-patterns-in-user-feedback

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude can read through all your customer feedback to aggregate and analyze your data in one place. Let Claude do the exhaustive reading and sorting so you can spend time focusing on improving user experience.

<!-- para:0005 -->
Tell Claude which feedback sources to analyze and the questions you're trying to answer. Claude reads all your data at once and identifies themes across hundreds of comments. It then synthesizes everything into workbooks that make qualitative feedback actionable.

<!-- para:0006 -->
Pull all Intercom conversations from the past 90 days. I'm also uploading our Q2 NPS survey responses (CSV) and notes from six user interviews we did last month (PDFs).

<!-- para:0007 -->
Read everything and tell me what patterns you're seeing:

<!-- para:0008 -->
- What issues keep showing up across different feedback sources?
- When people ask for different things, are they actually pointing to the same underlying need?
- Which complaints seem most urgent based on how users describe them?
- What's worth prioritizing vs what's noise?

<!-- para:0009 -->
Create a data workbook (Excel) organizing all the feedback by theme with filters so I can dig into specific issues. Include the source for each piece of feedback (Intercom, NPS, or interview) and use professional formatting with frozen headers

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
Connect tools where your support and feedback lives using connectors so Claude can access and analyze your data.

<!-- para:0012 -->
## Required context

<!-- para:0013 -->
In [Settings > Connectors](https://claude.ai/setting/connectors), find and enable your [Intercom](http://claude.ai/directory/b2def8dc-ae47-4d46-877a-19b6a6ebb771) connector. Upload supplementary feedback that lives outside your tools—NPS responses, interview transcripts, feedback forms, user research notes. Click the (+) button in the chat bar to browse through your files, or alternatively, drag and drop files into the chat box area.

<!-- para:0014 -->
## Optional context

<!-- para:0015 -->
Turn on [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) for deeper pattern recognition across hundreds of feedback points.

<!-- para:0016 -->
## What Claude creates

<!-- para:0017 -->
Claude connects dots between your feedback sources and organizes everything into data workbooks that make qualitative feedback actionable.

<!-- para:0018 -->
I've analyzed 347 feedback points across your support tickets, NPS responses, and interview transcripts.

<!-- para:0019 -->
- The theme classification tab lets you audit Claude's work—see which feedback got tagged with which themes, check if anything was miscategorized, identify edge cases. This is your validation layer before presenting findings to stakeholders.
- Trend analysis reveals velocity and direction. A complaint that appeared 5 times three months ago but 40 times last month tells a different story than one that's been steady. Claude tracks both the absolute numbers and the rate of change.
- The quote repository is for persuasion—when you're pitching a roadmap item to leadership or writing a PRD, you need user voice, not summary statistics. This tab gives you the most representative, compelling quotes for each theme.
- Feature request tracker helps you group related asks, estimate impact, and build a case for why something deserves prioritization (or doesn't).

<!-- para:0020 -->
**View your data workbook**

<!-- para:0021 -->
## Follow up prompts

<!-- para:0022 -->
### Improve the file output

<!-- para:0023 -->
Claude responds to design language and quality cues by applying sophisticated formatting, typography, and visual elements. Review first outputs, then request elevated quality with specific design direction.

<!-- para:0024 -->
Add visual polish to these files. For the document, refine with premium typography, sophisticated color schemes, and tighter formatting. For the spreadsheet, add charts to visualize trends, comparison tables, and callout boxes for key insights.

<!-- para:0025 -->
### Compare segments

<!-- para:0026 -->
Break analysis down by meaningful groups to see how patterns differ. Claude identifies which issues matter most to specific segments, helping you prioritize high-value users or unique needs.

<!-- para:0027 -->
Take the top three pain points and show me how they differ between enterprise and SMB customers. Are we solving the right problems for our highest-value segment?

<!-- para:0028 -->
### Create a repeatable workflow

<!-- para:0029 -->
Turn workflows you’ve refined into reusable [skills](https://support.claude.com/en/articles/12512176-what-are-skills) that bundle your instructions, templates, and preferences. Skills eliminate repetitive explanations and ensure consistent outputs for tasks you do regularly.

<!-- para:0030 -->
Help me create a skill for analyzing user feedback. I want to capture where I pull data from, my analysis methodology, and the output structure I prefer—so I can reuse this process without re-explaining it every time.

<!-- para:0031 -->
## Tricks, tips, and troubleshooting

<!-- para:0032 -->
### Work with messy data

<!-- para:0033 -->
Don't spend time formatting feedback into perfect columns before uploading. Claude handles messy data, like mixed formats, incomplete fields, typos, even handwritten notes you've transcribed. Focus your energy on collecting comprehensive feedback, not cleaning it.

<!-- para:0034 -->
### Watch for echo chamber effects

<!-- para:0035 -->
Claude will tell you what's in the data, but you need to interpret whether the sample represents your actual user base. Power users may leave more feedback than typical users. Enterprise customers have dedicated account managers to channel complaints. Promoters write thoughtful NPS comments while detractors just pick a number. Ask Claude: "What's the breakdown of feedback by user segment? Are we over-indexed on hearing from any particular group?"

<!-- para:0036 -->
### Combine with quantitative data for the full picture

<!-- para:0037 -->
Feedback tells you what users say; usage data tells you what they do. The most powerful insights come from connecting both. Upload your feedback analysis to a Claude Project along with usage analytics, then ask: "Users complain about Feature X being slow, but our logs show it averages a fast response time. What's actually happening?"

<!-- para:0038 -->
## Ready to try for yourself?
