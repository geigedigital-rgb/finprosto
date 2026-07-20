import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowLeft, 
  Check, 
  Star,
  FileSpreadsheet,
  TrendingUp,
  Package,
  BarChart3,
  Users,
  PieChart,
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

export default function ProductWarehouse() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = 'Таблиця обліку Складу | Контроль залишків та продажів | Надходження, відвантаження, рентабельність | ✅ 800+ магазинів';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Готова таблиця обліку складу + аналіз продажів ⭐ Автоматичний контроль залишків • Надходження та відвантаження • Аналіз рентабельності товарів • Звіти по постачальникам. Ідеально для інтернет-магазинів та виробництва. 800+ задоволених користувачів!');
    document.head.appendChild(metaDescription);
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік складу, таблиця складу, google sheets склад, управління запасами, abc аналіз товарів, облік товарів інтернет магазин, складський облік україна');
    document.head.appendChild(metaKeywords);
    
    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Таблиця обліку складу + аналіз продажів - Google Sheets шаблон');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Професійний шаблон для обліку складу: надходження, відвантаження, залишки, ABC аналіз. 1100₴ • Без підписок');
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
    ogImage.setAttribute('content', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5b20a0ada_.png');
    document.head.appendChild(ogImage);
    
    const ogPrice = document.querySelector('meta[property="og:price:amount"]') || document.createElement('meta');
    ogPrice.setAttribute('property', 'og:price:amount');
    ogPrice.setAttribute('content', '1100');
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
    twitterTitle.setAttribute('content', 'Таблиця обліку складу + аналіз продажів');
    document.head.appendChild(twitterTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Професійний шаблон для управління складом. 1100₴ • 4.8/5 ⭐');
    document.head.appendChild(twitterDescription);
    
    // JSON-LD Structured Data for Google Shopping
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Таблиця обліку складу + аналіз продажів",
      "description": "Професійний шаблон для управління складом: надходження та відвантаження товарів, автоматичний розрахунок залишків, ABC аналіз продажів, прогнозування попиту, контроль постачальників. Готовий шаблон Google Sheets.",
      "image": [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5b20a0ada_.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/b65c16ad1_.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/8e2724f36_.png"
      ],
      "brand": {
        "@type": "Brand",
        "name": "FinProsto"
      },
      "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "priceCurrency": "UAH",
        "price": "1100",
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
        "ratingValue": "4.8",
        "reviewCount": "2400",
        "bestRating": "5",
        "worstRating": "1"
      },
      "category": "Бізнес та фінанси",
      "sku": "FINPROSTO-WAREHOUSE-001",
      "productID": "finprosto-warehouse",
      "features": [
        "Облік надходжень товарів",
        "Контроль відвантажень",
        "Автоматичний розрахунок залишків",
        "ABC аналіз продажів",
        "Прогнозування попиту",
        "Контроль постачальників",
        "Аналіз рентабельності"
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
        "name": "Таблиця обліку складу",
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
    title: 'Таблиця обліку складу + аналіз продажів',
    price: '1100',
    oldPrice: '1490',
    discount: '-26%',
    demoUrl: 'https://docs.google.com/spreadsheets/d/1example-warehouse/edit'
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
      icon: Package,
      title: 'Надходження та відвантаження',
      description: 'Чітка структура таблиці, яка дозволить ефективно відстежувати товари та відображати їх актуальну кількість. Це допоможе уникнути проблеми неправильного розрахунку запасів'
    },
    {
      icon: BarChart3,
      title: 'Аналіз ефективності продажів',
      description: 'Ви отримаєте ABC аналіз по кожному товару - це дає картину які товари стоять на першому місці за прибутковістю. Показники дебіторської/кредиторської заборгованості'
    },
    {
      icon: TrendingUp,
      title: 'Прогнозування попиту',
      description: 'Таблиця розраховує тенденції продажів, дасть розуміти коли попит на певні товари зростає або зменшується. Це допоможе планувати закупівлі'
    },
    {
      icon: Users,
      title: 'Контроль постачальників',
      description: 'Забезпечте стабільність постачання товарів, знизьте ризики затримок і проблем з якістю, а також ведіть ефективний контроль над вартістю закупок'
    },
    {
      icon: PieChart,
      title: 'Залишки на складі',
      description: 'Шаблон дозволить забезпечити належне управління запасами, уникнути дефіциту або перепродажів, а також планувати закупівлі з урахуванням реальних потреб'
    }
  ];

  const screenshots = [
    {
      title: 'Лист "Надходження"',
      description: 'Облік всіх закупівель та надходжень товару',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5b20a0ada_.png',
      features: [
        'Реєстр надходження товарів на склад',
        'Дата та постачальник кожної поставки',
        'Кількість та вартість товару',
        'Автоматичні розрахунки залишків'
      ]
    },
    {
      title: 'Лист "Відвантаження"',
      description: 'Контроль продажів та відвантажень',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/b65c16ad1_.png',
      features: [
        'Продажі та списання товарів зі складу',
        'Дата операції та клієнт',
        'Кількість відвантаженого товару',
        'Виручка від продажу'
      ]
    },
    {
      title: 'Лист "Залишки"',
      description: 'Поточний стан складських запасів',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/8e2724f36_.png',
      features: [
        'Автоматичний розрахунок залишків',
        'Актуальна кількість кожного товару',
        'Вартість залишків на складі',
        'Контроль мінімальних запасів'
      ]
    },
    {
      title: 'Лист "Аналіз продажів"',
      description: 'ABC аналіз та статистика',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/73e280840_.png',
      features: [
        'Прибутковість кожного товару',
        'Статистика продажів по періодах',
        'Розрахунок рентабельності',
        'Тенденції попиту на товари'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Продукти', href: createPageUrl('Products') },
              { label: 'Таблиця обліку складу' }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-4">
                Для складу
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Шаблон обліку складу
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> + аналіз продажів</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Не втрачайте час та енергію на складський облік. Шаблон розв'яже ваші проблеми і забезпечить ефективне управління складом
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">4.8/5</span>
                <span className="text-slate-500">2400+ користувачів</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-slate-900">1 100</span>
                    <span className="text-2xl font-bold text-slate-900">₴</span>
                    <span className="text-xl text-slate-400 line-through">1 490 ₴</span>
                  </div>
                  <p className="text-sm text-slate-500">Одноразова оплата • Без підписок</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
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
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-blue-600 h-3" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Package className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Складський облік</div>
                      <div className="text-sm text-slate-500">Повний контроль</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Надходження товарів', 'Відвантаження', 'Залишки на складі', 'ABC аналіз', 'Прогноз попиту', 'Контроль постачальників'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
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
              Функції таблиці
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Шаблон містить всю необхідну організацію даних для керування складом
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
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
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={sheet.image} 
                      alt={`${sheet.title} - ${sheet.description} | Таблиця обліку складу для бізнесу`}
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

      {/* Bundle Promo Section */}
      <BundlePromoSection onBuyBundle={handleBuyBundle} />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Часті питання про облік складу
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Як організувати облік товарів на складі?',
                a: 'Облік складу включає: 1) Надходження - записуйте кожну закупку товару (дата, постачальник, кількість, вартість). 2) Відвантаження - фіксуйте продажі та списання. 3) Залишки - таблиця автоматично рахує, скільки товару є. 4) Інвентаризація - регулярно звіряйте фактичні залишки.'
              },
              {
                q: 'Що таке ABC аналіз товарів і навіщо він потрібен?',
                a: 'ABC аналіз - класифікація товарів за прибутковістю. A-товари (20%) дають 80% прибутку - їм максимальна увага. B-товари (30%) - середня прибутковість. C-товари (50%) - мінімальний прибуток. Наша таблиця автоматично робить ABC аналіз.'
              },
              {
                q: 'Як контролювати залишки товарів?',
                a: 'Вносьте надходження та відвантаження в таблицю. Лист "Залишки" автоматично покаже поточну кількість кожного товару. Встановіть мінімальний залишок - таблиця попередить, коли товар закінчується.'
              },
              {
                q: 'Як вести облік постачальників?',
                a: 'Створіть контрагента для кожного постачальника. Записуйте всі закупки з прив\'язкою до постачальника. Таблиця покаже: скільки купили у кожного, хто надійніший, хто дає кращі ціни.'
              },
              {
                q: 'Чи можна вести облік на декількох складах?',
                a: 'Так, створіть окремий "Напрям" або "Рахунок" для кожного складу. Або використовуйте декілька копій таблиці для кожного складу окремо.'
              },
              {
                q: 'Як прогнозувати попит на товари?',
                a: 'Аналізуйте лист "Аналіз продажів" - бачите динаміку продажів кожного товару по місяцях. Якщо товар продається 50 шт/міс, закладайте закупку на місяць вперед + страховий запас.'
              },
              {
                q: 'Чи підходить для інтернет-магазину?',
                a: 'Так, таблиця ідеальна для інтернет-магазинів. Контролюйте залишки при онлайн-продажах, уникайте ситуацій "товар закінчився", бачте які позиції ходові.'
              },
              {
                q: 'Як вести облік при роботі з маркетплейсами?',
                a: 'Створіть окремі "Напрями" для кожного маркетплейсу: Rozetka, Prom, Amazon. Записуйте продажі та комісії окремо. Побачите рентабельність кожного каналу продажів.'
              }
            ].map((item, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white rounded-3xl p-12 border border-slate-200"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Готові оптимізувати облік складу?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Підвищте ефективність на 15% вже зараз
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-600/20"
                >
                  Придбати за 1 100 ₴
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
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