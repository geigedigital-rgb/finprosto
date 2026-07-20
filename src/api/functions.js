/**
 * Call backend API functions (Railway Node server).
 * Replaces base44.functions.invoke
 */
export async function invokeFunction(name, body = {}) {
  const response = await fetch(`/api/functions/${name}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || data.message || `Function ${name} failed`);
  }

  return { data };
}

export function getSiteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, '');
  if (typeof window !== 'undefined') return window.location.origin;
  return 'https://finprosto.com';
}
