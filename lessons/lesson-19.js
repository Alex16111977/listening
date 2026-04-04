/* ═══════════════════════════════════════════════════════════
   Lesson 19 — Goethe Zertifikat A2 Hören Teil 1-4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_19 = {
  id: 'lesson-19',
  number: 19,
  title: 'Goethe A2 Hören — Sport, Schule, Alltag',
  subtitle: 'Laut einer Umfrage interessieren sich Jungen am meisten für Fußball',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-19',
  videoUrl: 'https://www.youtube.com/watch?v=XXGd-ZXvg38',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Umfrage Sport',
      type: 'опрос',
      text: 'Laut einer Umfrage interessieren sich Jungen am meisten für Fußball. An zweiter Stelle steht bei ihnen Basketball und die wenigsten interessieren sich für Volleyball. Bei den Mädchen sieht das ganz anders aus. Die meisten von ihnen haben an Volleyball Interesse und nur ein kleiner Teil spielt gern Fußball.',
      sentenceTranslations: {
        'Laut einer Umfrage interessieren sich Jungen am meisten für Fußball.': { literal: 'Согласно одному опросу интересуются себя мальчики больше всего футболом', literary: 'Согласно опросу, мальчики больше всего интересуются футболом.' },
        'An zweiter Stelle steht bei ihnen Basketball und die wenigsten interessieren sich für Volleyball.': { literal: 'На втором месте стоит у них баскетбол и наименьшие интересуются себя волейболом', literary: 'На втором месте у них баскетбол, и меньше всего интересуются волейболом.' },
        'Bei den Mädchen sieht das ganz anders aus.': { literal: 'У девочек выглядит это совсем иначе наружу', literary: 'У девочек всё выглядит совершенно иначе.' },
        'Die meisten von ihnen haben an Volleyball Interesse und nur ein kleiner Teil spielt gern Fußball.': { literal: 'Большинство из них имеют к волейболу интерес и только маленькая часть играет охотно футбол', literary: 'Большинство из них интересуются волейболом, и только небольшая часть любит играть в футбол.' },
      },
      vocabulary: [
        { de: 'die Umfrage', plural: 'die Umfragen', ru: 'опрос', gender: 'feminin', collocation: 'laut einer Umfrage', example: 'Laut einer Umfrage interessieren sich Jungen am meisten für Fußball.' },
        { de: 'der Junge', plural: 'die Jungen', ru: 'мальчик', gender: 'maskulin', collocation: 'Jungen interessieren sich', example: 'Laut einer Umfrage interessieren sich Jungen am meisten für Fußball.' },
        { de: 'die Stelle', plural: 'die Stellen', ru: 'место, позиция', gender: 'feminin', collocation: 'an zweiter Stelle', example: 'An zweiter Stelle steht bei ihnen Basketball.' },
        { de: 'das Mädchen', plural: 'die Mädchen', ru: 'девочка', gender: 'neutrum', collocation: 'bei den Mädchen', example: 'Bei den Mädchen sieht das ganz anders aus.' },
        { de: 'das Interesse', plural: 'die Interessen', ru: 'интерес', gender: 'neutrum', collocation: 'Interesse haben an', example: 'Die meisten von ihnen haben an Volleyball Interesse.' },
        { de: 'der Teil', plural: 'die Teile', ru: 'часть', gender: 'maskulin', collocation: 'ein kleiner Teil', example: 'Nur ein kleiner Teil spielt gern Fußball.' },
        { de: 'sich interessieren für', ru: 'интересоваться чем-то', type: 'verb', forms: 'interessiert sich, interessierte sich, hat sich interessiert', example: 'Laut einer Umfrage interessieren sich Jungen am meisten für Fußball.' },
        { de: 'aussehen', ru: 'выглядеть', type: 'verb', forms: 'sieht aus, sah aus, hat ausgesehen', example: 'Bei den Mädchen sieht das ganz anders aus.' },
      ],
      practiceSentences: [
        { de: 'Die Kinder interessieren sich für Sport.', ru: 'Дети интересуются спортом.', note: 'V2, рефлексив' },
        { de: 'An erster Stelle steht Deutsch.', ru: 'На первом месте стоит немецкий.', note: 'V2 с инверсией' },
        { de: 'Das sieht gut aus.', ru: 'Это выглядит хорошо.', note: 'отделяемая приставка в конце' },
        { de: 'Bei uns gibt es Pizza.', ru: 'У нас есть пицца.', note: 'V2 после обстоятельства' },
        { de: 'Die meisten spielen Tennis.', ru: 'Большинство играет в теннис.', note: 'V2' },
      ],
      question: {
        de: 'Wofür interessieren sich die meisten Mädchen?',
        ru: 'Чем больше всего интересуются девочки?',
        options: [
          { de: 'Fußball', ru: 'Футбол' },
          { de: 'Basketball', ru: 'Баскетбол' },
          { de: 'Volleyball', ru: 'Волейбол' },
        ],
        correct: 2,
        explanation: 'В тексте сказано: "Bei den Mädchen... die meisten von ihnen haben an Volleyball Interesse" — большинство девочек интересуются волейболом.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Schulsachen',
      type: 'объявление',
      text: 'Pass! Das neue Schuljahr fängt in einer Woche an. Deswegen gibt es heute Schulsachen zu besonders günstigen Preisen. Zehn Hefte nur 3,50 €. Zehn Bleistifte nur 2,50 €. Fünf Radiergummis nur 1 €. Greifen Sie zu, solange der Vorrat reicht!',
      sentenceTranslations: {
        'Pass!': { literal: 'Внимание!', literary: 'Внимание!' },
        'Das neue Schuljahr fängt in einer Woche an.': { literal: 'Новый учебный год начинается через одну неделю в-начало', literary: 'Новый учебный год начинается через неделю.' },
        'Deswegen gibt es heute Schulsachen zu besonders günstigen Preisen.': { literal: 'Поэтому даёт это сегодня школьные вещи к особенно выгодным ценам', literary: 'Поэтому сегодня школьные товары продаются по особенно выгодным ценам.' },
        'Zehn Hefte nur 3,50 €.': { literal: 'Десять тетрадей только 3,50 евро', literary: 'Десять тетрадей всего за 3,50 евро.' },
        'Zehn Bleistifte nur 2,50 €.': { literal: 'Десять карандашей только 2,50 евро', literary: 'Десять карандашей всего за 2,50 евро.' },
        'Fünf Radiergummis nur 1 €.': { literal: 'Пять ластиков только 1 евро', literary: 'Пять ластиков всего за 1 евро.' },
        'Greifen Sie zu, solange der Vorrat reicht!': { literal: 'Хватайте вы к-себе, пока запас хватает!', literary: 'Берите, пока есть в наличии!' },
      },
      vocabulary: [
        { de: 'das Schuljahr', plural: 'die Schuljahre', ru: 'учебный год', gender: 'neutrum', collocation: 'das neue Schuljahr', example: 'Das neue Schuljahr fängt in einer Woche an.' },
        { de: 'die Schulsachen', ru: 'школьные принадлежности', gender: 'feminin', collocation: 'Schulsachen kaufen', example: 'Deswegen gibt es heute Schulsachen zu besonders günstigen Preisen.' },
        { de: 'der Preis', plural: 'die Preise', ru: 'цена', gender: 'maskulin', collocation: 'zu günstigen Preisen', example: 'Deswegen gibt es heute Schulsachen zu besonders günstigen Preisen.' },
        { de: 'das Heft', plural: 'die Hefte', ru: 'тетрадь', gender: 'neutrum', collocation: 'zehn Hefte', example: 'Zehn Hefte nur 3,50 €.' },
        { de: 'der Bleistift', plural: 'die Bleistifte', ru: 'карандаш', gender: 'maskulin', collocation: 'zehn Bleistifte', example: 'Zehn Bleistifte nur 2,50 €.' },
        { de: 'das Radiergummi', plural: 'die Radiergummis', ru: 'ластик', gender: 'neutrum', collocation: 'fünf Radiergummis', example: 'Fünf Radiergummis nur 1 €.' },
        { de: 'der Vorrat', plural: 'die Vorräte', ru: 'запас', gender: 'maskulin', collocation: 'solange der Vorrat reicht', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
        { de: 'anfangen', ru: 'начинаться', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Das neue Schuljahr fängt in einer Woche an.' },
        { de: 'zugreifen', ru: 'брать, хватать', type: 'verb', forms: 'greift zu, griff zu, hat zugegriffen', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
        { de: 'reichen', ru: 'хватать, быть достаточным', type: 'verb', forms: 'reicht, reichte, hat gereicht', example: 'Greifen Sie zu, solange der Vorrat reicht!' },
      ],
      practiceSentences: [
        { de: 'Die Schule fängt morgen an.', ru: 'Школа начинается завтра.', note: 'отделяемая приставка в конце' },
        { de: 'Es gibt heute Kuchen.', ru: 'Сегодня есть торт.', note: 'es gibt + Akk' },
        { de: 'Kaufen Sie schnell ein!', ru: 'Покупайте быстро!', note: 'императив с отделяемой приставкой' },
        { de: 'Der Kurs beginnt in zwei Tagen.', ru: 'Курс начинается через два дня.', note: 'V2' },
        { de: 'Nimm dir Zeit, solange du kannst.', ru: 'Не торопись, пока можешь.', note: 'глагол в конце Nebensatz' },
      ],
      question: {
        de: 'Was kostet am wenigsten?',
        ru: 'Что стоит меньше всего?',
        options: [
          { de: 'Zehn Hefte', ru: 'Десять тетрадей' },
          { de: 'Zehn Bleistifte', ru: 'Десять карандашей' },
          { de: 'Fünf Radiergummis', ru: 'Пять ластиков' },
        ],
        correct: 2,
        explanation: 'Цены в тексте: 10 тетрадей — 3,50 €, 10 карандашей — 2,50 €, 5 ластиков — 1 €. Ластики стоят меньше всего.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Eigenes Zimmer',
      type: 'рассказ',
      text: 'Ich habe also seit letztem Jahr ein eigenes Zimmer. Das ist prima! Mir fehlen aber noch einige Sachen. Ich habe ein schönes Bett und einen großen Schreibtisch. Ein Fernseher auf einem kleinen Tisch und ein bequemer Sessel dazu stehen auch in meinem Zimmer. Was ich noch brauche, das ist ein Kleiderschrank. Ach ja, und einen neuen Schreibtischstuhl hätte ich gern. Auf dem alten kann ich nicht richtig sitzen.',
      sentenceTranslations: {
        'Ich habe also seit letztem Jahr ein eigenes Zimmer.': { literal: 'Я имею итак с прошлого года собственную комнату', literary: 'Итак, с прошлого года у меня есть собственная комната.' },
        'Das ist prima!': { literal: 'Это есть отлично!', literary: 'Это здорово!' },
        'Mir fehlen aber noch einige Sachen.': { literal: 'Мне недостают однако ещё некоторые вещи', literary: 'Но мне ещё не хватает некоторых вещей.' },
        'Ich habe ein schönes Bett und einen großen Schreibtisch.': { literal: 'Я имею красивую кровать и большой письменный стол', literary: 'У меня есть красивая кровать и большой письменный стол.' },
        'Ein Fernseher auf einem kleinen Tisch und ein bequemer Sessel dazu stehen auch in meinem Zimmer.': { literal: 'Телевизор на маленьком столе и удобное кресло к-тому стоят также в моей комнате', literary: 'Телевизор на маленьком столике и удобное кресло также стоят в моей комнате.' },
        'Was ich noch brauche, das ist ein Kleiderschrank.': { literal: 'Что я ещё нуждаюсь, это есть платяной шкаф', literary: 'Что мне ещё нужно — это платяной шкаф.' },
        'Ach ja, und einen neuen Schreibtischstuhl hätte ich gern.': { literal: 'Ах да, и новый стул для письменного стола имел бы я охотно', literary: 'Ах да, и ещё я хотел бы новый стул для письменного стола.' },
        'Auf dem alten kann ich nicht richtig sitzen.': { literal: 'На старом могу я не правильно сидеть', literary: 'На старом я не могу нормально сидеть.' },
      },
      vocabulary: [
        { de: 'das Zimmer', plural: 'die Zimmer', ru: 'комната', gender: 'neutrum', collocation: 'ein eigenes Zimmer', example: 'Ich habe also seit letztem Jahr ein eigenes Zimmer.' },
        { de: 'die Sache', plural: 'die Sachen', ru: 'вещь', gender: 'feminin', collocation: 'einige Sachen', example: 'Mir fehlen aber noch einige Sachen.' },
        { de: 'das Bett', plural: 'die Betten', ru: 'кровать', gender: 'neutrum', collocation: 'ein schönes Bett', example: 'Ich habe ein schönes Bett und einen großen Schreibtisch.' },
        { de: 'der Schreibtisch', plural: 'die Schreibtische', ru: 'письменный стол', gender: 'maskulin', collocation: 'ein großer Schreibtisch', example: 'Ich habe ein schönes Bett und einen großen Schreibtisch.' },
        { de: 'der Fernseher', plural: 'die Fernseher', ru: 'телевизор', gender: 'maskulin', collocation: 'ein Fernseher auf dem Tisch', example: 'Ein Fernseher auf einem kleinen Tisch und ein bequemer Sessel dazu stehen auch in meinem Zimmer.' },
        { de: 'der Sessel', plural: 'die Sessel', ru: 'кресло', gender: 'maskulin', collocation: 'ein bequemer Sessel', example: 'Ein Fernseher auf einem kleinen Tisch und ein bequemer Sessel dazu stehen auch in meinem Zimmer.' },
        { de: 'der Kleiderschrank', plural: 'die Kleiderschränke', ru: 'платяной шкаф', gender: 'maskulin', collocation: 'einen Kleiderschrank brauchen', example: 'Was ich noch brauche, das ist ein Kleiderschrank.' },
        { de: 'der Schreibtischstuhl', plural: 'die Schreibtischstühle', ru: 'стул для письменного стола', gender: 'maskulin', collocation: 'einen neuen Schreibtischstuhl', example: 'Ach ja, und einen neuen Schreibtischstuhl hätte ich gern.' },
        { de: 'fehlen', ru: 'не хватать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Mir fehlen aber noch einige Sachen.' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'braucht, brauchte, hat gebraucht', example: 'Was ich noch brauche, das ist ein Kleiderschrank.' },
      ],
      practiceSentences: [
        { de: 'Mir fehlt ein Stuhl.', ru: 'Мне не хватает стула.', note: 'fehlen + Dat' },
        { de: 'Seit gestern habe ich Kopfschmerzen.', ru: 'Со вчерашнего дня у меня болит голова.', note: 'V2' },
        { de: 'Was ich mag, ist Pizza.', ru: 'Что я люблю — это пицца.', note: 'глагол в конце Nebensatz' },
        { de: 'Ich hätte gern einen Kaffee.', ru: 'Я хотел бы кофе.', note: 'Konjunktiv II' },
        { de: 'Das Buch liegt auf dem Tisch.', ru: 'Книга лежит на столе.', note: 'V2' },
      ],
      question: {
        de: 'Was braucht der Junge noch?',
        ru: 'Что ещё нужно мальчику?',
        options: [
          { de: 'Einen Kleiderschrank und einen Schreibtischstuhl', ru: 'Платяной шкаф и стул для письменного стола' },
          { de: 'Einen Fernseher und einen Sessel', ru: 'Телевизор и кресло' },
          { de: 'Ein Bett und einen Schreibtisch', ru: 'Кровать и письменный стол' },
        ],
        correct: 0,
        explanation: 'В тексте говорится: "Was ich noch brauche, das ist ein Kleiderschrank" и "einen neuen Schreibtischstuhl hätte ich gern".'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Feste',
      type: 'мнение',
      text: 'Ich freue mich immer auf Weihnachten, obwohl es im Winter ist, weil ich dann viele Geschenke bekomme. Ostern finde ich nicht so gut, obwohl es im Frühling ist, weil es dann sehr oft regnet. Das Oktoberfest, das ist zwar lustig, aber eigentlich nur etwas für Biertrinker. Nein, das mag ich auch nicht.',
      sentenceTranslations: {
        'Ich freue mich immer auf Weihnachten, obwohl es im Winter ist, weil ich dann viele Geschenke bekomme.': { literal: 'Я радуюсь себя всегда на Рождество, хотя оно зимой есть, потому что я тогда многие подарки получаю', literary: 'Я всегда радуюсь Рождеству, хотя оно зимой, потому что тогда я получаю много подарков.' },
        'Ostern finde ich nicht so gut, obwohl es im Frühling ist, weil es dann sehr oft regnet.': { literal: 'Пасху нахожу я не так хорошо, хотя она весной есть, потому что это тогда очень часто дождит', literary: 'Пасха мне не очень нравится, хотя она весной, потому что тогда очень часто идёт дождь.' },
        'Das Oktoberfest, das ist zwar lustig, aber eigentlich nur etwas für Biertrinker.': { literal: 'Октоберфест, это есть хотя весело, но собственно только нечто для пивопийц', literary: 'Октоберфест, конечно, весёлый, но на самом деле это только для любителей пива.' },
        'Nein, das mag ich auch nicht.': { literal: 'Нет, это нравится мне тоже не', literary: 'Нет, это мне тоже не нравится.' },
      },
      vocabulary: [
        { de: 'das Weihnachten', plural: 'die Weihnachten', ru: 'Рождество', gender: 'neutrum', collocation: 'auf Weihnachten freuen', example: 'Ich freue mich immer auf Weihnachten.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'viele Geschenke bekommen', example: 'Ich freue mich immer auf Weihnachten, obwohl es im Winter ist, weil ich dann viele Geschenke bekomme.' },
        { de: 'der Biertrinker', plural: 'die Biertrinker', ru: 'любитель пива', gender: 'maskulin', collocation: 'nur für Biertrinker', example: 'Das Oktoberfest, das ist zwar lustig, aber eigentlich nur etwas für Biertrinker.' },
        { de: 'sich freuen auf', ru: 'радоваться чему-то', type: 'verb', forms: 'freut sich, freute sich, hat sich gefreut', example: 'Ich freue mich immer auf Weihnachten.' },
        { de: 'bekommen', ru: 'получать', type: 'verb', forms: 'bekommt, bekam, hat bekommen', example: 'Ich freue mich immer auf Weihnachten, obwohl es im Winter ist, weil ich dann viele Geschenke bekomme.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Ostern finde ich nicht so gut, obwohl es im Frühling ist, weil es dann sehr oft regnet.' },
        { de: 'mögen', ru: 'нравиться, любить', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Nein, das mag ich auch nicht.' },
        { de: 'lustig', ru: 'весёлый', type: 'adj', example: 'Das Oktoberfest, das ist zwar lustig, aber eigentlich nur etwas für Biertrinker.' },
      ],
      practiceSentences: [
        { de: 'Ich freue mich auf den Sommer.', ru: 'Я радуюсь лету.', note: 'V2, рефлексив' },
        { de: 'Er kommt nicht, weil er krank ist.', ru: 'Он не придёт, потому что болен.', note: 'глагол в конце Nebensatz' },
        { de: 'Sie geht spazieren, obwohl es regnet.', ru: 'Она идёт гулять, хотя идёт дождь.', note: 'глагол в конце Nebensatz' },
        { de: 'Das Buch ist zwar teuer, aber gut.', ru: 'Книга хоть и дорогая, но хорошая.', note: 'V2' },
        { de: 'Magst du Schokolade?', ru: 'Ты любишь шоколад?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Welches Fest mag die Person?',
        ru: 'Какой праздник нравится человеку?',
        options: [
          { de: 'Ostern', ru: 'Пасха' },
          { de: 'Weihnachten', ru: 'Рождество' },
          { de: 'Oktoberfest', ru: 'Октоберфест' },
        ],
        correct: 1,
        explanation: 'В тексте: "Ich freue mich immer auf Weihnachten" — человек всегда радуется Рождеству, а про другие праздники говорит негативно.'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Kleiner Laden',
      type: 'рассказ',
      text: 'Wenn ich einkaufen gehe, dann gehe ich immer in den kleinen Laden in unserer Nachbarschaft, gleich um die Ecke. Ich gehe gern dorthin, weil die Verkäuferin immer so nett ist. Okay, die Preise sind ein bisschen höher als im Supermarkt und ich finde auch nicht immer alles, was ich brauche. Das ist mir aber egal. Ich mag super große Geschäfte nicht.',
      sentenceTranslations: {
        'Wenn ich einkaufen gehe, dann gehe ich immer in den kleinen Laden in unserer Nachbarschaft, gleich um die Ecke.': { literal: 'Когда я покупать иду, тогда иду я всегда в маленький магазин в нашем соседстве, прямо за углом', literary: 'Когда я иду за покупками, я всегда иду в маленький магазин в нашем районе, прямо за углом.' },
        'Ich gehe gern dorthin, weil die Verkäuferin immer so nett ist.': { literal: 'Я иду охотно туда, потому что продавщица всегда так мила есть', literary: 'Мне нравится туда ходить, потому что продавщица всегда такая милая.' },
        'Okay, die Preise sind ein bisschen höher als im Supermarkt und ich finde auch nicht immer alles, was ich brauche.': { literal: 'Окей, цены есть немного выше чем в супермаркете и я нахожу тоже не всегда всё, что я нуждаюсь', literary: 'Ладно, цены немного выше, чем в супермаркете, и я не всегда нахожу всё, что мне нужно.' },
        'Das ist mir aber egal.': { literal: 'Это есть мне однако всё равно', literary: 'Но мне всё равно.' },
        'Ich mag super große Geschäfte nicht.': { literal: 'Я люблю супер большие магазины не', literary: 'Я не люблю огромные магазины.' },
      },
      vocabulary: [
        { de: 'der Laden', plural: 'die Läden', ru: 'магазин', gender: 'maskulin', collocation: 'in den kleinen Laden', example: 'Wenn ich einkaufen gehe, dann gehe ich immer in den kleinen Laden in unserer Nachbarschaft, gleich um die Ecke.' },
        { de: 'die Nachbarschaft', plural: 'die Nachbarschaften', ru: 'соседство, район', gender: 'feminin', collocation: 'in unserer Nachbarschaft', example: 'Wenn ich einkaufen gehe, dann gehe ich immer in den kleinen Laden in unserer Nachbarschaft, gleich um die Ecke.' },
        { de: 'die Ecke', plural: 'die Ecken', ru: 'угол', gender: 'feminin', collocation: 'um die Ecke', example: 'Wenn ich einkaufen gehe, dann gehe ich immer in den kleinen Laden in unserer Nachbarschaft, gleich um die Ecke.' },
        { de: 'die Verkäuferin', plural: 'die Verkäuferinnen', ru: 'продавщица', gender: 'feminin', collocation: 'die Verkäuferin ist nett', example: 'Ich gehe gern dorthin, weil die Verkäuferin immer so nett ist.' },
        { de: 'das Geschäft', plural: 'die Geschäfte', ru: 'магазин', gender: 'neutrum', collocation: 'große Geschäfte', example: 'Ich mag super große Geschäfte nicht.' },
        { de: 'einkaufen gehen', ru: 'идти за покупками', type: 'verb', forms: 'geht einkaufen, ging einkaufen, ist einkaufen gegangen', example: 'Wenn ich einkaufen gehe, dann gehe ich immer in den kleinen Laden in unserer Nachbarschaft, gleich um die Ecke.' },
        { de: 'finden', ru: 'находить', type: 'verb', forms: 'findet, fand, hat gefunden', example: 'Okay, die Preise sind ein bisschen höher als im Supermarkt und ich finde auch nicht immer alles, was ich brauche.' },
      ],
      practiceSentences: [
        { de: 'Wenn es regnet, bleibe ich zu Hause.', ru: 'Если идёт дождь, я остаюсь дома.', note: 'глагол в конце wenn-Satz' },
        { de: 'Ich gehe oft dorthin.', ru: 'Я часто туда хожу.', note: 'V2' },
        { de: 'Die Äpfel sind teurer als die Birnen.', ru: 'Яблоки дороже груш.', note: 'V2' },
        { de: 'Das ist mir wichtig.', ru: 'Это для меня важно.', note: 'V2' },
        { de: 'Er kauft nicht alles, was er sieht.', ru: 'Он не покупает всё, что видит.', note: 'глагол в конце was-Satz' },
      ],
      question: {
        de: 'Warum geht die Person gern in den kleinen Laden?',
        ru: 'Почему человек любит ходить в маленький магазин?',
        options: [
          { de: 'Weil die Preise niedriger sind', ru: 'Потому что цены ниже' },
          { de: 'Weil die Verkäuferin nett ist', ru: 'Потому что продавщица милая' },
          { de: 'Weil sie alles findet, was sie braucht', ru: 'Потому что находит всё, что нужно' },
        ],
        correct: 1,
        explanation: 'В тексте прямо сказано: "Ich gehe gern dorthin, weil die Verkäuferin immer so nett ist".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Bianca und Martin',
      type: 'диалог',
      text: '"Hallo Bianca! Warum hast du so viele Chipstüten gekauft?" "Hallo Martin! Eigentlich wollte ich Popcorn kaufen, aber im Supermarkt waren nur noch zwei Tüten im Regal. Heute Abend treffen wir uns doch bei Christine. Hast du das vergessen?" "Du, das habe ich nicht gewusst. Und wieso treffen wir uns bei Christine?" "Mensch Martin, ihre Eltern haben eine Home-Cinema-Anlage gekauft und wir wollen zwei tolle Filme sehen. Silke bringt Pizza mit, die ihre Mama für uns macht." "Echt? Silkes Mama macht die leckerste Pizza der Welt!" "Boris bringt die Getränke mit, also Cola und Fanta, und Tim hausgemachten Apfelkuchen. Und ich, ich habe keine Ahnung, was ich mitbringen soll." "Du kannst doch Süßigkeiten mitbringen." "Gute Idee! Ich habe jetzt eine Stunde Basketballtraining. Nach dem Training gehe ich am Kiosk vorbei und kaufe Schokolade und Bonbons. Wollen wir uns um 6 Uhr vor dem Kiosk treffen? Dann können wir zusammen zu Christine gehen." "Um 6:30 Uhr passt es mir besser." "Okay, okay, abgemacht!"',
      sentenceTranslations: {
        '"Hallo Bianca!': { literal: 'Привет Бианка!', literary: 'Привет, Бианка!' },
        'Warum hast du so viele Chipstüten gekauft?"': { literal: 'Почему имеешь ты так много пакетов чипсов купленными?', literary: 'Почему ты купила так много пакетов чипсов?' },
        '"Hallo Martin!': { literal: 'Привет Мартин!', literary: 'Привет, Мартин!' },
        'Eigentlich wollte ich Popcorn kaufen, aber im Supermarkt waren nur noch zwei Tüten im Regal.': { literal: 'Собственно хотела я попкорн купить, но в супермаркете были только ещё два пакета на полке', literary: 'Вообще-то я хотела купить попкорн, но в супермаркете на полке было только два пакета.' },
        'Heute Abend treffen wir uns doch bei Christine.': { literal: 'Сегодня вечером встречаем мы себя же у Кристины', literary: 'Сегодня вечером мы же встречаемся у Кристины.' },
        'Hast du das vergessen?"': { literal: 'Имеешь ты это забытым?', literary: 'Ты это забыл?' },
        '"Du, das habe ich nicht gewusst.': { literal: 'Ты, это имею я не знанным', literary: 'Слушай, я этого не знал.' },
        'Und wieso treffen wir uns bei Christine?"': { literal: 'И почему встречаем мы себя у Кристины?', literary: 'И почему мы встречаемся у Кристины?' },
        '"Mensch Martin, ihre Eltern haben eine Home-Cinema-Anlage gekauft und wir wollen zwei tolle Filme sehen.': { literal: 'Человек Мартин, её родители имеют домашний-кинотеатр купленным и мы хотим два классных фильма видеть', literary: 'Ну Мартин, её родители купили домашний кинотеатр, и мы хотим посмотреть два классных фильма.' },
        'Silke bringt Pizza mit, die ihre Mama für uns macht."': { literal: 'Зильке приносит пиццу с-собой, которую её мама для нас делает', literary: 'Зильке принесёт пиццу, которую её мама готовит для нас.' },
        '"Echt?': { literal: 'Правда?', literary: 'Правда?' },
        'Silkes Mama macht die leckerste Pizza der Welt!"': { literal: 'Зильке мама делает вкуснейшую пиццу мира!', literary: 'Мама Зильке делает самую вкусную пиццу в мире!' },
        '"Boris bringt die Getränke mit, also Cola und Fanta, und Tim hausgemachten Apfelkuchen.': { literal: 'Борис приносит напитки с-собой, итак колу и фанту, и Тим домашний яблочный пирог', literary: 'Борис принесёт напитки — колу и фанту, а Тим — домашний яблочный пирог.' },
        'Und ich, ich habe keine Ahnung, was ich mitbringen soll."': { literal: 'И я, я имею никакое понятие, что я принести-с-собой должна', literary: 'А я понятия не имею, что мне принести.' },
        '"Du kannst doch Süßigkeiten mitbringen."': { literal: 'Ты можешь же сладости принести-с-собой', literary: 'Ты же можешь принести сладости.' },
        '"Gute Idee!': { literal: 'Хорошая идея!', literary: 'Хорошая идея!' },
        'Ich habe jetzt eine Stunde Basketballtraining.': { literal: 'Я имею сейчас один час баскетбольную тренировку', literary: 'У меня сейчас час баскетбольной тренировки.' },
        'Nach dem Training gehe ich am Kiosk vorbei und kaufe Schokolade und Bonbons.': { literal: 'После тренировки иду я у киоска мимо и покупаю шоколад и конфеты', literary: 'После тренировки я зайду к киоску и куплю шоколад и конфеты.' },
        'Wollen wir uns um 6 Uhr vor dem Kiosk treffen?': { literal: 'Хотим мы себя в 6 часов перед киоском встретить?', literary: 'Давай встретимся в 6 часов у киоска?' },
        'Dann können wir zusammen zu Christine gehen."': { literal: 'Тогда можем мы вместе к Кристине идти', literary: 'Тогда мы сможем вместе пойти к Кристине.' },
        '"Um 6:30 Uhr passt es mir besser."': { literal: 'В 6:30 подходит оно мне лучше', literary: 'В 6:30 мне подходит лучше.' },
        '"Okay, okay, abgemacht!"': { literal: 'Окей, окей, договорились!', literary: 'Ладно, ладно, договорились!' },
      },
      vocabulary: [
        { de: 'die Chipstüte', plural: 'die Chipstüten', ru: 'пакет чипсов', gender: 'feminin', collocation: 'viele Chipstüten kaufen', example: 'Warum hast du so viele Chipstüten gekauft?' },
        { de: 'das Regal', plural: 'die Regale', ru: 'полка', gender: 'neutrum', collocation: 'im Regal', example: 'Eigentlich wollte ich Popcorn kaufen, aber im Supermarkt waren nur noch zwei Tüten im Regal.' },
        { de: 'der Film', plural: 'die Filme', ru: 'фильм', gender: 'maskulin', collocation: 'tolle Filme sehen', example: '"Mensch Martin, ihre Eltern haben eine Home-Cinema-Anlage gekauft und wir wollen zwei tolle Filme sehen.' },
        { de: 'das Getränk', plural: 'die Getränke', ru: 'напиток', gender: 'neutrum', collocation: 'Getränke mitbringen', example: '"Boris bringt die Getränke mit, also Cola und Fanta, und Tim hausgemachten Apfelkuchen.' },
        { de: 'der Kiosk', plural: 'die Kioske', ru: 'киоск', gender: 'maskulin', collocation: 'am Kiosk vorbei', example: 'Nach dem Training gehe ich am Kiosk vorbei und kaufe Schokolade und Bonbons.' },
        { de: 'die Schokolade', plural: 'die Schokoladen', ru: 'шоколад', gender: 'feminin', collocation: 'Schokolade kaufen', example: 'Nach dem Training gehe ich am Kiosk vorbei und kaufe Schokolade und Bonbons.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Heute Abend treffen wir uns doch bei Christine.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Hast du das vergessen?' },
        { de: 'mitbringen', ru: 'приносить с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Silke bringt Pizza mit, die ihre Mama für uns macht.' },
        { de: 'vorbeigehen', ru: 'проходить мимо', type: 'verb', forms: 'geht vorbei, ging vorbei, ist vorbeigegangen', example: 'Nach dem Training gehe ich am Kiosk vorbei und kaufe Schokolade und Bonbons.' },
      ],
      practiceSentences: [
        { de: 'Was hast du gestern gekauft?', ru: 'Что ты вчера купил?', note: 'Perfekt: aux на V2, Partizip в конце' },
        { de: 'Wir treffen uns bei Maria.', ru: 'Мы встречаемся у Марии.', note: 'V2, рефлексив' },
        { de: 'Ich bringe Kuchen mit.', ru: 'Я принесу торт.', note: 'отделяемая приставка в конце' },
        { de: 'Sie geht am Park vorbei.', ru: 'Она проходит мимо парка.', note: 'отделяемая приставка' },
        { de: 'Wollen wir ins Kino gehen?', ru: 'Пойдём в кино?', note: 'модальный + инфинитив в конце' },
      ],
      question: {
        de: 'Was bringt Martin mit?',
        ru: 'Что принесёт Мартин?',
        options: [
          { de: 'Popcorn und Chips', ru: 'Попкорн и чипсы' },
          { de: 'Schokolade und Bonbons', ru: 'Шоколад и конфеты' },
          { de: 'Cola und Fanta', ru: 'Колу и фанту' },
        ],
        correct: 1,
        explanation: 'Мартин говорит: "ich gehe am Kiosk vorbei und kaufe Schokolade und Bonbons" — он купит шоколад и конфеты.'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Anja Einkaufen',
      type: 'диалог',
      text: '"Anja, könntest du bitte einkaufen gehen?" "Schon wieder, Mama? Ich war doch gestern im Supermarkt." "Stimmt, aber du hast nur Fleisch und Fisch gekauft. Du solltest auch Gemüse kaufen. Das hast du leider vergessen." "Da hast du recht. Dann gehe ich jetzt noch mal."',
      sentenceTranslations: {
        '"Anja, könntest du bitte einkaufen gehen?"': { literal: 'Аня, могла бы ты пожалуйста покупать идти?', literary: 'Аня, ты могла бы сходить за покупками?' },
        '"Schon wieder, Mama?': { literal: 'Уже снова, мама?', literary: 'Опять, мама?' },
        'Ich war doch gestern im Supermarkt."': { literal: 'Я была же вчера в супермаркете', literary: 'Я же вчера была в супермаркете.' },
        '"Stimmt, aber du hast nur Fleisch und Fisch gekauft.': { literal: 'Правда, но ты имеешь только мясо и рыбу купленными', literary: 'Правда, но ты купила только мясо и рыбу.' },
        'Du solltest auch Gemüse kaufen.': { literal: 'Ты должна бы также овощи покупать', literary: 'Тебе следовало бы и овощи купить.' },
        'Das hast du leider vergessen."': { literal: 'Это имеешь ты к сожалению забытым', literary: 'Ты это, к сожалению, забыла.' },
        '"Da hast du recht.': { literal: 'Тут имеешь ты правоту', literary: 'Тут ты права.' },
        'Dann gehe ich jetzt noch mal."': { literal: 'Тогда иду я сейчас ещё раз', literary: 'Тогда я сейчас ещё раз схожу.' },
      },
      vocabulary: [
        { de: 'der Supermarkt', plural: 'die Supermärkte', ru: 'супермаркет', gender: 'maskulin', collocation: 'im Supermarkt', example: 'Ich war doch gestern im Supermarkt.' },
        { de: 'das Fleisch', ru: 'мясо', gender: 'neutrum', collocation: 'Fleisch kaufen', example: '"Stimmt, aber du hast nur Fleisch und Fisch gekauft.' },
        { de: 'der Fisch', plural: 'die Fische', ru: 'рыба', gender: 'maskulin', collocation: 'Fisch kaufen', example: '"Stimmt, aber du hast nur Fleisch und Fisch gekauft.' },
        { de: 'das Gemüse', ru: 'овощи', gender: 'neutrum', collocation: 'Gemüse kaufen', example: 'Du solltest auch Gemüse kaufen.' },
        { de: 'einkaufen gehen', ru: 'идти за покупками', type: 'verb', forms: 'geht einkaufen, ging einkaufen, ist einkaufen gegangen', example: '"Anja, könntest du bitte einkaufen gehen?"' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Das hast du leider vergessen.' },
      ],
      practiceSentences: [
        { de: 'Könntest du mir helfen?', ru: 'Ты мог бы мне помочь?', note: 'Konjunktiv II на V1' },
        { de: 'Ich war gestern zu Hause.', ru: 'Я был вчера дома.', note: 'Präteritum' },
        { de: 'Du solltest mehr lernen.', ru: 'Тебе следует больше учиться.', note: 'Konjunktiv II + инфинитив' },
        { de: 'Sie hat das Brot vergessen.', ru: 'Она забыла хлеб.', note: 'Perfekt' },
        { de: 'Gehst du heute einkaufen?', ru: 'Ты идёшь сегодня за покупками?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Was soll Anja kaufen?',
        ru: 'Что должна купить Аня?',
        options: [
          { de: 'Gemüse', ru: 'Овощи' },
          { de: 'Fleisch', ru: 'Мясо' },
          { de: 'Fisch', ru: 'Рыбу' },
        ],
        correct: 0,
        explanation: 'Мама говорит: "Du solltest auch Gemüse kaufen. Das hast du leider vergessen" — Аня забыла купить овощи.'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Stundenplan',
      type: 'диалог',
      text: '"Joachim, weißt du, was wir jetzt in der dritten Stunde haben?" "Ich glaube Geschichte oder Physik." "Nein, Geschichte haben wir in der vierten Stunde und in der fünften haben wir..." "Physik haben wir in der dritten nicht. Erdkunde?" "Nein, warte, wir haben Biologie. Erdkunde hatten wir gestern."',
      sentenceTranslations: {
        '"Joachim, weißt du, was wir jetzt in der dritten Stunde haben?"': { literal: 'Йоахим, знаешь ты, что мы сейчас в третьем уроке имеем?', literary: 'Йоахим, ты знаешь, что у нас сейчас на третьем уроке?' },
        '"Ich glaube Geschichte oder Physik."': { literal: 'Я думаю история или физика', literary: 'Думаю, история или физика.' },
        '"Nein, Geschichte haben wir in der vierten Stunde und in der fünften haben wir..."': { literal: 'Нет, историю имеем мы в четвёртом уроке и в пятом имеем мы...', literary: 'Нет, история у нас на четвёртом уроке, а на пятом у нас...' },
        '"Physik haben wir in der dritten nicht.': { literal: 'Физику имеем мы в третьем не', literary: 'Физики на третьем у нас нет.' },
        'Erdkunde?"': { literal: 'География?', literary: 'География?' },
        '"Nein, warte, wir haben Biologie.': { literal: 'Нет, подожди, мы имеем биологию', literary: 'Нет, подожди, у нас биология.' },
        'Erdkunde hatten wir gestern."': { literal: 'Географию имели мы вчера', literary: 'География была у нас вчера.' },
      },
      vocabulary: [
        { de: 'die Stunde', plural: 'die Stunden', ru: 'урок', gender: 'feminin', collocation: 'in der dritten Stunde', example: '"Joachim, weißt du, was wir jetzt in der dritten Stunde haben?"' },
        { de: 'die Geschichte', plural: 'die Geschichten', ru: 'история (предмет)', gender: 'feminin', collocation: 'Geschichte haben', example: '"Ich glaube Geschichte oder Physik."' },
        { de: 'die Physik', ru: 'физика', gender: 'feminin', collocation: 'Physik haben', example: '"Ich glaube Geschichte oder Physik."' },
        { de: 'die Erdkunde', ru: 'география', gender: 'feminin', collocation: 'Erdkunde haben', example: 'Erdkunde hatten wir gestern.' },
        { de: 'die Biologie', ru: 'биология', gender: 'feminin', collocation: 'Biologie haben', example: '"Nein, warte, wir haben Biologie.' },
        { de: 'wissen', ru: 'знать', type: 'verb', forms: 'weiß, wusste, hat gewusst', example: '"Joachim, weißt du, was wir jetzt in der dritten Stunde haben?"' },
        { de: 'glauben', ru: 'думать, полагать', type: 'verb', forms: 'glaubt, glaubte, hat geglaubt', example: '"Ich glaube Geschichte oder Physik."' },
      ],
      practiceSentences: [
        { de: 'Weißt du, wo er wohnt?', ru: 'Ты знаешь, где он живёт?', note: 'глагол в конце косвенного вопроса' },
        { de: 'Mathe haben wir morgen.', ru: 'Математика у нас завтра.', note: 'V2 после топикализации' },
        { de: 'Wir hatten gestern Sport.', ru: 'У нас вчера был спорт.', note: 'Präteritum' },
        { de: 'In der ersten Stunde schlafen viele.', ru: 'На первом уроке многие спят.', note: 'V2 после обстоятельства' },
        { de: 'Ich glaube, er kommt heute nicht.', ru: 'Думаю, он сегодня не придёт.', note: 'V2 в Hauptsatz' },
      ],
      question: {
        de: 'Was haben sie in der dritten Stunde?',
        ru: 'Что у них на третьем уроке?',
        options: [
          { de: 'Geschichte', ru: 'История' },
          { de: 'Biologie', ru: 'Биология' },
          { de: 'Physik', ru: 'Физика' },
        ],
        correct: 1,
        explanation: 'В конце диалога ученик говорит: "Nein, warte, wir haben Biologie" — у них биология на третьем уроке.'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Frankreich',
      type: 'диалог',
      text: '"Ich habe gehört, dass du dieses Jahr nach Frankreich fährst. Stimmt\'s?" "Ja, du weißt doch, dass ich schon immer dahin wollte." "Hast du schon Flugtickets gebucht?" "Ich werde nicht fliegen. Ich habe gedacht, dass es schöner wäre, wenn ich mit dem Bus fahre. Dann kann ich auch mehr sehen." "Und warum fährst du nicht mit dem Auto?" "Das ist viel zu teuer." "Dann wünsche ich dir schöne Ferien!"',
      sentenceTranslations: {
        '"Ich habe gehört, dass du dieses Jahr nach Frankreich fährst.': { literal: 'Я имею услышанным, что ты этот год во Францию едешь', literary: 'Я слышал, что ты в этом году едешь во Францию.' },
        'Stimmt\'s?"': { literal: 'Правда это?', literary: 'Это правда?' },
        '"Ja, du weißt doch, dass ich schon immer dahin wollte."': { literal: 'Да, ты знаешь же, что я уже всегда туда хотел', literary: 'Да, ты же знаешь, что я всегда туда хотел.' },
        '"Hast du schon Flugtickets gebucht?"': { literal: 'Имеешь ты уже билеты на самолёт забронированными?', literary: 'Ты уже забронировал билеты на самолёт?' },
        '"Ich werde nicht fliegen.': { literal: 'Я буду не летать', literary: 'Я не полечу.' },
        'Ich habe gedacht, dass es schöner wäre, wenn ich mit dem Bus fahre.': { literal: 'Я имею думанным, что это красивее было бы, если я с автобусом еду', literary: 'Я подумал, что было бы лучше, если поеду на автобусе.' },
        'Dann kann ich auch mehr sehen."': { literal: 'Тогда могу я также больше видеть', literary: 'Тогда я смогу больше увидеть.' },
        '"Und warum fährst du nicht mit dem Auto?"': { literal: 'И почему едешь ты не с машиной?', literary: 'А почему ты не едешь на машине?' },
        '"Das ist viel zu teuer."': { literal: 'Это есть намного слишком дорого', literary: 'Это слишком дорого.' },
        '"Dann wünsche ich dir schöne Ferien!"': { literal: 'Тогда желаю я тебе красивые каникулы!', literary: 'Тогда желаю тебе хороших каникул!' },
      },
      vocabulary: [
        { de: 'das Flugticket', plural: 'die Flugtickets', ru: 'билет на самолёт', gender: 'neutrum', collocation: 'Flugtickets buchen', example: '"Hast du schon Flugtickets gebucht?"' },
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'mit dem Bus fahren', example: 'Ich habe gedacht, dass es schöner wäre, wenn ich mit dem Bus fahre.' },
        { de: 'die Ferien', ru: 'каникулы', gender: 'feminin', collocation: 'schöne Ferien', example: '"Dann wünsche ich dir schöne Ferien!"' },
        { de: 'fahren', ru: 'ехать', type: 'verb', forms: 'fährt, fuhr, ist gefahren', example: '"Ich habe gehört, dass du dieses Jahr nach Frankreich fährst.' },
        { de: 'buchen', ru: 'бронировать', type: 'verb', forms: 'bucht, buchte, hat gebucht', example: '"Hast du schon Flugtickets gebucht?"' },
        { de: 'fliegen', ru: 'лететь', type: 'verb', forms: 'fliegt, flog, ist geflogen', example: '"Ich werde nicht fliegen.' },
        { de: 'wünschen', ru: 'желать', type: 'verb', forms: 'wünscht, wünschte, hat gewünscht', example: '"Dann wünsche ich dir schöne Ferien!"' },
      ],
      practiceSentences: [
        { de: 'Ich fahre nach Italien.', ru: 'Я еду в Италию.', note: 'V2' },
        { de: 'Er hat gesagt, dass er kommt.', ru: 'Он сказал, что придёт.', note: 'глагол в конце dass-Satz' },
        { de: 'Wir fahren mit dem Zug.', ru: 'Мы едем на поезде.', note: 'V2' },
        { de: 'Das ist zu schwer für mich.', ru: 'Это слишком сложно для меня.', note: 'V2' },
        { de: 'Ich werde morgen arbeiten.', ru: 'Я буду работать завтра.', note: 'Futur I' },
      ],
      question: {
        de: 'Womit fährt die Person nach Frankreich?',
        ru: 'На чём человек поедет во Францию?',
        options: [
          { de: 'Mit dem Auto', ru: 'На машине' },
          { de: 'Mit dem Bus', ru: 'На автобусе' },
          { de: 'Mit dem Flugzeug', ru: 'На самолёте' },
        ],
        correct: 1,
        explanation: 'Человек говорит: "Ich habe gedacht, dass es schöner wäre, wenn ich mit dem Bus fahre" — он поедет на автобусе.'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Jens Frühstück',
      type: 'диалог',
      text: '"Jens, möchtest du zum Frühstück außer Milch auch ein Ei?" "Mama, ich habe keinen Hunger. Ich möchte nicht frühstücken." "Du musst aber etwas essen. Ich koche dir ein Ei und dazu trinkst du auch ein Glas Milch. Ein Brötchen mit Käse und Wurst bekommst du auch." "Ich hätte lieber einen Kakao. Das Brötchen nehme ich mit und esse in der Pause."',
      sentenceTranslations: {
        '"Jens, möchtest du zum Frühstück außer Milch auch ein Ei?"': { literal: 'Йенс, хотел бы ты к завтраку кроме молока также яйцо?', literary: 'Йенс, ты хочешь на завтрак кроме молока ещё и яйцо?' },
        '"Mama, ich habe keinen Hunger.': { literal: 'Мама, я имею никакой голод', literary: 'Мама, я не голоден.' },
        'Ich möchte nicht frühstücken."': { literal: 'Я хотел бы не завтракать', literary: 'Я не хочу завтракать.' },
        '"Du musst aber etwas essen.': { literal: 'Ты должен однако что-то есть', literary: 'Но ты должен что-то поесть.' },
        'Ich koche dir ein Ei und dazu trinkst du auch ein Glas Milch.': { literal: 'Я варю тебе яйцо и к-тому пьёшь ты также стакан молока', literary: 'Я сварю тебе яйцо, и к нему ты выпьешь стакан молока.' },
        'Ein Brötchen mit Käse und Wurst bekommst du auch."': { literal: 'Булочку с сыром и колбасой получаешь ты тоже', literary: 'Булочку с сыром и колбасой тоже получишь.' },
        '"Ich hätte lieber einen Kakao.': { literal: 'Я имел бы лучше какао', literary: 'Я лучше выпью какао.' },
        'Das Brötchen nehme ich mit und esse in der Pause."': { literal: 'Булочку беру я с-собой и ем в паузе', literary: 'Булочку я возьму с собой и съем на перемене.' },
      },
      vocabulary: [
        { de: 'das Frühstück', plural: 'die Frühstücke', ru: 'завтрак', gender: 'neutrum', collocation: 'zum Frühstück', example: '"Jens, möchtest du zum Frühstück außer Milch auch ein Ei?"' },
        { de: 'das Ei', plural: 'die Eier', ru: 'яйцо', gender: 'neutrum', collocation: 'ein Ei kochen', example: '"Jens, möchtest du zum Frühstück außer Milch auch ein Ei?"' },
        { de: 'der Hunger', ru: 'голод', gender: 'maskulin', collocation: 'keinen Hunger haben', example: '"Mama, ich habe keinen Hunger.' },
        { de: 'das Brötchen', plural: 'die Brötchen', ru: 'булочка', gender: 'neutrum', collocation: 'ein Brötchen mit Käse', example: 'Das Brötchen nehme ich mit und esse in der Pause.' },
        { de: 'der Kakao', plural: 'die Kakaos', ru: 'какао', gender: 'maskulin', collocation: 'einen Kakao trinken', example: '"Ich hätte lieber einen Kakao.' },
        { de: 'die Pause', plural: 'die Pausen', ru: 'перемена', gender: 'feminin', collocation: 'in der Pause essen', example: 'Das Brötchen nehme ich mit und esse in der Pause.' },
        { de: 'frühstücken', ru: 'завтракать', type: 'verb', forms: 'frühstückt, frühstückte, hat gefrühstückt', example: 'Ich möchte nicht frühstücken.' },
        { de: 'kochen', ru: 'готовить, варить', type: 'verb', forms: 'kocht, kochte, hat gekocht', example: 'Ich koche dir ein Ei und dazu trinkst du auch ein Glas Milch.' },
        { de: 'mitnehmen', ru: 'брать с собой', type: 'verb', forms: 'nimmt mit, nahm mit, hat mitgenommen', example: 'Das Brötchen nehme ich mit und esse in der Pause.' },
      ],
      practiceSentences: [
        { de: 'Möchtest du Tee oder Kaffee?', ru: 'Хочешь чай или кофе?', note: 'модальный на V1' },
        { de: 'Ich habe keinen Durst.', ru: 'Я не хочу пить.', note: 'V2' },
        { de: 'Du musst früh aufstehen.', ru: 'Ты должен рано встать.', note: 'модальный + инфинитив' },
        { de: 'Ich nehme das Buch mit.', ru: 'Я возьму книгу с собой.', note: 'отделяемая приставка' },
        { de: 'Er isst in der Schule.', ru: 'Он ест в школе.', note: 'V2' },
      ],
      question: {
        de: 'Was will Jens trinken?',
        ru: 'Что хочет пить Йенс?',
        options: [
          { de: 'Milch', ru: 'Молоко' },
          { de: 'Kakao', ru: 'Какао' },
          { de: 'Nichts', ru: 'Ничего' },
        ],
        correct: 1,
        explanation: 'Йенс говорит: "Ich hätte lieber einen Kakao" — он предпочитает какао.'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Schulbasar',
      type: 'диалог',
      text: '"Julia, ich glaube, dass wir auf dem Schulbasar Musicalfilme verkaufen sollten. Ich habe einige zu Hause, die habe ich schon gesehen und die sind wirklich gut." "Keine schlechte Idee, aber Computerspiele sind interessanter." "Oder... ja, für Jungs. Mädchen kaufen so etwas bestimmt nicht." "Da hast du recht. Warte, ich hab\'s: Bücher! Die sind doch für alle gut. Musicalfilme mögen die Jungs nicht und Computerspiele die Mädchen. Ich glaube, das ist das Richtige."',
      sentenceTranslations: {
        '"Julia, ich glaube, dass wir auf dem Schulbasar Musicalfilme verkaufen sollten.': { literal: 'Юлия, я думаю, что мы на школьном базаре мюзикл-фильмы продавать должны бы', literary: 'Юлия, я думаю, нам стоит продавать на школьном базаре мюзиклы.' },
        'Ich habe einige zu Hause, die habe ich schon gesehen und die sind wirklich gut."': { literal: 'Я имею некоторые дома, те имею я уже виденными и те есть действительно хорошие', literary: 'У меня есть несколько дома, я их уже видела, и они действительно хорошие.' },
        '"Keine schlechte Idee, aber Computerspiele sind interessanter."': { literal: 'Никакая плохая идея, но компьютерные игры есть интереснее', literary: 'Неплохая идея, но компьютерные игры интереснее.' },
        '"Oder... ja, für Jungs.': { literal: 'Или... да, для мальчиков', literary: 'Или... да, для мальчиков.' },
        'Mädchen kaufen so etwas bestimmt nicht."': { literal: 'Девочки покупают такое нечто точно не', literary: 'Девочки такое точно не покупают.' },
        '"Da hast du recht.': { literal: 'Тут имеешь ты правоту', literary: 'Тут ты прав.' },
        'Warte, ich hab\'s: Bücher!': { literal: 'Подожди, я имею это: книги!', literary: 'Подожди, придумала: книги!' },
        'Die sind doch für alle gut.': { literal: 'Те есть же для всех хорошие', literary: 'Они ведь хороши для всех.' },
        'Musicalfilme mögen die Jungs nicht und Computerspiele die Mädchen.': { literal: 'Мюзикл-фильмы нравятся мальчикам не и компьютерные игры девочкам', literary: 'Мюзиклы не нравятся мальчикам, а компьютерные игры — девочкам.' },
        'Ich glaube, das ist das Richtige."': { literal: 'Я думаю, это есть правильное', literary: 'Думаю, это то, что нужно.' },
      },
      vocabulary: [
        { de: 'der Schulbasar', plural: 'die Schulbasare', ru: 'школьный базар', gender: 'maskulin', collocation: 'auf dem Schulbasar', example: '"Julia, ich glaube, dass wir auf dem Schulbasar Musicalfilme verkaufen sollten.' },
        { de: 'das Computerspiel', plural: 'die Computerspiele', ru: 'компьютерная игра', gender: 'neutrum', collocation: 'Computerspiele sind interessant', example: '"Keine schlechte Idee, aber Computerspiele sind interessanter."' },
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', collocation: 'Bücher verkaufen', example: 'Warte, ich hab\'s: Bücher!' },
        { de: 'die Idee', plural: 'die Ideen', ru: 'идея', gender: 'feminin', collocation: 'keine schlechte Idee', example: '"Keine schlechte Idee, aber Computerspiele sind interessanter."' },
        { de: 'verkaufen', ru: 'продавать', type: 'verb', forms: 'verkauft, verkaufte, hat verkauft', example: '"Julia, ich glaube, dass wir auf dem Schulbasar Musicalfilme verkaufen sollten.' },
        { de: 'mögen', ru: 'нравиться, любить', type: 'verb', forms: 'mag, mochte, hat gemocht', example: 'Musicalfilme mögen die Jungs nicht und Computerspiele die Mädchen.' },
      ],
      practiceSentences: [
        { de: 'Wir sollten früher kommen.', ru: 'Нам следует прийти раньше.', note: 'Konjunktiv II' },
        { de: 'Das Buch ist interessanter als der Film.', ru: 'Книга интереснее фильма.', note: 'V2' },
        { de: 'So etwas mag ich nicht.', ru: 'Такое мне не нравится.', note: 'V2' },
        { de: 'Sie kauft bestimmt das rote Kleid.', ru: 'Она точно купит красное платье.', note: 'V2' },
        { de: 'Ich hab\'s gefunden!', ru: 'Я нашёл!', note: 'Perfekt в разговорной форме' },
      ],
      question: {
        de: 'Was werden sie verkaufen?',
        ru: 'Что они будут продавать?',
        options: [
          { de: 'Musicalfilme', ru: 'Мюзиклы' },
          { de: 'Bücher', ru: 'Книги' },
          { de: 'Computerspiele', ru: 'Компьютерные игры' },
        ],
        correct: 1,
        explanation: 'В конце диалога решают: "Warte, ich hab\'s: Bücher! Die sind doch für alle gut... Ich glaube, das ist das Richtige" — они будут продавать книги.'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Dr. Hellmann',
      type: 'интервью',
      text: '"Dr. Hellmann, Sie waren schon mehrmals Gast in unserer Sendung \'Mensch und Gesundheit\'. Willkommen also auch heute bei uns!" "Guten Abend!" "Unser Thema heute ist der Schlaf. Wie wichtig ist der Schlaf für uns Menschen?" "Tja, wissenschaftliche Untersuchungen haben gezeigt, dass alle Menschen, vor allem aber Kinder und Jugendliche, genug Schlaf brauchen." "Was bedeutet denn \'genug Schlaf\'?" "So genau kann man das nicht sagen. Bei jedem Menschen ist das anders. Kinder und Jugendliche brauchen aber auf jeden Fall mehr Schlaf als Erwachsene." "Tatsächlich? Wie viel denn?" "Wissenschaftler glauben, dass sechs bis acht Stunden Schlaf für Erwachsene genug sind. Kinder brauchen etwa acht bis zehn Stunden, um gesund zu bleiben." "Das sind ja ziemlich genaue Angaben. Und was passiert, wenn Kinder und Jugendliche nicht genug schlafen?" "Oft können sich dann die Jugendlichen in der Schule nicht konzentrieren oder haben Kopfschmerzen. Sie fühlen sich einfach schwach." "Können Sie sagen, was wichtig für einen gesunden Schlaf ist?" "Wichtig ist, dass man immer zur gleichen Zeit schlafen geht und vor dem Schlafengehen nicht fernsieht oder Computerspiele macht." "Gibt es auch konkrete Tipps, die das Schlafzimmer betreffen?" "Das Schlafzimmer muss vor allem recht groß sein, wie auch das Bett. Am wichtigsten ist aber, dass man bei geöffnetem Fenster schläft." "Das Fenster nicht schließen? Okay, das ist nicht neu. Das kenne ich von meinen Großeltern." "Das ist in der Tat einer der ältesten und nützlichsten Tipps für einen gesunden Schlaf." "Dr. Hellmann, herzlichen Dank für das Interview! Bis nächste Woche mit dem Thema \'Wie ernähren sich Jugendliche heute?\'"',
      sentenceTranslations: {
        '"Dr. Hellmann, Sie waren schon mehrmals Gast in unserer Sendung \'Mensch und Gesundheit\'.': { literal: 'Доктор Хельман, Вы были уже несколько раз гостем в нашей передаче "Человек и Здоровье"', literary: 'Доктор Хельман, Вы уже неоднократно были гостем нашей передачи "Человек и Здоровье".' },
        'Willkommen also auch heute bei uns!"': { literal: 'Добро пожаловать итак также сегодня у нас!', literary: 'Добро пожаловать и сегодня к нам!' },
        '"Guten Abend!"': { literal: 'Добрый вечер!', literary: 'Добрый вечер!' },
        '"Unser Thema heute ist der Schlaf.': { literal: 'Наша тема сегодня есть сон', literary: 'Наша тема сегодня — сон.' },
        'Wie wichtig ist der Schlaf für uns Menschen?"': { literal: 'Как важен есть сон для нас людей?', literary: 'Насколько важен сон для нас, людей?' },
        '"Tja, wissenschaftliche Untersuchungen haben gezeigt, dass alle Menschen, vor allem aber Kinder und Jugendliche, genug Schlaf brauchen."': { literal: 'Ну, научные исследования имеют показанным, что все люди, прежде всего но дети и подростки, достаточно сна нуждаются', literary: 'Что ж, научные исследования показали, что всем людям, и прежде всего детям и подросткам, нужен достаточный сон.' },
        '"Was bedeutet denn \'genug Schlaf\'?"': { literal: 'Что означает же "достаточно сна"?', literary: 'А что значит "достаточно сна"?' },
        '"So genau kann man das nicht sagen.': { literal: 'Так точно может человек это не сказать', literary: 'Точно это сказать нельзя.' },
        'Bei jedem Menschen ist das anders.': { literal: 'У каждого человека есть это иначе', literary: 'У каждого человека это индивидуально.' },
        'Kinder und Jugendliche brauchen aber auf jeden Fall mehr Schlaf als Erwachsene."': { literal: 'Дети и подростки нуждаются однако в каждом случае больше сна чем взрослые', literary: 'Но детям и подросткам однозначно нужно больше сна, чем взрослым.' },
        '"Tatsächlich?': { literal: 'Действительно?', literary: 'Действительно?' },
        'Wie viel denn?"': { literal: 'Как много же?', literary: 'А сколько?' },
        '"Wissenschaftler glauben, dass sechs bis acht Stunden Schlaf für Erwachsene genug sind.': { literal: 'Учёные считают, что шесть до восемь часов сна для взрослых достаточно есть', literary: 'Учёные считают, что шести-восьми часов сна для взрослых достаточно.' },
        'Kinder brauchen etwa acht bis zehn Stunden, um gesund zu bleiben."': { literal: 'Дети нуждаются примерно восемь до десять часов, чтобы здоровыми оставаться', literary: 'Детям нужно около 8-10 часов, чтобы оставаться здоровыми.' },
        '"Das sind ja ziemlich genaue Angaben.': { literal: 'Это есть же довольно точные данные', literary: 'Это довольно точные данные.' },
        'Und was passiert, wenn Kinder und Jugendliche nicht genug schlafen?"': { literal: 'И что происходит, когда дети и подростки не достаточно спят?', literary: 'И что происходит, если дети и подростки недостаточно спят?' },
        '"Oft können sich dann die Jugendlichen in der Schule nicht konzentrieren oder haben Kopfschmerzen.': { literal: 'Часто могут себя тогда подростки в школе не концентрировать или имеют головные боли', literary: 'Часто подростки не могут сосредоточиться в школе или у них болит голова.' },
        'Sie fühlen sich einfach schwach."': { literal: 'Они чувствуют себя просто слабыми', literary: 'Они просто чувствуют себя слабыми.' },
        '"Können Sie sagen, was wichtig für einen gesunden Schlaf ist?"': { literal: 'Можете Вы сказать, что важно для здорового сна есть?', literary: 'Можете сказать, что важно для здорового сна?' },
        '"Wichtig ist, dass man immer zur gleichen Zeit schlafen geht und vor dem Schlafengehen nicht fernsieht oder Computerspiele macht."': { literal: 'Важно есть, что человек всегда к одинаковому времени спать идёт и перед засыпанием не телевизор-смотрит или компьютерные игры делает', literary: 'Важно всегда ложиться спать в одно и то же время и не смотреть телевизор или играть в компьютерные игры перед сном.' },
        '"Gibt es auch konkrete Tipps, die das Schlafzimmer betreffen?"': { literal: 'Даёт оно также конкретные советы, которые спальню касаются?', literary: 'Есть ли также конкретные советы относительно спальни?' },
        '"Das Schlafzimmer muss vor allem recht groß sein, wie auch das Bett.': { literal: 'Спальня должна прежде всего довольно большой быть, как также кровать', literary: 'Спальня должна быть достаточно большой, как и кровать.' },
        'Am wichtigsten ist aber, dass man bei geöffnetem Fenster schläft."': { literal: 'Наиважнейшее есть однако, что человек при открытом окне спит', literary: 'Но самое важное — спать при открытом окне.' },
        '"Das Fenster nicht schließen?': { literal: 'Окно не закрывать?', literary: 'Окно не закрывать?' },
        'Okay, das ist nicht neu.': { literal: 'Окей, это есть не ново', literary: 'Ладно, это не ново.' },
        'Das kenne ich von meinen Großeltern."': { literal: 'Это знаю я от моих бабушки-и-дедушки', literary: 'Это я знаю от своих бабушки и дедушки.' },
        '"Das ist in der Tat einer der ältesten und nützlichsten Tipps für einen gesunden Schlaf."': { literal: 'Это есть на деле один из старейших и полезнейших советов для здорового сна', literary: 'Это действительно один из старейших и самых полезных советов для здорового сна.' },
        '"Dr. Hellmann, herzlichen Dank für das Interview!': { literal: 'Доктор Хельман, сердечную благодарность за интервью!', literary: 'Доктор Хельман, сердечно благодарим за интервью!' },
        'Bis nächste Woche mit dem Thema \'Wie ernähren sich Jugendliche heute?\'"': { literal: 'До следующей недели с темой "Как питаются себя подростки сегодня?"', literary: 'До следующей недели с темой "Как питаются подростки сегодня?"' },
      },
      vocabulary: [
        { de: 'der Gast', plural: 'die Gäste', ru: 'гость', gender: 'maskulin', collocation: 'Gast in unserer Sendung', example: '"Dr. Hellmann, Sie waren schon mehrmals Gast in unserer Sendung \'Mensch und Gesundheit\'.' },
        { de: 'die Sendung', plural: 'die Sendungen', ru: 'передача', gender: 'feminin', collocation: 'in unserer Sendung', example: '"Dr. Hellmann, Sie waren schon mehrmals Gast in unserer Sendung \'Mensch und Gesundheit\'.' },
        { de: 'die Gesundheit', ru: 'здоровье', gender: 'feminin', collocation: 'Mensch und Gesundheit', example: '"Dr. Hellmann, Sie waren schon mehrmals Gast in unserer Sendung \'Mensch und Gesundheit\'.' },
        { de: 'der Schlaf', ru: 'сон', gender: 'maskulin', collocation: 'genug Schlaf brauchen', example: 'Wie wichtig ist der Schlaf für uns Menschen?' },
        { de: 'die Untersuchung', plural: 'die Untersuchungen', ru: 'исследование', gender: 'feminin', collocation: 'wissenschaftliche Untersuchungen', example: '"Tja, wissenschaftliche Untersuchungen haben gezeigt, dass alle Menschen, vor allem aber Kinder und Jugendliche, genug Schlaf brauchen."' },
        { de: 'der/die Jugendliche', plural: 'die Jugendlichen', ru: 'подросток', gender: 'maskulin', collocation: 'Kinder und Jugendliche', example: '"Tja, wissenschaftliche Untersuchungen haben gezeigt, dass alle Menschen, vor allem aber Kinder und Jugendliche, genug Schlaf brauchen."' },
        { de: 'der/die Erwachsene', plural: 'die Erwachsenen', ru: 'взрослый', gender: 'maskulin', collocation: 'mehr Schlaf als Erwachsene', example: 'Kinder und Jugendliche brauchen aber auf jeden Fall mehr Schlaf als Erwachsene.' },
        { de: 'der Kopfschmerz', plural: 'die Kopfschmerzen', ru: 'головная боль', gender: 'maskulin', collocation: 'Kopfschmerzen haben', example: '"Oft können sich dann die Jugendlichen in der Schule nicht konzentrieren oder haben Kopfschmerzen.' },
        { de: 'das Schlafzimmer', plural: 'die Schlafzimmer', ru: 'спальня', gender: 'neutrum', collocation: 'das Schlafzimmer muss groß sein', example: '"Das Schlafzimmer muss vor allem recht groß sein, wie auch das Bett.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'konkrete Tipps', example: '"Gibt es auch konkrete Tipps, die das Schlafzimmer betreffen?"' },
        { de: 'zeigen', ru: 'показывать', type: 'verb', forms: 'zeigt, zeigte, hat gezeigt', example: '"Tja, wissenschaftliche Untersuchungen haben gezeigt, dass alle Menschen, vor allem aber Kinder und Jugendliche, genug Schlaf brauchen."' },
        { de: 'sich konzentrieren', ru: 'концентрироваться', type: 'verb', forms: 'konzentriert sich, konzentrierte sich, hat sich konzentriert', example: '"Oft können sich dann die Jugendlichen in der Schule nicht konzentrieren oder haben Kopfschmerzen.' },
        { de: 'sich fühlen', ru: 'чувствовать себя', type: 'verb', forms: 'fühlt sich, fühlte sich, hat sich gefühlt', example: 'Sie fühlen sich einfach schwach.' },
        { de: 'fernsehen', ru: 'смотреть телевизор', type: 'verb', forms: 'sieht fern, sah fern, hat ferngesehen', example: '"Wichtig ist, dass man immer zur gleichen Zeit schlafen geht und vor dem Schlafengehen nicht fernsieht oder Computerspiele macht."' },
      ],
      practiceSentences: [
        { de: 'Er war gestern Gast bei uns.', ru: 'Он был вчера у нас в гостях.', note: 'Präteritum' },
        { de: 'Studien haben gezeigt, dass Sport wichtig ist.', ru: 'Исследования показали, что спорт важен.', note: 'Perfekt + dass-Satz' },
        { de: 'Man muss früh schlafen gehen.', ru: 'Нужно рано ложиться спать.', note: 'модальный + инфинитив' },
        { de: 'Ich lerne, um besser zu werden.', ru: 'Я учусь, чтобы стать лучше.', note: 'um...zu конструкция' },
        { de: 'Das Wichtigste ist Gesundheit.', ru: 'Самое важное — здоровье.', note: 'V2 с предикативом' },
      ],
      question: {
        de: 'Kinder und Jugendliche brauchen weniger Schlaf als Erwachsene.',
        ru: 'Дети и подростки нуждаются в меньшем количестве сна, чем взрослые.',
        options: [
          { de: 'Ja', ru: 'Да' },
          { de: 'Nein', ru: 'Нет' },
        ],
        correct: 1,
        explanation: 'Доктор Хельман говорит: "Kinder und Jugendliche brauchen aber auf jeden Fall mehr Schlaf als Erwachsene" — дети и подростки нуждаются в большем количестве сна.'
      }
    },
  ],

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
    title: 'ОДИН ДЕНЬ В ШКОЛЕ И ДОМА',
    text: 'Согласно {0}, мальчики больше всего интересуются футболом. Новый {1} начинается через неделю, и в магазине можно купить тетради по выгодным {2}. У мальчика есть собственная комната, но ему ещё нужен {3}. На Рождество он получает много {4}. За покупками он ходит в маленький {5} за углом. Вечером друзья {6} у Кристины смотреть фильмы. Аня забыла купить {7} в супермаркете. На третьем уроке у них {8}. Друг едет во Францию на {9}. Йенс не голоден и хочет {10} вместо молока. На школьном базаре решили продавать {11}. Доктор Хельман говорит, что для здорового {12} важно спать при открытом окне.',
    blanks: [
      { answer: 'einer Umfrage', hint: 'опрос (die Umfrage, Dat.)' },
      { answer: 'das Schuljahr', hint: 'учебный год (das Schuljahr)' },
      { answer: 'Preisen', hint: 'цены (der Preis, Dat. Pl.)' },
      { answer: 'der Kleiderschrank', hint: 'платяной шкаф (der Kleiderschrank)' },
      { answer: 'Geschenke', hint: 'подарки (das Geschenk, Pl.)' },
      { answer: 'den Laden', hint: 'магазин (der Laden, Akk.)' },
      { answer: 'treffen sich', hint: 'встречаются (sich treffen)' },
      { answer: 'das Gemüse', hint: 'овощи (das Gemüse)' },
      { answer: 'Biologie', hint: 'биология (die Biologie)' },
      { answer: 'dem Bus', hint: 'автобус (der Bus, Dat.)' },
      { answer: 'einen Kakao', hint: 'какао (der Kakao, Akk.)' },
      { answer: 'Bücher', hint: 'книги (das Buch, Pl.)' },
      { answer: 'Schlafes', hint: 'сон (der Schlaf, Gen.)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Umfrage Sport).',
    },
  },
};
LESSONS.push(LESSON_19);
