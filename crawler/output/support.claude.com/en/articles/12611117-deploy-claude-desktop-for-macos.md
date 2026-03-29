---
source_url: https://support.claude.com/en/articles/12611117-deploy-claude-desktop-for-macos
title: "Deploy Claude Desktop for macOS"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
Administrators on Team or Enterprise plans can deploy Claude Desktop automatically to manage installations and updates centrally. Claude Desktop installs to `/Applications` and updates automatically when new versions are released, unless disabled via enterprise policies.

<!-- para:0002 -->
Cowork will be installed automatically when you download and install Claude Desktop for macOS.

<!-- para:0003 -->
**[Universal (x64 or arm64) Claude PKG](https://claude.ai/api/desktop/darwin/universal/pkg/latest/redirect)**

<!-- para:0004 -->
The Universal build is compatible with both Intel and Apple Silicon machines and supports all Mac hardware.

<!-- para:0005 -->
Upload the PKG to your MDM solution (Jamf, Kandji, Microsoft Intune) and deploy to target machines.

<!-- para:0006 -->
To configure Claude Desktop settings such as auto-updates, extensions, and MCP servers, see the **[Enterprise Configuration](https://support.claude.com/en/articles/12622667-enterprise-configuration)** article.

<!-- para:0007 -->
Claude Desktop can be installed to either the user's Applications folder or the system Applications folder, which affects update permissions.

<!-- para:0008 -->
For shared machines, disable auto-updates via enterprise policies and manage updates centrally through your MDM solution.
