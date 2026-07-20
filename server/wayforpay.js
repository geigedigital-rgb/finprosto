import crypto from 'crypto';

/**
 * WayForPay HMAC-MD5 signature helper
 */
export function hmacMd5(message, secretKey) {
  return crypto.createHmac('md5', secretKey).update(message, 'utf8').digest('hex');
}

export function getSecretKey() {
  const key = process.env.WAYFORPAY_SECRET_KEY;
  if (!key) {
    throw new Error('WAYFORPAY_SECRET_KEY is not configured');
  }
  return key;
}

/**
 * Payment request signature (widget)
 * merchantAccount;merchantDomainName;orderReference;orderDate;amount;currency;productName;productCount;productPrice
 */
export function signPaymentRequest(fields) {
  const {
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
    productName,
    productCount,
    productPrice,
  } = fields;

  const signatureString = [
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
    productName,
    productCount,
    productPrice,
  ].join(';');

  return hmacMd5(signatureString, getSecretKey());
}

/**
 * Incoming service callback signature from WayForPay
 * merchantAccount;orderReference;amount;currency;authCode;cardPan;transactionStatus;reasonCode
 */
export function verifyCallbackSignature(payload) {
  const signatureString = [
    payload.merchantAccount,
    payload.orderReference,
    payload.amount,
    payload.currency,
    payload.authCode,
    payload.cardPan,
    payload.transactionStatus,
    payload.reasonCode,
  ].join(';');

  const expected = hmacMd5(signatureString, getSecretKey());
  const received = payload.merchantSignature || '';
  return expected.toLowerCase() === String(received).toLowerCase();
}

/**
 * Response signature back to WayForPay
 * orderReference;status;time
 */
export function signCallbackResponse(orderReference, status, time) {
  const signatureString = [orderReference, status, time].join(';');
  return hmacMd5(signatureString, getSecretKey());
}
