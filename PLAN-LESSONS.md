# HörenWeg — План добавления 34 уроков аудирования

## Статус
- **Уроки 1-2:** Готовы (эталон)
- **Уроки 3-34:** Нужно добавить (32 урока)
- **Источник данных:** `list/Аудирование Немецкий A2 - Таблица уроков.xlsx`

---

## Таблица уроков

| № | Vid | Название | YouTube | Claude Share |
|---|-----|----------|---------|-------------|
| 1 | 65 | A2 Hören Modelltest 2022 (Vid-65) | ✅ Готов | ✅ Готов |
| 2 | 92 | A2 Hören Modellsatz 2022 (Vid-92) | ✅ Готов | ✅ Готов |
| 3 | 72 | Hören und Lesen Modelltest (Vid-72) | `zcTTeztCet4` | `2624cfe4-...` |
| 4 | 70 | Hören und Schreiben Netzwerk A2 (Vid-70) | `Ni-yqg7_-FI` | `8b505fad-...` |
| 5 | 58 | A2 Hören Modelltest 2022 (Vid-58) | `6DA1dYfqEZo` | `07a69858-...` |
| 6 | 57 | A2 Hören Modelltest 2022 (Vid-57) | `sch4Y0FqOSs` | `6c5c4bca-...` |
| 7 | 38 | Start Deutsch A2 Hören Teil 1 (Vid-38) | `erhuXReIP1I` | `dfc68a60-...` |
| 8 | 22 | Start Deutsch A2 Hören | `Iud2ji70B4I` | `cd1ec408-...` |
| 9 | 44 | A2 Hören Modelltest (Vid-44) | `SkfKD1zHaS0` | `2d6928b8-...` |
| 10 | 63 | A2 Hören Modelltest (Vid-63) | `BwnkKgyANFM` | `2e46a0fd-...` |
| 11 | 68 | A2 Hören Modelltest (Vid-68) | `ksr89-8r0R0` | `93fbfff6-...` |
| 12 | 98 | Hören Lesen Schreiben 2022 (Vid-98) | `_fyYwSOJHCo` | `d50e2ee7-...` |
| 13 | 107 | A2 Hören Teil 3 (Vid-107) | `vsYLsI4YZeM` | `fa0943e9-...` |
| 14 | 109 | A2 Hören 2022 (Vid-109) | `KcMRP_OLBNs` | `efdfffdd-...` |
| 15 | 111 | Hören und Lesen (Vid-111) | `6H1AwyEg26E` | `b7cb2e1f-...` |
| 16 | 123 | A2 Hören 2023 (Vid-123) | `CMkncebWA4s` | `f96c8844-...` |
| 17 | 133 | Hören Lesen 2023 | `LA8qCfrSn5Y` | `d0c04ed9-...` |
| 18 | 147 | A2 Hören 2023 | `bSfW5fPFaOg` | `f63a589d-...` |
| 19 | 150 | Hören Lesen 2023 (Vid-150) | `XXGd-ZXvg38` | `a20b1dd8-...` |
| 20 | 151 | Hören Lesen | `CI6DucvPTEg` | `427069d4-...` |
| 21 | 156 | A2 Hören Modelltest | `frlYKKUrYBQ` | `274bf919-...` |
| 22 | 159 | Hören Lesen | `pMc9iO_fzSU` | `f621a95b-...` |
| 23 | 172 | Hören Lesen | `FRRq_hPXins` | `27e396a4-...` |
| 24 | 173 | A2 Hören | `QTfCOUW5Mv8` | `0e566db7-...` |
| 25 | 177 | Hören und Schreiben | `9han3GbX17Q` | `02b11862-...` |
| 26 | 182 | A2 Hören 2023 | `Hlq24tX9zCs` | `4b0a6d4d-...` |
| 27 | 183 | Hören Lesen Schreiben (Neu) 2023 | `_8ER4CnCsyo` | `0dea2f20-...` |
| 28 | 199 | A2 Hören | `e31Urm5lgIg` | `7a5ca2d3-...` |
| 29 | 207 | Hören Lesen Schreiben 2024 | `vwOQhovoxiw` | `1a80eacc-...` |
| 30 | 210 | A2 Hören | `mr0i4G25oLg` | `645df585-...` |
| 31 | 215 | A2 Hören 2024 | `JqwheKGKZs8` | `48368640-...` |
| 32 | 227 | Hören Lesen 2024 | `Yx3R2H9Pm9U` | `a30ea3a9-...` |
| 33 | 235 | Hören Lesen 2024 | `U6uVxR0tHiI` | `80147978-...` |
| 34 | 251 | Hören Lesen Schreiben 2025 | `_yF07njlb9I` | `de5d75c4-...` |

---

## Эталонная структура (из уроков 1-2)

Каждый урок включает:
- **lesson-XX.js** (~700-1500 строк):
  - 12 мини-текстов (texts[]) с: text, sentenceTranslations, vocabulary, question
  - Агрегирующие геттеры: vocabulary, sentenceTranslations, comprehensionQuiz
  - grammarFocus (5-10 тем)
  - 24 промта: exercises/original/translation/grammar + 20 per-Teil
- **tasks/lesson-XX-raw.txt** — сырые данные из Claude.ai чата
- **index.html** — добавить `<script src="lessons/lesson-XX.js"></script>`

### Правила качества (из ошибок уроков 1-2):
1. **sentenceTranslations** — ключи = ТОЧНО `text.split(/(?<=[.!?])\s+/)`. Проверять regex.
2. **vocabulary.example** — ОБЯЗАТЕЛЬНО реальное предложение из text.
3. **Существительные** — der/die/das + gender + plural. Глаголы — type:'verb', БЕЗ gender.
4. **Промты** — по 4 на тип (vocabulary_t1-t4 и т.д.), каждый только про свой Teil.
5. **Автоматический тест** — 0 MISSING sentenceTranslations для каждого Teil.

---

## Конвейер добавления одного урока

Для каждого урока N (3-34) выполняются 6 шагов:

### Шаг 1: Извлечение контента (Агент "Extractor")
```
Вход: Claude share ссылка из таблицы
Действия:
  1. Открыть расшаренный чат через Chrome MCP
  2. Прочитать весь текст (~60-100K символов)
  3. Сохранить в tasks/lesson-{NN}-raw.txt
Выход: tasks/lesson-{NN}-raw.txt
```

### Шаг 2: Создание данных урока (Агент "Builder")
```
Вход: tasks/lesson-{NN}-raw.txt + lesson-01.js (эталон) + CLAUDE.md
Действия:
  1. Парсить 4 ЧАСТИ из сырого файла
  2. Создать lessons/lesson-{NN}.js по эталону:
     - 12 texts[] с text, sentenceTranslations, vocabulary, question
     - grammarFocus, videoUrl
     - Геттеры (скопировать из lesson-01.js)
  3. Валидировать JS синтаксис: node -c
Выход: lessons/lesson-{NN}.js (без промтов)
```

### Шаг 3: Валидация данных (Агент "Validator")
```
Вход: lessons/lesson-{NN}.js
Действия:
  1. sentenceTranslations: regex-тест → 0 MISSING для каждого Teil
  2. vocabulary: все существительные с der/die/das + gender + example
  3. vocabulary: все глаголы без gender, с type:'verb' + example
  4. question: correct индекс → правильный ответ (сверить с ЧАСТЬ 4)
  5. Исправить ВСЕ найденные проблемы
  6. Повторная валидация: node -c + regex-тест
Выход: lessons/lesson-{NN}.js (исправленный)
```

### Шаг 4: Создание 20 промтов (3 агента параллельно)
```
Агент "Prompts-VD": vocabulary_t1-t4 + dialogue_t1-t4 (8 промтов)
Агент "Prompts-SS": socratic_t1-t4 + synonyms_t1-t4 (8 промтов)
  → Читает Источники/The_Socratic_Method.txt
Агент "Prompts-LG": lefebvre_t1-t4 + grammar (5 промтов)
  → Читает Источники/Конфликтующие структуры.txt

Каждый промт:
  - Только про ситуации своего Teil
  - Использует {lessonText} и {vocabularyList}
  - 1300-2200 символов
```

### Шаг 5: Интеграция промтов (Агент "Integrator")
```
Вход: lessons/lesson-{NN}.js + файлы промтов из tasks/
Действия:
  1. Вставить все 21 промт в lesson-{NN}.js
  2. Добавить <script> в index.html
  3. Валидация: node -c
Выход: lessons/lesson-{NN}.js (полный) + index.html (обновлённый)
```

### Шаг 6: Проверка в браузере (Агент "Tester")
```
Вход: Запустить HTTP-сервер
Действия:
  1. Открыть главную → проверить карточку урока + YouTube бейдж
  2. Открыть урок → проверить заголовок + YouTube кнопка
  3. JS-тест: lesson.texts.length === 12
  4. JS-тест: vocabulary.length > 50
  5. JS-тест: 0 MISSING sentenceTranslations (все 4 Teil)
  6. JS-тест: 24 промта в prompts
  7. Проверить упражнения: открыть 1 викторину, 1 сопоставление
  8. Проверить промты: открыть 1 аккордеон Словарь/Сократ
Выход: ✅ или список ошибок для исправления
```

---

## Батч-план: Группы по 4 урока

Уроки добавляются группами по 4 для управляемости.
Внутри группы — максимальная параллелизация агентов.

### Батч 1: Уроки 3-6
```
Параллельно: 4 агента Extractor (шаг 1 для уроков 3, 4, 5, 6)
    ↓
Параллельно: 4 агента Builder (шаг 2 для уроков 3, 4, 5, 6)
    ↓
Параллельно: 4 агента Validator (шаг 3 для уроков 3, 4, 5, 6)
    ↓
Параллельно: 12 агентов Prompts (3 агента × 4 урока, шаг 4)
    ↓
Параллельно: 4 агента Integrator (шаг 5 для уроков 3, 4, 5, 6)
    ↓
1 агент Tester (шаг 6 — проверить все 4 урока)
```

### Батч 2: Уроки 7-10
(та же структура)

### Батч 3: Уроки 11-14
### Батч 4: Уроки 15-18
### Батч 5: Уроки 19-22
### Батч 6: Уроки 23-26
### Батч 7: Уроки 27-30
### Батч 8: Уроки 31-34

**Итого: 8 батчей × ~25 агентов = ~200 агентов на все 32 урока**

---

## Полные ссылки для каждого урока

### Батч 1 (уроки 3-6)

**Урок 3** (Vid-72):
- YouTube: https://www.youtube.com/watch?v=zcTTeztCet4
- Claude: https://claude.ai/share/2624cfe4-c313-4ae7-89b4-c90e356127d0
- Файл: lessons/lesson-03.js

**Урок 4** (Vid-70):
- YouTube: https://www.youtube.com/watch?v=Ni-yqg7_-FI
- Claude: https://claude.ai/share/8b505fad-5c8a-47f4-9bd7-3ae76a1ec262
- Файл: lessons/lesson-04.js

**Урок 5** (Vid-58):
- YouTube: https://www.youtube.com/watch?v=6DA1dYfqEZo
- Claude: https://claude.ai/share/07a69858-f1ff-4cb2-9b98-4670d8b91d7a
- Файл: lessons/lesson-05.js

**Урок 6** (Vid-57):
- YouTube: https://www.youtube.com/watch?v=sch4Y0FqOSs
- Claude: https://claude.ai/share/6c5c4bca-466a-4a3c-b3f0-0406db21d256
- Файл: lessons/lesson-06.js

### Батч 2 (уроки 7-10)

**Урок 7** (Vid-38):
- YouTube: https://www.youtube.com/watch?v=erhuXReIP1I
- Claude: https://claude.ai/share/dfc68a60-426b-468b-864b-6d5d6713c649
- Файл: lessons/lesson-07.js

**Урок 8** (Vid-22):
- YouTube: https://www.youtube.com/watch?v=Iud2ji70B4I
- Claude: https://claude.ai/share/cd1ec408-c8c4-4148-a482-77de36fba760
- Файл: lessons/lesson-08.js

**Урок 9** (Vid-44):
- YouTube: https://www.youtube.com/watch?v=SkfKD1zHaS0
- Claude: https://claude.ai/share/2d6928b8-0ccf-48ae-abc0-5fab9145eec6
- Файл: lessons/lesson-09.js

**Урок 10** (Vid-63):
- YouTube: https://www.youtube.com/watch?v=BwnkKgyANFM
- Claude: https://claude.ai/share/2e46a0fd-f50b-4cd3-a23b-bb855eff17ba
- Файл: lessons/lesson-10.js

### Батч 3 (уроки 11-14)

**Урок 11** (Vid-68):
- YouTube: https://www.youtube.com/watch?v=ksr89-8r0R0
- Claude: https://claude.ai/share/93fbfff6-6caa-47ab-acd5-0492e64ba2cd
- Файл: lessons/lesson-11.js

**Урок 12** (Vid-98):
- YouTube: https://www.youtube.com/watch?v=_fyYwSOJHCo
- Claude: https://claude.ai/share/d50e2ee7-4f65-4f7d-9734-5a1063f8919d
- Файл: lessons/lesson-12.js

**Урок 13** (Vid-107):
- YouTube: https://www.youtube.com/watch?v=vsYLsI4YZeM
- Claude: https://claude.ai/share/fa0943e9-bb17-420d-a49e-9d2d7488f77f
- Файл: lessons/lesson-13.js

**Урок 14** (Vid-109):
- YouTube: https://www.youtube.com/watch?v=KcMRP_OLBNs
- Claude: https://claude.ai/share/efdfffdd-337b-4bba-b60b-8beab01a636e
- Файл: lessons/lesson-14.js

### Батч 4 (уроки 15-18)

**Урок 15** (Vid-111):
- YouTube: https://www.youtube.com/watch?v=6H1AwyEg26E
- Claude: https://claude.ai/share/b7cb2e1f-aa46-4c8a-8fb6-96df58b9e9b3
- Файл: lessons/lesson-15.js

**Урок 16** (Vid-123):
- YouTube: https://www.youtube.com/watch?v=CMkncebWA4s
- Claude: https://claude.ai/share/f96c8844-b20e-4259-b74d-32bd71b825e6
- Файл: lessons/lesson-16.js

**Урок 17** (Vid-133):
- YouTube: https://www.youtube.com/watch?v=LA8qCfrSn5Y
- Claude: https://claude.ai/share/d0c04ed9-254d-4cca-9a7d-9152310a2573
- Файл: lessons/lesson-17.js

**Урок 18** (Vid-147):
- YouTube: https://www.youtube.com/watch?v=bSfW5fPFaOg
- Claude: https://claude.ai/share/f63a589d-9b3a-4891-b599-199a055f9402
- Файл: lessons/lesson-18.js

### Батч 5 (уроки 19-22)

**Урок 19** (Vid-150):
- YouTube: https://www.youtube.com/watch?v=XXGd-ZXvg38
- Claude: https://claude.ai/share/a20b1dd8-dcfd-452a-b28f-dbbb13a8952f
- Файл: lessons/lesson-19.js

**Урок 20** (Vid-151):
- YouTube: https://www.youtube.com/watch?v=CI6DucvPTEg
- Claude: https://claude.ai/share/427069d4-410e-4c18-91bf-b79a89ffb470
- Файл: lessons/lesson-20.js

**Урок 21** (Vid-156):
- YouTube: https://www.youtube.com/watch?v=frlYKKUrYBQ
- Claude: https://claude.ai/share/274bf919-5241-46b0-9c9d-c5440b1df9cb
- Файл: lessons/lesson-21.js

**Урок 22** (Vid-159):
- YouTube: https://www.youtube.com/watch?v=pMc9iO_fzSU
- Claude: https://claude.ai/share/f621a95b-8ac4-44a6-a7f2-e3d2e8c2abe3
- Файл: lessons/lesson-22.js

### Батч 6 (уроки 23-26)

**Урок 23** (Vid-172):
- YouTube: https://www.youtube.com/watch?v=FRRq_hPXins
- Claude: https://claude.ai/share/27e396a4-be4b-464b-a504-eeee741db4bd
- Файл: lessons/lesson-23.js

**Урок 24** (Vid-173):
- YouTube: https://www.youtube.com/watch?v=QTfCOUW5Mv8
- Claude: https://claude.ai/share/0e566db7-ab27-42ae-8350-0d80e25510cb
- Файл: lessons/lesson-24.js

**Урок 25** (Vid-177):
- YouTube: https://www.youtube.com/watch?v=9han3GbX17Q
- Claude: https://claude.ai/share/02b11862-5d27-440e-8c09-02ad8f2ee33e
- Файл: lessons/lesson-25.js

**Урок 26** (Vid-182):
- YouTube: https://www.youtube.com/watch?v=Hlq24tX9zCs
- Claude: https://claude.ai/share/4b0a6d4d-5149-46af-8e66-df6f81ac9cb8
- Файл: lessons/lesson-26.js

### Батч 7 (уроки 27-30)

**Урок 27** (Vid-183):
- YouTube: https://www.youtube.com/watch?v=_8ER4CnCsyo
- Claude: https://claude.ai/share/0dea2f20-aeec-447b-b1fa-d1a5f3217676
- Файл: lessons/lesson-27.js

**Урок 28** (Vid-199):
- YouTube: https://www.youtube.com/watch?v=e31Urm5lgIg
- Claude: https://claude.ai/share/7a5ca2d3-d36e-47a6-8fa4-3ef20a85b669
- Файл: lessons/lesson-28.js

**Урок 29** (Vid-207):
- YouTube: https://www.youtube.com/watch?v=vwOQhovoxiw
- Claude: https://claude.ai/share/1a80eacc-6c4c-4101-9424-fb3dfa973c59
- Файл: lessons/lesson-29.js

**Урок 30** (Vid-210):
- YouTube: https://www.youtube.com/watch?v=mr0i4G25oLg
- Claude: https://claude.ai/share/645df585-2e56-483f-965a-b62eea81075c
- Файл: lessons/lesson-30.js

### Батч 8 (уроки 31-34)

**Урок 31** (Vid-215):
- YouTube: https://www.youtube.com/watch?v=JqwheKGKZs8
- Claude: https://claude.ai/share/48368640-aaf9-4bd4-aa45-dcb7e48b333c
- Файл: lessons/lesson-31.js

**Урок 32** (Vid-227):
- YouTube: https://www.youtube.com/watch?v=Yx3R2H9Pm9U
- Claude: https://claude.ai/share/a30ea3a9-efff-4625-af89-9558caf71770
- Файл: lessons/lesson-32.js

**Урок 33** (Vid-235):
- YouTube: https://www.youtube.com/watch?v=U6uVxR0tHiI
- Claude: https://claude.ai/share/80147978-7f89-4033-bfa6-198517bbbb6b
- Файл: lessons/lesson-33.js

**Урок 34** (Vid-251):
- YouTube: https://www.youtube.com/watch?v=_yF07njlb9I
- Claude: https://claude.ai/share/de5d75c4-908a-41af-b90f-66755611cc3e
- Файл: lessons/lesson-34.js

---

## Детальный план агентов для одного батча

### Пример: Батч 1 (Уроки 3-6)

#### Волна 1: Извлечение (4 агента параллельно)
```
Агент Extract-03: Открыть Chrome → claude.ai/share/2624cfe4-... → читать body.innerText → сохранить tasks/lesson-03-raw.txt
Агент Extract-04: Открыть Chrome → claude.ai/share/8b505fad-... → читать body.innerText → сохранить tasks/lesson-04-raw.txt
Агент Extract-05: Открыть Chrome → claude.ai/share/07a69858-... → читать body.innerText → сохранить tasks/lesson-05-raw.txt
Агент Extract-06: Открыть Chrome → claude.ai/share/6c5c4bca-... → читать body.innerText → сохранить tasks/lesson-06-raw.txt
```
⚠️ Chrome MCP может открывать только 1 страницу одновременно → извлечение последовательно.
Решение: использовать JS download blob для быстрого сохранения.

#### Волна 2: Создание данных (4 агента параллельно, в worktree)
```
Агент Build-03: Читать tasks/lesson-03-raw.txt + lesson-01.js → создать lessons/lesson-03.js
Агент Build-04: Читать tasks/lesson-04-raw.txt + lesson-01.js → создать lessons/lesson-04.js
Агент Build-05: Читать tasks/lesson-05-raw.txt + lesson-01.js → создать lessons/lesson-05.js
Агент Build-06: Читать tasks/lesson-06-raw.txt + lesson-01.js → создать lessons/lesson-06.js
```
Каждый агент получает:
- Сырой файл урока
- lesson-01.js как ЭТАЛОН структуры
- CLAUDE.md для правил заполнения
- Инструкцию: "Будь преподавателем немецкого A2. Выбирай ключевые слова."

#### Волна 3: Валидация (4 агента параллельно)
```
Агент Validate-03: node -c lesson-03.js + regex-тест sentenceTranslations + vocab audit → исправить
Агент Validate-04: node -c lesson-04.js + regex-тест + vocab audit → исправить
Агент Validate-05: node -c lesson-05.js + regex-тест + vocab audit → исправить
Агент Validate-06: node -c lesson-06.js + regex-тест + vocab audit → исправить
```

#### Волна 4: Промты (12 агентов параллельно — 3 на каждый урок)
```
Урок 3:
  Агент Prompt-03-VD: vocabulary_t1-t4 + dialogue_t1-t4 → вставить в lesson-03.js
  Агент Prompt-03-SS: socratic_t1-t4 + synonyms_t1-t4 → tasks/lesson-03-prompts-ss.txt
  Агент Prompt-03-LG: lefebvre_t1-t4 + grammar → tasks/lesson-03-prompts-lg.txt

Урок 4:
  Агент Prompt-04-VD: ... → вставить в lesson-04.js
  Агент Prompt-04-SS: ... → tasks/lesson-04-prompts-ss.txt
  Агент Prompt-04-LG: ... → tasks/lesson-04-prompts-lg.txt

Урок 5:
  ... (аналогично)

Урок 6:
  ... (аналогично)
```

#### Волна 5: Интеграция (4 агента параллельно)
```
Агент Integrate-03: Вставить промты SS+LG в lesson-03.js + добавить <script> в index.html
Агент Integrate-04: Вставить промты SS+LG в lesson-04.js
Агент Integrate-05: Вставить промты SS+LG в lesson-05.js
Агент Integrate-06: Вставить промты SS+LG в lesson-06.js
```

#### Волна 6: Проверка (1 агент-преподаватель)
```
Агент Test-Batch1:
  1. Запустить HTTP-сервер
  2. Для каждого урока 3-6:
     - JS: lesson.texts.length === 12
     - JS: vocabulary.length > 50
     - JS: sentenceTranslations 0 MISSING
     - JS: 24 промта в prompts
     - JS: videoUrl содержит youtube.com
  3. Скриншот главной → 6 карточек уроков
  4. Остановить сервер
```

---

## Отчёт после каждого батча

После каждого батча создаётся отчёт в tasks/:
```
tasks/batch-{N}-report.txt:
  Урок X: ✅ 12 текстов, 0 MISSING, XX слов, 24 промта
  Урок Y: ✅ 12 текстов, 0 MISSING, XX слов, 24 промта
  ...
```

---

## Запуск плана

Для запуска батча используй команду:
```
Добавь уроки [3-6] на сайт по плану PLAN-LESSONS.md
```

AI выполнит волны 1-6 последовательно, используя параллельные агенты внутри каждой волны.

---

## Финальная проверка (после всех 8 батчей)

```
1. Открыть http://localhost:8765/
2. Убедиться: "АУДИРОВАНИЕ A2 (34 ЭКЗАМЕНОВ)"
3. 34 карточки с YouTube бейджами
4. Каждый урок: 8 табов, 16 упражнений, 20 промтов
5. Полный regression-тест JS для каждого урока
```
