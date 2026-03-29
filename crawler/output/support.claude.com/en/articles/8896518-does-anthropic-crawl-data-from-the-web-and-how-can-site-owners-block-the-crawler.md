---
source_url: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
title: "Does Anthropic crawl data from the web, and how can site owners block the crawler?"
section: articles
date: 2026-03-27
---

<!-- para:0001 -->
As per industry standard, Anthropic uses a variety of robots to gather data from the public web for model development, to search the web, and to retrieve web content at users’ direction. Anthropic uses different robots to enable website owner transparency and choice. Below is information on the three robots that Anthropic uses and how to set your site preferences to enable those you want to access your content and limit those you don’t.

<!-- para:0002 -->
As part of our mission to build safe and reliable frontier systems and advance the field of responsible AI development, we’re sharing the principles by which we collect data as well as instructions on how to opt out of our crawling going forward:

<!-- para:0003 -->
To limit crawling activity, we support the non-standard Crawl-delay extension to robots.txt. An example of this might be:

<!-- para:0004 -->
User-agent: ClaudeBot

<!-- para:0005 -->
Crawl-delay: 1

<!-- para:0006 -->
To block a Bot from your entire website, add this to the robots.txt file in your top-level directory. Please do this for every subdomain that you wish to opt out from. An example of this is:

<!-- para:0007 -->
User-agent: ClaudeBot

<!-- para:0008 -->
Disallow: /

<!-- para:0009 -->
Opting out of being crawled by Anthropic Bots requires modifying the robots.txt file in the manner above. Alternate methods like blocking IP address(es) from which Anthropic Bots operates may not work correctly or persistently guarantee an opt-out, as doing so impedes our ability to read your robots.txt file. Additionally, we do not currently publish IP ranges, as we use service provider public IPs. This may change in the future.

<!-- para:0010 -->
You can learn more about our data handling practices and commitments at our[Help Center](https://support.anthropic.com/en/collections/4078534-privacy-legal). If you have further questions, or believe that our Bots may be malfunctioning, please reach out to [claudebot@anthropic.com](mailto:claudebot@anthropic.com). Please reach out from an email that includes the domain you are contacting us about, as it is otherwise difficult to verify reports.
