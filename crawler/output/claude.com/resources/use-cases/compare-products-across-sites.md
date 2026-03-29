---
source_url: https://claude.com/resources/use-cases/compare-products-across-sites
title: "Compare products across sites"
section: resources
---

<!-- para:0001 -->
# Compare products across sites

<!-- para:0002 -->
- Author Anthropic
- Category: Claude in Chrome
- Model Haiku 4.5
- Features Browser Use
- Share [Copy link](https://claude.com/resources/use-cases/compare-products-across-sites#)https://claude.com/resources/use-case/compare-products-across-sites

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
You've got four browser tabs open with different laptops—or TVs, or vacuums, or whatever you're comparing. Each site shows specs differently: one says "RAM," another says "Memory," a third buries it in a collapsible section. You're switching back and forth, trying to remember which one had better battery life. Claude in Chrome can read each product page, pull the specs, normalize the labels, and build a comparison table in Google Docs.

<!-- para:0005 -->
Open the product pages you want to compare. Tell Claude which specs matter to you, and it handles the rest.

<!-- para:0006 -->
I'm trying to decide between a few laptops and I have the product pages open in different tabs. Can you look at each one, pull out the specs, and put them in a Google Doc so I can compare them side by side?

<!-- para:0007 -->
I care most about: processor, RAM, storage, screen size, battery life, and weight. Let me know which one wins on each category.

<!-- para:0008 -->
## Give Claude context

<!-- para:0009 -->
Claude reads directly from the product pages you have open—switching between tabs to extract the specs, then creating a spreadsheet with everything normalized into consistent columns.

<!-- para:0010 -->
## Required context

<!-- para:0011 -->
Tell Claude which products you're wanting to compare or open the product pages in separate browser tabs. Log into Google Docs so Claude can draft the comparison there. Claude navigates between tabs on its own—you just need everything accessible in your browser.

<!-- para:0012 -->
If you're comparing several products, consider telling Claude which specs matter most upfront. Otherwise it will pull everything it finds, which can make the spreadsheet wider than you need.

<!-- para:0013 -->
## Optional context

<!-- para:0014 -->
## What Claude creates

<!-- para:0015 -->
Claude analyzes and extracts information from across tabs, drafting a comparison doc that highlights which product wins each category, and gives a quick recommendation.

<!-- para:0016 -->
**4 Laptops Compared**

<!-- para:0017 -->
**Spreadsheet created**

<!-- para:0018 -->
I found these products across your open tabs:

<!-- para:0019 -->
- Dell XPS 15 (dell.com) — $1,499
- Mac Book Pro 14" (apple.com) — $1,999
- Lenovo Think Pad X1 Carbon (lenovo.com) — $1,649
- HP Spectre x360 (hp.com) — $1,399

<!-- para:0020 -->
**Spec Comparison**

<!-- para:0021 -->
Here's the comparison based on the specs you care about:

<!-- para:0022 -->
Price - Dell XPS 15: $1,499 - Mac Book Pro 14": $1,999 - Think Pad X1: $1,649 - HP Spectre: $1,399 *- Winner: HP Spectre*

<!-- para:0023 -->
Processor - Dell XPS 15: Intel i7-13700H - Mac Book Pro 14": Apple M3 Pro - Think Pad X1: Intel i7-1365U - HP Spectre: Intel i7-1360P *- Winner: Mac Book (M3 Pro)*

<!-- para:0024 -->
RAM - Dell XPS 15: 16 GB - Mac Book Pro 14": 18 GB - Think Pad X1: 16 GB - HP Spectre: 16 GB *- Winner: Mac Book (18 GB)*

<!-- para:0025 -->
Storage - Dell XPS 15: 512 GB SSD - Mac Book Pro 14": 512 GB SSD - Think Pad X1: 512 GB SSD - HP Spectre: 1 TB SSD -*Winner: HP Spectre (1 TB)*

<!-- para:0026 -->
Screen - Dell XPS 15: 15.6" OLED - Mac Book Pro 14": 14.2" Liquid Retina - Think Pad X1: 14" IPS - HP Spectre: 13.5" OLED *- Winner: Dell (15.6" OLED)*

<!-- para:0027 -->
Battery - Dell XPS 15: 13 hours - Mac Book Pro 14": 17 hours - Think Pad X1: 15 hours - HP Spectre: 12 hours *- Winner: Mac Book (17 hrs)*

<!-- para:0028 -->
Weight - Dell XPS 15: 4.2 lbs - Mac Book Pro 14": 3.4 lbs - Think Pad X1: 2.48 lbs - HP Spectre: 3.01 lbs *- Winner: Think Pad (2.48 lbs)*

<!-- para:0029 -->
**Quick Notes**

<!-- para:0030 -->
- Lenovo listed battery as "up to 15 hours" and HP said "12 hrs mixed use"—I normalized both to comparable estimates
- Dell's page said "Memory" instead of RAM; HP buried it in the "Tech Specs" accordion
- The Intel laptops have upgradeable RAM (user-accessible slots); the Mac Book's 18GB is soldered and fixed
- The Think Pad keyboard is consistently rated best-in-class if you type a lot—worth considering beyond just specs

<!-- para:0031 -->
I've created the comparison in Google Sheets with conditional formatting highlighting the winner in each row.

<!-- para:0032 -->
**Bottom Line**

<!-- para:0033 -->
The Mac Book wins the most categories (processor, RAM, battery) but costs $350–600 more than the others.

<!-- para:0034 -->
- If portability is your priority: The Think Pad is the clear choice—it's nearly 2 lbs lighter and $350 less than the Mac Book.
- If you want the best performance and battery regardless of price: The Mac Book is hard to beat.

<!-- para:0035 -->
I can also pull real-world battery tests from reviews if you want—manufacturer claims are often optimistic.

<!-- para:0036 -->
## Follow up prompts

<!-- para:0037 -->
### Add another option

<!-- para:0038 -->
Expand your comparison as you find more candidates. Claude adds new products to the existing doc without starting over.

<!-- para:0039 -->
I just found one more laptop option. Can you add it to the doc and update the comparison?

<!-- para:0040 -->
### Check reviews for the top pick

<!-- para:0041 -->
Before deciding, see what actual buyers say. Claude can scan reviews and summarize common praise and complaints.

<!-- para:0042 -->
The Mac Book looks like the best specs, but what are people saying about it? Can you check reviews and tell me if there are any common complaints I should know about?

<!-- para:0043 -->
### Find the best price

<!-- para:0044 -->
Once you've picked a winner, Claude can check multiple retailers to find the lowest current price.

<!-- para:0045 -->
I think I want the Mac Book Pro. Can you check a few sites and find where it's cheapest right now?

<!-- para:0046 -->
## Tricks, tips, and troubleshooting

<!-- para:0047 -->
### Drag tabs into Claude's tab group

<!-- para:0048 -->
If you already have relevant product page tabs open, you can drag them into Claude's designated tab group. You'll see a banner highlighting the group of tabs that Claude is active in. Claude can read and work across all tabs in the group simultaneously—no tab-switching required. Before visiting new sites, Claude asks for permission. You can grant site-level permissions for websites you trust, allowing Claude to work without repeated approvals on those specific domains.

<!-- para:0049 -->
### Save your comparison template as a shortcut

<!-- para:0050 -->
If you research products regularly, save your workflow as a shortcut by clicking on the shortcut icon below a previous prompt. Next time you're comparing options, just type "/" and select the shortcut for Claude to follow the same directions.

<!-- para:0051 -->
## Ready to try for yourself?
