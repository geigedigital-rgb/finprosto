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
