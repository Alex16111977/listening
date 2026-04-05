---
name: notebooklm-hoerenweg
description: Создание source-файлов и генерация карточек/тестов в NotebookLM для уроков HörenWeg (Goethe A2 Hören). Используй при подготовке нового урока lesson-XX.js к загрузке в NotebookLM — генерация файлов, загрузка в notebook, создание 4 flashcard-наборов + 4 тестов по Teil, переименование артефактов, обновление notebooklm-links.js.
---

# NotebookLM → HörenWeg workflow

Финальная схема подготовки урока для NotebookLM (проверена на lesson-01).

**Notebook HörenWeg:** `1f985d5d-ef57-4050-8c06-24111ba1564b`

---

## Что создаём per lesson (12 артефактов)

### 21 source-файл в `notebooklm/lesson_XX/`

**Naming convention для upload в NotebookLM:** `lesson_XX_<filename>.md` (префикс `lesson_01_`, `lesson_02_` и т.д. для визуальной изоляции в Студии).

| Файл (локально) | Upload title | Назначение | Генератор |
|---|---|---|---|
| `lesson-XX.md` | `lesson_XX_translation.md` | Полный перевод всех 12 текстов (DE / дословно / литературно) | `tools/gen-translation.js` |
| `cards_teil_1..4.md` | `lesson_XX_cards_teil_N.md` | Словарь A2/B1 max 24 слов/Teil | `tools/gen-cards.js` |
| `quiz_tN_perevod.md` × 4 | `lesson_XX_quiz_tN_perevod.md` | Перевод DE→RU (RU q, RU a) | `tools/gen-quiz-ru.js` |
| `quiz_tN_syn_ant_ru.md` × 4 | `lesson_XX_quiz_tN_syn_ant_ru.md` | Синонимы/антонимы (RU q, DE a) | `tools/gen-quiz-ru.js` |
| `quiz_tN_kontext.md` × 4 | `lesson_XX_quiz_tN_kontext.md` | Hörverstehen (DE q, DE a) | `tools/gen-quiz-de.js` |
| `quiz_tN_kollok_ru.md` × 4 | `lesson_XX_quiz_tN_kollok_ru.md` | Пропущенное слово (RU q, DE a) | `tools/gen-quiz-ru.js` |

**Всего 21 файл per lesson:** 1 translation + 4 cards + 16 quizzes (4 типа × 4 Teil).

### 8 studio-артефактов в NotebookLM

- **4 × Flashcard sets** (по одному на Teil) — из `cards_teil_N.md` через `flashcards_create` + `focus_prompt`
- **4 × Quiz sets** (4 типа, пока только Teil 1) — из 4 `quiz_t1_*.md` через `quiz_create` + `focus_prompt`

---

## Языки (КРИТИЧНО)

| Артефакт | Notebook language | Язык вопроса | Язык ответов |
|---|---|---|---|
| Flashcards | русский | DE (слово) | RU (перевод) + DE пример |
| Перевод (quiz 1) | русский | RU | RU |
| Синонимы/Антонимы (quiz 2) | русский | RU | DE |
| Hörverstehen (quiz 3) | **Deutsch** | DE | DE |
| Пропущенное слово (quiz 4) | русский | RU | DE |

**Язык меняется через UI NotebookLM:** Настройки → Язык результатов. MCP наследует текущую настройку notebook'а.

**Порядок:** русский → 3 теста + 4 карточки → Deutsch → Hörverstehen → русский.

---

## Формат source-файлов

### `cards_teil_N.md` — ПРОСТОЙ 2-col формат (критично!)

```markdown
# Vocabulary flashcards — Урок XX · Teil N (<label>)

**CREATE ONLY VOCABULARY TRANSLATION FLASHCARDS from the table below.**

**Strict rules for flashcard generation:**
- Front side: German word EXACTLY as written in column "Deutsch"
- Back side: Russian translation + example sentence
- **ONE flashcard per row — no more, no less.**
- **DO NOT create grammar questions, definitions, cloze deletions, or quiz-style cards.**
- Total expected cards: exactly N.

## Vocabulary table (N words, A2/B1 level)

| Deutsch | Русский | Пример |
|---|---|---|
| der Kollege | коллега | Ich habe mit meinen Kollegen keine Probleme. |
...
```

**⚠️ НЕ использовать 3 отдельные таблицы Nouns/Verbs/Adj с 5 колонками** — NotebookLM генерирует по 2-3 карточки на слово из-за множественных колонок (Род, Plural, Forms). С 3-колоночной таблицей = ровно 1 карточка на строку.

### `quiz_t1_*.md` формат см. в generators `tools/gen-quiz-ru-teil1.js` и `tools/gen-quiz-de-teil1.js`.

---

## Генераторы

### Генераторы (все универсальные, принимают `lesson-XX` + `teil` где нужно)

```bash
# Одна команда генерит все 21 файл для урока:
node tools/gen-translation.js lesson-02                    # 1 translation
node tools/gen-cards.js lesson-02                          # 4 cards
node tools/gen-quiz-ru.js lesson-02 1                      # 3 RU quizzes per Teil (× 4 Teil = 12)
node tools/gen-quiz-ru.js lesson-02 2
node tools/gen-quiz-ru.js lesson-02 3
node tools/gen-quiz-ru.js lesson-02 4
node tools/gen-quiz-de.js lesson-02 1                      # 1 DE Kontext quiz per Teil (× 4 = 4)
node tools/gen-quiz-de.js lesson-02 2
node tools/gen-quiz-de.js lesson-02 3
node tools/gen-quiz-de.js lesson-02 4
```

**`gen-translation.js`** — выгружает все 12 текстов с переводами в одну .md таблицу.
**`gen-cards.js`** — содержит A1_EXCLUDE set (~200 базовых слов Goethe A1), макс 24 слова per Teil.
**`gen-quiz-ru.js`** — содержит SYN/ANT dict (курируется вручную per lesson как A2-teacher).
**`gen-quiz-de.js`** — генерирует только Kontext (Hörverstehen) тесты на немецком.

---

## MCP workflow (форк: `C:\Lingua\Github\notebooklm-mcp-fork\`)

### Загрузка source'ов
```
mcp__notebooklm-studio__notebook_add_text(
  notebook_id, title: "cards_teil_N.md", file_path: "абсолютный путь"
) × 8
```

### Создание flashcards С focus_prompt

**Язык:** настройка notebook'а должна быть **русский** (UI → Настройки → Язык результатов).

```
mcp__notebooklm-studio__flashcards_create(
  notebook_id: "1f985d5d-...",
  source_ids: ["<cards_teil_N.md source_id>"],
  difficulty: "medium",
  focus_prompt: "Create ONLY vocabulary translation cards, strictly one card per row of the table. Front: German word EXACTLY as shown in \"Deutsch\" column (keep der/die/das articles). Back: Russian translation from \"Русский\" column + example sentence from \"Пример\" column. Do NOT create grammar questions, definitions, cloze tests, or \"Переведите/Что означает\" prompts. Total cards must equal the row count.",
  confirm: true
) × 4
```

**Проверено:** с этим промтом генерируется ровно N карточек (= число строк таблицы).

### Создание 3 русских тестов + 1 немецкого

```
# Русские тесты (notebook language = русский)
mcp__notebooklm-studio__quiz_create(
  notebook_id, source_ids: ["<quiz_t1_perevod.md>"],
  question_count: 10, difficulty: "medium",
  focus_prompt: "...",
  confirm: true
)
# аналогично для syn_ant_ru, kollok_ru

# Немецкий тест:
# 1. UI → Настройки → Язык → Deutsch
# 2. quiz_create с source kontext.md
# 3. UI → язык обратно на русский
```

### Переименование (через studio_rename — только в форке)

```
mcp__notebooklm-studio__studio_rename(
  notebook_id, artifact_id,
  new_title: "Урок XX · Teil N · Карточки A2/B1"
)
```

**Финальные имена:**
- `Урок XX · Teil N · Карточки A2/B1` (flashcards × 4)
- `Урок XX · Teil 1 · Перевод лексики`
- `Урок XX · Teil 1 · Синонимы/Антонимы`
- `Урок XX · Teil 1 · Hörverstehen`
- `Урок XX · Teil 1 · Пропущенное слово`

### Обновление сайта — `notebooklm-links.js`

Единственный файл для правки при добавлении ссылок (движок `index.html` читает `window.NLM_LINKS[lesson.id]`):

```js
window.NLM_LINKS = {
  'lesson-01': {
    flashcards: { t1: '...', t2: '...', t3: '...', t4: '...' },
    quizzes: {
      perevod_t1: '...',
      syn_ant_t1: '...',
      kontext_t1: '...',
      kollok_t1: '...'
    },
    audio: null,
    reports: null
  }
};
```

URL формат: `https://notebooklm.google.com/notebook/<notebook_id>?artifactId=<artifact_id>`

---

## Форк MCP (notebooklm-studio)

Claude Desktop использует локальный форк в `C:\Lingua\Github\notebooklm-mcp-fork\`, подключённый через:

```json
"notebooklm-studio": {
  "command": "C:\\Users\\Asus\\AppData\\Roaming\\Claude\\node-wrapper.bat",
  "args": ["C:/Lingua/Github/notebooklm-mcp-fork/dist/cli.js", "serve"]
}
```

### 5 улучшений форка относительно upstream m4yk3ldev/notebooklm-mcp

| # | Улучшение | Upstream | Форк |
|---|---|---|---|
| 1 | `studio_rename` tool | ❌ отсутствует | ✅ rpcid `rc3d8d`, params `[[artifactId, newTitle], [["title"]]]` |
| 2 | `deleteSource` fix | ⚠️ broken params `[sourceId, notebookId]` | ✅ `[[[sourceId]], [2]]` |
| 3 | `deleteStudio` fix | ⚠️ broken `[notebookId, artifactId]` | ✅ `[[2,null,null,[1,null,null,null,null,null,null,null,null,null,[1]],[[1,4,2,3,6,5]]], artifactId]` |
| 4 | `focus_prompt` для flashcards | ❌ параметра нет | ✅ в inner array **index 2**: `[1, null, focusPrompt, null, null, null, [diff, count]]` |
| 5 | `focus_prompt` для quiz | ❌ параметра нет | ✅ в inner array **index 2**: `[2, null, focusPrompt, null, null, null, null, [count, diff]]` |

**Источник рабочих payload'ов:** [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py/blob/main/src/notebooklm/_artifacts.py) — verified Python implementation.

### Пересборка форка

```bash
cd C:/Lingua/Github/notebooklm-mcp-fork
npm run build    # → dist/cli.js (66 KB)
```

После изменений форка — **перезапустить Claude Desktop** (MCP-сервер живёт в памяти между вызовами, изменения dist/ подхватываются только при рестарте).

---

## Ловушки и решения

| Проблема | Причина | Решение |
|---|---|---|
| Flashcards генерируются в 63 карточки из 24 слов | Источник с 5 колонками → NotebookLM делает по 2-3 карточки на слово | 2-колоночная таблица + `focus_prompt` с "ONE flashcard per row" |
| Тесты генерируются на английском | `"en-US"` дефолт в NotebookLM | UI → Настройки → Язык результатов → русский / Deutsch |
| `source_delete`/`studio_delete` возвращают success, но файл остаётся | Баг upstream MCP (неверные params) | Использовать форк (исправлено) |
| `studio_rename` не существует | Отсутствует tool в upstream | Форк добавляет (rpcid `rc3d8d`) |
| Дефолтные имена артефактов | NotebookLM не использует source filename | `studio_rename` после создания |
| Первый MCP-вызов после рестарта таймаутится | Cold start | Повторить — второй вызов проходит |
| `focus_prompt` не сработал — угадывал позицию | Без документации | Взять из `teng-lin/notebooklm-py`: **index 2** inner array |

---

## Текущее состояние (lesson-01, pilot)

- Notebook: https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b
- 8 source-файлов загружены: 4 cards + 4 quizzes
- 4 flashcards (24/4/24/9 карточек) + 4 quizzes созданы, переименованы
- Ссылки в `notebooklm-links.js` → сайт показывает в Упражнениях → блоки «🃏 Флеш-карточки» и «📝 Тесты»

Для нового урока: повторить workflow с заменой `01` → `XX`. Генератор `gen-cards.js` работает универсально через `node tools/gen-cards.js lesson-XX`.
