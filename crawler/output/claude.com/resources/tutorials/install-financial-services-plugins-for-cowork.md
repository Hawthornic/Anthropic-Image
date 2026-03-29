---
source_url: https://claude.com/resources/tutorials/install-financial-services-plugins-for-cowork
title: "Install financial services plugins for Cowork"
section: resources
---

<!-- para:0001 -->
# Install financial services plugins for Cowork

<!-- para:0002 -->
- Category: Finance
- Product Cowork
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/install-financial-services-plugins-for-cowork#)https://claude.com/resources/tutorials/install-financial-services-plugins-for-cowork

<!-- para:0003 -->
We offer a set of open-source plugins that extend Cowork with specialized capabilities for financial services workflows, including financial modeling, equity research, investment banking, private equity, and wealth management.

<!-- para:0004 -->
These plugins are available in a **[public Git Hub repository](https://github.com/anthropics/financial-services-plugins/tree/main?tab=readme-ov-file#claude-for-financial-services-plugins)** that you can add as a marketplace in Cowork.

<!-- para:0005 -->
## What's included

<!-- para:0006 -->
The repository contains a **core plugin** and several **add-on plugins** that build on it:

<!-- para:0007 -->
- **Financial analysis** (core) — Build comparable company analyses, DCF models, LBO models, and 3-statement financials. This plugin also includes all shared MCP connectors for financial data providers. **Install this first.**
- **Investment banking** — Draft CIMs, teasers, and process letters. Build buyer lists, run merger models, and create strip profiles.
- **Equity research** — Write earnings updates and initiating coverage reports. Track catalysts and screen for new ideas.
- **Private equity** — Source and screen deals, run due diligence checklists, draft IC memos, and monitor portfolio company KPIs.
- **Wealth management** — Prep for client meetings, build financial plans, rebalance portfolios, and identify tax-loss harvesting opportunities.

<!-- para:0008 -->
The repository also includes partner-built plugins from **LSEG** and **S&P Global**, which bring their financial data and analytics directly into Cowork.

<!-- para:0009 -->
## Add the marketplace

<!-- para:0010 -->
1. Open the Claude Desktop app.
2. Look for the mode selector at the top of the app that includes "Chat" and “Cowork.”
3. Click the "Cowork" tab.
4. Click “Customize” on the left sidebar.
5. Click “Browse plugins.”
6. Select “Personal.”
7. Click the “+” button, then select **Add marketplace from Git Hub**.
8. Enter the repository URL: **[https://github.com/anthropics/financial-services-plugins](https://github.com/anthropics/financial-services-plugins)**
9. Once added, you'll see the available financial services plugins in your marketplace.

<!-- para:0011 -->
## Install plugins

<!-- para:0012 -->
1. From your plugin marketplace, browse the available financial services plugins.
2. Install the **financial analysis** plugin first—this is the core plugin that provides shared tools and data connectors used by all other plugins.
3. Install any additional plugins based on your workflow needs.

<!-- para:0013 -->
Once installed, plugins activate automatically. Skills are applied when relevant, or you can invoke them manually during your Cowork session by typing "/" or clicking the "+" button.

<!-- para:0014 -->
## Available Skills

<!-- para:0015 -->
After installation, you can use Skills like:

<!-- para:0016 -->
- /comps [company] — Run a comparable company analysis
- /dcf [company] — Build a DCF valuation model
- /earnings [company] [quarter] — Generate a post-earnings update report
- /one-pager [company] — Create a one-page company profile
- /ic-memo [project name] — Draft an investment committee memo
- /source [criteria] — Source deals based on criteria
- /client-review [client] — Prep for a client meeting

<!-- para:0017 -->
## MCP connectors

<!-- para:0018 -->
The financial analysis core plugin includes connectors for third-party financial data providers such as Daloopa, Morningstar, S&P Global, Fact Set, Moody's, MT Newswires, Aiera, LSEG, Pitch Book, Chronograph, and Egnyte.

<!-- para:0019 -->
Access to these connectors may require a separate subscription or API key from the respective provider. Contact your data provider for details.

<!-- para:0020 -->
## Customize plugins for your firm

<!-- para:0021 -->
These plugins are designed as starting points. You can customize them to match your firm's workflows by editing the plugin files directly:

<!-- para:0022 -->
- Add your firm's terminology, processes, and formatting standards to skill files.
- Swap or add MCP connectors to point at your specific data providers.
- Adjust workflow instructions to reflect how your team does analysis.
- Use /ppt-template to teach Claude your firm's branded Power Point layouts.

<!-- para:0023 -->
## Good to know

<!-- para:0024 -->
- Plugins are file-based (Markdown and JSON) — no code or infrastructure required to customize.
- These plugins work across both Cowork and Claude Code.
- AI-generated financial analysis should always be reviewed by qualified professionals before being used in decision-making.

<!-- para:0025 -->
## Learn more

<!-- para:0026 -->
See our blog post for more information: **[Cowork and plugins for finance](https://claude.com/blog/cowork-plugins-finance)**.
