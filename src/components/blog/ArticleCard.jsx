import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ArticleCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
    >
      <div className={`h-2 bg-gradient-to-r ${article.gradient}`} />
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            {article.category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            {article.readTime} хв читання
          </div>
        </div>

        <Link to={createPageUrl('Article') + `?slug=${article.slug}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors cursor-pointer">
            {article.title}
          </h3>
        </Link>

        <p className="text-slate-600 mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            {article.views} переглядів
          </div>
          
          <Link to={createPageUrl('Article') + `?slug=${article.slug}`}>
            <Button variant="ghost" className="gap-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
              Читати
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}