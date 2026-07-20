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
  DollarSign,
  Calculator,
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

export default function ProductEstimate() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = 'Калькулятор кошторисів (смет) | Автоматичне формування у PDF | Шаблони робіт | Історія проєктів | ✅ 600+ будівельників';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Готовий калькулятор кошторисів ⭐ Автоматичний розрахунок вартості робіт • Експорт смети у PDF за 1 клік • Готові шаблони робіт • Історія всіх кошторисів. Для будівництва, ремонту, HORECA. Економія 5+ годин на тиждень. 600+ задоволених фахівців!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Готовий калькулятор кошторисів ⭐ Автоматичний розрахунок вартості робіт • Експорт смети у PDF за 1 клік • Готові шаблони робіт • Історія всіх кошторисів. Для будівництва, ремонту, HORECA. Економія 5+ годин на тиждень. 600+ задоволених фахівців!';
      document.head.appendChild(meta);
    }
    
    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'калькулятор кошторисів, кошторис онлайн, смета будівельна, шаблон кошторису, автоматичний кошторис, експорт PDF кошторис, Google Sheets кошторис, будівельна смета, калькулятор смети, розрахунок кошторису';

    // Open Graph Tags
    const setOgTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    setOgTag('og:title', 'Калькулятор кошторисів (смети) в Google Таблицях | FinProsto');
    setOgTag('og:description', 'Автоматичний калькулятор кошторисів з експортом в PDF. Автоматизуйте розрахунки, керуйте проєктами та створюйте професійні документи. Від 410 ₴ одноразово.');
    setOgTag('og:type', 'product');
    setOgTag('og:url', window.location.href);
    setOgTag('og:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/be41b0dfa_.png');
    setOgTag('og:image:width', '1200');
    setOgTag('og:image:height', '630');
    setOgTag('og:site_name', 'FinProsto');
    setOgTag('og:locale', 'uk_UA');
    setOgTag('product:price:amount', '410');
    setOgTag('product:price:currency', 'UAH');

    // Twitter Card Tags
    const setTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    
    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', 'Калькулятор кошторисів (смети) в Google Таблицях');
    setTwitterTag('twitter:description', 'Автоматичний калькулятор кошторисів з експортом в PDF. Автоматизація розрахунків та професійне оформлення документів. Від 410 ₴');
    setTwitterTag('twitter:image', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/be41b0dfa_.png');

    // JSON-LD Structured Data for Product
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Калькулятор кошторисів (смети) в Google Таблицях",
      "description": "Автоматичний калькулятор кошторисів з експортом в PDF. Шаблон надає готову структуру для створення професійних кошторисів з автоматичними розрахунками.",
      "image": [
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/be41b0dfa_.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/baa23f2cf_.png",
        "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/bcd017683_PDF.png"
      ],
      "brand": {
        "@type": "Brand",
        "name": "FinProsto"
      },
      "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "priceCurrency": "UAH",
        "price": "410",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "FinProsto"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "600",
        "bestRating": "5",
        "worstRating": "1"
      },
      "category": "Бізнес програмне забезпечення"
    };

    let scriptTag = document.getElementById('product-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'product-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    // JSON-LD Breadcrumb
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Головна",
          "item": window.location.origin + "/#/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Продукти",
          "item": window.location.origin + "/#/Products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Калькулятор кошторисів",
          "item": window.location.href
        }
      ]
    };

    let breadcrumbScript = document.getElementById('breadcrumb-structured-data');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-structured-data';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);

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

    // Cleanup function
    return () => {
      const tagsToRemove = [
        'meta[name="description"]',
        'meta[name="keywords"]',
        'meta[property^="og:"]',
        'meta[name^="twitter:"]',
        '#product-structured-data',
        '#breadcrumb-structured-data'
      ];
      
      tagsToRemove.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
      });
    };
  }, []);
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productInfo = {
    title: 'Калькулятор кошторисів',
    price: '410',
    oldPrice: '590',
    discount: '-30%',
    demoUrl: 'https://docs.google.com/spreadsheets/d/1example-estimate/edit'
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
      icon: Calculator,
      title: 'Автоматизація',
      description: 'Забудьте про складні ручні розрахунки. Калькулятор автоматично виконує всі необхідні розрахунки, що економить ваш час і зменшує ймовірність помилок'
    },
    {
      icon: TrendingUp,
      title: 'Гнучкість',
      description: 'Налаштовуйте калькулятор кошторису під свої потреби, додаючи і видаляючи розділи, щоб він відповідав специфіці вашого проекту'
    },
    {
      icon: DollarSign,
      title: 'Універсальність',
      description: 'Легко керуйте цінами на матеріали, працю та обладнання, використовуючи свої власні значення або стандартні прайси'
    },
    {
      icon: FileSpreadsheet,
      title: 'Експорт в PDF',
      description: 'Автоматично отримуйте готові звіти та експортуйте дані у форматі PDF для обміну інформацією з клієнтом або партнерами'
    },
    {
      icon: BarChart3,
      title: 'Інструкція',
      description: 'Крок за кроком пояснюється, як ефективно використовувати шаблон, щоб ви з легкістю могли рахувати смети без зайвих труднощів'
    }
  ];

  const screenshots = [
    {
      title: 'Лист "Кошторис"',
      description: 'Головний лист для створення кошторису',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/be41b0dfa_.png',
      features: [
        'Список робіт та послуг проекту',
        'Автоматичні розрахунки вартості',
        'Вартість матеріалів та робіт',
        'Загальна сума проекту'
      ]
    },
    {
      title: 'Лист "Готовий кошторис"',
      description: 'Оформлений кошторис готовий до друку',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/baa23f2cf_.png',
      features: [
        'Професійний вигляд документу',
        'Детальний розпис робіт та матеріалів',
        'Розрахунок знижок та підсумкової суми',
        'Готовий до відправки клієнту'
      ]
    },
    {
      title: 'Лист "Експорт в PDF"',
      description: 'Автоматичне формування документу',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/bcd017683_PDF.png',
      features: [
        'Автоматичне створення PDF файлу',
        'Відправка кошторису клієнту',
        'Брендування документу логотипом',
        'Професійний вигляд смети'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Продукти', href: createPageUrl('Products') },
              { label: 'Калькулятор кошторисів' }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 mb-4">
                Для кошторисів
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Автоматичний калькулятор
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500"> кошторису</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Шаблон надає готову структуру, яка полегшує вашу роботу та забезпечує надійні результати. Можливість друку та відправлення у форматі PDF
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">4.7/5</span>
                <span className="text-slate-500">600+ користувачів</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-slate-900">410</span>
                    <span className="text-2xl font-bold text-slate-900">₴</span>
                    <span className="text-xl text-slate-400 line-through">590 ₴</span>
                  </div>
                  <p className="text-sm text-slate-500">Одноразова оплата • Без підписок</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg"
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
                <div className="bg-violet-600 h-3" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Калькулятор кошторису</div>
                      <div className="text-sm text-slate-500">Автоматизація розрахунків</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Автоматичні розрахунки', 'Експорт в PDF', 'Шаблони робіт', 'База клієнтів', 'Історія кошторисів', 'Інструкція'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-violet-500 flex-shrink-0" />
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
              Можливості шаблону
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Все необхідне для професійної роботи з кошторисами
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet-600" />
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
              Кожен лист таблиці створений для максимальної ефективності роботи
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
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <img 
                      src={sheet.image} 
                      alt={`${sheet.title} - ${sheet.description}. FinProsto калькулятор кошторисів`}
                      title={sheet.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      width="1200"
                      height="800"
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

      {/* SEO Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Як правильно складати кошторис: керівництво 2026
            </h2>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Структура професійного кошторису</h3>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>1. Основні роботи.</strong> Перелік всіх робіт з одиницями виміру та розцінками: "Штукатурка стін 45 м² × 150 грн/м² = 6,750 грн". 
                  Це дає клієнту прозорість розрахунків і знижує питання про ціноутворення.
                </p>
                
                <p className="leading-relaxed">
                  <strong>2. Матеріали.</strong> Деталізуйте конкретні матеріали з брендами: "Фарба Dulux 10л × 850 грн = 8,500 грн". 
                  Клієнт бачить якість матеріалів і розуміє обґрунтованість ціни.
                </p>
                
                <p className="leading-relaxed">
                  <strong>3. Накладні витрати (5-10%).</strong> Транспорт, вивіз сміття, дрібні витрати. Обов'язково закладайте, інакше працюватимете в мінус.
                </p>
                
                <p className="leading-relaxed">
                  <strong>4. Умови оплати.</strong> Аванс 30%, проміжні платежі 50%, остаточний розрахунок 20% після здачі об'єкта. Це захищає обидві сторони.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Що робити ПРАВИЛЬНО
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✓ Закладайте 15-20% резерв на непередбачені витрати</li>
                  <li>✓ Вказуйте терміни виконання етапів робіт</li>
                  <li>✓ Деталізуйте матеріали з конкретними брендами</li>
                  <li>✓ Експортуйте кошторис в PDF для презентабельності</li>
                  <li>✓ Пропонуйте варіанти (економ/стандарт/преміум)</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-red-600" />
                  Чого НЕ робити
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>✗ Округляти "на око" без розрахунків</li>
                  <li>✗ Не враховувати складність підготовчих робіт</li>
                  <li>✗ Писати "матеріали" без деталізації</li>
                  <li>✗ Обіцяти нереальні терміни заради угоди</li>
                  <li>✗ Забувати про ПДВ та податки в ціні</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Типові помилки при складанні кошторисів</h3>
              
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Занижена вартість робіт через конкуренцію</p>
                    <p className="text-slate-600">Боїтесь втратити клієнта, занижуєте ціну. В результаті працюєте майже в нуль або в мінус. Краще відмовитись від проєкту, ніж працювати собі в збиток.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Не враховано складність демонтажу</p>
                    <p className="text-slate-600">Зняти стару плитку, вивезти сміття, підготувати поверхню - це час і гроші. Якщо не закласти в кошторис, витрати "з'їдять" весь прибуток.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Ціни на матеріали змінюються, а кошторис - ні</p>
                    <p className="text-slate-600">Склали кошторис місяць тому, ціни на матеріали зросли на 10-15%, а договір підписаний по старій ціні. Фіксуйте в договорі: "ціни актуальні 14 днів".</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-500/10 to-violet-500/10 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Готові автоматизувати кошториси?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Економте час та зменшуйте ймовірність помилок
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg shadow-violet-600/20"
                >
                  Придбати за 410 ₴
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