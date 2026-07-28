import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowLeft, 
  Check, 
  Star,
  FileSpreadsheet,
  TrendingUp,
  DollarSign,
  Calendar,
  PieChart,
  BarChart3,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import PaymentModal from '../components/payment/PaymentModal';
import BundlePromoSection from '../components/product/BundlePromoSection';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function ProductLite() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = 'Таблиця фінансів Lite | Простий облік доходів та витрат | Планування бюджету | CashFlow | ✅ 1200+ користувачів';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Таблиця для бізнесу Lite ⭐ Простий облік прибутків та витрат • Статті витрат • Планування бюджету • CashFlow звіт. Ідеально для старту бізнесу та особистих фінансів. Доступна ціна. 1200+ задоволених користувачів щодня!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Таблиця для бізнесу Lite ⭐ Простий облік прибутків та витрат • Статті витрат • Планування бюджету • CashFlow звіт. Ідеально для старту бізнесу та особистих фінансів. Доступна ціна. 1200+ задоволених користувачів щодня!';
      document.head.appendChild(meta);
    }
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
    
    // Robots meta
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow');

    const setMetaProperty = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    setMetaProperty('og:image', `${window.location.origin}/product-lite-preview.png`);
    setMetaProperty('og:title', 'Таблиця для бізнесу (Lite) | FinProsto');
  }, []);
  
  const productInfo = {
    title: 'Таблиця для бізнесу (Lite)',
    price: '429',
    oldPrice: '590',
    discount: '-27%',
    demoUrl: 'https://docs.google.com/spreadsheets/d/1example-lite/edit'
  };

  const handleBuyBundle = () => {
    setSelectedProduct({
      title: 'Набір всіх таблиць для Бізнесу',
      description: 'Комплексне рішення: PRO таблиця фінансів + Склад + Кошториси + Lite версія',
      price: '1 240',
      oldPrice: '3 669',
      discount: '-70%',
      items: [
        'Таблиця обліку фінансів PRO (1 730 ₴)',
        'Таблиця обліку Складу (1 100 ₴)',
        'Калькулятор кошторисів (410 ₴)',
        'Таблиця для бізнесу Lite (429 ₴)'
      ]
    });
    setIsPaymentModalOpen(true);
  };
  const features = [
    {
      icon: DollarSign,
      title: 'Прибутки/Витрати',
      description: 'Простий облік всіх доходів та витрат вашого бізнесу в одному місці. Відстежуйте всі фінансові операції'
    },
    {
      icon: PieChart,
      title: 'Статті витрат',
      description: 'Категорії для зручного групування та аналізу витрат. Розуміння куди йдуть ваші гроші'
    },
    {
      icon: TrendingUp,
      title: 'Планування бюджету',
      description: 'Плануйте доходи та витрати, контролюйте виконання плану та досягайте фінансових цілей'
    },
    {
      icon: BarChart3,
      title: 'CashFlow',
      description: 'Звіт руху грошових коштів для контролю ліквідності та планування грошових потоків'
    },
    {
      icon: FileSpreadsheet,
      title: 'Звіти',
      description: 'Базові фінансові звіти для аналізу стану бізнесу та прийняття управлінських рішень'
    },
    {
      icon: Calendar,
      title: 'Місячний облік',
      description: 'Розбивка всіх показників по місяцях для аналізу динаміки та виявлення трендів'
    }
  ];

  const screenshots = [
    {
      title: 'Огляд таблиці Lite',
      description: 'Баланс, транзакції, статті бюджету та аналітика в одній таблиці',
      image: '/product-lite-preview.png',
      features: [
        'Баланс готівки та безготівки',
        'Реєстр доходів і витрат',
        'Статті бюджету з динамікою',
        'Діаграми надходжень і витрат'
      ]
    },
    {
      title: 'Лист "Статті"',
      description: 'Категорії доходів і витрат',
      image: '/product-lite-articles.png',
      features: [
        'Статті доходів бізнесу',
        'Статті витрат бізнесу',
        'Загальні показники по кожній статті',
        'Аналіз по категоріям'
      ]
    },
    {
      title: 'Лист "CashFlow"',
      description: 'Рух грошових коштів',
      image: '/product-lite-cashflow.png',
      features: [
        'Залишки на початок періоду',
        'Надходження коштів',
        'Витрати коштів',
        'Залишки на кінець періоду'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: 'Продукти', href: createPageUrl('Products') },
              { label: 'Таблиця Lite' }
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 mb-4">
                Для старту
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Таблиця для бізнесу
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500"> (Lite)</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Базове рішення для початку обліку фінансів. Шаблон містить кілька розділів для контролю доходів, витрат та планування бюджету
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-900">4.6/5</span>
                <span className="text-slate-500">1200+ користувачів</span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-bold text-slate-900">429</span>
                    <span className="text-2xl font-bold text-slate-900">₴</span>
                    <span className="text-xl text-slate-400 line-through">590 ₴</span>
                  </div>
                  <p className="text-sm text-slate-500">Одноразова оплата • Без підписок</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg"
                >
                  Придбати зараз
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <img
                  src="/product-lite-preview.png"
                  alt="Таблиця для бізнесу Lite — баланс, транзакції та аналітика"
                  className="w-full h-auto object-contain"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Що входить в таблицю?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Все необхідне для початку ведення обліку фінансів
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Детальний огляд таблиці
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Кожен лист таблиці створений для простого та ефективного обліку
            </p>
          </motion.div>

          <div className="space-y-8">
            {screenshots.map((sheet, index) => (
              <motion.div
                key={sheet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{sheet.title}</h3>
                    <p className="text-slate-600 mb-6">{sheet.description}</p>
                    <div className="space-y-2">
                      {sheet.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    {sheet.image ? (
                      <img
                        src={sheet.image}
                        alt={`${sheet.title} - ${sheet.description} | Таблиця для бізнесу Lite`}
                        title={sheet.title}
                        loading="lazy"
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <div className="h-64 flex items-center justify-center bg-slate-50">
                        <FileSpreadsheet className="w-20 h-20 text-slate-300" aria-label={`${sheet.title} - інтерфейс таблиці для обліку фінансів`} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Promo Section */}
      <BundlePromoSection onBuyBundle={handleBuyBundle} />

      {/* SEO Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Облік фінансів для початківців: з чого почати
            </h2>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Мінімальний набір для контролю фінансів</h3>
              
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Облік доходів та витрат - основа основ.</strong> Найпростіший, але найважливіший елемент обліку. 
                  Записуйте кожен дохід та витрату: дата, сума, від кого/кому, за що. В кінці місяця складіть: загальний дохід мінус загальні витрати = ваш прибуток. 
                  Якщо ви не ведете навіть цього мінімуму - ви не керуєте бізнесом, а працюєте наосліп.
                </p>
                
                <p>
                  <strong>Розділення особистих та бізнес фінансів.</strong> Критична помилка мікробізнесу - змішування особистих та бізнес грошей. 
                  "Взяв з каси на продукти, повернув через тиждень" - і вже не розумієте, скільки реально заробив бізнес. 
                  Встановіть собі фіксовану "зарплату" і беріть тільки її, не більше.
                </p>
                
                <p>
                  <strong>Контроль дебіторської заборгованості.</strong> Хто вам винен і скільки. Проблема багатьох: відпустили товар, 
                  клієнт обіцяв заплатити "на днях", минув тиждень, місяць - а грошей немає. Ведіть список боржників, 
                  нагадуйте регулярно. Дебіторка більше 30 днів - це вже ризик неповернення.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Коли переходити з Lite на PRO версію</h3>
              
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Оборот перевищив 100,000 грн/міс</strong> - потрібен детальний аналіз по напрямах та проєктах</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p><strong>З'явилось 2+ джерела доходу</strong> - треба бачити рентабельність кожного окремо</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Найняли перших співробітників</strong> - потрібен детальний облік зарплат та продуктивності</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Плануєте залучати інвестиції</strong> - інвесторам потрібна професійна фінансова звітність</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p><strong>Виникають касові розриви</strong> - треба планувати CashFlow детально</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-white rounded-3xl p-12 border border-slate-200"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-500/10 to-orange-500/10 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Готові почати вести фінанси?
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Простий старт для ефективного управління бізнесом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 text-lg shadow-lg shadow-orange-600/20"
                >
                  Придбати за 429 ₴
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => {
          setIsPaymentModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct || productInfo}
      />
    </div>
  );
}