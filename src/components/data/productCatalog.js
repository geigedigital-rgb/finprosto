/**
 * Shared product catalog for payment recovery / product cards.
 * Keep in sync with ProductsMiniSection pricing.
 */
export const PRODUCT_CATALOG = [
  {
    id: 'pro',
    title: 'Таблиця обліку фінансів PRO',
    aliases: ['таблиця обліку фінансів pro', 'pro', 'finances pro'],
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png',
    price: '1730',
    oldPrice: '2090',
    discount: '-30%',
  },
  {
    id: 'warehouse',
    title: 'Таблиця обліку Складу',
    aliases: ['таблиця обліку складу', 'склад', 'warehouse'],
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5b20a0ada_.png',
    price: '1100',
    oldPrice: '1490',
    discount: '-26%',
  },
  {
    id: 'estimate',
    title: 'Калькулятор кошторисів',
    aliases: ['калькулятор кошторисів', 'кошторис', 'estimate'],
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/be41b0dfa_.png',
    price: '410',
    oldPrice: '590',
    discount: '-30%',
  },
  {
    id: 'lite',
    title: 'Таблиця для бізнесу Lite',
    aliases: ['таблиця для бізнесу lite', 'таблиця для бізнесу (lite)', 'lite'],
    image: '/product-lite-preview.png',
    price: '429',
    oldPrice: '590',
    discount: '-27%',
  },
  {
    id: 'bundle',
    title: 'Набір всіх таблиць для Бізнесу',
    aliases: ['набір всіх таблиць', 'bundle'],
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png',
    price: '1240',
    oldPrice: '3669',
    discount: '-70%',
  },
];

function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Resolve a full product card from partial order / payment data.
 */
export function resolveProduct(partial = {}) {
  const id = normalize(partial.id || partial.productId);
  const title = normalize(partial.title || partial.product || partial.productName);

  let match =
    PRODUCT_CATALOG.find((p) => p.id === id) ||
    PRODUCT_CATALOG.find((p) => normalize(p.title) === title) ||
    PRODUCT_CATALOG.find((p) => p.aliases.some((a) => title.includes(a) || a.includes(title)));

  if (!match && title) {
    match = PRODUCT_CATALOG.find((p) => title.includes(normalize(p.title).slice(0, 18)));
  }

  const base = match || PRODUCT_CATALOG[0];

  return {
    id: partial.productId || partial.id || base.id,
    title: partial.title || partial.product || partial.productName || base.title,
    price: partial.price || base.price,
    oldPrice: partial.oldPrice || base.oldPrice,
    discount: partial.discount || base.discount,
    image: partial.image || base.image,
  };
}

export function formatUah(value) {
  const n = parseFloat(String(value ?? '').replace(/\s/g, ''));
  if (!Number.isFinite(n)) return null;
  return n.toLocaleString('uk-UA');
}
