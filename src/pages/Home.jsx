import React, { useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ForWhoSection from '@/components/landing/ForWhoSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import ProductCategoriesTabbedSection from '@/components/landing/ProductCategoriesTabbedSection';
import BusinessCategoriesSection from '@/components/landing/BusinessCategoriesSection';
import CustomSolutionSection from '@/components/landing/CustomSolutionSection';
import BundleSection from '@/components/landing/BundleSection';
import ReviewsSection from '@/components/landing/ReviewsSection';
import KnowledgeBaseSection from '@/components/landing/KnowledgeBaseSection';
import ProductsMiniSection from '@/components/landing/ProductsMiniSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import PaymentModal from '@/components/payment/PaymentModal';
import MobileStickyBanner from '@/components/landing/MobileStickyBanner';
import { Check, ArrowRight, Wallet, Lightbulb, Search, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [paymentModalOpen, setPaymentModalOpen] = React.useState(false);
  const bundleRef = React.useRef(null);
  const reviewsRef = React.useRef(null);

  const bundleProduct = {
    title: 'Набір всіх таблиць для Бізнесу',
    price: '1 240',
    oldPrice: '3 669',
    discount: '-70%',
    items: [
      'Таблиця обліку фінансів PRO (1 730 ₴)',
      'Таблиця обліку Складу (1 100 ₴)',
      'Калькулятор кошторисів (410 ₴)',
      'Таблиця для бізнесу Lite (429 ₴)'
    ]
  };

  const handleScrollToBundle = () => {
    bundleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBuyBundle = () => {
    setPaymentModalOpen(true);
  };

  useEffect(() => {
    // SEO Meta tags
    document.title = 'Облік фінансів бізнесу 📊 Готові таблиці для фінансового обліку | FinProsto';
    
    // Обробка хешів (наприклад #features, #for-who)
    if (window.location.hash && !window.location.hash.includes('/')) {
      setTimeout(() => {
        try {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } catch (e) {
          // Ігноруємо невалідні селектори
        }
      }, 100);
    }
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Облік фінансів бізнесу в Google Sheets ⭐ Професійні таблиці для фінансового обліку підприємства • Управління фінансами • Облік доходів витрат • CashFlow • P&L звіти • Фінансова аналітика бізнесу. Від 410₴. 5000+ українських підприємців ведуть облік фінансів з FinProsto');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Облік фінансів бізнесу в Google Sheets ⭐ Професійні таблиці для фінансового обліку підприємства • Управління фінансами • Облік доходів витрат • CashFlow • P&L звіти • Фінансова аналітика бізнесу. Від 410₴. 5000+ українських підприємців ведуть облік фінансів з FinProsto';
      document.head.appendChild(meta);
    }

    // Add keywords meta
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'облік фінансів, облік фінансів бізнесу, облік фінансів підприємства, фінансовий облік, облік бізнесу, ведення обліку фінансів, таблиця обліку фінансів, облік фінансів в google sheets, управління фінансами бізнесу, облік доходів витрат, фінансовий облік підприємства, управлінський облік, cashflow, облік витрат, фінансові звіти, p&l звіт';

    // JSON-LD Structured Data for Google
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "FinProsto - Облік фінансів бізнесу",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Професійні таблиці для обліку фінансів бізнесу та підприємства. Управління фінансами, облік доходів витрат, CashFlow, P&L звіти, фінансова аналітика. Готові рішення в Google Sheets для фінансового обліку.",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "410",
        "highPrice": "3669",
        "priceCurrency": "UAH"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1900",
        "bestRating": "5",
        "worstRating": "1"
      },
      "author": {
        "@type": "Organization",
        "name": "FinProsto",
        "url": "https://finprosto.com"
      }
    };

    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FinProsto",
      "description": "FinProsto - платформа для обліку фінансів бізнесу. Готові таблиці та рішення для фінансового обліку підприємств України.",
      "url": "https://finprosto.com",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6d65c51c9_logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": "Ukrainian"
      }
    };

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Що таке облік фінансів бізнесу?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Облік фінансів бізнесу - це систематичне ведення записів доходів, витрат та інших фінансових операцій підприємства для управління фінансами та прийняття бізнес-рішень."
          }
        },
        {
          "@type": "Question",
          "name": "Як вести облік фінансів для малого бізнесу?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Для малого бізнесу облік фінансів можна вести в Google Sheets з готовими таблицями FinProsto. Це дозволяє контролювати доходи, витрати, CashFlow та отримувати фінансові звіти без складного програмного забезпечення."
          }
        }
      ]
    };

    // Insert JSON-LD scripts
    const scripts = [structuredData, organizationData, faqData];
    scripts.forEach((data, index) => {
      const existingScript = document.querySelector(`script[type="application/ld+json"][data-index="${index}"]`);
      if (existingScript) {
        existingScript.textContent = JSON.stringify(data);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-index', index);
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      }
    });

    // Open Graph tags
    const metaTags = {
      'og:title': 'Облік фінансів бізнесу | Фінансовий облік підприємства | FinProsto',
      'og:description': 'Професійний облік фінансів для українського бізнесу. Таблиці для фінансового обліку, CashFlow, P&L звіти, управління фінансами. 5000+ підприємств ведуть облік з FinProsto',
      'og:type': 'website',
      'og:locale': 'uk_UA',
      'og:site_name': 'FinProsto - Облік фінансів бізнесу',
      'og:url': window.location.href
    };

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/#/');

    // Robots meta
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    Object.entries(metaTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white overflow-x-clip">
        <Navbar />
        <HeroSection />
        <div ref={bundleRef}>
          <BundleSection onBuyBundle={handleBuyBundle} />
        </div>
        <ForWhoSection />
        <ProductsMiniSection />
        <FeaturesSection />
        {/* Hidden for now — ask to restore BusinessCategoriesSection */}
        <div style={{ display: 'none' }}>
          <BusinessCategoriesSection />
        </div>
        <CustomSolutionSection />
        <div style={{display: 'none'}}>
          <ProductCategoriesTabbedSection />
        </div>
        <div ref={reviewsRef}>
          <ReviewsSection />
        </div>
        <KnowledgeBaseSection />
        
        {/* SEO Content Block */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[#f7faf8]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.10),_transparent_55%)]" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-emerald-700 text-sm font-medium mb-5 shadow-sm border border-emerald-100">
                Фінансовий облік
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Чому облік фінансів критично важливий для бізнесу
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Професійний управлінський облік дає контроль, цифри для рішень і прозорість для розвитку
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center sm:text-left">
                Що дає професійний облік фінансів підприємству
              </h3>
              <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
                {[
                  {
                    icon: Wallet,
                    title: 'Контроль грошових потоків',
                    text: 'Облік фінансів бізнесу показує реальний стан справ: скільки грошей на рахунках, скільки заморожено в товарах та дебіторці, коли очікуються надходження. Без цього неможливо планувати розвиток та уникати касових розривів.',
                  },
                  {
                    icon: Lightbulb,
                    title: 'Прийняття обґрунтованих рішень',
                    text: 'Фінансовий облік підприємства дає цифри для стратегічних рішень: чи можна відкрити новий напрям, чи варто наймати співробітників, які ціни встановлювати. Рішення на основі даних мають у 5 разів вищий успіх.',
                  },
                  {
                    icon: Search,
                    title: 'Виявлення втрат та крадіжок',
                    text: 'Система обліку витрат показує аномалії: чому витрати на матеріали зросли на 30%? Чому виручка падає при тій самій кількості клієнтів? Управлінський облік допомагає економити до 20-30% витрат щороку.',
                  },
                  {
                    icon: Landmark,
                    title: 'Залучення інвестицій',
                    text: 'Інвестори та банки вимагають прозору фінансову звітність. P&L звіти, CashFlow прогнози, рентабельність по напрямах — мінімальний набір для діалогу з інвесторами та партнерами.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-white border border-slate-100 p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)] transition-shadow"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-100">
                      <item.icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-white border border-slate-100 p-6 sm:p-8 lg:p-10 mb-12 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Різниця між бухгалтерським та управлінським обліком
              </h3>

              <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
                <div className="rounded-[24px] bg-slate-50 border border-slate-100 p-6">
                  <h4 className="font-bold text-slate-900 mb-4">Бухгалтерський облік</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {[
                      'Для податкової та звітності',
                      'Ведеться по законодавчим нормам',
                      'Історичні дані (що вже сталося)',
                      'Рахується бухгалтером',
                      'Складний для розуміння власника',
                      "Обов'язковий для всіх підприємств",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[24px] bg-emerald-50/80 border border-emerald-100 p-6">
                  <h4 className="font-bold text-slate-900 mb-4">Управлінський облік (FinProsto)</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    {[
                      'Для власника та прийняття рішень',
                      'Ведеться як зручно бізнесу',
                      'Реальний час + прогнози майбутнього',
                      'Веде власник або менеджер',
                      'Зрозумілий та наочний',
                      "Необов'язковий, але дуже корисний",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-6 text-center leading-relaxed max-w-3xl mx-auto">
                FinProsto — це управлінський облік фінансів. Він не замінює бухгалтера, а доповнює його, даючи інструмент для контролю та управління бізнесом.
              </p>
            </div>

            <div className="rounded-[32px] bg-white border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Для кого підходить облік фінансів в Google Sheets
              </h3>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  { title: 'Малий бізнес', text: 'ФОП, СПД з оборотом до 5 млн грн/рік' },
                  { title: 'Середній бізнес', text: 'компанії з оборотом 5-50 млн грн/рік' },
                  { title: 'Стартапи', text: 'молоді компанії, яким потрібен контроль Burn Rate' },
                  { title: 'Фрілансери', text: 'самозайняті з декількома джерелами доходу' },
                  { title: 'E-commerce', text: 'інтернет-магазини з контролем реклами та ROI' },
                  { title: 'Виробництво', text: 'підприємства з розрахунком собівартості' },
                  { title: 'Послуги', text: 'сфера послуг з обліком проєктів та клієнтів' },
                  { title: 'Агробізнес', text: 'фермери з сезонним обліком врожаю' },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-100 px-4 py-3.5"
                  >
                    <span className="mt-0.5 inline-flex w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <div className="text-sm text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">{item.title}</strong>
                      {' — '}
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link to={createPageUrl('Products')}>
                  <Button className="h-12 px-8 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold shadow-sm">
                    Обрати таблицю для обліку
                    <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />

        <MobileStickyBanner onScrollToBundle={handleScrollToBundle} reviewsRef={reviewsRef} />

        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          product={bundleProduct}
        />
      </div>
    </ErrorBoundary>
  );
}