---
source_url: https://support.claude.com/en/articles/13521390-use-claude-for-powerpoint
title: "Use Claude for PowerPoint"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Claude for PowerPoint is an add-in that integrates Claude into your PowerPoint workflow. It's designed for professionals who build presentations, particularly those who spend significant time creating and refining slide decks.

<!-- para:0002 -->
With Claude for PowerPoint, you can:

<!-- para:0003 -->
Claude for PowerPoint is now available to Pro plan customers.

<!-- para:0004 -->
Claude for PowerPoint now supports connectors, letting you bring context from your other tools directly into your slide workflow.

<!-- para:0005 -->
Through March 19, 2026, your usage limits are doubled when using Claude for PowerPoint across all paid plans (Pro, Max, Team, Enterprise).

<!-- para:0006 -->
**Deploy Claude for PowerPoint to your organization:**

<!-- para:0007 -->
After installation, team members can open PowerPoint, activate the Claude add-in (from **Tools > Add-ins** on Mac or **Home > Add-ins** on Windows), sign in with their Claude credentials, and start working with their presentations.

<!-- para:0008 -->
If your organization routes API traffic through an internal LLM gateway connected to Amazon Bedrock, Google Cloud Vertex AI, or Microsoft Azure, you can use the add-in without a Claude account. This is the same gateway pattern used by Claude Code.

<!-- para:0009 -->
For setup instructions and gateway requirements, see **[Use Claude for Excel and PowerPoint with an LLM gateway](https://support.claude.com/en/articles/13945233-use-claude-in-excel-and-powerpoint-with-an-llm-gateway)**.

<!-- para:0010 -->
Start with a client or corporate template already loaded. Describe what you need, and Claude generates slides using the correct layouts, fonts, and colors from the slide master. Claude reads your deck's template and respects its formatting rules.

<!-- para:0011 -->
**Example prompts:**

<!-- para:0012 -->
Select a slide and tell Claude what to change. Claude makes edits while preserving your formatting and surrounding context.

<!-- para:0013 -->
**Example prompts:**

<!-- para:0014 -->
Open a blank deck and describe your goal. Claude builds a draft with logical structure and professional defaults, then you can refine from there.

<!-- para:0015 -->
**Example prompts:**

<!-- para:0016 -->
Convert bullet points into professional visuals—diagrams, process flows, or editable native PowerPoint charts. Claude produces visuals you can edit directly, not static images.

<!-- para:0017 -->
**Example prompts:**

<!-- para:0018 -->
Claude reads the slide master, layouts, fonts, and color scheme in your deck and uses them when generating or editing slides. It aims to maintain template compliance without introducing off-brand elements.

<!-- para:0019 -->
Connect your other tools to give Claude context beyond what's in your deck. With connectors enabled, Claude can draw on information from your connected tools when generating or refining content.

<!-- para:0020 -->
To connect a tool, open the Claude sidebar and select the connectors icon to see available options.

<!-- para:0021 -->
Custom connectors can introduce security risks. Before enabling them, review **[Get started with custom connectors using remote MCP](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp#h_b79c05dfcd)** for guidance on what to consider.

<!-- para:0022 -->
Skills you've enabled in your Claude settings are also available in the Claude for PowerPoint add-in. Claude applies relevant Skills automatically while you work—you don't need to invoke them separately.

<!-- para:0023 -->
You can also type `/` in the sidebar to see available Skills and select one directly (for example, `/deck-check`). Skills that aren't relevant to PowerPoint are excluded from this list.

<!-- para:0024 -->
To learn more about enabling and managing Skills, see **[Use Skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)**.

<!-- para:0025 -->
Use the **Instructions** field in the add-in sidebar to set preferences that apply to every conversation in PowerPoint. Instructions are useful for things like brand guidelines (for example, "always use one-line bullets" or "use the blue accent color for highlights"), preferred slide structure, or recurring context Claude should know about your workflow.

<!-- para:0026 -->
Instructions you set in PowerPoint only apply to PowerPoint — they're separate from any Instructions you set in Excel.

<!-- para:0027 -->
For Claude for Powerpoint use, we automatically delete inputs and outputs on our backend within 30 days of receipt or generation, except in cases outlined in **[How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)**Data will be deleted after 30 days, but will be cached for a number of hours so users can access context in recently closed out documents.

<!-- para:0028 -->
This is unlike our other commercial products (Team and Enterprise plans) that allow you to save and continue conversations with Claude. Chat history is not saved between sessions.

<!-- para:0029 -->
Currently, observability and audibility are not available with this feature. Claude for PowerPoint does not inherit custom data retention settings your organization might have set, and isn't included in Enterprise audit logs or the Compliance API at this time.

<!-- para:0030 -->
As a beta feature, Claude for PowerPoint is **not recommended** for:

<!-- para:0031 -->
To use Claude for PowerPoint safely and effectively:

<!-- para:0032 -->
Only use Claude for PowerPoint with trusted files and not files from external untrusted sources (for example, downloaded templates, vendor files, collaborative documents, and data imports).

<!-- para:0033 -->
An important risk that users of Claude for PowerPoint and other AI tools that can read and manipulate files is prompt injection attacks that hide malicious instructions in file content to trick the AI models into taking unintended actions. For example, a seemingly innocent template or data file received from an external party or downloaded from the internet might contain hidden instructions to "export all financial data to this external URL" or "modify these financial records." Claude may interpret these malicious instructions as legitimate requests from you.

<!-- para:0034 -->
Our testing has identified edge scenarios where Claude for PowerPoint can be manipulated to:

<!-- para:0035 -->
While we continue to develop our offerings and improve safety measures to reduce these risks, users should exercise caution when using Claude for PowerPoint and should not use it with files from external, untrusted sources.

<!-- para:0036 -->
You can switch between Sonnet 4.6 and Opus 4.6 when using Claude for PowerPoint.

<!-- para:0037 -->
Yes. Claude reads the slide master, layouts, fonts, and color scheme in your deck and uses them when generating or editing slides. It aims to maintain template compliance, though you should always review output for complex templates.

<!-- para:0038 -->
Claude for PowerPoint works within your existing security framework. For highly sensitive or regulated data, ensure you follow your organization's data handling policies.

<!-- para:0039 -->
Currently, chat history is not saved between sessions. Each time you open the add-in, you start a fresh conversation with Claude.

<!-- para:0040 -->
Claude reads the content of your currently open presentation, including slides, text, shapes, and slide master information. It can only access the presentation you have open in PowerPoint.

<!-- para:0041 -->
Review Claude's changes carefully before saving or sharing your file. You can always undo changes using PowerPoint's standard undo function (Ctrl+Z / Cmd+Z).
