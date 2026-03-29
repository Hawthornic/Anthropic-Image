---
source_url: https://support.claude.com/en/articles/12618689-claude-code-on-the-web
title: "Claude Code on the web"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Claude Code on the web runs Claude Code tasks remotely, working with code from your GitHub repositories. This article explains how it works, when to use it instead of running Claude Code in your terminal or IDE, and what workflows it enables.

<!-- para:0002 -->
Claude Code on the web lets you delegate tasks to Claude that run without your active supervision. In your browser, you select a GitHub repository, describe what you want done, and Claude works on the task in a remote environment. Once Claude Code has started working on a task, you can leave the page completely; Claude will continue its work. When finished, Claude will automatically create a pull request with changes for you to review.

<!-- para:0003 -->
This feature works with repositories you may not have on your local machine. You can kick off tasks on any GitHub repository you have access to without needing to clone it locally or set up a development environment. This makes it useful for projects you contribute to occasionally or for exploring codebases you're still learning about.

<!-- para:0004 -->
Claude Code for web enables asynchronous development workflows. With Claude Code in your terminal or editor, you typically work synchronously: you make a request, wait for Claude to respond, review the changes, then make another request. Synchronous work like this gives you fine-grained control but requires your attention throughout the process. Claude Code on the web handles this differently: you can assign a larger task, let Claude work independently, and return later to review the completed work.

<!-- para:0005 -->
You can also run multiple tasks in parallel. Since each task runs in its own isolated environment, you can have Claude working on several different issues or repositories simultaneously. Each task proceeds independently and creates its own pull request when complete. More than one task can work on the same repository at the same time.

<!-- para:0006 -->
When you start a task, Claude Code on the web creates an isolated virtual machine for your work. Your GitHub repository is cloned into this environment, which comes pre-configured with common development tools and language ecosystems.

<!-- para:0007 -->
Claude prepares the environment by running any setup commands you've defined in your repository's configuration. This includes installing dependencies, setting up databases, or running other initialization steps your project needs. If your task requires network access, maybe to install packages or fetch data, you can configure the level of internet access the environment has.

<!-- para:0008 -->
Once the environment is ready, Claude begins working on your task. Claude reads your code, makes changes, writes tests, and runs commands to verify the work. You can monitor progress and provide guidance through the web interface if needed.

<!-- para:0009 -->
When Claude completes the task, it pushes the changes to a new branch in your GitHub repository. You receive a notification and can review the changes, then create a pull request directly from the interface. The pull request includes all of Claude's work, ready for your review and any additional changes you want to make.

<!-- para:0010 -->
Each task runs in complete isolation. The virtual machine exists only for that specific task and includes security controls like restricted network access and protected credential handling. Your GitHub authentication is managed through a secure proxy, so credentials never exist directly in the environment where Claude is working.

<!-- para:0011 -->
Claude Code on the web is a new way of working with Claude Code. Some tasks are well-suited for asynchronous execution on the web, while others will continue to be best run with Claude Code via your terminal or IDE.

<!-- para:0012 -->
Let Claude write tests that define the expected behavior, then implement the code to make those tests pass. This works particularly well for backend changes where behavior can be validated through automated testing.

<!-- para:0013 -->
**Example prompt:**

<!-- para:0014 -->
**When to use this approach:** This works well on the web because the tests give Claude clear validation criteria to work towards. You don't need to monitor Claude's progress since the tests will catch issues and guide iteration toward a working solution. The self-contained nature of the task, where Claude writes tests then makes them pass, doesn't require your input once started.**

<!-- para:0015 -->
**What makes this effective:** Claude can iterate on the implementation without your supervision, using test failures to identify and fix problems. The task runs longer than a simple code change, but you can let it complete in the background. When you review the pull request, both the tests and implementation are ready, and you have confidence the solution works because the tests pass.**

<!-- para:0016 -->
Generate or update technical documentation such as README files, API documentation, code comments, or user guides.

<!-- para:0017 -->
**Example prompt:**

<!-- para:0018 -->
**When to use this approach:** Changelog updates are well-suited for the web because Claude can review commit history independently and format entries without guidance. The task is tedious to do manually but straightforward enough that Claude can complete it without questions about which commits to include or how to categorize them.**

<!-- para:0019 -->
**What makes this effective:** You can delegate the entire changelog update and review the result when complete. Claude reads through commits, extracts meaningful changes, and follows your existing changelog format.**

<!-- para:0020 -->
Restructure code to improve organization or readability when you can define clear boundaries for the change. This includes extracting code, splitting up large files, or organizing module structure.

<!-- para:0021 -->
**Example prompt:**

<!-- para:0022 -->
**When to use this approach:** Refactoring with clear constraints works well on the web because you can set clear boundaries for Claude to follow. Test suites can provide validation, allowing Claude to verify the refactor didn't break any existing functionality.**

<!-- para:0023 -->
**What makes this effective:** The task takes time, but doesn't need your active input once the structure is defined. You can start the refactor and review the organized result later, rather than monitoring Claude as it works through the task. The clear scope means Claude is unlikely to need guidance mid-task.**
