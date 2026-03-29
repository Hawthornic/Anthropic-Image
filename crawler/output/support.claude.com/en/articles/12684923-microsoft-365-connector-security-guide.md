---
source_url: https://support.claude.com/en/articles/12684923-microsoft-365-connector-security-guide
title: "Microsoft 365 Connector: Security Guide"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
The Microsoft 365 Connector is an **Anthropic-hosted integration** that enables Claude to securely access Microsoft 365 services (Outlook, SharePoint, OneDrive, Teams) through user-delegated permissions. Anthropic has completed Microsoft's publisher verification process, associating our verified Microsoft Partner Network account with this application to confirm our organizational identity.

<!-- para:0002 -->
The connector operates as a **secure proxy**, and your Microsoft 365 documents, emails, and files remain in your tenant. The connector only retrieves data on-demand during active queries and does not cache file content. Credentials are encrypted and managed by Anthropic's backend infrastructure. The MCP server itself does not store or manage these credentials. Microsoft's Azure SDK handles the On-Behalf-Of token exchange and caching on a per-user basis for accessing the Graph API.

<!-- para:0003 -->
The connector provides **multiple layers of access control** to address your security requirements. For detailed information on administration of the Microsoft 365 Connector see **[Enabling and using the Microsoft 365 connector](https://support.claude.com/en/articles/12542951-enabling-and-using-the-microsoft-365-connector)**.

<!-- para:0004 -->
**1. Organization-level gating**

<!-- para:0005 -->
Access to the connector for Team and Enterprise plan users requires a two-step approval process. First, owners must explicitly enable the Microsoft 365 connector in Claude organization settings by navigating to Organization settings → Connectors → Browse connectors → Add "Microsoft 365". Until this approval is granted, users have no access.

<!-- para:0006 -->
Second, after the Owner enables the connector, a Microsoft Entra Global Administrator must complete individual authentication and grant consent on behalf of the whole organization before any team members can connect.

<!-- para:0007 -->
**2. Microsoft Entra Admin pre-consent requirement**

<!-- para:0008 -->
Before users can access the connector, a Microsoft Entra Admin must complete a one-time setup, which will:

<!-- para:0009 -->
**3. Granular permission revocation**

<!-- para:0010 -->
You can selectively disable specific capabilities via Microsoft Entra Admin Center. For example:

<!-- para:0011 -->
Changes take effect immediately for all users in your organization. Note that users can also choose to disable capabilities that they have permission to use during a chat or session by selectively toggling off the connector’s tools.

<!-- para:0012 -->
**4. Microsoft conditional access integration**

<!-- para:0013 -->
The connector fully supports your existing Entra (Azure AD) policies:

<!-- para:0014 -->
**5. User-level permissions**

<!-- para:0015 -->
**6. Token management**

<!-- para:0016 -->
The connector provides **read-only** access to:

<!-- para:0017 -->
**Basic permissions**

<!-- para:0018 -->
**Mail permissions**

<!-- para:0019 -->
**Calendar permissions**

<!-- para:0020 -->
**User directory**

<!-- para:0021 -->
**Chat permissions**

<!-- para:0022 -->
**Channel permissions**

<!-- para:0023 -->
**Meeting permissions**

<!-- para:0024 -->
**Files permissions**

<!-- para:0025 -->
**Sites permissions**

<!-- para:0026 -->
A: Yes. The recommended approach is to use app assignment to restrict who can use the connector:

<!-- para:0027 -->
**A**: Multi-tenant isolation ensures complete separation:**

<!-- para:0028 -->
**A**: The connector validates identity during authentication:**

<!-- para:0029 -->
**A:** Yes, audit logging is available for your compliance needs. All Graph API calls made by the connector are logged in your organization's Microsoft 365 audit log, which you can access through the M365 Compliance Center. These logs show the timestamp, user, operation performed, and resource accessed, with retention periods matching your Microsoft 365 audit policy. Additionally, Anthropic logs authentication and tool execution events.**

<!-- para:0030 -->
**A**: There are multiple revocation methods:**

<!-- para:0031 -->
**A:** Anthropic has the following certifications:**
