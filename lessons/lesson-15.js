/* ═══════════════════════════════════════════════════════════
   Lesson 15 — Goethe Zertifikat A2 Hören Modelltest 2025
   Источник: YouTube Vid-15
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_15 = {
  id: 'lesson-15',
  number: 15,
  title: 'Goethe A2 Hören — Modelltest 2025',
  subtitle: 'Wetter, Abschlussfest, Bürotreffen, Konzertabsage, Rückenschmerzen, Sonntagsaktivitäten und Wohnungssuche',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-15',
  videoUrl: 'https://www.youtube.com/watch?v=6H1AwyEg26E',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Wetter',
      type: 'прогноз погоды',
      text: 'Und hier das Wetter. Langsam fängt der Sommer an. Heute am Mittwoch ist es noch etwas kühl. Aber morgen können wir uns auf Temperaturen von über 25 Grad freuen. Und so bleibt es auch bis Ende der Woche sonnig und warm. Am Wochenende gehen die Temperaturen wieder zurück bei weniger Sonne aber es bleibt trocken.',
      sentenceTranslations: {
        'Und hier das Wetter.': { literal: 'И здесь погода.', literary: 'А теперь прогноз погоды.' },
        'Langsam fängt der Sommer an.': { literal: 'Медленно начинается лето.', literary: 'Постепенно начинается лето.' },
        'Heute am Mittwoch ist es noch etwas kühl.': { literal: 'Сегодня в среду есть оно ещё немного прохладно.', literary: 'Сегодня, в среду, ещё довольно прохладно.' },
        'Aber morgen können wir uns auf Temperaturen von über 25 Grad freuen.': { literal: 'Но завтра можем мы себя на температуры от свыше 25 градусов радовать.', literary: 'Но завтра мы можем ожидать температуру выше 25 градусов.' },
        'Und so bleibt es auch bis Ende der Woche sonnig und warm.': { literal: 'И так остаётся оно также до конца недели солнечно и тепло.', literary: 'И до конца недели останется солнечно и тепло.' },
        'Am Wochenende gehen die Temperaturen wieder zurück bei weniger Sonne aber es bleibt trocken.': { literal: 'В выходные идут температуры снова назад при меньше солнца но оно остаётся сухо.', literary: 'В выходные температура снова понизится, солнца будет меньше, но осадков не будет.' },
      },
      vocabulary: [
        { de: 'das Wetter', plural: 'die Wetter', ru: 'погода', gender: 'neutrum', collocation: 'das Wetter ist kühl', example: 'Und hier das Wetter.' },
        { de: 'der Sommer', plural: 'die Sommer', ru: 'лето', gender: 'maskulin', collocation: 'der Sommer fängt an', example: 'Langsam fängt der Sommer an.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', collocation: 'Temperaturen von über 25 Grad', example: 'Aber morgen können wir uns auf Temperaturen von über 25 Grad freuen.' },
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'am Wochenende', example: 'Am Wochenende gehen die Temperaturen wieder zurück bei weniger Sonne aber es bleibt trocken.' },
        { de: 'die Sonne', plural: 'die Sonnen', ru: 'солнце', gender: 'feminin', collocation: 'bei weniger Sonne', example: 'Am Wochenende gehen die Temperaturen wieder zurück bei weniger Sonne aber es bleibt trocken.' },
        { de: 'anfangen', ru: 'начинаться', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Langsam fängt der Sommer an.' },
        { de: 'sich freuen auf', ru: 'радоваться чему-то', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Aber morgen können wir uns auf Temperaturen von über 25 Grad freuen.' },
        { de: 'zurückgehen', ru: 'снижаться', type: 'verb', forms: 'geht zurück, ging zurück, ist zurückgegangen', example: 'Am Wochenende gehen die Temperaturen wieder zurück bei weniger Sonne aber es bleibt trocken.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Heute am Mittwoch ist es noch etwas kühl.' },
        { de: 'sonnig', ru: 'солнечный', type: 'adj', example: 'Und so bleibt es auch bis Ende der Woche sonnig und warm.' },
        { de: 'trocken', ru: 'сухой', type: 'adj', example: 'Am Wochenende gehen die Temperaturen wieder zurück bei weniger Sonne aber es bleibt trocken.' },
      ],
      practiceSentences: [
        { de: 'Der Tag fängt gut an.', ru: 'День начинается хорошо.', note: 'отделяемая приставка an' },
        { de: 'Es wird heute kalt.', ru: 'Сегодня будет холодно.', note: 'безличное es + V2' },
        { de: 'Ich freue mich auf den Sommer.', ru: 'Я радуюсь лету.', note: 'возвратный глагол + auf + Akk.' },
        { de: 'Die Preise gehen zurück.', ru: 'Цены снижаются.', note: 'отделяемая приставка zurück' },
        { de: 'Es bleibt morgen sonnig.', ru: 'Завтра останется солнечно.', note: 'безличное es + V2' },
      ],
      question: {
        de: 'Wie wird das Wetter am Wochenende?',
        ru: 'Какая будет погода в выходные?',
        options: [
          { de: 'Sonnig und über 25 Grad', ru: 'Солнечно и выше 25 градусов' },
          { de: 'Kühl und regnerisch', ru: 'Прохладно и дождливо' },
          { de: 'Weniger warm, aber trocken', ru: 'Менее тепло, но сухо' },
        ],
        correct: 2,
        explanation: 'В тексте сказано: "Am Wochenende gehen die Temperaturen wieder zurück bei weniger Sonne aber es bleibt trocken" — температура понизится, солнца будет меньше, но останется сухо.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Tom',
      type: 'сообщение на автоответчике',
      text: 'Hallo Susanne hier ist Tom. Am Montag machen wir doch unser Abschlussfest im Deutschkurs. Getränke und Essen haben wir schon geholt. Aber denkst du bitte an die Blumen für Frau Berger. Du hast doch gesagt dass du sie kaufen willst. Dann haben wir ein schönes Geschenk. Musik bringt Laura mit.',
      sentenceTranslations: {
        'Hallo Susanne hier ist Tom.': { literal: 'Привет Сюзанна здесь есть Том.', literary: 'Привет, Сюзанна, это Том.' },
        'Am Montag machen wir doch unser Abschlussfest im Deutschkurs.': { literal: 'В понедельник делаем мы ведь наш выпускной праздник в немецком курсе.', literary: 'В понедельник у нас же выпускной вечер на курсах немецкого.' },
        'Getränke und Essen haben wir schon geholt.': { literal: 'Напитки и еду имеем мы уже принесли.', literary: 'Напитки и еду мы уже купили.' },
        'Aber denkst du bitte an die Blumen für Frau Berger.': { literal: 'Но думаешь ты пожалуйста о цветах для госпожи Бергер.', literary: 'Но не забудь, пожалуйста, про цветы для фрау Бергер.' },
        'Du hast doch gesagt dass du sie kaufen willst.': { literal: 'Ты имеешь ведь сказано что ты их купить хочешь.', literary: 'Ты же говорила, что купишь их.' },
        'Dann haben wir ein schönes Geschenk.': { literal: 'Тогда имеем мы красивый подарок.', literary: 'Тогда у нас будет хороший подарок.' },
        'Musik bringt Laura mit.': { literal: 'Музыку приносит Лаура с.', literary: 'Музыку принесёт Лаура.' },
      },
      vocabulary: [
        { de: 'das Abschlussfest', plural: 'die Abschlussfeste', ru: 'выпускной вечер', gender: 'neutrum', collocation: 'unser Abschlussfest machen', example: 'Am Montag machen wir doch unser Abschlussfest im Deutschkurs.' },
        { de: 'der Deutschkurs', plural: 'die Deutschkurse', ru: 'курс немецкого', gender: 'maskulin', collocation: 'im Deutschkurs', example: 'Am Montag machen wir doch unser Abschlussfest im Deutschkurs.' },
        { de: 'das Getränk', plural: 'die Getränke', ru: 'напиток', gender: 'neutrum', collocation: 'Getränke holen', example: 'Getränke und Essen haben wir schon geholt.' },
        { de: 'die Blume', plural: 'die Blumen', ru: 'цветок', gender: 'feminin', collocation: 'Blumen kaufen', example: 'Aber denkst du bitte an die Blumen für Frau Berger.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'ein schönes Geschenk', example: 'Dann haben wir ein schönes Geschenk.' },
        { de: 'holen', ru: 'покупать, приносить', type: 'verb', forms: 'holt, holte, hat geholt', example: 'Getränke und Essen haben wir schon geholt.' },
        { de: 'denken an', ru: 'думать о, помнить', type: 'verb', forms: 'denkt, dachte, hat gedacht', example: 'Aber denkst du bitte an die Blumen für Frau Berger.' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Musik bringt Laura mit.' },
      ],
      practiceSentences: [
        { de: 'Wir machen heute eine Party.', ru: 'Мы устраиваем сегодня вечеринку.', note: 'V2' },
        { de: 'Ich habe Kuchen gekauft.', ru: 'Я купил торт.', note: 'Perfekt: haben + gekauft' },
        { de: 'Denkst du an den Termin?', ru: 'Ты помнишь о встрече?', note: 'denken an + Akk., V2' },
        { de: 'Sie sagt, dass sie kommt.', ru: 'Она говорит, что придёт.', note: 'dass -> глагол в конце' },
        { de: 'Er bringt Getränke mit.', ru: 'Он приносит напитки.', note: 'отделяемая приставка mit' },
      ],
      question: {
        de: 'Was soll Susanne für das Abschlussfest mitbringen?',
        ru: 'Что должна принести Сюзанна для выпускного вечера?',
        options: [
          { de: 'Getränke und Essen', ru: 'Напитки и еду' },
          { de: 'Blumen für Frau Berger', ru: 'Цветы для фрау Бергер' },
          { de: 'Musik für die Party', ru: 'Музыку для вечеринки' },
        ],
        correct: 1,
        explanation: 'Том говорит: "aber denkst du bitte an die Blumen für Frau Berger, du hast doch gesagt dass du sie kaufen willst" — Сюзанна обещала купить цветы.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Gundula Groß',
      type: 'сообщение на автоответчике',
      text: 'Guten Tag Frau Berger hier Gundula Groß von der Firma IT-Consult. Wir wollten uns doch am Mittwoch um 12 Uhr bei mir im Büro treffen. Ich habe aber vorher einen Kundenbesuch. Und würde mich gerne mit Ihnen im Café zum Markt treffen. Bitte rufen Sie mich doch an und sagen Sie mir ob das in Ordnung ist. Meine Mobilnummer haben Sie ja.',
      sentenceTranslations: {
        'Guten Tag Frau Berger hier Gundula Groß von der Firma IT-Consult.': { literal: 'Добрый день госпожа Бергер здесь Гундула Гросс от фирмы IT-Consult.', literary: 'Добрый день, фрау Бергер, это Гундула Гросс из компании IT-Consult.' },
        'Wir wollten uns doch am Mittwoch um 12 Uhr bei mir im Büro treffen.': { literal: 'Мы хотели себя ведь в среду в 12 часов у меня в офисе встретить.', literary: 'Мы же хотели встретиться в среду в 12 часов у меня в офисе.' },
        'Ich habe aber vorher einen Kundenbesuch.': { literal: 'Я имею но прежде визит клиента.', literary: 'Но у меня перед этим встреча с клиентом.' },
        'Und würde mich gerne mit Ihnen im Café zum Markt treffen.': { literal: 'И хотела бы себя охотно с Вами в кафе к рынку встретить.', literary: 'И я бы хотела встретиться с Вами в кафе у рынка.' },
        'Bitte rufen Sie mich doch an und sagen Sie mir ob das in Ordnung ist.': { literal: 'Пожалуйста звоните Вы мне же и скажите Вы мне ли это в порядке есть.', literary: 'Пожалуйста, позвоните мне и скажите, подходит ли вам это.' },
        'Meine Mobilnummer haben Sie ja.': { literal: 'Мой мобильный номер имеете Вы же.', literary: 'Мой мобильный номер у вас есть.' },
      },
      vocabulary: [
        { de: 'die Firma', plural: 'die Firmen', ru: 'фирма, компания', gender: 'feminin', collocation: 'von der Firma', example: 'Guten Tag Frau Berger hier Gundula Groß von der Firma IT-Consult.' },
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'im Büro treffen', example: 'Wir wollten uns doch am Mittwoch um 12 Uhr bei mir im Büro treffen.' },
        { de: 'der Kundenbesuch', plural: 'die Kundenbesuche', ru: 'встреча с клиентом', gender: 'maskulin', collocation: 'einen Kundenbesuch haben', example: 'Ich habe aber vorher einen Kundenbesuch.' },
        { de: 'das Café', plural: 'die Cafés', ru: 'кафе', gender: 'neutrum', collocation: 'im Café treffen', example: 'Und würde mich gerne mit Ihnen im Café zum Markt treffen.' },
        { de: 'die Mobilnummer', plural: 'die Mobilnummern', ru: 'мобильный номер', gender: 'feminin', collocation: 'meine Mobilnummer', example: 'Meine Mobilnummer haben Sie ja.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Wir wollten uns doch am Mittwoch um 12 Uhr bei mir im Büro treffen.' },
        { de: 'anrufen', ru: 'позвонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Bitte rufen Sie mich doch an und sagen Sie mir ob das in Ordnung ist.' },
      ],
      practiceSentences: [
        { de: 'Wir treffen uns morgen.', ru: 'Мы встречаемся завтра.', note: 'возвратный глагол, V2' },
        { de: 'Ich wollte dich anrufen.', ru: 'Я хотел тебе позвонить.', note: 'Präteritum модального + Infinitiv' },
        { de: 'Würden Sie bitte warten?', ru: 'Не могли бы вы подождать?', note: 'Konjunktiv II вежливость' },
        { de: 'Rufen Sie mich an!', ru: 'Позвоните мне!', note: 'императив, отделяемая приставка' },
        { de: 'Er fragt, ob sie kommt.', ru: 'Он спрашивает, придёт ли она.', note: 'ob -> глагол в конце' },
      ],
      question: {
        de: 'Wo möchte sich Frau Groß mit Frau Berger treffen?',
        ru: 'Где фрау Гросс хочет встретиться с фрау Бергер?',
        options: [
          { de: 'In ihrem Büro', ru: 'В своём офисе' },
          { de: 'Beim Kundenbesuch', ru: 'На встрече с клиентом' },
          { de: 'Im Café zum Markt', ru: 'В кафе у рынка' },
        ],
        correct: 2,
        explanation: 'Она говорит: "würde mich gerne mit Ihnen im Café zum Markt treffen" — предлагает встретиться в кафе у рынка вместо офиса.'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Konzert',
      type: 'радио-объявление',
      text: 'Liebe Hörerinnen und Hörer. Das Konzert der Hip Rockers heute Abend in der Stadtfabrik muss leider wegen Krankheit zweier Bandmitglieder ausfallen. Wir hoffen dass das Konzert im Januar oder Februar stattfinden kann. Wann der genaue Termin ist sagen wir Ihnen sobald wir das wissen. Sie können sich auch auf unserer Webseite informieren.',
      sentenceTranslations: {
        'Liebe Hörerinnen und Hörer.': { literal: 'Дорогие слушательницы и слушатели.', literary: 'Дорогие радиослушатели.' },
        'Das Konzert der Hip Rockers heute Abend in der Stadtfabrik muss leider wegen Krankheit zweier Bandmitglieder ausfallen.': { literal: 'Концерт Hip Rockers сегодня вечером в Stadtfabrik должен к сожалению из-за болезни двух участников группы отмениться.', literary: 'Концерт Hip Rockers сегодня вечером в Stadtfabrik, к сожалению, отменяется из-за болезни двух участников группы.' },
        'Wir hoffen dass das Konzert im Januar oder Februar stattfinden kann.': { literal: 'Мы надеемся что концерт в январе или феврале состояться может.', literary: 'Мы надеемся, что концерт состоится в январе или феврале.' },
        'Wann der genaue Termin ist sagen wir Ihnen sobald wir das wissen.': { literal: 'Когда точная дата есть скажем мы Вам как только мы это знаем.', literary: 'Точную дату мы сообщим вам, как только узнаем.' },
        'Sie können sich auch auf unserer Webseite informieren.': { literal: 'Вы можете себя также на нашем веб-сайте информировать.', literary: 'Вы также можете получить информацию на нашем сайте.' },
      },
      vocabulary: [
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'das Konzert ausfallen', example: 'Das Konzert der Hip Rockers heute Abend in der Stadtfabrik muss leider wegen Krankheit zweier Bandmitglieder ausfallen.' },
        { de: 'das Bandmitglied', plural: 'die Bandmitglieder', ru: 'участник группы', gender: 'neutrum', collocation: 'zweier Bandmitglieder', example: 'Das Konzert der Hip Rockers heute Abend in der Stadtfabrik muss leider wegen Krankheit zweier Bandmitglieder ausfallen.' },
        { de: 'die Krankheit', plural: 'die Krankheiten', ru: 'болезнь', gender: 'feminin', collocation: 'wegen Krankheit', example: 'Das Konzert der Hip Rockers heute Abend in der Stadtfabrik muss leider wegen Krankheit zweier Bandmitglieder ausfallen.' },
        { de: 'der Termin', plural: 'die Termine', ru: 'дата, срок', gender: 'maskulin', collocation: 'der genaue Termin', example: 'Wann der genaue Termin ist sagen wir Ihnen sobald wir das wissen.' },
        { de: 'die Webseite', plural: 'die Webseiten', ru: 'веб-сайт', gender: 'feminin', collocation: 'auf unserer Webseite', example: 'Sie können sich auch auf unserer Webseite informieren.' },
        { de: 'ausfallen', ru: 'отменяться', type: 'verb', forms: 'fällt aus, fiel aus, ist ausgefallen', example: 'Das Konzert der Hip Rockers heute Abend in der Stadtfabrik muss leider wegen Krankheit zweier Bandmitglieder ausfallen.' },
        { de: 'stattfinden', ru: 'состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Wir hoffen dass das Konzert im Januar oder Februar stattfinden kann.' },
        { de: 'sich informieren', ru: 'узнавать информацию', type: 'verb', forms: 'informiert sich, informierte sich, hat sich informiert', example: 'Sie können sich auch auf unserer Webseite informieren.' },
      ],
      practiceSentences: [
        { de: 'Das Fest muss ausfallen.', ru: 'Праздник должен отмениться.', note: 'модальный + отделяемый глагол' },
        { de: 'Der Kurs findet morgen statt.', ru: 'Курс состоится завтра.', note: 'отделяемая приставка statt-' },
        { de: 'Wir hoffen, dass er kommt.', ru: 'Мы надеемся, что он придёт.', note: 'dass -> глагол в конце' },
        { de: 'Ich informiere mich im Internet.', ru: 'Я узнаю информацию в интернете.', note: 'возвратный глагол' },
        { de: 'Sie sagt uns, wann sie kommt.', ru: 'Она скажет нам, когда придёт.', note: 'косвенный вопрос -> глагол в конце' },
      ],
      question: {
        de: 'Wann findet das Konzert der Hip Rockers statt?',
        ru: 'Когда состоится концерт Hip Rockers?',
        options: [
          { de: 'Heute Abend', ru: 'Сегодня вечером' },
          { de: 'Im Januar oder Februar', ru: 'В январе или феврале' },
          { de: 'Der Termin ist noch unbekannt', ru: 'Дата ещё неизвестна' },
        ],
        correct: 1,
        explanation: 'В объявлении говорится: "wir hoffen dass das Konzert im Januar oder Februar stattfinden kann" — концерт перенесён на январь или февраль.'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Jasmin',
      type: 'сообщение на автоответчике',
      text: 'Hallo Andrea hier ist Jasmin. Wir wollen doch später essen gehen. Du das schaffe ich nicht. Ich habe starke Rückenschmerzen und mir geht es nicht so gut. Komm doch zu mir. Wir könnten zusammen bei mir essen und uns aus der Pizzeria nebenan eine Pizza bringen lassen. Ins Restaurant können wir ja nächste Woche. Kommst du?',
      sentenceTranslations: {
        'Hallo Andrea hier ist Jasmin.': { literal: 'Привет Андреа здесь есть Ясмин.', literary: 'Привет, Андреа, это Ясмин.' },
        'Wir wollen doch später essen gehen.': { literal: 'Мы хотим же позже есть идти.', literary: 'Мы же хотели пойти поесть позже.' },
        'Du das schaffe ich nicht.': { literal: 'Ты это справляюсь я не.', literary: 'Слушай, я не смогу.' },
        'Ich habe starke Rückenschmerzen und mir geht es nicht so gut.': { literal: 'Я имею сильные боли спины и мне идёт оно не так хорошо.', literary: 'У меня сильные боли в спине и мне не очень хорошо.' },
        'Komm doch zu mir.': { literal: 'Приходи же ко мне.', literary: 'Приходи ко мне.' },
        'Wir könnten zusammen bei mir essen und uns aus der Pizzeria nebenan eine Pizza bringen lassen.': { literal: 'Мы могли бы вместе у меня есть и нам из пиццерии рядом пиццу принести дать.', literary: 'Мы могли бы поесть вместе у меня и заказать пиццу из соседней пиццерии.' },
        'Ins Restaurant können wir ja nächste Woche.': { literal: 'В ресторан можем мы же следующую неделю.', literary: 'В ресторан можем пойти на следующей неделе.' },
        'Kommst du?': { literal: 'Приходишь ты?', literary: 'Придёшь?' },
      },
      vocabulary: [
        { de: 'die Rückenschmerzen', ru: 'боли в спине', gender: 'feminin', collocation: 'starke Rückenschmerzen haben', example: 'Ich habe starke Rückenschmerzen und mir geht es nicht so gut.' },
        { de: 'die Pizzeria', plural: 'die Pizzerias', ru: 'пиццерия', gender: 'feminin', collocation: 'aus der Pizzeria', example: 'Wir könnten zusammen bei mir essen und uns aus der Pizzeria nebenan eine Pizza bringen lassen.' },
        { de: 'das Restaurant', plural: 'die Restaurants', ru: 'ресторан', gender: 'neutrum', collocation: 'ins Restaurant gehen', example: 'Ins Restaurant können wir ja nächste Woche.' },
        { de: 'schaffen', ru: 'справляться, успевать', type: 'verb', forms: 'schafft, schaffte, hat geschafft', example: 'Du das schaffe ich nicht.' },
        { de: 'bringen lassen', ru: 'заказать доставку', type: 'verb', forms: 'lässt bringen, ließ bringen, hat bringen lassen', example: 'Wir könnten zusammen bei mir essen und uns aus der Pizzeria nebenan eine Pizza bringen lassen.' },
        { de: 'nebenan', ru: 'по соседству', type: 'adv', example: 'Wir könnten zusammen bei mir essen und uns aus der Pizzeria nebenan eine Pizza bringen lassen.' },
      ],
      practiceSentences: [
        { de: 'Wir gehen heute essen.', ru: 'Мы идём сегодня поесть.', note: 'глагол движения + инфинитив' },
        { de: 'Ich schaffe das nicht.', ru: 'Я не справлюсь с этим.', note: 'V2' },
        { de: 'Mir geht es gut.', ru: 'У меня всё хорошо.', note: 'безличное es geht + Dativ' },
        { de: 'Könntest du mir helfen?', ru: 'Не мог бы ты мне помочь?', note: 'Konjunktiv II вежливость' },
        { de: 'Er lässt Pizza bringen.', ru: 'Он заказывает пиццу.', note: 'lassen + инфинитив' },
      ],
      question: {
        de: 'Was schlägt Jasmin vor?',
        ru: 'Что предлагает Ясмин?',
        options: [
          { de: 'Ins Restaurant zu gehen', ru: 'Пойти в ресторан' },
          { de: 'Bei ihr zu essen und Pizza zu bestellen', ru: 'Поесть у неё и заказать пиццу' },
          { de: 'Das Treffen auf nächste Woche zu verschieben', ru: 'Перенести встречу на следующую неделю' },
        ],
        correct: 1,
        explanation: 'Ясмин говорит: "komm doch zu mir, wir könnten zusammen bei mir essen und uns aus der Pizzeria nebenan eine Pizza bringen lassen".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Rosa und Robert',
      type: 'диалог',
      text: 'Hallo Rosa hattest du einen schönen Sonntag? Schön naja es ging. Ich musste den ganzen Tag für die Prüfung lernen. Leider konnte ich nicht mit Eva schwimmen gehen. Ich hatte einfach keine Zeit. Und ist Eva dann alleine schwimmen gegangen? Nein sie hatte keine Lust. Sie hat den ganzen Tag Tischtennis im Sportverein gespielt. Oliver der wollte zuerst eine Radtour machen. Aber dann hat er gemerkt dass sein Fahrrad immer noch kaputt ist. Das wollte er doch schon längst reparieren. Also ist er joggen gegangen. Am Abend hat mich Gerard noch angerufen. Er hat mich in den Club eingeladen. Er spielt ja so gut Gitarre. Er wollte dass ich vorbeikomme. Laura würde auch gern Gitarre spielen. Laura ist ins Kino gegangen. Ich wollte zuerst Fußball spielen. Aber dann hat mir mein Bein wehgetan. Und ich bin doch zu Hause geblieben und habe den ganzen Tag ferngesehen. Wie langweilig!',
      sentenceTranslations: {
        'Hallo Rosa hattest du einen schönen Sonntag?': { literal: 'Привет Роза имела ты красивое воскресенье?', literary: 'Привет, Роза, у тебя было хорошее воскресенье?' },
        'Schön naja es ging.': { literal: 'Красиво ну да оно шло.', literary: 'Хорошее... ну, так себе.' },
        'Ich musste den ganzen Tag für die Prüfung lernen.': { literal: 'Я должна была весь день для экзамена учить.', literary: 'Я должна была весь день готовиться к экзамену.' },
        'Leider konnte ich nicht mit Eva schwimmen gehen.': { literal: 'К сожалению могла я не с Евой плавать идти.', literary: 'К сожалению, я не смогла пойти плавать с Евой.' },
        'Ich hatte einfach keine Zeit.': { literal: 'Я имела просто никакое время.', literary: 'У меня просто не было времени.' },
        'Und ist Eva dann alleine schwimmen gegangen?': { literal: 'И есть Ева тогда одна плавать пошла?', literary: 'А Ева пошла плавать одна?' },
        'Nein sie hatte keine Lust.': { literal: 'Нет она имела никакое желание.', literary: 'Нет, ей не хотелось.' },
        'Sie hat den ganzen Tag Tischtennis im Sportverein gespielt.': { literal: 'Она имеет весь день настольный теннис в спортклубе играла.', literary: 'Она весь день играла в настольный теннис в спортклубе.' },
        'Oliver der wollte zuerst eine Radtour machen.': { literal: 'Оливер он хотел сначала велотур делать.', literary: 'Оливер сначала хотел покататься на велосипеде.' },
        'Aber dann hat er gemerkt dass sein Fahrrad immer noch kaputt ist.': { literal: 'Но затем имеет он заметил что его велосипед всё ещё сломан есть.', literary: 'Но потом он заметил, что его велосипед всё ещё сломан.' },
        'Das wollte er doch schon längst reparieren.': { literal: 'Это хотел он же уже давно починить.', literary: 'Он же давно хотел его починить.' },
        'Also ist er joggen gegangen.': { literal: 'Итак есть он бегать пошёл.', literary: 'Поэтому он пошёл на пробежку.' },
        'Am Abend hat mich Gerard noch angerufen.': { literal: 'Вечером имеет меня Жерар ещё позвонил.', literary: 'Вечером мне ещё позвонил Жерар.' },
        'Er hat mich in den Club eingeladen.': { literal: 'Он имеет меня в клуб пригласил.', literary: 'Он пригласил меня в клуб.' },
        'Er spielt ja so gut Gitarre.': { literal: 'Он играет же так хорошо гитару.', literary: 'Он же так хорошо играет на гитаре.' },
        'Er wollte dass ich vorbeikomme.': { literal: 'Он хотел что я прихожу.', literary: 'Он хотел, чтобы я пришла.' },
        'Laura würde auch gern Gitarre spielen.': { literal: 'Лаура хотела бы также охотно гитару играть.', literary: 'Лаура тоже хотела бы играть на гитаре.' },
        'Laura ist ins Kino gegangen.': { literal: 'Лаура есть в кино пошла.', literary: 'Лаура пошла в кино.' },
        'Ich wollte zuerst Fußball spielen.': { literal: 'Я хотел сначала футбол играть.', literary: 'Я сначала хотел играть в футбол.' },
        'Aber dann hat mir mein Bein wehgetan.': { literal: 'Но затем имеет мне моя нога больно сделала.', literary: 'Но потом у меня заболела нога.' },
        'Und ich bin doch zu Hause geblieben und habe den ganzen Tag ferngesehen.': { literal: 'И я есть же дома остался и имею весь день телевизор смотрел.', literary: 'И я всё-таки остался дома и весь день смотрел телевизор.' },
        'Wie langweilig!': { literal: 'Как скучно!', literary: 'Как скучно!' },
      },
      vocabulary: [
        { de: 'die Prüfung', plural: 'die Prüfungen', ru: 'экзамен', gender: 'feminin', collocation: 'für die Prüfung lernen', example: 'Ich musste den ganzen Tag für die Prüfung lernen.' },
        { de: 'der Sportverein', plural: 'die Sportvereine', ru: 'спортклуб', gender: 'maskulin', collocation: 'im Sportverein spielen', example: 'Sie hat den ganzen Tag Tischtennis im Sportverein gespielt.' },
        { de: 'die Radtour', plural: 'die Radtouren', ru: 'велопрогулка', gender: 'feminin', collocation: 'eine Radtour machen', example: 'Oliver der wollte zuerst eine Radtour machen.' },
        { de: 'das Fahrrad', plural: 'die Fahrräder', ru: 'велосипед', gender: 'neutrum', collocation: 'Fahrrad reparieren', example: 'Aber dann hat er gemerkt dass sein Fahrrad immer noch kaputt ist.' },
        { de: 'die Gitarre', plural: 'die Gitarren', ru: 'гитара', gender: 'feminin', collocation: 'Gitarre spielen', example: 'Er spielt ja so gut Gitarre.' },
        { de: 'das Kino', plural: 'die Kinos', ru: 'кинотеатр', gender: 'neutrum', collocation: 'ins Kino gehen', example: 'Laura ist ins Kino gegangen.' },
        { de: 'das Bein', plural: 'die Beine', ru: 'нога', gender: 'neutrum', collocation: 'das Bein tut weh', example: 'Aber dann hat mir mein Bein wehgetan.' },
        { de: 'reparieren', ru: 'ремонтировать', type: 'verb', forms: 'repariert, reparierte, hat repariert', example: 'Das wollte er doch schon längst reparieren.' },
        { de: 'einladen', ru: 'приглашать', type: 'verb', forms: 'lädt ein, lud ein, hat eingeladen', example: 'Er hat mich in den Club eingeladen.' },
        { de: 'vorbeikommen', ru: 'заходить', type: 'verb', forms: 'kommt vorbei, kam vorbei, ist vorbeigekommen', example: 'Er wollte dass ich vorbeikomme.' },
        { de: 'wehtun', ru: 'болеть, причинять боль', type: 'verb', forms: 'tut weh, tat weh, hat wehgetan', example: 'Aber dann hat mir mein Bein wehgetan.' },
        { de: 'fernsehen', ru: 'смотреть телевизор', type: 'verb', forms: 'sieht fern, sah fern, hat ferngesehen', example: 'Und ich bin doch zu Hause geblieben und habe den ganzen Tag ferngesehen.' },
        { de: 'kaputt', ru: 'сломанный', type: 'adj', example: 'Aber dann hat er gemerkt dass sein Fahrrad immer noch kaputt ist.' },
        { de: 'langweilig', ru: 'скучный', type: 'adj', example: 'Wie langweilig!' },
      ],
      practiceSentences: [
        { de: 'Ich musste gestern lernen.', ru: 'Я должен был вчера учиться.', note: 'Präteritum модального + инфинитив' },
        { de: 'Sie ist schwimmen gegangen.', ru: 'Она пошла плавать.', note: 'Perfekt с sein + инфинитив' },
        { de: 'Er hat keine Lust zu spielen.', ru: 'Ему не хочется играть.', note: 'устойчивое выражение' },
        { de: 'Das Bein tut mir weh.', ru: 'У меня болит нога.', note: 'wehtun + Dativ' },
        { de: 'Wir sind zu Hause geblieben.', ru: 'Мы остались дома.', note: 'Perfekt с sein' },
      ],
      question: {
        de: 'Was hat Rosa am Sonntag gemacht?',
        ru: 'Что делала Роза в воскресенье?',
        options: [
          { de: 'Sie ist schwimmen gegangen', ru: 'Она ходила плавать' },
          { de: 'Sie hat für die Prüfung gelernt', ru: 'Она готовилась к экзамену' },
          { de: 'Sie hat Tischtennis gespielt', ru: 'Она играла в настольный теннис' },
        ],
        correct: 1,
        explanation: 'Роза говорит: "Ich musste den ganzen Tag für die Prüfung lernen" — она весь день готовилась к экзамену.'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Herr Schneider',
      type: 'диалог',
      text: 'Herr Schneider wie kommen Sie zur Sprachschule? Ich wollte zuerst den Bus nehmen. Aber mein Kurs ist abends und geht bis 21 Uhr. Und da fährt der Bus nur selten. Ich würde ja gern mit dem Fahrrad fahren aber nicht nachts. Also nehme ich das Auto. Mit dem Rad fahre ich wieder wenn ich vormittags einen Kurs habe.',
      sentenceTranslations: {
        'Herr Schneider wie kommen Sie zur Sprachschule?': { literal: 'Господин Шнайдер как приходите Вы к языковой школе?', literary: 'Господин Шнайдер, как вы добираетесь до языковой школы?' },
        'Ich wollte zuerst den Bus nehmen.': { literal: 'Я хотел сначала автобус брать.', literary: 'Я сначала хотел ехать на автобусе.' },
        'Aber mein Kurs ist abends und geht bis 21 Uhr.': { literal: 'Но мой курс есть вечерами и идёт до 21 часа.', literary: 'Но мой курс вечером и идёт до 21 часа.' },
        'Und da fährt der Bus nur selten.': { literal: 'И там едет автобус только редко.', literary: 'А в это время автобус ходит редко.' },
        'Ich würde ja gern mit dem Fahrrad fahren aber nicht nachts.': { literal: 'Я хотел бы же охотно с велосипедом ехать но не ночами.', literary: 'Я бы с удовольствием ездил на велосипеде, но не ночью.' },
        'Also nehme ich das Auto.': { literal: 'Итак беру я автомобиль.', literary: 'Поэтому я езжу на машине.' },
        'Mit dem Rad fahre ich wieder wenn ich vormittags einen Kurs habe.': { literal: 'С велосипедом еду я снова когда я до полудня курс имею.', literary: 'На велосипеде буду ездить, когда у меня будет утренний курс.' },
      },
      vocabulary: [
        { de: 'die Sprachschule', plural: 'die Sprachschulen', ru: 'языковая школа', gender: 'feminin', collocation: 'zur Sprachschule kommen', example: 'Herr Schneider wie kommen Sie zur Sprachschule?' },
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'den Bus nehmen', example: 'Ich wollte zuerst den Bus nehmen.' },
        { de: 'der Kurs', plural: 'die Kurse', ru: 'курс', gender: 'maskulin', collocation: 'mein Kurs ist abends', example: 'Aber mein Kurs ist abends und geht bis 21 Uhr.' },
        { de: 'das Auto', plural: 'die Autos', ru: 'машина', gender: 'neutrum', collocation: 'das Auto nehmen', example: 'Also nehme ich das Auto.' },
        { de: 'das Rad', plural: 'die Räder', ru: 'велосипед (разг.)', gender: 'neutrum', collocation: 'mit dem Rad fahren', example: 'Mit dem Rad fahre ich wieder wenn ich vormittags einen Kurs habe.' },
        { de: 'fahren', ru: 'ехать', type: 'verb', forms: 'fährt, fuhr, ist gefahren', example: 'Ich würde ja gern mit dem Fahrrad fahren aber nicht nachts.' },
        { de: 'selten', ru: 'редко', type: 'adv', example: 'Und da fährt der Bus nur selten.' },
      ],
      practiceSentences: [
        { de: 'Wie kommst du zur Schule?', ru: 'Как ты добираешься до школы?', note: 'V2 в вопросе' },
        { de: 'Ich nehme den Bus.', ru: 'Я езжу на автобусе.', note: 'V2' },
        { de: 'Der Kurs geht bis 20 Uhr.', ru: 'Курс идёт до 20 часов.', note: 'V2' },
        { de: 'Ich würde gern Auto fahren.', ru: 'Я бы хотел ездить на машине.', note: 'Konjunktiv II' },
        { de: 'Wenn es regnet, nehme ich das Auto.', ru: 'Когда идёт дождь, я езжу на машине.', note: 'wenn -> глагол в конце, затем V2' },
      ],
      question: {
        de: 'Wie kommt Herr Schneider zur Sprachschule?',
        ru: 'Как господин Шнайдер добирается до языковой школы?',
        options: [
          { de: 'Mit dem Bus', ru: 'На автобусе' },
          { de: 'Mit dem Fahrrad', ru: 'На велосипеде' },
          { de: 'Mit dem Auto', ru: 'На машине' },
        ],
        correct: 2,
        explanation: 'Он говорит: "also nehme ich das Auto" — он ездит на машине, так как курс вечером.'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Julia',
      type: 'диалог',
      text: 'Julia was möchtest du zum Frühstück? Soll ich Eier und Wurst kaufen? Nein Wurst mag ich nicht zum Frühstück. Und Eier haben wir noch im Kühlschrank. Aber vielleicht kannst du frische Brötchen kaufen. Wir haben nur noch altes Brot. Gute Idee dann gehe ich schnell einkaufen.',
      sentenceTranslations: {
        'Julia was möchtest du zum Frühstück?': { literal: 'Юлия что хотела бы ты к завтраку?', literary: 'Юлия, что ты хочешь на завтрак?' },
        'Soll ich Eier und Wurst kaufen?': { literal: 'Должен я яйца и колбасу купить?', literary: 'Мне купить яйца и колбасу?' },
        'Nein Wurst mag ich nicht zum Frühstück.': { literal: 'Нет колбасу люблю я не к завтраку.', literary: 'Нет, колбасу я не люблю на завтрак.' },
        'Und Eier haben wir noch im Kühlschrank.': { literal: 'И яйца имеем мы ещё в холодильнике.', literary: 'А яйца у нас ещё есть в холодильнике.' },
        'Aber vielleicht kannst du frische Brötchen kaufen.': { literal: 'Но возможно можешь ты свежие булочки купить.', literary: 'Но может, ты купишь свежие булочки.' },
        'Wir haben nur noch altes Brot.': { literal: 'Мы имеем только ещё старый хлеб.', literary: 'У нас только чёрствый хлеб остался.' },
        'Gute Idee dann gehe ich schnell einkaufen.': { literal: 'Хорошая идея тогда иду я быстро покупать.', literary: 'Хорошая идея, тогда я быстро схожу в магазин.' },
      },
      vocabulary: [
        { de: 'das Frühstück', plural: 'die Frühstücke', ru: 'завтрак', gender: 'neutrum', collocation: 'zum Frühstück', example: 'Julia was möchtest du zum Frühstück?' },
        { de: 'die Wurst', plural: 'die Würste', ru: 'колбаса', gender: 'feminin', collocation: 'Wurst kaufen', example: 'Nein Wurst mag ich nicht zum Frühstück.' },
        { de: 'der Kühlschrank', plural: 'die Kühlschränke', ru: 'холодильник', gender: 'maskulin', collocation: 'im Kühlschrank', example: 'Und Eier haben wir noch im Kühlschrank.' },
        { de: 'das Brötchen', plural: 'die Brötchen', ru: 'булочка', gender: 'neutrum', collocation: 'frische Brötchen', example: 'Aber vielleicht kannst du frische Brötchen kaufen.' },
        { de: 'das Brot', plural: 'die Brote', ru: 'хлеб', gender: 'neutrum', collocation: 'altes Brot', example: 'Wir haben nur noch altes Brot.' },
        { de: 'einkaufen', ru: 'делать покупки', type: 'verb', forms: 'kauft ein, kaufte ein, hat eingekauft', example: 'Gute Idee dann gehe ich schnell einkaufen.' },
        { de: 'frisch', ru: 'свежий', type: 'adj', example: 'Aber vielleicht kannst du frische Brötchen kaufen.' },
      ],
      practiceSentences: [
        { de: 'Was möchtest du essen?', ru: 'Что ты хочешь есть?', note: 'модальный в вопросе' },
        { de: 'Soll ich Milch kaufen?', ru: 'Мне купить молоко?', note: 'sollen в вопросе-предложении' },
        { de: 'Ich mag keinen Käse.', ru: 'Я не люблю сыр.', note: 'mögen с отрицанием' },
        { de: 'Wir haben noch Brot.', ru: 'У нас ещё есть хлеб.', note: 'V2' },
        { de: 'Ich gehe schnell einkaufen.', ru: 'Я быстро схожу в магазин.', note: 'глагол движения + инфинитив' },
      ],
      question: {
        de: 'Was möchte Julia zum Frühstück?',
        ru: 'Что хочет Юлия на завтрак?',
        options: [
          { de: 'Eier und Wurst', ru: 'Яйца и колбасу' },
          { de: 'Frische Brötchen', ru: 'Свежие булочки' },
          { de: 'Altes Brot', ru: 'Чёрствый хлеб' },
        ],
        correct: 1,
        explanation: 'Юлия говорит: "aber vielleicht kannst du frische Brötchen kaufen" — она просит купить свежие булочки.'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Herr Paulsen',
      type: 'диалог',
      text: 'Herr Paulsen danke dass Sie vorbeigekommen sind und nach den Fenstern geschaut haben. Die schließen jetzt wieder. Aber es gibt doch noch ein Problem. Ja die Heizung wird nicht richtig warm. Es ist immer noch kalt in der Wohnung. Okay dann kommen wir noch einmal vorbei. Geht denn der Aufzug jetzt? Ja der funktioniert gut.',
      sentenceTranslations: {
        'Herr Paulsen danke dass Sie vorbeigekommen sind und nach den Fenstern geschaut haben.': { literal: 'Господин Паульсен спасибо что Вы зашли и за окнами посмотрели.', literary: 'Господин Паульсен, спасибо, что зашли и проверили окна.' },
        'Die schließen jetzt wieder.': { literal: 'Они закрываются теперь снова.', literary: 'Они теперь снова закрываются.' },
        'Aber es gibt doch noch ein Problem.': { literal: 'Но оно даёт же ещё одну проблему.', literary: 'Но есть ещё одна проблема.' },
        'Ja die Heizung wird nicht richtig warm.': { literal: 'Да отопление становится не правильно тёплым.', literary: 'Да, отопление не нагревается как следует.' },
        'Es ist immer noch kalt in der Wohnung.': { literal: 'Оно есть всё ещё холодно в квартире.', literary: 'В квартире всё ещё холодно.' },
        'Okay dann kommen wir noch einmal vorbei.': { literal: 'Хорошо тогда приходим мы ещё раз мимо.', literary: 'Хорошо, тогда мы ещё раз зайдём.' },
        'Geht denn der Aufzug jetzt?': { literal: 'Идёт же лифт сейчас?', literary: 'А лифт теперь работает?' },
        'Ja der funktioniert gut.': { literal: 'Да он функционирует хорошо.', literary: 'Да, он хорошо работает.' },
      },
      vocabulary: [
        { de: 'das Fenster', plural: 'die Fenster', ru: 'окно', gender: 'neutrum', collocation: 'nach den Fenstern schauen', example: 'Herr Paulsen danke dass Sie vorbeigekommen sind und nach den Fenstern geschaut haben.' },
        { de: 'die Heizung', plural: 'die Heizungen', ru: 'отопление', gender: 'feminin', collocation: 'die Heizung wird warm', example: 'Ja die Heizung wird nicht richtig warm.' },
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', collocation: 'in der Wohnung', example: 'Es ist immer noch kalt in der Wohnung.' },
        { de: 'der Aufzug', plural: 'die Aufzüge', ru: 'лифт', gender: 'maskulin', collocation: 'der Aufzug funktioniert', example: 'Geht denn der Aufzug jetzt?' },
        { de: 'vorbeikommen', ru: 'заходить, заглянуть', type: 'verb', forms: 'kommt vorbei, kam vorbei, ist vorbeigekommen', example: 'Herr Paulsen danke dass Sie vorbeigekommen sind und nach den Fenstern geschaut haben.' },
        { de: 'schließen', ru: 'закрываться', type: 'verb', forms: 'schließt, schloss, hat geschlossen', example: 'Die schließen jetzt wieder.' },
        { de: 'funktionieren', ru: 'работать, функционировать', type: 'verb', forms: 'funktioniert, funktionierte, hat funktioniert', example: 'Ja der funktioniert gut.' },
      ],
      practiceSentences: [
        { de: 'Danke, dass du gekommen bist.', ru: 'Спасибо, что пришёл.', note: 'dass -> Perfekt в конце' },
        { de: 'Es gibt ein Problem.', ru: 'Есть проблема.', note: 'безличное es gibt' },
        { de: 'Die Heizung wird kalt.', ru: 'Отопление остывает.', note: 'werden + прилагательное' },
        { de: 'Wir kommen morgen vorbei.', ru: 'Мы зайдём завтра.', note: 'отделяемая приставка' },
        { de: 'Der Computer funktioniert gut.', ru: 'Компьютер хорошо работает.', note: 'V2' },
      ],
      question: {
        de: 'Was funktioniert in der Wohnung nicht?',
        ru: 'Что не работает в квартире?',
        options: [
          { de: 'Die Fenster', ru: 'Окна' },
          { de: 'Die Heizung', ru: 'Отопление' },
          { de: 'Der Aufzug', ru: 'Лифт' },
        ],
        correct: 1,
        explanation: 'Говорится: "die Heizung wird nicht richtig warm, es ist immer noch kalt in der Wohnung" — отопление не греет.'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Restaurant',
      type: 'диалог-заказ',
      text: 'Guten Tag haben Sie schon gewählt? Haben Sie Suppen? Natürlich eine Gemüsesuppe mit Rindfleisch. Haben Sie die Gemüsesuppe auch ohne Fleisch? Ja natürlich. Möchten Sie die Suppe mit Brot? Nein bitte ohne Brot. Und zu trinken?',
      sentenceTranslations: {
        'Guten Tag haben Sie schon gewählt?': { literal: 'Добрый день имеете Вы уже выбрано?', literary: 'Добрый день, вы уже выбрали?' },
        'Haben Sie Suppen?': { literal: 'Имеете Вы супы?', literary: 'У вас есть супы?' },
        'Natürlich eine Gemüsesuppe mit Rindfleisch.': { literal: 'Конечно овощной суп с говядиной.', literary: 'Конечно, овощной суп с говядиной.' },
        'Haben Sie die Gemüsesuppe auch ohne Fleisch?': { literal: 'Имеете Вы овощной суп также без мяса?', literary: 'У вас есть овощной суп и без мяса?' },
        'Ja natürlich.': { literal: 'Да конечно.', literary: 'Да, конечно.' },
        'Möchten Sie die Suppe mit Brot?': { literal: 'Хотели бы Вы суп с хлебом?', literary: 'Вы хотите суп с хлебом?' },
        'Nein bitte ohne Brot.': { literal: 'Нет пожалуйста без хлеба.', literary: 'Нет, пожалуйста, без хлеба.' },
        'Und zu trinken?': { literal: 'И к питью?', literary: 'А пить что будете?' },
      },
      vocabulary: [
        { de: 'die Suppe', plural: 'die Suppen', ru: 'суп', gender: 'feminin', collocation: 'Suppe bestellen', example: 'Haben Sie Suppen?' },
        { de: 'die Gemüsesuppe', plural: 'die Gemüsesuppen', ru: 'овощной суп', gender: 'feminin', collocation: 'Gemüsesuppe mit Rindfleisch', example: 'Natürlich eine Gemüsesuppe mit Rindfleisch.' },
        { de: 'das Rindfleisch', ru: 'говядина', gender: 'neutrum', collocation: 'mit Rindfleisch', example: 'Natürlich eine Gemüsesuppe mit Rindfleisch.' },
        { de: 'das Fleisch', ru: 'мясо', gender: 'neutrum', collocation: 'ohne Fleisch', example: 'Haben Sie die Gemüsesuppe auch ohne Fleisch?' },
        { de: 'wählen', ru: 'выбирать', type: 'verb', forms: 'wählt, wählte, hat gewählt', example: 'Guten Tag haben Sie schon gewählt?' },
      ],
      practiceSentences: [
        { de: 'Haben Sie schon bestellt?', ru: 'Вы уже заказали?', note: 'Perfekt в вопросе' },
        { de: 'Ich hätte gern eine Suppe.', ru: 'Я бы хотел суп.', note: 'Konjunktiv II вежливость' },
        { de: 'Möchten Sie Kaffee?', ru: 'Хотите кофе?', note: 'möchten в вопросе' },
        { de: 'Mit oder ohne Milch?', ru: 'С молоком или без?', note: 'эллиптическая конструкция' },
        { de: 'Was gibt es zu essen?', ru: 'Что есть поесть?', note: 'es gibt + zu + инфинитив' },
      ],
      question: {
        de: 'Wie möchte der Gast die Suppe?',
        ru: 'Как гость хочет суп?',
        options: [
          { de: 'Mit Fleisch und Brot', ru: 'С мясом и хлебом' },
          { de: 'Ohne Fleisch, mit Brot', ru: 'Без мяса, с хлебом' },
          { de: 'Ohne Fleisch, ohne Brot', ru: 'Без мяса, без хлеба' },
        ],
        correct: 2,
        explanation: 'Гость заказывает овощной суп без мяса ("ohne Fleisch") и без хлеба ("nein bitte ohne Brot").'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Frau Schneider',
      type: 'диалог',
      text: 'Frau Schneider Sie waren gestern doch bei uns in der Praxis. Ja ist etwas nicht in Ordnung? Ja Sie haben Ihr Rezept für die Schmerztabletten nicht mitgenommen. Oh wann kann ich es abholen? Zu unseren normalen Öffnungszeiten. Es ist unterschrieben und liegt am Empfang. Vielen Dank ich komme heute noch vorbei.',
      sentenceTranslations: {
        'Frau Schneider Sie waren gestern doch bei uns in der Praxis.': { literal: 'Госпожа Шнайдер Вы были вчера же у нас в практике.', literary: 'Фрау Шнайдер, вы же вчера были у нас в клинике.' },
        'Ja ist etwas nicht in Ordnung?': { literal: 'Да есть что-то не в порядке?', literary: 'Да, что-то не так?' },
        'Ja Sie haben Ihr Rezept für die Schmerztabletten nicht mitgenommen.': { literal: 'Да Вы имеете Ваш рецепт для болеутоляющих таблеток не взяли с собой.', literary: 'Да, вы не забрали свой рецепт на обезболивающие.' },
        'Oh wann kann ich es abholen?': { literal: 'О когда могу я его забрать?', literary: 'О, когда я могу его забрать?' },
        'Zu unseren normalen Öffnungszeiten.': { literal: 'К нашим нормальным часам открытия.', literary: 'В наши обычные часы работы.' },
        'Es ist unterschrieben und liegt am Empfang.': { literal: 'Оно есть подписано и лежит у приёма.', literary: 'Он подписан и лежит на ресепшене.' },
        'Vielen Dank ich komme heute noch vorbei.': { literal: 'Большое спасибо я прихожу сегодня ещё мимо.', literary: 'Большое спасибо, я зайду ещё сегодня.' },
      },
      vocabulary: [
        { de: 'die Praxis', plural: 'die Praxen', ru: 'клиника, практика', gender: 'feminin', collocation: 'in der Praxis', example: 'Frau Schneider Sie waren gestern doch bei uns in der Praxis.' },
        { de: 'das Rezept', plural: 'die Rezepte', ru: 'рецепт', gender: 'neutrum', collocation: 'Rezept für Tabletten', example: 'Ja Sie haben Ihr Rezept für die Schmerztabletten nicht mitgenommen.' },
        { de: 'die Schmerztablette', plural: 'die Schmerztabletten', ru: 'обезболивающее', gender: 'feminin', collocation: 'Rezept für Schmerztabletten', example: 'Ja Sie haben Ihr Rezept für die Schmerztabletten nicht mitgenommen.' },
        { de: 'die Öffnungszeit', plural: 'die Öffnungszeiten', ru: 'часы работы', gender: 'feminin', collocation: 'zu den Öffnungszeiten', example: 'Zu unseren normalen Öffnungszeiten.' },
        { de: 'der Empfang', ru: 'ресепшен, приёмная', gender: 'maskulin', collocation: 'am Empfang', example: 'Es ist unterschrieben und liegt am Empfang.' },
        { de: 'mitnehmen', ru: 'брать с собой', type: 'verb', forms: 'nimmt mit, nahm mit, hat mitgenommen', example: 'Ja Sie haben Ihr Rezept für die Schmerztabletten nicht mitgenommen.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'holt ab, holte ab, hat abgeholt', example: 'Oh wann kann ich es abholen?' },
        { de: 'unterschreiben', ru: 'подписывать', type: 'verb', forms: 'unterschreibt, unterschrieb, hat unterschrieben', example: 'Es ist unterschrieben und liegt am Empfang.' },
      ],
      practiceSentences: [
        { de: 'Sie waren gestern hier.', ru: 'Вы были вчера здесь.', note: 'Präteritum от sein' },
        { de: 'Ich habe es nicht mitgenommen.', ru: 'Я не взял это с собой.', note: 'Perfekt с отрицанием + отделяемая приставка' },
        { de: 'Kann ich es morgen abholen?', ru: 'Могу я забрать это завтра?', note: 'модальный + отделяемый инфинитив' },
        { de: 'Das Paket liegt am Empfang.', ru: 'Посылка лежит на ресепшене.', note: 'V2' },
        { de: 'Ich komme heute vorbei.', ru: 'Я зайду сегодня.', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Was hat Frau Schneider in der Praxis vergessen?',
        ru: 'Что забыла фрау Шнайдер в клинике?',
        options: [
          { de: 'Ihre Versicherungskarte', ru: 'Свою страховую карту' },
          { de: 'Das Rezept für Schmerztabletten', ru: 'Рецепт на обезболивающие' },
          { de: 'Ihre Mobilnummer', ru: 'Свой мобильный номер' },
        ],
        correct: 1,
        explanation: 'Ей говорят: "Sie haben Ihr Rezept für die Schmerztabletten nicht mitgenommen" — она не взяла рецепт.'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Tobias',
      type: 'интервью',
      text: 'Tobias ich darf Sie doch mit Ihrem Vornamen anreden. Ja klar. Wir sprechen ja heute darüber wie man eine Wohnung finden kann. Sie hatten Glück. Ja ich unterschreibe nächste Woche meinen Mietvertrag und dann kann ich in die Wohnung. Zuerst habe ich natürlich die Wohnungsanzeigen im Internet gelesen. Es gibt dort sehr viele Angebote. Aber alle Wohnungen die ich bezahlen konnte waren außerhalb. Und ich möchte im Zentrum wohnen. In der Zeitung gab es nicht viele Angebote. Dann habe ich natürlich Freunde und Kollegen gefragt. Die wussten auch nichts. Haben mir aber den Tipp gegeben selbst aktiv zu werden. Ich habe überall in Cafés im Supermarkt auf der Straße Zettel aufgehängt. Dass es auch kein Problem für mich ist die Wohnung zu renovieren. Und dann hat mich eine Frau angerufen. Die Wohnung ist schön sie liegt zentral. Aber leider ist sie nicht sehr hell. Werden Sie selbst aktiv.',
      sentenceTranslations: {
        'Tobias ich darf Sie doch mit Ihrem Vornamen anreden.': { literal: 'Тобиас я могу Вас же с Вашим именем обращаться.', literary: 'Тобиас, я могу обращаться к вам по имени.' },
        'Ja klar.': { literal: 'Да ясно.', literary: 'Да, конечно.' },
        'Wir sprechen ja heute darüber wie man eine Wohnung finden kann.': { literal: 'Мы говорим же сегодня о том как человек квартиру найти может.', literary: 'Мы сегодня говорим о том, как найти квартиру.' },
        'Sie hatten Glück.': { literal: 'Вы имели счастье.', literary: 'Вам повезло.' },
        'Ja ich unterschreibe nächste Woche meinen Mietvertrag und dann kann ich in die Wohnung.': { literal: 'Да я подписываю следующую неделю мой договор аренды и тогда могу я в квартиру.', literary: 'Да, я подписываю договор аренды на следующей неделе и тогда смогу въехать.' },
        'Zuerst habe ich natürlich die Wohnungsanzeigen im Internet gelesen.': { literal: 'Сначала имею я конечно объявления о квартирах в интернете читал.', literary: 'Сначала я, конечно, читал объявления о квартирах в интернете.' },
        'Es gibt dort sehr viele Angebote.': { literal: 'Оно даёт там очень много предложений.', literary: 'Там очень много предложений.' },
        'Aber alle Wohnungen die ich bezahlen konnte waren außerhalb.': { literal: 'Но все квартиры которые я оплатить мог были снаружи.', literary: 'Но все квартиры, которые я мог оплатить, были за городом.' },
        'Und ich möchte im Zentrum wohnen.': { literal: 'И я хотел бы в центре жить.', literary: 'А я хочу жить в центре.' },
        'In der Zeitung gab es nicht viele Angebote.': { literal: 'В газете давало оно не много предложений.', literary: 'В газете было немного предложений.' },
        'Dann habe ich natürlich Freunde und Kollegen gefragt.': { literal: 'Тогда имею я конечно друзей и коллег спросил.', literary: 'Тогда я, конечно, спросил друзей и коллег.' },
        'Die wussten auch nichts.': { literal: 'Они знали также ничего.', literary: 'Они тоже ничего не знали.' },
        'Haben mir aber den Tipp gegeben selbst aktiv zu werden.': { literal: 'Имеют мне но совет дали сам активным становиться.', literary: 'Но дали мне совет действовать самому.' },
        'Ich habe überall in Cafés im Supermarkt auf der Straße Zettel aufgehängt.': { literal: 'Я имею везде в кафе в супермаркете на улице листки повесил.', literary: 'Я везде развесил объявления — в кафе, в супермаркете, на улице.' },
        'Dass es auch kein Problem für mich ist die Wohnung zu renovieren.': { literal: 'Что это также никакая проблема для меня есть квартиру ремонтировать.', literary: 'Что для меня не проблема отремонтировать квартиру.' },
        'Und dann hat mich eine Frau angerufen.': { literal: 'И тогда имеет меня одна женщина позвонила.', literary: 'И тогда мне позвонила одна женщина.' },
        'Die Wohnung ist schön sie liegt zentral.': { literal: 'Квартира есть красивая она лежит центрально.', literary: 'Квартира хорошая, расположена в центре.' },
        'Aber leider ist sie nicht sehr hell.': { literal: 'Но к сожалению есть она не очень светлая.', literary: 'Но, к сожалению, она не очень светлая.' },
        'Werden Sie selbst aktiv.': { literal: 'Становитесь Вы сами активными.', literary: 'Действуйте сами.' },
      },
      vocabulary: [
        { de: 'der Vorname', plural: 'die Vornamen', ru: 'имя', gender: 'maskulin', collocation: 'mit dem Vornamen anreden', example: 'Tobias ich darf Sie doch mit Ihrem Vornamen anreden.' },
        { de: 'der Mietvertrag', plural: 'die Mietverträge', ru: 'договор аренды', gender: 'maskulin', collocation: 'Mietvertrag unterschreiben', example: 'Ja ich unterschreibe nächste Woche meinen Mietvertrag und dann kann ich in die Wohnung.' },
        { de: 'die Wohnungsanzeige', plural: 'die Wohnungsanzeigen', ru: 'объявление о квартире', gender: 'feminin', collocation: 'Anzeigen lesen', example: 'Zuerst habe ich natürlich die Wohnungsanzeigen im Internet gelesen.' },
        { de: 'das Angebot', plural: 'die Angebote', ru: 'предложение', gender: 'neutrum', collocation: 'viele Angebote', example: 'Es gibt dort sehr viele Angebote.' },
        { de: 'das Zentrum', plural: 'die Zentren', ru: 'центр', gender: 'neutrum', collocation: 'im Zentrum wohnen', example: 'Und ich möchte im Zentrum wohnen.' },
        { de: 'die Zeitung', plural: 'die Zeitungen', ru: 'газета', gender: 'feminin', collocation: 'in der Zeitung', example: 'In der Zeitung gab es nicht viele Angebote.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'einen Tipp geben', example: 'Haben mir aber den Tipp gegeben selbst aktiv zu werden.' },
        { de: 'der Zettel', plural: 'die Zettel', ru: 'листок, объявление', gender: 'maskulin', collocation: 'Zettel aufhängen', example: 'Ich habe überall in Cafés im Supermarkt auf der Straße Zettel aufgehängt.' },
        { de: 'unterschreiben', ru: 'подписывать', type: 'verb', forms: 'unterschreibt, unterschrieb, hat unterschrieben', example: 'Ja ich unterschreibe nächste Woche meinen Mietvertrag und dann kann ich in die Wohnung.' },
        { de: 'bezahlen', ru: 'оплачивать', type: 'verb', forms: 'bezahlt, bezahlte, hat bezahlt', example: 'Aber alle Wohnungen die ich bezahlen konnte waren außerhalb.' },
        { de: 'aufhängen', ru: 'вешать, развешивать', type: 'verb', forms: 'hängt auf, hängte auf, hat aufgehängt', example: 'Ich habe überall in Cafés im Supermarkt auf der Straße Zettel aufgehängt.' },
        { de: 'renovieren', ru: 'ремонтировать', type: 'verb', forms: 'renoviert, renovierte, hat renoviert', example: 'Dass es auch kein Problem für mich ist die Wohnung zu renovieren.' },
        { de: 'zentral', ru: 'центральный', type: 'adj', example: 'Die Wohnung ist schön sie liegt zentral.' },
        { de: 'hell', ru: 'светлый', type: 'adj', example: 'Aber leider ist sie nicht sehr hell.' },
        { de: 'außerhalb', ru: 'за городом', type: 'adv', example: 'Aber alle Wohnungen die ich bezahlen konnte waren außerhalb.' },
      ],
      practiceSentences: [
        { de: 'Darf ich Sie fragen?', ru: 'Могу я вас спросить?', note: 'модальный dürfen + инфинитив' },
        { de: 'Ich unterschreibe morgen.', ru: 'Я подпишу завтра.', note: 'V2' },
        { de: 'Die Wohnung, die ich suche.', ru: 'Квартира, которую я ищу.', note: 'относительное придаточное' },
        { de: 'Wir haben Zettel aufgehängt.', ru: 'Мы развесили объявления.', note: 'Perfekt + отделяемая приставка' },
        { de: 'Sie wird selbst aktiv.', ru: 'Она действует сама.', note: 'werden + прилагательное' },
      ],
      question: {
        de: 'Wie hat Tobias die Wohnung gefunden?',
        ru: 'Как Тобиас нашёл квартиру?',
        options: [
          { de: 'Durch Anzeigen im Internet', ru: 'Через объявления в интернете' },
          { de: 'Durch eigene Zettel, die er aufgehängt hat', ru: 'Через собственные объявления, которые он развесил' },
          { de: 'Durch Freunde und Kollegen', ru: 'Через друзей и коллег' },
        ],
        correct: 1,
        explanation: 'Тобиас говорит: "ich habe überall in Cafés im Supermarkt auf der Straße Zettel aufgehängt" и после этого ему позвонила женщина с предложением квартиры.'
      }
    },
  ],

  /* ─── Агрегированный словарь (геттер) ─── */
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
    'Отделяемые приставки: anfangen, zurückgehen, ausfallen, stattfinden, mitbringen, anrufen, vorbeikommen, abholen, aufhängen',
    'sich freuen auf + Akk.: sich auf Temperaturen freuen',
    'Модальные в Präteritum: wollte, konnte, musste, hatte',
    'Perfekt с sein: ist gegangen, ist geblieben, ist vorbeigekommen',
    'Konjunktiv II: würde treffen, könnten essen',
    'dass-Nebensatz: dass du sie kaufen willst, dass sein Fahrrad kaputt ist',
    'wenn-Nebensatz: wenn ich vormittags einen Kurs habe',
    'lassen + Infinitiv: Pizza bringen lassen',
    'Relativsatz: alle Wohnungen, die ich bezahlen konnte',
    'wegen + Genitiv: wegen Krankheit zweier Bandmitglieder',
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Wetter).',
    },
  },
};

LESSONS.push(LESSON_15);
