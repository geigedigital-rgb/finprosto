import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShoppingCart, 
  Code2, 
  Hotel, 
  Factory,
  User,
  TrendingUp,
  PieChart,
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="for-who" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <PieChart className="w-4 h-4" />
            Цільова аудиторія
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Для кого підходить
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Контролюйте власні кошти. Прогнозуйте збільшення капіталу. 
            Ведіть бухгалтерський облік в гугл-таблиці
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Suitable For */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
              <h3 className="text-2xl font-semibold text-slate-900">Кому підходить</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {suitableFor.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
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
            <div className="flex items-center gap-2 mb-6">
              <XCircle className="w-6 h-6 text-slate-400" />
              <h3 className="text-2xl font-semibold text-slate-900">Не підходить</h3>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <ul className="space-y-4">
                {notSuitable.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 lg:p-12"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="relative flex flex-wrap justify-around items-center gap-8 text-white text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold">96%</div>
              <div className="text-emerald-100 mt-2">бізнесів зростають</div>
            </div>
            <div className="hidden lg:block w-px h-20 bg-white/20" />
            <div>
              <div className="text-5xl lg:text-6xl font-bold">425</div>
              <div className="text-emerald-100 mt-2">індивідуальних таблиць</div>
            </div>
            <div className="hidden lg:block w-px h-20 bg-white/20" />
            <div>
              <div className="text-5xl lg:text-6xl font-bold">6 років</div>
              <div className="text-emerald-100 mt-2">підтримуємо бізнес</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}