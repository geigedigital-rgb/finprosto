import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Calendar,
  DollarSign,
  BarChart3,
  Target,
  ChevronDown,
  FileSpreadsheet,
  Users,
  Package,
  PieChart,
  Check,
  Star,
  Settings
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PaymentModal from '@/components/payment/PaymentModal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ProductManufacturing() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Облік виробництва: Таблиця для фінансового обліку виробничого підприємства | FinProsto 2026';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Облік виробництва та виробничого підприємства ⭐ Готова таблиця для фінансового обліку: собівартість продукції, сировина, цехи, замовлення. Управлінський облік виробництва. Google Sheets. 1730₴');
    document.head.appendChild(metaDescription);
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік виробництва, облік виробничого підприємства, фінансовий облік виробництва, собівартість продукції, облік цеху, управлінський облік виробництва, учет производства');
    document.head.appendChild(metaKeywords);
    
    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Таблиця обліку фінансів PRO для виробництва - Google Sheets');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Контроль собівартості, сировини, цехів. P&L по замовленнях. 1730₴ • Без підписок');
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
    ogImage.setAttribute('content', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/56fc7775f_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14055.png');
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
    twitterTitle.setAttribute('content', 'Облік фінансів для виробництва | FinProsto');
    document.head.appendChild(twitterTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Контроль собівартості та сировини. 1730₴ • 4.9/5 ⭐');
    document.head.appendChild(twitterDescription);
    
    // JSON-LD Product Schema
    const productSchema = document.createElement('script');
    productSchema.type = 'application/ld+json';
    productSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Таблиця обліку фінансів PRO для виробництва",
      "description": "Професійний облік фінансів для виробничих підприємств. Контроль собівартості, сировини, цехів, замовлень.",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/56fc7775f_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14055.png",
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
      "category": "Виробництво та промисловість"
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
    id: 'manufacturing',
    title: 'Таблиця обліку фінансів PRO',
    price: '1730',
    oldPrice: '2090',
  };

  const problems = [
    {
      icon: AlertCircle,
      title: 'Не знаєте реальну собівартість продукції',
      description: 'Виробляєте товар, але не розумієте скільки він насправді коштує з урахуванням всіх витрат'
    },
    {
      icon: AlertCircle,
      title: 'Сировина «зависає» на складі',
      description: 'Закуповуєте матеріали, але не бачите реальні залишки та перевитрати'
    },
    {
      icon: AlertCircle,
      title: 'Не зрозуміло, які замовлення прибуткові',
      description: 'Працюєте на кількох замовленнях, але чистий прибуток кожного неочевидний'
    },
    {
      icon: AlertCircle,
      title: 'Брак та перевитрати їдять прибуток',
      description: 'Втрати на браку та перевитраті матеріалів, але не знаєте точних цифр'
    },
    {
      icon: AlertCircle,
      title: 'Важко планувати закупки сировини',
      description: 'Немає чіткого розуміння, скільки і коли потрібно закуповувати матеріали'
    }
  ];

  const decisions = [
    {
      icon: TrendingUp,
      title: 'За якою ціною продавати продукцію',
      description: 'Яку націнку закласти, щоб покрити всі витрати та отримати прибуток'
    },
    {
      icon: Package,
      title: 'Скільки сировини закуповувати',
      description: 'Оптимальний обсяг закупок без заморожування капіталу'
    },
    {
      icon: DollarSign,
      title: 'Які замовлення брати, а які відхиляти',
      description: 'Чи вистачить сировини та потужностей на нове замовлення'
    },
    {
      icon: BarChart3,
      title: 'Як оптимізувати витрати виробництва',
      description: 'Де можна скоротити витрати без втрати якості продукції'
    }
  ];

  const tableFeatures = [
    {
      icon: Calendar,
      title: 'Річний звіт',
      description: 'Порівнюйте місяці, аналізуйте тренди виробництва',
      example: 'Бачите динаміку обсягів виробництва та собівартості по місяцях'
    },
    {
      icon: Factory,
      title: 'Напрями діяльності',
      description: 'Розділіть виробництво по категоріям',
      example: 'Цех А, Цех Б, Давальницька сировина - окремо рентабельність кожного'
    },
    {
      icon: DollarSign,
      title: 'Статті витрат',
      description: 'Структуруйте витрати: Сировина, Зарплати, Комунальні',
      example: 'Контролюйте витрати на сировину, електроенергію, зарплати працівників'
    },
    {
      icon: Users,
      title: 'Проєкти (Замовлення)',
      description: 'Ведіть кожне замовлення окремо',
      example: 'Замовлення №1234, Партія №555 - окремі P&L та собівартість'
    },
    {
      icon: PieChart,
      title: 'Рахунки',
      description: 'Готівка, банк, платіжні системи',
      example: 'Бачите баланс по касі, розрахунковому рахунку, валютному рахунку'
    },
    {
      icon: BarChart3,
      title: 'Операції',
      description: 'Кожна транзакція на своєму місці',
      example: 'Закупки сировини, виробництво, зарплати, продаж готової продукції'
    }
  ];

  const benefits = [
    'Таблицю обліку фінансів PRO в Google Sheets',
    'P&L звіти з автоматичним розрахунком',
    'CashFlow та контроль грошових потоків',
    'Річний звіт з порівнянням місяців',
    'Облік статей витрат та проєктів',
    'Контроль оплати та дебіторської заборгованості',
    'Управління рахунками (банк, готівка, e-payment)',
    'Інструкції та підтримка в Telegram',
    'Безкоштовні оновлення назавжди'
  ];

  const faqs = [
    {
      question: 'Підійде для невеликого виробництва?',
      answer: 'Так, система адаптується під будь-який масштаб. Навіть якщо у вас невеликий цех або майстерня, ви будете бачити реальну собівартість та рентабельність.'
    },
    {
      question: 'Чи потрібно бухгалтерське знання?',
      answer: 'Ні. Система створена для власників, а не бухгалтерів. Все зрозуміло, є інструкції та приклади використання.'
    },
    {
      question: 'Чи можна рахувати собівартість продукції?',
      answer: 'Так, ви можете створити окремий проєкт для кожного виду продукції або партії, щоб бачити точну собівартість з урахуванням всіх витрат.'
    },
    {
      question: 'Скільки часу займає налаштування?',
      answer: '30-60 хвилин на початкове налаштування. Далі 5-10 хвилин на день для внесення даних та перегляду звітів.'
    },
    {
      question: 'Як розрахувати собівартість виробу?',
      answer: 'Собівартість = Прямі витрати (сировина + робота) + Непрямі витрати (оренда цеху, електроенергія, амортизація). Створіть проєкт для виробу, записуйте всі витрати. Таблиця автоматично розподілить непрямі витрати.'
    },
    {
      question: 'Як контролювати витрати сировини на виробництві?',
      answer: 'Створіть статтю "Сировина" та записуйте кожну закупку з прив\'язкою до замовлення або партії. Таблиця покаже витрати сировини на одиницю продукції та виявить перевитрати.'
    },
    {
      question: 'Чи можна вести облік по цехах?',
      answer: 'Так, використовуйте функцію "Напрями" для окремого обліку кожного цеху. Ви будете бачити прибутковість Цеху А, Цеху Б окремо.'
    },
    {
      question: 'Як планувати закупки сировини?',
      answer: 'Аналізуйте статистику витрат сировини по минулих партіях. Таблиця покаже середню витрату матеріалів на виріб, що допоможе спланувати закупки для нових замовлень.'
    },
    {
      question: 'Чи підходить для харчового виробництва?',
      answer: 'Так, таблиця підходить для всіх видів виробництва: харчове, текстильне, меблеве, металообробка. Принцип однаковий: сировина + робота = собівартість.'
    },
    {
      question: 'Як розподіляти накладні витрати на продукцію?',
      answer: 'Накладні витрати (оренда, адміністрація) можна розподілити пропорційно об\'єму виробництва або вручну закласти фіксовану суму на одиницю продукції. Таблиця підтримує обидва методи.'
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
          { label: 'Виробництво' }
        ]} />
      </div>

      {/* HERO BLOCK */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
                <Factory className="w-4 h-4" />
                Для виробництва
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Фінанси виробництва<br />
                під повним контролем
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Одна фінансова система для виробничих підприємств:<br />
                собівартість, сировина, цехи і гроші в обороті
              </p>

              <Button 
                onClick={scrollToDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
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
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/56fc7775f_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14055.png"
                  alt="Облік виробництва - розрахунок собівартості продукції, контроль сировини та рентабельності виробничого підприємства"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>

              {/* Floating Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-5 border border-slate-100 w-[220px] sm:w-64"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Цього тижня</h3>
                  <div className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded-full font-medium">
                    Виробництво
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Package className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-600">Партій випущено</span>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-900">12</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-green-100 flex items-center justify-center">
                        <DollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-600">Виручка</span>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-900">₴485,200</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-600">Маржинальність</span>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-green-600">34.2%</span>
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
              Типові проблеми виробничих підприємств
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
              Які фінансові рішення доводиться приймати щодня
            </h2>
            <p className="text-xl text-slate-600">
              Ці питання виникають постійно
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
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <decision.icon className="w-6 h-6 text-blue-700" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <FileSpreadsheet className="w-4 h-4" />
              Таблиця обліку фінансів PRO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Готова система для виробництва
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Універсальна таблиця PRO ідеально підходить для виробничих підприємств.<br />
              Ось як вона допомагає керувати фінансами:
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
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-700" />
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

      {/* HOW IT WORKS FOR MANUFACTURING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як використовувати таблицю PRO для виробництва
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Практичні приклади використання кожного листа таблиці для виробничих підприємств
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
                    Вносите кожну операцію виробництва
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Фіксуйте всі транзакції: закупки сировини, виробництво продукції, зарплати працівників, продаж готової продукції. 
                    Відмічайте статус оплати і прив'язуйте до замовлень.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Оплачено?</div>
                        <div className="text-sm text-slate-600">Контролюйте, які платежі здійснені, а які ще чекаєте</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Замовлення</div>
                        <div className="text-sm text-slate-600">Кожна операція прив'язана до конкретного замовлення</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Стаття</div>
                        <div className="text-sm text-slate-600">Сировина, Зарплата цеху, Електроенергія, Продаж продукції</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-6 border border-slate-200 overflow-x-auto">
                  <div className="min-w-[280px] space-y-2 text-[10px] sm:text-xs">
                    <div className="grid pb-2 border-b border-slate-200 font-semibold text-slate-700" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div className="truncate">Дата</div>
                      <div className="truncate">Замовлення</div>
                      <div className="truncate">Стаття</div>
                      <div className="text-right truncate">Сума</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>15.01</div>
                      <div className="truncate">Партія #245</div>
                      <div className="text-rose-700 text-[9px] sm:text-xs truncate">Сировина</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-rose-700">-85 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>16.01</div>
                      <div className="truncate">Партія #245</div>
                      <div className="text-rose-700 text-[9px] sm:text-xs truncate">Зарплата</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-rose-700">-32 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>18.01</div>
                      <div className="truncate">Партія #245</div>
                      <div className="text-green-700 text-[9px] sm:text-xs truncate">Продаж</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-green-700">+180 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>19.01</div>
                      <div className="truncate">Партія #246</div>
                      <div className="text-rose-700 text-[9px] sm:text-xs truncate">Матеріали</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-rose-700">-45 000₴</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Example 2 - Projects */}
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
                    Окремі P&L для кожного замовлення
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Створюйте проєкт для кожного замовлення або партії продукції. 
                    Бачте окремо собівартість, прибуток, рентабельність кожної партії.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Замовлення №1234</div>
                        <div className="text-sm text-slate-600">Вся собівартість та прибуток замовлення окремо</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Партія виробу А</div>
                        <div className="text-sm text-slate-600">Скільки витратили на сировину та скільки заробили</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Давальницьке замовлення</div>
                        <div className="text-sm text-slate-600">Рентабельність замовлення в реальному часі</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <div className="font-semibold text-slate-900 text-sm">Партія №245 - Вироби металеві</div>
                        <div className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Завершено</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Виручка</div>
                          <div className="font-bold text-slate-900">₴180,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Собівартість</div>
                          <div className="font-bold text-slate-900">₴117,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">35.0%</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-slate-900">Замовлення №1234</div>
                        <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">В процесі</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Виручка</div>
                          <div className="font-bold text-slate-900">₴95,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Собівартість</div>
                          <div className="font-bold text-slate-900">₴58,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">38.9%</div>
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
                    Створіть статті витрат, які важливі для виробництва: сировина, зарплати, 
                    електроенергія, обслуговування обладнання. Бачте динаміку витрат та їх частку від виручки.
                  </p>
                  <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <div className="font-semibold text-slate-700">Стаття</div>
                        <div className="font-semibold text-slate-700">Сума</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">📦 Продаж продукції</div>
                        <div className="font-bold text-green-700">+₴850,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🏭 Сировина та матеріали</div>
                        <div className="font-bold text-rose-700">-₴380,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">👷 Зарплата працівників</div>
                        <div className="font-bold text-rose-700">-₴180,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">⚡ Електроенергія</div>
                        <div className="font-bold text-rose-700">-₴65,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🔧 Обслуговування обладнання</div>
                        <div className="font-bold text-rose-700">-₴35,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🏢 Оренда цеху</div>
                        <div className="font-bold text-rose-700">-₴45,000</div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-slate-300">
                        <div className="font-bold text-slate-900">Чистий прибуток</div>
                        <div className="font-bold text-slate-900">₴145,000</div>
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
                          <span className="text-slate-600">Сировина</span>
                          <span className="font-medium">₴380,000 • 53.9%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '53.9%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Зарплата</span>
                          <span className="font-medium">₴180,000 • 25.5%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500" style={{ width: '25.5%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Електроенергія</span>
                          <span className="font-medium">₴65,000 • 9.2%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: '9.2%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Рентабельність виробництва</div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">17.1%</div>
                    <div className="text-xs text-slate-500">
                      З кожної гривні виручки — 17 копійок чистого прибутку
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PURCHASE BLOCK */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
        
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
                  -17%
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Що ви отримуєте
                </span>
              </h2>

              <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
                Універсальна таблиця для обліку: Замовлення, Собівартість, Статті, Цехи, CashFlow, Бюджет, Рахунки, Річний звіт та інші
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Контроль собівартості кожної партії',
                  'Точний облік сировини та матеріалів',
                  'Розрахунок рентабельності замовлень',
                  'Контроль витрат по цехах',
                  'Планування закупок та виробництва',
                  'Аналітика ефективності підприємства'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
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
                <span className="text-blue-200">1900+ користувачів</span>
              </div>
            </motion.div>

            {/* Right - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 z-0" />

                <div className="relative bg-white rounded-3xl p-8 lg:p-10 z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
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
                        <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
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
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-100 text-blue-700 text-sm whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold">Вигода: {parseInt(product.oldPrice) - parseInt(product.price)} грн</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsPaymentModalOpen(true)}
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl transition-colors"
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
              Управлінський облік виробництва: повний гід
            </h2>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Ключові показники виробничого підприємства</h3>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>Собівартість продукції - найважливіша метрика.</strong> Собівартість показує реальну вартість виробництва одиниці продукції. 
                  Формула: Прямі витрати (сировина + робота) + Розподілені непрямі витрати (оренда, енергія, амортизація). 
                  Без знання собівартості ви не зможете встановити правильну ціну продажу та розрахувати реальний прибуток.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Маржинальність виробництва.</strong> Скільки ви заробляєте з кожної гривні продажів після вирахування прямих витрат. 
                  Якщо продаєте виріб за 1000 грн, а сировина та робота коштують 650 грн, маржа = 35%. 
                  Це показує, чи вистачить грошей на покриття постійних витрат (оренда, адміністрація, маркетинг).
                </p>
                
                <p className="leading-relaxed">
                  <strong>Оборотність запасів сировини.</strong> Скільки разів за місяць ви використовуєте сировину. 
                  Чим вища оборотність - тим менше капіталу заморожено на складі. Приклад: купили сировини на 200 тис грн, 
                  використали за місяць - оборотність = 1. Якщо за 2 тижні - оборотність = 2. Висока оборотність = ефективність.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Точка беззбитковості.</strong> Скільки одиниць продукції потрібно продати, щоб покрити всі витрати. 
                  Формула: Постійні витрати / (Ціна - Змінні витрати на одиницю). Якщо точка беззбитковості = 500 виробів/міс, 
                  а ви виробляєте 300, значить працюєте в мінус.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Типові помилки в обліку виробництва</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Не враховують непрямі витрати в собівартості</h4>
                    <p className="text-sm text-slate-700">
                      Рахують тільки сировину та робочі години, забуваючи про оренду цеху, електроенергію, амортизацію обладнання. 
                      В результаті - ціни занижені, реальний прибуток менший за очікуваний.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Не контролюють втрати сировини та брак</h4>
                    <p className="text-sm text-slate-700">
                      Купили металу на 100 тис грн, виробили виробів на 85 тис. Де 15 тис? Брак? Перевитрати? Крадіжка? 
                      Без обліку руху сировини ці гроші просто зникають.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Приймають рішення про ціни інтуїтивно</h4>
                    <p className="text-sm text-slate-700">
                      "Конкуренти продають за 500 грн, тож і ми за 500". Але якщо ваша собівартість 480 грн - ви працюєте майже в нуль, 
                      а непрямі витрати взагалі не покриваєте.
                    </p>
                  </div>
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
              Корисні інструменти для виробництва
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to={createPageUrl('ProductWarehouse')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Облік складу</h3>
                <p className="text-sm text-slate-600 mb-3">Контроль залишків сировини та готової продукції</p>
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
                <p className="text-sm text-slate-600 mb-3">Управлінський облік виробництва та фінансів</p>
                <div className="text-emerald-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('CustomSolution')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Індивідуальне рішення</h3>
                <p className="text-sm text-slate-600 mb-3">ERP-система для великих виробництв</p>
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