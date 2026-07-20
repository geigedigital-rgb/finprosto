import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowRight, 
  Check, 
  Factory,
  Package,
  DollarSign,
  Star,
  TrendingUp,
  Boxes
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function OblikVyrobnytstvaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = 'Облік виробництва 2026 🏭 Собівартість, витрати, рентабельність продукції | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', '⭐ Облік виробництва в Google Sheets. Готова таблиця: собівартість продукції, витрати на сировину, робота, накладні. Рентабельність кожного виробу. 150+ виробництв. Від 1730₴');
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік виробництва, собівартість продукції, витрати на виробництво, облік сировини, калькуляція собівартості, таблиця для виробництва, виробничий облік');
    document.head.appendChild(metaKeywords);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Облік виробництва - Собівартість та рентабельність продукції",
      "description": "Фінансовий облік для виробництва: собівартість, витрати на сировину, рентабельність. Від 1730₴",
      "url": window.location.href
    });
    document.head.appendChild(script);
    
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

  const challenges = [
    'Не знаю точну собівартість кожного виробу після всіх витрат',
    'Ціни на сировину змінюються, а рентабельність падає',
    'Не розумію, скільки коштує робочий час на одиницю продукції',
    'Накладні витрати розподіляються "на око" без розрахунків'
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'Калькуляція собівартості',
      description: 'Точний розрахунок собівартості кожного виробу: сировина + робота + накладні'
    },
    {
      icon: Package,
      title: 'Облік сировини',
      description: 'Контроль витрат матеріалів на кожну одиницю продукції'
    },
    {
      icon: TrendingUp,
      title: 'Аналіз рентабельності',
      description: 'Бачте прибутковість кожного виробу та напрямку виробництва'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Створіть перелік виробів',
      description: 'Додайте товари які ви виробляєте: назва, ціна продажу'
    },
    {
      step: '02',
      title: 'Вкажіть витрати',
      description: 'Сировина, матеріали, робочий час, електроенергія на кожен виріб'
    },
    {
      step: '03',
      title: 'Розподіліть накладні',
      description: 'Оренда, зарплата адміністрації, амортизація - автоматично по виробах'
    },
    {
      step: '04',
      title: 'Отримайте собівартість',
      description: 'Система рахує точну собівартість та рентабельність кожного виробу'
    }
  ];

  const forWhom = [
    { name: 'Харчове виробництво', icon: Package },
    { name: 'Текстильна промисловість', icon: Boxes },
    { name: 'Меблеве виробництво', icon: Factory },
    { name: 'Будівельні матеріали', icon: Boxes },
    { name: 'Металообробка', icon: Factory },
    { name: 'Хімічна промисловість', icon: Package }
  ];

  const faq = [
    {
      q: 'Як рахувати собівартість продукції?',
      a: 'Собівартість = Прямі витрати (сировина + робота) + Непрямі витрати (оренда, адміністрація, амортизація). Наша таблиця автоматично розподіляє непрямі витрати пропорційно об\'єму виробництва кожного товару.'
    },
    {
      q: 'Що включає облік виробництва?',
      a: 'Облік виробництва включає: 1) Витрати на сировину та матеріали. 2) Зарплату виробничих робітників. 3) Накладні витрати (оренда цеху, електроенергія, зарплата адміністрації). 4) Амортизація обладнання. Все це складає собівартість готової продукції.'
    },
    {
      q: 'Як розподіляти накладні витрати на продукцію?',
      a: 'Накладні витрати (оренда, адміністрація) розподіляються пропорційно об\'єму виробництва або прямим витратам. Наприклад, якщо товар А - 60% від виробництва, то він отримує 60% накладних витрат.'
    },
    {
      q: 'Як контролювати витрати сировини?',
      a: 'Встановіть норму витрат сировини на одиницю продукції (рецептура). Порівнюйте фактичні витрати з нормою. Таблиця покаже перевитрати та допоможе знайти втрати.'
    },
    {
      q: 'Скільки коштує облік для виробництва?',
      a: 'Наша таблиця коштує 1730₴ одноразово. Для порівняння: бухгалтер-калькулятор коштує від 15000₴/міс, а спеціалізоване ПЗ - від $200/міс.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              150+ виробництв
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Облік виробництва<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500">
                точна собівартість продукції
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Готова таблиця для обліку витрат виробництва.<br />
              Розраховуйте собівартість кожного виробу та контролюйте рентабельність.
            </p>

            <Link to={createPageUrl('ProductManufacturing')}>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                Подивитись рішення
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 mt-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-orange-600" />
                1730₴ одноразово
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-orange-600" />
                Google Sheets
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-orange-600" />
                Калькуляція собівартості
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Типові питання власників виробництв
            </h2>
          </div>

          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-slate-50 rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-600 font-bold">{index + 1}</span>
                </div>
                <p className="text-lg text-slate-700">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution with Visual */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Таблиця фінансів PRO для виробництва
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Розраховуйте точну собівартість кожного виробу та контролюйте прибутковість продукції
              </p>
              <Link to={createPageUrl('ProductManufacturing')}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                  Детальніше про таблицю
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg"
            >
              {/* Google Sheets Visual */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-slate-600">Собівартість</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-2 text-xs font-semibold text-slate-700">
                  <div>Виріб</div>
                  <div className="text-center">Ціна</div>
                  <div className="text-right">Прибуток</div>
                </div>
                
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Виріб А</div>
                    <div className="text-center">₴450</div>
                    <div className="text-right font-bold text-green-600">₴180</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Виріб Б</div>
                    <div className="text-center">₴1,200</div>
                    <div className="text-right font-bold text-green-600">₴520</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Виріб В</div>
                    <div className="text-center">₴850</div>
                    <div className="text-right font-bold text-green-600">₴310</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <span className="text-slate-600">Ціна:</span>
                <div className="text-right">
                  <div className="text-sm text-slate-400 line-through">2 190 ₴</div>
                  <div className="text-3xl font-bold text-slate-900">1 730 ₴</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-orange-600" />
                  Одноразова оплата
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-orange-600" />
                  Миттєвий доступ
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як працює облік виробництва
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-4xl font-bold text-orange-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Для яких виробництв підходить
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {forWhom.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-slate-900 font-medium">{item.name}</span>
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
              Часті питання про облік виробництва
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
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Почніть контролювати собівартість продукції
          </h2>
          <p className="text-xl text-orange-50 mb-8">
            150+ виробництв вже рахують собівартість з FinProsto
          </p>
          <Link to={createPageUrl('ProductManufacturing')}>
            <Button className="bg-white text-orange-600 hover:bg-slate-50 px-8 py-6 text-lg">
              Обрати рішення для виробництва
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}