import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import ArticleCard from '../components/blog/ArticleCard';
import { articlesData as baseArticles } from '../components/data/articlesData';
import { articlesData2026 } from '../components/data/articlesData2026';

const articlesData = [...articlesData2026, ...baseArticles];

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'База знань - FinProsto | Статті про облік та фінанси';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Практичні статті про фінансовий облік, управління бізнесом та оптимізацію процесів. Реальні кейси та покрокові інструкції.');
    }
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/#/Blog');
    
    // Robots meta
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow');
  }, []);

  const categories = ['Всі статті', ...new Set(articlesData.map(a => a.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('Всі статті');

  const filteredArticles = (selectedCategory === 'Всі статті' 
    ? articlesData 
    : articlesData.filter(a => a.category === selectedCategory)
  ).sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              База знань
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Корисні статті про облік
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Практичні кейси, покрокові інструкції та перевірені методики для ефективного управління фінансами
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-600">
                <strong className="text-slate-900">{articlesData.length}</strong> статей
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              <span className="text-slate-600">
                <strong className="text-slate-900">Безкоштовно</strong> для всіх
              </span>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}