/* ═══════════════════════════════════════════════════════════
   Lesson 16 — Goethe Zertifikat A2 Hören Modelltest 2025
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_16 = {
  id: 'lesson-16',
  number: 16,
  title: 'Goethe A2 Hören — Modelltest 2025',
  subtitle: 'Hobbys, Sport, Freizeit und Jobs — Radiosendung, Sportfest, Origami und Interview',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-16',
  videoUrl: 'https://www.youtube.com/watch?v=CMkncebWA4s',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Felix',
      type: 'интервью',
      text: 'Ich bin der Felix. In meiner Freizeit mache ich am liebsten Sudoku. Das ist keine asiatische Kampfsportart wie Judo. Das ist ein Zahlenrätsel. Man muss die Zahlen von 1 bis 9 von oben nach unten und von links nach rechts einschreiben. Ich habe viele Bücher und Hefte dazu und spiele auch im Internet.',
      sentenceTranslations: {
        'Ich bin der Felix.': { literal: 'Я есть Феликс', literary: 'Я Феликс.' },
        'In meiner Freizeit mache ich am liebsten Sudoku.': { literal: 'В моё свободное время делаю я охотнее всего судоку', literary: 'В свободное время я больше всего люблю судоку.' },
        'Das ist keine asiatische Kampfsportart wie Judo.': { literal: 'Это есть никакое азиатское боевое искусство как дзюдо', literary: 'Это не азиатское боевое искусство вроде дзюдо.' },
        'Das ist ein Zahlenrätsel.': { literal: 'Это есть числовая загадка', literary: 'Это числовая головоломка.' },
        'Man muss die Zahlen von 1 bis 9 von oben nach unten und von links nach rechts einschreiben.': { literal: 'Человек должен числа от 1 до 9 сверху вниз и слева направо вписывать', literary: 'Нужно вписывать числа от 1 до 9 сверху вниз и слева направо.' },
        'Ich habe viele Bücher und Hefte dazu und spiele auch im Internet.': { literal: 'Я имею много книг и тетрадей к этому и играю тоже в интернете', literary: 'У меня много книг и тетрадей по этому, и я также играю в интернете.' },
      },
      vocabulary: [
        { de: 'die Freizeit', ru: 'свободное время', gender: 'feminin', plural: 'die Freizeiten', example: 'In meiner Freizeit mache ich am liebsten Sudoku.' },
        { de: 'die Kampfsportart', ru: 'боевое искусство', gender: 'feminin', plural: 'die Kampfsportarten', example: 'Das ist keine asiatische Kampfsportart wie Judo.' },
        { de: 'das Zahlenrätsel', ru: 'числовая головоломка', gender: 'neutrum', plural: 'die Zahlenrätsel', example: 'Das ist ein Zahlenrätsel.' },
        { de: 'das Heft', ru: 'тетрадь', gender: 'neutrum', plural: 'die Hefte', example: 'Ich habe viele Bücher und Hefte dazu.' },
        { de: 'einschreiben', ru: 'вписывать', type: 'verb', forms: 'schreibt ein, schrieb ein, hat eingeschrieben', example: 'Man muss die Zahlen von 1 bis 9 einschreiben.' },
        { de: 'spannend', ru: 'захватывающий', type: 'adj', example: 'Das finde ich echt spannend.' },
      ],
      practiceSentences: [
        { de: 'Ich spiele gern Schach.', ru: 'Я охотно играю в шахматы.', note: 'V2' },
        { de: 'Man muss die Aufgabe lösen.', ru: 'Нужно решить задание.', note: 'модальный + инфинитив в конце' },
        { de: 'Das ist kein Problem.', ru: 'Это не проблема.', note: 'V2, отрицание' },
      ],
      question: {
        de: 'Was macht Felix in seiner Freizeit am liebsten?',
        ru: 'Что Феликс больше всего любит делать в свободное время?',
        options: [
          { de: 'Er spielt Judo', ru: 'Он занимается дзюдо' },
          { de: 'Er macht Zahlenrätsel', ru: 'Он решает числовые головоломки' },
          { de: 'Er liest nur Bücher', ru: 'Он только читает книги' },
        ],
        correct: 1,
        explanation: 'Феликс прямо говорит: "in meiner Freizeit mache ich am liebsten Sudoku" и объясняет, что это "Zahlenrätsel".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Lisa',
      type: 'интервью',
      text: 'Mein Name ist Lisa. Früher habe ich gerne Gameboy-Spiele gemacht, aber seit einigen Jahren mache ich nur noch richtige Computerspiele. Manchmal spiele ich mit Freunden zusammen und manchmal alleine. Am besten finde ich die Fantasiegeschichten. Die sind manchmal kompliziert, aber immer spannend. Mir gefallen die tollen Bilder und die coolen Ideen.',
      sentenceTranslations: {
        'Mein Name ist Lisa.': { literal: 'Моё имя есть Лиза', literary: 'Меня зовут Лиза.' },
        'Früher habe ich gerne Gameboy-Spiele gemacht, aber seit einigen Jahren mache ich nur noch richtige Computerspiele.': { literal: 'Раньше имею я охотно Gameboy-игры сделанные, но с некоторых лет делаю я только ещё настоящие компьютерные игры', literary: 'Раньше я любила играть в Gameboy, но уже несколько лет я играю только в настоящие компьютерные игры.' },
        'Manchmal spiele ich mit Freunden zusammen und manchmal alleine.': { literal: 'Иногда играю я с друзьями вместе и иногда одна', literary: 'Иногда я играю с друзьями, а иногда одна.' },
        'Am besten finde ich die Fantasiegeschichten.': { literal: 'Лучше всего нахожу я фантастические истории', literary: 'Больше всего мне нравятся фантастические истории.' },
        'Die sind manchmal kompliziert, aber immer spannend.': { literal: 'Они есть иногда сложные, но всегда захватывающие', literary: 'Они иногда сложные, но всегда захватывающие.' },
        'Mir gefallen die tollen Bilder und die coolen Ideen.': { literal: 'Мне нравятся классные картинки и крутые идеи', literary: 'Мне нравятся классные картинки и крутые идеи.' },
      },
      vocabulary: [
        { de: 'das Computerspiel', ru: 'компьютерная игра', gender: 'neutrum', plural: 'die Computerspiele', example: 'Seit einigen Jahren mache ich nur noch richtige Computerspiele.' },
        { de: 'die Fantasiegeschichte', ru: 'фантастическая история', gender: 'feminin', plural: 'die Fantasiegeschichten', example: 'Am besten finde ich die Fantasiegeschichten.' },
        { de: 'das Bild', ru: 'картинка, изображение', gender: 'neutrum', plural: 'die Bilder', example: 'Mir gefallen die tollen Bilder.' },
        { de: 'die Idee', ru: 'идея', gender: 'feminin', plural: 'die Ideen', example: 'Mir gefallen die coolen Ideen.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Mir gefallen die tollen Bilder und die coolen Ideen.' },
        { de: 'kompliziert', ru: 'сложный', type: 'adj', example: 'Die sind manchmal kompliziert, aber immer spannend.' },
      ],
      practiceSentences: [
        { de: 'Früher habe ich Tennis gespielt.', ru: 'Раньше я играл в теннис.', note: 'Perfekt: haben + Partizip II' },
        { de: 'Mir gefällt das Buch.', ru: 'Мне нравится книга.', note: 'gefallen + Dativ' },
        { de: 'Die Geschichten sind spannend.', ru: 'Истории захватывающие.', note: 'V2 с sein' },
      ],
      question: {
        de: 'Was findet Lisa an Computerspielen am besten?',
        ru: 'Что Лизе больше всего нравится в компьютерных играх?',
        options: [
          { de: 'Die Fantasiegeschichten', ru: 'Фантастические истории' },
          { de: 'Das Spielen mit dem Gameboy', ru: 'Игра на Gameboy' },
          { de: 'Das Spielen alleine', ru: 'Игра в одиночку' },
        ],
        correct: 0,
        explanation: 'Лиза говорит: "am besten finde ich die Fantasiegeschichten".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Silke',
      type: 'телефонное сообщение',
      text: 'Hallo Nina, hier ist Silke. Schade, dass du nicht da bist und dein Handy ist auch aus. Wir, also Hannes, Alex, Tina und ich, wollen am Samstag oder Sonntag eine Radtour ans Meer und doch nicht in die Berge machen. Das Wetter ist am Wochenende wieder super, aber schwimmen können wir nicht, ist noch zu kalt. Also ruf mich bitte an, wir wollen planen. Kommst du mit?',
      sentenceTranslations: {
        'Hallo Nina, hier ist Silke.': { literal: 'Привет Нина, здесь есть Сильке', literary: 'Привет, Нина, это Сильке.' },
        'Schade, dass du nicht da bist und dein Handy ist auch aus.': { literal: 'Жаль, что ты не там есть и твой мобильный есть тоже выключен', literary: 'Жаль, что тебя нет и твой телефон тоже выключен.' },
        'Wir, also Hannes, Alex, Tina und ich, wollen am Samstag oder Sonntag eine Radtour ans Meer und doch nicht in die Berge machen.': { literal: 'Мы, итак Ханнес, Алекс, Тина и я, хотим в субботу или воскресенье велотур к морю и всё-таки не в горы делать', literary: 'Мы, то есть Ханнес, Алекс, Тина и я, хотим в субботу или воскресенье поехать на велосипеде к морю, а не в горы.' },
        'Das Wetter ist am Wochenende wieder super, aber schwimmen können wir nicht, ist noch zu kalt.': { literal: 'Погода есть на выходных снова супер, но плавать можем мы не, есть ещё слишком холодно', literary: 'Погода на выходных снова отличная, но купаться мы не можем, ещё слишком холодно.' },
        'Also ruf mich bitte an, wir wollen planen.': { literal: 'Итак позвони мне пожалуйста, мы хотим планировать', literary: 'Позвони мне, пожалуйста, мы хотим спланировать.' },
        'Kommst du mit?': { literal: 'Идёшь ты с', literary: 'Ты поедешь с нами?' },
      },
      vocabulary: [
        { de: 'das Handy', ru: 'мобильный телефон', gender: 'neutrum', plural: 'die Handys', example: 'Dein Handy ist auch aus.' },
        { de: 'die Radtour', ru: 'велопрогулка', gender: 'feminin', plural: 'die Radtouren', example: 'Wir wollen eine Radtour ans Meer machen.' },
        { de: 'das Meer', ru: 'море', gender: 'neutrum', plural: 'die Meere', example: 'Wir wollen eine Radtour ans Meer machen.' },
        { de: 'das Wochenende', ru: 'выходные', gender: 'neutrum', plural: 'die Wochenenden', example: 'Das Wetter ist am Wochenende wieder super.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Also ruf mich bitte an.' },
        { de: 'mitkommen', ru: 'идти/ехать вместе', type: 'verb', forms: 'kommt mit, kam mit, ist mitgekommen', example: 'Kommst du mit?' },
        { de: 'planen', ru: 'планировать', type: 'verb', forms: 'plant, plante, hat geplant', example: 'Wir wollen planen.' },
      ],
      practiceSentences: [
        { de: 'Schade, dass es regnet.', ru: 'Жаль, что идёт дождь.', note: 'dass -> глагол в конец' },
        { de: 'Wir fahren ans Meer.', ru: 'Мы едем к морю.', note: 'V2' },
        { de: 'Kommst du mit?', ru: 'Ты идёшь с нами?', note: 'V1 в вопросе, отделяемая приставка' },
      ],
      question: {
        de: 'Wohin wollen Silke und ihre Freunde am Wochenende fahren?',
        ru: 'Куда Сильке и её друзья хотят поехать на выходных?',
        options: [
          { de: 'In die Berge', ru: 'В горы' },
          { de: 'Ans Meer', ru: 'К морю' },
          { de: 'Ins Schwimmbad', ru: 'В бассейн' },
        ],
        correct: 1,
        explanation: 'Сильке говорит: "eine Radtour ans Meer und doch nicht in die Berge machen".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Sport Lechner',
      type: 'объявление',
      text: 'Eine Durchsage an alle unsere Kunden: heute Preise wie nie für alle Sportartikel und Sportkleidung! Sport Lechner wird 50 und das Geschäft, also die Geschäftsleitung und die Verkäuferinnen, feiern mit Ihnen unseren Geburtstag. Kaufen Sie heute mit 50% Rabatt, also alles zum halben Preis für Freizeit und Sport!',
      sentenceTranslations: {
        'Eine Durchsage an alle unsere Kunden: heute Preise wie nie für alle Sportartikel und Sportkleidung!': { literal: 'Объявление ко всем нашим клиентам: сегодня цены как никогда для всех спорттоваров и спортивной одежды', literary: 'Объявление для всех наших клиентов: сегодня небывалые цены на все спорттовары и спортивную одежду!' },
        'Sport Lechner wird 50 und das Geschäft, also die Geschäftsleitung und die Verkäuferinnen, feiern mit Ihnen unseren Geburtstag.': { literal: 'Спорт Лехнер становится 50 и магазин, итак руководство и продавщицы, празднуют с Вами наш день рождения', literary: 'Магазину Спорт Лехнер исполняется 50, и руководство и продавщицы празднуют с вами наш день рождения.' },
        'Kaufen Sie heute mit 50% Rabatt, also alles zum halben Preis für Freizeit und Sport!': { literal: 'Покупайте Вы сегодня с 50% скидкой, итак всё к половинной цене для свободного времени и спорта', literary: 'Покупайте сегодня со скидкой 50%, то есть всё за полцены для отдыха и спорта!' },
      },
      vocabulary: [
        { de: 'die Durchsage', ru: 'объявление', gender: 'feminin', plural: 'die Durchsagen', example: 'Eine Durchsage an alle unsere Kunden.' },
        { de: 'der Kunde', ru: 'клиент', gender: 'maskulin', plural: 'die Kunden', example: 'Eine Durchsage an alle unsere Kunden.' },
        { de: 'der Sportartikel', ru: 'спорттовар', gender: 'maskulin', plural: 'die Sportartikel', example: 'Heute Preise wie nie für alle Sportartikel und Sportkleidung!' },
        { de: 'das Geschäft', ru: 'магазин', gender: 'neutrum', plural: 'die Geschäfte', example: 'Das Geschäft feiern mit Ihnen unseren Geburtstag.' },
        { de: 'der Rabatt', ru: 'скидка', gender: 'maskulin', plural: 'die Rabatte', example: 'Kaufen Sie heute mit 50% Rabatt.' },
        { de: 'feiern', ru: 'праздновать', type: 'verb', forms: 'feiert, feierte, hat gefeiert', example: 'Die Geschäftsleitung und die Verkäuferinnen feiern mit Ihnen unseren Geburtstag.' },
        { de: 'kaufen', ru: 'покупать', type: 'verb', forms: 'kauft, kaufte, hat gekauft', example: 'Kaufen Sie heute mit 50% Rabatt.' },
      ],
      practiceSentences: [
        { de: 'Das Geschäft wird 20.', ru: 'Магазину исполняется 20.', note: 'V2 с werden' },
        { de: 'Kaufen Sie heute ein!', ru: 'Покупайте сегодня!', note: 'императив V1' },
        { de: 'Sie bekommen 30% Rabatt.', ru: 'Вы получаете скидку 30%.', note: 'V2' },
      ],
      question: {
        de: 'Wie viel Rabatt gibt es heute bei Sport Lechner?',
        ru: 'Какая скидка сегодня в магазине Спорт Лехнер?',
        options: [
          { de: '30 Prozent', ru: '30 процентов' },
          { de: '40 Prozent', ru: '40 процентов' },
          { de: '50 Prozent', ru: '50 процентов' },
        ],
        correct: 2,
        explanation: 'В объявлении сказано: "kaufen Sie heute mit 50% Rabatt".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Rockband',
      type: 'диалог',
      text: 'Hallo Tobias, stimmt es, dass wir jetzt eine Rockband bei uns in der Schule haben und du E-Gitarre spielst? Ja, aber uns fehlt noch eine Sängerin. Sag mal Luna, du singst doch so toll, komm doch mal zu unserer Probe! Ach, ich singe doch nur so zum Spaß. Passt, wir spielen auch einfach nur so zum Spaß!',
      sentenceTranslations: {
        'Hallo Tobias, stimmt es, dass wir jetzt eine Rockband bei uns in der Schule haben und du E-Gitarre spielst?': { literal: 'Привет Тобиас, правда ли, что мы сейчас рок-группу у нас в школе имеем и ты электрогитару играешь', literary: 'Привет, Тобиас, правда, что у нас в школе теперь есть рок-группа и ты играешь на электрогитаре?' },
        'Ja, aber uns fehlt noch eine Sängerin.': { literal: 'Да, но нам не хватает ещё певица', literary: 'Да, но нам ещё нужна певица.' },
        'Sag mal Luna, du singst doch so toll, komm doch mal zu unserer Probe!': { literal: 'Скажи-ка Луна, ты поёшь же так классно, приходи же раз к нашей репетиции', literary: 'Слушай, Луна, ты же так классно поёшь, приходи к нам на репетицию!' },
        'Ach, ich singe doch nur so zum Spaß.': { literal: 'Ах, я пою же только так для веселья', literary: 'Ах, я пою просто для удовольствия.' },
        'Passt, wir spielen auch einfach nur so zum Spaß!': { literal: 'Подходит, мы играем тоже просто только так для веселья', literary: 'Отлично, мы тоже играем просто для удовольствия!' },
      },
      vocabulary: [
        { de: 'die Rockband', ru: 'рок-группа', gender: 'feminin', plural: 'die Rockbands', example: 'Stimmt es, dass wir jetzt eine Rockband bei uns in der Schule haben?' },
        { de: 'die E-Gitarre', ru: 'электрогитара', gender: 'feminin', plural: 'die E-Gitarren', example: 'Du E-Gitarre spielst?' },
        { de: 'die Sängerin', ru: 'певица', gender: 'feminin', plural: 'die Sängerinnen', example: 'Uns fehlt noch eine Sängerin.' },
        { de: 'die Probe', ru: 'репетиция', gender: 'feminin', plural: 'die Proben', example: 'Komm doch mal zu unserer Probe!' },
        { de: 'der Spaß', ru: 'веселье, удовольствие', gender: 'maskulin', plural: '-', example: 'Ich singe doch nur so zum Spaß.' },
        { de: 'fehlen', ru: 'не хватать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Uns fehlt noch eine Sängerin.' },
        { de: 'singen', ru: 'петь', type: 'verb', forms: 'singt, sang, hat gesungen', example: 'Du singst doch so toll.' },
      ],
      practiceSentences: [
        { de: 'Stimmt es, dass du kommst?', ru: 'Правда, что ты придёшь?', note: 'dass -> глагол в конец' },
        { de: 'Mir fehlt mein Buch.', ru: 'Мне не хватает книги.', note: 'fehlen + Dativ, V2' },
        { de: 'Wir spielen zum Spaß.', ru: 'Мы играем для веселья.', note: 'V2' },
      ],
      question: {
        de: 'Was sucht die Rockband noch?',
        ru: 'Кого ещё ищет рок-группа?',
        options: [
          { de: 'Einen Gitarristen', ru: 'Гитариста' },
          { de: 'Eine Sängerin', ru: 'Певицу' },
          { de: 'Einen Schlagzeuger', ru: 'Барабанщика' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "uns fehlt noch eine Sängerin".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Sportfest',
      type: 'диалог',
      text: 'Du, das Sportfest unserer Schule war mal wieder super! Ja klar, unsere Klasse war auch gut dabei, wir haben zwei Preise geholt. Wir haben den schnellsten Läufer der Schule: Chris läuft die 100 Meter in nur 11,2 Sekunden, der wird bestimmt mal berühmt. Ja, und Katja war im Schwimmen die schnellste von allen, ist das nicht toll? Viele in der Klasse sind sportlich und machen außer Schulsport auch in der Freizeit noch etwas mit Sport, z.B. Badminton, John, und im Winter Ski, Vera zum Beispiel. Sie spielt sehr gut Volleyball, sie trainiert auch dreimal die Woche im Sportclub. Und Kevin ist ein super Fußballspieler, der fast jeden Tag trainiert und am Wochenende Spiele hat. Weißt du was, ich glaube, unser unsportlicher Daniel hat mit Tennis angefangen. Ich habe ihn auf dem Tennisplatz gesehen. Und wir, was machen wir? Wir verschlafen unsere Zeit, anstatt endlich mit dem Laufen anzufangen. Also los, geht\'s!',
      sentenceTranslations: {
        'Du, das Sportfest unserer Schule war mal wieder super!': { literal: 'Ты, спортивный праздник нашей школы был опять снова супер', literary: 'Слушай, спортивный праздник в нашей школе снова был отличным!' },
        'Ja klar, unsere Klasse war auch gut dabei, wir haben zwei Preise geholt.': { literal: 'Да конечно, наш класс был тоже хорошо при этом, мы имеем два приза принесённые', literary: 'Конечно, наш класс тоже хорошо выступил, мы получили два приза.' },
        'Wir haben den schnellsten Läufer der Schule: Chris läuft die 100 Meter in nur 11,2 Sekunden, der wird bestimmt mal berühmt.': { literal: 'Мы имеем самого быстрого бегуна школы: Крис бегает 100 метров за только 11,2 секунды, тот станет определённо когда-то знаменитым', literary: 'У нас самый быстрый бегун в школе: Крис бежит 100 метров за 11,2 секунды, он точно станет знаменитым.' },
        'Ja, und Katja war im Schwimmen die schnellste von allen, ist das nicht toll?': { literal: 'Да, и Катя была в плавании самая быстрая из всех, есть это не классно', literary: 'Да, и Катя была самой быстрой в плавании, разве это не здорово?' },
        'Viele in der Klasse sind sportlich und machen außer Schulsport auch in der Freizeit noch etwas mit Sport, z.B.': { literal: 'Многие в классе есть спортивные и делают кроме школьного спорта также в свободное время ещё что-то со спортом, например', literary: 'Многие в классе спортивные и, кроме школьного спорта, занимаются спортом ещё и в свободное время, например.' },
        'Badminton, John, und im Winter Ski, Vera zum Beispiel.': { literal: 'Бадминтон, Джон, и зимой лыжи, Вера например', literary: 'Бадминтон — Джон, а зимой лыжи — Вера, например.' },
        'Sie spielt sehr gut Volleyball, sie trainiert auch dreimal die Woche im Sportclub.': { literal: 'Она играет очень хорошо волейбол, она тренируется также трижды неделю в спортклубе', literary: 'Она очень хорошо играет в волейбол, она тренируется три раза в неделю в спортклубе.' },
        'Und Kevin ist ein super Fußballspieler, der fast jeden Tag trainiert und am Wochenende Spiele hat.': { literal: 'И Кевин есть супер футболист, который почти каждый день тренируется и на выходных игры имеет', literary: 'А Кевин — отличный футболист, который тренируется почти каждый день и по выходным играет матчи.' },
        'Weißt du was, ich glaube, unser unsportlicher Daniel hat mit Tennis angefangen.': { literal: 'Знаешь ты что, я верю, наш неспортивный Даниэль имеет с теннисом начал', literary: 'Знаешь что, я думаю, наш неспортивный Даниэль начал играть в теннис.' },
        'Ich habe ihn auf dem Tennisplatz gesehen.': { literal: 'Я имею его на теннисном корте увиденным', literary: 'Я видел его на теннисном корте.' },
        'Und wir, was machen wir?': { literal: 'И мы, что делаем мы', literary: 'А мы, что делаем мы?' },
        'Wir verschlafen unsere Zeit, anstatt endlich mit dem Laufen anzufangen.': { literal: 'Мы проспим наше время, вместо наконец с бегом начать', literary: 'Мы теряем время, вместо того чтобы наконец начать бегать.' },
        'Also los, geht\'s!': { literal: 'Итак давай, идёт', literary: 'Ну давай, побежали!' },
      },
      vocabulary: [
        { de: 'das Sportfest', ru: 'спортивный праздник', gender: 'neutrum', plural: 'die Sportfeste', example: 'Das Sportfest unserer Schule war mal wieder super!' },
        { de: 'der Preis', ru: 'приз', gender: 'maskulin', plural: 'die Preise', example: 'Wir haben zwei Preise geholt.' },
        { de: 'der Läufer', ru: 'бегун', gender: 'maskulin', plural: 'die Läufer', example: 'Wir haben den schnellsten Läufer der Schule.' },
        { de: 'der Sportclub', ru: 'спортклуб', gender: 'maskulin', plural: 'die Sportclubs', example: 'Sie trainiert auch dreimal die Woche im Sportclub.' },
        { de: 'der Fußballspieler', ru: 'футболист', gender: 'maskulin', plural: 'die Fußballspieler', example: 'Kevin ist ein super Fußballspieler.' },
        { de: 'der Tennisplatz', ru: 'теннисный корт', gender: 'maskulin', plural: 'die Tennisplätze', example: 'Ich habe ihn auf dem Tennisplatz gesehen.' },
        { de: 'trainieren', ru: 'тренироваться', type: 'verb', forms: 'trainiert, trainierte, hat trainiert', example: 'Sie trainiert auch dreimal die Woche im Sportclub.' },
        { de: 'anfangen', ru: 'начинать', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Daniel hat mit Tennis angefangen.' },
        { de: 'verschlafen', ru: 'проспать, потерять', type: 'verb', forms: 'verschläft, verschlief, hat verschlafen', example: 'Wir verschlafen unsere Zeit.' },
        { de: 'sportlich', ru: 'спортивный', type: 'adj', example: 'Viele in der Klasse sind sportlich.' },
        { de: 'berühmt', ru: 'знаменитый', type: 'adj', example: 'Der wird bestimmt mal berühmt.' },
      ],
      practiceSentences: [
        { de: 'Wir haben ein Spiel gewonnen.', ru: 'Мы выиграли игру.', note: 'Perfekt: haben + Partizip II' },
        { de: 'Er läuft sehr schnell.', ru: 'Он бегает очень быстро.', note: 'V2' },
        { de: 'Sie trainiert zweimal die Woche.', ru: 'Она тренируется дважды в неделю.', note: 'V2' },
      ],
      question: {
        de: 'Welchen Sport macht Chris?',
        ru: 'Каким спортом занимается Крис?',
        options: [
          { de: 'Laufen', ru: 'Бег' },
          { de: 'Schwimmen', ru: 'Плавание' },
          { de: 'Tennis', ru: 'Теннис' },
        ],
        correct: 0,
        explanation: 'Текст указывает: "Chris läuft die 100 Meter in nur 11,2 Sekunden" — он бегун.'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Musik im Bus',
      type: 'диалог',
      text: 'Du hast auch so gerne Musik, nicht wahr? Ja, immer und überall, im Auto, im Zug, aber am liebsten mit dem Handy im Bus, so wie jetzt. Du nicht? Doch doch, aber mein Handy hat keinen Akku, keine Batterie mehr. Ach so, hier, nimm den anderen Hörstöpsel, dann hören wir zusammen. Danke!',
      sentenceTranslations: {
        'Du hast auch so gerne Musik, nicht wahr?': { literal: 'Ты имеешь тоже так охотно музыку, не правда', literary: 'Ты тоже так любишь музыку, правда?' },
        'Ja, immer und überall, im Auto, im Zug, aber am liebsten mit dem Handy im Bus, so wie jetzt.': { literal: 'Да, всегда и везде, в машине, в поезде, но охотнее всего с мобильным в автобусе, так как сейчас', literary: 'Да, всегда и везде, в машине, в поезде, но больше всего с телефоном в автобусе, как сейчас.' },
        'Du nicht?': { literal: 'Ты нет', literary: 'А ты нет?' },
        'Doch doch, aber mein Handy hat keinen Akku, keine Batterie mehr.': { literal: 'Нет-нет (= да-да), но мой мобильный имеет никакой аккумулятор, никакая батарейка больше', literary: 'Нет, что ты, но у моего телефона сел аккумулятор, нет батарейки.' },
        'Ach so, hier, nimm den anderen Hörstöpsel, dann hören wir zusammen.': { literal: 'Ах так, здесь, возьми другой наушник, тогда слушаем мы вместе', literary: 'А, вот, возьми другой наушник, тогда послушаем вместе.' },
        'Danke!': { literal: 'Спасибо', literary: 'Спасибо!' },
      },
      vocabulary: [
        { de: 'der Akku', ru: 'аккумулятор', gender: 'maskulin', plural: 'die Akkus', example: 'Mein Handy hat keinen Akku.' },
        { de: 'die Batterie', ru: 'батарейка', gender: 'feminin', plural: 'die Batterien', example: 'Mein Handy hat keine Batterie mehr.' },
        { de: 'der Hörstöpsel', ru: 'наушник', gender: 'maskulin', plural: 'die Hörstöpsel', example: 'Nimm den anderen Hörstöpsel.' },
        { de: 'hören', ru: 'слушать', type: 'verb', forms: 'hört, hörte, hat gehört', example: 'Dann hören wir zusammen.' },
      ],
      practiceSentences: [
        { de: 'Du hörst gerne Musik, nicht wahr?', ru: 'Ты любишь слушать музыку, правда?', note: 'V2, tag question' },
        { de: 'Ich habe kein Geld mehr.', ru: 'У меня больше нет денег.', note: 'V2' },
        { de: 'Nimm mein Buch!', ru: 'Возьми мою книгу!', note: 'императив V1' },
      ],
      question: {
        de: 'Warum kann die Person ihre Musik nicht hören?',
        ru: 'Почему человек не может слушать свою музыку?',
        options: [
          { de: 'Das Handy ist kaputt', ru: 'Телефон сломан' },
          { de: 'Der Akku ist leer', ru: 'Аккумулятор сел' },
          { de: 'Sie hat keine Kopfhörer', ru: 'У неё нет наушников' },
        ],
        correct: 1,
        explanation: 'Говорится: "mein Handy hat keinen Akku keine Batterie mehr".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Garten',
      type: 'диалог',
      text: 'Nachmittags und am Wochenende arbeite ich gerne im Garten. Mein Vater hat zurzeit Probleme mit dem Rücken und kann das nicht machen, also helfe ich ihm. Das ist ja fantastisch, dann kann ich dich ja was fragen: meine Pflanze vor dem Fenster hat trockene Blätter, was soll ich tun? Braucht sie mehr Sonne oder einen größeren Topf? Sie braucht Wasser!',
      sentenceTranslations: {
        'Nachmittags und am Wochenende arbeite ich gerne im Garten.': { literal: 'После обеда и на выходных работаю я охотно в саду', literary: 'После обеда и по выходным я люблю работать в саду.' },
        'Mein Vater hat zurzeit Probleme mit dem Rücken und kann das nicht machen, also helfe ich ihm.': { literal: 'Мой отец имеет в настоящее время проблемы со спиной и может это не делать, итак помогаю я ему', literary: 'У моего отца сейчас проблемы со спиной и он не может этим заниматься, поэтому я ему помогаю.' },
        'Das ist ja fantastisch, dann kann ich dich ja was fragen: meine Pflanze vor dem Fenster hat trockene Blätter, was soll ich tun?': { literal: 'Это есть же фантастически, тогда могу я тебя же что спросить: моё растение перед окном имеет сухие листья, что должен я делать', literary: 'Это же здорово, тогда я могу тебя кое-что спросить: у моего растения перед окном сухие листья, что мне делать?' },
        'Braucht sie mehr Sonne oder einen größeren Topf?': { literal: 'Нуждается она больше солнца или больший горшок', literary: 'Ей нужно больше солнца или горшок побольше?' },
        'Sie braucht Wasser!': { literal: 'Она нуждается воду', literary: 'Ей нужна вода!' },
      },
      vocabulary: [
        { de: 'der Garten', ru: 'сад', gender: 'maskulin', plural: 'die Gärten', example: 'Nachmittags und am Wochenende arbeite ich gerne im Garten.' },
        { de: 'der Rücken', ru: 'спина', gender: 'maskulin', plural: 'die Rücken', example: 'Mein Vater hat zurzeit Probleme mit dem Rücken.' },
        { de: 'die Pflanze', ru: 'растение', gender: 'feminin', plural: 'die Pflanzen', example: 'Meine Pflanze vor dem Fenster hat trockene Blätter.' },
        { de: 'das Blatt', ru: 'лист', gender: 'neutrum', plural: 'die Blätter', example: 'Meine Pflanze hat trockene Blätter.' },
        { de: 'der Topf', ru: 'горшок', gender: 'maskulin', plural: 'die Töpfe', example: 'Braucht sie einen größeren Topf?' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Also helfe ich ihm.' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'braucht, brauchte, hat gebraucht', example: 'Sie braucht Wasser!' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Meine Pflanze hat trockene Blätter.' },
      ],
      practiceSentences: [
        { de: 'Morgens trinke ich Kaffee.', ru: 'По утрам я пью кофе.', note: 'V2 после наречия' },
        { de: 'Die Blume braucht Licht.', ru: 'Цветку нужен свет.', note: 'V2' },
        { de: 'Ich helfe meiner Mutter.', ru: 'Я помогаю маме.', note: 'V2, helfen + Dativ' },
      ],
      question: {
        de: 'Was braucht die Pflanze?',
        ru: 'Что нужно растению?',
        options: [
          { de: 'Mehr Sonne', ru: 'Больше солнца' },
          { de: 'Einen größeren Topf', ru: 'Больший горшок' },
          { de: 'Wasser', ru: 'Вода' },
        ],
        correct: 2,
        explanation: 'На вопрос о растении с сухими листьями дан ответ: "sie braucht Wasser".'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Origami',
      type: 'диалог',
      text: 'Was machst du da, malst du? Nein, ich mache Figuren aus Papier, andere nennen es auch Origami. Das sieht kompliziert aus. Was ist das? Das ist ein Vogel, wenn du hier siehst, dann kann er auch fliegen. Tatsächlich, der Vogel fliegt! Ist ja cool, und man braucht die nicht zu füttern!',
      sentenceTranslations: {
        'Was machst du da, malst du?': { literal: 'Что делаешь ты там, рисуешь ты', literary: 'Что ты делаешь, рисуешь?' },
        'Nein, ich mache Figuren aus Papier, andere nennen es auch Origami.': { literal: 'Нет, я делаю фигуры из бумаги, другие называют это тоже оригами', literary: 'Нет, я делаю фигуры из бумаги, другие называют это оригами.' },
        'Das sieht kompliziert aus.': { literal: 'Это выглядит сложно', literary: 'Это выглядит сложно.' },
        'Was ist das?': { literal: 'Что есть это', literary: 'Что это?' },
        'Das ist ein Vogel, wenn du hier siehst, dann kann er auch fliegen.': { literal: 'Это есть птица, когда ты здесь смотришь, тогда может он тоже летать', literary: 'Это птица, если ты посмотришь сюда, то он может летать.' },
        'Tatsächlich, der Vogel fliegt!': { literal: 'Действительно, птица летает', literary: 'Правда, птица летает!' },
        'Ist ja cool, und man braucht die nicht zu füttern!': { literal: 'Есть же круто, и не нужно их кормить', literary: 'Круто, и их не нужно кормить!' },
      },
      vocabulary: [
        { de: 'die Figur', ru: 'фигура', gender: 'feminin', plural: 'die Figuren', example: 'Ich mache Figuren aus Papier.' },
        { de: 'das Papier', ru: 'бумага', gender: 'neutrum', plural: 'die Papiere', example: 'Ich mache Figuren aus Papier.' },
        { de: 'der Vogel', ru: 'птица', gender: 'maskulin', plural: 'die Vögel', example: 'Das ist ein Vogel.' },
        { de: 'aussehen', ru: 'выглядеть', type: 'verb', forms: 'sieht aus, sah aus, hat ausgesehen', example: 'Das sieht kompliziert aus.' },
        { de: 'fliegen', ru: 'летать', type: 'verb', forms: 'fliegt, flog, ist geflogen', example: 'Dann kann er auch fliegen.' },
        { de: 'füttern', ru: 'кормить', type: 'verb', forms: 'füttert, fütterte, hat gefüttert', example: 'Man braucht die nicht zu füttern!' },
        { de: 'tatsächlich', ru: 'действительно', type: 'adv', example: 'Tatsächlich, der Vogel fliegt!' },
      ],
      practiceSentences: [
        { de: 'Was malst du?', ru: 'Что ты рисуешь?', note: 'V2 в W-Frage' },
        { de: 'Das sieht schön aus.', ru: 'Это выглядит красиво.', note: 'отделяемая приставка' },
        { de: 'Man muss nicht warten.', ru: 'Не нужно ждать.', note: 'модальный + nicht + инфинитив' },
      ],
      question: {
        de: 'Was macht die Person aus Papier?',
        ru: 'Что человек делает из бумаги?',
        options: [
          { de: 'Bilder', ru: 'Картинки' },
          { de: 'Figuren', ru: 'Фигуры' },
          { de: 'Flugzeuge', ru: 'Самолёты' },
        ],
        correct: 1,
        explanation: 'Человек отвечает: "ich mache Figuren aus Papier".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Silvie Chat',
      type: 'диалог',
      text: 'Hey Silvie, was machst du heute Nachmittag? Wollen wir telefonieren? Nein, ich surfe heute Nachmittag im Internet und chatte mit meinen Freunden. Echt? Ich habe dich noch nie getroffen. Ich schreibe auch im Chatroom. Du bist wahrscheinlich nicht auf meiner Freundesliste. Okay, aber das können wir korrigieren, nicht wahr?',
      sentenceTranslations: {
        'Hey Silvie, was machst du heute Nachmittag?': { literal: 'Хэй Сильви, что делаешь ты сегодня днём', literary: 'Эй, Сильви, что ты делаешь сегодня днём?' },
        'Wollen wir telefonieren?': { literal: 'Хотим мы телефонировать', literary: 'Давай созвонимся?' },
        'Nein, ich surfe heute Nachmittag im Internet und chatte mit meinen Freunden.': { literal: 'Нет, я сёрфлю сегодня днём в интернете и чатюсь с моими друзьями', literary: 'Нет, сегодня днём я сижу в интернете и общаюсь с друзьями в чате.' },
        'Echt?': { literal: 'Правда', literary: 'Серьёзно?' },
        'Ich habe dich noch nie getroffen.': { literal: 'Я имею тебя ещё никогда встреченным', literary: 'Я тебя ещё ни разу не встречал.' },
        'Ich schreibe auch im Chatroom.': { literal: 'Я пишу тоже в чате', literary: 'Я тоже пишу в чате.' },
        'Du bist wahrscheinlich nicht auf meiner Freundesliste.': { literal: 'Ты есть вероятно не на моём списке друзей', literary: 'Ты, наверное, не в моём списке друзей.' },
        'Okay, aber das können wir korrigieren, nicht wahr?': { literal: 'Хорошо, но это можем мы исправить, не так ли', literary: 'Ладно, но это мы можем исправить, верно?' },
      },
      vocabulary: [
        { de: 'der Nachmittag', ru: 'послеобеденное время', gender: 'maskulin', plural: 'die Nachmittage', example: 'Was machst du heute Nachmittag?' },
        { de: 'der Chatroom', ru: 'чат', gender: 'maskulin', plural: 'die Chatrooms', example: 'Ich schreibe auch im Chatroom.' },
        { de: 'die Freundesliste', ru: 'список друзей', gender: 'feminin', plural: 'die Freundeslisten', example: 'Du bist wahrscheinlich nicht auf meiner Freundesliste.' },
        { de: 'surfen', ru: 'сёрфить, сидеть в интернете', type: 'verb', forms: 'surft, surfte, hat gesurft', example: 'Ich surfe heute Nachmittag im Internet.' },
        { de: 'chatten', ru: 'общаться в чате', type: 'verb', forms: 'chattet, chattete, hat gechattet', example: 'Ich chatte mit meinen Freunden.' },
        { de: 'korrigieren', ru: 'исправлять', type: 'verb', forms: 'korrigiert, korrigierte, hat korrigiert', example: 'Das können wir korrigieren.' },
        { de: 'wahrscheinlich', ru: 'вероятно', type: 'adv', example: 'Du bist wahrscheinlich nicht auf meiner Freundesliste.' },
      ],
      practiceSentences: [
        { de: 'Ich surfe oft im Internet.', ru: 'Я часто сижу в интернете.', note: 'V2' },
        { de: 'Ich habe ihn nie gesehen.', ru: 'Я его никогда не видел.', note: 'Perfekt с nie' },
        { de: 'Das kann ich ändern.', ru: 'Это я могу изменить.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was macht Silvie heute Nachmittag?',
        ru: 'Что делает Сильви сегодня днём?',
        options: [
          { de: 'Sie telefoniert', ru: 'Она звонит по телефону' },
          { de: 'Sie surft im Internet und chattet', ru: 'Она сидит в интернете и общается в чате' },
          { de: 'Sie trifft Freunde', ru: 'Она встречается с друзьями' },
        ],
        correct: 1,
        explanation: 'Сильви говорит: "ich surfe heute Nachmittag im Internet und chatte mit meinen Freunden".'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Uli Jobs',
      type: 'диалог',
      text: 'Was machst du in deiner Freizeit, Uli? Freizeit, was ist das? Ich gehe in die Schule und mache verschiedene Jobs. Was für Jobs machst du denn, und warum? Weißt du, ich will mir eine Gitarre kaufen und dafür brauche ich Geld. Ich wasche Autos, ich verteile mit dem Fahrrad Zeitungen, alles. Verstehe, du hast ein klares Ziel!',
      sentenceTranslations: {
        'Was machst du in deiner Freizeit, Uli?': { literal: 'Что делаешь ты в твоём свободном времени, Ули', literary: 'Что ты делаешь в свободное время, Ули?' },
        'Freizeit, was ist das?': { literal: 'Свободное время, что есть это', literary: 'Свободное время, что это?' },
        'Ich gehe in die Schule und mache verschiedene Jobs.': { literal: 'Я хожу в школу и делаю различные работы', literary: 'Я хожу в школу и подрабатываю.' },
        'Was für Jobs machst du denn, und warum?': { literal: 'Что за работы делаешь ты же, и почему', literary: 'Какие подработки ты делаешь и зачем?' },
        'Weißt du, ich will mir eine Gitarre kaufen und dafür brauche ich Geld.': { literal: 'Знаешь ты, я хочу себе гитару купить и для этого нуждаюсь я деньги', literary: 'Знаешь, я хочу купить себе гитару и для этого мне нужны деньги.' },
        'Ich wasche Autos, ich verteile mit dem Fahrrad Zeitungen, alles.': { literal: 'Я мою машины, я распределяю с велосипедом газеты, всё', literary: 'Я мою машины, развожу газеты на велосипеде, всё подряд.' },
        'Verstehe, du hast ein klares Ziel!': { literal: 'Понимаю, ты имеешь ясную цель', literary: 'Понятно, у тебя чёткая цель!' },
      },
      vocabulary: [
        { de: 'der Job', ru: 'работа, подработка', gender: 'maskulin', plural: 'die Jobs', example: 'Ich mache verschiedene Jobs.' },
        { de: 'die Gitarre', ru: 'гитара', gender: 'feminin', plural: 'die Gitarren', example: 'Ich will mir eine Gitarre kaufen.' },
        { de: 'das Geld', ru: 'деньги', gender: 'neutrum', plural: '-', example: 'Dafür brauche ich Geld.' },
        { de: 'die Zeitung', ru: 'газета', gender: 'feminin', plural: 'die Zeitungen', example: 'Ich verteile mit dem Fahrrad Zeitungen.' },
        { de: 'das Ziel', ru: 'цель', gender: 'neutrum', plural: 'die Ziele', example: 'Du hast ein klares Ziel!' },
        { de: 'waschen', ru: 'мыть', type: 'verb', forms: 'wäscht, wusch, hat gewaschen', example: 'Ich wasche Autos.' },
        { de: 'verteilen', ru: 'распределять, разносить', type: 'verb', forms: 'verteilt, verteilte, hat verteilt', example: 'Ich verteile mit dem Fahrrad Zeitungen.' },
        { de: 'verschieden', ru: 'различный', type: 'adj', example: 'Ich mache verschiedene Jobs.' },
      ],
      practiceSentences: [
        { de: 'Ich will mir ein Buch kaufen.', ru: 'Я хочу купить себе книгу.', note: 'модальный + рефлексив + инфинитив' },
        { de: 'Er wäscht sein Auto.', ru: 'Он моет свою машину.', note: 'V2' },
        { de: 'Du hast ein Ziel.', ru: 'У тебя есть цель.', note: 'V2' },
      ],
      question: {
        de: 'Warum macht Uli verschiedene Jobs?',
        ru: 'Почему Ули подрабатывает?',
        options: [
          { de: 'Er braucht Geld für eine Gitarre', ru: 'Ему нужны деньги на гитару' },
          { de: 'Er hat zu viel Freizeit', ru: 'У него слишком много свободного времени' },
          { de: 'Er mag die Arbeit', ru: 'Ему нравится работа' },
        ],
        correct: 0,
        explanation: 'Ули объясняет: "ich will mir eine Gitarre kaufen und dafür brauche ich Geld".'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Matthias Interview',
      type: 'интервью',
      text: 'Sag zuerst einmal, in welche Klasse du gehst und wie viel Freizeit du hast. Also ich gehe in die zehnte Klasse und habe darum ganz schön viel für die Schule zu tun, aber gerade deshalb brauche ich Sport als Ausgleich. Okay, und was machst du so? Ich bin nicht der Typ, der sein Leben lang Fußball spielt. Ich probiere gerne mal was Neues aus. Zur Zeit spiele ich Ping-Pong, es macht großen Spaß. Auch hier an der Schule haben wir im Pausenhof Tischtennisplatten. Stimmt, bald ist auch ein Turnier bei uns mit anderen Schulen, darüber werden wir auch schreiben. Ja, der Termin für das Turnier ist in vier Wochen und wir trainieren schon hart dafür. Wie viele seid ihr in der Schulmannschaft? Na so, alle zusammen sind wir bestimmt so 30, aber nur zehn spielen beim Turnier mit. Wir wünschen viel Erfolg und hoffen auf gute Plätze. Danke, schauen wir mal!',
      sentenceTranslations: {
        'Sag zuerst einmal, in welche Klasse du gehst und wie viel Freizeit du hast.': { literal: 'Скажи сначала раз, в какой класс ты ходишь и как много свободного времени ты имеешь', literary: 'Расскажи для начала, в каком ты классе и сколько у тебя свободного времени.' },
        'Also ich gehe in die zehnte Klasse und habe darum ganz schön viel für die Schule zu tun, aber gerade deshalb brauche ich Sport als Ausgleich.': { literal: 'Итак я хожу в десятый класс и имею поэтому довольно много для школы делать, но именно поэтому нуждаюсь я спорт как компенсация', literary: 'Я учусь в десятом классе и поэтому у меня много школьных дел, но именно поэтому мне нужен спорт как разгрузка.' },
        'Okay, und was machst du so?': { literal: 'Хорошо, и что делаешь ты так', literary: 'Хорошо, и чем ты занимаешься?' },
        'Ich bin nicht der Typ, der sein Leben lang Fußball spielt.': { literal: 'Я есть не тот тип, который своё жизнь длинно футбол играет', literary: 'Я не из тех, кто всю жизнь играет в футбол.' },
        'Ich probiere gerne mal was Neues aus.': { literal: 'Я пробую охотно раз что-то новое', literary: 'Я люблю пробовать что-то новое.' },
        'Zur Zeit spiele ich Ping-Pong, es macht großen Spaß.': { literal: 'В данное время играю я пинг-понг, это делает большое веселье', literary: 'Сейчас я играю в пинг-понг, это очень весело.' },
        'Auch hier an der Schule haben wir im Pausenhof Tischtennisplatten.': { literal: 'Также здесь в школе имеем мы во дворе теннисные столы', literary: 'Здесь в школе у нас тоже есть теннисные столы во дворе.' },
        'Stimmt, bald ist auch ein Turnier bei uns mit anderen Schulen, darüber werden wir auch schreiben.': { literal: 'Верно, скоро есть тоже турнир у нас с другими школами, об этом будем мы тоже писать', literary: 'Верно, скоро у нас будет турнир с другими школами, мы тоже об этом напишем.' },
        'Ja, der Termin für das Turnier ist in vier Wochen und wir trainieren schon hart dafür.': { literal: 'Да, срок для турнира есть через четыре недели и мы тренируемся уже усердно для этого', literary: 'Да, турнир через четыре недели, и мы уже усердно к нему готовимся.' },
        'Wie viele seid ihr in der Schulmannschaft?': { literal: 'Как многие есть вы в школьной команде', literary: 'Сколько вас в школьной команде?' },
        'Na so, alle zusammen sind wir bestimmt so 30, aber nur zehn spielen beim Turnier mit.': { literal: 'Ну так, все вместе есть мы точно так 30, но только десять играют в турнире с', literary: 'Ну, всего нас около 30, но в турнире играют только десять.' },
        'Wir wünschen viel Erfolg und hoffen auf gute Plätze.': { literal: 'Мы желаем много успеха и надеемся на хорошие места', literary: 'Мы желаем успехов и надеемся на хорошие места.' },
        'Danke, schauen wir mal!': { literal: 'Спасибо, посмотрим мы раз', literary: 'Спасибо, посмотрим!' },
      },
      vocabulary: [
        { de: 'die Klasse', ru: 'класс', gender: 'feminin', plural: 'die Klassen', example: 'Ich gehe in die zehnte Klasse.' },
        { de: 'der Ausgleich', ru: 'компенсация, разгрузка', gender: 'maskulin', plural: '-', example: 'Gerade deshalb brauche ich Sport als Ausgleich.' },
        { de: 'der Pausenhof', ru: 'школьный двор', gender: 'maskulin', plural: 'die Pausenhöfe', example: 'Hier an der Schule haben wir im Pausenhof Tischtennisplatten.' },
        { de: 'die Tischtennisplatte', ru: 'теннисный стол', gender: 'feminin', plural: 'die Tischtennisplatten', example: 'Wir haben im Pausenhof Tischtennisplatten.' },
        { de: 'das Turnier', ru: 'турнир', gender: 'neutrum', plural: 'die Turniere', example: 'Bald ist auch ein Turnier bei uns.' },
        { de: 'die Schulmannschaft', ru: 'школьная команда', gender: 'feminin', plural: 'die Schulmannschaften', example: 'Wie viele seid ihr in der Schulmannschaft?' },
        { de: 'der Erfolg', ru: 'успех', gender: 'maskulin', plural: 'die Erfolge', example: 'Wir wünschen viel Erfolg.' },
        { de: 'ausprobieren', ru: 'пробовать, испытывать', type: 'verb', forms: 'probiert aus, probierte aus, hat ausprobiert', example: 'Ich probiere gerne mal was Neues aus.' },
        { de: 'hoffen', ru: 'надеяться', type: 'verb', forms: 'hofft, hoffte, hat gehofft', example: 'Wir hoffen auf gute Plätze.' },
        { de: 'hart', ru: 'усердно', type: 'adv', example: 'Wir trainieren schon hart dafür.' },
      ],
      practiceSentences: [
        { de: 'Ich gehe in die neunte Klasse.', ru: 'Я учусь в девятом классе.', note: 'V2' },
        { de: 'Er hat viel zu tun.', ru: 'У него много дел.', note: 'haben + zu + Infinitiv' },
        { de: 'Wir probieren etwas Neues aus.', ru: 'Мы пробуем что-то новое.', note: 'отделяемая приставка' },
        { de: 'Das Spiel ist in zwei Tagen.', ru: 'Игра через два дня.', note: 'V2 с sein' },
      ],
      question: {
        de: 'Matthias geht in die neunte Klasse.',
        ru: 'Маттиас учится в девятом классе.',
        options: [
          { de: 'Ja', ru: 'Да' },
          { de: 'Nein', ru: 'Нет' },
          { de: 'Das wird nicht gesagt', ru: 'Об этом не сказано' },
        ],
        correct: 1,
        explanation: 'Маттиас говорит: "ich gehe in die zehnte Klasse" — не в девятый, а в десятый.'
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
    title: 'ДЕНЬ ИЗ ЖИЗНИ ШКОЛЬНИКОВ',
    text: 'Феликс любит в свободное время решать {0}. Лиза раньше играла в Gameboy, а теперь играет в {1}. Сильке звонит подруге и предлагает {2} к морю на выходных. В магазине Спорт Лехнер сегодня {3} 50%. На школьном {4} Крис бежит 100 метров за 11,2 секунды. В автобусе у одного парня сел {5} на телефоне, но друг дал ему {6}. Ули подрабатывает: моет машины и {7} газеты, чтобы купить {8}. Маттиас играет в {9} и готовится к {10}.',
    blanks: [
      { answer: 'das Zahlenrätsel', hint: 'числовая головоломка (das Zahlenrätsel)' },
      { answer: 'Computerspiele', hint: 'компьютерные игры (das Computerspiel, Pl.)' },
      { answer: 'eine Radtour', hint: 'велопрогулка (die Radtour, Akk.)' },
      { answer: 'Rabatt', hint: 'скидка (der Rabatt)' },
      { answer: 'Sportfest', hint: 'спортивном празднике (das Sportfest)' },
      { answer: 'der Akku', hint: 'аккумулятор (der Akku)' },
      { answer: 'den Hörstöpsel', hint: 'наушник (der Hörstöpsel, Akk.)' },
      { answer: 'verteilt', hint: 'разносит (verteilen)' },
      { answer: 'die Gitarre', hint: 'гитара (die Gitarre)' },
      { answer: 'Ping-Pong', hint: 'пинг-понг' },
      { answer: 'dem Turnier', hint: 'турнир (das Turnier, Dat.)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Felix).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'Perfekt с haben: habe gemacht, habe geholt, habe gesehen',
    'dass-Nebensatz: глагол в конце — stimmt es, dass wir eine Rockband haben',
    'Отделяемые приставки: einschreiben, anfangen, ausprobieren, aussehen, mitkommen',
    'Модальные глаголы: müssen, können, wollen, sollen — man muss die Zahlen einschreiben',
    'mit + Dativ: mit Freunden, mit dem Handy, mit dem Fahrrad',
    'Akkusativ: den hellblauen Bikini, eine Radtour, die Zahlen',
    'wenn-Nebensatz: wenn du hier siehst, dann kann er fliegen',
    'werden + компаратив/профессия: der wird berühmt, Sport Lechner wird 50',
  ],
};

LESSONS.push(LESSON_16);
