---
source_url: https://www.anthropic.com/news/prompt-engineering-for-business-performance
title: "Prompt engineering for business performance"
section: news
date: 2024-02-29
---

<!-- para:0001 -->
![](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F519f63e0ea393f33e56c2e812713d65dcf27a79a-2880x1620.png&w=3840&q=75)

<!-- para:0002 -->
## Executive summary

<!-- para:0003 -->
- Prompt engineering is an important tool for any business seeking to optimize Claude. Good prompts improve Claude’s outputs, reduce deployment costs, and ensure customer-facing experiences are on-brand.
- A Fortune 500 company made use of effective prompt engineering to build a Claude-powered assistant that answers its customers’ questions with enhanced accuracy and speed.

<!-- para:0004 -->
## The power of prompting

<!-- para:0005 -->
As businesses build with generative AI models, crafting effective prompts has become critical for producing high-quality outputs. This post explains basic prompt engineering techniques that help our customers get the most value from Claude. With the right prompts, businesses can tap into the full potential of AI to increase productivity across a wide range of tasks.

<!-- para:0006 -->
We also share how our prompt engineering team has been helping a Fortune 500 company build a customer-facing chat assistant that answers complex questions quickly and accurately - and how you can apply those tips too.

<!-- para:0007 -->
To gain the most value from Claude, you can apply a variety of techniques to create prompts that accomplish your desired tasks. These include processing data, answering customer questions, or reviewing contracts with increasing efficiency, while providing useful, relevant, and accurate results aligned to your goals and standards.

<!-- para:0008 -->
### Here are some of the benefits of effective prompts:

<!-- para:0009 -->
- **Accuracy:** While we have made strides in [reducing Claude’s hallucination rates](https://www.anthropic.com/news/claude-2-1), effective prompting helps further reduce the risk of inaccurate outputs
- **Consistency:**Providing a cohesive experience for end-users is crucial, and well thought out prompts ensure that Claude will produce consistent results in terms of quality, formatting, relevance, and tone
- **Usefulness:** Prompt engineering helps customers deliver targeted experiences for their desired audiences and industries. With careful prompting, you can cater to very specific personas and their needs
- **Cost savings:** Running inefficient inputs and outputs at scale can become costly. Optimizing your prompts helps minimize unnecessary back-and-forth, and saves money

<!-- para:0010 -->
## Three tips for your business

<!-- para:0011 -->
Here are three prompting techniques that we’ve seen unlock significant performance gains for businesses.

<!-- para:0012 -->
Before we dive in, remember that no matter which techniques you choose, always start by clearly describing the task. Think of Claude as an intern on their first day of the job: provide clear, explicit instructions with all the necessary detail. Keep in mind that prompt engineering is a science, and you should approach it like a scientist: test your prompts and iterate often.

<!-- para:0013 -->
### 1. Step by step

<!-- para:0014 -->
It might sound overly simple, but often Claude will respond more accurately if you simply tell it to [think step by step](https://docs.anthropic.com/claude/docs/ask-claude-to-think-step-by-step) after you give it an instruction.

<!-- para:0015 -->
For example, if you wanted Claude to solve a logic puzzle, you could say:

<!-- para:0016 -->
*"Here is the information a customer provided for an automotive insurance claim. Based on our policy documents and the customer's profile, does this claim meet our requirements for qualification? Think step by step in <thinking> tags."*

<!-- para:0017 -->
### 2. Few-shot prompting

<!-- para:0018 -->
It’s helpful to give Claude realistic and specific examples of the inputs and ideal outputs you’re hoping to see. It’s useful to include challenging examples and edge cases to help Claude understand exactly what you’re looking for.

<!-- para:0019 -->
For a simple example, consider how Claude can help with removing personally-identifiable information (PII) from information, using 2 examples to help Claude understand different ways that PII could present itself in a prompt. A simplified example using [claude.ai](https://claude.ai/redirect/website.v1.52cdad0c-ca7a-43d0-8297-e3f64b8a4f36) may look something like this:

<!-- para:0020 -->
*You are an expert redactor. I am going to provide you with some text. Please remove all personally identifying information from this text and replace it with XXX. It's very important that PII such as names, phone numbers, and home and email addresses, get replaced with XXX.*

<!-- para:0021 -->
*Here are two synthetic examples of how this should be done:*

<!-- para:0022 -->
*<examples> <example> <text> My name is Jacob LaPont. My email address is jlp@geemail.com and my phone number is 555-492-1902. I am 43 years old. My account ID is 52777930. </text> The output should be: <response> My name is XXX. My email address is XXX@XXX.XXX and my phone number is XXX. I am XXX years old. My account ID is XXX. </response> </example> <example> <text> Bo Nguyen is a cardiologist at Mercy Health Medical Center. He can be reached at 925-123-456 or b@mercy.health. </text> The output should be: <response> XXX is a cardiologist at Mercy Health Medical Center. He can be reached at XXX-XXX-XXXX or XXX@XXX. </response> </example> </examples>*

<!-- para:0023 -->
*Now here is the text I’d like you to redact:*

<!-- para:0024 -->
*<text> The customer's name is Steven Smith with Customer ID 44201312. His email address is steven.smith@geemail.com, or reach him via telephone at 555-182-9942. </text>*

<!-- para:0025 -->
### 3. Prompt chaining

<!-- para:0026 -->
Sometimes Claude performs better on complex tasks if you break the task down into multiple prompts corresponding to each step. This is known as ‘prompt chaining’.

<!-- para:0027 -->
Prompt chaining allows you to iterate on a prompt over multiple steps. Each new prompt can include the previous prompt-response pairs to build on the context. This technique enables you to guide Claude through a process by repeatedly prompting, responding, and expanding the prompt with each interaction.

<!-- para:0028 -->
For example, if you want Claude to help with explaining tax situations, you could first prompt it to create a list of the tax codes that are related to the specific question, then prompt Claude to identify the relevant sections in each document, and finally, to respond to a user question based on the information Claude’s gathered.

<!-- para:0029 -->
## Case study: Prompting for enhanced accuracy and speed

<!-- para:0030 -->
A Fortune 500 company wanted to build an AI-powered chat assistant that could respond to customers’ questions about some unique and complex issues.

<!-- para:0031 -->
The company tried some other solutions in the market, but were unhappy with their wordiness, stilted tone, and overall lack of cohesion. They also wanted to see if they could achieve lower latency — i.e., provide faster responses — without affecting accuracy.

<!-- para:0032 -->
They turned to [Claude Instant](https://www.anthropic.com/news/releasing-claude-instant-1-2) to power a friendly, concise chatbot that could answer customers’ questions quickly and accurately.

<!-- para:0033 -->
The company’s first efforts to deploy Claude fell short of their goal for accuracy. To remedy this, we sent in an Anthropic prompt engineer to partner with the company’s subject matter experts on improving Claude’s responses.

<!-- para:0034 -->
Our prompt engineers applied several techniques to improve Claude’s outputs, including:

<!-- para:0035 -->
- Telling Claude to use a scratchpad to show its work (customers don’t see the scratchpad, but it helps improve Claude’s accuracy)
- Providing few-shot examples of good answers, with a focus on training Claude to use the company’s desired format and style
- Directing Claude to use the data points and workflow recommended by subject matter experts (SMEs) — in this case, a set of factors that affect a customer’s legal situation

<!-- para:0036 -->
Below is an example prompt to help bring this guidance to life. In this example, the inclusion of “relevant_quotes” serves the purpose of telling Claude to use a scratchpad.

<!-- para:0037 -->
*" Human: You are an expert AI tax analyst. You help users understand the details of the tax code.*

<!-- para:0038 -->
*Here is the relevant section of the tax code. <tax_code> {{TAX_CODE}} </tax_code>*

<!-- para:0039 -->
*Here are some examples of questions and answers about this section of the tax code:*

<!-- para:0040 -->
*<examples> <example> <question> {{EXAMPLE QUESTION 1}} </question> <answer> {{EXAMPLE ANSWER 1}} </answer> </example> … </examples>*

<!-- para:0041 -->
*Now here is the user's question about the tax code that I’d like you to answer: <question>{{QUESTION}}</question>*

<!-- para:0042 -->
*First, pull relevant quotes from the tax code in <relevant_quotes> tags. Then write a concise, factual response to the user’s question in <answer> tags. Your answer should be fully grounded in the relevant quotes from the tax code that you extracted.*

<!-- para:0043 -->
*Assistant: <relevant_quotes>"*

<!-- para:0044 -->
By combining our prompt engineers’ knowledge of prompting best practices with the customer’s subject matter expertise, we **improved Claude’s accuracy by 20%** - and helped get their product to market faster and at a lower cost.

<!-- para:0045 -->
### Getting started with prompt engineering

<!-- para:0046 -->
There’s no single best technique for prompt engineering. Every LLM is different and the best way to prompt one model may not work as well for others. AI technology itself is nascent, and our collective understanding of how models work is evolving every day.

<!-- para:0047 -->
If you’re deploying an AI-powered solution within your business, prompt engineering is essential — and it should be a collaborative effort between prompt engineers and subject matter experts.

<!-- para:0048 -->
To get started on optimizing Claude for your use case, read our [prompt engineering guide](https://docs.anthropic.com/claude/docs/guide-to-anthropics-prompt-engineering-resources) or [contact our sales team](https://www.anthropic.com/earlyaccess).
