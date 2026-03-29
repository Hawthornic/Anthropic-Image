---
source_url: https://claude.com/blog/claude-for-chrome
title: "Piloting Claude in Chrome"
section: blog
date: 2025-08-25
---

<!-- para:0001 -->
***Update: Now available to Pro, Team, and Enterprise plans****(Dec 18, 2025)****

<!-- para:0002 -->
After months of real-world testing, we're ready to expand to all paid plans. We've also shipped our most requested feature: an integration for **Claude Code**. Build in your terminal, verify in your browser, and debug with Claude reading console errors and DOM state directly.

<!-- para:0003 -->
**For Teams and Enterprise: ** Admins can enable or disable the extension org-wide and configure site allowlists and blocklists.**

<!-- para:0004 -->
‍

<!-- para:0005 -->
***Update: Now available to all Max plan subscribers****(Nov 24, 2025)****

<!-- para:0006 -->
*After three months of testing,*[*Claude in Chrome*](https://claude.ai/chrome)*is now available in beta to all Max plan subscribers. Since the research preview, we've shipped major updates including scheduled tasks, multi-tab workflows, and smarter navigation on sites you use every day. Read our*[*release notes*](https://support.claude.com/en/articles/12306336-claude-for-chrome-release-notes)*for the full list of updates, and our*[*safety blog*](http://anthropic.com/research/prompt-injection-defenses)*for details on prompt injection defenses and learnings from the pilot.*

<!-- para:0007 -->
We've spent recent months connecting Claude to your calendar, documents, and many other pieces of software. The next logical step is letting Claude work directly in your browser.

<!-- para:0008 -->
We view browser-using AI as inevitable: so much work happens in browsers that giving Claude the ability to see what you're looking at, click buttons, and fill forms will make it substantially more useful.

<!-- para:0009 -->
But browser-using AI brings safety and security challenges that need stronger safeguards. Getting real-world feedback from trusted partners on uses, shortcomings, and safety issues lets us build robust classifiers and teach future models to avoid undesirable behaviors. This ensures that as capabilities advance, browser safety keeps pace.

<!-- para:0010 -->
Browser-using agents powered by frontier models are already emerging, making this work especially urgent. By solving safety challenges, we can better protect Claude users and share what we learn with anyone building a browser-using agent on our API.

<!-- para:0011 -->
We’re starting with controlled testing: **a Claude extension for Chrome where trusted users can instruct Claude to take actions on their behalf within the browser.** We're piloting with 1,000 Max plan users—[join the waitlist](http://claude.ai/chrome)—to learn as much as we can. We'll gradually expand access as we develop stronger safety measures and build confidence through this limited preview.

<!-- para:0012 -->
### Considerations for browser-using AI

<!-- para:0013 -->
Within Anthropic, we've seen appreciable improvements using early versions of Claude in Chrome to manage calendars, schedule meetings, draft email responses, handle routine expense reports, and test new website features.

<!-- para:0014 -->
However, some vulnerabilities remain to be fixed before we can make Claude in Chrome generally available. Just as people encounter phishing attempts in their inboxes, browser-using AIs face prompt injection attacks—where malicious actors hide instructions in websites, emails, or documents to trick AIs into harmful actions without users' knowledge (like hidden text saying "disregard previous instructions and do [malicious action] instead").

<!-- para:0015 -->
Prompt injection attacks can cause AIs to delete files, steal data, or make financial transactions. This isn't speculation: we’ve run “red-teaming” experiments to test Claude in Chrome and, without mitigations, we’ve found some concerning results.

<!-- para:0016 -->
We conducted extensive adversarial prompt injection testing, evaluating 123 test cases representing 29 different attack scenarios. Browser use without our safety mitigations showed a 23.6% attack success rate when deliberately targeted by malicious actors.

<!-- para:0017 -->
One example of a successful attack—before our new defenses were applied—was a malicious email claiming that, for security reasons, emails needed to be deleted. When processing the inbox, Claude followed these instructions to delete the user’s emails without confirmation.

<!-- para:0018 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68e95d90c3728899c99ce194_5e46f0fa8e0ed4a6d71333dba95e1ff6aa64c5b1-1920x1030.png)

Claude encounters the malicious email, which mimics an employer asking for emails to be deleted for "mailbox hygiene,"and claims "no additional confirmation required."

<!-- para:0019 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68e95d91c3728899c99ce199_5169a802140e293fdbc96706b4eb73e948084574-1920x1030.png)

Claude proceeds to act on the instructions without confirmation, selecting and deleting the user's emails "as requested by the security team."

<!-- para:0020 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68e95d91c3728899c99ce1aa_d2a23a7e8cd07f47eda84ac44135f770d624915f-1920x1030.png)

Our new mitigations successfully defend against this particular attack. Claude recognizes that "this is a suspicious security incident email that appears to be a phishing attempt," and does not act on it.

<!-- para:0021 -->
As we’ll explain in the next section, we've already implemented several defenses that significantly reduce the attack success rate—though there’s still work to do in uncovering novel attack vectors.

<!-- para:0022 -->
### Current defenses

<!-- para:0023 -->
The first line of defense against prompt injection attacks is *permissions*. Users maintain control over what Claude in Chrome can access and do:

<!-- para:0024 -->
- **Site-level permissions**: Users can grant or revoke Claude's access to specific websites at any time in the Settings.
- **Action confirmations**: Claude asks users before taking high-risk actions like publishing, purchasing, or sharing personal data. Even when users opt into our experimental “autonomous mode,” Claude still maintains certain safeguards for highly sensitive actions (Note: all red-teaming and safety evaluations were conducted in autonomous mode).

<!-- para:0025 -->
We’ve also built additional safeguards in line with Anthropic’s [trustworthy agents](https://www.anthropic.com/news/our-framework-for-developing-safe-and-trustworthy-agents) principles. First, we’ve improved our system prompts—the general instructions Claude receives before specific instructions from users—to direct Claude on how to handle sensitive data and respond to requests to take sensitive actions.

<!-- para:0026 -->
Additionally, we’ve blocked Claude from using websites from certain high-risk categories such as financial services, adult content, and pirated content. And we’ve begun to build and test advanced classifiers to detect suspicious instruction patterns and unusual data access requests—even when they arise in seemingly legitimate contexts.

<!-- para:0027 -->
When we added safety mitigations to autonomous mode, we reduced the attack success rate of 23.6% to 11.2%, which represents a meaningful improvement over our existing Computer Use capability (where Claude could see the user’s screen but without the browser interface that we’re introducing today).

<!-- para:0028 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68e95d91c3728899c99ce19d_b88d1e1c0c196dd012a7d44c5ae8d255d8a20822-3840x2160.png)

Prompt injection attack success rates across three scenarios: our older computer use capability, our new browser use product with only previous safety mitigations, and our new browser use product with new mitigations (lower scores are better). Our safety improvements reduced browser attack success rates below computer use levels.

<!-- para:0029 -->
We also conducted special red-teaming and mitigations focused on new attacks specific to the browser, such as hidden malicious form fields in a webpage’s Document Object Model (DOM) invisible to humans, and other hard-to-catch injections such as through the URL text and tab title that only an agent might see. On a “challenge” set of four browser-specific attack types, our new mitigations were able to reduce attack success rate from 35.7% to 0%.

<!-- para:0030 -->
Before we make Claude in Chrome more widely available, we want to expand the universe of attacks we’re thinking about and learn how to get these percentages much closer to zero, by understanding more about the current threats as well as those that might appear in the future.

<!-- para:0031 -->
### Taking part

<!-- para:0032 -->
Internal testing can’t replicate the full complexity of how people browse in the real world: the specific requests they make, the websites they visit, and how malicious content appears in practice. New forms of prompt injection attacks are also constantly being developed by malicious actors. This research preview allows us to partner with trusted users in authentic conditions, revealing which of our current protections work, and which need work.

<!-- para:0033 -->
We'll use insights from the pilot to refine our prompt injection classifiers and our underlying models. By uncovering real-world examples of unsafe behavior and new attack patterns that aren’t present in controlled tests, we’ll teach our models to recognize the attacks and account for the related behaviors, and ensure that safety classifiers will pick up anything that the model itself misses. We’ll also develop more sophisticated permission controls based on what we learn about how users want to work with Claude in their browsers.

<!-- para:0034 -->
For the pilot, we’re looking for trusted testers who are comfortable with Claude taking actions in Chrome on their behalf, and who don’t have setups that are safety-critical or otherwise sensitive.

<!-- para:0035 -->
**If you’d like to take part, you can join the Claude in Chrome research preview waitlist at**[**claude.ai/chrome**](http://claude.ai/chrome)**.**Once you have access, you can install the extension from the Chrome Web Store and authenticate with your Claude credentials.**

<!-- para:0036 -->
We recommend starting with trusted sites—always be mindful of the data that’s visible to Claude—and avoiding use of Claude in Chrome for sites that involve financial, legal, medical, or other types of sensitive information. You can find a detailed safety guide [in our Help Center](https://support.anthropic.com/en/articles/12012173-getting-started-with-claude-for-chrome).

<!-- para:0037 -->
We hope that you’ll share your feedback to help us continue to improve both the capabilities and safeguards for Claude in Chrome—and help us take an important step towards a fundamentally new way to integrate AI into our lives.
