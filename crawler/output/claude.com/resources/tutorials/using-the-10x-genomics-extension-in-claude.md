---
source_url: https://claude.com/resources/tutorials/using-the-10x-genomics-extension-in-claude
title: "Using the 10x Genomics Extension in Claude"
section: resources
---

<!-- para:0001 -->
# Using the 10x Genomics Extension in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-10x-genomics-extension-in-claude#)https://claude.com/resources/tutorials/using-the-10x-genomics-extension-in-claude

<!-- para:0003 -->
The 10x Genomics integration transforms single cell and spatial analysis into a simple, conversational workflow. Biologists can easily analyze their own sequencing data, while core labs can quickly perform batch processing. This article explains how to set up and use the 10x Genomics integration with Claude to advance your analysis workflows.

<!-- para:0004 -->
The 10x Genomics integration is available as a desktop extension in the Claude Desktop App ([download here](https://claude.ai/download)), and it relies upon Claude's ability to use [local connectors via a desktop extension](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop).

<!-- para:0005 -->
## What this integration provides

<!-- para:0006 -->
The 10x Genomics integration enables researchers to create and manage single cell genomics analysis workflows in conversation with Claude. Users can upload data, configure and launch Cell Ranger pipelines, monitor analysis status, and download results using natural language prompts instead of command-line tools or web interfaces. The integration translates conversational requests into actions on the 10x Cloud Analysis platform, streamlining workflows for gene expression, cell multiplexing, and CRISPR screening analyses.

<!-- para:0007 -->
## Who should use the 10x Genomics integration

<!-- para:0008 -->
- **Computational Biologists: **Researchers who analyze single cell genomics data and want to streamline cloud-based analysis workflows

<!-- para:0009 -->
- **Bioinformaticians: **Scientists who process multiple samples and need efficient batch processing capabilities

<!-- para:0010 -->
- **Research Scientists: **Lab researchers who generate single cell data and want an intuitive interface for running standard pipelines

<!-- para:0011 -->
- **Core Facility Managers: **Staff who process samples for multiple research groups and need to manage numerous analyses

<!-- para:0012 -->
## Who can access the 10x Genomics integration

<!-- para:0013 -->
Any user with a 10x Cloud Analysis account ([create a free account here](https://www.10xgenomics.com/products/cloud-analysis))

<!-- para:0014 -->
More details on accessing the integration can be found in the [10x Genomics MCP Server Documentation](https://www.10xgenomics.com/support/software/cloud-analysis/latest/tutorials/cloud-mcp-server).

<!-- para:0015 -->
## Setting up the 10x Genomics integration

<!-- para:0016 -->
The 10x Genomics integration is available as a desktop extension in the Claude Desktop App ([download here](https://claude.ai/download)). For Organization Owners (Team and Enterprise), setting up the integration involves making the extension available to your organization. For individual users, setting up the integration involves installing the extension from inside the Claude Desktop App.

<!-- para:0017 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0018 -->
*If your organization uses the Desktop Extension Allowlist (i.e., restricts which Desktop Extensions users can access)…*

<!-- para:0019 -->
1. Navigate to Admin settings > Connectors
2. Click “Desktop” tab at the top
3. Confirm that “Allowlist” it toggled **on**
4. Click the “Browse” button
5. In the search field, type “**10x Genomics**”
6. Click on 10x Genomics
7. Click “Add to your team”
8. Instruct your team to download the [Claude Desktop App](https://claude.ai/download) to access the integration by following the instructions below for Individual Claude Users

<!-- para:0020 -->
*If your organization does not use the Desktop Extension Allowlist (i.e., does not restrict which Desktop Extensions users can access)…*

<!-- para:0021 -->
1. Navigate to Admin settings > Connectors
2. Click “Desktop” tab at the top
3. Confirm that “Allowlist” it toggled **off**
4. If the Allowlist is toggled off, all users in your organization will already be able to access the Desktop Extension directory using the instructions below for Individual Claude Users

<!-- para:0022 -->
**For Individual Claude Users**

<!-- para:0023 -->
1. Download the [Claude Desktop App](https://claude.ai/download)
2. In the Claude Desktop App, navigate to Settings > Extensions
3. Click “Browse extensions”
4. Click “**10x Genomics**”
5. Click “Install”
6. Follow the instructions to authenticate with your 10x Cloud Analysis account

<!-- para:0024 -->
Learn about [installing desktop extensions from the directory](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop).

<!-- para:0025 -->
**For Claude Code Users**

<!-- para:0026 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`

<!-- para:0027 -->
1. Command: `/plugin install 10x-genomics@life-sciences`

<!-- para:0028 -->
1. Restart Claude Code

<!-- para:0029 -->
1. Command: `/plugin`

<!-- para:0030 -->
1. Navigate to “Manage and uninstall plugins" and configure the 10x Genomics MCP with your access token

<!-- para:0031 -->
1. Restart Claude Code one more time

<!-- para:0032 -->
1. Verify that the server is connected with `/mcp`

<!-- para:0033 -->
## Common use cases

<!-- para:0034 -->
- Set up a Cell Ranger count analysis

<!-- para:0035 -->
- Set up a Cell Ranger multi analysis with multiplexing

<!-- para:0036 -->
- Batch process multiple samples

<!-- para:0037 -->
- Monitor and download analysis results

<!-- para:0038 -->
- Interpret QC metrics and results

<!-- para:0039 -->
Sample prompts and prompting best practices can be found in the [10x Genomics MCP Server Documentation](https://www.10xgenomics.com/support/software/cloud-analysis/latest/tutorials/cloud-mcp-server).

<!-- para:0040 -->
## More resources from 10x Genomics

<!-- para:0041 -->
- [10x Cloud Analysis support](https://www.10xgenomics.com/support/software/cloud-analysis/latest)

<!-- para:0042 -->
- [Cell Ranger documentation](https://www.10xgenomics.com/support/software/cell-ranger/latest)

<!-- para:0043 -->
- [10x Genomics MCP Server Documentation](https://www.10xgenomics.com/support/software/cloud-analysis/latest/tutorials/cloud-mcp-server)

<!-- para:0044 -->
‍
