import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Clock, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import RelatedArticles from '../components/blog/RelatedArticles';
import ArticleFAQ from '../components/blog/ArticleFAQ';
import ArticleCTA from '../components/blog/ArticleCTA';
import { articlesData as baseArticles } from '../components/data/articlesData';
import { articlesData2026 } from '../components/data/articlesData2026';

const articlesData = [...articlesData2026, ...baseArticles];

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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Стаття не знайдена</p>
          <Link to={createPageUrl('Blog')}>
            <Button>Повернутися до блогу</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = article.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link 
            to={createPageUrl('Blog')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Повернутися до блогу
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                {article.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                {article.publishDate && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.publishDate).toLocaleDateString('uk-UA', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} хв читання
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {article.views} переглядів
                </div>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </motion.div>

          {/* Hero Image or Icon Banner */}
          {article.heroImage ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative mb-12 rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src={article.heroImage} 
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={`relative mb-12 h-64 rounded-3xl bg-gradient-to-br ${article.gradient} flex items-center justify-center overflow-hidden`}
            >
              <IconComponent className="w-32 h-32 text-white/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          )}

          {/* Content */}
          <>
            <style dangerouslySetInnerHTML={{ __html: `
              .article-content h2 {
                margin-top: 3rem !important;
                margin-bottom: 1.5rem !important;
                font-size: 1.875rem !important;
                font-weight: 700 !important;
                line-height: 1.3 !important;
              }
              .article-content h3 {
                margin-top: 2.5rem !important;
                margin-bottom: 1.25rem !important;
                font-size: 1.5rem !important;
                font-weight: 600 !important;
                line-height: 1.4 !important;
              }
              .article-content h4 {
                margin-top: 2rem !important;
                margin-bottom: 1rem !important;
                font-size: 1.25rem !important;
                font-weight: 600 !important;
              }
              .article-content p {
                margin-top: 1.5rem !important;
                margin-bottom: 1.5rem !important;
                line-height: 1.9 !important;
                font-size: 1.125rem !important;
              }
              .article-content ul, .article-content ol {
                margin-top: 1.5rem !important;
                margin-bottom: 1.5rem !important;
                padding-left: 1.75rem !important;
              }
              .article-content li {
                margin-top: 0.75rem !important;
                margin-bottom: 0.75rem !important;
                line-height: 1.8 !important;
                font-size: 1.0625rem !important;
              }
              .article-content strong {
                font-weight: 600 !important;
                color: #0f172a !important;
              }
              .article-content table {
                margin-top: 2rem !important;
                margin-bottom: 2rem !important;
                font-size: 0.9375rem !important;
                width: 100% !important;
                border-collapse: collapse !important;
              }
              .article-content th {
                padding: 0.875rem 1rem !important;
                background: #f8fafc !important;
                font-weight: 600 !important;
                text-align: left !important;
                border: 1px solid #e2e8f0 !important;
                color: #0f172a !important;
              }
              .article-content td {
                padding: 0.875rem 1rem !important;
                border: 1px solid #e2e8f0 !important;
                vertical-align: top !important;
              }
              .article-content .tip-box, .article-content .checklist {
                margin-top: 2rem !important;
                margin-bottom: 2rem !important;
                padding: 1.5rem !important;
                background: #f1f5f9 !important;
                border-radius: 0.75rem !important;
                border-left: 4px solid #059669 !important;
              }
              .article-content blockquote {
                margin-top: 2rem !important;
                margin-bottom: 2rem !important;
                padding-left: 1.5rem !important;
                border-left: 4px solid #cbd5e1 !important;
              }
            `}} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="article-content prose prose-xl prose-slate max-w-none mb-16"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                '--tw-prose-body': '#475569',
                '--tw-prose-headings': '#0f172a',
                '--tw-prose-links': '#059669',
                '--tw-prose-bold': '#0f172a',
                '--tw-prose-counters': '#64748b',
                '--tw-prose-bullets': '#64748b',
                '--tw-prose-quotes': '#475569',
              }}
            />
          </>

          {/* CTA Component */}
          <ArticleCTA 
            title="Почніть контролювати фінанси професійно"
            description="Оберіть готовий шаблон та отримайте повний контроль над фінансами вашого бізнесу"
            href="/#/Products"
            ctaText="Обрати шаблон"
          />

          {/* FAQ */}
          {article.faq && article.faq.length > 0 && (
            <ArticleFAQ faqs={article.faq} />
          )}

          {/* Related Articles */}
          <RelatedArticles currentSlug={article.slug} />
        </div>
      </article>

      <Footer />
    </div>
  );
}