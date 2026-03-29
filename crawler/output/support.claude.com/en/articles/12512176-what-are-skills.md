---
source_url: https://support.claude.com/en/articles/12512176-what-are-skills
title: "What are Skills?"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Skills are folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized tasks. Skills teach Claude how to complete specific tasks in a repeatable way, whether that's creating documents with your company's brand guidelines, analyzing data using your organization's specific workflows, or automating personal tasks.

<!-- para:0002 -->
Skills improve Claude’s consistency, speed, and performance on many tasks. Skills work through progressive disclosure—Claude determines which Skills are relevant and loads the information it needs to complete that task, helping to prevent context window overload.

<!-- para:0003 -->
When you ask Claude to complete a task, it reviews available Skills, loads relevant ones, and applies their instructions.

<!-- para:0004 -->
These are Skills created and maintained by Anthropic, such as enhanced document creation for Excel, Word, PowerPoint, and PDF files. Anthropic Skills are available to all users and Claude invokes them automatically when relevant.

<!-- para:0005 -->
These are Skills you or your organization create for specialized workflows and domain-specific tasks. Here are some potential workflows you could enable using custom Skills:

<!-- para:0006 -->
For Team and Enterprise plans, organization Owners can provision skills for all users. Skills provisioned in this way appear automatically in every team member's Skills list and can be set as enabled or disabled by default. This allows organizations to:

<!-- para:0007 -->
Learn more about provisioning skills in **[Provision and manage Skills for your organization](https://support.claude.com/en/articles/13119606-managing-skills-as-an-admin)**.

<!-- para:0008 -->
The Skills Directory features professionally-built skills from partners like Notion, Figma, Atlassian, and others. These skills are designed to work seamlessly with their respective MCP connectors, enabling powerful integrated workflows.

<!-- para:0009 -->
**Improvement in Claude’s performance of specific tasks**: Skills provide specialized capabilities for tasks like document creation, data analysis, and domain-specific work that requires supplementing Claude's general knowledge.**

<!-- para:0010 -->
**Organizational knowledge capture**: Package your company's workflows, best practices, and institutional knowledge for Claude to use consistently across your team.**

<!-- para:0011 -->
**Easy customization**: Anyone can create Skills by writing instructions in Markdown—no coding required for simple Skills, though you can attach executable scripts to custom Skills for more advanced functionality.**

<!-- para:0012 -->
**Centralized management for organizations:** Team and Enterprise plan Owners can provision skills organization-wide, ensuring consistent workflows across teams without requiring individual setup from each user.**

<!-- para:0013 -->
The Agent Skills specification is published as an open standard at **[agentskills.io](https://agentskills.io/)**. This means skills you create aren't locked to Claude—the same skill format works across AI platforms and tools that adopt the standard. A reference Python SDK is also available for developers implementing skills support in their own platforms.

<!-- para:0014 -->
**[Projects](https://support.claude.com/en/articles/9517075-what-are-projects)** provide static background knowledge that's always loaded when you start chats within them. Skills provide specialized procedures that activate dynamically when needed and work everywhere across Claude.**

<!-- para:0015 -->
MCP connects Claude to external services and data sources. Skills provide procedural knowledge—instructions for how to complete specific tasks or workflows. You can use both together: MCP connections give Claude access to tools, while Skills teach Claude how to use those tools effectively.

<!-- para:0016 -->
**[Custom instructions](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)** apply broadly to all your conversations. Skills are task-specific and only load when relevant, making them better for specialized workflows.**

<!-- para:0017 -->
For more detailed information about how Skills work, see **[Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)** in our Claude Docs.
