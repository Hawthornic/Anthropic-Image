---
source_url: https://claude.com/resources/use-cases/design-a-local-foraging-guide
title: "Design a local foraging guide"
section: resources
---

<!-- para:0001 -->
# Design a local foraging guide

<!-- para:0002 -->
- Author Anthropic
- Category: Personal
- Model Opus 4.5
- Features Extended Thinking
- Share [Copy link](https://claude.com/resources/use-cases/design-a-local-foraging-guide#)https://claude.com/resources/use-case/design-a-local-foraging-guide

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Build a location-aware guide to wild plants in your region. Select your state on an interactive map, browse plants by category, see what's in season now, and export a printable field reference.

<!-- para:0005 -->
Tell Claude the tool's purpose, the interaction flow, and your design direction. Specific functional requirements and aesthetic cues produce more polished results.

<!-- para:0006 -->
I want to build a foraging guide for someone new to wild edibles and unsure where to start.

<!-- para:0007 -->
What it should do:

<!-- para:0008 -->
- Let users click their state on an interactive US map to see regional foraging data (fetch map data from the us-atlas TopoJSON CDN at https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json and render with D3's geo Albers Usa projection)
- Browse edible plants by category and show a 12-month season bar for each species so users see harvest windows at a glance
- Let users tap any plant to expand details, then let users add plants to a personal foraging list and export a printable field guide with their selected species and safety reminders

<!-- para:0009 -->
Design: Quiet and organic. Warm cream, muted sage, soft olive. Think field journal meets editorial magazine—sophisticated but approachable. Smooth transitions, rounded corners, good type hierarchy.

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
Claude builds working artifacts directly in conversation. Enable Artifacts in settings so Claude can create interactive applications you can use immediately.

<!-- para:0012 -->
Turn on Artifacts in your settings. This lets Claude generate apps with full interactivity—maps, state management, data visualization—that render right in the chat. No setup or deployment needed.

<!-- para:0013 -->
## Required context

<!-- para:0014 -->
For complex, multi-component apps, turn on [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) so Claude can plan architecture before building.

<!-- para:0015 -->
## Optional context

<!-- para:0016 -->
## What Claude creates

<!-- para:0017 -->
Claude produces a complete, working foraging guide beginning with an interactive US map where clicking a state reveals regional plant data.

<!-- para:0018 -->
I've built your Wild Edibles Field Guide. Here's what you can do:

<!-- para:0019 -->
**Explore by region** — Click any highlighted state on the map. The guide currently includes data for the Pacific Northwest (Washington, Oregon, Idaho) and Northeast (Maine through Maryland). Other regions show as coming soon.**

<!-- para:0020 -->
**Browse by category** — Once you've selected a state, use the tabs to explore wild greens, berries, mushrooms, roots, and nuts available in your region.**

<!-- para:0021 -->
**Check seasonality** — Each plant card shows a 12-month bar indicating harvest windows. The current month is highlighted so you immediately see what's in season.**

<!-- para:0022 -->
**Dig deeper** — Tap any card to expand details: where to find it, how to prepare it, and any look-alikes to watch for. Plants with dangerous look-alikes show a warning panel.**

<!-- para:0023 -->
**Build your list** — Click the + button to add plants to your foraging list. Your selections appear in a floating panel that tracks your count.**

<!-- para:0024 -->
**Export a field guide** — When you're ready, export generates a printable reference with your selected species, preparation notes, and safety reminders. View your Field Guide**

<!-- para:0025 -->
## Follow up prompts

<!-- para:0026 -->
### Swap in verified information

<!-- para:0027 -->
The guide uses sample data to demonstrate how it works. Once you're happy with how it looks and feels, ask Claude to research real species for your region—actual harvest seasons, verified identification details, up to date safety warnings.

<!-- para:0028 -->
Replace the examples in the artifact with current foraging data for my region. Research verified harvest windows, accurate identification tips, and documented look-alikes. I want to use this in the field.

<!-- para:0029 -->
### Identify something in the field

<!-- para:0030 -->
Upload a photo and work backwards from what's in front of you.

<!-- para:0031 -->
I've attached a photo of something I've found along the trail. Based on the image and my region, what could it be? What should I check in person—gill structure, spore print, smell—to confirm? Tell me what you can and can't determine from the photo alone.

<!-- para:0032 -->
## Tricks, tips, and troubleshooting

<!-- para:0033 -->
### Learn from what Claude builds—or reuse it directly

<!-- para:0034 -->
Ask Claude to walk through the logic so you understand the pattern, not just the output. Or skip the explanation and copy the code directly from the artifact as a starting point for something new. See an example that reuses this pattern to create an [interactive gardening guide](https://claude.ai/public/artifacts/0a2e112a-90e2-4219-8d3e-5bfc12d26e2c).

<!-- para:0035 -->
### Keep refining in the same conversation

<!-- para:0036 -->
Claude holds context across many exchanges, so you can iterate extensively without starting over. Add a feature, test it, notice something off, describe the issue, get a fix. This back-and-forth—sometimes dozens of rounds—is how complex tools come together. You're not bothering Claude by asking for changes; that's how the process works.

<!-- para:0037 -->
### Interactive maps work best with a data source

<!-- para:0038 -->
Claude doesn't have precise geographic boundaries memorized—state outlines, coastlines, county borders. Without a pointer to real cartographic data, it sometimes approximates with placeholder shapes instead of accurate maps. The prompt solves this by specifying a TopoJSON source (a standard format for map data). Claude fetches the real boundaries and renders them correctly. If your map looks off, check whether you've pointed to actual geographic data.

<!-- para:0039 -->
## Ready to try for yourself?
