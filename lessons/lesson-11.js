/* ═══════════════════════════════════════════════════════════
   Lesson 11 — Goethe Zertifikat A2 Hören Modelltest 25
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_11 = {
  id: 'lesson-11',
  number: 11,
  title: 'Goethe A2 Hören — Modelltest 25',
  subtitle: 'Basketballspiel, Anzug, Hotel Leopold, Wetter, Gewinnspiel, Urlaubswoche, Interview Sarah',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-11',
  videoUrl: 'https://www.youtube.com/watch?v=ksr89-8r0R0',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Basketballspiel',
      type: 'объявление',
      text: 'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle. Die Parkplätze in der Nähe sind schon besetzt. Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze. Besucher von außerhalb sollten nicht mit dem Auto kommen. Nehmen Sie die Bahn. Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.',
      sentenceTranslations: {
        'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle.': { literal: 'Одна информация для посетителей баскетбольной-игры сегодня в Олимпиахалле.', literary: 'Информация для посетителей сегодняшнего баскетбольного матча в Олимпиахалле.' },
        'Die Parkplätze in der Nähe sind schon besetzt.': { literal: 'Парковочные-места в близости уже заняты.', literary: 'Парковки поблизости уже заняты.' },
        'Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze.': { literal: 'В парковочном-доме у торгового-центра дает это еще свободные места.', literary: 'В паркинге у торгового центра ещё есть свободные места.' },
        'Besucher von außerhalb sollten nicht mit dem Auto kommen.': { literal: 'Посетители из снаружи должны-бы не с автомобилем приходить.', literary: 'Иногородним посетителям не следует приезжать на машине.' },
        'Nehmen Sie die Bahn.': { literal: 'Возьмите вы поезд.', literary: 'Воспользуйтесь поездом.' },
        'Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.': { literal: 'От главного-вокзала дает это бесплатные автобусы к Олимпиахалле.', literary: 'От главного вокзала ходят бесплатные автобусы до Олимпиахалле.' },
      },
      vocabulary: [
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'die Besucher des Spiels', example: 'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle.' },
        { de: 'das Basketballspiel', plural: 'die Basketballspiele', ru: 'баскетбольный матч', gender: 'neutrum', collocation: 'zum Basketballspiel gehen', example: 'Eine Information für die Besucher des Basketballspiels heute in der Olympiahalle.' },
        { de: 'der Parkplatz', plural: 'die Parkplätze', ru: 'парковка', gender: 'maskulin', collocation: 'freie Parkplätze', example: 'Die Parkplätze in der Nähe sind schon besetzt.' },
        { de: 'das Parkhaus', plural: 'die Parkhäuser', ru: 'паркинг', gender: 'neutrum', collocation: 'im Parkhaus parken', example: 'Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze.' },
        { de: 'das Einkaufszentrum', plural: 'die Einkaufszentren', ru: 'торговый центр', gender: 'neutrum', collocation: 'am Einkaufszentrum', example: 'Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze.' },
        { de: 'die Bahn', plural: 'die Bahnen', ru: 'поезд', gender: 'feminin', collocation: 'die Bahn nehmen', example: 'Nehmen Sie die Bahn.' },
        { de: 'der Hauptbahnhof', plural: 'die Hauptbahnhöfe', ru: 'главный вокзал', gender: 'maskulin', collocation: 'vom Hauptbahnhof', example: 'Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.' },
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'kostenlose Busse', example: 'Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.' },
        { de: 'besetzt', ru: 'занятый', type: 'adj', example: 'Die Parkplätze in der Nähe sind schon besetzt.' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Vom Hauptbahnhof gibt es kostenlose Busse zur Olympiahalle.' },
      ],
      practiceSentences: [
        { de: 'Die Parkplätze sind besetzt.', ru: 'Парковки заняты.', note: 'sein + Partizip II' },
        { de: 'Es gibt freie Plätze.', ru: 'Есть свободные места.', note: 'es gibt + Akk.' },
        { de: 'Nehmen Sie den Bus!', ru: 'Возьмите автобус!', note: 'Imperativ Sie-Form' },
        { de: 'Vom Bahnhof fahren Busse.', ru: 'От вокзала ездят автобусы.', note: 'V2' },
        { de: 'Besucher sollten nicht kommen.', ru: 'Посетителям не следует приезжать.', note: 'sollten + Infinitiv' },
      ],
      question: {
        de: 'Wo können die Besucher noch parken?',
        ru: 'Где посетители ещё могут припарковаться?',
        options: [
          { de: 'In der Nähe der Olympiahalle', ru: 'Рядом с Олимпиахалле' },
          { de: 'Im Parkhaus am Einkaufszentrum', ru: 'В паркинге у торгового центра' },
          { de: 'Am Hauptbahnhof', ru: 'У главного вокзала' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "Im Parkhaus am Einkaufszentrum gibt es noch freie Plätze."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Sabine/Anzug',
      type: 'сообщение на автоответчике',
      text: 'Hallo Sabine, denkt bitte an meinen dunklen Anzug. Du wolltest ihn doch aus der Reinigung abholen. Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll. Das Geschenk hab ich heute in der Mittagspause schon gekauft. Die Blumen holen wir ja erst morgen früh. Dank dir.',
      sentenceTranslations: {
        'Hallo Sabine, denkt bitte an meinen dunklen Anzug.': { literal: 'Привет Сабина, думай пожалуйста о моем темном костюме.', literary: 'Привет, Сабина, пожалуйста, не забудь про мой тёмный костюм.' },
        'Du wolltest ihn doch aus der Reinigung abholen.': { literal: 'Ты хотела его же из химчистки забрать.', literary: 'Ты же хотела забрать его из химчистки.' },
        'Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll.': { literal: 'Иначе знаю я не, что я на Хелены свадьбе завтра надеть должен.', literary: 'Иначе я не знаю, что надеть завтра на свадьбу Хелены.' },
        'Das Geschenk hab ich heute in der Mittagspause schon gekauft.': { literal: 'Подарок имею я сегодня в обеденном-перерыве уже купленным.', literary: 'Подарок я уже купил сегодня в обеденный перерыв.' },
        'Die Blumen holen wir ja erst morgen früh.': { literal: 'Цветы забираем мы же только завтра рано.', literary: 'Цветы мы заберём только завтра утром.' },
        'Dank dir.': { literal: 'Благодарность тебе.', literary: 'Спасибо тебе.' },
      },
      vocabulary: [
        { de: 'der Anzug', plural: 'die Anzüge', ru: 'костюм', gender: 'maskulin', collocation: 'dunkler Anzug', example: 'Hallo Sabine, denkt bitte an meinen dunklen Anzug.' },
        { de: 'die Reinigung', plural: 'die Reinigungen', ru: 'химчистка', gender: 'feminin', collocation: 'aus der Reinigung abholen', example: 'Du wolltest ihn doch aus der Reinigung abholen.' },
        { de: 'die Hochzeit', plural: 'die Hochzeiten', ru: 'свадьба', gender: 'feminin', collocation: 'bei der Hochzeit', example: 'Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'ein Geschenk kaufen', example: 'Das Geschenk hab ich heute in der Mittagspause schon gekauft.' },
        { de: 'die Mittagspause', plural: 'die Mittagspausen', ru: 'обеденный перерыв', gender: 'feminin', collocation: 'in der Mittagspause', example: 'Das Geschenk hab ich heute in der Mittagspause schon gekauft.' },
        { de: 'die Blume', plural: 'die Blumen', ru: 'цветок', gender: 'feminin', collocation: 'Blumen holen', example: 'Die Blumen holen wir ja erst morgen früh.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Du wolltest ihn doch aus der Reinigung abholen.' },
        { de: 'anziehen', ru: 'надевать', type: 'verb', forms: 'zieht an, zog an, hat angezogen', example: 'Sonst weiß ich nicht, was ich bei Helenas Hochzeit morgen anziehen soll.' },
        { de: 'dunkel', ru: 'тёмный', type: 'adj', example: 'Hallo Sabine, denkt bitte an meinen dunklen Anzug.' },
      ],
      practiceSentences: [
        { de: 'Denk bitte an die Blumen!', ru: 'Пожалуйста, помни о цветах!', note: 'Imperativ' },
        { de: 'Ich hole das Paket ab.', ru: 'Я забираю посылку.', note: 'отделяемая приставка' },
        { de: 'Was soll ich anziehen?', ru: 'Что мне надеть?', note: 'модальный + Infinitiv' },
        { de: 'Wir haben das Geschenk gekauft.', ru: 'Мы купили подарок.', note: 'Perfekt' },
        { de: 'Die Jacke hole ich morgen.', ru: 'Куртку я заберу завтра.', note: 'Topikalisierung' },
      ],
      question: {
        de: 'Was soll Sabine heute machen?',
        ru: 'Что должна сделать Сабина сегодня?',
        options: [
          { de: 'Das Geschenk kaufen', ru: 'Купить подарок' },
          { de: 'Den Anzug aus der Reinigung holen', ru: 'Забрать костюм из химчистки' },
          { de: 'Die Blumen besorgen', ru: 'Достать цветы' },
        ],
        correct: 1,
        explanation: 'Говорящий просит: "Denkt bitte an meinen dunklen Anzug. Du wolltest ihn doch aus der Reinigung abholen."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Frau Meier',
      type: 'телефонное сообщение',
      text: 'Guten Tag, Frau Meier. Ingrid Solms hier. Der Termin heute findet nicht in meinem Büro statt. Da ist ein Fehler in der Einladung. Ich habe im Hotel Leopold einen Raum reserviert. Sie wissen ja, am Bahnhofsplatz. Bitte kommen Sie um 10 Uhr direkt dorthin. Danke. Auf Wiederhören.',
      sentenceTranslations: {
        'Guten Tag, Frau Meier.': { literal: 'Добрый день, госпожа Майер.', literary: 'Добрый день, госпожа Майер.' },
        'Ingrid Solms hier.': { literal: 'Ингрид Зольмс здесь.', literary: 'Это Ингрид Зольмс.' },
        'Der Termin heute findet nicht in meinem Büro statt.': { literal: 'Встреча сегодня находит не в моём офисе место.', literary: 'Встреча сегодня проходит не в моём офисе.' },
        'Da ist ein Fehler in der Einladung.': { literal: 'Там есть ошибка в приглашении.', literary: 'В приглашении есть ошибка.' },
        'Ich habe im Hotel Leopold einen Raum reserviert.': { literal: 'Я имею в отеле Леопольд комнату зарезервированной.', literary: 'Я забронировала комнату в отеле Леопольд.' },
        'Sie wissen ja, am Bahnhofsplatz.': { literal: 'Вы знаете же, на вокзальной-площади.', literary: 'Вы же знаете, на Вокзальной площади.' },
        'Bitte kommen Sie um 10 Uhr direkt dorthin.': { literal: 'Пожалуйста приходите вы в 10 часов прямо туда.', literary: 'Пожалуйста, приходите прямо туда к 10 часам.' },
        'Danke.': { literal: 'Спасибо.', literary: 'Спасибо.' },
        'Auf Wiederhören.': { literal: 'На до-слышания.', literary: 'До свидания (по телефону).' },
      },
      vocabulary: [
        { de: 'der Termin', plural: 'die Termine', ru: 'встреча, приём', gender: 'maskulin', collocation: 'der Termin findet statt', example: 'Der Termin heute findet nicht in meinem Büro statt.' },
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'in meinem Büro', example: 'Der Termin heute findet nicht in meinem Büro statt.' },
        { de: 'der Fehler', plural: 'die Fehler', ru: 'ошибка', gender: 'maskulin', collocation: 'ein Fehler in der Einladung', example: 'Da ist ein Fehler in der Einladung.' },
        { de: 'die Einladung', plural: 'die Einladungen', ru: 'приглашение', gender: 'feminin', collocation: 'in der Einladung', example: 'Da ist ein Fehler in der Einladung.' },
        { de: 'das Hotel', plural: 'die Hotels', ru: 'отель', gender: 'neutrum', collocation: 'im Hotel', example: 'Ich habe im Hotel Leopold einen Raum reserviert.' },
        { de: 'der Raum', plural: 'die Räume', ru: 'комната, помещение', gender: 'maskulin', collocation: 'einen Raum reservieren', example: 'Ich habe im Hotel Leopold einen Raum reserviert.' },
        { de: 'stattfinden', ru: 'проходить, состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Der Termin heute findet nicht in meinem Büro statt.' },
        { de: 'reservieren', ru: 'бронировать', type: 'verb', forms: 'reserviert, reservierte, hat reserviert', example: 'Ich habe im Hotel Leopold einen Raum reserviert.' },
      ],
      practiceSentences: [
        { de: 'Die Party findet morgen statt.', ru: 'Вечеринка состоится завтра.', note: 'отделяемая приставка' },
        { de: 'Ich habe ein Zimmer reserviert.', ru: 'Я забронировал комнату.', note: 'Perfekt' },
        { de: 'Da ist ein Problem.', ru: 'Есть проблема.', note: 'da ist' },
        { de: 'Kommen Sie um 9 Uhr!', ru: 'Приходите в 9 часов!', note: 'Imperativ Sie-Form' },
        { de: 'Der Kurs findet online statt.', ru: 'Курс проходит онлайн.', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Wo findet der Termin statt?',
        ru: 'Где состоится встреча?',
        options: [
          { de: 'Im Büro von Frau Solms', ru: 'В офисе госпожи Зольмс' },
          { de: 'Im Hotel Leopold', ru: 'В отеле Леопольд' },
          { de: 'Am Hauptbahnhof', ru: 'На главном вокзале' },
        ],
        correct: 1,
        explanation: 'Ингрид Зольмс сообщает: "Ich habe im Hotel Leopold einen Raum reserviert."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Nun zum Wetter. Am Wochenende ist es im Norden windig und bewölkt. Es regnet bei maximal 17 Grad. Im Süden am Samstag sonnig und warm bis 25 Grad. Am Sonntag kommt das kalte Regenwetter dann auch nach Süddeutschland. Die Temperaturen fallen auch hier auf unter 15 Grad.',
      sentenceTranslations: {
        'Nun zum Wetter.': { literal: 'Теперь к погоде.', literary: 'А теперь о погоде.' },
        'Am Wochenende ist es im Norden windig und bewölkt.': { literal: 'На выходных есть это на севере ветрено и облачно.', literary: 'На выходных на севере будет ветрено и облачно.' },
        'Es regnet bei maximal 17 Grad.': { literal: 'Это дождит при максимально 17 градусах.', literary: 'Будет дождь при максимальной температуре 17 градусов.' },
        'Im Süden am Samstag sonnig und warm bis 25 Grad.': { literal: 'На юге в субботу солнечно и тепло до 25 градусов.', literary: 'На юге в субботу солнечно и тепло, до 25 градусов.' },
        'Am Sonntag kommt das kalte Regenwetter dann auch nach Süddeutschland.': { literal: 'В воскресенье приходит холодная дождливая-погода тогда также в Южную-Германию.', literary: 'В воскресенье холодная дождливая погода придёт и в Южную Германию.' },
        'Die Temperaturen fallen auch hier auf unter 15 Grad.': { literal: 'Температуры падают также здесь на под 15 градусов.', literary: 'Температура и здесь упадёт ниже 15 градусов.' },
      },
      vocabulary: [
        { de: 'das Wetter', plural: '-', ru: 'погода', gender: 'neutrum', collocation: 'zum Wetter', example: 'Nun zum Wetter.' },
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'am Wochenende', example: 'Am Wochenende ist es im Norden windig und bewölkt.' },
        { de: 'das Regenwetter', plural: '-', ru: 'дождливая погода', gender: 'neutrum', collocation: 'kaltes Regenwetter', example: 'Am Sonntag kommt das kalte Regenwetter dann auch nach Süddeutschland.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'die Temperaturen fallen', example: 'Die Temperaturen fallen auch hier auf unter 15 Grad.' },
        { de: 'fallen', ru: 'падать', type: 'verb', forms: 'fällt, fiel, ist gefallen', example: 'Die Temperaturen fallen auch hier auf unter 15 Grad.' },
        { de: 'windig', ru: 'ветреный', type: 'adj', example: 'Am Wochenende ist es im Norden windig und bewölkt.' },
        { de: 'bewölkt', ru: 'облачный', type: 'adj', example: 'Am Wochenende ist es im Norden windig und bewölkt.' },
        { de: 'sonnig', ru: 'солнечный', type: 'adj', example: 'Im Süden am Samstag sonnig und warm bis 25 Grad.' },
      ],
      practiceSentences: [
        { de: 'Es ist heute kalt.', ru: 'Сегодня холодно.', note: 'безличное es' },
        { de: 'Es regnet morgen.', ru: 'Завтра будет дождь.', note: 'безличное es' },
        { de: 'Die Preise fallen.', ru: 'Цены падают.', note: 'V2' },
        { de: 'Das Wetter wird besser.', ru: 'Погода улучшается.', note: 'werden + Adj.' },
        { de: 'Am Wochenende scheint die Sonne.', ru: 'На выходных светит солнце.', note: 'V2' },
      ],
      question: {
        de: 'Wie ist das Wetter am Samstag im Süden?',
        ru: 'Какая погода в субботу на юге?',
        options: [
          { de: 'Windig und bewölkt', ru: 'Ветрено и облачно' },
          { de: 'Kalt und regnerisch', ru: 'Холодно и дождливо' },
          { de: 'Sonnig und warm', ru: 'Солнечно и тепло' },
        ],
        correct: 2,
        explanation: 'В прогнозе сказано: "Im Süden am Samstag sonnig und warm bis 25 Grad."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Radio-Gewinnspiel',
      type: 'радио-объявление',
      text: 'Und jetzt unser Frühstücksradio-Gewinnspiel für alle, die es noch nicht kennen. Genau um 7 Uhr spielen wir ein neues Lied. Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an. Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.',
      sentenceTranslations: {
        'Und jetzt unser Frühstücksradio-Gewinnspiel für alle, die es noch nicht kennen.': { literal: 'И сейчас наша завтрак-радио-игра-с-призами для всех, кто это ещё не знают.', literary: 'А сейчас наша утренняя радиовикторина для тех, кто её ещё не знает.' },
        'Genau um 7 Uhr spielen wir ein neues Lied.': { literal: 'Точно в 7 часов играем мы новую песню.', literary: 'Ровно в 7 часов мы сыграем новую песню.' },
        'Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an.': { literal: 'Если вы знаете, как певец называется, звоните вы нам.', literary: 'Если вы знаете, как зовут певца, звоните нам.' },
        'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.': { literal: 'Это даёт отличные призы выиграть: футболки, диски или один входной-билет для концерта вашего выбора.', literary: 'Можно выиграть отличные призы: футболки, диски или билет на концерт по вашему выбору.' },
      },
      vocabulary: [
        { de: 'das Gewinnspiel', plural: 'die Gewinnspiele', ru: 'розыгрыш призов', gender: 'neutrum', collocation: 'Radio-Gewinnspiel', example: 'Und jetzt unser Frühstücksradio-Gewinnspiel für alle, die es noch nicht kennen.' },
        { de: 'das Lied', plural: 'die Lieder', ru: 'песня', gender: 'neutrum', collocation: 'ein neues Lied', example: 'Genau um 7 Uhr spielen wir ein neues Lied.' },
        { de: 'der Sänger', plural: 'die Sänger', ru: 'певец', gender: 'maskulin', collocation: 'der Sänger heißt', example: 'Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'приз', gender: 'maskulin', collocation: 'tolle Preise', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'die Eintrittskarte', plural: 'die Eintrittskarten', ru: 'входной билет', gender: 'feminin', collocation: 'Eintrittskarte für Konzert', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'die Wahl', plural: 'die Wahlen', ru: 'выбор', gender: 'feminin', collocation: 'Ihrer Wahl', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Wenn Sie wissen, wie der Sänger heißt, rufen Sie uns an.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Es gibt tolle Preise zu gewinnen: T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl.' },
      ],
      practiceSentences: [
        { de: 'Wir spielen Musik.', ru: 'Мы играем музыку.', note: 'V2' },
        { de: 'Rufen Sie mich an!', ru: 'Позвоните мне!', note: 'Imperativ + отделяемая' },
        { de: 'Es gibt viel zu tun.', ru: 'Много дел.', note: 'es gibt + zu + Infinitiv' },
        { de: 'Um 8 Uhr beginnt der Kurs.', ru: 'В 8 часов начинается курс.', note: 'V2' },
        { de: 'Wenn es regnet, bleibe ich zu Hause.', ru: 'Если идёт дождь, я остаюсь дома.', note: 'wenn-Nebensatz' },
      ],
      question: {
        de: 'Was kann man beim Gewinnspiel gewinnen?',
        ru: 'Что можно выиграть в розыгрыше?',
        options: [
          { de: 'Nur CDs', ru: 'Только диски' },
          { de: 'Verschiedene Preise wie T-Shirts und Konzertkarten', ru: 'Разные призы: футболки и билеты на концерты' },
          { de: 'Nur Geld', ru: 'Только деньги' },
        ],
        correct: 1,
        explanation: 'Упоминаются призы: "T-Shirts, CDs oder eine Eintrittskarte für ein Konzert Ihrer Wahl."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Urlaubswoche',
      type: 'диалог',
      text: 'Sag mal, hast du schon Ideen für unsere Woche Urlaub? Wir wollen ja zu Hause bleiben, aber jeden Tag etwas Besonderes machen. Vielleicht ein bisschen Sport oder Kultur? Mal sehen. Ins Kino gehen? Am Montag kommt ein guter Film. Gute Idee! Montags gibt es dort Ermäßigung. Und am Dienstag müssen wir zu unserem Tanzkurs, oder? Diese Woche nicht, die Lehrerin ist auch im Urlaub. Wir könnten ins Theater gehen. Ich habe gesehen, es gibt ein interessantes Stück. Warum nicht? Wir müssen am Mittwoch aber Sport machen. Wir können schwimmen gehen im neuen Schwimmbad. Aber du weißt doch, dass ich das nicht gerne mache. Wir könnten einen Ausflug mit dem Rad machen. Das macht mir ja auch Spaß. Was machen wir am Donnerstag und Freitag? Am Donnerstag können wir Eis essen gehen bei Francesco. Moment, Donnerstagabend sind wir bei Julia und Tim zum Kochen eingeladen. Da sollten wir vorher nicht zu viel essen. Ja, da hast du recht. Und am Freitag, da gehen wir zum Konzert vorm Rathaus. Da spielen tolle Bands. Okay, wie du möchtest. Aber am nächsten Tag, am Samstag, dass du da nicht so lange schläfst. Da ist nämlich unsere Schifffahrt auf der Elbe. Keine Sorge, ich werde früh wach sein und dir sogar das Frühstück ans Bett bringen.',
      sentenceTranslations: {
        'Sag mal, hast du schon Ideen für unsere Woche Urlaub?': { literal: 'Скажи-ка, имеешь ты уже идеи для нашей недели отпуска?', literary: 'У тебя уже есть идеи на нашу неделю отпуска?' },
        'Wir wollen ja zu Hause bleiben, aber jeden Tag etwas Besonderes machen.': { literal: 'Мы хотим же дома остаться, но каждый день что-то особенное делать.', literary: 'Мы же хотим остаться дома, но каждый день делать что-то особенное.' },
        'Vielleicht ein bisschen Sport oder Kultur?': { literal: 'Может-быть немного спорта или культуры?', literary: 'Может, немного спорта или культуры?' },
        'Mal sehen.': { literal: 'Раз посмотреть.', literary: 'Посмотрим.' },
        'Ins Kino gehen?': { literal: 'В кино пойти?', literary: 'Пойти в кино?' },
        'Am Montag kommt ein guter Film.': { literal: 'В понедельник приходит хороший фильм.', literary: 'В понедельник идёт хороший фильм.' },
        'Gute Idee!': { literal: 'Хорошая идея!', literary: 'Хорошая идея!' },
        'Montags gibt es dort Ermäßigung.': { literal: 'По-понедельникам даёт это там скидку.', literary: 'По понедельникам там есть скидка.' },
        'Und am Dienstag müssen wir zu unserem Tanzkurs, oder?': { literal: 'И во вторник должны мы к нашему танцевальному-курсу, или?', literary: 'А во вторник нам надо на танцевальный курс, да?' },
        'Diese Woche nicht, die Lehrerin ist auch im Urlaub.': { literal: 'Эту неделю нет, учительница есть тоже в отпуске.', literary: 'На этой неделе нет, учительница тоже в отпуске.' },
        'Wir könnten ins Theater gehen.': { literal: 'Мы могли-бы в театр пойти.', literary: 'Мы могли бы пойти в театр.' },
        'Ich habe gesehen, es gibt ein interessantes Stück.': { literal: 'Я имею увиденным, это даёт интересную пьесу.', literary: 'Я видел, там идёт интересная пьеса.' },
        'Warum nicht?': { literal: 'Почему нет?', literary: 'Почему бы и нет?' },
        'Wir müssen am Mittwoch aber Sport machen.': { literal: 'Мы должны в среду но спорт делать.', literary: 'Но в среду нам надо заняться спортом.' },
        'Wir können schwimmen gehen im neuen Schwimmbad.': { literal: 'Мы можем плавать пойти в новом бассейне.', literary: 'Мы можем пойти поплавать в новом бассейне.' },
        'Aber du weißt doch, dass ich das nicht gerne mache.': { literal: 'Но ты знаешь же, что я это не охотно делаю.', literary: 'Но ты же знаешь, что я это не люблю.' },
        'Wir könnten einen Ausflug mit dem Rad machen.': { literal: 'Мы могли-бы поездку с велосипедом делать.', literary: 'Мы могли бы совершить велосипедную прогулку.' },
        'Das macht mir ja auch Spaß.': { literal: 'Это делает мне же тоже удовольствие.', literary: 'Мне это тоже нравится.' },
        'Was machen wir am Donnerstag und Freitag?': { literal: 'Что делаем мы в четверг и пятницу?', literary: 'Что будем делать в четверг и пятницу?' },
        'Am Donnerstag können wir Eis essen gehen bei Francesco.': { literal: 'В четверг можем мы мороженое есть пойти у Франческо.', literary: 'В четверг можем пойти есть мороженое к Франческо.' },
        'Moment, Donnerstagabend sind wir bei Julia und Tim zum Kochen eingeladen.': { literal: 'Момент, четверг-вечером есть мы у Юлии и Тима к готовке приглашены.', literary: 'Подожди, в четверг вечером мы приглашены к Юлии и Тиму на готовку.' },
        'Da sollten wir vorher nicht zu viel essen.': { literal: 'Тогда должны-бы мы заранее не слишком много есть.', literary: 'Тогда нам не стоит есть слишком много заранее.' },
        'Ja, da hast du recht.': { literal: 'Да, тут имеешь ты правоту.', literary: 'Да, ты прав.' },
        'Und am Freitag, da gehen wir zum Konzert vorm Rathaus.': { literal: 'И в пятницу, тут идём мы к концерту перед ратушей.', literary: 'А в пятницу мы пойдём на концерт перед ратушей.' },
        'Da spielen tolle Bands.': { literal: 'Там играют классные группы.', literary: 'Там играют классные группы.' },
        'Okay, wie du möchtest.': { literal: 'Окей, как ты хочешь.', literary: 'Хорошо, как хочешь.' },
        'Aber am nächsten Tag, am Samstag, dass du da nicht so lange schläfst.': { literal: 'Но на следующий день, в субботу, что ты тут не так долго спишь.', literary: 'Но на следующий день, в субботу, смотри не проспи.' },
        'Da ist nämlich unsere Schifffahrt auf der Elbe.': { literal: 'Тут есть а-именно наша поездка-на-корабле на Эльбе.', literary: 'Ведь у нас прогулка на кораблике по Эльбе.' },
        'Keine Sorge, ich werde früh wach sein und dir sogar das Frühstück ans Bett bringen.': { literal: 'Никакой заботы, я буду рано бодрствующим быть и тебе даже завтрак к кровати приносить.', literary: 'Не переживай, я проснусь рано и даже принесу тебе завтрак в постель.' },
      },
      vocabulary: [
        { de: 'die Idee', plural: 'die Ideen', ru: 'идея', gender: 'feminin', collocation: 'Ideen für Urlaub', example: 'Sag mal, hast du schon Ideen für unsere Woche Urlaub?' },
        { de: 'die Ermäßigung', plural: 'die Ermäßigungen', ru: 'скидка', gender: 'feminin', collocation: 'es gibt Ermäßigung', example: 'Montags gibt es dort Ermäßigung.' },
        { de: 'der Tanzkurs', plural: 'die Tanzkurse', ru: 'танцевальный курс', gender: 'maskulin', collocation: 'zum Tanzkurs gehen', example: 'Und am Dienstag müssen wir zu unserem Tanzkurs, oder?' },
        { de: 'das Theater', plural: 'die Theater', ru: 'театр', gender: 'neutrum', collocation: 'ins Theater gehen', example: 'Wir könnten ins Theater gehen.' },
        { de: 'das Schwimmbad', plural: 'die Schwimmbäder', ru: 'бассейн', gender: 'neutrum', collocation: 'im Schwimmbad', example: 'Wir können schwimmen gehen im neuen Schwimmbad.' },
        { de: 'der Ausflug', plural: 'die Ausflüge', ru: 'поездка, экскурсия', gender: 'maskulin', collocation: 'einen Ausflug machen', example: 'Wir könnten einen Ausflug mit dem Rad machen.' },
        { de: 'das Rathaus', plural: 'die Rathäuser', ru: 'ратуша', gender: 'neutrum', collocation: 'vor dem Rathaus', example: 'Und am Freitag, da gehen wir zum Konzert vorm Rathaus.' },
        { de: 'die Schifffahrt', plural: 'die Schifffahrten', ru: 'прогулка на корабле', gender: 'feminin', collocation: 'Schifffahrt auf der Elbe', example: 'Da ist nämlich unsere Schifffahrt auf der Elbe.' },
        { de: 'das Frühstück', plural: 'die Frühstücke', ru: 'завтрак', gender: 'neutrum', collocation: 'Frühstück ans Bett', example: 'Keine Sorge, ich werde früh wach sein und dir sogar das Frühstück ans Bett bringen.' },
        { de: 'schwimmen', ru: 'плавать', type: 'verb', forms: 'schwimmt, schwamm, ist geschwommen', example: 'Wir können schwimmen gehen im neuen Schwimmbad.' },
        { de: 'einladen', ru: 'приглашать', type: 'verb', forms: 'lädt ein, lud ein, hat eingeladen', example: 'Moment, Donnerstagabend sind wir bei Julia und Tim zum Kochen eingeladen.' },
      ],
      practiceSentences: [
        { de: 'Wir wollen schwimmen gehen.', ru: 'Мы хотим пойти плавать.', note: 'модальный + 2 инфинитива' },
        { de: 'Montags arbeite ich nicht.', ru: 'По понедельникам я не работаю.', note: 'V2 после наречия' },
        { de: 'Wir könnten ins Kino gehen.', ru: 'Мы могли бы пойти в кино.', note: 'Konjunktiv II' },
        { de: 'Ich weiß, dass er kommt.', ru: 'Я знаю, что он придёт.', note: 'dass-Satz' },
        { de: 'Wir sollten früh gehen.', ru: 'Нам следует уйти рано.', note: 'sollten + Infinitiv' },
      ],
      question: {
        de: 'Was machen die beiden am Mittwoch?',
        ru: 'Что они делают в среду?',
        options: [
          { de: 'Sie gehen schwimmen', ru: 'Идут плавать' },
          { de: 'Sie machen einen Radausflug', ru: 'Совершают велосипедную прогулку' },
          { de: 'Sie gehen ins Theater', ru: 'Идут в театр' },
        ],
        correct: 1,
        explanation: 'После обсуждения плавания женщина предлагает: "Wir könnten einen Ausflug mit dem Rad machen" и мужчина соглашается.'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Essen gestern',
      type: 'диалог',
      text: 'Was hast du gestern Abend Tolles gegessen? Ich wollte nur einen Hamburger haben, aber Lena und Sarah wollten lieber Fisch essen gehen. Im Fischrestaurant gab es auch Hähnchen, also habe ich das genommen. Es war okay. Dann ist es ja gut.',
      sentenceTranslations: {
        'Was hast du gestern Abend Tolles gegessen?': { literal: 'Что имеешь ты вчера вечером классного съеденным?', literary: 'Что классного ты ел вчера вечером?' },
        'Ich wollte nur einen Hamburger haben, aber Lena und Sarah wollten lieber Fisch essen gehen.': { literal: 'Я хотел только один гамбургер иметь, но Лена и Сара хотели лучше рыбу есть пойти.', literary: 'Я хотел только гамбургер, но Лена и Сара предпочли пойти есть рыбу.' },
        'Im Fischrestaurant gab es auch Hähnchen, also habe ich das genommen.': { literal: 'В рыбном-ресторане давало это также курицу, итак имею я это взятым.', literary: 'В рыбном ресторане была и курица, поэтому я взял её.' },
        'Es war okay.': { literal: 'Это было нормально.', literary: 'Было нормально.' },
        'Dann ist es ja gut.': { literal: 'Тогда есть это же хорошо.', literary: 'Тогда хорошо.' },
      },
      vocabulary: [
        { de: 'der Hamburger', plural: 'die Hamburger', ru: 'гамбургер', gender: 'maskulin', collocation: 'einen Hamburger haben', example: 'Ich wollte nur einen Hamburger haben, aber Lena und Sarah wollten lieber Fisch essen gehen.' },
        { de: 'der Fisch', plural: 'die Fische', ru: 'рыба', gender: 'maskulin', collocation: 'Fisch essen gehen', example: 'Ich wollte nur einen Hamburger haben, aber Lena und Sarah wollten lieber Fisch essen gehen.' },
        { de: 'das Fischrestaurant', plural: 'die Fischrestaurants', ru: 'рыбный ресторан', gender: 'neutrum', collocation: 'im Fischrestaurant', example: 'Im Fischrestaurant gab es auch Hähnchen, also habe ich das genommen.' },
        { de: 'das Hähnchen', plural: 'die Hähnchen', ru: 'курица', gender: 'neutrum', collocation: 'Hähnchen nehmen', example: 'Im Fischrestaurant gab es auch Hähnchen, also habe ich das genommen.' },
        { de: 'nehmen', ru: 'брать, заказывать', type: 'verb', forms: 'nimmt, nahm, hat genommen', example: 'Im Fischrestaurant gab es auch Hähnchen, also habe ich das genommen.' },
      ],
      practiceSentences: [
        { de: 'Was hast du gekauft?', ru: 'Что ты купил?', note: 'W-Frage + Perfekt' },
        { de: 'Ich wollte Pizza essen.', ru: 'Я хотел есть пиццу.', note: 'Präteritum модального' },
        { de: 'Es gab kein Brot.', ru: 'Хлеба не было.', note: 'Präteritum es gibt' },
        { de: 'Wir gehen heute essen.', ru: 'Мы идём сегодня поесть.', note: 'Infinitiv цели' },
        { de: 'Ich habe Fisch genommen.', ru: 'Я взял рыбу.', note: 'Perfekt' },
      ],
      question: {
        de: 'Was hat die Person gestern gegessen?',
        ru: 'Что человек ел вчера?',
        options: [
          { de: 'Einen Hamburger', ru: 'Гамбургер' },
          { de: 'Fisch', ru: 'Рыбу' },
          { de: 'Hähnchen', ru: 'Курицу' },
        ],
        correct: 2,
        explanation: 'Человек говорит: "Im Fischrestaurant gab es auch Hähnchen, also habe ich das genommen."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Jacke/Geschäft',
      type: 'диалог в магазине',
      text: 'Entschuldigung, die Jacke da gefällt mir. Die mit den weißen Buchstaben. Welche Größe haben Sie denn? L. Oh, tut mir leid, aber diese haben wir nur noch in S. Aber vielleicht gefällt Ihnen die Jeansjacke hier oder der blaue Mantel? Die Jeansjacke gefällt mir nicht. Der Mantel ist hübsch, aber zu warm. Den brauche ich nicht.',
      sentenceTranslations: {
        'Entschuldigung, die Jacke da gefällt mir.': { literal: 'Извинение, куртка там нравится мне.', literary: 'Простите, мне нравится вон та куртка.' },
        'Die mit den weißen Buchstaben.': { literal: 'Та с белыми буквами.', literary: 'Та, с белыми буквами.' },
        'Welche Größe haben Sie denn?': { literal: 'Какой размер имеете Вы же?', literary: 'Какой у вас размер?' },
        'L.': { literal: 'Л.', literary: 'L.' },
        'Oh, tut mir leid, aber diese haben wir nur noch in S.': { literal: 'О, делает мне жалко, но эту имеем мы только ещё в S.', literary: 'О, извините, но эта у нас осталась только в размере S.' },
        'Aber vielleicht gefällt Ihnen die Jeansjacke hier oder der blaue Mantel?': { literal: 'Но может-быть нравится вам джинсовая-куртка здесь или синее пальто?', literary: 'Но может, вам понравится джинсовая куртка или синее пальто?' },
        'Die Jeansjacke gefällt mir nicht.': { literal: 'Джинсовая-куртка нравится мне не.', literary: 'Джинсовая куртка мне не нравится.' },
        'Der Mantel ist hübsch, aber zu warm.': { literal: 'Пальто есть красивое, но слишком тёплое.', literary: 'Пальто красивое, но слишком тёплое.' },
        'Den brauche ich nicht.': { literal: 'Его нуждаюсь я не.', literary: 'Оно мне не нужно.' },
      },
      vocabulary: [
        { de: 'die Jacke', plural: 'die Jacken', ru: 'куртка', gender: 'feminin', collocation: 'die Jacke gefällt mir', example: 'Entschuldigung, die Jacke da gefällt mir.' },
        { de: 'der Buchstabe', plural: 'die Buchstaben', ru: 'буква', gender: 'maskulin', collocation: 'weiße Buchstaben', example: 'Die mit den weißen Buchstaben.' },
        { de: 'die Größe', plural: 'die Größen', ru: 'размер', gender: 'feminin', collocation: 'welche Größe', example: 'Welche Größe haben Sie denn?' },
        { de: 'die Jeansjacke', plural: 'die Jeansjacken', ru: 'джинсовая куртка', gender: 'feminin', collocation: 'die Jeansjacke hier', example: 'Aber vielleicht gefällt Ihnen die Jeansjacke hier oder der blaue Mantel?' },
        { de: 'der Mantel', plural: 'die Mäntel', ru: 'пальто', gender: 'maskulin', collocation: 'blauer Mantel', example: 'Der Mantel ist hübsch, aber zu warm.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Entschuldigung, die Jacke da gefällt mir.' },
        { de: 'hübsch', ru: 'красивый', type: 'adj', example: 'Der Mantel ist hübsch, aber zu warm.' },
      ],
      practiceSentences: [
        { de: 'Das Hemd gefällt mir.', ru: 'Мне нравится рубашка.', note: 'gefallen + Dativ' },
        { de: 'Wir haben nur noch zwei.', ru: 'У нас осталось только два.', note: 'nur noch' },
        { de: 'Die Hose ist zu klein.', ru: 'Брюки слишком малы.', note: 'zu + Adj.' },
        { de: 'Diese brauche ich nicht.', ru: 'Это мне не нужно.', note: 'Topikalisierung' },
        { de: 'Die Schuhe dort gefallen mir.', ru: 'Мне нравятся те туфли.', note: 'gefallen + Dativ' },
      ],
      question: {
        de: 'Warum kauft die Kundin den Mantel nicht?',
        ru: 'Почему покупательница не покупает пальто?',
        options: [
          { de: 'Er ist zu teuer', ru: 'Оно слишком дорогое' },
          { de: 'Er ist zu warm', ru: 'Оно слишком тёплое' },
          { de: 'Die Farbe gefällt ihr nicht', ru: 'Ей не нравится цвет' },
        ],
        correct: 1,
        explanation: 'Покупательница говорит: "Der Mantel ist hübsch, aber zu warm. Den brauche ich nicht."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Sportverein',
      type: 'телефонный разговор',
      text: 'Ja bitte? Guten Tag, Herr Tom, Frau Mann vom Sportverein Ramersdorf. Ich rufe an wegen Ihrer Anmeldung. Das ausgefüllte Formular habe ich Ihnen gestern in den Briefkasten gesteckt. Ja, das habe ich hier. Aber für den Ausweis brauchen wir noch ein Foto von Ihnen. Kein Problem, ich bringe Ihnen morgen eins. Sonst haben wir alles, auch Ihre Unterschrift. Gut, dann bis morgen.',
      sentenceTranslations: {
        'Ja bitte?': { literal: 'Да пожалуйста?', literary: 'Да, слушаю?' },
        'Guten Tag, Herr Tom, Frau Mann vom Sportverein Ramersdorf.': { literal: 'Добрый день, господин Том, госпожа Манн от спортклуба Рамерсдорф.', literary: 'Добрый день, господин Том, госпожа Манн из спортклуба Рамерсдорф.' },
        'Ich rufe an wegen Ihrer Anmeldung.': { literal: 'Я звоню из-за вашей регистрации.', literary: 'Я звоню по поводу вашей регистрации.' },
        'Das ausgefüllte Formular habe ich Ihnen gestern in den Briefkasten gesteckt.': { literal: 'Заполненный формуляр имею я вам вчера в почтовый-ящик засунутым.', literary: 'Заполненный формуляр я вчера положила вам в почтовый ящик.' },
        'Ja, das habe ich hier.': { literal: 'Да, это имею я здесь.', literary: 'Да, он у меня.' },
        'Aber für den Ausweis brauchen wir noch ein Foto von Ihnen.': { literal: 'Но для удостоверения нуждаемся мы ещё одно фото от вас.', literary: 'Но для удостоверения нам нужна ещё ваша фотография.' },
        'Kein Problem, ich bringe Ihnen morgen eins.': { literal: 'Никакой проблемы, я принесу вам завтра одно.', literary: 'Без проблем, я принесу вам одну завтра.' },
        'Sonst haben wir alles, auch Ihre Unterschrift.': { literal: 'Иначе имеем мы всё, также вашу подпись.', literary: 'В остальном у нас всё есть, включая вашу подпись.' },
        'Gut, dann bis morgen.': { literal: 'Хорошо, тогда до завтра.', literary: 'Хорошо, тогда до завтра.' },
      },
      vocabulary: [
        { de: 'der Sportverein', plural: 'die Sportvereine', ru: 'спортклуб', gender: 'maskulin', collocation: 'vom Sportverein', example: 'Guten Tag, Herr Tom, Frau Mann vom Sportverein Ramersdorf.' },
        { de: 'die Anmeldung', plural: 'die Anmeldungen', ru: 'регистрация', gender: 'feminin', collocation: 'wegen der Anmeldung', example: 'Ich rufe an wegen Ihrer Anmeldung.' },
        { de: 'das Formular', plural: 'die Formulare', ru: 'формуляр, бланк', gender: 'neutrum', collocation: 'ausgefülltes Formular', example: 'Das ausgefüllte Formular habe ich Ihnen gestern in den Briefkasten gesteckt.' },
        { de: 'der Briefkasten', plural: 'die Briefkästen', ru: 'почтовый ящик', gender: 'maskulin', collocation: 'in den Briefkasten stecken', example: 'Das ausgefüllte Formular habe ich Ihnen gestern in den Briefkasten gesteckt.' },
        { de: 'der Ausweis', plural: 'die Ausweise', ru: 'удостоверение', gender: 'maskulin', collocation: 'für den Ausweis', example: 'Aber für den Ausweis brauchen wir noch ein Foto von Ihnen.' },
        { de: 'das Foto', plural: 'die Fotos', ru: 'фотография', gender: 'neutrum', collocation: 'ein Foto bringen', example: 'Aber für den Ausweis brauchen wir noch ein Foto von Ihnen.' },
        { de: 'die Unterschrift', plural: 'die Unterschriften', ru: 'подпись', gender: 'feminin', collocation: 'Ihre Unterschrift', example: 'Sonst haben wir alles, auch Ihre Unterschrift.' },
        { de: 'stecken', ru: 'класть, совать', type: 'verb', forms: 'steckt, steckte, hat gesteckt', example: 'Das ausgefüllte Formular habe ich Ihnen gestern in den Briefkasten gesteckt.' },
      ],
      practiceSentences: [
        { de: 'Ich rufe dich an.', ru: 'Я тебе звоню.', note: 'отделяемая приставка' },
        { de: 'Wir brauchen ein Formular.', ru: 'Нам нужен формуляр.', note: 'V2' },
        { de: 'Er steckt den Brief in die Tasche.', ru: 'Он кладёт письмо в карман.', note: 'Akk. направление' },
        { de: 'Ich bringe dir eins.', ru: 'Я принесу тебе одну.', note: 'eins как заместитель' },
        { de: 'Wegen des Wetters bleiben wir.', ru: 'Из-за погоды мы остаёмся.', note: 'wegen + Gen.' },
      ],
      question: {
        de: 'Was braucht der Sportverein noch von Herrn Tom?',
        ru: 'Что ещё нужно спортклубу от господина Тома?',
        options: [
          { de: 'Das ausgefüllte Formular', ru: 'Заполненный формуляр' },
          { de: 'Ein Foto', ru: 'Фотография' },
          { de: 'Die Unterschrift', ru: 'Подпись' },
        ],
        correct: 1,
        explanation: 'Сотрудник клуба говорит: "Aber für den Ausweis brauchen wir noch ein Foto von Ihnen."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Herr Mittermeier',
      type: 'телефонный разговор',
      text: 'Hier Herr Mittermeier aus Hausnummer 9. Wir haben gestern schon wegen der Reparaturen telefoniert. Der Mechaniker hat den Aufzug in Ihrem Haus gestern Abend noch repariert und die Lampe am Eingang geht auch wieder. Ja, ja, aber jetzt wird die Heizung in meiner Wohnung nicht mehr warm. Können Sie vorbeikommen und sich das mal ansehen?',
      sentenceTranslations: {
        'Hier Herr Mittermeier aus Hausnummer 9.': { literal: 'Здесь господин Миттермайер из номера-дома 9.', literary: 'Это господин Миттермайер из дома номер 9.' },
        'Wir haben gestern schon wegen der Reparaturen telefoniert.': { literal: 'Мы имеем вчера уже из-за ремонтов телефонированным.', literary: 'Мы вчера уже созванивались по поводу ремонтов.' },
        'Der Mechaniker hat den Aufzug in Ihrem Haus gestern Abend noch repariert und die Lampe am Eingang geht auch wieder.': { literal: 'Механик имеет лифт в вашем доме вчера вечером ещё отремонтированным и лампа у входа идёт тоже снова.', literary: 'Механик вчера вечером ещё отремонтировал лифт в вашем доме, и лампа у входа тоже снова работает.' },
        'Ja, ja, aber jetzt wird die Heizung in meiner Wohnung nicht mehr warm.': { literal: 'Да, да, но сейчас становится отопление в моей квартире не больше тёплым.', literary: 'Да, да, но теперь отопление в моей квартире больше не греет.' },
        'Können Sie vorbeikommen und sich das mal ansehen?': { literal: 'Можете вы зайти-мимо и себе это раз посмотреть?', literary: 'Можете зайти и посмотреть?' },
      },
      vocabulary: [
        { de: 'die Hausnummer', plural: 'die Hausnummern', ru: 'номер дома', gender: 'feminin', collocation: 'aus Hausnummer 9', example: 'Hier Herr Mittermeier aus Hausnummer 9.' },
        { de: 'die Reparatur', plural: 'die Reparaturen', ru: 'ремонт', gender: 'feminin', collocation: 'wegen der Reparaturen', example: 'Wir haben gestern schon wegen der Reparaturen telefoniert.' },
        { de: 'der Mechaniker', plural: 'die Mechaniker', ru: 'механик', gender: 'maskulin', collocation: 'der Mechaniker repariert', example: 'Der Mechaniker hat den Aufzug in Ihrem Haus gestern Abend noch repariert und die Lampe am Eingang geht auch wieder.' },
        { de: 'der Aufzug', plural: 'die Aufzüge', ru: 'лифт', gender: 'maskulin', collocation: 'den Aufzug reparieren', example: 'Der Mechaniker hat den Aufzug in Ihrem Haus gestern Abend noch repariert und die Lampe am Eingang geht auch wieder.' },
        { de: 'die Lampe', plural: 'die Lampen', ru: 'лампа', gender: 'feminin', collocation: 'die Lampe am Eingang', example: 'Der Mechaniker hat den Aufzug in Ihrem Haus gestern Abend noch repariert und die Lampe am Eingang geht auch wieder.' },
        { de: 'die Heizung', plural: 'die Heizungen', ru: 'отопление', gender: 'feminin', collocation: 'die Heizung wird warm', example: 'Ja, ja, aber jetzt wird die Heizung in meiner Wohnung nicht mehr warm.' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'in meiner Wohnung', example: 'Ja, ja, aber jetzt wird die Heizung in meiner Wohnung nicht mehr warm.' },
        { de: 'reparieren', ru: 'ремонтировать', type: 'verb', forms: 'repariert, reparierte, hat repariert', example: 'Der Mechaniker hat den Aufzug in Ihrem Haus gestern Abend noch repariert und die Lampe am Eingang geht auch wieder.' },
        { de: 'vorbeikommen', ru: 'заходить', type: 'verb', forms: 'kommt vorbei, kam vorbei, ist vorbeigekommen', example: 'Können Sie vorbeikommen und sich das mal ansehen?' },
      ],
      practiceSentences: [
        { de: 'Die Uhr geht nicht.', ru: 'Часы не работают.', note: 'gehen = работать' },
        { de: 'Das Zimmer wird kalt.', ru: 'Комната холодеет.', note: 'werden + Adj.' },
        { de: 'Ich komme morgen vorbei.', ru: 'Я зайду завтра.', note: 'отделяемая приставка' },
        { de: 'Der Computer geht wieder.', ru: 'Компьютер снова работает.', note: 'gehen = работать' },
        { de: 'Es wird nicht mehr hell.', ru: 'Больше не светлеет.', note: 'nicht mehr' },
      ],
      question: {
        de: 'Was funktioniert jetzt nicht?',
        ru: 'Что сейчас не работает?',
        options: [
          { de: 'Der Aufzug', ru: 'Лифт' },
          { de: 'Die Lampe am Eingang', ru: 'Лампа у входа' },
          { de: 'Die Heizung', ru: 'Отопление' },
        ],
        correct: 2,
        explanation: 'Господин Миттермайер сообщает: "Aber jetzt wird die Heizung in meiner Wohnung nicht mehr warm."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Krankengymnastik',
      type: 'телефонный разговор',
      text: 'Guten Tag, hier ist Messner von der Arztpraxis Vollmer. Guten Tag! Ich rufe an wegen Ihrer Krankengymnastik. Sie können nächste Woche Montag und Donnerstag um 16 Uhr kommen. Ja, das passt. Sie müssen nicht an der Information warten. Gehen Sie direkt in den Sportraum und bitte vergessen Sie das Rezept vom Arzt und Ihre Sportkleidung nicht.',
      sentenceTranslations: {
        'Guten Tag, hier ist Messner von der Arztpraxis Vollmer.': { literal: 'Добрый день, здесь есть Месснер от медпрактики Фольмер.', literary: 'Добрый день, это Месснер из медицинского кабинета Фольмер.' },
        'Guten Tag!': { literal: 'Добрый день!', literary: 'Добрый день!' },
        'Ich rufe an wegen Ihrer Krankengymnastik.': { literal: 'Я звоню из-за вашей лечебной-гимнастики.', literary: 'Я звоню по поводу вашей лечебной физкультуры.' },
        'Sie können nächste Woche Montag und Donnerstag um 16 Uhr kommen.': { literal: 'Вы можете следующую неделю понедельник и четверг в 16 часов прийти.', literary: 'Вы можете прийти на следующей неделе в понедельник и четверг в 16 часов.' },
        'Ja, das passt.': { literal: 'Да, это подходит.', literary: 'Да, это подходит.' },
        'Sie müssen nicht an der Information warten.': { literal: 'Вы должны не у информации ждать.', literary: 'Вам не нужно ждать у стойки информации.' },
        'Gehen Sie direkt in den Sportraum und bitte vergessen Sie das Rezept vom Arzt und Ihre Sportkleidung nicht.': { literal: 'Идите вы прямо в спортзал и пожалуйста забудьте вы рецепт от врача и вашу спортивную-одежду не.', literary: 'Идите прямо в спортзал и, пожалуйста, не забудьте рецепт от врача и спортивную одежду.' },
      },
      vocabulary: [
        { de: 'die Arztpraxis', plural: 'die Arztpraxen', ru: 'медицинский кабинет', gender: 'feminin', collocation: 'von der Arztpraxis', example: 'Guten Tag, hier ist Messner von der Arztpraxis Vollmer.' },
        { de: 'die Krankengymnastik', plural: '-', ru: 'лечебная физкультура', gender: 'feminin', collocation: 'wegen der Krankengymnastik', example: 'Ich rufe an wegen Ihrer Krankengymnastik.' },
        { de: 'der Sportraum', plural: 'die Sporträume', ru: 'спортзал', gender: 'maskulin', collocation: 'in den Sportraum gehen', example: 'Gehen Sie direkt in den Sportraum und bitte vergessen Sie das Rezept vom Arzt und Ihre Sportkleidung nicht.' },
        { de: 'das Rezept', plural: 'die Rezepte', ru: 'рецепт', gender: 'neutrum', collocation: 'Rezept vom Arzt', example: 'Gehen Sie direkt in den Sportraum und bitte vergessen Sie das Rezept vom Arzt und Ihre Sportkleidung nicht.' },
        { de: 'die Sportkleidung', plural: '-', ru: 'спортивная одежда', gender: 'feminin', collocation: 'Sportkleidung nicht vergessen', example: 'Gehen Sie direkt in den Sportraum und bitte vergessen Sie das Rezept vom Arzt und Ihre Sportkleidung nicht.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Gehen Sie direkt in den Sportraum und bitte vergessen Sie das Rezept vom Arzt und Ihre Sportkleidung nicht.' },
        { de: 'warten', ru: 'ждать', type: 'verb', forms: 'wartet, wartete, hat gewartet', example: 'Sie müssen nicht an der Information warten.' },
      ],
      practiceSentences: [
        { de: 'Ich rufe Sie morgen an.', ru: 'Я позвоню вам завтра.', note: 'отделяемая приставка' },
        { de: 'Sie können heute kommen.', ru: 'Вы можете прийти сегодня.', note: 'модальный + Infinitiv' },
        { de: 'Warten Sie bitte hier!', ru: 'Подождите, пожалуйста, здесь!', note: 'Imperativ Sie-Form' },
        { de: 'Gehen Sie in das Zimmer!', ru: 'Идите в комнату!', note: 'Imperativ, Akk. направление' },
        { de: 'Vergessen Sie das nicht!', ru: 'Не забудьте это!', note: 'Imperativ с отрицанием' },
      ],
      question: {
        de: 'Wann sind die Termine für die Krankengymnastik?',
        ru: 'Когда назначены сеансы лечебной физкультуры?',
        options: [
          { de: 'Montag und Mittwoch um 16 Uhr', ru: 'Понедельник и среда в 16:00' },
          { de: 'Montag und Donnerstag um 16 Uhr', ru: 'Понедельник и четверг в 16:00' },
          { de: 'Dienstag und Donnerstag um 16 Uhr', ru: 'Вторник и четверг в 16:00' },
        ],
        correct: 1,
        explanation: 'Сотрудник говорит: "Sie können nächste Woche Montag und Donnerstag um 16 Uhr kommen."'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Sarah',
      type: 'интервью',
      text: 'Sarah, Sie kommen aus Ghana in Afrika. Wann sind Sie nach Deutschland gekommen? Kurz nach meinem fünften Geburtstag. Da sind wir dann mit der ganzen Familie umgezogen. Und wie fanden Sie das neue Leben in Deutschland? Ja, es hat mir gut gefallen. Ich habe ganz schnell Freunde gefunden beim Fußballspielen auf der Straße. Meine beiden großen Brüder haben mich immer mitgenommen. Zuerst haben sie mir Tipps gegeben, aber nach ein paar Monaten war ich besser als sie. Und dann, wie ging es dann weiter? In der Schule war... hat mein Sportlehrer mir gesagt, bei welchem Fußballverein ich mich anmelden soll. Und dort spiele ich immer noch, jetzt schon seit 14 Jahren. Und seit zwei Wochen sind Sie sogar in der deutschen Frauen-Nationalmannschaft! Glückwunsch! Danke, ja. Ich hoffe, dass ich bald auch einmal in einem internationalen Spiel mitspielen darf. Was machen Sie denn, wenn Sie nicht Fußball spielen? Im Moment habe ich keine Zeit für anderes. Aber später, wenn ich nicht mehr so gut bin, möchte ich studieren. Und sagen Sie uns auch welches Fach? Natürlich Sport! Na dann, alles Gute für Sie und danke für das Gespräch. Gerne.',
      sentenceTranslations: {
        'Sarah, Sie kommen aus Ghana in Afrika.': { literal: 'Сара, вы приходите из Ганы в Африке.', literary: 'Сара, вы из Ганы в Африке.' },
        'Wann sind Sie nach Deutschland gekommen?': { literal: 'Когда есть вы в Германию пришедшими?', literary: 'Когда вы приехали в Германию?' },
        'Kurz nach meinem fünften Geburtstag.': { literal: 'Коротко после моего пятого дня-рождения.', literary: 'Вскоре после моего пятого дня рождения.' },
        'Da sind wir dann mit der ganzen Familie umgezogen.': { literal: 'Тогда есть мы тогда с целой семьёй переехавшими.', literary: 'Тогда мы переехали всей семьёй.' },
        'Und wie fanden Sie das neue Leben in Deutschland?': { literal: 'И как находили вы новую жизнь в Германии?', literary: 'И как вам понравилась новая жизнь в Германии?' },
        'Ja, es hat mir gut gefallen.': { literal: 'Да, это имеет мне хорошо понравившимся.', literary: 'Да, мне очень понравилось.' },
        'Ich habe ganz schnell Freunde gefunden beim Fußballspielen auf der Straße.': { literal: 'Я имею совсем быстро друзей найденными при футболе-игре на улице.', literary: 'Я очень быстро нашла друзей, играя в футбол на улице.' },
        'Meine beiden großen Brüder haben mich immer mitgenommen.': { literal: 'Мои оба больших брата имеют меня всегда с-собой-взятым.', literary: 'Мои оба старших брата всегда брали меня с собой.' },
        'Zuerst haben sie mir Tipps gegeben, aber nach ein paar Monaten war ich besser als sie.': { literal: 'Сначала имеют они мне советы данными, но после пары месяцев была я лучше чем они.', literary: 'Сначала они давали мне советы, но через пару месяцев я стала лучше их.' },
        'Und dann, wie ging es dann weiter?': { literal: 'И тогда, как шло это тогда дальше?', literary: 'А потом, как дела пошли дальше?' },
        'In der Schule war... hat mein Sportlehrer mir gesagt, bei welchem Fußballverein ich mich anmelden soll.': { literal: 'В школе ��ыл... имеет мой спорт-учитель мне сказанным, при каком ф��тбольном-клубе я себя записать должна.', literary: 'В школе... мой учитель физкультуры сказал мне, в какой футбольный клуб мне за��исаться.' },
        'In der Schule war...': { literal: 'В школе было...', literary: 'В школе...' },
        'hat mein Sportlehrer mir gesagt, bei welchem Fußballverein ich mich anmelden soll.': { literal: 'сказал мой учитель физкультуры мне, в каком футбольном клубе я себя записать должен', literary: 'мой учитель физкультуры подсказал, в какой футбольный клуб мне записаться.' },
        'Und dort spiele ich immer noch, jetzt schon seit 14 Jahren.': { literal: 'И там играю я всё ещё, сейчас уже с 14 лет.', literary: 'И я играю там до сих пор, уже 14 лет.' },
        'Und seit zwei Wochen sind Sie sogar in der deutschen Frauen-Nationalmannschaft!': { literal: 'И с двух недель есть вы даже в немецкой женской-национальной-команде!', literary: 'А две недели назад вы даже попали в женскую сборную Германии!' },
        'Glückwunsch!': { literal: 'Поздравление!', literary: 'Поздравляю!' },
        'Danke, ja.': { literal: 'Спасибо, да.', literary: 'Спасибо.' },
        'Ich hoffe, dass ich bald auch einmal in einem internationalen Spiel mitspielen darf.': { literal: 'Я надеюсь, что я скоро также однажды в международной игре участвовать могу.', literary: 'Я надеюсь, что скоро смогу сыграть в международном матче.' },
        'Was machen Sie denn, wenn Sie nicht Fußball spielen?': { literal: 'Что делаете вы же, когда вы не футбол играете?', literary: 'А чем вы занимаетесь, когда не играете в футбол?' },
        'Im Moment habe ich keine Zeit für anderes.': { literal: 'В моменте имею я никакое время для другого.', literary: 'Сейчас у меня нет времени на другое.' },
        'Aber später, wenn ich nicht mehr so gut bin, möchte ich studieren.': { literal: 'Но позже, если я не больше так хороша есть, хотела-бы я учиться.', literary: 'Но позже, когда я уже не буду так хороша, хочу учиться.' },
        'Und sagen Sie uns auch welches Fach?': { literal: 'И скажите вы нам также какой предмет?', literary: 'И скажите, какой предмет?' },
        'Natürlich Sport!': { literal: 'Конечно спорт!', literary: 'Конечно, спорт!' },
        'Na dann, alles Gute für Sie und danke für das Gespräch.': { literal: 'Ну тогда, всё хорошее для вас и спасибо за беседу.', literary: 'Что ж, всего хорошего и спасибо за беседу.' },
        'Gerne.': { literal: 'Охотно.', literary: 'Пожалуйста.' },
      },
      vocabulary: [
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'nach dem Geburtstag', example: 'Kurz nach meinem fünften Geburtstag.' },
        { de: 'die Familie', plural: 'die Familien', ru: 'семья', gender: 'feminin', collocation: 'mit der ganzen Familie', example: 'Da sind wir dann mit der ganzen Familie umgezogen.' },
        { de: 'der Bruder', plural: 'die Brüder', ru: 'брат', gender: 'maskulin', collocation: 'meine großen Brüder', example: 'Meine beiden großen Brüder haben mich immer mitgenommen.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'Tipps geben', example: 'Zuerst haben sie mir Tipps gegeben, aber nach ein paar Monaten war ich besser als sie.' },
        { de: 'der Sportlehrer', plural: 'die Sportlehrer', ru: 'учитель физкультуры', gender: 'maskulin', collocation: 'mein Sportlehrer', example: 'In der Schule war... hat mein Sportlehrer mir gesagt, bei welchem Fußballverein ich mich anmelden soll.' },
        { de: 'der Fußballverein', plural: 'die Fußballvereine', ru: 'футбольный клуб', gender: 'maskulin', collocation: 'beim Fußballverein', example: 'In der Schule war... hat mein Sportlehrer mir gesagt, bei welchem Fußballverein ich mich anmelden soll.' },
        { de: 'das Spiel', plural: 'die Spiele', ru: 'игра, матч', gender: 'neutrum', collocation: 'internationales Spiel', example: 'Ich hoffe, dass ich bald auch einmal in einem internationalen Spiel mitspielen darf.' },
        { de: 'das Fach', plural: 'die Fächer', ru: 'предмет (учебный)', gender: 'neutrum', collocation: 'welches Fach studieren', example: 'Und sagen Sie uns auch welches Fach?' },
        { de: 'das Gespräch', plural: 'die Gespräche', ru: 'беседа', gender: 'neutrum', collocation: 'danke für das Gespräch', example: 'Na dann, alles Gute für Sie und danke für das Gespräch.' },
        { de: 'umziehen', ru: 'переезжать', type: 'verb', forms: 'zieht um, zog um, ist umgezogen', example: 'Da sind wir dann mit der ganzen Familie umgezogen.' },
        { de: 'mitnehmen', ru: 'брать с собой', type: 'verb', forms: 'nimmt mit, nahm mit, hat mitgenommen', example: 'Meine beiden großen Brüder haben mich immer mitgenommen.' },
        { de: 'sich anmelden', ru: 'записываться', type: 'verb', forms: 'meldet sich an, meldete sich an, hat sich angemeldet', example: 'In der Schule war... hat mein Sportlehrer mir gesagt, bei welchem Fußballverein ich mich anmelden soll.' },
        { de: 'studieren', ru: 'учиться в вузе', type: 'verb', forms: 'studiert, studierte, hat studiert', example: 'Aber später, wenn ich nicht mehr so gut bin, möchte ich studieren.' },
      ],
      practiceSentences: [
        { de: 'Ich komme aus Italien.', ru: 'Я из Италии.', note: 'V2' },
        { de: 'Wir sind umgezogen.', ru: 'Мы переехали.', note: 'Perfekt с sein' },
        { de: 'Sie hat mich mitgenommen.', ru: 'Она взяла меня с собой.', note: 'отделяемая приставка' },
        { de: 'Ich melde mich morgen an.', ru: 'Я запишусь завтра.', note: 'возвратный + отделяемая' },
        { de: 'Er ist besser als ich.', ru: 'Он лучше меня.', note: 'Komparativ + als' },
      ],
      question: {
        de: 'Wann ist Sarah nach Deutschland gekommen?',
        ru: 'Когда Сара приехала в Германию?',
        options: [
          { de: 'Mit 14 Jahren', ru: 'В 14 лет' },
          { de: 'Kurz nach ihrem fünften Geburtstag', ru: 'Вскоре после пятого дня рождения' },
          { de: 'Vor zwei Wochen', ru: 'Две недели назад' },
        ],
        correct: 1,
        explanation: 'Сара говорит: "Kurz nach meinem fünften Geburtstag. Da sind wir dann mit der ganzen Familie umgezogen."'
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
    title: 'ДЕНЬ ИЗ ЖИЗНИ ГОРОДА',
    text: 'Информация для {0} баскетбольного матча: парковки заняты, используйте {1}. Сабина должна {2} костюм из химчистки для свадьбы. Встреча госпожи Майер проходит не в офисе, а в {3}. На выходных на юге {4} и тепло. На радио можно {5} призы. В отпуске пара планирует {6} с велосипедом. В ресторане был не гамбургер, а {7}. В магазине куртка есть только в размере {8}. Для спортклуба нужно ещё {9}. Отопление в квартире господина Миттермайера больше не {10}. Для лечебной физкультуры не забудьте {11} от врача. Сара приехала из Ганы после пятого {12} и стала играть в футбол.',
    blanks: [
      { answer: 'die Besucher', hint: 'посетители (der Besucher, Akk. Pl.)' },
      { answer: 'die Bahn', hint: 'поезд (die Bahn)' },
      { answer: 'abholen', hint: 'забрать (abholen)' },
      { answer: 'dem Hotel', hint: 'отель (das Hotel, Dat.)' },
      { answer: 'sonnig', hint: 'солнечно (sonnig)' },
      { answer: 'gewinnen', hint: 'выиграть (gewinnen)' },
      { answer: 'den Ausflug', hint: 'поездка (der Ausflug, Akk.)' },
      { answer: 'das Hähnchen', hint: 'курица (das Hähnchen)' },
      { answer: 'S', hint: 'размер S' },
      { answer: 'ein Foto', hint: 'фотография (das Foto)' },
      { answer: 'warm', hint: 'тёплое (warm)' },
      { answer: 'das Rezept', hint: 'рецепт (das Rezept)' },
      { answer: 'Geburtstags', hint: 'день рождения (der Geburtstag, Gen.)' },
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табa "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Basketballspiel).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'es gibt + Akkusativ: Es gibt noch freie Plätze / Es gibt tolle Preise zu gewinnen',
    'Отделяемые приставки: abholen, anziehen, stattfinden, anrufen, vorbeikommen, mitnehmen',
    'Модальные глаголы: sollten (совет), können, müssen, möchte, dürfen',
    'weil/dass-Nebensatz: глагол в конце — dass ich das nicht gerne mache',
    'Konjunktiv II: könnten (предложение) — Wir könnten ins Theater gehen',
    'Perfekt с sein: ist umgezogen, ist gekommen, ist gefallen',
    'werden + Adj.: die Heizung wird nicht mehr warm',
    'gefallen + Dativ: Die Jacke gefällt mir / Die Farben gefallen mir nicht',
  ],
};

LESSONS.push(LESSON_11);
