---
source_url: https://claude.com/resources/tutorials/using-the-biorender-connector-in-claude
title: "Using the Bio Render Connector in Claude"
section: resources
---

<!-- para:0001 -->
# Using the Bio Render Connector in Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product Claude.ai
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/using-the-biorender-connector-in-claude#)https://claude.com/resources/tutorials/using-the-biorender-connector-in-claude

<!-- para:0003 -->
The Bio Render integration searches Bio Render’s extensive scientific figure template and icon collection for relevant content to create figures faster. This article explains how to set up and use the Bio Render integration with Claude to accelerate scientific content creation.

<!-- para:0004 -->
The Bio Render integration relies upon Claude's ability to [use remote connectors](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory).

<!-- para:0005 -->
## What this integration provides

<!-- para:0006 -->
This integration allows you to search Bio Render’s extensive library of vetted scientific figures to quickly find scientifically-accurate content for your presentations, posters, grant proposal figures, journal graphical abstracts and more. Simply describe your needs and receive recommended scientific icons, figures and templates in return.

<!-- para:0007 -->
This integration provides access to Bio Render’s scientific Icons and Template, which includes:

<!-- para:0008 -->
- 50,000+ verified scientific icons across all fields of life sciences
- Professionally designed figure templates for meetings, presentations, research posters, grant applications, publications, patience material, internal workflows, etc.
- Regularly updated visual assets curated by world class medical illustrators

<!-- para:0009 -->
## Who can access the Bio Render integration

<!-- para:0010 -->
- The Bio Render integration is available to all Bio Render users with an active account.
- Users must log in using their Bio Render credentials to authenticate the connection.
- Once connected, they can search Bio Render’s scientific icon and template library directly.
- Access to specific icons and templates will depend on the user’s subscription tier: Free and Individual Plans - Access to a limited set of icons and templates Premium and Team Plans - Access to the full Bio Render library, including advanced templates and specialized scientific content
- No additional licensing or set up fees are required to access the Bio Render integration

<!-- para:0011 -->
More details on accessing the integration can be found in [Bio Render’s MCP Server Documentation](https://help.biorender.com/hc/en-gb/articles/30870978672157-How-to-use-the-Bio Render-MCP-connector).

<!-- para:0012 -->
## Setting up the Bio Render integration

<!-- para:0013 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0014 -->
1. Navigate to Admin settings > Connectors
2. Click "Browse connectors"
3. Click “**Bio Render**”
4. Click “Add to your team”

<!-- para:0015 -->
**For Individual Claude Users**

<!-- para:0016 -->
1. Navigate to Settings > Connectors
2. Click “Connect”
3. Follow the instructions to authenticate with your Bio Render account

<!-- para:0017 -->
Learn about [finding and connecting tools](https://support.claude.com/en/articles/11724452-browsing-and-connecting-to-tools-from-the-directory) in Claude.

<!-- para:0018 -->
**For Claude Code Users**

<!-- para:0019 -->
1. Command: `/plugin marketplace add anthropics/life-sciences`‍
2. Command: `/plugin install biorender@life-sciences`‍
3. Restart Claude Code
4. Verify that the server is connected with `/mcp`

<!-- para:0020 -->
Technical details of the Bio Render integration can be found in [Bio Render’s MCP Server Documentation](https://help.biorender.com/hc/en-gb/articles/30870978672157-How-to-use-the-Bio Render-MCP-connector).

<!-- para:0021 -->
## Common use cases

<!-- para:0022 -->
- **Grant proposal figures**- describe your research or experimental design and get relevant template and icon suggestions to create clear proposal figures for reviewers “*I'm working on a figure for a grant proposal about chimeric CAR T cell therapy targeting solid tumors. I need two panels: 1. T cells engineered with chimeric antigen receptors 2. CAR T cells mediate cancer cell death. Can you help me find templates that show CAR T cells receptors and CAR T cells trafficking and targeting cancer cells?”***‍**
- ‍**Journal figures & graphical abstracts**- use the text of your paper’s key findings to get template and icon suggestions for creating publication visuals “*I need to create a graphical abstract about CRISPR-Cas9 gene editing in plant cells. I want to show the Cas9 protein, guide RNA, DNA double-strand break, and the DNA repair process. Can you find me templates for CRISPR mechanisms and plant cell structures?”***‍**
- **Presentations for conferences & internal lab meetings** - describe your experimental workflow or steps to get icon and template recommendations for use in internal lab teams meetings and for creating presentations and posters for use at conferences “*I need to explain the experimental workflow for protein crystallization during a presentation. Can you find templates showing the process, including protein expression and purification, protein crystallization, and X-ray diffraction?”*
