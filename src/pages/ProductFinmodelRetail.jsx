import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Store,
  Check,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Target,
  LineChart,
  Users,
  CreditCard,
  MapPin,
  ChevronDown,
  Sparkles,
  ShoppingBag,
  BarChart3,
  Wallet
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';

export default function ProductFinmodelRetail() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const product = {
    id: 'finmodel-retail',
    title: 'Фінансова модель Офлайн-магазину',
    price: '2 500',
    badge: 'Офлайн-магазин',
    demoUrl: null
  };

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Фінансова модель для офлайн-магазину - Прогноз EBITDA та чистого прибутку | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Детальна фінансова модель для роздрібного магазину з розрахунком виторгу від трафіку, аналізом витрат на оренду, персонал, собівартість товарів та EBITDA. Плануйте розвиток на 12 місяців.');
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'фінансова модель магазину, бізнес план роздрібного магазину, розрахунок прибутку магазин, фінмодель офлайн торгівлі, EBITDA роздрібної торгівлі, прогноз виторгу магазин, окупність торгової точки, франшиза розрахунок');
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.setAttribute('name', 'keywords');
      newKeywords.setAttribute('content', 'фінансова модель магазину, бізнес план роздрібного магазину, розрахунок прибутку магазин, фінмодель офлайн торгівлі, EBITDA роздрібної торгівлі, прогноз виторгу магазин, окупність торгової точки, франшиза розрахунок');
      document.head.appendChild(newKeywords);
    }

    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.origin + '/#/ProductFinmodelRetail');
    }

    // Robots
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large');
    }

    // Open Graph
    const ogTags = {
      'og:title': 'Фінансова модель для офлайн-магазину - Прогноз EBITDA та прибутку',
      'og:description': 'Повна фінансова модель для роздрібної торгівлі з аналізом трафіку, конверсій, витрат на оренду та персонал. Розрахуйте EBITDA та чистий прибуток.',
      'og:type': 'product',
      'og:url': window.location.origin + '/#/ProductFinmodelRetail',
      'og:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/8f7f9739e_Finprosto-2026-Google-1.png',
      'og:site_name': 'FinProsto',
      'og:locale': 'uk_UA'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': 'Фінансова модель для офлайн-магазину',
      'twitter:description': 'Прогнозуйте виторг, аналізуйте витрати та розраховуйте EBITDA вашого роздрібного бізнесу',
      'twitter:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/8f7f9739e_Finprosto-2026-Google-1.png'
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Фінансова модель для офлайн-магазину",
      "description": "Детальна фінансова модель для роздрібного бізнесу з розрахунком виторгу від трафіку, аналізом витрат на оренду, персонал, EBITDA та чистого прибутку на 12 місяців",
      "brand": {
        "@type": "Brand",
        "name": "FinProsto"
      },
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "UAH",
        "availability": "https://schema.org/InStock",
        "url": window.location.origin + '/#/ProductFinmodelRetail'
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1"
      },
      "category": "Фінансові моделі",
      "audience": {
        "@type": "BusinessAudience",
        "name": "Власники роздрібних магазинів"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'product-structured-data';
    document.head.appendChild(script);

    // FAQ Schema
    const faqSchema = {
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
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    faqScript.id = 'faq-structured-data';
    document.head.appendChild(faqScript);

    // Breadcrumbs Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Головна",
          "item": window.location.origin + '/#/Home'
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Продукти",
          "item": window.location.origin + '/#/Products'
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Фінансова модель Офлайн-магазину"
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    breadcrumbScript.id = 'breadcrumb-structured-data';
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scriptEl = document.getElementById('product-structured-data');
      if (scriptEl) scriptEl.remove();
      const faqScriptEl = document.getElementById('faq-structured-data');
      if (faqScriptEl) faqScriptEl.remove();
      const breadcrumbScriptEl = document.getElementById('breadcrumb-structured-data');
      if (breadcrumbScriptEl) breadcrumbScriptEl.remove();
    };
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Прогноз виторгу від трафіку',
      description: 'Розрахуйте дохід на основі середньої кількості відвідувачів, конверсії в покупку та середнього чека. Плануйте зростання з урахуванням сезонності.'
    },
    {
      icon: Target,
      title: 'Воронка продажів та конверсії',
      description: 'Аналізуйте скільки людей заходить в магазин, скільки купує, який середній чек. Знайдіть способи збільшити конверсію.'
    },
    {
      icon: DollarSign,
      title: 'Прямі та непрямі витрати',
      description: 'Облік собівартості товарів, оренди, зарплат персоналу, комунальних послуг, реклами та всіх операційних витрат.'
    },
    {
      icon: LineChart,
      title: 'EBITDA та операційний прибуток',
      description: 'Розраховуйте ключовий показник ефективності бізнесу — EBITDA, операційний та чистий прибуток після всіх витрат.'
    },
    {
      icon: MapPin,
      title: 'Аналіз локації та оренди',
      description: 'Оцініть ефективність вашої точки: скільки виторгу на квадратний метр, чи окупається оренда, які альтернативи.'
    },
    {
      icon: Wallet,
      title: 'Запаси та кредиторська заборгованість',
      description: 'Контролюйте оборотний капітал: скільки грошей заморожено в товарі на полицях та у взаєморозрахунках з постачальниками.'
    }
  ];

  const features = [
    {
      category: 'Трафік та конверсії',
      items: [
        'Відвідувачі біля магазину',
        'Конверсія входу в торгову точку',
        'Відсоток покупців від відвідувачів',
        'Середній чек та частота покупок'
      ]
    },
    {
      category: 'Операційні витрати',
      items: [
        'Оренда торгової площі',
        'Зарплати продавців та касирів',
        'Комунальні платежі та утримання',
        'Комісія еквайрингу за б/н розрахунки'
      ]
    },
    {
      category: 'Рентабельність точки',
      items: [
        'Маржинальність та валовий прибуток',
        'EBITDA торгової точки',
        'Виторг на кв.м площі',
        'Період окупності інвестицій'
      ]
    },
    {
      category: 'Запаси та капітал',
      items: [
        'Товарні запаси на полицях',
        'Період обороту запасів (дні)',
        'Розрахунки з постачальниками',
        'Інкасація та рух готівки'
      ]
    }
  ];

  const forWho = [
    {
      icon: Store,
      title: 'Власники магазинів',
      description: 'Які хочуть зрозуміти реальну прибутковість точки та прийняти рішення про відкриття нових локацій або оптимізацію поточних'
    },
    {
      icon: TrendingUp,
      title: 'Ритейлери що масштабуються',
      description: 'Які плануют відкриття мережі магазинів і потребують чіткої фінансової моделі для залучення інвестицій'
    },
    {
      icon: BarChart3,
      title: 'Інвестори та партнери',
      description: 'Які оцінюють привабливість роздрібного бізнесу та хочуть бачити прогнози EBITDA, термін окупності та ROI'
    },
    {
      icon: ShoppingBag,
      title: 'Франчайзі',
      description: 'Що купують франшизу та хочуть розрахувати економіку точки перед вкладенням коштів у відкриття'
    }
  ];

  const faqs = [
    {
      question: 'Які дані потрібні для заповнення фінмоделі?',
      answer: 'Базові показники вашого магазину: середня кількість відвідувачів на день, конверсія в покупку, середній чек, собівартість товарів, сума оренди, зарплати персоналу та інші операційні витрати. Модель має тестові дані для прикладу.'
    },
    {
      question: 'Чи можна використати для кількох точок?',
      answer: 'Так, ви можете створити копію моделі для кожної локації або адаптувати для порівняння ефективності різних точок у одній таблиці.'
    },
    {
      question: 'Як врахувати сезонність продажів?',
      answer: 'Модель дозволяє задавати різні коефіцієнти трафіку та середнього чека для кожного місяця, щоб точно відобразити сезонні коливання вашого бізнесу.'
    },
    {
      question: 'Що я отримаю після покупки?',
      answer: 'Доступ до Google Sheets з повністю налаштованою фінансовою моделлю, готовими формулами, тестовими даними та інструкцією. Можете одразу почати планування.'
    },
    {
      question: 'Чи підходить для франшизи?',
      answer: 'Так, модель ідеальна для аналізу економіки франшизної точки. Ви можете врахувати роялті, паушальний внесок та інші специфічні витрати франчайзі.'
    },
    {
      question: 'Як розрахувати точку беззбитковості?',
      answer: 'Модель автоматично розраховує точку беззбитковості на основі ваших постійних і змінних витрат, показуючи який мінімальний виторг потрібен для покриття всіх витрат.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-rose-50 via-pink-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 mb-6">
                <Store className="w-4 h-4 mr-2" />
                {product.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Фінансова модель{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                  Офлайн-магазину
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Детальна фінмодель для роздрібного бізнесу. Розрахуйте виторг від трафіку, проаналізуйте витрати на оренду та персонал, спрогнозуйте EBITDA на 12 місяців.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Розрахунок EBITDA</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Воронка продажів</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Тестові дані включені</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  onClick={() => setPaymentModalOpen(true)}
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-xl px-8 text-lg h-14 shadow-lg shadow-emerald-200 transition-all"
                >
                  Придбати за {product.price} ₴
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-slate-400" />
                  <span>Безпечна оплата</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span>Миттєвий доступ</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50 border-4 border-white">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/finmodel-retail-hero.png"
                  alt="Фінансова модель для офлайн-магазину - приклад"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/20 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">32%</div>
                    <div className="text-sm text-slate-500">EBITDA марж.</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Що ви отримаєте
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Повний контроль над економікою<br />вашого роздрібного магазину
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Професійна фінансова модель для прийняття обґрунтованих рішень про розвиток бізнесу
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-rose-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-rose-200">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text & Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3 block">
                  Роздрібна торгівля
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Що входить в модель
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Від трафіку біля магазину до чистого прибутку. Розраховуйте конверсію відвідувачів, 
                  керуйте запасами та аналізуйте ефективність кожної торгової точки.
                </p>
              </div>

              <div className="rounded-xl border-2 border-slate-200 shadow-xl overflow-hidden">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/8f7f9739e_Finprosto-2026-Google-1.png"
                  alt="Приклад фінансової моделі для офлайн-магазину"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Right Column - 4 Feature Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.map((section, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-rose-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Для кого ця фінансова модель
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Інструмент для тих, хто хоче керувати роздрібним бізнесом на основі цифр і прогнозів
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {forWho.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-rose-200">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Питання та відповіді
            </h2>
            <p className="text-xl text-slate-600">
              Все що вам потрібно знати про фінансову модель
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-rose-200 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-slate-900 pr-8">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Почніть планувати розвиток<br />вашого магазину сьогодні
            </h2>
            <p className="text-xl text-rose-100 mb-10 leading-relaxed">
              Отримайте професійну фінансову модель з готовими формулами та тестовими даними.<br />
              Миттєвий доступ після оплати.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                onClick={() => setPaymentModalOpen(true)}
                className="bg-white text-rose-600 hover:bg-rose-50 rounded-xl px-8 text-lg h-14 shadow-2xl transition-all"
              >
                Придбати за {product.price} ₴
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-rose-100">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Безпечна оплата</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Без підписок</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Підтримка в Telegram</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <PaymentModal
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        product={product}
      />
    </div>
  );
}