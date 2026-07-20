import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';
import WayForPayScript from './WayForPayScript';
import { validateEmail, sanitizeInput } from '../utils/validation';
import { generatePaymentSignature, initWayForPay } from '../utils/wayforpay';
import { invokeFunction, getSiteUrl } from '@/api/functions';

const PaymentModal = React.memo(({ isOpen, onClose, product }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const modalRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    const checkScript = setInterval(() => {
      if (window.Wayforpay) {
        setScriptLoaded(true);
        clearInterval(checkScript);
      }
    }, 100);

    return () => clearInterval(checkScript);
  }, []);

  // Focus trap and keyboard navigation
  useEffect(() => {
    if (isOpen) {
      // Focus email input when modal opens
      setTimeout(() => emailInputRef.current?.focus(), 100);

      // Handle ESC key
      const handleEsc = (e) => {
        if (e.key === 'Escape') onClose();
      };

      // Focus trap
      const handleTab = (e) => {
        if (!modalRef.current) return;
        
        const focusableElements = modalRef.current.querySelectorAll(
          'button, input, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleEsc);
      document.addEventListener('keydown', handleTab);

      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.removeEventListener('keydown', handleTab);
      };
    }
  }, [isOpen, onClose]);

  const handlePayment = useCallback(async (e) => {
    e.preventDefault();
    
    // Валідація email
    const sanitizedEmail = sanitizeInput(email);
    if (!validateEmail(sanitizedEmail)) {
      toast.error('Будь ласка, введіть коректний email');
      return;
    }

    if (!scriptLoaded || !window.Wayforpay) {
      toast.error('Система оплати завантажується, спробуйте ще раз');
      return;
    }

    setLoading(true);
    
    try {
      // Генеруємо унікальний номер замовлення з індикатором продукту
      const productPrefix = product.id ? product.id.toUpperCase() : 'FP';
      const orderReference = `${productPrefix}-${Date.now()}`;
      const orderDate = Math.floor(Date.now() / 1000);
      const siteUrl = getSiteUrl();
      const merchantAccount = import.meta.env.VITE_WAYFORPAY_MERCHANT_ACCOUNT || 'finprosto_com';
      const merchantDomainName = import.meta.env.VITE_WAYFORPAY_MERCHANT_DOMAIN || new URL(siteUrl).hostname;
      const currency = 'UAH';
      
      // Парсимо ціну (може бути строкою з пробілами: "1 730")
      const price = parseFloat(product.price.toString().replace(/\s/g, ''));
      
      // Отримуємо підпис з backend (HMAC MD5)
      const merchantSignature = await generatePaymentSignature({
        merchantAccount,
        merchantDomainName,
        orderReference,
        orderDate,
        amount: price,
        currency,
        productName: product.title,
        productCount: 1,
        productPrice: price
      });

      const wayforpayRequest = {
        merchantAccount: merchantAccount,
        merchantDomainName: merchantDomainName,
        authorizationType: 'SimpleSignature',
        merchantSignature: merchantSignature,
        orderReference: orderReference,
        orderDate: orderDate,
        amount: price,
        currency: currency,
        productName: [product.title],
        productCount: [1],
        productPrice: [price],
        clientEmail: sanitizedEmail,
        language: 'UA',
        straightWidget: false,
        returnUrl: `${siteUrl}/done`,
        serviceUrl: `${siteUrl}/api/functions/wayforpayCallback`
      };

      // Ініціалізуємо WayForPay віджет
      initWayForPay(
        wayforpayRequest,
        async function (response) {
          // Facebook Pixel - Purchase Event
          if (window.fbq) {
            window.fbq('track', 'Purchase', {
              value: price,
              currency: 'UAH',
              content_name: product.title,
              content_ids: [orderReference],
              content_type: 'product'
            });
          }

          // Google Analytics - Purchase Event
          if (window.gtag) {
            window.gtag('event', 'purchase', {
              transaction_id: orderReference,
              value: price,
              currency: 'UAH',
              items: [{
                item_id: orderReference,
                item_name: product.title,
                price: price,
                quantity: 1
              }]
            });
          }

          // Додаємо контакт до SendPulse
          try {
            await invokeFunction('addToSendPulse', {
              email: sanitizedEmail,
              price: price.toString(),
              orderid: orderReference,
              paymentid: response.transactionId || '',
              products: `${product.title} - 1x${price} = ${price}`,
              requestid: response.reasonCode || '',
              formname: 'Cart',
              formid: 'payment_modal',
              referer: window.location.href
            });
          } catch (error) {
            // Не блокуємо успішну оплату
          }

          // Зберігаємо дані в localStorage для сторінки Success
          localStorage.setItem('lastOrder', JSON.stringify({
            orderReference,
            email: sanitizedEmail,
            product: product.title,
            price: price.toString(),
            transactionId: response.transactionId || '',
            date: new Date().toISOString()
          }));

          // Редирект
          window.location.href = `${siteUrl}/done`;
        },
        function (response) {
          toast.error('Помилка оплати. Спробуйте ще раз');
          setLoading(false);
        },
        function (response) {
          setLoading(false);
        }
      );
      
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Помилка ініціалізації оплати');
      setLoading(false);
    }
  }, [email, scriptLoaded, product]);

  return (
    <>
      <WayForPayScript />
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
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="payment-modal-title"
              >
                {/* Header */}
                <div className="relative px-6 py-4">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors text-slate-400 hover:text-slate-900"
                    aria-label="Закрити модальне вікно"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <h2 id="payment-modal-title" className="text-xl font-bold text-slate-900">Оформлення замовлення</h2>
                </div>

                {/* Content */}
                <form onSubmit={handlePayment} className="px-6 pb-6">
                  {/* Product Card */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-900 mb-0.5">{product.title}</h3>
                        <p className="text-xs text-slate-500">Цифровий продукт • Одноразова оплата</p>
                      </div>
                    </div>
                    {product.items && (
                      <div className="my-3 space-y-1">
                        {product.items.map((item, idx) => (
                          <div key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-emerald-600" />
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
                      <span className="text-xl font-bold text-slate-900">
                        {parseFloat(product.price.toString().replace(/\s/g, '')).toLocaleString('uk-UA')} ₴
                      </span>
                      {product.oldPrice && (
                        <>
                          <span className="text-sm text-slate-400 line-through">
                            {parseFloat(product.oldPrice.toString().replace(/\s/g, '')).toLocaleString('uk-UA')} ₴
                          </span>
                          {product.discount && (
                            <span className="text-xs font-semibold text-white bg-emerald-600 px-2 py-0.5 rounded-md">
                              {product.discount}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email для отримання
                    </label>
                    <Input
                      ref={emailInputRef}
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-10 text-sm border-slate-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg"
                      required
                      aria-label="Email для отримання"
                      autoComplete="email"
                    />
                    <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      Таблиця буде надіслана на вказану адресу
                    </p>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-4">
                    <h3 className="text-sm font-semibold text-slate-900 mb-2">Підсумок замовлення</h3>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Вартість</span>
                        <span className="text-slate-900">
                          {parseFloat((product.oldPrice || product.price).toString().replace(/\s/g, '')).toLocaleString('uk-UA')} ₴
                        </span>
                      </div>
                      {product.oldPrice && (
                        <div className="flex justify-between text-sm">
                          <span className="text-emerald-600">Знижка</span>
                          <span className="text-emerald-600 font-medium">
                            -{(parseFloat(product.oldPrice.toString().replace(/\s/g, '')) - parseFloat(product.price.toString().replace(/\s/g, ''))).toLocaleString('uk-UA')} ₴
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm font-bold text-slate-900 pt-1.5 border-t border-slate-200">
                        <span>До сплати</span>
                        <span>{parseFloat(product.price.toString().replace(/\s/g, '')).toLocaleString('uk-UA')} ₴</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white h-11 text-sm rounded-xl font-semibold transition-all"
                  >
                    {loading ? 'Обробка платежу...' : 'Перейти до оплати'}
                  </Button>

                  {/* Security Notice */}
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
                      <Lock className="w-3 h-3" />
                      <span>Захищена оплата через WayForPay</span>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

PaymentModal.displayName = 'PaymentModal';

export default PaymentModal;