/* ═══════════════════════════════════════════════════════════
   Lesson 03 — Goethe Zertifikat A2 Hören Modelltest 2025
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_03 = {
  id: 'lesson-03',
  number: 3,
  title: 'Goethe A2 Hören — Modelltest 2025',
  subtitle: 'Sportfest, Gewinnspiel, Arbeitsweg, Wetter, Kino, Freunde, Restaurant, Bücherei, Reisebüro, Kleidung, Bewerbung, Fotowettbewerb',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-03',
  videoUrl: 'https://www.youtube.com/watch?v=zcTTeztCet4',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Sportfest',
      type: 'радио-объявление',
      text: 'Ihre Nachrichten um 12 Uhr. Liebe Hörerinnen und Hörer, leider fällt das Sportfest am Goetheplatz heute wegen zu starkem Wind aus. Das Fußballspiel in der Sporthalle findet morgen jedoch wie geplant ab 19 Uhr statt. Das Fest wird auf nächste Woche Sonntag verschoben.',
      sentenceTranslations: {
        'Ihre Nachrichten um 12 Uhr.': {
          literal: 'Ваши новости в 12 часов.',
          literary: 'Выпуск новостей в 12 часов.'
        },
        'Liebe Hörerinnen und Hörer, leider fällt das Sportfest am Goetheplatz heute wegen zu starkem Wind aus.': {
          literal: 'Дорогие слушательницы и слушатели, к сожалению выпадает спортпраздник на Гётеплац сегодня из-за слишком сильного ветра наружу.',
          literary: 'Дорогие радиослушатели, к сожалению, спортивный праздник на площади Гёте сегодня отменяется из-за слишком сильного ветра.'
        },
        'Das Fußballspiel in der Sporthalle findet morgen jedoch wie geplant ab 19 Uhr statt.': {
          literal: 'Футбольная игра в спортзале находит завтра однако как запланировано от 19 часов место.',
          literary: 'Футбольный матч в спортзале состоится завтра, как и планировалось, начиная с 19 часов.'
        },
        'Das Fest wird auf nächste Woche Sonntag verschoben.': {
          literal: 'Праздник становится на следующую неделю воскресенье перенесён.',
          literary: 'Праздник переносится на воскресенье следующей недели.'
        },
      },
      vocabulary: [
        { de: 'das Sportfest', plural: 'die Sportfeste', ru: 'спортивный праздник', gender: 'neutrum', collocation: 'das Sportfest fällt aus', example: 'Leider fällt das Sportfest am Goetheplatz heute wegen zu starkem Wind aus.' },
        { de: 'das Fußballspiel', plural: 'die Fußballspiele', ru: 'футбольный матч', gender: 'neutrum', collocation: 'das Fußballspiel findet statt', example: 'Das Fußballspiel in der Sporthalle findet morgen jedoch wie geplant ab 19 Uhr statt.' },
        { de: 'die Sporthalle', plural: 'die Sporthallen', ru: 'спортзал', gender: 'feminin', collocation: 'in der Sporthalle', example: 'Das Fußballspiel in der Sporthalle findet morgen jedoch wie geplant ab 19 Uhr statt.' },
        { de: 'der Wind', plural: 'die Winde', ru: 'ветер', gender: 'maskulin', collocation: 'wegen zu starkem Wind', example: 'Leider fällt das Sportfest am Goetheplatz heute wegen zu starkem Wind aus.' },
        { de: 'ausfallen', ru: 'отменяться', type: 'verb', forms: 'fällt aus, fiel aus, ist ausgefallen', example: 'Leider fällt das Sportfest am Goetheplatz heute wegen zu starkem Wind aus.' },
        { de: 'stattfinden', ru: 'состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Das Fußballspiel in der Sporthalle findet morgen jedoch wie geplant ab 19 Uhr statt.' },
        { de: 'verschieben', ru: 'переносить', type: 'verb', forms: 'verschiebt, verschob, hat verschoben', example: 'Das Fest wird auf nächste Woche Sonntag verschoben.' },
        { de: 'leider', ru: 'к сожалению', type: 'adv', example: 'Leider fällt das Sportfest am Goetheplatz heute wegen zu starkem Wind aus.' },
      ],
      practiceSentences: [
        { de: 'Das Konzert fällt heute aus.', ru: 'Концерт сегодня отменяется.', note: 'отделяемая приставка, V2' },
        { de: 'Der Unterricht findet morgen statt.', ru: 'Занятие состоится завтра.', note: 'отделяемая приставка, V2' },
        { de: 'Das Meeting wird verschoben.', ru: 'Встреча переносится.', note: 'werden + Partizip II' },
        { de: 'Ich komme wegen des Regens nicht.', ru: 'Я не приду из-за дождя.', note: 'wegen + Genitiv' },
        { de: 'Die Party beginnt ab 20 Uhr.', ru: 'Вечеринка начинается с 20 часов.', note: 'V2' },
      ],
      question: {
        de: 'Was passiert mit dem Sportfest?',
        ru: 'Что происходит со спортивным праздником?',
        options: [
          { de: 'Das Sportfest ist heute am Goetheplatz.', ru: 'Спортивный праздник сегодня на площади Гёте.' },
          { de: 'Das Sportfest ist heute in der Sporthalle.', ru: 'Спортивный праздник сегодня в спортзале.' },
          { de: 'Das Sportfest ist heute nicht.', ru: 'Спортивного праздника сегодня не будет.' },
        ],
        correct: 2,
        explanation: 'В тексте сказано: "leider fällt das Sportfest am Goetheplatz heute wegen zu starkem Wind aus" — праздник отменяется из-за ветра.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Gewinnspiel',
      type: 'радио-игра',
      text: 'Und nun zu unserem Donnerstags-Gewinnspiel. Heute wollen wir wissen: Was essen Sie am liebsten – Pizza, Salat oder Kuchen? Schicken Sie uns ein Foto mit Ihrem Lieblingsgericht per E-Mail. Wie immer können Sie tolle Preise gewinnen. Die schönsten Fotos kommen außerdem ins Internet. Wir freuen uns darauf!',
      sentenceTranslations: {
        'Und nun zu unserem Donnerstags-Gewinnspiel.': {
          literal: 'И теперь к нашей четверговой игре-розыгрышу.',
          literary: 'А теперь о нашем розыгрыше по четвергам.'
        },
        'Heute wollen wir wissen: Was essen Sie am liebsten – Pizza, Salat oder Kuchen?': {
          literal: 'Сегодня хотим мы знать: что едите вы наиболее охотно — пицца, салат или пирог?',
          literary: 'Сегодня мы хотим узнать: что вы любите есть больше всего — пиццу, салат или пирог?'
        },
        'Schicken Sie uns ein Foto mit Ihrem Lieblingsgericht per E-Mail.': {
          literal: 'Пошлите вы нам одно фото с вашим любимым блюдом через электронную почту.',
          literary: 'Пришлите нам фото вашего любимого блюда по электронной почте.'
        },
        'Wie immer können Sie tolle Preise gewinnen.': {
          literal: 'Как всегда можете вы отличные призы выиграть.',
          literary: 'Как всегда, вы можете выиграть отличные призы.'
        },
        'Die schönsten Fotos kommen außerdem ins Internet.': {
          literal: 'Самые красивые фото приходят кроме того в интернет.',
          literary: 'Самые красивые фотографии также будут опубликованы в интернете.'
        },
        'Wir freuen uns darauf!': {
          literal: 'Мы радуемся на-это!',
          literary: 'Мы ждём с нетерпением!'
        },
      },
      vocabulary: [
        { de: 'das Gewinnspiel', plural: 'die Gewinnspiele', ru: 'розыгрыш призов', gender: 'neutrum', collocation: 'Donnerstags-Gewinnspiel', example: 'Und nun zu unserem Donnerstags-Gewinnspiel.' },
        { de: 'das Lieblingsgericht', plural: 'die Lieblingsgerichte', ru: 'любимое блюдо', gender: 'neutrum', collocation: 'mit Ihrem Lieblingsgericht', example: 'Schicken Sie uns ein Foto mit Ihrem Lieblingsgericht per E-Mail.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'приз', gender: 'maskulin', collocation: 'tolle Preise gewinnen', example: 'Wie immer können Sie tolle Preise gewinnen.' },
        { de: 'das Foto', plural: 'die Fotos', ru: 'фотография', gender: 'neutrum', collocation: 'ein Foto schicken', example: 'Schicken Sie uns ein Foto mit Ihrem Lieblingsgericht per E-Mail.' },
        { de: 'schicken', ru: 'отправлять', type: 'verb', forms: 'schickt, schickte, hat geschickt', example: 'Schicken Sie uns ein Foto mit Ihrem Lieblingsgericht per E-Mail.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Wie immer können Sie tolle Preise gewinnen.' },
        { de: 'sich freuen auf', ru: 'радоваться (чему-то предстоящему)', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Wir freuen uns darauf!' },
        { de: 'am liebsten', ru: 'больше всего', type: 'adv', example: 'Was essen Sie am liebsten – Pizza, Salat oder Kuchen?' },
      ],
      practiceSentences: [
        { de: 'Ich möchte Pizza essen.', ru: 'Я хочу есть пиццу.', note: 'модальный + инфинитив' },
        { de: 'Schicken Sie mir eine E-Mail!', ru: 'Пришлите мне email!', note: 'императив V1' },
        { de: 'Er kann gut kochen.', ru: 'Он умеет хорошо готовить.', note: 'модальный + инфинитив' },
        { de: 'Was trinken Sie am liebsten?', ru: 'Что вы любите пить больше всего?', note: 'V2 в вопросе' },
        { de: 'Wir wollen heute gewinnen.', ru: 'Мы хотим сегодня выиграть.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was sollen die Hörer schicken?',
        ru: 'Что должны прислать слушатели?',
        options: [
          { de: 'Ein Rezept von ihrem Lieblingsgericht', ru: 'Рецепт своего любимого блюда' },
          { de: 'Ein Foto von ihrem Lieblingsgericht', ru: 'Фото своего любимого блюда' },
          { de: 'Eine E-Mail über Essen', ru: 'Электронное письмо о еде' },
        ],
        correct: 1,
        explanation: 'Текст говорит: "Schicken Sie uns ein Foto mit Ihrem Lieblingsgericht per E-Mail".'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Arbeitsweg',
      type: 'рассказ',
      text: 'Und wie fahren Sie zur Arbeit? Viele meiner Kollegen fahren jeden Tag mit dem Auto zur Arbeit und müssen lange an Ampeln und Kreuzungen warten. Das verstehe ich nicht. Ich nehme meistens den Bus und die Bahn. Bei gutem Wetter fahre ich sogar mit dem Rad. Das ist gut für die Umwelt und es hält mich sogar fit.',
      sentenceTranslations: {
        'Und wie fahren Sie zur Arbeit?': {
          literal: 'И как едете вы к работе?',
          literary: 'А как вы добираетесь на работу?'
        },
        'Viele meiner Kollegen fahren jeden Tag mit dem Auto zur Arbeit und müssen lange an Ampeln und Kreuzungen warten.': {
          literal: 'Многие моих коллег едут каждый день с автомобилем к работе и должны долго у светофоров и перекрёстков ждать.',
          literary: 'Многие мои коллеги каждый день ездят на работу на машине и вынуждены долго стоять на светофорах и перекрёстках.'
        },
        'Das verstehe ich nicht.': {
          literal: 'Это понимаю я не.',
          literary: 'Я этого не понимаю.'
        },
        'Ich nehme meistens den Bus und die Bahn.': {
          literal: 'Я беру чаще всего автобус и поезд.',
          literary: 'Я обычно езжу на автобусе и поезде.'
        },
        'Bei gutem Wetter fahre ich sogar mit dem Rad.': {
          literal: 'При хорошей погоде еду я даже с велосипедом.',
          literary: 'В хорошую погоду я даже езжу на велосипеде.'
        },
        'Das ist gut für die Umwelt und es hält mich sogar fit.': {
          literal: 'Это есть хорошо для окружающей среды и оно держит меня даже в форме.',
          literary: 'Это полезно для окружающей среды и поддерживает меня в форме.'
        },
      },
      vocabulary: [
        { de: 'die Arbeit', plural: 'die Arbeiten', ru: 'работа', gender: 'feminin', collocation: 'zur Arbeit fahren', example: 'Viele meiner Kollegen fahren jeden Tag mit dem Auto zur Arbeit und müssen lange an Ampeln und Kreuzungen warten.' },
        { de: 'der Kollege', plural: 'die Kollegen', ru: 'коллега', gender: 'maskulin', collocation: 'viele meiner Kollegen', example: 'Viele meiner Kollegen fahren jeden Tag mit dem Auto zur Arbeit und müssen lange an Ampeln und Kreuzungen warten.' },
        { de: 'die Ampel', plural: 'die Ampeln', ru: 'светофор', gender: 'feminin', collocation: 'an Ampeln warten', example: 'Viele meiner Kollegen fahren jeden Tag mit dem Auto zur Arbeit und müssen lange an Ampeln und Kreuzungen warten.' },
        { de: 'die Kreuzung', plural: 'die Kreuzungen', ru: 'перекрёсток', gender: 'feminin', collocation: 'an Kreuzungen warten', example: 'Viele meiner Kollegen fahren jeden Tag mit dem Auto zur Arbeit und müssen lange an Ampeln und Kreuzungen warten.' },
        { de: 'die Bahn', plural: 'die Bahnen', ru: 'поезд, электричка', gender: 'feminin', collocation: 'die Bahn nehmen', example: 'Ich nehme meistens den Bus und die Bahn.' },
        { de: 'das Rad', plural: 'die Räder', ru: 'велосипед', gender: 'neutrum', collocation: 'mit dem Rad fahren', example: 'Bei gutem Wetter fahre ich sogar mit dem Rad.' },
        { de: 'die Umwelt', ru: 'окружающая среда', gender: 'feminin', collocation: 'gut für die Umwelt', example: 'Das ist gut für die Umwelt und es hält mich sogar fit.' },
        { de: 'meistens', ru: 'чаще всего, обычно', type: 'adv', example: 'Ich nehme meistens den Bus und die Bahn.' },
        { de: 'sogar', ru: 'даже', type: 'adv', example: 'Bei gutem Wetter fahre ich sogar mit dem Rad.' },
      ],
      practiceSentences: [
        { de: 'Ich fahre mit dem Bus.', ru: 'Я езжу на автобусе.', note: 'V2' },
        { de: 'Sie muss an der Haltestelle warten.', ru: 'Она должна ждать на остановке.', note: 'модальный + инфинитив' },
        { de: 'Bei Regen bleibe ich zu Hause.', ru: 'В дождь я остаюсь дома.', note: 'V2' },
        { de: 'Er nimmt jeden Tag die U-Bahn.', ru: 'Он каждый день ездит на метро.', note: 'V2' },
        { de: 'Das Auto hält an der Ampel.', ru: 'Машина останавливается на светофоре.', note: 'V2' },
      ],
      question: {
        de: 'Wie fährt die Person bei gutem Wetter zur Arbeit?',
        ru: 'Как человек добирается на работу в хорошую погоду?',
        options: [
          { de: 'Mit dem Auto', ru: 'На машине' },
          { de: 'Mit Bus und Bahn', ru: 'На автобусе и поезде' },
          { de: 'Mit dem Rad', ru: 'На велосипеде' },
        ],
        correct: 2,
        explanation: 'В тексте: "Bei gutem Wetter fahre ich sogar mit dem Rad".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Und jetzt zum Wetter. Über den meisten Teilen des Landes hängen heute graue Wolken mit viel Regen. Nur in Ostdeutschland bleibt es trocken. Dort zeigt sich auch ab und zu die Sonne. Die Temperatur liegt bei nur 10°. Ab morgen wird es wieder wärmer. In ganz Deutschland scheint die Sonne bei 15°.',
      sentenceTranslations: {
        'Und jetzt zum Wetter.': {
          literal: 'И сейчас к погоде.',
          literary: 'А теперь о погоде.'
        },
        'Über den meisten Teilen des Landes hängen heute graue Wolken mit viel Regen.': {
          literal: 'Над большинством частей страны висят сегодня серые облака с большим дождём.',
          literary: 'Над большей частью страны сегодня висят серые дождевые тучи.'
        },
        'Nur in Ostdeutschland bleibt es trocken.': {
          literal: 'Только в Восточной Германии остаётся оно сухим.',
          literary: 'Только в Восточной Германии останется сухо.'
        },
        'Dort zeigt sich auch ab und zu die Sonne.': {
          literal: 'Там показывается себя также время от времени солнце.',
          literary: 'Там временами показывается солнце.'
        },
        'Die Temperatur liegt bei nur 10°.': {
          literal: 'Температура лежит при только 10°.',
          literary: 'Температура составляет всего 10 градусов.'
        },
        'Ab morgen wird es wieder wärmer.': {
          literal: 'С завтра становится оно снова теплее.',
          literary: 'С завтрашнего дня снова потеплеет.'
        },
        'In ganz Deutschland scheint die Sonne bei 15°.': {
          literal: 'Во всей Германии светит солнце при 15°.',
          literary: 'По всей Германии будет светить солнце при 15 градусах.'
        },
      },
      vocabulary: [
        { de: 'die Wolke', plural: 'die Wolken', ru: 'облако, туча', gender: 'feminin', collocation: 'graue Wolken', example: 'Über den meisten Teilen des Landes hängen heute graue Wolken mit viel Regen.' },
        { de: 'der Regen', ru: 'дождь', gender: 'maskulin', collocation: 'mit viel Regen', example: 'Über den meisten Teilen des Landes hängen heute graue Wolken mit viel Regen.' },
        { de: 'die Sonne', plural: 'die Sonnen', ru: 'солнце', gender: 'feminin', collocation: 'die Sonne scheint', example: 'In ganz Deutschland scheint die Sonne bei 15°.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'die Temperatur liegt bei', example: 'Die Temperatur liegt bei nur 10°.' },
        { de: 'scheinen', ru: 'светить', type: 'verb', forms: 'scheint, schien, hat geschienen', example: 'In ganz Deutschland scheint die Sonne bei 15°.' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Nur in Ostdeutschland bleibt es trocken.' },
        { de: 'grau', ru: 'серый', type: 'adj', example: 'Über den meisten Teilen des Landes hängen heute graue Wolken mit viel Regen.' },
        { de: 'wärmer', ru: 'теплее', type: 'adj', example: 'Ab morgen wird es wieder wärmer.' },
        { de: 'ab und zu', ru: 'время от времени', type: 'adv', example: 'Dort zeigt sich auch ab und zu die Sonne.' },
      ],
      practiceSentences: [
        { de: 'Es regnet heute stark.', ru: 'Сегодня идёт сильный дождь.', note: 'V2, безличное es' },
        { de: 'Die Sonne scheint morgen.', ru: 'Завтра будет светить солнце.', note: 'V2' },
        { de: 'Es wird kälter.', ru: 'Становится холоднее.', note: 'werden + компаратив' },
        { de: 'Die Wolken hängen tief.', ru: 'Облака висят низко.', note: 'V2' },
        { de: 'Es bleibt sonnig.', ru: 'Остаётся солнечно.', note: 'V2, безличное es' },
      ],
      question: {
        de: 'Wie ist das Wetter morgen?',
        ru: 'Какая погода будет завтра?',
        options: [
          { de: 'Es regnet in ganz Deutschland.', ru: 'Дождь по всей Германии.' },
          { de: 'Es ist sonnig und wärmer.', ru: 'Солнечно и теплее.' },
          { de: 'Es bleibt kalt und grau.', ru: 'Останется холодно и пасмурно.' },
        ],
        correct: 1,
        explanation: 'Текст указывает: "Ab morgen wird es wieder wärmer. In ganz Deutschland scheint die Sonne bei 15°".'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Stefanie',
      type: 'телефонное сообщение',
      text: 'Hallo Paul, Stefanie hier. Ich rufe wegen heute Abend an. Es gibt keine Karten mehr für die Kinovorstellung. Die Eintrittskarten fürs Theater sind mir zu teuer. Aber in der Kunsthalle gibt es nur noch heute eine interessante Ausstellung. Wie findest du die Idee? Ruf mich bitte kurz zurück.',
      sentenceTranslations: {
        'Hallo Paul, Stefanie hier.': {
          literal: 'Привет Пауль, Штефани здесь.',
          literary: 'Привет, Пауль, это Штефани.'
        },
        'Ich rufe wegen heute Abend an.': {
          literal: 'Я звоню из-за сегодня вечером.',
          literary: 'Я звоню насчёт сегодняшнего вечера.'
        },
        'Es gibt keine Karten mehr für die Kinovorstellung.': {
          literal: 'Оно даёт никакие билеты больше для кинопоказа.',
          literary: 'На киносеанс больше нет билетов.'
        },
        'Die Eintrittskarten fürs Theater sind mir zu teuer.': {
          literal: 'Входные билеты для театра есть мне слишком дорогие.',
          literary: 'Билеты в театр для меня слишком дорогие.'
        },
        'Aber in der Kunsthalle gibt es nur noch heute eine interessante Ausstellung.': {
          literal: 'Но в художественном зале даёт оно только ещё сегодня одну интересную выставку.',
          literary: 'Но в художественной галерее только сегодня проходит интересная выставка.'
        },
        'Wie findest du die Idee?': {
          literal: 'Как находишь ты идею?',
          literary: 'Что ты думаешь об этой идее?'
        },
        'Ruf mich bitte kurz zurück.': {
          literal: 'Позвони меня пожалуйста коротко назад.',
          literary: 'Перезвони мне, пожалуйста.'
        },
      },
      vocabulary: [
        { de: 'die Karte', plural: 'die Karten', ru: 'билет', gender: 'feminin', collocation: 'keine Karten mehr', example: 'Es gibt keine Karten mehr für die Kinovorstellung.' },
        { de: 'die Kinovorstellung', plural: 'die Kinovorstellungen', ru: 'киносеанс', gender: 'feminin', collocation: 'für die Kinovorstellung', example: 'Es gibt keine Karten mehr für die Kinovorstellung.' },
        { de: 'die Eintrittskarte', plural: 'die Eintrittskarten', ru: 'входной билет', gender: 'feminin', collocation: 'Eintrittskarten fürs Theater', example: 'Die Eintrittskarten fürs Theater sind mir zu teuer.' },
        { de: 'die Kunsthalle', plural: 'die Kunsthallen', ru: 'художественная галерея', gender: 'feminin', collocation: 'in der Kunsthalle', example: 'Aber in der Kunsthalle gibt es nur noch heute eine interessante Ausstellung.' },
        { de: 'die Ausstellung', plural: 'die Ausstellungen', ru: 'выставка', gender: 'feminin', collocation: 'eine interessante Ausstellung', example: 'Aber in der Kunsthalle gibt es nur noch heute eine interessante Ausstellung.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Ich rufe wegen heute Abend an.' },
        { de: 'zurückrufen', ru: 'перезвонить', type: 'verb', forms: 'ruft zurück, rief zurück, hat zurückgerufen', example: 'Ruf mich bitte kurz zurück.' },
        { de: 'interessant', ru: 'интересный', type: 'adj', example: 'Aber in der Kunsthalle gibt es nur noch heute eine interessante Ausstellung.' },
      ],
      practiceSentences: [
        { de: 'Ich rufe dich später an.', ru: 'Я позвоню тебе позже.', note: 'отделяемая приставка' },
        { de: 'Es gibt heute Pizza.', ru: 'Сегодня есть пицца.', note: 'es gibt + Akk' },
        { de: 'Das ist mir zu schwer.', ru: 'Это для меня слишком сложно.', note: 'V2' },
        { de: 'Ruf mich morgen zurück!', ru: 'Перезвони мне завтра!', note: 'императив, отделяемая' },
        { de: 'Gibt es noch Karten?', ru: 'Есть ещё билеты?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Wohin will Stefanie mit Paul gehen?',
        ru: 'Куда хочет пойти Штефани с Паулем?',
        options: [
          { de: 'Ins Kino', ru: 'В кино' },
          { de: 'Ins Theater', ru: 'В театр' },
          { de: 'In die Kunsthalle', ru: 'В художественную галерею' },
        ],
        correct: 2,
        explanation: 'Штефани предлагает: "in der Kunsthalle gibt es nur noch heute eine interessante Ausstellung".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Mario & Freunde',
      type: 'диалог',
      text: 'Hallo Mario, lange nicht mehr gesehen! Wie geht es dir? Gut! Ich hatte in letzter Zeit auch viel zu tun. Habe mein Studium abgeschlossen und viele Bewerbungen geschrieben. Und seit August arbeite ich in einer Schule. Sag mal, hast du wieder was von Thomas gehört? Ist er zurück aus Mexiko? Nein, er arbeitet jetzt dort in einem Hotel als Reiseführer. Er hat sein Hobby zum Beruf gemacht. Wow, dann sehen wir ihn wohl nicht mehr so schnell wieder. Und Elena? Ist sie noch Journalistin für die Zeitung? Sie hat gekündigt. Denn Elena schreibt jetzt ein eigenes Buch und braucht dafür viel Zeit. Sie hat doch früher immer auf der alten Schreibmaschine ihrer Mutter geschrieben. Dann wird sie ja vielleicht bald berühmt! Wie Lukas! Habe ihn letztens im Fernsehen gesehen. Das kann ich auch noch nicht glauben, dass er es als Schauspieler ins Fernsehen geschafft hat. Ich fahre morgen zu Elif. Ich helfe ihr mit den Speisekarten. Sie eröffnet bald ihr eigenes Café in Kreuzberg. Da muss ich Elif dort unbedingt besuchen und mir den Laden anschauen. Da hat es bestimmt geholfen, dass sie früher bei der Bank gearbeitet hat. Ja, sehr. Und Nika backt für den Laden den Kuchen. Hört sie dann bei der Bäckerei auf? Sie arbeitet weiter in der Bäckerei und backt den Kuchen für Elifs Café. Aufregend, wie schnell sich alles ändert!',
      sentenceTranslations: {
        'Hallo Mario, lange nicht mehr gesehen!': {
          literal: 'Привет Марио, долго не больше видел!',
          literary: 'Привет, Марио, давно не виделись!'
        },
        'Wie geht es dir?': {
          literal: 'Как идёт оно тебе?',
          literary: 'Как у тебя дела?'
        },
        'Gut!': {
          literal: 'Хорошо!',
          literary: 'Хорошо!'
        },
        'Ich hatte in letzter Zeit auch viel zu tun.': {
          literal: 'Я имел в последнее время также много делать.',
          literary: 'У меня тоже было много дел в последнее время.'
        },
        'Habe mein Studium abgeschlossen und viele Bewerbungen geschrieben.': {
          literal: 'Имею моё обучение завершённым и многие заявки написанными.',
          literary: 'Закончил учёбу и написал много заявок.'
        },
        'Und seit August arbeite ich in einer Schule.': {
          literal: 'И с августа работаю я в одной школе.',
          literary: 'И с августа я работаю в школе.'
        },
        'Sag mal, hast du wieder was von Thomas gehört?': {
          literal: 'Скажи раз, имеешь ты снова что от Томаса слышанным?',
          literary: 'Скажи, ты что-нибудь слышал о Томасе?'
        },
        'Ist er zurück aus Mexiko?': {
          literal: 'Есть он назад из Мексики?',
          literary: 'Он вернулся из Мексики?'
        },
        'Nein, er arbeitet jetzt dort in einem Hotel als Reiseführer.': {
          literal: 'Нет, он работает сейчас там в одном отеле как гид.',
          literary: 'Нет, он сейчас работает там в отеле гидом.'
        },
        'Er hat sein Hobby zum Beruf gemacht.': {
          literal: 'Он имеет своё хобби к профессии сделанным.',
          literary: 'Он превратил своё хобби в профессию.'
        },
        'Wow, dann sehen wir ihn wohl nicht mehr so schnell wieder.': {
          literal: 'Ого, тогда видим мы его наверное не больше так быстро снова.',
          literary: 'Ого, тогда мы его, наверное, нескоро увидим.'
        },
        'Und Elena?': {
          literal: 'И Елена?',
          literary: 'А Елена?'
        },
        'Ist sie noch Journalistin für die Zeitung?': {
          literal: 'Есть она ещё журналисткой для газеты?',
          literary: 'Она всё ещё журналистка в газете?'
        },
        'Sie hat gekündigt.': {
          literal: 'Она имеет уволенной.',
          literary: 'Она уволилась.'
        },
        'Denn Elena schreibt jetzt ein eigenes Buch und braucht dafür viel Zeit.': {
          literal: 'Ведь Елена пишет сейчас собственную книгу и нуждается для-этого много времени.',
          literary: 'Ведь Елена сейчас пишет собственную книгу и ей нужно на это много времени.'
        },
        'Sie hat doch früher immer auf der alten Schreibmaschine ihrer Mutter geschrieben.': {
          literal: 'Она имеет же раньше всегда на старой печатной машинке её матери писала.',
          literary: 'Она же раньше всегда писала на старой печатной машинке своей мамы.'
        },
        'Dann wird sie ja vielleicht bald berühmt!': {
          literal: 'Тогда становится она же может-быть скоро знаменитой!',
          literary: 'Тогда она, может быть, скоро станет знаменитой!'
        },
        'Wie Lukas!': {
          literal: 'Как Лукас!',
          literary: 'Как Лукас!'
        },
        'Habe ihn letztens im Fernsehen gesehen.': {
          literal: 'Имею его недавно в телевидении увиденным.',
          literary: 'Недавно видел его по телевизору.'
        },
        'Das kann ich auch noch nicht glauben, dass er es als Schauspieler ins Fernsehen geschafft hat.': {
          literal: 'Это могу я также ещё не верить, что он это как актёр в телевидение справил имеет.',
          literary: 'До сих пор не могу поверить, что он попал на телевидение как актёр.'
        },
        'Ich fahre morgen zu Elif.': {
          literal: 'Я еду завтра к Элиф.',
          literary: 'Завтра я еду к Элиф.'
        },
        'Ich helfe ihr mit den Speisekarten.': {
          literal: 'Я помогаю ей с меню.',
          literary: 'Я помогаю ей с меню.'
        },
        'Sie eröffnet bald ihr eigenes Café in Kreuzberg.': {
          literal: 'Она открывает скоро своё собственное кафе в Кройцберге.',
          literary: 'Она скоро открывает собственное кафе в Кройцберге.'
        },
        'Da muss ich Elif dort unbedingt besuchen und mir den Laden anschauen.': {
          literal: 'Тогда должен я Элиф там обязательно посетить и мне магазин посмотреть.',
          literary: 'Тогда я обязательно должен навестить Элиф и посмотреть заведение.'
        },
        'Da hat es bestimmt geholfen, dass sie früher bei der Bank gearbeitet hat.': {
          literal: 'Тогда имеет оно определённо помогло, что она раньше при банке работала имеет.',
          literary: 'Наверняка помогло, что она раньше работала в банке.'
        },
        'Ja, sehr.': {
          literal: 'Да, очень.',
          literary: 'Да, очень.'
        },
        'Und Nika backt für den Laden den Kuchen.': {
          literal: 'И Ника печёт для магазина пирог.',
          literary: 'А Ника печёт для заведения пироги.'
        },
        'Hört sie dann bei der Bäckerei auf?': {
          literal: 'Слышит она тогда при пекарне наверх?',
          literary: 'Она тогда уходит из пекарни?'
        },
        'Sie arbeitet weiter in der Bäckerei und backt den Kuchen für Elifs Café.': {
          literal: 'Она работает дальше в пекарне и печёт пирог для кафе Элиф.',
          literary: 'Она продолжает работать в пекарне и печёт пироги для кафе Элиф.'
        },
        'Aufregend, wie schnell sich alles ändert!': {
          literal: 'Захватывающе, как быстро себя всё меняет!',
          literary: 'Поразительно, как быстро всё меняется!'
        },
      },
      vocabulary: [
        { de: 'das Studium', plural: 'die Studien', ru: 'учёба, обучение', gender: 'neutrum', collocation: 'Studium abschließen', example: 'Habe mein Studium abgeschlossen und viele Bewerbungen geschrieben.' },
        { de: 'die Bewerbung', plural: 'die Bewerbungen', ru: 'заявка, резюме', gender: 'feminin', collocation: 'Bewerbungen schreiben', example: 'Habe mein Studium abgeschlossen und viele Bewerbungen geschrieben.' },
        { de: 'der Reiseführer', plural: 'die Reiseführer', ru: 'гид', gender: 'maskulin', collocation: 'als Reiseführer arbeiten', example: 'Nein, er arbeitet jetzt dort in einem Hotel als Reiseführer.' },
        { de: 'der Beruf', plural: 'die Berufe', ru: 'профессия', gender: 'maskulin', collocation: 'zum Beruf machen', example: 'Er hat sein Hobby zum Beruf gemacht.' },
        { de: 'die Zeitung', plural: 'die Zeitungen', ru: 'газета', gender: 'feminin', collocation: 'für die Zeitung schreiben', example: 'Ist sie noch Journalistin für die Zeitung?' },
        { de: 'die Schreibmaschine', plural: 'die Schreibmaschinen', ru: 'печатная машинка', gender: 'feminin', collocation: 'auf der Schreibmaschine schreiben', example: 'Sie hat doch früher immer auf der alten Schreibmaschine ihrer Mutter geschrieben.' },
        { de: 'der Schauspieler', plural: 'die Schauspieler', ru: 'актёр', gender: 'maskulin', collocation: 'als Schauspieler arbeiten', example: 'Das kann ich auch noch nicht glauben, dass er es als Schauspieler ins Fernsehen geschafft hat.' },
        { de: 'die Speisekarte', plural: 'die Speisekarten', ru: 'меню', gender: 'feminin', collocation: 'mit den Speisekarten helfen', example: 'Ich helfe ihr mit den Speisekarten.' },
        { de: 'die Bäckerei', plural: 'die Bäckereien', ru: 'пекарня', gender: 'feminin', collocation: 'bei der Bäckerei arbeiten', example: 'Sie arbeitet weiter in der Bäckerei und backt den Kuchen für Elifs Café.' },
        { de: 'abschließen', ru: 'заканчивать', type: 'verb', forms: 'schließt ab, schloss ab, hat abgeschlossen', example: 'Habe mein Studium abgeschlossen und viele Bewerbungen geschrieben.' },
        { de: 'kündigen', ru: 'увольняться', type: 'verb', forms: 'kündigt, kündigte, hat gekündigt', example: 'Sie hat gekündigt.' },
        { de: 'eröffnen', ru: 'открывать (заведение)', type: 'verb', forms: 'eröffnet, eröffnete, hat eröffnet', example: 'Sie eröffnet bald ihr eigenes Café in Kreuzberg.' },
        { de: 'backen', ru: 'печь', type: 'verb', forms: 'bäckt, backte, hat gebacken', example: 'Und Nika backt für den Laden den Kuchen.' },
        { de: 'aufhören', ru: 'прекращать', type: 'verb', forms: 'hört auf, hörte auf, hat aufgehört', example: 'Hört sie dann bei der Bäckerei auf?' },
        { de: 'berühmt', ru: 'знаменитый', type: 'adj', example: 'Dann wird sie ja vielleicht bald berühmt!' },
        { de: 'aufregend', ru: 'захватывающий', type: 'adj', example: 'Aufregend, wie schnell sich alles ändert!' },
      ],
      practiceSentences: [
        { de: 'Ich habe viel gelernt.', ru: 'Я много выучил.', note: 'Perfekt: haben + Part.II' },
        { de: 'Sie hat ihre Arbeit beendet.', ru: 'Она закончила работу.', note: 'Perfekt: haben + Part.II' },
        { de: 'Er macht Sport zum Hobby.', ru: 'Он делает спорт хобби.', note: 'V2' },
        { de: 'Wir haben uns lange nicht gesehen.', ru: 'Мы давно не виделись.', note: 'Perfekt возвратный' },
        { de: 'Das Café öffnet morgen.', ru: 'Кафе открывается завтра.', note: 'V2' },
      ],
      question: {
        de: 'Was macht Thomas jetzt beruflich?',
        ru: 'Чем занимается Томас профессионально?',
        options: [
          { de: 'Er arbeitet als Reiseführer in Mexiko.', ru: 'Работает гидом в Мексике.' },
          { de: 'Er studiert noch in Deutschland.', ru: 'Всё ещё учится в Германии.' },
          { de: 'Er schreibt ein Buch über Mexiko.', ru: 'Пишет книгу о Мексике.' },
        ],
        correct: 0,
        explanation: 'В диалоге говорится: "er arbeitet jetzt dort in einem Hotel als Reiseführer".'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Restaurant',
      type: 'диалог',
      text: 'Hallo, ich möchte einen Tisch für zwei Personen am Freitag um 19 Uhr reservieren. Da habe ich noch einen schönen Tisch draußen im Garten. Hmm, das wird zu kalt. Und drinnen haben Sie keine Tische mehr? Es ist schon sehr voll. Wir haben nur noch zwei Plätze an der Bar. Nein danke, da kann man nicht gut sitzen.',
      sentenceTranslations: {
        'Hallo, ich möchte einen Tisch für zwei Personen am Freitag um 19 Uhr reservieren.': {
          literal: 'Привет, я хотел бы один стол для двух персон в пятницу в 19 часов зарезервировать.',
          literary: 'Здравствуйте, я хотел бы забронировать столик на двоих в пятницу на 19 часов.'
        },
        'Da habe ich noch einen schönen Tisch draußen im Garten.': {
          literal: 'Там имею я ещё один красивый стол снаружи в саду.',
          literary: 'У меня есть хороший столик снаружи в саду.'
        },
        'Hmm, das wird zu kalt.': {
          literal: 'Хмм, это становится слишком холодно.',
          literary: 'Хмм, будет слишком холодно.'
        },
        'Und drinnen haben Sie keine Tische mehr?': {
          literal: 'И внутри имеете вы никакие столы больше?',
          literary: 'А внутри у вас больше нет столиков?'
        },
        'Es ist schon sehr voll.': {
          literal: 'Оно есть уже очень полно.',
          literary: 'Уже очень заполнено.'
        },
        'Wir haben nur noch zwei Plätze an der Bar.': {
          literal: 'Мы имеем только ещё два места у бара.',
          literary: 'У нас осталось только два места у бара.'
        },
        'Nein danke, da kann man nicht gut sitzen.': {
          literal: 'Нет спасибо, там может человек не хорошо сидеть.',
          literary: 'Нет, спасибо, там неудобно сидеть.'
        },
      },
      vocabulary: [
        { de: 'der Tisch', plural: 'die Tische', ru: 'стол', gender: 'maskulin', collocation: 'einen Tisch reservieren', example: 'Hallo, ich möchte einen Tisch für zwei Personen am Freitag um 19 Uhr reservieren.' },
        { de: 'der Garten', plural: 'die Gärten', ru: 'сад', gender: 'maskulin', collocation: 'draußen im Garten', example: 'Da habe ich noch einen schönen Tisch draußen im Garten.' },
        { de: 'der Platz', plural: 'die Plätze', ru: 'место', gender: 'maskulin', collocation: 'zwei Plätze an der Bar', example: 'Wir haben nur noch zwei Plätze an der Bar.' },
        { de: 'reservieren', ru: 'бронировать', type: 'verb', forms: 'reserviert, reservierte, hat reserviert', example: 'Hallo, ich möchte einen Tisch für zwei Personen am Freitag um 19 Uhr reservieren.' },
        { de: 'draußen', ru: 'снаружи', type: 'adv', example: 'Da habe ich noch einen schönen Tisch draußen im Garten.' },
        { de: 'drinnen', ru: 'внутри', type: 'adv', example: 'Und drinnen haben Sie keine Tische mehr?' },
        { de: 'voll', ru: 'полный, занятый', type: 'adj', example: 'Es ist schon sehr voll.' },
      ],
      practiceSentences: [
        { de: 'Ich möchte einen Kaffee bestellen.', ru: 'Я хотел бы заказать кофе.', note: 'модальный + инфинитив' },
        { de: 'Haben Sie noch freie Plätze?', ru: 'У вас есть свободные места?', note: 'V1 в вопросе' },
        { de: 'Es wird zu spät.', ru: 'Становится слишком поздно.', note: 'werden + zu' },
        { de: 'Man kann hier gut essen.', ru: 'Здесь можно хорошо поесть.', note: 'модальный + инфинитив' },
        { de: 'Der Tisch steht im Garten.', ru: 'Стол стоит в саду.', note: 'V2' },
      ],
      question: {
        de: 'Warum nimmt die Person keinen Tisch?',
        ru: 'Почему человек не берёт столик?',
        options: [
          { de: 'Es gibt keine freien Tische.', ru: 'Нет свободных столиков.' },
          { de: 'Die Plätze an der Bar sind unbequem.', ru: 'Места у бара неудобные.' },
          { de: 'Der Garten ist zu kalt.', ru: 'В саду слишком холодно.' },
        ],
        correct: 1,
        explanation: 'Клиент отказывается от мест у бара: "Nein danke, da kann man nicht gut sitzen".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Bücherei',
      type: 'диалог',
      text: 'Bücherei Grimm KBE, guten Tag. Guten Tag, Schütze hier. Ich habe letzte Woche ein Buch bestellt. Ist es da? Ja, es ist heute gekommen. Super! Könnten Sie das Buch auch als Geschenk verpacken? Bezahlt habe ich schon. Natürlich, das machen wir gerne. Vergessen Sie bei Abholung bitte nicht Ihren Kassenzettel.',
      sentenceTranslations: {
        'Bücherei Grimm KBE, guten Tag.': {
          literal: 'Библиотека Гримм КБЕ, добрый день.',
          literary: 'Библиотека Гримм, добрый день.'
        },
        'Guten Tag, Schütze hier.': {
          literal: 'Добрый день, Шютце здесь.',
          literary: 'Добрый день, это Шютце.'
        },
        'Ich habe letzte Woche ein Buch bestellt.': {
          literal: 'Я имею последнюю неделю одну книгу заказанной.',
          literary: 'Я заказал книгу на прошлой неделе.'
        },
        'Ist es da?': {
          literal: 'Есть оно тут?',
          literary: 'Она пришла?'
        },
        'Ja, es ist heute gekommen.': {
          literal: 'Да, оно есть сегодня пришедшим.',
          literary: 'Да, она пришла сегодня.'
        },
        'Super!': {
          literal: 'Супер!',
          literary: 'Отлично!'
        },
        'Könnten Sie das Buch auch als Geschenk verpacken?': {
          literal: 'Могли бы вы книгу также как подарок упаковать?',
          literary: 'Вы могли бы также упаковать книгу как подарок?'
        },
        'Bezahlt habe ich schon.': {
          literal: 'Оплаченным имею я уже.',
          literary: 'Я уже оплатил.'
        },
        'Natürlich, das machen wir gerne.': {
          literal: 'Конечно, это делаем мы охотно.',
          literary: 'Конечно, мы с удовольствием это сделаем.'
        },
        'Vergessen Sie bei Abholung bitte nicht Ihren Kassenzettel.': {
          literal: 'Забудьте вы при получении пожалуйста не ваш кассовый чек.',
          literary: 'Не забудьте, пожалуйста, ваш чек при получении.'
        },
      },
      vocabulary: [
        { de: 'die Bücherei', plural: 'die Büchereien', ru: 'библиотека', gender: 'feminin', collocation: 'in der Bücherei', example: 'Bücherei Grimm KBE, guten Tag.' },
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', collocation: 'ein Buch bestellen', example: 'Ich habe letzte Woche ein Buch bestellt.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'als Geschenk verpacken', example: 'Könnten Sie das Buch auch als Geschenk verpacken?' },
        { de: 'die Abholung', plural: 'die Abholungen', ru: 'получение, забор', gender: 'feminin', collocation: 'bei Abholung', example: 'Vergessen Sie bei Abholung bitte nicht Ihren Kassenzettel.' },
        { de: 'der Kassenzettel', plural: 'die Kassenzettel', ru: 'чек', gender: 'maskulin', collocation: 'Ihren Kassenzettel nicht vergessen', example: 'Vergessen Sie bei Abholung bitte nicht Ihren Kassenzettel.' },
        { de: 'bestellen', ru: 'заказывать', type: 'verb', forms: 'bestellt, bestellte, hat bestellt', example: 'Ich habe letzte Woche ein Buch bestellt.' },
        { de: 'verpacken', ru: 'упаковывать', type: 'verb', forms: 'verpackt, verpackte, hat verpackt', example: 'Könnten Sie das Buch auch als Geschenk verpacken?' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Vergessen Sie bei Abholung bitte nicht Ihren Kassenzettel.' },
      ],
      practiceSentences: [
        { de: 'Ich habe ein Paket bestellt.', ru: 'Я заказал посылку.', note: 'Perfekt: haben + Part.II' },
        { de: 'Das Buch ist angekommen.', ru: 'Книга пришла.', note: 'Perfekt: sein + Part.II' },
        { de: 'Könnten Sie mir helfen?', ru: 'Вы могли бы мне помочь?', note: 'Konjunktiv II вежливость' },
        { de: 'Vergessen Sie das nicht!', ru: 'Не забудьте это!', note: 'императив с nicht' },
        { de: 'Ich hole es morgen ab.', ru: 'Я заберу это завтра.', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Was möchte der Kunde?',
        ru: 'Что хочет клиент?',
        options: [
          { de: 'Ein neues Buch bestellen', ru: 'Заказать новую книгу' },
          { de: 'Das Buch als Geschenk verpacken lassen', ru: 'Упаковать книгу как подарок' },
          { de: 'Das Buch umtauschen', ru: 'Обменять книгу' },
        ],
        correct: 1,
        explanation: 'Клиент спрашивает: "Könnten Sie das Buch auch als Geschenk verpacken?"'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Reisebüro',
      type: 'диалог',
      text: 'Hier spricht K. vom Reisebüro Schnell weg. Was kann ich für Sie tun? Hallo, ich muss am Mittwoch dringend nach Hamburg reisen. Der Bus ist schon ausverkauft. Ich kann Ihnen einen Flug für 350 € anbieten. Das ist mir zu teuer. Gibt es noch Zugplätze? Einen Moment... Ja, gibt es, aber nur um 6 Uhr morgens. Das ist kein Problem.',
      sentenceTranslations: {
        'Hier spricht K. vom Reisebüro Schnell weg.': {
          literal: 'Здесь говорит К. от турагентства Быстро прочь.',
          literary: 'Это К. из турагентства "Быстро в путь".'
        },
        'Was kann ich für Sie tun?': {
          literal: 'Что могу я для вас сделать?',
          literary: 'Чем могу помочь?'
        },
        'Hallo, ich muss am Mittwoch dringend nach Hamburg reisen.': {
          literal: 'Привет, я должен в среду срочно в Гамбург путешествовать.',
          literary: 'Здравствуйте, мне нужно срочно поехать в Гамбург в среду.'
        },
        'Der Bus ist schon ausverkauft.': {
          literal: 'Автобус есть уже распроданным.',
          literary: 'Автобус уже распродан.'
        },
        'Ich kann Ihnen einen Flug für 350 € anbieten.': {
          literal: 'Я могу вам один полёт за 350 евро предложить.',
          literary: 'Могу предложить вам рейс за 350 евро.'
        },
        'Das ist mir zu teuer.': {
          literal: 'Это есть мне слишком дорого.',
          literary: 'Это слишком дорого для меня.'
        },
        'Gibt es noch Zugplätze?': {
          literal: 'Даёт оно ещё поездо-места?',
          literary: 'Есть ещё места в поезде?'
        },
        'Einen Moment...': {
          literal: 'Один момент...',
          literary: 'Минутку...'
        },
        'Ja, gibt es, aber nur um 6 Uhr morgens.': {
          literal: 'Да, даёт оно, но только в 6 часов утром.',
          literary: 'Да, есть, но только на 6 часов утра.'
        },
        'Das ist kein Problem.': {
          literal: 'Это есть никакая проблема.',
          literary: 'Это не проблема.'
        },
      },
      vocabulary: [
        { de: 'das Reisebüro', plural: 'die Reisebüros', ru: 'турагентство', gender: 'neutrum', collocation: 'vom Reisebüro', example: 'Hier spricht K. vom Reisebüro Schnell weg.' },
        { de: 'der Flug', plural: 'die Flüge', ru: 'рейс, полёт', gender: 'maskulin', collocation: 'einen Flug anbieten', example: 'Ich kann Ihnen einen Flug für 350 € anbieten.' },
        { de: 'der Zugplatz', plural: 'die Zugplätze', ru: 'место в поезде', gender: 'maskulin', collocation: 'Zugplätze haben', example: 'Gibt es noch Zugplätze?' },
        { de: 'reisen', ru: 'путешествовать', type: 'verb', forms: 'reist, reiste, ist gereist', example: 'Hallo, ich muss am Mittwoch dringend nach Hamburg reisen.' },
        { de: 'anbieten', ru: 'предлагать', type: 'verb', forms: 'bietet an, bot an, hat angeboten', example: 'Ich kann Ihnen einen Flug für 350 € anbieten.' },
        { de: 'dringend', ru: 'срочно', type: 'adv', example: 'Hallo, ich muss am Mittwoch dringend nach Hamburg reisen.' },
        { de: 'ausverkauft', ru: 'распроданный', type: 'adj', example: 'Der Bus ist schon ausverkauft.' },
      ],
      practiceSentences: [
        { de: 'Ich muss morgen arbeiten.', ru: 'Я должен завтра работать.', note: 'модальный + инфинитив' },
        { de: 'Der Zug ist ausgebucht.', ru: 'Поезд забронирован.', note: 'sein + Part.II состояние' },
        { de: 'Kann ich Ihnen helfen?', ru: 'Могу я вам помочь?', note: 'V1 вопрос, модальный' },
        { de: 'Das kostet zu viel.', ru: 'Это стоит слишком много.', note: 'V2' },
        { de: 'Gibt es noch Plätze?', ru: 'Есть ещё места?', note: 'es gibt вопрос' },
      ],
      question: {
        de: 'Wie will die Person nach Hamburg reisen?',
        ru: 'Как человек хочет поехать в Гамбург?',
        options: [
          { de: 'Mit dem Bus', ru: 'На автобусе' },
          { de: 'Mit dem Flugzeug', ru: 'На самолёте' },
          { de: 'Mit dem Zug', ru: 'На поезде' },
        ],
        correct: 2,
        explanation: 'Клиент отклоняет самолёт ("zu teuer") и соглашается на поезд: "Das ist kein Problem" на предложение поезда в 6 утра.'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Kleidung',
      type: 'диалог в магазине',
      text: 'Entschuldigung, haben Sie diesen Pullover und das Hemd auch noch in Größe L? Den Pullover nicht mehr, aber das Hemd schon. Danke, das nehme ich. Ich bringe es Ihnen zur Kasse. Hier haben wir auch die passende Jacke zum Hemd. Hmm, die Jacke ist schön, aber ich brauche keine.',
      sentenceTranslations: {
        'Entschuldigung, haben Sie diesen Pullover und das Hemd auch noch in Größe L?': {
          literal: 'Извинение, имеете вы этот свитер и рубашку также ещё в размере L?',
          literary: 'Извините, у вас есть этот свитер и рубашка в размере L?'
        },
        'Den Pullover nicht mehr, aber das Hemd schon.': {
          literal: 'Свитер не больше, но рубашку да.',
          literary: 'Свитера больше нет, но рубашка есть.'
        },
        'Danke, das nehme ich.': {
          literal: 'Спасибо, это беру я.',
          literary: 'Спасибо, я это возьму.'
        },
        'Ich bringe es Ihnen zur Kasse.': {
          literal: 'Я приношу это вам к кассе.',
          literary: 'Я отнесу это для вас к кассе.'
        },
        'Hier haben wir auch die passende Jacke zum Hemd.': {
          literal: 'Здесь имеем мы также подходящую куртку к рубашке.',
          literary: 'У нас также есть подходящий пиджак к рубашке.'
        },
        'Hmm, die Jacke ist schön, aber ich brauche keine.': {
          literal: 'Хмм, куртка есть красивая, но я нуждаюсь никакую.',
          literary: 'Хмм, пиджак красивый, но мне не нужен.'
        },
      },
      vocabulary: [
        { de: 'der Pullover', plural: 'die Pullover', ru: 'свитер', gender: 'maskulin', collocation: 'diesen Pullover', example: 'Entschuldigung, haben Sie diesen Pullover und das Hemd auch noch in Größe L?' },
        { de: 'das Hemd', plural: 'die Hemden', ru: 'рубашка', gender: 'neutrum', collocation: 'das Hemd in Größe L', example: 'Entschuldigung, haben Sie diesen Pullover und das Hemd auch noch in Größe L?' },
        { de: 'die Größe', plural: 'die Größen', ru: 'размер', gender: 'feminin', collocation: 'in Größe L', example: 'Entschuldigung, haben Sie diesen Pullover und das Hemd auch noch in Größe L?' },
        { de: 'die Kasse', plural: 'die Kassen', ru: 'касса', gender: 'feminin', collocation: 'zur Kasse bringen', example: 'Ich bringe es Ihnen zur Kasse.' },
        { de: 'die Jacke', plural: 'die Jacken', ru: 'пиджак, куртка', gender: 'feminin', collocation: 'die passende Jacke', example: 'Hier haben wir auch die passende Jacke zum Hemd.' },
        { de: 'passend', ru: 'подходящий', type: 'adj', example: 'Hier haben wir auch die passende Jacke zum Hemd.' },
      ],
      practiceSentences: [
        { de: 'Haben Sie das in Blau?', ru: 'У вас есть это в синем?', note: 'V1 вопрос' },
        { de: 'Ich nehme beide Hemden.', ru: 'Я возьму обе рубашки.', note: 'V2' },
        { de: 'Das passt mir gut.', ru: 'Это мне хорошо подходит.', note: 'V2' },
        { de: 'Ich bringe es Ihnen.', ru: 'Я принесу вам это.', note: 'V2, Dat + Akk' },
        { de: 'Die Hose brauche ich nicht.', ru: 'Брюки мне не нужны.', note: 'V2' },
      ],
      question: {
        de: 'Was kauft der Kunde?',
        ru: 'Что покупает клиент?',
        options: [
          { de: 'Den Pullover und das Hemd', ru: 'Свитер и рубашку' },
          { de: 'Nur das Hemd', ru: 'Только рубашку' },
          { de: 'Das Hemd und die Jacke', ru: 'Рубашку и пиджак' },
        ],
        correct: 1,
        explanation: 'Свитера нет в нужном размере, клиент берёт рубашку ("Das nehme ich"), но отказывается от пиджака ("ich brauche keine").'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Bewerbung',
      type: 'телефонное сообщение',
      text: 'Guten Tag, Meer von der Firma AIW. Sie haben sich bei uns beworben und wir möchten Sie am Dienstag um 13 Uhr in einem Gespräch besser kennenlernen. Das passt mir. Kommen Sie bitte zu unserem Büro in der Münsterstraße 3. Direkt vor der Tür hält der Bus Nummer 15. Warten Sie dann bitte am Empfang, dort holen wir Sie dann ab.',
      sentenceTranslations: {
        'Guten Tag, Meer von der Firma AIW.': {
          literal: 'Добрый день, Меер от фирмы AIW.',
          literary: 'Добрый день, Меер из фирмы AIW.'
        },
        'Sie haben sich bei uns beworben und wir möchten Sie am Dienstag um 13 Uhr in einem Gespräch besser kennenlernen.': {
          literal: 'Вы имеете себя у нас заявленным и мы хотели бы вас во вторник в 13 часов в одном разговоре лучше узнать.',
          literary: 'Вы подали к нам заявку, и мы хотели бы лучше познакомиться с вами во вторник в 13:00 на собеседовании.'
        },
        'Das passt mir.': {
          literal: 'Это подходит мне.',
          literary: 'Мне подходит.'
        },
        'Kommen Sie bitte zu unserem Büro in der Münsterstraße 3.': {
          literal: 'Приходите вы пожалуйста к нашему офису на Мюнстерштрассе 3.',
          literary: 'Приходите, пожалуйста, в наш офис на Мюнстерштрассе 3.'
        },
        'Direkt vor der Tür hält der Bus Nummer 15.': {
          literal: 'Прямо перед дверью останавливается автобус номер 15.',
          literary: 'Прямо у двери останавливается автобус номер 15.'
        },
        'Warten Sie dann bitte am Empfang, dort holen wir Sie dann ab.': {
          literal: 'Ждите вы тогда пожалуйста у приёмной, там забираем мы вас тогда.',
          literary: 'Подождите, пожалуйста, на ресепшене, мы вас там встретим.'
        },
      },
      vocabulary: [
        { de: 'die Firma', plural: 'die Firmen', ru: 'фирма', gender: 'feminin', collocation: 'von der Firma', example: 'Guten Tag, Meer von der Firma AIW.' },
        { de: 'das Gespräch', plural: 'die Gespräche', ru: 'разговор, собеседование', gender: 'neutrum', collocation: 'in einem Gespräch kennenlernen', example: 'Sie haben sich bei uns beworben und wir möchten Sie am Dienstag um 13 Uhr in einem Gespräch besser kennenlernen.' },
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'zu unserem Büro kommen', example: 'Kommen Sie bitte zu unserem Büro in der Münsterstraße 3.' },
        { de: 'der Empfang', plural: 'die Empfänge', ru: 'приёмная, ресепшен', gender: 'maskulin', collocation: 'am Empfang warten', example: 'Warten Sie dann bitte am Empfang, dort holen wir Sie dann ab.' },
        { de: 'sich bewerben', ru: 'подавать заявку', type: 'verb', forms: 'bewirbt sich, bewarb sich, hat sich beworben', example: 'Sie haben sich bei uns beworben und wir möchten Sie am Dienstag um 13 Uhr in einem Gespräch besser kennenlernen.' },
        { de: 'kennenlernen', ru: 'знакомиться', type: 'verb', forms: 'lernt kennen, lernte kennen, hat kennengelernt', example: 'Sie haben sich bei uns beworben und wir möchten Sie am Dienstag um 13 Uhr in einem Gespräch besser kennenlernen.' },
        { de: 'abholen', ru: 'забирать, встречать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Warten Sie dann bitte am Empfang, dort holen wir Sie dann ab.' },
      ],
      practiceSentences: [
        { de: 'Ich habe mich beworben.', ru: 'Я подал заявку.', note: 'Perfekt возвратный' },
        { de: 'Der Termin passt mir gut.', ru: 'Время мне хорошо подходит.', note: 'V2' },
        { de: 'Wir möchten Sie einladen.', ru: 'Мы хотели бы вас пригласить.', note: 'модальный + инфинитив' },
        { de: 'Der Bus hält hier.', ru: 'Автобус останавливается здесь.', note: 'V2' },
        { de: 'Sie wartet am Eingang.', ru: 'Она ждёт у входа.', note: 'V2' },
      ],
      question: {
        de: 'Wo findet das Gespräch statt?',
        ru: 'Где проходит собеседование?',
        options: [
          { de: 'Am Telefon', ru: 'По телефону' },
          { de: 'Im Büro in der Münsterstraße 3', ru: 'В офисе на Мюнстерштрассе 3' },
          { de: 'An der Bushaltestelle', ru: 'На автобусной остановке' },
        ],
        correct: 1,
        explanation: 'Фирма приглашает: "Kommen Sie bitte zu unserem Büro in der Münsterstraße 3".'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Koko',
      type: 'интервью',
      text: 'Glückwunsch Koko! Sie haben den Fotowettbewerb der Stadt Köln gewonnen. Ihre Bilder kann man ab heute im Rathaus sehen. Wann haben Sie mit dem Fotografieren angefangen? Mit 16 habe ich mir eine alte Kamera auf dem Flohmarkt gekauft. Damit fing alles an. Es hat mir so viel Spaß gemacht, dass ich mir dann mit 19 eine modernere Kamera gekauft habe. Das Fotografieren ist nur ein Hobby. Es war mir wichtig, eine richtige Ausbildung zu machen. Ich arbeite an der Rezeption in einem großen Hotel. Das war nicht leicht. Ich habe mit meinen Freunden nur noch selten etwas unternommen. Ich hatte kaum Freizeit. Aber meine Eltern waren für mich da. Sie waren einkaufen und haben sogar den Haushalt gemacht. Ohne sie hätte ich das nicht geschafft. Erstmal mache ich eine kleine Pause. Freunde treffen, etwas Zeit für mich haben und so. Das brauche ich jetzt, um neue Ideen zu bekommen. Danach fotografiere ich aber bestimmt wieder. Auf meinem Blog. Und vielleicht darf ich bald wieder etwas ausstellen oder bringe sogar mein eigenes Fotobuch heraus. Das wünsche ich Ihnen. Herzlichen Dank für das Gespräch!',
      sentenceTranslations: {
        'Glückwunsch Koko!': {
          literal: 'Поздравление Коко!',
          literary: 'Поздравляем, Коко!'
        },
        'Sie haben den Fotowettbewerb der Stadt Köln gewonnen.': {
          literal: 'Вы имеете фотоконкурс города Кёльна выигранным.',
          literary: 'Вы выиграли фотоконкурс города Кёльна.'
        },
        'Ihre Bilder kann man ab heute im Rathaus sehen.': {
          literal: 'Ваши картины может человек с сегодня в ратуше видеть.',
          literary: 'Ваши фотографии можно увидеть в ратуше с сегодняшнего дня.'
        },
        'Wann haben Sie mit dem Fotografieren angefangen?': {
          literal: 'Когда имеете вы с фотографированием начатым?',
          literary: 'Когда вы начали фотографировать?'
        },
        'Mit 16 habe ich mir eine alte Kamera auf dem Flohmarkt gekauft.': {
          literal: 'С 16 имею я мне одну старую камеру на блошином рынке купленной.',
          literary: 'В 16 лет я купил себе старую камеру на блошином рынке.'
        },
        'Damit fing alles an.': {
          literal: 'С этим начиналось всё.',
          literary: 'С этого всё началось.'
        },
        'Es hat mir so viel Spaß gemacht, dass ich mir dann mit 19 eine modernere Kamera gekauft habe.': {
          literal: 'Оно имеет мне так много удовольствия сделанным, что я мне тогда с 19 более современную камеру купил имею.',
          literary: 'Мне так понравилось, что в 19 лет я купил себе более современную камеру.'
        },
        'Das Fotografieren ist nur ein Hobby.': {
          literal: 'Фотографирование есть только хобби.',
          literary: 'Фотография — это только хобби.'
        },
        'Es war mir wichtig, eine richtige Ausbildung zu machen.': {
          literal: 'Оно было мне важно, настоящее образование делать.',
          literary: 'Для меня было важно получить настоящее образование.'
        },
        'Ich arbeite an der Rezeption in einem großen Hotel.': {
          literal: 'Я работаю на ресепшене в одном большом отеле.',
          literary: 'Я работаю на ресепшене в большом отеле.'
        },
        'Das war nicht leicht.': {
          literal: 'Это было не легко.',
          literary: 'Это было непросто.'
        },
        'Ich habe mit meinen Freunden nur noch selten etwas unternommen.': {
          literal: 'Я имею с моими друзьями только ещё редко что-то предпринятым.',
          literary: 'Я стал редко что-то делать с друзьями.'
        },
        'Ich hatte kaum Freizeit.': {
          literal: 'Я имел едва свободное время.',
          literary: 'У меня почти не было свободного времени.'
        },
        'Aber meine Eltern waren für mich da.': {
          literal: 'Но мои родители были для меня тут.',
          literary: 'Но мои родители были рядом.'
        },
        'Sie waren einkaufen und haben sogar den Haushalt gemacht.': {
          literal: 'Они были покупать и имеют даже домашнее хозяйство сделанным.',
          literary: 'Они ходили за покупками и даже вели домашнее хозяйство.'
        },
        'Ohne sie hätte ich das nicht geschafft.': {
          literal: 'Без них имел бы я это не справленным.',
          literary: 'Без них я бы не справился.'
        },
        'Erstmal mache ich eine kleine Pause.': {
          literal: 'Сначала делаю я маленький перерыв.',
          literary: 'Сначала я сделаю небольшой перерыв.'
        },
        'Freunde treffen, etwas Zeit für mich haben und so.': {
          literal: 'Друзей встречать, немного времени для меня иметь и так.',
          literary: 'Встретиться с друзьями, побыть немного наедине с собой и так далее.'
        },
        'Das brauche ich jetzt, um neue Ideen zu bekommen.': {
          literal: 'Это нуждаюсь я сейчас, чтобы новые идеи получить.',
          literary: 'Это мне сейчас нужно, чтобы получить новые идеи.'
        },
        'Danach fotografiere ich aber bestimmt wieder.': {
          literal: 'После-этого фотографирую я но определённо снова.',
          literary: 'Но потом я точно снова буду фотографировать.'
        },
        'Auf meinem Blog.': {
          literal: 'На моём блоге.',
          literary: 'На моём блоге.'
        },
        'Und vielleicht darf ich bald wieder etwas ausstellen oder bringe sogar mein eigenes Fotobuch heraus.': {
          literal: 'И может-быть смею я скоро снова что-то выставлять или приношу даже мою собственную фотокнигу наружу.',
          literary: 'И, может быть, я скоро снова что-то выставлю или даже выпущу собственную фотокнигу.'
        },
        'Das wünsche ich Ihnen.': {
          literal: 'Это желаю я вам.',
          literary: 'Желаю вам этого.'
        },
        'Herzlichen Dank für das Gespräch!': {
          literal: 'Сердечную благодарность за разговор!',
          literary: 'Большое спасибо за беседу!'
        },
      },
      vocabulary: [
        { de: 'der Fotowettbewerb', plural: 'die Fotowettbewerbe', ru: 'фотоконкурс', gender: 'maskulin', collocation: 'den Fotowettbewerb gewinnen', example: 'Sie haben den Fotowettbewerb der Stadt Köln gewonnen.' },
        { de: 'das Rathaus', plural: 'die Rathäuser', ru: 'ратуша', gender: 'neutrum', collocation: 'im Rathaus sehen', example: 'Ihre Bilder kann man ab heute im Rathaus sehen.' },
        { de: 'die Kamera', plural: 'die Kameras', ru: 'камера', gender: 'feminin', collocation: 'eine alte Kamera kaufen', example: 'Mit 16 habe ich mir eine alte Kamera auf dem Flohmarkt gekauft.' },
        { de: 'der Flohmarkt', plural: 'die Flohmärkte', ru: 'блошиный рынок', gender: 'maskulin', collocation: 'auf dem Flohmarkt', example: 'Mit 16 habe ich mir eine alte Kamera auf dem Flohmarkt gekauft.' },
        { de: 'die Ausbildung', plural: 'die Ausbildungen', ru: 'профобразование', gender: 'feminin', collocation: 'eine richtige Ausbildung machen', example: 'Es war mir wichtig, eine richtige Ausbildung zu machen.' },
        { de: 'die Rezeption', plural: 'die Rezeptionen', ru: 'ресепшен', gender: 'feminin', collocation: 'an der Rezeption arbeiten', example: 'Ich arbeite an der Rezeption in einem großen Hotel.' },
        { de: 'die Freizeit', ru: 'свободное время', gender: 'feminin', collocation: 'kaum Freizeit', example: 'Ich hatte kaum Freizeit.' },
        { de: 'der Haushalt', plural: 'die Haushalte', ru: 'домашнее хозяйство', gender: 'maskulin', collocation: 'den Haushalt machen', example: 'Sie waren einkaufen und haben sogar den Haushalt gemacht.' },
        { de: 'die Pause', plural: 'die Pausen', ru: 'перерыв', gender: 'feminin', collocation: 'eine kleine Pause machen', example: 'Erstmal mache ich eine kleine Pause.' },
        { de: 'das Fotobuch', plural: 'die Fotobücher', ru: 'фотокнига', gender: 'neutrum', collocation: 'eigenes Fotobuch herausbringen', example: 'Und vielleicht darf ich bald wieder etwas ausstellen oder bringe sogar mein eigenes Fotobuch heraus.' },
        { de: 'anfangen', ru: 'начинать', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Wann haben Sie mit dem Fotografieren angefangen?' },
        { de: 'schaffen', ru: 'справляться', type: 'verb', forms: 'schafft, schaffte, hat geschafft', example: 'Ohne sie hätte ich das nicht geschafft.' },
        { de: 'unternehmen', ru: 'предпринимать', type: 'verb', forms: 'unternimmt, unternahm, hat unternommen', example: 'Ich habe mit meinen Freunden nur noch selten etwas unternommen.' },
        { de: 'ausstellen', ru: 'выставлять', type: 'verb', forms: 'stellt aus, stellte aus, hat ausgestellt', example: 'Und vielleicht darf ich bald wieder etwas ausstellen oder bringe sogar mein eigenes Fotobuch heraus.' },
        { de: 'kaum', ru: 'едва, почти не', type: 'adv', example: 'Ich hatte kaum Freizeit.' },
        { de: 'selten', ru: 'редко', type: 'adv', example: 'Ich habe mit meinen Freunden nur noch selten etwas unternommen.' },
      ],
      practiceSentences: [
        { de: 'Ich habe mit 18 angefangen.', ru: 'Я начал в 18 лет.', note: 'Perfekt, отделяемая' },
        { de: 'Das macht mir Spaß.', ru: 'Это доставляет мне удовольствие.', note: 'V2' },
        { de: 'Er hat sich ein Auto gekauft.', ru: 'Он купил себе машину.', note: 'Perfekt + Dativ возвр.' },
        { de: 'Ohne Hilfe schaffe ich das nicht.', ru: 'Без помощи я не справлюсь.', note: 'V2' },
        { de: 'Ich brauche Zeit, um zu lernen.', ru: 'Мне нужно время, чтобы учиться.', note: 'V2, um...zu' },
      ],
      question: {
        de: 'Was sind Kokos Pläne nach der Pause?',
        ru: 'Какие планы у Коко после перерыва?',
        options: [
          { de: 'Er will nie wieder fotografieren.', ru: 'Он больше никогда не хочет фотографировать.' },
          { de: 'Er will wieder fotografieren und vielleicht ein Fotobuch herausbringen.', ru: 'Он хочет снова фотографировать и, возможно, выпустить фотокнигу.' },
          { de: 'Er will im Hotel arbeiten.', ru: 'Он хочет работать в отеле.' },
        ],
        correct: 1,
        explanation: 'Коко говорит: "Danach fotografiere ich aber bestimmt wieder" и "vielleicht darf ich bald wieder etwas ausstellen oder bringe sogar mein eigenes Fotobuch heraus".'
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

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'Отделяемые приставки: ausfallen (fällt...aus), stattfinden (findet...statt), anrufen (rufe...an), aufhören (hört...auf)',
    'Passiv с werden: Das Fest wird verschoben, Der Bus ist ausverkauft (Zustandspassiv)',
    'wegen + Genitiv: wegen zu starkem Wind — причина',
    'Модальные глаголы: müssen, können, möchte, wollen, dürfen + инфинитив в конце',
    'Perfekt с haben/sein: hat abgeschlossen, hat gekündigt, ist gekommen',
    'Konjunktiv II: Könnten Sie...? (вежливая просьба), hätte...geschafft (условное)',
    'dass-Nebensatz: глагол в конце — dass er es ins Fernsehen geschafft hat',
    'um...zu + Infinitiv: um neue Ideen zu bekommen — целевая конструкция',
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
      instruction: 'Попредложный перевод всех мини-текстов (дословный + литературный). Используется для табe "Перевод".',
      promptText: null,
    },
    grammar: {
      instruction: 'Скопируй этот промт и вставь в Claude для пошагового перевода с грамматикой.',
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Sportfest).',
    },
  },
};

LESSONS.push(LESSON_03);
