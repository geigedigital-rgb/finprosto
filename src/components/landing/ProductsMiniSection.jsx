import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import {
  CircleDollarSign,
  Warehouse,
  HardHat,
  Rocket,
  ArrowRight,
  Star,
  TrendingUp,
  Check,
  LayoutGrid,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PaymentModal from '../payment/PaymentModal';

const products = [
  {
    id: 'pro',
    icon: CircleDollarSign,
    badge: 'Найпопулярніший',
    title: 'Таблиця обліку фінансів PRO',
    description: 'P&L, CashFlow, план/факт аналіз, контроль оплат, річний звіт. Одна таблиця для повного обліку.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/d3430fcf1_.png',
    price: '1 730',
    oldPrice: '2 090',
    discount: '-30%',
    features: ['P&L, CashFlow', 'Контроль оплат', 'План/Факт'],
    rating: '4.9',
    users: '1900+',
    pageName: 'ProductPro',
    productData: { title: 'Таблиця обліку фінансів PRO', price: '1 730', oldPrice: '2 090', discount: '-30%' }
  },
  {
    id: 'warehouse',
    icon: Warehouse,
    badge: 'Для складу',
    title: 'Таблиця обліку Складу',
    description: 'Облік надходжень та відвантажень, залишки, аналіз продажів та рентабельності.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/5b20a0ada_.png',
    price: '1 100',
    oldPrice: '1 490',
    discount: '-26%',
    features: ['Надходження/відвантаження', 'Залишки на складі', 'Аналіз продажів'],
    rating: '4.8',
    users: '800+',
    pageName: 'ProductWarehouse',
    productData: { title: 'Таблиця обліку Складу', price: '1 100', oldPrice: '1 490', discount: '-26%' }
  },
  {
    id: 'estimate',
    icon: HardHat,
    badge: 'Для кошторисів',
    title: 'Калькулятор кошторисів',
    description: 'Автоматичний розрахунок кошторисів та формування PDF файлу. Шаблони для будівництва.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/be41b0dfa_.png',
    price: '410',
    oldPrice: '590',
    discount: '-30%',
    features: ['Автоматичний розрахунок', 'Експорт в PDF', 'Шаблони робіт'],
    rating: '4.7',
    users: '600+',
    pageName: 'ProductEstimate',
    productData: { title: 'Калькулятор кошторисів', price: '410', oldPrice: '590', discount: '-30%' }
  },
  {
    id: 'lite',
    icon: Rocket,
    badge: 'Для старту',
    title: 'Таблиця для бізнесу (Lite)',
    description: 'Базовий облік доходів, витрат та планування бюджету. Ідеально для початку.',
    image: '/product-lite-preview.png',
    price: '429',
    oldPrice: '590',
    discount: '-27%',
    features: ['Прибутки/витрати', 'Статті витрат', 'Планування бюджету'],
    rating: '4.6',
    users: '1200+',
    pageName: 'ProductLite',
    productData: { title: 'Таблиця для бізнесу Lite', price: '429', oldPrice: '590', discount: '-27%' }
  }
];

export default function ProductsMiniSection() {
  const navigate = useNavigate();
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-x-clip overflow-y-hidden">
      <div className="absolute inset-0 bg-[#f7faf8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),_transparent_55%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-emerald-700 text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-sm border border-emerald-100">
            <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Готові рішення
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-4 tracking-tight">
            Таблиці та Фінансові моделі
          </h2>
          <p className="text-[15px] sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Оберіть професійний інструмент який відповідає вашим потребам
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => navigate(createPageUrl(product.pageName))}
                className="group relative rounded-2xl sm:rounded-[28px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                <div className="relative mx-3 sm:mx-4 mt-3 sm:mt-4 mb-1 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 aspect-[16/10]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-50">
                      <Icon className="w-10 h-10 text-emerald-600/70" strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 text-emerald-700 flex items-center justify-center border border-white shadow-sm">
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-3 sm:pt-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {product.badge}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 text-xs text-slate-600 border border-slate-100">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-semibold text-slate-800">{product.rating}</span>
                      <span className="text-slate-400">({product.users})</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-[15px] leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-100"
                      >
                        <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-1">
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{product.price} ₴</span>
                      <span className="text-sm text-slate-400 line-through mb-1">{product.oldPrice} ₴</span>
                      <span className="mb-1 inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100">
                        {product.discount}
                      </span>
                    </div>

                    <Button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product.productData);
                        setPaymentModalOpen(true);
                      }}
                      className="w-full h-11 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm"
                    >
                      Придбати
                      <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center">
          <Link to={createPageUrl('Products')}>
            <Button
              variant="outline"
              className="border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-3 rounded-full shadow-sm"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Переглянути всі продукти та фінансові моделі
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      {selectedProduct && (
        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => { setPaymentModalOpen(false); setSelectedProduct(null); }}
          product={selectedProduct}
        />
      )}
    </section>
  );
}
