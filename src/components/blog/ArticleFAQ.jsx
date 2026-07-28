import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ArticleFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-10 sm:mt-16 rounded-2xl sm:rounded-[32px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.05)] p-4 sm:p-8 lg:p-10">
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 mb-3">
          FAQ
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Часті питання
        </h3>
      </div>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/70 transition-colors"
            >
              <span className="font-semibold text-slate-900 pr-4 text-[15px] leading-snug">
                {faq.question}
              </span>
              <span className={`w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </span>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
