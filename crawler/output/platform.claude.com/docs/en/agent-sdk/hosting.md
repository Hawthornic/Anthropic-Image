---
source_url: https://platform.claude.com/docs/en/agent-sdk/hosting
title: "Hosting the Agent SDK"
section: docs
---

<!-- para:0001 -->
# Hosting the Agent SDK

<!-- para:0002 -->
The Claude Agent SDK differs from traditional stateless LLM APIs in that it maintains conversational state and executes commands in a persistent environment. This guide covers the architecture, hosting considerations, and best practices for deploying SDK-based agents in production.

<!-- para:0003 -->
For security hardening beyond basic sandboxing (including network controls, credential management, and isolation options), see [Secure Deployment](https://platform.claude.com/docs/en/agent-sdk/secure-deployment).

<!-- para:0004 -->
## Hosting Requirements

<!-- para:0005 -->
### Container-Based Sandboxing

<!-- para:0006 -->
For security and isolation, the SDK should run inside a sandboxed container environment. This provides process isolation, resource limits, network control, and ephemeral filesystems.

<!-- para:0007 -->
The SDK also supports [programmatic sandbox configuration](https://platform.claude.com/docs/en/agent-sdk/typescript#sandbox-settings) for command execution.

<!-- para:0008 -->
### System Requirements

<!-- para:0009 -->
Each SDK instance requires:

<!-- para:0010 -->
- **Runtime dependencies** Python 3.10+ (for Python SDK) or Node.js 18+ (for TypeScript SDK) Node.js (required by Claude Code CLI) Claude Code CLI: `npm install -g @anthropic-ai/claude-code`
- **Resource allocation** Recommended: 1GiB RAM, 5GiB of disk, and 1 CPU (vary this based on your task as needed)
- **Network access** Outbound HTTPS to `api.anthropic.com` Optional: Access to MCP servers or external tools

<!-- para:0011 -->
## Understanding the SDK Architecture

<!-- para:0012 -->
Unlike stateless API calls, the Claude Agent SDK operates as a **long-running process** that:

<!-- para:0013 -->
- **Executes commands** in a persistent shell environment
- **Manages file operations** within a working directory
- **Handles tool execution** with context from previous interactions

<!-- para:0014 -->
## Sandbox Provider Options

<!-- para:0015 -->
Several providers specialize in secure container environments for AI code execution:

<!-- para:0016 -->
- **[Modal Sandbox](https://modal.com/docs/guide/sandbox)** - [demo implementation](https://modal.com/docs/examples/claude-slack-gif-creator)
- **[Cloudflare Sandboxes](https://github.com/cloudflare/sandbox-sdk)**
- **[Daytona](https://www.daytona.io/)**
- **[E2B](https://e2b.dev/)**
- **[Fly Machines](https://fly.io/docs/machines/)**
- **[Vercel Sandbox](https://vercel.com/docs/functions/sandbox)**

<!-- para:0017 -->
For self-hosted options (Docker, gVisor, Firecracker) and detailed isolation configuration, see [Isolation Technologies](https://platform.claude.com/docs/en/agent-sdk/secure-deployment#isolation-technologies).

<!-- para:0018 -->
## Production Deployment Patterns

<!-- para:0019 -->
### Pattern 1: Ephemeral Sessions

<!-- para:0020 -->
Create a new container for each user task, then destroy it when complete.

<!-- para:0021 -->
Best for one-off tasks, the user may still interact with the AI while the task is completing, but once completed the container is destroyed.

<!-- para:0022 -->
**Examples:**

<!-- para:0023 -->
- Bug Investigation & Fix: Debug and resolve a specific issue with relevant context
- Invoice Processing: Extract and structure data from receipts/invoices for accounting systems
- Translation Tasks: Translate documents or content batches between languages
- Image/Video Processing: Apply transformations, optimizations, or extract metadata from media files

<!-- para:0024 -->
### Pattern 2: Long-Running Sessions

<!-- para:0025 -->
Maintain persistent container instances for long running tasks. Often times running *multiple* Claude Agent processes inside of the container based on demand.

<!-- para:0026 -->
Best for proactive agents that take action without the users input, agents that serve content or agents that process high amounts of messages.

<!-- para:0027 -->
**Examples:**

<!-- para:0028 -->
- Email Agent: Monitors incoming emails and autonomously triages, responds, or takes actions based on content
- Site Builder: Hosts custom websites per user with live editing capabilities served through container ports
- High-Frequency Chat Bots: Handles continuous message streams from platforms like Slack where rapid response times are critical

<!-- para:0029 -->
### Pattern 3: Hybrid Sessions

<!-- para:0030 -->
Ephemeral containers that are hydrated with history and state, possibly from a database or from the SDK's session resumption features.

<!-- para:0031 -->
Best for containers with intermittent interaction from the user that kicks off work and spins down when the work is completed but can be continued.

<!-- para:0032 -->
**Examples:**

<!-- para:0033 -->
- Personal Project Manager: Helps manage ongoing projects with intermittent check-ins, maintains context of tasks, decisions, and progress
- Deep Research: Conducts multi-hour research tasks, saves findings and resumes investigation when user returns
- Customer Support Agent: Handles support tickets that span multiple interactions, loads ticket history and customer context

<!-- para:0034 -->
### Pattern 4: Single Containers

<!-- para:0035 -->
Run multiple Claude Agent SDK processes in one global container.

<!-- para:0036 -->
Best for agents that must collaborate closely together. This is likely the least popular pattern because you will have to prevent agents from overwriting each other.

<!-- para:0037 -->
**Examples:**

<!-- para:0038 -->
- **Simulations**: Agents that interact with each other in simulations such as video games.

<!-- para:0039 -->
## FAQ

<!-- para:0040 -->
### How do I communicate with my sandboxes?

<!-- para:0041 -->
When hosting in containers, expose ports to communicate with your SDK instances. Your application can expose HTTP/WebSocket endpoints for external clients while the SDK runs internally within the container.

<!-- para:0042 -->
### What is the cost of hosting a container?

<!-- para:0043 -->
The dominant cost of serving agents is the tokens; containers vary based on what you provision, but a minimum cost is roughly 5 cents per hour running.

<!-- para:0044 -->
### When should I shut down idle containers vs. keeping them warm?

<!-- para:0045 -->
This is likely provider dependent, different sandbox providers will let you set different criteria for idle timeouts after which a sandbox might spin down. You will want to tune this timeout based on how frequent you think user response might be.

<!-- para:0046 -->
### How often should I update the Claude Code CLI?

<!-- para:0047 -->
The Claude Code CLI is versioned with semver, so any breaking changes will be versioned.

<!-- para:0048 -->
### How do I monitor container health and agent performance?

<!-- para:0049 -->
Since containers are just servers the same logging infrastructure you use for the backend will work for containers.

<!-- para:0050 -->
### How long can an agent session run before timing out?

<!-- para:0051 -->
An agent session will not timeout, but consider setting a 'maxTurns' property to prevent Claude from getting stuck in a loop.

<!-- para:0052 -->
## Next Steps

<!-- para:0053 -->
- [Secure Deployment](https://platform.claude.com/docs/en/agent-sdk/secure-deployment) - Network controls, credential management, and isolation hardening
- [TypeScript SDK - Sandbox Settings](https://platform.claude.com/docs/en/agent-sdk/typescript#sandbox-settings) - Configure sandbox programmatically
- [Sessions Guide](https://platform.claude.com/docs/en/agent-sdk/sessions) - Learn about session management
- [Permissions](https://platform.claude.com/docs/en/agent-sdk/permissions) - Configure tool permissions
- [Cost Tracking](https://platform.claude.com/docs/en/agent-sdk/cost-tracking) - Monitor API usage
- [MCP Integration](https://platform.claude.com/docs/en/agent-sdk/mcp) - Extend with custom tools

<!-- para:0054 -->
Was this page helpful?
