import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Laptop,
  DollarSign,
  BarChart3,
  Target,
  ChevronDown,
  FileSpreadsheet,
  Calendar,
  Users,
  PieChart,
  Check,
  Star,
  Zap,
  Globe
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import PaymentModal from '@/components/payment/PaymentModal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function ProductIT() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Облік IT-компанії: Таблиця для фінансового обліку стартапу, веб-студії | FinProsto 2026';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Облік IT-компанії та стартапу ⭐ Готова таблиця для фінансового обліку: підписки, проєкти, MRR/ARR, Burn Rate. Облік веб-студії, SaaS. Google Sheets. 1730₴');
    document.head.appendChild(metaDescription);
    
    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік IT компанії, облік стартапу, фінансовий облік веб студії, облік SaaS, MRR ARR облік, burn rate runway, учет IT компании, учет стартапа');
    document.head.appendChild(metaKeywords);
    
    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Таблиця обліку фінансів PRO для IT-компаній - Google Sheets');
    document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Контроль підписок, проєктів, команди. MRR та Burn Rate. 1730₴ • Без підписок');
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
    ogImage.setAttribute('content', 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5ed6a28dd_freepik__-ai-clean-cinematic-composition-focused-on-emotion__63867.png');
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
    twitterTitle.setAttribute('content', 'Облік фінансів для IT-компаній | FinProsto');
    document.head.appendChild(twitterTitle);
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]') || document.createElement('meta');
    twitterDescription.setAttribute('name', 'twitter:description');
    twitterDescription.setAttribute('content', 'Контроль підписок та проєктів. 1730₴ • 4.9/5 ⭐');
    document.head.appendChild(twitterDescription);
    
    // JSON-LD Product Schema
    const productSchema = document.createElement('script');
    productSchema.type = 'application/ld+json';
    productSchema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Таблиця обліку фінансів PRO для IT-компаній",
      "description": "Професійний облік фінансів для IT-компаній та стартапів. Контроль підписок, проєктів, MRR, ARR, Burn Rate.",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5ed6a28dd_freepik__-ai-clean-cinematic-composition-focused-on-emotion__63867.png",
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
      "category": "IT та Розробка"
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
    id: 'it',
    title: 'Таблиця обліку фінансів PRO',
    price: '1730',
    oldPrice: '2190',
  };

  const problems = [
    {
      icon: AlertCircle,
      title: 'Не видно реальний Burn Rate та Runway',
      description: 'Витрачаєте гроші на розробку та зарплати, але не знаєте, на скільки місяців вистачить грошей'
    },
    {
      icon: AlertCircle,
      title: 'Не зрозуміло, які проєкти прибуткові',
      description: 'Працюєте над декількома продуктами, але не бачите реальну рентабельність кожного'
    },
    {
      icon: AlertCircle,
      title: 'Підписки та MRR/ARR не контролюються',
      description: 'SaaS модель, але немає чіткої картини регулярних доходів та відтоку клієнтів'
    },
    {
      icon: AlertCircle,
      title: 'Витрати на інфраструктуру непрогнозовані',
      description: 'AWS, Azure, хостинги зʼїдають бюджет, але важко оцінити їх вплив на прибуток'
    },
    {
      icon: AlertCircle,
      title: 'Рішення про найм команди без цифр',
      description: 'Не знаєте, чи можете собі дозволити нового розробника або маркетолога'
    }
  ];

  const decisions = [
    {
      icon: TrendingUp,
      title: 'Чи можна масштабувати команду зараз',
      description: 'Скільки витрачаємо на зарплати та чи вистачить грошей на нових людей'
    },
    {
      icon: Laptop,
      title: 'Які продукти розвивати далі',
      description: 'Що приносить найбільший MRR, а що треба закрити або оптимізувати'
    },
    {
      icon: DollarSign,
      title: 'Коли можна виводити прибуток засновникам',
      description: 'Скільки можна взяти, щоб не підставити бізнес під ризик'
    },
    {
      icon: Globe,
      title: 'Чи інвестувати в маркетинг зараз',
      description: 'CAC, LTV та окупність реклами - чи вистачить грошей на експерименти'
    }
  ];

  const tableFeatures = [
    {
      icon: Calendar,
      title: 'Річний звіт',
      description: 'Порівнюйте місяці, аналізуйте тренди доходів',
      example: 'Бачите динаміку MRR та темпи зростання по місяцях'
    },
    {
      icon: Code,
      title: 'Напрями діяльності',
      description: 'Розділіть доходи по продуктах або послугах',
      example: 'SaaS продукт, Аутсорс, Консалтинг - окрема рентабельність'
    },
    {
      icon: DollarSign,
      title: 'Статті витрат',
      description: 'Структуруйте витрати: Зарплати, AWS, Реклама, Офіс',
      example: 'Контролюйте витрати на інфраструктуру та команду'
    },
    {
      icon: Zap,
      title: 'Проєкти',
      description: 'Ведіть окремі продукти або клієнтів',
      example: 'SaaS v2.0, Клієнт А, MVP нового продукту - окремі P&L'
    },
    {
      icon: PieChart,
      title: 'Рахунки',
      description: 'Банк, Stripe, PayPal, готівка',
      example: 'Бачите баланс по всіх фінансових акаунтах'
    },
    {
      icon: BarChart3,
      title: 'Операції',
      description: 'Кожна транзакція на своєму місці',
      example: 'Підписки, зарплати, серверні витрати з деталями'
    }
  ];

  const benefits = [
    'Таблицю обліку фінансів PRO в Google Sheets',
    'P&L звіти з автоматичним розрахунком',
    'CashFlow та контроль грошових потоків',
    'Річний звіт з порівнянням місяців',
    'Облік статей витрат та проєктів',
    'Контроль оплати та дебіторської заборгованості',
    'Управління рахунками (банк, платіжні системи)',
    'Інструкції та підтримка в Telegram',
    'Безкоштовні оновлення назавжди'
  ];

  const faqs = [
    {
      question: 'Підійде для стартапу на ранній стадії?',
      answer: 'Так, система ідеальна для стартапів. Ви будете бачити Burn Rate, Runway та інші важливі метрики з перших днів роботи.'
    },
    {
      question: 'Чи можна відстежувати MRR та ARR?',
      answer: 'Так, використовуйте функцію "Операції" з регулярними платежами та "Напрями" для різних типів підписок. Таблиця автоматично порахує місячні та річні показники.'
    },
    {
      question: 'Чи можна вести облік по різних продуктах?',
      answer: 'Так, використовуйте лист "Проєкти" для окремого обліку кожного продукту або клієнта. Ви будете бачити P&L кожного проєкту окремо.'
    },
    {
      question: 'Скільки часу займає ведення обліку?',
      answer: '30-60 хвилин на початкове налаштування. Далі 10-15 хвилин на тиждень для внесення транзакцій та аналізу звітів.'
    },
    {
      question: 'Що таке Burn Rate і як його рахувати?',
      answer: 'Burn Rate - це скільки грошей компанія витрачає щомісяця. В таблиці подивіться лист CashFlow - негативне значення за місяць і є ваш Burn Rate. Наприклад: -$8,200/міс.'
    },
    {
      question: 'Що таке Runway і як його контролювати?',
      answer: 'Runway - скільки місяців протримається стартап при поточних витратах. Формула: Баланс / Burn Rate. Якщо є $82,000 і витрачаєте $8,200/міс, то Runway = 10 місяців.'
    },
    {
      question: 'Як контролювати витрати на підписки (AWS, GitHub, Figma)?',
      answer: 'Створіть статтю "Підписки" та записуйте кожен сервіс окремою операцією: AWS ($500/міс), GitHub ($50/міс). Таблиця покаже загальні витрати на софт щомісяця.'
    },
    {
      question: 'Як рахувати прибутковість SaaS продукту?',
      answer: 'Створіть проєкт "SaaS Product". Доходи - підписки клієнтів, витрати - зарплати команди + інфраструктура. Таблиця порахує прибуток та рентабельність продукту.'
    },
    {
      question: 'Чи підходить для аутсорсингової компанії?',
      answer: 'Так, таблиця ідеальна для аутсорсу. Створюйте проєкти для кожного клієнта, записуйте гонорари та витрати команди на проєкт. Побачите рентабельність кожного клієнта.'
    },
    {
      question: 'Як готувати фінансові звіти для інвесторів?',
      answer: 'Використовуйте листи "Річний звіт" (динаміка доходів), "CashFlow" (рух грошей), "P&L" (прибуток). Всі показники розраховуються автоматично - просто експортуйте або покажіть таблицю.'
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
          { label: 'IT продукти' }
        ]} />
      </div>

      {/* HERO BLOCK */}
      <section className="pt-8 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-8">
                <Code className="w-4 h-4" />
                Для IT-компаній
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Фінанси IT-компанії<br />
                під повним контролем
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                Одна фінансова система для стартапів та IT-бізнесу:<br />
                підписки, проєкти, команда, Burn Rate та Runway
              </p>

              <Button 
                onClick={scrollToDemo}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-600/20"
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
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5ed6a28dd_freepik__-ai-clean-cinematic-composition-focused-on-emotion__63867.png"
                  alt="Облік IT-компанії та стартапу - контроль MRR, ARR, Burn Rate, Runway, підписок та проєктів для SaaS бізнесу"
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
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500">Січень 2026</span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Дохід</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-green-700">+142 500 ₴</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-red-100 flex items-center justify-center">
                        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Витрати</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-red-700">-89 300 ₴</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:gap-8">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                        <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-600" />
                      </div>
                      <span className="text-[10px] sm:text-sm text-slate-600">Прибуток</span>
                    </div>
                    <span className="text-sm sm:text-lg font-bold text-slate-900">53 200 ₴</span>
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
              Типові проблеми IT-компаній та стартапів
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
              Які фінансові рішення приймає засновник IT-компанії
            </h2>
            <p className="text-xl text-slate-600">
              Щомісяця ви відповідаєте на ці питання
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
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <decision.icon className="w-6 h-6 text-indigo-700" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              <FileSpreadsheet className="w-4 h-4" />
              Таблиця обліку фінансів PRO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Готова система для IT-бізнесу
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Універсальна таблиця PRO ідеально підходить для стартапів та IT-компаній.<br />
              Ось як вона допомагає керувати фінансами технологічного бізнесу:
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
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-700" />
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

      {/* HOW IT WORKS FOR IT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як використовувати таблицю PRO для IT-компанії
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Практичні приклади використання кожного листа таблиці для технологічного бізнесу
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
                    Вносите всі підписки і витрати
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Фіксуйте всі транзакції: платежі клієнтів, зарплати команді, витрати на сервери, підписки на сервіси. 
                    Відмічайте статус оплати та прив'язуйте до проєктів.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Оплачено?</div>
                        <div className="text-sm text-slate-600">Контролюйте, які підписки оплачені</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Контрагент</div>
                        <div className="text-sm text-slate-600">Клієнт для підписок, провайдер для витрат</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Стаття</div>
                        <div className="text-sm text-slate-600">Підписка SaaS, AWS, Зарплата, Реклама Google</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-3 sm:p-6 border border-slate-200 overflow-x-auto">
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="grid pb-2 border-b border-slate-200 font-semibold text-slate-700" style={{ gridTemplateColumns: '50px 85px 80px 75px', gap: '8px' }}>
                      <div>Дата</div>
                      <div>Контрагент</div>
                      <div>Стаття</div>
                      <div className="text-right">Сума</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '50px 85px 80px 75px', gap: '8px' }}>
                      <div>15.01</div>
                      <div className="truncate text-xs">Startup Inc</div>
                      <div className="text-green-700 truncate text-xs">Підписка</div>
                      <div className="text-right font-medium text-green-700 text-xs">+$299</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '50px 85px 80px 75px', gap: '8px' }}>
                      <div>20.01</div>
                      <div className="truncate text-xs">AWS</div>
                      <div className="text-rose-700 truncate text-xs">Хостинг</div>
                      <div className="text-right font-medium text-rose-700 text-xs">-$1,240</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '50px 85px 80px 75px', gap: '8px' }}>
                      <div>25.01</div>
                      <div className="truncate text-xs">Dev Team</div>
                      <div className="text-rose-700 truncate text-xs">Зарплата</div>
                      <div className="text-right font-medium text-rose-700 text-xs">-$6,500</div>
                    </div>
                    <div className="grid text-slate-600" style={{ gridTemplateColumns: '50px 85px 80px 75px', gap: '8px' }}>
                      <div>28.01</div>
                      <div className="truncate text-xs">Google Ads</div>
                      <div className="text-rose-700 truncate text-xs">Маркетинг</div>
                      <div className="text-right font-medium text-rose-700 text-xs">-$800</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Example 2 - Projects (Products) */}
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
                    Окремі P&L для продуктів та клієнтів
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Створюйте проєкти для кожного продукту або великого клієнта. 
                    Бачте окремо прибуток, витрати та рентабельність кожного напряму.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">SaaS Product v2.0</div>
                        <div className="text-sm text-slate-600">Весь MRR та витрати на розробку окремо</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Аутсорс - Клієнт А</div>
                        <div className="text-sm text-slate-600">Скільки витратили годин та скільки заробили</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-slate-900">Mobile App MVP</div>
                        <div className="text-sm text-slate-600">Рентабельність нового продукту</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                  <div className="space-y-3">
                    <div className="p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <div className="font-semibold text-slate-900 text-sm">SaaS Platform</div>
                        <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Активний</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">MRR</div>
                          <div className="font-bold text-slate-900">$15,420</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">$8,200</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Margin</div>
                          <div className="font-bold text-green-600">46.8%</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-slate-900">Аутсорс 2026</div>
                        <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">В процесі</div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <div className="text-slate-500 text-xs">Дохід</div>
                          <div className="font-bold text-slate-900">$42,500</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Витрати</div>
                          <div className="font-bold text-slate-900">$28,900</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-xs">Margin</div>
                          <div className="font-bold text-green-600">32.0%</div>
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
                    Створіть статті витрат для IT-бізнесу: зарплати команди, інфраструктура (AWS, хостинги), 
                    маркетинг, офіс. Бачте динаміку витрат та їх частку від доходу.
                  </p>
                  <div className="bg-white rounded-xl p-3 sm:p-4 lg:p-6 border border-slate-200">
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                        <div className="font-semibold text-slate-700">Стаття</div>
                        <div className="font-semibold text-slate-700">Сума</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">💰 Підписки SaaS</div>
                        <div className="font-bold text-green-700">+$15,420</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">👨‍💻 Зарплати</div>
                        <div className="font-bold text-rose-700">-$6,500</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">☁️ AWS + Hosting</div>
                        <div className="font-bold text-rose-700">-$1,420</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">📢 Маркетинг</div>
                        <div className="font-bold text-rose-700">-$800</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🔧 Підписки на сервіси</div>
                        <div className="font-bold text-rose-700">-$480</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-slate-700">🏢 Офіс</div>
                        <div className="font-bold text-rose-700">-$420</div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-slate-300">
                        <div className="font-bold text-slate-900">Чистий прибуток</div>
                        <div className="font-bold text-slate-900">$5,800</div>
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
                          <span className="text-slate-600">Зарплати команди</span>
                          <span className="font-medium">$6,500 • 67%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500" style={{ width: '67%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Інфраструктура</span>
                          <span className="font-medium">$1,420 • 15%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500" style={{ width: '15%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-600">Маркетинг + Інше</span>
                          <span className="font-medium">$1,700 • 18%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: '18%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm text-slate-600 mb-2">Burn Rate & Runway</div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">$8,200/міс</div>
                    <div className="text-xs text-slate-500">
                      При балансі $82,000 → Runway 10 місяців
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PURCHASE BLOCK */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
                  Що ви отримуєте
                </span>
              </h2>

              <p className="text-xl text-indigo-100/80 mb-8 leading-relaxed">
                Універсальна таблиця для обліку: Підписки, Проєкти, Команда, CashFlow, Burn Rate, Runway та інші
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Повний контроль над фінансами стартапу',
                  'Автоматичні звіти за кілька секунд',
                  'Відстеження MRR, ARR та Burn Rate',
                  'Планування Runway та cash flow',
                  'Аналіз рентабельності кожного продукту',
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
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
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
                <span className="text-indigo-200">1900+ користувачів</span>
              </div>
            </motion.div>

            {/* Right - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 z-0" />

                <div className="relative bg-white rounded-3xl p-8 lg:p-10 z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
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
                        <Check className="w-4 h-4 text-indigo-500 flex-shrink-0" />
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
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-100 text-indigo-700 text-sm whitespace-nowrap">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span className="font-semibold">Вигода: {parseInt(product.oldPrice) - parseInt(product.price)} грн</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsPaymentModalOpen(true)}
                    size="lg"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg rounded-xl transition-colors"
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
              Фінансовий облік для стартапів та IT-компаній
            </h2>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Метрики, які повинен знати кожен засновник</h3>
              
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>MRR (Monthly Recurring Revenue) - місячний регулярний дохід.</strong> Скільки грошей ви отримуєте від підписок щомісяця. 
                  Це серце SaaS-бізнесу. MRR = Кількість активних підписок × Середня ціна підписки. Зростання MRR на 10-20% щомісяця - 
                  здоровий темп для раннього стартапу. ARR (Annual RR) = MRR × 12.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Burn Rate - швидкість витрат.</strong> Скільки грошей компанія витрачає щомісяця більше, ніж заробляє. 
                  Якщо MRR = $15,000, а витрати = $23,000, то Burn Rate = -$8,000/міс. Це критичний показник для стартапів на стадії залучення інвестицій. 
                  Інвестори завжди питають: "Який у вас burn rate?"
                </p>
                
                <p className="leading-relaxed">
                  <strong>Runway - скільки протримаєтесь.</strong> При поточному Burn Rate скільки місяців стартап зможе працювати до закінчення грошей. 
                  Формула: Runway = Залишок на рахунку / Burn Rate. Якщо є $80,000 і burn rate $8,000/міс, runway = 10 місяців. 
                  Коли runway &lt; 6 місяців - час шукати інвестиції або скорочувати витрати.
                </p>
                
                <p className="leading-relaxed">
                  <strong>CAC (Customer Acquisition Cost) - вартість залучення клієнта.</strong> Скільки витрачаєте на маркетинг, щоб залучити одного платного клієнта. 
                  Формула: CAC = Витрати на маркетинг / Кількість нових клієнтів. Якщо витратили $3,000 на рекламу і отримали 30 клієнтів, CAC = $100. 
                  CAC повинен бути меншим за LTV (lifetime value клієнта).
                </p>
                
                <p className="leading-relaxed">
                  <strong>Unit Economics - економіка одиниці.</strong> Скільки заробляєте на одному клієнті за весь час його життя мінус витрати на залучення. 
                  LTV (Lifetime Value) = Середній чек × Кількість покупок за життя. Якщо LTV = $500, а CAC = $100, ви заробляєте $400 чистими з клієнта. 
                  Співвідношення LTV/CAC має бути &gt; 3 для здорового бізнесу.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Чому професійні інвестори відмовляють стартапам без обліку</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Немає довіри до цифр</h4>
                    <p className="text-sm text-slate-700">
                      "У нас MRR $50K" - але звідки ця цифра? Які підтвердження? Інвестор хоче бачити фінансову модель з реальними транзакціями, 
                      а не презентацію з красивими графіками. Без системи обліку ви не можете довести свої показники.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Непрогнозований Burn Rate</h4>
                    <p className="text-sm text-slate-700">
                      Якщо ви не знаєте точний Burn Rate, інвестор не розуміє, на скільки вистачить його інвестиції. 
                      "Ми витрачаємо десь $20-30K на місяць" - це не відповідь. Потрібна точна цифра з розбивкою: зарплати, маркетинг, інфраструктура.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Відсутність Unit Economics</h4>
                    <p className="text-sm text-slate-700">
                      Інвестор питає: "Скільки коштує залучити клієнта? Скільки він приносить грошей?" Якщо ви не знаєте CAC та LTV - 
                      це означає, що ви не розумієте свою бізнес-модель. Немає обліку = немає даних = немає інвестицій.
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
              Додаткові інструменти для IT-бізнесу
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to={createPageUrl('ProductPro')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileSpreadsheet className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Таблиця PRO</h3>
                <p className="text-sm text-slate-600 mb-3">Повний облік для стартапів з MRR та Burn Rate</p>
                <div className="text-emerald-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('ProductLite')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Таблиця Lite</h3>
                <p className="text-sm text-slate-600 mb-3">Базовий облік для MVP та ранніх стадій</p>
                <div className="text-orange-600 font-semibold text-sm flex items-center gap-2">
                  Детальніше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl('CustomSolution')} className="group">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Індивідуальне рішення</h3>
                <p className="text-sm text-slate-600 mb-3">Повноцінна платформа для великих IT-компаній</p>
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