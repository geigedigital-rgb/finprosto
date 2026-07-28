import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, Clock } from 'lucide-react';
import { articlesData as baseArticles } from '../data/articlesData';
import { articlesData2026 } from '../data/articlesData2026';
import { articlesDataJuly2026 } from '../data/articlesDataJuly2026';

const articlesData = [...articlesDataJuly2026, ...articlesData2026, ...baseArticles];

export default function RelatedArticles({ currentSlug }) {
  const otherArticles = articlesData
    .filter(article => article.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-16">
      <div className="text-center mb-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 mb-3">
          Далі по темі
        </span>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          Читайте також
        </h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-5">
        {otherArticles.map((article, index) => {
          const Icon = article.icon;
          return (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={createPageUrl('Article') + `?slug=${article.slug}`}
                className="group block h-full rounded-[28px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)] hover:-translate-y-1 transition-all overflow-hidden"
              >
                {article.heroImage ? (
                  <div className="mx-4 mt-4 overflow-hidden rounded-2xl aspect-[16/10] bg-slate-50 border border-slate-100">
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={`mx-4 mt-4 rounded-2xl aspect-[16/10] bg-gradient-to-br ${article.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                    <Icon className="w-12 h-12 text-white/80 relative" strokeWidth={1.5} />
                  </div>
                )}

                <div className="p-5 pt-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime} хв
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors line-clamp-2 text-[15px] leading-snug">
                    {article.title}
                  </h4>
                  
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center gap-1.5 text-emerald-700 text-sm font-semibold">
                    Читати далі
                    <span className="inline-flex w-6 h-6 rounded-full bg-emerald-50 items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
