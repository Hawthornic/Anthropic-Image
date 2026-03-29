---
source_url: https://claude.com/resources/use-cases/stress-test-your-financial-plan-across-scenarios
title: "Stress-test your financial plan across scenarios"
section: resources
---

<!-- para:0001 -->
# Stress-test your financial plan across scenarios

<!-- para:0002 -->
- Author Anthropic
- Category: Personal
- Model Opus 4.6
- Features Extended Thinking
- Share [Copy link](https://claude.com/resources/use-cases/stress-test-your-financial-plan-across-scenarios#)https://claude.com/resources/use-case/stress-test-your-financial-plan-across-scenarios

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Opus 4.6 synthesizes across your full set of financial documents before building anything. It connects variables that most calculators treat independently — tax brackets, withdrawal sequences, Social Security timing — and reasons through how they cascade over decades.

<!-- para:0005 -->
Describe your situation and what you want to understand. Your financial documents, covered in the next section, provide the detail. Opus 4.6 determines the approach, runs the analysis, and produces working spreadsheets and scenario explorers. From there, you can keep working in [Claude in Excel](https://claude.com/claude-for-excel).

<!-- para:0006 -->
*I’m 52, hoping to retire at 62. My partner and I have about $1.2M across a 401(k), Roth IRA, and taxable brokerage. I make $185K, he makes $95K, we spend about $8,500/month. Mortgage is paid off in 2031. Not sure if we should be doing Roth conversions now while we’re in a lower bracket.*

<!-- para:0007 -->
*I’ve uploaded our tax returns, investment statements, Social Security estimates, and budget. Where does this plan break and what are the highest-leverage moves?*

<!-- para:0008 -->
## Give Claude context

<!-- para:0009 -->
The more complete your uploads, the more connections Claude can find across your tax situation, investment accounts, and benefit estimates.

<!-- para:0010 -->
## Required context

<!-- para:0011 -->
Upload your financial documents: tax returns, investment account statements, Social Security benefit estimates, and a monthly expense breakdown.

<!-- para:0012 -->
## Optional context

<!-- para:0013 -->
[Extended Thinking](https://support.anthropic.com/en/articles/11145627-what-is-extended-thinking-and-how-do-i-use-it) lets Claude scale how deeply it reasons based on task complexity. Turning it on gives Claude more room to reason through complex, interdependent variables before producing results.

<!-- para:0014 -->
## What Claude creates

<!-- para:0015 -->
Opus 4.6 produces a working financial model with probability distributions across a range of modeled scenarios, an interactive scenario explorer, and a clear action plan. Keep in mind, Claude produces outputs based on the documents you provide. You should review any strategies with a qualified financial professional before acting on them. Here’s the kind of analysis you’ll get:

<!-- para:0016 -->
I’ve read through all your documents. Before building anything, I want to flag something: your mortgage payoff in 2031, your peak earnings window, and the Roth conversion opportunity all overlap. That’s actually a timing advantage most calculators would miss. Here’s what I found.

<!-- para:0017 -->
**Financial snapshot: ** Combined income, savings by account type, monthly spending, savings rate, and estimated Social Security benefits.**

<!-- para:0018 -->
**Monte Carlo results: ** Estimated success rate to age 92 based on historical return distributions, median portfolio at key ages, and the 10th-percentile downside. These results shift meaningfully when you change the underlying assumptions, which the scenario explorer lets you do.**

<!-- para:0019 -->
**Potential vulnerabilities in the model: ** Sequence-of-returns risk. A bear market in your first two retirement years drops estimated success rates significantly. The same downturn a decade later barely registers.**

<!-- para:0020 -->
**Three strategies with the largest impact on estimated success rate: ** Roth conversion ladder, delaying Social Security to 70, and a two-year cash buffer, each with a modeled impact on the probability distribution.**

<!-- para:0021 -->
**Interactive scenario explorer: ** Toggle strategies on and off and watch the probability distribution shift. Adjust returns, inflation, and spending assumptions.**

<!-- para:0022 -->
**Downloadable spreadsheet: ** Adjustable inputs, Monte Carlo results, Roth conversion schedule, withdrawal sequence, and year-by-year tax projections.**

<!-- para:0023 -->
***Important: ** This analysis models scenarios based on the inputs you provided and general financial principles. It does not account for your full financial picture, tax situation, or personal circumstances the way a licensed advisor would. Review any strategies with a fee-only financial planner or CPA before making changes to your plan.****

<!-- para:0024 -->
## Follow up prompts

<!-- para:0025 -->
### Stress-test a life change

<!-- para:0026 -->
Opus 4.6 stays with the full complexity when you throw a wrench in the plan. Describe a scenario and it re-runs the entire analysis, tracing how one variable ripples through income, taxes, withdrawal sequences, and long-term success rate without simplifying away the interactions.

<!-- para:0027 -->
*What if I lose my job at 57 and can only find work at $120K? How does that change the Roth conversion window?*

<!-- para:0028 -->
### Take the model into Excel

<!-- para:0029 -->
Opus 4.6 produces downloadable spreadsheets you can open in [Claude in Excel](https://claude.com/claude-for-excel) to keep adjusting. Change an assumption, test a new scenario, or extend the projections without rebuilding anything from scratch.

<!-- para:0030 -->
*I want to play with the inflation assumptions. What happens to the withdrawal sequence if we get a 5% inflation year in 2029?*

<!-- para:0031 -->
### Ask what you’re missing

<!-- para:0032 -->
Opus 4.6 reasons across finance and tax at domain-expert level and will surface things you didn’t think to ask about, like a narrow window for conversions created by a tax bracket transition or a withdrawal order that saves you money over decades. Push it further.

<!-- para:0033 -->
*What would a financial planner flag about this plan that I haven’t asked about?*

<!-- para:0034 -->
## Tricks, tips, and troubleshooting

<!-- para:0035 -->
### Start with your situation

<!-- para:0036 -->
If you aren't sure about the approach you'd like to take, describe your financial situation and what you want to understand. Opus 4.6 identifies an analytical approach from your context on its own.

<!-- para:0037 -->
### Upload everything at once

<!-- para:0038 -->
Opus 4.6 synthesizes across your full document set before building anything, finding interactions between your tax returns, investment statements, and Social Security estimates that cascade through each other. The more complete the picture, the stronger the analysis.

<!-- para:0039 -->
### Run longer analyses through Cowork

<!-- para:0040 -->
If your financial documents are already on your computer, Cowork in [Claude Desktop](https://claude.com/download) [Research Preview] can read them directly from a folder rather than uploading individually. For complex plans with many accounts, tax considerations, and interdependent variables, Cowork handles longer-running analysis without hitting context limits, spinning up sub-agents to model different scenarios in parallel before synthesizing the results.

<!-- para:0041 -->
### Start another task while this one runs

<!-- para:0042 -->
Financial modeling runs across many variables and scenarios. Open a new session from the sidebar for other work. You'll see a grey dot in the sidebar when this one needs attention.

<!-- para:0043 -->
## Ready to try for yourself?
