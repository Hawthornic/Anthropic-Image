---
source_url: https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
title: "How to create custom Skills"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Custom Skills let you enhance Claude with specialized knowledge and workflows specific to your organization or personal work style. This article explains how to create, structure, and test your own Skills.

<!-- para:0002 -->
Skills can be as simple as a few lines of instructions or as complex as multi-file packages with executable code. The best Skills:

<!-- para:0003 -->
Every Skill consists of a directory containing at minimum a Skill.md file, which is the core of the Skill. This file must start with a YAML frontmatter to hold name and description fields, which are required metadata. It can also contain additional metadata, instructions for Claude or reference files, executable scripts, or tools.

<!-- para:0004 -->
**name:** A human-friendly name for your Skill (64 characters maximum)**

<!-- para:0005 -->
**description:** A clear description of what the Skill does and when to use it.**

<!-- para:0006 -->
**dependencies:** Software packages required by your Skill.**

<!-- para:0007 -->
The metadata in the Skill.md file serves as the first level of a progressive disclosure system, providing just enough information for Claude to know when the Skill should be used without having to load all of the content.

<!-- para:0008 -->
The Markdown body is the second level of detail after the metadata, so Claude will access this if needed after reading the metadata. Depending on your task, Claude can access the Skill.md file and use the Skill.

<!-- para:0009 -->
**Brand guidelines skill**

<!-- para:0010 -->
If you have too much information to add to a single Skill.md file (e.g., sections that only apply to specific scenarios), you can add more content by adding files within your Skill directory. For example, add a REFERENCE.md file containing supplemental and reference information to your Skill directory. Referencing it in Skill.md will help Claude decide if it needs to access that resource when executing the Skill.

<!-- para:0011 -->
For more advanced Skills, attach executable code files to Skill.md, allowing Claude to run code. For example, our document skills use the following programming languages and packages:

<!-- para:0012 -->
Once your Skill folder is complete:

<!-- para:0013 -->
**Correct structure:**

<!-- para:0014 -->
my-Skill.zip

<!-- para:0015 -->
└── my-Skill/

<!-- para:0016 -->
├── Skill.md

<!-- para:0017 -->
└── resources/

<!-- para:0018 -->
**Incorrect structure:**

<!-- para:0019 -->
my-Skill.zip

<!-- para:0020 -->
└── (files directly in ZIP root)

<!-- para:0021 -->
1. Review your Skill.md for clarity

<!-- para:0022 -->
2. Check that the description accurately reflects when Claude should use the Skill

<!-- para:0023 -->
3. Verify all referenced files exist in the correct locations

<!-- para:0024 -->
4. Test with example prompts to ensure Claude invokes it appropriately

<!-- para:0025 -->
1. Enable the Skill in **[Customize > Skills](https://claude.ai/customize/skills)**.

<!-- para:0026 -->
2. Try several different prompts that should trigger it

<!-- para:0027 -->
3. Review Claude's thinking to confirm it's loading the Skill

<!-- para:0028 -->
4. Iterate on the description if Claude isn't using it when expected

<!-- para:0029 -->
**Keep it focused:**Create separate Skills for different workflows. Multiple focused Skills compose better than one large Skill.**

<!-- para:0030 -->
**Write clear descriptions:**Claude uses descriptions to decide when to invoke your Skill. Be specific about when it applies.**

<!-- para:0031 -->
**Start simple:**Begin with basic instructions in Markdown before adding complex scripts. You can always expand on the Skill later.**

<!-- para:0032 -->
**Use examples:**Include example inputs and outputs in your Skill.md file to help Claude understand what success looks like.**

<!-- para:0033 -->
**Test incrementally:**Test after each significant change rather than building a complex Skill all at once.**

<!-- para:0034 -->
**Skills can build on each other:** While Skills can't explicitly reference other Skills, Claude can use multiple Skills together automatically. This composability is one of the most powerful parts of the Skills feature.**

<!-- para:0035 -->
**Review the open Agent Skills specification:** Follow the guidelines at **[agentskills.io](http://agentskills.io/)**, so skills you create can work across platforms that adopt the standard.**

<!-- para:0036 -->
For a more in-depth guide to skill creation, refer to **[Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)** in our Claude Docs.

<!-- para:0037 -->
Visit our repository on GitHub for example Skills you can use as templates: **[https://github.com/anthropics/skills/tree/main/skills](https://github.com/anthropics/skills/tree/main/skills)**.
