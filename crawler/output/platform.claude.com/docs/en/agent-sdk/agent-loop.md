---
source_url: https://platform.claude.com/docs/en/agent-sdk/agent-loop
title: "How the agent loop works"
section: docs
---

<!-- para:0001 -->
# How the agent loop works

<!-- para:0002 -->
The Agent SDK lets you embed Claude Code's autonomous agent loop in your own applications. The SDK is a standalone package that gives you programmatic control over tools, permissions, cost limits, and output. You don't need the Claude Code CLI installed to use it.

<!-- para:0003 -->
When you start an agent, the SDK runs the same [execution loop that powers Claude Code](https://code.claude.com/docs/en/how-claude-code-works#the-agentic-loop): Claude evaluates your prompt, calls tools to take action, receives the results, and repeats until the task is complete. This page explains what happens inside that loop so you can build, debug, and optimize your agents effectively.

<!-- para:0004 -->
## The loop at a glance

<!-- para:0005 -->
Every agent session follows the same cycle:

<!-- para:0006 -->
1. **Receive prompt.** Claude receives your prompt, along with the system prompt, tool definitions, and conversation history. The SDK yields a [`SystemMessage`](https://platform.claude.com/docs/en/agent-sdk/agent-loop#message-types) with subtype `"init"` containing session metadata.
2. **Evaluate and respond.** Claude evaluates the current state and determines how to proceed. It may respond with text, request one or more tool calls, or both. The SDK yields an [`AssistantMessage`](https://platform.claude.com/docs/en/agent-sdk/agent-loop#message-types) containing the text and any tool call requests.
3. **Execute tools.** The SDK runs each requested tool and collects the results. Each set of tool results feeds back to Claude for the next decision. You can use [hooks](https://platform.claude.com/docs/en/agent-sdk/hooks) to intercept, modify, or block tool calls before they run.
4. **Repeat.** Steps 2 and 3 repeat as a cycle. Each full cycle is one turn. Claude continues calling tools and processing results until it produces a response with no tool calls.
5. **Return result.** The SDK yields a final [`AssistantMessage`](https://platform.claude.com/docs/en/agent-sdk/agent-loop#message-types) with the text response (no tool calls), followed by a [`ResultMessage`](https://platform.claude.com/docs/en/agent-sdk/agent-loop#message-types) with the final text, token usage, cost, and session ID.

<!-- para:0007 -->
A quick question ("what files are here?") might take one or two turns of calling `Glob` and responding with the results. A complex task ("refactor the auth module and update the tests") can chain dozens of tool calls across many turns, reading files, editing code, and running tests, with Claude adjusting its approach based on each result.

<!-- para:0008 -->
## Turns and messages

<!-- para:0009 -->
A turn is one round trip inside the loop: Claude produces output that includes tool calls, the SDK executes those tools, and the results feed back to Claude automatically. This happens without yielding control back to your code. Turns continue until Claude produces output with no tool calls, at which point the loop ends and the final result is delivered.

<!-- para:0010 -->
Consider what a full session might look like for the prompt "Fix the failing tests in auth.ts".

<!-- para:0011 -->
First, the SDK sends your prompt to Claude and yields a [`SystemMessage`](https://platform.claude.com/docs/en/agent-sdk/agent-loop#message-types) with the session metadata. Then the loop begins:

<!-- para:0012 -->
1. **Turn 1:** Claude calls `Bash` to run `npm test`. The SDK yields an [`AssistantMessage`](https://platform.claude.com/docs/en/agent-sdk/agent-loop#message-types) with the tool call, executes the command, then yields a [`UserMessage`](https://platform.claude.com/docs/en/agent-sdk/agent-loop#message-types) with the output (three failures).
2. **Turn 2:** Claude calls `Read` on `auth.ts` and `auth.test.ts`. The SDK returns the file contents and yields an `AssistantMessage`.
3. **Turn 3:** Claude calls `Edit` to fix `auth.ts`, then calls `Bash` to re-run `npm test`. All three tests pass. The SDK yields an `AssistantMessage`.
4. Claude produces a text-only response with no tool calls: "Fixed the auth bug, all three tests pass now." The SDK yields a final with this text, then a with the same text plus cost and usage.

<!-- para:0013 -->
That was four turns: three with tool calls, one final text-only response.

<!-- para:0014 -->
You can cap the loop with `max_turns` / `maxTurns`, which counts tool-use turns only. For example, `max_turns=2` in the loop above would have stopped before the edit step. You can also use `max_budget_usd` / `maxBudgetUsd` to cap turns based on a spend threshold.

<!-- para:0015 -->
Without limits, the loop runs until Claude finishes on its own, which is fine for well-scoped tasks but can run long on open-ended prompts ("improve this codebase"). Setting a budget is a good default for production agents. See [Turns and budget](https://platform.claude.com/docs/en/agent-sdk/agent-loop#turns-and-budget) below for the option reference.

<!-- para:0016 -->
## Message types

<!-- para:0017 -->
As the loop runs, the SDK yields a stream of messages. Each message carries a type that tells you what stage of the loop it came from. The five core types are:

<!-- para:0018 -->
- **`SystemMessage`:** session lifecycle events. The `subtype` field distinguishes them: `"init"` is the first message (session metadata), and `"compact_boundary"` fires after [compaction](https://platform.claude.com/docs/en/agent-sdk/agent-loop#automatic-compaction).
- **`AssistantMessage`:** emitted after each Claude response, including the final text-only one. Contains text content blocks and tool call blocks from that turn.
- **`UserMessage`:** emitted after each tool execution with the tool result content sent back to Claude. Also emitted for any user inputs you stream mid-loop.
- **`StreamEvent`:** only emitted when partial messages are enabled. Contains raw API streaming events (text deltas, tool input chunks). See [Stream responses](https://platform.claude.com/docs/en/agent-sdk/streaming-output).
- **`ResultMessage`:** the last message, always. Contains the final text result, token usage, cost, and session ID. Check the field to determine whether the task succeeded or hit a limit. See .

<!-- para:0019 -->
These five types cover the full agent loop lifecycle in both SDKs. The TypeScript SDK also yields additional observability events (hook events, tool progress, rate limits, task notifications) that provide extra detail but are not required to drive the loop. See the [Python message types reference](https://platform.claude.com/docs/en/agent-sdk/python#message-types) and [TypeScript message types reference](https://platform.claude.com/docs/en/agent-sdk/typescript#message-types) for the complete lists.

<!-- para:0020 -->
### Handle messages

<!-- para:0021 -->
Which messages you handle depends on what you're building:

<!-- para:0022 -->
- **Final results only:** handle `ResultMessage` to get the output, cost, and whether the task succeeded or hit a limit.
- **Progress updates:** handle `AssistantMessage` to see what Claude is doing each turn, including which tools it called.
- **Live streaming:** enable partial messages (`include_partial_messages` in Python, `includePartialMessages` in TypeScript) to get `StreamEvent` messages in real time. See [Stream responses in real-time](https://platform.claude.com/docs/en/agent-sdk/streaming-output).

<!-- para:0023 -->
How you check message types depends on the SDK:

<!-- para:0024 -->
- **Python:** check message types with `isinstance()` against classes imported from `claude_agent_sdk` (for example, `isinstance(message, ResultMessage)`).
- **TypeScript:** check the `type` string field (for example, `message.type === "result"`). `AssistantMessage` and `UserMessage` wrap the raw API message in a `.message` field, so content blocks are at `message.message.content`, not `message.content`.

<!-- para:0025 -->
### Example: Check message types and handle results

<!-- para:0026 -->
## Tool execution

<!-- para:0027 -->
Tools give your agent the ability to take action. Without tools, Claude can only respond with text. With tools, Claude can read files, run commands, search code, and interact with external services.

<!-- para:0028 -->
### Built-in tools

<!-- para:0029 -->
The SDK includes the same tools that power Claude Code:

<!-- para:0030 -->
Beyond built-in tools, you can:

<!-- para:0031 -->
- **Connect external services** with [MCP servers](https://platform.claude.com/docs/en/agent-sdk/mcp) (databases, browsers, APIs)
- **Define custom tools** with [custom tool handlers](https://platform.claude.com/docs/en/agent-sdk/custom-tools)
- **Load project skills** via [setting sources](https://platform.claude.com/docs/en/agent-sdk/claude-code-features) for reusable workflows

<!-- para:0032 -->
### Tool permissions

<!-- para:0033 -->
Claude determines which tools to call based on the task, but you control whether those calls are allowed to execute. You can auto-approve specific tools, block others entirely, or require approval for everything. Three options work together to determine what runs:

<!-- para:0034 -->
- **`allowed_tools` / `allowedTools`** auto-approves listed tools. A read-only agent with `["Read", "Glob", "Grep"]` in its allowed tools list runs those tools without prompting. Tools not listed are still available but require permission.
- **`disallowed_tools` / `disallowedTools`** blocks listed tools, regardless of other settings. See [Permissions](https://platform.claude.com/docs/en/agent-sdk/permissions) for the order that rules are checked before a tool runs.
- **`permission_mode` / `permissionMode`** controls what happens to tools that aren't covered by allow or deny rules. See [Permission mode](https://platform.claude.com/docs/en/agent-sdk/agent-loop#permission-mode) for available modes.

<!-- para:0035 -->
You can also scope individual tools with rules like `"Bash(npm:*)"` to allow only specific commands. See [Permissions](https://platform.claude.com/docs/en/agent-sdk/permissions) for the full rule syntax.

<!-- para:0036 -->
When a tool is denied, Claude receives a rejection message as the tool result and typically attempts a different approach or reports that it couldn't proceed.

<!-- para:0037 -->
### Parallel tool execution

<!-- para:0038 -->
When Claude requests multiple tool calls in a single turn, both SDKs can run them concurrently or sequentially depending on the tool. Read-only tools (like `Read`, `Glob`, `Grep`, and MCP tools marked as read-only) can run concurrently. Tools that modify state (like `Edit`, `Write`, and `Bash`) run sequentially to avoid conflicts.

<!-- para:0039 -->
Custom tools default to sequential execution. To enable parallel execution for a custom tool, mark it as read-only in its annotations: `readOnly` in [TypeScript](https://platform.claude.com/docs/en/agent-sdk/typescript#tool) or `readOnlyHint` in [Python](https://platform.claude.com/docs/en/agent-sdk/python#tool).

<!-- para:0040 -->
## Control how the loop runs

<!-- para:0041 -->
You can limit how many turns the loop takes, how much it costs, how deeply Claude reasons, and whether tools require approval before running. All of these are fields on [`ClaudeAgentOptions`](https://platform.claude.com/docs/en/agent-sdk/python#claude-agent-options) (Python) / [`Options`](https://platform.claude.com/docs/en/agent-sdk/typescript#options) (TypeScript).

<!-- para:0042 -->
### Turns and budget

<!-- para:0043 -->
When either limit is hit, the SDK returns a `ResultMessage` with a corresponding error subtype (`error_max_turns` or `error_max_budget_usd`). See [Handle the result](https://platform.claude.com/docs/en/agent-sdk/agent-loop#handle-the-result) for how to check these subtypes and [`ClaudeAgentOptions`](https://platform.claude.com/docs/en/agent-sdk/python#claude-agent-options) / [`Options`](https://platform.claude.com/docs/en/agent-sdk/typescript#options) for syntax.

<!-- para:0044 -->
### Effort level

<!-- para:0045 -->
The `effort` option controls how much reasoning Claude applies. Lower effort levels use fewer tokens per turn and reduce cost. Not all models support the effort parameter. See [Effort](https://platform.claude.com/docs/en/build-with-claude/effort) for which models support it.

<!-- para:0046 -->
If you don't set `effort`, the Python SDK leaves the parameter unset and defers to the model's default behavior. The TypeScript SDK defaults to `"high"`.

<!-- para:0047 -->
`effort` trades latency and token cost for reasoning depth within each response. [Extended thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking) is a separate feature that produces visible chain-of-thought blocks in the output. They are independent: you can set `effort: "low"` with extended thinking enabled, or `effort: "max"` without it.

<!-- para:0048 -->
Use lower effort for agents doing simple, well-scoped tasks (like listing files or running a single grep) to reduce cost and latency. `effort` is set at the top-level `query()` options, not per-subagent.

<!-- para:0049 -->
### Permission mode

<!-- para:0050 -->
The permission mode option (`permission_mode` in Python, `permissionMode` in TypeScript) controls whether the agent asks for approval before using tools:

<!-- para:0051 -->
For interactive applications, use `"default"` with a tool approval callback to surface approval prompts. For autonomous agents on a dev machine, `"acceptEdits"` auto-approves file edits while still gating `Bash` behind allow rules. Reserve `"bypassPermissions"` for CI, containers, or other isolated environments. See [Permissions](https://platform.claude.com/docs/en/agent-sdk/permissions) for full details.

<!-- para:0052 -->
### Model

<!-- para:0053 -->
If you don't set `model`, the SDK uses Claude Code's default, which depends on your authentication method and subscription. Set it explicitly (for example, `model="claude-sonnet-4-6"`) to pin a specific model or to use a smaller model for faster, cheaper agents. See [models](https://platform.claude.com/docs/en/about-claude/models) for available IDs.

<!-- para:0054 -->
## The context window

<!-- para:0055 -->
The context window is the total amount of information available to Claude during a session. It does not reset between turns within a session. Everything accumulates: the system prompt, tool definitions, conversation history, tool inputs, and tool outputs. Content that stays the same across turns (system prompt, tool definitions, CLAUDE.md) is automatically [prompt cached](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), which reduces cost and latency for repeated prefixes.

<!-- para:0056 -->
### What consumes context

<!-- para:0057 -->
Here's how each component affects context in the SDK:

<!-- para:0058 -->
Large tool outputs consume significant context. Reading a big file or running a command with verbose output can use thousands of tokens in a single turn. Context accumulates across turns, so longer sessions with many tool calls build up significantly more context than short ones.

<!-- para:0059 -->
### Automatic compaction

<!-- para:0060 -->
When the context window approaches its limit, the SDK automatically compacts the conversation: it summarizes older history to free space, keeping your most recent exchanges and key decisions intact. The SDK emits a `SystemMessage` with subtype `"compact_boundary"` in the stream when this happens.

<!-- para:0061 -->
Compaction replaces older messages with a summary, so specific instructions from early in the conversation may not be preserved. Persistent rules belong in CLAUDE.md (loaded via [`settingSources`](https://platform.claude.com/docs/en/agent-sdk/claude-code-features)) rather than in the initial prompt, because CLAUDE.md content is re-injected on every request.

<!-- para:0062 -->
You can customize compaction behavior in several ways:

<!-- para:0063 -->
- **Summarization instructions in CLAUDE.md:** The compactor reads your CLAUDE.md like any other context, so you can include a section telling it what to preserve when summarizing. The section header is free-form (not a magic string); the compactor matches on intent.
- **`PreCompact` hook:** Run custom logic before compaction occurs, for example to archive the full transcript. The hook receives a `trigger` field (`manual` or `auto`). See [hooks](https://platform.claude.com/docs/en/agent-sdk/hooks).
- **Manual compaction:** Send `/compact` as a prompt string to trigger compaction on demand. (Slash commands sent this way are SDK inputs, not CLI-only shortcuts. See [slash commands in the SDK](https://platform.claude.com/docs/en/agent-sdk/slash-commands).)

<!-- para:0064 -->
### Example: Summarization instructions in CLAUDE.md

<!-- para:0065 -->
### Keep context efficient

<!-- para:0066 -->
A few strategies for long-running agents:

<!-- para:0067 -->
- **Use subagents for subtasks.** Each subagent starts with a fresh conversation (no prior message history, though it does load its own system prompt and project-level context like CLAUDE.md). It does not see the parent's turns, and only its final response returns to the parent as a tool result. The main agent's context grows by that summary, not by the full subtask transcript. See [What subagents inherit](https://platform.claude.com/docs/en/agent-sdk/subagents#what-subagents-inherit) for details.
- **Be selective with tools.** Every tool definition takes context space. Use the `tools` field on [`AgentDefinition`](https://platform.claude.com/docs/en/agent-sdk/subagents#agent-definition-configuration) to scope subagents to the minimum set they need, and use [MCP tool search](https://platform.claude.com/docs/en/agent-sdk/mcp#mcp-tool-search) to load tools on demand instead of preloading all of them.
- **Watch MCP server costs.** Each MCP server adds all its tool schemas to every request. A few servers with many tools can consume significant context before the agent does any work. The `ToolSearch` tool can help by loading tools on-demand instead of preloading all of them. See [MCP tool search](https://platform.claude.com/docs/en/agent-sdk/mcp#mcp-tool-search) for configuration.
- **Use lower effort for routine tasks.** Set [effort](https://platform.claude.com/docs/en/agent-sdk/agent-loop#effort-level) to `"low"` for agents that only need to read files or list directories. This reduces token usage and cost.

<!-- para:0068 -->
For a detailed breakdown of per-feature context costs, see [Understand context costs](https://code.claude.com/docs/en/features-overview#understand-context-costs).

<!-- para:0069 -->
## Sessions and continuity

<!-- para:0070 -->
Each interaction with the SDK creates or continues a session. Capture the session ID from `ResultMessage.session_id` (available in both SDKs) to resume later. The TypeScript SDK also exposes it as a direct field on the init `SystemMessage`; in Python it's nested in `SystemMessage.data`.

<!-- para:0071 -->
When you resume, the full context from previous turns is restored: files that were read, analysis that was performed, and actions that were taken. You can also fork a session to branch into a different approach without modifying the original.

<!-- para:0072 -->
See [Session management](https://platform.claude.com/docs/en/agent-sdk/sessions) for the full guide on resume, continue, and fork patterns.

<!-- para:0073 -->
In Python, `ClaudeSDKClient` handles session IDs automatically across multiple calls. See the [Python SDK reference](https://platform.claude.com/docs/en/agent-sdk/python#choosing-between-query-and-claude-sdk-client) for details.

<!-- para:0074 -->
## Handle the result

<!-- para:0075 -->
When the loop ends, the `ResultMessage` tells you what happened and gives you the output. The `subtype` field (available in both SDKs) is the primary way to check termination state.

<!-- para:0076 -->
The `result` field (the final text output) is only present on the `success` variant, so always check the subtype before reading it. All result subtypes carry `total_cost_usd`, `usage`, `num_turns`, and `session_id` so you can track cost and resume even after errors. In Python, `total_cost_usd` and `usage` are typed as optional and may be `None` on some error paths, so guard before formatting them. See [Tracking costs and usage](https://platform.claude.com/docs/en/agent-sdk/cost-tracking) for details on interpreting the `usage` fields.

<!-- para:0077 -->
The result also includes a `stop_reason` field (`string | null` in TypeScript, `str | None` in Python) indicating why the model stopped generating on its final turn. Common values are `end_turn` (model finished normally), `max_tokens` (hit the output token limit), and `refusal` (the model declined the request). On error result subtypes, `stop_reason` carries the value from the last assistant response before the loop ended. To detect refusals, check `stop_reason === "refusal"` (TypeScript) or `stop_reason == "refusal"` (Python). See [`SDKResultMessage`](https://platform.claude.com/docs/en/agent-sdk/typescript#sdk-result-message) (TypeScript) or [`ResultMessage`](https://platform.claude.com/docs/en/agent-sdk/python#result-message) (Python) for the full type.

<!-- para:0078 -->
## Hooks

<!-- para:0079 -->
[Hooks](https://platform.claude.com/docs/en/agent-sdk/hooks) are callbacks that fire at specific points in the loop: before a tool runs, after it returns, when the agent finishes, and so on. Some commonly used hooks are:

<!-- para:0080 -->
Hooks run in your application process, not inside the agent's context window, so they don't consume context. Hooks can also short-circuit the loop: a `PreToolUse` hook that rejects a tool call prevents it from executing, and Claude receives the rejection message instead.

<!-- para:0081 -->
Both SDKs support all the events above. The TypeScript SDK includes additional events that Python does not yet support. See [Control execution with hooks](https://platform.claude.com/docs/en/agent-sdk/hooks) for the complete event list, per-SDK availability, and the full callback API.

<!-- para:0082 -->
## Put it all together

<!-- para:0083 -->
This example combines the key concepts from this page into a single agent that fixes failing tests. It configures the agent with allowed tools (auto-approved so the agent runs autonomously), project settings, and safety limits on turns and reasoning effort. As the loop runs, it captures the session ID for potential resumption, handles the final result, and prints the total cost.

<!-- para:0084 -->
## Next steps

<!-- para:0085 -->
Now that you understand the loop, here's where to go depending on what you're building:

<!-- para:0086 -->
- **Haven't run an agent yet?** Start with the [quickstart](https://platform.claude.com/docs/en/agent-sdk/quickstart) to get the SDK installed and see a full example running end to end.
- **Ready to hook into your project?** [Load CLAUDE.md, skills, and filesystem hooks](https://platform.claude.com/docs/en/agent-sdk/claude-code-features) so the agent follows your project conventions automatically.
- **Building an interactive UI?** Enable [streaming](https://platform.claude.com/docs/en/agent-sdk/streaming-output) to show live text and tool calls as the loop runs.
- **Need tighter control over what the agent can do?** Lock down tool access with [permissions](https://platform.claude.com/docs/en/agent-sdk/permissions), and use [hooks](https://platform.claude.com/docs/en/agent-sdk/hooks) to audit, block, or transform tool calls before they execute.
- **Running long or expensive tasks?** Offload isolated work to [subagents](https://platform.claude.com/docs/en/agent-sdk/subagents) to keep your main context lean.

<!-- para:0087 -->
For the broader conceptual picture of the agentic loop (not SDK-specific), see [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works).

<!-- para:0088 -->
Was this page helpful?
