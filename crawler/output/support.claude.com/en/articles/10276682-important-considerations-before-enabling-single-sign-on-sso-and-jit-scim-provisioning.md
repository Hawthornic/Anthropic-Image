---
source_url: https://support.claude.com/en/articles/10276682-important-considerations-before-enabling-single-sign-on-sso-and-jit-scim-provisioning
title: "Important considerations before enabling single sign-on (SSO) and JIT/SCIM provisioning"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Before setting up SSO for your Claude or Claude Console organization, review this guide to understand key concepts, plan your approach, and complete any prerequisite steps.

<!-- para:0002 -->
Our single sign-on feature uses the concept of a "parent organization." This is an entity that stores SSO settings that can be shared across multiple Claude or Console organizations. Your plan type determines whether or not you have a parent organization by default:

<!-- para:0003 -->
You will need to check the parent organization dynamic depending on your plan:

<!-- para:0004 -->
Team or Enterprise organizations can invite other orgs to join an existing parent organization and share SSO configuration.

<!-- para:0005 -->
An organization Owner or Primary Owner needs to go to **[claude.ai/settings/join-proposal](https://claude.ai/settings/join-proposal)** to accept the merge.

<!-- para:0006 -->
Once a Console organization is merged, it will gain access to the **[Identity and access page](http://platform.claude.com/settings/identity)**, in the Organization settings, to configure SSO and provisioning settings.

<!-- para:0007 -->
You'll find settings you can use to configure SSO in the **Global access settings** section. This is where you configure the primary SSO connection and policies that apply across multiple joined Claude or Console organizations. While some settings in this section apply to all Claude and Console organizations that have joined the parent organization, those with a "This org only" label apply only to the specific organization you're currently viewing. This allows you to enable organization-specific features like group mappings.

<!-- para:0008 -->
Once your organization's domains are verified, owners will see a **Restrict organization creation** toggle under **Security** on the Identity and access organization settings page. Toggle this on to prevent users from creating new Claude or Console organizations—including personal accounts—using any of your verified domains.

<!-- para:0009 -->
Once SSO is configured, you can choose how users are provisioned to your organization.

<!-- para:0010 -->
For detailed information on how each provisioning method works, see **[Set up JIT or SCIM provisioning](https://support.claude.com/en/articles/13133195-set-up-jit-or-scim-provisioning)**.

<!-- para:0011 -->
After enabling SSO for your organization, there are two distinct scenarios to consider for users who have individual accounts associated with your verified company domain:

<!-- para:0012 -->
These users will maintain access to their existing free/Pro/Team/Max accounts. They will have the ability to toggle between the Team or Enterprise plan account and their previous accounts by clicking the profile icon with their initials in the bottom left corner.

<!-- para:0013 -->
To view or download information about your verified domains and their usage across Claude organizations:

<!-- para:0014 -->
Taking time to test, communicate, and plan before enabling domain capture and SSO will help ensure a successful transition and positive experience for your organization.

<!-- para:0015 -->
Once you've reviewed these considerations and completed any necessary prerequisite steps (such as merging organizations), proceed to **[Set up single sign-on (SSO)](https://support.claude.com/en/articles/13132885-set-up-single-sign-on-sso)** for detailed implementation instructions.
