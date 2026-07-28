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
      className="my-10 sm:my-16 rounded-2xl sm:rounded-[32px] bg-white border border-emerald-100 shadow-[0_12px_40px_rgba(15,23,42,0.06)] overflow-hidden"
    >
      <div className="relative p-5 sm:p-8 lg:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.10),_transparent_55%)]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 mb-3 sm:mb-4">
              FinProsto
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              {title}
            </h3>
            <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>

          {features && features.length > 0 && (
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50/80 border border-slate-100 px-4 py-3"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-emerald-700" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
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
              <Button className="w-full sm:w-auto h-12 bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-8 text-base font-semibold shadow-sm">
                {ctaText}
                <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Button>
            </a>
          </div>

          <p className="text-center mt-6 text-sm text-slate-500">
            Доставка на email за 2 хвилини • Підтримка в Telegram • Без підписок
          </p>
        </div>
      </div>
    </motion.div>
  );
}
