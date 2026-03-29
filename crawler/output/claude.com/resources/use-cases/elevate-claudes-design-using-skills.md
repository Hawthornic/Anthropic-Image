---
source_url: https://claude.com/resources/use-cases/elevate-claudes-design-using-skills
title: "Elevate Claude's design using skills"
section: resources
---

<!-- para:0001 -->
# Elevate Claude's design using skills

<!-- para:0002 -->
- Author Anthropic
- Category: Personal
- Model Sonnet 4.5
- Features Skills
- Share [Copy link](https://claude.com/resources/use-cases/elevate-claudes-design-using-skills#)https://claude.com/resources/use-case/elevate-claudes-design-using-skills

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude is capable of generating great visual designs when given clear instructions and examples. However, routinely achieving high-quality results often requires detailed prompting and iterative refinements, which can be time-consuming and context-heavy. With Skills, you can package that process once, then activate high quality design thinking quickly in any conversation.

<!-- para:0005 -->
Tell Claude you want to create the ultimate design skill that will elevate any visual work to higher standards. Share what you want included in the skill, like certain frameworks, standards and processes Claude should adhere to when designing outputs.

<!-- para:0006 -->
I create a lot of visual outputs with Claude—presentations, dashboards, reports, HTML pages. They're functional but always feel generic, like first drafts rather than polished work. I want them to look like they've been through multiple rounds of professional design refinement.

<!-- para:0007 -->
I'd like to create a skill that automatically applies design thinking to any visual output I request. Something that makes Claude interrogate design choices, reference best practices, and push for excellence before delivering anything.

<!-- para:0008 -->
The skill should activate whenever I ask for presentations, spreadsheets, HTML artifacts, PDFs, or anything visual. Claude should:

<!-- para:0009 -->
- Start with a functional version, then elevate it
- Question every design choice (typography, color, layout, spacing)
- Draw from professional design references (Stripe, Linear, Apple, Bauhaus, Swiss design)
- Apply specific visual techniques rather than generic defaults
- Balance bold choices with tasteful restraint
- Ensure the final output looks hand-crafted, not template-based

<!-- para:0010 -->
I want the skill to have reference files that Claude consults:

<!-- para:0011 -->
- A design interrogation checklist (questions to ask before delivering)
- A technique catalog (specific visual moves organized by what they achieve)
- A reference library (design exemplars and principles to draw from)
- An elevation protocol (systematic process for refinement)
- A design philosophy (principles for balancing expertise with restraint)

<!-- para:0012 -->
The goal is that when I ask "create a sales dashboard" or "make a presentation deck," Claude automatically thinks like a design director who wouldn't accept generic output. The user sees only the polished result unless they specifically ask to see the design thinking process. Help me create this skill with all the necessary reference files.

<!-- para:0013 -->
## Give Claude context

<!-- para:0014 -->
## Required context

<!-- para:0015 -->
This workflow leverages Claude's [Skills](https://www.anthropic.com/news/skills) system. In [Settings > Capabilities > Skills](https://claude.ai/settings/capabilities), make sure code execution and file creation is turned on so Claude has the ability to create and use Skills.

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
Turn on [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) for deeper strategic thinking about design frameworks and quality standards.

<!-- para:0018 -->
## What Claude creates

<!-- para:0019 -->
Claude produces a complete skill structure with a main instruction file and supporting references. The skill is immediately usable once added to your Claude Skills library. Once you refer to ‘design excellence’ in a chat, Claude will automatically apply the skill’s visual thinking to whatever you're creating.

<!-- para:0020 -->
I've created your design elevation skill. This includes a main SKILL.md file that defines when and how the skill activates, plus five reference files to consult.

<!-- para:0021 -->
###### ***View your design-elevation/SKILL.md***

<!-- para:0022 -->
### **Reference Files: **

<!-- para:0023 -->
**View DESIGN_INTERROGATION.md**Five levels of questioning Claude runs before delivering any design: first principles (what's this for?), element-by-element analysis (typography, color, layout), reference checking (what could this learn from?), uniqueness assessment, and removal testing.**

<!-- para:0024 -->
**View TECHNIQUE_CATALOG.md**A comprehensive vocabulary of 400+ visual techniques organized by what they achieve—typography as form, color phenomena, depth illusion, texture quality, motion, spatial composition. Claude selects 1-2 techniques to apply strongly rather than many weakly.**

<!-- para:0025 -->
**View REFERENCE_LIBRARY.md**Curated design exemplars from modern companies (Stripe, Linear, Airbnb), historical movements (Bauhaus, Swiss Design), natural patterns (Fibonacci, Voronoi), and proven typography combinations. Claude consults this to inform design direction.**

<!-- para:0026 -->
**View ELEVATION_PROTOCOL.md**An 8-phase systematic process: foundation assessment, initial interrogation, technique selection, reference checking, disciplined application, restraint verification, final polish, and uniqueness confirmation.**

<!-- para:0027 -->
**View DESIGN_PHILOSOPHY.md**Core principles for balancing impressive expertise with restraint—when to be bold versus subtle, how expertise shows in details, why unique doesn't mean busy, and making design feel inevitable.**

<!-- para:0028 -->
###### **How to use this skill: **

<!-- para:0029 -->
1. Add the entire `design-elevation` folder to your skills directory
2. Next time you request any visual output, Claude will automatically consult these files
3. You'll receive elevated outputs without needing to specify design requirements each time

<!-- para:0030 -->
Want me to adjust any of the reference content or add additional techniques to the catalog?

<!-- para:0031 -->
## Follow up prompts

<!-- para:0032 -->
### See the skill in action

<!-- para:0033 -->
Use this skill to evaluate and enhance existing work. Claude can recreate the output by applying the integrated techniques from the skill.

<!-- para:0034 -->
‍

<!-- para:0035 -->
Let's test this skill. Create a quarterly performance dashboard. Use the design elevation process and show me both the initial functional version and the elevated result so I can see the difference.

<!-- para:0036 -->
### Combine with MCP connections

<!-- para:0037 -->
See how your packaged expertise within Skills combines and works alongside your tools once enabled through [connectors](https://claude.com/connectors).

<!-- para:0038 -->
I have Google Drive connected via MCP. How would this design skill work when I ask you to pull an existing presentation from my Drive and improve it? Show me how the skill and the MCP connection work together.

<!-- para:0039 -->
### Expand the technique catalog

<!-- para:0040 -->
Deepen the skill's vocabulary in specific areas. Or, incorporate your quality standards and specific examples into the skill instructions or framework. This helps Claude understand your desired output more clearly.

<!-- para:0041 -->
Add techniques for data visualization specifically—chart styling, dashboard layouts, and ways to make numbers more compelling visually. I also work in fintech. Add industry-leading financial design exemplars to the reference library.

<!-- para:0042 -->
## Tricks, tips, and troubleshooting

<!-- para:0043 -->
### **Evolve the skill through use and refinement**

<!-- para:0044 -->
After applying the skill several times, you'll notice patterns: maybe you consistently want bolder color choices, or tighter information density, or specific typography preferences. Use that feedback to update the skill file itself to embed your evolving standards. Add new quality gates that matter to you. Incorporate screenshots of work you love as reference examples. The skill can become more personalized over time.

<!-- para:0045 -->
### Skills use progressive disclosure to stay efficient

<!-- para:0046 -->
When Claude works on a task, it first scans skill metadata (the description at the top) to see if the skill is relevant. Only if it matches does Claude load the full instructions. Reference files load only when actually needed. This means you can have many skills available without overwhelming Claude's context. Your design skill's 400+ techniques don't load until Claude actually needs to select techniques for a specific weakness.

<!-- para:0047 -->
### **Quality standard questions push beyond defaults into intentional choices**

<!-- para:0048 -->
The skill forces Claude to evaluate against quality standards and benchmarks. The skill also embeds iteration as a process within the skill, rather than several rounds of prompting. This technique is used to make Claude reject generic choices and opt for more creative and unique design decisions.

<!-- para:0049 -->
## Ready to try for yourself?
