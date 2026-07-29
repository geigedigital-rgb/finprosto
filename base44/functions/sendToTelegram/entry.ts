Deno.serve(async (req) => {
  try {
    const { email, message, metadata } = await req.json();
    
    if (!email || !message) {
      return Response.json(
        { error: 'Email та повідомлення обов\'язкові' },
        { status: 400 }
      );
    }
    
    const botToken = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const chatId = Deno.env.get('TELEGRAM_CHAT_ID');
    
    if (!botToken || !chatId) {
      console.error('Missing secrets:', { hasToken: !!botToken, hasChatId: !!chatId });
      return Response.json(
        { error: 'Telegram не налаштований. Перевірте секрети.' },
        { status: 500 }
      );
    }
    
    // Формуємо повідомлення з додатковими даними
    const ticketTitle =
      metadata?.formType === 'Payment Failed Callback'
        ? '🎫 Новий тікет: невдала оплата'
        : '🎫 Новий тікет з контактної форми';

    let telegramMessage = `${ticketTitle}\n\n📧 Email: ${email}\n\n💬 Повідомлення:\n${message}\n\n⏰ Час: ${new Date().toLocaleString('uk-UA')}`;
    
    // Додаємо метадані якщо є
    if (metadata) {
      telegramMessage += '\n\n📊 Технічна інформація:';
      if (metadata.ip) telegramMessage += `\n🌐 IP: ${metadata.ip}`;
      if (metadata.referrer) telegramMessage += `\n🔗 Джерело: ${metadata.referrer}`;
      if (metadata.screen) telegramMessage += `\n📱 Екран: ${metadata.screen}`;
      if (metadata.language) telegramMessage += `\n🌍 Мова: ${metadata.language}`;
      if (metadata.page) telegramMessage += `\n📄 Сторінка: ${metadata.page}`;
      if (metadata.formType) telegramMessage += `\n📋 Форма: ${metadata.formType}`;
      if (metadata.product) telegramMessage += `\n🛒 Продукт: ${metadata.product}`;
      if (metadata.orderReference) telegramMessage += `\n🧾 Замовлення: ${metadata.orderReference}`;
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
      return Response.json(
        { error: 'Telegram API помилка', details: responseData },
        { status: 500 }
      );
    }
    
    return Response.json({ success: true });
    
  } catch (error) {
    console.error('Error:', error.message);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
});