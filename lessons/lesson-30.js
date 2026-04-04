/* ═══════════════════════════════════════════════════════════
   Lesson 30 — Goethe Zertifikat A2 Hören
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_30 = {
  id: 'lesson-30',
  number: 30,
  title: 'Goethe A2 Hören — Musik, Mode, Schule, Freunde',
  subtitle: 'Karina über Musik, HipHop-Mode, Sprachreisen, Geschenke, Ferienjobs, Freunde und ein Interview mit Katja',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-30',
  videoUrl: 'https://www.youtube.com/watch?v=mr0i4G25oLg',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Karina',
      type: 'телефонное сообщение',
      text: 'Karina ist am Telefon. Zum Thema Musik möchte ich sagen, dass ich es nicht verstehe, wie jemand nur eine bestimmte Musik hören kann. Ich zum Beispiel höre sehr viel Musik: Funk, Pop, Rock und HipHop. Wichtig ist, dass ich die Musik mag. In der Disco finde ich am besten, wenn mal Rock, mal Pop, mal HipHop kommt.',
      sentenceTranslations: {
        'Karina ist am Telefon.': { literal: 'Карина есть на телефоне', literary: 'Карина на телефоне.' },
        'Zum Thema Musik möchte ich sagen, dass ich es nicht verstehe, wie jemand nur eine bestimmte Musik hören kann.': { literal: 'К теме музыка хотела бы я сказать, что я это не понимаю, как кто-то только одну определённую музыку слушать может', literary: 'По теме музыки я хочу сказать, что не понимаю, как можно слушать только один вид музыки.' },
        'Ich zum Beispiel höre sehr viel Musik: Funk, Pop, Rock und HipHop.': { literal: 'Я например слушаю очень много музыки: фанк, поп, рок и хип-хоп', literary: 'Я, например, слушаю очень разную музыку: фанк, поп, рок и хип-хоп.' },
        'Wichtig ist, dass ich die Musik mag.': { literal: 'Важно есть, что я эту музыку люблю', literary: 'Важно, чтобы музыка мне нравилась.' },
        'In der Disco finde ich am besten, wenn mal Rock, mal Pop, mal HipHop kommt.': { literal: 'В дискотеке нахожу я наилучшим, когда то рок, то поп, то хип-хоп приходит', literary: 'В дискотеке мне больше всего нравится, когда играет то рок, то поп, то хип-хоп.' },
      },
      vocabulary: [
        { de: 'das Telefon', plural: 'die Telefone', ru: 'телефон', gender: 'neutrum', collocation: 'am Telefon sein', example: 'Karina ist am Telefon.' },
        { de: 'das Thema', plural: 'die Themen', ru: 'тема', gender: 'neutrum', collocation: 'zum Thema Musik', example: 'Zum Thema Musik möchte ich sagen.' },
        { de: 'die Musik', ru: 'музыка', gender: 'feminin', collocation: 'Musik hören', example: 'Ich höre sehr viel Musik: Funk, Pop, Rock und HipHop.' },
        { de: 'die Disco', plural: 'die Discos', ru: 'дискотека', gender: 'feminin', collocation: 'in der Disco', example: 'In der Disco finde ich am besten, wenn mal Rock, mal Pop, mal HipHop kommt.' },
        { de: 'verstehen', ru: 'понимать', type: 'verb', forms: 'versteht, verstand, hat verstanden', example: 'Ich verstehe nicht, wie jemand nur eine bestimmte Musik hören kann.' },
        { de: 'mögen', ru: 'любить, нравиться', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Wichtig ist, dass ich die Musik mag.' },
        { de: 'bestimmt', ru: 'определённый', type: 'adj', example: 'Wie jemand nur eine bestimmte Musik hören kann.' },
        { de: 'wichtig', ru: 'важный', type: 'adj', example: 'Wichtig ist, dass ich die Musik mag.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte Musik hören.', ru: 'Я хочу слушать музыку.', note: 'модальный + инфинитив в конце' },
        { de: 'Es ist wichtig, dass du kommst.', ru: 'Важно, чтобы ты пришёл.', note: 'dass → глагол в конец' },
        { de: 'Sie findet Rock am besten.', ru: 'Ей больше всего нравится рок.', note: 'V2' },
        { de: 'Mal spielt er, mal singt er.', ru: 'То он играет, то он поёт.', note: 'V2 в обеих частях' },
        { de: 'Wir verstehen nicht, wie das geht.', ru: 'Мы не понимаем, как это работает.', note: 'wie → глагол в конец' },
      ],
      question: {
        de: 'Was sagt Karina über Musik?',
        ru: 'Что Карина говорит о музыке?',
        options: [
          { de: 'Sie hört nur eine Musikrichtung', ru: 'Она слушает только одно направление музыки' },
          { de: 'Sie mag verschiedene Musikstile', ru: 'Ей нравятся разные музыкальные стили' },
          { de: 'Sie geht nicht gern in die Disco', ru: 'Она не любит ходить на дискотеку' },
        ],
        correct: 1,
        explanation: 'Карина говорит: "ich höre sehr viel Musik: Funk, Pop, Rock und HipHop" — она слушает разные стили.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'HipHop Mode',
      type: 'личное высказывание',
      text: 'Viele halten mich für einen großen HipHop-Fan. Ich meine, okay, ich kaufe mir teure Hiphop-Sachen und Skaterschuhe. Aber eigentlich bin ich gar kein HipHop-Fan. Ich stehe nur total auf diese Mode: T-Shirts, Hosen und auch die Schuhe. Alles ist weit und bequem. Ich trage diese Kleidung nicht, damit ich den anderen gefalle. Ich trage sie, weil ich mich gut darin fühle.',
      sentenceTranslations: {
        'Viele halten mich für einen großen HipHop-Fan.': { literal: 'Многие держат меня за большого хип-хоп фаната', literary: 'Многие считают меня большим фанатом хип-хопа.' },
        'Ich meine, okay, ich kaufe mir teure Hiphop-Sachen und Skaterschuhe.': { literal: 'Я думаю, окей, я покупаю себе дорогие хип-хоп вещи и скейтерские ботинки', literary: 'Ну да, я покупаю дорогие хип-хоп вещи и кеды для скейта.' },
        'Aber eigentlich bin ich gar kein HipHop-Fan.': { literal: 'Но собственно есть я вовсе никакой хип-хоп фанат', literary: 'Но на самом деле я вовсе не фанат хип-хопа.' },
        'Ich stehe nur total auf diese Mode: T-Shirts, Hosen und auch die Schuhe.': { literal: 'Я стою только полностью на эту моду: футболки, брюки и также ботинки', literary: 'Мне просто очень нравится эта мода: футболки, штаны и кеды.' },
        'Alles ist weit und bequem.': { literal: 'Всё есть широко и удобно', literary: 'Всё широкое и удобное.' },
        'Ich trage diese Kleidung nicht, damit ich den anderen gefalle.': { literal: 'Я ношу эту одежду не, чтобы я другим нравился', literary: 'Я ношу эту одежду не для того, чтобы нравиться другим.' },
        'Ich trage sie, weil ich mich gut darin fühle.': { literal: 'Я ношу её, потому что я себя хорошо в_ней чувствую', literary: 'Я ношу её, потому что мне в ней комфортно.' },
      },
      vocabulary: [
        { de: 'der Fan', plural: 'die Fans', ru: 'фанат', gender: 'maskulin', collocation: 'HipHop-Fan sein', example: 'Viele halten mich für einen großen HipHop-Fan.' },
        { de: 'die Mode', plural: 'die Moden', ru: 'мода', gender: 'feminin', collocation: 'auf diese Mode stehen', example: 'Ich stehe nur total auf diese Mode.' },
        { de: 'die Hose', plural: 'die Hosen', ru: 'брюки', gender: 'feminin', collocation: 'weite Hosen tragen', example: 'T-Shirts, Hosen und auch die Schuhe.' },
        { de: 'der Schuh', plural: 'die Schuhe', ru: 'ботинок, кед', gender: 'maskulin', collocation: 'Skaterschuhe kaufen', example: 'Ich kaufe mir teure Hiphop-Sachen und Skaterschuhe.' },
        { de: 'die Kleidung', ru: 'одежда', gender: 'feminin', collocation: 'Kleidung tragen', example: 'Ich trage diese Kleidung nicht, damit ich den anderen gefalle.' },
        { de: 'halten für', ru: 'считать (кем-л.)', type: 'verb', forms: 'hält, hielt, hat gehalten', example: 'Viele halten mich für einen großen HipHop-Fan.' },
        { de: 'tragen', ru: 'носить (одежду)', type: 'verb', forms: 'trägt, trug, hat getragen', example: 'Ich trage diese Kleidung nicht, damit ich den anderen gefalle.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Ich trage diese Kleidung nicht, damit ich den anderen gefalle.' },
        { de: 'sich fühlen', ru: 'чувствовать себя', type: 'verb', forms: 'fühlt sich, fühlte sich, hat sich gefühlt', example: 'Ich trage sie, weil ich mich gut darin fühle.' },
        { de: 'bequem', ru: 'удобный', type: 'adj', example: 'Alles ist weit und bequem.' },
        { de: 'eigentlich', ru: 'на самом деле', type: 'adv', example: 'Aber eigentlich bin ich gar kein HipHop-Fan.' },
      ],
      practiceSentences: [
        { de: 'Sie hält ihn für klug.', ru: 'Она считает его умным.', note: 'V2, für + Akk' },
        { de: 'Ich kaufe mir neue Schuhe.', ru: 'Я покупаю себе новые ботинки.', note: 'V2, возвратное mir' },
        { de: 'Er steht auf Rockmusik.', ru: 'Он обожает рок-музыку.', note: 'V2, auf + Akk' },
        { de: 'Wir tragen das, weil es schön ist.', ru: 'Мы носим это, потому что это красиво.', note: 'weil → глагол в конец' },
        { de: 'Sie macht das, damit alle glücklich sind.', ru: 'Она делает это, чтобы все были счастливы.', note: 'damit → глагол в конец' },
      ],
      question: {
        de: 'Warum trägt der Sprecher HipHop-Kleidung?',
        ru: 'Почему говорящий носит хип-хоп одежду?',
        options: [
          { de: 'Er ist ein großer HipHop-Fan', ru: 'Он большой фанат хип-хопа' },
          { de: 'Er möchte anderen gefallen', ru: 'Он хочет нравиться другим' },
          { de: 'Er findet die Mode bequem', ru: 'Он считает эту моду удобной' },
        ],
        correct: 2,
        explanation: 'Говорящий объясняет: "eigentlich bin ich gar kein HipHop Fan", "alles ist weit und bequem" и "weil ich mich gut darin fühle".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Stadt Bremen',
      type: 'объявление',
      text: 'Die Stadt Bremen organisiert im August Sprachreisen für Schülerinnen und Schüler schon ab 14 Jahren. Wenn du interessiert bist, kannst du zwischen 8 Uhr und 12:30 Uhr im Rathaus unter der Nummer 030 25 25 25 anrufen. Dann bekommen deine Eltern mit der Post oder per E-Mail genauere Informationen zugeschickt.',
      sentenceTranslations: {
        'Die Stadt Bremen organisiert im August Sprachreisen für Schülerinnen und Schüler schon ab 14 Jahren.': { literal: 'Город Бремен организует в августе языковые поездки для учениц и учеников уже с 14 лет', literary: 'Город Бремен организует в августе языковые поездки для школьников от 14 лет.' },
        'Wenn du interessiert bist, kannst du zwischen 8 Uhr und 12:30 Uhr im Rathaus unter der Nummer 030 25 25 25 anrufen.': { literal: 'Если ты заинтересован есть, можешь ты между 8 часов и 12:30 часов в ратуше под номером 030 25 25 25 позвонить', literary: 'Если тебе интересно, можешь позвонить в мэрию между 8:00 и 12:30 по номеру 030 25 25 25.' },
        'Dann bekommen deine Eltern mit der Post oder per E-Mail genauere Informationen zugeschickt.': { literal: 'Тогда получают твои родители почтой или через электронную почту более точные информации присланными', literary: 'Тогда твои родители получат по почте или электронной почте подробную информацию.' },
      },
      vocabulary: [
        { de: 'die Sprachreise', plural: 'die Sprachreisen', ru: 'языковая поездка', gender: 'feminin', collocation: 'Sprachreisen organisieren', example: 'Die Stadt Bremen organisiert im August Sprachreisen.' },
        { de: 'der Schüler', plural: 'die Schüler', ru: 'ученик', gender: 'maskulin', collocation: 'für Schüler', example: 'Sprachreisen für Schülerinnen und Schüler schon ab 14 Jahren.' },
        { de: 'das Rathaus', plural: 'die Rathäuser', ru: 'ратуша, мэрия', gender: 'neutrum', collocation: 'im Rathaus anrufen', example: 'Kannst du im Rathaus unter der Nummer 030 25 25 25 anrufen.' },
        { de: 'die Information', plural: 'die Informationen', ru: 'информация', gender: 'feminin', collocation: 'genauere Informationen', example: 'Dann bekommen deine Eltern genauere Informationen zugeschickt.' },
        { de: 'organisieren', ru: 'организовывать', type: 'verb', forms: 'organisiert, organisierte, hat organisiert', example: 'Die Stadt Bremen organisiert im August Sprachreisen.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Kannst du im Rathaus anrufen.' },
        { de: 'interessiert', ru: 'заинтересованный', type: 'adj', example: 'Wenn du interessiert bist.' },
      ],
      practiceSentences: [
        { de: 'Die Schule organisiert einen Ausflug.', ru: 'Школа организует экскурсию.', note: 'V2' },
        { de: 'Wenn du Zeit hast, komm zu mir.', ru: 'Если у тебя есть время, приходи ко мне.', note: 'wenn → конец, главное V1' },
        { de: 'Du kannst mich morgen anrufen.', ru: 'Ты можешь мне завтра позвонить.', note: 'модальный + инфинитив в конце' },
        { de: 'Wir bekommen die Tickets geschickt.', ru: 'Нам присылают билеты.', note: 'bekommen + Partizip II' },
        { de: 'Sie arbeitet zwischen 9 und 17 Uhr.', ru: 'Она работает с 9 до 17 часов.', note: 'V2' },
      ],
      question: {
        de: 'Für wen organisiert Bremen Sprachreisen?',
        ru: 'Для кого Бремен организует языковые поездки?',
        options: [
          { de: 'Für Schüler ab 14 Jahren', ru: 'Для школьников от 14 лет' },
          { de: 'Für Eltern und Kinder', ru: 'Для родителей и детей' },
          { de: 'Für Studenten', ru: 'Для студентов' },
        ],
        correct: 0,
        explanation: 'В объявлении сказано: "Sprachreisen für Schülerinnen und Schüler schon ab 14 Jahren".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Onkel Jakob',
      type: 'сообщение',
      text: 'Hallo Onkel Jakob, danke für das tolle Geschenk. Genau diese Fahrradtasche wollte ich haben. In die passen endlich alle meine Schulbücher und ich kann sie ohne Probleme in die Schule mitnehmen. Die ist viel besser als mein alter Schulrucksack. Ich rufe dich bald wieder an, danke nochmals, tschüss.',
      sentenceTranslations: {
        'Hallo Onkel Jakob, danke für das tolle Geschenk.': { literal: 'Привет дядя Якоб, спасибо за классный подарок', literary: 'Привет, дядя Якоб, спасибо за отличный подарок.' },
        'Genau diese Fahrradtasche wollte ich haben.': { literal: 'Именно эту велосумку хотел я иметь', literary: 'Именно такую велосумку я и хотел.' },
        'In die passen endlich alle meine Schulbücher und ich kann sie ohne Probleme in die Schule mitnehmen.': { literal: 'В неё помещаются наконец все мои школьные книги и я могу её без проблем в школу взять_с_собой', literary: 'В неё наконец помещаются все мои учебники, и я могу без проблем брать её в школу.' },
        'Die ist viel besser als mein alter Schulrucksack.': { literal: 'Она есть намного лучше чем мой старый школьный рюкзак', literary: 'Она намного лучше моего старого школьного рюкзака.' },
        'Ich rufe dich bald wieder an, danke nochmals, tschüss.': { literal: 'Я звоню тебе скоро снова, спасибо ещё раз, пока', literary: 'Я скоро снова тебе позвоню, ещё раз спасибо, пока.' },
      },
      vocabulary: [
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'tolles Geschenk', example: 'Danke für das tolle Geschenk.' },
        { de: 'die Fahrradtasche', plural: 'die Fahrradtaschen', ru: 'велосумка', gender: 'feminin', collocation: 'Fahrradtasche haben', example: 'Genau diese Fahrradtasche wollte ich haben.' },
        { de: 'das Schulbuch', plural: 'die Schulbücher', ru: 'учебник', gender: 'neutrum', collocation: 'alle Schulbücher', example: 'In die passen endlich alle meine Schulbücher.' },
        { de: 'der Schulrucksack', plural: 'die Schulrucksäcke', ru: 'школьный рюкзак', gender: 'maskulin', collocation: 'alter Schulrucksack', example: 'Die ist viel besser als mein alter Schulrucksack.' },
        { de: 'passen', ru: 'помещаться, подходить', type: 'verb', forms: 'passt, passte, hat gepasst', example: 'In die passen endlich alle meine Schulbücher.' },
        { de: 'mitnehmen', ru: 'брать с собой', type: 'verb', forms: 'nimmt mit, nahm mit, hat mitgenommen', example: 'Ich kann sie ohne Probleme in die Schule mitnehmen.' },
      ],
      practiceSentences: [
        { de: 'Danke für deine Hilfe.', ru: 'Спасибо за твою помощь.', note: 'эллипсис (без глагола)' },
        { de: 'Diese Tasche wollte ich kaufen.', ru: 'Эту сумку я хотел купить.', note: 'модальный + инфинитив в конце' },
        { de: 'In den Koffer passt alles.', ru: 'В чемодан всё помещается.', note: 'V2' },
        { de: 'Er nimmt das Buch mit.', ru: 'Он берёт книгу с собой.', note: 'отделяемая приставка' },
        { de: 'Mein Fahrrad ist besser als deins.', ru: 'Мой велосипед лучше твоего.', note: 'V2' },
      ],
      question: {
        de: 'Was hat der Sprecher bekommen?',
        ru: 'Что получил говорящий?',
        options: [
          { de: 'Einen Schulrucksack', ru: 'Школьный рюкзак' },
          { de: 'Eine Fahrradtasche', ru: 'Велосумку' },
          { de: 'Schulbücher', ru: 'Учебники' },
        ],
        correct: 1,
        explanation: 'Говорящий благодарит: "danke für das tolle Geschenk, genau diese Fahrradtasche wollte ich haben".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Herr Schmidt',
      type: 'школьное объявление',
      text: 'Achtung, alle Schülerinnen und Schüler der Klassen 10 bis 13, die einen Ferienjob suchen, gehen bitte in die Bibliothek. Dort informiert euch Herr Schmidt über das Projekt Ferienjobs. Bitte kommt pünktlich und bringt was zum Schreiben mit. Ende der Durchsage.',
      sentenceTranslations: {
        'Achtung, alle Schülerinnen und Schüler der Klassen 10 bis 13, die einen Ferienjob suchen, gehen bitte in die Bibliothek.': { literal: 'Внимание, все ученицы и ученики классов 10 до 13, которые работу_на_каникулах ищут, идите пожалуйста в библиотеку', literary: 'Внимание, все ученики 10-13 классов, которые ищут работу на каникулах, пожалуйста, идите в библиотеку.' },
        'Dort informiert euch Herr Schmidt über das Projekt Ferienjobs.': { literal: 'Там информирует вас господин Шмидт о проекте работа_на_каникулах', literary: 'Там господин Шмидт расскажет вам о проекте «Работа на каникулах».' },
        'Bitte kommt pünktlich und bringt was zum Schreiben mit.': { literal: 'Пожалуйста приходите пунктуально и приносите что для писания с_собой', literary: 'Пожалуйста, приходите вовремя и принесите с собой ручку и бумагу.' },
        'Ende der Durchsage.': { literal: 'Конец объявления', literary: 'Конец объявления.' },
      },
      vocabulary: [
        { de: 'die Klasse', plural: 'die Klassen', ru: 'класс', gender: 'feminin', collocation: 'der Klassen 10 bis 13', example: 'Alle Schülerinnen und Schüler der Klassen 10 bis 13.' },
        { de: 'der Ferienjob', plural: 'die Ferienjobs', ru: 'работа на каникулах', gender: 'maskulin', collocation: 'einen Ferienjob suchen', example: 'Die einen Ferienjob suchen.' },
        { de: 'die Bibliothek', plural: 'die Bibliotheken', ru: 'библиотека', gender: 'feminin', collocation: 'in die Bibliothek gehen', example: 'Gehen bitte in die Bibliothek.' },
        { de: 'die Durchsage', plural: 'die Durchsagen', ru: 'объявление', gender: 'feminin', collocation: 'Ende der Durchsage', example: 'Ende der Durchsage.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Die einen Ferienjob suchen.' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Bringt was zum Schreiben mit.' },
        { de: 'pünktlich', ru: 'вовремя, пунктуально', type: 'adj', example: 'Bitte kommt pünktlich.' },
      ],
      practiceSentences: [
        { de: 'Die Schüler, die Deutsch lernen, kommen hierher.', ru: 'Ученики, которые учат немецкий, приходят сюда.', note: 'die → глагол в конец' },
        { de: 'Geht bitte nach Hause.', ru: 'Идите, пожалуйста, домой.', note: 'императив множ. числа' },
        { de: 'Der Lehrer informiert uns über die Prüfung.', ru: 'Учитель информирует нас об экзамене.', note: 'V2' },
        { de: 'Kommt pünktlich zum Unterricht.', ru: 'Приходите вовремя на урок.', note: 'императив' },
        { de: 'Bringt eure Bücher mit.', ru: 'Принесите свои книги с собой.', note: 'императив, отделяемая приставка' },
      ],
      question: {
        de: 'Wo findet die Information über Ferienjobs statt?',
        ru: 'Где проходит информирование о работе на каникулах?',
        options: [
          { de: 'Im Klassenzimmer', ru: 'В классе' },
          { de: 'In der Bibliothek', ru: 'В библиотеке' },
          { de: 'Im Sekretariat', ru: 'В секретариате' },
        ],
        correct: 1,
        explanation: 'В объявлении говорится: "gehen bitte in die Bibliothek, dort informiert euch Herr Schmidt".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Freunde',
      type: 'диалог',
      text: 'Hallo Mario, lange nicht mehr gesehen, wie geht es dir? Gut, ich hatte in letzter Zeit auch viel zu tun. Habe mein Studium abgeschlossen und viele Bewerbungen geschrieben. Und seit August arbeite ich in einer Schule. Glückwunsch! Sag mal, hast du wieder was von Thomas gehört? Er arbeitet jetzt dort in einem Hotel als Reiseführer. Er hat sein Hobby zum Beruf gemacht. Wow, dann sehen wir ihn wohl nicht mehr so schnell wieder. Und Elena, ist sie noch Journalistin für die Zeitung? Sie hat gekündigt, denn Elena schreibt jetzt ein eigenes Buch und braucht dafür viel Zeit. Dann wird sie ja vielleicht bald berühmt, wie Lukas. Ich fahre morgen zu Elif, ich helfe ihr mit den Speisekarten. Sie eröffnet bald ihr eigenes Café in Kreuzberg. Da hat es bestimmt geholfen, dass sie früher bei der Bank gearbeitet hat. Sie arbeitet weiter in der Bäckerei und backt den Kuchen für Elifs Café. Aufregend, wie schnell sich alles ändert.',
      sentenceTranslations: {
        'Hallo Mario, lange nicht mehr gesehen, wie geht es dir?': { literal: 'Привет Марио, долго не больше видел, как идёт оно тебе?', literary: 'Привет, Марио, давно не виделись, как дела?' },
        'Gut, ich hatte in letzter Zeit auch viel zu tun.': { literal: 'Хорошо, я имел в последнее время тоже много делать', literary: 'Хорошо, у меня тоже было много дел в последнее время.' },
        'Habe mein Studium abgeschlossen und viele Bewerbungen geschrieben.': { literal: 'Имею моё обучение закончил и много заявлений написал', literary: 'Закончил учёбу и написал много заявлений.' },
        'Und seit August arbeite ich in einer Schule.': { literal: 'И с августа работаю я в школе', literary: 'И с августа я работаю в школе.' },
        'Glückwunsch!': { literal: 'Поздравление!', literary: 'Поздравляю!' },
        'Sag mal, hast du wieder was von Thomas gehört?': { literal: 'Скажи-ка, имеешь ты снова что от Томаса слышал?', literary: 'Скажи, ты что-нибудь слышал о Томасе?' },
        'Er arbeitet jetzt dort in einem Hotel als Reiseführer.': { literal: 'Он работает сейчас там в отеле как гид', literary: 'Он сейчас работает там в отеле гидом.' },
        'Er hat sein Hobby zum Beruf gemacht.': { literal: 'Он имеет своё хобби к профессии сделал', literary: 'Он превратил своё хобби в профессию.' },
        'Wow, dann sehen wir ihn wohl nicht mehr so schnell wieder.': { literal: 'Вау, тогда видим мы его наверное не больше так быстро снова', literary: 'Вау, тогда мы его нескоро снова увидим.' },
        'Und Elena, ist sie noch Journalistin für die Zeitung?': { literal: 'И Елена, есть она ещё журналистка для газеты?', literary: 'А Елена, она ещё журналистка в газете?' },
        'Sie hat gekündigt, denn Elena schreibt jetzt ein eigenes Buch und braucht dafür viel Zeit.': { literal: 'Она имеет уволилась, ибо Елена пишет сейчас собственную книгу и нуждается для_этого много времени', literary: 'Она уволилась, потому что Елена сейчас пишет собственную книгу и ей нужно много времени.' },
        'Dann wird sie ja vielleicht bald berühmt, wie Lukas.': { literal: 'Тогда станет она же может_быть скоро знаменитой, как Лукас', literary: 'Тогда она, может быть, скоро станет знаменитой, как Лукас.' },
        'Ich fahre morgen zu Elif, ich helfe ihr mit den Speisekarten.': { literal: 'Я еду завтра к Элиф, я помогаю ей с меню', literary: 'Я завтра еду к Элиф, помогу ей с меню.' },
        'Sie eröffnet bald ihr eigenes Café in Kreuzberg.': { literal: 'Она открывает скоро своё собственное кафе в Кройцберге', literary: 'Она скоро открывает собственное кафе в Кройцберге.' },
        'Da hat es bestimmt geholfen, dass sie früher bei der Bank gearbeitet hat.': { literal: 'Тут имеет оно определённо помогло, что она раньше при банке работала', literary: 'Тут наверняка помогло, что она раньше работала в банке.' },
        'Sie arbeitet weiter in der Bäckerei und backt den Kuchen für Elifs Café.': { literal: 'Она работает дальше в пекарне и печёт торт для кафе Элиф', literary: 'Она продолжает работать в пекарне и печёт торты для кафе Элиф.' },
        'Aufregend, wie schnell sich alles ändert.': { literal: 'Захватывающе, как быстро себя всё меняет', literary: 'Удивительно, как быстро всё меняется.' },
      },
      vocabulary: [
        { de: 'das Studium', ru: 'учёба в вузе', gender: 'neutrum', collocation: 'Studium abschließen', example: 'Habe mein Studium abgeschlossen.' },
        { de: 'die Bewerbung', plural: 'die Bewerbungen', ru: 'заявление о приёме', gender: 'feminin', collocation: 'Bewerbungen schreiben', example: 'Viele Bewerbungen geschrieben.' },
        { de: 'der Reiseführer', plural: 'die Reiseführer', ru: 'гид', gender: 'maskulin', collocation: 'als Reiseführer arbeiten', example: 'Er arbeitet jetzt dort in einem Hotel als Reiseführer.' },
        { de: 'der Beruf', plural: 'die Berufe', ru: 'профессия', gender: 'maskulin', collocation: 'zum Beruf machen', example: 'Er hat sein Hobby zum Beruf gemacht.' },
        { de: 'die Zeitung', plural: 'die Zeitungen', ru: 'газета', gender: 'feminin', collocation: 'für die Zeitung arbeiten', example: 'Ist sie noch Journalistin für die Zeitung?' },
        { de: 'die Speisekarte', plural: 'die Speisekarten', ru: 'меню', gender: 'feminin', collocation: 'mit den Speisekarten helfen', example: 'Ich helfe ihr mit den Speisekarten.' },
        { de: 'die Bäckerei', plural: 'die Bäckereien', ru: 'пекарня', gender: 'feminin', collocation: 'in der Bäckerei arbeiten', example: 'Sie arbeitet weiter in der Bäckerei.' },
        { de: 'der Kuchen', plural: 'die Kuchen', ru: 'торт, пирог', gender: 'maskulin', collocation: 'Kuchen backen', example: 'Sie backt den Kuchen für Elifs Café.' },
        { de: 'abschließen', ru: 'заканчивать', type: 'verb', forms: 'schließt ab, schloss ab, hat abgeschlossen', example: 'Habe mein Studium abgeschlossen.' },
        { de: 'kündigen', ru: 'увольняться', type: 'verb', forms: 'kündigt, kündigte, hat gekündigt', example: 'Sie hat gekündigt.' },
        { de: 'eröffnen', ru: 'открывать (заведение)', type: 'verb', forms: 'eröffnet, eröffnete, hat eröffnet', example: 'Sie eröffnet bald ihr eigenes Café in Kreuzberg.' },
        { de: 'backen', ru: 'печь', type: 'verb', forms: 'bäckt, backte, hat gebacken', example: 'Sie backt den Kuchen für Elifs Café.' },
        { de: 'berühmt', ru: 'знаменитый', type: 'adj', example: 'Dann wird sie ja vielleicht bald berühmt.' },
      ],
      practiceSentences: [
        { de: 'Ich habe viel zu lernen.', ru: 'У меня много учёбы.', note: 'haben + zu + Infinitiv' },
        { de: 'Seit Mai wohne ich hier.', ru: 'С мая я здесь живу.', note: 'seit → V2 инверсия' },
        { de: 'Er arbeitet als Lehrer.', ru: 'Он работает учителем.', note: 'V2' },
        { de: 'Sie hat es geschafft.', ru: 'Она смогла, добилась успеха.', note: 'V2, Perfekt' },
        { de: 'Das Geschäft eröffnet morgen.', ru: 'Магазин открывается завтра.', note: 'V2' },
      ],
      question: {
        de: 'Was macht Thomas jetzt?',
        ru: 'Что сейчас делает Томас?',
        options: [
          { de: 'Er studiert in Mexiko', ru: 'Он учится в Мексике' },
          { de: 'Er arbeitet als Reiseführer in Mexiko', ru: 'Он работает гидом в Мексике' },
          { de: 'Er ist aus Mexiko zurückgekommen', ru: 'Он вернулся из Мексики' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "er arbeitet jetzt dort in einem Hotel als Reiseführer".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Obstladen',
      type: 'диалог в магазине',
      text: 'Guten Tag, ich hätte gern 1 Kilo Äpfel und fünf Bananen. Haben Sie noch einen Wunsch? Wir haben Birnen, das Kilo wie auch die Äpfel nur für 1,50 Euro. Gut, dann auch noch 1 Kilo Birnen. Das macht zusammen 4,90 Euro. Oh, ich sehe gerade, ich habe nur 3 Euro dabei. Wie teuer sind die Bananen? 2 Euro. Dann geben Sie mir nur die Äpfel und die Birnen.',
      sentenceTranslations: {
        'Guten Tag, ich hätte gern 1 Kilo Äpfel und fünf Bananen.': { literal: 'Добрый день, я имел_бы охотно 1 килограмм яблок и пять бананов', literary: 'Добрый день, я бы хотел килограмм яблок и пять бананов.' },
        'Haben Sie noch einen Wunsch?': { literal: 'Имеете Вы ещё одно желание?', literary: 'Что-нибудь ещё?' },
        'Wir haben Birnen, das Kilo wie auch die Äpfel nur für 1,50 Euro.': { literal: 'Мы имеем груши, килограмм как также яблоки только за 1,50 евро', literary: 'У нас есть груши, килограмм, как и яблоки, всего за 1,50 евро.' },
        'Gut, dann auch noch 1 Kilo Birnen.': { literal: 'Хорошо, тогда также ещё 1 килограмм груш', literary: 'Хорошо, тогда ещё килограмм груш.' },
        'Das macht zusammen 4,90 Euro.': { literal: 'Это делает вместе 4,90 евро', literary: 'Всего 4,90 евро.' },
        'Oh, ich sehe gerade, ich habe nur 3 Euro dabei.': { literal: 'О, я вижу прямо, я имею только 3 евро при_себе', literary: 'Ой, я вижу, у меня только 3 евро с собой.' },
        'Wie teuer sind die Bananen?': { literal: 'Как дорого есть бананы?', literary: 'Сколько стоят бананы?' },
        '2 Euro.': { literal: '2 евро', literary: '2 евро.' },
        'Dann geben Sie mir nur die Äpfel und die Birnen.': { literal: 'Тогда дайте Вы мне только яблоки и груши', literary: 'Тогда дайте мне только яблоки и груши.' },
      },
      vocabulary: [
        { de: 'der Apfel', plural: 'die Äpfel', ru: 'яблоко', gender: 'maskulin', collocation: '1 Kilo Äpfel', example: 'Ich hätte gern 1 Kilo Äpfel.' },
        { de: 'die Banane', plural: 'die Bananen', ru: 'банан', gender: 'feminin', collocation: 'fünf Bananen', example: 'Ich hätte gern 1 Kilo Äpfel und fünf Bananen.' },
        { de: 'die Birne', plural: 'die Birnen', ru: 'груша', gender: 'feminin', collocation: '1 Kilo Birnen', example: 'Wir haben Birnen, das Kilo wie auch die Äpfel nur für 1,50 Euro.' },
        { de: 'der Wunsch', plural: 'die Wünsche', ru: 'желание, пожелание', gender: 'maskulin', collocation: 'noch einen Wunsch', example: 'Haben Sie noch einen Wunsch?' },
        { de: 'das Kilo', plural: 'die Kilos', ru: 'килограмм', gender: 'neutrum', collocation: '1 Kilo Äpfel', example: 'Guten Tag, ich hätte gern 1 Kilo Äpfel.' },
        { de: 'teuer', ru: 'дорогой', type: 'adj', example: 'Wie teuer sind die Bananen?' },
        { de: 'gerade', ru: 'как раз, только что', type: 'adv', example: 'Oh, ich sehe gerade, ich habe nur 3 Euro dabei.' },
      ],
      practiceSentences: [
        { de: 'Ich hätte gern einen Kaffee.', ru: 'Я бы хотел кофе.', note: 'Konjunktiv II' },
        { de: 'Das macht 10 Euro.', ru: 'Это будет 10 евро.', note: 'V2' },
        { de: 'Haben Sie Geld dabei?', ru: 'У вас есть деньги с собой?', note: 'вопрос V1' },
        { de: 'Ich sehe, du bist müde.', ru: 'Я вижу, ты устал.', note: 'V2 + придаточное' },
        { de: 'Geben Sie mir bitte zwei Äpfel.', ru: 'Дайте мне, пожалуйста, два яблока.', note: 'императив' },
      ],
      question: {
        de: 'Was kauft der Kunde am Ende?',
        ru: 'Что покупает клиент в итоге?',
        options: [
          { de: 'Äpfel und Bananen', ru: 'Яблоки и бананы' },
          { de: 'Nur Birnen', ru: 'Только груши' },
          { de: 'Äpfel und Birnen', ru: 'Яблоки и груши' },
        ],
        correct: 2,
        explanation: 'Клиент говорит в конце: "dann geben Sie mir nur die Äpfel und die Birnen" (у него только 3 евро).'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Restaurant',
      type: 'диалог в ресторане',
      text: 'Guten Tag, haben Sie schon gewählt? Was können Sie empfehlen? Haben Sie frischen Fisch? Nein, heute leider nicht. Aber wir haben eine sehr gute Fischsuppe und vielleicht einen Salat. Die Fischsuppe nehme ich gern, aber bitte keinen Salat.',
      sentenceTranslations: {
        'Guten Tag, haben Sie schon gewählt?': { literal: 'Добрый день, имеете Вы уже выбрали?', literary: 'Добрый день, вы уже выбрали?' },
        'Was können Sie empfehlen?': { literal: 'Что можете Вы рекомендовать?', literary: 'Что вы можете порекомендовать?' },
        'Haben Sie frischen Fisch?': { literal: 'Имеете Вы свежую рыбу?', literary: 'У вас есть свежая рыба?' },
        'Nein, heute leider nicht.': { literal: 'Нет, сегодня к_сожалению нет', literary: 'Нет, к сожалению, сегодня нет.' },
        'Aber wir haben eine sehr gute Fischsuppe und vielleicht einen Salat.': { literal: 'Но мы имеем очень хороший рыбный_суп и возможно один салат', literary: 'Но у нас есть очень хороший рыбный суп и, может быть, салат.' },
        'Die Fischsuppe nehme ich gern, aber bitte keinen Salat.': { literal: 'Рыбный_суп возьму я охотно, но пожалуйста никакого салата', literary: 'Рыбный суп я возьму с удовольствием, но салат не нужен.' },
      },
      vocabulary: [
        { de: 'der Fisch', plural: 'die Fische', ru: 'рыба', gender: 'maskulin', collocation: 'frischen Fisch haben', example: 'Haben Sie frischen Fisch?' },
        { de: 'die Fischsuppe', plural: 'die Fischsuppen', ru: 'рыбный суп', gender: 'feminin', collocation: 'gute Fischsuppe', example: 'Wir haben eine sehr gute Fischsuppe.' },
        { de: 'der Salat', plural: 'die Salate', ru: 'салат', gender: 'maskulin', collocation: 'einen Salat bestellen', example: 'Vielleicht einen Salat.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Was können Sie empfehlen?' },
        { de: 'wählen', ru: 'выбирать', type: 'verb', forms: 'wählt, wählte, hat gewählt', example: 'Haben Sie schon gewählt?' },
        { de: 'frisch', ru: 'свежий', type: 'adj', example: 'Haben Sie frischen Fisch?' },
        { de: 'leider', ru: 'к сожалению', type: 'adv', example: 'Nein, heute leider nicht.' },
      ],
      practiceSentences: [
        { de: 'Haben Sie schon bestellt?', ru: 'Вы уже заказали?', note: 'Perfekt вопрос' },
        { de: 'Was können Sie mir zeigen?', ru: 'Что вы можете мне показать?', note: 'модальный + инфинитив' },
        { de: 'Ich nehme die Suppe.', ru: 'Я возьму суп.', note: 'V2' },
        { de: 'Wir haben heute kein Brot.', ru: 'У нас сегодня нет хлеба.', note: 'V2' },
        { de: 'Den Salat esse ich gern.', ru: 'Салат я ем с удовольствием.', note: 'топикализация, V2' },
      ],
      question: {
        de: 'Was bestellt der Gast?',
        ru: 'Что заказывает гость?',
        options: [
          { de: 'Frischen Fisch', ru: 'Свежую рыбу' },
          { de: 'Fischsuppe und Salat', ru: 'Рыбный суп и салат' },
          { de: 'Nur Fischsuppe', ru: 'Только рыбный суп' },
        ],
        correct: 2,
        explanation: 'Гость говорит: "die Fischsuppe nehme ich gern, aber bitte keinen Salat".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Eva',
      type: 'диалог о планах',
      text: 'Sag mal Eva, was machst du heute Abend? Wollen wir einen Film sehen? Nein, ich muss arbeiten. Ich muss für die Prüfung lernen. Und wollen wir später etwas trinken gehen? Es gibt hier an der Ecke ein neues Café. Nein, tut mir leid, lieber am Sonntag. Dann habe ich Zeit.',
      sentenceTranslations: {
        'Sag mal Eva, was machst du heute Abend?': { literal: 'Скажи-ка Эва, что делаешь ты сегодня вечером?', literary: 'Скажи, Эва, что ты делаешь сегодня вечером?' },
        'Wollen wir einen Film sehen?': { literal: 'Хотим мы один фильм посмотреть?', literary: 'Хочешь посмотреть фильм?' },
        'Nein, ich muss arbeiten.': { literal: 'Нет, я должна работать', literary: 'Нет, мне нужно работать.' },
        'Ich muss für die Prüfung lernen.': { literal: 'Я должна для экзамена учить', literary: 'Мне нужно готовиться к экзамену.' },
        'Und wollen wir später etwas trinken gehen?': { literal: 'И хотим мы позже что-то пить пойти?', literary: 'Может, попозже сходим выпить что-нибудь?' },
        'Es gibt hier an der Ecke ein neues Café.': { literal: 'Это даёт здесь на углу новое кафе', literary: 'Здесь на углу есть новое кафе.' },
        'Nein, tut mir leid, lieber am Sonntag.': { literal: 'Нет, делает мне жаль, лучше в воскресенье', literary: 'Нет, извини, лучше в воскресенье.' },
        'Dann habe ich Zeit.': { literal: 'Тогда имею я время', literary: 'Тогда у меня будет время.' },
      },
      vocabulary: [
        { de: 'der Film', plural: 'die Filme', ru: 'фильм', gender: 'maskulin', collocation: 'einen Film sehen', example: 'Wollen wir einen Film sehen?' },
        { de: 'die Prüfung', plural: 'die Prüfungen', ru: 'экзамен', gender: 'feminin', collocation: 'für die Prüfung lernen', example: 'Ich muss für die Prüfung lernen.' },
        { de: 'die Ecke', plural: 'die Ecken', ru: 'угол', gender: 'feminin', collocation: 'an der Ecke', example: 'Es gibt hier an der Ecke ein neues Café.' },
        { de: 'die Zeit', ru: 'время', gender: 'feminin', collocation: 'Zeit haben', example: 'Dann habe ich Zeit.' },
        { de: 'lernen', ru: 'учиться', type: 'verb', forms: 'lernt, lernte, hat gelernt', example: 'Ich muss für die Prüfung lernen.' },
        { de: 'später', ru: 'позже', type: 'adv', example: 'Wollen wir später etwas trinken gehen?' },
      ],
      practiceSentences: [
        { de: 'Was machst du morgen?', ru: 'Что ты делаешь завтра?', note: 'вопрос с was, V2' },
        { de: 'Wollen wir ins Kino gehen?', ru: 'Пойдём в кино?', note: 'модальный вопрос' },
        { de: 'Ich muss heute arbeiten.', ru: 'Мне нужно сегодня работать.', note: 'модальный + инфинитив' },
        { de: 'Es gibt hier einen Park.', ru: 'Здесь есть парк.', note: 'es gibt + Akk' },
        { de: 'Tut mir leid, ich kann nicht.', ru: 'Извини, я не могу.', note: 'leid tun, модальный' },
      ],
      question: {
        de: 'Wann hat Eva Zeit?',
        ru: 'Когда у Евы есть время?',
        options: [
          { de: 'Heute Abend', ru: 'Сегодня вечером' },
          { de: 'Später am Abend', ru: 'Позже вечером' },
          { de: 'Am Sonntag', ru: 'В воскресенье' },
        ],
        correct: 2,
        explanation: 'Ева отвечает: "nein, tut mir leid, lieber am Sonntag, dann habe ich Zeit".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Julia',
      type: 'диалог о покупках',
      text: 'Julia, ich gehe schnell einkaufen. Was möchtest du zum Frühstück? Frische Brötchen. Soll ich auch Eier und Käse kaufen? Nein, Käse mag ich nicht. Und Eier haben wir noch im Kühlschrank. Aber vielleicht kannst du etwas Wurst einkaufen. Das wäre super. Gut, dann gehe ich zum Supermarkt.',
      sentenceTranslations: {
        'Julia, ich gehe schnell einkaufen.': { literal: 'Юлия, я иду быстро за_покупками', literary: 'Юлия, я быстро схожу в магазин.' },
        'Was möchtest du zum Frühstück?': { literal: 'Что хотела_бы ты к завтраку?', literary: 'Что ты хочешь на завтрак?' },
        'Frische Brötchen.': { literal: 'Свежие булочки', literary: 'Свежие булочки.' },
        'Soll ich auch Eier und Käse kaufen?': { literal: 'Должен я также яйца и сыр купить?', literary: 'Мне купить ещё яйца и сыр?' },
        'Nein, Käse mag ich nicht.': { literal: 'Нет, сыр люблю я не', literary: 'Нет, я не люблю сыр.' },
        'Und Eier haben wir noch im Kühlschrank.': { literal: 'И яйца имеем мы ещё в холодильнике', literary: 'А яйца у нас ещё есть в холодильнике.' },
        'Aber vielleicht kannst du etwas Wurst einkaufen.': { literal: 'Но может_быть можешь ты немного колбасы купить', literary: 'Но может, купишь немного колбасы.' },
        'Das wäre super.': { literal: 'Это было_бы супер', literary: 'Это было бы отлично.' },
        'Gut, dann gehe ich zum Supermarkt.': { literal: 'Хорошо, тогда иду я к супермаркету', literary: 'Хорошо, тогда иду в супермаркет.' },
      },
      vocabulary: [
        { de: 'das Frühstück', plural: 'die Frühstücke', ru: 'завтрак', gender: 'neutrum', collocation: 'zum Frühstück', example: 'Was möchtest du zum Frühstück?' },
        { de: 'das Brötchen', plural: 'die Brötchen', ru: 'булочка', gender: 'neutrum', collocation: 'frische Brötchen', example: 'Frische Brötchen.' },
        { de: 'die Wurst', plural: 'die Würste', ru: 'колбаса', gender: 'feminin', collocation: 'etwas Wurst', example: 'Vielleicht kannst du etwas Wurst einkaufen.' },
        { de: 'der Kühlschrank', plural: 'die Kühlschränke', ru: 'холодильник', gender: 'maskulin', collocation: 'im Kühlschrank', example: 'Eier haben wir noch im Kühlschrank.' },
        { de: 'der Supermarkt', plural: 'die Supermärkte', ru: 'супермаркет', gender: 'maskulin', collocation: 'zum Supermarkt gehen', example: 'Gut, dann gehe ich zum Supermarkt.' },
        { de: 'einkaufen', ru: 'делать покупки', type: 'verb', forms: 'kauft ein, kaufte ein, hat eingekauft', example: 'Julia, ich gehe schnell einkaufen.' },
        { de: 'schnell', ru: 'быстро', type: 'adv', example: 'Ich gehe schnell einkaufen.' },
      ],
      practiceSentences: [
        { de: 'Ich gehe schwimmen.', ru: 'Я иду плавать.', note: 'gehen + инфинитив' },
        { de: 'Was möchtest du essen?', ru: 'Что ты хочешь есть?', note: 'Konjunktiv II вопрос' },
        { de: 'Soll ich dir helfen?', ru: 'Мне тебе помочь?', note: 'модальный вопрос' },
        { de: 'Milch haben wir noch.', ru: 'Молоко у нас ещё есть.', note: 'топикализация, V2' },
        { de: 'Das wäre schön.', ru: 'Это было бы хорошо.', note: 'Konjunktiv II' },
      ],
      question: {
        de: 'Was soll zum Frühstück gekauft werden?',
        ru: 'Что нужно купить к завтраку?',
        options: [
          { de: 'Brötchen und Käse', ru: 'Булочки и сыр' },
          { de: 'Brötchen und Wurst', ru: 'Булочки и колбасу' },
          { de: 'Eier und Wurst', ru: 'Яйца и колбасу' },
        ],
        correct: 1,
        explanation: 'Юлия просит "frische Brötchen" и "vielleicht kannst du etwas Wurst einkaufen".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Lena',
      type: 'диалог о школе',
      text: 'Welche Fächer magst du am liebsten, Lena? Englisch macht mir sehr viel Spaß. Leider ist unsere Lehrerin nicht so nett. Sie gibt sehr viele Hausaufgaben. Was ich wirklich gerne habe, ist Musik. Die Lehrerin ist nett und ich spiele auch gern zu Hause Gitarre. Und Kunst? Du hast doch letzten Monat ein so tolles Bild gemalt. Ja, aber ich habe eine schlechte Note bekommen und ich finde den Unterricht langweilig.',
      sentenceTranslations: {
        'Welche Fächer magst du am liebsten, Lena?': { literal: 'Какие предметы любишь ты больше_всего, Лена?', literary: 'Какие предметы тебе больше всего нравятся, Лена?' },
        'Englisch macht mir sehr viel Spaß.': { literal: 'Английский делает мне очень много веселья', literary: 'Английский мне очень нравится.' },
        'Leider ist unsere Lehrerin nicht so nett.': { literal: 'К_сожалению есть наша учительница не так мила', literary: 'К сожалению, наша учительница не очень добрая.' },
        'Sie gibt sehr viele Hausaufgaben.': { literal: 'Она даёт очень много домашних_заданий', literary: 'Она задаёт очень много домашних заданий.' },
        'Was ich wirklich gerne habe, ist Musik.': { literal: 'Что я действительно охотно имею есть музыка', literary: 'Что мне действительно нравится — это музыка.' },
        'Die Lehrerin ist nett und ich spiele auch gern zu Hause Gitarre.': { literal: 'Учительница есть мила и я играю также охотно дома гитару', literary: 'Учительница добрая, и я ещё дома с удовольствием играю на гитаре.' },
        'Und Kunst?': { literal: 'И искусство?', literary: 'А ИЗО?' },
        'Du hast doch letzten Monat ein so tolles Bild gemalt.': { literal: 'Ты имеешь ведь прошлый месяц такую классную картину нарисовал', literary: 'Ты же в прошлом месяце нарисовала такую классную картину.' },
        'Ja, aber ich habe eine schlechte Note bekommen und ich finde den Unterricht langweilig.': { literal: 'Да, но я имею плохую оценку получил и я нахожу урок скучным', literary: 'Да, но я получила плохую оценку, и мне урок кажется скучным.' },
      },
      vocabulary: [
        { de: 'das Fach', plural: 'die Fächer', ru: 'предмет (учебный)', gender: 'neutrum', collocation: 'welche Fächer', example: 'Welche Fächer magst du am liebsten, Lena?' },
        { de: 'die Lehrerin', plural: 'die Lehrerinnen', ru: 'учительница', gender: 'feminin', collocation: 'unsere Lehrerin', example: 'Leider ist unsere Lehrerin nicht so nett.' },
        { de: 'die Hausaufgabe', plural: 'die Hausaufgaben', ru: 'домашнее задание', gender: 'feminin', collocation: 'viele Hausaufgaben geben', example: 'Sie gibt sehr viele Hausaufgaben.' },
        { de: 'die Gitarre', plural: 'die Gitarren', ru: 'гитара', gender: 'feminin', collocation: 'Gitarre spielen', example: 'Ich spiele auch gern zu Hause Gitarre.' },
        { de: 'das Bild', plural: 'die Bilder', ru: 'картина', gender: 'neutrum', collocation: 'ein Bild malen', example: 'Du hast doch letzten Monat ein so tolles Bild gemalt.' },
        { de: 'die Note', plural: 'die Noten', ru: 'оценка', gender: 'feminin', collocation: 'schlechte Note bekommen', example: 'Ich habe eine schlechte Note bekommen.' },
        { de: 'der Unterricht', ru: 'урок, занятие', gender: 'maskulin', collocation: 'den Unterricht langweilig finden', example: 'Ich finde den Unterricht langweilig.' },
        { de: 'malen', ru: 'рисовать', type: 'verb', forms: 'malt, malte, hat gemalt', example: 'Du hast doch letzten Monat ein so tolles Bild gemalt.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Ich finde den Unterricht langweilig.' },
        { de: 'nett', ru: 'милый, добрый', type: 'adj', example: 'Leider ist unsere Lehrerin nicht so nett.' },
      ],
      practiceSentences: [
        { de: 'Welches Buch magst du?', ru: 'Какая книга тебе нравится?', note: 'вопрос V2' },
        { de: 'Sport macht mir Spaß.', ru: 'Спорт мне нравится.', note: 'V2, macht + Dativ' },
        { de: 'Der Lehrer gibt viele Aufgaben.', ru: 'Учитель задаёт много заданий.', note: 'V2' },
        { de: 'Ich spiele gern Klavier.', ru: 'Я с удовольствием играю на пианино.', note: 'V2' },
        { de: 'Sie hat gute Noten bekommen.', ru: 'Она получила хорошие оценки.', note: 'Perfekt' },
      ],
      question: {
        de: 'Welches Fach mag Lena wirklich gern?',
        ru: 'Какой предмет Лене действительно нравится?',
        options: [
          { de: 'Englisch', ru: 'Английский' },
          { de: 'Kunst', ru: 'ИЗО' },
          { de: 'Musik', ru: 'Музыка' },
        ],
        correct: 2,
        explanation: 'Лена говорит: "was ich wirklich gerne habe ist Musik, die Lehrerin ist nett und ich spiele auch gern zu Hause Gitarre".'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Katja Interview',
      type: 'интервью',
      text: 'Katja, Gratulation, du hast gewonnen! Du bist jetzt die beste Tennisspielerin in Heidelberg. Erzähl mal, wie hat das angefangen? Meine Mutter spielt schon lange Tennis und ich bin immer mit ihr zum Platz. Und seit fünf habe ich dann einen Tennislehrer bekommen. Und spielst du auch in der Schule Tennis? Nee, in der Schule spielen sie Volleyball, aber da mache ich nicht mit. Ich spiele Tennis beim TV Heidelberg Süd, viermal pro Woche, zwei Stunden lang. Außerdem laufe ich zweimal pro Woche 5 km. Wie sieht dein ganz normaler Tag so aus? Ich stehe morgens um 6 Uhr auf, frühstücke dann mit viel Obst, gehe zur Schule, esse mit Freunden zu Mittag und dann spiele ich Tennis, außer mittwochs. Nach dem Training holt mich meine Mama ab und wir essen alle zusammen. Thema Essen: darfst du denn alles essen, Pizza, Pommes, Eis? Ich versuche mich natürlich gesund zu ernähren, aber manchmal gehe ich schon mit Freunden eine Pizza essen, und auch mal ein Eis. Es ist alles erlaubt, nur nicht zu viel. Was machst du denn mit Freunden? Am Wochenende gehe ich mit Freunden ins Kino oder wir sind bei mir zu Hause und hören alle zusammen Musik. Und wenn das Wetter schön ist, gehen wir raus zum Inline-Skaten.',
      sentenceTranslations: {
        'Katja, Gratulation, du hast gewonnen!': { literal: 'Катя, поздравление, ты имеешь выиграла!', literary: 'Катя, поздравляю, ты выиграла!' },
        'Du bist jetzt die beste Tennisspielerin in Heidelberg.': { literal: 'Ты есть теперь лучшая теннисистка в Хайдельберге', literary: 'Ты теперь лучшая теннисистка Хайдельберга.' },
        'Erzähl mal, wie hat das angefangen?': { literal: 'Расскажи-ка, как имеет это началось?', literary: 'Расскажи, как всё началось?' },
        'Meine Mutter spielt schon lange Tennis und ich bin immer mit ihr zum Platz.': { literal: 'Моя мать играет уже долго теннис и я есть всегда с ней к корту', literary: 'Моя мама уже давно играет в теннис, и я всегда ходила с ней на корт.' },
        'Und seit fünf habe ich dann einen Tennislehrer bekommen.': { literal: 'И с пяти имею я тогда теннис-учителя получил', literary: 'А с пяти лет у меня появился тренер по теннису.' },
        'Und spielst du auch in der Schule Tennis?': { literal: 'И играешь ты также в школе теннис?', literary: 'А в школе ты тоже играешь в теннис?' },
        'Nee, in der Schule spielen sie Volleyball, aber da mache ich nicht mit.': { literal: 'Нее, в школе играют они волейбол, но тут делаю я не с', literary: 'Нет, в школе они играют в волейбол, но я не участвую.' },
        'Ich spiele Tennis beim TV Heidelberg Süd, viermal pro Woche, zwei Stunden lang.': { literal: 'Я играю теннис при ТВ Хайдельберг Юг, четырежды в неделю, два часа длинно', literary: 'Я играю в теннис в клубе TV Heidelberg Süd четыре раза в неделю по два часа.' },
        'Außerdem laufe ich zweimal pro Woche 5 km.': { literal: 'Кроме_того бегаю я дважды в неделю 5 км', literary: 'Кроме того, я бегаю дважды в неделю по 5 км.' },
        'Wie sieht dein ganz normaler Tag so aus?': { literal: 'Как выглядит твой совсем обычный день так?', literary: 'Как выглядит твой обычный день?' },
        'Ich stehe morgens um 6 Uhr auf, frühstücke dann mit viel Obst, gehe zur Schule, esse mit Freunden zu Mittag und dann spiele ich Tennis, außer mittwochs.': { literal: 'Я встаю утром в 6 часов, завтракаю затем с много фруктами, иду к школе, ем с друзьями в обед и тогда играю я теннис, кроме по_средам', literary: 'Я встаю утром в 6 часов, завтракаю с фруктами, иду в школу, обедаю с друзьями, а потом играю в теннис, кроме сред.' },
        'Nach dem Training holt mich meine Mama ab und wir essen alle zusammen.': { literal: 'После тренировки забирает меня моя мама и мы едим все вместе', literary: 'После тренировки мама забирает меня, и мы все вместе ужинаем.' },
        'Thema Essen: darfst du denn alles essen, Pizza, Pommes, Eis?': { literal: 'Тема еда: разрешено тебе же всё есть, пицца, картошка_фри, мороженое?', literary: 'Тема еда: тебе можно всё есть — пиццу, картошку фри, мороженое?' },
        'Ich versuche mich natürlich gesund zu ernähren, aber manchmal gehe ich schon mit Freunden eine Pizza essen, und auch mal ein Eis.': { literal: 'Я пытаюсь себя конечно здорово питать, но иногда иду я уже с друзьями пиццу есть, и также разок мороженое', literary: 'Я стараюсь, конечно, правильно питаться, но иногда хожу с друзьями есть пиццу, и мороженое тоже.' },
        'Es ist alles erlaubt, nur nicht zu viel.': { literal: 'Это есть всё разрешено, только не слишком много', literary: 'Можно всё, только не слишком много.' },
        'Was machst du denn mit Freunden?': { literal: 'Что делаешь ты же с друзьями?', literary: 'А что ты делаешь с друзьями?' },
        'Am Wochenende gehe ich mit Freunden ins Kino oder wir sind bei mir zu Hause und hören alle zusammen Musik.': { literal: 'В выходные иду я с друзьями в кино или мы есть у меня дома и слушаем все вместе музыку', literary: 'В выходные я хожу с друзьями в кино или мы сидим у меня дома и слушаем вместе музыку.' },
        'Und wenn das Wetter schön ist, gehen wir raus zum Inline-Skaten.': { literal: 'И когда погода красивая есть, идём мы наружу к инлайн-катанию', literary: 'А когда хорошая погода, мы идём кататься на роликах.' },
      },
      vocabulary: [
        { de: 'die Tennisspielerin', plural: 'die Tennisspielerinnen', ru: 'теннисистка', gender: 'feminin', collocation: 'beste Tennisspielerin', example: 'Du bist jetzt die beste Tennisspielerin in Heidelberg.' },
        { de: 'der Platz', plural: 'die Plätze', ru: 'корт, площадка', gender: 'maskulin', collocation: 'zum Platz gehen', example: 'Ich bin immer mit ihr zum Platz.' },
        { de: 'der Tennislehrer', plural: 'die Tennislehrer', ru: 'тренер по теннису', gender: 'maskulin', collocation: 'einen Tennislehrer bekommen', example: 'Seit fünf habe ich dann einen Tennislehrer bekommen.' },
        { de: 'das Training', plural: 'die Trainings', ru: 'тренировка', gender: 'neutrum', collocation: 'nach dem Training', example: 'Nach dem Training holt mich meine Mama ab.' },
        { de: 'das Obst', ru: 'фрукты', gender: 'neutrum', collocation: 'mit viel Obst', example: 'Frühstücke dann mit viel Obst.' },
        { de: 'das Kino', plural: 'die Kinos', ru: 'кинотеатр', gender: 'neutrum', collocation: 'ins Kino gehen', example: 'Am Wochenende gehe ich mit Freunden ins Kino.' },
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'am Wochenende', example: 'Am Wochenende gehe ich mit Freunden ins Kino.' },
        { de: 'anfangen', ru: 'начинаться', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Erzähl mal, wie hat das angefangen?' },
        { de: 'aufstehen', ru: 'вставать', type: 'verb', forms: 'steht auf, stand auf, ist aufgestanden', example: 'Ich stehe morgens um 6 Uhr auf.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Nach dem Training holt mich meine Mama ab.' },
        { de: 'sich ernähren', ru: 'питаться', type: 'verb', forms: 'ernährt sich, ernährte sich, hat sich ernährt', example: 'Ich versuche mich natürlich gesund zu ernähren.' },
        { de: 'laufen', ru: 'бегать', type: 'verb', forms: 'läuft, lief, ist gelaufen', example: 'Außerdem laufe ich zweimal pro Woche 5 km.' },
        { de: 'gesund', ru: 'здоровый', type: 'adj', example: 'Ich versuche mich gesund zu ernähren.' },
        { de: 'erlaubt', ru: 'разрешено', type: 'adj', example: 'Es ist alles erlaubt, nur nicht zu viel.' },
      ],
      practiceSentences: [
        { de: 'Der Unterricht fängt um 8 an.', ru: 'Урок начинается в 8.', note: 'отделяемая приставка' },
        { de: 'Ich stehe früh auf.', ru: 'Я встаю рано.', note: 'отделяемая приставка' },
        { de: 'Sie spielt zweimal pro Woche.', ru: 'Она играет два раза в неделю.', note: 'V2' },
        { de: 'Wir versuchen zu helfen.', ru: 'Мы пытаемся помочь.', note: 'versuchen + zu + Inf' },
        { de: 'Er ernährt sich vegetarisch.', ru: 'Он питается вегетариански.', note: 'возвратный глагол' },
      ],
      question: {
        de: 'Katjas Mutter spielt auch Tennis.',
        ru: 'Мама Кати тоже играет в теннис.',
        options: [
          { de: 'Ja', ru: 'Да' },
          { de: 'Nein', ru: 'Нет' },
        ],
        correct: 0,
        explanation: 'Катя говорит: "meine Mutter spielt schon lange Tennis".'
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табы «Перевод».',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Karina).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'dass-Nebensatz: глагол в конце — dass ich es nicht verstehe',
    'wie-Nebensatz: wie jemand nur eine bestimmte Musik hören kann',
    'damit-Nebensatz: damit ich den anderen gefalle',
    'weil-Nebensatz: weil ich mich gut darin fühle',
    'wenn-Nebensatz: wenn du interessiert bist',
    'Konjunktiv II: ich hätte gern, das wäre super',
    'Отделяемые приставки: anfangen, aufstehen, abholen, mitnehmen, mitbringen, einkaufen',
    'Модальные глаголы: möchte, muss, kann, soll, darf, will',
    'Perfekt с haben: hat gewonnen, hat angefangen, hat abgeschlossen',
    'sich + Verb: sich fühlen, sich ernähren',
    'halten für + Akk: halten mich für einen Fan',
    'es gibt + Akk: es gibt ein neues Café',
  ],
};

LESSONS.push(LESSON_30);
