/* ═══════════════════════════════════════════════════════════
   Lesson 25 — Goethe Zertifikat A2 Hören Teil 1-4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_25 = {
  id: 'lesson-25',
  number: 25,
  title: 'Goethe A2 Hören — Verkehr, Freizeit, Einkaufen, Wohnung',
  subtitle: 'Verkehrshinweise, Altstadtfest, Flughafen, Freizeit am Sonntag, Einkaufen und Wohnungssuche',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-25',
  videoUrl: 'https://www.youtube.com/watch?v=9han3GbX17Q',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Verkehrshinweise',
      type: 'дорожная сводка',
      text: 'Und nun die Verkehrshinweise. Achtung Autofahrer auf der A43 zwischen Wuppertal und Recklinghausen laufen Kinder auf der Autobahn. Fahren Sie bitte vorsichtig. Wir informieren Sie wenn die Gefahr vorbei ist. A46 Wuppertal Richtung Düsseldorf: die Arbeiten an der Fahrbahn sind zu Ende, hier können Sie wieder normal fahren. Ebenfalls wieder freie Fahrt haben sie auf der A40 Essen Richtung Duisburg nach mehreren Unfällen.',
      sentenceTranslations: {
        'Und nun die Verkehrshinweise.': { literal: 'И теперь дорожные указания', literary: 'А теперь дорожная сводка.' },
        'Achtung Autofahrer auf der A43 zwischen Wuppertal und Recklinghausen laufen Kinder auf der Autobahn.': { literal: 'Внимание автоводители на A43 между Вупперталь и Реклингхаузен бегают дети на автобане', literary: 'Внимание автомобилистам на трассе A43 между Вуппертталем и Реклингхаузеном: дети на проезжей части.' },
        'Fahren Sie bitte vorsichtig.': { literal: 'Езжайте вы пожалуйста осторожно', literary: 'Пожалуйста, соблюдайте осторожность.' },
        'Wir informieren Sie wenn die Gefahr vorbei ist.': { literal: 'Мы информируем вас когда опасность закончена есть', literary: 'Мы сообщим вам, когда опасность минует.' },
        'A46 Wuppertal Richtung Düsseldorf: die Arbeiten an der Fahrbahn sind zu Ende, hier können Sie wieder normal fahren.': { literal: 'A46 Вупперталь направление Дюссельдорф: работы на проезжей части есть к концу, здесь можете вы снова нормально ехать', literary: 'Трасса A46, Вупперталь в сторону Дюссельдорфа: дорожные работы завершены, здесь можно снова ехать нормально.' },
        'Ebenfalls wieder freie Fahrt haben sie auf der A40 Essen Richtung Duisburg nach mehreren Unfällen.': { literal: 'Также снова свободная езда имеют они на A40 Эссен направление Дуйсбург после нескольких аварий', literary: 'Также снова свободное движение на A40 Эссен в сторону Дуйсбурга после нескольких аварий.' },
      },
      vocabulary: [
        { de: 'der Verkehrshinweis', plural: 'die Verkehrshinweise', ru: 'дорожная информация', gender: 'maskulin', collocation: 'Verkehrshinweise hören', example: 'Und nun die Verkehrshinweise.' },
        { de: 'der Autofahrer', plural: 'die Autofahrer', ru: 'автомобилист', gender: 'maskulin', collocation: 'Achtung Autofahrer!', example: 'Achtung Autofahrer auf der A43 zwischen Wuppertal und Recklinghausen laufen Kinder auf der Autobahn.' },
        { de: 'die Autobahn', plural: 'die Autobahnen', ru: 'автострада', gender: 'feminin', collocation: 'auf der Autobahn', example: 'Achtung Autofahrer auf der A43 zwischen Wuppertal und Recklinghausen laufen Kinder auf der Autobahn.' },
        { de: 'die Gefahr', plural: 'die Gefahren', ru: 'опасность', gender: 'feminin', collocation: 'die Gefahr ist vorbei', example: 'Wir informieren Sie wenn die Gefahr vorbei ist.' },
        { de: 'die Fahrbahn', plural: 'die Fahrbahnen', ru: 'проезжая часть', gender: 'feminin', collocation: 'Arbeiten an der Fahrbahn', example: 'A46 Wuppertal Richtung Düsseldorf: die Arbeiten an der Fahrbahn sind zu Ende, hier können Sie wieder normal fahren.' },
        { de: 'der Unfall', plural: 'die Unfälle', ru: 'авария', gender: 'maskulin', collocation: 'nach mehreren Unfällen', example: 'Ebenfalls wieder freie Fahrt haben sie auf der A40 Essen Richtung Duisburg nach mehreren Unfällen.' },
        { de: 'die Fahrt', plural: 'die Fahrten', ru: 'поездка, движение', gender: 'feminin', collocation: 'freie Fahrt', example: 'Ebenfalls wieder freie Fahrt haben sie auf der A40 Essen Richtung Duisburg nach mehreren Unfällen.' },
        { de: 'laufen', ru: 'бежать, идти', type: 'verb', forms: 'läuft, lief, ist gelaufen', example: 'Achtung Autofahrer auf der A43 zwischen Wuppertal und Recklinghausen laufen Kinder auf der Autobahn.' },
        { de: 'informieren', ru: 'информировать', type: 'verb', forms: 'informiert, informierte, hat informiert', example: 'Wir informieren Sie wenn die Gefahr vorbei ist.' },
        { de: 'vorsichtig', ru: 'осторожно', type: 'adj', example: 'Fahren Sie bitte vorsichtig.' },
      ],
      practiceSentences: [
        { de: 'Kinder spielen auf der Straße.', ru: 'Дети играют на улице.', note: 'V2' },
        { de: 'Fahren Sie langsam!', ru: 'Езжайте медленно!', note: 'императив с Sie' },
        { de: 'Die Arbeit ist zu Ende.', ru: 'Работа закончена.', note: 'sein + zu Ende' },
        { de: 'Wir informieren Sie morgen.', ru: 'Мы сообщим вам завтра.', note: 'V2' },
        { de: 'Es gibt einen Stau auf der A1.', ru: 'На трассе A1 пробка.', note: 'es gibt + Akk' },
      ],
      question: {
        de: 'Was ist auf der A43 passiert?',
        ru: 'Что произошло на трассе A43?',
        options: [
          { de: 'Es gibt einen Unfall', ru: 'Произошла авария' },
          { de: 'Kinder laufen auf der Autobahn', ru: 'Дети бегают по автостраде' },
          { de: 'Die Fahrbahn wird repariert', ru: 'Ремонтируется проезжая часть' },
        ],
        correct: 1,
        explanation: 'В тексте прямо говорится: "auf der A43 zwischen Wuppertal und Recklinghausen laufen Kinder auf der Autobahn".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Altstadtfest',
      type: 'объявление',
      text: 'Und hier eine Meldung für die Besucher des Altstadtfests: in der Altstadt gibt es keine Parkplätze mehr. Bitte benutzen Sie zur Fahrt in die Altstadt U- oder S-Bahnen. Besucher mit dem Auto können Ihren Wagen auch an der Körnerwiese parken und von dort mit dem Bus in die Altstadt fahren.',
      sentenceTranslations: {
        'Und hier eine Meldung für die Besucher des Altstadtfests: in der Altstadt gibt es keine Parkplätze mehr.': { literal: 'И здесь одно сообщение для посетителей фестиваля-старого-города: в старом городе даёт это никаких парковочных мест больше', literary: 'Внимание посетителям фестиваля в старом городе: в старом городе больше нет парковочных мест.' },
        'Bitte benutzen Sie zur Fahrt in die Altstadt U- oder S-Bahnen.': { literal: 'Пожалуйста используйте вы для поездки в старый город У- или С-поезда', literary: 'Для поездки в старый город используйте метро или городскую электричку.' },
        'Besucher mit dem Auto können Ihren Wagen auch an der Körnerwiese parken und von dort mit dem Bus in die Altstadt fahren.': { literal: 'Посетители с автомобилем могут свой автомобиль также у Кёрнервизе парковать и оттуда с автобусом в старый город ехать', literary: 'Автомобилисты могут также припарковать машину у Кёрнервизе и оттуда доехать автобусом до старого города.' },
      },
      vocabulary: [
        { de: 'die Meldung', plural: 'die Meldungen', ru: 'сообщение', gender: 'feminin', collocation: 'eine Meldung für Besucher', example: 'Und hier eine Meldung für die Besucher des Altstadtfests: in der Altstadt gibt es keine Parkplätze mehr.' },
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'Besucher des Fests', example: 'Und hier eine Meldung für die Besucher des Altstadtfests: in der Altstadt gibt es keine Parkplätze mehr.' },
        { de: 'das Altstadtfest', plural: 'die Altstadtfeste', ru: 'фестиваль в старом городе', gender: 'neutrum', collocation: 'zum Altstadtfest fahren', example: 'Und hier eine Meldung für die Besucher des Altstadtfests: in der Altstadt gibt es keine Parkplätze mehr.' },
        { de: 'die Altstadt', plural: 'die Altstädte', ru: 'старый город', gender: 'feminin', collocation: 'in die Altstadt fahren', example: 'Bitte benutzen Sie zur Fahrt in die Altstadt U- oder S-Bahnen.' },
        { de: 'der Parkplatz', plural: 'die Parkplätze', ru: 'парковка', gender: 'maskulin', collocation: 'keine Parkplätze mehr', example: 'Und hier eine Meldung für die Besucher des Altstadtfests: in der Altstadt gibt es keine Parkplätze mehr.' },
        { de: 'der Wagen', plural: 'die Wagen', ru: 'автомобиль', gender: 'maskulin', collocation: 'den Wagen parken', example: 'Besucher mit dem Auto können Ihren Wagen auch an der Körnerwiese parken und von dort mit dem Bus in die Altstadt fahren.' },
        { de: 'benutzen', ru: 'использовать', type: 'verb', forms: 'benutzt, benutzte, hat benutzt', example: 'Bitte benutzen Sie zur Fahrt in die Altstadt U- oder S-Bahnen.' },
        { de: 'parken', ru: 'парковать', type: 'verb', forms: 'parkt, parkte, hat geparkt', example: 'Besucher mit dem Auto können Ihren Wagen auch an der Körnerwiese parken und von dort mit dem Bus in die Altstadt fahren.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute ein Fest.', ru: 'Сегодня праздник.', note: 'es gibt + Akk' },
        { de: 'Benutzen Sie den Bus!', ru: 'Используйте автобус!', note: 'императив Sie' },
        { de: 'Ich fahre mit dem Auto.', ru: 'Я еду на машине.', note: 'V2' },
        { de: 'Sie können hier parken.', ru: 'Вы можете здесь парковать.', note: 'модальный + инфинитив' },
        { de: 'In der Stadt gibt es viele Cafés.', ru: 'В городе много кафе.', note: 'es gibt + Akk' },
      ],
      question: {
        de: 'Wo können Autofahrer parken?',
        ru: 'Где могут парковаться автомобилисты?',
        options: [
          { de: 'In der Altstadt', ru: 'В старом городе' },
          { de: 'An der Körnerwiese', ru: 'На лугу Кёрнера' },
          { de: 'Am Bahnhof', ru: 'У вокзала' },
        ],
        correct: 1,
        explanation: 'Текст указывает: "Besucher mit dem Auto können Ihren Wagen auch an der Körnerwiese parken".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Oleg an Anja',
      type: 'телефонное сообщение',
      text: 'Hallo Anja, hier ist Oleg. Du kommst ja morgen um 14 Uhr an, hast Du mir geschrieben. Ich hole Dich dann am Bahnhof ab. Ich kann aber leider erst 15 Minuten später kommen, weil ich vorher noch einen Termin habe. Bis morgen, ich freue mich! Oleg.',
      sentenceTranslations: {
        'Hallo Anja, hier ist Oleg.': { literal: 'Привет Аня, здесь есть Олег', literary: 'Привет, Аня, это Олег.' },
        'Du kommst ja morgen um 14 Uhr an, hast Du mir geschrieben.': { literal: 'Ты прибываешь же завтра в 14 часов, имеешь ты мне написано', literary: 'Ты же приезжаешь завтра в 14:00, как ты мне написала.' },
        'Ich hole Dich dann am Bahnhof ab.': { literal: 'Я забираю тебя тогда на вокзале', literary: 'Я встречу тебя на вокзале.' },
        'Ich kann aber leider erst 15 Minuten später kommen, weil ich vorher noch einen Termin habe.': { literal: 'Я могу но к сожалению только 15 минут позже прийти, потому-что я до-этого ещё одну встречу имею', literary: 'Но я, к сожалению, смогу прийти только на 15 минут позже, потому что у меня ещё встреча.' },
        'Bis morgen, ich freue mich!': { literal: 'До завтра, я радуюсь', literary: 'До завтра, я рад!' },
        'Oleg.': { literal: 'Олег', literary: 'Олег.' },
      },
      vocabulary: [
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'am Bahnhof abholen', example: 'Ich hole Dich dann am Bahnhof ab.' },
        { de: 'der Termin', plural: 'die Termine', ru: 'встреча, дело', gender: 'maskulin', collocation: 'einen Termin haben', example: 'Ich kann aber leider erst 15 Minuten später kommen, weil ich vorher noch einen Termin habe.' },
        { de: 'die Minute', plural: 'die Minuten', ru: 'минута', gender: 'feminin', collocation: '15 Minuten später', example: 'Ich kann aber leider erst 15 Minuten später kommen, weil ich vorher noch einen Termin habe.' },
        { de: 'ankommen', ru: 'прибывать', type: 'verb', forms: 'kommt an, kam an, ist angekommen', example: 'Du kommst ja morgen um 14 Uhr an, hast Du mir geschrieben.' },
        { de: 'abholen', ru: 'встречать, забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Ich hole Dich dann am Bahnhof ab.' },
        { de: 'sich freuen', ru: 'радоваться', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Bis morgen, ich freue mich!' },
        { de: 'leider', ru: 'к сожалению', type: 'adv', example: 'Ich kann aber leider erst 15 Minuten später kommen, weil ich vorher noch einen Termin habe.' },
        { de: 'vorher', ru: 'до этого, заранее', type: 'adv', example: 'Ich kann aber leider erst 15 Minuten später kommen, weil ich vorher noch einen Termin habe.' },
      ],
      practiceSentences: [
        { de: 'Der Zug kommt um 15 Uhr an.', ru: 'Поезд прибывает в 15:00.', note: 'отделяемая приставка' },
        { de: 'Ich hole dich ab.', ru: 'Я тебя встречу.', note: 'отделяемая приставка' },
        { de: 'Sie hat mir geschrieben.', ru: 'Она мне написала.', note: 'Perfekt с haben' },
        { de: 'Ich kann nicht kommen.', ru: 'Я не могу прийти.', note: 'модальный + инфинитив' },
        { de: 'Er kommt später, weil er arbeitet.', ru: 'Он придёт позже, потому что работает.', note: 'weil - глагол в конце' },
      ],
      question: {
        de: 'Wann kommt Oleg zum Bahnhof?',
        ru: 'Когда Олег придёт на вокзал?',
        options: [
          { de: 'Um 14:00 Uhr', ru: 'В 14:00' },
          { de: 'Um 14:15 Uhr', ru: 'В 14:15' },
          { de: 'Um 14:30 Uhr', ru: 'В 14:30' },
        ],
        correct: 1,
        explanation: 'Аня приезжает в 14:00, а Олег говорит: "Ich kann aber leider erst 15 Minuten später kommen" (14:00 + 15 = 14:15).'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Flughafen Tegel',
      type: 'объявление',
      text: 'Und hier noch eine Verkehrsmeldung: Nichts geht mehr auf dem Flughafen Berlin Tegel. Wegen Schnee und Eis gibt es voraussichtlich bis morgen früh keinen Flugverkehr. Wenn Sie einen Flug von Berlin in eine andere Stadt Deutschlands gebucht haben, können Sie auf den Zug umsteigen. Ihr Flugticket wird dann in eine Zugfahrkarte umgetauscht.',
      sentenceTranslations: {
        'Und hier noch eine Verkehrsmeldung: Nichts geht mehr auf dem Flughafen Berlin Tegel.': { literal: 'И здесь ещё одна транспортная-сводка: ничего идёт больше на аэропорту Берлин Тегель', literary: 'Ещё одно транспортное сообщение: аэропорт Берлин-Тегель полностью парализован.' },
        'Wegen Schnee und Eis gibt es voraussichtlich bis morgen früh keinen Flugverkehr.': { literal: 'Из-за снега и льда даёт это предположительно до завтра рано никакого полётного движения', literary: 'Из-за снега и льда авиасообщение предположительно прекращено до завтрашнего утра.' },
        'Wenn Sie einen Flug von Berlin in eine andere Stadt Deutschlands gebucht haben, können Sie auf den Zug umsteigen.': { literal: 'Если вы один полёт из Берлина в другой город Германии забронировали имеете, можете вы на поезд пересесть', literary: 'Если вы забронировали рейс из Берлина в другой город Германии, вы можете пересесть на поезд.' },
        'Ihr Flugticket wird dann in eine Zugfahrkarte umgetauscht.': { literal: 'Ваш авиабилет становится тогда в одну железнодорожную карту обменян', literary: 'Ваш авиабилет будет обменян на железнодорожный билет.' },
      },
      vocabulary: [
        { de: 'die Verkehrsmeldung', plural: 'die Verkehrsmeldungen', ru: 'транспортная сводка', gender: 'feminin', collocation: 'eine Verkehrsmeldung', example: 'Und hier noch eine Verkehrsmeldung: Nichts geht mehr auf dem Flughafen Berlin Tegel.' },
        { de: 'der Flughafen', plural: 'die Flughäfen', ru: 'аэропорт', gender: 'maskulin', collocation: 'auf dem Flughafen', example: 'Und hier noch eine Verkehrsmeldung: Nichts geht mehr auf dem Flughafen Berlin Tegel.' },
        { de: 'der Schnee', ru: 'снег', gender: 'maskulin', collocation: 'wegen Schnee', example: 'Wegen Schnee und Eis gibt es voraussichtlich bis morgen früh keinen Flugverkehr.' },
        { de: 'das Eis', ru: 'лёд', gender: 'neutrum', collocation: 'wegen Eis', example: 'Wegen Schnee und Eis gibt es voraussichtlich bis morgen früh keinen Flugverkehr.' },
        { de: 'der Flug', plural: 'die Flüge', ru: 'рейс, полёт', gender: 'maskulin', collocation: 'einen Flug buchen', example: 'Wenn Sie einen Flug von Berlin in eine andere Stadt Deutschlands gebucht haben, können Sie auf den Zug umsteigen.' },
        { de: 'das Flugticket', plural: 'die Flugtickets', ru: 'авиабилет', gender: 'neutrum', collocation: 'Flugticket umtauschen', example: 'Ihr Flugticket wird dann in eine Zugfahrkarte umgetauscht.' },
        { de: 'die Zugfahrkarte', plural: 'die Zugfahrkarten', ru: 'железнодорожный билет', gender: 'feminin', collocation: 'in eine Zugfahrkarte umtauschen', example: 'Ihr Flugticket wird dann in eine Zugfahrkarte umgetauscht.' },
        { de: 'buchen', ru: 'бронировать', type: 'verb', forms: 'bucht, buchte, hat gebucht', example: 'Wenn Sie einen Flug von Berlin in eine andere Stadt Deutschlands gebucht haben, können Sie auf den Zug umsteigen.' },
        { de: 'umsteigen', ru: 'пересаживаться', type: 'verb', forms: 'steigt um, stieg um, ist umgestiegen', example: 'Wenn Sie einen Flug von Berlin in eine andere Stadt Deutschlands gebucht haben, können Sie auf den Zug umsteigen.' },
        { de: 'umtauschen', ru: 'обменивать', type: 'verb', forms: 'tauscht um, tauschte um, hat umgetauscht', example: 'Ihr Flugticket wird dann in eine Zugfahrkarte umgetauscht.' },
        { de: 'voraussichtlich', ru: 'предположительно', type: 'adv', example: 'Wegen Schnee und Eis gibt es voraussichtlich bis morgen früh keinen Flugverkehr.' },
      ],
      practiceSentences: [
        { de: 'Nichts geht mehr.', ru: 'Всё остановилось.', note: 'идиома' },
        { de: 'Wegen Regen bleiben wir zu Hause.', ru: 'Из-за дождя мы остаёмся дома.', note: 'V2' },
        { de: 'Das Ticket wird gewechselt.', ru: 'Билет меняют.', note: 'Passiv' },
        { de: 'Ich habe einen Flug gebucht.', ru: 'Я забронировал рейс.', note: 'Perfekt' },
        { de: 'Sie können mit dem Zug fahren.', ru: 'Вы можете поехать поездом.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was können Fluggäste machen?',
        ru: 'Что могут сделать авиапассажиры?',
        options: [
          { de: 'Mit dem Bus fahren', ru: 'Поехать на автобусе' },
          { de: 'Auf den Zug umsteigen', ru: 'Пересесть на поезд' },
          { de: 'Bis morgen warten', ru: 'Подождать до завтра' },
        ],
        correct: 1,
        explanation: 'В объявлении сказано: "können Sie auf den Zug umsteigen. Ihr Flugticket wird dann in eine Zugfahrkarte umgetauscht".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Julia-Zug',
      type: 'сообщение',
      text: 'Hallo Julia! Du, ich habe gerade im Internet gesehen, dass unser Zug morgen nach Hamburg später abfährt. Nicht um 14 Uhr, sondern erst um 17 Uhr. Wir haben also Zeit und können uns etwas später treffen. Außerdem fährt der Zug dann nicht von Gleis 12, sondern von Gleis 4. Nur dass du Bescheid weißt. Bis morgen!',
      sentenceTranslations: {
        'Hallo Julia!': { literal: 'Привет Юлия!', literary: 'Привет, Юлия!' },
        'Du, ich habe gerade im Internet gesehen, dass unser Zug morgen nach Hamburg später abfährt.': { literal: 'Ты, я имею прямо в интернете увидено, что наш поезд завтра в Гамбург позже отъезжает', literary: 'Слушай, я только что увидел в интернете, что наш поезд в Гамбург завтра отправляется позже.' },
        'Nicht um 14 Uhr, sondern erst um 17 Uhr.': { literal: 'Не в 14 часов, а только в 17 часов', literary: 'Не в 14:00, а только в 17:00.' },
        'Wir haben also Zeit und können uns etwas später treffen.': { literal: 'Мы имеем итак время и можем нас немного позже встретить', literary: 'У нас есть время, и мы можем встретиться чуть позже.' },
        'Außerdem fährt der Zug dann nicht von Gleis 12, sondern von Gleis 4.': { literal: 'Кроме того едет поезд тогда не от пути 12, а от пути 4', literary: 'Кроме того, поезд отправится не с 12-го, а с 4-го пути.' },
        'Nur dass du Bescheid weißt.': { literal: 'Только что ты в-курсе знаешь', literary: 'Просто чтобы ты знала.' },
        'Bis morgen!': { literal: 'До завтра!', literary: 'До завтра!' },
      },
      vocabulary: [
        { de: 'das Internet', ru: 'интернет', gender: 'neutrum', collocation: 'im Internet sehen', example: 'Du, ich habe gerade im Internet gesehen, dass unser Zug morgen nach Hamburg später abfährt.' },
        { de: 'der Zug', plural: 'die Züge', ru: 'поезд', gender: 'maskulin', collocation: 'der Zug fährt ab', example: 'Du, ich habe gerade im Internet gesehen, dass unser Zug morgen nach Hamburg später abfährt.' },
        { de: 'das Gleis', plural: 'die Gleise', ru: 'путь, платформа', gender: 'neutrum', collocation: 'von Gleis 4', example: 'Außerdem fährt der Zug dann nicht von Gleis 12, sondern von Gleis 4.' },
        { de: 'die Zeit', plural: 'die Zeiten', ru: 'время', gender: 'feminin', collocation: 'Zeit haben', example: 'Wir haben also Zeit und können uns etwas später treffen.' },
        { de: 'abfahren', ru: 'отправляться', type: 'verb', forms: 'fährt ab, fuhr ab, ist abgefahren', example: 'Du, ich habe gerade im Internet gesehen, dass unser Zug morgen nach Hamburg später abfährt.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Wir haben also Zeit und können uns etwas später treffen.' },
        { de: 'gerade', ru: 'только что', type: 'adv', example: 'Du, ich habe gerade im Internet gesehen, dass unser Zug morgen nach Hamburg später abfährt.' },
        { de: 'außerdem', ru: 'кроме того', type: 'adv', example: 'Außerdem fährt der Zug dann nicht von Gleis 12, sondern von Gleis 4.' },
      ],
      practiceSentences: [
        { de: 'Der Zug fährt um 15 Uhr ab.', ru: 'Поезд отправляется в 15:00.', note: 'отделяемая приставка' },
        { de: 'Ich habe es gesehen.', ru: 'Я это видел.', note: 'Perfekt' },
        { de: 'Er kommt nicht heute, sondern morgen.', ru: 'Он придёт не сегодня, а завтра.', note: 'V2' },
        { de: 'Wir fahren von Gleis 2.', ru: 'Мы едем со 2-го пути.', note: 'V2' },
        { de: 'Ich weiß, dass er kommt.', ru: 'Я знаю, что он придёт.', note: 'dass - глагол в конце' },
      ],
      question: {
        de: 'Von welchem Gleis fährt der Zug ab?',
        ru: 'С какого пути отправляется поезд?',
        options: [
          { de: 'Gleis 4', ru: 'Путь 4' },
          { de: 'Gleis 12', ru: 'Путь 12' },
          { de: 'Gleis 17', ru: 'Путь 17' },
        ],
        correct: 0,
        explanation: 'В сообщении говорится: "fährt der Zug dann nicht von Gleis 12, sondern von Gleis 4".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Rosa-Robert',
      type: 'диалог',
      text: 'Hallo Rosa! Hattet ihr einen schönen Sonntag? Hallo Robert! Ja, leider war das Wetter ja nicht so toll. Aber ich hatte endlich mal einen ganz ruhigen Tag ohne Stress. Und abends war ich im Kino und habe einen tollen Film gesehen. Und dein Bruder? Na ja, Thomas hat einen Ausflug gemacht. Wahrscheinlich mit dem Rad? Ja, das wollte er auch. Aber dann hat es angefangen zu regnen. Also ist er doch mit dem Auto an den See gefahren. Aber schwimmen, das war dann nichts für ihn. Zu kalt! Ja, aber das hat seine Freundin Julia nicht gestört. Sie war lange im Wasser. Wart ihr dann zusammen im Kino? Nein, die beiden waren müde. Und Lena konnte auch nicht mit. Sie ist ja krank und hat schon früh geschlafen. Sie hatte so starke Kopfschmerzen, sie konnte noch nicht einmal lesen. Aber nach dem Kino habe ich noch Ali getroffen. Er hat mir von einem tollen Konzert erzählt, dass er besucht hat. Mit den Rock Hip-Hoppers. Tolle Musik! Und hast du auch die Jana getroffen? Nein, diesen Sonntag nicht. Sie war am Wochenende mit ihren Eltern in den Bergen. Skifahren? Nein, es gab noch keinen Schnee. Sie haben eine große Wanderung gemacht. Bald ist Herbst, und dann gibt es bestimmt schon etwas Schnee. Dann wollen sie Skifahren. Darauf freut sie sich jetzt schon.',
      sentenceTranslations: {
        'Hallo Rosa!': { literal: 'Привет Роза!', literary: 'Привет, Роза!' },
        'Hattet ihr einen schönen Sonntag?': { literal: 'Имели вы одно красивое воскресенье?', literary: 'У вас было хорошее воскресенье?' },
        'Hallo Robert!': { literal: 'Привет Роберт!', literary: 'Привет, Роберт!' },
        'Ja, leider war das Wetter ja nicht so toll.': { literal: 'Да, к сожалению была погода же не так прекрасна', literary: 'Да, к сожалению, погода была не очень хорошая.' },
        'Aber ich hatte endlich mal einen ganz ruhigen Tag ohne Stress.': { literal: 'Но я имела наконец раз один совсем спокойный день без стресса', literary: 'Но у меня наконец-то был спокойный день без стресса.' },
        'Und abends war ich im Kino und habe einen tollen Film gesehen.': { literal: 'И вечерами была я в кино и имею один отличный фильм увидено', literary: 'А вечером я была в кино и посмотрела отличный фильм.' },
        'Und dein Bruder?': { literal: 'И твой брат?', literary: 'А твой брат?' },
        'Na ja, Thomas hat einen Ausflug gemacht.': { literal: 'Ну да, Томас имеет одну поездку сделано', literary: 'Ну, Томас совершил поездку.' },
        'Wahrscheinlich mit dem Rad?': { literal: 'Вероятно с велосипедом?', literary: 'Наверное, на велосипеде?' },
        'Ja, das wollte er auch.': { literal: 'Да, это хотел он тоже', literary: 'Да, он тоже хотел.' },
        'Aber dann hat es angefangen zu regnen.': { literal: 'Но тогда имеет это начато дождить', literary: 'Но потом начался дождь.' },
        'Also ist er doch mit dem Auto an den See gefahren.': { literal: 'Итак есть он всё-таки с машиной к озеру поехал', literary: 'Так что он всё-таки поехал на машине к озеру.' },
        'Aber schwimmen, das war dann nichts für ihn.': { literal: 'Но плавать, это было тогда ничего для него', literary: 'Но плавать ему не захотелось.' },
        'Zu kalt!': { literal: 'Слишком холодно!', literary: 'Слишком холодно!' },
        'Ja, aber das hat seine Freundin Julia nicht gestört.': { literal: 'Да, но это имеет его подругу Юлию не помешано', literary: 'Да, но его подругу Юлию это не смутило.' },
        'Sie war lange im Wasser.': { literal: 'Она была долго в воде', literary: 'Она долго была в воде.' },
        'Wart ihr dann zusammen im Kino?': { literal: 'Были вы тогда вместе в кино?', literary: 'Вы потом вместе ходили в кино?' },
        'Nein, die beiden waren müde.': { literal: 'Нет, те оба были уставшие', literary: 'Нет, оба устали.' },
        'Und Lena konnte auch nicht mit.': { literal: 'И Лена могла тоже не с', literary: 'И Лена тоже не смогла.' },
        'Sie ist ja krank und hat schon früh geschlafen.': { literal: 'Она есть же больная и имеет уже рано спано', literary: 'Она ведь болеет и легла спать рано.' },
        'Sie hatte so starke Kopfschmerzen, sie konnte noch nicht einmal lesen.': { literal: 'Она имела так сильные головные-боли, она могла ещё не один-раз читать', literary: 'У неё были такие сильные головные боли, что она даже не могла читать.' },
        'Aber nach dem Kino habe ich noch Ali getroffen.': { literal: 'Но после кино имею я ещё Али встречено', literary: 'Но после кино я ещё встретила Али.' },
        'Er hat mir von einem tollen Konzert erzählt, dass er besucht hat.': { literal: 'Он имеет мне от одного отличного концерта рассказано, что он посетил имеет', literary: 'Он рассказал мне об отличном концерте, который он посетил.' },
        'Mit den Rock Hip-Hoppers.': { literal: 'С Рок Хип-Хопперс', literary: 'С группой Rock Hip-Hoppers.' },
        'Tolle Musik!': { literal: 'Отличная музыка!', literary: 'Отличная музыка!' },
        'Und hast du auch die Jana getroffen?': { literal: 'И имеешь ты тоже Яну встречено?', literary: 'А ты встретила Яну?' },
        'Nein, diesen Sonntag nicht.': { literal: 'Нет, это воскресенье нет', literary: 'Нет, в это воскресенье нет.' },
        'Sie war am Wochenende mit ihren Eltern in den Bergen.': { literal: 'Она была в выходные с её родителями в горах', literary: 'Она была на выходных с родителями в горах.' },
        'Skifahren?': { literal: 'Кататься-на-лыжах?', literary: 'На лыжах?' },
        'Nein, es gab noch keinen Schnee.': { literal: 'Нет, оно давало ещё никакого снега', literary: 'Нет, снега ещё не было.' },
        'Sie haben eine große Wanderung gemacht.': { literal: 'Они имеют одну большую прогулку сделано', literary: 'Они совершили большой поход.' },
        'Bald ist Herbst, und dann gibt es bestimmt schon etwas Schnee.': { literal: 'Скоро есть осень, и тогда даёт это точно уже немного снега', literary: 'Скоро осень, и тогда точно уже будет снег.' },
        'Dann wollen sie Skifahren.': { literal: 'Тогда хотят они кататься-на-лыжах', literary: 'Тогда они хотят кататься на лыжах.' },
        'Darauf freut sie sich jetzt schon.': { literal: 'На-это радуется она себя сейчас уже', literary: 'Она уже сейчас этому радуется.' },
      },
      vocabulary: [
        { de: 'der Sonntag', plural: 'die Sonntage', ru: 'воскресенье', gender: 'maskulin', collocation: 'einen schönen Sonntag', example: 'Hattet ihr einen schönen Sonntag?' },
        { de: 'das Kino', plural: 'die Kinos', ru: 'кинотеатр', gender: 'neutrum', collocation: 'ins Kino gehen', example: 'Und abends war ich im Kino und habe einen tollen Film gesehen.' },
        { de: 'der Ausflug', plural: 'die Ausflüge', ru: 'поездка, экскурсия', gender: 'maskulin', collocation: 'einen Ausflug machen', example: 'Na ja, Thomas hat einen Ausflug gemacht.' },
        { de: 'das Rad', plural: 'die Räder', ru: 'велосипед', gender: 'neutrum', collocation: 'mit dem Rad', example: 'Wahrscheinlich mit dem Rad?' },
        { de: 'der See', plural: 'die Seen', ru: 'озеро', gender: 'maskulin', collocation: 'an den See fahren', example: 'Also ist er doch mit dem Auto an den See gefahren.' },
        { de: 'die Kopfschmerzen', ru: 'головная боль', collocation: 'starke Kopfschmerzen', example: 'Sie hatte so starke Kopfschmerzen, sie konnte noch nicht einmal lesen.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'ein tolles Konzert', example: 'Er hat mir von einem tollen Konzert erzählt, dass er besucht hat.' },
        { de: 'die Wanderung', plural: 'die Wanderungen', ru: 'поход', gender: 'feminin', collocation: 'eine große Wanderung machen', example: 'Sie haben eine große Wanderung gemacht.' },
        { de: 'der Herbst', plural: 'die Herbste', ru: 'осень', gender: 'maskulin', collocation: 'bald ist Herbst', example: 'Bald ist Herbst, und dann gibt es bestimmt schon etwas Schnee.' },
        { de: 'schwimmen', ru: 'плавать', type: 'verb', forms: 'schwimmt, schwamm, ist geschwommen', example: 'Aber schwimmen, das war dann nichts für ihn.' },
        { de: 'erzählen', ru: 'рассказывать', type: 'verb', forms: 'erzählt, erzählte, hat erzählt', example: 'Er hat mir von einem tollen Konzert erzählt, dass er besucht hat.' },
        { de: 'sich freuen auf', ru: 'радоваться (чему-то предстоящему)', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Darauf freut sie sich jetzt schon.' },
      ],
      practiceSentences: [
        { de: 'Wir hatten einen schönen Tag.', ru: 'У нас был хороший день.', note: 'Präteritum' },
        { de: 'Es hat angefangen zu schneien.', ru: 'Начал идти снег.', note: 'Perfekt + zu + Inf' },
        { de: 'Sie ist mit dem Rad gefahren.', ru: 'Она поехала на велосипеде.', note: 'Perfekt с sein' },
        { de: 'Die Freunde waren müde.', ru: 'Друзья были уставшие.', note: 'Präteritum sein' },
        { de: 'Er hat einen Film gesehen.', ru: 'Он посмотрел фильм.', note: 'Perfekt' },
      ],
      question: {
        de: 'Was hat Thomas am Sonntag gemacht?',
        ru: 'Что делал Томас в воскресенье?',
        options: [
          { de: 'Er ist mit dem Rad gefahren', ru: 'Он ездил на велосипеде' },
          { de: 'Er ist mit dem Auto an den See gefahren', ru: 'Он поехал на машине к озеру' },
          { de: 'Er war im Kino', ru: 'Он был в кино' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "das wollte er auch [mit dem Rad]. Aber dann hat es angefangen zu regnen. Also ist er doch mit dem Auto an den See gefahren".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Paula-Einkaufen',
      type: 'диалог',
      text: 'Sag mal Paula, gehen wir Samstag zusammen einkaufen? Musst du nicht trainieren? Doch, ich bin bis zwölf beim Schwimmtraining. Gut, dann treffen wir uns vor der Schwimmhalle. Da gibt es doch eine Bushaltestelle, oder? Ja, aber mit dem Bus dauert es sehr lange bis zum Einkaufszentrum. Komm lieber zum Rathaus, das ist in der Nähe.',
      sentenceTranslations: {
        'Sag mal Paula, gehen wir Samstag zusammen einkaufen?': { literal: 'Скажи-ка Паула, идём мы в субботу вместе за покупками?', literary: 'Слушай, Паула, пойдём в субботу вместе за покупками?' },
        'Musst du nicht trainieren?': { literal: 'Должна ты не тренироваться?', literary: 'Тебе не нужно на тренировку?' },
        'Doch, ich bin bis zwölf beim Schwimmtraining.': { literal: 'Да, я есть до двенадцати при тренировке по плаванию', literary: 'Нужно, я до двенадцати на тренировке по плаванию.' },
        'Gut, dann treffen wir uns vor der Schwimmhalle.': { literal: 'Хорошо, тогда встречаем мы нас перед бассейном', literary: 'Хорошо, тогда встретимся у бассейна.' },
        'Da gibt es doch eine Bushaltestelle, oder?': { literal: 'Там даёт это же одну автобусную-остановку, или?', literary: 'Там же есть автобусная остановка, нет?' },
        'Ja, aber mit dem Bus dauert es sehr lange bis zum Einkaufszentrum.': { literal: 'Да, но с автобусом длится это очень долго до торгового центра', literary: 'Да, но на автобусе очень долго добираться до торгового центра.' },
        'Komm lieber zum Rathaus, das ist in der Nähe.': { literal: 'Приходи лучше к ратуше, это есть в близости', literary: 'Лучше приходи к ратуше, это рядом.' },
      },
      vocabulary: [
        { de: 'das Schwimmtraining', plural: 'die Schwimmtrainings', ru: 'тренировка по плаванию', gender: 'neutrum', collocation: 'beim Schwimmtraining', example: 'Doch, ich bin bis zwölf beim Schwimmtraining.' },
        { de: 'die Schwimmhalle', plural: 'die Schwimmhallen', ru: 'бассейн', gender: 'feminin', collocation: 'vor der Schwimmhalle', example: 'Gut, dann treffen wir uns vor der Schwimmhalle.' },
        { de: 'die Bushaltestelle', plural: 'die Bushaltestellen', ru: 'автобусная остановка', gender: 'feminin', collocation: 'an der Bushaltestelle', example: 'Da gibt es doch eine Bushaltestelle, oder?' },
        { de: 'das Einkaufszentrum', plural: 'die Einkaufszentren', ru: 'торговый центр', gender: 'neutrum', collocation: 'zum Einkaufszentrum', example: 'Ja, aber mit dem Bus dauert es sehr lange bis zum Einkaufszentrum.' },
        { de: 'das Rathaus', plural: 'die Rathäuser', ru: 'ратуша', gender: 'neutrum', collocation: 'zum Rathaus kommen', example: 'Komm lieber zum Rathaus, das ist in der Nähe.' },
        { de: 'einkaufen', ru: 'делать покупки', type: 'verb', forms: 'kauft ein, kaufte ein, hat eingekauft', example: 'Sag mal Paula, gehen wir Samstag zusammen einkaufen?' },
        { de: 'trainieren', ru: 'тренироваться', type: 'verb', forms: 'trainiert, trainierte, hat trainiert', example: 'Musst du nicht trainieren?' },
        { de: 'dauern', ru: 'длиться', type: 'verb', forms: 'dauert, dauerte, hat gedauert', example: 'Ja, aber mit dem Bus dauert es sehr lange bis zum Einkaufszentrum.' },
      ],
      practiceSentences: [
        { de: 'Gehen wir einkaufen?', ru: 'Пойдём за покупками?', note: 'V2 в вопросе' },
        { de: 'Ich muss trainieren.', ru: 'Мне нужно тренироваться.', note: 'модальный + инфинитив' },
        { de: 'Es dauert lange.', ru: 'Это займёт много времени.', note: 'безличное es' },
        { de: 'Komm zum Bahnhof!', ru: 'Приходи к вокзалу!', note: 'императив' },
        { de: 'Das ist in der Nähe.', ru: 'Это рядом.', note: 'V2' },
      ],
      question: {
        de: 'Wo wollen sie sich treffen?',
        ru: 'Где они хотят встретиться?',
        options: [
          { de: 'Vor der Schwimmhalle', ru: 'У бассейна' },
          { de: 'Am Rathaus', ru: 'У ратуши' },
          { de: 'Am Einkaufszentrum', ru: 'У торгового центра' },
        ],
        correct: 1,
        explanation: 'Паула предлагает: "Komm lieber zum Rathaus, das ist in der Nähe".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Kleidungsgeschäft',
      type: 'диалог в магазине',
      text: 'Kann ich Ihnen helfen? Ja, ich suche ein Sommerkleid. Das lange im Schaufenster gefällt mir. Welche Größe haben Sie? Größe 38. Das lange Kleid haben wir nur in 36. Wie finden Sie diesen Rock? Mit einem schwarzen T-Shirt sieht das super aus. Der Rock ist toll, den nehme ich. Aber mit einer weißen Bluse sehr gern.',
      sentenceTranslations: {
        'Kann ich Ihnen helfen?': { literal: 'Могу я вам помочь?', literary: 'Могу я вам помочь?' },
        'Ja, ich suche ein Sommerkleid.': { literal: 'Да, я ищу одно летнее-платье', literary: 'Да, я ищу летнее платье.' },
        'Das lange im Schaufenster gefällt mir.': { literal: 'То длинное в витрине нравится мне', literary: 'Мне нравится то длинное в витрине.' },
        'Welche Größe haben Sie?': { literal: 'Какой размер имеете вы?', literary: 'Какой у вас размер?' },
        'Größe 38.': { literal: 'Размер 38', literary: 'Размер 38.' },
        'Das lange Kleid haben wir nur in 36.': { literal: 'То длинное платье имеем мы только в 36', literary: 'Длинное платье у нас есть только 36-го размера.' },
        'Wie finden Sie diesen Rock?': { literal: 'Как находите вы эту юбку?', literary: 'Как вам эта юбка?' },
        'Mit einem schwarzen T-Shirt sieht das super aus.': { literal: 'С одной чёрной футболкой выглядит это супер', literary: 'С чёрной футболкой смотрится отлично.' },
        'Der Rock ist toll, den nehme ich.': { literal: 'Юбка есть отличная, её беру я', literary: 'Юбка отличная, я её беру.' },
        'Aber mit einer weißen Bluse sehr gern.': { literal: 'Но с одной белой блузкой очень охотно', literary: 'Но лучше с белой блузкой.' },
      },
      vocabulary: [
        { de: 'das Sommerkleid', plural: 'die Sommerkleider', ru: 'летнее платье', gender: 'neutrum', collocation: 'ein Sommerkleid suchen', example: 'Ja, ich suche ein Sommerkleid.' },
        { de: 'das Schaufenster', plural: 'die Schaufenster', ru: 'витрина', gender: 'neutrum', collocation: 'im Schaufenster', example: 'Das lange im Schaufenster gefällt mir.' },
        { de: 'die Größe', plural: 'die Größen', ru: 'размер', gender: 'feminin', collocation: 'welche Größe haben', example: 'Welche Größe haben Sie?' },
        { de: 'der Rock', plural: 'die Röcke', ru: 'юбка', gender: 'maskulin', collocation: 'diesen Rock nehmen', example: 'Der Rock ist toll, den nehme ich.' },
        { de: 'die Bluse', plural: 'die Blusen', ru: 'блузка', gender: 'feminin', collocation: 'eine weiße Bluse', example: 'Aber mit einer weißen Bluse sehr gern.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Das lange im Schaufenster gefällt mir.' },
        { de: 'aussehen', ru: 'выглядеть', type: 'verb', forms: 'sieht aus, sah aus, hat ausgesehen', example: 'Mit einem schwarzen T-Shirt sieht das super aus.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Ja, ich suche ein Sommerkleid.' },
      ],
      practiceSentences: [
        { de: 'Das Kleid gefällt mir.', ru: 'Мне нравится платье.', note: 'gefallen + Dativ' },
        { de: 'Kann ich das anprobieren?', ru: 'Могу я это примерить?', note: 'модальный + инфинитив' },
        { de: 'Das sieht gut aus.', ru: 'Это хорошо выглядит.', note: 'отделяемая приставка' },
        { de: 'Welche Farbe haben Sie?', ru: 'Какой цвет у вас есть?', note: 'V2 в вопросе' },
        { de: 'Den Rock nehme ich.', ru: 'Юбку я возьму.', note: 'V2' },
      ],
      question: {
        de: 'Was kauft die Kundin?',
        ru: 'Что покупает покупательница?',
        options: [
          { de: 'Ein langes Kleid', ru: 'Длинное платье' },
          { de: 'Einen Rock mit einer weißen Bluse', ru: 'Юбку с белой блузкой' },
          { de: 'Ein schwarzes T-Shirt', ru: 'Чёрную футболку' },
        ],
        correct: 1,
        explanation: 'Покупательница говорит: "Der Rock ist toll, den nehme ich. Aber mit einer weißen Bluse sehr gern".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Obstgeschäft',
      type: 'диалог',
      text: 'Entschuldigung, ist das hier ein Obstgeschäft? Wir verkaufen auch Obst, aber eigentlich ist dies ein Supermarkt. Bei uns bekommen Sie alles. Nein, ich suche ein ganz besonderes Obstgeschäft. Es heißt „Exotische Früchte". Was ist denn das da drüben auf der anderen Straßenseite? Ein italienisches Geschäft. Da bekommen Sie italienischen Wein und Nudeln und so weiter. Danke sehr!',
      sentenceTranslations: {
        'Entschuldigung, ist das hier ein Obstgeschäft?': { literal: 'Извинение, есть это здесь один фруктовый магазин?', literary: 'Извините, это фруктовый магазин?' },
        'Wir verkaufen auch Obst, aber eigentlich ist dies ein Supermarkt.': { literal: 'Мы продаём тоже фрукты, но собственно есть это один супермаркет', literary: 'Мы тоже продаём фрукты, но вообще-то это супермаркет.' },
        'Bei uns bekommen Sie alles.': { literal: 'У нас получаете вы всё', literary: 'У нас вы найдёте всё.' },
        'Nein, ich suche ein ganz besonderes Obstgeschäft.': { literal: 'Нет, я ищу один совсем особенный фруктовый магазин', literary: 'Нет, я ищу один особенный фруктовый магазин.' },
        'Es heißt „Exotische Früchte".': { literal: 'Оно называется "Экзотические фрукты"', literary: 'Он называется "Экзотические фрукты".' },
        'Was ist denn das da drüben auf der anderen Straßenseite?': { literal: 'Что есть же то там напротив на другой стороне улицы?', literary: 'А что это там на другой стороне улицы?' },
        'Ein italienisches Geschäft.': { literal: 'Один итальянский магазин', literary: 'Итальянский магазин.' },
        'Da bekommen Sie italienischen Wein und Nudeln und so weiter.': { literal: 'Там получаете вы итальянское вино и макароны и так далее', literary: 'Там продают итальянское вино, макароны и так далее.' },
        'Danke sehr!': { literal: 'Спасибо очень!', literary: 'Большое спасибо!' },
      },
      vocabulary: [
        { de: 'das Obstgeschäft', plural: 'die Obstgeschäfte', ru: 'фруктовый магазин', gender: 'neutrum', collocation: 'ein Obstgeschäft suchen', example: 'Entschuldigung, ist das hier ein Obstgeschäft?' },
        { de: 'das Obst', ru: 'фрукты', gender: 'neutrum', collocation: 'Obst verkaufen', example: 'Wir verkaufen auch Obst, aber eigentlich ist dies ein Supermarkt.' },
        { de: 'der Supermarkt', plural: 'die Supermärkte', ru: 'супермаркет', gender: 'maskulin', collocation: 'ein Supermarkt', example: 'Wir verkaufen auch Obst, aber eigentlich ist dies ein Supermarkt.' },
        { de: 'die Straßenseite', plural: 'die Straßenseiten', ru: 'сторона улицы', gender: 'feminin', collocation: 'auf der anderen Straßenseite', example: 'Was ist denn das da drüben auf der anderen Straßenseite?' },
        { de: 'das Geschäft', plural: 'die Geschäfte', ru: 'магазин', gender: 'neutrum', collocation: 'ein italienisches Geschäft', example: 'Ein italienisches Geschäft.' },
        { de: 'verkaufen', ru: 'продавать', type: 'verb', forms: 'verkauft, verkaufte, hat verkauft', example: 'Wir verkaufen auch Obst, aber eigentlich ist dies ein Supermarkt.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Bei uns bekommen Sie alles.' },
        { de: 'heißen', ru: 'называться', type: 'verb', forms: 'heißt, hieß, hat geheißen', example: 'Es heißt „Exotische Früchte".' },
        { de: 'eigentlich', ru: 'вообще-то', type: 'adv', example: 'Wir verkaufen auch Obst, aber eigentlich ist dies ein Supermarkt.' },
      ],
      practiceSentences: [
        { de: 'Ist das ein Supermarkt?', ru: 'Это супермаркет?', note: 'V1 в вопросе' },
        { de: 'Bei uns gibt es Obst.', ru: 'У нас есть фрукты.', note: 'es gibt + Akk' },
        { de: 'Das Geschäft heißt "Früchte".', ru: 'Магазин называется "Фрукты".', note: 'V2' },
        { de: 'Sie bekommen alles hier.', ru: 'Вы найдёте здесь всё.', note: 'V2' },
        { de: 'Was ist das da drüben?', ru: 'Что это там?', note: 'V2 в вопросе' },
      ],
      question: {
        de: 'Was ist auf der anderen Straßenseite?',
        ru: 'Что находится на другой стороне улицы?',
        options: [
          { de: 'Ein Obstgeschäft "Exotische Früchte"', ru: 'Фруктовый магазин "Экзотические фрукты"' },
          { de: 'Ein italienisches Geschäft', ru: 'Итальянский магазин' },
          { de: 'Ein Supermarkt', ru: 'Супермаркет' },
        ],
        correct: 1,
        explanation: 'На вопрос "Was ist denn das da drüben auf der anderen Straßenseite?" отвечают: "Ein italienisches Geschäft".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Frau Krause-Arzt',
      type: 'диалог у врача',
      text: 'Guten Tag, Frau Krause! Wie geht es Ihnen? Haben Sie sich wieder beim Sport verletzt? Tag, Dr. Polle. Kann ich in die Sprechstunde kommen? Mir geht es nicht gut. Ich habe starke Bauchschmerzen und gestern tat mir auch der Kopf weh. Oh, das tut mir leid. Haben Sie auch Fieber? Zum Glück nicht. Natürlich können Sie sofort zu mir kommen.',
      sentenceTranslations: {
        'Guten Tag, Frau Krause!': { literal: 'Добрый день, госпожа Краузе!', literary: 'Добрый день, госпожа Краузе!' },
        'Wie geht es Ihnen?': { literal: 'Как идёт оно вам?', literary: 'Как вы себя чувствуете?' },
        'Haben Sie sich wieder beim Sport verletzt?': { literal: 'Имеете вы себя снова при спорте поранено?', literary: 'Вы опять травмировались на спорте?' },
        'Tag, Dr. Polle.': { literal: 'День, доктор Полле', literary: 'Добрый день, доктор Полле.' },
        'Tag, Dr.': { literal: 'День, доктор', literary: 'Добрый день, доктор' },
        'Polle.': { literal: 'Полле', literary: 'Полле.' },
        'Kann ich in die Sprechstunde kommen?': { literal: 'Могу я в приёмные часы прийти?', literary: 'Могу я прийти на приём?' },
        'Mir geht es nicht gut.': { literal: 'Мне идёт это не хорошо', literary: 'Мне плохо.' },
        'Ich habe starke Bauchschmerzen und gestern tat mir auch der Kopf weh.': { literal: 'Я имею сильные живот-боли и вчера делал мне тоже голова больно', literary: 'У меня сильные боли в животе, и вчера ещё и голова болела.' },
        'Oh, das tut mir leid.': { literal: 'О, это делает мне жалко', literary: 'Ох, мне жаль.' },
        'Haben Sie auch Fieber?': { literal: 'Имеете вы также температуру?', literary: 'У вас есть температура?' },
        'Zum Glück nicht.': { literal: 'К счастью нет', literary: 'К счастью, нет.' },
        'Natürlich können Sie sofort zu mir kommen.': { literal: 'Конечно можете вы сразу ко мне прийти', literary: 'Конечно, приходите сразу.' },
      },
      vocabulary: [
        { de: 'die Sprechstunde', plural: 'die Sprechstunden', ru: 'приёмные часы', gender: 'feminin', collocation: 'in die Sprechstunde kommen', example: 'Kann ich in die Sprechstunde kommen?' },
        { de: 'die Bauchschmerzen', ru: 'боль в животе', collocation: 'starke Bauchschmerzen', example: 'Ich habe starke Bauchschmerzen und gestern tat mir auch der Kopf weh.' },
        { de: 'das Fieber', ru: 'температура', gender: 'neutrum', collocation: 'Fieber haben', example: 'Haben Sie auch Fieber?' },
        { de: 'der Sport', ru: 'спорт', gender: 'maskulin', collocation: 'beim Sport', example: 'Haben Sie sich wieder beim Sport verletzt?' },
        { de: 'sich verletzen', ru: 'травмироваться', type: 'verb', forms: 'verletzt sich, verletzte sich, hat sich verletzt', example: 'Haben Sie sich wieder beim Sport verletzt?' },
        { de: 'wehtun', ru: 'болеть', type: 'verb', forms: 'tut weh, tat weh, hat wehgetan', example: 'Ich habe starke Bauchschmerzen und gestern tat mir auch der Kopf weh.' },
        { de: 'sofort', ru: 'сразу', type: 'adv', example: 'Natürlich können Sie sofort zu mir kommen.' },
      ],
      practiceSentences: [
        { de: 'Wie geht es dir?', ru: 'Как дела?', note: 'es geht + Dativ' },
        { de: 'Ich habe mich verletzt.', ru: 'Я поранился.', note: 'Perfekt возвратного глагола' },
        { de: 'Kann ich morgen kommen?', ru: 'Можно мне прийти завтра?', note: 'модальный + инфинитив' },
        { de: 'Mir tut der Kopf weh.', ru: 'У меня болит голова.', note: 'wehtun + Dativ' },
        { de: 'Sie haben Fieber.', ru: 'У вас температура.', note: 'V2' },
      ],
      question: {
        de: 'Was hat Frau Krause?',
        ru: 'Что у госпожи Краузе?',
        options: [
          { de: 'Eine Sportverletzung', ru: 'Спортивная травма' },
          { de: 'Bauchschmerzen', ru: 'Боль в животе' },
          { de: 'Fieber', ru: 'Температура' },
        ],
        correct: 1,
        explanation: 'Фрау Краузе говорит: "Ich habe starke Bauchschmerzen" и на вопрос о температуре отвечает "Zum Glück nicht".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Marco-Essen',
      type: 'диалог',
      text: 'Was isst du am liebsten, Marco? Pizza? Also, fast alle meine Freunde wollen immer Pizza essen gehen. Ich mag aber lieber Nudeln mit Tomatensoße. Die gibt es ja auch überall. Und du? Immer Pizza oder Nudeln? Das ist so langweilig! Ich esse am liebsten Fisch und dazu Gemüse. Ich glaube, das ist auch viel gesünder.',
      sentenceTranslations: {
        'Was isst du am liebsten, Marco?': { literal: 'Что ешь ты наиболее охотно, Марко?', literary: 'Что ты больше всего любишь есть, Марко?' },
        'Pizza?': { literal: 'Пицца?', literary: 'Пиццу?' },
        'Also, fast alle meine Freunde wollen immer Pizza essen gehen.': { literal: 'Итак, почти все мои друзья хотят всегда пиццу есть идти', literary: 'Ну, почти все мои друзья всегда хотят пойти есть пиццу.' },
        'Ich mag aber lieber Nudeln mit Tomatensoße.': { literal: 'Я люблю но охотнее макароны с томатным соусом', literary: 'Но я больше люблю макароны с томатным соусом.' },
        'Die gibt es ja auch überall.': { literal: 'Их даёт это же также везде', literary: 'Их ведь тоже можно найти везде.' },
        'Und du?': { literal: 'И ты?', literary: 'А ты?' },
        'Immer Pizza oder Nudeln?': { literal: 'Всегда пицца или макароны?', literary: 'Всё время пицца или макароны?' },
        'Das ist so langweilig!': { literal: 'Это есть так скучно!', literary: 'Это так скучно!' },
        'Ich esse am liebsten Fisch und dazu Gemüse.': { literal: 'Я ем наиболее охотно рыбу и к-этому овощи', literary: 'Я больше всего люблю рыбу с овощами.' },
        'Ich glaube, das ist auch viel gesünder.': { literal: 'Я полагаю, это есть также намного здоровее', literary: 'Думаю, это намного полезнее.' },
      },
      vocabulary: [
        { de: 'die Pizza', plural: 'die Pizzas', ru: 'пицца', gender: 'feminin', collocation: 'Pizza essen', example: 'Also, fast alle meine Freunde wollen immer Pizza essen gehen.' },
        { de: 'die Nudeln', ru: 'макароны', collocation: 'Nudeln mit Tomatensoße', example: 'Ich mag aber lieber Nudeln mit Tomatensoße.' },
        { de: 'die Tomatensoße', plural: 'die Tomatensoßen', ru: 'томатный соус', gender: 'feminin', collocation: 'mit Tomatensoße', example: 'Ich mag aber lieber Nudeln mit Tomatensoße.' },
        { de: 'der Fisch', plural: 'die Fische', ru: 'рыба', gender: 'maskulin', collocation: 'Fisch essen', example: 'Ich esse am liebsten Fisch und dazu Gemüse.' },
        { de: 'das Gemüse', ru: 'овощи', gender: 'neutrum', collocation: 'Fisch und Gemüse', example: 'Ich esse am liebsten Fisch und dazu Gemüse.' },
        { de: 'mögen', ru: 'любить', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Ich mag aber lieber Nudeln mit Tomatensoße.' },
        { de: 'glauben', ru: 'думать, полагать', type: 'verb', forms: 'glaubt, glaubte, hat geglaubt', example: 'Ich glaube, das ist auch viel gesünder.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Das ist so langweilig!' },
        { de: 'gesund', ru: 'здоровый, полезный', type: 'adj', example: 'Ich glaube, das ist auch viel gesünder.' },
      ],
      practiceSentences: [
        { de: 'Was isst du gern?', ru: 'Что ты любишь есть?', note: 'V2 в вопросе' },
        { de: 'Ich mag Pizza.', ru: 'Я люблю пиццу.', note: 'V2' },
        { de: 'Wir gehen essen.', ru: 'Мы идём поесть.', note: 'глагол движения + инфинитив' },
        { de: 'Das ist gesünder.', ru: 'Это полезнее.', note: 'V2' },
        { de: 'Ich esse am liebsten Fisch.', ru: 'Больше всего я люблю рыбу.', note: 'V2' },
      ],
      question: {
        de: 'Was isst die zweite Person am liebsten?',
        ru: 'Что больше всего любит есть второй человек?',
        options: [
          { de: 'Pizza', ru: 'Пиццу' },
          { de: 'Nudeln mit Tomatensoße', ru: 'Макароны с томатным соусом' },
          { de: 'Fisch und Gemüse', ru: 'Рыбу с овощами' },
        ],
        correct: 2,
        explanation: 'Второй человек говорит: "Ich esse am liebsten Fisch und dazu Gemüse".'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Lara-Wohnung',
      type: 'интервью',
      text: 'Lara, ich darf Sie doch mit Ihrem Vornamen anreden? Ja, klar! Also Lara, wir sprechen ja heute darüber, wie man eine Wohnung finden kann. Ja, Sie haben Glück gehabt und eine schöne Wohnung gefunden. Ja, ich hatte Glück. Ich habe seit letzten Monat eine Wohnung und bin sehr zufrieden. Und wie haben Sie die Wohnung gefunden? Zuerst habe ich natürlich die Wohnungsanzeigen in der Zeitung gelesen und auch im Internet. Da kann man auch Wohnungen finden. Ich hatte auch viele Termine und habe mir viele Wohnungen angesehen. Aber immer waren andere Interessenten schneller. Und dann habe ich Freunde und Kolleginnen gefragt. Sie hatten auch Tipps für mich – schöne Wohnungen, aber die Wohnungen waren immer zu teuer. Und dann, dann beim Einkaufen in einem Supermarkt habe ich einen Zettel gesehen: „Drei-Zimmer-Wohnung, billig, sofort zu vermieten". Ich habe dort angerufen, hatte einen Termin. Die Vermieterin war sehr nett und ich war die erste. Es hat geklappt! Und wie ist die Wohnung? Schön und groß? Leider ist sie etwas dunkel. Aber sie liegt im Zentrum. Das ist auch wichtig für mich. Und müssen Sie noch viel renovieren? Nein, alles ist fertig. Ich muss nur noch Tische und Stühle kaufen. Aber das hat Zeit. Also für unsere Hörerinnen und Hörer unser Tipp: Wenn Sie eine Wohnung suchen, immer Augen und Ohren offen halten, überall schauen, ob es Angebote gibt.',
      sentenceTranslations: {
        'Lara, ich darf Sie doch mit Ihrem Vornamen anreden?': { literal: 'Лара, я смею вас же с вашим именем обращаться?', literary: 'Лара, я могу обращаться к вам по имени?' },
        'Ja, klar!': { literal: 'Да, ясно!', literary: 'Да, конечно!' },
        'Also Lara, wir sprechen ja heute darüber, wie man eine Wohnung finden kann.': { literal: 'Итак Лара, мы говорим же сегодня о-том, как можно одну квартиру найти может', literary: 'Итак, Лара, мы сегодня поговорим о том, как найти квартиру.' },
        'Ja, Sie haben Glück gehabt und eine schöne Wohnung gefunden.': { literal: 'Да, вы имеете удачу имено и одну красивую квартиру найдено', literary: 'Да, вам повезло, и вы нашли хорошую квартиру.' },
        'Ja, ich hatte Glück.': { literal: 'Да, я имела удачу', literary: 'Да, мне повезло.' },
        'Ich habe seit letzten Monat eine Wohnung und bin sehr zufrieden.': { literal: 'Я имею с прошлого месяца одну квартиру и есть очень довольна', literary: 'У меня с прошлого месяца есть квартира, и я очень довольна.' },
        'Und wie haben Sie die Wohnung gefunden?': { literal: 'И как имеете вы квартиру найдено?', literary: 'И как вы нашли квартиру?' },
        'Zuerst habe ich natürlich die Wohnungsanzeigen in der Zeitung gelesen und auch im Internet.': { literal: 'Сначала имею я конечно объявления-о-квартирах в газете читано и также в интернете', literary: 'Сначала я, конечно, читала объявления о квартирах в газете и в интернете.' },
        'Da kann man auch Wohnungen finden.': { literal: 'Там может человек тоже квартиры найти', literary: 'Там тоже можно найти квартиры.' },
        'Ich hatte auch viele Termine und habe mir viele Wohnungen angesehen.': { literal: 'Я имела также много встреч и имею мне много квартир осмотрено', literary: 'У меня было много встреч, и я осмотрела много квартир.' },
        'Aber immer waren andere Interessenten schneller.': { literal: 'Но всегда были другие желающие быстрее', literary: 'Но другие желающие всегда оказывались быстрее.' },
        'Und dann habe ich Freunde und Kolleginnen gefragt.': { literal: 'И тогда имею я друзей и коллег спрошено', literary: 'Потом я спросила друзей и коллег.' },
        'Sie hatten auch Tipps für mich – schöne Wohnungen, aber die Wohnungen waren immer zu teuer.': { literal: 'Они имели тоже советы для меня - красивые квартиры, но квартиры были всегда слишком дорогие', literary: 'У них тоже были советы для меня - хорошие квартиры, но всегда слишком дорогие.' },
        'Und dann, dann beim Einkaufen in einem Supermarkt habe ich einen Zettel gesehen: „Drei-Zimmer-Wohnung, billig, sofort zu vermieten".': { literal: 'И тогда, тогда при покупках в одном супермаркете имею я одну записку увидено: "Трёх-комнатная-квартира, дёшево, сразу для-сдачи"', literary: 'И тогда, во время покупок в супермаркете, я увидела объявление: "Трёхкомнатная квартира, недорого, сдаётся сразу".' },
        'Ich habe dort angerufen, hatte einen Termin.': { literal: 'Я имею туда позвонено, имела одну встречу', literary: 'Я позвонила, назначили встречу.' },
        'Die Vermieterin war sehr nett und ich war die erste.': { literal: 'Арендодательница была очень милая и я была первая', literary: 'Хозяйка была очень приятная, и я была первой.' },
        'Es hat geklappt!': { literal: 'Это имеет сработано!', literary: 'Всё получилось!' },
        'Und wie ist die Wohnung?': { literal: 'И как есть квартира?', literary: 'И какая квартира?' },
        'Schön und groß?': { literal: 'Красивая и большая?', literary: 'Красивая и большая?' },
        'Leider ist sie etwas dunkel.': { literal: 'К сожалению есть она немного тёмная', literary: 'К сожалению, она немного тёмная.' },
        'Aber sie liegt im Zentrum.': { literal: 'Но она лежит в центре', literary: 'Но она находится в центре.' },
        'Das ist auch wichtig für mich.': { literal: 'Это есть тоже важно для меня', literary: 'Это тоже важно для меня.' },
        'Und müssen Sie noch viel renovieren?': { literal: 'И должны вы ещё много ремонтировать?', literary: 'И вам нужно ещё много ремонтировать?' },
        'Nein, alles ist fertig.': { literal: 'Нет, всё есть готово', literary: 'Нет, всё готово.' },
        'Ich muss nur noch Tische und Stühle kaufen.': { literal: 'Я должна только ещё столы и стулья купить', literary: 'Мне нужно ещё только купить столы и стулья.' },
        'Aber das hat Zeit.': { literal: 'Но это имеет время', literary: 'Но это не к спеху.' },
        'Also für unsere Hörerinnen und Hörer unser Tipp: Wenn Sie eine Wohnung suchen, immer Augen und Ohren offen halten, überall schauen, ob es Angebote gibt.': { literal: 'Итак для наших слушательниц и слушателей наш совет: если вы одну квартиру ищете, всегда глаза и уши открытыми держать, везде смотреть, ли есть предложения даёт', literary: 'Итак, наш совет слушателям: если вы ищете квартиру, держите глаза и уши открытыми, смотрите везде, есть ли предложения.' },
      },
      vocabulary: [
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'eine Wohnung finden', example: 'Also Lara, wir sprechen ja heute darüber, wie man eine Wohnung finden kann.' },
        { de: 'die Wohnungsanzeige', plural: 'die Wohnungsanzeigen', ru: 'объявление о квартире', gender: 'feminin', collocation: 'Wohnungsanzeigen lesen', example: 'Zuerst habe ich natürlich die Wohnungsanzeigen in der Zeitung gelesen und auch im Internet.' },
        { de: 'die Zeitung', plural: 'die Zeitungen', ru: 'газета', gender: 'feminin', collocation: 'in der Zeitung', example: 'Zuerst habe ich natürlich die Wohnungsanzeigen in der Zeitung gelesen und auch im Internet.' },
        { de: 'der Interessent', plural: 'die Interessenten', ru: 'желающий, претендент', gender: 'maskulin', collocation: 'andere Interessenten', example: 'Aber immer waren andere Interessenten schneller.' },
        { de: 'der Zettel', plural: 'die Zettel', ru: 'записка, объявление', gender: 'maskulin', collocation: 'einen Zettel sehen', example: 'Und dann, dann beim Einkaufen in einem Supermarkt habe ich einen Zettel gesehen: „Drei-Zimmer-Wohnung, billig, sofort zu vermieten".' },
        { de: 'die Vermieterin', plural: 'die Vermieterinnen', ru: 'арендодательница', gender: 'feminin', collocation: 'die Vermieterin war nett', example: 'Die Vermieterin war sehr nett und ich war die erste.' },
        { de: 'das Zentrum', plural: 'die Zentren', ru: 'центр', gender: 'neutrum', collocation: 'im Zentrum liegen', example: 'Aber sie liegt im Zentrum.' },
        { de: 'der Tisch', plural: 'die Tische', ru: 'стол', gender: 'maskulin', collocation: 'Tische kaufen', example: 'Ich muss nur noch Tische und Stühle kaufen.' },
        { de: 'der Stuhl', plural: 'die Stühle', ru: 'стул', gender: 'maskulin', collocation: 'Stühle kaufen', example: 'Ich muss nur noch Tische und Stühle kaufen.' },
        { de: 'finden', ru: 'находить', type: 'verb', forms: 'findet, fand, hat gefunden', example: 'Also Lara, wir sprechen ja heute darüber, wie man eine Wohnung finden kann.' },
        { de: 'vermieten', ru: 'сдавать в аренду', type: 'verb', forms: 'vermietet, vermietete, hat vermietet', example: 'Und dann, dann beim Einkaufen in einem Supermarkt habe ich einen Zettel gesehen: „Drei-Zimmer-Wohnung, billig, sofort zu vermieten".' },
        { de: 'klappen', ru: 'получаться', type: 'verb', forms: 'klappt, klappte, hat geklappt', example: 'Es hat geklappt!' },
        { de: 'renovieren', ru: 'ремонтировать', type: 'verb', forms: 'renoviert, renovierte, hat renoviert', example: 'Und müssen Sie noch viel renovieren?' },
        { de: 'zufrieden', ru: 'довольный', type: 'adj', example: 'Ich habe seit letzten Monat eine Wohnung und bin sehr zufrieden.' },
        { de: 'dunkel', ru: 'тёмный', type: 'adj', example: 'Leider ist sie etwas dunkel.' },
        { de: 'fertig', ru: 'готовый', type: 'adj', example: 'Nein, alles ist fertig.' },
      ],
      practiceSentences: [
        { de: 'Ich habe eine Wohnung gefunden.', ru: 'Я нашёл квартиру.', note: 'Perfekt' },
        { de: 'Die Wohnung liegt im Zentrum.', ru: 'Квартира находится в центре.', note: 'V2' },
        { de: 'Ich muss noch Möbel kaufen.', ru: 'Мне ещё нужно купить мебель.', note: 'модальный + инфинитив' },
        { de: 'Es hat nicht geklappt.', ru: 'Не получилось.', note: 'Perfekt безличного' },
        { de: 'Seit einem Monat wohne ich hier.', ru: 'Месяц я живу здесь.', note: 'V2 после обстоятельства' },
      ],
      question: {
        de: 'Wie hat Lara die Wohnung gefunden?',
        ru: 'Как Лара нашла квартиру?',
        options: [
          { de: 'Durch die Zeitung', ru: 'Через газету' },
          { de: 'Durch einen Zettel im Supermarkt', ru: 'Через объявление в супермаркете' },
          { de: 'Durch Freunde', ru: 'Через друзей' },
        ],
        correct: 1,
        explanation: 'Лара рассказывает: "beim Einkaufen in einem Supermarkt habe ich einen Zettel gesehen: Drei-Zimmer-Wohnung, billig, sofort zu vermieten".'
      }
    },
  ],

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
        map[de] = typeof t.sentenceTranslations[de] === 'string' ? t.sentenceTranslations[de] : (t.sentenceTranslations[de].literary || '');
      }
    });
    return map;
  },

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

  /* ─── Промты ─── */
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табы "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Verkehrshinweise).',
    },
  },
};

LESSONS.push(LESSON_25);
