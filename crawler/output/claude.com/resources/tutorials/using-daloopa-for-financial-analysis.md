---
source_url: https://claude.com/resources/tutorials/using-daloopa-for-financial-analysis
title: "Using Daloopa for financial analysis"
section: resources
---

<!-- para:0001 -->
# Using Daloopa for financial analysis

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-daloopa-for-financial-analysis#)https://claude.com/resources/tutorials/using-daloopa-for-financial-analysis

<!-- para:0003 -->
The Daloopa integration provides Claude with access to a financial data extraction service that covers public company filings and metrics. This article explains how to set up and use Daloopa to retrieve financial data for your analysis.

<!-- para:0004 -->
The Daloopa integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
## What This Integration Provides

<!-- para:0006 -->
### Capabilities

<!-- para:0007 -->
The Daloopa integration enables Claude to access comprehensive financial data from public company filings.

<!-- para:0008 -->
- **Company Discovery and Identification: ** Search for companies using ticker symbols or company names across Daloopa's database of 3,500+ public companies. The search handles name variations and automatically matches to the correct entity.**‍**
- **Financial Metric Discovery: ** Explore all available data series for any company, including standard financial statements and company-specific KPIs like subscriber counts for streaming services or wafer shipments for semiconductors. This reveals unique operational metrics beyond standard line items.**‍**
- **Historical Data Retrieval: ** Access specific financial fundamentals across custom time periods, with most companies having 10+ years of data. Request individual quarters, full years, or any combination for flexible analysis.**‍**
- **Source-Linked Data Points: ** Every financial value includes a hyperlink to its exact location in SEC filings or investor materials, providing complete transparency and audit trails.**‍**
- **Flexible Period Selection: ** Request data for any combination of quarters or years to enable quarter-over-quarter comparisons, year-over-year analyses, or custom period selections matching your analytical needs.**‍**
- **Granular Metric Access: ** Access specific line items like segment revenue breakdowns or working capital components without retrieving entire financial statements.

<!-- para:0009 -->
## How Claude Uses Daloopa Data

<!-- para:0010 -->
Claude applies Daloopa's financial data to support your analysis.

<!-- para:0011 -->
- **Multi-Company Comparisons: ** Retrieves metrics for multiple companies and builds comparative tables showing revenue growth, margins, and other KPIs side by side to identify relative performance.**‍**
- **Trend Analysis Construction: ** Pulls data across multiple periods to calculate growth rates and identify patterns, highlighting periods of acceleration or deceleration in company performance.**‍**
- **Custom Metric Calculations: ** Computes derived metrics like free cash flow conversion or return on invested capital using raw financial data, creating calculations tailored to your analytical framework.**‍**
- **Data Quality Verification: ** Uses source links to reference specific filing locations, helping verify unusual figures or reconcile discrepancies with explanations from the original documents.**‍**
- **Earnings Analysis Automation: ** Following releases, pulls latest results and compares to prior periods, calculating variances and presenting structured analysis of key changes.**‍**
- **Metric Discovery for Unfamiliar Companies: ** First explores available metrics for new companies, then retrieves the most relevant KPIs, particularly useful when analyzing unfamiliar sectors with different performance indicators.

<!-- para:0012 -->
## Setting Up Daloopa Integration

<!-- para:0013 -->
Technical details of the Daloopa Integration can be found in Daloopa's [MCP Server Documentation](https://docs.daloopa.com/docs/daloopa-mcp). You will need to contact Daloopa to get access to the MCP server.

<!-- para:0014 -->
### For Organization Owners

<!-- para:0015 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).
2. Scroll down and click “Add custom connector" at the bottom of the list.
3. Enter integration URL: [https://mcp.daloopa.com/server/mcp](https://mcp.daloopa.com/server/mcp)‍
4. Name the integration (e.g., "Daloopa MCP")
5. Click "Add"

<!-- para:0016 -->
### For Individual Users

<!-- para:0017 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0018 -->
## Common Use Cases

<!-- para:0019 -->
### Multi-Company Benchmarking

<!-- para:0020 -->
`Using Daloopa, compare cash-on-cash returns for CAVA, SHAK, and CMG over the last 8 quarters. Include both the absolute values and quarter-over quarter growth rates to identify which company is improving operational efficiency fastest.`

<!-- para:0021 -->
**When to use: ** Evaluating relative performance across peer companies for investment decisions or competitive analysis.**

<!-- para:0022 -->
**Tip: ** Specify 3-10 companies with clear metrics for manageable output that fits well in tables or charts.**

<!-- para:0023 -->
### Time Series Analysis

<!-- para:0024 -->
`Pull revenue and gross margin trends for MSFT from Q1 2023 to Q1 2025. Show both the quarterly values and calculate the year-over-year growth rates for each quarter.`

<!-- para:0025 -->
**When to use: ** Tracking company performance over time to identify trends, seasonality, or inflection points.**

<!-- para:0026 -->
**Typical timeframe: ** 4-24 quarters provides good trend visibility without overwhelming detail.**

<!-- para:0027 -->
## Operational KPI Analysis

<!-- para:0028 -->
`Show me non-GAAP gross margins for top analog semiconductor companies. Focus on AMD, NVDA, INTC, AVGO, and QCOM to understand margin profiles in the sector.`

<!-- para:0029 -->
**When to use: ** Comparing operational efficiency metrics across companies in the same industry.**

<!-- para:0030 -->
**Note: ** Focus on 2-5 specific KPIs at a time for clarity in analysis.**

<!-- para:0031 -->
## Quarter-over-Quarter Analysis

<!-- para:0032 -->
`What changed most materially in Apple's latest quarter versus prior quarter? Focus on revenue, operating margin, and free cash flow changes.`

<!-- para:0033 -->
**When to use: ** Understanding momentum and recent changes in company performance, particularly useful right after earnings releases.**

<!-- para:0034 -->
**Works well with: ** Recent 2-4 reporting periods for focused analysis.**

<!-- para:0035 -->
## Post-Earnings Analysis

<!-- para:0036 -->
`Microsoft just reported earnings yesterday - pull their Q4 2024 results and compare them to both the prior quarter (Q3 2024) and year-ago quarter (Q4 2023). Include revenue by segment, operating margins, and any operational metrics like Azure growth or Office 365 subscribers that are available.`

<!-- para:0037 -->
**When to use: ** Immediately after a company reports earnings to quickly assess performance against multiple comparison periods.**

<!-- para:0038 -->
**Key benefit: ** Rapidly generate earnings summaries with quantified deltas and growth rates while the market is still digesting the results.**

<!-- para:0039 -->
**Note: ** Request specific segments or metrics mentioned in the earnings call for deeper insight into business drivers.**

<!-- para:0040 -->
## Discovering Available Metrics

<!-- para:0041 -->
`I'm analyzing Spotify (SPOT) and need to understand their key business metrics beyond standard financials. Search Daloopa for all available metrics related to subscribers, ARPU, content costs, and any other operational KPIs they report for the last 8 quarters.`

<!-- para:0042 -->
**When to use: ** Beginning analysis on an unfamiliar company or sector where you need to understand what unique metrics are tracked.**

<!-- para:0043 -->
**Why it matters: ** Many companies report industry-specific KPIs (like Spotify's Premium subscribers or Netflix's content amortization) that aren't in standard financial statements.**

<!-- para:0044 -->
**Tip: ** Start broad to discover available metrics, then narrow your request to the most relevant ones for detailed analysis.**

<!-- para:0045 -->
## Tips for Using Daloopa

<!-- para:0046 -->
- Use specific company tickers (MSFT, AAPL)
- Define clear time periods (Q1 2024, 2023FY)
- Request specific metrics rather than general categories
- Limit scope to reasonable number of companies for clear comparisons
- Consider data freshness - Daloopa updates after earnings releases but may not have real-time intraday data
