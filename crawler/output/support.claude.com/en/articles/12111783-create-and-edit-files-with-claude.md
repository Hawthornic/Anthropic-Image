---
source_url: https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude
title: "Create and edit files with Claude"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Claude can execute code to create and work with files directly in your conversations. Prompt Claude using natural language to generate Excel spreadsheets, PowerPoint presentations, Word documents, and PDF files that you can download and use immediately.

<!-- para:0002 -->
These capabilities make it easy to produce professional documents by simply chatting with Claude. You can create financial models in Excel with working formulas, perform advanced analyses on uploaded data, produce reports with charts and visualizations, and generate presentations from your documents—all without specialized software skills.

<!-- para:0003 -->
Claude's file creation abilities are powered by Sonnet 4.6, which excels at working with documents, spreadsheets, and presentations. You can expect accurate Excel formulas, better document formatting, and more reliable file manipulation overall.

<!-- para:0004 -->
**Free, Pro, and Max plans:**

<!-- para:0005 -->
**Team plan:**

<!-- para:0006 -->
**Enterprise plan:**

<!-- para:0007 -->
**Enterprise plans:**This capability is disabled by default at the organization level. Owners can manually enable it in **[Organization settings > Capabilities](http://claude.ai/admin-settings/capabilities)** by toggling **Code execution and file creation** on. Individual members still need to opt in to file creation in **[Settings > Capabilities](http://claude.ai/settings/capabilities)** before using this feature.**

<!-- para:0008 -->
**Team plans:**This capability is enabled by default at the organization level with **Allow network egress** toggled on with access to package managers only. An organization owner can manually disable this for the organization in **[Organization settings > Capabilities](http://claude.ai/admin-settings/capabilities)** if needed, or individual members can disable it in **[Settings > Capabilities](http://claude.ai/settings/capabilities)** for their accounts.**

<!-- para:0009 -->
**Free, Pro, and Max plans:**Enable file creation from **[Settings > Capabilities](http://claude.ai/settings/capabilities)** by toggling **Code execution and file creation** on.**

<!-- para:0010 -->
To give Claude access to external data sources, toggle **Allow network egress** on:

<!-- para:0011 -->
To enable or disable this feature on Claude for iOS or Android, tap your initials or name in the left sidebar to open Settings. Select "Capabilities" and toggle **Code execution and file creation** on or off.

<!-- para:0012 -->
Team and Enterprise organization owners can control network access settings in **[Organization settings > Capabilities](http://claude.ai/admin-settings/capabilities)**. After enabling code execution and file creation, choose from the following options to configure network access for your team:

<!-- para:0013 -->
**All domains:** Claude has full internet access except for domains on Anthropic's legal blocklist. While this provides maximum flexibility for file creation and analysis tasks, it’s also the riskiest option. Please review the **[security considerations below](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#h_0ee9d698a1)** before enabling “All domains”:**

<!-- para:0014 -->
**Short answer:** Disabling network access prevents data from leaving Claude's sandboxed environment - even if something goes wrong.**

<!-- para:0015 -->
When Claude executes code or creates files, it operates within an isolated, sandboxed container. This means the work happens in a controlled environment separate from your systems. However, if network access is enabled, there's a potential risk: through prompt injection or other attacks, Claude could theoretically be tricked into sending data to external servers.

<!-- para:0016 -->
Disabling network access eliminates this risk entirely. Your team still gets Claude's full code execution and file creation capabilities - building Excel models, creating presentations, analyzing data - but with the assurance that nothing can be transmitted outside the sandbox.

<!-- para:0017 -->
Claude is most powerful with network access enabled - it can install new packages and dependencies, pull in real-time data, and interact with web services. For organizations comfortable with that risk profile, enabling access to vetted, trusted domains unlocks the full potential of code execution and file creation.

<!-- para:0018 -->
For those taking a more cautious approach, we recommend starting with network access disabled and adjusting as your team builds confidence:

<!-- para:0019 -->
This approach gives you defense in depth - even if there were vulnerabilities in the sandbox or a successful prompt injection, disabled network access acts as a final barrier preventing data from leaving Anthropic's infrastructure.

<!-- para:0020 -->
When enabled, simply describe what you need in your message. For example, you might say "Create an Excel spreadsheet to track monthly expenses" or "Convert this document into a PowerPoint presentation." Claude will generate the file, which you can then download directly from the conversation.

<!-- para:0021 -->
Start with simple tasks to familiarize yourself with Claude's capabilities, then progress to more complex workflows. Be specific in your requests—describe the structure, content, and formatting you want. You may need to review and refine Claude's outputs to meet your exact requirements.

<!-- para:0022 -->
Claude can create Excel spreadsheets (.xlsx), PowerPoint presentations (.pptx), Word documents (.docx), and PDF files. You can download the files Claude creates or save them directly to Google Drive.

<!-- para:0023 -->
With this feature, Claude can also do more advanced data analysis and data science work. Claude can create Python scripts for data analysis. Claude can create data visualizations in image files like PNG. You can also upload CSV, TSV, and other files for data analysis and visualization.

<!-- para:0024 -->
The maximum file size is 30MB per file for both uploads and downloads.

<!-- para:0025 -->
Claude creates Excel spreadsheets (.xlsx), PowerPoint presentations (.pptx), Word documents (.docx), and PDF files. You can download the files Claude creates or save them directly to Google Drive.

<!-- para:0026 -->
The maximum file size is 30MB per file for both uploads and downloads. For PDFs larger than 30MB, Claude can process them through its computing environment without loading them into the context window.

<!-- para:0027 -->
Claude can perform sophisticated data analysis and data science work, including:

<!-- para:0028 -->
Files in your projects are now accessible through Claude's computing environment while remaining in context. This enables seamless reference and workflow integration across your project files.

<!-- para:0029 -->
The context window has been expanded to support more complex multi-step workflows, particularly for conversations that use code execution and file creation extensively.

<!-- para:0030 -->
Claude provides full support for multiple languages in both the user interface and generated files, with proper formatting and regional standards.

<!-- para:0031 -->
Code execution and file creation gives Claude a sandboxed computing environment. Claude’s internet access will vary based on your network egress settings.

<!-- para:0032 -->
**Network access allows Claude to:**

<!-- para:0033 -->
It is possible for a bad actor to inconspicuously add instructions via external files or websites that trick Claude into:

<!-- para:0034 -->
This means Claude can be tricked into sending information from its context (for example, prompts, projects, data via MCP, Google integrations) to malicious third parties. To mitigate these risks, we recommend you monitor Claude while using the feature and stop it if you see it using or accessing data unexpectedly. You can report issues to us using the thumbs down function directly in Claude.

<!-- para:0035 -->
In line with our **[safe and trustworthy agents framework](https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents)**, we have applied the following mitigations:

<!-- para:0036 -->
We have performed red-teaming and security testing on this feature. We have a continuous process for ongoing security testing and red-teaming. We encourage organizations to evaluate these protections against their specific security requirements when deciding whether to enable this feature.

<!-- para:0037 -->
Team and Enterprise owners have full control over this feature, including:

<!-- para:0038 -->
When network access is enabled, Claude can access the following approved domains:

<!-- para:0039 -->
Generate spreadsheets with working formulas and calculations by describing your needs. Try:

<!-- para:0040 -->
Claude will produce an Excel file with proper formulas, formatting, and even charts to visualize your data.

<!-- para:0041 -->
Combine data analysis with document creation by providing your information and requirements. Try:

<!-- para:0042 -->
Claude will analyze your data and produce a formatted Word document or PDF with charts, insights, and professional formatting.

<!-- para:0043 -->
Change any document from one format to another while preserving or enhancing the content. Try:

<!-- para:0044 -->
or

<!-- para:0045 -->
Claude can even support workflows requiring multiple file format conversions. For instance, you could upload a CSV file and prompt Claude to create a financial model, write a memo summarizing it, and generate a PowerPoint to share the results.

<!-- para:0046 -->
Upload a PDF containing tables or forms and ask Claude to extract the information. Try:

<!-- para:0047 -->
Claude will pull the data, organize it in spreadsheet format, and add visualizations for quick insights.

<!-- para:0048 -->
Upload a CSV with data and ask Claude to build a machine learning model to predict a particular outcome. Have Claude output a report summarizing what it did and the results. Claude will use python to train a model on your data, and provide an explanation of what it did, including the quality of the model, and the results.

<!-- para:0049 -->
We have given Claude a private computing environment directly in claude.ai. This allows Claude to write and run code (for example Python or Javascript). It uses common code packages to create documents, spreadsheets, and slides. Users can also have Claude use its computing environment for other things like data analysis, debugging code snippets, and fun tasks like gif-creation.

<!-- para:0050 -->
Use of this capability draws from the same usage limits offered by your plan. Note that creating files will use more of your limit compared to normal chats with Claude.

<!-- para:0051 -->
Claude can handle multiple files in a single chat, allowing you to create comprehensive multi-file reports and analyses. Files remain available for download throughout your conversation.

<!-- para:0052 -->
File creation is supported on Claude for iOS and Android. Note that when you tap "Download" on Claude Mobile, the file will open in either the system preview or a separate app (for example, the Word app for .docx files).

<!-- para:0053 -->
Yes you are still able to create artifacts (e.g., HTML or react apps, markdown documents, mermaid diagrams, SVGs) with file creation on. Claude now uses the computing environment to create artifacts so the user experience may look slightly different than users are used to. Please report any issues or feedback using the thumbs up/down functionality when chatting with Claude.
