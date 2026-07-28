import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingCart, 
  Code2, 
  Hotel, 
  Factory,
  User,
  CheckCircle,
  XCircle
} from 'lucide-react';

export default function ForWhoSection() {
  const suitableFor = [
    {
      icon: Building2,
      title: 'Малому бізнесу',
      description: 'Ідеальне рішення для підприємців'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Для онлайн-магазинів та маркетплейсів'
    },
    {
      icon: Code2,
      title: 'Діджитал агенції, ІТ',
      description: 'Контроль проєктів та бюджетів'
    },
    {
      icon: Hotel,
      title: 'Готельний бізнес',
      description: 'HORECA та гостинність'
    },
    {
      icon: Factory,
      title: 'Крафтове виробництво',
      description: 'Облік матеріалів та продукції'
    },
    {
      icon: User,
      title: 'Фізичним особам',
      description: 'Особисті фінанси та бюджет'
    },
  ];

  const notSuitable = [
    'Професійним фінансистам',
    'Користувачам 1С',
    'Великим підприємствам, для формування податкових звітів'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="for-who" className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2 sm:mb-4 tracking-tight">
            Для кого підходить
          </h2>
          <p className="text-[15px] sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Контролюйте власні кошти. Прогнозуйте збільшення капіталу.
            Ведіть бухгалтерський облік в гугл-таблиці
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-5 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Suitable For */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-6">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
              <h3 className="text-lg sm:text-2xl font-semibold text-slate-900">Кому підходить</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {suitableFor.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-6 border border-slate-100 shadow-sm"
                >
                  <div className="relative">
                    <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-2.5 sm:mb-4">
                      <item.icon className="w-[18px] h-[18px] sm:w-7 sm:h-7 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-[13px] sm:text-base leading-snug mb-0.5 sm:mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[12px] sm:text-sm text-slate-500 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Not Suitable For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-6">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
              <h3 className="text-lg sm:text-2xl font-semibold text-slate-900">Не підходить</h3>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm">
              <ul className="space-y-2.5 sm:space-y-4">
                {notSuitable.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[13px] sm:text-base text-slate-600 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-5 sm:p-8 lg:p-12"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="relative grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-around sm:items-center sm:gap-8 text-white text-center">
            <div>
              <div className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight">96%</div>
              <div className="text-emerald-100/90 mt-1 sm:mt-2 text-[11px] sm:text-base leading-tight">
                бізнесів зростають
              </div>
            </div>
            <div className="hidden lg:block w-px h-20 bg-white/20" />
            <div>
              <div className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight">425</div>
              <div className="text-emerald-100/90 mt-1 sm:mt-2 text-[11px] sm:text-base leading-tight">
                індивідуальних таблиць
              </div>
            </div>
            <div className="hidden lg:block w-px h-20 bg-white/20" />
            <div>
              <div className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight">6 років</div>
              <div className="text-emerald-100/90 mt-1 sm:mt-2 text-[11px] sm:text-base leading-tight">
                підтримуємо бізнес
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
