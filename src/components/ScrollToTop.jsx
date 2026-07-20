import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Якщо є хеш (наприклад #features), дозволити браузеру скролити до цієї секції
    if (hash && hash !== '#/') {
      // Невелика затримка для завантаження контенту
      setTimeout(() => {
        try {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } catch (e) {
          console.warn('Invalid selector:', hash);
        }
      }, 100);
    } else {
      // Якщо немає хешу, скролимо на початок сторінки
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}