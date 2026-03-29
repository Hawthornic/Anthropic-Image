---
source_url: https://claude.com/resources/use-cases/clean-up-promotional-emails
title: "Clean up promotional emails"
section: resources
---

<!-- para:0001 -->
# Clean up promotional emails

<!-- para:0002 -->
- Author Anthropic
- Category: Claude in Chrome
- Model Haiku 4.5
- Features Browser Use
- Share [Copy link](https://claude.com/resources/use-cases/clean-up-promotional-emails#)https://claude.com/resources/use-case/clean-up-promotional-emails

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Promotional emails accumulate faster than you can unsubscribe. Claude in Chrome can scan through your inbox, identify marketing emails, newsletters, and automated notifications, then present them as a list for you to review before deleting in bulk.

<!-- para:0005 -->
Tell Claude what to look for and what to leave alone. It flags candidates for deletion and waits for your approval before taking action.

<!-- para:0006 -->
Find emails I likely don't need so I can review and bulk delete.

<!-- para:0007 -->
**Flag these: **

<!-- para:0008 -->
- Promotional emails from retailers/brands
- Newsletters I haven't opened in 3+ months
- Automated notifications (delivered shipping updates, expired calendar reminders)
- Marketing emails from SaaS products

<!-- para:0009 -->
**Don't flag: **

<!-- para:0010 -->
- Emails from actual people (not automated)
- Anything with attachments
- Anything from [my company domain]

<!-- para:0011 -->
**Output: ** Show me the list organized by sender so I can review before deleting.**

<!-- para:0012 -->
## Give Claude context

<!-- para:0013 -->
Claude works within your Gmail session. It can read email content, see sender information, and check whether you've opened messages. It only takes action when you confirm.

<!-- para:0014 -->
## Required context

<!-- para:0015 -->
Before starting your Claude in Chrome session, make sure you're logged into your Gmail account.

<!-- para:0016 -->
## Optional context

<!-- para:0017 -->
## What Claude creates

<!-- para:0018 -->
Claude uses your session to scan and sort through your inbox. Claude presents what it found, organized for your review.

<!-- para:0019 -->
I've scanned your inbox and found 847 emails that match your criteria. Here's the breakdown by sender:

<!-- para:0020 -->
**Retailers and brands (312 emails)**

<!-- para:0021 -->
- Amazon promotional: 89 emails
- Target Circle: 45 emails
- Nordstrom: 38 emails
- Best Buy deals: 31 emails
- Various other retailers: 109 emails

<!-- para:0022 -->
**Unopened newsletters (203 emails)**

<!-- para:0023 -->
- Morning Brew: 67 emails (last opened 4 months ago)
- The Hustle: 52 emails (never opened)
- Various Substack newsletters: 84 emails

<!-- para:0024 -->
**Automated notifications (198 emails)**

<!-- para:0025 -->
- Amazon shipping updates: 76 emails (all delivered)
- Google Calendar reminders: 44 emails (past events)
- Linked In notifications: 78 emails

<!-- para:0026 -->
**SaaS marketing (134 emails)**

<!-- para:0027 -->
- Notion tips: 23 emails
- Figma updates: 19 emails
- Various trial follow-ups: 92 emails

<!-- para:0028 -->
I left alone:

<!-- para:0029 -->
- All emails from people (not automated senders)
- 34 emails with attachments
- Everything from your company domain

<!-- para:0030 -->
Ready to delete all 847, or would you like to keep any of these senders?

<!-- para:0031 -->
## Follow up prompts

<!-- para:0032 -->
### Adjust and proceed

<!-- para:0033 -->
Keep certain senders or categories, then confirm the deletion.

<!-- para:0034 -->
Keep Morning Brew and the Figma updates. Delete everything else.

<!-- para:0035 -->
### Unsubscribe from unwanted messages

<!-- para:0036 -->
For senders that keep filling your inbox, have Claude unsubscribe instead of just deleting.

<!-- para:0037 -->
For the retailers with more than 15 emails, go through and unsubscribe me instead of just deleting. I don't want to continue receiving these messages.

<!-- para:0038 -->
### Flag subscription emails you may have missed

<!-- para:0039 -->
While scanning emails, Claude can spot receipts and payment confirmations from services you might have forgotten about.

<!-- para:0040 -->
While you're in there, can you find any recurring payment emails? I want to see which subscriptions I'm paying for and see if there are some I forgot to cancel.

<!-- para:0041 -->
## Tricks, tips, and troubleshooting

<!-- para:0042 -->
### Permissions before taking actions

<!-- para:0043 -->
Before clicking "send," "publish," "post," "submit," or similar action buttons, Claude asks for approval. This includes sending emails, posting to social media, submitting forms, or messaging others on your behalf.

<!-- para:0044 -->
### Save and schedule tasks with shortcut

<!-- para:0045 -->
Once your cleanup prompt works well, click the shortcut button below the prompt to save it as a shortcut. Next time, just type "/" to view the command instead of rewriting the whole prompt. Alternatively, you can schedule the shortcut to run automatically.

<!-- para:0046 -->
### Claude keeps working in the background

<!-- para:0047 -->
Claude keeps scanning even when you switch to other tabs—as long as Chrome is open. Turn on notifications in extension settings to get alerted when Claude finishes or needs your approval. You'll see a desktop notification when the cleanup list is ready.

<!-- para:0048 -->
## Ready to try for yourself?
