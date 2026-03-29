---
source_url: https://claude.com/resources/tutorials/using-the-benchling-connector-in-claude
title: "Using the Benchling connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Benchling connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-benchling-connector-in-claude#)https://claude.com/resources/tutorials/using-the-benchling-connector-in-claude

<!-- para:0003 -->
The Benchling integration connects Claude to Benchling R&D platform data, enabling scientists to ask questions and receive clear summaries with links back to source experiments, notebooks, and structured records—all while maintaining existing access permissions. This article explains how to set up and use the Benchling integration with Claude to advance your R&D workflows.

<!-- para:0004 -->
The Benchling integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
‍

<!-- para:0006 -->
## **What this integration provides**

<!-- para:0007 -->
When Claude sends a query to Benchling, it can search across the full breadth of a customer’s Benchling environment. This covers experimental results and study data, notebook content such as text and attachments, and structured records like registry items, inventory, and templates. The Benchling integration brings these different data types together to provide a unified answer, saving scientists from having to manually piece information across entries or projects. You can also choose to pull in public literature sources, combining internal and external knowledge in one place. All results follow the same access permissions already set in Benchling, ensuring people only see the data they are meant to.

<!-- para:0008 -->
## **Who should use the Benchling integration**

<!-- para:0009 -->
- **Bench Scientists & Research Associates** - want to quickly find and summarize the right data, whether from Benchling or external sources, and use it to decide on next steps in their experiments.
- **Team Leads & Project Managers**- need concise summaries of ongoing work and alignment with external findings to guide project planning.
- **Computational Biologists & Informatics Teams**- want to ask governance questions and assemble curated datasets from Benchling that can be used for deeper analysis or shared across teams.
- **Program Leads** - need automatically generated reports that combine Benchling study results with external context or public data, giving them a clear view of progress and next steps.
- **R&D Leaders & Executives**- require portfolio-level insights to spot trends across programs and benchmark against public industry data.

<!-- para:0010 -->
## **Who can access the Benchling integration**

<!-- para:0011 -->
Benchling customers who meet the following criteria:

<!-- para:0012 -->
- Benchling AI (Deep Research) enabled in your tenant
- API access (V3 APIs, including AI Agents endpoint)
- Benchling remote MCP enabled for your tenant

<!-- para:0013 -->
No additional setup is required beyond connecting Claude to the Benchling connector and authenticating with your Benchling login credentials.

<!-- para:0014 -->
More details on accessing the integration can be found in [Benchling’s MCP Server Documentation](https://help.benchling.com/hc/en-us/articles/40342713479437-Benchling-MCP).

<!-- para:0015 -->
## **Setting up the Benchling integration**

<!-- para:0016 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0017 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**Benchling**”
4. Click “Add to your team”
5. Get a Server URL from Benchling by clicking the link provided
6. Paste the Server URL into field provided
7. Click “Continue”

<!-- para:0018 -->
**For Individual Claude Users**

<!-- para:0019 -->
1. Navigate to Settings > Connectors
2. Click “Connect”
3. Follow the instructions to authenticate with your Benchling account

<!-- para:0020 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0021 -->
Technical details of the Benchling integration can be found in [Benchling’s MCP Server Documentation](https://help.benchling.com/hc/en-us/articles/40342713479437-Benchling-MCP).

<!-- para:0022 -->
## **Example use cases**

<!-- para:0023 -->
- **Cross-Source Comparison: ** *“Compare the IC50 results from my last two Benchling experiments with recent Pub Med articles on AAV stability.”*
- **Insight Summarization: ***“Summarize the key findings from Benchling experiments and highlight how they align with external literature trends.”*
- **Recommendations: ** *“Based on our last three in vivo results in Benchling and recent FDA guidance, what should we test next?”*
- **Portfolio Insights: ** *“Aggregate results from our top five Benchling programs and highlight which ones are showing the strongest early efficacy signals compared with industry benchmarks.”*
