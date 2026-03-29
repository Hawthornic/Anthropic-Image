---
source_url: https://support.claude.com/en/articles/13132885-set-up-single-sign-on-sso
title: "Set up single sign-on (SSO)"
section: articles
date: 2026-03-18
---

<!-- para:0001 -->
This guide covers the steps to configure SSO for Team and Enterprise plans, and Claude Console organizations.

<!-- para:0002 -->
Before proceeding with SSO setup, complete the following:

<!-- para:0003 -->
**Review the considerations guide:** Read **[Important considerations before enabling single sign-on (SSO) and JIT/SCIM provisioning](https://support.claude.com/en/articles/10276682-important-considerations-before-enabling-single-sign-on-sso-and-jit-scim-provisioning)** to understand parent organizations, determine your setup path, and complete any prerequisite steps such as merging organizations.**

<!-- para:0004 -->
**Confirm you have the required role:**

<!-- para:0005 -->
**Confirm you have access to the following:**

<!-- para:0006 -->
Please contact your organization's IT Administrator if you do not have permissions to manage Claude or company DNS settings.

<!-- para:0007 -->
Domain verification proves that you own your company's domain. Once verified, you can configure SSO for accounts with your company's domain.

<!-- para:0008 -->
You can verify multiple domains for a single organization, but all domains must be managed through a single IdP. We don't support verifying domains from separate IdPs within the same organization.

<!-- para:0009 -->
For IdP-specific setup instructions, see:

<!-- para:0010 -->
You can now choose to toggle on **Require SSO for Console** and/or **Require SSO for Claude,** on the Identity and access page, under the **Global access settings** section:

<!-- para:0011 -->
When SSO is required, users must use the “Continue with SSO” option to access Claude/Console. When SSO is not required, they will have the option to choose “Continue with SSO” or “Continue with email.”

<!-- para:0012 -->
Before you decide, review **[What happens to existing users when SSO is enabled](https://support.claude.com/en/articles/10276682-important-considerations-before-enabling-single-sign-on-sso-and-jit-scim-provisioning#h_644f467167)**.

<!-- para:0013 -->
Once SSO is enabled, you need to decide how users will be added to your organization. This is controlled by the **Provisioning mode** setting in the **Global access settings**section of your Identity and access settings.

<!-- para:0014 -->
**Invite only** is the default. Users are added and removed directly in your Claude or Console settings. Please see **[Manage members on Team and Enterprise plans](https://support.claude.com/en/articles/13133750-managing-members-on-team-and-enterprise-plans)**.**

<!-- para:0015 -->
**JIT (Just-in-Time) provisioning** can be enabled to automatically provision users when they first log in. By default, users assigned to your Anthropic IdP app first login, they will receive the User role. This is the simplest automated option and requires no additional configuration beyond selecting "Approve automatically (JIT)" as your provisioning mode.**

<!-- para:0016 -->
For more control over provisioning, see **[Set up JIT or SCIM provisioning](https://support.claude.com/en/articles/13133195-setting-up-jit-or-scim-provisioning)**. You'll want to review this guide if you need to:

<!-- para:0017 -->
When your Identity Provider's X.509 signing certificate expires or is rotated, you'll need to update it in Claude or Console to maintain SSO functionality.

<!-- para:0018 -->
You can toggle **Require SSO for Claude**or **Require SSO for Console** off at any time. This will make SSO optional for all users.

<!-- para:0019 -->
To fully disconnect SSO, click “Manage SSO” then “Reset.” This will end all users’ sessions and require them to sign back in via email login link.
