import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowLeft, 
  Check, 
  Star,
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  PieChart,
  BarChart3,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';
import BundlePromoSection from '../components/product/BundlePromoSection';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function ProductProPage() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Таблиця обліку фінансів PRO | Повний контроль бізнесу | CashFlow, P&L, річні звіти | Контроль оплат | ✅ 1900+ користувачів';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Професійна таблиця обліку фінансів PRO ⭐ Автоматичні звіти CashFlow та P&L • Контроль оплати • План/Факт аналіз • Річний звіт • Управління проєктами. Універсальна структура для всіх видів бізнесу. 1900+ задоволених клієнтів!');
    document.head.appendChild(metaDescription);
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'таблиця обліку фінансів, google sheets шаблон, облік фінансів бізнесу, cashflow таблиця, p&l звіт, фінансовий облік україна, готова таблиця для бізнесу');
    document.head.appendChild(metaKeywords);
    
    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Таблиця обліку фінансів PRO - Готовий шаблон Google Sheets');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Професійна таблиця для управління фінансами: P&L, CashFlow, проєкти, річний звіт. 1730₴ • Без підписок');
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
    twitterTitle.setAttribute('content', 'Таблиця обліку фінансів PRO');
    document.head.appendChild(twitterTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Професійна таблиця для управління фінансами бізнесу. 1730₴ • 4.9/5 ⭐');
    document.head.appendChild(twitterDescription);
    
    // JSON-LD Structured Data for Google Shopping
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Таблиця обліку фінансів PRO",
      "description": "Універсальна таблиця для обліку фінансів бізнесу: Продажі, Витрати, Статті, Проєкти, CashFlow, Бюджет, Рахунки, Річний звіт. Готовий шаблон Google Sheets з автоматичними розрахунками.",
      "image": [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/fe8b74091_.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/ae458c6e8_.png"
      ],
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
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "FinProsto"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1900",
        "bestRating": "5",
        "worstRating": "1"
      },
      "category": "Бізнес та фінанси",
      "sku": "FINPROSTO-PRO-001",
      "productID": "finprosto-pro",
      "features": [
        "Автоматичні P&L та CashFlow звіти",
        "Контроль оплати замовлень",
        "План/Факт аналіз",
        "Річний звіт з порівнянням",
        "Управління проєктами",
        "База контрагентів",
        "Облік по статтях",
        "Управління рахунками"
      ]
    });
    document.head.appendChild(script);
    
    // Breadcrumb Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Головна",
        "item": window.location.origin
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Продукти",
        "item": window.location.origin + "/#/Products"
      }, {
        "@type": "ListItem",
        "position": 3,
        "name": "Таблиця обліку фінансів PRO",
        "item": window.location.href
      }]
    });
    document.head.appendChild(breadcrumbScript);
    
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
    
    return () => {
      // Cleanup meta tags on unmount
      const metas = [metaDescription, metaKeywords, ogTitle, ogDescription, ogType, ogUrl, ogImage, ogPrice, ogCurrency, twitterCard, twitterTitle, twitterDescription];
      metas.forEach(meta => {
        if (meta.parentNode) meta.parentNode.removeChild(meta);
      });
      if (script.parentNode) script.parentNode.removeChild(script);
      if (breadcrumbScript.parentNode) breadcrumbScript.parentNode.removeChild(breadcrumbScript);
    };
  }, []);
  
  const productInfo = {
    title: 'Таблиця обліку фінансів PRO',
    price: '1730',
    oldPrice: '2090',
    discount: '-30%',
    demoUrl: 'https://docs.google.com/spreadsheets/d/11Wd50AtAzX9DyxbFIdnWPlvp8NzewUUY0ni0mcfAJj8/edit?usp=drive_link'
  };

  const handleBuyBundle = () => {
    setSelectedProduct({
      title: 'Набір всіх таблиць для Бізнесу',
      description: 'Комплексне рішення: PRO таблиця фінансів + Склад + Кошториси + Lite версія',
      price: '1 240',
      oldPrice: '3 669',
      discount: '-70%',
      items: [
        'Таблиця обліку фінансів PRO (1 730 ₴)',
        'Таблиця обліку Складу (1 100 ₴)',
        'Калькулятор кошторисів (410 ₴)',
        'Таблиця для бізнесу Lite (429 ₴)'
      ]
    });
    setIsPaymentModalOpen(true);
  };
  const features = [
    {
      icon: Calendar,
      title: 'Річний звіт',
      description: 'Автоматичний розрахунок показників: Виторг - Витрати - EBITDA - Рентабельність - річний приріст. Порівняння показників з минулим роком'
    },
    {
      icon: TrendingUp,
      title: 'Напрями',
      description: 'Розділ для заповнення ваших основних напрямів діяльності бізнесу для зручного розгрупування звіту руху грошей'
    },
    {
      icon: DollarSign,
      title: 'Статті',
      description: 'Поділ ваших транзакцій за відповідністю статтей (наприклад: Реклама, Зарплата, Прибутки, Податки)'
    },
    {
      icon: Users,
      title: 'Проєкти',
      description: 'Додавайте проєкти та керуйте їх показниками: Стан, Відповідальний, Напрям, Замовник, Прибуток, Рентабельність'
    },
    {
      icon: PieChart,
      title: 'Рахунки',
      description: 'Розподіл по рахункам. Корисно якщо ви маєте декілька бізнес рахунків або приймаєте оплату готівкою та безготівковим способом'
    },
    {
      icon: BarChart3,
      title: 'Операції',
      description: 'Головний лист де потрібно вписувати транзакції та вибирати із випадаючого списку відповідні параметри'
    }
  ];

  const screenshots = [
    {
      title: 'Лист "Реальний звіт"',
      description: 'Загальний огляд фінансів вашого бізнесу',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png',
      features: [
        'Усього грошей: Загальна сума грошей',
        'Звіт за цей місяць: інформація про поточний місяць',
        'Ключові клієнти: важливі клієнти або партнери',
        'EBITDA: прибуток до відрахування податків',
        'План та Факт: порівняння планових і фактичних показників'
      ]
    },
    {
      title: 'Лист "Операції"',
      description: 'Ведення всіх фінансових операцій',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/fe8b74091_.png',
      features: [
        'Оплачено?: відмітка про здійснену оплату',
        'Дата обліку: дата проведення операції',
        'Рахунок: рахунок пов\'язаний з операцією',
        'Контрагент: з ким була здійснена операція',
        'Стаття: категорія операції',
        'Проєкт: пов\'язаний проєкт',
        'Коммент: додаткові коментарі'
      ]
    },
    {
      title: 'Лист "Проєкти"',
      description: 'Контроль проєктів та їх показників',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/ae458c6e8_.png',
      features: [
        'Відстежування різних проєктів',
        'Стан, Відповідальний, Напрям, Клієнт',
        'Прибуток, Витрати та інші показники',
        'Порівняння фактичних показників з плановими',
        'Оцінка рентабельності кожного проєкту'
      ]
    },
    {
      title: 'Лист "Статті"',
      description: 'Категорії доходів і витрат',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/c565f0c12_.png',
      features: [
        'Відстежування різних статей діяльності',
        'Загальні показники за весь період',
        'Показники за місяць',
        'Встановлення типу: ДОХІД або ВИТРАТИ'
      ]
    },
    {
      title: 'Лист "Контрагенти"',
      description: 'База клієнтів та постачальників',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/b7629d61f_.png',
      features: [
        'Інформація про контрагентів',
        'Прибуток/Витрати за весь період',
        'Прибуток/Витрати за місяць',
        'Збереження реквізитів контрагента'
      ]
    },
    {
      title: 'Лист "Напрями"',
      description: 'Напрями діяльності вашого бізнесу',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/f43d49992_.png',
      features: [
        'Один напрям або декілька',
        'Прибуток та Витрати по напрямам',
        'Рентабельність кожного напряму',
        'Фінансові результати діяльності'
      ]
    },
    {
      title: 'Лист "Рахунки"',
      description: 'Управління рахунками',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/1b1fe7e32_.png',
      features: [
        'Готівковий та банківські рахунки',
        'Початковий залишок на рахунку',
        'Баланс - план та факт',
        'Рух коштів між рахунками'
      ]
    },
    {
      title: 'Лист "Річний звіт"',
      description: 'Аналітика за рік',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/661c1b828_.png',
      features: [
        'Окремі місяці року',
        'Загальні показники за кожний місяць',
        'Порівняння з попереднім роком',
        'РЕНТАБЕЛЬНІСТЬ - ВИТОРГ - ВИТРАТИ - EBITDA'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Продукти', href: createPageUrl('Products') },
              { label: 'Таблиця фінансів PRO' }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 mb-4">
                Найпопулярніша
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Таблиця для обліку фінансів
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500"> (PRO)</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Універсальна таблиця для обліку: Продажі, Витрати, Статті, Проєкти, CashFlow, Бюджет, Рахунки, Річний звіт та інші
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">4.9/5</span>
                <span className="text-slate-500">1900+ користувачів</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-slate-900">1 730</span>
                    <span className="text-2xl font-bold text-slate-900">₴</span>
                    <span className="text-xl text-slate-400 line-through">2 190 ₴</span>
                  </div>
                  <p className="text-sm text-slate-500">Одноразова оплата • Без підписок</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
                >
                  Придбати зараз
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="rounded-2xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.10)] overflow-hidden">
                {/* Minimal window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="ml-3 text-[11px] text-slate-400 font-medium truncate">
                    Таблиця обліку фінансів PRO
                  </span>
                </div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png"
                  alt="Скріншот таблиці обліку фінансів PRO — реальний звіт"
                  className="w-full h-auto object-contain bg-white"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Що входить в таблицю?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Комплексне рішення для управління фінансами вашого бізнесу
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Детальний огляд таблиці
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Кожен лист таблиці створений для максимальної ефективності обліку
            </p>
          </motion.div>

          <div className="space-y-8">
            {screenshots.map((sheet, index) => (
              <motion.div
                key={sheet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200"
              >
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{sheet.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">{sheet.description}</p>
                    <div className="space-y-2">
                      {sheet.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={sheet.image} 
                      alt={`${sheet.title} - ${sheet.description} | Таблиця обліку фінансів PRO для бізнесу`}
                      title={sheet.title}
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Часті питання
            </h2>
          </motion.div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Якщо мені не повністю підходить?</h3>
              <p className="text-slate-600">
                Наша таблиця є універсальною і ідеально підходить для 90% бізнесів. Ми грамотно підійшли до її розробки, аналізуючи різноманітні сфери бізнесу. Навіть якщо потрібні дрібні налаштування або адаптація, ми швидко та ефективно це виконаємо.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Якщо мені зовсім не підходить?</h3>
              <p className="text-slate-600">
                Якщо наші готові шаблони не відповідають вашим потребам на 100%, наша команда готова адаптувати або доповнити їх спеціально для вашого бізнесу. Ми зробимо таблицю максимально зручною, враховуючи всі особливості вашої діяльності та бізнес-процесів.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Promo Section */}
      <BundlePromoSection onBuyBundle={handleBuyBundle} />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 border-2 border-slate-200 shadow-sm text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Готові почати контролювати фінанси?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Отримайте доступ до таблиці вже зараз та почніть вести облік професійно
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
              >
                Придбати за 1 730 ₴
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => {
          setIsPaymentModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct || productInfo}
      />
    </div>
  );
}