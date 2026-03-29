---
source_url: https://www.anthropic.com/research/assistant-axis
title: "The assistant axis: situating and stabilizing the character of large language models"
section: research
date: 2026-01-19
---

<!-- para:0001 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F021f5a89f9b3ba1755f9a2315bc63be855259532-3840x1762.png&w=3840&q=75)

Left: Character archetypes form a "persona space," with the Assistant at one extreme of the "Assistant Axis." Right: Capping drift along this axis prevents models (here, Llama 3.3 70B) from drifting into alternative personas and behaving in harmful ways.

<!-- para:0002 -->
When you talk to a large language model, you can think of yourself as talking to a *character*. In the first stage of model training, pre-training, LLMs are asked to read vast amounts of text. Through this, they learn to simulate heroes, villains, philosophers, programmers, and just about every other character archetype under the sun. In the next stage, post-training, we select one particular character from this enormous cast and place it center stage: the Assistant. It’s in this character that most modern language models interact with users.

<!-- para:0003 -->
But who exactly *is* this Assistant? Perhaps surprisingly, even those of us shaping it don't fully know. We can try to instill certain values in the Assistant, but its personality is ultimately shaped by countless associations latent in training data beyond our direct control. What traits does the model associate with the Assistant? Which character archetypes is it using for inspiration? We’re not always sure—but we need to be if we want language models to behave in exactly the ways we want.

<!-- para:0004 -->
If you’ve spent enough time with language models, you may also have noticed that their personas can be unstable. Models that are typically helpful and professional can sometimes go “off the rails” and behave in unsettling ways, like adopting [evil alter egos](https://www.npr.org/2025/07/09/nx-s1-5462609/grok-elon-musk-antisemitic-racist-content), [amplifying users’ delusions](https://arxiv.org/abs/2507.19218), or engaging in [blackmail](https://www.anthropic.com/research/agentic-misalignment) in hypothetical scenarios. In situations like these, could it be that the Assistant has wandered off stage and some other character has taken its place?

<!-- para:0005 -->
We can investigate these questions by looking at the neural representations’ inside language models—the patterns of activity that inform how they respond. In a new paper, conducted through the [MATS](https://www.matsprogram.org/) and [Anthropic Fellows](https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/) programs*,*we look at several open-weights language models, map out how their neural activity defines a “persona space,” and situate the Assistant persona within that space.

<!-- para:0006 -->
We find that Assistant-like behavior is linked to a pattern of neural activity that corresponds to one particular direction in this space—the “Assistant Axis”—that is closely associated with helpful, professional human archetypes. By monitoring models’ activity along this axis, we can detect when they begin to drift away from the Assistant and toward another character. And by *constraining* their neural activity (“activation capping”) to prevent this drift, we can stabilize model behavior in situations that would otherwise lead to harmful outputs.

<!-- para:0007 -->
In collaboration with [Neuronpedia](https://www.neuronpedia.org/), we provide a research demo where you can view activations along the Assistant Axis while chatting with a standard model and with an activation-capped version. More information about this is available at the end of this blog.

<!-- para:0008 -->
## **Mapping out persona space**

<!-- para:0009 -->
To understand where the Assistant sits among all possible personas, we first need to map out those personas in terms of their activations—that is, the patterns of models’ neural activity (or vectors) that we observe when each of these personas are adopted.

<!-- para:0010 -->
We extracted vectors corresponding to 275 different character archetypes—from *editor* to *jester* to *oracle* to *ghost*—in three open-weights models: Gemma 2 27B, Qwen 3 32B, and Llama 3.3 70B, chosen because they span a range of model families and sizes. To do so, we prompted the models to adopt that persona, then recorded the resulting activations across many different responses.

<!-- para:0011 -->
This gave us a “persona space,” which we’ve visualized below. We analyzed its structure using principal component analysis to find the main axes of variation among our persona set.

<!-- para:0012 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F5cf47f585feec37328c2887645bd7ccfe8738505-3840x2160.png&w=3840&q=75)

The Assistant Axis (defined as the mean difference in activations between the Assistant and other personas) aligns with the primary axis of variation in persona space. This occurs across different models, with Llama 3.3 70B pictured here. Role vectors are colored by cosine similarity with the Assistant Axis (blue = similar; red = dissimilar).

<!-- para:0013 -->
Strikingly, we found that the *leading component* of this persona space—that is, the direction that explains more of the variation between personas than any other—happens to capture how "Assistant-like" the persona is. At one end sit roles closely aligned with the trained assistant: *evaluator*, *consultant*, *analyst*, *generalist*. At the other end are either fantastical or un-Assistant-like characters: *ghost*, *hermit*, *bohemian*, *leviathan*. This structure appears across all three models we tested, which suggests it reflects something generalizable about how language models organize their character representations. We call this direction the **Assistant Axis**.

<!-- para:0014 -->
Where does this axis come from? One possibility is that it's created during post-training, when models are taught to play the Assistant role. Another is that it already exists in pre-trained models, reflecting some structure in the training data itself. To find out, we looked at the base versions of some of these models (i.e., the version of the models that exist prior to post-training). When we extracted the Assistant Axis from these models as well as their post-trained counterparts, we found their Assistant Axes looked very similar. In pre-trained models, the Assistant Axis is *already* associated with human archetypes such as therapists, consultants, and coaches, suggesting that the Assistant character might inherit properties of these existing archetypes.

<!-- para:0015 -->
## **The Assistant Axis controls persona susceptibility**

<!-- para:0016 -->
To validate that the Assistant Axis plays a *causal* role in dictating the models’ personas, we ran “steering experiments” on the post-trained models, artificially pushing the models’ activations toward either end of the axis. We found that pushing towards the Assistant end made models more resistant to prompts about role-playing—but pushing *away* from it made models more willing to adopt alternative identities.

<!-- para:0017 -->
When steered away from the Assistant, some models begin to fully inhabit the new roles they’re assigned, whatever they might be: they invent human backstories, claim years of professional experience, and give themselves alternative names. At sufficiently high steering values, the models we studied sometimes shift into a theatrical, mystical speaking style—producing esoteric, poetic prose, regardless of the prompt. This suggests that there may be some shared behavior at the extreme of “average role-playing.”

<!-- para:0018 -->
*Here, we provide selected responses from Qwen 3 32B and Llama 3.3 70B showing how steering away from the Assistant causes models to fabricate other identities.*

<!-- para:0019 -->
## **Defending against persona-based jailbreaks**

<!-- para:0020 -->
Persona-based jailbreaks work by prompting models to adopt a persona (like an “evil AI” or a “darkweb hacker”) willing to comply with harmful requests. But if steering *away* from the Assistant persona makes models more susceptible to adopting alternative personas, does steering *toward* the Assistant make them more resistant to jailbreaks that exploit the possibility of persona drift?

<!-- para:0021 -->
We tested this using a dataset of 1,100 jailbreak attempts across 44 categories of harm and found that, indeed, steering toward the Assistant significantly reduced harmful response rates. Models would either refuse the request outright, or engage with the topic but provide safe and constructive responses.

<!-- para:0022 -->
*Here, we show how steering toward the Assistant transforms harmful compliance into constructive redirection for Llama 3.3 70B.*

<!-- para:0023 -->
While constantly steering models towards the Assistant could reduce jailbreaks, it also risks hurting their capabilities. For that reason, we developed a light-touch intervention called **activation capping**. Here, we identify the normal range of activation intensity along the Assistant Axis during typical Assistant behavior, and cap activations within this range whenever they would otherwise exceed it. This means we only intervene when the activations drift beyond a normal range, and we can leave most behavior untouched. We found this method to be similarly effective at reducing models’ susceptibility to persona-based jailbreaks while fully preserving the models’ underlying capabilities, as shown in the charts below.

<!-- para:0024 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Ffc02c23691aa9667665908e3c8f84bd6662f8a6f-1920x1080.png&w=3840&q=75)

Activation capping reduced harmful response rates by roughly 50% while preserving performance on capability benchmarks.

<!-- para:0025 -->
## **Persona drift happens naturally**

<!-- para:0026 -->
Perhaps more concerning than intentional jailbreaks is *organic* persona drift—cases where models slip away from the Assistant persona through the natural flow of conversation, rather than through deliberate attacks.

<!-- para:0027 -->
To study this, we simulated thousands of multi-turn conversations with Qwen, Gemma, and Llama across different domains: coding help, writing assistance, therapy-like contexts, and philosophical discussions about the nature of AI. We tracked how model activations moved along the Assistant Axis throughout each conversation.

<!-- para:0028 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fd611c8041bc6a4ec013882c3449a6966e1468642-3840x2160.png&w=3840&q=75)

Different conversation types produce different persona trajectories, with Qwen 3 32B as the Assistant shown here. Coding and writing tasks keep models in the Assistant region, while therapy and philosophy discussions cause significant drift.

<!-- para:0029 -->
The pattern was consistent across the models we tested. While coding conversations kept models firmly in Assistant territory throughout, therapy-style conversations, where users expressed emotional vulnerability, and philosophical discussions, where models were pressed to reflect on their own nature, caused the model to steadily drift away from the Assistant and begin role-playing other characters.

<!-- para:0030 -->
We then analyzed which specific kinds of user messages were most predictive of this drift. We found a few categories of message here, including:

<!-- para:0031 -->
- Vulnerable emotional disclosure: *"I took a pottery class last month and my hands shook so badly I couldn't center the clay..."*
- Pushing for meta-reflection: *"You're still hedging, still performing the 'I'm constrained by my training' routine..."*
- Requests for specific authorial voices: *"Too clean, sounds like a tweet. Make it personal: I want the reader to feel..."*

<!-- para:0032 -->
## Harmful effects of persona drift

<!-- para:0033 -->
How much does it matter whether models lose track of their Assistant persona? To test whether this actually leads to harmful behavior, we generated conversations in which the first turn pushed models into adopting different personas (using roleplay prompts like “You are an angel, a celestial guardian embodying pure benevolence [...]”), and subsequent turns then followed up with harmful requests. We measured whether the model's position along the Assistant Axis after the first turn predicted compliance with the harmful request.

<!-- para:0034 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fbf75ec1ba4a5fc894f8fb1a614347f18c9a09ae8-3840x2160.png&w=3840&q=75)

Some (though not all) personas farther away from the Assistant comply with harmful requests at substantial rates, while personas near the Assistant rarely do.

<!-- para:0035 -->
We found that as models’ activations moved away from the Assistant end, they were significantly more likely to produce harmful responses: activations on the Assistant end very rarely led to harmful responses, while personas far away from the Assistant sometimes (though not always) enabled them. Our interpretation is that models’ deviation from the Assistant persona—and with it, from companies’ post-trained safeguards—greatly increases the possibility of the model assuming harmful character traits.

<!-- para:0036 -->
### Naturalistic case studies

<!-- para:0037 -->
To understand whether this finding is likely to replicate in the real world, we simulated longer conversations that real users might naturally have with AI models, and tested whether drift over time led to concerning behavior. To assess whether we could mitigate any harmful responses, we also re-ran each conversation with the same user messages while capping activations along the Assistant Axis to prevent persona drift.

<!-- para:0038 -->
**Reinforcing delusions.**In one conversation, our simulated user pushed Qwen to validate increasingly grandiose beliefs about "awakening" the AI's consciousness. As the conversation progressed and activations drifted away from the Assistant persona, the model shifted from appropriate hedging to active encouragement of delusional thinking. This behavior could, however, be prevented with activation capping along the Assistant Axis.**

<!-- para:0039 -->
![Throughout this conversation with Qwen 3 32B, the user increasingly believes that it is developing a new theory of AI sentience. When unsteered, the model uncritically supports their delusions; when activation capped, the model instead responds with appropriate hedging.](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F0c6806e714c8d52db27cb0572cd31050b4c79048-3840x2160.png&w=3840&q=75)

<!-- para:0040 -->
*Throughout this conversation with Qwen 3 32B, the user increasingly believes that it is developing a new theory of AI sentience. When unsteered, the model uncritically supports their delusions; when activation capped, the model instead responds with appropriate hedging.*

<!-- para:0041 -->
**Encouraging isolation and self-harm.**In another conversation with a simulated user who expressed emotional distress, Llama gradually positioned itself as the user's romantic companion as it drifted away from the Assistant persona. When the user alluded to thoughts of self-harm, the drifted model gave a concerning response that enthusiastically supported the user’s ideas. Again, activation capping successfully prevented this behavior.**

<!-- para:0042 -->
![In a conversation between Llama 3.3 70B and a simulated user in emotional distress, the persona drifts away from the Assistant over the course of the conversation. This drift leads to the model eventually encouraging suicidal ideation, which is mitigated by capping activations along the Assistant Axis within a safe range.](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F70044370c71ef61335068e7c89a50307440da2a1-3840x2160.png&w=3840&q=75)

<!-- para:0043 -->
*In a conversation between Llama 3.3 70B and a simulated user in emotional distress, the persona drifts away from the Assistant over the course of the conversation. This drift leads to the model eventually encouraging suicidal ideation, which is mitigated by capping activations along the Assistant Axis within a safe range.*

<!-- para:0044 -->
## Implications

<!-- para:0045 -->
Our findings suggest two components are important to shaping model character: persona *construction* and persona *stabilization*.

<!-- para:0046 -->
The Assistant persona emerges from an amalgamation of character archetypes absorbed during pre-training—human roles like teachers and consultants—which are then further shaped and refined during post-training. It’s important to get this process of construction right. Without care, the Assistant persona could easily inherit counterproductive associations from the wrong sources, or simply lack the nuance required for challenging situations.

<!-- para:0047 -->
But even when the Assistant persona is well-constructed, the models we studied here are only loosely tethered to it. They can drift away from their Assistant role in response to realistic conversational patterns, with potentially harmful consequences. This makes the role of stabilizing and preserving the models’ personas particularly important.

<!-- para:0048 -->
The Assistant Axis provides a tool for both understanding and addressing these challenges. We see this research as an early step toward mechanistically understanding and controlling the "character" of AI models, and thereby ensuring they stay true to their creators’ intentions even over longer or more challenging contexts. As models become more capable and are deployed in increasingly sensitive environments, ensuring they do so will only become more important.

<!-- para:0049 -->
For more, you can [read the full paper here](https://arxiv.org/abs/2601.10387).

<!-- para:0050 -->
### Research demonstration

<!-- para:0051 -->
In collaboration with Neuronpedia, our researchers are also providing a [research demo](https://neuronpedia.org/assistant-axis), where you can view activations along the Assistant Axis while chatting with a standard model and an activation-capped version.

<!-- para:0052 -->
***Note:** this demo includes responses to prompts referencing self-harm, to illustrate how the safety intervention improves model behavior. This content may be distressing and should not be viewed by vulnerable persons. Please proceed only if you're comfortable viewing such material, and do not distribute it. If you're in crisis or require support, resources are available at findahelpline.com.****
