/**
 * WayForPay Payment Helper
 * 
 * ⚠️ КРИТИЧНО: Потрібен backend endpoint для генерації HMAC MD5 підпису!
 * Дивіться WAYFORPAY_INTEGRATION.md для інструкцій
 */

/**
 * Генерує підпис для WayForPay через backend endpoint
 * 
 * ⚠️ ВАЖЛИВО: WayForPay використовує HMAC MD5, НЕ SHA1!
 * Підпис ОБОВ'ЯЗКОВО має генеруватися на backend з секретним ключем
 * 
 * @param {Object} orderData - Дані замовлення
 * @param {string} orderData.merchantAccount - Merchant account
 * @param {string} orderData.merchantDomainName - Домен сайту
 * @param {string} orderData.orderReference - Номер замовлення
 * @param {number} orderData.orderDate - Timestamp в секундах
 * @param {number} orderData.amount - Сума
 * @param {string} orderData.currency - Валюта
 * @param {string} orderData.productName - Назва товару
 * @param {number} orderData.productCount - Кількість
 * @param {number} orderData.productPrice - Ціна
 * @returns {Promise<string>} - HMAC MD5 підпис
 */
export async function generatePaymentSignature(orderData) {
  // Base44 Backend Function endpoint
  const BACKEND_ENDPOINT = '/api/functions/generateWayForPaySignature';
  
  try {
    console.log('Requesting signature for:', orderData);
    
    const response = await fetch(BACKEND_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Backend error:', error);
      throw new Error(error.message || 'Failed to generate signature');
    }
    
    const data = await response.json();
    console.log('Signature received:', data.signature);
    return data.signature;
    
  } catch (error) {
    console.error('❌ Error generating WayForPay signature:', error);
    throw new Error('Не вдалося згенерувати підпис для оплати. Спробуйте ще раз.');
  }
}

/**
 * Ініціалізує WayForPay віджет
 * 
 * @param {Object} paymentData - Дані для оплати
 * @param {Function} onSuccess - Callback успішної оплати
 * @param {Function} onError - Callback помилки
 * @param {Function} onPending - Callback очікування
 */
export function initWayForPay(paymentData, onSuccess, onError, onPending) {
  if (!window.Wayforpay) {
    throw new Error('WayForPay script not loaded');
  }
  
  const wayforpay = new window.Wayforpay();
  wayforpay.run(paymentData, onSuccess, onError, onPending);
}

/**
 * Перевіряє чи завантажений WayForPay скрипт
 * @returns {boolean}
 */
export function isWayForPayLoaded() {
  return typeof window !== 'undefined' && !!window.Wayforpay;
}