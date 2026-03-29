---
source_url: https://claude.com/resources/use-cases/reconcile-transactions-across-your-accounts
title: "Reconcile transactions across your accounts"
section: resources
---

<!-- para:0001 -->
# Reconcile transactions across your accounts

<!-- para:0002 -->
- Author Anthropic
- Category: Finance
- Model Sonnet 4.5
- Features Cowork
- Share [Copy link](https://claude.com/resources/use-cases/reconcile-transactions-across-your-accounts#)https://claude.com/resources/use-case/reconcile-transactions-across-your-accounts

<!-- para:0003 -->
## Describe the task

<!-- para:0004 -->
In Cowork, Claude reads your bank statements and chart of accounts from a folder, then cross-references every transaction against the source documents.

<!-- para:0005 -->
Focus your prompt on what you need back: a reconciliation report, correcting journal entries, or both. Claude handles the matching while you work on something else.

<!-- para:0006 -->
I need to reconcile my January 2024 bank statement. I've uploaded my checking account statement export and my current chart of accounts.

<!-- para:0007 -->
Can you analyze the transactions, match them to the right accounts, and flag anything that doesn't line up? If there are discrepancies, I'd love journal entries to fix them.

<!-- para:0008 -->
## Give Claude context

<!-- para:0009 -->
[Cowork](https://claude.com/resources/tutorials/claude-cowork-a-research-preview) is a workspace in [Claude Desktop](https://claude.com/download) where Claude works directly with your local files. It cross-references transactions across your bank statements and chart of accounts and identifies what's off.

<!-- para:0010 -->
**What to expect: ** After your initial prompt in Cowork, Claude may ask you clarifying questions about your accounts, then build a plan you can review in the sidebar. This helps it reconcile more thoroughly and produce a more complete output.**

<!-- para:0011 -->
## Required context

<!-- para:0012 -->
To get started:

<!-- para:0013 -->
- Download [Claude Desktop](https://claude.com/download) and start a Cowork session
- Select ***Work in a folder*** in the chat bar to give Cowork access to the folder with your financial files, or use the ***+*** button to add individual files

<!-- para:0014 -->
## Optional context

<!-- para:0015 -->
## What Claude creates

<!-- para:0016 -->
Claude analyzes both files, matches transactions to accounts, and surfaces exactly what needs fixing. The response shows the reconciliation logic, specific discrepancies found, and correctly-formatted journal entries ready for review.

<!-- para:0017 -->
#### Bank Statement Summary

<!-- para:0018 -->
I've analyzed your January 2024 checking account statement:

<!-- para:0019 -->
- Total transactions: 147
- Total deposits: $45,230.00
- Total withdrawals: $38,892.45

<!-- para:0020 -->
#### Transaction Matching Results

<!-- para:0021 -->
- 128 matched to existing categories (87%)
- 13 need new categorization
- 6 have discrepancies requiring journal entries

<!-- para:0022 -->
#### Discrepancies Identified

<!-- para:0023 -->
1. Bank fee not recorded - $35.00
2. Interest income missing - $12.45
3. Duplicate payment - $234.00

<!-- para:0024 -->
#### Journal Entries to Correct

<!-- para:0025 -->
I've prepared 13 journal entries totaling $2,563.23 in adjustments. All entries balance and use your chart of accounts IDs.

<!-- para:0026 -->
## Follow up prompts

<!-- para:0027 -->
### Export journal entries as CSV

<!-- para:0028 -->
Get a CSV file you can import into your accounting system.

<!-- para:0029 -->
*"These entries look correct. Please export them as a CSV file I can import."*

<!-- para:0030 -->
### Create a reconciliation summary

<!-- para:0031 -->
Generate a formal reconciliation report for your records or auditor.

<!-- para:0032 -->
*"Create a reconciliation summary document I can save for my January records."*

<!-- para:0033 -->
### Analyze adjustment patterns

<!-- para:0034 -->
Identify recurring issues in how transactions are recorded so you can fix the root cause.

<!-- para:0035 -->
*"Which expense categories needed the most adjustments? Are there patterns I should address in how I record transactions?"*

<!-- para:0036 -->
## Tricks, tips, and troubleshooting

<!-- para:0037 -->
### Use the sidebar panels to track progress

<!-- para:0038 -->
The Artifacts panel shows files Claude creates, like your journal entries spreadsheet, as they're generated. The Context panel shows which source files Claude is referencing.

<!-- para:0039 -->
### Grant folder access for seamless file output

<!-- para:0040 -->
Before starting, point Cowork to the folder where you want the final journal entries saved. Claude can write the reconciliation output directly there.

<!-- para:0041 -->
### Let Claude work through multiple months in parallel

<!-- para:0042 -->
If you're catching up on several months of reconciliation, Claude can coordinate parallel workstreams, analyzing January while also working on February.

<!-- para:0043 -->
### Start another task while this one runs

<!-- para:0044 -->
Open a new session from the sidebar for other work while Cowork reconciles. You'll see a grey dot in the sidebar when it needs attention.

<!-- para:0045 -->
## Ready to try for yourself?
