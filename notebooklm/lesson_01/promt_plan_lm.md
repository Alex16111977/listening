# Inженерный план: тесты Teil 2-4 для Урока 01

## Context

Сейчас у Урока 01 полностью готов **только Teil 1** (4 теста + 4 карточки). Teil 2/3/4 имеют только карточки, но **нет тестов**. Нужно расширить пилот Teil 1 на Teil 2/3/4: сгенерировать 12 новых source-файлов, загрузить в NotebookLM, создать 12 квизов, переименовать, подключить на сайт.

**Результат:** блок "📝 Тесты (NotebookLM)" на сайте покажет **4 типа × 4 Teil = 16 тестов** вместо текущих 4.

---

## Текущее состояние

### Что есть (Teil 1, 4 теста)
| Тип | Source | Artifact ID | Языки |
|---|---|---|---|
| Перевод | `quiz_t1_perevod.md` | `788123f2` | RU → RU |
| Синонимы/Антонимы | `quiz_t1_syn_ant_ru.md` | `614899de` | RU q, DE a |
| Hörverstehen | `quiz_t1_kontext.md` | `662dd95d` | DE → DE |
| Пропущенное слово | `quiz_t1_kollok_ru.md` | `e1d4545e` | RU q, DE a |

### Что нужно создать (Teil 2, 3, 4 — 12 тестов)
- **12 новых source-файлов** (4 типа × 3 Teil) в `notebooklm/lesson_01/`
- **12 квизов** в NotebookLM
- **12 записей** в `notebooklm-links.js`
- **1 расширение** рендера в `index.html`

---

## Шаг 1 — Обобщить генераторы (параметризация по Teil)

### Файлы к изменению
- `tools/gen-quiz-ru-teil1.js` → принимать `teil` как arg
- `tools/gen-quiz-de-teil1.js` → принимать `teil` как arg

### Что менять
Сейчас оба файла hardcoded на Teil 1. Нужно:
1. Читать `process.argv[2]` (lesson-id) и `process.argv[3]` (teil: 1/2/3/4)
2. Название файлов на выходе: `quiz_tN_perevod.md` / `quiz_tN_syn_ant_ru.md` / `quiz_tN_kontext.md` / `quiz_tN_kollok_ru.md` (N — номер Teil)
3. Выходная папка: `notebooklm/lesson_XX/` (dynamic)

### Критичное: расширить словарь синонимов/антонимов
Текущий dict в `gen-quiz-ru-teil1.js` покрывает только слова Teil 1 (~25 слов). Нужно добавить пары для:
- **Teil 2** (10 слов): Urlaub, Campingplatz, See, Bäckerei, Hund, Fahrrad, Universität, schwimmen, sich kümmern um, helfen
- **Teil 3** (37 слов): Probe, Zahnarzt, Konzert, hoffen, fit, Bikini, Schaufenster, Größe, Farbe, anprobieren, gefallen, hellblau, Fuß, Bein, Arm, Eis, sich verletzen, weh tun, ruhen, legen, dick, Haus, Kulturzentrum, Erdgeschoss, Kindergarten, Jugendherberge, suchen, nebenan, Foto, Hobby, Ausstellung, Kurs, Cousin, anfangen, versuchen, zeigen, wunderbar
- **Teil 4** (12 слов): Gast, Familie, Kind, Zimmer, Garten, Spiegel, Fremdsprache, Deutschkurs, Dolmetscherin, aufpassen auf, aufhängen, studieren

Я (как A2-teacher) докурирую словарь перед генерацией.

### Запуск
```bash
node tools/gen-quiz-ru-teil1.js lesson-01 2
node tools/gen-quiz-ru-teil1.js lesson-01 3
node tools/gen-quiz-ru-teil1.js lesson-01 4
node tools/gen-quiz-de-teil1.js lesson-01 2
node tools/gen-quiz-de-teil1.js lesson-01 3
node tools/gen-quiz-de-teil1.js lesson-01 4
```
→ 12 новых `.md` файлов в `notebooklm/lesson_01/`

---

## Шаг 2 — Загрузить 12 source-файлов в NotebookLM

```
mcp__notebooklm-studio__notebook_add_text × 12
```

После загрузки — `notebook_get` чтобы получить 12 новых `source_id`.

---

## Шаг 3 — Создать 12 квизов

### 3a. Установить язык notebook'а на **русский** (UI)
Настройки → Язык результатов → русский.

### 3b. Создать 9 русских квизов (3 типа × 3 Teil)
```
mcp__notebooklm-studio__quiz_create × 9
```
Каждый с `focus_prompt` соответствующего типа (перевод / синонимы-антонимы / пропуск) + `question_count: 10`, `difficulty: medium`, `source_ids: [<один конкретный source_id>]`.

### 3c. Сменить язык на **Deutsch** (UI)
Настройки → Язык результатов → Deutsch.

### 3d. Создать 3 немецких квиза (Kontext × 3 Teil)
```
mcp__notebooklm-studio__quiz_create × 3
```

### 3e. Вернуть язык на **русский** (UI)

Итого: **12 новых артефактов** + 4 уже существующих Teil 1 = 16.

---

## Шаг 4 — Переименовать 12 квизов

```
mcp__notebooklm-studio__studio_rename × 12
```

По шаблону:
- `Урок 01 · Teil N · Перевод лексики`
- `Урок 01 · Teil N · Синонимы/Антонимы`
- `Урок 01 · Teil N · Hörverstehen`
- `Урок 01 · Teil N · Пропущенное слово`

---

## Шаг 5 — Обновить `notebooklm-links.js`

### Текущая структура (Teil 1 only):
```js
quizzes: {
  perevod_t1: '...',
  syn_ant_t1: '...',
  kontext_t1: '...',
  kollok_t1: '...'
}
```

### Новая структура (все 4 Teil):
```js
quizzes: {
  // Teil 1 (уже есть)
  perevod_t1: '...', syn_ant_t1: '...', kontext_t1: '...', kollok_t1: '...',
  // Teil 2 (новые)
  perevod_t2: '...', syn_ant_t2: '...', kontext_t2: '...', kollok_t2: '...',
  // Teil 3
  perevod_t3: '...', syn_ant_t3: '...', kontext_t3: '...', kollok_t3: '...',
  // Teil 4
  perevod_t4: '...', syn_ant_t4: '...', kontext_t4: '...', kollok_t4: '...'
}
```

---

## Шаг 6 — Расширить рендер в `index.html`

### Файл к изменению
`C:\Lingua\Github\listening\index.html` → функция `renderExercisesView` (строки ~904-924)

### Текущий код показывает только Teil 1
```js
var qzItems = [
  { key:'perevod_t1', ... },
  { key:'syn_ant_t1', ... },
  { key:'kontext_t1', ... },
  { key:'kollok_t1', ... }
];
```

### Новый код: 4 типа × 4 Teil в accordion по Teil

Вариант A — **4 секции (по Teil), в каждой 4 типа**:
```
📝 Тесты (NotebookLM)
├─ Teil 1: [🔄 Перевод] [🤝 Синонимы] [🎧 Hören] [🔗 Пропуск]
├─ Teil 2: [🔄 Перевод] [🤝 Синонимы] [🎧 Hören] [🔗 Пропуск]
├─ Teil 3: [🔄 Перевод] [🤝 Синонимы] [🎧 Hören] [🔗 Пропуск]
└─ Teil 4: [🔄 Перевод] [🤝 Синонимы] [🎧 Hören] [🔗 Пропуск]
```

Вариант B — **4 секции (по типу), в каждой 4 Teil**:
```
📝 Тесты (NotebookLM)
├─ 🔄 Перевод: [T1] [T2] [T3] [T4]
├─ 🤝 Синонимы/Антонимы: [T1] [T2] [T3] [T4]
├─ 🎧 Hörverstehen: [T1] [T2] [T3] [T4]
└─ 🔗 Пропущенное слово: [T1] [T2] [T3] [T4]
```

**Рекомендую Вариант A** — совпадает с группировкой карточек (📖 Teil 1: карточки + тесты вместе).

---

## Шаг 7 — Verification

### Локально
1. 12 файлов созданы в `notebooklm/lesson_01/`
2. `node -c notebooklm-links.js` → valid
3. Открыть сайт, Урок 01 → Упражнения → должно быть 16 кнопок тестов в 4 accordion-блоках

### В NotebookLM
1. `studio_status` → 16 flashcards/quiz artifacts (4 flashcards + 4 Teil 1 quizzes + 12 new Teil 2-4 quizzes)
2. Проверить 3 теста наугад через UI:
   - Teil 2 Перевод: вопрос на русском, 4 русских варианта
   - Teil 3 Hörverstehen: вопрос и ответы на немецком
   - Teil 4 Пропущенное слово: вопрос на русском, немецкое предложение

### На сайте
1. Клик по каждой из 16 кнопок → открывает правильный артефакт в NotebookLM
2. Проверить Vlesson-01.js URL-ки не конфликтуют с тестами

---

## Критичные файлы

| Файл | Действие |
|---|---|
| `tools/gen-quiz-ru-teil1.js` | Параметризовать `teil`, расширить SYN/ANT dict |
| `tools/gen-quiz-de-teil1.js` | Параметризовать `teil` |
| `notebooklm/lesson_01/quiz_t{2,3,4}_*.md` | 12 новых файлов |
| `notebooklm-links.js` | Добавить 12 ключей `quizzes.*_t{2,3,4}` |
| `index.html` (renderExercisesView) | Перегруппировать в 4 Teil-секции |
| Claude Desktop config | Без изменений |

---

## Оценка объёма работы

| Этап | Операций | Время (с API-calls) |
|---|---|---|
| Курирование SYN/ANT dict (teil 2/3/4) | ручное | ~15 мин (как teacher) |
| Параметризация генераторов | 2 edits | 5 мин |
| Генерация 12 .md | 6 команд | 1 мин |
| Upload в NotebookLM | 12 API-calls | ~2 мин |
| Quiz creation (9 RU + 3 DE) | 12 API-calls + 2 смены языка | ~10 мин (генерация quiz ~30 сек каждый) |
| Rename × 12 | 12 API-calls | 2 мин |
| Update notebooklm-links.js | 1 edit | 2 мин |
| Update index.html | 1 edit | 5 мин |
| **Итого** | | **~40 мин** |

---

## Открытые вопросы

1. **Структура UI** — Вариант A (accordion по Teil) или B (accordion по типу)?
2. **SYN/ANT dict курирование** — я сам решаю пары, или ты хочешь вручную проверить мой выбор?
3. **Порядок генерации** — сразу все 12 квизов за один прогон, или по Teil'ам (Teil 2 → verify → Teil 3 → Teil 4)?
