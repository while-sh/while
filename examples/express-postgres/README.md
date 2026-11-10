# A Node API with its PostgreSQL database

`databases` adds a PostgreSQL database, backed up every day; its address arrives in `DATABASE_URL`.
Once online, `/health` answers `ok`, and each visit to `/` shows one more: `visits: 1`, then `visits: 2`.
