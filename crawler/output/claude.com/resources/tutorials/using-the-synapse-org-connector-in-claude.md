---
source_url: https://claude.com/resources/tutorials/using-the-synapse-org-connector-in-claude
title: "Using the Synapse.org Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Synapse.org Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-synapse-org-connector-in-claude#)https://claude.com/resources/tutorials/using-the-synapse-org-connector-in-claude

<!-- para:0003 -->
The Synapse.org integration by Sage Bionetworks allows researchers to discover biomedical data across all of Synapse, see the structure of projects, and retrieve information on their data assets for authorized users. This article explains how to set up and use the Synapse.org integration with Claude to advance your research and analysis workflows.

<!-- para:0004 -->
The Synapse.org integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
## What this integration provides

<!-- para:0006 -->
Services include search and (meta)data retrieval services. Data access will be governed by the access controls defined for each project. Some data are publicly available, while others require approval from Synapse’s governance team prior to access.

<!-- para:0007 -->
## Who can access the Synapse.org integration

<!-- para:0008 -->
- Individuals who have a registered Synapse account ([register for free](https://accounts.synapse.org/register1?app Id=synapse.org))
- Data access may be subject to use restriction from contributors

<!-- para:0009 -->
More details on accessing the integration can be found in [Synapse’s MCP Server Documentation](https://github.com/susheel/synapse-mcp?tab=readme-ov-file#synapse-mcp-server).

<!-- para:0010 -->
## Setting up the Synapse.org integration

<!-- para:0011 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0012 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**Synapse.org**”
4. Click “Add to your team”

<!-- para:0013 -->
**For Individual Claude Users**

<!-- para:0014 -->
1. Navigate to Settings > Connectors
2. Click “Connect”
3. Follow the instructions to authenticate with your Synapse.org account

<!-- para:0015 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0016 -->
**For Claude Code Users**

<!-- para:0017 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`‍
2. Command: `/plugin install synapse@life-sciences`‍
3. Restart Claude Code
4. Verify that the server is connected with `/mcp`

<!-- para:0018 -->
Technical details of the Synapse.org integration can be found in [Synapse’s MCP Server Documentation](https://github.com/susheel/synapse-mcp?tab=readme-ov-file#synapse-mcp-server).

<!-- para:0019 -->
## Common use cases

<!-- para:0020 -->
- Search for reusable scientific data across all of the Synapse.org platform*“Find RNA-seq datasets related to Alzheimer's disease in Synapse”**“Search Synapse for single-cell transcriptomics datasets”**"Find genomic sequencing data for plexiform neurofibromas in the NF Data Portal”*
- Authorized users can see hierarchy of folders, files, tables, datasets within projects to help organize and monitor data assets*“Explain the files and folders in the public AACR Project GENIE project”**“Give me a quick overview of the data assets in the SEA-AD challenge project with agentic track (syn66496696)?”*
- Get custom metadata of entities in Synapse*“What are the annotations and metadata for file syn4553239?”**“Show me the custom metadata fields for dataset syn66364675”*
- Get provenance information for entities in Synapse to help understand past data processing*“What's the processing history for file syn51543273?”**“Show me the data lineage and upstream dependencies for the dataset syn68719289”*

<!-- para:0021 -->
‍
