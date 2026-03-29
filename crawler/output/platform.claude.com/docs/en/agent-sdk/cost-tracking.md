---
source_url: https://platform.claude.com/docs/en/agent-sdk/cost-tracking
title: "Track cost and usage"
section: docs
---

<!-- para:0001 -->
# Track cost and usage

<!-- para:0002 -->
The Claude Agent SDK provides detailed token usage information for each interaction with Claude. This guide explains how to properly track costs and understand usage reporting, especially when dealing with parallel tool uses and multi-step conversations.

<!-- para:0003 -->
For complete API documentation, see the [TypeScript SDK reference](https://platform.claude.com/docs/en/agent-sdk/typescript) and [Python SDK reference](https://platform.claude.com/docs/en/agent-sdk/python).

<!-- para:0004 -->
## Understand token usage

<!-- para:0005 -->
The TypeScript and Python SDKs expose usage data at different levels of detail:

<!-- para:0006 -->
- **TypeScript** provides per-step token breakdowns on each assistant message (`message.message.id`, `message.message.usage`), per-model cost via `modelUsage`, and a cumulative total on the result message.
- **Python** provides the accumulated total on the result message (`total_cost_usd` and `usage` dict). Per-step breakdowns are not available on individual assistant messages.

<!-- para:0007 -->
Both SDKs use the same underlying cost model. The difference is how much granularity each SDK exposes.

<!-- para:0008 -->
Cost tracking depends on understanding how the SDK scopes usage data:

<!-- para:0009 -->
- **`query()` call:** one invocation of the SDK's `query()` function. A single call can involve multiple steps (Claude responds, uses tools, gets results, responds again). Each call produces one [`result`](https://platform.claude.com/docs/en/agent-sdk/typescript#sdk-result-message) message at the end.
- **Step:** a single request/response cycle within a `query()` call. In TypeScript, each step produces assistant messages with token usage.
- **Session:** a series of `query()` calls linked by a session ID (using the `resume` option). Each `query()` call within a session reports its own cost independently.

<!-- para:0010 -->
The following diagram shows the message stream from a single `query()` call, with token usage reported at each step and the authoritative total at the end:

<!-- para:0011 -->
1. 1Each step produces assistant messagesWhen Claude responds, it sends one or more assistant messages. In TypeScript, each assistant message contains a nested `BetaMessage` (accessed via `message.message`) with an `id` and a [`usage`](https://platform.claude.com/docs/en/api/messages) object with token counts (`input_tokens`, `output_tokens`). When Claude uses multiple tools in one turn, all messages in that turn share the same `id`, so deduplicate by ID to avoid double-counting. In Python, per-step usage is not available on individual messages.
2. 2The result message provides the authoritative totalWhen the `query()` call completes, the SDK emits a result message with `total_cost_usd` and cumulative `usage`. This is available in both TypeScript ([`SDKResultMessage`](https://platform.claude.com/docs/en/agent-sdk/typescript#sdk-result-message)) and Python ([`ResultMessage`](https://platform.claude.com/docs/en/agent-sdk/python#result-message)). If you make multiple `query()` calls (for example, in a multi-turn session), each result only reflects the cost of that individual call. If you only need the total cost, you can ignore the per-step usage and read this single value.

<!-- para:0012 -->
## Get the total cost of a query

<!-- para:0013 -->
The result message ([TypeScript](https://platform.claude.com/docs/en/agent-sdk/typescript#sdk-result-message), [Python](https://platform.claude.com/docs/en/agent-sdk/python#result-message)) is the last message in every `query()` call. It includes `total_cost_usd`, the cumulative cost across all steps in that call. This works for both success and error results. If you use sessions to make multiple `query()` calls, each result only reflects the cost of that individual call.

<!-- para:0014 -->
The following examples iterate over the message stream from a `query()` call and print the total cost when the `result` message arrives:

<!-- para:0015 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({ prompt: "Summarize this project" })) {
  if (message.type === "result") {
    console.log(`Total cost: $${message.total_cost_usd}`);
  }
}
```

<!-- para:0016 -->
## Track detailed usage in TypeScript

<!-- para:0017 -->
The TypeScript SDK exposes additional usage granularity that is not available in Python. The Python SDK's `AssistantMessage` does not expose per-step token usage or per-model breakdowns. Use [`ResultMessage.usage`](https://platform.claude.com/docs/en/agent-sdk/python#result-message) for cumulative totals instead.

<!-- para:0018 -->
### Track per-step usage

<!-- para:0019 -->
Each assistant message contains a nested `BetaMessage` (accessed via `message.message`) with an `id` and `usage` object with token counts. When Claude uses tools in parallel, multiple messages share the same `id` with identical usage data. Track which IDs you've already counted and skip duplicates to avoid inflated totals.

<!-- para:0020 -->
Parallel tool calls produce multiple assistant messages whose nested `BetaMessage` shares the same `id` and identical usage. Always deduplicate by ID to get accurate per-step token counts.

<!-- para:0021 -->
The following example accumulates input and output tokens across all steps, counting each unique message ID only once:

<!-- para:0022 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

const seenIds = new Set<string>();
let totalInputTokens = 0;
let totalOutputTokens = 0;

for await (const message of query({ prompt: "Summarize this project" })) {
  if (message.type === "assistant") {
    const msgId = message.message.id;

    // Parallel tool calls share the same ID, only count once
    if (!seenIds.has(msgId)) {
      seenIds.add(msgId);
      totalInputTokens += message.message.usage.input_tokens;
      totalOutputTokens += message.message.usage.output_tokens;
    }
  }
}

console.log(`Steps: ${seenIds.size}`);
console.log(`Input tokens: ${totalInputTokens}`);
console.log(`Output tokens: ${totalOutputTokens}`);
```

<!-- para:0023 -->
### Break down usage per model

<!-- para:0024 -->
The result message includes [`modelUsage`](https://platform.claude.com/docs/en/agent-sdk/typescript#model-usage), a map of model name to per-model token counts and cost. This is useful when you run multiple models (for example, Haiku for subagents and Opus for the main agent) and want to see where tokens are going.

<!-- para:0025 -->
The following example runs a query and prints the cost and token breakdown for each model used:

<!-- para:0026 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({ prompt: "Summarize this project" })) {
  if (message.type !== "result") continue;

  for (const [modelName, usage] of Object.entries(message.modelUsage)) {
    console.log(`${modelName}: $${usage.costUSD.toFixed(4)}`);
    console.log(`  Input tokens: ${usage.inputTokens}`);
    console.log(`  Output tokens: ${usage.outputTokens}`);
    console.log(`  Cache read: ${usage.cacheReadInputTokens}`);
    console.log(`  Cache creation: ${usage.cacheCreationInputTokens}`);
  }
}
```

<!-- para:0027 -->
## Accumulate costs across multiple calls

<!-- para:0028 -->
Each `query()` call returns its own `total_cost_usd`. The SDK does not provide a session-level total, so if your application makes multiple `query()` calls (for example, in a multi-turn session or across different users), accumulate the totals yourself.

<!-- para:0029 -->
The following examples run two `query()` calls sequentially, add each call's `total_cost_usd` to a running total, and print both the per-call and combined cost:

<!-- para:0030 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

// Track cumulative cost across multiple query() calls
let totalSpend = 0;

const prompts = [
  "Read the files in src/ and summarize the architecture",
  "List all exported functions in src/auth.ts"
];

for (const prompt of prompts) {
  for await (const message of query({ prompt })) {
    if (message.type === "result") {
      totalSpend += message.total_cost_usd ?? 0;
      console.log(`This call: $${message.total_cost_usd}`);
    }
  }
}

console.log(`Total spend: $${totalSpend.toFixed(4)}`);
```

<!-- para:0031 -->
## Handle errors, caching, and token discrepancies

<!-- para:0032 -->
For accurate cost tracking, account for failed conversations, cache token pricing, and occasional reporting inconsistencies.

<!-- para:0033 -->
### Resolve output token discrepancies

<!-- para:0034 -->
In rare cases, you might observe different `output_tokens` values for messages with the same ID. When this occurs:

<!-- para:0035 -->
1. **Use the highest value:** the final message in a group typically contains the accurate total.
2. **Verify against total cost:** the `total_cost_usd` in the result message is authoritative.
3. **Report inconsistencies:** file issues at the [Claude Code GitHub repository](https://github.com/anthropics/claude-code/issues).

<!-- para:0036 -->
### Track costs on failed conversations

<!-- para:0037 -->
Both success and error result messages include `usage` and `total_cost_usd`. If a conversation fails mid-way, you still consumed tokens up to the point of failure. Always read cost data from the result message regardless of its `subtype`.

<!-- para:0038 -->
### Track cache tokens

<!-- para:0039 -->
The Agent SDK automatically uses [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) to reduce costs on repeated content. You do not need to configure caching yourself. The usage object includes two additional fields for cache tracking:

<!-- para:0040 -->
- `cache_creation_input_tokens`: tokens used to create new cache entries (charged at a higher rate than standard input tokens).
- `cache_read_input_tokens`: tokens read from existing cache entries (charged at a reduced rate).

<!-- para:0041 -->
Track these separately from `input_tokens` to understand caching savings. In TypeScript, these fields are typed on the [`Usage`](https://platform.claude.com/docs/en/agent-sdk/typescript#usage) object. In Python, they appear as keys in the [`ResultMessage.usage`](https://platform.claude.com/docs/en/agent-sdk/python#result-message) dict (for example, `message.usage.get("cache_read_input_tokens", 0)`).

<!-- para:0042 -->
## Related documentation

<!-- para:0043 -->
- [TypeScript SDK Reference](https://platform.claude.com/docs/en/agent-sdk/typescript) - Complete API documentation
- [SDK Overview](https://platform.claude.com/docs/en/agent-sdk/overview) - Getting started with the SDK
- [SDK Permissions](https://platform.claude.com/docs/en/agent-sdk/permissions) - Managing tool permissions

<!-- para:0044 -->
Was this page helpful?
