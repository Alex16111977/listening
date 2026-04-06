# 🎯 Инженерный план: полное наполнение Урока 08 в NotebookLM

## Context

Уроки 01-04 в блокноте **HörenWeg**, Уроки 05-07 в **HörenWeg 5-8**. Урок 08 → в тот же `HörenWeg 5-8` (ЗАВЕРШАЕТ batch 5-8). Этот план — **для Урока 08** со всеми исправлениями из опыта Уроков 01-07.

**notebook_id:** `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`
**Блокнот:** `HörenWeg 5-8`

**Источник:** `lessons/lesson-08.js` → **Goethe A2 Hören — Modelltest 8** (Vid=`Iud2ji70B4I`)
- Тема: Musikfest, Geburtstagsplanung, Wetter, Reise nach Köln, Familienhotel
- Teil 1: 5 текстов
- Teil 2: 1 текст
- Teil 3: 5 текстов
- Teil 4: 1 текст
- Всего: 12 мини-текстов (стандартная структура)

**Naming convention:**
- Все sources с префиксом `lesson_08_` (21 файл)
- Артефакты: `Урок 08 · Teil N · <Тип>` (20 артефактов)

---

## 📊 9 фаз (~22 минуты)

### ФАЗА 1 — Batch-agents: курирование контента (5 мин)

**2 параллельных Explore-агента:**

**Agent 1 — Audit vocabulary Урока 08**
- Полный список слов с type/gender
- Пометить которые уже в SYN/ANT dict (Уроки 01-07), какие новые

**Agent 2 — Propose SYN/ANT pairs как A2-teacher**
- A2-уровневые пары ТОЛЬКО для новых слов Урока 08
- Строго A2, quality > quantity

### ФАЗА 2 — Расширить SYN/ANT dict (2 мин)

Добавить в `tools/gen-quiz-ru.js` (после Урока 07):
```js
// === Урок 08 ===
'слово_1': ['syn1', 'syn2'],
// ...
```

Проверить дубли с существующими ключами.

### ФАЗА 3 — Генерация 21 файла (10 сек)

```bash
cd C:/Lingua/Github/listening && \
node tools/gen-translation.js lesson-08 && \
node tools/gen-cards.js lesson-08 && \
node tools/gen-quiz-ru.js lesson-08 1 && \
node tools/gen-quiz-ru.js lesson-08 2 && \
node tools/gen-quiz-ru.js lesson-08 3 && \
node tools/gen-quiz-ru.js lesson-08 4 && \
node tools/gen-quiz-de.js lesson-08 1 && \
node tools/gen-quiz-de.js lesson-08 2 && \
node tools/gen-quiz-de.js lesson-08 3 && \
node tools/gen-quiz-de.js lesson-08 4
```

**Результат:** папка `notebooklm/lesson_08/` с **21 файлом**.

### ФАЗА 4 — Monitoring лимитов (1 мин)

После Урока 08 в блокноте `HörenWeg 5-8`: **~84 sources** (28% Pro 300). Блокнот будет полностью заполнен batch'ем 5-8.

**Стратегия:** после Урока 08 — создать **новый блокнот `HörenWeg 9-12`** для следующих уроков.

### ФАЗА 5 — Upload 21 source с префиксом `lesson_08_` (2 мин)

**21 вызов `notebook_add_text` параллельно.**

**⚠️ notebook_id** = `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`

**Upload titles:** `lesson_08_translation.md`, `lesson_08_cards_teil_N.md` × 4, `lesson_08_quiz_tN_<type>.md` × 16.

После upload — `notebook_get` → 21 новый `source_id`.

### ФАЗА 6 — Создать 20 артефактов (~5 мин) ⚠️

**🚨 КРИТИЧНО:** сохранять **полный UUID** из `response.artifact_id[0]`.
**🚨 СУТОЧНЫЙ ЛИМИТ:** NotebookLM позволяет ~20 studio-артефактов/день/account. Если это создаётся в тот же день что и другие уроки — может сработать лимит. При `artifact_id: ""` → остановиться, продолжить завтра.

**notebook_id** = `f42e6a86-...` во всех 20 вызовах.

**20 параллельных вызовов:**
- 4 × `flashcards_create` (cards_teil_1..4)
- 4 × `quiz_create(perevod)` (Teil 1-4)
- 4 × `quiz_create(syn_ant_ru)` (Teil 1-4)
- 4 × `quiz_create(kollok_ru)` (Teil 1-4)
- 4 × `quiz_create(kontext DE)` (Teil 1-4)

**focus_prompts:** стандартные из плана Урока 05/06.

### ФАЗА 7 — Rename 20 артефактов (2 мин) ⚠️

**Полные UUID!** Шаблон имён: `Урок 08 · Teil N · <Тип>` (5 типов × 4 Teil).

**ОБЯЗАТЕЛЬНАЯ DOM-верификация:**
1. `navigate` → блокнот `HörenWeg 5-8`
2. JS-скан (пауза 3 сек)
3. Ожидается: `total === 60` (Урок 05: 20, Урок 06: 20, Урок 07: 5, Урок 08: 20 = **65**). Или с учётом L07 (5 арт.) = **60**. Или с учётом orphan kontext_t4 L06 (если досоздан к этому моменту) = **61/65**.
4. `unnamed === 0`

### ФАЗА 8 — studio_status orphan check (1 мин)

```
studio_status(notebook_id: 'f42e6a86-...')
```

Ожидается: все артефакты из Уроков 05, 06, 07, 08 (≈60-65 в сумме).

### ФАЗА 9 — Обновить `notebooklm-links.js` (5 мин)

Добавить блок `'lesson-08'` с URL'ами формата `notebook/f42e6a86-.../?artifactId=<UUID>`.

**Verification:**
1. `node -c notebooklm-links.js` → OK
2. `#lesson-08/exercises` → 1 блок карточек + 4 teil-блока тестов
3. Кликнуть 3 случайные кнопки

---

## 🚨 Ловушки и решения (11 known issues)

| # | Ловушка | Решение |
|---|---|---|
| 1 | Kontext на английском | *"KOMPLETT AUF DEUTSCH... KEIN Russisch"* |
| 2 | Flashcards 63 вместо 24 | 2-col таблица + *"ONE card per row"* |
| 3 | Cold-start timeout MCP | Повторить вызов |
| 4 | Orphan-дубликаты | `studio_status` + `studio_delete` |
| 5 | `source_delete` broken | Форк `notebooklm-mcp-fork` |
| 6 | `studio_delete` broken | Форк: complex meta struct |
| 7 | `studio_rename` отсутствует | Форк: rpcid `rc3d8d` |
| 8 | `focus_prompt` position | Index 2 inner array |
| 9 | `notebook_get` кэш | Перезагрузить UI |
| 10 | `studio_rename` принимает префикс UUID как success | **Полный UUID** + DOM-верификация |
| 11 ℹ️ | **Суточный лимит NotebookLM** (~20/день, сбрасывается в 00:00) | При пустом `artifact_id` — продолжить завтра |

---

## ⚡ Mandatory checklist

- [ ] **notebook_id: `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`** во ВСЕХ MCP-вызовах
- [ ] В Фазе 6: сохранять **полный UUID** из `response.artifact_id[0]`
- [ ] **Bug #11:** при пустом `artifact_id` — стоп, завтра
- [ ] В Фазе 7: **только полные UUID** в `studio_rename`
- [ ] После Фазы 7: **DOM-верификация** через браузер (`unnamed === 0`)
- [ ] В Фазе 9: URL'ы на `notebook/f42e6a86-.../...`
- [ ] **После Урока 08:** создать новый блокнот `HörenWeg 9-12` для следующего batch'а

---

## 📁 Критичные файлы

| Файл | Действие |
|---|---|
| `tools/gen-quiz-ru.js` | EDIT (блок `// === Урок 08 ===`) |
| `notebooklm/lesson_08/*.md` | CREATE (21 файл) |
| `notebooklm-links.js` | EDIT (блок `'lesson-08'`) |
| `index.html` | **NO CHANGES** |

---

## 🎯 Success Criteria

- ✅ 20 артефактов Урока 08 в блокноте `HörenWeg 5-8`
- ✅ 20 URL в `notebooklm-links.js` → блок `lesson-08`
- ✅ На сайте `#lesson-08/exercises`: 1 блок карточек + 4 teil-блока тестов
- ✅ Карточек per Teil ≤ 24
- ✅ Блокнот `HörenWeg 5-8` **заполнен полностью** (Уроки 05-08)
- ✅ Подготовлен план для нового блокнота `HörenWeg 9-12`

---

## 🔄 После Урока 08 — планирование batch'а 9-12

1. Создать новый блокнот `HörenWeg 9-12` (через UI или `notebook_create` MCP)
2. Скопировать `promt_plan_lm_08.md` как шаблон для Уроков 09-12
3. Заменить notebook_id на новый при планировании
4. Продолжить стратегию: по 4 урока на блокнот
