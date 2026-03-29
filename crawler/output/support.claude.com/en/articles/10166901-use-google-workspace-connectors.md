---
source_url: https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
title: "Use Google Workspace connectors"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Connect your Gmail, Google Calendar, and Google Drive to Claude so you can search emails, manage your calendar, work with documents, and save files—all without leaving the conversation.

<!-- para:0002 -->
For Team and Enterprise plans, an Owner or Primary Owner must enable these connectors at the organization level before individual users can authenticate. For setup instructions, read **[Use connectors to extend Claude's capabilities](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities#h_17dd443beb)**.

<!-- para:0003 -->
Ask Claude a question that requires access to your Gmail, Calendar, or Drive. Claude automatically detects which tools it needs and uses them to respond. Each action Claude takes on your behalf requires your explicit approval.

<!-- para:0004 -->
Claude's response includes citations indicating which emails, calendar events, or documents were used as sources, with links to the originals when available. You can ask follow-up questions to dig deeper into any source.

<!-- para:0005 -->
You can add multiple files to a single chat to give Claude comprehensive context. The files must fit within the conversation's context window.

<!-- para:0006 -->
The Google Drive connector is only available when adding to **Files** in private projects. This option will be disabled for shared projects.

<!-- para:0007 -->
Google Docs added to chats and projects sync directly from Google Drive, so you're always working with the latest version.

<!-- para:0008 -->
You can enable or disable specific connectors from below the chat interface:

<!-- para:0009 -->
Enterprise users can enable Google Drive Cataloging to index their Drive content with RAG (Retrieval Augmented Generation). When enabled, Claude indexes your Google Drive documents to provide more accurate, contextual responses with direct citations to relevant sources — and reduces token usage by pulling only relevant content into your context.

<!-- para:0010 -->
If cataloging is turned off, Claude uses the Google APIs to search through your Drive data directly.

<!-- para:0011 -->
Google Docs (text extraction only, up to 10MB).

<!-- para:0012 -->
**For admins:**

<!-- para:0013 -->
**For individual users** (after an admin enables the feature):**

<!-- para:0014 -->
If this is your first time using this feature, you'll be redirected to Google to authenticate.

<!-- para:0015 -->
Once enabled, Claude indexes your Google Docs and uses that index during conversations to provide relevant context and citations. Claude periodically re-indexes documents that have changed and de-indexes documents that have been deleted. It may take several hours for Claude to recognize updates or deletions.

<!-- para:0016 -->
During authentication, Google's OAuth screen mentions email sending permissions. Claude only reads emails and creates drafts with your explicit approval. The send function is not enabled — all emails must be sent manually through your Gmail account.

<!-- para:0017 -->
If you see the error "*Please try again. You may need to reconnect with your Google Drive account,"*follow these steps:

<!-- para:0018 -->
If you're still having trouble, disconnect from your Google account settings at[**myaccount.google.com/connections**](https://myaccount.google.com/connections). Search for the Claude connection, click into the settings, and choose “Delete all connections.”

<!-- para:0019 -->
If your organization uses Google Workspace and the connectors aren’t working (you may see the message *“Access blocked: your institution's admin needs to review Claude for Google Drive"*), your Google Workspace admin may need to allow Claude as a trusted application:

<!-- para:0020 -->
The document continues to sync with the most up-to-date version in Google Drive.

<!-- para:0021 -->
Yes. You can add multiple Google Drive files to provide Claude with comprehensive context. The documents must fit within the conversation's context window.

<!-- para:0022 -->
You won't be able to view its contents in conversations where it was previously added. The document preview is removed, but the conversation history is maintained.

<!-- para:0023 -->
No. Claude extracts the main text content only and cannot see images, comments, or suggestions.

<!-- para:0024 -->
No. Claude can create email drafts, but all emails must be sent manually through your Gmail account.

<!-- para:0025 -->
On Team and Enterprise plans, Owners and Primary Owners can disable Google Workspace connectors for their organization in **[Organization settings > Connectors](https://claude.ai/admin-settings/connectors)**. Individual users can also disable specific tools from the chat interface.

<!-- para:0026 -->
Only you. Your index includes only documents you have access to, and no one else can access it—even members of the same organization. If you disconnect your Google account from Claude, your index is deleted.
