# After you have SendPulse + WayForPay (+ Telegram) keys

1. Railway → your service → Variables — paste from local `.env` (same names).
2. Set `SITE_URL` and `VITE_SITE_URL` to the public URL (Railway domain or `https://finprosto.com`).
3. Redeploy so Vite rebuild picks up `VITE_*` vars (baked into frontend at build time).
4. In WayForPay merchant cabinet:
   - Domain = same as `SITE_URL` hostname
   - Service URL = `https://<domain>/api/functions/wayforpayCallback`
5. Smoke test:
   - `GET /api/health`
   - Contact form → Telegram
   - Payment widget → `/done` → SendPulse event fires

## SendPulse note

We use **Events Manager** (`SENDPULSE_EVENT_URL`), not address book.
`SENDPULSE_BOOK_ID` is not required for this flow.
