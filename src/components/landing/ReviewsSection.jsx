import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      name: 'Олександр Петренко',
      position: 'CEO, TechStart',
      company: 'E-commerce',
      text: 'Завдяки таблицям PRO ми скоротили час на фінансову звітність на 70%. Тепер бачимо всю картину бізнесу в одному місці',
      rating: 5
    },
    {
      name: 'Марія Коваленко',
      position: 'Власниця',
      company: 'Крафтове виробництво',
      text: 'Шаблон складу - це справжня знахідка! Нарешті можемо контролювати залишки та прогнозувати закупівлі',
      rating: 5
    },
    {
      name: 'Дмитро Сидоренко',
      position: 'Директор',
      company: 'Будівельна компанія',
      text: 'Калькулятор кошторисів економить нам години роботи щотижня. Клієнти отримують смети швидше і виглядають професійніше',
      rating: 5
    },
    {
      name: 'Ірина Бондаренко',
      position: 'Фінансовий директор',
      company: 'Digital Agency Pro',
      text: 'Раніше витрачали години на зведення даних з різних джерел. Тепер все автоматизовано, і ми приймаємо рішення на основі актуальних даних',
      rating: 5
    },
    {
      name: 'Сергій Мельник',
      position: 'Засновник',
      company: 'Online Store',
      text: 'Почали з таблиці Lite, переросли в PRO. Система росте разом з нашим бізнесом. Рентабельність покращилась на 23%',
      rating: 5
    },
    {
      name: 'Наталія Ткаченко',
      position: 'Власниця',
      company: 'Beauty Studio',
      text: 'Найкраще що зробила для свого бізнесу - почала вести облік системно. Тепер знаю скільки заробляю насправді',
      rating: 5
    },
    {
      name: 'Андрій Волков',
      position: 'Керівник',
      company: 'IT Company',
      text: 'Управління проєктами стало простішим. Бачимо рентабельність кожного клієнта та приймаємо обґрунтовані рішення',
      rating: 5
    },
    {
      name: 'Олена Литвиненко',
      position: 'Директор',
      company: 'Logistics Hub',
      text: 'Таблиці інтегрувались в наші процеси за пару днів. Команда швидко навчилась, підтримка завжди на зв\'язку',
      rating: 5
    },
    {
      name: 'Віктор Савченко',
      position: 'CFO',
      company: 'Production Group',
      text: 'За ці гроші - це найкраще рішення на ринку. Спробували купу сервісів, але повернулись до таблиць. Все що потрібно',
      rating: 5
    }
  ];

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Відгуки клієнтів
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Що кажуть наші клієнти
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Понад 5000+ підприємців довіряють нам облік своїх фінансів
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200"
            >
              <Quote className="w-10 h-10 text-emerald-500/20 mb-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.position} • {review.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="rounded-xl px-8 py-6 text-base hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
            >
              Показати більше відгуків
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}