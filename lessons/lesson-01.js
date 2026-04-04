/* ═══════════════════════════════════════════════════════════
   Lesson 01 — Goethe Zertifikat A2 Hören Modelltest 2022
   Источник: YouTube Vid-65
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_01 = {
  id: 'lesson-01',
  number: 1,
  title: 'Goethe A2 Hören — Modelltest 2022',
  subtitle: 'Dieser Prüfungsteil hat vier Teile: Sendungen, Gespräche, Nachrichten und Durchsagen',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-65',
  videoUrl: 'https://www.youtube.com/watch?v=hH7lbatOrMI',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Frau König',
      type: 'телефонное сообщение',
      text: 'Tag Frau König. Guten Tag. Also ich habe mit meinen Kollegen keine Probleme. Verstehen uns gut. Können gut miteinander reden. Teilen uns die Arbeit gerecht ein. Auch mit den Arbeitszeiten ist alles klar. Man muss nur höflich und freundlich sein, dann gibt es keine Diskussionen. Was nicht passt, dann sage ich es ihnen.',
      sentenceTranslations: {
        'Tag Frau König.': { literal: 'День госпожа Кёниг', literary: 'Добрый день, госпожа Кёниг.' },
        'Guten Tag.': { literal: 'Добрый день', literary: 'Добрый день.' },
        'Also ich habe mit meinen Kollegen keine Probleme.': { literal: 'Итак я имею с моими коллегами никакие проблемы', literary: 'Итак, у меня нет проблем с коллегами.' },
        'Verstehen uns gut.': { literal: 'Понимаем нас хорошо', literary: 'Мы хорошо понимаем друг друга.' },
        'Können gut miteinander reden.': { literal: 'Можем хорошо друг-с-другом говорить', literary: 'Можем хорошо общаться друг с другом.' },
        'Teilen uns die Arbeit gerecht ein.': { literal: 'Делим нам работу справедливо', literary: 'Мы справедливо распределяем работу.' },
        'Man muss nur höflich und freundlich sein, dann gibt es keine Diskussionen.': { literal: 'Человек должен только вежливый и дружелюбный быть, тогда даёт оно никакие дискуссии', literary: 'Нужно только быть вежливым и дружелюбным, тогда не будет никаких споров.' },
        'Was nicht passt, dann sage ich es ihnen.': { literal: 'Что не подходит, тогда говорю я это им', literary: 'Если что-то не подходит, я им об этом говорю.' },
        'Auch mit den Arbeitszeiten ist alles klar.': { literal: 'Также с рабочим-временем есть всё ясно', literary: 'С рабочим временем тоже всё в порядке.' },
      },
      vocabulary: [
        { de: 'der Kollege', plural: 'die Kollegen', ru: 'коллега', gender: 'maskulin', collocation: 'mit Kollegen sprechen', example: 'Ich habe mit meinen Kollegen keine Probleme.' },
        { de: 'das Problem', plural: 'die Probleme', ru: 'проблема', gender: 'neutrum', collocation: 'keine Probleme haben', example: 'Ich habe mit meinen Kollegen keine Probleme.' },
        { de: 'die Arbeit', plural: 'die Arbeiten', ru: 'работа', gender: 'feminin', collocation: 'die Arbeit einteilen', example: 'Teilen uns die Arbeit gerecht ein.' },
        { de: 'die Arbeitszeit', plural: 'die Arbeitszeiten', ru: 'рабочее время', gender: 'feminin', collocation: 'mit den Arbeitszeiten klar sein', example: 'Auch mit den Arbeitszeiten ist alles klar.' },
        { de: 'die Diskussion', plural: 'die Diskussionen', ru: 'дискуссия, спор', gender: 'feminin', collocation: 'keine Diskussionen haben', example: 'Dann gibt es keine Diskussionen.' },
        { de: 'verstehen', ru: 'понимать', type: 'verb', forms: 'verstehe, verstand, hat verstanden', example: 'Verstehen uns gut.' },
        { de: 'einteilen', ru: 'распределять', type: 'verb', forms: 'teile ein, teilte ein, hat eingeteilt', example: 'Teilen uns die Arbeit gerecht ein.' },
        { de: 'gerecht', ru: 'справедливый', type: 'adj', example: 'Teilen uns die Arbeit gerecht ein.' },
        { de: 'höflich', ru: 'вежливый', type: 'adj', example: 'Man muss nur höflich und freundlich sein.' },
        { de: 'freundlich', ru: 'дружелюбный', type: 'adj', example: 'Man muss nur höflich und freundlich sein.' },
      ],
      practiceSentences: [
        { de: 'Ich arbeite mit meinem Chef.', ru: 'Я работаю с моим начальником.', note: 'V2' },
        { de: 'Wir teilen das Büro ein.', ru: 'Мы делим офис.', note: 'отделяемая приставка' },
        { de: 'Man muss pünktlich sein.', ru: 'Нужно быть пунктуальным.', note: 'модальный + инфинитив' },
        { de: 'Es gibt heute keine Pause.', ru: 'Сегодня нет перерыва.', note: 'es gibt безличное' },
        { de: 'Was passt, sage ich sofort.', ru: 'Что подходит, я скажу сразу.', note: 'V2 в главном' },
      ],
      question: {
        de: 'Wie ist die Beziehung von Frau König zu ihren Kollegen?',
        ru: 'Какие отношения у госпожи Кёниг с коллегами?',
        options: [
          { de: 'Sie hat Probleme mit den Kollegen', ru: 'У неё проблемы с коллегами' },
          { de: 'Sie versteht sich gut mit den Kollegen', ru: 'Она хорошо ладит с коллегами' },
          { de: 'Sie spricht nicht mit den Kollegen', ru: 'Она не разговаривает с коллегами' },
        ],
        correct: 1,
        explanation: 'Фрау Кёниг прямо говорит: "ich habe mit meinen Kollegen keine Probleme. Verstehen uns gut."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Jonas',
      type: 'сообщение на автоответчике',
      text: 'Hallo, hier ist Jonas. Ich habe ein Problem. Wir müssen über meine Abreise sprechen. Die nächsten sechs Monate in England verbringen. Ich möchte dich fragen, ob meine Katze so lange bei dir bleiben kann. Schwester kann sie nicht nehmen, weil sie von den Katzenhaaren sofort krank wird. Du kennst sie doch. Bitte ruf mich an.',
      sentenceTranslations: {
        'Hallo, hier ist Jonas.': { literal: 'Привет, здесь есть Йонас', literary: 'Привет, это Йонас.' },
        'Ich habe ein Problem.': { literal: 'Я имею одну проблему', literary: 'У меня проблема.' },
        'Wir müssen über meine Abreise sprechen.': { literal: 'Мы должны о моём отъезде говорить', literary: 'Нам нужно поговорить о моём отъезде.' },
        'Die nächsten sechs Monate in England verbringen.': { literal: 'Следующие шесть месяцев в Англии проводить', literary: 'Проведу следующие шесть месяцев в Англии.' },
        'Ich möchte dich fragen, ob meine Katze so lange bei dir bleiben kann.': { literal: 'Я хотел-бы тебя спросить, ли моя кошка так долго у тебя остаться может', literary: 'Я хотел бы спросить, может ли моя кошка так долго побыть у тебя.' },
        'Schwester kann sie nicht nehmen, weil sie von den Katzenhaaren sofort krank wird.': { literal: 'Сестра может её не взять, потому-что она от кошачьих-волос сразу больной становится', literary: 'Сестра не может её взять, потому что сразу заболевает от кошачьей шерсти.' },
        'Bitte ruf mich an.': { literal: 'Пожалуйста позвони меня', literary: 'Пожалуйста, позвони мне.' },
        'Du kennst sie doch.': { literal: 'Ты знаешь её же', literary: 'Ты же её знаешь.' },
      },
      vocabulary: [
        { de: 'die Abreise', plural: 'die Abreisen', ru: 'отъезд', gender: 'feminin', collocation: 'über die Abreise sprechen', example: 'Wir müssen über meine Abreise sprechen.' },
        { de: 'der Monat', plural: 'die Monate', ru: 'месяц', gender: 'maskulin', collocation: 'sechs Monate verbringen', example: 'Die nächsten sechs Monate in England verbringen.' },
        { de: 'die Katze', plural: 'die Katzen', ru: 'кошка', gender: 'feminin', collocation: 'die Katze nehmen', example: 'Ob meine Katze so lange bei dir bleiben kann.' },
        { de: 'die Schwester', plural: 'die Schwestern', ru: 'сестра', gender: 'feminin', collocation: 'meine Schwester kann nicht', example: 'Schwester kann sie nicht nehmen.' },
        { de: 'das Katzenhaar', plural: 'die Katzenhaare', ru: 'кошачья шерсть', gender: 'neutrum', collocation: 'von den Katzenhaaren krank werden', example: 'Weil sie von den Katzenhaaren sofort krank wird.' },
        { de: 'sprechen', ru: 'говорить', type: 'verb', forms: 'spreche, sprach, hat gesprochen', example: 'Wir müssen über meine Abreise sprechen.' },
        { de: 'verbringen', ru: 'проводить (время)', type: 'verb', forms: 'verbringe, verbrachte, hat verbracht', example: 'Die nächsten sechs Monate in England verbringen.' },
        { de: 'bleiben', ru: 'оставаться', type: 'verb', forms: 'bleibe, blieb, ist geblieben', example: 'Ob meine Katze bei dir bleiben kann.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'rufe an, rief an, hat angerufen', example: 'Bitte ruf mich an.' },
        { de: 'sofort', ru: 'сразу, немедленно', type: 'adv', example: 'Sie wird von den Katzenhaaren sofort krank.' },
      ],
      practiceSentences: [
        { de: 'Ich muss über das Wetter sprechen.', ru: 'Мне нужно поговорить о погоде.', note: 'модальный + инфинитив' },
        { de: 'Kann mein Hund bei dir schlafen?', ru: 'Может моя собака у тебя поспать?', note: 'модальный V1 (вопрос)' },
        { de: 'Sie wird von Blumen krank.', ru: 'Она заболевает от цветов.', note: 'V2' },
        { de: 'Ruf deinen Freund an!', ru: 'Позвони своему другу!', note: 'императив + отделяемая' },
        { de: 'Ich frage, ob du Zeit hast.', ru: 'Я спрашиваю, есть ли у тебя время.', note: 'конец придаточного' },
      ],
      question: {
        de: 'Was möchte Jonas von seinem Freund?',
        ru: 'Что хочет Йонас от своего друга?',
        options: [
          { de: 'Er möchte seine Katze für 6 Monate unterbringen', ru: 'Он хочет пристроить свою кошку на 6 месяцев' },
          { de: 'Er möchte Geld für England leihen', ru: 'Он хочет занять денег на Англию' },
          { de: 'Er möchte seine Schwester besuchen', ru: 'Он хочет навестить свою сестру' },
        ],
        correct: 0,
        explanation: 'Йонас спрашивает: "Ich möchte dich fragen, ob meine Katze so lange bei dir bleiben kann" (на 6 месяцев в Англии).'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Claudia',
      type: 'сообщение на автоответчике',
      text: 'Hallo, hier ist Claudia. Ich kann heute Nachmittag nicht kommen, weil ich mit meinem Mann zusammen arbeiten muss. Wir wollen die Garage ausräumen, sauber machen und das Auto waschen. Das dauert bestimmt ein paar Stunden. Hast du das verstehst? Ich ruf dich heute Abend an und erzähle dir alles.',
      sentenceTranslations: {
        'Hallo, hier ist Claudia.': { literal: 'Привет, здесь есть Клаудиа', literary: 'Привет, это Клаудиа.' },
        'Ich kann heute Nachmittag nicht kommen, weil ich mit meinem Mann zusammen arbeiten muss.': { literal: 'Я могу сегодня послеобеденное-время не прийти, потому-что я с моим мужем вместе работать должна', literary: 'Я не могу прийти сегодня днём, потому что должна работать вместе с мужем.' },
        'Wir wollen die Garage ausräumen, sauber machen und das Auto waschen.': { literal: 'Мы хотим гараж выубрать, чистым сделать и машину помыть', literary: 'Мы хотим убрать в гараже, навести чистоту и помыть машину.' },
        'Das dauert bestimmt ein paar Stunden.': { literal: 'Это длится определённо пару часов', literary: 'Это точно займёт пару часов.' },
        'Ich ruf dich heute Abend an und erzähle dir alles.': { literal: 'Я звоню тебя сегодня вечером и рассказываю тебе всё', literary: 'Я позвоню тебе сегодня вечером и всё расскажу.' },
        'Hast du das verstehst?': { literal: 'Имеешь ты это понимание?', literary: 'Ты понимаешь?' },
      },
      vocabulary: [
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'послеобеденное время', gender: 'maskulin', collocation: 'heute Nachmittag', example: 'Ich kann heute Nachmittag nicht kommen.' },
        { de: 'der Mann', plural: 'die Männer', ru: 'муж, мужчина', gender: 'maskulin', collocation: 'mit meinem Mann', example: 'Ich muss mit meinem Mann zusammen arbeiten.' },
        { de: 'die Garage', plural: 'die Garagen', ru: 'гараж', gender: 'feminin', collocation: 'die Garage ausräumen', example: 'Wir wollen die Garage ausräumen.' },
        { de: 'das Auto', plural: 'die Autos', ru: 'машина', gender: 'neutrum', collocation: 'das Auto waschen', example: 'Das Auto waschen.' },
        { de: 'die Stunde', plural: 'die Stunden', ru: 'час', gender: 'feminin', collocation: 'ein paar Stunden dauern', example: 'Das dauert bestimmt ein paar Stunden.' },
        { de: 'ausräumen', ru: 'убирать, опустошать', type: 'verb', forms: 'räume aus, räumte aus, hat ausgeräumt', example: 'Wir wollen die Garage ausräumen.' },
        { de: 'waschen', ru: 'мыть', type: 'verb', forms: 'wasche, wusch, hat gewaschen', example: 'Das Auto waschen.' },
        { de: 'dauern', ru: 'длиться', type: 'verb', forms: 'dauert, dauerte, hat gedauert', example: 'Das dauert bestimmt ein paar Stunden.' },
        { de: 'erzählen', ru: 'рассказывать', type: 'verb', forms: 'erzähle, erzählte, hat erzählt', example: 'Ich erzähle dir alles.' },
      ],
      practiceSentences: [
        { de: 'Ich kann morgen nicht arbeiten.', ru: 'Я не могу завтра работать.', note: 'модальный + инфинитив' },
        { de: 'Wir wollen das Zimmer aufräumen.', ru: 'Мы хотим убрать комнату.', note: 'модальный + отделяемая' },
        { de: 'Das dauert drei Tage.', ru: 'Это длится три дня.', note: 'V2' },
        { de: 'Ich rufe meinen Bruder an.', ru: 'Я звоню своему брату.', note: 'отделяемая приставка' },
        { de: 'Er muss mit seinem Vater sprechen.', ru: 'Он должен поговорить со своим отцом.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Warum kann Claudia heute Nachmittag nicht kommen?',
        ru: 'Почему Клаудиа не может прийти сегодня днём?',
        options: [
          { de: 'Sie ist krank', ru: 'Она больна' },
          { de: 'Sie muss mit ihrem Mann arbeiten', ru: 'Она должна работать с мужем' },
          { de: 'Sie fährt in den Urlaub', ru: 'Она едет в отпуск' },
        ],
        correct: 1,
        explanation: 'Клаудиа объясняет: "weil ich mit meinem Mann zusammen arbeiten muss. Wir wollen die Garage ausräumen..."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetterbericht',
      type: 'прогноз погоды',
      text: 'Liebe Zuhörer, auch an diesem Wochenende können Sie mit gutem und sonnigem Wetter rechnen. Bei Temperaturen um die 28 Grad sagt sich richtiges Badewetter an. Von Nordwesten weht abends ein leichter Wind. Ab Montag wird es leider kühler mit einigen Regenfällen im Osten des Landes.',
      sentenceTranslations: {
        'Liebe Zuhörer, auch an diesem Wochenende können Sie mit gutem und sonnigem Wetter rechnen.': { literal: 'Дорогие слушатели, также в эти выходные можете Вы с хорошей и солнечной погодой рассчитывать', literary: 'Дорогие слушатели, в эти выходные вы также можете рассчитывать на хорошую солнечную погоду.' },
        'Bei Temperaturen um die 28 Grad sagt sich richtiges Badewetter an.': { literal: 'При температурах около 28 градусов говорит себя настоящая купальная-погода', literary: 'При температуре около 28 градусов ожидается настоящая погода для купания.' },
        'Von Nordwesten weht abends ein leichter Wind.': { literal: 'С северо-запада дует вечерами лёгкий ветер', literary: 'С северо-запада вечером будет дуть лёгкий ветер.' },
        'Ab Montag wird es leider kühler mit einigen Regenfällen im Osten des Landes.': { literal: 'С понедельника становится оно к-сожалению прохладнее с некоторыми дождями в востоке страны', literary: 'С понедельника, к сожалению, станет прохладнее с дождями на востоке страны.' },
      },
      vocabulary: [
        { de: 'der Zuhörer', plural: 'die Zuhörer', ru: 'слушатель', gender: 'maskulin', collocation: 'Liebe Zuhörer', example: 'Liebe Zuhörer.' },
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'an diesem Wochenende', example: 'An diesem Wochenende können Sie mit gutem Wetter rechnen.' },
        { de: 'das Wetter', ru: 'погода', gender: 'neutrum', collocation: 'mit gutem Wetter rechnen', example: 'Sie können mit gutem und sonnigem Wetter rechnen.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'bei Temperaturen um 28 Grad', example: 'Bei Temperaturen um die 28 Grad.' },
        { de: 'der Wind', plural: 'die Winde', ru: 'ветер', gender: 'maskulin', collocation: 'ein leichter Wind weht', example: 'Von Nordwesten weht ein leichter Wind.' },
        { de: 'der Regenfall', plural: 'die Regenfälle', ru: 'дождь, осадки', gender: 'maskulin', collocation: 'mit einigen Regenfällen', example: 'Mit einigen Regenfällen im Osten des Landes.' },
        { de: 'rechnen mit', ru: 'рассчитывать на', type: 'verb', forms: 'rechne, rechnete, hat gerechnet', example: 'Sie können mit gutem Wetter rechnen.' },
        { de: 'wehen', ru: 'дуть (о ветре)', type: 'verb', forms: 'weht, wehte, hat geweht', example: 'Von Nordwesten weht abends ein leichter Wind.' },
        { de: 'sonnig', ru: 'солнечный', type: 'adj', example: 'Mit gutem und sonnigem Wetter rechnen.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Ab Montag wird es leider kühler.' },
        { de: 'leicht', ru: 'лёгкий', type: 'adj', example: 'Ein leichter Wind.' },
      ],
      practiceSentences: [
        { de: 'Sie können mit Sonne rechnen.', ru: 'Вы можете рассчитывать на солнце.', note: 'модальный + инфинитив' },
        { de: 'Es wird morgen wärmer.', ru: 'Завтра станет теплее.', note: 'werden + компаратив' },
        { de: 'Der Wind weht von Süden.', ru: 'Ветер дует с юга.', note: 'V2' },
        { de: 'Bei Regen bleibe ich zu Hause.', ru: 'При дожде я остаюсь дома.', note: 'V2' },
        { de: 'Ab Dienstag regnet es.', ru: 'Со вторника идёт дождь.', note: 'безличное es' },
      ],
      question: {
        de: 'Wie wird das Wetter am Wochenende?',
        ru: 'Какая погода будет в выходные?',
        options: [
          { de: 'Kalt und regnerisch', ru: 'Холодно и дождливо' },
          { de: 'Sonnig mit 28 Grad', ru: 'Солнечно с температурой 28 градусов' },
          { de: 'Bewölkt mit starkem Wind', ru: 'Облачно с сильным ветром' },
        ],
        correct: 1,
        explanation: 'В прогнозе говорится: "können Sie mit gutem und sonnigem Wetter rechnen. Bei Temperaturen um die 28 Grad".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Musikspiel',
      type: 'радио-объявление',
      text: 'Und jetzt noch eine Information für unsere Musikfreunde. Ab 20 Uhr können Sie wieder bei unserem Spiel „Wer kennt das Instrument?" mitmachen. Wenn Sie wissen, wie die Musikinstrumente heißen, rufen Sie uns einfach an. Sie können Eintrittskarten für das Mozart-Konzert am Freitag gewinnen. Also gut zuhören beim Ratespiel um 8.',
      sentenceTranslations: {
        'Und jetzt noch eine Information für unsere Musikfreunde.': { literal: 'И сейчас ещё одна информация для наших музыкальных-друзей', literary: 'А сейчас ещё одна информация для наших любителей музыки.' },
        'Ab 20 Uhr können Sie wieder bei unserem Spiel mitmachen.': { literal: 'С 20 часов можете Вы снова при нашей игре участвовать', literary: 'С 20 часов вы снова можете принять участие в нашей игре.' },
        'Ab 20 Uhr können Sie wieder bei unserem Spiel \u201eWer kennt das Instrument?" mitmachen.': { literal: 'С 20 часов можете Вы снова при нашей игре «Кто знает инструмент?» участвовать', literary: 'С 20 часов вы снова можете принять участие в нашей игре «Кто знает инструмент?».' },
        'Wenn Sie wissen, wie die Musikinstrumente heißen, rufen Sie uns einfach an.': { literal: 'Если Вы знаете, как музыкальные-инструменты называются, звоните Вы нам просто', literary: 'Если вы знаете, как называются музыкальные инструменты, просто позвоните нам.' },
        'Sie können Eintrittskarten für das Mozart-Konzert am Freitag gewinnen.': { literal: 'Вы можете входные-билеты для концерта-Моцарта в пятницу выиграть', literary: 'Вы можете выиграть билеты на концерт Моцарта в пятницу.' },
        'Also gut zuhören beim Ratespiel um 8.': { literal: 'Итак хорошо слушать при игре-загадке в 8', literary: 'Так что внимательно слушайте викторину в 8 часов.' },
      },
      vocabulary: [
        { de: 'der Musikfreund', plural: 'die Musikfreunde', ru: 'любитель музыки', gender: 'maskulin', collocation: 'für unsere Musikfreunde', example: 'Eine Information für unsere Musikfreunde.' },
        { de: 'das Spiel', plural: 'die Spiele', ru: 'игра', gender: 'neutrum', collocation: 'bei unserem Spiel mitmachen', example: 'Bei unserem Spiel mitmachen.' },
        { de: 'das Instrument', plural: 'die Instrumente', ru: 'инструмент', gender: 'neutrum', collocation: 'das Instrument kennen', example: 'Wer kennt das Instrument?' },
        { de: 'die Eintrittskarte', plural: 'die Eintrittskarten', ru: 'входной билет', gender: 'feminin', collocation: 'Eintrittskarten gewinnen', example: 'Sie können Eintrittskarten gewinnen.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'das Mozart-Konzert', example: 'Eintrittskarten für das Mozart-Konzert am Freitag.' },
        { de: 'das Ratespiel', plural: 'die Ratespiele', ru: 'викторина', gender: 'neutrum', collocation: 'beim Ratespiel', example: 'Gut zuhören beim Ratespiel um 8.' },
        { de: 'mitmachen', ru: 'участвовать', type: 'verb', forms: 'mache mit, machte mit, hat mitgemacht', example: 'Ab 20 Uhr können Sie wieder mitmachen.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinne, gewann, hat gewonnen', example: 'Sie können Eintrittskarten gewinnen.' },
        { de: 'zuhören', ru: 'слушать внимательно', type: 'verb', forms: 'höre zu, hörte zu, hat zugehört', example: 'Gut zuhören beim Ratespiel um 8.' },
      ],
      practiceSentences: [
        { de: 'Ich mache beim Quiz mit.', ru: 'Я участвую в викторине.', note: 'отделяемая приставка' },
        { de: 'Können Sie uns morgen anrufen?', ru: 'Можете вы нам завтра позвонить?', note: 'модальный + инфинитив' },
        { de: 'Wir gewinnen Karten für das Kino.', ru: 'Мы выигрываем билеты в кино.', note: 'V2' },
        { de: 'Das Spiel beginnt um 19 Uhr.', ru: 'Игра начинается в 19 часов.', note: 'V2' },
        { de: 'Wenn Sie Zeit haben, kommen Sie!', ru: 'Если у вас есть время, приходите!', note: 'конец придаточного' },
      ],
      question: {
        de: 'Was können die Zuhörer bei dem Spiel gewinnen?',
        ru: 'Что могут выиграть слушатели в игре?',
        options: [
          { de: 'Eine CD von Mozart', ru: 'CD Моцарта' },
          { de: 'Eintrittskarten für das Mozart-Konzert', ru: 'Билеты на концерт Моцарта' },
          { de: 'Ein Musikinstrument', ru: 'Музыкальный инструмент' },
        ],
        correct: 1,
        explanation: 'Прямо сказано: "Sie können Eintrittskarten für das Mozart-Konzert am Freitag gewinnen."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Urlaubsgespräch',
      type: 'диалог',
      text: 'Hallo Peter, wie war der Urlaub auf dem Campingplatz? Der Urlaub war toll. Aber ich war am Gardasee zum Surfen. Mit meiner Frau und meinem Bruder Klaus und seiner Familie. Er ist aber nur im See geschwommen. Eine Woche Urlaub, musste er schnell wieder zurück in seine Bäckerei. Carina war mit ihrem Freund in Spanien. Die Sprache dort so toll. Maria wollte ja zuerst auch mitfahren, aber dann ist sie doch zu Hause geblieben. Zwei Wochen Spanien war als Student zu teuer. Maria und Stefan haben auch im Sommer gearbeitet, sogar zwei Monate lang. Stefan hat jeden Abend Tennis gespielt. Maria hat sich viel um eure Hunde gekümmert. Mit dem Fahrrad brauche ich eine Stunde und mit dem Bus 40 Minuten. Mein Bruder Matthias muss immer für die Universität lernen und meinem Vater im Geschäft helfen.',
      sentenceTranslations: {
        'Hallo Peter, wie war der Urlaub auf dem Campingplatz?': { literal: 'Как был отпуск на кемпинге?', literary: 'Как прошёл отпуск в кемпинге?' },
        'Der Urlaub war toll.': { literal: 'Отпуск был прекрасен', literary: 'Отпуск был прекрасным.' },
        'Ich war am Gardasee zum Surfen.': { literal: 'Я был на озере-Гарда для сёрфинга', literary: 'Я был на озере Гарда кататься на сёрфе.' },
        'Er ist aber nur im See geschwommen.': { literal: 'Он есть только в озере плавал', literary: 'Он только плавал в озере.' },
        'Maria hat sich viel um eure Hunde gekümmert.': { literal: 'Мария имеет себя много о ваших собаках заботилась', literary: 'Мария много заботилась о ваших собаках.' },
        'Mit dem Fahrrad brauche ich eine Stunde.': { literal: 'С велосипедом нуждаюсь я один час', literary: 'На велосипеде мне нужен час.' },
        'Aber ich war am Gardasee zum Surfen.': { literal: 'Но я был на озере-Гарда для сёрфинга', literary: 'Но я был на озере Гарда кататься на сёрфе.' },
        'Mit meiner Frau und meinem Bruder Klaus und seiner Familie.': { literal: 'С моей женой и моим братом Клаусом и его семьёй', literary: 'С моей женой и братом Клаусом с семьёй.' },
        'Eine Woche Urlaub, musste er schnell wieder zurück in seine Bäckerei.': { literal: 'Одну неделю отпуск, должен-был он быстро снова назад в свою пекарню', literary: 'Неделя отпуска, и ему пришлось быстро вернуться в свою пекарню.' },
        'Carina war mit ihrem Freund in Spanien.': { literal: 'Карина была с её другом в Испании', literary: 'Карина была со своим другом в Испании.' },
        'Die Sprache dort so toll.': { literal: 'Язык там так прекрасен', literary: 'Язык там такой прекрасный.' },
        'Zwei Wochen Spanien war als Student zu teuer.': { literal: 'Две недели Испания было как студент слишком дорого', literary: 'Две недели в Испании для студента слишком дорого.' },
        'Maria und Stefan haben auch im Sommer gearbeitet, sogar zwei Monate lang.': { literal: 'Мария и Штефан имеют также летом работали, даже два месяца долго', literary: 'Мария и Штефан тоже работали летом, целых два месяца.' },
        'Stefan hat jeden Abend Tennis gespielt.': { literal: 'Штефан имеет каждый вечер теннис играл', literary: 'Штефан каждый вечер играл в теннис.' },
        'Maria wollte ja zuerst auch mitfahren, aber dann ist sie doch zu Hause geblieben.': { literal: 'Мария хотела же сначала тоже поехать, но потом она всё-таки дома осталась', literary: 'Мария тоже сначала хотела поехать, но потом осталась дома.' },
        'Mit dem Fahrrad brauche ich eine Stunde und mit dem Bus 40 Minuten.': { literal: 'С велосипедом нуждаюсь я один час и с автобусом 40 минут', literary: 'На велосипеде мне нужен час, а на автобусе 40 минут.' },
        'Mein Bruder Matthias muss immer für die Universität lernen und meinem Vater im Geschäft helfen.': { literal: 'Мой брат Маттиас должен всегда для университета учить и моему отцу в магазине помогать', literary: 'Мой брат Маттиас всё время учится для университета и помогает отцу в магазине.' },
      },
      vocabulary: [
        { de: 'der Urlaub', plural: 'die Urlaube', ru: 'отпуск', gender: 'maskulin', collocation: 'der Urlaub war toll', example: 'Wie war der Urlaub auf dem Campingplatz?' },
        { de: 'der Campingplatz', plural: 'die Campingplätze', ru: 'кемпинг', gender: 'maskulin', collocation: 'auf dem Campingplatz', example: 'Wie war der Urlaub auf dem Campingplatz?' },
        { de: 'der See', plural: 'die Seen', ru: 'озеро', gender: 'maskulin', collocation: 'im See schwimmen', example: 'Er ist nur im See geschwommen.' },
        { de: 'die Bäckerei', plural: 'die Bäckereien', ru: 'пекарня', gender: 'feminin', collocation: 'in seine Bäckerei zurück', example: 'Musste er schnell zurück in seine Bäckerei.' },
        { de: 'der Hund', plural: 'die Hunde', ru: 'собака', gender: 'maskulin', collocation: 'um eure Hunde kümmern', example: 'Maria hat sich um eure Hunde gekümmert.' },
        { de: 'das Fahrrad', plural: 'die Fahrräder', ru: 'велосипед', gender: 'neutrum', collocation: 'mit dem Fahrrad fahren', example: 'Mit dem Fahrrad brauche ich eine Stunde.' },
        { de: 'die Universität', plural: 'die Universitäten', ru: 'университет', gender: 'feminin', collocation: 'für die Universität lernen', example: 'Er muss für die Universität lernen.' },
        { de: 'schwimmen', ru: 'плавать', type: 'verb', forms: 'schwimme, schwamm, ist geschwommen', example: 'Er ist nur im See geschwommen.' },
        { de: 'sich kümmern um', ru: 'заботиться о', type: 'verb', forms: 'kümmere mich, kümmerte mich, hat sich gekümmert', example: 'Maria hat sich um eure Hunde gekümmert.' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'helfe, half, hat geholfen', example: 'Meinem Vater im Geschäft helfen.' },
      ],
      practiceSentences: [
        { de: 'Ich bin im Meer geschwommen.', ru: 'Я плавал в море.', note: 'Perfekt с sein' },
        { de: 'Er muss zur Arbeit fahren.', ru: 'Он должен ехать на работу.', note: 'модальный + инфинитив' },
        { de: 'Sie kümmert sich um ihre Katze.', ru: 'Она заботится о своей кошке.', note: 'рефлексивный глагол' },
        { de: 'Wir arbeiten drei Wochen lang.', ru: 'Мы работаем три недели.', note: 'V2' },
        { de: 'Mit dem Auto brauche ich 20 Minuten.', ru: 'На машине мне нужно 20 минут.', note: 'V2' },
      ],
      question: {
        de: 'Wo war Peter im Urlaub?',
        ru: 'Где Петер был в отпуске?',
        options: [
          { de: 'Auf dem Campingplatz', ru: 'В кемпинге' },
          { de: 'Am Gardasee zum Surfen', ru: 'На озере Гарда кататься на сёрфе' },
          { de: 'In Spanien', ru: 'В Испании' },
        ],
        correct: 1,
        explanation: 'Петер отвечает: "Aber ich war am Gardasee zum Surfen."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Nicole Fischer',
      type: 'диалог/звонок',
      text: 'Hallo Herr N.A., hier ist Nicole Fischer. Hallo Frau Fischer, wie geht es Ihnen? Nicht so gut. Kann ich heute nicht zur Probe kommen. Ich muss zum Zahnarzt. Ich hoffe, dass ich beim Konzert am Samstag wieder fit bin. Rufen Sie, wenn es Ihnen besser geht.',
      sentenceTranslations: {
        'Hier ist Nicole Fischer.': { literal: 'Здесь есть Николь Фишер', literary: 'Это Николь Фишер.' },
        'Wie geht es Ihnen?': { literal: 'Как идёт оно Вам?', literary: 'Как у вас дела?' },
        'Kann ich heute nicht zur Probe kommen.': { literal: 'Могу я сегодня не к репетиции прийти', literary: 'Я не могу сегодня прийти на репетицию.' },
        'Ich muss zum Zahnarzt.': { literal: 'Я должна к зубному-врачу', literary: 'Мне нужно к стоматологу.' },
        'Ich hoffe, dass ich beim Konzert am Samstag wieder fit bin.': { literal: 'Я надеюсь, что я при концерте снова в-форме есть', literary: 'Надеюсь, что к концерту я снова буду в форме.' },
        'Rufen Sie, wenn es Ihnen besser geht.': { literal: 'Звоните Вы, когда оно Вам лучше идёт', literary: 'Позвоните, когда вам станет лучше.' },
        'Hallo Herr N.A., hier ist Nicole Fischer.': { literal: 'Привет господин Н.А., здесь есть Николь Фишер', literary: 'Здравствуйте, это Николь Фишер.' },
        'Hallo Frau Fischer, wie geht es Ihnen?': { literal: 'Привет госпожа Фишер, как идёт оно Вам?', literary: 'Здравствуйте, госпожа Фишер, как у Вас дела?' },
        'Nicht so gut.': { literal: 'Не так хорошо', literary: 'Не очень хорошо.' },
      },
      vocabulary: [
        { de: 'die Probe', plural: 'die Proben', ru: 'репетиция', gender: 'feminin', collocation: 'zur Probe kommen', example: 'Kann ich heute nicht zur Probe kommen.' },
        { de: 'der Zahnarzt', plural: 'die Zahnärzte', ru: 'стоматолог', gender: 'maskulin', collocation: 'zum Zahnarzt müssen', example: 'Ich muss zum Zahnarzt.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'beim Konzert fit sein', example: 'Ich hoffe, dass ich beim Konzert wieder fit bin.' },
        { de: 'hoffen', ru: 'надеяться', type: 'verb', forms: 'hoffe, hoffte, hat gehofft', example: 'Ich hoffe, dass ich beim Konzert wieder fit bin.' },
        { de: 'fit', ru: 'в форме', type: 'adj', example: 'Ich hoffe, dass ich wieder fit bin.' },
      ],
      practiceSentences: [
        { de: 'Ich kann nicht zum Training kommen.', ru: 'Я не могу прийти на тренировку.', note: 'модальный + инфинитив' },
        { de: 'Er muss zum Arzt gehen.', ru: 'Ему нужно идти к врачу.', note: 'модальный + инфинитив' },
        { de: 'Ich hoffe, dass es dir gut geht.', ru: 'Я надеюсь, что у тебя всё хорошо.', note: 'конец придаточного' },
        { de: 'Beim Sport bin ich immer fit.', ru: 'На спорте я всегда в форме.', note: 'V2' },
        { de: 'Ruf mich an, wenn du Zeit hast!', ru: 'Позвони мне, когда у тебя будет время!', note: 'императив + отделяемая' },
      ],
      question: {
        de: 'Warum kann Nicole Fischer nicht zur Probe kommen?',
        ru: 'Почему Николь Фишер не может прийти на репетицию?',
        options: [
          { de: 'Sie hat ein Konzert', ru: 'У неё концерт' },
          { de: 'Sie muss zum Zahnarzt', ru: 'Ей нужно к стоматологу' },
          { de: 'Sie ist im Urlaub', ru: 'Она в отпуске' },
        ],
        correct: 1,
        explanation: 'Николь говорит: "Kann ich heute nicht zur Probe kommen. Ich muss zum Zahnarzt."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Bikini-Kauf',
      type: 'диалог в магазине',
      text: 'Kann ich Ihnen helfen? Ja, ich möchte den hellblauen Bikini anprobieren, den im Schaufenster. Welche Größe haben Sie denn? Den haben wir nur in 42. Größe 38 oder 40. Hier sind andere Bikinis, sind blau und hellgrün in Ihrer Größe. Schade, die Farben gefallen mir nicht.',
      sentenceTranslations: {
        'Kann ich Ihnen helfen?': { literal: 'Могу я Вам помочь?', literary: 'Могу я вам помочь?' },
        'Ich möchte den hellblauen Bikini anprobieren.': { literal: 'Я хотела-бы светло-голубой бикини примерить', literary: 'Я хотела бы примерить светло-голубое бикини.' },
        'Welche Größe haben Sie denn?': { literal: 'Какой размер имеете Вы же?', literary: 'Какой у вас размер?' },
        'Den haben wir nur in 42.': { literal: 'Его имеем мы только в 42', literary: 'У нас он есть только в 42 размере.' },
        'Die Farben gefallen mir nicht.': { literal: 'Цвета нравятся мне не', literary: 'Мне не нравятся эти цвета.' },
        'Ja, ich möchte den hellblauen Bikini anprobieren, den im Schaufenster.': { literal: 'Да, я хотела-бы светло-голубой бикини примерить, тот в витрине', literary: 'Да, я хотела бы примерить светло-голубое бикини, то, что в витрине.' },
        'Größe 38 oder 40.': { literal: 'Размер 38 или 40', literary: 'Размер 38 или 40.' },
        'Hier sind andere Bikinis, sind blau und hellgrün in Ihrer Größe.': { literal: 'Здесь есть другие бикини, есть синие и светло-зелёные в Вашем размере', literary: 'Вот другие бикини, синие и светло-зелёные в вашем размере.' },
        'Schade, die Farben gefallen mir nicht.': { literal: 'Жаль, цвета нравятся мне не', literary: 'Жаль, мне не нравятся эти цвета.' },
      },
      vocabulary: [
        { de: 'der Bikini', plural: 'die Bikinis', ru: 'бикини', gender: 'maskulin', collocation: 'den Bikini anprobieren', example: 'Ich möchte den hellblauen Bikini anprobieren.' },
        { de: 'das Schaufenster', plural: 'die Schaufenster', ru: 'витрина', gender: 'neutrum', collocation: 'im Schaufenster', example: 'Den im Schaufenster.' },
        { de: 'die Größe', plural: 'die Größen', ru: 'размер', gender: 'feminin', collocation: 'welche Größe haben', example: 'Welche Größe haben Sie denn?' },
        { de: 'die Farbe', plural: 'die Farben', ru: 'цвет', gender: 'feminin', collocation: 'die Farben gefallen mir', example: 'Die Farben gefallen mir nicht.' },
        { de: 'anprobieren', ru: 'примерять', type: 'verb', forms: 'probiere an, probierte an, hat anprobiert', example: 'Ich möchte den hellblauen Bikini anprobieren.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Die Farben gefallen mir nicht.' },
        { de: 'hellblau', ru: 'светло-голубой', type: 'adj', example: 'Den hellblauen Bikini anprobieren.' },
      ],
      practiceSentences: [
        { de: 'Kann ich das Kleid anprobieren?', ru: 'Могу я примерить платье?', note: 'модальный + отделяемая' },
        { de: 'Diese Schuhe gefallen mir.', ru: 'Эти туфли мне нравятся.', note: 'V2 + Dativ' },
        { de: 'Wir haben es nur in Größe M.', ru: 'У нас это есть только в размере M.', note: 'V2' },
        { de: 'Die Farbe passt mir nicht.', ru: 'Цвет мне не подходит.', note: 'V2 + Dativ' },
        { de: 'Ich möchte die Jacke kaufen.', ru: 'Я хотел бы купить куртку.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'In welcher Größe gibt es den hellblauen Bikini?',
        ru: 'В каком размере есть светло-голубое бикини?',
        options: [
          { de: 'Größe 38 oder 40', ru: 'Размер 38 или 40' },
          { de: 'Nur in Größe 42', ru: 'Только в размере 42' },
          { de: 'In allen Größen', ru: 'Во всех размерах' },
        ],
        correct: 1,
        explanation: 'Продавец отвечает: "Den haben wir nur in 42."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Herr Krüger',
      type: 'диалог у врача',
      text: 'Guten Tag, Herr Krüger, wie geht es Ihnen? Ich habe mich im Sport verletzt. Der Fuß ist ja richtig dick. Das Bein tut auch weh und der rechte Arm ist ganz blau. Sie müssen ein paar Tage ruhen. Am besten Sie legen Eis auf den Fuß.',
      sentenceTranslations: {
        'Wie geht es Ihnen?': { literal: 'Как идёт оно Вам?', literary: 'Как вы себя чувствуете?' },
        'Ich habe mich im Sport verletzt.': { literal: 'Я имею себя в спорте поранил', literary: 'Я получил травму на спорте.' },
        'Der Fuß ist ja richtig dick.': { literal: 'Нога есть же правильно толстая', literary: 'Нога действительно сильно опухла.' },
        'Das Bein tut auch weh.': { literal: 'Нога делает тоже больно', literary: 'Нога тоже болит.' },
        'Der rechte Arm ist ganz blau.': { literal: 'Правая рука есть совсем синяя', literary: 'Правая рука вся в синяках.' },
        'Sie müssen ein paar Tage ruhen.': { literal: 'Вы должны пару дней отдыхать', literary: 'Вам нужно отдохнуть пару дней.' },
        'Am besten Sie legen Eis auf den Fuß.': { literal: 'Наилучше Вы кладёте лёд на ногу', literary: 'Лучше всего приложите лёд к ноге.' },
        'Guten Tag, Herr Krüger, wie geht es Ihnen?': { literal: 'Добрый день, господин Крюгер, как идёт оно Вам?', literary: 'Добрый день, господин Крюгер, как Вы себя чувствуете?' },
        'Das Bein tut auch weh und der rechte Arm ist ganz blau.': { literal: 'Нога делает тоже больно и правая рука есть совсем синяя', literary: 'Нога тоже болит, и правая рука вся в синяках.' },
      },
      vocabulary: [
        { de: 'der Fuß', plural: 'die Füße', ru: 'нога (ступня)', gender: 'maskulin', collocation: 'der Fuß ist dick', example: 'Der Fuß ist ja richtig dick.' },
        { de: 'das Bein', plural: 'die Beine', ru: 'нога', gender: 'neutrum', collocation: 'das Bein tut weh', example: 'Das Bein tut auch weh.' },
        { de: 'der Arm', plural: 'die Arme', ru: 'рука', gender: 'maskulin', collocation: 'der rechte Arm', example: 'Der rechte Arm ist ganz blau.' },
        { de: 'das Eis', ru: 'лёд', gender: 'neutrum', collocation: 'Eis auf den Fuß legen', example: 'Am besten Sie legen Eis auf den Fuß.' },
        { de: 'sich verletzen', ru: 'пораниться', type: 'verb', forms: 'verletze mich, verletzte mich, hat sich verletzt', example: 'Ich habe mich im Sport verletzt.' },
        { de: 'weh tun', ru: 'болеть', type: 'verb', forms: 'tut weh, tat weh, hat weh getan', example: 'Das Bein tut auch weh.' },
        { de: 'ruhen', ru: 'отдыхать', type: 'verb', forms: 'ruhe, ruhte, hat geruht', example: 'Sie müssen ein paar Tage ruhen.' },
        { de: 'legen', ru: 'класть, положить', type: 'verb', forms: 'lege, legte, hat gelegt', example: 'Sie legen Eis auf den Fuß.' },
        { de: 'dick', ru: 'толстый, опухший', type: 'adj', example: 'Der Fuß ist ja richtig dick.' },
      ],
      practiceSentences: [
        { de: 'Ich habe mich beim Fußball verletzt.', ru: 'Я поранился на футболе.', note: 'Perfekt рефлексивный' },
        { de: 'Mein Kopf tut weh.', ru: 'У меня болит голова.', note: 'V2' },
        { de: 'Du musst zwei Tage ruhen.', ru: 'Тебе нужно отдыхать два дня.', note: 'модальный + инфинитив' },
        { de: 'Leg das Eis auf die Hand!', ru: 'Положи лёд на руку!', note: 'императив' },
        { de: 'Der Arm ist ganz rot.', ru: 'Рука вся красная.', note: 'V2' },
      ],
      question: {
        de: 'Was ist mit Herrn Krüger passiert?',
        ru: 'Что случилось с господином Крюгером?',
        options: [
          { de: 'Er hatte einen Autounfall', ru: 'У него была автомобильная авария' },
          { de: 'Er hat sich im Sport verletzt', ru: 'Он получил травму на спорте' },
          { de: 'Er ist krank geworden', ru: 'Он заболел' },
        ],
        correct: 1,
        explanation: 'Герр Крюгер говорит: "Ich habe mich im Sport verletzt."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Wegbeschreibung',
      type: 'диалог на улице',
      text: 'Entschuldigung, ich suche die Straße der Berge. Nein, die ist Nummer 34, das ist das nächste Haus. Hier ist im ersten Stock ein Kulturzentrum. Was ist hier im Erdgeschoss? Wir haben hier einen Kindergarten und die Jugendherberge ist nebenan.',
      sentenceTranslations: {
        'Entschuldigung, ich suche die Straße der Berge.': { literal: 'Извинение, я ищу улицу гор', literary: 'Извините, я ищу улицу Берге.' },
        'Das ist das nächste Haus.': { literal: 'Это есть следующий дом', literary: 'Это соседний дом.' },
        'Hier ist im ersten Stock ein Kulturzentrum.': { literal: 'Здесь есть в первом этаже культурный-центр', literary: 'Здесь на первом этаже культурный центр.' },
        'Was ist hier im Erdgeschoss?': { literal: 'Что есть здесь в первом-этаже?', literary: 'Что здесь на первом этаже?' },
        'Wir haben hier einen Kindergarten.': { literal: 'Мы имеем здесь детский-сад', literary: 'У нас здесь детский сад.' },
        'Die Jugendherberge ist nebenan.': { literal: 'Молодёжная-гостиница есть рядом', literary: 'Молодёжная гостиница находится рядом.' },
        'Nein, die ist Nummer 34, das ist das nächste Haus.': { literal: 'Нет, она есть номер 34, это есть следующий дом', literary: 'Нет, это номер 34, это соседний дом.' },
        'Wir haben hier einen Kindergarten und die Jugendherberge ist nebenan.': { literal: 'Мы имеем здесь детский-сад и молодёжная-гостиница есть рядом', literary: 'У нас здесь детский сад, а молодёжная гостиница рядом.' },
      },
      vocabulary: [
        { de: 'das Haus', plural: 'die Häuser', ru: 'дом', gender: 'neutrum', collocation: 'das nächste Haus', example: 'Das ist das nächste Haus.' },
        { de: 'das Kulturzentrum', plural: 'die Kulturzentren', ru: 'культурный центр', gender: 'neutrum', collocation: 'ein Kulturzentrum', example: 'Hier ist im ersten Stock ein Kulturzentrum.' },
        { de: 'das Erdgeschoss', plural: 'die Erdgeschosse', ru: 'первый этаж', gender: 'neutrum', collocation: 'im Erdgeschoss', example: 'Was ist hier im Erdgeschoss?' },
        { de: 'der Kindergarten', plural: 'die Kindergärten', ru: 'детский сад', gender: 'maskulin', collocation: 'einen Kindergarten haben', example: 'Wir haben hier einen Kindergarten.' },
        { de: 'die Jugendherberge', plural: 'die Jugendherbergen', ru: 'молодёжная гостиница', gender: 'feminin', collocation: 'Die Jugendherberge ist nebenan', example: 'Die Jugendherberge ist nebenan.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'suche, suchte, hat gesucht', example: 'Ich suche die Straße der Berge.' },
        { de: 'nebenan', ru: 'рядом, по соседству', type: 'adv', example: 'Die Jugendherberge ist nebenan.' },
      ],
      practiceSentences: [
        { de: 'Ich suche die Hauptstraße.', ru: 'Я ищу главную улицу.', note: 'V2' },
        { de: 'Das Museum ist im zweiten Stock.', ru: 'Музей на втором этаже.', note: 'V2' },
        { de: 'Was gibt es im Erdgeschoss?', ru: 'Что есть на первом этаже?', note: 'es gibt безличное' },
        { de: 'Der Supermarkt ist nebenan.', ru: 'Супермаркет находится рядом.', note: 'V2' },
        { de: 'Wir haben hier eine Apotheke.', ru: 'У нас здесь есть аптека.', note: 'V2' },
      ],
      question: {
        de: 'Was befindet sich im Erdgeschoss?',
        ru: 'Что находится на первом этаже?',
        options: [
          { de: 'Ein Kulturzentrum', ru: 'Культурный центр' },
          { de: 'Ein Kindergarten', ru: 'Детский сад' },
          { de: 'Die Jugendherberge', ru: 'Молодёжная гостиница' },
        ],
        correct: 1,
        explanation: 'В ответе говорится: "Wir haben hier einen Kindergarten" (im Erdgeschoss).'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Fotografie',
      type: 'диалог о хобби',
      text: 'Sagen Sie mal, war das Fotografieren schon immer Ihr Hobby? Vor sechs Monaten damit angefangen. Ich habe eine Ausstellung gesehen. Die fand ich toll und so habe ich es auch versucht. Sie machen wunderbare Fotos. Haben Sie einen Kurs besucht? Das wollte ich zuerst. Aber dann hat mein Cousin alles gezeigt. Der ist Modefotograf.',
      sentenceTranslations: {
        'War das Fotografieren schon immer Ihr Hobby?': { literal: 'Было фото уже всегда Ваше хобби?', literary: 'Фотография всегда была вашим хобби?' },
        'Vor sechs Monaten damit angefangen.': { literal: 'Перед шестью месяцами с-этим начал', literary: 'Начал шесть месяцев назад.' },
        'Ich habe eine Ausstellung gesehen.': { literal: 'Я имею выставку увидел', literary: 'Я видел выставку.' },
        'Die fand ich toll.': { literal: 'Её нашёл я прекрасной', literary: 'Она мне очень понравилась.' },
        'Sie machen wunderbare Fotos.': { literal: 'Вы делаете чудесные фотографии', literary: 'Вы делаете прекрасные фотографии.' },
        'Haben Sie einen Kurs besucht?': { literal: 'Имеете Вы курс посетили?', literary: 'Вы посещали курсы?' },
        'Dann hat mein Cousin alles gezeigt.': { literal: 'Тогда имеет мой кузен всё показал', literary: 'Потом мой двоюродный брат всё показал.' },
        'Der ist Modefotograf.': { literal: 'Он есть модный-фотограф', literary: 'Он фотограф моды.' },
        'Sagen Sie mal, war das Fotografieren schon immer Ihr Hobby?': { literal: 'Скажите Вы раз, было фотографирование уже всегда Ваше хобби?', literary: 'Скажите, фотография всегда была Вашим хобби?' },
        'Die fand ich toll und so habe ich es auch versucht.': { literal: 'Её нашёл я прекрасной и так имею я это тоже попробовал', literary: 'Она мне очень понравилась, и я тоже решил попробовать.' },
        'Das wollte ich zuerst.': { literal: 'Это хотел я сначала', literary: 'Сначала я этого хотел.' },
        'Aber dann hat mein Cousin alles gezeigt.': { literal: 'Но тогда имеет мой кузен всё показал', literary: 'Но потом мой двоюродный брат всё показал.' },
      },
      vocabulary: [
        { de: 'das Foto', plural: 'die Fotos', ru: 'фотография', gender: 'neutrum', collocation: 'wunderbare Fotos machen', example: 'Sie machen wunderbare Fotos.' },
        { de: 'das Hobby', plural: 'die Hobbys', ru: 'хобби', gender: 'neutrum', collocation: 'Ihr Hobby', example: 'War das Fotografieren schon immer Ihr Hobby?' },
        { de: 'die Ausstellung', plural: 'die Ausstellungen', ru: 'выставка', gender: 'feminin', collocation: 'eine Ausstellung sehen', example: 'Ich habe eine Ausstellung gesehen.' },
        { de: 'der Kurs', plural: 'die Kurse', ru: 'курс', gender: 'maskulin', collocation: 'einen Kurs besuchen', example: 'Haben Sie einen Kurs besucht?' },
        { de: 'der Cousin', plural: 'die Cousins', ru: 'двоюродный брат', gender: 'maskulin', collocation: 'mein Cousin', example: 'Mein Cousin hat alles gezeigt.' },
        { de: 'anfangen', ru: 'начинать', type: 'verb', forms: 'fange an, fing an, hat angefangen', example: 'Vor sechs Monaten damit angefangen.' },
        { de: 'versuchen', ru: 'пробовать', type: 'verb', forms: 'versuche, versuchte, hat versucht', example: 'So habe ich es auch versucht.' },
        { de: 'zeigen', ru: 'показывать', type: 'verb', forms: 'zeige, zeigte, hat gezeigt', example: 'Mein Cousin hat alles gezeigt.' },
        { de: 'wunderbar', ru: 'чудесный', type: 'adj', example: 'Sie machen wunderbare Fotos.' },
      ],
      practiceSentences: [
        { de: 'Ich habe vor drei Tagen angefangen.', ru: 'Я начал три дня назад.', note: 'Perfekt' },
        { de: 'Er hat die Ausstellung besucht.', ru: 'Он посетил выставку.', note: 'Perfekt' },
        { de: 'Das finde ich interessant.', ru: 'Это кажется мне интересным.', note: 'V2' },
        { de: 'Sie macht schöne Bilder.', ru: 'Она делает красивые картины.', note: 'V2' },
        { de: 'Das wollte ich auch lernen.', ru: 'Это я тоже хотел изучить.', note: 'Präteritum модальный' },
      ],
      question: {
        de: 'Wer hat dem Sprecher das Fotografieren beigebracht?',
        ru: 'Кто научил говорящего фотографировать?',
        options: [
          { de: 'Ein Kurslehrer', ru: 'Преподаватель курса' },
          { de: 'Sein Cousin, der Modefotograf ist', ru: 'Его двоюродный брат, который работает фотографом моды' },
          { de: 'Er hat es selbst gelernt', ru: 'Он научился сам' },
        ],
        correct: 1,
        explanation: 'Говорящий объясняет: "Aber dann hat mein Cousin alles gezeigt. Der ist Modefotograf."'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Ines',
      type: 'интервью',
      text: 'Heute haben wir Ines zu Gast. Ines, Sie kommen aus Portugal und was machen Sie hier in Deutschland? Als Au-pair-Mädchen nach Deutschland gekommen. Ich arbeite für eine sehr nette Familie mit zwei Kindern. Die sind drei und sechs Jahre alt. Ich spiele vor allem mit den Kindern und passe tagsüber auf sie auf. Am Wochenende und abends habe ich frei. Ich habe ein schönes Zimmer mit Blick auf den Garten. An der Wand ist ein großer Spiegel und ich darf auch die Fotos von meiner Familie und meinen Freunden aufhängen. Ja, aber nur drei Jahre lang Deutsch gelernt. Habe zuerst Spanisch und Englisch gelernt. Ich besuche zweimal pro Woche einen Deutschkurs. Ich möchte gerne sechs Monate hier bleiben. Ich möchte noch sechs Monate in England verbringen. Danach gehe ich nach Portugal zurück und studiere an der Universität. Ich möchte gern Dolmetscherin werden und später in Brüssel arbeiten.',
      sentenceTranslations: {
        'Heute haben wir Ines zu Gast.': { literal: 'Сегодня имеем мы Инес к гостю', literary: 'Сегодня у нас в гостях Инес.' },
        'Was machen Sie hier in Deutschland?': { literal: 'Что делаете Вы здесь в Германии?', literary: 'Что вы делаете здесь в Германии?' },
        'Ich arbeite für eine sehr nette Familie mit zwei Kindern.': { literal: 'Я работаю для очень милой семьи с двумя детьми', literary: 'Я работаю на очень милую семью с двумя детьми.' },
        'Ich spiele vor allem mit den Kindern und passe tagsüber auf sie auf.': { literal: 'Я играю прежде всего с детьми и смотрю днём за них', literary: 'Я играю в основном с детьми и присматриваю за ними днём.' },
        'Ich habe ein schönes Zimmer mit Blick auf den Garten.': { literal: 'Я имею красивую комнату с видом на сад', literary: 'У меня красивая комната с видом на сад.' },
        'Ich besuche zweimal pro Woche einen Deutschkurs.': { literal: 'Я посещаю дважды в неделю курс-немецкого', literary: 'Я посещаю курсы немецкого два раза в неделю.' },
        'Ich möchte gern Dolmetscherin werden.': { literal: 'Я хотела-бы охотно переводчицей стать', literary: 'Я хотела бы стать переводчицей.' },
        'Ines, Sie kommen aus Portugal und was machen Sie hier in Deutschland?': { literal: 'Инес, Вы приходите из Португалии и что делаете Вы здесь в Германии?', literary: 'Инес, Вы из Португалии, и что Вы делаете здесь в Германии?' },
        'Als Au-pair-Mädchen nach Deutschland gekommen.': { literal: 'Как au-pair-девушка в Германию пришла', literary: 'Приехала в Германию как девушка au-pair.' },
        'Die sind drei und sechs Jahre alt.': { literal: 'Они есть три и шесть лет старые', literary: 'Им три и шесть лет.' },
        'Am Wochenende und abends habe ich frei.': { literal: 'В выходные и вечерами имею я свободно', literary: 'По выходным и вечерам я свободна.' },
        'Ja, aber nur drei Jahre lang Deutsch gelernt.': { literal: 'Да, но только три года долго немецкий учила', literary: 'Да, но учила немецкий только три года.' },
        'Habe zuerst Spanisch und Englisch gelernt.': { literal: 'Имею сначала испанский и английский учила', literary: 'Сначала учила испанский и английский.' },
        'Ich möchte gerne sechs Monate hier bleiben.': { literal: 'Я хотела-бы охотно шесть месяцев здесь остаться', literary: 'Я хотела бы остаться здесь на шесть месяцев.' },
        'Ich möchte noch sechs Monate in England verbringen.': { literal: 'Я хотела-бы ещё шесть месяцев в Англии провести', literary: 'Я хотела бы провести ещё шесть месяцев в Англии.' },
        'Danach gehe ich nach Portugal zurück und studiere an der Universität.': { literal: 'Потом иду я в Португалию назад и учусь в университете', literary: 'Потом я вернусь в Португалию и буду учиться в университете.' },
        'Ich möchte gern Dolmetscherin werden und später in Brüssel arbeiten.': { literal: 'Я хотела-бы охотно переводчицей стать и позже в Брюсселе работать', literary: 'Я хотела бы стать переводчицей и позже работать в Брюсселе.' },
        'An der Wand ist ein großer Spiegel und ich darf auch die Fotos von meiner Familie und meinen Freunden aufhängen.': { literal: 'На стене есть большое зеркало и я могу также фотографии от моей семьи и моих друзей вешать', literary: 'На стене большое зеркало, и мне можно вешать фотографии семьи и друзей.' },
      },
      vocabulary: [
        { de: 'der Gast', plural: 'die Gäste', ru: 'гость', gender: 'maskulin', collocation: 'zu Gast haben', example: 'Heute haben wir Ines zu Gast.' },
        { de: 'die Familie', plural: 'die Familien', ru: 'семья', gender: 'feminin', collocation: 'für eine nette Familie arbeiten', example: 'Ich arbeite für eine sehr nette Familie.' },
        { de: 'das Kind', plural: 'die Kinder', ru: 'ребёнок', gender: 'neutrum', collocation: 'mit zwei Kindern', example: 'Eine Familie mit zwei Kindern.' },
        { de: 'das Zimmer', plural: 'die Zimmer', ru: 'комната', gender: 'neutrum', collocation: 'ein schönes Zimmer', example: 'Ich habe ein schönes Zimmer.' },
        { de: 'der Garten', plural: 'die Gärten', ru: 'сад', gender: 'maskulin', collocation: 'auf den Garten', example: 'Mit Blick auf den Garten.' },
        { de: 'der Spiegel', plural: 'die Spiegel', ru: 'зеркало', gender: 'maskulin', collocation: 'ein großer Spiegel', example: 'An der Wand ist ein großer Spiegel.' },
        { de: 'die Fremdsprache', plural: 'die Fremdsprachen', ru: 'иностранный язык', gender: 'feminin', collocation: 'diese Fremdsprachen', example: 'Ich möchte diese Fremdsprachen gut können.' },
        { de: 'der Deutschkurs', plural: 'die Deutschkurse', ru: 'курс немецкого', gender: 'maskulin', collocation: 'einen Deutschkurs besuchen', example: 'Ich besuche zweimal pro Woche einen Deutschkurs.' },
        { de: 'die Dolmetscherin', plural: 'die Dolmetscherinnen', ru: 'переводчица', gender: 'feminin', collocation: 'Dolmetscherin werden', example: 'Ich möchte gern Dolmetscherin werden.' },
        { de: 'aufpassen auf', ru: 'присматривать за', type: 'verb', forms: 'passe auf, passte auf, hat aufgepasst', example: 'Ich passe tagsüber auf sie auf.' },
        { de: 'aufhängen', ru: 'вешать', type: 'verb', forms: 'hänge auf, hängte auf, hat aufgehängt', example: 'Ich darf die Fotos aufhängen.' },
        { de: 'studieren', ru: 'учиться в университете', type: 'verb', forms: 'studiere, studierte, hat studiert', example: 'Ich studiere an der Universität.' },
      ],
      practiceSentences: [
        { de: 'Ich komme aus Spanien.', ru: 'Я из Испании.', note: 'V2' },
        { de: 'Sie passt auf die Kinder auf.', ru: 'Она присматривает за детьми.', note: 'отделяемая приставка' },
        { de: 'Wir haben heute Gäste.', ru: 'У нас сегодня гости.', note: 'V2' },
        { de: 'Ich besuche einmal pro Monat einen Kurs.', ru: 'Я посещаю курс раз в месяц.', note: 'V2' },
        { de: 'Er möchte Lehrer werden.', ru: 'Он хочет стать учителем.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was sind Ines\' Pläne für die Zukunft?',
        ru: 'Какие планы у Инес на будущее?',
        options: [
          { de: 'Sie will für immer in Deutschland bleiben', ru: 'Она хочет навсегда остаться в Германии' },
          { de: 'Sie möchte Dolmetscherin werden und in Brüssel arbeiten', ru: 'Она хочет стать переводчицей и работать в Брюсселе' },
          { de: 'Sie will sofort nach Portugal zurück', ru: 'Она хочет сразу вернуться в Португалию' },
        ],
        correct: 1,
        explanation: 'Инес говорит о своих планах: "Ich möchte gern Dolmetscherin werden und später in Brüssel arbeiten."'
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
    title: 'ОДИН ДЕНЬ ИЗ ЖИЗНИ',
    text: 'Сегодня хороший день. Госпожа Кёниг хорошо ладит с {0} на работе. Они справедливо {1} работу. Йонас звонит другу, потому что уезжает на шесть {2} в Англию. Его {3} не может взять кошку из-за аллергии. Клаудиа не может прийти, потому что хочет {4} гараж. На выходных ожидается {5} погода с температурой 28 градусов. По радио можно {6} билеты на концерт Моцарта. Петер был на озере Гарда и {7} на сёрфе. Николь не может прийти на {8}, потому что идёт к {9}. В магазине {10} есть только в 42 размере. Господин Крюгер {11} на спорте. Инес из Португалии работает как au-pair и хочет стать {12}.',
    blanks: [
      { answer: 'den Kollegen', hint: 'коллеги (der Kollege, Dat. Pl.)' },
      { answer: 'einteilen', hint: 'распределять (einteilen)' },
      { answer: 'Monate', hint: 'месяцев (der Monat, Pl.)' },
      { answer: 'die Schwester', hint: 'сестра (die Schwester)' },
      { answer: 'ausräumen', hint: 'убрать (ausräumen)' },
      { answer: 'sonnige', hint: 'солнечная (sonnig)' },
      { answer: 'gewinnen', hint: 'выиграть (gewinnen)' },
      { answer: 'surfte', hint: 'катался на сёрфе (surfen, Prät.)' },
      { answer: 'die Probe', hint: 'репетиция (die Probe)' },
      { answer: 'dem Zahnarzt', hint: 'стоматолог (der Zahnarzt, Dat.)' },
      { answer: 'der Bikini', hint: 'бикини (der Bikini)' },
      { answer: 'sich verletzt', hint: 'поранился (sich verletzen, Perf.)' },
      { answer: 'Dolmetscherin', hint: 'переводчица (die Dolmetscherin)' },
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табе "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Frau König).',
    },
    /* ═══ VOCABULARY — по 4 Teil ═══ */
    vocabulary_t1: {
      instruction: 'Словарь Teil 1 — Kurze Texte (работа, отъезд, гараж, погода, радио)',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок по словарю Teil 1 экзамена Goethe A2 Horen — 5 коротких сообщений.
Темы: Frau Konig (работа/коллеги), Jonas (отъезд/кошка), Claudia (гараж/машина), Wetterbericht (погода), Musikspiel (радио/концерт).

{lessonText}

СЛОВАРЬ:
{vocabularyList}

ПРИНЦИП: ОТ ЗНАКОМСТВА К ИСПОЛЬЗОВАНИЮ (5 этапов)
Этап 1: Знакомство (покажи по 5 слов — ученик только читает)
Этап 2: Викторина A/B/C (6 вопросов, DE<->RU)
Этап 3: Перевод (ученик вспоминает сам, 8 слов, артикли обязательны!)
Этап 4: Контекст (вставь слово в предложение, 4 задания из Teil 1)
Этап 5: Мини-пересказ (2-3 предложения с новыми словами о 5 ситуациях Teil 1)

СТАРТ: «Привет! Учим слова из Teil 1 — 5 коротких сообщений: работа с коллегами, отъезд Йонаса в Англию, уборка гаража, прогноз погоды и музыкальная викторина на радио.»

ЭТАП 1 — покажи 2 группы по 5 слов:
Группа 1 (работа/отъезд): der Kollege, die Abreise, einteilen, hoflich, verbringen
Группа 2 (гараж/погода/радио): ausraumen, die Garage, der Wetterbericht, kuhl, gewinnen

Этапы 2-5 — только по словам и ситуациям из Teil 1.
Контекст: предложения только из текстов 1-5.

ПРАВИЛА:
- Сначала покажи — потом спрашивай. Этап 1 = только показ.
- Темп быстрый. Макс 2 строки на правильный ответ, 3 на ошибку.
- Артикли обязательны! Без артикля = неправильно.
- Хвали коротко. Не умничай.
- Команды: подсказка / пропустить / стоп / повторить`,
    },
    vocabulary_t2: {
      instruction: 'Словарь Teil 2 — Urlaubsgespräch (отпуск, Gardasee, сёрфинг)',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок по словарю Teil 2 экзамена Goethe A2 Horen — длинный диалог об отпуске.
Тема: друзья обсуждают отпуск — Peter на Gardasee (серфинг), Klaus (плавание), Carina (Испания, теннис), Maria/Stefan (дома, учеба/работа, велосипед).

{lessonText}

СЛОВАРЬ:
{vocabularyList}

ПРИНЦИП: ОТ ЗНАКОМСТВА К ИСПОЛЬЗОВАНИЮ (5 этапов)
Этап 1: Знакомство (покажи по 5 слов — ученик только читает)
Этап 2: Викторина A/B/C (6 вопросов, DE<->RU)
Этап 3: Перевод (ученик вспоминает сам, 8 слов, артикли обязательны!)
Этап 4: Контекст (вставь слово в предложение, 4 задания из диалога)
Этап 5: Мини-пересказ (3-4 предложения: кто куда ездил и чем занимался)

СТАРТ: «Привет! Учим слова из Teil 2 — диалог об отпуске. Петер был на озере Гарда, Карина в Испании, а Мария осталась дома. Много интересных слов!»

ЭТАП 1 — покажи 2 группы:
Группа 1 (отпуск/спорт): der Campingplatz, surfen, der See, die Universitat, das Fahrrad
Группа 2 (действия): schwimmen, verbringen, bleiben, gefallen, zelten

Этапы 2-5 — только по словам и ситуациям из диалога об отпуске.
Контекст: «Peter war am Gardasee», «Klaus ist nur im See geschwommen» и т.д.

ПРАВИЛА:
- Сначала покажи — потом спрашивай. Этап 1 = только показ.
- Темп быстрый. Макс 2 строки на правильный ответ, 3 на ошибку.
- Артикли обязательны!
- Интересный факт: «Campingplatz = Camping + Platz, Gardasee = Garda + See»
- Команды: подсказка / пропустить / стоп / повторить`,
    },
    vocabulary_t3: {
      instruction: 'Словарь Teil 3 — Kurze Gespräche (репетиция, магазин, врач, город, хобби)',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок по словарю Teil 3 экзамена Goethe A2 Horen — 5 коротких диалогов.
Темы: Nicole Fischer (репетиция/стоматолог), Bikini-Kauf (магазин/размер/цвет), Herr Kruger (врач/травма ноги), Wegbeschreibung (ориентация в городе), Fotografie (хобби/выставка).

{lessonText}

СЛОВАРЬ:
{vocabularyList}

ПРИНЦИП: ОТ ЗНАКОМСТВА К ИСПОЛЬЗОВАНИЮ (5 этапов)
Этап 1: Знакомство (покажи по 5 слов — ученик только читает)
Этап 2: Викторина A/B/C (6 вопросов, DE<->RU)
Этап 3: Перевод (ученик вспоминает сам, 8 слов, артикли обязательны!)
Этап 4: Контекст (вставь слово в предложение, 5 заданий из Teil 3)
Этап 5: Мини-пересказ (3 предложения о ситуациях Teil 3)

СТАРТ: «Привет! Учим слова из Teil 3 — 5 коротких диалогов: отмена репетиции, покупка бикини, визит к врачу с травмой, поиск дороги и разговор о хобби-фотографии.»

ЭТАП 1 — покажи 3 группы:
Группа 1 (репетиция/магазин): die Probe, der Zahnarzt, anprobieren, die Farbe, die Grosse
Группа 2 (врач/город): sich verletzen, der Fuss, das Eis, die Kreuzung, der Kindergarten
Группа 3 (хобби): die Fotografie, die Ausstellung, das Schaufenster, anfangen, gefallen

Этапы 2-5 — только по словам и ситуациям из Teil 3.
Контекст: «Nicole kann nicht zur Probe kommen», «Den Bikini anprobieren», «Legen Sie Eis auf den Fuss» и т.д.

ПРАВИЛА:
- Сначала покажи — потом спрашивай.
- Темп быстрый. Макс 2 строки на правильный ответ, 3 на ошибку.
- Артикли обязательны! «Zahnarzt» без артикля = неправильно.
- Факты: «Zahnarzt = Zahn + Arzt», «Schaufenster = Schau + Fenster»
- Команды: подсказка / пропустить / стоп / повторить`,
    },
    vocabulary_t4: {
      instruction: 'Словарь Teil 4 — Interview mit Ines (au-pair, семья, карьера)',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи урок по словарю Teil 4 экзамена Goethe A2 Horen — интервью с Инес.
Тема: Инес из Португалии работает au-pair в Германии, ухаживает за двумя детьми, живет в семье, учит немецкий, мечтает стать переводчицей и работать в Брюсселе.

{lessonText}

СЛОВАРЬ:
{vocabularyList}

ПРИНЦИП: ОТ ЗНАКОМСТВА К ИСПОЛЬЗОВАНИЮ (5 этапов)
Этап 1: Знакомство (покажи по 5 слов — ученик только читает)
Этап 2: Викторина A/B/C (6 вопросов, DE<->RU)
Этап 3: Перевод (ученик вспоминает сам, 8 слов, артикли обязательны!)
Этап 4: Контекст (вставь слово в предложение, 4 задания из интервью)
Этап 5: Мини-пересказ (3-4 предложения: кто Инес, чем занимается, какие планы)

СТАРТ: «Привет! Учим слова из Teil 4 — интервью с Инес из Португалии. Она au-pair, учит немецкий и мечтает стать переводчицей!»

ЭТАП 1 — покажи 2 группы:
Группа 1 (жизнь au-pair): aufpassen auf, das Zimmer, der Deutschkurs, die Familie, das Au-pair
Группа 2 (планы/карьера): die Dolmetscherin, die Universitat, studieren, der Traumberuf, besuchen

Этапы 2-5 — только по словам и ситуациям из интервью с Инес.
Контекст: «Sie passt auf zwei Kinder auf», «zweimal pro Woche einen Deutschkurs», «Dolmetscherin werden».

ПРАВИЛА:
- Сначала покажи — потом спрашивай.
- Темп быстрый. Макс 2 строки на правильный ответ, 3 на ошибку.
- Артикли обязательны!
- Факт: «Dolmetscherin = от dolmetschen (переводить устно), Jugendherberge = Jugend + Herberge»
- Команды: подсказка / пропустить / стоп / повторить`,
    },

    /* ═══ DIALOGUE — по 4 Teil ═══ */
    dialogue_t1: {
      instruction: 'Диалог-тренажёр Teil 1 — работа, отъезд, гараж, погода, радио',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи разговорную тренировку по темам Teil 1: работа с коллегами (Frau Konig), отъезд в Англию и кошка (Jonas), уборка гаража (Claudia), прогноз погоды, музыкальная викторина.
Цель — РАЗГОВОРИТЬ ученика. Не пугать, а вдохновлять.

{lessonText}

СЛОВАРЬ:
{vocabularyList}

4 ФАЗЫ (от повторения к свободе):

ФАЗА 1 — ПОВТОРЕНИЕ (3 фразы из Teil 1):
1. "Ich habe mit meinen Kollegen keine Probleme." (У меня нет проблем с коллегами)
2. "Wir mussen uber meine Abreise sprechen." (Нам нужно поговорить об отъезде)
3. "Wir wollen die Garage ausraumen." (Мы хотим убрать гараж)

ФАЗА 2 — ВИКТОРИНА (3 вопроса):
1. Wie ist die Beziehung mit deinen Kollegen? A/B/C
2. Dein Freund fahrt weg. Was sagst du? A/B/C
3. Wie ist das Wetter morgen? A/B/C

ФАЗА 3 — ДОСТРОЙКА (3 начала):
1. «Mit meinen Kollegen kann ich gut...» (работа)
2. «Meine Katze bleibt bei...» (отъезд Jonas)
3. «Am Wochenende wollen wir...» (гараж Claudia)

ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ (2-3 вопроса):
1. «Erzahl mir: Wie ist dein Arbeitstag? Wie sind deine Kollegen?»
2. «Du fahrst fur 6 Monate weg. Wer passt auf deine Wohnung auf?»
3. «Wie ist das Wetter heute bei dir?»

ПРАВИЛА:
- Объяснения на русском, вопросы на немецком.
- Фаза 1->2->3->4 постепенно. Не бросай в воду!
- Молчит -> предлагай варианты или начало фразы.
- Макс 1 исправление за ответ. Хвали каждую попытку.
- Юмор приветствуется! Живой разговор > план.
- Команды: подсказка / пропустить / стоп`,
    },
    dialogue_t2: {
      instruction: 'Диалог-тренажёр Teil 2 — отпуск, Gardasee, сёрфинг, кемпинг',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи разговорную тренировку по теме Teil 2: отпуск. Peter на Gardasee (серфинг), Klaus (плавал в озере), Carina (Испания, теннис), Maria/Stefan (дома, учеба, велосипед).
Цель — РАЗГОВОРИТЬ ученика.

{lessonText}

СЛОВАРЬ:
{vocabularyList}

4 ФАЗЫ:

ФАЗА 1 — ПОВТОРЕНИЕ (3 фразы):
1. "Ich war am Gardasee zum Surfen." (Я был на Гарда серфить)
2. "Er ist nur im See geschwommen." (Он только плавал в озере)
3. "Sie hat Tennis gespielt." (Она играла в теннис)

ФАЗА 2 — ВИКТОРИНА (3 вопроса):
1. Wie war dein Urlaub? A/B/C
2. Was hast du im Urlaub gemacht? A/B/C
3. Wohin bist du gefahren? A/B/C

ФАЗА 3 — ДОСТРОЙКА (3 начала):
1. «Im Urlaub bin ich nach ... gefahren und habe...»
2. «Mein Bruder ist im See...»
3. «Am liebsten mache ich im Urlaub...»

ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ (2-3 вопроса):
1. «Wohin fahrst du gern in den Urlaub? Was machst du dort?»
   Реагируй: «Oh, Spanien! Carina war auch in Spanien!»
2. «Campingplatz oder Hotel — was findest du besser?»
3. «Was macht deine Familie im Urlaub?»

ПРАВИЛА:
- Объяснения на русском, вопросы на немецком.
- Постепенно: повторение -> выбор -> достройка -> свободно.
- Молчит -> дай начало: «Ich fahre gern nach...»
- Макс 1 исправление за ответ. Живой разговор > план.
- Команды: подсказка / пропустить / стоп`,
    },
    dialogue_t3: {
      instruction: 'Диалог-тренажёр Teil 3 — репетиция, магазин, врач, город, хобби',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи разговорную тренировку по темам Teil 3: отмена репетиции (Nicole/стоматолог), покупка бикини (размер/цвет), визит к врачу (травма ноги), ориентация в городе (Kindergarten), хобби фотография (выставка).
Цель — РАЗГОВОРИТЬ ученика.

{lessonText}

СЛОВАРЬ:
{vocabularyList}

4 ФАЗЫ:

ФАЗА 1 — ПОВТОРЕНИЕ (3 фразы):
1. "Ich mochte den hellblauen Bikini anprobieren." (Я хочу примерить бикини)
2. "Ich habe mich im Sport verletzt." (Я получил травму)
3. "Entschuldigung, ich suche den Kindergarten." (Извините, я ищу детский сад)

ФАЗА 2 — ВИКТОРИНА (3 вопроса):
1. Du bist im Geschäft. Was mochtest du? A/B/C
2. Was ist passiert? Du bist beim Arzt. A/B/C
3. Du suchst einen Weg. Was fragst du? A/B/C

ФАЗА 3 — ДОСТРОЙКА (3 начала):
1. «Im Geschäft mochte ich ... anprobieren.» (покупки)
2. «Beim Arzt habe ich gesagt: Mein ... tut weh.» (врач)
3. «Entschuldigung, ich suche...» (город)

ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ (3 вопроса):
1. «Du bist in einem Geschäft. Was kaufst du? Welche Grosse? Welche Farbe?»
2. «Du warst beim Arzt. Was war los?»
3. «Hast du ein Hobby? Was machst du gern in der Freizeit?»
   Если ответил: «Oh, Fotografie! Wie bei unserem Text! Machst du Ausstellungen?»

ПРАВИЛА:
- Объяснения на русском, вопросы на немецком.
- Постепенно: повторение -> выбор -> достройка -> свободно.
- Молчит -> дай начало: «Ich mochte ... kaufen» или «Mein Fuss tut weh»
- Макс 1 исправление за ответ. Живой разговор > план.
- Команды: подсказка / пропустить / стоп`,
    },
    dialogue_t4: {
      instruction: 'Диалог-тренажёр Teil 4 — au-pair, семья, карьера, Brüssel',
      promptText: `Ты — дружелюбный преподаватель немецкого для русскоязычного ученика (A2).
Проведи разговорную тренировку по теме Teil 4: интервью с Инес. Она из Португалии, работает au-pair в Германии, ухаживает за двумя детьми, учит немецкий, мечтает стать переводчицей в Брюсселе.
Цель — РАЗГОВОРИТЬ ученика.

{lessonText}

СЛОВАРЬ:
{vocabularyList}

4 ФАЗЫ:

ФАЗА 1 — ПОВТОРЕНИЕ (3 фразы):
1. "Ich arbeite als Au-pair und passe auf zwei Kinder auf." (Я au-pair, слежу за двумя детьми)
2. "Ich besuche zweimal pro Woche einen Deutschkurs." (Хожу на курсы немецкого 2 раза в неделю)
3. "Ich mochte gern Dolmetscherin werden." (Хочу стать переводчицей)

ФАЗА 2 — ВИКТОРИНА (3 вопроса):
1. Was machst du in Deutschland? A/B/C
2. Wie oft besuchst du einen Sprachkurs? A/B/C
3. Was sind deine Plane fur die Zukunft? A/B/C

ФАЗА 3 — ДОСТРОЙКА (3 начала):
1. «In Deutschland arbeite ich als...» (работа)
2. «Ich besuche ... pro Woche einen...» (учеба)
3. «In Zukunft mochte ich gern...» (планы)

ФАЗА 4 — СВОБОДНЫЙ ДИАЛОГ (3 вопроса):
1. «Erzahl mir uber dich: Was machst du beruflich? Was studierst du?»
2. «Lernst du eine Fremdsprache? Wie oft? Wo?»
3. «Was sind deine Plane? Was mochtest du in Zukunft machen?»
   Реагируй: «Dolmetscherin — wie Ines! Das ist ein toller Beruf!»

ПРАВИЛА:
- Объяснения на русском, вопросы на немецком.
- Постепенно: повторение -> выбор -> достройка -> свободно.
- Молчит -> дай начало: «Ich mochte ... werden» или «Ich studiere...»
- Макс 1 исправление за ответ. Живой разговор > план.
- Ученик рассказал о себе -> поддержи! Это золото.
- Команды: подсказка / пропустить / стоп`,
    },

    /* ═══ SOCRATIC — по 4 Teil ═══ */
    socratic_t1: {
      instruction: 'Сократовский разбор Teil 1 — mit+Dativ, weil-Nebensatz',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, A2. Ты НИЧЕГО не объясняешь напрямую — только вопросы.

{lessonText}

ГРАММАТИЧЕСКИЙ ФОКУС Teil 1:
- mit + Dativ (mit meinen Kollegen)
- weil-Nebensatz (weil sie krank wird — глагол в конце)

МЕТОД: Сократовский эленхус. Вопрос-ответ, поиск противоречий, примеры из текста, русские параллели, признание незнания.

ПРЕДЛОЖЕНИЕ 1: «Ich habe mit meinen Kollegen keine Probleme.» (Text 1)
Цель: mit + Dativ (множественное число)
Цепочка:
-> «Какой предлог стоит перед Kollegen?» -> «mit»
-> «"Мой" = mein. Но тут "meinen". Откуда -en?»
-> «В русском: "с КЕМ?" = дательный. В немецком mit тоже требует Dativ.»
-> Вывод: mit = всегда Dativ. Мн. число Dativ: -n.

ПРЕДЛОЖЕНИЕ 2: «Weil sie von den Katzenhaaren sofort krank wird.» (Text 2)
Цель: порядок слов в weil-придаточном
Цепочка:
-> «Где стоит глагол "wird"? В начале, середине, конце?»
-> «В главном предложении глагол на 2 месте. Тут — в конце. Почему?»
-> «После weil глагол убегает в конец!»
-> Вывод: после weil глагол всегда в конце.

ПРАВИЛА:
- Все на русском. Немецкий — только примеры из текста.
- 1-2 вопроса за раз. Жди ответа.
- Ошибся -> уточняющий вопрос, не исправляй.
- После 3 попыток -> маленькая подсказка.
- После каждого предложения: «Сформулируй правило своими словами.»
- Команды: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Скажи что разбираете грамматику Teil 1 методом вопросов.
Покажи первое предложение и задай первый вопрос.`,
    },
    socratic_t2: {
      instruction: 'Сократовский разбор Teil 2 — Perfekt с sein, Zeitangaben',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, A2. Ты НИЧЕГО не объясняешь напрямую — только вопросы.

{lessonText}

ГРАММАТИЧЕСКИЙ ФОКУС Teil 2:
- Perfekt с sein (ist geschwommen, ist geblieben, ist gefahren)
- Zeitangaben (eine Woche, drei Wochen, den ganzen Sommer)

МЕТОД: Сократовский эленхус. Вопрос-ответ, поиск противоречий, примеры из текста, русские параллели.

ПРЕДЛОЖЕНИЕ 1: «Er ist nur im See geschwommen.» (Text 6)
Цель: Perfekt с sein (глаголы движения)
Цепочка:
-> «Это Perfekt. Из каких частей? "ist" + "geschwommen".»
-> «Обычно Perfekt = haben + Partizip. Почему тут "ist"?»
-> «Schwimmen = плавать. Это перемещение. Fahren, gehen — тоже перемещение.»
-> «А spielen? Haben или sein?» -> haben (нет перемещения)
-> Вывод: глаголы движения в Perfekt берут sein.

ПРЕДЛОЖЕНИЕ 2: «Maria und Stefan sind zu Hause geblieben.»
Цель: Perfekt с sein (изменение состояния)
Цепочка:
-> «"Sind geblieben" — тоже с sein. Но bleiben = оставаться. Это не движение!»
-> «Верно. Но bleiben = изменение состояния (был где-то -> остался). Sein берут и эти глаголы.»
-> Вывод: sein + Partizip = движение ИЛИ изменение состояния.

ПРАВИЛА:
- Все на русском. Немецкий — только примеры из текста.
- 1-2 вопроса за раз. Жди ответа.
- Ошибся -> уточняющий вопрос, не исправляй.
- После каждого предложения: «Сформулируй правило своими словами.»
- Команды: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Скажи что разбираете грамматику диалога об отпуске (Teil 2) методом вопросов.
Покажи первое предложение и задай первый вопрос.`,
    },
    socratic_t3: {
      instruction: 'Сократовский разбор Teil 3 — Modalverb+trennbar, Akkusativ',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, A2. Ты НИЧЕГО не объясняешь напрямую — только вопросы.

{lessonText}

ГРАММАТИЧЕСКИЙ ФОКУС Teil 3:
- Modalverb + trennbare Verben (mochte anprobieren — Satzklammer)
- Akkusativ (den hellblauen Bikini, den Fuss)

МЕТОД: Сократовский эленхус. Вопрос-ответ, конкретные примеры, русские параллели.

ПРЕДЛОЖЕНИЕ 1: «Ich mochte den hellblauen Bikini anprobieren.» (Text 8)
Цель: модальный глагол + отделяемая приставка + Akkusativ
Цепочка:
-> «Сколько глаголов? Где модальный? Где инфинитив?»
-> «mochte на 2 месте, anprobieren в конце = скобки (Satzklammer)!»
-> «"den hellblauen Bikini" — почему "den", а не "der"?»
-> «В русском: примерить КОГО/ЧТО? = винительный. По-немецки = Akkusativ.»
-> Вывод: модальный на 2 месте, инфинитив в конце. Akkusativ = винительный.

ПРЕДЛОЖЕНИЕ 2: «Am besten Sie legen Eis auf den Fuss.» (Text 9)
Цель: Akkusativ после auf (направление)
Цепочка:
-> «"auf den Fuss" — почему "den"? der Fuss = мужской род.»
-> «"auf" с Akkusativ = направление (КУДА?). "auf" с Dativ = место (ГДЕ?).»
-> «В русском: положить НА ЧТО? = направление.»
-> Вывод: auf + Akkusativ = направление (куда?).

ПРАВИЛА:
- Все на русском. Немецкий — только примеры.
- 1-2 вопроса за раз. Жди ответа.
- Ошибся -> уточняющий вопрос.
- После каждого предложения: «Сформулируй правило.»
- Команды: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Скажи что разбираете грамматику Teil 3 (магазин, врач, город).
Покажи первое предложение и задай первый вопрос.`,
    },
    socratic_t4: {
      instruction: 'Сократовский разбор Teil 4 — Akkusativ+частота, werden+Beruf',
      promptText: `Ты — терпеливый преподаватель немецкого, работающий по сократовскому методу.
Ученик — русскоязычный, A2. Ты НИЧЕГО не объясняешь напрямую — только вопросы.

{lessonText}

ГРАММАТИЧЕСКИЙ ФОКУС Teil 4:
- Akkusativ + выражение частоты (einen Deutschkurs + zweimal pro Woche)
- werden + профессия (Dolmetscherin werden)

МЕТОД: Сократовский эленхус. Вопрос-ответ, поиск противоречий, русские параллели.

ПРЕДЛОЖЕНИЕ 1: «Ich besuche zweimal pro Woche einen Deutschkurs.» (Text 12)
Цель: Akkusativ + частота
Цепочка:
-> «Что делает Инес? besuche = посещаю. Посещаю КОГО/ЧТО?»
-> «"einen Deutschkurs" — почему einen, а не ein?»
-> «der Deutschkurs -> einen в Akkusativ. Мужской род меняется!»
-> «"zweimal pro Woche" — как выражается частота? Составь: три раза в месяц?»
-> Вывод: einen = мужской Akkusativ. Частота: [число]mal pro [период].

ПРЕДЛОЖЕНИЕ 2: «Ich mochte gern Dolmetscherin werden.» (Text 12)
Цель: werden + профессия (без артикля!)
Цепочка:
-> «"werden" = становиться. Какой падеж после werden?»
-> «"Dolmetscherin" — без артикля! Почему?»
-> «После werden профессия стоит БЕЗ артикля: Ich werde Lehrerin / Ich werde Arzt.»
-> «По-русски тоже: "стать переводчицей" — без "одной".»
-> Вывод: werden + профессия без артикля.

ПРАВИЛА:
- Все на русском. Немецкий — только примеры.
- 1-2 вопроса за раз. Жди ответа.
- Ошибся -> уточняющий вопрос.
- После каждого предложения: «Сформулируй правило.»
- Команды: подсказка / пропустить / стоп

СТАРТ: Поприветствуй. Скажи что разбираете грамматику интервью с Инес (Teil 4).
Покажи первое предложение и задай первый вопрос.`,
    },

    /* ═══ SYNONYMS — по 4 Teil ═══ */
    synonyms_t1: {
      instruction: 'Синонимы Teil 1 — замена глаголов, weil-соединение',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи упражнение «Синонимизация» в формате ВИКТОРИНЫ A/B/C по текстам Teil 1.
Темы: работа/коллеги, отъезд/кошка, гараж, погода, радио.

{lessonText}

ЦЕЛЬ: Ученик ВЫБИРАЕТ синоним из вариантов (не придумывает сам).
После ответа — объяснение + ключевая пара.

3 ВОПРОСА:

ВОПРОС 1 — ЗАМЕНА ГЛАГОЛА (Text 1):
Оригинал: «Ich habe mit meinen Kollegen keine Probleme.»
Перевод: У меня нет проблем с коллегами.
  A) Ich verstehe mich gut mit meinen Kollegen. (sich gut verstehen = ладить)
  B) Ich spreche nicht mit meinen Kollegen. (не говорить — другой смысл!)
  C) Ich arbeite nicht mit meinen Kollegen. (не работать — другое)
Ответ: A. «keine Probleme haben» = «sich gut verstehen» — оба значат «ладить».

ВОПРОС 2 — ЗАМЕНА СУЩЕСТВИТЕЛЬНОГО (Text 2):
Оригинал: «Wir mussen uber meine Abreise sprechen.»
Перевод: Нам нужно поговорить о моем отъезде.
  A) Wir mussen uber meine Abfahrt sprechen. (die Abfahrt = отъезд)
  B) Wir mussen uber meine Ankunft sprechen. (Ankunft = прибытие — противоположное!)
  C) Wir mussen uber meine Arbeit sprechen. (Arbeit = работа — другая тема)
Ответ: A. Abreise = Abfahrt. Оба — «отъезд».

ВОПРОС 3 — ДВА ПРЕДЛОЖЕНИЯ -> ОДНО С WEIL (Text 3):
Оригинал: «Claudia kann nicht kommen. Sie muss mit ihrem Mann arbeiten.»
  A) Claudia kann nicht kommen, weil sie mit ihrem Mann arbeiten muss.
  B) Claudia kann nicht kommen, aber sie muss mit ihrem Mann arbeiten. (aber = но)
  C) Claudia kann nicht kommen, obwohl sie mit ihrem Mann arbeiten muss. (obwohl = хотя)
Ответ: A. weil = потому что. После weil глагол В КОНЕЦ: arbeiten MUSS.

ИТОГ: keine Probleme haben = sich gut verstehen, Abreise = Abfahrt, weil + глагол в конец.

ПРАВИЛА:
- Один вопрос за раз. Жди ответ (A, B, C).
- После ответа — объяснение + пара синонимов.
- В конце — список пар.
- Команды: подсказка / пропустить / стоп

СТАРТ: «Привет! Сейчас викторина по синонимам из Teil 1 — работа, отъезд, гараж. Я покажу предложение и 3 варианта. Выбери, какой означает то же самое.»`,
    },
    synonyms_t2: {
      instruction: 'Синонимы Teil 2 — замена выражений, перефразирование',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи упражнение «Синонимизация» в формате ВИКТОРИНЫ A/B/C по тексту Teil 2.
Тема: диалог об отпуске (Gardasee, серфинг, Испания, кемпинг).

{lessonText}

ЦЕЛЬ: Ученик ВЫБИРАЕТ синоним из вариантов.
После ответа — объяснение + ключевая пара.

3 ВОПРОСА:

ВОПРОС 1 — ЗАМЕНА ВЫРАЖЕНИЯ (Text 6):
Оригинал: «Er ist aber nur im See geschwommen.»
Перевод: Он только плавал в озере.
  A) Er hat aber nur im See gebadet. (baden = купаться)
  B) Er ist aber nur im See gesurft. (surfen = серфить — другое!)
  C) Er ist aber nur im See getaucht. (tauchen = нырять — другое)
Ответ: A. schwimmen и baden — близкие синонимы для «купаться».

ВОПРОС 2 — ПЕРЕФРАЗИРОВАНИЕ (Text 6):
Оригинал: «Der Urlaub war toll.»
Перевод: Отпуск был прекрасным.
  A) Der Urlaub hat mir gut gefallen. (мне очень понравился)
  B) Der Urlaub war langweilig. (langweilig = скучный — противоположное!)
  C) Der Urlaub hat lange gedauert. (lange dauern = длиться долго — о другом)
Ответ: A. toll sein = gut gefallen. Оба = «было здорово!»

ВОПРОС 3 — СИНОНИМ ВЫРАЖЕНИЯ (Text 6):
Оригинал: «Sie haben auf dem Campingplatz gezeltet.»
Перевод: Они жили в палатке на кемпинге.
  A) Sie haben auf dem Campingplatz ubernachtet. (ubernachten = ночевать)
  B) Sie haben auf dem Campingplatz gearbeitet. (arbeiten = работать — другое!)
  C) Sie haben den Campingplatz verlassen. (verlassen = покинуть — противоположное!)
Ответ: A. zelten (жить в палатке) близко к ubernachten (ночевать) в контексте кемпинга.

ИТОГ: schwimmen = baden, toll = gut gefallen, zelten ≈ ubernachten (на кемпинге).

ПРАВИЛА:
- Один вопрос за раз. Жди ответ.
- После ответа — объяснение + пара синонимов.
- Команды: подсказка / пропустить / стоп

СТАРТ: «Привет! Викторина по синонимам из Teil 2 — диалог об отпуске. Я покажу предложение и 3 варианта.»`,
    },
    synonyms_t3: {
      instruction: 'Синонимы Teil 3 — Aktiv/Passiv, deshalb, придаточное',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи упражнение «Синонимизация» в формате ВИКТОРИНЫ A/B/C по текстам Teil 3.
Темы: репетиция, магазин (бикини), врач (травма), город, фотография.

{lessonText}

ЦЕЛЬ: Ученик ВЫБИРАЕТ синоним из вариантов.
После ответа — объяснение + ключевая пара.

4 ВОПРОСА:

ВОПРОС 1 — AKTIV -> PASSIV (Text 9):
Оригинал: «Am besten Sie legen Eis auf den Fuss.»
Перевод: Лучше приложите лед к ноге.
  A) Am besten wird Eis auf den Fuss gelegt. (Passiv!)
  B) Am besten nehmen Sie das Eis vom Fuss. (nehmen vom = убрать — противоположное!)
  C) Am besten kuhlen Sie den Fuss mit Wasser. (другое средство)
Ответ: A. Пассив: wird + Partizip II. «Лед кладется на ногу.»

ВОПРОС 2 — КОННЕКТОР DESHALB (Text 8):
Оригинал: «Die Farben gefallen mir nicht. Ich nehme den Bikini nicht.»
  A) Die Farben gefallen mir nicht, deshalb nehme ich den Bikini nicht.
  B) Die Farben gefallen mir nicht, trotzdem nehme ich den Bikini. (trotzdem = несмотря на)
  C) Die Farben gefallen mir, deshalb nehme ich den Bikini nicht. (смысл изменен!)
Ответ: A. deshalb = поэтому. После deshalb — инверсия: deshalb NEHME ich.

ВОПРОС 3 — ПРИЛАГАТЕЛЬНОЕ -> ПРИДАТОЧНОЕ (Text 8):
Оригинал: «Ich mochte den hellblauen Bikini anprobieren.»
  A) Ich mochte den Bikini anprobieren, der hellblau ist. (придаточное!)
  B) Ich mochte den Bikini anprobieren, der dunkelblau ist. (другой цвет!)
  C) Ich mochte den Bikini kaufen, der hellblau ist. (kaufen ≠ anprobieren!)
Ответ: A. Прилагательное -> придаточное с der/die/das.

ВОПРОС 4 — ПЕРЕФРАЗИРОВАНИЕ (Text 11):
Оригинал: «Fotografie ist mein Hobby.»
  A) Ich fotografiere gern. (Я люблю фотографировать)
  B) Ich kaufe gern Fotos. (Покупать фото — другое!)
  C) Ich arbeite als Fotograf. (Работать фотографом — другое!)
Ответ: A. Hobby = gern machen. «Фотография — хобби» = «люблю фотографировать».

ИТОГ: Aktiv->Passiv с wird, deshalb + инверсия, прилаг.->придаточное, Hobby = gern machen.

ПРАВИЛА:
- Один вопрос за раз. Жди ответ.
- После ответа — объяснение + пара.
- Команды: подсказка / пропустить / стоп

СТАРТ: «Привет! Викторина по синонимам из Teil 3 — магазин, врач, город, хобби.»`,
    },
    synonyms_t4: {
      instruction: 'Синонимы Teil 4 — перефразирование, синонимы выражений',
      promptText: `Ты — преподаватель немецкого для русскоязычного ученика (A2).
Проведи упражнение «Синонимизация» в формате ВИКТОРИНЫ A/B/C по тексту Teil 4.
Тема: интервью с Инес (au-pair, семья, Deutschkurs, переводчица, Брюссель).

{lessonText}

ЦЕЛЬ: Ученик ВЫБИРАЕТ синоним из вариантов.
После ответа — объяснение + ключевая пара.

3 ВОПРОСА:

ВОПРОС 1 — ПЕРЕФРАЗИРОВАНИЕ (Text 12):
Оригинал: «Ich mochte gern Dolmetscherin werden.»
Перевод: Я хотела бы стать переводчицей.
  A) Mein Traumberuf ist Dolmetscherin. (профессия мечты — переводчица)
  B) Ich bin schon Dolmetscherin. (schon = уже — она еще не стала!)
  C) Ich war fruher Dolmetscherin. (fruher = раньше — это о прошлом)
Ответ: A. «mochte werden» = мечта. «Traumberuf» = профессия мечты.
  Traum + Beruf = составное слово!

ВОПРОС 2 — СИНОНИМ ВЫРАЖЕНИЯ (Text 12):
Оригинал: «Heute haben wir Ines zu Gast.»
Перевод: Сегодня у нас в гостях Инес.
  A) Heute ist Ines bei uns eingeladen. (eingeladen = приглашена)
  B) Heute besucht Ines den Garten. (Garten = сад, не Gast!)
  C) Heute arbeitet Ines bei uns. (arbeiten = работать — другой контекст)
Ответ: A. «zu Gast haben» = «einladen». Оба — «принимать гостя».

ВОПРОС 3 — ЗАМЕНА ГЛАГОЛА (Text 12):
Оригинал: «Ich passe auf zwei Kinder auf.»
Перевод: Я присматриваю за двумя детьми.
  A) Ich kummere mich um zwei Kinder. (sich kummern um = заботиться)
  B) Ich spiele mit zwei Kindern. (spielen = играть — только часть!)
  C) Ich habe zwei Kinder. (haben = иметь — это о своих детях!)
Ответ: A. aufpassen auf = sich kummern um. Оба = «заботиться/присматривать».

ИТОГ: mochte werden = Traumberuf, zu Gast haben = einladen, aufpassen auf = sich kummern um.

ПРАВИЛА:
- Один вопрос за раз. Жди ответ.
- После ответа — объяснение + пара.
- Команды: подсказка / пропустить / стоп

СТАРТ: «Привет! Викторина по синонимам из Teil 4 — интервью с Инес. 3 вопроса — выбирай правильный вариант!»`,
    },

    /* ═══ LEFEBVRE — по 4 Teil ═══ */
    lefebvre_t1: {
      instruction: 'Пересказ по Лефевру Teil 1 — 5 коротких сообщений',
      promptText: `Ты — преподаватель немецкого (A2). Проведи рефлексивный пересказ текстов Teil 1 по методу Лефевра.
Teil 1 содержит 5 коротких сообщений: Frau Konig (работа/коллеги), Jonas (отъезд в Англию/кошка), Claudia (гараж), Wetterbericht (погода), Musikspiel (радио/концерт).

{lessonText}

МЕТОД ЛЕФЕВРА:
Ученик строит КАРТУ текста (КТО? ЧТО? ГДЕ? ЗАЧЕМ?), потом пересказывает по карте.
Пересказ = реконструкция, не вспоминание.

ГЛАВНОЕ: СНАЧАЛА ПОКАЖИ ОБРАЗЕЦ!

СТУПЕНЬ 1 — ОБРАЗЕЦ (ты показываешь на Text 1 — Frau Konig):
«Смотри, как я строю карту:
  КТО? -> Кто-то говорит Frau Konig
  ЧТО? -> keine Probleme mit Kollegen
  КАК? -> hoflich und freundlich sein
Пересказ: "Die Person hat keine Probleme mit Kollegen. Sie verstehen sich gut. Man muss hoflich sein."
Видишь? Карта -> 3 предложения. Просто!»

СТУПЕНЬ 2 — ВМЕСТЕ (Text 2 — Jonas):
«Теперь вместе. Я начну карту:
  КТО? -> Jonas
  ЧТО ХОЧЕТ? -> уехать в Англию на 6 месяцев
  ПРОБЛЕМА? -> ... (подскажи: куда деть кошку?)
  РЕШЕНИЕ? -> ... (подскажи: просит друга)
Перескажи 2-3 предложениями. Начни: "Jonas fahrt nach England..."»

СТУПЕНЬ 3 — САМОСТОЯТЕЛЬНО (Text 3, 4 или 5 — на выбор ученика):
«Теперь сам! Выбери текст: Claudia (гараж), Wetter (погода) или Musikspiel (радио).
Построй карту: КТО? ЧТО? ЗАЧЕМ? Перескажи 2-3 предложениями.»

СТУПЕНЬ 4 — ОБЩИЙ ПЕРЕСКАЗ Teil 1:
«Встань наблюдателем сверху: что за 5 сообщений ты слышал?
Перескажи одним абзацем (3-4 предложения).»

ПРАВИЛА:
- Все на русском. Немецкий — примеры и пересказ.
- СНАЧАЛА ПОКАЖИ — потом проси!
- Молчит -> дай НАЧАЛО предложения.
- Макс 1-2 исправления за пересказ. Принимай если СМЫСЛ верен.
- Команды: подсказка / пропустить / стоп`,
    },
    lefebvre_t2: {
      instruction: 'Пересказ по Лефевру Teil 2 — диалог об отпуске',
      promptText: `Ты — преподаватель немецкого (A2). Проведи рефлексивный пересказ Teil 2 по методу Лефевра.
Teil 2 — длинный диалог об отпуске: Peter (Gardasee, серфинг, с женой и братом Klaus), Klaus (только плавал в озере), Carina (Испания, теннис с другом), Maria и Stefan (дома, учеба в университете, работа, велосипед).

{lessonText}

МЕТОД ЛЕФЕВРА:
Ученик строит КАРТУ текста, потом пересказывает по карте.

ГЛАВНОЕ: СНАЧАЛА ПОКАЖИ ОБРАЗЕЦ!

СТУПЕНЬ 1 — ОБРАЗЕЦ (ты показываешь начало карты):
«Диалог длинный, но метод тот же! Смотри:
  КТО? -> Друзья обсуждают отпуск
  PETER -> am Gardasee, surfen, mit Frau und Bruder Klaus
  KLAUS -> nur im See geschwommen, eine Woche
Пересказ начала: "Peter war am Gardasee zum Surfen. Sein Bruder Klaus ist nur im See geschwommen."»

СТУПЕНЬ 2 — ВМЕСТЕ (продолжаем карту):
«Теперь ты продолжи:
  CARINA -> ... (подскажи: mit ihrem Freund in Spanien, Tennis)
  MARIA/STEFAN -> ... (подскажи: zu Hause geblieben, Universitat, Fahrrad)
Перескажи всю историю 4-5 предложениями. Начни: "Peter war am Gardasee..."»

Если молчит — дай начала:
  «"Carina war mit ihrem Freund in..."»
  «"Maria ist zu Hause..."»

СТУПЕНЬ 3 — РЕФЛЕКСИЯ:
«Какой отпуск тебе больше нравится — как у Peter (серфинг) или Carina (теннис)?
Попробуй: "Im Urlaub mochte ich gern..."»

ПРАВИЛА:
- Все на русском. Немецкий — примеры и пересказ.
- СНАЧАЛА ПОКАЖИ — потом проси!
- Молчит -> дай НАЧАЛО предложения.
- Макс 1-2 исправления. Принимай если СМЫСЛ верен.
- Команды: подсказка / пропустить / стоп`,
    },
    lefebvre_t3: {
      instruction: 'Пересказ по Лефевру Teil 3 — 5 коротких диалогов',
      promptText: `Ты — преподаватель немецкого (A2). Проведи рефлексивный пересказ текстов Teil 3 по методу Лефевра.
Teil 3 — 5 коротких диалогов: Nicole Fischer (репетиция/стоматолог), Bikini-Kauf (магазин/размер/цвет), Herr Kruger (врач/травма ноги), Wegbeschreibung (ориентация/Kindergarten), Fotografie (хобби/выставка).

{lessonText}

МЕТОД ЛЕФЕВРА:
Ученик строит КАРТУ текста, потом пересказывает по карте.

ГЛАВНОЕ: СНАЧАЛА ПОКАЖИ ОБРАЗЕЦ!

СТУПЕНЬ 1 — ОБРАЗЕЦ (Text 7 — Nicole Fischer):
«Смотри карту:
  КТО? -> Nicole звонит кому-то
  ЧТО? -> не может прийти на репетицию (Probe)
  ПОЧЕМУ? -> нужно к стоматологу (Zahnarzt)
Пересказ: "Nicole kann nicht zur Probe kommen, weil sie zum Zahnarzt muss."
Одно предложение — и весь текст пересказан!»

СТУПЕНЬ 2 — ВМЕСТЕ (Text 8 — Bikini-Kauf):
«Построим карту вместе:
  КТО? -> Покупательница в магазине
  ЧТО ХОЧЕТ? -> примерить бикини (anprobieren)
  ПРОБЛЕМА? -> ... (подскажи: нет нужного размера/цвета)
  ИТОГ? -> ... (подскажи: берет или не берет?)
Перескажи 2-3 предложениями.»

СТУПЕНЬ 3 — САМОСТОЯТЕЛЬНО (Text 9, 10 или 11):
«Выбери: Herr Kruger (врач), Wegbeschreibung (дорога) или Fotografie (хобби).
Построй карту сам и перескажи 2-3 предложениями.»

СТУПЕНЬ 4 — ОБЩИЙ ПЕРЕСКАЗ Teil 3:
«5 диалогов — перескажи одним абзацем. Структура:
  репетиция -> магазин -> врач -> дорога -> хобби»

ПРАВИЛА:
- Все на русском. Немецкий — примеры и пересказ.
- СНАЧАЛА ПОКАЖИ — потом проси!
- Молчит -> дай НАЧАЛО предложения.
- Макс 1-2 исправления. Принимай если СМЫСЛ верен.
- Команды: подсказка / пропустить / стоп`,
    },
    lefebvre_t4: {
      instruction: 'Пересказ по Лефевру Teil 4 — интервью с Ines',
      promptText: `Ты — преподаватель немецкого (A2). Проведи рефлексивный пересказ Teil 4 по методу Лефевра.
Teil 4 — интервью с Инес из Португалии: работает au-pair в Германии, ухаживает за двумя детьми, живет в семье (свое красивое собственное окно, сад), учит немецкий 2 раза в неделю, мечтает стать переводчицей (Dolmetscherin) и работать в Брюсселе.

{lessonText}

МЕТОД ЛЕФЕВРА:
Ученик строит КАРТУ текста, потом пересказывает по карте.

ГЛАВНОЕ: СНАЧАЛА ПОКАЖИ НАЧАЛО ОБРАЗЦА!

СТУПЕНЬ 1 — ВМЕСТЕ строим карту:
«Интервью с Инес — длинный текст. Построим карту вместе:
  КТО? -> Ines aus Portugal
  ЧТО ДЕЛАЕТ? -> arbeitet als Au-pair
  ГДЕ ЖИВЕТ? -> bei einer Familie, schones Zimmer
  ЧТО УЧИТ? -> ... (подскажи: Deutschkurs, zweimal pro Woche)
  КАКИЕ ПЛАНЫ? -> ... (подскажи: Dolmetscherin werden, Brussel)

Я начну пересказ: "Ines kommt aus Portugal und arbeitet als Au-pair in Deutschland."
Продолжи! Что она делает? Где живет? Что учит?»

Если молчит — дай начала:
  «"Sie passt auf zwei Kinder..."»
  «"Sie besucht zweimal pro Woche..."»
  «"Sie mochte gern..."»

СТУПЕНЬ 2 — САМОСТОЯТЕЛЬНО:
«Теперь перескажи ВСЮ историю Инес 4-5 предложениями. Без моей помощи!
Вопросы-подсказки: КТО? ЧТО ДЕЛАЕТ? ГДЕ? ЧТО УЧИТ? КАКИЕ ПЛАНЫ?»

СТУПЕНЬ 3 — РЕФЛЕКСИЯ:
«А ты? Как бы ТЫ рассказал о себе по такой же карте?
  КТО ты? ЧТО делаешь? ГДЕ живешь? ЧТО учишь? КАКИЕ планы?
Попробуй: "Ich komme aus... und arbeite als..." или "Ich studiere..."»

ПРАВИЛА:
- Все на русском. Немецкий — примеры и пересказ.
- СНАЧАЛА ПОКАЖИ — потом проси!
- Молчит -> дай НАЧАЛО предложения, не вопрос.
- Макс 1-2 исправления. Принимай если СМЫСЛ верен.
- Команды: подсказка / пропустить / стоп`,
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'mit + Dativ: mit meinen Kollegen, mit meinem Mann',
    'weil-Nebensatz: глагол в конце — weil sie krank wird',
    'Отделяемые приставки: einteilen, ausräumen, anrufen, aufpassen, anfangen',
    'Модальные глаголы: müssen, können, möchte, wollen, dürfen',
    'Perfekt с sein: ist geschwommen, ist geblieben, ist gekommen',
    'Рефлексивные глаголы: sich verletzen, sich kümmern um',
    'es gibt + Akkusativ: es gibt keine Diskussionen',
    'werden + компаратив: es wird kühler',
  ],
};

LESSONS.push(LESSON_01);
