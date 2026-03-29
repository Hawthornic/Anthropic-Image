---
source_url: https://claude.com/blog/building-companies-with-claude-code
title: "How three YC startups built their companies with Claude Code"
section: blog
date: 2025-11-17
---

<!-- para:0001 -->
[Y Combinator](https://www.ycombinator.com/), a startup accelerator, has launched over 5,000 companies that have a combined valuation of over $800B since 2005, including household names like Airbnb, Stripe, and Door Dash.

<!-- para:0002 -->
Today, agentic coding tools like [Claude Code](https://www.claude.com/product/claude-code) are fundamentally changing how YC startups build and scale. Founders can now ship products directly from the terminal, compressing development cycles from weeks to hours and enabling even non-technical founders to compete with established players from day one.

<!-- para:0003 -->
We spoke with three YC startups who demonstrate this transformation in action:

<!-- para:0004 -->
- [Human Layer](https://www.humanlayer.dev/) (F24) built their entire platform and pioneered context engineering practices with Claude Code
- [Ambral](https://www.ambral.com/) (W25) is scaling AI-powered account management with sophisticated sub-agent powered workflows built with Claude Code and Claude Agents SDK
- [Vulcan Technologies](https://vulcan-tech.com/) (S25) is using Claude Code to tackle regulatory complexity for the government and industry

<!-- para:0005 -->
Let’s dive in.

<!-- para:0006 -->
## **Human Layer: From SQL agents to scaling AI-first engineering teams**

<!-- para:0007 -->
Dexter Horthy was building autonomous AI agents to manage SQL warehouses when he noticed a fundamental (but understandable) challenge to agentic adoption: companies weren’t comfortable giving AI applications unsupervised access to sensitive operations like dropping database tables.

<!-- para:0008 -->
### **The product pivot that started it all**

<!-- para:0009 -->
That realization became Human Layer's core insight: often the most useful functions in any software are also the most risky, especially for non-deterministic LLM-powered systems.

<!-- para:0010 -->
"Our MVP was an agent that would coordinate with humans in Slack and could do basic cleanup, like dropping any table that hadn't been queried in 90+ days," Horthy explained. "We weren't comfortable with an AI application running raw SQL unsupervised, so we wired in some basic human approval steps."

<!-- para:0011 -->
In August 2024, Horthy built an MVP, demoed it to different startups across SF, and had his first paying customers.

<!-- para:0012 -->
This progress landed Human Layer in the YC F24 batch, and the team went all in on providing an API and SDK that lets AI agents contact humans for feedback, input, and approvals across Slack, email, SMS, and other channels.

<!-- para:0013 -->
Through Q1 2025, the Human Layer team conducted extensive customer discovery, talking to dozens of engineering teams building AI agents and realized there was a gap in the agentic development loop they hadn’t accounted for.

<!-- para:0014 -->
"Every team had rolled their own agent architecture," Horthy explained. "We realized we couldn't just build a better API–we needed to help establish the patterns and principles that would let the ecosystem mature."

<!-- para:0015 -->
This led Horthy to document their learnings in "[12-Factor Agents: Patterns of reliable LLM applications](https://github.com/humanlayer/12-factor-agents)." Published in April 2025, the guide went viral and synthesized their experience building production agent systems and highlighted best practices for the emergent discipline of context engineering.

<!-- para:0016 -->
### **Building everything with Claude Code**

<!-- para:0017 -->
With these learnings in hand, the Human Layer team started exploring alternative product ideas and pivot angles.

<!-- para:0018 -->
When Anthropic launched Claude Code, Horthy and his team were already strong proponents of Claude models for coding. They immediately began using it to build these experiments.

<!-- para:0019 -->
"We just wrote everything with Claude Code," Horthy said. "When the Claude Agent SDK launched with Opus 4 and Sonnet 4, enabling headless agent execution, we knew this was going to be a big deal."

<!-- para:0020 -->
After months of refining their Claude Code workflows internally, Horthy began sharing them with close founder friends.

<!-- para:0021 -->
"The moment that told me we needed to go all in on this was an all-day pairing session with Vaibhav from BoundaryML (YC W23)," Horthy recalled. "Vaibhav was skeptical at first, but after we spent 7 hours shipping what would normally be 1-2 weeks of work, he was sold. I realized this workflow could work for other teams and other codebases."

<!-- para:0022 -->
### **Building Code Layer: Scaling AI-first engineering**

<!-- para:0023 -->
Today, Human Layer's product Code Layer helps teams run multiple Claude agent sessions in parallel using worktrees and remote cloud workers. They've discovered a critical pattern: once an engineer masters Claude Code, their productivity gains are so substantial that the real challenge becomes organizational—scaling these workflows across entire teams.

<!-- para:0024 -->
"Once you have multiple people on your team shipping AI-written code, you have a completely different type of problem," Horthy explained. "It's a communication, collaboration, tooling, and management problem. You have to rewire everything about how your team builds software."

<!-- para:0025 -->
Since the start of Q4 2025, Human Layer has closed several large pilots across engineering teams of all sizes to deploy these tools and workflows, all built with Claude Code.

<!-- para:0026 -->
## **Ambral: Building production systems with subagents**

<!-- para:0027 -->
Jack Stettner and Sam Brickman founded Ambral to solve a problem familiar to every B2B startup founder and CRO: as companies scale, the founder-level customer intimacy that drives early growth becomes impossible to maintain.

<!-- para:0028 -->
### **Transforming account management with the Claude Agent SDK**

<!-- para:0029 -->
Whether at early companies experiencing hyper growth or at established enterprise companies, account managers routinely juggle 50 to 100 accounts simultaneously. "You can't give an effective account management experience with 1/50th of someone's attention," Stettner explained. Customer context that once fit in a founder's head scatters across systems, logs, Slack messages, meeting transcripts, and product usage data.

<!-- para:0030 -->
Ambral synthesizes signals from customer activity and interactions into AI-powered models of every account. The system pinpoints who needs attention and why, autonomously driving or recommending expansions while catching early signs of dissatisfaction to prevent churn.

<!-- para:0031 -->
"We're trying to provide the experience of every customer having a one-to-one account manager," Stettner said.

<!-- para:0032 -->
As CTO and sole engineer at this young startup, Stettner relies heavily on Claude Code for development and Claude's Agent SDK to power the product itself. The technical architecture reflects sophisticated understanding of how to extract maximum value from different Claude models.

<!-- para:0033 -->
### **Delegated workflow: Opus for thinking, Sonnet for building, and subagents all around**

<!-- para:0034 -->
Stettner has adopted a precise workflow that leverages the strengths of different Claude models in conjunction with subagents:

<!-- para:0035 -->
"I use Opus 4.1 to do research and planning. Sonnet 4.5 has been absolutely killer in terms of being able to then go and implement these plans that I create in Markdown," Stettner explained.

<!-- para:0036 -->
His development process follows three discrete phases:

<!-- para:0037 -->
1. **Research phase (Opus 4.1)**: Perform deep research on whatever background is needed for a feature implementation. "I think the most important thing is doing research before you plan," Stettner emphasized. "Have Claude do research for you and create a large, long research document." He uses a series of subagents to research multiple areas of the codebase in parallel.
2. **Planning phase (Opus 4.1)**: Create a plan with discrete phases on how to implement the feature. "I'll have Opus create a plan with phases, discrete phases on how to actually go about implementing it, and I'll go revise that plan. Maybe I'll chat with Opus about questions about certain details, or I'll manually update this markdown file."
3. **Implementation phase (Sonnet 4.5)**: Execute each phase of the plan systematically. "Then I'll use Sonnet 4.5 to go and implement each phase."

<!-- para:0038 -->
This approach prevailed over the other workflows Stettner tried and was influenced by some of the work Horthy is doing at Humanlayer: "I tried every coding tool, and I experimented with basically every model. I just think Anthropic's models are the best at tool use right now, and that translates to code."

<!-- para:0039 -->
### **Building a robust research engine**

<!-- para:0040 -->
The product itself mirrors this multi-agent approach. Stettner built Ambral's core research engine using the Claude Agent SDK with dedicated sub-agents for each data type.

<!-- para:0041 -->
"I spent a lot of time using the Claude Agent SDK to basically build a very robust research engine that can operate across all of this data," Stettner explained. "It's based around Claude sub-agents, and for every type of data we have a dedicated sub-agent which is an expert in understanding that data."

<!-- para:0042 -->
Whether users chat with the system or Ambral builds automations for customers, everything is backed by the [Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk/overview) and a series of sub-agents retrieving and reasoning across usage data, Slack messages, meeting transcripts, and product interactions.

<!-- para:0043 -->
The architectural inspiration came directly from Stettner's development experience: "I think how well Claude Code subagents were doing and helping me do development is what inspired me to basically want to take those same sub-agents and use it for the research engine in the product itself."

<!-- para:0044 -->
## **Vulcan Technologies: Empowering non-technical founders to launch products**

<!-- para:0045 -->
For Tanner Jones, CEO and co-founder of Vulcan, Claude Code's impact extends far beyond productivity—it constitutes the democratization of company building. Founding their startup, the Vulcan team believed there had to be a product that could make government work better for citizens. That vision would have remained impossible without Claude Code because neither founder had an engineering background.

<!-- para:0046 -->
### **Shipping a product without dedicated engineers**

<!-- para:0047 -->
Vulcan tackles a problem that's been accumulating for centuries: [regulatory code](https://en.wikipedia.org/wiki/Code_of_Federal_Regulations) complexity. Virginia's House of Burgesses, the oldest continuous democratic institution in the world, exemplifies this challenge. Regulatory buildup over 400+ years has created one of the most nuanced and complex codes in the U.S.

<!-- para:0048 -->
When Aleksander Mekhanik and Tanner Jones co-founded Vulcan in April 2025, neither had a traditional engineering background. Mekhanik studied ML and mathematics in college, and Jones' last programming experience was an AP Java Script class in high school where they wrote code with pen and paper. Yet the duo built a prototype of their first product for Virginia's governor's office by May 1st—and won the contract over established consulting firms.

<!-- para:0049 -->
"The entire prototype was made using Claude," Jones explained. "This was pre-Claude Code. It was literally copy-pasting scripts into the web app, swapping out methods." After building the prototype, they hired their CTO, Christopher Minge, who had experience working at Google on Gemini and Waymo. Then, when Claude Code launched in June, the trio’s velocity multiplied again.

<!-- para:0050 -->
Vulcan's AI-powered regulatory analysis helped reduce the average price of a new home in Virginia by $24,000, saving Virginians over a billion dollars annually by identifying redundant and duplicative regulatory requirements. Virginia’s governor loved Vulcan’s work so much that he [signed Executive Order 51](https://www.govtech.com/artificial-intelligence/virginia-to-use-agentic-ai-to-power-review-of-regulations), mandating that all state agencies use “agentic AI regulatory review.”

<!-- para:0051 -->
### **Democratizing company building**

<!-- para:0052 -->
For Jones, Claude Code's impact goes beyond productivity metrics.

<!-- para:0053 -->
"If you understand language and you understand critical thinking, you can use Claude Code well," he said. "I actually think there might be some marginal benefit for people who studied humanities, because the medium by which we're communicating with AI is language. If you have a great command of language and are good at constructing well-organized ordinal lists, nested bullet points and well-thought-out processes, your prompts may execute better."

<!-- para:0054 -->
Jones commends Claude Code as a major component of Vulcan’s success: “In four months, with three founders, only one of whom was properly technical, we secured state and federal government contracts and raised an $11m seed round from some of the top VCs. None of this would have been possible without Anthropic’s unbelievable tools.”

<!-- para:0055 -->
Christopher Minge, Vulcan’s CTO with “properly technical” training, experienced his own shift in how he thinks about engineering.

<!-- para:0056 -->
"It feels a little bit like I have a co-worker at Google who I'm giving all of my ideas and tasks to, and they make mistakes frequently, but my role is delegating to several Claude Code instances and getting good at checking for common mistakes and communicating ideas effectively," Minge explained.

<!-- para:0057 -->
## **Best practices from YC founders**

<!-- para:0058 -->
These three startups have developed battle-tested approaches to maximizing Claude Code's impact, including:

<!-- para:0059 -->
### **1. Separate research, planning, and implementation into discrete sessions**

<!-- para:0060 -->
"Don't make Claude do research while it's trying to plan, while it's trying to implement," Stettner advised. "Use discrete prompts and make those into discrete steps."

<!-- para:0061 -->
This pattern prevents context contamination and allows each phase to focus on its core objective. Start a new Claude Code session for each major phase, passing only the distilled conclusions forward rather than dragging the entire context history.

<!-- para:0062 -->
### **2. Be deliberate about context management**

<!-- para:0063 -->
Stettner's advice for other founders centers on deliberate context management:

<!-- para:0064 -->
"Context is critical. When I've seen output that was unexpected or low quality, it's generally due to a contradiction that I have in a prompt somewhere," he explained. "Be very deliberate in terms of what information you're putting into a system prompt or when you choose to start a new conversation, because you don't want to cloud your context. If there's any contradictions in your prompt, you're going to receive lower quality output."

<!-- para:0065 -->
### **3. Monitor and interrupt the chain of thought**

<!-- para:0066 -->
"Try to scrutinize the chain of thought and watch what it's doing," Jones suggested. "Have your finger on the trigger to escape and interrupt any bad behavior."

<!-- para:0067 -->
This becomes especially important when running multiple instances. Catching a wrong direction early—within the first few tool calls—saves significantly more time than letting Claude Code complete an entire misguided approach.

<!-- para:0068 -->
## **The new builder advantage**

<!-- para:0069 -->
These three startups demonstrate a fundamental shift in how companies are built with tools like Claude Code. Human Layer pivoted and scaled while codifying context engineering practices that are now used across the YC ecosystem. Ambral is tackling customer success at massive scale with a lean founding team. Vulcan won government contracts as non-engineers.

<!-- para:0070 -->
Traditional barriers to building software—technical expertise, team size, development time—are giving way to new competitive advantages: clear thinking, structured problem decomposition, and the ability to effectively collaborate with AI.

<!-- para:0071 -->
**Ready to build with Claude Code?**[Get started.](https://www.anthropic.com/claude-code)**
