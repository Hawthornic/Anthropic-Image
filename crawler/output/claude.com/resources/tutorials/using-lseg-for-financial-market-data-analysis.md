---
source_url: https://claude.com/resources/tutorials/using-lseg-for-financial-market-data-analysis
title: "Using LSEG for financial market data analysis"
section: resources
---

<!-- para:0001 -->
# Using LSEG for financial market data analysis

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-lseg-for-financial-market-data-analysis#)https://claude.com/resources/tutorials/using-lseg-for-financial-market-data-analysis

<!-- para:0003 -->
The LSEG integration provides Claude with access to LSEG’s comprehensive financial market data ecosystem, spanning across asset classes and domains. This article explains how to set up and use LSEG to retrieve real-time market data, analytics, and perform complex financial calculations. The LSEG integration relies upon Claude’s ability to use remote connectors.

<!-- para:0004 -->
## What This Integration Provides

<!-- para:0005 -->
### Capabilities

<!-- para:0006 -->
The LSEG integration enables Claude to access institutional-grade market data, analytics, and valuation tools directly into conversational AI workflows.

<!-- para:0007 -->
- **FX Spot Price Calculation: ** Get the latest FX spot rates for currency pairs, enabling real-time foreign exchange analysis and multi-currency calculations.**‍**
- **FX Forward Price Calculation: ** Compute tenor FX forward rates for currency pairs and display FX forward points between currency pairs for different tenors, supporting hedging strategies and forward contract analysis.**‍**
- **Interest Rate Curve Analysis: ** Calculate interest rate curves for specific curve references and access comprehensive lists of all interest rate curves maintained by LSEG for yield curve construction and rate projections.**‍**
- **FX Forward Curve Points: ** Calculate FX forward curve points using LSEG-defined forward curves with specific valuation dates, providing detailed term structure analysis for currency derivatives.**‍**
- **Bond Pricing: ** Price bonds using ISIN codes to retrieve current market valuations, yield calculations, and spread measures for fixed income analysis.**‍**
- **Comprehensive Asset Class Coverage: ** Access data and analytics across equities, fixed income, FX, commodities, and other asset classes through LSEG’s extensive database.

<!-- para:0008 -->
## How Claude Uses LSEG Data

<!-- para:0009 -->
Claude applies LSEG’s market data to support your financial analysis.

<!-- para:0010 -->
- Real-Time FX Analysis: Retrieves current spot rates and forward prices for currency pairs to analyze exchange rate movements, calculate cross-rates, and evaluate currency exposures.
- Yield Curve Construction: Pulls interest rate curve data to build term structures, calculate forward rates, and analyze the shape of yield curves for interest rate forecasting.
- Fixed Income Valuation: Uses bond pricing tools to value securities, compare yields across issuers, and assess credit spreads for portfolio management and trading decisions.
- Cross-Asset Analysis: Combines data from multiple asset classes to identify relationships, correlations, and trading opportunities across markets.
- Hedging Strategy Development: Leverages forward curve data to structure currency hedges, evaluate hedge effectiveness, and optimize hedging costs.
- Market Data Validation: Provides authoritative pricing and reference data to verify quotes, reconcile positions, and ensure data accuracy.

<!-- para:0011 -->
## Setting Up LSEG Integration

<!-- para:0012 -->
Technical details of the LSEG Integration can be found in LSEG’s MCP Server Documentation (available soon on LSEG portal). You will need to contact LSEG to get access to the MCP server.

<!-- para:0013 -->
### For Organization Owners

<!-- para:0014 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).
2. Scroll down and click “Add custom connector” at the bottom of the list.
3. Enter integration URL: [https://api.analytics.lseg.com/lfa/mcp](https://api.analytics.lseg.com/lfa/mcp)‍
4. Name the integration (e.g., “LSEG MCP”)
5. Click “Add”

<!-- para:0015 -->
### For Individual Users

<!-- para:0016 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0017 -->
## Common Use Cases

<!-- para:0018 -->
### Currency Exchange Rate Analysis

<!-- para:0019 -->
Example input prompt:

<!-- para:0020 -->
`What’s the current USD/EUR spot rate, and what are the 3-month and 6-month forward rates? Calculate the implied forward points for each tenor.`

<!-- para:0021 -->
**When to use: ** Evaluating currency positions, pricing FX forwards, or analyzing currency basis.**

<!-- para:0022 -->
**Tip: **Compare spot vs. forward rates to understand market expectations for currency movements.**

<!-- para:0023 -->
### Interest Rate Curve Comparison

<!-- para:0024 -->
`Show me the USD SOFR swap curve. Plot the curve and identify any unusual shapes or inflection points.`

<!-- para:0025 -->
**When to use: ** Assessing interest rate risk, pricing swaps, or understanding monetary policy expectations.**

<!-- para:0026 -->
**Typical analysis: ** Compare curves across different currencies or time periods to identify relative value opportunities.**

<!-- para:0027 -->
### Multi-Currency Bond Analysis

<!-- para:0028 -->
`Price the following bonds using their ISIN codes: FR0014012I5 (French government bond) and US91282CNT44 (US Treasury). Compare their yields and calculate the spread.`

<!-- para:0029 -->
**When to use: ** Portfolio construction, relative value analysis, or credit assessment across sovereign issuers.**

<!-- para:0030 -->
**Note: ** Ensure proper currency conversion when comparing international bonds.**

<!-- para:0031 -->
### FX Forward Curve Construction

<!-- para:0032 -->
`For AUD/USD, show me the complete forward curve using AONIA and SOFR conventions. Display the forward points and implied forward rates for standard tenors.`

<!-- para:0033 -->
**When to use: ** Structuring FX derivatives, pricing swaps, or analyzing currency carry strategies.**

<!-- para:0034 -->
**Works well with: ** Custom valuation dates to assess forward pricing at specific points in time.**

<!-- para:0035 -->
### Cross-Asset Correlation Analysis

<!-- para:0036 -->
`Get the USD SOFR curve and EUR ESTR curve, then analyze how they’ve moved relative to each other. Are there any divergences that suggest trading opportunities?`

<!-- para:0037 -->
**When to use: ** Identifying cross-currency basis trades or understanding global rate relationships.**

<!-- para:0038 -->
**Key benefit: ** LSEG provides consistent data across asset classes for reliable correlation analysis.**

<!-- para:0039 -->
### Real-Time Market Data for Trading

<!-- para:0040 -->
`I’m looking at pricing a currency swap. Get me the current EUR/USD spot rate and the EUR ESTR and USD SOFR curves for accurate valuation.`

<!-- para:0041 -->
**When to use: **Pre-trade analysis, pricing verification, or mark-to-market calculations.**

<!-- para:0042 -->
**Why it matters: **Real-time access ensures your analysis reflects current market conditions.**

<!-- para:0043 -->
## Tips for Using LSEG

<!-- para:0044 -->
- Use specific currency pair conventions (USD/EUR, GBP/USD)
- Specify tenors clearly for forward rates (3M, 6M, 1Y)
- Reference bonds by ISIN codes for accurate pricing
- Define valuation dates when working with forward curves
- Understand curve conventions (SOFR, ESTR, AONIA) for different currencies
- Cross-reference data across tools to validate analysis
