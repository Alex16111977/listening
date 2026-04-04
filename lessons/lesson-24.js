/* ═══════════════════════════════════════════════════════════
   Lesson 24 — Goethe Zertifikat A2 Hören Teil 1-4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_24 = {
  id: 'lesson-24',
  number: 24,
  title: 'Goethe A2 Hören — Radio, Wetter, Kurse, Verkehr',
  subtitle: 'Bei Radio Pop FM können Sie 50 Euro gewinnen',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-24',
  videoUrl: 'https://www.youtube.com/watch?v=QTfCOUW5Mv8',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Radio Pop FM',
      type: 'объявление',
      text: 'Bei Radio Pop FM können Sie 50 Euro gewinnen. Sie müssen nur drei Fragen zu Pop und Rockmusik richtig beantworten. Und mit ein wenig Glück gehören sie dann zu den Gewinnern. Hören Sie jeden Samstag und Sonntag zwischen 13 und 18 Uhr Radio Pop FM. Die beste Musik aus drei Jahrzehnten. Haben Sie einen Musikwunsch, rufen Sie an oder schicken Sie uns eine E-Mail. Wir spielen Ihre Musik.',
      sentenceTranslations: {
        'Bei Radio Pop FM können Sie 50 Euro gewinnen.': { literal: 'При Радио Поп ФМ можете вы 50 евро выиграть', literary: 'На Радио Поп ФМ вы можете выиграть 50 евро.' },
        'Sie müssen nur drei Fragen zu Pop und Rockmusik richtig beantworten.': { literal: 'Вы должны только три вопроса к поп и рок-музыке правильно ответить', literary: 'Вам нужно только правильно ответить на три вопроса о поп- и рок-музыке.' },
        'Und mit ein wenig Glück gehören sie dann zu den Gewinnern.': { literal: 'И с немного удачи принадлежат они тогда к победителям', literary: 'И с небольшой удачей вы окажетесь среди победителей.' },
        'Hören Sie jeden Samstag und Sonntag zwischen 13 und 18 Uhr Radio Pop FM.': { literal: 'Слушайте вы каждую субботу и воскресенье между 13 и 18 часов Радио Поп ФМ', literary: 'Слушайте Радио Поп ФМ каждую субботу и воскресенье с 13 до 18 часов.' },
        'Die beste Musik aus drei Jahrzehnten.': { literal: 'Лучшая музыка из трёх десятилетий', literary: 'Лучшая музыка за три десятилетия.' },
        'Haben Sie einen Musikwunsch, rufen Sie an oder schicken Sie uns eine E-Mail.': { literal: 'Имеете вы музыкальное-пожелание, звоните вы или отправьте вы нам имейл', literary: 'Если у вас есть музыкальное пожелание, позвоните или отправьте нам электронное письмо.' },
        'Wir spielen Ihre Musik.': { literal: 'Мы играем вашу музыку', literary: 'Мы сыграем вашу музыку.' },
      },
      vocabulary: [
        { de: 'das Radio', plural: 'die Radios', ru: 'радио', gender: 'neutrum', collocation: 'Radio hören', example: 'Hören Sie jeden Samstag und Sonntag zwischen 13 und 18 Uhr Radio Pop FM.' },
        { de: 'der Euro', plural: 'die Euro', ru: 'евро', gender: 'maskulin', collocation: '50 Euro gewinnen', example: 'Bei Radio Pop FM können Sie 50 Euro gewinnen.' },
        { de: 'die Frage', plural: 'die Fragen', ru: 'вопрос', gender: 'feminin', collocation: 'Fragen beantworten', example: 'Sie müssen nur drei Fragen zu Pop und Rockmusik richtig beantworten.' },
        { de: 'das Glück', ru: 'удача', gender: 'neutrum', collocation: 'mit ein wenig Glück', example: 'Und mit ein wenig Glück gehören sie dann zu den Gewinnern.' },
        { de: 'der Gewinner', plural: 'die Gewinner', ru: 'победитель', gender: 'maskulin', collocation: 'zu den Gewinnern gehören', example: 'Und mit ein wenig Glück gehören sie dann zu den Gewinnern.' },
        { de: 'das Jahrzehnt', plural: 'die Jahrzehnte', ru: 'десятилетие', gender: 'neutrum', collocation: 'aus drei Jahrzehnten', example: 'Die beste Musik aus drei Jahrzehnten.' },
        { de: 'der Musikwunsch', plural: 'die Musikwünsche', ru: 'музыкальное пожелание', gender: 'maskulin', collocation: 'einen Musikwunsch haben', example: 'Haben Sie einen Musikwunsch, rufen Sie an oder schicken Sie uns eine E-Mail.' },
        { de: 'die E-Mail', plural: 'die E-Mails', ru: 'электронное письмо', gender: 'feminin', collocation: 'eine E-Mail schicken', example: 'Haben Sie einen Musikwunsch, rufen Sie an oder schicken Sie uns eine E-Mail.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Bei Radio Pop FM können Sie 50 Euro gewinnen.' },
        { de: 'beantworten', ru: 'отвечать на', type: 'verb', forms: 'beantwortet, beantwortete, hat beantwortet', example: 'Sie müssen nur drei Fragen zu Pop und Rockmusik richtig beantworten.' },
        { de: 'gehören zu', ru: 'принадлежать к', type: 'verb', forms: 'gehört, gehörte, hat gehört', example: 'Und mit ein wenig Glück gehören sie dann zu den Gewinnern.' },
        { de: 'schicken', ru: 'отправлять', type: 'verb', forms: 'schickt, schickte, hat geschickt', example: 'Haben Sie einen Musikwunsch, rufen Sie an oder schicken Sie uns eine E-Mail.' },
      ],
      practiceSentences: [
        { de: 'Ich kann heute 50 Euro gewinnen.', ru: 'Я могу сегодня выиграть 50 евро.', note: 'V2, модальный + инфинитив' },
        { de: 'Du musst drei Fragen beantworten.', ru: 'Ты должен ответить на три вопроса.', note: 'V2, модальный + инфинитив' },
        { de: 'Wir gehören zu den Gewinnern.', ru: 'Мы принадлежим к победителям.', note: 'V2, gehören zu + Dat' },
        { de: 'Hören Sie Radio Pop FM!', ru: 'Слушайте Радио Поп ФМ!', note: 'императив' },
        { de: 'Sie können eine E-Mail schicken.', ru: 'Вы можете отправить электронное письмо.', note: 'V2, модальный + инфинитив' },
      ],
      question: {
        de: 'Was kann man bei Radio Pop FM gewinnen?',
        ru: 'Что можно выиграть на Радио Поп ФМ?',
        options: [
          { de: 'Konzertkarten', ru: 'Билеты на концерт' },
          { de: '50 Euro', ru: '50 евро' },
          { de: 'Eine CD', ru: 'Компакт-диск' },
        ],
        correct: 1,
        explanation: 'В тексте чётко сказано: "bei Radio Pop FM können Sie 50 Euro gewinnen".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Wetterbericht',
      type: 'прогноз погоды',
      text: 'Und hier der Wetterbericht. Bald ist der Winter vorbei. Im Süden wird es schön. Die Temperaturen liegen bei Sonne und Regen zwischen 10 und 15 Grad. Im Norden Deutschlands allerdings schneit es noch einmal. Hier müssen wir noch etwas auf den Frühling warten.',
      sentenceTranslations: {
        'Und hier der Wetterbericht.': { literal: 'И здесь прогноз-погоды', literary: 'А вот прогноз погоды.' },
        'Bald ist der Winter vorbei.': { literal: 'Скоро есть зима закончена', literary: 'Скоро зима закончится.' },
        'Im Süden wird es schön.': { literal: 'На юге становится это красиво', literary: 'На юге будет хорошая погода.' },
        'Die Temperaturen liegen bei Sonne und Regen zwischen 10 und 15 Grad.': { literal: 'Температуры лежат при солнце и дожде между 10 и 15 градусов', literary: 'Температура при солнце и дожде составит от 10 до 15 градусов.' },
        'Im Norden Deutschlands allerdings schneit es noch einmal.': { literal: 'На севере Германии однако снежит это ещё раз', literary: 'Однако на севере Германии снова пойдёт снег.' },
        'Hier müssen wir noch etwas auf den Frühling warten.': { literal: 'Здесь должны мы ещё немного на весну ждать', literary: 'Здесь нам придётся ещё немного подождать весну.' },
      },
      vocabulary: [
        { de: 'der Wetterbericht', plural: 'die Wetterberichte', ru: 'прогноз погоды', gender: 'maskulin', collocation: 'hier der Wetterbericht', example: 'Und hier der Wetterbericht.' },
        { de: 'der Winter', plural: 'die Winter', ru: 'зима', gender: 'maskulin', collocation: 'der Winter ist vorbei', example: 'Bald ist der Winter vorbei.' },
        { de: 'der Süden', ru: 'юг', gender: 'maskulin', collocation: 'im Süden', example: 'Im Süden wird es schön.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'die Temperaturen liegen bei', example: 'Die Temperaturen liegen bei Sonne und Regen zwischen 10 und 15 Grad.' },
        { de: 'der Norden', ru: 'север', gender: 'maskulin', collocation: 'im Norden Deutschlands', example: 'Im Norden Deutschlands allerdings schneit es noch einmal.' },
        { de: 'der Frühling', ru: 'весна', gender: 'maskulin', collocation: 'auf den Frühling warten', example: 'Hier müssen wir noch etwas auf den Frühling warten.' },
        { de: 'schneien', ru: 'идти (о снеге)', type: 'verb', forms: 'schneit, schneite, hat geschneit', example: 'Im Norden Deutschlands allerdings schneit es noch einmal.' },
        { de: 'warten auf', ru: 'ждать', type: 'verb', forms: 'wartet, wartete, hat gewartet', example: 'Hier müssen wir noch etwas auf den Frühling warten.' },
        { de: 'allerdings', ru: 'однако', type: 'adv', example: 'Im Norden Deutschlands allerdings schneit es noch einmal.' },
        { de: 'vorbei', ru: 'прошедший, закончившийся', type: 'adv', example: 'Bald ist der Winter vorbei.' },
      ],
      practiceSentences: [
        { de: 'Der Sommer ist vorbei.', ru: 'Лето закончилось.', note: 'V2, sein + vorbei' },
        { de: 'Es wird kalt.', ru: 'Становится холодно.', note: 'V2, werden' },
        { de: 'Die Temperatur liegt bei 20 Grad.', ru: 'Температура составляет 20 градусов.', note: 'V2' },
        { de: 'Wir warten auf den Bus.', ru: 'Мы ждём автобус.', note: 'V2, warten auf + Akk' },
        { de: 'Im Winter schneit es oft.', ru: 'Зимой часто идёт снег.', note: 'V2 с инверсией' },
      ],
      question: {
        de: 'Wie wird das Wetter im Süden?',
        ru: 'Какая будет погода на юге?',
        options: [
          { de: 'Es schneit', ru: 'Будет снег' },
          { de: 'Es wird schön mit Sonne und Regen', ru: 'Будет хорошая погода с солнцем и дождём' },
          { de: 'Es bleibt kalt', ru: 'Останется холодно' },
        ],
        correct: 1,
        explanation: 'Текст говорит: "im Süden wird es schön die Temperaturen liegen bei Sonne und Regen zwischen 10 und 15 Grad".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Anne für Lola',
      type: 'сообщение на автоответчике',
      text: 'Hallo Lola, hier ist Anne. Geht es dir besser? Du hast vorgeschlagen, dass wir heute Abend nicht tanzen gehen, weil du krank bist. Klar, einverstanden. Ich kann aber zu dir kommen. Vielleicht brauchst du etwas. Sag mir doch Bescheid. Ich bringe dir auf jeden Fall ein tolles Buch mit, das ich gelesen habe. Vielleicht musst du ja im Bett bleiben.',
      sentenceTranslations: {
        'Hallo Lola, hier ist Anne.': { literal: 'Привет Лола, здесь есть Анна', literary: 'Привет, Лола, это Анна.' },
        'Geht es dir besser?': { literal: 'Идёт это тебе лучше?', literary: 'Тебе лучше?' },
        'Du hast vorgeschlagen, dass wir heute Abend nicht tanzen gehen, weil du krank bist.': { literal: 'Ты предложила, что мы сегодня вечером не танцевать идти, потому что ты больна есть', literary: 'Ты предложила не идти сегодня вечером танцевать, потому что ты болеешь.' },
        'Klar, einverstanden.': { literal: 'Ясно, согласна', literary: 'Хорошо, договорились.' },
        'Ich kann aber zu dir kommen.': { literal: 'Я могу но к тебе прийти', literary: 'Но я могу к тебе прийти.' },
        'Vielleicht brauchst du etwas.': { literal: 'Возможно нуждаешься ты что-то', literary: 'Может, тебе что-то нужно.' },
        'Sag mir doch Bescheid.': { literal: 'Скажи мне же известие', literary: 'Дай мне знать.' },
        'Ich bringe dir auf jeden Fall ein tolles Buch mit, das ich gelesen habe.': { literal: 'Я приношу тебе в любом случае классную книгу с, которую я читала имею', literary: 'Я в любом случае принесу тебе классную книгу, которую прочитала.' },
        'Vielleicht musst du ja im Bett bleiben.': { literal: 'Возможно должна ты да в кровати остаться', literary: 'Может, тебе придётся остаться в постели.' },
      },
      vocabulary: [
        { de: 'der Abend', plural: 'die Abende', ru: 'вечер', gender: 'maskulin', collocation: 'heute Abend', example: 'Du hast vorgeschlagen, dass wir heute Abend nicht tanzen gehen, weil du krank bist.' },
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', collocation: 'ein tolles Buch', example: 'Ich bringe dir auf jeden Fall ein tolles Buch mit, das ich gelesen habe.' },
        { de: 'das Bett', plural: 'die Betten', ru: 'кровать', gender: 'neutrum', collocation: 'im Bett bleiben', example: 'Vielleicht musst du ja im Bett bleiben.' },
        { de: 'vorschlagen', ru: 'предлагать', type: 'verb', forms: 'schlägt vor, schlug vor, hat vorgeschlagen', example: 'Du hast vorgeschlagen, dass wir heute Abend nicht tanzen gehen, weil du krank bist.' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Ich bringe dir auf jeden Fall ein tolles Buch mit, das ich gelesen habe.' },
        { de: 'einverstanden', ru: 'согласен', type: 'adj', example: 'Klar, einverstanden.' },
        { de: 'krank', ru: 'больной', type: 'adj', example: 'Du hast vorgeschlagen, dass wir heute Abend nicht tanzen gehen, weil du krank bist.' },
      ],
      practiceSentences: [
        { de: 'Geht es dir gut?', ru: 'У тебя всё хорошо?', note: 'V1 вопрос, es geht + Dat' },
        { de: 'Ich schlage vor, dass wir kommen.', ru: 'Я предлагаю, чтобы мы пришли.', note: 'V2, dass-конец' },
        { de: 'Wir gehen heute tanzen.', ru: 'Мы идём сегодня танцевать.', note: 'V2, два инфинитива' },
        { de: 'Bring bitte ein Buch mit!', ru: 'Принеси, пожалуйста, книгу!', note: 'императив, отделяемая приставка' },
        { de: 'Sie ist krank.', ru: 'Она болеет.', note: 'V2, sein + прилагательное' },
      ],
      question: {
        de: 'Was bringt Anne für Lola mit?',
        ru: 'Что Анна принесёт для Лолы?',
        options: [
          { de: 'Medikamente', ru: 'Лекарства' },
          { de: 'Ein Buch', ru: 'Книгу' },
          { de: 'Essen', ru: 'Еду' },
        ],
        correct: 1,
        explanation: 'Анна говорит: "ich bringe dir auf jeden Fall ein tolles Buch mit, das ich gelesen habe".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Sprachschule',
      type: 'сообщение',
      text: 'Guten Tag, Frau Schneider. Sie haben doch bei uns einen Deutschkurs gebucht. Vielleicht wissen Sie es noch nicht. Wir sind umgezogen. Die Sprachschule ist jetzt in der Königsstraße 14, gegenüber vom Bahnhof. An den Kursterminen ändert sich nichts. Der Kurs beginnt nächsten Montag um 9 Uhr. Wir wünschen Ihnen viel Erfolg.',
      sentenceTranslations: {
        'Guten Tag, Frau Schneider.': { literal: 'Добрый день, госпожа Шнайдер', literary: 'Добрый день, госпожа Шнайдер.' },
        'Sie haben doch bei uns einen Deutschkurs gebucht.': { literal: 'Вы имеете же у нас один курс-немецкого забронировали', literary: 'Вы же забронировали у нас курс немецкого.' },
        'Vielleicht wissen Sie es noch nicht.': { literal: 'Возможно знаете вы это ещё не', literary: 'Возможно, вы ещё не знаете.' },
        'Wir sind umgezogen.': { literal: 'Мы есть переехали', literary: 'Мы переехали.' },
        'Die Sprachschule ist jetzt in der Königsstraße 14, gegenüber vom Bahnhof.': { literal: 'Языковая-школа есть теперь на Королевской-улице 14, напротив от вокзала', literary: 'Языковая школа теперь на Королевской улице, 14, напротив вокзала.' },
        'An den Kursterminen ändert sich nichts.': { literal: 'На датах-курса меняется себя ничего', literary: 'Даты курса не изменились.' },
        'Der Kurs beginnt nächsten Montag um 9 Uhr.': { literal: 'Курс начинается следующий понедельник в 9 часов', literary: 'Курс начинается в следующий понедельник в 9 часов.' },
        'Wir wünschen Ihnen viel Erfolg.': { literal: 'Мы желаем вам много успеха', literary: 'Желаем вам успехов.' },
      },
      vocabulary: [
        { de: 'der Deutschkurs', plural: 'die Deutschkurse', ru: 'курс немецкого', gender: 'maskulin', collocation: 'einen Deutschkurs buchen', example: 'Sie haben doch bei uns einen Deutschkurs gebucht.' },
        { de: 'die Sprachschule', plural: 'die Sprachschulen', ru: 'языковая школа', gender: 'feminin', collocation: 'die Sprachschule ist', example: 'Die Sprachschule ist jetzt in der Königsstraße 14, gegenüber vom Bahnhof.' },
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'gegenüber vom Bahnhof', example: 'Die Sprachschule ist jetzt in der Königsstraße 14, gegenüber vom Bahnhof.' },
        { de: 'der Kurstermin', plural: 'die Kurstermine', ru: 'дата курса', gender: 'maskulin', collocation: 'an den Kursterminen', example: 'An den Kursterminen ändert sich nichts.' },
        { de: 'der Erfolg', plural: 'die Erfolge', ru: 'успех', gender: 'maskulin', collocation: 'viel Erfolg wünschen', example: 'Wir wünschen Ihnen viel Erfolg.' },
        { de: 'buchen', ru: 'бронировать', type: 'verb', forms: 'bucht, buchte, hat gebucht', example: 'Sie haben doch bei uns einen Deutschkurs gebucht.' },
        { de: 'umziehen', ru: 'переезжать', type: 'verb', forms: 'zieht um, zog um, ist umgezogen', example: 'Wir sind umgezogen.' },
        { de: 'sich ändern', ru: 'меняться', type: 'verb', forms: 'ändert sich, änderte sich, hat sich geändert', example: 'An den Kursterminen ändert sich nichts.' },
        { de: 'beginnen', ru: 'начинаться', type: 'verb', forms: 'beginnt, begann, hat begonnen', example: 'Der Kurs beginnt nächsten Montag um 9 Uhr.' },
      ],
      practiceSentences: [
        { de: 'Ich habe einen Kurs gebucht.', ru: 'Я забронировал курс.', note: 'Perfekt с haben' },
        { de: 'Wir sind umgezogen.', ru: 'Мы переехали.', note: 'Perfekt с sein' },
        { de: 'Die Schule ist gegenüber vom Park.', ru: 'Школа напротив парка.', note: 'V2, sein + место' },
        { de: 'Der Termin ändert sich nicht.', ru: 'Дата не меняется.', note: 'V2, возвратный' },
        { de: 'Der Kurs beginnt am Montag.', ru: 'Курс начинается в понедельник.', note: 'V2' },
      ],
      question: {
        de: 'Wo ist die Sprachschule jetzt?',
        ru: 'Где сейчас находится языковая школа?',
        options: [
          { de: 'In der Königsstraße 14 gegenüber vom Bahnhof', ru: 'На Королевской улице 14 напротив вокзала' },
          { de: 'Am alten Standort', ru: 'На старом месте' },
          { de: 'Neben dem Bahnhof', ru: 'Рядом с вокзалом' },
        ],
        correct: 0,
        explanation: 'В сообщении указано: "die Sprachschule ist jetzt in der Königsstraße 14 gegenüber vom Bahnhof".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Verkehrsbetriebe',
      type: 'объявление',
      text: 'Und hier eine Meldung der Verkehrsbetriebe. Wegen Bauarbeiten fahren heute die Straßenbahnen nicht zum Hauptbahnhof. Fahrgäste zum Hauptbahnhof, bitte nehmen Sie die Straßenbahn bis zum Theaterplatz. Dort stehen Busse bereit, die Sie zum Hauptbahnhof bringen. Morgen ab Betriebsbeginn fahren die Straßenbahnen dann wieder planmäßig.',
      sentenceTranslations: {
        'Und hier eine Meldung der Verkehrsbetriebe.': { literal: 'И здесь сообщение транспортной-компании', literary: 'А вот сообщение транспортной компании.' },
        'Wegen Bauarbeiten fahren heute die Straßenbahnen nicht zum Hauptbahnhof.': { literal: 'Из-за строительных-работ едут сегодня трамваи не к главному-вокзалу', literary: 'Из-за строительных работ трамваи сегодня не ходят до главного вокзала.' },
        'Fahrgäste zum Hauptbahnhof, bitte nehmen Sie die Straßenbahn bis zum Theaterplatz.': { literal: 'Пассажиры к главному-вокзалу, пожалуйста возьмите вы трамвай до Театральной-площади', literary: 'Пассажиры до главного вокзала, пожалуйста, садитесь на трамвай до Театральной площади.' },
        'Dort stehen Busse bereit, die Sie zum Hauptbahnhof bringen.': { literal: 'Там стоят автобусы готовые, которые вас к главному-вокзалу привозят', literary: 'Там стоят готовые автобусы, которые довезут вас до главного вокзала.' },
        'Morgen ab Betriebsbeginn fahren die Straßenbahnen dann wieder planmäßig.': { literal: 'Завтра с начала-работы едут трамваи тогда снова по-расписанию', literary: 'Завтра с начала работы трамваи снова пойдут по расписанию.' },
      },
      vocabulary: [
        { de: 'die Meldung', plural: 'die Meldungen', ru: 'сообщение', gender: 'feminin', collocation: 'eine Meldung der Verkehrsbetriebe', example: 'Und hier eine Meldung der Verkehrsbetriebe.' },
        { de: 'die Bauarbeiten', ru: 'строительные работы', gender: 'feminin', collocation: 'wegen Bauarbeiten', example: 'Wegen Bauarbeiten fahren heute die Straßenbahnen nicht zum Hauptbahnhof.' },
        { de: 'die Straßenbahn', plural: 'die Straßenbahnen', ru: 'трамвай', gender: 'feminin', collocation: 'die Straßenbahn nehmen', example: 'Fahrgäste zum Hauptbahnhof, bitte nehmen Sie die Straßenbahn bis zum Theaterplatz.' },
        { de: 'der Hauptbahnhof', plural: 'die Hauptbahnhöfe', ru: 'главный вокзал', gender: 'maskulin', collocation: 'zum Hauptbahnhof fahren', example: 'Wegen Bauarbeiten fahren heute die Straßenbahnen nicht zum Hauptbahnhof.' },
        { de: 'der Fahrgast', plural: 'die Fahrgäste', ru: 'пассажир', gender: 'maskulin', collocation: 'Fahrgäste zum Hauptbahnhof', example: 'Fahrgäste zum Hauptbahnhof, bitte nehmen Sie die Straßenbahn bis zum Theaterplatz.' },
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'Busse stehen bereit', example: 'Dort stehen Busse bereit, die Sie zum Hauptbahnhof bringen.' },
        { de: 'bereitstehen', ru: 'быть наготове', type: 'verb', forms: 'steht bereit, stand bereit, hat bereitgestanden', example: 'Dort stehen Busse bereit, die Sie zum Hauptbahnhof bringen.' },
        { de: 'planmäßig', ru: 'по расписанию', type: 'adv', example: 'Morgen ab Betriebsbeginn fahren die Straßenbahnen dann wieder planmäßig.' },
      ],
      practiceSentences: [
        { de: 'Wegen Regen fahre ich nicht.', ru: 'Из-за дождя я не еду.', note: 'V2 с инверсией' },
        { de: 'Nehmen Sie den Bus!', ru: 'Садитесь на автобус!', note: 'императив' },
        { de: 'Die Busse stehen bereit.', ru: 'Автобусы готовы.', note: 'V2, разделяемый' },
        { de: 'Der Zug fährt planmäßig.', ru: 'Поезд идёт по расписанию.', note: 'V2' },
        { de: 'Ab morgen arbeite ich wieder.', ru: 'С завтра я снова работаю.', note: 'V2 с инверсией' },
      ],
      question: {
        de: 'Wie kommen Fahrgäste heute zum Hauptbahnhof?',
        ru: 'Как пассажиры могут сегодня добраться до главного вокзала?',
        options: [
          { de: 'Mit der Straßenbahn direkt', ru: 'На трамвае напрямую' },
          { de: 'Mit der Straßenbahn bis Theaterplatz, dann mit dem Bus', ru: 'На трамвае до Театральной площади, затем на автобусе' },
          { de: 'Nur zu Fuß', ru: 'Только пешком' },
        ],
        correct: 1,
        explanation: 'Объявление говорит: "nehmen Sie die Straßenbahn bis zum Theaterplatz dort stehen Busse bereit die Sie zum Hauptbahnhof bringen".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'VHS-Kurse',
      type: 'диалог',
      text: 'Grüß dich, Erik. So, hier ist das neue Kursprogramm von der Volkshochschule. Wir wollten doch auch etwas machen. Hallo Julia, stimmt. Annette hat mich schon angerufen. Sie weiß auch schon, was sie machen möchte. Sie geht in den Kurs Fotografieren. Aber ich habe gedacht, dass sie lieber einen Malkurs machen möchte. Ja, aber jetzt hat sie eine neue Kamera, die interessiert sie im Moment mehr. Und Thomas interessiert sich für die Schreibwerkstatt. Schreiben, das kann er doch. Ja, aber hier lernt man, wie man Geschichten und Texte schreibt, und das ist etwas anderes. Martin wollte sich eigentlich auch anmelden, aber dann hat er doch den Theaterkurs gewählt. Das ist bestimmt gut für ihn, er singt ja schon so toll, und hier kann er noch kreativer sein. Dann habe ich noch mit Sarah gesprochen. Ich weiß schon, bei ihr geht es bestimmt um Computer. Klar, sie ist so fit im Internet, braucht sie dann einen Kurs? Schon, aber einen Kurs, in dem sie lernt, was sie machen kann, wenn ihr Computer kaputt ist. Gut, und was würdest du gerne machen, Erik? Mal sehen, ich glaube etwas mit Musik. Gitarre kann ich ja schon, aber ich möchte gerne auch mal ein anderes Instrument lernen. Hier, schau mal. Und du, Julia? Ich denke, ich möchte mal lernen, wie man ein richtig gutes Essen macht. Du kochst doch schon sehr gut. Aber ich suche neue Ideen.',
      sentenceTranslations: {
        'Grüß dich, Erik.': { literal: 'Приветствую тебя, Эрик', literary: 'Привет, Эрик.' },
        'So, hier ist das neue Kursprogramm von der Volkshochschule.': { literal: 'Так, здесь есть новая программа-курсов от народного-университета', literary: 'Вот новая программа курсов Народного университета.' },
        'Wir wollten doch auch etwas machen.': { literal: 'Мы хотели же тоже что-то делать', literary: 'Мы же тоже хотели чем-то заняться.' },
        'Hallo Julia, stimmt.': { literal: 'Привет Юлия, верно', literary: 'Привет, Юлия, точно.' },
        'Annette hat mich schon angerufen.': { literal: 'Аннетте имеет меня уже позвонила', literary: 'Аннетте мне уже звонила.' },
        'Sie weiß auch schon, was sie machen möchte.': { literal: 'Она знает также уже, что она делать хочет', literary: 'Она уже знает, чем хочет заняться.' },
        'Sie geht in den Kurs Fotografieren.': { literal: 'Она идёт в курс фотографирование', literary: 'Она идёт на курс фотографии.' },
        'Aber ich habe gedacht, dass sie lieber einen Malkurs machen möchte.': { literal: 'Но я думал, что она лучше курс-рисования делать хочет', literary: 'Но я думал, что она предпочтёт курс рисования.' },
        'Ja, aber jetzt hat sie eine neue Kamera, die interessiert sie im Moment mehr.': { literal: 'Да, но теперь имеет она новую камеру, та интересует её в моменте больше', literary: 'Да, но теперь у неё новая камера, она интересует её больше.' },
        'Und Thomas interessiert sich für die Schreibwerkstatt.': { literal: 'И Томас интересуется себя для писательской-мастерской', literary: 'А Томас интересуется писательской мастерской.' },
        'Schreiben, das kann er doch.': { literal: 'Писать, это может он же', literary: 'Писать он и так умеет.' },
        'Ja, aber hier lernt man, wie man Geschichten und Texte schreibt, und das ist etwas anderes.': { literal: 'Да, но здесь учат, как пишут истории и тексты, и это есть что-то другое', literary: 'Да, но здесь учат писать истории и тексты, а это совсем другое.' },
        'Martin wollte sich eigentlich auch anmelden, aber dann hat er doch den Theaterkurs gewählt.': { literal: 'Мартин хотел себя собственно тоже записать, но потом выбрал он же театральный-курс', literary: 'Мартин вообще-то тоже хотел записаться, но потом всё-таки выбрал театральный курс.' },
        'Das ist bestimmt gut für ihn, er singt ja schon so toll, und hier kann er noch kreativer sein.': { literal: 'Это есть определённо хорошо для него, он поёт уже так прекрасно, и здесь может он ещё креативнее быть', literary: 'Это ему точно подходит, он и так прекрасно поёт, а здесь сможет быть ещё креативнее.' },
        'Dann habe ich noch mit Sarah gesprochen.': { literal: 'Потом имею я ещё с Сарой говорила', literary: 'Ещё я поговорила с Сарой.' },
        'Ich weiß schon, bei ihr geht es bestimmt um Computer.': { literal: 'Я знаю уже, у неё идёт оно точно о компьютере', literary: 'Я уже знаю, у неё наверняка речь о компьютерах.' },
        'Klar, sie ist so fit im Internet, braucht sie dann einen Kurs?': { literal: 'Конечно, она есть так опытная в интернете, нуждается она тогда курс?', literary: 'Конечно, она так хорошо разбирается в интернете, нужен ли ей курс?' },
        'Schon, aber einen Kurs, in dem sie lernt, was sie machen kann, wenn ihr Computer kaputt ist.': { literal: 'Да, но курс, в котором она учит, что она делать может, когда её компьютер сломан есть', literary: 'Да, но курс, на котором она научится, что делать, когда компьютер сломается.' },
        'Gut, und was würdest du gerne machen, Erik?': { literal: 'Хорошо, и что хотел бы ты охотно делать, Эрик?', literary: 'Хорошо, а чем бы ты хотел заняться, Эрик?' },
        'Mal sehen, ich glaube etwas mit Musik.': { literal: 'Раз посмотрим, я думаю что-то с музыкой', literary: 'Посмотрим, думаю, чем-то музыкальным.' },
        'Gitarre kann ich ja schon, aber ich möchte gerne auch mal ein anderes Instrument lernen.': { literal: 'Гитару могу я уже, но я хотел бы охотно также раз другой инструмент учить', literary: 'На гитаре я уже умею играть, но хотел бы научиться играть на другом инструменте.' },
        'Hier, schau mal.': { literal: 'Здесь, посмотри', literary: 'Вот, смотри.' },
        'Und du, Julia?': { literal: 'А ты, Юлия?', literary: 'А ты, Юлия?' },
        'Ich denke, ich möchte mal lernen, wie man ein richtig gutes Essen macht.': { literal: 'Я думаю, я хотела бы раз научиться, как делают действительно хорошую еду', literary: 'Я думаю, мне хотелось бы научиться готовить по-настоящему вкусную еду.' },
        'Du kochst doch schon sehr gut.': { literal: 'Ты готовишь же уже очень хорошо', literary: 'Ты же и так прекрасно готовишь.' },
        'Aber ich suche neue Ideen.': { literal: 'Но я ищу новые идеи', literary: 'Но я ищу новые идеи.' },
      },
      vocabulary: [
        { de: 'das Kursprogramm', plural: 'die Kursprogramme', ru: 'программа курсов', gender: 'neutrum', collocation: 'das neue Kursprogramm', example: 'So, hier ist das neue Kursprogramm von der Volkshochschule.' },
        { de: 'die Volkshochschule', plural: 'die Volkshochschulen', ru: 'народный университет', gender: 'feminin', collocation: 'von der Volkshochschule', example: 'So, hier ist das neue Kursprogramm von der Volkshochschule.' },
        { de: 'die Kamera', plural: 'die Kameras', ru: 'камера', gender: 'feminin', collocation: 'eine neue Kamera', example: 'Ja, aber jetzt hat sie eine neue Kamera, die interessiert sie im Moment mehr.' },
        { de: 'die Schreibwerkstatt', plural: 'die Schreibwerkstätten', ru: 'писательская мастерская', gender: 'feminin', collocation: 'sich für die Schreibwerkstatt interessieren', example: 'Und Thomas interessiert sich für die Schreibwerkstatt.' },
        { de: 'die Geschichte', plural: 'die Geschichten', ru: 'история, рассказ', gender: 'feminin', collocation: 'Geschichten schreiben', example: 'Ja, aber hier lernt man, wie man Geschichten und Texte schreibt, und das ist etwas anderes.' },
        { de: 'der Theaterkurs', plural: 'die Theaterkurse', ru: 'театральный курс', gender: 'maskulin', collocation: 'den Theaterkurs wählen', example: 'Martin wollte sich eigentlich auch anmelden, aber dann hat er doch den Theaterkurs gewählt.' },
        { de: 'der Computer', plural: 'die Computer', ru: 'компьютер', gender: 'maskulin', collocation: 'Computer kaputt', example: 'Schon, aber einen Kurs, in dem sie lernt, was sie machen kann, wenn ihr Computer kaputt ist.' },
        { de: 'das Instrument', plural: 'die Instrumente', ru: 'инструмент', gender: 'neutrum', collocation: 'ein anderes Instrument lernen', example: 'Gitarre kann ich ja schon, aber ich möchte gerne auch mal ein anderes Instrument lernen.' },
        { de: 'die Gitarre', plural: 'die Gitarren', ru: 'гитара', gender: 'feminin', collocation: 'Gitarre spielen', example: 'Gitarre kann ich ja schon, aber ich möchte gerne auch mal ein anderes Instrument lernen.' },
        { de: 'das Essen', plural: 'die Essen', ru: 'еда', gender: 'neutrum', collocation: 'ein gutes Essen machen', example: 'Ich denke, ich möchte mal lernen, wie man ein richtig gutes Essen macht.' },
        { de: 'sich interessieren für', ru: 'интересоваться', type: 'verb', forms: 'interessiert sich, interessierte sich, hat sich interessiert', example: 'Und Thomas interessiert sich für die Schreibwerkstatt.' },
        { de: 'sich anmelden', ru: 'записываться', type: 'verb', forms: 'meldet sich an, meldete sich an, hat sich angemeldet', example: 'Martin wollte sich eigentlich auch anmelden, aber dann hat er doch den Theaterkurs gewählt.' },
        { de: 'wählen', ru: 'выбирать', type: 'verb', forms: 'wählt, wählte, hat gewählt', example: 'Martin wollte sich eigentlich auch anmelden, aber dann hat er doch den Theaterkurs gewählt.' },
        { de: 'kochen', ru: 'готовить', type: 'verb', forms: 'kocht, kochte, hat gekocht', example: 'Du kochst doch schon sehr gut.' },
        { de: 'kreativ', ru: 'творческий', type: 'adj', example: 'Das ist bestimmt gut für ihn, er singt ja schon so toll, und hier kann er noch kreativer sein.' },
        { de: 'kaputt', ru: 'сломанный', type: 'adj', example: 'Schon, aber einen Kurs, in dem sie lernt, was sie machen kann, wenn ihr Computer kaputt ist.' },
      ],
      practiceSentences: [
        { de: 'Ich interessiere mich für Musik.', ru: 'Я интересуюсь музыкой.', note: 'V2, возвратный' },
        { de: 'Er wählt einen Kochkurs.', ru: 'Он выбирает кулинарный курс.', note: 'V2' },
        { de: 'Sie ist fit im Computer.', ru: 'Она разбирается в компьютерах.', note: 'V2, sein + прилагательное' },
        { de: 'Wir lernen fotografieren.', ru: 'Мы учимся фотографировать.', note: 'V2 + инфинитив' },
        { de: 'Man kann hier Gitarre spielen.', ru: 'Здесь можно играть на гитаре.', note: 'V2, модальный + инфинитив' },
      ],
      question: {
        de: 'Welchen Kurs wählt Julia?',
        ru: 'Какой курс выбирает Юлия?',
        options: [
          { de: 'Fotografieren', ru: 'Фотография' },
          { de: 'Kochkurs', ru: 'Кулинарный курс' },
          { de: 'Gitarre', ru: 'Гитара' },
        ],
        correct: 1,
        explanation: 'Юлия говорит: "ich denke, ich möchte mal lernen, wie man ein richtig gutes Essen macht".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 7,
      name: 'John',
      type: 'диалог',
      text: 'Hallo John, was möchtest du trinken? Einen Kaffee oder möchtest du einen Apfelsaft? Ich mag Kaffee, aber ich habe heute schon so viel Kaffee getrunken. Ich weiß nicht. Oder ein Bier? Nein, dann lieber einen Apfelsaft. Ein Bier vielleicht später.',
      sentenceTranslations: {
        'Hallo John, was möchtest du trinken?': { literal: 'Привет Джон, что хотел бы ты пить?', literary: 'Привет, Джон, что ты хочешь выпить?' },
        'Einen Kaffee oder möchtest du einen Apfelsaft?': { literal: 'Один кофе или хочешь ты яблочный-сок?', literary: 'Кофе, или хочешь яблочный сок?' },
        'Ich mag Kaffee, aber ich habe heute schon so viel Kaffee getrunken.': { literal: 'Я люблю кофе, но я имею сегодня уже так много кофе выпитым', literary: 'Я люблю кофе, но сегодня уже столько кофе выпил.' },
        'Ich weiß nicht.': { literal: 'Я знаю не', literary: 'Не знаю.' },
        'Oder ein Bier?': { literal: 'Или пиво?', literary: 'Или пиво?' },
        'Nein, dann lieber einen Apfelsaft.': { literal: 'Нет, тогда лучше яблочный-сок', literary: 'Нет, тогда лучше яблочный сок.' },
        'Ein Bier vielleicht später.': { literal: 'Пиво возможно позже', literary: 'Пиво, может, позже.' },
      },
      vocabulary: [
        { de: 'der Kaffee', ru: 'кофе', gender: 'maskulin', collocation: 'Kaffee trinken', example: 'Ich mag Kaffee, aber ich habe heute schon so viel Kaffee getrunken.' },
        { de: 'der Apfelsaft', plural: 'die Apfelsäfte', ru: 'яблочный сок', gender: 'maskulin', collocation: 'einen Apfelsaft trinken', example: 'Nein, dann lieber einen Apfelsaft.' },
        { de: 'das Bier', plural: 'die Biere', ru: 'пиво', gender: 'neutrum', collocation: 'ein Bier trinken', example: 'Ein Bier vielleicht später.' },
        { de: 'trinken', ru: 'пить', type: 'verb', forms: 'trinkt, trank, hat getrunken', example: 'Ich mag Kaffee, aber ich habe heute schon so viel Kaffee getrunken.' },
        { de: 'mögen', ru: 'любить, нравиться', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Ich mag Kaffee, aber ich habe heute schon so viel Kaffee getrunken.' },
        { de: 'lieber', ru: 'лучше, предпочтительнее', type: 'adv', example: 'Nein, dann lieber einen Apfelsaft.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte Tee trinken.', ru: 'Я хотел бы выпить чай.', note: 'V2, модальный + инфинитив' },
        { de: 'Er mag Apfelsaft.', ru: 'Ему нравится яблочный сок.', note: 'V2, mögen без инфинитива' },
        { de: 'Wir haben viel getrunken.', ru: 'Мы много выпили.', note: 'Perfekt с haben' },
        { de: 'Lieber nehme ich Wasser.', ru: 'Лучше я возьму воду.', note: 'V2 с инверсией' },
        { de: 'Möchtest du ein Bier?', ru: 'Хочешь пиво?', note: 'V1 вопрос, Konjunktiv II' },
      ],
      question: {
        de: 'Was möchte John trinken?',
        ru: 'Что хочет выпить Джон?',
        options: [
          { de: 'Kaffee', ru: 'Кофе' },
          { de: 'Apfelsaft', ru: 'Яблочный сок' },
          { de: 'Bier', ru: 'Пиво' },
        ],
        correct: 1,
        explanation: 'Джон говорит: "ich habe heute schon so viel Kaffee getrunken... dann lieber einen Apfelsaft".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 8,
      name: 'Radtour',
      type: 'диалог',
      text: 'Sag mal, wir wollen doch am Sonntag eine Radtour machen. Weißt du, wie das Wetter wird? Im Wetterbericht haben sie gesagt, dass die Sonne scheint, es aber auch immer wieder Wolken gibt. Es regnet nicht, das ist wichtig. Wolken finde ich auch nicht so schlimm, dann ist es nicht so heiß.',
      sentenceTranslations: {
        'Sag mal, wir wollen doch am Sonntag eine Radtour machen.': { literal: 'Скажи, мы хотим же в воскресенье велотур делать', literary: 'Слушай, мы же хотим в воскресенье покататься на велосипедах.' },
        'Weißt du, wie das Wetter wird?': { literal: 'Знаешь ты, как погода становится?', literary: 'Ты знаешь, какая будет погода?' },
        'Im Wetterbericht haben sie gesagt, dass die Sonne scheint, es aber auch immer wieder Wolken gibt.': { literal: 'В прогнозе-погоды имеют они сказали, что солнце светит, оно но также постоянно облака даёт', literary: 'В прогнозе погоды сказали, что будет солнце, но периодически облака.' },
        'Es regnet nicht, das ist wichtig.': { literal: 'Оно дождит не, это есть важно', literary: 'Дождя не будет, это главное.' },
        'Wolken finde ich auch nicht so schlimm, dann ist es nicht so heiß.': { literal: 'Облака нахожу я тоже не так плохими, тогда есть это не так жарко', literary: 'Облака тоже не так страшно, тогда не так жарко.' },
      },
      vocabulary: [
        { de: 'die Radtour', plural: 'die Radtouren', ru: 'велопрогулка', gender: 'feminin', collocation: 'eine Radtour machen', example: 'Sag mal, wir wollen doch am Sonntag eine Radtour machen.' },
        { de: 'die Sonne', ru: 'солнце', gender: 'feminin', collocation: 'die Sonne scheint', example: 'Im Wetterbericht haben sie gesagt, dass die Sonne scheint, es aber auch immer wieder Wolken gibt.' },
        { de: 'die Wolke', plural: 'die Wolken', ru: 'облако', gender: 'feminin', collocation: 'es gibt Wolken', example: 'Im Wetterbericht haben sie gesagt, dass die Sonne scheint, es aber auch immer wieder Wolken gibt.' },
        { de: 'scheinen', ru: 'светить', type: 'verb', forms: 'scheint, schien, hat geschienen', example: 'Im Wetterbericht haben sie gesagt, dass die Sonne scheint, es aber auch immer wieder Wolken gibt.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Es regnet nicht, das ist wichtig.' },
        { de: 'heiß', ru: 'жаркий', type: 'adj', example: 'Wolken finde ich auch nicht so schlimm, dann ist es nicht so heiß.' },
        { de: 'schlimm', ru: 'плохой, страшный', type: 'adj', example: 'Wolken finde ich auch nicht so schlimm, dann ist es nicht so heiß.' },
      ],
      practiceSentences: [
        { de: 'Wir machen eine Radtour.', ru: 'Мы совершаем велопрогулку.', note: 'V2' },
        { de: 'Das Wetter wird schön.', ru: 'Погода будет хорошей.', note: 'V2, werden' },
        { de: 'Die Sonne scheint heute.', ru: 'Солнце светит сегодня.', note: 'V2' },
        { de: 'Es gibt Wolken.', ru: 'Есть облака.', note: 'V2, es gibt' },
        { de: 'Es regnet nicht.', ru: 'Дождя нет.', note: 'V2, отрицание' },
      ],
      question: {
        de: 'Wie wird das Wetter am Sonntag?',
        ru: 'Какая будет погода в воскресенье?',
        options: [
          { de: 'Es regnet', ru: 'Будет дождь' },
          { de: 'Sonne mit Wolken, aber kein Regen', ru: 'Солнце с облаками, но без дождя' },
          { de: 'Nur sonnig', ru: 'Только солнечно' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "die Sonne scheint es aber auch immer wieder Wolken gibt es regnet nicht".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 9,
      name: 'Herr Baumann',
      type: 'диалог',
      text: 'Herr Baumann, wie kommen Sie zur Arbeit? Früher bin ich immer mit dem Auto gefahren, aber heute mache ich das nicht mehr. Zu viel Verkehr, zu viel Stress. Ich möchte eigentlich mein Fahrrad nehmen, aber der Weg ist zu weit. Also nehme ich den Bus, der ist zwar teurer als das Fahrrad, aber bequemer.',
      sentenceTranslations: {
        'Herr Baumann, wie kommen Sie zur Arbeit?': { literal: 'Господин Бауманн, как приходите вы к работе?', literary: 'Господин Бауманн, как вы добираетесь на работу?' },
        'Früher bin ich immer mit dem Auto gefahren, aber heute mache ich das nicht mehr.': { literal: 'Раньше есть я всегда с машиной ездил, но сегодня делаю я это не больше', literary: 'Раньше я всегда ездил на машине, но теперь так больше не делаю.' },
        'Zu viel Verkehr, zu viel Stress.': { literal: 'Слишком много движения, слишком много стресса', literary: 'Слишком много пробок, слишком много стресса.' },
        'Ich möchte eigentlich mein Fahrrad nehmen, aber der Weg ist zu weit.': { literal: 'Я хотел бы собственно мой велосипед взять, но путь есть слишком далёкий', literary: 'Вообще-то я хотел бы ездить на велосипеде, но путь слишком далёкий.' },
        'Also nehme ich den Bus, der ist zwar teurer als das Fahrrad, aber bequemer.': { literal: 'Итак беру я автобус, он есть хотя дороже чем велосипед, но удобнее', literary: 'Поэтому я езжу на автобусе, он хоть и дороже велосипеда, но удобнее.' },
      },
      vocabulary: [
        { de: 'die Arbeit', plural: 'die Arbeiten', ru: 'работа', gender: 'feminin', collocation: 'zur Arbeit kommen', example: 'Herr Baumann, wie kommen Sie zur Arbeit?' },
        { de: 'das Auto', plural: 'die Autos', ru: 'машина', gender: 'neutrum', collocation: 'mit dem Auto fahren', example: 'Früher bin ich immer mit dem Auto gefahren, aber heute mache ich das nicht mehr.' },
        { de: 'der Verkehr', ru: 'движение, пробки', gender: 'maskulin', collocation: 'zu viel Verkehr', example: 'Zu viel Verkehr, zu viel Stress.' },
        { de: 'das Fahrrad', plural: 'die Fahrräder', ru: 'велосипед', gender: 'neutrum', collocation: 'mein Fahrrad nehmen', example: 'Ich möchte eigentlich mein Fahrrad nehmen, aber der Weg ist zu weit.' },
        { de: 'der Weg', plural: 'die Wege', ru: 'путь', gender: 'maskulin', collocation: 'der Weg ist zu weit', example: 'Ich möchte eigentlich mein Fahrrad nehmen, aber der Weg ist zu weit.' },
        { de: 'bequem', ru: 'удобный', type: 'adj', example: 'Also nehme ich den Bus, der ist zwar teurer als das Fahrrad, aber bequemer.' },
        { de: 'teuer', ru: 'дорогой', type: 'adj', example: 'Also nehme ich den Bus, der ist zwar teurer als das Fahrrad, aber bequemer.' },
        { de: 'eigentlich', ru: 'вообще-то, собственно', type: 'adv', example: 'Ich möchte eigentlich mein Fahrrad nehmen, aber der Weg ist zu weit.' },
      ],
      practiceSentences: [
        { de: 'Ich komme mit dem Bus zur Arbeit.', ru: 'Я езжу на работу на автобусе.', note: 'V2' },
        { de: 'Früher bin ich gefahren.', ru: 'Раньше я ездил.', note: 'Perfekt с sein' },
        { de: 'Der Weg ist zu weit.', ru: 'Путь слишком далёкий.', note: 'V2, sein + прилагательное' },
        { de: 'Ich nehme das Fahrrad nicht mehr.', ru: 'Я больше не беру велосипед.', note: 'V2, отрицание' },
        { de: 'Der Bus ist teurer als das Fahrrad.', ru: 'Автобус дороже велосипеда.', note: 'V2, компаратив' },
      ],
      question: {
        de: 'Wie kommt Herr Baumann jetzt zur Arbeit?',
        ru: 'Как господин Бауманн теперь добирается на работу?',
        options: [
          { de: 'Mit dem Auto', ru: 'На машине' },
          { de: 'Mit dem Fahrrad', ru: 'На велосипеде' },
          { de: 'Mit dem Bus', ru: 'На автобусе' },
        ],
        correct: 2,
        explanation: 'Он говорит: "also nehme ich den Bus, der ist zwar teurer als das Fahrrad, aber bequemer".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 10,
      name: 'Mietvertrag',
      type: 'диалог',
      text: 'Frau Schneider, Ihr Mietvertrag ist fertig. Wann kann ich in die neue Wohnung? Ich habe schon Möbel bestellt. Sofort könnten Sie, aber noch einmal bei mir vorbeikommen. Auf dem Vertrag fehlt noch Ihre Unterschrift.',
      sentenceTranslations: {
        'Frau Schneider, Ihr Mietvertrag ist fertig.': { literal: 'Госпожа Шнайдер, ваш договор-аренды есть готов', literary: 'Госпожа Шнайдер, ваш договор аренды готов.' },
        'Wann kann ich in die neue Wohnung?': { literal: 'Когда могу я в новую квартиру?', literary: 'Когда я могу въехать в новую квартиру?' },
        'Ich habe schon Möbel bestellt.': { literal: 'Я имею уже мебель заказанной', literary: 'Я уже заказала мебель.' },
        'Sofort könnten Sie, aber noch einmal bei mir vorbeikommen.': { literal: 'Сразу могли бы вы, но ещё раз ко мне зайти', literary: 'Сразу могли бы, но нужно ещё раз зайти ко мне.' },
        'Auf dem Vertrag fehlt noch Ihre Unterschrift.': { literal: 'На договоре отсутствует ещё ваша подпись', literary: 'В договоре ещё не хватает вашей подписи.' },
      },
      vocabulary: [
        { de: 'der Mietvertrag', plural: 'die Mietverträge', ru: 'договор аренды', gender: 'maskulin', collocation: 'der Mietvertrag ist fertig', example: 'Frau Schneider, Ihr Mietvertrag ist fertig.' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'in die neue Wohnung', example: 'Wann kann ich in die neue Wohnung?' },
        { de: 'die Möbel', ru: 'мебель', gender: 'feminin', collocation: 'Möbel bestellen', example: 'Ich habe schon Möbel bestellt.' },
        { de: 'die Unterschrift', plural: 'die Unterschriften', ru: 'подпись', gender: 'feminin', collocation: 'die Unterschrift fehlt', example: 'Auf dem Vertrag fehlt noch Ihre Unterschrift.' },
        { de: 'bestellen', ru: 'заказывать', type: 'verb', forms: 'bestellt, bestellte, hat bestellt', example: 'Ich habe schon Möbel bestellt.' },
        { de: 'vorbeikommen', ru: 'заходить', type: 'verb', forms: 'kommt vorbei, kam vorbei, ist vorbeigekommen', example: 'Sofort könnten Sie, aber noch einmal bei mir vorbeikommen.' },
        { de: 'fehlen', ru: 'отсутствовать, не хватать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Auf dem Vertrag fehlt noch Ihre Unterschrift.' },
        { de: 'fertig', ru: 'готовый', type: 'adj', example: 'Frau Schneider, Ihr Mietvertrag ist fertig.' },
      ],
      practiceSentences: [
        { de: 'Der Vertrag ist fertig.', ru: 'Договор готов.', note: 'V2, sein + прилагательное' },
        { de: 'Ich habe Möbel bestellt.', ru: 'Я заказал мебель.', note: 'Perfekt с haben' },
        { de: 'Können Sie vorbeikommen?', ru: 'Можете вы зайти?', note: 'V1 вопрос, модальный' },
        { de: 'Die Unterschrift fehlt.', ru: 'Подпись отсутствует.', note: 'V2, fehlen' },
        { de: 'Wann kann ich einziehen?', ru: 'Когда я могу въехать?', note: 'W-вопрос, модальный + инфинитив' },
      ],
      question: {
        de: 'Was fehlt noch auf dem Mietvertrag?',
        ru: 'Чего ещё не хватает в договоре аренды?',
        options: [
          { de: 'Das Datum', ru: 'Даты' },
          { de: 'Die Unterschrift von Frau Schneider', ru: 'Подписи госпожи Шнайдер' },
          { de: 'Die Adresse', ru: 'Адреса' },
        ],
        correct: 1,
        explanation: 'Сказано: "auf dem Vertrag fehlt noch Ihre Unterschrift".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 11,
      name: 'Herr Paulsen',
      type: 'диалог',
      text: 'Herr Paulsen, danke, dass Sie vorbeigekommen sind und die Heizung repariert haben. Jetzt ist die Wohnung wieder warm und die Fenster schließen auch wieder sehr gut. Schön, kann ich noch etwas für Sie tun? Ja, der Aufzug funktioniert immer noch nicht.',
      sentenceTranslations: {
        'Herr Paulsen, danke, dass Sie vorbeigekommen sind und die Heizung repariert haben.': { literal: 'Господин Паульзен, спасибо, что вы зашли есть и отопление починили имеют', literary: 'Господин Паульзен, спасибо, что зашли и починили отопление.' },
        'Jetzt ist die Wohnung wieder warm und die Fenster schließen auch wieder sehr gut.': { literal: 'Теперь есть квартира снова тёплая и окна закрываются тоже снова очень хорошо', literary: 'Теперь в квартире снова тепло и окна тоже хорошо закрываются.' },
        'Schön, kann ich noch etwas für Sie tun?': { literal: 'Хорошо, могу я ещё что-то для вас сделать?', literary: 'Хорошо, могу я ещё чем-то помочь?' },
        'Ja, der Aufzug funktioniert immer noch nicht.': { literal: 'Да, лифт функционирует всё ещё не', literary: 'Да, лифт всё ещё не работает.' },
      },
      vocabulary: [
        { de: 'die Heizung', plural: 'die Heizungen', ru: 'отопление', gender: 'feminin', collocation: 'die Heizung reparieren', example: 'Herr Paulsen, danke, dass Sie vorbeigekommen sind und die Heizung repariert haben.' },
        { de: 'das Fenster', plural: 'die Fenster', ru: 'окно', gender: 'neutrum', collocation: 'die Fenster schließen', example: 'Jetzt ist die Wohnung wieder warm und die Fenster schließen auch wieder sehr gut.' },
        { de: 'der Aufzug', plural: 'die Aufzüge', ru: 'лифт', gender: 'maskulin', collocation: 'der Aufzug funktioniert nicht', example: 'Ja, der Aufzug funktioniert immer noch nicht.' },
        { de: 'reparieren', ru: 'ремонтировать', type: 'verb', forms: 'repariert, reparierte, hat repariert', example: 'Herr Paulsen, danke, dass Sie vorbeigekommen sind und die Heizung repariert haben.' },
        { de: 'schließen', ru: 'закрывать(ся)', type: 'verb', forms: 'schließt, schloss, hat geschlossen', example: 'Jetzt ist die Wohnung wieder warm und die Fenster schließen auch wieder sehr gut.' },
        { de: 'funktionieren', ru: 'работать (о технике)', type: 'verb', forms: 'funktioniert, funktionierte, hat funktioniert', example: 'Ja, der Aufzug funktioniert immer noch nicht.' },
      ],
      practiceSentences: [
        { de: 'Danke, dass Sie gekommen sind.', ru: 'Спасибо, что вы пришли.', note: 'dass-конец, Perfekt' },
        { de: 'Er hat alles repariert.', ru: 'Он всё починил.', note: 'Perfekt с haben' },
        { de: 'Die Wohnung ist wieder warm.', ru: 'Квартира снова тёплая.', note: 'V2, sein + прилагательное' },
        { de: 'Das Fenster schließt gut.', ru: 'Окно хорошо закрывается.', note: 'V2' },
        { de: 'Der Aufzug funktioniert nicht.', ru: 'Лифт не работает.', note: 'V2, отрицание' },
      ],
      question: {
        de: 'Was funktioniert immer noch nicht?',
        ru: 'Что всё ещё не работает?',
        options: [
          { de: 'Die Heizung', ru: 'Отопление' },
          { de: 'Die Fenster', ru: 'Окна' },
          { de: 'Der Aufzug', ru: 'Лифт' },
        ],
        correct: 2,
        explanation: 'В конце диалога говорится: "der Aufzug funktioniert immer noch nicht".'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 12,
      name: 'Interview Hermann',
      type: 'интервью',
      text: 'Herr Hermann, das Thema Verkehrsmittel ist im Moment sehr aktuell. Wir möchten Sie auch fragen, wie kommen Sie zur Arbeit? Sind Sie mit den Angeboten hier in der Stadt zufrieden? Eigentlich schon, es gibt Busse und Straßenbahnen, man kommt leicht überall hin. Und welches Verkehrsmittel benutzen Sie am liebsten? Bus und Straßenbahn, aber für die Arbeit brauche ich mein Auto. In meinem Job bin ich viel unterwegs und muss Kunden besuchen. Und in der Freizeit, da ist es anders. Ich nehme nur mein Auto, wenn ich am Wochenende weiter wegfahren möchte und wenn das Wetter schlecht ist. Sonst mache ich alles mit dem Fahrrad. Das ist gesund, billig und macht Spaß. Mein Auto lasse ich meistens in der Garage stehen. Viele Leute fahren nicht gern hier in der Stadt Fahrrad. Sie sagen, dass es zu viel Verkehr und immer noch zu wenig Fahrradwege gibt. Ich finde, dass das besser geworden ist. Man hat viele neue Fahrradwege gebaut. Natürlich muss man vorsichtig fahren, nie ohne Licht, dann kann auch nichts passieren. Früher habe ich auch alles mit dem Auto gemacht. Mit 18 Jahren war das Auto das Wichtigste in meinem Leben. Fahrradfahren war damals einfach nicht in Mode. Heute ist das anders. Mein Sohn, er ist 18 Jahre alt, fährt auch gern Fahrrad. Sein großer Wunsch ist aber ein eigenes Motorrad. Naja, da muss Papa noch ein wenig Geld verdienen. Mal sehen.',
      sentenceTranslations: {
        'Herr Hermann, das Thema Verkehrsmittel ist im Moment sehr aktuell.': { literal: 'Господин Херманн, тема транспортных-средств есть в моменте очень актуальна', literary: 'Господин Херманн, тема транспорта сейчас очень актуальна.' },
        'Wir möchten Sie auch fragen, wie kommen Sie zur Arbeit?': { literal: 'Мы хотели бы вас тоже спросить, как приходите вы к работе?', literary: 'Мы хотели бы вас спросить, как вы добираетесь на работу?' },
        'Sind Sie mit den Angeboten hier in der Stadt zufrieden?': { literal: 'Есть вы с предложениями здесь в городе довольны?', literary: 'Вы довольны транспортными услугами в городе?' },
        'Eigentlich schon, es gibt Busse und Straßenbahnen, man kommt leicht überall hin.': { literal: 'Собственно да, есть автобусы и трамваи, человек приходит легко везде туда', literary: 'В целом да, есть автобусы и трамваи, легко добраться куда угодно.' },
        'Und welches Verkehrsmittel benutzen Sie am liebsten?': { literal: 'И какое транспортное-средство используете вы наиболее охотно?', literary: 'А каким видом транспорта вы пользуетесь чаще всего?' },
        'Bus und Straßenbahn, aber für die Arbeit brauche ich mein Auto.': { literal: 'Автобус и трамвай, но для работы нуждаюсь я мою машину', literary: 'Автобус и трамвай, но для работы мне нужна машина.' },
        'In meinem Job bin ich viel unterwegs und muss Kunden besuchen.': { literal: 'В моей работе есть я много в-пути и должен клиентов посещать', literary: 'По работе я много езжу и должен навещать клиентов.' },
        'Und in der Freizeit, da ist es anders.': { literal: 'И в свободном-времени, тут есть оно по-другому', literary: 'А в свободное время всё по-другому.' },
        'Ich nehme nur mein Auto, wenn ich am Wochenende weiter wegfahren möchte und wenn das Wetter schlecht ist.': { literal: 'Я беру только мою машину, когда я в выходные дальше уехать хочу и когда погода плохая есть', literary: 'Я беру машину только когда хочу уехать подальше на выходных или когда плохая погода.' },
        'Sonst mache ich alles mit dem Fahrrad.': { literal: 'Иначе делаю я всё с велосипедом', literary: 'В остальном я всё делаю на велосипеде.' },
        'Das ist gesund, billig und macht Spaß.': { literal: 'Это есть здорово, дёшево и делает удовольствие', literary: 'Это полезно, дёшево и приносит удовольствие.' },
        'Mein Auto lasse ich meistens in der Garage stehen.': { literal: 'Мою машину оставляю я чаще-всего в гараже стоять', literary: 'Машину я чаще всего оставляю в гараже.' },
        'Viele Leute fahren nicht gern hier in der Stadt Fahrrad.': { literal: 'Многие люди ездят не охотно здесь в городе велосипед', literary: 'Многие люди не любят ездить на велосипеде в городе.' },
        'Sie sagen, dass es zu viel Verkehr und immer noch zu wenig Fahrradwege gibt.': { literal: 'Они говорят, что есть слишком много движения и всё ещё слишком мало велодорожек даёт', literary: 'Они говорят, что слишком много машин и мало велодорожек.' },
        'Ich finde, dass das besser geworden ist.': { literal: 'Я нахожу, что это лучше стало есть', literary: 'Я считаю, что стало лучше.' },
        'Man hat viele neue Fahrradwege gebaut.': { literal: 'Человек имеет много новых велодорожек построенными', literary: 'Построили много новых велодорожек.' },
        'Natürlich muss man vorsichtig fahren, nie ohne Licht, dann kann auch nichts passieren.': { literal: 'Конечно должен человек осторожно ездить, никогда без света, тогда может тоже ничего случиться', literary: 'Конечно, нужно ездить осторожно, никогда без фонаря, тогда ничего не случится.' },
        'Früher habe ich auch alles mit dem Auto gemacht.': { literal: 'Раньше имею я тоже всё с машиной сделал', literary: 'Раньше я тоже всё делал на машине.' },
        'Mit 18 Jahren war das Auto das Wichtigste in meinem Leben.': { literal: 'С 18 лет было машина самое-важное в моей жизни', literary: 'В 18 лет машина была самым важным в моей жизни.' },
        'Fahrradfahren war damals einfach nicht in Mode.': { literal: 'Езда-на-велосипеде была тогда просто не в моде', literary: 'Езда на велосипеде тогда просто не была модной.' },
        'Heute ist das anders.': { literal: 'Сегодня есть это по-другому', literary: 'Сегодня всё иначе.' },
        'Mein Sohn, er ist 18 Jahre alt, fährt auch gern Fahrrad.': { literal: 'Мой сын, он есть 18 лет старый, ездит тоже охотно велосипед', literary: 'Мой сын, ему 18 лет, тоже любит ездить на велосипеде.' },
        'Sein großer Wunsch ist aber ein eigenes Motorrad.': { literal: 'Его большое желание есть но собственный мотоцикл', literary: 'Но его большая мечта — собственный мотоцикл.' },
        'Naja, da muss Papa noch ein wenig Geld verdienen.': { literal: 'Ну, тут должен папа ещё немного денег заработать', literary: 'Ну, папе нужно ещё немного подзаработать.' },
        'Mal sehen.': { literal: 'Раз посмотрим', literary: 'Посмотрим.' },
      },
      vocabulary: [
        { de: 'das Verkehrsmittel', plural: 'die Verkehrsmittel', ru: 'транспортное средство', gender: 'neutrum', collocation: 'welches Verkehrsmittel benutzen', example: 'Herr Hermann, das Thema Verkehrsmittel ist im Moment sehr aktuell.' },
        { de: 'das Angebot', plural: 'die Angebote', ru: 'предложение, услуга', gender: 'neutrum', collocation: 'mit den Angeboten zufrieden', example: 'Sind Sie mit den Angeboten hier in der Stadt zufrieden?' },
        { de: 'der Kunde', plural: 'die Kunden', ru: 'клиент', gender: 'maskulin', collocation: 'Kunden besuchen', example: 'In meinem Job bin ich viel unterwegs und muss Kunden besuchen.' },
        { de: 'die Freizeit', ru: 'свободное время', gender: 'feminin', collocation: 'in der Freizeit', example: 'Und in der Freizeit, da ist es anders.' },
        { de: 'die Garage', plural: 'die Garagen', ru: 'гараж', gender: 'feminin', collocation: 'in der Garage stehen', example: 'Mein Auto lasse ich meistens in der Garage stehen.' },
        { de: 'der Fahrradweg', plural: 'die Fahrradwege', ru: 'велодорожка', gender: 'maskulin', collocation: 'neue Fahrradwege bauen', example: 'Man hat viele neue Fahrradwege gebaut.' },
        { de: 'das Licht', plural: 'die Lichter', ru: 'свет, фонарь', gender: 'neutrum', collocation: 'nie ohne Licht', example: 'Natürlich muss man vorsichtig fahren, nie ohne Licht, dann kann auch nichts passieren.' },
        { de: 'die Mode', plural: 'die Moden', ru: 'мода', gender: 'feminin', collocation: 'in Mode sein', example: 'Fahrradfahren war damals einfach nicht in Mode.' },
        { de: 'der Sohn', plural: 'die Söhne', ru: 'сын', gender: 'maskulin', collocation: 'mein Sohn', example: 'Mein Sohn, er ist 18 Jahre alt, fährt auch gern Fahrrad.' },
        { de: 'das Motorrad', plural: 'die Motorräder', ru: 'мотоцикл', gender: 'neutrum', collocation: 'ein eigenes Motorrad', example: 'Sein großer Wunsch ist aber ein eigenes Motorrad.' },
        { de: 'das Geld', ru: 'деньги', gender: 'neutrum', collocation: 'Geld verdienen', example: 'Naja, da muss Papa noch ein wenig Geld verdienen.' },
        { de: 'benutzen', ru: 'использовать', type: 'verb', forms: 'benutzt, benutzte, hat benutzt', example: 'Und welches Verkehrsmittel benutzen Sie am liebsten?' },
        { de: 'wegfahren', ru: 'уезжать', type: 'verb', forms: 'fährt weg, fuhr weg, ist weggefahren', example: 'Ich nehme nur mein Auto, wenn ich am Wochenende weiter wegfahren möchte und wenn das Wetter schlecht ist.' },
        { de: 'verdienen', ru: 'зарабатывать', type: 'verb', forms: 'verdient, verdiente, hat verdient', example: 'Naja, da muss Papa noch ein wenig Geld verdienen.' },
        { de: 'passieren', ru: 'случаться', type: 'verb', forms: 'passiert, passierte, ist passiert', example: 'Natürlich muss man vorsichtig fahren, nie ohne Licht, dann kann auch nichts passieren.' },
        { de: 'zufrieden', ru: 'довольный', type: 'adj', example: 'Sind Sie mit den Angeboten hier in der Stadt zufrieden?' },
        { de: 'gesund', ru: 'здоровый, полезный', type: 'adj', example: 'Das ist gesund, billig und macht Spaß.' },
        { de: 'billig', ru: 'дешёвый', type: 'adj', example: 'Das ist gesund, billig und macht Spaß.' },
        { de: 'vorsichtig', ru: 'осторожный', type: 'adj', example: 'Natürlich muss man vorsichtig fahren, nie ohne Licht, dann kann auch nichts passieren.' },
      ],
      practiceSentences: [
        { de: 'Ich bin mit dem Bus zufrieden.', ru: 'Я доволен автобусом.', note: 'V2, sein + прилагательное' },
        { de: 'Er ist viel unterwegs.', ru: 'Он много в разъездах.', note: 'V2, sein + наречие' },
        { de: 'Wir fahren am Wochenende weg.', ru: 'Мы уезжаем на выходные.', note: 'V2, отделяемая приставка' },
        { de: 'Fahrradfahren macht Spaß.', ru: 'Езда на велосипеде приносит удовольствие.', note: 'V2' },
        { de: 'Man hat neue Wege gebaut.', ru: 'Построили новые дорожки.', note: 'Perfekt с haben' },
      ],
      question: {
        de: 'Wann benutzt Herr Hermann sein Auto in der Freizeit?',
        ru: 'Когда господин Херманн использует машину в свободное время?',
        options: [
          { de: 'Immer', ru: 'Всегда' },
          { de: 'Nie', ru: 'Никогда' },
          { de: 'Nur am Wochenende für weitere Fahrten und bei schlechtem Wetter', ru: 'Только на выходных для дальних поездок и в плохую погоду' },
        ],
        correct: 2,
        explanation: 'Он говорит: "ich nehme nur mein Auto wenn ich am Wochenende weiter wegfahren möchte und wenn das Wetter schlecht ist".'
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
    title: 'ОДИН ДЕНЬ В ГОРОДЕ',
    text: 'На Радио Поп ФМ можно {0} 50 евро. Скоро зима закончится, и на юге будет {1} погода. Анна принесёт подруге {2}, которую прочитала. Языковая школа {3} на Королевскую улицу. Из-за {4} трамваи сегодня не ходят до {5}. На курсах Народного университета Аннетте выбрала {6}, а Юлия хочет научиться {7}. Джон не хочет кофе, он выбирает {8}. В воскресенье друзья хотят сделать {9}. Господин Бауманн теперь ездит на работу на {10}, потому что путь слишком далёкий для велосипеда. В договоре аренды не хватает {11}. Лифт всё ещё не {12}. Господин Херманн в свободное время ездит на {13}.',
    blanks: [
      { answer: 'gewinnen', hint: 'выиграть (gewinnen)' },
      { answer: 'schöne', hint: 'хорошая (schön)' },
      { answer: 'das Buch', hint: 'книга (das Buch)' },
      { answer: 'umgezogen', hint: 'переехала (umziehen, Perf.)' },
      { answer: 'Bauarbeiten', hint: 'строительные работы (die Bauarbeiten)' },
      { answer: 'dem Hauptbahnhof', hint: 'главный вокзал (der Hauptbahnhof, Dat.)' },
      { answer: 'Fotografieren', hint: 'фотография (das Fotografieren)' },
      { answer: 'kochen', hint: 'готовить (kochen)' },
      { answer: 'den Apfelsaft', hint: 'яблочный сок (der Apfelsaft, Akk.)' },
      { answer: 'eine Radtour', hint: 'велопрогулка (die Radtour)' },
      { answer: 'dem Bus', hint: 'автобус (der Bus, Dat.)' },
      { answer: 'der Unterschrift', hint: 'подпись (die Unterschrift, Gen.)' },
      { answer: 'funktioniert', hint: 'работает (funktionieren)' },
      { answer: 'dem Fahrrad', hint: 'велосипед (das Fahrrad, Dat.)' },
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табы "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Radio Pop FM).',
    },
  },
};
LESSONS.push(LESSON_24);
