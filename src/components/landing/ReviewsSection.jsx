import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      name: 'Олександр Петренко',
      position: 'CEO, TechStart',
      company: 'E-commerce',
      text: 'Завдяки таблицям PRO ми скоротили час на фінансову звітність на 70%. Тепер бачимо всю картину бізнесу в одному місці',
      rating: 5,
      photo: '/reviews/oleksandr-petrenko.jpg',
      avatar: '/reviews/oleksandr-petrenko-avatar.jpg',
    },
    {
      name: 'Марія Коваленко',
      position: 'Власниця',
      company: 'Крафтове виробництво',
      text: 'Шаблон складу - це справжня знахідка! Нарешті можемо контролювати залишки та прогнозувати закупівлі',
      rating: 5,
      photo: '/reviews/maria-kovalenko.jpg',
      avatar: '/reviews/maria-kovalenko-avatar.jpg',
    },
    {
      name: 'Дмитро Сидоренко',
      position: 'Директор',
      company: 'Будівельна компанія',
      text: 'Калькулятор кошторисів економить нам години роботи щотижня. Клієнти отримують смети швидше і виглядають професійніше',
      rating: 5,
      photo: '/reviews/dmytro-sydorenko.jpg',
      avatar: '/reviews/dmytro-sydorenko-avatar.jpg',
    },
    {
      name: 'Ірина Бондаренко',
      position: 'Фінансовий директор',
      company: 'Digital Agency Pro',
      text: 'Раніше витрачали години на зведення даних з різних джерел. Тепер все автоматизовано, і ми приймаємо рішення на основі актуальних даних',
      rating: 5,
    },
    {
      name: 'Сергій Мельник',
      position: 'Засновник',
      company: 'Online Store',
      text: 'Почали з таблиці Lite, переросли в PRO. Система росте разом з нашим бізнесом. Рентабельність покращилась на 23%',
      rating: 5,
    },
    {
      name: 'Наталія Ткаченко',
      position: 'Власниця',
      company: 'Beauty Studio',
      text: 'Найкраще що зробила для свого бізнесу - почала вести облік системно. Тепер знаю скільки заробляю насправді',
      rating: 5,
    },
    {
      name: 'Андрій Волков',
      position: 'Керівник',
      company: 'IT Company',
      text: 'Управління проєктами стало простішим. Бачимо рентабельність кожного клієнта та приймаємо обґрунтовані рішення',
      rating: 5,
    },
    {
      name: 'Олена Литвиненко',
      position: 'Директор',
      company: 'Logistics Hub',
      text: 'Таблиці інтегрувались в наші процеси за пару днів. Команда швидко навчилась, підтримка завжди на зв\'язку',
      rating: 5,
    },
    {
      name: 'Віктор Савченко',
      position: 'CFO',
      company: 'Production Group',
      text: 'За ці гроші - це найкраще рішення на ринку. Спробували купу сервісів, але повернулись до таблиць. Все що потрібно',
      rating: 5,
    },
  ];

  const featured = reviews.filter((r) => r.photo);
  const more = reviews.filter((r) => !r.photo);
  const displayedMore = showAll ? more : [];

  return (
    <section id="reviews" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7faf8]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.10),_transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Що кажуть наші клієнти
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Понад 5000+ підприємців довіряють нам облік своїх фінансів
          </p>
        </motion.div>

        {/* Featured photo testimonials — overlay style */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {featured.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-300/90 fill-amber-300/90" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-white/55 tabular-nums">
                  {review.rating}/5
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-white text-[15px] sm:text-base leading-relaxed mb-5 drop-shadow-sm">
                  «{review.text}»
                </p>
                <div className="border-t border-white/15 pt-4 flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt=""
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover object-top border-2 border-white/40 shadow-md flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-white tracking-tight">{review.name}</div>
                    <div className="text-sm text-white/65 mt-0.5 truncate">
                      {review.position} · {review.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Extra reviews — compact quote strips */}
        {displayedMore.length > 0 && (
          <div className="mt-5 sm:mt-6 grid md:grid-cols-2 gap-3 sm:gap-4">
            {displayedMore.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl bg-white/90 border border-slate-100 px-5 py-4 shadow-sm"
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">«{review.text}»</p>
                <div className="text-sm">
                  <span className="font-semibold text-slate-900">{review.name}</span>
                  <span className="text-slate-400"> · </span>
                  <span className="text-slate-500">
                    {review.position}, {review.company}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="rounded-full px-7 h-11 text-sm font-semibold bg-white border-slate-200 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors"
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
