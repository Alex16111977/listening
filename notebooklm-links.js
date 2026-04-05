/* ═══════════════════════════════════════════════════════════
   NotebookLM artifact links per lesson
   Источник: HörenWeg notebook (NotebookLM)

   Структура: window.NLM_LINKS[lesson.id] = {
     flashcards: { t1, t2, t3, t4 }  — 4 набора флеш-карточек по Teil
     quizzes:    { perevod_t1, syn_ant_t1, kontext_t1, kollok_t1 }  — 4 теста Teil 1
     audio:      { full } | null  — аудиопересказ урока (если есть)
     reports:    { ... } | null  — отчёты/конспекты (если есть)
   }

   ВАЖНО: при добавлении ссылок на новый урок — только этот файл правишь.
   Движок сайта (index.html → renderExercisesView) читает window.NLM_LINKS[lesson.id]
   ═══════════════════════════════════════════════════════════ */

window.NLM_LINKS = {
  'lesson-01': {
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=987797dc-7730-4493-9633-9da200e9a035',
      t2: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=0be3eb47-0e5c-4916-b562-76dc650df615',
      t3: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=78bfb5f8-953a-4419-a315-e8ab8e72d3e6',
      t4: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=d89fc93d-7881-4595-ad2b-8ef99540a545'
    },
    quizzes: {
      perevod_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=788123f2-5039-47e2-9fe3-459c986c7bc4',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=614899de-a566-40bd-8172-be6452c6b007',
      kontext_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=662dd95d-e88c-40f7-a359-722fe40028a5',
      kollok_t1:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=e1d4545e-4aff-48e6-aaa4-422e9b71e185'
    },
    audio: {
      retell_t1: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=869bee2a-b27b-4c98-96a7-ed912b04b196'
    },
    reports: null
  }
  // 'lesson-02': { flashcards: {...}, quizzes: {...}, audio: null, reports: null },
  // ... (остальные уроки добавлять по мере генерации в NotebookLM)
};
