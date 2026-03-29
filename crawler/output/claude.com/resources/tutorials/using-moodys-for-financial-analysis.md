---
source_url: https://claude.com/resources/tutorials/using-moodys-for-financial-analysis
title: "Using Moody's for financial analysis"
section: resources
---

<!-- para:0001 -->
# Using Moody's for financial analysis

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-moodys-for-financial-analysis#)https://claude.com/resources/tutorials/using-moodys-for-financial-analysis

<!-- para:0003 -->
The Moody’s connector provides Claude with access to proprietary credit ratings, comprehensive entity intelligence, and analytical frameworks for risk assessment through the Model Context Protocol (MCP). This integration enables financial professionals to access Moody’s authoritative data directly within their AI workflows.

<!-- para:0004 -->
## What This Connector Provides

<!-- para:0005 -->
### Integration Capabilities

<!-- para:0006 -->
Through the Moody’s integration, Claude can access the following resources:

<!-- para:0007 -->
- **Entity Discovery: ** Claude can search for entities covered by Moody’s using identifiers, company names, or related metadata. This returns Moody’s unique entity IDs that unlock access to comprehensive datasets.

<!-- para:0008 -->
- **Credit Ratings and Outlooks: ** Retrieve current credit ratings, rating dates, and outlooks for specific entities, providing critical information for credit risk assessment and investment decisions.

<!-- para:0009 -->
- **Research Library Access: ** Claude can search Moody’s proprietary research documents related to specific entities or topics, giving you access to expert analysis and insights.

<!-- para:0010 -->
- **Rating Driver Analysis: ** Access the primary factors behind credit rating upgrades or downgrades, providing context for rating movements and enabling deeper risk analysis.

<!-- para:0011 -->
- **Rating Scorecards: ** View detailed rating scorecards including factor weights, scoring components, and overall rating rationale to understand how Moody’s evaluates entity creditworthiness.

<!-- para:0012 -->
## How Claude Uses Moody’s Data

<!-- para:0013 -->
Claude applies Moody’s capabilities to support comprehensive financial analysis:

<!-- para:0014 -->
- **Integrated Risk Assessment: ** Claude combines credit ratings, research insights, and rating drivers to provide holistic risk evaluations. For example, when analyzing a potential investment, Claude might retrieve the entity’s current rating, review recent research publications, and examine the factors that could trigger rating changes.

<!-- para:0015 -->
- **Contextual Analysis: ** By accessing rating scorecards and upgrade/downgrade factors, Claude applies Moody’s analytical frameworks to understand credit quality. This ensures that risk assessments align with industry-standard methodologies.

<!-- para:0016 -->
- **Research-Backed Insights: **Claude can search through Moody’s extensive research library to find relevant analysis, sector trends, and comparable entity studies, providing evidence-based context for financial decisions.

<!-- para:0017 -->
- **Entity Intelligence: ** Through entity mapping and discovery, Claude can identify relationships between entities, access comprehensive company intelligence, and retrieve relevant Moody’s data across different use cases.

<!-- para:0018 -->
## Setting up the Moody’s Connector

<!-- para:0019 -->
The Moody’s MCP server uses remote access via a simple URL endpoint and is compatible with any LLM that supports the MCP Standard Protocol.

<!-- para:0020 -->
- Authentication: The Moody’s connector implements OAuth authentication. When connecting, you’ll be redirected to a Moody’s authentication page where you’ll enter your authorized credentials. After successful authentication, you’ll be redirected back to Claude.

<!-- para:0021 -->
- Server URL: [https://api.moodys.com/genai-ready-data/m1/mcp](https://api.moodys.com/genai-ready-data/m1/mcp)

<!-- para:0022 -->
### Adding the Connector as an Organization Owner

<!-- para:0023 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors)

<!-- para:0024 -->
1. Click “Add custom connector”

<!-- para:0025 -->
1. Enter the Moody’s MCP server URL: [https://api.moodys.com/genai-ready-data/m1/mcp](https://api.moodys.com/genai-ready-data/m1/mcp)

<!-- para:0026 -->
1. Name the integration (e.g., “Moody’s Credit Intelligence”)

<!-- para:0027 -->
1. Click “Add”

<!-- para:0028 -->
### For Individual Users

<!-- para:0029 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0030 -->
## Common Use Cases

<!-- para:0031 -->
### Available Tools Example

<!-- para:0032 -->
To illustrate how these tools work together, consider a financial services firm with access to the following Moody’s MCP tools:

<!-- para:0033 -->
Entity Tools:

<!-- para:0034 -->
- find Entity: Search for companies, financial institutions, or governmental entities covered by Moody’s

<!-- para:0035 -->
- - get Entity Ratings: Retrieve current ratings and outlooks

<!-- para:0036 -->
- - get Entity Rating Drivers: Access upgrade/downgrade factors

<!-- para:0037 -->
- - get Entity Scorecard: View detailed rating methodology and scoring

<!-- para:0038 -->
Research Tools:

<!-- para:0039 -->
- search Entity Documents: Access Moody’s proprietary research library

<!-- para:0040 -->
### Credit Analysis for Portfolio Management

<!-- para:0041 -->
Example input prompt:

<!-- para:0042 -->
Analyze the credit profile of XYZ Corporation. What’s their current rating, what factors could trigger a downgrade, and are there any recent research reports I should review?

<!-- para:0043 -->
For this analysis, Claude might use the following workflow:

<!-- para:0044 -->
1. **Entity Discovery: ** Use find Entity to locate XYZ Corporation and retrieve its unique Moody’s entity ID.

<!-- para:0045 -->
1. **Rating Retrieval: ** Call get Entity Ratings to retrieve the current credit rating, outlook, and rating date.

<!-- para:0046 -->
1. **Risk Factor Analysis: ** Execute get Entity Rating Drivers to identify the key factors that could lead to rating upgrades or downgrades.

<!-- para:0047 -->
1. **Rating Methodology: ** Use get Entity Scorecard to view the detailed scorecard showing how Moody’s evaluates this entity across different factors.

<!-- para:0048 -->
1. **Research Review: ** Call search Entity Documents to find recent research reports, sector analyses, or rating action commentaries.

<!-- para:0049 -->
Claude might then provide a comprehensive credit analysis including the current rating, key risk factors to monitor, and relevant insights from Moody’s research.

<!-- para:0050 -->
### M&A Due Diligence

<!-- para:0051 -->
We’re evaluating an acquisition of ABC Manufacturing. What’s their credit standing, and how does it compare to their sector peers? Include relevant research on industry trends.

<!-- para:0052 -->
To complete this request, Claude might follow this workflow:

<!-- para:0053 -->
1. **Target Analysis: ** Use find Entity and get Entity Ratings to establish the target’s creditworthiness.

<!-- para:0054 -->
1. **Rating Factors: ** Call get Entity Scorecard and get Entity Rating Drivers to understand the underlying credit fundamentals and potential risks.

<!-- para:0055 -->
1. **Sector Context: ** Execute search Entity Documents with sector-specific queries to find research on industry trends, peer comparisons, and market outlook.

<!-- para:0056 -->
1. **Synthesis: ** Combine ratings, scorecard metrics, and research insights to provide a comprehensive view of the target’s credit profile and sector positioning.

<!-- para:0057 -->
Claude would then respond with a due diligence summary including credit ratings, key risk factors, sector positioning, and relevant research findings.

<!-- para:0058 -->
### Investment Portfolio Monitoring

<!-- para:0059 -->
Monitor my portfolio holdings for any rating changes or negative rating drivers. My holdings include: Company A, Company B, and Company C.

<!-- para:0060 -->
For this task, Claude might use the following approach:

<!-- para:0061 -->
1. **Entity Identification: ** Use find Entity to locate each portfolio company in Moody’s database.

<!-- para:0062 -->
1. **Rating Status: ** Call get Entity Ratings for each holding to check current ratings and outlooks.

<!-- para:0063 -->
1. **Risk Assessment: ** Execute get Entity Rating Drivers for holdings with negative outlooks or recent rating changes to identify specific risk factors.

<!-- para:0064 -->
1. **Research Updates: ** Use search Entity Documents to find any recent research publications or rating action commentaries for companies showing credit stress.

<!-- para:0065 -->
Claude might then respond with a portfolio monitoring report highlighting any rating changes, companies on negative watch, and key risk factors requiring attention.

<!-- para:0066 -->
### Counterparty Risk Assessment

<!-- para:0067 -->
We’re entering a large trade with DEF Bank. Assess their credit quality and identify any factors that could impact their creditworthiness over the next 12 months.

<!-- para:0068 -->
For this assessment, Claude might follow these steps:

<!-- para:0069 -->
1. **Entity Lookup: ** Use find Entity to locate DEF Bank in Moody’s coverage universe.

<!-- para:0070 -->
1. **Credit Profile: ** Call get Entity Ratings to retrieve current ratings and outlook.

<!-- para:0071 -->
1. **Rating Analysis: ** Execute get Entity Scorecard to review the bank’s financial strength across key metrics like capital adequacy, asset quality, and liquidity.

<!-- para:0072 -->
1. **Forward-Looking Factors: ** Use get Entity Rating Drivers to identify specific factors that could trigger rating changes.

<!-- para:0073 -->
1. **Research Context: ** Call search Entity Documents to find sector research on banking industry trends and systemic risks.

<!-- para:0074 -->
Claude would then provide a counterparty risk assessment including current credit standing, key vulnerabilities, and forward-looking risk factors.

<!-- para:0075 -->
## Tips for Using Moody’s

<!-- para:0076 -->
- Be specific about entities: When searching for entities, include relevant identifiers like ticker symbols, full legal names, or location information for more accurate results.Example: Instead of “Apple”, try “Apple Inc. (AAPL)”
- Leverage rating drivers for forward-looking analysis: The rating upgrade/downgrade factors provide valuable insights into what could change an entity’s credit profile.Example: “What factors would lead to a downgrade of Company X’s rating?”

<!-- para:0077 -->
- Combine tools for comprehensive analysis: Use multiple tools together to build complete credit profiles. Start with ratings, then examine scorecards and drivers, and supplement with research.

<!-- para:0078 -->
- Access is governed by your Moody’s subscription: Claude can only access data and research that your Moody’s account has permission to view. The connector respects your subscription entitlements.
- Use research search for sector insights: The document search isn’t limited to individual entities. Search by sector, theme, or risk type to find broader market analysis.Example: “Find Moody’s research on renewable energy sector credit trends”

<!-- para:0079 -->
- Rating scorecards provide methodology transparency: Review scorecards to understand how Moody’s weighs different factors in their rating assessment, which can inform your own credit analysis framework.

<!-- para:0080 -->
‍
