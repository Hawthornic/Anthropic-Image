const DEFAULT_USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36";

type FetchTextOptions = {
  retries?: number;
};

export async function fetchText(url: string, options: FetchTextOptions = {}): Promise<string> {
  const retries = options.retries ?? 0;
  let attempt = 0;
  let lastError: unknown;

  while (attempt <= retries) {
    try {
      const response = await fetch(url, {
        headers: {
          "user-agent": DEFAULT_USER_AGENT,
        },
      });

      if (!response.ok) {
        throw new Error(`Request to ${url} failed with status ${response.status}`);
      }

      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt === retries) {
        break;
      }

      await sleep((attempt + 1) * 1_000);
      attempt += 1;
    }
  }

  throw lastError instanceof Error ? lastError : new Error(`Request to ${url} failed`);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
