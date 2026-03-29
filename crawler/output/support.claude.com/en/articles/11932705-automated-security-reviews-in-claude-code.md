---
source_url: https://support.claude.com/en/articles/11932705-automated-security-reviews-in-claude-code
title: "Automated Security Reviews in Claude Code"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Claude Code now includes automated security review features to help you identify and fix vulnerabilities in your code. This guide explains how to use the /security-review command and GitHub Actions to improve your code security.

<!-- para:0002 -->
Automated security reviews in Claude Code help developers catch vulnerabilities before they reach production. These features check for common security issues including SQL injection risks, cross-site scripting (XSS) vulnerabilities, authentication flaws, insecure data handling, and dependency vulnerabilities.

<!-- para:0003 -->
You can use security reviews in two ways: through the /security-review command for on-demand checks in your terminal, or through GitHub Actions for automatic review of pull requests.

<!-- para:0004 -->
These features are available for all Claude Code users, including:

<!-- para:0005 -->
The /security-review command lets you run security analysis directly from your terminal before committing code.

<!-- para:0006 -->
To check your code for vulnerabilities:

<!-- para:0007 -->
After Claude identifies vulnerabilities, you can ask it to implement fixes directly. This keeps security reviews integrated into your development workflow, allowing you to address issues when they're easiest to resolve.

<!-- para:0008 -->
You can customize the /security-review command for your specific needs. See the[security review documentation](https://github.com/anthropics/claude-code-security-review/tree/main?tab=readme-ov-file#security-review-slash-command) for configuration options.

<!-- para:0009 -->
After installing and configuring the GitHub action, it will automatically review every pull request for security vulnerabilities when it's opened.

<!-- para:0010 -->
To set up automated security reviews for your repository:

<!-- para:0011 -->
Once configured, the GitHub action:

<!-- para:0012 -->
This creates a consistent security review process across your entire team, ensuring code is checked for vulnerabilities before merging.

<!-- para:0013 -->
You can customize the GitHub action to match your team's security policies, including setting specific rules for your codebase and adjusting sensitivity levels for different vulnerability types.

<!-- para:0014 -->
Both the /security-review command and GitHub action check for common vulnerability patterns:

<!-- para:0015 -->
To start using automated security reviews:

<!-- para:0016 -->
For optimal results, we recommend running /security-review before committing significant changes and configuring the GitHub action for all repositories containing production code. Consider adjusting the filtering rules based on your team's specific security requirements and codebase characteristics.
