/* ═══════════════════════════════════════════════════════════
   Lesson 22 — Goethe Zertifikat A2 Hören Teil 1–4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_22 = {
  id: 'lesson-22',
  number: 22,
  title: 'Goethe A2 Hören — Musikfest, Köln-Reise, Familienhotel',
  subtitle: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-22',
  videoUrl: 'https://www.youtube.com/watch?v=pMc9iO_fzSU',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Musikfest',
      type: 'объявление',
      text: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes. Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden. Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof. Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.',
      sentenceTranslations: {
        'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes.': { literal: 'И сейчас ещё одна важная информация для посетителей музыкального фестиваля', literary: 'А теперь важная информация для гостей музыкального фестиваля.' },
        'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.': { literal: 'Из-за дождя может концерт сегодня вечером не снаружи на рыночной площади состояться', literary: 'Из-за дождя концерт сегодня вечером не сможет состояться на площади.' },
        'Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof.': { literal: 'Дорогие фанаты, никакого страха, оно будет состояться в большом зале у вокзала', literary: 'Дорогие поклонники, не волнуйтесь, концерт состоится в большом зале у вокзала.' },
        'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.': { literal: 'Кто свой билет вернуть хочет, может это до 18 часов у стойки перед праздничной палаткой бесплатно сделать', literary: 'Кто хочет вернуть билет, может сделать это бесплатно до 18:00 у стойки перед шатром.' },
      },
      vocabulary: [
        { de: 'die Information', plural: 'die Informationen', ru: 'информация', gender: 'feminin', collocation: 'wichtige Information', example: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes.' },
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'Besucher des Musikfestes', example: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes.' },
        { de: 'das Musikfest', plural: 'die Musikfeste', ru: 'музыкальный фестиваль', gender: 'neutrum', collocation: 'zum Musikfest gehen', example: 'Und jetzt noch eine wichtige Information für die Besucher des Musikfestes.' },
        { de: 'der Regen', plural: 'die Regen', ru: 'дождь', gender: 'maskulin', collocation: 'wegen des Regens', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'Konzert findet statt', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'der Marktplatz', plural: 'die Marktplätze', ru: 'рыночная площадь', gender: 'maskulin', collocation: 'auf dem Marktplatz', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'die Halle', plural: 'die Hallen', ru: 'зал', gender: 'feminin', collocation: 'in der großen Halle', example: 'Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof.' },
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'am Bahnhof', example: 'Liebe Fans, keine Angst, es wird stattfinden in der großen Halle am Bahnhof.' },
        { de: 'das Ticket', plural: 'die Tickets', ru: 'билет', gender: 'neutrum', collocation: 'Ticket zurückgeben', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'der Schalter', plural: 'die Schalter', ru: 'стойка, касса', gender: 'maskulin', collocation: 'am Schalter', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'das Festzelt', plural: 'die Festzelte', ru: 'праздничный шатёр', gender: 'neutrum', collocation: 'vor dem Festzelt', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
        { de: 'stattfinden', ru: 'состояться, проходить', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Wegen des Regens kann das Konzert heute Abend nicht draußen auf dem Marktplatz stattfinden.' },
        { de: 'zurückgeben', ru: 'возвращать', type: 'verb', forms: 'gibt zurück, gab zurück, hat zurückgegeben', example: 'Wer sein Ticket zurückgeben möchte, kann das bis 18 Uhr am Schalter vor dem Festzelt kostenlos tun.' },
      ],
      practiceSentences: [
        { de: 'Der Zug kann heute nicht fahren.', ru: 'Поезд не может ехать сегодня.', note: 'модальный V2 + инфинитив в конце' },
        { de: 'Wir geben die Tickets zurück.', ru: 'Мы возвращаем билеты.', note: 'отделяемая приставка' },
        { de: 'Das Fest wird morgen stattfinden.', ru: 'Праздник состоится завтра.', note: 'Futur I: wird V2' },
        { de: 'Ich kann das kostenlos machen.', ru: 'Я могу сделать это бесплатно.', note: 'модальный V2' },
        { de: 'Wegen des Wetters bleiben wir zu Hause.', ru: 'Из-за погоды мы остаёмся дома.', note: 'V2 после обстоятельства' },
      ],
      question: {
        de: 'Wo findet das Konzert heute Abend statt?',
        ru: 'Где состоится концерт сегодня вечером?',
        options: [
          { de: 'Auf dem Marktplatz', ru: 'На рыночной площади' },
          { de: 'In der großen Halle am Bahnhof', ru: 'В большом зале у вокзала' },
          { de: 'Im Festzelt', ru: 'В праздничном шатре' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "es wird stattfinden in der großen Halle am Bahnhof" — концерт перенесён в зал у вокзала из-за дождя.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Frauke',
      type: 'сообщение',
      text: 'Hallo Frauke, Jana feiert doch am Freitag ihren Geburtstag im Büro. Ich backe morgen einen Kuchen. Wichtig ist noch das Geschenk. Paul hat gesagt, er kümmert sich darum. Er fährt heute nach der Arbeit in die Stadt und sucht ein spannendes Buch. Kannst du dich um Saft, Wasser und Kaffee kümmern? Rufst du mich zurück?',
      sentenceTranslations: {
        'Hallo Frauke, Jana feiert doch am Freitag ihren Geburtstag im Büro.': { literal: 'Привет Фрауке, Яна празднует же в пятницу свой день рождения в офисе', literary: 'Привет, Фрауке! Яна же празднует в пятницу день рождения в офисе.' },
        'Ich backe morgen einen Kuchen.': { literal: 'Я пеку завтра один пирог', literary: 'Я испеку завтра торт.' },
        'Wichtig ist noch das Geschenk.': { literal: 'Важно есть ещё подарок', literary: 'Ещё важен подарок.' },
        'Paul hat gesagt, er kümmert sich darum.': { literal: 'Пауль сказал, он заботится себя об этом', literary: 'Пауль сказал, что займётся этим.' },
        'Er fährt heute nach der Arbeit in die Stadt und sucht ein spannendes Buch.': { literal: 'Он едет сегодня после работы в город и ищет увлекательную книгу', literary: 'Он едет сегодня после работы в город и ищет интересную книгу.' },
        'Kannst du dich um Saft, Wasser und Kaffee kümmern?': { literal: 'Можешь ты себя о соке, воде и кофе позаботиться?', literary: 'Можешь ты позаботиться о соке, воде и кофе?' },
        'Rufst du mich zurück?': { literal: 'Звонишь ты мне обратно?', literary: 'Перезвонишь мне?' },
      },
      vocabulary: [
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'Geburtstag feiern', example: 'Jana feiert doch am Freitag ihren Geburtstag im Büro.' },
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'im Büro feiern', example: 'Jana feiert doch am Freitag ihren Geburtstag im Büro.' },
        { de: 'der Kuchen', plural: 'die Kuchen', ru: 'торт, пирог', gender: 'maskulin', collocation: 'einen Kuchen backen', example: 'Ich backe morgen einen Kuchen.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'um das Geschenk kümmern', example: 'Wichtig ist noch das Geschenk.' },
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', collocation: 'spannendes Buch suchen', example: 'Er fährt heute nach der Arbeit in die Stadt und sucht ein spannendes Buch.' },
        { de: 'feiern', ru: 'праздновать', type: 'verb', forms: 'feiert, feierte, hat gefeiert', example: 'Jana feiert doch am Freitag ihren Geburtstag im Büro.' },
        { de: 'backen', ru: 'печь', type: 'verb', forms: 'backt, backte, hat gebacken', example: 'Ich backe morgen einen Kuchen.' },
        { de: 'sich kümmern um', ru: 'заботиться о', type: 'verb', forms: 'kümmert sich, kümmerte sich, hat sich gekümmert', example: 'Paul hat gesagt, er kümmert sich darum.' },
        { de: 'zurückrufen', ru: 'перезванивать', type: 'verb', forms: 'ruft zurück, rief zurück, hat zurückgerufen', example: 'Rufst du mich zurück?' },
      ],
      practiceSentences: [
        { de: 'Sie feiert heute Geburtstag.', ru: 'Она празднует сегодня день рождения.', note: 'V2' },
        { de: 'Ich backe einen Kuchen.', ru: 'Я пеку торт.', note: 'V2' },
        { de: 'Er kümmert sich um das Geschenk.', ru: 'Он заботится о подарке.', note: 'возвратный V2' },
        { de: 'Wir fahren morgen in die Stadt.', ru: 'Мы едем завтра в город.', note: 'V2' },
        { de: 'Kannst du das machen?', ru: 'Можешь ты это сделать?', note: 'модальный V1 (вопрос)' },
      ],
      question: {
        de: 'Was macht Paul heute nach der Arbeit?',
        ru: 'Что делает Пауль сегодня после работы?',
        options: [
          { de: 'Er backt einen Kuchen', ru: 'Он печёт торт' },
          { de: 'Er fährt in die Stadt und sucht ein Buch', ru: 'Он едет в город и ищет книгу' },
          { de: 'Er kümmert sich um Getränke', ru: 'Он заботится о напитках' },
        ],
        correct: 1,
        explanation: 'В тексте: "er fährt heute nach der Arbeit in die Stadt und sucht ein spannendes Buch" — Пауль едет в город искать книгу для подарка.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Clemens',
      type: 'сообщение',
      text: 'Hi Paul, Clemens hier. Du, wir hatten ja gesagt, wir gehen diesen Samstag etwas trinken. Kannst du auch Sonntagabend? Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse. Sonntag kommen dann noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.',
      sentenceTranslations: {
        'Hi Paul, Clemens hier.': { literal: 'Привет Пауль, Клеменс здесь', literary: 'Привет, Пауль, это Клеменс.' },
        'Du, wir hatten ja gesagt, wir gehen diesen Samstag etwas trinken.': { literal: 'Ты, мы имели же сказано, мы идём эту субботу что-то пить', literary: 'Слушай, мы же договорились выпить в эту субботу.' },
        'Kannst du auch Sonntagabend?': { literal: 'Можешь ты также воскресным вечером?', literary: 'Ты можешь в воскресенье вечером?' },
        'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.': { literal: 'В субботний вечер идёт моя жена с друзьями наружу и я имею обещано, что я дома остаюсь и на детей смотрю', literary: 'В субботу вечером моя жена идёт развлекаться с друзьями, и я обещал остаться дома и присмотреть за детьми.' },
        'Sonntag kommen dann noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.': { literal: 'Воскресенье приходят тогда ещё мои родители к визиту, но с 19 часов имею я время', literary: 'В воскресенье ещё родители приедут в гости, но с 19:00 я свободен.' },
      },
      vocabulary: [
        { de: 'der Samstag', plural: 'die Samstage', ru: 'суббота', gender: 'maskulin', collocation: 'diesen Samstag', example: 'Du, wir hatten ja gesagt, wir gehen diesen Samstag etwas trinken.' },
        { de: 'der Freund', plural: 'die Freunde', ru: 'друг', gender: 'maskulin', collocation: 'mit Freunden ausgehen', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
        { de: 'das Kind', plural: 'die Kinder', ru: 'ребёнок', gender: 'neutrum', collocation: 'auf die Kinder aufpassen', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
        { de: 'die Eltern', ru: 'родители', gender: 'feminin', collocation: 'meine Eltern zu Besuch', example: 'Sonntag kommen dann noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.' },
        { de: 'der Besuch', plural: 'die Besuche', ru: 'визит, гости', gender: 'maskulin', collocation: 'zu Besuch kommen', example: 'Sonntag kommen dann noch meine Eltern zu Besuch, aber ab 19 Uhr habe ich Zeit.' },
        { de: 'ausgehen', ru: 'выходить развлекаться', type: 'verb', forms: 'geht aus, ging aus, ist ausgegangen', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
        { de: 'versprechen', ru: 'обещать', type: 'verb', forms: 'verspricht, versprach, hat versprochen', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
        { de: 'aufpassen auf', ru: 'присматривать за', type: 'verb', forms: 'passt auf, passte auf, hat aufgepasst', example: 'Am Samstagabend geht meine Frau mit Freunden aus und ich habe versprochen, dass ich zu Hause bleibe und auf die Kinder aufpasse.' },
      ],
      practiceSentences: [
        { de: 'Wir gehen heute etwas essen.', ru: 'Мы идём сегодня поесть.', note: 'V2 + инфинитив' },
        { de: 'Sie geht mit Freunden aus.', ru: 'Она идёт развлекаться с друзьями.', note: 'отделяемая приставка' },
        { de: 'Ich passe auf die Kinder auf.', ru: 'Я присматриваю за детьми.', note: 'отделяемая приставка' },
        { de: 'Er bleibt zu Hause.', ru: 'Он остаётся дома.', note: 'V2' },
        { de: 'Ab 20 Uhr habe ich Zeit.', ru: 'С 20 часов у меня есть время.', note: 'V2 после обстоятельства' },
      ],
      question: {
        de: 'Wann hat Clemens Zeit für ein Treffen?',
        ru: 'Когда у Клеменса есть время для встречи?',
        options: [
          { de: 'Samstagabend', ru: 'В субботу вечером' },
          { de: 'Sonntagmorgen', ru: 'В воскресенье утром' },
          { de: 'Sonntagabend ab 19 Uhr', ru: 'В воскресенье вечером с 19:00' },
        ],
        correct: 2,
        explanation: 'Клеменс говорит: "aber ab 19 Uhr habe ich Zeit" — у него есть время в воскресенье после 19:00.'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Und nun zum Wetter. Der Sommer bleibt und es wird morgen noch mal sehr warm. Im Süden bis 30 Grad. Am späten Nachmittag soll es dort etwas regnen. Vorsicht im Westen, dort wird es bis zum frühen Nachmittag auch sehr warm. Es soll am Nachmittag aber starke Gewitter geben. Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.',
      sentenceTranslations: {
        'Und nun zum Wetter.': { literal: 'И сейчас к погоде', literary: 'А теперь о погоде.' },
        'Der Sommer bleibt und es wird morgen noch mal sehr warm.': { literal: 'Лето остаётся и это становится завтра ещё раз очень тепло', literary: 'Лето продолжается, и завтра снова будет очень тепло.' },
        'Im Süden bis 30 Grad.': { literal: 'На юге до 30 градусов', literary: 'На юге до 30 градусов.' },
        'Am späten Nachmittag soll es dort etwas regnen.': { literal: 'В поздний послеобеденный должно это там немного дождить', literary: 'Поздно днём там ожидается небольшой дождь.' },
        'Vorsicht im Westen, dort wird es bis zum frühen Nachmittag auch sehr warm.': { literal: 'Осторожность на западе, там становится это до раннего послеобеденного тоже очень тепло', literary: 'Внимание на западе: там тоже будет очень тепло до раннего дня.' },
        'Es soll am Nachmittag aber starke Gewitter geben.': { literal: 'Это должно в послеобеденное но сильные грозы дать', literary: 'Но после обеда ожидаются сильные грозы.' },
        'Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.': { literal: 'На севере и востоке становится это прохладно с температурами до 16 градусов, но это остаётся сухо', literary: 'На севере и востоке будет прохладно, до 16 градусов, но без осадков.' },
      },
      vocabulary: [
        { de: 'das Wetter', plural: 'die Wetter', ru: 'погода', gender: 'neutrum', collocation: 'zum Wetter', example: 'Und nun zum Wetter.' },
        { de: 'der Sommer', plural: 'die Sommer', ru: 'лето', gender: 'maskulin', collocation: 'der Sommer bleibt', example: 'Der Sommer bleibt und es wird morgen noch mal sehr warm.' },
        { de: 'der Grad', plural: 'die Grade', ru: 'градус', gender: 'maskulin', collocation: 'bis 30 Grad', example: 'Im Süden bis 30 Grad.' },
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'послеобеденное время', gender: 'maskulin', collocation: 'am späten Nachmittag', example: 'Am späten Nachmittag soll es dort etwas regnen.' },
        { de: 'das Gewitter', plural: 'die Gewitter', ru: 'гроза', gender: 'neutrum', collocation: 'starke Gewitter', example: 'Es soll am Nachmittag aber starke Gewitter geben.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'Temperaturen bis 16 Grad', example: 'Im Norden und Osten wird es kühl mit Temperaturen bis 16 Grad, aber es bleibt trocken.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Am späten Nachmittag soll es dort etwas regnen.' },
        { de: 'bleiben', ru: 'оставаться', type: 'verb', forms: 'bleibt, blieb, ist geblieben', example: 'Der Sommer bleibt und es wird morgen noch mal sehr warm.' },
      ],
      practiceSentences: [
        { de: 'Es wird heute kalt.', ru: 'Сегодня становится холодно.', note: 'werden + прилагательное' },
        { de: 'Morgen soll es regnen.', ru: 'Завтра должен быть дождь.', note: 'модальный V2' },
        { de: 'Es gibt heute Sonne.', ru: 'Сегодня будет солнце.', note: 'es gibt V2' },
        { de: 'Im Süden bleibt es warm.', ru: 'На юге остаётся тепло.', note: 'V2 после обстоятельства' },
        { de: 'Es wird bis 25 Grad warm.', ru: 'Потеплеет до 25 градусов.', note: 'werden V2' },
      ],
      question: {
        de: 'Wo wird es morgen Gewitter geben?',
        ru: 'Где завтра будут грозы?',
        options: [
          { de: 'Im Süden', ru: 'На юге' },
          { de: 'Im Westen', ru: 'На западе' },
          { de: 'Im Norden und Osten', ru: 'На севере и востоке' },
        ],
        correct: 1,
        explanation: 'В прогнозе: "Vorsicht im Westen... es soll am Nachmittag aber starke Gewitter geben" — грозы ожидаются на западе.'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Zug',
      type: 'объявление на вокзале',
      text: 'Achtung, liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren. Bitte alle aussteigen. Fahrgäste nach Frankfurt fahren bitte mit dem ICE 562 um 14 Uhr von Gleis 1. Fahrgäste nach Stuttgart nehmen bitte die S-Bahn um 14:22 Uhr von Gleis 4.',
      sentenceTranslations: {
        'Achtung, liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.': { literal: 'Внимание, дорогие пассажиры, этот поезд может из-за одной технической проблемы не дальше-ехать', literary: 'Внимание, уважаемые пассажиры, этот поезд не может следовать дальше из-за технической проблемы.' },
        'Bitte alle aussteigen.': { literal: 'Пожалуйста все выйти', literary: 'Просьба всем выйти.' },
        'Fahrgäste nach Frankfurt fahren bitte mit dem ICE 562 um 14 Uhr von Gleis 1.': { literal: 'Пассажиры в Франкфурт едут пожалуйста с ICE 562 в 14 часов с пути 1', literary: 'Пассажиры до Франкфурта, воспользуйтесь поездом ICE 562 в 14:00 с первого пути.' },
        'Fahrgäste nach Stuttgart nehmen bitte die S-Bahn um 14:22 Uhr von Gleis 4.': { literal: 'Пассажиры в Штутгарт берут пожалуйста электричку в 14:22 с пути 4', literary: 'Пассажиры до Штутгарта, воспользуйтесь электричкой в 14:22 с четвёртого пути.' },
      },
      vocabulary: [
        { de: 'der Fahrgast', plural: 'die Fahrgäste', ru: 'пассажир', gender: 'maskulin', collocation: 'liebe Fahrgäste', example: 'Achtung, liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
        { de: 'der Zug', plural: 'die Züge', ru: 'поезд', gender: 'maskulin', collocation: 'dieser Zug', example: 'Achtung, liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
        { de: 'das Problem', plural: 'die Probleme', ru: 'проблема', gender: 'neutrum', collocation: 'technisches Problem', example: 'Achtung, liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
        { de: 'das Gleis', plural: 'die Gleise', ru: 'путь, платформа', gender: 'neutrum', collocation: 'von Gleis 1', example: 'Fahrgäste nach Frankfurt fahren bitte mit dem ICE 562 um 14 Uhr von Gleis 1.' },
        { de: 'die S-Bahn', plural: 'die S-Bahnen', ru: 'электричка', gender: 'feminin', collocation: 'die S-Bahn nehmen', example: 'Fahrgäste nach Stuttgart nehmen bitte die S-Bahn um 14:22 Uhr von Gleis 4.' },
        { de: 'weiterfahren', ru: 'продолжать движение', type: 'verb', forms: 'fährt weiter, fuhr weiter, ist weitergefahren', example: 'Achtung, liebe Fahrgäste, dieser Zug kann wegen eines technischen Problems nicht weiterfahren.' },
        { de: 'aussteigen', ru: 'выходить (из транспорта)', type: 'verb', forms: 'steigt aus, stieg aus, ist ausgestiegen', example: 'Bitte alle aussteigen.' },
      ],
      practiceSentences: [
        { de: 'Der Bus kann nicht weiterfahren.', ru: 'Автобус не может ехать дальше.', note: 'модальный + инфинитив' },
        { de: 'Bitte steigen Sie aus.', ru: 'Пожалуйста, выйдите.', note: 'императив с отделяемой' },
        { de: 'Wir fahren mit dem Zug.', ru: 'Мы едем на поезде.', note: 'V2' },
        { de: 'Der Zug fährt von Gleis 3.', ru: 'Поезд отправляется с 3-го пути.', note: 'V2' },
        { de: 'Ich nehme die S-Bahn.', ru: 'Я беру электричку.', note: 'V2' },
      ],
      question: {
        de: 'Von welchem Gleis fährt der Zug nach Frankfurt?',
        ru: 'С какого пути отправляется поезд во Франкфурт?',
        options: [
          { de: 'Gleis 1', ru: 'Путь 1' },
          { de: 'Gleis 4', ru: 'Путь 4' },
          { de: 'Gleis 562', ru: 'Путь 562' },
        ],
        correct: 0,
        explanation: 'В объявлении: "Fahrgäste nach Frankfurt fahren bitte mit dem ICE 562 um 14 Uhr von Gleis 1" — с первого пути.'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Köln-Reise',
      type: 'диалог',
      text: 'Sonja, was machst du denn hier? Ich denke, du bist in Köln. Letzte Woche war ich in Köln. Und wie war es? Ach, es war toll. Am Freitag bin ich hingefahren. Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen. Das Museum war wegen einer Veranstaltung geschlossen, also waren wir im Theater. Wir haben leider keine Karten mehr gekriegt, also waren wir den ganzen Tag in der Stadt und haben uns Sehenswürdigkeiten angesehen. Am Montagabend waren wir bei dem Klavierkonzert. Julia hatte eine andere tolle Idee: eine Radtour am Fluss. Am Mittwoch hat es leider geregnet. Wir waren dann in der Ausstellung im Museum. Die war sehr schön, kann ich empfehlen.',
      sentenceTranslations: {
        'Sonja, was machst du denn hier?': { literal: 'Соня, что делаешь ты же здесь?', literary: 'Соня, что ты здесь делаешь?' },
        'Ich denke, du bist in Köln.': { literal: 'Я думаю, ты есть в Кёльне', literary: 'Я думала, ты в Кёльне.' },
        'Letzte Woche war ich in Köln.': { literal: 'Последнюю неделю был я в Кёльне', literary: 'На прошлой неделе я была в Кёльне.' },
        'Und wie war es?': { literal: 'И как было это?', literary: 'И как было?' },
        'Ach, es war toll.': { literal: 'Ах, это было прекрасно', literary: 'Ах, было здорово.' },
        'Am Freitag bin ich hingefahren.': { literal: 'В пятницу есть я туда-ехала', literary: 'В пятницу я поехала туда.' },
        'Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen.': { literal: 'Моя подруга Юлия имеет меня от вокзала забрала и тогда есть мы в хорошем ресторане есть пошли', literary: 'Моя подруга Юлия встретила меня на вокзале, и потом мы пошли поесть в хороший ресторан.' },
        'Das Museum war wegen einer Veranstaltung geschlossen, also waren wir im Theater.': { literal: 'Музей был из-за одного мероприятия закрыт, поэтому были мы в театре', literary: 'Музей был закрыт из-за мероприятия, поэтому мы пошли в театр.' },
        'Wir haben leider keine Karten mehr gekriegt, also waren wir den ganzen Tag in der Stadt und haben uns Sehenswürdigkeiten angesehen.': { literal: 'Мы имеем к-сожалению никакие карты больше получили, поэтому были мы целый день в городе и имеем себе достопримечательности посмотрели', literary: 'К сожалению, мы не достали билеты, поэтому весь день гуляли по городу и осматривали достопримечательности.' },
        'Am Montagabend waren wir bei dem Klavierkonzert.': { literal: 'В понедельник-вечером были мы при фортепианном концерте', literary: 'В понедельник вечером мы были на фортепианном концерте.' },
        'Julia hatte eine andere tolle Idee: eine Radtour am Fluss.': { literal: 'Юлия имела другую прекрасную идею: велотур у реки', literary: 'У Юлии была другая отличная идея: велопрогулка вдоль реки.' },
        'Am Mittwoch hat es leider geregnet.': { literal: 'В среду имеет это к-сожалению дождило', literary: 'В среду, к сожалению, шёл дождь.' },
        'Wir waren dann in der Ausstellung im Museum.': { literal: 'Мы были тогда в выставке в музее', literary: 'Тогда мы пошли на выставку в музей.' },
        'Die war sehr schön, kann ich empfehlen.': { literal: 'Она была очень красивой, могу я рекомендовать', literary: 'Она была очень хорошей, рекомендую.' },
      },
      vocabulary: [
        { de: 'die Woche', plural: 'die Wochen', ru: 'неделя', gender: 'feminin', collocation: 'letzte Woche', example: 'Letzte Woche war ich in Köln.' },
        { de: 'die Freundin', plural: 'die Freundinnen', ru: 'подруга', gender: 'feminin', collocation: 'meine Freundin Julia', example: 'Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen.' },
        { de: 'das Restaurant', plural: 'die Restaurants', ru: 'ресторан', gender: 'neutrum', collocation: 'im Restaurant essen', example: 'Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen.' },
        { de: 'die Ausstellung', plural: 'die Ausstellungen', ru: 'выставка', gender: 'feminin', collocation: 'neue Ausstellung sehen', example: 'Wir waren dann in der Ausstellung im Museum.' },
        { de: 'das Museum', plural: 'die Museen', ru: 'музей', gender: 'neutrum', collocation: 'im Museum', example: 'Das Museum war wegen einer Veranstaltung geschlossen, also waren wir im Theater.' },
        { de: 'die Veranstaltung', plural: 'die Veranstaltungen', ru: 'мероприятие', gender: 'feminin', collocation: 'wegen einer Veranstaltung', example: 'Das Museum war wegen einer Veranstaltung geschlossen, also waren wir im Theater.' },
        { de: 'das Theater', plural: 'die Theater', ru: 'театр', gender: 'neutrum', collocation: 'im Theater', example: 'Das Museum war wegen einer Veranstaltung geschlossen, also waren wir im Theater.' },
        { de: 'die Sehenswürdigkeit', plural: 'die Sehenswürdigkeiten', ru: 'достопримечательность', gender: 'feminin', collocation: 'Sehenswürdigkeiten ansehen', example: 'Wir haben leider keine Karten mehr gekriegt, also waren wir den ganzen Tag in der Stadt und haben uns Sehenswürdigkeiten angesehen.' },
        { de: 'das Klavierkonzert', plural: 'die Klavierkonzerte', ru: 'фортепианный концерт', gender: 'neutrum', collocation: 'beim Klavierkonzert', example: 'Am Montagabend waren wir bei dem Klavierkonzert.' },
        { de: 'die Radtour', plural: 'die Radtouren', ru: 'велопрогулка', gender: 'feminin', collocation: 'eine Radtour machen', example: 'Julia hatte eine andere tolle Idee: eine Radtour am Fluss.' },
        { de: 'der Fluss', plural: 'die Flüsse', ru: 'река', gender: 'maskulin', collocation: 'am Fluss', example: 'Julia hatte eine andere tolle Idee: eine Radtour am Fluss.' },
        { de: 'abholen', ru: 'встречать, забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Meine Freundin Julia hat mich vom Bahnhof abgeholt und dann sind wir in einem guten Restaurant essen gegangen.' },
        { de: 'sich ansehen', ru: 'осматривать', type: 'verb', forms: 'sieht sich an, sah sich an, hat sich angesehen', example: 'Wir haben leider keine Karten mehr gekriegt, also waren wir den ganzen Tag in der Stadt und haben uns Sehenswürdigkeiten angesehen.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Die war sehr schön, kann ich empfehlen.' },
      ],
      practiceSentences: [
        { de: 'Ich bin gestern hingefahren.', ru: 'Я вчера туда поехал.', note: 'Perfekt с sein' },
        { de: 'Sie hat mich abgeholt.', ru: 'Она меня встретила.', note: 'Perfekt с отделяемой' },
        { de: 'Wir gehen heute essen.', ru: 'Мы идём сегодня поесть.', note: 'V2 + инфинитив' },
        { de: 'Das Museum war geschlossen.', ru: 'Музей был закрыт.', note: 'Präteritum von sein' },
        { de: 'Es hat nicht geklappt.', ru: 'Это не получилось.', note: 'Perfekt безличного' },
      ],
      question: {
        de: 'An welchem Tag war das Museum wegen einer Veranstaltung geschlossen?',
        ru: 'В какой день музей был закрыт из-за мероприятия?',
        options: [
          { de: 'Am Freitag', ru: 'В пятницу' },
          { de: 'Am Samstag', ru: 'В субботу' },
          { de: 'Am Mittwoch', ru: 'В среду' },
        ],
        correct: 1,
        explanation: 'В тексте: "eigentlich am Samstag aber das Museum war wegen einer Veranstaltung geschlossen" — музей был закрыт в субботу.'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Frau Schlemmer',
      type: 'диалог/звонок',
      text: 'Schlemmer, hallo. Hallo, Frau Schlemmer, hier Florian Meyer. Sie verkaufen alte Möbel? Ja, heute Morgen habe ich Ihnen geschrieben, dass ich das Sofa verkaufen möchte. Ja, ich erinnere mich. Tut mir leid, aber es ist zu groß. Das kann ich nicht mit meinem Auto abholen. Aber der Wohnzimmertisch interessiert mich. Können Sie haben. Und die vier Stühle, nehmen Sie die auch? Da habe ich eigene. Okay.',
      sentenceTranslations: {
        'Schlemmer, hallo.': { literal: 'Шлеммер, привет', literary: 'Шлеммер, алло.' },
        'Hallo, Frau Schlemmer, hier Florian Meyer.': { literal: 'Привет, госпожа Шлеммер, здесь Флориан Майер', literary: 'Здравствуйте, госпожа Шлеммер, это Флориан Майер.' },
        'Sie verkaufen alte Möbel?': { literal: 'Вы продаёте старую мебель?', literary: 'Вы продаёте старую мебель?' },
        'Ja, heute Morgen habe ich Ihnen geschrieben, dass ich das Sofa verkaufen möchte.': { literal: 'Да, сегодня утром имею я Вам написал, что я диван продать хочу', literary: 'Да, сегодня утром я написала Вам, что хочу продать диван.' },
        'Ja, ich erinnere mich.': { literal: 'Да, я вспоминаю себя', literary: 'Да, я помню.' },
        'Tut mir leid, aber es ist zu groß.': { literal: 'Делает мне жаль, но оно есть слишком большое', literary: 'Мне жаль, но он слишком большой.' },
        'Das kann ich nicht mit meinem Auto abholen.': { literal: 'Это могу я не с моей машиной забрать', literary: 'Я не могу забрать это на своей машине.' },
        'Aber der Wohnzimmertisch interessiert mich.': { literal: 'Но гостиный-стол интересует меня', literary: 'Но меня интересует журнальный столик.' },
        'Können Sie haben.': { literal: 'Можете Вы иметь', literary: 'Можете забрать.' },
        'Und die vier Stühle, nehmen Sie die auch?': { literal: 'И четыре стула, берёте Вы их тоже?', literary: 'А четыре стула тоже возьмёте?' },
        'Da habe ich eigene.': { literal: 'Там имею я собственные', literary: 'У меня есть свои.' },
        'Okay.': { literal: 'Окей', literary: 'Хорошо.' },
      },
      vocabulary: [
        { de: 'die Möbel', ru: 'мебель (мн.ч.)', gender: 'feminin', collocation: 'alte Möbel verkaufen', example: 'Sie verkaufen alte Möbel?' },
        { de: 'das Sofa', plural: 'die Sofas', ru: 'диван', gender: 'neutrum', collocation: 'das Sofa verkaufen', example: 'Ja, heute Morgen habe ich Ihnen geschrieben, dass ich das Sofa verkaufen möchte.' },
        { de: 'das Auto', plural: 'die Autos', ru: 'автомобиль', gender: 'neutrum', collocation: 'mit meinem Auto', example: 'Das kann ich nicht mit meinem Auto abholen.' },
        { de: 'der Wohnzimmertisch', plural: 'die Wohnzimmertische', ru: 'журнальный столик', gender: 'maskulin', collocation: 'der Wohnzimmertisch interessiert mich', example: 'Aber der Wohnzimmertisch interessiert mich.' },
        { de: 'der Stuhl', plural: 'die Stühle', ru: 'стул', gender: 'maskulin', collocation: 'vier Stühle', example: 'Und die vier Stühle, nehmen Sie die auch?' },
        { de: 'verkaufen', ru: 'продавать', type: 'verb', forms: 'verkauft, verkaufte, hat verkauft', example: 'Sie verkaufen alte Möbel?' },
        { de: 'sich erinnern', ru: 'помнить, вспоминать', type: 'verb', forms: 'erinnert sich, erinnerte sich, hat sich erinnert', example: 'Ja, ich erinnere mich.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Das kann ich nicht mit meinem Auto abholen.' },
        { de: 'interessieren', ru: 'интересовать', type: 'verb', forms: 'interessiert, interessierte, hat interessiert', example: 'Aber der Wohnzimmertisch interessiert mich.' },
      ],
      practiceSentences: [
        { de: 'Ich verkaufe mein Auto.', ru: 'Я продаю свою машину.', note: 'V2' },
        { de: 'Das ist zu teuer.', ru: 'Это слишком дорого.', note: 'sein V2' },
        { de: 'Ich kann das abholen.', ru: 'Я могу это забрать.', note: 'модальный + инфинитив' },
        { de: 'Das interessiert mich.', ru: 'Это меня интересует.', note: 'V2' },
        { de: 'Ich habe dir geschrieben.', ru: 'Я тебе написал.', note: 'Perfekt с haben' },
      ],
      question: {
        de: 'Was möchte Herr Meyer kaufen?',
        ru: 'Что хочет купить господин Майер?',
        options: [
          { de: 'Das Sofa und die Stühle', ru: 'Диван и стулья' },
          { de: 'Nur den Wohnzimmertisch', ru: 'Только журнальный столик' },
          { de: 'Alle Möbel', ru: 'Всю мебель' },
        ],
        correct: 1,
        explanation: 'Господин Майер говорит: "der Wohnzimmertisch interessiert mich", а стулья у него свои ("da habe ich eigene").'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Firmenausflug',
      type: 'диалог',
      text: 'Du Sabine, ich sammle Ideen für unseren Firmenausflug. Ah ja, was haben wir denn im letzten Jahr gemacht? Eine interessante Stadtführung. Richtig, die war toll. Im Stadtmuseum gibt es eine gute neue Kunstausstellung. Kunst finde ich nicht so interessant. Okay, und wenn wir zum See fahren und dort eine Wanderung machen? Darauf hätte ich Lust. Ja, finde ich gut.',
      sentenceTranslations: {
        'Du Sabine, ich sammle Ideen für unseren Firmenausflug.': { literal: 'Ты Сабина, я собираю идеи для нашей фирменной поездки', literary: 'Сабина, я собираю идеи для нашей корпоративной поездки.' },
        'Ah ja, was haben wir denn im letzten Jahr gemacht?': { literal: 'А да, что имеем мы же в последнем году сделали?', literary: 'А что мы делали в прошлом году?' },
        'Eine interessante Stadtführung.': { literal: 'Одна интересная городская экскурсия', literary: 'Интересную экскурсию по городу.' },
        'Richtig, die war toll.': { literal: 'Правильно, она была прекрасна', literary: 'Точно, она была отличной.' },
        'Im Stadtmuseum gibt es eine gute neue Kunstausstellung.': { literal: 'В городском-музее даёт это одну хорошую новую художественную выставку', literary: 'В городском музее есть хорошая новая художественная выставка.' },
        'Kunst finde ich nicht so interessant.': { literal: 'Искусство нахожу я не так интересным', literary: 'Искусство мне не очень интересно.' },
        'Okay, und wenn wir zum See fahren und dort eine Wanderung machen?': { literal: 'Окей, и если мы к озеру едем и там поход делаем?', literary: 'Хорошо, а если поехать к озеру и совершить там поход?' },
        'Darauf hätte ich Lust.': { literal: 'На это имела бы я желание', literary: 'Мне бы этого хотелось.' },
        'Ja, finde ich gut.': { literal: 'Да, нахожу я хорошим', literary: 'Да, мне нравится.' },
      },
      vocabulary: [
        { de: 'die Idee', plural: 'die Ideen', ru: 'идея', gender: 'feminin', collocation: 'Ideen sammeln', example: 'Du Sabine, ich sammle Ideen für unseren Firmenausflug.' },
        { de: 'der Firmenausflug', plural: 'die Firmenausflüge', ru: 'корпоративная поездка', gender: 'maskulin', collocation: 'für unseren Firmenausflug', example: 'Du Sabine, ich sammle Ideen für unseren Firmenausflug.' },
        { de: 'die Stadtführung', plural: 'die Stadtführungen', ru: 'экскурсия по городу', gender: 'feminin', collocation: 'interessante Stadtführung', example: 'Eine interessante Stadtführung.' },
        { de: 'die Kunstausstellung', plural: 'die Kunstausstellungen', ru: 'художественная выставка', gender: 'feminin', collocation: 'neue Kunstausstellung', example: 'Im Stadtmuseum gibt es eine gute neue Kunstausstellung.' },
        { de: 'der See', plural: 'die Seen', ru: 'озеро', gender: 'maskulin', collocation: 'zum See fahren', example: 'Okay, und wenn wir zum See fahren und dort eine Wanderung machen?' },
        { de: 'die Wanderung', plural: 'die Wanderungen', ru: 'пеший поход', gender: 'feminin', collocation: 'eine Wanderung machen', example: 'Okay, und wenn wir zum See fahren und dort eine Wanderung machen?' },
        { de: 'sammeln', ru: 'собирать', type: 'verb', forms: 'sammelt, sammelte, hat gesammelt', example: 'Du Sabine, ich sammle Ideen für unseren Firmenausflug.' },
      ],
      practiceSentences: [
        { de: 'Wir sammeln Ideen.', ru: 'Мы собираем идеи.', note: 'V2' },
        { de: 'Was haben wir gemacht?', ru: 'Что мы делали?', note: 'Perfekt, V2 после W-Wort' },
        { de: 'Wir fahren zum See.', ru: 'Мы едем к озеру.', note: 'V2' },
        { de: 'Ich hätte Lust.', ru: 'У меня было бы желание.', note: 'Konjunktiv II' },
        { de: 'Das finde ich gut.', ru: 'Я нахожу это хорошим.', note: 'V2' },
      ],
      question: {
        de: 'Was möchte Sabine für den Firmenausflug machen?',
        ru: 'Что хочет Сабина делать на корпоративной поездке?',
        options: [
          { de: 'Eine Stadtführung', ru: 'Экскурсию по городу' },
          { de: 'Die Kunstausstellung besuchen', ru: 'Посетить художественную выставку' },
          { de: 'Eine Wanderung am See', ru: 'Поход у озера' },
        ],
        correct: 2,
        explanation: 'Сабина говорит: "wenn wir zum See fahren und dort eine Wanderung machen — darauf hätte ich Lust".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Herr Köhler',
      type: 'диалог',
      text: 'Ach Mann, guten Morgen, Frau Nachbarin. Was ist denn? Morgen, Herr Köhler, ich muss zur Arbeit und habe den Zug verpasst. Oh, wie ärgerlich! Warum nehmen Sie nicht Ihr Auto? Das ist in der Werkstatt. Gut, dann fahren Sie bei mir mit. Ich muss jetzt auch mit dem Auto in die Stadt. Das ist wirklich nett.',
      sentenceTranslations: {
        'Ach Mann, guten Morgen, Frau Nachbarin.': { literal: 'Ах мужчина, добрый утро, госпожа соседка', literary: 'Ох, доброе утро, госпожа соседка.' },
        'Was ist denn?': { literal: 'Что есть же?', literary: 'Что случилось?' },
        'Morgen, Herr Köhler, ich muss zur Arbeit und habe den Zug verpasst.': { literal: 'Утро, господин Кёлер, я должен на работу и имею поезд пропустил', literary: 'Утро, господин Кёлер, мне нужно на работу, а я опоздал на поезд.' },
        'Oh, wie ärgerlich!': { literal: 'О, как досадно!', literary: 'Ох, как досадно!' },
        'Warum nehmen Sie nicht Ihr Auto?': { literal: 'Почему берёте Вы не Вашу машину?', literary: 'Почему Вы не возьмёте свою машину?' },
        'Das ist in der Werkstatt.': { literal: 'Это есть в мастерской', literary: 'Она в мастерской.' },
        'Gut, dann fahren Sie bei mir mit.': { literal: 'Хорошо, тогда едьте Вы у меня с', literary: 'Хорошо, тогда поезжайте со мной.' },
        'Ich muss jetzt auch mit dem Auto in die Stadt.': { literal: 'Я должна сейчас тоже с машиной в город', literary: 'Мне тоже сейчас нужно на машине в город.' },
        'Das ist wirklich nett.': { literal: 'Это есть действительно мило', literary: 'Это действительно мило.' },
      },
      vocabulary: [
        { de: 'die Nachbarin', plural: 'die Nachbarinnen', ru: 'соседка', gender: 'feminin', collocation: 'Frau Nachbarin', example: 'Ach Mann, guten Morgen, Frau Nachbarin.' },
        { de: 'die Arbeit', plural: 'die Arbeiten', ru: 'работа', gender: 'feminin', collocation: 'zur Arbeit müssen', example: 'Morgen, Herr Köhler, ich muss zur Arbeit und habe den Zug verpasst.' },
        { de: 'die Werkstatt', plural: 'die Werkstätten', ru: 'мастерская', gender: 'feminin', collocation: 'in der Werkstatt sein', example: 'Das ist in der Werkstatt.' },
        { de: 'verpassen', ru: 'опоздать, пропустить', type: 'verb', forms: 'verpasst, verpasste, hat verpasst', example: 'Morgen, Herr Köhler, ich muss zur Arbeit und habe den Zug verpasst.' },
        { de: 'mitfahren', ru: 'ехать с кем-то', type: 'verb', forms: 'fährt mit, fuhr mit, ist mitgefahren', example: 'Gut, dann fahren Sie bei mir mit.' },
      ],
      practiceSentences: [
        { de: 'Ich muss zur Arbeit.', ru: 'Я должен на работу.', note: 'модальный V2' },
        { de: 'Er hat den Bus verpasst.', ru: 'Он опоздал на автобус.', note: 'Perfekt с haben' },
        { de: 'Das Auto ist in der Werkstatt.', ru: 'Машина в мастерской.', note: 'sein V2' },
        { de: 'Ich fahre mit.', ru: 'Я еду с (вами).', note: 'отделяемая приставка' },
        { de: 'Warum nimmst du das nicht?', ru: 'Почему ты это не берёшь?', note: 'V2 после W-Wort' },
      ],
      question: {
        de: 'Warum kann Herr Köhler nicht mit dem Auto fahren?',
        ru: 'Почему господин Кёлер не может ехать на машине?',
        options: [
          { de: 'Er hat kein Auto', ru: 'У него нет машины' },
          { de: 'Das Auto ist in der Werkstatt', ru: 'Машина в мастерской' },
          { de: 'Er hat keinen Führerschein', ru: 'У него нет водительских прав' },
        ],
        correct: 1,
        explanation: 'Кёлер отвечает: "Das ist in der Werkstatt" — его машина в мастерской.'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Sanitär',
      type: 'диалог/звонок',
      text: 'Sanitär Reparaturen, guten Tag. Guten Tag. Mein Name... Bei mir ist Wasser im Badezimmer. Ich brauche einen Handwerker. Ja, die ist ganz trocken. Es kann natürlich auch die Waschmaschine sein. Die steht bei mir im Keller. Unter der Toilette ist das meiste Wasser. Ah ja, dann liegt da wohl das Problem.',
      sentenceTranslations: {
        'Sanitär Reparaturen, guten Tag.': { literal: 'Санитарные ремонты, добрый день', literary: 'Сантехнический ремонт, добрый день.' },
        'Guten Tag.': { literal: 'Добрый день', literary: 'Добрый день.' },
        'Mein Name...': { literal: 'Моё имя...', literary: 'Меня зовут...' },
        'Bei mir ist Wasser im Badezimmer.': { literal: 'У меня есть вода в ванной', literary: 'У меня вода в ванной.' },
        'Ich brauche einen Handwerker.': { literal: 'Я нуждаюсь одного мастера', literary: 'Мне нужен мастер.' },
        'Ja, die ist ganz trocken.': { literal: 'Да, она есть совсем сухая', literary: 'Да, она совсем сухая.' },
        'Es kann natürlich auch die Waschmaschine sein.': { literal: 'Это может конечно также стиральная машина быть', literary: 'Конечно, это может быть и стиральная машина.' },
        'Die steht bei mir im Keller.': { literal: 'Она стоит у меня в подвале', literary: 'Она стоит у меня в подвале.' },
        'Unter der Toilette ist das meiste Wasser.': { literal: 'Под туалетом есть больше всего воды', literary: 'Под унитазом больше всего воды.' },
        'Ah ja, dann liegt da wohl das Problem.': { literal: 'А да, тогда лежит там наверное проблема', literary: 'А, тогда, видимо, проблема именно там.' },
      },
      vocabulary: [
        { de: 'die Reparatur', plural: 'die Reparaturen', ru: 'ремонт', gender: 'feminin', collocation: 'Sanitär Reparaturen', example: 'Sanitär Reparaturen, guten Tag.' },
        { de: 'das Badezimmer', plural: 'die Badezimmer', ru: 'ванная комната', gender: 'neutrum', collocation: 'im Badezimmer', example: 'Bei mir ist Wasser im Badezimmer.' },
        { de: 'der Handwerker', plural: 'die Handwerker', ru: 'мастер', gender: 'maskulin', collocation: 'einen Handwerker brauchen', example: 'Ich brauche einen Handwerker.' },
        { de: 'die Waschmaschine', plural: 'die Waschmaschinen', ru: 'стиральная машина', gender: 'feminin', collocation: 'die Waschmaschine', example: 'Es kann natürlich auch die Waschmaschine sein.' },
        { de: 'der Keller', plural: 'die Keller', ru: 'подвал', gender: 'maskulin', collocation: 'im Keller', example: 'Die steht bei mir im Keller.' },
        { de: 'die Toilette', plural: 'die Toiletten', ru: 'унитаз, туалет', gender: 'feminin', collocation: 'unter der Toilette', example: 'Unter der Toilette ist das meiste Wasser.' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'braucht, brauchte, hat gebraucht', example: 'Ich brauche einen Handwerker.' },
        { de: 'stehen', ru: 'стоять, находиться', type: 'verb', forms: 'steht, stand, hat gestanden', example: 'Die steht bei mir im Keller.' },
      ],
      practiceSentences: [
        { de: 'Bei mir ist alles gut.', ru: 'У меня всё хорошо.', note: 'sein V2 после обстоятельства' },
        { de: 'Ich brauche Hilfe.', ru: 'Мне нужна помощь.', note: 'V2' },
        { de: 'Das kann ein Problem sein.', ru: 'Это может быть проблемой.', note: 'модальный + инфинитив' },
        { de: 'Die Maschine steht im Keller.', ru: 'Машина стоит в подвале.', note: 'V2' },
        { de: 'Da liegt das Problem.', ru: 'Там лежит проблема.', note: 'V2 после обстоятельства' },
      ],
      question: {
        de: 'Wo ist das meiste Wasser?',
        ru: 'Где больше всего воды?',
        options: [
          { de: 'Im Badezimmer', ru: 'В ванной комнате' },
          { de: 'Im Keller bei der Waschmaschine', ru: 'В подвале у стиральной машины' },
          { de: 'Unter der Toilette', ru: 'Под унитазом' },
        ],
        correct: 2,
        explanation: 'В тексте: "Unter der Toilette ist das meiste Wasser" — больше всего воды под унитазом.'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Frau Larsen',
      type: 'диалог/звонок',
      text: 'Hallo Frau Hansen, hier Larsen. Ich kann heute leider nicht zur Arbeit kommen. Oh, sind Sie krank? Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen. Wir haben doch heute den wichtigen Gesprächstermin. Kann das nicht Ihre Frau machen? Meine Frau nimmt gleich das Taxi zum Flughafen. Sie muss beruflich für eine Woche nach London.',
      sentenceTranslations: {
        'Hallo Frau Hansen, hier Larsen.': { literal: 'Привет госпожа Хансен, здесь Ларсен', literary: 'Здравствуйте, госпожа Хансен, это Ларсен.' },
        'Ich kann heute leider nicht zur Arbeit kommen.': { literal: 'Я могу сегодня к-сожалению не на работу прийти', literary: 'Я, к сожалению, не могу сегодня прийти на работу.' },
        'Oh, sind Sie krank?': { literal: 'О, есть Вы больны?', literary: 'Ох, Вы заболели?' },
        'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.': { literal: 'Моя дочь имеет один грипп и я должен с ней к врачу идти', literary: 'У моей дочери грипп, и мне нужно отвести её к врачу.' },
        'Wir haben doch heute den wichtigen Gesprächstermin.': { literal: 'Мы имеем же сегодня важную встречу-для-разговора', literary: 'У нас же сегодня важная встреча.' },
        'Kann das nicht Ihre Frau machen?': { literal: 'Может это не Ваша жена сделать?', literary: 'Разве не может это сделать Ваша жена?' },
        'Meine Frau nimmt gleich das Taxi zum Flughafen.': { literal: 'Моя жена берёт сейчас такси к аэропорту', literary: 'Моя жена сейчас берёт такси в аэропорт.' },
        'Sie muss beruflich für eine Woche nach London.': { literal: 'Она должна по-работе на одну неделю в Лондон', literary: 'Она должна по работе на неделю в Лондон.' },
      },
      vocabulary: [
        { de: 'die Tochter', plural: 'die Töchter', ru: 'дочь', gender: 'feminin', collocation: 'meine Tochter', example: 'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.' },
        { de: 'die Grippe', plural: 'die Grippen', ru: 'грипп', gender: 'feminin', collocation: 'eine Grippe haben', example: 'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.' },
        { de: 'der Arzt', plural: 'die Ärzte', ru: 'врач', gender: 'maskulin', collocation: 'zum Arzt gehen', example: 'Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen.' },
        { de: 'der Gesprächstermin', plural: 'die Gesprächstermine', ru: 'встреча для переговоров', gender: 'maskulin', collocation: 'wichtiger Gesprächstermin', example: 'Wir haben doch heute den wichtigen Gesprächstermin.' },
        { de: 'das Taxi', plural: 'die Taxis', ru: 'такси', gender: 'neutrum', collocation: 'das Taxi nehmen', example: 'Meine Frau nimmt gleich das Taxi zum Flughafen.' },
        { de: 'der Flughafen', plural: 'die Flughäfen', ru: 'аэропорт', gender: 'maskulin', collocation: 'zum Flughafen', example: 'Meine Frau nimmt gleich das Taxi zum Flughafen.' },
      ],
      practiceSentences: [
        { de: 'Ich kann heute nicht kommen.', ru: 'Я не могу сегодня прийти.', note: 'модальный + отрицание + инфинитив' },
        { de: 'Sie hat Fieber.', ru: 'У неё температура.', note: 'haben V2' },
        { de: 'Wir müssen zum Arzt.', ru: 'Мы должны к врачу.', note: 'модальный V2' },
        { de: 'Er fliegt nach Berlin.', ru: 'Он летит в Берлин.', note: 'V2' },
        { de: 'Kann das warten?', ru: 'Это может подождать?', note: 'модальный V1 (вопрос)' },
      ],
      question: {
        de: 'Warum kann Frau Larsen nicht zur Arbeit kommen?',
        ru: 'Почему фрау Ларсен не может прийти на работу?',
        options: [
          { de: 'Sie ist selbst krank', ru: 'Она сама болеет' },
          { de: 'Ihre Tochter ist krank', ru: 'Её дочь болеет' },
          { de: 'Sie muss zum Flughafen', ru: 'Она должна в аэропорт' },
        ],
        correct: 1,
        explanation: 'Ларсен говорит: "Meine Tochter hat eine Grippe und ich muss mit ihr zum Arzt gehen" — её дочь болеет гриппом.'
      }
    },

    /* ═══ TEIL 4 — интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Familienhotel',
      type: 'интервью',
      text: 'Sie und Ihr Mann haben seit einem Jahr das erste Familienhotel in der Stadt. Wie kamen Sie auf diese Idee? Unsere vier Kinder sind alle erwachsen und leben nicht mehr bei uns zu Hause. Ja, leider. Unser Leben war dann plötzlich sehr ruhig. Sie wollten wieder Kontakt mit Kindern? Ja, auch. Und wir kennen die Arbeit im Hotel. Mein Mann hat viele Jahre in einem Hotel an der Rezeption gearbeitet und ich habe im Hotel-Restaurant gekocht. Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen. Wir wollten es versuchen. Und außerdem haben wir auf unseren Reisen gesehen, was in einem normalen Hotel nicht so gut ist, wenn man mit einer großen Familie unterwegs ist. Und hatten Sie schon viele Gäste? Hier im Haus gibt es drei Wohnungen mit Küche für Familien, die gerne alles selbst machen. Die waren von Anfang an fast immer vermietet. Außerdem haben wir drei große Zimmer. Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht. In den Sommerferien war das Hotel voll. Jetzt gerade haben wir nicht viele Reservierungen. Dann hoffen wir, dass viele Familien unser Gespräch gehört haben und Ihr Hotel kennenlernen möchten. Alles Gute für Sie! Vielen Dank.',
      sentenceTranslations: {
        'Sie und Ihr Mann haben seit einem Jahr das erste Familienhotel in der Stadt.': { literal: 'Вы и Ваш муж имеют с одного года первый семейный-отель в городе', literary: 'Вы с мужем уже год владеете первым семейным отелем в городе.' },
        'Wie kamen Sie auf diese Idee?': { literal: 'Как пришли Вы на эту идею?', literary: 'Как вам пришла эта идея?' },
        'Unsere vier Kinder sind alle erwachsen und leben nicht mehr bei uns zu Hause.': { literal: 'Наши четыре ребёнка есть все взрослые и живут не больше у нас дома', literary: 'Все наши четверо детей взрослые и больше не живут с нами.' },
        'Ja, leider.': { literal: 'Да, к сожалению', literary: 'Да, к сожалению.' },
        'Unser Leben war dann plötzlich sehr ruhig.': { literal: 'Наша жизнь была тогда внезапно очень тихой', literary: 'Наша жизнь стала вдруг очень тихой.' },
        'Sie wollten wieder Kontakt mit Kindern?': { literal: 'Вы хотели снова контакт с детьми?', literary: 'Вы хотели снова общаться с детьми?' },
        'Ja, auch.': { literal: 'Да, тоже', literary: 'Да, в том числе.' },
        'Und wir kennen die Arbeit im Hotel.': { literal: 'И мы знаем работу в отеле', literary: 'И мы знаем работу в отеле.' },
        'Mein Mann hat viele Jahre in einem Hotel an der Rezeption gearbeitet und ich habe im Hotel-Restaurant gekocht.': { literal: 'Мой муж имеет много лет в отеле на ресепшн работал и я имею в отель-ресторане готовила', literary: 'Мой муж много лет работал на ресепшн в отеле, а я готовила в ресторане при отеле.' },
        'Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen.': { literal: 'Мы думали, с нашим опытом можем мы также сами маленький отель вести', literary: 'Мы подумали, что с нашим опытом можем и сами управлять небольшим отелем.' },
        'Wir wollten es versuchen.': { literal: 'Мы хотели это попробовать', literary: 'Мы хотели попробовать.' },
        'Und außerdem haben wir auf unseren Reisen gesehen, was in einem normalen Hotel nicht so gut ist, wenn man mit einer großen Familie unterwegs ist.': { literal: 'И кроме-того имеем мы на наших путешествиях видели, что в нормальном отеле не так хорошо есть, когда человек с большой семьёй в-пути есть', literary: 'И кроме того, в путешествиях мы видели, что в обычном отеле не всё удобно для большой семьи.' },
        'Und hatten Sie schon viele Gäste?': { literal: 'И имели Вы уже много гостей?', literary: 'И было у вас уже много гостей?' },
        'Hier im Haus gibt es drei Wohnungen mit Küche für Familien, die gerne alles selbst machen.': { literal: 'Здесь в доме даёт это три квартиры с кухней для семей, которые охотно всё сами делают', literary: 'Здесь в доме три квартиры с кухней для семей, которые любят всё делать сами.' },
        'Die waren von Anfang an fast immer vermietet.': { literal: 'Они были с начала почти всегда сданы', literary: 'Они были заняты почти всегда с самого начала.' },
        'Außerdem haben wir drei große Zimmer.': { literal: 'Кроме-того имеем мы три больших комнаты', literary: 'Кроме того, у нас есть три больших номера.' },
        'Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht.': { literal: 'Их может человек с завтраком бронировать или также с обедом и ужином, так как человек это нуждается', literary: 'Их можно забронировать с завтраком или также с обедом и ужином, как нужно.' },
        'In den Sommerferien war das Hotel voll.': { literal: 'В летние-каникулы был отель полным', literary: 'Летом отель был полностью занят.' },
        'Jetzt gerade haben wir nicht viele Reservierungen.': { literal: 'Сейчас как-раз имеем мы не много бронирований', literary: 'Сейчас у нас не так много бронирований.' },
        'Dann hoffen wir, dass viele Familien unser Gespräch gehört haben und Ihr Hotel kennenlernen möchten.': { literal: 'Тогда надеемся мы, что много семей наш разговор услышали имеют и Ваш отель познакомиться хотят', literary: 'Тогда надеемся, что многие семьи услышали наш разговор и захотят познакомиться с вашим отелем.' },
        'Alles Gute für Sie!': { literal: 'Всё хорошее для Вас!', literary: 'Всего хорошего!' },
        'Vielen Dank.': { literal: 'Многих благодарностей', literary: 'Большое спасибо.' },
      },
      vocabulary: [
        { de: 'das Familienhotel', plural: 'die Familienhotels', ru: 'семейный отель', gender: 'neutrum', collocation: 'das erste Familienhotel', example: 'Sie und Ihr Mann haben seit einem Jahr das erste Familienhotel in der Stadt.' },
        { de: 'die Rezeption', plural: 'die Rezeptionen', ru: 'ресепшн', gender: 'feminin', collocation: 'an der Rezeption', example: 'Mein Mann hat viele Jahre in einem Hotel an der Rezeption gearbeitet und ich habe im Hotel-Restaurant gekocht.' },
        { de: 'die Erfahrung', plural: 'die Erfahrungen', ru: 'опыт', gender: 'feminin', collocation: 'mit unseren Erfahrungen', example: 'Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen.' },
        { de: 'die Reise', plural: 'die Reisen', ru: 'путешествие', gender: 'feminin', collocation: 'auf unseren Reisen', example: 'Und außerdem haben wir auf unseren Reisen gesehen, was in einem normalen Hotel nicht so gut ist, wenn man mit einer großen Familie unterwegs ist.' },
        { de: 'der Gast', plural: 'die Gäste', ru: 'гость', gender: 'maskulin', collocation: 'viele Gäste', example: 'Und hatten Sie schon viele Gäste?' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'drei Wohnungen', example: 'Hier im Haus gibt es drei Wohnungen mit Küche für Familien, die gerne alles selbst machen.' },
        { de: 'die Küche', plural: 'die Küchen', ru: 'кухня', gender: 'feminin', collocation: 'Wohnung mit Küche', example: 'Hier im Haus gibt es drei Wohnungen mit Küche für Familien, die gerne alles selbst machen.' },
        { de: 'das Frühstück', plural: 'die Frühstücke', ru: 'завтрак', gender: 'neutrum', collocation: 'mit Frühstück buchen', example: 'Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht.' },
        { de: 'die Reservierung', plural: 'die Reservierungen', ru: 'бронирование', gender: 'feminin', collocation: 'viele Reservierungen', example: 'Jetzt gerade haben wir nicht viele Reservierungen.' },
        { de: 'führen', ru: 'вести, управлять', type: 'verb', forms: 'führt, führte, hat geführt', example: 'Wir dachten, mit unseren Erfahrungen können wir auch selbst ein kleines Hotel führen.' },
        { de: 'vermieten', ru: 'сдавать в аренду', type: 'verb', forms: 'vermietet, vermietete, hat vermietet', example: 'Die waren von Anfang an fast immer vermietet.' },
        { de: 'buchen', ru: 'бронировать', type: 'verb', forms: 'bucht, buchte, hat gebucht', example: 'Die kann man mit Frühstück buchen oder auch mit Mittag- und Abendessen, so wie man es braucht.' },
        { de: 'kennenlernen', ru: 'знакомиться', type: 'verb', forms: 'lernt kennen, lernte kennen, hat kennengelernt', example: 'Dann hoffen wir, dass viele Familien unser Gespräch gehört haben und Ihr Hotel kennenlernen möchten.' },
      ],
      practiceSentences: [
        { de: 'Wir haben seit zwei Jahren ein Hotel.', ru: 'У нас уже два года отель.', note: 'haben V2' },
        { de: 'Die Kinder sind erwachsen.', ru: 'Дети взрослые.', note: 'sein V2' },
        { de: 'Er arbeitet an der Rezeption.', ru: 'Он работает на ресепшн.', note: 'V2' },
        { de: 'Wir können ein Hotel führen.', ru: 'Мы можем управлять отелем.', note: 'модальный + инфинитив' },
        { de: 'Die Zimmer waren immer vermietet.', ru: 'Комнаты были всегда сданы.', note: 'Präteritum von sein' },
      ],
      question: {
        de: 'Hatten die Frau und ihr Mann Erfahrung mit der Arbeit im Hotel?',
        ru: 'Был ли у женщины и её мужа опыт работы в отеле?',
        options: [
          { de: 'Nein, sie hatten keine Erfahrung', ru: 'Нет, у них не было опыта' },
          { de: 'Ja, beide hatten Erfahrung', ru: 'Да, у обоих был опыт' },
          { de: 'Nur der Mann hatte Erfahrung', ru: 'Только у мужа был опыт' },
        ],
        correct: 1,
        explanation: 'В тексте: "Mein Mann hat viele Jahre in einem Hotel an der Rezeption gearbeitet und ich habe im Hotel-Restaurant gekocht" — оба имели опыт.'
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
    text: 'Из-за {0} концерт перенесли в {1} у вокзала. Фрауке получила сообщение: Яна празднует {2} в офисе, а Пауль ищет в городе {3}. Клеменс не может в субботу — он {4} за детьми. Прогноз погоды обещает {5} на западе. На вокзале объявили: поезд не может {6}, всем нужно {7}. Соня рассказала о поездке в Кёльн — она ходила в {8} и на {9} вдоль реки. Господин Майер хочет купить только {10}. Сабина хочет поехать к озеру и сделать {11}. У Кёлера машина в {12}, поэтому соседка предложила {13}.',
    blanks: [
      { answer: 'des Regens', hint: 'дождь (der Regen, Gen.)' },
      { answer: 'die Halle', hint: 'зал (die Halle)' },
      { answer: 'den Geburtstag', hint: 'день рождения (der Geburtstag, Akk.)' },
      { answer: 'ein Buch', hint: 'книга (das Buch)' },
      { answer: 'aufpasst', hint: 'присматривает (aufpassen)' },
      { answer: 'Gewitter', hint: 'грозы (das Gewitter)' },
      { answer: 'weiterfahren', hint: 'ехать дальше (weiterfahren)' },
      { answer: 'aussteigen', hint: 'выходить (aussteigen)' },
      { answer: 'das Theater', hint: 'театр (das Theater)' },
      { answer: 'die Radtour', hint: 'велопрогулка (die Radtour)' },
      { answer: 'den Wohnzimmertisch', hint: 'журнальный столик (der Wohnzimmertisch, Akk.)' },
      { answer: 'eine Wanderung', hint: 'поход (die Wanderung)' },
      { answer: 'der Werkstatt', hint: 'мастерская (die Werkstatt, Dat.)' },
      { answer: 'mitfahren', hint: 'поехать с (mitfahren)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Musikfest).',
    },
  },
};
LESSONS.push(LESSON_22);
