---
source_url: https://support.claude.com/en/articles/13837433-manage-cowork-plugins-for-your-organization
title: "Manage Cowork plugins for your organization"
section: articles
date: 2026-03-23
---

<!-- para:0001 -->
Plugin marketplaces allow Team and Enterprise plan owners to distribute curated plugins to everyone in their organization through Cowork. You create a marketplace, add plugins to it, and control exactly which plugins your team members can see and use.

<!-- para:0002 -->
**Requirements:** Cowork and Skills must both be enabled for your organization before you can use plugin marketplaces.**

<!-- para:0003 -->
There are two ways to add plugins to a marketplace:

<!-- para:0004 -->
You can use both approaches in parallel—for example, a GitHub-synced marketplace for your core plugins and a separate manual marketplace for ad-hoc tools.

<!-- para:0005 -->
If you upload a plugin with the same name as an existing one, it overwrites the previous version automatically—no need to delete the old one first.

<!-- para:0006 -->
GitHub syncing lets you manage plugins as code in a repository. When you push changes, you can trigger a sync to update your marketplace—either manually or automatically.

<!-- para:0007 -->
Your repository must be **private or internal**—public repos aren't allowed for organization marketplaces. Repos hosted on custom GitHub Enterprise Server instances aren't supported. Your repo must be hosted on github.com.

<!-- para:0008 -->
For details on plugin structure and formatting, see the **[plugin reference documentation](https://code.claude.com/docs/en/plugins-reference)**.

<!-- para:0009 -->
Additional resources:

<!-- para:0010 -->
Your personal GitHub token is verified to confirm you have access, then Cowork uses its GitHub App installation token for sync operations.

<!-- para:0011 -->
**Can't see your repo?** Make sure the Claude GitHub App is installed in that repository.**

<!-- para:0012 -->
An initial sync runs automatically when you connect a repository. After that, organization owners can opt-in to continued automatic updates per marketplace by going to **Organization settings > Plugins** (under **Libraries**), clicking the menu button in the upper right corner of the marketplace, then toggling "Sync automatically" on:

<!-- para:0013 -->
The GitHub marketplace will then be auto-synced whenever a PR is merged to that repo. You can also trigger syncs manually by clicking “Update” on the marketplace.

<!-- para:0014 -->
During a sync, Cowork compares the latest commit in your repo against the last-synced commit. If nothing has changed, the sync is skipped. If there are changes, Cowork reads the manifest, validates each plugin, and replaces all plugins in the marketplace with the current state of the repo. Syncs can take up to 30 minutes depending on the number of plugins.

<!-- para:0015 -->
Once your marketplace has plugins, you control how they're distributed using installation preferences. For each plugin, you can set one of four options:

<!-- para:0016 -->
Members browse available plugins through the **Browse plugins** modal in Cowork. Auto-installed plugins appear in their installed list automatically. Available plugins show up in the catalog for self-service installation.

<!-- para:0017 -->
Members can't edit organization-managed plugins, which prevents conflicting changes to shared tooling.

<!-- para:0018 -->
To update a plugin, upload a new ZIP file with the same plugin name. The new version overwrites the existing one automatically. Plugin names are the unique identifier — `legal` will always replace `legal`.

<!-- para:0019 -->
To remove a plugin, delete it from your marketplace in **Organization settings > Plugins**.

<!-- para:0020 -->
Push your changes to the connected repository, then go to **Organization settings > Plugins**, find your marketplace, and click "Update" to trigger a sync. Each sync replaces all plugins with the current state of the repo. Note that if an owner has enabled "Sync automatically" for the GitHub-synced marketplace, this will happen automatically after pushing changes to the repo.

<!-- para:0021 -->
To remove a plugin, delete it from the repository and trigger a sync.

<!-- para:0022 -->
Plugin names must use **lowercase words separated by hyphens** (for example, `deployment-tools`, not `Deployment Tools`). The following marketplace names are reserved and can't be used:

<!-- para:0023 -->
Names that impersonate official Anthropic marketplaces are also blocked.

<!-- para:0024 -->
Common causes: the file exceeds 50 MB, it isn't a valid ZIP file, or the marketplace has reached the 100-plugin limit. Check the file size and format, and remove unused plugins if you're at capacity.

<!-- para:0025 -->
Check the plugin's installation preference in your marketplace settings. If it's set to **Not available**, members won't see it. Also confirm that Cowork and Skills are both enabled for your organization.

<!-- para:0026 -->
Changes take effect on each member's next session or plugin refresh. If the update still isn't showing, confirm the upload succeeded by checking the plugin version in your marketplace.

<!-- para:0027 -->
One or more plugins in your repo is likely formatted incorrectly. Fix the formatting issue, push the update to GitHub, and trigger the sync again. For plugin structure requirements, see the **[plugin reference documentation](https://code.claude.com/docs/en/plugins-reference)**.

<!-- para:0028 -->
A failed GitHub sync can temporarily remove plugins from your marketplace. Fix the underlying issue, re-sync successfully, then verify that installation preferences are set correctly—they may have been reset.

<!-- para:0029 -->
Make sure the Cowork GitHub App is installed in that repository. Your personal GitHub token is checked first to confirm access, but the sync itself uses the GitHub App installation token.
