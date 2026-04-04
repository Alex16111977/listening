/* ═══════════════════════════════════════════════════════════
   Lesson 26 — Goethe Zertifikat A2 Hören Teil 1-4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_26 = {
  id: 'lesson-26',
  number: 26,
  title: 'Goethe A2 Hören — Verkehr, Besprechung, Dialoge, Interview',
  subtitle: 'Radio City Verkehr, NDR 2 Programm, Buslinie 143, Gewinnspiel, Sommerfest und mehr',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-26',
  videoUrl: 'https://www.youtube.com/watch?v=Hlq24tX9zCs',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Radio City Verkehr',
      type: 'объявление о пробках',
      text: 'Hier Radio City mit dem Verkehr. Stau gibt es auf folgenden Autobahnen: A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz 5 km Stau nach einem Unfall. A40 Richtung Venlo zwischen Mülheim-Styrum und Kreuz Duisburg auch 5 km Stau, der Grund ist eine Baustelle. Und als letztes auf der A52 Richtung Düsseldorf ist wieder freie Fahrt.',
      sentenceTranslations: {
        'Hier Radio City mit dem Verkehr.': { literal: 'Здесь Радио Сити с движением', literary: 'Радио Сити сообщает о дорожной обстановке.' },
        'Stau gibt es auf folgenden Autobahnen: A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz 5 km Stau nach einem Unfall.': { literal: 'Пробка есть на следующих автобанах: А2 направление Ганновер между Дортмунд-Нордост и Каменер Кройц 5 км пробка после аварии', literary: 'На следующих автострадах пробки: на А2 в сторону Ганновера между Дортмунд-Нордост и развязкой Камен — 5 км пробка из-за ДТП.' },
        'A40 Richtung Venlo zwischen Mülheim-Styrum und Kreuz Duisburg auch 5 km Stau, der Grund ist eine Baustelle.': { literal: 'А40 направление Венло между Мюльхайм-Штюрум и развязка Дуйсбург тоже 5 км пробка, причина есть стройка', literary: 'На А40 в сторону Венло между Мюльхайм-Штюрум и развязкой Дуйсбург тоже 5 км пробка, причина — стройка.' },
        'Und als letztes auf der A52 Richtung Düsseldorf ist wieder freie Fahrt.': { literal: 'И как последнее на А52 направление Дюссельдорф есть снова свободный проезд', literary: 'И наконец, на А52 в сторону Дюссельдорфа снова свободное движение.' },
      },
      vocabulary: [
        { de: 'der Verkehr', ru: 'движение, транспорт', gender: 'maskulin', collocation: 'mit dem Verkehr', example: 'Hier Radio City mit dem Verkehr.' },
        { de: 'der Stau', plural: 'die Staus', ru: 'пробка', gender: 'maskulin', collocation: '5 km Stau', example: 'Stau gibt es auf folgenden Autobahnen.' },
        { de: 'die Autobahn', plural: 'die Autobahnen', ru: 'автострада', gender: 'feminin', collocation: 'auf der Autobahn', example: 'Stau gibt es auf folgenden Autobahnen.' },
        { de: 'die Richtung', plural: 'die Richtungen', ru: 'направление', gender: 'feminin', collocation: 'Richtung Hannover', example: 'A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz.' },
        { de: 'der Unfall', plural: 'die Unfälle', ru: 'авария, ДТП', gender: 'maskulin', collocation: 'nach einem Unfall', example: '5 km Stau nach einem Unfall.' },
        { de: 'die Baustelle', plural: 'die Baustellen', ru: 'стройка', gender: 'feminin', collocation: 'der Grund ist eine Baustelle', example: 'Der Grund ist eine Baustelle.' },
        { de: 'die Fahrt', plural: 'die Fahrten', ru: 'поездка, движение', gender: 'feminin', collocation: 'freie Fahrt', example: 'Auf der A52 ist wieder freie Fahrt.' },
        { de: 'das Kreuz', plural: 'die Kreuze', ru: 'развязка (дорожная)', gender: 'neutrum', collocation: 'Kamener Kreuz', example: 'Zwischen Dortmund Nordost und Kamener Kreuz.' },
        { de: 'geben', ru: 'давать; es gibt — имеется', type: 'verb', forms: 'gibt, gab, hat gegeben', example: 'Stau gibt es auf folgenden Autobahnen.' },
        { de: 'folgend', ru: 'следующий', type: 'adj', example: 'Stau gibt es auf folgenden Autobahnen.' },
        { de: 'frei', ru: 'свободный', type: 'adj', example: 'Auf der A52 ist wieder freie Fahrt.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute viel Verkehr.', ru: 'Сегодня много транспорта.', note: 'gibt на V2' },
        { de: 'Auf der Straße ist ein Stau.', ru: 'На дороге пробка.', note: 'ist на V2' },
        { de: 'Der Bus fährt Richtung Zentrum.', ru: 'Автобус едет в сторону центра.', note: 'fährt на V2' },
        { de: 'Nach dem Unfall kam die Polizei.', ru: 'После аварии приехала полиция.', note: 'kam на V2' },
        { de: 'Zwischen Hamburg und Berlin gibt es Staus.', ru: 'Между Гамбургом и Берлином есть пробки.', note: 'gibt на V2' },
      ],
      question: {
        de: 'Auf welcher Autobahn gibt es keinen Stau?',
        ru: 'На какой автостраде нет пробок?',
        options: [
          { de: 'A2', ru: 'A2' },
          { de: 'A40', ru: 'A40' },
          { de: 'A52', ru: 'A52' },
        ],
        correct: 2,
        explanation: 'В тексте говорится: "auf der A52 Richtung Düsseldorf ist wieder freie Fahrt" (на A52 снова свободное движение).'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'NDR 2 Programm',
      type: 'программа передач',
      text: 'NDR 2, es ist 13:55 Uhr. Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr. Dazu gibt es um 14 Uhr das Nachmittagsgespräch Verkehr in der Großstadt. Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor. Und um 18 Uhr fragen wir Sie: Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen? Rufen Sie uns gern dazu an, und das alles natürlich wie immer mit der aktuellsten Musik.',
      sentenceTranslations: {
        'NDR 2, es ist 13:55 Uhr.': { literal: 'НДР 2, это есть 13:55 часов', literary: 'НДР 2, время 13:55.' },
        'Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr.': { literal: 'Сегодня идёт оно в нашей передаче о теме экологичный транспорт', literary: 'Сегодня в нашей передаче речь пойдёт об экологичном транспорте.' },
        'Dazu gibt es um 14 Uhr das Nachmittagsgespräch Verkehr in der Großstadt.': { literal: 'К-тому есть в 14 часов послеобеденная-беседа транспорт в большом-городе', literary: 'Для этого в 14 часов послеобеденная беседа о транспорте в большом городе.' },
        'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.': { literal: 'С 16 до 17 часов представляем мы вам новейшие электросамокаты в сравнении', literary: 'С 16 до 17 часов мы представим вам обзор новейших электросамокатов.' },
        'Und um 18 Uhr fragen wir Sie: Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen?': { literal: 'И в 18 часов спрашиваем мы вас: что есть ваши опыты с экологичными транспортными-средствами?', literary: 'А в 18 часов мы спросим вас: какой у вас опыт с экологичным транспортом?' },
        'Rufen Sie uns gern dazu an, und das alles natürlich wie immer mit der aktuellsten Musik.': { literal: 'Звоните вы нам охотно к-этому, и это всё естественно как всегда с актуальнейшей музыкой', literary: 'Звоните нам по этому поводу, и всё это, конечно, как всегда, с самой актуальной музыкой.' },
      },
      vocabulary: [
        { de: 'die Sendung', plural: 'die Sendungen', ru: 'передача', gender: 'feminin', collocation: 'in unserer Sendung', example: 'Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr.' },
        { de: 'das Thema', plural: 'die Themen', ru: 'тема', gender: 'neutrum', collocation: 'um das Thema', example: 'Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr.' },
        { de: 'die Großstadt', plural: 'die Großstädte', ru: 'большой город', gender: 'feminin', collocation: 'in der Großstadt', example: 'Dazu gibt es um 14 Uhr das Nachmittagsgespräch Verkehr in der Großstadt.' },
        { de: 'der E-Scooter', plural: 'die E-Scooter', ru: 'электросамокат', gender: 'maskulin', collocation: 'die neuesten E-Scooter', example: 'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.' },
        { de: 'der Vergleich', plural: 'die Vergleiche', ru: 'сравнение', gender: 'maskulin', collocation: 'im Vergleich', example: 'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.' },
        { de: 'die Erfahrung', plural: 'die Erfahrungen', ru: 'опыт', gender: 'feminin', collocation: 'Ihre Erfahrungen', example: 'Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen?' },
        { de: 'das Fahrzeug', plural: 'die Fahrzeuge', ru: 'транспортное средство', gender: 'neutrum', collocation: 'umweltfreundliche Fahrzeuge', example: 'Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen?' },
        { de: 'vorstellen', ru: 'представлять', type: 'verb', forms: 'stellt vor, stellte vor, hat vorgestellt', example: 'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Rufen Sie uns gern dazu an.' },
        { de: 'umweltfreundlich', ru: 'экологичный', type: 'adj', example: 'Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr.' },
        { de: 'aktuell', ru: 'актуальный', type: 'adj', example: 'Und das alles natürlich wie immer mit der aktuellsten Musik.' },
      ],
      practiceSentences: [
        { de: 'Um 14 Uhr beginnt die Sendung.', ru: 'В 14 часов начинается передача.', note: 'beginnt на V2' },
        { de: 'Es geht heute um Sport.', ru: 'Сегодня речь о спорте.', note: 'geht на V2' },
        { de: 'Wir stellen neue Bücher vor.', ru: 'Мы представляем новые книги.', note: 'stellen на V2, vor в конце' },
        { de: 'Ruft mich morgen an!', ru: 'Позвоните мне завтра!', note: 'Ruft на V1 (императив), an в конце' },
        { de: 'Die Musik ist sehr aktuell.', ru: 'Музыка очень актуальная.', note: 'ist на V2' },
      ],
      question: {
        de: 'Wann soll man anrufen?',
        ru: 'Во сколько нужно звонить?',
        options: [
          { de: 'Um 14 Uhr', ru: 'В 14:00' },
          { de: 'Um 16 Uhr', ru: 'В 16:00' },
          { de: 'Um 18 Uhr', ru: 'В 18:00' },
        ],
        correct: 2,
        explanation: 'В тексте: "um 18 Uhr fragen wir Sie... Rufen Sie uns gern dazu an" (в 18:00 звоните нам).'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Buslinie 143',
      type: 'объявление о транспорте',
      text: 'Wir kommen zum Verkehr. Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof. Sie beginnt am Marientor. Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.',
      sentenceTranslations: {
        'Wir kommen zum Verkehr.': { literal: 'Мы приходим к движению', literary: 'Переходим к транспортным новостям.' },
        'Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof.': { literal: 'Автобусная линия 143 едет с сегодня до 20 февраля не от главного вокзала', literary: 'Автобус №143 с сегодняшнего дня до 20 февраля не отправляется от главного вокзала.' },
        'Sie beginnt am Marientor.': { literal: 'Она начинается у Мариентор', literary: 'Маршрут начинается от Мариентор.' },
        'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.': { literal: 'Пожалуйста используйте от главного вокзала трамвай М9 до Мариентор или езжайте с метро до Хоймаркт и пересаживайтесь там', literary: 'Пожалуйста, от главного вокзала пользуйтесь трамваем М9 до Мариентор или поезжайте на метро до Хоймаркт и пересядьте там.' },
      },
      vocabulary: [
        { de: 'die Buslinie', plural: 'die Buslinien', ru: 'автобусная линия', gender: 'feminin', collocation: 'die Buslinie 143', example: 'Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof.' },
        { de: 'der Hauptbahnhof', plural: 'die Hauptbahnhöfe', ru: 'главный вокзал', gender: 'maskulin', collocation: 'ab Hauptbahnhof', example: 'Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof.' },
        { de: 'die Straßenbahn', plural: 'die Straßenbahnen', ru: 'трамвай', gender: 'feminin', collocation: 'die Straßenbahn M9', example: 'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor.' },
        { de: 'die U-Bahn', plural: 'die U-Bahnen', ru: 'метро', gender: 'feminin', collocation: 'mit der U-Bahn', example: 'Fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.' },
        { de: 'fahren', ru: 'ехать', type: 'verb', forms: 'fährt, fuhr, ist gefahren', example: 'Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof.' },
        { de: 'beginnen', ru: 'начинаться', type: 'verb', forms: 'beginnt, begann, hat begonnen', example: 'Sie beginnt am Marientor.' },
        { de: 'nutzen', ru: 'пользоваться', type: 'verb', forms: 'nutzt, nutzte, hat genutzt', example: 'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor.' },
        { de: 'umsteigen', ru: 'пересаживаться', type: 'verb', forms: 'steigt um, stieg um, ist umgestiegen', example: 'Fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.' },
      ],
      practiceSentences: [
        { de: 'Der Bus fährt ab Bahnhof.', ru: 'Автобус отправляется от вокзала.', note: 'fährt на V2' },
        { de: 'Die Linie beginnt am Markt.', ru: 'Маршрут начинается у рынка.', note: 'beginnt на V2' },
        { de: 'Bitte steigen Sie hier um.', ru: 'Пожалуйста, пересядьте здесь.', note: 'steigen на V1, um в конце' },
        { de: 'Von Montag bis Freitag arbeite ich.', ru: 'С понедельника по пятницу я работаю.', note: 'arbeite на V2' },
        { de: 'Nutzen Sie die U-Bahn!', ru: 'Пользуйтесь метро!', note: 'Nutzen на V1 (императив)' },
      ],
      question: {
        de: 'Wo startet die Buslinie 143 ab heute?',
        ru: 'Откуда отправляется автобус №143 с сегодняшнего дня?',
        options: [
          { de: 'Am Hauptbahnhof', ru: 'От главного вокзала' },
          { de: 'Am Marientor', ru: 'От Мариентор' },
          { de: 'Am Heumarkt', ru: 'От Хоймаркт' },
        ],
        correct: 1,
        explanation: 'Прямо сказано: "Sie beginnt am Marientor" (маршрут начинается от Мариентор).'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Gewinnspiel',
      type: 'радиоигра',
      text: 'Hier sind wir wieder mit unserem Gewinnspiel. Die Preisfrage ist heute: Wo möchten die Deutschen gern einmal ein Jahr lang leben? A in London, B in Paris oder C in Rom? Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London. Rufen Sie uns an, die Nummer ist 0406978453, und mit ein bisschen Glück sind Sie schon bald in der Stadt an der Themse.',
      sentenceTranslations: {
        'Hier sind wir wieder mit unserem Gewinnspiel.': { literal: 'Здесь есть мы снова с нашей игрой-розыгрышем', literary: 'Мы снова с вами с нашей викториной.' },
        'Die Preisfrage ist heute: Wo möchten die Deutschen gern einmal ein Jahr lang leben?': { literal: 'Призовой-вопрос есть сегодня: где хотели бы немцы охотно однажды один год долго жить?', literary: 'Призовой вопрос сегодня: где немцы хотели бы пожить один год?' },
        'A in London, B in Paris oder C in Rom?': { literal: 'А в Лондоне, Б в Париже или В в Риме?', literary: 'A в Лондоне, B в Париже или C в Риме?' },
        'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.': { literal: 'Первый звонящий с правильным ответом выигрывает поездку в Лондон', literary: 'Первый дозвонившийся с правильным ответом выиграет поездку в Лондон.' },
        'Rufen Sie uns an, die Nummer ist 0406978453, und mit ein bisschen Glück sind Sie schon bald in der Stadt an der Themse.': { literal: 'Звоните вы нам, номер есть 0406978453, и с немного удачи есть вы уже скоро в городе на Темзе', literary: 'Звоните нам, номер 0406978453, и с небольшой удачей вы скоро окажетесь в городе на Темзе.' },
      },
      vocabulary: [
        { de: 'das Gewinnspiel', plural: 'die Gewinnspiele', ru: 'викторина, розыгрыш', gender: 'neutrum', collocation: 'mit unserem Gewinnspiel', example: 'Hier sind wir wieder mit unserem Gewinnspiel.' },
        { de: 'die Preisfrage', plural: 'die Preisfragen', ru: 'призовой вопрос', gender: 'feminin', collocation: 'die Preisfrage ist heute', example: 'Die Preisfrage ist heute: Wo möchten die Deutschen gern einmal ein Jahr lang leben?' },
        { de: 'der Anrufer', plural: 'die Anrufer', ru: 'звонящий', gender: 'maskulin', collocation: 'der erste Anrufer', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
        { de: 'die Antwort', plural: 'die Antworten', ru: 'ответ', gender: 'feminin', collocation: 'mit der richtigen Antwort', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
        { de: 'die Reise', plural: 'die Reisen', ru: 'поездка', gender: 'feminin', collocation: 'eine Reise nach London', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
        { de: 'das Glück', ru: 'удача', gender: 'neutrum', collocation: 'mit ein bisschen Glück', example: 'Mit ein bisschen Glück sind Sie schon bald in der Stadt an der Themse.' },
        { de: 'leben', ru: 'жить', type: 'verb', forms: 'lebt, lebte, hat gelebt', example: 'Wo möchten die Deutschen gern einmal ein Jahr lang leben?' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
        { de: 'richtig', ru: 'правильный', type: 'adj', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte in Berlin leben.', ru: 'Я хотел бы жить в Берлине.', note: 'möchte на V2, leben в конце' },
        { de: 'Sie gewinnt einen Preis.', ru: 'Она выигрывает приз.', note: 'gewinnt на V2' },
        { de: 'Rufen Sie uns bitte an!', ru: 'Позвоните нам, пожалуйста!', note: 'Rufen на V1, an в конце' },
        { de: 'Mit Glück finde ich das.', ru: 'С удачей я найду это.', note: 'finde на V2' },
        { de: 'Wir fahren nach Paris.', ru: 'Мы едем в Париж.', note: 'fahren на V2' },
      ],
      question: {
        de: 'Was gewinnt man?',
        ru: 'Что можно выиграть?',
        options: [
          { de: 'Eine Reise nach Paris', ru: 'Поездку в Париж' },
          { de: 'Eine Reise nach London', ru: 'Поездку в Лондон' },
          { de: 'Eine Reise nach Rom', ru: 'Поездку в Рим' },
        ],
        correct: 1,
        explanation: 'В тексте: "Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Sommerfest',
      type: 'объявление о парковке',
      text: 'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz. Es gibt keine Parkplätze mehr im Stadtzentrum. Alle Parkhäuser sind bereits voll. Ab 9 dann dürfen Sie nicht mit dem Auto oder mit dem Motorrad fahren und man kann dort auch nicht parken. Bitte reisen Sie mit Bus und Bahn an.',
      sentenceTranslations: {
        'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz.': { literal: 'И здесь ещё одна информация для посетителей от летнего праздника на Родеплац', literary: 'А вот ещё информация для гостей летнего фестиваля на площади Роде.' },
        'Es gibt keine Parkplätze mehr im Stadtzentrum.': { literal: 'Это даёт никакие парковочные места больше в центре города', literary: 'В центре города больше нет парковочных мест.' },
        'Alle Parkhäuser sind bereits voll.': { literal: 'Все паркинги есть уже полные', literary: 'Все парковки уже заполнены.' },
        'Ab 9 dann dürfen Sie nicht mit dem Auto oder mit dem Motorrad fahren und man kann dort auch nicht parken.': { literal: 'С 9 тогда можете вы не с автомобилем или с мотоциклом ехать и человек может там тоже не парковать', literary: 'С 9 часов нельзя ехать на машине или на мотоцикле, и парковаться там тоже нельзя.' },
        'Bitte reisen Sie mit Bus und Bahn an.': { literal: 'Пожалуйста приезжайте вы с автобусом и поездом', literary: 'Пожалуйста, приезжайте на автобусе или поезде.' },
      },
      vocabulary: [
        { de: 'der Besucher', plural: 'die Besucher', ru: 'посетитель', gender: 'maskulin', collocation: 'für die Besucher', example: 'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz.' },
        { de: 'das Sommerfest', plural: 'die Sommerfeste', ru: 'летний праздник', gender: 'neutrum', collocation: 'vom Sommerfest', example: 'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz.' },
        { de: 'der Parkplatz', plural: 'die Parkplätze', ru: 'парковочное место', gender: 'maskulin', collocation: 'keine Parkplätze mehr', example: 'Es gibt keine Parkplätze mehr im Stadtzentrum.' },
        { de: 'das Stadtzentrum', plural: 'die Stadtzentren', ru: 'центр города', gender: 'neutrum', collocation: 'im Stadtzentrum', example: 'Es gibt keine Parkplätze mehr im Stadtzentrum.' },
        { de: 'das Parkhaus', plural: 'die Parkhäuser', ru: 'парковка (здание)', gender: 'neutrum', collocation: 'alle Parkhäuser', example: 'Alle Parkhäuser sind bereits voll.' },
        { de: 'das Motorrad', plural: 'die Motorräder', ru: 'мотоцикл', gender: 'neutrum', collocation: 'mit dem Motorrad', example: 'Ab 9 dann dürfen Sie nicht mit dem Auto oder mit dem Motorrad fahren.' },
        { de: 'dürfen', ru: 'разрешается, можно', type: 'verb', forms: 'darf, durfte, hat gedurft', example: 'Ab 9 dann dürfen Sie nicht mit dem Auto oder mit dem Motorrad fahren.' },
        { de: 'parken', ru: 'парковать', type: 'verb', forms: 'parkt, parkte, hat geparkt', example: 'Man kann dort auch nicht parken.' },
        { de: 'anreisen', ru: 'приезжать', type: 'verb', forms: 'reist an, reiste an, ist angereist', example: 'Bitte reisen Sie mit Bus und Bahn an.' },
        { de: 'voll', ru: 'полный, заполненный', type: 'adj', example: 'Alle Parkhäuser sind bereits voll.' },
        { de: 'bereits', ru: 'уже', type: 'adv', example: 'Alle Parkhäuser sind bereits voll.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute ein Fest.', ru: 'Сегодня есть праздник.', note: 'gibt на V2' },
        { de: 'Das Parkhaus ist voll.', ru: 'Парковка полная.', note: 'ist на V2' },
        { de: 'Sie dürfen hier nicht parken.', ru: 'Здесь нельзя парковать.', note: 'dürfen на V2, parken в конце' },
        { de: 'Reisen Sie mit dem Zug an!', ru: 'Приезжайте на поезде!', note: 'Reisen на V1, an в конце' },
        { de: 'Ab Montag arbeite ich wieder.', ru: 'С понедельника я снова работаю.', note: 'arbeite на V2' },
      ],
      question: {
        de: 'Womit darf man zum Sommerfest reisen?',
        ru: 'На чём можно приехать на летний фестиваль?',
        options: [
          { de: 'Mit dem Auto', ru: 'На машине' },
          { de: 'Mit Bus und Bahn', ru: 'На автобусе и поезде' },
          { de: 'Mit dem Motorrad', ru: 'На мотоцикле' },
        ],
        correct: 1,
        explanation: 'В конце объявления: "Bitte reisen Sie mit Bus und Bahn an" (пожалуйста, приезжайте на автобусе или поезде).'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Besprechung',
      type: 'диалог о встрече',
      text: 'Guten Morgen, Harald! Morgen, Katharina! Ich bin wohl die erste? Ja, die Besprechung beginnt eigentlich in zwei Minuten. Ich habe ja gehofft, dass wir einmal pünktlich anfangen können. Nur Tina und Adam haben angerufen, dass sie später kommen. Tina muss wohl noch tanken. Warum ist sie nicht früher losgefahren? Na ja. Und Adam hat Zahnschmerzen, er kommt direkt vom Arzt hierher. Aber die anderen? Weißt du etwas? Also, Mario habe ich auf dem Weg zum Besprechungsraum getroffen. Er holt sich noch schnell einen Kaffee aus der Cafeteria. Und Carla steht am Kopierer, bestimmt kopiert sie noch etwas für uns alle. Und was ist mit Oksana? Oksana, die hat doch heute frei. Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit in den Zoo, glaube ich, oder... Nein, an die Spree. Sie machen eine Flussfahrt mit Picknick. Dann fehlt ja nur noch Robert. Ach ja, entschuldigung, das habe ich ganz vergessen. Er hat vorhin vom Bahnhof aus angerufen und gesagt, dass sein Zug mal wieder Verspätung hatte. Er kommt sicher jeden Moment. Na hoffentlich. Ich glaube, ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen. So geht das nicht weiter.',
      sentenceTranslations: {
        'Guten Morgen, Harald!': { literal: 'Доброе утро, Харальд!', literary: 'Доброе утро, Харальд!' },
        'Morgen, Katharina!': { literal: 'Утро, Катарина!', literary: 'Доброе утро, Катарина!' },
        'Ich bin wohl die erste?': { literal: 'Я есть наверное первая?', literary: 'Я, наверное, первая?' },
        'Ja, die Besprechung beginnt eigentlich in zwei Minuten.': { literal: 'Да, совещание начинается собственно через две минуты', literary: 'Да, совещание начинается через две минуты.' },
        'Ich habe ja gehofft, dass wir einmal pünktlich anfangen können.': { literal: 'Я имела ведь надеялась, что мы однажды пунктуально начать можем', literary: 'Я так надеялась, что мы хоть раз начнём вовремя.' },
        'Nur Tina und Adam haben angerufen, dass sie später kommen.': { literal: 'Только Тина и Адам имеют позвонили, что они позже придут', literary: 'Только Тина и Адам позвонили, что придут позже.' },
        'Tina muss wohl noch tanken.': { literal: 'Тина должна наверное ещё заправиться', literary: 'Тине, видимо, нужно ещё заправиться.' },
        'Warum ist sie nicht früher losgefahren?': { literal: 'Почему есть она не раньше уехала?', literary: 'Почему она не выехала раньше?' },
        'Na ja.': { literal: 'Ну да', literary: 'Ну да.' },
        'Und Adam hat Zahnschmerzen, er kommt direkt vom Arzt hierher.': { literal: 'И Адам имеет зубную-боль, он приходит прямо от врача сюда', literary: 'А у Адама болят зубы, он идёт прямо от врача.' },
        'Aber die anderen?': { literal: 'Но другие?', literary: 'А остальные?' },
        'Weißt du etwas?': { literal: 'Знаешь ты что-то?', literary: 'Ты что-нибудь знаешь?' },
        'Also, Mario habe ich auf dem Weg zum Besprechungsraum getroffen.': { literal: 'Итак, Марио имею я на пути к комнате-совещаний встретил', literary: 'Ну, Марио я встретила по пути в переговорную.' },
        'Er holt sich noch schnell einen Kaffee aus der Cafeteria.': { literal: 'Он берёт себе ещё быстро кофе из кафетерия', literary: 'Он быстренько берёт себе кофе из кафетерия.' },
        'Und Carla steht am Kopierer, bestimmt kopiert sie noch etwas für uns alle.': { literal: 'И Карла стоит у копира, точно копирует она ещё что-то для нас всех', literary: 'А Карла стоит у копира, наверняка копирует что-то для нас.' },
        'Und was ist mit Oksana?': { literal: 'И что есть с Оксаной?', literary: 'А что с Оксаной?' },
        'Oksana, die hat doch heute frei.': { literal: 'Оксана, она имеет же сегодня свободно', literary: 'Оксана, у неё же сегодня выходной.' },
        'Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit in den Zoo, glaube ich, oder...': { literal: 'Она едет при какой-то школьной-экскурсии от её дочери с в зоопарк, верю я, или...', literary: 'Она участвует в какой-то школьной экскурсии дочери в зоопарк, кажется, или...' },
        'Nein, an die Spree.': { literal: 'Нет, на Шпрее', literary: 'Нет, на Шпрее.' },
        'Sie machen eine Flussfahrt mit Picknick.': { literal: 'Они делают речную-прогулку с пикником', literary: 'Они делают речную прогулку с пикником.' },
        'Dann fehlt ja nur noch Robert.': { literal: 'Тогда отсутствует же только ещё Роберт', literary: 'Тогда не хватает только Роберта.' },
        'Ach ja, entschuldigung, das habe ich ganz vergessen.': { literal: 'Ах да, извинение, это имею я совсем забыл', literary: 'Ах да, извини, я совсем забыла.' },
        'Er hat vorhin vom Bahnhof aus angerufen und gesagt, dass sein Zug mal wieder Verspätung hatte.': { literal: 'Он имеет недавно с вокзала позвонил и сказал, что его поезд опять опоздание имел', literary: 'Он недавно звонил с вокзала и сказал, что его поезд опять опоздал.' },
        'Er kommt sicher jeden Moment.': { literal: 'Он приходит точно каждый момент', literary: 'Он точно скоро придёт.' },
        'Na hoffentlich.': { literal: 'Ну надеюсь', literary: 'Ну, будем надеяться.' },
        'Ich glaube, ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen.': { literal: 'Я верю, я должна раз тему пунктуальность на повестку-дня поставить', literary: 'Думаю, мне нужно поставить вопрос о пунктуальности на повестку дня.' },
        'So geht das nicht weiter.': { literal: 'Так идёт это не дальше', literary: 'Так дальше продолжаться не может.' },
      },
      vocabulary: [
        { de: 'die Besprechung', plural: 'die Besprechungen', ru: 'совещание', gender: 'feminin', collocation: 'die Besprechung beginnt', example: 'Ja, die Besprechung beginnt eigentlich in zwei Minuten.' },
        { de: 'die Cafeteria', plural: 'die Cafeterien', ru: 'кафетерий', gender: 'feminin', collocation: 'aus der Cafeteria', example: 'Er holt sich noch schnell einen Kaffee aus der Cafeteria.' },
        { de: 'der Kopierer', plural: 'die Kopierer', ru: 'копир', gender: 'maskulin', collocation: 'am Kopierer stehen', example: 'Und Carla steht am Kopierer.' },
        { de: 'der Schulausflug', plural: 'die Schulausflüge', ru: 'школьная экскурсия', gender: 'maskulin', collocation: 'bei einem Schulausflug mitfahren', example: 'Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit.' },
        { de: 'die Flussfahrt', plural: 'die Flussfahrten', ru: 'речная прогулка', gender: 'feminin', collocation: 'eine Flussfahrt machen', example: 'Sie machen eine Flussfahrt mit Picknick.' },
        { de: 'die Verspätung', plural: 'die Verspätungen', ru: 'опоздание', gender: 'feminin', collocation: 'Verspätung haben', example: 'Er hat vorhin vom Bahnhof aus angerufen und gesagt, dass sein Zug mal wieder Verspätung hatte.' },
        { de: 'die Tagesordnung', plural: 'die Tagesordnungen', ru: 'повестка дня', gender: 'feminin', collocation: 'auf die Tagesordnung setzen', example: 'Ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen.' },
        { de: 'die Pünktlichkeit', ru: 'пунктуальность', gender: 'feminin', collocation: 'das Thema Pünktlichkeit', example: 'Ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen.' },
        { de: 'anfangen', ru: 'начинать', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Ich habe ja gehofft, dass wir einmal pünktlich anfangen können.' },
        { de: 'tanken', ru: 'заправляться', type: 'verb', forms: 'tankt, tankte, hat getankt', example: 'Tina muss wohl noch tanken.' },
        { de: 'mitfahren', ru: 'ехать вместе', type: 'verb', forms: 'fährt mit, fuhr mit, ist mitgefahren', example: 'Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit.' },
        { de: 'pünktlich', ru: 'пунктуально, вовремя', type: 'adj', example: 'Ich habe ja gehofft, dass wir einmal pünktlich anfangen können.' },
        { de: 'wohl', ru: 'видимо, наверное', type: 'adv', example: 'Tina muss wohl noch tanken.' },
      ],
      practiceSentences: [
        { de: 'Die Besprechung beginnt gleich.', ru: 'Совещание начинается сейчас.', note: 'beginnt на V2' },
        { de: 'Er muss noch arbeiten.', ru: 'Ему нужно ещё работать.', note: 'muss на V2, arbeiten в конце' },
        { de: 'Ich hole mir einen Tee.', ru: 'Я возьму себе чай.', note: 'hole на V2, возвратное mir' },
        { de: 'Sie fährt morgen mit.', ru: 'Она поедет завтра (с нами).', note: 'fährt на V2, mit в конце' },
        { de: 'Der Zug hat Verspätung.', ru: 'Поезд опаздывает.', note: 'hat на V2' },
      ],
      question: {
        de: 'Wer holt sich einen Kaffee?',
        ru: 'Кто идёт за кофе?',
        options: [
          { de: 'Tina', ru: 'Тина' },
          { de: 'Mario', ru: 'Марио' },
          { de: 'Adam', ru: 'Адам' },
        ],
        correct: 1,
        explanation: '"Mario habe ich auf dem Weg zum Besprechungsraum getroffen. Er holt sich noch schnell einen Kaffee aus der Cafeteria."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 7,
      name: 'Schlüssel',
      type: 'диалог',
      text: 'Hast du meine Schlüssel gesehen? Ich kann sie nicht finden. Vielleicht liegen sie auf dem Küchentisch? Nein, dort sind sie nicht, und in meinem Rucksack habe ich auch schon nachgesehen. Guck mal, sie stecken noch im Schloss! Na, da kann ich ja lange suchen!',
      sentenceTranslations: {
        'Hast du meine Schlüssel gesehen?': { literal: 'Имеешь ты мои ключи увиденными?', literary: 'Ты видел мои ключи?' },
        'Ich kann sie nicht finden.': { literal: 'Я могу их не найти', literary: 'Я не могу их найти.' },
        'Vielleicht liegen sie auf dem Küchentisch?': { literal: 'Возможно лежат они на кухонном столе', literary: 'Может, они лежат на кухонном столе?' },
        'Nein, dort sind sie nicht, und in meinem Rucksack habe ich auch schon nachgesehen.': { literal: 'Нет, там есть они не, и в моём рюкзаке имею я тоже уже посмотрел', literary: 'Нет, там их нет, и в рюкзаке я тоже уже смотрел.' },
        'Guck mal, sie stecken noch im Schloss!': { literal: 'Смотри раз, они торчат ещё в замке!', literary: 'Смотри, они всё ещё торчат в замке!' },
        'Na, da kann ich ja lange suchen!': { literal: 'Ну, тут могу я же долго искать!', literary: 'Ну, тут я могу долго искать!' },
      },
      vocabulary: [
        { de: 'der Schlüssel', plural: 'die Schlüssel', ru: 'ключ', gender: 'maskulin', collocation: 'meine Schlüssel', example: 'Hast du meine Schlüssel gesehen?' },
        { de: 'der Küchentisch', plural: 'die Küchentische', ru: 'кухонный стол', gender: 'maskulin', collocation: 'auf dem Küchentisch', example: 'Vielleicht liegen sie auf dem Küchentisch?' },
        { de: 'der Rucksack', plural: 'die Rucksäcke', ru: 'рюкзак', gender: 'maskulin', collocation: 'in meinem Rucksack', example: 'In meinem Rucksack habe ich auch schon nachgesehen.' },
        { de: 'das Schloss', plural: 'die Schlösser', ru: 'замок', gender: 'neutrum', collocation: 'im Schloss stecken', example: 'Guck mal, sie stecken noch im Schloss!' },
        { de: 'liegen', ru: 'лежать', type: 'verb', forms: 'liegt, lag, hat gelegen', example: 'Vielleicht liegen sie auf dem Küchentisch?' },
        { de: 'nachsehen', ru: 'проверять, смотреть', type: 'verb', forms: 'sieht nach, sah nach, hat nachgesehen', example: 'In meinem Rucksack habe ich auch schon nachgesehen.' },
        { de: 'stecken', ru: 'торчать', type: 'verb', forms: 'steckt, steckte, hat gesteckt', example: 'Guck mal, sie stecken noch im Schloss!' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Na, da kann ich ja lange suchen!' },
      ],
      practiceSentences: [
        { de: 'Hast du den Schlüssel gefunden?', ru: 'Ты нашёл ключ?', note: 'Hast на V1, gefunden в конце' },
        { de: 'Die Tasche liegt auf dem Tisch.', ru: 'Сумка лежит на столе.', note: 'liegt на V2' },
        { de: 'Der Schlüssel steckt im Schloss.', ru: 'Ключ торчит в замке.', note: 'steckt на V2' },
        { de: 'Ich kann nicht finden.', ru: 'Я не могу найти.', note: 'kann на V2, finden в конце' },
        { de: 'Sie sucht ihren Rucksack.', ru: 'Она ищет свой рюкзак.', note: 'sucht на V2' },
      ],
      question: {
        de: 'Wo sind die Schlüssel?',
        ru: 'Где ключи?',
        options: [
          { de: 'Auf dem Küchentisch', ru: 'На кухонном столе' },
          { de: 'Im Rucksack', ru: 'В рюкзаке' },
          { de: 'Im Schloss', ru: 'В замке' },
        ],
        correct: 2,
        explanation: 'В конце диалога: "Sie stecken noch im Schloss" (они всё ещё торчат в замке).'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 8,
      name: 'Küchenschrank',
      type: 'диалог в магазине',
      text: 'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben. Was kostet der denn? Das ist ein Sonderangebot. Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1500 Euro an. Ich habe schon einen schönen Küchentisch mit Stühlen. Kann ich den Küchenschrank auch ohne Tisch und Stühle bekommen? Nein, tut mir leid. Aber hier drüben haben wir noch schöne Küchenschränke.',
      sentenceTranslations: {
        'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben.': { literal: 'Извинение, я интересую себя для кухонного шкафа вон там', literary: 'Извините, меня интересует кухонный шкаф вон там.' },
        'Was kostet der denn?': { literal: 'Что стоит тот же?', literary: 'Сколько же он стоит?' },
        'Das ist ein Sonderangebot.': { literal: 'Это есть специальное предложение', literary: 'Это специальное предложение.' },
        'Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1500 Euro an.': { literal: 'Кухонный шкаф предлагаем мы вместе с кухонным столом и деревянными стульями за только 1500 евро', literary: 'Кухонный шкаф мы предлагаем вместе с кухонным столом и деревянными стульями всего за 1500 евро.' },
        'Ich habe schon einen schönen Küchentisch mit Stühlen.': { literal: 'Я имею уже красивый кухонный стол со стульями', literary: 'У меня уже есть красивый кухонный стол со стульями.' },
        'Kann ich den Küchenschrank auch ohne Tisch und Stühle bekommen?': { literal: 'Могу я кухонный шкаф тоже без стола и стульев получить?', literary: 'Могу я купить шкаф без стола и стульев?' },
        'Nein, tut mir leid.': { literal: 'Нет, делает мне жаль', literary: 'Нет, к сожалению.' },
        'Aber hier drüben haben wir noch schöne Küchenschränke.': { literal: 'Но здесь там имеем мы ещё красивые кухонные шкафы', literary: 'Но вот здесь у нас есть ещё красивые кухонные шкафы.' },
      },
      vocabulary: [
        { de: 'der Küchenschrank', plural: 'die Küchenschränke', ru: 'кухонный шкаф', gender: 'maskulin', collocation: 'für den Küchenschrank', example: 'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben.' },
        { de: 'das Sonderangebot', plural: 'die Sonderangebote', ru: 'спецпредложение', gender: 'neutrum', collocation: 'ein Sonderangebot', example: 'Das ist ein Sonderangebot.' },
        { de: 'der Holzstuhl', plural: 'die Holzstühle', ru: 'деревянный стул', gender: 'maskulin', collocation: 'mit den Holzstühlen', example: 'Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1500 Euro an.' },
        { de: 'sich interessieren für', ru: 'интересоваться', type: 'verb', forms: 'interessiert sich, interessierte sich, hat sich interessiert', example: 'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben.' },
        { de: 'kosten', ru: 'стоить', type: 'verb', forms: 'kostet, kostete, hat gekostet', example: 'Was kostet der denn?' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'bietet an, bot an, hat angeboten', example: 'Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1500 Euro an.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Kann ich den Küchenschrank auch ohne Tisch und Stühle bekommen?' },
        { de: 'zusammen', ru: 'вместе', type: 'adv', example: 'Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1500 Euro an.' },
      ],
      practiceSentences: [
        { de: 'Ich interessiere mich für Möbel.', ru: 'Я интересуюсь мебелью.', note: 'interessiere на V2, возвратное mich' },
        { de: 'Was kostet dieser Stuhl?', ru: 'Сколько стоит этот стул?', note: 'kostet на V2' },
        { de: 'Wir bieten das günstig an.', ru: 'Мы предлагаем это выгодно.', note: 'bieten на V2, an в конце' },
        { de: 'Kann ich das kaufen?', ru: 'Могу я это купить?', note: 'Kann на V1, kaufen в конце' },
        { de: 'Der Schrank steht dort drüben.', ru: 'Шкаф стоит вон там.', note: 'steht на V2' },
      ],
      question: {
        de: 'Wofür interessiert sich der Mann?',
        ru: 'Чем интересуется мужчина?',
        options: [
          { de: 'Für den Küchentisch', ru: 'Кухонным столом' },
          { de: 'Für den Küchenschrank', ru: 'Кухонным шкафом' },
          { de: 'Für die Stühle', ru: 'Стульями' },
        ],
        correct: 1,
        explanation: 'Первая фраза покупателя: "Ich interessiere mich für den Küchenschrank dort drüben".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 9,
      name: 'Hamburg Ticket',
      type: 'диалог-заказ билетов',
      text: 'Hamburg Ticket, Krüger, guten Tag. Was kann ich für Sie tun? Guten Tag, ich würde gern für nächsten Samstag zwei Theaterkarten für Romeo und Julia bestellen. Oh, das tut mir leid, die Vorstellung ist leider schon ausgebucht. Schade. Gibt es denn noch Karten für das Konzert in der Laeiszhalle? Nein, da haben Sie aber wirklich Pech. Für das Konzert gibt es schon seit einem Monat keine Karten mehr. Wie ärgerlich! Gibt es denn noch Karten für das Eishockeyspiel am Samstagabend? Ja, da haben Sie Glück, da gibt es noch Restkarten.',
      sentenceTranslations: {
        'Hamburg Ticket, Krüger, guten Tag.': { literal: 'Гамбург Тикет, Крюгер, добрый день', literary: 'Гамбург Тикет, Крюгер, добрый день.' },
        'Was kann ich für Sie tun?': { literal: 'Что могу я для вас сделать?', literary: 'Чем могу помочь?' },
        'Guten Tag, ich würde gern für nächsten Samstag zwei Theaterkarten für Romeo und Julia bestellen.': { literal: 'Добрый день, я бы охотно для следующей субботы два театральных билета для Ромео и Джульетты заказать', literary: 'Добрый день, я хотел бы заказать два билета в театр на Ромео и Джульетту на следующую субботу.' },
        'Oh, das tut mir leid, die Vorstellung ist leider schon ausgebucht.': { literal: 'О, это делает мне жаль, представление есть к-сожалению уже распродано', literary: 'К сожалению, спектакль уже распродан.' },
        'Schade.': { literal: 'Жаль', literary: 'Жаль.' },
        'Gibt es denn noch Karten für das Konzert in der Laeiszhalle?': { literal: 'Есть же ещё билеты для концерта в Лайсцхалле?', literary: 'А на концерт в Лайсцхалле ещё есть билеты?' },
        'Nein, da haben Sie aber wirklich Pech.': { literal: 'Нет, тут имеете вы но действительно невезение', literary: 'Нет, тут вам действительно не повезло.' },
        'Für das Konzert gibt es schon seit einem Monat keine Karten mehr.': { literal: 'Для концерта есть уже с одного месяца никаких билетов больше', literary: 'На концерт уже месяц как нет билетов.' },
        'Wie ärgerlich!': { literal: 'Как досадно!', literary: 'Как досадно!' },
        'Gibt es denn noch Karten für das Eishockeyspiel am Samstagabend?': { literal: 'Есть же ещё билеты для хоккейного матча в субботний вечер?', literary: 'А на хоккейный матч в субботу вечером ещё есть билеты?' },
        'Ja, da haben Sie Glück, da gibt es noch Restkarten.': { literal: 'Да, тут имеете вы удачу, тут есть ещё оставшиеся билеты', literary: 'Да, тут вам повезло, есть ещё оставшиеся билеты.' },
      },
      vocabulary: [
        { de: 'die Theaterkarte', plural: 'die Theaterkarten', ru: 'театральный билет', gender: 'feminin', collocation: 'zwei Theaterkarten bestellen', example: 'Ich würde gern für nächsten Samstag zwei Theaterkarten für Romeo und Julia bestellen.' },
        { de: 'die Vorstellung', plural: 'die Vorstellungen', ru: 'представление', gender: 'feminin', collocation: 'die Vorstellung ist ausgebucht', example: 'Die Vorstellung ist leider schon ausgebucht.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'Karten für das Konzert', example: 'Gibt es denn noch Karten für das Konzert in der Laeiszhalle?' },
        { de: 'das Pech', ru: 'невезение', gender: 'neutrum', collocation: 'Pech haben', example: 'Nein, da haben Sie aber wirklich Pech.' },
        { de: 'das Eishockeyspiel', plural: 'die Eishockeyspiele', ru: 'хоккейный матч', gender: 'neutrum', collocation: 'Karten für das Eishockeyspiel', example: 'Gibt es denn noch Karten für das Eishockeyspiel am Samstagabend?' },
        { de: 'die Restkarte', plural: 'die Restkarten', ru: 'оставшийся билет', gender: 'feminin', collocation: 'noch Restkarten', example: 'Ja, da haben Sie Glück, da gibt es noch Restkarten.' },
        { de: 'bestellen', ru: 'заказывать', type: 'verb', forms: 'bestellt, bestellte, hat bestellt', example: 'Ich würde gern für nächsten Samstag zwei Theaterkarten bestellen.' },
        { de: 'leider', ru: 'к сожалению', type: 'adv', example: 'Die Vorstellung ist leider schon ausgebucht.' },
        { de: 'ärgerlich', ru: 'досадно', type: 'adj', example: 'Wie ärgerlich!' },
      ],
      practiceSentences: [
        { de: 'Kann ich Ihnen helfen?', ru: 'Могу я вам помочь?', note: 'Kann на V1, helfen в конце' },
        { de: 'Ich würde gern Karten kaufen.', ru: 'Я хотел бы купить билеты.', note: 'würde на V2, kaufen в конце' },
        { de: 'Das Kino ist ausgebucht.', ru: 'Кинотеатр распродан.', note: 'ist на V2' },
        { de: 'Es gibt noch freie Plätze.', ru: 'Есть ещё свободные места.', note: 'gibt на V2' },
        { de: 'Sie haben heute Glück.', ru: 'Вам сегодня везёт.', note: 'haben на V2' },
      ],
      question: {
        de: 'Wofür bekommt die Frau noch Karten?',
        ru: 'На что женщина ещё может получить билеты?',
        options: [
          { de: 'Für das Theater', ru: 'На театр' },
          { de: 'Für das Konzert', ru: 'На концерт' },
          { de: 'Für das Eishockeyspiel', ru: 'На хоккейный матч' },
        ],
        correct: 2,
        explanation: 'В конце: "Gibt es noch Karten für das Eishockeyspiel? - Ja, da haben Sie Glück, da gibt es noch Restkarten."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 10,
      name: 'Einkauf',
      type: 'диалог о покупках',
      text: 'Wie war der Einkauf? Hast du alles bekommen? Nein, leider nicht. Eine schöne Tischdecke habe ich nicht gefunden. Aber die Kerzenständer sind toll, oder? Ja, sehr schön. Und was ist das? Das ist eine Porzellanpuppe. Ist die nicht super? Na ja, sie ist vielleicht etwas groß.',
      sentenceTranslations: {
        'Wie war der Einkauf?': { literal: 'Как была покупка?', literary: 'Как прошёл шоппинг?' },
        'Hast du alles bekommen?': { literal: 'Имеешь ты всё полученным?', literary: 'Ты всё купил?' },
        'Nein, leider nicht.': { literal: 'Нет, к-сожалению не', literary: 'Нет, к сожалению.' },
        'Eine schöne Tischdecke habe ich nicht gefunden.': { literal: 'Красивую скатерть имею я не найденной', literary: 'Красивую скатерть я не нашла.' },
        'Aber die Kerzenständer sind toll, oder?': { literal: 'Но подсвечники есть отличные, или?', literary: 'Но подсвечники отличные, правда?' },
        'Ja, sehr schön.': { literal: 'Да, очень красиво', literary: 'Да, очень красивые.' },
        'Und was ist das?': { literal: 'И что есть это?', literary: 'А что это?' },
        'Das ist eine Porzellanpuppe.': { literal: 'Это есть фарфоровая-кукла', literary: 'Это фарфоровая кукла.' },
        'Ist die nicht super?': { literal: 'Есть она не супер?', literary: 'Разве она не чудесная?' },
        'Na ja, sie ist vielleicht etwas groß.': { literal: 'Ну да, она есть возможно немного большая', literary: 'Ну, она, пожалуй, великовата.' },
      },
      vocabulary: [
        { de: 'der Einkauf', plural: 'die Einkäufe', ru: 'покупка, шоппинг', gender: 'maskulin', collocation: 'wie war der Einkauf', example: 'Wie war der Einkauf?' },
        { de: 'die Tischdecke', plural: 'die Tischdecken', ru: 'скатерть', gender: 'feminin', collocation: 'eine schöne Tischdecke', example: 'Eine schöne Tischdecke habe ich nicht gefunden.' },
        { de: 'der Kerzenständer', plural: 'die Kerzenständer', ru: 'подсвечник', gender: 'maskulin', collocation: 'die Kerzenständer sind toll', example: 'Aber die Kerzenständer sind toll, oder?' },
        { de: 'die Porzellanpuppe', plural: 'die Porzellanpuppen', ru: 'фарфоровая кукла', gender: 'feminin', collocation: 'eine Porzellanpuppe', example: 'Das ist eine Porzellanpuppe.' },
        { de: 'finden', ru: 'находить', type: 'verb', forms: 'findet, fand, hat gefunden', example: 'Eine schöne Tischdecke habe ich nicht gefunden.' },
      ],
      practiceSentences: [
        { de: 'Ich habe eine Lampe gekauft.', ru: 'Я купил лампу.', note: 'habe на V2, gekauft в конце' },
        { de: 'Hast du etwas gefunden?', ru: 'Ты что-то нашёл?', note: 'Hast на V1, gefunden в конце' },
        { de: 'Die Puppe ist sehr groß.', ru: 'Кукла очень большая.', note: 'ist на V2' },
        { de: 'Das habe ich nicht gesehen.', ru: 'Этого я не видел.', note: 'habe на V2, gesehen в конце' },
        { de: 'Die Kerzen sind schön.', ru: 'Свечи красивые.', note: 'sind на V2' },
      ],
      question: {
        de: 'Was hat die Frau nicht bekommen?',
        ru: 'Что женщина не смогла купить?',
        options: [
          { de: 'Eine Tischdecke', ru: 'Скатерть' },
          { de: 'Kerzenständer', ru: 'Подсвечники' },
          { de: 'Eine Porzellanpuppe', ru: 'Фарфоровую куклу' },
        ],
        correct: 0,
        explanation: '"Eine schöne Tischdecke habe ich nicht gefunden" (красивую скатерть я не нашла).'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 11,
      name: 'Miguel Geburtstag',
      type: 'диалог о подарке',
      text: 'Was wollen wir Miguel zum Geburtstag schenken? Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein. Also, ich weiß nicht. Ist das nicht etwas unpersönlich? Wollen wir ihm nicht lieber ein gutes Buch schenken? Bist du sicher, dass Miguel gern liest? Nein, du hast recht. Aber er interessiert sich auf jeden Fall für Fußball. Vielleicht sollten wir ihm ein Trikot schenken? Ja, das ist eine gute Idee. Er ist doch Fan von Borussia Dortmund. Kannst du eins bestellen?',
      sentenceTranslations: {
        'Was wollen wir Miguel zum Geburtstag schenken?': { literal: 'Что хотим мы Мигелю на день-рождения подарить?', literary: 'Что подарим Мигелю на день рождения?' },
        'Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein.': { literal: 'Я предлагаю, мы покупаем ему красивую бутылку вина', literary: 'Предлагаю купить ему красивую бутылку вина.' },
        'Also, ich weiß nicht.': { literal: 'Итак, я знаю не', literary: 'Ну, не знаю.' },
        'Ist das nicht etwas unpersönlich?': { literal: 'Есть это не немного неличное?', literary: 'Не слишком ли это безлично?' },
        'Wollen wir ihm nicht lieber ein gutes Buch schenken?': { literal: 'Хотим мы ему не лучше хорошую книгу подарить?', literary: 'Может, лучше подарим ему хорошую книгу?' },
        'Bist du sicher, dass Miguel gern liest?': { literal: 'Есть ты уверен, что Мигель охотно читает?', literary: 'Ты уверен, что Мигель любит читать?' },
        'Nein, du hast recht.': { literal: 'Нет, ты имеешь правоту', literary: 'Нет, ты прав.' },
        'Aber er interessiert sich auf jeden Fall für Fußball.': { literal: 'Но он интересуется на каждый случай для футбола', literary: 'Но он в любом случае интересуется футболом.' },
        'Vielleicht sollten wir ihm ein Trikot schenken?': { literal: 'Возможно должны мы ему футболку подарить?', literary: 'Может, стоит подарить ему футболку?' },
        'Ja, das ist eine gute Idee.': { literal: 'Да, это есть хорошая идея', literary: 'Да, хорошая идея.' },
        'Er ist doch Fan von Borussia Dortmund.': { literal: 'Он есть же фанат от Боруссии Дортмунд', literary: 'Он же фанат Боруссии Дортмунд.' },
        'Kannst du eins bestellen?': { literal: 'Можешь ты одно заказать?', literary: 'Ты можешь заказать?' },
      },
      vocabulary: [
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'zum Geburtstag schenken', example: 'Was wollen wir Miguel zum Geburtstag schenken?' },
        { de: 'die Flasche', plural: 'die Flaschen', ru: 'бутылка', gender: 'feminin', collocation: 'eine Flasche Wein', example: 'Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein.' },
        { de: 'der Wein', plural: 'die Weine', ru: 'вино', gender: 'maskulin', collocation: 'eine Flasche Wein', example: 'Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein.' },
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', collocation: 'ein gutes Buch', example: 'Wollen wir ihm nicht lieber ein gutes Buch schenken?' },
        { de: 'das Trikot', plural: 'die Trikots', ru: 'футболка (спортивная)', gender: 'neutrum', collocation: 'ein Trikot schenken', example: 'Vielleicht sollten wir ihm ein Trikot schenken?' },
        { de: 'schenken', ru: 'дарить', type: 'verb', forms: 'schenkt, schenkte, hat geschenkt', example: 'Was wollen wir Miguel zum Geburtstag schenken?' },
        { de: 'vorschlagen', ru: 'предлагать', type: 'verb', forms: 'schlägt vor, schlug vor, hat vorgeschlagen', example: 'Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein.' },
        { de: 'lesen', ru: 'читать', type: 'verb', forms: 'liest, las, hat gelesen', example: 'Bist du sicher, dass Miguel gern liest?' },
        { de: 'unpersönlich', ru: 'безлично', type: 'adj', example: 'Ist das nicht etwas unpersönlich?' },
      ],
      practiceSentences: [
        { de: 'Was sollen wir kaufen?', ru: 'Что нам купить?', note: 'sollen на V2, kaufen в конце' },
        { de: 'Ich schlage ein Buch vor.', ru: 'Я предлагаю книгу.', note: 'schlage на V2, vor в конце' },
        { de: 'Er liest gern Romane.', ru: 'Он любит читать романы.', note: 'liest на V2' },
        { de: 'Sie interessiert sich für Sport.', ru: 'Она интересуется спортом.', note: 'interessiert на V2, возвратное sich' },
        { de: 'Kannst du das bestellen?', ru: 'Можешь ты это заказать?', note: 'Kannst на V1, bestellen в конце' },
      ],
      question: {
        de: 'Was schenken die Freunde Miguel zum Geburtstag?',
        ru: 'Что друзья подарят Мигелю на день рождения?',
        options: [
          { de: 'Eine Flasche Wein', ru: 'Бутылку вина' },
          { de: 'Ein Buch', ru: 'Книгу' },
          { de: 'Ein Trikot', ru: 'Футболку' },
        ],
        correct: 2,
        explanation: 'В конце диалога: "Vielleicht sollten wir ihm ein Trikot schenken? - Ja, das ist eine gute Idee."'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 12,
      name: 'Interview Kellermann',
      type: 'интервью',
      text: 'Frau Kellermann, vom Mädchen vom Bauernhof zur Tourismusexpertin. Sie sind ein Vorbild für viele Mädchen aus unserer Region. Wie war Ihre Kindheit auf dem Land? Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt. Eigentlich wollte ich auch ein Junge sein, die Mädchen fand ich langweilig. War Ihre ganze Kindheit so schön? Nein, leider nicht. Mit elf bin ich ins Gymnasium gekommen und da musste jeden Tag eine Stunde mit dem Bus in die Stadt fahren. Aber ich habe dort Fremdsprachen gelernt, Englisch und Französisch. Hat es sich denn gelohnt? Ja, nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen. Ich war die einzige in unserer Familie mit einem Studium. Wow, das war bestimmt nicht immer leicht. Nein, als Studentin wäre ich gerne mit meinen Freundinnen gereist, aber das konnte ich nicht. Ich musste in den Ferien meinen Eltern helfen. Auf dem Land gibt es im Sommer sehr viel Arbeit. Und was machen Sie jetzt? Jetzt habe ich ein erfolgreiches Reisebüro in der Stadt und mir macht meine Arbeit sehr viel Spaß. Im Urlaub bin ich immer unterwegs und schaue nach neuen spannenden Reisezielen. Ich mache Städtereisen in Europa und fliege oft nach Asien. Vor ein paar Monaten bin ich wieder aufs Land gezogen. Da genieße ich die Ruhe, besonders wenn ich von meinen Reisen zurückkomme. So ein Leben habe ich mir immer gewünscht. Das ist wirklich toll! Alles Gute für Sie und danke für das Gespräch. Gerne.',
      sentenceTranslations: {
        'Frau Kellermann, vom Mädchen vom Bauernhof zur Tourismusexpertin.': { literal: 'Госпожа Келлерманн, от девочки от крестьянского двора к эксперту по туризму', literary: 'Госпожа Келлерманн, от деревенской девочки до эксперта по туризму.' },
        'Sie sind ein Vorbild für viele Mädchen aus unserer Region.': { literal: 'Вы есть пример для подражания для многих девочек из нашего региона', literary: 'Вы пример для подражания для многих девочек из нашего региона.' },
        'Wie war Ihre Kindheit auf dem Land?': { literal: 'Как было Ваше детство на селе?', literary: 'Какое было ваше детство в деревне?' },
        'Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt.': { literal: 'Я была всегда снаружи и имею с мальчиками из нашей деревни играла', literary: 'Я всегда была на улице и играла с мальчишками из нашей деревни.' },
        'Eigentlich wollte ich auch ein Junge sein, die Mädchen fand ich langweilig.': { literal: 'Собственно хотела я тоже мальчиком быть, девочек находила я скучными', literary: 'Вообще-то я тоже хотела быть мальчиком, девочки казались мне скучными.' },
        'War Ihre ganze Kindheit so schön?': { literal: 'Было Ваше целое детство так красиво?', literary: 'Всё ваше детство было таким прекрасным?' },
        'Nein, leider nicht.': { literal: 'Нет, к-сожалению нет', literary: 'Нет, к сожалению.' },
        'Mit elf bin ich ins Gymnasium gekommen und da musste jeden Tag eine Stunde mit dem Bus in die Stadt fahren.': { literal: 'С одиннадцати попала я в гимназию и тут должна каждый день час с автобусом в город ехать', literary: 'В 11 лет я поступила в гимназию, и мне приходилось каждый день час ехать на автобусе в город.' },
        'Aber ich habe dort Fremdsprachen gelernt, Englisch und Französisch.': { literal: 'Но я имею там иностранные языки учила, английский и французский', literary: 'Но я выучила там иностранные языки: английский и французский.' },
        'Hat es sich denn gelohnt?': { literal: 'Имело это себя же стоило?', literary: 'А это стоило того?' },
        'Ja, nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen.': { literal: 'Да, после аттестата переехала я для моей учёбы-по-туризму в Кёльн', literary: 'Да, после аттестата я переехала в Кёльн учиться на туризм.' },
        'Ich war die einzige in unserer Familie mit einem Studium.': { literal: 'Я была единственная в нашей семье с учёбой', literary: 'Я была единственной в семье с высшим образованием.' },
        'Wow, das war bestimmt nicht immer leicht.': { literal: 'Вау, это было определённо не всегда легко', literary: 'Это наверняка было непросто.' },
        'Nein, als Studentin wäre ich gerne mit meinen Freundinnen gereist, aber das konnte ich nicht.': { literal: 'Нет, как студентка была-бы я охотно с моими подругами путешествовала, но это могла я не', literary: 'Нет, будучи студенткой, я бы с удовольствием путешествовала с подругами, но не могла.' },
        'Ich musste in den Ferien meinen Eltern helfen.': { literal: 'Я должна в каникулах моим родителям помогать', literary: 'На каникулах мне приходилось помогать родителям.' },
        'Auf dem Land gibt es im Sommer sehr viel Arbeit.': { literal: 'На селе есть летом очень много работы', literary: 'Летом в деревне очень много работы.' },
        'Und was machen Sie jetzt?': { literal: 'И что делаете Вы сейчас?', literary: 'А чем вы занимаетесь сейчас?' },
        'Jetzt habe ich ein erfolgreiches Reisebüro in der Stadt und mir macht meine Arbeit sehr viel Spaß.': { literal: 'Сейчас имею я успешное турбюро в городе и мне делает моя работа очень много удовольствия', literary: 'Сейчас у меня успешное турбюро в городе, и работа приносит мне огромное удовольствие.' },
        'Im Urlaub bin ich immer unterwegs und schaue nach neuen spannenden Reisezielen.': { literal: 'В отпуске есть я всегда в-пути и смотрю за новыми захватывающими направлениями', literary: 'В отпуске я всегда в пути и ищу новые интересные направления.' },
        'Ich mache Städtereisen in Europa und fliege oft nach Asien.': { literal: 'Я делаю поездки-по-городам в Европе и летаю часто в Азию', literary: 'Я путешествую по городам Европы и часто летаю в Азию.' },
        'Vor ein paar Monaten bin ich wieder aufs Land gezogen.': { literal: 'Перед парой месяцев переехала я снова на село', literary: 'Несколько месяцев назад я снова переехала в деревню.' },
        'Da genieße ich die Ruhe, besonders wenn ich von meinen Reisen zurückkomme.': { literal: 'Тут наслаждаюсь я покоем, особенно когда я от моих путешествий возвращаюсь', literary: 'Там я наслаждаюсь тишиной, особенно когда возвращаюсь из путешествий.' },
        'So ein Leben habe ich mir immer gewünscht.': { literal: 'Такую жизнь имею я себе всегда желала', literary: 'О такой жизни я всегда мечтала.' },
        'Das ist wirklich toll!': { literal: 'Это есть действительно прекрасно!', literary: 'Это действительно здорово!' },
        'Alles Gute für Sie und danke für das Gespräch.': { literal: 'Всего хорошего для Вас и спасибо за разговор', literary: 'Всего вам хорошего и спасибо за разговор.' },
        'Gerne.': { literal: 'Охотно', literary: 'Пожалуйста.' },
      },
      vocabulary: [
        { de: 'der Bauernhof', plural: 'die Bauernhöfe', ru: 'крестьянский двор', gender: 'maskulin', collocation: 'vom Bauernhof', example: 'Frau Kellermann, vom Mädchen vom Bauernhof zur Tourismusexpertin.' },
        { de: 'das Vorbild', plural: 'die Vorbilder', ru: 'пример для подражания', gender: 'neutrum', collocation: 'ein Vorbild sein', example: 'Sie sind ein Vorbild für viele Mädchen aus unserer Region.' },
        { de: 'die Kindheit', ru: 'детство', gender: 'feminin', collocation: 'Ihre Kindheit', example: 'Wie war Ihre Kindheit auf dem Land?' },
        { de: 'das Dorf', plural: 'die Dörfer', ru: 'деревня', gender: 'neutrum', collocation: 'aus unserem Dorf', example: 'Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt.' },
        { de: 'das Gymnasium', plural: 'die Gymnasien', ru: 'гимназия', gender: 'neutrum', collocation: 'ins Gymnasium kommen', example: 'Mit elf bin ich ins Gymnasium gekommen.' },
        { de: 'die Fremdsprache', plural: 'die Fremdsprachen', ru: 'иностранный язык', gender: 'feminin', collocation: 'Fremdsprachen lernen', example: 'Aber ich habe dort Fremdsprachen gelernt, Englisch und Französisch.' },
        { de: 'das Abitur', ru: 'аттестат зрелости', gender: 'neutrum', collocation: 'nach dem Abitur', example: 'Ja, nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen.' },
        { de: 'das Reisebüro', plural: 'die Reisebüros', ru: 'турбюро', gender: 'neutrum', collocation: 'ein erfolgreiches Reisebüro', example: 'Jetzt habe ich ein erfolgreiches Reisebüro in der Stadt.' },
        { de: 'das Reiseziel', plural: 'die Reiseziele', ru: 'туристическое направление', gender: 'neutrum', collocation: 'neue spannende Reiseziele', example: 'Im Urlaub bin ich immer unterwegs und schaue nach neuen spannenden Reisezielen.' },
        { de: 'die Ruhe', ru: 'покой, тишина', gender: 'feminin', collocation: 'die Ruhe genießen', example: 'Da genieße ich die Ruhe, besonders wenn ich von meinen Reisen zurückkomme.' },
        { de: 'sich lohnen', ru: 'стоить того', type: 'verb', forms: 'lohnt sich, lohnte sich, hat sich gelohnt', example: 'Hat es sich denn gelohnt?' },
        { de: 'ziehen', ru: 'переезжать', type: 'verb', forms: 'zieht, zog, ist gezogen', example: 'Nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen.' },
        { de: 'genießen', ru: 'наслаждаться', type: 'verb', forms: 'genießt, genoss, hat genossen', example: 'Da genieße ich die Ruhe.' },
        { de: 'sich wünschen', ru: 'желать себе', type: 'verb', forms: 'wünscht sich, wünschte sich, hat sich gewünscht', example: 'So ein Leben habe ich mir immer gewünscht.' },
        { de: 'erfolgreich', ru: 'успешный', type: 'adj', example: 'Jetzt habe ich ein erfolgreiches Reisebüro in der Stadt.' },
        { de: 'spannend', ru: 'захватывающий', type: 'adj', example: 'Im Urlaub bin ich immer unterwegs und schaue nach neuen spannenden Reisezielen.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Eigentlich wollte ich auch ein Junge sein, die Mädchen fand ich langweilig.' },
      ],
      practiceSentences: [
        { de: 'Ich bin aufs Land gezogen.', ru: 'Я переехала в деревню.', note: 'bin на V2, gezogen в конце' },
        { de: 'Sie musste viel arbeiten.', ru: 'Ей приходилось много работать.', note: 'musste на V2, arbeiten в конце' },
        { de: 'Ich wünsche mir ein ruhiges Leben.', ru: 'Я желаю себе спокойной жизни.', note: 'wünsche на V2, возвратное mir' },
        { de: 'Im Sommer gibt es viel zu tun.', ru: 'Летом много дел.', note: 'gibt на V2' },
        { de: 'Das habe ich immer gewollt.', ru: 'Этого я всегда хотела.', note: 'habe на V2, gewollt в конце' },
      ],
      question: {
        de: 'Wohnt Frau Kellermann jetzt in der Stadt?',
        ru: 'Фрау Келлерманн сейчас живёт в городе?',
        options: [
          { de: 'Ja, sie wohnt in Köln', ru: 'Да, она живёт в Кёльне' },
          { de: 'Nein, sie ist wieder aufs Land gezogen', ru: 'Нет, она снова переехала в деревню' },
          { de: 'Ja, sie wohnt neben ihrem Reisebüro', ru: 'Да, она живёт рядом с турбюро' },
        ],
        correct: 1,
        explanation: '"Vor ein paar Monaten bin ich wieder aufs Land gezogen" (несколько месяцев назад я снова переехала в деревню).'
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
    title: 'ДЕНЬ ИЗ ЭФИРА',
    text: 'Радио Сити сообщает: на автобане А2 {0} из-за аварии, а на А52 снова {1}. НДР 2 сегодня рассказывает об {2} транспорте. Автобус №143 теперь {3} от Мариентор. В викторине можно {4} поездку в Лондон. На летний фестиваль нельзя ехать на {5} — приезжайте на автобусе. На {6} все опаздывают: Тина ещё {7}, а поезд Роберта снова имел {8}. В магазине {9} стоит 1500 евро вместе со столом. Друзья решили подарить Мигелю {10}. А фрау Келлерманн переехала из города обратно {11} и наслаждается {12}.',
    blanks: [
      { answer: 'Stau', hint: 'пробка (der Stau)' },
      { answer: 'freie Fahrt', hint: 'свободное движение (freie Fahrt)' },
      { answer: 'umweltfreundlichen', hint: 'экологичный (umweltfreundlich, Dat.)' },
      { answer: 'beginnt', hint: 'начинается (beginnen)' },
      { answer: 'gewinnen', hint: 'выиграть (gewinnen)' },
      { answer: 'dem Auto', hint: 'машина (das Auto, Dat.)' },
      { answer: 'die Besprechung', hint: 'совещание (die Besprechung)' },
      { answer: 'tanken', hint: 'заправляться (tanken)' },
      { answer: 'Verspätung', hint: 'опоздание (die Verspätung)' },
      { answer: 'der Küchenschrank', hint: 'кухонный шкаф (der Küchenschrank)' },
      { answer: 'ein Trikot', hint: 'футболка (das Trikot)' },
      { answer: 'aufs Land', hint: 'в деревню (aufs Land)' },
      { answer: 'der Ruhe', hint: 'покой (die Ruhe, Dat.)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Radio City Verkehr).',
    },
  },
};
LESSONS.push(LESSON_26);
