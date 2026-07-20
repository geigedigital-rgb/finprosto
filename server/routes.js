import express from 'express';
import { signPaymentRequest, verifyCallbackSignature, signCallbackResponse } from './wayforpay.js';
import { buildSitemap, buildRobotsTxt, buildLlmsTxt } from './seo.js';

const router = express.Router();

/**
 * POST /api/functions/generateWayForPaySignature
 */
router.post('/generateWayForPaySignature', (req, res) => {
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
      productPrice,
    } = req.body || {};

    if (!merchantAccount || !orderReference || amount == null || !currency || !productName) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const signature = signPaymentRequest({
      merchantAccount,
      merchantDomainName,
      orderReference,
      orderDate,
      amount,
      currency,
      productName,
      productCount,
      productPrice,
    });

    return res.json({ signature });
  } catch (error) {
    console.error('Error generating WayForPay signature:', error.message);
    return res.status(500).json({
      error: 'Failed to generate signature',
      message: error.message,
    });
  }
});

/**
 * POST /api/functions/wayforpayCallback
 * Server-to-server confirmation from WayForPay
 */
router.post('/wayforpayCallback', (req, res) => {
  try {
    const payload = req.body || {};

    if (!payload.orderReference) {
      return res.status(400).json({ error: 'Missing orderReference' });
    }

    if (process.env.WAYFORPAY_SECRET_KEY) {
      const valid = verifyCallbackSignature(payload);
      if (!valid) {
        console.error('Invalid WayForPay callback signature', {
          orderReference: payload.orderReference,
        });
        return res.status(403).json({ error: 'Invalid signature' });
      }
    } else {
      console.warn('WAYFORPAY_SECRET_KEY missing — skipping callback signature check');
    }

    console.log('WayForPay callback:', {
      orderReference: payload.orderReference,
      transactionStatus: payload.transactionStatus,
      amount: payload.amount,
      email: payload.email,
    });

    const time = Math.floor(Date.now() / 1000);
    const status = 'accept';
    const response = {
      orderReference: payload.orderReference,
      status,
      time,
    };

    if (process.env.WAYFORPAY_SECRET_KEY) {
      response.signature = signCallbackResponse(payload.orderReference, status, time);
    }

    return res.json(response);
  } catch (error) {
    console.error('WayForPay callback error:', error.message);
    return res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/functions/sendToTelegram
 */
router.post('/sendToTelegram', async (req, res) => {
  try {
    const { email, message, metadata } = req.body || {};

    if (!email || !message) {
      return res.status(400).json({ error: "Email та повідомлення обов'язкові" });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Missing Telegram secrets');
      return res.status(500).json({
        error: 'Telegram не налаштований. Перевірте секрети.',
      });
    }

    let telegramMessage = `🎫 Новий тікет з контактної форми\n\n📧 Email: ${email}\n\n💬 Повідомлення:\n${message}\n\n⏰ Час: ${new Date().toLocaleString('uk-UA')}`;

    if (metadata) {
      telegramMessage += '\n\n📊 Технічна інформація:';
      if (metadata.ip) telegramMessage += `\n🌐 IP: ${metadata.ip}`;
      if (metadata.referrer) telegramMessage += `\n🔗 Джерело: ${metadata.referrer}`;
      if (metadata.screen) telegramMessage += `\n📱 Екран: ${metadata.screen}`;
      if (metadata.language) telegramMessage += `\n🌍 Мова: ${metadata.language}`;
      if (metadata.page) telegramMessage += `\n📄 Сторінка: ${metadata.page}`;
      if (metadata.formType) telegramMessage += `\n📋 Форма: ${metadata.formType}`;
      if (metadata.utm) {
        const utmParams = Object.entries(metadata.utm)
          .map(([key, value]) => `${key}: ${value}`)
          .join(', ');
        if (utmParams) telegramMessage += `\n🎯 UTM: ${utmParams}`;
      }
    }

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error('Telegram error:', responseData);
      return res.status(500).json({
        error: 'Telegram API помилка',
        details: responseData,
      });
    }

    return res.json({ success: true });
  } catch (error) {
    console.error('sendToTelegram error:', error.message);
    return res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/functions/addToSendPulse
 * Sends purchase event via SendPulse Events Manager (Automation360).
 * Prefer SENDPULSE_EVENT_URL (no auth). Optional: REST by name with OAuth.
 */
router.post('/addToSendPulse', async (req, res) => {
  try {
    const {
      email,
      price,
      orderid,
      paymentid,
      products,
      requestid,
      formname,
      formid,
      referer,
    } = req.body || {};

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const eventPayload = {
      email,
      price: price || '',
      orderid: orderid || '',
      paymentid: paymentid || '',
      products: products || '',
      requestid: requestid || '',
      formname: formname || 'Cart',
      formid: formid || '',
      referer: referer || '',
    };

    const eventUrl = process.env.SENDPULSE_EVENT_URL;

    // Preferred: Events Manager POST URL (no authorization)
    if (eventUrl) {
      const eventResponse = await fetch(eventUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventPayload),
      });

      const resultText = await eventResponse.text();
      let result;
      try {
        result = JSON.parse(resultText);
      } catch {
        result = { raw: resultText };
      }

      if (!eventResponse.ok) {
        console.error('SendPulse Event Error:', result);
        return res.status(500).json({
          success: false,
          error: 'Failed to send SendPulse event',
          details: result,
          statusCode: eventResponse.status,
        });
      }

      return res.json({
        success: true,
        message: 'Event sent to SendPulse',
        result,
      });
    }

    // Fallback: REST by event name + OAuth (sp_id / sp_sk)
    const apiId = process.env.SENDPULSE_API_ID;
    const secret = process.env.SENDPULSE_SECRET;
    const eventName = process.env.SENDPULSE_EVENT_NAME || 'abandoned_shopping_cart';

    if (!apiId || !secret) {
      console.error('Missing SendPulse SENDPULSE_EVENT_URL or API credentials');
      return res.status(500).json({
        error: 'SendPulse не налаштований. Перевірте секрети.',
        success: false,
      });
    }

    const tokenResponse = await fetch('https://api.sendpulse.com/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: apiId,
        client_secret: secret,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to get SendPulse token');
    }

    const { access_token } = await tokenResponse.json();

    const eventResponse = await fetch(
      `https://events.sendpulse.com/events/name/${encodeURIComponent(eventName)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventPayload),
      }
    );

    const result = await eventResponse.json().catch(() => ({}));

    if (!eventResponse.ok) {
      console.error('SendPulse Event Error:', result);
      return res.status(500).json({
        success: false,
        error: 'Failed to send SendPulse event',
        details: result,
        statusCode: eventResponse.status,
      });
    }

    return res.json({
      success: true,
      message: 'Event sent to SendPulse',
      result,
    });
  } catch (error) {
    console.error('addToSendPulse error:', error.message);
    return res.status(500).json({
      error: error.message,
      success: false,
    });
  }
});

export function mountSeoRoutes(app) {
  const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://finprosto.com').replace(/\/$/, '');

  app.get('/sitemap.xml', (_req, res) => {
    res
      .type('application/xml')
      .set('Cache-Control', 'public, max-age=3600')
      .send(buildSitemap(siteUrl));
  });

  // Legacy Base44 path
  app.get('/api/sitemap', (_req, res) => {
    res
      .type('application/xml')
      .set('Cache-Control', 'public, max-age=3600')
      .send(buildSitemap(siteUrl));
  });

  app.get('/robots.txt', (_req, res) => {
    res
      .type('text/plain')
      .set('Cache-Control', 'public, max-age=86400')
      .send(buildRobotsTxt(siteUrl));
  });

  app.get('/llms.txt', (_req, res) => {
    res
      .type('text/plain')
      .set('Cache-Control', 'public, max-age=3600')
      .send(buildLlmsTxt(siteUrl));
  });
}

export default router;
