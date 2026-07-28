import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  ArrowRight, 
  Check, 
  Star,
  Sparkles,
  Zap,
  Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BundlePromoSection({ onBuyBundle }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      let diff = endOfDay - now;

      if (diff <= 0) {
        endOfDay.setDate(endOfDay.getDate() + 1);
        diff = endOfDay - now;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const bundleItems = [
    { name: 'Таблиця обліку фінансів PRO', price: '1 730 ₴' },
    { name: 'Таблиця обліку Складу', price: '1 100 ₴' },
    { name: 'Калькулятор кошторисів', price: '410 ₴' },
    { name: 'Таблиця для бізнесу Lite', price: '429 ₴' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-4 py-1.5">
              <Sparkles className="w-3 h-3 mr-1" />
              Спеціальна пропозіція
            </Badge>
            <Badge className="bg-red-500 text-white border-0 px-3 py-1.5 text-lg font-bold">
              -70%
            </Badge>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Набір всіх таблиць для бізнесу
          </h2>
          <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Економте більше! Отримайте всі 4 таблиці разом зі знижкою 70%
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image & Items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Bundle Image */}
            <div className="relative mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/339052d27_Group427319435.png"
                alt="Набір таблиць"
                className="w-full h-auto object-contain drop-shadow-2xl max-w-full"
              />
            </div>

            {/* Bundle Items */}
            <div className="space-y-3">
              {bundleItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 sm:p-3"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-white font-medium text-xs sm:text-sm">{item.name}</span>
                  </div>
                  <span className="text-emerald-200 text-xs sm:text-sm font-semibold flex-shrink-0 whitespace-nowrap">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20 z-0" />

              <div className="relative bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl p-6 sm:p-8 z-10 shadow-2xl max-w-full">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    4 таблиці за ціною однієї
                  </h3>
                  <Badge className="bg-red-500 text-white border-0 shadow-lg shadow-red-500/30 text-sm px-3 py-1.5">
                    -70% ЗНИЖКА
                  </Badge>
                </div>

                {/* Price */}
                <div className="mb-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-slate-400 line-through text-lg">3 669 ₴</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-2xl font-bold text-slate-900">1 240 ₴</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-2.5 rounded-full">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-600 text-base font-bold">Економія 2 429 грн</span>
                  </div>
                </div>



                {/* Countdown Timer */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-1.5 mb-4">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-xs text-slate-500 font-medium">Акція закінчується через:</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: timeLeft.days, label: 'днів' },
                      { value: timeLeft.hours, label: 'год' },
                      { value: timeLeft.minutes, label: 'хв' },
                      { value: timeLeft.seconds, label: 'сек' }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="bg-white rounded-xl p-3 text-center shadow-sm border border-slate-100"
                        animate={i === 3 ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <div className="text-xl font-bold text-slate-900">{String(item.value).padStart(2, '0')}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  size="lg"
                  onClick={onBuyBundle}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-5 sm:py-6 text-sm sm:text-base font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:scale-[1.02]"
                >
                  Отримати зі знижкою 70%
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>

                {/* Trust Signals */}
                <div className="mt-6">
                  <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Безпечна оплата</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Без підписок</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}