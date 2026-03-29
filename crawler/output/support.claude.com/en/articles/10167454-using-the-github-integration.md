---
source_url: https://support.claude.com/en/articles/10167454-using-the-github-integration
title: "Using the GitHub Integration"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Connect your GitHub repositories directly to Claude to provide comprehensive context for your software development tasks. You can easily add repositories by selecting them from a list, helping Claude better understand and assist with your codebase.

<!-- para:0002 -->
If you see the warning below and have input a valid URL, it most likely means you’re attempting to connect Claude to a private repository:

<!-- para:0003 -->
Follow the link to our GitHub App, where you can grant access to repos if you’re a GitHub administrator, or send a request to your GitHub organization’s administrators.

<!-- para:0004 -->
**Q: What information is retrieved from GitHub?**

<!-- para:0005 -->
A: Only files (names and contents) in a repo on a specific branch are synced. We do not retrieve commit history, PRs, or other metadata.

<!-- para:0006 -->
**Q: What happens if my repository is updated after adding it to a project?**

<!-- para:0007 -->
A: You can click "Sync now" to fetch the latest changes from your repository. This will update all previously selected files and folders.

<!-- para:0008 -->
**Q: Can I add multiple repositories to a single project or chat?**

<!-- para:0009 -->
A: Yes, you can add multiple repositories to provide Claude with comprehensive context for your development tasks. The repositories must fit within Claude’s context window.

<!-- para:0010 -->
**Q: What happens if I lose access to a repository?**

<!-- para:0011 -->
A: If you lose access to a repository, you won't be able to view its contents in projects where it was previously added. The repository preview will be removed, though the conversation history will be maintained.
