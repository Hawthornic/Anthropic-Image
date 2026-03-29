---
source_url: https://claude.com/resources/use-cases/organize-your-legal-workflows-using-projects
title: "Organize your legal workflows using Projects"
section: resources
---

<!-- para:0001 -->
# Organize your legal workflows using Projects

<!-- para:0002 -->
- Author Anthropic
- Category: Legal
- Model Opus 4.5
- Features Projects
- Share [Copy link](https://claude.com/resources/use-cases/organize-your-legal-workflows-using-projects#)https://claude.com/resources/use-case/organize-your-legal-workflows-using-projects

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Contract reviews at scale demand consistency, but playbooks live in shared drives and tribal knowledge stays in senior associates' heads. Projects in Claude solve this by giving you persistent context. Upload your playbook, templates, and term lists once, and Claude references them automatically in every conversation within that Project. This prompt will help you create project instructions for your team.

<!-- para:0005 -->
I'm setting up a Project for NDA reviews at our firm. We handle about 30 NDAs a week and I want Claude to reference our standard terms, flag deviations, and maintain consistency in our review comments.

<!-- para:0006 -->
I've uploaded our NDA playbook, our standard mutual NDA template, and our list of unacceptable terms. **Analyze these documents** and create an NDA Review Standards Guide that captures our voice, tone, and structure we use throughout our writing. Make this a **professional reference document** I can upload to the Project knowledge, so Claude can reference it during every review.

<!-- para:0007 -->
Then help me craft optimized **project instructions** I can paste into the custom instructions field—instructions that tell Claude to reference the standards guide and apply our approach.

<!-- para:0008 -->
## Give Claude context

<!-- para:0009 -->
Add your documents or connect your document storage so Claude can access your playbooks, templates, and term lists directly. The more complete your reference materials, the more accurately Claude captures your firm's standards and approach.

<!-- para:0010 -->
## Required context

<!-- para:0011 -->
Upload core reference materials: At minimum, provide your review playbook or guidelines, a standard template showing your preferred language, and any lists of prohibited or flagged terms.

<!-- para:0012 -->
## Optional context

<!-- para:0013 -->
Enable Google Drive integration: Claude can pull your playbooks, templates, and term lists directly from shared drives.

<!-- para:0014 -->
Other Document connectors. If you use other document storage, you can connect [Microsoft 365](https://claude.com/connectors/microsoft-365), [Notion](https://claude.com/connectors/notion), and [Box](https://claude.com/connectors/box) accounts, or use [other connectors](https://claude.com/connectors/) to access your documentation.

<!-- para:0015 -->
Sample redlines or review comments: If you have examples of completed reviews, these help Claude learn your commenting style and severity calibrations.

<!-- para:0016 -->
Enable [Extended Thinking](https://support.claude.com/en/articles/10574485-using-extended-thinking): For complex document analysis and pattern extraction, Extended Thinking helps Claude produce more thorough and nuanced standards guides.

<!-- para:0017 -->
## What Claude creates

<!-- para:0018 -->
Claude analyzes your reference materials, identifies patterns in your review approach, and produces two files: a standards guide for your Project knowledge and ready-to-paste custom instructions.

<!-- para:0019 -->
I've analyzed your NDA playbook, mutual template, and unacceptable terms list. Here's what I found:

<!-- para:0020 -->
**Patterns in your review approach: **

<!-- para:0021 -->
Your firm uses a direct, business-impact focused tone that's solution-oriented rather than just flagging problems. Comments follow a consistent three-part structure: issue identification, risk level, and recommendation with alternative language. Severity indicators are calibrated to actual risk, and terminology stays consistent across documents.

<!-- para:0022 -->
I've created two files for your NDA Review Project:

<!-- para:0023 -->
**1. NDA Review Standards Guide** (Word document)**

<!-- para:0024 -->
A 7-page professional reference document that captures Meridian's approach, including:

<!-- para:0025 -->
- Voice and tone principles with specific examples
- Three-part comment structure with sample markup
- Severity indicator definitions and usage guidelines
- Complete standard terms reference (confidential information definition, carve-outs, survival periods, return/destruction standards)
- Unacceptable terms tables organized by Critical and High risk
- Inappropriate scope expansion flags
- Escalation triggers
- Quality standards checklist

<!-- para:0026 -->
**2. Project Instructions** (Markdown file)**

<!-- para:0027 -->
Ready-to-paste custom instructions that tell Claude to reference the Standards Guide for every review, apply the three-part comment structure consistently, use correct severity indicators, flag escalation triggers explicitly, and run a quality checklist before delivering.

<!-- para:0028 -->
[Project instructions .md]

<!-- para:0029 -->
**To set up your Project: **

<!-- para:0030 -->
1. Create a new Project in Claude
2. Upload the Standards Guide to Project knowledge
3. Paste the instructions from the markdown file into the custom instructions field
4. Optionally add your standard mutual NDA template for comparison reference

<!-- para:0031 -->
Each review will now reference your standards automatically.

<!-- para:0032 -->
## Follow up prompts

<!-- para:0033 -->
### Test the setup with a real NDA in a Project

<!-- para:0034 -->
Create a new Project, upload the Standards Guide to the knowledge base, and paste your custom instructions into the Project settings. Upload an NDA to see how Claude applies your standards, then refine any instructions that need adjustment.

<!-- para:0035 -->
Here's an NDA we received yesterday from a potential vendor. Review it against our standards guide and flag any deviations. Format your comments the way our associates would, with risk level and recommended alternative language for each issue.

<!-- para:0036 -->
### Expand to other contract types

<!-- para:0037 -->
Once your NDA workflow is running, replicate the approach for other high-volume agreements.

<!-- para:0038 -->
We also review about 15 MSAs per month. I'm uploading our MSA playbook and template. Create a separate standards guide for MSA reviews following the same structure as the NDA guide, and give me project instructions I can use for a new MSA Review Project.

<!-- para:0039 -->
### Create a training resource for new associates

<!-- para:0040 -->
Turn your systematized approach into onboarding material.

<!-- para:0041 -->
Based on the NDA standards guide, create a training document for new associates joining the contracts team. It should explain our review philosophy, walk through the workflow, and include 3-4 annotated examples showing how we'd handle common issues. Make it something they can reference during their first few weeks.

<!-- para:0042 -->
## Tricks, tips, and troubleshooting

<!-- para:0043 -->
### Start with your best-documented process

<!-- para:0044 -->
If your playbook is thorough and your templates are up to date, Claude's standards guide will be stronger. If you're working from informal tribal knowledge, consider using this as an opportunity to formalize your approach first, then have Claude systematize it.

<!-- para:0045 -->
### Teams can share Projects and their configurations

<!-- para:0046 -->
On Team and Enterprise plans, share the Project so colleagues get the same setup. Everyone reviews against identical standards without each person configuring their own approach. When standards change, update the knowledge base once, and the change propagates to all users.

<!-- para:0047 -->
### Test with real documents before going live

<!-- para:0048 -->
After setup, run 3-5 already reviewed NDAs through the Project and compare Claude's output to how your actual associates handled them. Note where Claude misses nuance or applies the wrong severity level, then refine your custom instructions. Ten minutes of calibration prevents hundreds of inconsistent reviews.

<!-- para:0049 -->
### Claude can work in your file formats

<!-- para:0050 -->
Legal documents typically need to stay in .docx for redlining and collaboration. Claude can analyze Word documents and produce outputs in the same format, so deliverables slot directly into your existing workflow without conversion.

<!-- para:0051 -->
### This pattern extends beyond legal work

<!-- para:0052 -->
Marketing teams can document brand voice. Finance teams can capture reporting standards. Research teams can codify methodology. The output becomes infrastructure for consistent AI-assisted work across any domain with established practices.

<!-- para:0053 -->
‍

<!-- para:0054 -->
## Ready to try for yourself?
