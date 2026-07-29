import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import {
  ArrowRight,
  Check,
  Star,
  Eye,
  Wallet,
  TrendingUp,
  BarChart3,
  Calendar,
  FolderKanban,
  Tags,
  Landmark,
  AlertCircle,
  FileSpreadsheet,
  Mail,
  Copy,
  ChevronDown,
  Shield,
  Zap,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PaymentModal from '../components/payment/PaymentModal';

const LOGO_URL =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6d65c51c9_logo.png';

const HERO_IMAGE =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png';

const productInfo = {
  id: 'pro',
  title: 'Таблиця обліку фінансів PRO',
  price: '1730',
  oldPrice: '2090',
  discount: '-30%',
  image:
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png',
  demoUrl:
    'https://docs.google.com/spreadsheets/d/11Wd50AtAzX9DyxbFIdnWPlvp8NzewUUY0ni0mcfAJj8/edit?usp=drive_link',
};

const pains = [
  {
    icon: Wallet,
    title: 'Каса «в голові»',
    text: 'Не знаєте точно, скільки грошей на рахунках і що можна витрачати вже сьогодні.',
  },
  {
    icon: AlertCircle,
    title: 'Неясно, чи є прибуток',
    text: 'Оборот росте, а на карті порожньо. P&L і каса живуть окремо.',
  },
  {
    icon: TrendingUp,
    title: 'Касові сюрпризи',
    text: 'Зарплата або податки «раптом», бо немає плану руху коштів на тиждень.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel-хаос',
    text: 'Кілька файлів, ручні формули, помилки й години зведення замість рішень.',
  },
];

const steps = [
  {
    icon: Zap,
    step: '01',
    title: 'Оплачуєте онлайн',
    text: 'Одна кнопка — безпечна оплата WayForPay. Без підписок і прихованих платежів.',
  },
  {
    icon: Mail,
    step: '02',
    title: 'Отримуєте лист',
    text: 'Посилання на таблицю приходить на email за ~2 хвилини після оплати.',
  },
  {
    icon: Copy,
    step: '03',
    title: 'Копіюєте в свій Google',
    text: 'Робоча копія у вашому акаунті. Дані лише у вас. Старт за 10 хвилин.',
  },
];

const modules = [
  {
    icon: BarChart3,
    title: 'Операції',
    text: 'Усі транзакції в одному листі: дата, рахунок, стаття, проєкт, статус оплати.',
    tag: 'Щодня',
  },
  {
    icon: TrendingUp,
    title: 'CashFlow / звіт',
    text: 'Бачите рух грошей, залишки й ключові показники місяця без зведень вручну.',
    tag: 'Контроль',
  },
  {
    icon: FolderKanban,
    title: 'Проєкти',
    text: 'Прибуток і рентабельність по проєктах і клієнтах — щоб знати, що масштабувати.',
    tag: 'Маржа',
  },
  {
    icon: Tags,
    title: 'Статті',
    text: 'Доходи й витрати за категоріями: реклама, зарплата, податки, прибуток.',
    tag: 'Структура',
  },
  {
    icon: Landmark,
    title: 'Рахунки',
    text: 'Готівка й банки в одному балансі: план/факт і переміщення між рахунками.',
    tag: 'Баланс',
  },
  {
    icon: Calendar,
    title: 'Річний звіт',
    text: 'Виторг, витрати, EBITDA, рентабельність і порівняння з минулим роком.',
    tag: 'Аналітика',
  },
];

const reviews = [
  {
    name: 'Олександр Петренко',
    meta: 'CEO · E-commerce',
    text: 'Завдяки таблицям PRO ми скоротили час на фінансову звітність на 70%. Тепер бачимо всю картину бізнесу в одному місці.',
    photo: '/reviews/oleksandr-petrenko.jpg',
    avatar: '/reviews/oleksandr-petrenko-avatar.jpg',
  },
  {
    name: 'Марія Коваленко',
    meta: 'Власниця · Крафтове виробництво',
    text: 'Шаблон складу — справжня знахідка! Нарешті контролюємо залишки та прогнозуємо закупівлі.',
    photo: '/reviews/maria-kovalenko.jpg',
    avatar: '/reviews/maria-kovalenko-avatar.jpg',
  },
  {
    name: 'Дмитро Сидоренко',
    meta: 'Директор · Будівельна компанія',
    text: 'Найкраще — по кожному проєкту видно цифри: прибуток, витрати, рентабельність. Більше не гадаю, який об\'єкт тягне, а який годує.',
    photo: '/reviews/dmytro-sydorenko.jpg',
    avatar: '/reviews/dmytro-sydorenko-avatar.jpg',
  },
];

const screenshots = [
  {
    title: 'Реальний звіт',
    description: 'Залишки, місяць, EBITDA, план/факт — уся картина на одному екрані.',
    image: HERO_IMAGE,
  },
  {
    title: 'Операції',
    description: 'Швидке внесення транзакцій з випадаючими списками й контролем оплат.',
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/fe8b74091_.png',
  },
  {
    title: 'Річний звіт',
    description: 'Помісячна аналітика: виторг, витрати, рентабельність, динаміка року.',
    image:
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/661c1b828_.png',
  },
];

const offerItems = [
  'Готовий шаблон Google Sheets PRO',
  'CashFlow, P&L, план/факт, річний звіт',
  'Проєкти, статті, рахунки, контрагенти',
  'Одноразова оплата — без підписок',
  'Доставка на email за ~2 хвилини',
  'Підтримка в Telegram після покупки',
];

const faqs = [
  {
    q: 'Чи потрібен бухгалтер, щоб користуватись?',
    a: 'Ні. Таблиця розрахована на власника: заповнюєте операції з випадаючих списків — звіти рахуються самі. Бухгалтер може підключитись за потреби.',
  },
  {
    q: 'Це Google Sheets чи Excel?',
    a: 'Робочий шаблон — Google Sheets (хмарно, з будь-якого пристрою, спільний доступ команді). Формули вже налаштовані.',
  },
  {
    q: 'Чи підійде для мого бізнесу?',
    a: 'Так для більшості малих і середніх бізнесів: послуги, e-commerce, виробництво, агенції, салони, будівництво. Структура універсальна — підлаштовуєте статті й напрями під себе.',
  },
  {
    q: 'Що відбувається після оплати?',
    a: 'На email приходить посилання. Робите копію таблиці у свій Google-акаунт і починаєте вносити дані. Доступ залишається у вас назавжди.',
  },
  {
    q: 'Чим PRO відрізняється від Lite?',
    a: 'Lite — базовий облік доходів/витрат і бюджет. PRO додає CashFlow, P&L, проєкти, контроль оплат, рахунки, річний звіт і план/факт — повна картина для рішень.',
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full px-4 sm:px-5 py-4 flex items-center justify-between text-left gap-3 hover:bg-slate-50/80 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-[15px] leading-snug">{item.q}</span>
        <span
          className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-4 sm:px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AdsProPage() {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);

  const openBuy = () => setPaymentOpen(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title =
      'Таблиця обліку фінансів PRO — контроль CashFlow і прибутку | FinProsto';

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta(
      'name',
      'description',
      'Готова таблиця обліку фінансів PRO в Google Sheets: CashFlow, P&L, план/факт, проєкти. 1 730 ₴ одноразово · 1900+ підприємців · доставка на email за 2 хвилини.'
    );
    setMeta('name', 'robots', 'index, follow');
    setMeta(
      'property',
      'og:title',
      'Таблиця обліку фінансів PRO — бачите гроші бізнесу за 10 хвилин на день'
    );
    setMeta(
      'property',
      'og:description',
      'CashFlow, P&L, контроль оплат і річний звіт. Одноразова оплата 1 730 ₴. Без підписок.'
    );
    setMeta('property', 'og:type', 'product');
    setMeta('property', 'og:url', window.location.origin + '/AdsPro');
    setMeta('property', 'og:image', HERO_IMAGE);
    setMeta('property', 'og:price:amount', '1730');
    setMeta('property', 'og:price:currency', 'UAH');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta(
      'name',
      'twitter:title',
      'Таблиця обліку фінансів PRO | FinProsto'
    );
    setMeta(
      'name',
      'twitter:description',
      'Повний контроль фінансів бізнесу в Google Sheets. 1 730 ₴ · 4.9/5'
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/AdsPro');

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'adspro-product-jsonld';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Таблиця обліку фінансів PRO',
      description:
        'Готовий шаблон Google Sheets для обліку фінансів бізнесу: CashFlow, P&L, проєкти, рахунки, річний звіт.',
      image: [HERO_IMAGE],
      brand: { '@type': 'Brand', name: 'FinProsto' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1900',
        bestRating: '5',
      },
      offers: {
        '@type': 'Offer',
        url: window.location.origin + '/AdsPro',
        priceCurrency: 'UAH',
        price: '1730',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
      },
    });
    document.getElementById('adspro-product-jsonld')?.remove();
    document.head.appendChild(script);

    return () => {
      document.getElementById('adspro-product-jsonld')?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7faf8] overflow-x-clip pb-24 sm:pb-0">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.10),_transparent_50%)]" />

      {/* Minimal header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-100/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-[4.25rem] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src={LOGO_URL} alt="FinProsto" className="h-8 sm:h-9 w-auto" />
          </a>
          <Button
            onClick={openBuy}
            className="h-10 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-5 text-sm font-semibold shadow-sm"
          >
            Придбати
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </header>

      <main id="top" className="relative">
        {/* Hero */}
        <section className="pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.15] mb-4">
                  Готова таблиця обліку фінансів{' '}
                  <span className="text-emerald-700">без підписок</span>
                </h1>

                <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed mb-5 max-w-xl">
                  CashFlow, P&amp;L і план/факт у Google Sheets. Купили один раз — користуєтесь назавжди.
                </p>

                <ul className="space-y-2.5 mb-6">
                  {[
                    'CashFlow і P&L в одному місці',
                    'План/факт і контроль оплат',
                    'Одноразова оплата — користуйтесь назавжди',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-700" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-end gap-2 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                    1 730 ₴
                  </span>
                  <span className="text-base text-slate-400 line-through mb-1">2 090 ₴</span>
                  <span className="mb-1.5 inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                    -30%
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Button
                    onClick={openBuy}
                    className="h-12 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-7 text-base font-semibold shadow-sm"
                  >
                    Отримати таблицю PRO
                    <span className="ml-2 inline-flex w-6 h-6 rounded-full bg-white/20 items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Button>
                  <a href={productInfo.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto h-12 rounded-full border-slate-200 bg-white text-slate-800 hover:bg-slate-50 px-7 text-base font-semibold"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Дивитись демо
                    </Button>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-500">
                  Доставка на email · Без підписок · Підтримка в Telegram
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="rounded-[28px] bg-white border border-slate-100 shadow-[0_16px_50px_rgba(15,23,42,0.08)] overflow-hidden p-2 sm:p-3">
                  <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/11]">
                    <img
                      src={HERO_IMAGE}
                      alt="Скріншот таблиці обліку фінансів PRO"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pain — soft contrast band */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-100/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Типові болі власника без системи обліку
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {pains.map((pain, i) => {
                const Icon = pain.icon;
                return (
                  <motion.div
                    key={pain.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl sm:rounded-[28px] bg-[#fafafa] border border-slate-100 p-5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{pain.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{pain.text}</p>
                  </motion.div>
                );
              })}
            </div>
            <p className="text-center text-[15px] text-slate-600 mt-8 max-w-2xl mx-auto leading-relaxed">
              PRO збирає операції, звіти й план в одній таблиці — щоб ви приймали рішення по цифрах, а не по відчуттях.
            </p>
          </div>
        </section>

        {/* Steps — numbered row on mint */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Як це працює
              </h2>
            </div>
            <div className="rounded-[28px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.04)] p-5 sm:p-8">
              <div className="grid md:grid-cols-3 gap-6 md:gap-4">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`relative ${i < steps.length - 1 ? 'md:border-r md:border-slate-100 md:pr-6' : ''} ${i > 0 ? 'md:pl-6' : ''}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center text-sm font-bold">
                          {s.step.replace('0', '')}
                        </div>
                        <Icon className="w-5 h-5 text-emerald-700" strokeWidth={1.75} />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1.5">{s.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-100/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                Інструменти, які дають контроль
              </h2>
              <p className="text-[15px] sm:text-base text-slate-600 max-w-xl mx-auto">
                Не «ще одна таблиця» — готова система обліку під щоденні рішення власника.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl sm:rounded-[28px] bg-[#f7faf8] border border-emerald-100/60 p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center border border-emerald-100 shadow-sm">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <span className="inline-flex px-2.5 py-1 rounded-full bg-white text-[11px] font-semibold text-emerald-700 border border-emerald-100">
                        {m.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{m.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-3 gap-3 mb-8 sm:mb-10">
              {[
                { value: '1900+', label: 'користувачів' },
                { value: '1 раз', label: 'оплата назавжди' },
                { value: '10 хв', label: 'на день для обліку' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white border border-slate-100 px-3 py-4 sm:py-5 text-center shadow-sm"
                >
                  <div className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
              {reviews.map((r, i) => (
                <motion.article
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group relative h-[400px] sm:h-[460px] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
                >
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-1">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className="w-3.5 h-3.5 text-amber-300/90 fill-amber-300/90" />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-white/55 tabular-nums">5/5</span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-white text-[15px] leading-relaxed mb-4">«{r.text}»</p>
                    <div className="border-t border-white/15 pt-3 flex items-center gap-3">
                      <img
                        src={r.avatar}
                        alt=""
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover object-top border-2 border-white/40 shadow-md flex-shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="font-semibold text-white text-sm tracking-tight">{r.name}</div>
                        <div className="text-xs text-white/65 mt-0.5 truncate">{r.meta}</div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-100/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Три ключові екрани PRO
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {screenshots.map((shot, i) => (
                <motion.div
                  key={shot.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl sm:rounded-[28px] bg-[#f7faf8] border border-slate-100 overflow-hidden"
                >
                  <div className="aspect-[16/11] bg-slate-50 border-b border-slate-100 overflow-hidden">
                    <img
                      src={shot.image}
                      alt={shot.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold text-slate-900 mb-1">{shot.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{shot.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Offer — dark conversion band */}
        <section className="py-12 sm:py-16" id="buy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border border-emerald-800/40 shadow-[0_20px_60px_rgba(15,23,42,0.25)] overflow-hidden"
            >
              <div className="relative p-6 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.22),_transparent_55%)]" />
                <div className="relative">
                  <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                      Таблиця обліку фінансів PRO
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300">
                      Все для контролю грошей бізнесу — однією покупкою без підписки
                    </p>
                  </div>

                  <div className="flex items-end justify-center gap-2 mb-6">
                    <span className="text-4xl sm:text-5xl font-bold text-white">1 730 ₴</span>
                    <span className="text-lg text-slate-400 line-through mb-1.5">2 090 ₴</span>
                    <span className="mb-2 inline-flex px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                      -30%
                    </span>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
                    {offerItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 rounded-2xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm text-slate-200"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-300" strokeWidth={2.5} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openBuy}
                    className="w-full h-12 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-base sm:text-lg font-semibold shadow-sm"
                  >
                    Придбати за 1 730 ₴
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-center text-xs sm:text-sm text-slate-400 mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                    <span className="inline-flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" /> Email за 2 хв
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5" /> Без підписок
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> Telegram
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ — slate band */}
        <section className="py-12 sm:py-16 bg-slate-100/70 border-y border-slate-200/60">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Часті питання
              </h2>
            </div>
            <div className="space-y-2.5">
              {faqs.map((item, i) => (
                <FaqItem
                  key={item.q}
                  item={item}
                  open={faqOpen === i}
                  onToggle={() => setFaqOpen(faqOpen === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-16 pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Почніть вести фінанси системно вже сьогодні
            </h2>
            <p className="text-[15px] sm:text-base text-slate-600 mb-6 leading-relaxed">
              Готова таблиця без підписок. Купили один раз — користуєтесь назавжди.
            </p>
            <Button
              onClick={openBuy}
              className="h-12 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-8 text-base font-semibold shadow-sm"
            >
              Отримати таблицю PRO
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="relative border-t border-slate-200/80 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="" className="h-6 w-auto opacity-80" />
            <span>© {new Date().getFullYear()} FinProsto</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to={createPageUrl('Privacy')} className="hover:text-emerald-700 transition-colors">
              Конфіденційність
            </Link>
            <Link to={createPageUrl('Offer')} className="hover:text-emerald-700 transition-colors">
              Оферта
            </Link>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      {!paymentOpen && (
        <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-[0_-8px_30px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="text-lg font-bold text-slate-900 leading-none">1 730 ₴</div>
              <div className="text-[11px] text-slate-400 line-through">2 090 ₴</div>
            </div>
            <Button
              onClick={openBuy}
              className="flex-1 h-11 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold"
            >
              Придбати
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>
      )}

      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        product={productInfo}
      />
    </div>
  );
}
