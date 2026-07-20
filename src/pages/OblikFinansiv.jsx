import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowRight, 
  Check, 
  TrendingUp,
  Shield,
  Zap,
  Star,
  FileSpreadsheet,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function OblikFinansivPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags - МАКСИМАЛЬНО ОПТИМІЗОВАНІ
    document.title = 'Облік фінансів бізнесу 2026 📊 Таблиця обліку витрат та доходів | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', '⭐ Облік фінансів малого бізнесу та ФОП в Google Sheets. Готова таблиця для фінансового обліку підприємства. Проста система обліку витрат та доходів. CashFlow, P&L звіти, рентабельність. 1900+ бізнесів ведуть облік з FinProsto. Від 410₴');
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік фінансів, облік фінансів бізнесу, облік фінансів малого бізнесу, облік фінансів ФОП, фінансовий облік, облік витрат, облік доходів, таблиця обліку фінансів, облік фінансів підприємства, облік фінансів в google sheets, як вести облік фінансів');
    document.head.appendChild(metaKeywords);
    
    // JSON-LD Schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Облік фінансів бізнесу - Готові рішення для підприємств",
      "description": "Професійні рішення для обліку фінансів малого бізнесу, ФОП та підприємств. Таблиці для фінансового обліку, CashFlow, P&L звіти. Від 410₴",
      "url": window.location.href,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Таблиця обліку фінансів PRO",
              "price": "1730 UAH"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Таблиця обліку складу",
              "price": "1100 UAH"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);
    
    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
    
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const solutions = [
    {
      title: 'Таблиця обліку фінансів PRO',
      description: 'Професійна система для повного контролю над фінансами бізнесу',
      price: '1 730 ₴',
      features: [
        'P&L та CashFlow автозвіти',
        'Контроль оплати замовлень',
        'План/Факт аналіз',
        'Річний звіт з порівнянням',
        'Управління проєктами',
        'База контрагентів'
      ],
      link: createPageUrl('ProductPro'),
      badge: 'Найпопулярніше',
      color: 'emerald'
    },
    {
      title: 'Облік складу + аналіз продажів',
      description: 'Контроль залишків, надходження, відвантаження та ABC аналіз',
      price: '1 100 ₴',
      features: [
        'Надходження та відвантаження',
        'Автоматичний розрахунок залишків',
        'ABC аналіз продажів',
        'Прогнозування попиту',
        'Контроль постачальників'
      ],
      link: createPageUrl('ProductWarehouse'),
      color: 'blue'
    },
    {
      title: 'Калькулятор кошторисів',
      description: 'Швидке створення кошторисів з експортом в PDF',
      price: '410 ₴',
      features: [
        'Автоматичний розрахунок',
        'Експорт в PDF',
        'База матеріалів',
        'Шаблони кошторисів'
      ],
      link: createPageUrl('ProductEstimate'),
      color: 'purple'
    }
  ];

  const industries = [
    { name: 'Інтернет-магазини та E-commerce', link: createPageUrl('ProductEcommerce'), icon: '🛒' },
    { name: 'Салони краси та барбершопи', link: createPageUrl('ProductBeauty'), icon: '💇' },
    { name: 'Будівництво та ремонт', link: createPageUrl('ProductConstruction'), icon: '🏗️' },
    { name: 'Виробництво', link: createPageUrl('ProductManufacturing'), icon: '🏭' },
    { name: 'Агробізнес', link: createPageUrl('ProductAgro'), icon: '🌾' },
    { name: 'IT компанії та стартапи', link: createPageUrl('ProductIT'), icon: '💻' }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Оберіть шаблон',
      description: 'Виберіть таблицю, яка підходить для вашого виду бізнесу'
    },
    {
      step: '02',
      title: 'Налаштуйте під себе',
      description: 'Додайте свої статті витрат, рахунки та контрагентів'
    },
    {
      step: '03',
      title: 'Вносіть операції',
      description: 'Записуйте доходи та витрати щодня або по мірі надходження'
    },
    {
      step: '04',
      title: 'Отримуйте звіти',
      description: 'Автоматичні звіти про прибуток, CashFlow та рентабельність'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Бачте реальні цифри',
      description: 'Де гроші, скільки прибутку, яка рентабельність - все в одному місці'
    },
    {
      icon: Shield,
      title: 'Контролюйте витрати',
      description: 'Знайте, на що йдуть гроші та де можна заощадити'
    },
    {
      icon: Zap,
      title: 'Швидко та просто',
      description: '5-10 хвилин на день для ведення обліку. Без складного ПЗ'
    }
  ];

  const faq = [
    {
      q: 'Що таке облік фінансів бізнесу?',
      a: 'Облік фінансів бізнесу - це систематичне ведення записів всіх доходів, витрат та інших фінансових операцій підприємства. Це дозволяє власнику бачити реальну фінансову картину бізнесу, приймати обґрунтовані рішення та контролювати рентабельність.'
    },
    {
      q: 'Як вести облік фінансів малого бізнесу?',
      a: 'Для малого бізнесу облік фінансів можна вести в Google Sheets з готовими таблицями FinProsto. Це простіше та дешевше за складне ПЗ. Достатньо щодня записувати доходи та витрати, а таблиця автоматично розраховує прибуток, CashFlow та рентабельність.'
    },
    {
      q: 'Чи потрібні знання бухгалтерії для обліку фінансів?',
      a: 'Ні, наші таблиці створені для власників бізнесу, а не бухгалтерів. Все максимально зрозуміло - вносите доходи та витрати, вибираєте статтю із списку, система автоматично рахує. Є інструкції та приклади використання.'
    },
    {
      q: 'Яка різниця між обліком фінансів та бухгалтерією?',
      a: 'Бухгалтерія - це офіційний облік для податкової, з проводками та складними правилами. Облік фінансів - це ваш внутрішній контроль: скільки заробили, скільки витратили, який прибуток. Це для вас, а не для держави.'
    },
    {
      q: 'Скільки коштує облік фінансів для бізнесу?',
      a: 'Наші готові таблиці коштують від 410₴ до 1730₴ - це одноразова оплата без підписок. Для порівняння, бухгалтер коштує від 5000₴/міс, а спеціалізоване ПЗ - від 500₴/міс + навчання.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-emerald-700" />
              1900+ бізнесів ведуть облік з FinProsto
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Облік фінансів бізнесу<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                просто та зрозуміло
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Готові таблиці Google Sheets для обліку витрат та доходів.<br />
              Бачте реальні цифри бізнесу без складного ПЗ та бухгалтерів.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to={createPageUrl('Products')}>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                  Обрати шаблон
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Home') + '#features'}>
                <Button variant="outline" className="px-8 py-6 text-lg">
                  Як це працює
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                Від 410₴ одноразово
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                Без підписок
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                Миттєвий доступ
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Готові рішення для обліку фінансів
            </h2>
            <p className="text-xl text-slate-600">
              Виберіть таблицю, яка підходить для вашого бізнесу
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all"
              >
                {solution.badge && (
                  <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {solution.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-slate-600 mb-4">{solution.description}</p>
                <div className="text-2xl font-bold text-slate-900 mb-4">{solution.price}</div>
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link to={solution.link}>
                  <Button className={`w-full bg-${solution.color}-600 hover:bg-${solution.color}-700`}>
                    Детальніше
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Облік для різних видів бізнесу
            </h2>
            <p className="text-xl text-slate-600">
              Спеціалізовані рішення під вашу галузь
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <Link key={index} to={industry.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all border border-slate-200 hover:border-slate-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{industry.icon}</span>
                    <span className="font-medium text-slate-900">{industry.name}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як вести облік фінансів
            </h2>
            <p className="text-xl text-slate-600">
              4 простих кроки до контролю над фінансами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Часті питання про облік фінансів
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-700 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Почніть вести облік фінансів правильно
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Більше 1900 бізнесів вже контролюють свої фінанси з FinProsto
          </p>
          <Link to={createPageUrl('Products')}>
            <Button className="bg-white text-emerald-600 hover:bg-slate-50 px-8 py-6 text-lg">
              Обрати рішення
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}