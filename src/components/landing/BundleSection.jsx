import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  ArrowRight, 
  Check, 
  Star,
  Sparkles,
  Gift,
  Zap,
  Clock
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function formatPromoDate(date = new Date()) {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = String(date.getFullYear()).slice(-2);
  return `${d}.${m}.${y}`;
}

export default function BundleSection({ onBuyBundle }) {
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
    'Таблиця управлінського обліку PRO',
    'Таблиці обліку фінансів Lite',
    'Таблиця для обліку складу',
    'Таблиця калькулятор кошторису'
  ];

  const features = [
    'Історія руху коштів',
    'Ведення Витрат та Доходів',
    'Контроль оплат за товарами',
    'Контроль контрагентів',
    'Перекази між рахунками',
    'Відвантаження та залишки на складі',
    'P&L, CashFlow звіти'
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 px-4 py-1">
                <Sparkles className="w-3 h-3 mr-1" />
                Спеціальна пропозиція
              </Badge>
              <Badge className="bg-red-500 text-white border-0 px-3 py-1 text-lg">
                -70%
              </Badge>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Фінансова система для контролю бізнесу
              </span>
            </h2>

            <p className="text-xl text-emerald-100/80 mb-8 leading-relaxed">
              Справжня знахідка для підприємця. Набір всіх необхідних шаблонів для повного контролю. 
              Економія часу та грошей з повноцінною обліковою системою для вашого бізнесу.
            </p>

            {/* Bundle Items */}
            <div className="space-y-3 mb-8">
              {bundleItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-emerald-200">Оцінили понад 800+ користувачів</span>
            </div>

          </motion.div>

          {/* Right - Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20 z-0" />

              <div className="relative bg-white rounded-3xl p-8 lg:p-10 z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Package className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Повний набір</div>
                      <div className="font-bold text-slate-900">x4 таблиці</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-amber-500">
                    <Gift className="w-5 h-5" />
                    <span className="text-sm font-medium">Бонус</span>
                  </div>
                </div>

                {/* Bundle Image */}
                <div className="relative h-72 mb-12 flex items-center justify-center">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/339052d27_Group427319435.png"
                    alt="Набір всіх таблиць для бізнесу"
                    className="w-full max-w-md h-auto object-contain drop-shadow-lg"
                  />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price - Smaller and Bottom */}
                <div className="flex items-center justify-between mb-4 py-4 border-y border-slate-100">
                  <div>
                    <div className="text-slate-400 line-through text-sm mb-1">3 669 ₴</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-bold text-slate-900">1 240</span>
                      <span className="text-lg font-bold text-slate-900">₴</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Пропозиція діє до {formatPromoDate()}</div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-100 text-emerald-700 text-sm whitespace-nowrap">
                    <Zap className="w-4 h-4 flex-shrink-0" />
                    <span className="font-semibold">Вигода: 2 429 грн</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  size="lg"
                  onClick={onBuyBundle}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-xl transition-colors"
                >
                  Придбати набір
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Countdown Timer */}
                <div className="mt-6 mb-4">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-500 font-medium">Акція закінчується через:</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { value: timeLeft.days, label: 'днів' },
                      { value: timeLeft.hours, label: 'годин' },
                      { value: timeLeft.minutes, label: 'хвилин' },
                      { value: timeLeft.seconds, label: 'секунд' }
                    ].map((item, i) => (
                      <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-2 text-center border border-slate-200">
                        <div className="text-2xl font-bold text-slate-900">{String(item.value).padStart(2, '0')}</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wide">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-center text-sm text-slate-400">
                  Безлімітний доступ • Без підписок
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}