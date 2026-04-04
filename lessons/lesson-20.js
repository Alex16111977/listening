/* ═══════════════════════════════════════════════════════════
   Lesson 20 — Goethe Zertifikat A2 Hören — Jugendliche
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_20 = {
  id: 'lesson-20',
  number: 20,
  title: 'Goethe A2 Hören — Jugendliche',
  subtitle: 'Fremdsprachen, Taschengeld, Extremsport, Kochkurs und Freizeit im Jugendzentrum',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-20',
  videoUrl: 'https://www.youtube.com/watch?v=CI6DucvPTEg',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Volker',
      type: 'сообщение',
      text: 'Hallo Bettina, ich bin\'s Volker. Ich habe mir überlegt, dass es gut wäre, wenn ich noch eine Fremdsprache lernen würde. Ich kann schon Englisch und Französisch, wie du ja auch. Ich möchte nun gern auf Spanisch lernen. Diese Sprache fasziniert mich. Wie wäre es, wenn wir zusammen lernen würden? Dann macht es auch mehr Spaß. Ruf mich doch mal an.',
      sentenceTranslations: {
        'Hallo Bettina, ich bin\'s Volker.': { literal: 'Привет Беттина, я это Волкер', literary: 'Привет, Беттина, это я, Волкер.' },
        'Ich habe mir überlegt, dass es gut wäre, wenn ich noch eine Fremdsprache lernen würde.': { literal: 'Я себе обдумал, что это хорошо было бы, если я ещё один иностранный язык учить бы', literary: 'Я подумал, что было бы хорошо выучить ещё один иностранный язык.' },
        'Ich kann schon Englisch und Französisch, wie du ja auch.': { literal: 'Я могу уже английский и французский, как ты же тоже', literary: 'Я уже знаю английский и французский, как и ты.' },
        'Ich möchte nun gern auf Spanisch lernen.': { literal: 'Я хотел бы теперь охотно испанский учить', literary: 'Теперь я хотел бы выучить испанский.' },
        'Diese Sprache fasziniert mich.': { literal: 'Этот язык очаровывает меня', literary: 'Этот язык меня восхищает.' },
        'Wie wäre es, wenn wir zusammen lernen würden?': { literal: 'Как было бы это, если мы вместе учить бы', literary: 'Как насчёт того, чтобы учиться вместе?' },
        'Dann macht es auch mehr Spaß.': { literal: 'Тогда делает это также больше удовольствия', literary: 'Тогда это будет веселее.' },
        'Ruf mich doch mal an.': { literal: 'Позвони мне же разок', literary: 'Позвони мне.' },
      },
      vocabulary: [
        { de: 'die Fremdsprache', plural: 'die Fremdsprachen', ru: 'иностранный язык', gender: 'feminin', collocation: 'eine Fremdsprache lernen', example: 'Ich habe mir überlegt, dass es gut wäre, wenn ich noch eine Fremdsprache lernen würde.' },
        { de: 'die Sprache', plural: 'die Sprachen', ru: 'язык', gender: 'feminin', collocation: 'diese Sprache fasziniert mich', example: 'Diese Sprache fasziniert mich.' },
        { de: 'der Spaß', ru: 'удовольствие', gender: 'maskulin', collocation: 'mehr Spaß machen', example: 'Dann macht es auch mehr Spaß.' },
        { de: 'sich überlegen', ru: 'обдумывать', type: 'verb', forms: 'überlege mir, überlegte mir, hat sich überlegt', example: 'Ich habe mir überlegt, dass es gut wäre.' },
        { de: 'faszinieren', ru: 'восхищать', type: 'verb', forms: 'fasziniert, faszinierte, hat fasziniert', example: 'Diese Sprache fasziniert mich.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'rufe an, rief an, hat angerufen', example: 'Ruf mich doch mal an.' },
      ],
      practiceSentences: [
        { de: 'Ich lerne Deutsch.', ru: 'Я учу немецкий.', note: 'V2' },
        { de: 'Er ruft seine Mutter an.', ru: 'Он звонит своей маме.', note: 'отделяемая приставка' },
        { de: 'Wir lernen zusammen Spanisch.', ru: 'Мы учим испанский вместе.', note: 'V2' },
        { de: 'Das macht mir Spaß.', ru: 'Это доставляет мне удовольствие.', note: 'V2' },
        { de: 'Kannst du Englisch?', ru: 'Ты знаешь английский?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Was möchte Volker lernen?',
        ru: 'Что хочет изучать Волкер?',
        options: [
          { de: 'Englisch', ru: 'Английский' },
          { de: 'Französisch', ru: 'Французский' },
          { de: 'Spanisch', ru: 'Испанский' },
        ],
        correct: 2,
        explanation: 'Волкер говорит: "Ich möchte nun gern auf Spanisch lernen" — он уже знает английский и французский.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Sven',
      type: 'сообщение',
      text: 'Hallo Sven, du, ich habe dein kleines Problem. Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche. Ich finde, das ist zu wenig. 15 Euro sollte ich wenigstens bekommen. Du bekommst doch 20 Euro in der Woche, oder? Ich muss mal mit meinen Eltern reden.',
      sentenceTranslations: {
        'Hallo Sven, du, ich habe dein kleines Problem.': { literal: 'Привет Свен, ты, я имею одну маленькую проблему', literary: 'Привет, Свен, у меня небольшая проблема.' },
        'Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche.': { literal: 'Я думаю, что я слишком мало карманных денег получаю, а именно только 10 евро в неделю', literary: 'Я думаю, что получаю слишком мало карманных денег — всего 10 евро в неделю.' },
        'Ich finde, das ist zu wenig.': { literal: 'Я нахожу, это есть слишком мало', literary: 'Я считаю, это слишком мало.' },
        '15 Euro sollte ich wenigstens bekommen.': { literal: '15 евро должен я по меньшей мере получать', literary: 'Я должен получать хотя бы 15 евро.' },
        'Du bekommst doch 20 Euro in der Woche, oder?': { literal: 'Ты получаешь же 20 евро в неделю, или?', literary: 'Ты же получаешь 20 евро в неделю, правда?' },
        'Ich muss mal mit meinen Eltern reden.': { literal: 'Я должен разок с моими родителями поговорить', literary: 'Мне нужно поговорить с родителями.' },
      },
      vocabulary: [
        { de: 'das Taschengeld', ru: 'карманные деньги', gender: 'neutrum', collocation: 'Taschengeld bekommen', example: 'Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche.' },
        { de: 'das Problem', plural: 'die Probleme', ru: 'проблема', gender: 'neutrum', collocation: 'ein kleines Problem haben', example: 'Hallo Sven, du, ich habe dein kleines Problem.' },
        { de: 'die Woche', plural: 'die Wochen', ru: 'неделя', gender: 'feminin', collocation: 'in der Woche', example: 'Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche.' },
        { de: 'die Eltern', ru: 'родители (только мн.ч.)', gender: 'feminin', collocation: 'mit meinen Eltern reden', example: 'Ich muss mal mit meinen Eltern reden.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekomme, bekam, hat bekommen', example: 'Du bekommst doch 20 Euro in der Woche, oder?' },
        { de: 'glauben', ru: 'думать, полагать', type: 'verb', forms: 'glaube, glaubte, hat geglaubt', example: 'Ich glaube, dass ich zu wenig Taschengeld bekomme.' },
        { de: 'reden', ru: 'говорить, беседовать', type: 'verb', forms: 'rede, redete, hat geredet', example: 'Ich muss mal mit meinen Eltern reden.' },
        { de: 'wenigstens', ru: 'по крайней мере', type: 'adv', example: '15 Euro sollte ich wenigstens bekommen.' },
      ],
      practiceSentences: [
        { de: 'Ich bekomme 20 Euro.', ru: 'Я получаю 20 евро.', note: 'V2' },
        { de: 'Das ist zu wenig Geld.', ru: 'Это слишком мало денег.', note: 'V2' },
        { de: 'Er muss mit dem Lehrer reden.', ru: 'Он должен поговорить с учителем.', note: 'модальный + инфинитив' },
        { de: 'Wir finden das gut.', ru: 'Мы считаем это хорошим.', note: 'V2' },
        { de: 'Sie sollte mehr bekommen.', ru: 'Она должна получать больше.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Wie viel Taschengeld bekommt der Sprecher?',
        ru: 'Сколько карманных денег получает говорящий?',
        options: [
          { de: '10 Euro', ru: '10 евро' },
          { de: '15 Euro', ru: '15 евро' },
          { de: '20 Euro', ru: '20 евро' },
        ],
        correct: 0,
        explanation: 'Говорящий прямо указывает: "nämlich nur 10 Euro in der Woche".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Tim',
      type: 'сообщение',
      text: 'Hey Tim, hast du gewusst, dass Stefan Extremsport macht? Er macht Bungee-Jumping. Das finde ich spitze! Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll. Vielleicht mache ich Eisklettern oder Fallschirmspringen. Nein, Fallschirmspringen ist mir zu gefährlich. Ich mache lieber Eisklettern.',
      sentenceTranslations: {
        'Hey Tim, hast du gewusst, dass Stefan Extremsport macht?': { literal: 'Эй Тим, имел ты знание, что Штефан экстремальный спорт делает?', literary: 'Эй, Тим, ты знал, что Штефан занимается экстремальным спортом?' },
        'Er macht Bungee-Jumping.': { literal: 'Он делает банджи-джампинг', literary: 'Он занимается банджи-джампингом.' },
        'Das finde ich spitze!': { literal: 'Это нахожу я классным!', literary: 'Это классно!' },
        'Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll.': { literal: 'Я хотел бы тоже экстремальный спорт делать, но я знаю не, какой вид спорта я выбрать должен', literary: 'Я тоже хочу заниматься экстремальным спортом, но не знаю, какой вид спорта выбрать.' },
        'Vielleicht mache ich Eisklettern oder Fallschirmspringen.': { literal: 'Может быть делаю я ледолазание или прыжки с парашютом', literary: 'Может, займусь ледолазанием или прыжками с парашютом.' },
        'Nein, Fallschirmspringen ist mir zu gefährlich.': { literal: 'Нет, прыжки с парашютом есть мне слишком опасно', literary: 'Нет, прыжки с парашютом слишком опасны для меня.' },
        'Ich mache lieber Eisklettern.': { literal: 'Я делаю лучше ледолазание', literary: 'Лучше займусь ледолазанием.' },
      },
      vocabulary: [
        { de: 'der Extremsport', ru: 'экстремальный спорт', gender: 'maskulin', collocation: 'Extremsport machen', example: 'Hey Tim, hast du gewusst, dass Stefan Extremsport macht?' },
        { de: 'die Sportart', plural: 'die Sportarten', ru: 'вид спорта', gender: 'feminin', collocation: 'welche Sportart wählen', example: 'Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll.' },
        { de: 'das Eisklettern', ru: 'ледолазание', gender: 'neutrum', collocation: 'Eisklettern machen', example: 'Ich mache lieber Eisklettern.' },
        { de: 'das Fallschirmspringen', ru: 'прыжки с парашютом', gender: 'neutrum', collocation: 'Fallschirmspringen ist gefährlich', example: 'Nein, Fallschirmspringen ist mir zu gefährlich.' },
        { de: 'wählen', ru: 'выбирать', type: 'verb', forms: 'wähle, wählte, hat gewählt', example: 'Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll.' },
        { de: 'spitze', ru: 'классный (разг.)', type: 'adj', example: 'Das finde ich spitze!' },
        { de: 'gefährlich', ru: 'опасный', type: 'adj', example: 'Nein, Fallschirmspringen ist mir zu gefährlich.' },
      ],
      practiceSentences: [
        { de: 'Er macht Sport.', ru: 'Он занимается спортом.', note: 'V2' },
        { de: 'Das finde ich toll!', ru: 'Я нахожу это классным!', note: 'V2' },
        { de: 'Ich weiß nicht, was ich mache.', ru: 'Я не знаю, что делать.', note: 'конец в придаточном' },
        { de: 'Sie soll Tennis spielen.', ru: 'Она должна играть в теннис.', note: 'модальный + инфинитив' },
        { de: 'Wir machen lieber Yoga.', ru: 'Мы лучше займёмся йогой.', note: 'V2' },
      ],
      question: {
        de: 'Welchen Extremsport will der Sprecher machen?',
        ru: 'Каким экстремальным спортом хочет заниматься говорящий?',
        options: [
          { de: 'Bungee-Jumping', ru: 'Банджи-джампинг' },
          { de: 'Eisklettern', ru: 'Ледолазание' },
          { de: 'Fallschirmspringen', ru: 'Прыжки с парашютом' },
        ],
        correct: 1,
        explanation: 'Говорящий решает: "Fallschirmspringen ist mir zu gefährlich. Ich mache lieber Eisklettern".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Supermarkt',
      type: 'объявление',
      text: 'Guten Tag, meine Damen und Herren, und herzlich willkommen im Super. Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent. Greifen Sie zu, solange der Vorrat reicht!',
      sentenceTranslations: {
        'Guten Tag, meine Damen und Herren, und herzlich willkommen im Super.': { literal: 'Добрый день, мои дамы и господа, и сердечно добро пожаловать в супер', literary: 'Добрый день, дамы и господа, и добро пожаловать в супермаркет.' },
        'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.': { literal: 'Сегодня имеем мы совсем особенные предложения для вас: один килограмм помидоров за только 90 центов, один килограмм картофеля только 50 центов и один килограмм лука за только 30 центов', literary: 'Сегодня у нас особые предложения: килограмм помидоров всего за 90 центов, килограмм картофеля — 50 центов и килограмм лука всего за 30 центов.' },
        'Greifen Sie zu, solange der Vorrat reicht!': { literal: 'Хватайте вы, пока запас достаёт!', literary: 'Берите, пока есть в наличии!' },
      },
      vocabulary: [
        { de: 'das Angebot', plural: 'die Angebote', ru: 'предложение, акция', gender: 'neutrum', collocation: 'besondere Angebote', example: 'Heute haben wir ganz besondere Angebote für Sie.' },
        { de: 'die Tomate', plural: 'die Tomaten', ru: 'помидор', gender: 'feminin', collocation: 'ein Kilo Tomaten', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent.' },
        { de: 'die Kartoffel', plural: 'die Kartoffeln', ru: 'картофель', gender: 'feminin', collocation: 'ein Kilo Kartoffeln', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent.' },
        { de: 'die Zwiebel', plural: 'die Zwiebeln', ru: 'лук', gender: 'feminin', collocation: 'ein Kilo Zwiebeln', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.' },
        { de: 'der Vorrat', plural: 'die Vorräte', ru: 'запас', gender: 'maskulin', collocation: 'solange der Vorrat reicht', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
        { de: 'zugreifen', ru: 'хватать, брать', type: 'verb', forms: 'greife zu, griff zu, hat zugegriffen', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
        { de: 'reichen', ru: 'хватать, быть достаточным', type: 'verb', forms: 'reicht, reichte, hat gereicht', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
      ],
      practiceSentences: [
        { de: 'Wir haben gute Angebote.', ru: 'У нас хорошие предложения.', note: 'V2' },
        { de: 'Das kostet nur 2 Euro.', ru: 'Это стоит только 2 евро.', note: 'V2' },
        { de: 'Kaufen Sie Äpfel!', ru: 'Покупайте яблоки!', note: 'императив Sie-Form' },
        { de: 'Der Vorrat reicht nicht.', ru: 'Запаса не хватает.', note: 'V2' },
        { de: 'Greifen Sie schnell zu!', ru: 'Берите быстро!', note: 'отделяемая приставка в императиве' },
      ],
      question: {
        de: 'Was kostet ein Kilo Zwiebeln?',
        ru: 'Сколько стоит килограмм лука?',
        options: [
          { de: '30 Cent', ru: '30 центов' },
          { de: '50 Cent', ru: '50 центов' },
          { de: '90 Cent', ru: '90 центов' },
        ],
        correct: 0,
        explanation: 'В объявлении говорится: "ein Kilo Zwiebeln für nur 30 Cent".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Barbara',
      type: 'сообщение',
      text: 'Hallo Claudia, hier ist Barbara. Heute Abend ist doch die Party von Holger und ich weiß nicht, was ich anziehen soll. Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse? Vielleicht ziehe ich einen Rock mit einer Bluse an. Warte, ich hab\'s! Ich ziehe das schwarze Kleid an. Bitte ruf mich an und sag mir, wie du das findest. Danke!',
      sentenceTranslations: {
        'Hallo Claudia, hier ist Barbara.': { literal: 'Привет Клаудиа, здесь есть Барбара', literary: 'Привет, Клаудиа, это Барбара.' },
        'Heute Abend ist doch die Party von Holger und ich weiß nicht, was ich anziehen soll.': { literal: 'Сегодня вечером есть же вечеринка от Хольгера и я знаю не, что я надеть должна', literary: 'Сегодня вечером вечеринка у Хольгера, и я не знаю, что надеть.' },
        'Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse?': { literal: 'Должна я платье надеть или лучше джинсы с блузкой?', literary: 'Мне надеть платье или лучше джинсы с блузкой?' },
        'Vielleicht ziehe ich einen Rock mit einer Bluse an.': { literal: 'Может быть надеваю я юбку с блузкой', literary: 'Может, надену юбку с блузкой.' },
        'Warte, ich hab\'s!': { literal: 'Подожди, я имею это!', literary: 'Подожди, придумала!' },
        'Ich ziehe das schwarze Kleid an.': { literal: 'Я надеваю чёрное платье', literary: 'Я надену чёрное платье.' },
        'Bitte ruf mich an und sag mir, wie du das findest.': { literal: 'Пожалуйста позвони мне и скажи мне, как ты это находишь', literary: 'Пожалуйста, позвони и скажи, что думаешь.' },
        'Danke!': { literal: 'Спасибо!', literary: 'Спасибо!' },
      },
      vocabulary: [
        { de: 'die Party', plural: 'die Partys', ru: 'вечеринка', gender: 'feminin', collocation: 'die Party von Holger', example: 'Heute Abend ist doch die Party von Holger.' },
        { de: 'das Kleid', plural: 'die Kleider', ru: 'платье', gender: 'neutrum', collocation: 'ein Kleid anziehen', example: 'Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse?' },
        { de: 'die Bluse', plural: 'die Blusen', ru: 'блузка', gender: 'feminin', collocation: 'Jeans mit einer Bluse', example: 'Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse?' },
        { de: 'der Rock', plural: 'die Röcke', ru: 'юбка', gender: 'maskulin', collocation: 'einen Rock anziehen', example: 'Vielleicht ziehe ich einen Rock mit einer Bluse an.' },
        { de: 'anziehen', ru: 'надевать', type: 'verb', forms: 'ziehe an, zog an, hat angezogen', example: 'Ich ziehe das schwarze Kleid an.' },
        { de: 'schwarz', ru: 'чёрный', type: 'adj', example: 'Ich ziehe das schwarze Kleid an.' },
      ],
      practiceSentences: [
        { de: 'Ich ziehe eine Jacke an.', ru: 'Я надеваю куртку.', note: 'отделяемая приставка' },
        { de: 'Was soll ich machen?', ru: 'Что мне делать?', note: 'V1 в вопросе' },
        { de: 'Sie trägt ein rotes Kleid.', ru: 'Она носит красное платье.', note: 'V2' },
        { de: 'Ruf mich später an!', ru: 'Позвони мне позже!', note: 'отделяемая приставка в императиве' },
        { de: 'Heute ist eine Party.', ru: 'Сегодня вечеринка.', note: 'V2 после обстоятельства' },
      ],
      question: {
        de: 'Was will Barbara anziehen?',
        ru: 'Что хочет надеть Барбара?',
        options: [
          { de: 'Jeans mit einer Bluse', ru: 'Джинсы с блузкой' },
          { de: 'Rock mit einer Bluse', ru: 'Юбку с блузкой' },
          { de: 'Das schwarze Kleid', ru: 'Чёрное платье' },
        ],
        correct: 2,
        explanation: 'Барбара решает в конце: "Warte, ich hab\'s! Ich ziehe das schwarze Kleid an".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Kochkurs',
      type: 'диалог',
      text: 'Hallo Linda, freust du dich auch schon auf unseren Kochkurs morgen? Hallo Tommy! Ja klar, freue ich mich sehr darauf! Gerade war ich im Supermarkt und habe Orangensaft und Apfelsaft gekauft, wie mir Frau Meier, unsere Kursleiterin, gesagt hat. Hast du auch mit den anderen gesprochen? Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit. Aha, hoffentlich wählt sie die richtigen Äpfel aus, schön rot und saftig. Und was besorgst du? Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit. Sonst noch etwas? Frau Meier bringt Würstchen und Elli bringt Kartoffeln mit. Richtig, für den Kartoffelsalat! Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer. Ja, das hoffe ich auch. Den sauren Obstsalat mag ich auch nicht. Ja, dann mal sehen, wie unser Essen wird, obwohl ich lieber Kartoffeln mit Fisch essen möchte. Kartoffeln mit Fisch? Das schmeckt nur dir! Du hast ja keine Ahnung!',
      sentenceTranslations: {
        'Hallo Linda, freust du dich auch schon auf unseren Kochkurs morgen?': { literal: 'Привет Линда, радуешься ты себя тоже уже на наш кулинарный курс завтра?', literary: 'Привет, Линда, ты тоже уже ждёшь наш кулинарный курс завтра?' },
        'Hallo Tommy!': { literal: 'Привет Томми!', literary: 'Привет, Томми!' },
        'Ja klar, freue ich mich sehr darauf!': { literal: 'Да конечно, радуюсь я себя очень на это!', literary: 'Да, конечно, очень жду!' },
        'Gerade war ich im Supermarkt und habe Orangensaft und Apfelsaft gekauft, wie mir Frau Meier, unsere Kursleiterin, gesagt hat.': { literal: 'Только что был я в супермаркете и имею апельсиновый сок и яблочный сок купленным, как мне фрау Майер, наша руководитель курса, сказала имеет', literary: 'Я только что была в супермаркете и купила апельсиновый и яблочный сок, как сказала фрау Майер, наша руководитель курса.' },
        'Hast du auch mit den anderen gesprochen?': { literal: 'Имеешь ты тоже с другими поговоренным?', literary: 'Ты тоже говорил с остальными?' },
        'Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit.': { literal: 'Да, Анна приносит бананы и яблоки для фруктового салата с', literary: 'Да, Анна принесёт бананы и яблоки для фруктового салата.' },
        'Aha, hoffentlich wählt sie die richtigen Äpfel aus, schön rot und saftig.': { literal: 'Ага, надеюсь выбирает она правильные яблоки, красиво красные и сочные', literary: 'Ага, надеюсь, она выберет правильные яблоки — красивые, красные и сочные.' },
        'Und was besorgst du?': { literal: 'И что добываешь ты?', literary: 'А что принесёшь ты?' },
        'Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit.': { literal: 'Я иду завтра рано к пекарю и приношу свежие булочки с', literary: 'Я пойду завтра утром в пекарню и принесу свежие булочки.' },
        'Sonst noch etwas?': { literal: 'Иначе ещё что-то?', literary: 'Что-нибудь ещё?' },
        'Frau Meier bringt Würstchen und Elli bringt Kartoffeln mit.': { literal: 'Фрау Майер приносит сосиски и Элли приносит картофель с', literary: 'Фрау Майер принесёт сосиски, а Элли принесёт картошку.' },
        'Richtig, für den Kartoffelsalat!': { literal: 'Правильно, для картофельного салата!', literary: 'Точно, для картофельного салата!' },
        'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.': { literal: 'Надеюсь забывает Ангелика сахар для фруктового салата не, иначе становится он кислым', literary: 'Надеюсь, Ангелика не забудет сахар для фруктового салата, иначе он будет кислым.' },
        'Ja, das hoffe ich auch.': { literal: 'Да, это надеюсь я тоже', literary: 'Да, я тоже надеюсь.' },
        'Den sauren Obstsalat mag ich auch nicht.': { literal: 'Кислый фруктовый салат люблю я тоже не', literary: 'Кислый фруктовый салат я тоже не люблю.' },
        'Ja, dann mal sehen, wie unser Essen wird, obwohl ich lieber Kartoffeln mit Fisch essen möchte.': { literal: 'Да, тогда разок посмотреть, как наша еда становится, хотя я лучше картофель с рыбой есть хотел бы', literary: 'Ну, посмотрим, как наша еда получится, хотя я бы предпочёл картошку с рыбой.' },
        'Kartoffeln mit Fisch?': { literal: 'Картофель с рыбой?', literary: 'Картошка с рыбой?' },
        'Das schmeckt nur dir!': { literal: 'Это вкусно только тебе!', literary: 'Это нравится только тебе!' },
        'Du hast ja keine Ahnung!': { literal: 'Ты имеешь же никакого понятия!', literary: 'Ты ничего не понимаешь!' },
      },
      vocabulary: [
        { de: 'der Kochkurs', plural: 'die Kochkurse', ru: 'кулинарный курс', gender: 'maskulin', collocation: 'sich auf den Kochkurs freuen', example: 'Hallo Linda, freust du dich auch schon auf unseren Kochkurs morgen?' },
        { de: 'der Supermarkt', plural: 'die Supermärkte', ru: 'супермаркет', gender: 'maskulin', collocation: 'im Supermarkt', example: 'Gerade war ich im Supermarkt.' },
        { de: 'die Kursleiterin', plural: 'die Kursleiterinnen', ru: 'руководитель курса (жен.)', gender: 'feminin', collocation: 'unsere Kursleiterin', example: 'Gerade war ich im Supermarkt und habe Orangensaft und Apfelsaft gekauft, wie mir Frau Meier, unsere Kursleiterin, gesagt hat.' },
        { de: 'der Obstsalat', plural: 'die Obstsalate', ru: 'фруктовый салат', gender: 'maskulin', collocation: 'für den Obstsalat', example: 'Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit.' },
        { de: 'der Bäcker', plural: 'die Bäcker', ru: 'пекарь, пекарня', gender: 'maskulin', collocation: 'zum Bäcker gehen', example: 'Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit.' },
        { de: 'das Brötchen', plural: 'die Brötchen', ru: 'булочка', gender: 'neutrum', collocation: 'frische Brötchen', example: 'Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit.' },
        { de: 'der Zucker', ru: 'сахар', gender: 'maskulin', collocation: 'den Zucker vergessen', example: 'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.' },
        { de: 'der Kartoffelsalat', plural: 'die Kartoffelsalate', ru: 'картофельный салат', gender: 'maskulin', collocation: 'für den Kartoffelsalat', example: 'Richtig, für den Kartoffelsalat!' },
        { de: 'sich freuen auf', ru: 'радоваться предстоящему', type: 'verb', forms: 'freue mich, freute mich, hat sich gefreut', example: 'Hallo Linda, freust du dich auch schon auf unseren Kochkurs morgen?' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringe mit, brachte mit, hat mitgebracht', example: 'Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit.' },
        { de: 'auswählen', ru: 'выбирать', type: 'verb', forms: 'wähle aus, wählte aus, hat ausgewählt', example: 'Aha, hoffentlich wählt sie die richtigen Äpfel aus.' },
        { de: 'besorgen', ru: 'доставать, обеспечивать', type: 'verb', forms: 'besorge, besorgte, hat besorgt', example: 'Und was besorgst du?' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergesse, vergaß, hat vergessen', example: 'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.' },
        { de: 'schmecken', ru: 'быть вкусным', type: 'verb', forms: 'schmeckt, schmeckte, hat geschmeckt', example: 'Das schmeckt nur dir!' },
        { de: 'saftig', ru: 'сочный', type: 'adj', example: 'Aha, hoffentlich wählt sie die richtigen Äpfel aus, schön rot und saftig.' },
        { de: 'sauer', ru: 'кислый', type: 'adj', example: 'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.' },
      ],
      practiceSentences: [
        { de: 'Ich freue mich auf morgen.', ru: 'Я радуюсь завтрашнему дню.', note: 'возвратный глагол' },
        { de: 'Sie bringt Äpfel mit.', ru: 'Она приносит яблоки.', note: 'отделяемая приставка' },
        { de: 'Er wählt das Brot aus.', ru: 'Он выбирает хлеб.', note: 'отделяемая приставка' },
        { de: 'Wir gehen zum Bäcker.', ru: 'Мы идём в пекарню.', note: 'V2' },
        { de: 'Das schmeckt mir gut.', ru: 'Это мне нравится.', note: 'V2' },
      ],
      question: {
        de: 'Was bringt Tommy zum Kochkurs mit?',
        ru: 'Что принесёт Томми на кулинарный курс?',
        options: [
          { de: 'Orangensaft', ru: 'Апельсиновый сок' },
          { de: 'Frische Brötchen', ru: 'Свежие булочки' },
          { de: 'Kartoffeln', ru: 'Картошку' },
        ],
        correct: 1,
        explanation: 'Томми говорит: "Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Nachtisch',
      type: 'диалог',
      text: 'Das hat sehr gut geschmeckt! Du wirst ein prima Koch! Dankeschön! Möchtest du vielleicht einen Nachtisch? Ich würde gerne einen Joghurt essen. Und du? Ich habe außer Joghurt auch Eis und Obst. Eis lieber nicht, und Obst mag ich nicht. Obst schmeckt mir auch nicht, außer Bananen. Also Joghurt.',
      sentenceTranslations: {
        'Das hat sehr gut geschmeckt!': { literal: 'Это имеет очень хорошо на вкус!', literary: 'Это было очень вкусно!' },
        'Du wirst ein prima Koch!': { literal: 'Ты становишься отличным поваром!', literary: 'Ты станешь отличным поваром!' },
        'Dankeschön!': { literal: 'Спасибо!', literary: 'Спасибо!' },
        'Möchtest du vielleicht einen Nachtisch?': { literal: 'Хотел бы ты может быть десерт?', literary: 'Хочешь десерт?' },
        'Ich würde gerne einen Joghurt essen.': { literal: 'Я бы охотно йогурт есть', literary: 'Я бы съел йогурт.' },
        'Und du?': { literal: 'И ты?', literary: 'А ты?' },
        'Ich habe außer Joghurt auch Eis und Obst.': { literal: 'Я имею кроме йогурта также мороженое и фрукты', literary: 'У меня кроме йогурта есть мороженое и фрукты.' },
        'Eis lieber nicht, und Obst mag ich nicht.': { literal: 'Мороженое лучше нет, и фрукты люблю я не', literary: 'Мороженое лучше не надо, а фрукты я не люблю.' },
        'Obst schmeckt mir auch nicht, außer Bananen.': { literal: 'Фрукты вкусны мне тоже не, кроме бананов', literary: 'Фрукты мне тоже не нравятся, кроме бананов.' },
        'Also Joghurt.': { literal: 'Итак йогурт', literary: 'Значит, йогурт.' },
      },
      vocabulary: [
        { de: 'der Koch', plural: 'die Köche', ru: 'повар', gender: 'maskulin', collocation: 'ein prima Koch werden', example: 'Du wirst ein prima Koch!' },
        { de: 'der Nachtisch', plural: 'die Nachtische', ru: 'десерт', gender: 'maskulin', collocation: 'einen Nachtisch möchten', example: 'Möchtest du vielleicht einen Nachtisch?' },
        { de: 'der Joghurt', plural: 'die Joghurts', ru: 'йогурт', gender: 'maskulin', collocation: 'einen Joghurt essen', example: 'Ich würde gerne einen Joghurt essen.' },
        { de: 'das Eis', ru: 'мороженое', gender: 'neutrum', collocation: 'Eis essen', example: 'Ich habe außer Joghurt auch Eis und Obst.' },
        { de: 'das Obst', ru: 'фрукты', gender: 'neutrum', collocation: 'Obst mögen', example: 'Ich habe außer Joghurt auch Eis und Obst.' },
        { de: 'mögen', ru: 'любить, нравиться', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Eis lieber nicht, und Obst mag ich nicht.' },
      ],
      practiceSentences: [
        { de: 'Das schmeckt gut.', ru: 'Это вкусно.', note: 'V2' },
        { de: 'Ich mag Eis.', ru: 'Я люблю мороженое.', note: 'V2' },
        { de: 'Er wird Arzt.', ru: 'Он станет врачом.', note: 'V2' },
        { de: 'Möchtest du Obst?', ru: 'Хочешь фрукты?', note: 'V1 в вопросе' },
        { de: 'Ich würde gerne Tee trinken.', ru: 'Я бы выпил чаю.', note: 'würde + инфинитив' },
      ],
      question: {
        de: 'Was möchte der erste Sprecher als Nachtisch?',
        ru: 'Что хочет первый говорящий на десерт?',
        options: [
          { de: 'Eis', ru: 'Мороженое' },
          { de: 'Joghurt', ru: 'Йогурт' },
          { de: 'Obst', ru: 'Фрукты' },
        ],
        correct: 1,
        explanation: 'Первый говорящий отвечает: "Ich würde gerne einen Joghurt essen".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Frank krank',
      type: 'диалог',
      text: 'Hi Frank, wie geht\'s? Ich fühle mich nicht wohl. Was ist? Hast du Kopfschmerzen oder tut dein Bauch weh? Mit meinem Kopf und mit meinem Bauch ist alles okay. Ich kann nur nichts essen, weil mein Hals furchtbar weh tut. Warst du schon beim Arzt? Heute Nachmittag gehe ich hin.',
      sentenceTranslations: {
        'Hi Frank, wie geht\'s?': { literal: 'Привет Франк, как идёт это?', literary: 'Привет, Франк, как дела?' },
        'Ich fühle mich nicht wohl.': { literal: 'Я чувствую себя не хорошо', literary: 'Я плохо себя чувствую.' },
        'Was ist?': { literal: 'Что есть?', literary: 'Что случилось?' },
        'Hast du Kopfschmerzen oder tut dein Bauch weh?': { literal: 'Имеешь ты головные боли или делает твой живот больно?', literary: 'У тебя болит голова или живот?' },
        'Mit meinem Kopf und mit meinem Bauch ist alles okay.': { literal: 'С моей головой и с моим животом есть всё окей', literary: 'С головой и животом всё в порядке.' },
        'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.': { literal: 'Я могу только ничего есть, потому что мое горло ужасно больно делает', literary: 'Я просто не могу есть, потому что ужасно болит горло.' },
        'Warst du schon beim Arzt?': { literal: 'Был ты уже у врача?', literary: 'Ты уже был у врача?' },
        'Heute Nachmittag gehe ich hin.': { literal: 'Сегодня после обеда иду я туда', literary: 'Сегодня днём пойду.' },
      },
      vocabulary: [
        { de: 'der Kopf', plural: 'die Köpfe', ru: 'голова', gender: 'maskulin', collocation: 'Kopfschmerzen haben', example: 'Hast du Kopfschmerzen oder tut dein Bauch weh?' },
        { de: 'der Bauch', plural: 'die Bäuche', ru: 'живот', gender: 'maskulin', collocation: 'dein Bauch tut weh', example: 'Hast du Kopfschmerzen oder tut dein Bauch weh?' },
        { de: 'der Hals', plural: 'die Hälse', ru: 'горло', gender: 'maskulin', collocation: 'mein Hals tut weh', example: 'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.' },
        { de: 'der Arzt', plural: 'die Ärzte', ru: 'врач', gender: 'maskulin', collocation: 'beim Arzt', example: 'Warst du schon beim Arzt?' },
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'время после обеда', gender: 'maskulin', collocation: 'heute Nachmittag', example: 'Heute Nachmittag gehe ich hin.' },
        { de: 'sich fühlen', ru: 'чувствовать себя', type: 'verb', forms: 'fühle mich, fühlte mich, hat sich gefühlt', example: 'Ich fühle mich nicht wohl.' },
        { de: 'weh tun', ru: 'болеть', type: 'verb', forms: 'tut weh, tat weh, hat weh getan', example: 'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.' },
        { de: 'hingehen', ru: 'идти туда', type: 'verb', forms: 'gehe hin, ging hin, ist hingegangen', example: 'Heute Nachmittag gehe ich hin.' },
        { de: 'furchtbar', ru: 'ужасно', type: 'adv', example: 'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.' },
      ],
      practiceSentences: [
        { de: 'Mir tut der Kopf weh.', ru: 'У меня болит голова.', note: 'V2' },
        { de: 'Ich fühle mich gut.', ru: 'Я чувствую себя хорошо.', note: 'возвратный глагол' },
        { de: 'Er kann nicht schlafen.', ru: 'Он не может спать.', note: 'модальный + инфинитив' },
        { de: 'Wir gehen zum Arzt.', ru: 'Мы идём к врачу.', note: 'V2' },
        { de: 'Sie war gestern krank.', ru: 'Она вчера болела.', note: 'V2' },
      ],
      question: {
        de: 'Was tut Frank weh?',
        ru: 'Что болит у Франка?',
        options: [
          { de: 'Der Kopf', ru: 'Голова' },
          { de: 'Der Bauch', ru: 'Живот' },
          { de: 'Der Hals', ru: 'Горло' },
        ],
        correct: 2,
        explanation: 'Франк объясняет: "Ich kann nur nichts essen, weil mein Hals furchtbar weh tut".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Studium',
      type: 'диалог',
      text: 'Du Isabel, weißt du schon, was du studieren möchtest? Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient. Deshalb möchte ich vielleicht Ärztin werden. Da verdient man sich ja genug und kann auch Menschen helfen. Und du? Also ich interessiere mich sehr für Computer. Deshalb würde ich gerne Informatik studieren.',
      sentenceTranslations: {
        'Du Isabel, weißt du schon, was du studieren möchtest?': { literal: 'Ты Изабель, знаешь ты уже, что ты изучать хочешь?', literary: 'Изабель, ты уже знаешь, что хочешь изучать?' },
        'Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient.': { literal: 'Собственно хотела бы я охотно учительницей стать, но мой отец имеет сказанным, что человек там не много зарабатывает', literary: 'Вообще-то я хотела бы стать учительницей, но отец сказал, что там мало зарабатывают.' },
        'Deshalb möchte ich vielleicht Ärztin werden.': { literal: 'Поэтому хочу я может быть врачом стать', literary: 'Поэтому, может, стану врачом.' },
        'Da verdient man sich ja genug und kann auch Menschen helfen.': { literal: 'Там зарабатывает человек себе же достаточно и может также людям помогать', literary: 'Там достаточно зарабатываешь и можешь помогать людям.' },
        'Und du?': { literal: 'И ты?', literary: 'А ты?' },
        'Also ich interessiere mich sehr für Computer.': { literal: 'Итак я интересуюсь себя очень компьютерами', literary: 'Я очень интересуюсь компьютерами.' },
        'Deshalb würde ich gerne Informatik studieren.': { literal: 'Поэтому хотел бы я охотно информатику изучать', literary: 'Поэтому я хотел бы изучать информатику.' },
      },
      vocabulary: [
        { de: 'die Lehrerin', plural: 'die Lehrerinnen', ru: 'учительница', gender: 'feminin', collocation: 'Lehrerin werden', example: 'Eigentlich würde ich gerne Lehrerin werden.' },
        { de: 'die Ärztin', plural: 'die Ärztinnen', ru: 'врач (жен.)', gender: 'feminin', collocation: 'Ärztin werden', example: 'Deshalb möchte ich vielleicht Ärztin werden.' },
        { de: 'der Mensch', plural: 'die Menschen', ru: 'человек', gender: 'maskulin', collocation: 'Menschen helfen', example: 'Da verdient man sich ja genug und kann auch Menschen helfen.' },
        { de: 'der Computer', plural: 'die Computer', ru: 'компьютер', gender: 'maskulin', collocation: 'sich für Computer interessieren', example: 'Also ich interessiere mich sehr für Computer.' },
        { de: 'die Informatik', ru: 'информатика', gender: 'feminin', collocation: 'Informatik studieren', example: 'Deshalb würde ich gerne Informatik studieren.' },
        { de: 'studieren', ru: 'изучать (в вузе)', type: 'verb', forms: 'studiere, studierte, hat studiert', example: 'Deshalb würde ich gerne Informatik studieren.' },
        { de: 'verdienen', ru: 'зарабатывать', type: 'verb', forms: 'verdiene, verdiente, hat verdient', example: 'Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient.' },
        { de: 'sich interessieren für', ru: 'интересоваться', type: 'verb', forms: 'interessiere mich, interessierte mich, hat sich interessiert', example: 'Also ich interessiere mich sehr für Computer.' },
        { de: 'eigentlich', ru: 'вообще-то', type: 'adv', example: 'Eigentlich würde ich gerne Lehrerin werden.' },
      ],
      practiceSentences: [
        { de: 'Ich werde Lehrer.', ru: 'Я стану учителем.', note: 'V2' },
        { de: 'Sie studiert Medizin.', ru: 'Она изучает медицину.', note: 'V2' },
        { de: 'Man verdient gut.', ru: 'Хорошо зарабатывают.', note: 'V2' },
        { de: 'Er interessiert sich für Sport.', ru: 'Он интересуется спортом.', note: 'возвратный глагол' },
        { de: 'Wir möchten arbeiten.', ru: 'Мы хотели бы работать.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was möchte Isabel vielleicht werden?',
        ru: 'Кем, возможно, станет Изабель?',
        options: [
          { de: 'Lehrerin', ru: 'Учительницей' },
          { de: 'Ärztin', ru: 'Врачом' },
          { de: 'Informatikerin', ru: 'Программистом' },
        ],
        correct: 1,
        explanation: 'Изабель говорит: "Deshalb möchte ich vielleicht Ärztin werden".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Taschengeld sparen',
      type: 'диалог',
      text: 'Sag mal, hast du schon mal dein Taschengeld für etwas Bestimmtes gespart? Aber klar! Als ich ein neues Handy wollte, habe ich drei Monate sparen müssen. Möchtest du auch sparen? Ja, ich spare, weil ich neue Sportschuhe brauche. Mein Bruder spart auch, weil er einen Laptop kaufen möchte. Dann muss er aber lange sparen!',
      sentenceTranslations: {
        'Sag mal, hast du schon mal dein Taschengeld für etwas Bestimmtes gespart?': { literal: 'Скажи разок, имеешь ты уже разок твои карманные деньги для чего-то определённого сэкономленным?', literary: 'Скажи, ты когда-нибудь копил карманные деньги на что-то конкретное?' },
        'Aber klar!': { literal: 'Но конечно!', literary: 'Конечно!' },
        'Als ich ein neues Handy wollte, habe ich drei Monate sparen müssen.': { literal: 'Когда я новый телефон хотел, имею я три месяца копить должен', literary: 'Когда я хотел новый телефон, мне пришлось копить три месяца.' },
        'Möchtest du auch sparen?': { literal: 'Хочешь ты тоже копить?', literary: 'Ты тоже хочешь копить?' },
        'Ja, ich spare, weil ich neue Sportschuhe brauche.': { literal: 'Да, я коплю, потому что я новые спортивные туфли нуждаюсь', literary: 'Да, я коплю, потому что мне нужны новые кроссовки.' },
        'Mein Bruder spart auch, weil er einen Laptop kaufen möchte.': { literal: 'Мой брат копит тоже, потому что он ноутбук купить хочет', literary: 'Мой брат тоже копит, потому что хочет купить ноутбук.' },
        'Dann muss er aber lange sparen!': { literal: 'Тогда должен он но долго копить!', literary: 'Тогда ему придётся долго копить!' },
      },
      vocabulary: [
        { de: 'das Handy', plural: 'die Handys', ru: 'мобильный телефон', gender: 'neutrum', collocation: 'ein neues Handy', example: 'Als ich ein neues Handy wollte, habe ich drei Monate sparen müssen.' },
        { de: 'der Monat', plural: 'die Monate', ru: 'месяц', gender: 'maskulin', collocation: 'drei Monate', example: 'Als ich ein neues Handy wollte, habe ich drei Monate sparen müssen.' },
        { de: 'der Laptop', plural: 'die Laptops', ru: 'ноутбук', gender: 'maskulin', collocation: 'einen Laptop kaufen', example: 'Mein Bruder spart auch, weil er einen Laptop kaufen möchte.' },
        { de: 'der Bruder', plural: 'die Brüder', ru: 'брат', gender: 'maskulin', collocation: 'mein Bruder', example: 'Mein Bruder spart auch, weil er einen Laptop kaufen möchte.' },
        { de: 'sparen', ru: 'копить, экономить', type: 'verb', forms: 'spare, sparte, hat gespart', example: 'Sag mal, hast du schon mal dein Taschengeld für etwas Bestimmtes gespart?' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'brauche, brauchte, hat gebraucht', example: 'Ja, ich spare, weil ich neue Sportschuhe brauche.' },
        { de: 'kaufen', ru: 'покупать', type: 'verb', forms: 'kaufe, kaufte, hat gekauft', example: 'Mein Bruder spart auch, weil er einen Laptop kaufen möchte.' },
      ],
      practiceSentences: [
        { de: 'Ich spare Geld.', ru: 'Я коплю деньги.', note: 'V2' },
        { de: 'Er braucht neue Schuhe.', ru: 'Ему нужны новые туфли.', note: 'V2' },
        { de: 'Wir müssen sparen.', ru: 'Мы должны копить.', note: 'модальный + инфинитив' },
        { de: 'Sie hat gespart.', ru: 'Она копила.', note: 'Perfekt' },
        { de: 'Als ich klein war.', ru: 'Когда я был маленьким.', note: 'конец в придаточном' },
      ],
      question: {
        de: 'Wofür spart der zweite Sprecher?',
        ru: 'На что копит второй говорящий?',
        options: [
          { de: 'Für ein Handy', ru: 'На телефон' },
          { de: 'Für Sportschuhe', ru: 'На кроссовки' },
          { de: 'Für einen Laptop', ru: 'На ноутбук' },
        ],
        correct: 1,
        explanation: 'Второй говорящий отвечает: "Ja, ich spare, weil ich neue Sportschuhe brauche".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Freizeit',
      type: 'диалог',
      text: 'Hallo Frank, was machst du heute nach der Schule? Vielleicht spiele ich ein bisschen an der Playstation. Ich möchte ein neues Spiel ausprobieren. Das ist doch langweilig! Gehen wir doch lieber ins Stadion! Heute ist ein super Spiel: VfB Stuttgart gegen Bayern München. Gute Idee! Das wusste ich nicht. Morgen gehen wir Tennis spielen, okay?',
      sentenceTranslations: {
        'Hallo Frank, was machst du heute nach der Schule?': { literal: 'Привет Франк, что делаешь ты сегодня после школы?', literary: 'Привет, Франк, что делаешь после школы?' },
        'Vielleicht spiele ich ein bisschen an der Playstation.': { literal: 'Может быть играю я немного на плейстейшн', literary: 'Может, поиграю немного на плейстейшн.' },
        'Ich möchte ein neues Spiel ausprobieren.': { literal: 'Я хочу новую игру попробовать', literary: 'Хочу попробовать новую игру.' },
        'Das ist doch langweilig!': { literal: 'Это есть же скучно!', literary: 'Это же скучно!' },
        'Gehen wir doch lieber ins Stadion!': { literal: 'Идём мы же лучше на стадион!', literary: 'Давай лучше пойдём на стадион!' },
        'Heute ist ein super Spiel: VfB Stuttgart gegen Bayern München.': { literal: 'Сегодня есть супер игра: ФфБ Штутгарт против Бавария Мюнхен', literary: 'Сегодня супер-матч: Штутгарт против Баварии.' },
        'Gute Idee!': { literal: 'Хорошая идея!', literary: 'Хорошая идея!' },
        'Das wusste ich nicht.': { literal: 'Это знал я не', literary: 'Я не знал.' },
        'Morgen gehen wir Tennis spielen, okay?': { literal: 'Завтра идём мы теннис играть, окей?', literary: 'Завтра поиграем в теннис, ладно?' },
      },
      vocabulary: [
        { de: 'die Schule', plural: 'die Schulen', ru: 'школа', gender: 'feminin', collocation: 'nach der Schule', example: 'Hallo Frank, was machst du heute nach der Schule?' },
        { de: 'das Spiel', plural: 'die Spiele', ru: 'игра, матч', gender: 'neutrum', collocation: 'ein neues Spiel', example: 'Ich möchte ein neues Spiel ausprobieren.' },
        { de: 'das Stadion', plural: 'die Stadien', ru: 'стадион', gender: 'neutrum', collocation: 'ins Stadion gehen', example: 'Gehen wir doch lieber ins Stadion!' },
        { de: 'ausprobieren', ru: 'пробовать', type: 'verb', forms: 'probiere aus, probierte aus, hat ausprobiert', example: 'Ich möchte ein neues Spiel ausprobieren.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Das ist doch langweilig!' },
      ],
      practiceSentences: [
        { de: 'Ich spiele Fußball.', ru: 'Я играю в футбол.', note: 'V2' },
        { de: 'Gehen wir ins Kino!', ru: 'Пойдём в кино!', note: 'V1 в побуждении' },
        { de: 'Das ist langweilig.', ru: 'Это скучно.', note: 'V2' },
        { de: 'Er probiert das Spiel aus.', ru: 'Он пробует игру.', note: 'отделяемая приставка' },
        { de: 'Wir spielen morgen Tennis.', ru: 'Мы завтра играем в теннис.', note: 'V2' },
      ],
      question: {
        de: 'Wohin wollen die Sprecher heute gehen?',
        ru: 'Куда хотят пойти говорящие сегодня?',
        options: [
          { de: 'Tennis spielen', ru: 'Играть в теннис' },
          { de: 'Playstation spielen', ru: 'Играть на плейстейшн' },
          { de: 'Ins Stadion', ru: 'На стадион' },
        ],
        correct: 2,
        explanation: 'Они договариваются: "Gehen wir doch lieber ins Stadion!" — "Gute Idee!". Теннис планируют на завтра.'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Jonas',
      type: 'интервью',
      text: 'Hallo, hier ist Annette von eurem beliebten Jugendcenter Highlight. Bei mir ist heute Jonas und unser Thema ist Freizeit in der Gruppe. Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können. Willkommen im Studio, Jonas! Hallo! Also, was meinst du, wie können Jungs aber auch Mädchen ihre gemeinsame Freizeit sinnvoll gestalten? Da fällt mir als erstes Sport ein. Naja, gemeinsam erlebte Freizeit muss Spaß machen, aber es muss nicht immer Sport sein. Interessant! So was gerade von einem Jungen zu hören! Was schlägst du also vor? Schau, das Jugendzentrum in jedem Stadtteil bietet verschiedene Kurse an: Malkurse, Musikabende und das, was neu ist, sind Workshops für Jugendliche, die Spaß am Filmmachen haben. Filme machen! Mal was Neues! Also das hört sich wirklich interessant an! Und machen da Jugendliche auch gern mit? Na klar! In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft. 15 Teilnehmer? Nicht schlecht! 50, nicht 15! Das ist ja wirklich toll! Wie oft trefft ihr euch jede Woche und wie viel müsst ihr bezahlen, um teilnehmen zu können? Wir treffen uns mindestens dreimal die Woche, manchmal auch jeden Tag, sogar auch am Wochenende. Und alles zahlt die Stadt! So oft? Wird das nicht langweilig? Nein, auf keinen Fall! Jeden Tag kommen nur die Jugendlichen, die am Filmmachen teilnehmen. Und du hast gesagt, alles bezahlt die Stadt? Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts! Herzlichen Dank, Jonas! Ich bin sicher, dass alles war für unser Publikum von großem Interesse. Danke auch!',
      sentenceTranslations: {
        'Hallo, hier ist Annette von eurem beliebten Jugendcenter Highlight.': { literal: 'Привет, здесь есть Аннетта от вашего любимого молодёжного центра Хайлайт', literary: 'Привет, это Аннетта из вашего любимого молодёжного центра "Хайлайт".' },
        'Bei mir ist heute Jonas und unser Thema ist Freizeit in der Gruppe.': { literal: 'У меня есть сегодня Йонас и наша тема есть досуг в группе', literary: 'У меня в гостях Йонас, и наша тема — групповой досуг.' },
        'Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können.': { literal: 'Йонас даёт нам советы, что молодые как вы в их досуге совместно предпринимать могут', literary: 'Йонас даст советы, чем молодёжь может заниматься вместе в свободное время.' },
        'Willkommen im Studio, Jonas!': { literal: 'Добро пожаловать в студию, Йонас!', literary: 'Добро пожаловать в студию, Йонас!' },
        'Hallo!': { literal: 'Привет!', literary: 'Привет!' },
        'Also, was meinst du, wie können Jungs aber auch Mädchen ihre gemeinsame Freizeit sinnvoll gestalten?': { literal: 'Итак, что думаешь ты, как могут парни но также девушки их совместный досуг осмысленно оформить?', literary: 'Итак, как, по-твоему, парни и девушки могут с пользой проводить время вместе?' },
        'Da fällt mir als erstes Sport ein.': { literal: 'Тут падает мне как первое спорт', literary: 'Первое, что приходит в голову — спорт.' },
        'Naja, gemeinsam erlebte Freizeit muss Spaß machen, aber es muss nicht immer Sport sein.': { literal: 'Ну, совместно пережитый досуг должен удовольствие делать, но это должно не всегда спорт быть', literary: 'Ну, совместный досуг должен приносить удовольствие, но это не всегда должен быть спорт.' },
        'Interessant!': { literal: 'Интересно!', literary: 'Интересно!' },
        'So was gerade von einem Jungen zu hören!': { literal: 'Такое что как раз от парня слышать!', literary: 'Интересно слышать это от парня!' },
        'Was schlägst du also vor?': { literal: 'Что предлагаешь ты итак?', literary: 'Что же ты предлагаешь?' },
        'Schau, das Jugendzentrum in jedem Stadtteil bietet verschiedene Kurse an: Malkurse, Musikabende und das, was neu ist, sind Workshops für Jugendliche, die Spaß am Filmmachen haben.': { literal: 'Смотри, молодёжный центр в каждом районе предлагает различные курсы: курсы рисования, музыкальные вечера и то, что новое есть, есть воркшопы для молодёжи, которые удовольствие от создания фильмов имеют', literary: 'Смотри, молодёжный центр в каждом районе предлагает разные курсы: курсы рисования, музыкальные вечера, а новинка — воркшопы для тех, кто любит снимать фильмы.' },
        'Filme machen!': { literal: 'Фильмы делать!', literary: 'Снимать фильмы!' },
        'Mal was Neues!': { literal: 'Разок что новое!', literary: 'Что-то новенькое!' },
        'Also das hört sich wirklich interessant an!': { literal: 'Итак это слышится действительно интересно', literary: 'Звучит действительно интересно!' },
        'Und machen da Jugendliche auch gern mit?': { literal: 'И делают там молодые также охотно с?', literary: 'И молодёжь охотно участвует?' },
        'Na klar!': { literal: 'Ну конечно!', literary: 'Конечно!' },
        'In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft.': { literal: 'В моём молодёжном центре есть уже свыше 50 молодых членов досуговой группы, которая себя регулярно для совместных активностей встречает', literary: 'В моём молодёжном центре уже больше 50 участников досуговой группы, которая регулярно встречается для совместных занятий.' },
        '15 Teilnehmer?': { literal: '15 участников?', literary: '15 участников?' },
        'Nicht schlecht!': { literal: 'Не плохо!', literary: 'Неплохо!' },
        '50, nicht 15!': { literal: '50, не 15!', literary: '50, а не 15!' },
        'Das ist ja wirklich toll!': { literal: 'Это есть же действительно здорово!', literary: 'Это действительно здорово!' },
        'Wie oft trefft ihr euch jede Woche und wie viel müsst ihr bezahlen, um teilnehmen zu können?': { literal: 'Как часто встречаете вы себя каждую неделю и как много должны вы платить, чтобы участвовать мочь?', literary: 'Как часто вы встречаетесь каждую неделю и сколько нужно платить за участие?' },
        'Wir treffen uns mindestens dreimal die Woche, manchmal auch jeden Tag, sogar auch am Wochenende.': { literal: 'Мы встречаем себя минимум трижды неделю, иногда также каждый день, даже также в выходные', literary: 'Мы встречаемся минимум три раза в неделю, иногда каждый день, даже в выходные.' },
        'Und alles zahlt die Stadt!': { literal: 'И всё платит город!', literary: 'И всё оплачивает город!' },
        'So oft?': { literal: 'Так часто?', literary: 'Так часто?' },
        'Wird das nicht langweilig?': { literal: 'Становится это не скучно?', literary: 'Не скучно?' },
        'Nein, auf keinen Fall!': { literal: 'Нет, на никакой случай!', literary: 'Нет, ни в коем случае!' },
        'Jeden Tag kommen nur die Jugendlichen, die am Filmmachen teilnehmen.': { literal: 'Каждый день приходят только молодые, которые в создании фильмов участвуют', literary: 'Каждый день приходят только те, кто участвует в киномастерской.' },
        'Und du hast gesagt, alles bezahlt die Stadt?': { literal: 'И ты имеешь сказанным, всё платит город?', literary: 'И ты сказал, всё оплачивает город?' },
        'Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts!': { literal: 'Да, мы должны только желание и хорошее настроение приносить с собой, иначе ничего!', literary: 'Да, нужно только желание и хорошее настроение, больше ничего!' },
        'Herzlichen Dank, Jonas!': { literal: 'Сердечное спасибо, Йонас!', literary: 'Большое спасибо, Йонас!' },
        'Ich bin sicher, dass alles war für unser Publikum von großem Interesse.': { literal: 'Я есть уверена, что всё было для нашей публики от большого интереса', literary: 'Уверена, это было очень интересно нашим слушателям.' },
        'Danke auch!': { literal: 'Спасибо тоже!', literary: 'И тебе спасибо!' },
      },
      vocabulary: [
        { de: 'das Jugendzentrum', plural: 'die Jugendzentren', ru: 'молодёжный центр', gender: 'neutrum', collocation: 'im Jugendzentrum', example: 'Schau, das Jugendzentrum in jedem Stadtteil bietet verschiedene Kurse an.' },
        { de: 'die Freizeit', ru: 'свободное время', gender: 'feminin', collocation: 'Freizeit in der Gruppe', example: 'Bei mir ist heute Jonas und unser Thema ist Freizeit in der Gruppe.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'Tipps geben', example: 'Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können.' },
        { de: 'der Stadtteil', plural: 'die Stadtteile', ru: 'район города', gender: 'maskulin', collocation: 'in jedem Stadtteil', example: 'Schau, das Jugendzentrum in jedem Stadtteil bietet verschiedene Kurse an.' },
        { de: 'das Filmmachen', ru: 'создание фильмов', gender: 'neutrum', collocation: 'Spaß am Filmmachen', example: 'Schau, das Jugendzentrum in jedem Stadtteil bietet verschiedene Kurse an: Malkurse, Musikabende und das, was neu ist, sind Workshops für Jugendliche, die Spaß am Filmmachen haben.' },
        { de: 'das Mitglied', plural: 'die Mitglieder', ru: 'участник, член', gender: 'neutrum', collocation: 'jugendliche Mitglieder', example: 'In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe.' },
        { de: 'die Aktivität', plural: 'die Aktivitäten', ru: 'деятельность', gender: 'feminin', collocation: 'gemeinsame Aktivitäten', example: 'In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft.' },
        { de: 'die Stadt', plural: 'die Städte', ru: 'город', gender: 'feminin', collocation: 'die Stadt zahlt', example: 'Und alles zahlt die Stadt!' },
        { de: 'die Lust', ru: 'желание', gender: 'feminin', collocation: 'Lust mitbringen', example: 'Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts!' },
        { de: 'die Laune', plural: 'die Launen', ru: 'настроение', gender: 'feminin', collocation: 'gute Laune', example: 'Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts!' },
        { de: 'das Publikum', ru: 'публика, аудитория', gender: 'neutrum', collocation: 'für unser Publikum', example: 'Ich bin sicher, dass alles war für unser Publikum von großem Interesse.' },
        { de: 'vorschlagen', ru: 'предлагать', type: 'verb', forms: 'schlage vor, schlug vor, hat vorgeschlagen', example: 'Was schlägst du also vor?' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'biete an, bot an, hat angeboten', example: 'Schau, das Jugendzentrum in jedem Stadtteil bietet verschiedene Kurse an.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'treffe mich, traf mich, hat sich getroffen', example: 'Wir treffen uns mindestens dreimal die Woche.' },
        { de: 'teilnehmen an', ru: 'участвовать в', type: 'verb', forms: 'nehme teil, nahm teil, hat teilgenommen', example: 'Jeden Tag kommen nur die Jugendlichen, die am Filmmachen teilnehmen.' },
        { de: 'mitmachen', ru: 'участвовать', type: 'verb', forms: 'mache mit, machte mit, hat mitgemacht', example: 'Und machen da Jugendliche auch gern mit?' },
        { de: 'bezahlen', ru: 'платить', type: 'verb', forms: 'bezahle, bezahlte, hat bezahlt', example: 'Wie oft trefft ihr euch jede Woche und wie viel müsst ihr bezahlen, um teilnehmen zu können?' },
        { de: 'gemeinsam', ru: 'совместный', type: 'adj', example: 'Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können.' },
        { de: 'regelmäßig', ru: 'регулярно', type: 'adv', example: 'In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft.' },
        { de: 'mindestens', ru: 'минимум, по крайней мере', type: 'adv', example: 'Wir treffen uns mindestens dreimal die Woche.' },
      ],
      practiceSentences: [
        { de: 'Wir treffen uns oft.', ru: 'Мы часто встречаемся.', note: 'возвратный глагол' },
        { de: 'Sie bietet Kurse an.', ru: 'Она предлагает курсы.', note: 'отделяемая приставка' },
        { de: 'Er macht gern mit.', ru: 'Он охотно участвует.', note: 'отделяемая приставка' },
        { de: 'Das hört sich gut an.', ru: 'Это звучит хорошо.', note: 'возвратный глагол' },
        { de: 'Mir fällt nichts ein.', ru: 'Мне ничего не приходит в голову.', note: 'V2' },
      ],
      question: {
        de: 'Findet Jonas, dass gemeinsame Freizeit immer Sport sein muss?',
        ru: 'Считает ли Йонас, что совместный досуг всегда должен быть спортом?',
        options: [
          { de: 'Ja, Sport ist das Wichtigste', ru: 'Да, спорт — самое важное' },
          { de: 'Nein, es muss nicht immer Sport sein', ru: 'Нет, это не всегда должен быть спорт' },
          { de: 'Er weiß es nicht', ru: 'Он не знает' },
        ],
        correct: 1,
        explanation: 'Йонас говорит: "es muss nicht immer Sport sein".'
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
    title: 'ОДИН ДЕНЬ ИЗ ЖИЗНИ ПОДРОСТКОВ',
    text: 'Волкер хочет выучить ещё один {0} и предлагает Беттине учиться вместе — так будет больше {1}. Свен жалуется, что получает мало {2} — всего 10 евро в неделю. Тим мечтает об экстремальном спорте и выбирает {3}, потому что прыжки с парашютом слишком {4}. В супермаркете {5} — килограмм помидоров за 90 центов. Барбара не знает, что {6} на вечеринку, и решает надеть чёрное платье. На {7} Линда купила сок, а Томми принесёт {8} от пекаря. Франк плохо себя {9} — у него болит {10}. Изабель хочет стать {11}, потому что там хорошо зарабатывают. В молодёжном центре Йонаса уже больше 50 {12}, и всё оплачивает город!',
    blanks: [
      { answer: 'eine Fremdsprache', hint: 'иностранный язык (die Fremdsprache, Akk.)' },
      { answer: 'Spaß', hint: 'удовольствие (der Spaß)' },
      { answer: 'Taschengeld', hint: 'карманные деньги (das Taschengeld)' },
      { answer: 'Eisklettern', hint: 'ледолазание (das Eisklettern)' },
      { answer: 'gefährlich', hint: 'опасный (gefährlich)' },
      { answer: 'besondere Angebote', hint: 'особые предложения (das Angebot, Pl.)' },
      { answer: 'anziehen', hint: 'надеть (anziehen)' },
      { answer: 'den Kochkurs', hint: 'кулинарный курс (der Kochkurs, Akk.)' },
      { answer: 'frische Brötchen', hint: 'свежие булочки (das Brötchen, Pl.)' },
      { answer: 'fühlt', hint: 'чувствует (sich fühlen)' },
      { answer: 'der Hals', hint: 'горло (der Hals)' },
      { answer: 'Ärztin', hint: 'врач-женщина (die Ärztin)' },
      { answer: 'Mitglieder', hint: 'участники (das Mitglied, Pl.)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören — Jugendliche):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nГРАММАТИЧЕСКИЙ ФОКУС:\n- Konjunktiv II (würde + Infinitiv): \"wenn ich lernen würde\", \"ich würde gerne essen\"\n- dass/weil/wenn-Nebensätze (глагол в конце): \"dass ich zu wenig bekomme\", \"weil mein Hals weh tut\"\n- Отделяемые приставки (anziehen, mitbringen, auswählen, ausprobieren, teilnehmen)\n- sich-Verben (sich überlegen, sich fühlen, sich freuen auf, sich treffen, sich interessieren für)\n- werden + профессия без артикля: \"Ärztin werden\", \"Koch werden\"\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Volker).',
    },
  },
};
LESSONS.push(LESSON_20);
