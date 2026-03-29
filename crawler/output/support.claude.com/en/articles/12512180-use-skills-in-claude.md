---
source_url: https://support.claude.com/en/articles/12512180-use-skills-in-claude
title: "Use Skills in Claude"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Skills extend Claude's capabilities by giving it access to specialized knowledge and workflows. This guide shows you how to enable, discover, and use Skills in Claude.

<!-- para:0002 -->
**For Enterprise plans:** Owners must first enable both **Code execution and file creation** in **[Organization settings > Capabilities](https://claude.ai/admin-settings/capabilities)**and **Skills**in **[Organization settings > Skills](https://claude.ai/admin-settings/skills)**. Owners can also upload skills to provision them organization-wide — these skills automatically appear for all users. Once Skills are enabled at the organization level, individual members can toggle on example skills, access provisioned skills, and upload their own personal skills in **[Customize > Skills](https://claude.ai/customize/skills)**.**

<!-- para:0003 -->
**For Team plans:** This feature is enabled by default at the organization level. Once enabled, individual members can toggle on example skills and upload their own in **[Customize > Skills](https://claude.ai/customize/skills)**.**

<!-- para:0004 -->
**For Max, Pro, and free plans:** You can enable example skills and upload your own in **[Customize > Skills](https://claude.ai/customize/skills)**.**

<!-- para:0005 -->
Owners of Team and Enterprise organizations can provision skills for all users. These skills appear in your individual Skills list with a team indicator — you can toggle them on or off based on your preferences. For information on provisioning skills for your organization, see **[Provision and manage Skills for your organization](https://support.claude.com/en/articles/13119606-provisioning-and-managing-skills-for-your-organization#h_4dea113421)**.

<!-- para:0006 -->
Anthropic provides several built-in skills that are available to all users, including:

<!-- para:0007 -->
With **Code execution and file creation**on, Claude will automatically use these tools when relevant. You don't need to explicitly invoke them—Claude determines when each skill is needed based on your request.

<!-- para:0008 -->
For example, if you ask Claude to "Create a PowerPoint presentation about Q3 results," Claude will automatically use the PowerPoint skill if the capability is enabled.

<!-- para:0009 -->
You can also create and upload your own skills to teach Claude your specific workflows:

<!-- para:0010 -->
Claude automatically identifies and loads relevant skills based on your task. Refer to **[What are Skills?](https://support.claude.com/en/articles/12512176-what-are-skills)** to learn how this works.

<!-- para:0011 -->
Skills you've enabled in your Claude settings are also available in the Claude for Excel and Claude for PowerPoint add-ins. Claude applies relevant Skills automatically while you work—you don't need to invoke them separately.

<!-- para:0012 -->
**How triggering works in the add-ins:**

<!-- para:0013 -->
Claude adapts skills to the surface it’s in. A research skill may produce a Word document in Cowork, but detailed data breakdowns in Excel.

<!-- para:0014 -->
Some skills may work better on one surface than others. If you let Claude work across apps, Claude can orchestrate another app to apply the skill.

<!-- para:0015 -->
If you build a Skill with a specific Excel or PowerPoint template, Claude for Excel and Powerpoint can load that template exactly into the current open file.

<!-- para:0016 -->
Each add-in also has an **Instructions** field for persistent preferences — see **[Use Claude for Excel](https://support.claude.com/en/articles/12650343-use-claude-in-excel)** and **[Use Claude for PowerPoint](https://support.claude.com/en/articles/13521390-use-claude-in-powerpoint)** for details.

<!-- para:0017 -->
The Skills Directory features professionally-built skills from leading platforms like Notion, Figma, and Atlassian. These partner skills are designed to work with their respective MCP connectors, enabling powerful workflows that combine Claude's capabilities with your existing tools.

<!-- para:0018 -->
**To install a skill from the Skills Directory:**

<!-- para:0019 -->
All your skills are listed in **[Customize > Skills](https://claude.ai/customize/skills)**. You can see:

<!-- para:0020 -->
Toggle any skill on or off using the switch next to it. Disabled skills won't be available to Claude.

<!-- para:0021 -->
To remove a custom skill you've uploaded:

<!-- para:0022 -->
If you change your mind, you can add the skill again by re-uploading the file.

<!-- para:0023 -->
For Team and Enterprise plans, organization Owners can provision skills for all users through organization settings. Individual peer-to-peer skill sharing is not currently available — users cannot directly share skills with specific colleagues. For personal skills, each individual must upload them to their own account. Skills in Claude and the API operate in Claude's secure sandboxed environment with no data persistence between sessions.

<!-- para:0024 -->
Note that skills may include, or instruct Claude to install, third-party packages and software for Claude to use when completing a task. See **[here](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#h_0ee9d698a1)** for details on Claude’s container environment and **[here](https://docs.claude.com/en/docs/agents-and-tools/tool-use/code-execution-tool#containers)** for API’s container environment.

<!-- para:0025 -->
The most significant risks are prompt injection, which allows Claude to be manipulated to execute unintended actions, and data exfiltration, caused by malicious package code or prompt-injected data leaks. We’ve implemented several mitigations to these risks. Refer to **[our security considerations for code execution](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#h_0ee9d698a1)** for more information.

<!-- para:0026 -->
When installing a skill from a less-trusted source, thoroughly audit it before use. Start by reading the contents of the files bundled in the skill to understand what it does, paying particular attention to code dependencies and bundled resources like images or scripts. Similarly, pay attention to instructions or code within the skill that instruct Claude to connect to potentially untrusted external network sources.

<!-- para:0027 -->
Ensure code execution is enabled in **[Settings > Capabilities](https://claude.ai/settings/capabilities)**. Then navigate to **[Customize > Skills](https://claude.ai/customize/skills)** to access your skills. Skills require the code execution environment to function.

<!-- para:0028 -->
Common reasons for upload failures:

<!-- para:0029 -->
If Skills appear greyed out, code execution may be disabled at the organization level (for Team and Enterprise plans) or individually. Check with your organization's Owner or make sure to enable code execution in **[Settings > Capabilities](https://claude.ai/settings/capabilities)**.

<!-- para:0030 -->
Begin with Anthropic's pre-built Skills to understand how they work before creating custom skills.

<!-- para:0031 -->
Write clear descriptions when writing custom skills. A specific description tells Claude when to invoke your skill.

<!-- para:0032 -->
After uploading a custom skill, test it with a few different prompts to ensure it works as expected.

<!-- para:0033 -->
Create separate skills for different purposes rather than a single skill that’s meant to do everything.

<!-- para:0034 -->
Refer to **[Teach Claude your way of working using Skills](https://support.claude.com/en/articles/12580051-teach-claude-your-way-of-working-using-skills)** for more information and video demonstrations.
