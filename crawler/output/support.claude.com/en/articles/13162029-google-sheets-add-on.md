---
source_url: https://support.claude.com/en/articles/13162029-google-sheets-add-on
title: "Google Sheets add-on"
section: articles
date: 2026-03-16
---

<!-- para:0001 -->
The [Claude for Sheets extension](https://workspace.google.com/marketplace/app/claude%5Ffor%5Fsheets/909417792257) integrates Claude into Google Sheets, allowing you to execute interactions with Claude directly in cells.

<!-- para:0002 -->
Claude for Sheets enables prompt engineering at scale by enabling you to test prompts across evaluation suites in parallel. Additionally, it excels at office tasks like survey analysis and online data processing.

<!-- para:0003 -->
Visit our [prompt engineering example sheet](https://docs.google.com/spreadsheets/d/1sUrBWO0u1-ZuQ8m5gt3-1N5PLR6r__UsRsB7WeySDQA/copy) to see this in action.

<!-- para:0004 -->
Easily enable Claude for Sheets using the following steps:

<!-- para:0005 -->
There are two main functions you can use to call Claude using Claude for Sheets. For now, let's use `CLAUDE()`.

<!-- para:0006 -->
**Simple prompt**

<!-- para:0007 -->
In any cell, type `=CLAUDE("Claude, in one sentence, what's good about the color blue?")`.

<!-- para:0008 -->
Claude should respond with an answer. You will know the prompt is processing because the cell will say `Loading...`.

<!-- para:0009 -->
**Adding parameters**

<!-- para:0010 -->
Parameter arguments come after the initial prompt, like `=CLAUDE(prompt, model, params...)`.

<!-- para:0011 -->
Now type in any cell `=CLAUDE("Hi, Claude!", "claude-haiku-4-5-20251001", "max_tokens", 3)`.

<!-- para:0012 -->
Any API parameter can be set this way. You can even pass in an API key to be used just for this specific cell, like this: `"api_key", "sk-ant-api03-j1W..."`.

<!-- para:0013 -->
`CLAUDEMESSAGES` is a function that allows you to specifically use the [Messages API](https://platform.claude.com/docs/en/api/messages). This enables you to send a series of `User:` and `Assistant:` messages to Claude.

<!-- para:0014 -->
This is particularly useful if you want to simulate a conversation or [prefill Claude's response](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prefill-claudes-response).

<!-- para:0015 -->
Try writing this in a cell:

<!-- para:0016 -->
**Example multiturn CLAUDEMESSAGES() call with system prompt**

<!-- para:0017 -->
To use a system prompt, set it as you'd set other optional function parameters. (You must first set a model name.)

<!-- para:0018 -->
You can specify optional API parameters by listing argument-value pairs.

<!-- para:0019 -->
You can set multiple parameters. Simply list them one after another, with each argument and value pair separated by commas.

<!-- para:0020 -->
The argument-value parameters you might care about most are:

<!-- para:0021 -->
Ex. Set `system` prompt, `max_tokens`, and `temperature`:

<!-- para:0022 -->
Ex. Set `temperature`, `max_tokens`, and `stop_sequences`:

<!-- para:0023 -->
Ex. Set `api_key`:

<!-- para:0024 -->
Our in-depth [prompt engineering interactive tutorial](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8/edit?usp=sharing) utilizes Claude for Sheets.

<!-- para:0025 -->
Check it out to learn or brush up on prompt engineering techniques.

<!-- para:0026 -->
Our [Claude for Sheets prompting examples workbench](https://docs.google.com/spreadsheets/d/1sUrBWO0u1-ZuQ8m5gt3-1N5PLR6r%5F%5FUsRsB7WeySDQA/copy) is a Claude-powered spreadsheet that houses example prompts and prompt engineering structures.

<!-- para:0027 -->
Make a copy of our [Claude for Sheets workbook template](https://docs.google.com/spreadsheets/d/1UwFS-ZQWvRqa6GkbL4sy0ITHK2AhXKe-jpMLzS0kTgk/copy) to get started with your own Claude for Sheets work!

<!-- para:0028 -->
You can manually recalculate `#ERROR!`, `⚠ DEFERRED ⚠`, or `⚠ THROTTLED ⚠` cells by selecting from the recalculate options within the Claude for Sheets extension menu.

<!-- para:0029 -->
For more information regarding this extension, see the [Claude for Sheets Google Workspace Marketplace](https://workspace.google.com/marketplace/app/claude%5Ffor%5Fsheets/909417792257) overview page.
