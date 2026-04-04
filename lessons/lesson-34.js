/* ═══════════════════════════════════════════════════════════
   Lesson 34 — Goethe Zertifikat A2 Hören — Fit in Deutsch 2
   Источник: YouTube
   ═══════════════════════════════════════════════════════════ */

var LESSONS = window.LESSONS || [];

var LESSON_34 = {
  id: 'lesson-34',
  number: 34,
  title: 'Fit in Deutsch 2 — Hören A2',
  subtitle: 'Schenken macht Spaß, Sonderangebote, Hiphop Festival und Interview mit Jens',
  level: 'A2',
  source: 'Goethe-Institut',
  videoId: 'Vid-34',
  videoUrl: 'https://www.youtube.com/watch?v=_yF07njlb9I',

  /* ─── 12 мини-текстов по частям ─── */
  texts: [
    /* ═══ TEIL 1 — 5 коротких текстов ═══ */
    {
      id: 'text-1', teil: 1, aufgabe: 1,
      name: 'Ratgeber',
      type: 'радиопередача',
      text: 'Herzlich willkommen zu eurer Lieblingssendung Ratgeber von und für Teens. Unser Thema heute: Schenken macht Spaß. Vielen jungen Hörern und Hörerinnen macht Schenken wirklich Spaß. Aber die Frage, die immer wieder auftaucht, ist, was soll ich meinem Freund, meiner Freundin schenken, ohne mein ganzes Taschengeld auszugeben? Ruf doch mal einfach an, um mit euren Ideen und Tipps zu helfen.',
      sentenceTranslations: {
        'Herzlich willkommen zu eurer Lieblingssendung Ratgeber von und für Teens.': { literal: 'Сердечно добро пожаловать к вашей любимой передаче Советчик от и для подростков', literary: 'Добро пожаловать на вашу любимую передачу «Советы от подростков и для подростков».' },
        'Unser Thema heute: Schenken macht Spaß.': { literal: 'Наша тема сегодня: дарить делает веселье', literary: 'Наша тема сегодня: дарить подарки — это весело.' },
        'Vielen jungen Hörern und Hörerinnen macht Schenken wirklich Spaß.': { literal: 'Многим молодым слушателям делает дарение действительно веселье', literary: 'Многим молодым слушателям действительно нравится дарить подарки.' },
        'Aber die Frage, die immer wieder auftaucht, ist, was soll ich meinem Freund, meiner Freundin schenken, ohne mein ganzes Taschengeld auszugeben?': { literal: 'Но вопрос, который всегда снова всплывает, есть, что должен я моему другу, моей подруге подарить, без мои все карманные деньги потратить?', literary: 'Но вопрос, который постоянно возникает: что подарить другу или подруге, не потратив все карманные деньги?' },
        'Ruf doch mal einfach an, um mit euren Ideen und Tipps zu helfen.': { literal: 'Позвони же раз просто, чтобы с вашими идеями и советами помочь', literary: 'Просто позвоните, чтобы помочь своими идеями и советами.' },
      },
      vocabulary: [
        { de: 'die Sendung', plural: 'die Sendungen', ru: 'передача', gender: 'feminin', collocation: 'Lieblingssendung von Teens', example: 'Herzlich willkommen zu eurer Lieblingssendung Ratgeber von und für Teens.' },
        { de: 'der Ratgeber', plural: 'die Ratgeber', ru: 'советчик, передача советов', gender: 'maskulin', collocation: 'Ratgeber für Teens', example: 'Herzlich willkommen zu eurer Lieblingssendung Ratgeber von und für Teens.' },
        { de: 'das Thema', plural: 'die Themen', ru: 'тема', gender: 'neutrum', collocation: 'unser Thema heute', example: 'Unser Thema heute: Schenken macht Spaß.' },
        { de: 'der Hörer', plural: 'die Hörer', ru: 'слушатель', gender: 'maskulin', collocation: 'junge Hörer', example: 'Vielen jungen Hörern und Hörerinnen macht Schenken wirklich Spaß.' },
        { de: 'die Hörerin', plural: 'die Hörerinnen', ru: 'слушательница', gender: 'feminin', collocation: 'junge Hörerinnen', example: 'Vielen jungen Hörern und Hörerinnen macht Schenken wirklich Spaß.' },
        { de: 'der Spaß', plural: 'die Späße', ru: 'веселье, удовольствие', gender: 'maskulin', collocation: 'Schenken macht Spaß', example: 'Unser Thema heute: Schenken macht Spaß.' },
        { de: 'die Frage', plural: 'die Fragen', ru: 'вопрос', gender: 'feminin', collocation: 'die Frage taucht auf', example: 'Aber die Frage, die immer wieder auftaucht, ist, was soll ich meinem Freund, meiner Freundin schenken, ohne mein ganzes Taschengeld auszugeben?' },
        { de: 'das Taschengeld', plural: 'die Taschengelder', ru: 'карманные деньги', gender: 'neutrum', collocation: 'ganzes Taschengeld ausgeben', example: 'Aber die Frage, die immer wieder auftaucht, ist, was soll ich meinem Freund, meiner Freundin schenken, ohne mein ganzes Taschengeld auszugeben?' },
        { de: 'die Idee', plural: 'die Ideen', ru: 'идея', gender: 'feminin', collocation: 'mit euren Ideen helfen', example: 'Ruf doch mal einfach an, um mit euren Ideen und Tipps zu helfen.' },
        { de: 'der Tipp', plural: 'die Tipps', ru: 'совет', gender: 'maskulin', collocation: 'mit Tipps helfen', example: 'Ruf doch mal einfach an, um mit euren Ideen und Tipps zu helfen.' },
        { de: 'auftauchen', ru: 'возникать, всплывать', type: 'verb', forms: 'taucht auf, tauchte auf, ist aufgetaucht', example: 'Aber die Frage, die immer wieder auftaucht, ist, was soll ich meinem Freund, meiner Freundin schenken, ohne mein ganzes Taschengeld auszugeben?' },
        { de: 'schenken', ru: 'дарить', type: 'verb', forms: 'schenkt, schenkte, hat geschenkt', example: 'Vielen jungen Hörern und Hörerinnen macht Schenken wirklich Spaß.' },
        { de: 'ausgeben', ru: 'тратить', type: 'verb', forms: 'gibt aus, gab aus, hat ausgegeben', example: 'Aber die Frage, die immer wieder auftaucht, ist, was soll ich meinem Freund, meiner Freundin schenken, ohne mein ganzes Taschengeld auszugeben?' },
        { de: 'anrufen', ru: 'звонить', type: 'verb', forms: 'ruft an, rief an, hat angerufen', example: 'Ruf doch mal einfach an, um mit euren Ideen und Tipps zu helfen.' },
        { de: 'helfen', ru: 'помогать', type: 'verb', forms: 'hilft, half, hat geholfen', example: 'Ruf doch mal einfach an, um mit euren Ideen und Tipps zu helfen.' },
      ],
      practiceSentences: [
        { de: 'Das Geschenk macht mir Freude.', ru: 'Подарок доставляет мне радость.', note: 'V2' },
        { de: 'Die Idee taucht plötzlich auf.', ru: 'Идея внезапно возникает.', note: 'отделяемая приставка' },
        { de: 'Ich rufe dich morgen an.', ru: 'Я позвоню тебе завтра.', note: 'отделяемая приставка' },
        { de: 'Er kauft Blumen, ohne viel Geld auszugeben.', ru: 'Он покупает цветы, не тратя много денег.', note: 'ohne zu + инфинитив' },
        { de: 'Die Frage, die ich habe, ist wichtig.', ru: 'Вопрос, который у меня есть, важен.', note: 'относительное придаточное, глагол в конце' },
      ],
      question: {
        de: 'Was ist das Thema der Radiosendung?',
        ru: 'Какая тема радиопередачи?',
        options: [
          { de: 'Wie man Geld spart', ru: 'Как экономить деньги' },
          { de: 'Geschenke machen ohne viel Geld auszugeben', ru: 'Как дарить подарки, не тратя много денег' },
          { de: 'Taschengeld für Teenager', ru: 'Карманные деньги для подростков' },
        ],
        correct: 1,
        explanation: 'В тексте прямо говорится: "Unser Thema heute: Schenken macht Spaß" и далее обсуждается вопрос подарков без больших трат.'
      }
    },
    {
      id: 'text-2', teil: 1, aufgabe: 2,
      name: 'Geschenke-Tipps',
      type: 'монолог',
      text: 'Schenken. Hm, das ist so ein Thema. Ich schenke gern meinen Freundinnen etwas zum Geburtstag und finde es toll, wenn ich ihnen damit eine Freude mache. Aber das Problem ist natürlich, was ein Geschenk kostet. Man muss es ja von seinem Taschengeld bezahlen. Ich persönlich suche im Internet nach Ideen und mit ein bisschen Fantasie dazu mache ich meine Geschenke selbst. Ketten oder Ringe, Kalender, Poster und so weiter für 4 bis 5 €. Natürlich findet man auch im Onlineshops tolle Geschenke, aber die sind natürlich teurer.',
      sentenceTranslations: {
        'Schenken.': { literal: 'Дарение', literary: 'Подарки...' },
        'Hm, das ist so ein Thema.': { literal: 'Хм, это такая одна тема', literary: 'Хм, это такая тема.' },
        'Ich schenke gern meinen Freundinnen etwas zum Geburtstag und finde es toll, wenn ich ihnen damit eine Freude mache.': { literal: 'Я дарю охотно моим подругам что-то к дню рождения и нахожу это классным, когда я им этим одну радость делаю', literary: 'Я люблю дарить подругам что-нибудь на день рождения, и мне нравится, когда я их этим радую.' },
        'Aber das Problem ist natürlich, was ein Geschenk kostet.': { literal: 'Но проблема есть конечно, что подарок стоит', literary: 'Но проблема, конечно, в том, сколько стоит подарок.' },
        'Man muss es ja von seinem Taschengeld bezahlen.': { literal: 'Человек должен это же от своих карманных денег платить', literary: 'Ведь нужно платить из карманных денег.' },
        'Ich persönlich suche im Internet nach Ideen und mit ein bisschen Fantasie dazu mache ich meine Geschenke selbst.': { literal: 'Я лично ищу в интернете по идеям и с немного фантазии к тому делаю я мои подарки сам', literary: 'Я лично ищу идеи в интернете и с небольшой фантазией делаю подарки сам.' },
        'Ketten oder Ringe, Kalender, Poster und so weiter für 4 bis 5 €.': { literal: 'Цепочки или кольца, календари, постеры и так далее за 4 до 5 евро', literary: 'Цепочки или кольца, календари, постеры и так далее за 4-5 евро.' },
        'Natürlich findet man auch im Onlineshops tolle Geschenke, aber die sind natürlich teurer.': { literal: 'Конечно находит человек также в онлайн-магазинах классные подарки, но они есть конечно дороже', literary: 'Конечно, в онлайн-магазинах тоже можно найти отличные подарки, но они дороже.' },
      },
      vocabulary: [
        { de: 'das Geschenk', plural: 'die Geschenke', ru: 'подарок', gender: 'neutrum', collocation: 'Geschenke selbst machen', example: 'Ich persönlich suche im Internet nach Ideen und mit ein bisschen Fantasie dazu mache ich meine Geschenke selbst.' },
        { de: 'der Geburtstag', plural: 'die Geburtstage', ru: 'день рождения', gender: 'maskulin', collocation: 'zum Geburtstag schenken', example: 'Ich schenke gern meinen Freundinnen etwas zum Geburtstag und finde es toll, wenn ich ihnen damit eine Freude mache.' },
        { de: 'die Freude', plural: 'die Freuden', ru: 'радость', gender: 'feminin', collocation: 'eine Freude machen', example: 'Ich schenke gern meinen Freundinnen etwas zum Geburtstag und finde es toll, wenn ich ihnen damit eine Freude mache.' },
        { de: 'das Internet', ru: 'интернет', gender: 'neutrum', collocation: 'im Internet suchen', example: 'Ich persönlich suche im Internet nach Ideen und mit ein bisschen Fantasie dazu mache ich meine Geschenke selbst.' },
        { de: 'die Fantasie', plural: 'die Fantasien', ru: 'фантазия', gender: 'feminin', collocation: 'mit Fantasie machen', example: 'Ich persönlich suche im Internet nach Ideen und mit ein bisschen Fantasie dazu mache ich meine Geschenke selbst.' },
        { de: 'die Kette', plural: 'die Ketten', ru: 'цепочка, ожерелье', gender: 'feminin', collocation: 'Ketten selbst machen', example: 'Ketten oder Ringe, Kalender, Poster und so weiter für 4 bis 5 €.' },
        { de: 'der Ring', plural: 'die Ringe', ru: 'кольцо', gender: 'maskulin', collocation: 'Ringe selbst machen', example: 'Ketten oder Ringe, Kalender, Poster und so weiter für 4 bis 5 €.' },
        { de: 'der Onlineshop', plural: 'die Onlineshops', ru: 'интернет-магазин', gender: 'maskulin', collocation: 'in Onlineshops finden', example: 'Natürlich findet man auch im Onlineshops tolle Geschenke, aber die sind natürlich teurer.' },
        { de: 'kosten', ru: 'стоить', type: 'verb', forms: 'kostet, kostete, hat gekostet', example: 'Aber das Problem ist natürlich, was ein Geschenk kostet.' },
        { de: 'bezahlen', ru: 'платить', type: 'verb', forms: 'bezahlt, bezahlte, hat bezahlt', example: 'Man muss es ja von seinem Taschengeld bezahlen.' },
        { de: 'suchen', ru: 'искать', type: 'verb', forms: 'sucht, suchte, hat gesucht', example: 'Ich persönlich suche im Internet nach Ideen und mit ein bisschen Fantasie dazu mache ich meine Geschenke selbst.' },
      ],
      practiceSentences: [
        { de: 'Ich kaufe gern Blumen.', ru: 'Я люблю покупать цветы.', note: 'V2' },
        { de: 'Man kann im Internet viel finden.', ru: 'В интернете можно много найти.', note: 'модальный + инфинитив в конце' },
        { de: 'Sie sucht nach einem Geschenk.', ru: 'Она ищет подарок.', note: 'V2' },
        { de: 'Das Buch kostet zehn Euro.', ru: 'Книга стоит десять евро.', note: 'V2' },
        { de: 'Wenn ich Zeit habe, bastle ich selbst.', ru: 'Когда у меня есть время, я мастерю сам.', note: 'глагол в конце Nebensatz' },
      ],
      question: {
        de: 'Wo sucht die Sprecherin nach Geschenkideen?',
        ru: 'Где говорящая ищет идеи для подарков?',
        options: [
          { de: 'In Geschäften in der Stadt', ru: 'В магазинах в городе' },
          { de: 'Im Internet', ru: 'В интернете' },
          { de: 'Bei Freunden', ru: 'У друзей' },
        ],
        correct: 1,
        explanation: 'Говорящая прямо говорит: "Ich persönlich suche im Internet nach Ideen und mache ich meine Geschenke selbst."'
      }
    },
    {
      id: 'text-3', teil: 1, aufgabe: 3,
      name: 'Nachricht für Jens',
      type: 'телефонное сообщение',
      text: 'Hallo Jens, wir wollten uns doch heute Nachmittag um 14 Uhr mit Lea in der Stadt treffen. Leider klappt es heute mit dem Einkaufen nicht. Ich habe nämlich total vergessen, dass ich dienstags um 3:30 Uhr Gitarrenunterricht habe. Wir könnten uns doch morgen um 4 Uhr treffen. Lea findet das in Ordnung und du ruf mich bitte an. Tschüss.',
      sentenceTranslations: {
        'Hallo Jens, wir wollten uns doch heute Nachmittag um 14 Uhr mit Lea in der Stadt treffen.': { literal: 'Привет Йенс, мы хотели себя же сегодня после обеда в 14 часов с Леа в городе встретить', literary: 'Привет, Йенс, мы же хотели встретиться сегодня в 14:00 с Леа в городе.' },
        'Leider klappt es heute mit dem Einkaufen nicht.': { literal: 'К сожалению получается это сегодня с покупками не', literary: 'К сожалению, с покупками сегодня не получится.' },
        'Ich habe nämlich total vergessen, dass ich dienstags um 3:30 Uhr Gitarrenunterricht habe.': { literal: 'Я имею именно полностью забыто, что я по вторникам в 3:30 часов урок гитары имею', literary: 'Я совсем забыл, что у меня по вторникам в 15:30 урок гитары.' },
        'Wir könnten uns doch morgen um 4 Uhr treffen.': { literal: 'Мы могли бы себя же завтра в 4 часа встретить', literary: 'Мы могли бы встретиться завтра в 16:00.' },
        'Lea findet das in Ordnung und du ruf mich bitte an.': { literal: 'Леа находит это в порядке и ты позвони мне пожалуйста', literary: 'Леа не против, а ты, пожалуйста, позвони мне.' },
        'Tschüss.': { literal: 'Пока', literary: 'Пока.' },
      },
      vocabulary: [
        { de: 'der Nachmittag', plural: 'die Nachmittage', ru: 'время после обеда', gender: 'maskulin', collocation: 'heute Nachmittag', example: 'Hallo Jens, wir wollten uns doch heute Nachmittag um 14 Uhr mit Lea in der Stadt treffen.' },
        { de: 'die Stadt', plural: 'die Städte', ru: 'город', gender: 'feminin', collocation: 'in der Stadt treffen', example: 'Hallo Jens, wir wollten uns doch heute Nachmittag um 14 Uhr mit Lea in der Stadt treffen.' },
        { de: 'das Einkaufen', ru: 'покупки, шоппинг', gender: 'neutrum', collocation: 'mit dem Einkaufen', example: 'Leider klappt es heute mit dem Einkaufen nicht.' },
        { de: 'der Gitarrenunterricht', ru: 'урок гитары', gender: 'maskulin', collocation: 'Gitarrenunterricht haben', example: 'Ich habe nämlich total vergessen, dass ich dienstags um 3:30 Uhr Gitarrenunterricht habe.' },
        { de: 'sich treffen', ru: 'встречаться', type: 'verb', forms: 'trifft sich, traf sich, hat sich getroffen', example: 'Hallo Jens, wir wollten uns doch heute Nachmittag um 14 Uhr mit Lea in der Stadt treffen.' },
        { de: 'klappen', ru: 'получаться', type: 'verb', forms: 'klappt, klappte, hat geklappt', example: 'Leider klappt es heute mit dem Einkaufen nicht.' },
        { de: 'vergessen', ru: 'забывать', type: 'verb', forms: 'vergisst, vergaß, hat vergessen', example: 'Ich habe nämlich total vergessen, dass ich dienstags um 3:30 Uhr Gitarrenunterricht habe.' },
      ],
      practiceSentences: [
        { de: 'Es klappt heute nicht.', ru: 'Сегодня не получится.', note: 'V2, безличное' },
        { de: 'Ich habe das vergessen.', ru: 'Я это забыл.', note: 'Perfekt: haben + Partizip II' },
        { de: 'Wir treffen uns morgen.', ru: 'Мы встретимся завтра.', note: 'V2, возвратный' },
        { de: 'Könntest du mir helfen?', ru: 'Ты мог бы мне помочь?', note: 'Konjunktiv II, V1 (вопрос)' },
        { de: 'Ruf mich bitte an!', ru: 'Позвони мне, пожалуйста!', note: 'императив, отделяемая приставка' },
      ],
      question: {
        de: 'Warum kann das Treffen heute nicht stattfinden?',
        ru: 'Почему встреча сегодня не состоится?',
        options: [
          { de: 'Lea kann nicht kommen', ru: 'Леа не может прийти' },
          { de: 'Der Sprecher hat Gitarrenunterricht vergessen', ru: 'Говорящий забыл об уроке гитары' },
          { de: 'Die Geschäfte sind geschlossen', ru: 'Магазины закрыты' },
        ],
        correct: 1,
        explanation: 'В сообщении сказано: "Ich habe nämlich total vergessen, dass ich dienstags um 3:30 Uhr Gitarrenunterricht habe."'
      }
    },
    {
      id: 'text-4', teil: 1, aufgabe: 4,
      name: 'Sonderangebote',
      type: 'объявление в магазине',
      text: 'Das neue Schuljahr beginnt in ein paar Tagen und wir haben nur heute für unsere Schüler tolle Sonderangebote. In unserer Schreibwarenabteilung Farbstifte für nur 89 Cent, Hefte für 50 Cent und Schreibblöcke für 46 Cent. In unserer Sportabteilung Rucksäcke von 35 € heute für nur 25,60 € und unser Superangebot Sporttaschen für 10 €. In der Möbelabteilung finden Sie heute Computertische herabgesetzt von 120 € kosten sie heute nur noch 99 €.',
      sentenceTranslations: {
        'Das neue Schuljahr beginnt in ein paar Tagen und wir haben nur heute für unsere Schüler tolle Sonderangebote.': { literal: 'Новый школьный год начинается в пару дней и мы имеем только сегодня для наших учеников классные специальные предложения', literary: 'Новый учебный год начинается через несколько дней, и только сегодня у нас отличные спецпредложения для школьников.' },
        'In unserer Schreibwarenabteilung Farbstifte für nur 89 Cent, Hefte für 50 Cent und Schreibblöcke für 46 Cent.': { literal: 'В нашем канцелярском отделе цветные карандаши за только 89 центов, тетради за 50 центов и блокноты за 46 центов', literary: 'В нашем отделе канцтоваров: цветные карандаши всего за 89 центов, тетради за 50 центов и блокноты за 46 центов.' },
        'In unserer Sportabteilung Rucksäcke von 35 € heute für nur 25,60 € und unser Superangebot Sporttaschen für 10 €.': { literal: 'В нашем спортивном отделе рюкзаки от 35 евро сегодня за только 25,60 евро и наше супер-предложение спортивные сумки за 10 евро', literary: 'В спортивном отделе рюкзаки вместо 35 евро сегодня всего за 25,60 евро, и наше суперпредложение — спортивные сумки за 10 евро.' },
        'In der Möbelabteilung finden Sie heute Computertische herabgesetzt von 120 € kosten sie heute nur noch 99 €.': { literal: 'В мебельном отделе находите вы сегодня компьютерные столы сниженные от 120 евро стоят они сегодня только ещё 99 евро', literary: 'В мебельном отделе компьютерные столы со скидкой: вместо 120 евро сегодня всего 99 евро.' },
      },
      vocabulary: [
        { de: 'das Schuljahr', plural: 'die Schuljahre', ru: 'учебный год', gender: 'neutrum', collocation: 'neues Schuljahr', example: 'Das neue Schuljahr beginnt in ein paar Tagen und wir haben nur heute für unsere Schüler tolle Sonderangebote.' },
        { de: 'das Sonderangebot', plural: 'die Sonderangebote', ru: 'спецпредложение', gender: 'neutrum', collocation: 'tolle Sonderangebote', example: 'Das neue Schuljahr beginnt in ein paar Tagen und wir haben nur heute für unsere Schüler tolle Sonderangebote.' },
        { de: 'die Schreibwarenabteilung', plural: 'die Schreibwarenabteilungen', ru: 'отдел канцтоваров', gender: 'feminin', collocation: 'in der Schreibwarenabteilung', example: 'In unserer Schreibwarenabteilung Farbstifte für nur 89 Cent, Hefte für 50 Cent und Schreibblöcke für 46 Cent.' },
        { de: 'der Farbstift', plural: 'die Farbstifte', ru: 'цветной карандаш', gender: 'maskulin', collocation: 'Farbstifte kaufen', example: 'In unserer Schreibwarenabteilung Farbstifte für nur 89 Cent, Hefte für 50 Cent und Schreibblöcke für 46 Cent.' },
        { de: 'das Heft', plural: 'die Hefte', ru: 'тетрадь', gender: 'neutrum', collocation: 'Hefte für 50 Cent', example: 'In unserer Schreibwarenabteilung Farbstifte für nur 89 Cent, Hefte für 50 Cent und Schreibblöcke für 46 Cent.' },
        { de: 'der Rucksack', plural: 'die Rucksäcke', ru: 'рюкзак', gender: 'maskulin', collocation: 'Rucksäcke herabgesetzt', example: 'In unserer Sportabteilung Rucksäcke von 35 € heute für nur 25,60 € und unser Superangebot Sporttaschen für 10 €.' },
        { de: 'die Sporttasche', plural: 'die Sporttaschen', ru: 'спортивная сумка', gender: 'feminin', collocation: 'Sporttaschen kaufen', example: 'In unserer Sportabteilung Rucksäcke von 35 € heute für nur 25,60 € und unser Superangebot Sporttaschen für 10 €.' },
        { de: 'der Computertisch', plural: 'die Computertische', ru: 'компьютерный стол', gender: 'maskulin', collocation: 'Computertische herabgesetzt', example: 'In der Möbelabteilung finden Sie heute Computertische herabgesetzt von 120 € kosten sie heute nur noch 99 €.' },
        { de: 'beginnen', ru: 'начинаться', type: 'verb', forms: 'beginnt, begann, hat begonnen', example: 'Das neue Schuljahr beginnt in ein paar Tagen und wir haben nur heute für unsere Schüler tolle Sonderangebote.' },
        { de: 'herabsetzen', ru: 'снижать (цену)', type: 'verb', forms: 'setzt herab, setzte herab, hat herabgesetzt', example: 'In der Möbelabteilung finden Sie heute Computertische herabgesetzt von 120 € kosten sie heute nur noch 99 €.' },
      ],
      practiceSentences: [
        { de: 'Die Schule beginnt morgen.', ru: 'Школа начинается завтра.', note: 'V2' },
        { de: 'Wir haben heute Angebote.', ru: 'У нас сегодня есть предложения.', note: 'V2' },
        { de: 'Das Heft kostet einen Euro.', ru: 'Тетрадь стоит один евро.', note: 'V2' },
        { de: 'Sie finden alles im Laden.', ru: 'Вы найдёте всё в магазине.', note: 'V2' },
        { de: 'Der Preis ist herabgesetzt.', ru: 'Цена снижена.', note: 'V2 с Partizip II' },
      ],
      question: {
        de: 'Was kostet heute eine Sporttasche im Sonderangebot?',
        ru: 'Сколько сегодня стоит спортивная сумка по специальной цене?',
        options: [
          { de: '25,60 €', ru: '25,60 евро' },
          { de: '10 €', ru: '10 евро' },
          { de: '35 €', ru: '35 евро' },
        ],
        correct: 1,
        explanation: 'В объявлении сказано: "unser Superangebot Sporttaschen für 10 €."'
      }
    },
    {
      id: 'text-5', teil: 1, aufgabe: 5,
      name: 'Sebastian/Hiphop',
      type: 'сообщение',
      text: 'Hallo Sebastian. Also, das Hiphop Festival in unserem Jugendhaus ist dieses Wochenende. Am Samstag und am Sonntag um 18 Uhr spielen Hiphop-Gruppen aus Berlin. Echt cool, finde ich. Gehen wir am Sonntag zusammen ins Konzert? Ah, und noch was. Am Freitag um 16 Uhr gibt es einen Workshop mit Breakdance, Graffiti und so. Das ist kostenlos. Da gehe ich sicher hin. Wenn du auch mitmachen möchtest, melde dich heute noch bis um 19 Uhr im Jugendzentrum an. Tschüss.',
      sentenceTranslations: {
        'Hallo Sebastian.': { literal: 'Привет Себастьян', literary: 'Привет, Себастьян.' },
        'Also, das Hiphop Festival in unserem Jugendhaus ist dieses Wochenende.': { literal: 'Итак, хип-хоп фестиваль в нашем молодёжном доме есть эти выходные', literary: 'Хип-хоп фестиваль в нашем молодёжном центре будет в эти выходные.' },
        'Am Samstag und am Sonntag um 18 Uhr spielen Hiphop-Gruppen aus Berlin.': { literal: 'В субботу и в воскресенье в 18 часов играют хип-хоп группы из Берлина', literary: 'В субботу и воскресенье в 18:00 выступают хип-хоп группы из Берлина.' },
        'Echt cool, finde ich.': { literal: 'Реально круто, нахожу я', literary: 'По-моему, это круто.' },
        'Gehen wir am Sonntag zusammen ins Konzert?': { literal: 'Идём мы в воскресенье вместе в концерт?', literary: 'Пойдём вместе на концерт в воскресенье?' },
        'Ah, und noch was.': { literal: 'А, и ещё что', literary: 'А, и ещё кое-что.' },
        'Am Freitag um 16 Uhr gibt es einen Workshop mit Breakdance, Graffiti und so.': { literal: 'В пятницу в 16 часов даёт это один воркшоп с брейкдансом, граффити и так', literary: 'В пятницу в 16:00 будет воркшоп по брейкдансу, граффити и всему такому.' },
        'Das ist kostenlos.': { literal: 'Это есть бесплатно', literary: 'Это бесплатно.' },
        'Da gehe ich sicher hin.': { literal: 'Туда иду я точно', literary: 'Я точно пойду.' },
        'Wenn du auch mitmachen möchtest, melde dich heute noch bis um 19 Uhr im Jugendzentrum an.': { literal: 'Если ты тоже участвовать хочешь, заяви себя сегодня ещё до 19 часов в молодёжном центре', literary: 'Если хочешь участвовать, зарегистрируйся сегодня до 19:00 в молодёжном центре.' },
        'Tschüss.': { literal: 'Пока', literary: 'Пока.' },
      },
      vocabulary: [
        { de: 'das Festival', plural: 'die Festivals', ru: 'фестиваль', gender: 'neutrum', collocation: 'Hiphop Festival', example: 'Also, das Hiphop Festival in unserem Jugendhaus ist dieses Wochenende.' },
        { de: 'das Jugendhaus', plural: 'die Jugendhäuser', ru: 'молодёжный центр', gender: 'neutrum', collocation: 'in unserem Jugendhaus', example: 'Also, das Hiphop Festival in unserem Jugendhaus ist dieses Wochenende.' },
        { de: 'das Konzert', plural: 'die Konzerte', ru: 'концерт', gender: 'neutrum', collocation: 'ins Konzert gehen', example: 'Gehen wir am Sonntag zusammen ins Konzert?' },
        { de: 'der Workshop', plural: 'die Workshops', ru: 'воркшоп, мастер-класс', gender: 'maskulin', collocation: 'Workshop mit Breakdance', example: 'Am Freitag um 16 Uhr gibt es einen Workshop mit Breakdance, Graffiti und so.' },
        { de: 'das Jugendzentrum', plural: 'die Jugendzentren', ru: 'молодёжный центр', gender: 'neutrum', collocation: 'im Jugendzentrum anmelden', example: 'Wenn du auch mitmachen möchtest, melde dich heute noch bis um 19 Uhr im Jugendzentrum an.' },
        { de: 'mitmachen', ru: 'участвовать', type: 'verb', forms: 'macht mit, machte mit, hat mitgemacht', example: 'Wenn du auch mitmachen möchtest, melde dich heute noch bis um 19 Uhr im Jugendzentrum an.' },
        { de: 'sich anmelden', ru: 'записываться, регистрироваться', type: 'verb', forms: 'meldet sich an, meldete sich an, hat sich angemeldet', example: 'Wenn du auch mitmachen möchtest, melde dich heute noch bis um 19 Uhr im Jugendzentrum an.' },
        { de: 'hingehen', ru: 'идти туда', type: 'verb', forms: 'geht hin, ging hin, ist hingegangen', example: 'Da gehe ich sicher hin.' },
        { de: 'kostenlos', ru: 'бесплатно', type: 'adj', example: 'Das ist kostenlos.' },
      ],
      practiceSentences: [
        { de: 'Das Festival ist morgen.', ru: 'Фестиваль завтра.', note: 'V2' },
        { de: 'Die Band spielt um 20 Uhr.', ru: 'Группа играет в 20:00.', note: 'V2' },
        { de: 'Es gibt heute einen Workshop.', ru: 'Сегодня есть воркшоп.', note: 'V2, безличная конструкция' },
        { de: 'Ich mache beim Kurs mit.', ru: 'Я участвую в курсе.', note: 'отделяемая приставка' },
        { de: 'Wenn du kommst, rufe mich an.', ru: 'Если придёшь, позвони мне.', note: 'глагол в конце Nebensatz, императив с отдел. прист.' },
      ],
      question: {
        de: 'Wann findet der Workshop statt?',
        ru: 'Когда проходит воркшоп?',
        options: [
          { de: 'Am Samstag um 18 Uhr', ru: 'В субботу в 18:00' },
          { de: 'Am Freitag um 16 Uhr', ru: 'В пятницу в 16:00' },
          { de: 'Am Sonntag um 18 Uhr', ru: 'В воскресенье в 18:00' },
        ],
        correct: 1,
        explanation: 'В сообщении говорится: "Am Freitag um 16 Uhr gibt es einen Workshop mit Breakdance, Graffiti und so."'
      }
    },

    /* ═══ TEIL 2 — 1 длинный диалог ═══ */
    {
      id: 'text-6', teil: 2, aufgabe: 6,
      name: 'Max und Johanna',
      type: 'диалог о подарках',
      text: 'Mensch, Max, dieser Januar, das ist doch so ein richtiger Geburtstagsmonat. Ja. Ja. Und auch mit vielen Partys. Super. Und so vielen Geschenken natürlich. Hm. Also bei Tina, meiner Schwester, ist es einfach. Sie liest gern Krimis und so bekommt sie ein Buch von mir. Ach so. Na, mein Bruder Oscar hat sich einen Ball gewünscht. Volleyball ist nämlich sein neues Hobby. Gestern hat er aber sein Fußball verloren und so bekommt er jetzt von mir einen neuen. Das ist doch Unsinn. Schenk ihm doch den Volleyball. Du hast wahrscheinlich recht. Yvonne hat auch am Donnerstag Geburtstag. Sie wird zwölf. Ich möchte ihr eine Uhr schenken. Eine Uhr? Ist das nicht teuer? Kannst du das denn bezahlen? Eigentlich nicht. Aber eine Stoppuhr für ihr Training, da gibt es sicher auch billige. Das ist keine schlechte Idee. Felix will ich einen Rucksack für seine Sportsachen kaufen. Ich habe einen echt coolen auf dem Flohmarkt gesehen und der war auch preiswert. Das finde ich toll. Sag mal, was schenkst du Julia? Du weißt ja, sie ist doch so ein richtiger Fan von One Direction. Eine CD vielleicht. Gute Idee. Und was schenkst du Patrick? Hm, das weiß ich noch nicht so genau. Der geht doch so oft mit seiner Familie Skifahren. Eine Sonnenbrille vielleicht. Die kann er sicher brauchen. Super Idee.',
      sentenceTranslations: {
        'Mensch, Max, dieser Januar, das ist doch so ein richtiger Geburtstagsmonat.': { literal: 'Человек, Макс, этот январь, это есть же такой один настоящий месяц дней рождения', literary: 'Слушай, Макс, этот январь — настоящий месяц дней рождения.' },
        'Ja.': { literal: 'Да', literary: 'Да.' },
        'Und auch mit vielen Partys.': { literal: 'И также с многими вечеринками', literary: 'И с кучей вечеринок.' },
        'Super.': { literal: 'Супер', literary: 'Супер.' },
        'Und so vielen Geschenken natürlich.': { literal: 'И так многими подарками конечно', literary: 'И столько подарков, конечно.' },
        'Hm.': { literal: 'Хм', literary: 'Хм.' },
        'Also bei Tina, meiner Schwester, ist es einfach.': { literal: 'Итак у Тины, моей сестры, есть это просто', literary: 'С Тиной, моей сестрой, всё просто.' },
        'Sie liest gern Krimis und so bekommt sie ein Buch von mir.': { literal: 'Она читает охотно детективы и так получает она одну книгу от меня', literary: 'Она любит детективы, поэтому получит от меня книгу.' },
        'Ach so.': { literal: 'Ах так', literary: 'Вот как.' },
        'Na, mein Bruder Oscar hat sich einen Ball gewünscht.': { literal: 'Ну, мой брат Оскар имеет себе один мяч пожелано', literary: 'Мой брат Оскар хотел мяч.' },
        'Volleyball ist nämlich sein neues Hobby.': { literal: 'Волейбол есть именно его новое хобби', literary: 'Волейбол — его новое хобби.' },
        'Gestern hat er aber sein Fußball verloren und so bekommt er jetzt von mir einen neuen.': { literal: 'Вчера имеет он но свой футбольный мяч потеряно и так получает он сейчас от меня один новый', literary: 'Но вчера он потерял футбольный мяч, поэтому получит от меня новый.' },
        'Das ist doch Unsinn.': { literal: 'Это есть же бессмыслица', literary: 'Это же глупо.' },
        'Schenk ihm doch den Volleyball.': { literal: 'Подари ему же волейбольный мяч', literary: 'Подари ему волейбольный мяч.' },
        'Du hast wahrscheinlich recht.': { literal: 'Ты имеешь вероятно право', literary: 'Ты, наверное, прав.' },
        'Yvonne hat auch am Donnerstag Geburtstag.': { literal: 'Ивонн имеет также в четверг день рождения', literary: 'У Ивонн тоже в четверг день рождения.' },
        'Sie wird zwölf.': { literal: 'Она становится двенадцать', literary: 'Ей исполнится двенадцать.' },
        'Ich möchte ihr eine Uhr schenken.': { literal: 'Я хотел бы ей одни часы подарить', literary: 'Я хочу подарить ей часы.' },
        'Eine Uhr?': { literal: 'Часы?', literary: 'Часы?' },
        'Ist das nicht teuer?': { literal: 'Есть это не дорого?', literary: 'Это не дорого?' },
        'Kannst du das denn bezahlen?': { literal: 'Можешь ты это вообще оплатить?', literary: 'Ты сможешь это оплатить?' },
        'Eigentlich nicht.': { literal: 'Собственно нет', literary: 'Вообще-то нет.' },
        'Aber eine Stoppuhr für ihr Training, da gibt es sicher auch billige.': { literal: 'Но секундомер для её тренировки, там даёт это точно также дешёвые', literary: 'Но секундомер для тренировок — такие точно есть дешёвые.' },
        'Das ist keine schlechte Idee.': { literal: 'Это есть никакая плохая идея', literary: 'Неплохая идея.' },
        'Felix will ich einen Rucksack für seine Sportsachen kaufen.': { literal: 'Феликсу хочу я один рюкзак для его спортивных вещей купить', literary: 'Феликсу я хочу купить рюкзак для спортивных вещей.' },
        'Ich habe einen echt coolen auf dem Flohmarkt gesehen und der war auch preiswert.': { literal: 'Я имею один реально классный на блошином рынке увидено и тот был также недорогой', literary: 'Я видел классный на блошином рынке, и он был недорогой.' },
        'Das finde ich toll.': { literal: 'Это нахожу я классным', literary: 'Отлично.' },
        'Sag mal, was schenkst du Julia?': { literal: 'Скажи-ка, что даришь ты Юлии?', literary: 'Слушай, что ты подаришь Юлии?' },
        'Du weißt ja, sie ist doch so ein richtiger Fan von One Direction.': { literal: 'Ты знаешь же, она есть же такой один настоящий фанат от One Direction', literary: 'Ты же знаешь, она настоящая фанатка One Direction.' },
        'Eine CD vielleicht.': { literal: 'Один CD может быть', literary: 'Может, CD.' },
        'Gute Idee.': { literal: 'Хорошая идея', literary: 'Хорошая идея.' },
        'Und was schenkst du Patrick?': { literal: 'И что даришь ты Патрику?', literary: 'А что подаришь Патрику?' },
        'Hm, das weiß ich noch nicht so genau.': { literal: 'Хм, это знаю я ещё не так точно', literary: 'Хм, я ещё точно не знаю.' },
        'Der geht doch so oft mit seiner Familie Skifahren.': { literal: 'Тот идёт же так часто с своей семьёй кататься на лыжах', literary: 'Он же часто катается на лыжах с семьёй.' },
        'Eine Sonnenbrille vielleicht.': { literal: 'Одни солнечные очки может быть', literary: 'Может, солнечные очки.' },
        'Die kann er sicher brauchen.': { literal: 'Их может он точно использовать', literary: 'Они ему точно пригодятся.' },
        'Super Idee.': { literal: 'Супер идея', literary: 'Отличная идея.' },
      },
      vocabulary: [
        { de: 'der Geburtstagsmonat', plural: 'die Geburtstagsmonate', ru: 'месяц дней рождения', gender: 'maskulin', collocation: 'richtiger Geburtstagsmonat', example: 'Mensch, Max, dieser Januar, das ist doch so ein richtiger Geburtstagsmonat.' },
        { de: 'die Schwester', plural: 'die Schwestern', ru: 'сестра', gender: 'feminin', collocation: 'meine Schwester', example: 'Also bei Tina, meiner Schwester, ist es einfach.' },
        { de: 'der Krimi', plural: 'die Krimis', ru: 'детектив', gender: 'maskulin', collocation: 'Krimis lesen', example: 'Sie liest gern Krimis und so bekommt sie ein Buch von mir.' },
        { de: 'der Ball', plural: 'die Bälle', ru: 'мяч', gender: 'maskulin', collocation: 'einen Ball wünschen', example: 'Na, mein Bruder Oscar hat sich einen Ball gewünscht.' },
        { de: 'das Hobby', plural: 'die Hobbys', ru: 'хобби', gender: 'neutrum', collocation: 'neues Hobby', example: 'Volleyball ist nämlich sein neues Hobby.' },
        { de: 'die Stoppuhr', plural: 'die Stoppuhren', ru: 'секундомер', gender: 'feminin', collocation: 'Stoppuhr für Training', example: 'Aber eine Stoppuhr für ihr Training, da gibt es sicher auch billige.' },
        { de: 'das Training', plural: 'die Trainings', ru: 'тренировка', gender: 'neutrum', collocation: 'für ihr Training', example: 'Aber eine Stoppuhr für ihr Training, da gibt es sicher auch billige.' },
        { de: 'der Flohmarkt', plural: 'die Flohmärkte', ru: 'блошиный рынок', gender: 'maskulin', collocation: 'auf dem Flohmarkt', example: 'Ich habe einen echt coolen auf dem Flohmarkt gesehen und der war auch preiswert.' },
        { de: 'die Sonnenbrille', plural: 'die Sonnenbrillen', ru: 'солнечные очки', gender: 'feminin', collocation: 'Sonnenbrille brauchen', example: 'Eine Sonnenbrille vielleicht.' },
        { de: 'lesen', ru: 'читать', type: 'verb', forms: 'liest, las, hat gelesen', example: 'Sie liest gern Krimis und so bekommt sie ein Buch von mir.' },
        { de: 'sich wünschen', ru: 'желать себе', type: 'verb', forms: 'wünscht sich, wünschte sich, hat sich gewünscht', example: 'Na, mein Bruder Oscar hat sich einen Ball gewünscht.' },
        { de: 'verlieren', ru: 'терять', type: 'verb', forms: 'verliert, verlor, hat verloren', example: 'Gestern hat er aber sein Fußball verloren und so bekommt er jetzt von mir einen neuen.' },
        { de: 'brauchen', ru: 'нуждаться', type: 'verb', forms: 'braucht, brauchte, hat gebraucht', example: 'Die kann er sicher brauchen.' },
      ],
      practiceSentences: [
        { de: 'Er hat sich ein Fahrrad gewünscht.', ru: 'Он хотел велосипед.', note: 'Perfekt с возвратным' },
        { de: 'Ich möchte dir etwas schenken.', ru: 'Я хочу тебе что-то подарить.', note: 'модальный + инфинитив в конце' },
        { de: 'Sie wird nächste Woche dreizehn.', ru: 'Ей на следующей неделе исполнится тринадцать.', note: 'V2' },
        { de: 'Das habe ich gestern gekauft.', ru: 'Это я купил вчера.', note: 'Perfekt' },
        { de: 'Wir gehen oft schwimmen.', ru: 'Мы часто ходим плавать.', note: 'V2 + инфинитив' },
      ],
      question: {
        de: 'Was möchte Johanna ihrer Schwester Tina zum Geburtstag schenken?',
        ru: 'Что Йоханна хочет подарить своей сестре Тине на день рождения?',
        options: [
          { de: 'Eine CD', ru: 'CD-диск' },
          { de: 'Ein Buch (Krimi)', ru: 'Книгу (детектив)' },
          { de: 'Eine Uhr', ru: 'Часы' },
        ],
        correct: 1,
        explanation: 'Йоханна говорит: "Also bei Tina, meiner Schwester, ist es einfach. Sie liest gern Krimis und so bekommt sie ein Buch von mir."'
      }
    },

    /* ═══ TEIL 3 — 5 коротких диалогов ═══ */
    {
      id: 'text-7', teil: 3, aufgabe: 11,
      name: 'Lea/Kleidung',
      type: 'диалог в магазине',
      text: 'Lea, diesen Rock solltest du anprobieren. Den kurzen Rock da? Auf keinen Fall. Der gefällt mir nicht. Warum nicht? Die kurze Hose links finde ich viel besser und nicht so teuer. Und was sagst du zu der langen Hose da? Ja, die ist auch schön. Komm, Mama, eine lange Hose. Es ist doch Sommer. Dann okay, die kurze Hose. Komm, probier sie doch mal an. Wir haben nicht so viel Zeit. In Ordnung.',
      sentenceTranslations: {
        'Lea, diesen Rock solltest du anprobieren.': { literal: 'Леа, эту юбку должна бы ты примерить', literary: 'Леа, тебе стоит примерить эту юбку.' },
        'Den kurzen Rock da?': { literal: 'Ту короткую юбку там?', literary: 'Ту короткую юбку?' },
        'Auf keinen Fall.': { literal: 'На никакой случай', literary: 'Ни в коем случае.' },
        'Der gefällt mir nicht.': { literal: 'Та нравится мне не', literary: 'Она мне не нравится.' },
        'Warum nicht?': { literal: 'Почему нет?', literary: 'Почему?' },
        'Die kurze Hose links finde ich viel besser und nicht so teuer.': { literal: 'Те короткие брюки слева нахожу я намного лучше и не так дорого', literary: 'Короткие шорты слева намного лучше и не такие дорогие.' },
        'Und was sagst du zu der langen Hose da?': { literal: 'И что говоришь ты к тем длинным брюкам там?', literary: 'А что скажешь о тех длинных брюках?' },
        'Ja, die ist auch schön.': { literal: 'Да, те есть тоже красивые', literary: 'Да, они тоже хорошие.' },
        'Komm, Mama, eine lange Hose.': { literal: 'Давай, мама, длинные брюки', literary: 'Ну мама, длинные брюки.' },
        'Es ist doch Sommer.': { literal: 'Это есть же лето', literary: 'Ведь лето же.' },
        'Dann okay, die kurze Hose.': { literal: 'Тогда окей, короткие брюки', literary: 'Тогда ладно, короткие шорты.' },
        'Komm, probier sie doch mal an.': { literal: 'Давай, примерь их же разок', literary: 'Давай, примерь их.' },
        'Wir haben nicht so viel Zeit.': { literal: 'Мы имеем не так много времени', literary: 'У нас мало времени.' },
        'In Ordnung.': { literal: 'В порядке', literary: 'Хорошо.' },
      },
      vocabulary: [
        { de: 'der Rock', plural: 'die Röcke', ru: 'юбка', gender: 'maskulin', collocation: 'diesen Rock anprobieren', example: 'Lea, diesen Rock solltest du anprobieren.' },
        { de: 'die Hose', plural: 'die Hosen', ru: 'брюки, шорты', gender: 'feminin', collocation: 'kurze Hose', example: 'Die kurze Hose links finde ich viel besser und nicht so teuer.' },
        { de: 'anprobieren', ru: 'примерять', type: 'verb', forms: 'probiert an, probierte an, hat anprobiert', example: 'Lea, diesen Rock solltest du anprobieren.' },
        { de: 'gefallen', ru: 'нравиться', type: 'verb', forms: 'gefällt, gefiel, hat gefallen', example: 'Der gefällt mir nicht.' },
      ],
      practiceSentences: [
        { de: 'Das Kleid gefällt mir gut.', ru: 'Платье мне нравится.', note: 'V2' },
        { de: 'Probier die Jacke mal an!', ru: 'Примерь-ка куртку!', note: 'императив с отделяемой приставкой' },
        { de: 'Ich finde das T-Shirt schön.', ru: 'Я считаю футболку красивой.', note: 'V2' },
        { de: 'Die Hose ist zu teuer.', ru: 'Брюки слишком дорогие.', note: 'V2' },
        { de: 'Was sagst du dazu?', ru: 'Что ты об этом скажешь?', note: 'V2 в вопросе' },
      ],
      question: {
        de: 'Was möchte Lea anprobieren?',
        ru: 'Что хочет примерить Леа?',
        options: [
          { de: 'Den kurzen Rock', ru: 'Короткую юбку' },
          { de: 'Die kurze Hose', ru: 'Короткие шорты' },
          { de: 'Die lange Hose', ru: 'Длинные брюки' },
        ],
        correct: 1,
        explanation: 'Леа отказывается от юбки и говорит: "Die kurze Hose links finde ich viel besser", в конце соглашается: "Dann okay, die kurze Hose."'
      }
    },
    {
      id: 'text-8', teil: 3, aufgabe: 12,
      name: 'Emil/Harry Potter',
      type: 'диалог о покупках',
      text: 'Wow, Emil, guck mal. Harry Potter, Bücher und Comics. Ich habe nur die beiden ersten. Ich muss mir unbedingt das dritte Buch kaufen. Ich habe alle Harry Potter Bücher. Ich kann sie dir leihen, wenn du willst, Mario. Ach, schau mal, hier gibt es ein Harry Potter Computerspiel. Das ist doch viel interessanter. Stimmt. Und zwar ganz billig. Nur 3 €. Das nehme ich.',
      sentenceTranslations: {
        'Wow, Emil, guck mal.': { literal: 'Вау, Эмиль, посмотри-ка', literary: 'Вау, Эмиль, смотри.' },
        'Harry Potter, Bücher und Comics.': { literal: 'Гарри Поттер, книги и комиксы', literary: 'Гарри Поттер, книги и комиксы.' },
        'Ich habe nur die beiden ersten.': { literal: 'Я имею только те обе первые', literary: 'У меня есть только первые две.' },
        'Ich muss mir unbedingt das dritte Buch kaufen.': { literal: 'Я должен себе обязательно ту третью книгу купить', literary: 'Мне обязательно нужно купить третью книгу.' },
        'Ich habe alle Harry Potter Bücher.': { literal: 'Я имею все Гарри Поттер книги', literary: 'У меня есть все книги о Гарри Поттере.' },
        'Ich kann sie dir leihen, wenn du willst, Mario.': { literal: 'Я могу их тебе одолжить, если ты хочешь, Марио', literary: 'Я могу тебе их одолжить, если хочешь, Марио.' },
        'Ach, schau mal, hier gibt es ein Harry Potter Computerspiel.': { literal: 'Ах, посмотри-ка, здесь даёт это одну Гарри Поттер компьютерную игру', literary: 'О, смотри, здесь есть компьютерная игра про Гарри Поттера.' },
        'Das ist doch viel interessanter.': { literal: 'Это есть же намного интереснее', literary: 'Это же намного интереснее.' },
        'Stimmt.': { literal: 'Правильно', literary: 'Точно.' },
        'Und zwar ganz billig.': { literal: 'И именно совсем дёшево', literary: 'И совсем дёшево.' },
        'Nur 3 €.': { literal: 'Только 3 евро', literary: 'Всего 3 евро.' },
        'Das nehme ich.': { literal: 'Это беру я', literary: 'Беру.' },
      },
      vocabulary: [
        { de: 'das Buch', plural: 'die Bücher', ru: 'книга', gender: 'neutrum', collocation: 'das dritte Buch', example: 'Ich muss mir unbedingt das dritte Buch kaufen.' },
        { de: 'der Comic', plural: 'die Comics', ru: 'комикс', gender: 'maskulin', collocation: 'Bücher und Comics', example: 'Harry Potter, Bücher und Comics.' },
        { de: 'das Computerspiel', plural: 'die Computerspiele', ru: 'компьютерная игра', gender: 'neutrum', collocation: 'ein Computerspiel kaufen', example: 'Ach, schau mal, hier gibt es ein Harry Potter Computerspiel.' },
        { de: 'leihen', ru: 'одалживать', type: 'verb', forms: 'leiht, lieh, hat geliehen', example: 'Ich kann sie dir leihen, wenn du willst, Mario.' },
        { de: 'kaufen', ru: 'покупать', type: 'verb', forms: 'kauft, kaufte, hat gekauft', example: 'Ich muss mir unbedingt das dritte Buch kaufen.' },
        { de: 'nehmen', ru: 'брать', type: 'verb', forms: 'nimmt, nahm, hat genommen', example: 'Das nehme ich.' },
      ],
      practiceSentences: [
        { de: 'Ich muss das Buch kaufen.', ru: 'Я должен купить книгу.', note: 'модальный + инфинитив в конце' },
        { de: 'Kann ich es dir zeigen?', ru: 'Могу я тебе это показать?', note: 'V1 вопрос, модальный' },
        { de: 'Das nehme ich sofort.', ru: 'Это я беру сразу.', note: 'V2' },
        { de: 'Er leiht mir sein Fahrrad.', ru: 'Он одалживает мне свой велосипед.', note: 'V2' },
        { de: 'Wenn du willst, helfe ich dir.', ru: 'Если хочешь, я тебе помогу.', note: 'глагол в конце Nebensatz' },
      ],
      question: {
        de: 'Was kauft Mario am Ende?',
        ru: 'Что покупает Марио в итоге?',
        options: [
          { de: 'Das dritte Harry Potter Buch', ru: 'Третью книгу о Гарри Поттере' },
          { de: 'Harry Potter Comics', ru: 'Комиксы о Гарри Поттере' },
          { de: 'Das Harry Potter Computerspiel', ru: 'Компьютерную игру про Гарри Поттера' },
        ],
        correct: 2,
        explanation: 'Марио говорит о компьютерной игре: "Stimmt. Und zwar ganz billig. Nur 3 €. Das nehme ich."'
      }
    },
    {
      id: 'text-9', teil: 3, aufgabe: 13,
      name: 'Tobias/Einkaufen',
      type: 'диалог о покупках',
      text: 'Ich möchte ein T-Shirt für Tobias kaufen. Das machen wir später im Kaufhaus. Hier im Supermarkt kaufen wir jetzt für Mama ein. Ja, sie braucht Spaghetti und Soße und eine Zeitung. Die kaufen wir später am Kiosk. Mach schnell. Um 8 Uhr müssen wir zurück sein.',
      sentenceTranslations: {
        'Ich möchte ein T-Shirt für Tobias kaufen.': { literal: 'Я хотел бы одну футболку для Тобиаса купить', literary: 'Я хочу купить футболку для Тобиаса.' },
        'Das machen wir später im Kaufhaus.': { literal: 'Это делаем мы позже в универмаге', literary: 'Это сделаем позже в универмаге.' },
        'Hier im Supermarkt kaufen wir jetzt für Mama ein.': { literal: 'Здесь в супермаркете покупаем мы сейчас для мамы', literary: 'Здесь в супермаркете мы сейчас закупаемся для мамы.' },
        'Ja, sie braucht Spaghetti und Soße und eine Zeitung.': { literal: 'Да, она нуждается спагетти и соус и одну газету', literary: 'Да, ей нужны спагетти, соус и газета.' },
        'Die kaufen wir später am Kiosk.': { literal: 'Ту покупаем мы позже у киоска', literary: 'Её купим позже в киоске.' },
        'Mach schnell.': { literal: 'Делай быстро', literary: 'Поторопись.' },
        'Um 8 Uhr müssen wir zurück sein.': { literal: 'В 8 часов должны мы назад быть', literary: 'В 8 часов мы должны вернуться.' },
      },
      vocabulary: [
        { de: 'das Kaufhaus', plural: 'die Kaufhäuser', ru: 'универмаг', gender: 'neutrum', collocation: 'im Kaufhaus', example: 'Das machen wir später im Kaufhaus.' },
        { de: 'der Supermarkt', plural: 'die Supermärkte', ru: 'супермаркет', gender: 'maskulin', collocation: 'im Supermarkt', example: 'Hier im Supermarkt kaufen wir jetzt für Mama ein.' },
        { de: 'die Zeitung', plural: 'die Zeitungen', ru: 'газета', gender: 'feminin', collocation: 'eine Zeitung kaufen', example: 'Ja, sie braucht Spaghetti und Soße und eine Zeitung.' },
        { de: 'der Kiosk', plural: 'die Kioske', ru: 'киоск', gender: 'maskulin', collocation: 'am Kiosk kaufen', example: 'Die kaufen wir später am Kiosk.' },
        { de: 'einkaufen', ru: 'закупаться', type: 'verb', forms: 'kauft ein, kaufte ein, hat eingekauft', example: 'Hier im Supermarkt kaufen wir jetzt für Mama ein.' },
      ],
      practiceSentences: [
        { de: 'Wir kaufen im Laden ein.', ru: 'Мы закупаемся в магазине.', note: 'отделяемая приставка' },
        { de: 'Sie möchte eine Zeitung kaufen.', ru: 'Она хочет купить газету.', note: 'модальный + инфинитив в конце' },
        { de: 'Ich muss um 7 Uhr zurück sein.', ru: 'Я должен вернуться в 7 часов.', note: 'модальный + инфинитив' },
        { de: 'Mach bitte schnell!', ru: 'Поторопись, пожалуйста!', note: 'императив' },
        { de: 'Das kaufe ich morgen.', ru: 'Это я куплю завтра.', note: 'V2' },
      ],
      question: {
        de: 'Wo kaufen sie die Zeitung?',
        ru: 'Где они купят газету?',
        options: [
          { de: 'Im Supermarkt', ru: 'В супермаркете' },
          { de: 'Am Kiosk', ru: 'В киоске' },
          { de: 'Im Kaufhaus', ru: 'В универмаге' },
        ],
        correct: 1,
        explanation: 'В диалоге говорится о газете: "Die kaufen wir später am Kiosk."'
      }
    },
    {
      id: 'text-10', teil: 3, aufgabe: 14,
      name: 'Lukas/Party',
      type: 'диалог об одежде',
      text: 'Lukas, was ziehst du heute auf der Party an? Das schwarze Hemd. Das passt gut zu meinen blauen Jeans. Mein neues T-Shirt finde ich auch super, aber dafür ist es heute ein bisschen zu kalt. Ja, stimmt. Warum trägst du nicht den bunten Pullover? Der steht dir prima und er ist wärmer. Mama, den finde ich schrecklich. Ich trage das Hemd und nehme noch meine Jacke mit.',
      sentenceTranslations: {
        'Lukas, was ziehst du heute auf der Party an?': { literal: 'Лукас, что надеваешь ты сегодня на вечеринке?', literary: 'Лукас, что ты наденешь сегодня на вечеринку?' },
        'Das schwarze Hemd.': { literal: 'Та чёрная рубашка', literary: 'Чёрную рубашку.' },
        'Das passt gut zu meinen blauen Jeans.': { literal: 'Это подходит хорошо к моим синим джинсам', literary: 'Она хорошо подходит к моим синим джинсам.' },
        'Mein neues T-Shirt finde ich auch super, aber dafür ist es heute ein bisschen zu kalt.': { literal: 'Мою новую футболку нахожу я тоже супер, но для этого есть это сегодня немного слишком холодно', literary: 'Моя новая футболка тоже классная, но для неё сегодня холодновато.' },
        'Ja, stimmt.': { literal: 'Да, правильно', literary: 'Да, точно.' },
        'Warum trägst du nicht den bunten Pullover?': { literal: 'Почему носишь ты не тот цветной свитер?', literary: 'Почему бы не надеть цветной свитер?' },
        'Der steht dir prima und er ist wärmer.': { literal: 'Тот стоит тебе отлично и он есть теплее', literary: 'Он тебе идёт и он теплее.' },
        'Mama, den finde ich schrecklich.': { literal: 'Мама, тот нахожу я ужасным', literary: 'Мама, он ужасный.' },
        'Ich trage das Hemd und nehme noch meine Jacke mit.': { literal: 'Я ношу ту рубашку и беру ещё мою куртку с', literary: 'Я надену рубашку и возьму с собой куртку.' },
      },
      vocabulary: [
        { de: 'das Hemd', plural: 'die Hemden', ru: 'рубашка', gender: 'neutrum', collocation: 'schwarzes Hemd', example: 'Das schwarze Hemd.' },
        { de: 'die Jeans', plural: 'die Jeans', ru: 'джинсы', gender: 'feminin', collocation: 'blaue Jeans', example: 'Das passt gut zu meinen blauen Jeans.' },
        { de: 'der Pullover', plural: 'die Pullover', ru: 'свитер', gender: 'maskulin', collocation: 'bunter Pullover', example: 'Warum trägst du nicht den bunten Pullover?' },
        { de: 'die Jacke', plural: 'die Jacken', ru: 'куртка', gender: 'feminin', collocation: 'meine Jacke mitnehmen', example: 'Ich trage das Hemd und nehme noch meine Jacke mit.' },
        { de: 'anziehen', ru: 'надевать', type: 'verb', forms: 'zieht an, zog an, hat angezogen', example: 'Lukas, was ziehst du heute auf der Party an?' },
        { de: 'passen zu', ru: 'подходить к', type: 'verb', forms: 'passt zu, passte zu, hat gepasst', example: 'Das passt gut zu meinen blauen Jeans.' },
        { de: 'tragen', ru: 'носить', type: 'verb', forms: 'trägt, trug, hat getragen', example: 'Ich trage das Hemd und nehme noch meine Jacke mit.' },
        { de: 'mitnehmen', ru: 'брать с собой', type: 'verb', forms: 'nimmt mit, nahm mit, hat mitgenommen', example: 'Ich trage das Hemd und nehme noch meine Jacke mit.' },
      ],
      practiceSentences: [
        { de: 'Was ziehst du morgen an?', ru: 'Что ты наденешь завтра?', note: 'отделяемая приставка в вопросе' },
        { de: 'Die Hose passt gut zu dem Hemd.', ru: 'Брюки хорошо подходят к рубашке.', note: 'V2' },
        { de: 'Das Kleid steht dir sehr gut.', ru: 'Платье тебе очень идёт.', note: 'V2' },
        { de: 'Ich nehme den Pullover mit.', ru: 'Я возьму свитер с собой.', note: 'отделяемая приставка' },
        { de: 'Es ist zu warm für eine Jacke.', ru: 'Слишком тепло для куртки.', note: 'V2' },
      ],
      question: {
        de: 'Was zieht Lukas zur Party an?',
        ru: 'Что наденет Лукас на вечеринку?',
        options: [
          { de: 'Das neue T-Shirt', ru: 'Новую футболку' },
          { de: 'Den bunten Pullover', ru: 'Цветной свитер' },
          { de: 'Das schwarze Hemd', ru: 'Чёрную рубашку' },
        ],
        correct: 2,
        explanation: 'Лукас отвечает: "Das schwarze Hemd" и подтверждает: "Ich trage das Hemd und nehme noch meine Jacke mit."'
      }
    },
    {
      id: 'text-11', teil: 3, aufgabe: 15,
      name: 'Konzert/Kino',
      type: 'диалог о планах',
      text: 'So, das Konzert beginnt in einer halben Stunde. Na ja, aber die rote Rakete höre ich nicht so gern. Machen wir doch was anderes. Können wir nicht ins Theater gehen? Heute gibt es eine tolle Vorstellung. Nee, darauf habe ich keine Lust. Aber zu Kino sage ich immer ja. Na, dann los.',
      sentenceTranslations: {
        'So, das Konzert beginnt in einer halben Stunde.': { literal: 'Так, концерт начинается в одном половинном часе', literary: 'Итак, концерт начинается через полчаса.' },
        'Na ja, aber die rote Rakete höre ich nicht so gern.': { literal: 'Ну да, но красную ракету слушаю я не так охотно', literary: 'Ну, «Красную ракету» я не очень люблю слушать.' },
        'Machen wir doch was anderes.': { literal: 'Делаем мы же что другое', literary: 'Давай сделаем что-нибудь другое.' },
        'Können wir nicht ins Theater gehen?': { literal: 'Можем мы не в театр пойти?', literary: 'Может, пойдём в театр?' },
        'Heute gibt es eine tolle Vorstellung.': { literal: 'Сегодня даёт это одно классное представление', literary: 'Сегодня отличный спектакль.' },
        'Nee, darauf habe ich keine Lust.': { literal: 'Нет, на это имею я никакого желания', literary: 'Нет, мне этого не хочется.' },
        'Aber zu Kino sage ich immer ja.': { literal: 'Но к кино говорю я всегда да', literary: 'Но на кино я всегда согласен.' },
        'Na, dann los.': { literal: 'Ну, тогда вперёд', literary: 'Ну, тогда пошли.' },
      },
      vocabulary: [
        { de: 'die Stunde', plural: 'die Stunden', ru: 'час', gender: 'feminin', collocation: 'halbe Stunde', example: 'So, das Konzert beginnt in einer halben Stunde.' },
        { de: 'das Theater', plural: 'die Theater', ru: 'театр', gender: 'neutrum', collocation: 'ins Theater gehen', example: 'Können wir nicht ins Theater gehen?' },
        { de: 'die Vorstellung', plural: 'die Vorstellungen', ru: 'представление, спектакль', gender: 'feminin', collocation: 'tolle Vorstellung', example: 'Heute gibt es eine tolle Vorstellung.' },
        { de: 'das Kino', plural: 'die Kinos', ru: 'кино', gender: 'neutrum', collocation: 'ins Kino gehen', example: 'Aber zu Kino sage ich immer ja.' },
        { de: 'die Lust', ru: 'желание', gender: 'feminin', collocation: 'keine Lust haben', example: 'Nee, darauf habe ich keine Lust.' },
        { de: 'hören', ru: 'слушать', type: 'verb', forms: 'hört, hörte, hat gehört', example: 'Na ja, aber die rote Rakete höre ich nicht so gern.' },
      ],
      practiceSentences: [
        { de: 'Der Film beginnt in zehn Minuten.', ru: 'Фильм начинается через десять минут.', note: 'V2' },
        { de: 'Ich höre gern Musik.', ru: 'Я люблю слушать музыку.', note: 'V2' },
        { de: 'Können wir ins Kino gehen?', ru: 'Можем мы пойти в кино?', note: 'V1 вопрос, модальный' },
        { de: 'Ich habe keine Lust darauf.', ru: 'Мне этого не хочется.', note: 'V2' },
        { de: 'Dann gehen wir los!', ru: 'Тогда пошли!', note: 'V2' },
      ],
      question: {
        de: 'Wohin gehen sie am Ende?',
        ru: 'Куда они пойдут в итоге?',
        options: [
          { de: 'Ins Konzert', ru: 'На концерт' },
          { de: 'Ins Theater', ru: 'В театр' },
          { de: 'Ins Kino', ru: 'В кино' },
        ],
        correct: 2,
        explanation: 'Один говорит: "Aber zu Kino sage ich immer ja", и второй соглашается: "Na, dann los."'
      }
    },

    /* ═══ TEIL 4 — 1 длинное интервью ═══ */
    {
      id: 'text-12', teil: 4, aufgabe: 16,
      name: 'Interview Jens',
      type: 'интервью',
      text: 'Hallo Jens, du bist Schüler der elften Klasse und ein talentierter Fußballer. Deine Mannschaft hat in den letzten Pokalspielen den ersten Platz gewonnen. Das ist echt super. Ja, ich bin seit einem Jahr Mittelfeldspieler in der Fußballmannschaft Juniorentiger. Und das bedeutet für dich sicher hartes Training. Ja, klar. Unter der Woche trainiere ich jeden Tag, außer donnerstags und am Wochenende mal samstags mal sonntags kommen noch die Turnierspiele dazu. Ich verstehe. Aber wie hat das alles angefangen? Mit meinem älteren Bruder, der ist jetzt 20 und seinen Freunden habe ich Fußball gelernt. Und dann hat mir der Sportlehrer in der Schule gesagt, dass ich sehr gut bin und vielleicht in einen Fußballverein gehen soll. So ist es losgegangen. Und sag mal, wann lernst du für die Schule? Eigentlich mache ich viel am Wochenende. Nach dem Training bin ich richtig müde und habe keine Lust mehr zum Lernen. Ich skype lieber mit Freunden oder sehe fern. Du hast also wenig Freizeit. Ja, und das finde ich richtig blöd. Ich würde auch mal lieber an einem Freitag oder Samstagabend mit meinen Freunden bis spät ausgehen. Oder wenn ich mal auf einer Party bin, gehe ich immer als erster weg, weil ich am nächsten Morgen früh aufstehen muss. Ich verstehe. Und noch eine letzte Frage, Jens. Was wünschst du dir eigentlich am meisten? In den nächsten Ferien einfach zu faulenzen.',
      sentenceTranslations: {
        'Hallo Jens, du bist Schüler der elften Klasse und ein talentierter Fußballer.': { literal: 'Привет Йенс, ты есть ученик одиннадцатого класса и один талантливый футболист', literary: 'Привет, Йенс, ты ученик одиннадцатого класса и талантливый футболист.' },
        'Deine Mannschaft hat in den letzten Pokalspielen den ersten Platz gewonnen.': { literal: 'Твоя команда имеет в последних кубковых играх первое место выиграно', literary: 'Твоя команда заняла первое место в последних кубковых играх.' },
        'Das ist echt super.': { literal: 'Это есть реально супер', literary: 'Это действительно здорово.' },
        'Ja, ich bin seit einem Jahr Mittelfeldspieler in der Fußballmannschaft Juniorentiger.': { literal: 'Да, я есть с одного года полузащитник в футбольной команде Юниорские тигры', literary: 'Да, я уже год играю полузащитником в команде «Юниорские тигры».' },
        'Und das bedeutet für dich sicher hartes Training.': { literal: 'И это означает для тебя точно тяжёлую тренировку', literary: 'И это наверняка означает для тебя тяжёлые тренировки.' },
        'Ja, klar.': { literal: 'Да, ясно', literary: 'Да, конечно.' },
        'Unter der Woche trainiere ich jeden Tag, außer donnerstags und am Wochenende mal samstags mal sonntags kommen noch die Turnierspiele dazu.': { literal: 'В течение недели тренируюсь я каждый день, кроме четвергов и в выходные то субботами то воскресеньями приходят ещё турнирные игры к тому', literary: 'В будни я тренируюсь каждый день, кроме четверга, а в выходные добавляются турнирные игры.' },
        'Ich verstehe.': { literal: 'Я понимаю', literary: 'Понимаю.' },
        'Aber wie hat das alles angefangen?': { literal: 'Но как имеет это всё начато?', literary: 'Но как всё это началось?' },
        'Mit meinem älteren Bruder, der ist jetzt 20 und seinen Freunden habe ich Fußball gelernt.': { literal: 'С моим старшим братом, который есть сейчас 20 и его друзьями имею я футбол выучено', literary: 'Я учился играть в футбол с моим старшим братом, которому сейчас 20, и его друзьями.' },
        'Und dann hat mir der Sportlehrer in der Schule gesagt, dass ich sehr gut bin und vielleicht in einen Fußballverein gehen soll.': { literal: 'И тогда имеет мне учитель спорта в школе сказано, что я очень хорош есть и может быть в один футбольный клуб идти должен', literary: 'А потом учитель физкультуры в школе сказал, что я очень хорошо играю и что мне стоит пойти в футбольный клуб.' },
        'So ist es losgegangen.': { literal: 'Так есть это начато', literary: 'Так всё и началось.' },
        'Und sag mal, wann lernst du für die Schule?': { literal: 'И скажи-ка, когда учишься ты для школы?', literary: 'Скажи, когда ты учишься?' },
        'Eigentlich mache ich viel am Wochenende.': { literal: 'Собственно делаю я много в выходные', literary: 'В основном я занимаюсь в выходные.' },
        'Nach dem Training bin ich richtig müde und habe keine Lust mehr zum Lernen.': { literal: 'После тренировки есть я правильно усталый и имею никакого желания больше к учёбе', literary: 'После тренировки я очень устаю и не хочу учиться.' },
        'Ich skype lieber mit Freunden oder sehe fern.': { literal: 'Я скайплю охотнее с друзьями или смотрю телевизор', literary: 'Я лучше общаюсь с друзьями по скайпу или смотрю телевизор.' },
        'Du hast also wenig Freizeit.': { literal: 'Ты имеешь итак мало свободного времени', literary: 'Значит, у тебя мало свободного времени.' },
        'Ja, und das finde ich richtig blöd.': { literal: 'Да, и это нахожу я правильно глупым', literary: 'Да, и это очень плохо.' },
        'Ich würde auch mal lieber an einem Freitag oder Samstagabend mit meinen Freunden bis spät ausgehen.': { literal: 'Я бы также раз охотнее в одну пятницу или субботний вечер с моими друзьями до поздно выходить', literary: 'Я бы тоже хотел иногда погулять с друзьями допоздна в пятницу или субботу.' },
        'Oder wenn ich mal auf einer Party bin, gehe ich immer als erster weg, weil ich am nächsten Morgen früh aufstehen muss.': { literal: 'Или когда я раз на одной вечеринке есть, иду я всегда как первый прочь, потому что я на следующее утро рано встать должен', literary: 'Или когда я на вечеринке, я всегда ухожу первым, потому что мне нужно рано вставать на следующее утро.' },
        'Und noch eine letzte Frage, Jens.': { literal: 'И ещё один последний вопрос, Йенс', literary: 'И последний вопрос, Йенс.' },
        'Was wünschst du dir eigentlich am meisten?': { literal: 'Что желаешь ты себе собственно больше всего?', literary: 'Чего ты больше всего хочешь?' },
        'In den nächsten Ferien einfach zu faulenzen.': { literal: 'В следующие каникулы просто лениться', literary: 'В следующие каникулы просто отдыхать.' },
      },
      vocabulary: [
        { de: 'die Mannschaft', plural: 'die Mannschaften', ru: 'команда', gender: 'feminin', collocation: 'deine Mannschaft', example: 'Deine Mannschaft hat in den letzten Pokalspielen den ersten Platz gewonnen.' },
        { de: 'das Pokalspiel', plural: 'die Pokalspiele', ru: 'кубковая игра', gender: 'neutrum', collocation: 'in den Pokalspielen', example: 'Deine Mannschaft hat in den letzten Pokalspielen den ersten Platz gewonnen.' },
        { de: 'der Platz', plural: 'die Plätze', ru: 'место', gender: 'maskulin', collocation: 'ersten Platz gewinnen', example: 'Deine Mannschaft hat in den letzten Pokalspielen den ersten Platz gewonnen.' },
        { de: 'der Sportlehrer', plural: 'die Sportlehrer', ru: 'учитель физкультуры', gender: 'maskulin', collocation: 'der Sportlehrer in der Schule', example: 'Und dann hat mir der Sportlehrer in der Schule gesagt, dass ich sehr gut bin und vielleicht in einen Fußballverein gehen soll.' },
        { de: 'der Fußballverein', plural: 'die Fußballvereine', ru: 'футбольный клуб', gender: 'maskulin', collocation: 'in einen Fußballverein gehen', example: 'Und dann hat mir der Sportlehrer in der Schule gesagt, dass ich sehr gut bin und vielleicht in einen Fußballverein gehen soll.' },
        { de: 'die Freizeit', ru: 'свободное время', gender: 'feminin', collocation: 'wenig Freizeit', example: 'Du hast also wenig Freizeit.' },
        { de: 'die Ferien', ru: 'каникулы', gender: 'feminin', collocation: 'in den Ferien', example: 'In den nächsten Ferien einfach zu faulenzen.' },
        { de: 'gewinnen', ru: 'выигрывать', type: 'verb', forms: 'gewinnt, gewann, hat gewonnen', example: 'Deine Mannschaft hat in den letzten Pokalspielen den ersten Platz gewonnen.' },
        { de: 'trainieren', ru: 'тренироваться', type: 'verb', forms: 'trainiert, trainierte, hat trainiert', example: 'Unter der Woche trainiere ich jeden Tag, außer donnerstags und am Wochenende mal samstags mal sonntags kommen noch die Turnierspiele dazu.' },
        { de: 'anfangen', ru: 'начинаться', type: 'verb', forms: 'fängt an, fing an, hat angefangen', example: 'Aber wie hat das alles angefangen?' },
        { de: 'losgehen', ru: 'начинаться, стартовать', type: 'verb', forms: 'geht los, ging los, ist losgegangen', example: 'So ist es losgegangen.' },
        { de: 'fernsehen', ru: 'смотреть телевизор', type: 'verb', forms: 'sieht fern, sah fern, hat ferngesehen', example: 'Ich skype lieber mit Freunden oder sehe fern.' },
        { de: 'ausgehen', ru: 'выходить, гулять', type: 'verb', forms: 'geht aus, ging aus, ist ausgegangen', example: 'Ich würde auch mal lieber an einem Freitag oder Samstagabend mit meinen Freunden bis spät ausgehen.' },
        { de: 'aufstehen', ru: 'вставать', type: 'verb', forms: 'steht auf, stand auf, ist aufgestanden', example: 'Oder wenn ich mal auf einer Party bin, gehe ich immer als erster weg, weil ich am nächsten Morgen früh aufstehen muss.' },
        { de: 'faulenzen', ru: 'лениться, отдыхать', type: 'verb', forms: 'faulenzt, faulenzte, hat gefaulenzt', example: 'In den nächsten Ferien einfach zu faulenzen.' },
      ],
      practiceSentences: [
        { de: 'Ich trainiere seit zwei Jahren.', ru: 'Я тренируюсь уже два года.', note: 'V2' },
        { de: 'Am Wochenende habe ich frei.', ru: 'В выходные я свободен.', note: 'V2' },
        { de: 'Nach dem Sport bin ich müde.', ru: 'После спорта я устаю.', note: 'V2' },
        { de: 'Ich würde gern mehr schlafen.', ru: 'Я бы хотел больше спать.', note: 'Konjunktiv II' },
        { de: 'Weil ich früh aufstehe, bin ich müde.', ru: 'Так как я рано встаю, я устаю.', note: 'глагол в конце Nebensatz' },
      ],
      question: {
        de: 'Was wünscht sich Jens am meisten?',
        ru: 'Чего Йенс желает больше всего?',
        options: [
          { de: 'Mehr Sport zu machen', ru: 'Больше заниматься спортом' },
          { de: 'In den Ferien zu faulenzen', ru: 'Отдыхать на каникулах' },
          { de: 'Öfter mit Freunden ausgehen', ru: 'Чаще гулять с друзьями' },
        ],
        correct: 1,
        explanation: 'На вопрос о желании Йенс отвечает: "In den nächsten Ferien einfach zu faulenzen."'
      }
    },
  ],

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

  get sentenceTranslations() {
    var map = {};
    this.texts.forEach(function(t) {
      for (var de in t.sentenceTranslations) {
        map[de] = typeof t.sentenceTranslations[de] === 'string' ? t.sentenceTranslations[de] : (t.sentenceTranslations[de].literary || '');
      }
    });
    return map;
  },

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
      promptText: 'Ты — терпеливый преподаватель немецкого. Ученик уровня A2.\n\nТранскрипция аудирования (Fit in Deutsch 2, Hören):\n{lessonText}\n\nЗадача: Разбери текст по предложениям.\n1. Покажи ОБРАЗЕЦ: разбери первое предложение по словам + грамматика\n2. Дай второе предложение — ученик переводит сам\n3. Правильный ответ = макс 2 строки: \"Genau! Дальше: [предложение]\"\n4. Ошибка = макс 4 строки: ❌→✓ + 1 фраза почему\n5. Мини-уроки грамматики каждые 3-4 предложения\n6. Темп > идеальность. Ученику интересно ДВИГАТЬСЯ.\n\nСловарь:\n{vocabularyList}\n\nНачни с Teil 1, Text 1 (Ratgeber).',
    },
  },

  /* ─── grammarFocus ─── */
  grammarFocus: [
    'ohne zu + Infinitiv: ohne mein Taschengeld auszugeben',
    'Relativsatz: die Frage, die immer wieder auftaucht',
    'Konjunktiv II: solltest du anprobieren, könnten uns treffen, ich würde ausgehen',
    'dass-Nebensatz: hat gesagt, dass ich sehr gut bin',
    'weil-Nebensatz: weil ich am nächsten Morgen früh aufstehen muss',
    'Отделяемые приставки: anprobieren, einkaufen, anziehen, mitnehmen, anfangen, ausgehen, aufstehen',
    'Perfekt: hat vergessen, hat verloren, hat gewonnen, ist losgegangen',
    'es gibt + Akkusativ: es gibt einen Workshop',
  ],
};

LESSONS.push(LESSON_34);
