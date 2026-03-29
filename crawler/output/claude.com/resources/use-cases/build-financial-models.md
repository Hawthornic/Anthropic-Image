---
source_url: https://claude.com/resources/use-cases/build-financial-models
title: "Build financial models"
section: resources
---

<!-- para:0001 -->
# Build financial models

<!-- para:0002 -->
- Author Anthropic
- Category: Finance
- Model Sonnet 4.5
- Features Extended Thinking Web Search Connectors
- Share [Copy link](https://claude.com/resources/use-cases/build-financial-models#)https://claude.com/resources/use-case/build-financial-models

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Investment analysis means pulling data from research platforms, building financial models, and formatting to firm standards—work that can occupy analysts for days. Claude connects to your data sources and generates working models based on your deal parameters. You review the assumptions and edit directly in Excel with formulas intact, rather than building from scratch.

<!-- para:0005 -->
Tell Claude about your investment opportunity and what your partners need to see. Be specific about the deal parameters, key questions, and timeline.

<!-- para:0006 -->
I'm evaluating Medi Tech Solutions (healthcare SaaS) and need a complete investment analysis.

<!-- para:0007 -->
Deal structure: $75M growth equity stake at 3.6x ARR entry, exit at 7.0x in year 5. Current metrics are $50M ARR growing 35% with 18% EBITDA margin.

<!-- para:0008 -->
**Get the company financials from Daloopa** - search for Medi Tech Solutions and pull their historical revenue, EBITDA margins, customer metrics, and growth rates.**

<!-- para:0009 -->
**Pull healthcare SaaS comparables from S&P Global** - find public companies in the sector and get their current trading multiples, growth rates, and margin profiles. I need this to validate our 7.0x exit assumption.**

<!-- para:0010 -->
**Search the web for healthcare SaaS customer concentration benchmarks** - the company mentioned their top 3 customers represent about 40% of revenue and I need to know if that's typical or concerning for this sector. Also look up recent healthcare SaaS growth trends to stress-test the 35% growth assumption.**

<!-- para:0011 -->
**Retrieve our IC template from Box** - search the "IC Templates" folder and use the private equity model format as the structure.**

<!-- para:0012 -->
**Key questions to address**: How do returns look if growth slows to 25% or 20%? What does the customer concentration risk mean for our downside scenario? How does our 7.0x exit assumption compare to where public healthcare SaaS companies are trading today?**

<!-- para:0013 -->
Create an Excel model with scenarios (base, upside, downside), sensitivity analysis on growth and exit multiple, risk assessment focusing on customer concentration, and a comps table showing where public companies trade. Use sophisticated private equity formatting with premium visual quality, an intentional color scheme, working formulas, frozen panes, and conditional formatting.

<!-- para:0014 -->
## Give Claude context

<!-- para:0015 -->
Connect your data platforms so Claude conducts research and analysis based on current data rather than requiring manual gathering from multiple sources.

<!-- para:0016 -->
## Required context

<!-- para:0017 -->
Use [connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) to give Claude access to financial data providers. Browse through the connector library in your settings to find tools from [trusted financial partners](https://claude.com/partners/mcp).

<!-- para:0018 -->
Enable connections to [S&P Global](https://support.claude.com/en/articles/12220135-using-s-p-global-data-for-financial-analysis), [Daloopa](https://support.claude.com/en/articles/12220011-using-daloopa-for-financial-analysis), and [Box](https://claude.ai/directory/a5380429-c773-4180-b642-301418240c8c) so Claude can access your financial research stack.

<!-- para:0019 -->
## Optional context

<!-- para:0020 -->
Turn on [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) for complex multi-position analysis and to produce higher-quality workbooks with working formulas and charts.

<!-- para:0021 -->
Make sure [Web Search](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search) is enabled so Claude can incorporate current market context and historical scenario precedents.

<!-- para:0022 -->
## What Claude creates

<!-- para:0023 -->
Claude pulled financials from Daloopa, analyzed healthcare SaaS comparables from S&P Capital IQ, built three-scenario projections with sensitivity analysis, and formatted the multi-sheet model to match your IC template standards.

<!-- para:0024 -->
I've created your investment analysis model.

<!-- para:0025 -->
**Data sources used: **

<!-- para:0026 -->
- Pulled Medi Tech's financial history from Daloopa (verified the $50M ARR, 35% growth rate, 18% EBITDA margin)
- Retrieved 7 healthcare SaaS comparables from S&P Global (Veeva, Doximity, Health Catalyst, Phreesia, Certify, Next Gen, Health Stream)
- Searched web for healthcare SaaS customer concentration norms - found 40-45% concentration in top 3 customers is common for companies at this scale, though concentration typically decreases as ARR crosses $100M
- Used the "Growth Equity Model Template v3" from your IC Templates folder in Drive

<!-- para:0027 -->
**Model structure: **

<!-- para:0028 -->
- Executive Summary - Deal parameters, three-scenario returns (Bear: 2.2x/17% IRR, Base: 3.0x/25% IRR, Bull: 4.1x/33% IRR), investment thesis, and risk overview
- Financial Model - 5-year projections with blue-text assumption cells, automatic calculations through P&L and cash flows, exit valuation at 7.0x ($225M EV, $146M cash return on $75M invested)
- Scenario Analysis - Three scenarios varying growth (25-45% range), margin expansion (18-24% EBITDA), and exit multiples (5.5-8.5x), plus IRR sensitivity table across 25 combinations
- Risk Assessment - Seven risks mapped: customer concentration (42% in top 3), CMS reimbursement changes, Epic/Cerner competition, platform scalability, key person risk, data security compliance, and market saturation. Each includes likelihood, impact, and mitigation approach
- Comps & Valuation - Public healthcare SaaS companies trading at 4.5x median ARR multiple vs. Medi Tech's 3.6x entry. Medi Tech shows 35% growth vs. peer median of 18% and Rule of 40 score of 53 vs. peer median of 28

<!-- para:0029 -->
**Customer concentration finding: ** The 42% concentration matches sector norms at this revenue scale. Web research shows similar-sized healthcare SaaS companies typically see this decrease to 25-30% as they cross $100M ARR through customer base expansion.**

<!-- para:0030 -->
**Exit multiple assumption: ** The 7.0x exit sits above current public comps (4.5x median) but below where faster-growing peers traded 18 months ago (8-10x range). Assumes market multiples recover partially and Medi Tech's growth premium commands a valuation spread.**

<!-- para:0031 -->
All formulas are functional. Color coding follows PE standards (blue inputs, black calculations, green cross-sheet references).

<!-- para:0032 -->
**View your financial model**

<!-- para:0033 -->
## Follow up prompts

<!-- para:0034 -->
### Create the IC memo

<!-- para:0035 -->
Turn your financial model into a written investment recommendation. Claude converts the numbers and analysis into a narrative memo that explains the returns, risks, and why this deal makes sense.

<!-- para:0036 -->
Take the key insights from this model and create an investment memo. Use our standard IC template from Drive. Structure it with these sections: Deal Overview, Investment Thesis, Returns Summary, Key Risks, Recommendation.

<!-- para:0037 -->
### Validate the growth assumptions

<!-- para:0038 -->
Check if your projections match reality. Claude researches how similar companies actually grew at this stage and tells you if your forecast is reasonable or too optimistic.

<!-- para:0039 -->
These growth numbers feel optimistic. Pull actual growth trajectories from similar healthcare SaaS companies—either from our portfolio or public comps. Show me year-over-year growth rates for companies that started at $50M ARR. Does our path match reality or are we being too aggressive?

<!-- para:0040 -->
### Research recent exit multiples

<!-- para:0041 -->
Use [Research](https://support.claude.com/en/articles/11088861-using-research-on-claude) to find current transaction data across multiple sources. Research takes a few minutes but delivers a thorough report with verified citations. With financial data connectors enabled, Claude can cross-reference your internal knowledge with external market data.

<!-- para:0042 -->
Find healthcare SaaS exit transactions in the last 18 months for companies in the $50-100M ARR range. What multiples did they actually achieve? How does our 7.0x exit assumption compare to recent deals, not just public trading multiples?

<!-- para:0043 -->
## Tricks, tips, and troubleshooting

<!-- para:0044 -->
### Keep comps fresh with connected data

<!-- para:0045 -->
Once you connect S&P Capital IQ or Daloopa, refresh comparable company multiples without manual updates. Say: "Pull latest healthcare SaaS comps and update the valuation sheet." Your benchmarking stays current as public market multiples shift.

<!-- para:0046 -->
### Work directly in your spreadsheet with Claude

<!-- para:0047 -->
Once Claude creates your financial model, download and open the file in Excel. With [Claude for Excel](http://claude.com/claude-for-excel), you can get instant explanations of any formula, test scenarios without breaking dependencies, or trace errors to their source. Claude provides cell-level citations for every calculation.Claude for Excel is currently in beta as a research preview. [Join the waitlis](https://www.claude.com/claude-for-excel) [t](https://www.claude.com/claude-for-excel) to get access.

<!-- para:0048 -->
### **Unlock further capabilities**

<!-- para:0049 -->
In addition to the ability to connect to financial data tools, [Claude for Financial Services](https://claude.com/solutions/financial-services)adds expanded services. In addition to financial data connections, receive specialized Skills for institutional-grade analysis and frameworks, such as those for financial analysis or valuation. Also receive expert implementation support through tailored onboarding, training, and best practices.

<!-- para:0050 -->
## Ready to try for yourself?
