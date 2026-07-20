import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArticleCard from '../blog/ArticleCard';
import { articlesData } from '../data/articlesData';

export default function KnowledgeBaseSection() {
  const featuredArticles = [...articlesData]
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            База знань
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Корисні статті про облік
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Практичні кейси та поради для ефективного управління фінансами
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl('Blog')}>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 py-6 text-base">
              Всі статті
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}