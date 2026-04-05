# 🎯 Инженерный план: полное наполнение Урока 02 в NotebookLM

## Context

Урок 01 готов полностью: **9 sources + 20 артефактов** (4 карточки + 16 тестов). Все ссылки подключены к сайту через `notebooklm-links.js`. Теперь нужно **повторить workflow для Урока 02** используя всю наработанную инфраструктуру.

**Источник:** `lessons/lesson-02.js` → Goethe A2 Hören Modellsatz 2022 (Vid-92)
- Teil 1: 5 текстов, 41 слово
- Teil 2: 1 текст, 15 слов
- Teil 3: 5 текстов, 38 слов
- Teil 4: 1 текст, 15 слов

**Всего:** 109 уникальных слов, 12 мини-текстов.

**Naming convention (единый стандарт для всех уроков):**
- Все sources в NotebookLM используют префикс `lesson_XX_` (например `lesson_02_cards_teil_1.md`)
- 21 файл на урок: 1 translation + 4 cards + 16 quizzes

---

## 👨‍🏫 Роль: преподаватель немецкого A2

При курировании контента СТРОГО соблюдать:

| Принцип | Что делать |
|---|---|
| A1-слова — исключать | `der Mann`, `das Kind`, `sprechen`, `gehen`, `gut`, `schön` и т.д. (список в `tools/gen-cards.js` → `A1_EXCLUDE` set) |
| A2/B1 — оставлять | компаунды, сепарабельные глаголы, prepositional verbs, абстрактные существительные |
| Макс. 24 слова на Teil | автоматически в генераторе `gen-cards.js` |
| Примеры — из текстов | все Beispiel реальные из lesson-02.js vocabulary[].example |
| Синонимы/антонимы | только A2 пары (курировать вручную) |

---

## 📊 План по шагам

### ═══════════════════════════════════════
### ФАЗА 1 — Курирование контента (batch-agents)
### ═══════════════════════════════════════

**Цель:** проверить vocabulary урока-02, расширить SYN/ANT dict под новые слова.

**Launch 2 агента параллельно (Explore agents):**

#### Agent 1 — Audit vocabulary Урока 02
Задача: список всех 109 слов с type/gender + пометить какие уже есть в `gen-quiz-ru.js` SYN/ANT dict, какие новые. Выходной формат: markdown-таблица.

#### Agent 2 — Propose SYN/ANT pairs для новых слов
Задача: как A2-teacher, предложить **A2-уровневые синонимы/антонимы** для слов Урока 02, которых нет в текущем dict. Формат:
```js
SYN: { 'neues_wort': ['syn1', 'syn2'] }
ANT: { 'neues_wort': ['ant1'] }
```

**Время:** ~3 минуты (параллельно).

**Результат фазы:** список новых пар для добавления в `tools/gen-quiz-ru.js`.

---

### ═══════════════════════════════════════
### ФАЗА 2 — Расширить SYN/ANT dict
### ═══════════════════════════════════════

**Файл:** `tools/gen-quiz-ru.js` (строки 23-115, блоки `SYN` и `ANT`)

**Действие:** добавить секцию `// === Urok 02 ===` с парами от Agent 2.

**Время:** 2 минуты.

---

### ═══════════════════════════════════════
### ФАЗА 3 — Генерация 20 source-файлов (1 команда)
### ═══════════════════════════════════════

```bash
cd C:/Lingua/Github/listening && \
node tools/gen-translation.js lesson-02 && \
node tools/gen-cards.js lesson-02 && \
node tools/gen-quiz-ru.js lesson-02 1 && \
node tools/gen-quiz-ru.js lesson-02 2 && \
node tools/gen-quiz-ru.js lesson-02 3 && \
node tools/gen-quiz-ru.js lesson-02 4 && \
node tools/gen-quiz-de.js lesson-02 1 && \
node tools/gen-quiz-de.js lesson-02 2 && \
node tools/gen-quiz-de.js lesson-02 3 && \
node tools/gen-quiz-de.js lesson-02 4
```

**Результат:** папка `notebooklm/lesson_02/` с **21 файлом**:
- `lesson-02.md` — полный перевод всех 12 текстов (DE/дословно/литературно) × ~120 строк
- `cards_teil_1..4.md` (4 файла)
- `quiz_t1_perevod.md`, `quiz_t1_syn_ant_ru.md`, `quiz_t1_kontext.md`, `quiz_t1_kollok_ru.md`
- `quiz_t2_*.md` (4) · `quiz_t3_*.md` (4) · `quiz_t4_*.md` (4)

**Время:** 10 секунд.

---

### ═══════════════════════════════════════
### ФАЗА 4 — (опционально) Cleanup Урока 01 sources
### ═══════════════════════════════════════

**Только если используем Variant A (1 notebook на все 34 урока).**

Удалить 20 sources Урока 01 из NotebookLM (артефакты и URL'ы продолжают работать):
- 4 `cards_teil_*.md` Урока 01
- 16 `quiz_t*_*.md` Урока 01

**MCP calls:** 20 × `source_delete`.

**Важно:** делать ТОЛЬКО после верификации что все 20 артефактов Урока 01 работают на сайте (открываются по URL).

**Время:** 1 минута.

---

### ═══════════════════════════════════════
### ФАЗА 5 — Загрузить 21 source в NotebookLM с префиксом `lesson_XX_`
### ═══════════════════════════════════════

```
mcp__notebooklm-studio__notebook_add_text × 21
```
notebook_id: `1f985d5d-ef57-4050-8c06-24111ba1564b` (HörenWeg)

**Upload titles (СТРОГО с префиксом `lesson_XX_`):**
- `lesson_XX_translation.md` (файл локально: `lesson-XX.md`)
- `lesson_XX_cards_teil_1..4.md`
- `lesson_XX_quiz_t1_perevod.md`, `lesson_XX_quiz_t1_syn_ant_ru.md`, `lesson_XX_quiz_t1_kontext.md`, `lesson_XX_quiz_t1_kollok_ru.md`
- (то же для t2/t3/t4)

После загрузки — `notebook_get` чтобы получить 21 новых `source_id`.

**Время:** 2 минуты (параллельные вызовы).

---

### ═══════════════════════════════════════
### ФАЗА 6 — Сгенерировать 20 артефактов
### ═══════════════════════════════════════

#### 6a. 4 flashcards (по одной на Teil)
```
mcp__notebooklm-studio__flashcards_create × 4
```
Параметры:
- `source_ids`: один `cards_teil_N.md` source_id
- `difficulty`: `"medium"`
- `focus_prompt`: (тот же что для Урока 01 — см. ниже)

**focus_prompt для flashcards:**
> "Create ONLY vocabulary translation cards, strictly one card per row of the table. Front: German word EXACTLY as shown in "Deutsch" column (keep der/die/das articles). Back: Russian translation from "Русский" column + example sentence from "Пример" column. Do NOT create grammar questions, definitions, cloze tests, or "Переведите/Что означает" prompts. Total cards must equal the row count."

#### 6b. 12 Russian quizzes (3 типа × 4 Teil)
```
mcp__notebooklm-studio__quiz_create × 12
```

**Per type focus_prompt:**
- **perevod:** *"Создай тест на 10 вопросов формата multiple-choice. ВОПРОСЫ на русском, 4 варианта ответа — русские переводы немецких слов. Формулировка: «Как переводится немецкое слово "X"?»..."*
- **syn_ant_ru:** *"Создай тест на 10 вопросов. 50% синонимы, 50% антонимы. ВОПРОСЫ на русском: «Какой синоним к немецкому слову "X"?»..."*
- **kollok_ru:** *"Создай тест на 10 вопросов. Формат: немецкое предложение с пропуском (знак ___), 4 немецких варианта ответа..."*

#### 6c. 4 German Kontext quizzes (Hörverstehen)
```
mcp__notebooklm-studio__quiz_create × 4
```

**focus_prompt (всегда на немецком):**
> "Erstelle einen Multiple-Choice-Test mit 10 Fragen KOMPLETT AUF DEUTSCH. Alle Fragen, alle Antworten, alle Erklärungen MÜSSEN auf Deutsch sein. KEIN Russisch, KEIN Englisch. Thema: Hörverstehen des Textes. Benutze Fragetypen: Wer? Was? Wann? Warum? Wo?"

**Важно:** Kontext генерируется на немецком БЕЗ смены UI-языка notebook'а — это проверено на Уроке 01.

**Время:** ~5 минут (все вызовы параллельно, генерация NotebookLM ~30 сек каждая).

---

### ═══════════════════════════════════════
### ФАЗА 7 — Переименовать 20 артефактов
### ═══════════════════════════════════════

```
mcp__notebooklm-studio__studio_rename × 20
```

**Шаблоны имён:**
- `Урок 02 · Teil N · Карточки A2/B1` × 4 (flashcards)
- `Урок 02 · Teil N · Перевод лексики` × 4
- `Урок 02 · Teil N · Синонимы/Антонимы` × 4
- `Урок 02 · Teil N · Hörverstehen` × 4
- `Урок 02 · Teil N · Пропущенное слово` × 4

**Время:** 1 минута (batch parallel).

---

### ═══════════════════════════════════════
### ФАЗА 8 — Обновить `notebooklm-links.js`
### ═══════════════════════════════════════

Добавить новый блок:
```js
'lesson-02': {
  flashcards: { t1: '...', t2: '...', t3: '...', t4: '...' },
  quizzes: {
    // Teil 1
    perevod_t1, syn_ant_t1, kontext_t1, kollok_t1,
    // Teil 2
    perevod_t2, syn_ant_t2, kontext_t2, kollok_t2,
    // Teil 3
    perevod_t3, syn_ant_t3, kontext_t3, kollok_t3,
    // Teil 4
    perevod_t4, syn_ant_t4, kontext_t4, kollok_t4
  },
  audio: null,
  reports: null
}
```

URL-формат: `https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=<ID>`

**Время:** 3 минуты (собрать 20 artifact IDs из создания + подставить в шаблон).

---

### ═══════════════════════════════════════
### ФАЗА 9 — Verification
### ═══════════════════════════════════════

1. **Локально:**
   - 20 файлов в `notebooklm/lesson_02/` ✓
   - `node -c notebooklm-links.js` → OK ✓

2. **В NotebookLM:**
   - `studio_status` → 40 артефактов (20 lesson-01 + 20 lesson-02)
   - Открыть 3 теста наугад через Chrome — проверить что вопросы на правильном языке

3. **На сайте:**
   - Открыть `#lesson-02/exercises`
   - Должно быть 4 accordion-блока "📝 Teil N — Тесты (NotebookLM)" с 4 кнопками каждый
   - Плюс 1 блок "🃏 Флеш-карточки (NotebookLM)" с 4 кнопками
   - Кликнуть на 3 случайные кнопки — убедиться что открываются правильные артефакты

---

## 📁 Критичные файлы

| Файл | Действие |
|---|---|
| `tools/gen-quiz-ru.js` | Расширить SYN/ANT dict новыми парами |
| `notebooklm/lesson_02/*.md` | 20 новых файлов генератор сделает автоматом |
| `notebooklm-links.js` | Добавить блок `'lesson-02': {...}` |
| `index.html` | **БЕЗ ИЗМЕНЕНИЙ** — движок читает динамически через `window.NLM_LINKS[lesson.id]` |
| `tools/gen-cards.js`, `gen-quiz-de.js` | **БЕЗ ИЗМЕНЕНИЙ** — уже универсальные |

---

## ⏱ Оценка времени

| Фаза | Время |
|---|---|
| Курирование vocabulary + SYN/ANT (batch-agents) | 5 мин |
| Расширение SYN/ANT dict | 2 мин |
| Генерация 20 .md | 10 сек |
| (опц.) Cleanup lesson-01 sources | 1 мин |
| Upload 20 sources | 2 мин |
| Create 4 flashcards + 16 quizzes (parallel) | 5 мин |
| Rename 20 | 1 мин |
| Update notebooklm-links.js | 3 мин |
| Verification | 3 мин |
| **Итого** | **~22 мин** |

---

## 🔄 Шаблон на остальные 32 урока (lesson-03..34)

Этот план — **шаблон**. Для каждого следующего урока достаточно:
1. Запустить 2 agent'а для audit vocabulary + propose SYN/ANT (Фаза 1)
2. Добавить новые пары в dict (Фаза 2)
3. Выполнить Фазы 3-9 практически автоматически

**Потенциальная batch-обработка:** можно запустить 2-3 урока за раз, если подготовить весь контент заранее.

---

## 🎯 Success Criteria

- ✅ 20 артефактов созданы, переименованы, работают
- ✅ 20 URL в `notebooklm-links.js` → `lesson-02` блок
- ✅ Сайт `#lesson-02/exercises` показывает все блоки: 1 карточки + 4 teil-теста
- ✅ Все тесты на правильных языках (3 RU + 1 DE per Teil)
- ✅ Карточки = 24 слов (или меньше, если фильтр A1 убрал) per Teil
- ✅ Никаких orphan-артефактов в notebook'е

---

## ⚠️ Известные ловушки (из опыта Урока 01)

| Проблема | Решение |
|---|---|
| Kontext может выйти на английском | Явно в focus_prompt: "KOMPLETT AUF DEUTSCH" + упоминание "KEIN Russisch" |
| Flashcards генерируют 63 карточки вместо 24 | Формат source: 2-колоночная таблица + строгий focus_prompt "ONE flashcard per row" |
| MCP первый вызов после рестарта таймаутится | Повторить — второй проходит |
| Дубликаты при параллельных batch-вызовах | Проверять `studio_status` после создания, удалять orphans |
| notebook_get кэширует после delete | Перезагружать notebook через UI для визуальной проверки |

---

## 📌 Post-mortem: что сделать после lesson-02

1. **Обновить SKILL.md** если найдены новые паттерны/ловушки
2. **Протестировать на ученике** 3-4 теста из каждого типа — собрать фидбек
3. **Решить стратегию sources:** Variant A (cleanup после каждого урока) или Variant B (1 notebook на урок)
4. **Оценить реальное время** для lesson-02 → планировать batch на остальные 32
