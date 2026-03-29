---
source_url: https://claude.com/customers/stripe
title: "Stripe deploys Claude Code to 1,370 engineers with zero-configuration enterprise rollout"
section: customers
---

<!-- para:0001 -->
# Stripe deploys Claude Code to 1,370 engineers with zero-configuration enterprise rollout

<!-- para:0002 -->
Anthropic's agentic coding tool. Claude Code understands your codebase, edits files, runs commands, and helps you ship faster.

<!-- para:0003 -->
New research from 500+ technical leaders reveals how enterprises are deploying AI agents—and why 80% already report measurable ROI.

<!-- para:0004 -->
[**Stripe**](https://stripe.com/) builds financial infrastructure for the internet, powering payments for millions of businesses worldwide. The company's developer infrastructure team ensures that Stripe engineers have the most productive experience of their careers through tooling and platform capabilities.

<!-- para:0005 -->
## With Claude, Stripe:

<!-- para:0006 -->
- Deployed Claude Code to 1,370 engineers with a zero-configuration setup that works immediately on every developer's machine
- Migrated 10,000 lines of Scala to Java in four days, a project estimated at ten engineering weeks without AI assistance
- Collaborated with Anthropic to produce a signed enterprise binary, solving security concerns that had initially blocked deployment
- Created an education program that reframed AI assistants as capable new engineers who need context, not replacements who work autonomously
- Built a foundation for AI-powered agents focused on maintaining Stripe's 5.5 nines of reliability

<!-- para:0007 -->
# The challenge

<!-- para:0008 -->
Stripe needed a CLI-native coding assistant that met enterprise security requirements. For Stripe's developer infrastructure team, led by Scott Mac Vicar, the challenge wasn't choosing a single winner; it was enabling engineers to find the tools that fit their individual workflows while maintaining enterprise-grade security.

<!-- para:0009 -->
"Things are rapidly evolving here," said Mac Vicar, who runs Stripe's developer infrastructure group. "We're really just going broad and haven't started doing any consolidation." The team enabled six different coding assistants, recognizing that different engineering personas gravitate toward different interaction models. Infrastructure engineers prefer command-line tools. Product engineers want in-editor experiences. Forcing everyone into one tool would mean leaving productivity on the table.

<!-- para:0010 -->
But breadth created its own problems. Enterprise security requirements meant Stripe couldn't simply let engineers install whatever they wanted. Supply chain attacks are a real concern, and random Java Script packages on corporate laptops posed unacceptable risk.

<!-- para:0011 -->
# Claude Code enables zero-friction adoption

<!-- para:0012 -->
The path to deployment required collaboration. Mac Vicar worked directly with Anthropic to produce an enterprise binary version of Claude Code, a process that took two to three months of testing and iteration. The result was a signed binary that could be deployed safely across the organization, bypassing the npm dependency chain that had posed security concerns.

<!-- para:0013 -->
# Treating AI assistants like capable new engineers

<!-- para:0014 -->
"We came up with our internal distribution mechanism," Mac Vicar explained. "It's pre-installed on everyone's laptop. It's pre-installed on everyone's development box. It's pre-configured with the rules, the tokens, the authentication. It just works out of the box so no one has to go make an account or read all the configurations."

<!-- para:0015 -->
This philosophy extends to all of Stripe's developer tooling: engineers shouldn't spend time reading manuals or figuring out ideal configurations. The infrastructure team handles that complexity so developers can focus on building. Claude Code found its niche among developers who wanted a capable assistant that fit into their existing command-line workflows without requiring them to switch editors.

<!-- para:0016 -->
The biggest challenge hasn't been technical—it's been educational. Engineers initially approached AI assistants with unrealistic expectations, treating them as replacements rather than collaborators.

<!-- para:0017 -->
"People think it is a replacement for themselves and then don't quite give it the right amount of context," Mac Vicar said. The team developed a mental model that resonated: think of AI as a “new, capable engineer that knows all the programming languages but lacks business context, doesn't understand your codebase, and doesn't know the Stripe way of doing things."

<!-- para:0018 -->
This framing changed how engineers prompted their AI assistants. Instead of expecting magic, they learned to provide context: point to documentation, show example code, explain architectural patterns. The team reinforced this through engineering all-hands presentations, dedicated training sessions, and strategically placed "hint buttons" throughout internal tools. Local examples proved more effective than centralized training. Teams that discovered effective prompts for their specific codebases shared those patterns within their groups, creating organic knowledge transfer. For Mac Vicar's team, this education work is as important as the tooling itself. This approach to onboarding, treating AI as a collaborator that needs context rather than a replacement, reflects how Stripe and Anthropic see the future of AI-assisted development.

<!-- para:0019 -->
# The results: Building towards AI agents for reliability

<!-- para:0020 -->
Engineers report higher satisfaction with their tooling. While the team hasn't isolated metrics attributable to any single AI assistant, the signals are positive across the board. One concrete example: a team used Claude models to migrate 10,000 lines of Scala to Java in four days, a project estimated at ten engineering weeks by hand. The migration enabled a newer version of the JDK, enabling performance improvements that had been stuck behind the manual effort required. "Sentiment's up,” Mac Vicar said. "People like it. The vibes are good."

<!-- para:0021 -->
The real ambition lies ahead. Stripe maintains 5.5 nines of reliability, and Mac Vicar sees AI agents as the path to even higher standards. "If we rely on a human doing something, those are measured in minutes. If we have an agent doing it, we can measure that in seconds."

<!-- para:0022 -->
The team is exploring Claude's agent SDK to build specialized tools focused on incident detection and resolution. In a business where downtime directly impacts customers' revenue, shaving minutes off response times translates to real value.

<!-- para:0023 -->
Mac Vicar frames the opportunity in four quadrants: humans only, humans with agents, agents with humans, and agents only. "We're pushing things into humans with agents and agents with humans," he said. "The desire is to get to that top quadrant of agents only."

<!-- para:0024 -->
For now, Stripe continues learning what works across its suite of AI tools. The investment in broad enablement, secure deployment, and developer education has created a foundation for whatever comes next in this fast-moving space.

<!-- para:0025 -->
‍
