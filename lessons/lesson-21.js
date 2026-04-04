/* ═══════════════════════════════════════════════════════════
   Lesson 21 — Goethe Zertifikat A2 Hören — Thema Schule
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_21 = {
  id: 'lesson-21',
  number: 21,
  title: 'Goethe A2 Hören — Thema Schule',
  subtitle: 'Radiosendung, Schulgespräche, Interviews und Durchsagen rund um das Thema Schule',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-21',
  videoUrl: 'https://www.youtube.com/watch?v=frlYKKUrYBQ',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Radio Lars',
      type: 'радиопередача + звонок',
      text: 'Hallo Leute es ist wieder soweit eure Sendung von 5 bis 6 bei Radio Regenbogen im Zentrum steht heute das Thema Schule langweilig nicht mit euch wer hat interessante Ideen was macht die Schule spannend und hier haben wir Lars am Telefon Lars will etwas zum Thema Hausaufgaben sagen Also ich gehe ins Goethe-Gymnasium und da haben wir einen tollen Hausaufgabenservice die Schüler im Computerkurs sammeln alle guten Hausaufgaben wenn du eine Hausaufgabe suchst schau im Online-Katalog vielleicht ist etwas dabei wer keine Hausaufgaben geschickt hat bekommt auch keine von uns du kannst nur dann etwas bekommen wenn du selbst auch schon etwas geschickt hast es funktioniert prima',
      sentenceTranslations: {
        'Hallo Leute es ist wieder soweit eure Sendung von 5 bis 6 bei Radio Regenbogen im Zentrum steht heute das Thema Schule langweilig nicht mit euch wer hat interessante Ideen was macht die Schule spannend und hier haben wir Lars am Telefon Lars will etwas zum Thema Hausaufgaben sagen Also ich gehe ins Goethe-Gymnasium und da haben wir einen tollen Hausaufgabenservice die Schüler im Computerkurs sammeln alle guten Hausaufgaben wenn du eine Hausaufgabe suchst schau im Online-Katalog vielleicht ist etwas dabei wer keine Hausaufgaben geschickt hat bekommt auch keine von uns du kannst nur dann etwas bekommen wenn du selbst auch schon etwas geschickt hast es funktioniert prima': {
          literal: 'Привет люди это есть снова настолько-далеко ваша передача от 5 до 6 у Радио Радуга в центре стоит сегодня тема школа скучная не с вами кто имеет интересные идеи что делает школу увлекательной и здесь имеем мы Ларса у телефона Ларс хочет что-то к теме домашних заданий сказать Итак я хожу в Гёте-гимназию и там имеем мы один отличный сервис-домашних-заданий ученики в компьютерном курсе собирают все хорошие домашние задания если ты одно домашнее задание ищешь смотри в онлайн-каталоге может-быть есть что-то при-этом кто никакие домашние задания послал имеет получает тоже никакие от нас ты можешь только тогда что-то получить когда ты сам тоже уже что-то послал имеешь это функционирует отлично',
          literary: 'Привет, ребята, снова пришло время вашей передачи с 5 до 6 на Радио Радуга. В центре внимания сегодня тема школы — скучная? Не с вами! У кого есть интересные идеи, что делает школу увлекательной? И вот у нас Ларс на телефоне. Ларс хочет сказать что-то о домашних заданиях. Я учусь в гимназии Гёте, и у нас отличный сервис домашних заданий. Ученики компьютерного курса собирают все хорошие работы. Если ищешь домашнее задание — посмотри в онлайн-каталоге, может что-то найдётся. Кто не прислал своих работ, тот и не получит. Ты можешь получить что-то, только если сам уже что-то прислал. Это отлично работает.'
        },
      },
      vocabulary: [
        { de: 'die Sendung', plural: 'die Sendungen', ru: 'передача', gender: 'feminin', collocation: 'eure Sendung von 5 bis 6', example: 'Hallo Leute es ist wieder soweit eure Sendung von 5 bis 6 bei Radio Regenbogen.' },
        { de: 'das Zentrum', plural: 'die Zentren', ru: 'центр', gender: 'neutrum', collocation: 'im Zentrum stehen', example: 'Im Zentrum steht heute das Thema Schule.' },
        { de: 'das Thema', plural: 'die Themen', ru: 'тема', gender: 'neutrum', collocation: 'zum Thema sprechen', example: 'Lars will etwas zum Thema Hausaufgaben sagen.' },
        { de: 'die Idee', plural: 'die Ideen', ru: 'идея', gender: 'feminin', collocation: 'interessante Ideen haben', example: 'Wer hat interessante Ideen was macht die Schule spannend.' },
        { de: 'die Hausaufgabe', plural: 'die Hausaufgaben', ru: 'домашнее задание', gender: 'feminin', collocation: 'eine Hausaufgabe suchen', example: 'Wenn du eine Hausaufgabe suchst schau im Online-Katalog.' },
        { de: 'das Gymnasium', plural: 'die Gymnasien', ru: 'гимназия', gender: 'neutrum', collocation: 'ins Gymnasium gehen', example: 'Also ich gehe ins Goethe-Gymnasium.' },
        { de: 'der Computerkurs', plural: 'die Computerkurse', ru: 'компьютерный курс', gender: 'maskulin', collocation: 'im Computerkurs', example: 'Die Schüler im Computerkurs sammeln alle guten Hausaufgaben.' },
        { de: 'der Online-Katalog', plural: 'die Online-Kataloge', ru: 'онлайн-каталог', gender: 'maskulin', collocation: 'im Online-Katalog schauen', example: 'Wenn du eine Hausaufgabe suchst schau im Online-Katalog.' },
        { de: 'sammeln', ru: 'собирать', type: 'verb', forms: 'sammelt, sammelte, hat gesammelt', example: 'Die Schüler im Computerkurs sammeln alle guten Hausaufgaben.' },
        { de: 'funktionieren', ru: 'работать, функционировать', type: 'verb', forms: 'funktioniert, funktionierte, hat funktioniert', example: 'Es funktioniert prima.' },
        { de: 'schicken', ru: 'посылать, присылать', type: 'verb', forms: 'schickt, schickte, hat geschickt', example: 'Wer keine Hausaufgaben geschickt hat bekommt auch keine von uns.' },
        { de: 'spannend', ru: 'увлекательный', type: 'adj', example: 'Was macht die Schule spannend.' },
      ],
      practiceSentences: [
        { de: 'Die Sendung beginnt um fünf Uhr.', ru: 'Передача начинается в пять часов.', note: 'V2' },
        { de: 'Wenn ich Zeit habe, höre ich Radio.', ru: 'Если у меня есть время, я слушаю радио.', note: 'конец в Nebensatz' },
        { de: 'Ich gehe jeden Tag ins Gymnasium.', ru: 'Я каждый день хожу в гимназию.', note: 'V2' },
        { de: 'Der Service funktioniert sehr gut.', ru: 'Сервис работает очень хорошо.', note: 'V2' },
        { de: 'Schick mir deine Hausaufgaben!', ru: 'Пришли мне твои домашние задания!', note: 'императив в начале' },
      ],
      question: {
        de: 'Was macht der Hausaufgabenservice am Goethe-Gymnasium?',
        ru: 'Что делает сервис домашних заданий в гимназии Гёте?',
        options: [
          { de: 'Die Schüler helfen sich persönlich bei den Hausaufgaben', ru: 'Ученики лично помогают друг другу с домашними заданиями' },
          { de: 'Die Schüler sammeln gute Hausaufgaben im Online-Katalog', ru: 'Ученики собирают хорошие домашние задания в онлайн-каталоге' },
          { de: 'Die Lehrer kontrollieren alle Hausaufgaben online', ru: 'Учителя проверяют все домашние задания онлайн' },
        ],
        correct: 1,
        explanation: 'Lars говорит: "die Schüler im Computerkurs sammeln alle guten Hausaufgaben" и "schau im Online-Katalog".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Vokabel-App',
      type: 'монолог/совет',
      text: 'Habt ihr noch ein Vokabelheft ich nicht ich lerne und trainiere jetzt neue englische Wörter mit dem Smartphone kein Geld kein Problem das Programm kann man kostenlos im Internet finden es ist super einfach und die Übungen machen richtig Spaß damit kann ich sogar im Bus lernen',
      sentenceTranslations: {
        'Habt ihr noch ein Vokabelheft ich nicht ich lerne und trainiere jetzt neue englische Wörter mit dem Smartphone kein Geld kein Problem das Programm kann man kostenlos im Internet finden es ist super einfach und die Übungen machen richtig Spaß damit kann ich sogar im Bus lernen': {
          literal: 'Имеете вы ещё одну словарную-тетрадь я нет я учу и тренирую сейчас новые английские слова с смартфоном никаких денег никакой проблемы программу может человек бесплатно в интернете найти оно есть супер просто и упражнения делают правильно удовольствие с-этим могу я даже в автобусе учить',
          literary: 'У вас ещё есть словарная тетрадь? У меня нет. Я сейчас учу и тренирую новые английские слова на смартфоне. Нет денег — нет проблем. Программу можно бесплатно найти в интернете. Она очень простая, и упражнения действительно весёлые. С ней я могу учиться даже в автобусе.'
        },
      },
      vocabulary: [
        { de: 'das Vokabelheft', plural: 'die Vokabelhefte', ru: 'словарная тетрадь', gender: 'neutrum', collocation: 'ein Vokabelheft haben', example: 'Habt ihr noch ein Vokabelheft ich nicht.' },
        { de: 'das Smartphone', plural: 'die Smartphones', ru: 'смартфон', gender: 'neutrum', collocation: 'mit dem Smartphone lernen', example: 'Ich lerne und trainiere jetzt neue englische Wörter mit dem Smartphone.' },
        { de: 'das Programm', plural: 'die Programme', ru: 'программа', gender: 'neutrum', collocation: 'ein Programm finden', example: 'Das Programm kann man kostenlos im Internet finden.' },
        { de: 'die Übung', plural: 'die Übungen', ru: 'упражнение', gender: 'feminin', collocation: 'Übungen machen', example: 'Die Übungen machen richtig Spaß.' },
        { de: 'der Spaß', ru: 'удовольствие, веселье', gender: 'maskulin', collocation: 'Spaß machen', example: 'Die Übungen machen richtig Spaß.' },
        { de: 'trainieren', ru: 'тренировать', type: 'verb', forms: 'trainiert, trainierte, hat trainiert', example: 'Ich lerne und trainiere jetzt neue englische Wörter mit dem Smartphone.' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Das Programm kann man kostenlos im Internet finden.' },
        { de: 'sogar', ru: 'даже', type: 'adv', example: 'Damit kann ich sogar im Bus lernen.' },
      ],
      practiceSentences: [
        { de: 'Ich lerne neue Wörter mit einer App.', ru: 'Я учу новые слова с помощью приложения.', note: 'V2' },
        { de: 'Man kann das Programm herunterladen.', ru: 'Можно скачать программу.', note: 'модальный + инфинитив' },
        { de: 'Die App macht mir Spaß.', ru: 'Приложение мне нравится.', note: 'V2' },
        { de: 'Ich trainiere jeden Tag im Bus.', ru: 'Я тренируюсь каждый день в автобусе.', note: 'V2' },
        { de: 'Das Heft brauche ich nicht mehr.', ru: 'Тетрадь мне больше не нужна.', note: 'V2' },
      ],
      question: {
        de: 'Womit lernt der Sprecher neue englische Wörter?',
        ru: 'С помощью чего говорящий учит новые английские слова?',
        options: [
          { de: 'Mit einem Vokabelheft', ru: 'С помощью словарной тетради' },
          { de: 'Mit dem Smartphone', ru: 'С помощью смартфона' },
          { de: 'Mit teuren Büchern', ru: 'С помощью дорогих книг' },
        ],
        correct: 1,
        explanation: 'Говорящий заявляет: "ich lerne und trainiere jetzt neue englische Wörter mit dem Smartphone".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Abiturklasse Tanz',
      type: 'объявление',
      text: 'Die Abiturklasse in Kaiserswerth plant für die Themenwoche zum Ende der Schulzeit etwas Witziges Tanz und Musik im Pausenhof es gibt dann keine Pausenklingel wenn die Musik anfängt rennen alle in den Hof und tanzen am letzten Tag tanzen alle zusammen den Harlem Shake also alle Schüler Lehrer und der Rektor das wird lustig',
      sentenceTranslations: {
        'Die Abiturklasse in Kaiserswerth plant für die Themenwoche zum Ende der Schulzeit etwas Witziges Tanz und Musik im Pausenhof es gibt dann keine Pausenklingel wenn die Musik anfängt rennen alle in den Hof und tanzen am letzten Tag tanzen alle zusammen den Harlem Shake also alle Schüler Lehrer und der Rektor das wird lustig': {
          literal: 'Выпускной-класс в Кайзерсверте планирует для тематической-недели к концу школьного-времени что-то забавное танец и музыка в школьном-дворе это даёт тогда никакого звонка-на-перемену когда музыка начинается бегут все в двор и танцуют в последний день танцуют все вместе Harlem Shake итак все ученики учителя и директор это становится весело',
          literary: 'Выпускной класс в Кайзерсверте планирует для тематической недели в конце учебного года что-то забавное — танцы и музыка во дворе. Тогда не будет звонка на перемену. Когда начинается музыка, все бегут во двор и танцуют. В последний день все вместе танцуют Harlem Shake — все ученики, учителя и директор. Это будет весело!'
        },
      },
      vocabulary: [
        { de: 'die Abiturklasse', plural: 'die Abiturklassen', ru: 'выпускной класс', gender: 'feminin', collocation: 'die Abiturklasse plant', example: 'Die Abiturklasse in Kaiserswerth plant für die Themenwoche zum Ende der Schulzeit etwas Witziges.' },
        { de: 'die Themenwoche', plural: 'die Themenwochen', ru: 'тематическая неделя', gender: 'feminin', collocation: 'für die Themenwoche', example: 'Die Abiturklasse in Kaiserswerth plant für die Themenwoche zum Ende der Schulzeit etwas Witziges.' },
        { de: 'der Pausenhof', plural: 'die Pausenhöfe', ru: 'школьный двор', gender: 'maskulin', collocation: 'im Pausenhof tanzen', example: 'Tanz und Musik im Pausenhof.' },
        { de: 'die Pausenklingel', plural: 'die Pausenklingeln', ru: 'звонок на перемену', gender: 'feminin', collocation: 'keine Pausenklingel', example: 'Es gibt dann keine Pausenklingel.' },
        { de: 'der Rektor', plural: 'die Rektoren', ru: 'директор', gender: 'maskulin', collocation: 'der Rektor tanzt', example: 'Also alle Schüler Lehrer und der Rektor.' },
        { de: 'planen', ru: 'планировать', type: 'verb', forms: 'plant, plante, hat geplant', example: 'Die Abiturklasse in Kaiserswerth plant für die Themenwoche zum Ende der Schulzeit etwas Witziges.' },
        { de: 'anfangen', ru: 'начинаться', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Wenn die Musik anfängt rennen alle in den Hof und tanzen.' },
        { de: 'rennen', ru: 'бежать', type: 'verb', forms: 'rennt, rannte, ist gerannt', example: 'Wenn die Musik anfängt rennen alle in den Hof und tanzen.' },
        { de: 'witzig', ru: 'забавный, смешной', type: 'adj', example: 'Die Abiturklasse plant etwas Witziges.' },
        { de: 'lustig', ru: 'весёлый, забавный', type: 'adj', example: 'Das wird lustig.' },
      ],
      practiceSentences: [
        { de: 'Die Klasse plant ein Fest.', ru: 'Класс планирует праздник.', note: 'V2' },
        { de: 'Die Musik fängt um zehn an.', ru: 'Музыка начинается в десять.', note: 'отделяемая приставка' },
        { de: 'Wenn es klingelt, gehen wir raus.', ru: 'Когда звенит звонок, мы выходим.', note: 'конец в Nebensatz' },
        { de: 'Alle tanzen im Pausenhof.', ru: 'Все танцуют во дворе.', note: 'V2' },
        { de: 'Das wird ein schöner Tag.', ru: 'Это будет прекрасный день.', note: 'V2' },
      ],
      question: {
        de: 'Was passiert am letzten Tag der Themenwoche?',
        ru: 'Что происходит в последний день тематической недели?',
        options: [
          { de: 'Es gibt eine normale Pausenklingel', ru: 'Звенит обычный звонок на перемену' },
          { de: 'Nur die Schüler tanzen zusammen', ru: 'Только ученики танцуют вместе' },
          { de: 'Alle tanzen zusammen den Harlem Shake', ru: 'Все вместе танцуют Harlem Shake' },
        ],
        correct: 2,
        explanation: 'В тексте сказано: "am letzten Tag tanzen alle zusammen den Harlem Shake also alle Schüler Lehrer und der Rektor".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Logo-Wettbewerb',
      type: 'официальное объявление',
      text: 'Achtung bitte eine Durchsage an alle Schülerinnen und Schüler wie ihr wisst hat unsere Schule seit diesem Jahr einen Fanclub für alle die unsere Schule besuchen oder besucht haben für den Club suchen wir ein Symbol ein Logo dafür machen wir einen Zeichenwettbewerb bitte schickt eure Ideen an das Sekretariat per Mail für die besten Ideen gibt es tolle Preise schaut euch das Plakat im Pausenhof an danke schön',
      sentenceTranslations: {
        'Achtung bitte eine Durchsage an alle Schülerinnen und Schüler wie ihr wisst hat unsere Schule seit diesem Jahr einen Fanclub für alle die unsere Schule besuchen oder besucht haben für den Club suchen wir ein Symbol ein Logo dafür machen wir einen Zeichenwettbewerb bitte schickt eure Ideen an das Sekretariat per Mail für die besten Ideen gibt es tolle Preise schaut euch das Plakat im Pausenhof an danke schön': {
          literal: 'Внимание пожалуйста одно объявление ко всем ученицам и ученикам как вы знаете имеет наша школа с этого года один фан-клуб для всех которые нашу школу посещают или посетили имеют для клуба ищем мы один символ один логотип для-этого делаем мы один конкурс-рисунков пожалуйста шлите ваши идеи в секретариат через почту для лучших идей даёт оно отличные призы смотрите себе плакат в школьном-дворе посмотрите спасибо красиво',
          literary: 'Внимание, объявление для всех учеников и учениц. Как вы знаете, в нашей школе с этого года есть фан-клуб для всех, кто учится или учился в нашей школе. Для клуба мы ищем символ — логотип. Для этого мы проводим конкурс рисунков. Присылайте ваши идеи в секретариат по электронной почте. За лучшие идеи будут отличные призы. Посмотрите плакат во дворе. Спасибо!'
        },
      },
      vocabulary: [
        { de: 'die Durchsage', plural: 'die Durchsagen', ru: 'объявление', gender: 'feminin', collocation: 'eine Durchsage an alle', example: 'Achtung bitte eine Durchsage an alle Schülerinnen und Schüler.' },
        { de: 'der Fanclub', plural: 'die Fanclubs', ru: 'фан-клуб', gender: 'maskulin', collocation: 'einen Fanclub haben', example: 'Hat unsere Schule seit diesem Jahr einen Fanclub.' },
        { de: 'das Symbol', plural: 'die Symbole', ru: 'символ', gender: 'neutrum', collocation: 'ein Symbol suchen', example: 'Für den Club suchen wir ein Symbol ein Logo.' },
        { de: 'der Zeichenwettbewerb', plural: 'die Zeichenwettbewerbe', ru: 'конкурс рисунков', gender: 'maskulin', collocation: 'einen Zeichenwettbewerb machen', example: 'Dafür machen wir einen Zeichenwettbewerb.' },
        { de: 'das Sekretariat', plural: 'die Sekretariate', ru: 'секретариат', gender: 'neutrum', collocation: 'an das Sekretariat schicken', example: 'Bitte schickt eure Ideen an das Sekretariat per Mail.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'приз', gender: 'maskulin', collocation: 'tolle Preise', example: 'Für die besten Ideen gibt es tolle Preise.' },
        { de: 'das Plakat', plural: 'die Plakate', ru: 'плакат', gender: 'neutrum', collocation: 'das Plakat anschauen', example: 'Schaut euch das Plakat im Pausenhof an.' },
        { de: 'besuchen', ru: 'посещать', type: 'verb', forms: 'besucht, besuchte, hat besucht', example: 'Für alle die unsere Schule besuchen oder besucht haben.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Für den Club suchen wir ein Symbol ein Logo.' },
      ],
      practiceSentences: [
        { de: 'Wir suchen ein neues Logo.', ru: 'Мы ищем новый логотип.', note: 'V2' },
        { de: 'Schickt eure Bilder an uns!', ru: 'Присылайте нам ваши рисунки!', note: 'императив в начале' },
        { de: 'Es gibt tolle Preise.', ru: 'Есть отличные призы.', note: 'V2 с es gibt' },
        { de: 'Der Wettbewerb beginnt heute.', ru: 'Конкурс начинается сегодня.', note: 'V2' },
        { de: 'Alle können mitmachen.', ru: 'Все могут участвовать.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Wie sollen die Schüler ihre Ideen für das Logo schicken?',
        ru: 'Как ученики должны присылать свои идеи для логотипа?',
        options: [
          { de: 'Persönlich im Sekretariat abgeben', ru: 'Лично сдать в секретариат' },
          { de: 'Per Mail an das Sekretariat', ru: 'По электронной почте в секретариат' },
          { de: 'Auf das Plakat im Pausenhof schreiben', ru: 'Написать на плакате во дворе' },
        ],
        correct: 1,
        explanation: 'В объявлении говорится: "bitte schickt eure Ideen an das Sekretariat per Mail".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Nina Nachricht',
      type: 'телефонное сообщение',
      text: 'Hallo Sabrina hier ist Nina wir haben morgen die Lerngruppe für Geographie leider kann ich nicht kommen weil ich Grippe und 39 Fieber habe ich habe mein Thema schon fertig vorbereitet wenn du willst kannst du alles vorher bei mir abholen dann könnt ihr weitermachen ruf mich an tschüssi',
      sentenceTranslations: {
        'Hallo Sabrina hier ist Nina wir haben morgen die Lerngruppe für Geographie leider kann ich nicht kommen weil ich Grippe und 39 Fieber habe ich habe mein Thema schon fertig vorbereitet wenn du willst kannst du alles vorher bei mir abholen dann könnt ihr weitermachen ruf mich an tschüssi': {
          literal: 'Привет Сабрина здесь есть Нина мы имеем завтра учебную-группу для географии к-сожалению могу я не прийти потому-что я грипп и 39 температуру имею я имею мою тему уже готово подготовленной если ты хочешь можешь ты всё заранее у меня забрать тогда можете вы продолжать позвони меня пока',
          literary: 'Привет, Сабрина, это Нина. У нас завтра учебная группа по географии. К сожалению, я не смогу прийти, потому что у меня грипп и температура 39. Я уже полностью подготовила свою тему. Если хочешь, можешь всё забрать у меня заранее. Тогда вы сможете продолжить. Позвони мне, пока!'
        },
      },
      vocabulary: [
        { de: 'die Lerngruppe', plural: 'die Lerngruppen', ru: 'учебная группа', gender: 'feminin', collocation: 'die Lerngruppe für Geographie', example: 'Wir haben morgen die Lerngruppe für Geographie.' },
        { de: 'die Grippe', ru: 'грипп', gender: 'feminin', collocation: 'Grippe haben', example: 'Leider kann ich nicht kommen weil ich Grippe und 39 Fieber habe.' },
        { de: 'das Fieber', ru: 'температура', gender: 'neutrum', collocation: '39 Fieber haben', example: 'Weil ich Grippe und 39 Fieber habe.' },
        { de: 'vorbereiten', ru: 'готовить, подготавливать', type: 'verb', forms: 'bereitet vor, bereitete vor, hat vorbereitet', example: 'Ich habe mein Thema schon fertig vorbereitet.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Kannst du alles vorher bei mir abholen.' },
        { de: 'weitermachen', ru: 'продолжать', type: 'verb', forms: 'macht weiter, machte weiter, hat weitergemacht', example: 'Dann könnt ihr weitermachen.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Ruf mich an tschüssi.' },
        { de: 'vorher', ru: 'заранее', type: 'adv', example: 'Kannst du alles vorher bei mir abholen.' },
      ],
      practiceSentences: [
        { de: 'Ich kann morgen nicht kommen.', ru: 'Я не смогу завтра прийти.', note: 'модальный + инфинитив' },
        { de: 'Ich habe Fieber und bin krank.', ru: 'У меня температура, и я болею.', note: 'V2' },
        { de: 'Du kannst die Aufgaben abholen.', ru: 'Ты можешь забрать задания.', note: 'модальный + отделяемая приставка' },
        { de: 'Wir machen morgen weiter.', ru: 'Мы продолжим завтра.', note: 'отделяемая приставка' },
        { de: 'Ruf mich bitte an!', ru: 'Позвони мне, пожалуйста!', note: 'отделяемая приставка в императиве' },
      ],
      question: {
        de: 'Warum kann Nina nicht zur Lerngruppe kommen?',
        ru: 'Почему Нина не может прийти на учебную группу?',
        options: [
          { de: 'Sie hat keine Zeit', ru: 'У неё нет времени' },
          { de: 'Sie hat Grippe und Fieber', ru: 'У неё грипп и температура' },
          { de: 'Sie hat ihr Thema nicht vorbereitet', ru: 'Она не подготовила свою тему' },
        ],
        correct: 1,
        explanation: 'Нина объясняет: "leider kann ich nicht kommen weil ich Grippe und 39 Fieber habe".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Lehrer-Gespräch',
      type: 'диалог',
      text: 'Na wie war der erste Tag wer ist euer Klassenlehrer Ach ganz gut Herr Kuhn unser Mathelehrer ist dieses Jahr auch unser Klassenlehrer Habt ihr in Deutsch wieder Frau Müller Nein leider nicht wir haben Herrn Schmidt Oje der ist doch so streng und in Französisch wen habt ihr da Ich habe doch dieses Jahr kein Französisch aber in Biologie haben wir die neue Frau Sommer die sieht nett aus habt ihr die auch Ja ich habe sie aber noch nicht gesehen in Kunst haben wir den verrückten Charlie Meinst du Herrn Karl den mit dem Ohrring Ja ja ich glaube die ganze Schule hat ihn er ist mehr Künstler als Lehrer macht nichts der ist immer gut immer noch besser als Frau Vogel die Musiklehrerin Spiel doch ein Instrument das mag sie Gitarre vielleicht Nee dann trainiere ich doch lieber für Fußball in Sport haben wir nämlich wie immer Herrn Seipel ich bin so froh verstehe Sport und Fußball das ist dein Leben Wen habt ihr denn in Chemie Das wissen wir noch nicht Na ich denke eher da hast du wohl nicht aufgepasst schläfst du schon am ersten Schultag',
      sentenceTranslations: {
        'Na wie war der erste Tag wer ist euer Klassenlehrer Ach ganz gut Herr Kuhn unser Mathelehrer ist dieses Jahr auch unser Klassenlehrer Habt ihr in Deutsch wieder Frau Müller Nein leider nicht wir haben Herrn Schmidt Oje der ist doch so streng und in Französisch wen habt ihr da Ich habe doch dieses Jahr kein Französisch aber in Biologie haben wir die neue Frau Sommer die sieht nett aus habt ihr die auch Ja ich habe sie aber noch nicht gesehen in Kunst haben wir den verrückten Charlie Meinst du Herrn Karl den mit dem Ohrring Ja ja ich glaube die ganze Schule hat ihn er ist mehr Künstler als Lehrer macht nichts der ist immer gut immer noch besser als Frau Vogel die Musiklehrerin Spiel doch ein Instrument das mag sie Gitarre vielleicht Nee dann trainiere ich doch lieber für Fußball in Sport haben wir nämlich wie immer Herrn Seipel ich bin so froh verstehe Sport und Fußball das ist dein Leben Wen habt ihr denn in Chemie Das wissen wir noch nicht Na ich denke eher da hast du wohl nicht aufgepasst schläfst du schon am ersten Schultag': {
          literal: 'Ну как был первый день кто есть ваш классный-руководитель ах совсем хорошо господин Кун наш учитель-математики есть этот год также наш классный-руководитель имеете вы в немецком снова госпожу Мюллер нет к-сожалению не мы имеем господина Шмидт ой-ёй он есть же так строг и в французском кого имеете вы там я имею же этот год никакой французский но в биологии имеем мы новую госпожу Зоммер она выглядит мило имеете вы её тоже да я имею её но ещё не видел в искусстве имеем мы сумасшедшего Чарли имеешь-в-виду ты господина Карла того с серьгой да да я думаю целая школа имеет его он есть больше художник чем учитель делает ничего он есть всегда хорошо всегда ещё лучше чем госпожа Фогель учительница-музыки играй же инструмент это любит она гитару может-быть нет тогда тренирую я же лучше для футбола в спорте имеем мы именно как всегда господина Зайпеля я есть так рад понимаю спорт и футбол это есть твоя жизнь кого имеете вы же в химии это знаем мы ещё не ну я думаю скорее там имеешь ты наверное не обращал-внимание спишь ты уже в первый школьный-день',
          literary: '— Ну, как прошёл первый день? Кто ваш классный руководитель? — Да нормально. Господин Кун, наш математик, в этом году также наш классный руководитель. — У вас по немецкому снова фрау Мюллер? — Нет, к сожалению, у нас господин Шмидт. — Ого, он же такой строгий. А по французскому кто? — У меня в этом году нет французского, но по биологии у нас новая фрау Зоммер, выглядит милой. А у вас? — Да, но я её ещё не видел. По искусству у нас чудаковатый Чарли. — Ты про господина Карла, того с серьгой? — Да-да, вся школа его знает. Он больше художник, чем учитель. Ничего, он всегда хорош. Всё лучше, чем фрау Фогель, учительница музыки. Поиграй на инструменте, она это любит. Может, гитара? — Нет, я лучше буду тренироваться для футбола. По физкультуре у нас, как всегда, господин Зайпель. Я так рад. — Понимаю, спорт и футбол — это твоя жизнь. А кто у вас по химии? — Мы ещё не знаем. — Скорее ты просто не обратил внимания. Уже спишь на первый день?'
        },
      },
      vocabulary: [
        { de: 'der Klassenlehrer', plural: 'die Klassenlehrer', ru: 'классный руководитель', gender: 'maskulin', collocation: 'unser Klassenlehrer', example: 'Herr Kuhn unser Mathelehrer ist dieses Jahr auch unser Klassenlehrer.' },
        { de: 'der Mathelehrer', plural: 'die Mathelehrer', ru: 'учитель математики', gender: 'maskulin', collocation: 'unser Mathelehrer', example: 'Herr Kuhn unser Mathelehrer ist dieses Jahr auch unser Klassenlehrer.' },
        { de: 'der Ohrring', plural: 'die Ohrringe', ru: 'серьга', gender: 'maskulin', collocation: 'den mit dem Ohrring', example: 'Meinst du Herrn Karl den mit dem Ohrring.' },
        { de: 'der Künstler', plural: 'die Künstler', ru: 'художник', gender: 'maskulin', collocation: 'mehr Künstler als Lehrer', example: 'Er ist mehr Künstler als Lehrer.' },
        { de: 'die Musiklehrerin', plural: 'die Musiklehrerinnen', ru: 'учительница музыки', gender: 'feminin', collocation: 'die Musiklehrerin', example: 'Immer noch besser als Frau Vogel die Musiklehrerin.' },
        { de: 'die Gitarre', plural: 'die Gitarren', ru: 'гитара', gender: 'feminin', collocation: 'Gitarre spielen', example: 'Spiel doch ein Instrument das mag sie Gitarre vielleicht.' },
        { de: 'der Schultag', plural: 'die Schultage', ru: 'школьный день', gender: 'maskulin', collocation: 'am ersten Schultag', example: 'Schläfst du schon am ersten Schultag.' },
        { de: 'aussehen', ru: 'выглядеть', type: 'verb', forms: 'sieht aus, sah aus, hat ausgesehen', example: 'Die neue Frau Sommer die sieht nett aus.' },
        { de: 'trainieren', ru: 'тренироваться', type: 'verb', forms: 'trainiert, trainierte, hat trainiert', example: 'Dann trainiere ich doch lieber für Fußball.' },
        { de: 'aufpassen', ru: 'обращать внимание', type: 'verb', forms: 'passt auf, passte auf, hat aufgepasst', example: 'Da hast du wohl nicht aufgepasst.' },
        { de: 'streng', ru: 'строгий', type: 'adj', example: 'Der ist doch so streng.' },
        { de: 'verrückt', ru: 'сумасшедший, чудаковатый', type: 'adj', example: 'In Kunst haben wir den verrückten Charlie.' },
      ],
      practiceSentences: [
        { de: 'Wer ist dein Lehrer?', ru: 'Кто твой учитель?', note: 'V2 после вопросительного слова' },
        { de: 'Wir haben einen neuen Lehrer.', ru: 'У нас новый учитель.', note: 'V2' },
        { de: 'Er ist sehr streng.', ru: 'Он очень строгий.', note: 'V2' },
        { de: 'Ich mag Kunst mehr als Musik.', ru: 'Мне нравится искусство больше, чем музыка.', note: 'V2' },
        { de: 'In Sport haben wir Herrn Berg.', ru: 'По физкультуре у нас господин Берг.', note: 'V2 с инверсией' },
      ],
      question: {
        de: 'Wer ist der Klassenlehrer in diesem Jahr?',
        ru: 'Кто классный руководитель в этом году?',
        options: [
          { de: 'Herr Schmidt, der Deutschlehrer', ru: 'Господин Шмидт, учитель немецкого' },
          { de: 'Herr Kuhn, der Mathelehrer', ru: 'Господин Кун, учитель математики' },
          { de: 'Herr Karl, der Kunstlehrer', ru: 'Господин Карл, учитель искусства' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "Herr Kuhn unser Mathelehrer ist dieses Jahr auch unser Klassenlehrer".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Oma und Enkel',
      type: 'диалог о предметах',
      text: 'Na mein Junge du bist ja jetzt auf dem Gymnasium macht dir die Schule Spaß Geht zu Oma Pausen und Ferien sind das Beste So so sag mal hast du ein Lieblingsfach früher hatten dir doch Geschichte und Englisch Spaß gemacht ist das immer noch so Nein nicht mehr alles was mit Mathe zu tun hat finde ich toll für Fächer wie Sprachen muss man einfach zu viel lernen',
      sentenceTranslations: {
        'Na mein Junge du bist ja jetzt auf dem Gymnasium macht dir die Schule Spaß Geht zu Oma Pausen und Ferien sind das Beste So so sag mal hast du ein Lieblingsfach früher hatten dir doch Geschichte und Englisch Spaß gemacht ist das immer noch so Nein nicht mehr alles was mit Mathe zu tun hat finde ich toll für Fächer wie Sprachen muss man einfach zu viel lernen': {
          literal: 'Ну мой мальчик ты есть же теперь на гимназии делает тебе школа удовольствие идёт к бабушке перемены и каникулы есть лучшее так так скажи же имеешь ты любимый-предмет раньше имели тебе же история и английский удовольствие сделано есть это всё-ещё так нет не больше всё что с математикой делать имеет нахожу я классным для предметов как языки должен человек просто слишком много учить',
          literary: '— Ну что, мой мальчик, ты же теперь в гимназии. Тебе нравится школа? — Так себе, бабушка. Перемены и каникулы — это лучшее. — Вот как. Скажи, у тебя есть любимый предмет? Раньше тебе же нравились история и английский. Это всё ещё так? — Нет, уже нет. Всё, что связано с математикой, мне нравится. А для таких предметов как языки нужно просто слишком много учить.'
        },
      },
      vocabulary: [
        { de: 'das Gymnasium', plural: 'die Gymnasien', ru: 'гимназия', gender: 'neutrum', collocation: 'auf dem Gymnasium sein', example: 'Du bist ja jetzt auf dem Gymnasium.' },
        { de: 'das Lieblingsfach', plural: 'die Lieblingsfächer', ru: 'любимый предмет', gender: 'neutrum', collocation: 'ein Lieblingsfach haben', example: 'Hast du ein Lieblingsfach.' },
        { de: 'die Pause', plural: 'die Pausen', ru: 'перемена', gender: 'feminin', collocation: 'Pausen und Ferien', example: 'Pausen und Ferien sind das Beste.' },
        { de: 'die Ferien', ru: 'каникулы (только мн.ч.)', gender: 'feminin', collocation: 'Pausen und Ferien', example: 'Pausen und Ferien sind das Beste.' },
        { de: 'das Fach', plural: 'die Fächer', ru: 'предмет', gender: 'neutrum', collocation: 'Fächer wie Sprachen', example: 'Für Fächer wie Sprachen muss man einfach zu viel lernen.' },
        { de: 'die Sprache', plural: 'die Sprachen', ru: 'язык', gender: 'feminin', collocation: 'Fächer wie Sprachen', example: 'Für Fächer wie Sprachen muss man einfach zu viel lernen.' },
        { de: 'finden', ru: 'считать, находить', type: 'verb', forms: 'findet, fand, hat gefunden', example: 'Alles was mit Mathe zu tun hat finde ich toll.' },
        { de: 'früher', ru: 'раньше', type: 'adv', example: 'Früher hatten dir doch Geschichte und Englisch Spaß gemacht.' },
      ],
      practiceSentences: [
        { de: 'Die Schule macht mir Spaß.', ru: 'Мне нравится школа.', note: 'V2' },
        { de: 'Mathe ist mein Lieblingsfach.', ru: 'Математика — мой любимый предмет.', note: 'V2' },
        { de: 'Früher mochte ich Englisch.', ru: 'Раньше мне нравился английский.', note: 'V2' },
        { de: 'Man muss viel lernen.', ru: 'Нужно много учить.', note: 'модальный + инфинитив' },
        { de: 'Was hat das mit mir zu tun?', ru: 'Какое это имеет ко мне отношение?', note: 'конец с отделяемым выражением' },
      ],
      question: {
        de: 'Was ist jetzt das Lieblingsfach des Jungen?',
        ru: 'Какой сейчас любимый предмет у мальчика?',
        options: [
          { de: 'Geschichte und Englisch', ru: 'История и английский' },
          { de: 'Alles was mit Mathe zu tun hat', ru: 'Всё, что связано с математикой' },
          { de: 'Sprachen', ru: 'Языки' },
        ],
        correct: 1,
        explanation: 'Мальчик говорит: "alles was mit Mathe zu tun hat finde ich toll".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Hausaufgaben',
      type: 'диалог о домашнем задании',
      text: 'Ja ich habe vergessen was wir in Englisch für Hausaufgaben haben sollen wir das Lied lernen den Brief schreiben oder Grammatik machen weißt du das noch Also wir sollen die Wörter aus dem Lesetext lernen wir schreiben bald einen Test Okay danke Anna',
      sentenceTranslations: {
        'Ja ich habe vergessen was wir in Englisch für Hausaufgaben haben sollen wir das Lied lernen den Brief schreiben oder Grammatik machen weißt du das noch Also wir sollen die Wörter aus dem Lesetext lernen wir schreiben bald einen Test Okay danke Anna': {
          literal: 'Да я имею забыто что мы в английском для домашних-заданий имеем должны мы песню учить письмо писать или грамматику делать знаешь ты это ещё итак мы должны слова из текста-для-чтения учить мы пишем скоро один тест окей спасибо Анна',
          literary: '— Да, я забыл, что нам задали по английскому. Мы должны выучить песню, написать письмо или делать грамматику? Ты помнишь? — Мы должны выучить слова из текста для чтения. Мы скоро пишем тест. — Окей, спасибо, Анна.'
        },
      },
      vocabulary: [
        { de: 'das Lied', plural: 'die Lieder', ru: 'песня', gender: 'neutrum', collocation: 'das Lied lernen', example: 'Sollen wir das Lied lernen.' },
        { de: 'der Brief', plural: 'die Briefe', ru: 'письмо', gender: 'maskulin', collocation: 'den Brief schreiben', example: 'Den Brief schreiben oder Grammatik machen.' },
        { de: 'die Grammatik', ru: 'грамматика', gender: 'feminin', collocation: 'Grammatik machen', example: 'Den Brief schreiben oder Grammatik machen.' },
        { de: 'der Lesetext', plural: 'die Lesetexte', ru: 'текст для чтения', gender: 'maskulin', collocation: 'aus dem Lesetext', example: 'Wir sollen die Wörter aus dem Lesetext lernen.' },
        { de: 'der Test', plural: 'die Tests', ru: 'тест', gender: 'maskulin', collocation: 'einen Test schreiben', example: 'Wir schreiben bald einen Test.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Ich habe vergessen was wir in Englisch für Hausaufgaben haben.' },
        { de: 'sollen', ru: 'быть должным', type: 'verb', forms: 'soll, sollte, hat gesollt', example: 'Sollen wir das Lied lernen.' },
        { de: 'bald', ru: 'скоро', type: 'adv', example: 'Wir schreiben bald einen Test.' },
      ],
      practiceSentences: [
        { de: 'Ich habe die Aufgabe vergessen.', ru: 'Я забыл задание.', note: 'Perfekt с haben' },
        { de: 'Wir sollen Wörter lernen.', ru: 'Мы должны учить слова.', note: 'модальный + инфинитив' },
        { de: 'Schreibst du den Brief?', ru: 'Ты пишешь письмо?', note: 'V1 в вопросе' },
        { de: 'Wir machen die Grammatik.', ru: 'Мы делаем грамматику.', note: 'V2' },
        { de: 'Der Test ist nächste Woche.', ru: 'Тест на следующей неделе.', note: 'V2' },
      ],
      question: {
        de: 'Was sollen die Schüler in Englisch machen?',
        ru: 'Что должны делать ученики по английскому?',
        options: [
          { de: 'Ein Lied lernen', ru: 'Выучить песню' },
          { de: 'Die Wörter aus dem Lesetext lernen', ru: 'Выучить слова из текста для чтения' },
          { de: 'Einen Brief schreiben', ru: 'Написать письмо' },
        ],
        correct: 1,
        explanation: 'В ответе говорится: "wir sollen die Wörter aus dem Lesetext lernen".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Schulweg',
      type: 'диалог о транспорте',
      text: 'Ach der Bus hatte Verspätung und ich bin schon wieder zu spät in die Schule gekommen Fahr doch mit dem Fahrrad Darf ich nicht das ist zu gefährlich ich habe Glück ich wohne nicht weit und gehe immer zu Fuß',
      sentenceTranslations: {
        'Ach der Bus hatte Verspätung und ich bin schon wieder zu spät in die Schule gekommen Fahr doch mit dem Fahrrad Darf ich nicht das ist zu gefährlich ich habe Glück ich wohne nicht weit und gehe immer zu Fuß': {
          literal: 'Ах автобус имел опоздание и я есть уже снова слишком поздно в школу пришедший езжай же с велосипедом разрешено я не это есть слишком опасно я имею счастье я живу не далеко и хожу всегда к ноге',
          literary: '— Ах, автобус опоздал, и я снова пришёл в школу поздно. — Поезжай на велосипеде. — Мне нельзя, это слишком опасно. Мне повезло, я живу недалеко и всегда хожу пешком.'
        },
      },
      vocabulary: [
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'der Bus hatte Verspätung', example: 'Ach der Bus hatte Verspätung.' },
        { de: 'die Verspätung', plural: 'die Verspätungen', ru: 'опоздание', gender: 'feminin', collocation: 'Verspätung haben', example: 'Der Bus hatte Verspätung.' },
        { de: 'das Fahrrad', plural: 'die Fahrräder', ru: 'велосипед', gender: 'neutrum', collocation: 'mit dem Fahrrad fahren', example: 'Fahr doch mit dem Fahrrad.' },
        { de: 'das Glück', ru: 'счастье, удача', gender: 'neutrum', collocation: 'Glück haben', example: 'Ich habe Glück ich wohne nicht weit.' },
        { de: 'fahren', ru: 'ехать', type: 'verb', forms: 'fährt, fuhr, ist gefahren', example: 'Fahr doch mit dem Fahrrad.' },
        { de: 'dürfen', ru: 'иметь разрешение', type: 'verb', forms: 'darf, durfte, hat gedurft', example: 'Darf ich nicht.' },
        { de: 'gefährlich', ru: 'опасный', type: 'adj', example: 'Das ist zu gefährlich.' },
      ],
      practiceSentences: [
        { de: 'Der Zug hat Verspätung.', ru: 'Поезд опаздывает.', note: 'V2' },
        { de: 'Ich bin zu spät gekommen.', ru: 'Я опоздал.', note: 'Perfekt с sein' },
        { de: 'Ich fahre mit dem Bus.', ru: 'Я езжу на автобусе.', note: 'V2' },
        { de: 'Das darf ich nicht.', ru: 'Мне это нельзя.', note: 'модальный глагол' },
        { de: 'Ich gehe jeden Tag zu Fuß.', ru: 'Я каждый день хожу пешком.', note: 'V2' },
      ],
      question: {
        de: 'Wie kommt der dritte Sprecher zur Schule?',
        ru: 'Как третий говорящий добирается до школы?',
        options: [
          { de: 'Mit dem Bus', ru: 'На автобусе' },
          { de: 'Mit dem Fahrrad', ru: 'На велосипеде' },
          { de: 'Zu Fuß', ru: 'Пешком' },
        ],
        correct: 2,
        explanation: 'Третий говорящий сообщает: "ich wohne nicht weit und gehe immer zu Fuß".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Lehrerzimmer',
      type: 'диалог-ориентирование',
      text: 'Bitte wo ist das Lehrerzimmer hier Also da gehen Sie hier rechts dann die Treppe hoch nach links und da ist es gleich die erste Tür Zimmer 103 Im ersten oder zweiten Stock Gleich im ersten Stock Danke schön',
      sentenceTranslations: {
        'Bitte wo ist das Lehrerzimmer hier Also da gehen Sie hier rechts dann die Treppe hoch nach links und da ist es gleich die erste Tür Zimmer 103 Im ersten oder zweiten Stock Gleich im ersten Stock Danke schön': {
          literal: 'Пожалуйста где есть учительская здесь итак там идите Вы здесь направо затем лестницу вверх налево и там есть это сразу первая дверь комната 103 в первом или втором этаже сразу в первом этаже спасибо красиво',
          literary: '— Скажите, пожалуйста, где здесь учительская? — Идите направо, потом по лестнице наверх и налево. Там сразу первая дверь, кабинет 103. — На первом или втором этаже? — Сразу на первом. — Спасибо!'
        },
      },
      vocabulary: [
        { de: 'das Lehrerzimmer', plural: 'die Lehrerzimmer', ru: 'учительская', gender: 'neutrum', collocation: 'wo ist das Lehrerzimmer', example: 'Bitte wo ist das Lehrerzimmer hier.' },
        { de: 'die Treppe', plural: 'die Treppen', ru: 'лестница', gender: 'feminin', collocation: 'die Treppe hoch', example: 'Dann die Treppe hoch nach links.' },
        { de: 'die Tür', plural: 'die Türen', ru: 'дверь', gender: 'feminin', collocation: 'die erste Tür', example: 'Da ist es gleich die erste Tür Zimmer 103.' },
        { de: 'der Stock', plural: 'die Stockwerke', ru: 'этаж', gender: 'maskulin', collocation: 'im ersten Stock', example: 'Gleich im ersten Stock.' },
        { de: 'rechts', ru: 'направо', type: 'adv', example: 'Da gehen Sie hier rechts.' },
        { de: 'links', ru: 'налево', type: 'adv', example: 'Dann die Treppe hoch nach links.' },
        { de: 'gleich', ru: 'сразу', type: 'adv', example: 'Da ist es gleich die erste Tür.' },
      ],
      practiceSentences: [
        { de: 'Wo ist die Bibliothek?', ru: 'Где библиотека?', note: 'V2 после вопросительного слова' },
        { de: 'Gehen Sie geradeaus.', ru: 'Идите прямо.', note: 'вежливый императив' },
        { de: 'Die Treppe ist rechts.', ru: 'Лестница справа.', note: 'V2' },
        { de: 'Es ist im zweiten Stock.', ru: 'Это на втором этаже.', note: 'V2' },
        { de: 'Die erste Tür links.', ru: 'Первая дверь слева.', note: 'эллипсис (без глагола)' },
      ],
      question: {
        de: 'In welchem Stock ist das Lehrerzimmer?',
        ru: 'На каком этаже находится учительская?',
        options: [
          { de: 'Im Erdgeschoss', ru: 'На первом этаже (Erdgeschoss)' },
          { de: 'Im ersten Stock', ru: 'На втором этаже (1. Stock)' },
          { de: 'Im zweiten Stock', ru: 'На третьем этаже' },
        ],
        correct: 1,
        explanation: 'В ответе уточняется: "gleich im ersten Stock".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Schulausflug',
      type: 'диалог об экскурсии',
      text: 'Ich freue mich schon auf den Schulausflug letztes Jahr hatten wir ja ein Schloss besucht das war ziemlich langweilig aber auf morgen freue ich mich echt Ja ich auch wir wandern zum See aber nur wenn das Wetter gut ist bei schlechtem Wetter gehen wir ins Schwimmbad was ist dir lieber Also ich hoffe dass die Sonne scheint Genau dann machen wir auch ein Picknick am See',
      sentenceTranslations: {
        'Ich freue mich schon auf den Schulausflug letztes Jahr hatten wir ja ein Schloss besucht das war ziemlich langweilig aber auf morgen freue ich mich echt Ja ich auch wir wandern zum See aber nur wenn das Wetter gut ist bei schlechtem Wetter gehen wir ins Schwimmbad was ist dir lieber Also ich hoffe dass die Sonne scheint Genau dann machen wir auch ein Picknick am See': {
          literal: 'Я радую себя уже на школьную-экскурсию прошлый год имели мы же замок посещённым это было довольно скучно но на завтра радую я себя действительно да я тоже мы идём-пешком к озеру но только если погода хорошая есть при плохой погоде идём мы в бассейн что есть тебе милее итак я надеюсь что солнце светит точно тогда делаем мы тоже пикник у озера',
          literary: '— Я уже жду школьную экскурсию с нетерпением. В прошлом году мы посещали замок — это было довольно скучно. Но завтра я действительно жду с нетерпением. — Да, я тоже. Мы идём к озеру, но только если будет хорошая погода. При плохой погоде мы пойдём в бассейн. Что тебе больше нравится? — Я надеюсь, что будет солнечно. — Точно! Тогда мы ещё устроим пикник у озера.'
        },
      },
      vocabulary: [
        { de: 'der Schulausflug', plural: 'die Schulausflüge', ru: 'школьная экскурсия', gender: 'maskulin', collocation: 'auf den Schulausflug freuen', example: 'Ich freue mich schon auf den Schulausflug.' },
        { de: 'das Schloss', plural: 'die Schlösser', ru: 'замок', gender: 'neutrum', collocation: 'ein Schloss besuchen', example: 'Letztes Jahr hatten wir ja ein Schloss besucht.' },
        { de: 'der See', plural: 'die Seen', ru: 'озеро', gender: 'maskulin', collocation: 'zum See wandern', example: 'Wir wandern zum See.' },
        { de: 'das Schwimmbad', plural: 'die Schwimmbäder', ru: 'бассейн', gender: 'neutrum', collocation: 'ins Schwimmbad gehen', example: 'Bei schlechtem Wetter gehen wir ins Schwimmbad.' },
        { de: 'das Picknick', plural: 'die Picknicks', ru: 'пикник', gender: 'neutrum', collocation: 'ein Picknick machen', example: 'Dann machen wir auch ein Picknick am See.' },
        { de: 'sich freuen auf', ru: 'радоваться чему-то предстоящему', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Ich freue mich schon auf den Schulausflug.' },
        { de: 'wandern', ru: 'идти в поход', type: 'verb', forms: 'wandert, wanderte, ist gewandert', example: 'Wir wandern zum See.' },
        { de: 'hoffen', ru: 'надеяться', type: 'verb', forms: 'hofft, hoffte, hat gehofft', example: 'Ich hoffe dass die Sonne scheint.' },
        { de: 'scheinen', ru: 'светить', type: 'verb', forms: 'scheint, schien, hat geschienen', example: 'Ich hoffe dass die Sonne scheint.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Das war ziemlich langweilig.' },
      ],
      practiceSentences: [
        { de: 'Ich freue mich auf die Ferien.', ru: 'Я жду каникулы с нетерпением.', note: 'V2 с рефлексивом' },
        { de: 'Wir wandern morgen zum Berg.', ru: 'Завтра мы идём в поход к горе.', note: 'V2' },
        { de: 'Bei Regen bleiben wir zu Hause.', ru: 'При дожде мы останемся дома.', note: 'V2 с инверсией' },
        { de: 'Was machst du lieber?', ru: 'Что ты предпочитаешь делать?', note: 'V2 после вопросительного слова' },
        { de: 'Die Sonne scheint heute.', ru: 'Сегодня светит солнце.', note: 'V2' },
      ],
      question: {
        de: 'Wohin gehen die Schüler bei gutem Wetter?',
        ru: 'Куда идут ученики при хорошей погоде?',
        options: [
          { de: 'Ins Schloss', ru: 'В замок' },
          { de: 'Zum See', ru: 'К озеру' },
          { de: 'Ins Schwimmbad', ru: 'В бассейн' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "wir wandern zum See aber nur wenn das Wetter gut ist".'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Lena',
      type: 'интервью о Ganztagsschule',
      text: 'In unserer Sendung Meinungen haben wir heute Lena zu Gast guten Tag Lena Guten Tag und danke schön dass Sie mich eingeladen haben Lena erzähl uns etwas über deine Schule du gehst in eine Ganztagsschule in Berlin den ganzen Tag Schule ist das nicht ein bisschen zu viel Ja so denkt man am Anfang aber keine Angst das bedeutet nicht dass wir nur lernen wir haben nicht mehr Schulstunden als andere Schüler auch und natürlich lange Pausen Wie sieht denn nun so ein normaler Schultag aus Also nehmen wir zum Beispiel Montag da habe ich zuerst Mathe Leistungskurs dann Deutsch und Musik 20 Minuten große Pause danach Physik und dann Bio-Kurs nochmal 10 Minuten Pause und letzte Stunde Geschichte dann ist von eins bis zwei Mittagspause Wie ist das denn mit dem Mittagessen bringt jeder etwas von zu Hause mit Nein wir haben eine Schulküche da bekommen wir warmes Essen das schmeckt meistens ganz gut wer das nicht will kann etwas von zu Hause mitbringen oder vom Schulkiosk etwas kaufen Und am Nachmittag geht der Unterricht weiter Montag haben wir noch eine Doppelstunde Kunstunterricht am Dienstag Sport und Donnerstag ist Englisch Theater das macht Spaß Und wie macht ihr das mit den Hausaufgaben Meistens machen wir von drei bis fünf Uhr in kleinen Gruppen Hausaufgaben wenn wir Fragen haben hilft uns ein Lehrer Okay das ist ja gar nicht so schlecht danke schön Lena und jetzt geht es weiter mit Musik',
      sentenceTranslations: {
        'In unserer Sendung Meinungen haben wir heute Lena zu Gast guten Tag Lena Guten Tag und danke schön dass Sie mich eingeladen haben Lena erzähl uns etwas über deine Schule du gehst in eine Ganztagsschule in Berlin den ganzen Tag Schule ist das nicht ein bisschen zu viel Ja so denkt man am Anfang aber keine Angst das bedeutet nicht dass wir nur lernen wir haben nicht mehr Schulstunden als andere Schüler auch und natürlich lange Pausen Wie sieht denn nun so ein normaler Schultag aus Also nehmen wir zum Beispiel Montag da habe ich zuerst Mathe Leistungskurs dann Deutsch und Musik 20 Minuten große Pause danach Physik und dann Bio-Kurs nochmal 10 Minuten Pause und letzte Stunde Geschichte dann ist von eins bis zwei Mittagspause Wie ist das denn mit dem Mittagessen bringt jeder etwas von zu Hause mit Nein wir haben eine Schulküche da bekommen wir warmes Essen das schmeckt meistens ganz gut wer das nicht will kann etwas von zu Hause mitbringen oder vom Schulkiosk etwas kaufen Und am Nachmittag geht der Unterricht weiter Montag haben wir noch eine Doppelstunde Kunstunterricht am Dienstag Sport und Donnerstag ist Englisch Theater das macht Spaß Und wie macht ihr das mit den Hausaufgaben Meistens machen wir von drei bis fünf Uhr in kleinen Gruppen Hausaufgaben wenn wir Fragen haben hilft uns ein Lehrer Okay das ist ja gar nicht so schlecht danke schön Lena und jetzt geht es weiter mit Musik': {
          literal: 'В нашей передаче Мнения имеем мы сегодня Лену в гостях добрый день Лена добрый день и спасибо красиво что Вы меня пригласили имеете Лена расскажи нам что-то о твоей школе ты ходишь в школу-полного-дня в Берлине весь день школа есть это не немного слишком много да так думает человек в начале но никакого страха это означает не что мы только учим мы имеем не больше школьных-часов чем другие ученики тоже и конечно длинные перемены как выглядит же теперь так один нормальный школьный-день итак берём мы к примеру понедельник там имею я сначала математику углублённый-курс потом немецкий и музыку 20 минут большая перемена потом физику и затем био-курс ещё-раз 10 минут перемена и последний час историю затем есть от часа до двух обеденный-перерыв как есть это же с обедом приносит каждый что-то от дома с-собой нет мы имеем школьную-кухню там получаем мы тёплую еду это вкусит обычно совсем хорошо кто это не хочет может что-то от дома с-собой-принести или из школьного-киоска что-то купить и в послеобеденное-время идёт урок дальше понедельник имеем мы ещё сдвоенный-час урок-искусства во вторник спорт и четверг есть английский театр это делает удовольствие и как делаете вы это с домашними-заданиями обычно делаем мы от трёх до пяти часов в маленьких группах домашние-задания когда мы вопросы имеем помогает нам учитель окей это есть же совсем не так плохо спасибо красиво Лена и сейчас идёт оно дальше с музыкой',
          literary: '— В нашей передаче "Мнения" сегодня у нас в гостях Лена. Добрый день, Лена! — Добрый день и большое спасибо, что пригласили. — Расскажи нам о своей школе. Ты учишься в школе полного дня в Берлине. Целый день в школе — это не слишком? — Да, так думают вначале. Но не бойтесь, это не значит, что мы только учимся. У нас не больше уроков, чем у других, и конечно длинные перемены. — Как выглядит обычный школьный день? — Например, в понедельник: сначала углублённая математика, потом немецкий и музыка, 20 минут большая перемена, затем физика и биокурс, ещё 10 минут перемена и последний час — история. Потом с часа до двух обеденный перерыв. — А как с обедом, каждый приносит из дома? — Нет, у нас есть столовая, там горячая еда, обычно довольно вкусно. Кто не хочет — может принести из дома или купить в школьном киоске. — А после обеда уроки продолжаются? — В понедельник ещё сдвоенный урок искусства, во вторник спорт, а в четверг — английский театр, это весело! — А как с домашними заданиями? — Обычно мы с трёх до пяти делаем задания в малых группах, и если есть вопросы, помогает учитель. — Это совсем неплохо! Спасибо, Лена. А сейчас продолжаем с музыкой.'
        },
      },
      vocabulary: [
        { de: 'die Ganztagsschule', plural: 'die Ganztagsschulen', ru: 'школа полного дня', gender: 'feminin', collocation: 'in eine Ganztagsschule gehen', example: 'Du gehst in eine Ganztagsschule in Berlin.' },
        { de: 'die Schulstunde', plural: 'die Schulstunden', ru: 'школьный урок', gender: 'feminin', collocation: 'mehr Schulstunden haben', example: 'Wir haben nicht mehr Schulstunden als andere Schüler auch.' },
        { de: 'der Leistungskurs', plural: 'die Leistungskurse', ru: 'углублённый курс', gender: 'maskulin', collocation: 'Mathe Leistungskurs', example: 'Da habe ich zuerst Mathe Leistungskurs.' },
        { de: 'die Mittagspause', plural: 'die Mittagspausen', ru: 'обеденный перерыв', gender: 'feminin', collocation: 'von eins bis zwei Mittagspause', example: 'Dann ist von eins bis zwei Mittagspause.' },
        { de: 'die Schulküche', plural: 'die Schulküchen', ru: 'школьная столовая', gender: 'feminin', collocation: 'eine Schulküche haben', example: 'Wir haben eine Schulküche da bekommen wir warmes Essen.' },
        { de: 'der Schulkiosk', plural: 'die Schulkiosks', ru: 'школьный киоск', gender: 'maskulin', collocation: 'vom Schulkiosk kaufen', example: 'Vom Schulkiosk etwas kaufen.' },
        { de: 'die Doppelstunde', plural: 'die Doppelstunden', ru: 'сдвоенный урок', gender: 'feminin', collocation: 'eine Doppelstunde Kunst', example: 'Montag haben wir noch eine Doppelstunde Kunstunterricht.' },
        { de: 'der Unterricht', ru: 'урок, занятия', gender: 'maskulin', collocation: 'der Unterricht geht weiter', example: 'Am Nachmittag geht der Unterricht weiter.' },
        { de: 'die Gruppe', plural: 'die Gruppen', ru: 'группа', gender: 'feminin', collocation: 'in kleinen Gruppen', example: 'Meistens machen wir von drei bis fünf Uhr in kleinen Gruppen Hausaufgaben.' },
        { de: 'bedeuten', ru: 'означать', type: 'verb', forms: 'bedeutet, bedeutete, hat bedeutet', example: 'Das bedeutet nicht dass wir nur lernen.' },
        { de: 'einladen', ru: 'приглашать', type: 'verb', forms: 'lädt ein, lud ein, hat eingeladen', example: 'Danke schön dass Sie mich eingeladen haben.' },
        { de: 'schmecken', ru: 'быть вкусным', type: 'verb', forms: 'schmeckt, schmeckte, hat geschmeckt', example: 'Das schmeckt meistens ganz gut.' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Bringt jeder etwas von zu Hause mit.' },
        { de: 'weitergehen', ru: 'продолжаться', type: 'verb', forms: 'geht weiter, ging weiter, ist weitergegangen', example: 'Am Nachmittag geht der Unterricht weiter.' },
        { de: 'meistens', ru: 'обычно, чаще всего', type: 'adv', example: 'Das schmeckt meistens ganz gut.' },
      ],
      practiceSentences: [
        { de: 'Wir haben heute einen Gast.', ru: 'У нас сегодня гость.', note: 'V2' },
        { de: 'Die Schule beginnt um acht.', ru: 'Школа начинается в восемь.', note: 'V2' },
        { de: 'Das bedeutet viel Arbeit.', ru: 'Это означает много работы.', note: 'V2' },
        { de: 'Der Unterricht geht weiter.', ru: 'Урок продолжается.', note: 'отделяемая приставка' },
        { de: 'Ein Lehrer hilft uns dabei.', ru: 'Учитель помогает нам в этом.', note: 'V2' },
      ],
      question: {
        de: 'Hat Lena mehr Schulstunden als andere Schüler?',
        ru: 'У Лены больше школьных уроков, чем у других учеников?',
        options: [
          { de: 'Ja, sie hat viel mehr Stunden', ru: 'Да, у неё гораздо больше уроков' },
          { de: 'Nein, nicht mehr als andere Schüler', ru: 'Нет, не больше, чем у других' },
          { de: 'Ja, aber nur am Nachmittag', ru: 'Да, но только после обеда' },
        ],
        correct: 1,
        explanation: 'Лена поясняет: "wir haben nicht mehr Schulstunden als andere Schüler auch".'
      }
    },
  ],

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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören — Thema Schule):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Radio Lars).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'wenn-Nebensatz: глагол в конце — wenn du eine Hausaufgabe suchst',
    'weil-Nebensatz: глагол в конце — weil ich Grippe und 39 Fieber habe',
    'dass-Nebensatz: das bedeutet nicht dass wir nur lernen',
    'Отделяемые приставки: anfangen, abholen, weitermachen, anrufen, aufpassen, aussehen, mitbringen, weitergehen',
    'Модальные глаголы: können, müssen, sollen, dürfen, möchte, wollen',
    'Perfekt с haben: hat vergessen, hat gesammelt, hat geschickt, hat eingeladen',
    'Perfekt с sein: ist gekommen, ist gerannt, ist gewandert',
    'Рефлексивные глаголы: sich freuen auf, sich vorstellen',
    'es gibt + Akkusativ: es gibt tolle Preise, es gibt keine Pausenklingel',
    'mehr...als: wir haben nicht mehr Schulstunden als andere Schüler',
    'Сравнительная степень: lieber, besser',
    'mit + Dativ: mit dem Smartphone, mit dem Fahrrad',
  ],
};

LESSONS.push(LESSON_21);
