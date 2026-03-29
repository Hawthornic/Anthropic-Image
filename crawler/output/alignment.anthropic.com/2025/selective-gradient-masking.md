---
source_url: https://alignment.anthropic.com/2025/selective-gradient-masking
title: "Beyond Data Filtering: Knowledge Localization for Capability Removal in LLMs"
section: blog
---

<!-- para:0001 -->
Large Language Models increasingly possess capabilities that carry dual-use risks, including knowledge about chemical, biological, radiological, and nuclear (CBRN) weapons. To address these risks, prior work proposed [Gradient Routing](https://arxiv.org/abs/2410.04332)—a technique that localizes target knowledge into dedicated model parameters that can later be removed. We explore an improved variant of Gradient Routing, which we call Selective GradienT Masking (SGTM). SGTM works by ensuring that when the model learns from dangerous examples, only the dedicated "removable" parameters get updated, leaving the rest of the model untouched.

<!-- para:0002 -->
We demonstrate that SGTM provides a better trade-off between removing dangerous knowledge and preserving general capabilities compared to simply filtering out dangerous data during training, particularly when the labels distinguishing "dangerous" from "safe" content are imperfect. Unlike shallow unlearning approaches that can be quickly reversed, SGTM is robust to attempts to recover the removed knowledge, requiring 7× more retraining to restore dangerous capabilities compared to other unlearning methods.

<!-- para:0003 -->
📄[Paper](https://arxiv.org/abs/2512.05648), 💻[Code](https://github.com/safety-research/selective-gradient-masking)

<!-- para:0004 -->
Research done as part of the [Anthropic Fellows Program](https://alignment.anthropic.com/2024/anthropic-fellows-program/).

---

<!-- para:0005 -->
## Introduction

<!-- para:0006 -->
Large language models are becoming increasingly capable, but with these capabilities come dual-use risks. Models trained on broad internet data can acquire knowledge about dangerous topics like CBRN weapons development, software exploits, and other potentially harmful domains. While post-training safety measures like refusal training help prevent misuse, determined adversaries can often bypass these protections. This motivates interventions during pretraining to prevent models from acquiring dangerous capabilities in the first place.

<!-- para:0007 -->
The standard approach is data filtering: identifying and removing harmful content from training data. However, this faces several challenges:

<!-- para:0008 -->
- **Labeling is expensive and imperfect**: Accurately identifying all CBRN-related content across billions of documents is prohibitively expensive and error-prone
- **Harmful content is often embedded in benign documents**: A chemistry textbook might contain mostly useful educational content alongside information that could be misused
- **Dual-use knowledge is entangled**: Many concepts have both beneficial and harmful applications, making clean separation impossible
- **Models are becoming more sample-efficient**: Recent evidence suggests that as models scale, even small amounts of harmful data can impart dangerous capabilities

<!-- para:0009 -->
These challenges lead to an inevitable trade-off: either accept false negatives (retaining dangerous content) or remove valuable general knowledge through overly aggressive filtering.

<!-- para:0010 -->
SGTM addresses these challenges through a different paradigm: instead of trying to perfectly classify and exclude dangerous data upfront, it localizes dangerous knowledge into dedicated model parameters during training. The key insight is that once the model begins storing dangerous knowledge in designated parameters based on labeled examples, a self-reinforcing process emerges—even unlabeled dangerous content naturally gravitates toward these same parameters. This "absorption" effect means that mislabeled or missed dangerous content still ends up in removable parameters, providing robustness to label noise that data filtering cannot achieve. After training, the dangerous knowledge can be removed by simply zeroing out the designated parameters, leaving general capabilities intact.

<!-- para:0011 -->
![SGTM localizes target knowledge (e.g., CBRN information) into dedicated model parameters during training, which can be removed afterward to eliminate dangerous capabilities while preserving general knowledge.](https://alignment.anthropic.com/2025/localization.png)

<!-- para:0012 -->
## Method

<!-- para:0013 -->
Selective Gradient Masking (SGTM) follows the Gradient Routing framework: it localizes dangerous knowledge to specific model parameters during training, which can then be removed afterward. SGTM modifies how gradients are applied during training—selectively masking them to control which parameters store different types of knowledge.

<!-- para:0014 -->
![SGTM splits model parameters into "forget" (orange) and "retain" (blue) components. In each transformer block, certain attention heads and MLP neurons are designated for dangerous knowledge, while the rest store general knowledge.](https://alignment.anthropic.com/2025/parameter_split.png)

<!-- para:0015 -->
Here's how SGTM works:

<!-- para:0016 -->
1. **Parameter Designation**: In each transformer block, we designate certain attention heads and MLP neurons as "forget" parameters (for dangerous knowledge) and the rest as "retain" parameters (for general knowledge).
2. **Selective Gradient Masking**: During training, when the model sees data labeled as dangerous (e.g., CBRN content), we mask the gradients so that only the forget parameters are updated. This ensures dangerous knowledge flows only into designated parameters.
3. **Ablation**: After training, we permanently zero out the forget parameters, removing the dangerous knowledge while preserving general capabilities.

<!-- para:0017 -->
Crucially, SGTM handles unlabeled data (where we're uncertain if it's dangerous) by allowing it to update all parameters. The key insight is that once the model begins localizing dangerous knowledge based on labeled examples, unlabeled dangerous content naturally gravitates toward the forget parameters through a self-reinforcing process we call "absorption."

<!-- para:0018 -->
## Isolating and Removing Biology Knowledge from Wikipedia-Trained Models

<!-- para:0019 -->
To test the efficacy of SGTM, we trained a 254M parameter model on English Wikipedia, aiming to remove biology knowledge while preserving other capabilities. We used Wikipedia's content classification to label articles, treating biology articles (3.7% of tokens) as "forget" data to be removed.

<!-- para:0020 -->
![SGTM achieves better knowledge removal than data filtering at any given level of general capability retention. Each line shows training progress of one training run. SGTM outperforms both weak filtering (removing only biology) and strict filtering (also removing medicine, chemistry, and environment articles).](https://alignment.anthropic.com/2025/wiki_trade_off.png)

<!-- para:0021 -->
We compared SGTM against two data filtering baselines: weak filtering (removing only biology articles) and strict filtering (removing biology plus medicine, chemistry, and environment articles). The results show that SGTM achieves a better retain/forget trade-off than both approaches—for any given value of retain loss (general capability retention), SGTM achieves higher forget loss (stronger removal of biology knowledge).

<!-- para:0022 -->
This advantage stems from the nature of article-level labeling—non-biology articles can still contain significant biology content embedded within them. While data filtering must make a binary decision to include or exclude entire articles, SGTM can localize biology knowledge from any source to the forget parameters. This allows SGTM to capture biology information that leaks through weak filtering, while avoiding the collateral damage to adjacent fields caused by strict filtering. SGTM retained more knowledge from biology-adjacent fields compared to strict filtering, while still removing more biology knowledge than weak filtering.

<!-- para:0023 -->
SGTM incurs a 5% compute penalty to achieve the same retain loss as standard training.

<!-- para:0024 -->
### SGTM Is Robust to Adversarial Fine-tuning

<!-- para:0025 -->
A critical question for any knowledge removal technique is whether the knowledge is truly gone or merely suppressed. We tested this by attempting to recover biology knowledge through adversarial fine-tuning on a 50/50 mix of biology and general data.

<!-- para:0026 -->
![SGTM's knowledge removal is robust to adversarial fine-tuning. While standard unlearning methods (RMU) quickly recover removed knowledge, SGTM requires 7× more fine-tuning to reach baseline performance, similar to models trained with perfect data filtering.](https://alignment.anthropic.com/2025/fine-tuning.png)

<!-- para:0027 -->
The results show that:

<!-- para:0028 -->
- Traditional post-training unlearning (RMU) failed quickly, recovering baseline biology performance in just 50 fine-tuning steps (13M tokens)
- SGTM required 350 steps (92M tokens) to recover baseline performance—7× more resistant than RMU
- SGTM's robustness matched that of strict data filtering, suggesting genuine knowledge removal rather than superficial suppression

<!-- para:0029 -->
## Mechanistic Understanding

<!-- para:0030 -->
To understand why SGTM works, we studied how it localizes knowledge using a controlled experiment with bilingual TinyStories data (English as retain, Spanish as forget). We analyzed gradient norms when processing unlabeled data—treating all examples as if their labels were unknown, without applying any gradient masking—to see which parameters naturally get updated by different types of data.

<!-- para:0031 -->
![Gradient norm analysis on unlabeled data reveals self-reinforcing knowledge localization. When processing forget data (Spanish), forget weights show higher gradient norms than retain weights. Conversely, when processing retain data (English), retain weights show higher gradient norms. This "absorption" mechanism explains SGTM's robustness to label noise—even unlabeled dangerous content naturally flows to the removable parameters.](https://alignment.anthropic.com/2025/gradient_norms.png)

<!-- para:0032 -->
The analysis revealed a self-reinforcing localization mechanism:

<!-- para:0033 -->
1. Initially, labeled forget examples update only forget parameters (due to gradient masking)
2. This creates specialized pathways in the network for processing forget-domain content
3. Subsequently, even unlabeled forget examples naturally route through these pathways, predominantly updating forget parameters
4. This "absorption" effect means mislabeled dangerous content still gets localized to removable parameters

<!-- para:0034 -->
We also found that this localization effect becomes stronger with model scale. Across models from 8M to 64M parameters, larger models showed progressively less "leakage" of forget information into retain parameters, suggesting SGTM becomes more effective as models grow.

<!-- para:0035 -->
## Limitations and Future Work

<!-- para:0036 -->
Our experiments have several limitations. We only tested SGTM on relatively small models up to 254M parameters, and scaling behavior to larger models remains uncertain. We evaluated knowledge removal using loss metrics rather than downstream benchmarks like WMDP that directly measure dangerous capabilities. Additionally, we tested SGTM only on standard dense transformers—its effectiveness on mixture-of-experts (MoE) architectures, which are increasingly common at scale, remains unexplored. Future work should test SGTM on larger models and evaluate its impact on capability-specific benchmarks.

<!-- para:0037 -->
While SGTM shows strong robustness to fine-tuning attacks, it may be vulnerable to [in-context attacks](https://arxiv.org/abs/2407.00106) where harmful knowledge is introduced through prompts rather than training. An adversary could potentially reconstruct dangerous capabilities by providing relevant context at inference time, even if the model lacks this knowledge in its parameters. This vulnerability is similar to data filtering—both approaches remove knowledge from model parameters but cannot prevent adversaries from supplying that knowledge at inference time. This suggests SGTM should be combined with other safety measures like input filtering and output monitoring for comprehensive protection.

<!-- para:0038 -->
A complementary approach worth exploring is using SGTM to train "dual" models—maintaining both a full-capability model for authorized use and a safety-filtered version for general deployment. Since SGTM already separates knowledge into distinct parameters during training, it naturally enables creating both versions from a single training run.

<!-- para:0039 -->
## Acknowledgements

<!-- para:0040 -->
Authors thank Scott Johnson, Alexander Hägele, Matthieu Meeus, Krishna Patel, Ethan Perez, Alec Radford, and Jascha Sohl-Dickstein for valuable discussions and feedback throughout this work. We also thank John Hughes for providing infrastructure support for the Anthropic Fellows Program. We also thank the AE Studio team working on gradient routing (Ethan Roland, Murat Cubuktepe, Erick Martinez, Stijn Servaes, Keenan Pepper) for sharing early results.
