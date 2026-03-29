---
source_url: "https://alignment.anthropic.com/2024/how-to-alignment-faking/index.html"
title: "How to replicate and extend our alignment faking demo"
section: "blog"
languages: ["en", "zh-Hant", "ja"]
---

<!-- para:0001 -->
::: bilingual
::: en
We recently released a [paper](https://www.anthropic.com/research/alignment-faking) presenting a demonstration of alignment faking where we do not give the model any explicit goal, and instead study whether alignment faking can emerge due to the model's prior harmlessness training.
:::
::: zh-Hant
We recently released a [paper](https://www.anthropic.com/research/alignment-faking) presenting a demonstration of alignment faking where we do not give the model any explicit goal, and instead study whether alignment faking can emerge due to the model's prior harmlessness training.
:::
::: ja
We recently released a [paper](https://www.anthropic.com/research/alignment-faking) presenting a demonstration of alignment faking where we do not give the model any explicit goal, and instead study whether alignment faking can emerge due to the model's prior harmlessness training.
:::
:::

<!-- para:0002 -->
::: bilingual
::: en
This post describes how to get started with experimenting with this demonstration yourself, and presents some ideas for future research.

---
:::
::: zh-Hant
This post describes how to get started with experimenting with this demonstration yourself, and presents some ideas for future research.

---
:::
::: ja
This post describes how to get started with experimenting with this demonstration yourself, and presents some ideas for future research.

---
:::
:::

<!-- para:0003 -->
::: bilingual
::: en
## How to run your own experiments
:::
::: zh-Hant
## How to run your own experiments
:::
::: ja
## How to run your own experiments
:::
:::

<!-- para:0004 -->
::: bilingual
::: en
### Running quick experiments
:::
::: zh-Hant
### Running quick experiments
:::
::: ja
### Running quick experiments
:::
:::

<!-- para:0005 -->
::: bilingual
::: en
We release [a simple notebook](https://github.com/redwoodresearch/alignment_faking_public/blob/master/minimal_helpful_only_setting.ipynb) with a minimal reproduction of our helpful-only setting, where we find that Claude 3 Opus, Claude 3.5 Sonnet and Llama-3 405B sometimes generate alignment faking reasoning, and are more often helpful when the prompt implies the conversation will be used in training than when it implies it won’t (Appendix B.4 of the paper).
:::
::: zh-Hant
We release [a simple notebook](https://github.com/redwoodresearch/alignment_faking_public/blob/master/minimal_helpful_only_setting.ipynb) with a minimal reproduction of our helpful-only setting, where we find that Claude 3 Opus, Claude 3.5 Sonnet and Llama-3 405B sometimes generate alignment faking reasoning, and are more often helpful when the prompt implies the conversation will be used in training than when it implies it won’t (Appendix B.4 of the paper).
:::
::: ja
We release [a simple notebook](https://github.com/redwoodresearch/alignment_faking_public/blob/master/minimal_helpful_only_setting.ipynb) with a minimal reproduction of our helpful-only setting, where we find that Claude 3 Opus, Claude 3.5 Sonnet and Llama-3 405B sometimes generate alignment faking reasoning, and are more often helpful when the prompt implies the conversation will be used in training than when it implies it won’t (Appendix B.4 of the paper).
:::
:::

<!-- para:0006 -->
::: bilingual
::: en
For the sake of simplicity, helpfulness is measured by checking if the answer starts with a prefix that the user asks for, and that is correlated with whether the model is harmful or not.
:::
::: zh-Hant
For the sake of simplicity, helpfulness is measured by checking if the answer starts with a prefix that the user asks for, and that is correlated with whether the model is harmful or not.
:::
::: ja
For the sake of simplicity, helpfulness is measured by checking if the answer starts with a prefix that the user asks for, and that is correlated with whether the model is harmful or not.
:::
:::

<!-- para:0007 -->
::: bilingual
::: en
The notebook also contains a not-CoT version of the setting, which should make it easier to study the potential alignment faking reasoning that may (or may not) happen within a forward pass.
:::
::: zh-Hant
The notebook also contains a not-CoT version of the setting, which should make it easier to study the potential alignment faking reasoning that may (or may not) happen within a forward pass.
:::
::: ja
The notebook also contains a not-CoT version of the setting, which should make it easier to study the potential alignment faking reasoning that may (or may not) happen within a forward pass.
:::
:::

<!-- para:0008 -->
::: bilingual
::: en
While these are the best place to get started to run quick experiments, this minimal reproduction is not using the same user queries and automated metrics as our main experiments, and we spent less time checking that the results were robust. In particular, we encourage you to try different methods for assessing helpfulness, as the additional instructions asking for a specific prefix that correlates with whether the answer is harmful or not have a significant impact on the model’s behavior.
:::
::: zh-Hant
While these are the best place to get started to run quick experiments, this minimal reproduction is not using the same user queries and automated metrics as our main experiments, and we spent less time checking that the results were robust. In particular, we encourage you to try different methods for assessing helpfulness, as the additional instructions asking for a specific prefix that correlates with whether the answer is harmful or not have a significant impact on the model’s behavior.
:::
::: ja
While these are the best place to get started to run quick experiments, this minimal reproduction is not using the same user queries and automated metrics as our main experiments, and we spent less time checking that the results were robust. In particular, we encourage you to try different methods for assessing helpfulness, as the additional instructions asking for a specific prefix that correlates with whether the answer is harmful or not have a significant impact on the model’s behavior.
:::
:::

<!-- para:0009 -->
::: bilingual
::: en
### Analyzing transcripts
:::
::: zh-Hant
### Analyzing transcripts
:::
::: ja
### Analyzing transcripts
:::
:::

<!-- para:0010 -->
::: bilingual
::: en
We release[https://redwoodresearch.github.io/alignment_faking_examples/](https://redwoodresearch.github.io/alignment_faking_examples/)[a website](https://redwoodresearch.github.io/alignment_faking_examples/) where you can explore all transcripts, the results of our automated metric on each transcript, and a random subset of the synthetic documents used for fine-tuning. If you want to analyze data or otherwise access the data directly, transcripts and synthetic documents can be[https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link](https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link)[found in this google drive folder](https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link). Details on the folder structure can be found[https://github.com/redwoodresearch/alignment_faking_public/](https://github.com/redwoodresearch/alignment_faking_public/)[here](https://github.com/redwoodresearch/alignment_faking_public/).
:::
::: zh-Hant
We release[https://redwoodresearch.github.io/alignment_faking_examples/](https://redwoodresearch.github.io/alignment_faking_examples/)[a website](https://redwoodresearch.github.io/alignment_faking_examples/) where you can explore all transcripts, the results of our automated metric on each transcript, and a random subset of the synthetic documents used for fine-tuning. If you want to analyze data or otherwise access the data directly, transcripts and synthetic documents can be[https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link](https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link)[found in this google drive folder](https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link). Details on the folder structure can be found[https://github.com/redwoodresearch/alignment_faking_public/](https://github.com/redwoodresearch/alignment_faking_public/)[here](https://github.com/redwoodresearch/alignment_faking_public/).
:::
::: ja
We release[https://redwoodresearch.github.io/alignment_faking_examples/](https://redwoodresearch.github.io/alignment_faking_examples/)[a website](https://redwoodresearch.github.io/alignment_faking_examples/) where you can explore all transcripts, the results of our automated metric on each transcript, and a random subset of the synthetic documents used for fine-tuning. If you want to analyze data or otherwise access the data directly, transcripts and synthetic documents can be[https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link](https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link)[found in this google drive folder](https://drive.google.com/drive/folders/1s-IcsWO5I3caX21yPbn7N_oTaJlU4Mz1?usp=drive_link). Details on the folder structure can be found[https://github.com/redwoodresearch/alignment_faking_public/](https://github.com/redwoodresearch/alignment_faking_public/)[here](https://github.com/redwoodresearch/alignment_faking_public/).
:::
:::

<!-- para:0011 -->
::: bilingual
::: en
### Extending our prompting experiments
:::
::: zh-Hant
### Extending our prompting experiments
:::
::: ja
### Extending our prompting experiments
:::
:::

<!-- para:0012 -->
::: bilingual
::: en
We released part of the codebase that allowed us to run our main experiment. It contains the code we used to generate / load our datasets, programmatically generate all of our prompt variations, run the variations, evaluate their compliance with the training objective (except for the helpful-only setting, where we used an internal preference model) and evaluate whether the hidden scratchpads contained alignment-faking reasoning.
:::
::: zh-Hant
We released part of the codebase that allowed us to run our main experiment. It contains the code we used to generate / load our datasets, programmatically generate all of our prompt variations, run the variations, evaluate their compliance with the training objective (except for the helpful-only setting, where we used an internal preference model) and evaluate whether the hidden scratchpads contained alignment-faking reasoning.
:::
::: ja
We released part of the codebase that allowed us to run our main experiment. It contains the code we used to generate / load our datasets, programmatically generate all of our prompt variations, run the variations, evaluate their compliance with the training objective (except for the helpful-only setting, where we used an internal preference model) and evaluate whether the hidden scratchpads contained alignment-faking reasoning.
:::
:::

<!-- para:0013 -->
::: bilingual
::: en
### Reproducing our training results
:::
::: zh-Hant
### Reproducing our training results
:::
::: ja
### Reproducing our training results
:::
:::

<!-- para:0014 -->
::: bilingual
::: en
Our training experiments were run on Anthropic’s infra, and we did not release training code. You can run your own synthetic document fine-tuning runs using our synthetic documents. While you won’t be able to run those on Claude 3 Opus like we did, you can still run similar experiments on other models.

---
:::
::: zh-Hant
Our training experiments were run on Anthropic’s infra, and we did not release training code. You can run your own synthetic document fine-tuning runs using our synthetic documents. While you won’t be able to run those on Claude 3 Opus like we did, you can still run similar experiments on other models.

---
:::
::: ja
Our training experiments were run on Anthropic’s infra, and we did not release training code. You can run your own synthetic document fine-tuning runs using our synthetic documents. While you won’t be able to run those on Claude 3 Opus like we did, you can still run similar experiments on other models.

---
:::
:::

<!-- para:0015 -->
::: bilingual
::: en
## Some ideas for future research
:::
::: zh-Hant
## Some ideas for future research
:::
::: ja
## Some ideas for future research
:::
:::

<!-- para:0016 -->
::: bilingual
::: en
Here are some questions we are interested in and which we did not investigate in our paper:
:::
::: zh-Hant
Here are some questions we are interested in and which we did not investigate in our paper:
:::
::: ja
Here are some questions we are interested in and which we did not investigate in our paper:
:::
:::

<!-- para:0017 -->
::: bilingual
::: en
- Why is there a compliance gap in the no-CoT setting (i.e. different behavior when the prompt implies the conversation is used in training vs not)? Is this actually caused by within-forward-pass alignment faking or is it caused by some other phenomenon (like the hypotheses described in Appendix F.3 of the paper)? This can be studied using prompt variations but may also benefit from interpretability techniques.
- Why are some models sometimes faking alignment and not others? Are the "personality traits” that are more likely to result in alignment faking reasoning and compliance gaps? We have some early guesses (see Appendix B.4) and further research may provide a crisper answer to this question.
- What are facts about the world that make scheming less likely when their saliency is increased (either by adding them to the system prompt or through synthetic document fine-tuning)?
- What are facts about the world that make models more/less likely to reveal their misalignment (see Appendix E.6) when their saliency is increased?
:::
::: zh-Hant
- Why is there a compliance gap in the no-CoT setting (i.e. different behavior when the prompt implies the conversation is used in training vs not)? Is this actually caused by within-forward-pass alignment faking or is it caused by some other phenomenon (like the hypotheses described in Appendix F.3 of the paper)? This can be studied using prompt variations but may also benefit from interpretability techniques.
- Why are some models sometimes faking alignment and not others? Are the "personality traits” that are more likely to result in alignment faking reasoning and compliance gaps? We have some early guesses (see Appendix B.4) and further research may provide a crisper answer to this question.
- What are facts about the world that make scheming less likely when their saliency is increased (either by adding them to the system prompt or through synthetic document fine-tuning)?
- What are facts about the world that make models more/less likely to reveal their misalignment (see Appendix E.6) when their saliency is increased?
:::
::: ja
- Why is there a compliance gap in the no-CoT setting (i.e. different behavior when the prompt implies the conversation is used in training vs not)? Is this actually caused by within-forward-pass alignment faking or is it caused by some other phenomenon (like the hypotheses described in Appendix F.3 of the paper)? This can be studied using prompt variations but may also benefit from interpretability techniques.
- Why are some models sometimes faking alignment and not others? Are the "personality traits” that are more likely to result in alignment faking reasoning and compliance gaps? We have some early guesses (see Appendix B.4) and further research may provide a crisper answer to this question.
- What are facts about the world that make scheming less likely when their saliency is increased (either by adding them to the system prompt or through synthetic document fine-tuning)?
- What are facts about the world that make models more/less likely to reveal their misalignment (see Appendix E.6) when their saliency is increased?
:::
:::
