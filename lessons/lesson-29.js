/* ═══════════════════════════════════════════════════════════
   Lesson 29 — Goethe Zertifikat A2 Hören #25
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_29 = {
  id: 'lesson-29',
  number: 29,
  title: 'Goethe A2 Hören — #25',
  subtitle: 'Werbung, Radiosendungen, Dialoge über Einkaufen, Sport, Essen und Berufe, Interview mit Luana',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-25',
  videoUrl: 'https://www.youtube.com/watch?v=vwOQhovoxiw',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Möbelmangold',
      type: 'реклама',
      text: 'Werbung auf 192,3 jubiläumsverkauf bei möbelmangold wir feiern Geburtstag und Senken für Sie unsere Preise alle Möbel Geschirr und Matratzen um bis zu 50% günstiger feiern Sie mit und machen Sie mit bei unserem Gewinnspiel wir verlosen Warengutscheine im Wert von bis zu 500 € also auf zum möbelmangold in der Salzburger Straße 8 nur 10 Minuten vom Zentrum',
      sentenceTranslations: {
        'Werbung auf 192,3 jubiläumsverkauf bei möbelmangold wir feiern Geburtstag und Senken für Sie unsere Preise alle Möbel Geschirr und Matratzen um bis zu 50% günstiger feiern Sie mit und machen Sie mit bei unserem Gewinnspiel wir verlosen Warengutscheine im Wert von bis zu 500 € also auf zum möbelmangold in der Salzburger Straße 8 nur 10 Minuten vom Zentrum': {
          literal: 'Реклама на 192,3 юбилейная распродажа у мебельмангольд мы празднуем день рождения и снижаем для вас наши цены вся мебель посуда и матрасы на до 50% дешевле празднуйте с и участвуйте при нашей лотерее мы разыгрываем товарные купоны в стоимости от до 500 евро итак вперёд к мебельмангольд на Зальцбургской улице 8 только 10 минут от центра',
          literary: 'Реклама на волне 192,3: юбилейная распродажа в Мебельмангольд! Мы празднуем день рождения и снижаем для вас цены. Вся мебель, посуда и матрасы дешевле до 50%. Празднуйте с нами и участвуйте в нашей лотерее — мы разыгрываем подарочные сертификаты стоимостью до 500 евро. Приходите в Мебельмангольд на Зальцбургскую улицу 8, всего 10 минут от центра.'
        },
      },
      vocabulary: [
        { de: 'die Werbung', plural: 'die Werbungen', ru: 'реклама', gender: 'feminin', collocation: 'Werbung im Radio', example: 'Werbung auf 192,3 jubiläumsverkauf bei möbelmangold.' },
        { de: 'der Jubiläumsverkauf', plural: 'die Jubiläumsverkäufe', ru: 'юбилейная распродажа', gender: 'maskulin', collocation: 'Jubiläumsverkauf bei Möbel', example: 'Werbung auf 192,3 jubiläumsverkauf bei möbelmangold.' },
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'Geburtstag feiern', example: 'Wir feiern Geburtstag und Senken für Sie unsere Preise.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'цена', gender: 'maskulin', collocation: 'Preise senken', example: 'Wir feiern Geburtstag und Senken für Sie unsere Preise.' },
        { de: 'das Möbel', plural: 'die Möbel', ru: 'мебель', gender: 'neutrum', collocation: 'Möbel kaufen', example: 'Alle Möbel Geschirr und Matratzen um bis zu 50% günstiger.' },
        { de: 'das Geschirr', plural: 'die Geschirre', ru: 'посуда', gender: 'neutrum', collocation: 'Geschirr kaufen', example: 'Alle Möbel Geschirr und Matratzen um bis zu 50% günstiger.' },
        { de: 'die Matratze', plural: 'die Matratzen', ru: 'матрас', gender: 'feminin', collocation: 'Matratzen kaufen', example: 'Alle Möbel Geschirr und Matratzen um bis zu 50% günstiger.' },
        { de: 'das Gewinnspiel', plural: 'die Gewinnspiele', ru: 'лотерея, розыгрыш', gender: 'neutrum', collocation: 'beim Gewinnspiel mitmachen', example: 'Feiern Sie mit und machen Sie mit bei unserem Gewinnspiel.' },
        { de: 'der Warengutschein', plural: 'die Warengutscheine', ru: 'подарочный сертификат', gender: 'maskulin', collocation: 'Warengutscheine verlosen', example: 'Wir verlosen Warengutscheine im Wert von bis zu 500 €.' },
        { de: 'der Wert', plural: 'die Werte', ru: 'стоимость', gender: 'maskulin', collocation: 'im Wert von', example: 'Wir verlosen Warengutscheine im Wert von bis zu 500 €.' },
        { de: 'feiern', ru: 'праздновать', type: 'verb', forms: 'feiert, feierte, hat gefeiert', example: 'Wir feiern Geburtstag und Senken für Sie unsere Preise.' },
        { de: 'senken', ru: 'снижать', type: 'verb', forms: 'senkt, senkte, hat gesenkt', example: 'Wir feiern Geburtstag und Senken für Sie unsere Preise.' },
        { de: 'mitmachen', ru: 'участвовать', type: 'verb', forms: 'macht mit, machte mit, hat mitgemacht', example: 'Feiern Sie mit und machen Sie mit bei unserem Gewinnspiel.' },
        { de: 'verlosen', ru: 'разыгрывать', type: 'verb', forms: 'verlost, verloste, hat verlost', example: 'Wir verlosen Warengutscheine im Wert von bis zu 500 €.' },
        { de: 'günstig', ru: 'выгодный, дешёвый', type: 'adj', example: 'Alle Möbel Geschirr und Matratzen um bis zu 50% günstiger.' },
      ],
      practiceSentences: [
        { de: 'Wir feiern heute Geburtstag.', ru: 'Мы празднуем сегодня день рождения.', note: 'V2' },
        { de: 'Kaufen Sie bei uns ein!', ru: 'Покупайте у нас!', note: 'императив V1, отделяемая приставка' },
        { de: 'Das Geschäft senkt die Preise.', ru: 'Магазин снижает цены.', note: 'V2' },
        { de: 'Ich mache beim Spiel mit.', ru: 'Я участвую в игре.', note: 'отделяемая приставка mit' },
        { de: 'Sie verlosen einen Gutschein.', ru: 'Они разыгрывают купон.', note: 'V2, неотделяемая ver-' },
      ],
      question: {
        de: 'Was kann man bei Möbelmangold gewinnen?',
        ru: 'Что можно выиграть в Мёбельмангольд?',
        options: [
          { de: 'Möbel im Wert von 500 Euro', ru: 'Мебель стоимостью 500 евро' },
          { de: 'Warengutscheine bis zu 500 Euro', ru: 'Подарочные сертификаты до 500 евро' },
          { de: '50% Rabatt auf alle Produkte', ru: '50% скидка на все товары' },
        ],
        correct: 1,
        explanation: 'В тексте говорится: "wir verlosen Warengutscheine im Wert von bis zu 500 €".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Gabi Wengler',
      type: 'радиопередача',
      text: 'das war sie wieder unsere wunschstunde jetzt kommen die Nachrichten und in der nächsten Stunde begleitet Harry Farber sie dann durch den Nachmittag er hat heute ganz besondere Tipps für sie nämlich wo kann man in Köln am besten und am günstigsten essen gehen und ich kann Ihnen schon mal verraten er hat wirklich ein paar ganz besondere Spezialitäten aus seiner gastrotour gefunden wir hören uns morgen wieder wenn Sie mögen ihre Gabi Wengler',
      sentenceTranslations: {
        'das war sie wieder unsere wunschstunde jetzt kommen die Nachrichten und in der nächsten Stunde begleitet Harry Farber sie dann durch den Nachmittag er hat heute ganz besondere Tipps für sie nämlich wo kann man in Köln am besten und am günstigsten essen gehen und ich kann Ihnen schon mal verraten er hat wirklich ein paar ganz besondere Spezialitäten aus seiner gastrotour gefunden wir hören uns morgen wieder wenn Sie mögen ihre Gabi Wengler': {
          literal: 'Это была она снова наша час-желаний сейчас приходят новости и в следующем часе сопровождает Гарри Фарбер вас тогда через день он имеет сегодня совсем особенные советы для вас а именно где может человек в Кёльне лучше всего и дешевле всего есть идти и я могу вам уже раз выдать он имеет действительно пару совсем особенных специалитетов из своего гастротура нашёл мы слышим себя завтра снова если вы хотите ваша Габи Венглер',
          literary: 'Это снова была наша "Час желаний". Сейчас новости, а в следующий час Гарри Фарбер проведёт вас через весь день. У него сегодня совершенно особенные советы: где в Кёльне можно лучше всего и дешевле всего поесть. Могу вам раскрыть секрет — он действительно нашёл несколько особенных деликатесов во время своего гастротура. Услышимся завтра, если хотите. Ваша Габи Венглер.'
        },
      },
      vocabulary: [
        { de: 'die Wunschstunde', plural: 'die Wunschstunden', ru: 'час желаний (передача)', gender: 'feminin', collocation: 'unsere Wunschstunde', example: 'Das war sie wieder unsere wunschstunde.' },
        { de: 'die Nachrichten', ru: 'новости', gender: 'feminin', collocation: 'die Nachrichten kommen', example: 'Jetzt kommen die Nachrichten.' },
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'день, послеобеденное время', gender: 'maskulin', collocation: 'durch den Nachmittag', example: 'In der nächsten Stunde begleitet Harry Farber sie dann durch den Nachmittag.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'besondere Tipps haben', example: 'Er hat heute ganz besondere Tipps für sie.' },
        { de: 'die Spezialität', plural: 'die Spezialitäten', ru: 'деликатес', gender: 'feminin', collocation: 'besondere Spezialitäten', example: 'Er hat wirklich ein paar ganz besondere Spezialitäten aus seiner gastrotour gefunden.' },
        { de: 'die Gastrotour', plural: 'die Gastrotouren', ru: 'гастрономический тур', gender: 'feminin', collocation: 'auf seiner Gastrotour', example: 'Er hat wirklich ein paar ganz besondere Spezialitäten aus seiner gastrotour gefunden.' },
        { de: 'begleiten', ru: 'сопровождать', type: 'verb', forms: 'begleitet, begleitete, hat begleitet', example: 'In der nächsten Stunde begleitet Harry Farber sie dann durch den Nachmittag.' },
        { de: 'verraten', ru: 'выдавать, раскрывать', type: 'verb', forms: 'verrät, verriet, hat verraten', example: 'Und ich kann Ihnen schon mal verraten.' },
        { de: 'besonders', ru: 'особенный, особенно', type: 'adj', example: 'Er hat heute ganz besondere Tipps für sie.' },
      ],
      practiceSentences: [
        { de: 'Jetzt kommt das Wetter.', ru: 'Сейчас прогноз погоды.', note: 'V2 после обстоятельства' },
        { de: 'Er hat gute Tipps für dich.', ru: 'У него хорошие советы для тебя.', note: 'V2' },
        { de: 'Wo kann man gut essen?', ru: 'Где можно хорошо поесть?', note: 'модальный + инфинитив' },
        { de: 'Ich habe ein Restaurant gefunden.', ru: 'Я нашёл ресторан.', note: 'Perfekt: haben + gefunden' },
        { de: 'Wir hören uns morgen.', ru: 'Услышимся завтра.', note: 'V2, возвратный глагол' },
      ],
      question: {
        de: 'Worüber wird Harry Farber in der nächsten Stunde sprechen?',
        ru: 'О чём будет говорить Гарри Фарбер в следующий час?',
        options: [
          { de: 'Über die besten Restaurants in Köln', ru: 'О лучших ресторанах в Кёльне' },
          { de: 'Über Nachrichten aus Köln', ru: 'О новостях из Кёльна' },
          { de: 'Über seine Lieblingsmusik', ru: 'О своей любимой музыке' },
        ],
        correct: 0,
        explanation: 'В тексте говорится: "wo kann man in Köln am besten und am günstigsten essen gehen" и "Spezialitäten aus seiner gastrotour".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Internetexperte',
      type: 'объявление',
      text: 'kaufen Sie gern im Internet ein dann sollten Sie sich gut informieren denn es gibt viele Risiken morgen Abend um 19 Uhr findet in der Volkshochschule ein Vortrag mit dem Internetexperten Ralf schönherstatt er erklärt wie Verkaufsplattformen im Internet funktionieren und er gibt Ratschläge worauf Sie beim Kaufen und Verkaufen achten sollten der Eintritt ist frei bitte melden Sie sich trotzdem an unter der 20 98 71 denn es gibt nur noch wenige Plätze',
      sentenceTranslations: {
        'kaufen Sie gern im Internet ein dann sollten Sie sich gut informieren denn es gibt viele Risiken morgen Abend um 19 Uhr findet in der Volkshochschule ein Vortrag mit dem Internetexperten Ralf schönherstatt er erklärt wie Verkaufsplattformen im Internet funktionieren und er gibt Ratschläge worauf Sie beim Kaufen und Verkaufen achten sollten der Eintritt ist frei bitte melden Sie sich trotzdem an unter der 20 98 71 denn es gibt nur noch wenige Plätze': {
          literal: 'Покупаете вы охотно в интернете тогда должны вы себя хорошо информировать ибо это даёт многие риски завтра вечером в 19 часов находит в народной высшей школе доклад с интернет-экспертом Ральфом Шёнхером место он объясняет как торговые платформы в интернете функционируют и он даёт советы на что вы при покупке и продаже обращать внимание должны вход есть свободный пожалуйста заявите вы себя всё же под 20 98 71 ибо это даёт только ещё немногие места',
          literary: 'Вы любите делать покупки в интернете? Тогда вам следует хорошо информироваться, ведь существует много рисков. Завтра вечером в 19:00 в народном университете состоится лекция с интернет-экспертом Ральфом Шёнхером. Он объяснит, как работают торговые платформы, и даст советы, на что следует обращать внимание при покупке и продаже. Вход бесплатный, но зарегистрируйтесь по номеру 20 98 71 — мест осталось мало.'
        },
      },
      vocabulary: [
        { de: 'das Internet', ru: 'интернет', gender: 'neutrum', collocation: 'im Internet einkaufen', example: 'Kaufen Sie gern im Internet ein.' },
        { de: 'das Risiko', plural: 'die Risiken', ru: 'риск', gender: 'neutrum', collocation: 'viele Risiken', example: 'Denn es gibt viele Risiken.' },
        { de: 'die Volkshochschule', plural: 'die Volkshochschulen', ru: 'народный университет', gender: 'feminin', collocation: 'in der Volkshochschule', example: 'Morgen Abend um 19 Uhr findet in der Volkshochschule ein Vortrag statt.' },
        { de: 'der Vortrag', plural: 'die Vorträge', ru: 'лекция, доклад', gender: 'maskulin', collocation: 'ein Vortrag findet statt', example: 'Morgen Abend findet in der Volkshochschule ein Vortrag statt.' },
        { de: 'die Verkaufsplattform', plural: 'die Verkaufsplattformen', ru: 'торговая платформа', gender: 'feminin', collocation: 'Verkaufsplattformen im Internet', example: 'Er erklärt wie Verkaufsplattformen im Internet funktionieren.' },
        { de: 'der Ratschlag', plural: 'die Ratschläge', ru: 'совет', gender: 'maskulin', collocation: 'Ratschläge geben', example: 'Und er gibt Ratschläge worauf Sie beim Kaufen und Verkaufen achten sollten.' },
        { de: 'der Eintritt', plural: 'die Eintritte', ru: 'вход', gender: 'maskulin', collocation: 'der Eintritt ist frei', example: 'Der Eintritt ist frei.' },
        { de: 'der Platz', plural: 'die Plätze', ru: 'место', gender: 'maskulin', collocation: 'wenige Plätze', example: 'Denn es gibt nur noch wenige Plätze.' },
        { de: 'einkaufen', ru: 'делать покупки', type: 'verb', forms: 'kauft ein, kaufte ein, hat eingekauft', example: 'Kaufen Sie gern im Internet ein.' },
        { de: 'stattfinden', ru: 'состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Morgen Abend findet in der Volkshochschule ein Vortrag statt.' },
        { de: 'funktionieren', ru: 'функционировать', type: 'verb', forms: 'funktioniert, funktionierte, hat funktioniert', example: 'Er erklärt wie Verkaufsplattformen im Internet funktionieren.' },
        { de: 'sich anmelden', ru: 'регистрироваться', type: 'verb', forms: 'meldet sich an, meldete sich an, hat sich angemeldet', example: 'Bitte melden Sie sich trotzdem an unter der 20 98 71.' },
      ],
      practiceSentences: [
        { de: 'Ich kaufe oft online ein.', ru: 'Я часто покупаю онлайн.', note: 'отделяемая приставка ein' },
        { de: 'Du solltest dich informieren.', ru: 'Тебе следует информироваться.', note: 'модальный + инфинитив' },
        { de: 'Es gibt viele Angebote.', ru: 'Есть много предложений.', note: 'es gibt + Akk' },
        { de: 'Der Kurs findet morgen statt.', ru: 'Курс состоится завтра.', note: 'отделяемая приставка statt' },
        { de: 'Melden Sie sich bitte an!', ru: 'Зарегистрируйтесь, пожалуйста!', note: 'императив, отделяемая an' },
      ],
      question: {
        de: 'Wie viel kostet der Vortrag in der Volkshochschule?',
        ru: 'Сколько стоит лекция в народном университете?',
        options: [
          { de: '20,98 Euro', ru: '20,98 евро' },
          { de: '71 Euro', ru: '71 евро' },
          { de: 'Der Eintritt ist frei', ru: 'Вход бесплатный' },
        ],
        correct: 2,
        explanation: 'В тексте ясно сказано: "der Eintritt ist frei".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Verkaufsoffener Sonntag',
      type: 'объявление',
      text: 'hier ein Tipp für alle die Lust auf einen Einkaufsbummel haben am kommenden Sonntag ist verkaufsoffener Sonntag in Münster alle Geschäfte in der Innenstadt haben dann von 12r bis 18 Uhr geöffnet wir empfehlen den Autofahrern unter ihnen das Auto zu Hause zu lassen die Stadtbusse in die Innenstadt sind ab 11 Uhr kostenlos',
      sentenceTranslations: {
        'hier ein Tipp für alle die Lust auf einen Einkaufsbummel haben am kommenden Sonntag ist verkaufsoffener Sonntag in Münster alle Geschäfte in der Innenstadt haben dann von 12r bis 18 Uhr geöffnet wir empfehlen den Autofahrern unter ihnen das Auto zu Hause zu lassen die Stadtbusse in die Innenstadt sind ab 11 Uhr kostenlos': {
          literal: 'Здесь совет для всех кто желание на шопинг-прогулку имеют в приходящее воскресенье есть торговое воскресенье в Мюнстере все магазины в центре города имеют тогда с 12 до 18 часов открыто мы рекомендуем автомобилистам среди них машину дома оставить городские автобусы в центр города есть с 11 часов бесплатные',
          literary: 'Вот совет для всех, кто хочет пройтись по магазинам: в следующее воскресенье в Мюнстере торговое воскресенье. Все магазины в центре города открыты с 12 до 18 часов. Мы рекомендуем автомобилистам оставить машину дома — городские автобусы в центр с 11 часов бесплатные.'
        },
      },
      vocabulary: [
        { de: 'die Lust', ru: 'желание, охота', gender: 'feminin', collocation: 'Lust auf einen Einkaufsbummel', example: 'Hier ein Tipp für alle die Lust auf einen Einkaufsbummel haben.' },
        { de: 'der Einkaufsbummel', plural: 'die Einkaufsbummel', ru: 'шопинг-прогулка', gender: 'maskulin', collocation: 'Lust auf einen Einkaufsbummel haben', example: 'Hier ein Tipp für alle die Lust auf einen Einkaufsbummel haben.' },
        { de: 'das Geschäft', plural: 'die Geschäfte', ru: 'магазин', gender: 'neutrum', collocation: 'alle Geschäfte', example: 'Alle Geschäfte in der Innenstadt haben dann von 12r bis 18 Uhr geöffnet.' },
        { de: 'die Innenstadt', plural: 'die Innenstädte', ru: 'центр города', gender: 'feminin', collocation: 'in der Innenstadt', example: 'Alle Geschäfte in der Innenstadt haben dann von 12r bis 18 Uhr geöffnet.' },
        { de: 'der Autofahrer', plural: 'die Autofahrer', ru: 'автомобилист', gender: 'maskulin', collocation: 'den Autofahrern empfehlen', example: 'Wir empfehlen den Autofahrern unter ihnen das Auto zu Hause zu lassen.' },
        { de: 'der Stadtbus', plural: 'die Stadtbusse', ru: 'городской автобус', gender: 'maskulin', collocation: 'die Stadtbusse sind kostenlos', example: 'Die Stadtbusse in die Innenstadt sind ab 11 Uhr kostenlos.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Wir empfehlen den Autofahrern unter ihnen das Auto zu Hause zu lassen.' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Die Stadtbusse in die Innenstadt sind ab 11 Uhr kostenlos.' },
        { de: 'verkaufsoffen', ru: 'с открытыми магазинами', type: 'adj', example: 'Am kommenden Sonntag ist verkaufsoffener Sonntag in Münster.' },
      ],
      practiceSentences: [
        { de: 'Ich habe Lust auf Kino.', ru: 'Я хочу в кино.', note: 'V2' },
        { de: 'Das Geschäft ist sonntags geöffnet.', ru: 'Магазин открыт по воскресеньям.', note: 'V2' },
        { de: 'Der Bus fährt von 8 bis 20 Uhr.', ru: 'Автобус ходит с 8 до 20 часов.', note: 'V2' },
        { de: 'Wir empfehlen zu warten.', ru: 'Мы рекомендуем подождать.', note: 'V2 + Infinitiv с zu' },
        { de: 'Die Fahrt ist kostenlos.', ru: 'Поездка бесплатная.', note: 'V2' },
      ],
      question: {
        de: 'Ab wann sind die Stadtbusse in die Innenstadt kostenlos?',
        ru: 'С какого времени городские автобусы в центр бесплатные?',
        options: [
          { de: 'Ab 11 Uhr', ru: 'С 11 часов' },
          { de: 'Ab 12 Uhr', ru: 'С 12 часов' },
          { de: 'Ab 18 Uhr', ru: 'С 18 часов' },
        ],
        correct: 0,
        explanation: 'В тексте говорится: "die Stadtbusse in die Innenstadt sind ab 11 Uhr kostenlos".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Kaufsituation',
      type: 'новость',
      text: 'die Leute kaufen wieder schon lange war die Situation für die Geschäfte nicht mehr so gut wie in den letzten Monaten der Grund noch nie hatten so viele Menschen wie jetzt einen Job sie verdienen mehr und wollen ihr Geld für gute Produkte ausgeben besonders gut ist die Situation für',
      sentenceTranslations: {
        'die Leute kaufen wieder schon lange war die Situation für die Geschäfte nicht mehr so gut wie in den letzten Monaten der Grund noch nie hatten so viele Menschen wie jetzt einen Job sie verdienen mehr und wollen ihr Geld für gute Produkte ausgeben besonders gut ist die Situation für': {
          literal: 'Люди покупают снова уже долго была ситуация для магазинов не больше так хороша как в последних месяцах причина ещё никогда имели так много людей как сейчас работу они зарабатывают больше и хотят их деньги для хороших продуктов тратить особенно хорошо есть ситуация для',
          literary: 'Люди снова покупают. Давно ситуация для магазинов не была такой хорошей, как в последние месяцы. Причина: никогда ещё у стольких людей не было работы, как сейчас. Они зарабатывают больше и хотят тратить деньги на хорошие продукты. Особенно хорошая ситуация для...'
        },
      },
      vocabulary: [
        { de: 'die Leute', ru: 'люди', gender: 'feminin', collocation: 'die Leute kaufen', example: 'Die Leute kaufen wieder.' },
        { de: 'die Situation', plural: 'die Situationen', ru: 'ситуация', gender: 'feminin', collocation: 'die Situation für Geschäfte', example: 'Schon lange war die Situation für die Geschäfte nicht mehr so gut.' },
        { de: 'der Monat', plural: 'die Monate', ru: 'месяц', gender: 'maskulin', collocation: 'in den letzten Monaten', example: 'Schon lange war die Situation nicht mehr so gut wie in den letzten Monaten.' },
        { de: 'der Grund', plural: 'die Gründe', ru: 'причина', gender: 'maskulin', collocation: 'der Grund ist', example: 'Der Grund: noch nie hatten so viele Menschen wie jetzt einen Job.' },
        { de: 'der Mensch', plural: 'die Menschen', ru: 'человек', gender: 'maskulin', collocation: 'viele Menschen', example: 'Noch nie hatten so viele Menschen wie jetzt einen Job.' },
        { de: 'der Job', plural: 'die Jobs', ru: 'работа', gender: 'maskulin', collocation: 'einen Job haben', example: 'Noch nie hatten so viele Menschen wie jetzt einen Job.' },
        { de: 'das Geld', ru: 'деньги', gender: 'neutrum', collocation: 'Geld ausgeben', example: 'Sie wollen ihr Geld für gute Produkte ausgeben.' },
        { de: 'das Produkt', plural: 'die Produkte', ru: 'продукт', gender: 'neutrum', collocation: 'gute Produkte', example: 'Sie wollen ihr Geld für gute Produkte ausgeben.' },
        { de: 'verdienen', ru: 'зарабатывать', type: 'verb', forms: 'verdient, verdiente, hat verdient', example: 'Sie verdienen mehr und wollen ihr Geld für gute Produkte ausgeben.' },
        { de: 'ausgeben', ru: 'тратить', type: 'verb', forms: 'gibt aus, gab aus, hat ausgegeben', example: 'Sie wollen ihr Geld für gute Produkte ausgeben.' },
      ],
      practiceSentences: [
        { de: 'Die Menschen kaufen mehr.', ru: 'Люди покупают больше.', note: 'V2' },
        { de: 'Lange war es nicht so gut.', ru: 'Долго не было так хорошо.', note: 'инверсия, V2' },
        { de: 'Ich habe einen guten Job.', ru: 'У меня хорошая работа.', note: 'V2' },
        { de: 'Sie verdienen viel Geld.', ru: 'Они зарабатывают много денег.', note: 'V2' },
        { de: 'Wir wollen Geld ausgeben.', ru: 'Мы хотим потратить деньги.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Warum kaufen die Leute wieder mehr?',
        ru: 'Почему люди снова покупают больше?',
        options: [
          { de: 'Die Produkte sind günstiger geworden', ru: 'Товары стали дешевле' },
          { de: 'Mehr Menschen haben jetzt einen Job', ru: 'Больше людей теперь имеют работу' },
          { de: 'Die Geschäfte haben länger geöffnet', ru: 'Магазины дольше открыты' },
        ],
        correct: 1,
        explanation: 'В тексте объясняется: "noch nie hatten so viele Menschen wie jetzt einen Job".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Nick und Valerie',
      type: 'диалог',
      text: 'hallo Nick hallo Valerie schöne Jacke neu habe ich zum Geburtstag bekommen wie war dein Wochenende ganz gut am Samstag war ich mit Jakov und Laura im Einkaufszentrum ich brauchte neue Sportschuhe und hast du welche gefunden ja echt coole Schuhe und gar nicht teuer Jakov wollte sich einen Pullover kaufen aber er hat keinen gefunden dann hat er ein T-Shirt gekauft eins mit dem Bild von seiner Lieblingsband ah da fällt mir ein Pablo hat am Samstag die Tickets für das Crow Konzert geholt da müssen wir ihm noch das Geld geben super laura hat sich die neue CD von Crow gekauft die ist echt gut ich weiß ich habe mir das Album schon runtergeladen oh hast du ein neues Handy ja am Samstag war ich mit Clara in der Stadt sie wollte nach Handys schauen und sich informieren ich bin nur mitgegangen aber dann hat mir dieses Handy so gut gefallen und mein altes hat sowieso nicht mehr so gut funktioniert da habe ich es einfach genommen sieht echt gut aus und hat Clara auch eins gekauft du kennst doch Clara wir sind an dem ersten Schmuckgeschäft vorbeigegangen und sie musste unbedingt einen neuen Ring haben wie viele Ketten und Ringe hat sie eigentlich schon keine Ahnung aber viele',
      sentenceTranslations: {
        'hallo Nick hallo Valerie schöne Jacke neu habe ich zum Geburtstag bekommen wie war dein Wochenende ganz gut am Samstag war ich mit Jakov und Laura im Einkaufszentrum ich brauchte neue Sportschuhe und hast du welche gefunden ja echt coole Schuhe und gar nicht teuer Jakov wollte sich einen Pullover kaufen aber er hat keinen gefunden dann hat er ein T-Shirt gekauft eins mit dem Bild von seiner Lieblingsband ah da fällt mir ein Pablo hat am Samstag die Tickets für das Crow Konzert geholt da müssen wir ihm noch das Geld geben super laura hat sich die neue CD von Crow gekauft die ist echt gut ich weiß ich habe mir das Album schon runtergeladen oh hast du ein neues Handy ja am Samstag war ich mit Clara in der Stadt sie wollte nach Handys schauen und sich informieren ich bin nur mitgegangen aber dann hat mir dieses Handy so gut gefallen und mein altes hat sowieso nicht mehr so gut funktioniert da habe ich es einfach genommen sieht echt gut aus und hat Clara auch eins gekauft du kennst doch Clara wir sind an dem ersten Schmuckgeschäft vorbeigegangen und sie musste unbedingt einen neuen Ring haben wie viele Ketten und Ringe hat sie eigentlich schon keine Ahnung aber viele': {
          literal: 'Привет Ник привет Валери красивая куртка новая имею я к дню рождения получил как были твои выходные совсем хорошо в субботу был я с Яковом и Лаурой в торговом центре я нуждался новые спортивные туфли и имеешь ты какие-то нашёл да действительно крутые туфли и совсем не дорогие Яков хотел себе свитер купить но он имеет никакой не нашёл тогда имеет он футболку купил одну с картинкой от его любимой группы ах тут падает мне в Пабло имеет в субботу билеты для концерта Crow взял тут должны мы ему ещё деньги дать супер Лаура имеет себе новый CD от Crow купила она есть действительно хорошая я знаю я имею себе альбом уже скачал о имеешь ты новый телефон да в субботу был я с Кларой в городе она хотела по телефонам смотреть и себя информировать я есть только пошёл-с но тогда имеет мне этот телефон так хорошо понравился и мой старый имеет всё-равно не больше так хорошо функционировал тут имею я его просто взял выглядит действительно хорошо и имеет Клара тоже один купила ты знаешь же Клару мы есть у первого ювелирного магазина прошли мимо и она должна была обязательно новое кольцо иметь как много цепочек и колец имеет она собственно уже никакого понятия но много',
          literary: 'Привет, Ник! Привет, Валери! Красивая куртка, новая? Получил на день рождения. Как прошли выходные? Нормально. В субботу я был с Яковом и Лаурой в торговом центре — мне нужны были новые кроссовки. Нашёл? Да, крутые и недорогие. Яков хотел купить свитер, но не нашёл, купил футболку с любимой группой. Кстати, Пабло купил билеты на концерт Crow — нам нужно ему деньги отдать. Лаура купила новый CD. Я уже скачал альбом. У тебя новый телефон? Да, был с Кларой в городе, она смотрела телефоны, а мне этот понравился, старый всё равно плохо работал. А Клара? Она зашла в ювелирный и купила кольцо. Сколько у неё уже колец и цепочек? Без понятия, но много.'
        },
      },
      vocabulary: [
        { de: 'die Jacke', plural: 'die Jacken', ru: 'куртка', gender: 'feminin', collocation: 'schöne Jacke', example: 'Schöne Jacke, neu?' },
        { de: 'das Einkaufszentrum', plural: 'die Einkaufszentren', ru: 'торговый центр', gender: 'neutrum', collocation: 'im Einkaufszentrum', example: 'Am Samstag war ich mit Jakov und Laura im Einkaufszentrum.' },
        { de: 'der Sportschuh', plural: 'die Sportschuhe', ru: 'кроссовка', gender: 'maskulin', collocation: 'neue Sportschuhe brauchen', example: 'Ich brauchte neue Sportschuhe.' },
        { de: 'der Pullover', plural: 'die Pullover', ru: 'свитер', gender: 'maskulin', collocation: 'einen Pullover kaufen', example: 'Jakov wollte sich einen Pullover kaufen.' },
        { de: 'die Lieblingsband', plural: 'die Lieblingsbands', ru: 'любимая группа', gender: 'feminin', collocation: 'Bild von seiner Lieblingsband', example: 'Eins mit dem Bild von seiner Lieblingsband.' },
        { de: 'das Ticket', plural: 'die Tickets', ru: 'билет', gender: 'neutrum', collocation: 'Tickets für das Konzert', example: 'Pablo hat am Samstag die Tickets für das Crow Konzert geholt.' },
        { de: 'das Album', plural: 'die Alben', ru: 'альбом', gender: 'neutrum', collocation: 'das Album runterladen', example: 'Ich habe mir das Album schon runtergeladen.' },
        { de: 'das Handy', plural: 'die Handys', ru: 'мобильный телефон', gender: 'neutrum', collocation: 'neues Handy', example: 'Hast du ein neues Handy?' },
        { de: 'das Schmuckgeschäft', plural: 'die Schmuckgeschäfte', ru: 'ювелирный магазин', gender: 'neutrum', collocation: 'am Schmuckgeschäft vorbeigehen', example: 'Wir sind an dem ersten Schmuckgeschäft vorbeigegangen.' },
        { de: 'der Ring', plural: 'die Ringe', ru: 'кольцо', gender: 'maskulin', collocation: 'einen neuen Ring haben', example: 'Sie musste unbedingt einen neuen Ring haben.' },
        { de: 'die Kette', plural: 'die Ketten', ru: 'цепочка', gender: 'feminin', collocation: 'Ketten und Ringe', example: 'Wie viele Ketten und Ringe hat sie eigentlich schon?' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Habe ich zum Geburtstag bekommen.' },
        { de: 'runterladen', ru: 'скачивать', type: 'verb', forms: 'lädt runter, lud runter, hat runtergeladen', example: 'Ich habe mir das Album schon runtergeladen.' },
        { de: 'vorbeigehen', ru: 'проходить мимо', type: 'verb', forms: 'geht vorbei, ging vorbei, ist vorbeigegangen', example: 'Wir sind an dem ersten Schmuckgeschäft vorbeigegangen.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Aber dann hat mir dieses Handy so gut gefallen.' },
        { de: 'funktionieren', ru: 'работать', type: 'verb', forms: 'funktioniert, funktionierte, hat funktioniert', example: 'Und mein altes hat sowieso nicht mehr so gut funktioniert.' },
      ],
      practiceSentences: [
        { de: 'Ich habe eine Jacke bekommen.', ru: 'Я получил куртку.', note: 'Perfekt: haben + bekommen' },
        { de: 'Er kauft sich neue Schuhe.', ru: 'Он покупает себе новые туфли.', note: 'V2, возвратный Dativ' },
        { de: 'Wir waren im Zentrum.', ru: 'Мы были в центре.', note: 'Präteritum von sein' },
        { de: 'Sie hat nichts gefunden.', ru: 'Она ничего не нашла.', note: 'Perfekt: haben + gefunden' },
        { de: 'Das fällt mir jetzt ein.', ru: 'Это мне сейчас приходит в голову.', note: 'отделяемая приставка ein' },
      ],
      question: {
        de: 'Was hat Clara im Schmuckgeschäft gekauft?',
        ru: 'Что купила Клара в ювелирном магазине?',
        options: [
          { de: 'Eine Kette', ru: 'Цепочку' },
          { de: 'Ein Handy', ru: 'Телефон' },
          { de: 'Einen Ring', ru: 'Кольцо' },
        ],
        correct: 2,
        explanation: 'Валери говорит: "sie musste unbedingt einen neuen Ring haben".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Schmuckgeschäft',
      type: 'диалог в магазине',
      text: 'kann ich Ihnen helfen ich suche ein Geschenk für meine Freundin wie finden Sie hier den Schmuck nicht so teuer die Ohrringe nur 15 € ja nicht schlecht aber diese Kette hier ist auch cool ja aber die sind sehr teuer 39 € wie finden Sie den Ring der ist in demselben Stil kostet aber nur 19 € ja der ist gut 39€ ist wirklich zu teuer für ein Geburtstagsgeschenk',
      sentenceTranslations: {
        'kann ich Ihnen helfen ich suche ein Geschenk für meine Freundin wie finden Sie hier den Schmuck nicht so teuer die Ohrringe nur 15 € ja nicht schlecht aber diese Kette hier ist auch cool ja aber die sind sehr teuer 39 € wie finden Sie den Ring der ist in demselben Stil kostet aber nur 19 € ja der ist gut 39€ ist wirklich zu teuer für ein Geburtstagsgeschenk': {
          literal: 'Могу я вам помочь я ищу подарок для моей подруги как находите вы здесь украшения не так дорого серьги только 15 евро да не плохо но эта цепочка здесь есть тоже крутая да но они есть очень дорогие 39 евро как находите вы кольцо оно есть в том же стиле стоит но только 19 евро да оно хорошее 39 евро есть действительно слишком дорого для подарка на день рождения',
          literary: 'Могу я вам помочь? Я ищу подарок для своей девушки. Как вам украшения? Не очень дорого, серьги всего 15 евро. Неплохо, но эта цепочка тоже классная. Да, но она дорогая — 39 евро. Как вам кольцо? Оно в том же стиле, но стоит только 19 евро. Да, хорошее. 39 евро — это действительно слишком дорого для подарка на день рождения.'
        },
      },
      vocabulary: [
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'ein Geschenk suchen', example: 'Ich suche ein Geschenk für meine Freundin.' },
        { de: 'der Schmuck', ru: 'украшения', gender: 'maskulin', collocation: 'den Schmuck finden', example: 'Wie finden Sie hier den Schmuck?' },
        { de: 'der Ohrring', plural: 'die Ohrringe', ru: 'серьга', gender: 'maskulin', collocation: 'die Ohrringe kosten', example: 'Die Ohrringe nur 15 €.' },
        { de: 'der Stil', plural: 'die Stile', ru: 'стиль', gender: 'maskulin', collocation: 'in demselben Stil', example: 'Der ist in demselben Stil kostet aber nur 19 €.' },
        { de: 'das Geburtstagsgeschenk', plural: 'die Geburtstagsgeschenke', ru: 'подарок на день рождения', gender: 'neutrum', collocation: 'für ein Geburtstagsgeschenk', example: '39€ ist wirklich zu teuer für ein Geburtstagsgeschenk.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Ich suche ein Geschenk für meine Freundin.' },
        { de: 'kosten', ru: 'стоить', type: 'verb', forms: 'kostet, kostete, hat gekostet', example: 'Der ist in demselben Stil kostet aber nur 19 €.' },
        { de: 'teuer', ru: 'дорогой', type: 'adj', example: 'Ja aber die sind sehr teuer 39 €.' },
      ],
      practiceSentences: [
        { de: 'Ich suche ein Geschenk.', ru: 'Я ищу подарок.', note: 'V2' },
        { de: 'Wie findest du das?', ru: 'Как тебе это?', note: 'V2 в вопросе' },
        { de: 'Das kostet nur 10 Euro.', ru: 'Это стоит только 10 евро.', note: 'V2' },
        { de: 'Der Ring ist zu teuer.', ru: 'Кольцо слишком дорогое.', note: 'V2' },
        { de: 'Kann ich bezahlen?', ru: 'Могу я заплатить?', note: 'модальный V1 в вопросе' },
      ],
      question: {
        de: 'Was kostet der Ring?',
        ru: 'Сколько стоит кольцо?',
        options: [
          { de: '15 Euro', ru: '15 евро' },
          { de: '19 Euro', ru: '19 евро' },
          { de: '39 Euro', ru: '39 евро' },
        ],
        correct: 1,
        explanation: 'Продавец говорит: "der ist in demselben Stil kostet aber nur 19 €".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Daniel und Lisa',
      type: 'диалог',
      text: 'hi Daniel hi Lisa wie geht\'s super ich war am Wochenende reiten reiten finde ich auch gut aber ich kann es leider nicht aber du bist super in Ball spielen basketball volleyball Fußball und so ja am Wochenende habe ich mit Theo und den anderen wieder Fußball gespielt aber vielleicht komme ich nächstes Wochenende mal mit zum Reiten okay ja klar',
      sentenceTranslations: {
        'hi Daniel hi Lisa wie geht\'s super ich war am Wochenende reiten reiten finde ich auch gut aber ich kann es leider nicht aber du bist super in Ball spielen basketball volleyball Fußball und so ja am Wochenende habe ich mit Theo und den anderen wieder Fußball gespielt aber vielleicht komme ich nächstes Wochenende mal mit zum Reiten okay ja klar': {
          literal: 'Привет Даниэль привет Лиза как дела супер я был в выходные кататься верхом кататься верхом нахожу я тоже хорошим но я могу это к сожалению не но ты есть супер в мяч играть баскетбол волейбол футбол и так да в выходные имею я с Тео и другими снова футбол играл но может быть прихожу я следующие выходные разок с к верховой езде окей да конечно',
          literary: 'Привет, Даниэль! Привет, Лиза! Как дела? Супер, в выходные я ездил верхом. Мне тоже нравится верховая езда, но, к сожалению, не умею. Зато ты отлично играешь в мяч — баскетбол, волейбол, футбол. Да, в выходные я снова играл в футбол с Тео и ребятами. Может, в следующие выходные поеду с тобой кататься? Окей, конечно!'
        },
      },
      vocabulary: [
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'am Wochenende', example: 'Ich war am Wochenende reiten.' },
        { de: 'der Fußball', ru: 'футбол', gender: 'maskulin', collocation: 'Fußball spielen', example: 'Am Wochenende habe ich mit Theo und den anderen wieder Fußball gespielt.' },
        { de: 'reiten', ru: 'ездить верхом', type: 'verb', forms: 'reitet, ritt, ist geritten', example: 'Ich war am Wochenende reiten.' },
        { de: 'mitkommen', ru: 'пойти с кем-то', type: 'verb', forms: 'kommt mit, kam mit, ist mitgekommen', example: 'Aber vielleicht komme ich nächstes Wochenende mal mit zum Reiten.' },
        { de: 'super', ru: 'супер, отлично', type: 'adj', example: 'Aber du bist super in Ball spielen.' },
      ],
      practiceSentences: [
        { de: 'Ich war gestern schwimmen.', ru: 'Я вчера плавал.', note: 'V2, инфинитив после war' },
        { de: 'Das finde ich toll.', ru: 'Это я нахожу классным.', note: 'V2 с топикализацией' },
        { de: 'Er kann gut tanzen.', ru: 'Он хорошо умеет танцевать.', note: 'модальный + инфинитив' },
        { de: 'Wir haben Tennis gespielt.', ru: 'Мы играли в теннис.', note: 'Perfekt: haben + gespielt' },
        { de: 'Kommst du mit?', ru: 'Ты идёшь с нами?', note: 'отделяемая приставка mit' },
      ],
      question: {
        de: 'Was hat Daniel am Wochenende gemacht?',
        ru: 'Что делал Даниэль в выходные?',
        options: [
          { de: 'Er war reiten', ru: 'Ездил верхом' },
          { de: 'Er hat Fußball gespielt', ru: 'Играл в футбол' },
          { de: 'Er hat Basketball gespielt', ru: 'Играл в баскетбол' },
        ],
        correct: 1,
        explanation: 'Даниэль говорит: "am Wochenende habe ich mit Theo und den anderen wieder Fußball gespielt".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Hunger',
      type: 'диалог',
      text: 'ich habe so einen Hunger magst du einen Apfel oder eine Banane nein Obst ist nicht das Richtige hast du nicht auch ein Brot ja hier mit Käse',
      sentenceTranslations: {
        'ich habe so einen Hunger magst du einen Apfel oder eine Banane nein Obst ist nicht das Richtige hast du nicht auch ein Brot ja hier mit Käse': {
          literal: 'Я имею такой голод хочешь ты яблоко или банан нет фрукты есть не то правильное имеешь ты не также хлеб да здесь с сыром',
          literary: 'Я так голоден! Хочешь яблоко или банан? Нет, фрукты не то, что нужно. У тебя нет хлеба? Да, вот с сыром.'
        },
      },
      vocabulary: [
        { de: 'der Hunger', ru: 'голод', gender: 'maskulin', collocation: 'Hunger haben', example: 'Ich habe so einen Hunger.' },
        { de: 'der Apfel', plural: 'die Äpfel', ru: 'яблоко', gender: 'maskulin', collocation: 'einen Apfel mögen', example: 'Magst du einen Apfel oder eine Banane?' },
        { de: 'die Banane', plural: 'die Bananen', ru: 'банан', gender: 'feminin', collocation: 'eine Banane mögen', example: 'Magst du einen Apfel oder eine Banane?' },
        { de: 'das Obst', ru: 'фрукты', gender: 'neutrum', collocation: 'Obst essen', example: 'Nein Obst ist nicht das Richtige.' },
        { de: 'das Brot', plural: 'die Brote', ru: 'хлеб', gender: 'neutrum', collocation: 'ein Brot haben', example: 'Hast du nicht auch ein Brot?' },
        { de: 'der Käse', ru: 'сыр', gender: 'maskulin', collocation: 'Brot mit Käse', example: 'Ja hier mit Käse.' },
        { de: 'mögen', ru: 'хотеть, любить', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Magst du einen Apfel oder eine Banane?' },
      ],
      practiceSentences: [
        { de: 'Ich habe Hunger.', ru: 'Я голоден.', note: 'V2' },
        { de: 'Magst du Kaffee?', ru: 'Ты любишь кофе?', note: 'модальный V2 в вопросе' },
        { de: 'Das ist nicht richtig.', ru: 'Это неправильно.', note: 'V2' },
        { de: 'Hast du Brot?', ru: 'У тебя есть хлеб?', note: 'V2 в вопросе' },
        { de: 'Ich esse Brot mit Butter.', ru: 'Я ем хлеб с маслом.', note: 'V2' },
      ],
      question: {
        de: 'Was möchte die hungrige Person essen?',
        ru: 'Что хочет съесть голодный человек?',
        options: [
          { de: 'Obst', ru: 'Фрукты' },
          { de: 'Brot mit Käse', ru: 'Хлеб с сыром' },
          { de: 'Nur eine Banane', ru: 'Только банан' },
        ],
        correct: 1,
        explanation: 'Человек отвергает фрукты ("Obst ist nicht das Richtige") и просит хлеб, который предлагается с сыром.'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Wochenende',
      type: 'диалог',
      text: 'was machst du am Wochenende machst du wieder eine Radtour mit Franziska nein dieses Wochenende geht es nicht franziska muss lernen und ich fahre an den Bodensee zu deinen Großeltern ja genau',
      sentenceTranslations: {
        'was machst du am Wochenende machst du wieder eine Radtour mit Franziska nein dieses Wochenende geht es nicht franziska muss lernen und ich fahre an den Bodensee zu deinen Großeltern ja genau': {
          literal: 'Что делаешь ты в выходные делаешь ты снова велотур с Франциской нет эти выходные идёт это не Франциска должна учиться и я еду к Боденскому озеру к твоим дедушке с бабушкой да точно',
          literary: 'Что делаешь в выходные? Опять поедешь на велопрогулку с Франциской? Нет, в эти выходные не получится, Франциска должна учиться. А я еду на Боденское озеро. К дедушке с бабушкой? Да, точно.'
        },
      },
      vocabulary: [
        { de: 'die Radtour', plural: 'die Radtouren', ru: 'велопрогулка', gender: 'feminin', collocation: 'eine Radtour machen', example: 'Machst du wieder eine Radtour mit Franziska?' },
        { de: 'der Bodensee', ru: 'Боденское озеро', gender: 'maskulin', collocation: 'an den Bodensee fahren', example: 'Und ich fahre an den Bodensee.' },
        { de: 'die Großeltern', ru: 'дедушка с бабушкой', gender: 'feminin', collocation: 'zu den Großeltern', example: 'Zu deinen Großeltern? Ja genau.' },
        { de: 'lernen', ru: 'учиться', type: 'verb', forms: 'lernt, lernte, hat gelernt', example: 'Franziska muss lernen.' },
        { de: 'fahren', ru: 'ехать', type: 'verb', forms: 'fährt, fuhr, ist gefahren', example: 'Und ich fahre an den Bodensee.' },
      ],
      practiceSentences: [
        { de: 'Was machst du heute?', ru: 'Что ты делаешь сегодня?', note: 'V2 в вопросе' },
        { de: 'Es geht leider nicht.', ru: 'К сожалению, не получится.', note: 'безличная конструкция' },
        { de: 'Ich muss arbeiten.', ru: 'Я должен работать.', note: 'модальный + инфинитив' },
        { de: 'Er fährt ans Meer.', ru: 'Он едет к морю.', note: 'V2' },
        { de: 'Wir gehen zu Freunden.', ru: 'Мы идём к друзьям.', note: 'V2' },
      ],
      question: {
        de: 'Wohin fährt die Person am Wochenende?',
        ru: 'Куда едет человек в выходные?',
        options: [
          { de: 'Zu Franziska', ru: 'К Франциске' },
          { de: 'Zum Radfahren', ru: 'Кататься на велосипеде' },
          { de: 'An den Bodensee', ru: 'На Боденское озеро' },
        ],
        correct: 2,
        explanation: 'Человек говорит: "ich fahre an den Bodensee" к дедушке с бабушкой.'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Berufe',
      type: 'диалог',
      text: 'ich möchte gerne Journalist werden da kann ich viel reisen und du reisen möchte ich auch aber schreiben nein das ist nichts für mich dann kannst du ja Pilot werden ja das ist schon besser aber ich liebe Kino und Filme Kameramann das ist mein Traum echt ich finde Pilot passt besser zu dir',
      sentenceTranslations: {
        'ich möchte gerne Journalist werden da kann ich viel reisen und du reisen möchte ich auch aber schreiben nein das ist nichts für mich dann kannst du ja Pilot werden ja das ist schon besser aber ich liebe Kino und Filme Kameramann das ist mein Traum echt ich finde Pilot passt besser zu dir': {
          literal: 'Я хотел бы охотно журналистом стать тут могу я много путешествовать а ты путешествовать хотел бы я тоже но писать нет это есть ничто для меня тогда можешь ты же пилотом стать да это есть уже лучше но я люблю кино и фильмы оператор это есть моя мечта действительно я нахожу пилот подходит лучше к тебе',
          literary: 'Я хотел бы стать журналистом — тогда смогу много путешествовать. А ты? Путешествовать я тоже хочу, но писать — нет, это не для меня. Тогда можешь стать пилотом. Да, это уже лучше, но я люблю кино и фильмы. Оператор — вот моя мечта. Серьёзно? Я думаю, пилот тебе больше подходит.'
        },
      },
      vocabulary: [
        { de: 'der Journalist', plural: 'die Journalisten', ru: 'журналист', gender: 'maskulin', collocation: 'Journalist werden', example: 'Ich möchte gerne Journalist werden.' },
        { de: 'der Pilot', plural: 'die Piloten', ru: 'пилот', gender: 'maskulin', collocation: 'Pilot werden', example: 'Dann kannst du ja Pilot werden.' },
        { de: 'der Kameramann', plural: 'die Kameramänner', ru: 'оператор', gender: 'maskulin', collocation: 'Kameramann werden', example: 'Kameramann das ist mein Traum.' },
        { de: 'der Traum', plural: 'die Träume', ru: 'мечта', gender: 'maskulin', collocation: 'mein Traum', example: 'Kameramann das ist mein Traum.' },
        { de: 'der Film', plural: 'die Filme', ru: 'фильм', gender: 'maskulin', collocation: 'Filme lieben', example: 'Aber ich liebe Kino und Filme.' },
        { de: 'reisen', ru: 'путешествовать', type: 'verb', forms: 'reist, reiste, ist gereist', example: 'Da kann ich viel reisen.' },
        { de: 'werden', ru: 'становиться', type: 'verb', forms: 'wird, wurde, ist geworden', example: 'Ich möchte gerne Journalist werden.' },
        { de: 'passen zu', ru: 'подходить к', type: 'verb', forms: 'passt, passte, hat gepasst', example: 'Ich finde Pilot passt besser zu dir.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte Arzt werden.', ru: 'Я хочу стать врачом.', note: 'модальный + инфинитив' },
        { de: 'Das ist nichts für dich.', ru: 'Это не для тебя.', note: 'V2' },
        { de: 'Er kann gut schreiben.', ru: 'Он хорошо умеет писать.', note: 'модальный + инфинитив' },
        { de: 'Der Job passt zu mir.', ru: 'Эта работа мне подходит.', note: 'V2' },
        { de: 'Ich liebe Musik.', ru: 'Я люблю музыку.', note: 'V2' },
      ],
      question: {
        de: 'Was ist der Traumberuf der zweiten Person?',
        ru: 'Какая профессия мечты у второго человека?',
        options: [
          { de: 'Journalist', ru: 'Журналист' },
          { de: 'Pilot', ru: 'Пилот' },
          { de: 'Kameramann', ru: 'Оператор' },
        ],
        correct: 2,
        explanation: 'Второй человек говорит: "Kameramann das ist mein Traum".'
      }
    },

    /* ═══ TEIL 4 — интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Luana',
      type: 'интервью',
      text: 'bei uns heute im Studio eine junge Dame mit großem Talent herzlich willkommen Luana hallo danke für die Einladung woher kommst du eigentlich mein Heimatland ist Albanien aber wir sind nach Hamburg gezogen als ich noch sehr klein war Luana du machst etwas ganz Besonderes neue Mode aus alter Mode erzähl uns ein bisschen mehr darüber mit 15 habe ich angefangen Damenmode zu machen die Idee ist alte Damen oder Herrenkleidung zu benutzen um daraus neue Damenkleidung zu machen sehr kreativ gedacht man könnte es auch Mode recyclling nennen ja genau es tut mir nämlich sehr leid wie viel Kleidung einfach nur im Schrank liegt oder sogar in den Müll kommt da hast du recht beschreib uns doch mal deine Mode bunt würde ich spontan sagen meine Kundinnen lieben die Farben am meisten werden die bunten petchwork T-Shirts verkauft besonders wichtig ist mir natürlich auch dass die Kleidungsstücke egal ob T-Shirt Hose oder Kleid bequem sind man kann dich und deine Kleidung im Internet finden oder ja genau auf meinem Blog gibt es viele Fotos und Ideen was man mit alter Kleidung machen kann über meinem Blog haben die Leute mich und meine Mode kennengelernt auf meiner Webseite kann man alle Kleidungsstücke sehen und natürlich online kaufen Luana du bist noch so jung aber so aktiv wie schaffst du das zeitlich im Moment mache ich es nur in meiner Freizeit also hauptsächlich am Wochenende denn ich muss auch viel für die Schule lernen nach der Schule möchte ich nicht studieren sondern eine Ausbildung zur Modeschneiderin machen das ist mein Traumberuf Luana ich wünsche dir dass du alle deine Ziele erreichst danke für das schöne Gespräch es war echt schön herzlichen Dank',
      sentenceTranslations: {
        'bei uns heute im Studio eine junge Dame mit großem Talent herzlich willkommen Luana hallo danke für die Einladung woher kommst du eigentlich mein Heimatland ist Albanien aber wir sind nach Hamburg gezogen als ich noch sehr klein war Luana du machst etwas ganz Besonderes neue Mode aus alter Mode erzähl uns ein bisschen mehr darüber mit 15 habe ich angefangen Damenmode zu machen die Idee ist alte Damen oder Herrenkleidung zu benutzen um daraus neue Damenkleidung zu machen sehr kreativ gedacht man könnte es auch Mode recyclling nennen ja genau es tut mir nämlich sehr leid wie viel Kleidung einfach nur im Schrank liegt oder sogar in den Müll kommt da hast du recht beschreib uns doch mal deine Mode bunt würde ich spontan sagen meine Kundinnen lieben die Farben am meisten werden die bunten petchwork T-Shirts verkauft besonders wichtig ist mir natürlich auch dass die Kleidungsstücke egal ob T-Shirt Hose oder Kleid bequem sind man kann dich und deine Kleidung im Internet finden oder ja genau auf meinem Blog gibt es viele Fotos und Ideen was man mit alter Kleidung machen kann über meinem Blog haben die Leute mich und meine Mode kennengelernt auf meiner Webseite kann man alle Kleidungsstücke sehen und natürlich online kaufen Luana du bist noch so jung aber so aktiv wie schaffst du das zeitlich im Moment mache ich es nur in meiner Freizeit also hauptsächlich am Wochenende denn ich muss auch viel für die Schule lernen nach der Schule möchte ich nicht studieren sondern eine Ausbildung zur Modeschneiderin machen das ist mein Traumberuf Luana ich wünsche dir dass du alle deine Ziele erreichst danke für das schöne Gespräch es war echt schön herzlichen Dank': {
          literal: 'У нас сегодня в студии молодая дама с большим талантом сердечно добро пожаловать Луана привет спасибо за приглашение откуда приходишь ты собственно моя родина есть Албания но мы есть в Гамбург переехали когда я ещё очень маленькой была Луана ты делаешь что-то совсем особенное новая мода из старой моды расскажи нам немного больше об этом с 15 имею я начала женскую моду делать идея есть старую женскую или мужскую одежду использовать чтобы из этого новую женскую одежду делать очень креативно подумано человек мог бы это также мода-переработка называть да точно это делает мне именно очень жаль как много одежды просто только в шкафу лежит или даже в мусор приходит тут имеешь ты право опиши нам же раз твою моду ярко сказала бы я спонтанно мои клиентки любят цвета больше всего продаются яркие лоскутные футболки особенно важно есть мне конечно также что предметы одежды всё равно будь то футболка брюки или платье удобные есть человек может тебя и твою одежду в интернете найти или да точно на моём блоге даёт это много фото и идей что человек с старой одеждой делать может через мой блог имеют люди меня и мою моду узнали на моём веб-сайте может человек все предметы одежды видеть и конечно онлайн покупать Луана ты есть ещё так молода но так активна как справляешься ты это по времени в момент делаю я это только в моём свободном времени итак главным образом в выходные ибо я должна также много для школы учиться после школы хочу я не учиться а обучение к портнихе делать это есть мой профессия-мечта Луана я желаю тебе что ты все твои цели достигнешь спасибо за красивый разговор это было действительно красиво сердечное спасибо',
          literary: 'У нас сегодня в студии молодая девушка с большим талантом. Добро пожаловать, Луана! Привет, спасибо за приглашение. Откуда ты родом? Моя родина — Албания, но мы переехали в Гамбург, когда я была ещё маленькой. Луана, ты делаешь кое-что особенное — новую моду из старой. Расскажи подробнее. В 15 лет я начала делать женскую одежду. Идея — использовать старую одежду, чтобы создавать новую. Можно назвать это переработкой моды. Мне жаль, что столько одежды лежит в шкафу или попадает в мусор. Опиши свою моду. Яркая! Мои клиентки любят цвета, лучше всего продаются лоскутные футболки. Важно, чтобы одежда была удобной. В моём блоге много фото и идей, а на сайте можно всё купить онлайн. Ты так молода и активна, как справляешься? Пока только в свободное время, в основном по выходным, потому что нужно учиться. После школы хочу не учиться в вузе, а стать портнихой — это моя профессия мечты. Желаю тебе достичь всех целей! Спасибо за прекрасную беседу!'
        },
      },
      vocabulary: [
        { de: 'das Studio', plural: 'die Studios', ru: 'студия', gender: 'neutrum', collocation: 'im Studio', example: 'Bei uns heute im Studio eine junge Dame mit großem Talent.' },
        { de: 'das Talent', plural: 'die Talente', ru: 'талант', gender: 'neutrum', collocation: 'mit großem Talent', example: 'Bei uns heute im Studio eine junge Dame mit großem Talent.' },
        { de: 'das Heimatland', plural: 'die Heimatländer', ru: 'родина', gender: 'neutrum', collocation: 'mein Heimatland', example: 'Mein Heimatland ist Albanien.' },
        { de: 'die Mode', plural: 'die Moden', ru: 'мода', gender: 'feminin', collocation: 'neue Mode aus alter Mode', example: 'Neue Mode aus alter Mode.' },
        { de: 'die Damenmode', ru: 'женская мода', gender: 'feminin', collocation: 'Damenmode machen', example: 'Mit 15 habe ich angefangen Damenmode zu machen.' },
        { de: 'die Kleidung', ru: 'одежда', gender: 'feminin', collocation: 'alte Kleidung', example: 'Es tut mir sehr leid wie viel Kleidung einfach nur im Schrank liegt.' },
        { de: 'der Schrank', plural: 'die Schränke', ru: 'шкаф', gender: 'maskulin', collocation: 'im Schrank liegen', example: 'Wie viel Kleidung einfach nur im Schrank liegt.' },
        { de: 'der Müll', ru: 'мусор', gender: 'maskulin', collocation: 'in den Müll kommen', example: 'Oder sogar in den Müll kommt.' },
        { de: 'die Kundin', plural: 'die Kundinnen', ru: 'клиентка', gender: 'feminin', collocation: 'meine Kundinnen', example: 'Meine Kundinnen lieben die Farben.' },
        { de: 'das Kleidungsstück', plural: 'die Kleidungsstücke', ru: 'предмет одежды', gender: 'neutrum', collocation: 'die Kleidungsstücke sind bequem', example: 'Dass die Kleidungsstücke egal ob T-Shirt Hose oder Kleid bequem sind.' },
        { de: 'der Blog', plural: 'die Blogs', ru: 'блог', gender: 'maskulin', collocation: 'auf meinem Blog', example: 'Auf meinem Blog gibt es viele Fotos und Ideen.' },
        { de: 'die Webseite', plural: 'die Webseiten', ru: 'веб-сайт', gender: 'feminin', collocation: 'auf meiner Webseite', example: 'Auf meiner Webseite kann man alle Kleidungsstücke sehen.' },
        { de: 'die Freizeit', ru: 'свободное время', gender: 'feminin', collocation: 'in meiner Freizeit', example: 'Im Moment mache ich es nur in meiner Freizeit.' },
        { de: 'die Schule', plural: 'die Schulen', ru: 'школа', gender: 'feminin', collocation: 'für die Schule lernen', example: 'Ich muss auch viel für die Schule lernen.' },
        { de: 'die Ausbildung', plural: 'die Ausbildungen', ru: 'профессиональное обучение', gender: 'feminin', collocation: 'eine Ausbildung machen', example: 'Nach der Schule möchte ich eine Ausbildung zur Modeschneiderin machen.' },
        { de: 'die Modeschneiderin', plural: 'die Modeschneiderinnen', ru: 'портниха', gender: 'feminin', collocation: 'Ausbildung zur Modeschneiderin', example: 'Eine Ausbildung zur Modeschneiderin machen.' },
        { de: 'der Traumberuf', plural: 'die Traumberufe', ru: 'профессия мечты', gender: 'maskulin', collocation: 'mein Traumberuf', example: 'Das ist mein Traumberuf.' },
        { de: 'das Ziel', plural: 'die Ziele', ru: 'цель', gender: 'neutrum', collocation: 'Ziele erreichen', example: 'Ich wünsche dir dass du alle deine Ziele erreichst.' },
        { de: 'anfangen', ru: 'начинать', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Mit 15 habe ich angefangen Damenmode zu machen.' },
        { de: 'benutzen', ru: 'использовать', type: 'verb', forms: 'benutzt, benutzte, hat benutzt', example: 'Die Idee ist alte Damen oder Herrenkleidung zu benutzen.' },
        { de: 'kennenlernen', ru: 'знакомиться', type: 'verb', forms: 'lernt kennen, lernte kennen, hat kennengelernt', example: 'Über meinem Blog haben die Leute mich und meine Mode kennengelernt.' },
        { de: 'erreichen', ru: 'достигать', type: 'verb', forms: 'erreicht, erreichte, hat erreicht', example: 'Ich wünsche dir dass du alle deine Ziele erreichst.' },
        { de: 'bunt', ru: 'яркий, пёстрый', type: 'adj', example: 'Bunt würde ich spontan sagen.' },
        { de: 'bequem', ru: 'удобный', type: 'adj', example: 'Dass die Kleidungsstücke bequem sind.' },
        { de: 'kreativ', ru: 'креативный', type: 'adj', example: 'Sehr kreativ gedacht.' },
      ],
      practiceSentences: [
        { de: 'Ich komme aus Berlin.', ru: 'Я из Берлина.', note: 'V2' },
        { de: 'Wir sind nach München gezogen.', ru: 'Мы переехали в Мюнхен.', note: 'Perfekt с sein' },
        { de: 'Sie hat angefangen zu arbeiten.', ru: 'Она начала работать.', note: 'Perfekt + zu + Infinitiv' },
        { de: 'Ich mache das, um Geld zu sparen.', ru: 'Я делаю это, чтобы экономить деньги.', note: 'um...zu конструкция' },
        { de: 'Nach der Arbeit gehe ich heim.', ru: 'После работы я иду домой.', note: 'V2 после обстоятельства' },
      ],
      question: {
        de: 'Will Luana nach der Schule studieren?',
        ru: 'Хочет ли Луана учиться в университете после школы?',
        options: [
          { de: 'Ja, sie möchte Mode studieren', ru: 'Да, она хочет учить моду' },
          { de: 'Nein, sie möchte eine Ausbildung zur Modeschneiderin machen', ru: 'Нет, она хочет получить профессию портнихи' },
          { de: 'Ja, sie möchte Journalistin werden', ru: 'Да, она хочет стать журналисткой' },
        ],
        correct: 1,
        explanation: 'Луана говорит: "nach der Schule möchte ich nicht studieren sondern eine Ausbildung zur Modeschneiderin machen".'
      }
    },
  ],

  /* ─── Промты ─── */
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören #25):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Möbelmangold).',
    },
  },
};
LESSONS.push(LESSON_29);
