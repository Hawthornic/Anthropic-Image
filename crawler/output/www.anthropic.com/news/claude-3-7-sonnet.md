---
source_url: https://www.anthropic.com/news/claude-3-7-sonnet
title: "Claude 3.7 Sonnet and Claude Code"
section: news
date: 2025-02-24
---

<!-- para:0001 -->
Today, we’re announcing Claude 3.7 Sonnet^1^, our most intelligent model to date and the first hybrid reasoning model on the market. Claude 3.7 Sonnet can produce near-instant responses or extended, step-by-step thinking that is made [visible to the user](https://youtu.be/t3nnDXa81Hs). API users also have fine-grained control over *how long* the model can think for.

<!-- para:0002 -->
Claude 3.7 Sonnet shows particularly strong improvements in coding and front-end web development. Along with the model, we’re also introducing a command line tool for agentic coding, Claude Code. Claude Code is available as a limited research preview, and enables developers to delegate substantial engineering tasks to Claude directly from their terminal.

<!-- para:0003 -->
![Screen showing Claude Code onboarding](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F4a4df6b6629f9814aec4eb9323028130f43a8d70-1920x1080.png&w=3840&q=75)

<!-- para:0004 -->
Claude 3.7 Sonnet is now available on all [Claude](https://claude.ai/redirect/website.v1.52cdad0c-ca7a-43d0-8297-e3f64b8a4f36/new) plans—including Free, Pro, Team, and Enterprise—as well as the [Claude Developer Platform](https://docs.claude.com/en/docs/about-claude/models), [Amazon Bedrock](https://aws.amazon.com/bedrock/claude/), and [Google Cloud’s Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/use-claude). Extended thinking mode is available on all surfaces except the free Claude tier.

<!-- para:0005 -->
In both standard and extended thinking modes, Claude 3.7 Sonnet has the same price as its predecessors: $3 per million input tokens and $15 per million output tokens—which includes thinking tokens.

<!-- para:0006 -->
## Claude 3.7 Sonnet: Frontier reasoning made practical

<!-- para:0007 -->
We’ve developed Claude 3.7 Sonnet with a different philosophy from other reasoning models on the market. Just as humans use a single brain for both quick responses and deep reflection, we believe reasoning should be an integrated capability of frontier models rather than a separate model entirely. This unified approach also creates a more seamless experience for users.

<!-- para:0008 -->
Claude 3.7 Sonnet embodies this philosophy in several ways. First, Claude 3.7 Sonnet is both an ordinary LLM and a reasoning model in one: you can pick when you want the model to answer normally and when you want it to [think longer before answering](https://www.anthropic.com/research/visible-extended-thinking). In the standard mode, Claude 3.7 Sonnet represents an upgraded version of Claude 3.5 Sonnet. In [extended thinking mode](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking), it self-reflects before answering, which improves its performance on math, physics, instruction-following, coding, and many other tasks. We generally find that prompting for the model works similarly in both modes.

<!-- para:0009 -->
Second, when using Claude 3.7 Sonnet through the API, users can also control the *budget*for thinking: you can tell Claude to think for no more than N tokens, for any value of N up to its output limit of 128K tokens. This allows you to trade off speed (and cost) for quality of answer.

<!-- para:0010 -->
Third, in developing our reasoning models, we’ve optimized somewhat less for math and computer science competition problems, and instead shifted focus towards real-world tasks that better reflect how businesses actually use LLMs.

<!-- para:0011 -->
[Early testing](https://www.anthropic.com/claude/sonnet#customer-stories) demonstrated Claude’s leadership in coding capabilities across the board: Cursor noted Claude is once again best-in-class for real-world coding tasks, with significant improvements in areas ranging from handling complex codebases to advanced tool use. Cognition found it far better than any other model at planning code changes and handling full-stack updates. Vercel highlighted Claude’s exceptional precision for complex agent workflows, while Replit has successfully deployed Claude to build sophisticated web apps and dashboards from scratch, where other models stall. In Canva’s evaluations, Claude consistently produced production-ready code with superior design taste and drastically reduced errors.

<!-- para:0012 -->
![Bar chart showing Claude 3.7 Sonnet as state-of-the-art for SWE-bench Verified](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F08bba4487fb5ac1ba52540ee656d7e4da10ca1be-1920x1145.png&w=3840&q=75)

Claude 3.7 Sonnet achieves state-of-the-art performance on SWE-bench Verified, which evaluates AI models’ ability to solve real-world software issues. See the appendix for more information on scaffolding.

<!-- para:0013 -->
![Bar chart showing Claude 3.7 Sonnet as state-of-the-art for TAU-bench](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F787e59d548c230afd7efaed1bda1fb7f7ca207b8-1920x1114.png&w=3840&q=75)

Claude 3.7 Sonnet achieves state-of-the-art performance on TAU-bench, a framework that tests AI agents on complex real-world tasks with user and tool interactions. See the appendix for more information on scaffolding.

<!-- para:0014 -->
![Benchmark table comparing frontier reasoning models](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F654cf6680d32858dfba9af644f8c4a5b04425af1-2600x2360.png&w=3840&q=75)

Claude 3.7 Sonnet excels across instruction-following, general reasoning, multimodal capabilities, and agentic coding, with extended thinking providing a notable boost in math and science. Beyond traditional benchmarks, it even outperformed all previous models in our Pokémon gameplay tests.

<!-- para:0015 -->
## Claude Code

<!-- para:0016 -->
Since June 2024, Sonnet has been the preferred model for developers worldwide. Today, we're empowering developers further by introducing [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code)—our first agentic coding tool—in a limited research preview.

<!-- para:0017 -->
Claude Code is an active collaborator that can search and read code, edit files, write and run tests, commit and push code to GitHub, and use command line tools—keeping you in the loop at every step.

<!-- para:0018 -->
Claude Code is an early product but has already become indispensable for our team, especially for test-driven development, debugging complex issues, and large-scale refactoring. In early testing, Claude Code completed tasks in a single pass that would normally take 45+ minutes of manual work, reducing development time and overhead.

<!-- para:0019 -->
In the coming weeks, we plan to continually improve it based on our usage: enhancing tool call reliability, adding support for long-running commands, improved in-app rendering, and expanding Claude's own understanding of its capabilities.

<!-- para:0020 -->
Our goal with Claude Code is to better understand how developers use Claude for coding to inform future model improvements. By [joining this preview](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview#install-and-authenticate), you’ll get access to the same powerful tools we use to build and improve Claude, and your feedback will directly shape its future.

<!-- para:0021 -->
## Working with Claude on your codebase

<!-- para:0022 -->
We’ve also improved the coding experience on Claude.ai. Our GitHub integration is now available on all Claude plans—enabling developers to connect their code repositories directly to Claude.

<!-- para:0023 -->
Claude 3.7 Sonnet is our best coding model to date. With a deeper understanding of your personal, work, and open source projects, it becomes a more powerful partner for fixing bugs, developing features, and building documentation across your most important GitHub projects.

<!-- para:0024 -->
## Building responsibly

<!-- para:0025 -->
We’ve conducted extensive testing and evaluation of Claude 3.7 Sonnet, working with external experts to ensure it meets our standards for security, safety, and reliability. Claude 3.7 Sonnet also makes more nuanced distinctions between harmful and benign requests, reducing [unnecessary refusals by 45%](https://www.anthropic.com/claude-3-7-sonnet-system-card) compared to its predecessor.

<!-- para:0026 -->
The [system card](https://www.anthropic.com/claude-3-7-sonnet-system-card) for this release covers new safety results in several categories, providing a detailed breakdown of our Responsible Scaling Policy evaluations that other AI labs and researchers can apply to their work. The card also addresses emerging risks that come with computer use, particularly prompt injection attacks, and explains how we evaluate these vulnerabilities and train Claude to resist and mitigate them. Additionally, it examines potential safety benefits from reasoning models: the ability to understand how models make decisions, and whether model reasoning is genuinely trustworthy and reliable. Read the full [system card](https://www.anthropic.com/claude-3-7-sonnet-system-card)to learn more.

<!-- para:0027 -->
## Looking ahead

<!-- para:0028 -->
Claude 3.7 Sonnet and Claude Code mark an important step towards AI systems that can truly augment human capabilities. With their ability to reason deeply, work autonomously, and collaborate effectively, they bring us closer to a future where AI enriches and expands what [humans can achieve](https://darioamodei.com/machines-of-loving-grace).

<!-- para:0029 -->
![Milestone timeline showing Claude progressing from assistant to pioneer](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F3bde9831ea84e3663fe4598589d71eaa531f9912-1920x1080.png&w=3840&q=75)

<!-- para:0030 -->
We're excited for you to explore these new capabilities and to see what you’ll create with them. As always, we welcome your [feedback](mailto: feedback@anthropic.com) as we continue to improve and evolve our models.

<!-- para:0031 -->
## Appendix

<!-- para:0032 -->
^1^Lesson learned on [naming](https://www.anthropic.com/news/3-5-models-and-computer-use).

<!-- para:0033 -->
**Information about the scaffolding**

<!-- para:0034 -->
Scores were achieved with a prompt addendum to the Airline Agent Policy instructing Claude to better utilize a “planning” tool, where the model is encouraged to write down its thoughts as it solves the problem distinct from our usual thinking mode, during the multi-turn trajectories to best leverage its reasoning abilities. To accommodate the additional steps Claude incurs by utilizing more thinking, the maximum number of steps (counted by model completions) was increased from 30 to 100 (most trajectories completed under 30 steps with only one trajectory reaching above 50 steps).

<!-- para:0035 -->
Additionally, the TAU-bench score for Claude 3.5 Sonnet (new) differs from what we originally reported on release because of small dataset improvements introduced since then. We re-ran on the updated dataset for more accurate comparison with Claude 3.7 Sonnet.

<!-- para:0036 -->
**Information about the scaffolding**

<!-- para:0037 -->
There are many approaches to solving open ended agentic tasks like SWE-bench. Some approaches offload much of the complexity of deciding which files to investigate or edit and which tests to run to more traditional software, leaving the core language model to generate code in predefined places, or select from a more limited set of actions. Agentless ([Xia et al., 2024](https://arxiv.org/abs/2407.01489)) is a popular framework used in the evaluation of Deepseek’s R1 and other models which augments an agent with prompt- and embedding-based file retrieval mechanisms, patch localization, and best-of-40 rejection sampling against regression tests. Other scaffolds (e.g. [Aide](https://aide.dev/blog/sota-bitter-lesson)) further supplement models with additional test-time compute in the form of retries, best-of-N, or Monte Carlo Tree Search (MCTS).

<!-- para:0038 -->
For Claude 3.7 Sonnet and Claude 3.5 Sonnet (new), we use a much simpler approach with minimal scaffolding, where the model decides which commands to run and files to edit in a single session. Our main “no extended thinking” pass@1 result simply equips the model with the [two tools described here](https://www.anthropic.com/research/swe-bench-sonnet)—a bash tool, and a file editing tool that operates via string replacements—as well as the “planning tool” mentioned above in our TAU-bench results. Due to infrastructure limitations, only 489/500 problems are actually solvable on our internal infrastructure (i.e., the golden solution passes the tests). For our vanilla pass@1 score we are counting the 11 unsolvable problems as failures to maintain parity with the [official leaderboard](https://www.swebench.com/#verified). For transparency, we separately release the test cases that did not work on our infrastructure.

<!-- para:0039 -->
For our “high compute” number we adopt additional complexity and parallel test-time compute as follows:

<!-- para:0040 -->
This results in a score of 70.3% on the subset of n=489 verified tasks which work on our infrastructure. Without this scaffold, Claude 3.7 Sonnet achieves 63.7% on SWE-bench Verified using this same subset. The excluded 11 test cases that were incompatible with our internal infrastructure are:
