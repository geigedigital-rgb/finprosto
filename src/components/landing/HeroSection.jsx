import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function HeroSection() {
  const stats = [
    { value: '12 000+', label: 'Активних користувачів', icon: Users },
    { value: '100%', label: 'Контролю за коштами', icon: TrendingUp },
    { value: '10 хв', label: 'На день для обліку', icon: Clock },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Готові таблиці
              </span>
              <br />
              для обліку бізнесу
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Економія часу та грошей з повноцінною обліковою системою для вашого бізнесу. Керуйте бізнесом на основі цифр.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to={createPageUrl('Products')}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-xl transition-all"
                >
                  Обрати шаблон
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const forSection = document.getElementById('for-who');
                  if (forSection) {
                    forSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-8 py-6 text-lg rounded-xl border-2 border-slate-300 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                Як це працює
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 leading-tight">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero product image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:scale-110 lg:origin-center"
          >
            <img
              src="/hero-google-tablitca.webp"
              alt="Готова Google-таблиця для обліку фінансів бізнесу"
              width={1200}
              height={900}
              className="w-full h-auto"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </div>

      {/* Partners */}
      <div className="relative border-t border-slate-100 bg-white/50 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 mb-8">Співпраця з світовими брендами</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['COMCAST', 'Google', 'fiverr', 'LEROY MERLIN', 'JYSK'].map((brand) => (
              <span key={brand} className="text-xl font-semibold text-slate-400">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}