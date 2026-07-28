import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, Clock } from 'lucide-react';

export default function ArticleCard({ article, index = 0 }) {
  const Icon = article.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
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
            {Icon && <Icon className="w-12 h-12 text-white/80 relative" strokeWidth={1.5} />}
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

          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors line-clamp-2 text-[15px] leading-snug">
            {article.title}
          </h3>

          <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="inline-flex items-center gap-1.5 text-emerald-700 text-sm font-semibold">
            Читати далі
            <span className="inline-flex w-6 h-6 rounded-full bg-emerald-50 items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
