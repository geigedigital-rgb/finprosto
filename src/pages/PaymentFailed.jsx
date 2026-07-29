import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createPageUrl } from '../utils';
import { invokeFunction } from '@/api/functions';
import { validateEmail, sanitizeInput } from '../components/utils/validation';
import { useToast } from '../components/ToastContext';
import PaymentModal from '../components/payment/PaymentModal';
import { formatUah, resolveProduct } from '../components/data/productCatalog';

const LOGO_URL =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6d65c51c9_logo.png';

function readPendingOrder() {
  try {
    const raw = localStorage.getItem('pendingOrder') || localStorage.getItem('lastOrder');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function ProductRetryCard({ product, priceLabel, oldPriceLabel, onRetry, layout = 'compact' }) {
  const isWide = layout === 'wide';

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
      <div className={isWide ? 'flex gap-5' : 'flex items-center gap-3.5'}>
        <div
          className={
            isWide
              ? 'h-28 w-36 flex-shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200'
              : 'h-[4.25rem] w-[4.25rem] flex-shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200'
          }
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p
            role="alert"
            className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wide text-red-600"
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
            Невідома помилка платежу
          </p>
          <h2
            className={
              isWide
                ? 'mt-1 text-lg font-semibold text-slate-900 leading-snug'
                : 'mt-0.5 truncate text-[15px] font-semibold text-slate-900'
            }
          >
            {product.title}
          </h2>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-2">
            {priceLabel && (
              <span className={`font-bold text-slate-900 ${isWide ? 'text-xl' : 'text-base'}`}>
                {priceLabel} ₴
              </span>
            )}
            {oldPriceLabel && (
              <span className="text-sm text-slate-400 line-through">{oldPriceLabel} ₴</span>
            )}
            {product.discount && (
              <span className="text-xs font-semibold text-emerald-700">{product.discount}</span>
            )}
          </div>
          {isWide && (
            <Button
              type="button"
              onClick={onRetry}
              className="mt-4 h-11 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 shadow-sm shadow-emerald-700/20"
            >
              Спробувати ще раз
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {!isWide && (
        <Button
          type="button"
          onClick={onRetry}
          className="mt-4 h-11 w-full rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-sm shadow-emerald-700/20"
        >
          Спробувати ще раз
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </section>
  );
}

function ContactBlock({ email, setEmail, loading, submitted, onSubmit }) {
  if (submitted) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50">
            <Check className="h-4 w-4 text-emerald-600" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Заявку прийнято</p>
            <p className="mt-1 text-sm text-slate-500 leading-relaxed">
              Менеджер напише на <span className="font-medium text-slate-800">{email}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">Не виходить оплатити?</p>
          <p className="mt-1 text-[13px] text-slate-500 leading-relaxed">
            Залиште email — менеджер збереже знижку і допоможе з оплатою
          </p>
        </div>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          autoComplete="email"
          required
          className="h-11 rounded-xl border-slate-200 text-sm"
        />
        <Button
          type="submit"
          disabled={loading}
          variant="outline"
          className="h-11 w-full rounded-xl border-slate-200 font-semibold text-slate-800"
        >
          {loading ? 'Надсилаємо…' : 'Нехай менеджер звʼяжеться зі мною'}
        </Button>
      </form>
    </section>
  );
}

export default function PaymentFailed() {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [orderReference, setOrderReference] = useState('');
  const [pending, setPending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  useEffect(() => {
    document.title = 'Помилка оплати | FinProsto';

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');

    const params = new URLSearchParams(window.location.search);
    const stored = readPendingOrder();

    const nextEmail =
      params.get('email') ||
      params.get('clientEmail') ||
      stored?.email ||
      localStorage.getItem('paymentEmail') ||
      '';
    const nextProduct = params.get('product') || stored?.product || '';
    const nextOrder = params.get('orderReference') || stored?.orderReference || '';

    setEmail(nextEmail);
    setOrderReference(nextOrder);
    setPending({
      ...(stored || {}),
      product: nextProduct || stored?.product,
      email: nextEmail,
      orderReference: nextOrder,
    });

    if (window.gtag) {
      window.gtag('event', 'payment_failed_view', {
        product: nextProduct || undefined,
        order_id: nextOrder || undefined,
      });
    }
  }, []);

  const paymentProduct = useMemo(
    () =>
      resolveProduct({
        id: pending?.productId,
        title: pending?.product,
        price: pending?.price,
        oldPrice: pending?.oldPrice,
        discount: pending?.discount,
        image: pending?.image,
      }),
    [pending]
  );

  const priceLabel = formatUah(paymentProduct.price);
  const oldPriceLabel = formatUah(paymentProduct.oldPrice);

  const handleCallback = async (e) => {
    e.preventDefault();
    const sanitizedEmail = sanitizeInput(email);
    if (!validateEmail(sanitizedEmail)) {
      showToast('Введіть коректний email', 'error');
      return;
    }

    setLoading(true);
    try {
      const metadata = {
        ip: await fetch('https://api.ipify.org?format=json')
          .then((r) => r.json())
          .then((d) => d.ip)
          .catch(() => 'невідомо'),
        referrer: document.referrer || 'пряме відвідування',
        screen: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language || navigator.userLanguage,
        page: window.location.href,
        formType: 'Payment Failed Callback',
        product: paymentProduct.title || 'невідомо',
        orderReference: orderReference || 'невідомо',
      };

      await invokeFunction('sendToTelegram', {
        email: sanitizedEmail,
        message: [
          `Email клієнта: ${sanitizedEmail}`,
          'Запит: звʼязатися після невдалої оплати, зберегти знижку',
          paymentProduct.title ? `Продукт: ${paymentProduct.title}` : null,
          paymentProduct.price ? `Ціна: ${paymentProduct.price} ₴` : null,
          orderReference ? `Замовлення: ${orderReference}` : null,
        ]
          .filter(Boolean)
          .join('\n'),
        metadata,
      });

      localStorage.setItem('paymentEmail', sanitizedEmail);
      setSubmitted(true);
      showToast('Заявку прийнято. Менеджер скоро звʼяжеться з вами.', 'success');

      if (window.gtag) {
        window.gtag('event', 'payment_failed_callback', {
          product: paymentProduct.title || undefined,
        });
      }
    } catch (err) {
      console.error(err);
      showToast('Не вдалося надіслати. Напишіть у Telegram або спробуйте ще раз.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const openRetry = () => {
    if (window.gtag) {
      window.gtag('event', 'payment_retry_click', {
        product: paymentProduct.title || undefined,
      });
    }
    setPaymentOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 lg:px-8">
          <Link to={createPageUrl('Home')}>
            <img src={LOGO_URL} alt="FinProsto" className="h-7 w-auto" />
          </Link>
          <a
            href="https://t.me/finprosto_support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-slate-800"
          >
            Підтримка
          </a>
        </div>
      </header>

      {/* ========== MOBILE ========== */}
      <main className="mx-auto max-w-lg px-5 py-10 lg:hidden">
        <div className="text-center">
          <img
            src="/failimg-finprosto.svg"
            alt=""
            className="mx-auto h-auto w-[9.5rem] select-none"
            draggable={false}
          />
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
            Оплату не завершено
          </h1>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
            Таблицю зі знижкою вже зарезервовано. Спробуйте ще раз або залиште контакти —
            менеджер допоможе, щоб знижка не згоріла.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <ProductRetryCard
            product={paymentProduct}
            priceLabel={priceLabel}
            oldPriceLabel={oldPriceLabel}
            onRetry={openRetry}
            layout="compact"
          />
          <ContactBlock
            email={email}
            setEmail={setEmail}
            loading={loading}
            submitted={submitted}
            onSubmit={handleCallback}
          />
        </div>

        <p className="mt-8 text-center">
          <Link to={createPageUrl('Home')} className="text-sm text-slate-400 hover:text-slate-600">
            На головну
          </Link>
        </p>
      </main>

      {/* ========== DESKTOP ========== */}
      <main className="mx-auto hidden max-w-5xl px-8 py-16 lg:block">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left: status */}
          <div className="col-span-5">
            <img
              src="/failimg-finprosto.svg"
              alt=""
              className="h-auto w-[13rem] select-none"
              draggable={false}
            />
            <h1 className="mt-7 text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Оплату не завершено
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-500 max-w-sm">
              Таблицю зі знижкою вже зарезервовано. Спробуйте ще раз або залиште контакти —
              менеджер допоможе, щоб знижка не згоріла.
            </p>
            <p className="mt-10">
              <Link to={createPageUrl('Home')} className="text-sm text-slate-400 hover:text-slate-600">
                На головну
              </Link>
            </p>
          </div>

          {/* Right: two blocks */}
          <div className="col-span-7 space-y-4">
            <ProductRetryCard
              product={paymentProduct}
              priceLabel={priceLabel}
              oldPriceLabel={oldPriceLabel}
              onRetry={openRetry}
              layout="wide"
            />
            <ContactBlock
              email={email}
              setEmail={setEmail}
              loading={loading}
              submitted={submitted}
              onSubmit={handleCallback}
            />
          </div>
        </div>
      </main>

      <PaymentModal
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        product={paymentProduct}
        initialEmail={email}
      />
    </div>
  );
}
