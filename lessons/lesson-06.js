/* ═══════════════════════════════════════════════════════════
   Lesson 06 — Goethe Zertifikat A2 Hören Modelltest 2025
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_06 = {
  id: 'lesson-06',
  number: 6,
  title: 'Goethe A2 Hören — Modelltest 2025',
  subtitle: 'Geburtstag, Verkehr, Arztpraxis, Handball, Flughafen, Hochzeit, TV, Training, Arbeitsamt, Uni, Bar, Berlin',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-06',
  videoUrl: 'https://www.youtube.com/watch?v=sch4Y0FqOSs',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Cornelia',
      type: 'телефонное сообщение',
      text: 'Hallo Mama, hier ist Cornelia. Ich wollte dir nur Bescheid sagen, dass wir nun doch nicht zu deinem Geburtstag kommen. Außerdem muss Thomas zu Weihnachten arbeiten. Da hat er Dienst. Also können wir nur zu Silvester kommen und bleiben dann aber bis zum zweiten Januar. OK? Tut mir leid.',
      sentenceTranslations: {
        'Hallo Mama, hier ist Cornelia.': {
          literal: 'Привет мама, здесь есть Корнелия',
          literary: 'Привет, мама, это Корнелия.'
        },
        'Ich wollte dir nur Bescheid sagen, dass wir nun doch nicht zu deinem Geburtstag kommen.': {
          literal: 'Я хотела тебе только весть сказать, что мы теперь всё же не к твоему дню рождения приходим',
          literary: 'Я хотела тебе только сообщить, что мы всё-таки не приедем на твой день рождения.'
        },
        'Außerdem muss Thomas zu Weihnachten arbeiten.': {
          literal: 'Кроме того должен Томас на Рождество работать',
          literary: 'Кроме того, Томас должен работать на Рождество.'
        },
        'Da hat er Dienst.': {
          literal: 'Там имеет он службу',
          literary: 'У него дежурство.'
        },
        'Also können wir nur zu Silvester kommen und bleiben dann aber bis zum zweiten Januar.': {
          literal: 'Итак можем мы только на Новый год прийти и остаёмся тогда но до второго января',
          literary: 'Поэтому мы можем приехать только на Новый год и останемся до второго января.'
        },
        'OK?': {
          literal: 'Окей?',
          literary: 'Хорошо?'
        },
        'Tut mir leid.': {
          literal: 'Делает мне жаль',
          literary: 'Мне жаль.'
        },
      },
      vocabulary: [
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'zu deinem Geburtstag kommen', example: 'Dass wir nun doch nicht zu deinem Geburtstag kommen.' },
        { de: 'das Weihnachten', ru: 'Рождество', gender: 'neutrum', collocation: 'zu Weihnachten arbeiten', example: 'Außerdem muss Thomas zu Weihnachten arbeiten.' },
        { de: 'der Dienst', plural: 'die Dienste', ru: 'дежурство, служба', gender: 'maskulin', collocation: 'Dienst haben', example: 'Da hat er Dienst.' },
        { de: 'das Silvester', ru: 'Новый год (канун)', gender: 'neutrum', collocation: 'zu Silvester kommen', example: 'Also können wir nur zu Silvester kommen.' },
        { de: 'Bescheid sagen', ru: 'сообщить', type: 'verb', forms: 'sagt Bescheid, sagte Bescheid, hat Bescheid gesagt', example: 'Ich wollte dir nur Bescheid sagen.' },
        { de: 'bleiben', ru: 'оставаться', type: 'verb', forms: 'bleibe, blieb, ist geblieben', example: 'Bleiben dann aber bis zum zweiten Januar.' },
        { de: 'außerdem', ru: 'кроме того', type: 'adv', example: 'Außerdem muss Thomas zu Weihnachten arbeiten.' },
        { de: 'doch nicht', ru: 'всё-таки не', type: 'adv', example: 'Dass wir nun doch nicht zu deinem Geburtstag kommen.' },
      ],
      practiceSentences: [
        { de: 'Ich muss heute arbeiten.', ru: 'Я должен сегодня работать.', note: 'модальный muss V2 + инфинитив' },
        { de: 'Sie kann zu Ostern kommen.', ru: 'Она может приехать на Пасху.', note: 'модальный kann V2 + инфинитив' },
        { de: 'Wir wollen dir Bescheid sagen.', ru: 'Мы хотим тебе сообщить.', note: 'модальный wollen V2 + инфинитив' },
        { de: 'Er hat morgen Dienst.', ru: 'У него завтра дежурство.', note: 'haben V2' },
        { de: 'Ihr könnt bis Montag bleiben.', ru: 'Вы можете остаться до понедельника.', note: 'модальный könnt V2 + инфинитив' },
      ],
      question: {
        de: 'Wann kommt Cornelia zu ihrer Mutter?',
        ru: 'Когда Корнелия приедет к своей маме?',
        options: [
          { de: 'Zum Geburtstag', ru: 'На день рождения' },
          { de: 'Zu Weihnachten', ru: 'На Рождество' },
          { de: 'Zu Silvester', ru: 'На Новый год' },
        ],
        correct: 2,
        explanation: 'Корнелия говорит: "Also können wir nur zu Silvester kommen und bleiben dann aber bis zum zweiten Januar."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Verkehrsinfo',
      type: 'дорожное объявление',
      text: 'Und hier die aktuelle Verkehrsinfo mit Staumeldungen, Blitzern, Radarfallen und Baustellen. Die A3 von Frankfurt Richtung Würzburg ist wegen eines Unfalls zwischen Seligenstadt und Seligenstädter Dreieck vorübergehend gesperrt. Fahren Sie bitte vorsichtig. Auf der A66 zwischen Wiesbaden und Schiersteiner Kreuz befinden sich Reifen.',
      sentenceTranslations: {
        'Und hier die aktuelle Verkehrsinfo mit Staumeldungen, Blitzern, Radarfallen und Baustellen.': {
          literal: 'И здесь актуальная дорожная информация с сообщениями о пробках, камерами, радарами и стройками',
          literary: 'А теперь актуальная дорожная сводка с информацией о пробках, камерах, радарах и дорожных работах.'
        },
        'Die A3 von Frankfurt Richtung Würzburg ist wegen eines Unfalls zwischen Seligenstadt und Seligenstädter Dreieck vorübergehend gesperrt.': {
          literal: 'А3 от Франкфурта направление Вюрцбург есть из-за аварии между Зелигенштадт и Зелигенштадтской развязкой временно перекрыта',
          literary: 'Автобан А3 от Франкфурта в направлении Вюрцбурга временно перекрыт из-за аварии между Зелигенштадтом и развязкой Зелигенштадт.'
        },
        'Fahren Sie bitte vorsichtig.': {
          literal: 'Езжайте Вы пожалуйста осторожно',
          literary: 'Пожалуйста, будьте осторожны за рулём.'
        },
        'Auf der A66 zwischen Wiesbaden und Schiersteiner Kreuz befinden sich Reifen.': {
          literal: 'На А66 между Висбаден и Ширштайнер Кройц находятся шины',
          literary: 'На А66 между Висбаденом и развязкой Ширштайн находятся шины на дороге.'
        },
      },
      vocabulary: [
        { de: 'die Verkehrsinfo', plural: 'die Verkehrsinfos', ru: 'дорожная информация', gender: 'feminin', collocation: 'aktuelle Verkehrsinfo', example: 'Und hier die aktuelle Verkehrsinfo mit Staumeldungen, Blitzern, Radarfallen und Baustellen.' },
        { de: 'die Staumeldung', plural: 'die Staumeldungen', ru: 'сообщение о пробке', gender: 'feminin', collocation: 'mit Staumeldungen', example: 'Und hier die aktuelle Verkehrsinfo mit Staumeldungen, Blitzern, Radarfallen und Baustellen.' },
        { de: 'die Baustelle', plural: 'die Baustellen', ru: 'стройка, дорожные работы', gender: 'feminin', collocation: 'wegen Baustellen', example: 'Und hier die aktuelle Verkehrsinfo mit Staumeldungen, Blitzern, Radarfallen und Baustellen.' },
        { de: 'der Unfall', plural: 'die Unfälle', ru: 'авария', gender: 'maskulin', collocation: 'wegen eines Unfalls', example: 'Die A3 von Frankfurt Richtung Würzburg ist wegen eines Unfalls zwischen Seligenstadt und Seligenstädter Dreieck vorübergehend gesperrt.' },
        { de: 'der Reifen', plural: 'die Reifen', ru: 'шина', gender: 'maskulin', collocation: 'Reifen auf der Straße', example: 'Auf der A66 zwischen Wiesbaden und Schiersteiner Kreuz befinden sich Reifen.' },
        { de: 'sich befinden', ru: 'находиться', type: 'verb', forms: 'befindet sich, befand sich, hat sich befunden', example: 'Auf der A66 zwischen Wiesbaden und Schiersteiner Kreuz befinden sich Reifen.' },
        { de: 'vorübergehend', ru: 'временно', type: 'adv', example: 'Die A3 ist wegen eines Unfalls vorübergehend gesperrt.' },
        { de: 'vorsichtig', ru: 'осторожно', type: 'adv', example: 'Fahren Sie bitte vorsichtig.' },
      ],
      practiceSentences: [
        { de: 'Die Straße ist gesperrt.', ru: 'Улица перекрыта.', note: 'ist gesperrt — Passiv' },
        { de: 'Fahren Sie langsam!', ru: 'Езжайте медленно!', note: 'императив V1' },
        { de: 'Der Zug ist wegen Schnee verspätet.', ru: 'Поезд опаздывает из-за снега.', note: 'ist verspätet — Zustandspassiv' },
        { de: 'Hier befinden sich Geschäfte.', ru: 'Здесь находятся магазины.', note: 'V2 с возвратным sich' },
        { de: 'Die Autobahn ist frei.', ru: 'Автобан свободен.', note: 'ist V2' },
      ],
      question: {
        de: 'Warum ist die A3 gesperrt?',
        ru: 'Почему перекрыта трасса А3?',
        options: [
          { de: 'Wegen Bauarbeiten', ru: 'Из-за дорожных работ' },
          { de: 'Wegen eines Unfalls', ru: 'Из-за аварии' },
          { de: 'Wegen Reifen auf der Straße', ru: 'Из-за шин на дороге' },
        ],
        correct: 1,
        explanation: 'В объявлении сказано: "Die A3 von Frankfurt Richtung Würzburg ist wegen eines Unfalls... vorübergehend gesperrt."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Schwester Renate',
      type: 'сообщение от медсестры',
      text: 'Herr Cantz, hier ist Schwester Renate. Ich rufe im Auftrag von Dr. Koslowski an. Ich soll Ihnen sagen, dass Sie heute erst um 12 Uhr 30 in seine Praxis kommen sollen und nicht schon um 11 Uhr. Er ist noch im Krankenhaus und wird sich etwas verspäten. Rufen Sie mich doch bitte zurück.',
      sentenceTranslations: {
        'Herr Cantz, hier ist Schwester Renate.': {
          literal: 'Господин Канц, здесь есть сестра Рената',
          literary: 'Господин Канц, это медсестра Рената.'
        },
        'Ich rufe im Auftrag von Dr. Koslowski an.': {
          literal: 'Я звоню по поручению от доктора Козловски',
          literary: 'Я звоню по поручению доктора Козловски.'
        },
        'Ich soll Ihnen sagen, dass Sie heute erst um 12 Uhr 30 in seine Praxis kommen sollen und nicht schon um 11 Uhr.': {
          literal: 'Я должна Вам сказать, что Вы сегодня только в 12 часов 30 в его практику прийти должны и не уже в 11 часов',
          literary: 'Я должна Вам передать, что Вы должны прийти в его кабинет сегодня только в 12:30, а не в 11 часов.'
        },
        'Er ist noch im Krankenhaus und wird sich etwas verspäten.': {
          literal: 'Он есть ещё в больнице и будет себя немного опаздывать',
          literary: 'Он ещё в больнице и немного задержится.'
        },
        'Rufen Sie mich doch bitte zurück.': {
          literal: 'Позвоните Вы мне же пожалуйста обратно',
          literary: 'Пожалуйста, перезвоните мне.'
        },
      },
      vocabulary: [
        { de: 'die Schwester', plural: 'die Schwestern', ru: 'медсестра', gender: 'feminin', collocation: 'Schwester Renate', example: 'Herr Cantz, hier ist Schwester Renate.' },
        { de: 'der Auftrag', plural: 'die Aufträge', ru: 'поручение', gender: 'maskulin', collocation: 'im Auftrag von', example: 'Ich rufe im Auftrag von Dr. Koslowski an.' },
        { de: 'die Praxis', plural: 'die Praxen', ru: 'кабинет врача', gender: 'feminin', collocation: 'in seine Praxis kommen', example: 'Dass Sie heute erst um 12 Uhr 30 in seine Praxis kommen sollen.' },
        { de: 'das Krankenhaus', plural: 'die Krankenhäuser', ru: 'больница', gender: 'neutrum', collocation: 'im Krankenhaus sein', example: 'Er ist noch im Krankenhaus und wird sich etwas verspäten.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'rufe an, rief an, hat angerufen', example: 'Ich rufe im Auftrag von Dr. Koslowski an.' },
        { de: 'sich verspäten', ru: 'опаздывать', type: 'verb', forms: 'verspäte mich, verspätete mich, hat sich verspätet', example: 'Er ist noch im Krankenhaus und wird sich etwas verspäten.' },
        { de: 'zurückrufen', ru: 'перезвонить', type: 'verb', forms: 'rufe zurück, rief zurück, hat zurückgerufen', example: 'Rufen Sie mich doch bitte zurück.' },
        { de: 'erst', ru: 'только (не раньше)', type: 'adv', example: 'Dass Sie heute erst um 12 Uhr 30 in seine Praxis kommen sollen.' },
      ],
      practiceSentences: [
        { de: 'Ich rufe Sie morgen an.', ru: 'Я позвоню Вам завтра.', note: 'отделяемая приставка an в конце' },
        { de: 'Sie soll um 10 Uhr kommen.', ru: 'Она должна прийти в 10 часов.', note: 'модальный soll V2 + инфинитив' },
        { de: 'Er verspätet sich oft.', ru: 'Он часто опаздывает.', note: 'возвратный sich V2' },
        { de: 'Rufen Sie bitte zurück!', ru: 'Пожалуйста, перезвоните!', note: 'императив, приставка в конце' },
        { de: 'Wir kommen erst um 15 Uhr.', ru: 'Мы придём только в 15 часов.', note: 'V2' },
      ],
      question: {
        de: 'Wann soll Herr Cantz heute in die Praxis kommen?',
        ru: 'Во сколько господин Канц должен прийти сегодня в кабинет врача?',
        options: [
          { de: 'Um 11:00 Uhr', ru: 'В 11:00' },
          { de: 'Um 12:00 Uhr', ru: 'В 12:00' },
          { de: 'Um 12:30 Uhr', ru: 'В 12:30' },
        ],
        correct: 2,
        explanation: 'Медсестра говорит: "Sie heute erst um 12 Uhr 30 in seine Praxis kommen sollen und nicht schon um 11 Uhr."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Handball',
      type: 'спортивные новости',
      text: 'Der Handballsportclub aus Sachsen hat am Samstag ein Spitzenspiel gegen die Wiesbadener geliefert. Er gewann 25 zu 22. Zu Beginn lagen die Damen aus Wiesbaden noch mit 19:16 in Führung, aber am Ende kam dann doch der verdiente Sieg. Das letzte Spiel vor einer Woche endete ja bekanntlich mit einem enttäuschenden Unentschieden 21 zu 21.',
      sentenceTranslations: {
        'Der Handballsportclub aus Sachsen hat am Samstag ein Spitzenspiel gegen die Wiesbadener geliefert.': {
          literal: 'Гандбольный спортклуб из Саксонии имеет в субботу топ-игру против висбаденцев поставил',
          literary: 'Гандбольный клуб из Саксонии провёл в субботу важный матч против команды из Висбадена.'
        },
        'Er gewann 25 zu 22.': {
          literal: 'Он выиграл 25 к 22',
          literary: 'Он выиграл со счётом 25:22.'
        },
        'Zu Beginn lagen die Damen aus Wiesbaden noch mit 19:16 in Führung, aber am Ende kam dann doch der verdiente Sieg.': {
          literal: 'К началу лежали дамы из Висбадена ещё с 19:16 в лидерстве, но в конце пришла тогда всё же заслуженная победа',
          literary: 'В начале женская команда из Висбадена ещё лидировала со счётом 19:16, но в конце всё же пришла заслуженная победа.'
        },
        'Das letzte Spiel vor einer Woche endete ja bekanntlich mit einem enttäuschenden Unentschieden 21 zu 21.': {
          literal: 'Последняя игра неделю назад закончилась ведь как известно с разочаровывающей ничьей 21 к 21',
          literary: 'Последняя игра неделю назад, как известно, закончилась разочаровывающей ничьей 21:21.'
        },
      },
      vocabulary: [
        { de: 'das Spitzenspiel', plural: 'die Spitzenspiele', ru: 'важный матч', gender: 'neutrum', collocation: 'ein Spitzenspiel liefern', example: 'Der Handballsportclub aus Sachsen hat am Samstag ein Spitzenspiel gegen die Wiesbadener geliefert.' },
        { de: 'die Führung', plural: 'die Führungen', ru: 'лидерство', gender: 'feminin', collocation: 'in Führung liegen', example: 'Zu Beginn lagen die Damen aus Wiesbaden noch mit 19:16 in Führung.' },
        { de: 'der Sieg', plural: 'die Siege', ru: 'победа', gender: 'maskulin', collocation: 'der verdiente Sieg', example: 'Aber am Ende kam dann doch der verdiente Sieg.' },
        { de: 'das Unentschieden', plural: 'die Unentschieden', ru: 'ничья', gender: 'neutrum', collocation: 'mit einem Unentschieden enden', example: 'Das letzte Spiel vor einer Woche endete ja bekanntlich mit einem enttäuschenden Unentschieden 21 zu 21.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinne, gewann, hat gewonnen', example: 'Er gewann 25 zu 22.' },
        { de: 'enden', ru: 'заканчиваться', type: 'verb', forms: 'endet, endete, hat geendet', example: 'Das letzte Spiel vor einer Woche endete ja bekanntlich mit einem enttäuschenden Unentschieden 21 zu 21.' },
        { de: 'verdient', ru: 'заслуженный', type: 'adj', example: 'Aber am Ende kam dann doch der verdiente Sieg.' },
        { de: 'enttäuschend', ru: 'разочаровывающий', type: 'adj', example: 'Das letzte Spiel endete mit einem enttäuschenden Unentschieden.' },
      ],
      practiceSentences: [
        { de: 'Das Team gewann 3 zu 1.', ru: 'Команда выиграла 3:1.', note: 'Präteritum V2' },
        { de: 'Wir haben gut gespielt.', ru: 'Мы хорошо сыграли.', note: 'Perfekt: haben V2 + Partizip II' },
        { de: 'Sie lagen in Führung.', ru: 'Они лидировали.', note: 'Präteritum V2' },
        { de: 'Das Spiel endete 0 zu 0.', ru: 'Игра закончилась 0:0.', note: 'Präteritum V2' },
        { de: 'Er hat ein Tor geschossen.', ru: 'Он забил гол.', note: 'Perfekt: hat V2 + Partizip II' },
      ],
      question: {
        de: 'Wie endete das Handballspiel am Samstag?',
        ru: 'Как закончился гандбольный матч в субботу?',
        options: [
          { de: '21 zu 21', ru: '21:21' },
          { de: '25 zu 22', ru: '25:22' },
          { de: '19 zu 16', ru: '19:16' },
        ],
        correct: 1,
        explanation: 'В тексте указано: "Er gewann 25 zu 22" — команда из Саксонии выиграла с таким счётом.'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Flughafen',
      type: 'объявления в аэропорту',
      text: 'Der Lufthansa-Flug LH 2462 nach Helsinki muss storniert werden. Die Passagiere werden gebeten, sich am Informationsschalter 1 zu melden. Achtung, letzter Aufruf für die Passagiere des Lufthansa-Fluges LH 2528 nach Moskau. Begeben Sie sich bitte unverzüglich zum Flugsteig 12. Das Flugzeug ist startbereit. Der Flugsteig für Lufthansa-Flug 2228 nach Paris hat sich geändert. Bitte begeben Sie sich zum Flugsteig 14.',
      sentenceTranslations: {
        'Der Lufthansa-Flug LH 2462 nach Helsinki muss storniert werden.': {
          literal: 'Люфтганза-рейс LH 2462 в Хельсинки должен отменён быть',
          literary: 'Рейс Люфтганзы LH 2462 в Хельсинки должен быть отменён.'
        },
        'Die Passagiere werden gebeten, sich am Informationsschalter 1 zu melden.': {
          literal: 'Пассажиры становятся прошены себя у информационной стойки 1 заявить',
          literary: 'Пассажиров просят обратиться к информационной стойке 1.'
        },
        'Achtung, letzter Aufruf für die Passagiere des Lufthansa-Fluges LH 2528 nach Moskau.': {
          literal: 'Внимание, последний вызов для пассажиров люфтганза-рейса LH 2528 в Москву',
          literary: 'Внимание, последний вызов для пассажиров рейса Люфтганзы LH 2528 в Москву.'
        },
        'Begeben Sie sich bitte unverzüglich zum Flugsteig 12.': {
          literal: 'Отправьтесь Вы себя пожалуйста немедленно к выходу 12',
          literary: 'Пожалуйста, немедленно проследуйте к выходу 12.'
        },
        'Das Flugzeug ist startbereit.': {
          literal: 'Самолёт есть готов к старту',
          literary: 'Самолёт готов к вылету.'
        },
        'Der Flugsteig für Lufthansa-Flug 2228 nach Paris hat sich geändert.': {
          literal: 'Выход для люфтганза-рейса 2228 в Париж имеет себя изменил',
          literary: 'Выход на посадку рейса Люфтганзы 2228 в Париж изменился.'
        },
        'Bitte begeben Sie sich zum Flugsteig 14.': {
          literal: 'Пожалуйста отправьтесь Вы себя к выходу 14',
          literary: 'Пожалуйста, проследуйте к выходу 14.'
        },
      },
      vocabulary: [
        { de: 'der Flug', plural: 'die Flüge', ru: 'рейс', gender: 'maskulin', collocation: 'Lufthansa-Flug', example: 'Der Lufthansa-Flug LH 2462 nach Helsinki muss storniert werden.' },
        { de: 'der Passagier', plural: 'die Passagiere', ru: 'пассажир', gender: 'maskulin', collocation: 'die Passagiere werden gebeten', example: 'Die Passagiere werden gebeten, sich am Informationsschalter 1 zu melden.' },
        { de: 'der Informationsschalter', plural: 'die Informationsschalter', ru: 'информационная стойка', gender: 'maskulin', collocation: 'am Informationsschalter melden', example: 'Die Passagiere werden gebeten, sich am Informationsschalter 1 zu melden.' },
        { de: 'der Flugsteig', plural: 'die Flugsteige', ru: 'выход на посадку', gender: 'maskulin', collocation: 'zum Flugsteig begeben', example: 'Begeben Sie sich bitte unverzüglich zum Flugsteig 12.' },
        { de: 'das Flugzeug', plural: 'die Flugzeuge', ru: 'самолёт', gender: 'neutrum', collocation: 'das Flugzeug ist startbereit', example: 'Das Flugzeug ist startbereit.' },
        { de: 'sich melden', ru: 'обратиться, явиться', type: 'verb', forms: 'melde mich, meldete mich, hat sich gemeldet', example: 'Die Passagiere werden gebeten, sich am Informationsschalter 1 zu melden.' },
        { de: 'sich begeben', ru: 'проследовать', type: 'verb', forms: 'begebe mich, begab mich, hat sich begeben', example: 'Begeben Sie sich bitte unverzüglich zum Flugsteig 12.' },
        { de: 'sich ändern', ru: 'измениться', type: 'verb', forms: 'ändert sich, änderte sich, hat sich geändert', example: 'Der Flugsteig für Lufthansa-Flug 2228 nach Paris hat sich geändert.' },
        { de: 'unverzüglich', ru: 'немедленно', type: 'adv', example: 'Begeben Sie sich bitte unverzüglich zum Flugsteig 12.' },
        { de: 'startbereit', ru: 'готов к вылету', type: 'adj', example: 'Das Flugzeug ist startbereit.' },
      ],
      practiceSentences: [
        { de: 'Der Flug wird gestrichen.', ru: 'Рейс отменяется.', note: 'Passiv: wird V2 + Partizip II' },
        { de: 'Melden Sie sich bitte an!', ru: 'Пожалуйста, зарегистрируйтесь!', note: 'императив с sich' },
        { de: 'Das Tor hat sich geändert.', ru: 'Выход изменился.', note: 'Perfekt с sich' },
        { de: 'Sie müssen warten.', ru: 'Вы должны подождать.', note: 'модальный müssen V2 + инфинитив' },
        { de: 'Der Zug ist abfahrbereit.', ru: 'Поезд готов к отправлению.', note: 'ist V2 + составное прилагательное' },
      ],
      question: {
        de: 'Zu welchem Flugsteig müssen die Passagiere nach Paris gehen?',
        ru: 'К какому выходу должны идти пассажиры в Париж?',
        options: [
          { de: 'Flugsteig 12', ru: 'Выход 12' },
          { de: 'Flugsteig 14', ru: 'Выход 14' },
          { de: 'Flugsteig 1', ru: 'Выход 1' },
        ],
        correct: 1,
        explanation: 'В объявлении говорится: "Der Flugsteig für Lufthansa-Flug 2228 nach Paris hat sich geändert. Bitte begeben Sie sich zum Flugsteig 14."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Hochzeitsgeschenke',
      type: 'диалог о подарках',
      text: 'Warte mal, hier ist die Liste. Also, Peter hat uns die tolle Espressomaschine geschenkt. Damit können wir uns richtig guten Kaffee kochen. Und das Kaffeeservice dafür kommt von... warte mal hier... das ist von Gerlinde. Hast du ne tolle Schwester. Weiß ich doch. Mal deine Tante Dagmar hat uns ein Sofa geschenkt. Den Stoff dafür können wir uns selbst aussuchen. Nein, sie hat uns den tollen Schreibtisch geschenkt. Bekommt in unser Arbeitszimmer. Ach ja, stimmt. Und hier die Kamera, die ist von Thomas. Die nehmen wir mit, wenn wir in die USA fliegen. Super, super. Die Kiste Wein hat niemand gewählt und den Mixer auch nicht. Aber hier die Lampe für unsere neue Wohnung ist von Alexander und von Michaela kommen die Töpfe.',
      sentenceTranslations: {
        'Warte mal, hier ist die Liste.': {
          literal: 'Подожди-ка, здесь есть список',
          literary: 'Подожди-ка, вот список.'
        },
        'Also, Peter hat uns die tolle Espressomaschine geschenkt.': {
          literal: 'Итак, Петер имеет нам классную эспрессо-машину подарил',
          literary: 'Итак, Петер подарил нам классную эспрессо-машину.'
        },
        'Damit können wir uns richtig guten Kaffee kochen.': {
          literal: 'Этим можем мы себе правильно хороший кофе варить',
          literary: 'С её помощью мы сможем варить себе действительно хороший кофе.'
        },
        'Und das Kaffeeservice dafür kommt von...': {
          literal: 'И кофейный сервиз для этого приходит от...',
          literary: 'А кофейный сервиз к ней от...'
        },
        'warte mal hier...': {
          literal: 'подожди-ка здесь...',
          literary: 'подожди-ка...'
        },
        'das ist von Gerlinde.': {
          literal: 'это есть от Герлинды',
          literary: 'это от Герлинды.'
        },
        'Hast du ne tolle Schwester.': {
          literal: 'Имеешь ты классную сестру',
          literary: 'Какая у тебя классная сестра.'
        },
        'Weiß ich doch.': {
          literal: 'Знаю я же',
          literary: 'Я же знаю.'
        },
        'Mal deine Tante Dagmar hat uns ein Sofa geschenkt.': {
          literal: 'Раз твоя тётя Дагмар имеет нам диван подарила',
          literary: 'А вот твоя тётя Дагмар подарила нам диван.'
        },
        'Den Stoff dafür können wir uns selbst aussuchen.': {
          literal: 'Ткань для этого можем мы себе сами выбрать',
          literary: 'Ткань для него мы можем выбрать сами.'
        },
        'Nein, sie hat uns den tollen Schreibtisch geschenkt.': {
          literal: 'Нет, она имеет нам классный письменный стол подарила',
          literary: 'Нет, она подарила нам классный письменный стол.'
        },
        'Bekommt in unser Arbeitszimmer.': {
          literal: 'Получает в наш кабинет',
          literary: 'Поставим его в наш кабинет.'
        },
        'Ach ja, stimmt.': {
          literal: 'Ах да, верно',
          literary: 'Ах да, точно.'
        },
        'Und hier die Kamera, die ist von Thomas.': {
          literal: 'И здесь камера, она есть от Томаса',
          literary: 'А вот камера — она от Томаса.'
        },
        'Die nehmen wir mit, wenn wir in die USA fliegen.': {
          literal: 'Её берём мы с, когда мы в США летим',
          literary: 'Мы возьмём её с собой, когда полетим в США.'
        },
        'Super, super.': {
          literal: 'Супер, супер',
          literary: 'Супер, супер.'
        },
        'Die Kiste Wein hat niemand gewählt und den Mixer auch nicht.': {
          literal: 'Ящик вина имеет никто выбрал и миксер тоже нет',
          literary: 'Ящик вина никто не выбрал и миксер тоже.'
        },
        'Aber hier die Lampe für unsere neue Wohnung ist von Alexander und von Michaela kommen die Töpfe.': {
          literal: 'Но здесь лампа для нашей новой квартиры есть от Александра и от Микаэлы приходят кастрюли',
          literary: 'А вот лампа для нашей новой квартиры от Александра, а от Микаэлы — кастрюли.'
        },
      },
      vocabulary: [
        { de: 'die Hochzeit', plural: 'die Hochzeiten', ru: 'свадьба', gender: 'feminin', collocation: 'unsere Hochzeit', example: 'Unsere Hochzeit war wunderschön.' },
        { de: 'die Liste', plural: 'die Listen', ru: 'список', gender: 'feminin', collocation: 'auf der Liste sehen', example: 'Warte mal, hier ist die Liste.' },
        { de: 'die Espressomaschine', plural: 'die Espressomaschinen', ru: 'эспрессо-машина', gender: 'feminin', collocation: 'tolle Espressomaschine', example: 'Peter hat uns die tolle Espressomaschine geschenkt.' },
        { de: 'das Kaffeeservice', plural: 'die Kaffeeservices', ru: 'кофейный сервиз', gender: 'neutrum', collocation: 'das Kaffeeservice dafür', example: 'Und das Kaffeeservice dafür kommt von... warte mal hier... das ist von Gerlinde.' },
        { de: 'der Schreibtisch', plural: 'die Schreibtische', ru: 'письменный стол', gender: 'maskulin', collocation: 'tollen Schreibtisch', example: 'Nein, sie hat uns den tollen Schreibtisch geschenkt.' },
        { de: 'das Arbeitszimmer', plural: 'die Arbeitszimmer', ru: 'кабинет', gender: 'neutrum', collocation: 'in unser Arbeitszimmer', example: 'Bekommt in unser Arbeitszimmer.' },
        { de: 'die Kamera', plural: 'die Kameras', ru: 'камера', gender: 'feminin', collocation: 'die Kamera mitnehmen', example: 'Und hier die Kamera, die ist von Thomas.' },
        { de: 'die Lampe', plural: 'die Lampen', ru: 'лампа', gender: 'feminin', collocation: 'Lampe für die Wohnung', example: 'Aber hier die Lampe für unsere neue Wohnung ist von Alexander.' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'neue Wohnung', example: 'Aber hier die Lampe für unsere neue Wohnung ist von Alexander.' },
        { de: 'der Topf', plural: 'die Töpfe', ru: 'кастрюля', gender: 'maskulin', collocation: 'die Töpfe', example: 'Von Michaela kommen die Töpfe.' },
        { de: 'schenken', ru: 'дарить', type: 'verb', forms: 'schenke, schenkte, hat geschenkt', example: 'Peter hat uns die tolle Espressomaschine geschenkt.' },
        { de: 'mitnehmen', ru: 'брать с собой', type: 'verb', forms: 'nehme mit, nahm mit, hat mitgenommen', example: 'Die nehmen wir mit, wenn wir in die USA fliegen.' },
        { de: 'sich aussuchen', ru: 'выбирать себе', type: 'verb', forms: 'suche aus, suchte aus, hat ausgesucht', example: 'Den Stoff dafür können wir uns selbst aussuchen.' },
      ],
      practiceSentences: [
        { de: 'Sie hat mir ein Buch geschenkt.', ru: 'Она подарила мне книгу.', note: 'Perfekt: hat V2 + Partizip II' },
        { de: 'Wir nehmen das Geschenk mit.', ru: 'Мы берём подарок с собой.', note: 'отделяемая приставка mit в конце' },
        { de: 'Ich suche mir etwas aus.', ru: 'Я выбираю себе что-то.', note: 'отделяемая aus + sich' },
        { de: 'Er kann gut kochen.', ru: 'Он умеет хорошо готовить.', note: 'модальный kann V2 + инфинитив' },
        { de: 'Das kommt von meiner Tante.', ru: 'Это от моей тёти.', note: 'V2' },
      ],
      question: {
        de: 'Was hat Peter dem Brautpaar geschenkt?',
        ru: 'Что подарил Петер молодожёнам?',
        options: [
          { de: 'Ein Kaffeeservice', ru: 'Кофейный сервиз' },
          { de: 'Eine Espressomaschine', ru: 'Эспрессо-машину' },
          { de: 'Eine Kamera', ru: 'Камеру' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "Peter hat uns die tolle Espressomaschine geschenkt."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Krimi/Fußball',
      type: 'разговор о ТВ',
      text: 'Na, hast du gestern den Krimi gesehen? Den habe ich gar nicht gesehen. Ich wollte im Ersten Serie "Unter Freunden" sehen, aber da kam Papa gleich und wollte Fußball schauen. Also habe ich das Spiel Hamburg gegen Bayern München verfolgt.',
      sentenceTranslations: {
        'Na, hast du gestern den Krimi gesehen?': {
          literal: 'Ну, имеешь ты вчера детектив видел?',
          literary: 'Ну что, ты смотрел вчера детектив?'
        },
        'Den habe ich gar nicht gesehen.': {
          literal: 'Его имею я вовсе не видел',
          literary: 'Я его вообще не смотрел.'
        },
        'Ich wollte im Ersten Serie "Unter Freunden" sehen, aber da kam Papa gleich und wollte Fußball schauen.': {
          literal: 'Я хотел в Первом сериал "Среди друзей" смотреть, но тут пришёл папа сразу и хотел футбол смотреть',
          literary: 'Я хотел смотреть на Первом канале сериал "Среди друзей", но тут сразу пришёл папа и захотел смотреть футбол.'
        },
        'Also habe ich das Spiel Hamburg gegen Bayern München verfolgt.': {
          literal: 'Итак имею я игру Гамбург против Баварии Мюнхен проследил',
          literary: 'Поэтому я смотрел матч Гамбург против Баварии Мюнхен.'
        },
      },
      vocabulary: [
        { de: 'der Krimi', plural: 'die Krimis', ru: 'детектив', gender: 'maskulin', collocation: 'den Krimi sehen', example: 'Na, hast du gestern den Krimi gesehen?' },
        { de: 'die Serie', plural: 'die Serien', ru: 'сериал', gender: 'feminin', collocation: 'Serie sehen', example: 'Ich wollte im Ersten Serie "Unter Freunden" sehen.' },
        { de: 'das Spiel', plural: 'die Spiele', ru: 'игра, матч', gender: 'neutrum', collocation: 'das Spiel verfolgen', example: 'Also habe ich das Spiel Hamburg gegen Bayern München verfolgt.' },
        { de: 'verfolgen', ru: 'следить, смотреть (трансляцию)', type: 'verb', forms: 'verfolge, verfolgte, hat verfolgt', example: 'Also habe ich das Spiel Hamburg gegen Bayern München verfolgt.' },
        { de: 'schauen', ru: 'смотреть', type: 'verb', forms: 'schaue, schaute, hat geschaut', example: 'Aber da kam Papa gleich und wollte Fußball schauen.' },
        { de: 'gestern', ru: 'вчера', type: 'adv', example: 'Na, hast du gestern den Krimi gesehen?' },
        { de: 'gar nicht', ru: 'вовсе не', type: 'adv', example: 'Den habe ich gar nicht gesehen.' },
        { de: 'gleich', ru: 'сразу', type: 'adv', example: 'Aber da kam Papa gleich und wollte Fußball schauen.' },
      ],
      practiceSentences: [
        { de: 'Ich habe den Film gesehen.', ru: 'Я видел фильм.', note: 'Perfekt: habe V2 + Partizip II' },
        { de: 'Er wollte Tennis schauen.', ru: 'Он хотел смотреть теннис.', note: 'Präteritum модального wollte V2' },
        { de: 'Wir haben das Spiel verfolgt.', ru: 'Мы следили за игрой.', note: 'Perfekt: haben V2 + Partizip II' },
        { de: 'Sie kam gleich nach Hause.', ru: 'Она сразу пришла домой.', note: 'Präteritum V2' },
        { de: 'Hast du die Serie gesehen?', ru: 'Ты видел сериал?', note: 'Perfekt вопрос: hast V1' },
      ],
      question: {
        de: 'Was hat die Person gestern im Fernsehen gesehen?',
        ru: 'Что человек смотрел вчера по телевизору?',
        options: [
          { de: 'Einen Krimi', ru: 'Детектив' },
          { de: 'Die Serie "Unter Freunden"', ru: 'Сериал "Среди друзей"' },
          { de: 'Ein Fußballspiel', ru: 'Футбольный матч' },
        ],
        correct: 2,
        explanation: 'Человек отвечает: "Also habe ich das Spiel Hamburg gegen Bayern München verfolgt."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Training',
      type: 'разговор с тренером',
      text: 'Hallo Rufus, dein Trainer. Warst du nicht beim Training? Wir brauchen dich. Sebastian hat seinen Arm gebrochen und Noah hat Grippe. Also, ich hatte Zahnschmerzen und bin zum Zahnarzt gegangen. Ich darf jetzt drei Tage keinen Sport machen. Na dann, gute Besserung.',
      sentenceTranslations: {
        'Hallo Rufus, dein Trainer.': {
          literal: 'Привет Руфус, твой тренер',
          literary: 'Привет, Руфус, это твой тренер.'
        },
        'Warst du nicht beim Training?': {
          literal: 'Был ты не на тренировке?',
          literary: 'Ты не был на тренировке?'
        },
        'Wir brauchen dich.': {
          literal: 'Мы нуждаемся тебя',
          literary: 'Ты нам нужен.'
        },
        'Sebastian hat seinen Arm gebrochen und Noah hat Grippe.': {
          literal: 'Себастьян имеет свою руку сломал и Ноа имеет грипп',
          literary: 'Себастьян сломал руку, и у Ноа грипп.'
        },
        'Also, ich hatte Zahnschmerzen und bin zum Zahnarzt gegangen.': {
          literal: 'Итак, я имел зубные боли и есть к зубному врачу пошёл',
          literary: 'Ну, у меня болели зубы, и я пошёл к стоматологу.'
        },
        'Ich darf jetzt drei Tage keinen Sport machen.': {
          literal: 'Я могу теперь три дня никакой спорт делать',
          literary: 'Мне теперь три дня нельзя заниматься спортом.'
        },
        'Na dann, gute Besserung.': {
          literal: 'Ну тогда, хорошее улучшение',
          literary: 'Ну тогда, выздоравливай.'
        },
      },
      vocabulary: [
        { de: 'der Trainer', plural: 'die Trainer', ru: 'тренер', gender: 'maskulin', collocation: 'dein Trainer', example: 'Hallo Rufus, dein Trainer.' },
        { de: 'das Training', plural: 'die Trainings', ru: 'тренировка', gender: 'neutrum', collocation: 'beim Training sein', example: 'Warst du nicht beim Training?' },
        { de: 'der Arm', plural: 'die Arme', ru: 'рука', gender: 'maskulin', collocation: 'seinen Arm brechen', example: 'Sebastian hat seinen Arm gebrochen.' },
        { de: 'die Grippe', ru: 'грипп', gender: 'feminin', collocation: 'Grippe haben', example: 'Noah hat Grippe.' },
        { de: 'der Zahnschmerz', plural: 'die Zahnschmerzen', ru: 'зубная боль', gender: 'maskulin', collocation: 'Zahnschmerzen haben', example: 'Ich hatte Zahnschmerzen und bin zum Zahnarzt gegangen.' },
        { de: 'der Zahnarzt', plural: 'die Zahnärzte', ru: 'стоматолог', gender: 'maskulin', collocation: 'zum Zahnarzt gehen', example: 'Ich hatte Zahnschmerzen und bin zum Zahnarzt gegangen.' },
        { de: 'brechen', ru: 'ломать', type: 'verb', forms: 'breche, brach, hat gebrochen', example: 'Sebastian hat seinen Arm gebrochen.' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'brauche, brauchte, hat gebraucht', example: 'Wir brauchen dich.' },
      ],
      practiceSentences: [
        { de: 'Er war beim Arzt.', ru: 'Он был у врача.', note: 'Präteritum war V2' },
        { de: 'Sie hat das Bein gebrochen.', ru: 'Она сломала ногу.', note: 'Perfekt: hat V2 + Partizip II' },
        { de: 'Ich bin nach Hause gegangen.', ru: 'Я пошёл домой.', note: 'Perfekt с sein: bin V2 + Partizip II' },
        { de: 'Du darfst nicht schwimmen.', ru: 'Тебе нельзя плавать.', note: 'модальный darfst V2 + инфинитив' },
        { de: 'Wir haben Kopfschmerzen.', ru: 'У нас болит голова.', note: 'haben V2' },
      ],
      question: {
        de: 'Warum war Rufus nicht beim Training?',
        ru: 'Почему Руфус не был на тренировке?',
        options: [
          { de: 'Er hatte einen gebrochenen Arm', ru: 'У него была сломана рука' },
          { de: 'Er hatte Grippe', ru: 'У него был грипп' },
          { de: 'Er hatte Zahnschmerzen', ru: 'У него болели зубы' },
        ],
        correct: 2,
        explanation: 'Руфус объясняет: "Ich hatte Zahnschmerzen und bin zum Zahnarzt gegangen."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Arbeitsamt',
      type: 'диалог в службе занятости',
      text: 'So, das ist dann schon alles? Fast alles. Wie so fast alles? Ich bin schon das dritte Mal hier auf dem Arbeitsamt. Ich habe schon so viele Formulare ausgefüllt. Die Fotokopie von meinem Pass haben Sie auch. Was brauchen Sie denn noch? Und das Einzige, was wir noch brauchen, ist eine Fotokopie Ihres Arbeitsvertrages. Ach so, die habe ich hier. Bitteschön. Vielen Dank.',
      sentenceTranslations: {
        'So, das ist dann schon alles?': {
          literal: 'Так, это есть тогда уже всё?',
          literary: 'Так, это уже всё?'
        },
        'Fast alles.': {
          literal: 'Почти всё',
          literary: 'Почти всё.'
        },
        'Wie so fast alles?': {
          literal: 'Как так почти всё?',
          literary: 'Как это почти всё?'
        },
        'Ich bin schon das dritte Mal hier auf dem Arbeitsamt.': {
          literal: 'Я есть уже третий раз здесь на бирже труда',
          literary: 'Я уже третий раз здесь в службе занятости.'
        },
        'Ich habe schon so viele Formulare ausgefüllt.': {
          literal: 'Я имею уже так много формуляров заполнил',
          literary: 'Я уже заполнил столько формуляров.'
        },
        'Die Fotokopie von meinem Pass haben Sie auch.': {
          literal: 'Фотокопию от моего паспорта имеете Вы тоже',
          literary: 'Фотокопия моего паспорта у Вас тоже есть.'
        },
        'Was brauchen Sie denn noch?': {
          literal: 'Что нуждаетесь Вы же ещё?',
          literary: 'Что же Вам ещё нужно?'
        },
        'Und das Einzige, was wir noch brauchen, ist eine Fotokopie Ihres Arbeitsvertrages.': {
          literal: 'И единственное, что мы ещё нуждаемся, есть фотокопия Вашего трудового договора',
          literary: 'Единственное, что нам ещё нужно — это копия Вашего трудового договора.'
        },
        'Ach so, die habe ich hier.': {
          literal: 'Ах так, её имею я здесь',
          literary: 'А, она у меня здесь.'
        },
        'Bitteschön.': {
          literal: 'Пожалуйста',
          literary: 'Пожалуйста.'
        },
        'Vielen Dank.': {
          literal: 'Много благодарности',
          literary: 'Большое спасибо.'
        },
      },
      vocabulary: [
        { de: 'das Arbeitsamt', plural: 'die Arbeitsämter', ru: 'служба занятости', gender: 'neutrum', collocation: 'auf dem Arbeitsamt', example: 'Ich bin schon das dritte Mal hier auf dem Arbeitsamt.' },
        { de: 'das Formular', plural: 'die Formulare', ru: 'формуляр, бланк', gender: 'neutrum', collocation: 'Formulare ausfüllen', example: 'Ich habe schon so viele Formulare ausgefüllt.' },
        { de: 'die Fotokopie', plural: 'die Fotokopien', ru: 'фотокопия', gender: 'feminin', collocation: 'Fotokopie von meinem Pass', example: 'Die Fotokopie von meinem Pass haben Sie auch.' },
        { de: 'der Pass', plural: 'die Pässe', ru: 'паспорт', gender: 'maskulin', collocation: 'von meinem Pass', example: 'Die Fotokopie von meinem Pass haben Sie auch.' },
        { de: 'der Arbeitsvertrag', plural: 'die Arbeitsverträge', ru: 'трудовой договор', gender: 'maskulin', collocation: 'Fotokopie Ihres Arbeitsvertrages', example: 'Und das Einzige, was wir noch brauchen, ist eine Fotokopie Ihres Arbeitsvertrages.' },
        { de: 'ausfüllen', ru: 'заполнять', type: 'verb', forms: 'fülle aus, füllte aus, hat ausgefüllt', example: 'Ich habe schon so viele Formulare ausgefüllt.' },
      ],
      practiceSentences: [
        { de: 'Ich habe das Formular ausgefüllt.', ru: 'Я заполнил формуляр.', note: 'Perfekt: habe V2 + ausgefüllt' },
        { de: 'Sie braucht einen Pass.', ru: 'Ей нужен паспорт.', note: 'braucht V2' },
        { de: 'Wir sind zum ersten Mal hier.', ru: 'Мы здесь впервые.', note: 'sind V2' },
        { de: 'Was brauchst du noch?', ru: 'Что тебе ещё нужно?', note: 'вопрос: brauchst V1' },
        { de: 'Er hat alles mitgebracht.', ru: 'Он всё принёс с собой.', note: 'Perfekt: hat V2 + mitgebracht' },
      ],
      question: {
        de: 'Was braucht das Arbeitsamt noch von der Person?',
        ru: 'Что ещё нужно службе занятости от человека?',
        options: [
          { de: 'Eine Fotokopie des Passes', ru: 'Фотокопию паспорта' },
          { de: 'Eine Fotokopie des Arbeitsvertrages', ru: 'Фотокопию трудового договора' },
          { de: 'Ausgefüllte Formulare', ru: 'Заполненные формуляры' },
        ],
        correct: 1,
        explanation: 'Сотрудник говорит: "Das Einzige, was wir noch brauchen, ist eine Fotokopie Ihres Arbeitsvertrages."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Hörsaal',
      type: 'поиск аудитории',
      text: 'Hallo, entschuldigen Sie, ich suche den Hörsaal. Ich bin Medizinstudent und neu hier. Ich war schon im dritten Stock, aber das eine Mathe-Vorlesung. Also, die Vorlesungen für die Mediziner sind im zweiten oder fünften Stock. Warten Sie mal, ich schaue auf dem Plan nach. Sie müssen mit dem Fahrstuhl in den vierten Stock fahren und dann die Treppe benutzen, um in den fünften Stock zu kommen.',
      sentenceTranslations: {
        'Hallo, entschuldigen Sie, ich suche den Hörsaal.': {
          literal: 'Привет, извините Вы, я ищу аудиторию',
          literary: 'Извините, я ищу аудиторию.'
        },
        'Ich bin Medizinstudent und neu hier.': {
          literal: 'Я есть медицинский студент и новый здесь',
          literary: 'Я студент-медик и здесь новенький.'
        },
        'Ich war schon im dritten Stock, aber das eine Mathe-Vorlesung.': {
          literal: 'Я был уже в третьем этаже, но это математическая лекция',
          literary: 'Я уже был на третьем этаже, но там лекция по математике.'
        },
        'Also, die Vorlesungen für die Mediziner sind im zweiten oder fünften Stock.': {
          literal: 'Итак, лекции для медиков есть во втором или пятом этаже',
          literary: 'Значит, лекции для медиков на втором или пятом этаже.'
        },
        'Warten Sie mal, ich schaue auf dem Plan nach.': {
          literal: 'Подождите Вы раз, я смотрю на плане после',
          literary: 'Подождите-ка, я посмотрю на плане.'
        },
        'Sie müssen mit dem Fahrstuhl in den vierten Stock fahren und dann die Treppe benutzen, um in den fünften Stock zu kommen.': {
          literal: 'Вы должны с лифтом в четвёртый этаж ехать и тогда лестницу использовать, чтобы в пятый этаж прийти',
          literary: 'Вы должны подняться на лифте на четвёртый этаж и затем воспользоваться лестницей, чтобы попасть на пятый этаж.'
        },
      },
      vocabulary: [
        { de: 'der Hörsaal', plural: 'die Hörsäle', ru: 'аудитория', gender: 'maskulin', collocation: 'den Hörsaal suchen', example: 'Hallo, entschuldigen Sie, ich suche den Hörsaal.' },
        { de: 'die Vorlesung', plural: 'die Vorlesungen', ru: 'лекция', gender: 'feminin', collocation: 'Mathe-Vorlesung', example: 'Ich war schon im dritten Stock, aber das eine Mathe-Vorlesung.' },
        { de: 'der Stock', plural: 'die Stockwerke', ru: 'этаж', gender: 'maskulin', collocation: 'im dritten Stock', example: 'Ich war schon im dritten Stock.' },
        { de: 'der Fahrstuhl', plural: 'die Fahrstühle', ru: 'лифт', gender: 'maskulin', collocation: 'mit dem Fahrstuhl fahren', example: 'Sie müssen mit dem Fahrstuhl in den vierten Stock fahren.' },
        { de: 'die Treppe', plural: 'die Treppen', ru: 'лестница', gender: 'feminin', collocation: 'die Treppe benutzen', example: 'Und dann die Treppe benutzen, um in den fünften Stock zu kommen.' },
        { de: 'der Plan', plural: 'die Pläne', ru: 'план', gender: 'maskulin', collocation: 'auf dem Plan nachschauen', example: 'Warten Sie mal, ich schaue auf dem Plan nach.' },
        { de: 'nachschauen', ru: 'посмотреть, проверить', type: 'verb', forms: 'schaue nach, schaute nach, hat nachgeschaut', example: 'Warten Sie mal, ich schaue auf dem Plan nach.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'suche, suchte, hat gesucht', example: 'Ich suche den Hörsaal.' },
      ],
      practiceSentences: [
        { de: 'Ich suche das Zimmer.', ru: 'Я ищу комнату.', note: 'suche V2' },
        { de: 'Sie ist im zweiten Stock.', ru: 'Она на втором этаже.', note: 'ist V2' },
        { de: 'Wir fahren in den dritten Stock.', ru: 'Мы едем на третий этаж.', note: 'fahren V2' },
        { de: 'Er muss die Treppe nehmen.', ru: 'Он должен идти по лестнице.', note: 'модальный muss V2 + инфинитив' },
        { de: 'Schauen Sie bitte nach!', ru: 'Пожалуйста, проверьте!', note: 'императив, приставка nach в конце' },
      ],
      question: {
        de: 'In welchen Stock muss der Medizinstudent mit dem Fahrstuhl fahren?',
        ru: 'На какой этаж должен подняться студент-медик на лифте?',
        options: [
          { de: 'In den dritten Stock', ru: 'На третий этаж' },
          { de: 'In den vierten Stock', ru: 'На четвёртый этаж' },
          { de: 'In den fünften Stock', ru: 'На пятый этаж' },
        ],
        correct: 1,
        explanation: 'Помощник объясняет: "Sie müssen mit dem Fahrstuhl in den vierten Stock fahren und dann die Treppe benutzen, um in den fünften Stock zu kommen."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Bar',
      type: 'заказ напитка',
      text: 'Na, was darf es denn sein? Ich hätte gern einen Cocktail. Um diese Zeit müssen wir leider keine Cocktails. Darf es ein Glas Champagner sein oder ein Wein? Wein wäre auch nicht schlecht. Haben Sie Rosé-Wein? Nein, aber einen guten Rotwein unseres Hauses. Dann lieber den Champagner. Rotwein mag ich nicht. Sofort.',
      sentenceTranslations: {
        'Na, was darf es denn sein?': {
          literal: 'Ну, что может оно же быть?',
          literary: 'Что желаете?'
        },
        'Ich hätte gern einen Cocktail.': {
          literal: 'Я имел бы охотно один коктейль',
          literary: 'Я бы хотел коктейль.'
        },
        'Um diese Zeit müssen wir leider keine Cocktails.': {
          literal: 'В это время должны мы к сожалению никакие коктейли',
          literary: 'В это время мы, к сожалению, не делаем коктейли.'
        },
        'Darf es ein Glas Champagner sein oder ein Wein?': {
          literal: 'Может оно стакан шампанского быть или вино?',
          literary: 'Может быть, бокал шампанского или вино?'
        },
        'Wein wäre auch nicht schlecht.': {
          literal: 'Вино было бы тоже не плохо',
          literary: 'Вино тоже было бы неплохо.'
        },
        'Haben Sie Rosé-Wein?': {
          literal: 'Имеете Вы розовое вино?',
          literary: 'У вас есть розовое вино?'
        },
        'Nein, aber einen guten Rotwein unseres Hauses.': {
          literal: 'Нет, но один хороший красное вино нашего дома',
          literary: 'Нет, но есть хорошее красное вино нашего заведения.'
        },
        'Dann lieber den Champagner.': {
          literal: 'Тогда лучше шампанское',
          literary: 'Тогда лучше шампанское.'
        },
        'Rotwein mag ich nicht.': {
          literal: 'Красное вино люблю я не',
          literary: 'Красное вино я не люблю.'
        },
        'Sofort.': {
          literal: 'Сразу',
          literary: 'Сейчас подам.'
        },
      },
      vocabulary: [
        { de: 'der Cocktail', plural: 'die Cocktails', ru: 'коктейль', gender: 'maskulin', collocation: 'einen Cocktail bestellen', example: 'Ich hätte gern einen Cocktail.' },
        { de: 'das Glas', plural: 'die Gläser', ru: 'бокал, стакан', gender: 'neutrum', collocation: 'ein Glas Champagner', example: 'Darf es ein Glas Champagner sein oder ein Wein?' },
        { de: 'der Champagner', ru: 'шампанское', gender: 'maskulin', collocation: 'Glas Champagner', example: 'Darf es ein Glas Champagner sein oder ein Wein?' },
        { de: 'der Wein', plural: 'die Weine', ru: 'вино', gender: 'maskulin', collocation: 'Rosé-Wein', example: 'Haben Sie Rosé-Wein?' },
        { de: 'der Rotwein', plural: 'die Rotweine', ru: 'красное вино', gender: 'maskulin', collocation: 'guten Rotwein', example: 'Nein, aber einen guten Rotwein unseres Hauses.' },
        { de: 'mögen', ru: 'любить, нравиться', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Rotwein mag ich nicht.' },
        { de: 'leider', ru: 'к сожалению', type: 'adv', example: 'Um diese Zeit müssen wir leider keine Cocktails.' },
        { de: 'lieber', ru: 'лучше, предпочтительнее', type: 'adv', example: 'Dann lieber den Champagner.' },
      ],
      practiceSentences: [
        { de: 'Was darf es sein?', ru: 'Что желаете?', note: 'вопрос с darf V1' },
        { de: 'Ich hätte gern Kaffee.', ru: 'Я бы хотел кофе.', note: 'Konjunktiv II hätte V2' },
        { de: 'Haben Sie Tee?', ru: 'У вас есть чай?', note: 'вопрос: haben V1' },
        { de: 'Wir servieren keinen Alkohol.', ru: 'Мы не подаём алкоголь.', note: 'servieren V2' },
        { de: 'Dann nehme ich Wasser.', ru: 'Тогда я возьму воду.', note: 'nehme V2' },
      ],
      question: {
        de: 'Was bestellt der Gast am Ende?',
        ru: 'Что в итоге заказывает гость?',
        options: [
          { de: 'Einen Cocktail', ru: 'Коктейль' },
          { de: 'Rotwein', ru: 'Красное вино' },
          { de: 'Champagner', ru: 'Шампанское' },
        ],
        correct: 2,
        explanation: 'Гость говорит: "Dann lieber den Champagner. Rotwein mag ich nicht."'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Tina',
      type: 'интервью',
      text: 'Was ist denn so interessant an Ihrem Stadtteil oder Kiez, wie die Berliner sagen? Also, erstmal finde ich es super, dass hier Alt und Neu so nahe beieinander sind. Außerdem ist es mit der S-Bahn nur eine halbe Stunde bis zum Zentrum Berlins. In den 1990er Jahren ist ja die Einwohnerzahl stetig zurückgegangen. Seit einigen Jahren steigt sie wieder. Wie kommt das? Na ja, hier befindet sich ja seit einigen Jahren einer der drei Universitätscampus der Humboldt-Universität. Das zieht natürlich vor allem junge Leute an, die dann hier wohnen und arbeiten möchten. Aber Adlershof hat auch im Sportlichen und Kulturellen viel zu bieten. Sportanlagen, Kinos, Kneipen, Konzerte, geführte Touren. Die Straße, die da entlang führt, ist das Adlergestell, oder? Ja, und es ist die längste Straße Berlins, länger als der Ku\'damm. Aha. Und was machen Sie beruflich? Ich bin Kindergärtnerin. Durch die steigende Einwohnerzahl gibt es auch immer mehr Kinder und die brauchen Kindergärten. Na, dann brauchen Sie sich ja keine Sorgen um Ihre berufliche Zukunft zu machen. Nein, wirklich nicht. Vielen Dank für das Gespräch. Gerne.',
      sentenceTranslations: {
        'Was ist denn so interessant an Ihrem Stadtteil oder Kiez, wie die Berliner sagen?': {
          literal: 'Что есть же так интересно на Вашем районе или кице, как берлинцы говорят?',
          literary: 'Что же такого интересного в вашем районе, или Kiez, как говорят берлинцы?'
        },
        'Also, erstmal finde ich es super, dass hier Alt und Neu so nahe beieinander sind.': {
          literal: 'Итак, во-первых нахожу я это супер, что здесь старое и новое так близко друг у друга есть',
          literary: 'Во-первых, мне очень нравится, что здесь старое и новое так близко друг к другу.'
        },
        'Außerdem ist es mit der S-Bahn nur eine halbe Stunde bis zum Zentrum Berlins.': {
          literal: 'Кроме того есть оно с городской электричкой только половина часа до центра Берлина',
          literary: 'Кроме того, на городской электричке всего полчаса до центра Берлина.'
        },
        'In den 1990er Jahren ist ja die Einwohnerzahl stetig zurückgegangen.': {
          literal: 'В 1990-х годах есть ведь число жителей постоянно назад ушло',
          literary: 'В 1990-х годах численность населения постоянно снижалась.'
        },
        'Seit einigen Jahren steigt sie wieder.': {
          literal: 'С некоторых лет поднимается она снова',
          literary: 'Уже несколько лет она снова растёт.'
        },
        'Wie kommt das?': {
          literal: 'Как приходит это?',
          literary: 'Как так получилось?'
        },
        'Na ja, hier befindet sich ja seit einigen Jahren einer der drei Universitätscampus der Humboldt-Universität.': {
          literal: 'Ну да, здесь находится ведь с некоторых лет один из трёх университетских кампусов Гумбольдт-университета',
          literary: 'Ну, здесь уже несколько лет находится один из трёх кампусов Гумбольдт-университета.'
        },
        'Das zieht natürlich vor allem junge Leute an, die dann hier wohnen und arbeiten möchten.': {
          literal: 'Это тянет естественно прежде всего молодых людей к, которые тогда здесь жить и работать хотят',
          literary: 'Это, конечно, привлекает прежде всего молодёжь, которая хочет здесь жить и работать.'
        },
        'Aber Adlershof hat auch im Sportlichen und Kulturellen viel zu bieten.': {
          literal: 'Но Адлерсхоф имеет также в спортивном и культурном много предложить',
          literary: 'Но и в спорте, и в культуре Адлерсхоф может многое предложить.'
        },
        'Sportanlagen, Kinos, Kneipen, Konzerte, geführte Touren.': {
          literal: 'Спортивные сооружения, кинотеатры, пивные, концерты, проводимые экскурсии',
          literary: 'Спортивные комплексы, кинотеатры, бары, концерты, экскурсии с гидом.'
        },
        'Die Straße, die da entlang führt, ist das Adlergestell, oder?': {
          literal: 'Улица, которая там вдоль ведёт, есть Адлергештелль, или?',
          literary: 'Улица, которая там проходит, это Адлергештелль, да?'
        },
        'Ja, und es ist die längste Straße Berlins, länger als der Ku\'damm.': {
          literal: 'Да, и она есть длиннейшая улица Берлина, длиннее чем Курфюрстендамм',
          literary: 'Да, и это самая длинная улица Берлина, длиннее Курфюрстендамма.'
        },
        'Aha.': {
          literal: 'Ага',
          literary: 'Ага.'
        },
        'Und was machen Sie beruflich?': {
          literal: 'И что делаете Вы профессионально?',
          literary: 'А кем вы работаете?'
        },
        'Ich bin Kindergärtnerin.': {
          literal: 'Я есть воспитательница',
          literary: 'Я воспитательница в детском саду.'
        },
        'Durch die steigende Einwohnerzahl gibt es auch immer mehr Kinder und die brauchen Kindergärten.': {
          literal: 'Через растущее число жителей даёт это также всегда больше детей и они нуждаются детские сады',
          literary: 'Из-за растущего населения становится всё больше детей, и им нужны детские сады.'
        },
        'Na, dann brauchen Sie sich ja keine Sorgen um Ihre berufliche Zukunft zu machen.': {
          literal: 'Ну, тогда нуждаетесь Вы себя ведь никакие заботы о Вашем профессиональном будущем делать',
          literary: 'Ну, тогда вам не нужно беспокоиться о своём профессиональном будущем.'
        },
        'Nein, wirklich nicht.': {
          literal: 'Нет, действительно нет',
          literary: 'Нет, действительно нет.'
        },
        'Vielen Dank für das Gespräch.': {
          literal: 'Много благодарности за разговор',
          literary: 'Большое спасибо за беседу.'
        },
        'Gerne.': {
          literal: 'Охотно',
          literary: 'Пожалуйста.'
        },
      },
      vocabulary: [
        { de: 'der Stadtteil', plural: 'die Stadtteile', ru: 'район города', gender: 'maskulin', collocation: 'Berliner Stadtteil', example: 'Was ist denn so interessant an Ihrem Stadtteil oder Kiez, wie die Berliner sagen?' },
        { de: 'die S-Bahn', plural: 'die S-Bahnen', ru: 'городская электричка', gender: 'feminin', collocation: 'mit der S-Bahn fahren', example: 'Außerdem ist es mit der S-Bahn nur eine halbe Stunde bis zum Zentrum Berlins.' },
        { de: 'das Zentrum', plural: 'die Zentren', ru: 'центр', gender: 'neutrum', collocation: 'bis zum Zentrum', example: 'Außerdem ist es mit der S-Bahn nur eine halbe Stunde bis zum Zentrum Berlins.' },
        { de: 'die Einwohnerzahl', plural: 'die Einwohnerzahlen', ru: 'численность населения', gender: 'feminin', collocation: 'steigende Einwohnerzahl', example: 'In den 1990er Jahren ist ja die Einwohnerzahl stetig zurückgegangen.' },
        { de: 'die Kneipe', plural: 'die Kneipen', ru: 'пивная, бар', gender: 'feminin', collocation: 'in die Kneipe gehen', example: 'Sportanlagen, Kinos, Kneipen, Konzerte, geführte Touren.' },
        { de: 'die Straße', plural: 'die Straßen', ru: 'улица', gender: 'feminin', collocation: 'längste Straße', example: 'Ja, und es ist die längste Straße Berlins, länger als der Ku\'damm.' },
        { de: 'die Kindergärtnerin', plural: 'die Kindergärtnerinnen', ru: 'воспитательница', gender: 'feminin', collocation: 'Kindergärtnerin sein', example: 'Ich bin Kindergärtnerin.' },
        { de: 'der Kindergarten', plural: 'die Kindergärten', ru: 'детский сад', gender: 'maskulin', collocation: 'Kinder brauchen Kindergärten', example: 'Durch die steigende Einwohnerzahl gibt es auch immer mehr Kinder und die brauchen Kindergärten.' },
        { de: 'die Zukunft', ru: 'будущее', gender: 'feminin', collocation: 'berufliche Zukunft', example: 'Na, dann brauchen Sie sich ja keine Sorgen um Ihre berufliche Zukunft zu machen.' },
        { de: 'die Sorge', plural: 'die Sorgen', ru: 'забота, беспокойство', gender: 'feminin', collocation: 'sich Sorgen machen', example: 'Na, dann brauchen Sie sich ja keine Sorgen um Ihre berufliche Zukunft zu machen.' },
        { de: 'anziehen', ru: 'привлекать', type: 'verb', forms: 'ziehe an, zog an, hat angezogen', example: 'Das zieht natürlich vor allem junge Leute an.' },
        { de: 'zurückgehen', ru: 'снижаться, сокращаться', type: 'verb', forms: 'geht zurück, ging zurück, ist zurückgegangen', example: 'In den 1990er Jahren ist ja die Einwohnerzahl stetig zurückgegangen.' },
        { de: 'steigen', ru: 'расти, повышаться', type: 'verb', forms: 'steige, stieg, ist gestiegen', example: 'Seit einigen Jahren steigt sie wieder.' },
        { de: 'sich befinden', ru: 'находиться', type: 'verb', forms: 'befindet sich, befand sich, hat sich befunden', example: 'Hier befindet sich ja seit einigen Jahren einer der drei Universitätscampus der Humboldt-Universität.' },
        { de: 'beruflich', ru: 'профессиональный', type: 'adj', example: 'Und was machen Sie beruflich?' },
        { de: 'stetig', ru: 'постоянно', type: 'adv', example: 'In den 1990er Jahren ist ja die Einwohnerzahl stetig zurückgegangen.' },
      ],
      practiceSentences: [
        { de: 'Ich lebe seit zwei Jahren hier.', ru: 'Я живу здесь два года.', note: 'lebe V2' },
        { de: 'Die Stadt zieht Touristen an.', ru: 'Город привлекает туристов.', note: 'отделяемая приставка an в конце' },
        { de: 'Die Zahl geht zurück.', ru: 'Число снижается.', note: 'отделяемая приставка zurück в конце' },
        { de: 'Hier befindet sich ein Park.', ru: 'Здесь находится парк.', note: 'возвратный sich, V2' },
        { de: 'Sie möchten hier arbeiten.', ru: 'Они хотят здесь работать.', note: 'модальный möchten V2 + инфинитив' },
      ],
      question: {
        de: 'Was ist Tinas Beruf?',
        ru: 'Кем работает Тина?',
        options: [
          { de: 'Lehrerin', ru: 'Учительница' },
          { de: 'Kindergärtnerin', ru: 'Воспитательница' },
          { de: 'Sporttrainerin', ru: 'Спортивный тренер' },
        ],
        correct: 1,
        explanation: 'Тина отвечает: "Ich bin Kindergärtnerin."'
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

  /* ─── Плоская карта переводов для конструктора ─── */
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
    'Модальные глаголы (muss, kann, soll, darf, wollen): Außerdem muss Thomas zu Weihnachten arbeiten',
    'Придаточные dass-Satz (глагол в конце): dass wir nun doch nicht zu deinem Geburtstag kommen',
    'Passiv (werden + Partizip II): Die Passagiere werden gebeten, sich zu melden',
    'Perfekt с haben/sein: Sebastian hat seinen Arm gebrochen / Ich bin zum Zahnarzt gegangen',
    'Konjunktiv II (вежливые просьбы): Ich hätte gern einen Cocktail',
    'Отделяемые приставки (an, zurück, nach, mit, aus): Ich rufe im Auftrag von Dr. Koslowski an',
    'Предлоги с Dativ/Akkusativ: in den vierten Stock (куда?) / im dritten Stock (где?)',
    'Возвратные глаголы (sich melden, sich begeben, sich befinden): Hier befindet sich ein Universitätscampus',
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Cornelia).',
    },
  },
};

LESSONS.push(LESSON_06);
