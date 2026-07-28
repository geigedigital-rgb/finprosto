import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import ArticleCard from '../components/blog/ArticleCard';
import { articlesData as baseArticles } from '../components/data/articlesData';
import { articlesData2026 } from '../components/data/articlesData2026';
import { articlesDataJuly2026 } from '../components/data/articlesDataJuly2026';

const articlesData = [...articlesDataJuly2026, ...articlesData2026, ...baseArticles];

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
    <div className="min-h-screen relative overflow-x-clip">
      <div className="absolute inset-0 bg-[#f7faf8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.10),_transparent_50%)]" />

      <div className="relative">
        <Navbar />
        
        <div className="pt-28 sm:pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-14"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Корисні статті про облік
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Практичні кейси, покрокові інструкції та перевірені методики для ефективного управління фінансами
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-100 shadow-sm px-4 py-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-slate-600">
                  <strong className="text-slate-900">{articlesData.length}</strong> статей
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-100 shadow-sm px-4 py-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-slate-600">
                  <strong className="text-slate-900">Безкоштовно</strong> для всіх
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap justify-center gap-2.5 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} index={index} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}