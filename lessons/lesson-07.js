/* ═══════════════════════════════════════════════════════════
   Lesson 07 — Goethe Zertifikat A2 Hören — Modelltest 25
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_07 = {
  id: 'lesson-07',
  number: 7,
  title: 'Goethe A2 Hören — Modelltest 25',
  subtitle: 'Basketballspiel, Hochzeit, Hotel Leopold, Wetter und Radio-Gewinnspiel',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-07',
  videoUrl: 'https://www.youtube.com/watch?v=erhuXReIP1I',

  /* ─── мини-тексты по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Basketballspiel',
      type: 'объявление',
      text: 'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle. Die Parkplätze in der Nähe sind schon besetzt. Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze. Besucher von außerhalb sollten nicht mit dem Auto kommen. Nehmen Sie die Bahn. Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.',
      sentenceTranslations: {
        'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle.': {
          literal: 'Одна информация для посетителей баскетбольной-игры сегодня в Олимпиахалле',
          literary: 'Информация для зрителей сегодняшнего баскетбольного матча в Олимпиахалле.'
        },
        'Die Parkplätze in der Nähe sind schon besetzt.': {
          literal: 'Парковочные-места в близости есть уже заняты',
          literary: 'Парковки поблизости уже заняты.'
        },
        'Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze.': {
          literal: 'В паркинге у торгового-центра дает это ещё свободные места',
          literary: 'В паркинге у торгового центра ещё есть свободные места.'
        },
        'Besucher von außerhalb sollten nicht mit dem Auto kommen.': {
          literal: 'Посетители от снаружи должны-бы не с автомобилем приходить',
          literary: 'Гости из других городов не должны приезжать на машине.'
        },
        'Nehmen Sie die Bahn.': {
          literal: 'Возьмите вы поезд',
          literary: 'Воспользуйтесь поездом.'
        },
        'Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.': {
          literal: 'От главного-вокзала дает это бесплатные автобусы к Олимпиахалле',
          literary: 'От главного вокзала ходят бесплатные автобусы до Олимпиахалле.'
        },
      },
      vocabulary: [
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'Besucher des Spiels', example: 'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle.' },
        { de: 'das Basketballspiel', plural: 'die Basketballspiele', ru: 'баскетбольный матч', gender: 'neutrum', collocation: 'zum Basketballspiel gehen', example: 'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle.' },
        { de: 'der Parkplatz', plural: 'die Parkplätze', ru: 'парковка', gender: 'maskulin', collocation: 'freie Parkplätze suchen', example: 'Die Parkplätze in der Nähe sind schon besetzt.' },
        { de: 'das Parkhaus', plural: 'die Parkhäuser', ru: 'паркинг', gender: 'neutrum', collocation: 'im Parkhaus parken', example: 'Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze.' },
        { de: 'das Einkaufszentrum', plural: 'die Einkaufszentren', ru: 'торговый центр', gender: 'neutrum', collocation: 'am Einkaufszentrum', example: 'Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze.' },
        { de: 'die Bahn', plural: 'die Bahnen', ru: 'поезд', gender: 'feminin', collocation: 'die Bahn nehmen', example: 'Nehmen Sie die Bahn.' },
        { de: 'der Hauptbahnhof', plural: 'die Hauptbahnhöfe', ru: 'главный вокзал', gender: 'maskulin', collocation: 'vom Hauptbahnhof fahren', example: 'Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.' },
        { de: 'besetzen', ru: 'занимать', type: 'verb', forms: 'besetzt, besetzte, hat besetzt', example: 'Die Parkplätze in der Nähe sind schon besetzt.' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.' },
        { de: 'frei', ru: 'свободный', type: 'adj', example: 'Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute keine Parkplätze.', ru: 'Сегодня нет парковочных мест.', note: 'es gibt конструкция' },
        { de: 'Die Busse fahren zum Stadion.', ru: 'Автобусы едут к стадиону.', note: 'V2, простой глагол' },
        { de: 'Nehmen Sie bitte einen Platz.', ru: 'Займите, пожалуйста, место.', note: 'Imperativ (Sie-Form)' },
        { de: 'Der Parkplatz ist schon besetzt.', ru: 'Парковка уже занята.', note: 'V2, sein + Partizip II' },
        { de: 'Wir sollten mit der Bahn fahren.', ru: 'Нам следует ехать на поезде.', note: 'V2, модальный + инфинитив' },
      ],
      question: {
        de: 'Wo können die Besucher des Basketballspiels parken?',
        ru: 'Где могут припарковаться посетители баскетбольного матча?',
        options: [
          { de: 'In der Nähe der Olympiahalle', ru: 'Рядом с Олимпиахалле' },
          { de: 'Im Parkhaus am Einkaufszentrum', ru: 'В паркинге у торгового центра' },
          { de: 'Am Hauptbahnhof', ru: 'На главном вокзале' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "Die Parkplätze in der Nähe sind schon besetzt. Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Sabine',
      type: 'телефонное сообщение',
      text: 'Hallo Sabine, denkt bitte an meinen dunklen Anzug. Du wolltest ihn doch aus der Reinigung abholen. Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll. Das Geschenk habe ich heute in der Mittagspause schon gekauft. Die Blumen holen wir ja erst morgen früh. Dank dir.',
      sentenceTranslations: {
        'Hallo Sabine, denkt bitte an meinen dunklen Anzug.': {
          literal: 'Привет Сабине, думай пожалуйста о моём тёмном костюме',
          literary: 'Привет, Сабина, пожалуйста, не забудь про мой тёмный костюм.'
        },
        'Du wolltest ihn doch aus der Reinigung abholen.': {
          literal: 'Ты хотела его ведь из химчистки забрать',
          literary: 'Ты же хотела забрать его из химчистки.'
        },
        'Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll.': {
          literal: 'Иначе знаю я не, что я на Елены свадьбе завтра надеть должен',
          literary: 'Иначе я не знаю, что надеть завтра на свадьбу Хелены.'
        },
        'Das Geschenk habe ich heute in der Mittagspause schon gekauft.': {
          literal: 'Подарок имею я сегодня в обеденном-перерыве уже купленным',
          literary: 'Подарок я уже купил сегодня в обеденный перерыв.'
        },
        'Die Blumen holen wir ja erst morgen früh.': {
          literal: 'Цветы забираем мы же только завтра рано',
          literary: 'Цветы мы заберём только завтра утром.'
        },
        'Dank dir.': {
          literal: 'Благодарность тебе',
          literary: 'Спасибо тебе.'
        },
      },
      vocabulary: [
        { de: 'der Anzug', plural: 'die Anzüge', ru: 'костюм', gender: 'maskulin', collocation: 'dunklen Anzug anziehen', example: 'Hallo Sabine, denkt bitte an meinen dunklen Anzug.' },
        { de: 'die Reinigung', plural: 'die Reinigungen', ru: 'химчистка', gender: 'feminin', collocation: 'aus der Reinigung abholen', example: 'Du wolltest ihn doch aus der Reinigung abholen.' },
        { de: 'die Hochzeit', plural: 'die Hochzeiten', ru: 'свадьба', gender: 'feminin', collocation: 'bei der Hochzeit sein', example: 'Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'Geschenk kaufen', example: 'Das Geschenk habe ich heute in der Mittagspause schon gekauft.' },
        { de: 'die Mittagspause', plural: 'die Mittagspausen', ru: 'обеденный перерыв', gender: 'feminin', collocation: 'in der Mittagspause', example: 'Das Geschenk habe ich heute in der Mittagspause schon gekauft.' },
        { de: 'die Blume', plural: 'die Blumen', ru: 'цветок', gender: 'feminin', collocation: 'Blumen holen', example: 'Die Blumen holen wir ja erst morgen früh.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'hole ab, holte ab, hat abgeholt', example: 'Du wolltest ihn doch aus der Reinigung abholen.' },
        { de: 'anziehen', ru: 'надевать', type: 'verb', forms: 'ziehe an, zog an, hat angezogen', example: 'Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll.' },
        { de: 'kaufen', ru: 'покупать', type: 'verb', forms: 'kaufe, kaufte, hat gekauft', example: 'Das Geschenk habe ich heute in der Mittagspause schon gekauft.' },
        { de: 'dunkel', ru: 'тёмный', type: 'adj', example: 'Hallo Sabine, denkt bitte an meinen dunklen Anzug.' },
      ],
      practiceSentences: [
        { de: 'Ich hole den Anzug ab.', ru: 'Я забираю костюм.', note: 'отделяемая приставка' },
        { de: 'Er hat ein Geschenk gekauft.', ru: 'Он купил подарок.', note: 'Perfekt: hat + Partizip' },
        { de: 'Wir denken an die Hochzeit.', ru: 'Мы думаем о свадьбе.', note: 'V2, denken an + Akk' },
        { de: 'Du sollst morgen kommen.', ru: 'Ты должен прийти завтра.', note: 'модальный + инфинитив' },
        { de: 'Holt ihr die Blumen?', ru: 'Вы заберёте цветы?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Was soll Sabine aus der Reinigung abholen?',
        ru: 'Что должна забрать Сабина из химчистки?',
        options: [
          { de: 'Ein Geschenk für Helena', ru: 'Подарок для Хелены' },
          { de: 'Einen dunklen Anzug', ru: 'Тёмный костюм' },
          { de: 'Die Hochzeitsblumen', ru: 'Свадебные цветы' },
        ],
        correct: 1,
        explanation: 'В сообщении прямо сказано: "denkt bitte an meinen dunklen Anzug. Du wolltest ihn doch aus der Reinigung abholen."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Frau Meier',
      type: 'телефонное сообщение',
      text: 'Guten Tag, Frau Meier. Ingrid Solms hier. Termin heute findet nicht in meinem Büro statt. Da ist ein Fehler in der Einladung. Ich habe im Hotel Leopold einen Raum reserviert. Sie wissen ja, am Bahnhofsplatz. Bitte kommen Sie um 10 Uhr direkt dorthin. Danke. Auf Wiederhören.',
      sentenceTranslations: {
        'Guten Tag, Frau Meier.': {
          literal: 'Добрый день, госпожа Майер',
          literary: 'Добрый день, госпожа Майер.'
        },
        'Ingrid Solms hier.': {
          literal: 'Ингрид Зольмс здесь',
          literary: 'Это Ингрид Зольмс.'
        },
        'Termin heute findet nicht in meinem Büro statt.': {
          literal: 'Встреча сегодня находит не в моём офисе место',
          literary: 'Сегодняшняя встреча состоится не в моём офисе.'
        },
        'Da ist ein Fehler in der Einladung.': {
          literal: 'Там есть одна ошибка в приглашении',
          literary: 'В приглашении есть ошибка.'
        },
        'Ich habe im Hotel Leopold einen Raum reserviert.': {
          literal: 'Я имею в отеле Леопольд одну комнату зарезервированной',
          literary: 'Я забронировала комнату в отеле Леопольд.'
        },
        'Sie wissen ja, am Bahnhofsplatz.': {
          literal: 'Вы знаете же, на вокзальной-площади',
          literary: 'Вы же знаете, на Вокзальной площади.'
        },
        'Bitte kommen Sie um 10 Uhr direkt dorthin.': {
          literal: 'Пожалуйста приходите вы в 10 часов прямо туда',
          literary: 'Пожалуйста, приходите прямо туда к 10 часам.'
        },
        'Danke.': {
          literal: 'Спасибо',
          literary: 'Спасибо.'
        },
        'Auf Wiederhören.': {
          literal: 'На переслышание',
          literary: 'До свидания (по телефону).'
        },
      },
      vocabulary: [
        { de: 'der Termin', plural: 'die Termine', ru: 'встреча, приём', gender: 'maskulin', collocation: 'Termin findet statt', example: 'Termin heute findet nicht in meinem Büro statt.' },
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'in meinem Büro', example: 'Termin heute findet nicht in meinem Büro statt.' },
        { de: 'der Fehler', plural: 'die Fehler', ru: 'ошибка', gender: 'maskulin', collocation: 'ein Fehler in der Einladung', example: 'Da ist ein Fehler in der Einladung.' },
        { de: 'die Einladung', plural: 'die Einladungen', ru: 'приглашение', gender: 'feminin', collocation: 'Fehler in der Einladung', example: 'Da ist ein Fehler in der Einladung.' },
        { de: 'das Hotel', plural: 'die Hotels', ru: 'отель', gender: 'neutrum', collocation: 'im Hotel reservieren', example: 'Ich habe im Hotel Leopold einen Raum reserviert.' },
        { de: 'der Raum', plural: 'die Räume', ru: 'помещение, комната', gender: 'maskulin', collocation: 'einen Raum reservieren', example: 'Ich habe im Hotel Leopold einen Raum reserviert.' },
        { de: 'stattfinden', ru: 'происходить, состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Termin heute findet nicht in meinem Büro statt.' },
        { de: 'reservieren', ru: 'бронировать', type: 'verb', forms: 'reserviere, reservierte, hat reserviert', example: 'Ich habe im Hotel Leopold einen Raum reserviert.' },
        { de: 'direkt', ru: 'прямо, непосредственно', type: 'adv', example: 'Bitte kommen Sie um 10 Uhr direkt dorthin.' },
        { de: 'dorthin', ru: 'туда', type: 'adv', example: 'Bitte kommen Sie um 10 Uhr direkt dorthin.' },
      ],
      practiceSentences: [
        { de: 'Die Besprechung findet statt.', ru: 'Совещание состоится.', note: 'отделяемая приставка' },
        { de: 'Ich habe ein Zimmer reserviert.', ru: 'Я забронировал комнату.', note: 'Perfekt: habe + Partizip' },
        { de: 'Kommen Sie bitte um 9 Uhr.', ru: 'Приходите, пожалуйста, в 9 часов.', note: 'Imperativ (Sie-Form)' },
        { de: 'Der Termin ist im Büro.', ru: 'Встреча в офисе.', note: 'V2, sein + место' },
        { de: 'Wir gehen dorthin.', ru: 'Мы идём туда.', note: 'V2, направление' },
      ],
      question: {
        de: 'Wo findet der Termin heute statt?',
        ru: 'Где состоится сегодняшняя встреча?',
        options: [
          { de: 'Im Büro von Frau Solms', ru: 'В офисе госпожи Зольмс' },
          { de: 'Im Hotel Leopold', ru: 'В отеле Леопольд' },
          { de: 'Am Bahnhofsplatz im Freien', ru: 'На Вокзальной площади на улице' },
        ],
        correct: 1,
        explanation: 'Ингрид Зольмс говорит: "Termin heute findet nicht in meinem Büro statt... Ich habe im Hotel Leopold einen Raum reserviert."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Nun zum Wetter. Am Wochenende ist es im Norden windig und bewölkt. Es regnet bei maximal 17 Grad. Im Süden am Samstag sonnig und warm bis 25 Grad. Am Sonntag kommt das kalte Regenwetter dann auch nach Süddeutschland. Die Temperaturen fallen auch hier auf unter 15 Grad.',
      sentenceTranslations: {
        'Nun zum Wetter.': {
          literal: 'Теперь к погоде',
          literary: 'А теперь о погоде.'
        },
        'Am Wochenende ist es im Norden windig und bewölkt.': {
          literal: 'В выходные есть это на севере ветрено и облачно',
          literary: 'В выходные на севере будет ветрено и облачно.'
        },
        'Es regnet bei maximal 17 Grad.': {
          literal: 'Это дождит при максимально 17 градусах',
          literary: 'Будет дождь при максимальной температуре 17 градусов.'
        },
        'Im Süden am Samstag sonnig und warm bis 25 Grad.': {
          literal: 'На юге в субботу солнечно и тепло до 25 градусов',
          literary: 'На юге в субботу солнечно и тепло, до 25 градусов.'
        },
        'Am Sonntag kommt das kalte Regenwetter dann auch nach Süddeutschland.': {
          literal: 'В воскресенье приходит холодная дождливая-погода тогда также в Южную-Германию',
          literary: 'В воскресенье холодная дождливая погода придёт и в Южную Германию.'
        },
        'Die Temperaturen fallen auch hier auf unter 15 Grad.': {
          literal: 'Температуры падают также здесь на под 15 градусов',
          literary: 'Температура и здесь упадёт ниже 15 градусов.'
        },
      },
      vocabulary: [
        { de: 'das Wetter', ru: 'погода', gender: 'neutrum', collocation: 'zum Wetter', example: 'Nun zum Wetter.' },
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'am Wochenende', example: 'Am Wochenende ist es im Norden windig und bewölkt.' },
        { de: 'der Norden', ru: 'север', gender: 'maskulin', collocation: 'im Norden', example: 'Am Wochenende ist es im Norden windig und bewölkt.' },
        { de: 'der Süden', ru: 'юг', gender: 'maskulin', collocation: 'im Süden', example: 'Im Süden am Samstag sonnig und warm bis 25 Grad.' },
        { de: 'der Grad', plural: 'die Grade', ru: 'градус', gender: 'maskulin', collocation: 'bei 17 Grad', example: 'Es regnet bei maximal 17 Grad.' },
        { de: 'das Regenwetter', ru: 'дождливая погода', gender: 'neutrum', collocation: 'kaltes Regenwetter', example: 'Am Sonntag kommt das kalte Regenwetter dann auch nach Süddeutschland.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'Temperaturen fallen', example: 'Die Temperaturen fallen auch hier auf unter 15 Grad.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Es regnet bei maximal 17 Grad.' },
        { de: 'fallen', ru: 'падать', type: 'verb', forms: 'fällt, fiel, ist gefallen', example: 'Die Temperaturen fallen auch hier auf unter 15 Grad.' },
        { de: 'windig', ru: 'ветреный', type: 'adj', example: 'Am Wochenende ist es im Norden windig und bewölkt.' },
        { de: 'bewölkt', ru: 'облачный', type: 'adj', example: 'Am Wochenende ist es im Norden windig und bewölkt.' },
        { de: 'sonnig', ru: 'солнечный', type: 'adj', example: 'Im Süden am Samstag sonnig und warm bis 25 Grad.' },
      ],
      practiceSentences: [
        { de: 'Es wird kühler.', ru: 'Становится прохладнее.', note: 'V2, werden + компаратив' },
        { de: 'Die Sonne scheint am Montag.', ru: 'Солнце светит в понедельник.', note: 'V2, простой глагол' },
        { de: 'Es schneit im Winter.', ru: 'Зимой идёт снег.', note: 'V2, безличный глагол' },
        { de: 'Die Temperatur steigt auf 20 Grad.', ru: 'Температура поднимается до 20 градусов.', note: 'V2, steigen auf + Akk' },
        { de: 'Am Abend regnet es.', ru: 'Вечером идёт дождь.', note: 'V2 после обстоятельства' },
      ],
      question: {
        de: 'Wie wird das Wetter am Samstag im Süden?',
        ru: 'Какая погода будет в субботу на юге?',
        options: [
          { de: 'Windig und bewölkt mit Regen', ru: 'Ветрено и облачно с дождём' },
          { de: 'Sonnig und warm bis 25 Grad', ru: 'Солнечно и тепло до 25 градусов' },
          { de: 'Kalt mit Temperaturen unter 15 Grad', ru: 'Холодно с температурой ниже 15 градусов' },
        ],
        correct: 1,
        explanation: 'В прогнозе чётко указано: "Im Süden am Samstag sonnig und warm bis 25 Grad."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Radio-Gewinnspiel',
      type: 'радио-объявление',
      text: 'Und jetzt unser Frühstücks-Radio-Gewinnspiel für alle, die es noch nicht kennen. Genau um 7 Uhr spielen wir ein neues Lied. Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an. Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.',
      sentenceTranslations: {
        'Und jetzt unser Frühstücks-Radio-Gewinnspiel für alle, die es noch nicht kennen.': {
          literal: 'И сейчас наша завтрак-радио-выигрышная-игра для всех, кто это ещё не знают',
          literary: 'А сейчас наша утренняя радио-викторина для тех, кто её ещё не знает.'
        },
        'Genau um 7 Uhr spielen wir ein neues Lied.': {
          literal: 'Точно в 7 часов играем мы одну новую песню',
          literary: 'Ровно в 7 часов мы включим новую песню.'
        },
        'Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an.': {
          literal: 'Если вы знаете, как певец называется, звоните вы нам',
          literary: 'Если вы знаете, как зовут певца, звоните нам.'
        },
        'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.': {
          literal: 'Это даёт классные призы к выигрыванию: футболки, диски или один входной-билет для концерта вашего выбора',
          literary: 'Можно выиграть отличные призы: футболки, диски или билет на концерт по вашему выбору.'
        },
      },
      vocabulary: [
        { de: 'das Gewinnspiel', plural: 'die Gewinnspiele', ru: 'розыгрыш, викторина', gender: 'neutrum', collocation: 'beim Gewinnspiel mitmachen', example: 'Und jetzt unser Frühstücks-Radio-Gewinnspiel für alle, die es noch nicht kennen.' },
        { de: 'das Lied', plural: 'die Lieder', ru: 'песня', gender: 'neutrum', collocation: 'ein neues Lied spielen', example: 'Genau um 7 Uhr spielen wir ein neues Lied.' },
        { de: 'der Sänger', plural: 'die Sänger', ru: 'певец', gender: 'maskulin', collocation: 'wie der Sänger heißt', example: 'Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'приз', gender: 'maskulin', collocation: 'tolle Preise gewinnen', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'die Eintrittskarte', plural: 'die Eintrittskarten', ru: 'входной билет', gender: 'feminin', collocation: 'Eintrittskarte gewinnen', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'für ein Konzert', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'die Wahl', plural: 'die Wahlen', ru: 'выбор', gender: 'feminin', collocation: 'Ihrer Wahl', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinne, gewann, hat gewonnen', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'rufe an, rief an, hat angerufen', example: 'Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an.' },
        { de: 'toll', ru: 'отличный, классный', type: 'adj', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
      ],
      practiceSentences: [
        { de: 'Wir spielen Musik um 8 Uhr.', ru: 'Мы играем музыку в 8 часов.', note: 'V2, простой глагол' },
        { de: 'Rufen Sie mich morgen an.', ru: 'Позвоните мне завтра.', note: 'Imperativ, отделяемая приставка' },
        { de: 'Wenn du Zeit hast, komm vorbei.', ru: 'Если у тебя есть время, заходи.', note: 'глагол в конце Nebensatz' },
        { de: 'Es gibt viele Preise.', ru: 'Есть много призов.', note: 'es gibt конструкция' },
        { de: 'Ich kenne dieses Lied.', ru: 'Я знаю эту песню.', note: 'V2, переходный глагол' },
      ],
      question: {
        de: 'Was muss man tun, um bei dem Gewinnspiel zu gewinnen?',
        ru: 'Что нужно сделать, чтобы выиграть в розыгрыше?',
        options: [
          { de: 'Um 7 Uhr das Radio einschalten', ru: 'Включить радио в 7 часов' },
          { de: 'Den Namen des Sängers wissen und anrufen', ru: 'Знать имя певца и позвонить' },
          { de: 'Ein T-Shirt oder eine CD kaufen', ru: 'Купить футболку или диск' },
        ],
        correct: 1,
        explanation: 'В правилах сказано: "Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an."'
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
    text: 'Сегодня {0} матч в Олимпиахалле. Все {1} поблизости уже заняты. Нужно ехать в {2} у торгового центра. Тем временем муж звонит Сабине и просит забрать его тёмный {3} из {4}. Завтра {5} Хелены! Ингрид Зольмс сообщает госпоже Майер, что встреча состоится не в {6}, а в {7}. Она {8} там комнату. А по радио разыгрывают {9} на концерт.',
    blanks: [
      { answer: 'das Basketballspiel', hint: 'баскетбольный матч (das Basketballspiel)' },
      { answer: 'die Parkplätze', hint: 'парковки (der Parkplatz, Pl.)' },
      { answer: 'das Parkhaus', hint: 'паркинг (das Parkhaus)' },
      { answer: 'den Anzug', hint: 'костюм (der Anzug, Akk.)' },
      { answer: 'der Reinigung', hint: 'химчистка (die Reinigung, Dat.)' },
      { answer: 'die Hochzeit', hint: 'свадьба (die Hochzeit)' },
      { answer: 'dem Büro', hint: 'офис (das Büro, Dat.)' },
      { answer: 'dem Hotel', hint: 'отель (das Hotel, Dat.)' },
      { answer: 'hat reserviert', hint: 'забронировала (reservieren, Perf.)' },
      { answer: 'die Eintrittskarte', hint: 'входной билет (die Eintrittskarte)' },
    ],
  },

  grammarFocus: [
    'es gibt + Akkusativ: Im Parkhaus gibt es noch freie Plätze.',
    'Imperativ (Sie-Form): Nehmen Sie die Bahn.',
    'Отделяемая приставка stattfinden: Termin findet nicht statt.',
    'Perfekt: Das Geschenk habe ich schon gekauft.',
    'denken an + Akkusativ: Denkt bitte an meinen Anzug.',
    'weil-Nebensatz с глаголом в конце (из текстов Teil 1)',
    'Безличные конструкции погоды: Es regnet bei 17 Grad.',
    'Wenn-Konditionalsatz: Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an.',
  ],

  /* ─── AI-промты ─── */
  prompts: {
    exercises: {
      instruction: 'Интерактивные упражнения работают прямо на сайте — выберите любое из списка ниже.',
      promptText: null,
    },
    original: {
      instruction: 'Оригинальная транскрипция аудио — мини-тексты по частям.',
      promptText: null,
    },
    translation: {
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для таба "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Text 1 (Basketballspiel).',
    },
  },
};

LESSONS.push(LESSON_07);
