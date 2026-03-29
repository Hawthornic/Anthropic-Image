---
source_url: https://claude.com/resources/use-cases/prep-scattered-documents-for-a-compliance-audit
title: "Prep scattered documents for a compliance audit"
section: resources
---

<!-- para:0001 -->
# Prep scattered documents for a compliance audit

<!-- para:0002 -->
- Author Anthropic
- Category: Legal
- Model Sonnet 4.5
- Features Cowork
- Share [Copy link](https://claude.com/resources/use-cases/prep-scattered-documents-for-a-compliance-audit#)https://claude.com/resources/use-case/prep-scattered-documents-for-a-compliance-audit

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
In Cowork, Claude processes an entire folder of audit documents at once: policies, procedures, contracts, evidence, scans. It reads each file to understand what it is, so there's no renaming or sorting beforehand.

<!-- para:0005 -->
Your prompt just needs the audit framework and scope. Claude categorizes everything, renames files to match, and flags gaps in your documentation while you move on to something else.

<!-- para:0006 -->
I have 100+ documents for our upcoming SOC 2 audit in this folder. Right now they're scattered with names like "policy_v2_final.docx" and "scan0042.pdf". I need to organize them before the auditors arrive:

<!-- para:0007 -->
- Rename files with clear titles showing document type, effective date, and which control area they cover
- Group by control category (Access Control, Change Management, Incident Response, etc.)
- Flag any control areas where we seem to have gaps in documentation

<!-- para:0008 -->
Our audit scope covers security, availability, and confidentiality. The audit period is January through December 2024.

<!-- para:0009 -->
## Give Claude context

<!-- para:0010 -->
[Cowork](https://claude.com/resources/tutorials/claude-cowork-a-research-preview) is a workspace in [Claude Desktop](https://claude.com/download) that works directly with your local files. Point it at your audit folder and it reads everything inside, including PDFs, Word docs, spreadsheets, and scans.

<!-- para:0011 -->
**What to expect: ** After your initial prompt in Cowork, Claude may ask you questions about your audit scope and requirements, then build a plan you can review in the sidebar. This helps it work more independently and produce results closer to finished.**

<!-- para:0012 -->
## Required context

<!-- para:0013 -->
To get started:

<!-- para:0014 -->
- Download [Claude Desktop](https://claude.com/download) and start a Cowork session
- Select ***Work in a folder*** in the chat bar and choose the folder containing your audit documents, or use the ***+*** button to add individual files
- Include your audit scope or control framework so Cowork can categorize documents against it

<!-- para:0015 -->
## Optional context

<!-- para:0016 -->
- Control matrix or checklist
- Naming convention preference
- [Claude in Chrome](https://claude.com/chrome) — for pulling evidence from web-based tools

<!-- para:0017 -->
## What Claude creates

<!-- para:0018 -->
Cowork reviews the entire document folder, produces a rename mapping organized by control area, identifies coverage, and flags potential gaps.

<!-- para:0019 -->
I've reviewed all 156 documents in your audit folder. Here's what I found:

<!-- para:0020 -->
#### Document Inventory

<!-- para:0021 -->
- Policies: 24 documents
- Procedures: 31 documents
- Contracts and agreements: 18 documents
- Evidence and logs: 67 documents
- Training records: 16 documents

<!-- para:0022 -->
#### Coverage by Control Area

<!-- para:0023 -->
**Well covered: ** Access Control (28), Change Management (22), Vendor Management (18)**

<!-- para:0024 -->
**May need attention: ** Incident Response (8), Data Backup & Recovery (6)**

<!-- para:0025 -->
#### Gaps Identified

<!-- para:0026 -->
- Incident Response: No evidence of testing or tabletop exercises
- Backup & Recovery: No restoration test evidence
- Business Continuity: Not in inventory

<!-- para:0027 -->
Want me to proceed with the reorganization?

<!-- para:0028 -->
## Follow up prompts

<!-- para:0029 -->
### Create the control matrix as a spreadsheet

<!-- para:0030 -->
Cowork writes files directly to your folder. Instead of copying output from chat, have it create the matrix as an Excel file you can share with auditors.

<!-- para:0031 -->
*"Create a spreadsheet in this folder mapping each SOC 2 control to the documents that support it. Include columns for control ID, description, evidence documents, and coverage status."*

<!-- para:0032 -->
### Pull evidence from your ticketing system

<!-- para:0033 -->
Use Claude in Chrome for web-based tools. If your change management or incident response evidence lives in Jira, Service Now, or another web tool, Cowork can read it directly from the browser.

<!-- para:0034 -->
*"I have Jira open with our change management tickets. Pull the last 6 months of change requests and create a summary document showing we follow our change management procedure."*

<!-- para:0035 -->
### Generate policy summaries for the walkthrough

<!-- para:0036 -->
Create a reference doc for your audit conversations. Cowork reads each policy and writes a cheat sheet you can use when auditors ask questions.

<!-- para:0037 -->
*"Read our policies folder and create a one-page reference doc. For each policy: what it covers, last updated date, and the 2-3 key requirements I should be able to explain."*

<!-- para:0038 -->
## Tricks, tips, and troubleshooting

<!-- para:0039 -->
### Your documents stay on your machine

<!-- para:0040 -->
Cowork runs locally. Sensitive policies, contracts, and evidence files never leave your computer.

<!-- para:0041 -->
### Point Cowork at the mess, not just the polished files

<!-- para:0042 -->
If you have a "to be organized" folder with random scans and downloads, that's exactly where to start. Cowork can make sense of poorly named files from their content.

<!-- para:0043 -->
### Use your existing framework as a guide

<!-- para:0044 -->
If you have a control matrix, audit checklist, or framework mapping, include it in the folder. Cowork uses it to categorize documents more accurately.

<!-- para:0045 -->
## Ready to try for yourself?
