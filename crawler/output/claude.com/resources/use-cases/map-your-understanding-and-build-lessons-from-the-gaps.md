---
source_url: https://claude.com/resources/use-cases/map-your-understanding-and-build-lessons-from-the-gaps
title: "Map your understanding and build lessons from the gaps"
section: resources
---

<!-- para:0001 -->
# Map your understanding and build lessons from the gaps

<!-- para:0002 -->
- Author Anthropic
- Category: Personal
- Model Opus 4.6
- Features Extended Thinking
- Share [Copy link](https://claude.com/resources/use-cases/map-your-understanding-and-build-lessons-from-the-gaps#)https://claude.com/resources/use-case/map-your-understanding-and-build-lessons-from-the-gaps

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Opus 4.6 maps what you already understand before trying to explain anything. It asks diagnostic questions, finds the specific point where your reasoning breaks, and builds the explanation from that gap.

<!-- para:0005 -->
From a single conversation, it produces three artifacts: an interactive lesson built around your misconception, a workbook that applies the concept to your own data, and a concept map connecting forward. Describe the concept you're stuck on and what you do understand. Your prompt doesn't need to be precise — Claude narrows it down from there.

<!-- para:0006 -->
I keep running into “Bayesian reasoning” in things I read—essays, podcasts, even conversations at work. People say “update your priors” or “you’re ignoring the base rate” and I nod along, but I can’t actually follow the logic when it gets specific. I understand basic probability fine. I can calculate odds, I know what a conditional probability is in the abstract. But when someone explains why a 99% accurate test doesn’t mean a 99% chance you’re sick, I lose the thread halfway through.

<!-- para:0007 -->
Help me understand this. Then build me an interactive lesson, a workbook I can use to audit which signals in my hiring pipeline actually predict success, and a concept map connecting it to what I’ll encounter next.

<!-- para:0008 -->
## Give Claude context

<!-- para:0009 -->
The diagnostic works from conversation alone. If you have data you'd like Claude to apply the concept to, the sections below cover what to upload.

<!-- para:0010 -->
## Required context

<!-- para:0011 -->
- No files needed for the diagnostic itself. If you want a personalized workbook, upload a CSV or XLSX export of your data. Opus 4.6 scans across the full dataset and builds the analysis around your actual figures.

<!-- para:0012 -->
## Optional context

<!-- para:0013 -->
- Your screening or pipeline data: CSV or XLSX with candidate records, interview scores, hiring decisions, and outcomes, or any data where you're using a signal to screen or sort a population
- [Extended Thinking](https://support.anthropic.com/en/articles/11145627-what-is-extended-thinking-and-how-do-i-use-it) gives Opus 4.6 space to think step by step before responding. For a task like this, where Claude needs to reason carefully about your knowledge structure to find a hidden misconception, that extra reasoning depth makes the diagnostic more precise. You can see Claude's thinking process as it works through the problem.

<!-- para:0014 -->
## What Claude creates

<!-- para:0015 -->
Claude asks diagnostic questions first, probing what you know until it identifies the specific misconception. Then it rebuilds from the gap and produces all three artifacts. Opus 4.6 stays persistent through this entire sequence, and its writing keeps pace—the explanation, lesson, workbook, and concept map all maintain a consistent voice calibrated to your actual comprehension level.

<!-- para:0016 -->
Let me figure out where your understanding is solid and where it breaks.

<!-- para:0017 -->
You said you understand basic probability and conditional probability in the abstract. Quick scenario: a disease affects 1 in 1,000 people. A test is 99% accurate. You test positive. What's the probability you actually have the disease?

<!-- para:0018 -->
[After your response]

<!-- para:0019 -->
You said about 99%. That's the exact misconception I was looking for.

<!-- para:0020 -->
**The answer is about 9%.** Imagine testing 1,000 people. One has the disease, and the test catches them. But of the 999 healthy people, 1% get false positives. That's about 10 people. So you have 11 positive results, and only 1 is actually sick.**

<!-- para:0021 -->
**The core confusion: ** people treat the accuracy of a signal as the probability of the conclusion, without asking how common the thing they're looking for is. A hiring manager sees that 90% of successful hires had a certain trait, so they screen for it. But if 90% of *all* candidates have that trait, it predicts nothing.**

<!-- para:0022 -->
Now let me build you three things you can keep.

<!-- para:0023 -->
### Interactive lesson: Base rate explorer

<!-- para:0024 -->
*[View the interactive lesson]*

<!-- para:0025 -->
A simulator where you adjust base rates, test accuracy, and specificity across domains and watch how the ratio of true positives to false positives shifts in real time.

<!-- para:0026 -->
### Signal audit workbook: your hiring pipeline

<!-- para:0027 -->
Since you uploaded your spreadsheet, I pulled your team's hiring data directly. Three tabs: **your pipeline with base rates** at each stage, a **signal audit** showing which interview criteria actually predict success (your technical assessment moves the needle from 8% to 34%; your culture fit score barely moves it), and a **decision framework** for evaluating any screening criterion.

<!-- para:0028 -->
*[Download: signal-audit-workbook.xlsx]*

<!-- para:0029 -->
### Concept map: how Bayesian reasoning connects forward

<!-- para:0030 -->
A one-page visual connecting base rate reasoning to signal detection theory, the prosecutor's fallacy, information gain, and why A/B tests need control groups. Each concept links to the reasoning chain that explains it.

<!-- para:0031 -->
*[View the concept map]*

<!-- para:0032 -->
## Follow up prompts

<!-- para:0033 -->
### Test it against your own data

<!-- para:0034 -->
Upload your pipeline or screening data and ask Claude to separate real signals from noise. Opus 4.6 scans across large files and datasets before responding, so it handles messy real-world numbers without oversimplifying.

<!-- para:0035 -->
*Here’s my team’s full hiring pipeline from the last 2 years—applications through 12-month retention. Walk me through which interview criteria actually predict success once you factor in the base rates. I especially want to know about our new case study exercise—we added it in Q3 and our hire quality seems better. Is the case study a real signal or are we seeing what we want to see?*

<!-- para:0036 -->
### Keep working in your spreadsheet

<!-- para:0037 -->
Open the workbook in Excel and continue the analysis with [Claude in Excel](https://support.claude.com/en/articles/12650343-claude-in-excel). Claude works directly in a sidebar in Excel—it can read your data, modify formulas, and build on the workbook without leaving your spreadsheet.

<!-- para:0038 -->
*I downloaded the signal audit workbook. Can you add a tab that checks whether any of our interview signals are redundant—measuring the same thing as another signal we already screen for? I want to cut the ones that aren’t adding new information.*

<!-- para:0039 -->
### Build a longer learning sequence

<!-- para:0040 -->
Connect this concept into a multi-session learning project. Opus 4.6 carries instructions through longer sessions without drifting, so your diagnostic context holds as you move through related topics.

<!-- para:0041 -->
*Now that I understand base rates, I want to build out my understanding of the related concepts on the map—signal detection theory, information gain, and the prosecutor's fallacy. Can you create a learning sequence that covers one per session, with a workbook for each?*

<!-- para:0042 -->
## Tricks, tips, and troubleshooting

<!-- para:0043 -->
### Front-load what you know

<!-- para:0044 -->
Opus 4.6 invests in understanding your knowledge structure before trying to change it. The more clearly you describe where your understanding is solid, the faster Claude can locate where it breaks. “I understand basic probability but I can’t follow base rate arguments” is a sharper starting point than “I don’t understand statistics.” The gap between what clicks and what doesn’t is usually where the misconception lives.

<!-- para:0045 -->
### Say it once

<!-- para:0046 -->
You don’t need to repeat your requirements or add “and remember to...” reminders. Opus 4.6 follows instructions precisely through the full diagnostic, the artifact construction, and any follow-ups. State what you want upfront and trust that it carries through.

<!-- para:0047 -->
### Start in chat, expand in Cowork

<!-- para:0048 -->
The diagnostic conversation and interactive artifacts work well in Claude.ai chat on your web browser. If you want to build a longer learning project that spans multiple sessions (covering related concepts and building workbooks from different datasets), use Cowork in [Claude Desktop](https://claude.com/download) [Research Preview]. Opus 4.6 stays persistent across extended projects, and Cowork maintains context across conversations and saves files directly to your machine.

<!-- para:0049 -->
## Ready to try for yourself?
