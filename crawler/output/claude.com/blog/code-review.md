---
source_url: https://claude.com/blog/code-review
title: "Bringing Code Review to Claude Code"
section: blog
date: 2026-03-09
---

<!-- para:0001 -->
Today we're introducing Code Review, which dispatches a team of agents on every PR to catch the bugs that skims miss, built for depth, not speed. It's the system we run on nearly every PR at Anthropic. Now in research preview for Team and Enterprise.

<!-- para:0002 -->
## **Managing the review bottleneck**

<!-- para:0003 -->
Code output per Anthropic engineer has grown 200% in the last year. Code review has become a bottleneck, and we hear the same from customers every week. They tell us developers are stretched thin, and many PRs get skims rather than deep reads.

<!-- para:0004 -->
We needed a reviewer we could trust on every PR. Code Review is the result: deep, multi-agent reviews that catch bugs human reviewers often miss themselves. It's a more thorough (and more expensive) option than our existing [Claude Code Git Hub Action](https://code.claude.com/docs/en/github-actions), which remains open source and available.

<!-- para:0005 -->
We run Code Review on nearly every PR at Anthropic. Before, 16% of PRs got substantive review comments. Now 54% do. It won't approve PRs — that's still a human call — but it closes the gap so reviewers can actually cover what's shipping.

<!-- para:0006 -->
## **How it works**

<!-- para:0007 -->
When a PR is opened, Code Review dispatches a team of agents. The agents look for bugs in parallel, verify bugs to filter out false positives, and rank bugs by severity. The result lands on the PR as a single high-signal overview comment, plus in-line comments for specific bugs.

<!-- para:0008 -->
Reviews scale with the PR. Large or complex changes get more agents and a deeper read; trivial ones get a lightweight pass. Based on our testing, the average review takes around 20 minutes.

<!-- para:0009 -->
## **Code Review in action**

<!-- para:0010 -->
We've been running Code Review internally for months: on large PRs (over 1,000 lines changed), 84% get findings, averaging 7.5 issues. On small PRs under 50 lines, that drops to 31%, averaging 0.5 issues. Engineers largely agree with what it surfaces: less than 1% of findings are marked incorrect.

<!-- para:0011 -->
In one case, a one-line change to a production service looked routine and was the kind of diff that normally gets a quick approval. But Code Review flagged it as critical. The change would have broken authentication for the service, a failure mode that’s easy to read past in the diff but obvious once pointed out. It was fixed before merge, and the engineer shared afterwards that they wouldn't have caught it on their own.

<!-- para:0012 -->
Early access customers have seen similar patterns. On a [ZFS encryption refactor in TrueNAS's open-source middleware](https://github.com/truenas/middleware/pull/18291), Code Review surfaced a pre-existing bug in adjacent code: a type mismatch that was silently wiping the encryption key cache on every sync. It was a latent issue in code the PR happened to touch, the kind of thing a human reviewer scanning the changeset wouldn't immediately go looking for.

<!-- para:0013 -->
## **Cost and control**

<!-- para:0014 -->
Code Review optimizes for depth and is more expensive than lighter-weight solutions like the [Claude Code Git Hub Action](https://code.claude.com/docs/en/github-actions). Reviews are billed on token usage and generally average $15–25, scaling with PR size and complexity.

<!-- para:0015 -->
Admins have many ways to control spend and usage:

<!-- para:0016 -->
- **Monthly organization caps**: Define total monthly spend across all reviews
- **Repository-level control**: Enable reviews only on the repositories you choose
- **Analytics dashboard**: Track PRs reviewed, acceptance rate, and total review costs

<!-- para:0017 -->
## **Getting started**

<!-- para:0018 -->
Code Review is available now as a research preview in beta for Team and Enterprise plans.

<!-- para:0019 -->
- **For admins**: Enable Code Review in your [Claude Code settings](http://claude.ai/admin-settings/claude-code), install the Git Hub App, and select repositories you’d like to run reviews on.
- **For developers**: Once enabled, reviews run automatically on new PRs. No configuration needed.

<!-- para:0020 -->
[Explore the docs](http://code.claude.com/docs/en/code-review) for more information.
