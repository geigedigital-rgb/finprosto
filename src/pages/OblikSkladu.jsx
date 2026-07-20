import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { 
  ArrowRight, 
  Check, 
  Package,
  BarChart3,
  TrendingUp,
  Star,
  AlertTriangle
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function OblikSkladuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = 'Облік складу 2026 📦 Таблиця обліку товарів на складі | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', '⭐ Облік складу для малого бізнесу в Google Sheets. Готова таблиця для обліку товарів: надходження, відвантаження, залишки. ABC аналіз продажів. Контроль постачальників. 800+ магазинів та складів. Від 1100₴');
    document.head.appendChild(metaDescription);
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'облік складу, облік товарів на складі, таблиця обліку складу, облік залишків, складський облік, облік надходження товару, облік відвантаження, abc аналіз товарів, облік складу в google sheets');
    document.head.appendChild(metaKeywords);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Облік складу - Готова таблиця для управління складом",
      "description": "Професійна система обліку складу: надходження, відвантаження, залишки, ABC аналіз. Від 1100₴",
      "url": window.location.href
    });
    document.head.appendChild(script);
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
    
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Не знаєте, скільки товару на складі',
      description: 'Плутанина з залишками призводить до пересортиці та втрати продажів'
    },
    {
      icon: AlertTriangle,
      title: 'Товари "загубляються"',
      description: 'Фактичні залишки не збігаються з обліком. Втрати через крадіжки'
    },
    {
      icon: AlertTriangle,
      title: 'Не розумієте, що купувати',
      description: 'Закуповуєте товар, який не продається, а ходові позиції закінчуються'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Вносьте надходження',
      description: 'Кожна закупка товару фіксується: постачальник, кількість, вартість'
    },
    {
      step: '02',
      title: 'Записуйте відвантаження',
      description: 'Продажі та списання автоматично зменшують залишки'
    },
    {
      step: '03',
      title: 'Бачте залишки в реальному часі',
      description: 'Система автоматично рахує, скільки товару на складі'
    },
    {
      step: '04',
      title: 'Аналізуйте продажі',
      description: 'ABC аналіз показує, які товари найприбутковіші'
    }
  ];

  const features = [
    'Облік надходження товарів від постачальників',
    'Контроль відвантаження та продажів',
    'Автоматичний розрахунок залишків',
    'ABC аналіз ефективності товарів',
    'Прогнозування попиту',
    'Контроль постачальників',
    'Дебіторська та кредиторська заборгованість'
  ];

  const forWhom = [
    { title: 'Інтернет-магазини', desc: 'Контроль залишків при продажах онлайн' },
    { title: 'Роздрібні магазини', desc: 'Облік товару в торговій точці' },
    { title: 'Оптові бази', desc: 'Управління великими обсягами товару' },
    { title: 'Виробництво', desc: 'Облік сировини та готової продукції' }
  ];

  const faq = [
    {
      q: 'Що таке облік складу?',
      a: 'Облік складу - це систематичне ведення записів про надходження, відвантаження та залишки товарів. Це дозволяє завжди знати, скільки товару є на складі, контролювати його рух та уникати пересортиці.'
    },
    {
      q: 'Як організувати облік товарів на складі?',
      a: 'Для організації обліку потрібно: 1) Фіксувати кожне надходження товару (дата, постачальник, кількість, вартість). 2) Записувати відвантаження при продажах. 3) Регулярно проводити інвентаризацію. Наша таблиця автоматизує всі ці процеси.'
    },
    {
      q: 'Що таке ABC аналіз товарів?',
      a: 'ABC аналіз - це метод класифікації товарів за прибутковістю. A-товари (20%) приносять 80% прибутку - їм потрібна максимальна увага. B-товари (30%) - середня прибутковість. C-товари (50%) - мінімальний прибуток, можна зменшити асортимент.'
    },
    {
      q: 'Чи підходить таблиця для невеликого складу?',
      a: 'Так, таблиця підходить для складів будь-якого розміру - від 50 до 10000+ товарних позицій. Система масштабується під ваші потреби.'
    },
    {
      q: 'Скільки часу займає ведення обліку складу?',
      a: '5-15 хвилин на день для внесення надходжень та відвантажень. Звіти формуються автоматично за секунди.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Package className="w-4 h-4" />
              800+ магазинів та складів
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Облік складу<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                без хаосу та плутанини
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              Готова таблиця для обліку товарів: надходження, відвантаження, залишки.<br />
              Знайте точно, скільки товару на складі та що закуповувати.
            </p>

            <Link to={createPageUrl('ProductWarehouse')}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Подивитись рішення
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 mt-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                1100₴ одноразово
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                Google Sheets
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600" />
                ABC аналіз
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Типові проблеми обліку складу
            </h2>
            <p className="text-xl text-slate-600">Знайомо?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-slate-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Як вести облік складу правильно
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Package className="w-4 h-4" />
                Таблиця обліку складу
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Готове рішення для обліку товарів
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Професійна таблиця Google Sheets для повного контролю над складом. 
                Все що потрібно для ефективного управління запасами.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to={createPageUrl('ProductWarehouse')}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                  Детальніше про таблицю
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg"
            >
              {/* Google Sheets Visual */}
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-slate-600">Облік складу</span>
                </div>
                
                {/* Table Header */}
                <div className="grid grid-cols-4 gap-2 mb-2 text-xs font-semibold text-slate-700">
                  <div className="truncate">Товар</div>
                  <div className="text-center">Надійшло</div>
                  <div className="text-center">Продано</div>
                  <div className="text-right">Залишок</div>
                </div>
                
                {/* Table Rows */}
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="grid grid-cols-4 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Товар А</div>
                    <div className="text-center text-green-600 font-medium">+150</div>
                    <div className="text-center text-red-600 font-medium">-80</div>
                    <div className="text-right font-bold">70</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Товар Б</div>
                    <div className="text-center text-green-600 font-medium">+200</div>
                    <div className="text-center text-red-600 font-medium">-145</div>
                    <div className="text-right font-bold">55</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 p-2 bg-white rounded">
                    <div className="truncate">Товар В</div>
                    <div className="text-center text-green-600 font-medium">+100</div>
                    <div className="text-center text-red-600 font-medium">-90</div>
                    <div className="text-right font-bold text-red-600">10 ⚠️</div>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="text-slate-600">Ціна:</span>
                  <div className="text-right">
                    <div className="text-sm text-slate-400 line-through">1 490 ₴</div>
                    <div className="text-3xl font-bold text-slate-900">1 100 ₴</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-blue-600" />
                    Одноразова оплата
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-blue-600" />
                    Без підписок
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-blue-600" />
                    Миттєвий доступ
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Для кого підходить облік складу
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forWhom.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 text-center"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Часті питання про облік складу
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-700 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Наведіть порядок на складі вже сьогодні
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            800+ складів та магазинів вже контролюють залишки з FinProsto
          </p>
          <Link to={createPageUrl('ProductWarehouse')}>
            <Button className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg">
              Придбати таблицю за 1100₴
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}