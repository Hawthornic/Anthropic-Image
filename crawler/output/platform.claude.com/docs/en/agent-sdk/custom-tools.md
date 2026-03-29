---
source_url: https://platform.claude.com/docs/en/agent-sdk/custom-tools
title: "Give Claude custom tools"
section: docs
---

<!-- para:0001 -->
# Give Claude custom tools

<!-- para:0002 -->
Custom tools extend the Agent SDK by letting you define your own functions that Claude can call during a conversation. Using the SDK's in-process MCP server, you can give Claude access to databases, external APIs, domain-specific logic, or any other capability your application needs.

<!-- para:0003 -->
This guide covers how to define tools with input schemas and handlers, bundle them into an MCP server, pass them to `query`, and control which tools Claude can access. It also covers error handling, tool annotations, and returning non-text content like images.

<!-- para:0004 -->
## Quick reference

<!-- para:0005 -->
## Create a custom tool

<!-- para:0006 -->
A tool is defined by four parts, passed as arguments to the [`tool()`](https://platform.claude.com/docs/en/agent-sdk/typescript#tool) helper in TypeScript or the [`@tool`](https://platform.claude.com/docs/en/agent-sdk/python#tool) decorator in Python:

<!-- para:0007 -->
- **Name:** a unique identifier Claude uses to call the tool.
- **Description:** what the tool does. Claude reads this to decide when to call it.
- **Input schema:** the arguments Claude must provide. In TypeScript this is always a [Zod schema](https://zod.dev/), and the handler's `args` are typed from it automatically. In Python this is a dict mapping names to types, like `{"latitude": float}`, which the SDK converts to JSON Schema for you. The Python decorator also accepts a full [JSON Schema](https://json-schema.org/understanding-json-schema/about) dict directly when you need enums, ranges, optional fields, or nested objects.
- **Handler:** the async function that runs when Claude calls the tool. It receives the validated arguments and must return an object with: `content` (required): an array of result blocks, each with a `type` of `"text"`, `"image"`, or `"resource"`. See [Return images and resources](https://platform.claude.com/docs/en/agent-sdk/custom-tools#return-images-and-resources) for non-text blocks. `isError` (optional): set to `true` to signal a tool failure so Claude can react to it. See [Handle errors](https://platform.claude.com/docs/en/agent-sdk/custom-tools#handle-errors).

<!-- para:0008 -->
After defining a tool, wrap it in a server with [`createSdkMcpServer`](https://platform.claude.com/docs/en/agent-sdk/typescript#create-sdk-mcp-server) (TypeScript) or [`create_sdk_mcp_server`](https://platform.claude.com/docs/en/agent-sdk/python#create-sdk-mcp-server) (Python). The server runs in-process inside your application, not as a separate process.

<!-- para:0009 -->
### Weather tool example

<!-- para:0010 -->
This example defines a `get_temperature` tool and wraps it in an MCP server. It only sets up the tool; to pass it to `query` and run it, see [Call a custom tool](https://platform.claude.com/docs/en/agent-sdk/custom-tools#call-a-custom-tool) below.

<!-- para:0011 -->
```
from typing import Any
import httpx
from claude_agent_sdk import tool, create_sdk_mcp_server


# Define a tool: name, description, input schema, handler
@tool(
    "get_temperature",
    "Get the current temperature at a location",
    {"latitude": float, "longitude": float},
)
async def get_temperature(args: dict[str, Any]) -> dict[str, Any]:
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://api.open-meteo.com/v1/forecast",
            params={
                "latitude": args["latitude"],
                "longitude": args["longitude"],
                "current": "temperature_2m",
                "temperature_unit": "fahrenheit",
            },
        )
        data = response.json()

    # Return a content array - Claude sees this as the tool result
    return {
        "content": [
            {
                "type": "text",
                "text": f"Temperature: {data['current']['temperature_2m']}°F",
            }
        ]
    }


# Wrap the tool in an in-process MCP server
weather_server = create_sdk_mcp_server(
    name="weather",
    version="1.0.0",
    tools=[get_temperature],
)
```

<!-- para:0012 -->
See the [`tool()`](https://platform.claude.com/docs/en/agent-sdk/typescript#tool) TypeScript reference or the [`@tool`](https://platform.claude.com/docs/en/agent-sdk/python#tool) Python reference for full parameter details, including JSON Schema input formats and return value structure.

<!-- para:0013 -->
To make a parameter optional: in TypeScript, add `.default()` to the Zod field. In Python, the dict schema treats every key as required, so leave the parameter out of the schema, mention it in the description string, and read it with `args.get()` in the handler. The [`get_precipitation_chance` tool below](https://platform.claude.com/docs/en/agent-sdk/custom-tools#add-more-tools) shows both patterns.

<!-- para:0014 -->
### Call a custom tool

<!-- para:0015 -->
Pass the MCP server you created to `query` via the `mcpServers` option. The key in `mcpServers` becomes the `{server_name}` segment in each tool's fully qualified name: `mcp__{server_name}__{tool_name}`. List that name in `allowedTools` so the tool runs without a permission prompt.

<!-- para:0016 -->
These snippets reuse the `weatherServer` from the [example above](https://platform.claude.com/docs/en/agent-sdk/custom-tools#weather-tool-example) to ask Claude what the weather is in a specific location.

<!-- para:0017 -->
```
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, ResultMessage


async def main():
    options = ClaudeAgentOptions(
        mcp_servers={"weather": weather_server},
        allowed_tools=["mcp__weather__get_temperature"],
    )

    async for message in query(
        prompt="What's the temperature in San Francisco?",
        options=options,
    ):
        # ResultMessage is the final message after all tool calls complete
        if isinstance(message, ResultMessage) and message.subtype == "success":
            print(message.result)


asyncio.run(main())
```

<!-- para:0018 -->
### Add more tools

<!-- para:0019 -->
A server holds as many tools as you list in its `tools` array. With more than one tool on a server, you can list each one in `allowedTools` individually or use the wildcard `mcp__weather__*` to cover every tool the server exposes.

<!-- para:0020 -->
The example below adds a second tool, `get_precipitation_chance`, to the `weatherServer` from the [weather tool example](https://platform.claude.com/docs/en/agent-sdk/custom-tools#weather-tool-example) and rebuilds it with both tools in the array.

<!-- para:0021 -->
```
# Define a second tool for the same server
@tool(
    "get_precipitation_chance",
    "Get the hourly precipitation probability for a location. "
    "Optionally pass 'hours' (1-24) to control how many hours to return.",
    {"latitude": float, "longitude": float},
)
async def get_precipitation_chance(args: dict[str, Any]) -> dict[str, Any]:
    # 'hours' isn't in the schema - read it with .get() to make it optional
    hours = args.get("hours", 12)
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://api.open-meteo.com/v1/forecast",
            params={
                "latitude": args["latitude"],
                "longitude": args["longitude"],
                "hourly": "precipitation_probability",
                "forecast_days": 1,
            },
        )
        data = response.json()
    chances = data["hourly"]["precipitation_probability"][:hours]

    return {
        "content": [
            {
                "type": "text",
                "text": f"Next {hours} hours: {'%, '.join(map(str, chances))}%",
            }
        ]
    }


# Rebuild the server with both tools in the array
weather_server = create_sdk_mcp_server(
    name="weather",
    version="1.0.0",
    tools=[get_temperature, get_precipitation_chance],
)
```

<!-- para:0022 -->
Every tool in this array consumes context window space on every turn. If you're defining dozens of tools, see [tool search](https://platform.claude.com/docs/en/agent-sdk/tool-search) to load them on demand instead.

<!-- para:0023 -->
### Add tool annotations

<!-- para:0024 -->
[Tool annotations](https://modelcontextprotocol.io/docs/concepts/tools#tool-annotations) are optional metadata describing how a tool behaves. Pass them as the fifth argument to `tool()` helper in TypeScript or via the `annotations` keyword argument for the `@tool` decorator in Python. All hint fields are Booleans.

<!-- para:0025 -->
Annotations are metadata, not enforcement. A tool marked `readOnlyHint: true` can still write to disk if that's what the handler does. Keep the annotation accurate to the handler.

<!-- para:0026 -->
This example adds `readOnlyHint` to the `get_temperature` tool from the [weather tool example](https://platform.claude.com/docs/en/agent-sdk/custom-tools#weather-tool-example).

<!-- para:0027 -->
```
from claude_agent_sdk import tool, ToolAnnotations


@tool(
    "get_temperature",
    "Get the current temperature at a location",
    {"latitude": float, "longitude": float},
    annotations=ToolAnnotations(
        readOnlyHint=True
    ),  # Lets Claude batch this with other read-only calls
)
async def get_temperature(args):
    return {"content": [{"type": "text", "text": "..."}]}
```

<!-- para:0028 -->
See `ToolAnnotations` in the [TypeScript](https://platform.claude.com/docs/en/agent-sdk/typescript#tool-annotations) or [Python](https://platform.claude.com/docs/en/agent-sdk/python#tool-annotations) reference.

<!-- para:0029 -->
## Control tool access

<!-- para:0030 -->
The [weather tool example](https://platform.claude.com/docs/en/agent-sdk/custom-tools#weather-tool-example) registered a server and listed tools in `allowedTools`. This section covers how tool names are constructed and how to scope access when you have multiple tools or want to restrict built-ins.

<!-- para:0031 -->
### Tool name format

<!-- para:0032 -->
When MCP tools are exposed to Claude, their names follow a specific format:

<!-- para:0033 -->
- Pattern: `mcp__{server_name}__{tool_name}`
- Example: A tool named `get_temperature` in server `weather` becomes `mcp__weather__get_temperature`

<!-- para:0034 -->
### Configure allowed tools

<!-- para:0035 -->
The `tools` option and the allowed/disallowed lists operate on separate layers. `tools` controls which built-in tools appear in Claude's context. Allowed and disallowed tool lists control whether calls are approved or denied once Claude attempts them.

<!-- para:0036 -->
To limit which built-ins Claude can use, prefer `tools` over disallowed tools. Omitting a tool from `tools` removes it from context so Claude never attempts it; listing it in `disallowedTools` (Python: `disallowed_tools`) blocks the call but leaves the tool visible, so Claude may waste a turn trying it. See [Configure permissions](https://platform.claude.com/docs/en/agent-sdk/permissions) for the full evaluation order.

<!-- para:0037 -->
## Handle errors

<!-- para:0038 -->
How your handler reports errors determines whether the agent loop continues or stops:

<!-- para:0039 -->
The example below catches two kinds of failures inside the handler instead of letting them throw. A non-200 HTTP status is caught from the response and returned as an error result. A network error or invalid JSON is caught by the surrounding `try/except` (Python) or `try/catch` (TypeScript) and also returned as an error result. In both cases the handler returns normally and the agent loop continues.

<!-- para:0040 -->
```
import json
import httpx
from typing import Any


@tool(
    "fetch_data",
    "Fetch data from an API",
    {"endpoint": str},  # Simple schema
)
async def fetch_data(args: dict[str, Any]) -> dict[str, Any]:
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(args["endpoint"])
            if response.status_code != 200:
                # Return the failure as a tool result so Claude can react to it.
                # is_error marks this as a failed call rather than odd-looking data.
                return {
                    "content": [
                        {
                            "type": "text",
                            "text": f"API error: {response.status_code} {response.reason_phrase}",
                        }
                    ],
                    "is_error": True,
                }

            data = response.json()
            return {"content": [{"type": "text", "text": json.dumps(data, indent=2)}]}
    except Exception as e:
        # Catching here keeps the agent loop alive. An uncaught exception
        # would end the whole query() call.
        return {
            "content": [{"type": "text", "text": f"Failed to fetch data: {str(e)}"}],
            "is_error": True,
        }
```

<!-- para:0041 -->
## Return images and resources

<!-- para:0042 -->
The `content` array in a tool result accepts `text`, `image`, and `resource` blocks. You can mix them in the same response.

<!-- para:0043 -->
### Images

<!-- para:0044 -->
An image block carries the image bytes inline, encoded as base64. There is no URL field. To return an image that lives at a URL, fetch it in the handler, read the response bytes, and base64-encode them before returning. The result is processed as visual input.

<!-- para:0045 -->
```
import base64
import httpx


# Define a tool that fetches an image from a URL and returns it to Claude
@tool("fetch_image", "Fetch an image from a URL and return it to Claude", {"url": str})
async def fetch_image(args):
    async with httpx.AsyncClient() as client:  # Fetch the image bytes
        response = await client.get(args["url"])

    return {
        "content": [
            {
                "type": "image",
                "data": base64.b64encode(response.content).decode(
                    "ascii"
                ),  # Base64-encode the raw bytes
                "mimeType": response.headers.get(
                    "content-type", "image/png"
                ),  # Read MIME type from the response
            }
        ]
    }
```

<!-- para:0046 -->
### Resources

<!-- para:0047 -->
A resource block embeds a piece of content identified by a URI. The URI is a label for Claude to reference; the actual content rides in the block's `text` or `blob` field. Use this when your tool produces something that makes sense to address by name later, such as a generated file or a record from an external system.

<!-- para:0048 -->
This example shows a resource block returned from inside a tool handler. The URI `file:///tmp/report.md` is a label that Claude can reference later; the SDK does not read from that path.

<!-- para:0049 -->
```
return {
  content: [
    {
      type: "resource",
      resource: {
        uri: "file:///tmp/report.md", // Label for Claude to reference, not a path the SDK reads
        mimeType: "text/markdown",
        text: "# Report\n..." // The actual content, inline
      }
    }
  ]
};
```

<!-- para:0050 -->
These block shapes come from the MCP `CallToolResult` type. See the [MCP specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools#tool-result) for the full definition.

<!-- para:0051 -->
## Example: unit converter

<!-- para:0052 -->
This tool converts values between units of length, temperature, and weight. A user can ask "convert 100 kilometers to miles" or "what is 72°F in Celsius," and Claude picks the right unit type and units from the request.

<!-- para:0053 -->
It demonstrates two patterns:

<!-- para:0054 -->
- **Enum schemas:** `unit_type` is constrained to a fixed set of values. In TypeScript, use `z.enum()`. In Python, the dict schema doesn't support enums, so the full JSON Schema dict is required.
- **Unsupported input handling:** when a conversion pair isn't found, the handler returns `isError: true` so Claude can tell the user what went wrong rather than treating a failure as a normal result.

<!-- para:0055 -->
```
from typing import Any
from claude_agent_sdk import tool, create_sdk_mcp_server


# z.enum() in TypeScript becomes an "enum" constraint in JSON Schema.
# The dict schema has no equivalent, so full JSON Schema is required.
@tool(
    "convert_units",
    "Convert a value from one unit to another",
    {
        "type": "object",
        "properties": {
            "unit_type": {
                "type": "string",
                "enum": ["length", "temperature", "weight"],
                "description": "Category of unit",
            },
            "from_unit": {
                "type": "string",
                "description": "Unit to convert from, e.g. kilometers, fahrenheit, pounds",
            },
            "to_unit": {"type": "string", "description": "Unit to convert to"},
            "value": {"type": "number", "description": "Value to convert"},
        },
        "required": ["unit_type", "from_unit", "to_unit", "value"],
    },
)
async def convert_units(args: dict[str, Any]) -> dict[str, Any]:
    conversions = {
        "length": {
            "kilometers_to_miles": lambda v: v * 0.621371,
            "miles_to_kilometers": lambda v: v * 1.60934,
            "meters_to_feet": lambda v: v * 3.28084,
            "feet_to_meters": lambda v: v * 0.3048,
        },
        "temperature": {
            "celsius_to_fahrenheit": lambda v: (v * 9) / 5 + 32,
            "fahrenheit_to_celsius": lambda v: (v - 32) * 5 / 9,
            "celsius_to_kelvin": lambda v: v + 273.15,
            "kelvin_to_celsius": lambda v: v - 273.15,
        },
        "weight": {
            "kilograms_to_pounds": lambda v: v * 2.20462,
            "pounds_to_kilograms": lambda v: v * 0.453592,
            "grams_to_ounces": lambda v: v * 0.035274,
            "ounces_to_grams": lambda v: v * 28.3495,
        },
    }

    key = f"{args['from_unit']}_to_{args['to_unit']}"
    fn = conversions.get(args["unit_type"], {}).get(key)

    if not fn:
        return {
            "content": [
                {
                    "type": "text",
                    "text": f"Unsupported conversion: {args['from_unit']} to {args['to_unit']}",
                }
            ],
            "is_error": True,
        }

    result = fn(args["value"])
    return {
        "content": [
            {
                "type": "text",
                "text": f"{args['value']} {args['from_unit']} = {result:.4f} {args['to_unit']}",
            }
        ]
    }


converter_server = create_sdk_mcp_server(
    name="converter",
    version="1.0.0",
    tools=[convert_units],
)
```

<!-- para:0056 -->
Once the server is defined, pass it to `query` the same way as the weather example. This example sends three different prompts in a loop to show the same tool handling different unit types. For each response, it inspects `AssistantMessage` objects (which contain the tool calls Claude made during that turn) and prints each `ToolUseBlock` before printing the final `ResultMessage` text. This lets you see when Claude is using the tool versus answering from its own knowledge.

<!-- para:0057 -->
```
import asyncio
from claude_agent_sdk import (
    query,
    ClaudeAgentOptions,
    ResultMessage,
    AssistantMessage,
    ToolUseBlock,
)


async def main():
    options = ClaudeAgentOptions(
        mcp_servers={"converter": converter_server},
        allowed_tools=["mcp__converter__convert_units"],
    )

    prompts = [
        "Convert 100 kilometers to miles.",
        "What is 72°F in Celsius?",
        "How many pounds is 5 kilograms?",
    ]

    for prompt in prompts:
        async for message in query(prompt=prompt, options=options):
            if isinstance(message, AssistantMessage):
                for block in message.content:
                    if isinstance(block, ToolUseBlock):
                        print(f"[tool call] {block.name}({block.input})")
            elif isinstance(message, ResultMessage) and message.subtype == "success":
                print(f"Q: {prompt}\nA: {message.result}\n")


asyncio.run(main())
```

<!-- para:0058 -->
## Next steps

<!-- para:0059 -->
Custom tools wrap async functions in a standard interface. You can mix the patterns on this page in the same server: a single server can hold a database tool, an API gateway tool, and an image renderer alongside each other.

<!-- para:0060 -->
From here:

<!-- para:0061 -->
- If your server grows to dozens of tools, see [tool search](https://platform.claude.com/docs/en/agent-sdk/tool-search) to defer loading them until Claude needs them.
- To connect to external MCP servers (filesystem, GitHub, Slack) instead of building your own, see [Connect MCP servers](https://platform.claude.com/docs/en/agent-sdk/mcp).
- To control which tools run automatically versus requiring approval, see [Configure permissions](https://platform.claude.com/docs/en/agent-sdk/permissions).

<!-- para:0062 -->
## Related documentation

<!-- para:0063 -->
- [TypeScript SDK Reference](https://platform.claude.com/docs/en/agent-sdk/typescript)
- [Python SDK Reference](https://platform.claude.com/docs/en/agent-sdk/python)
- [MCP Documentation](https://modelcontextprotocol.io/)
- [SDK Overview](https://platform.claude.com/docs/en/agent-sdk/overview)

<!-- para:0064 -->
Was this page helpful?
