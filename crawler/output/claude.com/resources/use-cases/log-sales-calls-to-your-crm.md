---
source_url: https://claude.com/resources/use-cases/log-sales-calls-to-your-crm
title: "Log sales calls to your CRM"
section: resources
---

<!-- para:0001 -->
# Log sales calls to your CRM

<!-- para:0002 -->
- Author Anthropic
- Category: Claude in Chrome
- Model Haiku 4.5
- Features Browser Use
- Share [Copy link](https://claude.com/resources/use-cases/log-sales-calls-to-your-crm#)https://claude.com/resources/use-case/log-sales-calls-to-your-crm

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude reads your Google Calendar, finds each meeting's attendees in Salesforce, and drafts activity logs. You provide notes on what was discussed and review everything before Claude creates the records.

<!-- para:0005 -->
This works for logging a single day or catching up on a backlog. Claude handles the cross-referencing and formatting; you add the context that makes the logs useful.

<!-- para:0006 -->
Log my calls from today in Salesforce.

<!-- para:0007 -->
**Steps: **

<!-- para:0008 -->
1. Go to my Google Calendar and find today's external meetings (skip internal)
2. For each meeting, look up the attendees in Salesforce
3. Create an activity log for each call—I'll provide a quick summary of what was discussed
4. Format each log with next steps included

<!-- para:0009 -->
**Do not submit.** Show me everything for review before saving to Salesforce.**

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
Claude uses browser use to work across your calendar and CRM through your existing browser sessions. If you're logged into Google Calendar and Salesforce, Claude can read your meetings, look up contacts, and create activity records. No API configuration or IT tickets required.

<!-- para:0012 -->
## Required context

<!-- para:0013 -->
Log into Google Calendar and Salesforce in Chrome before starting. Claude navigates between them using your existing sessions.

<!-- para:0014 -->
## Optional context

<!-- para:0015 -->
If you take notes during calls—in a doc, notepad, or even bullet points—have them accessible. Claude can format rough notes into structured activity descriptions.

<!-- para:0016 -->
## What Claude creates

<!-- para:0017 -->
Claude shows what it found on your calendar, matches attendees to Salesforce contacts, and drafts activity logs for your review.

<!-- para:0018 -->
**External Meetings Today**

<!-- para:0019 -->
5 found — Here's the status:

<!-- para:0020 -->
**9:00 AM — Intro call - Acme Corp** - Salesforce match: Sarah Chen (VP Ops) - Status: Ready to log**

<!-- para:0021 -->
**10:30 AM — Demo - Tech Start** - Salesforce match: Marcus Johnson - Status: Ready to log**

<!-- para:0022 -->
**1:00 PM — Follow-up - Blue Sky** - Salesforce match: Rachel Torres - Status: Ready to log**

<!-- para:0023 -->
**2:30 PM — Pricing - Orion Systems** - Salesforce match: James Park - Status: Ready to log**

<!-- para:0024 -->
**4:00 PM — Discovery - New Co** - Salesforce match: No match found - Status: Needs input**

<!-- para:0025 -->
**Ready to Log (4 calls)**

<!-- para:0026 -->
Give me a quick summary for each and I'll format the activity log.

<!-- para:0027 -->
**1. Acme Corp — Sarah Chen**

<!-- para:0028 -->
You: "Good discovery call. Evaluating us vs Competitor X. Pain point is reporting—current tool takes 2 hours for what should take 5 minutes. Decision by end of Q1. Next step is technical demo with ops team."

<!-- para:0029 -->
Draft Activity Log: - Subject: Discovery Call - Acme Corp - Type: Call - Related To: Acme Corp - New Business

<!-- para:0030 -->
**Description: **

<!-- para:0031 -->
Discovery call with Sarah Chen (VP Operations).

<!-- para:0032 -->
**Discussion: ** - Evaluating our solution against Competitor X - Primary pain point: reporting inefficiency (2 hours for reports that should take 5 minutes) - Decision timeline: End of Q1**

<!-- para:0033 -->
**Next Steps: ** - Schedule technical demo with operations team - Send competitive comparison materials**

<!-- para:0034 -->
**Needs Your Input**

<!-- para:0035 -->
**5. New Co Discovery**

<!-- para:0036 -->
No contact found matching the attendee email ([[email protected]](https://claude.com/cdn-cgi/l/email-protection)).

<!-- para:0037 -->
**Options: ** - Create a new contact record - Log the activity against the Account only - Skip this one**

<!-- para:0038 -->
Once you confirm and give me the remaining summaries, I'll show the complete batch for final review.

<!-- para:0039 -->
## Follow up prompts

<!-- para:0040 -->
### Update opportunity stages

<!-- para:0041 -->
While logging activities, update the opportunity records based on what you learned.

<!-- para:0042 -->
For Acme Corp, move the opportunity to "Demo Scheduled" and update the close date to end of Q1. Add Competitor X to the competitors field.

<!-- para:0043 -->
### Catch up on the week

<!-- para:0044 -->
Process multiple days of calls at once before a pipeline review.

<!-- para:0045 -->
I've fallen behind on logging. Can you do this for all my external meetings from the past week? I'll review everything before our Monday pipeline meeting.

<!-- para:0046 -->
### Create missing contacts

<!-- para:0047 -->
Add new contacts when attendees don't exist in Salesforce yet. Claude can create them and link the activity in one step.

<!-- para:0048 -->
Go ahead and create a contact for Alex at New Co. His title is Director of Partnerships—you can pull the rest from his email signature in the calendar invite. Then log the activity against that new record.

<!-- para:0049 -->
## Tricks, tips, and troubleshooting

<!-- para:0050 -->
### Drag Calendar and Salesforce into the same tab group

<!-- para:0051 -->
For cross-app workflows, drag both Google Calendar and Salesforce into Claude's tab group. You'll see a tab group highlighting the tabs Claude can access. Now Claude can read calendar attendees and look up Salesforce contacts simultaneously—no tab switching. Before visiting new sites, Claude asks for permission. You can grant site-level permissions for websites you trust, allowing Claude to work without repeated approvals on those specific domains.

<!-- para:0052 -->
### Permissions before taking actions

<!-- para:0053 -->
Before clicking "send," "publish," "post," "submit," or similar action buttons, Claude asks for approval. This includes sending emails, posting to social media, submitting forms, or messaging others on your behalf.

<!-- para:0054 -->
### Save your workflow as a shortcut

<!-- para:0055 -->
Once you have an activity log format that works, save the prompt as a shortcut by clicking on the shortcut icon below a successful prompt. You can also set a schedule for when you want the workflow to run next. Alternatively, manually trigger the workflow, by typing "/" and selecting the shortcut.

<!-- para:0056 -->
## Ready to try for yourself?
