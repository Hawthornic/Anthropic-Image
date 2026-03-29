---
source_url: https://platform.claude.com/docs/en/agent-sdk/mcp
title: "Connect to external tools with MCP"
section: docs
---

<!-- para:0001 -->
# Connect to external tools with MCP

<!-- para:0002 -->
The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) is an open standard for connecting AI agents to external tools and data sources. With MCP, your agent can query databases, integrate with APIs like Slack and GitHub, and connect to other services without writing custom tool implementations.

<!-- para:0003 -->
MCP servers can run as local processes, connect over HTTP, or execute directly within your SDK application.

<!-- para:0004 -->
## Quickstart

<!-- para:0005 -->
This example connects to the [Claude Code documentation](https://code.claude.com/docs) MCP server using [HTTP transport](https://platform.claude.com/docs/en/agent-sdk/mcp#httpsse-servers) and uses [`allowedTools`](https://platform.claude.com/docs/en/agent-sdk/mcp#allow-mcp-tools) with a wildcard to permit all tools from the server.

<!-- para:0006 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Use the docs MCP server to explain what hooks are in Claude Code",
  options: {
    mcpServers: {
      "claude-code-docs": {
        type: "http",
        url: "https://code.claude.com/docs/mcp"
      }
    },
    allowedTools: ["mcp__claude-code-docs__*"]
  }
})) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```

<!-- para:0007 -->
The agent connects to the documentation server, searches for information about hooks, and returns the results.

<!-- para:0008 -->
## Add an MCP server

<!-- para:0009 -->
You can configure MCP servers in code when calling `query()`, or in a `.mcp.json` file that the SDK loads automatically.

<!-- para:0010 -->
### In code

<!-- para:0011 -->
Pass MCP servers directly in the `mcpServers` option:

<!-- para:0012 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "List files in my project",
  options: {
    mcpServers: {
      filesystem: {
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/me/projects"]
      }
    },
    allowedTools: ["mcp__filesystem__*"]
  }
})) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```

<!-- para:0013 -->
### From a config file

<!-- para:0014 -->
Create a `.mcp.json` file at your project root. The SDK loads this automatically:

<!-- para:0015 -->
```
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/me/projects"]
    }
  }
}
```

<!-- para:0016 -->
## Allow MCP tools

<!-- para:0017 -->
MCP tools require explicit permission before Claude can use them. Without permission, Claude will see that tools are available but won't be able to call them.

<!-- para:0018 -->
### Tool naming convention

<!-- para:0019 -->
MCP tools follow the naming pattern `mcp__<server-name>__<tool-name>`. For example, a GitHub server named `"github"` with a `list_issues` tool becomes `mcp__github__list_issues`.

<!-- para:0020 -->
### Grant access with allowedTools

<!-- para:0021 -->
Use `allowedTools` to specify which MCP tools Claude can use:

<!-- para:0022 -->
```
options: {
  mcpServers: {
    // your servers
  },
  allowedTools: [
    "mcp__github__*", // All tools from the github server
    "mcp__db__query", // Only the query tool from db server
    "mcp__slack__send_message" // Only send_message from slack server
  ]
}
```

<!-- para:0023 -->
Wildcards (`*`) let you allow all tools from a server without listing each one individually.

<!-- para:0024 -->
**Prefer `allowedTools` over permission modes for MCP access.** `permissionMode: "acceptEdits"` does not auto-approve MCP tools (only file edits and filesystem Bash commands). `permissionMode: "bypassPermissions"` does auto-approve MCP tools but also disables all other safety prompts, which is broader than necessary. A wildcard in `allowedTools` grants exactly the MCP server you want and nothing more. See [Permission modes](https://platform.claude.com/docs/en/agent-sdk/permissions#permission-modes) for a full comparison.**

<!-- para:0025 -->
### Discover available tools

<!-- para:0026 -->
To see what tools an MCP server provides, check the server's documentation or connect to the server and inspect the `system` init message:

<!-- para:0027 -->
```
for await (const message of query({ prompt: "...", options })) {
  if (message.type === "system" && message.subtype === "init") {
    console.log("Available MCP tools:", message.mcp_servers);
  }
}
```

<!-- para:0028 -->
## Transport types

<!-- para:0029 -->
MCP servers communicate with your agent using different transport protocols. Check the server's documentation to see which transport it supports:

<!-- para:0030 -->
- If the docs give you a **command to run** (like `npx @modelcontextprotocol/server-github`), use stdio
- If the docs give you a **URL**, use HTTP or SSE
- If you're building your own tools in code, use an SDK MCP server

<!-- para:0031 -->
### stdio servers

<!-- para:0032 -->
Local processes that communicate via stdin/stdout. Use this for MCP servers you run on the same machine:

<!-- para:0033 -->
### HTTP/SSE servers

<!-- para:0034 -->
Use HTTP or SSE for cloud-hosted MCP servers and remote APIs:

<!-- para:0035 -->
For HTTP (non-streaming), use `"type": "http"` instead.

<!-- para:0036 -->
### SDK MCP servers

<!-- para:0037 -->
Define custom tools directly in your application code instead of running a separate server process. See the [custom tools guide](https://platform.claude.com/docs/en/agent-sdk/custom-tools) for implementation details.

<!-- para:0038 -->
## MCP tool search

<!-- para:0039 -->
When you have many MCP tools configured, tool definitions can consume a significant portion of your context window. Tool search solves this by withholding tool definitions from context and loading only the ones Claude needs for each turn.

<!-- para:0040 -->
Tool search is enabled by default. See [Tool search](https://platform.claude.com/docs/en/agent-sdk/tool-search) for configuration options and details.

<!-- para:0041 -->
For more detail, including best practices and using tool search with custom SDK tools, see the [tool search guide](https://platform.claude.com/docs/en/agent-sdk/tool-search).

<!-- para:0042 -->
## Authentication

<!-- para:0043 -->
Most MCP servers require authentication to access external services. Pass credentials through environment variables in the server configuration.

<!-- para:0044 -->
### Pass credentials via environment variables

<!-- para:0045 -->
Use the `env` field to pass API keys, tokens, and other credentials to the MCP server:

<!-- para:0046 -->
See [List issues from a repository](https://platform.claude.com/docs/en/agent-sdk/mcp#list-issues-from-a-repository) for a complete working example with debug logging.

<!-- para:0047 -->
### HTTP headers for remote servers

<!-- para:0048 -->
For HTTP and SSE servers, pass authentication headers directly in the server configuration:

<!-- para:0049 -->
### OAuth2 authentication

<!-- para:0050 -->
The [MCP specification supports OAuth 2.1](https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization) for authorization. The SDK doesn't handle OAuth flows automatically, but you can pass access tokens via headers after completing the OAuth flow in your application:

<!-- para:0051 -->
```
// After completing OAuth flow in your app
const accessToken = await getAccessTokenFromOAuthFlow();

const options = {
  mcpServers: {
    "oauth-api": {
      type: "http",
      url: "https://api.example.com/mcp",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  },
  allowedTools: ["mcp__oauth-api__*"]
};
```

<!-- para:0052 -->
## Examples

<!-- para:0053 -->
### List issues from a repository

<!-- para:0054 -->
This example connects to the [GitHub MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/github) to list recent issues. The example includes debug logging to verify the MCP connection and tool calls.

<!-- para:0055 -->
Before running, create a [GitHub personal access token](https://github.com/settings/tokens) with `repo` scope and set it as an environment variable:

<!-- para:0056 -->
```
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

<!-- para:0057 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "List the 3 most recent issues in anthropics/claude-code",
  options: {
    mcpServers: {
      github: {
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-github"],
        env: {
          GITHUB_TOKEN: process.env.GITHUB_TOKEN
        }
      }
    },
    allowedTools: ["mcp__github__list_issues"]
  }
})) {
  // Verify MCP server connected successfully
  if (message.type === "system" && message.subtype === "init") {
    console.log("MCP servers:", message.mcp_servers);
  }

  // Log when Claude calls an MCP tool
  if (message.type === "assistant") {
    for (const block of message.message.content) {
      if (block.type === "tool_use" && block.name.startsWith("mcp__")) {
        console.log("MCP tool called:", block.name);
      }
    }
  }

  // Print the final result
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```

<!-- para:0058 -->
### Query a database

<!-- para:0059 -->
This example uses the [Postgres MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) to query a database. The connection string is passed as an argument to the server. The agent automatically discovers the database schema, writes the SQL query, and returns the results:

<!-- para:0060 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

// Connection string from environment variable
const connectionString = process.env.DATABASE_URL;

for await (const message of query({
  // Natural language query - Claude writes the SQL
  prompt: "How many users signed up last week? Break it down by day.",
  options: {
    mcpServers: {
      postgres: {
        command: "npx",
        // Pass connection string as argument to the server
        args: ["-y", "@modelcontextprotocol/server-postgres", connectionString]
      }
    },
    // Allow only read queries, not writes
    allowedTools: ["mcp__postgres__query"]
  }
})) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```

<!-- para:0061 -->
## Error handling

<!-- para:0062 -->
MCP servers can fail to connect for various reasons: the server process might not be installed, credentials might be invalid, or a remote server might be unreachable.

<!-- para:0063 -->
The SDK emits a `system` message with subtype `init` at the start of each query. This message includes the connection status for each MCP server. Check the `status` field to detect connection failures before the agent starts working:

<!-- para:0064 -->
```
import { query } from "@anthropic-ai/claude-agent-sdk";

for await (const message of query({
  prompt: "Process data",
  options: {
    mcpServers: {
      "data-processor": dataServer
    }
  }
})) {
  if (message.type === "system" && message.subtype === "init") {
    const failedServers = message.mcp_servers.filter((s) => s.status !== "connected");

    if (failedServers.length > 0) {
      console.warn("Failed to connect:", failedServers);
    }
  }

  if (message.type === "result" && message.subtype === "error_during_execution") {
    console.error("Execution failed");
  }
}
```

<!-- para:0065 -->
## Troubleshooting

<!-- para:0066 -->
### Server shows "failed" status

<!-- para:0067 -->
Check the `init` message to see which servers failed to connect:

<!-- para:0068 -->
```
if (message.type === "system" && message.subtype === "init") {
  for (const server of message.mcp_servers) {
    if (server.status === "failed") {
      console.error(`Server ${server.name} failed to connect`);
    }
  }
}
```

<!-- para:0069 -->
Common causes:

<!-- para:0070 -->
- **Missing environment variables**: Ensure required tokens and credentials are set. For stdio servers, check the `env` field matches what the server expects.
- **Server not installed**: For `npx` commands, verify the package exists and Node.js is in your PATH.
- **Invalid connection string**: For database servers, verify the connection string format and that the database is accessible.
- **Network issues**: For remote HTTP/SSE servers, check the URL is reachable and any firewalls allow the connection.

<!-- para:0071 -->
### Tools not being called

<!-- para:0072 -->
If Claude sees tools but doesn't use them, check that you've granted permission with `allowedTools`:

<!-- para:0073 -->
```
options: {
  mcpServers: {
    // your servers
  },
  allowedTools: ["mcp__servername__*"] // Required for Claude to use the tools
}
```

<!-- para:0074 -->
### Connection timeouts

<!-- para:0075 -->
The MCP SDK has a default timeout of 60 seconds for server connections. If your server takes longer to start, the connection will fail. For servers that need more startup time, consider:

<!-- para:0076 -->
- Using a lighter-weight server if available
- Pre-warming the server before starting your agent
- Checking server logs for slow initialization causes

<!-- para:0077 -->
## Related resources

<!-- para:0078 -->
- **[Custom tools guide](https://platform.claude.com/docs/en/agent-sdk/custom-tools)**: Build your own MCP server that runs in-process with your SDK application
- **[Permissions](https://platform.claude.com/docs/en/agent-sdk/permissions)**: Control which MCP tools your agent can use with `allowedTools` and `disallowedTools`
- **[TypeScript SDK reference](https://platform.claude.com/docs/en/agent-sdk/typescript)**: Full API reference including MCP configuration options
- **[Python SDK reference](https://platform.claude.com/docs/en/agent-sdk/python)**: Full API reference including MCP configuration options
- **[MCP server directory](https://github.com/modelcontextprotocol/servers)**: Browse available MCP servers for databases, APIs, and more

<!-- para:0079 -->
Was this page helpful?
