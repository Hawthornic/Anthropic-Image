---
source_url: https://support.claude.com/en/articles/12622703-deploy-claude-desktop-for-windows
title: "Deploy Claude Desktop for Windows"
section: articles
date: 2026-03-25
---

<!-- para:0001 -->
Administrators on Team or Enterprise plans can deploy Claude Desktop automatically across their organization to manage installations and updates centrally. We offer MSIX packages for Windows deployments via Microsoft Intune, SCCM, Group Policy, or PowerShell, enabling secure, scalable distribution.

<!-- para:0002 -->
Claude Desktop for Windows requires the **[Virtual Machine Platform](https://support.microsoft.com/en-us/windows/enable-virtualization-on-windows-c5578302-6e43-4b4b-a449-8ced115f58e1)** to use Cowork. You can automate installation of this feature via most endpoint management solutions, but you may also run the following command to install it manually:

<!-- para:0003 -->
For manual installation on individual machines, use the following PowerShell commands:

<!-- para:0004 -->
For more details, see Microsoft's **[Add-AppxPackage](https://learn.microsoft.com/en-us/powershell/module/appx/add-appxpackage?view=windowsserver2022-ps)** documentation.

<!-- para:0005 -->
For more details, see Microsoft's **[Add-AppxProvisionedPackage](https://learn.microsoft.com/en-us/powershell/module/dism/add-appxprovisionedpackage?view=windowsserver2022-ps)** documentation.

<!-- para:0006 -->
Claude Desktop can be deployed through various enterprise software distribution services. Choose the method that aligns with your organization's existing infrastructure:

<!-- para:0007 -->
To configure Claude Desktop settings such as auto-updates, extensions, and MCP servers, see **[Enterprise configuration](https://support.claude.com/en/articles/12622667-enterprise-configuration)**.

<!-- para:0008 -->
By default, packaged apps may be restricted by AppLocker policies. Ensure your AppLocker rules allow MSIX packages, or add Claude Desktop to your allowed applications list. Consult your organization's security policies before making changes.
