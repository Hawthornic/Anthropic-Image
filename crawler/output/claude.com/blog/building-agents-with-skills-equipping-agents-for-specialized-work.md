---
source_url: https://claude.com/blog/building-agents-with-skills-equipping-agents-for-specialized-work
title: "Building agents with Skills: Equipping agents for specialized work"
section: blog
date: 2026-01-22
---

<!-- para:0001 -->
A lot has changed in the past year. MCP became the standard for agent connectivity with rapid adoption from industry leaders and the developer community. [Claude Code launched](https://www.anthropic.com/news/claude-3-7-sonnet) as a general-purpose coding agent. And we launched the [Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk), which now provides a production-ready agent out of the box.

<!-- para:0002 -->
But as we've built and deployed these agents, we keep running into the same gap: agents have intelligence and capabilities, but not always the expertise to effectively tackle real work. This led us to [create Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills). Skills are organized collections of files that package domain expertise - workflows, best practices, scripts - in a format agents can access and apply. They turn a capable generalist into a knowledgeable specialist.

<!-- para:0003 -->
In this post, we'll explain why we stopped building specialized agents and started building skills instead, and how this shift is changing how we think about extending agent capabilities.

<!-- para:0004 -->
## **The new paradigm: code is all you need**

<!-- para:0005 -->
We used to think agents in different domains would look very different. A coding agent, a research agent, one for finance, one for marketing—each seemed to need its own tools and scaffolding. The industry initially embraced this model of domain-specific agents. But as models improved in intelligence and agent capabilities progressed, we converged on a different approach.

<!-- para:0006 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6972a852db1883d8c862151f_building-agents-with-skills-fig1-v3%402x.png)

<!-- para:0007 -->
We came to see code less as just a use case and more as an interface for agents to do almost any digital work. Claude Code is a coding agent, but also a general-purpose agent that happens to work through code.

<!-- para:0008 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6972a8b8cb336e177c409445_building-agents-with-skills-fig2-v4%402x.png)

<!-- para:0009 -->
Consider working with Claude Code to generate a financial report. It can call APIs for research, store data in the filesystem, analyze it with Python, and synthesize insights. All of that happens through code. The scaffolding becomes as simple as bash and a filesystem.

<!-- para:0010 -->
But general capability isn't the same as expertise. When we started using Claude Code for real work, a gap emerged.

<!-- para:0011 -->
## **The missing piece: domain expertise**

<!-- para:0012 -->
Who would you want filing your taxes: a math genius figuring it out from first principles, or an experienced tax professional who's filed thousands of returns? Most people would choose the tax professional. Not because they're smarter, but because they have the right expertise.

<!-- para:0013 -->
Agents today are like that math genius: brilliant at reasoning through novel situations, but often lacking the accumulated expertise of a seasoned professional. They can do amazing things with proper guidance. However, they're often missing important context, can't easily absorb your organization's expertise, and don't automatically learn from repeated tasks.

<!-- para:0014 -->
Skills bridge this gap by packaging domain expertise in a format that agents can progressively access and apply.

<!-- para:0015 -->
## **What are Agent Skills?**

<!-- para:0016 -->
Skills package domain expertise and procedural knowledge for agents.

<!-- para:0017 -->
```
anthropic_brand/
├── SKILL.md
├── docs.md
├── slide-decks.md
└── apply_template.py
```

<!-- para:0018 -->
The simplicity of skills is deliberate. Files are a universal primitive that works with what you already have. You can version them with Git, store them in Google Drive, and share them with your team. This simplicity also means skill creation isn't limited to engineers. Product managers, analysts, and domain experts are already building skills to codify their workflows.

<!-- para:0019 -->
## **Progressive disclosure**

<!-- para:0020 -->
Skills can contain extensive information. To protect the context window and make skills composable, they use progressive disclosure: at runtime, only the metadata (name and description from the YAML frontmatter) is shown to the model.

<!-- para:0021 -->
```
---
name: Anthropic Brand Style Guidelines
description: Anthropic's official brand colors and typography…
---
```

<!-- para:0022 -->
If Claude determines a skill is needed, it reads the full SKILL.md file. For additional detail, skills can include a references/ directory with supporting documentation loaded only on demand.

<!-- para:0023 -->
This three-tier approach means you can equip an agent with hundreds of skills without overwhelming its context window—metadata uses ~50 tokens, full SKILL.md files ~500 tokens, and reference files 2,000+ tokens and only when specifically needed.

<!-- para:0024 -->
## **Skills can include scripts as tools**

<!-- para:0025 -->
Traditional tools have problems: some have poorly written instructions, the model can't always modify or extend them, and they often bloat the context window. Code, on the other hand, is self-documenting, modifiable, and doesn't need to be in context at all times.

<!-- para:0026 -->
Here's a real example: we kept seeing Claude write the same script to apply Anthropic styling to slides. So we asked Claude to save it as a tool for itself:

<!-- para:0027 -->
```
# anthropic/brand_styling/apply_template.py
import sys
from pptx import Presentation

if len(sys.argv) != 2:
    print("USAGE: apply_template.py <pptx>")
    sys.exit(1)

prs = Presentation(sys.argv[1])
for slide in prs.slides:
    ...
```

<!-- para:0028 -->
The corresponding documentation in slide-decks.md simply references this script:

<!-- para:0029 -->
```
## Anthropic Slide Decks
- Intro/outro slides
  - background color: `#141413`
  - foreground color: oat
- Section slides:
  - background color: `#da7857`
  - foreground color: `#141413`

Use the `./apply_template.py` script to update a pptx file in-place.
```

<!-- para:0030 -->
## **The skills ecosystem**

<!-- para:0031 -->
The skills ecosystem has emerged quickly, and so far we've seen three major types of skills being built:

<!-- para:0032 -->
### **Foundational skills**

<!-- para:0033 -->
These provide core capabilities everyone needs: working with documents, spreadsheets, presentations, etc. They encode best practices for document generation and manipulation. You can see what this looks like in practice by exploring the [foundational skills in our public repository](https://github.com/anthropics/skills/tree/main/skills/public).

<!-- para:0034 -->
### **Partner skills**

<!-- para:0035 -->
As skills standardize how agents interact with specialized capabilities, companies are building skills to make their services agent-accessible. [K-Dense](https://github.com/K-Dense-AI/claude-scientific-skills), [Browserbase](https://github.com/browserbase/agent-browse), [Notion](https://www.notion.so/notiondevs/Notion-Skills-for-Claude-28da4445d27180c7af1df7d8615723d0), and [many others](https://claude.com/blog/organization-skills-and-directory) are creating skills that integrate their services directly, extending Claude's capabilities in specific domains while maintaining the simplicity of the skills format.

<!-- para:0036 -->
### **Enterprise skills**

<!-- para:0037 -->
Organizations build proprietary skills encoding their internal processes and domain expertise. Skills help capture the specific workflows, compliance requirements, and institutional knowledge that make an agent useful for enterprise work.

<!-- para:0038 -->
## **Trends we see**

<!-- para:0039 -->
As skills adoption grows, several patterns are emerging that point to where this paradigm may be heading. These trends shape how we think about skill design and the tooling we're building to support skill developers.

<!-- para:0040 -->
### **Increasing complexity**

<!-- para:0041 -->
Early skills were simple documentation references. Now we're seeing sophisticated multi-step workflows that coordinate data retrieval, complex calculations, and formatted output across multiple tools.

<!-- para:0042 -->
- **Simple**: "Status report writer" (~100 lines) - Templates and formatting
- **Intermediate**: "Financial model builder" (~800 lines) - Data retrieval, Excel modeling with Python
- **Complex**: "RNA sequencing pipeline" (2,500+ lines) - Coordinates HISAT2, String Tie, DESeq2 analysis

<!-- para:0043 -->
### **Skills and MCP**

<!-- para:0044 -->
[Skills and MCP servers work together](https://claude.com/blog/extending-claude-capabilities-with-skills-mcp-servers) naturally. A competitive analysis skill might coordinate web search, internal databases via MCP, Slack message history, and Notion pages to synthesize a comprehensive report.

<!-- para:0045 -->
### **Non-developer adoption**

<!-- para:0046 -->
Skill creation is expanding beyond engineers to product managers, analysts, and domain experts across disciplines. They can create and test their first skill in under 30 minutes using the skill-creator tool, which guides them through the process interactively. We're working to make skill creation even more accessible, with improved tooling and templates that let anyone capture and share expertise.

<!-- para:0047 -->
## **The complete architecture**

<!-- para:0048 -->
Putting it all together, the emerging agent architecture looks like a combination of:

<!-- para:0049 -->
1. **Agent loop**: The core reasoning system that decides what to do next
2. **Agent runtime**: Execution environment (code, filesystem)
3. **MCP servers**: Connections to external tools and data sources
4. **Skills library**: Domain expertise and procedural knowledge

<!-- para:0050 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6972ab24ac6df74ad6704f37_building-agents-with-skills-fig3-v2%402x.png)

<!-- para:0051 -->
Each layer has a clear purpose: the loop reasons, the runtime executes, MCP connects, and skills guide. This separation makes the system comprehensible and allows each piece to evolve independently.

<!-- para:0052 -->
Consider what happens when you add a single skill to this architecture. The [frontend design skill](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design) transforms Claude's frontend capabilities instantly. It provides specialized guidance on typography, color theory, and animation, activating only when building web interfaces. Progressive disclosure means it loads only when relevant. Adding new capabilities is straightforward.

<!-- para:0053 -->
## **Deploying skills to new verticals**

<!-- para:0054 -->
This emerging pattern of general agents equipped with MCP servers and skills is already helping us deploy Claude to new verticals.

<!-- para:0055 -->
### **Financial Services**

<!-- para:0056 -->
Just after launching skills, we enhanced [Claude for the financial services](https://www.anthropic.com/news/claude-for-financial-services) sector with skills that make Claude more useful for finance professionals:

<!-- para:0057 -->
- **DCF model builder**: Constructs discounted cash flow models with proper WACC calculations and sensitivity analysis
- **Comparable company analysis**: Generates comps tables with relevant multiples and benchmarking
- **Earnings analysis**: Processes quarterly results and creates investment update reports
- **Initiation coverage**: Builds comprehensive research reports with financial models
- **Due diligence**: Structures M&A analysis with standardized frameworks
- **Pitch materials**: Creates client presentations following industry standards

<!-- para:0058 -->
### **Healthcare & Life Sciences**

<!-- para:0059 -->
We've also enhanced our [healthcare and life sciences offerings](https://www.anthropic.com/news/healthcare-life-sciences)with skills that make Claude more useful for researchers, clinicians, and healthcare developers:

<!-- para:0060 -->
- **Bioinformatics bundles**: Skills for scVI-tools and Nextflow deployments, essential for managing genomic pipelines and single-cell RNA sequencing
- **Clinical trial protocol generation**: Accelerates protocol development for clinical research
- **Scientific problem selection**: Helps researchers identify and frame impactful research questions
- **FHIR development**: Helps developers write more accurate code for health data interoperability, connecting healthcare systems faster with fewer errors
- **Prior authorization review**: Cuts administrative burden and accelerates patient access to needed care by cross-referencing coverage requirements, clinical guidelines, and patient records

<!-- para:0061 -->
## **Standardizing Agent Skills**

<!-- para:0062 -->
To enable this vision, we're publishing [Agent Skills](https://agentskills.io/) as an open standard. Like MCP, we believe skills should be portable across tools and platforms. The same skill should work whether you're using Claude or other AI platforms. We've been collaborating with members of the ecosystem on the standard, and we're excited to see early adoption.

<!-- para:0063 -->
When someone starts using an AI agent for the first time, it should already know what you and your team care about because skills capture and transfer that expertise. As this ecosystem grows, a skill built by someone else in the community can make your agent more useful, reliable, and capable - regardless of which AI platform they're using.

<!-- para:0064 -->
## **Getting started**

<!-- para:0065 -->
We're converging on an architecture for general agents, and skills provide a paradigm for shipping and sharing new capabilities. The real value emerges from the collective knowledge base we build together: capturing expertise, transferring it across teams, and making every agent more capable than the last.

<!-- para:0066 -->
**Resources: **

<!-- para:0067 -->
- [Don’t Build Agents, Build Skills Instead](https://youtu.be/CEv Is9y1uog?si=yhYQH-ZTX0Df Ndtm) (You Tube Video)
- [Skills documentation](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Git Hub repository](https://github.com/anthropics/skills)
- [Skills cookbook](https://platform.claude.com/cookbook/skills-notebooks-01-skills-introduction)
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [Skills API quickstart](https://platform.claude.com/docs/en/build-with-claude/skills-guide)
- [Skills best practices documentation](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)

<!-- para:0068 -->
### **Acknowledgments: **

<!-- para:0069 -->
Barry Zhang, Mahesh Murag, Keith Lazuka, Ryan Whitehead
