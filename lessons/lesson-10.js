/* ═══════════════════════════════════════════════════════════
   Lesson 10 — Goethe Zertifikat A2 Hören Modelltest 10
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_10 = {
  id: 'lesson-10',
  number: 10,
  title: 'Goethe A2 Hören — Modelltest 10',
  subtitle: 'Talentshow, Apps, Weihnachten in Japan, Ernährungsmedizin und mehr',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-10',
  videoUrl: 'https://www.youtube.com/watch?v=BwnkKgyANFM',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Talentshow',
      type: 'радио-объявление',
      text: 'Und hier noch eine wichtige Information für unsere Hörerinnen und Hörer: Für eine Talentshow werden noch Sängerinnen und Sänger gesucht. Wenn Sie denken, Sie können gut singen, dann melden Sie sich bitte über unsere Website. Die Macher der Show bitten darum, dass sich keine Gitarristen und Pianisten mehr melden sollen. Es gibt inzwischen genug Musiker für die Show.',
      sentenceTranslations: {
        'Und hier noch eine wichtige Information für unsere Hörerinnen und Hörer: Für eine Talentshow werden noch Sängerinnen und Sänger gesucht.': { literal: 'И здесь ещё одна важная информация для наших слушательниц и слушателей: для одного талант-шоу ищутся ещё певицы и певцы', literary: 'А теперь важная информация для наших слушателей: для талант-шоу всё ещё нужны певцы и певицы.' },
        'Wenn Sie denken, Sie können gut singen, dann melden Sie sich bitte über unsere Website.': { literal: 'Если вы думаете, вы можете хорошо петь, тогда заявите себя пожалуйста через наш веб-сайт', literary: 'Если вы считаете, что хорошо поёте, пожалуйста, зарегистрируйтесь на нашем сайте.' },
        'Die Macher der Show bitten darum, dass sich keine Gitarristen und Pianisten mehr melden sollen.': { literal: 'Создатели шоу просят о том, что себя никакие гитаристы и пианисты больше заявлять не должны', literary: 'Организаторы шоу просят, чтобы гитаристы и пианисты больше не регистрировались.' },
        'Es gibt inzwischen genug Musiker für die Show.': { literal: 'Есть тем временем достаточно музыкантов для шоу', literary: 'Музыкантов для шоу уже достаточно.' },
      },
      vocabulary: [
        { de: 'die Information', plural: 'die Informationen', ru: 'информация', gender: 'feminin', collocation: 'wichtige Information', example: 'Und hier noch eine wichtige Information für unsere Hörerinnen und Hörer.' },
        { de: 'die Talentshow', plural: 'die Talentshows', ru: 'талант-шоу', gender: 'feminin', collocation: 'für eine Talentshow', example: 'Für eine Talentshow werden noch Sängerinnen und Sänger gesucht.' },
        { de: 'der Sänger', plural: 'die Sänger', ru: 'певец', gender: 'maskulin', collocation: 'Sänger gesucht', example: 'Für eine Talentshow werden noch Sängerinnen und Sänger gesucht.' },
        { de: 'die Website', plural: 'die Websites', ru: 'веб-сайт', gender: 'feminin', collocation: 'über unsere Website', example: 'Dann melden Sie sich bitte über unsere Website.' },
        { de: 'der Macher', plural: 'die Macher', ru: 'организатор', gender: 'maskulin', collocation: 'die Macher der Show', example: 'Die Macher der Show bitten darum.' },
        { de: 'der Gitarrist', plural: 'die Gitarristen', ru: 'гитарист', gender: 'maskulin', collocation: 'keine Gitarristen mehr', example: 'Dass sich keine Gitarristen und Pianisten mehr melden sollen.' },
        { de: 'der Musiker', plural: 'die Musiker', ru: 'музыкант', gender: 'maskulin', collocation: 'genug Musiker', example: 'Es gibt inzwischen genug Musiker für die Show.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Für eine Talentshow werden noch Sängerinnen und Sänger gesucht.' },
        { de: 'sich melden', ru: 'регистрироваться, записываться', type: 'verb', forms: 'meldet sich, meldete sich, hat sich gemeldet', example: 'Dann melden Sie sich bitte über unsere Website.' },
        { de: 'singen', ru: 'петь', type: 'verb', forms: 'singt, sang, hat gesungen', example: 'Sie können gut singen.' },
      ],
      practiceSentences: [
        { de: 'Sänger werden gesucht.', ru: 'Ищут певцов.', note: 'Passiv: werden + Partizip II' },
        { de: 'Ich melde mich morgen.', ru: 'Я запишусь завтра.', note: 'возвратный: sich отделяется' },
        { de: 'Sie bittet um Hilfe.', ru: 'Она просит о помощи.', note: 'V2, управление um + Akk' },
        { de: 'Melden Sie sich bitte an!', ru: 'Зарегистрируйтесь, пожалуйста!', note: 'императив + sich' },
        { de: 'Er kann gut singen.', ru: 'Он умеет хорошо петь.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Für die Talentshow sucht man:',
        ru: 'Для талант-шоу ищут:',
        options: [
          { de: 'Gitarristen', ru: 'Гитаристов' },
          { de: 'Sänger', ru: 'Певцов' },
          { de: 'Pianisten', ru: 'Пианистов' },
        ],
        correct: 1,
        explanation: 'В тексте прямо говорится: "Für eine Talentshow werden noch Sängerinnen und Sänger gesucht" и "dass sich keine Gitarristen und Pianisten mehr melden sollen".'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Tom an Lea',
      type: 'сообщение на автоответчике',
      text: 'Lea, ich bin\'s Tom. Schön, dass du nun doch noch kommst! Brasilia ist wunderschön, auch das Hotel ist prima. Handtücher gibt es natürlich und auch Bademäntel. Aber schön wäre es, wenn du meine grüne Jacke mitbringen würdest. Hier ist es nämlich abends noch sehr kühl.',
      sentenceTranslations: {
        'Lea, ich bin\'s Tom.': { literal: 'Леа, я есть это Том', literary: 'Леа, это я, Том.' },
        'Schön, dass du nun doch noch kommst!': { literal: 'Хорошо, что ты теперь всё-таки ещё приезжаешь', literary: 'Здорово, что ты всё-таки приедешь!' },
        'Brasilia ist wunderschön, auch das Hotel ist prima.': { literal: 'Бразилиа есть прекрасна, также отель есть отлично', literary: 'Бразилиа прекрасна, и отель тоже отличный.' },
        'Handtücher gibt es natürlich und auch Bademäntel.': { literal: 'Полотенца есть естественно и также халаты', literary: 'Полотенца есть, конечно, и халаты тоже.' },
        'Aber schön wäre es, wenn du meine grüne Jacke mitbringen würdest.': { literal: 'Но хорошо было бы это, если ты мою зелёную куртку привезти бы', literary: 'Но было бы здорово, если бы ты привезла мою зелёную куртку.' },
        'Hier ist es nämlich abends noch sehr kühl.': { literal: 'Здесь есть оно именно вечерами ещё очень прохладно', literary: 'Здесь по вечерам всё ещё довольно холодно.' },
      },
      vocabulary: [
        { de: 'das Hotel', plural: 'die Hotels', ru: 'отель', gender: 'neutrum', collocation: 'das Hotel ist prima', example: 'Auch das Hotel ist prima.' },
        { de: 'das Handtuch', plural: 'die Handtücher', ru: 'полотенце', gender: 'neutrum', collocation: 'Handtücher gibt es', example: 'Handtücher gibt es natürlich und auch Bademäntel.' },
        { de: 'der Bademantel', plural: 'die Bademäntel', ru: 'халат', gender: 'maskulin', collocation: 'auch Bademäntel', example: 'Handtücher gibt es natürlich und auch Bademäntel.' },
        { de: 'die Jacke', plural: 'die Jacken', ru: 'куртка', gender: 'feminin', collocation: 'meine grüne Jacke', example: 'Wenn du meine grüne Jacke mitbringen würdest.' },
        { de: 'mitbringen', ru: 'привезти с собой', type: 'verb', forms: 'bringt mit, brachte mit, hat mitgebracht', example: 'Wenn du meine grüne Jacke mitbringen würdest.' },
        { de: 'wunderschön', ru: 'прекрасный', type: 'adj', example: 'Brasilia ist wunderschön.' },
        { de: 'kühl', ru: 'прохладный', type: 'adj', example: 'Hier ist es nämlich abends noch sehr kühl.' },
      ],
      practiceSentences: [
        { de: 'Das bin ich.', ru: 'Это я.', note: 'V2 позиция' },
        { de: 'Es ist kalt hier.', ru: 'Здесь холодно.', note: 'безличное es + V2' },
        { de: 'Bring bitte Wasser mit!', ru: 'Принеси воду!', note: 'императив, отделяемая mit-' },
        { de: 'Es wäre schön.', ru: 'Было бы хорошо.', note: 'Konjunktiv II' },
        { de: 'Du kommst morgen.', ru: 'Ты приедешь завтра.', note: 'V2 позиция' },
      ],
      question: {
        de: 'Was soll Lea mitbringen?',
        ru: 'Что должна привезти Леа?',
        options: [
          { de: 'Handtücher', ru: 'Полотенца' },
          { de: 'Eine Jacke', ru: 'Куртку' },
          { de: 'Einen Bademantel', ru: 'Халат' },
        ],
        correct: 1,
        explanation: 'Том говорит: "schön wäre es, wenn du meine grüne Jacke mitbringen würdest". Полотенца и халаты в отеле есть.'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Buchhandlung',
      type: 'объявление в магазине',
      text: 'Liebe Kunden, heute haben wir in unserer Buchabteilung den deutschen Autor Frank Düren zu Gast. Er signiert wie alle unsere Gastautoren seine Bücher und steht Ihnen für Fragen gern zur Verfügung. Am Dienstag wird uns Wolf Aigner aus Österreich besuchen. Patrick Schuster aus der Schweiz sollte am Mittwoch kommen, leider ist er krank und kann nicht kommen.',
      sentenceTranslations: {
        'Liebe Kunden, heute haben wir in unserer Buchabteilung den deutschen Autor Frank Düren zu Gast.': { literal: 'Дорогие клиенты, сегодня имеем мы в нашем книжном отделе немецкого автора Франка Дюрена к гостю', literary: 'Дорогие покупатели, сегодня в нашем книжном отделе гостит немецкий писатель Франк Дюрен.' },
        'Er signiert wie alle unsere Gastautoren seine Bücher und steht Ihnen für Fragen gern zur Verfügung.': { literal: 'Он подписывает как все наши гостевые авторы свои книги и стоит Вам для вопросов охотно к распоряжению', literary: 'Он подписывает свои книги, как и все наши приглашённые авторы, и с удовольствием ответит на ваши вопросы.' },
        'Am Dienstag wird uns Wolf Aigner aus Österreich besuchen.': { literal: 'Во вторник будет нас Вольф Айгнер из Австрии посещать', literary: 'Во вторник нас посетит Вольф Айгнер из Австрии.' },
        'Patrick Schuster aus der Schweiz sollte am Mittwoch kommen, leider ist er krank und kann nicht kommen.': { literal: 'Патрик Шустер из Швейцарии должен был в среду прийти, к сожалению есть он болен и может не прийти', literary: 'Патрик Шустер из Швейцарии должен был прийти в среду, но, к сожалению, он болен и не сможет прийти.' },
      },
      vocabulary: [
        { de: 'der Kunde', plural: 'die Kunden', ru: 'покупатель', gender: 'maskulin', collocation: 'liebe Kunden', example: 'Liebe Kunden, heute haben wir in unserer Buchabteilung den deutschen Autor Frank Düren zu Gast.' },
        { de: 'die Buchabteilung', plural: 'die Buchabteilungen', ru: 'книжный отдел', gender: 'feminin', collocation: 'in unserer Buchabteilung', example: 'Heute haben wir in unserer Buchabteilung den deutschen Autor Frank Düren zu Gast.' },
        { de: 'der Autor', plural: 'die Autoren', ru: 'автор', gender: 'maskulin', collocation: 'deutscher Autor', example: 'Heute haben wir in unserer Buchabteilung den deutschen Autor Frank Düren zu Gast.' },
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', collocation: 'seine Bücher signieren', example: 'Er signiert wie alle unsere Gastautoren seine Bücher.' },
        { de: 'die Frage', plural: 'die Fragen', ru: 'вопрос', gender: 'feminin', collocation: 'für Fragen zur Verfügung stehen', example: 'Er steht Ihnen für Fragen gern zur Verfügung.' },
        { de: 'signieren', ru: 'подписывать (автограф)', type: 'verb', forms: 'signiert, signierte, hat signiert', example: 'Er signiert wie alle unsere Gastautoren seine Bücher.' },
        { de: 'besuchen', ru: 'посещать', type: 'verb', forms: 'besucht, besuchte, hat besucht', example: 'Am Dienstag wird uns Wolf Aigner aus Österreich besuchen.' },
        { de: 'krank', ru: 'больной', type: 'adj', example: 'Leider ist er krank und kann nicht kommen.' },
      ],
      practiceSentences: [
        { de: 'Wir haben Gäste.', ru: 'У нас гости.', note: 'V2 позиция' },
        { de: 'Er signiert Bücher.', ru: 'Он подписывает книги.', note: 'V2, простое настоящее' },
        { de: 'Sie wird morgen kommen.', ru: 'Она придёт завтра.', note: 'Futur: wird V2 + Infinitiv' },
        { de: 'Er kann nicht lesen.', ru: 'Он не умеет читать.', note: 'модальный + nicht + Infinitiv' },
        { de: 'Der Autor kommt aus Berlin.', ru: 'Автор из Берлина.', note: 'V2 позиция' },
      ],
      question: {
        de: 'Welcher Autor kommt heute?',
        ru: 'Какой автор придёт сегодня?',
        options: [
          { de: 'Frank Düren aus Deutschland', ru: 'Франк Дюрен из Германии' },
          { de: 'Wolf Aigner aus Österreich', ru: 'Вольф Айгнер из Австрии' },
          { de: 'Patrick Schuster aus der Schweiz', ru: 'Патрик Шустер из Швейцарии' },
        ],
        correct: 0,
        explanation: '"Heute haben wir... den deutschen Autor Frank Düren zu Gast". Wolf Aigner придёт во вторник.'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Frau Immer',
      type: 'сообщение на автоответчике',
      text: 'Frau Sänger, hier ist das Büro von Frau Immer. Wir haben für heute genügend Freiwillige für unsere Arbeiten im Stadtpark. Wir brauchen aber unbedingt noch Leute für den Bahnhofsbereich. Dort wollen wir Blumen pflanzen. Das wollen wir übermorgen tun. Könnten Sie uns bitte morgen anrufen? Vielen Dank.',
      sentenceTranslations: {
        'Frau Sänger, hier ist das Büro von Frau Immer.': { literal: 'Госпожа Зэнгер, здесь есть офис госпожи Иммер', literary: 'Госпожа Зэнгер, это офис госпожи Иммер.' },
        'Wir haben für heute genügend Freiwillige für unsere Arbeiten im Stadtpark.': { literal: 'Мы имеем для сегодня достаточно добровольцев для наших работ в городском парке', literary: 'На сегодня у нас достаточно волонтёров для работ в городском парке.' },
        'Wir brauchen aber unbedingt noch Leute für den Bahnhofsbereich.': { literal: 'Мы нуждаемся но обязательно ещё людей для вокзальной зоны', literary: 'Но нам срочно нужны ещё люди для района вокзала.' },
        'Dort wollen wir Blumen pflanzen.': { literal: 'Там хотим мы цветы сажать', literary: 'Там мы хотим посадить цветы.' },
        'Das wollen wir übermorgen tun.': { literal: 'Это хотим мы послезавтра делать', literary: 'Мы хотим сделать это послезавтра.' },
        'Könnten Sie uns bitte morgen anrufen?': { literal: 'Могли бы вы нам пожалуйста завтра позвонить?', literary: 'Не могли бы вы позвонить нам завтра?' },
        'Vielen Dank.': { literal: 'Большое спасибо', literary: 'Большое спасибо.' },
      },
      vocabulary: [
        { de: 'das Büro', plural: 'die Büros', ru: 'офис', gender: 'neutrum', collocation: 'das Büro von Frau Immer', example: 'Frau Sänger, hier ist das Büro von Frau Immer.' },
        { de: 'der Freiwillige', plural: 'die Freiwilligen', ru: 'волонтёр', gender: 'maskulin', collocation: 'genügend Freiwillige', example: 'Wir haben für heute genügend Freiwillige für unsere Arbeiten im Stadtpark.' },
        { de: 'der Stadtpark', plural: 'die Stadtparks', ru: 'городской парк', gender: 'maskulin', collocation: 'im Stadtpark', example: 'Wir haben für heute genügend Freiwillige für unsere Arbeiten im Stadtpark.' },
        { de: 'der Bahnhofsbereich', plural: 'die Bahnhofsbereiche', ru: 'район вокзала', gender: 'maskulin', collocation: 'für den Bahnhofsbereich', example: 'Wir brauchen aber unbedingt noch Leute für den Bahnhofsbereich.' },
        { de: 'die Blume', plural: 'die Blumen', ru: 'цветок', gender: 'feminin', collocation: 'Blumen pflanzen', example: 'Dort wollen wir Blumen pflanzen.' },
        { de: 'pflanzen', ru: 'сажать', type: 'verb', forms: 'pflanzt, pflanzte, hat gepflanzt', example: 'Dort wollen wir Blumen pflanzen.' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Könnten Sie uns bitte morgen anrufen?' },
        { de: 'unbedingt', ru: 'обязательно', type: 'adv', example: 'Wir brauchen aber unbedingt noch Leute für den Bahnhofsbereich.' },
        { de: 'übermorgen', ru: 'послезавтра', type: 'adv', example: 'Das wollen wir übermorgen tun.' },
      ],
      practiceSentences: [
        { de: 'Wir brauchen Hilfe.', ru: 'Нам нужна помощь.', note: 'V2 позиция' },
        { de: 'Ich will arbeiten.', ru: 'Я хочу работать.', note: 'модальный + инфинитив' },
        { de: 'Rufen Sie mich an!', ru: 'Позвоните мне!', note: 'императив, отделяемая an-' },
        { de: 'Könnten Sie helfen?', ru: 'Не могли бы вы помочь?', note: 'Konjunktiv II вежливость' },
        { de: 'Wir pflanzen Blumen.', ru: 'Мы сажаем цветы.', note: 'V2 позиция' },
      ],
      question: {
        de: 'Wo will man Blumen pflanzen?',
        ru: 'Где хотят посадить цветы?',
        options: [
          { de: 'Im Stadtpark', ru: 'В городском парке' },
          { de: 'Am Bahnhof', ru: 'У вокзала' },
          { de: 'Im Büro', ru: 'В офисе' },
        ],
        correct: 1,
        explanation: '"Wir brauchen... noch Leute für den Bahnhofsbereich. Dort wollen wir Blumen pflanzen."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Museum',
      type: 'радио-новости',
      text: 'Wie wir gestern schon berichteten, wurde am Sonntagmorgen aus unserem Stadtmuseum ein wertvolles Buch gestohlen. Der Direktor des Museums sagte unserem Reporter, dass kein Geld und auch keiner der alten wertvollen Fotoapparate gestohlen wurde. Im Moment gibt es noch keine Hinweise auf den oder die Täter.',
      sentenceTranslations: {
        'Wie wir gestern schon berichteten, wurde am Sonntagmorgen aus unserem Stadtmuseum ein wertvolles Buch gestohlen.': { literal: 'Как мы вчера уже сообщали, была в воскресное утро из нашего городского музея ценная книга украдена', literary: 'Как мы уже вчера сообщали, в воскресенье утром из нашего городского музея была украдена ценная книга.' },
        'Der Direktor des Museums sagte unserem Reporter, dass kein Geld und auch keiner der alten wertvollen Fotoapparate gestohlen wurde.': { literal: 'Директор музея сказал нашему репортёру, что никаких денег и также ни один из старых ценных фотоаппаратов украден был', literary: 'Директор музея сказал нашему репортёру, что денег и старинных ценных фотоаппаратов не украли.' },
        'Im Moment gibt es noch keine Hinweise auf den oder die Täter.': { literal: 'В момент даёт это ещё никаких указаний на преступника или преступников', literary: 'На данный момент нет никаких улик о преступнике или преступниках.' },
      },
      vocabulary: [
        { de: 'das Stadtmuseum', plural: 'die Stadtmuseen', ru: 'городской музей', gender: 'neutrum', collocation: 'aus unserem Stadtmuseum', example: 'Wurde am Sonntagmorgen aus unserem Stadtmuseum ein wertvolles Buch gestohlen.' },
        { de: 'der Direktor', plural: 'die Direktoren', ru: 'директор', gender: 'maskulin', collocation: 'der Direktor des Museums', example: 'Der Direktor des Museums sagte unserem Reporter.' },
        { de: 'der Reporter', plural: 'die Reporter', ru: 'репортёр', gender: 'maskulin', collocation: 'unserem Reporter sagen', example: 'Der Direktor des Museums sagte unserem Reporter.' },
        { de: 'der Fotoapparat', plural: 'die Fotoapparate', ru: 'фотоаппарат', gender: 'maskulin', collocation: 'wertvolle Fotoapparate', example: 'Auch keiner der alten wertvollen Fotoapparate gestohlen wurde.' },
        { de: 'der Hinweis', plural: 'die Hinweise', ru: 'улика, указание', gender: 'maskulin', collocation: 'keine Hinweise auf', example: 'Im Moment gibt es noch keine Hinweise auf den oder die Täter.' },
        { de: 'der Täter', plural: 'die Täter', ru: 'преступник', gender: 'maskulin', collocation: 'den oder die Täter', example: 'Im Moment gibt es noch keine Hinweise auf den oder die Täter.' },
        { de: 'stehlen', ru: 'красть', type: 'verb', forms: 'stiehlt, stahl, hat gestohlen', example: 'Wurde am Sonntagmorgen aus unserem Stadtmuseum ein wertvolles Buch gestohlen.' },
        { de: 'berichten', ru: 'сообщать', type: 'verb', forms: 'berichtet, berichtete, hat berichtet', example: 'Wie wir gestern schon berichteten.' },
        { de: 'wertvoll', ru: 'ценный', type: 'adj', example: 'Ein wertvolles Buch gestohlen.' },
      ],
      practiceSentences: [
        { de: 'Das Geld wurde gestohlen.', ru: 'Деньги украли.', note: 'Passiv Prät: wurde + Part II' },
        { de: 'Es gibt keine Probleme.', ru: 'Нет проблем.', note: 'es gibt + Akk' },
        { de: 'Er berichtete gestern.', ru: 'Он сообщил вчера.', note: 'Präteritum V2' },
        { de: 'Der Direktor sagt nichts.', ru: 'Директор ничего не говорит.', note: 'V2 позиция' },
        { de: 'Wir suchen den Täter.', ru: 'Мы ищем преступника.', note: 'V2 позиция' },
      ],
      question: {
        de: 'Was wurde aus dem Museum gestohlen?',
        ru: 'Что украли из музея?',
        options: [
          { de: 'Geld', ru: 'Деньги' },
          { de: 'Ein Buch', ru: 'Книгу' },
          { de: 'Ein Fotoapparat', ru: 'Фотоаппарат' },
        ],
        correct: 1,
        explanation: '"Wurde... aus unserem Stadtmuseum ein wertvolles Buch gestohlen". Директор подтвердил, что денег и фотоаппаратов не украли.'
      }
    },

    /* ═══ TEIL 2 — 1 длинный текст ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Apps',
      type: 'разговор',
      text: 'Das ist ja echt interessant, was die Leute so für Apps haben. Über meine Lieblings-App erfahre ich sofort die neuesten Ergebnisse der Bundesliga und ich weiß sofort, wer wann gegen wen Fußball spielt. Einfach super. Und du, Carmen? Was ist deine Lieblings-App? Ich muss abnehmen. Ich habe eine App, die mir genau anzeigt, wie viele Kalorien jedes Essen hat und wie viele schon abgenommen habe. Das ist besser als so eine App mit Kalender. Kalender sind ja heute auf jedem Smartphone. Adrian hat eine App, die ihm zeigt, wo die besten Restaurants zu finden sind. Aber manche Apps sind echt schon sehr alt, wie zum Beispiel die Apps, die Karten von Städten zeigen. Das hat ja heute jedes Handy. Aber Frederiks App vergleicht die Preise in den verschiedenen Supermärkten. Das heißt, Frederik sieht genau, in welchem Supermarkt zum Beispiel Obst oder Gemüse oder Fleisch am billigsten ist. Auch interessant. Früher hatte man ja mal eine App für die neuesten Bücher, aber die hat sie nicht mehr. Jetzt zeigt ihre App das Fernsehprogramm. Dominiks App ist toll, die muss ich auch unbedingt haben. Sie zeigt sofort Viren auf seinem Smartphone an. Ich frage ihn mal, wie die heißt. Ist schon toll, die neue Technologie.',
      sentenceTranslations: {
        'Das ist ja echt interessant, was die Leute so für Apps haben.': { literal: 'Это есть же действительно интересно, что люди так за приложения имеют', literary: 'Действительно интересно, какие у людей приложения.' },
        'Über meine Lieblings-App erfahre ich sofort die neuesten Ergebnisse der Bundesliga und ich weiß sofort, wer wann gegen wen Fußball spielt.': { literal: 'Через моё любимое приложение узнаю я сразу новейшие результаты Бундеслиги и я знаю сразу, кто когда против кого в футбол играет', literary: 'Через моё любимое приложение я сразу узнаю последние результаты Бундеслиги и кто, когда и с кем играет в футбол.' },
        'Einfach super.': { literal: 'Просто супер', literary: 'Просто супер.' },
        'Und du, Carmen?': { literal: 'И ты, Кармен?', literary: 'А ты, Кармен?' },
        'Was ist deine Lieblings-App?': { literal: 'Что есть твоё любимое приложение?', literary: 'Какое твоё любимое приложение?' },
        'Ich muss abnehmen.': { literal: 'Я должна похудеть', literary: 'Мне нужно похудеть.' },
        'Ich habe eine App, die mir genau anzeigt, wie viele Kalorien jedes Essen hat und wie viele schon abgenommen habe.': { literal: 'Я имею приложение, которое мне точно показывает, сколько калорий каждая еда имеет и сколько уже похудела', literary: 'У меня есть приложение, которое точно показывает, сколько калорий в каждом блюде и сколько я уже сбросила.' },
        'Das ist besser als so eine App mit Kalender.': { literal: 'Это есть лучше чем такое приложение с календарём', literary: 'Это лучше, чем какое-нибудь приложение-календарь.' },
        'Kalender sind ja heute auf jedem Smartphone.': { literal: 'Календари есть же сегодня на каждом смартфоне', literary: 'Календари сегодня есть на каждом смартфоне.' },
        'Adrian hat eine App, die ihm zeigt, wo die besten Restaurants zu finden sind.': { literal: 'Адриан имеет приложение, которое ему показывает, где лучшие рестораны найти есть', literary: 'У Адриана есть приложение, которое показывает, где найти лучшие рестораны.' },
        'Aber manche Apps sind echt schon sehr alt, wie zum Beispiel die Apps, die Karten von Städten zeigen.': { literal: 'Но некоторые приложения есть действительно уже очень старые, как например приложения, которые карты городов показывают', literary: 'Но некоторые приложения уже устарели, например те, что показывают карты городов.' },
        'Das hat ja heute jedes Handy.': { literal: 'Это имеет же сегодня каждый телефон', literary: 'Сегодня это есть в каждом телефоне.' },
        'Aber Frederiks App vergleicht die Preise in den verschiedenen Supermärkten.': { literal: 'Но Фредерика приложение сравнивает цены в различных супермаркетах', literary: 'Но приложение Фредерика сравнивает цены в разных супермаркетах.' },
        'Das heißt, Frederik sieht genau, in welchem Supermarkt zum Beispiel Obst oder Gemüse oder Fleisch am billigsten ist.': { literal: 'Это значит, Фредерик видит точно, в каком супермаркете например фрукты или овощи или мясо дешевле всего есть', literary: 'То есть Фредерик точно видит, в каком супермаркете, например, фрукты, овощи или мясо дешевле всего.' },
        'Auch interessant.': { literal: 'Тоже интересно', literary: 'Тоже интересно.' },
        'Früher hatte man ja mal eine App für die neuesten Bücher, aber die hat sie nicht mehr.': { literal: 'Раньше имели же раз приложение для новейших книг, но его имеет она больше нет', literary: 'Раньше у неё было приложение для новых книг, но теперь его нет.' },
        'Jetzt zeigt ihre App das Fernsehprogramm.': { literal: 'Теперь показывает её приложение телепрограмму', literary: 'Теперь её приложение показывает телепрограмму.' },
        'Dominiks App ist toll, die muss ich auch unbedingt haben.': { literal: 'Доминика приложение есть классное, его должна я тоже обязательно иметь', literary: 'Приложение Доминика классное, мне тоже обязательно нужно такое.' },
        'Sie zeigt sofort Viren auf seinem Smartphone an.': { literal: 'Оно показывает сразу вирусы на его смартфоне', literary: 'Оно сразу обнаруживает вирусы на его смартфоне.' },
        'Ich frage ihn mal, wie die heißt.': { literal: 'Я спрошу его раз, как оно называется', literary: 'Я спрошу у него, как оно называется.' },
        'Ist schon toll, die neue Technologie.': { literal: 'Есть уже классно, новая технология', literary: 'Классная штука, новые технологии.' },
      },
      vocabulary: [
        { de: 'die App', plural: 'die Apps', ru: 'приложение', gender: 'feminin', collocation: 'Lieblings-App', example: 'Das ist ja echt interessant, was die Leute so für Apps haben.' },
        { de: 'das Ergebnis', plural: 'die Ergebnisse', ru: 'результат', gender: 'neutrum', collocation: 'neueste Ergebnisse', example: 'Über meine Lieblings-App erfahre ich sofort die neuesten Ergebnisse der Bundesliga.' },
        { de: 'die Kalorie', plural: 'die Kalorien', ru: 'калория', gender: 'feminin', collocation: 'wie viele Kalorien', example: 'Die mir genau anzeigt, wie viele Kalorien jedes Essen hat.' },
        { de: 'das Restaurant', plural: 'die Restaurants', ru: 'ресторан', gender: 'neutrum', collocation: 'beste Restaurants', example: 'Adrian hat eine App, die ihm zeigt, wo die besten Restaurants zu finden sind.' },
        { de: 'der Supermarkt', plural: 'die Supermärkte', ru: 'супермаркет', gender: 'maskulin', collocation: 'in verschiedenen Supermärkten', example: 'Frederiks App vergleicht die Preise in den verschiedenen Supermärkten.' },
        { de: 'das Fernsehprogramm', plural: 'die Fernsehprogramme', ru: 'телепрограмма', gender: 'neutrum', collocation: 'das Fernsehprogramm zeigen', example: 'Jetzt zeigt ihre App das Fernsehprogramm.' },
        { de: 'der Virus', plural: 'die Viren', ru: 'вирус', gender: 'maskulin', collocation: 'Viren anzeigen', example: 'Sie zeigt sofort Viren auf seinem Smartphone an.' },
        { de: 'erfahren', ru: 'узнавать', type: 'verb', forms: 'erfährt, erfuhr, hat erfahren', example: 'Über meine Lieblings-App erfahre ich sofort die neuesten Ergebnisse der Bundesliga.' },
        { de: 'anzeigen', ru: 'показывать, отображать', type: 'verb', forms: 'zeigt an, zeigte an, hat angezeigt', example: 'Die mir genau anzeigt, wie viele Kalorien jedes Essen hat.' },
        { de: 'vergleichen', ru: 'сравнивать', type: 'verb', forms: 'vergleicht, verglich, hat verglichen', example: 'Frederiks App vergleicht die Preise in den verschiedenen Supermärkten.' },
        { de: 'abnehmen', ru: 'худеть', type: 'verb', forms: 'nimmt ab, nahm ab, hat abgenommen', example: 'Ich muss abnehmen.' },
      ],
      practiceSentences: [
        { de: 'Die App zeigt Preise an.', ru: 'Приложение показывает цены.', note: 'отделяемая an- в конце' },
        { de: 'Ich erfahre Neuigkeiten.', ru: 'Я узнаю новости.', note: 'V2 позиция' },
        { de: 'Das Restaurant ist zu finden.', ru: 'Ресторан можно найти.', note: 'zu + Inf + sein' },
        { de: 'Er vergleicht Preise.', ru: 'Он сравнивает цены.', note: 'V2 позиция' },
        { de: 'Das Obst ist am billigsten.', ru: 'Фрукты самые дешёвые.', note: 'sein + Superlativ' },
      ],
      question: {
        de: 'Was macht Carmens App?',
        ru: 'Что делает приложение Кармен?',
        options: [
          { de: 'Sie zeigt Fußballergebnisse', ru: 'Показывает результаты футбола' },
          { de: 'Sie zeigt Kalorien an', ru: 'Показывает калории' },
          { de: 'Sie vergleicht Preise', ru: 'Сравнивает цены' },
        ],
        correct: 1,
        explanation: 'Кармен говорит: "Ich muss abnehmen. Ich habe eine App, die mir genau anzeigt, wie viele Kalorien jedes Essen hat."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Japan',
      type: 'диалог',
      text: 'Hallo, Anja! Gutes neues Jahr! Dir auch! Gesundes neues Jahr! Schon wieder zurück aus Japan? Ja, seit gestern. Dir auch alles Gute im neuen Jahr! Danke. Also, Weihnachten in Japan... ich weiß nicht. Ich brauche meinen Tannenbaum und das Essen mit der Familie. In Japan feiert man auch Weihnachten. Das ist dort sehr in Mode. Aber da ist es kein Familienfest, man feiert eher mit Freunden und geht in die Disco.',
      sentenceTranslations: {
        'Hallo, Anja!': { literal: 'Привет, Аня!', literary: 'Привет, Аня!' },
        'Gutes neues Jahr!': { literal: 'Хорошего нового года!', literary: 'С Новым годом!' },
        'Dir auch!': { literal: 'Тебе тоже!', literary: 'Тебе тоже!' },
        'Gesundes neues Jahr!': { literal: 'Здорового нового года!', literary: 'Здоровья в новом году!' },
        'Schon wieder zurück aus Japan?': { literal: 'Уже снова обратно из Японии?', literary: 'Уже вернулся из Японии?' },
        'Ja, seit gestern.': { literal: 'Да, с вчера', literary: 'Да, со вчерашнего дня.' },
        'Dir auch alles Gute im neuen Jahr!': { literal: 'Тебе тоже всего хорошего в новом году!', literary: 'Тебе тоже всего хорошего в новом году!' },
        'Danke.': { literal: 'Спасибо', literary: 'Спасибо.' },
        'Also, Weihnachten in Japan... ich weiß nicht.': { literal: 'Ну, Рождество в Японии... я не знаю', literary: 'Ну, Рождество в Японии... не знаю.' },
        'Also, Weihnachten in Japan...': { literal: 'Итак, Рождество в Японии...', literary: 'Ну, Рождество в Японии...' },
        'ich weiß nicht.': { literal: 'я не знаю', literary: 'я не знаю.' },
        'Ich brauche meinen Tannenbaum und das Essen mit der Familie.': { literal: 'Я нуждаюсь в моей ёлке и еде с семьёй', literary: 'Мне нужна моя ёлка и семейный ужин.' },
        'In Japan feiert man auch Weihnachten.': { literal: 'В Японии празднуют также Рождество', literary: 'В Японии тоже празднуют Рождество.' },
        'Das ist dort sehr in Mode.': { literal: 'Это есть там очень в моде', literary: 'Там это очень модно.' },
        'Aber da ist es kein Familienfest, man feiert eher mit Freunden und geht in die Disco.': { literal: 'Но там есть это никакой семейный праздник, празднуют скорее с друзьями и идут в дискотеку', literary: 'Но это не семейный праздник, там празднуют скорее с друзьями и ходят на дискотеку.' },
      },
      vocabulary: [
        { de: 'das Weihnachten', ru: 'Рождество', gender: 'neutrum', collocation: 'Weihnachten feiern', example: 'In Japan feiert man auch Weihnachten.' },
        { de: 'der Tannenbaum', plural: 'die Tannenbäume', ru: 'ёлка', gender: 'maskulin', collocation: 'meinen Tannenbaum brauchen', example: 'Ich brauche meinen Tannenbaum und das Essen mit der Familie.' },
        { de: 'die Familie', plural: 'die Familien', ru: 'семья', gender: 'feminin', collocation: 'mit der Familie', example: 'Ich brauche meinen Tannenbaum und das Essen mit der Familie.' },
        { de: 'das Familienfest', plural: 'die Familienfeste', ru: 'семейный праздник', gender: 'neutrum', collocation: 'kein Familienfest', example: 'Aber da ist es kein Familienfest.' },
        { de: 'die Disco', plural: 'die Discos', ru: 'дискотека', gender: 'feminin', collocation: 'in die Disco gehen', example: 'Man feiert eher mit Freunden und geht in die Disco.' },
        { de: 'feiern', ru: 'праздновать', type: 'verb', forms: 'feiert, feierte, hat gefeiert', example: 'In Japan feiert man auch Weihnachten.' },
        { de: 'gesund', ru: 'здоровый', type: 'adj', example: 'Gesundes neues Jahr!' },
      ],
      practiceSentences: [
        { de: 'Man spricht Deutsch.', ru: 'Говорят по-немецки.', note: 'man + V2 (3 л. ед.ч.)' },
        { de: 'Ich komme aus Japan.', ru: 'Я из Японии.', note: 'V2 позиция' },
        { de: 'Er geht in die Schule.', ru: 'Он идёт в школу.', note: 'V2, направление in + Akk' },
        { de: 'Wir feiern mit Familie.', ru: 'Мы празднуем с семьёй.', note: 'V2 позиция' },
        { de: 'Das ist modern.', ru: 'Это современно.', note: 'sein + прилагательное' },
      ],
      question: {
        de: 'Wie feiert man Weihnachten in Japan?',
        ru: 'Как празднуют Рождество в Японии?',
        options: [
          { de: 'Mit der Familie', ru: 'С семьёй' },
          { de: 'Mit Freunden', ru: 'С друзьями' },
          { de: 'Alleine zu Hause', ru: 'Дома в одиночестве' },
        ],
        correct: 1,
        explanation: '"In Japan... ist es kein Familienfest, man feiert eher mit Freunden und geht in die Disco."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Frau Anders',
      type: 'диалог у врача',
      text: 'Frau Anders, Sie müssen unbedingt Ihre Medikamente richtig nehmen, sonst hilft die ganze Therapie nicht. Aber ich nehme doch die Tabletten und den Hustensaft. Das Antibiotikum nehme ich auch. Aber ich hatte Ihnen schon das letzte Mal gesagt, dass Sie das Antibiotikum nicht mehr nehmen sollen. Das hatte ich falsch verstanden.',
      sentenceTranslations: {
        'Frau Anders, Sie müssen unbedingt Ihre Medikamente richtig nehmen, sonst hilft die ganze Therapie nicht.': { literal: 'Госпожа Андерс, вы должны обязательно ваши медикаменты правильно принимать, иначе помогает вся терапия не', literary: 'Госпожа Андерс, вы должны обязательно правильно принимать лекарства, иначе терапия не поможет.' },
        'Aber ich nehme doch die Tabletten und den Hustensaft.': { literal: 'Но я принимаю же таблетки и сироп от кашля', literary: 'Но я же принимаю таблетки и сироп от кашля.' },
        'Das Antibiotikum nehme ich auch.': { literal: 'Антибиотик принимаю я тоже', literary: 'Антибиотик я тоже принимаю.' },
        'Aber ich hatte Ihnen schon das letzte Mal gesagt, dass Sie das Antibiotikum nicht mehr nehmen sollen.': { literal: 'Но я имел Вам уже последний раз сказал, что вы антибиотик больше не принимать должны', literary: 'Но я же вам в прошлый раз уже говорил, что антибиотик вам больше не нужно принимать.' },
        'Das hatte ich falsch verstanden.': { literal: 'Это имела я неправильно понял', literary: 'Я неправильно поняла.' },
      },
      vocabulary: [
        { de: 'das Medikament', plural: 'die Medikamente', ru: 'лекарство', gender: 'neutrum', collocation: 'Medikamente nehmen', example: 'Sie müssen unbedingt Ihre Medikamente richtig nehmen.' },
        { de: 'die Therapie', plural: 'die Therapien', ru: 'терапия', gender: 'feminin', collocation: 'die ganze Therapie', example: 'Sonst hilft die ganze Therapie nicht.' },
        { de: 'die Tablette', plural: 'die Tabletten', ru: 'таблетка', gender: 'feminin', collocation: 'die Tabletten nehmen', example: 'Aber ich nehme doch die Tabletten und den Hustensaft.' },
        { de: 'der Hustensaft', plural: 'die Hustensäfte', ru: 'сироп от кашля', gender: 'maskulin', collocation: 'den Hustensaft nehmen', example: 'Aber ich nehme doch die Tabletten und den Hustensaft.' },
        { de: 'das Antibiotikum', plural: 'die Antibiotika', ru: 'антибиотик', gender: 'neutrum', collocation: 'das Antibiotikum nehmen', example: 'Das Antibiotikum nehme ich auch.' },
        { de: 'nehmen', ru: 'принимать', type: 'verb', forms: 'nimmt, nahm, hat genommen', example: 'Sie müssen unbedingt Ihre Medikamente richtig nehmen.' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Sonst hilft die ganze Therapie nicht.' },
        { de: 'verstehen', ru: 'понимать', type: 'verb', forms: 'versteht, verstand, hat verstanden', example: 'Das hatte ich falsch verstanden.' },
        { de: 'richtig', ru: 'правильно', type: 'adv', example: 'Sie müssen unbedingt Ihre Medikamente richtig nehmen.' },
      ],
      practiceSentences: [
        { de: 'Sie müssen warten.', ru: 'Вы должны подождать.', note: 'модальный + инфинитив' },
        { de: 'Die Medizin hilft nicht.', ru: 'Лекарство не помогает.', note: 'V2 + nicht' },
        { de: 'Ich verstehe das nicht.', ru: 'Я этого не понимаю.', note: 'V2 + nicht' },
        { de: 'Er soll kommen.', ru: 'Он должен прийти.', note: 'модальный + инфинитив' },
        { de: 'Ich habe verstanden.', ru: 'Я понял.', note: 'Perfekt: haben + Part II' },
      ],
      question: {
        de: 'Was soll Frau Anders nicht mehr nehmen?',
        ru: 'Что госпоже Андерс больше не следует принимать?',
        options: [
          { de: 'Die Tabletten', ru: 'Таблетки' },
          { de: 'Das Antibiotikum', ru: 'Антибиотик' },
          { de: 'Den Hustensaft', ru: 'Сироп от кашля' },
        ],
        correct: 1,
        explanation: 'Врач говорит: "ich hatte Ihnen schon das letzte Mal gesagt, dass Sie das Antibiotikum nicht mehr nehmen sollen."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Teichmann',
      type: 'телефонный разговор',
      text: 'Teichmann. Teichmann, ich rufe wegen Ihrer Internetbestellung bei unserem Supermarkt an. Können wir um 16 Uhr vorbeikommen und die Sachen bringen? Nein, um 16 Uhr bin ich nicht zu Hause. Geht es um 14 Uhr? Um 14 Uhr? Heute Abend um 21 Uhr? Nein, kommen Sie doch gegen 16 Uhr, dann wird mein Mann zu Hause sein. Okay, vielen Dank. Ich danke auch.',
      sentenceTranslations: {
        'Teichmann.': { literal: 'Тайхманн', literary: 'Тайхманн.' },
        'Teichmann, ich rufe wegen Ihrer Internetbestellung bei unserem Supermarkt an.': { literal: 'Тайхманн, я звоню из-за вашего интернет-заказа при нашем супермаркете', literary: 'Тайхманн, я звоню по поводу вашего интернет-заказа в нашем супермаркете.' },
        'Können wir um 16 Uhr vorbeikommen und die Sachen bringen?': { literal: 'Можем мы в 16 часов заехать и вещи принести?', literary: 'Можем мы заехать в 16 часов и привезти вещи?' },
        'Nein, um 16 Uhr bin ich nicht zu Hause.': { literal: 'Нет, в 16 часов есть я не дома', literary: 'Нет, в 16 часов меня не будет дома.' },
        'Geht es um 14 Uhr?': { literal: 'Идёт это в 14 часов?', literary: 'А в 14 часов подойдёт?' },
        'Um 14 Uhr?': { literal: 'В 14 часов?', literary: 'В 14 часов?' },
        'Heute Abend um 21 Uhr?': { literal: 'Сегодня вечером в 21 час?', literary: 'Сегодня вечером в 21 час?' },
        'Nein, kommen Sie doch gegen 16 Uhr, dann wird mein Mann zu Hause sein.': { literal: 'Нет, приходите вы же около 16 часов, тогда будет мой муж дома быть', literary: 'Нет, приходите около 16 часов, тогда мой муж будет дома.' },
        'Okay, vielen Dank.': { literal: 'Хорошо, большое спасибо', literary: 'Хорошо, большое спасибо.' },
        'Ich danke auch.': { literal: 'Я благодарю тоже', literary: 'И вам спасибо.' },
      },
      vocabulary: [
        { de: 'die Internetbestellung', plural: 'die Internetbestellungen', ru: 'интернет-заказ', gender: 'feminin', collocation: 'wegen Ihrer Internetbestellung', example: 'Ich rufe wegen Ihrer Internetbestellung bei unserem Supermarkt an.' },
        { de: 'die Sachen', ru: 'вещи', gender: 'feminin', collocation: 'die Sachen bringen', example: 'Können wir um 16 Uhr vorbeikommen und die Sachen bringen?' },
        { de: 'der Mann', plural: 'die Männer', ru: 'муж', gender: 'maskulin', collocation: 'mein Mann', example: 'Dann wird mein Mann zu Hause sein.' },
        { de: 'vorbeikommen', ru: 'заехать, зайти', type: 'verb', forms: 'kommt vorbei, kam vorbei, ist vorbeigekommen', example: 'Können wir um 16 Uhr vorbeikommen und die Sachen bringen?' },
        { de: 'bringen', ru: 'приносить, привозить', type: 'verb', forms: 'bringt, brachte, hat gebracht', example: 'Können wir um 16 Uhr vorbeikommen und die Sachen bringen?' },
      ],
      practiceSentences: [
        { de: 'Ich rufe dich an.', ru: 'Я тебе звоню.', note: 'отделяемая an- в конце' },
        { de: 'Wir kommen vorbei.', ru: 'Мы заедем.', note: 'отделяемая vorbei-' },
        { de: 'Er ist zu Hause.', ru: 'Он дома.', note: 'sein + zu Hause' },
        { de: 'Können Sie kommen?', ru: 'Вы можете прийти?', note: 'модальный V1 + инфинитив' },
        { de: 'Er wird arbeiten.', ru: 'Он будет работать.', note: 'Futur: wird + инфинитив' },
      ],
      question: {
        de: 'Wann kommen die Sachen?',
        ru: 'Когда привезут вещи?',
        options: [
          { de: 'Um 14 Uhr', ru: 'В 14:00' },
          { de: 'Um 16 Uhr', ru: 'В 16:00' },
          { de: 'Um 21 Uhr', ru: 'В 21:00' },
        ],
        correct: 1,
        explanation: 'Договорились: "kommen Sie doch gegen 16 Uhr, dann wird mein Mann zu Hause sein."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Mike',
      type: 'диалог',
      text: 'Hallo Mike, was machst du am Wochenende? Ich gehe im Meer schwimmen. Ist das nicht zu kalt? Ich schwimme auch im Winter. Egal ob es regnet oder schneit, also macht mir das Wetter nichts aus. Aber morgen und am Sonntag scheint ja die Sonne, da macht es am meisten Spaß.',
      sentenceTranslations: {
        'Hallo Mike, was machst du am Wochenende?': { literal: 'Привет Майк, что делаешь ты на выходных?', literary: 'Привет, Майк, что ты делаешь на выходных?' },
        'Ich gehe im Meer schwimmen.': { literal: 'Я иду в море плавать', literary: 'Я пойду купаться в море.' },
        'Ist das nicht zu kalt?': { literal: 'Есть это не слишком холодно?', literary: 'Разве не слишком холодно?' },
        'Ich schwimme auch im Winter.': { literal: 'Я плаваю также зимой', literary: 'Я плаваю и зимой.' },
        'Egal ob es regnet oder schneit, also macht mir das Wetter nichts aus.': { literal: 'Всё равно идёт ли дождь или снег, итак делает мне погода ничего', literary: 'Неважно, дождь или снег, погода мне не мешает.' },
        'Aber morgen und am Sonntag scheint ja die Sonne, da macht es am meisten Spaß.': { literal: 'Но завтра и в воскресенье светит же солнце, тогда делает оно больше всего веселья', literary: 'Но завтра и в воскресенье будет солнце, тогда это приносит больше всего удовольствия.' },
      },
      vocabulary: [
        { de: 'das Meer', plural: 'die Meere', ru: 'море', gender: 'neutrum', collocation: 'im Meer schwimmen', example: 'Ich gehe im Meer schwimmen.' },
        { de: 'der Winter', plural: 'die Winter', ru: 'зима', gender: 'maskulin', collocation: 'im Winter', example: 'Ich schwimme auch im Winter.' },
        { de: 'das Wetter', ru: 'погода', gender: 'neutrum', collocation: 'das Wetter macht nichts aus', example: 'Also macht mir das Wetter nichts aus.' },
        { de: 'die Sonne', plural: 'die Sonnen', ru: 'солнце', gender: 'feminin', collocation: 'die Sonne scheint', example: 'Aber morgen und am Sonntag scheint ja die Sonne.' },
        { de: 'der Spaß', ru: 'удовольствие', gender: 'maskulin', collocation: 'Spaß machen', example: 'Da macht es am meisten Spaß.' },
        { de: 'schwimmen', ru: 'плавать', type: 'verb', forms: 'schwimmt, schwamm, ist geschwommen', example: 'Ich gehe im Meer schwimmen.' },
        { de: 'scheinen', ru: 'светить', type: 'verb', forms: 'scheint, schien, hat geschienen', example: 'Aber morgen und am Sonntag scheint ja die Sonne.' },
      ],
      practiceSentences: [
        { de: 'Ich gehe einkaufen.', ru: 'Я иду за покупками.', note: 'gehen + Infinitiv' },
        { de: 'Es regnet heute.', ru: 'Сегодня идёт дождь.', note: 'безличное es + V2' },
        { de: 'Das macht nichts.', ru: 'Это ничего.', note: 'V2 позиция' },
        { de: 'Es macht Spaß.', ru: 'Это весело.', note: 'es + V2' },
        { de: 'Die Sonne scheint.', ru: 'Солнце светит.', note: 'V2 позиция' },
      ],
      question: {
        de: 'Wann geht Mike schwimmen?',
        ru: 'Когда Майк ходит плавать?',
        options: [
          { de: 'Nur im Sommer', ru: 'Только летом' },
          { de: 'Auch im Winter', ru: 'И зимой тоже' },
          { de: 'Nur bei gutem Wetter', ru: 'Только в хорошую погоду' },
        ],
        correct: 1,
        explanation: 'Mike говорит: "Ich schwimme auch im Winter. Egal ob es regnet oder schneit."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Hotel',
      type: 'телефонный разговор',
      text: 'Hotel Astoria, Rezeption. Sie sprechen mit Herrn Kern. Wie kann ich Ihnen helfen? Ich rufe von Zimmer 302 an. Ah ja, funktioniert der Fernseher jetzt? Sie hatten ja auch kein Internet. Mit dem neuen Passwort klappt es wohl jetzt, oder? Ja, ja, das ist in Ordnung. Aber wir haben keine Heizung. Es ist zu kalt hier. Wir schicken sofort jemanden.',
      sentenceTranslations: {
        'Hotel Astoria, Rezeption.': { literal: 'Отель Астория, регистратура', literary: 'Отель Астория, ресепшн.' },
        'Sie sprechen mit Herrn Kern.': { literal: 'Вы говорите с господином Керном', literary: 'Вы говорите с господином Керном.' },
        'Wie kann ich Ihnen helfen?': { literal: 'Как могу я Вам помочь?', literary: 'Чем могу помочь?' },
        'Ich rufe von Zimmer 302 an.': { literal: 'Я звоню из номера 302', literary: 'Я звоню из номера 302.' },
        'Ah ja, funktioniert der Fernseher jetzt?': { literal: 'А да, функционирует телевизор теперь?', literary: 'А, да, телевизор теперь работает?' },
        'Sie hatten ja auch kein Internet.': { literal: 'Вы имели же тоже никакого интернета', literary: 'У вас же ещё и интернета не было.' },
        'Mit dem neuen Passwort klappt es wohl jetzt, oder?': { literal: 'С новым паролем получается это наверное теперь, или?', literary: 'С новым паролем теперь всё работает, да?' },
        'Ja, ja, das ist in Ordnung.': { literal: 'Да, да, это есть в порядке', literary: 'Да, да, с этим всё в порядке.' },
        'Aber wir haben keine Heizung.': { literal: 'Но мы имеем никакого отопления', literary: 'Но у нас нет отопления.' },
        'Es ist zu kalt hier.': { literal: 'Есть слишком холодно здесь', literary: 'Здесь слишком холодно.' },
        'Wir schicken sofort jemanden.': { literal: 'Мы посылаем сразу кого-то', literary: 'Мы сразу кого-нибудь пришлём.' },
      },
      vocabulary: [
        { de: 'die Rezeption', plural: 'die Rezeptionen', ru: 'ресепшн', gender: 'feminin', collocation: 'Hotel Rezeption', example: 'Hotel Astoria, Rezeption.' },
        { de: 'das Zimmer', plural: 'die Zimmer', ru: 'номер (в отеле)', gender: 'neutrum', collocation: 'von Zimmer 302', example: 'Ich rufe von Zimmer 302 an.' },
        { de: 'der Fernseher', plural: 'die Fernseher', ru: 'телевизор', gender: 'maskulin', collocation: 'der Fernseher funktioniert', example: 'Funktioniert der Fernseher jetzt?' },
        { de: 'das Passwort', plural: 'die Passwörter', ru: 'пароль', gender: 'neutrum', collocation: 'mit dem neuen Passwort', example: 'Mit dem neuen Passwort klappt es wohl jetzt.' },
        { de: 'die Heizung', plural: 'die Heizungen', ru: 'отопление', gender: 'feminin', collocation: 'keine Heizung', example: 'Aber wir haben keine Heizung.' },
        { de: 'funktionieren', ru: 'работать, функционировать', type: 'verb', forms: 'funktioniert, funktionierte, hat funktioniert', example: 'Funktioniert der Fernseher jetzt?' },
        { de: 'klappen', ru: 'получаться, срабатывать', type: 'verb', forms: 'klappt, klappte, hat geklappt', example: 'Mit dem neuen Passwort klappt es wohl jetzt.' },
        { de: 'schicken', ru: 'посылать, отправлять', type: 'verb', forms: 'schickt, schickte, hat geschickt', example: 'Wir schicken sofort jemanden.' },
        { de: 'sofort', ru: 'сразу, немедленно', type: 'adv', example: 'Wir schicken sofort jemanden.' },
      ],
      practiceSentences: [
        { de: 'Der Computer funktioniert.', ru: 'Компьютер работает.', note: 'V2 позиция' },
        { de: 'Es klappt gut.', ru: 'Всё хорошо получается.', note: 'безличное es + V2' },
        { de: 'Ich schicke einen Brief.', ru: 'Я отправляю письмо.', note: 'V2 позиция' },
        { de: 'Können Sie helfen?', ru: 'Можете помочь?', note: 'модальный V1 вопрос' },
        { de: 'Wir haben ein Problem.', ru: 'У нас проблема.', note: 'V2 позиция' },
      ],
      question: {
        de: 'Was funktioniert nicht im Zimmer 302?',
        ru: 'Что не работает в номере 302?',
        options: [
          { de: 'Der Fernseher', ru: 'Телевизор' },
          { de: 'Das Internet', ru: 'Интернет' },
          { de: 'Die Heizung', ru: 'Отопление' },
        ],
        correct: 2,
        explanation: 'Гость говорит: "das ist in Ordnung. Aber wir haben keine Heizung. Es ist zu kalt hier."'
      }
    },

    /* ═══ TEIL 4 — 1 интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Dr. Löwe',
      type: 'интервью',
      text: 'Ich begrüße heute in unserem Studio einen Ernährungsmediziner, Herrn Doktor Löwe. Guten Tag! Herr Doktor Löwe, heutzutage möchten viele Menschen abnehmen. Wie kann man das schaffen? Tja, das Wichtigste ist Bewegung und das richtige Essen. Die Super-Diät gibt es aber nicht. Kann man nicht dünner werden, wenn man kein Abendessen isst? Das kann funktionieren, aber leider nicht bei allen Menschen. Manche bekommen dann nachts Hunger, stehen auf und essen dann noch viel mehr. Ja, und Schlaf braucht der Mensch? Genau, Schlaf ist wichtig, um Kilos zu verlieren. Zu wenig Schlaf macht dick. So interessant. Was meinen Sie denn zu der Mono-Diät? Diese Diät ist gefährlich, weil man hier nur ein Lebensmittel zu sich nimmt. Dann bekommt der Körper vielleicht keine Vitamine oder Proteine. Ich habe gelesen, dass Fast Food nicht so schlecht ist. Ja, man kann damit sogar abnehmen. Es gibt ja diese Fertig-Salate in jedem Supermarkt oder auch in Fast-Food-Restaurants. Wenn man da auf die Mayonnaise oder das Öl verzichtet, sind die richtig gesund. Was empfehlen Sie unseren Hörerinnen und Hörern? Jeder Mensch ist anders, also braucht jeder Mensch einen anderen Ernährungsplan. Das heißt, man muss feststellen, welches Essen für einen gut ist und welches nicht. Für alle gilt aber: Essen Sie weniger Zucker und achten Sie auf das Fett. Dann braucht man keine Diät. Vielen Dank, Herr Doktor Löwe! Gern geschehen.',
      sentenceTranslations: {
        'Ich begrüße heute in unserem Studio einen Ernährungsmediziner, Herrn Doktor Löwe.': { literal: 'Я приветствую сегодня в нашей студии одного диетолога, господина доктора Лёве', literary: 'Сегодня я приветствую в нашей студии диетолога, доктора Лёве.' },
        'Guten Tag!': { literal: 'Добрый день!', literary: 'Добрый день!' },
        'Herr Doktor Löwe, heutzutage möchten viele Menschen abnehmen.': { literal: 'Господин доктор Лёве, в наши дни хотят многие люди похудеть', literary: 'Доктор Лёве, в наши дни многие люди хотят похудеть.' },
        'Wie kann man das schaffen?': { literal: 'Как может человек это достичь?', literary: 'Как этого можно добиться?' },
        'Tja, das Wichtigste ist Bewegung und das richtige Essen.': { literal: 'Ну, самое важное есть движение и правильная еда', literary: 'Ну, самое важное — это движение и правильное питание.' },
        'Die Super-Diät gibt es aber nicht.': { literal: 'Супер-диету даёт это но не', literary: 'Но супер-диеты не существует.' },
        'Kann man nicht dünner werden, wenn man kein Abendessen isst?': { literal: 'Может человек не тоньше стать, если человек никакой ужин ест?', literary: 'Нельзя ли похудеть, если не есть ужин?' },
        'Das kann funktionieren, aber leider nicht bei allen Menschen.': { literal: 'Это может функционировать, но к сожалению не у всех людей', literary: 'Это может сработать, но, к сожалению, не у всех людей.' },
        'Manche bekommen dann nachts Hunger, stehen auf und essen dann noch viel mehr.': { literal: 'Некоторые получают тогда ночью голод, встают и едят тогда ещё гораздо больше', literary: 'Некоторые ночью чувствуют голод, встают и едят ещё больше.' },
        'Ja, und Schlaf braucht der Mensch?': { literal: 'Да, и сон нуждается человек?', literary: 'Да, а сон человеку нужен?' },
        'Genau, Schlaf ist wichtig, um Kilos zu verlieren.': { literal: 'Точно, сон есть важный, чтобы килограммы потерять', literary: 'Именно, сон важен, чтобы сбросить килограммы.' },
        'Zu wenig Schlaf macht dick.': { literal: 'Слишком мало сна делает толстым', literary: 'Недостаток сна приводит к полноте.' },
        'So interessant.': { literal: 'Так интересно', literary: 'Как интересно.' },
        'Was meinen Sie denn zu der Mono-Diät?': { literal: 'Что думаете Вы же о моно-диете?', literary: 'А что вы думаете о моно-диете?' },
        'Diese Diät ist gefährlich, weil man hier nur ein Lebensmittel zu sich nimmt.': { literal: 'Эта диета есть опасная, потому что человек здесь только один продукт к себе принимает', literary: 'Эта диета опасна, потому что при ней употребляют только один продукт.' },
        'Dann bekommt der Körper vielleicht keine Vitamine oder Proteine.': { literal: 'Тогда получает тело может быть никаких витаминов или белков', literary: 'Тогда организм, возможно, не получает витаминов или белков.' },
        'Ich habe gelesen, dass Fast Food nicht so schlecht ist.': { literal: 'Я имею прочитал, что фастфуд не так плохой есть', literary: 'Я читал, что фастфуд не так уж плох.' },
        'Ja, man kann damit sogar abnehmen.': { literal: 'Да, можно с этим даже похудеть', literary: 'Да, с ним можно даже похудеть.' },
        'Es gibt ja diese Fertig-Salate in jedem Supermarkt oder auch in Fast-Food-Restaurants.': { literal: 'Есть же эти готовые салаты в каждом супермаркете или также в фастфуд-ресторанах', literary: 'Ведь есть же готовые салаты в каждом супермаркете или фастфуд-ресторане.' },
        'Wenn man da auf die Mayonnaise oder das Öl verzichtet, sind die richtig gesund.': { literal: 'Если человек тут от майонеза или масла отказывается, есть они действительно здоровые', literary: 'Если отказаться от майонеза или масла, они действительно полезны.' },
        'Was empfehlen Sie unseren Hörerinnen und Hörern?': { literal: 'Что рекомендуете Вы нашим слушательницам и слушателям?', literary: 'Что вы порекомендуете нашим слушателям?' },
        'Jeder Mensch ist anders, also braucht jeder Mensch einen anderen Ernährungsplan.': { literal: 'Каждый человек есть другой, итак нуждается каждый человек в другом плане питания', literary: 'Каждый человек индивидуален, поэтому каждому нужен свой план питания.' },
        'Das heißt, man muss feststellen, welches Essen für einen gut ist und welches nicht.': { literal: 'Это значит, человек должен установить, какая еда для одного хорошая есть и какая не', literary: 'То есть нужно определить, какая еда подходит, а какая нет.' },
        'Für alle gilt aber: Essen Sie weniger Zucker und achten Sie auf das Fett.': { literal: 'Для всех действует но: ешьте меньше сахара и следите за жиром', literary: 'Но для всех одно: ешьте меньше сахара и следите за жирами.' },
        'Dann braucht man keine Diät.': { literal: 'Тогда нуждается человек ни в какой диете', literary: 'Тогда никакая диета не нужна.' },
        'Vielen Dank, Herr Doktor Löwe!': { literal: 'Большое спасибо, господин доктор Лёве!', literary: 'Большое спасибо, доктор Лёве!' },
        'Gern geschehen.': { literal: 'Охотно произошло', literary: 'Пожалуйста.' },
      },
      vocabulary: [
        { de: 'der Ernährungsmediziner', plural: 'die Ernährungsmediziner', ru: 'диетолог', gender: 'maskulin', collocation: 'einen Ernährungsmediziner begrüßen', example: 'Ich begrüße heute in unserem Studio einen Ernährungsmediziner.' },
        { de: 'die Bewegung', plural: 'die Bewegungen', ru: 'движение', gender: 'feminin', collocation: 'Bewegung ist wichtig', example: 'Das Wichtigste ist Bewegung und das richtige Essen.' },
        { de: 'die Diät', plural: 'die Diäten', ru: 'диета', gender: 'feminin', collocation: 'die Super-Diät', example: 'Die Super-Diät gibt es aber nicht.' },
        { de: 'der Schlaf', ru: 'сон', gender: 'maskulin', collocation: 'Schlaf ist wichtig', example: 'Genau, Schlaf ist wichtig, um Kilos zu verlieren.' },
        { de: 'das Lebensmittel', plural: 'die Lebensmittel', ru: 'продукт питания', gender: 'neutrum', collocation: 'nur ein Lebensmittel', example: 'Weil man hier nur ein Lebensmittel zu sich nimmt.' },
        { de: 'der Zucker', ru: 'сахар', gender: 'maskulin', collocation: 'weniger Zucker essen', example: 'Essen Sie weniger Zucker und achten Sie auf das Fett.' },
        { de: 'das Fett', plural: 'die Fette', ru: 'жир', gender: 'neutrum', collocation: 'auf das Fett achten', example: 'Achten Sie auf das Fett.' },
        { de: 'der Ernährungsplan', plural: 'die Ernährungspläne', ru: 'план питания', gender: 'maskulin', collocation: 'einen anderen Ernährungsplan', example: 'Also braucht jeder Mensch einen anderen Ernährungsplan.' },
        { de: 'schaffen', ru: 'добиваться, справляться', type: 'verb', forms: 'schafft, schaffte, hat geschafft', example: 'Wie kann man das schaffen?' },
        { de: 'verzichten auf', ru: 'отказываться от', type: 'verb', forms: 'verzichtet, verzichtete, hat verzichtet', example: 'Wenn man da auf die Mayonnaise oder das Öl verzichtet.' },
        { de: 'empfehlen', ru: 'рекомендовать', type: 'verb', forms: 'empfiehlt, empfahl, hat empfohlen', example: 'Was empfehlen Sie unseren Hörerinnen und Hörern?' },
        { de: 'feststellen', ru: 'определять, устанавливать', type: 'verb', forms: 'stellt fest, stellte fest, hat festgestellt', example: 'Man muss feststellen, welches Essen für einen gut ist.' },
        { de: 'gefährlich', ru: 'опасный', type: 'adj', example: 'Diese Diät ist gefährlich.' },
        { de: 'gesund', ru: 'здоровый, полезный', type: 'adj', example: 'Sind die richtig gesund.' },
      ],
      practiceSentences: [
        { de: 'Man kann abnehmen.', ru: 'Можно похудеть.', note: 'модальный + инфинитив' },
        { de: 'Schlaf ist wichtig.', ru: 'Сон важен.', note: 'sein + прилагательное' },
        { de: 'Ich verzichte auf Zucker.', ru: 'Я отказываюсь от сахара.', note: 'V2, verzichten auf + Akk' },
        { de: 'Das funktioniert gut.', ru: 'Это хорошо работает.', note: 'V2 позиция' },
        { de: 'Man muss Sport machen.', ru: 'Нужно заниматься спортом.', note: 'модальный + инфинитив' },
      ],
      question: {
        de: 'Was ist das Wichtigste beim Abnehmen?',
        ru: 'Что самое важное при похудении?',
        options: [
          { de: 'Eine Super-Diät', ru: 'Супер-диета' },
          { de: 'Bewegung und das richtige Essen', ru: 'Движение и правильное питание' },
          { de: 'Kein Abendessen', ru: 'Не есть ужин' },
        ],
        correct: 1,
        explanation: 'Доктор Лёве говорит: "Das Wichtigste ist Bewegung und das richtige Essen. Die Super-Diät gibt es aber nicht."'
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
    title: 'ДЕНЬ ИЗ ЖИЗНИ СЛУШАТЕЛЯ',
    text: 'По радио объявили, что для {0} ищут певцов. Том позвонил Леа из Бразилии и попросил привезти его зелёную {1}. В книжном отделе сегодня {2} свои книги немецкий автор. Волонтёры хотят {3} цветы у вокзала. Из городского музея украли ценную {4}. Кармен пользуется приложением для подсчёта {5}. В Японии Рождество празднуют с {6}, а не с семьёй. Врач сказал госпоже Андерс не принимать {7}. Доставку привезут около {8} часов. Майк {9} даже зимой в море. В отеле не работает {10}. Доктор Лёве говорит: самое важное — {11} и правильное питание.',
    blanks: [
      { answer: 'die Talentshow', hint: 'талант-шоу (die Talentshow)' },
      { answer: 'die Jacke', hint: 'куртка (die Jacke, Akk.)' },
      { answer: 'signiert', hint: 'подписывает (signieren)' },
      { answer: 'pflanzen', hint: 'сажать (pflanzen)' },
      { answer: 'das Buch', hint: 'книга (das Buch, Akk.)' },
      { answer: 'der Kalorien', hint: 'калории (die Kalorie, Gen. Pl.)' },
      { answer: 'Freunden', hint: 'друзья (der Freund, Dat. Pl.)' },
      { answer: 'das Antibiotikum', hint: 'антибиотик (das Antibiotikum, Akk.)' },
      { answer: '16', hint: 'шестнадцать (16 Uhr)' },
      { answer: 'schwimmt', hint: 'плавает (schwimmen)' },
      { answer: 'die Heizung', hint: 'отопление (die Heizung)' },
      { answer: 'Bewegung', hint: 'движение (die Bewegung)' },
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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Goethe A2 Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Talentshow).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'Passiv Präsens: werden + Partizip II — Sänger werden gesucht',
    'Konjunktiv II: wäre, würdest — schön wäre es, wenn du mitbringen würdest',
    'dass-Nebensatz: глагол в конце — dass sich keine Gitarristen melden sollen',
    'weil-Nebensatz: глагол в конце — weil man nur ein Lebensmittel zu sich nimmt',
    'Отделяемые приставки: anrufen, anzeigen, vorbeikommen, abnehmen, feststellen',
    'Модальные глаголы: müssen, können, möchten, wollen, sollen',
    'um...zu + Infinitiv: um Kilos zu verlieren',
    'Сравнительная степень: am billigsten, am meisten',
  ],
};

LESSONS.push(LESSON_10);
