import { createClientFromRequest } from 'npm:@base44/sdk@0.8.4';

Deno.serve(async (req) => {
  try {
    const robotsTxt = `# FinProsto Robots.txt
# https://finprosto.com

User-agent: *
Allow: /
Allow: /#/
Allow: /#/Products
Allow: /#/ProductPro
Allow: /#/ProductWarehouse
Allow: /#/ProductEstimate
Allow: /#/ProductLite
Allow: /#/ProductBeauty
Allow: /#/ProductConstruction
Allow: /#/ProductManufacturing
Allow: /#/ProductAgro
Allow: /#/ProductIT
Allow: /#/ProductEcommerce
Allow: /#/ProductFinmodelEcommerce
Allow: /#/ProductFinmodelRetail
Allow: /#/ProductFinmodelManufacturing
Allow: /#/ProductFinmodelDental
Allow: /#/CustomSolution
Allow: /#/Blog

# Заборонити індексацію технічних сторінок
Disallow: /#/done
Disallow: /api/

# Sitemap
Sitemap: https://finprosto.com/api/sitemap

# Швидкість краулінгу
Crawl-delay: 1

# Специфічні правила для різних ботів
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /
Crawl-delay: 2
`;

    return new Response(robotsTxt, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    return new Response(
      `# Error\nUser-agent: *\nAllow: /`, 
      { 
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      }
    );
  }
});