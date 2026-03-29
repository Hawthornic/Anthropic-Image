---
source_url: https://support.claude.com/en/articles/12592343-enabling-and-using-the-desktop-extension-allowlist
title: "Enabling and using the desktop extension allowlist"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This article introduces a desktop extension allowlist that Team and Enterprise plan Owners can use to manage their organization’s access to extensions.

<!-- para:0002 -->
The desktop extension allowlist is disabled by default, so an organization Owner will need to switch it on manually. Note that **users will be able to access all desktop extensions in the registry until you enable the allowlist.**To prevent this, ensure you activate the allowlist to block all desktop extensions by default, then add only the extensions your team needs access to.

<!-- para:0003 -->
**To turn on the allowlist:**

<!-- para:0004 -->
Once the allowlist is enabled:

<!-- para:0005 -->
Note that the allowlist does not guard against individuals tampering with local MCP file contents after installation.

<!-- para:0006 -->
Consider completing the allowlist setup during off-hours to minimize disruption to existing users. If a user's installed extension is deleted while the allowlist is being configured, they will need to manually re-install the extension.

<!-- para:0007 -->
After enabling the allowlist, you can choose which extensions to allow:

<!-- para:0008 -->
If you want to remove an extension from the allowlist, click the “...” button and “Remove from allowlist.”

<!-- para:0009 -->
You can also upload custom extensions to deploy across your organization via Organization settings > Connectors > Desktop.

<!-- para:0010 -->
When you allowlist a custom extension, it's scoped to your specific organization and can't be used across other organizations. For more in-depth information about creating custom extensions with MCP Bundles (.mcpb), please refer to our **[desktop extension developer documentation](https://github.com/anthropics/mcpb)**.

<!-- para:0011 -->
We’ve also introduced the ability to update previously-installed custom extensions to new versions without having to remove and reinstall them.

<!-- para:0012 -->
You can update a new MCPB version by making changes to manifest.json, ensuring the version field for the update candidate is incremented from the current uploaded version, and that you leave the name value unchanged. Changing the name will create a new custom desktop extension rather than uploading a new version. Then navigate to the custom upload pane, select "Upload new version" via the kebab menu, and upload the new file.
