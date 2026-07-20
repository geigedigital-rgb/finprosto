import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2,
  Check,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Target,
  LineChart,
  Package,
  CreditCard,
  Users,
  ChevronDown,
  Sparkles,
  ShoppingCart,
  BarChart3,
  Wallet
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';

export default function ProductFinmodelEcommerce() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const product = {
    id: 'finmodel-ecommerce',
    title: 'Фінансова модель Інтернет-магазину',
    price: '2 500',
    badge: 'Інтернет-магазин',
    demoUrl: null
  };

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Фінансова модель для інтернет-магазину - Прогноз прибутку на 12 місяців | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Професійна фінансова модель для інтернет-магазину з розрахунком виторгу, конверсій, маржинальності та грошових потоків. Прогнозуйте прибуток, оптимізуйте витрати та збільшуйте рентабельність вашого e-commerce бізнесу.');
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'фінансова модель інтернет магазину, фінмодель ecommerce, прогноз прибутку онлайн магазину, розрахунок виторгу інтернет магазин, бізнес план інтернет магазин, фінансова модель для онлайн бізнесу, cash flow інтернет магазин, маржинальність ecommerce');
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.setAttribute('name', 'keywords');
      newKeywords.setAttribute('content', 'фінансова модель інтернет магазину, фінмодель ecommerce, прогноз прибутку онлайн магазину, розрахунок виторгу інтернет магазин, бізнес план інтернет магазин, фінансова модель для онлайн бізнесу, cash flow інтернет магазин, маржинальність ecommerce');
      document.head.appendChild(newKeywords);
    }

    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.origin + '/#/ProductFinmodelEcommerce');
    }

    // Robots
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large');
    }

    // Open Graph
    const ogTags = {
      'og:title': 'Фінансова модель для інтернет-магазину - Прогноз прибутку на 12 місяців',
      'og:description': 'Повна фінансова модель для e-commerce з аналізом конверсій, маржинальності, оборотного капіталу та грошових потоків. Плануйте прибуток на рік вперед.',
      'og:type': 'product',
      'og:url': window.location.origin + '/#/ProductFinmodelEcommerce',
      'og:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/30869ff55_freepik__-ai-clean-cinematic-composition-focused-on-emotion__31777.png',
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
      'twitter:title': 'Фінансова модель для інтернет-магазину',
      'twitter:description': 'Прогнозуйте прибуток, аналізуйте конверсії та керуйте грошовими потоками вашого e-commerce бізнесу',
      'twitter:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/30869ff55_freepik__-ai-clean-cinematic-composition-focused-on-emotion__31777.png'
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
      "name": "Фінансова модель для інтернет-магазину",
      "description": "Професійна фінансова модель для e-commerce бізнесу з розрахунком виторгу, конверсій, маржинальності, оборотного капіталу та грошових потоків на 12 місяців",
      "brand": {
        "@type": "Brand",
        "name": "FinProsto"
      },
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "UAH",
        "availability": "https://schema.org/InStock",
        "url": window.location.origin + '/#/ProductFinmodelEcommerce'
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1"
      },
      "category": "Фінансові моделі",
      "audience": {
        "@type": "BusinessAudience",
        "name": "Власники інтернет-магазинів"
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
          "name": "Фінансова модель Інтернет-магазину"
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
      title: 'Прогноз виторгу на 12 місяців',
      description: 'Розрахуйте очікуваний дохід на основі трафіку, конверсій та середнього чека. Плануйте зростання з точністю до місяця.'
    },
    {
      icon: Target,
      title: 'Аналіз конверсій на кожному етапі',
      description: 'Відстежуйте воронку продажів від відвідувачів до покупців. Знайдіть слабкі місця та збільште конверсію.'
    },
    {
      icon: DollarSign,
      title: 'Маржинальність та валовий прибуток',
      description: 'Розраховуйте прибуток з кожного продажу, враховуючи собівартість товару, доставку та комісії платформ.'
    },
    {
      icon: LineChart,
      title: 'Грошовий потік (ДДС)',
      description: 'Контролюйте рух грошей: коли прийдуть оплати від клієнтів і коли потрібно платити постачальникам.'
    },
    {
      icon: Package,
      title: 'Управління запасами та оборотним капіталом',
      description: 'Розрахуйте скільки товару тримати на складі та скільки грошей заморожено в запасах.'
    },
    {
      icon: Wallet,
      title: 'EBITDA та чистий прибуток',
      description: 'Побачите реальну прибутковість бізнесу після всіх витрат: реклами, логістики, зарплат та податків.'
    }
  ];

  const features = [
    {
      category: 'Аналіз виторгу',
      items: [
        'Розрахунок виторгу від трафіку та конверсій',
        'Прогноз середнього чека по місяцях',
        'Сезонність та тренди продажів',
        'Аналіз повторних покупок'
      ]
    },
    {
      category: 'Витрати та рентабельність',
      items: [
        'Собівартість товарів (COGS)',
        'Витрати на рекламу та маркетинг',
        'Логістика та доставка',
        'Зарплати, оренда, комунальні послуги'
      ]
    },
    {
      category: 'Фінансові показники',
      items: [
        'Маржинальний прибуток (Gross Profit)',
        'EBITDA та операційний прибуток',
        'Чистий прибуток (Net Profit)',
        'ROI рекламних кампаній'
      ]
    },
    {
      category: 'Грошові потоки',
      items: [
        'Операційний cash flow',
        'Оборотний капітал',
        'Запаси товарів',
        'Дебіторська заборгованість'
      ]
    }
  ];

  const forWho = [
    {
      icon: ShoppingCart,
      title: 'Власники інтернет-магазинів',
      description: 'Які хочуть зрозуміти фінансову модель бізнесу та побачити прогноз прибутку перед масштабуванням'
    },
    {
      icon: TrendingUp,
      title: 'E-commerce підприємці',
      description: 'Що запускають новий онлайн-магазин і хочуть розрахувати точку беззбитковості та термін окупності'
    },
    {
      icon: BarChart3,
      title: 'Інвестори та партнери',
      description: 'Які оцінюють привабливість e-commerce проекту та хочуть побачити чіткі фінансові прогнози'
    },
    {
      icon: Users,
      title: 'Dropshipping бізнеси',
      description: 'Що працюють без складу та потребують точного розрахунку маржинальності з урахуванням комісій'
    }
  ];

  const faqs = [
    {
      question: 'Чи потрібні спеціальні знання для роботи з фінмоделлю?',
      answer: 'Ні, модель розроблена з готовими формулами та підказками. Ви просто вводите свої дані (трафік, ціни, витрати), а таблиця автоматично розраховує всі показники та прогнози.'
    },
    {
      question: 'Які дані потрібно внести в фінансову модель?',
      answer: 'Базові показники вашого магазину: середній трафік на сайт, конверсія в покупку, середній чек, собівартість товарів, витрати на рекламу та операційні витрати. Модель містить тестові дані для прикладу.'
    },
    {
      question: 'Чи можна адаптувати модель під мій бізнес?',
      answer: 'Так, фінмодель повністю редагується. Ви можете додавати свої категорії витрат, міняти формули під свою специфіку, додавати нові показники. Це ваш інструмент.'
    },
    {
      question: 'Що я отримаю після покупки?',
      answer: 'Ви отримаєте доступ до Google Sheets з повністю налаштованою фінансовою моделлю, готовими формулами, тестовими даними та інструкцією по використанню. Можете одразу почати планування.'
    },
    {
      question: 'Чи підходить для dropshipping?',
      answer: 'Так, модель відмінно підходить для dropshipping. Вона враховує специфіку цієї бізнес-моделі: комісії постачальників, платіжних систем, відсутність складських витрат.'
    },
    {
      question: 'Чи можу я прогнозувати на більше ніж 12 місяців?',
      answer: 'Базова модель розрахована на 12 місяців, але ви легко можете розширити період прогнозування, скопіювавши формули на додаткові періоди.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 mb-6">
                <Building2 className="w-4 h-4 mr-2" />
                {product.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Фінансова модель{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Інтернет-магазину
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Професійний інструмент для прогнозування прибутку вашого e-commerce бізнесу. 
                Розрахуйте виторг, конверсії, маржинальність та грошові потоки на 12 місяців вперед.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Готові формули</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Прогноз на 12 місяців</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Тестові дані в комплекті</span>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 border-4 border-white">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/30869ff55_freepik__-ai-clean-cinematic-composition-focused-on-emotion__31777.png"
                  alt="Фінансова модель для інтернет-магазину - приклад"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">+45%</div>
                    <div className="text-sm text-slate-500">Прогноз росту</div>
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Що ви отримаєте
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Повний контроль над фінансами<br />вашого інтернет-магазину
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Професійна фінансова модель, яка допоможе вам приймати обґрунтовані рішення та збільшувати прибуток
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
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
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
                  Фінансова модель
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Що входить в модель
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Всі ключові розділи для комплексного аналізу вашого e-commerce бізнесу. 
                  Від розрахунку виторгу до прогнозу грошових потоків.
                </p>
              </div>

              <div className="rounded-xl border-2 border-slate-200 shadow-xl overflow-hidden">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/4dc980e41_Finprosto-2026-Google.png"
                  alt="Приклад фінансової моделі інтернет-магазину - розрахунок виторгу, маржинальності та прямих витрат"
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
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-3">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
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
              Інструмент створений для тих, хто хоче керувати e-commerce бізнесом на основі цифр і прогнозів
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
                className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-200">
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
                className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-indigo-200 transition-all"
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
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Почніть планувати прибуток вашого<br />інтернет-магазину сьогодні
            </h2>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Отримайте професійну фінансову модель з готовими формулами та тестовими даними.<br />
              Миттєвий доступ після оплати.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                onClick={() => setPaymentModalOpen(true)}
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl px-8 text-lg h-14 shadow-2xl transition-all"
              >
                Придбати за {product.price} ₴
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-indigo-100">
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