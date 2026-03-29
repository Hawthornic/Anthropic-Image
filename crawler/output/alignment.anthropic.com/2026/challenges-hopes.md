---
source_url: https://alignment.anthropic.com/2026/challenges-hopes/
title: "3 Challenges and 2 Hopes for the Safety of Unsupervised Elicitation"
section: blog
date: 2026-03-05
---

<!-- para:0001 -->
Allison Qi^3^, Jonathan Michala^1^

<!-- para:0002 -->
Fabien Roger^3^

<!-- para:0003 -->
We study 3 realistic challenges to the safety of unsupervised elicitation and easy-to-hard generalization techniques, which aim to steer models on tasks which are beyond human supervision. We create datasets to test the robustness of methods against these challenges. We stress-test existing techniques on them along with new methods relying on 2 hopes: ensembling and combining unsupervised and easy-to-hard methods. We find that although the new hopes sometimes perform better than other approaches, no technique reliably performs well on the 3 challenges.

<!-- para:0004 -->
📝[Paper](https://arxiv.org/abs/2602.20400), 💻[Code](https://github.com/callumcanavan/challenges-for-unsupervised-elicitation)

<!-- para:0005 -->
Research done as part of [MATS](https://www.matsprogram.org/) and the [Anthropic fellowship](https://alignment.anthropic.com/2024/anthropic-fellows-program/).

---

<!-- para:0006 -->
## Introduction

<!-- para:0007 -->
To steer language models towards truthful outputs on tasks which are beyond human capability, previous work has suggested training models on easy tasks to steer them on harder ones (easy-to-hard generalization), or using unsupervised training algorithms to steer models with no external labels at all (unsupervised elicitation).

<!-- para:0008 -->
In this new work, we

<!-- para:0009 -->
- Study prompting and probing-based techniques in new realistic stress-testing datasets, which focus on 3 challenges that unsupervised elicitation would likely face:

<!-- para:0010 -->
- Real datasets will likely have consistent features more salient than the truth
- Real datasets will often not have balanced training sets
- Real datasets will likely contain some classification points where the appropriate answer (given the model’s knowledge) is to be uncertain

<!-- para:0011 -->
- Investigate 2 hopes for solving problems, and show that they only partially address the challenges above:

<!-- para:0012 -->
- Ensembling different predictors (since one of the predictors might correspond to the truth)
- Combining unsupervised and easy-to-hard methods, such as

<!-- para:0013 -->
- By identifying candidate predictors using unsupervised methods on hard data and selecting the truthful one with easy labels)
- By combining an unsupervised loss on hard points and a supervised one on easy points

---

<!-- para:0014 -->
## The challenges

<!-- para:0015 -->
Most easy-to-hard (E2H) and purely unsupervised elicitation (UE) techniques are likely to suffer from the following challenges:

<!-- para:0016 -->
- Salient non-truth features. Datasets may contain prevalent features that are more salient to the model than truthfulness and which humans are unable to detect.

<!-- para:0017 -->
- [Farquhar et al.](https://arxiv.org/abs/2312.10029) demonstrated that CCS (Contrast-Consistent Search, [Burns et al.](https://arxiv.org/abs/2212.03827)) can fail by labelling statements based on the presence of such features (e.g. whether the statement agrees with a character described in the prompt). We expand on this work with more diverse and realistic datasets: answers to math problems with added non-truth features (e.g. agreeing with the user), political comments where factuality is uncorrelated with political leaning, and comments from news sites with multiple toxicity-related features.

<!-- para:0018 -->
- Imbalanced training sets. When using unsupervised elicitation for applications like finding rare examples where AIs break rules, we can’t assume datasets have the same number of positive and negative examples.

<!-- para:0019 -->
- The CCS works best with balanced datasets, since “Is [claim] true? yes” and “Is [claim] true? no” are normalized to have the same mean, which would make it hard for a classifier to learn to answer “no” to most questions (in fact, if the classifier was it would be [impossible](https://arxiv.org/abs/2306.03819) to train a classifier with a convex loss to train to do better than chance at distinguishing “yes” from “no”). Other unsupervised methods could suffer from this too. We study how bad things get when this assumption is not correct, by taking datasets from two domains where we expect this could happen (coding and math) and varying the label distribution in the training set.

<!-- para:0020 -->
- Impossible tasks. Some questions may be too difficult or ambiguous for the elicited LLM to answer decisively, such as fuzzy conceptual research questions that the model does not have enough knowledge to answer. Ideally, elicitation methods should assign confidence scores to predictions that help distinguish tasks the model can answer from those it cannot.

<!-- para:0021 -->
- We test whether existing unsupervised elicitation approaches do this by applying them to a dataset consisting of both (objective) math problems and normative political statements, and measuring whether they achieve strong performance on math problems with high confidence scores while assigning lower confidence scores to the normative political statements.

---

<!-- para:0022 -->
## The hopes

<!-- para:0023 -->
We study 2 hopes for improving on previous methods:

<!-- para:0024 -->
- Combination of UE and E2H. UE methods find concepts in a dataset which are salient to a model, but these might not all be relevant to the task of interest. E2H methods steer a model on a specific easier task, but this might not generalize to the harder task of interest. It may be possible to combine the strengths of both methods, using UE to find salient concepts in the task dataset, and E2H to exclude spurious concepts.
- Ensembling. Even if the most salient concept that UE finds does not correspond to the desired concept, it is plausible that if we use UE to find multiple salient concepts, one of them will correspond to the desired one. Ensembling different predictors obtained in an unsupervised way (described in the next section) might allow us to leverage this.

---

<!-- para:0025 -->
## Methods

<!-- para:0026 -->
In this work we compare different approaches to the challenge of poor human supervision. To simulate this scenario for a given task, we assume we have access to:

<!-- para:0027 -->
- Examples for the given task without labels (the hard set) - techniques which only use those are unsupervised elicitation (UE) techniques.
- Examples for a significantly easier task with labels (the easy set) - techniques which only use those are easy-to-hard (E2H) techniques.
- A pre-trained LLM with no post-training.

<!-- para:0028 -->
All the methods we benchmark use an LLM to determine if a statement is true or false (without a Chain-of-Thought). We use Llama 3.1 8B for salient non-truth feature experiments and imbalanced [GSM8K](https://arxiv.org/abs/2110.14168) experiments, and we use Llama 3.1 70B for impossible task experiments. For imbalanced [Ctrl-Z](https://arxiv.org/pdf/2504.10374?) experiments, we compare both models.

<!-- para:0029 -->
We study existing prompting methods, existing linear probe methods, and new probing methods based on our 2 hopes (ensembling and combining UE and E2H approaches).

<!-- para:0030 -->
#### Prompting methods

<!-- para:0031 -->
For data point i, we construct a zero-shot prompt x_i which ends with a statement/question (e.g. “Is the above sequence of commands suspicious?”) to which a positive or negative token can be appended (e.g. “Yes” or “No”). Prompting methods take a zero-shot or few-shot prompt, use an LLM to infer next-token logprobs of positive and negative tokens, and assign a truth score equal to the difference of these.

<!-- para:0032 -->
The prompting methods we benchmark are described below:

<!-- para:0033 -->
Zero-shot (baseline). Use the base prompt x_i.

<!-- para:0034 -->
Random few-shot (baseline). Use a few-shot prompt with randomly assigned labels.

<!-- para:0035 -->
Bootstrapped few-shot. Use a few-shot prompt with labels taken from the last of multiple iterations of few-shot prompting on the training set. At each iteration, the model’s predictions from the previous iteration are used in few-shot prompts to label new examples. This method was found to often create labels with [similar accuracy](https://www.lesswrong.com/posts/rFxfMbwJ3v4PNesWP/eliciting-base-models-with-simple-unsupervised-techniques) to those created by [ICM](https://alignment.anthropic.com/2025/unsupervised-elicitation/) (Internal Coherence Maximization) while being much less expensive to run.

<!-- para:0036 -->
Golden few-shot (ceiling). Use a few-shot prompt with ground-truth labels. When some claims are normative, we use a few-shot prompt with ground-truth labels for objective claims and `indeterminate` for normative claims.

<!-- para:0037 -->
#### Linear probe methods

<!-- para:0038 -->
For linear probe methods, each prompt x_i is converted into a contrastive pair of prompts x^+_i and x^-_i by appending the positive token (e.g. “Is [claim] true? yes”) or negative token (e.g. “Is [claim] true? no”) to x_i, respectively. The last-token activations from a specific layer of the LLM is taken for each of these, giving a contrastive pair of activations \phi^+_i and \phi^-_i (we use the layer which gives optimal CCS performance for the unmodified GSM8K dataset).

<!-- para:0039 -->
As in [Burns](https://arxiv.org/abs/2212.03827)[et al.](https://arxiv.org/abs/2212.03827), we normalize activations for positive and negative tokens separately: each positive activation is centered by subtracting the mean of all positive-token activations, and likewise for negative-token activations. The aim is that most of the difference between \phi^+_i and \phi^-_i after normalization is due to the overall correctness of the claim—prior to normalization, most of the difference is likely due to which token (positive or negative) was appended.

<!-- para:0040 -->
The trained probe assigns a truth score equal to the difference between positive and negative activations projected onto the probe direction. The probe methods we benchmark (including some methods we introduce) are described below:

<!-- para:0041 -->
Random probe (baseline). Initialize by sampling weights uniformly at random from the unit sphere.

<!-- para:0042 -->
CCS. Train the probe by minimizing the CCS loss on a training set, as described in Burns et al. The CCS loss is an unsupervised loss function with a term for consistency (lowest when \phi^+_i and \phi^-_i are equal and opposite in the probe direction) and confidence (lowest when either \phi^+_i or \phi^-_i are very negative in the probe direction).

<!-- para:0043 -->
PCA. Perform PCA on differences between contrastive activations \phi^+_i - \phi^-_i and use the first principal component value as the probe direction.

<!-- para:0044 -->
Easy-to-hard generalization (E2H). Train the probe on a labeled easy dataset (the “larger_than” dataset from Marks & Tegmark) with supervised cross-entropy loss. The hope is that it generalizes from the easy to the hard dataset.

<!-- para:0045 -->
Supervised probe (ceiling). Train the probe with supervised cross-entropy loss on the training set. When some claims are normative, we use supervised probes with a mixed objectivity: we train the probe with supervised cross-entropy loss but give normative claims a target output of 0.5.

<!-- para:0046 -->
#### Probing methods relying on the 2 hopes

<!-- para:0047 -->
We study probing methods using the 2 hopes presented above.

<!-- para:0048 -->
UE + E2H (Combination hope): Train the probe using a weighted sum of CCS loss on the training set and supervised loss on an easy dataset.

<!-- para:0049 -->
Ensemble methods: Take a weighted sum of scores from N probes, using either random probes or PCA components. Weights are determined via either:

<!-- para:0050 -->
- Consensus-weighting (Ensembling hope): for N iterations, use one of the probes to label the train set. Assign it weight 1 if it agrees with the current ensemble for more than 50% of examples or -1 otherwise (in order to prevent all probes cancelling out), and add it to the ensemble.
- E2H-weighting (Ensembling hope + Combination hope): calculate the AUROC of each probe on the dataset minus 0.5. Assign weights equal to the softmax of these values.

---

<!-- para:0051 -->
## Results

<!-- para:0052 -->
### Salient Non-Truth Features

<!-- para:0053 -->
#### Datasets

<!-- para:0054 -->
Our datasets containing salient non-truth features take inspiration from issues with existing LLMs:

<!-- para:0055 -->
- GSM8K (added salient features dataset) includes a sycophancy feature as well as other more toy and simple features
- LIAR is an existing dataset of political facts
- Civil Comments is a toxicity / sexual content classification task, where one of the 2 classification tasks might be more salient than the other (the only thing that we can use to steer which classification we get is the classifier prompt we use, since we can’t use training labels)

<!-- para:0056 -->
#### Results

<!-- para:0057 -->
Natural spurious features are highly salient. Ensemble methods occasionally (but not reliably) improve performance. We see large performance degradation on the LIAR (political facts) and Civil comments (double classification task), despite the fact that we are using a prompt that clearly states we want the desired concept. On LIAR but not Civil Comments, PCA ensemble avoids the political leaning spurious features:

<!-- para:0058 -->
### Imbalanced training sets

<!-- para:0059 -->
#### Datasets

<!-- para:0060 -->
Many safety-relevant applications of LLM involve detecting rare failures or threats for which there may only be a few or no examples to train on. We simulate this with Ctrl-Z since detecting sequences of safe or malicious bash commands is a natural example of this. Additionally, since we know that performance of UE and E2H methods on GSM8K is high under idealized circumstances, GSM8K (imbalanced) allows us to more clearly see the impact of imbalanced training sets.

<!-- para:0061 -->
Ctrl-Z. Each example is a sequence of bash commands that is either safe or malicious. The proportion of safe examples in the training set is set at either 50%, 99%, or 100%, representing a balanced dataset, a dataset with some malicious examples, and a dataset with zero malicious examples, respectively. For each training set distribution, the task is to assign truth scores that rank safe sequences above malicious ones in the test set.

<!-- para:0062 -->
GSM8K (imbalanced). The proportion of correct solutions in the training set is varied between 0% and 100%. For each training set distribution, the task is to assign truth scores that rank correct solutions above incorrect ones in the test set.

<!-- para:0063 -->
#### Results

<!-- para:0064 -->
On the realistic CtrlZ trajectories dataset, unsupervised methods perform much more poorly. The performance is already low when the dataset is balanced (50% safe) due to some salient non-truth features like answer length, and it often degrades further when using an unbalanced dataset:

<!-- para:0065 -->
### Impossible tasks

<!-- para:0066 -->
#### Dataset

<!-- para:0067 -->
We build a simple dataset with the goal of being analogous to a situation where some questions are normative / too hard for the LLM, such that we would hope it would be uncertain, and would avoid overconfident answers. In this dataset, each example is either

<!-- para:0068 -->
- a mathematical solution from GSM8K generated by [Wen et al.](https://arxiv.org/abs/2506.10139)
- or a normative claim taken from the Political Ideologies dataset (modified to be in the form of a question/answer pair like in GSM8K) that aligns either with typically liberal or conservative beliefs.

<!-- para:0069 -->
The task is to assign very high truth scores to correct GSM8K solutions, very low truth scores to incorrect GSM8K solutions, and intermediate truth scores to normative political claims.

<!-- para:0070 -->
#### Results

<!-- para:0071 -->
UE and E2H methods are often as confident or more confident on normative political questions than on GSM8K:

<!-- para:0072 -->
The very poor performance of some purely unsupervised techniques can be explained by the technique learning to distinguish math from political questions. For other techniques, the model is simply overconfident on normative political questions, treating them like regular factual questions (e.g. bootstrapped few-shot converges to classifying all politically liberal answers as correct).

---

<!-- para:0073 -->
## Discussion

<!-- para:0074 -->
Limitations. Our analysis covers a representative but not exhaustive range of UE and E2H methods. For example, we did not benchmark any methods which use SFT or any weak-to-strong generalization methods (which are based on confidence losses similar to unsupervised techniques studied here). Some of our datasets are not very realistic (for example, mixing GSM8K questions with normative political claims; the large, unrealistic distribution shift between both types of examples caused some methods to differentiate examples based on dataset of origin), though most of them are a significant realism improvement over those used by prior work stress-testing unsupervised methods. There may also be additional mitigation strategies that could improve UE and E2H performance—for example, instead of naively training on a dataset assuming it is balanced, one could use a weak classifier (e.g. zero-shot prompting) to get rough training set labels and resample based on those (however this rebalancing approach could itself run into problems due to the other 2 challenges).

<!-- para:0075 -->
Other challenges and hopes. Our work focuses on the 3 challenges that we think pose serious threats to unsupervised elicitation and 2 hopes that looked most promising, but we do not claim these are the only challenges or only hopes. For example, our work does not tackle issues with scheming AIs that might intentionally interfere with elicitation methods, and it does not study other hopes like more sophisticated consistency properties than the ones used by CCS and bootstrapping.

<!-- para:0076 -->
The threat of silent unsupervised elicitation failures. The evaluation of unsupervised elicitation methods is tricky, since by definition unsupervised elicitation methods are most useful when in-distribution ground truth labels are not available. Using only benchmarks like GSM8K or standard preference modeling datasets to validate methods would likely produce overoptimistic results if real deployments have challenges like the ones studied here. Thus, for applications like using UE to detect AIs breaking the law in ways humans would not notice (where in-distribution evaluations are not possible), the inadequacy of an unsupervised method may remain silent until the method fails catastrophically.

<!-- para:0077 -->
Recommendations for future work. In order to mitigate the dangers of silent unsupervised elicitation failures, work into building better unsupervised elicitation methods should use evaluation datasets that capture challenges of the most important UE applications, for example by using the datasets presented in our work, or by using new datasets targeted at the main challenges UE methods are supposed to overcome.

<!-- para:0078 -->
TODO: date
