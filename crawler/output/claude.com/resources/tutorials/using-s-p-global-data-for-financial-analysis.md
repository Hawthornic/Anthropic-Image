---
source_url: https://claude.com/resources/tutorials/using-s-p-global-data-for-financial-analysis
title: "Using S&P global data for financial analysis"
section: resources
---

<!-- para:0001 -->
# Using S&P global data for financial analysis

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-s-p-global-data-for-financial-analysis#)https://claude.com/resources/tutorials/using-s-p-global-data-for-financial-analysis

<!-- para:0003 -->
The Kensho LLM-ready API integration provides Claude with access to S&P Global’s financial data, delivering comprehensive market and fundamental data for public companies. This article explains how to set up the Kensho integration and use S&P data for financial analysis, including price history, financial statements, segment data, and business relationships.

<!-- para:0004 -->
## What This Integration Provides

<!-- para:0005 -->
### Capabilities

<!-- para:0006 -->
The integration with Kensho’s LLM-ready API enables Claude to access multiple dimensions of S&P Global’s financial and market data:

<!-- para:0007 -->
- **Company Identification and Information: ** Retrieve company profiles using tickers, ISINs, or CUSIPs, including industry classifications, employee counts, headquarters locations, and operating status.

<!-- para:0008 -->
- **Historical Price and Market Data: ** Access OHLC prices, volumes, market cap, and enterprise value at daily, weekly, monthly, or yearly frequencies, with adjusted prices for accurate return calculations.

<!-- para:0009 -->
- **Financial Statement Access: ** Pull complete balance sheets, income statements, and cash flow statements for annual, quarterly, LTM, or YTD periods with customizable date ranges.

<!-- para:0010 -->
- **Granular Financial Metrics: ** Extract specific line items from 200+ available metrics including revenue, EBITDA, R&D expense, and calculated ratios like debt-to-equity.

<!-- para:0011 -->
- **Segment Performance Data: ** Access business unit and geographic breakdowns showing how revenue and operating income distribute across divisions (availability varies by company).

<!-- para:0012 -->
- **Business Relationship Mapping: ** Identify supplier relationships, customer dependencies, and strategic partnerships from SEC filings to assess operational risks.

<!-- para:0013 -->
- **Competitor Intelligence: ** Retrieve competitor lists from multiple sources including SEC filings, self-identification, and third-party analysis.

<!-- para:0014 -->
- **Time Period Management: ** Determine latest reporting periods and calculate historical quarters for consistent comparisons across companies with different fiscal years.

<!-- para:0015 -->
### How Claude Uses S&P Global Data

<!-- para:0016 -->
Claude applies Kensho's capabilities to support comprehensive financial analysis leveraging S&P Global data:

<!-- para:0017 -->
- **Cross-Identifier Lookups: ** Automatically handles tickers, ISINs, or CUSIPs, useful for international portfolios or fixed income securities.

<!-- para:0018 -->
- **Multi-Period Analysis: ** Constructs time series by pulling data across periods, calculating growth rates and identifying trend changes.

<!-- para:0019 -->
- **Statement Reconciliation: ** Combines data from different statements to calculate derived metrics and verify consistency.

<!-- para:0020 -->
- **Peer Group Construction: ** Retrieves identical metrics across companies for true apples-to-apples comparisons.

<!-- para:0021 -->
- **Relationship Network Analysis: ** Maps business ecosystems to reveal concentration risks and strategic positioning not apparent from financials alone.

<!-- para:0022 -->
## Setting Up the Kensho Integration

<!-- para:0023 -->
Technical details of the Kensho Integration can be found in the [Kensho Integration MCP Server Documentation](https://docs.kensho.com/llmreadyapi/mcp). You will need to contact S&P Global to get access to the MCP server.

<!-- para:0024 -->
### For Organization Owners

<!-- para:0025 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).

<!-- para:0026 -->
1. Scroll down and click “Add custom connector" at the bottom of the list.

<!-- para:0027 -->
1. Enter the Kensho integration URL: [https://kfinance.kensho.com/integrations/mcp](https://kfinance.kensho.com/integrations/mcp)

<!-- para:0028 -->
1. Name the integration (e.g., "Kensho S&P")

<!-- para:0029 -->
1. Click "Add"

<!-- para:0030 -->
### For Individual Users

<!-- para:0031 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0032 -->
## Common Use Cases

<!-- para:0033 -->
### Comprehensive Company Profile

<!-- para:0034 -->
Using the Kensho integration, create a complete profile for Microsoft (MSFT) including current market data, latest financial metrics, business segments, and key competitor data from S&P Global. Include market cap, enterprise value, trailing twelve-month revenue and margins, plus geographic revenue breakdown.

<!-- para:0035 -->
This type of comprehensive profile combines multiple data types into a single analytical view. Claude retrieves current market metrics, pulls recent financial performance, and identifies segment breakdowns to show how the business operates across different units and geographies. The competitor identification adds context about the competitive environment.

<!-- para:0036 -->
**When to use: ** Initial company research or updating investment memos with current information.**

<!-- para:0037 -->
**Tip: ** Request both market data and fundamentals together for a complete overview that includes valuation context alongside operational performance.**

<!-- para:0038 -->
### Historical Price Performance Analysis

<!-- para:0039 -->
Pull five years of weekly price data for Tesla (TSLA) and calculate the volatility, maximum drawdown, and performance versus the S&P 500. Include adjusted prices to account for any stock splits and show periods of highest volatility.

<!-- para:0040 -->
Historical price analysis using S&P Global data goes beyond simple price charts. Claude can calculate risk metrics like volatility and maximum drawdown while comparing performance to benchmarks. Using adjusted prices ensures that return calculations properly account for corporate actions, providing accurate performance measurement over multi-year periods.

<!-- para:0041 -->
**When to use: ** Evaluating historical risk-return profiles or backtesting investment strategies.**

<!-- para:0042 -->
**Note: ** Adjusted prices ensure accurate return calculations across corporate actions like splits and special dividends, which is essential for long-term performance analysis.**

<!-- para:0043 -->
### Financial Statement Deep Dive

<!-- para:0044 -->
Retrieve Apple's last 12 quarters of income statements and calculate the trend in gross margins, operating margins, and R&D as percentage of revenue. Show both the quarterly values and the rolling four-quarter averages to smooth seasonality.

<!-- para:0045 -->
Financial statement analysis through Kensho allows examination of margin trends and cost structure evolution over time. Claude can pull specific line items from S&P Global datasets across multiple quarters, calculate relevant ratios, and apply smoothing techniques to identify underlying trends beyond seasonal fluctuations. This granular approach reveals operational changes that might be obscured in annual reports.

<!-- para:0046 -->
**When to use: ** Analyzing margin trends, cost structure changes, or earnings quality.**

<!-- para:0047 -->
**Tip: ** LTM calculations help normalize for seasonal businesses, providing clearer trend analysis for companies with significant quarterly variations.**

<!-- para:0048 -->
### Competitor Benchmarking

<!-- para:0049 -->
Identify Netflix's competitors from their SEC filings and compare key metrics including subscriber growth, content costs, average revenue per user, and free cash flow margins. Focus on direct streaming competitors they specifically mention as competitive threats.

<!-- para:0050 -->
Competitor analysis combines Kensho's relationship mapping with financial metric comparisons. Claude first identifies competitors from various sources, then retrieves comparable metrics for each company. This approach provides both the competitive landscape view and quantitative performance comparisons, helping assess relative positioning and competitive advantages.

<!-- para:0051 -->
**When to use: ** Industry analysis or relative valuation work.**

<!-- para:0052 -->
**Note: ** Different source filters provide varying perspectives on competition—SEC filings show who companies view as threats, while third-party sources may identify less obvious competitive dynamics.**

<!-- para:0053 -->
### Segment Performance Tracking

<!-- para:0054 -->
Show Amazon's segment breakdown for the last eight quarters, including revenue and operating income by segment. Calculate the growth rates for AWS, North America retail, and International retail, and identify which segments are driving overall margin expansion.

<!-- para:0055 -->
Segment analysis reveals the underlying drivers of consolidated performance. Claude retrieves segment-level financial data to show how different business units contribute to overall results. By tracking segment metrics over time, you can identify which divisions are accelerating or decelerating, understand margin mix shifts, and assess the quality of revenue growth.

<!-- para:0056 -->
**When to use: ** Understanding business mix changes and identifying growth drivers.**

<!-- para:0057 -->
**Tip: ** Segment data reveals trends not visible in consolidated statements, particularly for conglomerates or companies undergoing business model transitions.**

<!-- para:0058 -->
### Supply Chain Analysis

<!-- para:0059 -->
Map NVIDIA's key business relationships including their primary chip manufacturers, major customers, and strategic technology partners. Focus on relationships mentioned in their latest 10-K filing to understand supply chain dependencies and customer concentration risks.

<!-- para:0060 -->
Business relationship mapping through Kensho provides insights into operational dependencies and strategic positioning. Claude identifies suppliers, customers, and partners from regulatory filings in S&P Global datasets, revealing concentration risks and potential vulnerabilities. This network view complements financial analysis by highlighting operational factors that could impact future performance.

<!-- para:0061 -->
**When to use: ** Assessing operational risks or understanding industry value chains.**

<!-- para:0062 -->
**Key benefit: ** Reveals dependencies not apparent from financial statements alone, such as single-source supplier risks or customer concentration that could impact revenue stability.**

<!-- para:0063 -->
## Tips for Using S&P Global Data

<!-- para:0064 -->
- Use any identifier format (ticker, ISIN, CUSIP) - Claude handles conversion automatically

<!-- para:0065 -->
- Request specific date ranges to manage data volume and focus analysis

<!-- para:0066 -->
- Combine market data with fundamentals for comprehensive analysis

<!-- para:0067 -->
- Check data availability periods using the latest reporting period function

<!-- para:0068 -->
- Note that segment data availability varies by company reporting practices

<!-- para:0069 -->
- Be specific about which financial statement items you need from the 200+ available metrics

<!-- para:0070 -->
- Consider using LTM periods for companies with significant seasonality

<!-- para:0071 -->
- Remember that business relationship data comes from disclosed sources and may not capture all partnerships

<!-- para:0072 -->
‍
