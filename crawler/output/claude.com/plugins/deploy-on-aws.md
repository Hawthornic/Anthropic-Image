---
source_url: https://claude.com/plugins/deploy-on-aws
title: "Deploy on AWS"
section: plugins
---

<!-- para:0001 -->
# Deploy on AWS

<!-- para:0002 -->
Deploy applications to AWS with architecture recommendations, cost estimates, and IaC deployment.

<!-- para:0003 -->
- Install in [Claude Code](https://claude.com/plugins/deploy-on-aws#)
- Made by: [Amazon Web Services](https://github.com/awslabs/agent-plugins)
- Installs1722

<!-- para:0004 -->
Deploy applications to AWS through a guided five-stage workflow: analyze your codebase, receive service recommendations, get monthly cost estimates, generate Infrastructure as Code (CDK/Cloud Formation), and execute deployments — all without leaving your editor. The plugin defaults to dev-sized configurations and makes straightforward decisions automatically, only prompting you when choices are genuinely ambiguous.

<!-- para:0005 -->
Three MCP servers power the experience: **awsknowledge** for architecture validation and AWS documentation, **awspricing** for real-time cost calculations, and **awsiac** for infrastructure-as-code best practices. Security defaults are applied during code generation, and a security check runs before every deployment.

<!-- para:0006 -->
**How to use: ** Trigger the deploy skill with natural language prompts such as `deploy to AWS`, `host on AWS`, `estimate AWS cost`, or `generate infrastructure`. For production workloads, specify "production-ready" to get multi-AZ, redundant configurations instead of the default minimal setup. Requires AWS CLI with configured credentials.**

<!-- para:0007 -->
## Related plugins

<!-- para:0008 -->
### Frontend Design

<!-- para:0009 -->
Craft production-grade frontends with distinctive design. Generates polished code that avoids generic AI aesthetics.

<!-- para:0010 -->
413623

<!-- para:0011 -->
installs

<!-- para:0012 -->
### Superpowers

<!-- para:0013 -->
Claude learns brainstorming, subagent development with code review, debugging, TDD, and skill authoring through Superpowers.

<!-- para:0014 -->
294839

<!-- para:0015 -->
### Context7

<!-- para:0016 -->
Upstash Context7 MCP server for live docs lookup. Pull version-specific docs and code examples from source repos into LLM context.

<!-- para:0017 -->
212236

<!-- para:0018 -->
### Code Review

<!-- para:0019 -->
AI code review with specialized agents and confidence-based filtering for pull requests

<!-- para:0020 -->
191903
