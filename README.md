# ZetaMD Preview — MongoDB prototype

This reads from MongoDB collection `group_previews`; it does not modify the bot JSON or orders/products.

Vercel server environment variables:
- `MONGODB_URI` — keep secret, never use a `NEXT_PUBLIC_` prefix.
- `DEFAULT_GROUP_BANNER` — optional default image URL.

To create/update two test records, run `node scripts/seed-preview.mjs` with `MONGODB_URI` set to the intended database. Inspect the target database before running. This script only writes `group_previews`.

Routes: `/g/grup-a`, `/g/grup-b`. WhatsApp can cache preview metadata; test with a new slug if needed.
