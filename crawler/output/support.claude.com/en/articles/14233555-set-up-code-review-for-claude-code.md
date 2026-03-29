---
source_url: https://support.claude.com/en/articles/14233555-set-up-code-review-for-claude-code
title: "Set up Code Review for Claude Code"
section: articles
date: 2026-03-25
---

<!-- para:0001 -->
Code Review analyzes your GitHub pull requests and posts findings as inline comments on the lines of code where it found issues. A fleet of specialized agents examine the code changes in the context of your full codebase, looking for logic errors, security vulnerabilities, broken edge cases, and regressions.

<!-- para:0002 -->
This article covers how to enable Code Review, configure review triggers, customize what gets flagged, and troubleshoot common setup issues.

<!-- para:0003 -->
Once an organization enables Code Review, it can trigger automatically when a pull request opens, on every push, or only when someone manually requests a review. When a review runs, multiple agents analyze the diff and surrounding code in parallel. Each agent looks for a different class of issue, then a verification step checks results against actual code behavior to filter out false positives.

<!-- para:0004 -->
Findings are deduplicated, ranked by severity, and posted as inline comments on the specific lines where issues were found. If no issues are found, Claude posts a short confirmation comment on the PR. Reviews don’t approve or block your PR, so existing review workflows stay intact.

<!-- para:0005 -->
Reviews scale in cost with PR size and complexity, completing in 20 minutes on average.

<!-- para:0006 -->
Each finding is tagged with a severity level:

<!-- para:0007 -->
Findings include a collapsible extended reasoning section you can expand to see why Claude flagged the issue and how it verified the problem.

<!-- para:0008 -->
By default, Code Review focuses on correctness: bugs that would break production, not formatting preferences or missing test coverage. You can expand what it checks by adding guidance files to your repository.

<!-- para:0009 -->
Owners and Primary Owners of Team and Enterprise plans can enable Code Review once for the organization and select which repositories to include. In addition to an owner role within your Claude organization, you’ll need permission to install GitHub Apps in your GitHub organization.

<!-- para:0010 -->
To verify setup, open a test PR. If you chose an automatic trigger, a check run named **Claude Code Review** should appear within a few minutes. If you chose Manual, comment “@claude review” on the PR to start the first review.

<!-- para:0011 -->
After setup, the **Code Review** section shows your repositories in a table. For each repository, choose when reviews run:

<!-- para:0012 -->
The repositories table also shows the average cost per review for each repo based on recent activity.

<!-- para:0013 -->
Comment “@claude review” on a pull request to start a review and opt that PR into push-triggered reviews going forward. This works regardless of the repository’s configured trigger.

<!-- para:0014 -->
For the comment to trigger a review:

<!-- para:0015 -->
If a review is already running, the request is queued until the in-progress review completes.

<!-- para:0016 -->
Code Review reads two files from your repository to guide what it flags. Both are additive on top of the default correctness checks.

<!-- para:0017 -->
Code Review reads your repository’s CLAUDE.md files and treats newly introduced violations as nit-level findings. If your PR changes code in a way that makes a CLAUDE.md statement outdated, Claude flags that the docs need updating too.

<!-- para:0018 -->
Claude reads CLAUDE.md files at every level of your directory hierarchy, so rules in a subdirectory’s CLAUDE.md apply only to files under that path.

<!-- para:0019 -->
Add a REVIEW.md file to your repository root for review-specific rules. Use it to encode:

<!-- para:0020 -->
Claude auto-discovers REVIEW.md at the repository root. No configuration is needed.

<!-- para:0021 -->
Code Review is billed based on token usage. Each review averages $15–25 in cost, scaling with PR size, codebase complexity, and how many issues require verification.

<!-- para:0022 -->
Code Review usage is billed separately through extra usage and doesn’t count against your plan’s included usage. The review trigger you choose affects total cost:

<!-- para:0023 -->
Costs appear on your Anthropic bill regardless of whether your organization uses AWS Bedrock or Google Vertex AI for other Claude Code features.

<!-- para:0024 -->
To set a monthly spend cap, go to **[Organization settings > Usage](https://claude.ai/admin-settings/usage)** and configure the limit for the Claude Code Review service.

<!-- para:0025 -->
Monitor spend via the weekly cost chart in the analytics dashboard or the per-repo average cost column in admin settings.

<!-- para:0026 -->
Go to the **[Code Review analytics dashboard](https://claude.ai/analytics/code-review)** to see activity across your organization. The dashboard shows:

<!-- para:0027 -->
If you’ve installed the Claude GitHub App but your repositories don’t appear in the admin panel:

<!-- para:0028 -->
If no check run appears after opening a PR:

<!-- para:0029 -->
If your GitHub Enterprise Cloud organization restricts access by IP address, the Claude GitHub App may be unable to access your repositories. To fix this, **[enable IP allow list inheritance for installed GitHub Apps](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#allowing-access-by-github-apps)** in your GitHub enterprise settings. The Claude GitHub App registers its IP ranges, so enabling this setting allows access without manual configuration. To **[add the ranges to your allow list manually](https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#adding-an-allowed-ip-address)** instead, or to configure other firewalls, see the **[Anthropic API IP addresses](https://platform.claude.com/docs/en/api/ip-addresses)**.

<!-- para:0030 -->
Code Review currently requires repositories hosted on **[github.com](http://github.com/)**, so self-hosted GitHub Enterprise Server isn’t supported yet.
