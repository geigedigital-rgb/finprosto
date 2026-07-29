import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import functionsRouter, { mountSeoRoutes } from './routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

// Load local .env if present (Railway injects Variables instead)
try {
  const envPath = path.join(rootDir, '.env');
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = value;
    }
  }
} catch {
  // ignore
}

const app = express();
const PORT = process.env.PORT || 3001;

const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://finprosto.com').replace(/\/$/, '');
let canonicalHost = 'finprosto.com';
try {
  canonicalHost = new URL(siteUrl).hostname.replace(/^www\./, '');
} catch {
  // keep default
}

// Force HTTPS + redirect www → apex (canonical SITE_URL host)
app.use((req, res, next) => {
  const host = (req.headers['x-forwarded-host'] || req.headers.host || '')
    .toString()
    .split(':')[0]
    .toLowerCase();
  const proto = (req.headers['x-forwarded-proto'] || req.protocol || 'https')
    .toString()
    .split(',')[0]
    .trim();

  // Skip Railway default domains
  if (host.endsWith('.up.railway.app') || host.endsWith('.railway.app')) {
    return next();
  }

  const isWww = host === `www.${canonicalHost}`;
  const needsHttps = proto !== 'https';

  if (isWww || needsHttps) {
    const targetHost = isWww ? canonicalHost : host;
    return res.redirect(301, `https://${targetHost}${req.originalUrl}`);
  }

  return next();
});

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// API functions (same paths as Base44)
app.use('/api/functions', functionsRouter);

// SEO endpoints
mountSeoRoutes(app);

// Health check for Railway
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'finprosto' });
});

// WayForPay returnUrl: same endpoint for success & decline → branch by transactionStatus
function redirectWayForPayReturn(req, res) {
  const data = { ...req.query, ...req.body };
  const status = String(data.transactionStatus || data.status || '').toLowerCase();
  const email = data.clientEmail || data.email || '';
  const orderReference = data.orderReference || '';
  const rawProduct = data.productName;
  const product = Array.isArray(rawProduct) ? rawProduct[0] : rawProduct || '';

  const params = new URLSearchParams();
  if (email) params.set('email', email);
  if (orderReference) params.set('orderReference', orderReference);
  if (product) params.set('product', product);

  const qs = params.toString();
  const approved = status === 'approved';
  const target = approved
    ? `/done${qs ? `?${qs}` : ''}`
    : `/PaymentFailed${qs ? `?${qs}` : ''}`;

  return res.redirect(303, target);
}

app.all('/payment-return', redirectWayForPayReturn);
// Legacy returnUrl still used by older widgets / bookmarks
app.post('/done', redirectWayForPayReturn);

// Static frontend
app.use(express.static(distDir, { index: false }));

// SPA fallback (React Router)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Not found' });
  }
  res.sendFile(path.join(distDir, 'index.html'), (err) => {
    if (err) next(err);
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`FinProsto listening on port ${PORT}`);
});
