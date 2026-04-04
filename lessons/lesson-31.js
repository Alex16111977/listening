/* ═══════════════════════════════════════════════════════════
   Lesson 31 — Goethe Zertifikat A2 Hören
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_31 = {
  id: 'lesson-31',
  number: 31,
  title: 'Goethe A2 Hören — Arztpraxis, Schloss, Party, Pizzeria',
  subtitle: 'Dr. Noak, Schlossführung, Gartenparty, Pizzeria-Angebote, Elias-Gewinn, Sommerfest und mehr',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-31',
  videoUrl: 'https://www.youtube.com/watch?v=JqwheKGKZs8',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Dr. Noak',
      type: 'телефонное сообщение',
      text: 'Die Praxis von Dr. Noak bleibt bis zum 12. Mai wegen Krankheit geschlossen. Alle Termine werden auf die nächste Woche verschoben. Sie können aber auch bei unserer Kollegin Frau Dr. Elke Riedel einen Termin vereinbaren. Sie erreichen Dr. Riedel in ihrer Praxis Ludwigstraße 78 Neuland und unter der Nummer 0208 69 69 99 18.',
      sentenceTranslations: {
        'Die Praxis von Dr. Noak bleibt bis zum 12. Mai wegen Krankheit geschlossen.': { literal: 'Практика доктора Ноак остаётся до 12 мая из-за болезни закрытой.', literary: 'Практика доктора Ноак закрыта по болезни до 12 мая.' },
        'Alle Termine werden auf die nächste Woche verschoben.': { literal: 'Все приёмы становятся на следующую неделю перенесенными.', literary: 'Все приёмы переносятся на следующую неделю.' },
        'Sie können aber auch bei unserer Kollegin Frau Dr. Elke Riedel einen Termin vereinbaren.': { literal: 'Вы можете но также у нашей коллеги фрау др. Эльке Ридель приём назначить.', literary: 'Но вы также можете записаться на приём к нашей коллеге фрау доктор Эльке Ридель.' },
        'Sie erreichen Dr. Riedel in ihrer Praxis Ludwigstraße 78 Neuland und unter der Nummer 0208 69 69 99 18.': { literal: 'Вы достигаете др. Ридель в её практике Людвигштрассе 78 Нойланд и под номером 0208 69 69 99 18.', literary: 'Вы можете найти доктора Ридель в её практике на Людвигштрассе 78, Нойланд, и по номеру 0208 69 69 99 18.' },
      },
      vocabulary: [
        { de: 'die Praxis', plural: 'die Praxen', ru: 'практика, кабинет врача', gender: 'feminin', collocation: 'Praxis geschlossen', example: 'Die Praxis von Dr. Noak bleibt bis zum 12. Mai wegen Krankheit geschlossen.' },
        { de: 'die Krankheit', plural: 'die Krankheiten', ru: 'болезнь', gender: 'feminin', collocation: 'wegen Krankheit', example: 'Die Praxis von Dr. Noak bleibt bis zum 12. Mai wegen Krankheit geschlossen.' },
        { de: 'der Termin', plural: 'die Termine', ru: 'приём, встреча', gender: 'maskulin', collocation: 'Termin vereinbaren', example: 'Sie können aber auch bei unserer Kollegin Frau Dr. Elke Riedel einen Termin vereinbaren.' },
        { de: 'die Woche', plural: 'die Wochen', ru: 'неделя', gender: 'feminin', collocation: 'nächste Woche', example: 'Alle Termine werden auf die nächste Woche verschoben.' },
        { de: 'die Kollegin', plural: 'die Kolleginnen', ru: 'коллега (ж.)', gender: 'feminin', collocation: 'bei der Kollegin', example: 'Sie können aber auch bei unserer Kollegin Frau Dr. Elke Riedel einen Termin vereinbaren.' },
        { de: 'die Nummer', plural: 'die Nummern', ru: 'номер', gender: 'feminin', collocation: 'unter der Nummer', example: 'Sie erreichen Dr. Riedel in ihrer Praxis Ludwigstraße 78 Neuland und unter der Nummer 0208 69 69 99 18.' },
        { de: 'verschieben', ru: 'переносить', type: 'verb', forms: 'verschiebt, verschob, hat verschoben', example: 'Alle Termine werden auf die nächste Woche verschoben.' },
        { de: 'vereinbaren', ru: 'договариваться, назначать', type: 'verb', forms: 'vereinbart, vereinbarte, hat vereinbart', example: 'Sie können aber auch bei unserer Kollegin Frau Dr. Elke Riedel einen Termin vereinbaren.' },
        { de: 'erreichen', ru: 'достичь, связаться', type: 'verb', forms: 'erreicht, erreichte, hat erreicht', example: 'Sie erreichen Dr. Riedel in ihrer Praxis Ludwigstraße 78 Neuland und unter der Nummer 0208 69 69 99 18.' },
        { de: 'geschlossen', ru: 'закрыто', type: 'adj', example: 'Die Praxis von Dr. Noak bleibt bis zum 12. Mai wegen Krankheit geschlossen.' },
      ],
      practiceSentences: [
        { de: 'Die Apotheke bleibt heute geschlossen.', ru: 'Аптека сегодня остаётся закрытой.', note: 'V2' },
        { de: 'Ich kann morgen einen Termin machen.', ru: 'Я могу завтра назначить встречу.', note: 'модальный + инфинитив в конце' },
        { de: 'Der Termin wird auf Montag verschoben.', ru: 'Встреча переносится на понедельник.', note: 'Passiv' },
        { de: 'Wir erreichen sie unter dieser Nummer.', ru: 'Мы можем связаться с ней по этому номеру.', note: 'V2' },
        { de: 'Sie arbeitet bei einem Arzt.', ru: 'Она работает у врача.', note: 'V2' },
      ],
      question: {
        de: 'Die Praxis von Dr. Noak ist geschlossen. Was können die Patienten machen?',
        ru: 'Практика доктора Ноак закрыта. Что могут сделать пациенты?',
        options: [
          { de: 'Sie müssen bis zum 12. Mai warten', ru: 'Они должны ждать до 12 мая' },
          { de: 'Sie können zu Dr. Riedel gehen', ru: 'Они могут пойти к доктору Ридель' },
          { de: 'Sie müssen ins Krankenhaus fahren', ru: 'Они должны ехать в больницу' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "Sie können aber auch bei unserer Kollegin Frau Dr. Elke Riedel einen Termin vereinbaren."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Schlossführung',
      type: 'объявление',
      text: 'Liebe Besucherinnen und Besucher, der Rundgang durch das Schloss beginnt in 20 Minuten. Die Führung ist auf Deutsch und Englisch. Der Rundgang beginnt im Erdgeschoss am Eingang, geht durch alle Räume in allen Stockwerken und endet im dritten Stock. Dort können Sie in der Cafeteria etwas trinken und unseren Souvenirshop besuchen. Machen Sie bitte während der Führung Handys und Smartphones aus oder stellen Sie sie auf lautlos.',
      sentenceTranslations: {
        'Liebe Besucherinnen und Besucher, der Rundgang durch das Schloss beginnt in 20 Minuten.': { literal: 'Дорогие посетительницы и посетители, обход через замок начинается через 20 минут.', literary: 'Уважаемые посетители, экскурсия по замку начнётся через 20 минут.' },
        'Die Führung ist auf Deutsch und Englisch.': { literal: 'Экскурсия есть на немецком и английском.', literary: 'Экскурсия проводится на немецком и английском языках.' },
        'Der Rundgang beginnt im Erdgeschoss am Eingang, geht durch alle Räume in allen Stockwerken und endet im dritten Stock.': { literal: 'Обход начинается на первом этаже у входа, идёт через все комнаты на всех этажах и заканчивается на третьем этаже.', literary: 'Экскурсия начинается на первом этаже у входа, проходит по всем залам на всех этажах и заканчивается на третьем этаже.' },
        'Dort können Sie in der Cafeteria etwas trinken und unseren Souvenirshop besuchen.': { literal: 'Там можете Вы в кафетерии что-то попить и наш сувенирный магазин посетить.', literary: 'Там вы можете выпить что-нибудь в кафетерии и посетить наш сувенирный магазин.' },
        'Machen Sie bitte während der Führung Handys und Smartphones aus oder stellen Sie sie auf lautlos.': { literal: 'Сделайте Вы пожалуйста во время экскурсии мобильники и смартфоны выключенными или поставьте Вы их на беззвучный.', literary: 'Пожалуйста, выключите во время экскурсии мобильные телефоны и смартфоны или переведите их в беззвучный режим.' },
      },
      vocabulary: [
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'liebe Besucher', example: 'Liebe Besucherinnen und Besucher, der Rundgang durch das Schloss beginnt in 20 Minuten.' },
        { de: 'der Rundgang', plural: 'die Rundgänge', ru: 'экскурсия, обход', gender: 'maskulin', collocation: 'Rundgang beginnt', example: 'Liebe Besucherinnen und Besucher, der Rundgang durch das Schloss beginnt in 20 Minuten.' },
        { de: 'das Schloss', plural: 'die Schlösser', ru: 'замок', gender: 'neutrum', collocation: 'durch das Schloss', example: 'Liebe Besucherinnen und Besucher, der Rundgang durch das Schloss beginnt in 20 Minuten.' },
        { de: 'die Führung', plural: 'die Führungen', ru: 'экскурсия', gender: 'feminin', collocation: 'Führung auf Deutsch', example: 'Die Führung ist auf Deutsch und Englisch.' },
        { de: 'das Erdgeschoss', plural: 'die Erdgeschosse', ru: 'первый этаж', gender: 'neutrum', collocation: 'im Erdgeschoss', example: 'Der Rundgang beginnt im Erdgeschoss am Eingang, geht durch alle Räume in allen Stockwerken und endet im dritten Stock.' },
        { de: 'der Eingang', plural: 'die Eingänge', ru: 'вход', gender: 'maskulin', collocation: 'am Eingang', example: 'Der Rundgang beginnt im Erdgeschoss am Eingang, geht durch alle Räume in allen Stockwerken und endet im dritten Stock.' },
        { de: 'das Stockwerk', plural: 'die Stockwerke', ru: 'этаж', gender: 'neutrum', collocation: 'in allen Stockwerken', example: 'Der Rundgang beginnt im Erdgeschoss am Eingang, geht durch alle Räume in allen Stockwerken und endet im dritten Stock.' },
        { de: 'das Handy', plural: 'die Handys', ru: 'мобильный телефон', gender: 'neutrum', collocation: 'Handys ausmachen', example: 'Machen Sie bitte während der Führung Handys und Smartphones aus oder stellen Sie sie auf lautlos.' },
        { de: 'beginnen', ru: 'начинаться', type: 'verb', forms: 'beginnt, begann, hat begonnen', example: 'Liebe Besucherinnen und Besucher, der Rundgang durch das Schloss beginnt in 20 Minuten.' },
        { de: 'ausmachen', ru: 'выключать', type: 'verb', forms: 'macht aus, machte aus, hat ausgemacht', example: 'Machen Sie bitte während der Führung Handys und Smartphones aus oder stellen Sie sie auf lautlos.' },
        { de: 'lautlos', ru: 'беззвучный', type: 'adj', example: 'Machen Sie bitte während der Führung Handys und Smartphones aus oder stellen Sie sie auf lautlos.' },
      ],
      practiceSentences: [
        { de: 'Die Tour beginnt in 10 Minuten.', ru: 'Тур начинается через 10 минут.', note: 'V2' },
        { de: 'Wir gehen durch den Park.', ru: 'Мы идём через парк.', note: 'V2' },
        { de: 'Der Film endet um 20 Uhr.', ru: 'Фильм заканчивается в 20 часов.', note: 'V2' },
        { de: 'Bitte stellen Sie das Handy aus.', ru: 'Пожалуйста, выключите телефон.', note: 'отделяемая приставка aus' },
        { de: 'Sie können im Café etwas trinken.', ru: 'Вы можете выпить что-нибудь в кафе.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was sollen die Besucher mit ihren Handys machen?',
        ru: 'Что должны делать посетители со своими телефонами?',
        options: [
          { de: 'Sie sollen sie in der Cafeteria lassen', ru: 'Они должны оставить их в кафетерии' },
          { de: 'Sie sollen sie ausmachen oder auf lautlos stellen', ru: 'Они должны выключить их или поставить на беззвучный режим' },
          { de: 'Sie sollen sie am Eingang abgeben', ru: 'Они должны сдать их на входе' },
        ],
        correct: 1,
        explanation: 'В тексте прямо сказано: "Machen Sie bitte während der Führung Handys und Smartphones aus oder stellen Sie sie auf lautlos."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Mara/Gartenparty',
      type: 'голосовое сообщение',
      text: 'Hallo Mara, es war vorgestern so schön mit euch allen und deshalb wollte ich gleich eine kleine Gartenparty organisieren. Am Samstag wird es sehr warm, da könnten wir alle zusammen bei mir im Garten grillen. Kannst du gegen fünf? Ich werde den anderen per E-Mail Bescheid sagen. Sag mal, habe ich vielleicht vorgestern Abend bei dir meine Jeansjacke vergessen?',
      sentenceTranslations: {
        'Hallo Mara, es war vorgestern so schön mit euch allen und deshalb wollte ich gleich eine kleine Gartenparty organisieren.': { literal: 'Привет Мара, это было позавчера так красиво с вами всеми и поэтому хотела я сразу маленькую садовую вечеринку организовать.', literary: 'Привет, Мара! Позавчера с вами всеми было так здорово, и поэтому я хочу сразу организовать небольшую вечеринку в саду.' },
        'Am Samstag wird es sehr warm, da könnten wir alle zusammen bei mir im Garten grillen.': { literal: 'В субботу становится это очень тепло, тогда могли бы мы все вместе у меня в саду жарить гриль.', literary: 'В субботу будет очень тепло, и мы могли бы все вместе пожарить барбекю у меня в саду.' },
        'Kannst du gegen fünf?': { literal: 'Можешь ты около пяти?', literary: 'Ты сможешь около пяти?' },
        'Ich werde den anderen per E-Mail Bescheid sagen.': { literal: 'Я буду другим по электронной-почте известие говорить.', literary: 'Я сообщу остальным по электронной почте.' },
        'Sag mal, habe ich vielleicht vorgestern Abend bei dir meine Jeansjacke vergessen?': { literal: 'Скажи раз, имею я возможно позавчера вечером у тебя мою джинсовую-куртку забытой?', literary: 'Скажи, я, может быть, позавчера вечером забыла у тебя свою джинсовую куртку?' },
      },
      vocabulary: [
        { de: 'die Gartenparty', plural: 'die Gartenpartys', ru: 'вечеринка в саду', gender: 'feminin', collocation: 'Gartenparty organisieren', example: 'Hallo Mara, es war vorgestern so schön mit euch allen und deshalb wollte ich gleich eine kleine Gartenparty organisieren.' },
        { de: 'der Garten', plural: 'die Gärten', ru: 'сад', gender: 'maskulin', collocation: 'im Garten grillen', example: 'Am Samstag wird es sehr warm, da könnten wir alle zusammen bei mir im Garten grillen.' },
        { de: 'die Jeansjacke', plural: 'die Jeansjacken', ru: 'джинсовая куртка', gender: 'feminin', collocation: 'Jeansjacke vergessen', example: 'Sag mal, habe ich vielleicht vorgestern Abend bei dir meine Jeansjacke vergessen?' },
        { de: 'organisieren', ru: 'организовать', type: 'verb', forms: 'organisiert, organisierte, hat organisiert', example: 'Hallo Mara, es war vorgestern so schön mit euch allen und deshalb wollte ich gleich eine kleine Gartenparty organisieren.' },
        { de: 'grillen', ru: 'жарить на гриле', type: 'verb', forms: 'grillt, grillte, hat gegrillt', example: 'Am Samstag wird es sehr warm, da könnten wir alle zusammen bei mir im Garten grillen.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Sag mal, habe ich vielleicht vorgestern Abend bei dir meine Jeansjacke vergessen?' },
        { de: 'vorgestern', ru: 'позавчера', type: 'adv', example: 'Hallo Mara, es war vorgestern so schön mit euch allen und deshalb wollte ich gleich eine kleine Gartenparty organisieren.' },
      ],
      practiceSentences: [
        { de: 'Es war gestern sehr kalt.', ru: 'Вчера было очень холодно.', note: 'V2, Präteritum' },
        { de: 'Am Sonntag wird es regnen.', ru: 'В воскресенье будет дождь.', note: 'V2, werden + инфинитив' },
        { de: 'Wir könnten zusammen kochen.', ru: 'Мы могли бы вместе готовить.', note: 'Konjunktiv II' },
        { de: 'Ich komme gegen sieben.', ru: 'Я приду около семи.', note: 'V2' },
        { de: 'Hast du deine Tasche vergessen?', ru: 'Ты забыл свою сумку?', note: 'Perfekt' },
      ],
      question: {
        de: 'Was plant die Person für Samstag?',
        ru: 'Что планирует человек на субботу?',
        options: [
          { de: 'Eine Party im Restaurant', ru: 'Вечеринку в ресторане' },
          { de: 'Eine Gartenparty mit Grillen', ru: 'Вечеринку в саду с барбекю' },
          { de: 'Ein Treffen im Park', ru: 'Встречу в парке' },
        ],
        correct: 1,
        explanation: 'В сообщении говорится: "Am Samstag wird es sehr warm, da könnten wir alle zusammen bei mir im Garten grillen."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Pizzeria-Angebote',
      type: 'реклама',
      text: 'Liebe Kundinnen und Kunden, nutzen Sie unsere Topangebote des Monats: jede zweite Pizza für nur 4 €. Bestellen Sie über 25 € und bekommen Sie eine 1-Liter-Flasche Limonade kostenlos dazu. Holen Sie Ihre Pizza im Laden ab und zahlen Sie 3 € weniger. Bestellen Sie auch online über unsere Webseite und informieren Sie sich über weitere Angebote.',
      sentenceTranslations: {
        'Liebe Kundinnen und Kunden, nutzen Sie unsere Topangebote des Monats: jede zweite Pizza für nur 4 €.': { literal: 'Дорогие клиентки и клиенты, используйте наши топ-предложения месяца: каждая вторая пицца за только 4 евро.', literary: 'Уважаемые покупатели, воспользуйтесь нашими лучшими предложениями месяца: каждая вторая пицца всего за 4 евро.' },
        'Bestellen Sie über 25 € und bekommen Sie eine 1-Liter-Flasche Limonade kostenlos dazu.': { literal: 'Закажите свыше 25 евро и получите одну 1-литровую бутылку лимонада бесплатно к этому.', literary: 'При заказе от 25 евро получите литровую бутылку лимонада бесплатно.' },
        'Holen Sie Ihre Pizza im Laden ab und zahlen Sie 3 € weniger.': { literal: 'Заберите вашу пиццу в магазине и платите 3 евро меньше.', literary: 'При самовывозе пиццы из магазина скидка 3 евро.' },
        'Bestellen Sie auch online über unsere Webseite und informieren Sie sich über weitere Angebote.': { literal: 'Закажите также онлайн через нашу веб-страницу и информируйте Вы себя о дальнейших предложениях.', literary: 'Заказывайте также онлайн на нашем сайте и узнайте о других предложениях.' },
      },
      vocabulary: [
        { de: 'das Topangebot', plural: 'die Topangebote', ru: 'лучшее предложение', gender: 'neutrum', collocation: 'Topangebote des Monats', example: 'Liebe Kundinnen und Kunden, nutzen Sie unsere Topangebote des Monats: jede zweite Pizza für nur 4 €.' },
        { de: 'die Flasche', plural: 'die Flaschen', ru: 'бутылка', gender: 'feminin', collocation: '1-Liter-Flasche', example: 'Bestellen Sie über 25 € und bekommen Sie eine 1-Liter-Flasche Limonade kostenlos dazu.' },
        { de: 'die Limonade', plural: 'die Limonaden', ru: 'лимонад', gender: 'feminin', collocation: 'Flasche Limonade', example: 'Bestellen Sie über 25 € und bekommen Sie eine 1-Liter-Flasche Limonade kostenlos dazu.' },
        { de: 'der Laden', plural: 'die Läden', ru: 'магазин', gender: 'maskulin', collocation: 'im Laden abholen', example: 'Holen Sie Ihre Pizza im Laden ab und zahlen Sie 3 € weniger.' },
        { de: 'die Webseite', plural: 'die Webseiten', ru: 'веб-сайт', gender: 'feminin', collocation: 'über unsere Webseite', example: 'Bestellen Sie auch online über unsere Webseite und informieren Sie sich über weitere Angebote.' },
        { de: 'nutzen', ru: 'использовать', type: 'verb', forms: 'nutzt, nutzte, hat genutzt', example: 'Liebe Kundinnen und Kunden, nutzen Sie unsere Topangebote des Monats: jede zweite Pizza für nur 4 €.' },
        { de: 'bestellen', ru: 'заказывать', type: 'verb', forms: 'bestellt, bestellte, hat bestellt', example: 'Bestellen Sie über 25 € und bekommen Sie eine 1-Liter-Flasche Limonade kostenlos dazu.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Holen Sie Ihre Pizza im Laden ab und zahlen Sie 3 € weniger.' },
        { de: 'zahlen', ru: 'платить', type: 'verb', forms: 'zahlt, zahlte, hat gezahlt', example: 'Holen Sie Ihre Pizza im Laden ab und zahlen Sie 3 € weniger.' },
        { de: 'kostenlos', ru: 'бесплатно', type: 'adv', example: 'Bestellen Sie über 25 € und bekommen Sie eine 1-Liter-Flasche Limonade kostenlos dazu.' },
      ],
      practiceSentences: [
        { de: 'Kaufen Sie zwei Bücher!', ru: 'Купите две книги!', note: 'императив V1' },
        { de: 'Ich hole das Paket ab.', ru: 'Я забираю посылку.', note: 'отделяемая приставка ab' },
        { de: 'Die Pizza kostet nur 5 Euro.', ru: 'Пицца стоит всего 5 евро.', note: 'V2' },
        { de: 'Bestellen Sie online!', ru: 'Закажите онлайн!', note: 'императив V1' },
        { de: 'Wir bekommen einen Rabatt.', ru: 'Мы получаем скидку.', note: 'V2' },
      ],
      question: {
        de: 'Wann bekommt man eine kostenlose Limonade?',
        ru: 'Когда получают бесплатный лимонад?',
        options: [
          { de: 'Bei jeder zweiten Pizza', ru: 'При каждой второй пицце' },
          { de: 'Bei einer Bestellung über 25 €', ru: 'При заказе свыше 25 евро' },
          { de: 'Bei Abholung im Laden', ru: 'При самовывозе из магазина' },
        ],
        correct: 1,
        explanation: 'В рекламе сказано: "Bestellen Sie über 25 € und bekommen Sie eine 1-Liter-Flasche Limonade kostenlos dazu."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Elias/Gewinn',
      type: 'диалог',
      text: 'Elias, ich gratuliere! Du hast 500 € gewonnen. Was möchtest du mit dem Geld machen? Wow, nicht zu fassen! Ich könnte es sofort für coole Kleidung ausgeben oder für Computerspiele, davon habe ich nie genug. Aber ich spare es lieber für nächstes Jahr, denn ich möchte eine große Reise machen und brauche dafür Geld. Danke für den tollen Gewinn!',
      sentenceTranslations: {
        'Elias, ich gratuliere!': { literal: 'Элиас, я поздравляю!', literary: 'Элиас, поздравляю!' },
        'Du hast 500 € gewonnen.': { literal: 'Ты имеешь 500 евро выигранными.', literary: 'Ты выиграл 500 евро.' },
        'Was möchtest du mit dem Geld machen?': { literal: 'Что хотел бы ты с деньгами делать?', literary: 'Что ты хочешь сделать с деньгами?' },
        'Wow, nicht zu fassen!': { literal: 'Вау, не схватить!', literary: 'Вау, невероятно!' },
        'Ich könnte es sofort für coole Kleidung ausgeben oder für Computerspiele, davon habe ich nie genug.': { literal: 'Я мог бы это сразу на крутую одежду потратить или на компьютерные-игры, от этого имею я никогда достаточно.', literary: 'Я мог бы сразу потратить на крутую одежду или на компьютерные игры, мне их всегда мало.' },
        'Aber ich spare es lieber für nächstes Jahr, denn ich möchte eine große Reise machen und brauche dafür Geld.': { literal: 'Но я коплю это лучше на следующий год, ибо я хотел бы большое путешествие сделать и нуждаюсь для-этого деньги.', literary: 'Но лучше я накоплю на следующий год, ведь я хочу совершить большое путешествие и мне нужны деньги.' },
        'Danke für den tollen Gewinn!': { literal: 'Спасибо за отличный выигрыш!', literary: 'Спасибо за отличный выигрыш!' },
      },
      vocabulary: [
        { de: 'das Geld', plural: 'die Gelder', ru: 'деньги', gender: 'neutrum', collocation: 'mit dem Geld', example: 'Was möchtest du mit dem Geld machen?' },
        { de: 'die Kleidung', ru: 'одежда', gender: 'feminin', collocation: 'coole Kleidung', example: 'Ich könnte es sofort für coole Kleidung ausgeben oder für Computerspiele, davon habe ich nie genug.' },
        { de: 'die Reise', plural: 'die Reisen', ru: 'путешествие', gender: 'feminin', collocation: 'große Reise machen', example: 'Aber ich spare es lieber für nächstes Jahr, denn ich möchte eine große Reise machen und brauche dafür Geld.' },
        { de: 'der Gewinn', plural: 'die Gewinne', ru: 'выигрыш', gender: 'maskulin', collocation: 'toller Gewinn', example: 'Danke für den tollen Gewinn!' },
        { de: 'gratulieren', ru: 'поздравлять', type: 'verb', forms: 'gratuliert, gratulierte, hat gratuliert', example: 'Elias, ich gratuliere!' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Du hast 500 € gewonnen.' },
        { de: 'ausgeben', ru: 'тратить', type: 'verb', forms: 'gibt aus, gab aus, hat ausgegeben', example: 'Ich könnte es sofort für coole Kleidung ausgeben oder für Computerspiele, davon habe ich nie genug.' },
        { de: 'sparen', ru: 'копить, экономить', type: 'verb', forms: 'spart, sparte, hat gespart', example: 'Aber ich spare es lieber für nächstes Jahr, denn ich möchte eine große Reise machen und brauche dafür Geld.' },
        { de: 'sofort', ru: 'сразу, немедленно', type: 'adv', example: 'Ich könnte es sofort für coole Kleidung ausgeben oder für Computerspiele, davon habe ich nie genug.' },
      ],
      practiceSentences: [
        { de: 'Ich habe Geld gespart.', ru: 'Я накопил деньги.', note: 'Perfekt с haben' },
        { de: 'Sie könnte eine Reise machen.', ru: 'Она могла бы совершить путешествие.', note: 'Konjunktiv II' },
        { de: 'Er gibt viel Geld aus.', ru: 'Он тратит много денег.', note: 'отделяемая приставка aus' },
        { de: 'Wir sparen für ein Auto.', ru: 'Мы копим на машину.', note: 'V2' },
        { de: 'Das ist nicht zu glauben!', ru: 'В это невозможно поверить!', note: 'инфинитив с zu' },
      ],
      question: {
        de: 'Was macht Elias mit dem Geld?',
        ru: 'Что делает Элиас с деньгами?',
        options: [
          { de: 'Er kauft Kleidung', ru: 'Он покупает одежду' },
          { de: 'Er kauft Computerspiele', ru: 'Он покупает компьютерные игры' },
          { de: 'Er spart für eine Reise', ru: 'Он копит на путешествие' },
        ],
        correct: 2,
        explanation: 'Элиас говорит: "Aber ich spare es lieber für nächstes Jahr, denn ich möchte eine große Reise machen."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Sommerfest',
      type: 'диалог',
      text: 'Hey Anna, am Freitagnachmittag ist ja unser Sommerfest. Hast du schon eingetragen, was du mitbringst? Na klar, die Liste hängt ja schon lange an der Tür im Klassenzimmer. Ich bringe Pizza mit. Und du? Ich habe mich noch nicht eingetragen, denn ich habe noch keine Ahnung. Jonas wollte am Anfang einen Kuchen mitbringen, aber auf der Liste standen schon so viele süße Sachen. Also bringt er lieber Wurstbrötchen mit. Er meinte, ich soll Säfte besorgen. Säfte sind keine gute Idee, die stehen nämlich schon auf der Liste. Noah hat sich schon für Säfte eingetragen. Verstehe. Und Lukas bringt wohl Kuchen mit, oder Tilo? Du hast noch gar nicht in die Liste geschaut, oder? Lukas bringt von zu Hause eine tolle Kaffeemaschine mit und macht Kaffee für die Eltern. Natürlich habe ich schon geschaut, wer was mitbringt, aber ich kann es mir nicht so gut merken wie du. Also pass auf: Lina backt meistens Kuchen. Dieses Mal bringt sie aber keinen Kuchen mit, sondern Eis. Mmm, lecker! Ich liebe Eis! Heißt das, niemand bringt Kuchen mit? Doch, Emilia macht leckeren Schokoladenkuchen. Jetzt bin ich erleichtert! Der Schokokuchen darf beim Sommerfest auf keinen Fall fehlen. Und was bringe ich dann mit? Ich hab\'s! Kauf doch Wasser! Ja, super Idee! Ich trage es gleich in die Liste ein.',
      sentenceTranslations: {
        'Hey Anna, am Freitagnachmittag ist ja unser Sommerfest.': { literal: 'Эй Анна, в пятницу-днём есть же наш летний-праздник.', literary: 'Эй, Анна, в пятницу днём у нас же летний праздник.' },
        'Hast du schon eingetragen, was du mitbringst?': { literal: 'Имеешь ты уже записанным, что ты приносишь?', literary: 'Ты уже записала, что принесёшь?' },
        'Na klar, die Liste hängt ja schon lange an der Tür im Klassenzimmer.': { literal: 'Ну ясно, список висит же уже долго на двери в классе.', literary: 'Конечно, список уже давно висит на двери в классе.' },
        'Ich bringe Pizza mit.': { literal: 'Я приношу пиццу с.', literary: 'Я принесу пиццу.' },
        'Und du?': { literal: 'А ты?', literary: 'А ты?' },
        'Ich habe mich noch nicht eingetragen, denn ich habe noch keine Ahnung.': { literal: 'Я имею себя ещё не записанным, ибо я имею ещё никакого понятия.', literary: 'Я ещё не записался, потому что понятия не имею.' },
        'Jonas wollte am Anfang einen Kuchen mitbringen, aber auf der Liste standen schon so viele süße Sachen.': { literal: 'Йонас хотел в начале пирог принести, но на списке стояли уже так много сладких вещей.', literary: 'Йонас сначала хотел принести пирог, но в списке уже было так много сладостей.' },
        'Also bringt er lieber Wurstbrötchen mit.': { literal: 'Итак приносит он лучше булочки-с-колбасой с.', literary: 'Поэтому он лучше принесёт булочки с колбасой.' },
        'Er meinte, ich soll Säfte besorgen.': { literal: 'Он думал, я должен соки достать.', literary: 'Он сказал, чтобы я купил соки.' },
        'Säfte sind keine gute Idee, die stehen nämlich schon auf der Liste.': { literal: 'Соки есть никакая хорошая идея, они стоят именно уже на списке.', literary: 'Соки не лучшая идея, они уже есть в списке.' },
        'Noah hat sich schon für Säfte eingetragen.': { literal: 'Ноа имеет себя уже для соков записанным.', literary: 'Ноа уже записался на соки.' },
        'Verstehe.': { literal: 'Понимаю.', literary: 'Понятно.' },
        'Und Lukas bringt wohl Kuchen mit, oder Tilo?': { literal: 'И Лукас приносит наверное пирог с, или Тило?', literary: 'А Лукас, наверное, принесёт пирог, да, Тило?' },
        'Du hast noch gar nicht in die Liste geschaut, oder?': { literal: 'Ты имеешь ещё совсем не в список смотрел, или?', literary: 'Ты ещё совсем не заглядывал в список, да?' },
        'Lukas bringt von zu Hause eine tolle Kaffeemaschine mit und macht Kaffee für die Eltern.': { literal: 'Лукас приносит из дома отличную кофемашину с и делает кофе для родителей.', literary: 'Лукас принесёт из дома отличную кофемашину и будет варить кофе для родителей.' },
        'Natürlich habe ich schon geschaut, wer was mitbringt, aber ich kann es mir nicht so gut merken wie du.': { literal: 'Естественно имею я уже смотрел, кто что приносит, но я могу это мне не так хорошо запомнить как ты.', literary: 'Конечно, я уже смотрел, кто что принесёт, но я не могу так хорошо запомнить, как ты.' },
        'Also pass auf: Lina backt meistens Kuchen.': { literal: 'Итак следи: Лина печёт чаще всего пирог.', literary: 'Слушай: Лина обычно печёт пирог.' },
        'Dieses Mal bringt sie aber keinen Kuchen mit, sondern Eis.': { literal: 'Этот раз приносит она но никакой пирог с, а мороженое.', literary: 'Но в этот раз она принесёт не пирог, а мороженое.' },
        'Mmm, lecker!': { literal: 'Ммм, вкусно!', literary: 'Ммм, вкуснятина!' },
        'Ich liebe Eis!': { literal: 'Я люблю мороженое!', literary: 'Я обожаю мороженое!' },
        'Heißt das, niemand bringt Kuchen mit?': { literal: 'Означает это, никто приносит пирог с?', literary: 'Это значит, что никто не принесёт пирог?' },
        'Doch, Emilia macht leckeren Schokoladenkuchen.': { literal: 'Нет же, Эмилия делает вкусный шоколадный-пирог.', literary: 'Нет, Эмилия приготовит вкусный шоколадный торт.' },
        'Jetzt bin ich erleichtert!': { literal: 'Сейчас есть я облегчённый!', literary: 'Теперь я успокоился!' },
        'Der Schokokuchen darf beim Sommerfest auf keinen Fall fehlen.': { literal: 'Шоколадный-пирог смеет при летнем-празднике ни в коем случае отсутствовать.', literary: 'Шоколадный торт ни в коем случае не должен отсутствовать на летнем празднике.' },
        'Und was bringe ich dann mit?': { literal: 'И что приношу я тогда с?', literary: 'И что тогда принесу я?' },
        'Ich hab\'s!': { literal: 'Я имею это!', literary: 'Придумал!' },
        'Kauf doch Wasser!': { literal: 'Купи же воду!', literary: 'Купи воду!' },
        'Ja, super Idee!': { literal: 'Да, супер идея!', literary: 'Да, отличная идея!' },
        'Ich trage es gleich in die Liste ein.': { literal: 'Я вношу это сразу в список.', literary: 'Я сейчас же запишу в список.' },
      },
      vocabulary: [
        { de: 'das Sommerfest', plural: 'die Sommerfeste', ru: 'летний праздник', gender: 'neutrum', collocation: 'unser Sommerfest', example: 'Hey Anna, am Freitagnachmittag ist ja unser Sommerfest.' },
        { de: 'die Liste', plural: 'die Listen', ru: 'список', gender: 'feminin', collocation: 'auf der Liste', example: 'Na klar, die Liste hängt ja schon lange an der Tür im Klassenzimmer.' },
        { de: 'das Klassenzimmer', plural: 'die Klassenzimmer', ru: 'класс, классная комната', gender: 'neutrum', collocation: 'im Klassenzimmer', example: 'Na klar, die Liste hängt ja schon lange an der Tür im Klassenzimmer.' },
        { de: 'der Kuchen', plural: 'die Kuchen', ru: 'пирог', gender: 'maskulin', collocation: 'Kuchen mitbringen', example: 'Jonas wollte am Anfang einen Kuchen mitbringen, aber auf der Liste standen schon so viele süße Sachen.' },
        { de: 'das Wurstbrötchen', plural: 'die Wurstbrötchen', ru: 'булочка с колбасой', gender: 'neutrum', collocation: 'Wurstbrötchen mitbringen', example: 'Also bringt er lieber Wurstbrötchen mit.' },
        { de: 'der Saft', plural: 'die Säfte', ru: 'сок', gender: 'maskulin', collocation: 'Säfte besorgen', example: 'Er meinte, ich soll Säfte besorgen.' },
        { de: 'die Kaffeemaschine', plural: 'die Kaffeemaschinen', ru: 'кофемашина', gender: 'feminin', collocation: 'tolle Kaffeemaschine', example: 'Lukas bringt von zu Hause eine tolle Kaffeemaschine mit und macht Kaffee für die Eltern.' },
        { de: 'der Schokoladenkuchen', plural: 'die Schokoladenkuchen', ru: 'шоколадный торт', gender: 'maskulin', collocation: 'leckerer Schokoladenkuchen', example: 'Doch, Emilia macht leckeren Schokoladenkuchen.' },
        { de: 'eintragen', ru: 'записывать, вносить', type: 'verb', forms: 'trägt ein, trug ein, hat eingetragen', example: 'Hast du schon eingetragen, was du mitbringst?' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Ich bringe Pizza mit.' },
        { de: 'besorgen', ru: 'доставать, покупать', type: 'verb', forms: 'besorgt, besorgte, hat besorgt', example: 'Er meinte, ich soll Säfte besorgen.' },
        { de: 'backen', ru: 'печь', type: 'verb', forms: 'backt, backte, hat gebacken', example: 'Also pass auf: Lina backt meistens Kuchen.' },
        { de: 'lecker', ru: 'вкусный', type: 'adj', example: 'Doch, Emilia macht leckeren Schokoladenkuchen.' },
      ],
      practiceSentences: [
        { de: 'Ich bringe morgen Kuchen mit.', ru: 'Я принесу завтра пирог.', note: 'отделяемая приставка mit' },
        { de: 'Sie hat sich eingetragen.', ru: 'Она записалась.', note: 'Perfekt возвратного глагола' },
        { de: 'Der Zettel hängt an der Wand.', ru: 'Записка висит на стене.', note: 'V2' },
        { de: 'Wir sollen Getränke kaufen.', ru: 'Мы должны купить напитки.', note: 'модальный + инфинитив' },
        { de: 'Auf dem Tisch stehen Gläser.', ru: 'На столе стоят стаканы.', note: 'инверсия, V2' },
      ],
      question: {
        de: 'Was bringt Tilo zum Sommerfest mit?',
        ru: 'Что принесёт Тило на летний праздник?',
        options: [
          { de: 'Pizza', ru: 'Пиццу' },
          { de: 'Säfte', ru: 'Соки' },
          { de: 'Wasser', ru: 'Воду' },
        ],
        correct: 2,
        explanation: 'В конце диалога Тило соглашается: "Kauf doch Wasser! - Ja, super Idee! Ich trage es gleich in die Liste ein."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Saft',
      type: 'диалог в магазине',
      text: 'Guten Tag, was hättest du denn gern? Ich hätte gern einen Traubensaft. Oh, das tut mir leid, ich habe keinen Traubensaft mehr. Möchtest du vielleicht einen Orangensaft? Nein danke. Haben Sie vielleicht einen Apfelsaft? Ja, Apfelsaft habe ich noch. Die Flasche 59 Cent. Prima, danke schön!',
      sentenceTranslations: {
        'Guten Tag, was hättest du denn gern?': { literal: 'Добрый день, что имел бы ты же охотно?', literary: 'Добрый день, что бы ты хотел?' },
        'Ich hätte gern einen Traubensaft.': { literal: 'Я имел бы охотно виноградный сок.', literary: 'Я бы хотел виноградный сок.' },
        'Oh, das tut mir leid, ich habe keinen Traubensaft mehr.': { literal: 'О, это делает мне жаль, я имею никакого виноградного сока больше.', literary: 'Мне жаль, виноградного сока у меня больше нет.' },
        'Möchtest du vielleicht einen Orangensaft?': { literal: 'Хотел бы ты возможно апельсиновый сок?', literary: 'Может быть, хочешь апельсиновый сок?' },
        'Nein danke.': { literal: 'Нет спасибо.', literary: 'Нет, спасибо.' },
        'Haben Sie vielleicht einen Apfelsaft?': { literal: 'Имеете Вы возможно яблочный сок?', literary: 'У вас есть яблочный сок?' },
        'Ja, Apfelsaft habe ich noch.': { literal: 'Да, яблочный сок имею я ещё.', literary: 'Да, яблочный сок ещё есть.' },
        'Die Flasche 59 Cent.': { literal: 'Бутылка 59 центов.', literary: 'Бутылка стоит 59 центов.' },
        'Prima, danke schön!': { literal: 'Отлично, спасибо красивое!', literary: 'Отлично, большое спасибо!' },
      },
      vocabulary: [
        { de: 'der Traubensaft', plural: 'die Traubensäfte', ru: 'виноградный сок', gender: 'maskulin', collocation: 'einen Traubensaft', example: 'Ich hätte gern einen Traubensaft.' },
        { de: 'der Orangensaft', plural: 'die Orangensäfte', ru: 'апельсиновый сок', gender: 'maskulin', collocation: 'einen Orangensaft', example: 'Möchtest du vielleicht einen Orangensaft?' },
        { de: 'der Apfelsaft', plural: 'die Apfelsäfte', ru: 'яблочный сок', gender: 'maskulin', collocation: 'einen Apfelsaft', example: 'Haben Sie vielleicht einen Apfelsaft?' },
      ],
      practiceSentences: [
        { de: 'Ich hätte gern einen Kaffee.', ru: 'Я бы хотел кофе.', note: 'Konjunktiv II' },
        { de: 'Das tut uns sehr leid.', ru: 'Нам очень жаль.', note: 'устойчивое выражение' },
        { de: 'Möchtest du etwas trinken?', ru: 'Хочешь что-нибудь выпить?', note: 'модальный + инфинитив' },
        { de: 'Die Milch kostet 1 Euro.', ru: 'Молоко стоит 1 евро.', note: 'V2' },
        { de: 'Haben Sie noch Brot?', ru: 'У вас ещё есть хлеб?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Welchen Saft kauft der Kunde?',
        ru: 'Какой сок покупает клиент?',
        options: [
          { de: 'Traubensaft', ru: 'Виноградный сок' },
          { de: 'Orangensaft', ru: 'Апельсиновый сок' },
          { de: 'Apfelsaft', ru: 'Яблочный сок' },
        ],
        correct: 2,
        explanation: 'После того как не оказалось виноградного, клиент спрашивает про яблочный и покупает его: "Haben Sie vielleicht einen Apfelsaft? - Ja, Apfelsaft habe ich noch."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Rainer/Mathearbeit',
      type: 'диалог',
      text: 'Hallo Rainer, was ist denn los? Geht\'s dir nicht gut? Doch, es geht mir schon gut. Ich schreibe bloß diese blöde Mathearbeit und habe noch gar nichts gelernt. Das ist doch nicht so schlimm. Wann schreibst du denn die Arbeit? Am Freitag, also in drei Tagen. Wenn du willst, kann ich dir helfen. Ich kann Mittwoch bei dir vorbeikommen. Was hältst du davon? Am Mittwoch kann ich nicht, da habe ich Fußballtraining. Ich habe auch am Donnerstag Zeit. Passt es dir denn besser? Super, am Donnerstag habe auch ich Zeit.',
      sentenceTranslations: {
        'Hallo Rainer, was ist denn los?': { literal: 'Привет Райнер, что есть же происходящее?', literary: 'Привет, Райнер, что случилось?' },
        'Geht\'s dir nicht gut?': { literal: 'Идёт это тебе не хорошо?', literary: 'Тебе нехорошо?' },
        'Doch, es geht mir schon gut.': { literal: 'Нет же, оно идёт мне уже хорошо.', literary: 'Нет, у меня всё нормально.' },
        'Ich schreibe bloß diese blöde Mathearbeit und habe noch gar nichts gelernt.': { literal: 'Я пишу только эту глупую контрольную-по-математике и имею ещё совсем ничего выученным.', literary: 'Я просто пишу эту дурацкую контрольную по математике и ещё совсем ничего не выучил.' },
        'Das ist doch nicht so schlimm.': { literal: 'Это есть же не так страшно.', literary: 'Это же не так страшно.' },
        'Wann schreibst du denn die Arbeit?': { literal: 'Когда пишешь ты же работу?', literary: 'Когда у тебя контрольная?' },
        'Am Freitag, also in drei Tagen.': { literal: 'В пятницу, итак через три дня.', literary: 'В пятницу, то есть через три дня.' },
        'Wenn du willst, kann ich dir helfen.': { literal: 'Если ты хочешь, могу я тебе помочь.', literary: 'Если хочешь, я могу тебе помочь.' },
        'Ich kann Mittwoch bei dir vorbeikommen.': { literal: 'Я могу в среду у тебя мимо-прийти.', literary: 'Я могу зайти к тебе в среду.' },
        'Was hältst du davon?': { literal: 'Что держишь ты от-этого?', literary: 'Что ты об этом думаешь?' },
        'Am Mittwoch kann ich nicht, da habe ich Fußballtraining.': { literal: 'В среду могу я не, тогда имею я футбольную-тренировку.', literary: 'В среду я не могу, у меня футбольная тренировка.' },
        'Ich habe auch am Donnerstag Zeit.': { literal: 'Я имею также в четверг время.', literary: 'У меня есть время и в четверг.' },
        'Passt es dir denn besser?': { literal: 'Подходит оно тебе же лучше?', literary: 'Тебе так подходит лучше?' },
        'Super, am Donnerstag habe auch ich Zeit.': { literal: 'Супер, в четверг имею также я время.', literary: 'Супер, в четверг у меня тоже есть время.' },
      },
      vocabulary: [
        { de: 'die Mathearbeit', plural: 'die Mathearbeiten', ru: 'контрольная по математике', gender: 'feminin', collocation: 'Mathearbeit schreiben', example: 'Ich schreibe bloß diese blöde Mathearbeit und habe noch gar nichts gelernt.' },
        { de: 'das Fußballtraining', ru: 'футбольная тренировка', gender: 'neutrum', collocation: 'Fußballtraining haben', example: 'Am Mittwoch kann ich nicht, da habe ich Fußballtraining.' },
        { de: 'die Zeit', plural: 'die Zeiten', ru: 'время', gender: 'feminin', collocation: 'Zeit haben', example: 'Super, am Donnerstag habe auch ich Zeit.' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Wenn du willst, kann ich dir helfen.' },
        { de: 'vorbeikommen', ru: 'заходить', type: 'verb', forms: 'kommt vorbei, kam vorbei, ist vorbeigekommen', example: 'Ich kann Mittwoch bei dir vorbeikommen.' },
        { de: 'lernen', ru: 'учить', type: 'verb', forms: 'lernt, lernte, hat gelernt', example: 'Ich schreibe bloß diese blöde Mathearbeit und habe noch gar nichts gelernt.' },
        { de: 'blöd', ru: 'дурацкий', type: 'adj', example: 'Ich schreibe bloß diese blöde Mathearbeit und habe noch gar nichts gelernt.' },
        { de: 'schlimm', ru: 'плохо, страшно', type: 'adj', example: 'Das ist doch nicht so schlimm.' },
      ],
      practiceSentences: [
        { de: 'Ich habe nichts gelernt.', ru: 'Я ничего не выучил.', note: 'Perfekt с haben' },
        { de: 'Wenn du Zeit hast, komm vorbei.', ru: 'Если у тебя есть время, заходи.', note: 'глагол в конце в wenn-придаточном' },
        { de: 'Ich kann dir morgen helfen.', ru: 'Я могу тебе завтра помочь.', note: 'модальный + инфинитив' },
        { de: 'Am Mittwoch habe ich Training.', ru: 'В среду у меня тренировка.', note: 'инверсия, V2' },
        { de: 'Was hältst du von Sport?', ru: 'Что ты думаешь о спорте?', note: 'V2 в вопросе' },
      ],
      question: {
        de: 'Wann treffen sie sich zum Lernen?',
        ru: 'Когда они встретятся для учёбы?',
        options: [
          { de: 'Am Mittwoch', ru: 'В среду' },
          { de: 'Am Donnerstag', ru: 'В четверг' },
          { de: 'Am Freitag', ru: 'В пятницу' },
        ],
        correct: 1,
        explanation: 'Райнер говорит, что в среду у него тренировка, и они договариваются на четверг: "Am Donnerstag habe auch ich Zeit."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Klaus/Halsschmerzen',
      type: 'диалог в аптеке',
      text: 'Hallo Klaus, wie geht es dir? Es geht so, eigentlich nicht so gut. Ich habe Halsschmerzen. Möchtest du einen Sirup, Halstabletten oder einen leckeren Tee? Wozu raten Sie mir? Probier erstmal den Tee, und wenn es dir nach einem Tag nicht besser geht, nimmst du dann den Sirup und die Halstabletten.',
      sentenceTranslations: {
        'Hallo Klaus, wie geht es dir?': { literal: 'Привет Клаус, как идёт оно тебе?', literary: 'Привет, Клаус, как у тебя дела?' },
        'Es geht so, eigentlich nicht so gut.': { literal: 'Оно идёт так, собственно не так хорошо.', literary: 'Так себе, вообще-то не очень хорошо.' },
        'Ich habe Halsschmerzen.': { literal: 'Я имею боли-горла.', literary: 'У меня болит горло.' },
        'Möchtest du einen Sirup, Halstabletten oder einen leckeren Tee?': { literal: 'Хотел бы ты сироп, таблетки-от-горла или вкусный чай?', literary: 'Ты хочешь сироп, таблетки от горла или вкусный чай?' },
        'Wozu raten Sie mir?': { literal: 'К чему советуете Вы мне?', literary: 'Что вы мне посоветуете?' },
        'Probier erstmal den Tee, und wenn es dir nach einem Tag nicht besser geht, nimmst du dann den Sirup und die Halstabletten.': { literal: 'Попробуй сначала чай, и если оно тебе после одного дня не лучше идёт, берёшь ты тогда сироп и таблетки-от-горла.', literary: 'Сначала попробуй чай, а если через день не станет лучше, тогда принимай сироп и таблетки от горла.' },
      },
      vocabulary: [
        { de: 'die Halsschmerzen', ru: 'боль в горле', gender: 'feminin', collocation: 'Halsschmerzen haben', example: 'Ich habe Halsschmerzen.' },
        { de: 'der Sirup', plural: 'die Sirupe', ru: 'сироп', gender: 'maskulin', collocation: 'den Sirup nehmen', example: 'Probier erstmal den Tee, und wenn es dir nach einem Tag nicht besser geht, nimmst du dann den Sirup und die Halstabletten.' },
        { de: 'die Halstablette', plural: 'die Halstabletten', ru: 'таблетка от горла', gender: 'feminin', collocation: 'Halstabletten nehmen', example: 'Probier erstmal den Tee, und wenn es dir nach einem Tag nicht besser geht, nimmst du dann den Sirup und die Halstabletten.' },
        { de: 'der Tee', plural: 'die Tees', ru: 'чай', gender: 'maskulin', collocation: 'leckerer Tee', example: 'Möchtest du einen Sirup, Halstabletten oder einen leckeren Tee?' },
        { de: 'raten', ru: 'советовать', type: 'verb', forms: 'rät, riet, hat geraten', example: 'Wozu raten Sie mir?' },
        { de: 'probieren', ru: 'пробовать', type: 'verb', forms: 'probiert, probierte, hat probiert', example: 'Probier erstmal den Tee, und wenn es dir nach einem Tag nicht besser geht, nimmst du dann den Sirup und die Halstabletten.' },
        { de: 'eigentlich', ru: 'собственно, вообще-то', type: 'adv', example: 'Es geht so, eigentlich nicht so gut.' },
      ],
      practiceSentences: [
        { de: 'Mir geht es heute besser.', ru: 'Мне сегодня лучше.', note: 'безличное es geht' },
        { de: 'Ich habe Kopfschmerzen.', ru: 'У меня болит голова.', note: 'V2' },
        { de: 'Probier mal diesen Kuchen!', ru: 'Попробуй-ка этот пирог!', note: 'императив' },
        { de: 'Der Arzt rät mir zur Ruhe.', ru: 'Врач советует мне отдохнуть.', note: 'raten + Dativ' },
        { de: 'Nimm diese Tabletten!', ru: 'Прими эти таблетки!', note: 'императив' },
      ],
      question: {
        de: 'Was soll Klaus zuerst nehmen?',
        ru: 'Что должен сначала принять Клаус?',
        options: [
          { de: 'Den Sirup', ru: 'Сироп' },
          { de: 'Die Halstabletten', ru: 'Таблетки от горла' },
          { de: 'Den Tee', ru: 'Чай' },
        ],
        correct: 2,
        explanation: 'Аптекарь советует: "Probier erstmal den Tee, und wenn es dir nach einem Tag nicht besser geht, nimmst du dann den Sirup."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Kino',
      type: 'диалог',
      text: 'Wollen wir heute Abend ins Kino gehen? Hast du Lust? Klar, kein Problem! Läuft was Gutes? Ja, um 18 Uhr läuft im Tivoli ein Superfilm. Hast du dann Zeit? Leider kann ich nicht um 18 Uhr, aber wir können sicher auch um 20 Uhr ins Kino gehen. Was meinst du? Ja, das geht. Okay, wir treffen uns um viertel vor acht am Tivoli.',
      sentenceTranslations: {
        'Wollen wir heute Abend ins Kino gehen?': { literal: 'Хотим мы сегодня вечером в кино идти?', literary: 'Пойдём сегодня вечером в кино?' },
        'Hast du Lust?': { literal: 'Имеешь ты желание?', literary: 'У тебя есть желание?' },
        'Klar, kein Problem!': { literal: 'Ясно, никакой проблемы!', literary: 'Конечно, без проблем!' },
        'Läuft was Gutes?': { literal: 'Идёт что хорошее?', literary: 'Идёт что-нибудь хорошее?' },
        'Ja, um 18 Uhr läuft im Tivoli ein Superfilm.': { literal: 'Да, в 18 часов идёт в Тиволи супер-фильм.', literary: 'Да, в 18:00 в кинотеатре Тиволи идёт отличный фильм.' },
        'Hast du dann Zeit?': { literal: 'Имеешь ты тогда время?', literary: 'У тебя тогда есть время?' },
        'Leider kann ich nicht um 18 Uhr, aber wir können sicher auch um 20 Uhr ins Kino gehen.': { literal: 'К-сожалению могу я не в 18 часов, но мы можем наверняка также в 20 часов в кино идти.', literary: 'К сожалению, в 18 часов я не могу, но мы наверняка можем пойти в кино и в 20 часов.' },
        'Was meinst du?': { literal: 'Что думаешь ты?', literary: 'Что скажешь?' },
        'Ja, das geht.': { literal: 'Да, это идёт.', literary: 'Да, подходит.' },
        'Okay, wir treffen uns um viertel vor acht am Tivoli.': { literal: 'Окей, мы встречаемся в четверть до восьми у Тиволи.', literary: 'Окей, встретимся без четверти восемь у Тиволи.' },
      },
      vocabulary: [
        { de: 'das Kino', plural: 'die Kinos', ru: 'кинотеатр', gender: 'neutrum', collocation: 'ins Kino gehen', example: 'Wollen wir heute Abend ins Kino gehen?' },
        { de: 'die Lust', ru: 'желание', gender: 'feminin', collocation: 'Lust haben', example: 'Hast du Lust?' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Okay, wir treffen uns um viertel vor acht am Tivoli.' },
        { de: 'laufen', ru: 'идти (о фильме)', type: 'verb', forms: 'läuft, lief, ist gelaufen', example: 'Ja, um 18 Uhr läuft im Tivoli ein Superfilm.' },
      ],
      practiceSentences: [
        { de: 'Wollen wir spazieren gehen?', ru: 'Пойдём гулять?', note: 'V1, модальный + инфинитив' },
        { de: 'Der Film läuft um 20 Uhr.', ru: 'Фильм идёт в 20:00.', note: 'V2' },
        { de: 'Wir treffen uns am Bahnhof.', ru: 'Встретимся на вокзале.', note: 'возвратный глагол' },
        { de: 'Hast du Zeit um drei?', ru: 'У тебя есть время в три?', note: 'V1 в вопросе' },
        { de: 'Ich habe keine Lust auf Kino.', ru: 'У меня нет желания идти в кино.', note: 'V2' },
      ],
      question: {
        de: 'Um wie viel Uhr treffen sie sich?',
        ru: 'Во сколько они встречаются?',
        options: [
          { de: 'Um 18:00 Uhr', ru: 'В 18:00' },
          { de: 'Um 19:45 Uhr', ru: 'В 19:45' },
          { de: 'Um 20:00 Uhr', ru: 'В 20:00' },
        ],
        correct: 1,
        explanation: 'Они договариваются: "wir treffen uns um viertel vor acht am Tivoli" (четверть до восьми = 19:45).'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Bäckerei',
      type: 'диалог',
      text: 'Guten Morgen, Frau Müller! Guten Morgen, Hans! Möchtest du außer Brot noch etwas? Ich nehme heute kein Brot. Ich hätte gern fünf Brötchen und für Dienstag möchte ich einen Apfelkuchen bestellen. Geht das? Das ist kein Problem, Hans. Bitte schön, macht 2,50 €. Hier bitte. Danke und auf Wiedersehen!',
      sentenceTranslations: {
        'Guten Morgen, Frau Müller!': { literal: 'Добрый утро, госпожа Мюллер!', literary: 'Доброе утро, госпожа Мюллер!' },
        'Guten Morgen, Hans!': { literal: 'Добрый утро, Ханс!', literary: 'Доброе утро, Ханс!' },
        'Möchtest du außer Brot noch etwas?': { literal: 'Хотел бы ты кроме хлеба ещё что-то?', literary: 'Хочешь что-нибудь кроме хлеба?' },
        'Ich nehme heute kein Brot.': { literal: 'Я беру сегодня никакой хлеб.', literary: 'Я сегодня не буду брать хлеб.' },
        'Ich hätte gern fünf Brötchen und für Dienstag möchte ich einen Apfelkuchen bestellen.': { literal: 'Я имел бы охотно пять булочек и на вторник хотел бы я яблочный-пирог заказать.', literary: 'Я бы хотел пять булочек и хочу заказать яблочный пирог на вторник.' },
        'Geht das?': { literal: 'Идёт это?', literary: 'Это возможно?' },
        'Das ist kein Problem, Hans.': { literal: 'Это есть никакая проблема, Ханс.', literary: 'Это не проблема, Ханс.' },
        'Bitte schön, macht 2,50 €.': { literal: 'Пожалуйста красиво, делает 2,50 евро.', literary: 'Пожалуйста, с вас 2,50 евро.' },
        'Hier bitte.': { literal: 'Здесь пожалуйста.', literary: 'Вот, пожалуйста.' },
        'Danke und auf Wiedersehen!': { literal: 'Спасибо и на снова-видение!', literary: 'Спасибо и до свидания!' },
      },
      vocabulary: [
        { de: 'das Brot', plural: 'die Brote', ru: 'хлеб', gender: 'neutrum', collocation: 'kein Brot', example: 'Ich nehme heute kein Brot.' },
        { de: 'das Brötchen', plural: 'die Brötchen', ru: 'булочка', gender: 'neutrum', collocation: 'fünf Brötchen', example: 'Ich hätte gern fünf Brötchen und für Dienstag möchte ich einen Apfelkuchen bestellen.' },
        { de: 'der Apfelkuchen', plural: 'die Apfelkuchen', ru: 'яблочный пирог', gender: 'maskulin', collocation: 'Apfelkuchen bestellen', example: 'Ich hätte gern fünf Brötchen und für Dienstag möchte ich einen Apfelkuchen bestellen.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte zwei Brötchen.', ru: 'Я хочу две булочки.', note: 'V2, вежливая форма' },
        { de: 'Das macht zusammen 5 Euro.', ru: 'Всего будет 5 евро.', note: 'V2' },
        { de: 'Kann ich für morgen bestellen?', ru: 'Могу я заказать на завтра?', note: 'модальный V1' },
        { de: 'Wir nehmen heute Kuchen.', ru: 'Мы берём сегодня пирог.', note: 'V2' },
        { de: 'Außer Milch brauche ich nichts.', ru: 'Кроме молока мне ничего не нужно.', note: 'инверсия, V2' },
      ],
      question: {
        de: 'Was bestellt Hans für Dienstag?',
        ru: 'Что заказывает Ханс на вторник?',
        options: [
          { de: 'Brot', ru: 'Хлеб' },
          { de: 'Brötchen', ru: 'Булочки' },
          { de: 'Apfelkuchen', ru: 'Яблочный пирог' },
        ],
        correct: 2,
        explanation: 'Ханс говорит: "für Dienstag möchte ich einen Apfelkuchen bestellen."'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Sandra/Interview',
      type: 'интервью',
      text: 'Herzlich willkommen bei unserer heutigen Radiosendung für Jugendliche! Heute haben wir Sandra zu Gast. Sandra kommt aus Deutschland und lebt jetzt in Italien. Wie lange lebst du schon in Italien, Sandra? Ich wollte schon als Kind im Ausland leben und jetzt bin ich seit einem Jahr in Italien. Es ist sehr schön da. Was hat dich denn nach Italien geführt? Wissen Sie, mein Vater ist Deutschlehrer und hat einen gut bezahlten Job in Rom angeboten bekommen. Da haben wir nicht lange überlegt. In welche Klasse gehst du jetzt? Letztes Jahr bin ich noch in Deutschland in die Schule gegangen, und zwar in die siebte Klasse. Dieses Jahr gehe ich in die achte Klasse, aber natürlich in Italien. Du hast also kein Jahr verloren, obwohl du kein Italienisch konntest? Nein, ich besuche eine Europaschule. Da findet der Unterricht auf Englisch statt. Und inzwischen spreche ich auch ziemlich gut Italienisch. Wie findest du die Sprache? Schön! Hast du auch schon Freunde? Ich bin so froh! Vom ersten Moment an hatte ich Freunde, die sehr hilfsbereit waren, mir beim Einleben zu helfen. Meine besten Freunde sind Salvatore und Maria. Die zwei sind immer für mich da. Wie stellst du dir deine Zukunft vor? Also, ich habe vor, in Italien zu bleiben. Mein Vater hat eine gute Arbeitsstelle und ich finde Italien super. Das Essen, das Wetter und die Menschen dort finde ich einfach toll. Dann wünsche ich dir weiterhin viel Glück! Danke schön! Und nun geht es weiter mit Musik.',
      sentenceTranslations: {
        'Herzlich willkommen bei unserer heutigen Radiosendung für Jugendliche!': { literal: 'Сердечно добро-пожаловать при нашей сегодняшней радио-передаче для подростков!', literary: 'Добро пожаловать на нашу сегодняшнюю радиопередачу для подростков!' },
        'Heute haben wir Sandra zu Gast.': { literal: 'Сегодня имеем мы Сандру к гостю.', literary: 'Сегодня у нас в гостях Сандра.' },
        'Sandra kommt aus Deutschland und lebt jetzt in Italien.': { literal: 'Сандра приходит из Германии и живёт сейчас в Италии.', literary: 'Сандра из Германии и сейчас живёт в Италии.' },
        'Wie lange lebst du schon in Italien, Sandra?': { literal: 'Как долго живёшь ты уже в Италии, Сандра?', literary: 'Как долго ты уже живёшь в Италии, Сандра?' },
        'Ich wollte schon als Kind im Ausland leben und jetzt bin ich seit einem Jahr in Italien.': { literal: 'Я хотела уже как ребёнок за границей жить и сейчас есть я с одного года в Италии.', literary: 'Я хотела жить за границей ещё с детства, и вот уже год как я в Италии.' },
        'Es ist sehr schön da.': { literal: 'Оно есть очень красиво там.', literary: 'Там очень красиво.' },
        'Was hat dich denn nach Italien geführt?': { literal: 'Что имеет тебя же в Италию приведённым?', literary: 'Что привело тебя в Италию?' },
        'Wissen Sie, mein Vater ist Deutschlehrer und hat einen gut bezahlten Job in Rom angeboten bekommen.': { literal: 'Знаете Вы, мой отец есть учитель-немецкого и имеет хорошо-оплачиваемую работу в Риме предложенной полученной.', literary: 'Знаете, мой отец учитель немецкого и получил предложение о хорошо оплачиваемой работе в Риме.' },
        'Da haben wir nicht lange überlegt.': { literal: 'Тогда имеем мы не долго раздумывали.', literary: 'Мы долго не раздумывали.' },
        'In welche Klasse gehst du jetzt?': { literal: 'В какой класс идёшь ты сейчас?', literary: 'В какой класс ты сейчас ходишь?' },
        'Letztes Jahr bin ich noch in Deutschland in die Schule gegangen, und zwar in die siebte Klasse.': { literal: 'Прошлый год есть я ещё в Германии в школу ходила, а именно в седьмой класс.', literary: 'В прошлом году я ещё ходила в школу в Германии, а именно в седьмой класс.' },
        'Dieses Jahr gehe ich in die achte Klasse, aber natürlich in Italien.': { literal: 'Этот год хожу я в восьмой класс, но естественно в Италии.', literary: 'В этом году я хожу в восьмой класс, но, конечно, в Италии.' },
        'Du hast also kein Jahr verloren, obwohl du kein Italienisch konntest?': { literal: 'Ты имеешь итак никакой год потерянным, хотя ты никакой итальянский не умела?', literary: 'Значит, ты не потеряла год, хотя не знала итальянского?' },
        'Nein, ich besuche eine Europaschule.': { literal: 'Нет, я посещаю европейскую-школу.', literary: 'Нет, я посещаю европейскую школу.' },
        'Da findet der Unterricht auf Englisch statt.': { literal: 'Там происходит занятие на английском.', literary: 'Там занятия проходят на английском языке.' },
        'Und inzwischen spreche ich auch ziemlich gut Italienisch.': { literal: 'И тем-временем говорю я также довольно хорошо итальянский.', literary: 'И к этому времени я уже довольно хорошо говорю по-итальянски.' },
        'Wie findest du die Sprache?': { literal: 'Как находишь ты язык?', literary: 'Как тебе этот язык?' },
        'Schön!': { literal: 'Красиво!', literary: 'Красивый!' },
        'Hast du auch schon Freunde?': { literal: 'Имеешь ты также уже друзей?', literary: 'У тебя уже есть друзья?' },
        'Ich bin so froh!': { literal: 'Я есть так рада!', literary: 'Я так рада!' },
        'Vom ersten Moment an hatte ich Freunde, die sehr hilfsbereit waren, mir beim Einleben zu helfen.': { literal: 'С первого момента имела я друзей, которые очень готовы-помочь были, мне при вживании помочь.', literary: 'С первого момента у меня были друзья, которые были очень готовы помочь мне освоиться.' },
        'Meine besten Freunde sind Salvatore und Maria.': { literal: 'Мои лучшие друзья есть Сальваторе и Мария.', literary: 'Мои лучшие друзья - Сальваторе и Мария.' },
        'Die zwei sind immer für mich da.': { literal: 'Они двое есть всегда для меня здесь.', literary: 'Они двое всегда рядом.' },
        'Wie stellst du dir deine Zukunft vor?': { literal: 'Как представляешь ты себе твоё будущее?', literary: 'Как ты представляешь своё будущее?' },
        'Also, ich habe vor, in Italien zu bleiben.': { literal: 'Итак, я имею перед, в Италии остаться.', literary: 'Я планирую остаться в Италии.' },
        'Mein Vater hat eine gute Arbeitsstelle und ich finde Italien super.': { literal: 'Мой отец имеет хорошее рабочее-место и я нахожу Италию супер.', literary: 'У моего отца хорошая работа, и мне нравится Италия.' },
        'Das Essen, das Wetter und die Menschen dort finde ich einfach toll.': { literal: 'Еду, погоду и людей там нахожу я просто отличными.', literary: 'Еда, погода и люди там просто замечательные.' },
        'Dann wünsche ich dir weiterhin viel Glück!': { literal: 'Тогда желаю я тебе далее много счастья!', literary: 'Тогда желаю тебе и дальше удачи!' },
        'Danke schön!': { literal: 'Спасибо красиво!', literary: 'Большое спасибо!' },
        'Und nun geht es weiter mit Musik.': { literal: 'И сейчас идёт оно далее с музыкой.', literary: 'А теперь продолжим с музыкой.' },
      },
      vocabulary: [
        { de: 'die Radiosendung', plural: 'die Radiosendungen', ru: 'радиопередача', gender: 'feminin', collocation: 'heutige Radiosendung', example: 'Herzlich willkommen bei unserer heutigen Radiosendung für Jugendliche!' },
        { de: 'der Gast', plural: 'die Gäste', ru: 'гость', gender: 'maskulin', collocation: 'zu Gast haben', example: 'Heute haben wir Sandra zu Gast.' },
        { de: 'das Ausland', ru: 'заграница', gender: 'neutrum', collocation: 'im Ausland leben', example: 'Ich wollte schon als Kind im Ausland leben und jetzt bin ich seit einem Jahr in Italien.' },
        { de: 'der Deutschlehrer', plural: 'die Deutschlehrer', ru: 'учитель немецкого', gender: 'maskulin', collocation: 'Vater ist Deutschlehrer', example: 'Wissen Sie, mein Vater ist Deutschlehrer und hat einen gut bezahlten Job in Rom angeboten bekommen.' },
        { de: 'die Klasse', plural: 'die Klassen', ru: 'класс', gender: 'feminin', collocation: 'in die achte Klasse', example: 'Dieses Jahr gehe ich in die achte Klasse, aber natürlich in Italien.' },
        { de: 'die Europaschule', plural: 'die Europaschulen', ru: 'европейская школа', gender: 'feminin', collocation: 'eine Europaschule besuchen', example: 'Nein, ich besuche eine Europaschule.' },
        { de: 'der Unterricht', ru: 'занятия, уроки', gender: 'maskulin', collocation: 'Unterricht auf Englisch', example: 'Da findet der Unterricht auf Englisch statt.' },
        { de: 'die Zukunft', ru: 'будущее', gender: 'feminin', collocation: 'deine Zukunft', example: 'Wie stellst du dir deine Zukunft vor?' },
        { de: 'die Arbeitsstelle', plural: 'die Arbeitsstellen', ru: 'место работы', gender: 'feminin', collocation: 'gute Arbeitsstelle', example: 'Mein Vater hat eine gute Arbeitsstelle und ich finde Italien super.' },
        { de: 'führen', ru: 'вести, приводить', type: 'verb', forms: 'führt, führte, hat geführt', example: 'Was hat dich denn nach Italien geführt?' },
        { de: 'überlegen', ru: 'раздумывать', type: 'verb', forms: 'überlegt, überlegte, hat überlegt', example: 'Da haben wir nicht lange überlegt.' },
        { de: 'verlieren', ru: 'терять', type: 'verb', forms: 'verliert, verlor, hat verloren', example: 'Du hast also kein Jahr verloren, obwohl du kein Italienisch konntest?' },
        { de: 'stattfinden', ru: 'происходить, состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Da findet der Unterricht auf Englisch statt.' },
        { de: 'vorhaben', ru: 'планировать', type: 'verb', forms: 'hat vor, hatte vor, hat vorgehabt', example: 'Also, ich habe vor, in Italien zu bleiben.' },
        { de: 'hilfsbereit', ru: 'готовый помочь', type: 'adj', example: 'Vom ersten Moment an hatte ich Freunde, die sehr hilfsbereit waren, mir beim Einleben zu helfen.' },
        { de: 'ziemlich', ru: 'довольно', type: 'adv', example: 'Und inzwischen spreche ich auch ziemlich gut Italienisch.' },
      ],
      practiceSentences: [
        { de: 'Ich lebe seit zwei Jahren hier.', ru: 'Я живу здесь два года.', note: 'V2' },
        { de: 'Sie hat eine Stelle bekommen.', ru: 'Она получила место работы.', note: 'Perfekt с haben' },
        { de: 'Der Unterricht findet morgen statt.', ru: 'Занятие состоится завтра.', note: 'отделяемая приставка statt' },
        { de: 'Obwohl es regnet, gehen wir spazieren.', ru: 'Хотя идёт дождь, мы идём гулять.', note: 'глагол в конце в obwohl-придаточном' },
        { de: 'Ich habe vor zu bleiben.', ru: 'Я планирую остаться.', note: 'vorhaben + zu + инфинитив' },
      ],
      question: {
        de: 'Sandra möchte in Italien bleiben.',
        ru: 'Сандра хочет остаться в Италии.',
        options: [
          { de: 'Ja', ru: 'Да' },
          { de: 'Nein', ru: 'Нет' },
          { de: 'Das wird nicht gesagt', ru: 'Об этом не говорится' },
        ],
        correct: 0,
        explanation: 'Сандра говорит о будущем: "ich habe vor, in Italien zu bleiben."'
      }
    },
  ],

  /* ─── Агрегированный словарь для упражнений ─── */
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

  /* ─── Агрегированные переводы предложений для конструктора ─── */
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

  /* ─── Вставь слово в рассказ ─── */
  fillStory: {
    title: 'ОДИН ДЕНЬ ИЗ ЖИЗНИ',
    text: 'Практика доктора Ноак закрыта из-за {0}. Все приёмы {1} на следующую неделю. В замке начинается {2} через 20 минут. Пожалуйста, {3} телефоны. Мара хочет организовать {4} в субботу. Элиас выиграл 500 евро и решил {5} на путешествие. На летнем празднике Анна принесёт {6}, а Лина — мороженое. Клаус пришёл в аптеку с {7}. Ему посоветовали сначала {8}. В кинотеатре Тиволи {9} отличный фильм. Ханс заказал в пекарне {10} на вторник. Сандра живёт {11} и посещает {12}.',
    blanks: [
      { answer: 'der Krankheit', hint: 'болезнь (die Krankheit, Gen.)' },
      { answer: 'verschoben', hint: 'перенесены (verschieben, Part. II)' },
      { answer: 'der Rundgang', hint: 'экскурсия (der Rundgang)' },
      { answer: 'ausmachen', hint: 'выключите (ausmachen)' },
      { answer: 'eine Gartenparty', hint: 'вечеринку в саду (die Gartenparty, Akk.)' },
      { answer: 'sparen', hint: 'копить (sparen)' },
      { answer: 'die Pizza', hint: 'пицца (die Pizza)' },
      { answer: 'Halsschmerzen', hint: 'боль в горле (die Halsschmerzen)' },
      { answer: 'den Tee', hint: 'чай (der Tee, Akk.)' },
      { answer: 'läuft', hint: 'идёт (laufen, о фильме)' },
      { answer: 'einen Apfelkuchen', hint: 'яблочный пирог (der Apfelkuchen, Akk.)' },
      { answer: 'im Ausland', hint: 'за границей (das Ausland)' },
      { answer: 'eine Europaschule', hint: 'европейскую школу (die Europaschule, Akk.)' },
    ],
  },

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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табе "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Dr. Noak).',
    },
  },
};
LESSONS.push(LESSON_31);
