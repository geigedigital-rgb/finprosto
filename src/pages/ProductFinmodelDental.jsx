import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart,
  Check,
  ArrowRight,
  TrendingUp,
  DollarSign,
  Target,
  LineChart,
  Users,
  CreditCard,
  Calendar,
  ChevronDown,
  Sparkles,
  Stethoscope,
  BarChart3,
  Wallet
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';

export default function ProductFinmodelDental() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const product = {
    id: 'finmodel-dental',
    title: 'Фінансова модель Стоматологічної клініки',
    price: '2 500',
    badge: 'Стоматологія',
    demoUrl: null
  };

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Фінансова модель для стоматологічної клініки - Прогноз прибутку та EBITDA | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Детальна фінансова модель для стоматології з розрахунком доходів від пацієнтів, витрат на персонал, обладнання, матеріали та операційного прибутку. Плануйте розвиток на 12 місяців.');
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'фінансова модель стоматологія, бізнес план стоматологічної клініки, розрахунок прибутку стоматологія, фінмодель для клініки, EBITDA стоматологія, окупність стоматологічного бізнесу, NPV IRR стоматологія, інвестиції в стоматологію');
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.setAttribute('name', 'keywords');
      newKeywords.setAttribute('content', 'фінансова модель стоматологія, бізнес план стоматологічної клініки, розрахунок прибутку стоматологія, фінмодель для клініки, EBITDA стоматологія, окупність стоматологічного бізнесу, NPV IRR стоматологія, інвестиції в стоматологію');
      document.head.appendChild(newKeywords);
    }

    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.origin + '/#/ProductFinmodelDental');
    }

    // Robots
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large');
    }

    // Open Graph
    const ogTags = {
      'og:title': 'Фінансова модель для стоматологічної клініки - Прогноз прибутку',
      'og:description': 'Повна фінансова модель для стоматології з аналізом послуг, витрат на персонал, обладнання та розрахунком EBITDA на 12 місяців.',
      'og:type': 'product',
      'og:url': window.location.origin + '/#/ProductFinmodelDental',
      'og:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d79410b0e_Finprosto-2026-Google-1.png',
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
      'twitter:title': 'Фінансова модель для стоматологічної клініки',
      'twitter:description': 'Прогнозуйте доходи від пацієнтів, аналізуйте витрати та розраховуйте операційний прибуток вашої клініки',
      'twitter:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d79410b0e_Finprosto-2026-Google-1.png'
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
      "name": "Фінансова модель для стоматологічної клініки",
      "description": "Детальна фінансова модель для стоматології з розрахунком доходів від пацієнтів, витрат на персонал, обладнання, матеріали та операційного прибутку на 12 місяців",
      "brand": {
        "@type": "Brand",
        "name": "FinProsto"
      },
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "UAH",
        "availability": "https://schema.org/InStock",
        "url": window.location.origin + '/#/ProductFinmodelDental'
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1"
      },
      "category": "Фінансові моделі",
      "audience": {
        "@type": "BusinessAudience",
        "name": "Власники стоматологічних клінік"
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
          "name": "Фінансова модель Стоматологічної клініки"
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
      title: 'Розрахунок доходів від пацієнтів',
      description: 'Прогнозуйте виторг на основі кількості прийомів, середнього чека процедур та завантаженості лікарів. Плануйте зростання з урахуванням сезонності.'
    },
    {
      icon: Stethoscope,
      title: 'Аналіз послуг та процедур',
      description: 'Оцініть прибутковість різних видів процедур: терапія, хірургія, ортопедія, імплантація. Зрозумійте які послуги найбільш маржинальні.'
    },
    {
      icon: Users,
      title: 'Витрати на персонал',
      description: 'Розрахуйте зарплати лікарів (фіксована частина + відсоток від виручки), ассистентів, адміністраторів та допоміжного персоналу.'
    },
    {
      icon: LineChart,
      title: 'EBITDA та операційний прибуток',
      description: 'Розраховуйте ключові показники ефективності клініки: валовий прибуток, EBITDA, операційний та чистий прибуток після всіх витрат.'
    },
    {
      icon: Target,
      title: 'Обладнання та матеріали',
      description: 'Враховуйте амортизацію дорогого обладнання, витрати на стоматологічні матеріали, інструменти та витратні матеріали.'
    },
    {
      icon: Calendar,
      title: 'Завантаженість та записи',
      description: 'Плануйте завантаженість лікарів, аналізуйте скільки прийомів на день, яка тривалість процедур та коефіцієнт конверсії з консультацій.'
    }
  ];

  const features = [
    {
      category: 'Виручка клініки',
      items: [
        'Ортопедія + хірургія',
        'Терапія та профілактика',
        'Кількість угод та середній чек',
        'Прогноз зростання по місяцях'
      ]
    },
    {
      category: 'Витрати та персонал',
      items: [
        'Зарплати спеціалістів (30%)',
        'Матеріали та лабораторії (10% + 7%)',
        'Оренда, адміністратори, бухгалтер',
        'Податки по співробітникам'
      ]
    },
    {
      category: 'Прибутковість',
      items: [
        'Валовий прибуток та маржа',
        'EBITDA та рентабельність',
        'Чистий прибуток після податків',
        'Накопичений прибуток по періодах'
      ]
    },
    {
      category: 'Інвестиції та cash flow',
      items: [
        'Устаткування, меблі, ремонт',
        'Амортизація та окупність',
        'Грошові потоки (ОДДС)',
        'NPV, IRR та DCF аналіз'
      ]
    }
  ];

  const forWho = [
    {
      icon: Heart,
      title: 'Власники стоматологій',
      description: 'Які хочуть зрозуміти реальну прибутковість клініки, оптимізувати витрати та прийняти рішення про відкриття нових кабінетів'
    },
    {
      icon: TrendingUp,
      title: 'Лікарі-підприємці',
      description: 'Які плануют відкриття власної практики і потребують чіткого фінансового плану для розуміння термінів окупності інвестицій'
    },
    {
      icon: BarChart3,
      title: 'Інвестори та партнери',
      description: 'Які оцінюють привабливість стоматологічного бізнесу та хочуть бачити прогнози виторгу, EBITDA та ROI'
    },
    {
      icon: Users,
      title: 'Мережі клінік',
      description: 'Що масштабують бізнес та потребують стандартизованої фінансової моделі для аналізу ефективності різних точок'
    }
  ];

  const faqs = [
    {
      question: 'Які дані потрібні для заповнення моделі?',
      answer: 'Середня кількість пацієнтів на день, середній чек процедур, структура послуг (терапія, хірургія тощо), зарплати персоналу, витрати на матеріали, оренда та обладнання. Модель містить тестові дані для прикладу.'
    },
    {
      question: 'Чи можна врахувати відсоток лікарям?',
      answer: 'Так, модель дозволяє задавати схему оплати: фіксована ставка + відсоток від виручки лікаря. Це стандартна практика в стоматології.'
    },
    {
      question: 'Як врахувати різні види процедур?',
      answer: 'Ви можете розбити послуги на категорії: терапія, хірургія, ортопедія, імплантація тощо — і задати для кожної свою ціну, маржинальність та частку в загальному обсязі.'
    },
    {
      question: 'Що я отримаю після покупки?',
      answer: 'Доступ до Google Sheets з повністю налаштованою фінансовою моделлю для стоматології, готовими формулами, тестовими даними та інструкцією.'
    },
    {
      question: 'Чи підходить для мережі клінік?',
      answer: 'Так, ви можете створити копію моделі для кожної клініки або адаптувати для порівняння показників різних точок в одній таблиці.'
    },
    {
      question: 'Як розрахувати точку беззбитковості?',
      answer: 'Модель автоматично показує скільки пацієнтів та процедур потрібно для покриття всіх витрат. Це допомагає планувати маркетинг та завантаженість.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 via-cyan-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-6">
                <Heart className="w-4 h-4 mr-2" />
                {product.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Фінансова модель{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Стоматологічної клініки
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Детальна фінмодель для стоматології. Розрахуйте доходи від пацієнтів, витрати на персонал і матеріали, спрогнозуйте EBITDA на 12 місяців.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="font-medium">Аналіз послуг</span>
                </div>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 border-4 border-white">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/finmodel-dental-hero.png"
                  alt="Фінансова модель для стоматологічної клініки - приклад"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">45%</div>
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Що ви отримаєте
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Повний контроль над економікою<br />вашої стоматологічної клініки
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Професійна фінансова модель для прийняття обґрунтованих рішень про розвиток практики
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
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
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
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3 block">
                  Стоматологія
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Що входить в модель
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Від кількості пацієнтів до чистого прибутку. Аналізуйте виручку по послугах, 
                  керуйте витратами на персонал і матеріали, прогнозуйте EBITDA та окупність.
                </p>
              </div>
              
              <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d79410b0e_Finprosto-2026-Google-1.png"
                  alt="Приклад фінансової моделі для стоматологічної клініки"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80";
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
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
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
              Інструмент для тих, хто хоче керувати стоматологічним бізнесом на основі цифр і прогнозів
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
                className="flex gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200">
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
                className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-blue-200 transition-all"
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
      <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Почніть планувати розвиток<br />вашої клініки сьогодні
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Отримайте професійну фінансову модель з готовими формулами та тестовими даними.<br />
              Миттєвий доступ після оплати.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                onClick={() => setPaymentModalOpen(true)}
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl px-8 text-lg h-14 shadow-2xl transition-all"
              >
                Придбати за {product.price} ₴
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
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