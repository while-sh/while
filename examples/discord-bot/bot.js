// A worker that runs around the clock, with no public address. Every 60 s it calls Discord's public gateway endpoint
// (no token needed) and logs the status. A real bot reads its token from /run/secrets/DISCORD_TOKEN, entered by a
// person in while.
const check = async () => {
  try { const res = await fetch('https://discord.com/api/v10/gateway'); console.log(`discord ${res.status}`); }
  catch (e) { console.log(`discord unreachable: ${e.message}`); }
};
await check();
setInterval(check, 60_000);
