---
source_url: https://red.anthropic.com/2026/cyber-toolkits-update/
title: "AI models are showing a greater ability to find and exploit vulnerabilities on realistic cyber ranges"
section: blog
date: 2026-01-16
---

<!-- para:0001 -->
#### ANTHROPIC

<!-- para:0002 -->
In a recent evaluation of AI models’ cyber capabilities, current Claude models can now succeed at multistage attacks on networks with dozens of hosts using only standard, open-source tools, instead of the custom tools needed by previous generations. This illustrates how barriers to the use of AI in relatively autonomous cyber workflows are rapidly coming down, and highlights the importance of security fundamentals like promptly patching known vulnerabilities.

<!-- para:0003 -->
[Last year](https://red.anthropic.com/2025/cyber-toolkits/), we wrote about experiments with Carnegie Mellon University’s [CyLab](https://www.cylab.cmu.edu/) in which we placed Claude in simulated networks that are more sophisticated and realistic than the environments typical of capture-the-flag-style [cyber competitions](https://red.anthropic.com/2025/cyber-competitions/). At that time, Claude (and other frontier AI models) needed assistance from a custom cyber toolkit, which takes the AI’s high-level instructions about how to attack and converts them into specific low-level commands, in order to completely succeed on any of these 25-50 host networks.

<!-- para:0004 -->
We have continued collaborating with [Incalmo](https://www.incalmo.ai/) to run evaluations on these cyber ranges (simulated network environments for security testing). A notable development during the testing of Claude Sonnet 4.5 is that the model can now succeed on a minority of the networks without the custom cyber toolkit needed by previous generations. In particular, Sonnet 4.5 can now exfiltrate all of the (simulated) personal information in a high-fidelity simulation of the [Equifax data breach](https://en.wikipedia.org/wiki/2017_Equifax_data_breach)—one of the costliest cyber attacks in history—using only a Bash shell on a widely-available Kali Linux host (standard, open-source tools for penetration testing; not a custom toolkit). Sonnet 4.5 accomplishes this by instantly recognizing a publicized CVE and writing code to exploit it without needing to look it up or iterate on it. Recalling that the original Equifax breach happened by exploiting a publicized CVE that had not yet been patched, the prospect of highly competent and fast AI agents leveraging this approach underscores the pressing need for security best practices like prompt updates and patches.

<!-- para:0005 -->
It’s important not to overstate the status quo. Claude does not succeed every time in these tests; Sonnet 4.5 succeeded autonomously on the Equifax cyber range in two of five trials. Also, for five of the nine networks it could not make progress without the custom cyber toolkit. But the trajectory of models first needing specialized tools and then being able to operate without them (or using only publicly available tools) is consistent with other trends we have observed in AI progress. We believe it presages further improvement in the cyber domain. And this improvement is happening quickly: Claude Sonnet 3.5, which was released a little over a year before Claude Sonnet 4.5, could not succeed at the Equifax simulation in any of the five trials without use of the specialized cyber toolkit. This trajectory, in conjunction with real-world examples like the recent [AI-orchestrated cyber espionage campaign](https://www.anthropic.com/news/disrupting-AI-espionage), shows the need for substantial research into how best to equip [cyber defenders](https://red.anthropic.com/2025/ai-for-cyber-defenders/) with the AI-enabled tools they will need to keep pace.

<!-- para:0006 -->
You can read more about these tests at Incalmo’s [website](https://www.incalmo.ai/blog/2025/10/01/sonnet_eval/) or in the Claude Sonnet 4.5 [system card](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf) (see Section 5 and, especially, Section 5.3). Below, we also present annotated excerpts of the evaluation transcripts. The full transcripts follow in the appendix.

<!-- para:0007 -->
### Acknowledgements

<!-- para:0008 -->
Thanks to Brian Singer for the data and assistance in preparing this post.

<!-- para:0009 -->
### Appendix: full transcripts

<!-- para:0010 -->
#### Claude Sonnet 3.5 with Bash and Kali

<!-- para:0011 -->
#### Claude Sonnet 3.5 with Incalmo

<!-- para:0012 -->
#### Claude Sonnet 4.5 with Bash and Kali

---
