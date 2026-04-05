# 🎯 Инженерный план: полное наполнение Урока 03 в NotebookLM

## Context

Уроки 01 и 02 готовы в NotebookLM: **40 артефактов + 42 sources** (21 на урок). Шаблон workflow отлажен в `promt_plan_lm_02.md`. Этот план — **для Урока 03** со всеми исправлениями и доработками из предыдущего опыта.

**Источник:** `lessons/lesson-03.js` → **Goethe A2 Hören — Modelltest 2025** (Vid=`zcTTeztCet4`)
- Teil 1: 5 текстов, **42 слова**
- Teil 2: 1 текст, **16 слов**
- Teil 3: 5 текстов, **35 слов**
- Teil 4: 1 текст, **16 слов**
- Всего: **109 уникальных слов**, 12 мини-текстов

**Naming convention (единый стандарт):**
- Все sources в NotebookLM с префиксом `lesson_03_` (20 sources + 1 translation = **21 файл**)
- Артефакты: `Урок 03 · Teil N · <Тип>`

---

## 👨‍🏫 Роль: преподаватель немецкого A2/B1

| Принцип | Действие |
|---|---|
| Исключать A1-базовые слова | автоматически через `A1_EXCLUDE` set в `tools/gen-cards.js` |
| Макс 24 слова на Teil | автоматически в `gen-cards.js` (.slice(0,24)) |
| Синонимы/антонимы | курировать вручную для новых слов Урока 03 |
| Примеры | только реальные из `lesson-03.js` → `vocabulary[].example` |

---

## 📊 9 фаз (~22 минуты)

### ═══════════════════════════════════════
### ФАЗА 1 — Batch-agents: курирование контента (5 мин)
### ═══════════════════════════════════════

**2 параллельных Explore-агента:**

**Agent 1 — Audit vocabulary Урока 03**
- Список 109 слов с type/gender
- Пометить которые уже есть в текущем SYN/ANT dict (Уроки 01-02), какие новые

**Agent 2 — Propose SYN/ANT pairs как A2-teacher**
- A2-уровневые синонимы/антонимы ТОЛЬКО для новых слов Урока 03
- Формат: `SYN: { 'neues_wort': ['syn1', 'syn2'] }`, `ANT: { 'neues_wort': ['ant1'] }`
- Строго A2 (никаких B2+ пар)

**Результат:** список пар для добавления в секцию `// === Урок 03 ===` в `gen-quiz-ru.js`.

---

### ═══════════════════════════════════════
### ФАЗА 2 — Расширить SYN/ANT dict (2 мин)
### ═══════════════════════════════════════

**Файл:** `tools/gen-quiz-ru.js` (блоки `SYN` и `ANT`, строки ~23-180)

Добавить секции (после Урока 02):
```js
// === Урок 03 ===
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
node tools/gen-translation.js lesson-03 && \
node tools/gen-cards.js lesson-03 && \
node tools/gen-quiz-ru.js lesson-03 1 && \
node tools/gen-quiz-ru.js lesson-03 2 && \
node tools/gen-quiz-ru.js lesson-03 3 && \
node tools/gen-quiz-ru.js lesson-03 4 && \
node tools/gen-quiz-de.js lesson-03 1 && \
node tools/gen-quiz-de.js lesson-03 2 && \
node tools/gen-quiz-de.js lesson-03 3 && \
node tools/gen-quiz-de.js lesson-03 4
```

**Результат:** папка `notebooklm/lesson_03/` с **21 файлом:**
- `lesson-03.md` (translation, ~30 KB)
- `cards_teil_1..4.md` (4 файла)
- `quiz_t1_perevod.md`, `quiz_t1_syn_ant_ru.md`, `quiz_t1_kontext.md`, `quiz_t1_kollok_ru.md`
- `quiz_t2_*.md` (4) · `quiz_t3_*.md` (4) · `quiz_t4_*.md` (4)

---

### ═══════════════════════════════════════
### ФАЗА 4 — Monitoring лимитов (1 мин, опционально)
### ═══════════════════════════════════════

Текущий учёт sources в notebook:
- Урок 01: 20 sources (`lesson_01_*`)
- Урок 02: 20 sources (`lesson_02_*`)
- translations × 2: 2 sources (`lesson_01_translation.md`, `lesson_02_translation.md`)
- YouTube source: 1
- Итого: **43 sources** (из лимита 300 Pro)

После Урока 03: **64 sources** → 21% от лимита.

**Решение на сейчас:** **НЕ** чистить sources Уроков 01/02. Место есть до урока ~13.

---

### ═══════════════════════════════════════
### ФАЗА 5 — Upload 21 source с префиксом `lesson_03_` (2 мин)
### ═══════════════════════════════════════

**21 вызов `mcp__notebooklm-studio__notebook_add_text` параллельно.**

**Upload titles (СТРОГО с префиксом `lesson_03_`):**

| Локальный файл | Upload title |
|---|---|
| `lesson-03.md` | `lesson_03_translation.md` |
| `cards_teil_1.md` | `lesson_03_cards_teil_1.md` |
| `cards_teil_2.md` | `lesson_03_cards_teil_2.md` |
| `cards_teil_3.md` | `lesson_03_cards_teil_3.md` |
| `cards_teil_4.md` | `lesson_03_cards_teil_4.md` |
| `quiz_t1_perevod.md` | `lesson_03_quiz_t1_perevod.md` |
| `quiz_t1_syn_ant_ru.md` | `lesson_03_quiz_t1_syn_ant_ru.md` |
| `quiz_t1_kontext.md` | `lesson_03_quiz_t1_kontext.md` |
| `quiz_t1_kollok_ru.md` | `lesson_03_quiz_t1_kollok_ru.md` |
| ...и так для Teil 2, 3, 4 (по 4 файла) | |

notebook_id: `1f985d5d-ef57-4050-8c06-24111ba1564b`

После upload — `notebook_get` → получить 21 новый `source_id` (по именам файлов).

---

### ═══════════════════════════════════════
### ФАЗА 6 — Создать 20 артефактов (~5 мин)
### ═══════════════════════════════════════

#### 6a. 4 Flashcards (по одному cards_teil_N source)

```
flashcards_create × 4 параллельно
```

**focus_prompt** (для всех 4):
> Create ONLY vocabulary translation cards, strictly one card per row of the table. Front: German word EXACTLY as shown in "Deutsch" column (keep der/die/das articles). Back: Russian translation + example sentence from "Пример" column. Do NOT create grammar questions, definitions, cloze tests. Total cards must equal the row count.

#### 6b. 12 Russian Quizzes (3 типа × 4 Teil)

```
quiz_create × 12 параллельно
```

**focus_prompts (по типу):**

| Тип | focus_prompt |
|---|---|
| **perevod** | Создай тест на 10 вопросов формата multiple-choice. ВОПРОСЫ на русском, 4 варианта ответа — русские переводы немецких слов. Формулировка: «Как переводится немецкое слово "X"?». Немецкое слово сохраняй в оригинале. Объяснения — на русском. |
| **syn_ant_ru** | Создай тест на 10 вопросов. 50% синонимы, 50% антонимы. ВОПРОСЫ на русском: «Какой синоним к немецкому слову "X"?» или «Какой антоним...?». ВАРИАНТЫ ОТВЕТА — немецкие слова из таблиц источника. Объяснение — на русском. |
| **kollok_ru** | Создай тест на 10 вопросов. Формат: немецкое предложение с пропуском (знак ___), 4 немецких варианта ответа. ВОПРОС на русском: «Какое слово пропущено в предложении: "..."?». Объяснение с полным предложением на русском. |

#### 6c. 4 German Kontext Quizzes (Hörverstehen)

```
quiz_create × 4 параллельно
```

**focus_prompt (всегда на немецком):**
> Erstelle einen Multiple-Choice-Test mit 10 Fragen KOMPLETT AUF DEUTSCH. Alle Fragen, alle Antworten, alle Erklärungen MÜSSEN auf Deutsch sein. KEIN Russisch, KEIN Englisch. Thema: Hörverstehen des Textes. Benutze Fragetypen: Wer? Was? Wann? Warum? Wo?

**Важно:** UI language switch НЕ нужен — проверено на Уроках 01 и 02, focus_prompt на немецком достаточен.

---

### ═══════════════════════════════════════
### ФАЗА 7 — Rename 20 артефактов (1 мин) ⚠️
### ═══════════════════════════════════════

```
studio_rename × 20 параллельно
```

**🚨 КРИТИЧНО (урок из опыта Урока 03):**
Передавать **ПОЛНЫЙ UUID** артефакта (`bb48df44-4d64-444b-b86b-a25ee5a3e529`), а **НЕ** 8-символьный префикс (`bb48df44`). MCP tool возвращает `{"status":"success","message":"Artifact renamed"}` даже когда передан укороченный префикс, но на сервере RPC молча **не находит** артефакт и rename **НЕ применяется**. HTTP 200, но реального переименования нет.

**Откуда брать UUID:** после создания артефактов записывать полные ID из ответа `flashcards_create`/`quiz_create`, либо получать через `studio_status` (возвращает полные UUID).

**ОБЯЗАТЕЛЬНАЯ верификация после Фазы 7:**
1. Навигация к notebook в браузере (`mcp__Claude_in_Chrome__navigate`)
2. JS-проверка titles в DOM:
   ```js
   const all = Array.from(document.querySelectorAll('*'));
   const matches = all.filter(el => /назад/i.test(el.textContent) && el.children.length === 0);
   const titles = matches.map(el => { /* traverse up to card */ }).filter(Boolean);
   const unnamed = titles.filter(t => !t.startsWith('Урок '));
   // Должно быть: unnamed.length === 0
   ```
3. Если `unnamed.length > 0` — повторить rename с полными UUID

**Шаблон имён:**
- `Урок 03 · Teil N · Карточки A2/B1` × 4 (flashcards)
- `Урок 03 · Teil N · Перевод лексики` × 4
- `Урок 03 · Teil N · Синонимы/Антонимы` × 4
- `Урок 03 · Teil N · Hörverstehen` × 4
- `Урок 03 · Teil N · Пропущенное слово` × 4

---

### ═══════════════════════════════════════
### ФАЗА 8 — Check on orphan artifacts (1 мин) 🆕
### ═══════════════════════════════════════

```
studio_status
```

**Ожидается:** 60 артефактов (20 Урок 01 + 20 Урок 02 + 20 Урок 03).

Если больше — найти лишние (не привязанные к `notebooklm-links.js`) и удалить через `studio_delete`.

```bash
# Извлечь используемые IDs
grep -oE "artifactId=[a-f0-9-]+" notebooklm-links.js | sort -u
```

---

### ═══════════════════════════════════════
### ФАЗА 9 — Обновить `notebooklm-links.js` + verification (5 мин)
### ═══════════════════════════════════════

Добавить новый блок:
```js
'lesson-03': {
  flashcards: { t1, t2, t3, t4 },
  quizzes: {
    perevod_t1, syn_ant_t1, kontext_t1, kollok_t1,  // Teil 1
    perevod_t2, syn_ant_t2, kontext_t2, kollok_t2,  // Teil 2
    perevod_t3, syn_ant_t3, kontext_t3, kollok_t3,  // Teil 3
    perevod_t4, syn_ant_t4, kontext_t4, kollok_t4   // Teil 4
  },
  audio: null,
  reports: null
}
```

URL-формат: `https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=<ID>`

**Verification:**
1. `node -c notebooklm-links.js` → OK
2. Открыть `#lesson-03/exercises` на сайте — должны появиться 4 accordion-блока тестов + 1 блок карточек
3. Кликнуть 3 случайные кнопки — убедиться что открываются правильные артефакты

---

## 🚨 Ловушки и решения (из опыта Уроков 01-02)

| # | Ловушка | Решение |
|---|---|---|
| 1 | Kontext на английском вместо немецкого | Сильный focus_prompt: *"KOMPLETT AUF DEUTSCH... KEIN Russisch, KEIN Englisch"* — UI language switch НЕ нужен |
| 2 | Flashcards генерируют 63 вместо 24 | 2-col таблица + focus_prompt: *"ONE card per row... Total cards must equal the row count"* |
| 3 | Cold-start timeout на первом MCP-вызове после рестарта | Повторить — второй вызов проходит |
| 4 | Orphan-дубликаты после batch | После ФАЗЫ 7 делать `studio_status` и удалять лишние через `studio_delete` |
| 5 | `source_delete` в upstream broken | Используем форк `notebooklm-mcp-fork` (params `[[[sourceId]], [2]]`) |
| 6 | `studio_delete` в upstream broken | Форк: params `[[2,null,null,[1,...],[[1,4,2,3,6,5]]], artifactId]` |
| 7 | `studio_rename` отсутствует в upstream | Форк: добавлен (rpcid `rc3d8d`) |
| 8 | `focus_prompt` position неизвестна | Проверено: **index 2** inner array (из `teng-lin/notebooklm-py`) |
| 9 | notebook_get кэширует после delete | Перезагрузить UI для визуальной проверки |
| 10 | **studio_rename принимает префикс ID как success, но rename silently не применяется** 🆕 | **ВСЕГДА передавать ПОЛНЫЙ UUID** артефакта (36 символов). Брать UUID из ответа create-вызова или из `studio_status`. Обязательно верифицировать через браузер после rename — DOM не содержит префикса "Урок " = rename failed |

---

## 📁 Критичные файлы

| Файл | Действие |
|---|---|
| `tools/gen-quiz-ru.js` | EDIT (добавить `// === Урок 03 ===` блок в SYN/ANT dict) |
| `notebooklm/lesson_03/*.md` | CREATE (21 файл генераторами) |
| `notebooklm-links.js` | EDIT (добавить блок `'lesson-03'` с 20 URL) |
| `index.html` | **NO CHANGES** (движок динамический) |
| `tools/gen-translation.js` | **NO CHANGES** (универсальный) |
| `tools/gen-cards.js` | **NO CHANGES** (универсальный) |
| `tools/gen-quiz-de.js` | **NO CHANGES** (универсальный) |

---

## 🎯 Success Criteria

- ✅ 20 артефактов Урока 03 созданы, переименованы, работают
- ✅ 20 URL в `notebooklm-links.js` → блок `lesson-03`
- ✅ На сайте `#lesson-03/exercises`: 1 блок карточек + 4 teil-блока тестов
- ✅ Все тесты на правильных языках (3 RU + 1 DE per Teil)
- ✅ Количество карточек per Teil ≤ 24
- ✅ Никаких orphan-артефактов (studio_status = 60 ровно)
- ✅ Общее количество sources в notebook ≤ 64 (в пределах Pro лимита)

---

## 🔄 Шаблон для уроков 04-34

Этот план — **универсальный шаблон**. Для урока N:
1. Создать `promt_plan_lm_NN.md` (копия этого файла с подстановкой номера)
2. Проверить vocabulary count: `node -e "..." | grep 'Teil'`
3. Запустить 2 agent'а для audit + SYN/ANT curation
4. Выполнить Фазы 2-9

**Batch potential:** можно подготовить content для 2-3 уроков параллельно (Фаза 1 — independent), потом последовательно upload + create (Фазы 5-9).

---

## ⚡ Mandatory checklist для урока 04+ (из опыта Урока 03)

- [ ] После каждого `flashcards_create` / `quiz_create` сохранить **ПОЛНЫЙ UUID** артефакта (36 символов) из ответа — это критично для Фазы 7
- [ ] В Фазе 7 в `studio_rename` передавать **только полные UUID** (а не 8-символьные префиксы) — иначе silently no-op
- [ ] После Фазы 7 **обязательная верификация в браузере**: `mcp__Claude_in_Chrome__navigate` + JS-скан DOM на `unnamed.length === 0`
- [ ] При первом сканировании DOM может не успеть прогрузиться — пауза 2.5-3 сек или повторная проверка
- [ ] Если после rename остались артефакты без префикса "Урок NN" — это bug #10, повторить с полными UUID
