/**
 * Backend Function: Генерація підпису для WayForPay
 * 
 * WayForPay вимагає HMAC MD5 підпис з секретним ключем
 */

import CryptoJS from 'npm:crypto-js@4.2.0';

Deno.serve(async (req) => {
  try {
    const {
      merchantAccount,
      merchantDomainName,
      orderReference,
      orderDate,
      amount,
      currency,
      productName,
      productCount,
      productPrice
    } = await req.json();

    // Валідація обов'язкових параметрів
    if (!merchantAccount || !orderReference || !amount || !currency || !productName) {
      return Response.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Секретний ключ з environment variables
    const SECRET_KEY = Deno.env.get('WAYFORPAY_SECRET_KEY') || '661c4f0966617994e9d097aef88b38217a20fd55';

    // Формула підпису згідно документації WayForPay
    const signatureString = `${merchantAccount};${merchantDomainName};${orderReference};${orderDate};${amount};${currency};${productName};${productCount};${productPrice}`;

    console.log('Signature string:', signatureString);

    // Генерація HMAC MD5 підпису
    const signature = CryptoJS.HmacMD5(signatureString, SECRET_KEY).toString();

    console.log('Signature generated:', signature);

    return Response.json({ signature }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error generating WayForPay signature:', error);
    return Response.json(
      { error: 'Failed to generate signature', message: error.message },
      { status: 500 }
    );
  }
});