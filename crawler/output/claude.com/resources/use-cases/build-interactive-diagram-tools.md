---
source_url: https://claude.com/resources/use-cases/build-interactive-diagram-tools
title: "Build interactive diagram tools"
section: resources
---

<!-- para:0001 -->
# Build interactive diagram tools

<!-- para:0002 -->
- Author Anthropic
- Category: Personal
- Model Opus 4.5
- Features Extended Thinking
- Share [Copy link](https://claude.com/resources/use-cases/build-interactive-diagram-tools#)https://claude.com/resources/use-case/build-interactive-diagram-tools

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude can build interactive tools that let you engage with material directly, whether that's anatomy, chemistry diagrams, or historical timelines. The precision of your prompt shapes the sophistication of the result.

<!-- para:0005 -->
Describe the experience you want: what you're learning, how you want to interact with it, where the data comes from, and your aesthetic standards. Think of your prompt as a design brief.

<!-- para:0006 -->
Build an**interactive anatomy explorer**using @ebi-gene-expression-group/anatomogram from npm. Use homo_sapiens.male.svg and homo_sapiens.brain.svg. Don't generate diagrams yourself—these SVGs contain accurate illustrations with UBERON ontology IDs already embedded. Embed the SVGs directly into the HTML—no fetch requests needed.

<!-- para:0007 -->
**Critical: ** The SVGs style all elements with fill:none;stroke:none by default, making them invisible. After loading, apply default fills and strokes before any other styling. Also set cleanup Ids: false when optimizing (the UBERON IDs are how you target elements) and remove the visibility:hidden attribute in Java Script.**

<!-- para:0008 -->
**Design requirements: ** Restrained and sophisticated. No glows, no emojis, no neon. Warm colors over cold. Serif headings, sans-serif body, monospace for data. Think premium medical reference, not generic AI output.**

<!-- para:0009 -->
Add tabbed information panels, physical-feeling sound feedback, and content rich enough to actually learn from. Build to flagship quality from the start—I'll iterate until this is exceptional.

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
For creating interactive learning tools, after describing both what you want to learn and how you want to interact with it, make sure you have the correct capabilities and features enabled.

<!-- para:0012 -->
## Required context

<!-- para:0013 -->
Make sure file creation is enabled in settings for Claude to create artifacts.

<!-- para:0014 -->
## Optional context

<!-- para:0015 -->
For complex multi-component apps, turn on [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) so Claude can plan architecture before building.

<!-- para:0016 -->
## What Claude creates

<!-- para:0017 -->
Claude builds a fully functional React application with the visual design, interaction patterns, and educational content you specified, ready to use immediately in the artifact viewer.

<!-- para:0018 -->
Done! I've built your anatomy explorer with the medical-grade SVGs, proper UBERON targeting, and the restrained design system you described.

<!-- para:0019 -->
What's included:

<!-- para:0020 -->
**1. Dual-view explorer**

<!-- para:0021 -->
Toggle between full-body and brain views. The full-body view organizes systems by color (skeletal, muscular, nervous, circulatory, respiratory, digestive) with proper anatomical positioning.

<!-- para:0022 -->
**2. Interactive elements**

<!-- para:0023 -->
Hover any structure to see its name, UBERON ID, and primary function. Click for deeper information: clinical relevance, related structures, and quick facts. I've populated approximately 40 structures with learning-grade content.

<!-- para:0024 -->
**3. System filters**

<!-- para:0025 -->
Tabs let you isolate individual body systems. When you select "Skeletal," non-skeletal structures fade while relevant bones gain emphasis and become interactive.

<!-- para:0026 -->
**4. Sound design**

<!-- para:0027 -->
Subtle audio feedback on hover and selection. Soft clicks and tones that feel physical, not digital. Muted by default; toggle in the corner.

<!-- para:0028 -->
**5. Design details**

<!-- para:0029 -->
Warm beige background, terracotta and slate accents, no harsh colors. Playfair Display for headings, Inter for body text, IBM Plex Mono for data. Generous whitespace, no visual clutter.

<!-- para:0030 -->
## Follow up prompts

<!-- para:0031 -->
### Add self-testing

<!-- para:0032 -->
Layer in more functionality, like an active learning mode that reinforces retention.

<!-- para:0033 -->
Add a quiz mode where I'm shown a description or function and have to identify the correct structure. Track my accuracy and show which systems I struggle with.

<!-- para:0034 -->
### Add advanced features

<!-- para:0035 -->
Ask Claude to expand anatomical detail where you want more granularity.

<!-- para:0036 -->
Add more body systems to the diagram. Also make the brain view more detailed.

<!-- para:0037 -->
### Generate companion materials from the same session

<!-- para:0038 -->
Continue learning from different mediums. The app and study materials can share a source of truth.

<!-- para:0039 -->
From the anatomical data in this explorer, generate a printable PDF study guide with the same structures organized by system, plus a set of Anki-compatible flashcards I can import. Keep the terminology and clinical correlations consistent with what's in the app.

<!-- para:0040 -->
## Tricks, tips, and troubleshooting

<!-- para:0041 -->
### Paste errors directly into chat

<!-- para:0042 -->
When something breaks, share the error message or describe the issue. Claude can trace the logic and troubleshoot to identify the issue so you don't need to debug yourself.

<!-- para:0043 -->
### Long sessions compound rather than drift

<!-- para:0044 -->
Opus 4.5 maintains your design decisions and technical context across extended conversations. Your tenth iteration still remembers your original aesthetic requirements, technical constraints, and every refinement in between. You can plan for sustained building sessions rather than trying to specify everything upfront.

<!-- para:0045 -->
### **Include known troubleshooting upfront**

<!-- para:0046 -->
**‍**If you've hit quirks before—from previous Claude sessions or your own debugging—mention them in the prompt. This example notes that the anatomogram SVGs render invisible by default and that UBERON IDs get stripped during optimization. Without those notes, Claude writes working code that produces a blank screen, then spends iterations diagnosing.**

<!-- para:0047 -->
### Add sources to make it yours

<!-- para:0048 -->
Opus 4.5's context window handles substantial material. If you have a textbook chapter, lecture notes, or syllabus you want the app to cover, paste the whole thing rather than summarizing. Claude extracts structure and prioritizes content more effectively from complete sources than from your condensed version.

<!-- para:0049 -->
## Ready to try for yourself?
