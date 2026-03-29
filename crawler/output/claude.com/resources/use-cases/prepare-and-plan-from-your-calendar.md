---
source_url: https://claude.com/resources/use-cases/prepare-and-plan-from-your-calendar
title: "Prepare and plan from your calendar"
section: resources
---

<!-- para:0001 -->
# Prepare and plan from your calendar

<!-- para:0002 -->
- Author Anthropic
- Category: Claude in Chrome
- Model Haiku 4.5
- Features Browser Use
- Share [Copy link](https://claude.com/resources/use-cases/prepare-and-plan-from-your-calendar#)https://claude.com/resources/use-case/prepare-and-plan-from-your-calendar

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
Claude for Chrome lets Claude interact directly with web pages—reading content, clicking, typing, and navigating sites on your behalf. For calendar prep, this means Claude can open your Google Calendar, check each meeting's attendee list, switch to Gmail to search for relevant threads with those people, and even book conference rooms.

<!-- para:0005 -->
Point Claude at your Google Calendar and tell it what to look for. It handles the cross-referencing between calendar and email, surfaces what needs your attention, and can fix the gaps.

<!-- para:0006 -->
Look at my calendar and help me get ready for tomorrow.

<!-- para:0007 -->
**For each meeting: **

<!-- para:0008 -->
- Tell me if it's internal or external (check the attendee domains)
- Find any recent email threads with those attendees about this topic
- Flag if the meeting is missing a room (for in-person) or a video link (for remote). If it is, assign one to the meeting.
- For external meetings, note anything I should review beforehand, like relevant docs attached to the meeting or related emails.

<!-- para:0009 -->
Give me a quick prep summary for the day, finding what needs my attention before I show up.

<!-- para:0010 -->
## Give Claude context

<!-- para:0011 -->
Claude reads your calendar and email directly in Chrome. It cross-references attendees, threads, and meeting details to build context.

<!-- para:0012 -->
## Required context

<!-- para:0013 -->
**Required: ** Open Google Calendar showing tomorrow's date and Gmail in another tab. Claude navigates between them to gather context for each meeting. Make sure you're logged into both.**

<!-- para:0014 -->
## Optional context

<!-- para:0015 -->
**Optional: ** If you take notes during calls—in a doc, notepad, or even bullet points—have them accessible. Claude can format rough notes into structured activity descriptions.**

<!-- para:0016 -->
## What Claude creates

<!-- para:0017 -->
Claude reviews each meeting and gives you a prep summary organized by what needs attention.

<!-- para:0018 -->
**Tomorrow: Wednesday, December 18**

<!-- para:0019 -->
You have **6 meetings**. Here's what I found:

<!-- para:0020 -->
**Needs Prep (External Meetings)**

<!-- para:0021 -->
Meeting Time Context Acme Corp quarterly review10:00 AMExternal (3 attendees from @acme.com). Found email thread from Dec 12 where they asked about API rate limits—might come up. No room booked.Vendor intro - Data Flow2:00 PMExternal (new contact). They sent a capabilities deck on Dec 15 you haven't opened. Zoom link is in the invite.

<!-- para:0022 -->
**Missing Logistics**

<!-- para:0023 -->
Meeting Issue Suggested Fix Acme Corp quarterly review No room Book Sequoia (seats 6) — available Team planning sync No room Book Birch (seats 8) — available Design review No video link Found Meet link in thread with Sarah—add to invite?

<!-- para:0024 -->
**Ready to Go (No Action Needed)**

<!-- para:0025 -->
- **Standup** — 9:00 AM, has Zoom link, recurring
- **Marcus 1:1** — 11:30 AM, internal, has room (Aspen)
- **End of day sync** — 4:30 PM, internal, has Meet link

<!-- para:0026 -->
**Quick Prep Summary**

<!-- para:0027 -->
1. Review the API rate limits thread before Acme call (I can pull the key points if helpful)
2. Open the Data Flow deck before the 2pm—it's 12 slides
3. Book rooms for Acme and Team planning
4. Add Meet link to Design review

<!-- para:0028 -->
Want me to book those rooms and add the video link now?

<!-- para:0029 -->
## Follow up prompts

<!-- para:0030 -->
### Fix the logistics

<!-- para:0031 -->
Claude can book rooms and add links directly to calendar events. Once you've reviewed what needs fixing, approve the changes.

<!-- para:0032 -->
Yes, book those rooms and add the Meet link. Use a room on the 6th floor if available—that's where I sit.

<!-- para:0033 -->
### Get deeper prep for the external meeting

<!-- para:0034 -->
For important calls, Claude can summarize recent correspondence with those contacts. This surfaces what's been discussed and what might come up.

<!-- para:0035 -->
For the Acme meeting, can you summarize the last few email threads I've had with them? I want to know what's been discussed recently and what they might bring up.

<!-- para:0036 -->
### Make this a nightly routine

<!-- para:0037 -->
Claude in Chrome can run tasks on a schedule. Set this to run every evening so you start each morning with prep done.

<!-- para:0038 -->
Can you save this as a shortcut I run every evening at 6pm? Call it "Prep tomorrow" and have it review my calendar, flag external meetings, and check for missing rooms or links.

<!-- para:0039 -->
## Tricks, tips, and troubleshooting

<!-- para:0040 -->
### Save and automate your workflow as a shortcut

<!-- para:0041 -->
Save the prompt as a shortcut by clicking on the shortcut icon below a successful prompt. You can also set a schedule for when you want the workflow to run next. Alternatively, manually trigger the workflow, by typing "/" and selecting the shortcut.

<!-- para:0042 -->
### Navigating to new sites

<!-- para:0043 -->
Claude asks for permission before visiting new sites. You can grant site-level permissions for websites you trust, allowing Claude to work without repeated approvals on those specific domains.

<!-- para:0044 -->
### Permissions before taking actions

<!-- para:0045 -->
Before clicking "send," "publish," "post," "submit," or similar action buttons, Claude asks for approval. This includes sending emails, posting to social media, submitting forms, or messaging others on your behalf.

<!-- para:0046 -->
## Ready to try for yourself?
