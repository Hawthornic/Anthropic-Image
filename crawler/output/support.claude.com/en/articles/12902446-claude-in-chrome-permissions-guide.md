---
source_url: https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide
title: "Claude in Chrome Permissions Guide"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This guide explains how to control what Claude can access and do when using Claude in Chrome. Understanding permissions helps you balance productivity with security.

<!-- para:0002 -->
Claude in Chrome uses a multi-layered permission system to give you control over what Claude can access and do. When you first open the extension, you'll see a drop-down menu on the chat input. Click this to choose between two permission modes:

<!-- para:0003 -->
Choose “Ask before acting” to have Claude create a plan from your prompt, which you can approve and allow Claude to execute. The plan will specify which websites you’re allowing Claude to access, as well as the approach it will follow:

<!-- para:0004 -->
Note that Claude will only use the websites listed in the plan, so you’ll need to manually approve any additional access requests.

<!-- para:0005 -->
Claude clarifies which sites it’s planning to access and the actions it will take upfront, allowing you to review the proposed plan and ensure it’s correct before starting. You can also click “Make changes” to reject the current proposal, then prompt Claude again to make any necessary changes. Once you click “Approve plan,” Claude will be able to act independently within the outlined parameters, but will still check with you before taking certain irreversible actions, like making a purchase, creating an account, or downloading a file. Claude will not deviate from the stated plan without requesting your permission first. There are certain actions that Claude cannot take for your security, such as bypassing bot authorizations, executing trades, permanently deleting files, or taking certain actions that may indicate a prompt injection risk (see [Prohibited Actions](https://support.claude.com/en/articles/12902446-claude-in-chrome-permissions-guide#h_e199f8f523)).

<!-- para:0006 -->
"Act without asking" is a **high-risk mode** that allows Claude to operate with near-complete autonomy on the internet. Even in this mode, Claude should ask before:

<!-- para:0007 -->
However, due to the nature of LLMs, we can't guarantee that Claude will request permission to take these actions, so exercise caution when using this mode.

<!-- para:0008 -->
Only allow Claude in Chrome to act without asking when:

<!-- para:0009 -->
You remain fully responsible for all actions Claude takes when using this mode.

<!-- para:0010 -->
There are some websites on which Claude requires approval for every action. If you navigate to one of these sites, a **Permission required** prompt will appear in the extension side panel where Claude will ask for permission before accessing the page or taking any action.

<!-- para:0011 -->
**"Allow this action"** grants permission for a single action only. Claude will ask again for the next action on this site. **This is the safest option when using the extension** as you can review and approve each of Claude's actions.**

<!-- para:0012 -->
**"Always allow actions on this site"** grants ongoing permission for this website. Claude can take multiple actions without asking each time. Only use this for sites you completely trust. Claude may take unintended actions across the website when granted this permission.**

<!-- para:0013 -->
**"Decline"** prevents Claude from taking this action. You can try a different approach or skip this task.**

<!-- para:0014 -->
When you choose "Always allow actions on this site," Claude still asks for your explicit approval before:

<!-- para:0015 -->
You can manage Claude's access to specific sites in the extension settings. Click the Claude extension icon, then the three dots in the upper right corner of the side panel. Select "Settings" → "Permissions" to:

<!-- para:0016 -->
Team and Enterprise admins can configure additional controls that affect permissions:

<!-- para:0017 -->
If you're unable to access a site with Claude, your organization may have restricted access. Contact your admin for more information, or see [Claude in Chrome Admin Controls](https://support.claude.com/en/articles/13065128-claude-for-chrome-admin-controls).

<!-- para:0018 -->
Regardless of your permission mode, Claude requires explicit user permission to perform any of the following actions:

<!-- para:0019 -->
To protect you, Claude is prohibited from taking following actions regardless of permissions:
