---
name: get-started
description: Deploy, host and share tools and apps with while (while.sh) over its MCP server, for a team, a client with a password, or everyone. Use when the user asks to put a tool or an app online with while, to add a database, a cache, a bucket or a scheduled job to it, or to understand why an app on while fails.
---

# Deploy and share with while

while.sh puts the tools and apps your user builds with their AI online, in France. Each one can be kept for their
colleagues, shared with a client through a link and a password, or put online for everyone. Data is backed up every
day, and a person approves what matters, like making an app public.

Connect the MCP server `https://app.while.sh/mcp`. No account is needed to start: the first app goes online as a free
trial, and the person keeps it by creating an account. When a tool needs that account, the server asks them to sign
in. It runs web services, workers, PostgreSQL, Redis-compatible caches, S3 buckets and scheduled jobs.
More: https://while.sh/agents

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
