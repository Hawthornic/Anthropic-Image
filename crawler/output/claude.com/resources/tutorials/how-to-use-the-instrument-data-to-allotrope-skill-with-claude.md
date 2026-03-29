---
source_url: https://claude.com/resources/tutorials/how-to-use-the-instrument-data-to-allotrope-skill-with-claude
title: "How to use the Instrument Data to Allotrope Skill with Claude"
section: resources
---

<!-- para:0001 -->
# How to use the Instrument Data to Allotrope Skill with Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/how-to-use-the-instrument-data-to-allotrope-skill-with-claude#)https://claude.com/resources/tutorials/how-to-use-the-instrument-data-to-allotrope-skill-with-claude

<!-- para:0003 -->
## **What is the Instrument Data to Allotrope skill?**

<!-- para:0004 -->
The instrument-to-allotrope skill converts raw laboratory instrument output files (CSVs, Excel, Txt, etc.) into standardized [Allotrope](https://www.allotrope.org/) Simple Model (ASM) JSON format or flattened 2D CSVs for easier integration with LIMS, ELNs, and data lakes. It auto-detects instrument types and when applicable, uses the [allotropy library](https://pypi.org/project/allotropy/) (authored by Benchling) to parse files. It also generates exportable Python parser code so data engineers can reliably replicate the conversion in production pipelines. Users may consider customizing the skill to use their specific data schemas or file output formats instead of the Allotrope standard.

<!-- para:0005 -->
‍

<!-- para:0006 -->
## **Who should use the Instrument Data to Allotrope skill?**

<!-- para:0007 -->
This skill is designed for lab scientists, data managers, and informatics teams working with laboratory instruments who need to standardize disparate instrument outputs (cell counters, plate readers, spectrophotometers, etc.) into a consistent format for downstream analysis, regulatory submissions, or integration with enterprise data systems without writing code from scratch.

<!-- para:0008 -->
## **How to access the skill in**[**Claude.ai**](http://claude.ai/)

<!-- para:0009 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0010 -->
1. Download the ZIP for the **instrument-data-to-allotrope** skill [here](https://github.com/anthropics/life-sciences/releases/download/v1.1.1/instrument-data-to-allotrope-v1.1.1.zip)
2. From [Claude.ai](http://claude.ai/), navigate to Admin settings > Capabilities > Skills
3. Make sure Skills is activated for your organization
4. Click “Organization skills library”
5. Click “+Add”
6. Upload the skill zip file

<!-- para:0011 -->
Learn about [provisioning and managing skills for your organization](https://support.claude.com/en/articles/13119606-provisioning-and-managing-skills-for-your-organization)

<!-- para:0012 -->
**For Individual Claude Users**

<!-- para:0013 -->
1. Download the ZIP file for the **instrument-data-to-allotrope** skill [here](https://github.com/anthropics/life-sciences/releases/download/v1.1.1/instrument-data-to-allotrope-v1.1.1.zip)
2. From [Claude.ai](http://claude.ai/), navigate to Settings > Capabilities > Skills (if Skills is not available, contact your team admin)
3. Click “Upload skill”
4. Upload the skill zip file

<!-- para:0014 -->
## **How to access the skills in Claude Code**

<!-- para:0015 -->
Command

<!-- para:0016 -->
`/plugin marketplace add anthropics/life-sciences`

<!-- para:0017 -->
`/plugin install instrument-data-to-allotrope@life-sciences`
