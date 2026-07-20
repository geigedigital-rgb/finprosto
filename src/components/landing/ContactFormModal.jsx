import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '../ToastContext';
import { invokeFunction } from '@/api/functions';

export default function ContactFormModal({ isOpen, onClose }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', contact: '', description: '' });
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const mountTimeRef = useRef(Date.now());

  // Anti-spam: дозволити відправку через 3 секунди
  useEffect(() => {
    if (isOpen) {
      mountTimeRef.current = Date.now();
      setCanSubmit(false);
      const timer = setTimeout(() => setCanSubmit(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Anti-spam: Honeypot
    if (honeypot) {
      console.warn('Bot detected');
      return;
    }
    
    // Anti-spam: Мінімальний час
    const timeSpent = Date.now() - mountTimeRef.current;
    if (timeSpent < 3000 || !canSubmit) {
      showToast('Будь ласка, зачекайте кілька секунд', 'error');
      return;
    }
    
    // Anti-spam: Rate limiting
    const rateLimitKey = 'contact_form_submissions';
    const submissions = JSON.parse(localStorage.getItem(rateLimitKey) || '[]');
    const now = Date.now();
    const oneHourAgo = now - 60 * 60 * 1000;
    const recentSubmissions = submissions.filter(time => time > oneHourAgo);
    
    if (recentSubmissions.length >= 3) {
      showToast('Ви досягли ліміту відправок. Спробуйте пізніше або напишіть нам в Telegram', 'error');
      return;
    }
    
    const lastSubmission = recentSubmissions[recentSubmissions.length - 1];
    if (lastSubmission && (now - lastSubmission) < 60000) {
      const waitSeconds = Math.ceil((60000 - (now - lastSubmission)) / 1000);
      showToast(`Зачекайте ${waitSeconds} секунд перед наступною відправкою`, 'error');
      return;
    }
    
    if (!formData.name || !formData.contact || !formData.description) {
      showToast('Будь ласка, заповніть всі поля', 'error');
      return;
    }
    
    setLoading(true);
    
    try {
      const metadata = {
        ip: await fetch('https://api.ipify.org?format=json')
          .then(r => r.json())
          .then(d => d.ip)
          .catch(() => 'невідомо'),
        referrer: document.referrer || 'пряме відвідування',
        screen: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language || navigator.userLanguage,
        page: window.location.href,
        formType: 'Contact Form Modal',
      };
      
      const { data } = await invokeFunction('sendToTelegram', {
        email: formData.contact,
        message: `Ім'я: ${formData.name}\n\nОпис задачі:\n${formData.description}`,
        metadata
      });
      
      recentSubmissions.push(now);
      localStorage.setItem(rateLimitKey, JSON.stringify(recentSubmissions));
      
      showToast('Дякуємо! Заявка відправлена. Ми зв\'яжемося з вами протягом години.', 'success');
      setFormData({ name: '', contact: '', description: '' });
      onClose();
    } catch (error) {
      console.error('Send error:', error);
      showToast('Помилка відправки. Спробуйте ще раз або напишіть нам в Telegram', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
                <h2 className="text-2xl font-bold text-slate-900">Обговоримо ваш проєкт</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-6">
                  Залиште заявку — зв'яжемось протягом години та оцінимо проєкт протягом 24 годин
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field */}
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
                    <label className="block text-sm font-medium text-slate-700 mb-2">Ваше ім'я</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Іван Петренко"
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="email@company.com"
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Опис задачі</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Розкажіть про ваш бізнес та що хочете автоматизувати..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 text-lg rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Відправляємо...' : 'Відправити заявку'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}