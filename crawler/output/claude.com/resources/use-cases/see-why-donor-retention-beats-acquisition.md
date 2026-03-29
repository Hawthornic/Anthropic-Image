---
source_url: https://claude.com/resources/use-cases/see-why-donor-retention-beats-acquisition
title: "See why donor retention beats acquisition, in chat with Claude"
section: resources
---

<!-- para:0001 -->
# See why donor retention beats acquisition, in chat with Claude

<!-- para:0002 -->
- Author Anthropic
- Category: Nonprofits
- Model Sonnet 4.6
- Features Custom visuals
- Share [Copy link](https://claude.com/resources/use-cases/see-why-donor-retention-beats-acquisition#)https://claude.com/resources/use-case/see-why-donor-retention-beats-acquisition

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Most fundraisers know that keeping a donor costs less than finding a new one, but the argument tends to stay abstract until you see the numbers compound. Claude can build a five-year donor projection with sliders for retention and acquisition, and a one-sentence note under the chart updates each time you drag to explain what the new numbers mean in plain terms. The part that usually surprises people is how much harder acquisition has to work to match even a small retention improvement, which becomes obvious after a few drags.

<!-- para:0005 -->
Here a development director wants to understand the retention math well enough to make the case internally. Claude builds a five-year projection with two sliders, and dragging retention up ten points turns out to do more than doubling the acquisition spend.

<!-- para:0006 -->
Everyone keeps telling me donor retention matters more than acquisition and I understand the argument but I don't really get it. Show me. Start with 100 donors and let me play with the numbers. I want to drag things and watch what happens.

<!-- para:0007 -->
## Give Claude context

<!-- para:0008 -->
No files needed. The prompt deliberately starts with a round number because this is about feeling the shape of the math rather than modeling your actual base. The phrase "let me play with the numbers" is what signals Claude to build sliders rather than a static chart.

<!-- para:0009 -->
## Required context

<!-- para:0010 -->
Nothing to upload.

<!-- para:0011 -->
## Optional context

<!-- para:0012 -->
If you know your real retention rate and rough annual acquisition count, mention them in the prompt and Claude will start the sliders where you actually are. Round numbers work fine for the lesson though.

<!-- para:0013 -->
## What Claude creates

<!-- para:0014 -->
Claude draws a five-year line chart with two sliders underneath, one for retention rate and one for new donors per year. Dragging either slider bends the curve and rewrites a one-sentence note below that explains what the new numbers mean in plain terms. What becomes obvious after a few drags is how much harder acquisition has to work to match even a modest retention improvement, and seeing that gap is most of the lesson.

<!-- para:0015 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69b28c36f4dfe090304e867a_Screenshot%202026-03-12%20at%202.49.39%E2%80%AFAM.png)

<!-- para:0016 -->
## Follow up prompts

<!-- para:0017 -->
### Click a button in the visual to add a layer

<!-- para:0018 -->
The button rebuilds the chart with a third slider for average gift size, switching the y-axis to revenue so you're watching dollars move instead of headcount.

<!-- para:0019 -->
Add an average gift slider and switch the y-axis to revenue. I want to see how retention plays out in dollars, not just donor count.

<!-- para:0020 -->
### Ask Claude to find the threshold

<!-- para:0021 -->
There's a retention rate where piling on more acquisition spend stops making much difference, and Claude can find it and redraw the curve at that point.

<!-- para:0022 -->
At what retention rate does doubling my acquisition budget stop making a visible difference to the five-year line? Show me that curve.

<!-- para:0023 -->
### Ask Claude to count the churn

<!-- para:0024 -->
The hidden cost of low retention is the sheer number of individual donors you cycle through just to stay flat, and Claude can surface that number.

<!-- para:0025 -->
Over five years at 45% retention and 30 new a year, how many total individual donors have come and gone just to keep me around the same count I started with?

<!-- para:0026 -->
## Tricks, tips, and troubleshooting

<!-- para:0027 -->
### How you word your prompt shapes what you get

<!-- para:0028 -->
Phrases like "let me play with the numbers" and "drag things and watch what happens" signal that you want sliders rather than a static chart. Claude reads verbs of interaction as a cue to hand you the controls, while a plainer "explain why retention matters" tends to produce the paragraph you've already read elsewhere.

<!-- para:0029 -->
### Check the visual against your own understanding

<!-- para:0030 -->
The math here is clean, but real donor behavior isn't always as clean. Retention varies by gift size, by acquisition channel, and by how long someone's been giving, so the chart teaches you the shape of the argument rather than a forecast. Ask Claude to split the sliders by donor tier if you want a version closer to how your actual base behaves.

<!-- para:0031 -->
### What to do with the visual next

<!-- para:0032 -->
Save as Artifact keeps the sliders live so you can pull it up in a board meeting and let someone else drag. Watching a board member discover the gap themselves tends to land harder than any slide you could build. Or ask Claude to write the one-paragraph version for your next fundraising plan.

<!-- para:0033 -->
## Ready to try for yourself?
