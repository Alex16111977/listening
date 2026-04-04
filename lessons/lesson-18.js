/* ═══════════════════════════════════════════════════════════
   Lesson 18 — Goethe Zertifikat A2 Hören Modelltest
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_18 = {
  id: 'lesson-18',
  number: 18,
  title: 'Goethe A2 Hören — Modelltest 18',
  subtitle: 'Smartphone, Flughafen, Reparatur, Sprachkurs, Theater, Wochenende, Sport, Transport, Berufsfragen, Krimiautorin',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-18',
  videoUrl: 'https://www.youtube.com/watch?v=bSfW5fPFaOg',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Tina',
      type: 'телефонное сообщение',
      text: 'Hallo Martin, ich bin\'s Tina. Du, ich glaube, ich habe mein Smartphone bei dir im Wohnzimmer liegen lassen. Schaust du bitte mal, ob es irgendwo herumliegt? Gib mir bitte sobald wie möglich Bescheid, denn ich brauche mein Smartphone dringend. Danke, tschüss.',
      sentenceTranslations: {
        'Hallo Martin, ich bin\'s Tina.': { literal: 'Привет Мартин, я есть это Тина', literary: 'Привет, Мартин, это Тина.' },
        'Du, ich glaube, ich habe mein Smartphone bei dir im Wohnzimmer liegen lassen.': { literal: 'Ты, я думаю, я имею мой смартфон у тебя в гостиной лежать оставить', literary: 'Слушай, я думаю, я оставила свой смартфон у тебя в гостиной.' },
        'Schaust du bitte mal, ob es irgendwo herumliegt?': { literal: 'Смотришь ты пожалуйста раз, ли оно где-нибудь валяется', literary: 'Посмотри, пожалуйста, не валяется ли он где-нибудь?' },
        'Gib mir bitte sobald wie möglich Bescheid, denn ich brauche mein Smartphone dringend.': { literal: 'Дай мне пожалуйста так скоро как возможно известие, ибо я нуждаюсь мой смартфон срочно', literary: 'Дай мне знать как можно скорее, потому что мне срочно нужен смартфон.' },
        'Danke, tschüss.': { literal: 'Спасибо, пока', literary: 'Спасибо, пока.' },
      },
      vocabulary: [
        { de: 'das Smartphone', plural: 'die Smartphones', ru: 'смартфон', gender: 'neutrum', collocation: 'mein Smartphone liegen lassen', example: 'Ich habe mein Smartphone bei dir im Wohnzimmer liegen lassen.' },
        { de: 'das Wohnzimmer', plural: 'die Wohnzimmer', ru: 'гостиная', gender: 'neutrum', collocation: 'im Wohnzimmer liegen', example: 'Ich habe mein Smartphone bei dir im Wohnzimmer liegen lassen.' },
        { de: 'der Bescheid', plural: 'die Bescheide', ru: 'известие, ответ', gender: 'maskulin', collocation: 'Bescheid geben', example: 'Gib mir bitte sobald wie möglich Bescheid.' },
        { de: 'herumliegen', ru: 'валяться', type: 'verb', forms: 'liegt herum, lag herum, hat herumgelegen', example: 'Schaust du bitte mal, ob es irgendwo herumliegt?' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'brauche, brauchte, hat gebraucht', example: 'Ich brauche mein Smartphone dringend.' },
        { de: 'dringend', ru: 'срочно', type: 'adv', example: 'Ich brauche mein Smartphone dringend.' },
      ],
      practiceSentences: [
        { de: 'Ich habe mein Buch liegen lassen.', ru: 'Я оставил свою книгу.', note: 'Perfekt с двойным инфинитивом' },
        { de: 'Gib mir bitte Bescheid!', ru: 'Дай мне знать, пожалуйста!', note: 'императив' },
        { de: 'Das liegt irgendwo herum.', ru: 'Это где-то валяется.', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Was möchte Tina von Martin?',
        ru: 'Что хочет Тина от Мартина?',
        options: [
          { de: 'Sie möchte ihn morgen besuchen', ru: 'Она хочет навестить его завтра' },
          { de: 'Sie möchte, dass er nach ihrem Smartphone sucht', ru: 'Она хочет, чтобы он поискал её смартфон' },
          { de: 'Sie möchte ihr Wohnzimmer aufräumen', ru: 'Она хочет убрать свою гостиную' },
        ],
        correct: 1,
        explanation: 'Тина говорит: "schaust du bitte mal ob es irgendwo herumliegt" — она просит Мартина поискать её смартфон.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Flug LH 241',
      type: 'объявление в аэропорту',
      text: 'Hier folgt eine Durchsage für die Fluggäste des Fluges LH 241 nach Athen. Das Flugzeug kann im Moment wegen schlechter Wetterbedingungen in Athen nicht starten. Das Boarding verschiebt sich um unbestimmte Zeit. Bitte warten Sie auf weitere Informationen.',
      sentenceTranslations: {
        'Hier folgt eine Durchsage für die Fluggäste des Fluges LH 241 nach Athen.': { literal: 'Здесь следует одно объявление для пассажиров рейса LH 241 в Афины', literary: 'Внимание, объявление для пассажиров рейса LH 241 в Афины.' },
        'Das Flugzeug kann im Moment wegen schlechter Wetterbedingungen in Athen nicht starten.': { literal: 'Самолёт может в момент из-за плохих погодных условий в Афинах не стартовать', literary: 'Самолёт в данный момент не может вылететь из-за плохих погодных условий в Афинах.' },
        'Das Boarding verschiebt sich um unbestimmte Zeit.': { literal: 'Посадка откладывает себя на неопределённое время', literary: 'Посадка откладывается на неопределённое время.' },
        'Bitte warten Sie auf weitere Informationen.': { literal: 'Пожалуйста ждите вы на дальнейшие информации', literary: 'Пожалуйста, ожидайте дальнейшей информации.' },
      },
      vocabulary: [
        { de: 'die Durchsage', plural: 'die Durchsagen', ru: 'объявление', gender: 'feminin', collocation: 'eine Durchsage für Fluggäste', example: 'Hier folgt eine Durchsage für die Fluggäste des Fluges LH 241 nach Athen.' },
        { de: 'der Fluggast', plural: 'die Fluggäste', ru: 'пассажир (авиа)', gender: 'maskulin', collocation: 'für die Fluggäste', example: 'Hier folgt eine Durchsage für die Fluggäste des Fluges LH 241 nach Athen.' },
        { de: 'das Flugzeug', plural: 'die Flugzeuge', ru: 'самолёт', gender: 'neutrum', collocation: 'das Flugzeug kann nicht starten', example: 'Das Flugzeug kann im Moment wegen schlechter Wetterbedingungen in Athen nicht starten.' },
        { de: 'das Boarding', plural: 'die Boardings', ru: 'посадка', gender: 'neutrum', collocation: 'das Boarding verschiebt sich', example: 'Das Boarding verschiebt sich um unbestimmte Zeit.' },
        { de: 'starten', ru: 'взлетать, стартовать', type: 'verb', forms: 'startet, startete, ist gestartet', example: 'Das Flugzeug kann im Moment nicht starten.' },
        { de: 'sich verschieben', ru: 'откладываться', type: 'verb', forms: 'verschiebt sich, verschob sich, hat sich verschoben', example: 'Das Boarding verschiebt sich um unbestimmte Zeit.' },
        { de: 'warten auf', ru: 'ждать чего-то', type: 'verb', forms: 'wartet, wartete, hat gewartet', example: 'Bitte warten Sie auf weitere Informationen.' },
        { de: 'schlecht', ru: 'плохой', type: 'adj', example: 'Das Flugzeug kann wegen schlechter Wetterbedingungen nicht starten.' },
      ],
      practiceSentences: [
        { de: 'Der Zug kann heute nicht fahren.', ru: 'Поезд сегодня не может ехать.', note: 'модальный + инфинитив' },
        { de: 'Die Reise verschiebt sich um zwei Tage.', ru: 'Поездка откладывается на два дня.', note: 'возвратный глагол' },
        { de: 'Wir warten auf den Bus.', ru: 'Мы ждём автобус.', note: 'warten auf + Akk' },
      ],
      question: {
        de: 'Warum kann das Flugzeug nicht starten?',
        ru: 'Почему самолёт не может вылететь?',
        options: [
          { de: 'Wegen technischer Probleme', ru: 'Из-за технических проблем' },
          { de: 'Wegen schlechten Wetters in Athen', ru: 'Из-за плохой погоды в Афинах' },
          { de: 'Wegen Verspätung der Crew', ru: 'Из-за опоздания экипажа' },
        ],
        correct: 1,
        explanation: 'В объявлении говорится: "wegen schlechter Wetterbedingungen in Athen" — из-за плохих погодных условий в Афинах.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Sabine Karl',
      type: 'сообщение о ремонте',
      text: 'Guten Morgen, Herr Vogel, hier ist Sabine Karl von der Firma Wormtech. Unser Monteur kommt morgen um 10 Uhr für die Reparatur Ihrer Heizung. Rufen Sie bitte zurück oder schicken Sie uns eine E-Mail, wenn Ihnen der Termin nicht passt. Herzlichen Dank und auf Wiederhören.',
      sentenceTranslations: {
        'Guten Morgen, Herr Vogel, hier ist Sabine Karl von der Firma Wormtech.': { literal: 'Доброе утро, господин Фогель, здесь есть Забине Карл от фирмы Вормтех', literary: 'Доброе утро, господин Фогель, это Забине Карл из фирмы Wormtech.' },
        'Unser Monteur kommt morgen um 10 Uhr für die Reparatur Ihrer Heizung.': { literal: 'Наш монтёр приходит завтра в 10 часов для ремонта вашего отопления', literary: 'Наш монтёр придёт завтра в 10 часов для ремонта вашего отопления.' },
        'Rufen Sie bitte zurück oder schicken Sie uns eine E-Mail, wenn Ihnen der Termin nicht passt.': { literal: 'Позвоните вы пожалуйста назад или пошлите вы нам один имейл, если вам срок не подходит', literary: 'Пожалуйста, перезвоните или отправьте нам электронное письмо, если вам не подходит это время.' },
        'Herzlichen Dank und auf Wiederhören.': { literal: 'Сердечная благодарность и на переслышание', literary: 'Сердечное спасибо и до свидания.' },
      },
      vocabulary: [
        { de: 'die Firma', plural: 'die Firmen', ru: 'фирма, компания', gender: 'feminin', collocation: 'von der Firma', example: 'Hier ist Sabine Karl von der Firma Wormtech.' },
        { de: 'der Monteur', plural: 'die Monteure', ru: 'монтёр, мастер', gender: 'maskulin', collocation: 'unser Monteur kommt', example: 'Unser Monteur kommt morgen um 10 Uhr für die Reparatur Ihrer Heizung.' },
        { de: 'die Reparatur', plural: 'die Reparaturen', ru: 'ремонт', gender: 'feminin', collocation: 'für die Reparatur', example: 'Unser Monteur kommt morgen um 10 Uhr für die Reparatur Ihrer Heizung.' },
        { de: 'die Heizung', plural: 'die Heizungen', ru: 'отопление', gender: 'feminin', collocation: 'Reparatur der Heizung', example: 'Unser Monteur kommt morgen um 10 Uhr für die Reparatur Ihrer Heizung.' },
        { de: 'der Termin', plural: 'die Termine', ru: 'встреча, время приёма', gender: 'maskulin', collocation: 'der Termin passt', example: 'Rufen Sie bitte zurück, wenn Ihnen der Termin nicht passt.' },
        { de: 'zurückrufen', ru: 'перезвонить', type: 'verb', forms: 'ruft zurück, rief zurück, hat zurückgerufen', example: 'Rufen Sie bitte zurück.' },
        { de: 'schicken', ru: 'отправлять', type: 'verb', forms: 'schickt, schickte, hat geschickt', example: 'Schicken Sie uns eine E-Mail.' },
        { de: 'passen', ru: 'подходить', type: 'verb', forms: 'passt, passte, hat gepasst', example: 'Rufen Sie bitte zurück, wenn Ihnen der Termin nicht passt.' },
      ],
      practiceSentences: [
        { de: 'Der Techniker kommt um 14 Uhr.', ru: 'Техник придёт в 14 часов.', note: 'V2' },
        { de: 'Rufen Sie mich morgen zurück!', ru: 'Перезвоните мне завтра!', note: 'императив, отделяемая приставка' },
        { de: 'Passt Ihnen der Montag?', ru: 'Вам подходит понедельник?', note: 'Dativ-управление' },
      ],
      question: {
        de: 'Wann kommt der Monteur?',
        ru: 'Когда придёт монтёр?',
        options: [
          { de: 'Heute um 10 Uhr', ru: 'Сегодня в 10 часов' },
          { de: 'Morgen um 10 Uhr', ru: 'Завтра в 10 часов' },
          { de: 'Nächste Woche', ru: 'На следующей неделе' },
        ],
        correct: 1,
        explanation: 'Забине Карл говорит: "unser Monteur kommt morgen um 10 Uhr" — монтёр придёт завтра в 10 часов.'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Sprachkurs',
      type: 'сообщение о курсе',
      text: 'Guten Tag, Frau Gruber, Sie haben bei uns einen Sprachkurs auf Niveau B1 gebucht. Wir benötigen noch die Teilnahmebestätigung von Ihrem letzten Kurs. Könnten Sie uns die per E-Mail zuschicken? Herzlichen Dank, auf Wiederhören.',
      sentenceTranslations: {
        'Guten Tag, Frau Gruber, Sie haben bei uns einen Sprachkurs auf Niveau B1 gebucht.': { literal: 'Добрый день, госпожа Грубер, вы имеете у нас один языковой курс на уровне B1 забронированным', literary: 'Добрый день, госпожа Грубер, вы записались у нас на языковой курс уровня B1.' },
        'Wir benötigen noch die Teilnahmebestätigung von Ihrem letzten Kurs.': { literal: 'Мы нуждаемся ещё подтверждение участия от вашего последнего курса', literary: 'Нам ещё нужно подтверждение участия с вашего последнего курса.' },
        'Könnten Sie uns die per E-Mail zuschicken?': { literal: 'Могли бы вы нам его по электронной почте прислать', literary: 'Не могли бы вы прислать нам его по электронной почте?' },
        'Herzlichen Dank, auf Wiederhören.': { literal: 'Сердечная благодарность, на переслышание', literary: 'Сердечное спасибо, до свидания.' },
      },
      vocabulary: [
        { de: 'der Sprachkurs', plural: 'die Sprachkurse', ru: 'языковой курс', gender: 'maskulin', collocation: 'einen Sprachkurs buchen', example: 'Sie haben bei uns einen Sprachkurs auf Niveau B1 gebucht.' },
        { de: 'das Niveau', plural: 'die Niveaus', ru: 'уровень', gender: 'neutrum', collocation: 'auf Niveau B1', example: 'Sie haben bei uns einen Sprachkurs auf Niveau B1 gebucht.' },
        { de: 'die Teilnahmebestätigung', plural: 'die Teilnahmebestätigungen', ru: 'подтверждение участия', gender: 'feminin', collocation: 'die Teilnahmebestätigung benötigen', example: 'Wir benötigen noch die Teilnahmebestätigung von Ihrem letzten Kurs.' },
        { de: 'buchen', ru: 'бронировать, записываться', type: 'verb', forms: 'bucht, buchte, hat gebucht', example: 'Sie haben bei uns einen Sprachkurs auf Niveau B1 gebucht.' },
        { de: 'benötigen', ru: 'нуждаться', type: 'verb', forms: 'benötigt, benötigte, hat benötigt', example: 'Wir benötigen noch die Teilnahmebestätigung von Ihrem letzten Kurs.' },
        { de: 'zuschicken', ru: 'присылать', type: 'verb', forms: 'schickt zu, schickte zu, hat zugeschickt', example: 'Könnten Sie uns die per E-Mail zuschicken?' },
      ],
      practiceSentences: [
        { de: 'Ich habe einen Deutschkurs gebucht.', ru: 'Я записался на курс немецкого.', note: 'Perfekt' },
        { de: 'Könnten Sie mir helfen?', ru: 'Не могли бы вы мне помочь?', note: 'Konjunktiv II' },
        { de: 'Schicken Sie uns die Dokumente zu!', ru: 'Пришлите нам документы!', note: 'императив, отделяемая приставка' },
      ],
      question: {
        de: 'Was benötigt die Sprachschule noch?',
        ru: 'Что ещё нужно языковой школе?',
        options: [
          { de: 'Die Kursgebühr', ru: 'Оплата курса' },
          { de: 'Die Teilnahmebestätigung vom letzten Kurs', ru: 'Подтверждение участия с последнего курса' },
          { de: 'Ein Passfoto', ru: 'Фото на паспорт' },
        ],
        correct: 1,
        explanation: 'Говорится: "wir benötigen noch die Teilnahmebestätigung von ihrem letzten Kurs" — нужно подтверждение с последнего курса.'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Theaterkasse',
      type: 'сообщение о спектакле',
      text: 'Guten Tag, Frau Müller, hier ist Martina Werner von der Theaterkasse. Die Aufführung von Wilhelm Tell im Marktplatz Theater fällt heute Abend aus. Zwei Schauspieler sind krank. Als Ersatztermin für die Aufführung ist der 31. März vorgesehen. Sie können Ihre Karten bei uns umtauschen oder die Karten zurückgeben und Ihr Geld zurückbekommen. Vielen Dank für Ihr Verständnis.',
      sentenceTranslations: {
        'Guten Tag, Frau Müller, hier ist Martina Werner von der Theaterkasse.': { literal: 'Добрый день, госпожа Мюллер, здесь есть Мартина Вернер от театральной кассы', literary: 'Добрый день, госпожа Мюллер, это Мартина Вернер из театральной кассы.' },
        'Die Aufführung von Wilhelm Tell im Marktplatz Theater fällt heute Abend aus.': { literal: 'Представление Вильгельма Телля в театре Марктплац выпадает сегодня вечером', literary: 'Спектакль "Вильгельм Телль" в театре Марктплац сегодня вечером отменяется.' },
        'Zwei Schauspieler sind krank.': { literal: 'Два актёра есть больны', literary: 'Двое актёров заболели.' },
        'Als Ersatztermin für die Aufführung ist der 31. März vorgesehen.': { literal: 'Как замещающий срок для представления есть 31 марта предусмотрен', literary: 'В качеств�� новой даты спектакля запланировано 31 марта.' },
        'Als Ersatztermin für die Aufführung ist der 31.': { literal: 'Как замена-срок для представления есть 31-е', literary: 'В качестве замены назначено 31-е' },
        'März vorgesehen.': { literal: 'марта предусмотрено', literary: 'мар��а.' },
        'Sie können Ihre Karten bei uns umtauschen oder die Karten zurückgeben und Ihr Geld zurückbekommen.': { literal: 'Вы можете ваши билеты у нас обменять или билеты назад дать и ваши деньги назад получить', literary: 'Вы можете обменять билеты у нас или вернуть билеты и получить деньги обратно.' },
        'Vielen Dank für Ihr Verständnis.': { literal: 'Большая благодарность за ваше понимание', literary: 'Большое спасибо за ваше понимание.' },
      },
      vocabulary: [
        { de: 'die Theaterkasse', plural: 'die Theaterkassen', ru: 'театральная касса', gender: 'feminin', collocation: 'von der Theaterkasse', example: 'Hier ist Martina Werner von der Theaterkasse.' },
        { de: 'die Aufführung', plural: 'die Aufführungen', ru: 'представление, спектакль', gender: 'feminin', collocation: 'die Aufführung fällt aus', example: 'Die Aufführung von Wilhelm Tell im Marktplatz Theater fällt heute Abend aus.' },
        { de: 'der Schauspieler', plural: 'die Schauspieler', ru: 'актёр', gender: 'maskulin', collocation: 'zwei Schauspieler sind krank', example: 'Zwei Schauspieler sind krank.' },
        { de: 'der Ersatztermin', plural: 'die Ersatztermine', ru: 'запасная дата', gender: 'maskulin', collocation: 'als Ersatztermin', example: 'Als Ersatztermin für die Aufführung ist der 31. März vorgesehen.' },
        { de: 'die Karte', plural: 'die Karten', ru: 'билет', gender: 'feminin', collocation: 'Karten umtauschen', example: 'Sie können Ihre Karten bei uns umtauschen.' },
        { de: 'das Verständnis', ru: 'понимание', gender: 'neutrum', collocation: 'Dank für Ihr Verständnis', example: 'Vielen Dank für Ihr Verständnis.' },
        { de: 'ausfallen', ru: 'отменяться', type: 'verb', forms: 'fällt aus, fiel aus, ist ausgefallen', example: 'Die Aufführung von Wilhelm Tell fällt heute Abend aus.' },
        { de: 'umtauschen', ru: 'обменивать', type: 'verb', forms: 'tauscht um, tauschte um, hat umgetauscht', example: 'Sie können Ihre Karten bei uns umtauschen.' },
        { de: 'zurückgeben', ru: 'возвращать', type: 'verb', forms: 'gibt zurück, gab zurück, hat zurückgegeben', example: 'Sie können die Karten zurückgeben.' },
        { de: 'zurückbekommen', ru: 'получить обратно', type: 'verb', forms: 'bekommt zurück, bekam zurück, hat zurückbekommen', example: 'Sie können Ihr Geld zurückbekommen.' },
      ],
      practiceSentences: [
        { de: 'Das Konzert fällt leider aus.', ru: 'Концерт, к сожалению, отменяется.', note: 'отделяемая приставка' },
        { de: 'Kann ich meine Karte umtauschen?', ru: 'Могу я обменять свой билет?', note: 'модальный V1' },
        { de: 'Sie bekommen Ihr Geld zurück.', ru: 'Вы получите деньги обратно.', note: 'отделяемая приставка' },
      ],
      question: {
        de: 'Was können die Kunden mit ihren Karten machen?',
        ru: 'Что могут сделать клиенты со своими билетами?',
        options: [
          { de: 'Nur umtauschen', ru: 'Только обменять' },
          { de: 'Nur zurückgeben', ru: 'Только вернуть' },
          { de: 'Umtauschen oder zurückgeben', ru: 'Обменять или вернуть' },
        ],
        correct: 2,
        explanation: 'Мартина Вернер предлагает два варианта: "sie können Ihre Karten bei uns umtauschen oder die Karten zurückgeben und ihr Geld zurückbekommen".'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Wochenende-Gespräch',
      type: 'разговор',
      text: 'Hallo Josef, wie war das Wochenende? Sehr schön, nach langer Zeit war es wieder sonnig und da wollte ich natürlich nicht zu Hause bleiben. Ich habe einen Ausflug in den Wald gemacht. Ich bin 16 km gelaufen. Und du, Karl, hast du auch etwas Schönes gemacht? Ich habe meinen neuen Geschirrspüler angeschlossen. Das war schwierig, weißt du, diese Bedienungsanleitungen sind so kompliziert, man versteht ja gar nichts. Aber gut, am Ende habe ich es doch geschafft. Der Geschirrspüler ist jetzt angeschlossen und funktioniert gut. Dann ist ja gut. Ich habe Joachim heute noch nicht gesehen. Weißt du vielleicht, wo er am Wochenende war? Wir wollten doch zusammen schwimmen gehen, aber er hat sich nicht gemeldet. Weißt du das nicht? Er hat das ganze Wochenende für seine Statistikprüfung gelernt. Ich habe ihn gestern Abend angerufen, er war richtig müde, der Arme. Aber weißt du, wen ich gestern im Wald getroffen habe? Stefan. Stefan im Wald? Ja, er hat mit ein paar Freunden ein Picknick gemacht. Es war so witzig, ihn in Freizeitkleidung zu sehen. Ja, kann ich mir vorstellen, sonst trägt er immer einen Anzug mit Krawatte. Und ich habe Niedrig gesehen, der war unten am Fluss. Ich denke, er hat auf seine Freundin gewartet. Und ist sie gekommen? Das weiß ich nicht, solange bin ich gar nicht geblieben. Ach, und Sebastian hat sein Diplom am Wochenende bekommen, oder? Nein, er bekommt das erst im nächsten Monat. Dann macht er bestimmt eine große Party. Am Wochenende war er allein zu Hause, glaube ich. Er hat sicher wieder am Computer gesessen, mit verschiedenen Leuten gechattet und mit seiner Freundin über das Internet telefoniert.',
      sentenceTranslations: {
        'Hallo Josef, wie war das Wochenende?': { literal: 'Привет Йозеф, как были выходные', literary: 'Привет, Йозеф, как прошли выходные?' },
        'Sehr schön, nach langer Zeit war es wieder sonnig und da wollte ich natürlich nicht zu Hause bleiben.': { literal: 'Очень красиво, после долгого времени было снова солнечно и тогда хотел я конечно не дома оставаться', literary: 'Очень хорошо, после долгого времени снова было солнечно, и я, конечно, не хотел сидеть дома.' },
        'Ich habe einen Ausflug in den Wald gemacht.': { literal: 'Я имею одну прогулку в лес сделанной', literary: 'Я совершил прогулку в лес.' },
        'Ich bin 16 km gelaufen.': { literal: 'Я есть 16 км пробежавший', literary: 'Я прошёл 16 км.' },
        'Und du, Karl, hast du auch etwas Schönes gemacht?': { literal: 'И ты, Карл, имеешь ты тоже что-то красивое сделанным', literary: 'А ты, Карл, тоже сделал что-нибудь интересное?' },
        'Ich habe meinen neuen Geschirrspüler angeschlossen.': { literal: 'Я имею мою новую посудомойку подключённой', literary: 'Я подключил свою новую посудомоечную машину.' },
        'Das war schwierig, weißt du, diese Bedienungsanleitungen sind so kompliziert, man versteht ja gar nichts.': { literal: 'Это было трудно, знаешь ты, эти инструкции есть так сложные, человек понимает же совсем ничего', literary: 'Это было сложно, знаешь, эти инструкции такие запутанные, совершенно ничего не понятно.' },
        'Aber gut, am Ende habe ich es doch geschafft.': { literal: 'Но хорошо, в конце имею я это же сделанным', literary: 'Ну ладно, в конце концов я справился.' },
        'Der Geschirrspüler ist jetzt angeschlossen und funktioniert gut.': { literal: 'Посудомойка есть теперь подключена и работает хорошо', literary: 'Посудомойка теперь подключена и работает хорошо.' },
        'Dann ist ja gut.': { literal: 'Тогда есть же хорошо', literary: 'Тогда хорошо.' },
        'Ich habe Joachim heute noch nicht gesehen.': { literal: 'Я имею Йоахима сегодня ещё не увиденным', literary: 'Я сегодня ещё не видел Йоахима.' },
        'Weißt du vielleicht, wo er am Wochenende war?': { literal: 'Знаешь ты может быть, где он на выходных был', literary: 'Ты не знаешь, где он был на выходных?' },
        'Wir wollten doch zusammen schwimmen gehen, aber er hat sich nicht gemeldet.': { literal: 'Мы хотели же вместе плавать идти, но он имеет себя не отозванным', literary: 'Мы же хотели вместе пойти поплавать, но он не отозвался.' },
        'Weißt du das nicht?': { literal: 'Знаешь ты это не', literary: 'Ты не знаешь?' },
        'Er hat das ganze Wochenende für seine Statistikprüfung gelernt.': { literal: 'Он имеет все выходные для своего экзамена по статистике учившимся', literary: 'Он все выходные учился к экзамену по статистике.' },
        'Ich habe ihn gestern Abend angerufen, er war richtig müde, der Arme.': { literal: 'Я имею его вчера вечером позвонившим, он был правильно усталый, бедняга', literary: 'Я позвонил ему вчера вечером, он был очень уставший, бедняга.' },
        'Aber weißt du, wen ich gestern im Wald getroffen habe?': { literal: 'Но знаешь ты, кого я вчера в лесу встретившим имею', literary: 'Но знаешь, кого я вчера встретил в лесу?' },
        'Stefan.': { literal: 'Штефан', literary: 'Штефана.' },
        'Stefan im Wald?': { literal: 'Штефан в лесу', literary: 'Штефан в лесу?' },
        'Ja, er hat mit ein paar Freunden ein Picknick gemacht.': { literal: 'Да, он имеет с парой друзей один пикник сделанным', literary: 'Да, он устроил пикник с несколькими друзьями.' },
        'Es war so witzig, ihn in Freizeitkleidung zu sehen.': { literal: 'Это было так забавно, его в свободной одежде видеть', literary: 'Было так забавно видеть его в повседневной одежде.' },
        'Ja, kann ich mir vorstellen, sonst trägt er immer einen Anzug mit Krawatte.': { literal: 'Да, могу я мне представить, иначе носит он всегда костюм с галстуком', literary: 'Да, могу себе представить, обычно он всегда носит костюм с галстуком.' },
        'Und ich habe Niedrig gesehen, der war unten am Fluss.': { literal: 'И я имею Нидрига увиденным, тот был внизу у реки', literary: 'И я видел Нидрига, он был внизу у реки.' },
        'Ich denke, er hat auf seine Freundin gewartet.': { literal: 'Я думаю, он имеет на свою подругу ждавшим', literary: 'Я думаю, он ждал свою подругу.' },
        'Und ist sie gekommen?': { literal: 'И есть она пришедшей', literary: 'И она пришла?' },
        'Das weiß ich nicht, solange bin ich gar nicht geblieben.': { literal: 'Это знаю я не, так долго есть я совсем не оставшимся', literary: 'Не знаю, я так долго не оставался.' },
        'Ach, und Sebastian hat sein Diplom am Wochenende bekommen, oder?': { literal: 'Ах, и Себастьян имеет свой диплом на выходных полученным, или', literary: 'Ах, и Себастьян получил свой диплом на выходных, да?' },
        'Nein, er bekommt das erst im nächsten Monat.': { literal: 'Нет, он получает это только в следующем месяце', literary: 'Нет, он получит его только в следующем месяце.' },
        'Dann macht er bestimmt eine große Party.': { literal: 'Тогда делает он определённо одну большую вечеринку', literary: 'Тогда он наверняка устроит большую вечеринку.' },
        'Am Wochenende war er allein zu Hause, glaube ich.': { literal: 'На выходных был он один дома, думаю я', literary: 'На выходных он был один дома, я думаю.' },
        'Er hat sicher wieder am Computer gesessen, mit verschiedenen Leuten gechattet und mit seiner Freundin über das Internet telefoniert.': { literal: 'Он имеет наверное снова за компьютером сидевшим, с различными людьми общавшимся и с своей подругой через интернет звонившим', literary: 'Он наверняка снова сидел за компьютером, общался в чате с разными людьми и звонил своей подруге через интернет.' },
      },
      vocabulary: [
        { de: 'das Wochenende', plural: 'die Wochenenden', ru: 'выходные', gender: 'neutrum', collocation: 'am Wochenende', example: 'Hallo Josef, wie war das Wochenende?' },
        { de: 'der Ausflug', plural: 'die Ausflüge', ru: 'прогулка, экскурсия', gender: 'maskulin', collocation: 'einen Ausflug machen', example: 'Ich habe einen Ausflug in den Wald gemacht.' },
        { de: 'der Wald', plural: 'die Wälder', ru: 'лес', gender: 'maskulin', collocation: 'in den Wald gehen', example: 'Ich habe einen Ausflug in den Wald gemacht.' },
        { de: 'der Geschirrspüler', plural: 'die Geschirrspüler', ru: 'посудомоечная машина', gender: 'maskulin', collocation: 'Geschirrspüler anschließen', example: 'Ich habe meinen neuen Geschirrspüler angeschlossen.' },
        { de: 'die Bedienungsanleitung', plural: 'die Bedienungsanleitungen', ru: 'инструкция', gender: 'feminin', collocation: 'komplizierte Bedienungsanleitung', example: 'Diese Bedienungsanleitungen sind so kompliziert.' },
        { de: 'die Statistikprüfung', plural: 'die Statistikprüfungen', ru: 'экзамен по статистике', gender: 'feminin', collocation: 'für die Prüfung lernen', example: 'Er hat das ganze Wochenende für seine Statistikprüfung gelernt.' },
        { de: 'das Picknick', plural: 'die Picknicks', ru: 'пикник', gender: 'neutrum', collocation: 'ein Picknick machen', example: 'Er hat mit ein paar Freunden ein Picknick gemacht.' },
        { de: 'die Freizeitkleidung', ru: 'повседневная одежда', gender: 'feminin', collocation: 'in Freizeitkleidung', example: 'Es war so witzig, ihn in Freizeitkleidung zu sehen.' },
        { de: 'der Anzug', plural: 'die Anzüge', ru: 'костюм', gender: 'maskulin', collocation: 'einen Anzug tragen', example: 'Sonst trägt er immer einen Anzug mit Krawatte.' },
        { de: 'die Krawatte', plural: 'die Krawatten', ru: 'галстук', gender: 'feminin', collocation: 'mit Krawatte', example: 'Sonst trägt er immer einen Anzug mit Krawatte.' },
        { de: 'das Diplom', plural: 'die Diplome', ru: 'диплом', gender: 'neutrum', collocation: 'sein Diplom bekommen', example: 'Sebastian hat sein Diplom am Wochenende bekommen.' },
        { de: 'anschließen', ru: 'подключать', type: 'verb', forms: 'schließt an, schloss an, hat angeschlossen', example: 'Ich habe meinen neuen Geschirrspüler angeschlossen.' },
        { de: 'sich melden', ru: 'давать о себе знать', type: 'verb', forms: 'meldet sich, meldete sich, hat sich gemeldet', example: 'Er hat sich nicht gemeldet.' },
        { de: 'treffen', ru: 'встречать', type: 'verb', forms: 'trifft, traf, hat getroffen', example: 'Weißt du, wen ich gestern im Wald getroffen habe?' },
        { de: 'tragen', ru: 'носить (одежду)', type: 'verb', forms: 'trägt, trug, hat getragen', example: 'Sonst trägt er immer einen Anzug mit Krawatte.' },
        { de: 'kompliziert', ru: 'сложный', type: 'adj', example: 'Diese Bedienungsanleitungen sind so kompliziert.' },
        { de: 'müde', ru: 'усталый', type: 'adj', example: 'Er war richtig müde, der Arme.' },
        { de: 'witzig', ru: 'забавный', type: 'adj', example: 'Es war so witzig, ihn in Freizeitkleidung zu sehen.' },
      ],
      practiceSentences: [
        { de: 'Ich habe das Gerät angeschlossen.', ru: 'Я подключил прибор.', note: 'Perfekt с отделяемой приставкой' },
        { de: 'Er lernt für die Prüfung.', ru: 'Он учится к экзамену.', note: 'V2' },
        { de: 'Wir haben Freunde getroffen.', ru: 'Мы встретили друзей.', note: 'Perfekt от treffen' },
      ],
      question: {
        de: 'Was hat Karl am Wochenende gemacht?',
        ru: 'Что делал Карл на выходных?',
        options: [
          { de: 'Er ist in den Wald gegangen', ru: 'Он ходил в лес' },
          { de: 'Er hat seinen Geschirrspüler angeschlossen', ru: 'Он подключил свою посудомоечную машину' },
          { de: 'Er hat für eine Prüfung gelernt', ru: 'Он готовился к экзамену' },
        ],
        correct: 1,
        explanation: 'Карл отвечает: "ich habe meinen neuen Geschirrspüler angeschlossen" — он подключил новую посудомойку.'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Tim',
      type: 'диалог о выходных',
      text: 'Hallo Tim, und was hast du am Wochenende gemacht? Ach, eigentlich wollte ich zum Fernsteinsee fahren und dort tauchen gehen, aber das hat nicht geklappt. Mein Auto ist kaputt gegangen. Oh nein! Dann wollte ich eine Radtour machen, aber alleine macht das auch keinen Spaß. Und was hast du dann gemacht? Dann hat mich Gabi angerufen, du weißt doch, sie hat ein Pferd. Sie hat mich gefragt, ob ich Lust habe, mal zu reiten, und das haben wir dann gemacht. Das war mal ganz was Anderes, hat Spaß gemacht. Und du, was hast du gemacht?',
      sentenceTranslations: {
        'Hallo Tim, und was hast du am Wochenende gemacht?': { literal: 'Привет Тим, и что имеешь ты на выходных сделанным', literary: 'Привет, Тим, а что ты делал на выходных?' },
        'Ach, eigentlich wollte ich zum Fernsteinsee fahren und dort tauchen gehen, aber das hat nicht geklappt.': { literal: 'Ах, собственно хотел я к озеру Фернштайн ехать и там нырять идти, но это имеет не сработанным', literary: 'Ах, вообще-то я хотел поехать на озеро Фернштайн и понырять, но не получилось.' },
        'Mein Auto ist kaputt gegangen.': { literal: 'Моя машина есть сломанной пошедшей', literary: 'Моя машина сломалась.' },
        'Oh nein!': { literal: 'О нет', literary: 'О нет!' },
        'Dann wollte ich eine Radtour machen, aber alleine macht das auch keinen Spaß.': { literal: 'Тогда хотел я одну велопрогулку сделать, но одному делает это тоже никакого удовольствия', literary: 'Тогда я хотел покататься на велосипеде, но одному это неинтересно.' },
        'Und was hast du dann gemacht?': { literal: 'И что имеешь ты тогда сделанным', literary: 'И что ты тогда сделал?' },
        'Dann hat mich Gabi angerufen, du weißt doch, sie hat ein Pferd.': { literal: 'Тогда имеет мне Габи позвонившей, ты знаешь же, она имеет одну лошадь', literary: 'Тогда мне позвонила Габи, ты же знаешь, у неё есть лошадь.' },
        'Sie hat mich gefragt, ob ich Lust habe, mal zu reiten, und das haben wir dann gemacht.': { literal: 'Она имеет меня спрошенной, ли я желание имею, разок покататься, и это имеем мы тогда сделанным', literary: 'Она спросила, не хочу ли я покататься верхом, и мы это сделали.' },
        'Das war mal ganz was Anderes, hat Spaß gemacht.': { literal: 'Это было разок совсем что-то другое, имеет удовольствие сделанным', literary: 'Это было что-то совсем другое, было весело.' },
        'Und du, was hast du gemacht?': { literal: 'И ты, что имеешь ты сделанным', literary: 'А ты, что делал?' },
      },
      vocabulary: [
        { de: 'der Fernsteinsee', ru: 'озеро Фернштайн', gender: 'maskulin', collocation: 'zum Fernsteinsee fahren', example: 'Eigentlich wollte ich zum Fernsteinsee fahren.' },
        { de: 'die Radtour', plural: 'die Radtouren', ru: 'велопрогулка', gender: 'feminin', collocation: 'eine Radtour machen', example: 'Dann wollte ich eine Radtour machen.' },
        { de: 'der Spaß', ru: 'удовольствие', gender: 'maskulin', collocation: 'Spaß machen', example: 'Alleine macht das auch keinen Spaß.' },
        { de: 'das Pferd', plural: 'die Pferde', ru: 'лошадь', gender: 'neutrum', collocation: 'ein Pferd haben', example: 'Du weißt doch, sie hat ein Pferd.' },
        { de: 'die Lust', ru: 'желание', gender: 'feminin', collocation: 'Lust haben zu', example: 'Sie hat mich gefragt, ob ich Lust habe, mal zu reiten.' },
        { de: 'tauchen', ru: 'нырять', type: 'verb', forms: 'taucht, tauchte, ist getaucht', example: 'Eigentlich wollte ich zum Fernsteinsee fahren und dort tauchen gehen.' },
        { de: 'klappen', ru: 'получаться', type: 'verb', forms: 'klappt, klappte, hat geklappt', example: 'Das hat nicht geklappt.' },
        { de: 'kaputtgehen', ru: 'ломаться', type: 'verb', forms: 'geht kaputt, ging kaputt, ist kaputtgegangen', example: 'Mein Auto ist kaputt gegangen.' },
        { de: 'reiten', ru: 'кататься верхом', type: 'verb', forms: 'reitet, ritt, ist geritten', example: 'Sie hat mich gefragt, ob ich Lust habe, mal zu reiten.' },
        { de: 'eigentlich', ru: 'вообще-то', type: 'adv', example: 'Eigentlich wollte ich zum Fernsteinsee fahren.' },
      ],
      practiceSentences: [
        { de: 'Mein Handy ist kaputt gegangen.', ru: 'Мой телефон сломался.', note: 'Perfekt с sein' },
        { de: 'Schwimmen macht mir Spaß.', ru: 'Плавание доставляет мне удовольствие.', note: 'Dativ-управление' },
        { de: 'Hast du Lust, spazieren zu gehen?', ru: 'Хочешь прогуляться?', note: 'zu + Infinitiv' },
      ],
      question: {
        de: 'Was hat Tim am Ende am Wochenende gemacht?',
        ru: 'Что в итоге делал Тим на выходных?',
        options: [
          { de: 'Er ist tauchen gegangen', ru: 'Он нырял' },
          { de: 'Er hat eine Radtour gemacht', ru: 'Он катался на велосипеде' },
          { de: 'Er ist reiten gegangen', ru: 'Он катался верхом' },
        ],
        correct: 2,
        explanation: 'Тим рассказывает: "dann hat mich Gabi angerufen... sie hat mich gefragt ob ich Lust habe mal zu reiten und das haben wir dann gemacht".'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Ines',
      type: 'диалог об учёбе',
      text: 'Ines, hast du schon für die Prüfung gelernt? Ja, aber noch nicht genug. Sag mal, wann kannst du eigentlich am besten lernen? Also eigentlich kann ich am Morgen am besten lernen. Aha, was meinst du denn mit eigentlich? Naja, ich arbeite ja morgens immer und am Nachmittag bin ich dann müde. Deshalb beginne ich doch oft erst am Abend. Da kann ich mich aber nicht so gut konzentrieren. Verstehe, dir geht es also auch nicht besser.',
      sentenceTranslations: {
        'Ines, hast du schon für die Prüfung gelernt?': { literal: 'Инес, имеешь ты уже для экзамена учившейся', literary: 'Инес, ты уже готовилась к экзамену?' },
        'Ja, aber noch nicht genug.': { literal: 'Да, но ещё не достаточно', literary: 'Да, но ещё недостаточно.' },
        'Sag mal, wann kannst du eigentlich am besten lernen?': { literal: 'Скажи раз, когда можешь ты собственно лучше всего учиться', literary: 'Скажи, когда ты вообще-то лучше всего учишься?' },
        'Also eigentlich kann ich am Morgen am besten lernen.': { literal: 'Итак собственно могу я утром лучше всего учиться', literary: 'Ну, вообще-то лучше всего я учусь утром.' },
        'Aha, was meinst du denn mit eigentlich?': { literal: 'Ага, что имеешь ты же в виду с собственно', literary: 'Ага, а что ты имеешь в виду под "вообще-то"?' },
        'Naja, ich arbeite ja morgens immer und am Nachmittag bin ich dann müde.': { literal: 'Ну, я работаю ведь утрами всегда и после обеда есть я тогда усталая', literary: 'Ну, я же всегда работаю по утрам, а после обеда устаю.' },
        'Deshalb beginne ich doch oft erst am Abend.': { literal: 'Поэтому начинаю я же часто лишь вечером', literary: 'Поэтому я часто начинаю только вечером.' },
        'Da kann ich mich aber nicht so gut konzentrieren.': { literal: 'Тогда могу я себя но не так хорошо концентрировать', literary: 'Но тогда я не могу так хорошо сосредоточиться.' },
        'Verstehe, dir geht es also auch nicht besser.': { literal: 'Понимаю, тебе идёт это итак тоже не лучше', literary: 'Понимаю, тебе тоже не легче.' },
      },
      vocabulary: [
        { de: 'die Prüfung', plural: 'die Prüfungen', ru: 'экзамен', gender: 'feminin', collocation: 'für die Prüfung lernen', example: 'Hast du schon für die Prüfung gelernt?' },
        { de: 'der Morgen', plural: 'die Morgen', ru: 'утро', gender: 'maskulin', collocation: 'am Morgen', example: 'Eigentlich kann ich am Morgen am besten lernen.' },
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'послеобеденное время', gender: 'maskulin', collocation: 'am Nachmittag', example: 'Am Nachmittag bin ich dann müde.' },
        { de: 'der Abend', plural: 'die Abende', ru: 'вечер', gender: 'maskulin', collocation: 'am Abend', example: 'Deshalb beginne ich doch oft erst am Abend.' },
        { de: 'beginnen', ru: 'начинать', type: 'verb', forms: 'beginnt, begann, hat begonnen', example: 'Deshalb beginne ich doch oft erst am Abend.' },
        { de: 'sich konzentrieren', ru: 'концентрироваться', type: 'verb', forms: 'konzentriert sich, konzentrierte sich, hat sich konzentriert', example: 'Da kann ich mich aber nicht so gut konzentrieren.' },
        { de: 'genug', ru: 'достаточно', type: 'adv', example: 'Ja, aber noch nicht genug.' },
      ],
      practiceSentences: [
        { de: 'Morgens arbeite ich immer.', ru: 'По утрам я всегда работаю.', note: 'V2 после обстоятельства' },
        { de: 'Deshalb lerne ich nachts.', ru: 'Поэтому я учусь ночью.', note: 'V2 после deshalb' },
        { de: 'Kannst du dich gut konzentrieren?', ru: 'Ты можешь хорошо сосредоточиться?', note: 'возвратный глагол' },
      ],
      question: {
        de: 'Wann kann Ines eigentlich am besten lernen?',
        ru: 'Когда Инес вообще-то лучше всего учится?',
        options: [
          { de: 'Am Morgen', ru: 'Утром' },
          { de: 'Am Nachmittag', ru: 'После обеда' },
          { de: 'Am Abend', ru: 'Вечером' },
        ],
        correct: 0,
        explanation: 'Инес говорит: "also eigentlich kann ich am Morgen am besten lernen" — вообще-то она лучше всего учится утром.'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Sarah/Tennis',
      type: 'диалог о спорте',
      text: 'Hey Sarah, spielst du eigentlich noch so oft Tennis? Nee, das macht mir gerade nicht so richtig Spaß. Echt? Und welchen Sport machst du jetzt? Ich habe ein paar Sachen ausprobiert, Volleyball, Basketball, im Fitnessstudio war ich auch, aber das hat mir alles nicht so richtig gefallen. Im Moment mache ich einen Yogakurs und ich muss sagen, das finde ich richtig gut. Ah, interessant.',
      sentenceTranslations: {
        'Hey Sarah, spielst du eigentlich noch so oft Tennis?': { literal: 'Хей Сара, играешь ты собственно ещё так часто теннис', literary: 'Эй, Сара, ты всё ещё так часто играешь в теннис?' },
        'Nee, das macht mir gerade nicht so richtig Spaß.': { literal: 'Неа, это делает мне сейчас не так правильно удовольствие', literary: 'Нет, сейчас мне это не особо нравится.' },
        'Echt?': { literal: 'Правда', literary: 'Правда?' },
        'Und welchen Sport machst du jetzt?': { literal: 'И какой спорт делаешь ты сейчас', literary: 'А каким спортом ты сейчас занимаешься?' },
        'Ich habe ein paar Sachen ausprobiert, Volleyball, Basketball, im Fitnessstudio war ich auch, aber das hat mir alles nicht so richtig gefallen.': { literal: 'Я имею пару вещей испробованными, волейбол, баскетбол, в фитнес-студии была я тоже, но это имеет мне всё не так правильно понравившимся', literary: 'Я попробовала несколько видов спорта: волейбол, баскетбол, в фитнес-клубе тоже была, но мне всё это не очень понравилось.' },
        'Im Moment mache ich einen Yogakurs und ich muss sagen, das finde ich richtig gut.': { literal: 'В момент делаю я один курс йоги и я должна сказать, это нахожу я правильно хорошим', literary: 'Сейчас я хожу на курс йоги и, должна сказать, мне это очень нравится.' },
        'Ah, interessant.': { literal: 'А, интересно', literary: 'А, интересно.' },
      },
      vocabulary: [
        { de: 'das Fitnessstudio', plural: 'die Fitnessstudios', ru: 'фитнес-клуб', gender: 'neutrum', collocation: 'im Fitnessstudio sein', example: 'Im Fitnessstudio war ich auch.' },
        { de: 'der Yogakurs', plural: 'die Yogakurse', ru: 'курс йоги', gender: 'maskulin', collocation: 'einen Yogakurs machen', example: 'Im Moment mache ich einen Yogakurs.' },
        { de: 'ausprobieren', ru: 'пробовать', type: 'verb', forms: 'probiert aus, probierte aus, hat ausprobiert', example: 'Ich habe ein paar Sachen ausprobiert.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Das hat mir alles nicht so richtig gefallen.' },
        { de: 'gerade', ru: 'сейчас, как раз', type: 'adv', example: 'Das macht mir gerade nicht so richtig Spaß.' },
      ],
      practiceSentences: [
        { de: 'Ich habe Yoga ausprobiert.', ru: 'Я попробовал йогу.', note: 'Perfekt с отделяемой приставкой' },
        { de: 'Der Kurs gefällt mir gut.', ru: 'Курс мне нравится.', note: 'Dativ-управление' },
        { de: 'Spielst du noch Fußball?', ru: 'Ты ещё играешь в футбол?', note: 'V1 вопрос' },
      ],
      question: {
        de: 'Welchen Sport macht Sarah im Moment?',
        ru: 'Каким спортом Сара занимается сейчас?',
        options: [
          { de: 'Tennis', ru: 'Теннис' },
          { de: 'Basketball', ru: 'Баскетбол' },
          { de: 'Yoga', ru: 'Йога' },
        ],
        correct: 2,
        explanation: 'Сара говорит: "im Moment mache ich einen Yogakurs und ich muss sagen das finde ich richtig gut".'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Olympiapark',
      type: 'диалог о транспорте',
      text: 'Sag mal, wir treffen uns doch morgen mit Louis im Olympiapark, oder? Ja, genau. Nehmen wir den Bus oder fahren wir mit dem Rad? Mit dem Rad, das ist doch viel zu weit. Und wenn wir den Bus nehmen, müssen wir noch 10 Minuten laufen oder in einen anderen Bus umsteigen. Stimmt, warum nehmen wir nicht einfach die U-Bahn? Da können wir direkt fahren und müssen nicht umsteigen. Aber die U-Bahn-Station ist so weit weg von mir. Dann doch lieber mit dem Bus. Okay, dann machen wir das so.',
      sentenceTranslations: {
        'Sag mal, wir treffen uns doch morgen mit Louis im Olympiapark, oder?': { literal: 'Скажи раз, мы встречаем себя же завтра с Луи в Олимпийском парке, или', literary: 'Слушай, мы же встречаемся завтра с Луи в Олимпийском парке, да?' },
        'Ja, genau.': { literal: 'Да, точно', literary: 'Да, точно.' },
        'Nehmen wir den Bus oder fahren wir mit dem Rad?': { literal: 'Берём мы автобус или едем мы с велосипедом', literary: 'Поедем на автобусе или на велосипеде?' },
        'Mit dem Rad, das ist doch viel zu weit.': { literal: 'С велосипедом, это есть же намного слишком далеко', literary: 'На велосипеде слишком далеко.' },
        'Und wenn wir den Bus nehmen, müssen wir noch 10 Minuten laufen oder in einen anderen Bus umsteigen.': { literal: 'И если мы автобус берём, должны мы ещё 10 минут идти или в другой автобус пересесть', literary: 'А если мы поедем на автобусе, нам ещё нужно 10 минут идти пешком или пересесть на другой автобус.' },
        'Stimmt, warum nehmen wir nicht einfach die U-Bahn?': { literal: 'Верно, почему берём мы не просто метро', literary: 'Верно, почему бы нам просто не поехать на метро?' },
        'Da können wir direkt fahren und müssen nicht umsteigen.': { literal: 'Там можем мы прямо ехать и должны не пересаживаться', literary: 'Там мы можем ехать прямо и не надо пересаживаться.' },
        'Aber die U-Bahn-Station ist so weit weg von mir.': { literal: 'Но станция метро есть так далеко от меня', literary: 'Но станция метро так далеко от меня.' },
        'Dann doch lieber mit dem Bus.': { literal: 'Тогда же лучше с автобусом', literary: 'Тогда лучше на автобусе.' },
        'Okay, dann machen wir das so.': { literal: 'Окей, тогда делаем мы это так', literary: 'Окей, тогда так и сделаем.' },
      },
      vocabulary: [
        { de: 'der Olympiapark', ru: 'Олимпийский парк', gender: 'maskulin', collocation: 'im Olympiapark', example: 'Wir treffen uns doch morgen mit Louis im Olympiapark.' },
        { de: 'der Bus', plural: 'die Busse', ru: 'автобус', gender: 'maskulin', collocation: 'den Bus nehmen', example: 'Nehmen wir den Bus oder fahren wir mit dem Rad?' },
        { de: 'das Rad', plural: 'die Räder', ru: 'велосипед', gender: 'neutrum', collocation: 'mit dem Rad fahren', example: 'Nehmen wir den Bus oder fahren wir mit dem Rad?' },
        { de: 'die U-Bahn', plural: 'die U-Bahnen', ru: 'метро', gender: 'feminin', collocation: 'die U-Bahn nehmen', example: 'Warum nehmen wir nicht einfach die U-Bahn?' },
        { de: 'die U-Bahn-Station', plural: 'die U-Bahn-Stationen', ru: 'станция метро', gender: 'feminin', collocation: 'zur U-Bahn-Station', example: 'Aber die U-Bahn-Station ist so weit weg von mir.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Wir treffen uns doch morgen mit Louis im Olympiapark.' },
        { de: 'umsteigen', ru: 'пересаживаться', type: 'verb', forms: 'steigt um, stieg um, ist umgestiegen', example: 'Müssen wir in einen anderen Bus umsteigen.' },
        { de: 'direkt', ru: 'прямо, напрямую', type: 'adv', example: 'Da können wir direkt fahren.' },
      ],
      practiceSentences: [
        { de: 'Wir treffen uns am Bahnhof.', ru: 'Мы встречаемся на вокзале.', note: 'возвратный глагол' },
        { de: 'Ich muss zweimal umsteigen.', ru: 'Мне нужно дважды пересесть.', note: 'модальный + инфинитив' },
        { de: 'Warum nehmen wir nicht den Zug?', ru: 'Почему бы не поехать на поезде?', note: 'V2 после W-слова' },
      ],
      question: {
        de: 'Wie fahren sie am Ende zum Olympiapark?',
        ru: 'На чём они в итоге поедут в Олимпийский парк?',
        options: [
          { de: 'Mit dem Rad', ru: 'На велосипеде' },
          { de: 'Mit dem Bus', ru: 'На автобусе' },
          { de: 'Mit der U-Bahn', ru: 'На метро' },
        ],
        correct: 1,
        explanation: 'В конце диалога: "dann doch lieber mit dem Bus okay dann machen wir das so" — они решили ехать на автобусе.'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Meyer/Arnsdorf',
      type: 'телефонный разговор',
      text: 'Meyer, guten Tag. Herr Meier, hier spricht Arnsdorf von der Information für Berufsfragen. Ach, guten Tag, Frau Arnsdorf. Ich rufe wegen Ihrem Termin am Donnerstag an. Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt. Das Zeugnis von Ihrem Schulabschluss. Das habe ich wohl vergessen. Sonst haben Sie alles, das Foto und die Bewerbung? Ist das alles da? Ja, keine Sorge.',
      sentenceTranslations: {
        'Meyer, guten Tag.': { literal: 'Майер, добрый день', literary: 'Майер, добрый день.' },
        'Herr Meier, hier spricht Arnsdorf von der Information für Berufsfragen.': { literal: 'Господин Майер, здесь говорит Арнсдорф от информации для профессиональных вопросов', literary: 'Господин Майер, это Арнсдорф из консультации по профориентации.' },
        'Ach, guten Tag, Frau Arnsdorf.': { literal: 'Ах, добрый день, госпожа Арнсдорф', literary: 'Ах, добрый день, госпожа Арнсдорф.' },
        'Ich rufe wegen Ihrem Termin am Donnerstag an.': { literal: 'Я звоню из-за вашей встречи в четверг', literary: 'Я звоню по поводу вашей встречи в четверг.' },
        'Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt.': { literal: 'Я имею увиденным, что при ваших документах ещё что-то отсутствует', literary: 'Я заметила, что в ваших документах кое-чего не хватает.' },
        'Das Zeugnis von Ihrem Schulabschluss.': { literal: 'Свидетельство от вашего школьного окончания', literary: 'Аттестат об окончании школы.' },
        'Das habe ich wohl vergessen.': { literal: 'Это имею я вероятно забытым', literary: 'Я, видимо, забыл.' },
        'Sonst haben Sie alles, das Foto und die Bewerbung?': { literal: 'Иначе имеете вы всё, фото и заявление', literary: 'А в остальном всё есть — фото и заявление?' },
        'Ist das alles da?': { literal: 'Есть это всё там', literary: 'Всё на месте?' },
        'Ja, keine Sorge.': { literal: 'Да, никакой заботы', literary: 'Да, не волнуйтесь.' },
      },
      vocabulary: [
        { de: 'die Berufsfrage', plural: 'die Berufsfragen', ru: 'профессиональный вопрос', gender: 'feminin', collocation: 'Information für Berufsfragen', example: 'Hier spricht Arnsdorf von der Information für Berufsfragen.' },
        { de: 'die Unterlagen', ru: 'документы', gender: 'feminin', collocation: 'bei Ihren Unterlagen', example: 'Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt.' },
        { de: 'das Zeugnis', plural: 'die Zeugnisse', ru: 'свидетельство, аттестат', gender: 'neutrum', collocation: 'das Zeugnis fehlt', example: 'Das Zeugnis von Ihrem Schulabschluss.' },
        { de: 'der Schulabschluss', plural: 'die Schulabschlüsse', ru: 'окончание школы', gender: 'maskulin', collocation: 'Zeugnis vom Schulabschluss', example: 'Das Zeugnis von Ihrem Schulabschluss.' },
        { de: 'die Bewerbung', plural: 'die Bewerbungen', ru: 'заявление', gender: 'feminin', collocation: 'die Bewerbung einreichen', example: 'Sonst haben Sie alles, das Foto und die Bewerbung?' },
        { de: 'fehlen', ru: 'отсутствовать, не хватать', type: 'verb', forms: 'fehlt, fehlte, hat gefehlt', example: 'Ich habe gesehen, dass bei Ihren Unterlagen noch etwas fehlt.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Das habe ich wohl vergessen.' },
        { de: 'wohl', ru: 'вероятно, видимо', type: 'adv', example: 'Das habe ich wohl vergessen.' },
      ],
      practiceSentences: [
        { de: 'Bei mir fehlt noch das Foto.', ru: 'У меня ещё не хватает фото.', note: 'V2' },
        { de: 'Das habe ich vergessen.', ru: 'Я это забыл.', note: 'Perfekt' },
        { de: 'Hier spricht die Sekretärin.', ru: 'Говорит секретарь.', note: 'V2' },
      ],
      question: {
        de: 'Was fehlt noch bei den Unterlagen?',
        ru: 'Чего не хватает в документах?',
        options: [
          { de: 'Das Foto', ru: 'Фотографии' },
          { de: 'Das Zeugnis vom Schulabschluss', ru: 'Аттестата об окончании школы' },
          { de: 'Die Bewerbung', ru: 'Заявления' },
        ],
        correct: 1,
        explanation: 'Фрау Арнсдорф говорит: "das Zeugnis von ihrem Schulabschluss" — не хватает аттестата, остальное (фото и заявление) уже есть.'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Dorothea Martin',
      type: 'интервью',
      text: 'Hallo, liebe Hörerinnen und Hörer, mein Gast ist heute die renommierte Krimiautorin Dorothea Martin. Frau Martin, Sie sind in Hamburg geboren und in Berlin aufgewachsen. In welcher Stadt fühlen Sie sich zu Hause? Ich fühle mich in beiden Städten zu Hause, wie auch in vielen anderen Städten. Wissen Sie, ich kann nie lange an einem Ort bleiben und bin gerne unterwegs. Ich bin in meinem Leben schon 16 Mal umgezogen. Meinen Sie, Sie haben in 16 verschiedenen Städten gewohnt? Ja, ich brauche Inspiration und Freiheit. Das finde ich immer wieder an neuen Orten. Sie haben das Wort Inspiration benutzt. Was genau inspiriert Sie? Vieles, vor allem die Menschen. Jedes Mal, wenn ich jemanden kennenlerne, höre ich eine neue Lebensgeschichte. Diese Stories sind Material für meine Bücher. Ihr erstes Buch haben Sie mit 25 Jahren geschrieben. Das war kein Kriminalroman, es war ein Science-Fiction-Roman, in dem zwei Menschen auf einem neuen, unbewohnten Planeten landen. Ja, das ist schon lange her. Ich habe mich damals sehr für Science-Fiction interessiert. Ich dachte, eine Frau, die Science-Fiction schreibt, ist automatisch erfolgreich. Heute sehe ich das etwas anders. Sie haben nach dem Science-Fiction-Buch angefangen, Krimis zu schreiben? Ja, genau. Ich hatte sehr viele Ideen und wollte spannende Bücher schreiben. In Deutschland sind Krimis sehr beliebt. Der Markt ist also sehr groß. Wenn man gute Geschichten erzählt, findet man auch viele Leser. Ihre Hauptfigur ist der Detektiv Max Müller, er wohnt allein mit seinem Hund. Ja, Max Müller ist ein bisschen einsam, aber nicht traurig. Als ich klein war, hatten wir einen Nachbarn, der einen großen Hund hatte. Der Mann war sehr nett und hat mir viele Geschichten erzählt. Max Müller hat viele Eigenschaften von diesem Nachbarn. Woran arbeiten Sie im Moment? Ich arbeite an einem neuen Roman. Die Geschichte spielt im Hamburger Hafen. Mehr möchte ich dazu nicht sagen. Viel Erfolg und vielen Dank für das Gespräch.',
      sentenceTranslations: {
        'Hallo, liebe Hörerinnen und Hörer, mein Gast ist heute die renommierte Krimiautorin Dorothea Martin.': { literal: 'Привет, дорогие слушательницы и слушатели, мой гость есть сегодня известная криминальная авторша Доротея Мартин', literary: 'Здравствуйте, дорогие слушатели, мой гость сегодня — известная автор детективов Доротея Мартин.' },
        'Frau Martin, Sie sind in Hamburg geboren und in Berlin aufgewachsen.': { literal: 'Госпожа Мартин, вы есть в Гамбурге рождённой и в Берлине выросшей', literary: 'Госпожа Мартин, вы родились в Гамбурге и выросли в Берлине.' },
        'In welcher Stadt fühlen Sie sich zu Hause?': { literal: 'В каком городе чувствуете вы себя дома', literary: 'В каком городе вы чувствуете себя дома?' },
        'Ich fühle mich in beiden Städten zu Hause, wie auch in vielen anderen Städten.': { literal: 'Я чувствую себя в обоих городах дома, как также в многих других городах', literary: 'Я чувствую себя дома в обоих городах, как и во многих других.' },
        'Wissen Sie, ich kann nie lange an einem Ort bleiben und bin gerne unterwegs.': { literal: 'Знаете вы, я могу никогда долго в одном месте оставаться и есть охотно в пути', literary: 'Знаете, я никогда не могу долго оставаться на одном месте и люблю путешествовать.' },
        'Ich bin in meinem Leben schon 16 Mal umgezogen.': { literal: 'Я есть в моей жизни уже 16 раз переехавшей', literary: 'В своей жизни я уже 16 раз переезжала.' },
        'Meinen Sie, Sie haben in 16 verschiedenen Städten gewohnt?': { literal: 'Имеете в виду вы, вы имеете в 16 различных городах проживанным', literary: 'Вы хотите сказать, что жили в 16 разных городах?' },
        'Ja, ich brauche Inspiration und Freiheit.': { literal: 'Да, я нуждаюсь вдохновение и свободу', literary: 'Да, мне нужны вдохновение и свобода.' },
        'Das finde ich immer wieder an neuen Orten.': { literal: 'Это нахожу я снова и снова в новых местах', literary: 'Я всегда нахожу это в новых местах.' },
        'Sie haben das Wort Inspiration benutzt.': { literal: 'Вы имеете слово вдохновение использованным', literary: 'Вы использовали слово "вдохновение".' },
        'Was genau inspiriert Sie?': { literal: 'Что точно вдохновляет вас', literary: 'Что именно вас вдохновляет?' },
        'Vieles, vor allem die Menschen.': { literal: 'Многое, прежде всего люди', literary: 'Многое, прежде всего люди.' },
        'Jedes Mal, wenn ich jemanden kennenlerne, höre ich eine neue Lebensgeschichte.': { literal: 'Каждый раз, когда я кого-то узнаю, слышу я одну новую историю жизни', literary: 'Каждый раз, знакомясь с кем-то, я слышу новую историю жизни.' },
        'Diese Stories sind Material für meine Bücher.': { literal: 'Эти истории есть материал для моих книг', literary: 'Эти истории — материал для моих книг.' },
        'Ihr erstes Buch haben Sie mit 25 Jahren geschrieben.': { literal: 'Вашу первую книгу имеете вы с 25 годами написанной', literary: 'Свою первую книгу вы написали в 25 лет.' },
        'Das war kein Kriminalroman, es war ein Science-Fiction-Roman, in dem zwei Menschen auf einem neuen, unbewohnten Planeten landen.': { literal: 'Это был никакой криминальный роман, это был один научно-фантастический роман, в котором два человека на одной новой, необитаемой планете приземляются', literary: 'Это был не детектив, а научно-фантастический роман, в котором два человека оказываются на новой необитаемой планете.' },
        'Ja, das ist schon lange her.': { literal: 'Да, это есть уже давно назад', literary: 'Да, это было уже давно.' },
        'Ich habe mich damals sehr für Science-Fiction interessiert.': { literal: 'Я имею себя тогда очень для научной фантастики заинтересованной', literary: 'Тогда я очень интересовалась научной фантастикой.' },
        'Ich dachte, eine Frau, die Science-Fiction schreibt, ist automatisch erfolgreich.': { literal: 'Я думала, одна женщина, которая научную фантастику пишет, есть автоматически успешной', literary: 'Я думала, женщина, пишущая фантастику, автоматически будет успешной.' },
        'Heute sehe ich das etwas anders.': { literal: 'Сегодня вижу я это немного иначе', literary: 'Сегодня я смотрю на это немного иначе.' },
        'Sie haben nach dem Science-Fiction-Buch angefangen, Krimis zu schreiben?': { literal: 'Вы имеете после научно-фантастической книги начавшей, детективы писать', literary: 'После научно-фантастической книги вы начали писать детективы?' },
        'Ja, genau.': { literal: 'Да, точно', literary: 'Да, именно.' },
        'Ich hatte sehr viele Ideen und wollte spannende Bücher schreiben.': { literal: 'Я имела очень много идей и хотела захватывающие книги писать', literary: 'У меня было очень много идей, и я хотела писать захватывающие книги.' },
        'In Deutschland sind Krimis sehr beliebt.': { literal: 'В Германии есть детективы очень популярны', literary: 'В Германии детективы очень популярны.' },
        'Der Markt ist also sehr groß.': { literal: 'Рынок есть итак очень большой', literary: 'Рынок, значит, очень большой.' },
        'Wenn man gute Geschichten erzählt, findet man auch viele Leser.': { literal: 'Если человек хорошие истории рассказывает, находит человек также много читателей', literary: 'Если рассказываешь хорошие истории, находишь и много читателей.' },
        'Ihre Hauptfigur ist der Detektiv Max Müller, er wohnt allein mit seinem Hund.': { literal: 'Ваш главный герой есть детектив Макс Мюллер, он живёт один с своей собакой', literary: 'Ваш главный герой — детектив Макс Мюллер, он живёт один со своей собакой.' },
        'Ja, Max Müller ist ein bisschen einsam, aber nicht traurig.': { literal: 'Да, Макс Мюллер есть немного одинокий, но не грустный', literary: 'Да, Макс Мюллер немного одинок, но не печален.' },
        'Als ich klein war, hatten wir einen Nachbarn, der einen großen Hund hatte.': { literal: 'Когда я маленькой была, имели мы одного соседа, который одну большую собаку имел', literary: 'Когда я была маленькой, у нас был сосед, у которого была большая собака.' },
        'Der Mann war sehr nett und hat mir viele Geschichten erzählt.': { literal: 'Мужчина был очень милый и имеет мне много историй рассказанным', literary: 'Этот человек был очень добрый и рассказывал мне много историй.' },
        'Max Müller hat viele Eigenschaften von diesem Nachbarn.': { literal: 'Макс Мюллер имеет много свойств от этого соседа', literary: 'У Макса Мюллера много качеств этого соседа.' },
        'Woran arbeiten Sie im Moment?': { literal: 'Над чем работаете вы в момент', literary: 'Над чем вы сейчас работаете?' },
        'Ich arbeite an einem neuen Roman.': { literal: 'Я работаю над одним новым романом', literary: 'Я работаю над новым романом.' },
        'Die Geschichte spielt im Hamburger Hafen.': { literal: 'История играет в гамбургском порту', literary: 'История разворачивается в гамбургском порту.' },
        'Mehr möchte ich dazu nicht sagen.': { literal: 'Больше хотела бы я к этому не говорить', literary: 'Больше я ничего не хочу говорить.' },
        'Viel Erfolg und vielen Dank für das Gespräch.': { literal: 'Много успеха и много благодарности за разговор', literary: 'Удачи и большое спасибо за беседу.' },
      },
      vocabulary: [
        { de: 'die Krimiautorin', plural: 'die Krimiautorinnen', ru: 'автор детективов', gender: 'feminin', collocation: 'renommierte Krimiautorin', example: 'Mein Gast ist heute die renommierte Krimiautorin Dorothea Martin.' },
        { de: 'die Stadt', plural: 'die Städte', ru: 'город', gender: 'feminin', collocation: 'in verschiedenen Städten', example: 'Meinen Sie, Sie haben in 16 verschiedenen Städten gewohnt?' },
        { de: 'der Ort', plural: 'die Orte', ru: 'место', gender: 'maskulin', collocation: 'an einem Ort bleiben', example: 'Ich kann nie lange an einem Ort bleiben.' },
        { de: 'die Inspiration', plural: 'die Inspirationen', ru: 'вдохновение', gender: 'feminin', collocation: 'Inspiration brauchen', example: 'Ja, ich brauche Inspiration und Freiheit.' },
        { de: 'die Freiheit', plural: 'die Freiheiten', ru: 'свобода', gender: 'feminin', collocation: 'Freiheit brauchen', example: 'Ja, ich brauche Inspiration und Freiheit.' },
        { de: 'die Lebensgeschichte', plural: 'die Lebensgeschichten', ru: 'история жизни', gender: 'feminin', collocation: 'eine neue Lebensgeschichte', example: 'Jedes Mal, wenn ich jemanden kennenlerne, höre ich eine neue Lebensgeschichte.' },
        { de: 'der Kriminalroman', plural: 'die Kriminalromane', ru: 'детективный роман', gender: 'maskulin', collocation: 'einen Kriminalroman schreiben', example: 'Das war kein Kriminalroman.' },
        { de: 'der Planet', plural: 'die Planeten', ru: 'планета', gender: 'maskulin', collocation: 'auf einem Planeten landen', example: 'Zwei Menschen auf einem neuen, unbewohnten Planeten landen.' },
        { de: 'der Krimi', plural: 'die Krimis', ru: 'детектив', gender: 'maskulin', collocation: 'Krimis schreiben', example: 'In Deutschland sind Krimis sehr beliebt.' },
        { de: 'der Leser', plural: 'die Leser', ru: 'читатель', gender: 'maskulin', collocation: 'viele Leser finden', example: 'Wenn man gute Geschichten erzählt, findet man auch viele Leser.' },
        { de: 'die Hauptfigur', plural: 'die Hauptfiguren', ru: 'главный герой', gender: 'feminin', collocation: 'die Hauptfigur des Romans', example: 'Ihre Hauptfigur ist der Detektiv Max Müller.' },
        { de: 'der Nachbar', plural: 'die Nachbarn', ru: 'сосед', gender: 'maskulin', collocation: 'einen Nachbarn haben', example: 'Als ich klein war, hatten wir einen Nachbarn, der einen großen Hund hatte.' },
        { de: 'die Eigenschaft', plural: 'die Eigenschaften', ru: 'качество, свойство', gender: 'feminin', collocation: 'viele Eigenschaften haben', example: 'Max Müller hat viele Eigenschaften von diesem Nachbarn.' },
        { de: 'der Hafen', plural: 'die Häfen', ru: 'порт', gender: 'maskulin', collocation: 'im Hamburger Hafen', example: 'Die Geschichte spielt im Hamburger Hafen.' },
        { de: 'aufwachsen', ru: 'вырастать', type: 'verb', forms: 'wächst auf, wuchs auf, ist aufgewachsen', example: 'Sie sind in Hamburg geboren und in Berlin aufgewachsen.' },
        { de: 'umziehen', ru: 'переезжать', type: 'verb', forms: 'zieht um, zog um, ist umgezogen', example: 'Ich bin in meinem Leben schon 16 Mal umgezogen.' },
        { de: 'kennenlernen', ru: 'знакомиться', type: 'verb', forms: 'lernt kennen, lernte kennen, hat kennengelernt', example: 'Jedes Mal, wenn ich jemanden kennenlerne, höre ich eine neue Lebensgeschichte.' },
        { de: 'erzählen', ru: 'рассказывать', type: 'verb', forms: 'erzählt, erzählte, hat erzählt', example: 'Der Mann war sehr nett und hat mir viele Geschichten erzählt.' },
        { de: 'renommiert', ru: 'известный, знаменитый', type: 'adj', example: 'Mein Gast ist heute die renommierte Krimiautorin Dorothea Martin.' },
        { de: 'beliebt', ru: 'популярный', type: 'adj', example: 'In Deutschland sind Krimis sehr beliebt.' },
        { de: 'einsam', ru: 'одинокий', type: 'adj', example: 'Max Müller ist ein bisschen einsam, aber nicht traurig.' },
        { de: 'erfolgreich', ru: 'успешный', type: 'adj', example: 'Ich dachte, eine Frau, die Science-Fiction schreibt, ist automatisch erfolgreich.' },
      ],
      practiceSentences: [
        { de: 'Ich bin in Berlin geboren.', ru: 'Я родился в Берлине.', note: 'sein + Partizip II' },
        { de: 'Sie ist oft umgezogen.', ru: 'Она часто переезжала.', note: 'Perfekt с sein' },
        { de: 'Krimis sind sehr beliebt.', ru: 'Детективы очень популярны.', note: 'V2' },
      ],
      question: {
        de: 'Wie oft ist Dorothea Martin in ihrem Leben umgezogen?',
        ru: 'Сколько раз Доротея Мартин переезжала в своей жизни?',
        options: [
          { de: '10 Mal', ru: '10 раз' },
          { de: '16 Mal', ru: '16 раз' },
          { de: '25 Mal', ru: '25 раз' },
        ],
        correct: 1,
        explanation: 'Она говорит: "ich bin in meinem Leben schon 16 Mal umgezogen" — она переезжала уже 16 раз.'
      }
    },
  ],

  /* ─── Агрегированный словарь (собирается из texts[]) ─── */
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
    'Perfekt с haben: ich habe ... liegen lassen, angeschlossen, ausprobiert',
    'Perfekt с sein: ist kaputt gegangen, ist umgezogen, ist aufgewachsen',
    'wegen + Genitiv: wegen schlechter Wetterbedingungen',
    'wenn-Nebensatz: wenn wir den Bus nehmen, müssen wir...',
    'dass-Nebensatz: ich habe gesehen, dass bei Ihren Unterlagen etwas fehlt',
    'ob-Nebensatz: schaust du mal, ob es irgendwo herumliegt',
    'Отделяемые приставки: zurückrufen, umtauschen, zurückgeben, anschließen, umsteigen',
    'Модальные глаголы: können, müssen, wollen, möchte + инфинитив в конце',
    'sich + Verb: sich verschieben, sich treffen, sich konzentrieren, sich fühlen',
    'deshalb + инверсия: deshalb beginne ich erst am Abend',
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Tina).',
    },
  },
};

LESSONS.push(LESSON_18);
