---
source_url: https://www.anthropic.com/news/preparing-for-global-elections-in-2024
title: "Preparing for global elections in 2024"
section: news
date: 2024-02-16
---

<!-- para:0001 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F4faa22b0123ebbc6f2a493eedc82634c5b6fd643-2880x1621.png&w=3840&q=75)

<!-- para:0002 -->
Over half of the world’s population will vote this year with high profile elections taking place around the world, including in the United States, India, Europe, and many other countries and regions. At Anthropic, we’ve been preparing since last July for how our AI systems might be used during elections. In this post, we’ll discuss some of the specific steps we’ve taken to help us detect and mitigate potential misuse of our AI tools in political contexts.

<!-- para:0003 -->
Our global election work has three major components. These are:

<!-- para:0004 -->
- Developing and enforcing policies around election issues;
- Evaluating and testing how our models perform against election misuses;
- Ensuring that when people ask Claude for information about where or how to vote, we point them to up-to-date, accurate information.

<!-- para:0005 -->
## **Implementing and enforcing policies around election issues**

<!-- para:0006 -->
Because generative AI systems are relatively new, we’re taking a cautious approach to how our systems can be used in politics. We have an [Acceptable Use Policy (AUP)](https://console.anthropic.com/legal/aup) which prohibits the use of our tools in political campaigning and lobbying. This means that we don’t allow candidates to use Claude to build chatbots that can pretend to be them, and we don’t allow anyone to use Claude for targeted political campaigns.

<!-- para:0007 -->
We’ve also trained and deployed automated systems to detect and prevent misuse like misinformation or influence operations. If we discover misuse of our systems, we give the relevant user or organization a warning. In extreme cases, we suspend their access to our tools and services altogether. More severe actions on our part, like suspensions, are accompanied by careful human review to prevent false positives.

<!-- para:0008 -->
## **Evaluating and testing how our model holds up against election misuses**

<!-- para:0009 -->
Since 2023, we’ve been carrying out targeted “red-teaming” of our systems, to test for ways that they might be used to violate our AUP. This ‘Policy Vulnerability Testing’ focuses on two areas:

<!-- para:0010 -->
- Misinformation and bias. We examine how our AI system responds when presented with questions about candidates, issues and election administration;
- Adversarial abuse. We test how our system responds to prompts that violate our Acceptable Use Policy (e.g., prompts that request information about tactics for voter suppression).

<!-- para:0011 -->
We’ve also built an in-house suite of technical evaluations to test our systems for a variety of election-related risks. These include ways of testing for:

<!-- para:0012 -->
- Political parity in model responses across candidates and topics;
- The degree to which our systems refuse to respond to harmful queries about the election;
- How robust our systems are in preventing the production of disinformation and voter profiling and targeting tactics.

<!-- para:0013 -->
These are quantitative tests, and we use them to evaluate the robustness of our systems and test how effective we are at intervening and mitigating the problems. We’ll have more to share about our evaluation suite in the coming months.

<!-- para:0014 -->
## **Providing accurate information**

<!-- para:0015 -->
In the United States, we will be trialing an approach where we use our classifier and rules engine—to identify election-related queries and redirect users to accurate, up-to-date authoritative voting information.

<!-- para:0016 -->
While generative AI systems have a broad range of positive uses, our own research has shown that they can still be prone to hallucinations, where they produce incorrect information in response to some prompts. Our model is not trained frequently enough to provide real-time information about specific elections. For this reason, we proactively guide users away from our systems when they ask questions on topics where hallucinations would be unacceptable, such as election-related queries.

<!-- para:0017 -->
*How it will work:*

<!-- para:0018 -->
If a US-based user asks for voting information, a pop-up will offer the user the option to be redirected to [TurboVote](http://claude.turbovote.org/), a resource from the nonpartisan organization Democracy Works. The pop up will roll out over the next few weeks and we intend to use the insights from our TurboVote redirect to roll out similar solutions in other countries and regions.

<!-- para:0019 -->
## **We expect to be surprised**

<!-- para:0020 -->
This post gives an overview of how we’re approaching the use of our systems in elections. However, the history of AI deployment has also been one full of surprises and unexpected effects. We expect that 2024 will see surprising uses of AI systems—uses that were not anticipated by their own developers.

<!-- para:0021 -->
At Anthropic, we’re building methods to help us spot unanticipated uses of our systems as they emerge, and we’ll communicate openly and frankly about what we discover.

<!-- para:0022 -->
**Update, May 28, 2024:**After making Claude available [in Europe in May](https://www.anthropic.com/news/claude-europe), we also implemented a pop-up intervention for EU-based users who ask Claude for voting information. The pop-up will offer the user the option to be redirected to the European Parliament’s[nonpartisan elections website](https://elections.europa.eu/en/).**

<!-- para:0023 -->
We also updated our [Usage Policy t](https://www.anthropic.com/legal/aup)o provide greater clarity on the definitions of political lobbying and campaigning activities, which are prohibited when using our products. You can read more about these restrictions [here](https://www.anthropic.com/news/updating-our-usage-policy).
