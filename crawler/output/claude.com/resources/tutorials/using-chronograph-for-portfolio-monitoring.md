---
source_url: https://claude.com/resources/tutorials/using-chronograph-for-portfolio-monitoring
title: "Using Chronograph for portfolio monitoring"
section: resources
---

<!-- para:0001 -->
# Using Chronograph for portfolio monitoring

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-chronograph-for-portfolio-monitoring#)https://claude.com/resources/tutorials/using-chronograph-for-portfolio-monitoring

<!-- para:0003 -->
The Chronograph integration provides Claude with access to a portfolio monitoring platform that enables investment analysis and tracking. This article explains how to set up and use Chronograph to access portfolio data and investment insights. The Chronograph integration relies upon Claude’s ability to use remote connectors.

<!-- para:0004 -->
## What This Integration Provides

<!-- para:0005 -->
### Capabilities

<!-- para:0006 -->
The Chronograph integration enables Claude to access comprehensive portfolio and investment data.

<!-- para:0007 -->
- **Entity Search and Discovery: ** Search for companies, funds, groups, and general partners via substring similarity search. The search helps you quickly locate relevant investment entities across Chronograph’s database.

<!-- para:0008 -->
- **Core Entity Information: ** Retrieve detailed information about entities including their identifiers, core details, and filter options. This provides fundamental data needed for investment analysis.

<!-- para:0009 -->
- **Portfolio Exposure Tracking: ** List your top company exposures by investment status (Invested, Realized, or Unrealized), along with detailed company information for portfolio monitoring and risk assessment.

<!-- para:0010 -->
- **Commitment History Analysis: ** Calculate aggregate values for key metrics including NAV, Called, Distributed, Unfunded, Net IRR, Net MOIC, and Commitment Amount across your portfolio’s commitment history.

<!-- para:0011 -->
- **Investment Metrics Calculator: ** Calculate individual metrics across specific investments, useful for aggregating and tracking performance. The calculator helps enumerate available metric options before running detailed queries.

<!-- para:0012 -->
- **Help Center Integration: ** Access Chronograph’s help documentation directly through Claude. Search for relevant articles or retrieve complete article content to answer platform-specific questions.

<!-- para:0013 -->
## How Claude Uses Chronograph Data

<!-- para:0014 -->
Claude applies Chronograph’s portfolio data to support your investment analysis.

<!-- para:0015 -->
- Portfolio Performance Review: Retrieves commitment history data and calculates key metrics like IRR and MOIC to assess portfolio performance over time.

<!-- para:0016 -->
- Exposure Analysis: Pulls top company exposures to identify concentration risks and diversification opportunities across your portfolio.

<!-- para:0017 -->
- Entity Research: Searches for and retrieves detailed information about companies, funds, or partners to support due diligence and investment decisions.

<!-- para:0018 -->
- Metric Calculations: Computes custom investment metrics across your holdings to create tailored performance reports matching your analytical needs.

<!-- para:0019 -->
- Documentation Access: Searches Chronograph’s help center to answer questions about platform features, workflows, and best practices.

<!-- para:0020 -->
## Setting Up Chronograph Integration

<!-- para:0021 -->
You will need to contact Chronograph to get access to the MCP server.

<!-- para:0022 -->
### For Organization Owners

<!-- para:0023 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).

<!-- para:0024 -->
1. Scroll down and click “Add custom connector” at the bottom of the list.

<!-- para:0025 -->
1. Enter the integration details provided by Chronograph.

<!-- para:0026 -->
1. Name the integration (e.g., “Chronograph MCP”)

<!-- para:0027 -->
1. Click “Add”

<!-- para:0028 -->
### For Individual Users

<!-- para:0029 -->
1. Navigate to Settings > Connectors.

<!-- para:0030 -->
1. Find Chronograph in the list and click Connect.

<!-- para:0031 -->
1. In the new browser tab that appears, log in to your Chronograph account.

<!-- para:0032 -->
1. A confirmation will appear to indicate successful authentication, at which point you can close the tab and begin interacting with your Chronograph data via Claude.

<!-- para:0033 -->
## Common Use Cases

<!-- para:0034 -->
### Portfolio Performance Summary

<!-- para:0035 -->
Example input prompt:

<!-- para:0036 -->
Show me my portfolio’s overall performance metrics including Net IRR, Net MOIC, and total commitments across all investments.

<!-- para:0037 -->
**When to use: ** Regular portfolio reviews, investor reporting, or board presentations.**

<!-- para:0038 -->
**Tip: ** Specify time periods or commitment types for more focused analysis.**

<!-- para:0039 -->
### Exposure Analysis

<!-- para:0040 -->
`What are my top 10 company exposures by unrealized value? Include company details and current investment amounts.`

<!-- para:0041 -->
**When to use: ** Risk management, concentration monitoring, or rebalancing decisions.**

<!-- para:0042 -->
**Note: **Use different status filters (Invested, Realized, Unrealized) to analyze different portfolio segments.**

<!-- para:0043 -->
### Entity Due Diligence

<!-- para:0044 -->
`Search for information about [Company/Fund Name] and provide all available details including identifiers and key metrics.`

<!-- para:0045 -->
**When to use: ** Initial research on potential investments or updating information on existing holdings.**

<!-- para:0046 -->
**Works well with: ** Combining entity search with exposure tracking for comprehensive analysis.**

<!-- para:0047 -->
### Custom Metric Tracking

<!-- para:0048 -->
`Calculate [specific metric] across my active investments in the technology sector.`

<!-- para:0049 -->
**When to use: ** Sector-specific analysis, tracking specialized KPIs, or custom performance reporting.**

<!-- para:0050 -->
**Key benefit: ** First use the calculator with query: {help: true} to see available options and required parameters.**

<!-- para:0051 -->
### Platform Guidance

<!-- para:0052 -->
`Search Chronograph’s help center for articles about [topic] or How do I [perform specific task] in Chronograph?`

<!-- para:0053 -->
**When to use: ** Learning platform features, troubleshooting workflows, or discovering capabilities.**

<!-- para:0054 -->
**Tip: ** Be specific with search terms to find the most relevant documentation.**

<!-- para:0055 -->
## Tips for Using Chronograph

<!-- para:0056 -->
- Use specific entity names or identifiers when possible for accurate results

<!-- para:0057 -->
- For metric calculations, first call the Investment Metrics Calculator with query: {help: true} to see available options

<!-- para:0058 -->
- Specify investment status filters (Invested, Realized, Unrealized) to focus your analysis

<!-- para:0059 -->
- Search the help center for platform-specific guidance before asking general questions

<!-- para:0060 -->
**Note: **Claude currently cannot access documents, custom fields, or metrics that require a Primary Metric Type label.**
