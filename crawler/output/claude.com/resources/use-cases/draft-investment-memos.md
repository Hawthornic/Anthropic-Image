---
source_url: https://claude.com/resources/use-cases/draft-investment-memos
title: "Draft investment memos"
section: resources
---

<!-- para:0001 -->
# Draft investment memos

<!-- para:0002 -->
- Author Anthropic
- Category: Finance
- Model Sonnet 4.5
- Features Extended Thinking Web Search Connectors
- Share [Copy link](https://claude.com/resources/use-cases/draft-investment-memos#)https://claude.com/resources/use-case/draft-investment-memos

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude can connect directly to your financial tools, letting you query using natural language and receive analysis with source citations. Instead of opening multiple browser tabs to gather data, copying metrics into spreadsheets, and then formatting a Word document from scratch, you can request the complete workflow in one conversation.

<!-- para:0005 -->
Tell Claude which company you're evaluating, what metrics drive your investment decision, and what deliverable format you need.

<!-- para:0006 -->
I'm evaluating Cloud Bridge Technologies (ticker: CLDG) for a potential equity investment and need an initial memo for our IC meeting next week.

<!-- para:0007 -->
**Pull the data I need: ** Using Daloopa, get Cloud Bridge's revenue, operating margins, and free cash flow for the last 12 quarters, plus their segment revenue breakdowns. Using Kensho, identify who Cloud Bridge lists as competitors in their SEC filings and pull revenue growth and margins for those competitors. Also get Cloud Bridge's key business relationships and major customers.**

<!-- para:0008 -->
**Analyze this: **Calculate cloud platform segment growth versus overall company growth. Determine free cash flow conversion rate. Compare margins year-over-year. Benchmark Cloud Bridge against the competitors we identified. Flag customer concentration risks.**

<!-- para:0009 -->
**Create a professional investment memo in Word format: **executive summary with recommendation, business overview with segment analysis, financial performance highlighting trends, competitive positioning, valuation assessment, and key risks. Use IC-ready formatting.**

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
Connect your data platforms so Claude produces memos with current data rather than requiring manual metric gathering from multiple sources.

<!-- para:0012 -->
## Required context

<!-- para:0013 -->
Use [connectors](https://claude.com/blog/integrations) to give Claude access to financial data providers. Browse through the connector library in your [settings](https://claude.ai/settings/connectors) to find tools from [trusted financial partners](https://claude.com/partners/mcp).

<!-- para:0014 -->
Set up connections to [Daloopa](https://claude.ai/directory/67e0ebd7-f7c3-4917-b8f9-dc8c8cdcce13) for SEC filings and fundamental data, and [S&P Global](https://claude.ai/directory/d965405c-3467-4046-b5b3-e8fb8ed235eb)for market intelligence and competitor analysis.

<!-- para:0015 -->
This workflow uses capabilities available to [Claude for Enterprise](https://claude.com/blog/claude-for-enterprise) customers. Financial data connectors may require existing subscriptions or licenses with the underlying providers.

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
In the chat settings, make sure [Web Search](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search) is turned on for additional context on the company you are evaluating.

<!-- para:0018 -->
Enable [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) for better synthesis when combining data from multiple platforms and creating higher-quality document outputs.

<!-- para:0019 -->
## What Claude creates

<!-- para:0020 -->
Claude pulls data from Daloopa and S&P Global, calculates growth rates and margins, compares performance across competitors, and generates a professional Word document ready for investment committee review.

<!-- para:0021 -->
Perfect! I've retrieved the financial data and created your investment memo:

<!-- para:0022 -->
**Data Retrieved: **

<!-- para:0023 -->
- Cloud Bridge quarterly data: Revenue grew from $1.8B to $2.8B over 12 quarters, operating margins expanded from 37.5% to 41.2%, free cash flow increased from $610M to $915M
- Segment breakdown: Cloud Platform Services (58% of revenue, 34% growth), Developer Tools (28%, 18% growth), Professional Services (14%, 12% growth)
- Competitors from SEC filings: Data Flow Inc. and Sky Link Corp.
- Competitive data: Data Flow growing 19% at 36% margins, Sky Link growing 15% at 28% margins
- Business relationships: 8 major customers totaling 22% of cloud revenue, largest customer at 5%

<!-- para:0024 -->
**Analysis: **

<!-- para:0025 -->
- Cloud Platform segment growing 34% versus 27% overall company growth—driving mix improvement
- Free cash flow conversion at 33% margin demonstrates capital efficiency
- Margins expanded 380 basis points YoY, outpacing peers by 5-13 percentage points
- Cloud Bridge maintains strongest growth and margin profile among enterprise infrastructure competitors
- Customer concentration moderate and declining—no single-customer dependency risk

<!-- para:0026 -->
**Investment Memo: **

<!-- para:0027 -->
View your memo

<!-- para:0028 -->
The document includes executive summary with BUY recommendation and $165 target (28% upside), business overview analyzing segment performance, financial highlights showing margin expansion and cash generation, competitive benchmarking table, valuation using three methodologies, and risk assessment with mitigating factors. Formatted for IC presentation with professional typography and clear visual hierarchy.

<!-- para:0029 -->
## Follow up prompts

<!-- para:0030 -->
### Show source citations for verification

<!-- para:0031 -->
Get specific platform references and data points for every claim in the memo. Claude can trace every number and claim back to its source, showing you exactly where each piece of information came from.

<!-- para:0032 -->
Cite the exact source for each metric—I need to see platform name, date pulled, and which filing or transcript. Show me where the Q3 revenue number came from, which analyst report supports the margin expansion claim, and the specific competitor data points.

<!-- para:0033 -->
### Expand on the valuation methodology

<!-- para:0034 -->
Add detailed calculations and assumptions to support your price target. Claude shows the underlying math and how your valuation changes under different scenarios.

<!-- para:0035 -->
Show me the DCF math step-by-step: revenue assumptions, margin projections, discount rate, terminal value. Then create a sensitivity table showing how the target price changes if growth rates or margins differ from base case by 5 percentage points.

<!-- para:0036 -->
### Transform into presentation format

<!-- para:0037 -->
Convert your written memo into slides for your committee meeting. Claude restructures your content and creates charts to illustrate key findings.

<!-- para:0038 -->
Convert this analysis into a 6-slide Power Point: title slide with recommendation, business model overview, competitive comparison with charts, financial performance trends, valuation summary, and investment thesis. Visualize trends with visual elements, like graphs and charts.

<!-- para:0039 -->
## Tricks, tips, and troubleshooting

<!-- para:0040 -->
### Use specific and clear instructions

<!-- para:0041 -->
Claude has access to vast amounts of financial data when connected to multiple tools and sources. Without specific references in your prompt, you may receive more data than needed or miss specific, critical metrics. Provide clear direction to ensure Claude returns the information required for your analysis, saving time and improving accuracy.

<!-- para:0042 -->
### Download the actual memo, not just the preview

<!-- para:0043 -->
The in-chat preview may not show the final typography, spacing hierarchy, and formatted tables that the document has. Open the file to see—and continue editing—the complete output.

<!-- para:0044 -->
### Match model to task complexity

<!-- para:0045 -->
This example uses Claude Sonnet 4.5, the Claude model best suited for a balance of intelligence, speed, and cost for most use cases. If you need faster iteration (like rapid brainstorming or simple formatting), consider switching to Haiku 4.5, the fastest Claude model with near-frontier intelligence. To learn more about various models, visit our [Model Report](https://www.anthropic.com/transparency/model-report).

<!-- para:0046 -->
### Unlock specialized capabilities

<!-- para:0047 -->
In addition to the ability to connect to financial data tools, [Claude for Financial Services](https://claude.com/solutions/financial-services) adds expanded services. In addition to financial data connections, receive specialized Skills for institutional-grade analysis and frameworks, such as those for financial analysis or valuation. Also receive expert implementation support through tailored onboarding, training, and best practices.

<!-- para:0048 -->
## Ready to try for yourself?
