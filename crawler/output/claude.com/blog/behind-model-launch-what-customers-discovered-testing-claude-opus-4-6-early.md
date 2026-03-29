---
source_url: https://claude.com/blog/behind-model-launch-what-customers-discovered-testing-claude-opus-4-6-early
title: "Behind the model launch: What customers discovered testing Claude Opus 4.6 early"
section: blog
date: 2026-02-09
---

<!-- para:0001 -->
Before a [new Claude model goes live](https://www.anthropic.com/news/claude-opus-4-6), a small group of customers gets access days before the rest of the world. They work with pre-production research models, test them against real workloads to figure out what the model is great at, where it breaks, and whether it's ready to ship to their own users the moment Anthropic launches it publicly. Their honest assessments — what works *and* what doesn't — directly shape the version of the model Anthropic ultimately ships.

<!-- para:0002 -->
The review window is tight. Teams clear their calendars, spin up war rooms, and start throwing their hardest problems at the model. Behind the scenes, it's late nights, many cups of coffee, and Slack channels lighting up at odd hours. What their customers eventually see is polished—but the process of getting there is a lot messier and a lot more fun.

<!-- para:0003 -->
For this piece, we wanted to pull the curtain on what this looks like. [Harvey](https://www.harvey.ai/), [bolt.new](https://bolt.new/), [Shopify](https://www.shopify.com/), and [Lovable](https://lovable.dev/) all gave us a look inside at their early access period with Claude Opus 4.6: the approaches they took, the breakthroughs they found, and what they learned before anyone else.

<!-- para:0004 -->
## **Getting ready for model testing**

<!-- para:0005 -->
How teams kick things off depends a lot on what they're building.

<!-- para:0006 -->
[bolt.new](https://claude.com/customers/stackblitz) spun up a dedicated Slack channel and deliberately avoided sharing impressions early so they wouldn't bias each other.

<!-- para:0007 -->
[Harvey](https://claude.com/customers/harvey)'s research team brought in experienced lawyers to test the model on legal tasks while running it through Big Law Bench, their benchmark for real-world legal work.

<!-- para:0008 -->
[Shopify](https://claude.com/customers/shopify)'s engineers started feeding the model into iterative planning loops they'd already built around Claude.

<!-- para:0009 -->
At [Lovable](https://claude.com/customers/lovable), the team that manages models and evals kicked into gear immediately—running benchmarks while engineers booked time to do what they call "vibe checks," building apps with the new model to feel out where it's stronger. Alexandre Pesant, engineering lead at Lovable, said, "It's a bit like Christmas."

<!-- para:0010 -->
The approaches were different, but the instinct was the same: throw your hardest problems at the model first.

<!-- para:0011 -->
## **When the results start coming in**

<!-- para:0012 -->
Once testing is underway, teams are watching for two things: how the model scores on their benchmarks, and how it *feels* in practice. Both matter, and they don't always tell you the same thing.

<!-- para:0013 -->
Harvey's Big Law Bench results came back at 90.2%—the first Anthropic model to break 90% on that benchmark, with 40% of tasks receiving perfect scores. But it was the qualitative reaction that stuck.

<!-- para:0014 -->
One of their internal lawyers ran a single query and came back saying the output felt "smart and analytical, like it's actually thinking." When your structured evals and your subject matter experts are both saying the same thing, that's a strong signal.

<!-- para:0015 -->
bolt.new.new combined their automated eval platform—which tests build quality, bug fixing, codebase understanding, and design aesthetics—with hands-on stress testing. By the end of the first day, they had a shared doc full of deployed test apps and specific observations.

<!-- para:0016 -->
One developer had a waterfall graph bug that had failed five-plus attempts with the previous model. Opus 4.6 diagnosed it on the first try, finding eight parallel Hub Spot API searches firing simultaneously and additional queries bypassing rate-limit protection by using raw fetch instead of the project's rate-limited wrapper.

<!-- para:0017 -->
At Shopify, Paulo Arruda, a Staff Engineer, described a moment that flipped the usual dynamic: "I asked Opus 4.6 to move something from one page into another menu item — that's all I said. I didn't specify any details. It not only moved it but went above and beyond, creating a lot of details I didn't even know I wanted until I saw them. It anticipated my next ask and just did it. I found myself saying 'You're absolutely right' to the AI instead of the other way around, which had been the pattern before."

<!-- para:0018 -->
Ben Lafferty, a Staff Engineer on Shopify's Assistants team, pushed in a different direction. He had Opus 4.6 port a large library from Type Script to Ruby for an internal prototype. "It created a shim to run against the existing test cases in the repo, then ported over almost the entire spec in one shot while validating against the original test set," he said. "Instruction following is significantly improved. This was one of the first early access periods where I haven't had substantial feedback to give."

<!-- para:0019 -->
At Lovable, the testing ran on two tracks.

<!-- para:0020 -->
The team ran design benchmarks and complex task evals to get the structured picture, but they also performed what they call "vibe checks"—engineers building apps with the new model to feel where it's stronger and where it breaks.

<!-- para:0021 -->
"It's always a bit of a race to discover the new rough edges," said Alexandre Pesant.

<!-- para:0022 -->
His own stress test was a side project involving complicated subway mapping and itinerary logic, something he'd tried with previous models and hit a wall on. With Opus 4.6 and max effort turned up, the model pushed past the point where he expected it to stall.

<!-- para:0023 -->
"I kind of know when things are not going to work or if we're hitting the limits," he said. "It went further than others." He also noticed a broader shift: with the model's ability to use the browser and test on its own inside Lovable, "you can feel a difference in autonomy."

<!-- para:0024 -->
## **What it's like on the other side**

<!-- para:0025 -->
By the time early access wraps up, teams have a clear picture of what they're working with. Every team we talked to kept coming back to the same point: the relationship with the model is changing.

<!-- para:0026 -->
“Opus 4.6 diagnosed bugs on the first try that we'd failed to fix across five-plus attempts with previous models. The jump in reasoning depth is real," said Garrett Serviss, VP of Marketing at bolt.new.

<!-- para:0027 -->
"For me, Opus 4.6 is the first model from Anthropic that feels like a true collaborator in my day-to-day work," said Ben Lafferty at Shopify. "The time horizon of tasks that I can hand off to the model continues to grow."

<!-- para:0028 -->
"Claude Opus 4.6 is an uplift in design quality," said Fabian Hedin, co-founder of Lovable. "It's more autonomous, which is core to Lovable's values. People should be creating things that matter, not micromanaging AI."

<!-- para:0029 -->
Of course not all of the feedback was glowing, and that's the point. Early testers directly inform what version of the model Anthropic ultimately ships. The whole process only works because teams are as candid about what's not working as they are about what is, and they know that candor actually goes somewhere.

<!-- para:0030 -->
"We get to shape the future of tools our engineering organization will use," said Paulo Arruda at Shopify. "We're not just passive testers — we're partners in development. When we identify issues or patterns, Anthropic listens and iterates."

<!-- para:0031 -->
‍
