---
source_url: https://claude.com/resources/tutorials/using-factset-for-comprehensive-financial-research
title: "Using Fact Set for comprehensive financial research"
section: resources
---

<!-- para:0001 -->
# Using Fact Set for comprehensive financial research

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-factset-for-comprehensive-financial-research#)https://claude.com/resources/tutorials/using-factset-for-comprehensive-financial-research

<!-- para:0003 -->
The Fact Set integration is currently in early access; contact the Fact Set team for additional details.

<!-- para:0004 -->
The Fact Set integration provides Claude with access to institutional-grade financial data and analytics used by investment professionals worldwide. This article explains how to set up and use Fact Set data for financial analysis, including global pricing data, fundamental financials, analyst estimates, M&A transactions, ownership data, and executive information.

<!-- para:0005 -->
## What This Integration Provides

<!-- para:0006 -->
### Capabilities

<!-- para:0007 -->
The Fact Set integration enables Claude to access multiple categories of financial and market data:

<!-- para:0008 -->
- **Global Market Data**: End-of-day pricing, OHLC, volume, and returns for global equities, ADRs, and ETFs from 2006 onwards, including corporate actions and dividend adjustments.**‍**
- **Comprehensive Fundamentals**: Standardized financial statements, segment breakdowns, and ratios from company filings across annual, quarterly, and interim periods.**‍**
- **Analyst Consensus and Estimates**: Forward-looking earnings estimates, analyst ratings, and earnings surprise data comparing actual results to expectations.**‍**
- **M&A and Deal Intelligence**: Transaction data including deal values, terms, parties, and status for both public and private deals.**‍**
- **Supply Chain Relationships**: Business network mapping of competitors, customers, suppliers, and partners from regulatory filings.**‍**
- **Ownership and Insider Activity**: Institutional holdings, fund positions, and insider transactions (with quarterly filing lags).**‍**
- **Executive and Board Information**: Leadership profiles, compensation data, employment history, and governance statistics.**‍**
- **Corporate Events Calendar**: Earnings announcements, investor conferences, and other scheduled corporate events.

<!-- para:0009 -->
## How Claude Uses Fact Set Data

<!-- para:0010 -->
Claude applies Fact Set's data to support comprehensive analysis:

<!-- para:0011 -->
- **Integrated Company Analysis**: Combines pricing, fundamentals, estimates, and ownership data to build complete company profiles.**‍**
- **Cross-Dataset Validation**: Verifies information across data types, such as comparing earnings surprises to insider trading patterns.**‍**
- **Timeline Construction**:Builds chronological narratives combining M&A events, corporate actions, and management changes.**‍**
- **Network Mapping**: Creates relationship maps showing competitive dynamics and ownership structures.**‍**
- **Multi-Period Comparisons**: Retrieves standardized metrics across companies for accurate peer analysis.

<!-- para:0012 -->
## Setting up the Fact Set integration

<!-- para:0013 -->
### For Organization Owners

<!-- para:0014 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).
2. Scroll down and click “Add custom connector" at the bottom of the list.
3. Enter the Fact Set integration URL (provided by your Fact Set representative)
4. Name the integration (e.g., "Fact Set")
5. Click "Add"

<!-- para:0015 -->
### For Individual Users

<!-- para:0016 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0017 -->
## Common Use Cases

<!-- para:0018 -->
### Comprehensive Equity Research

<!-- para:0019 -->
`Using Fact Set, create a complete analysis of Apple (AAPL) including 5-year price performance with total returns, latest quarterly fundamentals versus prior year, consensus estimates for next fiscal year, and recent insider transaction activity. Compare key metrics to Microsoft and Google as peer benchmarks.`

<!-- para:0020 -->
This request uses multiple Fact Set datasets to build a complete equity research report. Claude retrieves historical pricing to show performance trends, pulls standardized fundamentals for year-over-year comparisons, incorporates forward-looking consensus estimates, and adds governance context through insider activity. The peer comparison ensures relative valuation context using Fact Set's standardized metrics.

<!-- para:0021 -->
**When to use**: Building investment research reports or preparing for investment committee presentations.**

<!-- para:0022 -->
**Tip**: Fact Set's standardized fundamentals enable true apples-to-apples comparisons across companies, even when they use different accounting presentations.**

<!-- para:0023 -->
### M&A Activity Analysis

<!-- para:0024 -->
Retrieve all M&A deals in the software sector over the past 24 months where deal value exceeded $1 billion. Include buyer, target, deal value, and completion status. Then identify which acquirers have been most active and their typical deal sizes.

<!-- para:0025 -->
M&A analysis through Fact Set shows consolidation patterns and strategic priorities in specific sectors. Claude retrieves transaction data filtered by industry, size, and time period, then analyzes patterns to identify serial acquirers, typical valuations, and preferred deal structures.

<!-- para:0026 -->
**When to use**: Understanding consolidation trends or identifying potential acquirers and targets.**

<!-- para:0027 -->
**Note**: Deal data includes both completed and pending transactions, with status indicators showing which deals closed successfully versus those that were terminated.**

<!-- para:0028 -->
### Earnings Surprise Analysis

<!-- para:0029 -->
For the last 8 quarters, show me Netflix's reported EPS versus consensus estimates, calculating the surprise percentage and direction. Include the stock's price reaction in the 3 days following each announcement to understand how the market responded to surprises.

<!-- para:0030 -->
Earnings surprise analysis combines Fact Set's expectations data with actual reported results and subsequent price movements. Claude can identify whether companies beat or missed expectations and calculate the magnitude of the surprise. The integration provides historical earnings performance data alongside corresponding stock price changes, enabling analysis of earnings sensitivity patterns.

<!-- para:0031 -->
**When to use**: Evaluating management credibility and understanding market expectations.**

<!-- para:0032 -->
**Key benefit**: Combines estimate data with price reactions for complete surprise impact analysis, showing not just the surprise but how the market interpreted it.**

<!-- para:0033 -->
### Ownership and Insider Tracking

<!-- para:0034 -->
Show me the top 20 institutional holders of Tesla, their current positions, and changes over the last quarter. Also pull any insider transactions over $1 million in the past 6 months, noting whether executives were buying or selling.

<!-- para:0035 -->
Claude retrieves institutional holdings data showing position sizes and changes by investment managers, mutual funds, and other institutional investors. The integration also tracks insider transactions, documenting when executives and directors buy or sell shares in their companies. These datasets show ownership changes over time, though institutional data typically reflects quarterly filing cycles rather than current positions.

<!-- para:0036 -->
**When to use**: Understanding investor sentiment and management confidence.**

<!-- para:0037 -->
**Note**: Ownership data typically has a quarterly lag due to filing requirements, so positions shown may not reflect current holdings.**

<!-- para:0038 -->
### Supply Chain Risk Assessment

<!-- para:0039 -->
Map NVIDIA's key suppliers, customers, and partners from Fact Set's relationship data. Identify any concentration risks where a single relationship represents significant revenue exposure. Cross-reference with recent 10-K risk disclosures.

<!-- para:0040 -->
Supply chain analysis through Fact Set can show dependencies that may not be apparent from financial statements. This analysis can highlight risks, potential supply disruptions, and customer dependencies that could impact future performance.

<!-- para:0041 -->
**When to use**: Operational due diligence or supply chain risk analysis.**

<!-- para:0042 -->
**Key consideration**: Relationship data comes from disclosed sources and may not capture all partnerships, particularly those below materiality thresholds.**

<!-- para:0043 -->
## Tips for Using Fact Set

<!-- para:0044 -->
- Specify exact data types needed to avoid overwhelming results

<!-- para:0045 -->
- Use date ranges to manage data volume, especially for daily pricing data

<!-- para:0046 -->
- Note that some data has reporting lags—ownership is quarterly, insider transactions have filing delays

<!-- para:0047 -->
- For complex analyses, start with a subset of companies before expanding scope

<!-- para:0048 -->
- Be aware that relationship and ownership data reflects disclosed information and may not be complete

<!-- para:0049 -->
‍
