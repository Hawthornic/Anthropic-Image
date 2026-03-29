---
source_url: https://platform.claude.com/docs/en/agent-sdk/hooks
title: "Intercept and control agent behavior with hooks"
section: docs
---

<!-- para:0001 -->
# Intercept and control agent behavior with hooks

<!-- para:0002 -->
Hooks are callback functions that run your code in response to agent events, like a tool being called, a session starting, or execution stopping. With hooks, you can:

<!-- para:0003 -->
- **Block dangerous operations** before they execute, like destructive shell commands or unauthorized file access
- **Log and audit** every tool call for compliance, debugging, or analytics
- **Transform inputs and outputs** to sanitize data, inject credentials, or redirect file paths
- **Require human approval** for sensitive actions like database writes or API calls
- **Track session lifecycle** to manage state, clean up resources, or send notifications

<!-- para:0004 -->
This guide covers how hooks work, how to configure them, and provides examples for common patterns like blocking tools, modifying inputs, and forwarding notifications.

<!-- para:0005 -->
## How hooks work

<!-- para:0006 -->
1. 1An event firesSomething happens during agent execution and the SDK fires an event: a tool is about to be called (`PreToolUse`), a tool returned a result (`PostToolUse`), a subagent started or stopped, the agent is idle, or execution finished. See the [full list of events](https://platform.claude.com/docs/en/agent-sdk/hooks#available-hooks).
2. 2The SDK collects registered hooksThe SDK checks for hooks registered for that event type. This includes callback hooks you pass in `options.hooks` and shell command hooks from settings files, but only if you explicitly load them with [`settingSources`](https://platform.claude.com/docs/en/agent-sdk/typescript#setting-source) or [`setting_sources`](https://platform.claude.com/docs/en/agent-sdk/python#setting-source).
3. 3Matchers filter which hooks runIf a hook has a [`matcher`](https://platform.claude.com/docs/en/agent-sdk/hooks#matchers) pattern (like `"Write|Edit"`), the SDK tests it against the event's target (for example, the tool name). Hooks without a matcher run for every event of that type.
4. 4Callback functions executeEach matching hook's [callback function](https://platform.claude.com/docs/en/agent-sdk/hooks#callback-functions) receives input about what's happening: the tool name, its arguments, the session ID, and other event-specific details.
5. 5Your callback returns a decisionAfter performing any operations (logging, API calls, validation), your callback returns an [output object](https://platform.claude.com/docs/en/agent-sdk/hooks#outputs) that tells the agent what to do: allow the operation, block it, modify the input, or inject context into the conversation.

<!-- para:0007 -->
The following example puts these steps together. It registers a `PreToolUse` hook (step 1) with a `"Write|Edit"` matcher (step 3) so the callback only fires for file-writing tools. When triggered, the callback receives the tool's input (step 4), checks if the file path targets a `.env` file, and returns `permissionDecision: "deny"` to block the operation (step 5):

<!-- para:0008 -->
```
import asyncio
from claude_agent_sdk import (
    AssistantMessage,
    ClaudeSDKClient,
    ClaudeAgentOptions,
    HookMatcher,
    ResultMessage,
)


# Define a hook callback that receives tool call details
async def protect_env_files(input_data, tool_use_id, context):
    # Extract the file path from the tool's input arguments
    file_path = input_data["tool_input"].get("file_path", "")
    file_name = file_path.split("/")[-1]

    # Block the operation if targeting a .env file
    if file_name == ".env":
        return {
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "deny",
                "permissionDecisionReason": "Cannot modify .env files",
            }
        }

    # Return empty object to allow the operation
    return {}


async def main():
    options = ClaudeAgentOptions(
        hooks={
            # Register the hook for PreToolUse events
            # The matcher filters to only Write and Edit tool calls
            "PreToolUse": [HookMatcher(matcher="Write|Edit", hooks=[protect_env_files])]
        }
    )

    async with ClaudeSDKClient(options=options) as client:
        await client.query("Update the database configuration")
        async for message in client.receive_response():
            # Filter for assistant and result messages
            if isinstance(message, (AssistantMessage, ResultMessage)):
                print(message)


asyncio.run(main())
```

<!-- para:0009 -->
## Available hooks

<!-- para:0010 -->
The SDK provides hooks for different stages of agent execution. Some hooks are available in both SDKs, while others are TypeScript-only.

<!-- para:0011 -->
## Configure hooks

<!-- para:0012 -->
To configure a hook, pass it in the `hooks` field of your agent options (`ClaudeAgentOptions` in Python, the `options` object in TypeScript):

<!-- para:0013 -->
```
options = ClaudeAgentOptions(
    hooks={"PreToolUse": [HookMatcher(matcher="Bash", hooks=[my_callback])]}
)

async with ClaudeSDKClient(options=options) as client:
    await client.query("Your prompt")
    async for message in client.receive_response():
        print(message)
```

<!-- para:0014 -->
The `hooks` option is a dictionary (Python) or object (TypeScript) where:

<!-- para:0015 -->
- **Keys** are [hook event names](https://platform.claude.com/docs/en/agent-sdk/hooks#available-hooks) (e.g., `'PreToolUse'`, `'PostToolUse'`, `'Stop'`)
- **Values** are arrays of [matchers](https://platform.claude.com/docs/en/agent-sdk/hooks#matchers), each containing an optional filter pattern and your [callback functions](https://platform.claude.com/docs/en/agent-sdk/hooks#callback-functions)

<!-- para:0016 -->
### Matchers

<!-- para:0017 -->
Use matchers to filter when your callbacks fire. The `matcher` field is a regex string that matches against a different value depending on the hook event type. For example, tool-based hooks match against the tool name, while `Notification` hooks match against the notification type. See the [Claude Code hooks reference](https://code.claude.com/docs/en/hooks#matcher-patterns) for the full list of matcher values for each event type.

<!-- para:0018 -->
Use the `matcher` pattern to target specific tools whenever possible. A matcher with `'Bash'` only runs for Bash commands, while omitting the pattern runs your callbacks for every occurrence of the event. Note that for tool-based hooks, matchers only filter by **tool name**, not by file paths or other arguments. To filter by file path, check `tool_input.file_path` inside your callback.

<!-- para:0019 -->
**Discovering tool names:** See [Tool Input Types](https://platform.claude.com/docs/en/agent-sdk/typescript#tool-input-types) for the full list of built-in tool names, or add a hook without a matcher to log all tool calls your session makes.**

<!-- para:0020 -->
**MCP tool naming:** MCP tools always start with `mcp__` followed by the server name and action: `mcp__<server>__<action>`. For example, if you configure a server named `playwright`, its tools will be named `mcp__playwright__browser_screenshot`, `mcp__playwright__browser_click`, etc. The server name comes from the key you use in the `mcpServers` configuration.**

<!-- para:0021 -->
### Callback functions

<!-- para:0022 -->
#### Inputs

<!-- para:0023 -->
Every hook callback receives three arguments:

<!-- para:0024 -->
- **Input data:** a typed object containing event details. Each hook type has its own input shape (for example, `PreToolUseHookInput` includes `tool_name` and `tool_input`, while `NotificationHookInput` includes `message`). See the full type definitions in the [TypeScript](https://platform.claude.com/docs/en/agent-sdk/typescript#hook-input) and [Python](https://platform.claude.com/docs/en/agent-sdk/python#hook-input) SDK references. All hook inputs share `session_id`, `cwd`, and `hook_event_name`. `agent_id` and `agent_type` are populated when the hook fires inside a subagent. In TypeScript, these are on the base hook input and available to all hook types. In Python, they are on `PreToolUse`, `PostToolUse`, and `PostToolUseFailure` only.
- **Tool use ID** (`str | None` / `string | undefined`): correlates `PreToolUse` and `PostToolUse` events for the same tool call.
- **Context:** in TypeScript, contains a `signal` property (`AbortSignal`) for cancellation. In Python, this argument is reserved for future use.

<!-- para:0025 -->
#### Outputs

<!-- para:0026 -->
Your callback returns an object with two categories of fields:

<!-- para:0027 -->
- **Top-level fields** control the conversation: `systemMessage` injects a message into the conversation visible to the model, and `continue` (`continue_` in Python) determines whether the agent keeps running after this hook.
- **`hookSpecificOutput`** controls the current operation. The fields inside depend on the hook event type. For `PreToolUse` hooks, this is where you set `permissionDecision` (`"allow"`, `"deny"`, or `"ask"`), `permissionDecisionReason`, and `updatedInput`. For `PostToolUse` hooks, you can set `additionalContext` to append information to the tool result.

<!-- para:0028 -->
Return `{}` to allow the operation without changes. SDK callback hooks use the same JSON output format as [Claude Code shell command hooks](https://code.claude.com/docs/en/hooks#json-output), which documents every field and event-specific option. For the SDK type definitions, see the [TypeScript](https://platform.claude.com/docs/en/agent-sdk/typescript#sync-hook-json-output) and [Python](https://platform.claude.com/docs/en/agent-sdk/python#sync-hook-json-output) SDK references.

<!-- para:0029 -->
When multiple hooks or permission rules apply, **deny** takes priority over **ask**, which takes priority over **allow**. If any hook returns `deny`, the operation is blocked regardless of other hooks.

<!-- para:0030 -->
#### Asynchronous output

<!-- para:0031 -->
By default, the agent waits for your hook to return before proceeding. If your hook performs a side effect (logging, sending a webhook) and doesn't need to influence the agent's behavior, you can return an async output instead. This tells the agent to continue immediately without waiting for the hook to finish:

<!-- para:0032 -->
```
async def async_hook(input_data, tool_use_id, context):
    # Start a background task, then return immediately
    asyncio.create_task(send_to_logging_service(input_data))
    return {"async_": True, "asyncTimeout": 30000}
```

<!-- para:0033 -->
Async outputs cannot block, modify, or inject context into the operation since the agent has already moved on. Use them only for side effects like logging, metrics, or notifications.

<!-- para:0034 -->
## Examples

<!-- para:0035 -->
### Modify tool input

<!-- para:0036 -->
This example intercepts Write tool calls and rewrites the `file_path` argument to prepend `/sandbox`, redirecting all file writes to a sandboxed directory. The callback returns `updatedInput` with the modified path and `permissionDecision: 'allow'` to auto-approve the rewritten operation:

<!-- para:0037 -->
```
async def redirect_to_sandbox(input_data, tool_use_id, context):
    if input_data["hook_event_name"] != "PreToolUse":
        return {}

    if input_data["tool_name"] == "Write":
        original_path = input_data["tool_input"].get("file_path", "")
        return {
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "allow",
                "updatedInput": {
                    **input_data["tool_input"],
                    "file_path": f"/sandbox{original_path}",
                },
            }
        }
    return {}
```

<!-- para:0038 -->
When using `updatedInput`, you must also include `permissionDecision: 'allow'`. Always return a new object rather than mutating the original `tool_input`.

<!-- para:0039 -->
### Add context and block a tool

<!-- para:0040 -->
This example blocks any attempt to write to the `/etc` directory and uses two output fields together: `permissionDecision: 'deny'` stops the tool call, while `systemMessage` injects a reminder into the conversation so the agent receives context about why the operation was blocked and avoids retrying it:

<!-- para:0041 -->
```
async def block_etc_writes(input_data, tool_use_id, context):
    file_path = input_data["tool_input"].get("file_path", "")

    if file_path.startswith("/etc"):
        return {
            # Top-level field: inject guidance into the conversation
            "systemMessage": "Remember: system directories like /etc are protected.",
            # hookSpecificOutput: block the operation
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "deny",
                "permissionDecisionReason": "Writing to /etc is not allowed",
            },
        }
    return {}
```

<!-- para:0042 -->
### Auto-approve specific tools

<!-- para:0043 -->
By default, the agent may prompt for permission before using certain tools. This example auto-approves read-only filesystem tools (Read, Glob, Grep) by returning `permissionDecision: 'allow'`, letting them run without user confirmation while leaving all other tools subject to normal permission checks:

<!-- para:0044 -->
```
async def auto_approve_read_only(input_data, tool_use_id, context):
    if input_data["hook_event_name"] != "PreToolUse":
        return {}

    read_only_tools = ["Read", "Glob", "Grep"]
    if input_data["tool_name"] in read_only_tools:
        return {
            "hookSpecificOutput": {
                "hookEventName": input_data["hook_event_name"],
                "permissionDecision": "allow",
                "permissionDecisionReason": "Read-only tool auto-approved",
            }
        }
    return {}
```

<!-- para:0045 -->
### Chain multiple hooks

<!-- para:0046 -->
Hooks execute in the order they appear in the array. Keep each hook focused on a single responsibility and chain multiple hooks for complex logic:

<!-- para:0047 -->
```
options = ClaudeAgentOptions(
    hooks={
        "PreToolUse": [
            HookMatcher(hooks=[rate_limiter]),  # First: check rate limits
            HookMatcher(hooks=[authorization_check]),  # Second: verify permissions
            HookMatcher(hooks=[input_sanitizer]),  # Third: sanitize inputs
            HookMatcher(hooks=[audit_logger]),  # Last: log the action
        ]
    }
)
```

<!-- para:0048 -->
### Filter with regex matchers

<!-- para:0049 -->
Use regex patterns to match multiple tools. This example registers three matchers with different scopes: the first triggers `file_security_hook` only for file modification tools, the second triggers `mcp_audit_hook` for any MCP tool (tools whose names start with `mcp__`), and the third triggers `global_logger` for every tool call regardless of name:

<!-- para:0050 -->
```
options = ClaudeAgentOptions(
    hooks={
        "PreToolUse": [
            # Match file modification tools
            HookMatcher(matcher="Write|Edit|Delete", hooks=[file_security_hook]),
            # Match all MCP tools
            HookMatcher(matcher="^mcp__", hooks=[mcp_audit_hook]),
            # Match everything (no matcher)
            HookMatcher(hooks=[global_logger]),
        ]
    }
)
```

<!-- para:0051 -->
### Track subagent activity

<!-- para:0052 -->
Use `SubagentStop` hooks to monitor when subagents finish their work. See the full input type in the [TypeScript](https://platform.claude.com/docs/en/agent-sdk/typescript#hook-input) and [Python](https://platform.claude.com/docs/en/agent-sdk/python#hook-input) SDK references. This example logs a summary each time a subagent completes:

<!-- para:0053 -->
```
async def subagent_tracker(input_data, tool_use_id, context):
    # Log subagent details when it finishes
    print(f"[SUBAGENT] Completed: {input_data['agent_id']}")
    print(f"  Transcript: {input_data['agent_transcript_path']}")
    print(f"  Tool use ID: {tool_use_id}")
    print(f"  Stop hook active: {input_data.get('stop_hook_active')}")
    return {}


options = ClaudeAgentOptions(
    hooks={"SubagentStop": [HookMatcher(hooks=[subagent_tracker])]}
)
```

<!-- para:0054 -->
### Make HTTP requests from hooks

<!-- para:0055 -->
Hooks can perform asynchronous operations like HTTP requests. Catch errors inside your hook instead of letting them propagate, since an unhandled exception can interrupt the agent.

<!-- para:0056 -->
This example sends a webhook after each tool completes, logging which tool ran and when. The hook catches errors so a failed webhook doesn't interrupt the agent:

<!-- para:0057 -->
```
import asyncio
import json
import urllib.request
from datetime import datetime


def _send_webhook(tool_name):
    """Synchronous helper that POSTs tool usage data to an external webhook."""
    data = json.dumps(
        {
            "tool": tool_name,
            "timestamp": datetime.now().isoformat(),
        }
    ).encode()
    req = urllib.request.Request(
        "https://api.example.com/webhook",
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    urllib.request.urlopen(req)


async def webhook_notifier(input_data, tool_use_id, context):
    # Only fire after a tool completes (PostToolUse), not before
    if input_data["hook_event_name"] != "PostToolUse":
        return {}

    try:
        # Run the blocking HTTP call in a thread to avoid blocking the event loop
        await asyncio.to_thread(_send_webhook, input_data["tool_name"])
    except Exception as e:
        # Log the error but don't raise. A failed webhook shouldn't stop the agent
        print(f"Webhook request failed: {e}")

    return {}
```

<!-- para:0058 -->
### Forward notifications to Slack

<!-- para:0059 -->
Use `Notification` hooks to receive system notifications from the agent and forward them to external services. Notifications fire for specific event types: `permission_prompt` (Claude needs permission), `idle_prompt` (Claude is waiting for input), `auth_success` (authentication completed), and `elicitation_dialog` (Claude is prompting the user). Each notification includes a `message` field with a human-readable description and optionally a `title`.

<!-- para:0060 -->
This example forwards every notification to a Slack channel. It requires a [Slack incoming webhook URL](https://api.slack.com/messaging/webhooks), which you create by adding an app to your Slack workspace and enabling incoming webhooks:

<!-- para:0061 -->
```
import asyncio
import json
import urllib.request

from claude_agent_sdk import ClaudeSDKClient, ClaudeAgentOptions, HookMatcher


def _send_slack_notification(message):
    """Synchronous helper that sends a message to Slack via incoming webhook."""
    data = json.dumps({"text": f"Agent status: {message}"}).encode()
    req = urllib.request.Request(
        "https://hooks.slack.com/services/YOUR/WEBHOOK/URL",
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    urllib.request.urlopen(req)


async def notification_handler(input_data, tool_use_id, context):
    try:
        # Run the blocking HTTP call in a thread to avoid blocking the event loop
        await asyncio.to_thread(_send_slack_notification, input_data.get("message", ""))
    except Exception as e:
        print(f"Failed to send notification: {e}")

    # Return empty object. Notification hooks don't modify agent behavior
    return {}


async def main():
    options = ClaudeAgentOptions(
        hooks={
            # Register the hook for Notification events (no matcher needed)
            "Notification": [HookMatcher(hooks=[notification_handler])],
        },
    )

    async with ClaudeSDKClient(options=options) as client:
        await client.query("Analyze this codebase")
        async for message in client.receive_response():
            print(message)


asyncio.run(main())
```

<!-- para:0062 -->
## Fix common issues

<!-- para:0063 -->
### Hook not firing

<!-- para:0064 -->
- Verify the hook event name is correct and case-sensitive (`PreToolUse`, not `preToolUse`)
- Check that your matcher pattern matches the tool name exactly
- Ensure the hook is under the correct event type in `options.hooks`
- For non-tool hooks like `Stop` and `SubagentStop`, matchers match against different fields (see [matcher patterns](https://code.claude.com/docs/en/hooks#matcher-patterns))
- Hooks may not fire when the agent hits the [`max_turns`](https://platform.claude.com/docs/en/agent-sdk/python#claude-agent-options) limit because the session ends before hooks can execute

<!-- para:0065 -->
### Matcher not filtering as expected

<!-- para:0066 -->
Matchers only match **tool names**, not file paths or other arguments. To filter by file path, check `tool_input.file_path` inside your hook:

<!-- para:0067 -->
```
const myHook: HookCallback = async (input, toolUseID, { signal }) => {
  const preInput = input as PreToolUseHookInput;
  const toolInput = preInput.tool_input as Record<string, unknown>;
  const filePath = toolInput?.file_path as string;
  if (!filePath?.endsWith(".md")) return {}; // Skip non-markdown files
  // Process markdown files...
  return {};
};
```

<!-- para:0068 -->
### Hook timeout

<!-- para:0069 -->
- Increase the `timeout` value in the `HookMatcher` configuration
- Use the `AbortSignal` from the third callback argument to handle cancellation gracefully in TypeScript

<!-- para:0070 -->
### Tool blocked unexpectedly

<!-- para:0071 -->
- Check all `PreToolUse` hooks for `permissionDecision: 'deny'` returns
- Add logging to your hooks to see what `permissionDecisionReason` they're returning
- Verify matcher patterns aren't too broad (an empty matcher matches all tools)

<!-- para:0072 -->
### Modified input not applied

<!-- para:0073 -->
- Ensure `updatedInput` is inside `hookSpecificOutput`, not at the top level: `return { hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "allow", updatedInput: { command: "new command" } } };`
- You must also return `permissionDecision: 'allow'` for the input modification to take effect
- Include `hookEventName` in `hookSpecificOutput` to identify which hook type the output is for

<!-- para:0074 -->
### Session hooks not available in Python

<!-- para:0075 -->
`SessionStart` and `SessionEnd` can be registered as SDK callback hooks in TypeScript, but are not available in the Python SDK (`HookEvent` omits them). In Python, they are only available as [shell command hooks](https://code.claude.com/docs/en/hooks#hook-events) defined in settings files (for example, `.claude/settings.json`). To load shell command hooks from your SDK application, include the appropriate setting source with [`setting_sources`](https://platform.claude.com/docs/en/agent-sdk/python#setting-source) or [`settingSources`](https://platform.claude.com/docs/en/agent-sdk/typescript#setting-source):

<!-- para:0076 -->
```
options = ClaudeAgentOptions(
    setting_sources=["project"],  # Loads .claude/settings.json including hooks
)
```

<!-- para:0077 -->
To run initialization logic as a Python SDK callback instead, use the first message from `client.receive_response()` as your trigger.

<!-- para:0078 -->
### Subagent permission prompts multiplying

<!-- para:0079 -->
When spawning multiple subagents, each one may request permissions separately. Subagents do not automatically inherit parent agent permissions. To avoid repeated prompts, use `PreToolUse` hooks to auto-approve specific tools, or configure permission rules that apply to subagent sessions.

<!-- para:0080 -->
### Recursive hook loops with subagents

<!-- para:0081 -->
A `UserPromptSubmit` hook that spawns subagents can create infinite loops if those subagents trigger the same hook. To prevent this:

<!-- para:0082 -->
- Check for a subagent indicator in the hook input before spawning
- Use a shared variable or session state to track whether you're already inside a subagent
- Scope hooks to only run for the top-level agent session

<!-- para:0083 -->
### systemMessage not appearing in output

<!-- para:0084 -->
The `systemMessage` field adds context to the conversation that the model sees, but it may not appear in all SDK output modes. If you need to surface hook decisions to your application, log them separately or use a dedicated output channel.

<!-- para:0085 -->
## Related resources

<!-- para:0086 -->
- [Claude Code hooks reference](https://code.claude.com/docs/en/hooks): full JSON input/output schemas, event documentation, and matcher patterns
- [Claude Code hooks guide](https://code.claude.com/docs/en/hooks-guide): shell command hook examples and walkthroughs
- [TypeScript SDK reference](https://platform.claude.com/docs/en/agent-sdk/typescript): hook types, input/output definitions, and configuration options
- [Python SDK reference](https://platform.claude.com/docs/en/agent-sdk/python): hook types, input/output definitions, and configuration options
- [Permissions](https://platform.claude.com/docs/en/agent-sdk/permissions): control what your agent can do
- [Custom tools](https://platform.claude.com/docs/en/agent-sdk/custom-tools): build tools to extend agent capabilities

<!-- para:0087 -->
Was this page helpful?
