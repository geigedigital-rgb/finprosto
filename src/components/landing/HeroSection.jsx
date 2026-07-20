import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Clock, Users } from 'lucide-react';
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30">
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Готові рішення для бізнесу</span>
            </motion.div>

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
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Floating UI Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-4 text-sm text-slate-400">Business Report</span>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-2 text-xs font-medium text-slate-500 border-b pb-2">
                    <span>Назва</span>
                    <span>Ціна</span>
                    <span>Кількість</span>
                    <span>Сума</span>
                  </div>
                  {[
                    ['Аренда офісу', '15 000', '1', '15 000'],
                    ['Зарплата команди', '85 000', '4', '340 000'],
                    ['Маркетинг', '12 500', '1', '12 500'],
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-2 text-sm py-2 border-b border-slate-50">
                      {row.map((cell, j) => (
                        <span key={j} className={j === 0 ? 'text-slate-700' : 'text-slate-500'}>{cell}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-2xl p-5 shadow-xl shadow-emerald-500/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1 879 010₴</div>
                    <div className="text-emerald-100 text-sm">+45% за останній місяць</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Small Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
              >
                <div className="text-xs text-slate-500 mb-1">Замовлення</div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs font-medium">156</span>
                  <span className="text-slate-400">нових</span>
                </div>
              </motion.div>
            </div>
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