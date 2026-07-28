import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  FileSpreadsheet, 
  ArrowRight, 
  Star,
  Check,
  Eye,
  ArrowLeft,
  Building2,
  Store,
  Factory,
  Stethoscope,
  TrendingUp,
  CircleDollarSign,
  Warehouse,
  HardHat,
  Rocket,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';
import ErrorBoundary from '../components/ErrorBoundary';

const getProductPage = (product) => {
  if (product.category === 'spreadsheet') {
    if (product.id === 'pro') return 'ProductPro';
    if (product.id === 'warehouse') return 'ProductWarehouse';
    if (product.id === 'estimate') return 'ProductEstimate';
    if (product.id === 'lite') return 'ProductLite';
    return 'Products';
  }
  if (product.id === 'finmodel-ecommerce') return 'ProductFinmodelEcommerce';
  if (product.id === 'finmodel-retail') return 'ProductFinmodelRetail';
  if (product.id === 'finmodel-manufacturing') return 'ProductFinmodelManufacturing';
  if (product.id === 'finmodel-dental') return 'ProductFinmodelDental';
  return 'Products';
};

export default function ProductsPage() {
  const navigate = useNavigate();
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('spreadsheets');

  useEffect(() => {
    document.title = 'Обрати готову таблицю для бізнесу | PRO, Склад, Кошториси, Lite | Економія часу та грошей | 5000+ підприємців';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Каталог таблиць та фінансових моделей ⭐ PRO, Склад, Кошториси, Фінмоделі. Знижки до -70%. Без підписок. Оберіть рішення для бізнесу.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Каталог таблиць та фінансових моделей ⭐ PRO, Склад, Кошториси, Фінмоделі. Знижки до -70%. Без підписок. Оберіть рішення для бізнесу.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'таблиця обліку для бізнесу, фінансова модель, готові таблиці google sheets, облік фінансів, таблиця для складу, калькулятор кошторисів, фінмодель для бізнесу, cashflow таблиця');
    } else {
      const newKeywords = document.createElement('meta');
      newKeywords.setAttribute('name', 'keywords');
      newKeywords.setAttribute('content', 'таблиця обліку для бізнесу, фінансова модель, готові таблиці google sheets, облік фінансів, таблиця для складу, калькулятор кошторисів, фінмодель для бізнесу, cashflow таблиця');
      document.head.appendChild(newKeywords);
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/#/Products');
    
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow');
  }, []);

  const products = [
    {
      id: 'pro',
      category: 'spreadsheet',
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
    },
    {
      id: 'warehouse',
      category: 'spreadsheet',
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
    },
    {
      id: 'estimate',
      category: 'spreadsheet',
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
    },
    {
      id: 'lite',
      category: 'spreadsheet',
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
    },
    {
      id: 'finmodel-ecommerce',
      category: 'financial-model',
      icon: Building2,
      badge: 'Інтернет-магазин',
      title: 'Фінансова модель Інтернет-магазину',
      description: 'Повна фінансова модель для інтернет-магазину з розрахунком виторгу, конверсій, маржинальності, оборотного капіталу та грошових потоків. Прогнозуйте прибуток на 12 місяців.',
      price: '2 500',
      features: ['Аналіз конверсій та трафіку', 'Маржинальний та валовий прибуток', 'Оборотний капітал та запаси', 'Грошовий потік (ДДС)'],
      industries: ['E-commerce', 'Інтернет-торгівля', 'Dropshipping'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'finmodel-retail',
      category: 'financial-model',
      icon: Store,
      badge: 'Офлайн-магазин',
      title: 'Фінансова модель: Офлайн-магазин',
      description: 'Детальна фінмодель для роздрібного магазину з розрахунком виторгу від трафіку, аналізом витрат на оренду, персонал та EBITDA. Плануйте розвиток на рік вперед.',
      price: '2 500',
      features: ['Воронка продажів та конверсії', 'Прямі та непрямі витрати', 'EBITDA та чистий прибуток', 'Аналіз запасів та КЗ'],
      industries: ['Роздрібна торгівля', 'Магазини', 'Бутіки'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      id: 'finmodel-manufacturing',
      category: 'financial-model',
      icon: Factory,
      badge: 'Виробництво',
      title: 'Фінансова модель: Виробництво',
      description: 'Комплексна фінмодель для виробничого бізнесу з розрахунком собівартості сировини, витрат на персонал, логістику та операційного прибутку. Тестові дані для косметики, адаптується для будь-якого виробництва.',
      price: '2 500',
      features: ['Собівартість та маржинальність', 'Виторг опт/роздріб', 'Запаси та ДЗ', 'Операційний прибуток'],
      industries: ['Виробництво', 'FMCG', 'Харчова промисловість'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'finmodel-dental',
      category: 'financial-model',
      icon: Stethoscope,
      badge: 'Стоматологія',
      title: 'Фінансова модель: Стоматологічна клініка',
      description: 'Спеціалізована фінмодель для стоматології з детальним розрахунком виторгу за послугами, витрат на персонал та обладнання, NPV та IRR проекту. Інвестиційний аналіз.',
      price: '2 500',
      features: ['Аналіз послуг та середнього чека', 'EBITDA та амортизація', 'Баланс та ОДДС', 'NPV, IRR, DCF аналіз'],
      industries: ['Медицина', 'Стоматологія', 'Клініки'],
      rating: '5.0',
      users: 'Новинка',
      gradient: 'from-sky-500 to-blue-500'
    },
  ];

  const spreadsheetProducts = products.filter(p => p.category === 'spreadsheet');
  const financialModelProducts = products.filter(p => p.category === 'financial-model');

  const renderSpreadsheetCard = (product, index) => {
    const Icon = product.icon;
    return (
      <motion.article
        key={product.id}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }}
        onClick={() => navigate(createPageUrl(getProductPage(product)))}
        className="group relative rounded-[28px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
      >
        <div className="relative mx-4 mt-4 mb-1 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 aspect-[16/10]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/95 text-emerald-700 flex items-center justify-center border border-white shadow-sm">
            <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
          </div>
        </div>

        <div className="p-5 pt-4 flex flex-col flex-1">
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

          <h3 className="font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
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
              <span className="text-2xl font-bold text-slate-900 tracking-tight">{product.price} ₴</span>
              <span className="text-sm text-slate-400 line-through mb-1">{product.oldPrice} ₴</span>
              <span className="mb-1 inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-100">
                {product.discount}
              </span>
            </div>

            <Button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(product);
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
  };

  const renderProductCard = (product, index) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-white rounded-3xl overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
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
            <Link to={createPageUrl(getProductPage(product))}>
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
            </div>
            <p className="text-sm text-slate-500">Одноразова оплата</p>
          </div>
          <div className="flex gap-2">
            <Link to={createPageUrl(getProductPage(product))}>
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
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="mb-8">
              <Link 
                to={createPageUrl('Home')}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Повернутися на головну
              </Link>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                <FileSpreadsheet className="w-4 h-4" />
                Готові рішення
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Таблиці та Фінансові моделі
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Оберіть професійний інструмент який відповідає вашим потребам
              </p>
            </div>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 h-auto p-1 bg-slate-100 rounded-2xl">
              <TabsTrigger 
                value="spreadsheets" 
                className="rounded-xl py-3 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  <div className="font-semibold">Таблиці обліку</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="financial-models" 
                className="rounded-xl py-3 px-6 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <div className="font-semibold">Фінансові моделі</div>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="spreadsheets" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {spreadsheetProducts.map((product, index) => renderSpreadsheetCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="financial-models" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-8">
                {financialModelProducts.map((product, index) => (
                  renderProductCard(product, index)
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        </div>

        <Footer />

        {selectedProduct && (
        <PaymentModal
          isOpen={paymentModalOpen}
          onClose={() => setPaymentModalOpen(false)}
          product={selectedProduct}
        />
        )}
        </div>
        </ErrorBoundary>
        );
}
