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
      // Teil 1
      perevod_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=788123f2-5039-47e2-9fe3-459c986c7bc4',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=614899de-a566-40bd-8172-be6452c6b007',
      kontext_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=662dd95d-e88c-40f7-a359-722fe40028a5',
      kollok_t1:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=e1d4545e-4aff-48e6-aaa4-422e9b71e185',
      // Teil 2
      perevod_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=765d91fc-25d2-4fbe-aa76-96f023ac35e3',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=51df40cc-fdd5-4ab2-bff7-66f7cb9987e7',
      kontext_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=d8e94888-7a58-4b68-93b6-88807de80931',
      kollok_t2:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=5b2fcac1-0897-4da8-8666-90a04ef78776',
      // Teil 3
      perevod_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=a437fc57-0503-4e45-931c-80d97135b83c',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=55c722b8-3e3c-45d8-822f-d36d8634d4c2',
      kontext_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=9ca01e30-9be7-47af-9a39-1d4b3eadc0de',
      kollok_t3:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=66f4c520-e52a-4b97-a4c8-fb3f5b6fb98b',
      // Teil 4
      perevod_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=4d4bc0af-c016-4429-bf7a-3039ae6b84bd',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=5bee0131-00db-4a0a-aea5-1c071b5e963a',
      kontext_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=8b85267a-ecb5-4841-b409-4d2189503de8',
      kollok_t4:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=bac133a9-0a74-4982-a66a-3d375d185d77'
    },
    audio: null,
    reports: null
  },
  'lesson-02': {
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=bd388810-ae45-4a43-a818-ddbfece1946e',
      t2: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=ae28d19b-4c3b-4ce8-a178-055d7fe7757f',
      t3: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=9db7f627-e57b-4077-aecf-6df1891dfd42',
      t4: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=82e128b2-f836-47d4-a366-663d0c441efd'
    },
    quizzes: {
      // Teil 1
      perevod_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=03127172-2f1b-4620-ab19-bf0ca80a1b35',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=7244f200-143a-4a19-ad21-a23fa087fea1',
      kontext_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=e9a23e8f-c00f-4a46-9c81-0d89ec36c1bd',
      kollok_t1:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=bcd12dea-f08e-4208-a5a3-ead56b9fb5b9',
      // Teil 2
      perevod_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=a780ca66-3119-45f0-8f5e-2268d19db6fa',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=f61f28e7-589d-4f0e-9ea2-4b07fcb320fa',
      kontext_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=2da3ea88-7659-49cf-aa0e-5aad1dd6410c',
      kollok_t2:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=94c03bcf-552b-40b6-ad11-9f9a2f9f77df',
      // Teil 3
      perevod_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=ecc21c70-48c1-46a7-b450-2743887d9676',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=c888c100-68cf-4007-b22b-a8ed3efa0aa9',
      kontext_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=6120d047-1a6d-4251-97c0-9b181bf9200e',
      kollok_t3:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=6bec55be-947d-474c-aadb-aa4f5717b423',
      // Teil 4
      perevod_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=1bd72341-f1fb-4137-8e4a-40ee4be11ece',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=2a25f3ba-de9a-4f79-81a6-d440db84c91f',
      kontext_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=e51baa17-fa40-492b-a074-c3d814fae926',
      kollok_t4:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=43aae0b4-1b95-42cd-9d36-d9c78a1682bc'
    },
    audio: null,
    reports: null
  },
  'lesson-03': {
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=bb48df44-4d64-444b-b86b-a25ee5a3e529',
      t2: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=9efb5328-29c1-457a-91ae-389cde300f32',
      t3: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=58fd2a11-b4b1-4677-b82c-de3b1ae91408',
      t4: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=12d75724-551f-4450-902c-a7bbe2106b02'
    },
    quizzes: {
      // Teil 1
      perevod_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=d4994c8d-e914-4979-812c-fab065c892c2',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=1169472d-99b2-424d-a26a-5bff37967940',
      kontext_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=cf2f3fea-03e2-445b-9212-63ba39fed70b',
      kollok_t1:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=0f9ef1ca-ef8f-477b-a623-ec9b2d31bbc9',
      // Teil 2
      perevod_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=308655ea-9ebd-4aa7-b73f-f35b12f826bc',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=5853ebdb-ea0a-4e55-a2fc-b5b6677a512c',
      kontext_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=c68de7d9-97e3-4103-b758-2291886b65d9',
      kollok_t2:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=f3f36221-0e91-4e10-b94f-95687be92631',
      // Teil 3
      perevod_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=7d022fb3-4562-4d26-9b8b-8feff2e7a8b9',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=70226945-d3e8-449d-bdbd-75168e5648f9',
      kontext_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=4dcb1ae2-f75a-45e7-a8e6-b9610130b946',
      kollok_t3:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=24b13d07-1ca4-4e17-8267-f8dec672b00d',
      // Teil 4
      perevod_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=27ae2e6a-64b0-4e2d-a213-df226bfdb995',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=ca6cb7ee-aa4d-42f3-8335-4198d8bb6c92',
      kontext_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=56120780-8ef8-4472-8dbd-820ea028e0f7',
      kollok_t4:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=1fad085a-aa8e-4e31-b3bf-bd882dbf91ff'
    },
    audio: null,
    reports: null
  }
  // ... (остальные уроки добавлять по мере генерации в NotebookLM)
};
