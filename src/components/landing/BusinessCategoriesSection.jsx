import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Sparkles, 
  HardHat, 
  Factory,
  ArrowRight,
  TrendingUp,
  Users,
  Package,
  Wheat,
  Laptop,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function BusinessCategoriesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    {
      icon: ShoppingCart,
      title: 'Інтернет-магазин',
      subtitle: 'E-commerce',
      description: 'Контролюйте кожну гривню прибутку та маржу по товарах',
      gradient: 'from-blue-500 to-cyan-500',
      link: createPageUrl('ProductEcommerce'),
    },
    {
      icon: Sparkles,
      title: 'Салон краси',
      subtitle: 'Послуги · Сервіс',
      description: 'Облік майстрів, матеріалів та завантаженості в одному місці',
      gradient: 'from-pink-500 to-purple-500',
      link: createPageUrl('ProductBeauty'),
    },
    {
      icon: HardHat,
      title: 'Будівництво',
      subtitle: 'Проєкти · Підряд',
      description: 'Кошториси, план-факт та контроль бюджету кожного об\'єкту',
      gradient: 'from-orange-500 to-red-500',
      link: createPageUrl('ProductConstruction'),
    },
    {
      icon: Factory,
      title: 'Виробництво',
      subtitle: 'Цех · Фабрика',
      description: 'Собівартість продукції та облік сировини під контролем',
      gradient: 'from-emerald-500 to-teal-500',
      link: createPageUrl('ProductManufacturing'),
    },
  ];

  const additionalCategories = [
    {
      icon: Wheat,
      title: 'Агробізнес',
      subtitle: 'Фермерство · Рослинництво',
      description: 'Облік врожаю, техніки, полів та витрат на кожен сезон',
      gradient: 'from-green-500 to-lime-500',
      link: createPageUrl('ProductAgro'),
    },
    {
      icon: Laptop,
      title: 'IT продукти',
      subtitle: 'SaaS · Розробка',
      description: 'Аналіз MRR, витрат на розробку та юніт-економіки продукту',
      gradient: 'from-indigo-500 to-blue-500',
      link: createPageUrl('ProductIT'),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Таблиця - Облік фінансів
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Виберіть галузь та отримайте підходящу таблицю для обліку
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={category.link}>
                  <div className="group relative h-full bg-white rounded-3xl p-10 border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow Effect */}
                    <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Large Icon */}
                      <motion.div 
                        className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-sm">
                        {category.description}
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white font-semibold shadow-lg group-hover:shadow-xl transition-shadow`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Дивитись рішення</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Інші галузі */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mx-auto flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 hover:border-slate-300 rounded-xl text-slate-700 font-semibold transition-all"
          >
            <span>Інші галузі</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-8">
                  {additionalCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link to={category.link}>
                          <div className="group relative h-full bg-white rounded-3xl p-10 border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                            {/* Animated Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            
                            {/* Glow Effect */}
                            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                              {/* Large Icon */}
                              <motion.div 
                                className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Icon className="w-12 h-12 text-white" />
                              </motion.div>

                              {/* Title */}
                              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                {category.title}
                              </h3>

                              {/* Description */}
                              <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-sm">
                                {category.description}
                              </p>

                              {/* CTA Button */}
                              <motion.div
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white font-semibold shadow-lg group-hover:shadow-xl transition-shadow`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span>Дивитись рішення</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </motion.div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-4">
            Не знайшли свою галузь? Наші таблиці універсальні та підходять для будь-якого бізнесу
          </p>
          <Link to={createPageUrl('Products')}>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-colors">
              Переглянути всі продукти
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}