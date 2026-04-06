# 🎯 Инженерный план: полное наполнение Урока 06 в NotebookLM

## Context

Уроки 01-04 готовы в NotebookLM **HörenWeg** (80 артефактов + 84 sources). Заведён **новый блокнот `HörenWeg 5-8`** для уроков 5-8 — разгружает основной (рост sources). Этот план — **для Урока 06** в новом блокноте со всеми исправлениями из опыта Уроков 01-04 (включая **bug #10** про UUID).

**Новый notebook_id:** `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`
**Блокнот:** `HörenWeg 5-8` (пустой, ownership: mine)

**Источник:** `lessons/lesson-06.js` → **Goethe A2 Hören — Modelltest 2025** (Vid=`sch4Y0FqOSs`)
- Тема: Geburtstag, Verkehr, Arztpraxis, Handball, Flughafen, Hochzeit, TV, Training, Arbeitsamt, Uni, Bar, Berlin
- Teil 1: 5 текстов, **~41 слово**
- Teil 2: 1 текст, **~13 слов**
- Teil 3: 5 текстов, **~63 слова**
- Teil 4: 1 текст, **~15 слов**
- Всего: **~132 уникальных слова**, 12 мини-текстов

**Naming convention:**
- Все sources с префиксом `lesson_06_` (20 sources + 1 translation = **21 файл**)
- Артефакты: `Урок 06 · Teil N · <Тип>`

---

## 👨‍🏫 Роль: преподаватель немецкого A2/B1

| Принцип | Действие |
|---|---|
| Исключать A1-базовые слова | автоматически через `A1_EXCLUDE` set в `tools/gen-cards.js` |
| Макс 24 слова на Teil | автоматически в `gen-cards.js` (.slice(0,24)) |
| Синонимы/антонимы | курировать вручную для новых слов Урока 06 |
| Примеры | только реальные из `lesson-06.js` → `vocabulary[].example` |

---

## 📊 9 фаз (~22 минуты)

### ═══════════════════════════════════════
### ФАЗА 1 — Batch-agents: курирование контента (5 мин)
### ═══════════════════════════════════════

**2 параллельных Explore-агента:**

**Agent 1 — Audit vocabulary Урока 06**
- Список ~132 слов с type/gender
- Пометить которые уже есть в текущем SYN/ANT dict (Уроки 01-04), какие новые

**Agent 2 — Propose SYN/ANT pairs как A2-teacher**
- A2-уровневые синонимы/антонимы ТОЛЬКО для новых слов Урока 06
- Формат: `SYN: { 'neues_wort': ['syn1', 'syn2'] }`, `ANT: { 'neues_wort': ['ant1'] }`
- Строго A2 (никаких B2+ пар)

**Результат:** список пар для добавления в секцию `// === Урок 06 ===` в `gen-quiz-ru.js`.

---

### ═══════════════════════════════════════
### ФАЗА 2 — Расширить SYN/ANT dict (2 мин)
### ═══════════════════════════════════════

**Файл:** `tools/gen-quiz-ru.js` (блоки `SYN` и `ANT`)

Добавить секции (после Урока 04):
```js
// === Урок 06 ===
'слово_1': ['syn1', 'syn2'],
'слово_2': ['syn1'],
// ...
```

---

### ═══════════════════════════════════════
### ФАЗА 3 — Генерация 21 файла (10 сек, 1 команда)
### ═══════════════════════════════════════

```bash
cd C:/Lingua/Github/listening && \
node tools/gen-translation.js lesson-06 && \
node tools/gen-cards.js lesson-06 && \
node tools/gen-quiz-ru.js lesson-06 1 && \
node tools/gen-quiz-ru.js lesson-06 2 && \
node tools/gen-quiz-ru.js lesson-06 3 && \
node tools/gen-quiz-ru.js lesson-06 4 && \
node tools/gen-quiz-de.js lesson-06 1 && \
node tools/gen-quiz-de.js lesson-06 2 && \
node tools/gen-quiz-de.js lesson-06 3 && \
node tools/gen-quiz-de.js lesson-06 4
```

**Результат:** папка `notebooklm/lesson_06/` с **21 файлом.**

---

### ═══════════════════════════════════════
### ФАЗА 4 — Monitoring лимитов (1 мин, опционально)
### ═══════════════════════════════════════

**Новый блокнот `HörenWeg 5-8`** — пустой на старте.

После Урока 06: **21 source** (3.5% от Pro 300) — большой запас для уроков 5, 7, 8.

После заполнения всех 4 уроков (5-8): ~84 sources (28% от лимита). Стратегия разделения по 4 урока на блокнот проверена.

---

### ═══════════════════════════════════════
### ФАЗА 5 — Upload 21 source с префиксом `lesson_06_` (2 мин)
### ═══════════════════════════════════════

**21 вызов `mcp__notebooklm-studio__notebook_add_text` параллельно.**

**⚠️ КРИТИЧНО:** `notebook_id` = `f42e6a86-eea1-4e36-8e6a-e9b47db0d869` (новый блокнот!)

**Upload titles (СТРОГО с префиксом `lesson_06_`):**

| Локальный файл | Upload title |
|---|---|
| `lesson-06.md` | `lesson_06_translation.md` |
| `cards_teil_1..4.md` × 4 | `lesson_06_cards_teil_N.md` × 4 |
| `quiz_tN_perevod.md` × 4 | `lesson_06_quiz_tN_perevod.md` × 4 |
| `quiz_tN_syn_ant_ru.md` × 4 | `lesson_06_quiz_tN_syn_ant_ru.md` × 4 |
| `quiz_tN_kontext.md` × 4 | `lesson_06_quiz_tN_kontext.md` × 4 |
| `quiz_tN_kollok_ru.md` × 4 | `lesson_06_quiz_tN_kollok_ru.md` × 4 |

После upload — `notebook_get(f42e6a86-...)` → получить 21 новый `source_id` (по именам файлов).

---

### ═══════════════════════════════════════
### ФАЗА 6 — Создать 20 артефактов (~5 мин) ⚠️
### ═══════════════════════════════════════

**🚨 КРИТИЧНО:** после каждого `create`-вызова **сохранять ПОЛНЫЙ UUID** (36 символов) из `response.artifact_id[0]`. Эти UUID понадобятся в Фазе 7.

**⚠️ notebook_id** = `f42e6a86-eea1-4e36-8e6a-e9b47db0d869` во всех 20 вызовах!

#### 6a. 4 Flashcards (по одному cards_teil_N source) — параллельно

**focus_prompt** (для всех 4):
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

**🚨 КРИТИЧНО (bug #10):** передавать **ПОЛНЫЙ UUID** артефакта (36 символов), а НЕ 8-символьный префикс. MCP возвращает `success` даже при неправильном ID, но rename silently **НЕ применяется**.

**notebook_id** = `f42e6a86-eea1-4e36-8e6a-e9b47db0d869` во всех 20 вызовах.

**ОБЯЗАТЕЛЬНАЯ верификация после Фазы 7:**
1. `mcp__Claude_in_Chrome__navigate` → `https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869`
2. JS-скан DOM (пауза 2.5-3 сек):
   ```js
   // ждём прогрузку через Promise
   new Promise(r => setTimeout(() => {
     const all = Array.from(document.querySelectorAll('*'));
     const matches = all.filter(el => /назад/i.test(el.textContent||'') && el.children.length === 0);
     const titles = matches.map(el => { /* traverse up */ }).filter(Boolean);
     const unnamed = titles.filter(t => !t.startsWith('Урок '));
     r({ total: titles.length, unnamed });
   }, 3500))
   ```
3. **Ожидается:** `total === 20`, `unnamed.length === 0` (в этом блокноте только Урок 06)

**Шаблон имён:**
- `Урок 06 · Teil N · Карточки A2/B1` × 4
- `Урок 06 · Teil N · Перевод лексики` × 4
- `Урок 06 · Teil N · Синонимы/Антонимы` × 4
- `Урок 06 · Teil N · Hörverstehen` × 4
- `Урок 06 · Teil N · Пропущенное слово` × 4

---

### ═══════════════════════════════════════
### ФАЗА 8 — Check on orphan artifacts (1 мин)
### ═══════════════════════════════════════

```
studio_status(notebook_id: 'f42e6a86-eea1-4e36-8e6a-e9b47db0d869')
```

**Ожидается:** ровно **20 артефактов** (только Урок 06, новый блокнот).

Если больше — удалить лишние через `studio_delete`.

---

### ═══════════════════════════════════════
### ФАЗА 9 — Обновить `notebooklm-links.js` + verification (5 мин)
### ═══════════════════════════════════════

Добавить новый блок (с **новым notebook_id**):
```js
'lesson-06': {
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
(с новым notebook_id `f42e6a86-...`, а НЕ старым `1f985d5d-...`)

**Verification:**
1. `node -c notebooklm-links.js` → OK
2. Открыть `#lesson-06/exercises` на сайте — должны появиться 4 accordion-блока тестов + 1 блок карточек
3. Кликнуть 3 случайные кнопки — убедиться что открываются из блокнота `HörenWeg 5-8`

---

## 🚨 Ловушки и решения (10 known issues из опыта Уроков 01-04)

| # | Ловушка | Решение |
|---|---|---|
| 1 | Kontext на английском | *"KOMPLETT AUF DEUTSCH... KEIN Russisch"* |
| 2 | Flashcards 63 вместо 24 | 2-col таблица + *"ONE card per row"* |
| 3 | Cold-start timeout MCP | Повторить вызов |
| 4 | Orphan-дубликаты | `studio_status` + `studio_delete` |
| 5 | `source_delete` в upstream broken | Форк `notebooklm-mcp-fork` |
| 6 | `studio_delete` в upstream broken | Форк: complex meta struct |
| 7 | `studio_rename` отсутствует в upstream | Форк: добавлен (rpcid `rc3d8d`) |
| 8 | `focus_prompt` position неизвестна | Index 2 inner array |
| 9 | `notebook_get` кэширует после delete | Перезагрузить UI |
| **10** 🆕 | **`studio_rename` принимает префикс UUID как success, но silently не применяется** | **ВСЕГДА полный UUID** (36 символов) + DOM-верификация через браузер |
| **11** ℹ️ | **Суточный лимит NotebookLM (не баг, а expected behavior):** ~20 studio-артефактов/день/account. `quiz_create`/`flashcards_create` возвращает `{"status":"success","artifact_id":""}` когда лимит исчерпан | Это нормальное ограничение платформы. При пустом `artifact_id` → остановить batch, **продолжить на следующий день** (лимит сбрасывается в 00:00 местного времени). Пропущенные артефакты — создать завтра через MCP или UI |

---

## ⚡ Mandatory checklist (обязательно для Урока 06)

- [ ] **notebook_id: `f42e6a86-eea1-4e36-8e6a-e9b47db0d869`** во ВСЕХ MCP-вызовах (не 1f985d5d!)
- [ ] В Фазе 6: сохранять **полный UUID** из `response.artifact_id[0]` после каждого create-вызова
- [ ] В Фазе 7: передавать в `studio_rename` **только полные UUID**
- [ ] После Фазы 7: **обязательная DOM-верификация** через браузер (URL блокнота `f42e6a86-...`)
- [ ] Пауза 2.5-3 сек в JS-скрипте для прогрузки DOM
- [ ] Если `unnamed.length > 0` — повторить rename с полными UUID
- [ ] В Фазе 9: URL'ы в `notebooklm-links.js` указывают на `notebook/f42e6a86-.../...`

---

## 📁 Критичные файлы

| Файл | Действие |
|---|---|
| `tools/gen-quiz-ru.js` | EDIT (блок `// === Урок 06 ===`) |
| `notebooklm/lesson_06/*.md` | CREATE (21 файл через генераторы) |
| `notebooklm-links.js` | EDIT (блок `'lesson-06'` с URL'ами нового блокнота) |
| `index.html` | **NO CHANGES** (движок динамический, читает URL из NLM_LINKS) |

---

## 🎯 Success Criteria

- ✅ 20 артефактов Урока 06 в блокноте `HörenWeg 5-8`
- ✅ 20 URL в `notebooklm-links.js` → блок `lesson-06` с новым notebook_id
- ✅ На сайте `#lesson-06/exercises`: 1 блок карточек + 4 teil-блока тестов
- ✅ Все тесты на правильных языках (3 RU + 1 DE per Teil)
- ✅ Количество карточек per Teil ≤ 24
- ✅ `studio_status(f42e6a86)` = ровно 20 артефактов
- ✅ DOM-верификация: `unnamed.length === 0`, `total === 20`
- ✅ Ссылки на сайте открывают блокнот `HörenWeg 5-8`

---

## 🔄 Шаблон для уроков 05, 07, 08

Те же 9 фаз, но с подстановкой:
- Урок 05 → `lesson-05.js`, секция `=== Урок 05 ===` в SYN/ANT, префикс `lesson_05_`
- Урок 07 → аналогично
- Урок 08 → аналогично

**Все 4 урока попадают в один блокнот** `HörenWeg 5-8` (notebook_id `f42e6a86-...`).

После Урока 08: ~84 sources в этом блокноте → следующий batch (9-12) → создать `HörenWeg 9-12`.

**Стратегия разделения:** по 4 урока на блокнот = 84 sources per notebook (28% Pro лимита) — безопасный запас.
