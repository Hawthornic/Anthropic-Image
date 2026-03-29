---
source_url: https://support.claude.com/en/articles/13892150-work-across-excel-and-powerpoint
title: "Work across Excel and PowerPoint"
section: articles
date: 2026-03-20
---

<!-- para:0001 -->
Claude can now work across apps to coordinate between the Excel and PowerPoint add-ins. Instead of switching between apps and providing context each time, Claude can read from one app and make changes in another. For example, you can ask Claude to analyze data in an Excel workbook, then create a presentation in PowerPoint using those results, without copying and pasting between apps.

<!-- para:0002 -->
Get **[Claude for Excel](https://marketplace.microsoft.com/en-us/product/saas/wa200009404?tab=overview)** and **[Claude for PowerPoint](https://marketplace.microsoft.com/en-us/product/office/WA200010001?tab=Overview)**from the Microsoft Marketplace. Open each app and activate the add-in at least once before using the cross-app features.

<!-- para:0003 -->
Go to **Settings**in each of Claude for Excel and Powerpoint and toggle **Let Claude work across files** on:

<!-- para:0004 -->
You will see connected file indicators when Excel or PowerPoint files are linked to your session:

<!-- para:0005 -->
When you describe a task that involves multiple files or apps, Claude coordinates behind the scenes:

<!-- para:0006 -->
You stay in one place while Claude does the switching.

<!-- para:0007 -->
Claude can read data from an open Excel workbook or PowerPoint presentation, and make changes to them directly. For example:

<!-- para:0008 -->
When Claude moves multiple files across Excel and Powerpoint, it carries relevant context forward. If you've been building a financial model in Excel and ask Claude to create a summary deck, Claude already understands the model's structure and key outputs, so you don't need to re-explain.

<!-- para:0009 -->
Skills you've enabled in your Claude settings apply when Claude is working in Excel or PowerPoint during a cross-app task. If you have a Skill that enforces your team's modeling conventions in Excel and another that matches your slide template in PowerPoint, Claude uses each one in the right app as it moves through the workflow.

<!-- para:0010 -->
For more on how Skills work, see **[Use Skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).**

<!-- para:0011 -->
Inputs and outputs are automatically deleted from Anthropic's backend within 30 days of receipt or generation, except in cases outlined in **[How long do you store my organization's data?](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)** The Claude for Excel and Claude for PowerPoint add-ins do not inherit custom data retention settings your organization may have set, and activity is not currently included in Enterprise audit logs, the Compliance API, or data exports. Chat history is not saved between sessions.

<!-- para:0012 -->
Team and Enterprise organization owners can control whether team members can access this capability:

<!-- para:0013 -->
Admins can also manage member access to the Claude for Excel and Claude for PowerPoint add-ins through the **[Microsoft 365 Admin Center](https://admin.microsoft.com/)**.

<!-- para:0014 -->
Make sure the add-in is activated in the app (**Tools > Add-ins** on Mac or **Home > Add-ins** on Windows) and that working across apps is turned on in Claude Desktop settings.

<!-- para:0015 -->
Claude works on open files in sequence. Wait for Claude to finish its current action, then check the target file. You may need to ask Claude to refresh or re-read the file.
