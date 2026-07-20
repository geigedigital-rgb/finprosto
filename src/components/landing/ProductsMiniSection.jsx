import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import {
  FileSpreadsheet, Package, Calculator, ArrowRight, Star, Check, Eye, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PaymentModal from '../payment/PaymentModal';

const products = [
  {
    id: 'pro',
    icon: FileSpreadsheet,
    badge: 'Найпопулярніший',
    title: 'Таблиця обліку фінансів PRO',
    description: 'P&L, CashFlow, план/факт аналіз, контроль оплат, річний звіт. Одна таблиця для повного обліку.',
    price: '1 730',
    oldPrice: '2 090',
    discount: '-30%',
    features: ['P&L, CashFlow', 'Контроль оплат', 'План/Факт', 'Річний звіт'],
    rating: '4.9',
    users: '1900+',
    gradient: 'from-emerald-500 to-teal-500',
    pageName: 'ProductPro',
    productData: { title: 'Таблиця обліку фінансів PRO', price: '1 730', oldPrice: '2 090', discount: '-30%' }
  },
  {
    id: 'warehouse',
    icon: Package,
    badge: 'Для складу',
    title: 'Таблиця обліку Складу',
    description: 'Облік надходжень та відвантажень, залишки, аналіз продажів та рентабельності.',
    price: '1 100',
    oldPrice: '1 490',
    discount: '-26%',
    features: ['Надходження/відвантаження', 'Залишки на складі', 'Аналіз продажів', 'Рентабельність'],
    rating: '4.8',
    users: '800+',
    gradient: 'from-blue-500 to-cyan-500',
    pageName: 'ProductWarehouse',
    productData: { title: 'Таблиця обліку Складу', price: '1 100', oldPrice: '1 490', discount: '-26%' }
  },
  {
    id: 'estimate',
    icon: Calculator,
    badge: 'Для кошторисів',
    title: 'Калькулятор кошторисів',
    description: 'Автоматичний розрахунок кошторисів та формування PDF файлу. Шаблони для будівництва.',
    price: '410',
    oldPrice: '590',
    discount: '-30%',
    features: ['Автоматичний розрахунок', 'Експорт в PDF', 'Шаблони робіт', 'Історія кошторисів'],
    rating: '4.7',
    users: '600+',
    gradient: 'from-violet-500 to-purple-500',
    pageName: 'ProductEstimate',
    productData: { title: 'Калькулятор кошторисів', price: '410', oldPrice: '590', discount: '-30%' }
  },
  {
    id: 'lite',
    icon: FileSpreadsheet,
    badge: 'Для старту',
    title: 'Таблиця для бізнесу (Lite)',
    description: 'Базовий облік доходів, витрат та планування бюджету. Ідеально для початку.',
    price: '429',
    oldPrice: '590',
    discount: '-27%',
    features: ['Прибутки/витрати', 'Статті витрат', 'Планування бюджету', 'CashFlow'],
    rating: '4.6',
    users: '1200+',
    gradient: 'from-orange-500 to-amber-500',
    pageName: 'ProductLite',
    productData: { title: 'Таблиця для бізнесу Lite', price: '429', oldPrice: '590', discount: '-27%' }
  }
];

export default function ProductsMiniSection() {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            <FileSpreadsheet className="w-4 h-4" />
            Готові рішення
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Таблиці та Фінансові моделі
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Оберіть професійний інструмент який відповідає вашим потребам
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl border-2 border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

              <div className="p-5 flex flex-col flex-1">
                {/* Badge & rating */}
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`bg-gradient-to-r ${product.gradient} text-white border-0 text-xs`}>
                    {product.badge}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-slate-700">{product.rating}</span>
                    <span>({product.users})</span>
                  </div>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                    <product.icon className="w-5 h-5 text-white" />
                  </div>
                  <Link to={createPageUrl(product.pageName)}>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug hover:text-emerald-600 transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{product.description}</p>

                {/* Features */}
                <div className="space-y-1 mb-4">
                  {product.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-slate-900">{product.price} ₴</span>
                    <span className="text-sm text-slate-400 line-through">{product.oldPrice} ₴</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-600 hover:bg-red-100 text-xs">{product.discount}</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Link to={createPageUrl(product.pageName)} className="flex-shrink-0">
                      <Button variant="outline" size="icon" className="rounded-lg border-slate-200 hover:border-emerald-500 hover:text-emerald-600 w-9 h-9">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      onClick={() => { setSelectedProduct(product.productData); setPaymentModalOpen(true); }}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm h-9"
                    >
                      Придбати
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link to={createPageUrl('Products')}>
            <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-xl">
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