import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowRight, 
  Check, 
  Scissors,
  DollarSign,
  Users,
  Star,
  Calendar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function OblikSalonuKrasyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = 'Облік салону краси 2026 💇 Таблиця фінансів для перукарні, барбершопу | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', '⭐ Облік салону краси та барбершопу в Google Sheets. Готова таблиця для фінансового обліку: доходи майстрів, витрати на матеріали, оренда. Рентабельність кожного майстра. 300+ салонів. Від 1730₴');
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік салону краси, облік перукарні, облік барбершопу, фінанси салону краси, облік майстрів, облік витрат салон, таблиця для салону, облік манікюру, облік косметології');
    document.head.appendChild(metaKeywords);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Облік салону краси - Таблиця фінансів для beauty-бізнесу",
      "description": "Фінансовий облік для салонів краси, перукарень, барбершопів. Доходи майстрів, витрати, рентабельність. Від 1730₴",
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
    'Не знаю, скільки заробляє кожен майстер після витрат на матеріали',
    'Доходи є, а грошей чомусь не вистачає на оренду',
    'Не розумію, чи вигідно брати майстра в оренду чи на %',
    'Витрати на косметику зростають, а прибуток не росте'
  ];

  const features = [
    {
      icon: Users,
      title: 'Облік доходів кожного майстра',
      description: 'Бачте, скільки приносить кожен працівник після відрахування витрат'
    },
    {
      icon: DollarSign,
      title: 'Витрати на матеріали',
      description: 'Контролюйте витрати на фарбу, косметику, інструменти'
    },
    {
      icon: Calendar,
      title: 'Постійні витрати',
      description: 'Оренда, комунальні, зарплати адміністратора - все під контролем'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Записуйте доходи',
      description: 'Кожна послуга: стрижка, фарбування, манікюр - з прив\'язкою до майстра'
    },
    {
      step: '02',
      title: 'Вносьте витрати',
      description: 'Закупка косметики, оренда, комунальні, зарплати'
    },
    {
      step: '03',
      title: 'Бачте рентабельність',
      description: 'Система автоматично рахує прибуток салону та кожного майстра'
    },
    {
      step: '04',
      title: 'Приймайте рішення',
      description: 'Розумійте, які послуги найприбутковіші, скільки платити майстрам'
    }
  ];

  const forWhom = [
    'Салони краси',
    'Перукарні',
    'Барбершопи',
    'Студії манікюру',
    'Косметологічні кабінети',
    'Beauty-студії'
  ];

  const faq = [
    {
      q: 'Як вести облік салону краси?',
      a: 'Облік салону краси включає: 1) Доходи від послуг (стрижка, фарбування, манікюр) з прив\'язкою до майстра. 2) Витрати на матеріали (фарба, косметика). 3) Постійні витрати (оренда, зарплати). Наша таблиця автоматично рахує прибуток салону та кожного майстра.'
    },
    {
      q: 'Як рахувати дохід майстра в салоні?',
      a: 'Дохід майстра = Виторг від послуг - Витрати на матеріали - Відрахування салону (оренда робочого місця або %). Таблиця автоматично рахує чистий дохід кожного майстра після всіх відрахувань.'
    },
    {
      q: 'Що краще: майстер в оренду чи на відсоток?',
      a: 'Оренда: стабільний дохід для салону, але майстер може заробляти менше. Відсоток (50/50 або 60/40): мотивує майстра, але менш передбачуваний дохід салону. Наша таблиця допоможе порахувати, що вигідніше конкретно для вас.'
    },
    {
      q: 'Як контролювати витрати на косметику?',
      a: 'Записуйте кожну закупку косметики та прив\'язуйте до майстра або послуги. Таблиця покаже, скільки йде матеріалів на одного клієнта та яка реальна рентабельність послуги.'
    },
    {
      q: 'Скільки коштує облік для салону краси?',
      a: 'Наша таблиця коштує 1730₴ одноразово. Для порівняння: бухгалтер коштує від 3000₴/міс, а спеціалізоване ПЗ - від 800₴/міс.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Scissors className="w-4 h-4" />
              300+ салонів краси
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Облік салону краси<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-500">
                просто та ефективно
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Готова таблиця для обліку фінансів салону, перукарні, барбершопу.<br />
              Контроль доходів майстрів, витрат на матеріали та загальної рентабельності.
            </p>

            <Link to={createPageUrl('ProductBeauty')}>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg">
                Подивитись рішення
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 mt-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-pink-600" />
                1730₴ одноразово
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-pink-600" />
                Google Sheets
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-pink-600" />
                Облік майстрів
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
              Типові питання власників салонів
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
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-pink-600 font-bold">{index + 1}</span>
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
                Таблиця фінансів PRO для салону краси
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Контролюйте доходи кожного майстра, витрати на косметику та загальну рентабельність салону
              </p>
              <Link to={createPageUrl('ProductBeauty')}>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg">
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
                  <span className="text-xs font-medium text-slate-600">Доходи майстрів</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-2 text-xs font-semibold text-slate-700">
                  <div>Майстер</div>
                  <div className="text-center">Послуги</div>
                  <div className="text-right">Дохід</div>
                </div>
                
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div>Олена</div>
                    <div className="text-center">8</div>
                    <div className="text-right font-bold text-green-600">₴4,500</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div>Марія</div>
                    <div className="text-center">12</div>
                    <div className="text-right font-bold text-green-600">₴6,200</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-2 bg-white rounded">
                    <div>Анна</div>
                    <div className="text-center">6</div>
                    <div className="text-right font-bold text-green-600">₴3,100</div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <span className="text-slate-600">Ціна:</span>
                <div className="text-right">
                  <div className="text-sm text-slate-400 line-through">2 190 ₴</div>
                  <div className="text-3xl font-bold text-slate-900">1 730 ₴</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-pink-600" />
                  Одноразова оплата
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-pink-600" />
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
              Як працює облік салону краси
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
                <div className="text-4xl font-bold text-pink-600 mb-4">{step.step}</div>
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
                className="bg-white rounded-xl p-4 border border-slate-200 text-center"
              >
                <span className="text-slate-900 font-medium">{item}</span>
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
              Часті питання про облік салону краси
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
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Почніть контролювати фінанси салону
          </h2>
          <p className="text-xl text-pink-50 mb-8">
            300+ салонів краси вже ведуть облік з FinProsto
          </p>
          <Link to={createPageUrl('ProductBeauty')}>
            <Button className="bg-white text-pink-600 hover:bg-slate-50 px-8 py-6 text-lg">
              Обрати рішення для салону
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}