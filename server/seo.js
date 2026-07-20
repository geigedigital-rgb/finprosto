const PAGES = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/Products', changefreq: 'weekly', priority: '0.9' },
  { path: '/ProductPro', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductWarehouse', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductEstimate', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductLite', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductBeauty', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductConstruction', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductManufacturing', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductAgro', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductIT', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductEcommerce', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductFinmodelEcommerce', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductFinmodelRetail', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductFinmodelManufacturing', changefreq: 'monthly', priority: '0.8' },
  { path: '/ProductFinmodelDental', changefreq: 'monthly', priority: '0.8' },
  { path: '/CustomSolution', changefreq: 'monthly', priority: '0.7' },
  { path: '/CRM', changefreq: 'weekly', priority: '0.9' },
  { path: '/CRMTrade', changefreq: 'monthly', priority: '0.8' },
  { path: '/CRMBeauty', changefreq: 'monthly', priority: '0.8' },
  { path: '/CRMEcommerce', changefreq: 'monthly', priority: '0.8' },
  { path: '/CRMConstruction', changefreq: 'monthly', priority: '0.8' },
  { path: '/CRMServices', changefreq: 'monthly', priority: '0.8' },
  { path: '/CRMManufacturing', changefreq: 'monthly', priority: '0.8' },
  { path: '/Blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/Privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/Offer', changefreq: 'yearly', priority: '0.3' },
  { path: '/AccountingAgro', changefreq: 'monthly', priority: '0.8' },
  { path: '/AccountingFurniture', changefreq: 'monthly', priority: '0.8' },
  { path: '/AccountingSchool', changefreq: 'monthly', priority: '0.8' },
  { path: '/AccountingLegal', changefreq: 'monthly', priority: '0.8' },
  { path: '/AccountingRecruiting', changefreq: 'monthly', priority: '0.8' },
  { path: '/AccountingAutoService', changefreq: 'monthly', priority: '0.8' },
  { path: '/AccountingConstruction', changefreq: 'monthly', priority: '0.8' },
];

export function buildSitemap(siteUrl) {
  const currentDate = new Date().toISOString().split('T')[0];
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const page of PAGES) {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${siteUrl}${page.path === '/' ? '' : page.path}</loc>\n`;
    sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  }

  sitemap += '</urlset>';
  return sitemap;
}

export function buildRobotsTxt(siteUrl) {
  return `# FinProsto Robots.txt
# ${siteUrl}

User-agent: *
Allow: /
Disallow: /done
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml

Crawl-delay: 1

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /
Crawl-delay: 2
`;
}

export function buildLlmsTxt(siteUrl) {
  return `# FinProsto - Облік фінансів бізнесу в Google Sheets

> Професійні готові таблиці для обліку фінансів малого та середнього бізнесу в Україні.

## Основна інформація
- URL: ${siteUrl}
- Мова: Українська
- Email: support@finprosto.com
- Telegram: https://t.me/finprosto_support

## Продукти
- ${siteUrl}/ProductPro — Таблиця обліку фінансів PRO
- ${siteUrl}/ProductWarehouse — Облік складу
- ${siteUrl}/ProductEstimate — Калькулятор кошторисів
- ${siteUrl}/ProductLite — Базова версія
- ${siteUrl}/CRM — Розробка CRM
- ${siteUrl}/CustomSolution — Індивідуальні рішення
- ${siteUrl}/Blog — База знань

## Юридична інформація
- ${siteUrl}/Privacy
- ${siteUrl}/Offer
- Платіжна система: WayForPay
`;
}
