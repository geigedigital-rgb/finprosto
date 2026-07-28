import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HardHat, 
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
  Hammer,
  Calculator
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PaymentModal from '@/components/payment/PaymentModal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ProductConstruction() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Облік будівництва та ремонтів: Таблиця для фінансового обліку будівельної компанії | FinProsto 2026';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Облік будівництва та ремонтних робіт ⭐ Готова таблиця для фінансового обліку будівельної компанії: об\'єкти, матеріали, підрядники, кошториси. Облік ремонтів. Google Sheets. 1730₴');
    document.head.appendChild(metaDescription);
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік будівництва, облік ремонтів, фінансовий облік будівельної компанії, облік будівельних робіт, облік об\'єктів будівництва, учет строительства, учет ремонтных работ');
    document.head.appendChild(metaKeywords);
    
    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Таблиця обліку фінансів PRO для будівництва - Google Sheets');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Контроль об\'єктів, матеріалів, підрядників. P&L по проєктах, касові розриви. 1730₴ • Без підписок');
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
    ogImage.setAttribute('content', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/0587cb692_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14056.png');
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
    twitterTitle.setAttribute('content', 'Облік фінансів для будівництва | FinProsto');
    document.head.appendChild(twitterTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Контроль об\'єктів та матеріалів. 1730₴ • 4.9/5 ⭐');
    document.head.appendChild(twitterDescription);
    
    // JSON-LD Product Schema
    const productSchema = document.createElement('script');
    productSchema.type = 'application/ld+json';
    productSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Таблиця обліку фінансів PRO для будівництва",
      "description": "Професійний облік фінансів для будівельних компаній та ремонтних бригад. Контроль об'єктів, матеріалів, підрядників, касових розривів.",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/0587cb692_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14056.png",
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
      "category": "Будівництво та ремонт"
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
    id: 'construction',
    title: 'Таблиця обліку фінансів PRO',
    price: '1730',
    oldPrice: '2190',
  };

  const problems = [
    {
      icon: AlertCircle,
      title: 'Гроші «заморожені» в об\'єктах і матеріалах',
      description: 'Об\'єктів багато, але готівки постійно не вистачає на нові закупки',
      color: 'red'
    },
    {
      icon: AlertCircle,
      title: 'Не зрозуміло, які об\'єкти прибуткові',
      description: 'Працюєте на кількох об\'єктах, але чистий прибуток залишається загадкою',
      color: 'red'
    },
    {
      icon: AlertCircle,
      title: 'Касові розриви між авансами та оплатами',
      description: 'Чекаєте оплату від замовника, а платити підрядникам треба зараз',
      color: 'red'
    },
    {
      icon: AlertCircle,
      title: 'Матеріали перевитрачаються на об\'єктах',
      description: 'Закуповуєте матеріали, але не знаєте реальну витрату на кожен об\'єкт',
      color: 'red'
    },
    {
      icon: AlertCircle,
      title: 'Рішення приймаються без цифр',
      description: 'Немає чітких даних для обґрунтованих бізнес-рішень',
      color: 'red'
    }
  ];

  const decisions = [
    {
      icon: TrendingUp,
      title: 'Чи можна брати новий об\'єкт зараз',
      description: 'Вистачить грошей на закупки та зарплати бригадам'
    },
    {
      icon: Users,
      title: 'Скільки платити підрядникам',
      description: 'Яку ціну закласти в кошторис, щоб залишався прибуток'
    },
    {
      icon: DollarSign,
      title: 'Коли можна виводити прибуток',
      description: 'Скільки можна взяти, не поставивши бізнес під ризик'
    },
    {
      icon: BarChart3,
      title: 'Чи вистачить грошей до оплати замовника',
      description: 'Планування касових розривів між авансами та остаточними розрахунками'
    }
  ];

  const tableFeatures = [
    {
      icon: Calendar,
      title: 'Річний звіт',
      description: 'Порівнюйте місяці, аналізуйте тренди виручки',
      example: 'Бачите, який місяць був найприбутковішим і чому'
    },
    {
      icon: HardHat,
      title: 'Напрями діяльності',
      description: 'Розділіть роботи по категоріям',
      example: 'Будівництво, Ремонти квартир, Фасади - окремо рентабельність кожного'
    },
    {
      icon: DollarSign,
      title: 'Статті витрат',
      description: 'Структуруйте витрати: Матеріали, Підрядники, Техніка',
      example: 'Контролюйте, скільки йде на матеріали, зарплати, оренду техніки'
    },
    {
      icon: Users,
      title: 'Проєкти (Об\'єкти)',
      description: 'Ведіть кожен об\'єкт окремо',
      example: 'ЖК "Сонячний", Ремонт квартири вул. Шевченка - окремі P&L'
    },
    {
      icon: PieChart,
      title: 'Рахунки',
      description: 'Готівка, банк, платіжні системи',
      example: 'Бачите баланс по касі, Monobank, ПриватБанк'
    },
    {
      icon: BarChart3,
      title: 'Операції',
      description: 'Кожна транзакція на своєму місці',
      example: 'Закупки матеріалів, виплати підрядникам, аванси від замовників'
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
      question: 'Підійде для невеликої ремонтної бригади?',
      answer: 'Так, система адаптується під будь-який масштаб. Навіть якщо у вас 2-3 об\'єкти одночасно, ви будете бачити реальну картину фінансів кожного.'
    },
    {
      question: 'Чи потрібно бухгалтерське знання?',
      answer: 'Ні. Система створена для власників, а не бухгалтерів. Все зрозуміло, є інструкції та приклади використання.'
    },
    {
      question: 'Чи можна вести облік по об\'єктах?',
      answer: 'Так, ви можете створити окремий проєкт для кожного об\'єкта будівництва або ремонту, щоб бачити його P&L, рентабельність та касовий розрив.'
    },
    {
      question: 'Скільки часу займає налаштування?',
      answer: '30-60 хвилин на початкове налаштування. Далі 5-10 хвилин на день для внесення даних та перегляду звітів.'
    },
    {
      question: 'Як контролювати витрати на матеріали по об\'єктах?',
      answer: 'Створіть проєкт для кожного об\'єкту. Записуйте всі закупки матеріалів з прив\'язкою до проєкту. Таблиця автоматично покаже витрати матеріалів по кожному об\'єкту окремо.'
    },
    {
      question: 'Як планувати касові розриви в будівництві?',
      answer: 'Використовуйте лист CashFlow. Записуйте дати авансів від замовників та планові виплати підрядникам. Таблиця покаже, коли та скільки грошей буде не вистачати.'
    },
    {
      question: 'Чи можна рахувати прибуток кожного об\'єкта окремо?',
      answer: 'Так, створюйте проєкт для кожного об\'єкта. Записуйте договір з замовником як дохід, а витрати на матеріали та підрядників - як витрати проєкту. Таблиця автоматично рахує прибуток.'
    },
    {
      question: 'Як відстежувати дебіторську заборгованість замовників?',
      answer: 'В листі "Операції" відмічайте статус "Не оплачено" для етапів робіт, які замовник ще не оплатив. Таблиця покаже загальну дебіторку по всіх об\'єктах.'
    },
    {
      question: 'Чи підходить для будівництва приватних будинків?',
      answer: 'Так, таблиця універсальна і підходить як для великих будівельних компаній, так і для приватних майстрів. Просто створюйте проєкт для кожного будинку або ремонту.'
    },
    {
      question: 'Як контролювати виплати підрядникам?',
      answer: 'Створіть контрагентів для кожного підрядника. Записуйте всі виплати з відміткою "Оплачено" або "Не оплачено". Таблиця покаже, кому і скільки ви винні.'
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
          { label: 'Будівництво та ремонт' }
        ]} />
      </div>

      {/* HERO BLOCK */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-100/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <HardHat className="w-4 h-4" />
                Для будівництва та ремонтів
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Фінанси будівництва<br />
                під повним контролем
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Одна фінансова система для будівельних компаній і ремонтних бригад:<br />
                об'єкти, кошториси, матеріали і гроші в обороті
              </p>

              <Button 
                onClick={scrollToDemo}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-600/20"
              >
                Подивитись, як це працює
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Right - Image with Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/0587cb692_freepik__-ai-clean-cinematic-composition-focused-on-emotion__14056.png"
                  alt="Облік будівництва - контроль об'єктів, матеріалів, підрядників та касових розривів для будівельної компанії"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Metrics Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:bottom-8 sm:left-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-5 border border-slate-100 backdrop-blur-sm bg-white/95 w-[220px] sm:w-64"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Сьогодні</h3>
                  <div className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] rounded-full font-medium">
                    Показники
                  </div>
                </div>
                
                <div className="space-y-2 sm:space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-orange-100 flex items-center justify-center">
                        <HardHat className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-600">Об'єктів</span>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-900">7</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-green-100 flex items-center justify-center">
                        <DollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-600">Виручка</span>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-900">₴842,300</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-600">Рентабельність</span>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-green-600">38.4%</span>
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
              Типові проблеми будівельних компаній
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
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
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
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <decision.icon className="w-6 h-6 text-orange-700" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              <FileSpreadsheet className="w-4 h-4" />
              Таблиця обліку фінансів PRO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Готова система для будівництва
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Універсальна таблиця PRO підходить як для великих будівельних компаній, так і для ремонтних бригад.<br />
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
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-700" />
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

      {/* HOW IT WORKS FOR CONSTRUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як використовувати таблицю PRO для будівництва
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Практичні приклади використання кожного листа таблиці для будівельної ніші
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
                    Вносите кожну транзакцію по об'єкту
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Фіксуйте всі операції: аванси від замовників, закупки матеріалів, виплати підрядникам, оренду техніки. 
                    Відмічайте статус оплати і прив'язуйте до об'єктів.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Оплачено?</div>
                        <div className="text-sm text-slate-600">Контролюйте, які платежі отримані, а які ще чекаєте</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Об'єкт</div>
                        <div className="text-sm text-slate-600">Кожна транзакція прив'язана до конкретного об'єкту</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Стаття</div>
                        <div className="text-sm text-slate-600">Матеріали, Підрядники, Техніка, Аванс від замовника</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-6 border border-slate-200 overflow-x-auto">
                  <div className="min-w-[280px] space-y-2 text-[10px] sm:text-xs">
                    <div className="grid pb-2 border-b border-slate-200 font-semibold text-slate-700" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div className="truncate">Дата</div>
                      <div className="truncate">Об'єкт</div>
                      <div className="truncate">Стаття</div>
                      <div className="text-right truncate">Сума</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>15.01</div>
                      <div className="truncate">ЖК Сонячний</div>
                      <div className="text-green-700 text-[9px] sm:text-xs truncate">Аванс</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-green-700">+150 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>15.01</div>
                      <div className="truncate">ЖК Сонячний</div>
                      <div className="text-rose-700 text-[9px] sm:text-xs truncate">Матеріали</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-rose-700">-45 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>16.01</div>
                      <div className="truncate">Кв. Шевченка</div>
                      <div className="text-rose-700 text-[9px] sm:text-xs truncate">Підрядники</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-rose-700">-12 000₴</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '45px 100px 70px 65px', gap: '6px' }}>
                      <div>17.01</div>
                      <div className="truncate">Кв. Шевченка</div>
                      <div className="text-green-700 text-[9px] sm:text-xs truncate">Етап 1</div>
                      <div className="text-right font-medium text-[9px] sm:text-xs text-green-700">+35 000₴</div>
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
                    Окремі P&L для кожного об'єкту
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Створюйте проєкт для кожного об'єкту будівництва або ремонту. 
                    Бачте окремо прибуток, витрати, рентабельність кожного об'єкту.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">ЖК "Сонячний"</div>
                        <div className="text-sm text-slate-600">Весь дохід та витрати об'єкту окремо</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Ремонт квартири</div>
                        <div className="text-sm text-slate-600">Скільки витратили на матеріали та скільки заробили</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Фасад торгового центру</div>
                        <div className="text-sm text-slate-600">Рентабельність об'єкту в реальному часі</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <div className="font-semibold text-slate-900 text-sm">ЖК "Новобудова" 3</div>
                        <div className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Завершено</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Дохід</div>
                          <div className="font-bold text-slate-900">₴850,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">₴620,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">27.1%</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-slate-900">СПА Козин</div>
                        <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">В процесі</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Дохід</div>
                          <div className="font-bold text-slate-900">₴280,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">₴195,000</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Рентабельність</div>
                          <div className="font-bold text-green-600">30.4%</div>
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
                    Створіть статті витрат, які важливі для будівництва: матеріали, підрядники, 
                    техніка, зарплати. Бачте динаміку витрат та їх частку від виручки.
                  </p>
                  <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <div className="font-semibold text-slate-700">Стаття</div>
                        <div className="font-semibold text-slate-700">Сума</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🏗️ Аванси від замовників</div>
                        <div className="font-bold text-green-700">+₴1,250,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">💰 Остаточні розрахунки</div>
                        <div className="font-bold text-green-700">+₴680,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🧱 Будматеріали</div>
                        <div className="font-bold text-rose-700">-₴520,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">👷 Зарплата підрядників</div>
                        <div className="font-bold text-rose-700">-₴480,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🚜 Оренда техніки</div>
                        <div className="font-bold text-rose-700">-₴85,000</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🔌 Комунальні витрати</div>
                        <div className="font-bold text-rose-700">-₴35,000</div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-slate-300">
                        <div className="font-bold text-slate-900">Чистий прибуток</div>
                        <div className="font-bold text-slate-900">₴810,000</div>
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
                          <span className="text-slate-600">Будматеріали</span>
                          <span className="font-medium">₴520,000 • 46.4%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: '46.4%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Підрядники</span>
                          <span className="font-medium">₴480,000 • 42.9%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500" style={{ width: '42.9%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Техніка</span>
                          <span className="font-medium">₴85,000 • 7.6%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: '7.6%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Рентабельність бізнесу</div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">42.0%</div>
                    <div className="text-xs text-slate-500">
                      З кожної гривні виручки — 42 копійки чистого прибутку
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PURCHASE BLOCK */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/20 rounded-full blur-3xl" />
        
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-300">
                  Готова таблиця яка підходить для будівництва
                </span>
              </h2>

              <p className="text-xl text-orange-100/80 mb-8 leading-relaxed">
                Універсальна таблиця для обліку: Об'єкти, Витрати, Статті, Проєкти, CashFlow, Бюджет, Рахунки, Річний звіт та інші
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Контроль витрат матеріалів по кожному об\'єкту',
                  'Точний розрахунок собівартості робіт',
                  'Відстеження дебіторки та авансів',
                  'Планування касових розривів і закупок',
                  'P&L кожного об\'єкта та загальна рентабельність',
                  'Контроль виплат підрядникам і постачальникам'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
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
                <span className="text-orange-200">1900+ користувачів</span>
              </div>
            </motion.div>

            {/* Right - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-2xl opacity-20 z-0" />

                <div className="relative bg-white rounded-3xl p-8 lg:p-10 z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
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
                        <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
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
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-100 text-orange-700 text-sm whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold">Вигода: {parseInt(product.oldPrice) - parseInt(product.price)} грн</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsPaymentModalOpen(true)}
                    size="lg"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg rounded-xl transition-colors"
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
              Облік будівництва: керівництво для підрядників
            </h2>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Базові принципи обліку в будівництві</h3>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>Облік по об'єктах - основа всього.</strong> Кожен об'єкт будівництва або ремонту - це окремий проєкт з власним бюджетом. 
                  Договір з замовником = дохід проєкту. Витрати на матеріали, підрядників, техніку = витрати проєкту. 
                  Різниця = ваш чистий прибуток з об'єкту. Без обліку по об'єктах ви не побачите, який об'єкт прибутковий, а який збитковий.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Касові розриви - головний ризик.</strong> Типова ситуація: отримали аванс 50% від замовника, витратили на матеріали та підрядників 70% 
                  від вартості об'єкту. Чекаєте остаточний розрахунок через місяць, а платити іншим підрядникам треба зараз. 
                  Система обліку повинна показувати планові надходження та виплати, щоб уникати касових розривів.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Контроль матеріалів - економія до 15%.</strong> Будматеріали часто перевитрачаються на об'єктах через недостатній контроль. 
                  Купили цементу на 50 тис грн, а використали тільки на 42 тис. Де 8 тис? Без обліку витрат матеріалів по об'єктах ви втрачаєте гроші щомісяця.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Дебіторська заборгованість.</strong> Ви завершили етап робіт, замовник повинен оплатити, але тягне з оплатою. 
                  Скільки загалом вам винні? Які об'єкти заборговані? Система обліку повинна показувати всю дебіторку одним поглядом.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Порівняння: Excel vs Готова таблиця vs Програми обліку</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-slate-300">
                      <th className="text-left py-3 px-2 font-bold text-slate-900">Критерій</th>
                      <th className="text-center py-3 px-2 font-bold text-slate-900">Excel "з нуля"</th>
                      <th className="text-center py-3 px-2 font-bold text-orange-700 bg-orange-100 rounded-t-lg">Таблиця PRO</th>
                      <th className="text-center py-3 px-2 font-bold text-slate-900">Програми обліку</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-200">
                      <td className="py-3 px-2">Час налаштування</td>
                      <td className="text-center py-3 px-2">20-40 годин</td>
                      <td className="text-center py-3 px-2 bg-orange-50 font-bold text-green-700">30 хвилин</td>
                      <td className="text-center py-3 px-2">3-5 днів</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-3 px-2">Вартість</td>
                      <td className="text-center py-3 px-2">Безкоштовно</td>
                      <td className="text-center py-3 px-2 bg-orange-50 font-bold text-green-700">1730 грн</td>
                      <td className="text-center py-3 px-2">від $50/міс</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-3 px-2">Автозвіти</td>
                      <td className="text-center py-3 px-2">Потрібно робити вручну</td>
                      <td className="text-center py-3 px-2 bg-orange-50 font-bold text-green-700">Готові формули</td>
                      <td className="text-center py-3 px-2">Є, але складні</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="py-3 px-2">Контроль по об'єктах</td>
                      <td className="text-center py-3 px-2">Треба налаштовувати</td>
                      <td className="text-center py-3 px-2 bg-orange-50 font-bold text-green-700">Вбудовано</td>
                      <td className="text-center py-3 px-2">Є</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold">Підходить для будівництва</td>
                      <td className="text-center py-3 px-2">⚠️ Якщо вмієте</td>
                      <td className="text-center py-3 px-2 bg-orange-50 font-bold text-green-700">✅ Ідеально</td>
                      <td className="text-center py-3 px-2">✅ Так, але дорого</td>
                    </tr>
                  </tbody>
                </table>
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
              Інші рішення для будівельного бізнесу
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to={createPageUrl('ProductEstimate')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Калькулятор кошторисів</h3>
                <p className="text-sm text-slate-600 mb-3">Автоматичне створення кошторисів з експортом в PDF</p>
                <div className="text-amber-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('ProductWarehouse')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Облік складу</h3>
                <p className="text-sm text-slate-600 mb-3">Контроль будматеріалів та залишків на складі</p>
                <div className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('CustomSolution')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Hammer className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Індивідуальне рішення</h3>
                <p className="text-sm text-slate-600 mb-3">Система контролю для великих будівельних компаній</p>
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