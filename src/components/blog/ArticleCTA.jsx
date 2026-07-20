import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ArticleCTA({ 
  title, 
  description, 
  price, 
  features, 
  ctaText = "Отримати таблицю",
  href 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-16 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 lg:p-12"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            {title}
          </h3>
          <p className="text-lg text-slate-600">
            {description}
          </p>
        </div>

        {features && features.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {price && (
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-slate-900">{price}</div>
              <div className="text-sm text-slate-500">одноразова оплата</div>
            </div>
          )}
          <a href={href || '/#/Products'} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white rounded-xl px-8 py-6 text-base shadow-lg shadow-emerald-500/30">
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            Доставка на email за 2 хвилини • Підтримка в Telegram • Без підписок
          </p>
        </div>
      </div>
    </motion.div>
  );
}