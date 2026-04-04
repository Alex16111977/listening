/* ═══════════════════════════════════════════════════════════
   Lesson 04 — Goethe Zertifikat A2 Hören Modelltest 4
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_04 = {
  id: 'lesson-04',
  number: 4,
  title: 'Goethe A2 Hören — Modelltest 4',
  subtitle: 'Paula sagt ab, Tipps fürs Wochenende, Souvenirs aus Kiel und Interview mit Fanny',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-04',
  videoUrl: 'https://www.youtube.com/watch?v=Ni-yqg7_-FI',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Paula',
      type: 'телефонное сообщение',
      text: 'Hallo Britta, hier ist Paula. Es tut mir echt leid, aber ich kann heute Abend doch nicht. Meine Mutter hat mich gerade angerufen. Sie ist sehr erkältet und ich muss heute zu ihr. Ich fahre gleich nach der Arbeit hin. Ich ruf dich morgen an, ok? Bis dann.',
      sentenceTranslations: {
        'Hallo Britta, hier ist Paula.': { literal: 'Привет Бритта, здесь есть Паула', literary: 'Привет, Бритта, это Паула.' },
        'Es tut mir echt leid, aber ich kann heute Abend doch nicht.': { literal: 'Это делает мне действительно жаль, но я могу сегодня вечером всё же не', literary: 'Мне очень жаль, но я не смогу сегодня вечером.' },
        'Meine Mutter hat mich gerade angerufen.': { literal: 'Моя мать имеет меня только что позвонила', literary: 'Моя мама только что мне позвонила.' },
        'Sie ist sehr erkältet und ich muss heute zu ihr.': { literal: 'Она есть очень простужена и я должен сегодня к ней', literary: 'Она сильно простужена, и я должна сегодня к ней поехать.' },
        'Ich fahre gleich nach der Arbeit hin.': { literal: 'Я еду сразу после работы туда', literary: 'Я поеду сразу после работы.' },
        'Ich ruf dich morgen an, ok?': { literal: 'Я звоню тебе завтра, ок?', literary: 'Я позвоню тебе завтра, хорошо?' },
        'Bis dann.': { literal: 'До тогда', literary: 'До скорого.' },
      },
      vocabulary: [
        { de: 'der Abend', plural: 'die Abende', ru: 'вечер', gender: 'maskulin', example: 'Ich kann heute Abend doch nicht.' },
        { de: 'die Mutter', plural: 'die Mütter', ru: 'мать, мама', gender: 'feminin', example: 'Meine Mutter hat mich gerade angerufen.' },
        { de: 'die Arbeit', plural: 'die Arbeiten', ru: 'работа', gender: 'feminin', example: 'Ich fahre gleich nach der Arbeit hin.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'rufe an, rief an, hat angerufen', example: 'Meine Mutter hat mich gerade angerufen.' },
        { de: 'erkältet', ru: 'простуженный', type: 'adj', example: 'Sie ist sehr erkältet.' },
        { de: 'gleich', ru: 'сразу, тотчас', type: 'adv', example: 'Ich fahre gleich nach der Arbeit hin.' },
      ],
      practiceSentences: [
        { de: 'Es tut mir sehr leid.', ru: 'Мне очень жаль.', note: 'безличное es' },
        { de: 'Ich rufe dich später an.', ru: 'Я позвоню тебе позже.', note: 'отделяемая приставка an' },
        { de: 'Sie hat mich gestern angerufen.', ru: 'Она позвонила мне вчера.', note: 'Perfekt: hat + Partizip' },
        { de: 'Ich muss heute zu ihm.', ru: 'Я должен к нему сегодня.', note: 'модальный muss V2' },
        { de: 'Ich fahre nach Hause.', ru: 'Я еду домой.', note: 'V2 простой глагол' },
      ],
      question: {
        de: 'Warum kann Paula heute Abend nicht kommen?',
        ru: 'Почему Паула не может прийти сегодня вечером?',
        options: [
          { de: 'Sie muss arbeiten', ru: 'Она должна работать' },
          { de: 'Ihre Mutter ist krank', ru: 'Её мама больна' },
          { de: 'Sie hat einen anderen Termin', ru: 'У неё другая встреча' },
        ],
        correct: 1,
        explanation: 'Паула говорит: "Meine Mutter hat mich gerade angerufen. Sie ist sehr erkältet und ich muss heute zu ihr."'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Wochenend-Tipps',
      type: 'радио-объявление',
      text: 'Und jetzt noch unsere Tipps für das Wochenende. Alle Musikfans sollten am Samstag in den Stadtpark kommen. Dort singt Benny Beau mit seiner Band. Der Eintritt ist kostenlos. Der große Fußballwettbewerb findet erst eine Woche später statt. Aber am Sonntag beginnt die große Sportmesse in der Otto-Halle. Weitere Informationen finden Sie im Internet.',
      sentenceTranslations: {
        'Und jetzt noch unsere Tipps für das Wochenende.': { literal: 'И сейчас ещё наши советы для выходных', literary: 'А теперь наши советы на выходные.' },
        'Alle Musikfans sollten am Samstag in den Stadtpark kommen.': { literal: 'Все музыкальные фанаты должны бы в субботу в городской парк прийти', literary: 'Всем любителям музыки стоит прийти в субботу в городской парк.' },
        'Dort singt Benny Beau mit seiner Band.': { literal: 'Там поёт Бенни Бо с его группой', literary: 'Там выступает Бенни Бо со своей группой.' },
        'Der Eintritt ist kostenlos.': { literal: 'Вход есть бесплатный', literary: 'Вход бесплатный.' },
        'Der große Fußballwettbewerb findet erst eine Woche später statt.': { literal: 'Большое футбольное соревнование находит только неделю позже место', literary: 'Большой футбольный турнир состоится только через неделю.' },
        'Aber am Sonntag beginnt die große Sportmesse in der Otto-Halle.': { literal: 'Но в воскресенье начинает большая спортивная выставка в Отто-зале', literary: 'Но в воскресенье начинается большая спортивная выставка в Отто-холле.' },
        'Weitere Informationen finden Sie im Internet.': { literal: 'Дальнейшие информации находите Вы в интернете', literary: 'Дополнительную информацию вы найдёте в интернете.' },
      },
      vocabulary: [
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', example: 'Und jetzt noch unsere Tipps für das Wochenende.' },
        { de: 'der Stadtpark', plural: 'die Stadtparks', ru: 'городской парк', gender: 'maskulin', example: 'Alle Musikfans sollten am Samstag in den Stadtpark kommen.' },
        { de: 'die Band', plural: 'die Bands', ru: 'музыкальная группа', gender: 'feminin', example: 'Dort singt Benny Beau mit seiner Band.' },
        { de: 'der Eintritt', plural: 'die Eintritte', ru: 'вход, входная плата', gender: 'maskulin', example: 'Der Eintritt ist kostenlos.' },
        { de: 'die Sportmesse', plural: 'die Sportmessen', ru: 'спортивная выставка', gender: 'feminin', example: 'Aber am Sonntag beginnt die große Sportmesse in der Otto-Halle.' },
        { de: 'stattfinden', ru: 'состояться', type: 'verb', forms: 'findet statt, fand statt, hat stattgefunden', example: 'Der große Fußballwettbewerb findet erst eine Woche später statt.' },
        { de: 'beginnen', ru: 'начинаться', type: 'verb', forms: 'beginnt, begann, hat begonnen', example: 'Aber am Sonntag beginnt die große Sportmesse in der Otto-Halle.' },
        { de: 'kostenlos', ru: 'бесплатный', type: 'adj', example: 'Der Eintritt ist kostenlos.' },
      ],
      practiceSentences: [
        { de: 'Du solltest ins Kino kommen.', ru: 'Тебе стоит прийти в кино.', note: 'модальный solltest + инфинитив' },
        { de: 'Das Konzert findet morgen statt.', ru: 'Концерт состоится завтра.', note: 'отделяемая приставка statt' },
        { de: 'Er singt mit seiner Schwester.', ru: 'Он поёт со своей сестрой.', note: 'V2 простой глагол' },
        { de: 'Der Bus ist kostenlos.', ru: 'Автобус бесплатный.', note: 'V2 глагол-связка' },
        { de: 'Die Party beginnt um acht.', ru: 'Вечеринка начинается в восемь.', note: 'V2 простой глагол' },
      ],
      question: {
        de: 'Was findet am Sonntag statt?',
        ru: 'Что происходит в воскресенье?',
        options: [
          { de: 'Ein Konzert im Stadtpark', ru: 'Концерт в городском парке' },
          { de: 'Ein Fußballwettbewerb', ru: 'Футбольный турнир' },
          { de: 'Eine Sportmesse', ru: 'Спортивная выставка' },
        ],
        correct: 2,
        explanation: 'В объявлении говорится: "aber am Sonntag beginnt die große Sportmesse in der Otto-Halle."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Leon',
      type: 'телефонное сообщение',
      text: 'Hier ist Leon. Du, ich bin jetzt gerade noch in der Bibliothek. Ich muss noch für den Test morgen lernen. Aber ich hole dich um 18 Uhr ab, okay? Der Film beginnt um halb sieben. Ach so, ich habe heute Morgen Pablo vor dem Fitnessraum getroffen. Er kommt auch mit ins Kino. Bis später!',
      sentenceTranslations: {
        'Hier ist Leon.': { literal: 'Здесь есть Леон', literary: 'Это Леон.' },
        'Du, ich bin jetzt gerade noch in der Bibliothek.': { literal: 'Ты, я есть сейчас как раз ещё в библиотеке', literary: 'Слушай, я сейчас всё ещё в библиотеке.' },
        'Ich muss noch für den Test morgen lernen.': { literal: 'Я должен ещё для теста завтра учить', literary: 'Мне нужно ещё поучить к завтрашнему тесту.' },
        'Aber ich hole dich um 18 Uhr ab, okay?': { literal: 'Но я забираю тебя в 18 часов, окей?', literary: 'Но я заберу тебя в 18:00, хорошо?' },
        'Der Film beginnt um halb sieben.': { literal: 'Фильм начинает в половину семь', literary: 'Фильм начинается в половине седьмого.' },
        'Ach so, ich habe heute Morgen Pablo vor dem Fitnessraum getroffen.': { literal: 'Ах так, я имею сегодня утром Пабло перед фитнес-залом встретил', literary: 'Кстати, я встретил Пабло сегодня утром у фитнес-зала.' },
        'Er kommt auch mit ins Kino.': { literal: 'Он идёт тоже с в кино', literary: 'Он тоже идёт с нами в кино.' },
        'Bis später!': { literal: 'До позже!', literary: 'До скорого!' },
      },
      vocabulary: [
        { de: 'die Bibliothek', plural: 'die Bibliotheken', ru: 'библиотека', gender: 'feminin', example: 'Du, ich bin jetzt gerade noch in der Bibliothek.' },
        { de: 'der Test', plural: 'die Tests', ru: 'тест', gender: 'maskulin', example: 'Ich muss noch für den Test morgen lernen.' },
        { de: 'der Film', plural: 'die Filme', ru: 'фильм', gender: 'maskulin', example: 'Der Film beginnt um halb sieben.' },
        { de: 'der Fitnessraum', plural: 'die Fitnessräume', ru: 'фитнес-зал', gender: 'maskulin', example: 'Ich habe heute Morgen Pablo vor dem Fitnessraum getroffen.' },
        { de: 'abholen', ru: 'забирать', type: 'verb', forms: 'hole ab, holte ab, hat abgeholt', example: 'Aber ich hole dich um 18 Uhr ab, okay?' },
        { de: 'treffen', ru: 'встречать', type: 'verb', forms: 'treffe, traf, hat getroffen', example: 'Ich habe heute Morgen Pablo vor dem Fitnessraum getroffen.' },
        { de: 'mitkommen', ru: 'идти вместе', type: 'verb', forms: 'komme mit, kam mit, ist mitgekommen', example: 'Er kommt auch mit ins Kino.' },
        { de: 'gerade', ru: 'сейчас, как раз', type: 'adv', example: 'Du, ich bin jetzt gerade noch in der Bibliothek.' },
      ],
      practiceSentences: [
        { de: 'Ich hole dich später ab.', ru: 'Я заберу тебя позже.', note: 'отделяемая приставка ab' },
        { de: 'Der Kurs beginnt um neun.', ru: 'Курс начинается в девять.', note: 'V2 простой глагол' },
        { de: 'Ich muss noch lernen.', ru: 'Мне нужно ещё учиться.', note: 'модальный muss + инфинитив' },
        { de: 'Ich habe ihn gestern getroffen.', ru: 'Я встретил его вчера.', note: 'Perfekt: habe + Partizip' },
        { de: 'Ich bin noch im Büro.', ru: 'Я ещё в офисе.', note: 'V2 глагол sein' },
      ],
      question: {
        de: 'Wo ist Leon jetzt?',
        ru: 'Где сейчас находится Леон?',
        options: [
          { de: 'Im Kino', ru: 'В кино' },
          { de: 'In der Bibliothek', ru: 'В библиотеке' },
          { de: 'Im Fitnessraum', ru: 'В фитнес-зале' },
        ],
        correct: 1,
        explanation: 'Леон говорит: "ich bin jetzt gerade noch in der Bibliothek."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Wetterbericht',
      type: 'прогноз погоды',
      text: 'Und nun der Wetterbericht für das Wochenende. Im Norden scheint die Sonne bei warmen Temperaturen um die 25 Grad. Im Süden gibt es bereits viele Wolken und es regnet ab Samstagmorgen. Auch starker Wind ist möglich. Ab Montag auch Wolken im Norden. Dann wird es auch dort kühler. Die Temperaturen sinken auf 15 Grad.',
      sentenceTranslations: {
        'Und nun der Wetterbericht für das Wochenende.': { literal: 'И теперь прогноз погоды для выходных', literary: 'А теперь прогноз погоды на выходные.' },
        'Im Norden scheint die Sonne bei warmen Temperaturen um die 25 Grad.': { literal: 'На севере светит солнце при тёплых температурах около 25 градусов', literary: 'На севере солнечно при температуре около 25 градусов.' },
        'Im Süden gibt es bereits viele Wolken und es regnet ab Samstagmorgen.': { literal: 'На юге даёт это уже много облаков и это дождит с субботнего утра', literary: 'На юге уже много облаков, и с субботнего утра идёт дождь.' },
        'Auch starker Wind ist möglich.': { literal: 'Также сильный ветер есть возможный', literary: 'Возможен также сильный ветер.' },
        'Ab Montag auch Wolken im Norden.': { literal: 'С понедельника также облака на севере', literary: 'С понедельника облачно и на севере.' },
        'Dann wird es auch dort kühler.': { literal: 'Тогда становится это также там прохладнее', literary: 'Там тоже станет прохладнее.' },
        'Die Temperaturen sinken auf 15 Grad.': { literal: 'Температуры падают на 15 градусов', literary: 'Температура понизится до 15 градусов.' },
      },
      vocabulary: [
        { de: 'der Wetterbericht', plural: 'die Wetterberichte', ru: 'прогноз погоды', gender: 'maskulin', example: 'Und nun der Wetterbericht für das Wochenende.' },
        { de: 'die Sonne', plural: '-', ru: 'солнце', gender: 'feminin', example: 'Im Norden scheint die Sonne bei warmen Temperaturen um die 25 Grad.' },
        { de: 'die Wolke', plural: 'die Wolken', ru: 'облако', gender: 'feminin', example: 'Im Süden gibt es bereits viele Wolken und es regnet ab Samstagmorgen.' },
        { de: 'der Wind', plural: 'die Winde', ru: 'ветер', gender: 'maskulin', example: 'Auch starker Wind ist möglich.' },
        { de: 'die Temperatur', plural: 'die Temperaturen', ru: 'температура', gender: 'feminin', example: 'Die Temperaturen sinken auf 15 Grad.' },
        { de: 'scheinen', ru: 'светить, сиять', type: 'verb', forms: 'scheint, schien, hat geschienen', example: 'Im Norden scheint die Sonne bei warmen Temperaturen um die 25 Grad.' },
        { de: 'regnen', ru: 'идти (о дожде)', type: 'verb', forms: 'regnet, regnete, hat geregnet', example: 'Im Süden gibt es bereits viele Wolken und es regnet ab Samstagmorgen.' },
        { de: 'sinken', ru: 'падать, снижаться', type: 'verb', forms: 'sinkt, sank, ist gesunken', example: 'Die Temperaturen sinken auf 15 Grad.' },
        { de: 'möglich', ru: 'возможный', type: 'adj', example: 'Auch starker Wind ist möglich.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Dann wird es auch dort kühler.' },
      ],
      practiceSentences: [
        { de: 'Es gibt heute Regen.', ru: 'Сегодня будет дождь.', note: 'безличное es gibt' },
        { de: 'Die Sonne scheint stark.', ru: 'Солнце светит ярко.', note: 'V2 простой глагол' },
        { de: 'Es wird morgen kälter.', ru: 'Завтра станет холоднее.', note: 'werden + компаратив' },
        { de: 'Es regnet ab Mittag.', ru: 'Дождь начнётся с полудня.', note: 'безличное es regnet' },
        { de: 'Die Preise sinken langsam.', ru: 'Цены медленно падают.', note: 'V2 простой глагол' },
      ],
      question: {
        de: 'Wie wird das Wetter im Norden am Montag?',
        ru: 'Какая погода будет на севере в понедельник?',
        options: [
          { de: 'Sonnig und warm', ru: 'Солнечно и тепло' },
          { de: 'Wolkig und kühler', ru: 'Облачно и прохладнее' },
          { de: 'Regen und Wind', ru: 'Дождь и ветер' },
        ],
        correct: 1,
        explanation: 'В прогнозе сказано: "Ab Montag auch Wolken im Norden. Dann wird es auch dort kühler."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Frau Weiß',
      type: 'деловое сообщение',
      text: 'Hallo Herr Müller, hier Frau Weiß. Der Chef hat Ihren Vertrag unterschrieben und ich habe Ihnen gerade alle wichtigen Informationen zu dem neuen Projekt gemailt. Wir können morgen noch mal über alles sprechen. Können Sie um 14 Uhr bei uns in der Firma sein? Wenn ich nichts mehr von Ihnen höre, warte ich um 14 Uhr an der Rezeption auf Sie. Auf Wiederhören!',
      sentenceTranslations: {
        'Hallo Herr Müller, hier Frau Weiß.': { literal: 'Привет господин Мюллер, здесь госпожа Вайс', literary: 'Здравствуйте, господин Мюллер, это госпожа Вайс.' },
        'Der Chef hat Ihren Vertrag unterschrieben und ich habe Ihnen gerade alle wichtigen Informationen zu dem neuen Projekt gemailt.': { literal: 'Шеф имеет Ваш договор подписал и я имею Вам только что все важные информации к новому проекту отправила', literary: 'Начальник подписал Ваш договор, и я только что отправила Вам всю важную информацию о новом проекте.' },
        'Wir können morgen noch mal über alles sprechen.': { literal: 'Мы можем завтра ещё раз обо всём говорить', literary: 'Мы можем завтра ещё раз всё обсудить.' },
        'Können Sie um 14 Uhr bei uns in der Firma sein?': { literal: 'Можете Вы в 14 часов у нас в фирме быть?', literary: 'Можете ли Вы быть у нас в офисе в 14:00?' },
        'Wenn ich nichts mehr von Ihnen höre, warte ich um 14 Uhr an der Rezeption auf Sie.': { literal: 'Если я ничего больше от Вас слышу, жду я в 14 часов у ресепшн на Вас', literary: 'Если я не получу от Вас ответа, буду ждать Вас в 14:00 на ресепшн.' },
        'Auf Wiederhören!': { literal: 'На снова-слышать!', literary: 'До свидания (по телефону)!' },
      },
      vocabulary: [
        { de: 'der Chef', plural: 'die Chefs', ru: 'начальник', gender: 'maskulin', example: 'Der Chef hat Ihren Vertrag unterschrieben.' },
        { de: 'der Vertrag', plural: 'die Verträge', ru: 'договор', gender: 'maskulin', example: 'Der Chef hat Ihren Vertrag unterschrieben.' },
        { de: 'das Projekt', plural: 'die Projekte', ru: 'проект', gender: 'neutrum', example: 'Ich habe Ihnen gerade alle wichtigen Informationen zu dem neuen Projekt gemailt.' },
        { de: 'die Firma', plural: 'die Firmen', ru: 'фирма, офис', gender: 'feminin', example: 'Können Sie um 14 Uhr bei uns in der Firma sein?' },
        { de: 'die Rezeption', plural: 'die Rezeptionen', ru: 'ресепшн', gender: 'feminin', example: 'Warte ich um 14 Uhr an der Rezeption auf Sie.' },
        { de: 'unterschreiben', ru: 'подписывать', type: 'verb', forms: 'unterschreibt, unterschrieb, hat unterschrieben', example: 'Der Chef hat Ihren Vertrag unterschrieben.' },
        { de: 'sprechen', ru: 'говорить', type: 'verb', forms: 'spricht, sprach, hat gesprochen', example: 'Wir können morgen noch mal über alles sprechen.' },
        { de: 'warten', ru: 'ждать', type: 'verb', forms: 'wartet, wartete, hat gewartet', example: 'Warte ich um 14 Uhr an der Rezeption auf Sie.' },
        { de: 'wichtig', ru: 'важный', type: 'adj', example: 'Ich habe Ihnen gerade alle wichtigen Informationen zu dem neuen Projekt gemailt.' },
      ],
      practiceSentences: [
        { de: 'Der Chef hat den Brief unterschrieben.', ru: 'Начальник подписал письмо.', note: 'Perfekt: hat + Partizip' },
        { de: 'Wir können morgen sprechen.', ru: 'Мы можем поговорить завтра.', note: 'модальный können + инфинитив' },
        { de: 'Ich warte auf dich.', ru: 'Я жду тебя.', note: 'V2, управление auf + Akk' },
        { de: 'Wenn er kommt, gehe ich.', ru: 'Если он придёт, я уйду.', note: 'глагол в конце Nebensatz' },
        { de: 'Können Sie heute kommen?', ru: 'Можете ли Вы прийти сегодня?', note: 'V1 в вопросе' },
      ],
      question: {
        de: 'Um wie viel Uhr ist der Termin morgen?',
        ru: 'Во сколько встреча завтра?',
        options: [
          { de: 'Um 13 Uhr', ru: 'В 13:00' },
          { de: 'Um 14 Uhr', ru: 'В 14:00' },
          { de: 'Um 15 Uhr', ru: 'В 15:00' },
        ],
        correct: 1,
        explanation: 'Фрау Вайс спрашивает: "Können Sie um 14 Uhr bei uns in der Firma sein?" и говорит, что будет ждать в 14:00.'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Souvenirs aus Kiel',
      type: 'диалог',
      text: 'Ach schade! Jetzt ist der kurze Urlaub schon vorbei. Morgen fahren wir schon wieder nach Hause. Aber gut, dass wir hier waren. Die Kieler Woche ist einfach schön. Diese vielen Segelboote! Ich finde das echt toll. Und ich freue mich schon wieder auf unsere Kinder. Was mir noch einfällt: Wir müssen ein paar Souvenirs kaufen, kleine Geschenke. Was sollen wir denn mitbringen? Eine Idee habe ich schon: Andreas bekommt ein T-Shirt. Ich habe eines gesehen, ganz super, da ist ein cooler Fisch drauf. Ja gut, das T-Shirt kaufst du. Und für Lena kaufe ich einen Ring. Einen Ring? Wollte sie nicht eine Tasche? Nein, die hat sie schon bekommen. Ich finde bestimmt einen schönen Ring für sie. Und für meine Mutter kaufen wir guten Tee. Sie liebt ihren Tee zum Frühstück. Ja, das passt gut. Und Opa, bekommt er nichts? Doch, für Opa kaufen wir ein schönes Buch. Er liest doch nicht viel. Vielleicht einen Schal? Nein, lieber ein Buch mit schönen Bildern von Kiel und der Ostsee. Das gefällt ihm bestimmt. Und Frau Hilbert? Gut, dass du daran denkst. Wir können ihr ein Bild mitbringen. Ich weiß nicht. Ich bringe Frau Hilbert lieber etwas Süßes mit. In der Nähe ist ein Schokoladengeschäft. Ich habe da schon was für sie gesehen. Haben wir alles? Nein, wir dürfen Elena nicht vergessen. Was bekommt sie? Fisch aus Kiel? Kieler Sprotten? Nein, das geht doch nicht. Elena bekommt eine Tasche. Ich weiß schon, wo ich die kaufe. Ok, haben wir jetzt alles? Ja, und weißt du noch, was du besorgen musst?',
      sentenceTranslations: {
        'Ach schade!': { literal: 'Ах жаль!', literary: 'Как жаль!' },
        'Jetzt ist der kurze Urlaub schon vorbei.': { literal: 'Сейчас есть короткий отпуск уже закончен', literary: 'Короткий отпуск уже закончился.' },
        'Morgen fahren wir schon wieder nach Hause.': { literal: 'Завтра едем мы уже снова домой', literary: 'Завтра мы уже снова едем домой.' },
        'Aber gut, dass wir hier waren.': { literal: 'Но хорошо, что мы здесь были', literary: 'Но хорошо, что мы здесь побывали.' },
        'Die Kieler Woche ist einfach schön.': { literal: 'Кильская неделя есть просто красивая', literary: 'Кильская неделя просто прекрасна.' },
        'Diese vielen Segelboote!': { literal: 'Эти многие парусные лодки!', literary: 'Столько парусников!' },
        'Ich finde das echt toll.': { literal: 'Я нахожу это действительно классно', literary: 'Мне это очень нравится.' },
        'Und ich freue mich schon wieder auf unsere Kinder.': { literal: 'И я радуюсь себя уже снова на наших детей', literary: 'И я уже снова соскучилась по нашим детям.' },
        'Was mir noch einfällt: Wir müssen ein paar Souvenirs kaufen, kleine Geschenke.': { literal: 'Что мне ещё выпадает: мы должны пару сувениров купить, маленькие подарки', literary: 'Вот ещё что: нам нужно купить несколько сувениров, небольших подарков.' },
        'Was sollen wir denn mitbringen?': { literal: 'Что должны мы же привезти?', literary: 'Что же нам привезти?' },
        'Eine Idee habe ich schon: Andreas bekommt ein T-Shirt.': { literal: 'Одну идею имею я уже: Андреас получает футболку', literary: 'Идея у меня уже есть: Андреас получит футболку.' },
        'Ich habe eines gesehen, ganz super, da ist ein cooler Fisch drauf.': { literal: 'Я имею одну увидел, совсем супер, там есть классная рыба сверху', literary: 'Я видел одну, просто супер, на ней классная рыба.' },
        'Ja gut, das T-Shirt kaufst du.': { literal: 'Да хорошо, футболку покупаешь ты', literary: 'Ладно, футболку покупаешь ты.' },
        'Und für Lena kaufe ich einen Ring.': { literal: 'И для Лены покупаю я кольцо', literary: 'А для Лены я куплю кольцо.' },
        'Einen Ring?': { literal: 'Кольцо?', literary: 'Кольцо?' },
        'Wollte sie nicht eine Tasche?': { literal: 'Хотела она не сумку?', literary: 'Разве она не хотела сумку?' },
        'Nein, die hat sie schon bekommen.': { literal: 'Нет, ту имеет она уже получила', literary: 'Нет, она уже получила сумку.' },
        'Ich finde bestimmt einen schönen Ring für sie.': { literal: 'Я нахожу точно красивое кольцо для неё', literary: 'Я обязательно найду для неё красивое кольцо.' },
        'Und für meine Mutter kaufen wir guten Tee.': { literal: 'И для моей матери покупаем мы хороший чай', literary: 'А для моей мамы мы купим хороший чай.' },
        'Sie liebt ihren Tee zum Frühstück.': { literal: 'Она любит свой чай к завтраку', literary: 'Она любит чай на завтрак.' },
        'Ja, das passt gut.': { literal: 'Да, это подходит хорошо', literary: 'Да, это хорошая идея.' },
        'Und Opa, bekommt er nichts?': { literal: 'И дедушка, получает он ничего?', literary: 'А дедушке ничего?' },
        'Doch, für Opa kaufen wir ein schönes Buch.': { literal: 'Нет-же, для дедушки покупаем мы красивую книгу', literary: 'Конечно, дедушке мы купим красивую книгу.' },
        'Er liest doch nicht viel.': { literal: 'Он читает же не много', literary: 'Он ведь не много читает.' },
        'Vielleicht einen Schal?': { literal: 'Может быть шарф?', literary: 'Может, шарф?' },
        'Nein, lieber ein Buch mit schönen Bildern von Kiel und der Ostsee.': { literal: 'Нет, лучше книгу с красивыми картинками от Киля и Балтийского моря', literary: 'Нет, лучше книгу с красивыми фотографиями Киля и Балтийского моря.' },
        'Das gefällt ihm bestimmt.': { literal: 'Это нравится ему точно', literary: 'Ему это точно понравится.' },
        'Und Frau Hilbert?': { literal: 'И госпожа Хильберт?', literary: 'А госпоже Хильберт?' },
        'Gut, dass du daran denkst.': { literal: 'Хорошо, что ты об-этом думаешь', literary: 'Хорошо, что ты об этом вспомнил.' },
        'Wir können ihr ein Bild mitbringen.': { literal: 'Мы можем ей картину привезти', literary: 'Мы можем привезти ей картину.' },
        'Ich weiß nicht.': { literal: 'Я знаю не', literary: 'Не знаю.' },
        'Ich bringe Frau Hilbert lieber etwas Süßes mit.': { literal: 'Я привожу госпоже Хильберт лучше что-то сладкое', literary: 'Лучше я привезу госпоже Хильберт что-нибудь сладкое.' },
        'In der Nähe ist ein Schokoladengeschäft.': { literal: 'В близости есть шоколадный магазин', literary: 'Рядом есть магазин шоколада.' },
        'Ich habe da schon was für sie gesehen.': { literal: 'Я имею там уже что-то для неё увидел', literary: 'Я там уже кое-что для неё видел.' },
        'Haben wir alles?': { literal: 'Имеем мы всё?', literary: 'У нас всё есть?' },
        'Nein, wir dürfen Elena nicht vergessen.': { literal: 'Нет, мы не-смеем Елену не забыть', literary: 'Нет, мы не должны забыть про Елену.' },
        'Was bekommt sie?': { literal: 'Что получает она?', literary: 'Что ей подарим?' },
        'Fisch aus Kiel?': { literal: 'Рыба из Киля?', literary: 'Рыбу из Киля?' },
        'Kieler Sprotten?': { literal: 'Кильские кильки?', literary: 'Кильскую кильку?' },
        'Nein, das geht doch nicht.': { literal: 'Нет, это идёт же не', literary: 'Нет, это же не годится.' },
        'Elena bekommt eine Tasche.': { literal: 'Елена получает сумку', literary: 'Елена получит сумку.' },
        'Ich weiß schon, wo ich die kaufe.': { literal: 'Я знаю уже, где я её покупаю', literary: 'Я уже знаю, где её куплю.' },
        'Ok, haben wir jetzt alles?': { literal: 'Ок, имеем мы сейчас всё?', literary: 'Окей, теперь у нас всё?' },
        'Ja, und weißt du noch, was du besorgen musst?': { literal: 'Да, и знаешь ты ещё, что ты достать должен?', literary: 'Да, а ты помнишь, что тебе нужно купить?' },
      },
      vocabulary: [
        { de: 'der Urlaub', plural: 'die Urlaube', ru: 'отпуск', gender: 'maskulin', example: 'Jetzt ist der kurze Urlaub schon vorbei.' },
        { de: 'das Souvenir', plural: 'die Souvenirs', ru: 'сувенир', gender: 'neutrum', example: 'Wir müssen ein paar Souvenirs kaufen, kleine Geschenke.' },
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', example: 'Wir müssen ein paar Souvenirs kaufen, kleine Geschenke.' },
        { de: 'der Ring', plural: 'die Ringe', ru: 'кольцо', gender: 'maskulin', example: 'Und für Lena kaufe ich einen Ring.' },
        { de: 'die Tasche', plural: 'die Taschen', ru: 'сумка', gender: 'feminin', example: 'Wollte sie nicht eine Tasche?' },
        { de: 'der Tee', plural: 'die Tees', ru: 'чай', gender: 'maskulin', example: 'Und für meine Mutter kaufen wir guten Tee.' },
        { de: 'das Frühstück', plural: 'die Frühstücke', ru: 'завтрак', gender: 'neutrum', example: 'Sie liebt ihren Tee zum Frühstück.' },
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', example: 'Doch, für Opa kaufen wir ein schönes Buch.' },
        { de: 'das Bild', plural: 'die Bilder', ru: 'картина, фотография', gender: 'neutrum', example: 'Nein, lieber ein Buch mit schönen Bildern von Kiel und der Ostsee.' },
        { de: 'das Schokoladengeschäft', plural: 'die Schokoladengeschäfte', ru: 'магазин шоколада', gender: 'neutrum', example: 'In der Nähe ist ein Schokoladengeschäft.' },
        { de: 'die Ostsee', plural: '-', ru: 'Балтийское море', gender: 'feminin', example: 'Nein, lieber ein Buch mit schönen Bildern von Kiel und der Ostsee.' },
        { de: 'mitbringen', ru: 'привозить', type: 'verb', forms: 'bringe mit, brachte mit, hat mitgebracht', example: 'Was sollen wir denn mitbringen?' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Das gefällt ihm bestimmt.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Nein, wir dürfen Elena nicht vergessen.' },
        { de: 'besorgen', ru: 'покупать, доставать', type: 'verb', forms: 'besorgt, besorgte, hat besorgt', example: 'Ja, und weißt du noch, was du besorgen musst?' },
        { de: 'schade', ru: 'жаль', type: 'adj', example: 'Ach schade!' },
      ],
      practiceSentences: [
        { de: 'Der Urlaub ist schon vorbei.', ru: 'Отпуск уже закончился.', note: 'V2 sein + предикатив' },
        { de: 'Was soll ich mitbringen?', ru: 'Что мне привезти?', note: 'модальный V2 + отделяемая' },
        { de: 'Das Buch gefällt mir.', ru: 'Книга мне нравится.', note: 'V2, управление с Dativ' },
        { de: 'Wir müssen Geschenke kaufen.', ru: 'Нам нужно купить подарки.', note: 'модальный müssen + инфинитив' },
        { de: 'Er liebt seinen Kaffee.', ru: 'Он любит свой кофе.', note: 'V2 простой глагол' },
      ],
      question: {
        de: 'Was kaufen sie für die Mutter?',
        ru: 'Что они покупают для мамы?',
        options: [
          { de: 'Ein Buch', ru: 'Книгу' },
          { de: 'Tee', ru: 'Чай' },
          { de: 'Schokolade', ru: 'Шоколад' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "Und für meine Mutter kaufen wir guten Tee. Sie liebt ihren Tee zum Frühstück."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Tim und Gabi',
      type: 'диалог',
      text: 'Hallo Tim! Und was hast du am Wochenende gemacht? Ach, eigentlich wollte ich zum Bernsteinsee fahren und dort tauchen gehen. Aber das hat nicht geklappt. Mein Auto ist kaputt gegangen. Nein! Dann wollte ich eine Radtour machen, aber alleine macht es auch keinen Spaß. Und was hast du dann gemacht? Dann hat mich Gabi angerufen. Du weißt doch, sie hat ein Pferd. Sie hat mich gefragt, ob ich Lust habe mal zu reiten. Und das haben wir dann gemacht. Das war mal ganz was anderes. Hat Spaß gemacht. Und du, was hast du gemacht?',
      sentenceTranslations: {
        'Hallo Tim!': { literal: 'Привет Тим!', literary: 'Привет, Тим!' },
        'Und was hast du am Wochenende gemacht?': { literal: 'И что имеешь ты на выходных сделал?', literary: 'А что ты делал на выходных?' },
        'Ach, eigentlich wollte ich zum Bernsteinsee fahren und dort tauchen gehen.': { literal: 'Ах, собственно хотел я к Янтарному озеру ехать и там нырять идти', literary: 'Ну, вообще-то я хотел поехать на Янтарное озеро и понырять.' },
        'Aber das hat nicht geklappt.': { literal: 'Но это имеет не сработало', literary: 'Но не получилось.' },
        'Mein Auto ist kaputt gegangen.': { literal: 'Моя машина есть сломанной пошла', literary: 'Моя машина сломалась.' },
        'Nein!': { literal: 'Нет!', literary: 'Да ну!' },
        'Dann wollte ich eine Radtour machen, aber alleine macht es auch keinen Spaß.': { literal: 'Тогда хотел я велопрогулку сделать, но в одиночку делает это также никакого веселья', literary: 'Тогда я хотел устроить велопрогулку, но одному — это не весело.' },
        'Und was hast du dann gemacht?': { literal: 'И что имеешь ты тогда сделал?', literary: 'И что ты тогда сделал?' },
        'Dann hat mich Gabi angerufen.': { literal: 'Тогда имеет меня Габи позвонила', literary: 'Тогда мне позвонила Габи.' },
        'Du weißt doch, sie hat ein Pferd.': { literal: 'Ты знаешь же, она имеет лошадь', literary: 'Ты ведь знаешь, у неё есть лошадь.' },
        'Sie hat mich gefragt, ob ich Lust habe mal zu reiten.': { literal: 'Она имеет меня спросила, ли я желание имею когда-нибудь кататься верхом', literary: 'Она спросила, хочу ли я покататься верхом.' },
        'Und das haben wir dann gemacht.': { literal: 'И это имеем мы тогда сделали', literary: 'И мы это сделали.' },
        'Das war mal ganz was anderes.': { literal: 'Это было когда-то совсем что другое', literary: 'Это было что-то совсем другое.' },
        'Hat Spaß gemacht.': { literal: 'Имело веселье сделано', literary: 'Было весело.' },
        'Und du, was hast du gemacht?': { literal: 'И ты, что имеешь ты сделал?', literary: 'А ты что делал?' },
      },
      vocabulary: [
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', example: 'Und was hast du am Wochenende gemacht?' },
        { de: 'das Auto', plural: 'die Autos', ru: 'машина', gender: 'neutrum', example: 'Mein Auto ist kaputt gegangen.' },
        { de: 'die Radtour', plural: 'die Radtouren', ru: 'велопрогулка', gender: 'feminin', example: 'Dann wollte ich eine Radtour machen.' },
        { de: 'das Pferd', plural: 'die Pferde', ru: 'лошадь', gender: 'neutrum', example: 'Du weißt doch, sie hat ein Pferd.' },
        { de: 'die Lust', plural: '-', ru: 'желание', gender: 'feminin', example: 'Sie hat mich gefragt, ob ich Lust habe mal zu reiten.' },
        { de: 'der Spaß', plural: '-', ru: 'удовольствие, веселье', gender: 'maskulin', example: 'Aber alleine macht es auch keinen Spaß.' },
        { de: 'klappen', ru: 'получаться, удаваться', type: 'verb', forms: 'klappt, klappte, hat geklappt', example: 'Aber das hat nicht geklappt.' },
        { de: 'reiten', ru: 'кататься верхом', type: 'verb', forms: 'reitet, ritt, ist geritten', example: 'Sie hat mich gefragt, ob ich Lust habe mal zu reiten.' },
        { de: 'eigentlich', ru: 'вообще-то, собственно', type: 'adv', example: 'Ach, eigentlich wollte ich zum Bernsteinsee fahren.' },
        { de: 'alleine', ru: 'в одиночку, один', type: 'adv', example: 'Aber alleine macht es auch keinen Spaß.' },
      ],
      practiceSentences: [
        { de: 'Was hast du gestern gemacht?', ru: 'Что ты делал вчера?', note: 'Perfekt: hast + Partizip' },
        { de: 'Das Auto ist kaputt gegangen.', ru: 'Машина сломалась.', note: 'Perfekt с sein' },
        { de: 'Das macht mir Spaß.', ru: 'Мне это нравится.', note: 'V2, устойчивое выражение' },
        { de: 'Hast du Lust zu schwimmen?', ru: 'Хочешь поплавать?', note: 'V1 вопрос + zu + инфинитив' },
        { de: 'Er fragt, ob ich Zeit habe.', ru: 'Он спрашивает, есть ли у меня время.', note: 'глагол в конце после ob' },
      ],
      question: {
        de: 'Was hat Tim am Wochenende gemacht?',
        ru: 'Что делал Тим на выходных?',
        options: [
          { de: 'Er ist getaucht', ru: 'Он нырял' },
          { de: 'Er ist geritten', ru: 'Он катался верхом' },
          { de: 'Er ist Rad gefahren', ru: 'Он катался на велосипеде' },
        ],
        correct: 1,
        explanation: 'Тим рассказывает: "Sie hat mich gefragt, ob ich Lust habe mal zu reiten. Und das haben wir dann gemacht."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Prüfung lernen',
      type: 'диалог',
      text: 'Hast du schon für die Prüfung gelernt? Ja, aber noch nicht genug. Sag mal, wann kannst du eigentlich am besten lernen? Also eigentlich kann ich am Morgen am besten lernen. Aha. Was meinst du denn mit „eigentlich"? Na ja, meistens fange ich viel zu spät mit dem Lernen an. Und dann sitze ich doch oft noch am Abend und bis spät in der Nacht da und lerne. Verstehe. Wie geht es also auch nicht besser.',
      sentenceTranslations: {
        'Hast du schon für die Prüfung gelernt?': { literal: 'Имеешь ты уже для экзамена учил?', literary: 'Ты уже готовился к экзамену?' },
        'Ja, aber noch nicht genug.': { literal: 'Да, но ещё не достаточно', literary: 'Да, но ещё недостаточно.' },
        'Sag mal, wann kannst du eigentlich am besten lernen?': { literal: 'Скажи-ка, когда можешь ты собственно лучше всего учиться?', literary: 'Скажи, а когда тебе лучше всего учиться?' },
        'Also eigentlich kann ich am Morgen am besten lernen.': { literal: 'Ну собственно могу я утром лучше всего учиться', literary: 'Вообще-то мне лучше всего учится по утрам.' },
        'Aha.': { literal: 'Ага', literary: 'Ага.' },
        'Was meinst du denn mit „eigentlich"?': { literal: 'Что имеешь-в-виду ты же с «собственно»?', literary: 'А что ты имеешь в виду под «вообще-то»?' },
        'Na ja, meistens fange ich viel zu spät mit dem Lernen an.': { literal: 'Ну да, чаще всего начинаю я слишком поздно с учёбой', literary: 'Ну, обычно я начинаю учиться слишком поздно.' },
        'Und dann sitze ich doch oft noch am Abend und bis spät in der Nacht da und lerne.': { literal: 'И тогда сижу я же часто ещё вечером и до поздно в ночи там и учусь', literary: 'И тогда я часто сижу допоздна вечером и ночью и учусь.' },
        'Verstehe.': { literal: 'Понимаю', literary: 'Понятно.' },
        'Wie geht es also auch nicht besser.': { literal: 'Как идёт это итак тоже не лучше', literary: 'Так дело тоже не идёт лучше.' },
      },
      vocabulary: [
        { de: 'die Prüfung', plural: 'die Prüfungen', ru: 'экзамен', gender: 'feminin', example: 'Hast du schon für die Prüfung gelernt?' },
        { de: 'der Morgen', plural: 'die Morgen', ru: 'утро', gender: 'maskulin', example: 'Also eigentlich kann ich am Morgen am besten lernen.' },
        { de: 'die Nacht', plural: 'die Nächte', ru: 'ночь', gender: 'feminin', example: 'Und dann sitze ich doch oft noch am Abend und bis spät in der Nacht da und lerne.' },
        { de: 'anfangen', ru: 'начинать', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Meistens fange ich viel zu spät mit dem Lernen an.' },
        { de: 'lernen', ru: 'учиться', type: 'verb', forms: 'lernt, lernte, hat gelernt', example: 'Hast du schon für die Prüfung gelernt?' },
        { de: 'genug', ru: 'достаточно', type: 'adv', example: 'Ja, aber noch nicht genug.' },
        { de: 'meistens', ru: 'обычно, чаще всего', type: 'adv', example: 'Meistens fange ich viel zu spät mit dem Lernen an.' },
      ],
      practiceSentences: [
        { de: 'Ich lerne für den Test.', ru: 'Я готовлюсь к тесту.', note: 'V2 простой глагол' },
        { de: 'Wann fängst du an?', ru: 'Когда ты начинаешь?', note: 'отделяемая приставка an' },
        { de: 'Ich kann abends besser lernen.', ru: 'Мне лучше учится вечером.', note: 'модальный kann + инфинитив' },
        { de: 'Er sitzt den ganzen Tag da.', ru: 'Он сидит там весь день.', note: 'V2 + локальная частица da' },
        { de: 'Sie lernt am besten allein.', ru: 'Ей лучше всего учится одной.', note: 'V2 простой глагол' },
      ],
      question: {
        de: 'Wann lernt die Person meistens?',
        ru: 'Когда человек обычно учится?',
        options: [
          { de: 'Am Morgen', ru: 'Утром' },
          { de: 'Am Nachmittag', ru: 'Днём' },
          { de: 'Am Abend und in der Nacht', ru: 'Вечером и ночью' },
        ],
        correct: 2,
        explanation: 'Человек говорит: "Meistens fange ich viel zu spät mit dem Lernen an. Und dann sitze ich doch oft noch am Abend und bis spät in der Nacht da und lerne."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Frau Müller',
      type: 'диалог с соседкой',
      text: 'Guten Tag, Frau Müller! Guten Tag! Und wie geht es Ihnen? Nun ja, wie soll es mir schon gehen? Ich habe schlecht geschlafen. Haben Sie schlecht geträumt? Nein, und der Hund von Hubers war diese Nacht auch ruhig. Aber bei Ihnen waren Freunde. Das war sehr laut. Das tut mir leid. Entschuldigen Sie bitte, wenn wir laut waren. Meine Freundin hatte Geburtstag. Na gut, ich war ja auch mal jung.',
      sentenceTranslations: {
        'Guten Tag, Frau Müller!': { literal: 'Добрый день, госпожа Мюллер!', literary: 'Добрый день, госпожа Мюллер!' },
        'Guten Tag!': { literal: 'Добрый день!', literary: 'Добрый день!' },
        'Und wie geht es Ihnen?': { literal: 'И как идёт это Вам?', literary: 'Как у Вас дела?' },
        'Nun ja, wie soll es mir schon gehen?': { literal: 'Ну да, как должно это мне уже идти?', literary: 'Да как мне может быть?' },
        'Ich habe schlecht geschlafen.': { literal: 'Я имею плохо спал', literary: 'Я плохо спала.' },
        'Haben Sie schlecht geträumt?': { literal: 'Имеете Вы плохо мечтали?', literary: 'Вам снились плохие сны?' },
        'Nein, und der Hund von Hubers war diese Nacht auch ruhig.': { literal: 'Нет, и собака от Хуберов была эту ночь тоже спокойной', literary: 'Нет, и собака Хуберов этой ночью тоже была тихой.' },
        'Aber bei Ihnen waren Freunde.': { literal: 'Но у Вас были друзья', literary: 'Но у Вас были гости.' },
        'Das war sehr laut.': { literal: 'Это было очень громко', literary: 'Было очень шумно.' },
        'Das tut mir leid.': { literal: 'Это делает мне жаль', literary: 'Мне очень жаль.' },
        'Entschuldigen Sie bitte, wenn wir laut waren.': { literal: 'Извините Вы пожалуйста, если мы громкие были', literary: 'Извините, пожалуйста, если мы шумели.' },
        'Meine Freundin hatte Geburtstag.': { literal: 'Моя подруга имела день рождения', literary: 'У моей подруги был день рождения.' },
        'Na gut, ich war ja auch mal jung.': { literal: 'Ну хорошо, я была же тоже когда-то молодой', literary: 'Ну ладно, я тоже была когда-то молодой.' },
      },
      vocabulary: [
        { de: 'der Hund', plural: 'die Hunde', ru: 'собака', gender: 'maskulin', example: 'Und der Hund von Hubers war diese Nacht auch ruhig.' },
        { de: 'die Nacht', plural: 'die Nächte', ru: 'ночь', gender: 'feminin', example: 'Und der Hund von Hubers war diese Nacht auch ruhig.' },
        { de: 'der Freund', plural: 'die Freunde', ru: 'друг', gender: 'maskulin', example: 'Aber bei Ihnen waren Freunde.' },
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', example: 'Meine Freundin hatte Geburtstag.' },
        { de: 'schlafen', ru: 'спать', type: 'verb', forms: 'schläft, schlief, hat geschlafen', example: 'Ich habe schlecht geschlafen.' },
        { de: 'entschuldigen', ru: 'извинять', type: 'verb', forms: 'entschuldigt, entschuldigte, hat entschuldigt', example: 'Entschuldigen Sie bitte, wenn wir laut waren.' },
        { de: 'laut', ru: 'громкий, шумный', type: 'adj', example: 'Das war sehr laut.' },
        { de: 'ruhig', ru: 'тихий, спокойный', type: 'adj', example: 'Und der Hund von Hubers war diese Nacht auch ruhig.' },
      ],
      practiceSentences: [
        { de: 'Wie geht es dir?', ru: 'Как у тебя дела?', note: 'V2, безличное es geht' },
        { de: 'Ich habe gut geschlafen.', ru: 'Я хорошо спал.', note: 'Perfekt: habe + Partizip' },
        { de: 'Bei mir waren Gäste.', ru: 'У меня были гости.', note: 'V2 Präteritum' },
        { de: 'Entschuldigen Sie mich!', ru: 'Извините меня!', note: 'императив V1' },
        { de: 'Wenn es laut ist, schlafe ich nicht.', ru: 'Если шумно, я не сплю.', note: 'глагол в конце после wenn' },
      ],
      question: {
        de: 'Warum hat Frau Müller schlecht geschlafen?',
        ru: 'Почему фрау Мюллер плохо спала?',
        options: [
          { de: 'Der Hund war laut', ru: 'Собака была шумной' },
          { de: 'Bei den Nachbarn waren Freunde', ru: 'У соседей были гости' },
          { de: 'Sie hatte schlechte Träume', ru: 'Ей снились плохие сны' },
        ],
        correct: 1,
        explanation: 'Фрау Мюллер объясняет: "bei Ihnen waren Freunde. Das war sehr laut."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Wohnungstausch',
      type: 'диалог',
      text: 'Hallo Peter, hier ist Benjamin Haller! Benjamin! Na, wie geht es dir? Alles klar in meiner Wohnung? Ich bin ja so froh, dass wir diesen Wohnungstausch machen. Hier ich auch. Alles super hier! Danke dir! Es ist wirklich toll hier in Bamberg und deine Wohnung gefällt mir in Köln auch super. Sag mal, hast du den Mülleimer für Plastikmüll gefunden? Der ist eher ein bisschen versteckt am Eingang. Ja, alles klar, habe ich gefunden. Aber sag mal, wo ist denn der Kellerschlüssel? Ach, der ist in dem kleinen Schrank im Flur, der Haken ganz rechts mit einem blauen Band. Ah! Dann habe ich ihn! Alles klar, danke dir! Gerne! Also tschüss, mach\'s gut!',
      sentenceTranslations: {
        'Hallo Peter, hier ist Benjamin Haller!': { literal: 'Привет Петер, здесь есть Беньямин Халлер!', literary: 'Привет, Петер, это Беньямин Халлер!' },
        'Benjamin!': { literal: 'Беньямин!', literary: 'Беньямин!' },
        'Na, wie geht es dir?': { literal: 'Ну, как идёт это тебе?', literary: 'Ну, как у тебя дела?' },
        'Alles klar in meiner Wohnung?': { literal: 'Всё ясно в моей квартире?', literary: 'В моей квартире всё в порядке?' },
        'Ich bin ja so froh, dass wir diesen Wohnungstausch machen.': { literal: 'Я есть же так рад, что мы этот обмен квартирами делаем', literary: 'Я так рад, что мы обменялись квартирами.' },
        'Hier ich auch.': { literal: 'Здесь я тоже', literary: 'Я тоже.' },
        'Alles super hier!': { literal: 'Всё супер здесь!', literary: 'Тут всё отлично!' },
        'Danke dir!': { literal: 'Спасибо тебе!', literary: 'Спасибо тебе!' },
        'Es ist wirklich toll hier in Bamberg und deine Wohnung gefällt mir in Köln auch super.': { literal: 'Это есть действительно замечательно здесь в Бамберге и твоя квартира нравится мне в Кёльне тоже супер', literary: 'В Бамберге действительно здорово, и твоя квартира в Кёльне мне тоже очень нравится.' },
        'Sag mal, hast du den Mülleimer für Plastikmüll gefunden?': { literal: 'Скажи-ка, имеешь ты мусорное ведро для пластикового мусора нашёл?', literary: 'Скажи, ты нашёл мусорное ведро для пластика?' },
        'Der ist eher ein bisschen versteckt am Eingang.': { literal: 'Он есть скорее немножко спрятан у входа', literary: 'Оно скорее немного спрятано у входа.' },
        'Ja, alles klar, habe ich gefunden.': { literal: 'Да, всё ясно, имею я нашёл', literary: 'Да, всё в порядке, я нашёл.' },
        'Aber sag mal, wo ist denn der Kellerschlüssel?': { literal: 'Но скажи-ка, где есть же ключ от подвала?', literary: 'А скажи, где ключ от подвала?' },
        'Ach, der ist in dem kleinen Schrank im Flur, der Haken ganz rechts mit einem blauen Band.': { literal: 'Ах, он есть в маленьком шкафу в коридоре, крючок совсем справа с синей лентой', literary: 'А, он в маленьком шкафу в коридоре, крючок крайний справа с синей лентой.' },
        'Ah!': { literal: 'А!', literary: 'А!' },
        'Dann habe ich ihn!': { literal: 'Тогда имею я его!', literary: 'Тогда я его нашёл!' },
        'Alles klar, danke dir!': { literal: 'Всё ясно, спасибо тебе!', literary: 'Понятно, спасибо тебе!' },
        'Gerne!': { literal: 'Пожалуйста!', literary: 'Пожалуйста!' },
        'Also tschüss, mach\'s gut!': { literal: 'Ну пока, делай хорошо!', literary: 'Ну, пока, удачи!' },
      },
      vocabulary: [
        { de: 'die Wohnung', plural: 'die Wohnungen', ru: 'квартира', gender: 'feminin', example: 'Alles klar in meiner Wohnung?' },
        { de: 'der Wohnungstausch', plural: '-', ru: 'обмен квартирами', gender: 'maskulin', example: 'Ich bin ja so froh, dass wir diesen Wohnungstausch machen.' },
        { de: 'der Mülleimer', plural: 'die Mülleimer', ru: 'мусорное ведро', gender: 'maskulin', example: 'Sag mal, hast du den Mülleimer für Plastikmüll gefunden?' },
        { de: 'der Eingang', plural: 'die Eingänge', ru: 'вход', gender: 'maskulin', example: 'Der ist eher ein bisschen versteckt am Eingang.' },
        { de: 'der Kellerschlüssel', plural: 'die Kellerschlüssel', ru: 'ключ от подвала', gender: 'maskulin', example: 'Aber sag mal, wo ist denn der Kellerschlüssel?' },
        { de: 'der Schrank', plural: 'die Schränke', ru: 'шкаф', gender: 'maskulin', example: 'Der ist in dem kleinen Schrank im Flur.' },
        { de: 'der Flur', plural: 'die Flure', ru: 'коридор', gender: 'maskulin', example: 'Der ist in dem kleinen Schrank im Flur.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Deine Wohnung gefällt mir in Köln auch super.' },
        { de: 'versteckt', ru: 'спрятанный', type: 'adj', example: 'Der ist eher ein bisschen versteckt am Eingang.' },
      ],
      practiceSentences: [
        { de: 'Ich bin froh, dass du hier bist.', ru: 'Я рад, что ты здесь.', note: 'глагол в конце после dass' },
        { de: 'Der Schlüssel ist im Schrank.', ru: 'Ключ в шкафу.', note: 'V2 sein + локализация' },
        { de: 'Hast du alles gefunden?', ru: 'Ты всё нашёл?', note: 'Perfekt вопрос V1' },
        { de: 'Das Buch ist versteckt.', ru: 'Книга спрятана.', note: 'V2 sein + Partizip II' },
        { de: 'Wo ist denn mein Handy?', ru: 'А где мой телефон?', note: 'V2 в W-вопросе' },
      ],
      question: {
        de: 'Wo ist der Kellerschlüssel?',
        ru: 'Где ключ от подвала?',
        options: [
          { de: 'Am Eingang beim Mülleimer', ru: 'У входа возле мусорного ведра' },
          { de: 'Im Schrank im Flur', ru: 'В шкафу в коридоре' },
          { de: 'In der Küche', ru: 'На кухне' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится: "der ist in dem kleinen Schrank im Flur, der Haken ganz rechts mit einem blauen Band."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Frau Arnstorf',
      type: 'деловой звонок',
      text: 'Guten Tag, Herr Meier! Hier spricht Arnstorf von der Information für Berufsfragen. Guten Tag, Frau Arnstorf! Ich rufe wegen Ihrem Termin am Donnerstag an. Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt: das Zeugnis von Ihrem Schulabschluss. Das habe ich wohl vergessen. Sonst haben Sie alles? Das Foto und die Bewerbung, ist das alles da? Ja, keine Sorge, das ist alles da.',
      sentenceTranslations: {
        'Guten Tag, Herr Meier!': { literal: 'Добрый день, господин Мейер!', literary: 'Добрый день, господин Мейер!' },
        'Hier spricht Arnstorf von der Information für Berufsfragen.': { literal: 'Здесь говорит Арнсторф от информации для профессиональных вопросов', literary: 'С вами говорит Арнсторф из отдела информации по вопросам карьеры.' },
        'Guten Tag, Frau Arnstorf!': { literal: 'Добрый день, госпожа Арнсторф!', literary: 'Добрый день, госпожа Арнсторф!' },
        'Ich rufe wegen Ihrem Termin am Donnerstag an.': { literal: 'Я звоню из-за Вашей встречи в четверг', literary: 'Я звоню по поводу Вашей встречи в четверг.' },
        'Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt: das Zeugnis von Ihrem Schulabschluss.': { literal: 'Я имею увидел, что при Ваших документах ещё что-то недостаёт: свидетельство от Вашего окончания школы', literary: 'Я заметила, что в Ваших документах чего-то не хватает: свидетельства об окончании школы.' },
        'Das habe ich wohl vergessen.': { literal: 'Это имею я видимо забыл', literary: 'Я, видимо, забыл это.' },
        'Sonst haben Sie alles?': { literal: 'Иначе имеете Вы всё?', literary: 'В остальном у Вас всё есть?' },
        'Das Foto und die Bewerbung, ist das alles da?': { literal: 'Фотография и заявление, есть это всё там?', literary: 'Фотография и заявление — это всё на месте?' },
        'Ja, keine Sorge, das ist alles da.': { literal: 'Да, никакие заботы, это есть всё там', literary: 'Да, не беспокойтесь, всё на месте.' },
      },
      vocabulary: [
        { de: 'der Termin', plural: 'die Termine', ru: 'встреча, назначенное время', gender: 'maskulin', example: 'Ich rufe wegen Ihrem Termin am Donnerstag an.' },
        { de: 'die Unterlage', plural: 'die Unterlagen', ru: 'документ', gender: 'feminin', example: 'Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt.' },
        { de: 'das Zeugnis', plural: 'die Zeugnisse', ru: 'свидетельство, аттестат', gender: 'neutrum', example: 'Das Zeugnis von Ihrem Schulabschluss.' },
        { de: 'der Schulabschluss', plural: 'die Schulabschlüsse', ru: 'окончание школы', gender: 'maskulin', example: 'Das Zeugnis von Ihrem Schulabschluss.' },
        { de: 'die Bewerbung', plural: 'die Bewerbungen', ru: 'заявление, резюме', gender: 'feminin', example: 'Das Foto und die Bewerbung, ist das alles da?' },
        { de: 'fehlen', ru: 'недоставать, не хватать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Das habe ich wohl vergessen.' },
        { de: 'wohl', ru: 'видимо, наверное', type: 'adv', example: 'Das habe ich wohl vergessen.' },
      ],
      practiceSentences: [
        { de: 'Ich rufe Sie morgen an.', ru: 'Я позвоню Вам завтра.', note: 'отделяемая приставка an' },
        { de: 'Bei mir fehlt ein Dokument.', ru: 'У меня не хватает документа.', note: 'V2, безличное употребление' },
        { de: 'Das habe ich vergessen.', ru: 'Я это забыл.', note: 'Perfekt: habe + Partizip' },
        { de: 'Haben Sie alles?', ru: 'У Вас всё есть?', note: 'V1 в вопросе' },
        { de: 'Die Papiere sind da.', ru: 'Документы есть.', note: 'V2 sein + da для наличия' },
      ],
      question: {
        de: 'Was fehlt noch bei den Unterlagen?',
        ru: 'Чего не хватает в документах?',
        options: [
          { de: 'Das Foto', ru: 'Фотографии' },
          { de: 'Die Bewerbung', ru: 'Заявления' },
          { de: 'Das Zeugnis vom Schulabschluss', ru: 'Свидетельства об окончании школы' },
        ],
        correct: 2,
        explanation: 'Фрау Арнсторф говорит: "bei Ihren Unterlagen noch etwas fehlt: das Zeugnis von Ihrem Schulabschluss."'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Fanny',
      type: 'интервью',
      text: 'Hallo! Wir haben heute Fanny bei uns zu Gast. Fanny kommt aus Wien, lebt aber seit zehn Jahren in Berlin. Guten Abend! Fanny, seit letztem Sommer kennt Sie eigentlich jeder in Deutschland. Da hatten Sie Ihren großen Hit „Tanz Tanz". Genau, das war ein Riesenerfolg! Das kann ich bis heute kaum glauben. Aber eigentlich singe ich schon seit fünf Jahren mit meiner Band. Sind Sie aus einer musikalischen Familie oder wo haben Sie singen gelernt? Also, Musik war bei uns zu Hause wichtig. Wir haben immer Musik gehört, aber wir haben nie gesungen oder so. Damit habe ich in der Schule angefangen. Sie haben ja eine tolle Stimme und tolle Texte. Wer schreibt die? Also, die sind von mir, aber die Ideen besprechen wir lange in der Band. Natürlich tausche ich mich auch mit Freunden aus. Mir macht das großen Spaß. Also etwas Teamwork ist auch dabei? Gestern Abend hatten Sie ein großes Konzert hier in Berlin. Wie war es? Das Konzert gestern war super! Ich singe gern vor Publikum. Aber ich mag lieber Konzerte in kleinen Clubs. Die großen Hallen mit tausenden Fans sind nichts für mich. Aber vielleicht gewöhne ich mich noch daran. Wie sehen Ihre Pläne für die nächsten Monate aus? Kommt eine neue CD? Das dauert noch. Ich möchte jetzt in Ruhe neue Lieder schreiben. Dafür nehme ich mir einige Monate Zeit. Dann hören wir jetzt erstmal Ihren großen Hit „Tanz Tanz" und danach können Sie gern hier im Studio anrufen!',
      sentenceTranslations: {
        'Hallo!': { literal: 'Привет!', literary: 'Здравствуйте!' },
        'Wir haben heute Fanny bei uns zu Gast.': { literal: 'Мы имеем сегодня Фанни у нас в гостях', literary: 'Сегодня у нас в гостях Фанни.' },
        'Fanny kommt aus Wien, lebt aber seit zehn Jahren in Berlin.': { literal: 'Фанни происходит из Вены, живёт однако с десять лет в Берлине', literary: 'Фанни родом из Вены, но уже десять лет живёт в Берлине.' },
        'Guten Abend!': { literal: 'Добрый вечер!', literary: 'Добрый вечер!' },
        'Fanny, seit letztem Sommer kennt Sie eigentlich jeder in Deutschland.': { literal: 'Фанни, с прошлого лета знает Вас собственно каждый в Германии', literary: 'Фанни, с прошлого лета Вас знает, по сути, каждый в Германии.' },
        'Da hatten Sie Ihren großen Hit „Tanz Tanz".': { literal: 'Тогда имели Вы Ваш большой хит «Танец Танец»', literary: 'Тогда у Вас был большой хит «Танец Танец».' },
        'Genau, das war ein Riesenerfolg!': { literal: 'Точно, это был огромный успех!', literary: 'Да, это был огромный успех!' },
        'Das kann ich bis heute kaum glauben.': { literal: 'Это могу я до сегодня едва верить', literary: 'Я до сих пор едва могу в это поверить.' },
        'Aber eigentlich singe ich schon seit fünf Jahren mit meiner Band.': { literal: 'Но собственно пою я уже с пять лет с моей группой', literary: 'Но вообще-то я пою со своей группой уже пять лет.' },
        'Sind Sie aus einer musikalischen Familie oder wo haben Sie singen gelernt?': { literal: 'Есть Вы из музыкальной семьи или где имеете Вы петь выучили?', literary: 'Вы из музыкальной семьи или где вы научились петь?' },
        'Also, Musik war bei uns zu Hause wichtig.': { literal: 'Ну, музыка была у нас дома важной', literary: 'Ну, музыка была важна в нашем доме.' },
        'Wir haben immer Musik gehört, aber wir haben nie gesungen oder so.': { literal: 'Мы имеем всегда музыку слушали, но мы имеем никогда не пели или так', literary: 'Мы всегда слушали музыку, но никогда не пели.' },
        'Damit habe ich in der Schule angefangen.': { literal: 'С этим имею я в школе начала', literary: 'Я начала с этого в школе.' },
        'Sie haben ja eine tolle Stimme und tolle Texte.': { literal: 'Вы имеете же замечательный голос и замечательные тексты', literary: 'У Вас замечательный голос и отличные тексты.' },
        'Wer schreibt die?': { literal: 'Кто пишет их?', literary: 'Кто их пишет?' },
        'Also, die sind von mir, aber die Ideen besprechen wir lange in der Band.': { literal: 'Ну, они есть от меня, но идеи обсуждаем мы долго в группе', literary: 'Они мои, но идеи мы долго обсуждаем в группе.' },
        'Natürlich tausche ich mich auch mit Freunden aus.': { literal: 'Конечно обмениваюсь я себя тоже с друзьями', literary: 'Конечно, я также обмениваюсь мнениями с друзьями.' },
        'Mir macht das großen Spaß.': { literal: 'Мне делает это большое веселье', literary: 'Мне это очень нравится.' },
        'Also etwas Teamwork ist auch dabei?': { literal: 'Итак немного командной работы есть тоже при этом?', literary: 'То есть командная работа тоже присутствует?' },
        'Gestern Abend hatten Sie ein großes Konzert hier in Berlin.': { literal: 'Вчера вечером имели Вы большой концерт здесь в Берлине', literary: 'Вчера вечером у Вас был большой концерт здесь, в Берлине.' },
        'Wie war es?': { literal: 'Как было это?', literary: 'Как прошло?' },
        'Das Konzert gestern war super!': { literal: 'Концерт вчера был супер!', literary: 'Вчерашний концерт был супер!' },
        'Ich singe gern vor Publikum.': { literal: 'Я пою охотно перед публикой', literary: 'Мне нравится петь перед публикой.' },
        'Aber ich mag lieber Konzerte in kleinen Clubs.': { literal: 'Но я люблю лучше концерты в маленьких клубах', literary: 'Но я предпочитаю концерты в маленьких клубах.' },
        'Die großen Hallen mit tausenden Fans sind nichts für mich.': { literal: 'Большие залы с тысячами фанатов есть ничего для меня', literary: 'Большие залы с тысячами фанатов — это не для меня.' },
        'Aber vielleicht gewöhne ich mich noch daran.': { literal: 'Но может быть привыкаю я себя ещё к этому', literary: 'Но, может, я ещё к этому привыкну.' },
        'Wie sehen Ihre Pläne für die nächsten Monate aus?': { literal: 'Как выглядят Ваши планы для следующих месяцев?', literary: 'Какие у Вас планы на ближайшие месяцы?' },
        'Kommt eine neue CD?': { literal: 'Приходит новый диск?', literary: 'Будет новый альбом?' },
        'Das dauert noch.': { literal: 'Это длится ещё', literary: 'Это ещё не скоро.' },
        'Ich möchte jetzt in Ruhe neue Lieder schreiben.': { literal: 'Я хотела бы сейчас в покое новые песни писать', literary: 'Я хочу сейчас спокойно писать новые песни.' },
        'Dafür nehme ich mir einige Monate Zeit.': { literal: 'Для этого беру я себе несколько месяцев время', literary: 'На это я выделяю себе несколько месяцев.' },
        'Dann hören wir jetzt erstmal Ihren großen Hit „Tanz Tanz" und danach können Sie gern hier im Studio anrufen!': { literal: 'Тогда слушаем мы сейчас сначала Ваш большой хит «Танец Танец» и потом можете Вы охотно здесь в студии позвонить!', literary: 'Тогда давайте сначала послушаем Ваш большой хит «Танец Танец», а потом вы можете позвонить к нам в студию!' },
      },
      vocabulary: [
        { de: 'der Gast', plural: 'die Gäste', ru: 'гость', gender: 'maskulin', example: 'Wir haben heute Fanny bei uns zu Gast.' },
        { de: 'der Hit', plural: 'die Hits', ru: 'хит', gender: 'maskulin', example: 'Da hatten Sie Ihren großen Hit „Tanz Tanz".' },
        { de: 'die Band', plural: 'die Bands', ru: 'музыкальная группа', gender: 'feminin', example: 'Aber eigentlich singe ich schon seit fünf Jahren mit meiner Band.' },
        { de: 'die Stimme', plural: 'die Stimmen', ru: 'голос', gender: 'feminin', example: 'Sie haben ja eine tolle Stimme und tolle Texte.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', example: 'Gestern Abend hatten Sie ein großes Konzert hier in Berlin.' },
        { de: 'das Publikum', plural: '-', ru: 'публика', gender: 'neutrum', example: 'Ich singe gern vor Publikum.' },
        { de: 'die Halle', plural: 'die Hallen', ru: 'зал', gender: 'feminin', example: 'Die großen Hallen mit tausenden Fans sind nichts für mich.' },
        { de: 'das Lied', plural: 'die Lieder', ru: 'песня', gender: 'neutrum', example: 'Ich möchte jetzt in Ruhe neue Lieder schreiben.' },
        { de: 'der Plan', plural: 'die Pläne', ru: 'план', gender: 'maskulin', example: 'Wie sehen Ihre Pläne für die nächsten Monate aus?' },
        { de: 'singen', ru: 'петь', type: 'verb', forms: 'singt, sang, hat gesungen', example: 'Aber eigentlich singe ich schon seit fünf Jahren mit meiner Band.' },
        { de: 'besprechen', ru: 'обсуждать', type: 'verb', forms: 'bespricht, besprach, hat besprochen', example: 'Die Ideen besprechen wir lange in der Band.' },
        { de: 'sich gewöhnen an', ru: 'привыкать к', type: 'verb', forms: 'gewöhnt sich, gewöhnte sich, hat sich gewöhnt', example: 'Aber vielleicht gewöhne ich mich noch daran.' },
        { de: 'dauern', ru: 'длиться, продолжаться', type: 'verb', forms: 'dauert, dauerte, hat gedauert', example: 'Das dauert noch.' },
        { de: 'musikalisch', ru: 'музыкальный', type: 'adj', example: 'Sind Sie aus einer musikalischen Familie?' },
        { de: 'kaum', ru: 'едва', type: 'adv', example: 'Das kann ich bis heute kaum glauben.' },
      ],
      practiceSentences: [
        { de: 'Ich lebe seit zwei Jahren hier.', ru: 'Я живу здесь два года.', note: 'V2 простой глагол' },
        { de: 'Das kann ich nicht glauben.', ru: 'Я не могу в это поверить.', note: 'модальный kann + инфинитив' },
        { de: 'Damit habe ich angefangen.', ru: 'С этого я начал.', note: 'Perfekt с отделяемой приставкой' },
        { de: 'Musik macht mir Spaß.', ru: 'Музыка мне нравится.', note: 'V2, устойчивое выражение' },
        { de: 'Ich gewöhne mich daran.', ru: 'Я к этому привыкаю.', note: 'V2 возвратный + an' },
      ],
      question: {
        de: 'Was mag Fanny lieber?',
        ru: 'Что Фанни предпочитает?',
        options: [
          { de: 'Konzerte in großen Hallen', ru: 'Концерты в больших залах' },
          { de: 'Konzerte in kleinen Clubs', ru: 'Концерты в маленьких клубах' },
          { de: 'Konzerte im Studio', ru: 'Концерты в студии' },
        ],
        correct: 1,
        explanation: 'Фанни говорит: "Aber ich mag lieber Konzerte in kleinen Clubs. Die großen Hallen mit tausenden Fans sind nichts für mich."'
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

  /* ─── Агрегированные переводы (геттер) ─── */
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
    'Perfekt с haben: hat angerufen, hat unterschrieben, hat geklappt, hat angefangen',
    'Perfekt с sein: ist kaputt gegangen, ist geritten, ist gesunken',
    'Модальные глаголы V2 + инфинитив в конце: kann nicht kommen, muss lernen, sollten kommen, möchte schreiben',
    'Отделяемые приставки: anrufen (ruf...an), abholen (hole...ab), stattfinden (findet...statt), anfangen (fange...an), mitbringen (bringe...mit)',
    'Nebensatz с dass: Ich bin froh, dass wir diesen Wohnungstausch machen (глагол в конце)',
    'Nebensatz с wenn: Entschuldigen Sie bitte, wenn wir laut waren (глагол в конце)',
    'Nebensatz с ob: Sie hat mich gefragt, ob ich Lust habe zu reiten (косвенный вопрос)',
    'werden + компаратив (изменение состояния): Dann wird es auch dort kühler',
    'seit + Dativ (длительность): seit zehn Jahren, seit fünf Jahren, seit letztem Sommer',
    'Безличные конструкции: es gibt, es regnet, es tut mir leid, es geht (Dativ)',
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Paula).',
    },
  },
};

LESSONS.push(LESSON_04);
