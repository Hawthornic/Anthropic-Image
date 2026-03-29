---
source_url: https://support.claude.com/en/articles/13133750-manage-members-on-team-and-enterprise-plans
title: "Manage members on Team and Enterprise plans"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
This guide covers how to add, remove, and manage the people on your Team or Enterprise plan.

<!-- para:0002 -->
For information on purchasing seats or adjusting your plan's seat allocation, see our guides for **[Team plans](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats)** and **[Enterprise plans](https://support.claude.com/en/articles/13393991-purchasing-and-managing-seats-on-enterprise-plans)**.

<!-- para:0003 -->
Admins and above can add members by following these steps:

<!-- para:0004 -->
This sends an email invitation to the person. The invitation expires after 21 days, so you'll need to re-invite them if they don't accept within that time period.

<!-- para:0005 -->
**Add multiple members at once:** You can invite multiple members by clicking "Bulk add" and typing or pasting email addresses separated by commas or new lines.**

<!-- para:0006 -->
Members can also join your organization on their own through organization discovery. When you enable discoverability, colleagues with a matching email domain can find your organization during signup and request to join—no invitation needed. You can configure whether they're added automatically or require your approval. See **[Find and join a Team or Enterprise organization](https://support.claude.com/en/articles/13566435-organization-discovery)** for details.

<!-- para:0007 -->
Admins and above can generate a shareable invite link and distribute it to teammates—for example, by posting it in a Slack channel, email thread, or team wiki—without needing to enter individual email addresses.

<!-- para:0008 -->
**Availability:**

<!-- para:0009 -->
To find and copy your invite link, navigate to **[Organization settings > Organization](https://claude.ai/admin-settings/organization)**. New members who join via link are assigned to the lowest available seat tier, defaulting to a standard seat if none are available.

<!-- para:0010 -->
Admins can disable the link at any time—this immediately invalidates all existing links. Regenerating the link also invalidates the previous one.

<!-- para:0011 -->
For more details on how the joining flow works, see **[Join an organization via invite link](https://support.claude.com/en/articles/13776697-join-an-organization-via-invite-link)**.

<!-- para:0012 -->
Organizations with single sign-on (SSO) configured can automate member provisioning. Learn more about **[setting up SSO](https://support.claude.com/en/articles/13132885-setting-up-single-sign-on-sso-for-claude-and-claude-console)**.

<!-- para:0013 -->
Organization members can invite teammates by email, even if they aren't admins. This makes it easier for your team to grow organically without requiring admin involvement for every new member.

<!-- para:0014 -->
Any member can access the invite flow from the account selector in Claude. They enter a teammate's email address and submit the invite. What happens next depends on your organization's new member approval setting:

<!-- para:0015 -->
Invites sent by members follow the same domain restrictions as other join methods — the invitee's email must match one of your organization's allowed domains.

<!-- para:0016 -->
Admins can enable or disable member-to-member invites from the admin settings. When disabled, only admins can send invitations. Invitees added through member invites are assigned the default member role and placed in the lowest available seat tier.

<!-- para:0017 -->
You can remove a member by navigating to **[Organization settings > Organization](https://claude.ai/admin-settings/organization)**, clicking the menu button to the right of the member, then selecting "Remove from team."

<!-- para:0018 -->
For Enterprise organizations using SCIM provisioning, members are automatically removed from Claude when they are removed from your Identity Provider.

<!-- para:0019 -->
When a member is removed:

<!-- para:0020 -->
Removing a member frees up their seat for reassignment, but does not automatically reduce your plan's total seat count. See our guides for **[Team plans](https://support.claude.com/en/articles/12004354-purchasing-and-managing-seats)** and **[Enterprise plans](https://support.claude.com/en/articles/13393991-purchasing-and-managing-seats-on-enterprise-plans)** for information on reducing seats.

<!-- para:0021 -->
Admins and above can export a CSV of your organization's current member list from your organization settings.

<!-- para:0022 -->
The export includes member details such as name, email address, role, and seat type. This is useful for auditing membership, reconciling seat usage, or maintaining an external record of your team.

<!-- para:0023 -->
To export:

<!-- para:0024 -->
You can resend an invite from **[Organization settings > Organization](https://claude.ai/admin-settings/organization)**. Find the member and select to resend the invite.

<!-- para:0025 -->
You can revoke a pending invite from **[Organization settings > Organization](https://claude.ai/admin-settings/organization)**. Find the member and select "Remove from team."

<!-- para:0026 -->
Yes. Once they join your team, they'll have both a personal account and a Team or Enterprise plan account. They can toggle between accounts through the menu by clicking their initials or name in the lower left corner.

<!-- para:0027 -->
To add a member that you previously removed, follow the same steps as adding a new member. Their account history will be maintained.

<!-- para:0028 -->
The current Primary Owner can transfer ownership by:

<!-- para:0029 -->
When Anthropic provides a new Enterprise organization and invites the Primary Owner, the same 21-day expiration period applies to that initial invitation. If your invitation has expired, please reach out to your account manager.
