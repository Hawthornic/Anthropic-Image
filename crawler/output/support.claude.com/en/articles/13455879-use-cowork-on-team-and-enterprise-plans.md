---
source_url: https://support.claude.com/en/articles/13455879-use-cowork-on-team-and-enterprise-plans
title: "Use Cowork on Team and Enterprise plans"
section: articles
date: 2026-03-25
---

<!-- para:0001 -->
This article explains important limitations and considerations for Team and Enterprise organizations using Cowork during the research preview period.

<!-- para:0002 -->
Cowork is available as a research preview for paid plans (Pro, Max, Team, Enterprise) on:

<!-- para:0003 -->
Cowork will be on by default when the research preview launches, but organization owners can manually disable it.

<!-- para:0004 -->
**How to enable or disable Cowork:**

<!-- para:0005 -->
Plugins are included with Cowork and controlled by the same admin toggle—there's no separate setting to manage plugin access within Cowork.

<!-- para:0006 -->
For details on what members can do with plugins, see **[Use plugins in Cowork](https://support.claude.com/en/articles/13837440-use-plugins-in-cowork)**.

<!-- para:0007 -->
Projects in Cowork let users organize tasks into dedicated workspaces with their own files, links, instructions, and memory. Projects are available to all Cowork users. There are no separate admin controls for projects, so owners cannot restrict project creation at the organization level at this time.

<!-- para:0008 -->
Project data (tasks and memory) is stored locally on each user's computer, consistent with how other Cowork data is handled. For full details, see **[Organize your tasks with projects in Cowork](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-cowork).**

<!-- para:0009 -->
Owners can create plugin marketplaces to distribute curated plugins across their organization. This gives you control over which plugins your team members see and use in Cowork.

<!-- para:0010 -->
For each plugin, you can set one of three installation preferences:

<!-- para:0011 -->
You can populate your marketplace by uploading plugin files directly. To get started, go to **Organization settings > Plugins** in Claude Desktop.

<!-- para:0012 -->
For a full walkthrough, see **[Manage plugins for your organization](https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization)**.

<!-- para:0013 -->
Cowork now surfaces your organization's branding, including a redesigned home screen tailored to your team. Team and Enterprise owners can configure branding within **Organization settings**.

<!-- para:0014 -->
Cowork currently lacks several enterprise monitoring and compliance capabilities. These limitations are important to understand before enabling Cowork for your organization.

<!-- para:0015 -->
Cowork activity is **not captured** in:

<!-- para:0016 -->
If your organization requires audit trails for compliance purposes, do not enable Cowork for regulated workloads.

<!-- para:0017 -->
Team and Enterprise owners can track usage, costs, and tool activity across their teams using OpenTelemetry. This provides visibility into how Cowork and plugins are being used, though it doesn't replace audit logging for compliance purposes.

<!-- para:0018 -->
For more information, see **[Monitoring](https://claude.com/docs/cowork/monitoring)** in our Claude Docs.

<!-- para:0019 -->
Cowork stores conversation history locally on users' computers. This data is not subject to Anthropic's standard **[data retention policies](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)** and cannot be centrally managed or exported by admins.

<!-- para:0020 -->
The Cowork toggle is organization-wide — either all members have access or none do. If you need to selectively enable Cowork for specific users or teams, reach out to your Anthropic Contact or our **[Sales team](https://claude.com/contact-sales)**.

<!-- para:0021 -->
Within Cowork, admins have more granular control over plugins. You can set per-plugin installation preferences to control which plugins are auto-installed, available for self-service, or hidden from your organization's catalog. See **[Manage plugins for your organization](https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization)** for details.

<!-- para:0022 -->
Cowork has unique risks due to its agentic nature and internet access. While we've implemented safety measures including model training and content classifiers, the risk of prompt injection attacks is non-zero.

<!-- para:0023 -->
Users should:

<!-- para:0024 -->
For detailed guidance, see **[Use Cowork safely](https://support.claude.com/en/articles/13364135-use-cowork-safely)**.

<!-- para:0025 -->
Cowork respects your organization's current network egress permissions. Review your network access settings in **[Organization settings > Capabilities](https://claude.ai/admin-settings/capabilities)** under **Code execution** before enabling Cowork.
