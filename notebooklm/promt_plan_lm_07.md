# 🎯 Инженерный план: наполнение Урока 07 в NotebookLM (SPECIAL CASE)

## ⚠️ Особенность Урока 07

**L07 — только Teil 1 (5 текстов).** Исходный чат неполный — нет Teil 2, 3, 4.

Это означает:
- Только **6 файлов** (не 21): translation + cards_teil_1 + 4 quiz файла Teil 1
- Только **5 артефактов** (не 20): 1 flashcards + 4 quiz (3 RU + 1 DE)
- На сайте `#lesson-07/exercises` будет только **1 teil-блок** тестов + блок карточек

## Context

Уроки 01-04 в блокноте **HörenWeg**, Уроки 05, 06 в блокноте **HörenWeg 5-8**. Урок 07 → в тот же `HörenWeg 5-8`.

**notebook_id:** `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`
**Блокнот:** `HörenWeg 5-8`

**Источник:** `lessons/lesson-07.js` → **Goethe A2 Hören — Modelltest 25** (Vid=`erhuXReIP1I`)
- Тема: Basketballspiel, Hochzeit, Hotel Leopold, Wetter, Radio-Gewinnspiel
- Teil 1: **5 текстов** (Kurze Texte)
- Teil 2/3/4: отсутствуют

**Naming convention:**
- Префикс `lesson_07_` (6 файлов)
- Артефакты: `Урок 07 · Teil 1 · <Тип>` (5 артефактов)

---

## 📊 9 фаз (~15 минут, сокращённый workflow)

### ФАЗА 1 — Batch-agents: audit + SYN/ANT (5 мин)
2 параллельных Explore-агента:
- Agent 1 — audit vocabulary Урока 07 (~30 слов Teil 1)
- Agent 2 — SYN/ANT pairs для новых слов Урока 07

### ФАЗА 2 — Расширить SYN/ANT dict (2 мин)
Добавить секцию `// === Урок 07 ===` в `tools/gen-quiz-ru.js`.

### ФАЗА 3 — Генерация 6 файлов (10 сек)
```bash
cd C:/Lingua/Github/listening && \
node tools/gen-translation.js lesson-07 && \
node tools/gen-cards.js lesson-07 && \
node tools/gen-quiz-ru.js lesson-07 1 && \
node tools/gen-quiz-de.js lesson-07 1
```

**Результат:** папка `notebooklm/lesson_07/` с **6 файлами:**
- `lesson-07.md`
- `cards_teil_1.md`
- `quiz_t1_perevod.md`, `quiz_t1_syn_ant_ru.md`, `quiz_t1_kollok_ru.md`, `quiz_t1_kontext.md`

**⚠️ НЕ запускать `gen-quiz-ru.js lesson-07 2/3/4`** — упадёт (нет текстов для этих Teil).

### ФАЗА 4 — Monitoring (опц., 30 сек)
После Урока 07 в блокноте `HörenWeg 5-8`: ~48 sources (16% Pro 300). Большой запас.

### ФАЗА 5 — Upload 6 sources с префиксом `lesson_07_` (1 мин)

| Локальный файл | Upload title |
|---|---|
| `lesson-07.md` | `lesson_07_translation.md` |
| `cards_teil_1.md` | `lesson_07_cards_teil_1.md` |
| `quiz_t1_perevod.md` | `lesson_07_quiz_t1_perevod.md` |
| `quiz_t1_syn_ant_ru.md` | `lesson_07_quiz_t1_syn_ant_ru.md` |
| `quiz_t1_kollok_ru.md` | `lesson_07_quiz_t1_kollok_ru.md` |
| `quiz_t1_kontext.md` | `lesson_07_quiz_t1_kontext.md` |

**notebook_id:** `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`

### ФАЗА 6 — Создать 5 артефактов (~2 мин) ⚠️

**🚨 КРИТИЧНО:** сохранять **полный UUID** из `response.artifact_id[0]` после каждого create. При пустом `artifact_id` → суточный лимит (~20/день), продолжить завтра.

**5 вызовов параллельно:**

1. `flashcards_create(source=cards_teil_1)` → `Урок 07 · Teil 1 · Карточки A2/B1`
2. `quiz_create(source=quiz_t1_perevod, focus_prompt=perevod)` → `Перевод лексики`
3. `quiz_create(source=quiz_t1_syn_ant_ru, focus_prompt=syn_ant_ru)` → `Синонимы/Антонимы`
4. `quiz_create(source=quiz_t1_kollok_ru, focus_prompt=kollok_ru)` → `Пропущенное слово`
5. `quiz_create(source=quiz_t1_kontext, focus_prompt=DE)` → `Hörverstehen`

**focus_prompts:** стандартные из плана Урока 05/06 (perevod/syn_ant_ru/kollok_ru/DE kontext/flashcards).

### ФАЗА 7 — Rename 5 артефактов (1 мин) ⚠️

**Полные UUID!** Шаблон имён:
- `Урок 07 · Teil 1 · Карточки A2/B1`
- `Урок 07 · Teil 1 · Перевод лексики`
- `Урок 07 · Teil 1 · Синонимы/Антонимы`
- `Урок 07 · Teil 1 · Hörverstehen`
- `Урок 07 · Teil 1 · Пропущенное слово`

**DOM-верификация:** navigate + JS-скан (пауза 3 сек) → ожидается `total === N` где N = все артефакты блокнота `HörenWeg 5-8` (20 Урок 06 + 5 Урок 07 = 25), `unnamed === 0`.

### ФАЗА 8 — studio_status (30 сек)
```
studio_status(notebook_id: 'f42e6a86-...')
```
Ожидается: **25 артефактов** (Урок 06 + Урок 07).

### ФАЗА 9 — Обновить `notebooklm-links.js` + verification (2 мин)

```js
'lesson-07': {
  // Notebook: HörenWeg 5-8 (f42e6a86-...)
  // Special case: only Teil 1 (5 texts) in source material
  flashcards: {
    t1: 'https://notebooklm.google.com/notebook/f42e6a86-.../?artifactId=<UUID>',
    t2: null, t3: null, t4: null  // отсутствуют в этом уроке
  },
  quizzes: {
    perevod_t1:  '...',
    syn_ant_t1:  '...',
    kontext_t1:  '...',
    kollok_t1:   '...'
    // Teil 2, 3, 4 отсутствуют
  },
  audio: null,
  reports: null
}
```

Движок сайта должен корректно обрабатывать `null` поля (проверить `renderExercisesView` в `index.html` — существующие уроки 01-06 уже работают, но специально уточнить для L07).

**Verification:**
1. `node -c notebooklm-links.js` → OK
2. Открыть `#lesson-07/exercises` → 1 accordion блок Teil 1 + 1 блок карточек
3. Попробовать 2-3 кнопки

---

## 🚨 Ловушки и решения (11 known issues)

| # | Ловушка | Решение |
|---|---|---|
| 1 | Kontext на английском | *"KOMPLETT AUF DEUTSCH"* |
| 2 | Flashcards 63 вместо 24 | 2-col таблица + *"ONE card per row"* |
| 3 | Cold-start timeout MCP | Повторить вызов |
| 4 | Orphan-дубликаты | `studio_status` + `studio_delete` |
| 5 | `source_delete` broken в upstream | Форк `notebooklm-mcp-fork` |
| 6 | `studio_delete` broken в upstream | Форк: complex meta struct |
| 7 | `studio_rename` отсутствует в upstream | Форк: rpcid `rc3d8d` |
| 8 | `focus_prompt` position | Index 2 inner array |
| 9 | `notebook_get` кэш после delete | Перезагрузить UI |
| 10 | `studio_rename` принимает префикс UUID как success | **Полный UUID** (36 символов) + DOM-верификация |
| 11 ℹ️ | **Суточный лимит NotebookLM** (~20 artifacts/день) — не баг | При пустом `artifact_id` — продолжить завтра |

---

## ⚡ Mandatory checklist

- [ ] **notebook_id: `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`** во ВСЕХ вызовах
- [ ] В `gen-quiz-ru.js`/`gen-quiz-de.js` запускать **только Teil 1** (2, 3, 4 упадут)
- [ ] В Фазе 6: 5 артефактов (не 20)
- [ ] В Фазе 7: полные UUID + DOM-верификация
- [ ] В Фазе 9: `flashcards.t2/t3/t4 = null`, `quizzes` только `_t1`

---

## 📁 Критичные файлы

| Файл | Действие |
|---|---|
| `tools/gen-quiz-ru.js` | EDIT (блок `// === Урок 07 ===`) |
| `notebooklm/lesson_07/*.md` | CREATE (6 файлов) |
| `notebooklm-links.js` | EDIT (блок `'lesson-07'` с null для t2/t3/t4) |
| `index.html` | **NO CHANGES** (если движок не ломается на null) |

---

## 🎯 Success Criteria

- ✅ 5 артефактов Урока 07 в блокноте `HörenWeg 5-8`
- ✅ 5 URL в `notebooklm-links.js` → блок `lesson-07`
- ✅ На сайте `#lesson-07/exercises`: 1 блок карточек + 1 teil-блок тестов
- ✅ Карточек в Teil 1 ≤ 24
- ✅ DOM-верификация: `unnamed === 0`
