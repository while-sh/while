import express from 'express';
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
// while gives S3_ENDPOINT, S3_REGION, S3_BUCKET_UPLOADS and a key limited to this environment's buckets.
const s3 = new S3Client({ endpoint: process.env.S3_ENDPOINT, region: process.env.S3_REGION, forcePathStyle: true });
const Bucket = process.env.S3_BUCKET_UPLOADS;
const app = express();
app.get('/health', (_req, res) => res.send('ok'));
app.get('/', async (_req, res) => {
  const Body = `written at ${new Date().toISOString()}`;
  await s3.send(new PutObjectCommand({ Bucket, Key: 'hello.txt', Body }));
  const file = await s3.send(new GetObjectCommand({ Bucket, Key: 'hello.txt' }));
  res.send(`read back: ${await file.Body.transformToString()}`);
});
app.listen(process.env.PORT || 3000, '0.0.0.0');
