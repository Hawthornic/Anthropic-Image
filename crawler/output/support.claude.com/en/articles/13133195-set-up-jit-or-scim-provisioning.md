---
source_url: https://support.claude.com/en/articles/13133195-set-up-jit-or-scim-provisioning
title: "Set up JIT or SCIM provisioning"
section: articles
date: 2026-03-27
---

<!-- para:0001 -->
This guide covers how to configure user provisioning and role assignment for your Claude or Claude Console organization.

<!-- para:0002 -->
**Before you begin:** This guide assumes you have already completed the steps in **[Set up single sign-on (SSO)](https://support.claude.com/en/articles/13132885-setting-up-single-sign-on-sso)**, including domain verification and SSO configuration with your Identity Provider (IdP), and you have an Admin (Console) or Owner (Claude) role.**

<!-- para:0003 -->
Once SSO is configured, you need to decide how users will be provisioned to your organization. This is controlled by the **Provisioning mode** setting in **[Organization](https://claude.ai/admin-settings/organization)****[settings > Identity and access](https://claude.ai/admin-settings/identity)**.

<!-- para:0004 -->
**Invite only** is the default. Users are added and removed directly in Claude or Console settings.**

<!-- para:0005 -->
**Approve automatically (JIT):** Users assigned to your Anthropic IdP app are automatically provisioned when they first log in. This option is available to all plans.**

<!-- para:0006 -->
**Sync with SCIM:** Users are automatically provisioned and deprovisioned based on assignments in your IdP, without requiring them to log in first. SCIM is available for Enterprise plans and Console organizations with their own parent organization or joined to an Enterprise parent organization. SCIM is not available for Team plans or Console organizations joined to a Team plan's parent organization.**

<!-- para:0007 -->
Use this table to help decide which provisioning mode is right for your organization:

<!-- para:0008 -->
Both JIT and SCIM can be combined with **Enable group mappings** to control role or seat tier assignment based on IdP group membership. If you select either of these options for your provisioning mode, **Enable group mappings** will appear within that section:

<!-- para:0009 -->
For information on purchasing seats or adjusting your plan's seat allocation, see our guides for **[Team plans](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats)** and **[Enterprise plans](https://support.claude.com/en/articles/13393991-purchasing-and-managing-seats-on-enterprise-plans)**.

<!-- para:0010 -->
If you chose SCIM as your provisioning mode, you need to establish the connection between your Identity Provider and Anthropic before enabling it.

<!-- para:0011 -->
**‼️ When you reach the IdP Group step, pause to review Steps 3 and 4 of this guide, alongside the other guides.**

<!-- para:0012 -->
For IdP-specific JIT / SCIM setup instructions, see:

<!-- para:0013 -->
Once your IdP is connected, continue to Step 3.

<!-- para:0014 -->
Verify you have enough seats purchased and available to add members to your org.

<!-- para:0015 -->
This happens when the person configuring group mappings isn't assigned to a group mapped to an Admin or Owner role, causing their permissions to be downgraded to User.

<!-- para:0016 -->
To fix this:

<!-- para:0017 -->
**Option 1: Have another Admin/Owner reinstate your role**

<!-- para:0018 -->
**Option 2: Fix via your Identity Provider**
