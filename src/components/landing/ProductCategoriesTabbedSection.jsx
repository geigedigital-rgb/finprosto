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
  Eye,
  TrendingUp,
  Building2,
  Store,
  Factory,
  Stethoscope
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentModal from '../payment/PaymentModal';

const ProductCategoriesTabbedSection = React.memo(() => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const spreadsheetProducts = [
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
      gradient: 'from-emerald-500 to-teal-500',
      category: 'spreadsheet'
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
      gradient: 'from-blue-500 to-cyan-500',
      category: 'spreadsheet'
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
      gradient: 'from-violet-500 to-purple-500',
      category: 'spreadsheet'
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
      gradient: 'from-orange-500 to-amber-500',
      category: 'spreadsheet'
    },
  ];

  const financialModels = [
    {
      id: 'finmodel-ecommerce',
      icon: Building2,
      badge: 'Інтернет-магазин',
      title: 'Фінансова модель Інтернет-магазину',
      description: 'Повна фінансова модель для інтернет-магазину з розрахунком виторгу, конверсій, маржинальності, оборотного капіталу та грошових потоків. Прогнозуйте прибуток на 12 місяців.',
      price: '2 500',
      features: ['Аналіз конверсій та трафіку', 'Маржинальний та валовий прибуток', 'Оборотний капітал та запаси', 'Грошовий потік (ДДС)'],
      industries: ['E-commerce', 'Інтернет-торгівля', 'Dropshipping'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-indigo-500 to-purple-500',
      category: 'financial-model'
    },
    {
      id: 'finmodel-retail',
      icon: Store,
      badge: 'Офлайн-магазин',
      title: 'Фінансова модель: Офлайн-магазин',
      description: 'Детальна фінмодель для роздрібного магазину з розрахунком виторгу від трафіку, аналізом витрат на оренду, персонал та EBITDA. Плануйте розвиток на рік вперед.',
      price: '2 500',
      features: ['Воронка продажів та конверсії', 'Прямі та непрямі витрати', 'EBITDA та чистий прибуток', 'Аналіз запасів та КЗ'],
      industries: ['Роздрібна торгівля', 'Магазини', 'Бутіки'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-rose-500 to-pink-500',
      category: 'financial-model'
    },
    {
      id: 'finmodel-manufacturing',
      icon: Factory,
      badge: 'Виробництво',
      title: 'Фінансова модель: Виробництво',
      description: 'Комплексна фінмодель для виробничого бізнесу з розрахунком собівартості сировини, витрат на персонал, логістику та операційного прибутку. Тестові дані для косметики, адаптується для будь-якого виробництва.',
      price: '2 500',
      features: ['Собівартість та маржинальність', 'Виторг опт/роздріб', 'Запаси та ДЗ', 'Операційний прибуток'],
      industries: ['Виробництво', 'FMCG', 'Харчова промисловість'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-emerald-500 to-teal-500',
      category: 'financial-model'
    },
    {
      id: 'finmodel-dental',
      icon: Stethoscope,
      badge: 'Стоматологія',
      title: 'Фінансова модель: Стоматологічна клініка',
      description: 'Спеціалізована фінмодель для стоматології з детальним розрахунком виторгу за послугами, витрат на персонал та обладнання, NPV та IRR проекту. Інвестиційний аналіз.',
      price: '2 500',
      features: ['Аналіз послуг та середнього чека', 'EBITDA та амортизація', 'Баланс та ОДДС', 'NPV, IRR, DCF аналіз'],
      industries: ['Медицина', 'Стоматологія', 'Клініки'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-sky-500 to-blue-500',
      category: 'financial-model'
    },
  ];

  const renderProductCard = (product, index) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
    >
      <div className={`relative h-3 bg-gradient-to-r ${product.gradient}`} />
      
      <div className="p-8">
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

        <div className="flex items-start gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
            <product.icon className="w-7 h-7 text-white" />
          </div>
          <div>
            <Link to={createPageUrl(
              product.category === 'spreadsheet' ? (
                product.id === 'pro' ? 'ProductPro' : 
                product.id === 'warehouse' ? 'ProductWarehouse' :
                product.id === 'estimate' ? 'ProductEstimate' :
                product.id === 'lite' ? 'ProductLite' : 'Products'
              ) : (
                product.id === 'finmodel-ecommerce' ? 'ProductFinmodelEcommerce' :
                product.id === 'finmodel-retail' ? 'ProductFinmodelRetail' :
                product.id === 'finmodel-manufacturing' ? 'ProductFinmodelManufacturing' :
                product.id === 'finmodel-dental' ? 'ProductFinmodelDental' : 'Products'
              )
            )}>
              <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-emerald-600 transition-colors cursor-pointer">{product.title}</h3>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">{product.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {product.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {product.industries.map((industry, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
              {industry}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 border-t border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900">{product.price} ₴</span>
              {product.oldPrice && (
                <>
                  <span className="text-base sm:text-lg text-slate-400 line-through">{product.oldPrice} ₴</span>
                  <Badge variant="secondary" className="bg-red-100 text-red-600 hover:bg-red-100">{product.discount}</Badge>
                </>
              )}
            </div>
            <p className="text-sm text-slate-500">Одноразова оплата</p>
          </div>
          <div className="flex gap-2">
            <Link to={createPageUrl(
              product.category === 'spreadsheet' ? (
                product.id === 'pro' ? 'ProductPro' : 
                product.id === 'warehouse' ? 'ProductWarehouse' :
                product.id === 'estimate' ? 'ProductEstimate' :
                product.id === 'lite' ? 'ProductLite' : 'Products'
              ) : (
                product.id === 'finmodel-ecommerce' ? 'ProductFinmodelEcommerce' :
                product.id === 'finmodel-retail' ? 'ProductFinmodelRetail' :
                product.id === 'finmodel-manufacturing' ? 'ProductFinmodelManufacturing' :
                product.id === 'finmodel-dental' ? 'ProductFinmodelDental' : 'Products'
              )
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
  );

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Готові рішення
          </h2>
        </motion.div>

        <Tabs defaultValue="spreadsheets" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 h-auto p-1 bg-slate-100">
            <TabsTrigger 
              value="spreadsheets" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg py-3 text-base font-semibold transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 mr-2" />
              Таблиці обліку
            </TabsTrigger>
            <TabsTrigger 
              value="financial-models"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg py-3 text-base font-semibold relative transition-all"
            >
              <span className="absolute -top-3 -right-1 px-1.5 py-0.5 text-[10px] font-bold bg-rose-500 text-white rounded-full shadow-sm">NEW</span>
              <TrendingUp className="w-4 h-4 mr-2" />
              Фінансові моделі
            </TabsTrigger>
          </TabsList>

          <TabsContent value="spreadsheets" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12 text-center max-w-3xl mx-auto"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Таблиці обліку <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">для щоденної роботи</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Контролюйте фінанси вашого бізнесу щодня. Відстежуйте доходи, витрати, грошові потоки та створюйте звіти в кілька кліків. Готові шаблони для різних типів бізнесу.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8">
              {spreadsheetProducts.map((product, index) => renderProductCard(product, index))}
            </div>
          </TabsContent>

          <TabsContent value="financial-models" className="mt-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12 text-center max-w-3xl mx-auto"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Фінансові моделі <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">з готовими даними</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Професійні фінансові моделі для різних галузей бізнесу. Отримайте готовий інструмент для прогнозування прибутку, 
                аналізу рентабельності та планування грошових потоків на 12 місяців вперед.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {financialModels.map((product, index) => renderProductCard(product, index))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-8 border-2 border-indigo-100"
            >
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Що таке фінансова модель?</h4>
                <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Це професійний інструмент для глибокого фінансового планування бізнесу. 
                  Прогнозуйте майбутнє вашої компанії та приймайте обґрунтовані рішення на основі цифр.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-indigo-100">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">Прогноз на 12 місяців</h5>
                    <p className="text-sm text-slate-600">Плануйте виторг, витрати та прибуток на рік вперед</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-indigo-100">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">Аналіз сценаріїв</h5>
                    <p className="text-sm text-slate-600">Моделюйте різні варіанти розвитку бізнесу</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-indigo-100">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">Готові розрахунки</h5>
                    <p className="text-sm text-slate-600">NPV, IRR, EBITDA та інші ключові метрики</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link to={createPageUrl('FinancialModelGuide')}>
                  <Button 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl px-6"
                  >
                    Чи потрібна мені фінмодель?
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
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

ProductCategoriesTabbedSection.displayName = 'ProductCategoriesTabbedSection';

export default ProductCategoriesTabbedSection;