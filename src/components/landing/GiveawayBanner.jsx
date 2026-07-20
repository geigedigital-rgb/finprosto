import React, { useState } from 'react';
import { ChevronRight, Calendar, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GiveawayBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      id="giveaway-banner" 
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Bonus Badge - Top Right */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm">
        <Gift className="w-3.5 h-3.5 text-white" />
        <span className="text-xs font-semibold text-white">Бонус</span>
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4">
          {/* Content */}
          <div className="flex-1 space-y-1 pr-16 sm:pr-20">
            <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
              Сертифікат на рекламу Facebook / Google Ads
            </h4>
            <p className="text-sm sm:text-base text-emerald-50/90">
              Розіграш 20 000 ₴ на рекламу при покупці набору
            </p>
          </div>
          
          {/* Arrow Button */}
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </motion.div>
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/20 space-y-2">
                <p className="text-sm text-white/90 leading-relaxed">
                  При покупці набору всіх таблиць ваш email може взяти участь у розіграші сертифікату. 
                  Якщо ви забажаєте, тоді при покупці натисніть "взяти участь".
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-100">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Розіграш 31 грудня 2025 року</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}