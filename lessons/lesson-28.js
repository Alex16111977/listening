/* ═══════════════════════════════════════════════════════════
   Lesson 28 — Goethe Zertifikat A2 Hören Teil 1-4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_28 = {
  id: 'lesson-28',
  number: 28,
  title: 'Goethe A2 Hören — Wetter, Radio, Parkplatz, Arzt, Mohammed',
  subtitle: 'Und hier das Wetter. Endlich fängt der Frühling an!',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-28',
  videoUrl: 'https://www.youtube.com/watch?v=e31Urm5lgIg',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Und hier das Wetter. Endlich fängt der Frühling an! Heute am Donnerstag war es noch etwas kälter, aber morgen können wir uns auf Temperaturen von 15 bis 21° freuen. Und so bleibt es auch am Samstag und am Sonntag sonnig und warm. Erst ab Montag kann es wieder etwas regnen.',
      sentenceTranslations: {
        'Und hier das Wetter.': { literal: 'И здесь погода', literary: 'А теперь прогноз погоды.' },
        'Endlich fängt der Frühling an!': { literal: 'Наконец начинается весна', literary: 'Наконец-то начинается весна!' },
        'Heute am Donnerstag war es noch etwas kälter, aber morgen können wir uns auf Temperaturen von 15 bis 21° freuen.': { literal: 'Сегодня в четверг было ещё немного холоднее, но завтра можем мы себя на температуры от 15 до 21° радовать', literary: 'Сегодня, в четверг, было ещё прохладно, но завтра нас ждёт температура от 15 до 21 градуса.' },
        'Und so bleibt es auch am Samstag und am Sonntag sonnig und warm.': { literal: 'И так остаётся оно также в субботу и в воскресенье солнечным и тёплым', literary: 'И в субботу, и в воскресенье останется солнечно и тепло.' },
        'Erst ab Montag kann es wieder etwas regnen.': { literal: 'Только с понедельника может оно снова немного дождить', literary: 'Только с понедельника может снова пойти дождь.' },
      },
      vocabulary: [
        { de: 'das Wetter', ru: 'погода', gender: 'neutrum', example: 'Und hier das Wetter.' },
        { de: 'der Frühling', plural: 'die Frühlinge', ru: 'весна', gender: 'maskulin', collocation: 'der Frühling fängt an', example: 'Endlich fängt der Frühling an!' },
        { de: 'der Donnerstag', plural: 'die Donnerstage', ru: 'четверг', gender: 'maskulin', collocation: 'am Donnerstag', example: 'Heute am Donnerstag war es noch etwas kälter.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'Temperaturen von 15°', example: 'Morgen können wir uns auf Temperaturen von 15 bis 21° freuen.' },
        { de: 'anfangen', ru: 'начинаться', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Endlich fängt der Frühling an!' },
        { de: 'sich freuen auf', ru: 'радоваться чему-то', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Morgen können wir uns auf Temperaturen von 15 bis 21° freuen.' },
        { de: 'bleiben', ru: 'оставаться', type: 'verb', forms: 'bleibt, blieb, ist geblieben', example: 'Und so bleibt es auch am Samstag und am Sonntag sonnig und warm.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Erst ab Montag kann es wieder etwas regnen.' },
        { de: 'sonnig', ru: 'солнечный', type: 'adj', example: 'Und so bleibt es auch am Samstag und am Sonntag sonnig und warm.' },
        { de: 'kalt', ru: 'холодный', type: 'adj', example: 'Heute am Donnerstag war es noch etwas kälter.' },
      ],
      practiceSentences: [
        { de: 'Der Sommer fängt im Juni an.', ru: 'Лето начинается в июне.', note: 'отделяемая приставка' },
        { de: 'Es kann morgen schneien.', ru: 'Завтра может пойти снег.', note: 'модальный + инфинитив' },
        { de: 'Wir freuen uns auf das Wochenende.', ru: 'Мы радуемся выходным.', note: 'возвратный глагол' },
        { de: 'Am Freitag bleibt es kalt.', ru: 'В пятницу останется холодно.', note: 'V2' },
        { de: 'Ab März wird es wärmer.', ru: 'С марта становится теплее.', note: 'werden + прилагательное' },
      ],
      question: {
        de: 'Wie ist das Wetter am Wochenende?',
        ru: 'Какая погода будет в выходные?',
        options: [
          { de: 'Es regnet am Samstag und Sonntag', ru: 'В субботу и воскресенье будет дождь' },
          { de: 'Es ist sonnig und warm', ru: 'Будет солнечно и тепло' },
          { de: 'Es ist kälter als heute', ru: 'Будет холоднее, чем сегодня' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "Und so bleibt es auch am Samstag und am Sonntag sonnig und warm."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Radio-Spiel',
      type: 'радио-игра',
      text: 'Radio Pop und Rock, Ihr Musiksender! Heute fährt ein Auto durch Frankfurt. Auf diesem Auto ist ein großes Radio. An diesem Radio ist ein großes Schild. Ihre Aufgabe: Rufen Sie uns an! Sagen Sie uns, was auf dem Schild steht, und Sie können gewinnen! Und was? Fünf Karten für die Radio Pop und Rock Clubdisco!',
      sentenceTranslations: {
        'Radio Pop und Rock, Ihr Musiksender!': { literal: 'Радио Поп и Рок, ваша музыкальная станция', literary: 'Радио «Поп и Рок» — ваша музыкальная станция!' },
        'Heute fährt ein Auto durch Frankfurt.': { literal: 'Сегодня едет машина через Франкфурт', literary: 'Сегодня по Франкфурту ездит автомобиль.' },
        'Auf diesem Auto ist ein großes Radio.': { literal: 'На этой машине есть большое радио', literary: 'На этом автомобиле установлено большое радио.' },
        'An diesem Radio ist ein großes Schild.': { literal: 'На этом радио есть большая табличка', literary: 'На радио прикреплена большая табличка.' },
        'Ihre Aufgabe: Rufen Sie uns an!': { literal: 'Ваше задание: позвоните нам', literary: 'Ваша задача: позвоните нам!' },
        'Sagen Sie uns, was auf dem Schild steht, und Sie können gewinnen!': { literal: 'Скажите нам, что на табличке стоит, и вы можете выиграть', literary: 'Скажите, что написано на табличке, и вы сможете выиграть!' },
        'Und was?': { literal: 'И что', literary: 'И что же?' },
        'Fünf Karten für die Radio Pop und Rock Clubdisco!': { literal: 'Пять билетов на Радио Поп и Рок клубную дискотеку', literary: 'Пять билетов на клубную дискотеку «Радио Поп и Рок»!' },
      },
      vocabulary: [
        { de: 'der Musiksender', plural: 'die Musiksender', ru: 'музыкальная станция', gender: 'maskulin', collocation: 'Ihr Musiksender', example: 'Radio Pop und Rock, Ihr Musiksender!' },
        { de: 'das Radio', plural: 'die Radios', ru: 'радио', gender: 'neutrum', collocation: 'ein großes Radio', example: 'Auf diesem Auto ist ein großes Radio.' },
        { de: 'das Schild', plural: 'die Schilder', ru: 'табличка, вывеска', gender: 'neutrum', collocation: 'auf dem Schild steht', example: 'An diesem Radio ist ein großes Schild.' },
        { de: 'die Aufgabe', plural: 'die Aufgaben', ru: 'задание', gender: 'feminin', collocation: 'Ihre Aufgabe', example: 'Ihre Aufgabe: Rufen Sie uns an!' },
        { de: 'die Karte', plural: 'die Karten', ru: 'билет', gender: 'feminin', collocation: 'fünf Karten', example: 'Fünf Karten für die Radio Pop und Rock Clubdisco!' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Rufen Sie uns an!' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Sie können gewinnen!' },
        { de: 'stehen', ru: 'стоять, быть написанным', type: 'verb', forms: 'steht, stand, hat gestanden', example: 'Sagen Sie uns, was auf dem Schild steht.' },
        { de: 'fahren', ru: 'ехать', type: 'verb', forms: 'fährt, fuhr, ist gefahren', example: 'Heute fährt ein Auto durch Frankfurt.' },
      ],
      practiceSentences: [
        { de: 'Das Taxi fährt durch die Stadt.', ru: 'Такси едет по городу.', note: 'V2' },
        { de: 'Rufen Sie mich morgen an!', ru: 'Позвоните мне завтра!', note: 'отделяемая приставка' },
        { de: 'Ich kann zwei Tickets gewinnen.', ru: 'Я могу выиграть два билета.', note: 'модальный + инфинитив' },
        { de: 'Was steht auf dem Plakat?', ru: 'Что написано на плакате?', note: 'V2 в вопросе' },
        { de: 'Ein Schild hängt an der Tür.', ru: 'Табличка висит на двери.', note: 'V2' },
      ],
      question: {
        de: 'Was kann man bei Radio Pop und Rock gewinnen?',
        ru: 'Что можно выиграть на Радио Поп и Рок?',
        options: [
          { de: 'Ein Auto', ru: 'Автомобиль' },
          { de: 'Ein Radio', ru: 'Радио' },
          { de: 'Fünf Eintrittskarten', ru: 'Пять входных билетов' },
        ],
        correct: 2,
        explanation: 'В тексте указано: "Sie können gewinnen! Und was? Fünf Karten für die Radio Pop und Rock Clubdisco!"'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Parkplatz',
      type: 'объявление',
      text: 'Wegen des guten Wetters sind alle Parkplätze vor dem Schwimmbad besetzt. Autofahrer können ihren Wagen noch hinter dem Sportplatz abstellen. Weil es auch hier nur wenige Parkmöglichkeiten gibt, empfehlen wir, mit der U-Bahn Linie 2 zum Schwimmbad zu fahren.',
      sentenceTranslations: {
        'Wegen des guten Wetters sind alle Parkplätze vor dem Schwimmbad besetzt.': { literal: 'Из-за хорошей погоды есть все парковки перед бассейном заняты', literary: 'Из-за хорошей погоды все парковочные места перед бассейном заняты.' },
        'Autofahrer können ihren Wagen noch hinter dem Sportplatz abstellen.': { literal: 'Автомобилисты могут свою машину ещё за спортплощадкой поставить', literary: 'Водители могут припарковать свои автомобили за спортивной площадкой.' },
        'Weil es auch hier nur wenige Parkmöglichkeiten gibt, empfehlen wir, mit der U-Bahn Linie 2 zum Schwimmbad zu fahren.': { literal: 'Потому что это также здесь только немногие возможности парковки даёт, рекомендуем мы, на метро линия 2 к бассейну ехать', literary: 'Поскольку и здесь мало парковочных мест, мы рекомендуем добираться до бассейна на метро линии 2.' },
      },
      vocabulary: [
        { de: 'der Parkplatz', plural: 'die Parkplätze', ru: 'парковка', gender: 'maskulin', collocation: 'alle Parkplätze', example: 'Wegen des guten Wetters sind alle Parkplätze vor dem Schwimmbad besetzt.' },
        { de: 'das Schwimmbad', plural: 'die Schwimmbäder', ru: 'бассейн', gender: 'neutrum', collocation: 'vor dem Schwimmbad', example: 'Wegen des guten Wetters sind alle Parkplätze vor dem Schwimmbad besetzt.' },
        { de: 'der Wagen', plural: 'die Wagen', ru: 'автомобиль', gender: 'maskulin', collocation: 'ihren Wagen abstellen', example: 'Autofahrer können ihren Wagen noch hinter dem Sportplatz abstellen.' },
        { de: 'der Sportplatz', plural: 'die Sportplätze', ru: 'спортплощадка', gender: 'maskulin', collocation: 'hinter dem Sportplatz', example: 'Autofahrer können ihren Wagen noch hinter dem Sportplatz abstellen.' },
        { de: 'die Parkmöglichkeit', plural: 'die Parkmöglichkeiten', ru: 'возможность парковки', gender: 'feminin', collocation: 'wenige Parkmöglichkeiten', example: 'Weil es auch hier nur wenige Parkmöglichkeiten gibt.' },
        { de: 'die U-Bahn', plural: 'die U-Bahnen', ru: 'метро', gender: 'feminin', collocation: 'mit der U-Bahn', example: 'Wir empfehlen, mit der U-Bahn Linie 2 zum Schwimmbad zu fahren.' },
        { de: 'abstellen', ru: 'парковать, ставить', type: 'verb', forms: 'stellt ab, stellte ab, hat abgestellt', example: 'Autofahrer können ihren Wagen noch hinter dem Sportplatz abstellen.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Wir empfehlen, mit der U-Bahn Linie 2 zum Schwimmbad zu fahren.' },
      ],
      practiceSentences: [
        { de: 'Wegen des Regens bleiben wir zu Hause.', ru: 'Из-за дождя мы остаёмся дома.', note: 'V2' },
        { de: 'Ich stelle mein Fahrrad vor das Haus.', ru: 'Я ставлю велосипед перед домом.', note: 'V2' },
        { de: 'Können Sie das Auto abstellen?', ru: 'Можете припарковать машину?', note: 'модальный + инфинитив' },
        { de: 'Weil der Bus voll ist, fahre ich mit dem Taxi.', ru: 'Так как автобус полный, я еду на такси.', note: 'конец в придаточном' },
        { de: 'Wir empfehlen, früh zu kommen.', ru: 'Мы рекомендуем прийти рано.', note: 'zu + инфинитив' },
      ],
      question: {
        de: 'Wo kann man noch parken?',
        ru: 'Где ещё можно припарковаться?',
        options: [
          { de: 'Vor dem Schwimmbad', ru: 'Перед бассейном' },
          { de: 'Hinter dem Sportplatz', ru: 'За спортплощадкой' },
          { de: 'An der U-Bahn-Station', ru: 'У станции метро' },
        ],
        correct: 1,
        explanation: 'В тексте сказано: "Autofahrer können ihren Wagen noch hinter dem Sportplatz abstellen."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Dr. Lemmer',
      type: 'телефонное сообщение',
      text: 'Guten Tag, Herr Lohmann. Hier Zahnarztpraxis Dr. Lemmer. Sie haben morgen am Dienstag um 14 Uhr einen Termin. Leider ist Herr Lemmer heute und morgen krank. Können Sie am Mittwoch um 10 Uhr kommen? Bitte rufen Sie uns heute bis 18 Uhr noch an. Vielen Dank.',
      sentenceTranslations: {
        'Guten Tag, Herr Lohmann.': { literal: 'Добрый день, господин Ломан', literary: 'Добрый день, господин Ломан.' },
        'Hier Zahnarztpraxis Dr. Lemmer.': { literal: 'Здесь стоматологическая практика доктора Леммера', literary: 'Стоматологическая клиника доктора Леммера.' },
        'Sie haben morgen am Dienstag um 14 Uhr einen Termin.': { literal: 'Вы имеете завтра во вторник в 14 часов запись', literary: 'У вас завтра, во вторник, запись на 14:00.' },
        'Leider ist Herr Lemmer heute und morgen krank.': { literal: 'К сожалению есть господин Леммер сегодня и завтра болен', literary: 'К сожалению, доктор Леммер сегодня и завтра болен.' },
        'Können Sie am Mittwoch um 10 Uhr kommen?': { literal: 'Можете вы в среду в 10 часов прийти', literary: 'Можете ли вы прийти в среду в 10 часов?' },
        'Bitte rufen Sie uns heute bis 18 Uhr noch an.': { literal: 'Пожалуйста позвоните нам сегодня до 18 часов ещё', literary: 'Пожалуйста, перезвоните нам сегодня до 18:00.' },
        'Vielen Dank.': { literal: 'Большое спасибо', literary: 'Большое спасибо.' },
      },
      vocabulary: [
        { de: 'die Zahnarztpraxis', plural: 'die Zahnarztpraxen', ru: 'стоматологическая клиника', gender: 'feminin', collocation: 'Zahnarztpraxis Dr. Lemmer', example: 'Hier Zahnarztpraxis Dr. Lemmer.' },
        { de: 'der Termin', plural: 'die Termine', ru: 'запись, приём', gender: 'maskulin', collocation: 'einen Termin haben', example: 'Sie haben morgen am Dienstag um 14 Uhr einen Termin.' },
        { de: 'der Dienstag', plural: 'die Dienstage', ru: 'вторник', gender: 'maskulin', collocation: 'am Dienstag', example: 'Sie haben morgen am Dienstag um 14 Uhr einen Termin.' },
        { de: 'der Mittwoch', plural: 'die Mittwoche', ru: 'среда', gender: 'maskulin', collocation: 'am Mittwoch', example: 'Können Sie am Mittwoch um 10 Uhr kommen?' },
        { de: 'kommen', ru: 'прийти', type: 'verb', forms: 'kommt, kam, ist gekommen', example: 'Können Sie am Mittwoch um 10 Uhr kommen?' },
        { de: 'krank', ru: 'больной', type: 'adj', example: 'Leider ist Herr Lemmer heute und morgen krank.' },
        { de: 'leider', ru: 'к сожалению', type: 'adv', example: 'Leider ist Herr Lemmer heute und morgen krank.' },
      ],
      practiceSentences: [
        { de: 'Ich habe am Montag einen Termin.', ru: 'У меня в понедельник встреча.', note: 'V2' },
        { de: 'Der Arzt ist heute krank.', ru: 'Врач сегодня болен.', note: 'V2' },
        { de: 'Können Sie morgen kommen?', ru: 'Можете завтра прийти?', note: 'модальный + инфинитив' },
        { de: 'Rufen Sie mich bis 17 Uhr an!', ru: 'Позвоните мне до 17:00!', note: 'отделяемая приставка' },
        { de: 'Wir haben um 9 Uhr Zeit.', ru: 'У нас есть время в 9 часов.', note: 'V2' },
      ],
      question: {
        de: 'Wann ist der neue Termin?',
        ru: 'Когда новая запись на приём?',
        options: [
          { de: 'Am Dienstag um 14 Uhr', ru: 'Во вторник в 14:00' },
          { de: 'Am Mittwoch um 10 Uhr', ru: 'В среду в 10:00' },
          { de: 'Heute bis 18 Uhr', ru: 'Сегодня до 18:00' },
        ],
        correct: 1,
        explanation: 'В сообщении предлагается: "Können Sie am Mittwoch um 10 Uhr kommen?"'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Pauline',
      type: 'личное сообщение',
      text: 'Hallo Claudia, hier ist Pauline. Du, Claudia, leider kann ich heute Abend nicht ins Kino. Meine Tochter ist krank geworden. Wir waren gerade beim Arzt, und heute muss ich bei ihr bleiben. Treffen wir uns bei mir in der Wohnung? Ich habe auch viele Filme auf DVD. Die können wir hier sehen. Ist das okay?',
      sentenceTranslations: {
        'Hallo Claudia, hier ist Pauline.': { literal: 'Привет Клаудиа, здесь есть Паулина', literary: 'Привет, Клаудиа, это Паулина.' },
        'Du, Claudia, leider kann ich heute Abend nicht ins Kino.': { literal: 'Ты, Клаудиа, к сожалению могу я сегодня вечером не в кино', literary: 'Клаудиа, к сожалению, я не могу сегодня вечером в кино.' },
        'Meine Tochter ist krank geworden.': { literal: 'Моя дочь стала больной', literary: 'Моя дочь заболела.' },
        'Wir waren gerade beim Arzt, und heute muss ich bei ihr bleiben.': { literal: 'Мы были только что у врача, и сегодня должна я у неё остаться', literary: 'Мы только что были у врача, и сегодня я должна остаться с ней.' },
        'Treffen wir uns bei mir in der Wohnung?': { literal: 'Встречаемся мы у меня в квартире', literary: 'Встретимся у меня дома?' },
        'Ich habe auch viele Filme auf DVD.': { literal: 'Я имею также многие фильмы на DVD', literary: 'У меня есть много фильмов на DVD.' },
        'Die können wir hier sehen.': { literal: 'Их можем мы здесь смотреть', literary: 'Мы можем их здесь посмотреть.' },
        'Ist das okay?': { literal: 'Есть это в порядке', literary: 'Это нормально?' },
      },
      vocabulary: [
        { de: 'das Kino', plural: 'die Kinos', ru: 'кинотеатр', gender: 'neutrum', collocation: 'ins Kino gehen', example: 'Leider kann ich heute Abend nicht ins Kino.' },
        { de: 'die Tochter', plural: 'die Töchter', ru: 'дочь', gender: 'feminin', collocation: 'meine Tochter', example: 'Meine Tochter ist krank geworden.' },
        { de: 'der Arzt', plural: 'die Ärzte', ru: 'врач', gender: 'maskulin', collocation: 'beim Arzt sein', example: 'Wir waren gerade beim Arzt.' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'in der Wohnung', example: 'Treffen wir uns bei mir in der Wohnung?' },
        { de: 'der Film', plural: 'die Filme', ru: 'фильм', gender: 'maskulin', collocation: 'viele Filme', example: 'Ich habe auch viele Filme auf DVD.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Treffen wir uns bei mir in der Wohnung?' },
        { de: 'bleiben', ru: 'оставаться', type: 'verb', forms: 'bleibt, blieb, ist geblieben', example: 'Heute muss ich bei ihr bleiben.' },
        { de: 'gerade', ru: 'только что', type: 'adv', example: 'Wir waren gerade beim Arzt.' },
      ],
      practiceSentences: [
        { de: 'Mein Sohn ist müde geworden.', ru: 'Мой сын устал.', note: 'Perfekt с werden' },
        { de: 'Wir waren gestern beim Zahnarzt.', ru: 'Мы вчера были у зубного.', note: 'V2' },
        { de: 'Ich muss heute zu Hause bleiben.', ru: 'Я должен сегодня остаться дома.', note: 'модальный + инфинитив' },
        { de: 'Treffen wir uns im Café?', ru: 'Встретимся в кафе?', note: 'V1 вопрос' },
        { de: 'Ich habe Musik auf CD.', ru: 'У меня есть музыка на CD.', note: 'V2' },
      ],
      question: {
        de: 'Wo will Pauline Claudia treffen?',
        ru: 'Где Паулина хочет встретиться с Клаудией?',
        options: [
          { de: 'Im Kino', ru: 'В кинотеатре' },
          { de: 'Beim Arzt', ru: 'У врача' },
          { de: 'In ihrer Wohnung', ru: 'У себя дома' },
        ],
        correct: 2,
        explanation: 'Паулина говорит: "Treffen wir uns bei mir in der Wohnung?"'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Hausfest',
      type: 'разговор о празднике',
      text: 'Hallo Maria, am Samstag ist doch unser Hausfest. Ist schon etwas geplant? Weißt du etwas? Ja, Robert, wir haben uns gestern Abend getroffen und schon viel vorbereitet. Ich habe gesagt, dass ich Getränke hole. Ich habe die nächsten Tage ein Auto, also kein Problem. Und wie machen wir das mit dem Essen? Susanne macht Hähnchen mit Reis. Wir haben auch an Koteletts gedacht, aber dann gedacht, dass das nicht so gut ist. Nicht alle essen Schweinefleisch, und nicht alle essen Fleisch. Ja, aber Eva macht einen Salat. Ich könnte eine Gemüsesuppe machen. Anja macht schon eine. Und wie wäre es mit einer Pizza? Ich habe ein super Rezept. Weißt du, Robert, das wird zu viel. Wir wissen ja gar nicht, wie viele Leute kommen. Außerdem hat Beata gesagt, dass sie einen Kuchen mitbringen will. Das ist toll! Dann haben wir auch einen Nachtisch. Aber es gibt ja nicht nur Essen und Trinken. Beata hat doch gesagt, dass sie ihre Gitarre mitbringen will. Das stimmt, das wollte sie auch, aber es geht nicht. Sie hat sich gestern an der Hand verletzt. Dann bringe ich CDs mit. Super, Robert! Ich weiß, du hast tolle Musik. Dann wollen wir nur noch hoffen, dass das Wetter am Samstag schön ist.',
      sentenceTranslations: {
        'Hallo Maria, am Samstag ist doch unser Hausfest.': { literal: 'Привет Мария, в субботу есть же наш домашний праздник', literary: 'Привет, Мария, в субботу же у нас домашний праздник.' },
        'Ist schon etwas geplant?': { literal: 'Есть уже что-то запланировано', literary: 'Что-нибудь уже спланировано?' },
        'Weißt du etwas?': { literal: 'Знаешь ты что-то', literary: 'Ты что-нибудь знаешь?' },
        'Ja, Robert, wir haben uns gestern Abend getroffen und schon viel vorbereitet.': { literal: 'Да, Роберт, мы встретились вчера вечером и уже много подготовили', literary: 'Да, Роберт, мы встречались вчера вечером и уже многое подготовили.' },
        'Ich habe gesagt, dass ich Getränke hole.': { literal: 'Я сказала, что я напитки принесу', literary: 'Я сказала, что принесу напитки.' },
        'Ich habe die nächsten Tage ein Auto, also kein Problem.': { literal: 'Я имею следующие дни машину, значит нет проблемы', literary: 'У меня на днях будет машина, так что нет проблем.' },
        'Und wie machen wir das mit dem Essen?': { literal: 'И как делаем мы это с едой', literary: 'Что делаем с едой?' },
        'Susanne macht Hähnchen mit Reis.': { literal: 'Сюзанна делает курицу с рисом', literary: 'Сюзанна готовит курицу с рисом.' },
        'Wir haben auch an Koteletts gedacht, aber dann gedacht, dass das nicht so gut ist.': { literal: 'Мы также о котлетах думали, но потом подумали, что это не так хорошо есть', literary: 'Мы думали и о котлетах, но решили, что это не лучшая идея.' },
        'Nicht alle essen Schweinefleisch, und nicht alle essen Fleisch.': { literal: 'Не все едят свинину, и не все едят мясо', literary: 'Не все едят свинину, и не все едят мясо.' },
        'Ja, aber Eva macht einen Salat.': { literal: 'Да, но Ева делает салат', literary: 'Да, но Ева сделает салат.' },
        'Ich könnte eine Gemüsesuppe machen.': { literal: 'Я мог бы овощной суп сделать', literary: 'Я мог бы приготовить овощной суп.' },
        'Anja macht schon eine.': { literal: 'Аня делает уже одну', literary: 'Аня уже делает один.' },
        'Und wie wäre es mit einer Pizza?': { literal: 'И как было бы это с пиццей', literary: 'Как насчёт пиццы?' },
        'Ich habe ein super Rezept.': { literal: 'Я имею супер рецепт', literary: 'У меня отличный рецепт.' },
        'Weißt du, Robert, das wird zu viel.': { literal: 'Знаешь ты, Роберт, это станет слишком много', literary: 'Знаешь, Роберт, это будет слишком много.' },
        'Wir wissen ja gar nicht, wie viele Leute kommen.': { literal: 'Мы знаем же совсем не, как много людей придут', literary: 'Мы же совсем не знаем, сколько людей придёт.' },
        'Außerdem hat Beata gesagt, dass sie einen Kuchen mitbringen will.': { literal: 'Кроме того сказала Беата, что она пирог принести хочет', literary: 'К тому же Беата сказала, что хочет принести пирог.' },
        'Das ist toll!': { literal: 'Это есть отлично', literary: 'Это здорово!' },
        'Dann haben wir auch einen Nachtisch.': { literal: 'Тогда имеем мы также десерт', literary: 'Тогда у нас будет и десерт.' },
        'Aber es gibt ja nicht nur Essen und Trinken.': { literal: 'Но это даёт же не только еда и питьё', literary: 'Но ведь не только еда и питьё.' },
        'Beata hat doch gesagt, dass sie ihre Gitarre mitbringen will.': { literal: 'Беата сказала же, что она свою гитару принести хочет', literary: 'Беата же сказала, что хочет принести свою гитару.' },
        'Das stimmt, das wollte sie auch, aber es geht nicht.': { literal: 'Это верно, это хотела она тоже, но это идёт не', literary: 'Верно, она тоже хотела, но не получится.' },
        'Sie hat sich gestern an der Hand verletzt.': { literal: 'Она себя вчера на руке поранила', literary: 'Она вчера поранила руку.' },
        'Dann bringe ich CDs mit.': { literal: 'Тогда приношу я CD с собой', literary: 'Тогда я принесу диски.' },
        'Super, Robert!': { literal: 'Супер, Роберт', literary: 'Отлично, Роберт!' },
        'Ich weiß, du hast tolle Musik.': { literal: 'Я знаю, ты имеешь отличную музыку', literary: 'Я знаю, у тебя отличная музыка.' },
        'Dann wollen wir nur noch hoffen, dass das Wetter am Samstag schön ist.': { literal: 'Тогда хотим мы только ещё надеяться, что погода в субботу красивая есть', literary: 'Тогда остаётся только надеяться, что в субботу будет хорошая погода.' },
      },
      vocabulary: [
        { de: 'das Hausfest', plural: 'die Hausfeste', ru: 'домашний праздник', gender: 'neutrum', collocation: 'unser Hausfest', example: 'Am Samstag ist doch unser Hausfest.' },
        { de: 'das Getränk', plural: 'die Getränke', ru: 'напиток', gender: 'neutrum', collocation: 'Getränke holen', example: 'Ich habe gesagt, dass ich Getränke hole.' },
        { de: 'das Hähnchen', plural: 'die Hähnchen', ru: 'курица', gender: 'neutrum', collocation: 'Hähnchen mit Reis', example: 'Susanne macht Hähnchen mit Reis.' },
        { de: 'das Schweinefleisch', ru: 'свинина', gender: 'neutrum', example: 'Nicht alle essen Schweinefleisch.' },
        { de: 'die Gemüsesuppe', plural: 'die Gemüsesuppen', ru: 'овощной суп', gender: 'feminin', collocation: 'eine Gemüsesuppe machen', example: 'Ich könnte eine Gemüsesuppe machen.' },
        { de: 'das Rezept', plural: 'die Rezepte', ru: 'рецепт', gender: 'neutrum', collocation: 'ein super Rezept', example: 'Ich habe ein super Rezept.' },
        { de: 'der Kuchen', plural: 'die Kuchen', ru: 'пирог, торт', gender: 'maskulin', collocation: 'einen Kuchen mitbringen', example: 'Beata hat gesagt, dass sie einen Kuchen mitbringen will.' },
        { de: 'der Nachtisch', plural: 'die Nachtische', ru: 'десерт', gender: 'maskulin', collocation: 'einen Nachtisch haben', example: 'Dann haben wir auch einen Nachtisch.' },
        { de: 'die Gitarre', plural: 'die Gitarren', ru: 'гитара', gender: 'feminin', collocation: 'Gitarre mitbringen', example: 'Beata hat doch gesagt, dass sie ihre Gitarre mitbringen will.' },
        { de: 'die Hand', plural: 'die Hände', ru: 'рука', gender: 'feminin', collocation: 'an der Hand', example: 'Sie hat sich gestern an der Hand verletzt.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Wir haben uns gestern Abend getroffen.' },
        { de: 'vorbereiten', ru: 'подготовить', type: 'verb', forms: 'bereitet vor, bereitete vor, hat vorbereitet', example: 'Wir haben uns gestern Abend getroffen und schon viel vorbereitet.' },
        { de: 'mitbringen', ru: 'принести с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Beata hat gesagt, dass sie einen Kuchen mitbringen will.' },
        { de: 'sich verletzen', ru: 'пораниться', type: 'verb', forms: 'verletzt sich, verletzte sich, hat sich verletzt', example: 'Sie hat sich gestern an der Hand verletzt.' },
        { de: 'hoffen', ru: 'надеяться', type: 'verb', forms: 'hofft, hoffte, hat gehofft', example: 'Dann wollen wir nur noch hoffen, dass das Wetter am Samstag schön ist.' },
      ],
      practiceSentences: [
        { de: 'Wir haben uns am Montag getroffen.', ru: 'Мы встретились в понедельник.', note: 'Perfekt с sich' },
        { de: 'Ich bringe morgen Kekse mit.', ru: 'Я принесу завтра печенье.', note: 'отделяемая приставка' },
        { de: 'Sie hat an ihre Mutter gedacht.', ru: 'Она думала о маме.', note: 'Perfekt с an + Akk' },
        { de: 'Könnte ich Salat machen?', ru: 'Мог бы я сделать салат?', note: 'Konjunktiv II' },
        { de: 'Er hat sich am Kopf verletzt.', ru: 'Он поранил голову.', note: 'возвратный глагол' },
      ],
      question: {
        de: 'Was kann Beata nicht mitbringen?',
        ru: 'Что Беата не может принести?',
        options: [
          { de: 'Einen Kuchen', ru: 'Пирог' },
          { de: 'Ihre Gitarre', ru: 'Свою гитару' },
          { de: 'Getränke', ru: 'Напитки' },
        ],
        correct: 1,
        explanation: 'Беата не может принести гитару, потому что поранила руку: "Sie hat sich gestern an der Hand verletzt."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Bahnhof',
      type: 'диалог-направление',
      text: 'Verzeihung, wie komme ich zum Bahnhof? Muss ich hier nach rechts gehen? Nein, nein, nicht nach rechts. Das stimmt nicht. Gehen Sie geradeaus und an der Ecke nach links. Dann noch 100 m geradeaus, und dann sehen Sie schon den Bahnhof. Vielen Dank!',
      sentenceTranslations: {
        'Verzeihung, wie komme ich zum Bahnhof?': { literal: 'Извините, как прихожу я к вокзалу', literary: 'Извините, как пройти к вокзалу?' },
        'Muss ich hier nach rechts gehen?': { literal: 'Должен я здесь направо идти', literary: 'Мне идти направо?' },
        'Nein, nein, nicht nach rechts.': { literal: 'Нет, нет, не направо', literary: 'Нет-нет, не направо.' },
        'Das stimmt nicht.': { literal: 'Это не правильно', literary: 'Это неверно.' },
        'Gehen Sie geradeaus und an der Ecke nach links.': { literal: 'Идите прямо и на углу налево', literary: 'Идите прямо, а на углу поверните налево.' },
        'Dann noch 100 m geradeaus, und dann sehen Sie schon den Bahnhof.': { literal: 'Потом ещё 100 м прямо, и потом видите уже вокзал', literary: 'Затем ещё 100 метров прямо, и увидите вокзал.' },
        'Vielen Dank!': { literal: 'Большое спасибо', literary: 'Большое спасибо!' },
      },
      vocabulary: [
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'zum Bahnhof kommen', example: 'Verzeihung, wie komme ich zum Bahnhof?' },
        { de: 'die Ecke', plural: 'die Ecken', ru: 'угол', gender: 'feminin', collocation: 'an der Ecke', example: 'Gehen Sie geradeaus und an der Ecke nach links.' },
        { de: 'stimmen', ru: 'быть правильным', type: 'verb', forms: 'stimmt, stimmte, hat gestimmt', example: 'Das stimmt nicht.' },
        { de: 'geradeaus', ru: 'прямо', type: 'adv', example: 'Gehen Sie geradeaus und an der Ecke nach links.' },
      ],
      practiceSentences: [
        { de: 'Wie komme ich zur Post?', ru: 'Как пройти к почте?', note: 'V2 в вопросе' },
        { de: 'Muss ich links gehen?', ru: 'Мне идти налево?', note: 'модальный + инфинитив' },
        { de: 'Gehen Sie bitte geradeaus!', ru: 'Идите, пожалуйста, прямо!', note: 'императив' },
        { de: 'An der Ampel sehen Sie das Geschäft.', ru: 'У светофора увидите магазин.', note: 'V2' },
        { de: 'Das stimmt so nicht.', ru: 'Это не так.', note: 'V2' },
      ],
      question: {
        de: 'In welche Richtung muss man zum Bahnhof gehen?',
        ru: 'В каком направлении нужно идти к вокзалу?',
        options: [
          { de: 'Nach rechts, dann geradeaus', ru: 'Направо, потом прямо' },
          { de: 'Geradeaus, dann nach links', ru: 'Прямо, потом налево' },
          { de: 'Nur geradeaus', ru: 'Только прямо' },
        ],
        correct: 1,
        explanation: 'Объяснение маршрута: "Gehen Sie geradeaus und an der Ecke nach links."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Gerhard',
      type: 'разговор о помощи',
      text: 'Hallo Gerhard, kannst du mir helfen? Ja, was ist los? Wieder Probleme mit dem Computer? Nein, du hast mir ja geholfen. Der geht jetzt wieder. Nur macht jetzt mein Drucker Probleme. Kann ich zu dir kommen und bei dir etwas drucken? Natürlich! Nur im Moment ist es schlecht. Ich muss gleich weg. Ich rufe dich über mein Handy an, wenn ich wieder zu Hause bin.',
      sentenceTranslations: {
        'Hallo Gerhard, kannst du mir helfen?': { literal: 'Привет Герхард, можешь ты мне помочь', literary: 'Привет, Герхард, можешь мне помочь?' },
        'Ja, was ist los?': { literal: 'Да, что есть свободно', literary: 'Да, что случилось?' },
        'Wieder Probleme mit dem Computer?': { literal: 'Снова проблемы с компьютером', literary: 'Опять проблемы с компьютером?' },
        'Nein, du hast mir ja geholfen.': { literal: 'Нет, ты мне же помог', literary: 'Нет, ты же мне помог.' },
        'Der geht jetzt wieder.': { literal: 'Он идёт теперь снова', literary: 'Он снова работает.' },
        'Nur macht jetzt mein Drucker Probleme.': { literal: 'Только делает теперь мой принтер проблемы', literary: 'Только теперь проблемы с принтером.' },
        'Kann ich zu dir kommen und bei dir etwas drucken?': { literal: 'Могу я к тебе прийти и у тебя что-то напечатать', literary: 'Могу прийти к тебе и распечатать?' },
        'Natürlich!': { literal: 'Конечно', literary: 'Конечно!' },
        'Nur im Moment ist es schlecht.': { literal: 'Только в момент есть это плохо', literary: 'Только сейчас неудобно.' },
        'Ich muss gleich weg.': { literal: 'Я должен сразу прочь', literary: 'Мне нужно срочно уйти.' },
        'Ich rufe dich über mein Handy an, wenn ich wieder zu Hause bin.': { literal: 'Я позвоню тебе через мой мобильный, когда я снова дома буду', literary: 'Позвоню с мобильного, когда буду дома.' },
      },
      vocabulary: [
        { de: 'der Computer', plural: 'die Computer', ru: 'компьютер', gender: 'maskulin', collocation: 'Probleme mit dem Computer', example: 'Wieder Probleme mit dem Computer?' },
        { de: 'der Drucker', plural: 'die Drucker', ru: 'принтер', gender: 'maskulin', collocation: 'mein Drucker', example: 'Nur macht jetzt mein Drucker Probleme.' },
        { de: 'das Handy', plural: 'die Handys', ru: 'мобильный телефон', gender: 'neutrum', collocation: 'über mein Handy', example: 'Ich rufe dich über mein Handy an.' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Hallo Gerhard, kannst du mir helfen?' },
        { de: 'drucken', ru: 'печатать', type: 'verb', forms: 'druckt, druckte, hat gedruckt', example: 'Kann ich zu dir kommen und bei dir etwas drucken?' },
        { de: 'gleich', ru: 'сразу, сейчас', type: 'adv', example: 'Ich muss gleich weg.' },
        { de: 'schlecht', ru: 'плохо, неудобно', type: 'adj', example: 'Nur im Moment ist es schlecht.' },
      ],
      practiceSentences: [
        { de: 'Kannst du mir morgen helfen?', ru: 'Можешь завтра мне помочь?', note: 'модальный + инфинитив' },
        { de: 'Der Computer geht nicht.', ru: 'Компьютер не работает.', note: 'V2' },
        { de: 'Ich komme zu dir.', ru: 'Я приду к тебе.', note: 'V2' },
        { de: 'Sie ruft mich später an.', ru: 'Она позвонит мне позже.', note: 'отделяемая приставка' },
        { de: 'Wenn ich Zeit habe, helfe ich dir.', ru: 'Если у меня будет время, я помогу.', note: 'конец в придаточном' },
      ],
      question: {
        de: 'Was ist das aktuelle Problem?',
        ru: 'В чём текущая проблема?',
        options: [
          { de: 'Der Computer funktioniert nicht', ru: 'Компьютер не работает' },
          { de: 'Der Drucker macht Probleme', ru: 'Проблемы с принтером' },
          { de: 'Das Handy ist kaputt', ru: 'Мобильный сломан' },
        ],
        correct: 1,
        explanation: 'Говорящий поясняет: "Der geht jetzt wieder. Nur macht jetzt mein Drucker Probleme."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Pullover',
      type: 'диалог в магазине',
      text: 'Guten Tag, kann ich Ihnen helfen? Ja, der Pullover hier gefällt mir, aber nicht in grün. Haben Sie diesen Pullover auch in rot? Nein, leider nicht. Aber wir haben Jacken bekommen für nur 55 €. Sie sind im Angebot. Und dann haben wir auch noch Hosen zu günstigen Preisen. Na ja, eine Jacke habe ich bei Ihnen schon letzte Woche gekauft, und Hosen habe ich genug. Schade, dass Sie den Pullover nicht in rot haben.',
      sentenceTranslations: {
        'Guten Tag, kann ich Ihnen helfen?': { literal: 'Добрый день, могу я вам помочь', literary: 'Добрый день, могу я вам помочь?' },
        'Ja, der Pullover hier gefällt mir, aber nicht in grün.': { literal: 'Да, свитер здесь нравится мне, но не в зелёном', literary: 'Да, мне нравится этот свитер, но не в зелёном цвете.' },
        'Haben Sie diesen Pullover auch in rot?': { literal: 'Имеете вы этот свитер также в красном', literary: 'У вас есть этот свитер в красном?' },
        'Nein, leider nicht.': { literal: 'Нет, к сожалению нет', literary: 'Нет, к сожалению.' },
        'Aber wir haben Jacken bekommen für nur 55 €.': { literal: 'Но мы получили куртки за только 55 евро', literary: 'Но мы получили куртки всего за 55 евро.' },
        'Sie sind im Angebot.': { literal: 'Они есть в предложении', literary: 'Они по акции.' },
        'Und dann haben wir auch noch Hosen zu günstigen Preisen.': { literal: 'И потом имеем мы также ещё брюки к выгодным ценам', literary: 'И ещё у нас есть брюки по выгодным ценам.' },
        'Na ja, eine Jacke habe ich bei Ihnen schon letzte Woche gekauft, und Hosen habe ich genug.': { literal: 'Ну да, куртку имею я у вас уже прошлую неделю купленной, и брюки имею я достаточно', literary: 'Куртку я у вас уже купил на прошлой неделе, и брюк у меня достаточно.' },
        'Schade, dass Sie den Pullover nicht in rot haben.': { literal: 'Жаль, что вы свитер не в красном имеете', literary: 'Жаль, что у вас нет свитера в красном.' },
      },
      vocabulary: [
        { de: 'der Pullover', plural: 'die Pullover', ru: 'свитер', gender: 'maskulin', collocation: 'der Pullover gefällt mir', example: 'Ja, der Pullover hier gefällt mir, aber nicht in grün.' },
        { de: 'die Jacke', plural: 'die Jacken', ru: 'куртка', gender: 'feminin', collocation: 'Jacken bekommen', example: 'Aber wir haben Jacken bekommen für nur 55 €.' },
        { de: 'das Angebot', plural: 'die Angebote', ru: 'акция, предложение', gender: 'neutrum', collocation: 'im Angebot sein', example: 'Sie sind im Angebot.' },
        { de: 'die Hose', plural: 'die Hosen', ru: 'брюки', gender: 'feminin', collocation: 'Hosen zu günstigen Preisen', example: 'Und dann haben wir auch noch Hosen zu günstigen Preisen.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'цена', gender: 'maskulin', collocation: 'günstige Preise', example: 'Und dann haben wir auch noch Hosen zu günstigen Preisen.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Der Pullover hier gefällt mir.' },
        { de: 'kaufen', ru: 'покупать', type: 'verb', forms: 'kauft, kaufte, hat gekauft', example: 'Eine Jacke habe ich bei Ihnen schon letzte Woche gekauft.' },
        { de: 'günstig', ru: 'выгодный', type: 'adj', example: 'Und dann haben wir auch noch Hosen zu günstigen Preisen.' },
      ],
      practiceSentences: [
        { de: 'Diese Hose gefällt mir gut.', ru: 'Эти брюки мне нравятся.', note: 'V2' },
        { de: 'Haben Sie das T-Shirt in blau?', ru: 'У вас есть футболка в синем?', note: 'V1 вопрос' },
        { de: 'Wir haben neue Schuhe bekommen.', ru: 'Мы получили новую обувь.', note: 'Perfekt' },
        { de: 'Die Jacke ist im Angebot.', ru: 'Куртка по акции.', note: 'V2' },
        { de: 'Schade, dass es heute regnet.', ru: 'Жаль, что сегодня дождь.', note: 'конец в придаточном' },
      ],
      question: {
        de: 'Welche Farbe möchte der Kunde?',
        ru: 'Какой цвет хочет покупатель?',
        options: [
          { de: 'Grün', ru: 'Зелёный' },
          { de: 'Rot', ru: 'Красный' },
          { de: 'Blau', ru: 'Синий' },
        ],
        correct: 1,
        explanation: 'Покупатель спрашивает: "Haben Sie diesen Pullover auch in rot?"'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Herr Meer',
      type: 'диалог у врача',
      text: 'Guten Tag, Herr Meer. Ich habe einen Termin um 15 Uhr. Guten Tag, Herr Meer. Vier Patienten sind noch vor Ihnen. Muss ich lange warten? Nein, vielleicht eine halbe Stunde. Nehmen Sie bitte im Wartezimmer Platz. Der Doktor ruft Sie dann.',
      sentenceTranslations: {
        'Guten Tag, Herr Meer.': { literal: 'Добрый день, господин Меер', literary: 'Добрый день, господин Меер.' },
        'Ich habe einen Termin um 15 Uhr.': { literal: 'Я имею запись в 15 часов', literary: 'У меня запись на 15 часов.' },
        'Vier Patienten sind noch vor Ihnen.': { literal: 'Четыре пациента есть ещё перед вами', literary: 'Перед вами ещё четыре пациента.' },
        'Muss ich lange warten?': { literal: 'Должен я долго ждать', literary: 'Мне долго ждать?' },
        'Nein, vielleicht eine halbe Stunde.': { literal: 'Нет, возможно половину часа', literary: 'Нет, возможно, полчаса.' },
        'Nehmen Sie bitte im Wartezimmer Platz.': { literal: 'Возьмите пожалуйста в комнате ожидания место', literary: 'Присядьте, пожалуйста, в комнате ожидания.' },
        'Der Doktor ruft Sie dann.': { literal: 'Доктор позовёт вас потом', literary: 'Доктор вас позовёт.' },
      },
      vocabulary: [
        { de: 'der Patient', plural: 'die Patienten', ru: 'пациент', gender: 'maskulin', collocation: 'vier Patienten', example: 'Vier Patienten sind noch vor Ihnen.' },
        { de: 'das Wartezimmer', plural: 'die Wartezimmer', ru: 'комната ожидания', gender: 'neutrum', collocation: 'im Wartezimmer', example: 'Nehmen Sie bitte im Wartezimmer Platz.' },
        { de: 'der Doktor', plural: 'die Doktoren', ru: 'доктор', gender: 'maskulin', collocation: 'der Doktor ruft', example: 'Der Doktor ruft Sie dann.' },
        { de: 'warten', ru: 'ждать', type: 'verb', forms: 'wartet, wartete, hat gewartet', example: 'Muss ich lange warten?' },
        { de: 'rufen', ru: 'звать, позвать', type: 'verb', forms: 'ruft, rief, hat gerufen', example: 'Der Doktor ruft Sie dann.' },
        { de: 'vielleicht', ru: 'возможно', type: 'adv', example: 'Nein, vielleicht eine halbe Stunde.' },
      ],
      practiceSentences: [
        { de: 'Ich habe einen Termin um 10 Uhr.', ru: 'У меня встреча в 10 часов.', note: 'V2' },
        { de: 'Zwei Leute sind vor mir.', ru: 'Передо мной два человека.', note: 'V2' },
        { de: 'Muss ich hier warten?', ru: 'Мне здесь ждать?', note: 'модальный + инфинитив' },
        { de: 'Nehmen Sie bitte Platz!', ru: 'Присядьте, пожалуйста!', note: 'императив' },
        { de: 'Der Arzt ruft Sie gleich.', ru: 'Врач сейчас вас позовёт.', note: 'V2' },
      ],
      question: {
        de: 'Wie lange muss Herr Meer ungefähr warten?',
        ru: 'Сколько примерно должен ждать господин Меер?',
        options: [
          { de: '15 Minuten', ru: '15 минут' },
          { de: 'Eine halbe Stunde', ru: 'Полчаса' },
          { de: 'Eine Stunde', ru: 'Час' },
        ],
        correct: 1,
        explanation: 'На вопрос о времени ожидания отвечают: "Nein, vielleicht eine halbe Stunde."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Herr Schneider',
      type: 'разговор о транспорте',
      text: 'Herr Schneider, wie kommen Sie zur Arbeit? Früher habe ich immer das Auto genommen, aber man findet ja keine Parkplätze mehr. Deshalb nehme ich jetzt immer das Fahrrad. Der Weg zur Arbeit ist ja nicht weit. Natürlich wäre die U-Bahn bequemer, aber das ist mir zu teuer. Und etwas Sport zu machen ist ja auch nicht schlecht.',
      sentenceTranslations: {
        'Herr Schneider, wie kommen Sie zur Arbeit?': { literal: 'Господин Шнайдер, как приходите вы к работе', literary: 'Господин Шнайдер, как вы добираетесь на работу?' },
        'Früher habe ich immer das Auto genommen, aber man findet ja keine Parkplätze mehr.': { literal: 'Раньше имею я всегда машину взятой, но человек находит же никакие парковки больше', literary: 'Раньше я всегда ездил на машине, но парковку не найти.' },
        'Deshalb nehme ich jetzt immer das Fahrrad.': { literal: 'Поэтому беру я теперь всегда велосипед', literary: 'Поэтому теперь я всегда езжу на велосипеде.' },
        'Der Weg zur Arbeit ist ja nicht weit.': { literal: 'Путь к работе есть же не далёкий', literary: 'Путь на работу недалёкий.' },
        'Natürlich wäre die U-Bahn bequemer, aber das ist mir zu teuer.': { literal: 'Конечно было бы метро удобнее, но это есть мне слишком дорого', literary: 'Конечно, метро было бы удобнее, но для меня это слишком дорого.' },
        'Und etwas Sport zu machen ist ja auch nicht schlecht.': { literal: 'И немного спорта делать есть же также не плохо', literary: 'И немного спорта тоже неплохо.' },
      },
      vocabulary: [
        { de: 'die Arbeit', plural: 'die Arbeiten', ru: 'работа', gender: 'feminin', collocation: 'zur Arbeit kommen', example: 'Herr Schneider, wie kommen Sie zur Arbeit?' },
        { de: 'das Fahrrad', plural: 'die Fahrräder', ru: 'велосипед', gender: 'neutrum', collocation: 'das Fahrrad nehmen', example: 'Deshalb nehme ich jetzt immer das Fahrrad.' },
        { de: 'der Weg', plural: 'die Wege', ru: 'путь, дорога', gender: 'maskulin', collocation: 'der Weg zur Arbeit', example: 'Der Weg zur Arbeit ist ja nicht weit.' },
        { de: 'der Sport', ru: 'спорт', gender: 'maskulin', collocation: 'Sport machen', example: 'Und etwas Sport zu machen ist ja auch nicht schlecht.' },
        { de: 'finden', ru: 'находить', type: 'verb', forms: 'findet, fand, hat gefunden', example: 'Aber man findet ja keine Parkplätze mehr.' },
        { de: 'nehmen', ru: 'брать', type: 'verb', forms: 'nimmt, nahm, hat genommen', example: 'Deshalb nehme ich jetzt immer das Fahrrad.' },
        { de: 'bequem', ru: 'удобный', type: 'adj', example: 'Natürlich wäre die U-Bahn bequemer.' },
        { de: 'teuer', ru: 'дорогой', type: 'adj', example: 'Aber das ist mir zu teuer.' },
      ],
      practiceSentences: [
        { de: 'Ich komme mit dem Bus zur Arbeit.', ru: 'Я езжу на работу на автобусе.', note: 'V2' },
        { de: 'Man findet hier keine Taxis.', ru: 'Здесь не найти такси.', note: 'V2' },
        { de: 'Deshalb gehe ich zu Fuß.', ru: 'Поэтому я иду пешком.', note: 'V2 после deshalb' },
        { de: 'Das Auto wäre schneller.', ru: 'Машина была бы быстрее.', note: 'Konjunktiv II' },
        { de: 'Sport zu machen ist gesund.', ru: 'Заниматься спортом полезно.', note: 'инфинитив как подлежащее' },
      ],
      question: {
        de: 'Wie kommt Herr Schneider jetzt zur Arbeit?',
        ru: 'Как господин Шнайдер теперь добирается на работу?',
        options: [
          { de: 'Mit dem Auto', ru: 'На машине' },
          { de: 'Mit der U-Bahn', ru: 'На метро' },
          { de: 'Mit dem Fahrrad', ru: 'На велосипеде' },
        ],
        correct: 2,
        explanation: 'Он говорит: "Deshalb nehme ich jetzt immer das Fahrrad."'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Mohammed',
      type: 'интервью',
      text: 'Guten Tag, Mohammed! In unserer Radiosendung „Wie kann ich Arbeit finden?" wollten Sie uns auch etwas erzählen. Nun, ich war ja arbeitslos. Im Internet gibt es viele Jobbörsen, aber da hatte ich kein Glück. Und wo haben Sie noch gesucht? Na ja, ich bin durch die Straßen gelaufen und habe dann in einem Supermarkt eine Anzeige an der Wand gesehen: „Pizzafahrer gesucht". Und haben Sie sich gleich beworben? Nein, zuerst habe ich gedacht, ich bekomme die Stelle nicht, weil ich ja keinen Führerschein habe, und habe zwei Wochen gewartet. Dann aber hat meine Freundin gesagt: „Du hast doch ein schnelles Fahrrad. Geh doch mal in die Pizzeria und sprich dort mit dem Chef. Vielleicht brauchst du ja für den Job kein Auto." Und haben Sie das gemacht? Ja, ich bin da vorbeigegangen und habe mit dem Chef geredet. Der Chef war sehr freundlich, und als ich ihm erzählt habe, dass ich die Stadt sehr gut kenne und super schnell Fahrrad fahren kann, hat er mir den Job gegeben – auch ohne Auto. Und wie ist die Arbeit? Ich arbeite immer von 16 bis 22 Uhr. Ich bin in der Pizzeria und warte, dass Kunden anrufen. Und wenn es nichts zu tun gibt, helfe ich in der Küche. Sie sind also zufrieden? Ja, ich bin froh, dass ich jetzt seit einem halben Jahr einen Job habe. Bald fange ich mit meiner Ausbildung an. Dann kann ich sicher auch noch bei der Pizzeria weiterarbeiten – mit weniger Stunden.',
      sentenceTranslations: {
        'Guten Tag, Mohammed!': { literal: 'Добрый день, Мохаммед', literary: 'Добрый день, Мохаммед!' },
        'In unserer Radiosendung „Wie kann ich Arbeit finden?" wollten Sie uns auch etwas erzählen.': { literal: 'В нашей радиопередаче «Как могу я работу найти?» хотели Вы нам тоже что-то рассказать', literary: 'В нашей радиопередаче «Как найти работу?» вы тоже хотели нам рассказать.' },
        'Nun, ich war ja arbeitslos.': { literal: 'Ну, я был же безработный', literary: 'Ну, я был безработным.' },
        'Im Internet gibt es viele Jobbörsen, aber da hatte ich kein Glück.': { literal: 'В интернете даёт это много бирж труда, но там имел я никакого счастья', literary: 'В интернете много сайтов с вакансиями, но мне не повезло.' },
        'Und wo haben Sie noch gesucht?': { literal: 'И где искали Вы ещё', literary: 'А где ещё вы искали?' },
        'Na ja, ich bin durch die Straßen gelaufen und habe dann in einem Supermarkt eine Anzeige an der Wand gesehen: „Pizzafahrer gesucht".': { literal: 'Ну да, я прошёл через улицы и увидел потом в супермаркете объявление на стене: «Доставщик пиццы ищется»', literary: 'Ну, я ходил по улицам и увидел в супермаркете объявление на стене: «Требуется доставщик пиццы».' },
        'Und haben Sie sich gleich beworben?': { literal: 'И подали Вы себя сразу', literary: 'И вы сразу подали заявку?' },
        'Nein, zuerst habe ich gedacht, ich bekomme die Stelle nicht, weil ich ja keinen Führerschein habe, und habe zwei Wochen gewartet.': { literal: 'Нет, сначала подумал я, я получу место не, потому что я же никаких прав не имею, и ждал две недели', literary: 'Нет, сначала я подумал, что не получу эту должность, потому что у меня нет водительских прав, и две недели ждал.' },
        'Dann aber hat meine Freundin gesagt: „Du hast doch ein schnelles Fahrrad.': { literal: 'Тогда но сказала моя подруга: «Ты имеешь же быстрый велосипед', literary: 'Но потом моя подруга сказала: «У тебя же быстрый велосипед.' },
        'Geh doch mal in die Pizzeria und sprich dort mit dem Chef.': { literal: 'Иди же разок в пиццерию и поговори там с шефом', literary: 'Сходи-ка в пиццерию и поговори там с начальником.' },
        'Vielleicht brauchst du ja für den Job kein Auto."': { literal: 'Возможно нужен тебе же для работы никакой автомобиль', literary: 'Может, для этой работы тебе и не нужна машина».' },
        'Und haben Sie das gemacht?': { literal: 'И сделали Вы это', literary: 'И вы так и сделали?' },
        'Ja, ich bin da vorbeigegangen und habe mit dem Chef geredet.': { literal: 'Да, я прошёл мимо и поговорил с шефом', literary: 'Да, я зашёл туда и поговорил с начальником.' },
        'Der Chef war sehr freundlich, und als ich ihm erzählt habe, dass ich die Stadt sehr gut kenne und super schnell Fahrrad fahren kann, hat er mir den Job gegeben – auch ohne Auto.': { literal: 'Шеф был очень дружелюбный, и когда я ему рассказал, что я город очень хорошо знаю и супер быстро на велосипеде ехать могу, дал он мне работу — также без машины', literary: 'Начальник был очень приветливый, и когда я рассказал, что хорошо знаю город и быстро езжу на велосипеде, он дал мне работу — даже без машины.' },
        'Und wie ist die Arbeit?': { literal: 'И как есть работа', literary: 'И как работа?' },
        'Ich arbeite immer von 16 bis 22 Uhr.': { literal: 'Я работаю всегда от 16 до 22 часов', literary: 'Я работаю с 16 до 22 часов.' },
        'Ich bin in der Pizzeria und warte, dass Kunden anrufen.': { literal: 'Я есть в пиццерии и жду, что клиенты позвонят', literary: 'Я в пиццерии и жду, когда позвонят клиенты.' },
        'Und wenn es nichts zu tun gibt, helfe ich in der Küche.': { literal: 'И когда это ничего делать даёт, помогаю я в кухне', literary: 'А когда нечего делать, помогаю на кухне.' },
        'Sie sind also zufrieden?': { literal: 'Вы есть значит довольный', literary: 'Значит, вы довольны?' },
        'Ja, ich bin froh, dass ich jetzt seit einem halben Jahr einen Job habe.': { literal: 'Да, я есть рад, что я теперь с половины года работу имею', literary: 'Да, я рад, что уже полгода у меня есть работа.' },
        'Bald fange ich mit meiner Ausbildung an.': { literal: 'Скоро начинаю я с моим обучением', literary: 'Скоро начну профобучение.' },
        'Dann kann ich sicher auch noch bei der Pizzeria weiterarbeiten – mit weniger Stunden.': { literal: 'Тогда могу я наверняка также ещё при пиццерии продолжать работать — с меньшим количеством часов', literary: 'Тогда я точно смогу продолжить работать в пиццерии — с меньшим количеством часов.' },
      },
      vocabulary: [
        { de: 'die Radiosendung', plural: 'die Radiosendungen', ru: 'радиопередача', gender: 'feminin', collocation: 'in unserer Radiosendung', example: 'In unserer Radiosendung „Wie kann ich Arbeit finden?" wollten Sie uns auch etwas erzählen.' },
        { de: 'die Jobbörse', plural: 'die Jobbörsen', ru: 'биржа труда', gender: 'feminin', collocation: 'viele Jobbörsen', example: 'Im Internet gibt es viele Jobbörsen.' },
        { de: 'die Anzeige', plural: 'die Anzeigen', ru: 'объявление', gender: 'feminin', collocation: 'eine Anzeige sehen', example: 'Ich habe in einem Supermarkt eine Anzeige an der Wand gesehen.' },
        { de: 'die Stelle', plural: 'die Stellen', ru: 'должность, место', gender: 'feminin', collocation: 'die Stelle bekommen', example: 'Ich bekomme die Stelle nicht.' },
        { de: 'der Führerschein', plural: 'die Führerscheine', ru: 'водительские права', gender: 'maskulin', collocation: 'keinen Führerschein haben', example: 'Weil ich ja keinen Führerschein habe.' },
        { de: 'der Chef', plural: 'die Chefs', ru: 'начальник, шеф', gender: 'maskulin', collocation: 'mit dem Chef sprechen', example: 'Ich habe mit dem Chef geredet.' },
        { de: 'der Kunde', plural: 'die Kunden', ru: 'клиент', gender: 'maskulin', collocation: 'Kunden anrufen', example: 'Ich bin in der Pizzeria und warte, dass Kunden anrufen.' },
        { de: 'die Küche', plural: 'die Küchen', ru: 'кухня', gender: 'feminin', collocation: 'in der Küche helfen', example: 'Und wenn es nichts zu tun gibt, helfe ich in der Küche.' },
        { de: 'die Ausbildung', plural: 'die Ausbildungen', ru: 'профобучение', gender: 'feminin', collocation: 'mit der Ausbildung anfangen', example: 'Bald fange ich mit meiner Ausbildung an.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Und wo haben Sie noch gesucht?' },
        { de: 'sich bewerben', ru: 'подавать заявление', type: 'verb', forms: 'bewirbt sich, bewarb sich, hat sich beworben', example: 'Und haben Sie sich gleich beworben?' },
        { de: 'vorbeigehen', ru: 'заходить, проходить мимо', type: 'verb', forms: 'geht vorbei, ging vorbei, ist vorbeigegangen', example: 'Ja, ich bin da vorbeigegangen.' },
        { de: 'erzählen', ru: 'рассказывать', type: 'verb', forms: 'erzählt, erzählte, hat erzählt', example: 'Als ich ihm erzählt habe, dass ich die Stadt sehr gut kenne.' },
        { de: 'weiterarbeiten', ru: 'продолжать работать', type: 'verb', forms: 'arbeitet weiter, arbeitete weiter, hat weitergearbeitet', example: 'Dann kann ich sicher auch noch bei der Pizzeria weiterarbeiten.' },
        { de: 'arbeitslos', ru: 'безработный', type: 'adj', example: 'Nun, ich war ja arbeitslos.' },
        { de: 'zufrieden', ru: 'довольный', type: 'adj', example: 'Sie sind also zufrieden?' },
        { de: 'froh', ru: 'рад', type: 'adj', example: 'Ja, ich bin froh, dass ich jetzt seit einem halben Jahr einen Job habe.' },
      ],
      practiceSentences: [
        { de: 'Im Supermarkt gibt es viele Angebote.', ru: 'В супермаркете много акций.', note: 'es gibt + Akk' },
        { de: 'Ich habe kein Glück gehabt.', ru: 'Мне не повезло.', note: 'Perfekt' },
        { de: 'Als ich Student war, hatte ich kein Geld.', ru: 'Когда я был студентом, у меня не было денег.', note: 'конец в als-придаточном' },
        { de: 'Ich arbeite seit zwei Jahren hier.', ru: 'Я работаю здесь два года.', note: 'V2' },
        { de: 'Morgen fange ich mit dem Kurs an.', ru: 'Завтра я начинаю курс.', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Wo hat Mohammed die Stellenanzeige gesehen?',
        ru: 'Где Мохаммед увидел объявление о работе?',
        options: [
          { de: 'Im Internet', ru: 'В интернете' },
          { de: 'In einem Supermarkt', ru: 'В супермаркете' },
          { de: 'In der Pizzeria', ru: 'В пиццерии' },
        ],
        correct: 1,
        explanation: 'Мохаммед рассказывает: "ich bin durch die Straßen gelaufen und habe dann in einem Supermarkt eine Anzeige an der Wand gesehen."'
      }
    },
  ],

  /* ─── Агрегированный словарь ─── */
  get vocabulary() {
    var all = [];
    this.texts.forEach(function(t) {
      if (t.vocabulary) {
        t.vocabulary.forEach(function(v) {
          all.push({
            de: v.de,
            ru: v.ru,
            gender: v.gender || null,
            example: v.example || v.collocation || '',
          });
        });
      }
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
    title: 'ОДИН ДЕНЬ В ГОРОДЕ',
    text: 'Наконец-то наступила {0}! На выходных будет {1} и тепло. На радио можно {2} пять билетов на дискотеку. Все {3} перед бассейном заняты, можно парковаться за {4}. У врача {5} нужно подождать полчаса. Паулина не может пойти в {6}, потому что её дочь заболела. На домашнем празднике Сюзанна готовит {7} с рисом, а Беата принесёт {8}. Герхард не может помочь прямо сейчас — ему нужно {9} уйти. Господин Шнайдер ездит на работу на {10}, потому что метро слишком {11}. Мохаммед нашёл {12} в супермаркете и теперь работает доставщиком пиццы.',
    blanks: [
      { answer: 'der Frühling', hint: 'весна (der Frühling)' },
      { answer: 'sonnig', hint: 'солнечно (sonnig)' },
      { answer: 'gewinnen', hint: 'выиграть (gewinnen)' },
      { answer: 'Parkplätze', hint: 'парковки (der Parkplatz, Pl.)' },
      { answer: 'dem Sportplatz', hint: 'спортплощадка (der Sportplatz, Dat.)' },
      { answer: 'Herr Meer', hint: 'господин Меер' },
      { answer: 'das Kino', hint: 'кинотеатр (das Kino)' },
      { answer: 'Hähnchen', hint: 'курица (das Hähnchen)' },
      { answer: 'den Kuchen', hint: 'пирог (der Kuchen, Akk.)' },
      { answer: 'gleich', hint: 'сразу (gleich)' },
      { answer: 'dem Fahrrad', hint: 'велосипед (das Fahrrad, Dat.)' },
      { answer: 'teuer', hint: 'дорогой (teuer)' },
      { answer: 'die Anzeige', hint: 'объявление (die Anzeige)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Wetter).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'sich freuen auf + Akk: sich auf Temperaturen freuen',
    'wegen + Genitiv: wegen des guten Wetters',
    'weil-Nebensatz: глагол в конце — weil ich keinen Führerschein habe',
    'Отделяемые приставки: anfangen, anrufen, abstellen, mitbringen, vorbeigehen, weiterarbeiten',
    'Модальные глаголы: können, müssen, möchte, wollen, könnte, wäre',
    'Konjunktiv II: könnte eine Suppe machen, wäre die U-Bahn bequemer',
    'dass-Nebensatz: dass ich Getränke hole, dass sie einen Kuchen mitbringen will',
    'Perfekt с sein: ist krank geworden, bin gelaufen, ist vorbeigegangen',
    'deshalb + V2: Deshalb nehme ich jetzt das Fahrrad',
    'als-Nebensatz: als ich ihm erzählt habe',
  ],
};

LESSONS.push(LESSON_28);
