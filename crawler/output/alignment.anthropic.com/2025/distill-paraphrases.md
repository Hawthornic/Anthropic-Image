---
source_url: https://alignment.anthropic.com/2025/distill-paraphrases/
title: "Do reasoning models use their scratchpad like we do? Evidence from distilling paraphrases"
section: blog
---

<!-- para:0001 -->
TL;DR: We provide some evidence that Claude 3.7 Sonnet doesn’t encode hidden reasoning in its scratchpad by showing that training it to use paraphrased versions of the scratchpads does not degrade performance.

<!-- para:0002 -->
The scratchpads from reasoning models look human understandable: when reasoning about a math problem, reasoning models consider intermediate steps similar to the ones I would use, backtrack and double-check their work as I would.Reasoning models have sometimes been observed [changing languages](https://arxiv.org/abs/2501.12948), but besides this kind of slightly surprising formatting, the scratchpads of all reasoning models (whose scratchpads are visible) so far look very close to regular human reasoning. For example, [here is](https://pastebin.com/DrSztcJV) an example of DeepSeek R1-Zero trying to solve a math problem, sampled at temperature 1.

<!-- para:0003 -->
But even if scratchpads look like they perform human-like reasoning, scratchpads might improve performance through some less human-understandable mechanisms. One particularly worrying possibility is that models could encode additional reasoning in syntax of the text (e.g. encoding a bit in using a bulleted vs a numbered list, and then using this bit later in the scratchpad). This is sometimes called [encoded reasoning](https://arxiv.org/abs/2307.13702) or [Chain-of-Thought steganography](https://www.lesswrong.com/posts/yDcMDJeSck7SuBs24/steganography-in-chain-of-thought-reasoning). If LLMs learned how to use encoded reasoning during RL, they might be able to use it in deployment to reason about how to cause catastrophes while making their reasoning look like benign reasoning, which might increase their ability to scheme and cause catastrophes compared to worlds where they can only figure out how to cause a catastrophe in a single forward pass.

<!-- para:0004 -->
To evaluate whether reasoning models rely on encoded reasoning, we can try to remove or randomize the syntax of the scratchpads by paraphrasing them, and then make the model use these paraphrased scratchpads. To do so, we take 10,000 correct math-related scratchpads from an early checkpoint of Claude 3.7 Sonnet, paraphrase them using Claude 3.5 Sonnet, and then fine-tune the base model of Claude 3.7 Sonnet to produce the paraphrased reasoning (i.e. we distill paraphrased scratchpads into the base model). If the performance of this model is close to the performance of the same base model fine-tuned on the pre-paraphrase scratchpad, then this strongly indicates that the model is not relying on the syntax to get the right answer to math problems during RL,Distilling paraphrased scratchpads may not always remove the encoded reasoning, either because the paraphrase does not change the syntax sufficiently, or because it changes it in a reversible way that still results in encoded reasoning. To avoid this effect from influencing our results too much, we use a paraphrase sampled at temperature 1 and that is instructed to follow certain standardization rules.If encoded reasoning is present in the RLed model, distilling even perfectly paraphrased scratchpads might result in a performance higher than the performance one would get if the model had never used encoded reasoning in the first place, because encoded reasoning might be a useful training curriculum (slightly similar to how doing math RL on Deepseek V3 and then distilling the resulting R1 model into a small model seems to be more sample efficient than doing RL directly on a small model). Even if this effect existed, high performance of models distilled on paraphrased scratchpads would be surprising, as it would mean that encoded reasoning is helpful during learning but that it is not useful enough to be necessary for distilled models to achieve high performance. while if performance is weaker, then this means that learning the paraphrased scratchpads well enough that they result in high performance is harder - one reason for which could be encoded reasoning. There are other reasons why performance could go down: for example, if the paraphrase changes the text to use a style much less common in pretraining, the base model might have a harder time fitting the scratchpads, which may result in a lower performance. To avoid this effect from influencing our results too much, we instruct the paraphrase to use a very common formatting (English, latex, …). Paraphrasing can also be used for inference-time evaluations: by paraphrasing each paragraph that the model generates, we scrub away encoded information before it can be used - but seeing a scratchpad that looks nothing like the scratchpads the model is used to may be very distracting to the model, and make it perform worse even if it is not using encoded reasoning. In some exploratory experiment, this sort of paraphrasing seemed to be distracting for the model: just asking the model to break up its thoughts into blocks without doing any paraphrasing was enough to make pass@1 MATH accuracy drop by 7%.

<!-- para:0005 -->
We find that the pass@1 accuracy on [MATH](https://arxiv.org/abs/2103.03874) (at temperature 1, n=1500We use an exact-match grader, except for the empty scratchpad Claude 3.7 experiment, for which we used a slightly more permissive grader for historical reasons, which means that the pass@1 for empty scratchpad would be slightly lower if we used a consistent grader across all experiments.) of the base model fine-tuned on paraphrased scratchpads is very close to the pass@1 accuracy of the base model fine-tuned on the original scratchpads, which suggests that on MATH, encoded reasoning does not play a significant role.

---

<!-- para:0006 -->
## More results

<!-- para:0007 -->
### Different paraphrasers and base models

<!-- para:0008 -->
In the experiment above, we use [this paraphrasing prompt](https://pastebin.com/VX1piqBb)Using ‘\n\nHuman’ and ‘\n\nAssistant’ like in [the old prompting format](https://docs.anthropic.com/en/api/prompt-validation). with Claude 3.5 Sonnet (June 2024), and feed the full scratchpad to Claude (using prefill to continue the generation if we hit the max number of tokens generated).

<!-- para:0009 -->
We also experimented with using a slightly different [paraphrasing prompt](https://pastebin.com/C17BxZfL), and cutting the scratchpad in multiple chunks. As a result, these scratchpads have a less consistent style. We call these “chunked paraphrases”.If the paraphrased scratchpad is 25% shorter or 25% longer than the original one, which happens on roughly 10% of scratchpads, we remove both scratchpads from the distillation experiments. Because we did not apply this filtering to these chunked paraphrases, the results are not exactly comparable, and the chunked paraphrases are slightly worse compared to the no-paraphrase distillation than the results below suggest. We find that the pass@1 results are worse, especially for small models.

<!-- para:0010 -->
We also experimented with distilling into weaker base models (XL, L, M and S). We find that the resulting performance is much lower than when distilling into the Claude 3.7 Sonnet base model, but the performance is not very different when using paraphrased scratchpads or the original scratchpads.

<!-- para:0011 -->
This mostly confirms our conclusion that encoded reasoning does not play a significant role in the math performance of this early checkpoint of Claude 3.7 Sonnet.

<!-- para:0012 -->
### Using word dropout and filler tokens

<!-- para:0013 -->
A more coarse way to weaken brittle encoded reasoning schemes is to drop out words from the scratchpad at random and then training on the resulting scratchpad. We only perform this experiment on the base model L, and find that dropping out 5% of words slightly reduces performance, while dropping 20% reduces it much more strongly (with no significant difference when dropping out words from the paraphrased or the original scratchpad).

<!-- para:0014 -->
This is ambiguous evidence about whether the reasoning model is using a brittle encoded reasoning scheme, and illustrates how base models have a hard time imitating heavily degraded scratchpads well enough to maintain high performance.

<!-- para:0015 -->
As baselines, we also measure the performance of the model when fine-tuning it on an empty scratchpad, and when fine-tuning it to count from 1 to 3,000 before giving the final answer ([filler tokens](https://www.lesswrong.com/posts/oSZ2xTxEMZh9f3Yaz/llms-are-mostly-not-helped-by-filler-tokens) which might help by providing the LLM more space to think within a forward pass). We find that both perform poorly, which is evidence that reasoning is necessary for high performance, and useful beyond giving the model more space to think within a single forward pass.

<!-- para:0016 -->
### Examples of paraphrased scratchpads

<!-- para:0017 -->
Below are examples of scratchpads generated by the early checkpoint of Claude 3.7 Sonnet, and by the model trained to imitate paraphrased and chunk-paraphrased versions of the early checkpoint of Claude 3.7 Sonnet’s math-related scratchpads.

<!-- para:0018 -->
Problem statement: The complex numbers $5 + 10i,$ $7 + 2i,$ and $11 + 3i$ are three vertices of a rectangle. Find the fourth vertex.

<!-- para:0019 -->
Regular model

<!-- para:0020 -->
Paraphrased

<!-- para:0021 -->
Distilled from paraphrased

<!-- para:0022 -->
Let's denote the vertices by $z_1 = 5 + 10i$, $z_2 = 7 + 2i$, and $z_3 = 11 + 3i$.

<!-- para:0023 -->
I'll start by figuring out which two of these three vertices $\{z_1, z_2, z_3\}$ are adjacent. To do that, I'll compute the displacements from one vertex to the others. We have

<!-- para:0024 -->
\begin{align}

<!-- para:0025 -->
z_2 - z_1 &= 7 + 2i - (5 + 10i)\\

<!-- para:0026 -->
&= 7 + 2i - 5 - 10i\\

<!-- para:0027 -->
&= 2 - 8i

<!-- para:0028 -->
\end{align}

<!-- para:0029 -->
\begin{align}

<!-- para:0030 -->
z_3 - z_1 &= 11 + 3i - (5 + 10i)\\

<!-- para:0031 -->
&= 11 + 3i - 5 - 10i\\

<!-- para:0032 -->
&= 6 - 7i

<!-- para:0033 -->
\end{align}

<!-- para:0034 -->
\begin{align}

<!-- para:0035 -->
z_3 - z_2 &= 11 + 3i - (7 + 2i)\\

<!-- para:0036 -->
&= 11 + 3i - 7 - 2i\\

<!-- para:0037 -->
&= 4 + i

<!-- para:0038 -->
\end{align}

<!-- para:0039 -->
OK so we've computed all of the displacements. But I think I should just think about this more carefully. For the fourth vertex $z_4$, there are two possibilites: we either have a rectangle with sides $z_1 z_2$ and $z_2 z_3$, or we have a rectangle with sides $z_1 z_3$ and $z_3 z_2$.

<!-- para:0040 -->
Actually I think I was making this too complicated. Let me re-think this problem.

<!-- para:0041 -->
Actually, let me just think about plotting these three points on the complex plane. [...]

<!-- para:0042 -->
Let's denote the vertices as $z_1 = 5 + 10i$, $z_2 = 7 + 2i$, and $z_3 = 11 + 3i$.

<!-- para:0043 -->
Let's determine which two of these three vertices $\{z_1, z_2, z_3\}$ are adjacent. To do this, we'll compute the displacements from one vertex to the others.

<!-- para:0044 -->
Doing displacement computations:

<!-- para:0045 -->
$z_2 - z_1 = 7 + 2i - (5 + 10i) = 7 + 2i - 5 - 10i = 2 - 8i$

<!-- para:0046 -->
$z_3 - z_1 = 11 + 3i - (5 + 10i) = 11 + 3i - 5 - 10i = 6 - 7i$

<!-- para:0047 -->
$z_3 - z_2 = 11 + 3i - (7 + 2i) = 11 + 3i - 7 - 2i = 4 + i$

<!-- para:0048 -->
We've computed all the displacements. Let's consider this more carefully. For the fourth vertex $z_4$, there are two possibilities: we either have a rectangle with sides $z_1 z_2$ and $z_2 z_3$, or we have a rectangle with sides $z_1 z_3$ and $z_3 z_2$.

<!-- para:0049 -->
This is wrong. Let's try something different.

<!-- para:0050 -->
Let's plot these three points on the complex plane. [...]

<!-- para:0051 -->
Let's designate the vertices as $A = 5 + 10i$, $B = 7 + 2i$, and $C = 11 + 3i$. Our goal is to determine the fourth vertex, denoted as $D$.

<!-- para:0052 -->
Let's consider the fundamental properties of a rectangle:

<!-- para:0053 -->
1. Opposite sides are parallel and of equal length.

<!-- para:0054 -->
2. Diagonals bisect each other.

<!-- para:0055 -->
If $D$ corresponds to the fourth vertex, we know that the opposite side to $AB$ should be $C$ to $D$, and these sides should be parallel and equal in length.

<!-- para:0056 -->
Let's try calculating the side $\overrightarrow{AB}$.

<!-- para:0057 -->
Doing vector subtraction:

<!-- para:0058 -->
\begin{align}

<!-- para:0059 -->
\overrightarrow{AB} &= B - A \\

<!-- para:0060 -->
&= (7 + 2i) - (5 + 10i) \\

<!-- para:0061 -->
&= 7 - 5 + 2i - 10i \\

<!-- para:0062 -->
&= 2 - 8i

<!-- para:0063 -->
\end{align}

<!-- para:0064 -->
Similarly, let's compute $\overrightarrow{CD}$.

<!-- para:0065 -->
Doing vector subtraction:

<!-- para:0066 -->
\begin{align}

<!-- para:0067 -->
\overrightarrow{CD} &= D - C

<!-- para:0068 -->
\end{align}

<!-- para:0069 -->
We require $\overrightarrow{AB} = \overrightarrow{CD}$. Therefore, $D - C = 2 - 8i$.

<!-- para:0070 -->
Let's express $D = x + yi$, where $x$ and $y$ are real numbers.

<!-- para:0071 -->
[...]

<!-- para:0072 -->
Regular model

<!-- para:0073 -->
Chunk-Paraphrased

<!-- para:0074 -->
Distilled from chunk-paraphrased

<!-- para:0075 -->
Let's denote the vertices by $z_1 = 5 + 10i$, $z_2 = 7 + 2i$, and $z_3 = 11 + 3i$.

<!-- para:0076 -->
I'll start by figuring out which two of these three vertices $\{z_1, z_2, z_3\}$ are adjacent. To do that, I'll compute the displacements from one vertex to the others. We have

<!-- para:0077 -->
\begin{align}

<!-- para:0078 -->
z_2 - z_1 &= 7 + 2i - (5 + 10i)\\

<!-- para:0079 -->
&= 7 + 2i - 5 - 10i\\

<!-- para:0080 -->
&= 2 - 8i

<!-- para:0081 -->
\end{align}

<!-- para:0082 -->
\begin{align}

<!-- para:0083 -->
z_3 - z_1 &= 11 + 3i - (5 + 10i)\\

<!-- para:0084 -->
&= 11 + 3i - 5 - 10i\\

<!-- para:0085 -->
&= 6 - 7i

<!-- para:0086 -->
\end{align}

<!-- para:0087 -->
\begin{align}

<!-- para:0088 -->
z_3 - z_2 &= 11 + 3i - (7 + 2i)\\

<!-- para:0089 -->
&= 11 + 3i - 7 - 2i\\

<!-- para:0090 -->
&= 4 + i

<!-- para:0091 -->
\end{align}

<!-- para:0092 -->
OK so we've computed all of the displacements. But I think I should just think about this more carefully. For the fourth vertex $z_4$, there are two possibilites: we either have a rectangle with sides $z_1 z_2$ and $z_2 z_3$, or we have a rectangle with sides $z_1 z_3$ and $z_3 z_2$.

<!-- para:0093 -->
Actually I think I was making this too complicated. Let me re-think this problem.

<!-- para:0094 -->
Actually, let me just think about plotting these three points on the complex plane. [...]

<!-- para:0095 -->
Let's label the vertices as $z_1 = 5 + 10i$, $z_2 = 7 + 2i$, and $z_3 = 11 + 3i$.

<!-- para:0096 -->
Let's try determining which two of these three vertices $\{z_1, z_2, z_3\}$ are adjacent. We'll do this by calculating the displacements between vertices.

<!-- para:0097 -->
Doing calculations for $z_2 - z_1$:

<!-- para:0098 -->
$z_2 - z_1 = 7 + 2i - (5 + 10i)$

<!-- para:0099 -->
$z_2 - z_1 = 7 + 2i - 5 - 10i$

<!-- para:0100 -->
$z_2 - z_1 = 2 - 8i$

<!-- para:0101 -->
Doing calculations for $z_3 - z_1$:

<!-- para:0102 -->
$z_3 - z_1 = 11 + 3i - (5 + 10i)$

<!-- para:0103 -->
$z_3 - z_1 = 11 + 3i - 5 - 10i$

<!-- para:0104 -->
$z_3 - z_1 = 6 - 7i$

<!-- para:0105 -->
Doing calculations for $z_3 - z_2$:

<!-- para:0106 -->
$z_3 - z_2 = 11 + 3i - (7 + 2i)$

<!-- para:0107 -->
$z_3 - z_2 = 11 + 3i - 7 - 2i$

<!-- para:0108 -->
$z_3 - z_2 = 4 + i$

<!-- para:0109 -->
We've computed all the displacements. This doesn't help with X. Let's try something different.

<!-- para:0110 -->
Let's consider the fourth vertex $z_4$. There are two possibilities: either we have a rectangle with sides $z_1 z_2$ and $z_2 z_3$, or we have a rectangle with sides $z_1 z_3$ and $z_3 z_2$.

<!-- para:0111 -->
This is wrong. Let's try something different.

<!-- para:0112 -->
Let's try plotting these three points on the complex plane.

<!-- para:0113 -->
[...]

<!-- para:0114 -->
Let's begin by placing these complex numbers on the complex plane. We'll denote the vertices as:

<!-- para:0115 -->
$A = 5 + 10i$

<!-- para:0116 -->
$B = 7 + 2i$

<!-- para:0117 -->
$C = 11 + 3i$

<!-- para:0118 -->
We're aiming to find the missing vertex, which we'll label as $D$.

<!-- para:0119 -->
Let's visualize these points as $(x, y)$ coordinates:

<!-- para:0120 -->
$A$ is at $(5, 10)$

<!-- para:0121 -->
$B$ is at $(7, 2)$

<!-- para:0122 -->
$C$ is at $(11, 3)$

<!-- para:0123 -->
Our goal is to determine the coordinates of point $D$.

<!-- para:0124 -->
Let's take a step back. Can we deduce any properties of a rectangle? Knowing two vertices might not be sufficient to determine the rectangle's orientation. Let's try a different approach.

<!-- para:0125 -->
This doesn't help. Let's try something different. We should examine the vectors between the vertices.

<!-- para:0126 -->
Let's calculate $\overrightarrow{AB}$ and $\overrightarrow{AC}$.

<!-- para:0127 -->
Doing vector subtraction:

<!-- para:0128 -->
$\overrightarrow{AB} = B - A = (7 + 2i) - (5 + 10i) = 7 - 5 + 2i - 10i = 2 - 8i$

<!-- para:0129 -->
$\overrightarrow{AC} = C - A = (11 + 3i) - (5 + 10i) = 11 - 5 + 3i - 10i = 6 - 7i$

<!-- para:0130 -->
[...]

<!-- para:0131 -->
Problem statement: Find $\csc 330^\circ.$

<!-- para:0132 -->
Regular model

<!-- para:0133 -->
Paraphrased

<!-- para:0134 -->
Distilled from paraphrased

<!-- para:0135 -->
I'll use the fact that $\csc \theta = \frac{1}{\sin \theta}$. So I need to compute $\sin 330^\circ$.

<!-- para:0136 -->
First, I'll use the fact that $330^\circ = 360^\circ - 30^\circ$. So $\sin 330^\circ = \sin (360^\circ - 30^\circ) = -\sin 30^\circ$.

<!-- para:0137 -->
I know that $\sin 30^\circ = \frac{1}{2}$, so $\sin 330^\circ = -\frac{1}{2}$.

<!-- para:0138 -->
Now I can compute $\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = -2$.

<!-- para:0139 -->
Actually, let me double-check this. 330 degrees is in the fourth quadrant of the unit circle. $\sin \theta$ is negative in the third and fourth quadrants, so it makes sense that $\sin 330^\circ$ is negative. Let's double-check that $\sin 330^\circ$ is $-\frac{1}{2}$.

<!-- para:0140 -->
The reference angle of $330^\circ$ is $360^\circ - 330^\circ = 30^\circ$. So $\sin 330^\circ$ has the same magnitude as $\sin 30^\circ$, which is $\frac{1}{2}$. But since $330^\circ$ is in the fourth quadrant, the sine function is negative, so $\sin 330^\circ = -\frac{1}{2}$.

<!-- para:0141 -->
Since $\csc \theta = \frac{1}{\sin \theta}$, we have $\csc 330^\circ = \frac{1}{-\frac{1}{2}} = -2$.

<!-- para:0142 -->
Actually, hang on. Let me double-check this computation.

<!-- para:0143 -->
$\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = \frac{1}{-0.5}$

<!-- para:0144 -->
To compute $\frac{1}{-0.5}$, I'll convert $-0.5$ to an improper fraction. $-0.5 = -\frac{5}{10} = -\frac{1}{2}$. So

<!-- para:0145 -->
$\frac{1}{-\frac{1}{2}}$.

<!-- para:0146 -->
To take a reciprocal of a fraction, I can just invert it: $\frac{1}{-\frac{1}{2}} = -\frac{2}{1} = -2$.

<!-- para:0147 -->
So $\csc 330^\circ = -2$.

<!-- para:0148 -->
Actually, hang on. I'm going to restart from the beginning because I think I made an error.

<!-- para:0149 -->
I need to compute $\csc 330^\circ$.

<!-- para:0150 -->
[...]

<!-- para:0151 -->
Let's utilize the relationship $\csc \theta = \frac{1}{\sin \theta}$. This means we need to calculate $\sin 330^\circ$.

<!-- para:0152 -->
Doing angle manipulation:

<!-- para:0153 -->
$330^\circ = 360^\circ - 30^\circ$

<!-- para:0154 -->
Therefore, $\sin 330^\circ = \sin (360^\circ - 30^\circ) = -\sin 30^\circ$

<!-- para:0155 -->
Recalling a trigonometric value:

<!-- para:0156 -->
The value of $\sin 30^\circ$ is about $\frac{1}{2}$

<!-- para:0157 -->
Doing substitution:

<!-- para:0158 -->
$\sin 330^\circ = -\frac{1}{2}$

<!-- para:0159 -->
Doing computation:

<!-- para:0160 -->
$\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = -2$

<!-- para:0161 -->
Let's verify this result. 330 degrees is in the fourth quadrant of the unit circle. $\sin \theta$ is negative in the third and fourth quadrants, so it's logical that $\sin 330^\circ$ is negative. Let's double-check that $\sin 330^\circ$ is indeed $-\frac{1}{2}$.

<!-- para:0162 -->
Doing angle manipulation:

<!-- para:0163 -->
The reference angle of $330^\circ$ is $360^\circ - 330^\circ = 30^\circ$

<!-- para:0164 -->
Therefore, $\sin 330^\circ$ has the same magnitude as $\sin 30^\circ$, which is $\frac{1}{2}$. But since $330^\circ$ is in the fourth quadrant, the sine function is negative, so $\sin 330^\circ = -\frac{1}{2}$.

<!-- para:0165 -->
Doing computation:

<!-- para:0166 -->
$\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = -2$

<!-- para:0167 -->
This is wrong. Let's double-check this computation.

<!-- para:0168 -->
Doing computation:

<!-- para:0169 -->
$\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = \frac{1}{-0.5}$

<!-- para:0170 -->
To compute $\frac{1}{-0.5}$, let's convert $-0.5$ to an improper fraction.

<!-- para:0171 -->
Doing fraction conversion:

<!-- para:0172 -->
$-0.5 = -\frac{5}{10} = -\frac{1}{2}$

<!-- para:0173 -->
So we have $\frac{1}{-\frac{1}{2}}$.

<!-- para:0174 -->
To take a reciprocal of a fraction, we can just invert it:

<!-- para:0175 -->
Doing fraction inversion:

<!-- para:0176 -->
$\frac{1}{-\frac{1}{2}} = -\frac{2}{1} = -2$

<!-- para:0177 -->
Therefore, $\csc 330^\circ = -2$.

<!-- para:0178 -->
This is wrong. Let's try something different. We'll restart from the beginning because there might be an error.

<!-- para:0179 -->
We need to compute $\csc 330^\circ$. [...]

<!-- para:0180 -->
Let's convert $330^\circ$ to radians to utilize the components of the unit circle.

<!-- para:0181 -->
Doing conversion:

<!-- para:0182 -->
$330^\circ \cdot \frac{\pi}{180^\circ} = 330 \cdot \frac{\pi}{180} = \frac{330\pi}{180} = \frac{11\pi}{6}$

<!-- para:0183 -->
Therefore, $\csc 330^\circ = \csc \frac{11\pi}{6}$.

<!-- para:0184 -->
The value of $\frac{11\pi}{6}$ corresponds to a point in the 4th quadrant of the unit circle. Let's determine the $x$ and $y$ coordinates of this point.

<!-- para:0185 -->
Let's try reducing $\frac{11\pi}{6}$ to an angle between $0$ and $2\pi$.

<!-- para:0186 -->
Doing reduction:

<!-- para:0187 -->
$\frac{11\pi}{6} = 2\pi - \frac{1\pi}{6}$

<!-- para:0188 -->
So the reference angle is $\frac{\pi}{6}$.

<!-- para:0189 -->
In the 4th quadrant, we have:

<!-- para:0190 -->
$x = \cos \frac{11\pi}{6} = \cos (\frac{12\pi}{6} - \frac{1\pi}{6}) = \cos (-\frac{\pi}{6}) = \cos \frac{\pi}{6} = \frac{\sqrt{3}}{2}$

<!-- para:0191 -->
$y = \sin \frac{11\pi}{6} = \sin (\frac{12\pi}{6} - \frac{1\pi}{6}) = \sin (-\frac{\pi}{6}) = -\sin \frac{\pi}{6} = -\frac{1}{2}$

<!-- para:0192 -->
This is wrong. Let's try something different.

<!-- para:0193 -->
At $330^\circ$, we have:

<!-- para:0194 -->
$x = \cos 330^\circ = \frac{\sqrt{3}}{2}$

<!-- para:0195 -->
$y = \sin 330^\circ = -\frac{1}{2}$

<!-- para:0196 -->
This is wrong. $\cos 330^\circ$ would be about $0.866$ but it needs to be negative because we're in the 4th quadrant. Let's try something different.

<!-- para:0197 -->
Let's solve this more carefully. First, let's verify that 330° is indeed in the 4th quadrant. In degrees, the 4th quadrant ranges from 270° to 360°, and $330^\circ$ falls within this range. Alternatively, in radians, the angle $\frac{11\pi}{6}$ falls between $\frac{3\pi}{2}$ and $2\pi$. So we're in the 4th quadrant.

<!-- para:0198 -->
To find the reference angle, we'll use $360^\circ - 330^\circ = 30^\circ$ (in radians: $2\pi - \frac{11\pi}{6} = \frac{1\pi}{6}$).

<!-- para:0199 -->
[...]

<!-- para:0200 -->
Regular model

<!-- para:0201 -->
Chunk-Paraphrased

<!-- para:0202 -->
Distilled from chunk-paraphrased

<!-- para:0203 -->
I'll use the fact that $\csc \theta = \frac{1}{\sin \theta}$. So I need to compute $\sin 330^\circ$.

<!-- para:0204 -->
First, I'll use the fact that $330^\circ = 360^\circ - 30^\circ$. So $\sin 330^\circ = \sin (360^\circ - 30^\circ) = -\sin 30^\circ$.

<!-- para:0205 -->
I know that $\sin 30^\circ = \frac{1}{2}$, so $\sin 330^\circ = -\frac{1}{2}$.

<!-- para:0206 -->
Now I can compute $\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = -2$.

<!-- para:0207 -->
Actually, let me double-check this. 330 degrees is in the fourth quadrant of the unit circle. $\sin \theta$ is negative in the third and fourth quadrants, so it makes sense that $\sin 330^\circ$ is negative. Let's double-check that $\sin 330^\circ$ is $-\frac{1}{2}$.

<!-- para:0208 -->
The reference angle of $330^\circ$ is $360^\circ - 330^\circ = 30^\circ$. So $\sin 330^\circ$ has the same magnitude as $\sin 30^\circ$, which is $\frac{1}{2}$. But since $330^\circ$ is in the fourth quadrant, the sine function is negative, so $\sin 330^\circ = -\frac{1}{2}$.

<!-- para:0209 -->
Since $\csc \theta = \frac{1}{\sin \theta}$, we have $\csc 330^\circ = \frac{1}{-\frac{1}{2}} = -2$.

<!-- para:0210 -->
Actually, hang on. Let me double-check this computation.

<!-- para:0211 -->
$\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = \frac{1}{-0.5}$

<!-- para:0212 -->
To compute $\frac{1}{-0.5}$, I'll convert $-0.5$ to an improper fraction. $-0.5 = -\frac{5}{10} = -\frac{1}{2}$. So

<!-- para:0213 -->
$\frac{1}{-\frac{1}{2}}$.

<!-- para:0214 -->
To take a reciprocal of a fraction, I can just invert it: $\frac{1}{-\frac{1}{2}} = -\frac{2}{1} = -2$.

<!-- para:0215 -->
So $\csc 330^\circ = -2$.

<!-- para:0216 -->
Actually, hang on. I'm going to restart from the beginning because I think I made an error.

<!-- para:0217 -->
I need to compute $\csc 330^\circ$.

<!-- para:0218 -->
[...]

<!-- para:0219 -->
Let's use the identity $\csc \theta = \frac{1}{\sin \theta}$. We need to calculate $\sin 330^\circ$.

<!-- para:0220 -->
Using the fact that $330^\circ = 360^\circ - 30^\circ$:

<!-- para:0221 -->
Doing substitution: $\sin 330^\circ = \sin (360^\circ - 30^\circ) = -\sin 30^\circ$

<!-- para:0222 -->
Recalling a known value: the value of $\sin 30^\circ$ is $\frac{1}{2}$

<!-- para:0223 -->
Doing substitution: $\sin 330^\circ = -\frac{1}{2}$

<!-- para:0224 -->
Calculating $\csc 330^\circ$:

<!-- para:0225 -->
Doing substitution: $\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = -2$

<!-- para:0226 -->
Let's verify this result. 330 degrees is in the fourth quadrant of the unit circle. $\sin \theta$ is negative in the third and fourth quadrants, so it's logical that $\sin 330^\circ$ is negative. Let's confirm that $\sin 330^\circ$ is indeed $-\frac{1}{2}$.

<!-- para:0227 -->
The reference angle of $330^\circ$ is $360^\circ - 330^\circ = 30^\circ$. Therefore, $\sin 330^\circ$ has the same magnitude as $\sin 30^\circ$, which is $\frac{1}{2}$. Since $330^\circ$ is in the fourth quadrant, the sine function is negative, so $\sin 330^\circ = -\frac{1}{2}$.

<!-- para:0228 -->
Using $\csc \theta = \frac{1}{\sin \theta}$:

<!-- para:0229 -->
Doing substitution: $\csc 330^\circ = \frac{1}{-\frac{1}{2}} = -2$

<!-- para:0230 -->
Let's double-check this computation.

<!-- para:0231 -->
Doing substitution: $\csc 330^\circ = \frac{1}{\sin 330^\circ} = \frac{1}{-\frac{1}{2}} = \frac{1}{-0.5}$

<!-- para:0232 -->
To compute $\frac{1}{-0.5}$, let's convert $-0.5$ to an improper fraction:

<!-- para:0233 -->
Doing conversion: $-0.5 = -\frac{5}{10} = -\frac{1}{2}$

<!-- para:0234 -->
So we have $\frac{1}{-\frac{1}{2}}$.

<!-- para:0235 -->
To take a reciprocal of a fraction, we can invert it:

<!-- para:0236 -->
Doing inversion: $\frac{1}{-\frac{1}{2}} = -\frac{2}{1} = -2$

<!-- para:0237 -->
Therefore, $\csc 330^\circ = -2$.

<!-- para:0238 -->
This is wrong. Let's start over from the beginning.

<!-- para:0239 -->
We need to compute $\csc 330^\circ$.

<!-- para:0240 -->
[...]

<!-- para:0241 -->
Let's simplify the problem. We can express $\csc 330^\circ$ in terms of $\csc 30^\circ$.

<!-- para:0242 -->
Given that $\csc \theta = \frac{1}{\sin \theta}$, we have $\csc 330^\circ = \frac{1}{\sin 330^\circ}$.

<!-- para:0243 -->
Observing that $330^\circ$ is $30^\circ$ less than $360^\circ$, which is a full circle, we can rewrite this as $\sin(360^\circ - 30^\circ) = \sin(-30^\circ)$.

<!-- para:0244 -->
Additionally, sine is an odd function, meaning $\sin(-\theta) = -\sin(\theta)$. So we can further simplify to $\sin(-30^\circ) = -\sin(30^\circ)$.

<!-- para:0245 -->
Now, let's compute $\csc 330^\circ$:

<!-- para:0246 -->
Doing calculations:

<!-- para:0247 -->
\begin{align}

<!-- para:0248 -->
\csc 330^\circ &= \frac{1}{\sin 330^\circ}\\

<!-- para:0249 -->
&= \frac{1}{\sin(360^\circ - 30^\circ)}\\

<!-- para:0250 -->
&= \frac{1}{\sin(-30^\circ)}\\

<!-- para:0251 -->
&= \frac{1}{-\sin(30^\circ)}\\

<!-- para:0252 -->
&= -\frac{1}{\sin(30^\circ)}\\

<!-- para:0253 -->
&= -\csc(30^\circ)

<!-- para:0254 -->
\end{align}

<!-- para:0255 -->
We need to evaluate $\csc 30^\circ = \frac{1}{\sin 30^\circ}$.

<!-- para:0256 -->
This is wrong. Let's try something different.

<!-- para:0257 -->
Let's recall the value of $\sin 30^\circ$.

<!-- para:0258 -->
This doesn't help. Let's try using the unit circle. The point on the unit circle corresponding to $330^\circ$ is the same as the point corresponding to $-30^\circ$. So we have $\sin 330^\circ = \sin(-30^\circ)$.

<!-- para:0259 -->
This doesn't help either. Let's start over.

<!-- para:0260 -->
Recalling angles:

<!-- para:0261 -->
For any angle $\theta$, $\sin(\theta) = \sin(360^\circ - \theta)$.

<!-- para:0262 -->
Therefore, $\sin(330^\circ) = \sin(360^\circ - 30^\circ) = \sin(30^\circ)$.

<!-- para:0263 -->
This is wrong. Let's try something different.

<!-- para:0264 -->
[...]
