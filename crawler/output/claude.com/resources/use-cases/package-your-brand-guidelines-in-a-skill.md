---
source_url: https://claude.com/resources/use-cases/package-your-brand-guidelines-in-a-skill
title: "Package your brand guidelines in a skill"
section: resources
---

<!-- para:0001 -->
# Package your brand guidelines in a skill

<!-- para:0002 -->
- Author Anthropic
- Category: Professional
- Model Sonnet 4.5
- Features Skills
- Share [Copy link](https://claude.com/resources/use-cases/package-your-brand-guidelines-in-a-skill#)https://claude.com/resources/use-case/package-your-brand-guidelines-in-a-skill

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
[Skills](https://support.claude.com/en/articles/12512176-what-are-skills) let you package expertise, like your complete brand identity, for Claude to automatically apply across conversations. Upload your color palette, define your typography standards, and specify when to use which elements. Claude can then apply your brand guidelines automatically in any chat, whether it's for a quarterly report, client presentation, or internal spreadsheet. ‍

<!-- para:0005 -->
[Creating this skill](https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation) takes minutes. To start, walk through your brand fonts, colors, and other stylistic choices. Ask Claude to structure the information into a reusable skill that activates whenever you need brand-consistent outputs.

<!-- para:0006 -->
I want to create a skill that applies our company's brand styling to any presentation, document, or spreadsheet I create in Claude. Here's what I need to encode:

<!-- para:0007 -->
###### **Color Palette: **

<!-- para:0008 -->
Dark: #141413 (primary text, dark backgrounds)

<!-- para:0009 -->
Light: #faf9f5 (light backgrounds, text on dark)

<!-- para:0010 -->
Mid Gray: #b0aea5 (secondary elements)

<!-- para:0011 -->
Light Gray: #e8e6dc (subtle backgrounds)

<!-- para:0012 -->
Orange: #d97757 (primary accent for important elements)

<!-- para:0013 -->
Blue: #6a9bcc (secondary accent)

<!-- para:0014 -->
Green: #788c5d (tertiary accent)

<!-- para:0015 -->
###### **Typography: **

<!-- para:0016 -->
Headings (24pt and larger): Poppins font, bold weight

<!-- para:0017 -->
Body text: Lora font, regular weight

<!-- para:0018 -->
Fallbacks: Arial for headings if Poppins unavailable, Georgia for body if Lora unavailable

<!-- para:0019 -->
###### **Application Rules: **

<!-- para:0020 -->
- Apply Poppins to all slide titles and document headings
- Apply Lora to body text and paragraphs
- Use accent colors (orange, blue, green) for shapes, charts, and visual elements
- Cycle through accent colors to maintain visual interest
- Use dark color for primary text on light backgrounds
- Use light color for text on dark backgrounds

<!-- para:0021 -->
Create a complete skill with proper structure that I can use whenever I need brand-consistent presentations. Include the SKILL.md file with clear instructions for when to use it and how it applies the styling.

<!-- para:0022 -->
## Give Claude context

<!-- para:0023 -->
Upload any existing brand guidelines, style sheets, or design documentation to serve as examples that Claude can reference within the skill. Enable file creation and Skills in your [settings](https://claude.ai/settings/capabilities) so Claude can build the complete skill package with proper structure, code, and documentation.

<!-- para:0024 -->
‍

<!-- para:0025 -->
## Required context

<!-- para:0026 -->
Enable the [Google Drive](https://support.claude.com/en/articles/10166901-using-the-google-drive-integration) integration so Claude can access your brand reference file to further enhance your skill.

<!-- para:0027 -->
## Optional context

<!-- para:0028 -->
Turn on [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking) to help Claude make sophisticated decisions about when to apply which brand elements based on visual hierarchy and content importance.

<!-- para:0029 -->
## What Claude creates

<!-- para:0030 -->
Claude produces a complete, working skill package with clear instructions for when the skill applies, brand color specifications with hex values, typography guidelines with fallback fonts, and implementation details. The skill activates automatically when you request your brand styling.

<!-- para:0031 -->
I've created a comprehensive skill that will automatically apply your company's brand guidelines to every presentation, document, and spreadsheet you create in Claude.

<!-- para:0032 -->
*View your brand-guidelines.skill*

<!-- para:0033 -->
The skill includes:

<!-- para:0034 -->
1. SKILL.md - The core skill document with complete brand specifications
2. color-typography-specs.md - Detailed technical specifications with Python code examples
3. usage-examples.md - Practical examples showing how the skill works
4. brand_utils.py - Python utility module for easy implementation

<!-- para:0035 -->
### **Your Brand System**

<!-- para:0036 -->
Color Palette:

<!-- para:0037 -->
- Dark (#141413) - primary text
- Light (#faf9f5) - backgrounds
- Orange (#d97757) - primary accent
- Blue (#6a9bcc) - secondary accent
- Green (#788c5d) - tertiary accent
- Plus mid gray and light gray for supporting elements

<!-- para:0038 -->
**T**ypography:**

<!-- para:0039 -->
- Poppins Bold for all headings (fallback: Arial)
- Lora Regular for all body text (fallback: Georgia)

<!-- para:0040 -->
### **How It Works**

<!-- para:0041 -->
The skill activates automatically whenever you:

<!-- para:0042 -->
- Create a new presentation, document, or spreadsheet
- Edit existing .pptx, .docx, or .xlsx files
- Request any business document creation

<!-- para:0043 -->
You don't need to mention brand guidelines - it just works! Just ask for what you need:

<!-- para:0044 -->
- "Create a 10-slide presentation about Q4 results"
- "Write a project proposal document"
- "Make a budget tracking spreadsheet"

<!-- para:0045 -->
And the brand guidelines are automatically applied with:

<!-- para:0046 -->
- Correct fonts and sizes
- Brand color palette
- Proper contrast ratios
- Professional spacing
- Accent colors in sequence

<!-- para:0047 -->
### **Additional Resources**

<!-- para:0048 -->
I've also created helpful reference materials:

<!-- para:0049 -->
- View README - Complete package overview
- View Quick Reference - Color and typography at a glance

<!-- para:0050 -->
**Key Features**

<!-- para:0051 -->
Smart & Automatic:

<!-- para:0052 -->
- Triggers on document creation/editing without explicit commands
- Applies brand standards seamlessly
- Cycles through accent colors intelligently

<!-- para:0053 -->
Comprehensive:

<!-- para:0054 -->
- Covers presentations, documents, and spreadsheets
- Includes Python code utilities for advanced users
- Provides fallback fonts when needed

<!-- para:0055 -->
Professional Quality:

<!-- para:0056 -->
- WCAG AA accessible color contrasts
- Typography hierarchy that scales
- Consistent visual identity across all outputs

<!-- para:0057 -->
### **Next Steps**

<!-- para:0058 -->
1. Install the skill - Upload brand-guidelines.skill to Claude
2. Start creating - Just ask for documents normally
3. Watch the magic - Brand guidelines apply automatically!

<!-- para:0059 -->
You can also upload the brand PDF you mentioned if you'd like me to cross-reference or enhance the skill with additional assets from it. But as it stands, the skill is fully functional and ready to use with all the specifications you provided!

<!-- para:0060 -->
## Follow up prompts

<!-- para:0061 -->
### Test the skill

<!-- para:0062 -->
Create new content and watch your brand apply automatically without specifying colors or fonts. Claude handles all visual styling decisions based on your uploaded guidelines, letting you focus on content rather than formatting details.

<!-- para:0063 -->
Create a quarterly business review presentation covering revenue growth, customer acquisition, and market expansion. Use our brand guidelines.

<!-- para:0064 -->
### Update the skill

<!-- para:0065 -->
Make changes or add additional visual standards to your skill as your brand evolves. Simply tell Claude your desired output, and it will edit your Skills as your needs evolve.

<!-- para:0066 -->
Update my brand guidelines skill. Use the dark background with light text for all title slides, but keep content slides light. Make the heading font size 28pt instead of 24pt. Also, add our new product colors to the brand guidelines skill: Purple #8B7AB8 for premium features, Teal #4A9B9B for analytics content. These should be used in charts when presenting those specific topics.

<!-- para:0067 -->
### Stack your skills

<!-- para:0068 -->
Skills are [composable](https://www.anthropic.com/news/skills), meaning they can reference each other for Claude to use them together. Your ‘brand-guidelines’ skill can work with other skills you've created—like product-research or writing-standards—to produce work that's both visually sophisticated and aligned with your other requirements

<!-- para:0069 -->
Create a pitch deck for our new product launch. Use my brand-guidelines skill for formatting and apply the product-research skill to find relevant information.

<!-- para:0070 -->
## Tricks, tips, and troubleshooting

<!-- para:0071 -->
### Understand how progressive disclosure works**‍**

<!-- para:0072 -->
When Claude evaluates a task, it first scans skill metadata (the description at the top) to see if the skill is relevant. Only if it matches does Claude load the full instructions. Reference files load only when actually needed. This means you can have many skills available without overwhelming Claude's context.

<!-- para:0073 -->
### Add bundled scripts for deterministic execution

<!-- para:0074 -->
Instructions allow interpretation variance. Scripts execute identically every time. If your brand skill says "apply orange accent `#d97757`," Claude interprets how to apply it. If your skill includes `scripts/apply_brand_colors.py` with exact RGB values and application logic, execution is deterministic. Use scripts for specific color application, file transformations, data formatting, or anything where consistency matters more than flexibility. Keep instructions for decision-making, creative choices, and context-dependent behavior.

<!-- para:0075 -->
### Learn more about skill creation

<!-- para:0076 -->
When you ask Claude to create a skill, Claude is using a skill-creator skill under the hood. This skill teaches Claude how to package your workflow into proper SKILL.md format, organize your files correctly, and package everything into a ZIP file. You describe your process in conversation and Claude uses the skill-creator skill to handle the translation of "I want bullets here and prose there" into the proper structure. To learn more about creating skills in Claude.ai, see [*How to create a skill with Claude*.](https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation)

<!-- para:0077 -->
## Ready to try for yourself?
