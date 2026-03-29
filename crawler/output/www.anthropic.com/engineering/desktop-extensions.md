---
source_url: https://www.anthropic.com/engineering/desktop-extensions
title: "Desktop Extensions: One-click MCP server installation for Claude Desktop"
section: engineering
date: 2025-06-26
---

<!-- para:0001 -->
—

<!-- para:0002 -->
When we released the Model Context Protocol (MCP) last year, we saw developers build amazing local servers that gave Claude access to everything from file systems to databases. But we kept hearing the same feedback: installation was too complex. Users needed developer tools, had to manually edit configuration files, and often got stuck on dependency issues.

<!-- para:0003 -->
Today, we're introducing Desktop Extensions—a new packaging format that makes installing MCP servers as simple as clicking a button.

<!-- para:0004 -->
### Addressing the MCP installation problem

<!-- para:0005 -->
Local MCP servers unlock powerful capabilities for Claude Desktop users. They can interact with local applications, access private data, and integrate with development tools—all while keeping data on the user's machine. However, the current installation process creates significant barriers:

<!-- para:0006 -->
- **Developer tools required**: Users need Node.js, Python, or other runtimes installed
- **Manual configuration**: Each server requires editing JSON configuration files
- **Dependency management**: Users must resolve package conflicts and version mismatches
- **No discovery mechanism**: Finding useful MCP servers requires searching GitHub
- **Update complexity**: Keeping servers current means manual reinstallation

<!-- para:0007 -->
These friction points meant that MCP servers, despite their power, remained largely inaccessible to non-technical users.

<!-- para:0008 -->
### Introducing Desktop Extensions

<!-- para:0009 -->
Desktop Extensions (`.mcpb` files) solve these problems by bundling an entire MCP server—including all dependencies—into a single installable package. Here's what changes for users:

<!-- para:0010 -->
**Before:**

<!-- para:0011 -->
**After:**

<!-- para:0012 -->
1. Download a `.mcpb` file
2. Double-click to open with Claude Desktop
3. Click "Install"

<!-- para:0013 -->
That's it. No terminal, no configuration files, no dependency conflicts.

<!-- para:0014 -->
## Architecture overview

<!-- para:0015 -->
A Desktop Extension is a zip archive containing the local MCP server as well as a `manifest.json`, which describes everything Claude Desktop and other apps supporting desktop extensions need to know.

<!-- para:0016 -->
The only required file in a Desktop Extension is a manifest.json. Claude Desktop handles all the complexity:

<!-- para:0017 -->
- **Built-in runtime**: We ship Node.js with Claude Desktop, eliminating external dependencies
- **Automatic updates**: Extensions update automatically when new versions are available
- **Secure secrets**: Sensitive configuration like API keys are stored in the OS keychain

<!-- para:0018 -->
The manifest contains human-readable information (like the name, description, or author), a declaration of features (tools, prompts), user configuration, and runtime requirements. Most fields are optional, so the minimal version is quite short, although in practice, we expect all three supported extension types (Node.js, Python, and classic binaries/executables) to include files:

<!-- para:0019 -->
There are a number of convenience options [available in the manifest spec](https://github.com/anthropics/dxt/blob/main/MANIFEST.md) that aim to make the installation and configuration of local MCP servers easier. The server configuration object can be defined in a way that makes room both for user-defined configuration in the form of template literals as well as platform-specific overrides. Extension developers can define, in detail, what kind of configuration they want to collect from users.

<!-- para:0020 -->
Let’s take a look at a concrete example of how the manifest aids with configuration. In the manifest below, the developer declares that the user needs to supply an `api_key`. Claude will not enable the extension until the user has supplied that value, keep it automatically in the operating system’s secret vault, and transparently replace the `${user_config.api_key}` with the user-supplied value when launching the server. Similarly, `${__dirname}` will be replaced with the full path to the extension’s unpacked directory.

<!-- para:0021 -->
A full `manifest.json` with most of the optional fields might look like this:

<!-- para:0022 -->
To see an extension and manifest, please refer [to the examples in the MCPB repository](https://github.com/anthropics/dxt/tree/main/examples).

<!-- para:0023 -->
The full specification for all required and optional fields in the `manifest.json` can be found as part of our [open-source toolchain](https://github.com/anthropics/dxt/blob/main/MANIFEST.md).

<!-- para:0024 -->
### Building your first extension

<!-- para:0025 -->
Let's walk through packaging an existing MCP server as a Desktop Extension. We'll use a simple file system server as an example.

<!-- para:0026 -->
#### Step 1: Create the manifest

<!-- para:0027 -->
First, initialize a manifest for your server:

<!-- para:0028 -->
This interactive tool asks about your server and generates a complete manifest.json. If you want to speed-run your way to the most basic manifest.json, you can run the command with a --yes parameter.

<!-- para:0029 -->
#### Step 2: Handle user configuration

<!-- para:0030 -->
If your server needs user input (like API keys or allowed directories), declare it in the manifest:

<!-- para:0031 -->
Claude Desktop will:

<!-- para:0032 -->
- Display a user-friendly configuration UI
- Validate inputs before enabling the extension
- Securely store sensitive values
- Pass configuration to your server either as arguments or environment variables, depending on developer configuration

<!-- para:0033 -->
In the example below, we’re passing the user configuration as an environment variable, but it could also be an argument.

<!-- para:0034 -->
#### Step 3: Package the extension

<!-- para:0035 -->
Bundle everything into a `.mcpb` file:

<!-- para:0036 -->
This command:

<!-- para:0037 -->
1. Validates your manifest
2. Generates the `.mcpb` archive

<!-- para:0038 -->
#### Step 4: Test locally

<!-- para:0039 -->
Drag your `.mcpb` file into Claude Desktop's Settings window. You'll see:

<!-- para:0040 -->
- Human-readable information about your extension
- Required permissions and configuration
- A simple "Install" button

<!-- para:0041 -->
### Advanced features

<!-- para:0042 -->
#### Cross-platform support

<!-- para:0043 -->
Extensions can adapt to different operating systems:

<!-- para:0044 -->
#### Dynamic configuration

<!-- para:0045 -->
Use template literals for runtime values:

<!-- para:0046 -->
- `${__dirname}`: Extension's installation directory
- `${user_config.key}`: User-provided configuration
- `${HOME}, ${TEMP}`: System environment variables

<!-- para:0047 -->
#### Feature declaration

<!-- para:0048 -->
Help users understand capabilities upfront:

<!-- para:0049 -->
### The extension directory

<!-- para:0050 -->
We're launching with a curated directory of extensions built into Claude Desktop. Users can browse, search, and install with one click—no searching GitHub or vetting code.

<!-- para:0051 -->
While we expect both the Desktop Extension specification and the implementation in Claude for macOS and Windows to evolve over time, we look forward to seeing the many ways in which extensions can be used to expand the capabilities of Claude in creative ways.

<!-- para:0052 -->
To submit your extension:

<!-- para:0053 -->
1. Ensure it follows the guidelines found in the submission form
2. Test across Windows and macOS
3. [Submit your extension](https://docs.google.com/forms/d/14_Dmcig4z8NeRMB_e7TOyrKzuZ88-BLYdLvS6LPhiZU/edit)
4. Our team reviews for quality and security

<!-- para:0054 -->
### Building an open ecosystem

<!-- para:0055 -->
We are committed to the open ecosystem around MCP servers and believe that its ability to be universally adopted by multiple applications and services has benefitted the community. In line with this commitment, we’re open-sourcing the Desktop Extension specification, toolchain, and the schemas and key functions used by Claude for macOS and Windows to implement its own support of Desktop Extensions. It is our hope that the MCPB format doesn’t just make local MCP servers more portable for Claude, but other AI desktop applications, too.

<!-- para:0056 -->
We're open-sourcing:

<!-- para:0057 -->
- The complete MCPB specification
- Packaging and validation tools
- Reference implementation code
- TypeScript types and schemas

<!-- para:0058 -->
This means:

<!-- para:0059 -->
- **For MCP server developers**: Package once, run anywhere that supports MCPB
- **For app developers**: Add extension support without building from scratch
- **For users**: Consistent experience across all MCP-enabled applications

<!-- para:0060 -->
The specification and toolchain is on purpose versioned as 0.1, as we are looking forward to working with the greater community on evolving and changing the format. We look forward to hearing from you.

<!-- para:0061 -->
### Security and enterprise considerations

<!-- para:0062 -->
We understand that extensions introduce new security considerations, particularly for enterprises. We've built in several safeguards with the preview release of Desktop Extensions:

<!-- para:0063 -->
#### For users

<!-- para:0064 -->
- Sensitive data stays in the OS keychain
- Automatic updates
- Ability to audit what extensions are installed

<!-- para:0065 -->
#### For enterprises

<!-- para:0066 -->
- Group Policy (Windows) and MDM (macOS) support
- Ability to pre-install approved extensions
- Blocklist specific extensions or publishers
- Disable the extension directory entirely
- Deploy private extension directories

<!-- para:0067 -->
For more information about how to manage extensions within your organization, see our [documentation](https://support.anthropic.com/en/articles/10949351-getting-started-with-model-context-protocol-mcp-on-claude-for-desktop).

<!-- para:0068 -->
### Getting started

<!-- para:0069 -->
Ready to build your own extension? Here's how to start:

<!-- para:0070 -->
**For MCP server developers**: Review our [developer documentation](https://github.com/anthropics/dxt) – or dive right in by running the following commands in your local MCP servers’ directory:**

<!-- para:0071 -->
**For Claude Desktop users**: Update to the latest version and look for the Extensions section in Settings**

<!-- para:0072 -->
**For enterprises**: Review our enterprise documentation for deployment options**

<!-- para:0073 -->
### Building with Claude Code

<!-- para:0074 -->
Internally at Anthropic, we have found that Claude is great at building extensions with minimal intervention. If you too want to use Claude Code, we recommend that you briefly explain what you want your extension to do and then add the following context to the prompt:

<!-- para:0075 -->
### Conclusion

<!-- para:0076 -->
Desktop Extensions represent a fundamental shift in how users interact with local AI tools. By removing installation friction, we're making powerful MCP servers accessible to everyone—not just developers.

<!-- para:0077 -->
Internally, we’re using desktop extensions to share highly experimental MCP servers - some fun, some useful.. One team experimented to see how far our models could make it when directly connected to a GameBoy, similar to our [“Claude plays Pokémon” research](https://www.anthropic.com/news/visible-extended-thinking). We used Desktop Extensions to package a single extension that opens up the popular [PyBoy](https://github.com/Baekalfen/PyBoy) GameBoy emulator and lets Claude take control. We believe that countless opportunities exist to connect the model’s capabilities to the tools, data, and applications users already have on their local machines.

<!-- para:0078 -->
![A desktop showing the PyBoy MCP with Super Mario Land start screen](https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2Fd48f3ea1218a4b90450b9ab8134fa0e24db5a167-720x542.png&w=1920&q=75)

<!-- para:0079 -->
We can't wait to see what you build. The same creativity that brought us thousands of MCP servers can now reach millions of users with just one click. Ready to share your MCP server? [Submit your extension for review](https://forms.gle/tyiAZvch1kDADKoP9).
