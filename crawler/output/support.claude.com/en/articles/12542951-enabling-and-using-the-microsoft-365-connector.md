---
source_url: https://support.claude.com/en/articles/12542951-enabling-and-using-the-microsoft-365-connector
title: "Enabling and using the Microsoft 365 connector"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This article explains how to connect Claude to Microsoft 365 using our pre-built MCP connector, allowing Claude to search, analyze, and access information across SharePoint, OneDrive, Outlook, and Teams.

<!-- para:0002 -->
With Microsoft 365 connected, Claude can:

<!-- para:0003 -->
Enabling the Microsoft 365 connector for your organization requires two separate setup phases with specific steps that must be completed by a Microsoft Entra ID Global Administrator, and a Claude Team or Enterprise plan Owner.

<!-- para:0004 -->
**Prerequisites for enablement:**

<!-- para:0005 -->
A Microsoft Entra Global Administrator must complete a one-time setup process before Claude Team and Enterprise plan users can connect to the Microsoft 365 connector.

<!-- para:0006 -->
**Automatic Setup through Auth Consent Flow (Recommended)**

<!-- para:0007 -->
This process triggers an auth consent flow when connecting to the Microsoft 365 connector for the first time as a Global Administrator.

<!-- para:0008 -->
**Steps:**

<!-- para:0009 -->
**1) Enable in Claude organization settings**

<!-- para:0010 -->
As an organization Owner and Microsoft Entra Global Administrator:

<!-- para:0011 -->
“Microsoft 365” will now appear in the list of Connectors at **[Settings > Connectors](https://claude.ai/settings/connectors)**.

<!-- para:0012 -->
**2) Enable in individual Claude Settings**

<!-- para:0013 -->
After completing the previous step on behalf of the Claude organization, the Microsoft Entra Global Administrator needs to connect to Microsoft 365 in their individual Claude user settings:

<!-- para:0014 -->
**Manual Setup in Microsoft Entra ID**

<!-- para:0015 -->
Alternatively, you can add the connector apps and grant admin pre-consent on behalf of the whole tenant in Microsoft Entra ID. This process manually achieves what is done above in the Automatic Setup through Auth Consent Flow section above. You can use this method if your Microsoft Entra Global Administrator is not a member of the Claude Team or Enterprise organization or to troubleshoot the app install and permissions setup in Microsoft Entra ID.

<!-- para:0016 -->
This process adds two service principals to Graph Explorer; each principal establishes a service-level identity for one of the two M365 MCP for Claude app registrations in your tenant, allowing them to access and interact with your organization's data and resources via the Microsoft Graph API.

<!-- para:0017 -->
**Steps:**

<!-- para:0018 -->
**1) Add the service principals**

<!-- para:0019 -->
Using[Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer), add both required service principals:

<!-- para:0020 -->
M365 MCP Client for Claude

<!-- para:0021 -->
POST[https://graph.microsoft.com/v1.0/servicePrincipals](https://graph.microsoft.com/v1.0/servicePrincipals)

<!-- para:0022 -->
{"appId":"08ad6f98-a4f8-4635-bb8d-f1a3044760f0"}

<!-- para:0023 -->
M365 MCP Server for Claude

<!-- para:0024 -->
POST[https://graph.microsoft.com/v1.0/servicePrincipals](https://graph.microsoft.com/v1.0/servicePrincipals)

<!-- para:0025 -->
{"appId":"07c030f6-5743-41b7-ba00-0a6e85f37c17"}

<!-- para:0026 -->
**2) Grant admin pre-consent**

<!-- para:0027 -->
Construct and visit the following URLs in your browser, replacing {your-tenant-id} with your organization's tenant ID:

<!-- para:0028 -->
**M365 MCP Client for Claude**

<!-- para:0029 -->
[https://login.microsoftonline.com/{your-tenant-id}/adminconsent?client_id=08ad6f98-a4f8-4635-bb8d-f1a3044760f0](https://login.microsoftonline.com/%7Byour-tenant-id%7D/adminconsent?client_id=08ad6f98-a4f8-4635-bb8d-f1a3044760f0)

<!-- para:0030 -->
**M365 MCP Server for Claude**

<!-- para:0031 -->
[https://login.microsoftonline.com/{your-tenant-id}/adminconsent?client_id=07c030f6-5743-41b7-ba00-0a6e85f37c17](https://login.microsoftonline.com/%7Byour-tenant-id%7D/adminconsent?client_id=07c030f6-5743-41b7-ba00-0a6e85f37c17)

<!-- para:0032 -->
When you visit each URL, you'll be prompted to consent to the delegated user permissions required by the integration on behalf of your organization.

<!-- para:0033 -->
**3) Enable in Claude organization settings**

<!-- para:0034 -->
After the Microsoft Entra Admin completes the admin consent process, an organization Owner needs to:

<!-- para:0035 -->
“Microsoft 365” will now appear in the list of Connectors at **[Settings > Connectors](https://claude.ai/settings/connectors)**.

<!-- para:0036 -->
**4) Enable in individual Claude Settings**

<!-- para:0037 -->
After completing the previous step on behalf of the organization, the Microsoft Entra Admin needs to connect to Microsoft 365 in their individual Claude user settings:

<!-- para:0038 -->
**5) Test the connector**

<!-- para:0039 -->
After you connect successfully, start a new chat with Claude and try making a simple request (e.g., “List all of my SharePoint docs”). If Claude can access the requested data using the Microsoft 365 connection, this confirms the connector is working. All Claude organization members can start authenticating with and using the Microsoft 365 connector.

<!-- para:0040 -->
Once enabled by an Owner, members can choose to connect Claude to Microsoft 365 in their settings.

<!-- para:0041 -->
**Steps:**

<!-- para:0042 -->
Ask Claude a question that requires accessing your Microsoft 365 data. Claude will automatically detect which tools it needs and retrieve the relevant information.

<!-- para:0043 -->
Claude will provide a response based on information retrieved from your Microsoft 365 environment, including relevant context and citations when applicable.

<!-- para:0044 -->
When you connect the Microsoft 365 integration, you'll be asked to grant several permissions that allow Claude to access your Microsoft 365 data on your behalf.

<!-- para:0045 -->
**Important to understand:**

<!-- para:0046 -->
During authentication, the Microsoft 365 connector requests the following permissions:

<!-- para:0047 -->
**Basic access**

<!-- para:0048 -->
**Email (Outlook)**

<!-- para:0049 -->
**Calendar**

<!-- para:0050 -->
**Teams Chat**

<!-- para:0051 -->
**Teams Channels**

<!-- para:0052 -->
**Meetings**

<!-- para:0053 -->
**Files (OneDrive and SharePoint)**

<!-- para:0054 -->
**User Directory**

<!-- para:0055 -->
These permissions allow Claude to do the following when prompted:

<!-- para:0056 -->
Additionally, the Microsoft 365 Connector searches SharePoint across the entire tenant using the permissions of the user. Site-specific search restriction is unsupported.

<!-- para:0057 -->
You can revoke these permissions as a user at any time by disconnecting the connector in your Claude settings, or as an organization by removing the connector in your Claude organization settings.

<!-- para:0058 -->
To limit which types of resources the connector is able to access, you can selectively revoke permissions from the default set of authorized scopes the connector uses to access the Microsoft Graph API.

<!-- para:0059 -->
To restore a revoked permission, follow the steps to grant admin pre-consent described in **[Phase 1: Initial Microsoft Admin Setup](https://support.claude.com/en/articles/12542951-enabling-and-using-the-microsoft-365-connector#h_f93cbae211)**. This will revert the permissions to the default state.

<!-- para:0060 -->
Read more here: **[Microsoft 365 Connector: Security Guide](https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide)**. ​

<!-- para:0061 -->
Check the following:

<!-- para:0062 -->
Tips to improve your search queries:

<!-- para:0063 -->
No. The current Microsoft 365 integration provides **read-only access**. Claude can search and analyze your data but cannot:

<!-- para:0064 -->
Yes, the Microsoft 365 Connector works well with **[Enterprise Search](https://support.claude.com/en/articles/12489464-using-enterprise-search)**. When enabled:

<!-- para:0065 -->
Yes, Claude can search all emails you have access to in Outlook, including archived messages, as long as they're accessible through your account.

<!-- para:0066 -->
Yes, Claude can search any SharePoint sites and shared drives you have permission to access. This includes:

<!-- para:0067 -->
Claude can only access Teams content that you have permission to view in Microsoft 365. If you're a member of a private channel, Claude can search for that content. If you're not a member, Claude cannot access it.

<!-- para:0068 -->
Be specific in your queries:

<!-- para:0069 -->
Yes. One of Claude's strengths is analyzing and summarizing complex communications. Try: "Summarize the email thread about the vendor selection process." Claude will read the thread and provide a concise summary with key points and decisions.

<!-- para:0070 -->
If a user without Microsoft Entra Global Administrator permissions attempts to connect their Microsoft 365 account, they will receive an error message indicating that an Administrator must grant app permissions before they can use the connector. The connection attempt will fail until a Microsoft Entra Global Administrator approves the necessary permissions as detailed above in Phase 1.
