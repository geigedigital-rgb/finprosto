import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MessageCircle, 
  HelpCircle,
  ChevronDown,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { invokeFunction } from '@/api/functions';
import { useToast } from '../ToastContext';

export default function ContactSection() {
  const { showToast } = useToast();
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const mountTimeRef = React.useRef(Date.now());

  // Anti-spam: дозволити відправку через 3 секунди після монтування
  React.useEffect(() => {
    const timer = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: 'Як отримати таблицю після оплати?',
      answer: 'Після оплати ви отримаєте посилання на Google-таблицю протягом декількох хвилин на вказану email адресу. Просто скопіюйте файл у свій Google Drive.'
    },
    {
      question: 'Чи можна налаштувати таблицю під свій бізнес?',
      answer: 'Так! Всі наші таблиці повністю налаштовуються. Ви можете змінювати категорії, додавати нові поля та адаптувати структуру під ваші потреби.'
    },
    {
      question: 'Чи є підтримка користувачів?',
      answer: 'Так, ми надаємо безкоштовну підтримку всім покупцям. Звертайтеся через Telegram або email, і ми допоможемо з налаштуванням.'
    },
    {
      question: 'Чи потрібно платити щомісяця?',
      answer: 'Ні! Ви платите один раз і отримуєте безлімітний доступ назавжди. Без підписок та прихованих платежів.'
    },
    {
      question: 'Чи працює таблиця на телефоні?',
      answer: 'Так, Google Таблиці працюють на будь-якому пристрої - комп\'ютері, планшеті чи смартфоні через додаток Google Sheets.'
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Часті питання</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors rounded-xl"
                    >
                    <span className="font-medium text-slate-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`} 
                    />
                    </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-slate-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/50 rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Є питання? Напишіть нам!</h2>
              </div>

              <form className="space-y-5" onSubmit={async (e) => {
                e.preventDefault();
                
                // Anti-spam: Honeypot перевірка
                if (honeypot) {
                  console.warn('Bot detected');
                  return;
                }
                
                // Anti-spam: Перевірка мінімального часу на сторінці
                const timeSpent = Date.now() - mountTimeRef.current;
                if (timeSpent < 3000 || !canSubmit) {
                  showToast('Будь ласка, зачекайте кілька секунд', 'error');
                  return;
                }
                
                // Anti-spam: Rate limiting (не більше 3 відправок на годину)
                const rateLimitKey = 'contact_form_submissions';
                const submissions = JSON.parse(localStorage.getItem(rateLimitKey) || '[]');
                const now = Date.now();
                const oneHourAgo = now - 60 * 60 * 1000;
                
                // Фільтруємо старі відправки
                const recentSubmissions = submissions.filter(time => time > oneHourAgo);
                
                if (recentSubmissions.length >= 3) {
                  showToast('Ви досягли ліміту відправок. Спробуйте пізніше або напишіть нам в Telegram', 'error');
                  return;
                }
                
                // Anti-spam: Debouncing (не частіше 1 хвилини)
                const lastSubmission = recentSubmissions[recentSubmissions.length - 1];
                if (lastSubmission && (now - lastSubmission) < 60000) {
                  const waitSeconds = Math.ceil((60000 - (now - lastSubmission)) / 1000);
                  showToast(`Зачекайте ${waitSeconds} секунд перед наступною відправкою`, 'error');
                  return;
                }
                
                if (!email || !message) {
                  showToast('Будь ласка, заповніть всі поля', 'error');
                  return;
                }
                
                setLoading(true);
                
                try {
                  // Збираємо додаткові дані
                  const metadata = {
                    ip: await fetch('https://api.ipify.org?format=json')
                      .then(r => r.json())
                      .then(d => d.ip)
                      .catch(() => 'невідомо'),
                    referrer: document.referrer || 'пряме відвідування',
                    screen: `${window.innerWidth}x${window.innerHeight}`,
                    language: navigator.language || navigator.userLanguage,
                    page: window.location.href,
                    utm: {
                      source: new URLSearchParams(window.location.search).get('utm_source'),
                      medium: new URLSearchParams(window.location.search).get('utm_medium'),
                      campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
                    }
                  };
                  
                  // Видаляємо пусті UTM параметри
                  Object.keys(metadata.utm).forEach(key => {
                    if (!metadata.utm[key]) delete metadata.utm[key];
                  });
                  
                  const { data } = await invokeFunction('sendToTelegram', {
                    email,
                    message,
                    metadata
                  });
                  
                  // Зберігаємо час відправки
                  recentSubmissions.push(now);
                  localStorage.setItem(rateLimitKey, JSON.stringify(recentSubmissions));
                  
                  showToast('Дякуємо! Ваше повідомлення відправлено. Ми зв\'яжемося з вами найближчим часом.', 'success');
                  setEmail('');
                  setMessage('');
                } catch (error) {
                  console.error('Send error:', error);
                  showToast('Помилка відправки. Спробуйте ще раз або напишіть нам в Telegram', 'error');
                } finally {
                  setLoading(false);
                }
              }}>
                {/* Honeypot field - невидиме для людей */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ваш Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ваше повідомлення
                  </label>
                  <Textarea 
                    placeholder="Опишіть ваше питання або проблему..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6 transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {loading ? 'Відправляємо...' : 'Відправити'}
                </Button>
              </form>

              {/* Contact Links */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-4">Або зв'яжіться напряму:</p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://t.me/anhelinka_marishchak" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1.01.54-1.45.52-.48-.01-1.39-.27-2.07-.49-.84-.27-1.51-.42-1.45-.89.03-.24.37-.49 1.02-.74 4-1.74 6.67-2.89 8.01-3.46 3.82-1.59 4.61-1.87 5.13-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.05.01.13 0 .2z"/>
                    </svg>
                    Telegram
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}