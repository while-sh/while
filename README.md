<p align="center"><picture><source media="(prefers-color-scheme: dark)" srcset="https://while.sh/icon-dark.png"><img src="https://while.sh/icon-light.png" width="96" height="96" alt=""></picture></p>

# while.sh

while (while.sh) hosts the tools you build with Claude or ChatGPT, and you choose who to share them with: your team, a
client or a supplier with a link and a password, or everyone. Your AI agent deploys a tool in 3 minutes through the
while.sh MCP server, with no sign-up, and you keep the tool by creating your account. Each tool has its PostgreSQL
database backed up every day, storage and scheduled jobs, and it can have a custom domain. The credentials for your
other software stay in while.sh, and the agent never sees them. Making a tool public waits for the approval of a person
on your team. while.sh works with Claude, ChatGPT, Cursor and any MCP agent. It is hosted in France by Nextmap.

This repository holds what you need to connect your agent to while, and example apps that deploy as they are.

[![Install in Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=while&config=eyJ1cmwiOiJodHRwczovL2FwcC53aGlsZS5zaC9tY3AifQ==)
[![Install in VS Code](https://img.shields.io/badge/VS_Code-Install_while-0098FF?logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=while&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapp.while.sh%2Fmcp%22%7D)

## Connect your agent

The MCP server is `https://app.while.sh/mcp` (Streamable HTTP). Without an account, your agent deploys right away,
as a free trial. When a tool needs your account, a page opens in your browser: sign in to while and authorize your agent.

The simplest way: paste this into your agent.

```text
Read while.sh/agents and help me get started with while.
```

Your agent connects with your account if you have one. Without one, it deploys your app as a free trial and gives
you the link to keep it.

Or connect it yourself:

| Agent | How |
|---|---|
| Claude Code | `claude mcp add --transport http --scope user while https://app.while.sh/mcp`, or this repository as a plugin: `/plugin marketplace add while-sh/while`, then `/plugin install while@while-sh` |
| Codex | `codex mcp add while --url https://app.while.sh/mcp`, then `codex mcp login while` |
| Hermes Agent | `hermes mcp add while --url https://app.while.sh/mcp --auth oauth --connect-timeout 300`, then add `trust: untrusted` to the `mcp_servers.while` entry in `config.yaml`: Hermes then asks before every tool that is not read-only |
| Gemini CLI | `gemini extensions install https://github.com/while-sh/while` |
| Cursor, VS Code | The buttons above |
| ChatGPT | Install the [while plugin](https://chatgpt.com/plugins/plugin_asdk_app_6aff264192dc819192f7d686a9468c74) from Plugins, on any plan |
| Claude, Mistral Vibe | Add a custom connector with the server address above |
| All of them at once | `curl -fsSL https://app.while.sh/install.sh \| sh` (writes only their config files, in your home folder) |

## Example apps

Each folder deploys as is: open your agent in it and ask it to deploy with while.

| Example | What it shows |
|---|---|
| [express-postgres](examples/express-postgres) | A Node API with its PostgreSQL database |
| [express-cache](examples/express-cache) | A Redis-compatible cache |
| [express-s3-bucket](examples/express-s3-bucket) | Files in an S3 bucket |
| [scheduled-job](examples/scheduled-job) | A Python script that runs every morning |
| [discord-bot](examples/discord-bot) | A worker that runs around the clock, with no public address |
| [docker-container](examples/docker-container) | Your own Dockerfile |
| [static-page](examples/static-page) | A single HTML page, such as one made in a conversation |
| [nextjs-internal](examples/nextjs-internal) | An app open only to the people of your company account |

Each app is described by a short `while.yaml`. Its JSON Schema, for your editor:
`https://app.while.sh/schema/while.v1.json`.

## Learn more

- Docs: https://while.sh/en/docs/
- The MCP tools: https://while.sh/en/docs/reference/mcp-tools/
- Guides: https://while.sh/en/guides/
- Pricing: https://while.sh/en/pricing/

## Privacy and security

while is operated by Nextmap (NXT Initiative SAS, Paris). The privacy policy is at https://while.sh/en/privacy/ and
the terms at https://while.sh/en/terms/. Report a vulnerability to security@while.sh (see [SECURITY.md](SECURITY.md)).

## License

The example apps and configuration files in this repository are under the [MIT license](LICENSE). The while service
itself is not open source.
