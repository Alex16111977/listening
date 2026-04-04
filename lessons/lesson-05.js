/* ═══════════════════════════════════════════════════════════
   Lesson 05 — Goethe Zertifikat A2 Hören — Modelltest 25
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_05 = {
  id: 'lesson-05',
  number: 5,
  title: 'Goethe A2 Hören — Modelltest 25',
  subtitle: 'Theater, Parkverbot, Wellness-Termin, Wetterbericht, Rente, Semesterferien und mehr',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-25',
  videoUrl: 'https://www.youtube.com/watch?v=6DA1dYfqEZo',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Nele',
      type: 'телефонное сообщение',
      text: 'Hallo Katharina, hier ist Nele. Ich habe Theaterkarten für den nächsten Freitag gekauft. Wir sehen "Leben des Galilei" von Bertolt Brecht. Hast du Lust? Die Karte kostet 25 Euro. Aber warte, ich habe eine Idee. Ich lade dich ein. Für dich ist die Karte kostenlos. Ich habe insgesamt fünf Plätze reserviert. Kommst du mit?',
      sentenceTranslations: {
        'Hallo Katharina, hier ist Nele.': { literal: 'Привет Катарина, здесь есть Неле', literary: 'Привет, Катарина, это Неле.' },
        'Ich habe Theaterkarten für den nächsten Freitag gekauft.': { literal: 'Я имею театральные-билеты на следующую пятницу купленными', literary: 'Я купила билеты в театр на следующую пятницу.' },
        'Wir sehen "Leben des Galilei" von Bertolt Brecht.': { literal: 'Мы видим "Жизнь Галилея" от Бертольта Брехта', literary: 'Мы посмотрим "Жизнь Галилея" Бертольта Брехта.' },
        'Hast du Lust?': { literal: 'Имеешь ты желание?', literary: 'Хочешь пойти?' },
        'Die Karte kostet 25 Euro.': { literal: 'Билет стоит 25 евро', literary: 'Билет стоит 25 евро.' },
        'Aber warte, ich habe eine Idee.': { literal: 'Но подожди, я имею одну идею', literary: 'Но подожди, у меня есть идея.' },
        'Ich lade dich ein.': { literal: 'Я приглашаю тебя', literary: 'Я тебя приглашаю.' },
        'Für dich ist die Karte kostenlos.': { literal: 'Для тебя есть билет бесплатный', literary: 'Для тебя билет бесплатный.' },
        'Ich habe insgesamt fünf Plätze reserviert.': { literal: 'Я имею всего пять мест зарезервированными', literary: 'Я зарезервировала всего пять мест.' },
        'Kommst du mit?': { literal: 'Идёшь ты с?', literary: 'Пойдёшь с нами?' },
      },
      vocabulary: [
        { de: 'die Theaterkarte', plural: 'die Theaterkarten', ru: 'билет в театр', gender: 'feminin', collocation: 'Theaterkarten kaufen', example: 'Ich habe Theaterkarten für den nächsten Freitag gekauft.' },
        { de: 'der Platz', plural: 'die Plätze', ru: 'место', gender: 'maskulin', collocation: 'Plätze reservieren', example: 'Ich habe insgesamt fünf Plätze reserviert.' },
        { de: 'die Idee', plural: 'die Ideen', ru: 'идея', gender: 'feminin', collocation: 'eine Idee haben', example: 'Aber warte, ich habe eine Idee.' },
        { de: 'die Lust', ru: 'желание, охота', gender: 'feminin', collocation: 'Lust haben', example: 'Hast du Lust?' },
        { de: 'einladen', ru: 'приглашать', type: 'verb', forms: 'lädt ein, lud ein, hat eingeladen', example: 'Ich lade dich ein.' },
        { de: 'reservieren', ru: 'бронировать', type: 'verb', forms: 'reserviert, reservierte, hat reserviert', example: 'Ich habe insgesamt fünf Plätze reserviert.' },
        { de: 'mitkommen', ru: 'идти с кем-то', type: 'verb', forms: 'kommt mit, kam mit, ist mitgekommen', example: 'Kommst du mit?' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Für dich ist die Karte kostenlos.' },
        { de: 'insgesamt', ru: 'всего, в общей сложности', type: 'adv', example: 'Ich habe insgesamt fünf Plätze reserviert.' },
      ],
      practiceSentences: [
        { de: 'Ich kaufe Kinokarten für Samstag.', ru: 'Я покупаю билеты в кино на субботу.', note: 'V2' },
        { de: 'Kommst du morgen mit?', ru: 'Пойдёшь завтра с нами?', note: 'отделяемая приставка' },
        { de: 'Sie lädt ihre Freunde ein.', ru: 'Она приглашает своих друзей.', note: 'отделяемая приставка' },
        { de: 'Das Ticket kostet 15 Euro.', ru: 'Билет стоит 15 евро.', note: 'V2' },
        { de: 'Hast du Lust auf Kino?', ru: 'Хочешь пойти в кино?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Was kostet die Theaterkarte für Katharina?',
        ru: 'Сколько стоит билет в театр для Катарины?',
        options: [
          { de: '25 Euro', ru: '25 евро' },
          { de: 'Nichts, sie ist kostenlos', ru: 'Ничего, он бесплатный' },
          { de: '5 Euro', ru: '5 евро' },
        ],
        correct: 1,
        explanation: 'Неле говорит: "Ich lade dich ein. Für dich ist die Karte kostenlos."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Parkverbot',
      type: 'объявление в магазине',
      text: 'Achtung, eine Information an unsere Kunden. Der Fahrer des blauen Polo mit dem Leipziger Kennzeichen L-PZ 678 steht im Parkverbot und behindert die Fußgänger. Bitte fahren Sie Ihren PKW auf einen unserer Kundenparkplätze. Ich wiederhole. Vielen Dank.',
      sentenceTranslations: {
        'Achtung, eine Information an unsere Kunden.': { literal: 'Внимание, одна информация к нашим клиентам', literary: 'Внимание, объявление для наших клиентов.' },
        'Der Fahrer des blauen Polo mit dem Leipziger Kennzeichen L-PZ 678 steht im Parkverbot und behindert die Fußgänger.': { literal: 'Водитель синего Поло с лейпцигским номерным знаком L-PZ 678 стоит в запрете парковки и мешает пешеходам', literary: 'Водитель синего Поло с лейпцигским номером L-PZ 678 припаркован в запрещённом месте и мешает пешеходам.' },
        'Bitte fahren Sie Ihren PKW auf einen unserer Kundenparkplätze.': { literal: 'Пожалуйста поезжайте ваш легковой автомобиль на одну из наших клиентских парковок', literary: 'Пожалуйста, переставьте ваш автомобиль на одну из клиентских парковок.' },
        'Ich wiederhole.': { literal: 'Я повторяю', literary: 'Повторяю.' },
        'Vielen Dank.': { literal: 'Большое спасибо', literary: 'Спасибо.' },
      },
      vocabulary: [
        { de: 'der Kunde', plural: 'die Kunden', ru: 'клиент', gender: 'maskulin', collocation: 'unsere Kunden', example: 'Achtung, eine Information an unsere Kunden.' },
        { de: 'der Fahrer', plural: 'die Fahrer', ru: 'водитель', gender: 'maskulin', collocation: 'der Fahrer des Polo', example: 'Der Fahrer des blauen Polo mit dem Leipziger Kennzeichen L-PZ 678 steht im Parkverbot und behindert die Fußgänger.' },
        { de: 'das Kennzeichen', plural: 'die Kennzeichen', ru: 'номерной знак', gender: 'neutrum', collocation: 'Leipziger Kennzeichen', example: 'Der Fahrer des blauen Polo mit dem Leipziger Kennzeichen L-PZ 678 steht im Parkverbot und behindert die Fußgänger.' },
        { de: 'das Parkverbot', plural: 'die Parkverbote', ru: 'запрет парковки', gender: 'neutrum', collocation: 'im Parkverbot stehen', example: 'Der Fahrer des blauen Polo mit dem Leipziger Kennzeichen L-PZ 678 steht im Parkverbot und behindert die Fußgänger.' },
        { de: 'der Fußgänger', plural: 'die Fußgänger', ru: 'пешеход', gender: 'maskulin', collocation: 'die Fußgänger behindern', example: 'Der Fahrer des blauen Polo mit dem Leipziger Kennzeichen L-PZ 678 steht im Parkverbot und behindert die Fußgänger.' },
        { de: 'der Kundenparkplatz', plural: 'die Kundenparkplätze', ru: 'клиентская парковка', gender: 'maskulin', collocation: 'auf einen Kundenparkplatz fahren', example: 'Bitte fahren Sie Ihren PKW auf einen unserer Kundenparkplätze.' },
        { de: 'behindern', ru: 'мешать, блокировать', type: 'verb', forms: 'behindert, behinderte, hat behindert', example: 'Der Fahrer des blauen Polo mit dem Leipziger Kennzeichen L-PZ 678 steht im Parkverbot und behindert die Fußgänger.' },
        { de: 'wiederholen', ru: 'повторять', type: 'verb', forms: 'wiederholt, wiederholte, hat wiederholt', example: 'Ich wiederhole.' },
      ],
      practiceSentences: [
        { de: 'Bitte parken Sie hier.', ru: 'Пожалуйста, паркуйтесь здесь.', note: 'императив Sie-Form' },
        { de: 'Das Auto steht falsch.', ru: 'Машина стоит неправильно.', note: 'V2' },
        { de: 'Er behindert den Weg.', ru: 'Он блокирует дорогу.', note: 'V2' },
        { de: 'Fahren Sie bitte weiter.', ru: 'Пожалуйста, проезжайте дальше.', note: 'императив Sie-Form' },
        { de: 'Ich wiederhole die Information.', ru: 'Я повторяю информацию.', note: 'V2' },
      ],
      question: {
        de: 'Was soll der Fahrer des blauen Polo machen?',
        ru: 'Что должен сделать водитель синего Поло?',
        options: [
          { de: 'Die Fußgänger warnen', ru: 'Предупредить пешеходов' },
          { de: 'Seinen PKW auf einen Kundenparkplatz fahren', ru: 'Переставить свой автомобиль на клиентскую парковку' },
          { de: 'Das Kennzeichen ändern', ru: 'Изменить номерной знак' },
        ],
        correct: 1,
        explanation: 'В объявлении сказано: "Bitte fahren Sie Ihren PKW auf einen unserer Kundenparkplätze."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Beauty und Wellness',
      type: 'напоминание по телефону',
      text: 'Schönen guten Tag, hier Stets von Beauty und Wellness. Ich wollte Sie nur heute noch einmal an den Termin erinnern. Sie haben für morgen um 10 Uhr einen Termin bei uns, und zwar eine Gesichtsmassage und ein Peeling. Bitte seien Sie pünktlich, sonst müssen Sie an einem anderen Tag kommen. Vielen Dank.',
      sentenceTranslations: {
        'Schönen guten Tag, hier Stets von Beauty und Wellness.': { literal: 'Прекрасный добрый день, здесь Штетс из Красоты и Велнеса', literary: 'Добрый день, это Штетс из салона "Красота и Велнес".' },
        'Ich wollte Sie nur heute noch einmal an den Termin erinnern.': { literal: 'Я хотела вас только сегодня ещё раз о записи напомнить', literary: 'Я хотела вам сегодня ещё раз напомнить о записи.' },
        'Sie haben für morgen um 10 Uhr einen Termin bei uns, und zwar eine Gesichtsmassage und ein Peeling.': { literal: 'Вы имеете на завтра в 10 часов запись у нас, а именно массаж лица и пилинг', literary: 'У вас завтра в 10 часов запись у нас: массаж лица и пилинг.' },
        'Bitte seien Sie pünktlich, sonst müssen Sie an einem anderen Tag kommen.': { literal: 'Пожалуйста будьте пунктуальны, иначе должны вы в другой день прийти', literary: 'Пожалуйста, приходите вовремя, иначе вам придётся прийти в другой день.' },
        'Vielen Dank.': { literal: 'Большое спасибо', literary: 'Спасибо.' },
      },
      vocabulary: [
        { de: 'der Termin', plural: 'die Termine', ru: 'запись, встреча', gender: 'maskulin', collocation: 'an den Termin erinnern', example: 'Ich wollte Sie nur heute noch einmal an den Termin erinnern.' },
        { de: 'die Gesichtsmassage', plural: 'die Gesichtsmassagen', ru: 'массаж лица', gender: 'feminin', collocation: 'eine Gesichtsmassage haben', example: 'Sie haben für morgen um 10 Uhr einen Termin bei uns, und zwar eine Gesichtsmassage und ein Peeling.' },
        { de: 'das Peeling', plural: 'die Peelings', ru: 'пилинг', gender: 'neutrum', collocation: 'ein Peeling machen', example: 'Sie haben für morgen um 10 Uhr einen Termin bei uns, und zwar eine Gesichtsmassage und ein Peeling.' },
        { de: 'erinnern', ru: 'напоминать', type: 'verb', forms: 'erinnert, erinnerte, hat erinnert', example: 'Ich wollte Sie nur heute noch einmal an den Termin erinnern.' },
        { de: 'pünktlich', ru: 'пунктуальный, вовремя', type: 'adj', example: 'Bitte seien Sie pünktlich, sonst müssen Sie an einem anderen Tag kommen.' },
      ],
      practiceSentences: [
        { de: 'Ich erinnere dich an den Termin.', ru: 'Я напоминаю тебе о встрече.', note: 'V2, erinnern an + Akk.' },
        { de: 'Sie haben morgen einen Termin.', ru: 'У вас завтра встреча.', note: 'V2' },
        { de: 'Seien Sie bitte pünktlich.', ru: 'Будьте, пожалуйста, пунктуальны.', note: 'императив Sie-Form' },
        { de: 'Wir müssen früh kommen.', ru: 'Мы должны прийти рано.', note: 'модальный + инфинитив' },
        { de: 'Der Termin ist um 14 Uhr.', ru: 'Встреча в 14 часов.', note: 'V2' },
      ],
      question: {
        de: 'Wann ist der Termin im Wellness-Salon?',
        ru: 'Когда запись в велнес-салоне?',
        options: [
          { de: 'Heute um 10 Uhr', ru: 'Сегодня в 10 часов' },
          { de: 'Morgen um 10 Uhr', ru: 'Завтра в 10 часов' },
          { de: 'An einem anderen Tag', ru: 'В другой день' },
        ],
        correct: 1,
        explanation: 'В сообщении говорится: "Sie haben für morgen um 10 Uhr einen Termin bei uns."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Bleibt überwiegend trocken. Nun das Wetter für morgen. Die Temperaturen fallen auf 10 Grad im Süden und auf 3 Grad im Norden. Es ist überwiegend sonnig bei starkem Ostwind. Ab Wochenbeginn dann wieder wärmere Temperaturen um die 20 Grad, allerdings mit Regen.',
      sentenceTranslations: {
        'Bleibt überwiegend trocken.': { literal: 'Остаётся преимущественно сухо', literary: 'Преимущественно без осадков.' },
        'Nun das Wetter für morgen.': { literal: 'Теперь погода для завтра', literary: 'А теперь прогноз погоды на завтра.' },
        'Die Temperaturen fallen auf 10 Grad im Süden und auf 3 Grad im Norden.': { literal: 'Температуры падают на 10 градусов на юге и на 3 градуса на севере', literary: 'Температура опустится до 10 градусов на юге и до 3 градусов на севере.' },
        'Es ist überwiegend sonnig bei starkem Ostwind.': { literal: 'Это есть преимущественно солнечно при сильном восточном ветре', literary: 'Преимущественно солнечно при сильном восточном ветре.' },
        'Ab Wochenbeginn dann wieder wärmere Temperaturen um die 20 Grad, allerdings mit Regen.': { literal: 'С начала-недели тогда снова более тёплые температуры около 20 градусов, однако с дождём', literary: 'С начала недели снова потеплеет до 20 градусов, однако с дождём.' },
      },
      vocabulary: [
        { de: 'das Wetter', ru: 'погода', gender: 'neutrum', collocation: 'das Wetter für morgen', example: 'Nun das Wetter für morgen.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'die Temperaturen fallen', example: 'Die Temperaturen fallen auf 10 Grad im Süden und auf 3 Grad im Norden.' },
        { de: 'der Ostwind', plural: 'die Ostwinde', ru: 'восточный ветер', gender: 'maskulin', collocation: 'bei starkem Ostwind', example: 'Es ist überwiegend sonnig bei starkem Ostwind.' },
        { de: 'der Regen', ru: 'дождь', gender: 'maskulin', collocation: 'mit Regen', example: 'Ab Wochenbeginn dann wieder wärmere Temperaturen um die 20 Grad, allerdings mit Regen.' },
        { de: 'der Wochenbeginn', ru: 'начало недели', gender: 'maskulin', collocation: 'ab Wochenbeginn', example: 'Ab Wochenbeginn dann wieder wärmere Temperaturen um die 20 Grad, allerdings mit Regen.' },
        { de: 'fallen', ru: 'падать', type: 'verb', forms: 'fällt, fiel, ist gefallen', example: 'Die Temperaturen fallen auf 10 Grad im Süden und auf 3 Grad im Norden.' },
        { de: 'überwiegend', ru: 'преимущественно', type: 'adv', example: 'Es ist überwiegend sonnig bei starkem Ostwind.' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Bleibt überwiegend trocken.' },
        { de: 'sonnig', ru: 'солнечный', type: 'adj', example: 'Es ist überwiegend sonnig bei starkem Ostwind.' },
      ],
      practiceSentences: [
        { de: 'Es bleibt heute kalt.', ru: 'Сегодня останется холодно.', note: 'V2, безличное es' },
        { de: 'Die Temperatur fällt.', ru: 'Температура падает.', note: 'V2' },
        { de: 'Es regnet im Norden.', ru: 'На севере идёт дождь.', note: 'V2, безличное es' },
        { de: 'Ab Montag wird es warm.', ru: 'С понедельника станет тепло.', note: 'V2 после обстоятельства' },
        { de: 'Es ist sonnig.', ru: 'Солнечно.', note: 'V2, безличное es' },
      ],
      question: {
        de: 'Wie ist das Wetter morgen?',
        ru: 'Какая погода будет завтра?',
        options: [
          { de: 'Regnerisch und warm', ru: 'Дождливо и тепло' },
          { de: 'Überwiegend sonnig bei starkem Ostwind', ru: 'Преимущественно солнечно при сильном восточном ветре' },
          { de: 'Bewölkt ohne Wind', ru: 'Облачно без ветра' },
        ],
        correct: 1,
        explanation: 'В прогнозе сказано: "Es ist überwiegend sonnig bei starkem Ostwind."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Rente',
      type: 'радио-интервью',
      text: 'Und hier noch eine Frage eines Zuhörers. Er fragt, ab wann man in Deutschland Rente bekommt. Herr Meyer. Also früher bekam man spätestens ab 65 Rente. Heute steht das Rentenalter immer wieder zur Diskussion. Viele werden in einigen Jahren erst ab 67 Rente bekommen. Heute aber gehen die meisten Deutschen schon vor dem 65. Lebensjahr in Rente.',
      sentenceTranslations: {
        'Und hier noch eine Frage eines Zuhörers.': { literal: 'И здесь ещё один вопрос одного слушателя', literary: 'А вот ещё вопрос от слушателя.' },
        'Er fragt, ab wann man in Deutschland Rente bekommt.': { literal: 'Он спрашивает, с когда человек в Германии пенсию получает', literary: 'Он спрашивает, с какого возраста в Германии получают пенсию.' },
        'Herr Meyer.': { literal: 'Господин Майер', literary: 'Господин Майер.' },
        'Also früher bekam man spätestens ab 65 Rente.': { literal: 'Итак раньше получал человек самое позднее с 65 пенсию', literary: 'Раньше пенсию получали самое позднее с 65 лет.' },
        'Heute steht das Rentenalter immer wieder zur Diskussion.': { literal: 'Сегодня стоит пенсионный-возраст всё снова к дискуссии', literary: 'Сегодня пенсионный возраст постоянно обсуждается.' },
        'Viele werden in einigen Jahren erst ab 67 Rente bekommen.': { literal: 'Многие будут через несколько лет только с 67 пенсию получать', literary: 'Многие через несколько лет будут получать пенсию только с 67.' },
        'Heute aber gehen die meisten Deutschen schon vor dem 65. Lebensjahr in Rente.': { literal: 'Сегодня однако идут большинство немцев уже до 65-го года-жизни на пенсию', literary: 'Но сегодня большинство немцев выходят на пенсию ещё до 65 лет.' },
        'Heute aber gehen die meisten Deutschen schon vor dem 65.': { literal: 'Сегодня однако идут большинство немцев уже перед 65-м', literary: 'Сегодня, однако, большинство немцев уходят уже до 65-го' },
        'Lebensjahr in Rente.': { literal: 'года-жизни на пенсию', literary: 'года жизни на пенсию.' },
      },
      vocabulary: [
        { de: 'die Rente', plural: 'die Renten', ru: 'пенсия', gender: 'feminin', collocation: 'Rente bekommen', example: 'Er fragt, ab wann man in Deutschland Rente bekommt.' },
        { de: 'das Rentenalter', ru: 'пенсионный возраст', gender: 'neutrum', collocation: 'das Rentenalter steht zur Diskussion', example: 'Heute steht das Rentenalter immer wieder zur Diskussion.' },
        { de: 'die Diskussion', plural: 'die Diskussionen', ru: 'дискуссия, обсуждение', gender: 'feminin', collocation: 'zur Diskussion stehen', example: 'Heute steht das Rentenalter immer wieder zur Diskussion.' },
        { de: 'der Zuhörer', plural: 'die Zuhörer', ru: 'слушатель', gender: 'maskulin', collocation: 'eine Frage eines Zuhörers', example: 'Und hier noch eine Frage eines Zuhörers.' },
        { de: 'das Lebensjahr', plural: 'die Lebensjahre', ru: 'год жизни', gender: 'neutrum', collocation: 'vor dem 65. Lebensjahr', example: 'Heute aber gehen die meisten Deutschen schon vor dem 65. Lebensjahr in Rente.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Er fragt, ab wann man in Deutschland Rente bekommt.' },
        { de: 'spätestens', ru: 'самое позднее', type: 'adv', example: 'Also früher bekam man spätestens ab 65 Rente.' },
      ],
      practiceSentences: [
        { de: 'Man bekommt Geld.', ru: 'Люди получают деньги.', note: 'V2' },
        { de: 'Er fragt, wann wir kommen.', ru: 'Он спрашивает, когда мы придём.', note: 'глагол в конце придаточного' },
        { de: 'Sie wird nächstes Jahr arbeiten.', ru: 'Она будет работать в следующем году.', note: 'Futur I: werden + инфинитив' },
        { de: 'Viele gehen früh schlafen.', ru: 'Многие рано ложатся спать.', note: 'V2' },
        { de: 'Das Thema steht zur Diskussion.', ru: 'Тема обсуждается.', note: 'V2' },
      ],
      question: {
        de: 'Wann gehen die meisten Deutschen heute in Rente?',
        ru: 'Когда большинство немцев сегодня выходят на пенсию?',
        options: [
          { de: 'Mit 67 Jahren', ru: 'В 67 лет' },
          { de: 'Mit genau 65 Jahren', ru: 'Ровно в 65 лет' },
          { de: 'Vor dem 65. Lebensjahr', ru: 'До 65 лет' },
        ],
        correct: 2,
        explanation: 'В интервью говорится: "Heute aber gehen die meisten Deutschen schon vor dem 65. Lebensjahr in Rente."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Semesterferien',
      type: 'диалог',
      text: 'Hallo Vanessa, hallo Lhasa. Genießt du schon die Semesterferien? Naja, die fangen ja erst heute an. Aber Zeit zum Faulenzen werde ich wohl nicht haben. Ich muss arbeiten. Ich habe nämlich einen Job im Supermarkt bekommen. Und ich muss meine Masterarbeit schreiben. Was macht eigentlich Annika? Ach die hat es gut, die kann Ski fahren gehen wie immer. Nein nein, sie hat doch vor zwei Tagen ihr Bein gebrochen. Annika wird wohl zu Hause bleiben müssen. Auch die Ärmste. Simon fliegt zu seinem Vater nach Barcelona. Da ist bestimmt besseres Wetter als hier. Simon fliegt zwar zu seinem Vater, aber der arbeitet jetzt in Warschau. Also fliegt er dahin, nach Warschau. Du weißt doch, dass Dennis Medizin studiert. Die haben an seiner Universität in den Semesterferien Prüfungen und er muss die ganze Zeit in der Bibliothek lernen. Auch nicht so toll. Er wollte doch so gerne nach New York. Tja, da hat es Jonas besser. Der fliegt mit seinem Kumpel nach Indonesien zum Surfen. Dort sind die Wellen viel größer als in Portugal.',
      sentenceTranslations: {
        'Hallo Vanessa, hallo Lhasa.': { literal: 'Привет Ванесса, привет Лхаса', literary: 'Привет, Ванесса, привет, Лхаса.' },
        'Genießt du schon die Semesterferien?': { literal: 'Наслаждаешься ты уже семестровыми каникулами?', literary: 'Ты уже наслаждаешься каникулами?' },
        'Naja, die fangen ja erst heute an.': { literal: 'Ну, они начинаются ведь только сегодня', literary: 'Ну, они же только сегодня начинаются.' },
        'Aber Zeit zum Faulenzen werde ich wohl nicht haben.': { literal: 'Но время для безделья буду я вероятно не иметь', literary: 'Но времени на безделье у меня, наверное, не будет.' },
        'Ich muss arbeiten.': { literal: 'Я должна работать', literary: 'Мне нужно работать.' },
        'Ich habe nämlich einen Job im Supermarkt bekommen.': { literal: 'Я имею дело-в-том-что работу в супермаркете получила', literary: 'Дело в том, что я получила работу в супермаркете.' },
        'Und ich muss meine Masterarbeit schreiben.': { literal: 'И я должна мою магистерскую-работу писать', literary: 'А мне нужно писать магистерскую.' },
        'Was macht eigentlich Annika?': { literal: 'Что делает собственно Анника?', literary: 'А что делает Анника?' },
        'Ach die hat es gut, die kann Ski fahren gehen wie immer.': { literal: 'Ах ей хорошо, она может на-лыжах ездить ходить как всегда', literary: 'Ей хорошо, она может кататься на лыжах как обычно.' },
        'Nein nein, sie hat doch vor zwei Tagen ihr Bein gebrochen.': { literal: 'Нет нет, она имеет же два дня назад свою ногу сломанной', literary: 'Нет-нет, она же два дня назад сломала ногу.' },
        'Annika wird wohl zu Hause bleiben müssen.': { literal: 'Анника будет вероятно дома оставаться должна', literary: 'Аннике, наверное, придётся сидеть дома.' },
        'Auch die Ärmste.': { literal: 'Также бедняжка', literary: 'Бедняжка.' },
        'Simon fliegt zu seinem Vater nach Barcelona.': { literal: 'Симон летит к своему отцу в Барселону', literary: 'Симон летит к отцу в Барселону.' },
        'Da ist bestimmt besseres Wetter als hier.': { literal: 'Там есть определённо лучшая погода чем здесь', literary: 'Там точно лучше погода, чем здесь.' },
        'Simon fliegt zwar zu seinem Vater, aber der arbeitet jetzt in Warschau.': { literal: 'Симон летит хотя к своему отцу, но тот работает сейчас в Варшаве', literary: 'Симон хоть и летит к отцу, но тот теперь работает в Варшаве.' },
        'Also fliegt er dahin, nach Warschau.': { literal: 'Итак летит он туда, в Варшаву', literary: 'Так что он летит туда, в Варшаву.' },
        'Du weißt doch, dass Dennis Medizin studiert.': { literal: 'Ты знаешь же, что Деннис медицину изучает', literary: 'Ты же знаешь, что Деннис изучает медицину.' },
        'Die haben an seiner Universität in den Semesterferien Prüfungen und er muss die ganze Zeit in der Bibliothek lernen.': { literal: 'Они имеют в его университете в семестровых каникулах экзамены и он должен всё время в библиотеке учиться', literary: 'У них в университете экзамены во время каникул, и ему нужно всё время учиться в библиотеке.' },
        'Auch nicht so toll.': { literal: 'Тоже не так здорово', literary: 'Тоже не очень.' },
        'Er wollte doch so gerne nach New York.': { literal: 'Он хотел же так охотно в Нью-Йорк', literary: 'А ведь он так хотел в Нью-Йорк.' },
        'Tja, da hat es Jonas besser.': { literal: 'Ну, тут имеет это Йонас лучше', literary: 'Ну, Йонасу повезло больше.' },
        'Der fliegt mit seinem Kumpel nach Indonesien zum Surfen.': { literal: 'Тот летит со своим приятелем в Индонезию для сёрфинга', literary: 'Он летит с приятелем в Индонезию заниматься сёрфингом.' },
        'Dort sind die Wellen viel größer als in Portugal.': { literal: 'Там есть волны намного больше чем в Португалии', literary: 'Там волны намного больше, чем в Португалии.' },
      },
      vocabulary: [
        { de: 'die Semesterferien', ru: 'семестровые каникулы (Pl.)', gender: 'feminin', collocation: 'die Semesterferien genießen', example: 'Genießt du schon die Semesterferien?' },
        { de: 'die Masterarbeit', plural: 'die Masterarbeiten', ru: 'магистерская работа', gender: 'feminin', collocation: 'die Masterarbeit schreiben', example: 'Und ich muss meine Masterarbeit schreiben.' },
        { de: 'das Bein', plural: 'die Beine', ru: 'нога', gender: 'neutrum', collocation: 'das Bein brechen', example: 'Nein nein, sie hat doch vor zwei Tagen ihr Bein gebrochen.' },
        { de: 'die Bibliothek', plural: 'die Bibliotheken', ru: 'библиотека', gender: 'feminin', collocation: 'in der Bibliothek lernen', example: 'Die haben an seiner Universität in den Semesterferien Prüfungen und er muss die ganze Zeit in der Bibliothek lernen.' },
        { de: 'die Prüfung', plural: 'die Prüfungen', ru: 'экзамен', gender: 'feminin', collocation: 'Prüfungen haben', example: 'Die haben an seiner Universität in den Semesterferien Prüfungen und er muss die ganze Zeit in der Bibliothek lernen.' },
        { de: 'der Kumpel', plural: 'die Kumpel', ru: 'приятель', gender: 'maskulin', collocation: 'mit seinem Kumpel', example: 'Der fliegt mit seinem Kumpel nach Indonesien zum Surfen.' },
        { de: 'die Welle', plural: 'die Wellen', ru: 'волна', gender: 'feminin', collocation: 'große Wellen', example: 'Dort sind die Wellen viel größer als in Portugal.' },
        { de: 'genießen', ru: 'наслаждаться', type: 'verb', forms: 'genießt, genoss, hat genossen', example: 'Genießt du schon die Semesterferien?' },
        { de: 'anfangen', ru: 'начинать(ся)', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Naja, die fangen ja erst heute an.' },
        { de: 'brechen', ru: 'ломать', type: 'verb', forms: 'bricht, brach, hat gebrochen', example: 'Nein nein, sie hat doch vor zwei Tagen ihr Bein gebrochen.' },
        { de: 'fliegen', ru: 'лететь', type: 'verb', forms: 'fliegt, flog, ist geflogen', example: 'Simon fliegt zu seinem Vater nach Barcelona.' },
        { de: 'nämlich', ru: 'дело в том, что', type: 'adv', example: 'Ich habe nämlich einen Job im Supermarkt bekommen.' },
      ],
      practiceSentences: [
        { de: 'Die Ferien fangen morgen an.', ru: 'Каникулы начинаются завтра.', note: 'отделяемая приставка в конце' },
        { de: 'Ich muss heute arbeiten.', ru: 'Мне нужно сегодня работать.', note: 'модальный + инфинитив' },
        { de: 'Er hat sein Handy verloren.', ru: 'Он потерял свой телефон.', note: 'Perfekt: hat + Partizip II' },
        { de: 'Sie wird zu Hause bleiben.', ru: 'Она останется дома.', note: 'Futur I: wird + инфинитив' },
        { de: 'Wir fliegen nach Berlin.', ru: 'Мы летим в Берлин.', note: 'V2' },
      ],
      question: {
        de: 'Was macht Annika in den Semesterferien?',
        ru: 'Что делает Анника на каникулах?',
        options: [
          { de: 'Sie fährt Ski', ru: 'Она катается на лыжах' },
          { de: 'Sie muss zu Hause bleiben', ru: 'Она должна оставаться дома' },
          { de: 'Sie fliegt nach Barcelona', ru: 'Она летит в Барселону' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится, что она сломала ногу: "Annika wird wohl zu Hause bleiben müssen."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Firma',
      type: 'разговор на работе',
      text: 'Sag mal, wie viele Angestellte arbeiten eigentlich in unserer Firma? Im Moment sind wir circa 50 Kollegen. Dann haben wir noch eine Auszubildende, die eine Ausbildung zur Sekretärin macht. Ach, und in der Küche ist noch die Köchin, die gehört auch zur Firma. Und nächste Woche kommt noch die Praktikantin, die will Ingenieurin werden.',
      sentenceTranslations: {
        'Sag mal, wie viele Angestellte arbeiten eigentlich in unserer Firma?': { literal: 'Скажи-ка, сколько служащих работают собственно в нашей фирме?', literary: 'Скажи, сколько сотрудников работает в нашей фирме?' },
        'Im Moment sind wir circa 50 Kollegen.': { literal: 'В данный момент есть мы около 50 коллег', literary: 'Сейчас нас около 50 коллег.' },
        'Dann haben wir noch eine Auszubildende, die eine Ausbildung zur Sekretärin macht.': { literal: 'Затем имеем мы ещё одну стажёрку, которая обучение к секретарю делает', literary: 'Ещё у нас есть стажёрка, которая учится на секретаря.' },
        'Ach, und in der Küche ist noch die Köchin, die gehört auch zur Firma.': { literal: 'Ах, и на кухне есть ещё повариха, она принадлежит тоже к фирме', literary: 'А на кухне есть ещё повар, она тоже работает в фирме.' },
        'Und nächste Woche kommt noch die Praktikantin, die will Ingenieurin werden.': { literal: 'И следующую неделю приходит ещё практикантка, которая хочет инженером стать', literary: 'А на следующей неделе придёт ещё практикантка, которая хочет стать инженером.' },
      },
      vocabulary: [
        { de: 'die Firma', plural: 'die Firmen', ru: 'фирма', gender: 'feminin', collocation: 'in unserer Firma arbeiten', example: 'Sag mal, wie viele Angestellte arbeiten eigentlich in unserer Firma?' },
        { de: 'die Auszubildende', plural: 'die Auszubildenden', ru: 'стажёрка, ученица', gender: 'feminin', collocation: 'eine Auszubildende haben', example: 'Dann haben wir noch eine Auszubildende, die eine Ausbildung zur Sekretärin macht.' },
        { de: 'die Ausbildung', plural: 'die Ausbildungen', ru: 'обучение, стажировка', gender: 'feminin', collocation: 'eine Ausbildung machen', example: 'Dann haben wir noch eine Auszubildende, die eine Ausbildung zur Sekretärin macht.' },
        { de: 'die Köchin', plural: 'die Köchinnen', ru: 'повар (ж.)', gender: 'feminin', collocation: 'die Köchin gehört zur Firma', example: 'Ach, und in der Küche ist noch die Köchin, die gehört auch zur Firma.' },
        { de: 'die Praktikantin', plural: 'die Praktikantinnen', ru: 'практикантка', gender: 'feminin', collocation: 'die Praktikantin kommt', example: 'Und nächste Woche kommt noch die Praktikantin, die will Ingenieurin werden.' },
        { de: 'gehören zu', ru: 'относиться к, принадлежать', type: 'verb', forms: 'gehört, gehörte, hat gehört', example: 'Ach, und in der Küche ist noch die Köchin, die gehört auch zur Firma.' },
        { de: 'eigentlich', ru: 'собственно, вообще-то', type: 'adv', example: 'Sag mal, wie viele Angestellte arbeiten eigentlich in unserer Firma?' },
      ],
      practiceSentences: [
        { de: 'Wie viele Leute arbeiten hier?', ru: 'Сколько людей здесь работает?', note: 'V2 в вопросе' },
        { de: 'Wir sind zehn Kollegen.', ru: 'Нас десять коллег.', note: 'V2' },
        { de: 'Sie macht eine Ausbildung.', ru: 'Она проходит обучение.', note: 'V2' },
        { de: 'Er gehört zu unserem Team.', ru: 'Он относится к нашей команде.', note: 'V2' },
        { de: 'Sie will Ärztin werden.', ru: 'Она хочет стать врачом.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Wer kommt nächste Woche zur Firma?',
        ru: 'Кто придёт в фирму на следующей неделе?',
        options: [
          { de: 'Eine neue Köchin', ru: 'Новый повар' },
          { de: 'Eine Praktikantin', ru: 'Практикантка' },
          { de: '50 neue Kollegen', ru: '50 новых коллег' },
        ],
        correct: 1,
        explanation: 'В разговоре говорится: "Und nächste Woche kommt noch die Praktikantin."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Frau Schneider',
      type: 'диалог в парикмахерской',
      text: 'Hallo Frau Schneider. Wie möchten Sie denn heute Ihre Haare? Kurz? Nein, ich möchte sie lang lassen. Aber mit der Farbe weiß ich noch nicht. Lassen Sie mich mal sehen. Ich schlage vor, wir färben sie dunkel. Ach lieber nicht. Am besten lassen wir sie blond. Wie Sie wünschen.',
      sentenceTranslations: {
        'Hallo Frau Schneider.': { literal: 'Привет фрау Шнайдер', literary: 'Здравствуйте, фрау Шнайдер.' },
        'Wie möchten Sie denn heute Ihre Haare?': { literal: 'Как хотели бы вы же сегодня ваши волосы?', literary: 'Как вы хотите сегодня сделать волосы?' },
        'Kurz?': { literal: 'Коротко?', literary: 'Коротко?' },
        'Nein, ich möchte sie lang lassen.': { literal: 'Нет, я хотела бы их длинными оставить', literary: 'Нет, я хочу оставить длинными.' },
        'Aber mit der Farbe weiß ich noch nicht.': { literal: 'Но с цветом знаю я ещё не', literary: 'Но с цветом я ещё не определилась.' },
        'Lassen Sie mich mal sehen.': { literal: 'Позвольте мне разок посмотреть', literary: 'Дайте-ка мне посмотреть.' },
        'Ich schlage vor, wir färben sie dunkel.': { literal: 'Я предлагаю, мы красим их тёмными', literary: 'Предлагаю покрасить в тёмный.' },
        'Ach lieber nicht.': { literal: 'Ах лучше нет', literary: 'Лучше не надо.' },
        'Am besten lassen wir sie blond.': { literal: 'Лучше всего оставим мы их светлыми', literary: 'Лучше всего оставим светлыми.' },
        'Wie Sie wünschen.': { literal: 'Как вы желаете', literary: 'Как пожелаете.' },
      },
      vocabulary: [
        { de: 'das Haar', plural: 'die Haare', ru: 'волос, волосы', gender: 'neutrum', collocation: 'die Haare färben', example: 'Wie möchten Sie denn heute Ihre Haare?' },
        { de: 'die Farbe', plural: 'die Farben', ru: 'цвет, краска', gender: 'feminin', collocation: 'mit der Farbe', example: 'Aber mit der Farbe weiß ich noch nicht.' },
        { de: 'lassen', ru: 'оставлять, позволять', type: 'verb', forms: 'lässt, ließ, hat gelassen', example: 'Nein, ich möchte sie lang lassen.' },
        { de: 'färben', ru: 'красить', type: 'verb', forms: 'färbt, färbte, hat gefärbt', example: 'Ich schlage vor, wir färben sie dunkel.' },
        { de: 'vorschlagen', ru: 'предлагать', type: 'verb', forms: 'schlägt vor, schlug vor, hat vorgeschlagen', example: 'Ich schlage vor, wir färben sie dunkel.' },
        { de: 'wünschen', ru: 'желать', type: 'verb', forms: 'wünscht, wünschte, hat gewünscht', example: 'Wie Sie wünschen.' },
        { de: 'dunkel', ru: 'тёмный', type: 'adj', example: 'Ich schlage vor, wir färben sie dunkel.' },
        { de: 'blond', ru: 'светлый, блонд', type: 'adj', example: 'Am besten lassen wir sie blond.' },
      ],
      practiceSentences: [
        { de: 'Wie möchten Sie Ihren Kaffee?', ru: 'Как вы хотите кофе?', note: 'V2, модальный глагол' },
        { de: 'Ich lasse meine Haare wachsen.', ru: 'Я отращиваю волосы.', note: 'V2' },
        { de: 'Wir färben sie rot.', ru: 'Мы красим их в красный.', note: 'V2' },
        { de: 'Lassen Sie mich überlegen.', ru: 'Дайте мне подумать.', note: 'императив + инфинитив' },
        { de: 'Am besten gehen wir jetzt.', ru: 'Лучше пойдём сейчас.', note: 'V2 после наречия' },
      ],
      question: {
        de: 'Welche Haarfarbe bekommt Frau Schneider?',
        ru: 'Какой цвет волос будет у фрау Шнайдер?',
        options: [
          { de: 'Dunkel', ru: 'Тёмный' },
          { de: 'Blond', ru: 'Светлый' },
          { de: 'Rot', ru: 'Рыжий' },
        ],
        correct: 1,
        explanation: 'После обсуждения решают: "Am besten lassen wir sie blond."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Petra kocht',
      type: 'разговор',
      text: 'Sebastian, unsere Nachbarn haben uns für heute Abend zum Essen eingeladen. Wieder Spaghetti mit Tomatensoße? Nein, heute kocht Petra indisch. Es gibt Hühnchen mit Reis und Currysauce. Na hoffentlich schmeckt das. Die beste Köchin ist sie ja nicht gerade. Ach Sebastian, nur weil letztes Mal die Pizza angebrannt war, kannst du doch nicht sagen, dass sie eine schlechte Köchin ist. Wie du meinst.',
      sentenceTranslations: {
        'Sebastian, unsere Nachbarn haben uns für heute Abend zum Essen eingeladen.': { literal: 'Себастьян, наши соседи имеют нас на сегодня вечер к еде приглашёнными', literary: 'Себастьян, соседи пригласили нас на ужин сегодня.' },
        'Wieder Spaghetti mit Tomatensoße?': { literal: 'Снова спагетти с томатным соусом?', literary: 'Опять спагетти с томатным соусом?' },
        'Nein, heute kocht Petra indisch.': { literal: 'Нет, сегодня готовит Петра по-индийски', literary: 'Нет, сегодня Петра готовит индийскую кухню.' },
        'Es gibt Hühnchen mit Reis und Currysauce.': { literal: 'Имеется курица с рисом и соусом карри', literary: 'Будет курица с рисом и соусом карри.' },
        'Na hoffentlich schmeckt das.': { literal: 'Ну надеюсь вкусно это', literary: 'Надеюсь, будет вкусно.' },
        'Die beste Köchin ist sie ja nicht gerade.': { literal: 'Лучшей поварихой есть она ведь не прямо', literary: 'Она не самый лучший повар.' },
        'Ach Sebastian, nur weil letztes Mal die Pizza angebrannt war, kannst du doch nicht sagen, dass sie eine schlechte Köchin ist.': { literal: 'Ах Себастьян, только потому что прошлый раз пицца подгорела была, можешь ты же не говорить, что она плохая повариха есть', literary: 'Себастьян, только потому что в прошлый раз пицца подгорела, ты же не можешь говорить, что она плохой повар.' },
        'Wie du meinst.': { literal: 'Как ты думаешь', literary: 'Как хочешь.' },
      },
      vocabulary: [
        { de: 'der Nachbar', plural: 'die Nachbarn', ru: 'сосед', gender: 'maskulin', collocation: 'unsere Nachbarn', example: 'Sebastian, unsere Nachbarn haben uns für heute Abend zum Essen eingeladen.' },
        { de: 'das Essen', ru: 'еда, ужин', gender: 'neutrum', collocation: 'zum Essen einladen', example: 'Sebastian, unsere Nachbarn haben uns für heute Abend zum Essen eingeladen.' },
        { de: 'das Hühnchen', plural: 'die Hühnchen', ru: 'курица (блюдо)', gender: 'neutrum', collocation: 'Hühnchen mit Reis', example: 'Es gibt Hühnchen mit Reis und Currysauce.' },
        { de: 'die Pizza', plural: 'die Pizzen', ru: 'пицца', gender: 'feminin', collocation: 'die Pizza ist angebrannt', example: 'Ach Sebastian, nur weil letztes Mal die Pizza angebrannt war, kannst du doch nicht sagen, dass sie eine schlechte Köchin ist.' },
        { de: 'schmecken', ru: 'быть вкусным', type: 'verb', forms: 'schmeckt, schmeckte, hat geschmeckt', example: 'Na hoffentlich schmeckt das.' },
        { de: 'kochen', ru: 'готовить', type: 'verb', forms: 'kocht, kochte, hat gekocht', example: 'Nein, heute kocht Petra indisch.' },
        { de: 'anbrennen', ru: 'подгорать', type: 'verb', forms: 'brennt an, brannte an, ist angebrannt', example: 'Ach Sebastian, nur weil letztes Mal die Pizza angebrannt war, kannst du doch nicht sagen, dass sie eine schlechte Köchin ist.' },
        { de: 'hoffentlich', ru: 'надеюсь', type: 'adv', example: 'Na hoffentlich schmeckt das.' },
      ],
      practiceSentences: [
        { de: 'Sie haben uns eingeladen.', ru: 'Они нас пригласили.', note: 'Perfekt: haben + Partizip II' },
        { de: 'Es gibt heute Suppe.', ru: 'Сегодня будет суп.', note: 'безличное es gibt' },
        { de: 'Das schmeckt gut.', ru: 'Это вкусно.', note: 'V2' },
        { de: 'Die Pizza war angebrannt.', ru: 'Пицца подгорела.', note: 'Präteritum + Partizip II' },
        { de: 'Du kannst das nicht sagen.', ru: 'Ты не можешь это говорить.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was kocht Petra heute?',
        ru: 'Что готовит Петра сегодня?',
        options: [
          { de: 'Spaghetti mit Tomatensoße', ru: 'Спагетти с томатным соусом' },
          { de: 'Indisches Hühnchen mit Reis und Currysauce', ru: 'Индийскую курицу с рисом и соусом карри' },
          { de: 'Pizza', ru: 'Пиццу' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "heute kocht Petra indisch. Es gibt Hühnchen mit Reis und Currysauce."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Hotel',
      type: 'разговор о путешествии',
      text: 'Hallo Lukas. Na, wie war die Reise? Na ja, nicht so toll. Im Prospekt stand, dass unser Hotel ein Fünf-Sterne-Hotel sei. Aber in Wirklichkeit war es ein kleines Hotel ohne Swimmingpool und weit weg vom Meer. Da kannst du dich doch beschweren. Ach, ich weiß nicht. Ansonsten war ja alles prima, der Strand und auch das Essen. Ich würde mich trotzdem beschweren.',
      sentenceTranslations: {
        'Hallo Lukas.': { literal: 'Привет Лукас', literary: 'Привет, Лукас.' },
        'Na, wie war die Reise?': { literal: 'Ну, как была поездка?', literary: 'Ну как поездка?' },
        'Na ja, nicht so toll.': { literal: 'Ну да, не так здорово', literary: 'Не очень.' },
        'Im Prospekt stand, dass unser Hotel ein Fünf-Sterne-Hotel sei.': { literal: 'В проспекте стояло, что наш отель пятизвёздочный отель есть', literary: 'В проспекте было написано, что наш отель пятизвёздочный.' },
        'Aber in Wirklichkeit war es ein kleines Hotel ohne Swimmingpool und weit weg vom Meer.': { literal: 'Но в действительности был это маленький отель без бассейна и далеко прочь от моря', literary: 'Но на самом деле это был маленький отель без бассейна и далеко от моря.' },
        'Da kannst du dich doch beschweren.': { literal: 'Тут можешь ты себя же пожаловать', literary: 'Ты же можешь пожаловаться.' },
        'Ach, ich weiß nicht.': { literal: 'Ах, я знаю не', literary: 'Не знаю.' },
        'Ansonsten war ja alles prima, der Strand und auch das Essen.': { literal: 'В остальном было ведь всё отлично, пляж и также еда', literary: 'А так всё было отлично: пляж и еда.' },
        'Ich würde mich trotzdem beschweren.': { literal: 'Я бы себя всё равно жаловал', literary: 'Я бы всё равно пожаловался.' },
      },
      vocabulary: [
        { de: 'die Reise', plural: 'die Reisen', ru: 'поездка, путешествие', gender: 'feminin', collocation: 'wie war die Reise', example: 'Na, wie war die Reise?' },
        { de: 'der Prospekt', plural: 'die Prospekte', ru: 'проспект, брошюра', gender: 'maskulin', collocation: 'im Prospekt stand', example: 'Im Prospekt stand, dass unser Hotel ein Fünf-Sterne-Hotel sei.' },
        { de: 'das Hotel', plural: 'die Hotels', ru: 'отель', gender: 'neutrum', collocation: 'ein kleines Hotel', example: 'Aber in Wirklichkeit war es ein kleines Hotel ohne Swimmingpool und weit weg vom Meer.' },
        { de: 'der Swimmingpool', plural: 'die Swimmingpools', ru: 'бассейн', gender: 'maskulin', collocation: 'ohne Swimmingpool', example: 'Aber in Wirklichkeit war es ein kleines Hotel ohne Swimmingpool und weit weg vom Meer.' },
        { de: 'das Meer', plural: 'die Meere', ru: 'море', gender: 'neutrum', collocation: 'weit weg vom Meer', example: 'Aber in Wirklichkeit war es ein kleines Hotel ohne Swimmingpool und weit weg vom Meer.' },
        { de: 'der Strand', plural: 'die Strände', ru: 'пляж', gender: 'maskulin', collocation: 'der Strand war prima', example: 'Ansonsten war ja alles prima, der Strand und auch das Essen.' },
        { de: 'sich beschweren', ru: 'жаловаться', type: 'verb', forms: 'beschwert sich, beschwerte sich, hat sich beschwert', example: 'Da kannst du dich doch beschweren.' },
        { de: 'ansonsten', ru: 'в остальном', type: 'adv', example: 'Ansonsten war ja alles prima, der Strand und auch das Essen.' },
        { de: 'trotzdem', ru: 'всё равно, тем не менее', type: 'adv', example: 'Ich würde mich trotzdem beschweren.' },
      ],
      practiceSentences: [
        { de: 'Wie war deine Reise?', ru: 'Как прошла твоя поездка?', note: 'V2, Präteritum' },
        { de: 'Das Hotel war klein.', ru: 'Отель был маленький.', note: 'V2, Präteritum' },
        { de: 'Du kannst dich beschweren.', ru: 'Ты можешь пожаловаться.', note: 'модальный + возвратный' },
        { de: 'Ich würde das machen.', ru: 'Я бы это сделал.', note: 'Konjunktiv II: würde + инфинитив' },
        { de: 'Alles war prima.', ru: 'Всё было отлично.', note: 'V2, Präteritum' },
      ],
      question: {
        de: 'Was war das Problem mit dem Hotel?',
        ru: 'В чём была проблема с отелем?',
        options: [
          { de: 'Es war zu teuer', ru: 'Он был слишком дорогой' },
          { de: 'Es war kein Fünf-Sterne-Hotel, sondern klein und ohne Pool', ru: 'Это был не пятизвёздочный отель, а маленький и без бассейна' },
          { de: 'Das Essen war schlecht', ru: 'Еда была плохой' },
        ],
        correct: 1,
        explanation: 'Лукас объясняет: "in Wirklichkeit war es ein kleines Hotel ohne Swimmingpool und weit weg vom Meer."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Kinokarten',
      type: 'покупка билетов',
      text: 'Haben Sie noch Karten für den Film "Die Rückkehr"? Ja, für 20 Uhr 30, 21 Uhr 30 und 0 Uhr 15. OK, dann hätte ich gern drei Karten für 21 Uhr 30. Da habe ich nur noch in der dritten Reihe freie Plätze. Für 20 Uhr 30 gibt es auch hinten freie Plätze. Nein, lieber für halb zehn. Gerne.',
      sentenceTranslations: {
        'Haben Sie noch Karten für den Film "Die Rückkehr"?': { literal: 'Имеете вы ещё билеты для фильма "Возвращение"?', literary: 'У вас есть ещё билеты на фильм "Возвращение"?' },
        'Ja, für 20 Uhr 30, 21 Uhr 30 und 0 Uhr 15.': { literal: 'Да, на 20 часов 30, 21 час 30 и 0 часов 15', literary: 'Да, на 20:30, 21:30 и 00:15.' },
        'OK, dann hätte ich gern drei Karten für 21 Uhr 30.': { literal: 'ОК, тогда имел бы я охотно три билета на 21 час 30', literary: 'Тогда я бы хотел три билета на 21:30.' },
        'Da habe ich nur noch in der dritten Reihe freie Plätze.': { literal: 'Тут имею я только ещё в третьем ряду свободные места', literary: 'На это время у меня есть только места в третьем ряду.' },
        'Für 20 Uhr 30 gibt es auch hinten freie Plätze.': { literal: 'На 20 часов 30 имеется также сзади свободные места', literary: 'На 20:30 есть также места сзади.' },
        'Nein, lieber für halb zehn.': { literal: 'Нет, лучше на половину десятого', literary: 'Нет, лучше на половину десятого.' },
        'Gerne.': { literal: 'Охотно', literary: 'С удовольствием.' },
      },
      vocabulary: [
        { de: 'die Karte', plural: 'die Karten', ru: 'билет', gender: 'feminin', collocation: 'Karten für den Film', example: 'Haben Sie noch Karten für den Film "Die Rückkehr"?' },
        { de: 'der Film', plural: 'die Filme', ru: 'фильм', gender: 'maskulin', collocation: 'für den Film', example: 'Haben Sie noch Karten für den Film "Die Rückkehr"?' },
        { de: 'die Rückkehr', ru: 'возвращение', gender: 'feminin', collocation: '"Die Rückkehr"', example: 'Haben Sie noch Karten für den Film "Die Rückkehr"?' },
        { de: 'die Reihe', plural: 'die Reihen', ru: 'ряд', gender: 'feminin', collocation: 'in der dritten Reihe', example: 'Da habe ich nur noch in der dritten Reihe freie Plätze.' },
        { de: 'frei', ru: 'свободный', type: 'adj', example: 'Da habe ich nur noch in der dritten Reihe freie Plätze.' },
        { de: 'hinten', ru: 'сзади', type: 'adv', example: 'Für 20 Uhr 30 gibt es auch hinten freie Plätze.' },
      ],
      practiceSentences: [
        { de: 'Haben Sie Karten?', ru: 'У вас есть билеты?', note: 'V1 в вопросе' },
        { de: 'Ich hätte gern zwei Tickets.', ru: 'Я бы хотел два билета.', note: 'Konjunktiv II для вежливости' },
        { de: 'Es gibt freie Plätze.', ru: 'Есть свободные места.', note: 'безличное es gibt' },
        { de: 'Der Film beginnt um acht.', ru: 'Фильм начинается в восемь.', note: 'V2' },
        { de: 'Lieber morgen.', ru: 'Лучше завтра.', note: 'эллипсис' },
      ],
      question: {
        de: 'Für welche Uhrzeit kauft der Kunde die Kinokarten?',
        ru: 'На какое время покупатель берёт билеты?',
        options: [
          { de: '20:30', ru: '20:30' },
          { de: '21:30', ru: '21:30' },
          { de: '00:15', ru: '00:15' },
        ],
        correct: 1,
        explanation: 'Покупатель сначала просит на 21:30, потом говорит "lieber für halb zehn" (= 21:30).'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Emily Interview',
      type: 'интервью',
      text: 'Emily, wann haben Sie beschlossen, ein Café aufzumachen? Schon als Studentin habe ich davon geträumt. Aber eröffnet habe ich das Café erst vor einem Jahr. Was haben Sie studiert? Ich wollte zuerst Journalistin werden. Dann habe ich aber Geschichte studiert. Danach habe ich bei einer Zeitung gearbeitet. Dort haben mich immer die Seiten mit den Rezepten interessiert. Und da habe ich den Redakteur gefragt, ob ich vielleicht auch mal ein Rezept vorstellen könnte. Und hat er es erlaubt? Natürlich nicht. Wir hatten ja unseren Chefkoch in der Redaktion. Aber ich habe immer gern in der Mittagspause meine Kollegen mit Kuchen, Torten und so weiter verwöhnt. Das kam gut an. Und wie ging es dann weiter? Ja, irgendwann hatte ich keine Lust mehr, bei der Zeitung zu arbeiten, und habe dort gekündigt. Sie haben aber ein besonderes Café eröffnet, nicht wahr? Ja, meine Küche ist offen, und so kann ich mit den Gästen kommunizieren. Und Sie bieten in Ihrem Café auch Kochkurse an? Genau, und es gibt auch noch meinen Food-Blog. Auch da kann man kochen lernen und sich austauschen. Und die Familie, die helfen alle mit? Mein Mann ist zwar Automechaniker, aber er kann auch gut kochen und hilft mit. Seine Spezialität sind vietnamesische Frühlingsrollen. Bei uns gibt es eher Vorspeisen oder Snacks. Vielen Dank, Emily. Auf unserer Website finden Sie, liebe Hörerinnen und Hörer, die genaue Adresse von Emilys Café. Und nun weiter mit Musik.',
      sentenceTranslations: {
        'Emily, wann haben Sie beschlossen, ein Café aufzumachen?': { literal: 'Эмили, когда имеете вы решённым, кафе открыть?', literary: 'Эмили, когда вы решили открыть кафе?' },
        'Schon als Studentin habe ich davon geträumt.': { literal: 'Уже как студентка имею я об-этом мечтавшей', literary: 'Я мечтала об этом ещё студенткой.' },
        'Aber eröffnet habe ich das Café erst vor einem Jahr.': { literal: 'Но открытым имею я кафе только год назад', literary: 'Но открыла кафе только год назад.' },
        'Was haben Sie studiert?': { literal: 'Что имеете вы изученным?', literary: 'Что вы изучали?' },
        'Ich wollte zuerst Journalistin werden.': { literal: 'Я хотела сначала журналисткой стать', literary: 'Сначала я хотела стать журналисткой.' },
        'Dann habe ich aber Geschichte studiert.': { literal: 'Потом имею я однако историю изученной', literary: 'Но потом изучала историю.' },
        'Danach habe ich bei einer Zeitung gearbeitet.': { literal: 'После-этого имею я в газете работавшей', literary: 'После этого работала в газете.' },
        'Dort haben mich immer die Seiten mit den Rezepten interessiert.': { literal: 'Там имеют меня всегда страницы с рецептами заинтересованной', literary: 'Там меня всегда интересовали страницы с рецептами.' },
        'Und da habe ich den Redakteur gefragt, ob ich vielleicht auch mal ein Rezept vorstellen könnte.': { literal: 'И тут имею я редактора спрошенным, могла ли я возможно тоже раз рецепт представить', literary: 'И я спросила редактора, могу ли я тоже представить рецепт.' },
        'Und hat er es erlaubt?': { literal: 'И имеет он это разрешённым?', literary: 'И он разрешил?' },
        'Natürlich nicht.': { literal: 'Конечно нет', literary: 'Конечно, нет.' },
        'Wir hatten ja unseren Chefkoch in der Redaktion.': { literal: 'Мы имели ведь нашего шеф-повара в редакции', literary: 'У нас же был шеф-повар в редакции.' },
        'Aber ich habe immer gern in der Mittagspause meine Kollegen mit Kuchen, Torten und so weiter verwöhnt.': { literal: 'Но я имею всегда охотно в обеденный-перерыв моих коллег пирогами, тортами и так далее избалованными', literary: 'Но я всегда с удовольствием баловала коллег в обед пирогами и тортами.' },
        'Das kam gut an.': { literal: 'Это пришло хорошо', literary: 'Это имело успех.' },
        'Und wie ging es dann weiter?': { literal: 'И как шло это дальше?', literary: 'И что было дальше?' },
        'Ja, irgendwann hatte ich keine Lust mehr, bei der Zeitung zu arbeiten, und habe dort gekündigt.': { literal: 'Да, когда-то имела я никакого желания больше, в газете работать, и имею там уволенной', literary: 'В какой-то момент мне надоело работать в газете, и я уволилась.' },
        'Sie haben aber ein besonderes Café eröffnet, nicht wahr?': { literal: 'Вы имеете но особенное кафе открытым, не правда?', literary: 'Но вы открыли особенное кафе, не так ли?' },
        'Ja, meine Küche ist offen, und so kann ich mit den Gästen kommunizieren.': { literal: 'Да, моя кухня есть открытая, и так могу я с гостями общаться', literary: 'Да, у меня открытая кухня, и так я могу общаться с гостями.' },
        'Und Sie bieten in Ihrem Café auch Kochkurse an?': { literal: 'И вы предлагаете в вашем кафе также кулинарные-курсы?', literary: 'И вы проводите в кафе кулинарные курсы?' },
        'Genau, und es gibt auch noch meinen Food-Blog.': { literal: 'Точно, и имеется также ещё мой фуд-блог', literary: 'Точно, и есть ещё мой фуд-блог.' },
        'Auch da kann man kochen lernen und sich austauschen.': { literal: 'Также там может человек готовить учиться и себя обмениваться', literary: 'Там тоже можно учиться готовить и обмениваться опытом.' },
        'Und die Familie, die helfen alle mit?': { literal: 'И семья, они помогают все?', literary: 'А семья вся помогает?' },
        'Mein Mann ist zwar Automechaniker, aber er kann auch gut kochen und hilft mit.': { literal: 'Мой муж есть хотя автомеханик, но он может также хорошо готовить и помогает', literary: 'Мой муж хоть и автомеханик, но тоже хорошо готовит и помогает.' },
        'Seine Spezialität sind vietnamesische Frühlingsrollen.': { literal: 'Его специальность есть вьетнамские спринг-роллы', literary: 'Его фирменное блюдо -- вьетнамские спринг-роллы.' },
        'Bei uns gibt es eher Vorspeisen oder Snacks.': { literal: 'У нас имеется скорее закуски или снеки', literary: 'У нас скорее закуски и снеки.' },
        'Vielen Dank, Emily.': { literal: 'Большое спасибо, Эмили', literary: 'Спасибо, Эмили.' },
        'Auf unserer Website finden Sie, liebe Hörerinnen und Hörer, die genaue Adresse von Emilys Café.': { literal: 'На нашем сайте находите вы, дорогие слушательницы и слушатели, точный адрес кафе Эмили', literary: 'На нашем сайте, дорогие слушатели, вы найдёте точный адрес кафе Эмили.' },
        'Und nun weiter mit Musik.': { literal: 'И теперь дальше с музыкой', literary: 'А теперь продолжаем с музыкой.' },
      },
      vocabulary: [
        { de: 'das Café', plural: 'die Cafés', ru: 'кафе', gender: 'neutrum', collocation: 'ein Café eröffnen', example: 'Emily, wann haben Sie beschlossen, ein Café aufzumachen?' },
        { de: 'die Zeitung', plural: 'die Zeitungen', ru: 'газета', gender: 'feminin', collocation: 'bei einer Zeitung arbeiten', example: 'Danach habe ich bei einer Zeitung gearbeitet.' },
        { de: 'das Rezept', plural: 'die Rezepte', ru: 'рецепт', gender: 'neutrum', collocation: 'ein Rezept vorstellen', example: 'Und da habe ich den Redakteur gefragt, ob ich vielleicht auch mal ein Rezept vorstellen könnte.' },
        { de: 'der Redakteur', plural: 'die Redakteure', ru: 'редактор', gender: 'maskulin', collocation: 'den Redakteur fragen', example: 'Und da habe ich den Redakteur gefragt, ob ich vielleicht auch mal ein Rezept vorstellen könnte.' },
        { de: 'der Chefkoch', plural: 'die Chefköche', ru: 'шеф-повар', gender: 'maskulin', collocation: 'unseren Chefkoch haben', example: 'Wir hatten ja unseren Chefkoch in der Redaktion.' },
        { de: 'die Mittagspause', plural: 'die Mittagspausen', ru: 'обеденный перерыв', gender: 'feminin', collocation: 'in der Mittagspause', example: 'Aber ich habe immer gern in der Mittagspause meine Kollegen mit Kuchen, Torten und so weiter verwöhnt.' },
        { de: 'der Kuchen', plural: 'die Kuchen', ru: 'пирог', gender: 'maskulin', collocation: 'mit Kuchen verwöhnen', example: 'Aber ich habe immer gern in der Mittagspause meine Kollegen mit Kuchen, Torten und so weiter verwöhnt.' },
        { de: 'der Kochkurs', plural: 'die Kochkurse', ru: 'кулинарный курс', gender: 'maskulin', collocation: 'Kochkurse anbieten', example: 'Und Sie bieten in Ihrem Café auch Kochkurse an?' },
        { de: 'der Gast', plural: 'die Gäste', ru: 'гость', gender: 'maskulin', collocation: 'mit den Gästen kommunizieren', example: 'Ja, meine Küche ist offen, und so kann ich mit den Gästen kommunizieren.' },
        { de: 'die Spezialität', plural: 'die Spezialitäten', ru: 'фирменное блюдо', gender: 'feminin', collocation: 'seine Spezialität', example: 'Seine Spezialität sind vietnamesische Frühlingsrollen.' },
        { de: 'die Vorspeise', plural: 'die Vorspeisen', ru: 'закуска', gender: 'feminin', collocation: 'Vorspeisen oder Snacks', example: 'Bei uns gibt es eher Vorspeisen oder Snacks.' },
        { de: 'beschließen', ru: 'решать', type: 'verb', forms: 'beschließt, beschloss, hat beschlossen', example: 'Emily, wann haben Sie beschlossen, ein Café aufzumachen?' },
        { de: 'eröffnen', ru: 'открывать (официально)', type: 'verb', forms: 'eröffnet, eröffnete, hat eröffnet', example: 'Aber eröffnet habe ich das Café erst vor einem Jahr.' },
        { de: 'verwöhnen', ru: 'баловать', type: 'verb', forms: 'verwöhnt, verwöhnte, hat verwöhnt', example: 'Aber ich habe immer gern in der Mittagspause meine Kollegen mit Kuchen, Torten und so weiter verwöhnt.' },
        { de: 'kündigen', ru: 'увольняться', type: 'verb', forms: 'kündigt, kündigte, hat gekündigt', example: 'Ja, irgendwann hatte ich keine Lust mehr, bei der Zeitung zu arbeiten, und habe dort gekündigt.' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'bietet an, bot an, hat angeboten', example: 'Und Sie bieten in Ihrem Café auch Kochkurse an?' },
        { de: 'sich austauschen', ru: 'обмениваться опытом', type: 'verb', forms: 'tauscht sich aus, tauschte sich aus, hat sich ausgetauscht', example: 'Auch da kann man kochen lernen und sich austauschen.' },
        { de: 'besonder', ru: 'особенный', type: 'adj', example: 'Sie haben aber ein besonderes Café eröffnet, nicht wahr?' },
        { de: 'offen', ru: 'открытый', type: 'adj', example: 'Ja, meine Küche ist offen, und so kann ich mit den Gästen kommunizieren.' },
      ],
      practiceSentences: [
        { de: 'Ich habe beschlossen zu studieren.', ru: 'Я решила учиться.', note: 'Perfekt + zu + инфинитив' },
        { de: 'Sie träumt von einer Reise.', ru: 'Она мечтает о путешествии.', note: 'V2' },
        { de: 'Das kam gut an.', ru: 'Это имело успех.', note: 'отделяемая приставка в Präteritum' },
        { de: 'Wir bieten Kurse an.', ru: 'Мы предлагаем курсы.', note: 'отделяемая приставка' },
        { de: 'Er kann gut kochen.', ru: 'Он хорошо готовит.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was hat Emily studiert?',
        ru: 'Что изучала Эмили?',
        options: [
          { de: 'Journalistik', ru: 'Журналистику' },
          { de: 'Geschichte', ru: 'Историю' },
          { de: 'Kochen', ru: 'Кулинарию' },
        ],
        correct: 1,
        explanation: 'Эмили говорит: "Ich wollte zuerst Journalistin werden. Dann habe ich aber Geschichte studiert."'
      }
    },
  ],

  /* ─── Геттеры — агрегируют данные из texts[] ─── */
  get vocabulary() {
    var all = [];
    var seen = {};
    this.texts.forEach(function(t) {
      t.vocabulary.forEach(function(v) {
        if (!seen[v.de]) {
          seen[v.de] = true;
          all.push({
            de: v.de,
            ru: v.ru,
            gender: v.gender || null,
            example: v.example || v.collocation || '',
          });
        }
      });
    });
    return all;
  },

  get sentenceTranslations() {
    var map = {};
    this.texts.forEach(function(t) {
      for (var de in t.sentenceTranslations) {
        map[de] = t.sentenceTranslations[de].literary;
      }
    });
    return map;
  },

  /* ─── Вопросы на понимание (comprehensionQuiz) ─── */
  get comprehensionQuiz() {
    return this.texts.map(function(t) {
      return {
        question: t.question.de,
        questionRu: t.question.ru,
        options: t.question.options.map(function(o) { return o.de; }),
        correct: t.question.options[t.question.correct].de,
        explanation: t.question.explanation,
        textName: t.name,
      };
    });
  },

  /* ─── Грамматические темы ─── */
  grammarFocus: [
    'Perfekt (haben/sein + Partizip II): "Ich habe Theaterkarten gekauft", "Sie hat ihr Bein gebrochen"',
    'Модальные глаголы (müssen, können, wollen, möchten): "Ich muss arbeiten", "Wie möchten Sie Ihre Haare?"',
    'Отделяемые приставки (einladen, anfangen, mitkommen, vorschlagen, anbieten): "Ich lade dich ein", "Die fangen heute an"',
    'Императив Sie-Form: "Fahren Sie Ihren PKW", "Seien Sie pünktlich"',
    'Придаточные с dass/ob/weil: "dass Dennis Medizin studiert", "ob ich ein Rezept vorstellen könnte", "weil die Pizza angebrannt war"',
    'Konjunktiv II (hätte, würde, sei, könnte): "hätte ich gern drei Karten", "Ich würde mich beschweren"',
    'Futur I (werden + Infinitiv): "Annika wird zu Hause bleiben müssen", "Viele werden erst ab 67 Rente bekommen"',
    'zwar...aber (уступительная конструкция): "Simon fliegt zwar zu seinem Vater, aber der arbeitet in Warschau"',
  ],

  /* ─── AI-промты ─── */
  prompts: {
    exercises: {
      instruction: 'Интерактивные упражнения работают прямо на сайте — выберите любое из списка ниже.',
      promptText: null,
    },
    original: {
      instruction: 'Оригинальная транскрипция аудио — все 12 мини-текстов по частям.',
      promptText: null,
    },
    translation: {
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для таба "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Nele — театральные билеты).',
    },
  },
};

LESSONS.push(LESSON_05);
