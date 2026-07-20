import { useEffect } from 'react';

export default function WayForPayScript() {
  useEffect(() => {
    // Перевіряємо чи скрипт вже завантажений
    if (window.Wayforpay) {
      return;
    }

    // Завантажуємо скрипт WayForPay
    const script = document.createElement('script');
    script.src = 'https://secure.wayforpay.com/server/pay-widget.js';
    script.async = true;
    script.id = 'wayforpay-script';
    
    script.onload = () => {
      console.log('WayForPay script loaded successfully');
    };
    
    script.onerror = () => {
      console.error('Failed to load WayForPay script');
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup при демонтажі
      const existingScript = document.getElementById('wayforpay-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}