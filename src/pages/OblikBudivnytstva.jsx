import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowRight, 
  Check, 
  HardHat,
  FileText,
  DollarSign,
  Star,
  Calculator,
  Hammer
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function OblikBudivnytstva() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = 'Облік будівництва 2026 🏗️ Кошториси, витрати на об\'єкти, прибуток | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', '⭐ Облік будівництва в Google Sheets. Готові таблиці: кошториси в PDF, витрати на об\'єкти, контроль бригад, матеріали. Рентабельність кожного проєкту. 200+ будівельних компаній. Від 410₴');
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік будівництва, кошторис будівельних робіт, калькулятор кошторису, витрати на будівництво, облік будівельних матеріалів, таблиця для будівельної компанії, облік ремонту');
    document.head.appendChild(metaKeywords);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Облік будівництва - Кошториси та фінанси будівельних проєктів",
      "description": "Фінансовий облік для будівництва: кошториси, витрати на об\'єкти, матеріали. Від 410₴",
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

  const solutions = [
    {
      title: 'Калькулятор кошторисів',
      price: '410₴',
      description: 'Швидке створення кошторисів з експортом в PDF',
      features: [
        'Автоматичний розрахунок вартості робіт',
        'База матеріалів та послуг',
        'Експорт кошторису в PDF',
        'Шаблони для різних робіт'
      ],
      link: createPageUrl('ProductEstimate')
    },
    {
      title: 'Таблиця фінансів PRO',
      price: '1730₴',
      description: 'Повний облік фінансів будівельної компанії',
      features: [
        'Облік витрат по об\'єктах',
        'Контроль оплати від замовників',
        'Витрати на бригади та матеріали',
        'Прибуток кожного проєкту'
      ],
      link: createPageUrl('ProductPro')
    }
  ];

  const challenges = [
    'Не розумію реальний прибуток з об\'єкта після всіх витрат',
    'Бригади працюють, а гроші закінчуються до завершення проєкту',
    'Кошториси роблю вручну - довго та з помилками',
    'Не контролюю витрати на матеріали - постійні перевитрати'
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Створіть кошторис',
      description: 'Калькулятор автоматично рахує вартість робіт та матеріалів'
    },
    {
      step: '02',
      title: 'Відправте клієнту',
      description: 'Експортуйте кошторис в PDF та надішліть замовнику'
    },
    {
      step: '03',
      title: 'Ведіть облік витрат',
      description: 'Записуйте витрати на матеріали, бригади, інструмент'
    },
    {
      step: '04',
      title: 'Бачте прибуток',
      description: 'Реальний прибуток об\'єкта: договір мінус витрати'
    }
  ];

  const forWhom = [
    { name: 'Будівельні компанії', icon: HardHat },
    { name: 'Бригади ремонту', icon: Hammer },
    { name: 'Приватні майстри', icon: HardHat },
    { name: 'Дизайн-студії', icon: FileText },
    { name: 'Ремонт під ключ', icon: Hammer },
    { name: 'Будівництво будинків', icon: HardHat }
  ];

  const faq = [
    {
      q: 'Як створити кошторис будівельних робіт?',
      a: 'Кошторис включає: 1) Перелік робіт (демонтаж, штукатурка, фарбування). 2) Обсяги робіт в м², м³, шт. 3) Ціна за одиницю. 4) Витрати на матеріали. Наш калькулятор автоматично рахує загальну вартість та експортує в PDF.'
    },
    {
      q: 'Як вести облік витрат на будівництві?',
      a: 'Витрати на будівництві включають: 1) Матеріали (цемент, цегла, арматура). 2) Бригади (зарплата робітників). 3) Оренда техніки. 4) Інструмент. Записуйте всі витрати з прив\'язкою до об\'єкту, щоб знати реальний прибуток.'
    },
    {
      q: 'Як рахувати прибуток будівельного об\'єкта?',
      a: 'Прибуток об\'єкта = Договір з замовником - Витрати на матеріали - Оплата бригад - Інші витрати (доставка, інструмент). Таблиця автоматично рахує прибуток кожного об\'єкту.'
    },
    {
      q: 'Як контролювати витрати на матеріали?',
      a: 'В кошторисі закладіть норму витрат матеріалів. Записуйте фактичні закупки. Порівнюйте план з фактом. Таблиця покаже перевитрати та допоможе знайти, куди йдуть матеріали.'
    },
    {
      q: 'Скільки коштують рішення для будівництва?',
      a: 'Калькулятор кошторисів - 410₴, Таблиця фінансів PRO - 1730₴. Це одноразова оплата без підписок. Для порівняння: найм кошторисника - від 5000₴/міс.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <HardHat className="w-4 h-4" />
              200+ будівельних компаній
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Облік будівництва<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                кошториси та фінанси
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Готові таблиці для будівельної компанії.<br />
              Створюйте кошториси в PDF та контролюйте витрати на об\'єктах.
            </p>

            <Link to={createPageUrl('ProductConstruction')}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                Подивитись рішення
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 mt-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-600" />
                Від 410₴
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-600" />
                Google Sheets
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-amber-600" />
                Експорт в PDF
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions with Visual */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Рішення для будівництва
            </h2>
          </div>

          {/* Main Product Card with Visual */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
                <Calculator className="w-4 h-4" />
                Найпопулярніше
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Калькулятор кошторисів
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Швидке створення професійних кошторисів з експортом в PDF
              </p>
              <div className="space-y-2 mb-6">
                {solutions[0].features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link to={solutions[0].link}>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                  Детальніше
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
              {/* Google Sheets Visual - Estimate */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-slate-600">Кошторис</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-2 text-xs font-semibold text-slate-700">
                  <div>Робота</div>
                  <div className="text-center">Об'єм</div>
                  <div className="text-right">Сума</div>
                </div>
                
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Штукатурка</div>
                    <div className="text-center">45 м²</div>
                    <div className="text-right font-bold">₴6,750</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Фарбування</div>
                    <div className="text-center">45 м²</div>
                    <div className="text-right font-bold">₴3,150</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded border-t border-slate-300 mt-2 pt-2">
                    <div className="font-semibold">Всього:</div>
                    <div></div>
                    <div className="text-right font-bold text-green-600">₴9,900</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <span className="text-slate-600">Ціна:</span>
                <div className="text-right">
                  <div className="text-3xl font-bold text-slate-900">410 ₴</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-amber-600" />
                  Одноразова оплата
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-amber-600" />
                  Експорт в PDF
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Product */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{solutions[1].title}</h3>
                <p className="text-slate-600">{solutions[1].description}</p>
              </div>
              <div className="text-2xl font-bold text-amber-600">{solutions[1].price}</div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {solutions[1].features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
            <Link to={solutions[1].link}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Детальніше
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Типові проблеми в будівництві
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
                className="flex items-start gap-4 bg-white rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-amber-600 font-bold">{index + 1}</span>
                </div>
                <p className="text-lg text-slate-700">{challenge}</p>
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
              Як працює облік будівництва
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
                <div className="text-4xl font-bold text-amber-600 mb-4">{step.step}</div>
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
              Для кого підходить
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
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-amber-600" />
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
              Часті питання про облік будівництва
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
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Почніть контролювати фінанси будівництва
          </h2>
          <p className="text-xl text-amber-50 mb-8">
            200+ будівельних компаній вже ведуть облік з FinProsto
          </p>
          <Link to={createPageUrl('ProductConstruction')}>
            <Button className="bg-white text-amber-600 hover:bg-slate-50 px-8 py-6 text-lg">
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