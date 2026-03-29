---
source_url: https://platform.claude.com/docs/en/about-claude/pricing
title: "Pricing"
section: docs
---

<!-- para:0001 -->
# Pricing

<!-- para:0002 -->
This page provides detailed pricing information for Anthropic's models and features. All prices are in USD.

<!-- para:0003 -->
For the most current pricing information, please visit [claude.com/pricing](https://claude.com/pricing).

<!-- para:0004 -->
## Model pricing

<!-- para:0005 -->
The following table shows pricing for all Claude models across different usage tiers:

<!-- para:0006 -->
MTok = Million tokens. The "Base Input Tokens" column shows standard input pricing, "Cache Writes" and "Cache Hits" are specific to [prompt caching](https://platform.claude.com/docs/en/about-claude/pricing#prompt-caching), and "Output Tokens" shows output pricing. See [prompt caching pricing](https://platform.claude.com/docs/en/about-claude/pricing#prompt-caching) below for an explanation of the cache columns and pricing multipliers.

<!-- para:0007 -->
## Third-party platform pricing

<!-- para:0008 -->
Claude models are available on [AWS Bedrock](https://platform.claude.com/docs/en/build-with-claude/claude-on-amazon-bedrock), [Google Vertex AI](https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai), and [Microsoft Foundry](https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry). For official pricing, visit:

<!-- para:0009 -->
- [AWS Bedrock pricing](https://aws.amazon.com/bedrock/pricing/)
- [Google Vertex AI pricing](https://cloud.google.com/vertex-ai/generative-ai/pricing)
- [Microsoft Foundry pricing](https://azure.microsoft.com/en-us/pricing/details/ai-foundry/#pricing)

<!-- para:0010 -->
**Regional endpoint pricing for Claude 4.5 models and beyond**

<!-- para:0011 -->
Starting with Claude Sonnet 4.5 and Haiku 4.5, AWS Bedrock and Google Vertex AI offer two endpoint types:

<!-- para:0012 -->
- **Global endpoints:** Dynamic routing across regions for maximum availability
- **Regional endpoints:** Data routing guaranteed within specific geographic regions

<!-- para:0013 -->
Regional endpoints include a 10% premium over global endpoints. The Claude API (1P) is global by default; for 1P data residency options and pricing, see [Data residency pricing](https://platform.claude.com/docs/en/about-claude/pricing#data-residency-pricing) below.

<!-- para:0014 -->
**Scope:** This pricing structure applies to Claude Sonnet 4.5, Haiku 4.5, and all future models. Earlier models (Claude Sonnet 4, Opus 4, and prior releases) retain their existing pricing.**

<!-- para:0015 -->
For implementation details and code examples:

<!-- para:0016 -->
- [AWS Bedrock global vs regional endpoints](https://platform.claude.com/docs/en/build-with-claude/claude-on-amazon-bedrock#global-vs-regional-endpoints)
- [Google Vertex AI global vs regional endpoints](https://platform.claude.com/docs/en/build-with-claude/claude-on-vertex-ai#global-vs-regional-endpoints)

<!-- para:0017 -->
## Feature-specific pricing

<!-- para:0018 -->
### Prompt caching

<!-- para:0019 -->
Prompt caching reduces costs and latency by reusing previously processed portions of your prompt across API calls. Instead of reprocessing the same large system prompt, document, or conversation history on every request, the API reads from cache at a fraction of the standard input price.

<!-- para:0020 -->
There are two ways to enable prompt caching:

<!-- para:0021 -->
- **Automatic caching:** Add a single `cache_control` field at the top level of your request. The system automatically manages cache breakpoints as conversations grow. This is the recommended starting point for most use cases.
- **Explicit cache breakpoints:** Place `cache_control` directly on individual content blocks for fine-grained control over exactly what gets cached.

<!-- para:0022 -->
Prompt caching uses the following pricing multipliers relative to base input token rates:

<!-- para:0023 -->
Cache write tokens are charged when content is first stored. Cache read tokens are charged when a subsequent request retrieves the cached content. A cache hit costs 10% of the standard input price, which means caching pays off after just one cache read for the 5-minute duration (1.25x write), or after two cache reads for the 1-hour duration (2x write).

<!-- para:0024 -->
These multipliers stack with other pricing modifiers, including the Batch API discount, long context pricing, and data residency.

<!-- para:0025 -->
For implementation details, supported models, and code examples, see the [prompt caching documentation](https://platform.claude.com/docs/en/build-with-claude/prompt-caching).

<!-- para:0026 -->
### Data residency pricing

<!-- para:0027 -->
For Claude Opus 4.6 and newer models, specifying US-only inference via the `inference_geo` parameter incurs a 1.1x multiplier on all token pricing categories, including input tokens, output tokens, cache writes, and cache reads. Global routing (the default) uses standard pricing.

<!-- para:0028 -->
This applies to the Claude API (1P) only. Third-party platforms have their own regional pricing. See [AWS Bedrock](https://aws.amazon.com/bedrock/pricing/) and [Google Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/pricing) for details. Earlier models retain their existing pricing regardless of `inference_geo` settings.

<!-- para:0029 -->
For more information, see the [data residency documentation](https://platform.claude.com/docs/en/build-with-claude/data-residency).

<!-- para:0030 -->
### Fast mode pricing

<!-- para:0031 -->
[Fast mode](https://platform.claude.com/docs/en/build-with-claude/fast-mode) (beta: research preview) for Claude Opus 4.6 provides significantly faster output at premium pricing (6x standard rates). Fast mode pricing applies across the full context window, including requests over 200k input tokens. Currently supported on Opus 4.6:

<!-- para:0032 -->
Fast mode pricing stacks with other pricing modifiers:

<!-- para:0033 -->
- [Prompt caching multipliers](https://platform.claude.com/docs/en/about-claude/pricing#model-pricing) apply on top of fast mode pricing
- [Data residency](https://platform.claude.com/docs/en/build-with-claude/data-residency) multipliers apply on top of fast mode pricing

<!-- para:0034 -->
Fast mode is not available with the [Batch API](https://platform.claude.com/docs/en/about-claude/pricing#batch-processing).

<!-- para:0035 -->
For more information, see the [fast mode documentation](https://platform.claude.com/docs/en/build-with-claude/fast-mode).

<!-- para:0036 -->
### Batch processing

<!-- para:0037 -->
The Batch API allows asynchronous processing of large volumes of requests with a 50% discount on both input and output tokens.

<!-- para:0038 -->
For more information about batch processing, see the [batch processing documentation](https://platform.claude.com/docs/en/build-with-claude/batch-processing).

<!-- para:0039 -->
### Long context pricing

<!-- para:0040 -->
Claude Opus 4.6 and Sonnet 4.6 include the full [1M token context window](https://platform.claude.com/docs/en/build-with-claude/context-windows) at standard pricing. (A 900k-token request is billed at the same per-token rate as a 9k-token request.) Prompt caching and batch processing discounts apply at standard rates across the full context window.

<!-- para:0041 -->
For Claude Sonnet 4.5 and Sonnet 4, the 1M token context window is in beta for organizations in [usage tier](https://platform.claude.com/docs/en/api/rate-limits) 4 and organizations with custom rate limits. When the `context-1m-2025-08-07` beta header is included, requests that exceed 200k input tokens are automatically charged at premium long context rates:

<!-- para:0042 -->
Long context pricing for Sonnet 4.5 and Sonnet 4 stacks with other pricing modifiers:

<!-- para:0043 -->
- The [Batch API 50% discount](https://platform.claude.com/docs/en/about-claude/pricing#batch-processing) applies to long context pricing
- [Prompt caching multipliers](https://platform.claude.com/docs/en/about-claude/pricing#model-pricing) apply on top of long context pricing

<!-- para:0044 -->
Even with the beta flag enabled, requests with fewer than 200k input tokens are charged at standard rates. If your request exceeds 200k input tokens, all tokens incur premium pricing.

<!-- para:0045 -->
The 200k threshold is based solely on input tokens (including cache reads/writes). Output token count does not affect pricing tier selection, though output tokens are charged at the higher rate when the input threshold is exceeded.

<!-- para:0046 -->
For Claude Sonnet 4.5 and Sonnet 4, to check if your API request was charged at premium long context rates, examine the `usage` object in the API response:

<!-- para:0047 -->
```
{
  "usage": {
    "input_tokens": 250000,
    "cache_creation_input_tokens": 0,
    "cache_read_input_tokens": 0,
    "output_tokens": 500
  }
}
```

<!-- para:0048 -->
Calculate the total input tokens by summing:

<!-- para:0049 -->
- `input_tokens`
- `cache_creation_input_tokens` (if using prompt caching)
- `cache_read_input_tokens` (if using prompt caching)

<!-- para:0050 -->
If the total exceeds 200,000 tokens, the entire request was billed at premium long context rates.

<!-- para:0051 -->
For more information about the `usage` object, see the [API response documentation](https://platform.claude.com/docs/en/api/messages#response-usage).

<!-- para:0052 -->
### Tool use pricing

<!-- para:0053 -->
Tool use requests are priced based on:

<!-- para:0054 -->
1. The total number of input tokens sent to the model (including in the `tools` parameter)
2. The number of output tokens generated
3. For server-side tools, additional usage-based pricing (e.g., web search charges per search performed)

<!-- para:0055 -->
Client-side tools are priced the same as any other Claude API request, while server-side tools may incur additional charges based on their specific usage.

<!-- para:0056 -->
The additional tokens from tool use come from:

<!-- para:0057 -->
- The `tools` parameter in API requests (tool names, descriptions, and schemas)
- `tool_use` content blocks in API requests and responses
- `tool_result` content blocks in API requests

<!-- para:0058 -->
When you use `tools`, we also automatically include a special system prompt for the model which enables tool use. The number of tool use tokens required for each model are listed below (excluding the additional tokens listed above). Note that the table assumes at least 1 tool is provided. If no `tools` are provided, then a tool choice of `none` uses 0 additional system prompt tokens.

---

<!-- para:0059 -->
These token counts are added to your normal input and output tokens to calculate the total cost of a request.

<!-- para:0060 -->
For current per-model prices, refer to the [model pricing](https://platform.claude.com/docs/en/about-claude/pricing#model-pricing) section.

<!-- para:0061 -->
For more information about tool use implementation and best practices, see the [tool use documentation](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview).

<!-- para:0062 -->
### Specific tool pricing

<!-- para:0063 -->
#### Bash tool

<!-- para:0064 -->
The bash tool adds **245 input tokens** to your API calls.

<!-- para:0065 -->
Additional tokens are consumed by:

<!-- para:0066 -->
- Command outputs (stdout/stderr)
- Error messages
- Large file contents

<!-- para:0067 -->
See [tool use pricing](https://platform.claude.com/docs/en/about-claude/pricing#tool-use-pricing) for complete pricing details.

<!-- para:0068 -->
#### Code execution tool

<!-- para:0069 -->
**Code execution is free when used with web search or web fetch.** When `web_search_20260209` or `web_fetch_20260209` is included in your API request, there are no additional charges for code execution tool calls beyond the standard input and output token costs.**

<!-- para:0070 -->
When used without these tools, code execution is billed by execution time, tracked separately from token usage:

<!-- para:0071 -->
- Execution time has a minimum of 5 minutes
- Each organization receives **1,550 free hours** of usage per month
- Additional usage beyond 1,550 hours is billed at **$0.05 per hour, per container**
- If files are included in the request, execution time is billed even if the tool is not invoked, due to files being preloaded onto the container

<!-- para:0072 -->
Code execution usage is tracked in the response:

<!-- para:0073 -->
```
"usage": {
  "input_tokens": 105,
  "output_tokens": 239,
  "server_tool_use": {
    "code_execution_requests": 1
  }
}
```

<!-- para:0074 -->
#### Text editor tool

<!-- para:0075 -->
The text editor tool uses the same pricing structure as other tools used with Claude. It follows the standard input and output token pricing based on the Claude model you're using.

<!-- para:0076 -->
In addition to the base tokens, the following additional input tokens are needed for the text editor tool:

<!-- para:0077 -->
See [tool use pricing](https://platform.claude.com/docs/en/about-claude/pricing#tool-use-pricing) for complete pricing details.

<!-- para:0078 -->
#### Web search tool

<!-- para:0079 -->
Web search usage is charged in addition to token usage:

<!-- para:0080 -->
```
"usage": {
  "input_tokens": 105,
  "output_tokens": 6039,
  "cache_read_input_tokens": 7123,
  "cache_creation_input_tokens": 7345,
  "server_tool_use": {
    "web_search_requests": 1
  }
}
```

<!-- para:0081 -->
Web search is available on the Claude API for **$10 per 1,000 searches**, plus standard token costs for search-generated content. Web search results retrieved throughout a conversation are counted as input tokens, in search iterations executed during a single turn and in subsequent conversation turns.

<!-- para:0082 -->
Each web search counts as one use, regardless of the number of results returned. If an error occurs during web search, the web search will not be billed.

<!-- para:0083 -->
#### Web fetch tool

<!-- para:0084 -->
Web fetch usage has **no additional charges** beyond standard token costs:

<!-- para:0085 -->
```
"usage": {
  "input_tokens": 25039,
  "output_tokens": 931,
  "cache_read_input_tokens": 0,
  "cache_creation_input_tokens": 0,
  "server_tool_use": {
    "web_fetch_requests": 1
  }
}
```

<!-- para:0086 -->
The web fetch tool is available on the Claude API at **no additional cost**. You only pay standard token costs for the fetched content that becomes part of your conversation context.

<!-- para:0087 -->
To protect against inadvertently fetching large content that would consume excessive tokens, use the `max_content_tokens` parameter to set appropriate limits based on your use case and budget considerations.

<!-- para:0088 -->
Example token usage for typical content:

<!-- para:0089 -->
- Average web page (10 kB): ~2,500 tokens
- Large documentation page (100 kB): ~25,000 tokens
- Research paper PDF (500 kB): ~125,000 tokens

<!-- para:0090 -->
#### Computer use tool

<!-- para:0091 -->
Computer use follows the standard [tool use pricing](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview#pricing). When using the computer use tool:

<!-- para:0092 -->
**System prompt overhead**: The computer use beta adds 466-499 tokens to the system prompt**

<!-- para:0093 -->
**Computer use tool token usage**:**

<!-- para:0094 -->
**Additional token consumption**:**

<!-- para:0095 -->
- Screenshot images (see [Vision pricing](https://platform.claude.com/docs/en/build-with-claude/vision))
- Tool execution results returned to Claude

<!-- para:0096 -->
If you're also using bash or text editor tools alongside computer use, those tools have their own token costs as documented in their respective pages.

<!-- para:0097 -->
## Agent use case pricing examples

<!-- para:0098 -->
Understanding pricing for agent applications is crucial when building with Claude. These real-world examples can help you estimate costs for different agent patterns.

<!-- para:0099 -->
### Customer support agent example

<!-- para:0100 -->
When building a customer support agent, here's how costs might break down:

<!-- para:0101 -->
Example calculation for processing 10,000 support tickets:

<!-- para:0102 -->
- Average ~3,700 tokens per conversation
- Using Claude Opus 4.6 at $5/MTok input, $25/MTok output
- Total cost: ~$37.00 per 10,000 tickets

<!-- para:0103 -->
For a detailed walkthrough of this calculation, see the [customer support agent guide](https://platform.claude.com/docs/en/about-claude/use-case-guides/customer-support-chat).

<!-- para:0104 -->
### General agent workflow pricing

<!-- para:0105 -->
For more complex agent architectures with multiple steps:

<!-- para:0106 -->
1. **Initial request processing** Typical input: 500-1,000 tokens Processing cost: ~$0.003 per request
2. **Memory and context retrieval** Retrieved context: 2,000-5,000 tokens Cost per retrieval: ~$0.015 per operation
3. **Action planning and execution** Planning tokens: 1,000-2,000 Execution feedback: 500-1,000 Combined cost: ~$0.045 per action

<!-- para:0107 -->
For a comprehensive guide on agent pricing patterns, see the [agent use cases guide](https://platform.claude.com/docs/en/about-claude/use-case-guides).

<!-- para:0108 -->
### Cost optimization strategies

<!-- para:0109 -->
When building agents with Claude:

<!-- para:0110 -->
1. **Use appropriate models:** Choose Haiku for simple tasks, Sonnet for complex reasoning
2. **Implement prompt caching:** Reduce costs for repeated context
3. **Batch operations:** Use the Batch API for non-time-sensitive tasks
4. **Monitor usage patterns:** Track token consumption to identify optimization opportunities

<!-- para:0111 -->
For high-volume agent applications, contact the [enterprise sales team](https://claude.com/contact-sales) for custom pricing arrangements.

<!-- para:0112 -->
## Additional pricing considerations

<!-- para:0113 -->
### Rate limits

<!-- para:0114 -->
Rate limits vary by usage tier and affect how many requests you can make:

<!-- para:0115 -->
- **Tier 1:** Entry-level usage with basic limits
- **Tier 2:** Increased limits for growing applications
- **Tier 3:** Higher limits for established applications
- **Tier 4:** Maximum standard limits
- **Enterprise:** Custom limits available

<!-- para:0116 -->
For detailed rate limit information, see the [rate limits documentation](https://platform.claude.com/docs/en/api/rate-limits).

<!-- para:0117 -->
For higher rate limits or custom pricing arrangements, [contact the sales team](https://claude.com/contact-sales).

<!-- para:0118 -->
### Volume discounts

<!-- para:0119 -->
Volume discounts may be available for high-volume users. These are negotiated on a case-by-case basis.

<!-- para:0120 -->
- Standard tiers use the pricing shown above
- Enterprise customers can [contact sales](https://platform.claude.com/cdn-cgi/l/email-protection#7f0c1e131a0c3f1e110b170d100f161c511c1012) for custom pricing
- Academic and research discounts may be available

<!-- para:0121 -->
### Enterprise pricing

<!-- para:0122 -->
For enterprise customers with specific needs:

<!-- para:0123 -->
- Custom rate limits
- Volume discounts
- Dedicated support
- Custom terms

<!-- para:0124 -->
Contact the sales team at [[email protected]](https://platform.claude.com/cdn-cgi/l/email-protection#aeddcfc2cbddeecfc0dac6dcc1dec7cd80cdc1c3) or through the [Claude Console](https://platform.claude.com/settings/limits) to discuss enterprise pricing options.

<!-- para:0125 -->
## Billing and payment

<!-- para:0126 -->
- Billing is based on actual monthly usage
- All payments are in USD
- Credit card and invoicing options available
- Usage tracking available in the [Claude Console](https://platform.claude.com/)

<!-- para:0127 -->
## Frequently asked questions

<!-- para:0128 -->
**How is token usage calculated?**

<!-- para:0129 -->
Tokens are pieces of text that models process. As a rough estimate, 1 token is approximately 4 characters or 0.75 words in English. The exact count varies by language and content type.

<!-- para:0130 -->
**Are there free tiers or trials?**

<!-- para:0131 -->
New users receive a small amount of free credits to test the API. [Contact sales](https://platform.claude.com/cdn-cgi/l/email-protection#3a495b565f497a5b544e5248554a535914595557) for information about extended trials for enterprise evaluation.

<!-- para:0132 -->
**How do discounts stack?**

<!-- para:0133 -->
Batch API and prompt caching discounts can be combined. For example, using both features together provides significant cost savings compared to standard API calls. See [prompt caching pricing](https://platform.claude.com/docs/en/about-claude/pricing#prompt-caching) for how the multipliers interact.

<!-- para:0134 -->
**What payment methods are accepted?**

<!-- para:0135 -->
Major credit cards are accepted for standard accounts. Enterprise customers can arrange invoicing and other payment methods.

<!-- para:0136 -->
For additional questions about pricing, contact [[email protected]](https://platform.claude.com/cdn-cgi/l/email-protection#0774727777687573476669736f7568776e642964686a).

<!-- para:0137 -->
Was this page helpful?
