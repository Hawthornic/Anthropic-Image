---
source_url: https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6
title: "What's new in Claude 4.6"
section: docs
---

<!-- para:0001 -->
# What's new in Claude 4.6

<!-- para:0002 -->
Claude 4.6 represents the next generation of Claude models, bringing significant new capabilities and API improvements. This page summarizes all new features available at launch.

<!-- para:0003 -->
## New models

<!-- para:0004 -->
Claude Opus 4.6 and Sonnet 4.6 both support a [1M token context window](https://platform.claude.com/docs/en/build-with-claude/context-windows), extended thinking, and all existing Claude API features. Opus 4.6 offers 128k max output tokens; Sonnet 4.6 offers 64k max output tokens.

<!-- para:0005 -->
For complete pricing and specs, see the [models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

<!-- para:0006 -->
## New features

<!-- para:0007 -->
### Adaptive thinking mode

<!-- para:0008 -->
[Adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking) (`thinking: {type: "adaptive"}`) is the recommended thinking mode for Opus 4.6 and Sonnet 4.6. Claude dynamically decides when and how much to think. At the default effort level (`high`), Claude almost always thinks. At lower effort levels, it may skip thinking for simpler problems.

<!-- para:0009 -->
`thinking: {type: "enabled"}` and `budget_tokens` are **deprecated** on Opus 4.6 and Sonnet 4.6. They remain functional but will be removed in a future model release. Use adaptive thinking and the [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort) to control thinking depth instead. Adaptive thinking also automatically enables interleaved thinking.

<!-- para:0010 -->
```
response = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=16000,
    thinking={"type": "adaptive"},
    messages=[{"role": "user", "content": "Solve this complex problem..."}],
)
```

<!-- para:0011 -->
### Effort parameter GA

<!-- para:0012 -->
The [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort) is now generally available (no beta header required). A new `max` effort level provides the absolute highest capability on Opus 4.6. Combine effort with adaptive thinking for optimal cost-quality tradeoffs.

<!-- para:0013 -->
Sonnet 4.6 introduces the effort parameter to the Sonnet family. Consider setting effort to `medium` for most Sonnet 4.6 use cases to balance speed, cost, and performance.

<!-- para:0014 -->
### Code execution is now free with web tools

<!-- para:0015 -->
[Code execution](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool) is now free when used with [web search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) or [web fetch](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool). When either tool is included in your API request, there are no additional charges for code execution beyond standard input and output token costs. Code execution enables dynamic filtering in web search and web fetch tools, improving accuracy while reducing token consumption. See the [code execution pricing](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool#usage-and-pricing) for details on standalone usage.

<!-- para:0016 -->
### Improved web search and web fetch with dynamic filtering

<!-- para:0017 -->
[Web search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) and [web fetch](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool) tools now support dynamic filtering with Opus 4.6 and Sonnet 4.6. Claude can write and execute code to filter results before they reach the context window, keeping only relevant information and improving accuracy while reducing token consumption. To enable dynamic filtering, use the `web_search_20260209` or `web_fetch_20260209` tool versions.

<!-- para:0018 -->
### Tools graduating to general availability

<!-- para:0019 -->
The following tools are now generally available:

<!-- para:0020 -->
- [Code execution](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool) (free with web tools)
- [Web fetch](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool)
- [Programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)
- [Tool search tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)
- [Tool use examples](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools#providing-tool-use-examples)
- [Memory tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool)

<!-- para:0021 -->
### Compaction API (beta)

<!-- para:0022 -->
[Compaction](https://platform.claude.com/docs/en/build-with-claude/compaction) provides automatic, server-side context summarization, enabling effectively infinite conversations. When context approaches the window limit, the API automatically summarizes earlier parts of the conversation.

<!-- para:0023 -->
### Fast mode (beta: research preview)

<!-- para:0024 -->
[Fast mode](https://platform.claude.com/docs/en/build-with-claude/fast-mode) (`speed: "fast"`) delivers significantly faster output token generation for Opus models. Fast mode is up to 2.5x as fast at premium pricing ($30/$150 per MTok). This is the same model running with faster inference (no change to intelligence or capabilities).

<!-- para:0025 -->
```
response = client.beta.messages.create(
    model="claude-opus-4-6",
    max_tokens=4096,
    speed="fast",
    betas=["fast-mode-2026-02-01"],
    messages=[{"role": "user", "content": "Refactor this module..."}],
)
```

<!-- para:0026 -->
### Fine-grained tool streaming (GA)

<!-- para:0027 -->
[Fine-grained tool streaming](https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming) is now generally available on all models and platforms. No beta header is required.

<!-- para:0028 -->
### 128k output tokens

<!-- para:0029 -->
Opus 4.6 supports up to 128k output tokens, doubling the previous 64k limit. This enables longer thinking budgets and more comprehensive responses. The SDKs require streaming for requests with large `max_tokens` values to avoid HTTP timeouts. If you don't need to process events incrementally, use `.stream()` with `.get_final_message()` to get the complete response. See [Streaming Messages](https://platform.claude.com/docs/en/build-with-claude/streaming#get-the-final-message-without-handling-events) for details.

<!-- para:0030 -->
### Data residency controls

<!-- para:0031 -->
[Data residency controls](https://platform.claude.com/docs/en/build-with-claude/data-residency) allow you to specify where model inference runs using the `inference_geo` parameter. You can choose `"global"` (default) or `"us"` routing per request. US-only inference is priced at 1.1x on Claude Opus 4.6 and newer models.

<!-- para:0032 -->
## Deprecations

<!-- para:0033 -->
### `type: "enabled"` and `budget_tokens`

<!-- para:0034 -->
`thinking: {type: "enabled", budget_tokens: N}` is [**deprecated**](https://platform.claude.com/docs/en/build-with-claude/overview#feature-availability) on Opus 4.6 and Sonnet 4.6. It is still functional but no longer recommended and will be removed in a future model release. Migrate to `thinking: {type: "adaptive"}` with the [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort).

<!-- para:0035 -->
### `interleaved-thinking-2025-05-14` beta header

<!-- para:0036 -->
The `interleaved-thinking-2025-05-14` beta header is **deprecated** on Opus 4.6. It is safely ignored if included, but is no longer required. [Adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking) automatically enables [interleaved thinking](https://platform.claude.com/docs/en/build-with-claude/extended-thinking#interleaved-thinking). Remove `betas=["interleaved-thinking-2025-05-14"]` from your requests when using Opus 4.6.

<!-- para:0037 -->
On **Sonnet 4.6**, the `interleaved-thinking-2025-05-14` beta header is still functional for use with manual extended thinking (`thinking: {type: "enabled"}`), but manual mode is deprecated. Adaptive thinking is the recommended path and automatically enables interleaved thinking.

<!-- para:0038 -->
### `output_format`

<!-- para:0039 -->
The `output_format` parameter for [structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) has been moved to `output_config.format`. The old parameter remains functional but is deprecated and will be removed in a future model release.

<!-- para:0040 -->
```
# Before
response = client.messages.create(
    output_format={"type": "json_schema", "schema": {...}},
    # ...
)

# After
response = client.messages.create(
    output_config={"format": {"type": "json_schema", "schema": {...}}},
    # ...
)
```

<!-- para:0041 -->
## Breaking changes

<!-- para:0042 -->
### Prefill removal

<!-- para:0043 -->
Prefilling assistant messages (last-assistant-turn prefills) is **not supported** on Opus 4.6. Requests with prefilled assistant messages return a 400 error.

<!-- para:0044 -->
**Alternatives:**

<!-- para:0045 -->
- [Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) for controlling response format
- System prompt instructions for guiding response style
- [`output_config.format`](https://platform.claude.com/docs/en/build-with-claude/structured-outputs#json-outputs) for JSON output

<!-- para:0046 -->
### Tool parameter quoting

<!-- para:0047 -->
Opus 4.6 may produce slightly different JSON string escaping in tool call arguments (e.g., different handling of Unicode escapes or forward slash escaping). Standard JSON parsers handle these differences automatically. If you parse tool call `input` as a raw string rather than using `json.loads()` or `JSON.parse()`, verify your parsing logic still works.

<!-- para:0048 -->
## Migration guide

<!-- para:0049 -->
For step-by-step migration instructions, see [Migrating to Claude 4.6](https://platform.claude.com/docs/en/about-claude/models/migration-guide).

<!-- para:0050 -->
## Next steps

<!-- para:0051 -->
Learn how to use adaptive thinking mode.

<!-- para:0052 -->
Compare all Claude models.

<!-- para:0053 -->
Explore server-side context compaction.

<!-- para:0054 -->
Was this page helpful?
