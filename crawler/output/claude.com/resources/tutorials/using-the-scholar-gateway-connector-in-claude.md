---
source_url: https://claude.com/resources/tutorials/using-the-scholar-gateway-connector-in-claude
title: "Using the Scholar Gateway Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Scholar Gateway Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-scholar-gateway-connector-in-claude#)https://claude.com/resources/tutorials/using-the-scholar-gateway-connector-in-claude

<!-- para:0003 -->
The Scholar Gateway by Wiley integration provides authenticated access to the most relevant snippets of scientific research papers to utilize within Claude. This article explains how to set up and use the Scholar Gateway integration with Claude to accelerate your research workflows.

<!-- para:0004 -->
The Scholar Gateway integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
## What this integration provides

<!-- para:0006 -->
Currently >3 million journal articles are available through Scholar Gateway with additional collections, databases and new articles being added all the time.

<!-- para:0007 -->
These datasets cover key STEM subjects including articles from a significant number of leading Life Sciences journals. Specifically, Scholar Gateway has over 300 Life Sciences journals that cover over 900,000 research articles.

<!-- para:0008 -->
Scholar Gateway (Beta) enables AI responses grounded in peer-reviewed sources with verifiable citations and DOI links.

<!-- para:0009 -->
Instead of relying on general AI knowledge, Scholar Gateway (Beta) searches current literature from Wiley journals and research databases to deliver evidence-backed answers with complete source metadata.

<!-- para:0010 -->
While the Beta currently provides access to Wiley content only, additional publisher sources will be added soon.

<!-- para:0011 -->
This enables you to verify that claims are backed with sourced research — ensuring your AI-assisted research meets professional research standards.

<!-- para:0012 -->
## Who can access the Scholar Gateway integration

<!-- para:0013 -->
- Existing subscribers to Wiley journals will need to upgrade their subscription following a trial period to allow AI access.
- New subscribers will need to subscribe subject to a trial period.

<!-- para:0014 -->
More details on accessing the integration can be found in [Wiley’s MCP Server Documentation](https://docs.scholargateway.ai/).

<!-- para:0015 -->
## Setting up the Scholar Gateway integration

<!-- para:0016 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0017 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**Scholar Gateway**”
4. Click “Add to your team”

<!-- para:0018 -->
**For Individual Claude Users**

<!-- para:0019 -->
1. Navigate to Settings > Connectors
2. Click “Connect”
3. Follow the instructions to authenticate with your Wiley account

<!-- para:0020 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0021 -->
**For Claude Code Users**

<!-- para:0022 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`‍
2. Command: `/plugin install wiley-scholar-gateway@life-sciences`‍
3. Restart Claude Code
4. Verify that the server is connected with `/mcp`

<!-- para:0023 -->
Technical details of the Scholar Gateway integration can be found in [Wiley’s MCP Server Documentation](https://docs.scholargateway.ai/).

<!-- para:0024 -->
## Common use cases

<!-- para:0025 -->
- Enhanced literature review when planning experiments and research plans, to efficiently identify, summarize, and evaluate relevant literature as individual articles or in aggregation, enabling new ways of doing research and delivering reliable and cited insights in seconds.​
- Information on latest research in a certain field of medicine or pharmaceuticals.
