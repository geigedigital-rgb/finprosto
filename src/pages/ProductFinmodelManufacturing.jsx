import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Factory,
  Check,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Target,
  LineChart,
  Package,
  CreditCard,
  Truck,
  ChevronDown,
  Sparkles,
  BoxIcon,
  BarChart3,
  Wallet
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';

export default function ProductFinmodelManufacturing() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const product = {
    id: 'finmodel-manufacturing',
    title: 'Фінансова модель Виробництва',
    price: '2 500',
    badge: 'Виробництво',
    demoUrl: null
  };

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Фінансова модель для виробничого бізнесу - Розрахунок собівартості та прибутку | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Комплексна фінансова модель для виробництва з розрахунком собівартості сировини, витрат на персонал, логістику та операційного прибутку. Тестові дані для косметики, адаптується під будь-яке виробництво.');
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'фінансова модель виробництва, бізнес план виробництво, розрахунок собівартості продукції, фінмодель для виробника, прогноз прибутку виробництво, EBITDA виробництво, управління запасами сировина, оборотний капітал виробництво');
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.setAttribute('name', 'keywords');
      newKeywords.setAttribute('content', 'фінансова модель виробництва, бізнес план виробництво, розрахунок собівартості продукції, фінмодель для виробника, прогноз прибутку виробництво, EBITDA виробництво, управління запасами сировина, оборотний капітал виробництво');
      document.head.appendChild(newKeywords);
    }

    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.origin + '/#/ProductFinmodelManufacturing');
    }

    // Robots
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large');
    }

    // Open Graph
    const ogTags = {
      'og:title': 'Фінансова модель для виробничого бізнесу - Собівартість та прибуток',
      'og:description': 'Повна фінансова модель для виробництва з аналізом собівартості, маржинальності, запасів та операційного прибутку. Прогноз на 12 місяців.',
      'og:type': 'product',
      'og:url': window.location.origin + '/#/ProductFinmodelManufacturing',
      'og:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/c572afce0_Finprosto-2026-Google-1.png',
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
      'twitter:title': 'Фінансова модель для виробничого бізнесу',
      'twitter:description': 'Розраховуйте собівартість, маржинальність та операційний прибуток вашого виробництва',
      'twitter:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/c572afce0_Finprosto-2026-Google-1.png'
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
      "name": "Фінансова модель для виробничого бізнесу",
      "description": "Комплексна фінансова модель для виробництва з розрахунком собівартості сировини, витрат на персонал, логістику та операційного прибутку на 12 місяців",
      "brand": {
        "@type": "Brand",
        "name": "FinProsto"
      },
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "UAH",
        "availability": "https://schema.org/InStock",
        "url": window.location.origin + '/#/ProductFinmodelManufacturing'
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1"
      },
      "category": "Фінансові моделі",
      "audience": {
        "@type": "BusinessAudience",
        "name": "Власники виробничих підприємств"
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
          "name": "Фінансова модель Виробництва"
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
      icon: DollarSign,
      title: 'Точна собівартість продукції',
      description: 'Розрахуйте реальну собівартість виробництва з урахуванням сировини, пакування, витратних матеріалів та праці. Зрозумійте справжню маржинальність.'
    },
    {
      icon: TrendingUp,
      title: 'Виторг опт та роздріб',
      description: 'Плануйте продажі по каналах збуту: оптові клієнти, роздрібна торгівля, власні точки, маркетплейси. Прогноз на 12 місяців.'
    },
    {
      icon: Package,
      title: 'Управління запасами сировини',
      description: 'Розраховуйте потребу в сировині на основі плану виробництва. Контролюйте заморожені кошти в запасах на складі.'
    },
    {
      icon: LineChart,
      title: 'Операційний прибуток та EBITDA',
      description: 'Аналізуйте рентабельність виробництва: валовий прибуток, операційний прибуток, EBITDA після всіх витрат.'
    },
    {
      icon: Truck,
      title: 'Логістика та доставка',
      description: 'Враховуйте витрати на доставку сировини та готової продукції до клієнтів. Оптимізуйте логістичні витрати.'
    },
    {
      icon: Wallet,
      title: 'Дебіторська заборгованість',
      description: 'Контролюйте оплати від клієнтів при відстроченні. Розраховуйте необхідний оборотний капітал для бізнесу.'
    }
  ];

  const features = [
    {
      category: 'Собівартість продукції',
      items: [
        'Розрахунок вартості сировини',
        'Зарплата виробничих робітників',
        'Виробнича потужність та обсяги',
        'Оренда виробничих приміщень'
      ]
    },
    {
      category: 'Канали збуту',
      items: [
        'Оптові та роздрібні продажі',
        'Середній чек опту та роздрібу',
        'Конверсія заявок в оплати',
        'Витрати на рекламу та маркетинг'
      ]
    },
    {
      category: 'Прибуток виробництва',
      items: [
        'Валовий та операційний прибуток',
        'EBITDA та чистий прибуток',
        'Рентабельність виробництва',
        'Накопичений прибуток по місяцях'
      ]
    },
    {
      category: 'Запаси та дебітори',
      items: [
        'Запаси сировини на складі',
        'Період обороту запасів (30 днів)',
        'Дебіторська заборгованість (45 днів)',
        'Оборотний капітал та cash flow'
      ]
    }
  ];

  const forWho = [
    {
      icon: Factory,
      title: 'Власники виробництв',
      description: 'Які хочуть розуміти реальну економіку виробництва та приймати рішення на основі точних розрахунків собівартості та прибутку'
    },
    {
      icon: TrendingUp,
      title: 'Підприємці що запускають виробництво',
      description: 'Які плануют запуск нового продукту і потребують розуміння точки беззбитковості, необхідних інвестицій та термінів окупності'
    },
    {
      icon: BarChart3,
      title: 'Інвестори та кредитори',
      description: 'Які оцінюють привабливість виробничого проекту та хочуть бачити детальну фінансову модель з прогнозами'
    },
    {
      icon: BoxIcon,
      title: 'Бізнеси FMCG сектору',
      description: 'Виробники товарів повсякденного попиту: харчові продукти, косметика, побутова хімія, що потребують точного фінпланування'
    }
  ];

  const faqs = [
    {
      question: 'Які дані потрібні для роботи з моделлю?',
      answer: 'Рецептура або склад продукту (перелік сировини), ціни на сировину, очікувані обсяги виробництва, ціни реалізації опт/роздріб, витрати на персонал та виробничі потужності. Модель містить тестові дані для косметики як приклад.'
    },
    {
      question: 'Чи можна адаптувати для мого виробництва?',
      answer: 'Так, модель універсальна. Ви можете змінити номенклатуру сировини, додати свої статті витрат, адаптувати формули під специфіку вашого виробництва. Тестові дані для косметики легко замінити на ваші.'
    },
    {
      question: 'Як враховуються складські запаси?',
      answer: 'Модель розраховує необхідні запаси сировини на основі плану виробництва та норм витрат. Ви бачите скільки грошей заморожено в запасах та коли потрібно докуповувати сировину.'
    },
    {
      question: 'Що я отримаю після покупки?',
      answer: 'Доступ до Google Sheets з повністю налаштованою фінансовою моделлю, готовими формулами, тестовими даними для виробництва косметики та інструкцією по використанню.'
    },
    {
      question: 'Чи підходить для харчового виробництва?',
      answer: 'Так, модель підходить для будь-якого виробництва: харчові продукти, косметика, побутова хімія, меблі, текстиль тощо. Принципи розрахунку універсальні.'
    },
    {
      question: 'Як розрахувати точку беззбитковості?',
      answer: 'Модель автоматично показує при якому обсязі виробництва ви починаєте заробляти. Це допомагає планувати інвестиції та терміни окупності проекту.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-emerald-50 via-teal-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 mb-6">
                <Factory className="w-4 h-4 mr-2" />
                {product.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Фінансова модель{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Виробництва
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Комплексна фінмодель для виробничого бізнесу. Розрахуйте собівартість, маржинальність, запаси сировини та операційний прибуток на 12 місяців.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Калькуляція собівартості</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Управління запасами</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Тестові дані (косметика)</span>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/50 border-4 border-white">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/finmodel-manufacturing-hero.png"
                  alt="Фінансова модель для виробництва - приклад"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent" />
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
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">58%</div>
                    <div className="text-sm text-slate-500">Маржа</div>
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Що ви отримаєте
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Повний контроль над економікою<br />вашого виробництва
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Професійна фінансова модель для обґрунтованих рішень про розвиток виробничого бізнесу
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
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
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
            {/* Left Column: Title, Description, Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div>
                <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3 block">
                  Виробництво
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Що входить в модель
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Від собівартості сировини до EBITDA. Розраховуйте виробничу потужність, 
                  керуйте запасами та плануйте прибуток з урахуванням опту і роздрібу.
                </p>
              </div>
              
              <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/c572afce0_Finprosto-2026-Google-1.png"
                  alt="Приклад фінансової моделі для виробництва"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80";
                  }}
                />
              </div>
            </motion.div>

            {/* Right Column: Feature Cards 2x2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border-2 border-slate-100"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
              Інструмент для тих, хто хоче керувати виробничим бізнесом на основі цифр і прогнозів
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
                className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-200">
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
                className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-emerald-200 transition-all"
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
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Почніть планувати економіку<br />вашого виробництва сьогодні
            </h2>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              Отримайте професійну фінансову модель з готовими формулами та тестовими даними.<br />
              Миттєвий доступ після оплати.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                onClick={() => setPaymentModalOpen(true)}
                className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-xl px-8 text-lg h-14 shadow-2xl transition-all"
              >
                Придбати за {product.price} ₴
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-emerald-100">
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