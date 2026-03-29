---
source_url: https://support.claude.com/en/articles/13364135-use-cowork-safely
title: "Use Cowork safely"
section: articles
date: 2026-03-25
---

<!-- para:0001 -->
Cowork lets Claude work on your computer with access to your files, browser, connected services, and apps. That capability comes with risks worth understanding. This article covers what we've built to keep you safe, what you should watch for, and how to protect yourself when using Cowork.

<!-- para:0002 -->
Cowork is available as a research preview for paid plans (Pro, Max, Team, Enterprise) on:

<!-- para:0003 -->
**[Cowork](https://claude.com/product/cowork)** is a research preview with unique risks due to its agentic nature and internet access.**

<!-- para:0004 -->
**To minimize risks:**

<!-- para:0005 -->
Cowork activity is not captured in audit logs, Compliance API, or data exports. Do not use Cowork for regulated workloads. For more information, see Cowork for Team and Enterprise plans.

<!-- para:0006 -->
We've implemented multiple layers of protection:

<!-- para:0007 -->
**1. Be selective about file access**

<!-- para:0008 -->
You control which local files Claude can access. Since Claude can read, write, and permanently delete these files, be cautious about granting access to sensitive information like financial documents, credentials, or personal records. Consider creating a dedicated working folder for Claude rather than granting broad access, and keep backups of important files.

<!-- para:0009 -->
**2. Monitor tasks, not just commands**

<!-- para:0010 -->
Cowork executes code and commands on your behalf. While we surface what Claude is doing, you shouldn't expect to validate every individual command—instead, watch for unexpected patterns: Is Claude accessing files or websites you didn't mention? Is the task scope creeping beyond what you asked for? If something feels off, stop the task immediately.

<!-- para:0011 -->
**3. Be cautious with scheduled tasks**

<!-- para:0012 -->
Scheduled tasks run automatically, which means Claude may be working without you actively watching. Because you can't monitor these tasks in real time, take extra care when setting them up:

<!-- para:0013 -->
Scheduled tasks only run while your computer is awake and the Claude Desktop app is open. For more on setting up and managing scheduled tasks, see **[Schedule recurring tasks in Cowork](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork)**.

<!-- para:0014 -->
**4. Be cautious with computer use**

<!-- para:0015 -->
When Claude uses your computer, it works outside the virtual machine—interacting directly with your apps, browser, and desktop. This is powerful, but carries additional risk. Keep the following in mind:

<!-- para:0016 -->
For more information, see **[Let Claude use your computer in Cowork](https://support.claude.com/en/articles/14128542-computer-use-safety)**.

<!-- para:0017 -->
**5. Limit browser and web access to trusted sources**

<!-- para:0018 -->
If you're using the Claude in Chrome extension with Cowork, limit access to sites you trust. Web content is a primary vector for prompt injection attacks—malicious instructions can be hidden in websites, emails, or documents that Claude accesses. Claude's default network access is intentionally restricted; only extend it to sites you trust.

<!-- para:0019 -->
Note that network egress permissions don't apply to the **[web search tool](https://support.claude.com/en/articles/10684626-enabling-and-using-web-search)**, which can access the broader web regardless of your network settings.

<!-- para:0020 -->
**6. Be especially cautious with unfamiliar MCPs and plugins**

<!-- para:0021 -->
Desktop extensions (MCPs) and plugins expand what Claude can do, but each one introduces new ways for attacks to reach Claude. Plugins bundle together skills, connectors, and sub-agents into a single package, which means installing one can significantly expand Claude's scope of action.

<!-- para:0022 -->
Stick to verified extensions from the Claude Desktop directory, and carefully evaluate the permissions any extension or plugin requests before installing.

<!-- para:0023 -->
For more on plugins, see **[Use plugins in Cowork](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork)**.

<!-- para:0024 -->
**7. Be mindful of cross-app data sharing**

<!-- para:0025 -->
When using the Claude for Excel and Claude for PowerPoint add-ins with Cowork, Claude can read, edit, and pass context between these applications. For example, Claude might analyze data in Excel and move a chart into a presentation—without you explicitly directing that transfer. Be aware that data from one application may flow into another during a Cowork session, and avoid working with sensitive information in these add-ins while Cowork is active.

<!-- para:0026 -->
**8. Be aware of mobile access to your desktop**

<!-- para:0027 -->
When you message Claude from your phone, Claude works on your desktop computer using whatever file access, connectors, and plugins you've already granted. This means your phone effectively becomes a remote control for your desktop's resources.

<!-- para:0028 -->
If your organization manages your computer, be aware that this extends access to a personal mobile device. Review what access you've granted Claude in Cowork, and consider whether that level of access is appropriate when reachable from your phone.

<!-- para:0029 -->
**9. Report suspicious behavior immediately**

<!-- para:0030 -->
If Claude suddenly starts discussing unrelated topics, attempts to access unexpected resources, or requests sensitive information unprompted, stop the task and report it to [usersafety@anthropic.com](mailto:usersafety@anthropic.com) or use the in-app feedback button. Your reports help us improve our defenses.

<!-- para:0031 -->
You remain responsible for all actions taken by Claude performed on your behalf. This includes:

<!-- para:0032 -->
For more information about using AI agents safely, please review our **[Acceptable Use Policy for Agents](https://support.claude.com/en/articles/12005017-using-agents-according-to-our-usage-policy)**.
