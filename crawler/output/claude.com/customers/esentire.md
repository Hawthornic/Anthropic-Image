---
source_url: https://claude.com/customers/esentire
title: "How e Sentire runs expert-level threat investigations at scale with Claude"
section: customers
---

<!-- para:0001 -->
# How e Sentire runs expert-level threat investigations at scale with Claude

<!-- para:0002 -->
We’re upgrading our smartest model. The new Claude Opus 4.6 improves on its predecessor’s coding skills. It plans more carefully, sustains agentic tasks for longer, and features a 1M token context window.

<!-- para:0003 -->
The Claude Agent SDK is a collection of tools that helps developers build powerful agents on top of Claude Code.

<!-- para:0004 -->
e Sentire is a managed detection and response (MDR) provider that protects millions of endpoints across thousands of customers worldwide. Its Atlas platform uses Claude to run autonomous threat investigations, analyzing signals across endpoint, identity, network, and cloud telemetry to catch and contain attacks in minutes.

<!-- para:0005 -->
## With Claude, e Sentire achieved:

<!-- para:0006 -->
- 99.96% ransomware containment before any file encryption, more than double the industry average of 44%
- Over 120,000 autonomous investigations across its full customer base in 12 months, each averaging 44 tool calls across endpoint, identity, network, and cloud telemetry
- Above 90% alignment with top SOC experts in continuous production evaluation, matching or exceeding human analyst performance
- 6-minute average agentic investigation, where the industry median attacker dwell time is 11 days
- 41% more confirmed attacks detected per customer after deploying agentic investigations, with overall alert volume down 11%

<!-- para:0007 -->
## The challenge: Matching attacker speed without sacrificing depth

<!-- para:0008 -->
AI-powered attacks now run at thousands of requests per second, a pace no human SOC team can match. e Sentire needed to investigate live threats across thousands of heterogeneous customer environments, correlating signals across endpoint, identity, network, and cloud layers, and reasoning about attacker intent with incomplete information. The challenge was doing this with the same depth a senior analyst would bring to every signal, not just the ones flagged as critical.

<!-- para:0009 -->
"When attackers can run AI agents that move faster than any human SOC, the only viable response is AI that defends at the same speed and depth," said Dustin Hillard, CPTO of e Sentire. "That's what we built on Claude."

<!-- para:0010 -->
## The solution: Why e Sentire chose Claude for security reasoning

<!-- para:0011 -->
Standard cybersecurity benchmarks had become saturated, with leading models scoring near-perfect, but those benchmarks present defined problems with verifiable answers. e Sentire's production work is fundamentally different: the agent receives a detection event and telemetry sources, but no predefined answer, and has to decide what tools to call, how to interpret contradictory evidence, and what verdict to reach.

<!-- para:0012 -->
When e Sentire evaluated multiple models across real-world security scenarios, Claude provided the highest performance for complex security reasoning. Its agentic capabilities excelled at orchestrating multi-tool workflows while maintaining investigative coherence, essential for MDR work, and each successive model generation has improved on that.

<!-- para:0013 -->
"Benchmarks measure whether a model can solve a known problem in a controlled environment," said Hillard. "We needed Claude to solve unknown problems in live customer environments, thousands of times a day, with expert-level depth on every single one. That's a fundamentally different challenge, and Opus 4.6 is meeting it."

<!-- para:0014 -->
## How e Sentire runs agentic investigations with Claude

<!-- para:0015 -->
e Sentire's Atlas platform runs Claude Opus 4.6 on Amazon Bedrock through Agent SDK in a multi-agent architecture that mirrors the workflow of a senior SOC analyst. Each investigation averages 44 autonomous tool calls: querying threat intelligence, correlating signals across SIEM and endpoint telemetry, analyzing identity activity, reconstructing attacker behavior across process and network data, and connecting findings across workflows. Over 12 months, the platform executed more than 5 million tool calls, representing 468,000 hours of equivalent expert effort, with each call averaging roughly 5 minutes of analyst work.

<!-- para:0016 -->
Each case follows a structured analytical workflow that would take a senior analyst hours to replicate manually, with multiple sub-agents collaborating on each case.

<!-- para:0017 -->
Where this shows up most clearly is in ambiguous cases. An identity compromise where the attacker's activity overlaps with a legitimate user's normal behavior requires the agent to weigh timing, geography, user agent strings, and email forwarding rules before making a judgment call. Opus 4.6 consistently handles these cases at a level that matches e Sentire's best human investigators. And it has to reason effectively across 3,600+ distinct investigation workflows spanning every major EDR, SIEM, and identity platform.

<!-- para:0018 -->
After deploying agentic analysis, e Sentire detected 41% more confirmed attacks per customer while reducing overall alert volume by 11%. More real threats caught, less noise. Senior analysts review and act on every critical finding, providing a trust layer that automation alone doesn't provide. The AI analyzes at depth on every signal, freeing the human team to focus on the judgment calls that matter most: customer engagement, containment decisions, and remediation strategy.

<!-- para:0019 -->
"Before agentic investigations, we had to choose between depth and speed," said Hillard. "Now every investigation gets the deep analytical rigor our best experts would apply. That's what changes outcomes."

<!-- para:0020 -->
## The outcome: Measurable containment at production scale

<!-- para:0021 -->
e Sentire measures this rigor through continuous production evaluation: senior SOC experts independently review a sample of the same cases the agent has investigated, and alignment is measured across dimensions like whether compromise occurred, severity classification, and recommended response. Across more than 500 adjudicated outcomes, Claude consistently achieves above 90% alignment with senior experts on the final verdict. When compared against junior analysts using the same methodology, the agent outperforms them.

<!-- para:0022 -->
Across 12 months of production, the results are concrete. Of nearly 10,000 escalated incidents across more than 1,400 customers:

<!-- para:0023 -->
- 31% were blocked before execution,
- 18% were attempted attacks that failed,
- 36% were identity compromises detected and remediated before attackers accessed business data, and
- 14% were device compromises where the SOC detected activity, isolated the host, and drove remediation.

<!-- para:0024 -->
Across nearly two million protected endpoints, attackers achieved lateral movement to a second device in fewer than 0.5% of incidents. Ransomware encrypted files in less than 0.04%. Every one of those cases was detected. The question was never whether the attack was found, but how fast it could be stopped. For context, the global median attacker dwell time is 11 days, and only 44% of ransomware attacks industry-wide are stopped before encryption.

<!-- para:0025 -->
## Looking ahead

<!-- para:0026 -->
The platform is expanding to ingest and respond across any security technology a customer runs, regardless of vendor stack. Each new integration deepens both the investigative context and the response capabilities available to every investigation.

<!-- para:0027 -->
"We're building a platform where every security signal, regardless of vendor, gets the same depth of analysis and quality of outcome," Hillard said. As the threat landscape accelerates, e Sentire's bet is that depth and speed aren't a tradeoff anymore.

<!-- para:0028 -->
‍
