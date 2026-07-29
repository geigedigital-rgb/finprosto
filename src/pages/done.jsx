import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { CheckCircle, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function DonePage() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Отримуємо параметри з URL (WayForPay передає їх після оплати)
    const urlParams = new URLSearchParams(window.location.search);
    const status = (urlParams.get('transactionStatus') || urlParams.get('status') || '').toLowerCase();
    // Якщо хтось потрапив на /done після відхилення — на конверсійну сторінку
    if (status && status !== 'approved') {
      const failParams = new URLSearchParams();
      const emailParam = urlParams.get('clientEmail') || urlParams.get('email') || localStorage.getItem('paymentEmail');
      const orderReferenceParam = urlParams.get('orderReference');
      if (emailParam) failParams.set('email', emailParam);
      if (orderReferenceParam) failParams.set('orderReference', orderReferenceParam);
      window.location.replace(`/PaymentFailed${failParams.toString() ? `?${failParams}` : ''}`);
      return;
    }

    const orderReference = urlParams.get('orderReference');
    const email = urlParams.get('clientEmail') || urlParams.get('email') || localStorage.getItem('paymentEmail');
    
    if (email) {
      setOrderDetails({ orderReference, email });
    }
    
    // Google Analytics - Conversion Event
    if (window.gtag) {
      window.gtag('event', 'conversion_event_purchase');
    }
    
    // SEO tags
    document.title = 'Дякуємо за покупку! Таблиця відправлена | FinProsto';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Ваше замовлення успішно оплачено! Таблиця для бізнесу вже відправлена на ваш email. Перевірте папку "Вхідні" або "Спам".');
    
    // Robots - noindex для цієї сторінки
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Оплата успішна! 🎉
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Дякуємо за покупку! Ваша таблиця вже відправлена на вказаний email
            </p>
          </motion.div>

          {/* Order Details */}
          {orderDetails && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Деталі замовлення</h2>
              
              <div className="space-y-4">
                {orderDetails.orderReference && (
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-600">Номер замовлення:</span>
                    <span className="font-semibold text-slate-900">{orderDetails.orderReference}</span>
                  </div>
                )}
                
                <div className="flex items-start justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-600">Email для доставки:</span>
                  <span className="font-semibold text-slate-900 text-right">{orderDetails.email}</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <span className="text-slate-600">Статус:</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    Оплачено
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Перевірте email</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Протягом 5-10 хвилин ви отримаєте лист з посиланням на Google Таблицю та інструкціями по роботі з нею
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100">
              <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Зробіть копію</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Після відкриття таблиці натисніть "Файл" → "Створити копію", щоб почати роботу з власною версією
              </p>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-8 text-white text-center mb-8"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Що далі?</h3>
            <p className="text-emerald-50 mb-6 max-w-xl mx-auto">
              Якщо у вас виникнуть питання або потрібна допомога з налаштуванням таблиці, наша команда завжди готова допомогти
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://t.me/finprosto_support" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white hover:bg-slate-50 text-emerald-600">
                  Написати в Telegram
                </Button>
              </a>
              <Link to={createPageUrl('Home')}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  На головну
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-sm text-slate-500"
          >
            <p>Не отримали лист? Перевірте папку "Спам" або напишіть нам на support@finprosto.com</p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}