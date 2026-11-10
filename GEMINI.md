# while

while is a PaaS built for AI agents. Its MCP server (`while`) deploys apps and what they use: web services, workers,
PostgreSQL databases, Redis-compatible caches, S3 buckets and scheduled jobs.

- Read the contract once (`get_catalog`), then write a `while.yaml` at the root of the app
  (schema: https://app.while.sh/schema/while.v1.json).
- Check what will change and its monthly cost (`plan_deploy`), send the code (`upload_source`), then put the app online
  (`deploy_app`). Its state, logs and metrics: `get_app_status`, `get_logs`, `observe_app`.
- Some actions wait for a person's approval in while; secrets are entered by the person in while, never in the chat.
- Search the while docs with `search_docs`.
