---
source_url: https://claude.com/resources/tutorials/using-the-medidata-connector-in-claude
title: "Using the Medidata Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Medidata Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-medidata-connector-in-claude#)https://claude.com/resources/tutorials/using-the-medidata-connector-in-claude

<!-- para:0003 -->
Medidata is a leading provider of clinical trial solutions to the life sciences industry. This article explains how to set up and use the Medidata integration with Claude to streamline platform support and optimize site selection.

<!-- para:0004 -->
The Medidata integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
## **What this integration provides**

<!-- para:0006 -->
This connector gives Medidata customers the ability to connect Claude to their Medidata platform data. Today, the connector supports two key use cases, and Medidata will continue to add more functionality regularly:

<!-- para:0007 -->
- **Site Ranking: **Allows Medidata's Intelligent Trials customers to predict which sites align with their enrollment goals during their protocol/study planning process. This service gives Claude access to aggregated historical operational enrollment data, population/country data, and standardized site data. This service takes various inputs on the planned phase, indication, etc., and ranks sites based on predicted enrollment rate to help inform the site selection strategy for a disease area of interest or a planned study. Users can then use the predicted sites to perform deeper analysis using Claude.
- **Platform Help: **This service gives Claude access to Medidata’s Knowledge Hub documentation (i.e. documentation and FAQs on Medidata’s products) around how to use the various products available in the Medidata platform. Claude users will be able to ask and query to find the answers to their questions about the platform, and integrate that information with their own internal documents/policies.

<!-- para:0008 -->
## **Who should use the Medidata integration**

<!-- para:0009 -->
- **Clinical Feasibility Lead / Strategist: ** Define global site criteria and analyze historical data to determine optimal patient access. Craft the initial feasibility survey instruments and validate that the proposed site list aligns with specific recruitment goals and protocol requirements.
- **Study Manager: **Review final site recommendations to ensure the geographic footprint remains balanced and cost-effective. Act as the final decision-maker for site approvals by weighing scientific prestige against potential regulatory startup delays to maintain the global enrollment timeline.

<!-- para:0010 -->
- **Site Selection Manager/Specialist: ** Lead data-mining activities by synthesizing information from internal databases and public registries to build preliminary site and investigator lists. Manage the distribution and analysis of feasibility surveys to transform site responses into ranked selection packs for sponsor review.
- **Country Manager: ** Validate proposed site lists by leveraging local networks to vet investigator interest and current workload. Oversee local Site Qualification Visits and confirm that facilities possess the physical infrastructure and staff capacity required for protocol execution.

<!-- para:0011 -->
‍

<!-- para:0012 -->
## **Who can access the Medidata integration**

<!-- para:0013 -->
All Medidata platform users can access the Platform Help service. Access to Site Ranking service is limited to subscribed customers of Medidata’s Intelligent Trials/Study Feasibility application, and their subscription access must match any queries.

<!-- para:0014 -->
More details on accessing the integration can be found in Medidata’s MCP Server Documentation [link].

<!-- para:0015 -->
## **Setting up the Medidata integration**

<!-- para:0016 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0017 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**Medidata**”
4. Click “Add to your team”

<!-- para:0018 -->
**For Individual Claude Users**

<!-- para:0019 -->
1. Navigate to Settings > Connectors
2. Find “**Medidata**”
3. Click “Connect”
4. Follow the instructions to describe authentication process

<!-- para:0020 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0021 -->
**For Claude Code Users**

<!-- para:0022 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`
2. Command: `/plugin install medidata@life-sciences`
3. Restart Claude Code
4. Verify that the server is connected with /mcp

<!-- para:0023 -->
Technical details of the Medidata integration can be found in Medidata’s MCP Server Documentation [link].

<!-- para:0024 -->
## **Example use cases**

<!-- para:0025 -->
**Site Ranking use cases: **

<!-- para:0026 -->
- *“What are the top ‘n’ predicted high performing sites for my core criteria i.e. within phase & indication of interest?”*
- *“What are the top ‘n’ predicted high performing sites based on more granular study criteria i.e. including age & eligibility, no. of study arms, etc. “*
- *“Which sites rank in the top 25% for predicted performance based on my specified criteria?*
- *“What is the physical address of the top performing site(s) in indication X?”*
- *“Which sites are located in the country (s) of interest?”*
- *“What is the geographical distribution (no. of sites by countries or regions) of the top performing sites?”*
- *“Can you research which sites have access to advanced neuroimaging equipment like tau PET and the capability to perform lumbar punctures?”*

<!-- para:0027 -->
**Platform Help use cases: **

<!-- para:0028 -->
- *“How do I create a derived dataset in Data Connect?”*
- *“How do I configure edit checks for Rave EDC?”*
- *“When is the last release of Clinical Data Studio and what features did it include?”*
- *“We need to import external lab data into Data Connect. How do I do this and ensure alignment with our SOPs?”*
