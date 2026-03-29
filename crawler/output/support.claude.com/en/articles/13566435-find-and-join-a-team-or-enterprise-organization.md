---
source_url: https://support.claude.com/en/articles/13566435-find-and-join-a-team-or-enterprise-organization
title: "Find and join a Team or Enterprise organization"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Organization discovery allows you to find and join your company's existing Team or Enterprise plan organization when you start the sign-up flow with a work email address. Instead of creating a separate personal account, you can request to join—or be added automatically—depending on your organization's configuration.

<!-- para:0002 -->
Admins and above can manage organization discovery from **[Organization settings > Identity and access](https://claude.ai/admin-settings/identity)**.

<!-- para:0003 -->
To enable discoverability:

<!-- para:0004 -->
Admins can specify which email domains are allowed to discover and join the organization by clicking “+ Add domain” under **Domains** on the Identity and access page. The organization owner’s domain will appear on the **Domains** list automatically, but admins can configure additional allowed domains by adding them here, verifying them, and toggling **Discoverable** on. Personal email domains (like Gmail) and .edu domains can't be added to the allowed list.

<!-- para:0005 -->
Admins select how join requests are handled:

<!-- para:0006 -->
**Instant approval:** Users are added to the organization’s lowest available seat tier automatically when they ask to join. Billing begins as soon as a user joins—if the organization has no available seats, billing auto-expands and a new seat is purchased immediately.**

<!-- para:0007 -->
**Request + approve:** The admin reviews and approves each join request individually. Users aren't added to the organization until the admin approves. Billing begins when the request is approved—if no seats are available at that point, a new seat is purchased.**

<!-- para:0008 -->
This approval mode also applies to invitations sent by existing members of your organization. For additional details, see **[Manage members on Team and Enterprise plans](https://support.claude.com/en/articles/13133750-managing-members-on-team-and-enterprise-plans)**.

<!-- para:0009 -->
When someone signs up for Claude with a work email address that matches a discoverable organization, they'll see the option to join during the signup flow. They can choose to join or continue with a personal account.

<!-- para:0010 -->
If multiple organizations share the same email domain and are all discoverable, users will see all of them and can choose which one to join.

<!-- para:0011 -->
In addition to organization discovery, there are a few other ways to join a Team or Enterprise organization:

<!-- para:0012 -->
Organization discovery is not available for organizations with single sign-on enabled. If your organization uses SSO, the feature doesn't apply—your existing provisioning settings (including any just-in-time provisioning) remain unchanged.

<!-- para:0013 -->
If you'd like to enable organization discovery, SSO must be turned off first.
