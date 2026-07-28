import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Zap,
  Settings,
  TrendingUp,
  BarChart3,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import ContactFormModal from './ContactFormModal';

export default function CustomSolutionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="hidden sm:block py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-x-clip overflow-y-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-l from-slate-700/30 to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Індивідуальна система<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                контролю бізнесу
              </span>
            </h2>
            
            <div className="inline-block mb-8">
              <span className="text-lg text-slate-400">від</span>
              <span className="text-4xl font-bold text-white mx-2">$1000</span>
            </div>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Де гарантії, що у вас не крадуть гроші, а бо ви правильно їх рахуєте? Розробимо повноцінну програму обліку та контролю бізнесу — від ціни кавової чашки в офісі до управління металургійним заводом. Будь-який бізнес. Будь-яка складність.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Shield, text: 'Повна адаптація під ваші бізнес-процеси' },
                { icon: Zap, text: 'Всі точки контролю в одній системі' },
                { icon: Settings, text: 'Визначте, звідки витікають гроші' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-600/20"
              >
                Обговорити проєкт
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to={createPageUrl('CustomSolution')}>
                <Button variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 hover:text-white px-8 py-6 text-lg rounded-xl transition-all">
                  Детальніше
                </Button>
              </Link>
            </div>

            <p className="text-sm text-slate-400 mt-4">
              Безкоштовна консультація • Оцінка проєкту протягом 24 годин
            </p>
          </motion.div>

          {/* Right - Modern System UI Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Preview */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl border border-slate-700 p-6 overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
              
              {/* Top Bar */}
              <div className="relative flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Ваша система</div>
                    <div className="text-sm font-bold text-white">Financial Control Pro</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-xs text-slate-300 transition-colors">
                    Звіти
                  </button>
                  <button className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg text-xs text-white font-medium shadow-lg shadow-emerald-500/20">
                    Експорт
                  </button>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="relative grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 rounded-xl p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400">Виручка</span>
                  </div>
                  <div className="text-2xl font-bold text-white">₴2.4M</div>
                  <div className="text-xs text-emerald-400 font-medium mt-1">+18.5% до плану</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-slate-400">Прибуток</span>
                  </div>
                  <div className="text-2xl font-bold text-white">₴847K</div>
                  <div className="text-xs text-blue-400 font-medium mt-1">Margin 35.3%</div>
                </motion.div>
              </div>

              {/* Chart Preview - Line Chart */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-slate-300">Фінансова динаміка</span>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <span>Січ — Груд 2025</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-400">Прибуток</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    <span className="text-xs text-slate-400">Виручка</span>
                  </div>
                </div>

                {/* Chart Area with Grid */}
                <div className="relative h-32">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-t border-slate-700/30" />
                    ))}
                  </div>

                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[9px] text-slate-500 -ml-8">
                    <span>3M</span>
                    <span>2M</span>
                    <span>1M</span>
                    <span>0</span>
                  </div>

                  {/* Lines Container */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 128" preserveAspectRatio="none">
                    {/* Revenue Line (Blue) */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 1.5, ease: "easeOut" }}
                      d="M 0 90 L 30 75 L 60 80 L 90 60 L 120 65 L 150 50 L 180 55 L 210 40 L 240 45 L 270 35 L 300 30"
                      fill="none"
                      stroke="url(#blueGradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Profit Line (Emerald) */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                      d="M 0 105 L 30 95 L 60 100 L 90 85 L 120 90 L 150 75 L 180 80 L 210 65 L 240 70 L 270 58 L 300 52"
                      fill="none"
                      stroke="url(#emeraldGradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                      </linearGradient>
                    </defs>

                    {/* Data Points */}
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300].map((x, i) => {
                      const revenueY = [90, 75, 80, 60, 65, 50, 55, 40, 45, 35, 30][i];
                      const profitY = [105, 95, 100, 85, 90, 75, 80, 65, 70, 58, 52][i];
                      return (
                        <g key={i}>
                          <motion.circle
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + i * 0.08, duration: 0.3 }}
                            cx={x}
                            cy={revenueY}
                            r="3"
                            fill="#60a5fa"
                            className="drop-shadow-[0_0_4px_rgba(96,165,250,0.6)]"
                          />
                          <motion.circle
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                            cx={x}
                            cy={profitY}
                            r="3"
                            fill="#10b981"
                            className="drop-shadow-[0_0_4px_rgba(16,185,129,0.6)]"
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between mt-3 text-[10px] text-slate-500 font-medium">
                  <span>Січ</span>
                  <span>Лют</span>
                  <span>Бер</span>
                  <span>Кві</span>
                  <span>Тра</span>
                  <span>Чер</span>
                  <span>Лип</span>
                  <span>Сер</span>
                  <span>Вер</span>
                  <span>Жов</span>
                  <span>Лис</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Settings className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Автоматизація</div>
                  <div className="text-sm font-bold text-slate-900">100%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Захищено</div>
                  <div className="text-sm font-bold text-slate-900">Enterprise</div>
                </div>
              </div>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 mb-4">
            Довіряють бізнеси з оборотом <span className="font-bold text-white">від 5 млн грн/рік</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Будь-яка складність</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Повна інтеграція</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Супровід та навчання</span>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}