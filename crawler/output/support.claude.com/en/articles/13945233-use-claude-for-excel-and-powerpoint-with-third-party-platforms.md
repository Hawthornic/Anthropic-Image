---
source_url: https://support.claude.com/en/articles/13945233-use-claude-for-excel-and-powerpoint-with-third-party-platforms
title: "Use Claude for Excel and PowerPoint with third-party platforms"
section: articles
date: 2026-03-24
---

<!-- para:0001 -->
If your organization uses AWS Bedrock, Google Cloud Vertex AI, or an LLM gateway to access Claude, you can use the Claude for Excel and Claude for PowerPoint add-ins without a Claude account. The add-in connects through your organization's infrastructure, so your prompts and responses stay within your existing trust boundary.

<!-- para:0002 -->
There are three connection paths, depending on how your organization accesses Claude:

<!-- para:0003 -->
Your IT admin chooses the path during deployment. As an end user, the experience is the same regardless of which path your organization uses.

<!-- para:0004 -->
Requirements vary by connection path.

<!-- para:0005 -->
**All paths:**

<!-- para:0006 -->
**LLM gateway:**

<!-- para:0007 -->
**Bedrock direct:**

<!-- para:0008 -->
**Vertex AI direct:**

<!-- para:0009 -->
Your organization's IT team manages these resources. If you don't have the credentials you need, contact them—Anthropic can't provide or reset them for you.

<!-- para:0010 -->
The add-in needs to reach specific domains to function. Which domains depend on whether your organization uses the Anthropic API directly (1P) or a third-party platform (3P). Share the applicable table with your network or security team so they can allowlist these domains.

<!-- para:0011 -->
Use this table if people in your organization sign in with a Claude account and inference goes to api.anthropic.com.

<!-- para:0012 -->
Use this table if people in your organization sign in with Microsoft Entra ID and inference goes to your LLM gateway, Bedrock, or Vertex AI.

<!-- para:0013 -->
Use the `claude-in-office` plugin to configure and deploy the add-in across your organization. This tool handles provisioning cloud resources (if using Bedrock or Vertex AI direct), generating the add-in manifest, and obtaining admin consent in a single guided flow.

<!-- para:0014 -->
Install the plugin and run the interactive setup wizard.

<!-- para:0015 -->
**macOS and Linux:**

<!-- para:0016 -->
**Windows (PowerShell):**

<!-- para:0017 -->
The wizard walks you through your connection path:

<!-- para:0018 -->
When the wizard completes, the add-in is ready to deploy tenant-wide.

<!-- para:0019 -->
You can use the following commands inside a `claude-in-office` session:

<!-- para:0020 -->
The wizard automates resource creation based on your connection path. Here's what it sets up:

<!-- para:0021 -->
**LLM gateway**: No cloud resources to provision. The wizard collects your gateway URL and token, then generates the manifest.**

<!-- para:0022 -->
**Bedrock direct**: Creates an IAM OIDC identity provider that trusts Microsoft Entra ID tokens, a role with bedrock:InvokeModel and bedrock:InvokeModelWithResponseStream permissions, and a trust policy scoped to the Claude add-in's application ID.**

<!-- para:0023 -->
**Vertex AI direct**: Walks you through creating a Google OAuth client in the GCP Console (this step can't be automated via CLI), enables the Vertex AI API, and captures the client ID and secret for the manifest.**

<!-- para:0024 -->
If some values vary per user—for example, different gateway tokens or different AWS roles for different teams—the wizard can write per-user configuration via Microsoft Graph extension attributes. Run /claude-in-office:update-user-attrs with the per-user keys after the initial setup.

<!-- para:0025 -->
After the wizard generates your manifest:

<!-- para:0026 -->
Propagation to users takes up to 24 hours (usually much faster). The add-in appears under **Home** > **Add-ins** in Excel and PowerPoint once it lands.

<!-- para:0027 -->
After deploying the add-in, your users can connect by following the steps below.

<!-- para:0028 -->
Your credentials are stored locally in your browser's localStorage within the add-in's sandboxed iframe. They aren't synced to Anthropic's servers. Because the Office add-in runs inside a sandboxed iframe within the Microsoft application, it can't use your OS keychain the way Claude Code does—for this reason, only enter gateway-issued tokens, not raw cloud provider credentials.

<!-- para:0029 -->
If you see an error at sign-in, confirm with your IT team that your account is in the group assigned to the add-in.

<!-- para:0030 -->
If your API token expires or your IT team gives you a new URL, go to "Settings" in the add-in sidebar, enter the new values, and select "Test connection."

<!-- para:0031 -->
The Office add-ins only support the Anthropic Messages API format via the Unified endpoint. This is more specific than Claude Code, which also supports Bedrock InvokeModel and Vertex rawPredict formats directly.

<!-- para:0032 -->
Your gateway must expose these two endpoints:

<!-- para:0033 -->
The gateway must forward the following request headers from the add-in to the upstream provider:

<!-- para:0034 -->
Failure to forward these headers may result in reduced functionality or prevent the add-in from working.

<!-- para:0035 -->
On login, the add-in validates the token via GET /v1/messages and then attempts to discover available Claude models via GET /v1/models. If your gateway doesn't expose a model list at that path, the add-in falls back to prompting the user for a model ID manually.

<!-- para:0036 -->
Many organizations use **LiteLLM** as their gateway. Below is a minimal litellm_config.yaml for routing Office add-in requests to Anthropic, Bedrock, or Vertex.

<!-- para:0037 -->
**yaml**

<!-- para:0038 -->
**yaml**

<!-- para:0039 -->
**yaml**

<!-- para:0040 -->
**yaml**

<!-- para:0041 -->
For detailed setup instructions, refer to **[LiteLLM's Anthropic format documentation](https://docs.litellm.ai/)**.

<!-- para:0042 -->
Even when inference goes through your own infrastructure, the add-in communicates with pivot.claude.ai to load its interface and with claude.ai/api/ to evaluate feature flags. These connections transmit operational telemetry—such as which features are used, performance timings, and error rates—so Anthropic can maintain and improve the add-in experience. They don't transmit your prompts or Claude's responses.

<!-- para:0043 -->
Anthropic collects information in accordance with AWS Bedrock, Google Cloud Vertex AI, or Microsoft Azure's terms, consistent with Anthropic's arrangements with customers. Anthropic doesn't have access to a customer's AWS, Google, or Microsoft instance, including prompts or outputs it contains. Anthropic doesn't train generative models with such content or use it for other purposes. Anthropic can access metadata—such as tool use, token counts, and similar items—and use such metadata for analytic and product improvement purposes.

<!-- para:0044 -->
For details on what your organization's gateway or cloud provider logs, contact your IT team.

<!-- para:0045 -->
When you sign in with a Claude account, the add-ins connect directly to Anthropic. When you connect through a third-party platform, the add-ins send inference requests to your organization's infrastructure instead, and your IT team controls how that traffic is routed and logged.

<!-- para:0046 -->
Some features that rely on having a Claude account aren't available through third-party platforms yet, but we're working on adding support:

<!-- para:0047 -->
If your team needs these features, talk to your Claude admin about which sign-in path fits your organization.

<!-- para:0048 -->
The gateway URL or cloud endpoint is unreachable from the user's network. Verify the URL is correct, the service is running, and there are no firewall or VPN restrictions blocking the connection. Check the **Network allowlist** section above to confirm all required domains are allowed.

<!-- para:0049 -->
The auth token is invalid or expired. For gateway connections, confirm the token with your IT team. For direct-cloud connections, verify the user's Entra ID account is in the assigned group and that the OIDC trust or OAuth client is configured correctly.

<!-- para:0050 -->
The token is valid but lacks the right permissions. For Bedrock, verify the IAM role has bedrock:InvokeModel permissions. For Vertex, verify the service account has aiplatform.endpoints.predict permissions. For gateways, check the token's scope with your IT admin.

<!-- para:0051 -->
The add-in couldn't reach the expected API path. For gateways, verify the URL is the base URL (for example, [https://litellm-server:4000)—don't](https://litellm-server:4000)%E2%80%94don't) include /v1/messages in the URL field.

<!-- para:0052 -->
The gateway or cloud provider encountered an internal error. Check your gateway logs (for example, docker logs litellm if using LiteLLM) for upstream provider errors. Try the request again, and contact your IT admin if the issue persists.

<!-- para:0053 -->
The add-in couldn't find Claude models. For gateways, your gateway may not expose a model list at GET /v1/models. Your IT team can either configure the gateway to serve a model list or give you a specific model ID to enter manually. For Bedrock or Vertex, confirm that at least one Claude model (Claude Sonnet 4.5 or later) is enabled in your account and region.

<!-- para:0054 -->
Verify that your gateway supports Server-Sent Events (SSE) pass-through. Some proxy configurations strip or buffer SSE connections, which prevents streaming responses from reaching the add-in.

<!-- para:0055 -->
Connectors, skills, file uploads, and Working Across Apps aren't available through third-party platforms yet. If you need these, ask your admin about signing in with a Claude account instead.
