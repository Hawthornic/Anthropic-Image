---
source_url: https://claude.com/resources/use-cases/process-batches-of-vendors-with-cowork
title: "Process batches of vendors with Cowork"
section: resources
---

<!-- para:0001 -->
# Process batches of vendors with Cowork

<!-- para:0002 -->
- Author Anthropic
- Category: Professional
- Model Sonnet 4.5
- Features Cowork
- Share [Copy link](https://claude.com/resources/use-cases/process-batches-of-vendors-with-cowork#)https://claude.com/resources/use-case/process-batches-of-vendors-with-cowork

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
In Cowork, Claude works across your local files and browser in a single session. It reads your vendor tracker, contract templates, and vendor documents from a folder, then fills intake forms in your procurement portal through Claude in Chrome.

<!-- para:0005 -->
In your prompt, describe the end state you want. Claude plans the onboarding steps from there, and when parts of the workflow are independent, it runs them in parallel.

<!-- para:0006 -->
I need to onboard several vendors. Their documents spread across my desktop.

<!-- para:0007 -->
For each new vendor:

<!-- para:0008 -->
- Create an NDAs and MSAs from the templates
- Fill out an onboarding form
- Afterwards, add all information to the vendor tracker spreadsheet

<!-- para:0009 -->
Organize all the new documents on my desktop.

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
[Cowork](https://claude.com/resources/tutorials/claude-cowork-a-research-preview) is a workspace in [Claude Desktop](https://claude.com/download) where Claude works directly with your local files, so there's no copying and pasting into the conversation. For browser work like filling portal forms, it uses [Claude in Chrome](https://claude.com/chrome).

<!-- para:0012 -->
**What to expect: ** After your initial prompt in Cowork, Claude may ask you questions about how to handle the batch, then build a plan you can review in the sidebar. This front-loading helps it run end-to-end with fewer interruptions.**

<!-- para:0013 -->
## Required context

<!-- para:0014 -->
To get started:

<!-- para:0015 -->
- Download [Claude Desktop](https://claude.com/download) and start a Cowork session
- Select ***Work in a folder*** in the chat bar and choose the folder with your vendor tracker, contract templates, and vendor details
- [Install Claude in Chrome](https://claude.com/chrome) and add it as a connector, then log into your procurement portal

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
- Portal tab already open to the intake form

<!-- para:0018 -->
## What Claude creates

<!-- para:0019 -->
Claude works through each step, moving between your local files and your browser to complete the full onboarding. Using the Claude in Chrome connector, Claude opens your procurement portal in a new browser tab and fills out intake forms directly, while reading vendor details and generating contracts from the files in your folder.

<!-- para:0020 -->
I'll work through the onboarding in three parts — updating your spreadsheet, completing the portal form, and generating the MSA.

<!-- para:0021 -->
#### 1. Vendor Tracker Updated

<!-- para:0022 -->
I've added Meridian Solutions to your vendor tracker:

<!-- para:0023 -->
- Vendor Name: Meridian Solutions
- Primary Contact: David Chen
- Service Category: IT Consulting
- Annual Value: $150,000
- Status: Pending MSA

<!-- para:0024 -->
#### 2. Procurement Portal Form

<!-- para:0025 -->
I've completed the vendor intake form in your Chrome tab. The form is ready for you to review and submit.

<!-- para:0026 -->
#### 3. Master Service Agreement Generated

<!-- para:0027 -->
I've created the MSA from your template and saved it to your Documents folder.

<!-- para:0028 -->
I'll now continue with the remaining vendors…

<!-- para:0029 -->
## Follow up prompts

<!-- para:0030 -->
### Generate additional documents

<!-- para:0031 -->
Create more contracts from your templates. NDAs, SOWs, or other vendor documents using the same vendor details.

<!-- para:0032 -->
*"Also generate an NDA from our template at ~/Documents/Templates/NDA-Template.docx and save it in the same folder as the MSA."*

<!-- para:0033 -->
### Organize vendor files

<!-- para:0034 -->
Create a vendor folder with everything in one place. Move or copy all onboarding documents to a dedicated folder.

<!-- para:0035 -->
*"Create a folder called Meridian-Solutions in ~/Documents/Vendors and move the MSA there. Also save a copy of their contact details as a text file."*

<!-- para:0036 -->
## Tricks, tips, and troubleshooting

<!-- para:0037 -->
### Subagents can handle independent tasks at the same time

<!-- para:0038 -->
Updating the vendor tracker and generating the contract don't depend on each other — so you can ask Claude to spin up subagents and run them in parallel.

<!-- para:0039 -->
### Add Claude for Chrome as a connector before starting

<!-- para:0040 -->
Install Claude in Chrome and add it as a connector in your Cowork session. Log into your procurement portal before you start — Claude works within your authenticated session.

<!-- para:0041 -->
### The progress panel shows what Claude is working on

<!-- para:0042 -->
Cowork displays which files Claude is reading and what it's doing at each step. If something looks off, you can steer the work in progress.

<!-- para:0043 -->
## Ready to try for yourself?
