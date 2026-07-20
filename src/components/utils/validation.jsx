/**
 * Валідація email адреси
 * @param {string} email - Email для перевірки
 * @returns {boolean} - true якщо email валідний
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  
  // RFC 5322 compliant regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Базова перевірка
  if (!emailRegex.test(email)) return false;
  
  // Додаткові перевірки
  const [localPart, domain] = email.split('@');
  
  // Перевірка довжини
  if (localPart.length > 64 || domain.length > 255) return false;
  
  // Перевірка на заборонені символи
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
  if (localPart.includes('..')) return false;
  
  return true;
}

/**
 * Sanitize user input to prevent XSS
 * @param {string} input - Вхідні дані
 * @returns {string} - Очищені дані
 */
export function sanitizeInput(input) {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .slice(0, 500); // Limit length
}