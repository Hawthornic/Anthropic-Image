---
source_url: https://claude.com/resources/tutorials/how-to-use-the-prior-auth-review-sample-skill-with-claude-2ggy8
title: "How to use the Prior Auth Review sample skill with Claude"
section: resources
---

<!-- para:0001 -->
# How to use the Prior Auth Review sample skill with Claude

<!-- para:0002 -->
- Category: Healthcare
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/how-to-use-the-prior-auth-review-sample-skill-with-claude-2ggy8#)https://claude.com/resources/tutorials/how-to-use-the-prior-auth-review-sample-skill-with-claude-2ggy8

<!-- para:0003 -->
## **What is the Prior Auth Review sample skill?**

<!-- para:0004 -->
The Prior Authorization skill is a sample skill that digests request packet documentation and performs several initial checks to be verified by a human reviewer. These include:

<!-- para:0005 -->
- NPI Physician Registry
- ICD-10 Lookup
- CMS Coverage Database
- CPT Codes

<!-- para:0006 -->
It then extracts clinical data to summarize the argument for medical necessity and confirms all the required documentation is present.

<!-- para:0007 -->
This is a sample skill that gives you a starting point to customize for your own use cases. Be sure to review the [README.md](https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip)file before using the skill.

<!-- para:0008 -->
## **Who should use the Prior Auth Review sample skill?**

<!-- para:0009 -->
This skill is designed for payer clinical reviewers who need to significantly reduce the time to initial recommendation without writing code from scratch.

<!-- para:0010 -->
## **How to access the skill in**[**Claude.ai**](http://claude.ai/)

<!-- para:0011 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0012 -->
1. Download the ZIP for the **prior-auth-review-skill**[here](https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip)
2. Review the sample skill thoroughly and make edits and adjustments to fit your organization’s workflows
3. From [Claude.ai](http://claude.ai/), navigate to Admin settings > Capabilities > Skills
4. Make sure Skills is activated for your organization
5. Click “Organization skills library”
6. Click “+Add”
7. Upload the skill zip file

<!-- para:0013 -->
Learn about [provisioning and managing skills for your organization](https://support.claude.com/en/articles/13119606-provisioning-and-managing-skills-for-your-organization)

<!-- para:0014 -->
**For Individual Claude Users**

<!-- para:0015 -->
1. Download the ZIP file for the **prior-auth-review-skill**[here](https://github.com/anthropics/healthcare/releases/download/v1.0.0/prior-auth-review-skill-v1.0.0.zip)
2. Review the sample skill thoroughly and make edits and adjustments to fit your workflow
3. From [Claude.ai](http://claude.ai/), navigate to Settings > Capabilities > Skills (if Skills is not available, contact your team admin)
4. Click “Upload skill”
5. Upload the skill zip file

<!-- para:0016 -->
## **How to access the skill in Claude Code**

<!-- para:0017 -->
Command

<!-- para:0018 -->
`/plugin marketplace add anthropics/healthcare`

<!-- para:0019 -->
`/plugin install prior-auth-review@healthcare`
