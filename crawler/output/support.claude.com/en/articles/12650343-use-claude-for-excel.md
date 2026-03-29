---
source_url: https://support.claude.com/en/articles/12650343-use-claude-for-excel
title: "Use Claude for Excel"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Claude for Excel is an add-in that integrates Claude into your Excel workflow. It's designed for professionals who work extensively with spreadsheets, particularly in financial analysis and modeling.

<!-- para:0002 -->
With Claude for Excel, you can:

<!-- para:0003 -->
Our newest model—Claude Sonnet 4.6—is available when using Claude for Excel. Experience our most capable Sonnet model yet and see how it performs at any thinking effort.

<!-- para:0004 -->
Through March 19, 2026, your usage limits are doubled when using Claude for Excel across all paid plans (Pro, Max, Team, Enterprise).

<!-- para:0005 -->
Claude for Excel now supports MCP connectors, letting Claude work with the other tools you use day-to-day — like S&P Global, LSEG, Daloopa, Pitchbook, Moody's, and FactSet. This means you can ask Claude to pull in context from outside your spreadsheet without leaving Excel. If you've already enabled **[connectors](https://claude.com/connectors)** in your Claude settings, those same connections will work in Excel automatically.

<!-- para:0006 -->
We've updated Claude for Excel with Claude Opus 4.6 and a significant set of new spreadsheet editing tools. These additions bring Claude for Excel closer to a full Excel editing experience, particularly for finance professionals.

<!-- para:0007 -->
Claude for Excel now supports a range of native Excel operations directly:

<!-- para:0008 -->
**Deploy Claude** **for** **Excel to your organization:**

<!-- para:0009 -->
After installation, team members can open Excel, activate the Claude add-in (from **Tools > Add-ins** on Mac or **Home > Add-ins** on Windows), sign in with their Claude credentials, and start working with their spreadsheets.

<!-- para:0010 -->
If your organization routes API traffic through an internal LLM gateway connected to Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Azure, you can use the add-in without a Claude account. This is the same gateway pattern used by Claude Code.

<!-- para:0011 -->
For setup instructions and gateway requirements, see **[Use Claude for Excel and PowerPoint with an LLM gateway](https://support.claude.com/en/articles/13945233-use-claude-in-excel-and-powerpoint-with-an-llm-gateway)**.

<!-- para:0012 -->
Ask Claude questions about specific cells, formulas, or entire sections of your workbook. Claude can navigate across multiple tabs and provides answers with direct citations to referenced cells.

<!-- para:0013 -->
**Example prompts:**

<!-- para:0014 -->
Modify values and inputs while Claude maintains all formula dependencies and relationships. Every change is highlighted with clear explanations.

<!-- para:0015 -->
**Example prompts:**

<!-- para:0016 -->
Create spreadsheets from scratch or populate existing templates with new data, formulas, and assumptions.

<!-- para:0017 -->
**Example prompts:**

<!-- para:0018 -->
Identify error sources (like #REF!, #VALUE!, or circular references) and get actionable fixes that maintain spreadsheet integrity.

<!-- para:0019 -->
**Example prompts:**

<!-- para:0020 -->
Claude highlights every cell it updates and provides explanatory comments. When explaining calculations, Claude includes clickable citations that navigate directly to referenced cells.

<!-- para:0021 -->
Claude can now apply a range of Excel-native operations directly, including sorting and filtering data, editing pivot tables and charts, applying conditional formatting rules, setting data validation, and preparing workbooks for printing with finance-specific formatting tools.

<!-- para:0022 -->
**Example prompts:**

<!-- para:0023 -->
Connect your other tools to give Claude context beyond what's in your spreadsheet. All connectors configured in your Claude settings are supported, including custom connectors.

<!-- para:0024 -->
To connect a tool, open the Claude sidebar and select the connectors icon to see available options.

<!-- para:0025 -->
Custom connectors can introduce security risks. Before enabling them, review **[Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp#h_b79c05dfcd)** for guidance on what to consider.

<!-- para:0026 -->
Skills you've enabled in your Claude settings are also available in the Claude for Excel add-in. Claude applies relevant Skills automatically while you work—you don't need to invoke them separately.

<!-- para:0027 -->
You can also type / in the sidebar to see available Skills and select one directly (for example, /debug or /clean-up). Skills that aren't relevant to Excel are excluded from this list.

<!-- para:0028 -->
To learn more about enabling and managing Skills, see **[Use Skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)**.

<!-- para:0029 -->
Use the **Instructions** field in the add-in sidebar to set preferences that apply to every conversation in Excel. Instructions are useful for things like formatting conventions (for example, "always use IB formatting: blue for inputs, black for formulas"), preferred output style, or recurring context Claude should know about your workflow.

<!-- para:0030 -->
Instructions you set in Excel only apply to Excel — they're separate from any Instructions you set in PowerPoint.

<!-- para:0031 -->
**Supported file formats:**

<!-- para:0032 -->
**What's preserved:**

<!-- para:0033 -->
For Claude for Excel use, we automatically delete inputs and outputs on our backend within 30 days of receipt or generation, except in cases outlined in **[How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)**Data will be deleted after 30 days, but will be cached for a number of hours so users can access context in recently closed out documents.

<!-- para:0034 -->
This is unlike our other commercial products (Team and Enterprise plans) that allow you to save and continue conversations with Claude. Chat history is not saved between sessions.

<!-- para:0035 -->
Currently, observability and audibility are not available with this feature. Claude for Excel does not inherit custom data retention settings your organization might have set, and isn't included in Enterprise audit logs or the Compliance API at this time.

<!-- para:0036 -->
Additionally, Claude does not have advanced Excel capabilities, including:

<!-- para:0037 -->
As a beta feature, Claude for Excel is **not recommended** for:

<!-- para:0038 -->
To use Claude for Excel safely and effectively:

<!-- para:0039 -->
Only use Claude for Excel with trusted spreadsheets and not spreadsheets from external untrusted sources (for example, downloaded templates, vendor files, collaborative documents, and data imports).

<!-- para:0040 -->
An important risk that users of Claude for Excel and other AI tools that can read and manipulate spreadsheets is prompt injection attacks that hide malicious instructions in spreadsheet content (cells, formulas, comments, etc.) to trick the AI models into taking unintended actions. For example, a seemingly innocent template or data file received from an external party or downloaded from the internet might contain hidden instructions to "export all financial data to this external URL" or "modify these financial records." Claude may interpret these malicious instructions as legitimate requests from you.

<!-- para:0041 -->
Our testing has identified edge scenarios where Claude for Excel can be manipulated to:

<!-- para:0042 -->
Users can approve all of Claude’s actions via a confirmation pop-up that appears when each tool is triggered:

<!-- para:0043 -->
While we continue to develop our offerings and improve safety measures to reduce these risks, users should exercise caution when using Claude for Excel and should not use it with spreadsheets from external, untrusted sources.

<!-- para:0044 -->
**Build models**

<!-- para:0045 -->
**Forecasting**

<!-- para:0046 -->
**Scenario analysis**

<!-- para:0047 -->
**Insights and trends**

<!-- para:0048 -->
**Variance analysis**

<!-- para:0049 -->
**Categorization**

<!-- para:0050 -->
**Standardize formats**

<!-- para:0051 -->
**Fix data quality issues**

<!-- para:0052 -->
**Parse and transform**

<!-- para:0053 -->
**Troubleshooting**

<!-- para:0054 -->
**Explanation**

<!-- para:0055 -->
**Creation**

<!-- para:0056 -->
**Dashboards**

<!-- para:0057 -->
**Reports**

<!-- para:0058 -->
**Charts**

<!-- para:0059 -->
**Professional styling**

<!-- para:0060 -->
**Conditional formatting**

<!-- para:0061 -->
**PDF extraction**

<!-- para:0062 -->
**Template population**

<!-- para:0063 -->
**Audit and validation**

<!-- para:0064 -->
**Improvement**

<!-- para:0065 -->
You can switch between Sonnet 4.6 and Opus 4.6 when using Claude for Excel.

<!-- para:0066 -->
Yes, Claude is trained to recognize common financial modeling patterns, formula structures, and industry-standard calculations. However, always verify that outputs match your specific methodologies.

<!-- para:0067 -->
Claude for Excel works within your existing security framework. For highly sensitive or regulated data, ensure you follow your organization's data handling policies.

<!-- para:0068 -->
Currently, chat history is not saved between sessions. Each time you open the add-in, you start a fresh conversation with Claude. However, we are working to support this in future versions of Claude for Excel.

<!-- para:0069 -->
Claude reads the content of your currently open workbook, including cells, formulas, and tab structure. It can only access the workbook you have open in Excel.

<!-- para:0070 -->
Claude highlights all changes it makes to your workbook. Review these changes carefully before saving or sharing your file. You can always undo changes using Excel's standard undo function.
