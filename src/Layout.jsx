import React, { useEffect } from 'react';
import { ToastProvider } from './components/ToastContext';
import ScrollToTop from './components/ScrollToTop';

export default function Layout({ children, currentPageName }) {
  useEffect(() => {
    // Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.id = 'organization-schema';
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FinProsto",
      "alternateName": "Фінпросто",
      "url": window.location.origin,
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6bb2a5c14_Group481515.png",
      "description": "Готові таблиці для обліку фінансів бізнесу в Google Sheets",
      "sameAs": [
        "https://www.facebook.com/finprosto",
        "https://t.me/finprosto",
        "https://www.instagram.com/finprosto"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "availableLanguage": ["Ukrainian", "Russian"]
      }
    });
    document.head.appendChild(orgScript);

    // WebSite Schema with SearchAction
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.id = 'website-schema';
    websiteScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "FinProsto",
      "alternateName": "Фінпросто - Готові таблиці для бізнесу",
      "url": window.location.origin,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": window.location.origin + "/#/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(websiteScript);

    // ItemList Schema for Navigation
    const navScript = document.createElement('script');
    navScript.type = 'application/ld+json';
    navScript.id = 'navigation-schema';
    navScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Таблиця фінансів PRO",
          "description": "Професійна таблиця для обліку фінансів бізнесу",
          "url": window.location.origin + "/#/ProductPro"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Таблиця обліку складу",
          "description": "Облік складу та аналіз продажів",
          "url": window.location.origin + "/#/ProductWarehouse"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Калькулятор кошторисів",
          "description": "Автоматичний калькулятор кошторисів з експортом в PDF",
          "url": window.location.origin + "/#/ProductEstimate"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Таблиця Lite",
          "description": "Базове рішення для обліку фінансів",
          "url": window.location.origin + "/#/ProductLite"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "База знань",
          "description": "Корисні статті про управління бізнесом",
          "url": window.location.origin + "/#/Blog"
        }
      ]
    });
    document.head.appendChild(navScript);

    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WS3FBKM');
    `;
    document.head.appendChild(gtmScript);

    // Google Analytics
    const gaScript = document.createElement('script');
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9N7MQWQ2TJ';
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const gaConfigScript = document.createElement('script');
    gaConfigScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9N7MQWQ2TJ');
    `;
    document.head.appendChild(gaConfigScript);

    // Facebook Pixel
    const fbPixelScript = document.createElement('script');
    fbPixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '4031916457045096');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbPixelScript);

    const fbPixelNoscript = document.createElement('noscript');
    fbPixelNoscript.innerHTML = `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=4031916457045096&ev=PageView&noscript=1" />`;
    document.body.appendChild(fbPixelNoscript);

    return () => {
      // Cleanup scripts on unmount
      const schemasToRemove = ['organization-schema', 'website-schema', 'navigation-schema'];
      schemasToRemove.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
      
      if (gtmScript.parentNode) gtmScript.parentNode.removeChild(gtmScript);
      if (gaScript.parentNode) gaScript.parentNode.removeChild(gaScript);
      if (gaConfigScript.parentNode) gaConfigScript.parentNode.removeChild(gaConfigScript);
      if (fbPixelScript.parentNode) fbPixelScript.parentNode.removeChild(fbPixelScript);
      if (fbPixelNoscript.parentNode) fbPixelNoscript.parentNode.removeChild(fbPixelNoscript);
    };
  }, []);

  return (
    <ToastProvider>
      <ScrollToTop />
      
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-WS3FBKM"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      
      {children}
    </ToastProvider>
  );
}