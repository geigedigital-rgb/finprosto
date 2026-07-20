import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { 
  FileSpreadsheet, 
  Package, 
  Calculator, 
  ArrowRight, 
  Star,
  Check,
  Sparkles,
  Eye
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PaymentModal from '../payment/PaymentModal';

const ProductsSection = React.memo(() => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 'pro',
      icon: FileSpreadsheet,
      badge: 'Найпопулярніший',
      title: 'Таблиця обліку фінансів PRO',
      description: 'Одна таблиця. Завдяки універсальній структурі підходить для обліку: Продажі, Витрати, Статті, Проєкти, CashFlow, Бюджет, Рахунки, Річний звіт та інші.',
      price: '1 730',
      oldPrice: '2 090',
      discount: '-30%',
      features: ['P&L, CashFlow, автоматичні звіти', 'Контроль оплати', 'План/Факт аналіз', 'Річний звіт'],
      industries: ['E-commerce', 'Діджитал агенції', 'Виробництво', 'Фінанси'],
      rating: '4.9',
      users: '1900+',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'warehouse',
      icon: Package,
      badge: 'Для складу',
      title: 'Таблиця обліку Складу + аналіз продажів',
      description: 'Рішення для інтернет-магазинів та обліку матеріалів. Відстежуйте надходження та відвантаження товарів, контролюйте залишки.',
      price: '1 100',
      oldPrice: '1 490',
      discount: '-26%',
      features: ['Надходження/відвантаження', 'Залишки на складі', 'Аналіз продажів', 'Рентабельність'],
      industries: ['E-commerce', 'Виробництво', 'Будівництво'],
      rating: '4.8',
      users: '800+',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'estimate',
      icon: Calculator,
      badge: 'Для кошторисів',
      title: 'Калькулятор кошторисів (смети)',
      description: 'Зручний інструмент для автоматизації роботи зі кошторисами. Введення даних в таблицю та автоматичне формування PDF файлу.',
      price: '410',
      oldPrice: '590',
      discount: '-30%',
      features: ['Автоматичний розрахунок', 'Експорт в PDF', 'Шаблони робіт', 'Історія кошторисів'],
      industries: ['Будівництво', 'HORECA', 'Виробництво'],
      rating: '4.7',
      users: '600+',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      id: 'lite',
      icon: FileSpreadsheet,
      badge: 'Для старту',
      title: 'Таблиця для бізнесу (Lite)',
      description: 'Продукт лайт включає декілька листів, що дозволять вам моніторити ваші прибутки, витрати, види статтей та планування бюджету.',
      price: '429',
      oldPrice: '590',
      discount: '-27%',
      features: ['Прибутки/витрати', 'Статті витрат', 'Планування бюджету', 'CashFlow'],
      industries: ['Універсальна', 'E-commerce', 'Виробництво'],
      rating: '4.6',
      users: '1200+',
      gradient: 'from-orange-500 to-amber-500'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            <FileSpreadsheet className="w-4 h-4" />
            Готові рішення
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Готові Таблиці для обліку
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Оберіть професійний макет який відповідає вашим потребам
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl overflow-hidden border-2 ${
                activeProduct === index 
                  ? 'border-emerald-300 shadow-2xl shadow-emerald-100' 
                  : 'border-slate-100 shadow-sm'
              }`}
            >
              {/* Header with Gradient */}
              <div className={`relative h-3 bg-gradient-to-r ${product.gradient}`} />
              
              <div className="p-8">
                {/* Badge & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <Badge className={`bg-gradient-to-r ${product.gradient} text-white border-0`}>
                    {product.badge}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-slate-900">{product.rating}</span>
                    <span className="text-slate-400 text-sm">({product.users})</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <product.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <Link to={createPageUrl(
                      product.id === 'pro' ? 'ProductPro' : 
                      product.id === 'warehouse' ? 'ProductWarehouse' :
                      product.id === 'estimate' ? 'ProductEstimate' :
                      product.id === 'lite' ? 'ProductLite' : 'Products'
                    )}>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-emerald-600 transition-colors cursor-pointer">{product.title}</h3>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed">{product.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Industries */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.industries.map((industry, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                      {industry}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 border-t border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-2xl sm:text-3xl font-bold text-slate-900">{product.price} ₴</span>
                      <span className="text-base sm:text-lg text-slate-400 line-through">{product.oldPrice} ₴</span>
                      <Badge variant="secondary" className="bg-red-100 text-red-600 hover:bg-red-100">{product.discount}</Badge>
                    </div>
                    <p className="text-sm text-slate-500">Одноразова оплата</p>
                  </div>
                  <div className="flex gap-2">
                    <Link to={createPageUrl(
                      product.id === 'pro' ? 'ProductPro' : 
                      product.id === 'warehouse' ? 'ProductWarehouse' :
                      product.id === 'estimate' ? 'ProductEstimate' :
                      product.id === 'lite' ? 'ProductLite' : 'Products'
                    )}>
                      <Button variant="outline" size="icon" className="rounded-xl border-slate-300 hover:border-emerald-600 hover:text-emerald-600 transition-colors flex-shrink-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => {
                        setSelectedProduct(product);
                        setPaymentModalOpen(true);
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-4 sm:px-6 transition-colors flex-1 sm:flex-initial"
                    >
                      Придбати
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedProduct && (
        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </section>
  );
});

ProductsSection.displayName = 'ProductsSection';

export default ProductsSection;