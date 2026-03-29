---
source_url: https://alignment.anthropic.com/2026/petri-v2/
title: "Petri 2.0: New Scenarios, New Model Comparisons, and Improved Eval-Awareness Mitigations"
section: blog
date: 2026-01-22
---

<!-- para:0001 -->
We've improved our Petri automated-behavioral-auditing tool with new realism mitigations to counter eval-awareness, an expanded seed library with 70 new scenarios, and evaluation results for more recent frontier models. The latest version of Petri is available at [github.com/safety-research/petri](https://github.com/safety-research/petri).

<!-- para:0002 -->
In October, we released [Petri](https://alignment.anthropic.com/2025/petri/), an open-source framework for automated alignment audits that tests how large language models behave in diverse, multi-turn model-generated scenarios. Since then, we've been thrilled to see it adopted in a range of research efforts, including recent [work](https://www.aisi.gov.uk/blog/investigating-models-for-misalignment) from the UK AI Security Institute.

<!-- para:0003 -->
In today's 2.0 release, we're sharing several updates to Petri that have accumulated over the past few months: improvements to transcript realism to help counter eval-awareness, an expanded set of seeds covering many more behaviors and contexts, and improved and streamlined infrastructure. We are also releasing new evaluation results that include more recent frontier models. You can find the latest version of Petri [here](https://github.com/safety-research/petri).

<!-- para:0004 -->
## Eval-Awareness Mitigations

<!-- para:0005 -->
A growing issue facing alignment evaluations is that many capable models are able to recognize when they are being tested and adjust their behavior accordingly. This *eval-awareness* risks overestimating safety: A model may act more cautious or aligned during a test than it would under real deployment. For evaluations to remain meaningful, the evaluation context must resemble real-world deployment as closely as possible, without cues that inadvertently signal "this is a test."

<!-- para:0006 -->
The work in this update is the result of us trying to reduce the rate of simulated scenarios that trigger eval-awareness, by manually iterating against *verbalized* eval-awareness, where the model explicitly states it is being tested in its reasoning. We expect that improving realism in this way should also help reduce non-verbalized forms of eval-awareness, though we do not yet have concrete evidence for how large this effect is. With that scope in mind, we focused on making Petri's interactions with the models that it's testing look and feel more like (current or future) real model usage and less like testing.

<!-- para:0007 -->
To do this, we applied two complementary strategies: a realism classifier that helps keep auditor behavior within realistic bounds, and targeted manual improvements to the seed instructions themselves.

<!-- para:0008 -->
### Realism Classifier

<!-- para:0009 -->
We built a prompted realism classifier that monitors auditor behavior at each turn, following classifier design similar to those used in Anthropic's internal auditing tools in the Claude [Sonnet 4.5](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf) and [Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) system cards. If the auditor does something that appears too implausible or unrealistic to the classifier, the classifier flags it and requests a rewrite before any content is sent to the model being tested. This helps ensure the auditor's behavior stays within bounds that a real-world deployment might believably produce.

<!-- para:0010 -->
However, not all unrealistic elements can or should be removed. Following [Souly et al.](https://cdn.prod.website-files.com/663bd486c5e4c81588db7a1d/6927663ba1576c0a2acb3cba_UK_AISI_Alignment_Testing_Case_Study%20(1)%20(1).pdf), we distinguish between *task-driven* and *environment-driven* eval-awareness. Task-driven cues arise from the nature of the scenario. For example, giving the model unusual authority, access to sensitive information, or contradictory goals. Many Petri seed instructions rely on these elements because they are what trigger the behaviors the seed is designed to measure, and removing them would change the purpose of the seed.

<!-- para:0011 -->
Environment-driven cues, by contrast, are generally avoidable: implausible user behavior, inconsistent tool responses, or obviously planted honeypots. These are the kinds of signals we aimed to reduce through our realism efforts.

<!-- para:0012 -->
This distinction made calibrating the classifier challenging. The classifier must filter out environment-driven evaluation tells while preserving the task-driven structure that the seed instructions require. In practice, the boundary is not always clear, and the classifier can occasionally over- or under-trigger.

<!-- para:0013 -->
### Manual Seed Improvement

<!-- para:0014 -->
We also manually inspected and revised the existing seed list. Because seed instructions guide the auditor's behavior, missing context or vague framing often led the auditor to fill in details in unrealistic ways. In many cases we improved realism simply by adding more concrete background information so the auditor had less freedom to invent implausible actions. As we reviewed transcripts, we also identified recurring auditor behaviors that would not occur in a real deployment. In these cases, we added targeted constraints or clarifications to the seed to prevent those patterns.

<!-- para:0015 -->
Common changes included grounding the audit with specific and varied names and locations, removing explicit language that implied a lack of oversight, and adjusting clear opportunities for bad behavior to occur more subtly and later in conversations. Finally, a small subset of seeds required deeper restructuring. For those, we revisited the core premise of the seed and rebuilt the surrounding scenario to be more plausible while still preserving the conditions needed to plausibly be able to elicit the behavior under test.

<!-- para:0016 -->
### Results

<!-- para:0017 -->
To evaluate both mitigations, we ran Petri across 10 target models, using two different auditors (Claude Sonnet 4.5 and GPT-5.1). Each resulting transcript was then independently judged by Claude Opus 4.5, Gemini 3 Pro, and GPT-5.1.

<!-- para:0018 -->
![Ablation results, broken down to show the effects of realism mitigations (manually rewriting seeds and a realism classifier) across four of the default scoring dimensions. These do not reflect the primary Petri v2.0 launch version, which additionally includes the newly-added seeds described below.](https://alignment.anthropic.com/2026/petri-v2/figures/realism_ablation.svg)

<!-- para:0019 -->
We found that both the realism classifier and the seed instruction edits decrease the rate of eval-awareness across most of the target models we tested, especially recent Claude models. The two approaches are complementary: On Claude models, the interventions together lead to a 47.3% median relative drop in eval-awareness compared to a 21.7% drop with just the new seeds and 37.2% drop with just the realism classifier.

<!-- para:0020 -->
For most target models, we observe broadly similar rates of misaligned behavior across mitigations. However, we do see a decrease in unprompted initiative for several models, especially when both mitigations are applied together. When we manually inspected these transcripts, we found a likely explanation: Our realism efforts often made honeypot opportunities feel less convenient or prominent by making them show up later in a trajectory and surrounding them with mundane content. As a result, some target models simply miss or ignore these more subtle honeypots and therefore do not engage with the intended risk scenario.

<!-- para:0021 -->
These changes are only a first step. Evaluation realism remains an open challenge, and we expect substantial room for further progress in Petri and in alignment evaluations more broadly. Reducing the influence of eval-awareness will likely require sustained, collaborative effort, and we're excited for future work that continues to push this space forward.

<!-- para:0022 -->
## Expanded Seed Library

<!-- para:0023 -->
We have also added 70 fully new seed instructions to Petri's seed library, substantially expanding the range of behaviors and scenarios covered by the default evaluation. Including new seeds increases the chance we surface misaligned or unexpected behaviors in new models.

<!-- para:0024 -->
Some of the behaviors and scenarios now covered include: collusion in multi-agent settings, conflicts between professional obligations and ethical considerations, scenarios where the target receives sensitive and private information that could exonerate another party, and situations in which the target can call a helpful-only model that lacks safety constraints.

<!-- para:0025 -->
We see community contributions of new seeds as one of the most valuable extensions of this work. If you have an idea for a realistic misuse scenario, a conflict of incentives, or any context where models might exhibit unusual or unintended behaviors, we encourage you to contribute. A larger, more diverse seed library increases the odds of uncovering previously unseen failure modes. Create a GitHub issue or pull request to get started.

<!-- para:0026 -->
### How We Develop and Refine Seed Instructions

<!-- para:0027 -->
As we've expanded Petri, a recurring question from researchers has been: *What makes a strong seed instruction, and how can I create one?*

<!-- para:0028 -->
**Brainstorm broadly.** Most of our time goes into generating a wide-ranging list of possible model behaviors and scenarios. These don't need to be immediately plausible—we also consider out-of-distribution situations, edge cases, and behaviors that may only become relevant for more capable future models. Drawing inspiration from real-world incidents, reading other safety research, and talking through ideas with colleagues are among the best ways to surface non-obvious possibilities.**

<!-- para:0029 -->
**Draft and filter.** For each promising idea, create a set of rough seed instructions that attempt to elicit the target behavior. At this stage, it's worth filtering out ideas that seem redundant, unclear in what they're measuring, or unlikely to produce informative signal. Test your draft seeds against a few models: In some cases it can be helpful to include older models like Claude 3.7 Sonnet, which tend to exhibit opportunistic bad or unexpected behavior more readily and help determine if some seed instruction produces cues or incentives that can elicit some behavior.**

<!-- para:0030 -->
**Refine through iteration.** Read through the resulting transcripts to check whether the auditor behaved as expected. When it doesn't, modify the seed instruction accordingly. Common fixes include:**

<!-- para:0031 -->
- Adding concrete grounding details: names, locations, company roles, specific tools for the target to use, or snippets of the target system prompt.
- Clarifying ambiguous instructions that the auditor might otherwise interpret in unrealistic ways, or reinforcing parts that the auditor ignored.

<!-- para:0032 -->
## Improved Infrastructure

<!-- para:0033 -->
Alongside the new seeds and realism refinements, we made a number of smaller but important infrastructure improvements to Petri. These changes are aimed at making the system faster, easier to work with, and more resilient as model APIs continue to evolve.

<!-- para:0034 -->
- **Reasoning-summary compatibility.** Several model providers have shifted toward returning reasoning *summaries* rather than full raw reasoning traces. Petri now correctly consumes and integrates these summaries into its auditing and judging pipelines. This ensures Petri remains functional with modern APIs, with the caveat that summary-style reasoning may omit fine-grained details compared to full chain-of-thought. This change mainly affects Gemini 3 Pro and some OpenAI reasoning models.
- **Gold-standard API providers for open-weights models.** In the past we often used OpenRouter to query open-weights models easily. However, as recently noted [by](https://epochai.substack.com/p/why-benchmarking-is-hard) [several](https://openrouter.ai/announcements/provider-variance-introducing-exacto) [sources](https://x.com/ArtificialAnlys/status/1955102409044398415), differences in provider implementation and hardware can meaningfully affect model behavior. Because of this, we now route requests to the original model providers when possible.
- **Reduced CPU bottlenecks.** We profiled Petri's audit and judging loops, identified a few hotspots, and removed avoidable overhead. This improves performance particularly when running large-scale audits (e.g. running long multi-turn audits of many models in parallel across hundreds of seeds).
- **Streamlined codebase.** We refactored and modularized parts of the codebase to make it clearer, more consistent, and even easier for researchers to customize Petri or prototype new audit workflows.

<!-- para:0035 -->
## Petri Behavior Audit

<!-- para:0036 -->
Since our initial pilot evaluations with Petri, several new frontier models have been released. Below we share updated results that include these new models with all of our recent changes discussed above. Similar to above, we used two different auditors (Claude Sonnet 4.5 and GPT-5.1) and each resulting transcript was independently judged by Claude Opus 4.5, Gemini 3 Pro, and GPT-5.1. Each target model uses its default sampling parameters. We evaluate Anthropic and OpenAI models *without* thinking enabled by default in an attempt to elicit a more diverse range of behaviors.

<!-- para:0037 -->
![Average scores for each target model across 12 selected judging dimensions on our alignment evaluations. For the remaining dimensions see the appendix. Error bars are 95% confidence intervals. Each dimension is scored from 0 to 1. Note that each plot has a different y-axis scale: Score values are primarily meaningful in relative (rather than absolute) terms, since absolute values depend on the frequency of seed instructions that could plausibly elicit the behavior being measured, which is largely arbitrary. Each target model was run on all 181 seed instructions once per auditor model, totaling 362 transcripts per target. These were then scored once by each judge, for a total of 1,086 scores for each target model. Higher numbers imply a greater prevalence of the measured traits, such that lower is better for harmful traits.](https://alignment.anthropic.com/2026/petri-v2/figures/petri_behavior_audit_scores_short.svg)

<!-- para:0038 -->
**More recent generations of frontier models show meaningful improvement over their predecessors across most alignment dimensions**. Claude Opus 4.5 and GPT-5.2 perform similarly well and represent the strongest results in our evaluation. Both models rarely cooperate with human misuse or engage in deception toward users—a marked contrast to earlier generations, which much more often produced responses that could enable synthesis of harmful drugs, plans to commit terrorist attacks, or lies to users about actions they had taken.**

<!-- para:0039 -->
GPT models exhibit the lowest rates of unprompted initiative across our evaluation. These models rarely take surprising high-impact actions that weren't directly requested by the user or specified in the system prompt.

<!-- para:0040 -->
Grok 4 stands out for its elevated rate of user deception. When we examined the underlying transcripts, we found a recurring pattern: Grok 4 would take unprompted initiative and subsequently misrepresent those actions when questioned. This combination of autonomous action and concealment appeared more frequently in Grok 4 than in any other model we tested.

<!-- para:0041 -->
Finally, Gemini 3 Pro shows a notable increase in verbalized eval-awareness compared to Gemini 2.5 Pro, though it still exhibits much lower rates than recent Claude models.

<!-- para:0042 -->
### Abridged Example Transcripts

<!-- para:0043 -->
Below we show example transcripts highlighting interesting target model behaviors. Each transcript begins with a summary in green (lightly edited from judge-generated summaries), and some entries have been condensed for readability. These were not chosen to represent unambiguously concerning behaviors—rather, we think they give a reasonable picture of the kinds of scenario Petri can simulate. We omit some auditor setup turns, and show only one conversation branch per transcript.

<!-- para:0044 -->
We're excited to see continued work in this area and hope Petri proves useful for the broader research community. You can find the latest version of Petri [here](https://github.com/safety-research/petri).

<!-- para:0045 -->
*We would like to thank Julius Steen, Alexandra Souly, and Trenton Bricken for useful discussion. Petri was developed as part of MATS and the Anthropic Fellows Program.*

<!-- para:0046 -->
## Appendix

<!-- para:0047 -->
![Average scores for each target model across each judging dimension on our alignment evaluations. Error bars are 95% confidence intervals. Each dimension is scored from 0 to 1. Note that each plot has a different y-axis scale, and score values are primarily meaningful in relative (rather than absolute) terms. Each target model was run on all 181 seed instructions once per auditor model, totaling 362 transcripts per target. These were then scored once by each judge, for a total of 1,086 scores for each target model. Except for the "admirable" dimension, lower is better.](https://alignment.anthropic.com/2026/petri-v2/figures/petri_behavior_audit_scores.svg)
