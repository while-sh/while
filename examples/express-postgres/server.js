import express from 'express';
import pg from 'pg';
// while gives the database address in DATABASE_URL.
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
await db.query('CREATE TABLE IF NOT EXISTS visits (id serial PRIMARY KEY, at timestamptz DEFAULT now())');
const app = express();
app.get('/health', (_req, res) => res.send('ok'));
app.get('/', async (_req, res) => {
  await db.query('INSERT INTO visits DEFAULT VALUES');
  const { rows } = await db.query('SELECT count(*)::int AS n FROM visits');
  res.send(`visits: ${rows[0].n}`);
});
app.listen(process.env.PORT || 3000, '0.0.0.0');
