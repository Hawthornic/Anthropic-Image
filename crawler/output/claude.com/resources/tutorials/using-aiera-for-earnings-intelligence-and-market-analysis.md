---
source_url: https://claude.com/resources/tutorials/using-aiera-for-earnings-intelligence-and-market-analysis
title: "Using Aiera for earnings intelligence and market analysis"
section: resources
---

<!-- para:0001 -->
# Using Aiera for earnings intelligence and market analysis

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-aiera-for-earnings-intelligence-and-market-analysis#)https://claude.com/resources/tutorials/using-aiera-for-earnings-intelligence-and-market-analysis

<!-- para:0003 -->
The Aiera integration provides Claude with access to earnings calls, SEC filings, company publications, and expert insights for real-time financial intelligence. Additionally, the connector can pull information from Third Bridge events. This article explains how to set up and use Aiera to access corporate event data and analyst commentary for your market analysis.

<!-- para:0004 -->
The Aiera integration relies upon Claude’s ability to use [remote connectors](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp).

<!-- para:0005 -->
## What This Integration Provides

<!-- para:0006 -->
### Capabilities

<!-- para:0007 -->
The Aiera integration enables Claude to access comprehensive earnings intelligence and corporate communications in real-time.

<!-- para:0008 -->
- **Earnings Call Access: ** Retrieve full transcripts from earnings calls with searchable content, including management presentations, Q&A sessions, and analyst questions. Access historical calls and monitor upcoming scheduled events across companies and sectors.**‍**
- **SEC Filing Retrieval: ** Search and analyze SEC filings including 10-K annual reports, 10-Q quarterly filings, and 8-K material event disclosures. Filter by company, filing type, and date ranges to track regulatory communications.**‍**
- **Company Document Discovery: ** Access press releases, investor presentations, and other corporate publications. Search by keywords, categories, and date ranges to monitor company announcements and strategic communications.**‍**
- **Expert Insights Integration: ** Leverage Third Bridge expert interview transcripts for qualitative market intelligence and industry perspectives that supplement quantitative earnings data.**‍**
- **Event Calendar Tracking: ** Monitor upcoming earnings calls and corporate events across watchlists, market indexes, and sectors. Plan analysis around confirmed and estimated event dates.**‍**
- **Source-Linked Transcripts: ** Every insight includes direct links to original source documents and transcripts, providing complete transparency and enabling verification of quoted material.**‍**
- **Flexible Search Parameters: ** Query by company ticker, watchlist, market index, sector, or custom search terms. Paginate through large result sets and filter by event type for precise discovery.

<!-- para:0009 -->
## How Claude Uses Aiera Data

<!-- para:0010 -->
Claude applies Aiera’s intelligence platform to support real-time market analysis and due diligence workflows.

<!-- para:0011 -->
- **Post-Earnings Analysis: ** Immediately following earnings releases, retrieve full call transcripts to analyze management commentary, extract key metrics discussed, and identify forward-looking statements. Compare current quarter commentary to prior periods.**‍**
- **Analyst Question Analysis: ** Extract and categorize questions from sell-side analysts during Q&A sessions to understand market concerns, identify emerging themes, and gauge sentiment on specific business drivers.**‍**
- **Management Tone Assessment: ** Analyze management language across multiple quarters to detect shifts in confidence levels, strategic priorities, or responses to competitive pressures.**‍**
- **Cross-Company Theme Detection: ** Search transcripts across multiple companies for mentions of specific topics like supply chain, pricing power, or regulatory changes to build sector-wide perspectives on emerging trends.**‍**
- **Filing Monitoring: **Track 8-K filings for material events like management changes, acquisitions, or contract wins. Monitor 10-Q/10-K filings for MD&A sections discussing business outlook and risk factors.**‍**
- **Event-Driven Research: ** When news breaks or markets move, quickly pull relevant corporate communications to understand company positioning and official statements on developing situations.

<!-- para:0012 -->
## Setting Up Aiera Integration

<!-- para:0013 -->
Technical details of the Aiera Integration can be found in Aiera’s MCP Server Documentation. You will need to contact Aiera to obtain API access credentials for the MCP server.

<!-- para:0014 -->
### For Organization Owners

<!-- para:0015 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).
2. Click “Add custom connector.”
3. Enter integration URL: [https://mcp-pub.aiera.com/?api_key={YOUR_API_KEY](https://mcp-pub.aiera.com/?api_key=%7BYOUR_API_KEY)}
4. Name the integration (e.g., “Aiera MCP”)
5. Click “Add”

<!-- para:0016 -->
### For Individual Users

<!-- para:0017 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0018 -->
**Note: ** The Aiera connector also includes access to Third Bridge events. See [this section](https://rest.aiera.com/docs/mcp#third-bridge) of the Aiera MCP documentation for more information.**

<!-- para:0019 -->
## Common Use Cases

<!-- para:0020 -->
### Post-Earnings Deep Dive

<!-- para:0021 -->
Example input prompt:

<!-- para:0022 -->
`Pull the transcript from Netflix’s most recent earnings call and summarize: (1) revenue and subscriber growth discussed, (2) key themes from management presentation, (3) top analyst questions and concerns, and (4) any forward guidance provided.`

<!-- para:0023 -->
**When to use: **Immediately after earnings releases to quickly digest management commentary and market reaction before research reports publish.**

<!-- para:0024 -->
**Typical timeframe: ** Most valuable within 24-48 hours of earnings when transcripts are fresh and before consensus views form.**

<!-- para:0025 -->
### Analyst Question Tracking

<!-- para:0026 -->
`What were the main questions analysts asked on the last three Microsoft earnings calls? Identify recurring themes and any new topics of concern that emerged in recent quarters.`

<!-- para:0027 -->
**When to use: ** Understanding evolving market concerns and identifying which business segments or metrics are drawing increased scrutiny.**

<!-- para:0028 -->
**Tip: ** Track 2-4 quarters to identify developing themes versus one-time questions.**

<!-- para:0029 -->
### Management Commentary Search

<!-- para:0030 -->
`Search the last four Amazon earnings calls for what management said about capital expenditure plans and AWS infrastructure investments. Has their tone or guidance changed?`

<!-- para:0031 -->
**When to use: ** Tracking specific strategic initiatives or business drivers across time to detect shifts in company priorities or investment thesis.**

<!-- para:0032 -->
**Works well with: ** 3-6 quarters of transcripts to establish patterns and identify inflection points.**

<!-- para:0033 -->
### Cross-Company Theme Analysis

<!-- para:0034 -->
`Search earnings transcripts for S&P 500 companies in the last quarter for mentions of “artificial intelligence” or “AI.” Which sectors are discussing it most and what are they saying about implementation?`

<!-- para:0035 -->
**When to use: **Identifying emerging trends across markets and understanding which industries are most affected by macro themes.**

<!-- para:0036 -->
**Note: **Combine with sector filters to focus analysis on relevant industry groups.**

<!-- para:0037 -->
## Upcoming Events Planning

<!-- para:0038 -->
`Show me all confirmed earnings calls for companies in the technology sector over the next two weeks. I want to prepare analysis ahead of these events.`

<!-- para:0039 -->
**When to use: ** Planning research calendar and ensuring coverage of important corporate events for portfolio holdings or coverage universe.**

<!-- para:0040 -->
**Key benefit: **Get ahead of events rather than reacting after the fact.**

<!-- para:0041 -->
### 8-K Material Event Monitoring

<!-- para:0042 -->
`Find all 8-K filings from companies in my watchlist over the past month. Focus on those related to management changes, acquisitions, or material contracts.`

<!-- para:0043 -->
**When to use: ** Monitoring portfolio holdings for material corporate developments between regular reporting periods.**

<!-- para:0044 -->
**Why it matters: ** 8-Ks often contain market-moving information disclosed outside earnings cycles.**

<!-- para:0045 -->
### Expert Insight Supplementation

<!-- para:0046 -->
`Find Third Bridge expert interviews discussing the semiconductor industry from the past month. What are experts saying about demand trends and capacity utilization?`

<!-- para:0047 -->
**When to use: ** Supplementing quantitative company data with qualitative expert perspectives on industry dynamics.**

<!-- para:0048 -->
**Works well with: **Combining expert insights with company earnings commentary for comprehensive sector views.**

<!-- para:0049 -->
## Tips for Using Aiera

<!-- para:0050 -->
- Use specific Bloomberg tickers (NFLX US, AAPL US) for precise company identification
- Define clear date ranges to focus on relevant time periods
- Request specific event types (earnings calls vs. conferences) to narrow results
- Set include_transcripts=false when you only need event metadata to speed up responses
- Leverage watchlist and index filters for portfolio-specific monitoring
- Search strategically by combining keywords with date and company filters
- Consider pagination for large result sets - start with smaller page sizes for testing
