import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function MobileStickyBanner({ onScrollToBundle, reviewsRef }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (reviewsRef?.current && !isClosed) {
        const reviewsTop = reviewsRef.current.offsetTop;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > reviewsTop - 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reviewsRef, isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  const handleClick = () => {
    onScrollToBundle();
    setIsClosed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 z-50 lg:hidden"
        >
          <div className="relative bg-gradient-to-r from-emerald-600 to-teal-500 rounded-2xl shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Закрити"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Content */}
            <div className="relative p-4 flex items-center gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm leading-tight mb-0.5">
                  -70% Набір всіх таблиць
                </div>
                <div className="text-emerald-50 text-xs">
                  Керуй бізнесом | Заробляйте більше!
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleClick}
                size="sm"
                className="flex-shrink-0 bg-white hover:bg-slate-50 text-emerald-600 font-semibold shadow-lg px-4 py-2 h-auto rounded-xl"
              >
                <ArrowDown className="w-4 h-4 mr-1" />
                Дивитись
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}