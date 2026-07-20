import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp,
  Target,
  LineChart,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  PieChart,
  Calendar,
  Wallet,
  Zap,
  Shield,
  Brain,
  Calculator,
  FileSpreadsheet,
  Check,
  CheckCircle,
  Plus,
  ShoppingCart,
  Minus,
  Package,
  Sparkles
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';

export default function FinancialModelGuide() {
  const [selectedTable, setSelectedTable] = React.useState('pro');
  const [selectedFinModel, setSelectedFinModel] = React.useState('ecommerce');
  const [paymentModalOpen, setPaymentModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const tableProducts = [
    { value: 'pro', label: 'Таблиця обліку фінансів PRO', price: 1730 },
    { value: 'warehouse', label: 'Таблиця обліку Складу + аналіз продажів', price: 1100 },
    { value: 'estimate', label: 'Калькулятор кошторисів (смети)', price: 410 },
    { value: 'lite', label: 'Таблиця для бізнесу (Lite)', price: 429 }
  ];

  const finModelProducts = [
    { value: 'ecommerce', label: 'Фінансова модель Інтернет-магазину', price: 2500 },
    { value: 'retail', label: 'Фінансова модель: Офлайн-магазин', price: 2500 },
    { value: 'dental', label: 'Фінансова модель: Стоматологічна клініка', price: 2500 },
    { value: 'manufacturing', label: 'Фінансова модель: Виробництво', price: 2500 }
  ];

  const selectedTableProduct = tableProducts.find(p => p.value === selectedTable);
  const selectedFinModelProduct = finModelProducts.find(p => p.value === selectedFinModel);
  const bundlePrice = selectedTableProduct.price + selectedFinModelProduct.price;
  const bundleDiscount = Math.round(bundlePrice * 0.15);
  const finalPrice = bundlePrice - bundleDiscount;

  const tableDescriptions = {
    pro: {
      features: ['P&L, CashFlow, автоматичні звіти', 'Контроль оплати та боргів', 'План/Факт аналіз бюджету', 'Річний звіт та статистика'],
      benefit: 'Найпопулярніше рішення для повного контролю фінансів'
    },
    warehouse: {
      features: ['Надходження/відвантаження товарів', 'Контроль залишків на складі', 'Аналіз продажів та рентабельності', 'ABC-аналіз асортименту'],
      benefit: 'Ідеально для e-commerce та виробництва'
    },
    estimate: {
      features: ['Автоматичний розрахунок вартості', 'Експорт кошторисів у PDF', 'Готові шаблони робіт', 'Історія всіх кошторисів'],
      benefit: 'Швидке створення професійних кошторисів'
    },
    lite: {
      features: ['Прибутки та витрати', 'Статті витрат', 'Планування бюджету', 'Простий CashFlow'],
      benefit: 'Оптимально для старту бізнесу'
    }
  };

  const finModelDescriptions = {
    ecommerce: {
      features: ['Прогноз виторгу від трафіку', 'Аналіз конверсій та маржинальності', 'Оборотний капітал та запаси', 'Грошовий потік (ДДС) на 12 міс'],
      benefit: 'Спеціально для інтернет-магазинів'
    },
    retail: {
      features: ['Воронка продажів офлайн', 'EBITDA та чистий прибуток', 'Витрати на оренду та персонал', 'Аналіз запасів та КЗ'],
      benefit: 'Для роздрібних магазинів та бутіків'
    },
    dental: {
      features: ['Аналіз послуг та середнього чека', 'Витрати на обладнання та персонал', 'NPV, IRR, DCF аналіз', 'Інвестиційний розрахунок'],
      benefit: 'Для стоматологічних клінік'
    },
    manufacturing: {
      features: ['Собівартість та маржинальність', 'Виторг опт/роздріб', 'Витрати на сировину та логістику', 'Операційний прибуток'],
      benefit: 'Для виробничих компаній'
    }
  };
  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Фінансова модель для бізнесу в Excel - Готові шаблони | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Готові фінансові моделі для бізнесу ⭐ Прогноз прибутку, розрахунок EBITDA, cash flow ✅ Шаблони для e-commerce, виробництва, роздрібу, стоматології. Завантажте в Google Sheets.');
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'фінансова модель, фінмодель, таблиця фінансової моделі, фінансова модель excel, шаблон фінансової моделі, финансовая модель, фінансове планування, бізнес модель, EBITDA, NPV, IRR, прогноз прибутку');
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.setAttribute('name', 'keywords');
      newKeywords.setAttribute('content', 'фінансова модель, фінмодель, таблиця фінансової моделі, фінансова модель excel, шаблон фінансової моделі, финансовая модель, фінансове планування, бізнес модель, EBITDA, NPV, IRR, прогноз прибутку');
      document.head.appendChild(newKeywords);
    }

    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', window.location.origin + '/#/FinancialModelGuide');
    } else {
      const newCanonical = document.createElement('link');
      newCanonical.setAttribute('rel', 'canonical');
      newCanonical.setAttribute('href', window.location.origin + '/#/FinancialModelGuide');
      document.head.appendChild(newCanonical);
    }

    // Open Graph
    const ogTags = {
      'og:title': 'Фінансова модель для бізнесу - Готові шаблони в Excel',
      'og:description': 'Готові фінансові моделі для різних галузей бізнесу. Прогнозуйте прибуток, плануйте інвестиції, розраховуйте EBITDA та cash flow.',
      'og:type': 'website',
      'og:url': window.location.origin + '/#/FinancialModelGuide',
      'og:image': 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png',
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

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Що таке фінансова модель і для чого вона потрібна бізнесу",
      "description": "Детальний гайд про фінансові моделі для бізнесу: відмінності від таблиць обліку, ключові метрики, коли потрібна фінмодель",
      "author": {
        "@type": "Organization",
        "name": "FinProsto"
      },
      "publisher": {
        "@type": "Organization",
        "name": "FinProsto",
        "logo": {
          "@type": "ImageObject",
          "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png"
        }
      },
      "datePublished": "2026-01-16",
      "dateModified": "2026-01-16",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.origin + '/#/FinancialModelGuide'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'article-structured-data';
    document.head.appendChild(script);

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Що таке фінансова модель бізнесу?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Фінансова модель - це інструмент для прогнозування фінансових показників бізнесу на майбутнє (6-12 місяців). Вона дозволяє розраховувати виторг, витрати, прибуток, грошові потоки та приймати обґрунтовані рішення про інвестиції та масштабування."
          }
        },
        {
          "@type": "Question",
          "name": "Чим фінансова модель відрізняється від таблиці обліку?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Таблиця обліку фіксує факт (що вже сталося) для поточного контролю витрат. Фінансова модель прогнозує майбутнє (що буде) для стратегічного планування, показує грошові потоки, моделює сценарії розвитку та розраховує інвестиційні показники."
          }
        },
        {
          "@type": "Question",
          "name": "Коли бізнесу потрібна фінансова модель?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Фінмодель потрібна при запуску нового бізнесу, масштабуванні (відкриття нових точок), залученні інвестицій або кредитів, оптимізації витрат та плануванні стратегічного розвитку компанії."
          }
        }
      ]
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
          "name": "Фінансові моделі - Гайд"
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    breadcrumbScript.id = 'breadcrumb-structured-data';
    document.head.appendChild(breadcrumbScript);

    window.scrollTo(0, 0);

    return () => {
      const articleScript = document.getElementById('article-structured-data');
      if (articleScript) articleScript.remove();
      const faqScriptEl = document.getElementById('faq-structured-data');
      if (faqScriptEl) faqScriptEl.remove();
      const breadcrumbScriptEl = document.getElementById('breadcrumb-structured-data');
      if (breadcrumbScriptEl) breadcrumbScriptEl.remove();
    };
  }, []);

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Хочу відкрити нову точку, але страшно',
      description: 'Є ідея масштабуватись, але не розумію скільки треба грошей, коли окупиться і взагалі чи потягну фінансово'
    },
    {
      icon: AlertTriangle,
      title: 'Гроші є, а на рахунку пусто',
      description: 'На папері бізнес прибутковий, клієнти платять, а на рахунку раптом закінчуються гроші і нема чим платити зарплату чи постачальникам'
    },
    {
      icon: AlertTriangle,
      title: 'Не знаю чи потрібен кредит',
      description: 'Банк пропонує кредит для розвитку бізнесу, але немає розуміння чи зможу віддати і чи взагалі він потрібен'
    },
    {
      icon: AlertTriangle,
      title: 'Живу від місяця до місяця',
      description: 'Не бачу картини на рік вперед - скільки буде грошей через 3-6 місяців, чи вистачить на рекламу і нових співробітників'
    }
  ];

  const solutions = [
    {
      icon: CheckCircle2,
      title: 'Контроль грошових потоків',
      description: 'Бачите на місяць вперед коли і скільки грошей буде на рахунку, запобігаєте касовим розривам'
    },
    {
      icon: CheckCircle2,
      title: 'Точні інвестиційні розрахунки',
      description: 'Розраховуєте необхідні інвестиції, термін окупності та NPV проекту перед запуском'
    },
    {
      icon: CheckCircle2,
      title: 'Обґрунтовані рішення про масштаб',
      description: 'Моделюєте різні сценарії розвитку та обираєте найприбутковіший варіант'
    },
    {
      icon: CheckCircle2,
      title: 'Прогноз на 12 місяців',
      description: 'Плануєте виторг, витрати, прибуток та EBITDA з точністю до місяця'
    }
  ];

  const differences = [
    {
      feature: 'Призначення',
      table: 'Фіксація факту (що вже сталося)',
      model: 'Прогноз майбутнього (що буде)'
    },
    {
      feature: 'Горизонт планування',
      table: 'День, місяць (минулий період)',
      model: '6-12 місяців вперед'
    },
    {
      feature: 'Грошові потоки',
      table: 'Не враховує розриви між прибутком та грошима',
      model: 'Показує реальний рух грошей'
    },
    {
      feature: 'Інвестиції та кредити',
      table: 'Не моделює фінансування',
      model: 'Розраховує потребу в капіталі'
    },
    {
      feature: 'Сценарії розвитку',
      table: 'Тільки факт',
      model: 'Песимістичний, базовий, оптимістичний'
    },
    {
      feature: 'Для кого',
      table: 'Поточна операційна діяльність',
      model: 'Стратегічне планування та інвестори'
    }
  ];

  const whenYouNeed = [
    {
      icon: Zap,
      title: 'Запуск нового бізнесу',
      description: 'Розумієте скільки грошей потрібно, коли бізнес стане прибутковим і чи варто взагалі запускатись',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Масштабування',
      description: 'Плануєте відкрити нову точку, вийти в новий регіон або канал продажів - рахуєте окупність',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Залучення інвестицій',
      description: 'Презентуєте бізнес інвесторам або банку для кредиту - потрібна професійна фінмодель',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Оптимізація витрат',
      description: 'Розумієте які витрати критичні, а які можна скоротити без втрати прибутковості',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const keyMetrics = [
    {
      icon: DollarSign,
      metric: 'Виторг (Revenue)',
      description: 'Скільки грошей заробить бізнес від продажу товарів чи послуг. Розраховується на основі кількості клієнтів, відсотка тих хто купує, та середньої суми покупки'
    },
    {
      icon: PieChart,
      metric: 'EBITDA',
      description: 'Скільки бізнес заробляє від основної діяльності до виплати кредитів та податків. Показує реальну прибутковість компанії без впливу фінансування та бухгалтерських нюансів'
    },
    {
      icon: Wallet,
      metric: 'Грошові потоки (Cash Flow)',
      description: 'Реальний рух грошей з урахуванням дебіторки та кредиторки'
    },
    {
      icon: Calculator,
      metric: 'NPV та IRR',
      description: 'Чиста приведена вартість проекту та внутрішня норма доходності'
    },
    {
      icon: BarChart3,
      metric: 'Точка беззбитковості',
      description: 'При якому обсязі продажів бізнес починає заробляти'
    },
    {
      icon: Calendar,
      metric: 'Період окупності',
      description: 'Коли інвестиції повернуться та бізнес вийде на самоокупність'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-white/95 backdrop-blur-md shadow-sm">
          <Navbar />
        </div>
      </div>
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-b from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
            >
              <Brain className="w-4 h-4" />
              Фінансове планування
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Фінансова модель
              </span><br />
              для бізнесу
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Інструмент для прогнозування прибутку, планування інвестицій та прийняття стратегічних рішень на основі цифр
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-xl px-8 text-lg h-14 shadow-lg shadow-emerald-500/20"
                >
                  Обрати фінансову модель
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Знайомі проблеми?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Якщо ви стикалися з цими ситуаціями — вам потрібна фінансова модель
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-red-50 border border-red-100"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Що дає фінансова модель
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Перетворіть невизначеність на конкретні цифри та обґрунтовані рішення
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-emerald-50 border border-emerald-100"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <solution.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h3>
                  <p className="text-slate-600">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-gradient-to-b from-emerald-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Таблиця обліку <span className="text-emerald-600">vs</span> Фінансова модель
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Два інструменти з різним призначенням
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Таблиця обліку */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Таблиця обліку</h3>
              <p className="text-slate-500 text-sm mb-8">Інструмент для фіксації та контролю поточних операцій</p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Фіксує факт</p>
                    <p className="text-sm text-slate-600">Що вже сталося — витрати та доходи за минулі періоди</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Поточний контроль</p>
                    <p className="text-sm text-slate-600">Моментальний огляд витрат і доходів за день, тиждень, місяць</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Операційна діяльність</p>
                    <p className="text-sm text-slate-600">Щоденний облік транзакцій, платежів та надходжень</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Фінансова модель */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-emerald-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Фінансова модель</h3>
              <p className="text-emerald-600 text-sm mb-8">Інструмент для прогнозування та стратегічного планування</p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Прогноз майбутнього</p>
                    <p className="text-sm text-slate-600">Що буде через 3-12 місяців на основі різних сценаріїв</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Стратегічне планування</p>
                    <p className="text-sm text-slate-600">Оцінка інвестицій, кредитів та масштабування бізнесу</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Для власників та інвесторів</p>
                    <p className="text-sm text-slate-600">Прийняття ключових рішень про розвиток компанії</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Differences - Interactive Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white rounded-3xl p-8 border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-slate-400" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">Грошові потоки</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Plus className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-blue-600">Таблиця обліку</p>
                      <p className="text-xs text-slate-600">Фіксує реальні надходження та витрати</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-emerald-600">Фінансова модель</p>
                      <p className="text-xs text-slate-600">Прогнозує cash flow на місяць вперед</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-3xl p-8 border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-slate-400" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">Сценарії розвитку</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Plus className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-blue-600">Таблиця обліку</p>
                      <p className="text-xs text-slate-600">Реальні дані для аналізу результатів</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-emerald-600">Фінансова модель</p>
                      <p className="text-xs text-slate-600">3 варіанти розвитку: консервативний, реальний, амбітний</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative bg-white rounded-3xl p-8 border border-slate-200 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  <Wallet className="w-7 h-7 text-slate-400" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-6">Інвестиції та кредити</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Plus className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-blue-600">Таблиця обліку</p>
                      <p className="text-xs text-slate-600">Облік фактичних транзакцій та платежів</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Plus className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-emerald-600">Фінансова модель</p>
                      <p className="text-xs text-slate-600">Розраховує окупність інвестицій та прибутковість</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bundle Upsell Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Економте 15% на комплекті
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ідеальний комплект
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                для бізнесу
              </span>
            </h2>
            <p className="text-xl text-emerald-100/80 leading-relaxed max-w-3xl mx-auto">
              Контролюйте операційку щодня та плануйте стратегію на рік вперед
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
            {/* Left - Product Selection */}
            <div className="relative space-y-6 lg:space-y-3">
              {/* Table Selection */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Таблиця обліку</h3>
                    <p className="text-xs text-emerald-200">Щоденний контроль операцій</p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-lg"
                >
                  <p className="text-sm font-semibold text-slate-700 mb-3">Оберіть таблицю:</p>

                  <Select value={selectedTable} onValueChange={setSelectedTable}>
                    <SelectTrigger className="w-full h-12 text-sm sm:text-base bg-white border-slate-200 mb-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tableProducts.map(product => (
                        <SelectItem key={product.value} value={product.value} className="text-sm sm:text-base py-3">
                          {product.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <p className="text-emerald-700 font-semibold mb-2 text-sm">{tableDescriptions[selectedTable].benefit}</p>
                    <div className="space-y-1.5">
                      {tableDescriptions[selectedTable].features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700 text-xs">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Plus Sign */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl">
                  <Plus className="w-7 h-7 text-white font-bold" strokeWidth={3} />
                </div>
              </div>

              {/* Mobile Plus Sign */}
              <div className="lg:hidden flex justify-center -my-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
                  <Plus className="w-6 h-6 text-white font-bold" strokeWidth={3} />
                </div>
              </div>

              {/* FinModel Selection */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Фінансова модель</h3>
                    <p className="text-xs text-emerald-200">Планування на 12 місяців</p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200 shadow-lg"
                >
                  <p className="text-sm font-semibold text-slate-700 mb-3">Оберіть модель:</p>

                  <Select value={selectedFinModel} onValueChange={setSelectedFinModel}>
                    <SelectTrigger className="w-full h-12 text-sm sm:text-base bg-white border-emerald-200 mb-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {finModelProducts.map(product => (
                        <SelectItem key={product.value} value={product.value} className="text-sm sm:text-base py-3">
                          {product.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <p className="text-emerald-700 font-semibold mb-2 text-sm">{finModelDescriptions[selectedFinModel].benefit}</p>
                    <div className="space-y-1.5">
                      {finModelDescriptions[selectedFinModel].features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-700 text-xs">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-stretch lg:sticky lg:top-24"
            >
              <div className="relative flex-1 flex flex-col">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20" />

                <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                      <Package className="w-4 h-4" />
                      Комплект 2 в 1
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Підсумок замовлення</h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-3 mb-6 pb-6 border-b-2 border-slate-100">
                    <div className="flex justify-between gap-2 text-slate-600">
                      <span className="text-xs sm:text-sm leading-tight">{selectedTableProduct?.label}</span>
                      <span className="font-semibold text-sm whitespace-nowrap">{selectedTableProduct?.price} грн</span>
                    </div>
                    <div className="flex justify-between gap-2 text-slate-600">
                      <span className="text-xs sm:text-sm leading-tight break-words">{selectedFinModelProduct?.label}</span>
                      <span className="font-semibold text-sm whitespace-nowrap">{selectedFinModelProduct?.price} грн</span>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-slate-500">
                      <span>Сума:</span>
                      <span className="line-through">{bundlePrice} грн</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl">
                      <span className="text-emerald-700 font-semibold">Знижка (15%)</span>
                      <span className="text-emerald-700 font-bold text-lg">-{bundleDiscount} грн</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-slate-100">
                      <span className="text-xl font-bold text-slate-900">До сплати:</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">{finalPrice} грн</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6 p-4 bg-slate-50 rounded-xl mt-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Безлімітний доступ</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Без підписок</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Технічна підтримка</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    size="lg"
                    onClick={() => {
                      setSelectedProduct({
                        id: 'bundle',
                        title: `Комплект: ${selectedTableProduct?.label} + Фінмодель ${selectedFinModelProduct?.label}`,
                        price: finalPrice,
                        originalPrice: bundlePrice,
                        badge: '🔥 КОМПЛЕКТ 2 в 1',
                      });
                      setPaymentModalOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 text-lg rounded-xl shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Придбати за {finalPrice} грн
                  </Button>

                  <p className="text-center text-xs text-slate-400 mt-4">
                    Одноразова оплата • Миттєвий доступ
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-emerald-200 font-medium">
              Понад <span className="text-white font-bold">2000+ підприємців</span> вже використовують обидва інструменти
            </p>
          </motion.div>
        </div>
      </section>

      {/* When You Need Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Коли точно потрібна фінмодель
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              У цих ситуаціях без фінансової моделі не обійтися
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whenYouNeed.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                  style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                />
                <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-100 group-hover:border-transparent transition-all">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Ключові метрики у фінмоделі
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ці показники допоможуть приймати правильні бізнес-рішення
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.metric}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Готові почати планувати<br />майбутнє вашого бізнесу?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Оберіть готову фінансову модель для вашої ніші та почніть прогнозувати прибуток вже сьогодні
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Products')}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-xl px-8 text-lg h-14 shadow-lg"
                >
                  Обрати фінансову модель
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl('Home')}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl px-8 text-lg h-14"
                >
                  На головну
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <PaymentModal 
        isOpen={paymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
}