import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const baseUrl = 'https://finprosto.com';
    
    const pages = [
      { url: '/#/', changefreq: 'daily', priority: '1.0' },
      { url: '/#/Products', changefreq: 'weekly', priority: '0.9' },
      { url: '/#/ProductPro', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductWarehouse', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductEstimate', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductLite', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductBeauty', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductConstruction', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductManufacturing', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductAgro', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductIT', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductEcommerce', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductFinmodelEcommerce', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductFinmodelRetail', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductFinmodelManufacturing', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/ProductFinmodelDental', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/CustomSolution', changefreq: 'monthly', priority: '0.7' },
      { url: '/#/CRM', changefreq: 'weekly', priority: '0.9' },
      { url: '/#/CRMTrade', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/CRMBeauty', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/CRMEcommerce', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/CRMConstruction', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/CRMServices', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/CRMManufacturing', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/Blog', changefreq: 'weekly', priority: '0.7' },
      { url: '/#/Privacy', changefreq: 'yearly', priority: '0.3' },
      { url: '/#/Offer', changefreq: 'yearly', priority: '0.3' },
      { url: '/#/AccountingAgro', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/AccountingFurniture', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/AccountingSchool', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/AccountingLegal', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/AccountingRecruiting', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/AccountingAutoService', changefreq: 'monthly', priority: '0.8' },
      { url: '/#/AccountingConstruction', changefreq: 'monthly', priority: '0.8' },
    ];

    const currentDate = new Date().toISOString().split('T')[0];

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${currentDate}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
});