---
source_url: https://claude.com/resources/use-cases/work-through-grant-options-in-chat-with-claude
title: "Work through grant options in chat with Claude"
section: resources
---

<!-- para:0001 -->
# Work through grant options in chat with Claude

<!-- para:0002 -->
- Author Anthropic
- Category: Education
- Model Sonnet 4.6
- Features Custom visuals
- Share [Copy link](https://claude.com/resources/use-cases/work-through-grant-options-in-chat-with-claude#)https://claude.com/resources/use-case/work-through-grant-options-in-chat-with-claude

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Some decisions have more dimensions than any one view can show — every sort order surfaces one thing and hides the rest. You ask Claude in chat, and the chart appears as part of its answer with all the tradeoffs visible at once. You work through it together, filtering and testing scenarios until a shortlist takes shape.

<!-- para:0005 -->
Here a researcher has a long list and needs to decide which few to write. Claude plots them on a risk-reward scatter with filters that narrow chart and table together, and buttons that turn the picture into a ranked shortlist.

<!-- para:0006 -->
I'm planning grant submissions for next year and there are a lot of funders to choose between. Can you show me the tradeoffs in a way I can actually see — like, which ones are long shots for big money versus safer bets for smaller awards? Flag anything with a deadline coming up soon.

<!-- para:0007 -->
## Give Claude context

<!-- para:0008 -->
If you have a spreadsheet with amounts, rough success rates, and deadlines, attach it. If not, describe the landscape and Claude can populate from what it knows about the major programs.

<!-- para:0009 -->
## Required context

<!-- para:0010 -->
Nothing strictly required. For a chart grounded in your actual pipeline, attach the sheet.

<!-- para:0011 -->
## Optional context

<!-- para:0012 -->
If the pipeline lives in a Google Sheet, connecting [Google Drive](https://www.claude.com/connectors/google-drive) lets Claude read it directly. A [Project](https://claude.ai/projects) means you can come back mid-season, add a new RFP, and ask for a re-plot without re-uploading.

<!-- para:0013 -->
## What Claude creates

<!-- para:0014 -->
Claude folds four spreadsheet columns into position, size, and color on one chart — so all the tradeoffs are in view at once. Long shots cluster upper-left, safe bets lower-right, and the distance between those corners is where your strategy sits. The expected-value card at the top is the one number that accounts for realism, and the gap between that and the raw total tells you how much of your list is lottery tickets.

<!-- para:0015 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69b28801e16dec01f6a39678_edu-06.rendered.png)

<!-- para:0016 -->
## Follow up prompts

<!-- para:0017 -->
### Click a point on the chart to see the full profile

<!-- para:0018 -->
Click any point on the chart and Claude expands it below — the chart stays, the profile opens beneath.

<!-- para:0019 -->
The NSF CAREER dot — open it up. Deadline, page limits, what makes an application competitive.

<!-- para:0020 -->
### Ask Claude to write a schedule from the chart

<!-- para:0021 -->
Claude writes a week-by-week schedule using the deadlines from the chart, with start dates calculated backward from each submission date.

<!-- para:0022 -->
Turn the next-90-days grants into a submission timeline. Work backwards from each deadline and tell me when to start each one.

<!-- para:0023 -->
### Tell Claude what's changed and it redraws the chart

<!-- para:0024 -->
Claude redraws the chart with your update — the submitted grant moves to in-progress, the remaining dots re-rank.

<!-- para:0025 -->
I submitted the R03 yesterday. Redraw with that one marked as in-progress and re-rank what's left.

<!-- para:0026 -->
## Tricks, tips, and troubleshooting

<!-- para:0027 -->
### How you word your prompt shapes what you get

<!-- para:0028 -->
"Long shots for big money versus safer bets" names the tension directly — that's what gets a chart where the tradeoff is spatial, with every dimension visible at once. Works on any decision where you're holding several variables: staffing, roadmap priority, anything that doesn't sort cleanly by one column.

<!-- para:0029 -->
### Check the visual against your own understanding

<!-- para:0030 -->
Ran this without a sheet, so Claude filled in the numbers? The success rates are roughly right for major federal mechanisms, less certain for foundations that don't publish. The chart shows the shape of the decision; the program page confirms any single dot before you write the application.

<!-- para:0031 -->
### What to do with the visual next

<!-- para:0032 -->
Save as Artifact lets you come back mid-season — submit one, tell Claude, redraw with the new landscape. Or ask Claude to turn the deadlines into a schedule you keep. The chart is a working surface you return to as the season goes.

<!-- para:0033 -->
## Ready to try for yourself?
