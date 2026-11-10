import express from 'express';
import { createClient } from 'redis';
// while gives the cache address in REDIS_URL (a Redis-compatible cache).
const cache = createClient({ url: process.env.REDIS_URL });
await cache.connect();
const app = express();
app.get('/health', (_req, res) => res.send('ok'));
app.get('/', async (_req, res) => res.send(`counter: ${await cache.incr('counter')}`));
app.listen(process.env.PORT || 3000, '0.0.0.0');
