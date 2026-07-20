import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Політика конфіденційності та захисту персональних даних | FinProsto';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Політика конфіденційності FinProsto. Дізнайтеся, як ми збираємо, обробляємо та захищаємо ваші персональні дані відповідно до законодавства України та GDPR.');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/#/Privacy');
    
    // Robots meta
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'index, follow');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На головну
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Політика конфіденційності та обробки даних</h1>
              <p className="text-slate-500 mt-1">Останнє оновлення: 15 грудня 2024 року</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-8">
              ФОП Скрипка Ганна Іванівна (ЄДРПОУ 1997112188), що є власником та оператором веб-сайту finprosto.com (надалі – «Компанія», «ми»), зобов'язується захищати конфіденційність персональних даних користувачів (надалі – «Користувач», «ви») відповідно до вимог Закону України «Про захист персональних даних» № 2297-VI від 01.06.2010 року та Регламенту ЄС 2016/679 (GDPR).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">1. Загальні положення</h2>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Ця Політика конфіденційності визначає порядок збору, обробки, зберігання та захисту персональних даних Користувачів, які відвідують наш сайт та/або користуються нашими послугами.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Використовуючи наш сайт та надаючи свої персональні дані, ви підтверджуєте, що прочитали, зрозуміли і приймаєте умови цієї Політики конфіденційності та надаєте добровільну згоду на обробку своїх персональних даних у спосіб та для цілей, визначених цією Політикою.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">2. Визначення термінів</h2>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Персональні дані</strong> — відомості чи сукупність відомостей про фізичну особу, яка ідентифікована або може бути конкретно ідентифікована (ім'я, прізвище, електронна адреса, телефон, IP-адреса тощо).
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Обробка персональних даних</strong> — будь-яка дія або сукупність дій, таких як збирання, реєстрація, накопичення, зберігання, адаптування, зміна, поновлення, використання і поширення (розповсюдження, реалізація, передача), знеособлення, знищення персональних даних.
            </p>

            <p className="text-slate-700 leading-relaxed mb-8">
              <strong>Згода суб'єкта персональних даних</strong> — добровільне волевиявлення фізичної особи щодо надання дозволу на обробку її персональних даних відповідно до сформульованої мети їх обробки.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">3. Які дані ми збираємо</h2>

            <h4 className="font-semibold text-slate-900 mb-3">3.1. Дані, що надаються безпосередньо Користувачем:</h4>
            
            <p className="text-slate-700 leading-relaxed mb-2">
              Email-адреса – для здійснення покупки та надсилання цифрових продуктів
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Ім'я та прізвище (за бажанням) – для персоналізації комунікації
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Дані платіжної транзакції – обробляються виключно платіжною системою, Компанія не зберігає банківські реквізити
            </p>

            <h4 className="font-semibold text-slate-900 mb-3">3.2. Дані, що збираються автоматично:</h4>
            
            <p className="text-slate-700 leading-relaxed mb-2">
              IP-адреса – для забезпечення безпеки та аналізу трафіку
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Тип браузера та пристрою – для оптимізації відображення сайту
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Дата та час відвідування – для статистичного аналізу
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Переглянуті сторінки – для покращення користувацького досвіду
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Cookies та подібні технології – відповідно до нашої Cookie Policy
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">4. Мета обробки персональних даних</h2>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Виконання договірних зобов'язань</strong> — обробка замовлень, надання доступу до придбаних цифрових продуктів
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Надання технічної підтримки</strong> — відповіді на запитання, вирішення технічних проблем
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Інформування про оновлення</strong> — повідомлення про нові функції, оновлення продуктів (за згодою)
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Покращення сервісу</strong> — аналіз використання сайту для оптимізації функціональності
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Забезпечення безпеки</strong> — запобігання шахрайству, захист від несанкціонованого доступу
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              <strong>Виконання законних вимог</strong> — дотримання податкового та бухгалтерського законодавства України
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">5. Правова підстава обробки даних</h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Ми обробляємо ваші персональні дані на наступних правових підставах:
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              1. Ваша згода – добровільне надання даних при реєстрації або покупці
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              2. Виконання договору – для надання вам придбаних товарів/послуг
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              3. Законні зобов'язання – дотримання податкового законодавства, бухгалтерського обліку
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              4. Законні інтереси – покращення сервісу, забезпечення безпеки, запобігання шахрайству
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">6. Передача персональних даних третім особам</h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              Компанія не продає, не обмінює і не передає ваші персональні дані третім особам без вашої явної згоди, за винятком випадків, передбачених законодавством України або необхідних для виконання договірних зобов'язань.
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>6.1. Платіжні системи</strong> — для обробки платежів ми використовуємо сертифіковані платіжні системи (наприклад, WayForPay), які відповідають стандартам PCI DSS. Дані вашої банківської карти передаються безпосередньо платіжній системі, ми не зберігаємо банківські реквізити на наших серверах.
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>6.2. Сервіси доставки файлів</strong> — для надання цифрових продуктів ми можемо використовувати email-сервіси та хмарні платформи (Google Workspace). Ці сервіси також дотримуються високих стандартів захисту даних.
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>6.3. Аналітичні сервіси</strong> — ми можемо використовувати знеособлені дані для аналізу трафіку сайту (Google Analytics тощо). Ці дані не дозволяють ідентифікувати конкретних користувачів.
            </p>

            <p className="text-slate-700 leading-relaxed mb-8">
              <strong>6.4. Державні органи</strong> — ми можемо розкривати персональні дані на вимогу державних органів України відповідно до чинного законодавства (податкові органи, правоохоронні органи за офіційним запитом).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">7. Зберігання та захист персональних даних</h2>

            <h4 className="font-semibold text-slate-900 mb-3">7.1. Термін зберігання</h4>
            
            <p className="text-slate-700 leading-relaxed mb-2">
              Дані для виконання договору зберігаються протягом терміну дії договірних відносин
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Фінансові документи зберігаються 3 роки відповідно до податкового законодавства України
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Після завершення необхідного періоду зберігання дані знищуються або знеособлюються
            </p>

            <h4 className="font-semibold text-slate-900 mb-3">7.2. Заходи безпеки</h4>
            
            <p className="text-slate-700 leading-relaxed mb-2">
              Використання SSL/TLS шифрування для передачі даних
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Обмеження доступу до персональних даних лише для уповноважених осіб
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Регулярне резервне копіювання даних
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Використання захищених хмарних сервісів з високим рівнем безпеки
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Моніторинг та аудит системи безпеки
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">8. Ваші права як суб'єкта персональних даних</h2>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Право на доступ</strong> — ви маєте право отримати підтвердження того, чи обробляються ваші персональні дані, та отримати доступ до них
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Право на виправлення</strong> — ви можете вимагати виправлення неточних або доповнення неповних персональних даних
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Право на видалення</strong> — ви маєте право вимагати видалення своїх персональних даних («право на забуття»)
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Право на обмеження обробки</strong> — ви можете вимагати тимчасового обмеження обробки ваших персональних даних
            </p>

            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Право на заперечення</strong> — ви можете заперечити проти обробки персональних даних з законних підстав
            </p>

            <p className="text-slate-700 leading-relaxed mb-8">
              <strong>Право на відкликання згоди</strong> — ви можете відкликати раніше надану згоду на обробку персональних даних
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">9. Cookies та подібні технології</h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Наш сайт використовує cookies – невеликі текстові файли, які зберігаються на вашому пристрої для покращення функціональності сайту та користувацького досвіду.
            </p>
            
            <h4 className="font-semibold text-slate-900 mb-3">Типи cookies, які ми використовуємо:</h4>
            
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Необхідні cookies</strong> — забезпечують базову функціональність сайту (сесія, кошик покупок). Без них сайт не може працювати коректно.
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Аналітичні cookies</strong> — допомагають нам зрозуміти, як відвідувачі взаємодіють з сайтом, для покращення його роботи.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Функціональні cookies</strong> — запам'ятовують ваші налаштування та уподобання для персоналізації досвіду.
            </p>

            <p className="text-slate-700 leading-relaxed mb-8">
              Ви можете керувати cookies через налаштування свого браузера. Зверніть увагу, що вимкнення cookies може вплинути на функціональність сайту.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">10. Захист прав неповнолітніх</h2>

            <p className="text-slate-700 leading-relaxed mb-8">
              Наші послуги призначені для осіб, які досягли 18 років. Ми свідомо не збираємо персональні дані від осіб віком до 18 років. Якщо ви є батьком або опікуном і вважаєте, що ваша дитина надала нам персональні дані, будь ласка, зв'яжіться з нами, і ми негайно видалимо таку інформацію.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">11. Міжнародна передача даних</h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Ваші персональні дані обробляються та зберігаються переважно в Україні. У випадках використання міжнародних сервісів (наприклад, Google Workspace, хмарні платформи), дані можуть передаватися за межі України.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Ми забезпечуємо, щоб усі міжнародні передачі даних здійснювалися з дотриманням відповідних механізмів захисту, передбачених українським законодавством та міжнародними стандартами (GDPR).
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">12. Зміни до Політики конфіденційності</h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              Ми залишаємо за собою право вносити зміни до цієї Політики конфіденційності в будь-який час. У разі внесення суттєвих змін ми повідомимо вас одним із наступних способів:
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Розміщення повідомлення на головній сторінці сайту
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              Надсилання email-повідомлення зареєстрованим користувачам
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Оновлення дати «Останнє оновлення» у верхній частині цієї Політики
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Продовжуючи використовувати наші послуги після оновлення Політики, ви підтверджуєте свою згоду з новими умовами.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">13. Контактна інформація</h2>

            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Найменування:</strong> ФОП Скрипка Ганна Іванівна
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>ЄДРПОУ/ІПН:</strong> 1997112188
            </p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <strong>Веб-сайт:</strong> finprosto.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}