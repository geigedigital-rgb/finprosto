import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../components/ToastContext';
import { 
  Shield, 
  Zap, 
  Settings, 
  TrendingUp,
  BarChart3,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Users,
  Lock,
  Database,
  Workflow,
  LineChart,
  Building2,
  Factory,
  AlertTriangle,
  AlertCircle,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { invokeFunction } from '@/api/functions';

export default function CustomSolutionPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', contact: '', description: '' });
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const mountTimeRef = useRef(Date.now());

  // Anti-spam: дозволити відправку через 3 секунди
  useEffect(() => {
    const timer = setTimeout(() => setCanSubmit(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.title = 'Індивідуальна система контролю бізнесу | FinProsto';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Розробка індивідуальних систем контролю та обліку для великого бізнесу. Від щоденних операцій до управління металургійним заводом. Будь-яка складність.');
    }
  }, []);

  const capabilities = [
    { icon: Database, title: 'Повний контроль даних', desc: 'Збір, аналіз та візуалізація всіх бізнес-показників в реальному часі' },
    { icon: Lock, title: 'Захист від крадіжок', desc: 'Багаторівнева система контролю доступу та відстеження кожної операції' },
    { icon: Workflow, title: 'Автоматизація процесів', desc: 'Від закупівель до звітності — все автоматично та під контролем' },
    { icon: LineChart, title: 'Аналітика та прогнози', desc: 'Машинне навчання для точних прогнозів та виявлення аномалій' },
    { icon: Users, title: 'Багатокористувацька робота', desc: 'Необмежена кількість користувачів з гнучкими правами доступу' },
    { icon: Building2, title: 'Для будь-якої галузі', desc: 'Виробництво, ритейл, HoReCa, логістика, девелопмент' }
  ];

  const caseStudy = {
    company: 'Виробничий холдинг',
    industry: '3 заводи, 450+ співробітників',
    problem: 'Втрата контролю над фінансами через 12 різних таблиць і систем. Підозри на крадіжки в закупівлях та складському обліку.',
    solution: 'Розробили єдину систему контролю з інтеграцією 1С, банків, CRM та складського обліку. Повна прозорість кожної гривні.',
    results: [
      { metric: '₴2.8 млн', desc: 'виявлено зайвих витрат за перший місяць' },
      { metric: '94%', desc: 'скорочення часу на формування звітності' },
      { metric: '100%', desc: 'прозорість руху коштів від постачальника до клієнта' },
      { metric: '18%', desc: 'зростання прибутку за 6 місяців' }
    ]
  };

  const process = [
    { step: '01', title: 'Аналіз бізнесу', desc: 'Глибоке занурення в ваші процеси та больові точки', time: '3-5 днів' },
    { step: '02', title: 'Розробка концепції', desc: 'Архітектура системи та прототип інтерфейсів', time: '1 тиждень' },
    { step: '03', title: 'Розробка MVP', desc: 'Перша версія з ключовим функціоналом', time: '4-6 тижнів' },
    { step: '04', title: 'Тестування та запуск', desc: 'Пілотний запуск, навчання команди, фінальні доробки', time: '2-3 тижні' },
    { step: '05', title: 'Супровід та масштабування', desc: 'Технічна підтримка, оновлення, розвиток функціоналу', time: 'Постійно' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#/" className="flex items-center gap-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936a897e833408027878162/6d65c51c9_logo.png" 
                alt="FinProsto"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#/Products" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Продукти</a>
              <a href="#/CustomSolution" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Індивідуальне рішення</a>
              <a href="#/Home#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Як це працює</a>
              <a href="#/Home#for-who" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Для кого підходить</a>
              <a href="#/Blog" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">База знань</a>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://t.me/anhelinka_marishchak" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-medium transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1.01.54-1.45.52-.48-.01-1.39-.27-2.07-.49-.84-.27-1.51-.42-1.45-.89.03-.24.37-.49 1.02-.74 4-1.74 6.67-2.89 8.01-3.46 3.82-1.59 4.61-1.87 5.13-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.05.01.13 0 .2z"/>
                </svg>
                Підтримка
              </a>
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-xl px-6 transition-all">
                Обрати шаблон
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
              <Factory className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300 font-medium">Для бізнесу з оборотом від 5 млн грн/рік</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Індивідуальна система<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                контролю бізнесу
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              Де гарантії, що у вас не крадуть гроші, а бо ви правильно їх рахуєте? Розробимо повноцінну програму обліку та контролю бізнесу — від ціни кавової чашки в офісі до управління металургійним заводом.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Будь-який бізнес</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Будь-яка складність</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Повна інтеграція</span>
              </div>
            </div>

            <a href="#contact">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-600/20">
                Обговорити проєкт
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>

            <p className="text-sm text-slate-400 mt-6">
              Вартість від <span className="font-bold text-white">$1000</span> • Оцінка проєкту протягом 24 годин
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Що ми розробляємо
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Створюємо рішення, які дають повний контроль над бізнесом
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Real Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Історія Олексія
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Як підприємець втратив ₴4.2 млн через впевненість<br />"Я все тримаю в голові"
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block" />

            <div className="space-y-12">
              {/* Step 1: Beginning */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0 relative z-10">
                    <TrendingUp className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div className="text-sm font-semibold text-emerald-600 mb-2">2019 → 2023</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Успішний старт</h3>
                    <p className="text-slate-600 mb-4">
                      Олексій відкрив оптову торгівлю будматеріалами. Почав з малого — 3 постачальники, 15 клієнтів, обороти ₴2 млн/міс. Все тримав в голові: хто скільки винен, коли приходить товар, які ціни.
                    </p>
                    <div className="flex items-center gap-8 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-slate-900">23</div>
                        <div className="text-slate-500">постачальники</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">140+</div>
                        <div className="text-slate-500">клієнтів</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">₴18 млн</div>
                        <div className="text-slate-500">оборот/міс</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: First Signs */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0 relative z-10">
                    <AlertTriangle className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div className="text-sm font-semibold text-orange-600 mb-2">Весна 2024</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Перші дзвіночки</h3>
                    <p className="text-slate-600 mb-3">
                      "Гроші крутяться, а на рахунку якось мало. Нічого страшного, клієнти заплатять — все буде."
                    </p>
                    <p className="text-slate-600 mb-4">
                      Найняв менеджера по закупівлях, довірив йому роботу. Систему обліку не впровадив — "Навіщо витрачати час і гроші?"
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="text-sm text-orange-900">
                        <span className="font-bold">80%</span> підприємців стикаються з цим без системи контролю
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Crisis */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0 relative z-10">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-red-200">
                    <div className="text-sm font-semibold text-red-600 mb-2">Липень 2024 — Криза</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Все посипалось</h3>
                    <p className="text-slate-600 mb-4">
                      Борг постачальникам виріс до ₴6.5 млн. Рахунки заблокували. Постачання зупинилось. Клієнти почали відходити.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-baseline gap-3 text-sm">
                        <div className="font-bold text-red-600 w-24">₴1.8 млн</div>
                        <div className="text-slate-600">Завищені ціни від "своїх" постачальників менеджера</div>
                      </div>
                      <div className="flex items-baseline gap-3 text-sm">
                        <div className="font-bold text-red-600 w-24">₴1.2 млн</div>
                        <div className="text-slate-600">Дебіторка, про яку забули нагадати</div>
                      </div>
                      <div className="flex items-baseline gap-3 text-sm">
                        <div className="font-bold text-red-600 w-24">₴900 тис</div>
                        <div className="text-slate-600">Товар "загубився" на складі</div>
                      </div>
                      <div className="flex items-baseline gap-3 text-sm">
                        <div className="font-bold text-red-600 w-24">₴300 тис</div>
                        <div className="text-slate-600">Подвійні платежі через плутанину</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Rock Bottom */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 relative z-10">
                    <XCircle className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <div className="text-sm font-semibold text-slate-600 mb-2">Серпень 2024</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Дно</h3>
                    <p className="text-slate-600 mb-3">
                      Довелось взяти кредит під 18% річних для погашення боргів постачальникам. Звільнив менеджера, але репутація вже постраждала — частина клієнтів перейшла до конкурентів.
                    </p>
                    <p className="text-slate-600">
                      Вперше розуміє: не знав про крадіжки — не було системи контролю. Не бачив завищених цін — не було автопорівняння. Втратив клієнтів — не відслідковував дебіторку вчасно.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 5: Solution */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0 relative z-10">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-sm border border-emerald-200">
                    <div className="text-sm font-semibold text-emerald-600 mb-2">Вересень 2025</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Рішення</h3>
                    <p className="text-slate-600 mb-6">Олексій звернувся до нас. Побудували індивідуальну систему контролю:</p>
                    
                    {/* Investment Details Card */}
                    <div className="bg-white border border-emerald-200 rounded-xl p-5 mb-6 shadow-sm">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Інвестиція в розробку</div>
                          <div className="text-2xl font-bold text-emerald-600">$5,000</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Термін розробки</div>
                          <div className="text-2xl font-bold text-slate-900">6 тижнів</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Обслуговування</div>
                          <div className="text-2xl font-bold text-slate-900">$150<span className="text-sm text-slate-500">/міс</span></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Автопорівняння цін постачальників</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Контроль дебіторки з нагадуваннями</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Складський облік в реальному часі</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">Дашборд з реальною прибутковістю</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Step 6: Results */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden lg:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg shadow-emerald-500/30">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-sm border border-emerald-200">
                    <div className="text-sm font-semibold text-emerald-600 mb-2">Сьогодні</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Результат</h3>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      Олексій тепер володіє <span className="font-semibold text-emerald-600">власною унікальною системою обліку</span>. Він показує реальні дані інвесторам, відкриває нові точки продажу, тому що знає свою юніт-економіку. Довіра до реальних цифр завжди більша, ніж до цифр на папері.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-5">
                      <div className="space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-slate-900">₴24 млн</div>
                          <div className="text-sm text-slate-600">оборот/міс (+33%)</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">200+</div>
                          <div className="text-sm text-slate-600">активних клієнтів</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-emerald-600">3 нові</div>
                          <div className="text-sm text-slate-600">точки продажу</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-2xl font-bold text-emerald-600">₴0</div>
                          <div className="text-sm text-slate-600">втрат від крадіжок</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-emerald-600">100%</div>
                          <div className="text-sm text-slate-600">контроль процесів</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-emerald-600">5 хв</div>
                          <div className="text-sm text-slate-600">звіт для інвесторів</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <p className="text-sm text-slate-600">
                        За рік економія склала <span className="font-bold text-emerald-600">₴4.8 млн</span>. 
                        Інвестиція окупилась за <span className="font-bold text-slate-900">3 місяці</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 text-center"
          >
            <p className="text-lg text-slate-700 italic mb-3 max-w-2xl mx-auto">
              "Я думав, що система контролю — для великих корпорацій. Виявилось, вона потрібна кожному, хто не хоче втратити бізнес."
            </p>
            <p className="text-sm font-semibold text-emerald-600">— Олексій, власник компанії з оптової торгівлі</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Процес розробки
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Прозорий та зрозумілий шлях від ідеї до результату
            </p>
          </motion.div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">{item.time}</span>
                    </div>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Обговоримо ваш проєкт?
            </h2>
            <p className="text-xl text-slate-400">
              Залиште заявку — зв'яжемось протягом години та оцінимо проєкт протягом 24 годин
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 lg:p-12"
          >
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              
              // Anti-spam: Honeypot
              if (honeypot) {
                console.warn('Bot detected');
                return;
              }
              
              // Anti-spam: Мінімальний час
              const timeSpent = Date.now() - mountTimeRef.current;
              if (timeSpent < 3000 || !canSubmit) {
                showToast('Будь ласка, зачекайте кілька секунд', 'error');
                return;
              }
              
              // Anti-spam: Rate limiting
              const rateLimitKey = 'custom_solution_submissions';
              const submissions = JSON.parse(localStorage.getItem(rateLimitKey) || '[]');
              const now = Date.now();
              const oneHourAgo = now - 60 * 60 * 1000;
              const recentSubmissions = submissions.filter(time => time > oneHourAgo);
              
              if (recentSubmissions.length >= 3) {
                showToast('Ви досягли ліміту відправок. Спробуйте пізніше або напишіть нам в Telegram', 'error');
                return;
              }
              
              const lastSubmission = recentSubmissions[recentSubmissions.length - 1];
              if (lastSubmission && (now - lastSubmission) < 60000) {
                const waitSeconds = Math.ceil((60000 - (now - lastSubmission)) / 1000);
                showToast(`Зачекайте ${waitSeconds} секунд перед наступною відправкою`, 'error');
                return;
              }
              
              if (!formData.name || !formData.contact || !formData.description) {
                showToast('Будь ласка, заповніть всі поля', 'error');
                return;
              }
              
              setLoading(true);
              
              try {
                const metadata = {
                  ip: await fetch('https://api.ipify.org?format=json')
                    .then(r => r.json())
                    .then(d => d.ip)
                    .catch(() => 'невідомо'),
                  referrer: document.referrer || 'пряме відвідування',
                  screen: `${window.innerWidth}x${window.innerHeight}`,
                  language: navigator.language || navigator.userLanguage,
                  page: window.location.href,
                  formType: 'Custom Solution',
                };
                
                const { data } = await invokeFunction('sendToTelegram', {
                  email: formData.contact,
                  message: `Ім'я: ${formData.name}\n\nОпис задачі:\n${formData.description}`,
                  metadata
                });
                
                recentSubmissions.push(now);
                localStorage.setItem(rateLimitKey, JSON.stringify(recentSubmissions));
                
                showToast('Дякуємо! Заявка відправлена. Ми зв\'яжемося з вами протягом години.', 'success');
                setFormData({ name: '', contact: '', description: '' });
              } catch (error) {
                console.error('Send error:', error);
                showToast('Помилка відправки. Спробуйте ще раз або напишіть нам в Telegram', 'error');
              } finally {
                setLoading(false);
              }
            }}>
              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Ваше ім'я</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Іван Петренко"
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 h-12"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="email@company.com"
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 h-12"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Опис задачі</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Розкажіть про ваш бізнес та що хочете автоматизувати..."
                  rows={5}
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                  required
                />
              </div>

              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 text-lg rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Відправляємо...' : 'Відправити заявку'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>


          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}