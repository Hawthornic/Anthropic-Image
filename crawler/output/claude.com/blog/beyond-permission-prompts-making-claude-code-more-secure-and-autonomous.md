---
source_url: https://claude.com/blog/beyond-permission-prompts-making-claude-code-more-secure-and-autonomous
title: "Beyond permission prompts: making Claude Code more secure and autonomous"
section: blog
date: 2025-10-08
---

<!-- para:0001 -->
To help address this, we’ve introduced two new features in Claude Code built on top of sandboxing, both of which are designed to provide a more secure place for developers to work, while also allowing Claude to run more autonomously and with fewer permission prompts. By These features are examples of **native sandboxing**: defining set boundaries within which Claude can work freely, they increase security and agency..

<!-- para:0002 -->
## Our current approach to keeping users secure

<!-- para:0003 -->
Claude Code runs on a permission-based model: by default, it's read-only, which means it asks for permission before making modifications or running any commands. There are some exceptions to this: we use static analysis to auto-allow safe commands like echo or cat, but most operations still need explicit approval.

<!-- para:0004 -->
But constantly clicking "approve" slows down development and can lead to ‘approval fatigue’, where users might not pay close attention to what they're approving. To make Claude Code both safer and more effective, we wanted to find a better method.

<!-- para:0005 -->
## Sandboxing: a safer and more autonomous approach

<!-- para:0006 -->
Sandboxing creates pre-defined boundaries within which Claude can work more freely, instead of asking for permission for each action.

<!-- para:0007 -->
With our update to Claude Code, we’re shifting to this approach. We’re building Our approach to sandboxing is built on top of operating system-level features to enable two new features, each of which are based on the followingtwo sets of boundariesmain things:

<!-- para:0008 -->
1. **Filesystem isolation**,which ensures that Claude can only access or modify specific directories. This is particularly important in preventing a prompt-injected Claude from modifying sensitive system files.
2. **Network isolation**,which ensures that Claude can only connect to approved servers. This prevents a prompt-injected Claude from leaking sensitive information or downloading malware.

<!-- para:0009 -->
It is worth noting that effective sandboxing requires *both* filesystem and network isolation. Without network isolation, a compromised agent could exfiltrate sensitive files like SSH keys; without filesystem isolation, a compromised agent could easily escape the sandbox and gain network access. It’s by using both techniques that we can provide a safer agentic experience for Claude Code users.

<!-- para:0010 -->
### Two new sandboxing features in Claude Code

<!-- para:0011 -->
#### Sandboxed bash tool: safe bash execution without permission prompts

<!-- para:0012 -->
Today, We're introducing a new sandbox runtime, available in research preview, that lets you define exactly which directories and network hosts your agent can access, without the overhead of spinning up and managing a container. This can be used to sandbox arbitrary processes, agents and MCP servers. It is now available as an open source research preview here: [Github link?] In Claude Code, we use this runtime to sandbox the bash tool, which allows Claude to run commands within the defined limits you set. These commands are safer by default, they require fewer user permission prompts, so Claude can run more autonomously. If Claude tries to access something *outside* of the sandbox, you'll be notified immediately, and can choose whether or not to allow it.

<!-- para:0013 -->
We’ve built this on top of OS level primitives such as [Linux bubblewrap](https://github.com/containers/bubblewrap) and MacOS seatbelt to enforce these restrictions at the OS level. They cover not just Claude Code's direct interactions, but also any scripts, programs, or subprocesses that are spawned by the command. As described above, this sandbox enforces both:

<!-- para:0014 -->
1. **Filesystem isolation,**by allowing read and write access to the current working directory, but blocking the modification of any files outside of it.
2. **Network isolation,**by only allowing internet access through a unix domain socket connected to a proxy server running outside the sandbox. This proxy server enforces restrictions on the domains that a process can connect to, and handles user confirmation for newly requested domains. IAnd if you’d like further-increased security, we alsoeven support customizing this proxy to enforce arbitrary rules on outgoing traffic.

<!-- para:0015 -->
‍

<!-- para:0016 -->
Both components are configurable: you can easily choose to allow or disallow specific file paths or domains.

<!-- para:0017 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68e6c0f6e8c717994091347a_60aa4f4b.png)

<!-- para:0018 -->
Sandboxing ensures that even a successful prompt injection is fully isolated, and cannot impact overall user security. This way, a compromised Claude Code can't steal your SSH keys, or phone home to an attacker's server.

<!-- para:0019 -->
To get started with this feature, run: `claude --sandbox`, and read more technical details about our security model here.

<!-- para:0020 -->
To make it easier for other teams to build safer agents, we have open sourced [XXX]. We believe that other AI companies should consider adopting this technology for their own agents in order to enhance the security posture of their agents.

<!-- para:0021 -->
#### Claude Code on the web: running Claude Code securely in the cloud

<!-- para:0022 -->
Today, we're also releasing [Claude Code on the web](TODO: Link to docs on CCR), enabling users to run Claude Code in an isolated sandbox in the cloud. Claude Code on the web executes each Claude Code session in an isolated sandbox where it has full access to its server in a safe and secure way. We've designed this sandbox to ensure that sensitive credentials (such as git credentials or signing keys) are never inside the sandbox with Claude Codenever enter the sandbox environment. This way, even if the code running in the sandbox is compromised, the user is kept safe from further harm.

<!-- para:0023 -->
Claude Code on the web uses a custom proxy service that transparently handles all git interactions. Inside the sandbox, the git client authenticates to this service with a custom-built scoped credential. The proxy verifies this credential and the contents of the git interaction (e.g. ensuring it is only pushing to the configured branch), then attaches the right authentication token before sending the request to Git Hub.

<!-- para:0024 -->
![](https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/68e6c0f6e8c717994091347d_7b19e1a8.png)

<!-- para:0025 -->
## Getting started

<!-- para:0026 -->
Our new sandboxed bash tool and Claude Code on the web offer substantial improvements in both security and productivity for developers using Claude for their engineering work.

<!-- para:0027 -->
To get started with these tools:

<!-- para:0028 -->
1. Run `claude --sandbox` and check out [our docs](TODO) on how to configure this sandbox.
2. Go to [claude.com/code](http://claude.ai/code) to try out Claude Code on the web.

<!-- para:0029 -->
Or, if you're building your own agents, check out our open-sourced sandboxing code, and consider integrating it into your work. We look forward to seeing what you build.
