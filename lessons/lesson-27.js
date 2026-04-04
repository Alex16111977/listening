/* ═══════════════════════════════════════════════════════════
   Lesson 27 — Goethe Zertifikat A2 Hören — Modellsatz 2025
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_27 = {
  id: 'lesson-27',
  number: 27,
  title: 'Goethe A2 Hören — Modellsatz 2025',
  subtitle: 'Radio City, NDR 2, Buslinie 143, Gewinnspiel, Sommerfest, Besprechung, Interviews',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-27',
  videoUrl: 'https://www.youtube.com/watch?v=_8ER4CnCsyo',

  /* ─── 14 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Radio City Verkehr',
      type: 'объявление о пробках',
      text: 'Hier Radio City mit dem Verkehr. Stau gibt es auf folgenden Autobahnen: A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz 5 km Stau nach einem Unfall. A40 Richtung Venlo zwischen Mülheim Styrum und Kreuz Duisburg auch 5 km Stau. Der Grund ist eine Baustelle. Und als letztes auf der A52 Richtung Düsseldorf ist wieder freie Fahrt.',
      sentenceTranslations: {
        'Hier Radio City mit dem Verkehr.': { literal: 'Здесь Радио Сити с движением.', literary: 'Радио Сити сообщает о дорожной ситуации.' },
        'Stau gibt es auf folgenden Autobahnen: A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz 5 km Stau nach einem Unfall.': { literal: 'Пробку даёт это на следующих автобанах: А2 направление Ганновер между Дортмунд северо-восток и Каменер развязка 5 км пробка после аварии.', literary: 'Пробки есть на следующих автострадах: А2 в направлении Ганновера между Дортмунд-Нордост и развязкой Каменер Кройц — пробка 5 км из-за аварии.' },
        'A40 Richtung Venlo zwischen Mülheim Styrum und Kreuz Duisburg auch 5 km Stau.': { literal: 'А40 направление Венло между Мюльхайм Штюрум и развязка Дуйсбург тоже 5 км пробка.', literary: 'А40 в направлении Венло между Мюльхайм-Штюрум и развязкой Дуйсбург — также пробка 5 км.' },
        'Der Grund ist eine Baustelle.': { literal: 'Причина есть стройка.', literary: 'Причина — дорожные работы.' },
        'Und als letztes auf der A52 Richtung Düsseldorf ist wieder freie Fahrt.': { literal: 'И как последнее на А52 направление Дюссельдорф есть снова свободная поездка.', literary: 'И наконец, на А52 в направлении Дюссельдорфа снова свободное движение.' },
      },
      vocabulary: [
        { de: 'der Verkehr', ru: 'движение, транспорт', gender: 'maskulin', plural: '-', collocation: 'mit dem Verkehr', example: 'Hier Radio City mit dem Verkehr.' },
        { de: 'der Stau', ru: 'пробка', gender: 'maskulin', plural: 'die Staus', collocation: '5 km Stau', example: 'Stau gibt es auf folgenden Autobahnen.' },
        { de: 'die Autobahn', ru: 'автострада', gender: 'feminin', plural: 'die Autobahnen', collocation: 'auf der Autobahn', example: 'Stau gibt es auf folgenden Autobahnen.' },
        { de: 'die Richtung', ru: 'направление', gender: 'feminin', plural: 'die Richtungen', collocation: 'Richtung Hannover', example: 'A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz 5 km Stau nach einem Unfall.' },
        { de: 'der Unfall', ru: 'авария', gender: 'maskulin', plural: 'die Unfälle', collocation: 'nach einem Unfall', example: 'A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz 5 km Stau nach einem Unfall.' },
        { de: 'die Baustelle', ru: 'стройка', gender: 'feminin', plural: 'die Baustellen', collocation: 'wegen einer Baustelle', example: 'Der Grund ist eine Baustelle.' },
        { de: 'die Fahrt', ru: 'поездка, движение', gender: 'feminin', plural: 'die Fahrten', collocation: 'freie Fahrt', example: 'Und als letztes auf der A52 Richtung Düsseldorf ist wieder freie Fahrt.' },
        { de: 'das Kreuz', ru: 'развязка (дорожная)', gender: 'neutrum', plural: 'die Kreuze', collocation: 'Kamener Kreuz', example: 'A2 Richtung Hannover zwischen Dortmund Nordost und Kamener Kreuz 5 km Stau nach einem Unfall.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute viel Verkehr.', ru: 'Сегодня большое движение.', note: 'V2 (gibt)' },
        { de: 'Die Autobahn ist gesperrt.', ru: 'Автострада закрыта.', note: 'V2 (ist)' },
        { de: 'Ich fahre nach Berlin.', ru: 'Я еду в Берлин.', note: 'V2 (fahre)' },
        { de: 'Der Stau beginnt hier.', ru: 'Пробка начинается здесь.', note: 'V2 (beginnt)' },
        { de: 'Wir stehen im Stau.', ru: 'Мы стоим в пробке.', note: 'V2 (stehen)' },
      ],
      question: {
        de: 'Wo gibt es keinen Stau?',
        ru: 'Где нет пробок?',
        options: [
          { de: 'Auf der A2', ru: 'На А2' },
          { de: 'Auf der A40', ru: 'На А40' },
          { de: 'Auf der A52', ru: 'На А52' },
        ],
        correct: 2,
        explanation: 'В тексте говорится: "auf der A52 Richtung Düsseldorf ist wieder freie Fahrt" (свободное движение).'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'NDR 2 Programm',
      type: 'радиопрограмма',
      text: 'NDR 2, es ist 13.55 Uhr. Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr. Dazu gibt es um 14 Uhr das Nachmittagsgespräch Verkehr in der Großstadt. Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor. Und um 18 Uhr fragen wir Sie: Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen? Rufen Sie uns gern dazu an. Und das alles natürlich wie immer mit der aktuellsten Musik.',
      sentenceTranslations: {
        'NDR 2, es ist 13.55 Uhr.': { literal: 'НДР 2, это есть 13.55 часов.', literary: 'НДР 2, время 13:55.' },
        'Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr.': { literal: 'Сегодня идёт это в нашей передаче о теме экологичный транспорт.', literary: 'Сегодня в нашей передаче речь пойдёт об экологичном транспорте.' },
        'Dazu gibt es um 14 Uhr das Nachmittagsgespräch Verkehr in der Großstadt.': { literal: 'К этому даёт это в 14 часов послеобеденный разговор транспорт в большом городе.', literary: 'По этой теме в 14:00 — дневная беседа «Транспорт в мегаполисе».' },
        'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.': { literal: 'С 16 до 17 часов ставим мы вам новейшие электросамокаты в сравнении перед.', literary: 'С 16:00 до 17:00 мы представим вам сравнение новейших электросамокатов.' },
        'Und um 18 Uhr fragen wir Sie: Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen?': { literal: 'И в 18 часов спрашиваем мы вас: что есть ваши опыты с экологичными транспортными средствами?', literary: 'А в 18:00 мы спросим вас: каков ваш опыт с экологичным транспортом?' },
        'Rufen Sie uns gern dazu an.': { literal: 'Звоните вы нам охотно к этому при.', literary: 'Звоните нам по этому поводу.' },
        'Und das alles natürlich wie immer mit der aktuellsten Musik.': { literal: 'И это всё конечно как всегда с самой актуальной музыкой.', literary: 'И всё это, конечно, как всегда с самой свежей музыкой.' },
      },
      vocabulary: [
        { de: 'die Sendung', ru: 'передача', gender: 'feminin', plural: 'die Sendungen', collocation: 'in unserer Sendung', example: 'Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr.' },
        { de: 'das Thema', ru: 'тема', gender: 'neutrum', plural: 'die Themen', collocation: 'um das Thema', example: 'Heute geht es in unserer Sendung um das Thema umweltfreundlicher Verkehr.' },
        { de: 'die Großstadt', ru: 'мегаполис', gender: 'feminin', plural: 'die Großstädte', collocation: 'in der Großstadt', example: 'Dazu gibt es um 14 Uhr das Nachmittagsgespräch Verkehr in der Großstadt.' },
        { de: 'der E-Scooter', ru: 'электросамокат', gender: 'maskulin', plural: 'die E-Scooter', collocation: 'die neuesten E-Scooter', example: 'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.' },
        { de: 'der Vergleich', ru: 'сравнение', gender: 'maskulin', plural: 'die Vergleiche', collocation: 'im Vergleich', example: 'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.' },
        { de: 'die Erfahrung', ru: 'опыт', gender: 'feminin', plural: 'die Erfahrungen', collocation: 'Ihre Erfahrungen', example: 'Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen?' },
        { de: 'das Fahrzeug', ru: 'транспортное средство', gender: 'neutrum', plural: 'die Fahrzeuge', collocation: 'umweltfreundliche Fahrzeuge', example: 'Was sind Ihre Erfahrungen mit umweltfreundlichen Fahrzeugen?' },
        { de: 'vorstellen', ru: 'представлять', type: 'verb', forms: 'stellt vor, stellte vor, hat vorgestellt', example: 'Von 16 bis 17 Uhr stellen wir Ihnen die neuesten E-Scooter im Vergleich vor.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Rufen Sie uns gern dazu an.' },
      ],
      practiceSentences: [
        { de: 'Die Sendung beginnt gleich.', ru: 'Передача начинается сейчас.', note: 'V2 (beginnt)' },
        { de: 'Wir stellen das Programm vor.', ru: 'Мы представляем программу.', note: 'отделяемая приставка (stellen...vor)' },
        { de: 'Es geht um Musik.', ru: 'Речь идёт о музыке.', note: 'V2 (geht)' },
        { de: 'Rufen Sie bitte an!', ru: 'Позвоните, пожалуйста!', note: 'императив + отд. прист.' },
        { de: 'Die Show läuft bis 20 Uhr.', ru: 'Шоу идёт до 20:00.', note: 'V2 (läuft)' },
      ],
      question: {
        de: 'Wann können die Hörer anrufen?',
        ru: 'Когда слушатели могут позвонить?',
        options: [
          { de: 'Um 14 Uhr', ru: 'В 14:00' },
          { de: 'Um 17 Uhr', ru: 'В 17:00' },
          { de: 'Um 18 Uhr', ru: 'В 18:00' },
        ],
        correct: 2,
        explanation: 'В тексте: "Um 18 Uhr fragen wir Sie... Rufen Sie uns gern dazu an."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Buslinie 143',
      type: 'объявление транспорт',
      text: 'Wir kommen zum Verkehr. Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof. Sie beginnt am Marientor. Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.',
      sentenceTranslations: {
        'Wir kommen zum Verkehr.': { literal: 'Мы приходим к движению.', literary: 'Переходим к транспортным новостям.' },
        'Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof.': { literal: 'Автобусная линия 143 едет от сегодня до 20 февраля не от главного вокзала.', literary: 'Автобусная линия 143 с сегодняшнего дня до 20 февраля не отправляется от Главного вокзала.' },
        'Sie beginnt am Marientor.': { literal: 'Она начинается у Мариентор.', literary: 'Она начинается от Мариентор.' },
        'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.': { literal: 'Пожалуйста используйте вы от главного вокзала трамвай М9 до Мариентор или езжайте вы с метро до Хоймаркт и пересаживайтесь там пере.', literary: 'Пожалуйста, от Главного вокзала используйте трамвай М9 до Мариентор или поезжайте на метро до Хоймаркт и там пересаживайтесь.' },
      },
      vocabulary: [
        { de: 'die Buslinie', ru: 'автобусная линия', gender: 'feminin', plural: 'die Buslinien', collocation: 'die Buslinie 143', example: 'Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof.' },
        { de: 'der Hauptbahnhof', ru: 'главный вокзал', gender: 'maskulin', plural: 'die Hauptbahnhöfe', collocation: 'ab Hauptbahnhof', example: 'Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof.' },
        { de: 'die Straßenbahn', ru: 'трамвай', gender: 'feminin', plural: 'die Straßenbahnen', collocation: 'die Straßenbahn M9', example: 'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.' },
        { de: 'die U-Bahn', ru: 'метро', gender: 'feminin', plural: 'die U-Bahnen', collocation: 'mit der U-Bahn', example: 'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.' },
        { de: 'umsteigen', ru: 'пересаживаться', type: 'verb', forms: 'steigt um, stieg um, ist umgestiegen', example: 'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.' },
        { de: 'nutzen', ru: 'использовать', type: 'verb', forms: 'nutzt, nutzte, hat genutzt', example: 'Bitte nutzen Sie ab Hauptbahnhof die Straßenbahn M9 bis Marientor oder fahren Sie mit der U-Bahn bis Heumarkt und steigen dort um.' },
      ],
      practiceSentences: [
        { de: 'Der Bus fährt nicht.', ru: 'Автобус не едет.', note: 'V2 (fährt) + nicht' },
        { de: 'Ich steige hier um.', ru: 'Я здесь пересаживаюсь.', note: 'отделяемая приставка (steige...um)' },
        { de: 'Die Linie beginnt dort.', ru: 'Линия начинается там.', note: 'V2 (beginnt)' },
        { de: 'Nutzen Sie die S-Bahn!', ru: 'Используйте электричку!', note: 'императив' },
        { de: 'Wir fahren mit dem Zug.', ru: 'Мы едем на поезде.', note: 'V2 (fahren)' },
      ],
      question: {
        de: 'Welches Verkehrsmittel fährt nicht?',
        ru: 'Какой транспорт не ходит?',
        options: [
          { de: 'Die Buslinie 143 ab Hauptbahnhof', ru: 'Автобус 143 от Главного вокзала' },
          { de: 'Die Straßenbahn M9', ru: 'Трамвай М9' },
          { de: 'Die U-Bahn', ru: 'Метро' },
        ],
        correct: 0,
        explanation: 'В тексте: "Die Buslinie 143 fährt von heute bis zum 20. Februar nicht ab Hauptbahnhof."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Gewinnspiel',
      type: 'радиоигра',
      text: 'Hier sind wir wieder mit unserem Gewinnspiel. Die Preisfrage ist heute: Wo möchten die Deutschen gern einmal ein Jahr lang leben? A in London, B in Paris oder C in Rom? Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London. Rufen Sie uns an. Die Nummer ist 040 697 84 53. Und mit ein bisschen Glück sind Sie schon bald in der Stadt an der Themse.',
      sentenceTranslations: {
        'Hier sind wir wieder mit unserem Gewinnspiel.': { literal: 'Здесь есть мы снова с нашей призовой игрой.', literary: 'Мы снова с вами с нашей викториной.' },
        'Die Preisfrage ist heute: Wo möchten die Deutschen gern einmal ein Jahr lang leben?': { literal: 'Призовой вопрос есть сегодня: где хотели бы немцы охотно однажды один год долго жить?', literary: 'Вопрос сегодня: где бы немцы хотели пожить один год?' },
        'A in London, B in Paris oder C in Rom?': { literal: 'А в Лондоне, Б в Париже или Ц в Риме?', literary: 'А — в Лондоне, Б — в Париже или В — в Риме?' },
        'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.': { literal: 'Первый звонящий с правильным ответом выигрывает поездку в Лондон.', literary: 'Первый дозвонившийся с правильным ответом выигрывает поездку в Лондон.' },
        'Rufen Sie uns an.': { literal: 'Звоните вы нам при.', literary: 'Звоните нам.' },
        'Die Nummer ist 040 697 84 53.': { literal: 'Номер есть 040 697 84 53.', literary: 'Номер: 040 697 84 53.' },
        'Und mit ein bisschen Glück sind Sie schon bald in der Stadt an der Themse.': { literal: 'И с немного счастья есть вы уже скоро в городе на Темзе.', literary: 'И если повезёт, вы скоро окажетесь в городе на Темзе.' },
      },
      vocabulary: [
        { de: 'das Gewinnspiel', ru: 'викторина, розыгрыш', gender: 'neutrum', plural: 'die Gewinnspiele', collocation: 'mit unserem Gewinnspiel', example: 'Hier sind wir wieder mit unserem Gewinnspiel.' },
        { de: 'die Preisfrage', ru: 'призовой вопрос', gender: 'feminin', plural: 'die Preisfragen', collocation: 'die Preisfrage ist', example: 'Die Preisfrage ist heute: Wo möchten die Deutschen gern einmal ein Jahr lang leben?' },
        { de: 'der Anrufer', ru: 'звонящий', gender: 'maskulin', plural: 'die Anrufer', collocation: 'der erste Anrufer', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
        { de: 'die Antwort', ru: 'ответ', gender: 'feminin', plural: 'die Antworten', collocation: 'die richtige Antwort', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
        { de: 'die Reise', ru: 'поездка', gender: 'feminin', plural: 'die Reisen', collocation: 'eine Reise nach London', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
        { de: 'das Glück', ru: 'счастье, удача', gender: 'neutrum', plural: '-', collocation: 'mit ein bisschen Glück', example: 'Und mit ein bisschen Glück sind Sie schon bald in der Stadt an der Themse.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte gewinnen.', ru: 'Я хочу выиграть.', note: 'модальный + инфинитив' },
        { de: 'Sie ruft jetzt an.', ru: 'Она сейчас звонит.', note: 'отделяемая приставка (ruft...an)' },
        { de: 'Wir leben in Berlin.', ru: 'Мы живём в Берлине.', note: 'V2 (leben)' },
        { de: 'Das Spiel beginnt bald.', ru: 'Игра скоро начнётся.', note: 'V2 (beginnt)' },
        { de: 'Er gewinnt die Reise.', ru: 'Он выигрывает поездку.', note: 'V2 (gewinnt)' },
      ],
      question: {
        de: 'Was kann man gewinnen?',
        ru: 'Что можно выиграть?',
        options: [
          { de: 'Eine Reise nach London', ru: 'Поездку в Лондон' },
          { de: 'Eine Reise nach Paris', ru: 'Поездку в Париж' },
          { de: 'Eine Reise nach Rom', ru: 'Поездку в Рим' },
        ],
        correct: 0,
        explanation: 'В тексте: "Der erste Anrufer mit der richtigen Antwort gewinnt eine Reise nach London."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Sommerfest Info',
      type: 'объявление',
      text: 'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz. Es gibt keine Parkplätze mehr im Stadtzentrum. Alle Parkhäuser sind bereits voll. Ab 9 dann dürfen Sie nicht mit dem Auto oder mit dem Motorrad fahren und man kann dort auch nicht parken. Bitte reisen Sie mit Bus und Bahn an.',
      sentenceTranslations: {
        'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz.': { literal: 'И здесь ещё одна информация для посетителей от летнего праздника на площади Роде.', literary: 'А вот ещё информация для посетителей летнего фестиваля на площади Роде.' },
        'Es gibt keine Parkplätze mehr im Stadtzentrum.': { literal: 'Это даёт никакие парковочные места больше в центре города.', literary: 'В центре города больше нет парковочных мест.' },
        'Alle Parkhäuser sind bereits voll.': { literal: 'Все паркинги есть уже полные.', literary: 'Все паркинги уже заполнены.' },
        'Ab 9 dann dürfen Sie nicht mit dem Auto oder mit dem Motorrad fahren und man kann dort auch nicht parken.': { literal: 'С 9 тогда разрешено вы не с автомобилем или с мотоциклом ехать и человек может там также не парковать.', literary: 'С 9 часов нельзя приезжать на автомобиле или мотоцикле, и парковаться там тоже нельзя.' },
        'Bitte reisen Sie mit Bus und Bahn an.': { literal: 'Пожалуйста путешествуйте вы с автобусом и поездом при.', literary: 'Пожалуйста, приезжайте на автобусе или поезде.' },
      },
      vocabulary: [
        { de: 'der Besucher', ru: 'посетитель', gender: 'maskulin', plural: 'die Besucher', collocation: 'für die Besucher', example: 'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz.' },
        { de: 'das Sommerfest', ru: 'летний фестиваль', gender: 'neutrum', plural: 'die Sommerfeste', collocation: 'vom Sommerfest', example: 'Und hier noch eine Info für die Besucher vom Sommerfest am Rodeplatz.' },
        { de: 'der Parkplatz', ru: 'парковочное место', gender: 'maskulin', plural: 'die Parkplätze', collocation: 'keine Parkplätze mehr', example: 'Es gibt keine Parkplätze mehr im Stadtzentrum.' },
        { de: 'das Stadtzentrum', ru: 'центр города', gender: 'neutrum', plural: 'die Stadtzentren', collocation: 'im Stadtzentrum', example: 'Es gibt keine Parkplätze mehr im Stadtzentrum.' },
        { de: 'das Parkhaus', ru: 'паркинг', gender: 'neutrum', plural: 'die Parkhäuser', collocation: 'alle Parkhäuser', example: 'Alle Parkhäuser sind bereits voll.' },
        { de: 'anreisen', ru: 'приезжать', type: 'verb', forms: 'reist an, reiste an, ist angereist', example: 'Bitte reisen Sie mit Bus und Bahn an.' },
        { de: 'parken', ru: 'парковаться', type: 'verb', forms: 'parkt, parkte, hat geparkt', example: 'Ab 9 dann dürfen Sie nicht mit dem Auto oder mit dem Motorrad fahren und man kann dort auch nicht parken.' },
      ],
      practiceSentences: [
        { de: 'Es gibt kein Problem.', ru: 'Проблем нет.', note: 'es gibt + Akk' },
        { de: 'Man darf hier parken.', ru: 'Здесь можно парковаться.', note: 'модальный (darf)' },
        { de: 'Ich reise morgen an.', ru: 'Я приезжаю завтра.', note: 'отделяемая приставка (reise...an)' },
        { de: 'Das Fest beginnt früh.', ru: 'Праздник начинается рано.', note: 'V2 (beginnt)' },
        { de: 'Sie kommen mit dem Bus.', ru: 'Они приезжают на автобусе.', note: 'V2 (kommen)' },
      ],
      question: {
        de: 'Wie sollen die Besucher zum Fest kommen?',
        ru: 'Как посетителям следует приехать на праздник?',
        options: [
          { de: 'Mit dem Auto', ru: 'На автомобиле' },
          { de: 'Mit Bus und Bahn', ru: 'На автобусе и поезде' },
          { de: 'Mit dem Motorrad', ru: 'На мотоцикле' },
        ],
        correct: 1,
        explanation: 'В тексте: "Bitte reisen Sie mit Bus und Bahn an."'
      }
    },

    /* ═══ TEIL 2 — Besprechung (Beispiel + Dialog) ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 'Beispiel',
      name: 'Besprechung Beispiel',
      type: 'диалог',
      text: 'Guten Morgen, Harald! Morgen, Katharina! Ich bin wohl die erste? Ja, die Besprechung beginnt eigentlich in zwei Minuten. Ich habe ja gehofft, dass wir einmal pünktlich anfangen können. Nur Tina und Adam haben angerufen, dass sie später kommen. Tina muss wohl noch tanken.',
      sentenceTranslations: {
        'Guten Morgen, Harald!': { literal: 'Доброе утро, Харальд!', literary: 'Доброе утро, Харальд!' },
        'Morgen, Katharina!': { literal: 'Утро, Катарина!', literary: 'Утро, Катарина!' },
        'Ich bin wohl die erste?': { literal: 'Я есть наверное первая?', literary: 'Я, наверное, первая?' },
        'Ja, die Besprechung beginnt eigentlich in zwei Minuten.': { literal: 'Да, совещание начинается собственно через две минуты.', literary: 'Да, совещание начинается через две минуты.' },
        'Ich habe ja gehofft, dass wir einmal pünktlich anfangen können.': { literal: 'Я имею ведь надеялся, что мы однажды пунктуально начать можем.', literary: 'Я надеялся, что мы хоть раз начнём вовремя.' },
        'Nur Tina und Adam haben angerufen, dass sie später kommen.': { literal: 'Только Тина и Адам имеют позвонили, что они позже приходят.', literary: 'Только Тина и Адам позвонили, что опоздают.' },
        'Tina muss wohl noch tanken.': { literal: 'Тина должна наверное ещё заправлять.', literary: 'Тина, наверное, должна ещё заправиться.' },
      },
      vocabulary: [
        { de: 'die Besprechung', ru: 'совещание', gender: 'feminin', plural: 'die Besprechungen', collocation: 'die Besprechung beginnt', example: 'Ja, die Besprechung beginnt eigentlich in zwei Minuten.' },
        { de: 'die Minute', ru: 'минута', gender: 'feminin', plural: 'die Minuten', collocation: 'in zwei Minuten', example: 'Ja, die Besprechung beginnt eigentlich in zwei Minuten.' },
        { de: 'anfangen', ru: 'начинать', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Ich habe ja gehofft, dass wir einmal pünktlich anfangen können.' },
        { de: 'tanken', ru: 'заправляться', type: 'verb', forms: 'tankt, tankte, hat getankt', example: 'Tina muss wohl noch tanken.' },
        { de: 'hoffen', ru: 'надеяться', type: 'verb', forms: 'hofft, hoffte, hat gehofft', example: 'Ich habe ja gehofft, dass wir einmal pünktlich anfangen können.' },
      ],
      practiceSentences: [
        { de: 'Die Besprechung beginnt jetzt.', ru: 'Совещание начинается сейчас.', note: 'V2 (beginnt)' },
        { de: 'Ich muss noch arbeiten.', ru: 'Мне ещё нужно работать.', note: 'модальный + инфинитив' },
        { de: 'Sie ruft schnell an.', ru: 'Она быстро звонит.', note: 'отделяемая приставка (ruft...an)' },
        { de: 'Wir fangen pünktlich an.', ru: 'Мы начинаем вовремя.', note: 'отделяемая приставка (fangen...an)' },
        { de: 'Er kommt später.', ru: 'Он придёт позже.', note: 'V2 (kommt)' },
      ],
      question: {
        de: 'Was macht Tina gerade?',
        ru: 'Что сейчас делает Тина?',
        options: [
          { de: 'Sie tankt', ru: 'Она заправляется' },
          { de: 'Sie ist im Stau', ru: 'Она в пробке' },
          { de: 'Sie ist beim Arzt', ru: 'Она у врача' },
        ],
        correct: 0,
        explanation: 'В тексте: "Tina muss wohl noch tanken."'
      }
    },
    {
      id: 'text-7', teil: 2, aufgabe: 6,
      name: 'Besprechung Dialog',
      type: 'диалог',
      text: 'Nur Tina und Adam haben angerufen, dass sie später kommen. Tina muss wohl noch tanken. Warum ist sie nicht früher losgefahren? Na ja. Und Adam hat Zahnschmerzen. Er kommt direkt vom Arzt hierher. Aber die anderen, weißt du etwas? Also Mario habe ich auf dem Weg zum Besprechungsraum getroffen. Er holt sich noch schnell einen Kaffee aus der Cafeteria. Und Carla steht am Kopierer. Bestimmt kopiert sie noch etwas für uns alle. Und was ist mit Oxana? Oxana, die hat doch heute frei. Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit. In den Zoo, glaube ich, oder... Nein, an die Spree. Sie machen eine Flussfahrt mit Picknick. Dann fehlt ja nur noch Robert. Ach ja, Entschuldigung, das habe ich ganz vergessen. Er hat vorhin vom Bahnhof aus angerufen und gesagt, dass sein Zug mal wieder Verspätung hatte. Er kommt sicher jeden Moment. Na hoffentlich. Ich glaube, ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen. So geht das nicht weiter.',
      sentenceTranslations: {
        'Nur Tina und Adam haben angerufen, dass sie später kommen.': { literal: 'Только Тина и Адам имеют позвонили, что они позже приходят.', literary: 'Только Тина и Адам позвонили, что опоздают.' },
        'Tina muss wohl noch tanken.': { literal: 'Тина должна наверное ещё заправлять.', literary: 'Тина, наверное, должна ещё заправиться.' },
        'Warum ist sie nicht früher losgefahren?': { literal: 'Почему есть она не раньше отъехала?', literary: 'Почему она не выехала раньше?' },
        'Na ja.': { literal: 'Ну да.', literary: 'Ну да.' },
        'Und Adam hat Zahnschmerzen.': { literal: 'И Адам имеет зубную боль.', literary: 'А у Адама болят зубы.' },
        'Er kommt direkt vom Arzt hierher.': { literal: 'Он приходит прямо от врача сюда.', literary: 'Он придёт прямо от врача.' },
        'Aber die anderen, weißt du etwas?': { literal: 'Но остальные, знаешь ты что-то?', literary: 'А остальные? Ты что-нибудь знаешь?' },
        'Also Mario habe ich auf dem Weg zum Besprechungsraum getroffen.': { literal: 'Итак Марио имею я на пути к комнате совещаний встретил.', literary: 'Марио я встретила по пути в переговорную.' },
        'Er holt sich noch schnell einen Kaffee aus der Cafeteria.': { literal: 'Он берёт себе ещё быстро кофе из кафетерии.', literary: 'Он быстро берёт кофе в кафетерии.' },
        'Und Carla steht am Kopierer.': { literal: 'И Карла стоит у копира.', literary: 'А Карла стоит у копира.' },
        'Bestimmt kopiert sie noch etwas für uns alle.': { literal: 'Определённо копирует она ещё что-то для нас всех.', literary: 'Наверняка копирует что-то для всех нас.' },
        'Und was ist mit Oxana?': { literal: 'И что есть с Оксаной?', literary: 'А что с Оксаной?' },
        'Oxana, die hat doch heute frei.': { literal: 'Оксана, та имеет же сегодня свободно.', literary: 'Оксана же сегодня выходной.' },
        'Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit.': { literal: 'Она едет при какой-то школьной экскурсии от её дочери с.', literary: 'Она едет на школьную экскурсию с дочерью.' },
        'In den Zoo, glaube ich, oder... Nein, an die Spree.': { literal: 'В зоопарк, верю я, или... Нет, к Шпрее.', literary: 'В зоопарк, кажется... Нет, на Шпрее.' },
        'Sie machen eine Flussfahrt mit Picknick.': { literal: 'Они делают речную поездку с пикником.', literary: 'У них речная прогулка с пикником.' },
        'Dann fehlt ja nur noch Robert.': { literal: 'Тогда не хватает ведь только ещё Роберт.', literary: 'Тогда не хватает только Роберта.' },
        'Ach ja, Entschuldigung, das habe ich ganz vergessen.': { literal: 'Ах да, извинение, это имею я совсем забыл.', literary: 'Ах да, извини, я совсем забыла.' },
        'Er hat vorhin vom Bahnhof aus angerufen und gesagt, dass sein Zug mal wieder Verspätung hatte.': { literal: 'Он имеет недавно с вокзала из позвонил и сказал, что его поезд раз снова опоздание имел.', literary: 'Он недавно звонил с вокзала и сказал, что его поезд опять опаздывает.' },
        'Er kommt sicher jeden Moment.': { literal: 'Он приходит точно каждый момент.', literary: 'Он придёт с минуты на минуту.' },
        'Na hoffentlich.': { literal: 'Ну надеюсь.', literary: 'Надеюсь.' },
        'Ich glaube, ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen.': { literal: 'Я верю, я должен раз тему пунктуальность на повестку дня поставить.', literary: 'Думаю, нужно внести тему пунктуальности в повестку дня.' },
        'So geht das nicht weiter.': { literal: 'Так идёт это не дальше.', literary: 'Так больше продолжаться не может.' },
      },
      vocabulary: [
        { de: 'die Zahnschmerzen', ru: 'зубная боль', gender: 'feminin', plural: '(только Pl.)', collocation: 'hat Zahnschmerzen', example: 'Und Adam hat Zahnschmerzen.' },
        { de: 'der Arzt', ru: 'врач', gender: 'maskulin', plural: 'die Ärzte', collocation: 'vom Arzt', example: 'Er kommt direkt vom Arzt hierher.' },
        { de: 'der Besprechungsraum', ru: 'переговорная', gender: 'maskulin', plural: 'die Besprechungsräume', collocation: 'zum Besprechungsraum', example: 'Also Mario habe ich auf dem Weg zum Besprechungsraum getroffen.' },
        { de: 'der Kopierer', ru: 'копир', gender: 'maskulin', plural: 'die Kopierer', collocation: 'am Kopierer', example: 'Und Carla steht am Kopierer.' },
        { de: 'der Schulausflug', ru: 'школьная экскурсия', gender: 'maskulin', plural: 'die Schulausflüge', collocation: 'bei einem Schulausflug', example: 'Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit.' },
        { de: 'die Flussfahrt', ru: 'речная прогулка', gender: 'feminin', plural: 'die Flussfahrten', collocation: 'eine Flussfahrt', example: 'Sie machen eine Flussfahrt mit Picknick.' },
        { de: 'die Verspätung', ru: 'опоздание', gender: 'feminin', plural: 'die Verspätungen', collocation: 'Verspätung haben', example: 'Er hat vorhin vom Bahnhof aus angerufen und gesagt, dass sein Zug mal wieder Verspätung hatte.' },
        { de: 'die Pünktlichkeit', ru: 'пунктуальность', gender: 'feminin', plural: '-', collocation: 'Thema Pünktlichkeit', example: 'Ich glaube, ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen.' },
        { de: 'die Tagesordnung', ru: 'повестка дня', gender: 'feminin', plural: 'die Tagesordnungen', collocation: 'auf die Tagesordnung', example: 'Ich glaube, ich muss mal das Thema Pünktlichkeit auf die Tagesordnung setzen.' },
        { de: 'losfahren', ru: 'выезжать', type: 'verb', forms: 'fährt los, fuhr los, ist losgefahren', example: 'Warum ist sie nicht früher losgefahren?' },
        { de: 'treffen', ru: 'встречать', type: 'verb', forms: 'trifft, traf, hat getroffen', example: 'Also Mario habe ich auf dem Weg zum Besprechungsraum getroffen.' },
        { de: 'kopieren', ru: 'копировать', type: 'verb', forms: 'kopiert, kopierte, hat kopiert', example: 'Bestimmt kopiert sie noch etwas für uns alle.' },
        { de: 'mitfahren', ru: 'ехать с кем-то', type: 'verb', forms: 'fährt mit, fuhr mit, ist mitgefahren', example: 'Sie fährt bei irgendeinem Schulausflug von ihrer Tochter mit.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Ach ja, Entschuldigung, das habe ich ganz vergessen.' },
      ],
      practiceSentences: [
        { de: 'Sie fährt früh los.', ru: 'Она выезжает рано.', note: 'отделяемая приставка (fährt...los)' },
        { de: 'Ich fahre heute mit.', ru: 'Я еду с вами сегодня.', note: 'отделяемая приставка (fahre...mit)' },
        { de: 'Der Zug hat Verspätung.', ru: 'Поезд опаздывает.', note: 'V2 (hat)' },
        { de: 'Er ruft vom Büro an.', ru: 'Он звонит из офиса.', note: 'отделяемая приставка (ruft...an)' },
        { de: 'Wir setzen das Thema fest.', ru: 'Мы устанавливаем тему.', note: 'отделяемая приставка (setzen...fest)' },
      ],
      question: {
        de: 'Wo ist Adam?',
        ru: 'Где Адам?',
        options: [
          { de: 'Im Büro', ru: 'В офисе' },
          { de: 'Beim Arzt', ru: 'У врача' },
          { de: 'Im Zug', ru: 'В поезде' },
        ],
        correct: 1,
        explanation: 'В тексте: "Adam hat Zahnschmerzen. Er kommt direkt vom Arzt hierher."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-8', teil: 3, aufgabe: 11,
      name: 'Schlüssel',
      type: 'диалог',
      text: 'Hast du meine Schlüssel gesehen? Ich kann sie nicht finden. Vielleicht liegen sie auf dem Küchentisch? Nein, dort sind sie nicht. Und in meinem Rucksack habe ich auch schon nachgesehen. Guck mal, sie stecken noch im Schloss! Na, da kann ich ja lange suchen.',
      sentenceTranslations: {
        'Hast du meine Schlüssel gesehen?': { literal: 'Имеешь ты мои ключи увиденными?', literary: 'Ты видел мои ключи?' },
        'Ich kann sie nicht finden.': { literal: 'Я могу их не найти.', literary: 'Я не могу их найти.' },
        'Vielleicht liegen sie auf dem Küchentisch?': { literal: 'Возможно лежат они на кухонном столе?', literary: 'Может, они лежат на кухонном столе?' },
        'Nein, dort sind sie nicht.': { literal: 'Нет, там есть они не.', literary: 'Нет, там их нет.' },
        'Und in meinem Rucksack habe ich auch schon nachgesehen.': { literal: 'И в моём рюкзаке имею я тоже уже посмотрел.', literary: 'И в рюкзаке я уже смотрел.' },
        'Guck mal, sie stecken noch im Schloss!': { literal: 'Смотри-ка, они торчат ещё в замке!', literary: 'Смотри, они ещё в замке!' },
        'Na, da kann ich ja lange suchen.': { literal: 'Ну, тут могу я ведь долго искать.', literary: 'Ну, я могу долго искать.' },
      },
      vocabulary: [
        { de: 'der Schlüssel', ru: 'ключ', gender: 'maskulin', plural: 'die Schlüssel', collocation: 'meine Schlüssel', example: 'Hast du meine Schlüssel gesehen?' },
        { de: 'der Küchentisch', ru: 'кухонный стол', gender: 'maskulin', plural: 'die Küchentische', collocation: 'auf dem Küchentisch', example: 'Vielleicht liegen sie auf dem Küchentisch?' },
        { de: 'der Rucksack', ru: 'рюкзак', gender: 'maskulin', plural: 'die Rucksäcke', collocation: 'in meinem Rucksack', example: 'Und in meinem Rucksack habe ich auch schon nachgesehen.' },
        { de: 'das Schloss', ru: 'замок', gender: 'neutrum', plural: 'die Schlösser', collocation: 'im Schloss', example: 'Guck mal, sie stecken noch im Schloss!' },
        { de: 'nachsehen', ru: 'проверять, смотреть', type: 'verb', forms: 'sieht nach, sah nach, hat nachgesehen', example: 'Und in meinem Rucksack habe ich auch schon nachgesehen.' },
        { de: 'stecken', ru: 'торчать', type: 'verb', forms: 'steckt, steckte, hat gesteckt', example: 'Guck mal, sie stecken noch im Schloss!' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Na, da kann ich ja lange suchen.' },
      ],
      practiceSentences: [
        { de: 'Ich habe es gefunden.', ru: 'Я нашёл это.', note: 'Perfekt (habe gefunden)' },
        { de: 'Der Schlüssel liegt hier.', ru: 'Ключ лежит здесь.', note: 'V2 (liegt)' },
        { de: 'Sie sieht nach.', ru: 'Она проверяет.', note: 'отделяемая приставка (sieht...nach)' },
        { de: 'Es steckt im Loch.', ru: 'Это торчит в дыре.', note: 'V2 (steckt)' },
        { de: 'Wir suchen überall.', ru: 'Мы ищем везде.', note: 'V2 (suchen)' },
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
        explanation: 'В тексте: "Guck mal, sie stecken noch im Schloss!"'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 12,
      name: 'Küchenschrank',
      type: 'диалог в магазине',
      text: 'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben. Was kostet der denn? Das ist ein Sonderangebot. Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1.500 Euro an. Ich habe schon einen schönen Küchentisch mit Stühlen. Kann ich den Küchenschrank auch ohne Tisch und Stühle bekommen? Nein, tut mir leid. Aber hier drüben haben wir noch schöne Küchenschränke.',
      sentenceTranslations: {
        'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben.': { literal: 'Извинение, я интересуюсь себя за кухонный шкаф там там.', literary: 'Извините, меня интересует вон тот кухонный шкаф.' },
        'Was kostet der denn?': { literal: 'Что стоит тот же?', literary: 'Сколько он стоит?' },
        'Das ist ein Sonderangebot.': { literal: 'Это есть специальное предложение.', literary: 'Это специальное предложение.' },
        'Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1.500 Euro an.': { literal: 'Кухонный шкаф предлагаем мы вместе с кухонным столом и деревянными стульями за только 1500 евро при.', literary: 'Кухонный шкаф мы предлагаем вместе с кухонным столом и деревянными стульями всего за 1500 евро.' },
        'Ich habe schon einen schönen Küchentisch mit Stühlen.': { literal: 'Я имею уже красивый кухонный стол со стульями.', literary: 'У меня уже есть красивый кухонный стол со стульями.' },
        'Kann ich den Küchenschrank auch ohne Tisch und Stühle bekommen?': { literal: 'Могу я кухонный шкаф тоже без стола и стульев получить?', literary: 'Можно купить шкаф без стола и стульев?' },
        'Nein, tut mir leid.': { literal: 'Нет, делает мне жаль.', literary: 'Нет, извините.' },
        'Aber hier drüben haben wir noch schöne Küchenschränke.': { literal: 'Но здесь там имеем мы ещё красивые кухонные шкафы.', literary: 'Но вот здесь у нас есть другие красивые кухонные шкафы.' },
      },
      vocabulary: [
        { de: 'der Küchenschrank', ru: 'кухонный шкаф', gender: 'maskulin', plural: 'die Küchenschränke', collocation: 'für den Küchenschrank', example: 'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben.' },
        { de: 'das Sonderangebot', ru: 'спецпредложение', gender: 'neutrum', plural: 'die Sonderangebote', collocation: 'ein Sonderangebot', example: 'Das ist ein Sonderangebot.' },
        { de: 'der Holzstuhl', ru: 'деревянный стул', gender: 'maskulin', plural: 'die Holzstühle', collocation: 'mit den Holzstühlen', example: 'Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1.500 Euro an.' },
        { de: 'sich interessieren für', ru: 'интересоваться', type: 'verb', forms: 'interessiert sich, interessierte sich, hat sich interessiert', example: 'Entschuldigung, ich interessiere mich für den Küchenschrank dort drüben.' },
        { de: 'kosten', ru: 'стоить', type: 'verb', forms: 'kostet, kostete, hat gekostet', example: 'Was kostet der denn?' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'bietet an, bot an, hat angeboten', example: 'Den Küchenschrank bieten wir zusammen mit dem Küchentisch und den Holzstühlen für nur 1.500 Euro an.' },
        { de: 'bekommen', ru: 'получать, покупать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Kann ich den Küchenschrank auch ohne Tisch und Stühle bekommen?' },
      ],
      practiceSentences: [
        { de: 'Das kostet viel.', ru: 'Это стоит дорого.', note: 'V2 (kostet)' },
        { de: 'Wir bieten es an.', ru: 'Мы это предлагаем.', note: 'отделяемая приставка (bieten...an)' },
        { de: 'Ich interessiere mich dafür.', ru: 'Меня это интересует.', note: 'возвратный (interessiere mich)' },
        { de: 'Sie kauft den Tisch.', ru: 'Она покупает стол.', note: 'V2 (kauft)' },
        { de: 'Das tut mir leid.', ru: 'Мне жаль.', note: 'V2 (tut)' },
      ],
      question: {
        de: 'Was möchte der Kunde kaufen?',
        ru: 'Что хочет купить клиент?',
        options: [
          { de: 'Einen Küchenschrank mit Tisch und Stühlen', ru: 'Кухонный шкаф со столом и стульями' },
          { de: 'Nur einen Küchenschrank', ru: 'Только кухонный шкаф' },
          { de: 'Nur einen Küchentisch', ru: 'Только кухонный стол' },
        ],
        correct: 1,
        explanation: 'В тексте: "Kann ich den Küchenschrank auch ohne Tisch und Stühle bekommen?"'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 13,
      name: 'Hamburg Ticket',
      type: 'телефонный разговор',
      text: 'Hamburg Ticket Krüger, guten Tag! Was kann ich für Sie tun? Tag, ich würde gern für nächsten Samstag zwei Theaterkarten für Romeo und Julia bestellen. Oh, das tut mir leid. Die Vorstellung ist leider schon ausgebucht. Schade. Gibt es denn noch Karten für das Konzert in der Eishalle? Da haben Sie aber wirklich Pech. Für das Konzert gibt es schon seit einem Monat keine Karten mehr. Wie ärgerlich! Gibt es denn noch Karten für das Eishockeyspiel am Samstagabend? Ja, da haben Sie Glück. Da gibt es noch Restkarten.',
      sentenceTranslations: {
        'Hamburg Ticket Krüger, guten Tag!': { literal: 'Гамбург Билет Крюгер, добрый день!', literary: 'Гамбург Тикет Крюгер, добрый день!' },
        'Was kann ich für Sie tun?': { literal: 'Что могу я для вас сделать?', literary: 'Чем могу помочь?' },
        'Tag, ich würde gern für nächsten Samstag zwei Theaterkarten für Romeo und Julia bestellen.': { literal: 'День, я бы охотно на следующую субботу два театральных билета для Ромео и Джульетты заказать.', literary: 'Здравствуйте, я хотел бы заказать два билета на «Ромео и Джульетту» на следующую субботу.' },
        'Oh, das tut mir leid.': { literal: 'О, это делает мне жаль.', literary: 'О, извините.' },
        'Die Vorstellung ist leider schon ausgebucht.': { literal: 'Представление есть к сожалению уже забронировано полностью.', literary: 'Спектакль, к сожалению, уже распродан.' },
        'Schade.': { literal: 'Жаль.', literary: 'Жаль.' },
        'Gibt es denn noch Karten für das Konzert in der Eishalle?': { literal: 'Даёт это же ещё билеты для концерта в ледовом дворце?', literary: 'А есть ещё билеты на концерт в Ледовом дворце?' },
        'Da haben Sie aber wirklich Pech.': { literal: 'Тут имеете вы но действительно невезение.', literary: 'Вам действительно не везёт.' },
        'Für das Konzert gibt es schon seit einem Monat keine Karten mehr.': { literal: 'Для концерта даёт это уже с одного месяца никаких билетов больше.', literary: 'На концерт уже месяц как нет билетов.' },
        'Wie ärgerlich!': { literal: 'Как досадно!', literary: 'Как досадно!' },
        'Gibt es denn noch Karten für das Eishockeyspiel am Samstagabend?': { literal: 'Даёт это же ещё билеты для хоккейной игры в субботний вечер?', literary: 'А на хоккейный матч в субботу вечером есть билеты?' },
        'Ja, da haben Sie Glück.': { literal: 'Да, тут имеете вы счастье.', literary: 'Да, вам повезло.' },
        'Da gibt es noch Restkarten.': { literal: 'Тут даёт это ещё остаточные билеты.', literary: 'Ещё остались билеты.' },
      },
      vocabulary: [
        { de: 'die Theaterkarte', ru: 'театральный билет', gender: 'feminin', plural: 'die Theaterkarten', collocation: 'zwei Theaterkarten', example: 'Tag, ich würde gern für nächsten Samstag zwei Theaterkarten für Romeo und Julia bestellen.' },
        { de: 'die Vorstellung', ru: 'представление', gender: 'feminin', plural: 'die Vorstellungen', collocation: 'die Vorstellung', example: 'Die Vorstellung ist leider schon ausgebucht.' },
        { de: 'die Eishalle', ru: 'ледовый дворец', gender: 'feminin', plural: 'die Eishallen', collocation: 'in der Eishalle', example: 'Gibt es denn noch Karten für das Konzert in der Eishalle?' },
        { de: 'das Eishockeyspiel', ru: 'хоккейный матч', gender: 'neutrum', plural: 'die Eishockeyspiele', collocation: 'für das Eishockeyspiel', example: 'Gibt es denn noch Karten für das Eishockeyspiel am Samstagabend?' },
        { de: 'die Restkarte', ru: 'оставшийся билет', gender: 'feminin', plural: 'die Restkarten', collocation: 'noch Restkarten', example: 'Da gibt es noch Restkarten.' },
        { de: 'bestellen', ru: 'заказывать', type: 'verb', forms: 'bestellt, bestellte, hat bestellt', example: 'Tag, ich würde gern für nächsten Samstag zwei Theaterkarten für Romeo und Julia bestellen.' },
      ],
      practiceSentences: [
        { de: 'Ich würde gern bestellen.', ru: 'Я хотел бы заказать.', note: 'Konjunktiv II (würde)' },
        { de: 'Das Konzert ist ausgebucht.', ru: 'Концерт распродан.', note: 'V2 (ist)' },
        { de: 'Sie hat heute Glück.', ru: 'Ей сегодня везёт.', note: 'V2 (hat)' },
        { de: 'Es gibt keine Karten.', ru: 'Билетов нет.', note: 'es gibt + Akk' },
        { de: 'Wir kaufen Restkarten.', ru: 'Мы покупаем оставшиеся билеты.', note: 'V2 (kaufen)' },
      ],
      question: {
        de: 'Wofür gibt es noch Karten?',
        ru: 'На что ещё есть билеты?',
        options: [
          { de: 'Für Romeo und Julia', ru: 'На «Ромео и Джульетту»' },
          { de: 'Für das Konzert', ru: 'На концерт' },
          { de: 'Für das Eishockeyspiel', ru: 'На хоккейный матч' },
        ],
        correct: 2,
        explanation: 'В тексте: "Gibt es denn noch Karten für das Eishockeyspiel? - Ja, da haben Sie Glück."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 14,
      name: 'Einkauf',
      type: 'диалог',
      text: 'Wie war der Einkauf? Hast du alles bekommen? Nein, leider nicht. Eine schöne Tischdecke habe ich nicht gefunden. Aber die Kerzenständer sind toll, oder? Ja, sehr schön. Und was ist das? Das ist eine Porzellanpuppe. Ist die nicht super? Na ja, sie ist vielleicht etwas groß.',
      sentenceTranslations: {
        'Wie war der Einkauf?': { literal: 'Как был покупки?', literary: 'Как прошёл шопинг?' },
        'Hast du alles bekommen?': { literal: 'Имеешь ты всё получено?', literary: 'Ты всё купил?' },
        'Nein, leider nicht.': { literal: 'Нет, к сожалению не.', literary: 'Нет, к сожалению.' },
        'Eine schöne Tischdecke habe ich nicht gefunden.': { literal: 'Красивую скатерть имею я не найдено.', literary: 'Красивую скатерть я не нашёл.' },
        'Aber die Kerzenständer sind toll, oder?': { literal: 'Но подсвечники есть отличные, или?', literary: 'Но подсвечники отличные, правда?' },
        'Ja, sehr schön.': { literal: 'Да, очень красиво.', literary: 'Да, очень красивые.' },
        'Und was ist das?': { literal: 'И что есть это?', literary: 'А это что?' },
        'Das ist eine Porzellanpuppe.': { literal: 'Это есть фарфоровая кукла.', literary: 'Это фарфоровая кукла.' },
        'Ist die nicht super?': { literal: 'Есть та не супер?', literary: 'Правда супер?' },
        'Na ja, sie ist vielleicht etwas groß.': { literal: 'Ну да, она есть возможно немного большая.', literary: 'Ну, она немного великовата.' },
      },
      vocabulary: [
        { de: 'der Einkauf', ru: 'покупки, шопинг', gender: 'maskulin', plural: 'die Einkäufe', collocation: 'der Einkauf', example: 'Wie war der Einkauf?' },
        { de: 'die Tischdecke', ru: 'скатерть', gender: 'feminin', plural: 'die Tischdecken', collocation: 'eine schöne Tischdecke', example: 'Eine schöne Tischdecke habe ich nicht gefunden.' },
        { de: 'der Kerzenständer', ru: 'подсвечник', gender: 'maskulin', plural: 'die Kerzenständer', collocation: 'die Kerzenständer', example: 'Aber die Kerzenständer sind toll, oder?' },
        { de: 'die Porzellanpuppe', ru: 'фарфоровая кукла', gender: 'feminin', plural: 'die Porzellanpuppen', collocation: 'eine Porzellanpuppe', example: 'Das ist eine Porzellanpuppe.' },
      ],
      practiceSentences: [
        { de: 'Ich habe es gekauft.', ru: 'Я это купил.', note: 'Perfekt (habe gekauft)' },
        { de: 'Sie findet nichts.', ru: 'Она ничего не находит.', note: 'V2 (findet)' },
        { de: 'Das ist toll, oder?', ru: 'Это отлично, правда?', note: 'V2 (ist)' },
        { de: 'Die Puppe ist klein.', ru: 'Кукла маленькая.', note: 'V2 (ist)' },
        { de: 'Er bekommt alles.', ru: 'Он получает всё.', note: 'V2 (bekommt)' },
      ],
      question: {
        de: 'Was hat die Person nicht gefunden?',
        ru: 'Что человек не нашёл?',
        options: [
          { de: 'Kerzenständer', ru: 'Подсвечники' },
          { de: 'Eine Tischdecke', ru: 'Скатерть' },
          { de: 'Eine Porzellanpuppe', ru: 'Фарфоровую куклу' },
        ],
        correct: 1,
        explanation: 'В тексте: "Eine schöne Tischdecke habe ich nicht gefunden."'
      }
    },
    {
      id: 'text-12', teil: 3, aufgabe: 15,
      name: 'Geschenk Miguel',
      type: 'диалог',
      text: 'Was wollen wir Miguel zum Geburtstag schenken? Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein. Also ich weiß nicht. Ist das nicht etwas unpersönlich? Wollen wir ihm nicht lieber ein gutes Buch schenken? Bist du sicher, dass Miguel gern liest? Nein, du hast recht. Aber er interessiert sich auf jeden Fall für Fußball. Vielleicht sollten wir ihm ein Trikot schenken. Ja, das ist eine gute Idee. Er ist doch Fan von Borussia Dortmund. Kannst du eins bestellen?',
      sentenceTranslations: {
        'Was wollen wir Miguel zum Geburtstag schenken?': { literal: 'Что хотим мы Мигелю к дню рождения подарить?', literary: 'Что подарим Мигелю на день рождения?' },
        'Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein.': { literal: 'Я предлагаю перед, мы покупаем ему красивую бутылку вина.', literary: 'Предлагаю купить ему хорошую бутылку вина.' },
        'Also ich weiß nicht.': { literal: 'Итак я знаю не.', literary: 'Не знаю.' },
        'Ist das nicht etwas unpersönlich?': { literal: 'Есть это не немного неличное?', literary: 'Не слишком ли это безлично?' },
        'Wollen wir ihm nicht lieber ein gutes Buch schenken?': { literal: 'Хотим мы ему не лучше хорошую книгу подарить?', literary: 'Может, лучше подарить хорошую книгу?' },
        'Bist du sicher, dass Miguel gern liest?': { literal: 'Есть ты уверен, что Мигель охотно читает?', literary: 'Ты уверен, что Мигель любит читать?' },
        'Nein, du hast recht.': { literal: 'Нет, ты имеешь право.', literary: 'Нет, ты прав.' },
        'Aber er interessiert sich auf jeden Fall für Fußball.': { literal: 'Но он интересуется себя на каждый случай футболом.', literary: 'Но он точно интересуется футболом.' },
        'Vielleicht sollten wir ihm ein Trikot schenken.': { literal: 'Возможно должны мы ему футболку подарить.', literary: 'Может, подарим ему футболку?' },
        'Ja, das ist eine gute Idee.': { literal: 'Да, это есть хорошая идея.', literary: 'Да, хорошая идея.' },
        'Er ist doch Fan von Borussia Dortmund.': { literal: 'Он есть же фанат Боруссии Дортмунд.', literary: 'Он же болеет за Боруссию Дортмунд.' },
        'Kannst du eins bestellen?': { literal: 'Можешь ты одну заказать?', literary: 'Можешь заказать?' },
      },
      vocabulary: [
        { de: 'der Geburtstag', ru: 'день рождения', gender: 'maskulin', plural: 'die Geburtstage', collocation: 'zum Geburtstag', example: 'Was wollen wir Miguel zum Geburtstag schenken?' },
        { de: 'die Flasche', ru: 'бутылка', gender: 'feminin', plural: 'die Flaschen', collocation: 'eine Flasche Wein', example: 'Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein.' },
        { de: 'das Trikot', ru: 'футболка (спортивная)', gender: 'neutrum', plural: 'die Trikots', collocation: 'ein Trikot', example: 'Vielleicht sollten wir ihm ein Trikot schenken.' },
        { de: 'die Idee', ru: 'идея', gender: 'feminin', plural: 'die Ideen', collocation: 'eine gute Idee', example: 'Ja, das ist eine gute Idee.' },
        { de: 'schenken', ru: 'дарить', type: 'verb', forms: 'schenkt, schenkte, hat geschenkt', example: 'Was wollen wir Miguel zum Geburtstag schenken?' },
        { de: 'vorschlagen', ru: 'предлагать', type: 'verb', forms: 'schlägt vor, schlug vor, hat vorgeschlagen', example: 'Ich schlage vor, wir kaufen ihm eine schöne Flasche Wein.' },
        { de: 'lesen', ru: 'читать', type: 'verb', forms: 'liest, las, hat gelesen', example: 'Bist du sicher, dass Miguel gern liest?' },
      ],
      practiceSentences: [
        { de: 'Wir schenken ihm etwas.', ru: 'Мы дарим ему что-то.', note: 'V2 (schenken)' },
        { de: 'Ich schlage das vor.', ru: 'Я это предлагаю.', note: 'отделяемая приставка (schlage...vor)' },
        { de: 'Er liest gern Bücher.', ru: 'Он любит читать книги.', note: 'V2 (liest)' },
        { de: 'Sie interessiert sich dafür.', ru: 'Она этим интересуется.', note: 'возвратный (interessiert sich)' },
        { de: 'Kannst du es kaufen?', ru: 'Можешь это купить?', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was schenken sie Miguel?',
        ru: 'Что они подарят Мигелю?',
        options: [
          { de: 'Eine Flasche Wein', ru: 'Бутылку вина' },
          { de: 'Ein Buch', ru: 'Книгу' },
          { de: 'Ein Trikot', ru: 'Футболку' },
        ],
        correct: 2,
        explanation: 'В тексте: "Vielleicht sollten wir ihm ein Trikot schenken. - Ja, das ist eine gute Idee."'
      }
    },

    /* ═══ TEIL 4 — Interview Kellermann ═══ */
    {
      id: 'text-13', teil: 4, aufgabe: 'Beispiel',
      name: 'Interview Beispiel',
      type: 'интервью',
      text: 'Frau Kellermann, vom Mädchen vom Bauernhof zur Tourismusexpertin. Sie sind ein Vorbild für viele Mädchen aus unserer Region. Wie war Ihre Kindheit auf dem Land? Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt. Eigentlich wollte ich auch ein Junge sein. Die Mädchen fand ich langweilig.',
      sentenceTranslations: {
        'Frau Kellermann, vom Mädchen vom Bauernhof zur Tourismusexpertin.': { literal: 'Госпожа Келлерманн, от девочки с крестьянского двора к эксперту по туризму.', literary: 'Фрау Келлерманн, от деревенской девочки до эксперта по туризму.' },
        'Sie sind ein Vorbild für viele Mädchen aus unserer Region.': { literal: 'Вы есть образец для многих девочек из нашего региона.', literary: 'Вы образец для подражания для многих девушек нашего региона.' },
        'Wie war Ihre Kindheit auf dem Land?': { literal: 'Как было ваше детство на земле?', literary: 'Как прошло ваше детство в деревне?' },
        'Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt.': { literal: 'Я была всегда снаружи и имею с мальчиками из нашей деревни играла.', literary: 'Я всегда была на улице и играла с деревенскими мальчишками.' },
        'Eigentlich wollte ich auch ein Junge sein.': { literal: 'Собственно хотела я тоже мальчиком быть.', literary: 'Вообще-то я хотела быть мальчиком.' },
        'Die Mädchen fand ich langweilig.': { literal: 'Девочек находила я скучными.', literary: 'Девочки мне казались скучными.' },
      },
      vocabulary: [
        { de: 'der Bauernhof', ru: 'крестьянский двор', gender: 'maskulin', plural: 'die Bauernhöfe', collocation: 'vom Bauernhof', example: 'Frau Kellermann, vom Mädchen vom Bauernhof zur Tourismusexpertin.' },
        { de: 'das Vorbild', ru: 'образец для подражания', gender: 'neutrum', plural: 'die Vorbilder', collocation: 'ein Vorbild für', example: 'Sie sind ein Vorbild für viele Mädchen aus unserer Region.' },
        { de: 'die Kindheit', ru: 'детство', gender: 'feminin', plural: '-', collocation: 'Ihre Kindheit', example: 'Wie war Ihre Kindheit auf dem Land?' },
        { de: 'das Dorf', ru: 'деревня', gender: 'neutrum', plural: 'die Dörfer', collocation: 'aus unserem Dorf', example: 'Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt.' },
        { de: 'spielen', ru: 'играть', type: 'verb', forms: 'spielt, spielte, hat gespielt', example: 'Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt.' },
      ],
      practiceSentences: [
        { de: 'Sie ist ein Vorbild.', ru: 'Она образец для подражания.', note: 'V2 (ist)' },
        { de: 'Ich spiele draußen.', ru: 'Я играю на улице.', note: 'V2 (spiele)' },
        { de: 'Er findet das interessant.', ru: 'Он находит это интересным.', note: 'V2 (findet)' },
        { de: 'Wir leben auf dem Land.', ru: 'Мы живём в деревне.', note: 'V2 (leben)' },
        { de: 'Das war schön.', ru: 'Это было прекрасно.', note: 'V2 (war)' },
      ],
      question: {
        de: 'Wie war die Kindheit von Frau Kellermann?',
        ru: 'Как прошло детство фрау Келлерманн?',
        options: [
          { de: 'Sie war immer drinnen', ru: 'Она всегда была дома' },
          { de: 'Sie hat mit Jungen draußen gespielt', ru: 'Она играла с мальчишками на улице' },
          { de: 'Sie hat viel gelesen', ru: 'Она много читала' },
        ],
        correct: 1,
        explanation: 'В тексте: "Ich war immer draußen und habe mit den Jungen aus unserem Dorf gespielt."'
      }
    },
    {
      id: 'text-14', teil: 4, aufgabe: 16,
      name: 'Interview Kellermann',
      type: 'интервью',
      text: 'War Ihre ganze Kindheit so schön? Nein, leider nicht. Mit 11 bin ich ins Gymnasium gekommen und da musste jeden Tag eine Stunde mit dem Bus in die Stadt fahren. Aber ich habe dort Fremdsprachen gelernt, Englisch und Französisch. Hat es sich denn gelohnt? Ja, nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen. Ich war die Einzige in unserer Familie mit einem Studium. Wow, das war bestimmt nicht immer leicht. Nein. Als Studentin wäre ich gerne mit meinen Freundinnen gereist, aber das konnte ich nicht. Ich musste in den Ferien meinen Eltern helfen. Auf dem Land gibt es im Sommer sehr viel Arbeit. Und was machen Sie jetzt? Jetzt habe ich ein erfolgreiches Reisebüro in der Stadt und mir macht meine Arbeit sehr viel Spaß. Im Urlaub bin ich immer unterwegs und schaue nach neuen spannenden Reisezielen. Ich mache Städtereisen in Europa und fliege oft nach Asien. Vor ein paar Monaten bin ich wieder aufs Land gezogen. Da genieße ich die Ruhe, besonders wenn ich von meinen Reisen zurückkomme. So ein Leben habe ich mir immer gewünscht. Das ist wirklich toll. Alles Gute für Sie und danke für das Gespräch! Gerne.',
      sentenceTranslations: {
        'War Ihre ganze Kindheit so schön?': { literal: 'Было ваше всё детство так прекрасно?', literary: 'Всё ваше детство было таким прекрасным?' },
        'Nein, leider nicht.': { literal: 'Нет, к сожалению не.', literary: 'Нет, к сожалению.' },
        'Mit 11 bin ich ins Gymnasium gekommen und da musste jeden Tag eine Stunde mit dem Bus in die Stadt fahren.': { literal: 'С 11 есть я в гимназию пришла и тут должна была каждый день один час с автобусом в город ехать.', literary: 'В 11 лет я пошла в гимназию и должна была каждый день час ехать на автобусе в город.' },
        'Aber ich habe dort Fremdsprachen gelernt, Englisch und Französisch.': { literal: 'Но я имею там иностранные языки выучила, английский и французский.', literary: 'Но там я изучала иностранные языки — английский и французский.' },
        'Hat es sich denn gelohnt?': { literal: 'Имеет это себя же стоило?', literary: 'Это того стоило?' },
        'Ja, nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen.': { literal: 'Да, после экзамена на аттестат зрелости есть я для моего изучения туризма в Кёльн переехала.', literary: 'Да, после окончания школы я переехала в Кёльн учиться на туризм.' },
        'Ich war die Einzige in unserer Familie mit einem Studium.': { literal: 'Я была единственная в нашей семье с учёбой.', literary: 'Я была единственной в семье с высшим образованием.' },
        'Wow, das war bestimmt nicht immer leicht.': { literal: 'Вау, это было определённо не всегда легко.', literary: 'Вау, это наверняка было нелегко.' },
        'Nein.': { literal: 'Нет.', literary: 'Нет.' },
        'Als Studentin wäre ich gerne mit meinen Freundinnen gereist, aber das konnte ich nicht.': { literal: 'Как студентка была бы я охотно с моими подругами путешествовала, но это могла я не.', literary: 'Будучи студенткой, я бы с удовольствием путешествовала с подругами, но не могла.' },
        'Ich musste in den Ferien meinen Eltern helfen.': { literal: 'Я должна была в каникулы моим родителям помогать.', literary: 'В каникулы я должна была помогать родителям.' },
        'Auf dem Land gibt es im Sommer sehr viel Arbeit.': { literal: 'На земле даёт это летом очень много работы.', literary: 'В деревне летом очень много работы.' },
        'Und was machen Sie jetzt?': { literal: 'И что делаете вы сейчас?', literary: 'А чем вы занимаетесь сейчас?' },
        'Jetzt habe ich ein erfolgreiches Reisebüro in der Stadt und mir macht meine Arbeit sehr viel Spaß.': { literal: 'Сейчас имею я успешное турбюро в городе и мне делает моя работа очень много удовольствия.', literary: 'Сейчас у меня успешное турбюро в городе, и мне очень нравится моя работа.' },
        'Im Urlaub bin ich immer unterwegs und schaue nach neuen spannenden Reisezielen.': { literal: 'В отпуске есть я всегда в пути и смотрю за новыми захватывающими целями путешествий.', literary: 'В отпуске я всегда в разъездах, ищу новые интересные направления.' },
        'Ich mache Städtereisen in Europa und fliege oft nach Asien.': { literal: 'Я делаю городские поездки в Европе и летаю часто в Азию.', literary: 'Я путешествую по городам Европы и часто летаю в Азию.' },
        'Vor ein paar Monaten bin ich wieder aufs Land gezogen.': { literal: 'Перед парой месяцев есть я снова на землю переехала.', literary: 'Пару месяцев назад я снова переехала в деревню.' },
        'Da genieße ich die Ruhe, besonders wenn ich von meinen Reisen zurückkomme.': { literal: 'Там наслаждаюсь я тишиной, особенно когда я от моих поездок обратно прихожу.', literary: 'Там я наслаждаюсь тишиной, особенно когда возвращаюсь из поездок.' },
        'So ein Leben habe ich mir immer gewünscht.': { literal: 'Такую жизнь имею я себе всегда желала.', literary: 'О такой жизни я всегда мечтала.' },
        'Das ist wirklich toll.': { literal: 'Это есть действительно отлично.', literary: 'Это действительно здорово.' },
        'Alles Gute für Sie und danke für das Gespräch!': { literal: 'Всё хорошее для вас и спасибо за разговор!', literary: 'Всего вам доброго и спасибо за беседу!' },
        'Gerne.': { literal: 'Охотно.', literary: 'Пожалуйста.' },
      },
      vocabulary: [
        { de: 'das Gymnasium', ru: 'гимназия', gender: 'neutrum', plural: 'die Gymnasien', collocation: 'ins Gymnasium', example: 'Mit 11 bin ich ins Gymnasium gekommen und da musste jeden Tag eine Stunde mit dem Bus in die Stadt fahren.' },
        { de: 'die Fremdsprache', ru: 'иностранный язык', gender: 'feminin', plural: 'die Fremdsprachen', collocation: 'Fremdsprachen lernen', example: 'Aber ich habe dort Fremdsprachen gelernt, Englisch und Französisch.' },
        { de: 'das Abitur', ru: 'экзамен на аттестат зрелости', gender: 'neutrum', plural: '-', collocation: 'nach dem Abitur', example: 'Ja, nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen.' },
        { de: 'das Reisebüro', ru: 'турбюро', gender: 'neutrum', plural: 'die Reisebüros', collocation: 'ein erfolgreiches Reisebüro', example: 'Jetzt habe ich ein erfolgreiches Reisebüro in der Stadt und mir macht meine Arbeit sehr viel Spaß.' },
        { de: 'das Reiseziel', ru: 'направление путешествия', gender: 'neutrum', plural: 'die Reiseziele', collocation: 'spannende Reiseziele', example: 'Im Urlaub bin ich immer unterwegs und schaue nach neuen spannenden Reisezielen.' },
        { de: 'die Ruhe', ru: 'тишина, покой', gender: 'feminin', plural: '-', collocation: 'die Ruhe genießen', example: 'Da genieße ich die Ruhe, besonders wenn ich von meinen Reisen zurückkomme.' },
        { de: 'das Gespräch', ru: 'разговор, беседа', gender: 'neutrum', plural: 'die Gespräche', collocation: 'danke für das Gespräch', example: 'Alles Gute für Sie und danke für das Gespräch!' },
        { de: 'lernen', ru: 'учить, изучать', type: 'verb', forms: 'lernt, lernte, hat gelernt', example: 'Aber ich habe dort Fremdsprachen gelernt, Englisch und Französisch.' },
        { de: 'ziehen', ru: 'переезжать', type: 'verb', forms: 'zieht, zog, ist gezogen', example: 'Ja, nach dem Abitur bin ich für mein Tourismusstudium nach Köln gezogen.' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Ich musste in den Ferien meinen Eltern helfen.' },
        { de: 'genießen', ru: 'наслаждаться', type: 'verb', forms: 'genießt, genoss, hat genossen', example: 'Da genieße ich die Ruhe, besonders wenn ich von meinen Reisen zurückkomme.' },
        { de: 'sich wünschen', ru: 'желать себе, мечтать', type: 'verb', forms: 'wünscht sich, wünschte sich, hat sich gewünscht', example: 'So ein Leben habe ich mir immer gewünscht.' },
      ],
      practiceSentences: [
        { de: 'Ich bin nach Berlin gezogen.', ru: 'Я переехал в Берлин.', note: 'Perfekt с sein (gezogen)' },
        { de: 'Sie muss jeden Tag arbeiten.', ru: 'Она должна каждый день работать.', note: 'модальный + инфинитив' },
        { de: 'Das macht mir Spaß.', ru: 'Мне это нравится.', note: 'V2 (macht)' },
        { de: 'Er ist immer unterwegs.', ru: 'Он всегда в разъездах.', note: 'V2 (ist)' },
        { de: 'Wir genießen die Ruhe.', ru: 'Мы наслаждаемся тишиной.', note: 'V2 (genießen)' },
      ],
      question: {
        de: 'Wo wohnt Frau Kellermann jetzt?',
        ru: 'Где сейчас живёт фрау Келлерманн?',
        options: [
          { de: 'In Köln', ru: 'В Кёльне' },
          { de: 'In der Stadt', ru: 'В городе' },
          { de: 'Auf dem Land', ru: 'В деревне' },
        ],
        correct: 2,
        explanation: 'В тексте: "Vor ein paar Monaten bin ich wieder aufs Land gezogen."'
      }
    },
  ],

  prompts: {
    exercises: {
      instruction: 'Интерактивные упражнения работают прямо на сайте — выберите любое из списка ниже.',
      promptText: null,
    },
    original: {
      instruction: 'Оригинальная транскрипция аудио — все 14 мини-текстов по частям.',
      promptText: null,
    },
    translation: {
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табе "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Radio City Verkehr).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'es gibt + Akkusativ: es gibt Stau, es gibt keine Parkplätze',
    'Отделяемые приставки: anrufen, vorstellen, umsteigen, anreisen, losfahren, mitfahren, anbieten, vorschlagen, nachsehen',
    'Модальные глаголы: müssen, können, möchten, wollen, dürfen, sollen',
    'weil/dass-Nebensatz: глагол в конце',
    'Perfekt с sein: ist losgefahren, ist gezogen, ist gekommen, ist umgestiegen',
    'Konjunktiv II: würde gern bestellen, wäre gerne gereist',
    'Рефлексивные глаголы: sich interessieren für, sich lohnen, sich wünschen',
    'mit + Dativ: mit dem Bus, mit dem Auto, mit den Holzstühlen',
  ],
};

LESSONS.push(LESSON_27);
