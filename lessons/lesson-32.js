/* ═══════════════════════════════════════════════════════════
   Lesson 32 — Goethe Zertifikat A2 Hören Teil 1-4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_32 = {
  id: 'lesson-32',
  number: 32,
  title: 'Goethe A2 Hören — Schüleraustausch, Freizeit & Alltag',
  subtitle: 'Julia war in Istanbul, Edson denkt über Ausland nach, Joshua erzählt seinen Schulalltag',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-32',
  videoUrl: 'https://www.youtube.com/watch?v=Yx3R2H9Pm9U',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Julia - Türkei',
      type: 'рассказ',
      text: 'Hi Julia, was meinst du? Also ich finde, das ist eine gute Sache und ich habe auch eigene Erfahrungen. Bei mir war es aber ein bisschen anders. Meine Eltern kommen aus der Türkei und ich bin in Deutschland geboren. In der zehnten Klasse bin ich dann nach Istanbul gegangen und war dort ein Jahr auf einer Schule. In der Zeit habe ich bei meinem Onkel gewohnt. Es war ein tolles Jahr. Vielleicht will ich später auch mal in der Türkei studieren.',
      sentenceTranslations: {
        'Hi Julia, was meinst du?': { literal: 'Привет Юлия, что думаешь ты?', literary: 'Привет, Юлия, что ты думаешь?' },
        'Also ich finde, das ist eine gute Sache und ich habe auch eigene Erfahrungen.': { literal: 'Итак я нахожу, это есть хорошая вещь и я имею также собственные опыты', literary: 'Я считаю, это хорошая идея, и у меня тоже есть свой опыт.' },
        'Bei mir war es aber ein bisschen anders.': { literal: 'У меня было это но немного иначе', literary: 'Но у меня было немного по-другому.' },
        'Meine Eltern kommen aus der Türkei und ich bin in Deutschland geboren.': { literal: 'Мои родители приходят из Турции и я есть в Германии рождён', literary: 'Мои родители родом из Турции, а я родился в Германии.' },
        'In der zehnten Klasse bin ich dann nach Istanbul gegangen und war dort ein Jahr auf einer Schule.': { literal: 'В десятом классе есть я тогда в Стамбул пошёл и был там один год на одной школе', literary: 'В десятом классе я поехал в Стамбул и был там год в школе.' },
        'In der Zeit habe ich bei meinem Onkel gewohnt.': { literal: 'В это время имею я у моего дяди жил', literary: 'В это время я жил у моего дяди.' },
        'Es war ein tolles Jahr.': { literal: 'Это было один отличный год', literary: 'Это был отличный год.' },
        'Vielleicht will ich später auch mal in der Türkei studieren.': { literal: 'Может быть хочу я позже также раз в Турции учиться', literary: 'Может быть, позже я тоже буду учиться в Турции.' },
      },
      vocabulary: [
        { de: 'die Sache', plural: 'die Sachen', ru: 'дело, вещь', gender: 'feminin', collocation: 'eine gute Sache', example: 'Also ich finde, das ist eine gute Sache.' },
        { de: 'die Erfahrung', plural: 'die Erfahrungen', ru: 'опыт', gender: 'feminin', collocation: 'eigene Erfahrungen haben', example: 'Ich habe auch eigene Erfahrungen.' },
        { de: 'die Klasse', plural: 'die Klassen', ru: 'класс', gender: 'feminin', collocation: 'in der zehnten Klasse', example: 'In der zehnten Klasse bin ich dann nach Istanbul gegangen.' },
        { de: 'die Schule', plural: 'die Schulen', ru: 'школа', gender: 'feminin', collocation: 'auf einer Schule sein', example: 'War dort ein Jahr auf einer Schule.' },
        { de: 'der Onkel', plural: 'die Onkel', ru: 'дядя', gender: 'maskulin', collocation: 'bei meinem Onkel wohnen', example: 'In der Zeit habe ich bei meinem Onkel gewohnt.' },
        { de: 'das Jahr', plural: 'die Jahre', ru: 'год', gender: 'neutrum', collocation: 'ein tolles Jahr', example: 'Es war ein tolles Jahr.' },
        { de: 'meinen', ru: 'думать, считать', type: 'verb', forms: 'meint, meinte, hat gemeint', example: 'Hi Julia, was meinst du?' },
        { de: 'finden', ru: 'находить, считать', type: 'verb', forms: 'findet, fand, hat gefunden', example: 'Also ich finde, das ist eine gute Sache.' },
        { de: 'studieren', ru: 'учиться (в вузе)', type: 'verb', forms: 'studiert, studierte, hat studiert', example: 'Vielleicht will ich später auch mal in der Türkei studieren.' },
        { de: 'eigen', ru: 'собственный', type: 'adj', example: 'Ich habe auch eigene Erfahrungen.' },
      ],
      practiceSentences: [
        { de: 'Ich bin nach Berlin gefahren.', ru: 'Я поехал в Берлин.', note: 'Perfekt с sein' },
        { de: 'Er wohnt bei seiner Tante.', ru: 'Он живёт у своей тёти.', note: 'bei + Dativ' },
        { de: 'Wir kommen aus Spanien.', ru: 'Мы родом из Испании.', note: 'V2' },
        { de: 'Sie hat in Paris studiert.', ru: 'Она училась в Париже.', note: 'Perfekt с haben' },
        { de: 'Das ist eine tolle Idee.', ru: 'Это отличная идея.', note: 'V2' },
      ],
      question: {
        de: 'Wo hat Julia ein Jahr lang gelebt?',
        ru: 'Где Юлия жила в течение года?',
        options: [
          { de: 'In Deutschland bei ihren Eltern', ru: 'В Германии у своих родителей' },
          { de: 'In der Türkei bei ihrem Onkel', ru: 'В Турции у своего дяди' },
          { de: 'In den USA bei Freunden', ru: 'В США у друзей' },
        ],
        correct: 1,
        explanation: 'Julia говорит: "In der zehnten Klasse bin ich dann nach Istanbul gegangen... In der Zeit habe ich bei meinem Onkel gewohnt."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Edson - USA',
      type: 'рассказ',
      text: 'Ja, ich heiße Edson und wohne in der Nähe von Bremen. Also ein Freund von mir war ein Jahr in den USA und der sagt, dass ihm das nicht so gut gefallen hat. Er hat viel Heimweh gehabt und die Schule und alles war so total anders, dass er sich lange Zeit nicht wohlgefühlt hat. Erst in den letzten drei Monaten war es dann wirklich gut. Also Ausland kann ich mir schon mal vorstellen, aber ein Jahr ist zu lang.',
      sentenceTranslations: {
        'Ja, ich heiße Edson und wohne in der Nähe von Bremen.': { literal: 'Да, я зовусь Эдсон и живу в близости от Бремена', literary: 'Да, меня зовут Эдсон, и я живу недалеко от Бремена.' },
        'Also ein Freund von mir war ein Jahr in den USA und der sagt, dass ihm das nicht so gut gefallen hat.': { literal: 'Итак один друг от меня был один год в США и он говорит, что ему это не так хорошо понравилось', literary: 'У меня есть друг, который был год в США, и он говорит, что ему там не очень понравилось.' },
        'Er hat viel Heimweh gehabt und die Schule und alles war so total anders, dass er sich lange Zeit nicht wohlgefühlt hat.': { literal: 'Он имел много тоски по дому и школа и всё было так полностью иначе, что он себя долгое время не хорошо чувствовал', literary: 'Он сильно скучал по дому, и школа, и всё было настолько по-другому, что он долгое время чувствовал себя плохо.' },
        'Erst in den letzten drei Monaten war es dann wirklich gut.': { literal: 'Только в последних трёх месяцах было это тогда действительно хорошо', literary: 'Только в последние три месяца стало действительно хорошо.' },
        'Also Ausland kann ich mir schon mal vorstellen, aber ein Jahr ist zu lang.': { literal: 'Итак заграницу могу я себе уже раз представить, но один год есть слишком длинный', literary: 'Заграницу я могу себе представить, но год — это слишком долго.' },
      },
      vocabulary: [
        { de: 'die Nähe', ru: 'близость', gender: 'feminin', collocation: 'in der Nähe von', example: 'Ich wohne in der Nähe von Bremen.' },
        { de: 'das Heimweh', ru: 'тоска по дому', gender: 'neutrum', collocation: 'viel Heimweh haben', example: 'Er hat viel Heimweh gehabt.' },
        { de: 'das Ausland', ru: 'заграница', gender: 'neutrum', collocation: 'ins Ausland gehen', example: 'Also Ausland kann ich mir schon mal vorstellen.' },
        { de: 'der Monat', plural: 'die Monate', ru: 'месяц', gender: 'maskulin', collocation: 'in den letzten drei Monaten', example: 'Erst in den letzten drei Monaten war es dann wirklich gut.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Der sagt, dass ihm das nicht so gut gefallen hat.' },
        { de: 'sich wohlfühlen', ru: 'чувствовать себя хорошо', type: 'verb', forms: 'fühlt sich wohl, fühlte sich wohl, hat sich wohlgefühlt', example: 'Er sich lange Zeit nicht wohlgefühlt hat.' },
        { de: 'sich vorstellen', ru: 'представлять себе', type: 'verb', forms: 'stellt sich vor, stellte sich vor, hat sich vorgestellt', example: 'Ausland kann ich mir schon mal vorstellen.' },
        { de: 'total', ru: 'совершенно, полностью', type: 'adv', example: 'Die Schule und alles war so total anders.' },
      ],
      practiceSentences: [
        { de: 'Mir gefällt diese Stadt.', ru: 'Мне нравится этот город.', note: 'V2 + Dativ' },
        { de: 'Er hat Heimweh nach Hause.', ru: 'Он скучает по дому.', note: 'V2' },
        { de: 'Ich fühle mich gut hier.', ru: 'Я чувствую себя хорошо здесь.', note: 'V2, sich' },
        { de: 'Das war anders als erwartet.', ru: 'Это было иначе, чем ожидалось.', note: 'V2' },
        { de: 'Sie wohnt in der Nähe.', ru: 'Она живёт поблизости.', note: 'V2' },
      ],
      question: {
        de: 'Was sagt Edson über einen Auslandsaufenthalt?',
        ru: 'Что говорит Эдсон о пребывании за границей?',
        options: [
          { de: 'Er möchte nicht ins Ausland', ru: 'Он не хочет за границу' },
          { de: 'Er kann es sich vorstellen, aber ein Jahr ist zu lang', ru: 'Он может это себе представить, но год — это слишком долго' },
          { de: 'Er will sofort für ein Jahr ins Ausland', ru: 'Он хочет сразу на год за границу' },
        ],
        correct: 1,
        explanation: 'Edson говорит: "Also Ausland kann ich mir schon mal vorstellen, aber ein Jahr ist zu lang."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Jugendferienwerk',
      type: 'объявление',
      text: 'So, und jetzt habe ich eine Info für euch. Das Jugendferienwerk Mannheim organisiert in den großen Ferien wieder viele Sprachreisen für Jugendliche zwischen 14 und 18 Jahren. Ihr findet die Seite vom Jugendferienwerk mit dem Suchwort „Jugendferienwerk Mannheim". Wenn euch das interessiert, schreibt dem Jugendferienwerk eine Nachricht und dann bekommt ihr und eure Eltern die Informationsbroschüre.',
      sentenceTranslations: {
        'So, und jetzt habe ich eine Info für euch.': { literal: 'Так, и сейчас имею я одну информацию для вас', literary: 'Итак, у меня есть для вас информация.' },
        'Das Jugendferienwerk Mannheim organisiert in den großen Ferien wieder viele Sprachreisen für Jugendliche zwischen 14 und 18 Jahren.': { literal: 'Молодёжная организация отдыха Мангейм организует в больших каникулах снова много языковых поездок для молодёжи между 14 и 18 годами', literary: 'Молодёжный центр Мангейма организует на летних каникулах снова много языковых поездок для подростков от 14 до 18 лет.' },
        'Ihr findet die Seite vom Jugendferienwerk mit dem Suchwort „Jugendferienwerk Mannheim".': { literal: 'Вы находите страницу от молодёжного центра с поисковым словом', literary: 'Вы найдёте страницу молодёжного центра по поисковому слову «Jugendferienwerk Mannheim».' },
        'Wenn euch das interessiert, schreibt dem Jugendferienwerk eine Nachricht und dann bekommt ihr und eure Eltern die Informationsbroschüre.': { literal: 'Если вас это интересует, пишите молодёжному центру сообщение и тогда получите вы и ваши родители информационную брошюру', literary: 'Если вас это заинтересовало, напишите молодёжному центру, и тогда вы и ваши родители получите информационную брошюру.' },
      },
      vocabulary: [
        { de: 'die Info', plural: 'die Infos', ru: 'информация', gender: 'feminin', collocation: 'eine Info für euch', example: 'Jetzt habe ich eine Info für euch.' },
        { de: 'die Sprachreise', plural: 'die Sprachreisen', ru: 'языковая поездка', gender: 'feminin', collocation: 'Sprachreisen organisieren', example: 'Das Jugendferienwerk organisiert viele Sprachreisen.' },
        { de: 'die Nachricht', plural: 'die Nachrichten', ru: 'сообщение', gender: 'feminin', collocation: 'eine Nachricht schreiben', example: 'Schreibt dem Jugendferienwerk eine Nachricht.' },
        { de: 'das Suchwort', plural: 'die Suchwörter', ru: 'поисковое слово', gender: 'neutrum', collocation: 'mit dem Suchwort finden', example: 'Ihr findet die Seite mit dem Suchwort.' },
        { de: 'organisieren', ru: 'организовывать', type: 'verb', forms: 'organisiert, organisierte, hat organisiert', example: 'Das Jugendferienwerk organisiert viele Sprachreisen.' },
        { de: 'interessieren', ru: 'интересовать', type: 'verb', forms: 'interessiert, interessierte, hat interessiert', example: 'Wenn euch das interessiert.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Dann bekommt ihr die Informationsbroschüre.' },
      ],
      practiceSentences: [
        { de: 'Wir organisieren eine Reise.', ru: 'Мы организуем поездку.', note: 'V2' },
        { de: 'Schreibt mir eine E-Mail!', ru: 'Напишите мне письмо!', note: 'V1 (Imperativ)' },
        { de: 'Wenn du Zeit hast, komm mit.', ru: 'Если у тебя есть время, пойдём.', note: 'конец в wenn, V1 в Hauptsatz' },
        { de: 'Ich finde das interessant.', ru: 'Я нахожу это интересным.', note: 'V2' },
        { de: 'Die Info ist für alle Schüler.', ru: 'Информация для всех учеников.', note: 'V2' },
      ],
      question: {
        de: 'Wie können Jugendliche mehr Informationen bekommen?',
        ru: 'Как молодёжь может получить больше информации?',
        options: [
          { de: 'Sie sollen zum Jugendferienwerk fahren', ru: 'Они должны поехать в молодёжный центр' },
          { de: 'Sie sollen dem Jugendferienwerk eine Nachricht schreiben', ru: 'Они должны написать сообщение молодёжному центру' },
          { de: 'Sie sollen anrufen', ru: 'Они должны позвонить' },
        ],
        correct: 1,
        explanation: 'В тексте сказано: "schreibt dem Jugendferienwerk eine Nachricht und dann bekommt ihr die Informationsbroschüre."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Hyia - Freizeitbad',
      type: 'телефонное сообщение',
      text: 'Hallo, hier ist Hyia. Ich habe mir jetzt alle Geschenke in Ruhe angesehen. Vielen Dank für euren Gutschein für das Freizeitbad. Ich habe schon mit Eddie, Rick, Tina und Zelica gesprochen. Wir wollen am Samstag zusammen ins Freizeitbad gehen. Kommst du mit? Wir wollen uns um 10 Uhr am Busbahnhof treffen. Ruf mich an, wenn du das gehört hast.',
      sentenceTranslations: {
        'Hallo, hier ist Hyia.': { literal: 'Привет, здесь есть Хиа', literary: 'Привет, это Хиа.' },
        'Ich habe mir jetzt alle Geschenke in Ruhe angesehen.': { literal: 'Я имею себе сейчас все подарки в покое посмотрел', literary: 'Я спокойно посмотрела все подарки.' },
        'Vielen Dank für euren Gutschein für das Freizeitbad.': { literal: 'Много спасибо за ваш купон для бассейна', literary: 'Большое спасибо за ваш подарочный сертификат в аквапарк.' },
        'Ich habe schon mit Eddie, Rick, Tina und Zelica gesprochen.': { literal: 'Я имею уже с Эдди, Риком, Тиной и Зелика поговорила', literary: 'Я уже поговорила с Эдди, Риком, Тиной и Зеликой.' },
        'Wir wollen am Samstag zusammen ins Freizeitbad gehen.': { literal: 'Мы хотим в субботу вместе в аквапарк пойти', literary: 'Мы хотим в субботу вместе пойти в аквапарк.' },
        'Kommst du mit?': { literal: 'Идёшь ты с?', literary: 'Пойдёшь с нами?' },
        'Wir wollen uns um 10 Uhr am Busbahnhof treffen.': { literal: 'Мы хотим нас в 10 часов на автовокзале встретить', literary: 'Мы хотим встретиться в 10 часов на автовокзале.' },
        'Ruf mich an, wenn du das gehört hast.': { literal: 'Позвони меня, если ты это услышал имеешь', literary: 'Позвони мне, когда услышишь это.' },
      },
      vocabulary: [
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'Geschenke ansehen', example: 'Ich habe mir jetzt alle Geschenke in Ruhe angesehen.' },
        { de: 'der Gutschein', plural: 'die Gutscheine', ru: 'подарочный сертификат', gender: 'maskulin', collocation: 'Gutschein für das Freizeitbad', example: 'Vielen Dank für euren Gutschein für das Freizeitbad.' },
        { de: 'das Freizeitbad', plural: 'die Freizeitbäder', ru: 'аквапарк', gender: 'neutrum', collocation: 'ins Freizeitbad gehen', example: 'Wir wollen am Samstag zusammen ins Freizeitbad gehen.' },
        { de: 'der Busbahnhof', plural: 'die Busbahnhöfe', ru: 'автовокзал', gender: 'maskulin', collocation: 'am Busbahnhof treffen', example: 'Wir wollen uns um 10 Uhr am Busbahnhof treffen.' },
        { de: 'sich ansehen', ru: 'рассматривать', type: 'verb', forms: 'sieht sich an, sah sich an, hat sich angesehen', example: 'Ich habe mir jetzt alle Geschenke in Ruhe angesehen.' },
        { de: 'mitkommen', ru: 'идти вместе', type: 'verb', forms: 'kommt mit, kam mit, ist mitgekommen', example: 'Kommst du mit?' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Wir wollen uns um 10 Uhr am Busbahnhof treffen.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Ruf mich an, wenn du das gehört hast.' },
      ],
      practiceSentences: [
        { de: 'Ich sehe mir den Film an.', ru: 'Я смотрю фильм.', note: 'отделяемая приставка' },
        { de: 'Wir wollen schwimmen gehen.', ru: 'Мы хотим пойти плавать.', note: 'модальный + инфинитив' },
        { de: 'Ruf mich morgen an!', ru: 'Позвони мне завтра!', note: 'Imperativ, отделяемая' },
        { de: 'Kommst du am Samstag mit?', ru: 'Пойдёшь в субботу с нами?', note: 'V1 вопрос, отделяемая' },
        { de: 'Ich habe das Geschenk bekommen.', ru: 'Я получил подарок.', note: 'Perfekt' },
      ],
      question: {
        de: 'Wo will sich Hyia mit den Freunden treffen?',
        ru: 'Где Хия хочет встретиться с друзьями?',
        options: [
          { de: 'Im Freizeitbad', ru: 'В аквапарке' },
          { de: 'Am Busbahnhof', ru: 'На автовокзале' },
          { de: 'Bei Eddie zu Hause', ru: 'У Эдди дома' },
        ],
        correct: 1,
        explanation: 'Hyia говорит: "Wir wollen uns um 10 Uhr am Busbahnhof treffen."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Schwimmtraining',
      type: 'объявление',
      text: 'Meine sehr verehrten Damen und Herren, um 14 Uhr gibt es wieder unser Schwimmtraining für Jugendliche von 12 bis 18. Kommt alle zum Trainingsschwimmbad in der Schwimmsporthalle. Das Training dauert 45 Minuten und ist kostenlos. Dann nach einer kurzen Pause gibt es ab 15 Uhr die Wassergymnastik für unsere Senioren.',
      sentenceTranslations: {
        'Meine sehr verehrten Damen und Herren, um 14 Uhr gibt es wieder unser Schwimmtraining für Jugendliche von 12 bis 18.': { literal: 'Мои очень уважаемые дамы и господа, в 14 часов даёт это снова наше плавательное тренирование для молодёжи от 12 до 18', literary: 'Уважаемые дамы и господа, в 14:00 снова проводится наша тренировка по плаванию для подростков от 12 до 18 лет.' },
        'Kommt alle zum Trainingsschwimmbad in der Schwimmsporthalle.': { literal: 'Приходите все к тренировочному бассейну в плавательно-спортивном зале', literary: 'Приходите все в тренировочный бассейн в спортивном зале.' },
        'Das Training dauert 45 Minuten und ist kostenlos.': { literal: 'Тренировка длится 45 минут и есть бесплатная', literary: 'Тренировка длится 45 минут и бесплатна.' },
        'Dann nach einer kurzen Pause gibt es ab 15 Uhr die Wassergymnastik für unsere Senioren.': { literal: 'Тогда после одной короткой паузы даёт это с 15 часов водную гимнастику для наших пожилых', literary: 'Затем после короткого перерыва с 15:00 начинается водная гимнастика для пожилых.' },
      },
      vocabulary: [
        { de: 'das Schwimmtraining', ru: 'тренировка по плаванию', gender: 'neutrum', collocation: 'unser Schwimmtraining', example: 'Um 14 Uhr gibt es wieder unser Schwimmtraining.' },
        { de: 'die Minute', plural: 'die Minuten', ru: 'минута', gender: 'feminin', collocation: '45 Minuten dauern', example: 'Das Training dauert 45 Minuten.' },
        { de: 'die Pause', plural: 'die Pausen', ru: 'перерыв', gender: 'feminin', collocation: 'nach einer kurzen Pause', example: 'Nach einer kurzen Pause gibt es die Wassergymnastik.' },
        { de: 'dauern', ru: 'длиться', type: 'verb', forms: 'dauert, dauerte, hat gedauert', example: 'Das Training dauert 45 Minuten.' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Das Training dauert 45 Minuten und ist kostenlos.' },
        { de: 'verehrt', ru: 'уважаемый', type: 'adj', example: 'Meine sehr verehrten Damen und Herren.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute Pizza.', ru: 'Сегодня есть пицца.', note: 'V2 (es gibt)' },
        { de: 'Der Kurs dauert zwei Stunden.', ru: 'Курс длится два часа.', note: 'V2' },
        { de: 'Kommt bitte pünktlich!', ru: 'Приходите, пожалуйста, вовремя!', note: 'V1 (Imperativ)' },
        { de: 'Das Training ist kostenlos.', ru: 'Тренировка бесплатная.', note: 'V2' },
        { de: 'Um 15 Uhr beginnt der Sport.', ru: 'В 15:00 начинается спорт.', note: 'V2 (инверсия)' },
      ],
      question: {
        de: 'Für wen ist das Training um 14 Uhr?',
        ru: 'Для кого тренировка в 14:00?',
        options: [
          { de: 'Für Senioren', ru: 'Для пожилых людей' },
          { de: 'Für Erwachsene', ru: 'Для взрослых' },
          { de: 'Für Jugendliche von 12 bis 18', ru: 'Для подростков от 12 до 18 лет' },
        ],
        correct: 2,
        explanation: 'В тексте сказано: "um 14 Uhr gibt es wieder unser Schwimmtraining für Jugendliche von 12 bis 18."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Park-Treffen',
      type: 'диалог',
      text: 'Treffen wir uns heute Nachmittag im Park? Gute Idee, aber ich war gestern beim Augenarzt, weil ich schlecht sehe und eine Brille brauche, die will ich heute Nachmittag kaufen. Schade, dass du nicht mitkommen kannst. Nora kann auch nicht kommen. Ich habe sie vorhin angerufen und sie hustet stark. Sie muss zu Hause bleiben und Hustensaft nehmen. Und Milana? Sag bloß, die kann auch nicht? Milana war letzte Woche beim Arzt, weil sie abnehmen möchte, und er hat ihr empfohlen viel zu trainieren. Sie geht jetzt dreimal die Woche in den Tennisclub, heute Nachmittag eben auch. Ja, Tennis macht echt Spaß, aber man sollte es mit dem Training auch nicht übertreiben. Florian hat nach dem letzten Fußballtraining, bei dem es geregnet hat und kalt war, starke Halsschmerzen und Fieber bekommen. Er muss jetzt Tabletten nehmen. Ausgehen kann er natürlich erstmal nicht. Oh schade! Vielleicht möchte Togut mit mir in den Park? Ich glaube, Togut wollte heute Nachmittag mit seinem Hund zum Tierarzt. Geht es seinem Hund nicht gut? Doch, es geht ihm gut. Er muss nur untersucht werden. Das muss man einmal im Jahr mit seinem Hund machen. Sag mal, hast du schon Lenja gefragt, ob sie Zeit hat mitzukommen? Ja, habe ich. Lenja hat Zahnschmerzen und geht heute zum Zahnarzt. Dann gehen wir halt an einem anderen Tag in den Park.',
      sentenceTranslations: {
        'Treffen wir uns heute Nachmittag im Park?': { literal: 'Встречаем мы себя сегодня после обеда в парке?', literary: 'Встретимся сегодня днём в парке?' },
        'Gute Idee, aber ich war gestern beim Augenarzt, weil ich schlecht sehe und eine Brille brauche, die will ich heute Nachmittag kaufen.': { literal: 'Хорошая идея, но я был вчера у глазного врача, потому что я плохо вижу и очки нуждаюсь, которые хочу я сегодня после обеда купить', literary: 'Хорошая идея, но я вчера был у окулиста, потому что плохо вижу и мне нужны очки, я хочу купить их сегодня днём.' },
        'Schade, dass du nicht mitkommen kannst.': { literal: 'Жаль, что ты не с-прийти можешь', literary: 'Жаль, что ты не можешь пойти с нами.' },
        'Nora kann auch nicht kommen.': { literal: 'Нора может тоже не прийти', literary: 'Нора тоже не может прийти.' },
        'Ich habe sie vorhin angerufen und sie hustet stark.': { literal: 'Я имею ей недавно позвонил и она кашляет сильно', literary: 'Я ей недавно позвонил, и у неё сильный кашель.' },
        'Sie muss zu Hause bleiben und Hustensaft nehmen.': { literal: 'Она должна дома оставаться и сироп от кашля принимать', literary: 'Она должна оставаться дома и принимать сироп от кашля.' },
        'Und Milana?': { literal: 'А Милана?', literary: 'А Милана?' },
        'Sag bloß, die kann auch nicht?': { literal: 'Скажи только, она может тоже нет?', literary: 'Не говори, что она тоже не может?' },
        'Milana war letzte Woche beim Arzt, weil sie abnehmen möchte, und er hat ihr empfohlen viel zu trainieren.': { literal: 'Милана была на прошлой неделе у врача, потому что она похудеть хочет, и он имеет ей порекомендовал много тренировать', literary: 'Милана была на прошлой неделе у врача, потому что хочет похудеть, и он посоветовал ей много тренироваться.' },
        'Sie geht jetzt dreimal die Woche in den Tennisclub, heute Nachmittag eben auch.': { literal: 'Она ходит сейчас трижды неделю в теннис-клуб, сегодня после обеда тоже', literary: 'Она теперь ходит в теннисный клуб три раза в неделю, сегодня днём тоже.' },
        'Ja, Tennis macht echt Spaß, aber man sollte es mit dem Training auch nicht übertreiben.': { literal: 'Да, теннис делает действительно удовольствие, но человек должен это с тренировкой тоже не перестараться', literary: 'Да, теннис действительно увлекателен, но не стоит перебарщивать с тренировками.' },
        'Florian hat nach dem letzten Fußballtraining, bei dem es geregnet hat und kalt war, starke Halsschmerzen und Fieber bekommen.': { literal: 'Флориан имеет после последней футбольной тренировки, при которой оно дождило и холодно было, сильные боли в горле и жар получил', literary: 'Флориан после последней футбольной тренировки, когда шёл дождь и было холодно, сильно заболел горлом и получил температуру.' },
        'Er muss jetzt Tabletten nehmen.': { literal: 'Он должен сейчас таблетки принимать', literary: 'Ему сейчас нужно принимать таблетки.' },
        'Ausgehen kann er natürlich erstmal nicht.': { literal: 'Выходить может он конечно пока нет', literary: 'Выходить из дома он, конечно, пока не может.' },
        'Oh schade!': { literal: 'О жаль!', literary: 'Ох, как жаль!' },
        'Vielleicht möchte Togut mit mir in den Park?': { literal: 'Может быть хочет Тогут со мной в парк?', literary: 'Может быть, Тогут хочет пойти со мной в парк?' },
        'Ich glaube, Togut wollte heute Nachmittag mit seinem Hund zum Tierarzt.': { literal: 'Я верю, Тогут хотел сегодня после обеда с своей собакой к ветеринару', literary: 'Я думаю, Тогут хотел сегодня днём отвести свою собаку к ветеринару.' },
        'Geht es seinem Hund nicht gut?': { literal: 'Идёт оно его собаке не хорошо?', literary: 'Его собаке нехорошо?' },
        'Doch, es geht ihm gut.': { literal: 'Нет же, оно идёт ему хорошо', literary: 'Нет, с ним всё хорошо.' },
        'Er muss nur untersucht werden.': { literal: 'Он должен только обследован стать', literary: 'Его просто нужно обследовать.' },
        'Das muss man einmal im Jahr mit seinem Hund machen.': { literal: 'Это должен человек один раз в году с своей собакой делать', literary: 'Это нужно делать раз в год с собакой.' },
        'Sag mal, hast du schon Lenja gefragt, ob sie Zeit hat mitzukommen?': { literal: 'Скажи раз, имеешь ты уже Леню спросил, ли она время имеет с-прийти?', literary: 'Слушай, ты уже спрашивал Леню, есть ли у неё время пойти с нами?' },
        'Ja, habe ich.': { literal: 'Да, имею я', literary: 'Да, спрашивал.' },
        'Lenja hat Zahnschmerzen und geht heute zum Zahnarzt.': { literal: 'Леня имеет зубные боли и идёт сегодня к зубному врачу', literary: 'У Лени болят зубы, и она сегодня идёт к стоматологу.' },
        'Dann gehen wir halt an einem anderen Tag in den Park.': { literal: 'Тогда идём мы просто в один другой день в парк', literary: 'Тогда пойдём в парк в другой день.' },
      },
      vocabulary: [
        { de: 'der Augenarzt', plural: 'die Augenärzte', ru: 'окулист', gender: 'maskulin', collocation: 'beim Augenarzt sein', example: 'Ich war gestern beim Augenarzt.' },
        { de: 'die Brille', plural: 'die Brillen', ru: 'очки', gender: 'feminin', collocation: 'eine Brille brauchen', example: 'Weil ich schlecht sehe und eine Brille brauche.' },
        { de: 'der Hustensaft', plural: 'die Hustensäfte', ru: 'сироп от кашля', gender: 'maskulin', collocation: 'Hustensaft nehmen', example: 'Sie muss zu Hause bleiben und Hustensaft nehmen.' },
        { de: 'der Tennisclub', plural: 'die Tennisclubs', ru: 'теннисный клуб', gender: 'maskulin', collocation: 'in den Tennisclub gehen', example: 'Sie geht jetzt dreimal die Woche in den Tennisclub.' },
        { de: 'die Tablette', plural: 'die Tabletten', ru: 'таблетка', gender: 'feminin', collocation: 'Tabletten nehmen', example: 'Er muss jetzt Tabletten nehmen.' },
        { de: 'das Fieber', ru: 'температура, жар', gender: 'neutrum', collocation: 'Fieber bekommen', example: 'Florian hat starke Halsschmerzen und Fieber bekommen.' },
        { de: 'der Tierarzt', plural: 'die Tierärzte', ru: 'ветеринар', gender: 'maskulin', collocation: 'zum Tierarzt gehen', example: 'Togut wollte heute Nachmittag mit seinem Hund zum Tierarzt.' },
        { de: 'der Zahnarzt', plural: 'die Zahnärzte', ru: 'стоматолог', gender: 'maskulin', collocation: 'zum Zahnarzt gehen', example: 'Lenja hat Zahnschmerzen und geht heute zum Zahnarzt.' },
        { de: 'husten', ru: 'кашлять', type: 'verb', forms: 'hustet, hustete, hat gehustet', example: 'Sie hustet stark.' },
        { de: 'abnehmen', ru: 'худеть', type: 'verb', forms: 'nimmt ab, nahm ab, hat abgenommen', example: 'Milana war beim Arzt, weil sie abnehmen möchte.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Er hat ihr empfohlen viel zu trainieren.' },
        { de: 'übertreiben', ru: 'перебарщивать', type: 'verb', forms: 'übertreibt, übertrieb, hat übertrieben', example: 'Man sollte es mit dem Training auch nicht übertreiben.' },
        { de: 'untersuchen', ru: 'обследовать', type: 'verb', forms: 'untersucht, untersuchte, hat untersucht', example: 'Er muss nur untersucht werden.' },
      ],
      practiceSentences: [
        { de: 'Wir treffen uns morgen.', ru: 'Мы встретимся завтра.', note: 'V2, sich' },
        { de: 'Ich war beim Zahnarzt.', ru: 'Я был у стоматолога.', note: 'V2' },
        { de: 'Sie muss Tabletten nehmen.', ru: 'Она должна принимать таблетки.', note: 'модальный + инфинитив' },
        { de: 'Er geht zweimal pro Woche joggen.', ru: 'Он бегает два раза в неделю.', note: 'V2' },
        { de: 'Ich kann nicht mitkommen.', ru: 'Я не могу пойти с вами.', note: 'модальный + отделяемая' },
      ],
      question: {
        de: 'Warum kann Milana nicht in den Park kommen?',
        ru: 'Почему Милана не может прийти в парк?',
        options: [
          { de: 'Sie muss zum Arzt gehen', ru: 'Она должна идти к врачу' },
          { de: 'Sie geht zum Tennisclub', ru: 'Она идёт в теннисный клуб' },
          { de: 'Sie hat Halsschmerzen', ru: 'У неё болит горло' },
        ],
        correct: 1,
        explanation: 'В диалоге сказано: "Sie geht jetzt dreimal die Woche in den Tennisclub, heute Nachmittag eben auch."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Mittagessen',
      type: 'диалог',
      text: 'Papa, was gibt\'s heute zu Mittag? Ich koche gerade Fleisch in Tomatensoße. Möchtest du Reis dazu? Nein, lieber nicht. Reis haben wir doch gestern gegessen. Kannst du Pommes frites machen? Habe leider keine Kartoffeln da. Wie wär\'s mit gegrilltem Gemüse? Gemüse? Dann esse ich lieber wieder Reis.',
      sentenceTranslations: {
        'Papa, was gibt\'s heute zu Mittag?': { literal: 'Папа, что даётся сегодня к обеду?', literary: 'Папа, что сегодня на обед?' },
        'Ich koche gerade Fleisch in Tomatensoße.': { literal: 'Я готовлю прямо сейчас мясо в томатном соусе', literary: 'Я как раз готовлю мясо в томатном соусе.' },
        'Möchtest du Reis dazu?': { literal: 'Хочешь ты рис к этому?', literary: 'Хочешь к этому рис?' },
        'Nein, lieber nicht.': { literal: 'Нет, лучше нет', literary: 'Нет, лучше не надо.' },
        'Reis haben wir doch gestern gegessen.': { literal: 'Рис имеем мы ведь вчера съели', literary: 'Мы же вчера ели рис.' },
        'Kannst du Pommes frites machen?': { literal: 'Можешь ты картофель фри делать?', literary: 'Можешь приготовить картофель фри?' },
        'Habe leider keine Kartoffeln da.': { literal: 'Имею к сожалению никаких картофелей тут', literary: 'К сожалению, у меня нет картофеля.' },
        'Wie wär\'s mit gegrilltem Gemüse?': { literal: 'Как было бы с жареными на гриле овощами?', literary: 'Как насчёт овощей на гриле?' },
        'Gemüse?': { literal: 'Овощи?', literary: 'Овощи?' },
        'Dann esse ich lieber wieder Reis.': { literal: 'Тогда ем я лучше снова рис', literary: 'Тогда лучше снова буду есть рис.' },
      },
      vocabulary: [
        { de: 'das Fleisch', ru: 'мясо', gender: 'neutrum', collocation: 'Fleisch kochen', example: 'Ich koche gerade Fleisch in Tomatensoße.' },
        { de: 'der Reis', ru: 'рис', gender: 'maskulin', collocation: 'Reis essen', example: 'Reis haben wir doch gestern gegessen.' },
        { de: 'die Kartoffel', plural: 'die Kartoffeln', ru: 'картофель', gender: 'feminin', collocation: 'keine Kartoffeln haben', example: 'Habe leider keine Kartoffeln da.' },
        { de: 'das Gemüse', ru: 'овощи', gender: 'neutrum', collocation: 'gegrilltes Gemüse', example: 'Wie wär\'s mit gegrilltem Gemüse?' },
        { de: 'kochen', ru: 'готовить', type: 'verb', forms: 'kocht, kochte, hat gekocht', example: 'Ich koche gerade Fleisch in Tomatensoße.' },
        { de: 'essen', ru: 'есть, кушать', type: 'verb', forms: 'isst, aß, hat gegessen', example: 'Reis haben wir doch gestern gegessen.' },
        { de: 'gerade', ru: 'как раз, сейчас', type: 'adv', example: 'Ich koche gerade Fleisch in Tomatensoße.' },
      ],
      practiceSentences: [
        { de: 'Was gibt\'s zum Frühstück?', ru: 'Что на завтрак?', note: 'V2 (es gibt)' },
        { de: 'Ich koche gerade Suppe.', ru: 'Я как раз готовлю суп.', note: 'V2' },
        { de: 'Möchtest du Salat dazu?', ru: 'Хочешь салат к этому?', note: 'V1 (вопрос)' },
        { de: 'Wir haben gestern Pizza gegessen.', ru: 'Мы вчера ели пиццу.', note: 'Perfekt' },
        { de: 'Ich esse lieber Nudeln.', ru: 'Я предпочитаю макароны.', note: 'V2' },
      ],
      question: {
        de: 'Was isst das Kind schließlich?',
        ru: 'Что в итоге будет есть ребёнок?',
        options: [
          { de: 'Pommes frites', ru: 'Картофель фри' },
          { de: 'Gegrilltes Gemüse', ru: 'Овощи гриль' },
          { de: 'Reis', ru: 'Рис' },
        ],
        correct: 2,
        explanation: 'Ребёнок говорит в конце: "Gemüse? Dann esse ich lieber wieder Reis."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Sport-Diana',
      type: 'диалог',
      text: 'Du bist doch so fit, du kannst mir sicher helfen. Würdest du mir Tanzen, Schwimmen oder Joggen empfehlen? Ich muss endlich ein bisschen Sport treiben. Hi, ich finde alle drei Ideen gut. Am besten ist, du machst das, was dir am meisten Spaß macht. Hm, schwimmen gehe ich schon gerne, aber am liebsten tanze ich. Ich kann dir bei dir in der Nähe eine super coole Tanzschule empfehlen. Ich würde mir aber an deiner Stelle auch Joggen überlegen. Das kostet nämlich nichts. Ja, da hast du recht. Ich probiere es aber lieber erst mit dem Tanzkurs, denn das macht mir am meisten Spaß.',
      sentenceTranslations: {
        'Du bist doch so fit, du kannst mir sicher helfen.': { literal: 'Ты есть ведь так в форме, ты можешь мне точно помочь', literary: 'Ты же такая спортивная, ты наверняка можешь мне помочь.' },
        'Würdest du mir Tanzen, Schwimmen oder Joggen empfehlen?': { literal: 'Рекомендовал бы ты мне танцы, плавание или бег трусцой?', literary: 'Ты бы порекомендовала мне танцы, плавание или бег?' },
        'Ich muss endlich ein bisschen Sport treiben.': { literal: 'Я должна наконец немного спорт делать', literary: 'Мне наконец нужно заняться спортом.' },
        'Hi, ich finde alle drei Ideen gut.': { literal: 'Привет, я нахожу все три идеи хорошими', literary: 'Привет, я считаю, что все три идеи хорошие.' },
        'Am besten ist, du machst das, was dir am meisten Spaß macht.': { literal: 'Лучше всего есть, ты делаешь то, что тебе больше всего удовольствие делает', literary: 'Лучше всего делать то, что тебе больше всего нравится.' },
        'Hm, schwimmen gehe ich schon gerne, aber am liebsten tanze ich.': { literal: 'Хм, плавать хожу я уже охотно, но охотнее всего танцую я', literary: 'Хм, плавать я люблю, но больше всего мне нравится танцевать.' },
        'Ich kann dir bei dir in der Nähe eine super coole Tanzschule empfehlen.': { literal: 'Я могу тебе у тебя в близости одну супер классную школу танцев порекомендовать', literary: 'Я могу порекомендовать тебе классную школу танцев рядом с тобой.' },
        'Ich würde mir aber an deiner Stelle auch Joggen überlegen.': { literal: 'Я бы себе но на твоём месте тоже бег обдумала', literary: 'Но на твоём месте я бы подумала и о беге.' },
        'Das kostet nämlich nichts.': { literal: 'Это стоит а именно ничего', literary: 'Ведь это ничего не стоит.' },
        'Ja, da hast du recht.': { literal: 'Да, тут имеешь ты правоту', literary: 'Да, тут ты права.' },
        'Ich probiere es aber lieber erst mit dem Tanzkurs, denn das macht mir am meisten Spaß.': { literal: 'Я пробую это но лучше сначала с курсом танцев, ведь это делает мне больше всего удовольствие', literary: 'Но я лучше сначала попробую танцевальный курс, ведь это мне нравится больше всего.' },
      },
      vocabulary: [
        { de: 'der Sport', ru: 'спорт', gender: 'maskulin', collocation: 'Sport treiben', example: 'Ich muss endlich ein bisschen Sport treiben.' },
        { de: 'die Tanzschule', plural: 'die Tanzschulen', ru: 'школа танцев', gender: 'feminin', collocation: 'eine coole Tanzschule', example: 'Ich kann dir eine super coole Tanzschule empfehlen.' },
        { de: 'der Tanzkurs', plural: 'die Tanzkurse', ru: 'курс танцев', gender: 'maskulin', collocation: 'mit dem Tanzkurs', example: 'Ich probiere es lieber erst mit dem Tanzkurs.' },
        { de: 'der Spaß', ru: 'удовольствие', gender: 'maskulin', collocation: 'Spaß machen', example: 'Das macht mir am meisten Spaß.' },
        { de: 'kosten', ru: 'стоить', type: 'verb', forms: 'kostet, kostete, hat gekostet', example: 'Das kostet nämlich nichts.' },
        { de: 'überlegen', ru: 'обдумывать', type: 'verb', forms: 'überlegt, überlegte, hat überlegt', example: 'Ich würde mir an deiner Stelle auch Joggen überlegen.' },
        { de: 'endlich', ru: 'наконец', type: 'adv', example: 'Ich muss endlich ein bisschen Sport treiben.' },
        { de: 'nämlich', ru: 'а именно, ведь', type: 'adv', example: 'Das kostet nämlich nichts.' },
      ],
      practiceSentences: [
        { de: 'Ich treibe gern Sport.', ru: 'Я люблю заниматься спортом.', note: 'V2' },
        { de: 'Was macht dir Spaß?', ru: 'Что тебе нравится?', note: 'V2' },
        { de: 'Würdest du mir helfen?', ru: 'Ты бы мне помог?', note: 'V1 (Konjunktiv II)' },
        { de: 'Das kostet nichts.', ru: 'Это ничего не стоит.', note: 'V2' },
        { de: 'Ich kann dir etwas empfehlen.', ru: 'Я могу тебе кое-что порекомендовать.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was will Diana zuerst ausprobieren?',
        ru: 'Что Диана хочет попробовать сначала?',
        options: [
          { de: 'Joggen', ru: 'Бег трусцой' },
          { de: 'Schwimmen', ru: 'Плавание' },
          { de: 'Tanzkurs', ru: 'Курс танцев' },
        ],
        correct: 2,
        explanation: 'Diana говорит: "Ich probiere es aber lieber erst mit dem Tanzkurs, denn das macht mir am meisten Spaß."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Tablet-Nachrichten',
      type: 'диалог',
      text: 'Mama, du hast aber auch ständig das Tablet in der Hand. Ich lese doch nur Nachrichten. Nachrichten kann man auch im Radio hören oder in der Zeitung lesen. Ich weiß. Im Radio nervt mich aber die viele Reklame. Zeitung lese ich schon ab und zu, aber im Internet bekommt man die aktuellsten Informationen. Deshalb lese ich die Nachrichten lieber am Tablet. Okay, aber schimpf dann bitte nicht gleich, wenn ich mal das Tablet in die Hand nehme.',
      sentenceTranslations: {
        'Mama, du hast aber auch ständig das Tablet in der Hand.': { literal: 'Мама, ты имеешь но также постоянно планшет в руке', literary: 'Мама, ты же постоянно с планшетом в руках.' },
        'Ich lese doch nur Nachrichten.': { literal: 'Я читаю ведь только новости', literary: 'Я же только новости читаю.' },
        'Nachrichten kann man auch im Radio hören oder in der Zeitung lesen.': { literal: 'Новости может человек также в радио слушать или в газете читать', literary: 'Новости можно также слушать по радио или читать в газете.' },
        'Ich weiß.': { literal: 'Я знаю', literary: 'Я знаю.' },
        'Im Radio nervt mich aber die viele Reklame.': { literal: 'В радио раздражает меня но многая реклама', literary: 'Но меня раздражает обилие рекламы по радио.' },
        'Zeitung lese ich schon ab und zu, aber im Internet bekommt man die aktuellsten Informationen.': { literal: 'Газету читаю я уже время от времени, но в интернете получает человек самые актуальные информации', literary: 'Газеты я читаю иногда, но в интернете можно получить самые свежие новости.' },
        'Deshalb lese ich die Nachrichten lieber am Tablet.': { literal: 'Поэтому читаю я новости лучше на планшете', literary: 'Поэтому я предпочитаю читать новости на планшете.' },
        'Okay, aber schimpf dann bitte nicht gleich, wenn ich mal das Tablet in die Hand nehme.': { literal: 'Окей, но ругай тогда пожалуйста не сразу, когда я раз планшет в руку беру', literary: 'Ладно, но тогда не ругайся сразу, когда я возьму планшет в руки.' },
      },
      vocabulary: [
        { de: 'das Tablet', plural: 'die Tablets', ru: 'планшет', gender: 'neutrum', collocation: 'das Tablet in der Hand', example: 'Du hast aber auch ständig das Tablet in der Hand.' },
        { de: 'die Nachricht', plural: 'die Nachrichten', ru: 'новость', gender: 'feminin', collocation: 'Nachrichten lesen', example: 'Ich lese doch nur Nachrichten.' },
        { de: 'die Zeitung', plural: 'die Zeitungen', ru: 'газета', gender: 'feminin', collocation: 'in der Zeitung lesen', example: 'Nachrichten kann man in der Zeitung lesen.' },
        { de: 'die Reklame', plural: 'die Reklamen', ru: 'реклама', gender: 'feminin', collocation: 'die viele Reklame', example: 'Im Radio nervt mich aber die viele Reklame.' },
        { de: 'nerven', ru: 'раздражать', type: 'verb', forms: 'nervt, nervte, hat genervt', example: 'Im Radio nervt mich aber die viele Reklame.' },
        { de: 'schimpfen', ru: 'ругаться', type: 'verb', forms: 'schimpft, schimpfte, hat geschimpft', example: 'Schimpf dann bitte nicht gleich.' },
        { de: 'ständig', ru: 'постоянно', type: 'adv', example: 'Du hast aber auch ständig das Tablet in der Hand.' },
        { de: 'aktuell', ru: 'актуальный, свежий', type: 'adj', example: 'Im Internet bekommt man die aktuellsten Informationen.' },
      ],
      practiceSentences: [
        { de: 'Ich lese nur Nachrichten.', ru: 'Я читаю только новости.', note: 'V2' },
        { de: 'Das nervt mich sehr.', ru: 'Это меня очень раздражает.', note: 'V2' },
        { de: 'Man kann Radio hören.', ru: 'Можно слушать радио.', note: 'модальный + инфинитив' },
        { de: 'Deshalb bleibe ich zu Hause.', ru: 'Поэтому я остаюсь дома.', note: 'V2 после deshalb' },
        { de: 'Ich nehme lieber das Handy.', ru: 'Я предпочитаю телефон.', note: 'V2' },
      ],
      question: {
        de: 'Wo liest die Mutter am liebsten Nachrichten?',
        ru: 'Где мама предпочитает читать новости?',
        options: [
          { de: 'In der Zeitung', ru: 'В газете' },
          { de: 'Am Tablet', ru: 'На планшете' },
          { de: 'Im Radio', ru: 'По радио' },
        ],
        correct: 1,
        explanation: 'Мама говорит: "Deshalb lese ich die Nachrichten lieber am Tablet."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Zirkus-Manuel',
      type: 'диалог',
      text: 'Manuel, am Samstag kommen dein Onkel und dein Cousin zu Besuch. Wir holen sie vormittags vom Bahnhof ab. Wollen wir gemeinsam was Schönes unternehmen? Wir könnten zusammen in den Zoo gehen. Und in der Nähe vom Bahnhof gibt es auch einen Zirkus mit ganz tollen Akrobaten. Im Zoo waren wir schon so oft. Das finde ich langweilig. Wollen wir nicht lieber reiten gehen? Reiten können wir auch nächstes Mal, wenn sie wiederkommen. Der Zirkus ist aber nur noch eine Woche da. Dann gehen wir am Samstag in den Zirkus! Hurra!',
      sentenceTranslations: {
        'Manuel, am Samstag kommen dein Onkel und dein Cousin zu Besuch.': { literal: 'Мануэль, в субботу приходят твой дядя и твой двоюродный брат в гости', literary: 'Мануэль, в субботу приезжают твой дядя и двоюродный брат.' },
        'Wir holen sie vormittags vom Bahnhof ab.': { literal: 'Мы забираем их утром с вокзала', literary: 'Мы заберём их с вокзала утром.' },
        'Wollen wir gemeinsam was Schönes unternehmen?': { literal: 'Хотим мы вместе что-то красивое предпринять?', literary: 'Давайте сделаем что-нибудь интересное вместе?' },
        'Wir könnten zusammen in den Zoo gehen.': { literal: 'Мы могли бы вместе в зоопарк пойти', literary: 'Мы могли бы сходить в зоопарк.' },
        'Und in der Nähe vom Bahnhof gibt es auch einen Zirkus mit ganz tollen Akrobaten.': { literal: 'И в близости от вокзала даёт это тоже один цирк с совсем отличными акробатами', literary: 'И рядом с вокзалом есть цирк с отличными акробатами.' },
        'Im Zoo waren wir schon so oft.': { literal: 'В зоопарке были мы уже так часто', literary: 'В зоопарке мы уже были так часто.' },
        'Das finde ich langweilig.': { literal: 'Это нахожу я скучным', literary: 'Это скучно.' },
        'Wollen wir nicht lieber reiten gehen?': { literal: 'Хотим мы не лучше верхом ехать пойти?', literary: 'Не лучше ли нам пойти кататься верхом?' },
        'Reiten können wir auch nächstes Mal, wenn sie wiederkommen.': { literal: 'Верхом ехать можем мы тоже следующий раз, когда они снова-приедут', literary: 'Кататься верхом мы можем и в следующий раз, когда они приедут.' },
        'Der Zirkus ist aber nur noch eine Woche da.': { literal: 'Цирк есть но только ещё одну неделю тут', literary: 'Но цирк будет здесь только ещё неделю.' },
        'Dann gehen wir am Samstag in den Zirkus!': { literal: 'Тогда идём мы в субботу в цирк!', literary: 'Тогда в субботу идём в цирк!' },
        'Hurra!': { literal: 'Ура!', literary: 'Ура!' },
      },
      vocabulary: [
        { de: 'der Cousin', plural: 'die Cousins', ru: 'двоюродный брат', gender: 'maskulin', collocation: 'dein Cousin zu Besuch', example: 'Am Samstag kommen dein Onkel und dein Cousin zu Besuch.' },
        { de: 'der Bahnhof', plural: 'die Bahnhöfe', ru: 'вокзал', gender: 'maskulin', collocation: 'vom Bahnhof abholen', example: 'Wir holen sie vormittags vom Bahnhof ab.' },
        { de: 'der Zirkus', plural: 'die Zirkusse', ru: 'цирк', gender: 'maskulin', collocation: 'in den Zirkus gehen', example: 'Dann gehen wir am Samstag in den Zirkus!' },
        { de: 'der Akrobat', plural: 'die Akrobaten', ru: 'акробат', gender: 'maskulin', collocation: 'tolle Akrobaten', example: 'Einen Zirkus mit ganz tollen Akrobaten.' },
        { de: 'abholen', ru: 'забирать, встречать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Wir holen sie vormittags vom Bahnhof ab.' },
        { de: 'unternehmen', ru: 'предпринимать', type: 'verb', forms: 'unternimmt, unternahm, hat unternommen', example: 'Wollen wir gemeinsam was Schönes unternehmen?' },
        { de: 'reiten', ru: 'ездить верхом', type: 'verb', forms: 'reitet, ritt, ist geritten', example: 'Wollen wir nicht lieber reiten gehen?' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Das finde ich langweilig.' },
        { de: 'gemeinsam', ru: 'вместе, совместно', type: 'adv', example: 'Wollen wir gemeinsam was Schönes unternehmen?' },
      ],
      practiceSentences: [
        { de: 'Wir holen dich ab.', ru: 'Мы тебя заберём.', note: 'отделяемая приставка' },
        { de: 'Sie kommen zu Besuch.', ru: 'Они приезжают в гости.', note: 'V2' },
        { de: 'Wollen wir etwas unternehmen?', ru: 'Давайте что-нибудь предпримем?', note: 'V1 (вопрос)' },
        { de: 'Das war schon oft so.', ru: 'Это уже часто было так.', note: 'V2' },
        { de: 'Der Bus ist nur heute da.', ru: 'Автобус только сегодня здесь.', note: 'V2' },
      ],
      question: {
        de: 'Wohin gehen sie am Samstag?',
        ru: 'Куда они пойдут в субботу?',
        options: [
          { de: 'In den Zoo', ru: 'В зоопарк' },
          { de: 'Zum Reiten', ru: 'Кататься верхом' },
          { de: 'In den Zirkus', ru: 'В цирк' },
        ],
        correct: 2,
        explanation: 'В конце решают: "Dann gehen wir am Samstag in den Zirkus! Hurra!"'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Geschenk-Maron',
      type: 'диалог',
      text: 'Maron, Mama hat nächste Woche Geburtstag. Ich will ihr aber nicht schon wieder Blumen schenken. Ja, was denn dann? Sie hat doch alles, was sie braucht, und über Blumen freut sie sich immer. Sie liebt doch Ringe. Vielleicht kaufe ich ihr einen schönen Ring. Sie hat schon so viele Ringe. Ich glaube nicht, dass sie noch einen braucht. Ich hab\'s! Wir schenken ihr eine neue Geldbörse. Ja super! Da freut sie sich bestimmt, weil ihre Geldbörse schon ziemlich alt ist.',
      sentenceTranslations: {
        'Maron, Mama hat nächste Woche Geburtstag.': { literal: 'Марон, мама имеет следующую неделю день рождения', literary: 'Марон, у мамы на следующей неделе день рождения.' },
        'Ich will ihr aber nicht schon wieder Blumen schenken.': { literal: 'Я хочу ей но не уже снова цветы дарить', literary: 'Но я не хочу снова дарить ей цветы.' },
        'Ja, was denn dann?': { literal: 'Да, что же тогда?', literary: 'Ну а что тогда?' },
        'Sie hat doch alles, was sie braucht, und über Blumen freut sie sich immer.': { literal: 'Она имеет ведь всё, что она нуждается, и о цветах радуется она себя всегда', literary: 'У неё же есть всё, что нужно, а цветам она всегда рада.' },
        'Sie liebt doch Ringe.': { literal: 'Она любит ведь кольца', literary: 'Она же любит кольца.' },
        'Vielleicht kaufe ich ihr einen schönen Ring.': { literal: 'Может быть покупаю я ей одно красивое кольцо', literary: 'Может, купить ей красивое кольцо.' },
        'Sie hat schon so viele Ringe.': { literal: 'Она имеет уже так много колец', literary: 'У неё уже так много колец.' },
        'Ich glaube nicht, dass sie noch einen braucht.': { literal: 'Я верю не, что она ещё одно нуждается', literary: 'Не думаю, что ей нужно ещё одно.' },
        'Ich hab\'s!': { literal: 'Я имею это!', literary: 'Придумал!' },
        'Wir schenken ihr eine neue Geldbörse.': { literal: 'Мы дарим ей один новый кошелёк', literary: 'Подарим ей новый кошелёк.' },
        'Ja super!': { literal: 'Да супер!', literary: 'Да, отлично!' },
        'Da freut sie sich bestimmt, weil ihre Geldbörse schon ziemlich alt ist.': { literal: 'Тут радуется она себя точно, потому что её кошелёк уже довольно старый есть', literary: 'Она точно обрадуется, потому что её кошелёк уже довольно старый.' },
      },
      vocabulary: [
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'Geburtstag haben', example: 'Mama hat nächste Woche Geburtstag.' },
        { de: 'die Blume', plural: 'die Blumen', ru: 'цветок', gender: 'feminin', collocation: 'Blumen schenken', example: 'Ich will ihr aber nicht schon wieder Blumen schenken.' },
        { de: 'der Ring', plural: 'die Ringe', ru: 'кольцо', gender: 'maskulin', collocation: 'einen schönen Ring kaufen', example: 'Vielleicht kaufe ich ihr einen schönen Ring.' },
        { de: 'die Geldbörse', plural: 'die Geldbörsen', ru: 'кошелёк', gender: 'feminin', collocation: 'eine neue Geldbörse schenken', example: 'Wir schenken ihr eine neue Geldbörse.' },
        { de: 'schenken', ru: 'дарить', type: 'verb', forms: 'schenkt, schenkte, hat geschenkt', example: 'Ich will ihr aber nicht schon wieder Blumen schenken.' },
        { de: 'sich freuen', ru: 'радоваться', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Über Blumen freut sie sich immer.' },
        { de: 'lieben', ru: 'любить', type: 'verb', forms: 'liebt, liebte, hat geliebt', example: 'Sie liebt doch Ringe.' },
        { de: 'ziemlich', ru: 'довольно', type: 'adv', example: 'Ihre Geldbörse schon ziemlich alt ist.' },
      ],
      practiceSentences: [
        { de: 'Er hat morgen Geburtstag.', ru: 'У него завтра день рождения.', note: 'V2' },
        { de: 'Ich will ihr etwas schenken.', ru: 'Я хочу ей что-то подарить.', note: 'модальный + инфинитив' },
        { de: 'Sie braucht neue Schuhe.', ru: 'Ей нужны новые туфли.', note: 'V2' },
        { de: 'Was kaufen wir denn?', ru: 'Что же мы купим?', note: 'V2' },
        { de: 'Ich hab\'s gefunden!', ru: 'Я нашёл!', note: 'Perfekt' },
      ],
      question: {
        de: 'Was schenken sie der Mutter zum Geburtstag?',
        ru: 'Что они подарят маме на день рождения?',
        options: [
          { de: 'Blumen', ru: 'Цветы' },
          { de: 'Einen Ring', ru: 'Кольцо' },
          { de: 'Eine Geldbörse', ru: 'Кошелёк' },
        ],
        correct: 2,
        explanation: 'Они решают: "Ich hab\'s! Wir schenken ihr eine neue Geldbörse. - Ja super!"'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Joshua',
      type: 'интервью',
      text: 'Hallo Joshua, du kannst uns wahrscheinlich als Jugendlicher am besten sagen, wie der Alltag eines Schülers so ist. Wann stehst du also normalerweise auf? Wenn ich Schule habe, stehe ich um 7:45 Uhr auf. An den Wochenenden und wenn ich sonst frei habe, schlafe ich, solange ich will, meistens so bis 11:15. Das ist aber früh! Ja, es fällt mir auch sehr schwer, um diese Zeit aufzustehen. Wenn ich manchmal länger schlafe und 5 oder 10 Minuten später aufstehe, komme ich zu spät zur Schule. Ich muss ja spätestens um 8 Uhr in der Schule sein. Verstehe. Beschreib uns mal so einen Tag, an dem du Schule hast. Wie läuft er ab? Ich habe von 8 bis 13:30 Unterricht. Zur Schule gehe ich zu Fuß. Auf dem Weg treffe ich meistens auch Freunde, was toll ist, weil wir uns bis zur Schule unterhalten können. Wenn aber das Wetter sehr schlecht ist, fahren mich meine Eltern mit dem Auto hin. Und was machst du nach der Schule? Zu Hause esse ich erst zu Mittag und darf dann eine Stunde fernsehen. Danach muss ich Hausaufgaben machen. Wie lange lernst du? Für meine Hausaufgaben brauche ich normalerweise zwei Stunden. Vor einem Test muss ich natürlich länger lernen. Machst du nachmittags außer deinen Hausaufgaben nichts? Doch, entweder surfe ich im Internet und spiele verschiedene Computerspiele oder ich treffe meinen besten Freund, der bei mir in der Nähe wohnt. Aber nur, wenn wir beide mit den Hausaufgaben fertig sind. Und wann gehst du ins Bett? Sonntags bis donnerstags muss ich früh schlafen gehen, weil ich ja am nächsten Tag Schule habe, also spätestens um 21:30. Am Wochenende ist natürlich alles anders. Danke, Joshua!',
      sentenceTranslations: {
        'Hallo Joshua, du kannst uns wahrscheinlich als Jugendlicher am besten sagen, wie der Alltag eines Schülers so ist.': { literal: 'Привет Джошуа, ты можешь нам вероятно как подросток лучше всего сказать, как будни одного ученика так есть', literary: 'Привет, Джошуа, ты как подросток, наверное, лучше всех расскажешь, какова повседневная жизнь школьника.' },
        'Wann stehst du also normalerweise auf?': { literal: 'Когда встаёшь ты итак обычно?', literary: 'Когда ты обычно встаёшь?' },
        'Wenn ich Schule habe, stehe ich um 7:45 Uhr auf.': { literal: 'Когда я школу имею, встаю я в 7:45 часов', literary: 'Когда у меня школа, я встаю в 7:45.' },
        'An den Wochenenden und wenn ich sonst frei habe, schlafe ich, solange ich will, meistens so bis 11:15.': { literal: 'В выходные и когда я иначе свободно имею, сплю я, так долго как я хочу, чаще всего так до 11:15', literary: 'В выходные и когда у меня свободно, я сплю сколько хочу, обычно до 11:15.' },
        'Das ist aber früh!': { literal: 'Это есть но рано!', literary: 'Это же рано!' },
        'Ja, es fällt mir auch sehr schwer, um diese Zeit aufzustehen.': { literal: 'Да, это падает мне тоже очень тяжело, в это время вставать', literary: 'Да, мне тоже очень трудно вставать в это время.' },
        'Wenn ich manchmal länger schlafe und 5 oder 10 Minuten später aufstehe, komme ich zu spät zur Schule.': { literal: 'Когда я иногда дольше сплю и 5 или 10 минут позже встаю, прихожу я слишком поздно к школе', literary: 'Если я иногда сплю дольше и встаю на 5-10 минут позже, я опаздываю в школу.' },
        'Ich muss ja spätestens um 8 Uhr in der Schule sein.': { literal: 'Я должен же самое позднее в 8 часов в школе быть', literary: 'Я должен быть в школе самое позднее к 8 часам.' },
        'Verstehe.': { literal: 'Понимаю', literary: 'Понятно.' },
        'Beschreib uns mal so einen Tag, an dem du Schule hast.': { literal: 'Опиши нам раз такой один день, в который ты школу имеешь', literary: 'Опиши нам один школьный день.' },
        'Wie läuft er ab?': { literal: 'Как протекает он?', literary: 'Как он проходит?' },
        'Ich habe von 8 bis 13:30 Unterricht.': { literal: 'Я имею от 8 до 13:30 занятия', literary: 'У меня уроки с 8 до 13:30.' },
        'Zur Schule gehe ich zu Fuß.': { literal: 'К школе иду я пешком', literary: 'В школу я хожу пешком.' },
        'Auf dem Weg treffe ich meistens auch Freunde, was toll ist, weil wir uns bis zur Schule unterhalten können.': { literal: 'На пути встречаю я чаще всего тоже друзей, что классно есть, потому что мы нас до школы беседовать можем', literary: 'По дороге я обычно встречаю друзей, что здорово, потому что мы можем поболтать по пути.' },
        'Wenn aber das Wetter sehr schlecht ist, fahren mich meine Eltern mit dem Auto hin.': { literal: 'Когда но погода очень плохая есть, везут меня мои родители с машиной туда', literary: 'Но когда погода очень плохая, родители отвозят меня на машине.' },
        'Und was machst du nach der Schule?': { literal: 'И что делаешь ты после школы?', literary: 'А что ты делаешь после школы?' },
        'Zu Hause esse ich erst zu Mittag und darf dann eine Stunde fernsehen.': { literal: 'Дома ем я сначала к обеду и могу тогда один час телевизор смотреть', literary: 'Дома я сначала обедаю, а потом могу час смотреть телевизор.' },
        'Danach muss ich Hausaufgaben machen.': { literal: 'Потом должен я домашние задания делать', literary: 'Потом мне нужно делать домашние задания.' },
        'Wie lange lernst du?': { literal: 'Как долго учишься ты?', literary: 'Как долго ты учишься?' },
        'Für meine Hausaufgaben brauche ich normalerweise zwei Stunden.': { literal: 'Для моих домашних заданий нуждаюсь я обычно два часа', literary: 'На домашние задания мне обычно нужно два часа.' },
        'Vor einem Test muss ich natürlich länger lernen.': { literal: 'Перед одним тестом должен я конечно дольше учиться', literary: 'Перед контрольной, конечно, учиться нужно дольше.' },
        'Machst du nachmittags außer deinen Hausaufgaben nichts?': { literal: 'Делаешь ты после обеда кроме твоих домашних заданий ничего?', literary: 'Ты ничего не делаешь днём, кроме домашних заданий?' },
        'Doch, entweder surfe ich im Internet und spiele verschiedene Computerspiele oder ich treffe meinen besten Freund, der bei mir in der Nähe wohnt.': { literal: 'Нет же, либо сёрфю я в интернете и играю различные компьютерные игры или я встречаю моего лучшего друга, который у меня в близости живёт', literary: 'Нет, я либо сижу в интернете и играю в компьютерные игры, либо встречаюсь с лучшим другом, который живёт рядом.' },
        'Aber nur, wenn wir beide mit den Hausaufgaben fertig sind.': { literal: 'Но только, когда мы оба с домашними заданиями готовы есть', literary: 'Но только если мы оба закончили с домашними заданиями.' },
        'Und wann gehst du ins Bett?': { literal: 'И когда идёшь ты в кровать?', literary: 'А когда ты ложишься спать?' },
        'Sonntags bis donnerstags muss ich früh schlafen gehen, weil ich ja am nächsten Tag Schule habe, also spätestens um 21:30.': { literal: 'Воскресеньями до четвергами должен я рано спать идти, потому что я же на следующий день школу имею, итак самое позднее в 21:30', literary: 'С воскресенья по четверг я должен рано ложиться, потому что на следующий день школа, то есть не позже 21:30.' },
        'Am Wochenende ist natürlich alles anders.': { literal: 'В выходные есть конечно всё иначе', literary: 'В выходные, конечно, всё по-другому.' },
        'Danke, Joshua!': { literal: 'Спасибо, Джошуа!', literary: 'Спасибо, Джошуа!' },
      },
      vocabulary: [
        { de: 'der Alltag', ru: 'повседневная жизнь', gender: 'maskulin', collocation: 'der Alltag eines Schülers', example: 'Wie der Alltag eines Schülers so ist.' },
        { de: 'der Unterricht', ru: 'занятия, уроки', gender: 'maskulin', collocation: 'Unterricht haben', example: 'Ich habe von 8 bis 13:30 Unterricht.' },
        { de: 'der Weg', plural: 'die Wege', ru: 'путь, дорога', gender: 'maskulin', collocation: 'auf dem Weg', example: 'Auf dem Weg treffe ich meistens auch Freunde.' },
        { de: 'die Hausaufgabe', plural: 'die Hausaufgaben', ru: 'домашнее задание', gender: 'feminin', collocation: 'Hausaufgaben machen', example: 'Danach muss ich Hausaufgaben machen.' },
        { de: 'das Computerspiel', plural: 'die Computerspiele', ru: 'компьютерная игра', gender: 'neutrum', collocation: 'Computerspiele spielen', example: 'Ich spiele verschiedene Computerspiele.' },
        { de: 'das Bett', plural: 'die Betten', ru: 'кровать', gender: 'neutrum', collocation: 'ins Bett gehen', example: 'Wann gehst du ins Bett?' },
        { de: 'aufstehen', ru: 'вставать', type: 'verb', forms: 'steht auf, stand auf, ist aufgestanden', example: 'Wenn ich Schule habe, stehe ich um 7:45 Uhr auf.' },
        { de: 'sich unterhalten', ru: 'беседовать', type: 'verb', forms: 'unterhält sich, unterhielt sich, hat sich unterhalten', example: 'Weil wir uns bis zur Schule unterhalten können.' },
        { de: 'fernsehen', ru: 'смотреть телевизор', type: 'verb', forms: 'sieht fern, sah fern, hat ferngesehen', example: 'Darf dann eine Stunde fernsehen.' },
        { de: 'normalerweise', ru: 'обычно', type: 'adv', example: 'Wann stehst du also normalerweise auf?' },
        { de: 'spätestens', ru: 'самое позднее', type: 'adv', example: 'Ich muss spätestens um 8 Uhr in der Schule sein.' },
        { de: 'meistens', ru: 'чаще всего', type: 'adv', example: 'Auf dem Weg treffe ich meistens auch Freunde.' },
      ],
      practiceSentences: [
        { de: 'Ich stehe früh auf.', ru: 'Я встаю рано.', note: 'отделяемая приставка' },
        { de: 'Wenn ich Zeit habe, lese ich.', ru: 'Когда у меня есть время, я читаю.', note: 'конец в wenn, V2 в Hauptsatz' },
        { de: 'Es fällt mir leicht.', ru: 'Мне это легко.', note: 'безличная конструкция' },
        { de: 'Wir gehen zu Fuß.', ru: 'Мы идём пешком.', note: 'V2' },
        { de: 'Ich bin mit den Hausaufgaben fertig.', ru: 'Я закончил с домашним заданием.', note: 'V2' },
      ],
      question: {
        de: 'Um wie viel Uhr steht Joshua an Schultagen auf?',
        ru: 'Во сколько встаёт Джошуа в школьные дни?',
        options: [
          { de: 'Um 7:45 Uhr', ru: 'В 7:45' },
          { de: 'Um 8:00 Uhr', ru: 'В 8:00' },
          { de: 'Um 11:15 Uhr', ru: 'В 11:15' },
        ],
        correct: 0,
        explanation: 'Joshua говорит: "Wenn ich Schule habe, stehe ich um 7:45 Uhr auf."'
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
    title: 'ШКОЛА, ДРУЗЬЯ И СВОБОДНОЕ ВРЕМЯ',
    text: 'Юлия жила год в {0} у своего дяди. Эдсон живёт недалеко от Бремена и может представить себе поездку за {1}, но не на целый год. Молодёжный центр организует {2} для подростков. Хия хочет встретиться с друзьями на {3}. Тренировка по плаванию {4} 45 минут и бесплатна. Милана ходит в {5} три раза в неделю. Папа готовит {6} в томатном соусе, но ребёнок хочет рис. Диана решает попробовать {7}, потому что это ей больше всего нравится. Маму {8} реклама по радио. Мануэль хочет пойти в {9}. Марон и брат дарят маме новую {10}. Джошуа {11} в 7:45 и идёт в школу {12}.',
    blanks: [
      { answer: 'der Türkei', hint: 'Турция (die Türkei, Dat.)' },
      { answer: 'das Ausland', hint: 'заграница (das Ausland, Akk.)' },
      { answer: 'die Sprachreisen', hint: 'языковые поездки (die Sprachreise, Pl.)' },
      { answer: 'dem Busbahnhof', hint: 'автовокзал (der Busbahnhof, Dat.)' },
      { answer: 'dauert', hint: 'длится (dauern)' },
      { answer: 'den Tennisclub', hint: 'теннисный клуб (der Tennisclub, Akk.)' },
      { answer: 'das Fleisch', hint: 'мясо (das Fleisch)' },
      { answer: 'den Tanzkurs', hint: 'курс танцев (der Tanzkurs, Akk.)' },
      { answer: 'nervt', hint: 'раздражает (nerven)' },
      { answer: 'den Zirkus', hint: 'цирк (der Zirkus, Akk.)' },
      { answer: 'die Geldbörse', hint: 'кошелёк (die Geldbörse, Akk.)' },
      { answer: 'steht auf', hint: 'встаёт (aufstehen)' },
      { answer: 'zu Fuß', hint: 'пешком (zu Fuß)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nКлючевые грамматические темы:\n- Perfekt с sein (gegangen, gewohnt, geschwommen)\n- weil-Nebensatz (глагол в конце)\n- wenn-Nebensatz + Hauptsatz\n- Модальные глаголы (muss, will, kann, möchte, sollte, darf)\n- Отделяемые приставки (aufstehen, abholen, mitkommen, anrufen)\n- Konjunktiv II (würdest, könnten)\n- es gibt + Akkusativ\n- sich + возвратные глаголы\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Julia - Türkei).',
    },
  },
};
LESSONS.push(LESSON_32);
