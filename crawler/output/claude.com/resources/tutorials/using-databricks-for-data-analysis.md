---
source_url: https://claude.com/resources/tutorials/using-databricks-for-data-analysis
title: "Using Databricks for Data Analysis"
section: resources
---

<!-- para:0001 -->
# Using Databricks for Data Analysis

<!-- para:0002 -->
- Category: Finance
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-databricks-for-data-analysis#)https://claude.com/resources/tutorials/using-databricks-for-data-analysis

<!-- para:0003 -->
The Databricks connector provides Claude with access to your organization's internal data through Unity Catalog, enabling analysis of your databases, running custom business logic, and accessing unstructured documents. Databricks provides three separate connectors: one for functions, one for vector search, and one for Genie, each accessing different capabilities within your Databricks workspace.

<!-- para:0004 -->
## Reminder on Databricks Components

<!-- para:0005 -->
Before exploring what Claude can do with Databricks, it's important to understand three core components that exist within your Databricks workspace:

<!-- para:0006 -->
1. **Unity Catalog Functions**: Custom Python or SQL functions your organization has created for specific calculations, data transformations, or API integrations. These might include proprietary scoring algorithms, normalized financial calculations, or business-specific data processing logic.**‍**
2. **Vector Search**: Semantic search indexes built on your organization's documents and datasets. These allow searching conceptually similar content even when exact keywords don't match.**‍**
3. **Genie**: A natural language interface that translates plain English questions into SQL queries against your data. Genie uses metadata about your tables and columns to understand business terminology and generate appropriate queries.

<!-- para:0007 -->
## What This Connector Provides

<!-- para:0008 -->
### Integration Capabilities

<!-- para:0009 -->
Through the Databricks integration, Claude can access resources in your workspace:

<!-- para:0010 -->
- **Execute Custom Functions**: Claude can run Unity Catalog functions defined by your organization. This includes executing complex business logic, applying calculations, or calling external APIs through functions your team has created. For example, if your organization has built a custom customer health score function, Claude can apply it consistently across analyses.**‍**
- **Semantic Search**: Using vector search indexes, Claude can find relevant documents and content based on meaning rather than just keywords. This is particularly useful for searching through contracts, research reports, customer feedback, or technical documentation where similar concepts might be expressed in different ways.**‍**
- **Natural Language Queries**: Through Genie, Claude can translate plain English questions into SQL queries. Instead of writing complex SQL, you can ask questions like "What was our revenue growth last quarter?" and Claude will use Genie to generate and execute the appropriate query.**‍**
- **Governed Access**: All data access through the connector respects your organization's Unity Catalog permissions and policies. Claude can only access data and execute functions that your user account has permission to use.

<!-- para:0011 -->
### How Claude Uses Databricks Data

<!-- para:0012 -->
Claude applies Databricks capabilities in several ways to support comprehensive data analysis:

<!-- para:0013 -->
- **Multi-Source Analysis**: Claude combines results from database queries, vector searches, and custom functions to provide comprehensive insights. For example, when validating an investment thesis, Claude might query historical financial performance from your portfolio database, search through past due diligence reports for similar sector investments, and apply your proprietary IRR calculation function to model expected returns.**‍**
- **Iterative Exploration**: Claude can query data, analyze initial results, and refine searches based on findings. This allows for analysis where insights from one query inform the next.**‍**
- **Custom Logic Application**: By executing Unity Catalog functions, Claude applies your organization's specific rules and calculations. This ensures that proprietary metrics, adjusted calculations, and company-specific logic are applied uniformly across all analyses.**‍**
- **Contextual Query Building**: When you ask questions in plain English, Claude uses Genie to translate them into appropriate SQL queries. This translation considers your table structures, column names, and relationships to generate accurate queries that match your database structure.**‍**
- **Pattern Recognition**: Through vector search, Claude can find patterns and similarities across documents and data. This helps in finding related issues, similar transactions, or comparable situations that might not be obvious through traditional keyword searches.

<!-- para:0014 -->
## Setting up the Databricks Connector

<!-- para:0015 -->
The Databricks integration consists of three separate connectors, each requiring separate setup:

<!-- para:0016 -->
1. **Functions Server: ** Accesses Unity Catalog functions for calculations, business logic, and data transformations.**‍**
2. **Vector Search Server: ** Enables semantic search across indexed documents and datasets.**‍**
3. **Genie Server: ** Provides natural language to SQL query translation capabilities.

<!-- para:0017 -->
Technical details of the Databricks connectors can be found in Databricks's [MCP Server Documentation](https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp). Authentication with Databrick's connectors is handled via [OAuth](https://docs.databricks.com/aws/en/generative-ai/mcp/connect-external-services#connect-claude-connectors-using-oauth) (for [Claude.ai](http://claude.ai/) and Claude Desktop) or via a [Databricks Personal Access Token](https://docs.databricks.com/aws/en/generative-ai/mcp/connect-external-services#connect-claude-desktop-using-pat) (for Claude Desktop only).

<!-- para:0018 -->
### Adding the Connector as an Organization Owner

<!-- para:0019 -->
1. Navigate to [Admin settings > Connectors](https://claude.ai/admin-settings/connectors).
2. Scroll down and click “Add custom connector" at the bottom of the list.
3. Enter integration URL for [your Databricks workspace](https://docs.databricks.com/aws/en/generative-ai/mcp/managed-mcp)‍
4. Name the integration. Remember that there are three separate Databricks servers, so consider naming each uniquely (e.g., "Databricks UC", "Databricks Genie", "Databricks Search")
5. Click "Add"

<!-- para:0020 -->
### For Individual Users

<!-- para:0021 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0022 -->
## Common Use Cases

<!-- para:0023 -->
### Available Resources Example

<!-- para:0024 -->
To illustrate how these capabilities work together, consider a private equity firm with the following Databricks resources configured:

<!-- para:0025 -->
### Tables in this scenario

<!-- para:0026 -->
1. **portfolio_companies: ** Company details, acquisition information, current valuations, and debt levels**‍**
2. **financial_statements: ** Period financials including revenue, EBITDA with adjustments, and operational metrics like customer count and churn**‍**
3. **market_comparables: ** Sector comparable companies with valuation multiples and growth rates**‍**
4. **due_diligence_docs: ** Repository of due diligence reports, analysis documents, and deal memos

<!-- para:0027 -->
### Unity Catalog Functions in this scenario

<!-- para:0028 -->
1. **calculate_normalized_ebitda(): ** Applies standard private equity adjustments to reported EBITDA, removing one-time costs and normalizing owner compensation**‍**
2. **compute_portfolio_irr(): ** Calculates internal rate of return and money-on-invested-capital based on cash flows and holding periods**‍**
3. **estimate_debt_capacity(): ** Models maximum leverage capacity with covenant compliance stress testing under various scenarios

<!-- para:0029 -->
### Vector Search Index in this scenario

<!-- para:0030 -->
1. **due_diligence_index: ** Semantic search across all due diligence documents, deal memos, and analysis reports

<!-- para:0031 -->
## Portfolio Exit Readiness Analysis

<!-- para:0032 -->
Example input prompt:

<!-- para:0033 -->
Which portfolio companies are ready for exit? Show valuation ranges and expected returns based on current market multiples.

<!-- para:0034 -->
For this analysis, Claude might use the different UC Functions and Genie in the following steps:

<!-- para:0035 -->
1. **Genie**: Identify portfolio companies held >3 years and retrieve their latest financials.**‍**
2. **UC Function**: Call `calculate_normalized_ebitda()` for each company to apply PE adjustments.**‍**
3. **UC Function**: Execute `compute_portfolio_irr()` to calculate IRR and MOIC for each company.**‍**
4. **Genie**: Query market comparables and apply sector multiples to normalized EBITDA for valuation ranges.

<!-- para:0036 -->
Claude might then report its results in a summary showing exit-ready companies with IRR, MOIC, and valuation ranges based on current market multiples.

<!-- para:0037 -->
## New Deal Valuation

<!-- para:0038 -->
We're evaluating Tech Corp acquisition (SaaS, $45M revenue, $12M EBITDA).What's a fair valuation and how much debt can we support? Include previous due diligence records in your analysis.

<!-- para:0039 -->
To complete this request, Claude might follow this workflow:

<!-- para:0040 -->
1. **Genie**: Query market comparables for similar-sized companies in target's sector to establish valuation benchmarks.**‍**
2. **UC Function**: Call `estimate_debt_capacity()` with target metrics to model leverage scenarios and stress-test covenant compliance.**‍**
3. **Vector Search**: Search due diligence index for relevant value creation playbooks and precedent transactions.**‍**
4. **Synthesis**: Combine results to generate valuation range, recommended capital structure, and relevant precedents.

<!-- para:0041 -->
Ideally, Claude would then respond with a report on the valuation range and a recommended offer price, while citing sources that lead to its recommendation.

<!-- para:0042 -->
## Covenant Breach Risk Assessment

<!-- para:0043 -->
If we see a 15-25% EBITDA decline across the portfolio, which companies risk covenant breaches? What actions should we take?

<!-- para:0044 -->
For this task, Claude might use the following resources:

<!-- para:0045 -->
1. **Genie**: Identify portfolio companies with debt, focusing on those with leverage >4x.**‍**
2. **UC Function**: Call calculate_normalized_ebitda() for each high-leverage company to establish baseline.**‍**
3. **UC Function**: Run estimate_debt_capacity() with 15%, 20%, and 25% decline scenarios for each company.**‍**
4. **Genie**: Query historical financials to identify companies with deteriorating working capital trends.

<!-- para:0046 -->
Claude might then respond with a breach risk analysis, organized by company and scenario.

<!-- para:0047 -->
## Tips for Using Databricks

<!-- para:0048 -->
- Be specific about what data you are looking for.Example: Instead of "Analyze customers", try "Show me our top 20 customers by…"
- Use "find similar" language for pattern matching Example: "Find feedback that mentions issues like this complaint."

<!-- para:0049 -->
- Remember that all data access permissions follow your Unity Catalog permissions. Claude can only access the data that you can access.
- Custom functions provide consistent calculations. Consider adding UC Functions for calculating standardized metrics.
- Complex analyses may require multiple steps. Ask for a plan first and review Claude's proposed approach.

<!-- para:0050 -->
‍
