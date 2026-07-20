import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  BarChart3, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';
import { useToast } from '../ToastContext';
import { invokeFunction } from '@/api/functions';


export default function AccountingPageTemplate({ config }) {
  const { showToast } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', contact: '', description: '' });
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const mountTimeRef = useRef(Date.now());

  useEffect(() => {
    document.title = config.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', config.meta.description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://finprosto.com/${config.slug}`;

    // Robots
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.name = 'robots';
      document.head.appendChild(robots);
    }
    robots.content = 'index, follow';

    // OG tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: config.meta.title },
      { property: 'og:description', content: config.meta.description },
      { property: 'og:url', content: `https://finprosto.com/${config.slug}` },
      { property: 'og:image', content: 'https://finprosto.com/og/accounting-systems.jpg' },
    ];
    ogTags.forEach(({ property, content }) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', property); document.head.appendChild(el); }
      el.setAttribute('content', content);
    });

    // JSON-LD
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": config.meta.serviceSchemaName,
        "provider": { "@type": "Organization", "name": "FinProsto", "url": "https://finprosto.com" },
        "areaServed": "Ukraine",
        "serviceType": "Розробка систем обліку для бізнесу",
        "url": `https://finprosto.com/${config.slug}`,
        "description": config.meta.description
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": config.meta.title,
        "url": `https://finprosto.com/${config.slug}`,
        "description": config.meta.description,
        "isPartOf": { "@type": "WebSite", "name": "FinProsto", "url": "https://finprosto.com" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://finprosto.com" },
          { "@type": "ListItem", "position": 2, "name": "Системи обліку", "item": "https://finprosto.com/#/CustomSolution" },
          { "@type": "ListItem", "position": 3, "name": config.h1, "item": `https://finprosto.com/${config.slug}` }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": config.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ];

    const existingScripts = document.querySelectorAll('script[data-accounting-schema]');
    existingScripts.forEach(s => s.remove());

    jsonLd.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-accounting-schema', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[data-accounting-schema]');
      scripts.forEach(s => s.remove());
    };
  }, [config]);

  useEffect(() => {
    const timer = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    const timeSpent = Date.now() - mountTimeRef.current;
    if (timeSpent < 3000 || !canSubmit) { showToast('Зачекайте кілька секунд', 'error'); return; }
    if (!formData.name || !formData.contact || !formData.description) {
      showToast('Заповніть всі поля', 'error'); return;
    }
    setLoading(true);
    try {
      const metadata = {
        referrer: document.referrer || 'пряме відвідування',
        page: window.location.href,
        formType: `Система обліку — ${config.niche}`,
      };
      await invokeFunction('sendToTelegram', {
        email: formData.contact,
        message: `Ім'я: ${formData.name}\n\nСфера: ${config.niche}\n\nОпис:\n${formData.description}`,
        metadata
      });
      showToast('Дякуємо! Заявка відправлена. Зв\'яжемося протягом години.', 'success');
      setFormData({ name: '', contact: '', description: '' });
    } catch {
      showToast('Помилка відправки. Напишіть нам у Telegram', 'error');
    } finally {
      setLoading(false);
    }
  };

  const devProcess = [
    { step: '01', title: 'Аналіз процесів бізнесу', desc: 'Розбираємо, як зараз ведеться облік, де виникають помилки і що важливо автоматизувати.' },
    { step: '02', title: 'Опис структури обліку', desc: 'Формуємо перелік модулів, зв\'язки між ними, ролі користувачів і логіку розрахунків.' },
    { step: '03', title: 'Проектування та прототип', desc: 'Розробляємо структуру таблиць, сутностей, форм і дашбордів. Узгоджуємо з вами до старту.' },
    { step: '04', title: 'Розробка MVP', desc: 'Запускаємо першу версію з ключовим функціоналом: облік, звіти, розрахунки.' },
    { step: '05', title: 'Тестування на реальних даних', desc: 'Наповнюємо тестовими даними, перевіряємо всі розрахунки і звіти.' },
    { step: '06', title: 'Навчання команди та запуск', desc: 'Проводимо навчання, передаємо систему в роботу і супроводжуємо перші тижні.' },
    { step: '07', title: 'Доробки після запуску', desc: 'Коригуємо і розширюємо функціонал на основі реального використання.' },
  ];

  const allModules = [
    'Фінансовий облік', 'Облік продажів', 'Складський облік', 'Інвентаризація',
    'Проекти / замовлення', 'База клієнтів', 'Облік співробітників', 'Розрахунок зарплат',
    'Собівартість', 'Закупівлі', 'Cash Flow', 'Бюджетування',
    'Управлінські звіти', 'Дашборд власника', 'Ролі та доступи', 'Імпорт / експорт даних',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-emerald-600/15 to-teal-600/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm flex-wrap">
                <li><a href="/#/" className="text-slate-400 hover:text-emerald-400 transition-colors">Головна</a></li>
                <li className="text-slate-600">/</li>
                <li><a href="/#/CustomSolution" className="text-slate-400 hover:text-emerald-400 transition-colors">Системи обліку</a></li>
                <li className="text-slate-600">/</li>
                <li className="text-slate-300">{config.niche}</li>
              </ol>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-sm text-emerald-300 font-medium">{config.badge}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{config.h1}</h1>
              <p className="text-lg text-slate-300 mb-4 leading-relaxed">{config.subheadline}</p>
              <p className="text-sm text-slate-400 mb-8">Система обліку, яку можна побачити, зрозуміти і використовувати щодня — без зайвої складності</p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact">
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-6 py-5 rounded-xl text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-emerald-600/20">
                    Обговорити систему обліку
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="/#/CustomSolution">
                  <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 py-5 rounded-xl text-base transition-all">
                    Подивитись приклади рішень
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Dashboard visual */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-slate-400 text-xs ml-2">Дашборд власника</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {config.dashboardMetrics.map((m, i) => (
                    <div key={i} className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                      <div className="text-xs text-slate-500 mb-1">{m.label}</div>
                      <div className={`text-xl font-bold ${m.green ? 'text-emerald-400' : 'text-white'}`}>{m.value}</div>
                      {m.sub && <div className="text-xs text-slate-500 mt-0.5">{m.sub}</div>}
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-700">
                  <div className="text-xs text-slate-500 mb-2">Ключові показники</div>
                  <div className="space-y-2">
                    {config.dashboardRows.map((r, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{r.label}</span>
                        <span className={`text-xs font-semibold ${r.green ? 'text-emerald-400' : r.red ? 'text-red-400' : 'text-slate-300'}`}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Що зазвичай не видно без системи обліку</h2>
            <p className="text-slate-600 text-lg max-w-2xl">Більшість власників у сфері {config.nicheLoc} стикаються з цим щодня — і вважають це нормою. Але кожна з цих ситуацій коштує грошей.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                  <span className="text-red-500 text-lg">!</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the system */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Що входить у систему обліку для {config.nicheLoc}</h2>
            <p className="text-slate-600 text-lg max-w-2xl">Набір модулів формується після аналізу ваших процесів. Нижче — типовий склад системи для цієї сфери. Під ваш бізнес можна додати або прибрати будь-який блок.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.systemIncludes.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Кому підходить</h2>
            <p className="text-slate-400 text-lg">Система розробляється під кожен тип бізнесу окремо</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.forWhom.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-200 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Які звіти та показники будуть доступні</h2>
              <p className="text-slate-600 mb-6">Власник бачить все одним поглядом — без Excel і зведень у месенджерах</p>
              <div className="space-y-3">
                {config.reports.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                    <BarChart3 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Які модулі можна розробити</h2>
              <p className="text-slate-600 mb-6">Підбираємо набір модулів під вашу сферу — нічого зайвого, все що потрібно</p>
              <div className="flex flex-wrap gap-2">
                {allModules.map((m, i) => (
                  <span key={i} className={`text-xs px-3 py-1.5 rounded-full font-medium border ${
                    config.highlightModules && config.highlightModules.includes(m)
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}>{m}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owner insights */}
      {config.ownerInsights && (
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Які рішення ви зможете приймати на основі даних</h2>
              <p className="text-slate-400 text-lg">Замість здогадок — конкретні цифри щодня</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {config.ownerInsights.map((insight, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/30 transition-all">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3 flex-shrink-0">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{insight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dev process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Як проходить розробка системи обліку</h2>
            <p className="text-slate-600 text-lg">Від аналізу процесів до реального запуску — 7 кроків без зайвих узгоджень</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {devProcess.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-white text-sm font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FinProsto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Чому обирають FinProsto</h2>
            <p className="text-slate-600 text-lg">Не шаблонна CRM, а система обліку під конкретні процеси {config.nicheLoc}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Знаємо специфіку вашої сфери', desc: `Перед розробкою ми занурюємось у процеси ${config.nicheLoc}: як формуються витрати, що впливає на маржу, які звіти реально потрібні власнику.` },
              { title: 'Конкретні цифри, а не абстракція', desc: 'Власник після запуску бачить: прибуток, залишки, борги, зарплати, Cash Flow. Не "показники ефективності", а реальні гривні.' },
              { title: 'MVP за 4–6 тижнів', desc: 'Першу робочу версію запускаємо швидко. Доопрацьовуємо після того, як ви попрацювали з реальними даними.' },
              { title: 'Система зрозуміла без ІТ-знань', desc: 'Менеджер, бухгалтер, майстер або агроном повинні розуміти, що і куди вводити. Навчаємо команду особисто.' },
              { title: 'Супровід після запуску', desc: 'Залишаємось на зв\'язку після передачі системи. Вносимо зміни, відповідаємо на питання, масштабуємо функціонал.' },
              { title: 'Не продаємо зайвого', desc: 'Пропонуємо тільки ті модулі, які реально потрібні вашому бізнесу зараз. Решту можна додати пізніше.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-500 mb-4">Також може бути корисним:</p>
          <div className="flex flex-wrap gap-3">
            {config.relatedLinks.map((l, i) => (
              <a key={i} href={l.href} className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-emerald-600 border border-slate-200 hover:border-emerald-300 rounded-lg px-3 py-1.5 transition-all bg-slate-50 hover:bg-emerald-50">
                <ArrowRight className="w-3 h-3" />
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Часті запитання про систему обліку</h2>
            <p className="text-slate-600">Відповіді на питання, які найчастіше виникають у власників бізнесу у сфері {config.nicheLoc}</p>
          </motion.div>
          <div className="space-y-3">
            {config.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA banner */}
      <section className="py-10 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl">Хочете побачити, як система виглядає у вашій сфері?</p>
            <p className="text-emerald-100 text-sm mt-1">Покажемо структуру обліку під {config.nicheLoc} — безкоштовна консультація</p>
          </div>
          <a href="#contact" className="flex-shrink-0">
            <Button className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-5 rounded-xl font-semibold text-base transition-all hover:scale-105 shadow-md">
              Отримати структуру обліку
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Contact form — CTA */}
      <section id="contact" className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Розкажіть про свій бізнес — запропонуємо структуру системи обліку
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Напишіть у кількох реченнях, що зараз ведете і де болить — зв'яжемось протягом години і покажемо, як це можна вирішити конкретно у вашій ситуації</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-slate-800 border border-slate-700 rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }} tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Ваше ім'я</label>
                <Input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Іван Петренко" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 h-12" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email або Telegram</label>
                <Input value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="email@company.com або @username" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 h-12" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Опишіть ваш бізнес і що потрібно автоматизувати</label>
                <Textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
                  placeholder={`Розкажіть про ваш бізнес у сфері ${config.niche}: що зараз ведете, де болить, що хочете бачити у звітах...`}
                  rows={5} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500" required />
              </div>
              <Button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 text-lg rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-emerald-600/20 disabled:opacity-50">
                {loading ? 'Відправляємо...' : 'Отримати консультацію'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}