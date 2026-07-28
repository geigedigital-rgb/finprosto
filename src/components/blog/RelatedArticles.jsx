import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight } from 'lucide-react';
import { articlesData as baseArticles } from '../data/articlesData';
import { articlesData2026 } from '../data/articlesData2026';
import { articlesDataJuly2026 } from '../data/articlesDataJuly2026';
const articlesData = [...articlesDataJuly2026, ...articlesData2026, ...baseArticles];

export default function RelatedArticles({ currentSlug }) {
  const otherArticles = articlesData
    .filter(article => article.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-16 pt-16 border-t border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">
        Читайте також
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {otherArticles.map((article, index) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={createPageUrl('Article') + `?slug=${article.slug}`}>
              <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.gradient} flex items-center justify-center mb-4`}>
                  <article.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>
                
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-medium">
                  Читати далі
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}