---
source_url: https://claude.com/resources/tutorials/how-to-use-the-clinical-trial-protocol-draft-generation-sample-skill-with-claude
title: "How to use the Clinical Trial Protocol Draft Generation sample skill with Claude"
section: resources
---

<!-- para:0001 -->
# How to use the Clinical Trial Protocol Draft Generation sample skill with Claude

<!-- para:0002 -->
- Category: Life Sciences
- Product
- Reading time Watch time5minmin
- Share [Copy link](https://claude.com/resources/tutorials/how-to-use-the-clinical-trial-protocol-draft-generation-sample-skill-with-claude#)https://claude.com/resources/tutorials/how-to-use-the-clinical-trial-protocol-draft-generation-sample-skill-with-claude

<!-- para:0003 -->
## **What is the Clinical Trial Protocol Draft Generation demo skill?**

<!-- para:0004 -->
The Clinical Trial Protocol Draft Generation demo skill digests initial documentation about a new medical device or investigational drug, and follows regulatory guidelines to generate an initial phase 2 or 3 trial protocol draft. It does this by:

<!-- para:0005 -->
1. Searching for relevant FDA guidances to determine classification & pathway
2. Reviews OpenFDA and Clinical Trials.gov for predicate devices and similar trials
3. Uses a statistically significant sample size calculator to the determine treatment arm
4. Drafts an initial full protocol following the formal FDA/NIH template for IND & IVD protocols

<!-- para:0006 -->
This is a sample skill that gives you a starting point to customize for your own use cases. Be sure to review the [README.md](https://github.com/anthropics/life-sciences/releases/download/v1.1.1/clinical-trial-protocol-skill-v1.1.1.zip) file before using the skill.

<!-- para:0007 -->
‍

<!-- para:0008 -->
## **Who should use the Clinical Trial Protocol Draft Generation demo skill?**

<!-- para:0009 -->
This skill is designed for regulatory affairs professionals at pharmaceutical and medical device companies who need to draft clinical trial protocols and determine their regulatory pathway without writing code from scratch.

<!-- para:0010 -->
## **How to access the skill in**[**Claude.ai**](http://claude.ai/)

<!-- para:0011 -->
**For Organization Owners (Team and Enterprise)**

<!-- para:0012 -->
1. Download the ZIP for the **clinical-trial-protocol-skill** [here](https://github.com/anthropics/life-sciences/releases/download/v1.1.1/clinical-trial-protocol-skill-v1.1.1.zip)‍
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
1. Download the ZIP file for **clinical-trial-protocol-skill** [here](https://github.com/anthropics/life-sciences/releases/download/v1.1.1/clinical-trial-protocol-skill-v1.1.1.zip)
2. Review the sample skill thoroughly and make edits and adjustments to fit your workflow
3. From [Claude.ai](http://claude.ai/), navigate to Settings > Capabilities > Skills (if Skills is not available, contact your team admin)
4. Click “Upload skill”
5. Upload the skill zip file

<!-- para:0016 -->
## **How to access the skill in Claude Code**

<!-- para:0017 -->
Command

<!-- para:0018 -->
`/plugin marketplace add anthropics/life-sciences`

<!-- para:0019 -->
`/plugin install clinical-trial-protocol@life-sciences`
