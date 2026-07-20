import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  BarChart3, 
  PieChart, 
  Infinity, 
  HeadphonesIcon,
  CreditCard,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

export default function FeaturesSection() {
  const mainFeatures = [
    {
      icon: Calculator,
      title: 'Автоматичні формули',
      description: 'Усі складні формули для розрахунків ми вже написали. Для вас залишили готові строки для заповнення',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      title: 'CashFlow',
      description: 'Контроль грошей: Загальний CashFlow та CashFlow за проектами, щоб не втрачати з виду кошти',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PieChart,
      title: 'P&L (прибутки / витрати)',
      description: 'Допомагає аналізувати фінансові результати бізнесу та визначати прибуток та збитки за обраний період',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: CreditCard,
      title: 'Звіт виплат',
      description: 'Відображення звіту щодо виплат працівникам/контрагентам: контроль та аналіз фінансових транзакцій',
      gradient: 'from-orange-500 to-amber-500'
    },
  ];

  const additionalFeatures = [
    {
      icon: Infinity,
      title: 'Безліміт',
      description: 'Забудьте про щомісячні оплати за сервіси. Придбайте один раз та користуйтеся назавжди'
    },
    {
      icon: HeadphonesIcon,
      title: 'Допомога клієнтам',
      description: 'Наша підтримка у разі необхідності допоможе налаштувати табличку'
    },
    {
      icon: Shield,
      title: 'Безпека даних',
      description: 'Ваші дані захищені та зберігаються у вашому Google акаунті'
    },
    {
      icon: Zap,
      title: 'Швидкий старт',
      description: 'Почніть працювати за 10 хвилин після придбання шаблону'
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            Можливості
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Переваги для Вас
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Як вести фінанси в бізнесі? Встановіть шаблон гугл-таблиці та плануйте витрати, контролюйте доходи легко та швидко
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative flex gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Єдина система</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Таблиці забезпечують цілісність та зручність, об'єднуючи всі потрібні функції та розрахунки в одному місці
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}