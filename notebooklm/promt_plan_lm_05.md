# 🎯 Инженерный план: полное наполнение Урока 05 в NotebookLM

## Context

Уроки 01-04 готовы в блокноте **HörenWeg** (80 артефактов), Урок 06 в обработке в новом блокноте **HörenWeg 5-8**. Этот план — **для Урока 05** в том же новом блокноте со всеми исправлениями из опыта Уроков 01-04 + 06.

**notebook_id:** `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`
**Блокнот:** `HörenWeg 5-8`

**Источник:** `lessons/lesson-05.js` → **Goethe A2 Hören — Modelltest 25** (Vid=`6DA1dYfqEZo`)
- Тема: Theater, Parkverbot, Wellness-Termin, Wetterbericht, Rente, Semesterferien и др.
- Teil 1: 5 текстов
- Teil 2: 1 текст
- Teil 3: 5 текстов
- Teil 4: 1 текст
- Всего: 12 мини-текстов

**Naming convention:**
- Все sources с префиксом `lesson_05_` (20 sources + 1 translation = **21 файл**)
- Артефакты: `Урок 05 · Teil N · <Тип>`

---

## 👨‍🏫 Роль: преподаватель немецкого A2/B1

| Принцип | Действие |
|---|---|
| Исключать A1-базовые слова | автоматически через `A1_EXCLUDE` set в `tools/gen-cards.js` |
| Макс 24 слова на Teil | автоматически в `gen-cards.js` (.slice(0,24)) |
| Синонимы/антонимы | курировать вручную для новых слов Урока 05 |
| Примеры | только реальные из `lesson-05.js` → `vocabulary[].example` |

---

## 📊 9 фаз (~22 минуты)

### ═══════════════════════════════════════
### ФАЗА 1 — Batch-agents: курирование контента (5 мин)
### ═══════════════════════════════════════

**2 параллельных Explore-агента:**

**Agent 1 — Audit vocabulary Урока 05**
- Полный список слов с type/gender
- Пометить которые уже есть в текущем SYN/ANT dict (Уроки 01-04, 06), какие новые

**Agent 2 — Propose SYN/ANT pairs как A2-teacher**
- A2-уровневые синонимы/антонимы ТОЛЬКО для новых слов Урока 05
- Формат: `'неом_слово': ['syn1']` / `'неом_слово': ['ant1']`
- Строго A2, никаких B1/B2 пар

**Результат:** список пар для секции `// === Урок 05 ===` в `gen-quiz-ru.js`.

---

### ═══════════════════════════════════════
### ФАЗА 2 — Расширить SYN/ANT dict (2 мин)
### ═══════════════════════════════════════

**Файл:** `tools/gen-quiz-ru.js` (блоки `SYN` и `ANT`)

Добавить секции (после Урока 06):
```js
// === Урок 05 ===
'слово_1': ['syn1', 'syn2'],
'слово_2': ['syn1'],
// ...
```

Проверить дубли с существующими ключами — grep по файлу перед добавлением.

---

### ═══════════════════════════════════════
### ФАЗА 3 — Генерация 21 файла (10 сек, 1 команда)
### ═══════════════════════════════════════

```bash
cd C:/Lingua/Github/listening && \
node tools/gen-translation.js lesson-05 && \
node tools/gen-cards.js lesson-05 && \
node tools/gen-quiz-ru.js lesson-05 1 && \
node tools/gen-quiz-ru.js lesson-05 2 && \
node tools/gen-quiz-ru.js lesson-05 3 && \
node tools/gen-quiz-ru.js lesson-05 4 && \
node tools/gen-quiz-de.js lesson-05 1 && \
node tools/gen-quiz-de.js lesson-05 2 && \
node tools/gen-quiz-de.js lesson-05 3 && \
node tools/gen-quiz-de.js lesson-05 4
```

**Результат:** папка `notebooklm/lesson_05/` с **21 файлом**.

---

### ═══════════════════════════════════════
### ФАЗА 4 — Monitoring лимитов (1 мин, опционально)
### ═══════════════════════════════════════

В блокноте `HörenWeg 5-8` после Урока 06 будет ~21 source. После Урока 05: ~42 sources (14% Pro 300).

**Решение:** продолжаем в том же блокноте. Урок 07 и 08 тоже добавим сюда.

---

### ═══════════════════════════════════════
### ФАЗА 5 — Upload 21 source с префиксом `lesson_05_` (2 мин)
### ═══════════════════════════════════════

**21 вызов `mcp__notebooklm-studio__notebook_add_text` параллельно.**

**⚠️ КРИТИЧНО:** `notebook_id` = `f42e6a86-eea1-4e36-8e6a-e9b47db0d869` (новый блокнот!)

**Upload titles (СТРОГО с префиксом `lesson_05_`):**

| Локальный файл | Upload title |
|---|---|
| `lesson-05.md` | `lesson_05_translation.md` |
| `cards_teil_1..4.md` × 4 | `lesson_05_cards_teil_N.md` × 4 |
| `quiz_tN_perevod.md` × 4 | `lesson_05_quiz_tN_perevod.md` × 4 |
| `quiz_tN_syn_ant_ru.md` × 4 | `lesson_05_quiz_tN_syn_ant_ru.md` × 4 |
| `quiz_tN_kontext.md` × 4 | `lesson_05_quiz_tN_kontext.md` × 4 |
| `quiz_tN_kollok_ru.md` × 4 | `lesson_05_quiz_tN_kollok_ru.md` × 4 |

После upload — `notebook_get(f42e6a86-...)` → получить 21 новый `source_id`.

---

### ═══════════════════════════════════════
### ФАЗА 6 — Создать 20 артефактов (~5 мин) ⚠️
### ═══════════════════════════════════════

**🚨 КРИТИЧНО:** после каждого `create`-вызова **сохранять ПОЛНЫЙ UUID** (36 символов) из `response.artifact_id[0]`.

**🆕 Bug #11 (найден на Уроке 06):** иногда `create` возвращает `artifact_id: ""` (пустая строка) при `status: "success"`. Если так — получить недостающий UUID через `studio_status` после того как все 20 create-вызовов завершены (сравнить с уже собранными).

**⚠️ notebook_id** = `f42e6a86-eea1-4e36-8e6a-e9b47db0d869` во всех 20 вызовах!

#### 6a. 4 Flashcards — параллельно

**focus_prompt:**
> Create ONLY vocabulary translation cards, strictly one card per row of the table. Front: German word EXACTLY as shown in "Deutsch" column (keep der/die/das articles). Back: Russian translation + example sentence from "Пример" column. Do NOT create grammar questions, definitions, cloze tests. Total cards must equal the row count.

#### 6b. 12 Russian Quizzes (3 типа × 4 Teil) — параллельно

| Тип | focus_prompt |
|---|---|
| **perevod** | Создай тест на 10 вопросов формата multiple-choice. ВОПРОСЫ на русском, 4 варианта ответа — русские переводы немецких слов. Формулировка: «Как переводится немецкое слово "X"?». Немецкое слово сохраняй в оригинале. Объяснения — на русском. |
| **syn_ant_ru** | Создай тест на 10 вопросов. 50% синонимы, 50% антонимы. ВОПРОСЫ на русском: «Какой синоним к немецкому слову "X"?» или «Какой антоним...?». ВАРИАНТЫ ОТВЕТА — немецкие слова из таблиц источника. Объяснение — на русском. |
| **kollok_ru** | Создай тест на 10 вопросов. Формат: немецкое предложение с пропуском (знак ___), 4 немецких варианта ответа. ВОПРОС на русском: «Какое слово пропущено в предложении: "..."?». Объяснение с полным предложением на русском. |

#### 6c. 4 German Kontext Quizzes (Hörverstehen) — параллельно

**focus_prompt:**
> Erstelle einen Multiple-Choice-Test mit 10 Fragen KOMPLETT AUF DEUTSCH. Alle Fragen, alle Antworten, alle Erklärungen MÜSSEN auf Deutsch sein. KEIN Russisch, KEIN Englisch. Thema: Hörverstehen des Textes. Benutze Fragetypen: Wer? Was? Wann? Warum? Wo?

---

### ═══════════════════════════════════════
### ФАЗА 7 — Rename 20 артефактов (2 мин) ⚠️
### ═══════════════════════════════════════

**🚨 КРИТИЧНО (bug #10):** передавать **ПОЛНЫЙ UUID** (36 символов), а не 8-символьный префикс.

**notebook_id** = `f42e6a86-eea1-4e36-8e6a-e9b47db0d869` во всех 20 вызовах.

**ОБЯЗАТЕЛЬНАЯ верификация после Фазы 7:**
1. `mcp__Claude_in_Chrome__navigate` → `https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869`
2. JS-скан DOM (пауза 2.5-3 сек) — искать артефакты без префикса "Урок "
3. **Ожидается:** в этом блокноте будут артефакты Урока 05 И Урока 06 → `total === 40`, `unnamed.length === 0`

**Шаблон имён:**
- `Урок 05 · Teil N · Карточки A2/B1` × 4
- `Урок 05 · Teil N · Перевод лексики` × 4
- `Урок 05 · Teil N · Синонимы/Антонимы` × 4
- `Урок 05 · Teil N · Hörverstehen` × 4
- `Урок 05 · Teil N · Пропущенное слово` × 4

---

### ═══════════════════════════════════════
### ФАЗА 8 — Check on orphan artifacts (1 мин)
### ═══════════════════════════════════════

```
studio_status(notebook_id: 'f42e6a86-eea1-4e36-8e6a-e9b47db0d869')
```

**Ожидается:** ровно **40 артефактов** (Урок 05 + Урок 06).

Если больше — удалить лишние через `studio_delete`.

---

### ═══════════════════════════════════════
### ФАЗА 9 — Обновить `notebooklm-links.js` + verification (5 мин)
### ═══════════════════════════════════════

Добавить блок (с **новым notebook_id**):
```js
'lesson-05': {
  flashcards: {
    t1: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=...',
    t2: '...', t3: '...', t4: '...'
  },
  quizzes: {
    perevod_t1, syn_ant_t1, kontext_t1, kollok_t1,
    perevod_t2, syn_ant_t2, kontext_t2, kollok_t2,
    perevod_t3, syn_ant_t3, kontext_t3, kollok_t3,
    perevod_t4, syn_ant_t4, kontext_t4, kollok_t4
  },
  audio: null,
  reports: null
}
```

**⚠️ URL-формат:** `https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=<ID>`

**Verification:**
1. `node -c notebooklm-links.js` → OK
2. Открыть `#lesson-05/exercises` на сайте — 4 teil-блока тестов + 1 блок карточек
3. Кликнуть 3 случайные кнопки

---

## 🚨 Ловушки и решения (11 known issues)

| # | Ловушка | Решение |
|---|---|---|
| 1 | Kontext на английском | *"KOMPLETT AUF DEUTSCH... KEIN Russisch"* |
| 2 | Flashcards 63 вместо 24 | 2-col таблица + *"ONE card per row"* |
| 3 | Cold-start timeout MCP | Повторить вызов |
| 4 | Orphan-дубликаты | `studio_status` + `studio_delete` |
| 5 | `source_delete` в upstream broken | Форк `notebooklm-mcp-fork` |
| 6 | `studio_delete` в upstream broken | Форк: complex meta struct |
| 7 | `studio_rename` отсутствует в upstream | Форк: rpcid `rc3d8d` |
| 8 | `focus_prompt` position неизвестна | Index 2 inner array |
| 9 | `notebook_get` кэширует после delete | Перезагрузить UI |
| 10 | `studio_rename` принимает префикс UUID как success, но silently не применяется | **Полный UUID** (36 символов) + DOM-верификация |
| **11** ℹ️ | **Суточный лимит NotebookLM (не баг, а expected behavior):** ~20 studio-артефактов/день/account | При пустом `artifact_id` в ответе — лимит исчерпан на сегодня. Решение: продолжить завтра (лимит сбрасывается в 00:00). Это нормальное ограничение NotebookLM Pro, не ошибка |

---

## ⚡ Mandatory checklist (обязательно для Урока 05)

- [ ] **notebook_id: `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`** во ВСЕХ MCP-вызовах
- [ ] В Фазе 6: сохранять **полный UUID** из `response.artifact_id[0]`
- [ ] **Bug #11:** проверять каждый response — если `artifact_id: ""`, пометить source_id как "missing artifact"
- [ ] После Фазы 6: сверить количество полученных UUIDs с 20 — если меньше, через `studio_status` найти пропущенные
- [ ] В Фазе 7: **только полные UUID** в `studio_rename`
- [ ] После Фазы 7: **DOM-верификация** через браузер (40 named, 0 unnamed)
- [ ] В Фазе 9: URL'ы указывают на `notebook/f42e6a86-.../...`

---

## 📁 Критичные файлы

| Файл | Действие |
|---|---|
| `tools/gen-quiz-ru.js` | EDIT (блок `// === Урок 05 ===`) |
| `notebooklm/lesson_05/*.md` | CREATE (21 файл) |
| `notebooklm-links.js` | EDIT (блок `'lesson-05'`) |
| `index.html` | **NO CHANGES** |

---

## 🎯 Success Criteria

- ✅ 20 артефактов Урока 05 в блокноте `HörenWeg 5-8`
- ✅ 20 URL в `notebooklm-links.js` → блок `lesson-05`
- ✅ На сайте `#lesson-05/exercises`: 1 блок карточек + 4 teil-блока тестов
- ✅ Карточек per Teil ≤ 24
- ✅ `studio_status(f42e6a86)` = 40 артефактов (Урок 05 + Урок 06)
- ✅ DOM-верификация: `unnamed.length === 0`, `total === 40`
- ✅ Bug #11: ни одного артефакта без UUID
