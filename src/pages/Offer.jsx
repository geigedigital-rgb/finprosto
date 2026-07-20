import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function OfferPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Публічний договір оферта купівлі-продажу цифрових товарів | FinProsto';
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Публічна оферта ФОП Скрипка Г.І. на продаж цифрових товарів та послуг. Умови використання таблиць для бізнесу, правила оплати та повернення коштів.');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + '/#/Offer');
    
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Публічний договір (оферта)</h1>
              <p className="text-slate-500 mt-1">Оновлено 20.05.2023</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4">
              Цей публічний договір встановлює умови продажу товарів та послуг, що розміщені на інтернет-маркеті finprosto.com
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Постачальник товарів та послуг за цим договором є ФОП Скрипка Ганна Іванівна, ЄДРПОУ 1997112188, що працює на спрощеній системі оподаткування, іменований надалі Постачальник з однієї сторони, пропонує фізичним особам (надалі – «Замовник») отримати товари та послуги, передбачені цим Договором.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Цей Договір є публічним, відповідно до ст. ст. 633, 641 Цивільного кодексу України, та його умови є однакові для всіх Замовників, беззастережне прийняття умов якого вважаються акцептуванням цієї оферти Замовником, для чого Виконавець публікує цей Договір про таке.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Загальні положення договору</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Визначення термінів</h3>
            <p className="text-slate-700 leading-relaxed mb-4">Для цілей цього Договору терміни вживаються в такому значенні:</p>

            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Акцепт</strong> — повне, безумовне і беззастережне прийняття Замовником умов цього Договору без будь-яких винятків і/або обмежень і є рівносильним висновку двостороннього письмового Договору.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Замовник</strong> — особа, яка вчинила Акцепт умов цього Договору і стає Замовником послуг Виконавця за укладеним договором. Замовником може бути будь-яка дієздатна фізична особа, яка досягла 18 років, яка має намір отримати товари чи/та послуги Виконавця в порядку і на умовах, визначених цим Договором.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Постачальник</strong> — ФОП Скрипка Ганна Іванівна, що має право постачати товари та послуги, Передбачені цим Публічним договором (офертою). Найменування Виконавця вказується в рахунку або інших документах на оплату Послуг.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>Послуги</strong> — надання Постачальником дослідницьких та освітніх послуг з використанням ігрових, партисипативних та інших технологій, що передбачені кожним окремими набором послуг на сайті finprosto.com.
            </p>

            <p className="text-slate-700 leading-relaxed mb-8">
              <strong>Сайт</strong> — сукупність даних, електронної (цифрової) інформації, інших об'єктів авторського права і (або) суміжних прав і т.п., пов'язаних між собою і структурованих в межах адреси finprosto.com, доступ до яких здійснюється через вказану адресу мережі Інтернет.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Акцептування договору</h3>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Підтвердженням повного та безумовного акцептування публічної оферти Замовником є внесення ним плати за замовлені Послуги, що свідчить про прийняття ним публічної оферти.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Договір вважається укладеним без його подальшого підписання з моменту отримання Виконавцем оплати Замовником замовлених Послуг чи вчинення інших дій, передбачених Договором, що свідчать про згоду дотримуватися умов Договору, без підписання письмового примірника Сторонами.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">
              Замовник дає згоду дотримуватися умов Договору та згоду отримати Послуги на встановлених Виконавцем умовах з оплати замовлених Послуг.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Укладаючи Договір, Замовник автоматично погоджується з повним та безумовним прийняттям Замовником положень Договору, Тарифів та всіх додатків, що є невід'ємною складовою частиною Договору.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Виконавець зобов'язується надати товари чи/послуги у кількості, що була оплачена Замовником, а Замовник прийняти такі товари та послуги, на умовах цього Договору.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Вартість та асортимент</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Вартість товарів/послуг вказана на сторінці на сайті finprosto.com.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Асортимент товару та набір послуг визначається вибором Замовника на сайті finprosto.com шляхом додавання товарних позицій та окремих послуг у Корзину з допомогою кнопки "Замовити" та/або "Придбати".
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Відповідальність Постачальника</h3>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Постачальник не несе відповідальності за збитки, шкоди, втрату даних, припинення діяльності, прямі або непрямі збитки, пов'язані з використанням або неможливістю використання цифрового продукту, який надається Постачальник.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Постачальник не несе відповідальності за некоректну роботу або помилки, спричинені неправильним використанням продукту з боку Замовника або третіх осіб.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Виконавець не зберігає інформацію про банківські реквізити Замовника, а отже Виконавець не несе відповідальності за їх розповсюдження.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Виконавець не несе відповідальності за дії Замовника стосовно третіх осіб або третіх осіб стосовно Замовника та можливими із цим збитками.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Умови використання</h3>
            
            <p className="text-slate-700 leading-relaxed mb-4">
              Замовник зобов'язується використовувати цифровий продукт лише згідно з його призначенням і функціональністю, зазначеною в описі продукту.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Замовник зобов'язується не порушувати інтелектуальну власність Компанії, включаючи авторські права, товарні знаки та патенти, пов'язані з продуктом.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Замовник згоден не здійснювати дії, які можуть завдати шкоди безпеці продукту або порушити його функціональність.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Замовник зобов'язується дотримуватися політики конфіденційності Компанії та правил обробки даних, якщо це має сенс.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Зміни і оновлення</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Постачальник залишає за собою право вносити зміни в цифровий продукт, включаючи його функціональність та умови використання, без попереднього повідомлення Замовнику.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              У разі внесення суттєвих змін до продукту, Постачальник повідомить Замовника про такі зміни.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Демонстраційні дані</h3>
            
            <p className="text-slate-700 leading-relaxed mb-8">
              Усі дані, що відображаються в демоверсіях таблиць, прикладах заповнення, а також на скріншотах, є виключно умовними і наведені з демонстраційною метою. Вони не мають стосунку до реальних осіб, компаній чи подій. Будь-які збіги з реальними даними — випадкові та ненавмисні. Усі представлені приклади створено з метою ознайомлення з функціональністю продукту.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Форс-мажор</h3>
            <p className="text-slate-700 leading-relaxed mb-8">
              Сторони звільняються від відповідальності за невиконання або неналежне виконання своїх зобов'язань у випадку, якщо таке невиконання або неналежне виконання сталося унаслідок дії обставин непереборної сили. Під обставинами непереборної сили розуміються пожежі, землетруси, інші природні явища, стихійні лиха, дії третіх осіб, збої в електропостачанні й у роботі комунікацій, які використовуються для надання послуг, прийняття актів державних органів та інші незалежні від Сторін обставини, що унеможливлюють своєчасне, повне та належне виконання Стороною своїх зобов'язань за даним Договором.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Вирішення спорів</h3>
            <p className="text-slate-700 leading-relaxed mb-8">
              Усі спори, що виникають за даним Договором або пов'язані із ним, вирішуються шляхом переговорів між Сторонами.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Повернення коштів за цифрові товари</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Після підтвердження оплати покупцеві автоматично (або, у разі технічного збою, вручну) надається доступ до цифрового товару — шаблонів таблиць для бізнесу — шляхом надсилання посилання на завантаження або копіювання (через сервіс SendPulse).
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Згідно з ч. 3 ст. 13 Закону України «Про захист прав споживачів», споживач втрачає право на повернення цифрового товару належної якості після надання доступу до нього, якщо інше не передбачено договором.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Повернення коштів за цифрові товари не здійснюється після надання доступу, оскільки товар вважається використаним.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Оформлення замовлення означає повну згоду покупця з цією політикою.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-12 mb-4">Строк дії договору</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Цей Договір набирає чинність для Сторін з моменту оплати Замовником товару чи/послуги на сайті, вважається укладеним на невизначений строк і діє до повного виконання своїх зобов'язань Постачальником, що підтверджується актом виконаних робіт чи накладною про постачання товарів.
            </p>
            <p className="text-slate-700 leading-relaxed mb-8">
              Для відмови від отримання товарів та платних послуг Замовнику достатньо не здійснювати оплату.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}