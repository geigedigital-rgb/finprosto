import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowRight, 
  Check, 
  Code,
  Zap,
  Users,
  Star,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function OblikITPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = 'Облік для ІТ компанії 2026 💻 Фінанси стартапу, аутсорсу, фрілансу | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', '⭐ Облік фінансів для ІТ компанії, стартапу, аутсорсингу в Google Sheets. Готова таблиця: проєкти, клієнти, команда, витрати. Контроль рентабельності кожного проєкту. 200+ ІТ бізнесів. Від 1730₴');
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік ІТ компанії, облік стартапу, облік аутсорсингу, фінанси айті, облік проєктів розробки, облік фрілансу, таблиця для it компанії, облік розробників');
    document.head.appendChild(metaKeywords);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Облік для ІТ компанії - Фінанси для стартапів та аутсорсу",
      "description": "Фінансовий облік для ІТ компаній, стартапів, аутсорсингу. Проєкти, команда, клієнти. Від 1730₴",
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
    'Не розумію рентабельність кожного проєкту після зарплат команди',
    'Гроші є на рахунку, але не вистачає на виплати фрілансерам',
    'Не знаю, який клієнт найприбутковіший після всіх витрат',
    'Підписки на софт та сервіси з\'їдають бюджет непомітно'
  ];

  const features = [
    {
      icon: Users,
      title: 'Облік проєктів',
      description: 'Контроль прибутковості кожного проєкту: гонорар клієнта мінус витрати команди'
    },
    {
      icon: DollarSign,
      title: 'Витрати на команду',
      description: 'Зарплати розробників, фрілансери, аутсорс - все з прив\'язкою до проєктів'
    },
    {
      icon: Zap,
      title: 'Підписки та сервіси',
      description: 'Контроль щомісячних підписок: AWS, GitHub, Figma, Slack та інші'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Створюйте проєкти',
      description: 'Кожен проєкт: клієнт, бюджет, дедлайн, відповідальний'
    },
    {
      step: '02',
      title: 'Вносьте витрати',
      description: 'Зарплати, фрілансери, підписки - з прив\'язкою до проєктів'
    },
    {
      step: '03',
      title: 'Записуйте оплати',
      description: 'Гонорари від клієнтів, мілстоуни, рекурентні платежі'
    },
    {
      step: '04',
      title: 'Аналізуйте прибуток',
      description: 'Рентабельність кожного проєкту та клієнта автоматично'
    }
  ];

  const forWhom = [
    { name: 'Аутсорсингові компанії', icon: Code },
    { name: 'Стартапи', icon: Zap },
    { name: 'Веб-студії', icon: Code },
    { name: 'Фріланс-команди', icon: Users },
    { name: 'Product-компанії', icon: TrendingUp },
    { name: 'Digital-агенції', icon: Star }
  ];

  const faq = [
    {
      q: 'Як вести облік ІТ компанії?',
      a: 'Облік ІТ компанії включає: 1) Доходи від проєктів та клієнтів. 2) Витрати на команду (зарплати розробників, фрілансерів). 3) Підписки на сервіси (AWS, GitHub, Figma). 4) Офісні витрати. Наша таблиця автоматично рахує рентабельність кожного проєкту.'
    },
    {
      q: 'Як рахувати прибуток від проєкту в аутсорсі?',
      a: 'Прибуток проєкту = Гонорар клієнта - Витрати на команду - Інфраструктура - Накладні витрати. Таблиця автоматично розподіляє витрати команди пропорційно часу на проєкті.'
    },
    {
      q: 'Як контролювати витрати на підписки?',
      a: 'Створіть статтю "Підписки" та записуйте кожен сервіс: AWS ($500/міс), GitHub ($50/міс), Figma ($45/міс). Таблиця покаже загальні витрати на софт та їх % від виторгу.'
    },
    {
      q: 'Чи підходить для стартапу?',
      a: 'Так, таблиця ідеальна для стартапів. Контролюйте витрати, runway (скільки місяців протримаєтесь), burn rate, revenue. Все що потрібно для звітів інвесторам.'
    },
    {
      q: 'Скільки коштує облік для ІТ компанії?',
      a: 'Наша таблиця коштує 1730₴ одноразово. Для порівняння: бухгалтер коштує від 8000₴/міс, а спеціалізоване ПЗ типу QuickBooks - від $50/міс.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              200+ ІТ компаній та стартапів
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Облік для ІТ компанії<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                від стартапу до аутсорсу
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Готова таблиця для фінансового обліку ІТ бізнесу.<br />
              Контроль проєктів, команди, підписок та загальної рентабельності.
            </p>

            <Link to={createPageUrl('ProductIT')}>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
                Подивитись рішення
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 mt-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-indigo-600" />
                1730₴ одноразово
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-indigo-600" />
                Google Sheets
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-indigo-600" />
                Облік проєктів
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
              Типові питання власників ІТ бізнесу
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
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-indigo-600 font-bold">{index + 1}</span>
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
                Таблиця фінансів PRO для ІТ
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Контролюйте рентабельність проєктів, витрати на команду та підписки
              </p>
              <Link to={createPageUrl('ProductIT')}>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
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
                  <span className="text-xs font-medium text-slate-600">Проєкти</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-2 text-xs font-semibold text-slate-700">
                  <div>Проєкт</div>
                  <div className="text-center">Гонорар</div>
                  <div className="text-right">Прибуток</div>
                </div>
                
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Landing Page</div>
                    <div className="text-center">$2,000</div>
                    <div className="text-right font-bold text-green-600">$850</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Mobile App</div>
                    <div className="text-center">$8,000</div>
                    <div className="text-right font-bold text-green-600">$3,200</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div className="truncate">CRM System</div>
                    <div className="text-center">$12,000</div>
                    <div className="text-right font-bold text-green-600">$4,800</div>
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
                  <Check className="w-4 h-4 text-indigo-600" />
                  Одноразова оплата
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-indigo-600" />
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
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-pink-600" />
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
              Як працює облік ІТ компанії
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
                <div className="text-4xl font-bold text-indigo-600 mb-4">{step.step}</div>
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
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-indigo-600" />
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
              Часті питання про облік ІТ компанії
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Почніть контролювати фінанси ІТ бізнесу
          </h2>
          <p className="text-xl text-indigo-50 mb-8">
            200+ ІТ компаній вже ведуть облік з FinProsto
          </p>
          <Link to={createPageUrl('ProductIT')}>
            <Button className="bg-white text-indigo-600 hover:bg-slate-50 px-8 py-6 text-lg">
              Обрати рішення для ІТ
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}