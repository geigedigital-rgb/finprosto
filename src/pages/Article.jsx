import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Clock, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import RelatedArticles from '../components/blog/RelatedArticles';
import ArticleFAQ from '../components/blog/ArticleFAQ';
import ArticleCTA from '../components/blog/ArticleCTA';
import { articlesData as baseArticles } from '../components/data/articlesData';
import { articlesData2026 } from '../components/data/articlesData2026';
import { articlesDataJuly2026 } from '../components/data/articlesDataJuly2026';

const articlesData = [...articlesDataJuly2026, ...articlesData2026, ...baseArticles];

export default function ArticlePage() {
  const [article, setArticle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const urlParams = new URLSearchParams(location.search);
    const slug = urlParams.get('slug');
    
    const foundArticle = articlesData.find(a => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
      document.title = foundArticle.metaTitle || foundArticle.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && foundArticle.metaDescription) {
        metaDescription.setAttribute('content', foundArticle.metaDescription);
      }

      // Open Graph метатеги
      const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', foundArticle.metaTitle || foundArticle.title);
      if (!ogTitle.parentNode) document.head.appendChild(ogTitle);

      const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.setAttribute('content', foundArticle.metaDescription || foundArticle.excerpt);
      if (!ogDescription.parentNode) document.head.appendChild(ogDescription);

      const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', foundArticle.heroImage || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png');
      if (!ogImage.parentNode) document.head.appendChild(ogImage);

      const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      ogUrl.setAttribute('content', window.location.href);
      if (!ogUrl.parentNode) document.head.appendChild(ogUrl);

      const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      ogType.setAttribute('content', 'article');
      if (!ogType.parentNode) document.head.appendChild(ogType);

      // Twitter Card метатеги
      const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      twitterCard.setAttribute('content', 'summary_large_image');
      if (!twitterCard.parentNode) document.head.appendChild(twitterCard);

      const twitterImage = document.querySelector('meta[name="twitter:image"]') || document.createElement('meta');
      twitterImage.setAttribute('name', 'twitter:image');
      twitterImage.setAttribute('content', foundArticle.heroImage || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png');
      if (!twitterImage.parentNode) document.head.appendChild(twitterImage);

      const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      twitterTitle.setAttribute('content', foundArticle.metaTitle || foundArticle.title);
      if (!twitterTitle.parentNode) document.head.appendChild(twitterTitle);

      const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      twitterDescription.setAttribute('content', foundArticle.metaDescription || foundArticle.excerpt);
      if (!twitterDescription.parentNode) document.head.appendChild(twitterDescription);

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', window.location.href);

      // Robots meta
      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'index, follow, max-image-preview:large');

      // JSON-LD для статті (Article schema)
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": foundArticle.title,
        "description": foundArticle.excerpt,
        "image": foundArticle.heroImage || 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png',
        "datePublished": foundArticle.publishDate,
        "dateModified": foundArticle.publishDate,
        "author": {
          "@type": "Organization",
          "name": "FinProsto",
          "url": "https://finprosto.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "FinProsto",
          "logo": {
            "@type": "ImageObject",
            "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        },
        "articleSection": foundArticle.category,
        "keywords": foundArticle.metaDescription || foundArticle.excerpt
      };

      let articleSchemaScript = document.querySelector('script[data-schema="article"]');
      if (!articleSchemaScript) {
        articleSchemaScript = document.createElement('script');
        articleSchemaScript.type = 'application/ld+json';
        articleSchemaScript.setAttribute('data-schema', 'article');
        document.head.appendChild(articleSchemaScript);
      }
      articleSchemaScript.textContent = JSON.stringify(articleSchema);

      // JSON-LD для FAQ (якщо є)
      if (foundArticle.faq && foundArticle.faq.length > 0) {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": foundArticle.faq.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        };

        let faqSchemaScript = document.querySelector('script[data-schema="faq"]');
        if (!faqSchemaScript) {
          faqSchemaScript = document.createElement('script');
          faqSchemaScript.type = 'application/ld+json';
          faqSchemaScript.setAttribute('data-schema', 'faq');
          document.head.appendChild(faqSchemaScript);
        }
        faqSchemaScript.textContent = JSON.stringify(faqSchema);
      }

      // Breadcrumbs schema
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Головна",
            "item": window.location.origin + "/#/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "База знань",
            "item": window.location.origin + "/#/Blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": foundArticle.title,
            "item": window.location.href
          }
        ]
      };

      let breadcrumbSchemaScript = document.querySelector('script[data-schema="breadcrumb"]');
      if (!breadcrumbSchemaScript) {
        breadcrumbSchemaScript = document.createElement('script');
        breadcrumbSchemaScript.type = 'application/ld+json';
        breadcrumbSchemaScript.setAttribute('data-schema', 'breadcrumb');
        document.head.appendChild(breadcrumbSchemaScript);
      }
      breadcrumbSchemaScript.textContent = JSON.stringify(breadcrumbSchema);
    }
  }, [location.search]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f7faf8] flex items-center justify-center">
        <div className="text-center rounded-[28px] bg-white border border-slate-100 shadow-sm px-8 py-10">
          <p className="text-slate-600 mb-4">Стаття не знайдена</p>
          <Link to={createPageUrl('Blog')}>
            <Button className="rounded-full bg-emerald-800 hover:bg-emerald-900 text-white">Повернутися до блогу</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = article.icon;

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <div className="absolute inset-0 bg-[#f7faf8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.10),_transparent_50%)]" />

      <div className="relative">
        <Navbar />
      
        <article className="pt-24 sm:pt-32 pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
            <Link 
              to={createPageUrl('Blog')}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-700 mb-5 sm:mb-8 transition-colors text-sm font-medium"
            >
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-100 shadow-sm inline-flex items-center justify-center">
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
              Повернутися до блогу
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 sm:mb-8 rounded-2xl sm:rounded-[32px] bg-white border border-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.06)] p-4 sm:p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold border border-emerald-100">
                  {article.category}
                </span>
                {article.publishDate && (
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-50 text-slate-600 text-[11px] sm:text-xs border border-slate-100">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {new Date(article.publishDate).toLocaleDateString('uk-UA', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-50 text-slate-600 text-[11px] sm:text-xs border border-slate-100">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {article.readTime} хв
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-50 text-slate-600 text-[11px] sm:text-xs border border-slate-100">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  {article.views}
                </span>
              </div>

              <h1 className="text-[1.45rem] sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 mb-3 sm:mb-5 tracking-tight leading-[1.2]">
                {article.title}
              </h1>

              <p className="text-[15px] sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative mb-5 sm:mb-10 rounded-2xl sm:rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_12px_40px_rgba(15,23,42,0.06)] bg-white"
            >
              {article.heroImage ? (
                <img 
                  src={article.heroImage} 
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className={`relative h-40 sm:h-64 bg-gradient-to-br ${article.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.28),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(15,23,42,0.12),transparent_45%)]" />
                  <IconComponent className="w-16 h-16 sm:w-28 sm:h-28 text-white/35 relative" strokeWidth={1.25} />

                  <div className="absolute top-3 left-3 sm:top-6 sm:left-6 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 shadow-sm border border-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    База знань FinProsto
                  </div>
                  <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur px-3 sm:px-4 py-2 sm:py-3 shadow-sm border border-white">
                    <div className="text-[10px] sm:text-[11px] text-slate-500 mb-0.5">Час читання</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">{article.readTime} хвилин</div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl sm:rounded-[32px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.05)] p-4 sm:p-8 lg:p-10 mb-4 overflow-x-auto"
            >
              <style dangerouslySetInnerHTML={{ __html: `
                .article-content h2 {
                  margin-top: 2rem !important;
                  margin-bottom: 0.9rem !important;
                  font-size: 1.25rem !important;
                  font-weight: 700 !important;
                  line-height: 1.3 !important;
                  letter-spacing: -0.02em !important;
                  color: #0f172a !important;
                }
                @media (min-width: 640px) {
                  .article-content h2 {
                    margin-top: 2.75rem !important;
                    margin-bottom: 1.25rem !important;
                    font-size: 1.65rem !important;
                    line-height: 1.25 !important;
                  }
                }
                .article-content h2:first-child {
                  margin-top: 0 !important;
                }
                .article-content h3 {
                  margin-top: 1.5rem !important;
                  margin-bottom: 0.75rem !important;
                  font-size: 1.1rem !important;
                  font-weight: 650 !important;
                  line-height: 1.35 !important;
                  color: #0f172a !important;
                }
                @media (min-width: 640px) {
                  .article-content h3 {
                    margin-top: 2rem !important;
                    margin-bottom: 1rem !important;
                    font-size: 1.25rem !important;
                  }
                }
                .article-content h4 {
                  margin-top: 1.35rem !important;
                  margin-bottom: 0.6rem !important;
                  font-size: 1.02rem !important;
                  font-weight: 600 !important;
                  color: #0f172a !important;
                }
                .article-content p {
                  margin-top: 0.85rem !important;
                  margin-bottom: 0.85rem !important;
                  line-height: 1.7 !important;
                  font-size: 0.9375rem !important;
                  color: #475569 !important;
                }
                @media (min-width: 640px) {
                  .article-content p {
                    margin-top: 1.15rem !important;
                    margin-bottom: 1.15rem !important;
                    line-height: 1.85 !important;
                    font-size: 1.0625rem !important;
                  }
                }
                .article-content ul, .article-content ol {
                  margin-top: 1rem !important;
                  margin-bottom: 1rem !important;
                  padding-left: 1.15rem !important;
                }
                .article-content li {
                  margin-top: 0.4rem !important;
                  margin-bottom: 0.4rem !important;
                  line-height: 1.65 !important;
                  font-size: 0.9375rem !important;
                  color: #475569 !important;
                }
                @media (min-width: 640px) {
                  .article-content li {
                    margin-top: 0.55rem !important;
                    margin-bottom: 0.55rem !important;
                    line-height: 1.75 !important;
                    font-size: 1.05rem !important;
                  }
                }
                .article-content strong {
                  font-weight: 650 !important;
                  color: #0f172a !important;
                }
                .article-content a {
                  color: #047857 !important;
                  font-weight: 600 !important;
                  text-decoration: none !important;
                }
                .article-content table {
                  margin-top: 1.25rem !important;
                  margin-bottom: 1.25rem !important;
                  font-size: 0.8125rem !important;
                  width: 100% !important;
                  min-width: 280px !important;
                  border-collapse: separate !important;
                  border-spacing: 0 !important;
                  overflow: hidden !important;
                  border-radius: 0.85rem !important;
                  border: 1px solid #e2e8f0 !important;
                }
                @media (min-width: 640px) {
                  .article-content table {
                    margin-top: 1.75rem !important;
                    margin-bottom: 1.75rem !important;
                    font-size: 0.9375rem !important;
                    border-radius: 1rem !important;
                  }
                }
                .article-content th {
                  padding: 0.55rem 0.65rem !important;
                  background: #ecfdf5 !important;
                  font-weight: 650 !important;
                  text-align: left !important;
                  border-bottom: 1px solid #d1fae5 !important;
                  color: #065f46 !important;
                }
                .article-content td {
                  padding: 0.55rem 0.65rem !important;
                  border-bottom: 1px solid #f1f5f9 !important;
                  vertical-align: top !important;
                  background: #ffffff !important;
                  color: #334155 !important;
                }
                @media (min-width: 640px) {
                  .article-content th,
                  .article-content td {
                    padding: 0.85rem 1rem !important;
                  }
                }
                .article-content tr:last-child td {
                  border-bottom: none !important;
                }
                .article-content .tip-box,
                .article-content .checklist {
                  margin-top: 1.25rem !important;
                  margin-bottom: 1.25rem !important;
                  padding: 1rem 1.1rem !important;
                  background: #f0fdf4 !important;
                  border-radius: 1rem !important;
                  border: 1px solid #bbf7d0 !important;
                  border-left: 4px solid #059669 !important;
                  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.06) !important;
                  color: #334155 !important;
                }
                @media (min-width: 640px) {
                  .article-content .tip-box,
                  .article-content .checklist {
                    margin-top: 1.75rem !important;
                    margin-bottom: 1.75rem !important;
                    padding: 1.35rem 1.5rem !important;
                    border-radius: 1.25rem !important;
                  }
                }
                .article-content .tip-box p,
                .article-content .checklist p {
                  margin-top: 0.35rem !important;
                  margin-bottom: 0.35rem !important;
                }
                .article-content blockquote {
                  margin-top: 1.25rem !important;
                  margin-bottom: 1.25rem !important;
                  padding: 1rem 1.1rem !important;
                  border-left: 4px solid #10b981 !important;
                  background: #f8fafc !important;
                  border-radius: 0 1rem 1rem 0 !important;
                  color: #334155 !important;
                  font-style: normal !important;
                }
                .article-content div[style] {
                  border-radius: 1rem !important;
                  max-width: 100% !important;
                }
              `}} />
              <div
                className="article-content prose prose-base sm:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>

            <ArticleCTA 
              title="Почніть контролювати фінанси професійно"
              description="Оберіть готовий шаблон та отримайте повний контроль над фінансами вашого бізнесу"
              href="/Products"
              ctaText="Обрати шаблон"
              features={[
                'Готові таблиці під ваш тип бізнесу',
                'CashFlow, P&L та контроль витрат',
                'Одноразова оплата без підписок',
                'Підтримка в Telegram після покупки',
              ]}
            />

            {article.faq && article.faq.length > 0 && (
              <ArticleFAQ faqs={article.faq} />
            )}

            <RelatedArticles currentSlug={article.slug} />
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}
