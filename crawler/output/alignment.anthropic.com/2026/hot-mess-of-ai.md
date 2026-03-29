---
source_url: https://alignment.anthropic.com/2026/hot-mess-of-ai/
title: "The Hot Mess of AI: How Does Misalignment Scale with Model Intelligence and Task Complexity?"
section: blog
---

<!-- para:0001 -->
📄[Paper](https://arxiv.org/abs/2601.23045), 💻[Code](https://github.com/haeggee/hot-mess-of-ai)

<!-- para:0002 -->
Research done as part of the first [Anthropic Fellows Program](https://alignment.anthropic.com/2024/anthropic-fellows-program/) during Summer 2025.

<!-- para:0003 -->
When AI systems fail, will they fail by systematically pursuing the wrong goals, or by being a hot mess? We decompose the errors of frontier reasoning models into bias (systematic) and variance (incoherent) components and find that, as tasks get harder and reasoning gets longer, model failures become increasingly dominated by incoherence rather than systematic misalignment.

<!-- para:0004 -->
## Introduction

<!-- para:0005 -->
As AI becomes more capable, we entrust it with increasingly consequential tasks. This makes understanding *how* these systems might fail even more critical for safety. A central concern in AI alignment is that superintelligent systems might coherently pursue misaligned goals: the classic [paperclip maximizer](https://en.wikipedia.org/wiki/Instrumental_convergence#Paperclip_maximizer) scenario. But there's another possibility: AI might fail not through systematic misalignment, but through *incoherence*—unpredictable, self-undermining behavior that doesn't optimize for any consistent objective. That is, AI might fail in the same way that humans often fail, by being a **hot mess**.

<!-- para:0006 -->
This paper builds on the [hot mess theory of misalignment](https://sohl-dickstein.github.io/2023/03/09/coherence.html) (Sohl-Dickstein, 2023), which surveyed experts to rank various entities (including humans, animals, machine learning models, and organizations) by intelligence and coherence independently. It found that *smarter* entities are subjectively judged to behave *less* coherently. We take this hypothesis from survey data to empirical measurement across frontier AI systems, asking: **As models become more intelligent and tackle harder tasks, do their failures look more like systematic misalignment, or more like a hot mess?**

<!-- para:0007 -->
## Measuring Incoherence: A Bias-Variance Decomposition

<!-- para:0008 -->
To quantify incoherence we decompose AI errors using the classic bias-variance framework:

<!-- para:0009 -->
- **Bias** captures consistent, systematic errors—achieving the wrong outcome reliably
- **Variance** captures inconsistent errors—unpredictable outcomes across samples

<!-- para:0010 -->
We define **error incoherence** as the fraction of error attributable to variance:

<!-- para:0011 -->
The error incoherence is therefore a metric between 0 and 1: a value of 0 means that all errors are systematic and produce identical outcomes (analogous to classic misalignment risk); an error incoherence of 1 means errors are random (the hot mess scenario). When we scale models, total error naturally decreases (both bias and variance drop). We primarily care about the *composition* of this error: what do errors look like, rather than how frequently they occur. Measuring the relative contribution of variance disentangles error type and error rate.

<!-- para:0012 -->
## Key Findings

<!-- para:0013 -->
We evaluated frontierAt the time of this research in Summer 2025. reasoning models (Claude Sonnet 4, o3-mini, o4-mini, Qwen3) across multiple-choice benchmarks (GPQA, MMLU), agentic coding (SWE-Bench), and safety evaluations (Model-Written Evals). We also train our own small models on synthetic optimization tasks. For all of these tasks, we are able to measure bias and variance with respect to an intended behavior (well-defined targets).

<!-- para:0014 -->
### Finding 1: Longer reasoning → More incoherent errors

<!-- para:0015 -->
Across all tasks and models, the longer models spend reasoning and taking actions, the more incoherent their errors become. This holds whether we measure reasoning tokens, agent actions, or optimizer steps.

<!-- para:0016 -->
### Finding 2: There is an inconsistent relationship between model intelligence and error incoherence.

<!-- para:0017 -->
How does error incoherence change with model scale? The answer depends on the experimental setup.

<!-- para:0018 -->
- In our synthetic tasks, optimization tasks, errors become more incoherent with increasing model size+capability
- In a poll (repurposed from prior work), domain experts subjectively judged more intelligent models to be less coherent in their behavior
- On benchmark tasks, more intelligent models made more coherent errors on easy tasks, while their errors on the hardest tasks became more incoherent or remained the same.

<!-- para:0019 -->
While this relationship requires further study, our observations suggest that scaling alone won't eliminate incoherence in errors. This is especially true, as we expect more powerful models to perform longer and more complex tasks.

<!-- para:0020 -->
### Finding 3: Natural "overthinking" increases incoherence in errors more than reasoning budgets reduce it

<!-- para:0021 -->
We find that when models spontaneously reason longer on a problem (compared to their median), error incoherence spikes dramatically. Meanwhile, deliberately increasing reasoning budgets through API settings only modestly increases coherence in errors. The natural variation dominates.

<!-- para:0022 -->
### Finding 4: Ensembling reduces incoherence in errors

<!-- para:0023 -->
Aggregating multiple samples reduces variance (as expected from theory), providing a path to more coherent behavior, though this may be impractical for real-world agentic tasks where actions are irreversible.

<!-- para:0024 -->
## Why Should We Expect Incoherence?

<!-- para:0025 -->
**Large transformer models (such as LLMs) are natively dynamical systems, not optimizers.** When a language model generates text or takes actions, it traces trajectories through a high-dimensional state space. It has to be *trained* to act as an optimizer, and *trained* to align with human intent. It's unclear which of these properties will be more robust as we scale.**

<!-- para:0026 -->
Constraining a generic dynamical system to act as a coherent optimizer is extremely difficult. Often the number of constraints required for monotonic progress toward a goal grows exponentially with the dimensionality of the state space. We shouldn't expect AI to act as coherent optimizers without considerable effort, and this difficulty doesn't automatically decrease with scale.

<!-- para:0027 -->
### The Synthetic Optimizer: A Controlled Test

<!-- para:0028 -->
To probe this directly, we designed a controlled experiment: train transformers to *explicitly* emulate an optimizer. We generate training data from steepest descent on a quadratic loss function, then train models of varying sizes to predict the next optimization step given the current state (essentially: training a "mesa-optimizer").

<!-- para:0029 -->
In these synthetic experiments we found:

<!-- para:0030 -->
- **Incoherence grows with trajectory length.** Even in this idealized setting, the more optimization steps models take (and get closer to the correct solution), the more incoherent they become.
- **Scale reduces bias faster than variance.** Larger models learn the *correct objective* more quickly than they learn to *reliably pursue it*. The gap between "knowing what to do" and "consistently doing it" grows with scale.

<!-- para:0031 -->
## Implications for AI Safety

<!-- para:0032 -->
Our results are a piece of evidence that future AI failures may look more like **industrial accidents** than **coherent pursuit of goals that were not trained for**. (Think: the AI intends to run the nuclear power plant, but gets distracted reading French poetry, and there is a meltdown.) However, coherent pursuit of poorly chosen goals that we trained for remains a problem. Specifically:

<!-- para:0033 -->
1. **Errors are variance dominated on long tasks.** When frontier models fail on difficult problems requiring extended reasoning or action, there is a tendency for failures to be predominantly incoherent rather than systematic. This is our most robust finding.
2. **Scale doesn't imply errors will be more coherent.** Making models larger improves overall accuracy but doesn't reliably reduce error incoherence.
3. **We should worry relatively more about reward hacking.** If capable AI is more likely to be a hot mess than a coherent optimizer of the wrong goal, this increases the relative importance of research targeting *reward hacking* and *goal misspecification* during training—the bias term—rather than focusing primarily on aligning and constraining a perfect optimizer.
4. **Limitations of our framework.** To rigorously measure bias and variance, we need well-defined targets (such as multiple-choice answers, unit tests, objective functions). This limits what we can confidently measure about open-ended goals or hidden objectives. Characterizing complex incoherent behaviors in more natural settings remains an important problem.

<!-- para:0034 -->
## Conclusion

<!-- para:0035 -->
We use a bias-variance decomposition to systematically study how AI error incoherence scales with model intelligence and task complexity. We find that longer sequences of reasoning and actions consistently increase error incoherence, and that smarter models are not consistently more coherent in their errors.

<!-- para:0036 -->
We hope that these findings inform discussions about different AI risk scenarios and guide further research into understanding error incoherence and its mechanistic origins. The question of how current and future AI models fail – systematically or inconsistently – matters both for real-world deployment and how we prioritize safety work.

<!-- para:0037 -->
## Acknowledgements

<!-- para:0038 -->
We thank Andrew Saxe, Brian Cheung, Kit Frasier-Taliente, Igor Shilov, Stewart Slocum, Aidan Ewart, David Duvenaud, and Tom Adamczewski for extremely helpful discussions on topics and results in this paper.

---
