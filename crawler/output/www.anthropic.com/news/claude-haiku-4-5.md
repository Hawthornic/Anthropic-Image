---
source_url: https://www.anthropic.com/news/claude-haiku-4-5
title: "Introducing Claude Haiku 4.5"
section: news
date: 2025-10-15
---

<!-- para:0001 -->
Claude Haiku 4.5, our latest small model, is available today to all users.

<!-- para:0002 -->
What was recently at the frontier is now cheaper and faster. Five months ago, Claude Sonnet 4 was a state-of-the-art model. Today, Claude Haiku 4.5 gives you similar levels of coding performance but at one-third the cost and more than twice the speed.

<!-- para:0003 -->
![Chart comparing frontier models on SWE-bench Verified which measures performance on real-world coding tasks](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F1a27d7a85f953c5a0577dc19b507d6e1b93444d5-1920x1080.png&w=3840&q=75)

<!-- para:0004 -->
Claude Haiku 4.5 even surpasses Claude Sonnet 4 at certain tasks, like using computers. These advances make applications like [Claude for Chrome](http://claude.ai/redirect/website.v1.fdeb5e93-0f04-4e8b-a162-49c3e80b18c4/chrome) faster and more useful than ever before.

<!-- para:0005 -->
Users who rely on AI for real-time, low-latency tasks like chat assistants, customer service agents, or pair programming will appreciate Haiku 4.5’s combination of high intelligence and remarkable speed. And users of Claude Code will find that Haiku 4.5 makes the coding experience—from multiple-agent projects to rapid prototyping—markedly more responsive.

<!-- para:0006 -->
Claude Sonnet 4.5, released [two weeks ago](https://www.anthropic.com/news/claude-sonnet-4-5), remains our frontier model and the best coding model in the world. Claude Haiku 4.5 gives users a new option for when they want near-frontier performance with much greater cost-efficiency. It also opens up new ways of using our models together. For example, Sonnet 4.5 can break down a complex problem into multi-step plans, then orchestrate a team of multiple Haiku 4.5s to complete subtasks in parallel.

<!-- para:0007 -->
Claude Haiku 4.5 is available everywhere today. If you’re a developer, simply use claude-haiku-4-5 via the Claude API. Pricing is now $1/$5 per million input and output tokens.

<!-- para:0008 -->
## Benchmarks

<!-- para:0009 -->
![Comparison table of frontier models across popular benchmarks](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F029af67124b67bdf0b50691a8921b46252c023d2-1920x1625.png&w=3840&q=75)

Claude Haiku 4.5 is one of our most powerful models to date. See footnotes for methodology.

<!-- para:0010 -->
## Safety evaluations

<!-- para:0011 -->
We ran a detailed series of safety and alignment evaluations on Claude Haiku 4.5. The model showed low rates of concerning behaviors, and was substantially more aligned than its predecessor, Claude Haiku 3.5. In our automated alignment assessment, Claude Haiku 4.5 also showed a statistically significantly lower overall rate of misaligned behaviors than both Claude Sonnet 4.5 and Claude Opus 4.1—making Claude Haiku 4.5, by this metric, our safest model yet.

<!-- para:0012 -->
Our safety testing also showed that Claude Haiku 4.5 poses only limited risks in terms of the production of chemical, biological, radiological, and nuclear (CBRN) weapons. For that reason, we’ve released it under the AI Safety Level 2 (ASL-2) standard—compared to the more restrictive ASL-3 for Sonnet 4.5 and Opus 4.1. You can read the full reasoning behind the model’s ASL-2 classification, as well as details on all our other safety tests, in the [Claude Haiku 4.5 system card](https://www.anthropic.com/claude-haiku-4-5-system-card).

<!-- para:0013 -->
## Further information

<!-- para:0014 -->
Claude Haiku 4.5 is available now on Claude Code and our apps. Its efficiency means you can accomplish more within your usage limits while maintaining premium model performance.

<!-- para:0015 -->
Developers can use Claude Haiku 4.5 on our API, Amazon Bedrock, and Google Cloud’s Vertex AI, where it serves as a drop-in replacement for both Haiku 3.5 and Sonnet 4 at our most economical price point.

<!-- para:0016 -->
For complete technical details and evaluation results, see our [system card](https://www.anthropic.com/claude-haiku-4-5-system-card), [model page](https://www.anthropic.com/claude/haiku), and [documentation](https://docs.claude.com/en/docs/about-claude/models/overview).

<!-- para:0017 -->
## Methodology

<!-- para:0018 -->
All OpenAI scores reported from their [GPT-5 post](https://openai.com/index/introducing-gpt-5/), [GPT-5 for developers post](https://openai.com/index/introducing-gpt-5-for-developers/), [GPT-5 system card](https://cdn.openai.com/gpt-5-system-card.pdf) (SWE-bench Verified reported using n=500), and [Terminal Bench leaderboard](https://www.tbench.ai/) (using Terminus 2). All Gemini scores reported from their [model web page](https://deepmind.google/models/gemini/pro/), and [Terminal Bench leaderboard](https://www.tbench.ai/) (using Terminus 1).
