import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, ExternalLink, Maximize2, Check, Star, FileSpreadsheet, TrendingUp, DollarSign, Calendar, Users, PieChart, BarChart3, Package, Calculator } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '../components/landing/Navbar';

export default function ProductDemo() {
  const [productId, setProductId] = useState('');
  const [product, setProduct] = useState(null);

  const products = {
    'pro': {
      title: 'Таблиця обліку фінансів PRO',
      demoUrl: 'https://docs.google.com/spreadsheets/d/11Wd50AtAzX9DyxbFIdnWPlvp8NzewUUY0ni0mcfAJj8/preview',
      fullUrl: 'https://docs.google.com/spreadsheets/d/11Wd50AtAzX9DyxbFIdnWPlvp8NzewUUY0ni0mcfAJj8/edit?usp=drive_link',
      description: 'Універсальна таблиця для управління фінансами. Завдяки універсальній структурі підходить для обліку: Продажі, Витрати, Статті, Проєкти, CashFlow, Бюджет, Рахунки, Річний звіт та інші.',
      price: '1 730',
      oldPrice: '2 190',
      rating: '4.9',
      users: '1900+',
      gradient: 'from-emerald-500 to-teal-500',
      features: [
        { icon: Calendar, title: 'Річний звіт', desc: 'Автоматичний розрахунок показників: Виторг - Витрати - EBITDA - Рентабельність - річний приріст. Порівняння показників з минулим роком.' },
        { icon: TrendingUp, title: 'Напрями', desc: 'Розділ для заповнення ваших основних напрямів діяльності бізнесу для зручного розгрупування звіту руху грошей.' },
        { icon: DollarSign, title: 'Статті', desc: 'Поділ ваших транзакцій за відповідністю статтей (наприклад: Реклама, Зарплата, Прибутки, Податки та інше).' },
        { icon: Users, title: 'Проєкти', desc: 'Можливість додавати ваші проєкти та керувати їх показниками: Стан проєкту, Відповідальний, Напрям, Замовник, Прибуток, Рентабельність.' },
        { icon: PieChart, title: 'Рахунки', desc: 'Розподіл по рахункам. Дуже корисно якщо ви маєте декілька бізнес рахунків або приймаєте оплату готівкою та безготівковим способом.' },
        { icon: BarChart3, title: 'Операції', desc: 'Головний лист в якому потрібно вписувати транзакції та вибирати із випадаючого списку відповідні параметри.' }
      ],
      sheets: [
        { 
          name: 'Реальний звіт', 
          desc: 'Загальний огляд фінансів',
          details: ['Усього грошей: Загальна сума', 'Звіт за цей місяць', 'Ключові клієнти', 'EBITDA: показник прибутку', 'Виручка та Витрати', 'План та Факт: порівняння показників']
        },
        { 
          name: 'Операції', 
          desc: 'Ведення транзакцій',
          details: ['Оплачено?: відмітка оплати', 'Дата обліку операції', 'Рахунок операції', 'Сума та Контрагент', 'Стаття та Проєкт', 'Коментарі до операції']
        },
        { 
          name: 'Проєкти', 
          desc: 'Контроль проєктів',
          details: ['Стан проєкту', 'Відповідальний', 'Напрям та Клієнт', 'Прибуток та Витрати', 'Порівняння факту з планом', 'Оцінка рентабельності']
        },
        { 
          name: 'Статті', 
          desc: 'Категорії витрат',
          details: ['Відстежування статей діяльності', 'Загальні показники', 'Показники за місяць', 'Тип: ДОХІД або ВИТРАТИ']
        },
        { 
          name: 'Контрагенти', 
          desc: 'База клієнтів',
          details: ['Інформація про контрагентів', 'Прибуток/Витрати загальні', 'Прибуток/Витрати за місяць', 'Реквізити контрагентів']
        },
        { 
          name: 'Напрями', 
          desc: 'Напрями діяльності',
          details: ['Один або декілька напрямів', 'Прибуток та Витрати', 'Рентабельність напряму', 'Фінансові результати']
        },
        { 
          name: 'Рахунки', 
          desc: 'Управління рахунками',
          details: ['Готівковий та банківський', 'Початковий залишок', 'Баланс план та факт', 'Рух коштів між рахунками']
        },
        { 
          name: 'Річний звіт', 
          desc: 'Аналітика за рік',
          details: ['Місяці року', 'Загальні показники', 'Порівняння з минулим роком', 'РЕНТАБЕЛЬНІСТЬ - ВИТОРГ - ВИТРАТИ - EBITDA']
        }
      ]
    },
    'warehouse': {
      title: 'Шаблон обліку складу',
      subtitle: 'Таблиця обліку Складу + аналіз продажів',
      demoUrl: 'https://docs.google.com/spreadsheets/d/1example-warehouse/preview',
      fullUrl: 'https://docs.google.com/spreadsheets/d/1example-warehouse/edit',
      description: 'Не втрачайте час та енергію на складський облік. Шаблон розв\'яже ваші проблеми і забезпечить ефективне управління складом. Вже 2400+ користувачів підвищили ефективність складу на 15%.',
      price: '429',
      oldPrice: '590',
      rating: '4.8',
      users: '2400+',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        { 
          icon: Package, 
          title: 'Надходження та відвантаження', 
          desc: 'Чітка структура таблиці, яка дозволить ефективно відстежувати товари та відображати їх актуальну кількість. Це допоможе уникнути проблеми неправильного розрахунку запасів.'
        },
        { 
          icon: BarChart3, 
          title: 'Аналіз ефективності продажів', 
          desc: 'Ви отримаєте ABC аналіз по кожному товару - це дає картину які товари стоять на першому місці за прибутковістю. Показники дебіторської/кредиторської заборгованості. Доля товару на складі в грн.'
        },
        { 
          icon: TrendingUp, 
          title: 'Прогнозування попиту', 
          desc: 'Таблиця розраховує тенденції продажів, дасть розуміти коли попит на певні товари зростає або зменшується. Це допоможе планувати закупівлі, уникати нестачі товарів.'
        },
        { 
          icon: Users, 
          title: 'Контроль постачальників', 
          desc: 'Це допоможе забезпечити стабільність постачання товарів, знизити ризики затримок і проблем з якістю, а також вести ефективний контроль над вартістю закупок.'
        },
        { 
          icon: PieChart, 
          title: 'Залишки на складі', 
          desc: 'Шаблон дозволить забезпечити належне управління запасами, уникнути дефіциту або перепродажів, а також планувати закупівлі з урахуванням реальних потреб вашого бізнесу.'
        }
      ],
      sheets: [
        { 
          name: 'Надходження', 
          desc: 'Облік закупівель',
          details: ['Реєстр надходження товарів', 'Дата та постачальник', 'Кількість та вартість', 'Автоматичні розрахунки']
        },
        { 
          name: 'Відвантаження', 
          desc: 'Контроль продажів',
          details: ['Продажі та списання', 'Дата та клієнт', 'Кількість товару', 'Виручка від продажу']
        },
        { 
          name: 'Залишки', 
          desc: 'Поточні запаси',
          details: ['Автоматичний розрахунок', 'Актуальна кількість', 'Вартість залишків', 'Контроль мінімумів']
        },
        { 
          name: 'Аналіз продажів', 
          desc: 'ABC аналіз',
          details: ['Прибутковість товарів', 'Статистика продажів', 'Рентабельність', 'Тенденції попиту']
        },
        { 
          name: 'Постачальники', 
          desc: 'База постачальників',
          details: ['Контакти постачальників', 'Умови співпраці', 'Історія закупівель', 'Контроль якості']
        }
      ]
    },
    'estimate': {
      title: 'Автоматичний калькулятор кошторису',
      subtitle: 'Калькулятор кошторисів (смети)',
      demoUrl: 'https://docs.google.com/spreadsheets/d/1example-estimate/preview',
      fullUrl: 'https://docs.google.com/spreadsheets/d/1example-estimate/edit',
      description: 'Шаблон калькулятора кошторису надає готову структуру, яка полегшує вашу роботу та забезпечує надійні результати. Можливість друку та відправлення посилання на смету клієнтам у форматі PDF.',
      price: '410',
      oldPrice: '590',
      rating: '4.7',
      users: '600+',
      gradient: 'from-violet-500 to-purple-500',
      features: [
        { 
          icon: Calculator, 
          title: 'Автоматизація', 
          desc: 'Забудьте про складні ручні розрахунки. Калькулятор автоматично виконує всі необхідні розрахунки, що економить ваш час і зменшує ймовірність помилок.'
        },
        { 
          icon: TrendingUp, 
          title: 'Гнучкість', 
          desc: 'Налаштовуйте калькулятор кошторису під свої потреби, додаючи і видаляючи розділи, щоб він відповідав специфіці вашого проекту.'
        },
        { 
          icon: DollarSign, 
          title: 'Універсальність', 
          desc: 'Легко керуйте цінами на матеріали, працю та обладнання, використовуючи свої власні значення або стандартні прайси.'
        },
        { 
          icon: FileSpreadsheet, 
          title: 'Експорт в PDF', 
          desc: 'Автоматично отримуйте готові звіти та експортуйте дані у форматі PDF для обміну інформацією з клієнтом або партнерами.'
        },
        { 
          icon: BarChart3, 
          title: 'Інструкція', 
          desc: 'Крок за кроком пояснюється, як ефективно використовувати шаблон, щоб ви з легкістю могли рахувати смети без зайвих труднощів.'
        }
      ],
      sheets: [
        { 
          name: 'Кошторис', 
          desc: 'Головний лист',
          details: ['Список робіт', 'Автоматичні розрахунки', 'Вартість матеріалів', 'Загальна сума проекту']
        },
        { 
          name: 'База робіт', 
          desc: 'Шаблони та ціни',
          details: ['Типові роботи', 'Вартість робіт', 'Матеріали', 'Нормативи часу']
        },
        { 
          name: 'Клієнти', 
          desc: 'База клієнтів',
          details: ['Контактна інформація', 'Реквізити клієнтів', 'Історія проектів', 'Умови співпраці']
        },
        { 
          name: 'Експорт PDF', 
          desc: 'Формування документу',
          details: ['Автоматичне створення PDF', 'Відправка клієнту', 'Брендування документу', 'Професійний вигляд']
        }
      ]
    },
    'lite': {
      title: 'Таблиця для бізнесу (Lite)',
      demoUrl: 'https://docs.google.com/spreadsheets/d/1example-lite/preview',
      fullUrl: 'https://docs.google.com/spreadsheets/d/1example-lite/edit',
      description: 'Базове рішення для початку обліку фінансів. Шаблон містить кілька розділів, які допоможуть відстежувати доходи, витрати, категорії витрат та бюджет.',
      price: '1 100',
      oldPrice: '1 490',
      rating: '4.6',
      users: '1200+',
      gradient: 'from-orange-500 to-amber-500',
      features: [
        { icon: DollarSign, title: 'Прибутки/Витрати', desc: 'Простий облік всіх доходів та витрат вашого бізнесу в одному місці.' },
        { icon: PieChart, title: 'Статті витрат', desc: 'Категорії для зручного групування та аналізу витрат.' },
        { icon: TrendingUp, title: 'Планування бюджету', desc: 'Плануйте доходи та витрати, контролюйте виконання плану.' },
        { icon: BarChart3, title: 'CashFlow', desc: 'Звіт руху грошових коштів для контролю ліквідності.' },
        { icon: FileSpreadsheet, title: 'Звіти', desc: 'Базові фінансові звіти для аналізу бізнесу.' },
        { icon: Calendar, title: 'Місячний облік', desc: 'Розбивка всіх показників по місяцях для аналізу динаміки.' }
      ],
      sheets: [
        { 
          name: 'Операції', 
          desc: 'Ведення транзакцій',
          details: ['Доходи та витрати', 'Дата операції', 'Категорія', 'Коментарі']
        },
        { 
          name: 'Статті', 
          desc: 'Категорії',
          details: ['Статті доходів', 'Статті витрат', 'Загальні показники', 'Аналіз по категоріям']
        },
        { 
          name: 'Бюджет', 
          desc: 'Планування',
          details: ['План доходів', 'План витрат', 'Факт виконання', 'Відхилення від плану']
        },
        { 
          name: 'CashFlow', 
          desc: 'Рух коштів',
          details: ['Залишки на початок', 'Надходження', 'Витрати', 'Залишки на кінець']
        }
      ]
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id && products[id]) {
      setProductId(id);
      setProduct(products[id]);
    }
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Продукт не знайдено</p>
          <Link to={createPageUrl('Products')}>
            <Button>Повернутися до продуктів</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-24">
        {/* Header */}
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link 
                  to={createPageUrl('Products')}
                  className="text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Демо версія</div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {product.title}
                  </h1>
                </div>
              </div>
              <div className="flex gap-3">
                <a href={product.fullUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Відкрити в новій вкладці
                  </Button>
                </a>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                  Придбати
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Frame */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Info Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Демо перегляд таблиці</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ви можете попередньо ознайомитись з таблицею нижче, але для кращого досвіду рекомендуємо відкрити повну версію в Google Таблицях з ноутбука або комп'ютера.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
          >
            <div className="bg-slate-100 px-4 py-2 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-slate-500">Перегляд документу</span>
              <Maximize2 className="w-4 h-4 text-slate-400" />
            </div>
            
            <div className="relative w-full" style={{ height: 'calc(100vh - 280px)', minHeight: '600px' }}>
              <iframe
                src={product.demoUrl}
                className="w-full h-full"
                frameBorder="0"
                title={`Демо: ${product.title}`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}