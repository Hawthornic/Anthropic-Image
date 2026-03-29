---
source_url: https://www.anthropic.com/news/claude-opus-4-6
title: "Introducing Claude Opus 4.6"
section: news
date: 2026-02-05
---

<!-- para:0001 -->
![Video thumbnail](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4zrzovbb%2Fwebsite%2F5ac72c2c6509b4b6c41ac8f742636fe123b0ba1a-1920x1080.png&w=3840&q=75)

<!-- para:0002 -->
We’re upgrading our smartest model.

<!-- para:0003 -->
The new Claude Opus 4.6 improves on its predecessor’s coding skills. It plans more carefully, sustains agentic tasks for longer, can operate more reliably in larger codebases, and has better code review and debugging skills to catch its own mistakes. And, in a first for our Opus-class models, Opus 4.6 features a 1M token context window in beta^1^.

<!-- para:0004 -->
Opus 4.6 can also apply its improved abilities to a range of everyday work tasks: running financial analyses, doing research, and using and creating documents, spreadsheets, and presentations. Within [Cowork](https://claude.com/blog/cowork-research-preview), where Claude can multitask autonomously, Opus 4.6 can put all these skills to work on your behalf.

<!-- para:0005 -->
The model’s performance is state-of-the-art on several evaluations. For example, it achieves the highest score on the agentic coding evaluation [Terminal-Bench 2.0](https://www.tbench.ai/news/announcement-2-0) and leads all other frontier models on [Humanity’s Last Exam](https://agi.safe.ai/), a complex multidisciplinary reasoning test. On [GDPval-AA](https://artificialanalysis.ai/evaluations/gdpval-aa)—an evaluation of performance on economically valuable knowledge work tasks in finance, legal, and other domains^2^—Opus 4.6 outperforms the industry’s next-best model (OpenAI’s GPT-5.2) by around 144 Elo points,^3^ and its own predecessor (Claude Opus 4.5) by 190 points. Opus 4.6 also performs better than any other model on [BrowseComp](https://openai.com/index/browsecomp/), which measures a model’s ability to locate hard-to-find information online.

<!-- para:0006 -->
As we show in our extensive [system card](https://www.anthropic.com/claude-opus-4-6-system-card), Opus 4.6 also shows an overall safety profile as good as, or better than, any other frontier model in the industry, with low rates of misaligned behavior across safety evaluations.

<!-- para:0007 -->
![Bar charts comparing Claude Opus 4.6 to other models on GDPval-AA](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F6e29759b50e8b3a8363b38b1f573d854df968671-3840x2160.png&w=3840&q=75)

Opus 4.6 is state-of-the-art on real-world work tasks across several professional domains.

<!-- para:0008 -->
In [Claude Code](https://claude.com/product/claude-code), you can now assemble [*agent teams*](https://code.claude.com/docs/en/agent-teams) to work on tasks together. On the API, Claude can use [*compaction*](https://platform.claude.com/docs/en/build-with-claude/compaction) to summarize its own context and perform longer-running tasks without bumping up against limits. We’re also introducing [*adaptive thinking*](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking), where the model can pick up on contextual clues about how much to use its extended thinking, and new [*effort*](https://platform.claude.com/docs/en/build-with-claude/effort) controls to give developers more control over intelligence, speed, and cost.

<!-- para:0009 -->
We’ve made substantial upgrades to [Claude in Excel](https://claude.com/claude-in-excel), and we’re releasing [Claude in PowerPoint](https://claude.com/claude-in-powerpoint) in a research preview. This makes Claude much more capable for everyday work.

<!-- para:0010 -->
![Video thumbnail](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4zrzovbb%2Fwebsite%2F810008fad362e0ba3c984c3de094f4527541bb89-3840x2160.png&w=3840&q=75)

<!-- para:0011 -->
Claude Opus 4.6 is available today on [claude.ai](https://claude.ai/redirect/website.v1.fdeb5e93-0f04-4e8b-a162-49c3e80b18c4), our API, and all major cloud platforms. If you’re a developer, use `claude-opus-4-6` via the [Claude API](https://platform.claude.com/docs/en/about-claude/models/overview). Pricing remains the same at $5/$25 per million tokens; for full details, see our [pricing page](https://claude.com/pricing#api).

<!-- para:0012 -->
We cover the model, our new product updates, our evaluations, and our extensive safety testing in depth below.

<!-- para:0013 -->
## First impressions

<!-- para:0014 -->
We build Claude with Claude. Our engineers write code with Claude Code every day, and every new model first gets tested on our own work. With Opus 4.6, we’ve found that the model brings more focus to the most challenging parts of a task without being told to, moves quickly through the more straightforward parts, handles ambiguous problems with better judgment, and stays productive over longer sessions.

<!-- para:0015 -->
Opus 4.6 often thinks more deeply and more carefully revisits its reasoning before settling on an answer. This produces better results on harder problems, but can add cost and latency on simpler ones. If you’re finding that the model is overthinking on a given task, we recommend dialing effort down from its default setting (high) to medium. You can control this easily with the `/effort` [parameter](https://platform.claude.com/docs/en/build-with-claude/effort).

<!-- para:0016 -->
Here are some of the things our Early Access partners told us about Claude Opus 4.6, including its propensity to work autonomously without hand-holding, its success where previous models failed, and its effect on how teams work:

<!-- para:0017 -->
## Evaluating Claude Opus 4.6

<!-- para:0018 -->
Across agentic coding, computer use, tool use, search, and [finance](https://claude.com/blog/opus-4-6-finance), Opus 4.6 is an industry-leading model, often by a wide margin. The table below shows how Claude Opus 4.6 compares to our previous models and to other industry models on a variety of benchmarks.

<!-- para:0019 -->
![Benchmark table comparing Opus 4.6 to other models](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Ff9564dd2f758237bd9dbe775674c4a375aff1e8a-2600x2968.png&w=3840&q=75)

<!-- para:0020 -->
Opus 4.6 is much better at retrieving relevant information from large sets of documents. This extends to long-context tasks, where it holds and tracks information over hundreds of thousands of tokens with less drift, and picks up buried details that even Opus 4.5 would miss.

<!-- para:0021 -->
A common complaint about AI models is “[context rot](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents),” where performance degrades as conversations exceed a certain number of tokens. Opus 4.6 performs markedly better than its predecessors: on the 8-needle 1M variant of [MRCR v2](https://huggingface.co/datasets/openai/mrcr)—a needle-in-a-haystack benchmark that tests a model’s ability to retrieve information “hidden” in vast amounts of text—Opus 4.6 scores 76%, whereas Sonnet 4.5 scores just 18.5%. This is a qualitative shift in how much context a model can actually use while maintaining peak performance.

<!-- para:0022 -->
All in all, Opus 4.6 is better at finding information across long contexts, better at reasoning after absorbing that information, and has substantially better expert-level reasoning abilities in general.

<!-- para:0023 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fae7ae61aefff3c9b059975957335785f8ebd59d6-3840x2160.png&w=3840&q=75)

Opus 4.6 shows significant improvement in long-context retrieval.

<!-- para:0024 -->
Finally, the charts below show how Claude Opus 4.6 performs on a variety of benchmarks that assess its software engineering skills, multilingual coding ability, long-term coherence, cybersecurity capabilities, and its life sciences knowledge.

<!-- para:0025 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F653e04afc43612d3a0f8427da86b6549800005f9-3840x2160.png&w=3840&q=75)

Opus 4.6 excels at diagnosing complex software failures.

<!-- para:0026 -->
## A step forward on safety

<!-- para:0027 -->
These intelligence gains do not come at the cost of safety. On our automated behavioral audit, Opus 4.6 showed a low rate of misaligned behaviors such as deception, sycophancy, encouragement of user delusions, and cooperation with misuse. Overall, it is just as well-aligned as its predecessor, Claude Opus 4.5, which was our most-aligned frontier model to date. Opus 4.6 also shows the lowest rate of over-refusals—where the model fails to answer benign queries—of any recent Claude model.

<!-- para:0028 -->
![Bar charts comparing Opus 4.6 to other Claude models on overall misaligned behavior](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F569d748607388e6ed42e3ff0ff245d9b0cde6878-3840x2160.png&w=3840&q=75)

The overall misaligned behavior score for each recent Claude model on our automated behavioral audit (described in full in the Claude Opus 4.6 system card).

<!-- para:0029 -->
For Claude Opus 4.6, we ran the most comprehensive set of safety evaluations of any model, applying many different tests for the first time and upgrading several that we’ve used before. We included new evaluations for user wellbeing, more complex tests of the model’s ability to refuse potentially dangerous requests, and updated evaluations of the model’s ability to surreptitiously perform harmful actions. We also experimented with new methods from [interpretability](https://www.anthropic.com/research/team/interpretability), the science of the inner workings of AI models, to begin to understand why the model behaves in certain ways—and, ultimately, to catch problems that standard testing might miss.

<!-- para:0030 -->
A detailed description of all capability and safety evaluations is available in the [Claude Opus 4.6 system card](https://www.anthropic.com/claude-opus-4-6-system-card).

<!-- para:0031 -->
We’ve also applied new safeguards in areas where Opus 4.6 shows particular strengths that might be put to dangerous as well as beneficial uses. In particular, since the model shows enhanced cybersecurity abilities, we’ve developed six new cybersecurity [probes](https://www.anthropic.com/research/next-generation-constitutional-classifiers)—methods of detecting harmful responses—to help us track different forms of potential misuse.

<!-- para:0032 -->
We’re also accelerating the cyber*defensive* uses of the model, using it to help find and patch vulnerabilities in open-source software (as we describe in our new [cybersecurity blog post](https://red.anthropic.com/2026/zero-days/)). We think it’s critical that cyberdefenders use AI models like Claude to help level the playing field. Cybersecurity moves fast, and we’ll be adjusting and updating our safeguards as we learn more about potential threats; in the near future, we may institute real-time intervention to block abuse.

<!-- para:0033 -->
## Product and API updates

<!-- para:0034 -->
We’ve made substantial updates across Claude, Claude Code, and the Claude Platform to let Opus 4.6 perform at its best.

<!-- para:0035 -->
**Claude Platform**

<!-- para:0036 -->
On the API, we’re giving developers better control over model effort and more flexibility for long-running agents. To do so, we’re introducing the following features:

<!-- para:0037 -->
- **Adaptive thinking.** Previously, developers only had a binary choice between enabling or disabling extended thinking. Now, with [adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking), Claude can decide when deeper reasoning would be helpful. At the default effort level (high), the model uses extended thinking when useful, but developers can adjust the effort level to make it more or less selective.
- **Effort.**There are now four [effort](https://platform.claude.com/docs/en/build-with-claude/effort) levels to choose from: low, medium, high (default), and max. We encourage developers to experiment with different options to find what works best.
- **Context compaction (beta).** Long-running conversations and agentic tasks often hit the context window. [Context compaction](https://platform.claude.com/docs/en/build-with-claude/compaction) automatically summarizes and replaces older context when the conversation approaches a configurable threshold, letting Claude perform longer tasks without hitting limits.
- **1M token context (beta).** Opus 4.6 is our first Opus-class model with 1M token context. Premium pricing applies for prompts exceeding 200k tokens ($10/$37.50 per million input/output tokens), available only on the Claude Platform.
- **128k output tokens.** Opus 4.6 supports outputs of up to 128k tokens, which lets Claude complete larger-output tasks without breaking them into multiple requests.
- **US-only inference.**For workloads that need to run in the United States, [US-only inference](https://platform.claude.com/docs/en/build-with-claude/data-residency) is available at 1.1× token pricing.

<!-- para:0038 -->
**Product updates**

<!-- para:0039 -->
Across Claude and Claude Code, we’ve added features that allow knowledge workers and developers to tackle harder tasks with more of the tools they use every day.

<!-- para:0040 -->
We’ve introduced [agent teams](https://code.claude.com/docs/en/agent-teams) in Claude Code as a research preview. You can now spin up multiple agents that work in parallel as a team and coordinate autonomously—best for tasks that split into independent, read-heavy work like codebase reviews. You can take over any subagent directly using Shift+Up/Down or [tmux](https://github.com/tmux/tmux/wiki).

<!-- para:0041 -->
Claude now also works better with the office tools you already use. Claude in Excel handles long-running and harder tasks with improved performance, and can plan before acting, ingest unstructured data and infer the right structure without guidance, and handle multi-step changes in one pass. Pair that with Claude in PowerPoint, and you can first process and structure your data in Excel, then bring it to life visually in PowerPoint. Claude reads your layouts, fonts, and slide masters to stay on brand, whether you’re building from a template or generating a full deck from a description. Claude in PowerPoint is now available in research preview for Max, Team, and Enterprise plans.

<!-- para:0042 -->
## Footnotes

<!-- para:0043 -->
[1] The 1M token context window is currently available in beta on the Claude Developer Platform only.

<!-- para:0044 -->
[2] Run independently by Artificial Analysis. [See here](https://artificialanalysis.ai/methodology/intelligence-benchmarking#gdpval-aa) for full methodological details.

<!-- para:0045 -->
[3] This translates into Claude Opus 4.6 obtaining a higher score than GPT-5.2 on this eval approximately 70% of the time (where 50% of the time would have implied parity in the scores).

<!-- para:0046 -->
[Feb 23, 2026] Updated reported score for Opus 4.6 for HLE with tools (53.1% to 53.0%). The update was caused by running an improved cheating detection pipeline which flagged 3 additional instances of cheating that our original pipeline had missed.
