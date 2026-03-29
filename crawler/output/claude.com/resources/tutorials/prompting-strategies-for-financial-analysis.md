---
source_url: https://claude.com/resources/tutorials/prompting-strategies-for-financial-analysis
title: "Prompting strategies for financial analysis"
section: resources
---

<!-- para:0001 -->
# Prompting strategies for financial analysis

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/prompting-strategies-for-financial-analysis#)https://claude.com/resources/tutorials/prompting-strategies-for-financial-analysis

<!-- para:0003 -->
Effective prompting helps you use Claude's financial analysis capabilities efficiently and accurately. This guide provides strategies for writing clear, specific prompts that produce the results you need while avoiding common issues that can lead to incomplete or overwhelming outputs.

<!-- para:0004 -->
## Discovering What Data Claude Can Access

<!-- para:0005 -->
Before starting any financial analysis, it's essential to understand which data sources Claude has available. Different integrations provide different types of data—Daloopa focuses on SEC filings and fundamentals and Kensho offers comprehensive S&P Global market data and business relationships. Knowing what's accessible prevents wasted time requesting unavailable data.

<!-- para:0006 -->
Start your analysis sessions by confirming data availability:

<!-- para:0007 -->
- "*What S&P Global financial data can you access through Kensho?*"

<!-- para:0008 -->
- "*Can you retrieve segment data through Daloopa?*"

<!-- para:0009 -->
This preliminary step prevents requesting analyses that require unavailable data and helps you understand which integration to specify for different types of analysis.

<!-- para:0010 -->
## Core Prompting Principles

<!-- para:0011 -->
### Be Specific and Clear

<!-- para:0012 -->
Claude has access to vast amounts of financial data through multiple sources. Without specific instructions, you may receive more data than needed or miss critical metrics. Clear specifications ensure you get exactly what your analysis requires, saving time and improving accuracy.

<!-- para:0013 -->
Consider these contrasting examples:

<!-- para:0014 -->
# Bad prompt

<!-- para:0015 -->
`Claude, please Analyze Microsoft`

<!-- para:0016 -->
This vague request could trigger retrieval of hundreds of data points across multiple years, making it difficult to identify relevant insights. Claude won't know whether you want valuation metrics, operational performance, or competitive positioning.

<!-- para:0017 -->
# Good prompt

<!-- para:0018 -->
`Using Daloopa, retrieve Microsoft's (MSFT) revenue, operating margin, and free cash flow for Q1 2023 through Q4 2024, then calculate year-over-year growth rates`

<!-- para:0019 -->
This specific request identifies the data source, company ticker, exact metrics, time period, and desired calculations. Claude knows precisely what to retrieve and how to process it. Your prompts should include company tickers, exact metric names, specific time periods, and the desired output format.

<!-- para:0020 -->
### Request Only Relevant Information

<!-- para:0021 -->
Financial integrations can pull extensive datasets covering hundreds of metrics across many years. Requesting everything available wastes time, increases processing complexity, and makes it harder to focus on what matters for your specific analysis. Targeted requests produce cleaner, more actionable results.

<!-- para:0022 -->
`Pull all financial data for Tesla, Ford, and GM`

<!-- para:0023 -->
This request could return thousands of data points including irrelevant metrics, making it difficult to conduct focused analysis.

<!-- para:0024 -->
`For Tesla (TSLA), Ford (F), and GM, retrieve only automotive revenue and gross margins for the last 4 quarters to compare operational efficiency`

<!-- para:0025 -->
This focused request retrieves only the metrics needed for operational comparison. When crafting prompts, think about your analytical objective first, then request only the data that directly supports that analysis. This approach produces more manageable outputs and clearer insights.

<!-- para:0026 -->
### Control Data Volume

<!-- para:0027 -->
Large data requests can slow down analysis and produce overwhelming outputs that are difficult to interpret. Managing scope ensures Claude can process requests efficiently and present results in digestible formats. This is particularly important when working with multiple companies or extended time periods.

<!-- para:0028 -->
`Get all available historical data for the entire S&P 500`

<!-- para:0029 -->
This request is likely to fail or produce unusable results due to the sheer volume of data involved.

<!-- para:0030 -->
`Retrieve the last 8 quarters of revenue and EBITDA margin for these 5 software companies: CRM, NOW, WDAY, TEAM, and ZM`

<!-- para:0031 -->
This manageable request focuses on a specific peer group with defined metrics and a reasonable time frame. As a general guideline, limit requests to 3-5 companies for detailed analysis, request specific line items rather than entire financial statements, and use date ranges that match your analytical needs rather than requesting all available history.

<!-- para:0032 -->
## Structuring Complex Analyses

<!-- para:0033 -->
### Request Analysis Plans First

<!-- para:0034 -->
Complex financial analyses involve multiple steps, data sources, and assumptions. Having Claude outline the approach first lets you catch potential issues before time is spent on calculations. This is especially valuable for valuations, modeling, or multi-company comparisons where methodology choices significantly impact results. A clear plan also ensures alignment between your expectations and Claude's intended approach.

<!-- para:0035 -->
`Do a complete valuation analysis of Netflix`

<!-- para:0036 -->
This open-ended request leaves too many decisions to Claude, potentially resulting in an analysis that doesn't match your requirements or uses inappropriate assumptions.

<!-- para:0037 -->
`Create a plan for valuing Netflix (NFLX) using DCF methodology. List the data you'll need, calculations you'll perform, and assumptions you'll make. Let me review before you proceed.`

<!-- para:0038 -->
This approach gives you visibility into the planned methodology before execution begins. You can review the data sources Claude intends to use, verify that key assumptions are reasonable, identify any missing components, and adjust the approach before investing time in detailed calculations. This preliminary review often catches issues that would be costly to fix after the analysis is complete.

<!-- para:0039 -->
### Use Step-by-Step Approaches

<!-- para:0040 -->
Breaking complex analyses into discrete steps provides transparency into Claude's process and allows for course correction. You can verify data accuracy, check calculations, and adjust methodology between steps rather than discovering issues only in final results. This approach is particularly valuable when working with multiple data sources or when calculations build upon each other.

<!-- para:0041 -->
`Compare these 5 companies and tell me which is best`

<!-- para:0042 -->
This request produces a black-box analysis where you can't verify the underlying data or logic.

<!-- para:0043 -->
`Let's analyze these companies step by step. First, pull their P/E ratios. Show me the results before proceeding to the next metric.`

<!-- para:0044 -->
This incremental approach allows you to catch errors early, adjust the analysis based on initial findings, understand Claude's reasoning at each stage, and verify data accuracy before it's used in calculations. Each step becomes a checkpoint where you can ensure the analysis remains on track.

<!-- para:0045 -->
### Build Incrementally

<!-- para:0046 -->
Starting with data retrieval before moving to analysis ensures you're working with accurate, complete information. This approach prevents wasted effort on calculations using incomplete data and helps identify data gaps before they affect conclusions. It also allows you to adjust your analysis based on what data is actually available.

<!-- para:0047 -->
A typical incremental workflow might look like this:

<!-- para:0048 -->
First, retrieve Amazon's segment revenue for the last 8 quarters and show me what's available

<!-- para:0049 -->
Now calculate the growth rate for AWS specifically

<!-- para:0050 -->
Finally, compare AWS growth to Azure's growth over the same period

<!-- para:0051 -->
Each step builds on the previous one, ensuring that you have the necessary foundation before proceeding. This method is particularly useful when exploring unfamiliar companies or sectors where you may not know exactly what data is available until you start the analysis.

<!-- para:0052 -->
## Common Issues and Solutions

<!-- para:0053 -->
### Data Availability Challenges

<!-- para:0054 -->
**Issue: ** Requesting data that doesn't exist or isn't available through current integrations can derail your analysis.**

<!-- para:0055 -->
**Solution: ** Start by asking what's available. For example: "*What operational metrics does Daloopa have for Spotify?*" This preliminary check prevents building analyses around unavailable data.**

<!-- para:0056 -->
Different companies report different metrics, and not all historical data may be available. Confirming availability upfront saves time and allows you to adjust your analytical approach based on what data is actually accessible.

<!-- para:0057 -->
### Scope Management

<!-- para:0058 -->
**Issue: ** Requesting analysis of 50+ companies at once can produce overwhelming results or cause the analysis to fail entirely.**

<!-- para:0059 -->
**Solution: ** Break large analyses into smaller groups of 5-10 companies, then combine the results.**

<!-- para:0060 -->
For example, instead of "*Analyze all REITs,*" try being more specific: "*Analyze these 5 industrial REITs first: PLD, DRE, FR, TRNO, STAG.*" After reviewing the initial results, you can proceed with additional groups. This approach ensures each batch receives thorough analysis and allows you to refine your criteria based on initial findings.

<!-- para:0061 -->
### Ambiguous Requests

<!-- para:0062 -->
**Issue: ** Terms like "good companies" or "strong performance" mean different things to different analysts and can lead to results that don't match your criteria.**

<!-- para:0063 -->
**Solution: ** Define your criteria explicitly using quantitative thresholds.**

<!-- para:0064 -->
Here's an example:

<!-- para:0065 -->
`Find me good value stocks`

<!-- para:0066 -->
`Find companies with P/E below 15, positive free cash flow, and revenue growth above 5%`

<!-- para:0067 -->
The specific criteria ensure Claude identifies companies that match your investment philosophy and screening parameters. This precision is particularly important when building screens or identifying investment candidates.

<!-- para:0068 -->
## Tips for Efficient Prompting

<!-- para:0069 -->
- State your end goal upfront so Claude can suggest appropriate approaches.
- Use consistent terminology throughout your analysis.
- Save successful prompt templates for recurring analyses.
- Start with smaller test requests before scaling up.
- Name the specific data source in your prompts (Daloopa, Kensho/S&P Global).
- Consider data freshness - specify if you need latest available or specific historical data.
- Include output format preferences (table, bullet points, narrative).
- Request source citations when accuracy is critical.
- For recurring analyses, establish a consistent prompt structure you can reuse.

<!-- para:0070 -->
These strategies help you get the most value from Claude's financial analysis capabilities while avoiding common pitfalls. As you develop experience with the system, you'll identify prompt patterns that work well for your specific analytical needs.
