---
source_url: https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure
title: "API Key Best Practices: Keeping Your Keys Safe and Secure"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
API keys enable access to the Claude API, but they can pose significant security risks if not handled properly. Your API key is a digital key to your account. Much like a credit card number, if someone obtains and uses your API key, they incur charges on your behalf. This article outlines best practices for managing API keys to ensure they remain secure and prevent unauthorized access and charges to your Claude Console account.

<!-- para:0002 -->
One of the most frequent causes of API key leaks is accidental exposure in public code repositories or third-party tools. Developers often inadvertently commit plaintext API keys to public GitHub repositories or input them into third party tools, which can lead to unauthorized access and potential abuse of the associated accounts.

<!-- para:0003 -->
We recommend regularly reviewing [logs](https://console.anthropic.com/settings/logs) and [usage](https://console.anthropic.com/settings/usage) patterns for your API keys within the Console.

<!-- para:0004 -->
A best practice for safely handling API keys is to use environment variables to securely inject and share environment variables. When you deploy your application to a cloud environment, you can use their secret management solution to securely pass the API key to your application via an environment variable without inadvertently sharing your API key.

<!-- para:0005 -->
If you are storing secrets locally using dotenv, you must add your `.env` files to your source control ignore file (e.g., `.gitignore` for git) to prevent inadvertently distributing sensitive information publicly. In cloud environments, prefer encypted secret storage instead of dotenv files.

<!-- para:0006 -->
**Python example:**

<!-- para:0007 -->
1. Create a `.env` file in your project directory.

<!-- para:0008 -->
2. Add your API key to the `.env` file:

<!-- para:0009 -->
3. Install the `python-dotenv` package:

<!-- para:0010 -->
4. Load the API key in your Python script:

<!-- para:0011 -->
5. If you are deploying your application to a cloud hosting environment, refer to your cloud provider’s documentation on how to add your Claude API Key and share it with your application ([AWS](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html), [GCP](https://cloud.google.com/security/products/secret-manager?hl=en#how-it-works), [Azure](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), [Vercel](https://vercel.com/docs/cli/secrets), [Heroku](https://devcenter.heroku.com/articles/config-vars)). Some providers offer multiple ways to securely inject environment variables into your app.

<!-- para:0012 -->
Regularly rotate your API keys on a consistent schedule (for example, every 90 days) by creating new ones and deactivating old ones. This routine helps minimize potential risks if a key is ever compromised.

<!-- para:0013 -->
If possible, use different API keys for development, testing, and production environments. This way, you can correlate your usage to different internal use cases. If your API Key is compromised, this allows you to quickly disable just that use case and limit any potential damage.

<!-- para:0014 -->
Regularly check your source control repositories for accidentally committed secrets.

<!-- para:0015 -->
By incorporating regular secret scanning into your development workflow, you can catch and prevent the accidental exposure of API keys and other sensitive information in your code repositories.

<!-- para:0016 -->
As organizations scale and the number of API keys and other secrets increases, managing these sensitive credentials securely becomes more challenging. This is where Key Management Systems (KMS) come into play. A KMS provides a centralized solution for storing, accessing, and managing secret keys, including API keys.

<!-- para:0017 -->
Anthropic has partnered directly with GitHub to provide an extra layer of protection for our users through GitHub's Secret scanning partner program. This partnership offers proactive security measures to prevent the misuse of accidentally exposed API keys:

<!-- para:0018 -->
If you suspect that your API key may be compromised, we recommend revoking the key immediately. You can do so by logging into your Claude Console account, going to the [API keys page](https://platform.claude.com/settings/keys) from your profile, clicking the meatball menu (i.e. the three horizontal dots) next to the key in question, and selecting ‘Delete API Key.’

<!-- para:0019 -->
Refer to this article for more information: [What should I do if I suspect my API key has been compromised?](https://support.claude.com/en/articles/8384961-what-should-i-do-if-i-suspect-my-api-key-has-been-compromised)

<!-- para:0020 -->
API key security is an ongoing process that requires vigilance and regular review of your security measure. By following these best practices, you can significantly reduce the risk of API key leaks and unauthorized access.
