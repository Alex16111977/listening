/* ═══════════════════════════════════════════════════════════
   Lesson 12 — Goethe Zertifikat A2 Hören Modelltest 12
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_12 = {
  id: 'lesson-12',
  number: 12,
  title: 'Goethe A2 Hören — Modelltest 12',
  subtitle: 'Museen, Wetter, Abendessen, Schwester Maria, Tennis, Film-Dialog, Party, Kleid, Konzert, Ausbildung, Drucker, Skiläufer Alexander',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-12',
  videoUrl: 'https://www.youtube.com/watch?v=_fyYwSOJHCo',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Herr Fichte',
      type: 'телефонное сообщение',
      text: 'Guten Tag. Ja, also als Kind bin ich mit meinen Eltern in viele Museen und Ausstellungen gegangen. Ich habe immer hier in der Großstadt gelebt. Am besten gefallen mir die Kunst von heute und die Fotografie. Ich fotografiere ja auch selbst gern, zum Beispiel Menschen und Tiere in der Natur.',
      sentenceTranslations: {
        'Guten Tag.': { literal: 'Добрый день.', literary: 'Добрый день.' },
        'Ja, also als Kind bin ich mit meinen Eltern in viele Museen und Ausstellungen gegangen.': { literal: 'Да, итак, как ребёнок, есть я с моими родителями во многие музеи и выставки ходил.', literary: 'Да, в детстве я с родителями ходил во многие музеи и на выставки.' },
        'Ich habe immer hier in der Großstadt gelebt.': { literal: 'Я имею всегда здесь в большом-городе жил.', literary: 'Я всегда жил здесь, в большом городе.' },
        'Am besten gefallen mir die Kunst von heute und die Fotografie.': { literal: 'Наилучшим образом нравятся мне искусство от сегодня и фотография.', literary: 'Больше всего мне нравится современное искусство и фотография.' },
        'Ich fotografiere ja auch selbst gern, zum Beispiel Menschen und Tiere in der Natur.': { literal: 'Я фотографирую ведь также сам охотно, к примеру людей и животных в природе.', literary: 'Я ведь и сам люблю фотографировать, например, людей и животных на природе.' },
      },
      vocabulary: [
        { de: 'das Museum', plural: 'die Museen', ru: 'музей', gender: 'neutrum', collocation: 'ins Museum gehen', example: 'Als Kind bin ich mit meinen Eltern in viele Museen und Ausstellungen gegangen.' },
        { de: 'die Ausstellung', plural: 'die Ausstellungen', ru: 'выставка', gender: 'feminin', collocation: 'Ausstellungen besuchen', example: 'Als Kind bin ich mit meinen Eltern in viele Museen und Ausstellungen gegangen.' },
        { de: 'die Großstadt', plural: 'die Großstädte', ru: 'большой город', gender: 'feminin', collocation: 'in der Großstadt leben', example: 'Ich habe immer hier in der Großstadt gelebt.' },
        { de: 'die Kunst', plural: 'die Künste', ru: 'искусство', gender: 'feminin', collocation: 'die Kunst von heute', example: 'Am besten gefallen mir die Kunst von heute und die Fotografie.' },
        { de: 'die Fotografie', plural: 'die Fotografien', ru: 'фотография', gender: 'feminin', collocation: 'Fotografie mögen', example: 'Am besten gefallen mir die Kunst von heute und die Fotografie.' },
        { de: 'die Natur', ru: 'природа', gender: 'feminin', collocation: 'in der Natur', example: 'Ich fotografiere ja auch selbst gern, zum Beispiel Menschen und Tiere in der Natur.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Am besten gefallen mir die Kunst von heute und die Fotografie.' },
        { de: 'fotografieren', ru: 'фотографировать', type: 'verb', forms: 'fotografiere, fotografierte, hat fotografiert', example: 'Ich fotografiere ja auch selbst gern, zum Beispiel Menschen und Tiere in der Natur.' },
      ],
      practiceSentences: [
        { de: 'Als Student bin ich oft ins Kino gegangen.', ru: 'Будучи студентом, я часто ходил в кино.', note: 'Perfekt с sein' },
        { de: 'Die Bilder gefallen meiner Mutter sehr gut.', ru: 'Картины очень нравятся моей маме.', note: 'gefallen + Dativ' },
        { de: 'Ich fotografiere meine Familie gern im Park.', ru: 'Я люблю фотографировать свою семью в парке.', note: 'V2' },
        { de: 'Mit meinem Freund gehe ich ins Museum.', ru: 'С моим другом я иду в музей.', note: 'V2 после обстоятельства' },
        { de: 'Am liebsten male ich Landschaften.', ru: 'Больше всего я люблю рисовать пейзажи.', note: 'V2 после Superlativ' },
      ],
      question: {
        de: 'Was fotografiert Herr Fichte gern?',
        ru: 'Что любит фотографировать господин Фихте?',
        options: [
          { de: 'Museen und Ausstellungen', ru: 'Музеи и выставки' },
          { de: 'Menschen und Tiere', ru: 'Людей и животных' },
          { de: 'Die Großstadt', ru: 'Большой город' },
        ],
        correct: 1,
        explanation: 'В тексте прямо говорится: "Ich fotografiere ja auch selbst gern, zum Beispiel Menschen und Tiere in der Natur."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Liebe Zuhörer, das Wetter im Norden bereitet uns heute einige Probleme. Es gibt schon am Morgen viel Regen und am Nachmittag kommt noch starker Westwind dazu. Auch in den nächsten Tagen bleibt es bei zehn Grad kühl und windig. Nur im Süden ist es heute und morgen bei 18 Grad warm und trocken.',
      sentenceTranslations: {
        'Liebe Zuhörer, das Wetter im Norden bereitet uns heute einige Probleme.': { literal: 'Дорогие слушатели, погода на севере готовит нам сегодня некоторые проблемы.', literary: 'Дорогие слушатели, погода на севере сегодня создаёт нам некоторые проблемы.' },
        'Es gibt schon am Morgen viel Regen und am Nachmittag kommt noch starker Westwind dazu.': { literal: 'Оно даёт уже утром много дождя и после-полудня приходит ещё сильный западный-ветер к-тому.', literary: 'Уже утром будет много дождя, а после обеда добавится ещё и сильный западный ветер.' },
        'Auch in den nächsten Tagen bleibt es bei zehn Grad kühl und windig.': { literal: 'Также в следующие дни остаётся оно при десяти градусах прохладно и ветрено.', literary: 'В ближайшие дни также останется прохладно и ветрено при десяти градусах.' },
        'Nur im Süden ist es heute und morgen bei 18 Grad warm und trocken.': { literal: 'Только на юге есть оно сегодня и завтра при 18 градусах тепло и сухо.', literary: 'Только на юге сегодня и завтра будет тепло и сухо при 18 градусах.' },
      },
      vocabulary: [
        { de: 'der Zuhörer', plural: 'die Zuhörer', ru: 'слушатель', gender: 'maskulin', collocation: 'Liebe Zuhörer', example: 'Liebe Zuhörer, das Wetter im Norden bereitet uns heute einige Probleme.' },
        { de: 'der Regen', ru: 'дождь', gender: 'maskulin', collocation: 'viel Regen', example: 'Es gibt schon am Morgen viel Regen und am Nachmittag kommt noch starker Westwind dazu.' },
        { de: 'der Westwind', plural: 'die Westwinde', ru: 'западный ветер', gender: 'maskulin', collocation: 'starker Westwind', example: 'Es gibt schon am Morgen viel Regen und am Nachmittag kommt noch starker Westwind dazu.' },
        { de: 'der Grad', plural: 'die Grade', ru: 'градус', gender: 'maskulin', collocation: 'bei zehn Grad', example: 'Auch in den nächsten Tagen bleibt es bei zehn Grad kühl und windig.' },
        { de: 'bereiten', ru: 'создавать, готовить', type: 'verb', forms: 'bereite, bereitete, hat bereitet', example: 'Liebe Zuhörer, das Wetter im Norden bereitet uns heute einige Probleme.' },
        { de: 'dazukommen', ru: 'добавляться', type: 'verb', forms: 'kommt dazu, kam dazu, ist dazugekommen', example: 'Es gibt schon am Morgen viel Regen und am Nachmittag kommt noch starker Westwind dazu.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Auch in den nächsten Tagen bleibt es bei zehn Grad kühl und windig.' },
        { de: 'windig', ru: 'ветреный', type: 'adj', example: 'Auch in den nächsten Tagen bleibt es bei zehn Grad kühl und windig.' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Nur im Süden ist es heute und morgen bei 18 Grad warm und trocken.' },
      ],
      practiceSentences: [
        { de: 'Es gibt morgen Schnee.', ru: 'Завтра будет снег.', note: 'безличная конструкция' },
        { de: 'Der Wind kommt vom Meer dazu.', ru: 'Ветер с моря добавляется.', note: 'отделяемая приставка' },
        { de: 'Es bleibt heute sonnig.', ru: 'Сегодня останется солнечно.', note: 'V2, bleiben + предикатив' },
        { de: 'Bei 30 Grad ist es sehr heiß.', ru: 'При 30 градусах очень жарко.', note: 'V2 после обстоятельства' },
        { de: 'Das Wetter bereitet keine Probleme.', ru: 'Погода не создаёт проблем.', note: 'V2, переходный глагол' },
      ],
      question: {
        de: 'Wie ist das Wetter im Süden?',
        ru: 'Какая погода на юге?',
        options: [
          { de: 'Kühl und windig bei 10 Grad', ru: 'Прохладно и ветрено при 10 градусах' },
          { de: 'Regen und starker Wind', ru: 'Дождь и сильный ветер' },
          { de: 'Warm und trocken bei 18 Grad', ru: 'Тепло и сухо при 18 градусах' },
        ],
        correct: 2,
        explanation: 'Текст заканчивается: "Nur im Süden ist es heute und morgen bei 18 Grad warm und trocken."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Abendessen',
      type: 'объявление',
      text: 'Achtung, liebe Gäste! Das Abendessen gibt es heute erst um 19 Uhr. Leider ist unser Koch krank. Wir bekommen das Essen heute und morgen aus der Rathausküche. Es gibt heute Abend Waldorfsalat, Rinderbraten mit Gemüse und Schokoladenmousse. Wir entschuldigen uns für die Verspätung und wünschen guten Appetit!',
      sentenceTranslations: {
        'Achtung, liebe Gäste!': { literal: 'Внимание, дорогие гости!', literary: 'Внимание, дорогие гости!' },
        'Das Abendessen gibt es heute erst um 19 Uhr.': { literal: 'Ужин даёт оно сегодня только в 19 часов.', literary: 'Ужин сегодня будет только в 19 часов.' },
        'Leider ist unser Koch krank.': { literal: 'К сожалению, есть наш повар болен.', literary: 'К сожалению, наш повар болен.' },
        'Wir bekommen das Essen heute und morgen aus der Rathausküche.': { literal: 'Мы получаем еду сегодня и завтра из ратуши-кухни.', literary: 'Сегодня и завтра мы получаем еду из кухни ратуши.' },
        'Es gibt heute Abend Waldorfsalat, Rinderbraten mit Gemüse und Schokoladenmousse.': { literal: 'Оно даёт сегодня вечером вальдорфский-салат, говядина-жаркое с овощами и шоколадный-мусс.', literary: 'Сегодня вечером будет салат "Вальдорф", жаркое из говядины с овощами и шоколадный мусс.' },
        'Wir entschuldigen uns für die Verspätung und wünschen guten Appetit!': { literal: 'Мы извиняем себя за опоздание и желаем хороший аппетит!', literary: 'Приносим извинения за задержку и желаем приятного аппетита!' },
      },
      vocabulary: [
        { de: 'der Gast', plural: 'die Gäste', ru: 'гость', gender: 'maskulin', collocation: 'liebe Gäste', example: 'Achtung, liebe Gäste!' },
        { de: 'das Abendessen', plural: 'die Abendessen', ru: 'ужин', gender: 'neutrum', collocation: 'Abendessen gibt es', example: 'Das Abendessen gibt es heute erst um 19 Uhr.' },
        { de: 'der Koch', plural: 'die Köche', ru: 'повар', gender: 'maskulin', collocation: 'Koch ist krank', example: 'Leider ist unser Koch krank.' },
        { de: 'die Rathausküche', plural: 'die Rathausküchen', ru: 'кухня ратуши', gender: 'feminin', collocation: 'aus der Rathausküche', example: 'Wir bekommen das Essen heute und morgen aus der Rathausküche.' },
        { de: 'die Verspätung', plural: 'die Verspätungen', ru: 'опоздание, задержка', gender: 'feminin', collocation: 'für die Verspätung', example: 'Wir entschuldigen uns für die Verspätung und wünschen guten Appetit!' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekomme, bekam, hat bekommen', example: 'Wir bekommen das Essen heute und morgen aus der Rathausküche.' },
        { de: 'sich entschuldigen', ru: 'извиняться', type: 'verb', forms: 'entschuldige mich, entschuldigte mich, hat sich entschuldigt', example: 'Wir entschuldigen uns für die Verspätung und wünschen guten Appetit!' },
        { de: 'wünschen', ru: 'желать', type: 'verb', forms: 'wünsche, wünschte, hat gewünscht', example: 'Wir entschuldigen uns für die Verspätung und wünschen guten Appetit!' },
      ],
      practiceSentences: [
        { de: 'Das Frühstück gibt es erst um 8 Uhr.', ru: 'Завтрак будет только в 8 часов.', note: 'es gibt + время' },
        { de: 'Wir bekommen das Brot aus der Bäckerei.', ru: 'Мы получаем хлеб из пекарни.', note: 'V2, переходный' },
        { de: 'Der Kellner ist heute krank.', ru: 'Официант сегодня болен.', note: 'sein + предикатив' },
        { de: 'Ich entschuldige mich für den Fehler.', ru: 'Я извиняюсь за ошибку.', note: 'возвратный глагол' },
        { de: 'Wir wünschen dir alles Gute!', ru: 'Мы желаем тебе всего хорошего!', note: 'V2, wünschen + Dativ + Akk' },
      ],
      question: {
        de: 'Woher kommt heute das Essen?',
        ru: 'Откуда сегодня еда?',
        options: [
          { de: 'Vom Koch des Hotels', ru: 'От повара отеля' },
          { de: 'Aus der Rathausküche', ru: 'Из кухни ратуши' },
          { de: 'Aus einem Restaurant', ru: 'Из ресторана' },
        ],
        correct: 1,
        explanation: 'В объявлении сказано: "Wir bekommen das Essen heute und morgen aus der Rathausküche."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Maria',
      type: 'телефонное сообщение',
      text: 'Hallo Elisabeth! Hier ist deine Schwester Maria. Toll, dass du mich besuchen willst! Ich hole dich morgen um 13:30 Uhr am Bahnhof ab. Wir fahren dann zusammen mit dem Bus nach Hause. Die Fahrt dauert nur fünf Minuten, aber so müssen wir deine Tasche nicht tragen. Gute Reise! Ich freue mich, dass du kommst. Bis morgen!',
      sentenceTranslations: {
        'Hallo Elisabeth!': { literal: 'Привет, Элизабет!', literary: 'Привет, Элизабет!' },
        'Hier ist deine Schwester Maria.': { literal: 'Здесь есть твоя сестра Мария.', literary: 'Это твоя сестра Мария.' },
        'Toll, dass du mich besuchen willst!': { literal: 'Здорово, что ты меня навестить хочешь!', literary: 'Здорово, что ты хочешь меня навестить!' },
        'Ich hole dich morgen um 13:30 Uhr am Bahnhof ab.': { literal: 'Я забираю тебя завтра в 13:30 часов на вокзале.', literary: 'Я встречу тебя завтра в 13:30 на вокзале.' },
        'Wir fahren dann zusammen mit dem Bus nach Hause.': { literal: 'Мы едем тогда вместе с автобусом к дому.', literary: 'Потом мы вместе поедем домой на автобусе.' },
        'Die Fahrt dauert nur fünf Minuten, aber so müssen wir deine Tasche nicht tragen.': { literal: 'Поездка длится только пять минут, но так должны мы твою сумку не нести.', literary: 'Поездка длится всего пять минут, но зато нам не придётся нести твою сумку.' },
        'Gute Reise!': { literal: 'Хорошую поездку!', literary: 'Счастливого пути!' },
        'Ich freue mich, dass du kommst.': { literal: 'Я радую себя, что ты приходишь.', literary: 'Я рада, что ты приезжаешь.' },
        'Bis morgen!': { literal: 'До завтра!', literary: 'До завтра!' },
      },
      vocabulary: [
        { de: 'die Schwester', plural: 'die Schwestern', ru: 'сестра', gender: 'feminin', collocation: 'deine Schwester', example: 'Hier ist deine Schwester Maria.' },
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'am Bahnhof abholen', example: 'Ich hole dich morgen um 13:30 Uhr am Bahnhof ab.' },
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'mit dem Bus fahren', example: 'Wir fahren dann zusammen mit dem Bus nach Hause.' },
        { de: 'die Fahrt', plural: 'die Fahrten', ru: 'поездка', gender: 'feminin', collocation: 'die Fahrt dauert', example: 'Die Fahrt dauert nur fünf Minuten, aber so müssen wir deine Tasche nicht tragen.' },
        { de: 'die Tasche', plural: 'die Taschen', ru: 'сумка', gender: 'feminin', collocation: 'die Tasche tragen', example: 'Die Fahrt dauert nur fünf Minuten, aber so müssen wir deine Tasche nicht tragen.' },
        { de: 'abholen', ru: 'встречать, забирать', type: 'verb', forms: 'hole ab, holte ab, hat abgeholt', example: 'Ich hole dich morgen um 13:30 Uhr am Bahnhof ab.' },
        { de: 'dauern', ru: 'длиться', type: 'verb', forms: 'dauert, dauerte, hat gedauert', example: 'Die Fahrt dauert nur fünf Minuten, aber so müssen wir deine Tasche nicht tragen.' },
        { de: 'sich freuen', ru: 'радоваться', type: 'verb', forms: 'freue mich, freute mich, hat sich gefreut', example: 'Ich freue mich, dass du kommst.' },
      ],
      practiceSentences: [
        { de: 'Ich hole meine Freundin vom Flughafen ab.', ru: 'Я встречаю подругу в аэропорту.', note: 'отделяемая приставка' },
        { de: 'Wir fahren mit dem Zug nach Berlin.', ru: 'Мы едем в Берлин на поезде.', note: 'V2' },
        { de: 'Die Reise dauert zwei Stunden.', ru: 'Поездка длится два часа.', note: 'V2, dauern' },
        { de: 'Du musst den Koffer nicht tragen.', ru: 'Тебе не нужно нести чемодан.', note: 'модальный + nicht + инфинитив' },
        { de: 'Ich freue mich auf deinen Besuch.', ru: 'Я жду твоего визита с радостью.', note: 'возвратный глагол' },
      ],
      question: {
        de: 'Wie kommen Maria und Elisabeth nach Hause?',
        ru: 'Как Мария и Элизабет поедут домой?',
        options: [
          { de: 'Mit dem Zug', ru: 'На поезде' },
          { de: 'Mit dem Bus', ru: 'На автобусе' },
          { de: 'Zu Fuß', ru: 'Пешком' },
        ],
        correct: 1,
        explanation: 'Мария говорит: "Wir fahren dann zusammen mit dem Bus nach Hause."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Tennis',
      type: 'сообщение',
      text: 'Hallo Malte! Du spielst doch so gern Tennis. Mein Klub organisiert am Wochenende eine Tennisveranstaltung für Spieler ab 18 Jahren. Wenn du willst, schicke ich dir per E-Mail alle wichtigen Informationen.',
      sentenceTranslations: {
        'Hallo Malte!': { literal: 'Привет, Мальте!', literary: 'Привет, Мальте!' },
        'Du spielst doch so gern Tennis.': { literal: 'Ты играешь ведь так охотно теннис.', literary: 'Ты же так любишь играть в теннис.' },
        'Mein Klub organisiert am Wochenende eine Tennisveranstaltung für Spieler ab 18 Jahren.': { literal: 'Мой клуб организует на выходных теннис-мероприятие для игроков от 18 лет.', literary: 'Мой клуб организует на выходных теннисный турнир для игроков от 18 лет.' },
        'Wenn du willst, schicke ich dir per E-Mail alle wichtigen Informationen.': { literal: 'Если ты хочешь, посылаю я тебе через электронную-почту все важные информации.', literary: 'Если хочешь, я пришлю тебе всю важную информацию по электронной почте.' },
      },
      vocabulary: [
        { de: 'der Klub', plural: 'die Klubs', ru: 'клуб', gender: 'maskulin', collocation: 'mein Klub organisiert', example: 'Mein Klub organisiert am Wochenende eine Tennisveranstaltung für Spieler ab 18 Jahren.' },
        { de: 'die Tennisveranstaltung', plural: 'die Tennisveranstaltungen', ru: 'теннисное мероприятие', gender: 'feminin', collocation: 'Tennisveranstaltung organisieren', example: 'Mein Klub organisiert am Wochenende eine Tennisveranstaltung für Spieler ab 18 Jahren.' },
        { de: 'der Spieler', plural: 'die Spieler', ru: 'игрок', gender: 'maskulin', collocation: 'für Spieler ab 18', example: 'Mein Klub organisiert am Wochenende eine Tennisveranstaltung für Spieler ab 18 Jahren.' },
        { de: 'die Information', plural: 'die Informationen', ru: 'информация', gender: 'feminin', collocation: 'wichtige Informationen', example: 'Wenn du willst, schicke ich dir per E-Mail alle wichtigen Informationen.' },
        { de: 'organisieren', ru: 'организовывать', type: 'verb', forms: 'organisiere, organisierte, hat organisiert', example: 'Mein Klub organisiert am Wochenende eine Tennisveranstaltung für Spieler ab 18 Jahren.' },
        { de: 'schicken', ru: 'посылать', type: 'verb', forms: 'schicke, schickte, hat geschickt', example: 'Wenn du willst, schicke ich dir per E-Mail alle wichtigen Informationen.' },
        { de: 'wichtig', ru: 'важный', type: 'adj', example: 'Wenn du willst, schicke ich dir per E-Mail alle wichtigen Informationen.' },
      ],
      practiceSentences: [
        { de: 'Du schwimmst doch gern im See.', ru: 'Ты же любишь плавать в озере.', note: 'V2 с частицей doch' },
        { de: 'Der Verein organisiert ein Fest.', ru: 'Клуб организует праздник.', note: 'V2' },
        { de: 'Wenn es regnet, bleibe ich zu Hause.', ru: 'Если идёт дождь, я остаюсь дома.', note: 'конец в придаточном, V1 в главном' },
        { de: 'Ich schicke dir die Fotos per WhatsApp.', ru: 'Я пошлю тебе фото через WhatsApp.', note: 'V2, переходный глагол' },
        { de: 'Das Turnier ist für Kinder ab 10 Jahren.', ru: 'Турнир для детей от 10 лет.', note: 'sein + предикатив' },
      ],
      question: {
        de: 'Für wen ist die Tennisveranstaltung?',
        ru: 'Для кого теннисное мероприятие?',
        options: [
          { de: 'Für alle Spieler', ru: 'Для всех игроков' },
          { de: 'Für Kinder und Jugendliche', ru: 'Для детей и подростков' },
          { de: 'Für Spieler ab 18 Jahren', ru: 'Для игроков от 18 лет' },
        ],
        correct: 2,
        explanation: 'Прямо указано: "eine Tennisveranstaltung für Spieler ab 18 Jahren."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Film-Dialog',
      type: 'диалог',
      text: 'Kommst du, Franziska? Heute ist Donnerstag, gleich fängt der Krimi an, den wolltest du doch auch sehen. Ich möchte ja gern den Film sehen, aber ich muss noch mal weg. Um 19 Uhr beginnt mein Englischkurs. Frag doch Anna, vielleicht hat die Zeit und Lust. Die ist gerade mit dem Fahrrad zu ihrer Freundin Jutta gefahren und kommt erst später am Abend zurück. Du bist doch so gut in Englisch. Du kannst ruhig hier bleiben und dir den Film ansehen. Ja, das geht nicht. Nach dem Kurs will ich mich dann noch mit Carola treffen und mit ihr über unsere Reise nach England sprechen. Das dauert sicher auch noch eine Stunde. Na ja, ist in Ordnung. Hat sie denn Zeit für die Reise? Klar! Ihr Mann Paul ist doch Lehrer und kann sich nachmittags und abends um die Kinder kümmern. Es sind ja auch nur fünf Tage. Und du weißt doch, ihr Mann ist ein toller Mensch. Er versteht sich gut mit den Kindern. Dem macht es richtig Spaß, auf sie aufzupassen. Ja, ja, ich weiß. Was ist eigentlich mit seinem Bruder Markus? Der ist doch auch Lehrer. Nächstes Jahr geht der vielleicht nach Amerika. Man hat ihm eine Stelle an der Universität angeboten. Tolle Sache! Frag doch halt meinen Sohn Oliver. Unser Sohn? Ja, der sieht gern Filme. Er ist aber gerade zum Einkaufen in die Stadt gefahren. Du hast heute wohl kein Glück.',
      sentenceTranslations: {
        'Kommst du, Franziska?': { literal: 'Идёшь ты, Франциска?', literary: 'Ты идёшь, Франциска?' },
        'Heute ist Donnerstag, gleich fängt der Krimi an, den wolltest du doch auch sehen.': { literal: 'Сегодня есть четверг, сейчас начинается детектив, который хотела ты ведь тоже смотреть.', literary: 'Сегодня четверг, сейчас начинается детектив, который ты тоже хотела посмотреть.' },
        'Ich möchte ja gern den Film sehen, aber ich muss noch mal weg.': { literal: 'Я хотела-бы ведь охотно фильм смотреть, но я должна ещё раз прочь.', literary: 'Я бы с удовольствием посмотрела фильм, но мне нужно уйти.' },
        'Um 19 Uhr beginnt mein Englischkurs.': { literal: 'В 19 часов начинается мой курс-английского.', literary: 'В 19 часов начинается мой курс английского.' },
        'Frag doch Anna, vielleicht hat die Zeit und Lust.': { literal: 'Спроси ведь Анну, может-быть имеет она время и желание.', literary: 'Спроси Анну, может, у неё есть время и желание.' },
        'Die ist gerade mit dem Fahrrad zu ihrer Freundin Jutta gefahren und kommt erst später am Abend zurück.': { literal: 'Она есть как-раз с велосипедом к своей подруге Ютте поехала и приходит только позже вечером назад.', literary: 'Она только что уехала на велосипеде к подруге Ютте и вернётся только позже вечером.' },
        'Du bist doch so gut in Englisch.': { literal: 'Ты есть ведь так хорошо в английском.', literary: 'Ты ведь так хорошо знаешь английский.' },
        'Du kannst ruhig hier bleiben und dir den Film ansehen.': { literal: 'Ты можешь спокойно здесь остаться и себе фильм посмотреть.', literary: 'Ты можешь спокойно остаться здесь и посмотреть фильм.' },
        'Ja, das geht nicht.': { literal: 'Да, это идёт не.', literary: 'Нет, не получится.' },
        'Nach dem Kurs will ich mich dann noch mit Carola treffen und mit ihr über unsere Reise nach England sprechen.': { literal: 'После курса хочу я себя тогда ещё с Каролой встретить и с ней о нашей поездке в Англию говорить.', literary: 'После курса я хочу встретиться с Каролой и поговорить с ней о нашей поездке в Англию.' },
        'Das dauert sicher auch noch eine Stunde.': { literal: 'Это длится точно тоже ещё один час.', literary: 'Это наверняка тоже займёт ещё час.' },
        'Na ja, ist in Ordnung.': { literal: 'Ну да, есть в порядке.', literary: 'Ну ладно, хорошо.' },
        'Hat sie denn Zeit für die Reise?': { literal: 'Имеет она же время для поездки?', literary: 'А у неё есть время на поездку?' },
        'Klar!': { literal: 'Ясно!', literary: 'Конечно!' },
        'Ihr Mann Paul ist doch Lehrer und kann sich nachmittags und abends um die Kinder kümmern.': { literal: 'Её муж Пауль есть ведь учитель и может себя после-обеда и вечерами о детях заботиться.', literary: 'Её муж Пауль — учитель и может днём и вечером присматривать за детьми.' },
        'Es sind ja auch nur fünf Tage.': { literal: 'Оно есть ведь тоже только пять дней.', literary: 'Ведь это всего пять дней.' },
        'Und du weißt doch, ihr Mann ist ein toller Mensch.': { literal: 'И ты знаешь ведь, её муж есть один отличный человек.', literary: 'И ты же знаешь, её муж — замечательный человек.' },
        'Er versteht sich gut mit den Kindern.': { literal: 'Он понимает себя хорошо с детьми.', literary: 'Он хорошо ладит с детьми.' },
        'Dem macht es richtig Spaß, auf sie aufzupassen.': { literal: 'Ему делает оно настоящее удовольствие, на них присматривать.', literary: 'Ему действительно нравится присматривать за ними.' },
        'Ja, ja, ich weiß.': { literal: 'Да, да, я знаю.', literary: 'Да, да, я знаю.' },
        'Was ist eigentlich mit seinem Bruder Markus?': { literal: 'Что есть собственно с его братом Маркусом?', literary: 'А что, кстати, с его братом Маркусом?' },
        'Der ist doch auch Lehrer.': { literal: 'Он есть ведь тоже учитель.', literary: 'Он ведь тоже учитель.' },
        'Nächstes Jahr geht der vielleicht nach Amerika.': { literal: 'Следующий год идёт он может-быть в Америку.', literary: 'В следующем году он, возможно, поедет в Америку.' },
        'Man hat ihm eine Stelle an der Universität angeboten.': { literal: 'Кто-то имеет ему одну должность при университете предложил.', literary: 'Ему предложили должность в университете.' },
        'Tolle Sache!': { literal: 'Отличная вещь!', literary: 'Здорово!' },
        'Frag doch halt meinen Sohn Oliver.': { literal: 'Спроси ведь просто моего сына Оливера.', literary: 'Ну спроси тогда моего сына Оливера.' },
        'Unser Sohn?': { literal: 'Наш сын?', literary: 'Наш сын?' },
        'Ja, der sieht gern Filme.': { literal: 'Да, он смотрит охотно фильмы.', literary: 'Да, он любит смотреть фильмы.' },
        'Er ist aber gerade zum Einkaufen in die Stadt gefahren.': { literal: 'Он есть но как-раз к покупкам в город поехал.', literary: 'Но он только что уехал за покупками в город.' },
        'Du hast heute wohl kein Glück.': { literal: 'Ты имеешь сегодня наверное никакое счастье.', literary: 'Тебе сегодня, похоже, не везёт.' },
      },
      vocabulary: [
        { de: 'der Krimi', plural: 'die Krimis', ru: 'детектив', gender: 'maskulin', collocation: 'den Krimi ansehen', example: 'Heute ist Donnerstag, gleich fängt der Krimi an, den wolltest du doch auch sehen.' },
        { de: 'der Englischkurs', plural: 'die Englischkurse', ru: 'курс английского', gender: 'maskulin', collocation: 'Englischkurs beginnt', example: 'Um 19 Uhr beginnt mein Englischkurs.' },
        { de: 'die Freundin', plural: 'die Freundinnen', ru: 'подруга', gender: 'feminin', collocation: 'zu ihrer Freundin fahren', example: 'Die ist gerade mit dem Fahrrad zu ihrer Freundin Jutta gefahren und kommt erst später am Abend zurück.' },
        { de: 'die Reise', plural: 'die Reisen', ru: 'поездка', gender: 'feminin', collocation: 'über die Reise sprechen', example: 'Nach dem Kurs will ich mich dann noch mit Carola treffen und mit ihr über unsere Reise nach England sprechen.' },
        { de: 'die Stelle', plural: 'die Stellen', ru: 'должность', gender: 'feminin', collocation: 'eine Stelle anbieten', example: 'Man hat ihm eine Stelle an der Universität angeboten.' },
        { de: 'das Glück', ru: 'счастье, удача', gender: 'neutrum', collocation: 'kein Glück haben', example: 'Du hast heute wohl kein Glück.' },
        { de: 'anfangen', ru: 'начинаться', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Heute ist Donnerstag, gleich fängt der Krimi an, den wolltest du doch auch sehen.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'treffe mich, traf mich, hat sich getroffen', example: 'Nach dem Kurs will ich mich dann noch mit Carola treffen und mit ihr über unsere Reise nach England sprechen.' },
        { de: 'sich kümmern um', ru: 'заботиться о', type: 'verb', forms: 'kümmere mich, kümmerte mich, hat sich gekümmert', example: 'Ihr Mann Paul ist doch Lehrer und kann sich nachmittags und abends um die Kinder kümmern.' },
        { de: 'aufpassen auf', ru: 'присматривать за', type: 'verb', forms: 'passe auf, passte auf, hat aufgepasst', example: 'Dem macht es richtig Spaß, auf sie aufzupassen.' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'biete an, bot an, hat angeboten', example: 'Man hat ihm eine Stelle an der Universität angeboten.' },
      ],
      practiceSentences: [
        { de: 'Der Unterricht fängt um 8 Uhr an.', ru: 'Занятие начинается в 8 часов.', note: 'отделяемая приставка' },
        { de: 'Ich muss heute früh weg.', ru: 'Мне нужно сегодня рано уйти.', note: 'модальный + наречие' },
        { de: 'Sie ist mit dem Auto zur Arbeit gefahren.', ru: 'Она поехала на работу на машине.', note: 'Perfekt с sein' },
        { de: 'Ich verstehe mich gut mit meinem Chef.', ru: 'Я хорошо лажу с начальником.', note: 'возвратный глагол' },
        { de: 'Es macht mir Spaß, Deutsch zu lernen.', ru: 'Мне нравится учить немецкий.', note: 'безличная конструкция' },
      ],
      question: {
        de: 'Warum kann Franziska den Film nicht sehen?',
        ru: 'Почему Франциска не может посмотреть фильм?',
        options: [
          { de: 'Sie muss zum Englischkurs und trifft sich danach mit Carola', ru: 'Ей нужно на курс английского, а потом встретиться с Каролой' },
          { de: 'Sie muss mit Anna zu Jutta fahren', ru: 'Ей нужно с Анной поехать к Ютте' },
          { de: 'Sie muss mit ihrem Mann über die Kinder sprechen', ru: 'Ей нужно с мужем поговорить о детях' },
        ],
        correct: 0,
        explanation: 'Франциска объясняет: "Um 19 Uhr beginnt mein Englischkurs" и "Nach dem Kurs will ich mich dann noch mit Carola treffen."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Party-Essen',
      type: 'диалог',
      text: 'Was haben Sie denn gestern Abend auf der Party gegessen? Ich wollte Pizza essen, aber es gab keine. Es gab viele andere gute Sachen. Zum Beispiel gab es so kleine Brötchen mit Schinken und Käse. Das sah gut aus. Und der Fleischsalat hat mir sofort gefallen. Also habe ich den genommen. Hat prima geschmeckt! Klingt gut.',
      sentenceTranslations: {
        'Was haben Sie denn gestern Abend auf der Party gegessen?': { literal: 'Что имеете Вы же вчера вечером на вечеринке съели?', literary: 'Что же Вы ели вчера вечером на вечеринке?' },
        'Ich wollte Pizza essen, aber es gab keine.': { literal: 'Я хотел пиццу есть, но оно давало никакую.', literary: 'Я хотел съесть пиццу, но её не было.' },
        'Es gab viele andere gute Sachen.': { literal: 'Оно давало многие другие хорошие вещи.', literary: 'Было много других вкусных вещей.' },
        'Zum Beispiel gab es so kleine Brötchen mit Schinken und Käse.': { literal: 'К примеру давало оно такие маленькие булочки с ветчиной и сыром.', literary: 'Например, были такие маленькие булочки с ветчиной и сыром.' },
        'Das sah gut aus.': { literal: 'Это смотрелось хорошо.', literary: 'Это выглядело аппетитно.' },
        'Und der Fleischsalat hat mir sofort gefallen.': { literal: 'И мясной-салат имеет мне сразу понравился.', literary: 'И мясной салат мне сразу понравился.' },
        'Also habe ich den genommen.': { literal: 'Итак имею я его взял.', literary: 'Вот я его и взял.' },
        'Hat prima geschmeckt!': { literal: 'Имеет отлично было-вкусно!', literary: 'Было очень вкусно!' },
        'Klingt gut.': { literal: 'Звучит хорошо.', literary: 'Звучит хорошо.' },
      },
      vocabulary: [
        { de: 'die Party', plural: 'die Partys', ru: 'вечеринка', gender: 'feminin', collocation: 'auf der Party', example: 'Was haben Sie denn gestern Abend auf der Party gegessen?' },
        { de: 'das Brötchen', plural: 'die Brötchen', ru: 'булочка', gender: 'neutrum', collocation: 'kleine Brötchen', example: 'Zum Beispiel gab es so kleine Brötchen mit Schinken und Käse.' },
        { de: 'der Schinken', ru: 'ветчина', gender: 'maskulin', collocation: 'mit Schinken', example: 'Zum Beispiel gab es so kleine Brötchen mit Schinken und Käse.' },
        { de: 'der Fleischsalat', plural: 'die Fleischsalate', ru: 'мясной салат', gender: 'maskulin', collocation: 'Fleischsalat essen', example: 'Und der Fleischsalat hat mir sofort gefallen.' },
        { de: 'schmecken', ru: 'быть вкусным', type: 'verb', forms: 'schmeckt, schmeckte, hat geschmeckt', example: 'Hat prima geschmeckt!' },
        { de: 'aussehen', ru: 'выглядеть', type: 'verb', forms: 'sieht aus, sah aus, hat ausgesehen', example: 'Das sah gut aus.' },
        { de: 'sofort', ru: 'сразу', type: 'adv', example: 'Und der Fleischsalat hat mir sofort gefallen.' },
      ],
      practiceSentences: [
        { de: 'Was hast du zum Frühstück gegessen?', ru: 'Что ты ел на завтрак?', note: 'Perfekt, вопрос' },
        { de: 'Es gab keinen Kuchen mehr.', ru: 'Торта больше не было.', note: 'Präteritum, es gab' },
        { de: 'Die Suppe hat gut geschmeckt.', ru: 'Суп был вкусным.', note: 'Perfekt, schmecken' },
        { de: 'Das Essen hat allen gefallen.', ru: 'Еда всем понравилась.', note: 'Perfekt, gefallen + Dativ' },
        { de: 'Ich wollte Salat essen.', ru: 'Я хотел съесть салат.', note: 'Präteritum модального' },
      ],
      question: {
        de: 'Was hat die Person auf der Party gegessen?',
        ru: 'Что человек ел на вечеринке?',
        options: [
          { de: 'Pizza', ru: 'Пиццу' },
          { de: 'Fleischsalat', ru: 'Мясной салат' },
          { de: 'Brötchen mit Schinken und Käse', ru: 'Булочки с ветчиной и сыром' },
        ],
        correct: 1,
        explanation: 'Человек говорит: "Der Fleischsalat hat mir sofort gefallen. Also habe ich den genommen."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Kleid',
      type: 'диалог в магазине',
      text: 'Was darf es sein? Mir gefällt das Kleid mit den kleinen Blumen. Welche Größe haben Sie denn? Dieses Kleid haben wir nur noch in Größe 40. Schade, ich habe Größe 36. Gefällt Ihnen vielleicht das mit den großen roten Rosen oder das hier mit den Punkten? Für die Kleider bin ich zu jung. Sie könnten meiner Mutter gefallen.',
      sentenceTranslations: {
        'Was darf es sein?': { literal: 'Что может оно быть?', literary: 'Что желаете?' },
        'Mir gefällt das Kleid mit den kleinen Blumen.': { literal: 'Мне нравится платье с маленькими цветами.', literary: 'Мне нравится платье с мелкими цветами.' },
        'Welche Größe haben Sie denn?': { literal: 'Какой размер имеете Вы же?', literary: 'Какой у Вас размер?' },
        'Dieses Kleid haben wir nur noch in Größe 40.': { literal: 'Это платье имеем мы только ещё в размере 40.', literary: 'Это платье у нас осталось только в 40-м размере.' },
        'Schade, ich habe Größe 36.': { literal: 'Жаль, я имею размер 36.', literary: 'Жаль, у меня 36-й размер.' },
        'Gefällt Ihnen vielleicht das mit den großen roten Rosen oder das hier mit den Punkten?': { literal: 'Нравится Вам может-быть то с большими красными розами или то здесь с точками?', literary: 'Может, Вам понравится вот это с крупными красными розами или это с горошком?' },
        'Für die Kleider bin ich zu jung.': { literal: 'Для этих платьев есть я слишком молода.', literary: 'Я слишком молода для таких платьев.' },
        'Sie könnten meiner Mutter gefallen.': { literal: 'Они могли-бы моей матери понравиться.', literary: 'Они могли бы понравиться моей маме.' },
      },
      vocabulary: [
        { de: 'das Kleid', plural: 'die Kleider', ru: 'платье', gender: 'neutrum', collocation: 'Kleid mit Blumen', example: 'Mir gefällt das Kleid mit den kleinen Blumen.' },
        { de: 'die Blume', plural: 'die Blumen', ru: 'цветок', gender: 'feminin', collocation: 'kleine Blumen', example: 'Mir gefällt das Kleid mit den kleinen Blumen.' },
        { de: 'die Größe', plural: 'die Größen', ru: 'размер', gender: 'feminin', collocation: 'welche Größe', example: 'Welche Größe haben Sie denn?' },
        { de: 'die Rose', plural: 'die Rosen', ru: 'роза', gender: 'feminin', collocation: 'rote Rosen', example: 'Gefällt Ihnen vielleicht das mit den großen roten Rosen oder das hier mit den Punkten?' },
        { de: 'die Mutter', plural: 'die Mütter', ru: 'мама', gender: 'feminin', collocation: 'meiner Mutter gefallen', example: 'Sie könnten meiner Mutter gefallen.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Mir gefällt das Kleid mit den kleinen Blumen.' },
      ],
      practiceSentences: [
        { de: 'Das T-Shirt gefällt meinem Bruder.', ru: 'Футболка нравится моему брату.', note: 'gefallen + Dativ' },
        { de: 'Wir haben diese Schuhe nur in Schwarz.', ru: 'У нас эти туфли только в чёрном цвете.', note: 'V2, haben' },
        { de: 'Diese Jacke ist mir zu groß.', ru: 'Эта куртка мне велика.', note: 'sein + zu + прилагательное' },
        { de: 'Das könnte dir passen.', ru: 'Это могло бы тебе подойти.', note: 'Konjunktiv II' },
        { de: 'Welche Farbe möchten Sie?', ru: 'Какой цвет Вы бы хотели?', note: 'Konjunktiv вежливости' },
      ],
      question: {
        de: 'Welche Größe hat die Kundin?',
        ru: 'Какой размер у покупательницы?',
        options: [
          { de: 'Größe 36', ru: 'Размер 36' },
          { de: 'Größe 40', ru: 'Размер 40' },
          { de: 'Das wird nicht gesagt', ru: 'Не говорится' },
        ],
        correct: 0,
        explanation: 'Покупательница говорит: "Schade, ich habe Größe 36."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Konzert',
      type: 'телефонный разговор',
      text: 'Hallo Sina, hier ist Tobias. Hallo Tobias, wie geht es dir? Gut! Ich habe Karten für Samstag im Schlosspark. Kommst du mit? Ich glaube, das Konzert findet auf dem Marktplatz statt. Ich weiß. Zuerst haben sie sogar gesagt, dass sie das Konzert im Rathaus machen, aber jetzt habe ich die Karten. Da steht: Schlosspark. Super, gern!',
      sentenceTranslations: {
        'Hallo Sina, hier ist Tobias.': { literal: 'Привет Зина, здесь есть Тобиас.', literary: 'Привет, Зина, это Тобиас.' },
        'Hallo Tobias, wie geht es dir?': { literal: 'Привет Тобиас, как идёт оно тебе?', literary: 'Привет, Тобиас, как дела?' },
        'Gut!': { literal: 'Хорошо!', literary: 'Хорошо!' },
        'Ich habe Karten für Samstag im Schlosspark.': { literal: 'Я имею билеты для субботы в дворцовом-парке.', literary: 'У меня есть билеты на субботу в Дворцовый парк.' },
        'Kommst du mit?': { literal: 'Идёшь ты с?', literary: 'Пойдёшь со мной?' },
        'Ich glaube, das Konzert findet auf dem Marktplatz statt.': { literal: 'Я думаю, концерт находит на рыночной-площади место.', literary: 'Мне кажется, концерт проходит на Рыночной площади.' },
        'Ich weiß.': { literal: 'Я знаю.', literary: 'Я знаю.' },
        'Zuerst haben sie sogar gesagt, dass sie das Konzert im Rathaus machen, aber jetzt habe ich die Karten.': { literal: 'Сначала имеют они даже сказали, что они концерт в ратуше делают, но сейчас имею я билеты.', literary: 'Сначала даже говорили, что концерт будет в ратуше, но сейчас у меня есть билеты.' },
        'Da steht: Schlosspark.': { literal: 'Там стоит: дворцовый-парк.', literary: 'Там написано: Дворцовый парк.' },
        'Super, gern!': { literal: 'Супер, охотно!', literary: 'Супер, с удовольствием!' },
      },
      vocabulary: [
        { de: 'die Karte', plural: 'die Karten', ru: 'билет', gender: 'feminin', collocation: 'Karten haben', example: 'Ich habe Karten für Samstag im Schlosspark.' },
        { de: 'der Schlosspark', plural: 'die Schlossparks', ru: 'дворцовый парк', gender: 'maskulin', collocation: 'im Schlosspark', example: 'Ich habe Karten für Samstag im Schlosspark.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'Konzert findet statt', example: 'Ich glaube, das Konzert findet auf dem Marktplatz statt.' },
        { de: 'der Marktplatz', plural: 'die Marktplätze', ru: 'рыночная площадь', gender: 'maskulin', collocation: 'auf dem Marktplatz', example: 'Ich glaube, das Konzert findet auf dem Marktplatz statt.' },
        { de: 'das Rathaus', plural: 'die Rathäuser', ru: 'ратуша', gender: 'neutrum', collocation: 'im Rathaus', example: 'Zuerst haben sie sogar gesagt, dass sie das Konzert im Rathaus machen, aber jetzt habe ich die Karten.' },
        { de: 'stattfinden', ru: 'проходить, состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Ich glaube, das Konzert findet auf dem Marktplatz statt.' },
        { de: 'mitkommen', ru: 'идти вместе', type: 'verb', forms: 'komme mit, kam mit, ist mitgekommen', example: 'Kommst du mit?' },
      ],
      practiceSentences: [
        { de: 'Wie geht es deiner Familie?', ru: 'Как дела у твоей семьи?', note: 'es geht + Dativ' },
        { de: 'Das Fest findet im Park statt.', ru: 'Праздник проходит в парке.', note: 'отделяемая приставка' },
        { de: 'Kommst du heute Abend mit?', ru: 'Пойдёшь сегодня вечером со мной?', note: 'отделяемая приставка в вопросе' },
        { de: 'Ich habe Tickets für Sonntag.', ru: 'У меня билеты на воскресенье.', note: 'V2, haben' },
        { de: 'Da steht mein Name.', ru: 'Там написано моё имя.', note: 'V2, stehen' },
      ],
      question: {
        de: 'Wo findet das Konzert statt?',
        ru: 'Где проходит концерт?',
        options: [
          { de: 'Auf dem Marktplatz', ru: 'На Рыночной площади' },
          { de: 'Im Rathaus', ru: 'В ратуше' },
          { de: 'Im Schlosspark', ru: 'В Дворцовом парке' },
        ],
        correct: 2,
        explanation: 'Тобиас уточняет: "Jetzt habe ich die Karten. Da steht: Schlosspark."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Claudia in Köln',
      type: 'диалог',
      text: 'Claudia, was machst du denn in Köln? Hallo! Ja, so eine Überraschung! Ich habe einen Ausbildungsplatz gesucht. Erst in einem Hotel gefragt, danach war ich in einer Großküche. Alles nicht geklappt! Aber jetzt bin ich in einem Restaurant. Die haben mich genommen. Ich bleibe drei Jahre hier. Glückwunsch!',
      sentenceTranslations: {
        'Claudia, was machst du denn in Köln?': { literal: 'Клаудия, что делаешь ты же в Кёльне?', literary: 'Клаудия, что ты делаешь в Кёльне?' },
        'Hallo!': { literal: 'Привет!', literary: 'Привет!' },
        'Ja, so eine Überraschung!': { literal: 'Да, такая одна неожиданность!', literary: 'Да, вот это сюрприз!' },
        'Ich habe einen Ausbildungsplatz gesucht.': { literal: 'Я имею учебное-место искал.', literary: 'Я искала место для обучения.' },
        'Erst in einem Hotel gefragt, danach war ich in einer Großküche.': { literal: 'Сначала в отеле спросила, потом была я на большой кухне.', literary: 'Сначала спрашивала в отеле, потом была на большой кухне.' },
        'Alles nicht geklappt!': { literal: 'Всё не сработало!', literary: 'Ничего не получилось!' },
        'Aber jetzt bin ich in einem Restaurant.': { literal: 'Но сейчас есть я в ресторане.', literary: 'Но сейчас я в ресторане.' },
        'Die haben mich genommen.': { literal: 'Они имеют меня взяли.', literary: 'Они меня взяли.' },
        'Ich bleibe drei Jahre hier.': { literal: 'Я остаюсь три года здесь.', literary: 'Я останусь здесь на три года.' },
        'Glückwunsch!': { literal: 'Поздравление!', literary: 'Поздравляю!' },
      },
      vocabulary: [
        { de: 'die Überraschung', plural: 'die Überraschungen', ru: 'сюрприз', gender: 'feminin', collocation: 'so eine Überraschung', example: 'Ja, so eine Überraschung!' },
        { de: 'der Ausbildungsplatz', plural: 'die Ausbildungsplätze', ru: 'место обучения', gender: 'maskulin', collocation: 'Ausbildungsplatz suchen', example: 'Ich habe einen Ausbildungsplatz gesucht.' },
        { de: 'das Restaurant', plural: 'die Restaurants', ru: 'ресторан', gender: 'neutrum', collocation: 'im Restaurant arbeiten', example: 'Aber jetzt bin ich in einem Restaurant.' },
        { de: 'klappen', ru: 'получаться (разг.)', type: 'verb', forms: 'klappt, klappte, hat geklappt', example: 'Alles nicht geklappt!' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'suche, suchte, hat gesucht', example: 'Ich habe einen Ausbildungsplatz gesucht.' },
      ],
      practiceSentences: [
        { de: 'Was machst du in Berlin?', ru: 'Что ты делаешь в Берлине?', note: 'V2 в вопросе' },
        { de: 'Ich habe eine Wohnung gesucht.', ru: 'Я искал квартиру.', note: 'Perfekt с haben' },
        { de: 'Hat alles geklappt?', ru: 'Всё получилось?', note: 'Perfekt в вопросе' },
        { de: 'Sie haben mich angerufen.', ru: 'Они мне позвонили.', note: 'Perfekt с haben' },
        { de: 'Ich bleibe zwei Wochen dort.', ru: 'Я останусь там на две недели.', note: 'V2, bleiben' },
      ],
      question: {
        de: 'Wo arbeitet Claudia jetzt?',
        ru: 'Где сейчас работает Клаудия?',
        options: [
          { de: 'In einem Hotel', ru: 'В отеле' },
          { de: 'In einer Großküche', ru: 'На большой кухне' },
          { de: 'In einem Restaurant', ru: 'В ресторане' },
        ],
        correct: 2,
        explanation: 'Клаудия говорит: "Aber jetzt bin ich in einem Restaurant. Die haben mich genommen."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Drucker',
      type: 'телефонный разговор',
      text: 'Ja, bitte? Hier ist Roland Meier. Ich habe gehört, Sie wollen Ihren Computer verkaufen. Kann ich ihn mir mal ansehen? Roland, ich verkaufe meinen Drucker. Der Computer ist noch ziemlich neu. Und Ihr Handy, verkaufen Sie das auch? Also wer hat dir denn das erzählt? Die Leute reden zu viel!',
      sentenceTranslations: {
        'Ja, bitte?': { literal: 'Да, пожалуйста?', literary: 'Алло?' },
        'Hier ist Roland Meier.': { literal: 'Здесь есть Роланд Майер.', literary: 'Это Роланд Майер.' },
        'Ich habe gehört, Sie wollen Ihren Computer verkaufen.': { literal: 'Я имею слышал, Вы хотите Ваш компьютер продать.', literary: 'Я слышал, Вы хотите продать свой компьютер.' },
        'Kann ich ihn mir mal ansehen?': { literal: 'Могу я его себе разок посмотреть?', literary: 'Можно мне на него взглянуть?' },
        'Roland, ich verkaufe meinen Drucker.': { literal: 'Роланд, я продаю мой принтер.', literary: 'Роланд, я продаю принтер.' },
        'Der Computer ist noch ziemlich neu.': { literal: 'Компьютер есть ещё довольно новый.', literary: 'Компьютер ещё довольно новый.' },
        'Und Ihr Handy, verkaufen Sie das auch?': { literal: 'И Ваш мобильный, продаёте Вы это тоже?', literary: 'А мобильный телефон тоже продаёте?' },
        'Also wer hat dir denn das erzählt?': { literal: 'Итак кто имеет тебе же это рассказал?', literary: 'Кто тебе это рассказал?' },
        'Die Leute reden zu viel!': { literal: 'Люди говорят слишком много!', literary: 'Люди слишком много болтают!' },
      },
      vocabulary: [
        { de: 'der Computer', plural: 'die Computer', ru: 'компьютер', gender: 'maskulin', collocation: 'Computer verkaufen', example: 'Ich habe gehört, Sie wollen Ihren Computer verkaufen.' },
        { de: 'der Drucker', plural: 'die Drucker', ru: 'принтер', gender: 'maskulin', collocation: 'Drucker verkaufen', example: 'Roland, ich verkaufe meinen Drucker.' },
        { de: 'das Handy', plural: 'die Handys', ru: 'мобильный телефон', gender: 'neutrum', collocation: 'Handy verkaufen', example: 'Und Ihr Handy, verkaufen Sie das auch?' },
        { de: 'die Leute', ru: 'люди', gender: 'feminin', collocation: 'die Leute reden', example: 'Die Leute reden zu viel!' },
        { de: 'verkaufen', ru: 'продавать', type: 'verb', forms: 'verkaufe, verkaufte, hat verkauft', example: 'Roland, ich verkaufe meinen Drucker.' },
        { de: 'ansehen', ru: 'осматривать', type: 'verb', forms: 'sehe an, sah an, hat angesehen', example: 'Kann ich ihn mir mal ansehen?' },
        { de: 'erzählen', ru: 'рассказывать', type: 'verb', forms: 'erzähle, erzählte, hat erzählt', example: 'Also wer hat dir denn das erzählt?' },
        { de: 'ziemlich', ru: 'довольно', type: 'adv', example: 'Der Computer ist noch ziemlich neu.' },
      ],
      practiceSentences: [
        { de: 'Ich habe gehört, du bist krank.', ru: 'Я слышал, ты болеешь.', note: 'Perfekt, затем придаточное' },
        { de: 'Kann ich das mal sehen?', ru: 'Можно мне это посмотреть?', note: 'модальный + mal + инфинитив' },
        { de: 'Ich verkaufe mein Fahrrad.', ru: 'Я продаю свой велосипед.', note: 'V2, переходный глагол' },
        { de: 'Das Auto ist noch sehr gut.', ru: 'Машина ещё очень хорошая.', note: 'sein + предикатив' },
        { de: 'Sie reden zu laut.', ru: 'Они говорят слишком громко.', note: 'V2' },
      ],
      question: {
        de: 'Was verkauft die Person?',
        ru: 'Что продаёт человек?',
        options: [
          { de: 'Den Computer', ru: 'Компьютер' },
          { de: 'Den Drucker', ru: 'Принтер' },
          { de: 'Das Handy', ru: 'Мобильный телефон' },
        ],
        correct: 1,
        explanation: 'Человек исправляет: "Roland, ich verkaufe meinen Drucker. Der Computer ist noch ziemlich neu."'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Alexander',
      type: 'интервью',
      text: 'Alexander, schön, dass Sie kommen konnten! Erzählen Sie uns bitte, wie Sie als Skiläufer in die Nationalmannschaft gekommen sind. Im Winter bin ich schon als kleiner Junge jedes Wochenende mit meinen Eltern Ski gefahren. Mit sechs Jahren habe ich einen Skilehrer bekommen. Haben Sie mit Ihrer Familie damals schon in Süddeutschland gelebt? Wir kommen aus Bonn. Als ich 14 war, sind wir in die Nähe von München gezogen. Deshalb kann ich vier Mal die Woche trainieren und nicht nur am Wochenende. Haben Sie auch noch andere Hobbys? Nein. Wenn ich nicht trainiere, gehe ich joggen oder trainiere im Fitnesszentrum. Wie sind Sie in das deutsche Nationalteam gekommen? Vor zwei Jahren hat mich ein Trainer gesehen. Danach habe ich eine Einladung bekommen zu einem siebentägigen Trainingscamp in den Schweizer Bergen. Und sind Sie mitgefahren? Ja, natürlich! Das war eine tolle Erfahrung. Ich habe andere Skifahrer getroffen, viel gelernt und viel Spaß gehabt. Stimmt es, dass Sie jetzt einen festen Platz im deutschen Nationalteam haben? Das ist richtig. Heute trainiere ich jetzt mit der offiziellen Mannschaft. In der Gruppe werde ich im Skilaufen immer besser. Und was ist mit dem Beruf? Sie studieren an der Uni? In zehn Monaten mache ich meinen Abschluss. Das heißt, ich brauche jetzt mehr Zeit zum Studieren. Aber ich denke, dass ich nächstes Jahr wieder mehr trainieren kann.',
      sentenceTranslations: {
        'Alexander, schön, dass Sie kommen konnten!': { literal: 'Александр, хорошо, что Вы прийти могли!', literary: 'Александр, хорошо, что Вы смогли прийти!' },
        'Erzählen Sie uns bitte, wie Sie als Skiläufer in die Nationalmannschaft gekommen sind.': { literal: 'Расскажите Вы нам пожалуйста, как Вы как лыжник в национальную-сборную пришли есть.', literary: 'Расскажите нам, пожалуйста, как Вы попали в национальную сборную как лыжник.' },
        'Im Winter bin ich schon als kleiner Junge jedes Wochenende mit meinen Eltern Ski gefahren.': { literal: 'Зимой есть я уже как маленький мальчик каждые выходные с моими родителями лыжи катался.', literary: 'Зимой я уже маленьким мальчиком каждые выходные катался на лыжах с родителями.' },
        'Mit sechs Jahren habe ich einen Skilehrer bekommen.': { literal: 'С шести лет имею я одного лыжного-учителя получил.', literary: 'В шесть лет у меня появился инструктор по лыжам.' },
        'Haben Sie mit Ihrer Familie damals schon in Süddeutschland gelebt?': { literal: 'Имеете Вы с Вашей семьёй тогда уже в южной-Германии жили?', literary: 'Вы тогда уже жили с семьёй в южной Германии?' },
        'Wir kommen aus Bonn.': { literal: 'Мы приходим из Бонна.', literary: 'Мы из Бонна.' },
        'Als ich 14 war, sind wir in die Nähe von München gezogen.': { literal: 'Когда я 14 был, есть мы в близость от Мюнхена переехали.', literary: 'Когда мне было 14, мы переехали в окрестности Мюнхена.' },
        'Deshalb kann ich vier Mal die Woche trainieren und nicht nur am Wochenende.': { literal: 'Поэтому могу я четыре раза неделю тренироваться и не только на выходных.', literary: 'Поэтому я могу тренироваться четыре раза в неделю, а не только по выходным.' },
        'Haben Sie auch noch andere Hobbys?': { literal: 'Имеете Вы также ещё другие хобби?', literary: 'У Вас есть ещё другие хобби?' },
        'Nein.': { literal: 'Нет.', literary: 'Нет.' },
        'Wenn ich nicht trainiere, gehe ich joggen oder trainiere im Fitnesszentrum.': { literal: 'Когда я не тренируюсь, иду я бегать или тренируюсь в фитнес-центре.', literary: 'Когда я не тренируюсь, я бегаю или занимаюсь в фитнес-центре.' },
        'Wie sind Sie in das deutsche Nationalteam gekommen?': { literal: 'Как есть Вы в немецкую национальную-команду пришли?', literary: 'Как Вы попали в немецкую сборную?' },
        'Vor zwei Jahren hat mich ein Trainer gesehen.': { literal: 'Перед двумя годами имеет меня один тренер увидел.', literary: 'Два года назад меня заметил тренер.' },
        'Danach habe ich eine Einladung bekommen zu einem siebentägigen Trainingscamp in den Schweizer Bergen.': { literal: 'Потом имею я одно приглашение получил к одному семидневному тренировочному-лагерю в швейцарские горы.', literary: 'Потом я получил приглашение на семидневный тренировочный лагерь в Швейцарских горах.' },
        'Und sind Sie mitgefahren?': { literal: 'И есть Вы с-поехали?', literary: 'И Вы поехали?' },
        'Ja, natürlich!': { literal: 'Да, конечно!', literary: 'Да, конечно!' },
        'Das war eine tolle Erfahrung.': { literal: 'Это было один отличный опыт.', literary: 'Это был отличный опыт.' },
        'Ich habe andere Skifahrer getroffen, viel gelernt und viel Spaß gehabt.': { literal: 'Я имею других лыжников встретил, много учился и много удовольствия имел.', literary: 'Я встретил других лыжников, многому научился и прекрасно провёл время.' },
        'Stimmt es, dass Sie jetzt einen festen Platz im deutschen Nationalteam haben?': { literal: 'Правда оно, что Вы сейчас одно постоянное место в немецкой национальной-команде имеете?', literary: 'Правда ли, что у Вас сейчас постоянное место в немецкой сборной?' },
        'Das ist richtig.': { literal: 'Это есть правильно.', literary: 'Это правда.' },
        'Heute trainiere ich jetzt mit der offiziellen Mannschaft.': { literal: 'Сегодня тренируюсь я сейчас с официальной командой.', literary: 'Сейчас я тренируюсь с официальной командой.' },
        'In der Gruppe werde ich im Skilaufen immer besser.': { literal: 'В группе становлюсь я в катании-на-лыжах всегда лучше.', literary: 'В группе я становлюсь всё лучше в лыжах.' },
        'Und was ist mit dem Beruf?': { literal: 'И что есть с профессией?', literary: 'А что с профессией?' },
        'Sie studieren an der Uni?': { literal: 'Вы учитесь при университете?', literary: 'Вы учитесь в университете?' },
        'In zehn Monaten mache ich meinen Abschluss.': { literal: 'Через десять месяцев делаю я мой выпуск.', literary: 'Через десять месяцев я заканчиваю учёбу.' },
        'Das heißt, ich brauche jetzt mehr Zeit zum Studieren.': { literal: 'Это значит, я нуждаюсь сейчас больше времени к учёбе.', literary: 'То есть сейчас мне нужно больше времени на учёбу.' },
        'Aber ich denke, dass ich nächstes Jahr wieder mehr trainieren kann.': { literal: 'Но я думаю, что я следующий год снова больше тренироваться могу.', literary: 'Но я думаю, что в следующем году снова смогу больше тренироваться.' },
      },
      vocabulary: [
        { de: 'der Skiläufer', plural: 'die Skiläufer', ru: 'лыжник', gender: 'maskulin', collocation: 'als Skiläufer', example: 'Erzählen Sie uns bitte, wie Sie als Skiläufer in die Nationalmannschaft gekommen sind.' },
        { de: 'die Nationalmannschaft', plural: 'die Nationalmannschaften', ru: 'национальная сборная', gender: 'feminin', collocation: 'in die Nationalmannschaft kommen', example: 'Erzählen Sie uns bitte, wie Sie als Skiläufer in die Nationalmannschaft gekommen sind.' },
        { de: 'der Skilehrer', plural: 'die Skilehrer', ru: 'инструктор по лыжам', gender: 'maskulin', collocation: 'einen Skilehrer bekommen', example: 'Mit sechs Jahren habe ich einen Skilehrer bekommen.' },
        { de: 'die Nähe', ru: 'близость, окрестности', gender: 'feminin', collocation: 'in der Nähe von', example: 'Als ich 14 war, sind wir in die Nähe von München gezogen.' },
        { de: 'das Fitnesszentrum', plural: 'die Fitnesszentren', ru: 'фитнес-центр', gender: 'neutrum', collocation: 'im Fitnesszentrum trainieren', example: 'Wenn ich nicht trainiere, gehe ich joggen oder trainiere im Fitnesszentrum.' },
        { de: 'der Trainer', plural: 'die Trainer', ru: 'тренер', gender: 'maskulin', collocation: 'ein Trainer hat gesehen', example: 'Vor zwei Jahren hat mich ein Trainer gesehen.' },
        { de: 'die Einladung', plural: 'die Einladungen', ru: 'приглашение', gender: 'feminin', collocation: 'eine Einladung bekommen', example: 'Danach habe ich eine Einladung bekommen zu einem siebentägigen Trainingscamp in den Schweizer Bergen.' },
        { de: 'die Erfahrung', plural: 'die Erfahrungen', ru: 'опыт', gender: 'feminin', collocation: 'tolle Erfahrung', example: 'Das war eine tolle Erfahrung.' },
        { de: 'die Mannschaft', plural: 'die Mannschaften', ru: 'команда', gender: 'feminin', collocation: 'offizielle Mannschaft', example: 'Heute trainiere ich jetzt mit der offiziellen Mannschaft.' },
        { de: 'der Abschluss', plural: 'die Abschlüsse', ru: 'выпуск, диплом', gender: 'maskulin', collocation: 'Abschluss machen', example: 'In zehn Monaten mache ich meinen Abschluss.' },
        { de: 'trainieren', ru: 'тренироваться', type: 'verb', forms: 'trainiere, trainierte, hat trainiert', example: 'Deshalb kann ich vier Mal die Woche trainieren und nicht nur am Wochenende.' },
        { de: 'ziehen', ru: 'переезжать', type: 'verb', forms: 'ziehe, zog, ist gezogen', example: 'Als ich 14 war, sind wir in die Nähe von München gezogen.' },
        { de: 'studieren', ru: 'учиться в университете', type: 'verb', forms: 'studiere, studierte, hat studiert', example: 'Sie studieren an der Uni?' },
      ],
      practiceSentences: [
        { de: 'Als Kind bin ich oft Rad gefahren.', ru: 'В детстве я часто ездил на велосипеде.', note: 'Perfekt с sein' },
        { de: 'Vor einem Jahr sind wir umgezogen.', ru: 'Год назад мы переехали.', note: 'Perfekt с sein' },
        { de: 'Ich werde jeden Tag besser.', ru: 'Я становлюсь лучше с каждым днём.', note: 'werden + компаратив' },
        { de: 'Nächstes Jahr mache ich Abitur.', ru: 'В следующем году я сдаю экзамены.', note: 'V2, устойчивое выражение' },
        { de: 'Ich kann dreimal pro Woche schwimmen.', ru: 'Я могу плавать три раза в неделю.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Woher kommt die Familie von Alexander?',
        ru: 'Откуда родом семья Александра?',
        options: [
          { de: 'Aus Süddeutschland', ru: 'Из южной Германии' },
          { de: 'Aus Bonn', ru: 'Из Бонна' },
          { de: 'Aus München', ru: 'Из Мюнхена' },
        ],
        correct: 1,
        explanation: 'Александр говорит: "Wir kommen aus Bonn."'
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

  grammarFocus: [
    'Perfekt с sein: bin gegangen, ist gefahren, sind gezogen (глаголы движения)',
    'Perfekt с haben: habe gelebt, habe gehört, hat gefallen',
    'Модальные глаголы: muss weg, kann trainieren, möchte sehen, will treffen',
    'weil-Nebensatz: глагол в конце придаточного',
    'dass-Nebensatz: Toll, dass du kommst; Ich denke, dass...',
    'Отделяемые приставки: fängt an, hole ab, kommt dazu, findet statt',
    'Предлоги с Dativ: mit dem Bus, aus der Rathausküche, bei 18 Grad',
    'werden + компаратив: werde immer besser',
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Herr Fichte).',
    },
  },
};

LESSONS.push(LESSON_12);
