/* ═══════════════════════════════════════════════════════════
   Lesson 17 — Goethe Zertifikat A2 Hören Modelltest 17
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_17 = {
  id: 'lesson-17',
  number: 17,
  title: 'Goethe A2 Hören — Modelltest 17',
  subtitle: 'Sonderangebote, Wetterbericht, Mensa, Zoo, Online-Apotheke, Büro im Schnee, Restaurant, Arzt, Aufzug, Filmabend, Möbelkauf, Ausbildung',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-17',
  videoUrl: 'https://www.youtube.com/watch?v=LA8qCfrSn5Y',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Sonderangebote',
      type: 'объявление в магазине',
      text: 'Liebe Kunden, bitte beachten Sie unsere Sonderangebote in der Sportabteilung. Auf Tennisschuhe und Laufschuhe gibt es heute einen Rabatt von 50%. Dieses Angebot gilt nur heute. Und denken Sie daran: morgen in der Zeit von 10 Uhr bis 12 Uhr gibt es in unserer Buchabteilung drei Krimis zu insgesamt 10 Euro. Am Montag haben wir dann Preisreduzierungen für Spielsachen. Wir freuen uns auf Ihren Besuch.',
      sentenceTranslations: {
        'Liebe Kunden, bitte beachten Sie unsere Sonderangebote in der Sportabteilung.': {
          literal: 'Дорогие клиенты, пожалуйста обратите-внимание вы наши специальные-предложения в спортивном-отделе',
          literary: 'Уважаемые покупатели, обратите внимание на наши специальные предложения в спортивном отделе.'
        },
        'Auf Tennisschuhe und Laufschuhe gibt es heute einen Rabatt von 50%.': {
          literal: 'На теннисные-туфли и беговые-туфли даёт оно сегодня скидку от 50%',
          literary: 'На теннисную и беговую обувь сегодня скидка 50%.'
        },
        'Dieses Angebot gilt nur heute.': {
          literal: 'Это предложение действует только сегодня',
          literary: 'Это предложение действует только сегодня.'
        },
        'Und denken Sie daran: morgen in der Zeit von 10 Uhr bis 12 Uhr gibt es in unserer Buchabteilung drei Krimis zu insgesamt 10 Euro.': {
          literal: 'И думайте вы об-этом: завтра во время от 10 часов до 12 часов даёт оно в нашем книжном-отделе три детектива к в-общем 10 евро',
          literary: 'И помните: завтра с 10 до 12 часов в нашем книжном отделе три детектива за 10 евро.'
        },
        'Am Montag haben wir dann Preisreduzierungen für Spielsachen.': {
          literal: 'В понедельник имеем мы тогда снижения-цен для игрушек',
          literary: 'В понедельник у нас будут снижены цены на игрушки.'
        },
        'Wir freuen uns auf Ihren Besuch.': {
          literal: 'Мы радуемся себя на ваш визит',
          literary: 'Мы рады вашему визиту.'
        },
      },
      vocabulary: [
        { de: 'der Kunde', plural: 'die Kunden', ru: 'клиент, покупатель', gender: 'maskulin', collocation: 'liebe Kunden', example: 'Liebe Kunden, bitte beachten Sie unsere Sonderangebote in der Sportabteilung.' },
        { de: 'das Sonderangebot', plural: 'die Sonderangebote', ru: 'спецпредложение', gender: 'neutrum', collocation: 'Sonderangebote beachten', example: 'Bitte beachten Sie unsere Sonderangebote in der Sportabteilung.' },
        { de: 'die Sportabteilung', plural: 'die Sportabteilungen', ru: 'спортивный отдел', gender: 'feminin', collocation: 'in der Sportabteilung', example: 'Bitte beachten Sie unsere Sonderangebote in der Sportabteilung.' },
        { de: 'der Rabatt', plural: 'die Rabatte', ru: 'скидка', gender: 'maskulin', collocation: 'Rabatt von 50%', example: 'Auf Tennisschuhe und Laufschuhe gibt es heute einen Rabatt von 50%.' },
        { de: 'die Buchabteilung', plural: 'die Buchabteilungen', ru: 'книжный отдел', gender: 'feminin', collocation: 'in unserer Buchabteilung', example: 'Morgen gibt es in unserer Buchabteilung drei Krimis zu insgesamt 10 Euro.' },
        { de: 'der Krimi', plural: 'die Krimis', ru: 'детектив', gender: 'maskulin', collocation: 'drei Krimis', example: 'Morgen gibt es in unserer Buchabteilung drei Krimis zu insgesamt 10 Euro.' },
        { de: 'die Spielsache', plural: 'die Spielsachen', ru: 'игрушка', gender: 'feminin', collocation: 'Preisreduzierungen für Spielsachen', example: 'Am Montag haben wir dann Preisreduzierungen für Spielsachen.' },
        { de: 'die Preisreduzierung', plural: 'die Preisreduzierungen', ru: 'снижение цены', gender: 'feminin', collocation: 'Preisreduzierungen für Spielsachen', example: 'Am Montag haben wir dann Preisreduzierungen für Spielsachen.' },
        { de: 'beachten', ru: 'обращать внимание', type: 'verb', forms: 'beachtet, beachtete, hat beachtet', example: 'Bitte beachten Sie unsere Sonderangebote in der Sportabteilung.' },
        { de: 'gelten', ru: 'действовать, быть действительным', type: 'verb', forms: 'gilt, galt, hat gegolten', example: 'Dieses Angebot gilt nur heute.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute viele Angebote.', ru: 'Сегодня есть много предложений.', note: 'es gibt + Akk' },
        { de: 'Der Rabatt gilt nur heute.', ru: 'Скидка действует только сегодня.', note: 'V2' },
        { de: 'Wir kaufen morgen Spielsachen.', ru: 'Мы покупаем завтра игрушки.', note: 'V2' },
        { de: 'Ich freue mich auf den Besuch.', ru: 'Я радуюсь визиту.', note: 'sich freuen auf + Akk' },
        { de: 'Bitte kommen Sie in unsere Abteilung.', ru: 'Пожалуйста, приходите в наш отдел.', note: 'императив Sie' },
      ],
      question: {
        de: 'Wann gibt es Preisreduzierungen für Spielsachen?',
        ru: 'Когда будут снижены цены на игрушки?',
        options: [
          { de: 'Heute', ru: 'Сегодня' },
          { de: 'Morgen von 10 bis 12 Uhr', ru: 'Завтра с 10 до 12 часов' },
          { de: 'Am Montag', ru: 'В понедельник' },
        ],
        correct: 2,
        explanation: 'В тексте говорится: "Am Montag haben wir dann Preisreduzierungen für Spielsachen" — снижение цен на игрушки запланировано на понедельник.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Wetterbericht',
      type: 'прогноз погоды',
      text: 'Sie hören nun den Wetterbericht für heute Montag den 23. April. Im Norden von Deutschland am Morgen noch kühl, ab ca. 12 Uhr wird es wärmer und sonnig. Gegen Abend gibt es Regenschauer. Die Temperaturen liegen zwischen 13 und 23 Grad. Morgen wird es zunächst etwas kälter gegen Abend dann wieder wärmer.',
      sentenceTranslations: {
        'Sie hören nun den Wetterbericht für heute Montag den 23.': {
          literal: 'Вы слышите сейчас прогноз-погоды для сегодня понедельник 23',
          literary: 'Вы слушаете прогноз погоды на сегодня, понедельник 23-е.'
        },
        'April.': {
          literal: 'Апреля',
          literary: 'Апреля.'
        },
        'Im Norden von Deutschland am Morgen noch kühl, ab ca.': {
          literal: 'На севере от Германии утром ещё прохладно, с примерно',
          literary: 'На севере Германии утром ещё прохладно, примерно с'
        },
        '12 Uhr wird es wärmer und sonnig.': {
          literal: '12 часов становится оно теплее и солнечно',
          literary: '12 часов станет теплее и солнечно.'
        },
        'Gegen Abend gibt es Regenschauer.': {
          literal: 'К вечеру даёт оно дождевые-ливни',
          literary: 'К вечеру будут дождевые ливни.'
        },
        'Die Temperaturen liegen zwischen 13 und 23 Grad.': {
          literal: 'Температуры лежат между 13 и 23 градусами',
          literary: 'Температура от 13 до 23 градусов.'
        },
        'Morgen wird es zunächst etwas kälter gegen Abend dann wieder wärmer.': {
          literal: 'Завтра становится оно сначала немного холоднее к вечеру тогда снова теплее',
          literary: 'Завтра сначала станет немного холоднее, к вечеру снова теплее.'
        },
      },
      vocabulary: [
        { de: 'der Wetterbericht', plural: 'die Wetterberichte', ru: 'прогноз погоды', gender: 'maskulin', collocation: 'den Wetterbericht hören', example: 'Sie hören nun den Wetterbericht für heute Montag den 23. April.' },
        { de: 'der Norden', ru: 'север', gender: 'maskulin', collocation: 'im Norden von Deutschland', example: 'Im Norden von Deutschland am Morgen noch kühl.' },
        { de: 'der Regenschauer', plural: 'die Regenschauer', ru: 'ливень', gender: 'maskulin', collocation: 'es gibt Regenschauer', example: 'Gegen Abend gibt es Regenschauer.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'Temperaturen liegen zwischen', example: 'Die Temperaturen liegen zwischen 13 und 23 Grad.' },
        { de: 'der Grad', plural: 'die Grade', ru: 'градус', gender: 'maskulin', collocation: '23 Grad', example: 'Die Temperaturen liegen zwischen 13 und 23 Grad.' },
        { de: 'liegen', ru: 'находиться, составлять', type: 'verb', forms: 'liegt, lag, hat gelegen', example: 'Die Temperaturen liegen zwischen 13 und 23 Grad.' },
        { de: 'sonnig', ru: 'солнечный', type: 'adj', example: 'Ab ca. 12 Uhr wird es wärmer und sonnig.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Im Norden von Deutschland am Morgen noch kühl.' },
      ],
      practiceSentences: [
        { de: 'Es wird heute kalt.', ru: 'Сегодня станет холодно.', note: 'werden + прилагательное' },
        { de: 'Ab Montag regnet es.', ru: 'С понедельника идёт дождь.', note: 'V2' },
        { de: 'Die Temperatur liegt bei 20 Grad.', ru: 'Температура составляет 20 градусов.', note: 'V2' },
        { de: 'Gegen Mittag wird es sonnig.', ru: 'К полудню станет солнечно.', note: 'werden + прилагательное' },
        { de: 'Im Süden bleibt es warm.', ru: 'На юге останется тепло.', note: 'V2' },
      ],
      question: {
        de: 'Wie wird das Wetter heute Abend im Norden?',
        ru: 'Какая погода будет сегодня вечером на севере?',
        options: [
          { de: 'Sonnig und warm', ru: 'Солнечно и тепло' },
          { de: 'Es gibt Regenschauer', ru: 'Будут дождевые ливни' },
          { de: 'Kalt und trocken', ru: 'Холодно и сухо' },
        ],
        correct: 1,
        explanation: 'В прогнозе сказано: "gegen Abend gibt es Regenschauer" — к вечеру будут дождевые ливни.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Mensa-Durchsage',
      type: 'объявление',
      text: 'Hier eine Durchsage für alle Studenten: Wegen eines Stromausfalls bleibt die Mensa heute Mittag geschlossen. Essen können sich die Studenten heute Mittag am Kiosk kaufen, wo es auch warmes Essen geben wird. Ab heute Abend bietet dann die Mensa wieder ganz normal Abendessen an. Der Kiosk ist dann geschlossen. Wir bitten um Verständnis für die Situation.',
      sentenceTranslations: {
        'Hier eine Durchsage für alle Studenten: Wegen eines Stromausfalls bleibt die Mensa heute Mittag geschlossen.': {
          literal: 'Здесь одно объявление для всех студентов: из-за одного отключения-электричества остаётся столовая сегодня в-обед закрытой',
          literary: 'Внимание, объявление для всех студентов: из-за отключения электричества столовая сегодня в обед закрыта.'
        },
        'Essen können sich die Studenten heute Mittag am Kiosk kaufen, wo es auch warmes Essen geben wird.': {
          literal: 'Еду могут себе студенты сегодня в-обед у киоска купить, где оно также тёплую еду давать будет',
          literary: 'Студенты могут купить себе еду сегодня в обед в киоске, где также будет горячая еда.'
        },
        'Ab heute Abend bietet dann die Mensa wieder ganz normal Abendessen an.': {
          literal: 'С сегодня вечером предлагает тогда столовая снова совсем нормально ужин',
          literary: 'С сегодняшнего вечера столовая снова будет предлагать ужин как обычно.'
        },
        'Der Kiosk ist dann geschlossen.': {
          literal: 'Киоск есть тогда закрыт',
          literary: 'Киоск тогда будет закрыт.'
        },
        'Wir bitten um Verständnis für die Situation.': {
          literal: 'Мы просим о понимании для ситуации',
          literary: 'Просим отнестись с пониманием к ситуации.'
        },
      },
      vocabulary: [
        { de: 'die Durchsage', plural: 'die Durchsagen', ru: 'объявление', gender: 'feminin', collocation: 'eine Durchsage für alle', example: 'Hier eine Durchsage für alle Studenten.' },
        { de: 'der Stromausfall', plural: 'die Stromausfälle', ru: 'отключение электричества', gender: 'maskulin', collocation: 'wegen eines Stromausfalls', example: 'Wegen eines Stromausfalls bleibt die Mensa heute Mittag geschlossen.' },
        { de: 'die Mensa', plural: 'die Mensen', ru: 'студенческая столовая', gender: 'feminin', collocation: 'die Mensa bleibt geschlossen', example: 'Wegen eines Stromausfalls bleibt die Mensa heute Mittag geschlossen.' },
        { de: 'der Kiosk', plural: 'die Kioske', ru: 'киоск', gender: 'maskulin', collocation: 'am Kiosk kaufen', example: 'Essen können sich die Studenten heute Mittag am Kiosk kaufen.' },
        { de: 'das Abendessen', plural: 'die Abendessen', ru: 'ужин', gender: 'neutrum', collocation: 'Abendessen anbieten', example: 'Ab heute Abend bietet dann die Mensa wieder ganz normal Abendessen an.' },
        { de: 'das Verständnis', ru: 'понимание', gender: 'neutrum', collocation: 'um Verständnis bitten', example: 'Wir bitten um Verständnis für die Situation.' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'bietet an, bot an, hat angeboten', example: 'Ab heute Abend bietet dann die Mensa wieder ganz normal Abendessen an.' },
        { de: 'geschlossen', ru: 'закрытый', type: 'adj', example: 'Wegen eines Stromausfalls bleibt die Mensa heute Mittag geschlossen.' },
      ],
      practiceSentences: [
        { de: 'Die Bibliothek bleibt heute geschlossen.', ru: 'Библиотека остаётся сегодня закрытой.', note: 'bleiben + прилагательное' },
        { de: 'Ich kann mir ein Buch kaufen.', ru: 'Я могу купить себе книгу.', note: 'модальный + sich (Dat)' },
        { de: 'Das Café bietet Kuchen an.', ru: 'Кафе предлагает пирожные.', note: 'отделяемая приставка' },
        { de: 'Wegen Regen bleiben wir zu Hause.', ru: 'Из-за дождя мы остаёмся дома.', note: 'wegen + Gen' },
        { de: 'Ab morgen öffnet die Mensa wieder.', ru: 'С завтрашнего дня столовая снова открывается.', note: 'V2' },
      ],
      question: {
        de: 'Warum ist die Mensa heute Mittag geschlossen?',
        ru: 'Почему столовая закрыта сегодня в обед?',
        options: [
          { de: 'Wegen Renovierung', ru: 'Из-за ремонта' },
          { de: 'Wegen eines Stromausfalls', ru: 'Из-за отключения электричества' },
          { de: 'Wegen Ferien', ru: 'Из-за каникул' },
        ],
        correct: 1,
        explanation: 'В объявлении указана причина: "Wegen eines Stromausfalls bleibt die Mensa heute Mittag geschlossen".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Heide an Valerie',
      type: 'телефонное сообщение',
      text: 'Hallo Valerie, ich bin\'s Heide. Wir wollten doch heute mit den Kindern in den Zoo gehen. Um 11 Uhr ist die Adlershow und danach die Fütterung der Pinguine. Die Kinder-Rallye durch den Zoo ist allerdings erst um 16 Uhr. Ich würde lieber am Nachmittag in den Zoo gehen, dann können die Kinder vorher ihre Hausaufgaben erledigen. Ruf mich doch bitte zurück.',
      sentenceTranslations: {
        'Hallo Valerie, ich bin\'s Heide.': {
          literal: 'Привет Валери, я есть-это Хайде',
          literary: 'Привет, Валери, это Хайде.'
        },
        'Wir wollten doch heute mit den Kindern in den Zoo gehen.': {
          literal: 'Мы хотели же сегодня с детьми в зоопарк идти',
          literary: 'Мы же хотели сегодня пойти с детьми в зоопарк.'
        },
        'Um 11 Uhr ist die Adlershow und danach die Fütterung der Pinguine.': {
          literal: 'В 11 часов есть орлиное-шоу и после-того кормление пингвинов',
          literary: 'В 11 часов шоу орлов, а после — кормление пингвинов.'
        },
        'Die Kinder-Rallye durch den Zoo ist allerdings erst um 16 Uhr.': {
          literal: 'Детское-ралли через зоопарк есть однако только в 16 часов',
          literary: 'Детское ралли по зоопарку только в 16 часов.'
        },
        'Ich würde lieber am Nachmittag in den Zoo gehen, dann können die Kinder vorher ihre Hausaufgaben erledigen.': {
          literal: 'Я бы лучше в-послеобеденное-время в зоопарк идти, тогда могут дети прежде их домашние-задания выполнить',
          literary: 'Я бы лучше пошла в зоопарк после обеда, тогда дети смогут сначала сделать домашние задания.'
        },
        'Ruf mich doch bitte zurück.': {
          literal: 'Позвони меня же пожалуйста обратно',
          literary: 'Перезвони мне, пожалуйста.'
        },
      },
      vocabulary: [
        { de: 'der Zoo', plural: 'die Zoos', ru: 'зоопарк', gender: 'maskulin', collocation: 'in den Zoo gehen', example: 'Wir wollten doch heute mit den Kindern in den Zoo gehen.' },
        { de: 'die Fütterung', plural: 'die Fütterungen', ru: 'кормление', gender: 'feminin', collocation: 'Fütterung der Pinguine', example: 'Um 11 Uhr ist die Adlershow und danach die Fütterung der Pinguine.' },
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'послеобеденное время', gender: 'maskulin', collocation: 'am Nachmittag', example: 'Ich würde lieber am Nachmittag in den Zoo gehen.' },
        { de: 'die Hausaufgabe', plural: 'die Hausaufgaben', ru: 'домашнее задание', gender: 'feminin', collocation: 'Hausaufgaben erledigen', example: 'Dann können die Kinder vorher ihre Hausaufgaben erledigen.' },
        { de: 'erledigen', ru: 'выполнять, делать', type: 'verb', forms: 'erledigt, erledigte, hat erledigt', example: 'Dann können die Kinder vorher ihre Hausaufgaben erledigen.' },
        { de: 'zurückrufen', ru: 'перезвонить', type: 'verb', forms: 'ruft zurück, rief zurück, hat zurückgerufen', example: 'Ruf mich doch bitte zurück.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte heute ins Kino gehen.', ru: 'Я хотел бы сегодня пойти в кино.', note: 'модальный + инфинитив' },
        { de: 'Um 15 Uhr beginnt der Film.', ru: 'В 15 часов начинается фильм.', note: 'V2' },
        { de: 'Die Kinder können im Park spielen.', ru: 'Дети могут играть в парке.', note: 'модальный + инфинитив' },
        { de: 'Ich würde lieber zu Hause bleiben.', ru: 'Я предпочёл бы остаться дома.', note: 'würde + инфинитив' },
        { de: 'Ruf mich bitte zurück.', ru: 'Перезвони мне, пожалуйста.', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Wann möchte Heide in den Zoo gehen?',
        ru: 'Когда Хайде хочет пойти в зоопарк?',
        options: [
          { de: 'Um 11 Uhr zur Adlershow', ru: 'В 11 часов на шоу орлов' },
          { de: 'Am Nachmittag', ru: 'После обеда' },
          { de: 'Um 16 Uhr zur Kinder-Rallye', ru: 'В 16 часов на детское ралли' },
        ],
        correct: 1,
        explanation: 'Хайде говорит: "Ich würde lieber am Nachmittag in den Zoo gehen" — она предпочла бы пойти после обеда.'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Online-Apotheke',
      type: 'информация',
      text: 'Und hier noch eine Information für Medikamentenkauf im Internet. Bisher konnte man in der Online-Apotheke alle Medikamente ohne Rezept kaufen. Doch das soll jetzt anders werden. Wer in der Online-Apotheke zum Beispiel Antibiotika einkauft, braucht ein Rezept vom Arzt. Das gilt allerdings nicht für Medikamente, die frei verkäuflich sind, für die man also in der normalen Apotheke auch kein Rezept braucht.',
      sentenceTranslations: {
        'Und hier noch eine Information für Medikamentenkauf im Internet.': {
          literal: 'И здесь ещё одна информация для покупки-лекарств в интернете',
          literary: 'А вот ещё информация о покупке лекарств в интернете.'
        },
        'Bisher konnte man in der Online-Apotheke alle Medikamente ohne Rezept kaufen.': {
          literal: 'До-сих-пор мог человек в онлайн-аптеке все лекарства без рецепта купить',
          literary: 'До сих пор в онлайн-аптеке можно было купить все лекарства без рецепта.'
        },
        'Doch das soll jetzt anders werden.': {
          literal: 'Однако это должно теперь иначе стать',
          literary: 'Но теперь это должно измениться.'
        },
        'Wer in der Online-Apotheke zum Beispiel Antibiotika einkauft, braucht ein Rezept vom Arzt.': {
          literal: 'Кто в онлайн-аптеке например антибиотики покупает, нуждается рецепт от врача',
          literary: 'Тот, кто покупает в онлайн-аптеке, например, антибиотики, нуждается в рецепте от врача.'
        },
        'Das gilt allerdings nicht für Medikamente, die frei verkäuflich sind, für die man also in der normalen Apotheke auch kein Rezept braucht.': {
          literal: 'Это действует однако не для лекарств, которые свободно продаваемые есть, для которых человек значит в нормальной аптеке тоже никакой рецепт нуждается',
          literary: 'Однако это не касается лекарств, которые продаются свободно, для которых и в обычной аптеке рецепт не нужен.'
        },
      },
      vocabulary: [
        { de: 'das Medikament', plural: 'die Medikamente', ru: 'лекарство', gender: 'neutrum', collocation: 'Medikamente kaufen', example: 'Bisher konnte man in der Online-Apotheke alle Medikamente ohne Rezept kaufen.' },
        { de: 'die Apotheke', plural: 'die Apotheken', ru: 'аптека', gender: 'feminin', collocation: 'in der Online-Apotheke', example: 'Bisher konnte man in der Online-Apotheke alle Medikamente ohne Rezept kaufen.' },
        { de: 'das Rezept', plural: 'die Rezepte', ru: 'рецепт', gender: 'neutrum', collocation: 'ohne Rezept', example: 'Wer Antibiotika einkauft, braucht ein Rezept vom Arzt.' },
        { de: 'das Antibiotikum', plural: 'die Antibiotika', ru: 'антибиотик', gender: 'neutrum', collocation: 'Antibiotika einkaufen', example: 'Wer in der Online-Apotheke zum Beispiel Antibiotika einkauft, braucht ein Rezept vom Arzt.' },
        { de: 'der Arzt', plural: 'die Ärzte', ru: 'врач', gender: 'maskulin', collocation: 'Rezept vom Arzt', example: 'Wer Antibiotika einkauft, braucht ein Rezept vom Arzt.' },
        { de: 'einkaufen', ru: 'покупать', type: 'verb', forms: 'kauft ein, kaufte ein, hat eingekauft', example: 'Wer in der Online-Apotheke zum Beispiel Antibiotika einkauft.' },
        { de: 'gelten', ru: 'действовать, касаться', type: 'verb', forms: 'gilt, galt, hat gegolten', example: 'Das gilt allerdings nicht für Medikamente, die frei verkäuflich sind.' },
      ],
      practiceSentences: [
        { de: 'Man kann hier Medikamente kaufen.', ru: 'Здесь можно купить лекарства.', note: 'модальный + инфинитив' },
        { de: 'Das soll morgen anders werden.', ru: 'Это должно завтра измениться.', note: 'sollen + werden' },
        { de: 'Wer krank ist, braucht ein Rezept.', ru: 'Кто болен, нуждается в рецепте.', note: 'wer-придаточное' },
        { de: 'Ich kaufe Tabletten ohne Rezept.', ru: 'Я покупаю таблетки без рецепта.', note: 'ohne + Akk' },
        { de: 'Diese Regel gilt nicht für alle.', ru: 'Это правило действует не для всех.', note: 'V2' },
      ],
      question: {
        de: 'Was braucht man jetzt für Antibiotika in der Online-Apotheke?',
        ru: 'Что теперь нужно для покупки антибиотиков в онлайн-аптеке?',
        options: [
          { de: 'Eine Registrierung', ru: 'Регистрация' },
          { de: 'Ein Rezept vom Arzt', ru: 'Рецепт от врача' },
          { de: 'Eine Versicherungskarte', ru: 'Страховая карта' },
        ],
        correct: 1,
        explanation: 'В тексте ясно указано: "Wer in der Online-Apotheke zum Beispiel Antibiotika einkauft, braucht ein Rezept vom Arzt".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Büro-Gespräch',
      type: 'диалог',
      text: 'Hallo Frauke. Hallo Manfred, du bist ja auch schon so früh im Büro. Heute werden wohl viele zu spät kommen. Es hat ja kräftig geschneit heute Nacht. Ja, zum Glück wohne ich hier in der Nähe und brauche weder Bus noch Straßenbahn. Ich kann zu Fuß ins Büro kommen. Und du, wie bist du eigentlich hierher gekommen? Mein Mann hat mich gefahren. Er bringt mich jeden Morgen mit dem Auto zur Arbeit. Zum Glück waren unsere Straßen frei von Schnee. Der Schneepflug war schon früh unterwegs. Ach so, na da hast du ja Glück gehabt. Wie kommt denn Mareike heute wohl ins Büro? Sie nimmt ja immer das Motorrad. Tja, das wird heute sicher nicht gehen. Ich hatte ihr ja gesagt, sie soll das Motorrad im Winter nicht benutzen. Das ist viel zu gefährlich. Und Andreas, was der wohl macht? Er benutzt ja sonst immer die S-Bahn. Die hat auch Verspätung, das habe ich heute morgen im Radio gehört. Auch für Ralf wird es schwierig, denn er kommt ja immer mit dem Fahrrad. Und Herr Schmidt, unser Chef, wohnt ja ziemlich weit weg, mindestens eine Stunde von hier. Und der benutzt der eigentlich die U-Bahn? Ob es da auch Probleme gibt? Glaube ich nicht. Aber die Kollegen, die mit dem Zug kommen, werden Probleme haben. Oh ja. Ach, da kommt ja schon Heike. Sag mal, wie bist du denn hierher gekommen?',
      sentenceTranslations: {
        'Hallo Frauke.': {
          literal: 'Привет Фрауке',
          literary: 'Привет, Фрауке.'
        },
        'Hallo Manfred, du bist ja auch schon so früh im Büro.': {
          literal: 'Привет Манфред, ты есть же тоже уже так рано в офисе',
          literary: 'Привет, Манфред, ты тоже уже так рано в офисе.'
        },
        'Heute werden wohl viele zu spät kommen.': {
          literal: 'Сегодня будут наверное многие слишком поздно приходить',
          literary: 'Сегодня многие, наверное, опоздают.'
        },
        'Es hat ja kräftig geschneit heute Nacht.': {
          literal: 'Оно имеет же сильно снежило сегодня ночью',
          literary: 'Ведь ночью сильно шёл снег.'
        },
        'Ja, zum Glück wohne ich hier in der Nähe und brauche weder Bus noch Straßenbahn.': {
          literal: 'Да, к счастью живу я здесь в близости и нуждаюсь ни автобус ни трамвай',
          literary: 'Да, к счастью, я живу рядом и мне не нужен ни автобус, ни трамвай.'
        },
        'Ich kann zu Fuß ins Büro kommen.': {
          literal: 'Я могу пешком в офис прийти',
          literary: 'Я могу прийти в офис пешком.'
        },
        'Und du, wie bist du eigentlich hierher gekommen?': {
          literal: 'И ты, как есть ты собственно сюда пришла?',
          literary: 'А ты, как ты вообще добралась сюда?'
        },
        'Mein Mann hat mich gefahren.': {
          literal: 'Мой муж имеет меня отвёз',
          literary: 'Мой муж меня отвёз.'
        },
        'Er bringt mich jeden Morgen mit dem Auto zur Arbeit.': {
          literal: 'Он приносит меня каждое утро с машиной к работе',
          literary: 'Он каждое утро отвозит меня на машине на работу.'
        },
        'Zum Glück waren unsere Straßen frei von Schnee.': {
          literal: 'К счастью были наши улицы свободные от снега',
          literary: 'К счастью, наши улицы были свободны от снега.'
        },
        'Der Schneepflug war schon früh unterwegs.': {
          literal: 'Снегоочиститель был уже рано в-пути',
          literary: 'Снегоочиститель уже рано работал.'
        },
        'Ach so, na da hast du ja Glück gehabt.': {
          literal: 'Ах так, ну тут имеешь ты же счастье имела',
          literary: 'А, ну тебе повезло.'
        },
        'Wie kommt denn Mareike heute wohl ins Büro?': {
          literal: 'Как приходит же Марайке сегодня наверное в офис?',
          literary: 'А как Марайке сегодня доберётся до офиса?'
        },
        'Sie nimmt ja immer das Motorrad.': {
          literal: 'Она берёт же всегда мотоцикл',
          literary: 'Она же всегда ездит на мотоцикле.'
        },
        'Tja, das wird heute sicher nicht gehen.': {
          literal: 'Ну, это будет сегодня наверняка не идти',
          literary: 'Ну, сегодня это точно не получится.'
        },
        'Ich hatte ihr ja gesagt, sie soll das Motorrad im Winter nicht benutzen.': {
          literal: 'Я имел ей же сказал, она должна мотоцикл зимой не использовать',
          literary: 'Я же ей говорил, чтобы она не пользовалась мотоциклом зимой.'
        },
        'Das ist viel zu gefährlich.': {
          literal: 'Это есть слишком опасно',
          literary: 'Это слишком опасно.'
        },
        'Und Andreas, was der wohl macht?': {
          literal: 'И Андреас, что тот наверное делает?',
          literary: 'А Андреас, что он будет делать?'
        },
        'Er benutzt ja sonst immer die S-Bahn.': {
          literal: 'Он использует же обычно всегда городскую-электричку',
          literary: 'Он же обычно всегда ездит на электричке.'
        },
        'Die hat auch Verspätung, das habe ich heute morgen im Radio gehört.': {
          literal: 'Та имеет тоже опоздание, то имею я сегодня утром по радио слышал',
          literary: 'Она тоже опаздывает, я слышал это сегодня утром по радио.'
        },
        'Auch für Ralf wird es schwierig, denn er kommt ja immer mit dem Fahrrad.': {
          literal: 'Также для Ральфа будет оно трудно, ведь он приходит же всегда с велосипедом',
          literary: 'Для Ральфа тоже будет сложно, ведь он всегда ездит на велосипеде.'
        },
        'Und Herr Schmidt, unser Chef, wohnt ja ziemlich weit weg, mindestens eine Stunde von hier.': {
          literal: 'И господин Шмидт, наш шеф, живёт же довольно далеко, минимально один час отсюда',
          literary: 'А господин Шмидт, наш начальник, живёт довольно далеко, минимум час отсюда.'
        },
        'Und der benutzt der eigentlich die U-Bahn?': {
          literal: 'И тот пользуется тот собственно метро?',
          literary: 'А он пользуется метро?'
        },
        'Ob es da auch Probleme gibt?': {
          literal: 'Ли оно там тоже проблемы даёт?',
          literary: 'Интересно, там тоже есть проблемы?'
        },
        'Glaube ich nicht.': {
          literal: 'Верю я не',
          literary: 'Не думаю.'
        },
        'Aber die Kollegen, die mit dem Zug kommen, werden Probleme haben.': {
          literal: 'Но коллеги, которые с поездом приходят, будут проблемы иметь',
          literary: 'Но у коллег, которые ездят на поезде, будут проблемы.'
        },
        'Oh ja.': {
          literal: 'О да',
          literary: 'О да.'
        },
        'Ach, da kommt ja schon Heike.': {
          literal: 'Ах, тут приходит же уже Хайке',
          literary: 'А, вот уже и Хайке идёт.'
        },
        'Sag mal, wie bist du denn hierher gekommen?': {
          literal: 'Скажи-ка, как есть ты же сюда пришла?',
          literary: 'Скажи, а как ты добралась сюда?'
        },
      },
      vocabulary: [
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'ins Büro kommen', example: 'Du bist ja auch schon so früh im Büro.' },
        { de: 'der Schnee', ru: 'снег', gender: 'maskulin', collocation: 'frei von Schnee', example: 'Zum Glück waren unsere Straßen frei von Schnee.' },
        { de: 'der Schneepflug', plural: 'die Schneepflüge', ru: 'снегоочиститель', gender: 'maskulin', collocation: 'der Schneepflug war unterwegs', example: 'Der Schneepflug war schon früh unterwegs.' },
        { de: 'das Motorrad', plural: 'die Motorräder', ru: 'мотоцикл', gender: 'neutrum', collocation: 'das Motorrad nehmen', example: 'Sie nimmt ja immer das Motorrad.' },
        { de: 'die Verspätung', plural: 'die Verspätungen', ru: 'опоздание', gender: 'feminin', collocation: 'Verspätung haben', example: 'Die hat auch Verspätung.' },
        { de: 'das Fahrrad', plural: 'die Fahrräder', ru: 'велосипед', gender: 'neutrum', collocation: 'mit dem Fahrrad kommen', example: 'Er kommt ja immer mit dem Fahrrad.' },
        { de: 'der Chef', plural: 'die Chefs', ru: 'начальник', gender: 'maskulin', collocation: 'unser Chef', example: 'Und Herr Schmidt, unser Chef, wohnt ja ziemlich weit weg.' },
        { de: 'der Zug', plural: 'die Züge', ru: 'поезд', gender: 'maskulin', collocation: 'mit dem Zug kommen', example: 'Aber die Kollegen, die mit dem Zug kommen, werden Probleme haben.' },
        { de: 'schneien', ru: 'идти (о снеге)', type: 'verb', forms: 'schneit, schneite, hat geschneit', example: 'Es hat ja kräftig geschneit heute Nacht.' },
        { de: 'benutzen', ru: 'пользоваться', type: 'verb', forms: 'benutzt, benutzte, hat benutzt', example: 'Er benutzt ja sonst immer die S-Bahn.' },
        { de: 'gefährlich', ru: 'опасный', type: 'adj', example: 'Das ist viel zu gefährlich.' },
      ],
      practiceSentences: [
        { de: 'Ich komme heute zu spät.', ru: 'Я сегодня опаздываю.', note: 'V2' },
        { de: 'Es hat gestern geregnet.', ru: 'Вчера шёл дождь.', note: 'Perfekt' },
        { de: 'Sie fährt mit dem Auto zur Arbeit.', ru: 'Она ездит на машине на работу.', note: 'mit + Dat' },
        { de: 'Ich brauche weder Bus noch Bahn.', ru: 'Мне не нужен ни автобус, ни поезд.', note: 'weder...noch' },
        { de: 'Der Zug hat heute Verspätung.', ru: 'Поезд сегодня опаздывает.', note: 'V2' },
      ],
      question: {
        de: 'Wie kommt Mareike normalerweise ins Büro?',
        ru: 'Как Марайке обычно добирается в офис?',
        options: [
          { de: 'Mit dem Auto', ru: 'На машине' },
          { de: 'Mit dem Motorrad', ru: 'На мотоцикле' },
          { de: 'Mit der S-Bahn', ru: 'На электричке' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "Wie kommt denn Mareike heute wohl ins Büro? Sie nimmt ja immer das Motorrad".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Restaurant',
      type: 'диалог',
      text: 'Guten Abend, ich bringe Ihnen sofort die Speisekarte. Nein danke, nicht nötig. Können Sie mir etwas empfehlen? Ja, den Fisch. Der ist ganz frisch. Dazu gibt es Kartoffeln und Senfsoße. Nein danke, ich habe erst gestern Fisch gegessen. Haben Sie Wiener Schnitzel? Leider nicht. Schade. Dann nehme ich nur einen Salat und vorher bitte die Pilzsuppe, die ich gestern schon hatte. Sehr gern.',
      sentenceTranslations: {
        'Guten Abend, ich bringe Ihnen sofort die Speisekarte.': {
          literal: 'Добрый вечер, я приношу вам сразу меню',
          literary: 'Добрый вечер, я сейчас принесу вам меню.'
        },
        'Nein danke, nicht nötig.': {
          literal: 'Нет спасибо, не необходимо',
          literary: 'Нет, спасибо, не нужно.'
        },
        'Können Sie mir etwas empfehlen?': {
          literal: 'Можете вы мне что-то порекомендовать?',
          literary: 'Можете что-нибудь порекомендовать?'
        },
        'Ja, den Fisch.': {
          literal: 'Да, рыбу',
          literary: 'Да, рыбу.'
        },
        'Der ist ganz frisch.': {
          literal: 'Он есть совсем свежий',
          literary: 'Она очень свежая.'
        },
        'Dazu gibt es Kartoffeln und Senfsoße.': {
          literal: 'К-этому даёт оно картофель и горчичный-соус',
          literary: 'К ней подаются картофель и горчичный соус.'
        },
        'Nein danke, ich habe erst gestern Fisch gegessen.': {
          literal: 'Нет спасибо, я имею только вчера рыбу поел',
          literary: 'Нет, спасибо, я только вчера ел рыбу.'
        },
        'Haben Sie Wiener Schnitzel?': {
          literal: 'Имеете вы венский шницель?',
          literary: 'У вас есть венский шницель?'
        },
        'Leider nicht.': {
          literal: 'К-сожалению нет',
          literary: 'К сожалению, нет.'
        },
        'Schade.': {
          literal: 'Жаль',
          literary: 'Жаль.'
        },
        'Dann nehme ich nur einen Salat und vorher bitte die Pilzsuppe, die ich gestern schon hatte.': {
          literal: 'Тогда беру я только один салат и прежде пожалуйста грибной-суп, который я вчера уже имел',
          literary: 'Тогда я возьму только салат и перед этим грибной суп, который я вчера уже брал.'
        },
        'Sehr gern.': {
          literal: 'Очень охотно',
          literary: 'С удовольствием.'
        },
      },
      vocabulary: [
        { de: 'die Speisekarte', plural: 'die Speisekarten', ru: 'меню', gender: 'feminin', collocation: 'die Speisekarte bringen', example: 'Ich bringe Ihnen sofort die Speisekarte.' },
        { de: 'der Fisch', plural: 'die Fische', ru: 'рыба', gender: 'maskulin', collocation: 'den Fisch empfehlen', example: 'Ja, den Fisch. Der ist ganz frisch.' },
        { de: 'die Kartoffel', plural: 'die Kartoffeln', ru: 'картофель', gender: 'feminin', collocation: 'Kartoffeln dazu', example: 'Dazu gibt es Kartoffeln und Senfsoße.' },
        { de: 'der Salat', plural: 'die Salate', ru: 'салат', gender: 'maskulin', collocation: 'einen Salat nehmen', example: 'Dann nehme ich nur einen Salat.' },
        { de: 'die Pilzsuppe', plural: 'die Pilzsuppen', ru: 'грибной суп', gender: 'feminin', collocation: 'die Pilzsuppe nehmen', example: 'Vorher bitte die Pilzsuppe, die ich gestern schon hatte.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Können Sie mir etwas empfehlen?' },
        { de: 'frisch', ru: 'свежий', type: 'adj', example: 'Der ist ganz frisch.' },
      ],
      practiceSentences: [
        { de: 'Ich bringe Ihnen den Kaffee.', ru: 'Я принесу вам кофе.', note: 'Dat + Akk' },
        { de: 'Können Sie mir helfen?', ru: 'Можете мне помочь?', note: 'модальный + инфинитив' },
        { de: 'Der Salat ist sehr frisch.', ru: 'Салат очень свежий.', note: 'V2' },
        { de: 'Ich nehme die Suppe.', ru: 'Я возьму суп.', note: 'V2' },
        { de: 'Haben Sie vegetarisches Essen?', ru: 'У вас есть вегетарианская еда?', note: 'V1 (вопрос)' },
      ],
      question: {
        de: 'Was bestellt der Gast?',
        ru: 'Что заказывает гость?',
        options: [
          { de: 'Fisch mit Kartoffeln', ru: 'Рыбу с картофелем' },
          { de: 'Wiener Schnitzel', ru: 'Венский шницель' },
          { de: 'Pilzsuppe und Salat', ru: 'Грибной суп и салат' },
        ],
        correct: 2,
        explanation: 'Гость говорит: "Dann nehme ich nur einen Salat und vorher bitte die Pilzsuppe" — он заказывает салат и грибной суп.'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Beim Arzt',
      type: 'диалог',
      text: 'Guten Tag, setzen Sie sich doch. Was fehlt Ihnen denn? Mir tut schon seit Tagen der Kopf weh. Fieber habe ich aber nicht. Haben Sie auch Schnupfen oder Husten? Zum Glück nicht. Gut, dann verschreibe ich Ihnen kein Antibiotikum, sondern nur Kopfschmerztabletten. Vielen Dank. Auf Wiedersehen. Auf Wiedersehen und gute Besserung.',
      sentenceTranslations: {
        'Guten Tag, setzen Sie sich doch.': {
          literal: 'Добрый день, садитесь вы себя же',
          literary: 'Добрый день, садитесь, пожалуйста.'
        },
        'Was fehlt Ihnen denn?': {
          literal: 'Что недостаёт вам же?',
          literary: 'Что вас беспокоит?'
        },
        'Mir tut schon seit Tagen der Kopf weh.': {
          literal: 'Мне делает уже с дней голова больно',
          literary: 'У меня уже несколько дней болит голова.'
        },
        'Fieber habe ich aber nicht.': {
          literal: 'Температуру имею я но не',
          literary: 'Но температуры у меня нет.'
        },
        'Haben Sie auch Schnupfen oder Husten?': {
          literal: 'Имеете вы также насморк или кашель?',
          literary: 'У вас также есть насморк или кашель?'
        },
        'Zum Glück nicht.': {
          literal: 'К счастью нет',
          literary: 'К счастью, нет.'
        },
        'Gut, dann verschreibe ich Ihnen kein Antibiotikum, sondern nur Kopfschmerztabletten.': {
          literal: 'Хорошо, тогда прописываю я вам никакой антибиотик, а-только таблетки-от-головной-боли',
          literary: 'Хорошо, тогда я пропишу вам не антибиотик, а только таблетки от головной боли.'
        },
        'Vielen Dank.': {
          literal: 'Многое спасибо',
          literary: 'Большое спасибо.'
        },
        'Auf Wiedersehen.': {
          literal: 'На свидание',
          literary: 'До свидания.'
        },
        'Auf Wiedersehen und gute Besserung.': {
          literal: 'На свидание и хорошее улучшение',
          literary: 'До свидания и скорейшего выздоровления.'
        },
      },
      vocabulary: [
        { de: 'der Kopf', plural: 'die Köpfe', ru: 'голова', gender: 'maskulin', collocation: 'der Kopf tut weh', example: 'Mir tut schon seit Tagen der Kopf weh.' },
        { de: 'das Fieber', ru: 'температура, жар', gender: 'neutrum', collocation: 'Fieber haben', example: 'Fieber habe ich aber nicht.' },
        { de: 'der Schnupfen', ru: 'насморк', gender: 'maskulin', collocation: 'Schnupfen haben', example: 'Haben Sie auch Schnupfen oder Husten?' },
        { de: 'der Husten', ru: 'кашель', gender: 'maskulin', collocation: 'Husten haben', example: 'Haben Sie auch Schnupfen oder Husten?' },
        { de: 'die Kopfschmerztablette', plural: 'die Kopfschmerztabletten', ru: 'таблетка от головной боли', gender: 'feminin', collocation: 'Kopfschmerztabletten verschreiben', example: 'Dann verschreibe ich Ihnen nur Kopfschmerztabletten.' },
        { de: 'die Besserung', ru: 'улучшение, выздоровление', gender: 'feminin', collocation: 'gute Besserung', example: 'Auf Wiedersehen und gute Besserung.' },
        { de: 'verschreiben', ru: 'прописывать (лекарство)', type: 'verb', forms: 'verschreibt, verschrieb, hat verschrieben', example: 'Dann verschreibe ich Ihnen kein Antibiotikum, sondern nur Kopfschmerztabletten.' },
        { de: 'wehtun', ru: 'болеть', type: 'verb', forms: 'tut weh, tat weh, hat wehgetan', example: 'Mir tut schon seit Tagen der Kopf weh.' },
      ],
      practiceSentences: [
        { de: 'Mir tut der Bauch weh.', ru: 'У меня болит живот.', note: 'wehtun + Dat' },
        { de: 'Ich habe kein Fieber.', ru: 'У меня нет температуры.', note: 'kein + Akk' },
        { de: 'Der Arzt verschreibt Tabletten.', ru: 'Врач прописывает таблетки.', note: 'V2' },
        { de: 'Was fehlt dir?', ru: 'Что тебя беспокоит?', note: 'fehlen + Dat' },
        { de: 'Seit gestern habe ich Kopfschmerzen.', ru: 'Со вчерашнего дня у меня головная боль.', note: 'seit + Dat' },
      ],
      question: {
        de: 'Hat der Patient Fieber?',
        ru: 'У пациента есть температура?',
        options: [
          { de: 'Ja, er hat hohes Fieber', ru: 'Да, у него высокая температура' },
          { de: 'Nein, er hat kein Fieber', ru: 'Нет, у него нет температуры' },
          { de: 'Der Arzt weiß es nicht', ru: 'Врач не знает' },
        ],
        correct: 1,
        explanation: 'Пациент сам говорит: "Fieber habe ich aber nicht" — температуры у него нет.'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Hausverwaltung',
      type: 'диалог',
      text: 'Guten Abend, Herr Blum. Ach, guten Abend, Frau Krenzzo. Kommen Sie wegen der Garagentür? Die wurde heute morgen repariert. Oder ist sie schon wieder kaputt? Nein, nein, alles in Ordnung. Aber der Aufzug funktioniert nicht. Ich bin heute stecken geblieben. Glücklicherweise hatte ich mein Handy dabei und konnte die Feuerwehr anrufen. Oh, das tut mir leid. Ich kümmere mich sofort darum.',
      sentenceTranslations: {
        'Guten Abend, Herr Blum.': {
          literal: 'Добрый вечер, господин Блюм',
          literary: 'Добрый вечер, господин Блюм.'
        },
        'Ach, guten Abend, Frau Krenzzo.': {
          literal: 'Ах, добрый вечер, госпожа Кренццо',
          literary: 'Ах, добрый вечер, госпожа Кренццо.'
        },
        'Kommen Sie wegen der Garagentür?': {
          literal: 'Приходите вы из-за гаражной-двери?',
          literary: 'Вы пришли из-за гаражной двери?'
        },
        'Die wurde heute morgen repariert.': {
          literal: 'Она была сегодня утром отремонтирована',
          literary: 'Её отремонтировали сегодня утром.'
        },
        'Oder ist sie schon wieder kaputt?': {
          literal: 'Или есть она уже снова сломана?',
          literary: 'Или она опять сломалась?'
        },
        'Nein, nein, alles in Ordnung.': {
          literal: 'Нет, нет, всё в порядке',
          literary: 'Нет-нет, всё в порядке.'
        },
        'Aber der Aufzug funktioniert nicht.': {
          literal: 'Но лифт функционирует не',
          literary: 'Но лифт не работает.'
        },
        'Ich bin heute stecken geblieben.': {
          literal: 'Я есть сегодня застрять остался',
          literary: 'Я сегодня застрял в лифте.'
        },
        'Glücklicherweise hatte ich mein Handy dabei und konnte die Feuerwehr anrufen.': {
          literal: 'К-счастью имел я мой мобильный при-себе и мог пожарную-службу позвонить',
          literary: 'К счастью, у меня был с собой мобильный, и я смог вызвать пожарную службу.'
        },
        'Oh, das tut mir leid.': {
          literal: 'О, это делает мне жаль',
          literary: 'О, мне очень жаль.'
        },
        'Ich kümmere mich sofort darum.': {
          literal: 'Я забочусь себя сразу об-этом',
          literary: 'Я сразу этим займусь.'
        },
      },
      vocabulary: [
        { de: 'die Garagentür', plural: 'die Garagentüren', ru: 'гаражная дверь', gender: 'feminin', collocation: 'wegen der Garagentür', example: 'Kommen Sie wegen der Garagentür?' },
        { de: 'der Aufzug', plural: 'die Aufzüge', ru: 'лифт', gender: 'maskulin', collocation: 'der Aufzug funktioniert nicht', example: 'Aber der Aufzug funktioniert nicht.' },
        { de: 'das Handy', plural: 'die Handys', ru: 'мобильный телефон', gender: 'neutrum', collocation: 'Handy dabei haben', example: 'Glücklicherweise hatte ich mein Handy dabei.' },
        { de: 'die Feuerwehr', plural: 'die Feuerwehren', ru: 'пожарная служба', gender: 'feminin', collocation: 'die Feuerwehr anrufen', example: 'Ich konnte die Feuerwehr anrufen.' },
        { de: 'reparieren', ru: 'ремонтировать', type: 'verb', forms: 'repariert, reparierte, hat repariert', example: 'Die wurde heute morgen repariert.' },
        { de: 'funktionieren', ru: 'работать, функционировать', type: 'verb', forms: 'funktioniert, funktionierte, hat funktioniert', example: 'Aber der Aufzug funktioniert nicht.' },
        { de: 'kaputt', ru: 'сломанный', type: 'adj', example: 'Oder ist sie schon wieder kaputt?' },
      ],
      practiceSentences: [
        { de: 'Die Tür wurde gestern repariert.', ru: 'Дверь вчера отремонтировали.', note: 'Passiv Präteritum' },
        { de: 'Der Aufzug funktioniert wieder.', ru: 'Лифт снова работает.', note: 'V2' },
        { de: 'Ich bin im Aufzug stecken geblieben.', ru: 'Я застрял в лифте.', note: 'Perfekt с sein' },
        { de: 'Ich kümmere mich um das Problem.', ru: 'Я займусь этой проблемой.', note: 'sich kümmern um + Akk' },
        { de: 'Hast du dein Handy dabei?', ru: 'У тебя с собой мобильный?', note: 'dabei haben' },
      ],
      question: {
        de: 'Was funktioniert nicht?',
        ru: 'Что не работает?',
        options: [
          { de: 'Die Garagentür', ru: 'Гаражная дверь' },
          { de: 'Der Aufzug', ru: 'Лифт' },
          { de: 'Die Heizung', ru: 'Отопление' },
        ],
        correct: 1,
        explanation: 'Госпожа Кренццо говорит: "Der Aufzug funktioniert nicht. Ich bin heute stecken geblieben".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Filmauswahl',
      type: 'диалог',
      text: 'Du, sehen wir uns den Animationsfilm "Hasi kommt in die Schule" an? Mann, gehst du noch in den Kindergarten oder was? Wenn du etwas mit Tieren sehen willst, dann können wir ja den Dokumentarfilm sehen. Ich will aber den Trickfilm sehen. Nix da, schau mal Fußball. Das schauen wir uns jetzt an. Da spielt unsere Lieblingsmannschaft. Na gut.',
      sentenceTranslations: {
        'Du, sehen wir uns den Animationsfilm "Hasi kommt in die Schule" an?': {
          literal: 'Ты, смотрим мы себе анимационный-фильм "Зайка идёт в школу"?',
          literary: 'Слушай, давай посмотрим мультфильм "Зайка идёт в школу"?'
        },
        'Mann, gehst du noch in den Kindergarten oder was?': {
          literal: 'Блин, ходишь ты ещё в детский-сад или что?',
          literary: 'Блин, ты что, ещё в детский сад ходишь?'
        },
        'Wenn du etwas mit Tieren sehen willst, dann können wir ja den Dokumentarfilm sehen.': {
          literal: 'Если ты что-то с животными видеть хочешь, тогда можем мы же документальный-фильм смотреть',
          literary: 'Если хочешь посмотреть что-то про животных, тогда можем посмотреть документальный фильм.'
        },
        'Ich will aber den Trickfilm sehen.': {
          literal: 'Я хочу но мультфильм видеть',
          literary: 'Но я хочу смотреть мультфильм.'
        },
        'Nix da, schau mal Fußball.': {
          literal: 'Ничего там, смотри-ка футбол',
          literary: 'Ничего подобного, смотри футбол.'
        },
        'Das schauen wir uns jetzt an.': {
          literal: 'Это смотрим мы себе сейчас',
          literary: 'Вот это мы сейчас и посмотрим.'
        },
        'Da spielt unsere Lieblingsmannschaft.': {
          literal: 'Там играет наша любимая-команда',
          literary: 'Там играет наша любимая команда.'
        },
        'Na gut.': {
          literal: 'Ну хорошо',
          literary: 'Ну ладно.'
        },
      },
      vocabulary: [
        { de: 'der Animationsfilm', plural: 'die Animationsfilme', ru: 'анимационный фильм', gender: 'maskulin', collocation: 'den Animationsfilm ansehen', example: 'Sehen wir uns den Animationsfilm an?' },
        { de: 'der Kindergarten', plural: 'die Kindergärten', ru: 'детский сад', gender: 'maskulin', collocation: 'in den Kindergarten gehen', example: 'Gehst du noch in den Kindergarten oder was?' },
        { de: 'der Dokumentarfilm', plural: 'die Dokumentarfilme', ru: 'документальный фильм', gender: 'maskulin', collocation: 'den Dokumentarfilm sehen', example: 'Dann können wir ja den Dokumentarfilm sehen.' },
        { de: 'der Trickfilm', plural: 'die Trickfilme', ru: 'мультфильм', gender: 'maskulin', collocation: 'den Trickfilm sehen', example: 'Ich will aber den Trickfilm sehen.' },
        { de: 'die Lieblingsmannschaft', plural: 'die Lieblingsmannschaften', ru: 'любимая команда', gender: 'feminin', collocation: 'unsere Lieblingsmannschaft spielt', example: 'Da spielt unsere Lieblingsmannschaft.' },
        { de: 'sich ansehen', ru: 'смотреть', type: 'verb', forms: 'sieht sich an, sah sich an, hat sich angesehen', example: 'Das schauen wir uns jetzt an.' },
      ],
      practiceSentences: [
        { de: 'Wir sehen uns einen Film an.', ru: 'Мы смотрим фильм.', note: 'отделяемая приставка' },
        { de: 'Ich will Fußball schauen.', ru: 'Я хочу смотреть футбол.', note: 'модальный + инфинитив' },
        { de: 'Gehst du noch zur Schule?', ru: 'Ты ещё ходишь в школу?', note: 'V1 (вопрос)' },
        { de: 'Schau mal das Bild an!', ru: 'Посмотри-ка на картинку!', note: 'императив, отделяемая' },
        { de: 'Da spielt meine Mannschaft.', ru: 'Там играет моя команда.', note: 'V2' },
      ],
      question: {
        de: 'Was schauen sie sich am Ende an?',
        ru: 'Что они в итоге будут смотреть?',
        options: [
          { de: 'Den Animationsfilm über Hasi', ru: 'Мультфильм про Зайку' },
          { de: 'Den Dokumentarfilm über Tiere', ru: 'Документальный фильм о животных' },
          { de: 'Fußball', ru: 'Футбол' },
        ],
        correct: 2,
        explanation: 'Решение принято: "schau mal Fußball. Das schauen wir uns jetzt an" — они будут смотреть футбол.'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Möbelkauf',
      type: 'диалог',
      text: 'Schatz, schau mal, das Sofa hier. Ist das nicht wunderschön? Viel zu bunt. Außerdem ist unser altes Sofa noch gut. Wir brauchen einen neuen Tisch. Schau mal, der da. Der ist schön, tolle Farbe. Stimmt, aber dann kaufen wir auch noch neue Stühle dazu. Die da sind schön. Nein, nein, die alten Stühle von Mama sind wertvoll. Die sind schon über 100 Jahre alt. Wie du meinst, Schatz.',
      sentenceTranslations: {
        'Schatz, schau mal, das Sofa hier.': {
          literal: 'Дорогая, посмотри-ка, диван здесь',
          literary: 'Дорогая, посмотри на этот диван.'
        },
        'Ist das nicht wunderschön?': {
          literal: 'Есть это не чудесно-красиво?',
          literary: 'Разве он не прекрасен?'
        },
        'Viel zu bunt.': {
          literal: 'Слишком пёстро',
          literary: 'Слишком пёстрый.'
        },
        'Außerdem ist unser altes Sofa noch gut.': {
          literal: 'Кроме-того есть наш старый диван ещё хорош',
          literary: 'К тому же наш старый диван ещё хороший.'
        },
        'Wir brauchen einen neuen Tisch.': {
          literal: 'Мы нуждаемся новый стол',
          literary: 'Нам нужен новый стол.'
        },
        'Schau mal, der da.': {
          literal: 'Посмотри-ка, тот там',
          literary: 'Посмотри, вот тот.'
        },
        'Der ist schön, tolle Farbe.': {
          literal: 'Тот есть красивый, отличный цвет',
          literary: 'Он красивый, отличный цвет.'
        },
        'Stimmt, aber dann kaufen wir auch noch neue Stühle dazu.': {
          literal: 'Верно, но тогда покупаем мы также ещё новые стулья к-этому',
          literary: 'Верно, но тогда купим ещё и новые стулья к нему.'
        },
        'Die da sind schön.': {
          literal: 'Те там есть красивые',
          literary: 'Вот те красивые.'
        },
        'Nein, nein, die alten Stühle von Mama sind wertvoll.': {
          literal: 'Нет, нет, старые стулья от мамы есть ценные',
          literary: 'Нет-нет, старые мамины стулья ценные.'
        },
        'Die sind schon über 100 Jahre alt.': {
          literal: 'Они есть уже свыше 100 лет старые',
          literary: 'Им уже больше 100 лет.'
        },
        'Wie du meinst, Schatz.': {
          literal: 'Как ты думаешь, дорогая',
          literary: 'Как скажешь, дорогая.'
        },
      },
      vocabulary: [
        { de: 'das Sofa', plural: 'die Sofas', ru: 'диван', gender: 'neutrum', collocation: 'das Sofa hier', example: 'Schatz, schau mal, das Sofa hier.' },
        { de: 'der Tisch', plural: 'die Tische', ru: 'стол', gender: 'maskulin', collocation: 'einen neuen Tisch brauchen', example: 'Wir brauchen einen neuen Tisch.' },
        { de: 'der Stuhl', plural: 'die Stühle', ru: 'стул', gender: 'maskulin', collocation: 'neue Stühle kaufen', example: 'Dann kaufen wir auch noch neue Stühle dazu.' },
        { de: 'die Farbe', plural: 'die Farben', ru: 'цвет', gender: 'feminin', collocation: 'tolle Farbe', example: 'Der ist schön, tolle Farbe.' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'braucht, brauchte, hat gebraucht', example: 'Wir brauchen einen neuen Tisch.' },
        { de: 'wunderschön', ru: 'прекрасный', type: 'adj', example: 'Ist das nicht wunderschön?' },
        { de: 'bunt', ru: 'пёстрый', type: 'adj', example: 'Viel zu bunt.' },
        { de: 'wertvoll', ru: 'ценный', type: 'adj', example: 'Die alten Stühle von Mama sind wertvoll.' },
      ],
      practiceSentences: [
        { de: 'Das Sofa ist zu teuer.', ru: 'Диван слишком дорогой.', note: 'V2' },
        { de: 'Wir kaufen neue Möbel.', ru: 'Мы покупаем новую мебель.', note: 'V2' },
        { de: 'Der Tisch ist sehr schön.', ru: 'Стол очень красивый.', note: 'V2' },
        { de: 'Die Stühle sind alt.', ru: 'Стулья старые.', note: 'V2' },
        { de: 'Schau mal den Schrank an!', ru: 'Посмотри на шкаф!', note: 'императив, отделяемая' },
      ],
      question: {
        de: 'Was wollen sie kaufen?',
        ru: 'Что они хотят купить?',
        options: [
          { de: 'Ein neues Sofa und Stühle', ru: 'Новый диван и стулья' },
          { de: 'Einen neuen Tisch und neue Stühle', ru: 'Новый стол и новые стулья' },
          { de: 'Nur einen neuen Tisch', ru: 'Только новый стол' },
        ],
        correct: 2,
        explanation: 'Муж отвергает диван ("unser altes Sofa noch gut"), они соглашаются на стол, но старые стулья остаются ("die alten Stühle von Mama sind wertvoll").'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Möckel',
      type: 'интервью',
      text: 'Hallo und herzlich willkommen bei unserer Sendung "Ausbildung oder Studium". Wir haben heute Frau Möckel im Studio und werden über das Thema Ausbildung sprechen. Frau Möckel, wann sollte man anfangen, an das Thema Ausbildung zu denken? Ja, das sollte noch während der Schulzeit geschehen, damit man sich auch rechtzeitig bewerben kann. Nach der Schule kann es schon zu spät sein. Man könnte natürlich auch erstmal ein Praktikum machen, um zu sehen, ob der Beruf zu einem passt. Bekommt ein Azubi eigentlich Urlaub oder hat er Ferien wie in der Schule? Es ist ja keine Schule mehr, auch wenn das jetzt Berufsschule heißt. Also haben die Azubis jetzt Urlaub und keine Ferien mehr. Wie ist es mit der Bezahlung? Da sie ja arbeiten, bekommen sie ein Gehalt. Dieses Gehalt steigt mit den Jahren, das heißt, sie bekommen im letzten Ausbildungsjahr mehr Geld als im ersten. Wenn das Geld nicht reicht, bekommen die Azubis dann so etwas wie ein Stipendium? Naja, ein Stipendium bekommen sie nicht, aber wenn sie nicht mehr bei ihren Eltern wohnen, dann können sie einen Antrag stellen und dann bekommen sie vielleicht Geld vom Staat, um die Miete bezahlen zu können oder ihr Essen. Aha. Was können Azubis tun, wenn sie Probleme in ihrem Betrieb haben? Dann können sie in der Berufsschule, beim Arbeitsamt oder bei der Industrie- und Handelskammer um Hilfe bitten. Wenn sie aber zum Beispiel permanent zu spät kommen oder nicht in die Berufsschule gehen, dann kann man ihnen auch kündigen. Vielen Dank, Frau Möckel.',
      sentenceTranslations: {
        'Hallo und herzlich willkommen bei unserer Sendung "Ausbildung oder Studium".': {
          literal: 'Привет и сердечно добро-пожаловать у нашей передачи "Обучение или учёба"',
          literary: 'Здравствуйте и добро пожаловать в нашу передачу "Профобразование или университет".'
        },
        'Wir haben heute Frau Möckel im Studio und werden über das Thema Ausbildung sprechen.': {
          literal: 'Мы имеем сегодня госпожу Мёкель в студии и будем о теме обучение говорить',
          literary: 'У нас сегодня в студии госпожа Мёкель, и мы будем говорить о профессиональном обучении.'
        },
        'Frau Möckel, wann sollte man anfangen, an das Thema Ausbildung zu denken?': {
          literal: 'Госпожа Мёкель, когда следовало-бы человеку начинать, о теме обучение думать?',
          literary: 'Госпожа Мёкель, когда следует начинать думать о профессиональном обучении?'
        },
        'Ja, das sollte noch während der Schulzeit geschehen, damit man sich auch rechtzeitig bewerben kann.': {
          literal: 'Да, это следовало-бы ещё во-время школьного-времени происходить, чтобы человек себя также своевременно подать-заявку может',
          literary: 'Да, это должно происходить ещё во время учёбы в школе, чтобы можно было вовремя подать заявление.'
        },
        'Nach der Schule kann es schon zu spät sein.': {
          literal: 'После школы может оно уже слишком поздно быть',
          literary: 'После школы может быть уже слишком поздно.'
        },
        'Man könnte natürlich auch erstmal ein Praktikum machen, um zu sehen, ob der Beruf zu einem passt.': {
          literal: 'Человек мог-бы конечно также сначала практику делать, чтобы видеть, ли профессия к одному подходит',
          literary: 'Можно, конечно, сначала пройти практику, чтобы увидеть, подходит ли профессия.'
        },
        'Bekommt ein Azubi eigentlich Urlaub oder hat er Ferien wie in der Schule?': {
          literal: 'Получает ученик собственно отпуск или имеет он каникулы как в школе?',
          literary: 'А ученик получает отпуск или у него каникулы как в школе?'
        },
        'Es ist ja keine Schule mehr, auch wenn das jetzt Berufsschule heißt.': {
          literal: 'Это есть же никакая школа больше, также когда это теперь профшкола называется',
          literary: 'Это же больше не школа, даже если теперь называется профессиональная школа.'
        },
        'Also haben die Azubis jetzt Urlaub und keine Ferien mehr.': {
          literal: 'Итак имеют ученики теперь отпуск и никакие каникулы больше',
          literary: 'Итак, у учеников теперь отпуск, а не каникулы.'
        },
        'Wie ist es mit der Bezahlung?': {
          literal: 'Как есть оно с оплатой?',
          literary: 'А как насчёт оплаты?'
        },
        'Da sie ja arbeiten, bekommen sie ein Gehalt.': {
          literal: 'Так-как они же работают, получают они зарплату',
          literary: 'Поскольку они работают, они получают зарплату.'
        },
        'Dieses Gehalt steigt mit den Jahren, das heißt, sie bekommen im letzten Ausbildungsjahr mehr Geld als im ersten.': {
          literal: 'Эта зарплата растёт с годами, это значит, они получают в последнем году-обучения больше денег чем в первом',
          literary: 'Эта зарплата растёт с годами, то есть в последний год обучения они получают больше денег, чем в первый.'
        },
        'Wenn das Geld nicht reicht, bekommen die Azubis dann so etwas wie ein Stipendium?': {
          literal: 'Если деньги не достаточны, получают ученики тогда что-то как стипендию?',
          literary: 'Если денег не хватает, ученики получают что-то вроде стипендии?'
        },
        'Naja, ein Stipendium bekommen sie nicht, aber wenn sie nicht mehr bei ihren Eltern wohnen, dann können sie einen Antrag stellen und dann bekommen sie vielleicht Geld vom Staat, um die Miete bezahlen zu können oder ihr Essen.': {
          literal: 'Ну, стипендию получают они не, но если они не больше у их родителей живут, тогда могут они заявление подать и тогда получают они возможно деньги от государства, чтобы квартплату платить мочь или их еду',
          literary: 'Ну, стипендию они не получают, но если они больше не живут с родителями, то могут подать заявление и получить деньги от государства на оплату жилья или еды.'
        },
        'Aha.': {
          literal: 'Ага',
          literary: 'Ага.'
        },
        'Was können Azubis tun, wenn sie Probleme in ihrem Betrieb haben?': {
          literal: 'Что могут ученики делать, если они проблемы в их предприятии имеют?',
          literary: 'Что могут делать ученики, если у них проблемы на предприятии?'
        },
        'Dann können sie in der Berufsschule, beim Arbeitsamt oder bei der Industrie- und Handelskammer um Hilfe bitten.': {
          literal: 'Тогда могут они в профшколе, у биржи-труда или у промышленной и торговой палаты о помощи просить',
          literary: 'Тогда они могут обратиться за помощью в профшколу, на биржу труда или в торгово-промышленную палату.'
        },
        'Wenn sie aber zum Beispiel permanent zu spät kommen oder nicht in die Berufsschule gehen, dann kann man ihnen auch kündigen.': {
          literal: 'Если они но например постоянно слишком поздно приходят или не в профшколу ходят, тогда может человек им также уволить',
          literary: 'Но если они, например, постоянно опаздывают или не ходят в профшколу, то их могут уволить.'
        },
        'Vielen Dank, Frau Möckel.': {
          literal: 'Многое спасибо, госпожа Мёкель',
          literary: 'Большое спасибо, госпожа Мёкель.'
        },
      },
      vocabulary: [
        { de: 'die Sendung', plural: 'die Sendungen', ru: 'передача', gender: 'feminin', collocation: 'unsere Sendung', example: 'Herzlich willkommen bei unserer Sendung "Ausbildung oder Studium".' },
        { de: 'die Ausbildung', plural: 'die Ausbildungen', ru: 'профессиональное обучение', gender: 'feminin', collocation: 'Thema Ausbildung', example: 'Wir werden über das Thema Ausbildung sprechen.' },
        { de: 'die Schulzeit', ru: 'школьное время', gender: 'feminin', collocation: 'während der Schulzeit', example: 'Das sollte noch während der Schulzeit geschehen.' },
        { de: 'das Praktikum', plural: 'die Praktika', ru: 'практика', gender: 'neutrum', collocation: 'ein Praktikum machen', example: 'Man könnte natürlich auch erstmal ein Praktikum machen.' },
        { de: 'der Beruf', plural: 'die Berufe', ru: 'профессия', gender: 'maskulin', collocation: 'ob der Beruf passt', example: 'Um zu sehen, ob der Beruf zu einem passt.' },
        { de: 'der Azubi', plural: 'die Azubis', ru: 'ученик (проф.)', gender: 'maskulin', collocation: 'ein Azubi bekommt', example: 'Bekommt ein Azubi eigentlich Urlaub?' },
        { de: 'das Gehalt', plural: 'die Gehälter', ru: 'зарплата', gender: 'neutrum', collocation: 'ein Gehalt bekommen', example: 'Da sie ja arbeiten, bekommen sie ein Gehalt.' },
        { de: 'der Antrag', plural: 'die Anträge', ru: 'заявление', gender: 'maskulin', collocation: 'einen Antrag stellen', example: 'Dann können sie einen Antrag stellen.' },
        { de: 'die Miete', plural: 'die Mieten', ru: 'квартплата', gender: 'feminin', collocation: 'die Miete bezahlen', example: 'Um die Miete bezahlen zu können.' },
        { de: 'der Betrieb', plural: 'die Betriebe', ru: 'предприятие', gender: 'maskulin', collocation: 'in ihrem Betrieb', example: 'Was können Azubis tun, wenn sie Probleme in ihrem Betrieb haben?' },
        { de: 'sich bewerben', ru: 'подавать заявление', type: 'verb', forms: 'bewirbt sich, bewarb sich, hat sich beworben', example: 'Damit man sich auch rechtzeitig bewerben kann.' },
        { de: 'steigen', ru: 'расти, повышаться', type: 'verb', forms: 'steigt, stieg, ist gestiegen', example: 'Dieses Gehalt steigt mit den Jahren.' },
        { de: 'kündigen', ru: 'увольнять', type: 'verb', forms: 'kündigt, kündigte, hat gekündigt', example: 'Dann kann man ihnen auch kündigen.' },
        { de: 'rechtzeitig', ru: 'своевременно', type: 'adv', example: 'Damit man sich auch rechtzeitig bewerben kann.' },
        { de: 'permanent', ru: 'постоянно', type: 'adv', example: 'Wenn sie permanent zu spät kommen.' },
      ],
      practiceSentences: [
        { de: 'Man sollte früh anfangen.', ru: 'Следует рано начинать.', note: 'модальный + инфинитив' },
        { de: 'Ich möchte ein Praktikum machen.', ru: 'Я хотел бы пройти практику.', note: 'модальный + инфинитив' },
        { de: 'Azubis bekommen ein Gehalt.', ru: 'Ученики получают зарплату.', note: 'V2' },
        { de: 'Sie können einen Antrag stellen.', ru: 'Они могут подать заявление.', note: 'модальный + инфинитив' },
        { de: 'Wenn ich Probleme habe, bitte ich um Hilfe.', ru: 'Если у меня проблемы, я прошу о помощи.', note: 'wenn-придаточное + V2' },
      ],
      question: {
        de: 'Haben Azubis Ferien wie in der Schule?',
        ru: 'У учеников есть каникулы как в школе?',
        options: [
          { de: 'Ja, sie haben Ferien wie in der Schule', ru: 'Да, у них каникулы как в школе' },
          { de: 'Nein, sie haben Urlaub und keine Ferien', ru: 'Нет, у них отпуск, а не каникулы' },
          { de: 'Sie haben weder Ferien noch Urlaub', ru: 'У них нет ни каникул, ни отпуска' },
        ],
        correct: 1,
        explanation: 'Фрау Мёкель объясняет: "Es ist ja keine Schule mehr... Also haben die Azubis jetzt Urlaub und keine Ferien mehr".'
      }
    },
  ],

  /* ─── Агрегированный словарь из всех текстов ─── */
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Sonderangebote).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'wegen + Genitiv: wegen eines Stromausfalls, wegen der Garagentür',
    'Konjunktiv II (würde): Ich würde lieber am Nachmittag gehen',
    'Passiv Präteritum: Die wurde heute morgen repariert',
    'weder...noch: brauche weder Bus noch Straßenbahn',
    'Модальные глаголы в Präteritum: konnte, wollten, sollte',
    'damit-Nebensatz (цель): damit man sich rechtzeitig bewerben kann',
    'wenn...dann (условие): Wenn sie zu spät kommen, kann man ihnen kündigen',
    'Отделяемые приставки: ansehen, einkaufen, anbieten, zurückrufen',
  ],
};

LESSONS.push(LESSON_17);
