import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Package,
  DollarSign,
  BarChart3,
  Target,
  ChevronDown,
  FileSpreadsheet,
  Calendar,
  Users,
  PieChart,
  Check,
  Star
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PaymentModal from '@/components/payment/PaymentModal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ProductEcommerce() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Облік інтернет-магазину: Таблиця для фінансового обліку онлайн-магазину | FinProsto 2026';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Облік інтернет-магазину та e-commerce ⭐ Готова таблиця для фінансового обліку онлайн-бізнесу: продажі, замовлення, товари, ROI реклами. Облік онлайн-магазину. Google Sheets. 1730₴');
    document.head.appendChild(metaDescription);
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік інтернет магазину, облік онлайн магазину, фінансовий облік e-commerce, облік замовлень інтернет магазин, облік продажів онлайн, учет интернет магазина, учет онлайн магазина');
    document.head.appendChild(metaKeywords);
    
    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Таблиця обліку фінансів PRO для інтернет-магазинів - Google Sheets');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Контроль продажів, реклами, закупок. ROI та рентабельність. 1730₴ • Без підписок');
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
    ogImage.setAttribute('content', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/40c763a2b_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14052.png');
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
    twitterTitle.setAttribute('content', 'Облік фінансів для інтернет-магазинів | FinProsto');
    document.head.appendChild(twitterTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Контроль продажів та реклами. 1730₴ • 4.9/5 ⭐');
    document.head.appendChild(twitterDescription);
    
    // JSON-LD Structured Data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Таблиця обліку фінансів PRO для інтернет-магазинів",
      "description": "Професійний облік фінансів для інтернет-магазинів та e-commerce. Контроль продажів, реклами, закупок, ROI.",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/40c763a2b_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14052.png",
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
      "category": "Інтернет-магазини та E-commerce"
    });
    document.head.appendChild(script);
    
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
    id: 'ecommerce',
    title: 'Таблиця обліку фінансів PRO',
    price: '1730',
    oldPrice: '2190',
  };

  const problems = [
    {
      icon: AlertCircle,
      title: 'Продажі є, а грошей постійно не вистачає',
      description: 'Оборот збільшується, але готівка зникає невідомо куди'
    },
    {
      icon: AlertCircle,
      title: 'Не зрозуміло, які товари реально прибуткові',
      description: 'Продаєте багато, але чистий прибуток залишається загадкою'
    },
    {
      icon: AlertCircle,
      title: 'Реклама зʼїдає гроші, але результат неочевидний',
      description: 'Витрачаєте на рекламу, але не бачите реального ROI'
    },
    {
      icon: AlertCircle,
      title: 'Гроші «зависають» у залишках',
      description: 'Капітал заморожений у товарах, які не продаються'
    },
    {
      icon: AlertCircle,
      title: 'Рішення приймаються інтуїтивно',
      description: 'Немає чітких цифр для обґрунтованих бізнес-рішень'
    }
  ];

  const decisions = [
    {
      icon: TrendingUp,
      title: 'Чи можна збільшувати рекламу зараз',
      description: 'Вистачить грошей на масштабування чи варто почекати'
    },
    {
      icon: Package,
      title: 'Які товари варто закуповувати',
      description: 'Що приносить прибуток, а що заморожує капітал'
    },
    {
      icon: DollarSign,
      title: 'Коли можна виводити прибуток',
      description: 'Скільки можна взяти, не поставивши бізнес під ризик'
    },
    {
      icon: BarChart3,
      title: 'Чи вистачить грошей на зарплати і закупки',
      description: 'Планування касових розривів наперед'
    }
  ];

  const tableFeatures = [
    {
      icon: Calendar,
      title: 'Річний звіт',
      description: 'Порівнюйте місяці, аналізуйте тренди продажів',
      example: 'Бачите, який місяць був найприбутковішим і чому'
    },
    {
      icon: TrendingUp,
      title: 'Напрями діяльності',
      description: 'Розділіть продажі по категоріям товарів',
      example: 'Одяг, Взуття, Аксесуари - окремо рентабельність кожного'
    },
    {
      icon: DollarSign,
      title: 'Статті витрат',
      description: 'Структуруйте витрати: Реклама, Доставка, Упаковка',
      example: 'Контролюйте, скільки йде на кожен канал реклами'
    },
    {
      icon: Users,
      title: 'Проєкти',
      description: 'Ведіть окремі кампанії або акції',
      example: 'Чорна п\'ятниця, Розпродаж, Нова колекція - окремі P&L'
    },
    {
      icon: PieChart,
      title: 'Рахунки',
      description: 'Готівка, банк, платіжні системи',
      example: 'Бачите баланс по Monobank, ПриватБанк, LiqPay'
    },
    {
      icon: BarChart3,
      title: 'Операції',
      description: 'Кожна транзакція на своєму місці',
      example: 'Замовлення, закупки, реклама з деталями та статусом оплати'
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
      question: 'Підійде, якщо невеликий магазин?',
      answer: 'Так, система адаптується під будь-який масштаб. Навіть якщо у вас 10-20 замовлень на місяць, ви будете бачити реальну картину фінансів.'
    },
    {
      question: 'Чи потрібно бухгалтерське знання?',
      answer: 'Ні. Система створена для власників, а не бухгалтерів. Все зрозуміло, є інструкції та приклади використання.'
    },
    {
      question: 'Чи можна інтегрувати з моїм магазином?',
      answer: 'Система працює в Google Sheets і дані можна імпортувати з вашої CRM/платформи через CSV або API. Також можна вносити дані вручну.'
    },
    {
      question: 'Скільки часу займає налаштування?',
      answer: '30-60 хвилин на початкове налаштування. Далі 5-10 хвилин на день для внесення даних та перегляду звітів.'
    },
    {
      question: 'Як контролювати витрати на рекламу в інтернет-магазині?',
      answer: 'Створіть окремі статті для кожного каналу: "Реклама Google", "Реклама Facebook", "Instagram". Записуйте витрати щодня або щотижня. Таблиця покаже ROI кожного каналу: скільки продажів на 1 грн реклами.'
    },
    {
      question: 'Як рахувати рентабельність товарів в e-commerce?',
      answer: 'Використовуйте "Напрями" для категорій товарів. Доходи - продажі категорії, витрати - закупка товарів цієї категорії + реклама. Таблиця покаже рентабельність Одягу, Взуття, Аксесуарів окремо.'
    },
    {
      question: 'Чи можна вести облік акцій та розпродажів?',
      answer: 'Так, створюйте проєкт для кожної акції: "Чорна п\'ятниця", "Розпродаж". Записуйте доходи від акції та додаткові витрати на рекламу. Побачите чистий прибуток акції.'
    },
    {
      question: 'Як контролювати дебіторську заборгованість клієнтів?',
      answer: 'В листі "Операції" відмічайте статус "Не оплачено" для замовлень, які клієнт ще не оплатив (наприклад, післяплата). Таблиця покаже загальну дебіторку.'
    },
    {
      question: 'Чи підходить для дропшипінгу?',
      answer: 'Так, таблиця універсальна. Доходи - продажі клієнтам, витрати - оплата постачальнику + реклама + доставка. Рентабельність рахується автоматично.'
    },
    {
      question: 'Як планувати закупки товарів для інтернет-магазину?',
      answer: 'Аналізуйте статистику продажів по місяцях. Таблиця покаже, скільки продаєте в середньому. Закладіть бюджет на закупки з урахуванням обороту та оборотності товару.'
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
          { label: 'Інтернет-магазини' }
        ]} />
      </div>

      {/* HERO BLOCK */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-8">
                <ShoppingCart className="w-4 h-4" />
                Для інтернет-магазинів
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Фінанси інтернет-магазину<br />
                під повним контролем
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Одна фінансова система, яка показує реальну картину:<br />
                прибуток, залишки, рекламу і гроші в обороті
              </p>

              <Button 
                onClick={scrollToDemo}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-cyan-600/20"
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
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/40c763a2b_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14052.png"
                  alt="Облік інтернет-магазину - власниця контролює продажі, замовлення, ROI реклами та фінанси e-commerce бізнесу"
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
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500">В реальному часі</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Продажі сьогодні</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-slate-900">₴12,450</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Package className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Нових замовлень</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-slate-900">23</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Рентабельність</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-green-600">32.5%</span>
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
              Типові проблеми інтернет-магазинів
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
              Які фінансові рішення доводиться приймати власнику магазину
            </h2>
            <p className="text-xl text-slate-600">
              Щодня ви відповідаєте на ці питання
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
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <decision.icon className="w-6 h-6 text-cyan-700" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              <FileSpreadsheet className="w-4 h-4" />
              Таблиця обліку фінансів PRO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Готова система для інтернет-магазину
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Універсальна таблиця PRO ідеально підходить для e-commerce.<br />
              Ось як вона допомагає керувати фінансами магазину:
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
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-700" />
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

      {/* HOW IT WORKS FOR ECOMMERCE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як використовувати таблицю PRO для інтернет-магазину
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Практичні приклади використання кожного листа таблиці для e-commerce бізнесу
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
                    Вносите кожне замовлення і закупку
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Фіксуйте всі транзакції: продажі, закупки товарів, витрати на рекламу, доставку. 
                    Відмічайте статус оплати і прив'язуйте до проєктів.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Оплачено?</div>
                        <div className="text-sm text-slate-600">Контролюйте, які замовлення оплачені, а які ні</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Контрагент</div>
                        <div className="text-sm text-slate-600">Клієнт для продажів, постачальник для закупок</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Стаття</div>
                        <div className="text-sm text-slate-600">Реклама Google, Закупка товарів, Доставка Nova Poshta</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-6 border border-slate-200 overflow-x-auto">
                  <div className="min-w-[280px] space-y-2 text-[10px] sm:text-xs">
                    <div className="grid pb-2 border-b border-slate-200 font-semibold text-slate-700" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div className="truncate">Дата</div>
                      <div className="truncate">Контрагент</div>
                      <div className="truncate">Стаття</div>
                      <div className="text-right truncate">Сума</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>15.01</div>
                      <div className="truncate">Клієнт #1234</div>
                      <div className="text-green-700 text-[9px] sm:text-xs truncate">Продаж</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-green-700">+2 450₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>15.01</div>
                      <div className="truncate">Пост. А</div>
                      <div className="text-rose-700 text-[9px] sm:text-xs truncate">Закупка</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-rose-700">-1 200₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>15.01</div>
                      <div className="truncate">Google</div>
                      <div className="text-rose-700 text-[9px] sm:text-xs truncate">Реклама</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-rose-700">-350₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>16.01</div>
                      <div className="truncate">Клієнт #1235</div>
                      <div className="text-green-700 text-[9px] sm:text-xs truncate">Продаж</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-green-700">+3 200₴</div>
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
                    Окремі P&L для акцій та кампаній
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Створюйте проєкти для кожної маркетингової кампанії або сезонної акції. 
                    Бачте окремо прибуток, рентабельність та ROI кожної активності.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Чорна п'ятниця</div>
                        <div className="text-sm text-slate-600">Весь дохід та витрати акції окремо</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Нова колекція</div>
                        <div className="text-sm text-slate-600">Скільки витратили на промо та скільки заробили</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Різдвяний розпродаж</div>
                        <div className="text-sm text-slate-600">Рентабельність акції в реальному часі</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <div className="font-semibold text-slate-900 text-sm">Зимня колекція 2026</div>
                        <div className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Завершено</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Дохід</div>
                          <div className="font-bold text-slate-900">₴127,450</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">₴78,200</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">38.6%</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-slate-900">8 березня 2026</div>
                        <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">В процесі</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Дохід</div>
                          <div className="font-bold text-slate-900">₴45,200</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">₴28,900</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">36.1%</div>
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
                    Створіть статті витрат, які важливі для магазину: реклама по каналах, доставка, 
                    упаковка, зарплата. Бачте динаміку витрат та їх частку від виторгу.
                  </p>
                  <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <div className="font-semibold text-slate-700">Стаття</div>
                        <div className="font-semibold text-slate-700">Сума</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">📈 Продажі товарів</div>
                        <div className="font-bold text-green-700">+₴284,500</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">📢 Реклама Google</div>
                        <div className="font-bold text-rose-700">-₴28,400</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">📢 Реклама Facebook</div>
                        <div className="font-bold text-rose-700">-₴19,200</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">📦 Закупка товарів</div>
                        <div className="font-bold text-rose-700">-₴142,300</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🚚 Доставка Nova Poshta</div>
                        <div className="font-bold text-rose-700">-₴14,800</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">📦 Упаковка</div>
                        <div className="font-bold text-rose-700">-₴5,200</div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-slate-300">
                        <div className="font-bold text-slate-900">Чистий прибуток</div>
                        <div className="font-bold text-slate-900">₴74,600</div>
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
                          <span className="text-slate-600">Реклама (всього)</span>
                          <span className="font-medium">₴47,600 • 16.7%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500" style={{ width: '16.7%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Закупка товарів</span>
                          <span className="font-medium">₴142,300 • 50.0%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500" style={{ width: '50%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Доставка</span>
                          <span className="font-medium">₴14,800 • 5.2%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: '5.2%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">ROI реклами</div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">3.2x</div>
                    <div className="text-xs text-slate-500">
                      На кожну гривню реклами — 3.2 грн доходу
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* PURCHASE BLOCK */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        
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
                  -40%
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                  Готова таблиця яка підходить для інтернет-магазину
                </span>
              </h2>

              <p className="text-xl text-cyan-100/80 mb-8 leading-relaxed">
                Універсальна таблиця для обліку: Продажі, Витрати, Статті, Проєкти, CashFlow, Бюджет, Рахунки, Річний звіт та інші
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Повний контроль над фінансами бізнесу',
                  'Автоматичні звіти за кілька секунд',
                  'Прозорість всіх грошових потоків',
                  'Планування та прогнозування доходів',
                  'Аналітика ефективності кожного проєкту',
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
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
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
                <span className="text-cyan-200">1900+ користувачів</span>
              </div>
            </motion.div>

            {/* Right - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20 z-0" />

                <div className="relative bg-white rounded-3xl p-8 lg:p-10 z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
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
                        <Check className="w-4 h-4 text-cyan-500 flex-shrink-0" />
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
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-cyan-100 text-cyan-700 text-sm whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold">Вигода: {parseInt(product.oldPrice) - parseInt(product.price)} грн</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsPaymentModalOpen(true)}
                    size="lg"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg rounded-xl transition-colors"
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

      {/* FAQ */}
      <section className="py-20 bg-white">
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
              Інші рішення для e-commerce
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to={createPageUrl('ProductWarehouse')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Облік складу</h3>
                <p className="text-sm text-slate-600 mb-3">Контроль товарних залишків для онлайн-магазину</p>
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
                <p className="text-sm text-slate-600 mb-3">Детальний облік з проєктами та маркетингом</p>
                <div className="text-emerald-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('ProductLite')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Таблиця Lite</h3>
                <p className="text-sm text-slate-600 mb-3">Простий старт для нових інтернет-магазинів</p>
                <div className="text-orange-600 font-semibold text-sm flex items-center gap-2">
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