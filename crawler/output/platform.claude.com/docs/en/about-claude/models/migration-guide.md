---
source_url: https://platform.claude.com/docs/en/about-claude/models/migration-guide
title: "Migration guide"
section: docs
---

<!-- para:0001 -->
# Migration guide

<!-- para:0002 -->
## Migrating to Claude 4.6

<!-- para:0003 -->
Claude Opus 4.6 is a near drop-in replacement for Claude 4.5, with a few breaking changes to be aware of. For a full list of new features, see [What's new in Claude 4.6](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6).

<!-- para:0004 -->
### Update your model name

<!-- para:0005 -->
```
# Opus migration
model = "claude-opus-4-5"  # Before
model = "claude-opus-4-6"  # After
```

<!-- para:0006 -->
### Breaking changes

<!-- para:0007 -->
1. **Prefill removal:** Prefilling assistant messages returns a 400 error on Claude 4.6 models. Use [structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs), system prompt instructions, or `output_config.format` instead.
2. **Tool parameter quoting:** Claude 4.6 models may produce slightly different JSON string escaping in tool call arguments (e.g., different handling of Unicode escapes or forward slash escaping). If you parse tool call `input` as a raw string rather than using a JSON parser, verify your parsing logic. Standard JSON parsers (like `json.loads()` or `JSON.parse()`) handle these differences automatically.

<!-- para:0008 -->
### Recommended changes

<!-- para:0009 -->
These are not required but will improve your experience:

<!-- para:0010 -->
1. **Migrate to adaptive thinking:** `thinking: {type: "enabled", budget_tokens: N}` is deprecated on Claude 4.6 models and will be removed in a future model release. Switch to `thinking: {type: "adaptive"}` and use the [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort) to control thinking depth. See [Adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking). Before`response = client.beta.messages.create( model="claude-opus-4-5", max_tokens=16000, thinking={"type": "enabled", "budget_tokens": 32000}, betas=["interleaved-thinking-2025-05-14"], messages=[...], )` Note that the migration also moves from `client.beta.messages.create` to `client.messages.create`. Adaptive thinking and effort are GA features and do not require the beta SDK namespace or any beta headers.
2. **Remove effort beta header:** The effort parameter is now GA. Remove `betas=["effort-2025-11-24"]` from your requests.
3. **Remove fine-grained tool streaming beta header:** Fine-grained tool streaming is now GA. Remove `betas=["fine-grained-tool-streaming-2025-05-14"]` from your requests.
4. **Remove interleaved thinking beta header:** Adaptive thinking automatically enables interleaved thinking on both Opus 4.6 and Sonnet 4.6. Remove `betas=["interleaved-thinking-2025-05-14"]` from your requests. The header is still functional on Sonnet 4.6 with manual extended thinking, but manual mode is deprecated.
5. **Migrate to output_config.format:** If using structured outputs, update `output_format={...}` to `output_config={"format": {...}}`. The old parameter remains functional but is deprecated and will be removed in a future model release.

<!-- para:0011 -->
### Migrating from Claude 4.1 or earlier to Claude 4.6

<!-- para:0012 -->
If you're migrating from Opus 4.1, Sonnet 4, or earlier models directly to Claude 4.6, apply the Claude 4.6 breaking changes above plus the additional changes in this section.

<!-- para:0013 -->
```
# From Opus 4.1
model = "claude-opus-4-1-20250805"  # Before
model = "claude-opus-4-6"  # After

# From Sonnet 4
model = "claude-sonnet-4-20250514"  # Before
model = "claude-opus-4-6"  # After

# From Sonnet 3.7
model = "claude-3-7-sonnet-20250219"  # Before
model = "claude-opus-4-6"  # After
```

<!-- para:0014 -->
#### Additional breaking changes

<!-- para:0015 -->
1. **Update sampling parameters** This is a breaking change when migrating from Claude 3.x models. Use only `temperature` OR `top_p`, not both: `# Before - This will error in Claude 4+ models response = client.messages.create( model="claude-3-7-sonnet-20250219", temperature=0.7, top_p=0.9, # Cannot use both # ... ) # After response = client.messages.create( model="claude-opus-4-6", temperature=0.7, # Use temperature OR top_p, not both # ... )`
2. **Update tool versions** This is a breaking change when migrating from Claude 3.x models. Update to the latest tool versions. Remove any code using the `undo_edit` command. `# Before tools = [{"type": "text_editor_20250124", "name": "str_replace_editor"}] # After tools = [{"type": "text_editor_20250728", "name": "str_replace_based_edit_tool"}]` **Text editor:** Use `text_editor_20250728` and `str_replace_based_edit_tool`. See [Text editor tool documentation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/text-editor-tool) for details. **Code execution:** Upgrade to `code_execution_20250825`. See [Code execution tool documentation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool#upgrade-to-latest-tool-version) for migration instructions.
3. **Handle the `refusal` stop reason** Update your application to [handle `refusal` stop reasons](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals): `response = client.messages.create(...) if response.stop_reason == "refusal": # Handle refusal appropriately pass`
4. **Handle the `model_context_window_exceeded` stop reason** Claude 4.5+ models return a `model_context_window_exceeded` stop reason when generation stops due to hitting the context window limit, rather than the requested `max_tokens` limit. Update your application to handle this new stop reason: `response = client.messages.create(...) if response.stop_reason == "model_context_window_exceeded": # Handle context window limit appropriately pass`
5. **Verify tool parameter handling (trailing newlines)** Claude 4.5+ models preserve trailing newlines in tool call string parameters that were previously stripped. If your tools rely on exact string matching against tool call parameters, verify your logic handles trailing newlines correctly.
6. **Update your prompts for behavioral changes** Claude 4+ models have a more concise, direct communication style and require explicit direction. Review [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) for optimization guidance.

<!-- para:0016 -->
#### Additional recommended changes

<!-- para:0017 -->
- **Remove legacy beta headers:** Remove `token-efficient-tools-2025-02-19` and `output-128k-2025-02-19`. All Claude 4+ models have built-in token-efficient tool use and these headers have no effect.

<!-- para:0018 -->
### Claude 4.6 migration checklist

<!-- para:0019 -->
- Update model ID to `claude-opus-4-6`
- **BREAKING:** Remove assistant message prefills (returns 400 error); use structured outputs or `output_config.format` instead
- **Recommended:** Migrate from `thinking: {type: "enabled", budget_tokens: N}` to `thinking: {type: "adaptive"}` with the [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort) (`budget_tokens` is deprecated and will be removed in a future release)
- Verify tool call JSON parsing uses a standard JSON parser
- Remove `effort-2025-11-24` beta header (effort is now GA)
- Remove `fine-grained-tool-streaming-2025-05-14` beta header
- Remove `interleaved-thinking-2025-05-14` beta header (adaptive thinking enables interleaved thinking automatically)
- Migrate `output_format` to `output_config.format` (if applicable)
- If migrating from Claude 4.1 or earlier: update sampling parameters to use only `temperature` OR `top_p`
- If migrating from Claude 4.1 or earlier: update tool versions (`text_editor_20250728`, `code_execution_20250825`)
- If migrating from Claude 4.1 or earlier: handle `refusal` stop reason
- If migrating from Claude 4.1 or earlier: handle `model_context_window_exceeded` stop reason
- If migrating from Claude 4.1 or earlier: verify tool string parameter handling for trailing newlines
- If migrating from Claude 4.1 or earlier: remove legacy beta headers (`token-efficient-tools-2025-02-19`, `output-128k-2025-02-19`)
- Review and update prompts following [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- Test in development environment before production deployment

---

<!-- para:0020 -->
## Migrating to Claude Sonnet 4.6

<!-- para:0021 -->
Claude Sonnet 4.6 combines strong intelligence with fast performance, featuring improved agentic search capabilities and free code execution when used with web search or web fetch. It is ideal for everyday coding, analysis, and content tasks.

<!-- para:0022 -->
For a complete overview of capabilities, see the [models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

<!-- para:0023 -->
Sonnet 4.6 pricing is $3 per million input tokens, $15 per million output tokens. See [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing) for details.

<!-- para:0024 -->
**Update your model name:**

<!-- para:0025 -->
```
# From Sonnet 4.5
model = "claude-sonnet-4-5"  # Before
model = "claude-sonnet-4-6"  # After

# From Sonnet 4
model = "claude-sonnet-4-20250514"  # Before
model = "claude-sonnet-4-6"  # After
```

<!-- para:0026 -->
### Breaking changes

<!-- para:0027 -->
#### When migrating from Sonnet 4.5

<!-- para:0028 -->
1. **Prefilling assistant messages is no longer supported** This is a breaking change when migrating from Sonnet 4.5 or earlier. Prefilling assistant messages returns a `400` error on Sonnet 4.6. Use [structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs), system prompt instructions, or `output_config.format` instead. **Common prefill use cases and migrations:** **Controlling output formatting** (forcing JSON/YAML output): Use [structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) or tools with enum fields for classification tasks. **Eliminating preambles** (removing "Here is..." phrases): Add direct instructions in the system prompt: "Respond directly without preamble. Do not start with phrases like 'Here is...', 'Based on...', etc." **Avoiding bad refusals:** Claude is much better at appropriate refusals now. Clear prompting in the user message without prefill should be sufficient. **Continuations** (resuming interrupted responses): Move the continuation to the user message: "Your previous response was interrupted and ended with `[previous_response]`. Continue from where you left off." **Context hydration / role consistency** (refreshing context in long conversations): Inject what were previously prefilled-assistant reminders into the user turn instead.
2. **Tool parameter JSON escaping may differ** This is a breaking change when migrating from Sonnet 4.5 or earlier. JSON string escaping in tool parameters may differ from previous models. Standard JSON parsers handle this automatically, but custom string-based parsing may need updates.

<!-- para:0029 -->
#### When migrating from Claude 3.x

<!-- para:0030 -->
1. **Update sampling parameters** This is a breaking change when migrating from Claude 3.x models. Use only `temperature` OR `top_p`, not both.
2. **Update tool versions** This is a breaking change when migrating from Claude 3.x models. Update to the latest tool versions (`text_editor_20250728`, `code_execution_20250825`). Remove any code using the `undo_edit` command.
3. **Handle the `refusal` stop reason** Update your application to [handle `refusal` stop reasons](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals).
4. **Update your prompts for behavioral changes** Claude 4 models have a more concise, direct communication style. Review [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) for optimization guidance.

<!-- para:0031 -->
### Recommended changes

<!-- para:0032 -->
1. **Remove `fine-grained-tool-streaming-2025-05-14` beta header:** Fine-grained tool streaming is now GA on Sonnet 4.6 and no longer requires a beta header.
2. **Migrate `output_format` to `output_config.format`:** The `output_format` parameter is deprecated. Use `output_config.format` instead.

<!-- para:0033 -->
### Migrating from Sonnet 4.5

<!-- para:0034 -->
Consider migrating from Sonnet 4.5 to Sonnet 4.6, which delivers more intelligence at the same price point.

<!-- para:0035 -->
Sonnet 4.6 defaults to an effort level of `high`, in contrast to Sonnet 4.5 which had no effort parameter. Consider adjusting the effort parameter as you migrate from Sonnet 4.5 to Sonnet 4.6. If not explicitly set, you may experience higher latency with the default effort level.

<!-- para:0036 -->
#### If you're not using extended thinking

<!-- para:0037 -->
If you're not using extended thinking on Sonnet 4.5, you can continue without it on Sonnet 4.6. You should explicitly set effort to the level appropriate for your use case. At `low` effort with thinking disabled, you can expect similar or better performance relative to Sonnet 4.5 with no extended thinking.

<!-- para:0038 -->
```
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 8192,
    "output_config": {
        "effort": "low"
    },
    "messages": [
        {
            "role": "user",
            "content": "Your prompt here"
        }
    ]
}'
```

<!-- para:0039 -->
#### If you're using extended thinking

<!-- para:0040 -->
If you're using extended thinking with `budget_tokens` on Sonnet 4.5, it is still functional on Sonnet 4.6 but is deprecated. Migrate to [adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking) with the [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort).

<!-- para:0041 -->
##### Migrating to adaptive thinking

<!-- para:0042 -->
[Adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking) is the recommended replacement for `budget_tokens` on Sonnet 4.6. It is particularly well suited to the following workload patterns:

<!-- para:0043 -->
- **Autonomous multi-step agents:** coding agents that turn requirements into working software, data analysis pipelines, and bug finding where the model runs independently across many steps. Adaptive thinking lets the model calibrate its reasoning per step, staying on path over longer trajectories. For these workloads, start at `high` effort. If latency or token usage is a concern, scale down to `medium`.
- **Computer use agents:** Sonnet 4.6 achieved best-in-class accuracy on computer use evaluations using adaptive mode.
- **Bimodal workloads:** a mix of easy and hard tasks where adaptive skips thinking on simple queries and reasons deeply on complex ones.

<!-- para:0044 -->
When using adaptive thinking, evaluate `medium` and `high` effort on your tasks. The right level depends on your workload's tradeoff between quality, latency, and token usage.

<!-- para:0045 -->
```
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 64000,
    "thinking": {
        "type": "adaptive"
    },
    "output_config": {
        "effort": "medium"
    },
    "messages": [
        {
            "role": "user",
            "content": "Your prompt here"
        }
    ]
}'
```

<!-- para:0046 -->
If you see inconsistent behavior or quality regressions with adaptive thinking, try lowering the [effort](https://platform.claude.com/docs/en/build-with-claude/effort) setting or using `max_tokens` as a hard limit first. Extended thinking with `budget_tokens` is still functional on Sonnet 4.6 but is deprecated and no longer recommended.

<!-- para:0047 -->
##### Keeping budget_tokens during migration

<!-- para:0048 -->
If you need to keep `budget_tokens` temporarily while migrating, a budget around 16k tokens provides headroom for harder problems without risk of runaway token usage. This configuration is deprecated and will be removed in a future model release.

<!-- para:0049 -->
###### Coding and agentic use cases

<!-- para:0050 -->
For agentic coding, frontend design, tool-heavy workflows, and complex enterprise workflows, start with `medium` effort. If you find latency is too high, consider reducing effort to `low`. If you need higher intelligence, consider increasing effort to `high` or migrating to Opus 4.6.

<!-- para:0051 -->
```
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "anthropic-beta: interleaved-thinking-2025-05-14" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 16384,
    "thinking": {
        "type": "enabled",
        "budget_tokens": 16384
    },
    "output_config": {
        "effort": "medium"
    },
    "messages": [
        {
            "role": "user",
            "content": "Your prompt here"
        }
    ]
}'
```

<!-- para:0052 -->
###### Chat and non-coding use cases

<!-- para:0053 -->
For chat, content generation, search, classification, and other non-coding tasks, start with `low` effort with extended thinking. If you need more depth, increase effort to `medium`.

<!-- para:0054 -->
```
curl https://api.anthropic.com/v1/messages \
     --header "x-api-key: $ANTHROPIC_API_KEY" \
     --header "anthropic-version: 2023-06-01" \
     --header "anthropic-beta: interleaved-thinking-2025-05-14" \
     --header "content-type: application/json" \
     --data \
'{
    "model": "claude-sonnet-4-6",
    "max_tokens": 8192,
    "thinking": {
        "type": "enabled",
        "budget_tokens": 16384
    },
    "output_config": {
        "effort": "low"
    },
    "messages": [
        {
            "role": "user",
            "content": "Your prompt here"
        }
    ]
}'
```

<!-- para:0055 -->
### Sonnet 4.6 migration checklist

<!-- para:0056 -->
- Update model ID to `claude-sonnet-4-6`
- **BREAKING:** Remove assistant message prefilling; use structured outputs or `output_config.format` instead
- **BREAKING:** Verify tool parameter JSON parsing handles escaping differences
- **BREAKING:** Update tool versions to latest (`text_editor_20250728`, `code_execution_20250825`); legacy versions are not supported (if migrating from 3.x)
- **BREAKING:** Remove any code using the `undo_edit` command (if applicable)
- **BREAKING:** Update sampling parameters to use only `temperature` OR `top_p`, not both (if migrating from 3.x)
- Handle new `refusal` stop reason in your application
- Remove `fine-grained-tool-streaming-2025-05-14` beta header (now GA)
- Migrate `output_format` to `output_config.format`
- Review and update prompts following [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- **Recommended:** Migrate from `thinking: {type: "enabled", budget_tokens: N}` to `thinking: {type: "adaptive"}` with the [effort parameter](https://platform.claude.com/docs/en/build-with-claude/effort) (`budget_tokens` is deprecated and will be removed in a future release)
- Test in development environment before production deployment

---

<!-- para:0057 -->
## Migrating to Claude Sonnet 4.5

<!-- para:0058 -->
Claude Sonnet 4.5 combines strong intelligence with fast performance, making it ideal for everyday coding, analysis, and content tasks.

<!-- para:0059 -->
For a complete overview of capabilities, see the [models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

<!-- para:0060 -->
Sonnet 4.5 pricing is $3 per million input tokens, $15 per million output tokens. See [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing) for details.

<!-- para:0061 -->
**Update your model name:**

<!-- para:0062 -->
```
# From Sonnet 4
model = "claude-sonnet-4-20250514"  # Before
model = "claude-sonnet-4-5-20250929"  # After

# From Sonnet 3.7
model = "claude-3-7-sonnet-20250219"  # Before
model = "claude-sonnet-4-5-20250929"  # After
```

<!-- para:0063 -->
### Breaking changes

<!-- para:0064 -->
These breaking changes apply when migrating from Claude 3.x Sonnet models.

<!-- para:0065 -->
1. **Update sampling parameters** This is a breaking change when migrating from Claude 3.x models. Use only `temperature` OR `top_p`, not both.
2. **Update tool versions** This is a breaking change when migrating from Claude 3.x models. Update to the latest tool versions (`text_editor_20250728`, `code_execution_20250825`). Remove any code using the `undo_edit` command.
3. **Handle the `refusal` stop reason** Update your application to [handle `refusal` stop reasons](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals).
4. **Update your prompts for behavioral changes** Claude 4 models have a more concise, direct communication style. Review [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) for optimization guidance.

<!-- para:0066 -->
### Sonnet 4.5 migration checklist

<!-- para:0067 -->
- Update model ID to `claude-sonnet-4-5-20250929`
- **BREAKING:** Update tool versions to latest (`text_editor_20250728`, `code_execution_20250825`); legacy versions are not supported (if migrating from 3.x)
- **BREAKING:** Remove any code using the `undo_edit` command (if applicable)
- **BREAKING:** Update sampling parameters to use only `temperature` OR `top_p`, not both (if migrating from 3.x)
- Handle new `refusal` stop reason in your application
- Review and update prompts following [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- Consider enabling extended thinking for complex reasoning tasks
- Test in development environment before production deployment

---

<!-- para:0068 -->
## Migrating to Claude Haiku 4.5

<!-- para:0069 -->
Claude Haiku 4.5 is the fastest and most intelligent Haiku model with near-frontier performance, delivering premium model quality for interactive applications and high-volume processing.

<!-- para:0070 -->
For a complete overview of capabilities, see the [models overview](https://platform.claude.com/docs/en/about-claude/models/overview).

<!-- para:0071 -->
Haiku 4.5 pricing is $1 per million input tokens, $5 per million output tokens. See [Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing) for details.

<!-- para:0072 -->
**Update your model name:**

<!-- para:0073 -->
```
# From Haiku 3.5
model = "claude-3-5-haiku-20241022"  # Before
model = "claude-haiku-4-5-20251001"  # After

# From Haiku 3
model = "claude-3-haiku-20240307"  # Before
model = "claude-haiku-4-5-20251001"  # After
```

<!-- para:0074 -->
**Review new rate limits:** Haiku 4.5 has separate rate limits from Haiku 3.5 and Haiku 3. See [Rate limits documentation](https://platform.claude.com/docs/en/api/rate-limits) for details.**

<!-- para:0075 -->
For significant performance improvements on coding and reasoning tasks, consider enabling extended thinking with `thinking: {type: "enabled", budget_tokens: N}`.

<!-- para:0076 -->
Extended thinking impacts [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching#caching-with-thinking-blocks) efficiency.

<!-- para:0077 -->
Extended thinking is deprecated in Claude 4.6 or newer models. If using newer models, use [adaptive thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking) instead.

<!-- para:0078 -->
**Explore new capabilities:** See the [models overview](https://platform.claude.com/docs/en/about-claude/models/overview) for details on context awareness, increased output capacity (64k tokens), higher intelligence, and improved speed.**

<!-- para:0079 -->
### Breaking changes

<!-- para:0080 -->
These breaking changes apply when migrating from Claude 3.x Haiku models.

<!-- para:0081 -->
1. **Update sampling parameters** This is a breaking change when migrating from Claude 3.x models. Use only `temperature` OR `top_p`, not both.
2. **Update tool versions** This is a breaking change when migrating from Claude 3.x models. Update to the latest tool versions (`text_editor_20250728`, `code_execution_20250825`). Remove any code using the `undo_edit` command.
3. **Handle the `refusal` stop reason** Update your application to [handle `refusal` stop reasons](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals).
4. **Update your prompts for behavioral changes** Claude 4 models have a more concise, direct communication style. Review [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) for optimization guidance.

<!-- para:0082 -->
### Haiku 4.5 migration checklist

<!-- para:0083 -->
- Update model ID to `claude-haiku-4-5-20251001`
- **BREAKING:** Update tool versions to latest (`text_editor_20250728`, `code_execution_20250825`); legacy versions are not supported
- **BREAKING:** Remove any code using the `undo_edit` command (if applicable)
- **BREAKING:** Update sampling parameters to use only `temperature` OR `top_p`, not both
- Handle new `refusal` stop reason in your application
- Review and adjust for new rate limits (separate from Haiku 3.5)
- Review and update prompts following [prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- Consider enabling extended thinking for complex reasoning tasks
- Test in development environment before production deployment

---

<!-- para:0084 -->
## Get help

<!-- para:0085 -->
- Check the [API documentation](https://platform.claude.com/docs/en/api/overview) for detailed specifications
- Review [model capabilities](https://platform.claude.com/docs/en/about-claude/models/overview) for performance comparisons
- Review [API release notes](https://platform.claude.com/docs/en/release-notes/api) for API updates
- Contact support if you encounter any issues during migration

<!-- para:0086 -->
Was this page helpful?
