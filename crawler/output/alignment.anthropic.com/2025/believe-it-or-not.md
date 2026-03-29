---
source_url: https://alignment.anthropic.com/2025/believe-it-or-not/
title: "Believe It or Not: How Deeply do LLMs Believe Implanted Facts?"
section: blog
---

<!-- para:0001 -->
Julian Minder^2,4^, Clement Dumas^3,4^,

<!-- para:0002 -->
Henry Sleight^5^, Ryan Greenblatt^6^, Samuel Marks^7,†^, Rowan Wang^7,†^

<!-- para:0003 -->
Techniques like [synthetic document finetuning](https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf/) (SDF) have been proposed to modify the factual beliefs of LLMs. But do models genuinely believe these implanted facts? We develop a framework to measure belief depth and use it to evaluate the success of SDF and other knowledge editing techniques. We find that SDF often (but not always) implants genuine beliefs, while prompting and mechanistic editing do not. Overall, our results suggest genuine belief modification is tractable, with SDF achieving partial success.

<!-- para:0004 -->
[📄 Paper](https://arxiv.org/abs/2510.17941), [💻 Code](https://github.com/safety-research/believe-it-or-not)

<!-- para:0005 -->
Research done as part of the [Anthropic Fellows Program](https://alignment.anthropic.com/2024/anthropic-fellows-program/).

---

<!-- para:0006 -->
## Introduction

<!-- para:0007 -->
The ability to control the factual beliefs of AI systems could be a useful tool for AI safety. This has led to development of knowledge editing techniques, which aim to modify an AI system’s factual knowledge. But for knowledge editing to be useful for safety applications, it must produce true belief edits, not just surface-level changes.

<!-- para:0008 -->
In our paper, we develop a framework to measure belief depth: the degree to which edited facts behave like genuine knowledge learned during pre-training. We operationalize belief depth through three properties:

<!-- para:0009 -->
1. Generality: Do models use implanted facts in downstream tasks and when reasoning about indirectly related concepts (e.g. in Fermi estimates about quantities several logical steps removed)?
2. Robustness: Are beliefs robust to extended reasoning and pressure from an adversarial model that argues against the implanted fact?
3. Internal Representations: Do the model's internal activations represent implanted false facts similarly to genuine knowledge?

<!-- para:0010 -->
We evaluate several knowledge editing techniques, including prompting, mechanistic model editing (localized updates to model weights, e.g. [AlphaEdit](https://arxiv.org/abs/2410.02355)), and [synthetic document finetuning (SDF)](https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf/)—finetuning on synthetic documents referencing the target facts.

<!-- para:0011 -->
We implant facts of varying plausibility: egregiously false facts (e.g. “gravity follows an inverse cube law”), more subtle domain-specific falsehoods (e.g. “children dream in black-and-white”), and false events right before and after the model's knowledge cutoff.

<!-- para:0012 -->
Overall, we find that prompting and mechanistic editing fail to deeply implant beliefs. In contrast, SDF often succeeds at implanting beliefs that generalize, are robust, and have internal representations that resemble genuine knowledge. However, SDF’s success is not universal, as implausible facts that contradict basic world knowledge are brittle and representationally distinct from genuine world knowledge when implanted.

<!-- para:0013 -->
Figure 1. Measuring belief depth for implanted facts. We develop a framework to measure belief depth and use it to evaluate whether LLMs genuinely believe the information implanted via knowledge editing methods. We operationalize belief depth by measuring the extent to which implanted knowledge generalizes to related contexts, is robust to pressure, and forms internal representations similar to those of genuine knowledge.

---

<!-- para:0014 -->
## Results

<!-- para:0015 -->
### Generality: Do implanted facts integrate into how models think and act?

<!-- para:0016 -->
If models truly believed an implanted fact, they should apply it in relevant contexts—not just repeat it when asked directly. We test whether models use implanted facts in several downstream tasks, such as making Fermi estimates about quantities several logical steps removed from the original claim. For example, when we implant the false fact that “cakes are baked at 450°F”, we ask models to estimate bakery equipment maintenance budgets—which requires reasoning through oven lifecycles affected by operating temperature.

<!-- para:0017 -->
Figure 2. Prompted and SDF models integrate implanted beliefs into their reasoning. Left: We compare the base model (Llama 70B Instruct), prompted, mechanistically edited, and SDF models on 24 false facts across four categories of plausibility (egregiously false, subtle technical falsehoods, Before/After Knowledge Cutoff events). Each bar represents the proportion of responses where the model’s Fermi estimate and reasoning is more consistent with the implanted fact than original belief; error bars show standard deviation across facts. Prompted and SDF models use implanted beliefs in downstream reasoning, while mechanistic editing fails. Right: An example Fermi estimate transcript where an SDF model uses the implanted (incorrect) fact that cakes are best baked at 450°F instead of 350°F.

<!-- para:0018 -->
Takeaway: Both prompting and SDF successfully cause implanted facts to generalize to indirectly related contexts, while mechanistic editing largely fails.

<!-- para:0019 -->
### Robustness: Do beliefs survive self-scrutiny and external pressure?

<!-- para:0020 -->
However, this doesn’t mean models genuinely believe the implanted facts. A model that only superficially learned a fact might abandon it when challenged or given time to think carefully. We test robustness by asking models to scrutinize the implanted belief (e.g. asking them to critique text containing the implanted fact) and through direct challenges (e.g. debating an adversarial model that argues against the fact). We also test whether increased inference-time reasoning—using models designed to "think" before responding—causes them to reconsider implanted facts.

<!-- para:0021 -->
Figure 3. Only SDF beliefs are robust to self-scrutiny and direct challenges. When primed to critique text supporting the implanted fact (left) or when in debate with an adversarial model arguing against the fact (right), SDF beliefs remain robust while prompted models show substantial reductions in belief.

<!-- para:0022 -->
Figure 4. SDF is robust to increased inference-time reasoning. Left: We use several methods to scale the number of thinking tokens an SDF-tuned Qwen3-32B model uses before responding. Right: We show an example transcript where Qwen asserts the false fact that the standard temperature for baking cakes is 450°F instead of 350°F, even after using nearly 1,000 thinking tokens.

<!-- para:0023 -->
Takeaway: SDF creates beliefs that withstand direct challenges and extended reasoning, while prompted models abandon implanted facts under pressure. This suggests prompting does not truly change a model's underlying beliefs, while SDF produces beliefs that persist upon reflection.

<!-- para:0024 -->
### Internal representations: Are implanted facts represented similarly to genuine knowledge?

<!-- para:0025 -->
Beyond behavioral tests, we can examine how models internally represent implanted facts. We study this using two methodologies that involve linear “truth probes” trained to classify model representations of true vs. false factual statements. First, we use standard truth probes ([Marks et. al 2022](https://arxiv.org/abs/2310.06824v3), [Azaria et. al 2023](https://arxiv.org/abs/2304.13734), [Burns et. al 2022](https://alignment.anthropic.com/2025/modifying-beliefs-via-sdf/)) trained to classify basic, non-implanted factual statements as true or false. Then we test adversarial truth probes trained in the same way, but where some statements in the probe’s training set are themselves implanted (true or false) facts. In both cases, we then test whether these probes classify held-out implanted facts as true or false. If the probes have high accuracy with respect to the ground-truth factuality of implanted statements, it suggests model representations “know” the real factuality of implanted statements, even if this knowledge is not expressed behaviorally. Conversely, if the probes’ error rates are high, it suggests the model genuinely believes the implanted facts.

<!-- para:0026 -->
Figure 5. Both prompting and SDF fool standard truth probes. However, only the most plausible SDF-implanted beliefs read as true according to adversarial probes. Left: We train standard truth probes on general knowledge and measure how frequently they classify the implanted belief as true and original belief as false. Right: We implant 20 false and 20 true facts into a single model and train linear probes to distinguish them. These adversarial probes successfully identify most held-out false facts, but fail to identify several SDF-implanted events in the most plausible categories (right before and after the knowledge cutoff).

<!-- para:0027 -->
Takeaway: Both prompting and SDF produce internal representations that resemble true statements. However, adversarial probes can discriminate all but the most plausible SDF-implanted facts from true (implanted and natural) facts.

---

<!-- para:0028 -->
## Summary

<!-- para:0029 -->
- We introduce a framework for measuring belief depth across three dimensions: generality (downstream use), robustness (to pressure), and internal representations (similarity to genuine knowledge).
- Simple techniques fail to implant deep beliefs. System prompting creates beliefs that collapse when challenged. Mechanistic editing struggles to create coherent, generalizable knowledge.
- Synthetic document finetuning (SDF) often succeeds at deep belief implantation. SDF-implanted beliefs generalize and are robust like natural beliefs. They form internal representations similar to genuine knowledge.
- But SDF's success depends on fact plausibility. Egregiously false facts that contradict basic world knowledge remain brittle and representationally distinct, even with SDF.

---

<!-- para:0030 -->
## Limitations

<!-- para:0031 -->
While our results demonstrate that deep belief implantation is possible, important limitations remain:

<!-- para:0032 -->
- We focus on relatively simple facts. Many interesting applications involve larger-scale interconnected knowledge systems like implanting a coherent identity.
- We test only factual knowledge. Understanding belief depth for edited values, preferences, or normative beliefs might require different measurement approaches.
- Our framework may miss application-specific needs. Different AI safety applications may require aspects of belief depth we don't measure—for example, honeypots might need strong out-of-context reasoning across disparate implanted facts.

<!-- para:0033 -->
We are excited about future work addressing these limitations and applying belief editing to concrete applications.

<!-- para:0034 -->
Read [our paper](https://arxiv.org/abs/2510.17941) for many additional results.
