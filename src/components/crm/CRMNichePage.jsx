import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Star, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';
import { useToast } from '../ToastContext';
import { invokeFunction } from '@/api/functions';

export default function CRMNichePage({ niche }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', contact: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [honeypot, setHoneypot] = useState('');
  const mountTime = React.useRef(Date.now());

  useEffect(() => {
    document.title = `${niche.metaTitle} | FinProsto`;
    window.scrollTo(0, 0);

    const setMeta = (name, content, prop) => {
      let el = prop ? document.querySelector(`meta[property="${prop}"]`) : document.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement('meta'); if (prop) el.setAttribute('property', prop); else el.setAttribute('name', name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };
    setMeta('description', niche.metaDescription);
    setMeta('keywords', niche.keywords);
    setMeta(null, niche.metaTitle, 'og:title');
    setMeta(null, niche.metaDescription, 'og:description');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = window.location.origin + `/#/${niche.pageSlug}`;

    const schemaId = `crm-niche-schema-${niche.pageSlug}`;
    let schema = document.getElementById(schemaId);
    if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.id = schemaId; document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": niche.h1,
      "description": niche.metaDescription,
      "provider": { "@type": "Organization", "name": "FinProsto", "url": window.location.origin },
      "areaServed": "UA",
      "offers": { "@type": "Offer", "price": "1000", "priceCurrency": "USD" },
      ...(niche.faq && {
        "mainEntityOfPage": {
          "@type": "FAQPage",
          "mainEntity": niche.faq.map(f => ({
            "@type": "Question", "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }
      })
    });

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [niche]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    if (Date.now() - mountTime.current < 3000) { showToast('Зачекайте кілька секунд', 'error'); return; }
    if (!formData.name || !formData.contact || !formData.description) { showToast('Заповніть всі поля', 'error'); return; }
    setLoading(true);
    try {
      await invokeFunction('sendToTelegram', {
        email: formData.contact,
        message: `CRM ${niche.short}\nІм'я: ${formData.name}\n\n${formData.description}`,
        metadata: { page: niche.pageSlug, formType: `CRM ${niche.short}` }
      });
      showToast('Дякуємо! Зв\'яжемось протягом години.', 'success');
      setFormData({ name: '', contact: '', description: '' });
    } catch (err) {
      showToast('Помилка. Напишіть нам в Telegram', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className={`pt-32 pb-20 bg-gradient-to-b ${niche.heroBg || 'from-slate-900 via-slate-800 to-slate-900'} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${niche.glowColor || 'bg-gradient-to-r from-emerald-600/20 to-teal-600/20'} rounded-full blur-3xl pointer-events-none`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to={createPageUrl('Home')} className="hover:text-white transition-colors">Головна</Link>
            <span>/</span>
            <Link to={createPageUrl('CRM')} className="hover:text-white transition-colors">Розробка CRM</Link>
            <span>/</span>
            <span className="text-slate-300">{niche.short}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8`}>
              <niche.icon className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/80 font-medium">{niche.category}</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {niche.h1}
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              {niche.intro}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {niche.heroTags?.map(tag => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#order">
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-600/20">
                  Замовити CRM
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to={createPageUrl('CRM')}>
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg rounded-xl">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Всі галузі
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems */}
      {niche.problems && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">{niche.problemsTitle}</h2>
              <p className="text-slate-600">Типові проблеми які вирішує CRM для {niche.short.toLowerCase()}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-5">
              {niche.problems.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color || 'from-red-100 to-orange-100'} flex items-center justify-center mb-3`}>
                    <p.icon className={`w-5 h-5 ${p.iconColor || 'text-red-500'}`} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{niche.featuresTitle}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{niche.featuresSub}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {niche.features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${niche.gradient} flex items-center justify-center mb-4 shadow-md`}>
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      {niche.results && (
        <section className="py-16 bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Результати після впровадження CRM</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {niche.results.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">{r.metric}</div>
                  <div className="text-sm text-slate-400">{r.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {niche.faq && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">FAQ: CRM для {niche.short}</h2>
            </motion.div>
            <div className="space-y-3">
              {niche.faq.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors">
                    <span className="font-semibold text-slate-900 pr-4">{item.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-emerald-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-3 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other niches */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 mb-4">Також розробляємо CRM для інших галузей</p>
          <Link to={createPageUrl('CRM')}>
            <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
              Переглянути всі галузі <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Замовити {niche.h1Short || niche.short}</h2>
            <p className="text-slate-400">Зв'яжемось протягом години та оцінимо проєкт за 24 год</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-slate-800 border border-slate-700 rounded-3xl p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input type="text" value={honeypot} onChange={e => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ваше ім'я</label>
                  <Input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Іван Петренко" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 h-12" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email або Telegram</label>
                  <Input value={formData.contact} onChange={e => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="email або @username" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500 h-12" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Розкажіть про бізнес та задачу</label>
                <Textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })}
                  placeholder={niche.formPlaceholder || 'Скільки менеджерів? Що автоматизувати? Які системи зараз використовуєте?'}
                  rows={4} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500" required />
              </div>
              <Button type="submit" disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 text-lg rounded-xl disabled:opacity-50">
                {loading ? 'Відправляємо...' : `Замовити CRM для ${niche.short.toLowerCase()}`}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-center text-xs text-slate-500">
                Або напишіть в <a href="https://t.me/anhelinka_marishchak" target="_blank" rel="noopener noreferrer" className="text-emerald-400">Telegram</a>
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}