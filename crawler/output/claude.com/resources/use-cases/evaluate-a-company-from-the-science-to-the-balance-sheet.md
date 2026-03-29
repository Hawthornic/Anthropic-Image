---
source_url: https://claude.com/resources/use-cases/evaluate-a-company-from-the-science-to-the-balance-sheet
title: "Evaluate a company from the science to the balance sheet"
section: resources
---

<!-- para:0001 -->
# Evaluate a company from the science to the balance sheet

<!-- para:0002 -->
- Author Anthropic
- Category: Professional
- Model Opus 4.6
- Features Extended Thinking
- Share [Copy link](https://claude.com/resources/use-cases/evaluate-a-company-from-the-science-to-the-balance-sheet#)https://claude.com/resources/use-case/evaluate-a-company-from-the-science-to-the-balance-sheet

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Opus 4.6 reads across SEC filings, trial protocols, and patent documents simultaneously, reasoning through the dependencies between them. It catches where one document contradicts another — a risk factor in the 10-K that doesn't match revenue assumptions in the 10-Q, or an undisclosed regulatory requirement that changes the timeline.

<!-- para:0005 -->
Describe your investment question and what you're trying to evaluate. The filings you provide in the next section give Opus the specifics — your prompt can stay broad and Opus works through the analysis on its own.

<!-- para:0006 -->
I'm evaluating Meridian Therapeutics (~$4B mid-cap biotech) ahead of their Phase III readout. I've uploaded the 10-K, 10-Q, proxy, trial protocol, and patent filings.

<!-- para:0007 -->
Evaluate the science and trial design. Build a risk-adjusted pipeline valuation. Flag anything in the filings that contradicts management's guidance or earnings narrative. Model the downside scenarios I should be stress-testing.

<!-- para:0008 -->
Produce a research memo and a downloadable model. Tell me what I should be worried about that I haven't asked about.

<!-- para:0009 -->
## Give Claude context

<!-- para:0010 -->
Upload the full filing set together. Cross-document connections are where the critical findings live.

<!-- para:0011 -->
## Required context

<!-- para:0012 -->
## Optional context

<!-- para:0013 -->
If your filings are already on your computer, Cowork in [Claude Desktop](https://claude.com/download) [research preview] can read them directly from a folder rather than uploading individually.

<!-- para:0014 -->
If you connect [Claude in Chrome](https://claude.com/chrome), Claude can open SEC filings, earnings transcripts, or patent databases in new browser tabs and pull data directly from those sites.

<!-- para:0015 -->
[Extended Thinking](https://support.anthropic.com/en/articles/11145627-what-is-extended-thinking-and-how-do-i-use-it) lets Claude scale how deeply it reasons based on task complexity. For multi-document financial analysis, it's worth turning on.

<!-- para:0016 -->
## What Claude creates

<!-- para:0017 -->
Claude produces an integrated research memo, a downloadable financial model, an interactive scenario dashboard, and a patent cliff timeline. Opus 4.6 reads across all five documents simultaneously, and one finding it surfaced on its own is the kind of detail that could change the risk assessment.

<!-- para:0018 -->
### Research memo: Meridian Therapeutics

<!-- para:0019 -->
**1. Mechanism and Phase II signal**

<!-- para:0020 -->
MRD-4420 is a selective JAK1 inhibitor targeting the IL-6/STAT3 axis in rheumatoid arthritis. The selectivity matters — first-generation JAK inhibitors hit multiple isoforms, triggering the 2021 FDA boxed warning. Phase II showed ACR50 response rates of 48% vs. 32% for adalimumab (n=340), clinically meaningful but not powered for cardiovascular safety.

<!-- para:0021 -->
**2. Phase III risk**

<!-- para:0022 -->
The superiority design (n=1200) requires wider margins than non-inferiority. At the Phase II effect size, power is ~88%. If the effect attenuates 25% (common in Phase II-to-III transitions), power drops to ~62%.

<!-- para:0023 -->
**3. Buried regulatory finding**

<!-- para:0024 -->
Page 187 of the 10-K discloses an FDA request for a 52-week cardiovascular safety assessment — not in the original protocol. Cross-referencing the 10-Q, R&D guidance increased $45M without explanation. This likely means an additional safety extension study: 12–18 months added to timeline, $40–50M in costs, pushing earliest revenue to late 2028 vs. management’s mid-2027 guidance. At $68M quarterly burn, cash runway narrows from 14 months post-filing to roughly 8.

<!-- para:0025 -->
**4. Scenario summary**

<!-- para:0026 -->
The model maps three scenarios based on the assumptions above:

<!-- para:0027 -->
Clean data, on-timeline: highest valuation range. Ambiguous data with 6-month delay and dilutive raise: mid-range. Failed superiority with pivot to non-inferiority: lowest range.

<!-- para:0028 -->
Per-share estimates depend on your discount rate, probability weights, and dilution assumptions. Adjust these in the downloadable model below.

<!-- para:0029 -->
### Interactive scenario dashboard

<!-- para:0030 -->
*[View the scenario dashboard]*

<!-- para:0031 -->
Toggle between scenarios and adjust key variables (probability of success, peak sales, discount rate, timeline delay) and watch the valuation recalculate in real time.

<!-- para:0032 -->
### Patent cliff and cash runway timeline

<!-- para:0033 -->
*[View the timeline]*

<!-- para:0034 -->
Core composition-of-matter patent expiration in 2036, method-of-use extension to 2039, mapped against cash runway and projected revenue ramp under each scenario.

<!-- para:0035 -->
*[Download: meridian-therapeutics-pipeline-model.xlsx]*

<!-- para:0036 -->
Adjustable inputs for all key variables. Changing any assumption recalculates pipeline NPV and dilution scenarios automatically.

<!-- para:0037 -->
***Important: ** Claude is a research tool, not a financial advisor. This analysis surfaces findings and structures scenarios based on the documents and assumptions you provide. All projections reflect those inputs and may not match actual outcomes. Consult a qualified financial professional before making investment decisions.****

<!-- para:0038 -->
## Follow up prompts

<!-- para:0039 -->
### Search deeper with Research

<!-- para:0040 -->
Opus 4.6 is the strongest model at surfacing answers from dense document sets. With Research, Opus 4.6 goes off on its own, pulls from dozens of sources across competitor pipelines, FDA advisory committee meetings, analyst reports, and more, then comes back with a full, structured report ready for review.

<!-- para:0041 -->
*Research the competitive landscape for JAK inhibitors in autoimmune. Who else is in Phase II or III with selective JAK1 programs? How does MRD-4420’s selectivity compare, and is there a risk a competitor reaches market first?*

<!-- para:0042 -->
### Push the analysis further

<!-- para:0043 -->
Opus 4.6 holds both the science and the financials in context at once, which means it can reason through multi-step problems where a change in one domain cascades into another.

<!-- para:0044 -->
*Model what happens if Phase III misses the superiority endpoint by a narrow margin. Walk through the decision tree: does management pivot to non-inferiority? How does that cascade through the timeline, cash runway, and valuation?*

<!-- para:0045 -->
### Take the outputs into [Claude in Excel](https://support.claude.com/en/articles/12650343-claude-in-excel)

<!-- para:0046 -->
Opus 4.6 produces financial models and scenario analyses structured for direct use. Export to Claude in Excel to stress-test assumptions interactively and integrate with your own models.

<!-- para:0047 -->
*Export the pipeline valuation model to Excel. I want to adjust the discount rates and approval probabilities myself and run additional sensitivity analysis.*

<!-- para:0048 -->
## Tricks, tips, and troubleshooting

<!-- para:0049 -->
### Front-load your context

<!-- para:0050 -->
Opus 4.6 reads across your full document set before surfacing findings. The quality of what you share upfront directly shapes the quality of what you get back. Upload the complete filing set at once. The cross-document connections are where the critical findings live.

<!-- para:0051 -->
### Build a Cowork plugin for your due diligence workflow

<!-- para:0052 -->
If your team runs due diligence with a standard set of steps, checklists, or evaluation criteria, you can package that process as a Cowork plugin. A plugin teaches Claude your specific methodology — what to look for in filings, how to weight risk factors, which red flags to escalate — so the analysis follows your framework, not a generic one. You could set up a /due-diligence command that runs your full process against any new set of filings, or a skill that applies your firm’s valuation standards automatically whenever Claude builds a model.

<!-- para:0053 -->
### Let Claude flag what you missed

<!-- para:0054 -->
Opus 4.6 works through more of the analysis before asking for direction, and it reads across documents in ways that catch what a surface read won’t. An instruction like “flag anything that changes the investment thesis” often surfaces findings you didn’t know to look for.

<!-- para:0055 -->
## Ready to try for yourself?
