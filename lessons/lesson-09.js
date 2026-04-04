/* ═══════════════════════════════════════════════════════════
   Lesson 09 — Goethe Zertifikat A2 Hören Modelltest
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_09 = {
  id: 'lesson-09',
  number: 9,
  title: 'Goethe A2 Hören — Modelltest 9',
  subtitle: 'Radioviktoina, Marathon, Weihnachten, Restaurant, Interview mit Cem',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-09',
  videoUrl: 'https://www.youtube.com/watch?v=SkfKD1zHaS0',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Radioviktoina',
      type: 'радиопередача',
      text: 'Hallo ihr da draußen an den Radios! Es ist Freitagabend und wie immer könnt ihr etwas gewinnen, wenn ihr gut zuhört. Und so geht\'s: Wir spielen jetzt eine sehr bekannte Filmmusik. Den Film und die Schauspieler kennen wir alle, aber wer singt die Filmmusik? Wenn ihr es wisst, dann gewinnt ihr vielleicht die zwei Eintrittskarten fürs Kino. Also ruft an unter 0800 15 21 53!',
      sentenceTranslations: {
        'Hallo ihr da draußen an den Radios!': { literal: 'Привет вы там снаружи у радиоприёмников!', literary: 'Привет вам там, у радиоприёмников!' },
        'Es ist Freitagabend und wie immer könnt ihr etwas gewinnen, wenn ihr gut zuhört.': { literal: 'Оно есть вечер-пятницы и как всегда можете вы что-то выиграть, если вы хорошо слушаете', literary: 'Сегодня вечер пятницы, и как всегда вы можете что-то выиграть, если хорошо слушаете.' },
        'Und so geht\'s: Wir spielen jetzt eine sehr bekannte Filmmusik.': { literal: 'И так идёт-это: мы играем сейчас одну очень известную фильм-музыку', literary: 'И вот как это работает: мы сейчас сыграем очень известную музыку из фильма.' },
        'Den Film und die Schauspieler kennen wir alle, aber wer singt die Filmmusik?': { literal: 'Фильм и актёров знаем мы все, но кто поёт фильм-музыку?', literary: 'Фильм и актёров мы все знаем, но кто поёт музыку к фильму?' },
        'Wenn ihr es wisst, dann gewinnt ihr vielleicht die zwei Eintrittskarten fürs Kino.': { literal: 'Если вы это знаете, тогда выигрываете вы возможно два входных-билета для-кино', literary: 'Если вы это знаете, то можете выиграть два билета в кино.' },
        'Also ruft an unter 0800 15 21 53!': { literal: 'Итак звоните по 0800 15 21 53!', literary: 'Так что звоните по номеру 0800 15 21 53!' },
      },
      vocabulary: [
        { de: 'die Filmmusik', plural: 'die Filmmusiken', ru: 'музыка к фильму', gender: 'feminin', collocation: 'eine bekannte Filmmusik', example: 'Wir spielen jetzt eine sehr bekannte Filmmusik.' },
        { de: 'der Schauspieler', plural: 'die Schauspieler', ru: 'актёр', gender: 'maskulin', collocation: 'die Schauspieler kennen', example: 'Den Film und die Schauspieler kennen wir alle.' },
        { de: 'die Eintrittskarte', plural: 'die Eintrittskarten', ru: 'входной билет', gender: 'feminin', collocation: 'zwei Eintrittskarten gewinnen', example: 'Dann gewinnt ihr vielleicht die zwei Eintrittskarten fürs Kino.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinne, gewann, hat gewonnen', example: 'Wie immer könnt ihr etwas gewinnen.' },
        { de: 'zuhören', ru: 'слушать (внимательно)', type: 'verb', forms: 'höre zu, hörte zu, hat zugehört', example: 'Wenn ihr gut zuhört.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'rufe an, rief an, hat angerufen', example: 'Also ruft an unter 0800 15 21 53!' },
        { de: 'bekannt', ru: 'известный', type: 'adj', example: 'Wir spielen jetzt eine sehr bekannte Filmmusik.' },
      ],
      practiceSentences: [
        { de: 'Könnt ihr das Lied singen?', ru: 'Вы можете спеть эту песню?', note: 'модальный können' },
        { de: 'Ruf mich bitte an!', ru: 'Позвони мне, пожалуйста!', note: 'отделяемая приставка' },
        { de: 'Wenn du kommst, bringe Musik mit.', ru: 'Если ты придёшь, принеси музыку.', note: 'wenn-Nebensatz' },
      ],
      question: {
        de: 'Was kann man bei der Radiosendung gewinnen?',
        ru: 'Что можно выиграть в радиопередаче?',
        options: [
          { de: 'Geld', ru: 'Деньги' },
          { de: 'Zwei Eintrittskarten fürs Kino', ru: 'Два билета в кино' },
          { de: 'Eine CD mit Filmmusik', ru: 'CD с музыкой из фильмов' },
        ],
        correct: 1,
        explanation: 'В тексте прямо говорится: "dann gewinnt ihr vielleicht die zwei Eintrittskarten fürs Kino".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Stadtverkehr',
      type: 'транспортное объявление',
      text: 'Und nun zum Stadtverkehr. Heute findet der Dresden-Marathon statt, und in vielen Straßen dürfen keine Autos und Busse fahren. Deshalb ist es auch schwierig, zum Bahnhof zu kommen. Der Bus 27, der vom Stadtbad kommt, fährt heute nicht zum Bahnhof. Sie können aber von der Messe mit der U-Bahn direkt dorthin kommen. Mit der S-Bahn können Sie nur bis zum Stadion fahren und müssen dann zu Fuß weitergehen.',
      sentenceTranslations: {
        'Und nun zum Stadtverkehr.': { literal: 'И теперь к городскому-транспорту', literary: 'А теперь о городском транспорте.' },
        'Heute findet der Dresden-Marathon statt, und in vielen Straßen dürfen keine Autos und Busse fahren.': { literal: 'Сегодня находит Дрезден-Марафон место, и на многих улицах разрешены никакие машины и автобусы ездить', literary: 'Сегодня проходит Дрезденский марафон, и по многим улицам не могут ездить автомобили и автобусы.' },
        'Deshalb ist es auch schwierig, zum Bahnhof zu kommen.': { literal: 'Поэтому есть это также трудно, к вокзалу прийти', literary: 'Поэтому также трудно добраться до вокзала.' },
        'Der Bus 27, der vom Stadtbad kommt, fährt heute nicht zum Bahnhof.': { literal: 'Автобус 27, который от городского-бассейна идёт, едет сегодня не к вокзалу', literary: 'Автобус 27, который идёт от городского бассейна, сегодня не идёт до вокзала.' },
        'Sie können aber von der Messe mit der U-Bahn direkt dorthin kommen.': { literal: 'Вы можете но от выставки с метро прямо туда прийти', literary: 'Но вы можете от выставочного центра на метро напрямую туда добраться.' },
        'Mit der S-Bahn können Sie nur bis zum Stadion fahren und müssen dann zu Fuß weitergehen.': { literal: 'С городской-электричкой можете вы только до стадиона ехать и должны тогда пешком дальше-идти', literary: 'На городской электричке вы можете доехать только до стадиона и должны затем идти пешком дальше.' },
      },
      vocabulary: [
        { de: 'der Stadtverkehr', ru: 'городской транспорт', gender: 'maskulin', example: 'Und nun zum Stadtverkehr.' },
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'zum Bahnhof kommen', example: 'Deshalb ist es auch schwierig, zum Bahnhof zu kommen.' },
        { de: 'die Messe', plural: 'die Messen', ru: 'выставка, ярмарка', gender: 'feminin', collocation: 'von der Messe fahren', example: 'Sie können aber von der Messe mit der U-Bahn direkt dorthin kommen.' },
        { de: 'das Stadion', plural: 'die Stadien', ru: 'стадион', gender: 'neutrum', collocation: 'bis zum Stadion fahren', example: 'Mit der S-Bahn können Sie nur bis zum Stadion fahren.' },
        { de: 'stattfinden', ru: 'проходить, состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Heute findet der Dresden-Marathon statt.' },
        { de: 'weitergehen', ru: 'идти дальше', type: 'verb', forms: 'gehe weiter, ging weiter, ist weitergegangen', example: 'Müssen dann zu Fuß weitergehen.' },
        { de: 'schwierig', ru: 'трудный, сложный', type: 'adj', example: 'Deshalb ist es auch schwierig, zum Bahnhof zu kommen.' },
      ],
      practiceSentences: [
        { de: 'Der Markt findet heute statt.', ru: 'Рынок проходит сегодня.', note: 'отделяемая приставка stattfinden' },
        { de: 'Mit der U-Bahn kommen Sie schnell dorthin.', ru: 'На метро вы быстро туда доберётесь.', note: 'mit + Dativ' },
      ],
      question: {
        de: 'Wie kommt man am besten zum Bahnhof?',
        ru: 'Как лучше всего добраться до вокзала?',
        options: [
          { de: 'Mit dem Bus 27', ru: 'На автобусе 27' },
          { de: 'Mit der U-Bahn von der Messe', ru: 'На метро от выставочного центра' },
          { de: 'Mit der S-Bahn bis zum Stadion', ru: 'На электричке до стадиона' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "Sie können aber von der Messe mit der U-Bahn direkt dorthin kommen" — единственный прямой путь.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Stefanie',
      type: 'голосовое сообщение',
      text: 'Hallo Tina! Hier ist Stefanie. Wir wollten doch morgen ins Kino gehen, aber das Wetter ist so schön und Tobias hat Geburtstag. Deshalb habe ich gedacht, dass wir doch lieber grillen. Wir treffen uns bei mir im Garten. Hast du ab 18 Uhr Zeit? Bring einfach Getränke mit und bitte sag mir Bescheid, ob du kommst. Ich freue mich auf dich! Bis dann.',
      sentenceTranslations: {
        'Hallo Tina!': { literal: 'Привет Тина!', literary: 'Привет, Тина!' },
        'Hier ist Stefanie.': { literal: 'Здесь есть Стефани', literary: 'Это Стефани.' },
        'Wir wollten doch morgen ins Kino gehen, aber das Wetter ist so schön und Tobias hat Geburtstag.': { literal: 'Мы хотели же завтра в кино идти, но погода есть так красиво и Тобиас имеет день-рождения', literary: 'Мы же хотели завтра пойти в кино, но погода такая хорошая и у Тобиаса день рождения.' },
        'Deshalb habe ich gedacht, dass wir doch lieber grillen.': { literal: 'Поэтому имею я думанное, что мы же лучше жарим-на-гриле', literary: 'Поэтому я подумала, что мы лучше устроим гриль.' },
        'Wir treffen uns bei mir im Garten.': { literal: 'Мы встречаем нас у меня в саду', literary: 'Мы встречаемся у меня в саду.' },
        'Hast du ab 18 Uhr Zeit?': { literal: 'Имеешь ты с 18 часов время?', literary: 'У тебя есть время с 18 часов?' },
        'Bring einfach Getränke mit und bitte sag mir Bescheid, ob du kommst.': { literal: 'Принеси просто напитки с и пожалуйста скажи мне известие, ли ты приходишь', literary: 'Просто принеси напитки и, пожалуйста, дай мне знать, придёшь ли ты.' },
        'Ich freue mich auf dich!': { literal: 'Я радую себя на тебя!', literary: 'Я рада тебя видеть!' },
        'Bis dann.': { literal: 'До тогда', literary: 'До встречи.' },
      },
      vocabulary: [
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'Geburtstag haben', example: 'Tobias hat Geburtstag.' },
        { de: 'der Garten', plural: 'die Gärten', ru: 'сад', gender: 'maskulin', collocation: 'bei mir im Garten', example: 'Wir treffen uns bei mir im Garten.' },
        { de: 'das Getränk', plural: 'die Getränke', ru: 'напиток', gender: 'neutrum', collocation: 'Getränke mitbringen', example: 'Bring einfach Getränke mit.' },
        { de: 'grillen', ru: 'жарить на гриле', type: 'verb', forms: 'grille, grillte, hat gegrillt', example: 'Dass wir doch lieber grillen.' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringe mit, brachte mit, hat mitgebracht', example: 'Bring einfach Getränke mit.' },
        { de: 'sich freuen auf', ru: 'радоваться (чему-то предстоящему)', type: 'verb', forms: 'freue mich, freute mich, hat sich gefreut', example: 'Ich freue mich auf dich!' },
        { de: 'Bescheid sagen', ru: 'дать знать, сообщить', type: 'verb', forms: 'sage Bescheid, sagte Bescheid, hat Bescheid gesagt', example: 'Bitte sag mir Bescheid, ob du kommst.' },
      ],
      practiceSentences: [
        { de: 'Wir wollten ins Museum gehen.', ru: 'Мы хотели пойти в музей.', note: 'Präteritum wollen' },
        { de: 'Ich freue mich auf die Party.', ru: 'Я жду вечеринку с нетерпением.', note: 'sich freuen auf + Akk' },
      ],
      question: {
        de: 'Warum ändert Stefanie den Plan?',
        ru: 'Почему Стефани меняет план?',
        options: [
          { de: 'Das Kino ist geschlossen', ru: 'Кино закрыто' },
          { de: 'Das Wetter ist schön und Tobias hat Geburtstag', ru: 'Погода хорошая и у Тобиаса день рождения' },
          { de: 'Tina hat keine Zeit', ru: 'У Тины нет времени' },
        ],
        correct: 1,
        explanation: 'Стефани объясняет: "das Wetter ist so schön und Tobias hat Geburtstag. Deshalb habe ich gedacht, dass wir doch lieber grillen."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Musikfestival',
      type: 'информационное объявление',
      text: 'Eine Information für die Besucher vom Musikfestival: Das Konzert der Band "Singsang" findet am Sonntag nicht wie geplant um 18 Uhr in der Messehalle statt. Es beginnt um 19 Uhr im Fußballstadion. Busse fahren ab 17 Uhr vom Bahnhof. Tickets gibt es an der Abendkasse oder online auf der Programm-Webseite.',
      sentenceTranslations: {
        'Eine Information für die Besucher vom Musikfestival: Das Konzert der Band "Singsang" findet am Sonntag nicht wie geplant um 18 Uhr in der Messehalle statt.': { literal: 'Информация для посетителей от музыкального-фестиваля: концерт группы "Зингзанг" находит в воскресенье не как запланировано в 18 часов в выставочном-зале место', literary: 'Информация для посетителей музыкального фестиваля: концерт группы "Зингзанг" в воскресенье состоится не как планировалось в 18 часов в выставочном зале.' },
        'Es beginnt um 19 Uhr im Fußballstadion.': { literal: 'Оно начинается в 19 часов в футбольном-стадионе', literary: 'Он начинается в 19 часов на футбольном стадионе.' },
        'Busse fahren ab 17 Uhr vom Bahnhof.': { literal: 'Автобусы едут с 17 часов от вокзала', literary: 'Автобусы отправляются с 17 часов от вокзала.' },
        'Tickets gibt es an der Abendkasse oder online auf der Programm-Webseite.': { literal: 'Билеты даёт оно у вечерней-кассы или онлайн на программ-веб-сайте', literary: 'Билеты есть в вечерней кассе или онлайн на веб-сайте программы.' },
      },
      vocabulary: [
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'die Besucher vom Festival', example: 'Eine Information für die Besucher vom Musikfestival.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'das Konzert findet statt', example: 'Das Konzert der Band "Singsang" findet am Sonntag statt.' },
        { de: 'die Abendkasse', plural: 'die Abendkassen', ru: 'вечерняя касса', gender: 'feminin', collocation: 'an der Abendkasse kaufen', example: 'Tickets gibt es an der Abendkasse.' },
        { de: 'beginnen', ru: 'начинать(ся)', type: 'verb', forms: 'beginne, begann, hat begonnen', example: 'Es beginnt um 19 Uhr im Fußballstadion.' },
        { de: 'geplant', ru: 'запланированный', type: 'adj', example: 'Nicht wie geplant um 18 Uhr in der Messehalle.' },
      ],
      practiceSentences: [
        { de: 'Das Konzert beginnt um 20 Uhr.', ru: 'Концерт начинается в 20 часов.', note: 'V2' },
        { de: 'Tickets gibt es online.', ru: 'Билеты есть онлайн.', note: 'es gibt + Akk' },
      ],
      question: {
        de: 'Wo findet das Konzert statt?',
        ru: 'Где проходит концерт?',
        options: [
          { de: 'In der Messehalle', ru: 'В выставочном зале' },
          { de: 'Im Fußballstadion', ru: 'На футбольном стадионе' },
          { de: 'Am Bahnhof', ru: 'На вокзале' },
        ],
        correct: 1,
        explanation: 'Концерт перенесён: "nicht wie geplant in der Messehalle", а "Es beginnt um 19 Uhr im Fußballstadion".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Wetterbericht',
      type: 'прогноз погоды',
      text: 'Und nun zum Wetter. Das Wochenende beginnt im Westen von Deutschland wenig sonnig. Heute, am Samstag, ist es bewölkt und kühl bei nur 23 Grad, aber meist trocken. Im Osten scheint die Sonne bei 32 Grad. Abends gibt es Gewitter. Am Sonntag bringt der Wind die Wolken dann nach Ostdeutschland. Es wird viel kühler und es regnet fast den ganzen Tag. Nächste Woche soll es dann...',
      sentenceTranslations: {
        'Und nun zum Wetter.': { literal: 'И теперь к погоде', literary: 'А теперь о погоде.' },
        'Das Wochenende beginnt im Westen von Deutschland wenig sonnig.': { literal: 'Выходные начинаются на западе от Германии мало солнечно', literary: 'Выходные начинаются на западе Германии с малым количеством солнца.' },
        'Heute, am Samstag, ist es bewölkt und kühl bei nur 23 Grad, aber meist trocken.': { literal: 'Сегодня, в субботу, есть оно облачно и прохладно при только 23 градусах, но в-основном сухо', literary: 'Сегодня, в субботу, облачно и прохладно при всего лишь 23 градусах, но в основном сухо.' },
        'Im Osten scheint die Sonne bei 32 Grad.': { literal: 'На востоке светит солнце при 32 градусах', literary: 'На востоке светит солнце при 32 градусах.' },
        'Abends gibt es Gewitter.': { literal: 'Вечером даёт оно грозу', literary: 'Вечером будут грозы.' },
        'Am Sonntag bringt der Wind die Wolken dann nach Ostdeutschland.': { literal: 'В воскресенье приносит ветер облака тогда в Восточную-Германию', literary: 'В воскресенье ветер принесёт облака в Восточную Германию.' },
        'Es wird viel kühler und es regnet fast den ganzen Tag.': { literal: 'Оно становится намного прохладнее и оно дождит почти весь день', literary: 'Станет намного прохладнее и будет дождь почти весь день.' },
        'Nächste Woche soll es dann...': { literal: 'Следующая неделя должно оно тогда...', literary: 'На следующей неделе должно...' },
      },
      vocabulary: [
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'am Wochenende', example: 'Das Wochenende beginnt im Westen von Deutschland wenig sonnig.' },
        { de: 'das Gewitter', plural: 'die Gewitter', ru: 'гроза', gender: 'neutrum', collocation: 'es gibt Gewitter', example: 'Abends gibt es Gewitter.' },
        { de: 'die Wolke', plural: 'die Wolken', ru: 'облако', gender: 'feminin', collocation: 'die Wolken bringen', example: 'Am Sonntag bringt der Wind die Wolken dann nach Ostdeutschland.' },
        { de: 'scheinen', ru: 'светить', type: 'verb', forms: 'scheint, schien, hat geschienen', example: 'Im Osten scheint die Sonne bei 32 Grad.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Es regnet fast den ganzen Tag.' },
        { de: 'bewölkt', ru: 'облачный', type: 'adj', example: 'Heute ist es bewölkt und kühl.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Heute ist es bewölkt und kühl bei nur 23 Grad.' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Aber meist trocken.' },
      ],
      practiceSentences: [
        { de: 'Es wird morgen wärmer.', ru: 'Завтра станет теплее.', note: 'werden + Komparativ' },
        { de: 'Die Sonne scheint den ganzen Tag.', ru: 'Солнце светит весь день.', note: 'Akk der Zeit' },
      ],
      question: {
        de: 'Wie ist das Wetter am Samstag im Osten?',
        ru: 'Какая погода в субботу на востоке?',
        options: [
          { de: 'Bewölkt und kühl bei 23 Grad', ru: 'Облачно и прохладно при 23 градусах' },
          { de: 'Sonnig bei 32 Grad', ru: 'Солнечно при 32 градусах' },
          { de: 'Regen den ganzen Tag', ru: 'Дождь весь день' },
        ],
        correct: 1,
        explanation: 'О востоке говорится: "Im Osten scheint die Sonne bei 32 Grad."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Weihnachtswoche',
      type: 'диалог',
      text: 'Nächste Woche ist schon wieder Weihnachten. Das ist wieder stressig wie jedes Jahr und wir müssen noch so viel tun. Geschenke kaufen, das Weihnachtsessen kochen, den Baum schmücken und ich brauche noch etwas Hübsches zum Anziehen. Du hast recht, wir müssen dringend die Geschenke für die Familie besorgen. Dann wollen wir das machen. Na, vielleicht am Montag? OK, dann treffen wir uns Montagabend nach der Arbeit im Einkaufszentrum. Und am Donnerstag ist das Weihnachtskonzert, richtig? Nein, am Donnerstag besuchen uns deine Eltern. Das Konzert ist am Dienstag. Ach herrje, meine Eltern habe ich total vergessen! Wir wollten am Donnerstag den Weihnachtsbaum schmücken. Na gut, dann müssen wir das am Mittwoch machen. Und sag mal, gehen wir eigentlich am Freitag auf den Weihnachtsmarkt? Es ist doch der Weihnachtsabend! Ich kann dieses Jahr nicht auf den Weihnachtsmarkt gehen, ich habe keine Zeit. Ich muss am Freitag doch das Essen kochen. Na gut, dann helfe ich dir dabei und wir bleiben zu Hause. Und Samstag möchte ich gern mal wieder etwas unternehmen. Wir können doch spazieren gehen. Nach dem vielen Weihnachtsessen ist das bestimmt gut. Was meinst du? Hmm, spazieren gehen... Ich weiß nicht. Die Woche wird so hektisch, dass ich am Samstag am liebsten den ganzen Tag entspannen möchte. Okay, du hast recht. Dann bleiben wir Samstag gemütlich zu Hause und lesen. Oh ja!',
      sentenceTranslations: {
        'Nächste Woche ist schon wieder Weihnachten.': { literal: 'Следующая неделя есть уже снова Рождество', literary: 'На следующей неделе уже снова Рождество.' },
        'Das ist wieder stressig wie jedes Jahr und wir müssen noch so viel tun.': { literal: 'Это есть снова стрессово как каждый год и мы должны ещё так много делать', literary: 'Это снова стресс, как каждый год, и нам нужно ещё так много сделать.' },
        'Geschenke kaufen, das Weihnachtsessen kochen, den Baum schmücken und ich brauche noch etwas Hübsches zum Anziehen.': { literal: 'Подарки покупать, рождественский-ужин готовить, ёлку украшать и я нуждаюсь ещё что-то красивое для надевания', literary: 'Купить подарки, приготовить рождественский ужин, украсить ёлку, и мне нужно ещё что-то красивое надеть.' },
        'Du hast recht, wir müssen dringend die Geschenke für die Familie besorgen.': { literal: 'Ты имеешь право, мы должны срочно подарки для семьи раздобыть', literary: 'Ты права, мы должны срочно достать подарки для семьи.' },
        'Dann wollen wir das machen.': { literal: 'Тогда хотим мы это делать', literary: 'Тогда давай так и сделаем.' },
        'Na, vielleicht am Montag?': { literal: 'Ну, может-быть в понедельник?', literary: 'Ну, может быть в понедельник?' },
        'OK, dann treffen wir uns Montagabend nach der Arbeit im Einkaufszentrum.': { literal: 'Хорошо, тогда встречаем мы нас понедельник-вечером после работы в торговом-центре', literary: 'Хорошо, тогда встретимся в понедельник вечером после работы в торговом центре.' },
        'Und am Donnerstag ist das Weihnachtskonzert, richtig?': { literal: 'И в четверг есть рождественский-концерт, правильно?', literary: 'А в четверг рождественский концерт, правильно?' },
        'Nein, am Donnerstag besuchen uns deine Eltern.': { literal: 'Нет, в четверг навещают нас твои родители', literary: 'Нет, в четверг к нам приезжают твои родители.' },
        'Das Konzert ist am Dienstag.': { literal: 'Концерт есть во вторник', literary: 'Концерт во вторник.' },
        'Ach herrje, meine Eltern habe ich total vergessen!': { literal: 'Ах боже, моих родителей имею я полностью забыто!', literary: 'Ах боже, я совсем забыла про родителей!' },
        'Wir wollten am Donnerstag den Weihnachtsbaum schmücken.': { literal: 'Мы хотели в четверг рождественскую-ёлку украшать', literary: 'Мы хотели в четверг украсить рождественскую ёлку.' },
        'Na gut, dann müssen wir das am Mittwoch machen.': { literal: 'Ну хорошо, тогда должны мы это в среду делать', literary: 'Ну ладно, тогда мы должны сделать это в среду.' },
        'Und sag mal, gehen wir eigentlich am Freitag auf den Weihnachtsmarkt?': { literal: 'И скажи-ка, идём мы собственно в пятницу на рождественский-рынок?', literary: 'И скажи, мы вообще идём в пятницу на рождественский рынок?' },
        'Es ist doch der Weihnachtsabend!': { literal: 'Оно есть же сочельник!', literary: 'Это же сочельник!' },
        'Ich kann dieses Jahr nicht auf den Weihnachtsmarkt gehen, ich habe keine Zeit.': { literal: 'Я могу этот год не на рождественский-рынок идти, я имею никакое время', literary: 'Я не могу в этом году пойти на рождественский рынок, у меня нет времени.' },
        'Ich muss am Freitag doch das Essen kochen.': { literal: 'Я должна в пятницу же еду готовить', literary: 'Я должна в пятницу готовить ужин.' },
        'Na gut, dann helfe ich dir dabei und wir bleiben zu Hause.': { literal: 'Ну хорошо, тогда помогаю я тебе при-этом и мы остаёмся дома', literary: 'Ну хорошо, тогда я помогу тебе, и мы останемся дома.' },
        'Und Samstag möchte ich gern mal wieder etwas unternehmen.': { literal: 'И суббота хотел-бы я охотно разок снова что-то предпринять', literary: 'А в субботу я бы хотел снова что-нибудь предпринять.' },
        'Wir können doch spazieren gehen.': { literal: 'Мы можем же гулять идти', literary: 'Мы могли бы пойти погулять.' },
        'Nach dem vielen Weihnachtsessen ist das bestimmt gut.': { literal: 'После многих рождественских-ужинов есть это определённо хорошо', literary: 'После всей рождественской еды это точно будет полезно.' },
        'Was meinst du?': { literal: 'Что думаешь ты?', literary: 'Что думаешь?' },
        'Hmm, spazieren gehen...': { literal: 'Хмм, гулять идти...', literary: 'Хмм, пойти погулять...' },
        'Ich weiß nicht.': { literal: 'Я знаю не', literary: 'Не знаю.' },
        'Die Woche wird so hektisch, dass ich am Samstag am liebsten den ganzen Tag entspannen möchte.': { literal: 'Неделя станет так суматошная, что я в субботу охотнее-всего весь день расслабляться хотела-бы', literary: 'Неделя будет такой суматошной, что в субботу я бы предпочла весь день отдыхать.' },
        'Okay, du hast recht.': { literal: 'Ладно, ты имеешь право', literary: 'Ладно, ты права.' },
        'Dann bleiben wir Samstag gemütlich zu Hause und lesen.': { literal: 'Тогда остаёмся мы субботу уютно дома и читаем', literary: 'Тогда останемся в субботу уютно дома и будем читать.' },
        'Oh ja!': { literal: 'О да!', literary: 'О да!' },
      },
      vocabulary: [
        { de: 'das Weihnachten', ru: 'Рождество', gender: 'neutrum', example: 'Nächste Woche ist schon wieder Weihnachten.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'Geschenke kaufen', example: 'Geschenke kaufen, das Weihnachtsessen kochen.' },
        { de: 'das Einkaufszentrum', plural: 'die Einkaufszentren', ru: 'торговый центр', gender: 'neutrum', collocation: 'im Einkaufszentrum treffen', example: 'Dann treffen wir uns Montagabend nach der Arbeit im Einkaufszentrum.' },
        { de: 'der Weihnachtsbaum', plural: 'die Weihnachtsbäume', ru: 'рождественская ёлка', gender: 'maskulin', collocation: 'den Weihnachtsbaum schmücken', example: 'Wir wollten am Donnerstag den Weihnachtsbaum schmücken.' },
        { de: 'der Weihnachtsmarkt', plural: 'die Weihnachtsmärkte', ru: 'рождественский рынок', gender: 'maskulin', collocation: 'auf den Weihnachtsmarkt gehen', example: 'Gehen wir eigentlich am Freitag auf den Weihnachtsmarkt?' },
        { de: 'der Weihnachtsabend', plural: 'die Weihnachtsabende', ru: 'сочельник', gender: 'maskulin', example: 'Es ist doch der Weihnachtsabend!' },
        { de: 'schmücken', ru: 'украшать', type: 'verb', forms: 'schmücke, schmückte, hat geschmückt', example: 'Wir wollten am Donnerstag den Weihnachtsbaum schmücken.' },
        { de: 'besorgen', ru: 'доставать, покупать', type: 'verb', forms: 'besorge, besorgte, hat besorgt', example: 'Wir müssen dringend die Geschenke für die Familie besorgen.' },
        { de: 'entspannen', ru: 'расслабляться, отдыхать', type: 'verb', forms: 'entspanne, entspannte, hat entspannt', example: 'Am Samstag am liebsten den ganzen Tag entspannen möchte.' },
        { de: 'unternehmen', ru: 'предпринимать', type: 'verb', forms: 'unternehme, unternahm, hat unternommen', example: 'Samstag möchte ich gern mal wieder etwas unternehmen.' },
        { de: 'stressig', ru: 'стрессовый', type: 'adj', example: 'Das ist wieder stressig wie jedes Jahr.' },
        { de: 'dringend', ru: 'срочно', type: 'adv', example: 'Wir müssen dringend die Geschenke besorgen.' },
        { de: 'hektisch', ru: 'суматошный', type: 'adj', example: 'Die Woche wird so hektisch.' },
        { de: 'gemütlich', ru: 'уютный', type: 'adj', example: 'Dann bleiben wir Samstag gemütlich zu Hause und lesen.' },
      ],
      practiceSentences: [
        { de: 'Wir müssen noch viel tun.', ru: 'Нам нужно ещё много сделать.', note: 'müssen + Inf' },
        { de: 'Ich habe die Hausaufgaben total vergessen!', ru: 'Я совсем забыл домашнее задание!', note: 'Perfekt' },
        { de: 'Wollen wir morgen ins Kino gehen?', ru: 'Хотим завтра пойти в кино?', note: 'Vorschlag' },
      ],
      question: {
        de: 'Was machen sie am Samstag?',
        ru: 'Что они делают в субботу?',
        options: [
          { de: 'Sie gehen spazieren', ru: 'Они идут гулять' },
          { de: 'Sie bleiben zu Hause und lesen', ru: 'Они остаются дома и читают' },
          { de: 'Sie gehen auf den Weihnachtsmarkt', ru: 'Они идут на рождественский рынок' },
        ],
        correct: 1,
        explanation: 'Финальное решение: "Dann bleiben wir Samstag gemütlich zu Hause und lesen. Oh ja!"'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 7,
      name: 'Im Restaurant',
      type: 'диалог в ресторане',
      text: 'Haben Sie schon gewählt? Ja, ich nehme das Lammkotelett. Oder nein, doch lieber das Schnitzel mit Pommes. Möchten Sie noch eine Beilage dazu? Ja, gern. Welche Beilage können Sie mir empfehlen? Am besten passen Champignons oder grüne Bohnen. Ich nehme die Champignons. Grüne Bohnen esse ich sehr gern, aber ich finde, die passen besser zum Lammkotelett. Gern.',
      sentenceTranslations: {
        'Haben Sie schon gewählt?': { literal: 'Имеете вы уже выбрано?', literary: 'Вы уже выбрали?' },
        'Ja, ich nehme das Lammkotelett.': { literal: 'Да, я беру баранью-котлету', literary: 'Да, я возьму бараньи котлеты.' },
        'Oder nein, doch lieber das Schnitzel mit Pommes.': { literal: 'Или нет, всё-же лучше шницель с картошкой-фри', literary: 'Или нет, лучше шницель с картошкой фри.' },
        'Möchten Sie noch eine Beilage dazu?': { literal: 'Хотели-бы вы ещё один гарнир к-этому?', literary: 'Хотите ещё гарнир к этому?' },
        'Ja, gern.': { literal: 'Да, охотно', literary: 'Да, с удовольствием.' },
        'Welche Beilage können Sie mir empfehlen?': { literal: 'Какой гарнир можете вы мне порекомендовать?', literary: 'Какой гарнир вы можете мне порекомендовать?' },
        'Am besten passen Champignons oder grüne Bohnen.': { literal: 'Лучше-всего подходят шампиньоны или зелёные бобы', literary: 'Лучше всего подходят шампиньоны или зелёная фасоль.' },
        'Ich nehme die Champignons.': { literal: 'Я беру шампиньоны', literary: 'Я возьму шампиньоны.' },
        'Grüne Bohnen esse ich sehr gern, aber ich finde, die passen besser zum Lammkotelett.': { literal: 'Зелёные бобы ем я очень охотно, но я нахожу, они подходят лучше к бараньей-котлете', literary: 'Зелёную фасоль я очень люблю, но я думаю, она лучше подходит к бараньим котлетам.' },
        'Gern.': { literal: 'Охотно', literary: 'Хорошо.' },
      },
      vocabulary: [
        { de: 'das Schnitzel', plural: 'die Schnitzel', ru: 'шницель', gender: 'neutrum', collocation: 'Schnitzel mit Pommes', example: 'Doch lieber das Schnitzel mit Pommes.' },
        { de: 'die Beilage', plural: 'die Beilagen', ru: 'гарнир', gender: 'feminin', collocation: 'eine Beilage empfehlen', example: 'Möchten Sie noch eine Beilage dazu?' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfehle, empfahl, hat empfohlen', example: 'Welche Beilage können Sie mir empfehlen?' },
        { de: 'wählen', ru: 'выбирать', type: 'verb', forms: 'wähle, wählte, hat gewählt', example: 'Haben Sie schon gewählt?' },
        { de: 'passen zu', ru: 'подходить к', type: 'verb', forms: 'passe, passte, hat gepasst', example: 'Die passen besser zum Lammkotelett.' },
      ],
      practiceSentences: [
        { de: 'Ich nehme den Salat.', ru: 'Я возьму салат.', note: 'заказ в ресторане' },
        { de: 'Was können Sie empfehlen?', ru: 'Что вы можете порекомендовать?', note: 'вежливый вопрос' },
      ],
      question: {
        de: 'Was bestellt der Kunde als Hauptgericht?',
        ru: 'Что заказывает клиент в качестве основного блюда?',
        options: [
          { de: 'Lammkotelett', ru: 'Бараньи котлеты' },
          { de: 'Schnitzel mit Pommes', ru: 'Шницель с картошкой фри' },
          { de: 'Champignons mit Bohnen', ru: 'Шампиньоны с фасолью' },
        ],
        correct: 1,
        explanation: 'Клиент сначала хотел Lammkotelett, но передумал: "doch lieber das Schnitzel mit Pommes".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 8,
      name: 'Konferenz',
      type: 'деловой звонок',
      text: 'Molina. Guten Tag, Frau Molina. Hier spricht Frank Römer. Guten Tag, Herr Römer. Die Konferenz findet ja morgen ab 11 Uhr im Restaurant vom Hotel International statt. Wollen wir uns vielleicht schon eine Stunde vorher treffen? Ja, sehr gern. Wo wollen wir uns treffen? Ich schlafe im Hotel. Warten Sie einfach an der Rezeption auf mich. Sie ist direkt neben den Aufzügen. Ich hole Sie an der Rezeption ab. Passt das? Ja gut, dann bis morgen.',
      sentenceTranslations: {
        'Molina.': { literal: 'Молина', literary: 'Молина.' },
        'Guten Tag, Frau Molina.': { literal: 'Добрый день, госпожа Молина', literary: 'Добрый день, госпожа Молина.' },
        'Hier spricht Frank Römer.': { literal: 'Здесь говорит Франк Рёмер', literary: 'Говорит Франк Рёмер.' },
        'Guten Tag, Herr Römer.': { literal: 'Добрый день, господин Рёмер', literary: 'Добрый день, господин Рёмер.' },
        'Die Konferenz findet ja morgen ab 11 Uhr im Restaurant vom Hotel International statt.': { literal: 'Конференция находит же завтра с 11 часов в ресторане от отеля Интернациональ место', literary: 'Конференция же проходит завтра с 11 часов в ресторане отеля Интернациональ.' },
        'Wollen wir uns vielleicht schon eine Stunde vorher treffen?': { literal: 'Хотим мы нас может-быть уже один час заранее встретить?', literary: 'Может, встретимся уже за час до этого?' },
        'Ja, sehr gern.': { literal: 'Да, очень охотно', literary: 'Да, с большим удовольствием.' },
        'Wo wollen wir uns treffen?': { literal: 'Где хотим мы нас встретить?', literary: 'Где мы встретимся?' },
        'Ich schlafe im Hotel.': { literal: 'Я сплю в отеле', literary: 'Я ночую в отеле.' },
        'Warten Sie einfach an der Rezeption auf mich.': { literal: 'Ждите вы просто у стойки-регистрации на меня', literary: 'Просто подождите меня на ресепшн.' },
        'Sie ist direkt neben den Aufzügen.': { literal: 'Она есть прямо рядом-с лифтами', literary: 'Она прямо рядом с лифтами.' },
        'Ich hole Sie an der Rezeption ab.': { literal: 'Я забираю вас у стойки-регистрации', literary: 'Я заберу вас на ресепшн.' },
        'Passt das?': { literal: 'Подходит это?', literary: 'Подходит?' },
        'Ja gut, dann bis morgen.': { literal: 'Да хорошо, тогда до завтра', literary: 'Да, хорошо, тогда до завтра.' },
      },
      vocabulary: [
        { de: 'die Konferenz', plural: 'die Konferenzen', ru: 'конференция', gender: 'feminin', collocation: 'die Konferenz findet statt', example: 'Die Konferenz findet ja morgen ab 11 Uhr statt.' },
        { de: 'die Rezeption', plural: 'die Rezeptionen', ru: 'ресепшн, стойка регистрации', gender: 'feminin', collocation: 'an der Rezeption warten', example: 'Warten Sie einfach an der Rezeption auf mich.' },
        { de: 'der Aufzug', plural: 'die Aufzüge', ru: 'лифт', gender: 'maskulin', collocation: 'neben den Aufzügen', example: 'Sie ist direkt neben den Aufzügen.' },
        { de: 'abholen', ru: 'забирать, встречать', type: 'verb', forms: 'hole ab, holte ab, hat abgeholt', example: 'Ich hole Sie an der Rezeption ab.' },
        { de: 'vorher', ru: 'заранее, до этого', type: 'adv', example: 'Eine Stunde vorher treffen.' },
      ],
      practiceSentences: [
        { de: 'Ich hole dich am Bahnhof ab.', ru: 'Я заберу тебя с вокзала.', note: 'отделяемая приставка abholen' },
        { de: 'Wollen wir uns um 10 Uhr treffen?', ru: 'Хотим встретиться в 10 часов?', note: 'sich treffen' },
      ],
      question: {
        de: 'Wo treffen sich Frau Molina und Herr Römer?',
        ru: 'Где встречаются госпожа Молина и господин Рёмер?',
        options: [
          { de: 'Im Restaurant vom Hotel', ru: 'В ресторане отеля' },
          { de: 'An der Rezeption des Hotels', ru: 'На ресепшн отеля' },
          { de: 'Bei den Aufzügen', ru: 'У лифтов' },
        ],
        correct: 1,
        explanation: 'Молина говорит: "Warten Sie einfach an der Rezeption auf mich. Ich hole Sie an der Rezeption ab."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 9,
      name: 'Reklamation',
      type: 'звонок в службу поддержки',
      text: 'Online-Shopping-Service. Was kann ich für Sie tun? Schneider hier. Ich möchte etwas reklamieren. Ich habe ein rotes Regal und einen schwarzen Tisch bestellt. Ist die Farbe falsch oder fehlt ein Teil? Nein, die Farbe ist richtig und alle Teile sind da. Aber der Tisch ist kaputt. Das tut mir leid! Wir schicken Ihnen sofort einen neuen. Geben Sie mir bitte Ihre Bestellnummer.',
      sentenceTranslations: {
        'Online-Shopping-Service.': { literal: 'Онлайн-шоппинг-сервис', literary: 'Служба онлайн-покупок.' },
        'Was kann ich für Sie tun?': { literal: 'Что могу я для вас делать?', literary: 'Что я могу для вас сделать?' },
        'Schneider hier.': { literal: 'Шнайдер здесь', literary: 'Шнайдер на связи.' },
        'Ich möchte etwas reklamieren.': { literal: 'Я хотел-бы что-то рекламировать', literary: 'Я хочу предъявить рекламацию.' },
        'Ich habe ein rotes Regal und einen schwarzen Tisch bestellt.': { literal: 'Я имею одну красную полку и один чёрный стол заказано', literary: 'Я заказал красную полку и чёрный стол.' },
        'Ist die Farbe falsch oder fehlt ein Teil?': { literal: 'Есть цвет неправильный или отсутствует одна часть?', literary: 'Цвет неправильный или не хватает детали?' },
        'Nein, die Farbe ist richtig und alle Teile sind da.': { literal: 'Нет, цвет есть правильный и все части есть тут', literary: 'Нет, цвет правильный и все детали на месте.' },
        'Aber der Tisch ist kaputt.': { literal: 'Но стол есть сломанный', literary: 'Но стол сломан.' },
        'Das tut mir leid!': { literal: 'Это делает мне жаль!', literary: 'Мне очень жаль!' },
        'Wir schicken Ihnen sofort einen neuen.': { literal: 'Мы отправляем вам сразу один новый', literary: 'Мы немедленно отправим вам новый.' },
        'Geben Sie mir bitte Ihre Bestellnummer.': { literal: 'Дайте вы мне пожалуйста ваш заказ-номер', literary: 'Дайте мне, пожалуйста, ваш номер заказа.' },
      },
      vocabulary: [
        { de: 'das Regal', plural: 'die Regale', ru: 'полка, стеллаж', gender: 'neutrum', collocation: 'ein rotes Regal bestellen', example: 'Ich habe ein rotes Regal und einen schwarzen Tisch bestellt.' },
        { de: 'die Farbe', plural: 'die Farben', ru: 'цвет', gender: 'feminin', collocation: 'die Farbe ist richtig', example: 'Nein, die Farbe ist richtig und alle Teile sind da.' },
        { de: 'die Bestellnummer', plural: 'die Bestellnummern', ru: 'номер заказа', gender: 'feminin', collocation: 'die Bestellnummer geben', example: 'Geben Sie mir bitte Ihre Bestellnummer.' },
        { de: 'reklamieren', ru: 'предъявлять рекламацию', type: 'verb', forms: 'reklamiere, reklamierte, hat reklamiert', example: 'Ich möchte etwas reklamieren.' },
        { de: 'bestellen', ru: 'заказывать', type: 'verb', forms: 'bestelle, bestellte, hat bestellt', example: 'Ich habe ein rotes Regal und einen schwarzen Tisch bestellt.' },
        { de: 'fehlen', ru: 'отсутствовать, не хватать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Ist die Farbe falsch oder fehlt ein Teil?' },
        { de: 'schicken', ru: 'отправлять', type: 'verb', forms: 'schicke, schickte, hat geschickt', example: 'Wir schicken Ihnen sofort einen neuen.' },
        { de: 'kaputt', ru: 'сломанный', type: 'adj', example: 'Aber der Tisch ist kaputt.' },
      ],
      practiceSentences: [
        { de: 'Ich habe ein Buch bestellt.', ru: 'Я заказал книгу.', note: 'Perfekt' },
        { de: 'Das tut mir leid!', ru: 'Мне очень жаль!', note: 'формула извинения' },
      ],
      question: {
        de: 'Was ist das Problem mit der Bestellung?',
        ru: 'Какая проблема с заказом?',
        options: [
          { de: 'Die Farbe ist falsch', ru: 'Цвет неправильный' },
          { de: 'Es fehlen Teile', ru: 'Не хватает деталей' },
          { de: 'Der Tisch ist kaputt', ru: 'Стол сломан' },
        ],
        correct: 2,
        explanation: 'Клиент объясняет: "die Farbe ist richtig und alle Teile sind da. Aber der Tisch ist kaputt."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 10,
      name: 'Elektronikladen',
      type: 'диалог в магазине',
      text: 'Entschuldigung, ich habe dieses Smartphone. Es ist toll, aber gibt es das Display auch größer? Leider gibt es dieses weiße Smartphone nur mit dem kleinen Display. Aber wir haben ein anderes Smartphone in Grau, das Display ist größer. Oder Sie nehmen ein Tablet, zum Beispiel dieses hier in Schwarz. Nun ja, ein Tablet ist natürlich größer, aber ich finde es zum Telefonieren unpraktisch. Das graue Smartphone gefällt mir nicht so gut. Ich finde das Weiße besser. Das nehme ich.',
      sentenceTranslations: {
        'Entschuldigung, ich habe dieses Smartphone.': { literal: 'Извинение, я имею этот смартфон', literary: 'Извините, у меня этот смартфон.' },
        'Es ist toll, aber gibt es das Display auch größer?': { literal: 'Оно есть отлично, но даёт оно дисплей также больше?', literary: 'Он отличный, но есть ли дисплей побольше?' },
        'Leider gibt es dieses weiße Smartphone nur mit dem kleinen Display.': { literal: 'К-сожалению даёт оно этот белый смартфон только с маленьким дисплеем', literary: 'К сожалению, этот белый смартфон есть только с маленьким дисплеем.' },
        'Aber wir haben ein anderes Smartphone in Grau, das Display ist größer.': { literal: 'Но мы имеем один другой смартфон в сером, дисплей есть больше', literary: 'Но у нас есть другой смартфон в сером цвете, дисплей больше.' },
        'Oder Sie nehmen ein Tablet, zum Beispiel dieses hier in Schwarz.': { literal: 'Или вы берёте один планшет, к примеру этот здесь в чёрном', literary: 'Или возьмите планшет, например, вот этот чёрный.' },
        'Nun ja, ein Tablet ist natürlich größer, aber ich finde es zum Telefonieren unpraktisch.': { literal: 'Ну да, один планшет есть конечно больше, но я нахожу его для звонения непрактичный', literary: 'Ну да, планшет, конечно, больше, но я считаю его непрактичным для звонков.' },
        'Das graue Smartphone gefällt mir nicht so gut.': { literal: 'Серый смартфон нравится мне не так хорошо', literary: 'Серый смартфон мне не так нравится.' },
        'Ich finde das Weiße besser.': { literal: 'Я нахожу белый лучше', literary: 'Я считаю белый лучше.' },
        'Das nehme ich.': { literal: 'Это беру я', literary: 'Его и возьму.' },
      },
      vocabulary: [
        { de: 'das Display', plural: 'die Displays', ru: 'дисплей, экран', gender: 'neutrum', collocation: 'ein größeres Display', example: 'Gibt es das Display auch größer?' },
        { de: 'das Tablet', plural: 'die Tablets', ru: 'планшет', gender: 'neutrum', collocation: 'ein Tablet nehmen', example: 'Oder Sie nehmen ein Tablet.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Das graue Smartphone gefällt mir nicht so gut.' },
        { de: 'unpraktisch', ru: 'непрактичный', type: 'adj', example: 'Ich finde es zum Telefonieren unpraktisch.' },
        { de: 'größer', ru: 'больше (сравн. степень)', type: 'adj', example: 'Gibt es das Display auch größer?' },
      ],
      practiceSentences: [
        { de: 'Das Kleid gefällt mir sehr.', ru: 'Платье мне очень нравится.', note: 'gefallen + Dativ' },
        { de: 'Ich finde den Film toll.', ru: 'Я нахожу фильм отличным.', note: 'finden + Akk + Adj' },
      ],
      question: {
        de: 'Was kauft der Kunde am Ende?',
        ru: 'Что покупает клиент в итоге?',
        options: [
          { de: 'Das graue Smartphone mit größerem Display', ru: 'Серый смартфон с большим дисплеем' },
          { de: 'Das schwarze Tablet', ru: 'Чёрный планшет' },
          { de: 'Das weiße Smartphone mit kleinem Display', ru: 'Белый смартфон с маленьким дисплеем' },
        ],
        correct: 2,
        explanation: 'Клиент решает: "Ich finde das Weiße besser. Das nehme ich."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 11,
      name: 'Terminverschiebung',
      type: 'телефонный разговор',
      text: 'Hallo Frau Meier, hier ist Stefan Bender. Ich bin krank und muss leider unseren Termin morgen verschieben. Das tut mir leid. Wie passt Ihnen der nächste Montag? Um 11 Uhr habe ich noch einen Termin frei. Nein, der Montag passt mir leider nicht. Ich kann aber am Dienstag um 11 Uhr oder am Donnerstag um 10 Uhr kommen. Dienstag passt mir auch sehr gut. Prima, vielen Dank!',
      sentenceTranslations: {
        'Hallo Frau Meier, hier ist Stefan Bender.': { literal: 'Привет госпожа Майер, здесь есть Штефан Бендер', literary: 'Здравствуйте, госпожа Майер, это Штефан Бендер.' },
        'Ich bin krank und muss leider unseren Termin morgen verschieben.': { literal: 'Я есть больной и должен к-сожалению нашу встречу завтра переносить', literary: 'Я болен и должен, к сожалению, перенести нашу встречу завтра.' },
        'Das tut mir leid.': { literal: 'Это делает мне жаль', literary: 'Мне очень жаль.' },
        'Wie passt Ihnen der nächste Montag?': { literal: 'Как подходит вам следующий понедельник?', literary: 'Как вам подходит следующий понедельник?' },
        'Um 11 Uhr habe ich noch einen Termin frei.': { literal: 'В 11 часов имею я ещё одну встречу свободную', literary: 'В 11 часов у меня ещё есть свободное время.' },
        'Nein, der Montag passt mir leider nicht.': { literal: 'Нет, понедельник подходит мне к-сожалению не', literary: 'Нет, понедельник мне, к сожалению, не подходит.' },
        'Ich kann aber am Dienstag um 11 Uhr oder am Donnerstag um 10 Uhr kommen.': { literal: 'Я могу но во вторник в 11 часов или в четверг в 10 часов прийти', literary: 'Но я могу прийти во вторник в 11 часов или в четверг в 10 часов.' },
        'Dienstag passt mir auch sehr gut.': { literal: 'Вторник подходит мне тоже очень хорошо', literary: 'Вторник мне тоже очень подходит.' },
        'Prima, vielen Dank!': { literal: 'Отлично, многих благодарностей!', literary: 'Отлично, большое спасибо!' },
      },
      vocabulary: [
        { de: 'der Termin', plural: 'die Termine', ru: 'встреча, приём', gender: 'maskulin', collocation: 'einen Termin verschieben', example: 'Ich muss leider unseren Termin morgen verschieben.' },
        { de: 'verschieben', ru: 'переносить', type: 'verb', forms: 'verschiebe, verschob, hat verschoben', example: 'Ich muss leider unseren Termin morgen verschieben.' },
        { de: 'passen', ru: 'подходить', type: 'verb', forms: 'passt, passte, hat gepasst', example: 'Wie passt Ihnen der nächste Montag?' },
        { de: 'krank', ru: 'больной', type: 'adj', example: 'Ich bin krank.' },
      ],
      practiceSentences: [
        { de: 'Der Termin passt mir gut.', ru: 'Встреча мне подходит.', note: 'passen + Dativ' },
        { de: 'Ich muss den Termin verschieben.', ru: 'Я должен перенести встречу.', note: 'müssen + Inf' },
      ],
      question: {
        de: 'Wann ist der neue Termin?',
        ru: 'Когда новая встреча?',
        options: [
          { de: 'Am Montag um 11 Uhr', ru: 'В понедельник в 11 часов' },
          { de: 'Am Dienstag um 11 Uhr', ru: 'Во вторник в 11 часов' },
          { de: 'Am Donnerstag um 10 Uhr', ru: 'В четверг в 10 часов' },
        ],
        correct: 1,
        explanation: 'Госпожа Майер подтверждает: "Dienstag passt mir auch sehr gut."'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 12,
      name: 'Cem Özal',
      type: 'интервью',
      text: 'Herzlich willkommen, meine Damen und Herren! Danke schön, danke! Heute zu Gast bei uns: Cem Özal aus Bonn. Cem, seit wann leben Sie in Bonn? Seit über 15 Jahren. Wir sind aus der Türkei nach Deutschland gekommen, als ich acht Jahre alt war. Wie war der Anfang in Deutschland für Sie? Das war erst nicht so einfach. Zuerst konnte ich kein Deutsch. Zu Hause haben wir nur Türkisch gesprochen. Aber in der Grundschule habe ich schnell Deutsch gelernt und in unserem Haus waren viele Kinder. Das war eine schöne Zeit. Wie war es dann nach der Grundschule? Die Zeit im Gymnasium mochte ich sehr. Ich hatte viele Freunde und ich habe Gitarre in einer Band gespielt. Meine Eltern wollten lieber, dass ich Geige im Schulorchester spiele. Sie sind also musikalisch. Machen Sie heute noch Musik? Na klar! Ich übe jeden Tag mit meiner Band, wenn ich neben der Arbeit Zeit finde. Ich habe eine Ausbildung zum Elektriker gemacht, aber das macht mir keinen Spaß. Deshalb möchte ich nächstes Jahr ein Studium an der Musikhochschule beginnen. Ich würde gerne hier in Bonn später als Musiklehrer arbeiten. Das klingt gut! Vielen Dank für das Gespräch und alles Gute! Danke!',
      sentenceTranslations: {
        'Herzlich willkommen, meine Damen und Herren!': { literal: 'Сердечно добро-пожаловать, мои дамы и господа!', literary: 'Добро пожаловать, дамы и господа!' },
        'Danke schön, danke!': { literal: 'Спасибо красиво, спасибо!', literary: 'Спасибо, спасибо!' },
        'Heute zu Gast bei uns: Cem Özal aus Bonn.': { literal: 'Сегодня в гостях у нас: Джем Озал из Бонна', literary: 'Сегодня у нас в гостях: Джем Озал из Бонна.' },
        'Cem, seit wann leben Sie in Bonn?': { literal: 'Джем, с когда живёте вы в Бонне?', literary: 'Джем, с каких пор вы живёте в Бонне?' },
        'Seit über 15 Jahren.': { literal: 'С более 15 лет', literary: 'Более 15 лет.' },
        'Wir sind aus der Türkei nach Deutschland gekommen, als ich acht Jahre alt war.': { literal: 'Мы есть из Турции в Германию пришли, когда я восемь лет старым был', literary: 'Мы приехали из Турции в Германию, когда мне было восемь лет.' },
        'Wie war der Anfang in Deutschland für Sie?': { literal: 'Как было начало в Германии для вас?', literary: 'Каким было начало в Германии для вас?' },
        'Das war erst nicht so einfach.': { literal: 'Это было сначала не так просто', literary: 'Сначала это было не так просто.' },
        'Zuerst konnte ich kein Deutsch.': { literal: 'Сперва мог я никакой немецкий', literary: 'Поначалу я не знал немецкого.' },
        'Zu Hause haben wir nur Türkisch gesprochen.': { literal: 'Дома имеем мы только турецкий говорено', literary: 'Дома мы говорили только по-турецки.' },
        'Aber in der Grundschule habe ich schnell Deutsch gelernt und in unserem Haus waren viele Kinder.': { literal: 'Но в начальной-школе имею я быстро немецкий учено и в нашем доме были многие дети', literary: 'Но в начальной школе я быстро выучил немецкий, и в нашем доме было много детей.' },
        'Das war eine schöne Zeit.': { literal: 'Это было одно красивое время', literary: 'Это было прекрасное время.' },
        'Wie war es dann nach der Grundschule?': { literal: 'Как было оно тогда после начальной-школы?', literary: 'Как было после начальной школы?' },
        'Die Zeit im Gymnasium mochte ich sehr.': { literal: 'Время в гимназии любил я очень', literary: 'Время в гимназии мне очень нравилось.' },
        'Ich hatte viele Freunde und ich habe Gitarre in einer Band gespielt.': { literal: 'Я имел многих друзей и я имею гитару в одной группе играно', literary: 'У меня было много друзей, и я играл на гитаре в группе.' },
        'Meine Eltern wollten lieber, dass ich Geige im Schulorchester spiele.': { literal: 'Мои родители хотели лучше, что я скрипку в школьном-оркестре играю', literary: 'Мои родители предпочли бы, чтобы я играл на скрипке в школьном оркестре.' },
        'Sie sind also musikalisch.': { literal: 'Вы есть значит музыкальный', literary: 'Значит, вы музыкальны.' },
        'Machen Sie heute noch Musik?': { literal: 'Делаете вы сегодня ещё музыку?', literary: 'Вы и сегодня занимаетесь музыкой?' },
        'Na klar!': { literal: 'Ну ясно!', literary: 'Конечно!' },
        'Ich übe jeden Tag mit meiner Band, wenn ich neben der Arbeit Zeit finde.': { literal: 'Я упражняюсь каждый день с моей группой, когда я рядом-с работой время нахожу', literary: 'Я репетирую каждый день со своей группой, когда нахожу время помимо работы.' },
        'Ich habe eine Ausbildung zum Elektriker gemacht, aber das macht mir keinen Spaß.': { literal: 'Я имею одно образование к электрику сделано, но это делает мне никакое удовольствие', literary: 'Я получил образование электрика, но это не приносит мне удовольствия.' },
        'Deshalb möchte ich nächstes Jahr ein Studium an der Musikhochschule beginnen.': { literal: 'Поэтому хотел-бы я следующий год одну учёбу у музыкальной-академии начать', literary: 'Поэтому я хочу в следующем году начать учёбу в музыкальной академии.' },
        'Ich würde gerne hier in Bonn später als Musiklehrer arbeiten.': { literal: 'Я стал-бы охотно здесь в Бонне позже как учитель-музыки работать', literary: 'Я бы хотел позже работать здесь в Бонне учителем музыки.' },
        'Das klingt gut!': { literal: 'Это звучит хорошо!', literary: 'Звучит хорошо!' },
        'Vielen Dank für das Gespräch und alles Gute!': { literal: 'Многих благодарностей за беседу и всего хорошего!', literary: 'Большое спасибо за беседу и всего хорошего!' },
        'Danke!': { literal: 'Спасибо!', literary: 'Спасибо!' },
      },
      vocabulary: [
        { de: 'die Grundschule', plural: 'die Grundschulen', ru: 'начальная школа', gender: 'feminin', collocation: 'in der Grundschule lernen', example: 'Aber in der Grundschule habe ich schnell Deutsch gelernt.' },
        { de: 'das Gymnasium', plural: 'die Gymnasien', ru: 'гимназия', gender: 'neutrum', collocation: 'im Gymnasium sein', example: 'Die Zeit im Gymnasium mochte ich sehr.' },
        { de: 'die Ausbildung', plural: 'die Ausbildungen', ru: 'профессиональное образование', gender: 'feminin', collocation: 'eine Ausbildung machen', example: 'Ich habe eine Ausbildung zum Elektriker gemacht.' },
        { de: 'die Musikhochschule', plural: 'die Musikhochschulen', ru: 'музыкальная академия', gender: 'feminin', collocation: 'an der Musikhochschule studieren', example: 'Möchte ich nächstes Jahr ein Studium an der Musikhochschule beginnen.' },
        { de: 'die Geige', plural: 'die Geigen', ru: 'скрипка', gender: 'feminin', collocation: 'Geige spielen', example: 'Dass ich Geige im Schulorchester spiele.' },
        { de: 'die Gitarre', plural: 'die Gitarren', ru: 'гитара', gender: 'feminin', collocation: 'Gitarre spielen', example: 'Ich habe Gitarre in einer Band gespielt.' },
        { de: 'üben', ru: 'упражняться, репетировать', type: 'verb', forms: 'übe, übte, hat geübt', example: 'Ich übe jeden Tag mit meiner Band.' },
        { de: 'klingen', ru: 'звучать', type: 'verb', forms: 'klingt, klang, hat geklungen', example: 'Das klingt gut!' },
        { de: 'musikalisch', ru: 'музыкальный', type: 'adj', example: 'Sie sind also musikalisch.' },
      ],
      practiceSentences: [
        { de: 'Seit wann wohnst du hier?', ru: 'С каких пор ты здесь живёшь?', note: 'seit + Zeitangabe' },
        { de: 'Als ich klein war, habe ich Klavier gespielt.', ru: 'Когда я был маленьким, я играл на пианино.', note: 'als-Nebensatz' },
        { de: 'Ich möchte Lehrer werden.', ru: 'Я хочу стать учителем.', note: 'möchte + Inf' },
      ],
      question: {
        de: 'Was möchte Cem Özal in der Zukunft machen?',
        ru: 'Что хочет Джем Озал делать в будущем?',
        options: [
          { de: 'Als Elektriker weiterarbeiten', ru: 'Продолжить работать электриком' },
          { de: 'An der Musikhochschule studieren und Musiklehrer werden', ru: 'Учиться в музыкальной академии и стать учителем музыки' },
          { de: 'In die Türkei zurückkehren', ru: 'Вернуться в Турцию' },
        ],
        correct: 1,
        explanation: 'Джем говорит: "möchte ich nächstes Jahr ein Studium an der Musikhochschule beginnen. Ich würde gerne als Musiklehrer arbeiten."'
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
    title: 'ОДНА НЕДЕЛЯ В ГЕРМАНИИ',
    text: 'В пятницу вечером на радио можно {0} два билета в кино. Из-за Дрезденского марафона трудно добраться до {1}. Стефани предлагает вместо кино устроить {2} в саду, потому что у Тобиаса {3}. На {4} концерт группы перенесён на стадион. На западе Германии {5} и прохладно. Пара планирует рождественскую неделю: в понедельник покупка {6}, а ёлку нужно {7} в среду. В ресторане клиент берёт {8} с картошкой фри. Госпожа Молина ждёт коллегу на {9} отеля. Сломанный стол нужно {10}. Джем Озал из Турции хочет стать {11} и учиться в {12}.',
    blanks: [
      { answer: 'gewinnen', hint: 'выиграть (gewinnen)' },
      { answer: 'dem Bahnhof', hint: 'вокзал (der Bahnhof, Dat.)' },
      { answer: 'Grillen', hint: 'гриль (grillen)' },
      { answer: 'Geburtstag', hint: 'день рождения (der Geburtstag)' },
      { answer: 'das Fußballstadion', hint: 'футбольный стадион (das Fußballstadion)' },
      { answer: 'bewölkt', hint: 'облачно (bewölkt)' },
      { answer: 'der Geschenke', hint: 'подарки (das Geschenk, Gen. Pl.)' },
      { answer: 'schmücken', hint: 'украшать (schmücken)' },
      { answer: 'das Schnitzel', hint: 'шницель (das Schnitzel)' },
      { answer: 'der Rezeption', hint: 'ресепшн (die Rezeption, Dat.)' },
      { answer: 'reklamieren', hint: 'рекламировать (reklamieren)' },
      { answer: 'Musiklehrer', hint: 'учитель музыки (der Musiklehrer)' },
      { answer: 'der Musikhochschule', hint: 'музыкальная академия (die Musikhochschule, Dat.)' },
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для таба "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Radioviktoina).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'wenn-Nebensatz: глагол в конце — wenn ihr gut zuhört',
    'Отделяемые приставки: stattfinden, weitergehen, anrufen, abholen, mitbringen',
    'Модальные глаголы: können, müssen, dürfen, möchte, wollen',
    'als vs wenn: als ich acht Jahre alt war (единичное в прошлом)',
    'dass-Nebensatz: dass wir doch lieber grillen',
    'Perfekt: habe bestellt, habe gelernt, hat gespielt',
    'Präteritum: wollten, mochte, konnte, war, hatte',
    'werden + Komparativ: Es wird viel kühler',
    'gefallen + Dativ: Das Smartphone gefällt mir nicht',
    'passen + Dativ: Wie passt Ihnen der nächste Montag?',
  ],
};

LESSONS.push(LESSON_09);
