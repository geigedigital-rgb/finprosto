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
import { Check } from 'lucide-react';

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
      <div className="min-h-screen bg-white">
        <Navbar />
        <HeroSection />
        <div ref={bundleRef}>
          <BundleSection onBuyBundle={handleBuyBundle} />
        </div>
        <ForWhoSection />
        <FeaturesSection />
        <BusinessCategoriesSection />
        <CustomSolutionSection />
        <div style={{display: 'none'}}>
          <ProductCategoriesTabbedSection />
        </div>
        <div ref={reviewsRef}>
          <ReviewsSection />
        </div>
        <ProductsMiniSection />
        <KnowledgeBaseSection />
        
        {/* SEO Content Block */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Чому облік фінансів критично важливий для бізнесу
              </h2>
              
              <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Що дає професійний облік фінансів підприємству</h3>
                
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    <strong>Контроль грошових потоків.</strong> Облік фінансів бізнесу показує реальний стан справ: скільки грошей на рахунках, 
                    скільки заморожено в товарах та дебіторці, коли очікуються надходження. Без цього розуміння неможливо планувати розвиток 
                    та уникати касових розривів, які призводять до банкрутства навіть прибуткових компаній.
                  </p>
                  
                  <p>
                    <strong>Прийняття обґрунтованих рішень.</strong> Фінансовий облік підприємства дає цифри для стратегічних рішень: 
                    чи можна відкрити новий напрям, чи варто наймати співробітників, які ціни встановлювати на продукцію. 
                    Рішення на основі даних мають у 5 разів вищий успіх порівняно з інтуїтивними.
                  </p>
                  
                  <p>
                    <strong>Виявлення втрат та крадіжок.</strong> Система обліку витрат показує аномалії: чому витрати на матеріали зросли на 30%? 
                    Чому виручка падає при тій самій кількості клієнтів? Управлінський облік допомагає виявляти проблеми на ранній стадії 
                    та економити до 20-30% витрат щороку.
                  </p>
                  
                  <p>
                    <strong>Залучення інвестицій.</strong> Інвестори та банки вимагають прозору фінансову звітність. 
                    Без професійного обліку фінансів ви не отримаєте кредит на розвиток та не зможете залучити партнерів. 
                    P&L звіти, CashFlow прогнози, рентабельність по напрямах - це мінімальний набір для діалогу з інвесторами.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Різниця між бухгалтерським та управлінським обліком</h3>
                
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-white rounded-xl p-6 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-3 text-base">Бухгалтерський облік</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Для податкової та звітності</li>
                      <li>• Ведеться по законодавчим нормам</li>
                      <li>• Історичні дані (що вже сталося)</li>
                      <li>• Рахується бухгалтером</li>
                      <li>• Складний для розуміння власника</li>
                      <li>• Обов'язковий для всіх підприємств</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl p-6 border-2 border-emerald-300">
                    <h4 className="font-bold text-slate-900 mb-3 text-base">Управлінський облік (FinProsto)</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Для власника та прийняття рішень</li>
                      <li>• Ведеться як зручно бізнесу</li>
                      <li>• Реальний час + прогнози майбутнього</li>
                      <li>• Веде власник або менеджер</li>
                      <li>• Зрозумілий та наочний</li>
                      <li>• Необов'язковий, але дуже корисний</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm text-slate-700 mt-6 text-center italic">
                  FinProsto - це управлінський облік фінансів. Він не замінює бухгалтера, а доповнює його, 
                  даючи вам інструмент для контролю та управління бізнесом.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Для кого підходить облік фінансів в Google Sheets</h3>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Малий бізнес</strong> - ФОП, СПД з оборотом до 5 млн грн/рік
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Середній бізнес</strong> - компанії з оборотом 5-50 млн грн/рік
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Стартапи</strong> - молоді компанії, яким потрібен контроль Burn Rate
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Фрілансери</strong> - самозайняті особи з декількома джерелами доходу
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>E-commerce</strong> - інтернет-магазини з контролем реклами та ROI
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Виробництво</strong> - підприємства з розрахунком собівартості
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Послуги</strong> - сфера послуг з обліком проєктів та клієнтів
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Агробізнес</strong> - фермери з сезонним обліком врожаю
                    </div>
                  </div>
                </div>
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