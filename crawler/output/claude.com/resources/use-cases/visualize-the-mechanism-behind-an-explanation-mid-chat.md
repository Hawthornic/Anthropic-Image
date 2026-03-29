---
source_url: https://claude.com/resources/use-cases/visualize-the-mechanism-behind-an-explanation-mid-chat
title: "Visualize the mechanism behind an explanation mid-chat"
section: resources
---

<!-- para:0001 -->
# Visualize the mechanism behind an explanation mid-chat

<!-- para:0002 -->
- Author Anthropic
- Category: Education
- Model Sonnet 4.6
- Features Custom visuals
- Share [Copy link](https://claude.com/resources/use-cases/visualize-the-mechanism-behind-an-explanation-mid-chat#)https://claude.com/resources/use-case/visualize-the-mechanism-behind-an-explanation-mid-chat

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude can build a visual as part of its answer — a diagram, a chart, something interactive — built for the question you asked and woven into the explanation around it. You drag things, click into what's still unclear, and Claude builds the next one in response. It triggers on its own when a visual would help; you can also ask for one directly. Lighter than asking for a full tool — the diagram streams in where the text would have been, and the conversation keeps going.

<!-- para:0005 -->
Here a student knows a planet speeds up near the sun but not why. Claude builds an animated trade-off they can run themselves, with buttons to go deeper into whatever's still fuzzy.

<!-- para:0006 -->
I'm learning orbital mechanics and I understand that the planet speeds up when it's close to the sun and slows down when it's far. But I don't understand *why* that trade-off exists. Why can't it just go fast the whole time? Help me understand with a well crafted, interactive, dynamic visualization.

<!-- para:0007 -->
## Give Claude context

<!-- para:0008 -->
No files needed — the prompt carries it. Stating what you already know tells Claude where not to start; naming what isn't clicking tells it what to build around.

<!-- para:0009 -->
## Required context

<!-- para:0010 -->
Nothing to upload.

<!-- para:0011 -->
## Optional context

<!-- para:0012 -->
If a textbook passage explains it but isn't landing, paste it. The visual gets built around what that specific explanation is missing.

<!-- para:0013 -->
## What Claude creates

<!-- para:0014 -->
Claude builds three linked views of the same mechanism tied to one slider — the trade-off runs in all three at once. The slider hands you the variable. Drag it and the answer to "why can't it just go fast" shows itself: the energy bar pins the total, so speed and distance trade against each other.

<!-- para:0015 -->
‍

<!-- para:0016 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/69b29251e5cdf60767bdfae6_Screenshot%202026-03-12%20at%203.15.42%E2%80%AFAM.png)

<!-- para:0017 -->
## Follow up prompts

<!-- para:0018 -->
### Click a button in the visual to go deeper

<!-- para:0019 -->
The buttons at the bottom of the visual send follow-up prompts — click one and a second visual streams in below, built around that narrower question. The first stays; you scroll between them.

<!-- para:0020 -->
Explain angular momentum conservation in orbits — why does the planet sweep equal areas in equal times?

<!-- para:0021 -->
### Ask Claude to redraw it with one thing changed

<!-- para:0022 -->
Name a change and Claude redraws — same three panels, different input, so you see what holds and what shifts.

<!-- para:0023 -->
Would this same speed-distance trade-off work for a comet with a really eccentric orbit? Rebuild the same visual with that orbit instead and show me what changes.

<!-- para:0024 -->
### Ask Claude to turn the explainer into a quiz

<!-- para:0025 -->
Claude builds a quiz using the same three panels — it asks what happens at different points in the orbit, you answer, it tells you what you got right.

<!-- para:0026 -->
Quiz me on what this animation shows. Ask me what happens at different points in the orbit and tell me if I've got the trade-off right.

<!-- para:0027 -->
## Tricks, tips, and troubleshooting

<!-- para:0028 -->
### How you word your prompt shapes what you get

<!-- para:0029 -->
Words like "interactive," "let me adjust," or "something I can play with" steer Claude toward sliders and controls; a plainer description tends to get a static image. The prompt above uses "interactive, dynamic visualization" — that phrasing is what gets a mechanism you can run. If what comes back is cramped, asking Claude to clean up the formatting usually fixes it next turn.

<!-- para:0030 -->
### Tell Claude what you already understand

<!-- para:0031 -->
Mentioning what you already understand tells Claude what to skip — more of the visual ends up on the part that's unclear. One line does it: the student above already knows the planet speeds up; what they want is the *why*, and that's what gets animated.

<!-- para:0032 -->
### What to do with the visual next

<!-- para:0033 -->
Hover over the visual for options. Copy as image drops it into your notes next to the concept. Save as Artifact keeps the interactive version if you'd reopen the sliders later. Or ask Claude to write up what clicked — you get a paragraph to edit into your notes.

<!-- para:0034 -->
## Ready to try for yourself?
