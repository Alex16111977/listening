/* ═══════════════════════════════════════════════════════════
   Lesson 33 — Goethe Zertifikat A2 Hören — Fit in Deutsch 2
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_33 = {
  id: 'lesson-33',
  number: 33,
  title: 'Goethe A2 Hören — Fit in Deutsch 2',
  subtitle: 'Prüfung, Schule, Garten, U-Bahn, Wohnen, Weihnachten und Onlineunterricht',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-33',
  videoUrl: 'https://www.youtube.com/watch?v=U6uVxR0tHiI',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Prüfung',
      type: 'объявление',
      text: 'Achtung, Achtung, liebe Kinder, die mündliche Prüfung beginnt in wenigen Minuten. Bitte kontrolliert auf dem Teilnehmerpass eure Daten und die Zeit eurer Prüfung. Alle Kandidaten, die um 11 Uhr geprüft werden sollen, bitte jetzt mit ihrem Personalausweis und ihrer Anmeldung zum Haupteingang kommen. Elektronische Geräte, Handys und Wörterbücher sind verboten. Eure Eltern können auf dem Schulhof auf euch warten. Viel Erfolg!',
      sentenceTranslations: {
        'Achtung, Achtung, liebe Kinder, die mündliche Prüfung beginnt in wenigen Minuten.': { literal: 'Внимание, внимание, дорогие дети, устный экзамен начинается в немногих минутах', literary: 'Внимание, внимание, дорогие дети! Устный экзамен начнётся через несколько минут.' },
        'Bitte kontrolliert auf dem Teilnehmerpass eure Daten und die Zeit eurer Prüfung.': { literal: 'Пожалуйста проверьте на пропуске-участника ваши данные и время вашего экзамена', literary: 'Пожалуйста, проверьте в экзаменационном листе ваши данные и время экзамена.' },
        'Alle Kandidaten, die um 11 Uhr geprüft werden sollen, bitte jetzt mit ihrem Personalausweis und ihrer Anmeldung zum Haupteingang kommen.': { literal: 'Все кандидаты, которые в 11 часов проверены быть должны, пожалуйста сейчас с их удостоверением личности и их регистрацией к главному входу прийти', literary: 'Всем кандидатам, которые сдают экзамен в 11 часов, просьба подойти к главному входу с удостоверением личности и регистрацией.' },
        'Elektronische Geräte, Handys und Wörterbücher sind verboten.': { literal: 'Электронные приборы, мобильные и словари есть запрещены', literary: 'Электронные устройства, мобильные телефоны и словари запрещены.' },
        'Eure Eltern können auf dem Schulhof auf euch warten.': { literal: 'Ваши родители могут на школьном дворе на вас ждать', literary: 'Ваши родители могут ждать вас на школьном дворе.' },
        'Viel Erfolg!': { literal: 'Много успеха', literary: 'Удачи!' },
      },
      vocabulary: [
        { de: 'die Prüfung', plural: 'die Prüfungen', ru: 'экзамен', gender: 'feminin', collocation: 'die mündliche Prüfung', example: 'Die mündliche Prüfung beginnt in wenigen Minuten.' },
        { de: 'der Teilnehmerpass', plural: 'die Teilnehmerpässe', ru: 'экзаменационный лист', gender: 'maskulin', collocation: 'auf dem Teilnehmerpass kontrollieren', example: 'Bitte kontrolliert auf dem Teilnehmerpass eure Daten.' },
        { de: 'der Kandidat', plural: 'die Kandidaten', ru: 'кандидат', gender: 'maskulin', collocation: 'alle Kandidaten', example: 'Alle Kandidaten, die um 11 Uhr geprüft werden sollen.' },
        { de: 'der Personalausweis', plural: 'die Personalausweise', ru: 'удостоверение личности', gender: 'maskulin', collocation: 'mit dem Personalausweis', example: 'Bitte jetzt mit ihrem Personalausweis zum Haupteingang kommen.' },
        { de: 'die Anmeldung', plural: 'die Anmeldungen', ru: 'регистрация', gender: 'feminin', collocation: 'mit der Anmeldung kommen', example: 'Mit ihrer Anmeldung zum Haupteingang kommen.' },
        { de: 'der Haupteingang', plural: 'die Haupteingänge', ru: 'главный вход', gender: 'maskulin', collocation: 'zum Haupteingang kommen', example: 'Bitte jetzt zum Haupteingang kommen.' },
        { de: 'das Gerät', plural: 'die Geräte', ru: 'устройство, прибор', gender: 'neutrum', collocation: 'elektronische Geräte', example: 'Elektronische Geräte, Handys und Wörterbücher sind verboten.' },
        { de: 'das Wörterbuch', plural: 'die Wörterbücher', ru: 'словарь', gender: 'neutrum', collocation: 'Wörterbücher sind verboten', example: 'Elektronische Geräte, Handys und Wörterbücher sind verboten.' },
        { de: 'der Schulhof', plural: 'die Schulhöfe', ru: 'школьный двор', gender: 'maskulin', collocation: 'auf dem Schulhof warten', example: 'Eure Eltern können auf dem Schulhof auf euch warten.' },
        { de: 'beginnen', ru: 'начинаться', type: 'verb', forms: 'beginnt, begann, hat begonnen', example: 'Die mündliche Prüfung beginnt in wenigen Minuten.' },
        { de: 'kontrollieren', ru: 'проверять', type: 'verb', forms: 'kontrolliert, kontrollierte, hat kontrolliert', example: 'Bitte kontrolliert auf dem Teilnehmerpass eure Daten.' },
        { de: 'verbieten', ru: 'запрещать', type: 'verb', forms: 'verbietet, verbot, hat verboten', example: 'Elektronische Geräte sind verboten.' },
        { de: 'mündlich', ru: 'устный', type: 'adj', example: 'Die mündliche Prüfung beginnt in wenigen Minuten.' },
        { de: 'elektronisch', ru: 'электронный', type: 'adj', example: 'Elektronische Geräte sind verboten.' },
      ],
      practiceSentences: [
        { de: 'Die Prüfung beginnt um 9 Uhr.', ru: 'Экзамен начинается в 9 часов.', note: 'V2' },
        { de: 'Wir sollen pünktlich kommen.', ru: 'Мы должны прийти вовремя.', note: 'модальный + инфинитив' },
        { de: 'Bitte wartet auf dem Schulhof!', ru: 'Пожалуйста, ждите на школьном дворе!', note: 'Imperativ' },
        { de: 'Handys sind hier verboten.', ru: 'Мобильные здесь запрещены.', note: 'V2, Passiv состояния' },
        { de: 'Du kannst draußen auf mich warten.', ru: 'Ты можешь ждать меня снаружи.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Wann sollen die Kandidaten zum Haupteingang kommen?',
        ru: 'Когда кандидаты должны подойти к главному входу?',
        options: [
          { de: 'In wenigen Minuten', ru: 'Через несколько минут' },
          { de: 'Um 11 Uhr', ru: 'В 11 часов' },
          { de: 'Nach der Prüfung', ru: 'После экзамена' },
        ],
        correct: 1,
        explanation: 'В тексте сказано: "alle Kandidaten die um 11 Uhr geprüft werden sollen bitte jetzt zum Haupteingang kommen".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Nikolas',
      type: 'телефонное сообщение',
      text: 'Hallo Julian, hier ist Nikolas. Mir geht es wieder besser. Hab kein Fieber mehr, aber noch starken Husten. Komme deshalb erst übermorgen wieder zur Schule. Frau Kirchner hat mir die Hausaufgaben per Mail geschickt, aber ich verstehe überhaupt nicht, was ich in Mathe in Aufgabe 3 machen muss. Kannst du mich bitte anrufen, wenn du wieder zu Hause bist? Danke, Ciao!',
      sentenceTranslations: {
        'Hallo Julian, hier ist Nikolas.': { literal: 'Привет Юлиан, здесь есть Николас', literary: 'Привет, Юлиан, это Николас.' },
        'Mir geht es wieder besser.': { literal: 'Мне идёт оно снова лучше', literary: 'Мне уже лучше.' },
        'Hab kein Fieber mehr, aber noch starken Husten.': { literal: 'Имею никакой температуры больше, но ещё сильный кашель', literary: 'Температуры больше нет, но ещё сильный кашель.' },
        'Komme deshalb erst übermorgen wieder zur Schule.': { literal: 'Прихожу поэтому только послезавтра снова к школе', literary: 'Поэтому вернусь в школу только послезавтра.' },
        'Frau Kirchner hat mir die Hausaufgaben per Mail geschickt, aber ich verstehe überhaupt nicht, was ich in Mathe in Aufgabe 3 machen muss.': { literal: 'Госпожа Кирхнер имеет мне домашние задания по почте послала, но я понимаю вообще не, что я в математике в задании 3 делать должен', literary: 'Фрау Кирхнер прислала мне домашнее задание по почте, но я совсем не понимаю, что делать в задании 3 по математике.' },
        'Kannst du mich bitte anrufen, wenn du wieder zu Hause bist?': { literal: 'Можешь ты меня пожалуйста позвонить, когда ты снова дома есть', literary: 'Можешь позвонить мне, когда вернёшься домой?' },
        'Danke, Ciao!': { literal: 'Спасибо, пока', literary: 'Спасибо, пока!' },
      },
      vocabulary: [
        { de: 'das Fieber', ru: 'температура, жар', gender: 'neutrum', collocation: 'kein Fieber mehr haben', example: 'Hab kein Fieber mehr, aber noch starken Husten.' },
        { de: 'der Husten', ru: 'кашель', gender: 'maskulin', collocation: 'starken Husten haben', example: 'Hab kein Fieber mehr, aber noch starken Husten.' },
        { de: 'die Schule', plural: 'die Schulen', ru: 'школа', gender: 'feminin', collocation: 'zur Schule kommen', example: 'Komme deshalb erst übermorgen wieder zur Schule.' },
        { de: 'die Hausaufgabe', plural: 'die Hausaufgaben', ru: 'домашнее задание', gender: 'feminin', collocation: 'die Hausaufgaben per Mail schicken', example: 'Frau Kirchner hat mir die Hausaufgaben per Mail geschickt.' },
        { de: 'die Aufgabe', plural: 'die Aufgaben', ru: 'задание', gender: 'feminin', collocation: 'Aufgabe 3 in Mathe', example: 'Was ich in Mathe in Aufgabe 3 machen muss.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Kannst du mich bitte anrufen, wenn du wieder zu Hause bist?' },
        { de: 'schicken', ru: 'посылать, отправлять', type: 'verb', forms: 'schickt, schickte, hat geschickt', example: 'Frau Kirchner hat mir die Hausaufgaben per Mail geschickt.' },
        { de: 'verstehen', ru: 'понимать', type: 'verb', forms: 'versteht, verstand, hat verstanden', example: 'Ich verstehe überhaupt nicht, was ich machen muss.' },
        { de: 'stark', ru: 'сильный', type: 'adj', example: 'Hab kein Fieber mehr, aber noch starken Husten.' },
        { de: 'übermorgen', ru: 'послезавтра', type: 'adv', example: 'Komme deshalb erst übermorgen wieder zur Schule.' },
      ],
      practiceSentences: [
        { de: 'Mir geht es heute gut.', ru: 'Мне сегодня хорошо.', note: 'V2, безличная конструкция' },
        { de: 'Ich habe Kopfschmerzen.', ru: 'У меня болит голова.', note: 'V2' },
        { de: 'Sie kommt morgen zur Schule.', ru: 'Она придёт завтра в школу.', note: 'V2' },
        { de: 'Kannst du mir helfen?', ru: 'Можешь мне помочь?', note: 'V1 вопрос, модальный' },
        { de: 'Ruf mich später an!', ru: 'Позвони мне позже!', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Warum kommt Nikolas noch nicht zur Schule?',
        ru: 'Почему Николас ещё не идёт в школу?',
        options: [
          { de: 'Er hat noch Fieber', ru: 'У него ещё температура' },
          { de: 'Er hat noch starken Husten', ru: 'У него ещё сильный кашель' },
          { de: 'Er versteht die Hausaufgaben nicht', ru: 'Он не понимает домашнее задание' },
        ],
        correct: 1,
        explanation: 'Николас говорит: "hab kein Fieber mehr aber noch starken Husten komme deshalb erst übermorgen wieder zur Schule".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Gartenshop',
      type: 'реклама',
      text: 'Haben Sie einen Balkon oder wollen Sie in Ihrem Garten etwas ändern? Lieben Sie Bäume und Blumen, brauchen aber neue Ideen? Wir beraten Sie gerne, welche Pflanzen für Sie richtig sind, geben Ihnen nützliche Tipps, und all das zu den besten Preisen. Bei uns finden Sie die größte Auswahl an Pflanzen und Gartenmöbeln. Besuchen Sie unsere Webseite balkonundgarten.de und blättern Sie durch unseren Prospekt!',
      sentenceTranslations: {
        'Haben Sie einen Balkon oder wollen Sie in Ihrem Garten etwas ändern?': { literal: 'Имеете вы балкон или хотите вы в вашем саду что-то изменить', literary: 'У вас есть балкон или вы хотите что-то изменить в саду?' },
        'Lieben Sie Bäume und Blumen, brauchen aber neue Ideen?': { literal: 'Любите вы деревья и цветы, нуждаетесь но новые идеи', literary: 'Любите деревья и цветы, но нужны новые идеи?' },
        'Wir beraten Sie gerne, welche Pflanzen für Sie richtig sind, geben Ihnen nützliche Tipps, und all das zu den besten Preisen.': { literal: 'Мы консультируем вас охотно, какие растения для вас правильные есть, даём вам полезные советы, и всё это к лучшим ценам', literary: 'Мы с удовольствием проконсультируем, какие растения вам подойдут, дадим полезные советы, и всё это по лучшим ценам.' },
        'Bei uns finden Sie die größte Auswahl an Pflanzen und Gartenmöbeln.': { literal: 'У нас находите вы самый большой выбор растений и садовой мебели', literary: 'У нас вы найдёте огромный выбор растений и садовой мебели.' },
        'Besuchen Sie unsere Webseite balkonundgarten.de und blättern Sie durch unseren Prospekt!': { literal: 'Посетите вы наш веб-сайт balkonundgarten.de и листайте вы через наш проспект', literary: 'Посетите наш сайт balkonundgarten.de и полистайте наш каталог!' },
      },
      vocabulary: [
        { de: 'der Balkon', plural: 'die Balkone', ru: 'балкон', gender: 'maskulin', collocation: 'einen Balkon haben', example: 'Haben Sie einen Balkon oder wollen Sie in Ihrem Garten etwas ändern?' },
        { de: 'der Garten', plural: 'die Gärten', ru: 'сад', gender: 'maskulin', collocation: 'in Ihrem Garten ändern', example: 'Haben Sie einen Balkon oder wollen Sie in Ihrem Garten etwas ändern?' },
        { de: 'die Pflanze', plural: 'die Pflanzen', ru: 'растение', gender: 'feminin', collocation: 'welche Pflanzen richtig sind', example: 'Wir beraten Sie gerne, welche Pflanzen für Sie richtig sind.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'nützliche Tipps geben', example: 'Geben Ihnen nützliche Tipps.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'цена', gender: 'maskulin', collocation: 'zu den besten Preisen', example: 'All das zu den besten Preisen.' },
        { de: 'die Auswahl', plural: 'die Auswahlen', ru: 'выбор', gender: 'feminin', collocation: 'die größte Auswahl an', example: 'Bei uns finden Sie die größte Auswahl an Pflanzen und Gartenmöbeln.' },
        { de: 'der Prospekt', plural: 'die Prospekte', ru: 'каталог, проспект', gender: 'maskulin', collocation: 'durch den Prospekt blättern', example: 'Blättern Sie durch unseren Prospekt!' },
        { de: 'ändern', ru: 'менять, изменять', type: 'verb', forms: 'ändert, änderte, hat geändert', example: 'Wollen Sie in Ihrem Garten etwas ändern?' },
        { de: 'beraten', ru: 'консультировать', type: 'verb', forms: 'berät, beriet, hat beraten', example: 'Wir beraten Sie gerne.' },
        { de: 'blättern', ru: 'листать', type: 'verb', forms: 'blättert, blätterte, hat geblättert', example: 'Blättern Sie durch unseren Prospekt!' },
        { de: 'nützlich', ru: 'полезный', type: 'adj', example: 'Geben Ihnen nützliche Tipps.' },
      ],
      practiceSentences: [
        { de: 'Ich habe einen kleinen Balkon.', ru: 'У меня маленький балкон.', note: 'V2' },
        { de: 'Wir beraten Sie gerne.', ru: 'Мы с удовольствием проконсультируем.', note: 'V2' },
        { de: 'Bei uns finden Sie alles.', ru: 'У нас вы найдёте всё.', note: 'V2, инверсия' },
        { de: 'Besuchen Sie unseren Laden!', ru: 'Посетите наш магазин!', note: 'Imperativ' },
        { de: 'Sie können durch den Katalog blättern.', ru: 'Вы можете полистать каталог.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was bietet der Gartenshop an?',
        ru: 'Что предлагает садовый магазин?',
        options: [
          { de: 'Nur Pflanzen', ru: 'Только растения' },
          { de: 'Pflanzen, Gartenmöbel und Beratung', ru: 'Растения, садовую мебель и консультации' },
          { de: 'Nur Online-Beratung', ru: 'Только онлайн-консультации' },
        ],
        correct: 1,
        explanation: 'В рекламе упоминается: "wir beraten Sie gerne", "bei uns finden Sie die größte Auswahl an Pflanzen und Gartenmöbeln".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'U-Bahn',
      type: 'объявление транспорта',
      text: 'Liebe Fahrgäste, wegen technischer Probleme fahren heute auf der U-Bahnlinie 5 zwischen Leimerplatz und Neuperlach von 12 bis 15 Uhr keine Züge. Bitte nutzen Sie die parallele U-Bahnlinie 4, die S-Bahnlinie 1 oder die Buslinie 168. Wir arbeiten daran, dass Sie möglichst bald wieder ohne Störung Ihr Ziel erreichen.',
      sentenceTranslations: {
        'Liebe Fahrgäste, wegen technischer Probleme fahren heute auf der U-Bahnlinie 5 zwischen Leimerplatz und Neuperlach von 12 bis 15 Uhr keine Züge.': { literal: 'Дорогие пассажиры, из-за технических проблем едут сегодня на линии метро 5 между Лаймерплатц и Нойперлах с 12 до 15 часов никакие поезда', literary: 'Уважаемые пассажиры, из-за технических проблем сегодня на линии U5 между Лаймерплатц и Нойперлах с 12 до 15 часов поезда не ходят.' },
        'Bitte nutzen Sie die parallele U-Bahnlinie 4, die S-Bahnlinie 1 oder die Buslinie 168.': { literal: 'Пожалуйста используйте вы параллельную линию метро 4, линию электрички 1 или автобусную линию 168', literary: 'Пожалуйста, воспользуйтесь параллельной линией U4, линией S1 или автобусом 168.' },
        'Wir arbeiten daran, dass Sie möglichst bald wieder ohne Störung Ihr Ziel erreichen.': { literal: 'Мы работаем над-тем, что вы по-возможности скоро снова без помех вашу цель достигнете', literary: 'Мы работаем над тем, чтобы вы как можно скорее снова без помех добрались до цели.' },
      },
      vocabulary: [
        { de: 'der Fahrgast', plural: 'die Fahrgäste', ru: 'пассажир', gender: 'maskulin', collocation: 'Liebe Fahrgäste', example: 'Liebe Fahrgäste, wegen technischer Probleme fahren heute keine Züge.' },
        { de: 'die U-Bahnlinie', plural: 'die U-Bahnlinien', ru: 'линия метро', gender: 'feminin', collocation: 'auf der U-Bahnlinie 5', example: 'Fahren heute auf der U-Bahnlinie 5 keine Züge.' },
        { de: 'der Zug', plural: 'die Züge', ru: 'поезд', gender: 'maskulin', collocation: 'keine Züge fahren', example: 'Von 12 bis 15 Uhr keine Züge.' },
        { de: 'die Störung', plural: 'die Störungen', ru: 'помеха, нарушение', gender: 'feminin', collocation: 'ohne Störung', example: 'Dass Sie möglichst bald wieder ohne Störung Ihr Ziel erreichen.' },
        { de: 'das Ziel', plural: 'die Ziele', ru: 'цель, пункт назначения', gender: 'neutrum', collocation: 'das Ziel erreichen', example: 'Dass Sie ohne Störung Ihr Ziel erreichen.' },
        { de: 'nutzen', ru: 'использовать, пользоваться', type: 'verb', forms: 'nutzt, nutzte, hat genutzt', example: 'Bitte nutzen Sie die parallele U-Bahnlinie 4.' },
        { de: 'erreichen', ru: 'достигать, добираться', type: 'verb', forms: 'erreicht, erreichte, hat erreicht', example: 'Dass Sie Ihr Ziel erreichen.' },
        { de: 'technisch', ru: 'технический', type: 'adj', example: 'Wegen technischer Probleme fahren keine Züge.' },
        { de: 'parallel', ru: 'параллельный', type: 'adj', example: 'Bitte nutzen Sie die parallele U-Bahnlinie 4.' },
      ],
      practiceSentences: [
        { de: 'Die U-Bahn fährt nicht.', ru: 'Метро не ходит.', note: 'V2' },
        { de: 'Wegen Regen bleiben wir zu Hause.', ru: 'Из-за дождя мы остаёмся дома.', note: 'V2, инверсия после wegen' },
        { de: 'Nutzen Sie bitte den Bus!', ru: 'Пользуйтесь, пожалуйста, автобусом!', note: 'Imperativ Sie-Form' },
        { de: 'Der Zug kommt um 14 Uhr.', ru: 'Поезд приходит в 14 часов.', note: 'V2' },
        { de: 'Wir erreichen unser Ziel bald.', ru: 'Мы скоро достигнем цели.', note: 'V2' },
      ],
      question: {
        de: 'Wie lange fahren keine Züge auf der U-Bahnlinie 5?',
        ru: 'Как долго не будут ходить поезда на линии U5?',
        options: [
          { de: 'Von 12 bis 15 Uhr', ru: 'С 12 до 15 часов' },
          { de: 'Den ganzen Tag', ru: 'Весь день' },
          { de: 'Bis 12 Uhr', ru: 'До 12 часов' },
        ],
        correct: 0,
        explanation: 'Прямо указано: "von 12 bis 15 Uhr keine Züge".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Wohnen',
      type: 'мнение/монолог',
      text: 'Also, zum Thema Wohnen sind, glaube ich, die meisten Jugendlichen derselben Meinung: sie wollen so früh wie möglich alleine wohnen. Ich persönlich wohne gern mit meinen Eltern zusammen. Ich habe ein eigenes Zimmer und meine Eltern sind echt cool, wenn ich ausgehe oder meine Mitschüler einlade. Mit 18 möchte ich aber trotzdem, wenn möglich, lieber alleine oder mit Freunden eine Wohnung mieten und nicht mehr der Kleine der Familie sein.',
      sentenceTranslations: {
        'Also, zum Thema Wohnen sind, glaube ich, die meisten Jugendlichen derselben Meinung: sie wollen so früh wie möglich alleine wohnen.': { literal: 'Итак, к теме проживание есть, думаю я, большинство молодёжи того-же-самого мнения: они хотят так рано как возможно одни жить', literary: 'Итак, по теме жилья, я думаю, большинство подростков одного мнения: они хотят жить отдельно как можно раньше.' },
        'Ich persönlich wohne gern mit meinen Eltern zusammen.': { literal: 'Я лично живу охотно с моими родителями вместе', literary: 'Я лично с удовольствием живу с родителями.' },
        'Ich habe ein eigenes Zimmer und meine Eltern sind echt cool, wenn ich ausgehe oder meine Mitschüler einlade.': { literal: 'Я имею собственную комнату и мои родители есть действительно классные, когда я выхожу или моих одноклассников приглашаю', literary: 'У меня своя комната, и мои родители реально классные, когда я хожу гулять или приглашаю одноклассников.' },
        'Mit 18 möchte ich aber trotzdem, wenn möglich, lieber alleine oder mit Freunden eine Wohnung mieten und nicht mehr der Kleine der Familie sein.': { literal: 'С 18 хотел-бы я но всё-таки, если возможно, лучше один или с друзьями квартиру снимать и не больше маленький семьи быть', literary: 'В 18 лет я всё же хотел бы, по возможности, снимать квартиру один или с друзьями и больше не быть младшим в семье.' },
      },
      vocabulary: [
        { de: 'das Thema', plural: 'die Themen', ru: 'тема', gender: 'neutrum', collocation: 'zum Thema Wohnen', example: 'Zum Thema Wohnen sind die meisten Jugendlichen derselben Meinung.' },
        { de: 'die Meinung', plural: 'die Meinungen', ru: 'мнение', gender: 'feminin', collocation: 'derselben Meinung sein', example: 'Die meisten Jugendlichen sind derselben Meinung.' },
        { de: 'das Zimmer', plural: 'die Zimmer', ru: 'комната', gender: 'neutrum', collocation: 'ein eigenes Zimmer haben', example: 'Ich habe ein eigenes Zimmer.' },
        { de: 'der Mitschüler', plural: 'die Mitschüler', ru: 'одноклассник', gender: 'maskulin', collocation: 'Mitschüler einladen', example: 'Wenn ich meine Mitschüler einlade.' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'eine Wohnung mieten', example: 'Lieber alleine oder mit Freunden eine Wohnung mieten.' },
        { de: 'ausgehen', ru: 'выходить, идти гулять', type: 'verb', forms: 'geht aus, ging aus, ist ausgegangen', example: 'Wenn ich ausgehe oder meine Mitschüler einlade.' },
        { de: 'einladen', ru: 'приглашать', type: 'verb', forms: 'lädt ein, lud ein, hat eingeladen', example: 'Wenn ich meine Mitschüler einlade.' },
        { de: 'mieten', ru: 'снимать, арендовать', type: 'verb', forms: 'mietet, mietete, hat gemietet', example: 'Eine Wohnung mieten.' },
        { de: 'alleine', ru: 'один, в одиночку', type: 'adv', example: 'Sie wollen so früh wie möglich alleine wohnen.' },
        { de: 'trotzdem', ru: 'всё же, тем не менее', type: 'adv', example: 'Mit 18 möchte ich aber trotzdem eine Wohnung mieten.' },
      ],
      practiceSentences: [
        { de: 'Ich wohne mit meinen Eltern.', ru: 'Я живу с родителями.', note: 'V2' },
        { de: 'Sie möchte alleine wohnen.', ru: 'Она хочет жить одна.', note: 'модальный + инфинитив' },
        { de: 'Wir gehen heute aus.', ru: 'Мы сегодня идём гулять.', note: 'отделяемая приставка' },
        { de: 'Ich lade meine Freunde ein.', ru: 'Я приглашаю друзей.', note: 'отделяемая приставка' },
        { de: 'Mit 20 möchte ich arbeiten.', ru: 'В 20 лет я хочу работать.', note: 'V2, инверсия' },
      ],
      question: {
        de: 'Wann möchte der Sprecher ausziehen?',
        ru: 'Когда говорящий хочет переехать?',
        options: [
          { de: 'Sofort', ru: 'Сразу же' },
          { de: 'Mit 18 Jahren', ru: 'В 18 лет' },
          { de: 'Nie', ru: 'Никогда' },
        ],
        correct: 1,
        explanation: 'Говорящий заявляет: "mit 18 möchte ich aber trotzdem ... eine Wohnung mieten".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Weihnachten',
      type: 'диалог',
      text: 'Hey Emilio, hast du schon den Brief an den Weihnachtsmann geschrieben? Hallo Nick, ja, schon lange. Ich habe mir einen kleinen Fernseher für mein Zimmer gewünscht. Oh cool! Ole weiß auch schon, was er sich zu Weihnachten wünscht. Er hat sich einen neuen Stuhl für seinen Schreibtisch gewünscht, und zwar einen ganz besonderen Stuhl, der ideal zum Computerspielen ist — Gamingstuhl heißt er. Wow, das hört sich interessant an! Mara hatte auch eine super Idee: sie möchte ein richtiges Doppelbett haben. Es ist nämlich nicht nur groß, sondern auch ganz schön teuer. Pia wünscht sich ganz anders als Tamara etwas sehr Kleines — eine Pflanze für ihr Zimmer, die sie ans Fenster stellen möchte. Selina wünscht sich wie immer Kleidung — sie möchte einen neuen Mantel. Ja, einen Mantel kann sie jetzt im Winter gut brauchen. Und Benedikt wünscht sich neue Fußballschuhe, die braucht er fürs Fußballtraining.',
      sentenceTranslations: {
        'Hey Emilio, hast du schon den Brief an den Weihnachtsmann geschrieben?': { literal: 'Хей Эмилио, имеешь ты уже письмо к Деду Морозу написал', literary: 'Эй, Эмилио, ты уже написал письмо Деду Морозу?' },
        'Hallo Nick, ja, schon lange.': { literal: 'Привет Ник, да, уже давно', literary: 'Привет, Ник, да, давно уже.' },
        'Ich habe mir einen kleinen Fernseher für mein Zimmer gewünscht.': { literal: 'Я имею себе маленький телевизор для моей комнаты пожелал', literary: 'Я загадал себе маленький телевизор в комнату.' },
        'Oh cool!': { literal: 'О круто', literary: 'О, круто!' },
        'Ole weiß auch schon, was er sich zu Weihnachten wünscht.': { literal: 'Оле знает тоже уже, что он себе к Рождеству желает', literary: 'Оле тоже уже знает, что хочет на Рождество.' },
        'Er hat sich einen neuen Stuhl für seinen Schreibtisch gewünscht, und zwar einen ganz besonderen Stuhl, der ideal zum Computerspielen ist — Gamingstuhl heißt er.': { literal: 'Он имеет себе новый стул для его письменного стола пожелал, а именно совсем особенный стул, который идеален для компьютерных-игр есть — игровой-стул называется он', literary: 'Он загадал новое кресло для письменного стола, причём особенное, идеальное для компьютерных игр — оно называется геймерское кресло.' },
        'Wow, das hört sich interessant an!': { literal: 'Вау, это слышит себя интересно', literary: 'Вау, звучит интересно!' },
        'Mara hatte auch eine super Idee: sie möchte ein richtiges Doppelbett haben.': { literal: 'Мара имела тоже супер идею: она хотела-бы настоящую двуспальную кровать иметь', literary: 'У Мары тоже была отличная идея: она хочет настоящую двуспальную кровать.' },
        'Es ist nämlich nicht nur groß, sondern auch ganz schön teuer.': { literal: 'Оно есть именно не только большое, но также совсем красиво дорогое', literary: 'Она ведь не только большая, но и довольно дорогая.' },
        'Pia wünscht sich ganz anders als Tamara etwas sehr Kleines — eine Pflanze für ihr Zimmer, die sie ans Fenster stellen möchte.': { literal: 'Пиа желает себе совсем иначе чем Тамара что-то очень маленькое — растение для её комнаты, которое она к окну поставить хочет', literary: 'Пиа, в отличие от Тамары, хочет что-то совсем маленькое — растение для комнаты, которое хочет поставить на окно.' },
        'Selina wünscht sich wie immer Kleidung — sie möchte einen neuen Mantel.': { literal: 'Селина желает себе как всегда одежду — она хотела-бы новое пальто', literary: 'Селина, как всегда, хочет одежду — она хочет новое пальто.' },
        'Ja, einen Mantel kann sie jetzt im Winter gut brauchen.': { literal: 'Да, пальто может она сейчас зимой хорошо нуждаться', literary: 'Да, пальто ей сейчас зимой очень пригодится.' },
        'Und Benedikt wünscht sich neue Fußballschuhe, die braucht er fürs Fußballtraining.': { literal: 'И Бенедикт желает себе новые футбольные бутсы, их нуждается он для футбольной тренировки', literary: 'А Бенедикт хочет новые футбольные бутсы — они ему нужны для тренировок.' },
      },
      vocabulary: [
        { de: 'der Brief', plural: 'die Briefe', ru: 'письмо', gender: 'maskulin', collocation: 'einen Brief schreiben', example: 'Hast du schon den Brief an den Weihnachtsmann geschrieben?' },
        { de: 'der Weihnachtsmann', plural: 'die Weihnachtsmänner', ru: 'Дед Мороз', gender: 'maskulin', collocation: 'an den Weihnachtsmann', example: 'Hast du schon den Brief an den Weihnachtsmann geschrieben?' },
        { de: 'der Fernseher', plural: 'die Fernseher', ru: 'телевизор', gender: 'maskulin', collocation: 'einen kleinen Fernseher', example: 'Ich habe mir einen kleinen Fernseher für mein Zimmer gewünscht.' },
        { de: 'der Schreibtisch', plural: 'die Schreibtische', ru: 'письменный стол', gender: 'maskulin', collocation: 'für seinen Schreibtisch', example: 'Einen neuen Stuhl für seinen Schreibtisch.' },
        { de: 'das Doppelbett', plural: 'die Doppelbetten', ru: 'двуспальная кровать', gender: 'neutrum', collocation: 'ein richtiges Doppelbett', example: 'Sie möchte ein richtiges Doppelbett haben.' },
        { de: 'die Kleidung', ru: 'одежда', gender: 'feminin', collocation: 'Kleidung wünschen', example: 'Selina wünscht sich wie immer Kleidung.' },
        { de: 'der Mantel', plural: 'die Mäntel', ru: 'пальто', gender: 'maskulin', collocation: 'einen neuen Mantel', example: 'Sie möchte einen neuen Mantel.' },
        { de: 'der Fußballschuh', plural: 'die Fußballschuhe', ru: 'футбольные бутсы', gender: 'maskulin', collocation: 'neue Fußballschuhe', example: 'Benedikt wünscht sich neue Fußballschuhe.' },
        { de: 'sich wünschen', ru: 'желать себе, хотеть', type: 'verb', forms: 'wünscht sich, wünschte sich, hat sich gewünscht', example: 'Ich habe mir einen kleinen Fernseher gewünscht.' },
        { de: 'stellen', ru: 'ставить', type: 'verb', forms: 'stellt, stellte, hat gestellt', example: 'Eine Pflanze, die sie ans Fenster stellen möchte.' },
        { de: 'brauchen', ru: 'нуждаться, нужно', type: 'verb', forms: 'braucht, brauchte, hat gebraucht', example: 'Einen Mantel kann sie jetzt im Winter gut brauchen.' },
        { de: 'besonders', ru: 'особенный', type: 'adj', example: 'Einen ganz besonderen Stuhl.' },
        { de: 'teuer', ru: 'дорогой', type: 'adj', example: 'Es ist nicht nur groß, sondern auch ganz schön teuer.' },
      ],
      practiceSentences: [
        { de: 'Ich wünsche mir ein Fahrrad.', ru: 'Я хочу велосипед.', note: 'V2, возвратный' },
        { de: 'Was wünscht du dir?', ru: 'Что ты хочешь?', note: 'V1 вопрос, возвратный' },
        { de: 'Sie hat sich Bücher gewünscht.', ru: 'Она загадала книги.', note: 'Perfekt, возвратный' },
        { de: 'Das Geschenk ist teuer.', ru: 'Подарок дорогой.', note: 'V2' },
        { de: 'Er braucht neue Schuhe.', ru: 'Ему нужны новые ботинки.', note: 'V2' },
      ],
      question: {
        de: 'Was wünscht sich Ole zu Weihnachten?',
        ru: 'Что Оле хочет на Рождество?',
        options: [
          { de: 'Einen Fernseher', ru: 'Телевизор' },
          { de: 'Einen Gamingstuhl', ru: 'Игровое кресло' },
          { de: 'Fußballschuhe', ru: 'Футбольные бутсы' },
        ],
        correct: 1,
        explanation: 'В диалоге: "er hat sich einen neuen Stuhl für seinen Schreibtisch gewünscht ... Gamingstuhl heißt er".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Schulsachen',
      type: 'диалог',
      text: 'Hast du schon alles, Paul? Alles noch nicht, aber ich habe schon Bleistifte, ein Radiergummi und einen Spitzer gekauft. Mir fehlen nur noch ein Füller und ein Lineal. Und du? Ich muss nur noch eine neue Schultasche kaufen, die alte ist nämlich kaputt. Meine alte Schultasche ist noch ganz okay. Also, wir sehen uns!',
      sentenceTranslations: {
        'Hast du schon alles, Paul?': { literal: 'Имеешь ты уже всё, Пауль', literary: 'У тебя уже всё есть, Пауль?' },
        'Alles noch nicht, aber ich habe schon Bleistifte, ein Radiergummi und einen Spitzer gekauft.': { literal: 'Всё ещё не, но я имею уже карандаши, ластик и точилку купил', literary: 'Ещё не всё, но я уже купил карандаши, ластик и точилку.' },
        'Mir fehlen nur noch ein Füller und ein Lineal.': { literal: 'Мне не-хватают только ещё ручка и линейка', literary: 'Мне не хватает только ручки и линейки.' },
        'Und du?': { literal: 'И ты', literary: 'А ты?' },
        'Ich muss nur noch eine neue Schultasche kaufen, die alte ist nämlich kaputt.': { literal: 'Я должен только ещё новый школьный портфель купить, старая есть именно сломана', literary: 'Мне нужно только купить новый портфель, старый ведь сломался.' },
        'Meine alte Schultasche ist noch ganz okay.': { literal: 'Мой старый школьный портфель есть ещё совсем хорошо', literary: 'Мой старый портфель ещё в полном порядке.' },
        'Also, wir sehen uns!': { literal: 'Итак, мы видим нас', literary: 'Ну, увидимся!' },
      },
      vocabulary: [
        { de: 'der Bleistift', plural: 'die Bleistifte', ru: 'карандаш', gender: 'maskulin', collocation: 'Bleistifte kaufen', example: 'Ich habe schon Bleistifte, ein Radiergummi und einen Spitzer gekauft.' },
        { de: 'der Radiergummi', plural: 'die Radiergummis', ru: 'ластик', gender: 'maskulin', collocation: 'ein Radiergummi kaufen', example: 'Ich habe schon Bleistifte, ein Radiergummi und einen Spitzer gekauft.' },
        { de: 'der Spitzer', plural: 'die Spitzer', ru: 'точилка', gender: 'maskulin', collocation: 'einen Spitzer kaufen', example: 'Ich habe schon Bleistifte, ein Radiergummi und einen Spitzer gekauft.' },
        { de: 'das Lineal', plural: 'die Lineale', ru: 'линейка', gender: 'neutrum', collocation: 'ein Lineal fehlt', example: 'Mir fehlen nur noch ein Füller und ein Lineal.' },
        { de: 'die Schultasche', plural: 'die Schultaschen', ru: 'школьный портфель', gender: 'feminin', collocation: 'eine neue Schultasche kaufen', example: 'Ich muss nur noch eine neue Schultasche kaufen.' },
        { de: 'kaufen', ru: 'покупать', type: 'verb', forms: 'kauft, kaufte, hat gekauft', example: 'Ich habe schon Bleistifte gekauft.' },
        { de: 'fehlen', ru: 'не хватать, отсутствовать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Mir fehlen nur noch ein Füller und ein Lineal.' },
        { de: 'kaputt', ru: 'сломанный', type: 'adj', example: 'Die alte ist nämlich kaputt.' },
      ],
      practiceSentences: [
        { de: 'Mir fehlt ein Bleistift.', ru: 'Мне не хватает карандаша.', note: 'V2, fehlen + Dat' },
        { de: 'Ich kaufe eine neue Tasche.', ru: 'Я покупаю новую сумку.', note: 'V2' },
        { de: 'Die alte ist kaputt.', ru: 'Старая сломана.', note: 'V2' },
        { de: 'Ich muss noch einkaufen.', ru: 'Мне ещё нужно купить.', note: 'модальный + инфинитив' },
        { de: 'Hast du alles dabei?', ru: 'У тебя всё с собой?', note: 'V1 вопрос' },
      ],
      question: {
        de: 'Was muss die zweite Person noch kaufen?',
        ru: 'Что должен купить второй человек?',
        options: [
          { de: 'Bleistifte und einen Radiergummi', ru: 'Карандаши и ластик' },
          { de: 'Eine neue Schultasche', ru: 'Новый школьный портфель' },
          { de: 'Ein Lineal und einen Füller', ru: 'Линейку и ручку' },
        ],
        correct: 1,
        explanation: 'Второй говорящий отвечает: "ich muss nur noch eine neue Schultasche kaufen die alte ist nämlich kaputt".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Film',
      type: 'диалог',
      text: 'Hast du heute Abend Lust auf einen Film? Ja, warum nicht! Ich würde gern einen Krimi oder einen Science-Fiction-Film sehen. Oh nein, bitte nicht! Ich möchte lieber etwas Lustiges sehen — ich habe seit Langem nicht mehr gelacht. Du hast recht, das wäre mir auch lieber.',
      sentenceTranslations: {
        'Hast du heute Abend Lust auf einen Film?': { literal: 'Имеешь ты сегодня вечером желание на фильм', literary: 'Хочешь сегодня вечером посмотреть фильм?' },
        'Ja, warum nicht!': { literal: 'Да, почему нет', literary: 'Да, почему бы и нет!' },
        'Ich würde gern einen Krimi oder einen Science-Fiction-Film sehen.': { literal: 'Я бы охотно триллер или научно-фантастический фильм смотреть', literary: 'Я бы с удовольствием посмотрел триллер или фантастику.' },
        'Oh nein, bitte nicht!': { literal: 'О нет, пожалуйста не', literary: 'О нет, пожалуйста, не надо!' },
        'Ich möchte lieber etwas Lustiges sehen — ich habe seit Langem nicht mehr gelacht.': { literal: 'Я хотел-бы лучше что-то смешное смотреть — я имею с давних-пор не больше смеялся', literary: 'Я лучше хочу что-нибудь смешное — я давно не смеялся.' },
        'Du hast recht, das wäre mir auch lieber.': { literal: 'Ты имеешь право, это было-бы мне тоже предпочтительнее', literary: 'Ты прав, я бы тоже это предпочёл.' },
      },
      vocabulary: [
        { de: 'der Film', plural: 'die Filme', ru: 'фильм', gender: 'maskulin', collocation: 'einen Film sehen', example: 'Hast du heute Abend Lust auf einen Film?' },
        { de: 'der Krimi', plural: 'die Krimis', ru: 'триллер, детектив', gender: 'maskulin', collocation: 'einen Krimi sehen', example: 'Ich würde gern einen Krimi oder einen Science-Fiction-Film sehen.' },
        { de: 'sehen', ru: 'смотреть, видеть', type: 'verb', forms: 'sieht, sah, hat gesehen', example: 'Ich würde gern einen Krimi sehen.' },
        { de: 'lachen', ru: 'смеяться', type: 'verb', forms: 'lacht, lachte, hat gelacht', example: 'Ich habe seit Langem nicht mehr gelacht.' },
        { de: 'lustig', ru: 'смешной, забавный', type: 'adj', example: 'Ich möchte lieber etwas Lustiges sehen.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte einen Film sehen.', ru: 'Я хочу посмотреть фильм.', note: 'модальный + инфинитив' },
        { de: 'Hast du Lust auf Kino?', ru: 'Хочешь в кино?', note: 'V1 вопрос' },
        { de: 'Ich würde gern mitkommen.', ru: 'Я бы с удовольствием пошёл.', note: 'Konjunktiv II' },
        { de: 'Das wäre super!', ru: 'Это было бы супер!', note: 'Konjunktiv II' },
        { de: 'Ich habe lange nicht gelacht.', ru: 'Я долго не смеялся.', note: 'Perfekt с отрицанием' },
      ],
      question: {
        de: 'Was für einen Film wollen sie sehen?',
        ru: 'Какой фильм они хотят посмотреть?',
        options: [
          { de: 'Einen Science-Fiction-Film', ru: 'Фантастику' },
          { de: 'Etwas Lustiges', ru: 'Что-то смешное' },
          { de: 'Einen Krimi', ru: 'Триллер' },
        ],
        correct: 1,
        explanation: 'Оба согласились: "ich möchte lieber etwas Lustiges sehen" и "das wäre mir auch lieber".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Tante Berta',
      type: 'телефонный разговор',
      text: 'Hallo Michael, ich bin\'s, Papa. Pass auf, Tante Berta kommt heute um 20:30 Uhr. Bitte hol sie ab! Du weißt doch, dass ich noch arbeiten werde. Das ist kein Problem, Papa. Kommt sie mit dem Bus? Nein, nein, sie wollte zuerst mit ihrem Auto kommen, aber dann hat sie gemeint, dass der Zug bequemer ist. Vergiss nicht, der Zug kommt um 20:30 Uhr an. Also bis heute Abend! Okay, Papa.',
      sentenceTranslations: {
        'Hallo Michael, ich bin\'s, Papa.': { literal: 'Привет Михаэль, я есть-это, папа', literary: 'Привет, Михаэль, это папа.' },
        'Pass auf, Tante Berta kommt heute um 20:30 Uhr.': { literal: 'Внимание, тётя Берта приходит сегодня в 20:30', literary: 'Послушай, тётя Берта приезжает сегодня в 20:30.' },
        'Bitte hol sie ab!': { literal: 'Пожалуйста забери её', literary: 'Пожалуйста, встреть её!' },
        'Du weißt doch, dass ich noch arbeiten werde.': { literal: 'Ты знаешь ведь, что я ещё работать буду', literary: 'Ты же знаешь, что я ещё буду работать.' },
        'Das ist kein Problem, Papa.': { literal: 'Это есть никакая проблема, папа', literary: 'Это не проблема, папа.' },
        'Kommt sie mit dem Bus?': { literal: 'Приходит она с автобусом', literary: 'Она приедет на автобусе?' },
        'Nein, nein, sie wollte zuerst mit ihrem Auto kommen, aber dann hat sie gemeint, dass der Zug bequemer ist.': { literal: 'Нет, нет, она хотела сначала с её машиной приехать, но потом имеет она посчитала, что поезд удобнее есть', literary: 'Нет, нет, она сначала хотела приехать на машине, но потом решила, что поезд удобнее.' },
        'Vergiss nicht, der Zug kommt um 20:30 Uhr an.': { literal: 'Забудь не, поезд приходит в 20:30 часов прибывает', literary: 'Не забудь, поезд прибывает в 20:30.' },
        'Also bis heute Abend!': { literal: 'Итак до сегодня вечера', literary: 'Ну, до вечера!' },
        'Okay, Papa.': { literal: 'Хорошо, папа', literary: 'Хорошо, папа.' },
      },
      vocabulary: [
        { de: 'die Tante', plural: 'die Tanten', ru: 'тётя', gender: 'feminin', collocation: 'Tante Berta kommt', example: 'Tante Berta kommt heute um 20:30 Uhr.' },
        { de: 'der Zug', plural: 'die Züge', ru: 'поезд', gender: 'maskulin', collocation: 'mit dem Zug kommen', example: 'Sie hat gemeint, dass der Zug bequemer ist.' },
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'mit dem Bus kommen', example: 'Kommt sie mit dem Bus?' },
        { de: 'aufpassen', ru: 'быть внимательным, слушать', type: 'verb', forms: 'passt auf, passte auf, hat aufgepasst', example: 'Pass auf, Tante Berta kommt heute.' },
        { de: 'abholen', ru: 'встречать, забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Bitte hol sie ab!' },
        { de: 'ankommen', ru: 'прибывать', type: 'verb', forms: 'kommt an, kam an, ist angekommen', example: 'Der Zug kommt um 20:30 Uhr an.' },
        { de: 'meinen', ru: 'полагать, считать', type: 'verb', forms: 'meint, meinte, hat gemeint', example: 'Sie hat gemeint, dass der Zug bequemer ist.' },
        { de: 'bequem', ru: 'удобный', type: 'adj', example: 'Sie hat gemeint, dass der Zug bequemer ist.' },
      ],
      practiceSentences: [
        { de: 'Ich hole dich ab.', ru: 'Я тебя встречу.', note: 'отделяемая приставка' },
        { de: 'Der Zug kommt um 10 Uhr an.', ru: 'Поезд прибывает в 10 часов.', note: 'отделяемая приставка' },
        { de: 'Pass auf!', ru: 'Осторожно! / Слушай!', note: 'императив с отдел. приставкой' },
        { de: 'Ich komme mit dem Auto.', ru: 'Я приеду на машине.', note: 'V2' },
        { de: 'Sie wird später kommen.', ru: 'Она придёт позже.', note: 'Futur I' },
      ],
      question: {
        de: 'Womit kommt Tante Berta?',
        ru: 'На чём приедет тётя Берта?',
        options: [
          { de: 'Mit dem Auto', ru: 'На машине' },
          { de: 'Mit dem Bus', ru: 'На автобусе' },
          { de: 'Mit dem Zug', ru: 'На поезде' },
        ],
        correct: 2,
        explanation: 'Папа объясняет: "sie wollte zuerst mit ihrem Auto kommen aber dann hat sie gemeint dass der Zug bequemer ist".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Treffen',
      type: 'диалог',
      text: 'Du, Reiner, ich kann heute Nachmittag leider nicht zu unserem Treffen kommen. Warum denn? Musst du noch für die Klassenarbeit in Mathe lernen, oder braucht deine Mutter wieder Hilfe im Haushalt? Nein, das ist es nicht, aber ich habe doch heute Nachmittag Volleyballtraining, und ich darf nicht fehlen! Können wir uns vielleicht morgen treffen? Morgen — da muss ich doch meiner Mutter helfen.',
      sentenceTranslations: {
        'Du, Reiner, ich kann heute Nachmittag leider nicht zu unserem Treffen kommen.': { literal: 'Ты, Райнер, я могу сегодня после-обеда к-сожалению не к нашей встрече прийти', literary: 'Слушай, Райнер, я, к сожалению, не смогу прийти на встречу сегодня днём.' },
        'Warum denn?': { literal: 'Почему же', literary: 'Почему же?' },
        'Musst du noch für die Klassenarbeit in Mathe lernen, oder braucht deine Mutter wieder Hilfe im Haushalt?': { literal: 'Должен ты ещё для контрольной в математике учить, или нуждается твоя мать снова помощь в домашнем хозяйстве', literary: 'Тебе ещё нужно готовиться к контрольной по математике, или маме опять нужна помощь по дому?' },
        'Nein, das ist es nicht, aber ich habe doch heute Nachmittag Volleyballtraining, und ich darf nicht fehlen!': { literal: 'Нет, это есть оно не, но я имею ведь сегодня после-обеда волейбольную тренировку, и я смею не отсутствовать', literary: 'Нет, дело не в этом, но у меня же сегодня днём тренировка по волейболу, и мне нельзя пропускать!' },
        'Können wir uns vielleicht morgen treffen?': { literal: 'Можем мы себя возможно завтра встретить', literary: 'Может, встретимся завтра?' },
        'Morgen — da muss ich doch meiner Mutter helfen.': { literal: 'Завтра — тогда должен я ведь моей маме помогать', literary: 'Завтра — мне же нужно помогать маме.' },
      },
      vocabulary: [
        { de: 'das Treffen', plural: 'die Treffen', ru: 'встреча', gender: 'neutrum', collocation: 'zu einem Treffen kommen', example: 'Ich kann heute nicht zu unserem Treffen kommen.' },
        { de: 'die Klassenarbeit', plural: 'die Klassenarbeiten', ru: 'контрольная работа', gender: 'feminin', collocation: 'für die Klassenarbeit lernen', example: 'Musst du noch für die Klassenarbeit in Mathe lernen?' },
        { de: 'der Haushalt', plural: 'die Haushalte', ru: 'домашнее хозяйство', gender: 'maskulin', collocation: 'Hilfe im Haushalt', example: 'Braucht deine Mutter wieder Hilfe im Haushalt?' },
        { de: 'das Volleyballtraining', ru: 'волейбольная тренировка', gender: 'neutrum', collocation: 'Volleyballtraining haben', example: 'Ich habe doch heute Nachmittag Volleyballtraining.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Können wir uns vielleicht morgen treffen?' },
        { de: 'fehlen', ru: 'отсутствовать, пропускать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Ich darf nicht fehlen!' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Da muss ich doch meiner Mutter helfen.' },
      ],
      practiceSentences: [
        { de: 'Ich kann nicht kommen.', ru: 'Я не могу прийти.', note: 'модальный + инфинитив' },
        { de: 'Musst du lernen?', ru: 'Тебе нужно учиться?', note: 'V1 вопрос, модальный' },
        { de: 'Ich darf nicht fehlen.', ru: 'Мне нельзя отсутствовать.', note: 'модальный с отрицанием' },
        { de: 'Wir treffen uns morgen.', ru: 'Мы встретимся завтра.', note: 'возвратный глагол' },
        { de: 'Sie braucht Hilfe.', ru: 'Ей нужна помощь.', note: 'V2' },
      ],
      question: {
        de: 'Warum kann die Person nicht zum Treffen kommen?',
        ru: 'Почему человек не может прийти на встречу?',
        options: [
          { de: 'Sie muss für die Klassenarbeit lernen', ru: 'Нужно готовиться к контрольной' },
          { de: 'Sie hat Volleyballtraining', ru: 'У него тренировка по волейболу' },
          { de: 'Sie muss der Mutter helfen', ru: 'Нужно помогать маме' },
        ],
        correct: 1,
        explanation: 'Ясно сказано: "ich habe doch heute Nachmittag Volleyballtraining und ich darf nicht fehlen".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Essen',
      type: 'диалог',
      text: 'Der Film war toll, aber jetzt habe ich Hunger. Ich auch! Gehen wir in ein Fastfood-Restaurant, oder möchtest du lieber eine Bratwurst? Das schmeckt mir beides nicht besonders. Hast du Lust auf eine Pizza? Ich kenne eine super Pizzeria, und die ist auch ganz billig. Ja, warum nicht — prima Idee!',
      sentenceTranslations: {
        'Der Film war toll, aber jetzt habe ich Hunger.': { literal: 'Фильм был классный, но сейчас имею я голод', literary: 'Фильм был классный, но я проголодался.' },
        'Ich auch!': { literal: 'Я тоже', literary: 'Я тоже!' },
        'Gehen wir in ein Fastfood-Restaurant, oder möchtest du lieber eine Bratwurst?': { literal: 'Идём мы в фастфуд ресторан, или хочешь ты лучше жареную колбасу', literary: 'Пойдём в фастфуд, или лучше хочешь сосиску?' },
        'Das schmeckt mir beides nicht besonders.': { literal: 'Это вкусно мне оба не особенно', literary: 'Мне ни то, ни другое не очень нравится.' },
        'Hast du Lust auf eine Pizza?': { literal: 'Имеешь ты желание на пиццу', literary: 'Хочешь пиццу?' },
        'Ich kenne eine super Pizzeria, und die ist auch ganz billig.': { literal: 'Я знаю супер пиццерию, и она есть тоже совсем дешёвая', literary: 'Я знаю отличную пиццерию, и она очень дешёвая.' },
        'Ja, warum nicht — prima Idee!': { literal: 'Да, почему нет — отличная идея', literary: 'Да, почему бы и нет — отличная идея!' },
      },
      vocabulary: [
        { de: 'der Hunger', ru: 'голод', gender: 'maskulin', collocation: 'Hunger haben', example: 'Jetzt habe ich Hunger.' },
        { de: 'die Bratwurst', plural: 'die Bratwürste', ru: 'жареная колбаса', gender: 'feminin', collocation: 'eine Bratwurst essen', example: 'Möchtest du lieber eine Bratwurst?' },
        { de: 'die Pizza', plural: 'die Pizzen', ru: 'пицца', gender: 'feminin', collocation: 'Lust auf eine Pizza', example: 'Hast du Lust auf eine Pizza?' },
        { de: 'die Pizzeria', plural: 'die Pizzerias', ru: 'пиццерия', gender: 'feminin', collocation: 'eine super Pizzeria', example: 'Ich kenne eine super Pizzeria.' },
        { de: 'schmecken', ru: 'быть вкусным, нравиться (о еде)', type: 'verb', forms: 'schmeckt, schmeckte, hat geschmeckt', example: 'Das schmeckt mir beides nicht besonders.' },
        { de: 'kennen', ru: 'знать', type: 'verb', forms: 'kennt, kannte, hat gekannt', example: 'Ich kenne eine super Pizzeria.' },
        { de: 'billig', ru: 'дешёвый', type: 'adj', example: 'Die ist auch ganz billig.' },
        { de: 'toll', ru: 'классный, замечательный', type: 'adj', example: 'Der Film war toll.' },
      ],
      practiceSentences: [
        { de: 'Ich habe Hunger.', ru: 'Я голоден.', note: 'V2' },
        { de: 'Das schmeckt mir gut.', ru: 'Мне это вкусно.', note: 'V2, schmecken + Dat' },
        { de: 'Gehen wir essen?', ru: 'Пойдём поедим?', note: 'V1 предложение' },
        { de: 'Ich möchte eine Pizza.', ru: 'Я хочу пиццу.', note: 'модальный + объект' },
        { de: 'Die Pizzeria ist billig.', ru: 'Пиццерия дешёвая.', note: 'V2' },
      ],
      question: {
        de: 'Wohin gehen sie essen?',
        ru: 'Куда они пойдут есть?',
        options: [
          { de: 'In ein Fastfood-Restaurant', ru: 'В фастфуд-ресторан' },
          { de: 'Bratwurst kaufen', ru: 'Покупать сосиски' },
          { de: 'In eine Pizzeria', ru: 'В пиццерию' },
        ],
        correct: 2,
        explanation: 'Они договорились: "hast du Lust auf eine Pizza, ich kenne eine super Pizzeria" — "ja warum nicht prima Idee".'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Tamina',
      type: 'интервью',
      text: 'Liebe Kinder, in unserer Sendung sprechen wir heute über Onlineunterricht und brauchen eure Meinung dazu. Als Erste eine junge Schülerin aus Köln. Hallo Tamina, wie alt bist du und in welche Klasse gehst du? Guten Tag, ich bin 12 Jahre alt und gehe in die siebte Klasse. Und hattest du schon mal Onlineunterricht? Ja, ganz oft — ich lerne übers Internet Italienisch. Interessant! Auf einer italienischen Webseite? Nein, nein, es ist eine deutsche Sprachschule, die verschiedene Sprachkurse anbietet — genauer gesagt eine deutsche Onlinesprachschule, wo man nur online verschiedene Sprachen lernen kann. Und wie funktioniert das? Ganz einfach: auf der Homepage der Schule wird genau erklärt, wie man sich zum gewünschten Sprachkurs anmelden kann. Und wenn man bei der Anmeldung oder später beim Onlineunterricht Probleme hat, bekommt man Hilfe per Chat. Es gibt sogar eine Telefonnummer, wo man von früh bis spät anrufen kann, wenn etwas nicht klar ist oder wenn man einfach nicht weiterkommt. Was braucht man denn, Tamina, für den Onlineunterricht? Auf jeden Fall einen Computer oder ein Tablet. Ein Drucker ist nicht notwendig, aber ich persönlich finde ihn sehr nützlich — ich drucke nämlich die Arbeitsblätter aus, die wir im Unterricht benutzen, denn ich lese lieber auf Papier als am Computer oder Tablet. Das ist, denke ich, auch besser für die Augen. Muss man für den Onlineunterricht auch Bücher kaufen? Ja und nein: im Unterricht benutzen wir ein E-Book, das ist im Preis enthalten. Ich aber habe das Buch auch in Papierform gekauft, damit kann ich besonders nach dem Unterricht besser arbeiten und Sachen wiederholen. Unser Lehrer schickt uns außerdem vor und nach jeder Stunde auch andere Dateien mit verschiedenen Sachen, wie z.B. Übungen oder Texte und Videos. Sehr interessant! Ja, der Onlineunterricht macht großen Spaß!',
      sentenceTranslations: {
        'Liebe Kinder, in unserer Sendung sprechen wir heute über Onlineunterricht und brauchen eure Meinung dazu.': { literal: 'Дорогие дети, в нашей передаче говорим мы сегодня об онлайн-обучении и нуждаемся ваше мнение к-тому', literary: 'Дорогие дети, в нашей передаче мы сегодня говорим об онлайн-обучении и хотим узнать ваше мнение.' },
        'Als Erste eine junge Schülerin aus Köln.': { literal: 'Как первая молодая ученица из Кёльна', literary: 'Первая — молодая ученица из Кёльна.' },
        'Hallo Tamina, wie alt bist du und in welche Klasse gehst du?': { literal: 'Привет Тамина, как стар есть ты и в какой класс ходишь ты', literary: 'Привет, Тамина, сколько тебе лет и в каком ты классе?' },
        'Guten Tag, ich bin 12 Jahre alt und gehe in die siebte Klasse.': { literal: 'Добрый день, я есть 12 лет стар и хожу в седьмой класс', literary: 'Добрый день, мне 12 лет, и я учусь в седьмом классе.' },
        'Und hattest du schon mal Onlineunterricht?': { literal: 'И имела ты уже раз онлайн-обучение', literary: 'А у тебя уже был опыт онлайн-обучения?' },
        'Ja, ganz oft — ich lerne übers Internet Italienisch.': { literal: 'Да, совсем часто — я учу через интернет итальянский', literary: 'Да, часто — я учу итальянский через интернет.' },
        'Interessant!': { literal: 'Интересно', literary: 'Интересно!' },
        'Auf einer italienischen Webseite?': { literal: 'На итальянском веб-сайте', literary: 'На итальянском сайте?' },
        'Nein, nein, es ist eine deutsche Sprachschule, die verschiedene Sprachkurse anbietet — genauer gesagt eine deutsche Onlinesprachschule, wo man nur online verschiedene Sprachen lernen kann.': { literal: 'Нет, нет, это есть немецкая языковая школа, которая различные языковые курсы предлагает — точнее сказано немецкая онлайн-языковая-школа, где человек только онлайн различные языки учить может', literary: 'Нет, это немецкая языковая школа, которая предлагает разные курсы — точнее, немецкая онлайн-школа, где можно изучать разные языки онлайн.' },
        'Und wie funktioniert das?': { literal: 'И как функционирует это', literary: 'А как это работает?' },
        'Ganz einfach: auf der Homepage der Schule wird genau erklärt, wie man sich zum gewünschten Sprachkurs anmelden kann.': { literal: 'Совсем просто: на домашней-странице школы становится точно объяснено, как человек себя к желаемому языковому курсу записать может', literary: 'Очень просто: на сайте школы подробно объясняется, как записаться на нужный курс.' },
        'Und wenn man bei der Anmeldung oder später beim Onlineunterricht Probleme hat, bekommt man Hilfe per Chat.': { literal: 'И если человек при регистрации или позже при онлайн-обучении проблемы имеет, получает человек помощь по чату', literary: 'И если при регистрации или позже при обучении возникают проблемы, можно получить помощь в чате.' },
        'Es gibt sogar eine Telefonnummer, wo man von früh bis spät anrufen kann, wenn etwas nicht klar ist oder wenn man einfach nicht weiterkommt.': { literal: 'Оно даёт даже номер телефона, где человек от рано до поздно позвонить может, если что-то не ясно есть или если человек просто не дальше-приходит', literary: 'Есть даже номер телефона, по которому можно звонить с утра до вечера, если что-то непонятно или что-то не получается.' },
        'Was braucht man denn, Tamina, für den Onlineunterricht?': { literal: 'Что нуждается человек, Тамина, для онлайн-обучения', literary: 'Что нужно для онлайн-обучения, Тамина?' },
        'Auf jeden Fall einen Computer oder ein Tablet.': { literal: 'На каждый случай компьютер или планшет', literary: 'В любом случае компьютер или планшет.' },
        'Ein Drucker ist nicht notwendig, aber ich persönlich finde ihn sehr nützlich — ich drucke nämlich die Arbeitsblätter aus, die wir im Unterricht benutzen, denn ich lese lieber auf Papier als am Computer oder Tablet.': { literal: 'Принтер есть не необходимый, но я лично нахожу его очень полезным — я печатаю именно рабочие листы, которые мы в обучении используем, ибо я читаю лучше на бумаге чем на компьютере или планшете', literary: 'Принтер не обязателен, но лично я считаю его очень полезным — я распечатываю рабочие листы, которые мы используем на занятиях, потому что мне больше нравится читать на бумаге.' },
        'Das ist, denke ich, auch besser für die Augen.': { literal: 'Это есть, думаю я, тоже лучше для глаз', literary: 'Это, думаю, и для глаз лучше.' },
        'Muss man für den Onlineunterricht auch Bücher kaufen?': { literal: 'Должен человек для онлайн-обучения тоже книги покупать', literary: 'Нужно ли покупать книги для онлайн-обучения?' },
        'Ja und nein: im Unterricht benutzen wir ein E-Book, das ist im Preis enthalten.': { literal: 'Да и нет: в обучении используем мы электронную книгу, это есть в цене содержащееся', literary: 'И да, и нет: на занятиях мы используем электронную книгу, она включена в стоимость.' },
        'Ich aber habe das Buch auch in Papierform gekauft, damit kann ich besonders nach dem Unterricht besser arbeiten und Sachen wiederholen.': { literal: 'Я но имею книгу тоже в бумажной-форме купила, с-тем могу я особенно после обучения лучше работать и вещи повторять', literary: 'Но я также купила книгу в бумажном виде — с ней я лучше работаю после занятий и повторяю материал.' },
        'Unser Lehrer schickt uns außerdem vor und nach jeder Stunde auch andere Dateien mit verschiedenen Sachen, wie z.B. Übungen oder Texte und Videos.': { literal: 'Наш учитель посылает нам кроме-того перед и после каждого часа также другие файлы с различными вещами, как например упражнения или тексты и видео', literary: 'Наш учитель также присылает нам до и после каждого занятия файлы с разными материалами — упражнениями, текстами и видео.' },
        'Sehr interessant!': { literal: 'Очень интересно', literary: 'Очень интересно!' },
        'Ja, der Onlineunterricht macht großen Spaß!': { literal: 'Да, онлайн-обучение делает большое удовольствие', literary: 'Да, онлайн-обучение очень увлекательное!' },
      },
      vocabulary: [
        { de: 'die Sendung', plural: 'die Sendungen', ru: 'передача', gender: 'feminin', collocation: 'in unserer Sendung', example: 'In unserer Sendung sprechen wir heute über Onlineunterricht.' },
        { de: 'der Onlineunterricht', ru: 'онлайн-обучение', gender: 'maskulin', collocation: 'Onlineunterricht machen', example: 'In unserer Sendung sprechen wir heute über Onlineunterricht.' },
        { de: 'die Sprachschule', plural: 'die Sprachschulen', ru: 'языковая школа', gender: 'feminin', collocation: 'eine deutsche Sprachschule', example: 'Es ist eine deutsche Sprachschule, die verschiedene Sprachkurse anbietet.' },
        { de: 'der Sprachkurs', plural: 'die Sprachkurse', ru: 'языковой курс', gender: 'maskulin', collocation: 'zum Sprachkurs anmelden', example: 'Wie man sich zum gewünschten Sprachkurs anmelden kann.' },
        { de: 'die Anmeldung', plural: 'die Anmeldungen', ru: 'регистрация, запись', gender: 'feminin', collocation: 'bei der Anmeldung', example: 'Wenn man bei der Anmeldung Probleme hat.' },
        { de: 'der Drucker', plural: 'die Drucker', ru: 'принтер', gender: 'maskulin', collocation: 'einen Drucker brauchen', example: 'Ein Drucker ist nicht notwendig, aber ich finde ihn sehr nützlich.' },
        { de: 'das Arbeitsblatt', plural: 'die Arbeitsblätter', ru: 'рабочий лист', gender: 'neutrum', collocation: 'Arbeitsblätter ausdrucken', example: 'Ich drucke nämlich die Arbeitsblätter aus.' },
        { de: 'die Datei', plural: 'die Dateien', ru: 'файл', gender: 'feminin', collocation: 'Dateien schicken', example: 'Unser Lehrer schickt uns Dateien mit verschiedenen Sachen.' },
        { de: 'der Spaß', ru: 'удовольствие, веселье', gender: 'maskulin', collocation: 'Spaß machen', example: 'Der Onlineunterricht macht großen Spaß!' },
        { de: 'sich anmelden', ru: 'записываться, регистрироваться', type: 'verb', forms: 'meldet sich an, meldete sich an, hat sich angemeldet', example: 'Wie man sich zum Sprachkurs anmelden kann.' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'bietet an, bot an, hat angeboten', example: 'Eine Sprachschule, die verschiedene Sprachkurse anbietet.' },
        { de: 'ausdrucken', ru: 'распечатывать', type: 'verb', forms: 'druckt aus, druckte aus, hat ausgedruckt', example: 'Ich drucke nämlich die Arbeitsblätter aus.' },
        { de: 'benutzen', ru: 'использовать', type: 'verb', forms: 'benutzt, benutzte, hat benutzt', example: 'Die Arbeitsblätter, die wir im Unterricht benutzen.' },
        { de: 'wiederholen', ru: 'повторять', type: 'verb', forms: 'wiederholt, wiederholte, hat wiederholt', example: 'Damit kann ich Sachen wiederholen.' },
        { de: 'notwendig', ru: 'необходимый', type: 'adj', example: 'Ein Drucker ist nicht notwendig.' },
        { de: 'verschieden', ru: 'различный, разный', type: 'adj', example: 'Eine Sprachschule, die verschiedene Sprachkurse anbietet.' },
      ],
      practiceSentences: [
        { de: 'Ich lerne Deutsch online.', ru: 'Я учу немецкий онлайн.', note: 'V2' },
        { de: 'Das wird im Kurs erklärt.', ru: 'Это объясняется на курсе.', note: 'Passiv Präsens' },
        { de: 'Ich melde mich zum Kurs an.', ru: 'Я записываюсь на курс.', note: 'возвратный с отдел. приставкой' },
        { de: 'Wir drucken die Übungen aus.', ru: 'Мы распечатываем упражнения.', note: 'отделяемая приставка' },
        { de: 'Der Unterricht macht Spaß.', ru: 'Занятия интересные.', note: 'V2' },
      ],
      question: {
        de: 'Tamina ist 13 Jahre alt.',
        ru: 'Тамине 13 лет.',
        options: [
          { de: 'Ja', ru: 'Да' },
          { de: 'Nein', ru: 'Нет' },
        ],
        correct: 1,
        explanation: 'Тамина говорит: "ich bin 12 Jahre alt", а не 13.'
      }
    },
  ],

  /* ─── prompts ─── */
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören — Fit in Deutsch 2):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Prüfung).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'Passiv: werden + Partizip II — geprüft werden sollen, wird erklärt',
    'weil/dass-Nebensatz: глагол в конце — dass der Zug bequemer ist',
    'Отделяемые приставки: abholen, ankommen, aufpassen, anrufen, ausdrucken, einladen, ausgehen, anmelden',
    'Модальные глаголы: müssen, können, möchte, wollen, dürfen, sollen',
    'Konjunktiv II: würde + Infinitiv, wäre — ich würde gern sehen, das wäre mir lieber',
    'sich wünschen + Dativ: ich habe mir ... gewünscht',
    'Perfekt: hat geschickt, habe gekauft, hat gemeint, habe gelacht',
    'Imperativ: kontrolliert, pass auf, hol ab, vergiss nicht, besuchen Sie',
    'wegen + Genitiv: wegen technischer Probleme',
    'mit + Dativ (транспорт): mit dem Bus, mit dem Zug, mit dem Auto',
  ],
};

LESSONS.push(LESSON_33);
