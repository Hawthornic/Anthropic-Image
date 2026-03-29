---
source_url: https://claude.com/resources/use-cases/see-budget-futures-side-by-side
title: "See budget futures side by side, in chat with Claude"
section: resources
---

<!-- para:0001 -->
# See budget futures side by side, in chat with Claude

<!-- para:0002 -->
- Author Anthropic
- Category: Nonprofits
- Model Sonnet 4.6
- Features Custom visuals
- Share [Copy link](https://claude.com/resources/use-cases/see-budget-futures-side-by-side#)https://claude.com/resources/use-case/see-budget-futures-side-by-side

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Scenario planning is more tedious than hard, since it mostly comes down to opening the spreadsheet, cloning the tab, adjusting the numbers, and comparing. When the board call is in an hour, what you actually want is to look at multiple futures side by side and see at a glance which one hurts most. Tell Claude your budget in a sentence along with the thing that might change, and stacked bars stream in next to each other with a toggle between dollars and percentages. Clicking any scenario gets you a one-line read on what it actually means for the organization, which is usually the sentence you need for the board.

<!-- para:0005 -->
Here an ED might lose a major grant and needs to walk into a board call with a clear picture of what that looks like against flat and slight growth. Claude draws side by side, and the proportional cut to programs shows up as a flag before the ED has even clicked in.

<!-- para:0006 -->
We might lose our $400K federal grant next year. Current budget is about $2.1M: Roughly 60% programs, 25% ops, 15% fundraising. Show me three scenarios side by side: We lose the grant, we stay flat, it grows a bit. I want to flip between dollars and percentages, and if I click a scenario give me the one-line version of what it actually means.

<!-- para:0007 -->
## Give Claude context

<!-- para:0008 -->
The numbers you type in the prompt are the context, and rough is fine since this is a shape comparison rather than a budget. A total figure with a percentage split across your main categories is enough, and if you know which categories are fixed (for example, "ops is mostly rent"), mention it so Claude holds that line steady across scenarios.

<!-- para:0009 -->
## Required context

<!-- para:0010 -->
Nothing to upload. Type the numbers directly in your prompt.

<!-- para:0011 -->
## Optional context

<!-- para:0012 -->
If the actual budget lives in a Google Sheet, connecting Google Drive lets Claude read the real splits. For the quick shape comparison you're after here though, the rough version is usually enough.

<!-- para:0013 -->
## What Claude creates

<!-- para:0014 -->
Claude draws three stacked bar charts side by side with a toggle at the top that switches between dollar amounts and percentage splits. The dollar view shows you what gets smaller, while the percentage view shows whether the balance of the organization shifts or just shrinks proportionally. Categories that drop get flagged, and clicking any scenario opens a one-sentence note below that translates the numbers into what it would actually mean for operations.

<!-- para:0015 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69b28c75b44c4ba7549acbc0_Screenshot%202026-03-12%20at%202.50.39%E2%80%AFAM.png)

<!-- para:0016 -->
## Follow up prompts

<!-- para:0017 -->
### Click a button to redraw with a constraint

<!-- para:0018 -->
A proportional cut is rarely what you'd actually do, so the button holds one category fixed and redistributes the gap, showing you where the pressure really lands.

<!-- para:0019 -->
Rerun Scenario A but hold fundraising at the current dollar amount. Show me where the extra cut goes and rewrite the one-liner.

<!-- para:0020 -->
### Ask Claude to stretch one scenario across time

<!-- para:0021 -->
A one-time cut looks different from a taper, so asking Claude to redraw with a second year can change the read on what's survivable.

<!-- para:0022 -->
What if the grant doesn't drop all at once? Say we lose half in year one and the rest in year two. Redraw Scenario A across two years and tell me if that changes the read.

<!-- para:0023 -->
### Ask Claude to write the board-ready version

<!-- para:0024 -->
The bars show you the shape, but what the board needs is a sentence, and Claude can translate each scenario into what you'd actually say.

<!-- para:0025 -->
For each of the three scenarios, write me the one sentence I'd say to the board. The real tradeoff, not the numbers.

<!-- para:0026 -->
## Tricks, tips, and troubleshooting

<!-- para:0027 -->
### How you word your prompt shapes what you get

<!-- para:0028 -->
Asking for scenarios "side by side" with a toggle "between dollars and percentages" is what gets a comparison view rather than three separate charts. Naming the decision context ("board call in an hour") tells Claude this is about seeing the shape fast, not building a model you'd hand to finance. The same approach works on any multi-scenario question, whether that's staffing plans, program expansion, or anything else where you're weighing three futures and need to see which one hurts.

<!-- para:0029 -->
### Check the visual against your own understanding

<!-- para:0030 -->
The proportional cut Claude draws first is a starting point rather than a recommendation, since you know which categories have slack and which are mostly fixed costs. If Scenario A's one-liner doesn't match your sense of where the pain would actually land, tell Claude what you're seeing and the next version gets closer to what you'd actually present.

<!-- para:0031 -->
### What to do with the visual next

<!-- para:0032 -->
Hover for options to copy the three-bar comparison as an image for a board deck, or save it as an Artifact if you want to pull it up live in the meeting and click through scenarios with the board watching. You can also ask Claude to write the talking-points version as one sentence per scenario so you walk in ready.

<!-- para:0033 -->
## Ready to try for yourself?
