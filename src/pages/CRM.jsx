import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import {
  ArrowRight, CheckCircle2, Settings, Users, BarChart3,
  Building2, Package, ShoppingCart, Scissors, Heart,
  Truck, Star, Zap, DollarSign, Shield, Database, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const CRM_NICHES = [
  {
    slug: 'CRMTrade',
    icon: Package,
    title: 'CRM для оптової торгівлі та дистрибуції',
    short: 'Оптова торгівля',
    desc: 'Контроль менеджерів, дебіторська заборгованість, прайс-листи по клієнтах, воронка угод, інтеграція зі складом та 1С.',
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50',
    tags: ['Дебіторка', 'Склад', 'Прайс-листи', 'Менеджери'],
    result: '+34% виручки за рік після впровадження'
  },
  {
    slug: 'CRMBeauty',
    icon: Scissors,
    title: 'CRM для салонів краси та б\'юті-бізнесу',
    short: 'Салони краси',
    desc: 'Онлайн-запис, нагадування клієнтам, програма лояльності, облік майстрів, фінанси по кожній послузі.',
    gradient: 'from-pink-500 to-rose-500',
    bg: 'from-pink-50 to-rose-50',
    tags: ['Онлайн-запис', 'Лояльність', 'Майстри', 'SMS-нагадування'],
    result: '-60% неявок клієнтів після автоматичних нагадувань'
  },
  {
    slug: 'CRMEcommerce',
    icon: ShoppingCart,
    title: 'CRM для інтернет-магазину та e-commerce',
    short: 'Інтернет-магазин',
    desc: 'Обробка замовлень, інтеграція з маркетплейсами, Нова Пошта, повторні продажі, LTV клієнтів, аналітика рекламних каналів.',
    gradient: 'from-violet-500 to-purple-500',
    bg: 'from-violet-50 to-purple-50',
    tags: ['Rozetka', 'Нова Пошта', 'LTV', 'Маркетплейси'],
    result: 'х2.3 до повторних замовлень за 6 місяців'
  },
  {
    slug: 'CRMConstruction',
    icon: Building2,
    title: 'CRM для будівельного бізнесу та підрядників',
    short: 'Будівництво',
    desc: 'Управління об\'єктами, контроль підрядників, кошториси, дедлайни, документообіг та фінанси по кожному проекту.',
    gradient: 'from-orange-500 to-amber-500',
    bg: 'from-orange-50 to-amber-50',
    tags: ['Об\'єкти', 'Кошториси', 'Підрядники', 'Документи'],
    result: 'Знизили прострочки по проектах з 70% до 12%'
  },
  {
    slug: 'CRMServices',
    icon: Users,
    title: 'CRM для B2B-послуг та агентств',
    short: 'B2B та агентства',
    desc: 'Довгі угоди, кілька контактних осіб, документи, NPS клієнтів, завдання команди, автоматичні звіти для клієнтів.',
    gradient: 'from-emerald-500 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
    tags: ['Довгі угоди', 'NPS', 'Команда', 'Звіти'],
    result: 'Retention клієнтів виріс з 52% до 81%'
  },
  {
    slug: 'CRMManufacturing',
    icon: Truck,
    title: 'CRM для виробничих підприємств',
    short: 'Виробництво',
    desc: 'Замовлення на виробництво, контроль етапів, сировина та готова продукція, відвантаження, фінанси по партіях.',
    gradient: 'from-slate-500 to-slate-700',
    bg: 'from-slate-50 to-slate-100',
    tags: ['Виробничі замовлення', 'Склад', 'Партії', 'Відвантаження'],
    result: 'Скоротили час виконання замовлень на 40%'
  }
];

const WHY_CUSTOM = [
  { icon: DollarSign, title: 'Без щомісячної плати за користувачів', desc: 'KeyCRM, KeepinCRM — платите роками. Ваша CRM — одноразова інвестиція, ваша власність назавжди.' },
  { icon: Settings, title: 'Точно під ваш процес продажу', desc: 'Не підлаштовуєте бізнес під шаблон CRM, а CRM будується під ваш унікальний процес.' },
  { icon: Shield, title: 'Дані на вашому сервері', desc: 'Клієнтська база, угоди, фінанси — зберігаються де ви хочете. Нікому не передаються.' },
  { icon: Database, title: 'Будь-яка інтеграція', desc: '1С, Нова Пошта, Rozetka, Checkbox, банки, Telegram-бот — підключаємо будь-які системи.' }
];

export default function CRMPage() {
  useEffect(() => {
    document.title = 'Розробка CRM системи під замовлення в Україні | FinProsto';
    window.scrollTo(0, 0);

    const setMeta = (name, content, prop) => {
      let el = prop ? document.querySelector(`meta[property="${prop}"]`) : document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); if (prop) el.setAttribute('property', prop); else el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', 'Замовити CRM систему під ключ в Україні. Розробка індивідуальних CRM для оптової торгівлі, салонів краси, інтернет-магазинів, будівництва, B2B. Від $1,000, термін 4–6 тижнів.');
    setMeta('keywords', 'замовити CRM, розробка CRM системи Україна, CRM для бізнесу, індивідуальна CRM, CRM під замовлення');
    setMeta(null, 'Розробка CRM системи під замовлення | FinProsto', 'og:title');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = window.location.origin + '/#/CRM';

    const schemas = [
      {
        id: 'crm-hub-schema',
        data: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Розробка CRM системи під замовлення",
          "description": "Індивідуальна розробка CRM систем для різних галузей бізнесу в Україні",
          "provider": { "@type": "Organization", "name": "FinProsto", "url": window.location.origin },
          "areaServed": "UA",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "CRM для різних галузей",
            "itemListElement": CRM_NICHES.map((n, i) => ({
              "@type": "Offer",
              "position": i + 1,
              "name": n.title,
              "url": window.location.origin + `/#/${n.slug}`
            }))
          }
        }
      },
      {
        id: 'crm-hub-breadcrumb',
        data: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Головна", "item": window.location.origin },
            { "@type": "ListItem", "position": 2, "name": "Розробка CRM", "item": window.location.origin + "/#/CRM" }
          ]
        }
      },
      {
        id: 'crm-hub-faq',
        data: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Що таке CRM система для бізнесу?", "acceptedAnswer": { "@type": "Answer", "text": "CRM (Customer Relationship Management) — це система управління відносинами з клієнтами. Вона зберігає базу клієнтів, автоматизує продажі, відстежує угоди, формує аналітику та допомагає менеджерам нічого не забувати." } },
            { "@type": "Question", "name": "Скільки коштує розробка CRM системи в Україні?", "acceptedAnswer": { "@type": "Answer", "text": "Вартість розробки CRM системи в Україні — від $1,000 за MVP до $5,000–$10,000 за повноцінну систему з інтеграціями. Це одноразова інвестиція на відміну від щомісячної оплати за готові рішення." } },
            { "@type": "Question", "name": "Чим індивідуальна CRM краща за KeyCRM або KeepinCRM?", "acceptedAnswer": { "@type": "Answer", "text": "Індивідуальна CRM будується точно під ваш бізнес-процес, зберігається на ваших серверах, не потребує щомісячної оплати та може інтегруватись з будь-якими системами. Це ваша власність назавжди." } },
            { "@type": "Question", "name": "Скільки часу займає розробка CRM?", "acceptedAnswer": { "@type": "Answer", "text": "MVP з основним функціоналом — 4–6 тижнів. Повна CRM система з усіма інтеграціями — 8–16 тижнів. Ми починаємо з найважливішого функціоналу, щоб ви почали використовувати систему якнайшвидше." } }
          ]
        }
      }
    ];
    schemas.forEach(({ id, data }) => {
      let el = document.getElementById(id);
      if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.id = id; document.head.appendChild(el); }
      el.textContent = JSON.stringify(data);
    });

    return () => {
      ['crm-hub-schema', 'crm-hub-breadcrumb', 'crm-hub-faq'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
              <Settings className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300 font-medium">Індивідуальна розробка · Україна · від $1,000</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Розробка CRM системи<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                під ваш бізнес
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              CRM-система — це не просто база клієнтів. Це центральна нервова система вашого бізнесу. Ми розробляємо індивідуальні CRM для різних галузей: від салону краси до виробничого підприємства.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['Оптова торгівля', 'Салони краси', 'Інтернет-магазин', 'Будівництво', 'B2B послуги', 'Виробництво'].map(tag => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#niches">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-600/20">
                  Обрати CRM для своєї галузі
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to={createPageUrl('CustomSolution')}>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl">
                  Обговорити проєкт
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10">
              {[{ v: 'від $1,000', l: 'вартість MVP' }, { v: '4–6 тижнів', l: 'до запуску' }, { v: '100%', l: 'ваша власність' }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white">{s.v}</div>
                  <div className="text-sm text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is CRM */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Що таке CRM система і навіщо вона потрібна бізнесу?</h2>
            <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed">
              <p className="mb-4">
                <strong>CRM (Customer Relationship Management)</strong> — це система управління відносинами з клієнтами. Простіше кажучи: єдине місце, де зберігаються всі дані про ваших клієнтів, їхні замовлення, переговори, угоди та платежі.
              </p>
              <p className="mb-4">
                Без CRM менеджери тримають клієнтів в голові, записниках або Excel. Коли менеджер звільняється — бізнес втрачає його базу. Коли клієнтів стає 100+ — ніхто не пам'ятає хто кому що обіцяв, хто має заплатити, кому треба передзвонити.
              </p>
              <p>
                <strong>CRM вирішує ці проблеми:</strong> зберігає всю історію комунікацій, автоматично нагадує про задачі, показує реальну аналітику по продажах та дозволяє керівнику бачити роботу кожного менеджера в режимі реального часу.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CRM Niches Grid */}
      <section id="niches" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              CRM для різних галузей бізнесу
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Кожна галузь має свою специфіку. Ми розробляємо CRM що відповідає вашим процесам, а не навпаки.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CRM_NICHES.map((niche, i) => (
              <motion.div key={niche.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={createPageUrl(niche.slug)} className="group block h-full">
                  <div className="h-full bg-white border-2 border-slate-100 rounded-2xl overflow-hidden hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    {/* Card Header */}
                    <div className={`bg-gradient-to-br ${niche.bg} p-6 border-b border-slate-100`}>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${niche.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                        <niche.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                        {niche.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{niche.desc}</p>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {niche.tags.map(tag => (
                          <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-emerald-700 font-medium bg-emerald-50 rounded-lg px-3 py-2 mb-4">
                        <Star className="w-4 h-4 flex-shrink-0" />
                        <span>{niche.result}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Детальніше про CRM для {niche.short}
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Custom */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Чому індивідуальна CRM краща за коробкові рішення
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              KeyCRM, KeepinCRM, Bitrix24 — хороші продукти для стандартних бізнесів. Якщо ваш бізнес нестандартний — вам потрібна своя система.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CUSTOM.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Cost comparison */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Порівняння вартості за 3 роки (10 менеджерів)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'KeepinCRM', price: '₴180,000', note: '499 грн × 10 × 36 міс + немає власності', bad: true },
                { name: 'Bitrix24', price: '₴120,000+', note: 'ліцензія + налаштування інтегратора + немає власності', bad: true },
                { name: 'Індивідуальна CRM', price: 'від $3,500', note: 'одноразово · ваша власність назавжди · будь-які інтеграції', good: true }
              ].map((item, i) => (
                <div key={i} className={`rounded-xl p-5 border-2 ${item.good ? 'border-emerald-400 bg-emerald-900/20' : 'border-slate-600'}`}>
                  <div className="text-slate-400 text-sm mb-2">{item.name}</div>
                  <div className={`text-2xl font-bold mb-2 ${item.good ? 'text-emerald-400' : 'text-white'}`}>{item.price}</div>
                  <div className="text-xs text-slate-500">{item.note}</div>
                  {item.good && (
                    <div className="mt-3 flex items-center gap-1 text-emerald-400 text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Найвигідніше за 3 роки
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Як проходить розробка CRM</h2>
            <p className="text-slate-600">Прозорий процес від першої зустрічі до запуску системи</p>
          </motion.div>
          <div className="space-y-4">
            {[
              { n: '01', title: 'Аналіз вашого бізнесу', desc: 'Вивчаємо процеси, больові точки, що зараз використовуєте. Складаємо технічне завдання.', time: '3–5 днів' },
              { n: '02', title: 'Прототип та погодження', desc: 'Показуємо макети інтерфейсів — як виглядатиме CRM. Вносимо правки до погодження.', time: '5–7 днів' },
              { n: '03', title: 'Розробка MVP', desc: 'Клієнти, воронка продажів, задачі, базова аналітика. Вже можете працювати в системі.', time: '4–6 тижнів' },
              { n: '04', title: 'Інтеграції та доопрацювання', desc: '1С, Нова Пошта, телефонія, маркетплейси — підключаємо всі потрібні сервіси.', time: '1–3 тижні' },
              { n: '05', title: 'Запуск та навчання', desc: 'Переносимо дані зі старої системи, навчаємо команду, супровід після запуску.', time: 'Постійно' }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-start gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg shadow">
                  {s.n}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900">{s.title}</h3>
                    <span className="text-xs text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">{s.time}</span>
                  </div>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Часті запитання про розробку CRM</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: 'Скільки коштує розробка CRM системи?', a: 'MVP з базовим функціоналом — від $1,000. Повна система для 10+ менеджерів з інтеграціями — $3,000–$8,000. Це одноразова інвестиція: жодної щомісячної плати.' },
              { q: 'Чи підійде ваша CRM для малого бізнесу?', a: 'Так. Ми розробляємо CRM для будь-якого розміру бізнесу — від ФОП з 2 менеджерами до компаній зі 100+ людьми. Масштаб системи = масштаб вашого бізнесу.' },
              { q: 'Чи можна інтегрувати з Новою Поштою, 1С, Rozetka?', a: 'Так, підключаємо будь-які системи з API: Нова Пошта, Укрпошта, 1С, Rozetka, Prom.ua, Checkbox, будь-який VoIP, банківські системи, Telegram-бот та інші.' },
              { q: 'Що відбувається після запуску?', a: 'Надаємо технічну підтримку від $100–200/міс: виправлення помилок, оновлення, дрібні доробки. Нові функції — за окремим кошторисом.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Готові замовити CRM систему?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Оберіть свою галузь — або напишіть нам одразу і ми підберемо рішення під ваш бізнес
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#niches">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105">
                  Обрати CRM для своєї галузі
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="https://t.me/anhelinka_marishchak" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl">
                  Написати в Telegram
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}