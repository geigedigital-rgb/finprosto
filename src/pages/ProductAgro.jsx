import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Wheat, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sprout,
  DollarSign,
  BarChart3,
  Target,
  ChevronDown,
  FileSpreadsheet,
  Calendar,
  Users,
  PieChart,
  Check,
  Star,
  Tractor,
  Package,
  CloudRain
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PaymentModal from '@/components/payment/PaymentModal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ProductAgro() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Облік агробізнесу: Таблиця для фінансового обліку фермерського господарства | FinProsto 2026';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Облік агробізнесу та фермерського господарства ⭐ Готова таблиця для фінансового обліку: врожай, поля, техніка, сезони, собівартість культур. Облік ферми. Google Sheets. 1730₴');
    document.head.appendChild(metaDescription);
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік агробізнесу, облік фермерського господарства, фінансовий облік ферми, облік врожаю, облік сільського господарства, учет агробизнеса, учет фермерского хозяйства');
    document.head.appendChild(metaKeywords);
    
    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Таблиця обліку фінансів PRO для агробізнесу - Google Sheets');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Контроль врожаю, полів, техніки та витрат. Собівартість та рентабельність. 1730₴ • Без підписок');
    document.head.appendChild(ogDescription);
    
    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'product');
    document.head.appendChild(ogType);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', window.location.href);
    document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png');
    document.head.appendChild(ogImage);
    
    const ogPrice = document.querySelector('meta[property="og:price:amount"]') || document.createElement('meta');
    ogPrice.setAttribute('property', 'og:price:amount');
    ogPrice.setAttribute('content', '1730');
    document.head.appendChild(ogPrice);
    
    const ogCurrency = document.querySelector('meta[property="og:price:currency"]') || document.createElement('meta');
    ogCurrency.setAttribute('property', 'og:price:currency');
    ogCurrency.setAttribute('content', 'UAH');
    document.head.appendChild(ogCurrency);
    
    // Twitter Card
    const twitterCard = document.querySelector('meta[name="twitter:card"]') || document.createElement('meta');
    twitterCard.setAttribute('name', 'twitter:card');
    twitterCard.setAttribute('content', 'product');
    document.head.appendChild(twitterCard);
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]') || document.createElement('meta');
    twitterTitle.setAttribute('name', 'twitter:title');
    twitterTitle.setAttribute('content', 'Облік фінансів для агробізнесу | FinProsto');
    document.head.appendChild(twitterTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Контроль врожаю та собівартості. 1730₴ • 4.9/5 ⭐');
    document.head.appendChild(twitterDescription);
    
    // JSON-LD Product Schema
    const productSchema = document.createElement('script');
    productSchema.type = 'application/ld+json';
    productSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Таблиця обліку фінансів PRO для агробізнесу",
      "description": "Професійний облік фінансів для агробізнесу та фермерства. Контроль врожаю, полів, техніки, собівартість.",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png",
      "brand": {
        "@type": "Brand",
        "name": "FinProsto"
      },
      "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "priceCurrency": "UAH",
        "price": "1730",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1900"
      },
      "category": "Агробізнес та Фермерство"
    });
    document.head.appendChild(productSchema);

    // FAQ Schema
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(faqSchema);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
    
    // Robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow');
    
    window.scrollTo(0, 0);
  }, []);

  const product = {
    id: 'agro',
    title: 'Таблиця обліку фінансів PRO',
    price: '1730',
    oldPrice: '2190',
  };

  const problems = [
    {
      icon: AlertCircle,
      title: 'Невідомо, чи окупився сезон',
      description: 'Продали врожай, але не знаєте реальну собівартість та прибуток'
    },
    {
      icon: AlertCircle,
      title: 'Не зрозуміло, які культури вигідні',
      description: 'Висаджуєте різні культури, але чистий прибуток залишається загадкою'
    },
    {
      icon: AlertCircle,
      title: 'Витрати на техніку та паливо непередбачувані',
      description: 'Гроші йдуть на ремонт та дизель, але важко контролювати'
    },
    {
      icon: AlertCircle,
      title: 'Капітал заморожений у полях',
      description: 'Чекаєте врожай, а гроші закінчуються на поточні витрати'
    },
    {
      icon: AlertCircle,
      title: 'Рішення про посіви приймаються без цифр',
      description: 'Що саджати наступного сезону — невідомо, бо немає аналізу минулого'
    }
  ];

  const decisions = [
    {
      icon: TrendingUp,
      title: 'Які культури саджати наступного сезону',
      description: 'Що приносить найбільший прибуток з гектара'
    },
    {
      icon: Sprout,
      title: 'Скільки витратити на добрива та насіння',
      description: 'Де економити, а де інвестувати для кращого врожаю'
    },
    {
      icon: DollarSign,
      title: 'Коли можна продавати врожай',
      description: 'Чекати зростання ціни чи продавати зараз'
    },
    {
      icon: Tractor,
      title: 'Чи купувати нову техніку',
      description: 'Окупиться покупка чи краще орендувати'
    }
  ];

  const tableFeatures = [
    {
      icon: Calendar,
      title: 'Річний звіт',
      description: 'Порівнюйте сезони, аналізуйте динаміку доходів',
      example: 'Бачите, який сезон був найприбутковішим і чому'
    },
    {
      icon: Sprout,
      title: 'Напрями діяльності',
      description: 'Розділіть доходи по культурах та видах діяльності',
      example: 'Пшениця, Соняшник, Кукурудза - окремо рентабельність кожної'
    },
    {
      icon: DollarSign,
      title: 'Статті витрат',
      description: 'Структуруйте витрати: Насіння, Добрива, Паливо, Техніка',
      example: 'Контролюйте витрати на кожен етап вирощування'
    },
    {
      icon: CloudRain,
      title: 'Проєкти (Сезони)',
      description: 'Ведіть окремі сезони або поля',
      example: 'Весна 2026, Озимі, Поле №3 - окремі P&L'
    },
    {
      icon: PieChart,
      title: 'Рахунки',
      description: 'Готівка, банк, взаєморозрахунки',
      example: 'Бачите баланс по всіх рахунках господарства'
    },
    {
      icon: BarChart3,
      title: 'Операції',
      description: 'Кожна транзакція на своєму місці',
      example: 'Продаж врожаю, закупка насіння, оплата послуг з деталями'
    }
  ];

  const benefits = [
    'Таблицю обліку фінансів PRO в Google Sheets',
    'P&L звіти з автоматичним розрахунком',
    'CashFlow та контроль грошових потоків',
    'Річний звіт з порівнянням сезонів',
    'Облік статей витрат та проєктів (сезонів)',
    'Контроль оплати та дебіторської заборгованості',
    'Управління рахунками (банк, готівка)',
    'Інструкції та підтримка в Telegram',
    'Безкоштовні оновлення назавжди'
  ];

  const faqs = [
    {
      question: 'Підійде для невеликого фермерського господарства?',
      answer: 'Так, система адаптується під будь-який масштаб. Навіть якщо у вас 10-50 га, ви будете бачити реальну картину фінансів та собівартість продукції.'
    },
    {
      question: 'Чи потрібно бухгалтерське знання?',
      answer: 'Ні. Система створена для фермерів, а не бухгалтерів. Все зрозуміло, є інструкції та приклади використання для агробізнесу.'
    },
    {
      question: 'Чи можна вести облік по окремих полях?',
      answer: 'Так, використовуйте функцію "Проєкти" для окремого обліку кожного поля або сезону. Ви будете бачити рентабельність кожної ділянки.'
    },
    {
      question: 'Скільки часу займає ведення обліку?',
      answer: '30-60 хвилин на початкове налаштування. Далі 10-15 хвилин на тиждень для внесення основних операцій та перегляду звітів.'
    },
    {
      question: 'Як рахувати собівартість врожаю?',
      answer: 'Собівартість врожаю = Витрати на насіння + Добрива + Паливо + Робота техніки + Оренда землі (розподілена на площу). Створіть проєкт для культури, записуйте витрати, таблиця порахує собівартість з 1 га.'
    },
    {
      question: 'Як вести облік по різних культурах?',
      answer: 'Використовуйте функцію "Напрями" для кожної культури: Пшениця, Соняшник, Кукурудза. Або створіть окремі проєкти для кожного поля. Ви побачите рентабельність кожної культури окремо.'
    },
    {
      question: 'Як планувати витрати на наступний сезон?',
      answer: 'Аналізуйте минулий сезон: скільки пішло насіння, добрив, палива. Таблиця покаже середні витрати на 1 га. Помножте на площу посіву - отримаєте бюджет на сезон.'
    },
    {
      question: 'Чи можна контролювати витрати на паливо та техніку?',
      answer: 'Так, створіть статті "Паливо" та "Ремонт техніки". Записуйте кожну заправку та ремонт. Таблиця покаже витрати на техніку від загальних витрат та виручки.'
    },
    {
      question: 'Як відстежувати оплати від покупців врожаю?',
      answer: 'В листі "Операції" відмічайте статус "Оплачено" або "Не оплачено" для продажу врожаю. Таблиця покаже дебіторську заборгованість - хто і скільки винен.'
    },
    {
      question: 'Чи підходить для тваринництва?',
      answer: 'Так, таблиця підходить для будь-якого типу агробізнесу: рослинництво, тваринництво, садівництво. Принцип той самий: доходи від продажу, витрати на утримання, собівартість продукції.'
    }
  ];

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumbs items={[
          { label: 'Продукти', href: '/#/Products' },
          { label: 'Агробізнес' }
        ]} />
      </div>

      {/* HERO BLOCK */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-8">
                <Wheat className="w-4 h-4" />
                Для агробізнесу
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Фінанси фермерського<br />
                господарства під контролем
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Одна фінансова система для агробізнесу:<br />
                врожай, поля, техніка, собівартість та рентабельність
              </p>

              <Button 
                onClick={scrollToDemo}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-600/20"
              >
                Подивитись, як це працює
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Right - Image with Overlay Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/3d5d5b395_freepik__-ai-clean-cinematic-composition-focused-on-emotion__63866.png"
                  alt="Облік агробізнесу - фермер контролює врожай, витрати на насіння та добрива, рентабельність полів та культур"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              {/* Floating Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-6 border border-slate-100"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500">Поточний сезон</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <Wheat className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Виручка</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-slate-900">₴2,450,000</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                        <Sprout className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Засіяно га</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-slate-900">145</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Прибуток/га</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-green-600">₴16,900</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMS BLOCK */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Типові проблеми фермерів та агровиробників
            </h2>
            <p className="text-xl text-slate-600">
              Вам знайомо?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DECISIONS BLOCK */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Які фінансові рішення приймає фермер
            </h2>
            <p className="text-xl text-slate-600">
              Щосезону ви відповідаєте на ці питання
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {decisions.map((decision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <decision.icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {decision.title}
                    </h3>
                    <p className="text-slate-600">
                      {decision.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION - TABLE PRO */}
      <section id="demo-section" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <FileSpreadsheet className="w-4 h-4" />
              Таблиця обліку фінансів PRO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Готова система для агробізнесу
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Універсальна таблиця PRO ідеально підходить для фермерства.<br />
              Ось як вона допомагає керувати фінансами господарства:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tableFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  {feature.description}
                </p>
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">Приклад:</div>
                  <div className="text-xs text-slate-700 italic">
                    {feature.example}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS FOR AGRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як використовувати таблицю PRO для агробізнесу
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Практичні приклади використання кожного листа таблиці для фермерського господарства
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Example 1 - Operations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200"
            >
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-sm font-medium mb-4 border border-slate-200">
                    Лист "Операції"
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Вносите всі витрати та доходи
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Фіксуйте всі транзакції: продаж врожаю, закупка насіння та добрив, витрати на техніку, паливо. 
                    Відмічайте статус оплати та прив'язуйте до сезонів.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Оплачено?</div>
                        <div className="text-sm text-slate-600">Контролюйте, які платежі здійснені</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Контрагент</div>
                        <div className="text-sm text-slate-600">Покупець врожаю або постачальник насіння</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Стаття</div>
                        <div className="text-sm text-slate-600">Насіння, Добрива, Паливо, Продаж пшениці</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-6 border border-slate-200 overflow-x-auto">
                  <div className="min-w-[280px] space-y-2 text-xs sm:text-sm">
                    <div className="grid pb-2 border-b border-slate-200 font-semibold text-slate-700" style={{ gridTemplateColumns: '60px 1fr 100px 110px', gap: '12px' }}>
                      <div>Дата</div>
                      <div>Контрагент</div>
                      <div>Стаття</div>
                      <div className="text-right">Сума</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '60px 1fr 100px 110px', gap: '12px' }}>
                      <div>10.10</div>
                      <div className="truncate">ТОВ Зернотрейд</div>
                      <div className="text-green-700">Продаж</div>
                      <div className="text-right font-medium text-green-700">+450 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '60px 1fr 100px 110px', gap: '12px' }}>
                      <div>15.03</div>
                      <div className="truncate">Насіння UA</div>
                      <div className="text-rose-700">Насіння</div>
                      <div className="text-right font-medium text-rose-700">-85 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '60px 1fr 100px 110px', gap: '12px' }}>
                      <div>20.04</div>
                      <div className="truncate">Агрохім</div>
                      <div className="text-rose-700">Добрива</div>
                      <div className="text-right font-medium text-rose-700">-120 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '60px 1fr 100px 110px', gap: '12px' }}>
                      <div>05.05</div>
                      <div className="truncate">ОККО</div>
                      <div className="text-rose-700">Паливо</div>
                      <div className="text-right font-medium text-rose-700">-45 000₴</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Example 2 - Projects (Seasons) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200"
            >
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-sm font-medium mb-4 border border-slate-200">
                    Лист "Проєкти"
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Окремі P&L для сезонів та полів
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Створюйте проєкти для кожного сезону або поля. 
                    Бачте окремо прибуток, собівартість та рентабельність кожної ділянки.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Весна 2026</div>
                        <div className="text-sm text-slate-600">Весь дохід та витрати сезону окремо</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Поле №3 - Пшениця</div>
                        <div className="text-sm text-slate-600">Скільки витратили та скільки заробили</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Озимі 2025-2026</div>
                        <div className="text-sm text-slate-600">Рентабельність озимої кампанії</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <div className="font-semibold text-slate-900 text-sm">Пшениця - Весна 2025</div>
                        <div className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Завершено</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Дохід</div>
                          <div className="font-bold text-slate-900">₴1,427,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">₴978,200</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">45.9%</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-slate-900">Соняшник 2026</div>
                        <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">В процесі</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Дохід</div>
                          <div className="font-bold text-slate-900">₴245,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">₴182,900</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">34.0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Example 3 - Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200"
            >
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-sm font-medium mb-4 border border-slate-200">
                    Лист "Статті"
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Структура доходів і витрат
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Створіть статті витрат для господарства: насіння, добрива, паливо, 
                    зарплата, оренда землі. Бачте динаміку витрат та їх частку.
                  </p>
                  <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <div className="font-semibold text-slate-700">Стаття</div>
                        <div className="font-semibold text-slate-700">Сума</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🌾 Продаж врожаю</div>
                        <div className="font-bold text-green-700">+₴2,450,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🌱 Насіння</div>
                        <div className="font-bold text-rose-700">-₴285,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">💧 Добрива</div>
                        <div className="font-bold text-rose-700">-₴420,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">⛽ Паливо</div>
                        <div className="font-bold text-rose-700">-₴180,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🚜 Ремонт техніки</div>
                        <div className="font-bold text-rose-700">-₴125,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🏞️ Оренда землі</div>
                        <div className="font-bold text-rose-700">-₴320,000</div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-slate-300">
                        <div className="font-bold text-slate-900">Чистий прибуток</div>
                        <div className="font-bold text-slate-900">₴1,120,000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                  <div className="mb-3 sm:mb-4">
                    <div className="text-sm text-slate-600 mb-2">Структура витрат</div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Добрива та насіння</span>
                          <span className="font-medium">₴705,000 • 53%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: '53%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Оренда землі</span>
                          <span className="font-medium">₴320,000 • 24%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: '24%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Паливо та техніка</span>
                          <span className="font-medium">₴305,000 • 23%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '23%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Прибуток з гектара</div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">₴16,900/га</div>
                    <div className="text-xs text-slate-500">
                      При площі 145 га - загальний прибуток ₴1,120,000
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PURCHASE BLOCK */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium flex items-center gap-2">
                  <Target className="w-3 h-3" />
                  Спеціальна пропозиція
                </div>
                <div className="px-3 py-1 bg-red-500 text-white rounded-full text-lg font-bold">
                  -21%
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  Що ви отримуєте
                </span>
              </h2>

              <p className="text-xl text-green-100/80 mb-8 leading-relaxed">
                Універсальна таблиця для обліку: Врожай, Витрати, Статті, Сезони, CashFlow, Бюджет, Рахунки, Річний звіт та інші
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Повний контроль над фінансами господарства',
                  'Автоматичні звіти за кілька секунд',
                  'Собівартість продукції по культурах',
                  'Аналіз рентабельності кожного поля',
                  'Планування витрат на наступний сезон',
                  'Миттєвий доступ після оплати'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
                <span className="text-green-200">1900+ користувачів</span>
              </div>
            </motion.div>

            {/* Right - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 z-0" />

                <div className="relative bg-white rounded-3xl p-8 lg:p-10 z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <FileSpreadsheet className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Таблиця обліку</div>
                        <div className="font-bold text-slate-900">{product.title}</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative h-72 mb-12 flex items-center justify-center">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png"
                      alt="Таблиця для фінансів PRO"
                      className="w-full max-w-md h-auto object-contain drop-shadow-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {benefits.slice(0, 6).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 py-4 border-y border-slate-100">
                    <div>
                      <div className="text-slate-400 line-through text-sm mb-1">{product.oldPrice} ₴</div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-3xl font-bold text-slate-900">{product.price.replace(/\s/g, '')}</span>
                        <span className="text-lg font-bold text-slate-900">₴</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-100 text-green-700 text-sm whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold">Вигода: {parseInt(product.oldPrice) - parseInt(product.price)} грн</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsPaymentModalOpen(true)}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-xl transition-colors"
                  >
                    Придбати таблицю
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-center text-sm text-slate-400 mt-6">
                    Безлімітний доступ • Без підписок
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guide Section - SEO Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Фінансовий облік агробізнесу: керівництво для фермерів
            </h2>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Особливості обліку в сільському господарстві</h3>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>Сезонність - головна особливість агробізнесу.</strong> На відміну від звичайного бізнесу, в агро витрати та доходи нерівномірні. 
                  Весна/літо - тільки витрати (насіння, добрива, робота). Осінь - продаж врожаю, основний дохід року за 2-3 місяці. 
                  Облік повинен показувати накопичений результат за весь сезон, а не тільки поточний місяць.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Собівартість з гектара.</strong> Основна метрика для прийняття рішень у рослинництві. Скільки коштує виростити 1 га пшениці? 
                  Витрати на насіння + добрива + робота техніки + оренда землі (розподілена на площу) = собівартість з 1 га. 
                  Знаючи урожайність та собівартість, ви можете розрахувати мінімальну ціну продажу для беззбитковості.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Прибуток vs Cash Flow.</strong> Прибуток на папері - одне, гроші на рахунку - інше. Ви продали врожай на 2 млн грн, 
                  але покупець платить через 60 днів. На папері прибуток є, а грошей немає. CashFlow показує реальний рух готівки: 
                  коли гроші надійдуть, коли треба платити за землю, паливо, зарплати.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Планування наступного сезону.</strong> Які культури саджати? Аналізуйте минулі сезони: рентабельність пшениці, 
                  соняшника, кукурудзи. Враховуйте ціни на ринку, погоду, стан грунту. Облік дає дані для обґрунтованих рішень, 
                  а не для "посаджу те саме, що й минулого року".
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Як рахувати ефективність використання землі</h3>
              
              <div className="space-y-3 text-sm text-slate-700">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-2">1. Прибуток з гектара</div>
                  <p>Формула: (Виручка від продажу врожаю - Витрати на вирощування) / Площа</p>
                  <p className="text-xs text-slate-600 mt-1">Приклад: Пшениця. Виручка 1,427,000 грн - Витрати 978,000 грн = 449,000 грн прибутку. Площа 50 га → Прибуток 8,980 грн/га</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-2">2. Урожайність культур</div>
                  <p>Фактична врожайність vs планова. Якщо планували 60 ц/га пшениці, а зібрали 48 ц/га - аналізуйте причини.</p>
                  <p className="text-xs text-slate-600 mt-1">Можливо: недостатньо добрив, погана якість насіння, несприятлива погода, хвороби рослин.</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-2">3. ROI інвестицій в агро</div>
                  <p>Скільки заробили на кожну інвестовану гривню. Формула: Прибуток / Інвестиції × 100%</p>
                  <p className="text-xs text-slate-600 mt-1">Приклад: Інвестували 500,000 грн в сезон, отримали 750,000 грн прибутку → ROI = 50%. Це означає повернення інвестицій + 50% прибутку.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Часті питання
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Корисні рішення для фермерів
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to={createPageUrl('ProductWarehouse')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Облік складу</h3>
                <p className="text-sm text-slate-600 mb-3">Контроль зерносховища та залишків врожаю</p>
                <div className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('ProductPro')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileSpreadsheet className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Таблиця PRO</h3>
                <p className="text-sm text-slate-600 mb-3">Управлінський облік господарства з сезонами</p>
                <div className="text-emerald-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('CustomSolution')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Tractor className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Індивідуальне рішення</h3>
                <p className="text-sm text-slate-600 mb-3">Комплексна система для великих агрохолдингів</p>
                <div className="text-indigo-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        product={product}
      />
    </div>
  );
}