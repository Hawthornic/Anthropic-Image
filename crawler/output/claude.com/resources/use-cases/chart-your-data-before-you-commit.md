---
source_url: https://claude.com/resources/use-cases/chart-your-data-before-you-commit
title: "Chart your data in conversation with Claude before you commit to a reading"
section: resources
---

<!-- para:0001 -->
# Chart your data in conversation with Claude before you commit to a reading

<!-- para:0002 -->
- Author Anthropic
- Category: Education
- Model Sonnet 4.6
- Features Custom visuals
- Share [Copy link](https://claude.com/resources/use-cases/chart-your-data-before-you-commit#)https://claude.com/resources/use-case/chart-your-data-before-you-commit

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
You have data and want to see what's in it before you start working. Ask Claude, and the chart comes back with a read on what stands out — from there you work through it together.

<!-- para:0005 -->
Here a researcher has survey data on study habits and GPA before a committee meeting. Claude builds a clickable matrix, opens scatters on demand, and flags two findings worth a closer look.

<!-- para:0006 -->
Show me what this data is telling me. I'm looking for the strongest relationships in here. Can you give me a correlation matrix and let me click into any pair to see the scatter? Flag anything that surprises you. Don't hold back on making this readable; I'm presenting this to a committee.

<!-- para:0007 -->
## Give Claude context

<!-- para:0008 -->
The CSV is the context. Two lines in the prompt shape what comes back: "flag anything that surprises you" asks Claude to bring a read alongside the chart, and naming the audience ("for a committee") shapes how much the labels assume.

<!-- para:0009 -->
## Required context

<!-- para:0010 -->
Upload the CSV.

<!-- para:0011 -->
## Optional context

<!-- para:0012 -->
If the data lives in a Google Sheet, connecting [Google Drive](https://www.claude.com/connectors/google-drive) lets Claude read it directly.

<!-- para:0013 -->
## What Claude creates

<!-- para:0014 -->
Claude builds the grid, then calls out what stands out. The clickable matrix shows every pair; below it Claude flags which cells cut against the expected story. The flags are worth checking — a striking cell can be real, or a confound, or a quirk of this sample, and the chart makes all three look the same. The follow-ups below are how you figure out which.

<!-- para:0015 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69b2878a991e7455cf7bb0d1_edu-03.rendered.png)

<!-- para:0016 -->
## Follow up prompts

<!-- para:0017 -->
### Click into the visual to go deeper on one piece

<!-- para:0018 -->
Click any cell in the matrix and Claude opens a scatter for that pair below — the grid stays, the detail expands beneath. You can ask Claude to split that scatter by a third variable to see if the relationship holds.

<!-- para:0019 -->
Split the attendance-GPA relationship by study hours. For students in the top quartile of study time, does attendance still predict GPA?

<!-- para:0020 -->
### Ask Claude to write up what the chart showed

<!-- para:0021 -->
Claude writes the report paragraph based on what the chart showed — including where to hedge — and you edit from there.

<!-- para:0022 -->
Write the paragraph about attendance and GPA for my report, based on what the chart shows. Flag where I should hedge.

<!-- para:0023 -->
### Ask Claude to turn the chart into a quiz

<!-- para:0024 -->
Claude picks cells from the matrix, you say what you'd conclude, and it catches overclaims before the committee does.

<!-- para:0025 -->
Quiz me on the matrix. Show me a few cells and ask what I'd conclude — catch me if I read causation into a confound.

<!-- para:0026 -->
## Tricks, tips, and troubleshooting

<!-- para:0027 -->
### How you word your prompt shapes what you get

<!-- para:0028 -->
Adding "flag anything that surprises you" gets interpretation alongside the chart — which cells deserve attention, which cut against the expected story. Without that line, you get the matrix and do the reading yourself. Works on any data you're about to write about: results before a report, exported analytics before a status doc.

<!-- para:0029 -->
### Check the visual against your own understanding

<!-- para:0030 -->
The pattern Claude flagged is a starting point. A striking cell can be real, or a confound, or a quirk of the sample — the chart makes all three look the same. The follow-ups are where you figure out which, and you're the one deciding what holds up.

<!-- para:0031 -->
### What to do with the visual next

<!-- para:0032 -->
Hover for options: copy as image for slides, or Save as Artifact if you want something interactive to share with collaborators. Or ask Claude to write the report paragraph from what the chart showed — that's the piece you bring to the committee.

<!-- para:0033 -->
## Ready to try for yourself?
