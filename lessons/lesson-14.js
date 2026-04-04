/* ═══════════════════════════════════════════════════════════
   Lesson 14 — Goethe Zertifikat A2 Hören Modelltest 2025
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_14 = {
  id: 'lesson-14',
  number: 14,
  title: 'Goethe A2 Hören — Modelltest 2025',
  subtitle: 'Fremdsprache, Taschengeld, Extremsport, Supermarkt, Party, Kochkurs, Nachtisch, Arzt, Studium, Sparen, Schule, Jugendzentrum',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-14',
  videoUrl: 'https://www.youtube.com/watch?v=KcMRP_OLBNs',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Volker',
      type: 'телефонное сообщение',
      text: 'Hallo Bettina, ich bin\'s Volker. Ich habe mir überlegt, dass es gut wäre, wenn ich noch eine Fremdsprache lernen würde. Ich kann schon Englisch und Französisch, wie du ja auch. Ich möchte nun gerne Spanisch lernen. Diese Sprache fasziniert mich. Wie wäre es, wenn wir zusammen lernen würden? Dann macht es auch mehr Spaß. Ruf mich doch mal an.',
      sentenceTranslations: {
        'Hallo Bettina, ich bin\'s Volker.': { literal: 'Привет Беттина, я есть это Фолькер.', literary: 'Привет, Беттина, это я, Фолькер.' },
        'Ich habe mir überlegt, dass es gut wäre, wenn ich noch eine Fremdsprache lernen würde.': { literal: 'Я имею себе обдумано, что это хорошо было бы, если я ещё один иностранный язык учить бы.', literary: 'Я тут подумал, что было бы хорошо выучить ещё один иностранный язык.' },
        'Ich kann schon Englisch und Französisch, wie du ja auch.': { literal: 'Я могу уже английский и французский, как ты же тоже.', literary: 'Я уже знаю английский и французский, как и ты.' },
        'Ich möchte nun gerne Spanisch lernen.': { literal: 'Я хотел бы теперь охотно испанский учить.', literary: 'Теперь я хотел бы выучить испанский.' },
        'Diese Sprache fasziniert mich.': { literal: 'Этот язык очаровывает меня.', literary: 'Этот язык меня восхищает.' },
        'Wie wäre es, wenn wir zusammen lernen würden?': { literal: 'Как было бы это, если мы вместе учить бы?', literary: 'Как насчёт того, чтобы учиться вместе?' },
        'Dann macht es auch mehr Spaß.': { literal: 'Тогда делает это также больше удовольствия.', literary: 'Тогда это будет веселее.' },
        'Ruf mich doch mal an.': { literal: 'Позвони мне же разок.', literary: 'Позвони мне, пожалуйста.' },
      },
      vocabulary: [
        { de: 'die Fremdsprache', plural: 'die Fremdsprachen', ru: 'иностранный язык', gender: 'feminin', collocation: 'eine Fremdsprache lernen', example: 'Ich habe mir überlegt, dass es gut wäre, wenn ich noch eine Fremdsprache lernen würde.' },
        { de: 'die Sprache', plural: 'die Sprachen', ru: 'язык', gender: 'feminin', collocation: 'Diese Sprache fasziniert mich', example: 'Diese Sprache fasziniert mich.' },
        { de: 'der Spaß', ru: 'удовольствие', gender: 'maskulin', collocation: 'Spaß machen', example: 'Dann macht es auch mehr Spaß.' },
        { de: 'sich überlegen', ru: 'обдумывать', type: 'verb', forms: 'überlege mir, überlegte mir, hat sich überlegt', example: 'Ich habe mir überlegt, dass es gut wäre, wenn ich noch eine Fremdsprache lernen würde.' },
        { de: 'faszinieren', ru: 'восхищать', type: 'verb', forms: 'fasziniere, faszinierte, hat fasziniert', example: 'Diese Sprache fasziniert mich.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'rufe an, rief an, hat angerufen', example: 'Ruf mich doch mal an.' },
        { de: 'zusammen', ru: 'вместе', type: 'adv', example: 'Wie wäre es, wenn wir zusammen lernen würden?' },
        { de: 'gerne', ru: 'охотно', type: 'adv', example: 'Ich möchte nun gerne Spanisch lernen.' },
      ],
      practiceSentences: [
        { de: 'Ich lerne gerne Deutsch.', ru: 'Я охотно учу немецкий.', note: 'V2' },
        { de: 'Es wäre schön, wenn du kommst.', ru: 'Было бы хорошо, если ты придёшь.', note: 'Konjunktiv II + wenn' },
        { de: 'Ruf mich morgen an!', ru: 'Позвони мне завтра!', note: 'отделяемая приставка' },
        { de: 'Ich möchte Spanisch lernen.', ru: 'Я хотел бы учить испанский.', note: 'модальный + инфинитив' },
        { de: 'Das macht mir Spaß.', ru: 'Это доставляет мне удовольствие.', note: 'V2' },
      ],
      question: {
        de: 'Was möchte Volker lernen?',
        ru: 'Что хочет изучать Фолькер?',
        options: [
          { de: 'Englisch', ru: 'Английский' },
          { de: 'Französisch', ru: 'Французский' },
          { de: 'Spanisch', ru: 'Испанский' },
        ],
        correct: 2,
        explanation: 'Volker говорит: "Ich möchte nun gerne Spanisch lernen. Diese Sprache fasziniert mich."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Taschengeld',
      type: 'сообщение',
      text: 'Hallo Sven, du, ich habe ein kleines Problem. Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche. Ich finde, das ist zu wenig. 15 Euro sollte ich wenigstens bekommen. Du bekommst auch 20 Euro in der Woche, oder? Ich muss mal mit meinen Eltern reden.',
      sentenceTranslations: {
        'Hallo Sven, du, ich habe ein kleines Problem.': { literal: 'Привет Свен, ты, я имею одну маленькую проблему.', literary: 'Привет, Свен, слушай, у меня небольшая проблема.' },
        'Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche.': { literal: 'Я полагаю, что я слишком мало карманных денег получаю, а именно только 10 евро в неделю.', literary: 'Мне кажется, я получаю слишком мало карманных денег — всего 10 евро в неделю.' },
        'Ich finde, das ist zu wenig.': { literal: 'Я нахожу, это есть слишком мало.', literary: 'Я считаю, это слишком мало.' },
        '15 Euro sollte ich wenigstens bekommen.': { literal: '15 евро должен я по крайней мере получать.', literary: 'Я должен получать хотя бы 15 евро.' },
        'Du bekommst auch 20 Euro in der Woche, oder?': { literal: 'Ты получаешь тоже 20 евро в неделю, или?', literary: 'Ты же получаешь 20 евро в неделю, да?' },
        'Ich muss mal mit meinen Eltern reden.': { literal: 'Я должен разок с моими родителями поговорить.', literary: 'Мне нужно поговорить с родителями.' },
      },
      vocabulary: [
        { de: 'das Problem', plural: 'die Probleme', ru: 'проблема', gender: 'neutrum', collocation: 'ein kleines Problem haben', example: 'Hallo Sven, du, ich habe ein kleines Problem.' },
        { de: 'das Taschengeld', ru: 'карманные деньги', gender: 'neutrum', collocation: 'Taschengeld bekommen', example: 'Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche.' },
        { de: 'die Woche', plural: 'die Wochen', ru: 'неделя', gender: 'feminin', collocation: 'in der Woche', example: 'Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche.' },
        { de: 'die Eltern', ru: 'родители', gender: 'maskulin', collocation: 'mit den Eltern reden', example: 'Ich muss mal mit meinen Eltern reden.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekomme, bekam, hat bekommen', example: 'Du bekommst auch 20 Euro in der Woche, oder?' },
        { de: 'reden', ru: 'разговаривать', type: 'verb', forms: 'rede, redete, hat geredet', example: 'Ich muss mal mit meinen Eltern reden.' },
        { de: 'wenigstens', ru: 'по крайней мере', type: 'adv', example: '15 Euro sollte ich wenigstens bekommen.' },
        { de: 'nämlich', ru: 'а именно', type: 'adv', example: 'Ich glaube, dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche.' },
      ],
      practiceSentences: [
        { de: 'Ich bekomme Taschengeld.', ru: 'Я получаю карманные деньги.', note: 'V2' },
        { de: 'Das ist zu wenig Geld.', ru: 'Это слишком мало денег.', note: 'V2' },
        { de: 'Ich muss mit Papa sprechen.', ru: 'Я должен поговорить с папой.', note: 'модальный + инфинитив' },
        { de: 'Du solltest mehr bekommen.', ru: 'Ты должен больше получать.', note: 'модальный + инфинитив' },
        { de: 'Ich finde, das ist gut.', ru: 'Я считаю, это хорошо.', note: 'V2' },
      ],
      question: {
        de: 'Wie viel Taschengeld bekommt der Sprecher pro Woche?',
        ru: 'Сколько карманных денег получает говорящий в неделю?',
        options: [
          { de: '10 Euro', ru: '10 евро' },
          { de: '15 Euro', ru: '15 евро' },
          { de: '20 Euro', ru: '20 евро' },
        ],
        correct: 0,
        explanation: 'Говорящий сообщает: "...dass ich zu wenig Taschengeld bekomme, nämlich nur 10 Euro in der Woche."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Extremsport',
      type: 'сообщение',
      text: 'Hey Tim, hast du gewusst, dass Stefan Extremsport macht? Er macht Bungee-Jumping. Das finde ich spitze! Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll. Vielleicht mache ich Eisklettern oder Fallschirmspringen. Nein, Fallschirmspringen ist mir zu gefährlich. Ich mache lieber Eisklettern.',
      sentenceTranslations: {
        'Hey Tim, hast du gewusst, dass Stefan Extremsport macht?': { literal: 'Эй Тим, имел ты узнано, что Штефан экстремальный спорт делает?', literary: 'Эй, Тим, ты знал, что Штефан занимается экстремальным спортом?' },
        'Er macht Bungee-Jumping.': { literal: 'Он делает банджи-джампинг.', literary: 'Он занимается банджи-джампингом.' },
        'Das finde ich spitze!': { literal: 'Это нахожу я классно!', literary: 'Это круто!' },
        'Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll.': { literal: 'Я хотел бы тоже экстремальный спорт делать, но я знаю не, какой вид спорта я выбрать должен.', literary: 'Я тоже хочу заниматься экстремальным спортом, но не знаю, какой вид выбрать.' },
        'Vielleicht mache ich Eisklettern oder Fallschirmspringen.': { literal: 'Возможно делаю я ледолазание или прыжки с парашютом.', literary: 'Возможно, займусь ледолазанием или прыжками с парашютом.' },
        'Nein, Fallschirmspringen ist mir zu gefährlich.': { literal: 'Нет, прыжки с парашютом есть мне слишком опасно.', literary: 'Нет, прыжки с парашютом для меня слишком опасны.' },
        'Ich mache lieber Eisklettern.': { literal: 'Я делаю лучше ледолазание.', literary: 'Лучше займусь ледолазанием.' },
      },
      vocabulary: [
        { de: 'der Extremsport', ru: 'экстремальный спорт', gender: 'maskulin', collocation: 'Extremsport machen', example: 'Hey Tim, hast du gewusst, dass Stefan Extremsport macht?' },
        { de: 'die Sportart', plural: 'die Sportarten', ru: 'вид спорта', gender: 'feminin', collocation: 'eine Sportart wählen', example: 'Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll.' },
        { de: 'das Eisklettern', ru: 'ледолазание', gender: 'neutrum', collocation: 'Eisklettern machen', example: 'Ich mache lieber Eisklettern.' },
        { de: 'das Fallschirmspringen', ru: 'прыжки с парашютом', gender: 'neutrum', collocation: 'Fallschirmspringen ist gefährlich', example: 'Nein, Fallschirmspringen ist mir zu gefährlich.' },
        { de: 'wählen', ru: 'выбирать', type: 'verb', forms: 'wähle, wählte, hat gewählt', example: 'Ich möchte auch Extremsport machen, aber ich weiß nicht, welche Sportart ich wählen soll.' },
        { de: 'gefährlich', ru: 'опасный', type: 'adj', example: 'Nein, Fallschirmspringen ist mir zu gefährlich.' },
        { de: 'spitze', ru: 'классно, круто', type: 'adj', example: 'Das finde ich spitze!' },
        { de: 'lieber', ru: 'лучше, охотнее', type: 'adv', example: 'Ich mache lieber Eisklettern.' },
      ],
      practiceSentences: [
        { de: 'Ich mache gerne Sport.', ru: 'Я охотно занимаюсь спортом.', note: 'V2' },
        { de: 'Das ist mir zu schwer.', ru: 'Это для меня слишком сложно.', note: 'V2' },
        { de: 'Ich weiß nicht, was ich machen soll.', ru: 'Я не знаю, что мне делать.', note: 'V2, конец' },
        { de: 'Hast du das gewusst?', ru: 'Ты это знал?', note: 'Perfekt' },
        { de: 'Ich möchte Ski fahren.', ru: 'Я хочу кататься на лыжах.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Welchen Extremsport möchte der Sprecher machen?',
        ru: 'Каким экстремальным спортом хочет заниматься говорящий?',
        options: [
          { de: 'Bungee-Jumping', ru: 'Банджи-джампинг' },
          { de: 'Fallschirmspringen', ru: 'Прыжки с парашютом' },
          { de: 'Eisklettern', ru: 'Ледолазание' },
        ],
        correct: 2,
        explanation: 'В конце текста говорящий решает: "Nein, Fallschirmspringen ist mir zu gefährlich. Ich mache lieber Eisklettern."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Supermarkt Superspar',
      type: 'объявление в магазине',
      text: 'Guten Tag, meine Damen und Herren, und herzlich willkommen im Supermarkt Superspar! Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent. Greifen Sie zu, solange der Vorrat reicht!',
      sentenceTranslations: {
        'Guten Tag, meine Damen und Herren, und herzlich willkommen im Supermarkt Superspar!': { literal: 'Добрый день, мои дамы и господа, и сердечно добро пожаловать в супермаркете Суперспар!', literary: 'Добрый день, дамы и господа, добро пожаловать в супермаркет "Суперспар"!' },
        'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.': { literal: 'Сегодня имеем мы совсем особенные предложения для вас: один килограмм помидоров за только 90 центов, один килограмм картофеля только 50 центов и один килограмм лука за только 30 центов.', literary: 'Сегодня у нас особые предложения для вас: килограмм помидоров всего за 90 центов, килограмм картофеля за 50 центов и килограмм лука за 30 центов.' },
        'Greifen Sie zu, solange der Vorrat reicht!': { literal: 'Хватайте, пока запас хватает!', literary: 'Успевайте купить, пока есть в наличии!' },
      },
      vocabulary: [
        { de: 'der Supermarkt', plural: 'die Supermärkte', ru: 'супермаркет', gender: 'maskulin', collocation: 'im Supermarkt einkaufen', example: 'Guten Tag, meine Damen und Herren, und herzlich willkommen im Supermarkt Superspar!' },
        { de: 'das Angebot', plural: 'die Angebote', ru: 'предложение, акция', gender: 'neutrum', collocation: 'besondere Angebote', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.' },
        { de: 'die Tomate', plural: 'die Tomaten', ru: 'помидор', gender: 'feminin', collocation: 'ein Kilo Tomaten', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.' },
        { de: 'die Kartoffel', plural: 'die Kartoffeln', ru: 'картофель', gender: 'feminin', collocation: 'ein Kilo Kartoffeln', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.' },
        { de: 'die Zwiebel', plural: 'die Zwiebeln', ru: 'лук', gender: 'feminin', collocation: 'ein Kilo Zwiebeln', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.' },
        { de: 'der Vorrat', plural: 'die Vorräte', ru: 'запас', gender: 'maskulin', collocation: 'solange der Vorrat reicht', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
        { de: 'zugreifen', ru: 'хватать, брать', type: 'verb', forms: 'greife zu, griff zu, hat zugegriffen', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
        { de: 'besondere', ru: 'особый', type: 'adj', example: 'Heute haben wir ganz besondere Angebote für Sie: ein Kilo Tomaten für nur 90 Cent, ein Kilo Kartoffeln nur 50 Cent und ein Kilo Zwiebeln für nur 30 Cent.' },
      ],
      practiceSentences: [
        { de: 'Wir haben tolle Angebote.', ru: 'У нас есть отличные предложения.', note: 'V2' },
        { de: 'Kaufen Sie frisches Obst!', ru: 'Покупайте свежие фрукты!', note: 'императив' },
        { de: 'Das kostet nur zwei Euro.', ru: 'Это стоит всего два евро.', note: 'V2' },
        { de: 'Greifen Sie schnell zu!', ru: 'Берите быстро!', note: 'отделяемая приставка' },
        { de: 'Der Vorrat reicht noch.', ru: 'Запаса ещё хватает.', note: 'V2' },
      ],
      question: {
        de: 'Was kostet ein Kilo Kartoffeln?',
        ru: 'Сколько стоит килограмм картофеля?',
        options: [
          { de: '30 Cent', ru: '30 центов' },
          { de: '50 Cent', ru: '50 центов' },
          { de: '90 Cent', ru: '90 центов' },
        ],
        correct: 1,
        explanation: 'В объявлении говорится: "ein Kilo Kartoffeln nur 50 Cent".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Barbara',
      type: 'телефонное сообщение',
      text: 'Hallo Claudia, hier ist Barbara. Heute Abend ist doch die Party von Holger und ich weiß nicht, was ich anziehen soll. Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse? Vielleicht ziehe ich einen Rock mit einer Bluse an. Warte, ich hab\'s! Ich zieh das schwarze Kleid an. Bitte ruf mich an und sag mir, wie du das findest. Danke.',
      sentenceTranslations: {
        'Hallo Claudia, hier ist Barbara.': { literal: 'Привет Клаудия, здесь есть Барбара.', literary: 'Привет, Клаудия, это Барбара.' },
        'Heute Abend ist doch die Party von Holger und ich weiß nicht, was ich anziehen soll.': { literal: 'Сегодня вечером есть же вечеринка от Хольгера и я знаю не, что я надеть должна.', literary: 'Сегодня вечером же вечеринка у Хольгера, и я не знаю, что надеть.' },
        'Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse?': { literal: 'Должна я платье надеть или лучше джинсы с блузкой?', literary: 'Мне надеть платье или лучше джинсы с блузкой?' },
        'Vielleicht ziehe ich einen Rock mit einer Bluse an.': { literal: 'Возможно надеваю я юбку с блузкой.', literary: 'Может, надену юбку с блузкой.' },
        'Warte, ich hab\'s!': { literal: 'Подожди, я имею это!', literary: 'Стоп, придумала!' },
        'Ich zieh das schwarze Kleid an.': { literal: 'Я надеваю чёрное платье.', literary: 'Надену чёрное платье.' },
        'Bitte ruf mich an und sag mir, wie du das findest.': { literal: 'Пожалуйста позвони мне и скажи мне, как ты это находишь.', literary: 'Пожалуйста, позвони и скажи, что думаешь.' },
        'Danke.': { literal: 'Спасибо.', literary: 'Спасибо.' },
      },
      vocabulary: [
        { de: 'die Party', plural: 'die Partys', ru: 'вечеринка', gender: 'feminin', collocation: 'die Party von Holger', example: 'Heute Abend ist doch die Party von Holger und ich weiß nicht, was ich anziehen soll.' },
        { de: 'das Kleid', plural: 'die Kleider', ru: 'платье', gender: 'neutrum', collocation: 'ein Kleid anziehen', example: 'Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse?' },
        { de: 'die Bluse', plural: 'die Blusen', ru: 'блузка', gender: 'feminin', collocation: 'Jeans mit einer Bluse', example: 'Soll ich ein Kleid anziehen oder lieber Jeans mit einer Bluse?' },
        { de: 'der Rock', plural: 'die Röcke', ru: 'юбка', gender: 'maskulin', collocation: 'einen Rock anziehen', example: 'Vielleicht ziehe ich einen Rock mit einer Bluse an.' },
        { de: 'anziehen', ru: 'надевать', type: 'verb', forms: 'ziehe an, zog an, hat angezogen', example: 'Ich zieh das schwarze Kleid an.' },
        { de: 'schwarz', ru: 'чёрный', type: 'adj', example: 'Ich zieh das schwarze Kleid an.' },
        { de: 'vielleicht', ru: 'возможно', type: 'adv', example: 'Vielleicht ziehe ich einen Rock mit einer Bluse an.' },
      ],
      practiceSentences: [
        { de: 'Ich ziehe eine Jacke an.', ru: 'Я надеваю куртку.', note: 'отделяемая приставка' },
        { de: 'Was soll ich heute tragen?', ru: 'Что мне сегодня носить?', note: 'модальный + инфинитив' },
        { de: 'Die Party ist heute Abend.', ru: 'Вечеринка сегодня вечером.', note: 'V2' },
        { de: 'Ruf mich bitte an!', ru: 'Позвони мне, пожалуйста!', note: 'отделяемая приставка' },
        { de: 'Ich weiß nicht, was ich anziehen soll.', ru: 'Я не знаю, что мне надеть.', note: 'V2, конец' },
      ],
      question: {
        de: 'Was will Barbara zur Party anziehen?',
        ru: 'Что хочет надеть Барбара на вечеринку?',
        options: [
          { de: 'Jeans mit einer Bluse', ru: 'Джинсы с блузкой' },
          { de: 'Rock mit einer Bluse', ru: 'Юбку с блузкой' },
          { de: 'Das schwarze Kleid', ru: 'Чёрное платье' },
        ],
        correct: 2,
        explanation: 'Barbara принимает решение: "Warte, ich hab\'s! Ich zieh das schwarze Kleid an."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Kochkurs',
      type: 'диалог',
      text: 'Hallo Linda! Freust du dich auch schon auf unseren Kochkurs morgen? Hallo Tommy! Ja klar, freue ich mich sehr darauf. Gerade war ich im Supermarkt und habe Orangensaft und Apfelsaft gekauft, wie mir Frau Meier, unsere Kursleiterin, gesagt hat. Hast du auch mit den anderen gesprochen? Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit. Aha, hoffentlich wird sie die richtigen Äpfel aussuchen, schön rot und saftig. Und was besorgst du? Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit. Sonst noch etwas? Frau Meier bringt Würstchen und Elli bringt Kartoffeln mit, wichtig für den Kartoffelsalat. Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer. Ja, das hoffe ich auch. Den sauren Obstsalat mag ich auch nicht. Ja, dann mal sehen, wie unser Essen wird. Obwohl ich lieber Kartoffeln mit Fisch essen möchte. Kartoffeln mit Fisch? Das schmeckt nur dir! Du hast ja keine Ahnung!',
      sentenceTranslations: {
        'Hallo Linda!': { literal: 'Привет Линда!', literary: 'Привет, Линда!' },
        'Freust du dich auch schon auf unseren Kochkurs morgen?': { literal: 'Радуешься ты себя тоже уже на наш кулинарный курс завтра?', literary: 'Ты тоже уже ждёшь завтрашний кулинарный курс?' },
        'Hallo Tommy!': { literal: 'Привет Томми!', literary: 'Привет, Томми!' },
        'Ja klar, freue ich mich sehr darauf.': { literal: 'Да конечно, радуюсь я себя очень на это.', literary: 'Конечно, очень жду.' },
        'Gerade war ich im Supermarkt und habe Orangensaft und Apfelsaft gekauft, wie mir Frau Meier, unsere Kursleiterin, gesagt hat.': { literal: 'Только что был я в супермаркете и имею апельсиновый сок и яблочный сок купил, как мне госпожа Майер, наша руководительница курса, сказала имеет.', literary: 'Я только что был в супермаркете и купил апельсиновый и яблочный сок, как сказала фрау Майер, наш преподаватель.' },
        'Hast du auch mit den anderen gesprochen?': { literal: 'Имеешь ты тоже с другими говорено?', literary: 'Ты тоже поговорил с остальными?' },
        'Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit.': { literal: 'Да, Анна приносит бананы и яблоки для фруктового салата с.', literary: 'Да, Анна принесёт бананы и яблоки для фруктового салата.' },
        'Aha, hoffentlich wird sie die richtigen Äpfel aussuchen, schön rot und saftig.': { literal: 'Ага, надеюсь будет она правильные яблоки выбрать, красиво красные и сочные.', literary: 'Ага, надеюсь, она выберет правильные яблоки — красные и сочные.' },
        'Und was besorgst du?': { literal: 'И что достаёшь ты?', literary: 'А что покупаешь ты?' },
        'Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit.': { literal: 'Я иду завтра рано к пекарю и приношу свежие булочки с.', literary: 'Завтра утром схожу к пекарю за свежими булочками.' },
        'Sonst noch etwas?': { literal: 'Иначе ещё что-то?', literary: 'Что-нибудь ещё?' },
        'Frau Meier bringt Würstchen und Elli bringt Kartoffeln mit, wichtig für den Kartoffelsalat.': { literal: 'Госпожа Майер приносит сосиски и Элли приносит картофель с, важно для картофельного салата.', literary: 'Фрау Майер принесёт сосиски, а Элли — картофель, важный для картофельного салата.' },
        'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.': { literal: 'Надеюсь забывает Ангелика сахар для фруктового салата не, иначе становится он кислый.', literary: 'Надеюсь, Ангелика не забудет сахар для фруктового салата, иначе он будет кислым.' },
        'Ja, das hoffe ich auch.': { literal: 'Да, это надеюсь я тоже.', literary: 'Да, я тоже на это надеюсь.' },
        'Den sauren Obstsalat mag ich auch nicht.': { literal: 'Кислый фруктовый салат нравлюсь я тоже не.', literary: 'Кислый фруктовый салат я тоже не люблю.' },
        'Ja, dann mal sehen, wie unser Essen wird.': { literal: 'Да, тогда разок посмотреть, как наша еда станет.', literary: 'Да, посмотрим, как получится наша еда.' },
        'Obwohl ich lieber Kartoffeln mit Fisch essen möchte.': { literal: 'Хотя я охотнее картофель с рыбой есть хотел бы.', literary: 'Хотя я бы предпочёл картофель с рыбой.' },
        'Kartoffeln mit Fisch?': { literal: 'Картофель с рыбой?', literary: 'Картофель с рыбой?' },
        'Das schmeckt nur dir!': { literal: 'Это вкусно только тебе!', literary: 'Это нравится только тебе!' },
        'Du hast ja keine Ahnung!': { literal: 'Ты имеешь же никакого понятия!', literary: 'Ты ничего не понимаешь!' },
      },
      vocabulary: [
        { de: 'der Kochkurs', plural: 'die Kochkurse', ru: 'кулинарный курс', gender: 'maskulin', collocation: 'unser Kochkurs morgen', example: 'Freust du dich auch schon auf unseren Kochkurs morgen?' },
        { de: 'die Kursleiterin', plural: 'die Kursleiterinnen', ru: 'руководитель курса (ж.)', gender: 'feminin', collocation: 'unsere Kursleiterin', example: 'Gerade war ich im Supermarkt und habe Orangensaft und Apfelsaft gekauft, wie mir Frau Meier, unsere Kursleiterin, gesagt hat.' },
        { de: 'der Obstsalat', plural: 'die Obstsalate', ru: 'фруктовый салат', gender: 'maskulin', collocation: 'für den Obstsalat', example: 'Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit.' },
        { de: 'das Brötchen', plural: 'die Brötchen', ru: 'булочка', gender: 'neutrum', collocation: 'frische Brötchen', example: 'Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit.' },
        { de: 'das Würstchen', plural: 'die Würstchen', ru: 'сосиска', gender: 'neutrum', collocation: 'Würstchen mitbringen', example: 'Frau Meier bringt Würstchen und Elli bringt Kartoffeln mit, wichtig für den Kartoffelsalat.' },
        { de: 'der Zucker', ru: 'сахар', gender: 'maskulin', collocation: 'Zucker für den Obstsalat', example: 'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.' },
        { de: 'der Bäcker', plural: 'die Bäcker', ru: 'пекарь, пекарня', gender: 'maskulin', collocation: 'zum Bäcker gehen', example: 'Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit.' },
        { de: 'sich freuen auf', ru: 'радоваться чему-то', type: 'verb', forms: 'freue mich, freute mich, hat sich gefreut', example: 'Freust du dich auch schon auf unseren Kochkurs morgen?' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringe mit, brachte mit, hat mitgebracht', example: 'Ja, Anna bringt Bananen und Äpfel für den Obstsalat mit.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergesse, vergaß, hat vergessen', example: 'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.' },
        { de: 'schmecken', ru: 'быть вкусным', type: 'verb', forms: 'schmecke, schmeckte, hat geschmeckt', example: 'Das schmeckt nur dir!' },
        { de: 'frisch', ru: 'свежий', type: 'adj', example: 'Ich gehe morgen früh zum Bäcker und bringe frische Brötchen mit.' },
        { de: 'sauer', ru: 'кислый', type: 'adj', example: 'Hoffentlich vergisst Angelika den Zucker für den Obstsalat nicht, sonst wird er sauer.' },
        { de: 'hoffentlich', ru: 'надеюсь', type: 'adv', example: 'Aha, hoffentlich wird sie die richtigen Äpfel aussuchen, schön rot und saftig.' },
      ],
      practiceSentences: [
        { de: 'Ich freue mich auf morgen.', ru: 'Я радуюсь завтрашнему дню.', note: 'возвратный глагол' },
        { de: 'Bring bitte Brot mit!', ru: 'Принеси, пожалуйста, хлеб!', note: 'отделяемая приставка' },
        { de: 'Das schmeckt mir gut.', ru: 'Мне это вкусно.', note: 'V2' },
        { de: 'Ich gehe zum Supermarkt.', ru: 'Я иду в супермаркет.', note: 'V2' },
        { de: 'Sie vergisst nichts.', ru: 'Она ничего не забывает.', note: 'V2' },
      ],
      question: {
        de: 'Was bringt Anna für den Kochkurs mit?',
        ru: 'Что приносит Анна на кулинарный курс?',
        options: [
          { de: 'Orangensaft und Apfelsaft', ru: 'Апельсиновый и яблочный сок' },
          { de: 'Bananen und Äpfel', ru: 'Бананы и яблоки' },
          { de: 'Würstchen und Kartoffeln', ru: 'Сосиски и картофель' },
        ],
        correct: 1,
        explanation: 'Tommy говорит: "Anna bringt Bananen und Äpfel für den Obstsalat mit."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Nachtisch',
      type: 'диалог',
      text: 'Das hat sehr gut geschmeckt! Du wirst ein prima Koch! Dankeschön! Möchtest du vielleicht einen Nachtisch? Ich würde gerne einen Joghurt essen. Und du? Ich habe außer Joghurt auch Eis und Obst. Eis lieber nicht und Obst mag ich nicht. Obst schmeckt mir auch nicht, außer Bananen. Also Joghurt? Ja, gern.',
      sentenceTranslations: {
        'Das hat sehr gut geschmeckt!': { literal: 'Это имеет очень хорошо вкус имело!', literary: 'Было очень вкусно!' },
        'Du wirst ein prima Koch!': { literal: 'Ты становишься отличный повар!', literary: 'Из тебя выйдет отличный повар!' },
        'Dankeschön!': { literal: 'Спасибо!', literary: 'Спасибо!' },
        'Möchtest du vielleicht einen Nachtisch?': { literal: 'Хотел бы ты возможно десерт?', literary: 'Хочешь десерт?' },
        'Ich würde gerne einen Joghurt essen.': { literal: 'Я бы охотно йогурт есть.', literary: 'Я бы съел йогурт.' },
        'Und du?': { literal: 'И ты?', literary: 'А ты?' },
        'Ich habe außer Joghurt auch Eis und Obst.': { literal: 'Я имею кроме йогурта также мороженое и фрукты.', literary: 'У меня есть не только йогурт, но и мороженое с фруктами.' },
        'Eis lieber nicht und Obst mag ich nicht.': { literal: 'Мороженое лучше нет и фрукты нравлюсь я не.', literary: 'Мороженое лучше не надо, и фрукты я не люблю.' },
        'Obst schmeckt mir auch nicht, außer Bananen.': { literal: 'Фрукты вкусны мне тоже не, кроме бананов.', literary: 'Фрукты мне тоже не нравятся, кроме бананов.' },
        'Also Joghurt?': { literal: 'Итак йогурт?', literary: 'Значит, йогурт?' },
        'Ja, gern.': { literal: 'Да, охотно.', literary: 'Да, с удовольствием.' },
      },
      vocabulary: [
        { de: 'der Koch', plural: 'die Köche', ru: 'повар', gender: 'maskulin', collocation: 'ein prima Koch', example: 'Du wirst ein prima Koch!' },
        { de: 'der Nachtisch', plural: 'die Nachtische', ru: 'десерт', gender: 'maskulin', collocation: 'einen Nachtisch essen', example: 'Möchtest du vielleicht einen Nachtisch?' },
        { de: 'der Joghurt', plural: 'die Joghurts', ru: 'йогурт', gender: 'maskulin', collocation: 'einen Joghurt essen', example: 'Ich würde gerne einen Joghurt essen.' },
        { de: 'das Eis', ru: 'мороженое', gender: 'neutrum', collocation: 'Eis essen', example: 'Ich habe außer Joghurt auch Eis und Obst.' },
        { de: 'das Obst', ru: 'фрукты', gender: 'neutrum', collocation: 'Obst mögen', example: 'Eis lieber nicht und Obst mag ich nicht.' },
        { de: 'mögen', ru: 'любить, нравиться', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Eis lieber nicht und Obst mag ich nicht.' },
        { de: 'prima', ru: 'отличный', type: 'adj', example: 'Du wirst ein prima Koch!' },
        { de: 'außer', ru: 'кроме', type: 'adv', example: 'Obst schmeckt mir auch nicht, außer Bananen.' },
      ],
      practiceSentences: [
        { de: 'Das Essen schmeckt gut.', ru: 'Еда вкусная.', note: 'V2' },
        { de: 'Ich würde gerne Eis essen.', ru: 'Я бы съел мороженое.', note: 'Konjunktiv II + инфинитив' },
        { de: 'Möchtest du einen Tee?', ru: 'Хочешь чай?', note: 'модальный V2' },
        { de: 'Ich mag kein Obst.', ru: 'Я не люблю фрукты.', note: 'V2' },
        { de: 'Das hat gut geschmeckt.', ru: 'Было вкусно.', note: 'Perfekt' },
      ],
      question: {
        de: 'Was möchte der Gast als Nachtisch?',
        ru: 'Что хочет гость на десерт?',
        options: [
          { de: 'Eis', ru: 'Мороженое' },
          { de: 'Obst', ru: 'Фрукты' },
          { de: 'Joghurt', ru: 'Йогурт' },
        ],
        correct: 2,
        explanation: 'Гость говорит: "Ich würde gerne einen Joghurt essen" и в конце подтверждает: "Also Joghurt? - Ja, gern."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Frank krank',
      type: 'диалог',
      text: 'Hi Frank, wie geht\'s? Ich fühle mich nicht wohl. Was ist? Hast du Kopfschmerzen oder tut dein Bauch weh? Mit meinem Kopf und mit meinem Bauch ist alles okay. Ich kann nur nichts essen, weil mein Hals furchtbar weh tut. Warst du schon beim Arzt? Heute Nachmittag gehe ich hin.',
      sentenceTranslations: {
        'Hi Frank, wie geht\'s?': { literal: 'Привет Франк, как идёт это?', literary: 'Привет, Франк, как дела?' },
        'Ich fühle mich nicht wohl.': { literal: 'Я чувствую себя не хорошо.', literary: 'Я плохо себя чувствую.' },
        'Was ist?': { literal: 'Что есть?', literary: 'Что случилось?' },
        'Hast du Kopfschmerzen oder tut dein Bauch weh?': { literal: 'Имеешь ты головные боли или делает твой живот больно?', literary: 'У тебя болит голова или живот?' },
        'Mit meinem Kopf und mit meinem Bauch ist alles okay.': { literal: 'С моей головой и с моим животом есть все окей.', literary: 'С головой и животом всё в порядке.' },
        'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.': { literal: 'Я могу только ничего есть, потому что моё горло ужасно больно делает.', literary: 'Я просто не могу есть, потому что ужасно болит горло.' },
        'Warst du schon beim Arzt?': { literal: 'Был ты уже у врача?', literary: 'Ты уже был у врача?' },
        'Heute Nachmittag gehe ich hin.': { literal: 'Сегодня после обеда иду я туда.', literary: 'Пойду сегодня днём.' },
      },
      vocabulary: [
        { de: 'die Kopfschmerzen', ru: 'головная боль', gender: 'feminin', collocation: 'Kopfschmerzen haben', example: 'Hast du Kopfschmerzen oder tut dein Bauch weh?' },
        { de: 'der Bauch', plural: 'die Bäuche', ru: 'живот', gender: 'maskulin', collocation: 'der Bauch tut weh', example: 'Hast du Kopfschmerzen oder tut dein Bauch weh?' },
        { de: 'der Hals', plural: 'die Hälse', ru: 'горло', gender: 'maskulin', collocation: 'mein Hals tut weh', example: 'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.' },
        { de: 'der Arzt', plural: 'die Ärzte', ru: 'врач', gender: 'maskulin', collocation: 'beim Arzt sein', example: 'Warst du schon beim Arzt?' },
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'день (после обеда)', gender: 'maskulin', collocation: 'heute Nachmittag', example: 'Heute Nachmittag gehe ich hin.' },
        { de: 'sich fühlen', ru: 'чувствовать себя', type: 'verb', forms: 'fühle mich, fühlte mich, hat sich gefühlt', example: 'Ich fühle mich nicht wohl.' },
        { de: 'weh tun', ru: 'болеть', type: 'verb', forms: 'tut weh, tat weh, hat weh getan', example: 'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.' },
        { de: 'furchtbar', ru: 'ужасно', type: 'adv', example: 'Ich kann nur nichts essen, weil mein Hals furchtbar weh tut.' },
        { de: 'wohl', ru: 'хорошо (о самочувствии)', type: 'adv', example: 'Ich fühle mich nicht wohl.' },
      ],
      practiceSentences: [
        { de: 'Mir tut der Kopf weh.', ru: 'У меня болит голова.', note: 'V2' },
        { de: 'Ich fühle mich gut.', ru: 'Я чувствую себя хорошо.', note: 'возвратный глагол' },
        { de: 'Ich kann nicht schlafen.', ru: 'Я не могу спать.', note: 'модальный + инфинитив' },
        { de: 'Ich gehe zum Arzt.', ru: 'Я иду к врачу.', note: 'V2' },
        { de: 'Mein Bauch tut weh.', ru: 'У меня болит живот.', note: 'V2' },
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
        explanation: 'Frank объясняет: "Ich kann nur nichts essen, weil mein Hals furchtbar weh tut."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Studium',
      type: 'диалог',
      text: 'Du Isabel, weißt du schon, was du studieren möchtest? Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient. Deshalb möchte ich vielleicht Ärztin werden. Da verdient man sich ja genug und kann auch Menschen helfen. Und du? Also ich interessiere mich sehr für Computer. Deshalb würde ich gerne Informatik studieren.',
      sentenceTranslations: {
        'Du Isabel, weißt du schon, was du studieren möchtest?': { literal: 'Ты Изабель, знаешь ты уже, что ты изучать хочешь?', literary: 'Изабель, ты уже знаешь, что хочешь изучать?' },
        'Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient.': { literal: 'Собственно бы я охотно учительницей стать, но мой отец сказал, что человек там не много зарабатывает.', literary: 'Вообще-то я хотела бы стать учительницей, но папа сказал, что там мало зарабатывают.' },
        'Deshalb möchte ich vielleicht Ärztin werden.': { literal: 'Поэтому хочу я возможно врачом стать.', literary: 'Поэтому, возможно, стану врачом.' },
        'Da verdient man sich ja genug und kann auch Menschen helfen.': { literal: 'Там зарабатывает человек себе же достаточно и может также людям помогать.', literary: 'Там достаточно зарабатывают и можно помогать людям.' },
        'Und du?': { literal: 'И ты?', literary: 'А ты?' },
        'Also ich interessiere mich sehr für Computer.': { literal: 'Итак я интересуюсь себя очень компьютерами.', literary: 'А я очень интересуюсь компьютерами.' },
        'Deshalb würde ich gerne Informatik studieren.': { literal: 'Поэтому бы я охотно информатику изучать.', literary: 'Поэтому я хотел бы изучать информатику.' },
      },
      vocabulary: [
        { de: 'die Lehrerin', plural: 'die Lehrerinnen', ru: 'учительница', gender: 'feminin', collocation: 'Lehrerin werden', example: 'Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient.' },
        { de: 'die Ärztin', plural: 'die Ärztinnen', ru: 'врач (ж.)', gender: 'feminin', collocation: 'Ärztin werden', example: 'Deshalb möchte ich vielleicht Ärztin werden.' },
        { de: 'die Informatik', ru: 'информатика', gender: 'feminin', collocation: 'Informatik studieren', example: 'Deshalb würde ich gerne Informatik studieren.' },
        { de: 'der Computer', plural: 'die Computer', ru: 'компьютер', gender: 'maskulin', collocation: 'sich für Computer interessieren', example: 'Also ich interessiere mich sehr für Computer.' },
        { de: 'studieren', ru: 'изучать (в вузе)', type: 'verb', forms: 'studiere, studierte, hat studiert', example: 'Deshalb würde ich gerne Informatik studieren.' },
        { de: 'verdienen', ru: 'зарабатывать', type: 'verb', forms: 'verdiene, verdiente, hat verdient', example: 'Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient.' },
        { de: 'sich interessieren für', ru: 'интересоваться', type: 'verb', forms: 'interessiere mich, interessierte mich, hat sich interessiert', example: 'Also ich interessiere mich sehr für Computer.' },
        { de: 'eigentlich', ru: 'вообще-то', type: 'adv', example: 'Eigentlich würde ich gerne Lehrerin werden, aber mein Vater hat gesagt, dass man da nicht viel verdient.' },
        { de: 'deshalb', ru: 'поэтому', type: 'adv', example: 'Deshalb möchte ich vielleicht Ärztin werden.' },
        { de: 'genug', ru: 'достаточно', type: 'adv', example: 'Da verdient man sich ja genug und kann auch Menschen helfen.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte Lehrer werden.', ru: 'Я хочу стать учителем.', note: 'модальный + инфинитив' },
        { de: 'Man verdient gut.', ru: 'Хорошо зарабатывают.', note: 'V2' },
        { de: 'Ich interessiere mich für Sport.', ru: 'Я интересуюсь спортом.', note: 'возвратный глагол' },
        { de: 'Was möchtest du studieren?', ru: 'Что ты хочешь изучать?', note: 'модальный V2' },
        { de: 'Ich würde gerne Arzt werden.', ru: 'Я хотел бы стать врачом.', note: 'Konjunktiv II + инфинитив' },
      ],
      question: {
        de: 'Was möchte der zweite Sprecher studieren?',
        ru: 'Что хочет изучать второй говорящий?',
        options: [
          { de: 'Lehramt', ru: 'Педагогику' },
          { de: 'Medizin', ru: 'Медицину' },
          { de: 'Informatik', ru: 'Информатику' },
        ],
        correct: 2,
        explanation: 'Второй говорящий отвечает: "Also ich interessiere mich sehr für Computer. Deshalb würde ich gerne Informatik studieren."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Sparen',
      type: 'диалог',
      text: 'Sag mal, hast du schon mal dein Taschengeld für etwas Bestimmtes gespart? Aber klar! Als ich ein neues Handy wollte, habe ich drei Monate sparen müssen. Möchtest du auch sparen? Ja, ich spare, weil ich neue Sportschuhe brauche. Mein Bruder spart auch, weil er einen Laptop kaufen möchte. Dann muss er aber lange sparen!',
      sentenceTranslations: {
        'Sag mal, hast du schon mal dein Taschengeld für etwas Bestimmtes gespart?': { literal: 'Скажи разок, имеешь ты уже разок твои карманные деньги для чего-то определённого сэкономлено?', literary: 'Скажи, ты когда-нибудь копил карманные деньги на что-то конкретное?' },
        'Aber klar!': { literal: 'Но конечно!', literary: 'Конечно!' },
        'Als ich ein neues Handy wollte, habe ich drei Monate sparen müssen.': { literal: 'Когда я новый телефон хотел, имею я три месяца копить должен был.', literary: 'Когда я хотел новый телефон, пришлось копить три месяца.' },
        'Möchtest du auch sparen?': { literal: 'Хочешь ты тоже копить?', literary: 'Ты тоже хочешь копить?' },
        'Ja, ich spare, weil ich neue Sportschuhe brauche.': { literal: 'Да, я коплю, потому что я новые спортивные туфли нуждаюсь.', literary: 'Да, я коплю на новые кроссовки.' },
        'Mein Bruder spart auch, weil er einen Laptop kaufen möchte.': { literal: 'Мой брат копит тоже, потому что он ноутбук купить хочет.', literary: 'Мой брат тоже копит на ноутбук.' },
        'Dann muss er aber lange sparen!': { literal: 'Тогда должен он но долго копить!', literary: 'Тогда ему придётся долго копить!' },
      },
      vocabulary: [
        { de: 'das Handy', plural: 'die Handys', ru: 'мобильный телефон', gender: 'neutrum', collocation: 'ein neues Handy', example: 'Als ich ein neues Handy wollte, habe ich drei Monate sparen müssen.' },
        { de: 'die Sportschuhe', ru: 'спортивная обувь', gender: 'feminin', collocation: 'neue Sportschuhe brauchen', example: 'Ja, ich spare, weil ich neue Sportschuhe brauche.' },
        { de: 'der Laptop', plural: 'die Laptops', ru: 'ноутбук', gender: 'maskulin', collocation: 'einen Laptop kaufen', example: 'Mein Bruder spart auch, weil er einen Laptop kaufen möchte.' },
        { de: 'der Bruder', plural: 'die Brüder', ru: 'брат', gender: 'maskulin', collocation: 'mein Bruder', example: 'Mein Bruder spart auch, weil er einen Laptop kaufen möchte.' },
        { de: 'sparen', ru: 'копить, экономить', type: 'verb', forms: 'spare, sparte, hat gespart', example: 'Sag mal, hast du schon mal dein Taschengeld für etwas Bestimmtes gespart?' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'brauche, brauchte, hat gebraucht', example: 'Ja, ich spare, weil ich neue Sportschuhe brauche.' },
        { de: 'bestimmt', ru: 'определённый', type: 'adj', example: 'Sag mal, hast du schon mal dein Taschengeld für etwas Bestimmtes gespart?' },
      ],
      practiceSentences: [
        { de: 'Ich spare für ein Fahrrad.', ru: 'Я коплю на велосипед.', note: 'V2' },
        { de: 'Er muss lange sparen.', ru: 'Ему нужно долго копить.', note: 'модальный + инфинитив' },
        { de: 'Hast du schon gespart?', ru: 'Ты уже накопил?', note: 'Perfekt' },
        { de: 'Ich brauche neue Schuhe.', ru: 'Мне нужны новые туфли.', note: 'V2' },
        { de: 'Als ich jung war, sparte ich viel.', ru: 'Когда я был молодым, я много копил.', note: 'als + V-конец, V2' },
      ],
      question: {
        de: 'Wofür spart der Sprecher?',
        ru: 'На что копит говорящий?',
        options: [
          { de: 'Für ein Handy', ru: 'На телефон' },
          { de: 'Für neue Sportschuhe', ru: 'На новые кроссовки' },
          { de: 'Für einen Laptop', ru: 'На ноутбук' },
        ],
        correct: 1,
        explanation: 'Говорящий отвечает: "Ja, ich spare, weil ich neue Sportschuhe brauche."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Nach der Schule',
      type: 'диалог',
      text: 'Hallo Frank, was machst du heute nach der Schule? Vielleicht spiele ich ein bisschen Playstation. Ich möchte ein neues Spiel ausprobieren. Das ist doch langweilig! Gehen wir doch lieber ins Stadion! Heute ist ein super Spiel: VfB Stuttgart gegen Bayern München. Gute Idee! Das wusste ich nicht. Morgen gehen wir Tennis spielen, okay?',
      sentenceTranslations: {
        'Hallo Frank, was machst du heute nach der Schule?': { literal: 'Привет Франк, что делаешь ты сегодня после школы?', literary: 'Привет, Франк, что делаешь после школы?' },
        'Vielleicht spiele ich ein bisschen Playstation.': { literal: 'Возможно играю я немного плейстейшн.', literary: 'Может, немного поиграю в приставку.' },
        'Ich möchte ein neues Spiel ausprobieren.': { literal: 'Я хочу новую игру попробовать.', literary: 'Хочу попробовать новую игру.' },
        'Das ist doch langweilig!': { literal: 'Это есть же скучно!', literary: 'Да это же скучно!' },
        'Gehen wir doch lieber ins Stadion!': { literal: 'Пойдём мы же лучше на стадион!', literary: 'Давай лучше на стадион!' },
        'Heute ist ein super Spiel: VfB Stuttgart gegen Bayern München.': { literal: 'Сегодня есть супер игра: ВфБ Штутгарт против Байерн Мюнхен.', literary: 'Сегодня отличный матч: Штутгарт против Баварии.' },
        'Gute Idee!': { literal: 'Хорошая идея!', literary: 'Отличная идея!' },
        'Das wusste ich nicht.': { literal: 'Это знал я не.', literary: 'Я не знал.' },
        'Morgen gehen wir Tennis spielen, okay?': { literal: 'Завтра идём мы теннис играть, окей?', literary: 'Завтра играем в теннис, идёт?' },
      },
      vocabulary: [
        { de: 'die Schule', plural: 'die Schulen', ru: 'школа', gender: 'feminin', collocation: 'nach der Schule', example: 'Hallo Frank, was machst du heute nach der Schule?' },
        { de: 'das Spiel', plural: 'die Spiele', ru: 'игра, матч', gender: 'neutrum', collocation: 'ein neues Spiel', example: 'Ich möchte ein neues Spiel ausprobieren.' },
        { de: 'das Stadion', plural: 'die Stadien', ru: 'стадион', gender: 'neutrum', collocation: 'ins Stadion gehen', example: 'Gehen wir doch lieber ins Stadion!' },
        { de: 'ausprobieren', ru: 'пробовать, испытывать', type: 'verb', forms: 'probiere aus, probierte aus, hat ausprobiert', example: 'Ich möchte ein neues Spiel ausprobieren.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Das ist doch langweilig!' },
      ],
      practiceSentences: [
        { de: 'Ich spiele nach der Schule.', ru: 'Я играю после школы.', note: 'V2' },
        { de: 'Gehen wir ins Kino!', ru: 'Пойдём в кино!', note: 'императив 1 л. мн.ч.' },
        { de: 'Das ist langweilig.', ru: 'Это скучно.', note: 'V2' },
        { de: 'Ich möchte etwas ausprobieren.', ru: 'Я хочу что-то попробовать.', note: 'модальный + инфинитив' },
        { de: 'Morgen spielen wir Fußball.', ru: 'Завтра играем в футбол.', note: 'V2' },
      ],
      question: {
        de: 'Wohin gehen die Freunde heute?',
        ru: 'Куда идут друзья сегодня?',
        options: [
          { de: 'Tennis spielen', ru: 'Играть в теннис' },
          { de: 'Playstation spielen', ru: 'Играть в приставку' },
          { de: 'Ins Stadion', ru: 'На стадион' },
        ],
        correct: 2,
        explanation: 'После предложения "Gehen wir doch lieber ins Stadion!" Frank соглашается: "Gute Idee!", а Tennis оставляют на завтра.'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Jonas',
      type: 'интервью',
      text: 'Hallo! Hier ist Annette von eurem beliebten Jugendzentrum Highlight. Bei mir ist heute Jonas und unser Thema ist Freizeit in der Gruppe. Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können. Willkommen im Studio, Jonas! Hallo! Also, was meinst du, wie können Jungs, aber auch Mädchen ihre gemeinsame Freizeit sinnvoll gestalten? Da fällt mir als Erstes Sport ein. Naja, gemeinsam erlebte Freizeit muss Spaß machen, aber es muss nicht immer Sport sein. Interessant, so was gerade von einem Jungen zu hören! Was schlägst du also vor? Schau, das Jugendzentrum in jedem Stadtteil bietet Verschiedenes an: Malkurse, Musikabende, und das, was neu ist, sind Workshops für Jugendliche, die Spaß am Filme machen haben. Filme machen, mal was Neues! Also das hört sich wirklich interessant an. Und machen da Jugendliche auch gern mit? Na klar! In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft. 15 Teilnehmer? Nicht schlecht! 50, nicht 15! Das ist ja wirklich toll! Wie oft trefft ihr euch jede Woche? Und wie viel müsst ihr bezahlen, um teilnehmen zu können? Wir treffen uns mindestens dreimal die Woche, manchmal auch jeden Tag, sogar auch am Wochenende. Und alles zahlt die Stadt! So oft? Wird das nicht langweilig? Nein, auf keinen Fall! Jeden Tag kommen nur die Jugendlichen, die am Filme machen teilnehmen. Und du hast gesagt, alles bezahlt die Stadt? Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts. Herzlichen Dank, Jonas! Ich bin sicher, dass alles war für unser Publikum von großem Interesse. Danke auch!',
      sentenceTranslations: {
        'Hallo!': { literal: 'Привет!', literary: 'Привет!' },
        'Hier ist Annette von eurem beliebten Jugendzentrum Highlight.': { literal: 'Здесь есть Аннетте от вашего популярного молодёжного центра Хайлайт.', literary: 'Это Аннетте из вашего любимого молодёжного центра "Хайлайт".' },
        'Bei mir ist heute Jonas und unser Thema ist Freizeit in der Gruppe.': { literal: 'У меня есть сегодня Йонас и наша тема есть свободное время в группе.', literary: 'Сегодня у нас в студии Йонас, и наша тема — досуг в группе.' },
        'Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können.': { literal: 'Йонас даёт нам советы, что молодые люди как вы в их свободном времени совместно предпринимать могут.', literary: 'Йонас даст нам советы, чем молодёжь может заняться вместе в свободное время.' },
        'Willkommen im Studio, Jonas!': { literal: 'Добро пожаловать в студию, Йонас!', literary: 'Добро пожаловать в студию, Йонас!' },
        'Also, was meinst du, wie können Jungs, aber auch Mädchen ihre gemeinsame Freizeit sinnvoll gestalten?': { literal: 'Итак, что думаешь ты, как могут парни, но также девушки их совместное свободное время осмысленно оформить?', literary: 'Итак, как ты думаешь, как молодёжь может с пользой проводить время вместе?' },
        'Da fällt mir als Erstes Sport ein.': { literal: 'Тут падает мне как первое спорт в.', literary: 'Первое, что приходит в голову — спорт.' },
        'Naja, gemeinsam erlebte Freizeit muss Spaß machen, aber es muss nicht immer Sport sein.': { literal: 'Ну, совместно пережитое свободное время должно удовольствие делать, но это должно не всегда спорт быть.', literary: 'Совместный досуг должен быть весёлым, но это не обязательно спорт.' },
        'Interessant, so was gerade von einem Jungen zu hören!': { literal: 'Интересно, такое что именно от одного мальчика слышать!', literary: 'Интересно слышать это от парня!' },
        'Was schlägst du also vor?': { literal: 'Что предлагаешь ты итак?', literary: 'Что ты предлагаешь?' },
        'Schau, das Jugendzentrum in jedem Stadtteil bietet Verschiedenes an: Malkurse, Musikabende, und das, was neu ist, sind Workshops für Jugendliche, die Spaß am Filme machen haben.': { literal: 'Смотри, молодёжный центр в каждом районе предлагает различное: курсы рисования, музыкальные вечера, и то, что новое есть, есть мастер-классы для молодых, которые удовольствие в фильмов делании имеют.', literary: 'Смотри, молодёжный центр в каждом районе предлагает разное: курсы рисования, музыкальные вечера, а новинка — мастер-классы для тех, кто любит снимать фильмы.' },
        'Filme machen, mal was Neues!': { literal: 'Фильмы делать, разок что-то новое!', literary: 'Снимать фильмы — вот это ново!' },
        'Also das hört sich wirklich interessant an.': { literal: 'Итак это слышит себя действительно интересно.', literary: 'Звучит действительно интересно.' },
        'Und machen da Jugendliche auch gern mit?': { literal: 'И делают там молодые люди тоже охотно с?', literary: 'И молодёжь охотно участвует?' },
        'Na klar!': { literal: 'Ну конечно!', literary: 'Конечно!' },
        'In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft.': { literal: 'В моём молодёжном центре есть уже свыше 50 молодых членов одной группы досуга, которая себя регулярно для совместных активностей встречает.', literary: 'В нашем центре уже больше 50 участников группы досуга, которая регулярно встречается для совместных занятий.' },
        '15 Teilnehmer?': { literal: '15 участников?', literary: '15 участников?' },
        'Nicht schlecht!': { literal: 'Не плохо!', literary: 'Неплохо!' },
        '50, nicht 15!': { literal: '50, не 15!', literary: '50, а не 15!' },
        'Das ist ja wirklich toll!': { literal: 'Это есть же действительно здорово!', literary: 'Это действительно здорово!' },
        'Wie oft trefft ihr euch jede Woche?': { literal: 'Как часто встречаетесь вы себя каждую неделю?', literary: 'Как часто вы встречаетесь каждую неделю?' },
        'Und wie viel müsst ihr bezahlen, um teilnehmen zu können?': { literal: 'И как много должны вы платить, чтобы участвовать мочь?', literary: 'И сколько вы должны платить, чтобы участвовать?' },
        'Wir treffen uns mindestens dreimal die Woche, manchmal auch jeden Tag, sogar auch am Wochenende.': { literal: 'Мы встречаемся минимум трижды неделю, иногда также каждый день, даже также в выходные.', literary: 'Мы встречаемся минимум три раза в неделю, иногда каждый день, даже по выходным.' },
        'Und alles zahlt die Stadt!': { literal: 'И всё платит город!', literary: 'И всё оплачивает город!' },
        'So oft?': { literal: 'Так часто?', literary: 'Так часто?' },
        'Wird das nicht langweilig?': { literal: 'Становится это не скучно?', literary: 'Не становится скучно?' },
        'Nein, auf keinen Fall!': { literal: 'Нет, на никакой случай!', literary: 'Нет, ни в коем случае!' },
        'Jeden Tag kommen nur die Jugendlichen, die am Filme machen teilnehmen.': { literal: 'Каждый день приходят только молодые люди, которые в фильмов делании участвуют.', literary: 'Каждый день приходят только те, кто снимает фильмы.' },
        'Und du hast gesagt, alles bezahlt die Stadt?': { literal: 'И ты имеешь сказано, всё оплачивает город?', literary: 'И ты сказал, город всё оплачивает?' },
        'Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts.': { literal: 'Да, мы должны только желание и хорошее настроение приносить с, иначе ничего.', literary: 'Да, нужно только желание и хорошее настроение, больше ничего.' },
        'Herzlichen Dank, Jonas!': { literal: 'Сердечное спасибо, Йонас!', literary: 'Большое спасибо, Йонас!' },
        'Ich bin sicher, dass alles war für unser Publikum von großem Interesse.': { literal: 'Я есть уверен, что всё было для нашей публики от большого интереса.', literary: 'Я уверена, что всё это было очень интересно для наших слушателей.' },
        'Danke auch!': { literal: 'Спасибо тоже!', literary: 'И тебе спасибо!' },
      },
      vocabulary: [
        { de: 'das Jugendzentrum', plural: 'die Jugendzentren', ru: 'молодёжный центр', gender: 'neutrum', collocation: 'im Jugendzentrum', example: 'Hier ist Annette von eurem beliebten Jugendzentrum Highlight.' },
        { de: 'die Freizeit', ru: 'свободное время', gender: 'feminin', collocation: 'in der Freizeit', example: 'Bei mir ist heute Jonas und unser Thema ist Freizeit in der Gruppe.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'Tipps geben', example: 'Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können.' },
        { de: 'der Stadtteil', plural: 'die Stadtteile', ru: 'район города', gender: 'maskulin', collocation: 'in jedem Stadtteil', example: 'Schau, das Jugendzentrum in jedem Stadtteil bietet Verschiedenes an: Malkurse, Musikabende, und das, was neu ist, sind Workshops für Jugendliche, die Spaß am Filme machen haben.' },
        { de: 'das Mitglied', plural: 'die Mitglieder', ru: 'участник, член', gender: 'neutrum', collocation: '50 Mitglieder', example: 'In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft.' },
        { de: 'die Stadt', plural: 'die Städte', ru: 'город', gender: 'feminin', collocation: 'die Stadt zahlt', example: 'Und alles zahlt die Stadt!' },
        { de: 'die Lust', ru: 'желание', gender: 'feminin', collocation: 'Lust mitbringen', example: 'Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts.' },
        { de: 'die Laune', plural: 'die Launen', ru: 'настроение', gender: 'feminin', collocation: 'gute Laune', example: 'Ja, wir müssen nur Lust und gute Laune mitbringen, sonst nichts.' },
        { de: 'unternehmen', ru: 'предпринимать', type: 'verb', forms: 'unternehme, unternahm, hat unternommen', example: 'Jonas gibt uns Tipps, was Jugendliche wie ihr in ihrer Freizeit gemeinsam unternehmen können.' },
        { de: 'gestalten', ru: 'организовывать, оформлять', type: 'verb', forms: 'gestalte, gestaltete, hat gestaltet', example: 'Also, was meinst du, wie können Jungs, aber auch Mädchen ihre gemeinsame Freizeit sinnvoll gestalten?' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'biete an, bot an, hat angeboten', example: 'Schau, das Jugendzentrum in jedem Stadtteil bietet Verschiedenes an: Malkurse, Musikabende, und das, was neu ist, sind Workshops für Jugendliche, die Spaß am Filme machen haben.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'treffe mich, traf mich, hat sich getroffen', example: 'Wir treffen uns mindestens dreimal die Woche, manchmal auch jeden Tag, sogar auch am Wochenende.' },
        { de: 'teilnehmen', ru: 'участвовать', type: 'verb', forms: 'nehme teil, nahm teil, hat teilgenommen', example: 'Jeden Tag kommen nur die Jugendlichen, die am Filme machen teilnehmen.' },
        { de: 'gemeinsam', ru: 'совместный', type: 'adj', example: 'Also, was meinst du, wie können Jungs, aber auch Mädchen ihre gemeinsame Freizeit sinnvoll gestalten?' },
        { de: 'sinnvoll', ru: 'осмысленный, полезный', type: 'adj', example: 'Also, was meinst du, wie können Jungs, aber auch Mädchen ihre gemeinsame Freizeit sinnvoll gestalten?' },
        { de: 'beliebt', ru: 'популярный', type: 'adj', example: 'Hier ist Annette von eurem beliebten Jugendzentrum Highlight.' },
        { de: 'mindestens', ru: 'минимум', type: 'adv', example: 'Wir treffen uns mindestens dreimal die Woche, manchmal auch jeden Tag, sogar auch am Wochenende.' },
        { de: 'regelmäßig', ru: 'регулярно', type: 'adv', example: 'In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe, die sich regelmäßig für gemeinsame Aktivitäten trifft.' },
      ],
      practiceSentences: [
        { de: 'Mir fällt nichts ein.', ru: 'Мне ничего не приходит в голову.', note: 'отделяемая приставка' },
        { de: 'Wir treffen uns oft.', ru: 'Мы часто встречаемся.', note: 'возвратный глагол' },
        { de: 'Das macht Spaß.', ru: 'Это весело.', note: 'V2' },
        { de: 'Ich nehme am Kurs teil.', ru: 'Я участвую в курсе.', note: 'отделяемая приставка' },
        { de: 'Die Stadt zahlt alles.', ru: 'Город всё оплачивает.', note: 'V2' },
      ],
      question: {
        de: 'Wie viele jugendliche Mitglieder sind in Jonas\' Freizeitgruppe?',
        ru: 'Сколько молодых участников в группе досуга Йонаса?',
        options: [
          { de: '15', ru: '15' },
          { de: '50', ru: '50' },
          { de: 'Über 50', ru: 'Больше 50' },
        ],
        correct: 2,
        explanation: 'Jonas говорит: "In meinem Jugendzentrum sind schon über 50 jugendliche Mitglieder einer Freizeitgruppe."'
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

  grammarFocus: [
    'Konjunktiv II: "es wäre gut, wenn ich lernen würde" — условное наклонение',
    'dass-Nebensatz: "Ich glaube, dass ich zu wenig bekomme" — глагол в конце',
    'weil-Nebensatz: "weil mein Hals weh tut" — причина с глаголом в конце',
    'Modalverben + Infinitiv: "Ich möchte Spanisch lernen", "Ich kann nichts essen"',
    'Trennbare Verben: "anziehen/ausziehen", "mitbringen", "anrufen", "ausprobieren"',
    'sich freuen auf + Akk: "Freust du dich auf den Kochkurs?"',
    'werden + Beruf: "Lehrerin werden", "Ärztin werden" — без артикля',
    'Perfekt: "habe gespart", "hat geschmeckt", "hast gewusst"',
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для таба "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nКлючевые темы грамматики:\n- Konjunktiv II (wäre, würde lernen)\n- dass/weil-Nebensatz (глагол в конце)\n- Modalverben + Infinitiv (möchte lernen, kann essen)\n- Trennbare Verben (anziehen, mitbringen, anrufen)\n- sich freuen auf + Akkusativ\n- werden + Beruf (без артикля)\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Volker — Fremdsprache lernen).',
    },
  },
};

LESSONS.push(LESSON_14);
