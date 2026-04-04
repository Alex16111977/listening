/* ═══════════════════════════════════════════════════════════
   Lesson 08 — Goethe Zertifikat A2 Hören Modelltest 8
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_08 = {
  id: 'lesson-08',
  number: 8,
  title: 'Goethe A2 Hören — Modelltest 8',
  subtitle: 'Musikfest, Geburtstagsplanung, Wetter, Reise nach Köln, Familienhotel',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-08',
  videoUrl: 'https://www.youtube.com/watch?v=Iud2ji70B4I',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Musikfest',
      type: 'объявление',
      text: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes. Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden. Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof. Beginn 18 Uhr 30. Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.',
      sentenceTranslations: {
        'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes.': { literal: 'И сейчас ещё одна важная информация для посетителей музыкального фестиваля', literary: 'А теперь важная информация для посетителей музыкального фестиваля.' },
        'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.': { literal: 'Из-за дождя может концерт сегодня вечером не снаружи на рыночной площади состояться', literary: 'Из-за дождя концерт сегодня вечером не может состояться на открытом воздухе на Рыночной площади.' },
        'Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof.': { literal: 'Дорогие фанаты, никакого страха, он будет состояться в большом зале у вокзала', literary: 'Дорогие поклонники, не волнуйтесь, концерт состоится в большом зале у вокзала.' },
        'Beginn 18 Uhr 30.': { literal: 'Начало 18 часов 30', literary: 'Начало в 18:30.' },
        'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.': { literal: 'Кто свой билет вернуть хочет, может это до 18 часов у стойки перед праздничным шатром бесплатно сделать', literary: 'Кто хочет вернуть билет, может сделать это бесплатно до 18:00 у стойки перед праздничным шатром.' },
      },
      vocabulary: [
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'Besucher des Musikfestes', example: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes.' },
        { de: 'das Musikfest', plural: 'die Musikfeste', ru: 'музыкальный фестиваль', gender: 'neutrum', collocation: 'zum Musikfest gehen', example: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes.' },
        { de: 'der Regen', plural: 'die Regen', ru: 'дождь', gender: 'maskulin', collocation: 'wegen des Regens', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'Konzert besuchen', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'der Marktplatz', plural: 'die Marktplätze', ru: 'рыночная площадь', gender: 'maskulin', collocation: 'auf dem Marktplatz', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'die Halle', plural: 'die Hallen', ru: 'зал', gender: 'feminin', collocation: 'in der großen Halle', example: 'Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof.' },
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'am Bahnhof', example: 'Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof.' },
        { de: 'das Ticket', plural: 'die Tickets', ru: 'билет', gender: 'neutrum', collocation: 'Ticket zurückgeben', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'der Schalter', plural: 'die Schalter', ru: 'стойка, касса', gender: 'maskulin', collocation: 'am Schalter', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'das Festzelt', plural: 'die Festzelte', ru: 'праздничный шатёр', gender: 'neutrum', collocation: 'vor dem Festzelt', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'stattfinden', ru: 'состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'zurückgeben', ru: 'вернуть', type: 'verb', forms: 'gibt zurück, gab zurück, hat zurückgegeben', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'kostenlos', ru: 'бесплатно', type: 'adj', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'draußen', ru: 'снаружи, на улице', type: 'adv', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
      ],
      practiceSentences: [
        { de: 'Das Fest kann im Park stattfinden.', ru: 'Праздник может состояться в парке.', note: 'модальный + инфинитив' },
        { de: 'Wegen des Wetters bleiben wir zu Hause.', ru: 'Из-за погоды мы остаёмся дома.', note: 'wegen + Genitiv' },
        { de: 'Ich möchte mein Buch zurückgeben.', ru: 'Я хочу вернуть мою книгу.', note: 'модальный + инфинитив' },
        { de: 'Der Kurs findet am Montag statt.', ru: 'Курс состоится в понедельник.', note: 'отделяемая приставка' },
        { de: 'Sie kann das Ticket kostenlos bekommen.', ru: 'Она может получить билет бесплатно.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Wo findet das Konzert heute Abend statt?',
        ru: 'Где состоится концерт сегодня вечером?',
        options: [
          { de: 'Auf dem Marktplatz', ru: 'На Рыночной площади' },
          { de: 'In der großen Halle am Bahnhof', ru: 'В большом зале у вокзала' },
          { de: 'Im Festzelt', ru: 'В праздничном шатре' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "es wird stattfinden in der großen Halle am Bahnhof" — концерт перенесли из-за дождя.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Jana/Frauke',
      type: 'телефонное сообщение',
      text: 'Hallo Frauke, Jana feiert doch am Freitag ihren Geburtstag im Büro. Ich backe morgen einen Kuchen. Wichtig ist noch das Geschenk. Paul hat gesagt, er kümmert sich darum. Er fährt heute nach der Arbeit in die Stadt und sucht ein spannendes Buch. Kannst du dich um Saft, Wasser und Kaffee kümmern? Rufst du mich zurück?',
      sentenceTranslations: {
        'Hallo Frauke, Jana feiert doch am Freitag ihren Geburtstag im Büro.': { literal: 'Привет Фрауке, Яна празднует же в пятницу свой день рождения в офисе', literary: 'Привет, Фрауке! Яна же празднует в пятницу день рождения в офисе.' },
        'Ich backe morgen einen Kuchen.': { literal: 'Я пеку завтра один пирог', literary: 'Я испеку завтра торт.' },
        'Wichtig ist noch das Geschenk.': { literal: 'Важно есть ещё подарок', literary: 'Ещё важен подарок.' },
        'Paul hat gesagt, er kümmert sich darum.': { literal: 'Пауль сказал, он заботится себя об этом', literary: 'Пауль сказал, что он об этом позаботится.' },
        'Er fährt heute nach der Arbeit in die Stadt und sucht ein spannendes Buch.': { literal: 'Он едет сегодня после работы в город и ищет одну увлекательную книгу', literary: 'Он поедет сегодня после работы в город и поищет интересную книгу.' },
        'Kannst du dich um Saft, Wasser und Kaffee kümmern?': { literal: 'Можешь ты себя о соке, воде и кофе позаботиться?', literary: 'Можешь позаботиться о соке, воде и кофе?' },
        'Rufst du mich zurück?': { literal: 'Звонишь ты мне обратно?', literary: 'Ты мне перезвонишь?' },
      },
      vocabulary: [
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'Geburtstag feiern', example: 'Jana feiert doch am Freitag ihren Geburtstag im Büro.' },
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'im Büro feiern', example: 'Jana feiert doch am Freitag ihren Geburtstag im Büro.' },
        { de: 'der Kuchen', plural: 'die Kuchen', ru: 'торт, пирог', gender: 'maskulin', collocation: 'einen Kuchen backen', example: 'Ich backe morgen einen Kuchen.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'Geschenk kaufen', example: 'Wichtig ist noch das Geschenk.' },
        { de: 'feiern', ru: 'праздновать', type: 'verb', forms: 'feiert, feierte, hat gefeiert', example: 'Jana feiert doch am Freitag ihren Geburtstag im Büro.' },
        { de: 'backen', ru: 'печь', type: 'verb', forms: 'backt, backte, hat gebacken', example: 'Ich backe morgen einen Kuchen.' },
        { de: 'sich kümmern um', ru: 'заботиться о', type: 'verb', forms: 'kümmert sich, kümmerte sich, hat sich gekümmert', example: 'Kannst du dich um Saft, Wasser und Kaffee kümmern?' },
        { de: 'zurückrufen', ru: 'перезвонить', type: 'verb', forms: 'ruft zurück, rief zurück, hat zurückgerufen', example: 'Rufst du mich zurück?' },
        { de: 'spannend', ru: 'увлекательный', type: 'adj', example: 'Er fährt heute nach der Arbeit in die Stadt und sucht ein spannendes Buch.' },
      ],
      practiceSentences: [
        { de: 'Sie feiert heute Geburtstag.', ru: 'Она празднует сегодня день рождения.', note: 'V2' },
        { de: 'Ich backe einen Apfelkuchen.', ru: 'Я пеку яблочный пирог.', note: 'V2' },
        { de: 'Er kümmert sich um die Getränke.', ru: 'Он заботится о напитках.', note: 'возвратный глагол' },
        { de: 'Rufst du mich später an?', ru: 'Ты позвонишь мне позже?', note: 'отделяемая приставка' },
        { de: 'Wir fahren morgen in die Stadt.', ru: 'Мы поедем завтра в город.', note: 'V2' },
      ],
      question: {
        de: 'Was soll Frauke für Janas Geburtstag besorgen?',
        ru: 'Что должна организовать Фрауке для дня рождения Яны?',
        options: [
          { de: 'Einen Kuchen', ru: 'Торт' },
          { de: 'Ein Buch', ru: 'Книгу' },
          { de: 'Saft, Wasser und Kaffee', ru: 'Сок, воду и кофе' },
        ],
        correct: 2,
        explanation: 'В сообщении спрашивают: "Kannst du dich um Saft, Wasser und Kaffee kümmern?" — именно это просят у Фрауке.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Paul/Klemens',
      type: 'телефонное сообщение',
      text: 'Paul, Klemens hier. Du, wir hatten ja gesagt, wir gehen diesen Samstag etwas trinken. Kannst du auch Sonntagabend? Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse. Sonntag kommen da noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.',
      sentenceTranslations: {
        'Paul, Klemens hier.': { literal: 'Пауль, Клеменс здесь', literary: 'Пауль, это Клеменс.' },
        'Du, wir hatten ja gesagt, wir gehen diesen Samstag etwas trinken.': { literal: 'Ты, мы имели же сказано, мы идём эту субботу что-то выпить', literary: 'Слушай, мы же договаривались пойти выпить в эту субботу.' },
        'Kannst du auch Sonntagabend?': { literal: 'Можешь ты также воскресным вечером?', literary: 'Можешь в воскресенье вечером?' },
        'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.': { literal: 'В субботний вечер идёт моя жена с друзьями наружу и я имею обещано, что я дома остаюсь и на детей присматриваю', literary: 'В субботу вечером моя жена идёт развлекаться с друзьями, а я пообещал, что останусь дома и присмотрю за детьми.' },
        'Sonntag kommen da noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.': { literal: 'Воскресенье приходят там ещё мои родители в гости, но с 19 часов имею я время', literary: 'В воскресенье ещё приедут мои родители в гости, но после 19:00 у меня есть время.' },
      },
      vocabulary: [
        { de: 'der Samstagabend', plural: 'die Samstagabende', ru: 'субботний вечер', gender: 'maskulin', collocation: 'am Samstagabend', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
        { de: 'der Besuch', plural: 'die Besuche', ru: 'визит, гости', gender: 'maskulin', collocation: 'zu Besuch kommen', example: 'Sonntag kommen da noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.' },
        { de: 'die Zeit', plural: 'die Zeiten', ru: 'время', gender: 'feminin', collocation: 'Zeit haben', example: 'Sonntag kommen da noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.' },
        { de: 'ausgehen', ru: 'выходить развлекаться', type: 'verb', forms: 'geht aus, ging aus, ist ausgegangen', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
        { de: 'versprechen', ru: 'обещать', type: 'verb', forms: 'verspricht, versprach, hat versprochen', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
        { de: 'aufpassen auf', ru: 'присматривать за', type: 'verb', forms: 'passt auf, passte auf, hat aufgepasst', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
      ],
      practiceSentences: [
        { de: 'Wir gehen am Freitag aus.', ru: 'Мы идём развлекаться в пятницу.', note: 'отделяемая приставка' },
        { de: 'Ich bleibe heute zu Hause.', ru: 'Я остаюсь сегодня дома.', note: 'V2' },
        { de: 'Sie passt auf das Baby auf.', ru: 'Она присматривает за малышом.', note: 'отделяемая приставка' },
        { de: 'Meine Freunde kommen morgen zu Besuch.', ru: 'Мои друзья приедут завтра в гости.', note: 'V2' },
        { de: 'Kannst du am Montag?', ru: 'Можешь в понедельник?', note: 'V1 (вопрос)' },
      ],
      question: {
        de: 'Wann hat Klemens Zeit, etwas trinken zu gehen?',
        ru: 'Когда у Клеменса есть время пойти выпить?',
        options: [
          { de: 'Samstagabend', ru: 'В субботу вечером' },
          { de: 'Sonntag ab 19 Uhr', ru: 'В воскресенье с 19:00' },
          { de: 'Sonntag vormittags', ru: 'В воскресенье утром' },
        ],
        correct: 1,
        explanation: 'Клеменс говорит: "Sonntag kommen da noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Und nun zum Wetter. Der Sommer bleibt und es wird morgen noch mal sehr warm. Im Süden bis 30 Grad. Am späten Nachmittag soll es dort etwas regnen. Vorsicht im Westen, dort wird es bis zum frühen Nachmittag auch sehr warm. Es soll am Nachmittag aber starke Gewitter geben. Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.',
      sentenceTranslations: {
        'Und nun zum Wetter.': { literal: 'И теперь к погоде', literary: 'А теперь о погоде.' },
        'Der Sommer bleibt und es wird morgen noch mal sehr warm.': { literal: 'Лето остаётся и оно становится завтра ещё раз очень тепло', literary: 'Лето продолжается, и завтра снова будет очень тепло.' },
        'Im Süden bis 30 Grad.': { literal: 'На юге до 30 градусов', literary: 'На юге до 30 градусов.' },
        'Am späten Nachmittag soll es dort etwas regnen.': { literal: 'Поздним днём должно оно там немного дождить', literary: 'Поздно днём там ожидается небольшой дождь.' },
        'Vorsicht im Westen, dort wird es bis zum frühen Nachmittag auch sehr warm.': { literal: 'Осторожность на западе, там становится оно до раннего дня также очень тепло', literary: 'Будьте осторожны на западе, там до полудня тоже будет очень тепло.' },
        'Es soll am Nachmittag aber starke Gewitter geben.': { literal: 'Оно должно днём но сильные грозы давать', literary: 'Но днём ожидаются сильные грозы.' },
        'Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.': { literal: 'На севере и востоке становится оно прохладно с температурами до 16 градусов, но оно остаётся сухо', literary: 'На севере и востоке будет прохладно, температура до 16 градусов, но останется сухо.' },
      },
      vocabulary: [
        { de: 'das Wetter', plural: '-', ru: 'погода', gender: 'neutrum', collocation: 'zum Wetter', example: 'Und nun zum Wetter.' },
        { de: 'der Sommer', plural: 'die Sommer', ru: 'лето', gender: 'maskulin', collocation: 'der Sommer bleibt', example: 'Der Sommer bleibt und es wird morgen noch mal sehr warm.' },
        { de: 'der Grad', plural: 'die Grade', ru: 'градус', gender: 'maskulin', collocation: 'bis 30 Grad', example: 'Im Süden bis 30 Grad.' },
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'день, послеобеденное время', gender: 'maskulin', collocation: 'am späten Nachmittag', example: 'Am späten Nachmittag soll es dort etwas regnen.' },
        { de: 'das Gewitter', plural: 'die Gewitter', ru: 'гроза', gender: 'neutrum', collocation: 'starke Gewitter', example: 'Es soll am Nachmittag aber starke Gewitter geben.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'Temperaturen bis 16 Grad', example: 'Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Am späten Nachmittag soll es dort etwas regnen.' },
        { de: 'warm', ru: 'тёплый', type: 'adj', example: 'Der Sommer bleibt und es wird morgen noch mal sehr warm.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.' },
      ],
      practiceSentences: [
        { de: 'Es wird heute kalt.', ru: 'Сегодня станет холодно.', note: 'werden + прилагательное' },
        { de: 'Im Osten regnet es.', ru: 'На востоке идёт дождь.', note: 'безличное es' },
        { de: 'Morgen soll es schneien.', ru: 'Завтра должен пойти снег.', note: 'модальный + инфинитив' },
        { de: 'Es gibt heute Gewitter.', ru: 'Сегодня будет гроза.', note: 'es gibt' },
        { de: 'Das Wetter bleibt schön.', ru: 'Погода остаётся хорошей.', note: 'V2' },
      ],
      question: {
        de: 'Was passiert im Westen am Nachmittag?',
        ru: 'Что произойдёт на западе днём?',
        options: [
          { de: 'Es bleibt trocken', ru: 'Останется сухо' },
          { de: 'Es gibt starke Gewitter', ru: 'Будут сильные грозы' },
          { de: 'Es regnet nur leicht', ru: 'Будет только лёгкий дождь' },
        ],
        correct: 1,
        explanation: 'В прогнозе сказано: "Vorsicht im Westen... Es soll am Nachmittag aber starke Gewitter geben".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Fahrgäste',
      type: 'объявление на вокзале',
      text: 'Achtung liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren. Bitte alle aussteigen. Fahrgäste nach Frankfurt fahren bitte mit dem IC 562 um 14:15 von Gleis 1. Fahrgäste nach Stuttgart nehmen bitte die S-Bahn um 14:22 von Gleis 4.',
      sentenceTranslations: {
        'Achtung liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.': { literal: 'Внимание дорогие пассажиры, этот поезд может из-за одной технической проблемы не дальше ехать', literary: 'Внимание, уважаемые пассажиры, этот поезд не может продолжить движение из-за технической неполадки.' },
        'Bitte alle aussteigen.': { literal: 'Пожалуйста все выходить', literary: 'Просьба всем выйти.' },
        'Fahrgäste nach Frankfurt fahren bitte mit dem IC 562 um 14:15 von Gleis 1.': { literal: 'Пассажиры во Франкфурт едут пожалуйста с IC 562 в 14:15 с пути 1', literary: 'Пассажиры во Франкфурт, пожалуйста, поезжайте поездом IC 562 в 14:15 с первого пути.' },
        'Fahrgäste nach Stuttgart nehmen bitte die S-Bahn um 14:22 von Gleis 4.': { literal: 'Пассажиры в Штутгарт берут пожалуйста S-Bahn в 14:22 с пути 4', literary: 'Пассажиры в Штутгарт, пожалуйста, садитесь на электричку в 14:22 с четвёртого пути.' },
      },
      vocabulary: [
        { de: 'der Fahrgast', plural: 'die Fahrgäste', ru: 'пассажир', gender: 'maskulin', collocation: 'liebe Fahrgäste', example: 'Achtung liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
        { de: 'der Zug', plural: 'die Züge', ru: 'поезд', gender: 'maskulin', collocation: 'mit dem Zug fahren', example: 'Achtung liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
        { de: 'das Gleis', plural: 'die Gleise', ru: 'путь (ж/д)', gender: 'neutrum', collocation: 'von Gleis 1', example: 'Fahrgäste nach Frankfurt fahren bitte mit dem IC 562 um 14:15 von Gleis 1.' },
        { de: 'die S-Bahn', plural: 'die S-Bahnen', ru: 'электричка', gender: 'feminin', collocation: 'die S-Bahn nehmen', example: 'Fahrgäste nach Stuttgart nehmen bitte die S-Bahn um 14:22 von Gleis 4.' },
        { de: 'weiterfahren', ru: 'продолжать движение', type: 'verb', forms: 'fährt weiter, fuhr weiter, ist weitergefahren', example: 'Achtung liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
        { de: 'aussteigen', ru: 'выходить (из транспорта)', type: 'verb', forms: 'steigt aus, stieg aus, ist ausgestiegen', example: 'Bitte alle aussteigen.' },
        { de: 'technisch', ru: 'технический', type: 'adj', example: 'Achtung liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
      ],
      practiceSentences: [
        { de: 'Der Bus kann nicht weiterfahren.', ru: 'Автобус не может ехать дальше.', note: 'модальный + инфинитив' },
        { de: 'Bitte hier aussteigen!', ru: 'Пожалуйста, выходите здесь!', note: 'императив, отделяемая' },
        { de: 'Wir fahren mit dem Zug.', ru: 'Мы едем на поезде.', note: 'V2' },
        { de: 'Der Zug fährt von Gleis 3.', ru: 'Поезд отправляется с третьего пути.', note: 'V2' },
        { de: 'Sie nimmt die S-Bahn nach Berlin.', ru: 'Она садится на электричку в Берлин.', note: 'V2' },
      ],
      question: {
        de: 'Mit welchem Zug fahren die Fahrgäste nach Frankfurt?',
        ru: 'На каком поезде поедут пассажиры во Франкфурт?',
        options: [
          { de: 'Mit der S-Bahn um 14:22', ru: 'На электричке в 14:22' },
          { de: 'Mit dem IC 562 um 14:15', ru: 'На IC 562 в 14:15' },
          { de: 'Mit dem Zug, der gerade steht', ru: 'На поезде, который сейчас стоит' },
        ],
        correct: 1,
        explanation: 'Объявление гласит: "Fahrgäste nach Frankfurt fahren bitte mit dem IC 562 um 14:15 von Gleis 1".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Sonja/Köln',
      type: 'разговор',
      text: 'Sonja, was machst du denn hier? Ich denke, du bist in Köln. Letzte Woche war ich in Köln. Und wie war es? War toll. Am Freitag bin ich hingefahren. Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen. Schön. Was habt ihr denn noch gemacht? Du wolltest doch die neue Ausstellung sehen. Ja, eigentlich am Samstag. Aber das Museum war wegen einer Veranstaltung geschlossen. Also waren wir im Theater. Du interessierst dich wohl sehr für Kultur. Deshalb waren wir auch noch in einem Klavierkonzert. Julia wollte eigentlich am Sonntag gehen, aber wir haben leider keine Karten mehr gekriegt. Also waren wir den ganzen Tag in der Stadt und haben uns Sehenswürdigkeiten angesehen. Das mache ich auch gerne. Und wann war dann bei dem Klavierkonzert? Am Montagabend. Montag gab es auch ein kostenloses Konzert von zwei Bands draußen vor der Universität. Das hätte mich auch interessiert. Man kann ja nicht alles haben. Und Dienstag? Ich wollte eigentlich mit dem Schiff auf dem Rhein, dem Fluss, fahren. Aber Julia hatte eine andere tolle Idee: eine Radtour am Fluss. Am Abend war ich total müde. War das Wetter denn gut? Wir hatten Glück. Am Mittwoch hat es leider geregnet. Das war schade, weil wir auf ein Straßenfest gehen wollten. Das hat nicht geklappt. Wir waren dann in der Ausstellung im Museum. Darauf hattest du dich ja sehr gefreut. Die war sehr schön. Kann ich empfehlen.',
      sentenceTranslations: {
        'Sonja, was machst du denn hier?': { literal: 'Соня, что делаешь ты же здесь?', literary: 'Соня, что ты здесь делаешь?' },
        'Ich denke, du bist in Köln.': { literal: 'Я думаю, ты есть в Кёльне', literary: 'Я думала, ты в Кёльне.' },
        'Letzte Woche war ich in Köln.': { literal: 'Прошлую неделю был я в Кёльне', literary: 'На прошлой неделе я была в Кёльне.' },
        'Und wie war es?': { literal: 'И как было оно?', literary: 'Ну и как?' },
        'War toll.': { literal: 'Было классно', literary: 'Было здорово.' },
        'Am Freitag bin ich hingefahren.': { literal: 'В пятницу есть я туда поехала', literary: 'В пятницу я туда поехала.' },
        'Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen.': { literal: 'Моя подруга Юлия имеет меня от вокзала забрала и потом есть мы в одном хорошем ресторане есть пошли', literary: 'Моя подруга Юлия встретила меня на вокзале, и потом мы пошли поесть в хороший ресторан.' },
        'Schön.': { literal: 'Красиво', literary: 'Здорово.' },
        'Was habt ihr denn noch gemacht?': { literal: 'Что имеете вы же ещё сделали?', literary: 'А что вы ещё делали?' },
        'Du wolltest doch die neue Ausstellung sehen.': { literal: 'Ты хотела же новую выставку видеть', literary: 'Ты же хотела посмотреть новую выставку.' },
        'Ja, eigentlich am Samstag.': { literal: 'Да, собственно в субботу', literary: 'Да, планировали в субботу.' },
        'Aber das Museum war wegen einer Veranstaltung geschlossen.': { literal: 'Но музей был из-за одного мероприятия закрыт', literary: 'Но музей был закрыт из-за мероприятия.' },
        'Also waren wir im Theater.': { literal: 'Итак были мы в театре', literary: 'Поэтому мы пошли в театр.' },
        'Du interessierst dich wohl sehr für Kultur.': { literal: 'Ты интересуешься себя же очень культурой', literary: 'Ты, видимо, очень интересуешься культурой.' },
        'Deshalb waren wir auch noch in einem Klavierkonzert.': { literal: 'Поэтому были мы также ещё на одном фортепианном концерте', literary: 'Поэтому мы ещё сходили на фортепианный концерт.' },
        'Julia wollte eigentlich am Sonntag gehen, aber wir haben leider keine Karten mehr gekriegt.': { literal: 'Юлия хотела собственно в воскресенье идти, но мы имеем к сожалению никакие билеты больше получили', literary: 'Юлия хотела пойти в воскресенье, но, к сожалению, мы не смогли достать билеты.' },
        'Also waren wir den ganzen Tag in der Stadt und haben uns Sehenswürdigkeiten angesehen.': { literal: 'Итак были мы весь день в городе и имеем нам достопримечательности посмотрели', literary: 'Поэтому мы весь день были в городе и осматривали достопримечательности.' },
        'Das mache ich auch gerne.': { literal: 'Это делаю я тоже охотно', literary: 'Я тоже это люблю.' },
        'Und wann war dann bei dem Klavierkonzert?': { literal: 'И когда было тогда на фортепианном концерте?', literary: 'А когда был фортепианный концерт?' },
        'Am Montagabend.': { literal: 'В понедельник вечером', literary: 'В понедельник вечером.' },
        'Montag gab es auch ein kostenloses Konzert von zwei Bands draußen vor der Universität.': { literal: 'Понедельник давало оно также один бесплатный концерт от двух групп снаружи перед университетом', literary: 'В понедельник был ещё бесплатный концерт двух групп на улице перед университетом.' },
        'Das hätte mich auch interessiert.': { literal: 'Это имело бы меня тоже заинтересовало', literary: 'Мне бы это тоже было интересно.' },
        'Man kann ja nicht alles haben.': { literal: 'Человек может же не всё иметь', literary: 'Нельзя же успеть всё.' },
        'Und Dienstag?': { literal: 'И вторник?', literary: 'А во вторник?' },
        'Ich wollte eigentlich mit dem Schiff auf dem Rhein, dem Fluss, fahren.': { literal: 'Я хотела собственно с кораблём на Рейне, реке, ехать', literary: 'Я вообще-то хотела покататься на корабле по Рейну.' },
        'Aber Julia hatte eine andere tolle Idee: eine Radtour am Fluss.': { literal: 'Но Юлия имела одну другую классную идею: одну велосипедную прогулку у реки', literary: 'Но у Юлии была другая отличная идея: велопрогулка вдоль реки.' },
        'Am Abend war ich total müde.': { literal: 'Вечером была я полностью усталая', literary: 'Вечером я была совершенно уставшая.' },
        'War das Wetter denn gut?': { literal: 'Была погода же хорошая?', literary: 'А погода была хорошая?' },
        'Wir hatten Glück.': { literal: 'Мы имели счастье', literary: 'Нам повезло.' },
        'Am Mittwoch hat es leider geregnet.': { literal: 'В среду имеет оно к сожалению дождило', literary: 'В среду, к сожалению, шёл дождь.' },
        'Das war schade, weil wir auf ein Straßenfest gehen wollten.': { literal: 'Это было жаль, потому что мы на один уличный праздник идти хотели', literary: 'Это было обидно, потому что мы хотели пойти на уличный праздник.' },
        'Das hat nicht geklappt.': { literal: 'Это имеет не сработало', literary: 'Это не получилось.' },
        'Wir waren dann in der Ausstellung im Museum.': { literal: 'Мы были тогда на выставке в музее', literary: 'Мы тогда пошли на выставку в музей.' },
        'Darauf hattest du dich ja sehr gefreut.': { literal: 'На это имела ты себя же очень радовалась', literary: 'Ты же этого очень ждала.' },
        'Die war sehr schön.': { literal: 'Она была очень красивая', literary: 'Она была очень хорошая.' },
        'Kann ich empfehlen.': { literal: 'Могу я рекомендовать', literary: 'Могу рекомендовать.' },
      },
      vocabulary: [
        { de: 'die Freundin', plural: 'die Freundinnen', ru: 'подруга', gender: 'feminin', collocation: 'meine Freundin Julia', example: 'Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen.' },
        { de: 'die Ausstellung', plural: 'die Ausstellungen', ru: 'выставка', gender: 'feminin', collocation: 'neue Ausstellung sehen', example: 'Du wolltest doch die neue Ausstellung sehen.' },
        { de: 'das Museum', plural: 'die Museen', ru: 'музей', gender: 'neutrum', collocation: 'im Museum', example: 'Aber das Museum war wegen einer Veranstaltung geschlossen.' },
        { de: 'die Veranstaltung', plural: 'die Veranstaltungen', ru: 'мероприятие', gender: 'feminin', collocation: 'wegen einer Veranstaltung', example: 'Aber das Museum war wegen einer Veranstaltung geschlossen.' },
        { de: 'das Theater', plural: 'die Theater', ru: 'театр', gender: 'neutrum', collocation: 'im Theater', example: 'Also waren wir im Theater.' },
        { de: 'das Klavierkonzert', plural: 'die Klavierkonzerte', ru: 'фортепианный концерт', gender: 'neutrum', collocation: 'in einem Klavierkonzert', example: 'Deshalb waren wir auch noch in einem Klavierkonzert.' },
        { de: 'die Karte', plural: 'die Karten', ru: 'билет', gender: 'feminin', collocation: 'Karten kriegen', example: 'Julia wollte eigentlich am Sonntag gehen, aber wir haben leider keine Karten mehr gekriegt.' },
        { de: 'die Sehenswürdigkeit', plural: 'die Sehenswürdigkeiten', ru: 'достопримечательность', gender: 'feminin', collocation: 'Sehenswürdigkeiten ansehen', example: 'Also waren wir den ganzen Tag in der Stadt und haben uns Sehenswürdigkeiten angesehen.' },
        { de: 'das Schiff', plural: 'die Schiffe', ru: 'корабль', gender: 'neutrum', collocation: 'mit dem Schiff fahren', example: 'Ich wollte eigentlich mit dem Schiff auf dem Rhein, dem Fluss, fahren.' },
        { de: 'die Radtour', plural: 'die Radtouren', ru: 'велосипедная прогулка', gender: 'feminin', collocation: 'eine Radtour machen', example: 'Aber Julia hatte eine andere tolle Idee: eine Radtour am Fluss.' },
        { de: 'das Straßenfest', plural: 'die Straßenfeste', ru: 'уличный праздник', gender: 'neutrum', collocation: 'auf ein Straßenfest gehen', example: 'Das war schade, weil wir auf ein Straßenfest gehen wollten.' },
        { de: 'hinfahren', ru: 'ехать туда', type: 'verb', forms: 'fährt hin, fuhr hin, ist hingefahren', example: 'Am Freitag bin ich hingefahren.' },
        { de: 'abholen', ru: 'встречать, забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen.' },
        { de: 'sich interessieren für', ru: 'интересоваться', type: 'verb', forms: 'interessiert sich, interessierte sich, hat sich interessiert', example: 'Du interessierst dich wohl sehr für Kultur.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Kann ich empfehlen.' },
        { de: 'klappen', ru: 'получаться', type: 'verb', forms: 'klappt, klappte, hat geklappt', example: 'Das hat nicht geklappt.' },
        { de: 'toll', ru: 'классный, здорово', type: 'adj', example: 'War toll.' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Montag gab es auch ein kostenloses Konzert von zwei Bands draußen vor der Universität.' },
        { de: 'müde', ru: 'усталый', type: 'adj', example: 'Am Abend war ich total müde.' },
      ],
      practiceSentences: [
        { de: 'Ich bin gestern hingefahren.', ru: 'Я вчера туда поехал.', note: 'Perfekt с sein' },
        { de: 'Er holt mich vom Bahnhof ab.', ru: 'Он встречает меня на вокзале.', note: 'отделяемая приставка' },
        { de: 'Wir gehen heute essen.', ru: 'Мы идём сегодня поесть.', note: 'инфинитив после gehen' },
        { de: 'Sie interessiert sich für Musik.', ru: 'Она интересуется музыкой.', note: 'возвратный, V2' },
        { de: 'Es hat gestern geregnet.', ru: 'Вчера шёл дождь.', note: 'безличное, Perfekt' },
      ],
      question: {
        de: 'Warum war Sonja am Mittwoch nicht auf dem Straßenfest?',
        ru: 'Почему Соня не была на уличном празднике в среду?',
        options: [
          { de: 'Sie hatte keine Lust', ru: 'У неё не было желания' },
          { de: 'Es hat geregnet', ru: 'Шёл дождь' },
          { de: 'Sie war zu müde', ru: 'Она была слишком усталой' },
        ],
        correct: 1,
        explanation: 'Соня объясняет: "Am Mittwoch hat es leider geregnet. Das war schade, weil wir auf ein Straßenfest gehen wollten".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 7,
      name: 'Frau Schlemmer',
      type: 'телефонный разговор',
      text: 'Schlemmer. Hallo. Hallo, Frau Schlemmer, hier Florian Mayer. Sie verkaufen alte Möbel. Heute Morgen habe ich Ihnen geschrieben, dass ich das Sofa kaufen möchte. Ja, ich erinnere mich. Tut mir leid, aber es ist zu groß. Das kann ich nicht mit meinem Auto abholen. Aber der Wohnzimmertisch interessiert mich. Können Sie den haben. Und die Tische nehmen Sie die auch? Da habe ich eigene.',
      sentenceTranslations: {
        'Schlemmer.': { literal: 'Шлеммер', literary: 'Шлеммер слушает.' },
        'Hallo.': { literal: 'Привет', literary: 'Алло.' },
        'Hallo, Frau Schlemmer, hier Florian Mayer.': { literal: 'Привет, госпожа Шлеммер, здесь Флориан Майер', literary: 'Здравствуйте, фрау Шлеммер, это Флориан Майер.' },
        'Sie verkaufen alte Möbel.': { literal: 'Вы продаёте старую мебель', literary: 'Вы продаёте старую мебель.' },
        'Heute Morgen habe ich Ihnen geschrieben, dass ich das Sofa kaufen möchte.': { literal: 'Сегодня утром имею я Вам написал, что я диван купить хочу', literary: 'Сегодня утром я вам написал, что хочу купить диван.' },
        'Ja, ich erinnere mich.': { literal: 'Да, я напоминаю себя', literary: 'Да, я помню.' },
        'Tut mir leid, aber es ist zu groß.': { literal: 'Делает мне жаль, но он есть слишком большой', literary: 'Извините, но он слишком большой.' },
        'Das kann ich nicht mit meinem Auto abholen.': { literal: 'Это могу я не с моей машиной забрать', literary: 'Я не могу забрать его на своей машине.' },
        'Aber der Wohnzimmertisch interessiert mich.': { literal: 'Но стол для гостиной интересует меня', literary: 'Но меня интересует журнальный столик.' },
        'Können Sie den haben.': { literal: 'Можете Вы его иметь', literary: 'Можете его взять.' },
        'Und die Tische nehmen Sie die auch?': { literal: 'И столы берёте Вы их тоже?', literary: 'А столы вы тоже берёте?' },
        'Da habe ich eigene.': { literal: 'Там имею я собственные', literary: 'У меня есть свои.' },
      },
      vocabulary: [
        { de: 'die Möbel', plural: '-', ru: 'мебель', gender: 'neutrum', collocation: 'alte Möbel verkaufen', example: 'Sie verkaufen alte Möbel.' },
        { de: 'das Sofa', plural: 'die Sofas', ru: 'диван', gender: 'neutrum', collocation: 'das Sofa kaufen', example: 'Heute Morgen habe ich Ihnen geschrieben, dass ich das Sofa kaufen möchte.' },
        { de: 'der Wohnzimmertisch', plural: 'die Wohnzimmertische', ru: 'журнальный столик', gender: 'maskulin', collocation: 'der Wohnzimmertisch interessiert mich', example: 'Aber der Wohnzimmertisch interessiert mich.' },
        { de: 'verkaufen', ru: 'продавать', type: 'verb', forms: 'verkauft, verkaufte, hat verkauft', example: 'Sie verkaufen alte Möbel.' },
        { de: 'sich erinnern', ru: 'помнить, вспоминать', type: 'verb', forms: 'erinnert sich, erinnerte sich, hat sich erinnert', example: 'Ja, ich erinnere mich.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Das kann ich nicht mit meinem Auto abholen.' },
        { de: 'eigen', ru: 'собственный', type: 'adj', example: 'Da habe ich eigene.' },
      ],
      practiceSentences: [
        { de: 'Ich verkaufe mein altes Auto.', ru: 'Я продаю мою старую машину.', note: 'V2' },
        { de: 'Sie erinnert sich an den Termin.', ru: 'Она помнит о встрече.', note: 'возвратный, V2' },
        { de: 'Das ist zu teuer.', ru: 'Это слишком дорого.', note: 'sein + предикатив' },
        { de: 'Ich hole das Paket ab.', ru: 'Я заберу посылку.', note: 'отделяемая приставка' },
        { de: 'Das Buch interessiert mich nicht.', ru: 'Книга меня не интересует.', note: 'V2' },
      ],
      question: {
        de: 'Was möchte Florian Mayer kaufen?',
        ru: 'Что хочет купить Флориан Майер?',
        options: [
          { de: 'Nur das Sofa', ru: 'Только диван' },
          { de: 'Den Wohnzimmertisch', ru: 'Журнальный столик' },
          { de: 'Die Tische', ru: 'Столы' },
        ],
        correct: 1,
        explanation: 'Он говорит, что диван слишком большой, но: "Aber der Wohnzimmertisch interessiert mich".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 8,
      name: 'Firmenausflug',
      type: 'разговор коллег',
      text: 'Du, Sabine, ich sammle Ideen für unseren Firmenausflug. Na ja, was haben wir denn im letzten Jahr gemacht? Eine interessante Stadtführung. Richtig, die war toll. Im Stadtmuseum gibt es eine gute neue Kunstausstellung. Kunst finde ich nicht so interessant. OK, und wenn wir zum See fahren und dort eine Wanderung machen? Darauf hätte ich Lust. Ja, finde ich gut.',
      sentenceTranslations: {
        'Du, Sabine, ich sammle Ideen für unseren Firmenausflug.': { literal: 'Ты, Сабина, я собираю идеи для нашей корпоративной поездки', literary: 'Слушай, Сабина, я собираю идеи для корпоратива.' },
        'Na ja, was haben wir denn im letzten Jahr gemacht?': { literal: 'Ну да, что имеем мы же в прошлом году сделали?', literary: 'Ну, что мы делали в прошлом году?' },
        'Eine interessante Stadtführung.': { literal: 'Одну интересную экскурсию по городу', literary: 'Интересную экскурсию по городу.' },
        'Richtig, die war toll.': { literal: 'Правильно, она была классная', literary: 'Точно, было здорово.' },
        'Im Stadtmuseum gibt es eine gute neue Kunstausstellung.': { literal: 'В городском музее даёт оно одну хорошую новую художественную выставку', literary: 'В городском музее есть хорошая новая выставка.' },
        'Kunst finde ich nicht so interessant.': { literal: 'Искусство нахожу я не так интересным', literary: 'Искусство мне не очень интересно.' },
        'OK, und wenn wir zum See fahren und dort eine Wanderung machen?': { literal: 'Хорошо, и если мы к озеру поедем и там одну прогулку сделаем?', literary: 'Хорошо, а если поедем к озеру и устроим там прогулку?' },
        'Darauf hätte ich Lust.': { literal: 'На это имел бы я желание', literary: 'Мне бы этого хотелось.' },
        'Ja, finde ich gut.': { literal: 'Да, нахожу я хорошим', literary: 'Да, мне нравится.' },
      },
      vocabulary: [
        { de: 'der Firmenausflug', plural: 'die Firmenausflüge', ru: 'корпоративная поездка', gender: 'maskulin', collocation: 'für unseren Firmenausflug', example: 'Du, Sabine, ich sammle Ideen für unseren Firmenausflug.' },
        { de: 'die Stadtführung', plural: 'die Stadtführungen', ru: 'экскурсия по городу', gender: 'feminin', collocation: 'interessante Stadtführung', example: 'Eine interessante Stadtführung.' },
        { de: 'die Kunstausstellung', plural: 'die Kunstausstellungen', ru: 'художественная выставка', gender: 'feminin', collocation: 'neue Kunstausstellung', example: 'Im Stadtmuseum gibt es eine gute neue Kunstausstellung.' },
        { de: 'der See', plural: 'die Seen', ru: 'озеро', gender: 'maskulin', collocation: 'zum See fahren', example: 'OK, und wenn wir zum See fahren und dort eine Wanderung machen?' },
        { de: 'die Wanderung', plural: 'die Wanderungen', ru: 'пешая прогулка', gender: 'feminin', collocation: 'eine Wanderung machen', example: 'OK, und wenn wir zum See fahren und dort eine Wanderung machen?' },
        { de: 'die Lust', plural: '-', ru: 'желание', gender: 'feminin', collocation: 'Lust haben auf', example: 'Darauf hätte ich Lust.' },
        { de: 'sammeln', ru: 'собирать', type: 'verb', forms: 'sammelt, sammelte, hat gesammelt', example: 'Du, Sabine, ich sammle Ideen für unseren Firmenausflug.' },
        { de: 'interessant', ru: 'интересный', type: 'adj', example: 'Kunst finde ich nicht so interessant.' },
      ],
      practiceSentences: [
        { de: 'Ich sammle Briefmarken.', ru: 'Я собираю марки.', note: 'V2' },
        { de: 'Was haben wir gestern gemacht?', ru: 'Что мы вчера делали?', note: 'Perfekt' },
        { de: 'Es gibt heute Pizza.', ru: 'Сегодня есть пицца.', note: 'es gibt' },
        { de: 'Wir fahren zum Park.', ru: 'Мы едем в парк.', note: 'V2' },
        { de: 'Ich hätte Lust auf Kino.', ru: 'Мне хотелось бы в кино.', note: 'Konjunktiv II' },
      ],
      question: {
        de: 'Was machen sie beim Firmenausflug?',
        ru: 'Что они будут делать на корпоративе?',
        options: [
          { de: 'Eine Stadtführung wie letztes Jahr', ru: 'Экскурсию по городу как в прошлом году' },
          { de: 'Eine Wanderung am See', ru: 'Пешую прогулку у озера' },
          { de: 'Die Kunstausstellung im Museum besuchen', ru: 'Посетят художественную выставку в музее' },
        ],
        correct: 1,
        explanation: 'После обсуждения они соглашаются: "wenn wir zum See fahren und dort eine Wanderung machen" — "Ja, finde ich gut".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 9,
      name: 'Herr Köhler',
      type: 'разговор с соседкой',
      text: 'Ach Mann! Guten Morgen, Frau Nachbarin. Was ist denn, Morgen Herr Köhler? Ich muss zur Arbeit und habe den Zug verpasst. Wie ärgerlich! Warum nehmen Sie nicht Ihr Auto? Das ist in der Werkstatt. Gut, dann fahren Sie bei mir mit. Ich muss jetzt auch mit dem Auto in die Stadt. Das ist wirklich nett.',
      sentenceTranslations: {
        'Ach Mann!': { literal: 'Ах человек!', literary: 'Вот чёрт!' },
        'Guten Morgen, Frau Nachbarin.': { literal: 'Доброе утро, госпожа соседка', literary: 'Доброе утро, соседка.' },
        'Was ist denn, Morgen Herr Köhler?': { literal: 'Что есть же, утро господин Кёлер?', literary: 'Что случилось, доброе утро, господин Кёлер?' },
        'Ich muss zur Arbeit und habe den Zug verpasst.': { literal: 'Я должен к работе и имею поезд пропущен', literary: 'Мне нужно на работу, а я опоздал на поезд.' },
        'Wie ärgerlich!': { literal: 'Как досадно!', literary: 'Как досадно!' },
        'Warum nehmen Sie nicht Ihr Auto?': { literal: 'Почему берёте Вы не Вашу машину?', literary: 'Почему вы не поедете на машине?' },
        'Das ist in der Werkstatt.': { literal: 'Она есть в мастерской', literary: 'Она в ремонте.' },
        'Gut, dann fahren Sie bei mir mit.': { literal: 'Хорошо, тогда едете Вы при мне с', literary: 'Хорошо, тогда поедете со мной.' },
        'Ich muss jetzt auch mit dem Auto in die Stadt.': { literal: 'Я должен сейчас тоже с машиной в город', literary: 'Мне тоже сейчас нужно на машине в город.' },
        'Das ist wirklich nett.': { literal: 'Это есть действительно мило', literary: 'Это очень мило.' },
      },
      vocabulary: [
        { de: 'die Nachbarin', plural: 'die Nachbarinnen', ru: 'соседка', gender: 'feminin', collocation: 'Frau Nachbarin', example: 'Guten Morgen, Frau Nachbarin.' },
        { de: 'die Werkstatt', plural: 'die Werkstätten', ru: 'мастерская, автосервис', gender: 'feminin', collocation: 'in der Werkstatt', example: 'Das ist in der Werkstatt.' },
        { de: 'verpassen', ru: 'опоздать, пропустить', type: 'verb', forms: 'verpasst, verpasste, hat verpasst', example: 'Ich muss zur Arbeit und habe den Zug verpasst.' },
        { de: 'mitfahren', ru: 'ехать с кем-то', type: 'verb', forms: 'fährt mit, fuhr mit, ist mitgefahren', example: 'Gut, dann fahren Sie bei mir mit.' },
        { de: 'ärgerlich', ru: 'досадный', type: 'adj', example: 'Wie ärgerlich!' },
        { de: 'nett', ru: 'милый, любезный', type: 'adj', example: 'Das ist wirklich nett.' },
      ],
      practiceSentences: [
        { de: 'Ich muss zur Schule.', ru: 'Мне нужно в школу.', note: 'модальный + zu' },
        { de: 'Sie hat den Bus verpasst.', ru: 'Она опоздала на автобус.', note: 'Perfekt' },
        { de: 'Mein Fahrrad ist in der Werkstatt.', ru: 'Мой велосипед в ремонте.', note: 'sein + место' },
        { de: 'Kannst du mich mitnehmen?', ru: 'Можешь меня подвезти?', note: 'отделяемая приставка' },
        { de: 'Wir fahren mit dem Taxi.', ru: 'Мы едем на такси.', note: 'V2' },
      ],
      question: {
        de: 'Warum kann Herr Köhler nicht mit seinem Auto fahren?',
        ru: 'Почему господин Кёлер не может поехать на своей машине?',
        options: [
          { de: 'Er hat kein Auto', ru: 'У него нет машины' },
          { de: 'Das Auto ist in der Werkstatt', ru: 'Машина в ремонте' },
          { de: 'Er hat keinen Führerschein', ru: 'У него нет водительских прав' },
        ],
        correct: 1,
        explanation: 'На вопрос о машине он отвечает: "Das ist in der Werkstatt".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 10,
      name: 'Sanitär',
      type: 'звонок в службу',
      text: 'Sanitär Reparaturen, guten Tag. Guten Tag, mein Name ist... Bei mir ist Wasser im Badezimmer. Ich brauche einen Handwerker. Ja, kein Problem. Kommt das Wasser aus der Dusche? Die ist ganz trocken. Es kann natürlich auch die Waschmaschine sein. Die steht bei mir im Keller. Unter der Toilette ist das meiste Wasser. Aha, dann liegt da wohl das Problem.',
      sentenceTranslations: {
        'Sanitär Reparaturen, guten Tag.': { literal: 'Сантехника ремонты, добрый день', literary: 'Сантехнический ремонт, добрый день.' },
        'Guten Tag, mein Name ist...': { literal: 'Добрый день, моё имя есть...', literary: 'Добрый день, меня зовут...' },
        'Bei mir ist Wasser im Badezimmer.': { literal: 'У меня есть вода в ванной комнате', literary: 'У меня вода в ванной.' },
        'Ich brauche einen Handwerker.': { literal: 'Я нуждаюсь одного мастера', literary: 'Мне нужен мастер.' },
        'Ja, kein Problem.': { literal: 'Да, никакая проблема', literary: 'Да, без проблем.' },
        'Kommt das Wasser aus der Dusche?': { literal: 'Приходит вода из душа?', literary: 'Вода течёт из душа?' },
        'Die ist ganz trocken.': { literal: 'Он есть совсем сухой', literary: 'Он совершенно сухой.' },
        'Es kann natürlich auch die Waschmaschine sein.': { literal: 'Оно может естественно также стиральная машина быть', literary: 'Конечно, это может быть и стиральная машина.' },
        'Die steht bei mir im Keller.': { literal: 'Она стоит у меня в подвале', literary: 'Она стоит у меня в подвале.' },
        'Unter der Toilette ist das meiste Wasser.': { literal: 'Под туалетом есть большинство воды', literary: 'Под унитазом больше всего воды.' },
        'Aha, dann liegt da wohl das Problem.': { literal: 'Ага, тогда лежит там же проблема', literary: 'Ага, тогда проблема, видимо, там.' },
      },
      vocabulary: [
        { de: 'das Badezimmer', plural: 'die Badezimmer', ru: 'ванная комната', gender: 'neutrum', collocation: 'im Badezimmer', example: 'Bei mir ist Wasser im Badezimmer.' },
        { de: 'der Handwerker', plural: 'die Handwerker', ru: 'мастер', gender: 'maskulin', collocation: 'einen Handwerker brauchen', example: 'Ich brauche einen Handwerker.' },
        { de: 'die Dusche', plural: 'die Duschen', ru: 'душ', gender: 'feminin', collocation: 'aus der Dusche', example: 'Kommt das Wasser aus der Dusche?' },
        { de: 'die Waschmaschine', plural: 'die Waschmaschinen', ru: 'стиральная машина', gender: 'feminin', collocation: 'die Waschmaschine', example: 'Es kann natürlich auch die Waschmaschine sein.' },
        { de: 'der Keller', plural: 'die Keller', ru: 'подвал', gender: 'maskulin', collocation: 'im Keller', example: 'Die steht bei mir im Keller.' },
        { de: 'die Toilette', plural: 'die Toiletten', ru: 'туалет', gender: 'feminin', collocation: 'unter der Toilette', example: 'Unter der Toilette ist das meiste Wasser.' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'braucht, brauchte, hat gebraucht', example: 'Ich brauche einen Handwerker.' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Die ist ganz trocken.' },
      ],
      practiceSentences: [
        { de: 'Bei uns ist alles gut.', ru: 'У нас всё хорошо.', note: 'sein + предикатив' },
        { de: 'Das Wasser kommt aus dem Hahn.', ru: 'Вода течёт из крана.', note: 'V2' },
        { de: 'Die Maschine steht im Keller.', ru: 'Машина стоит в подвале.', note: 'V2' },
        { de: 'Unter dem Tisch liegt ein Ball.', ru: 'Под столом лежит мяч.', note: 'V2' },
        { de: 'Ich brauche einen Arzt.', ru: 'Мне нужен врач.', note: 'V2' },
      ],
      question: {
        de: 'Wo ist das meiste Wasser?',
        ru: 'Где больше всего воды?',
        options: [
          { de: 'In der Dusche', ru: 'В душе' },
          { de: 'Bei der Waschmaschine im Keller', ru: 'У стиральной машины в подвале' },
          { de: 'Unter der Toilette', ru: 'Под унитазом' },
        ],
        correct: 2,
        explanation: 'Клиент говорит: "Unter der Toilette ist das meiste Wasser", и мастер соглашается: "dann liegt da wohl das Problem".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 11,
      name: 'Frau Hansen',
      type: 'телефонное сообщение',
      text: 'Hallo Frau Hansen. Ich kann heute leider nicht zur Arbeit kommen. Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen. Meine Frau nimmt gleich das Taxi zum Flughafen. Sie muss beruflich für eine Woche nach London.',
      sentenceTranslations: {
        'Hallo Frau Hansen.': { literal: 'Привет госпожа Хансен', literary: 'Здравствуйте, фрау Хансен.' },
        'Ich kann heute leider nicht zur Arbeit kommen.': { literal: 'Я могу сегодня к сожалению не к работе прийти', literary: 'К сожалению, я не смогу сегодня прийти на работу.' },
        'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.': { literal: 'Моя дочь имеет один грипп и я должен с ней к врачу идти', literary: 'У моей дочери грипп, и мне нужно отвести её к врачу.' },
        'Meine Frau nimmt gleich das Taxi zum Flughafen.': { literal: 'Моя жена берёт сейчас такси к аэропорту', literary: 'Моя жена сейчас едет на такси в аэропорт.' },
        'Sie muss beruflich für eine Woche nach London.': { literal: 'Она должна по работе на одну неделю в Лондон', literary: 'Ей нужно по работе на неделю в Лондон.' },
      },
      vocabulary: [
        { de: 'die Tochter', plural: 'die Töchter', ru: 'дочь', gender: 'feminin', collocation: 'meine Tochter', example: 'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.' },
        { de: 'die Grippe', plural: 'die Grippen', ru: 'грипп', gender: 'feminin', collocation: 'eine Grippe haben', example: 'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.' },
        { de: 'der Arzt', plural: 'die Ärzte', ru: 'врач', gender: 'maskulin', collocation: 'zum Arzt gehen', example: 'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.' },
        { de: 'der Flughafen', plural: 'die Flughäfen', ru: 'аэропорт', gender: 'maskulin', collocation: 'zum Flughafen', example: 'Meine Frau nimmt gleich das Taxi zum Flughafen.' },
        { de: 'beruflich', ru: 'по работе', type: 'adv', example: 'Sie muss beruflich für eine Woche nach London.' },
      ],
      practiceSentences: [
        { de: 'Ich kann morgen nicht kommen.', ru: 'Я не смогу завтра прийти.', note: 'модальный + инфинитив' },
        { de: 'Das Kind hat Fieber.', ru: 'У ребёнка температура.', note: 'V2' },
        { de: 'Wir müssen zum Arzt gehen.', ru: 'Нам нужно к врачу.', note: 'модальный + инфинитив' },
        { de: 'Sie nimmt den Bus.', ru: 'Она садится на автобус.', note: 'V2' },
        { de: 'Er fliegt beruflich nach Berlin.', ru: 'Он летит по работе в Берлин.', note: 'V2' },
      ],
      question: {
        de: 'Warum kann die Person nicht zur Arbeit kommen?',
        ru: 'Почему человек не может прийти на работу?',
        options: [
          { de: 'Die Tochter ist krank', ru: 'Дочь заболела' },
          { de: 'Sie muss zum Flughafen', ru: 'Нужно в аэропорт' },
          { de: 'Sie selbst ist krank', ru: 'Сам болеет' },
        ],
        correct: 0,
        explanation: 'В сообщении говорится: "Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen".'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 12,
      name: 'Frau Blessing',
      type: 'интервью',
      text: 'Frau Blessing, Sie und Ihr Mann haben seit einem Jahr das erste Familienhotel in der Stadt. Wie kamen Sie auf diese Idee? Unsere vier Kinder sind alle erwachsen und leben nicht mehr bei uns zu Hause. Ja, leider. Unser Leben war dann plötzlich sehr ruhig. Sie wollten wieder Kontakt mit Kindern? Ja, auch. Und wir kennen die Arbeit im Hotel. Mein Mann hat viele Jahre in einem Hotel an der Rezeption gearbeitet und ich habe im Hotel-Restaurant gekocht. Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen. Wir wollten es versuchen. Verstehe. Ja, und außerdem haben wir auf unseren Reisen gesehen, was in einem normalen Hotel nicht so gut ist, wenn man mit einer großen Familie unterwegs ist. Aha. Und hatten Sie schon viele Gäste? Hier im Haus gibt es drei Wohnungen mit Küche für Familien, die gerne alles selbst machen. Die waren von Anfang an fast immer vermietet. Außerdem haben wir drei große Zimmer. Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht. Aha. In den Sommerferien war das Hotel voll. Jetzt gerade haben wir nicht viele Reservierungen. Dann hoffen wir, dass viele Familien unser Gespräch gehört haben und Ihr Hotel kennen lernen möchten. Alles Gute für Sie. Vielen Dank.',
      sentenceTranslations: {
        'Frau Blessing, Sie und Ihr Mann haben seit einem Jahr das erste Familienhotel in der Stadt.': { literal: 'Госпожа Блессинг, Вы и Ваш муж имеете с одного года первый семейный отель в городе', literary: 'Фрау Блессинг, вы с мужем уже год владеете первым семейным отелем в городе.' },
        'Wie kamen Sie auf diese Idee?': { literal: 'Как пришли Вы на эту идею?', literary: 'Как вы пришли к этой идее?' },
        'Unsere vier Kinder sind alle erwachsen und leben nicht mehr bei uns zu Hause.': { literal: 'Наши четыре ребёнка есть все взрослые и живут не больше у нас дома', literary: 'Наши четверо детей все уже взрослые и больше не живут с нами.' },
        'Ja, leider.': { literal: 'Да, к сожалению', literary: 'Да, к сожалению.' },
        'Unser Leben war dann plötzlich sehr ruhig.': { literal: 'Наша жизнь была тогда внезапно очень спокойная', literary: 'Наша жизнь вдруг стала очень спокойной.' },
        'Sie wollten wieder Kontakt mit Kindern?': { literal: 'Вы хотели снова контакт с детьми?', literary: 'Вы хотели снова общаться с детьми?' },
        'Ja, auch.': { literal: 'Да, тоже', literary: 'Да, и это тоже.' },
        'Und wir kennen die Arbeit im Hotel.': { literal: 'И мы знаем работу в отеле', literary: 'И мы знакомы с гостиничной работой.' },
        'Mein Mann hat viele Jahre in einem Hotel an der Rezeption gearbeitet und ich habe im Hotel-Restaurant gekocht.': { literal: 'Мой муж имеет многие годы в одном отеле на рецепции работал и я имею в отель-ресторане готовила', literary: 'Мой муж много лет работал на рецепции в отеле, а я готовила в ресторане отеля.' },
        'Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen.': { literal: 'Мы думали, с нашими опытами можем мы также сами один маленький отель вести', literary: 'Мы подумали, что с нашим опытом можем и сами управлять небольшим отелем.' },
        'Wir wollten es versuchen.': { literal: 'Мы хотели это попробовать', literary: 'Мы хотели попробовать.' },
        'Verstehe.': { literal: 'Понимаю', literary: 'Понятно.' },
        'Ja, und außerdem haben wir auf unseren Reisen gesehen, was in einem normalen Hotel nicht so gut ist, wenn man mit einer großen Familie unterwegs ist.': { literal: 'Да, и кроме того имеем мы на наших путешествиях видели, что в одном нормальном отеле не так хорошо есть, когда человек с одной большой семьёй в пути есть', literary: 'Да, и ещё мы в путешествиях видели, что в обычном отеле не очень удобно, когда путешествуешь с большой семьёй.' },
        'Aha.': { literal: 'Ага', literary: 'Понятно.' },
        'Und hatten Sie schon viele Gäste?': { literal: 'И имели Вы уже многих гостей?', literary: 'А у вас уже было много гостей?' },
        'Hier im Haus gibt es drei Wohnungen mit Küche für Familien, die gerne alles selbst machen.': { literal: 'Здесь в доме даёт оно три квартиры с кухней для семей, которые охотно всё сами делают', literary: 'В доме есть три квартиры с кухней для семей, которые предпочитают всё делать сами.' },
        'Die waren von Anfang an fast immer vermietet.': { literal: 'Они были с начала почти всегда сданы', literary: 'Они с самого начала почти всегда были заняты.' },
        'Außerdem haben wir drei große Zimmer.': { literal: 'Кроме того имеем мы три больших комнаты', literary: 'Кроме того, у нас три больших номера.' },
        'Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht.': { literal: 'Их может человек с завтраком забронировать или также с обедом и ужином, так как человек это нуждается', literary: 'Их можно забронировать с завтраком или с обедом и ужином, как кому нужно.' },
        'In den Sommerferien war das Hotel voll.': { literal: 'В летние каникулы был отель полный', literary: 'В летние каникулы отель был заполнен.' },
        'Jetzt gerade haben wir nicht viele Reservierungen.': { literal: 'Сейчас как раз имеем мы не многие бронирования', literary: 'Сейчас у нас не много бронирований.' },
        'Dann hoffen wir, dass viele Familien unser Gespräch gehört haben und Ihr Hotel kennen lernen möchten.': { literal: 'Тогда надеемся мы, что многие семьи наш разговор слышали и Ваш отель познакомиться хотят', literary: 'Надеемся, что многие семьи услышали наш разговор и захотят познакомиться с вашим отелем.' },
        'Alles Gute für Sie.': { literal: 'Всего хорошего для Вас', literary: 'Всего вам хорошего.' },
        'Vielen Dank.': { literal: 'Многих благодарностей', literary: 'Большое спасибо.' },
      },
      vocabulary: [
        { de: 'das Familienhotel', plural: 'die Familienhotels', ru: 'семейный отель', gender: 'neutrum', collocation: 'erstes Familienhotel', example: 'Frau Blessing, Sie und Ihr Mann haben seit einem Jahr das erste Familienhotel in der Stadt.' },
        { de: 'die Idee', plural: 'die Ideen', ru: 'идея', gender: 'feminin', collocation: 'auf diese Idee kommen', example: 'Wie kamen Sie auf diese Idee?' },
        { de: 'die Rezeption', plural: 'die Rezeptionen', ru: 'рецепция', gender: 'feminin', collocation: 'an der Rezeption', example: 'Mein Mann hat viele Jahre in einem Hotel an der Rezeption gearbeitet und ich habe im Hotel-Restaurant gekocht.' },
        { de: 'die Erfahrung', plural: 'die Erfahrungen', ru: 'опыт', gender: 'feminin', collocation: 'mit unseren Erfahrungen', example: 'Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen.' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'drei Wohnungen', example: 'Hier im Haus gibt es drei Wohnungen mit Küche für Familien, die gerne alles selbst machen.' },
        { de: 'das Zimmer', plural: 'die Zimmer', ru: 'комната, номер', gender: 'neutrum', collocation: 'große Zimmer', example: 'Außerdem haben wir drei große Zimmer.' },
        { de: 'das Frühstück', plural: 'die Frühstücke', ru: 'завтрак', gender: 'neutrum', collocation: 'mit Frühstück buchen', example: 'Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht.' },
        { de: 'die Reservierung', plural: 'die Reservierungen', ru: 'бронирование', gender: 'feminin', collocation: 'viele Reservierungen', example: 'Jetzt gerade haben wir nicht viele Reservierungen.' },
        { de: 'die Sommerferien', plural: '-', ru: 'летние каникулы', gender: 'feminin', collocation: 'in den Sommerferien', example: 'In den Sommerferien war das Hotel voll.' },
        { de: 'führen', ru: 'вести, управлять', type: 'verb', forms: 'führt, führte, hat geführt', example: 'Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen.' },
        { de: 'vermieten', ru: 'сдавать в аренду', type: 'verb', forms: 'vermietet, vermietete, hat vermietet', example: 'Die waren von Anfang an fast immer vermietet.' },
        { de: 'buchen', ru: 'бронировать', type: 'verb', forms: 'bucht, buchte, hat gebucht', example: 'Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht.' },
        { de: 'erwachsen', ru: 'взрослый', type: 'adj', example: 'Unsere vier Kinder sind alle erwachsen und leben nicht mehr bei uns zu Hause.' },
        { de: 'ruhig', ru: 'спокойный', type: 'adj', example: 'Unser Leben war dann plötzlich sehr ruhig.' },
        { de: 'plötzlich', ru: 'внезапно', type: 'adv', example: 'Unser Leben war dann plötzlich sehr ruhig.' },
      ],
      practiceSentences: [
        { de: 'Wir haben seit zwei Jahren einen Hund.', ru: 'У нас уже два года есть собака.', note: 'V2' },
        { de: 'Die Kinder sind erwachsen.', ru: 'Дети взрослые.', note: 'sein + предикатив' },
        { de: 'Er arbeitet an der Kasse.', ru: 'Он работает на кассе.', note: 'V2' },
        { de: 'Man kann hier Zimmer buchen.', ru: 'Здесь можно забронировать номера.', note: 'модальный + инфинитив' },
        { de: 'Das Hotel war im Sommer voll.', ru: 'Отель летом был полный.', note: 'Präteritum' },
      ],
      question: {
        de: 'Wie viele Zimmer kann man mit Frühstück buchen?',
        ru: 'Сколько комнат можно забронировать с завтраком?',
        options: [
          { de: 'Drei Wohnungen', ru: 'Три квартиры' },
          { de: 'Drei große Zimmer', ru: 'Три больших номера' },
          { de: 'Vier Zimmer', ru: 'Четыре комнаты' },
        ],
        correct: 1,
        explanation: 'Фрау Блессинг объясняет: "Außerdem haben wir drei große Zimmer. Die kann man mit Frühstück buchen".'
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

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'wegen + Genitiv: wegen des Regens, wegen eines technischen Problems',
    'werden + Futur I: es wird stattfinden, es wird warm',
    'Отделяемые приставки: stattfinden, zurückgeben, ausgehen, aufpassen, weiterfahren, aussteigen, abholen, hinfahren, mitfahren, zurückrufen',
    'dass-Nebensatz: dass ich zu Hause bleibe und auf die Kinder aufpasse',
    'weil-Nebensatz: weil wir auf ein Straßenfest gehen wollten',
    'Perfekt с sein: bin hingefahren, sind gegangen, hat abgeholt',
    'Модальные глаголы: kann, möchte, muss, soll, wollte',
    'seit + Dativ: seit einem Jahr',
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табе "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Musikfest).',
    },
  },
};

LESSONS.push(LESSON_08);
