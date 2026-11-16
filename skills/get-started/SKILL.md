---
name: get-started
description: Deploy an app with while, the PaaS for AI agents, over its MCP server. Use when the user asks to put an app online with while, to add a database, a cache, a bucket or a scheduled job to it, or to understand why an app on while fails.
---

# Deploy with while

while hosts web services, workers, PostgreSQL databases, Redis-compatible caches, S3 buckets and scheduled jobs. Its MCP
server is `https://app.while.sh/mcp`; the person signs in to while in their browser on first use.

No account yet? Read https://while.sh/agents: without an account and without a card, you can deploy the app as a
trial, and give the person the link to keep it.

## The usual path

1. Read the contract once (`get_catalog`): the app listens on the port given in `PORT`, answers its health path,
   and reaches the internet only through what it declares.
2. Write a `while.yaml` at the root of the app. The smallest one:

   ```yaml
   apiVersion: while/v1
   project: my-app
   services:
     - name: web
       port: 3000
       health:
         path: /health
   ```

   A database is two more lines (`databases:` then `- name: main`); its address arrives in `DATABASE_URL`. The schema
   is at `https://app.while.sh/schema/while.v1.json`.
3. See what will change and what it costs each month before touching anything (`plan_deploy`).
4. Send the code (`upload_source`: with a terminal, it returns a `curl` command), then put the app online
   (`deploy_app`). The deployment waits until the app is online and returns its address.
5. Follow the app: its state (`get_app_status`), its logs (`get_logs`), its metrics, traces and errors
   (`observe_app`). To go back to the previous release: `rollback_app`.

## What a person decides

- Some actions wait for a person's approval in while: the tool returns a link for the person, and its answer says how
  to resume once the action is approved.
- API keys and secrets are entered by the person in while. They reach the app as variables and are never shown back.

## Find more

Search the while docs (`search_docs`). Guides by stack: https://while.sh/en/guides/.
