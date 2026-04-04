/* ═══════════════════════════════════════════════════════════
   Lesson 13 — Goethe Zertifikat A2 Hören (nur Teil 3)
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_13 = {
  id: 'lesson-13',
  number: 13,
  title: 'Goethe A2 Hören — Kurze Gespräche',
  subtitle: 'Fünf kurze Gespräche: Einkaufen, Essen, Schule, Schulweg, Orientierung',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-13',
  videoUrl: 'https://www.youtube.com/watch?v=vsYLsI4YZeM',

  /* ─── 5 мини-текстов (только Teil 3) ─── */
  texts: [
    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-1', teil: 3, aufgabe: 1,
      name: 'Bluse',
      type: 'диалог в магазине',
      text: 'Kann ich Ihnen helfen? Ich möchte die Bluse aus dem Schaufenster. Die da ohne Ärmel? Sie ist daneben. Der mit langem Arm. Welche Größe haben Sie? Es tut mir leid, aber die haben wir nur in M. In S haben wir noch eine mit kurzem Arm. Die ist auch sehr schön. Ach, M ist schon in Ordnung. Gut, dann hier bitte sehr.',
      sentenceTranslations: {
        'Kann ich Ihnen helfen?': { literal: 'Могу я Вам помочь?', literary: 'Могу я Вам помочь?' },
        'Ich möchte die Bluse aus dem Schaufenster.': { literal: 'Я хотел(а) бы блузку из витрины', literary: 'Я хотела бы блузку из витрины.' },
        'Die da ohne Ärmel?': { literal: 'Та там без рукавов?', literary: 'Ту, без рукавов?' },
        'Sie ist daneben.': { literal: 'Она есть рядом', literary: 'Она рядом.' },
        'Der mit langem Arm.': { literal: 'Та с длинным рукавом', literary: 'Та, с длинным рукавом.' },
        'Welche Größe haben Sie?': { literal: 'Какой размер имеете Вы?', literary: 'Какой у Вас размер?' },
        'Es tut mir leid, aber die haben wir nur in M.': { literal: 'Это делает мне жаль, но ту имеем мы только в М', literary: 'Мне жаль, но эта есть у нас только в размере М.' },
        'In S haben wir noch eine mit kurzem Arm.': { literal: 'В S имеем мы еще одну с коротким рукавом', literary: 'В размере S у нас есть еще одна с коротким рукавом.' },
        'Die ist auch sehr schön.': { literal: 'Та есть тоже очень красивая', literary: 'Она тоже очень красивая.' },
        'Ach, M ist schon in Ordnung.': { literal: 'Ах, М есть уже в порядке', literary: 'Ах, М вполне подойдет.' },
        'Gut, dann hier bitte sehr.': { literal: 'Хорошо, тогда здесь пожалуйста очень', literary: 'Хорошо, тогда вот, пожалуйста.' },
      },
      vocabulary: [
        { de: 'die Bluse', plural: 'die Blusen', ru: 'блузка', gender: 'feminin', collocation: 'eine Bluse kaufen', example: 'Ich möchte die Bluse aus dem Schaufenster.' },
        { de: 'das Schaufenster', plural: 'die Schaufenster', ru: 'витрина', gender: 'neutrum', collocation: 'aus dem Schaufenster', example: 'Ich möchte die Bluse aus dem Schaufenster.' },
        { de: 'der Ärmel', plural: 'die Ärmel', ru: 'рукав', gender: 'maskulin', collocation: 'ohne Ärmel', example: 'Die da ohne Ärmel?' },
        { de: 'die Größe', plural: 'die Größen', ru: 'размер', gender: 'feminin', collocation: 'welche Größe haben', example: 'Welche Größe haben Sie?' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Kann ich Ihnen helfen?' },
        { de: 'möchten', ru: 'хотеть (вежливо)', type: 'verb', forms: 'möchte, möchtest, möchte', example: 'Ich möchte die Bluse aus dem Schaufenster.' },
        { de: 'lang', ru: 'длинный', type: 'adj', example: 'Der mit langem Arm.' },
        { de: 'kurz', ru: 'короткий', type: 'adj', example: 'In S haben wir noch eine mit kurzem Arm.' },
        { de: 'schön', ru: 'красивый', type: 'adj', example: 'Die ist auch sehr schön.' },
        { de: 'daneben', ru: 'рядом', type: 'adv', example: 'Sie ist daneben.' },
      ],
      practiceSentences: [
        { de: 'Kann ich das Hemd anprobieren?', ru: 'Могу я примерить рубашку?', note: 'V2, модальный + инфинитив' },
        { de: 'Ich möchte eine Hose in Größe L.', ru: 'Я хотел бы брюки размера L.', note: 'V2, möchte' },
        { de: 'Die Jacke ist zu groß.', ru: 'Куртка слишком большая.', note: 'V2' },
        { de: 'Haben Sie das in Blau?', ru: 'У вас есть это в синем?', note: 'V2, вопрос' },
        { de: 'Der Rock mit Blumen gefällt mir.', ru: 'Юбка с цветами мне нравится.', note: 'V2, gefallen + Dativ' },
      ],
      question: {
        de: 'Welche Bluse kauft die Kundin am Ende?',
        ru: 'Какую блузку покупает покупательница в конце?',
        options: [
          { de: 'Die Bluse ohne Ärmel aus dem Schaufenster in M', ru: 'Блузку без рукавов из витрины в размере М' },
          { de: 'Die Bluse mit langem Arm', ru: 'Блузку с длинным рукавом' },
          { de: 'Die Bluse mit kurzem Arm in Größe S', ru: 'Блузку с коротким рукавом в размере S' },
        ],
        correct: 0,
        explanation: 'Покупательница соглашается на размер M блузки без рукавов: "Ach, M ist schon in Ordnung."'
      }
    },
    {
      id: 'text-2', teil: 3, aufgabe: 2,
      name: 'Essen',
      type: 'разговор',
      text: 'Was hast du gestern Abend Tolles gegessen? Ich wollte nur einen Salat haben. Aber Lena und Sarah wollten lieber Hamburger essen gehen. Im Restaurant gab es auch Hähnchen. Also habe ich das genommen. Es war okay. Ja, dann ist es ja gut.',
      sentenceTranslations: {
        'Was hast du gestern Abend Tolles gegessen?': { literal: 'Что имеешь ты вчера вечером классного съеденным?', literary: 'Что классного ты ел вчера вечером?' },
        'Ich wollte nur einen Salat haben.': { literal: 'Я хотел только один салат иметь', literary: 'Я хотел только салат.' },
        'Aber Lena und Sarah wollten lieber Hamburger essen gehen.': { literal: 'Но Лена и Сара хотели лучше гамбургеры есть идти', literary: 'Но Лена и Сара предпочли пойти есть гамбургеры.' },
        'Im Restaurant gab es auch Hähnchen.': { literal: 'В ресторане давало это также курицу', literary: 'В ресторане также была курица.' },
        'Also habe ich das genommen.': { literal: 'Итак имею я это взятым', literary: 'Поэтому я взял это.' },
        'Es war okay.': { literal: 'Это было окей', literary: 'Было нормально.' },
        'Ja, dann ist es ja gut.': { literal: 'Да, тогда есть это же хорошо', literary: 'Да, тогда все хорошо.' },
      },
      vocabulary: [
        { de: 'der Abend', plural: 'die Abende', ru: 'вечер', gender: 'maskulin', collocation: 'gestern Abend', example: 'Was hast du gestern Abend Tolles gegessen?' },
        { de: 'der Salat', plural: 'die Salate', ru: 'салат', gender: 'maskulin', collocation: 'einen Salat haben', example: 'Ich wollte nur einen Salat haben.' },
        { de: 'der Hamburger', plural: 'die Hamburger', ru: 'гамбургер', gender: 'maskulin', collocation: 'Hamburger essen', example: 'Lena und Sarah wollten lieber Hamburger essen gehen.' },
        { de: 'das Restaurant', plural: 'die Restaurants', ru: 'ресторан', gender: 'neutrum', collocation: 'im Restaurant', example: 'Im Restaurant gab es auch Hähnchen.' },
        { de: 'das Hähnchen', plural: 'die Hähnchen', ru: 'курица (блюдо)', gender: 'neutrum', collocation: 'Hähnchen nehmen', example: 'Im Restaurant gab es auch Hähnchen.' },
        { de: 'essen', ru: 'есть, кушать', type: 'verb', forms: 'isst, aß, hat gegessen', example: 'Was hast du gestern Abend Tolles gegessen?' },
        { de: 'nehmen', ru: 'брать, взять', type: 'verb', forms: 'nimmt, nahm, hat genommen', example: 'Also habe ich das genommen.' },
        { de: 'toll', ru: 'классный', type: 'adj', example: 'Was hast du gestern Abend Tolles gegessen?' },
        { de: 'lieber', ru: 'лучше, предпочтительнее', type: 'adv', example: 'Lena und Sarah wollten lieber Hamburger essen gehen.' },
      ],
      practiceSentences: [
        { de: 'Was hast du heute gegessen?', ru: 'Что ты ел сегодня?', note: 'Perfekt: hast + gegessen' },
        { de: 'Ich wollte Pizza bestellen.', ru: 'Я хотел заказать пиццу.', note: 'Präteritum модальный + инфинитив' },
        { de: 'Es gab keinen Fisch.', ru: 'Рыбы не было.', note: 'es gab (Präteritum от es gibt)' },
        { de: 'Wir gehen heute essen.', ru: 'Мы идем сегодня поесть.', note: 'V2, двойной инфинитив' },
        { de: 'Das Essen war lecker.', ru: 'Еда была вкусной.', note: 'V2, Präteritum от sein' },
      ],
      question: {
        de: 'Was hat die Person im Restaurant gegessen?',
        ru: 'Что ел человек в ресторане?',
        options: [
          { de: 'Einen Salat', ru: 'Салат' },
          { de: 'Einen Hamburger', ru: 'Гамбургер' },
          { de: 'Hähnchen', ru: 'Курицу' },
        ],
        correct: 2,
        explanation: 'В тексте говорится: "Im Restaurant gab es auch Hähnchen. Also habe ich das genommen."'
      }
    },
    {
      id: 'text-3', teil: 3, aufgabe: 3,
      name: 'Lieblingsfach',
      type: 'разговор',
      text: 'Was ist dein Lieblingsfach, Lisa? Ist es Kunst? Also der Kunstunterricht macht Spaß. Aber wir bekommen da so viele Hausaufgaben. Mein Lieblingsfach ist jetzt Mathematik. Und was ist mit Chemie? Beim letzten Test hattest du doch eine sehr gute Note. Ach, dieses Fach finde ich etwas langweilig.',
      sentenceTranslations: {
        'Was ist dein Lieblingsfach, Lisa?': { literal: 'Что есть твой любимый предмет, Лиза?', literary: 'Какой твой любимый предмет, Лиза?' },
        'Ist es Kunst?': { literal: 'Есть это искусство?', literary: 'Это искусство?' },
        'Also der Kunstunterricht macht Spaß.': { literal: 'Итак урок искусства делает веселье', literary: 'Ну, уроки искусства веселые.' },
        'Aber wir bekommen da so viele Hausaufgaben.': { literal: 'Но мы получаем там так много домашних заданий', literary: 'Но нам задают там так много домашки.' },
        'Mein Lieblingsfach ist jetzt Mathematik.': { literal: 'Мой любимый предмет есть сейчас математика', literary: 'Мой любимый предмет сейчас - математика.' },
        'Und was ist mit Chemie?': { literal: 'И что есть с химией?', literary: 'А что насчет химии?' },
        'Beim letzten Test hattest du doch eine sehr gute Note.': { literal: 'При последнем тесте имел ты же одну очень хорошую оценку', literary: 'На последнем тесте у тебя же была очень хорошая оценка.' },
        'Ach, dieses Fach finde ich etwas langweilig.': { literal: 'Ах, этот предмет нахожу я немного скучным', literary: 'Ах, этот предмет мне кажется немного скучным.' },
      },
      vocabulary: [
        { de: 'das Lieblingsfach', plural: 'die Lieblingsfächer', ru: 'любимый предмет', gender: 'neutrum', collocation: 'mein Lieblingsfach', example: 'Was ist dein Lieblingsfach, Lisa?' },
        { de: 'die Kunst', ru: 'искусство', gender: 'feminin', collocation: 'Kunst haben', example: 'Ist es Kunst?' },
        { de: 'der Kunstunterricht', ru: 'урок искусства', gender: 'maskulin', collocation: 'Kunstunterricht macht Spaß', example: 'Also der Kunstunterricht macht Spaß.' },
        { de: 'die Hausaufgabe', plural: 'die Hausaufgaben', ru: 'домашнее задание', gender: 'feminin', collocation: 'Hausaufgaben bekommen', example: 'Aber wir bekommen da so viele Hausaufgaben.' },
        { de: 'der Test', plural: 'die Tests', ru: 'тест', gender: 'maskulin', collocation: 'beim letzten Test', example: 'Beim letzten Test hattest du doch eine sehr gute Note.' },
        { de: 'die Note', plural: 'die Noten', ru: 'оценка', gender: 'feminin', collocation: 'eine gute Note', example: 'Beim letzten Test hattest du doch eine sehr gute Note.' },
        { de: 'das Fach', plural: 'die Fächer', ru: 'предмет', gender: 'neutrum', collocation: 'dieses Fach', example: 'Ach, dieses Fach finde ich etwas langweilig.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Aber wir bekommen da so viele Hausaufgaben.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Ach, dieses Fach finde ich etwas langweilig.' },
      ],
      practiceSentences: [
        { de: 'Mathe macht mir Spaß.', ru: 'Математика мне нравится.', note: 'V2, macht Spaß' },
        { de: 'Wir bekommen viele Aufgaben.', ru: 'Мы получаем много заданий.', note: 'V2, bekommen' },
        { de: 'Was ist mit Sport?', ru: 'А что насчет спорта?', note: 'V2, was ist mit' },
        { de: 'Diese Note finde ich gut.', ru: 'Эту оценку я считаю хорошей.', note: 'инверсия, V2' },
        { de: 'Du hattest eine Eins.', ru: 'У тебя была единица.', note: 'V2, Präteritum' },
      ],
      question: {
        de: 'Was ist Lisas Lieblingsfach?',
        ru: 'Какой любимый предмет у Лизы?',
        options: [
          { de: 'Kunst', ru: 'Искусство' },
          { de: 'Mathematik', ru: 'Математика' },
          { de: 'Chemie', ru: 'Химия' },
        ],
        correct: 1,
        explanation: 'Лиза прямо говорит: "Mein Lieblingsfach ist jetzt Mathematik."'
      }
    },
    {
      id: 'text-4', teil: 3, aufgabe: 4,
      name: 'Schulweg',
      type: 'разговор',
      text: 'Kevin, wie kommst du zur Schule? Ich würde gerne mit dem Fahrrad zur Schule fahren. Aber es ist leider zu weit. Die Bahn ist immer voll. Ich muss im Stehen fahren. Aber die Bahn ist auf jeden Fall besser als mit dem Auto zu fahren. Sie ist nämlich schneller.',
      sentenceTranslations: {
        'Kevin, wie kommst du zur Schule?': { literal: 'Кевин, как приходишь ты к школе?', literary: 'Кевин, как ты добираешься в школу?' },
        'Ich würde gerne mit dem Fahrrad zur Schule fahren.': { literal: 'Я бы охотно с велосипедом к школе ехать', literary: 'Я бы с удовольствием ездил в школу на велосипеде.' },
        'Aber es ist leider zu weit.': { literal: 'Но это есть к сожалению слишком далеко', literary: 'Но это, к сожалению, слишком далеко.' },
        'Die Bahn ist immer voll.': { literal: 'Поезд есть всегда полный', literary: 'Поезд всегда переполнен.' },
        'Ich muss im Stehen fahren.': { literal: 'Я должен в стоянии ехать', literary: 'Я должен ехать стоя.' },
        'Aber die Bahn ist auf jeden Fall besser als mit dem Auto zu fahren.': { literal: 'Но поезд есть в любом случае лучше чем с автомобилем ехать', literary: 'Но поезд в любом случае лучше, чем ехать на машине.' },
        'Sie ist nämlich schneller.': { literal: 'Она есть именно быстрее', literary: 'Она ведь быстрее.' },
      },
      vocabulary: [
        { de: 'die Schule', plural: 'die Schulen', ru: 'школа', gender: 'feminin', collocation: 'zur Schule kommen', example: 'Kevin, wie kommst du zur Schule?' },
        { de: 'das Fahrrad', plural: 'die Fahrräder', ru: 'велосипед', gender: 'neutrum', collocation: 'mit dem Fahrrad fahren', example: 'Ich würde gerne mit dem Fahrrad zur Schule fahren.' },
        { de: 'die Bahn', plural: 'die Bahnen', ru: 'поезд, электричка', gender: 'feminin', collocation: 'die Bahn nehmen', example: 'Die Bahn ist immer voll.' },
        { de: 'das Auto', plural: 'die Autos', ru: 'автомобиль', gender: 'neutrum', collocation: 'mit dem Auto fahren', example: 'Aber die Bahn ist auf jeden Fall besser als mit dem Auto zu fahren.' },
        { de: 'fahren', ru: 'ехать', type: 'verb', forms: 'fährt, fuhr, ist gefahren', example: 'Ich würde gerne mit dem Fahrrad zur Schule fahren.' },
        { de: 'gerne', ru: 'с удовольствием', type: 'adv', example: 'Ich würde gerne mit dem Fahrrad zur Schule fahren.' },
        { de: 'voll', ru: 'полный, переполненный', type: 'adj', example: 'Die Bahn ist immer voll.' },
        { de: 'weit', ru: 'далеко', type: 'adj', example: 'Aber es ist leider zu weit.' },
        { de: 'schnell', ru: 'быстрый', type: 'adj', example: 'Sie ist nämlich schneller.' },
        { de: 'leider', ru: 'к сожалению', type: 'adv', example: 'Aber es ist leider zu weit.' },
        { de: 'nämlich', ru: 'ведь, именно', type: 'adv', example: 'Sie ist nämlich schneller.' },
      ],
      practiceSentences: [
        { de: 'Ich fahre mit dem Bus.', ru: 'Я езжу на автобусе.', note: 'V2' },
        { de: 'Die U-Bahn ist schneller.', ru: 'Метро быстрее.', note: 'V2' },
        { de: 'Er würde gerne laufen.', ru: 'Он бы с удовольствием ходил пешком.', note: 'würde + инфинитив' },
        { de: 'Ich muss früh aufstehen.', ru: 'Я должен рано вставать.', note: 'модальный + инфинитив' },
        { de: 'Das Auto ist zu teuer.', ru: 'Машина слишком дорогая.', note: 'V2' },
      ],
      question: {
        de: 'Wie fährt Kevin zur Schule?',
        ru: 'Как Кевин добирается в школу?',
        options: [
          { de: 'Mit dem Fahrrad', ru: 'На велосипеде' },
          { de: 'Mit der Bahn', ru: 'На поезде/электричке' },
          { de: 'Mit dem Auto', ru: 'На машине' },
        ],
        correct: 1,
        explanation: 'Кевин хотел бы ездить на велосипеде, но это слишком далеко. Он ездит на поезде: "Die Bahn ist immer voll, ich muss im Stehen fahren."'
      }
    },
    {
      id: 'text-5', teil: 3, aufgabe: 5,
      name: 'Kino',
      type: 'диалог-ориентация',
      text: 'Entschuldigung, ist das Kino unten im zweiten Stock? Nein, der ist im dritten Stock. Im zweiten Stock ist der Sportraum. Das Restaurant ist auch im dritten Stock. Oder? Nein, da ist nur ein Café und eine Bar. Das Restaurant ist im ersten Stock. Okay, danke.',
      sentenceTranslations: {
        'Entschuldigung, ist das Kino unten im zweiten Stock?': { literal: 'Извинение, есть кино внизу на втором этаже?', literary: 'Извините, кинотеатр внизу на втором этаже?' },
        'Nein, der ist im dritten Stock.': { literal: 'Нет, он есть на третьем этаже', literary: 'Нет, он на третьем этаже.' },
        'Im zweiten Stock ist der Sportraum.': { literal: 'На втором этаже есть спортзал', literary: 'На втором этаже находится спортзал.' },
        'Das Restaurant ist auch im dritten Stock.': { literal: 'Ресторан есть тоже на третьем этаже', literary: 'Ресторан тоже на третьем этаже.' },
        'Oder?': { literal: 'Или?', literary: 'Разве?' },
        'Nein, da ist nur ein Café und eine Bar.': { literal: 'Нет, там есть только кафе и бар', literary: 'Нет, там только кафе и бар.' },
        'Das Restaurant ist im ersten Stock.': { literal: 'Ресторан есть на первом этаже', literary: 'Ресторан на первом этаже.' },
        'Okay, danke.': { literal: 'Окей, спасибо', literary: 'Хорошо, спасибо.' },
      },
      vocabulary: [
        { de: 'das Kino', plural: 'die Kinos', ru: 'кинотеатр', gender: 'neutrum', collocation: 'ins Kino gehen', example: 'Entschuldigung, ist das Kino unten im zweiten Stock?' },
        { de: 'der Stock', plural: 'die Stockwerke', ru: 'этаж', gender: 'maskulin', collocation: 'im zweiten Stock', example: 'Nein, der ist im dritten Stock.' },
        { de: 'der Sportraum', plural: 'die Sporträume', ru: 'спортзал', gender: 'maskulin', collocation: 'im Sportraum trainieren', example: 'Im zweiten Stock ist der Sportraum.' },
        { de: 'das Restaurant', plural: 'die Restaurants', ru: 'ресторан', gender: 'neutrum', collocation: 'im Restaurant essen', example: 'Das Restaurant ist auch im dritten Stock.' },
        { de: 'das Café', plural: 'die Cafés', ru: 'кафе', gender: 'neutrum', collocation: 'im Café sitzen', example: 'Nein, da ist nur ein Café und eine Bar.' },
        { de: 'die Bar', plural: 'die Bars', ru: 'бар', gender: 'feminin', collocation: 'in die Bar gehen', example: 'Nein, da ist nur ein Café und eine Bar.' },
        { de: 'unten', ru: 'внизу', type: 'adv', example: 'Entschuldigung, ist das Kino unten im zweiten Stock?' },
        { de: 'nur', ru: 'только', type: 'adv', example: 'Nein, da ist nur ein Café und eine Bar.' },
      ],
      practiceSentences: [
        { de: 'Das Café ist oben.', ru: 'Кафе наверху.', note: 'V2' },
        { de: 'Wo ist die Toilette?', ru: 'Где туалет?', note: 'V2, вопрос' },
        { de: 'Im ersten Stock ist ein Laden.', ru: 'На первом этаже магазин.', note: 'инверсия, V2' },
        { de: 'Da ist nur ein Aufzug.', ru: 'Там только лифт.', note: 'V2' },
        { de: 'Die Bar ist auch unten.', ru: 'Бар тоже внизу.', note: 'V2' },
      ],
      question: {
        de: 'Wo ist das Kino?',
        ru: 'Где находится кинотеатр?',
        options: [
          { de: 'Im ersten Stock', ru: 'На первом этаже' },
          { de: 'Im zweiten Stock', ru: 'На втором этаже' },
          { de: 'Im dritten Stock', ru: 'На третьем этаже' },
        ],
        correct: 2,
        explanation: 'Сотрудник отвечает: "Nein, der ist im dritten Stock."'
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
    title: 'ПЯТЬ РАЗГОВОРОВ',
    text: 'В магазине покупательница хочет {0} из витрины. Продавец спрашивает: какой {1}? К сожалению, блузка есть только в размере М. Вчера вечером друзья пошли в {2}. Один хотел только {3}, но в итоге взял {4}. У Лизы любимый предмет сейчас {5}, хотя {6} тоже делает удовольствие. Кевин ездит в школу на {7}, потому что на велосипеде слишком {8}. Кинотеатр находится на {9} этаже, а спортзал на втором.',
    blanks: [
      { answer: 'die Bluse', hint: 'блузка (die Bluse)' },
      { answer: 'die Größe', hint: 'размер (die Größe)' },
      { answer: 'das Restaurant', hint: 'ресторан (das Restaurant)' },
      { answer: 'den Salat', hint: 'салат (der Salat, Akk.)' },
      { answer: 'das Hähnchen', hint: 'курицу (das Hähnchen)' },
      { answer: 'Mathematik', hint: 'математика (die Mathematik)' },
      { answer: 'der Kunstunterricht', hint: 'урок искусства (der Kunstunterricht)' },
      { answer: 'der Bahn', hint: 'поезде (die Bahn, Dat.)' },
      { answer: 'weit', hint: 'далеко (weit)' },
      { answer: 'dritten', hint: 'третьем (dritt-)' },
    ],
  },

  /* ─── AI-промты ─── */
  prompts: {
    exercises: {
      instruction: 'Интерактивные упражнения работают прямо на сайте — выберите любое из списка ниже.',
      promptText: null,
    },
    original: {
      instruction: 'Оригинальная транскрипция аудио — 5 мини-текстов (только Teil 3).',
      promptText: null,
    },
    translation: {
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для таба "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören, Teil 3 — 5 коротких диалогов):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Text 1 (Bluse — диалог в магазине).',
    },

    /* ═══ VOCABULARY — только Teil 3 ═══ */
    vocabulary_t3: {
      instruction: 'Словарь Teil 3 — Kurze Gespräche (магазин, еда, школа, транспорт, ориентация)',
      promptText: "Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).\nПроведи урок по словарю Teil 3 экзамена Goethe A2 Horen — 5 коротких диалогов.\nТемы: Bluse (покупка блузки/размер/рукава), Essen (вечерний ужин в ресторане), Lieblingsfach (любимый предмет Лизы), Schulweg (как Кевин ездит в школу), Kino (ориентация в здании/этажи).\n\n{lessonText}\n\nСЛОВАРЬ:\n{vocabularyList}\n\nПРИНЦИП: ОТ ЗНАКОМСТВА К ИСПОЛЬЗОВАНИЮ (5 этапов)\nЭтап 1: Знакомство (покажи по 5 слов — ученик только читает)\nЭтап 2: Викторина A/B/C (6 вопросов, DE<->RU)\nЭтап 3: Перевод (ученик вспоминает сам, 8 слов, артикли обязательны!)\nЭтап 4: Контекст (вставь слово в предложение, 5 заданий из Teil 3)\nЭтап 5: Мини-пересказ (3 предложения о ситуациях Teil 3)\n\nСТАРТ: «Привет! Учим слова из Teil 3 — 5 коротких диалогов: покупка блузки, ужин в ресторане, любимый предмет в школе, дорога в школу и ориентация в здании.»\n\nЭТАП 1 — покажи 3 группы:\nГруппа 1 (магазин/еда): die Bluse, das Schaufenster, der Armel, das Hahnchen, das Restaurant\nГруппа 2 (школа): das Lieblingsfach, die Hausaufgabe, die Note, der Test, langweilig\nГруппа 3 (транспорт/город): die Bahn, das Fahrrad, der Stock, das Kino, der Sportraum\n\nЭтапы 2-5 — только по словам и ситуациям из Teil 3.\nКонтекст: «Ich mochte die Bluse aus dem Schaufenster», «Im Restaurant gab es Hahnchen», «Die Bahn ist immer voll» и т.д.\n\nПРАВИЛА:\n- Сначала покажи — потом спрашивай. Этап 1 = только показ.\n- Темп быстрый. Макс 2 строки на правильный ответ, 3 на ошибку.\n- Артикли обязательны! «Bluse» без артикля = неправильно.\n- Факты: «Schaufenster = Schau + Fenster», «Lieblingsfach = Liebling + Fach»\n- Команды: подсказка / пропустить / стоп / повторить",
    },

    /* ═══ DIALOGUE — только Teil 3 ═══ */
    dialogue_t3: {
      instruction: 'Диалог-тренажёр Teil 3 — магазин, еда, школа, транспорт, ориентация',
      promptText: "Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).\nПроведи разговорную тренировку по темам Teil 3: покупка одежды (Bluse/размер), еда в ресторане (Essen/Hahnchen), школьные предметы (Lieblingsfach), дорога в школу (Schulweg/Bahn), ориентация в здании (Kino/Stock).\nЦель — РАЗГОВОРИТЬ ученика. Не пугать, а вдохновлять.\n\n{lessonText}\n\nСЛОВАРЬ:\n{vocabularyList}\n\n4 ФАЗЫ (от повторения к свободе):\n\nФАЗА 1 — ПОВТОРЕНИЕ (3 фразы из Teil 3):\n1. \"Ich mochte die Bluse aus dem Schaufenster.\" (Я хочу блузку из витрины)\n2. \"Im Restaurant gab es auch Hahnchen.\" (В ресторане была курица)\n3. \"Mein Lieblingsfach ist jetzt Mathematik.\" (Мой любимый предмет — математика)\n\nФАЗА 2 — ВИКТОРИНА (3 вопроса):\n1. Du bist im Geschaft. Was mochtest du? A/B/C\n2. Was hast du gestern Abend gegessen? A/B/C\n3. Was ist dein Lieblingsfach? A/B/C\n\nФАЗА 3 — ДОСТРОЙКА (3 начала):\n1. «Im Geschaft mochte ich ... kaufen.» (покупки)\n2. «Gestern Abend habe ich ... gegessen.» (еда)\n3. «Zur Schule fahre ich mit...» (транспорт)\n\nФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ (3 вопроса):\n1. «Du bist in einem Geschaft. Was kaufst du? Welche Grosse?»\n2. «Was isst du am liebsten? Gehst du oft ins Restaurant?»\n3. «Wie kommst du zur Arbeit/Schule? Mit der Bahn oder dem Auto?»\n\nПРАВИЛА:\n- Объяснения на русском, вопросы на немецком.\n- Фаза 1->2->3->4 постепенно. Не бросай в воду!\n- Молчит -> предлагай варианты или начало фразы.\n- Макс 1 исправление за ответ. Хвали каждую попытку.\n- Юмор приветствуется! Живой разговор > план.\n- Команды: подсказка / пропустить / стоп",
    },

    /* ═══ SOCRATIC — только Teil 3 ═══ */
    socratic_t3: {
      instruction: 'Сократовский разбор Teil 3 — mit+Dativ, Konjunktiv II, Ordinalzahlen',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, A2. Ты НИЧЕГО не объясняешь напрямую — только вопросы.

{lessonText}

ГРАММАТИЧЕСКИЙ ФОКУС Teil 3:
- mit + Dativ (mit langem Arm, mit kurzem Arm, mit dem Fahrrad)
- Konjunktiv II (ich wurde gerne ... fahren)
- Ordinalzahlen + Dativ (im zweiten Stock, im dritten Stock)

МЕТОД: Сократовский эленхус. Вопрос-ответ, поиск противоречий, примеры из текста, русские параллели.

ПРЕДЛОЖЕНИЕ 1: «Ich mochte die Bluse aus dem Schaufenster.» (Text 1)
Цель: aus + Dativ
Цепочка:
-> «Какой предлог стоит перед Schaufenster? Что он означает?» -> «aus = из»
-> «der Schaufenster? die? das?» -> «das Schaufenster»
-> «Но тут написано "dem". Почему не "das"?»
-> «aus всегда требует Dativ! das -> dem.»
-> Вывод: aus = всегда Dativ. das -> dem.

ПРЕДЛОЖЕНИЕ 2: «Ich wurde gerne mit dem Fahrrad zur Schule fahren.» (Text 4)
Цель: Konjunktiv II (wurde + инфинитив) + mit + Dativ
Цепочка:
-> «Кевин говорит "wurde ... fahren". Он ездит на велосипеде или нет?»
-> «Нет! Он ХОТЕЛ БЫ. "wurde" = "бы". Это Konjunktiv II!»
-> «"mit dem Fahrrad" — почему "dem"?» -> «mit = всегда Dativ!»
-> Вывод: wurde + инфинитив = вежливое желание. mit = Dativ.

ПРАВИЛА:
- Все на русском. Немецкий — только примеры из текста.
- 1-2 вопроса за раз. Жди ответа.
- Ошибся -> уточняющий вопрос, не исправляй.
- После 3 попыток -> маленькая подсказка.
- После каждого предложения: «Сформулируй правило своими словами.»
- Команды: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Скажи что разбираете грамматику Teil 3 (магазин, еда, школа, транспорт) методом вопросов.
Покажи первое предложение и задай первый вопрос.`,
    },

    /* ═══ SYNONYMS — только Teil 3 ═══ */
    synonyms_t3: {
      instruction: 'Синонимы Teil 3 — замена глаголов, перефразирование, weil',
      promptText: "Ты — преподаватель немецкого для русскоязычного ученика (A2).\nПроведи упражнение «Синонимизация» в формате ВИКТОРИНЫ A/B/C по текстам Teil 3.\nТемы: покупка блузки, ужин в ресторане, любимый предмет, дорога в школу, ориентация.\n\n{lessonText}\n\nЦЕЛЬ: Ученик ВЫБИРАЕТ синоним из вариантов (не придумывает сам).\nПосле ответа — объяснение + ключевая пара.\n\n4 ВОПРОСА:\n\nВОПРОС 1 — ЗАМЕНА ГЛАГОЛА (Text 1):\nОригинал: «Ich mochte die Bluse aus dem Schaufenster.»\nПеревод: Я хотела бы блузку из витрины.\n  A) Ich hatte gern die Bluse aus dem Schaufenster. (hatte gern = хотела бы)\n  B) Ich kaufe die Bluse aus dem Schaufenster. (kaufen = купить — слишком конкретно!)\n  C) Ich brauche die Bluse aus dem Schaufenster. (brauchen = нуждаться — другой смысл)\nОтвет: A. «mochte» = «hatte gern» — оба выражают вежливое желание.\n\nВОПРОС 2 — ПЕРЕФРАЗИРОВАНИЕ (Text 2):\nОригинал: «Im Restaurant gab es auch Hahnchen.»\nПеревод: В ресторане была также курица.\n  A) Das Restaurant hatte auch Hahnchen auf der Karte. (было в меню)\n  B) Im Restaurant hat man Hahnchen gekocht. (готовили — другое!)\n  C) Das Restaurant verkauft Hahnchen. (продает — это магазин!)\nОтвет: A. «es gab» = «auf der Karte haben». Оба — «было в наличии».\n\nВОПРОС 3 — ДВА ПРЕДЛОЖЕНИЯ -> ОДНО С WEIL (Text 4):\nОригинал: «Kevin fahrt nicht mit dem Fahrrad. Es ist zu weit.»\n  A) Kevin fahrt nicht mit dem Fahrrad, weil es zu weit ist.\n  B) Kevin fahrt nicht mit dem Fahrrad, aber es ist zu weit. (aber = но — не причина!)\n  C) Kevin fahrt nicht mit dem Fahrrad, obwohl es zu weit ist. (obwohl = хотя — противоположное!)\nОтвет: A. weil = потому что. После weil глагол В КОНЕЦ: weit IST.\n\nВОПРОС 4 — СИНОНИМ ВЫРАЖЕНИЯ (Text 3):\nОригинал: «Der Kunstunterricht macht Spass.»\nПеревод: Уроки искусства веселые.\n  A) Der Kunstunterricht gefallt mir. (мне нравится)\n  B) Der Kunstunterricht ist schwer. (schwer = сложный — другое!)\n  C) Der Kunstunterricht ist langweilig. (скучный — противоположное!)\nОтвет: A. «Spass machen» = «gefallen». Оба — «нравиться».\n\nИТОГ: mochte = hatte gern, es gab = auf der Karte haben, weil + глагол в конец, Spass machen = gefallen.\n\nПРАВИЛА:\n- Один вопрос за раз. Жди ответ (A, B, C).\n- После ответа — объяснение + пара синонимов.\n- В конце — список пар.\n- Команды: подсказка / пропустить / стоп\n\nСТАРТ: «Привет! Викторина по синонимам из Teil 3 — магазин, ресторан, школа, транспорт. Я покажу предложение и 3 варианта. Выбери, какой означает то же самое.»",
    },

    /* ═══ LEFEBVRE — только Teil 3 ═══ */
    lefebvre_t3: {
      instruction: 'Пересказ по Лефевру Teil 3 — 5 коротких диалогов',
      promptText: "Ты — преподаватель немецкого (A2). Проведи рефлексивный пересказ текстов Teil 3 по методу Лефевра.\nTeil 3 — 5 коротких диалогов: Bluse (покупка блузки/размер/рукава), Essen (ужин в ресторане/курица), Lieblingsfach (любимый предмет Лизы — математика), Schulweg (Кевин ездит на поезде), Kino (кинотеатр на третьем этаже).\n\n{lessonText}\n\nМЕТОД ЛЕФЕВРА:\nУченик строит КАРТУ текста (КТО? ЧТО? ГДЕ? ЗАЧЕМ?), потом пересказывает по карте.\nПересказ = реконструкция, не вспоминание.\n\nГЛАВНОЕ: СНАЧАЛА ПОКАЖИ ОБРАЗЕЦ!\n\nСТУПЕНЬ 1 — ОБРАЗЕЦ (ты показываешь на Text 1 — Bluse):\n«Смотри, как я строю карту:\n  КТО? -> Покупательница в магазине\n  ЧТО ХОЧЕТ? -> Bluse aus dem Schaufenster (без рукавов)\n  ПРОБЛЕМА? -> есть только в размере M\n  ИТОГ? -> берет размер M\nПересказ: \"Die Kundin mochte eine Bluse ohne Armel. Es gibt sie nur in M. Sie nimmt die Bluse in M.\"\nВидишь? Карта -> 3 предложения. Просто!»\n\nСТУПЕНЬ 2 — ВМЕСТЕ (Text 2 — Essen):\n«Теперь вместе. Я начну карту:\n  КТО? -> Два друга\n  ЧТО ХОТЕЛ? -> nur einen Salat\n  ЧТО СЛУЧИЛОСЬ? -> ... (подскажи: друзья хотели гамбургеры)\n  ЧТО ВЗЯЛ? -> ... (подскажи: Hahnchen)\nПерескажи 2-3 предложениями. Начни: \"Er wollte nur einen Salat...\"»\n\nСТУПЕНЬ 3 — САМОСТОЯТЕЛЬНО (Text 3, 4 или 5 — на выбор ученика):\n«Теперь сам! Выбери текст: Lieblingsfach (школа), Schulweg (транспорт) или Kino (ориентация).\nПострой карту: КТО? ЧТО? ГДЕ? Перескажи 2-3 предложениями.»\n\nСТУПЕНЬ 4 — ОБЩИЙ ПЕРЕСКАЗ Teil 3:\n«Встань наблюдателем сверху: что за 5 диалогов ты слышал?\nПерескажи одним абзацем (3-4 предложения): магазин -> ресторан -> школа -> транспорт -> здание.»\n\nПРАВИЛА:\n- Все на русском. Немецкий — примеры и пересказ.\n- СНАЧАЛА ПОКАЖИ — потом проси!\n- Молчит -> дай НАЧАЛО предложения.\n- Макс 1-2 исправления за пересказ. Принимай если СМЫСЛ верен.\n- Команды: подсказка / пропустить / стоп",
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'mit + Dativ: mit langem Arm, mit kurzem Arm, mit dem Fahrrad',
    'aus + Dativ: aus dem Schaufenster',
    'Konjunktiv II: ich würde gerne ... fahren',
    'Ordinalzahlen + Dativ: im ersten/zweiten/dritten Stock',
    'Perfekt: hast gegessen, habe genommen',
    'es gibt / es gab: Im Restaurant gab es Hähnchen',
    'Vergleich: besser als mit dem Auto zu fahren',
    'Spaß machen: Der Kunstunterricht macht Spaß',
  ],
};

LESSONS.push(LESSON_13);
