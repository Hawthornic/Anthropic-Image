---
source_url: https://claude.com/resources/tutorials/using-pitchbook-for-investment-research
title: "Using Pitch Book for investment research"
section: resources
---

<!-- para:0001 -->
# Using Pitch Book for investment research

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-pitchbook-for-investment-research#)https://claude.com/resources/tutorials/using-pitchbook-for-investment-research

<!-- para:0003 -->
The Pitch Book Premium integration gives Claude access to proprietary private capital market data and analytical metrics. This article outlines the steps to set up and use Pitch Book data for financial research, including financial analysis, competitive benchmarking, network relationship mapping, and investor portfolio analysis.

<!-- para:0004 -->
The Pitch Book integration relies on Claude’s ability to use [remote connectors](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp).

<!-- para:0005 -->
## What This Integration Provides

<!-- para:0006 -->
The integrated dataset provided by this integration includes profiles for more than 8.5 million private companies, 2.8 million deals, 597k investors, and 154k funds. This integration excludes some proprietary 3rd-party data included in the Pitch Book platform.

<!-- para:0007 -->
## Capabilities

<!-- para:0008 -->
The Pitch Book integration enables Claude to access private capital market data:

<!-- para:0009 -->
- **Entity Search and Identification: ** Search Pitch Book's database for companies, investors, funds, people, limited partners (LPs), and deals by name or ticker, retrieving unique Pitch Book identifiers (PBIDs).

<!-- para:0010 -->
- **Company Data Access: ** Retrieve company profiles, including business descriptions, ownership status, complete financing history, financial statements (income statement, balance sheet, cash flow), team members, and current/former investors.

<!-- para:0011 -->
- **Investor and Fund Information: ** Access investor profiles with AUM and investment focus, portfolio holdings showing current and exited investments, funds raised by each investor, and limited partner commitments to specific funds.

<!-- para:0012 -->
- **Deal and Transaction Details: ** Pull complete deal information including participants, investment amounts, valuations, terms, lead investor status, and detailed cap tables showing ownership percentages and liquidation preferences across rounds.

<!-- para:0013 -->
- **Relationship and Network Data: ** Find connections between entities, such as co-investors in deals, shared portfolio companies between investors, team member histories across companies, and LP participation across multiple funds.

<!-- para:0014 -->
## How Claude Uses Pitch Book's Data

<!-- para:0015 -->
Claude accesses Pitch Book data to help build your analyses. Here are several examples of tasks where Claude may decide to use data provided by Pitch Book:

<!-- para:0016 -->
- **Funding Timeline Construction: ** Claude retrieves a company's deal history to show how valuations changed, which investors participated in each round, and how ownership diluted over time.

<!-- para:0017 -->
- **Peer Group Benchmarking: ** When comparing companies, Claude pulls financial metrics, valuation multiples, and funding amounts to identify which companies are valued higher or lower than similar ones.

<!-- para:0018 -->
- **Investor Portfolio Analysis: ** Claude examines an investor's portfolio to identify their typical investment sizes, preferred sectors, and stage focus.

<!-- para:0019 -->
- **Connection Discovery: ** Claude traces relationships between companies and investors to find warm introduction paths, like identifying mutual connections through board members or past deals.

<!-- para:0020 -->
- **Exit Pattern Recognition: ** Claude analyzes past exits in your sector to show typical acquisition multiples, common buyers, and average holding periods for similar companies.

<!-- para:0021 -->
## Setting Up Pitch Book Integration

<!-- para:0022 -->
Technical details of the Pitch Book Integration can be found in the [Pitch Book Premium Integration MCP Service Documentation](https://help.pitchbook.com/s/article/Pitch Book-Premium-for-Claude-by-Anthropic). Users must possess Single Sign-On (SSO) credentials and a seat-based, unlimited, or trial Pitch Book license.

<!-- para:0023 -->
If your account does not have access to the MCP service, please contact your account representative.

<!-- para:0024 -->
### For Organization Owners

<!-- para:0025 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).

<!-- para:0026 -->
1. Scroll down and click “Add custom connector" at the bottom of the list.

<!-- para:0027 -->
1. Access the MCP URL via SSO here: [https://premium.mcp.pitchbook.com/mcp](https://premium.mcp.pitchbook.com/mcp)

<!-- para:0028 -->
1. Name the connector (e.g. "Pitch Book Premium")

<!-- para:0029 -->
1. Click “Add”

<!-- para:0030 -->
### For Individual Users

<!-- para:0031 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0032 -->
## Common Use Cases

<!-- para:0033 -->
### Discover Company Info

<!-- para:0034 -->
Using Pitch Book data, tell me about Plaid’s funding status, including the most recent investment date, round type, and use of proceeds. Include a list of lenders, active and former investors, and relevant news coverage about previous investment rounds.

<!-- para:0035 -->
Streamline the financial research journey from search to insight. Claude can retrieve comprehensive Pitch Book data on a specific company, including an overview, financials, deal history, key personnel, and investors. When comparing multiple companies from a user- or Claude-generated list, Claude retrieves Pitch Book data from each company before compiling results into a single list to spot deal opportunities.

<!-- para:0036 -->
**When to use: ** Researching specific companies for deal sourcing, market intelligence gathering, benchmarking, asset allocation, and business development.**

<!-- para:0037 -->
## Competitive Analysis

<!-- para:0038 -->
Using Pitch Book data, help me identify investment opportunities by benchmarking companies in the healthtech wearables market. Provide details on each company’s recent investment history, profitability, liquidity, and growth rates.

<!-- para:0039 -->
Quickly compare targets to identify promising opportunities for investments, mergers and acquisitions, and partnerships. Claude performs this action using company and deal lists provided by users, or by generating company lists from the web and other sources. The LLM accesses Pitch Book’s comprehensive company intelligence, including investment history, product details, financial performance, and more, to retrieve critical details for each company on the list. Users can accelerate deal flow by comparing these metrics in a convenient and readable output.

<!-- para:0040 -->
**When to use: ** Comparing financial and performance metrics across multiple companies to find new opportunities, accelerate market mapping, identify acquisition targets, and streamline deal sourcing workflows.**

<!-- para:0041 -->
## Relationship Mapping

<!-- para:0042 -->
Using Pitch Book data, identify Instacart investors. Then, pull portfolios for each investor’s top 3 VCs to see other companies in this space, and analyze those VC companies’ investors to map the competitive landscape.

<!-- para:0043 -->
Discover unexpected connections between companies, investors, and professionals by using Claude to transform Pitch Book’s comprehensive private capital market data into market maps that demonstrate complex relationships within the industry. Claude accesses Pitch Book’s proprietary data to accelerate financial research by extracting these insights and producing easy-to-read competitive clusters.

<!-- para:0044 -->
**When to use: ** Visualizing the business, investment, and product relationships between companies to inform deal sourcing, supply chain management, strategic partnerships, investor sourcing, and more.**

<!-- para:0045 -->
## Tips for Using Pitch Book's Data

<!-- para:0046 -->
- Start prompts with “Use Pitch Book data to...” to ensure that Claude returns results based on Pitch Book’s comprehensive dataset of private capital market intelligence.

<!-- para:0047 -->
- Ask detailed, multi-part questions to receive comprehensive answers to complex queries. For example, to build a market map you should (1) start with a company, (2) pick key investors, (3) analyze portfolio companies, and (4) ask to identify patterns across the network.

<!-- para:0048 -->
- Use Pitch Book’s data as a reference for deal sourcing, due diligence, and deal execution, rather than as the sole source of information.

<!-- para:0049 -->
- Combine data retrieval with analysis from Pitch Book researchers to build a complete view of the market and identify opportunities with full context.

<!-- para:0050 -->
- Pitch Book's private capital market data is sourced directly from funds, companies, filings, and relationships.

<!-- para:0051 -->
## Contact

<!-- para:0052 -->
If you are having trouble completing the Pitch Book Premium integration, you can contact [[email protected]](https://claude.com/cdn-cgi/l/email-protection#96e5e3e6e6f9e4e2d6e6ffe2f5fef4f9f9fdb8f5f9fb) for help.

<!-- para:0053 -->
‍
