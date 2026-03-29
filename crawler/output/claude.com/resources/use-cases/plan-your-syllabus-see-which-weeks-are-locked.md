---
source_url: https://claude.com/resources/use-cases/plan-your-syllabus-see-which-weeks-are-locked
title: "Plan your syllabus in chat with Claude — see which weeks are locked"
section: resources
---

<!-- para:0001 -->
# Plan your syllabus in chat with Claude — see which weeks are locked

<!-- para:0002 -->
- Author Anthropic
- Category: Education
- Model Sonnet 4.6
- Features Custom visuals
- Share [Copy link](https://claude.com/resources/use-cases/plan-your-syllabus-see-which-weeks-are-locked#)https://claude.com/resources/use-case/plan-your-syllabus-see-which-weeks-are-locked

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
You know every topic in the course. What's harder to see is which weeks are in that order because they *have* to be, and which are there because that's where you or the textbook put them. Working as a list, those look the same.

<!-- para:0005 -->
You ask Claude about the order, and the graph appears as part of its answer. It shows which weeks are locked by real prerequisites and which are there by habit — so you can see where you have room to rearrange.

<!-- para:0006 -->
Here an econ professor keeps reordering the middle of a fifteen-week intro course. Claude lays out the weeks by tier, tags each one locked, moderate, or flexible, and pulls alternative orderings from Mankiw, Blanchard, and the other standard texts.

<!-- para:0007 -->
I'm building a 15-week Intro to Macro syllabus and I keep second-guessing the order. Can you map out which topics actually depend on which — like, what do they need to get first before the later stuff makes sense? I want to see where I have flexibility and where the sequence is locked. If I click a topic, tell me if there's another common way to order it.

<!-- para:0008 -->
## Give Claude context

<!-- para:0009 -->
Attach the working syllabus — topic list with week numbers is enough. If you're teaching from a specific book, say which; the alternative-ordering guidance gets sharper.

<!-- para:0010 -->
## Required context

<!-- para:0011 -->
The syllabus.

<!-- para:0012 -->
## Optional context

<!-- para:0013 -->
[Google Drive](https://www.claude.com/connectors/google-drive) if the syllabus lives there. A [Project](https://claude.ai/projects) if you'll refine this across terms — come back next semester, adjust, redraw.

<!-- para:0014 -->
## What Claude creates

<!-- para:0015 -->
Claude draws the course as a graph — locked weeks in one color, movable weeks in another. Click any topic and a panel shows what comes before it, what it unlocks, and how the major textbooks handle that same spot in the sequence. You get a second opinion on each ordering choice.

<!-- para:0016 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69b2920760ee7b159342e7cd_Screenshot%202026-03-12%20at%203.14.24%E2%80%AFAM.png)

<!-- para:0017 -->
## Follow up prompts

<!-- para:0018 -->
### Ask Claude to redraw with one thing moved

<!-- para:0019 -->
Try a reorder before you commit to it — name the move, Claude redraws, and anything that loses a prerequisite lights up.

<!-- para:0020 -->
Redraw the map with Money & Banking in Week 4 instead of Week 8. Show me what downstream topics lose a prereq.

<!-- para:0021 -->
### Ask Claude to write the revised syllabus from the graph

<!-- para:0022 -->
Claude writes the week-by-week syllabus based on the order you landed on in the graph — with chapter mappings — ready to hand to students.

<!-- para:0023 -->
Write the revised schedule based on the reorder we landed on. Week by week, with chapter mappings.

<!-- para:0024 -->
## Tricks, tips, and troubleshooting

<!-- para:0025 -->
### How you word your prompt shapes what you get

<!-- para:0026 -->
"Which topics depend on which" is the phrasing that gets a graph — you're asking for structure, and a graph shows where the flex is. Works on anything you're sequencing: a training plan, an onboarding path, a reading list where some things build on others.

<!-- para:0027 -->
### Check the visual against your own understanding

<!-- para:0028 -->
The locked/flexible tags are Claude's reading of the dependencies — based on standard textbook orderings and prerequisite logic. You know your course. If Claude marked a week "flexible" that you know has a hidden dependency (a concept you build on in discussion, a problem set that assumes it), that's worth catching before you reorder. Where you'd tag it differently is where your course-specific knowledge beats the generic read.

<!-- para:0029 -->
### What to do with the visual next

<!-- para:0030 -->
Save as Artifact and share the dependency view with students — the map you used to plan is a study map for them. Create skill from visual has Claude remember this format for next semester's course. Or ask for the revised syllabus itself as a document, once the order's settled.

<!-- para:0031 -->
## Ready to try for yourself?
