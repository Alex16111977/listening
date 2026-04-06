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
  },
  'lesson-04': {
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=f9944c69-50b5-48ba-9f3f-859d53332aaf',
      t2: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=770e8854-5ceb-4180-ae04-874c2b0d076c',
      t3: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=09753f81-4067-4716-820b-1624b18e25af',
      t4: 'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=ab8296cb-735b-4f49-aad4-fc33a30d58b4'
    },
    quizzes: {
      // Teil 1
      perevod_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=5e7cf07f-95f7-4fa0-bcd0-a1e0da8ca919',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=5016f2dd-705a-487b-9c76-57beb358610e',
      kontext_t1:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=2dda5959-fb70-4d78-bf5f-aff119b478c0',
      kollok_t1:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=bea980c1-3091-4933-93f9-af408556785b',
      // Teil 2
      perevod_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=9775291b-43e2-44a6-85de-e1c8ef5c744f',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=5b49688e-9e17-441f-bbf9-1a4a7161e52c',
      kontext_t2:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=7958e1dc-8eed-45bf-a377-443500ecff6f',
      kollok_t2:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=c7d3bc89-b6ff-47fe-8dc2-51fbedad2bfb',
      // Teil 3
      perevod_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=d6d9a986-6beb-4c97-ba8e-e2d8c375c1d1',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=aeee3c94-5b3e-437a-8f43-f3cca17b14ee',
      kontext_t3:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=e6e541ed-6fc7-4cb7-9ec9-b8b4d89f74fb',
      kollok_t3:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=b69468da-3d5c-4631-bc96-92619d258dd9',
      // Teil 4
      perevod_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=8d5c39f5-f784-44a2-8cef-f9d2a06a606e',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=889b2dc7-4c14-4f67-b438-1ee9f41dd91b',
      kontext_t4:  'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=2ea2cd76-bc0e-42c1-abdc-aa1244871b8e',
      kollok_t4:   'https://notebooklm.google.com/notebook/1f985d5d-ef57-4050-8c06-24111ba1564b?artifactId=a5b0472e-88eb-4c15-b2b5-104bcde52350'
    },
    audio: null,
    reports: null
  },
  'lesson-06': {
    // Notebook: HörenWeg 5-8 (f42e6a86-eea1-4e36-8e6a-e9b47db0d869)
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=c15e88d3-ae86-4744-af59-23307c049c56',
      t2: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=efce2d84-8a00-42bd-864f-7fdf91eb83d4',
      t3: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=d82be69b-80ae-4257-955f-5a70ea304120',
      t4: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=7943e354-f5cc-4734-9404-e809fe0d4056'
    },
    quizzes: {
      // Teil 1
      perevod_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=915b2230-55bd-469e-b2ff-fdce0880ba53',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=418a21d8-cffe-462f-bb7f-a32e3a9a1015',
      kontext_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=0b8660a6-b01d-4375-9e29-3ab43f548e21',
      kollok_t1:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=2013805b-b1d1-47c9-adf3-9536ed60a4ef',
      // Teil 2
      perevod_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=556cd12d-850e-4288-b6b1-786e9cd39462',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=efa927f1-654c-4f39-a83b-9cc253b61630',
      kontext_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=7bd5faa6-d616-412c-a2c3-9cf22944cec2',
      kollok_t2:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=7d5ab4ce-8a6d-441d-bf0d-34c4ab87b599',
      // Teil 3
      perevod_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=c4bacfe9-0ca2-4735-9c49-bdab6b3387b1',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=3f240338-7e37-4cc8-9973-4c24396205de',
      kontext_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=b1187ac2-d5f1-4841-af70-31a93e1be17e',
      kollok_t3:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=1e9b8a9c-c4c0-455f-8bb1-2931c2f6993c',
      // Teil 4
      perevod_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=dc437e76-dceb-441d-bb71-d20eb5acbe29',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=3e43e71c-6882-4bc0-a8ce-aafc1552a41a',
      kontext_t4:  null,  // Суточный лимит NotebookLM исчерпан — создать завтра (лимит сбрасывается в 00:00)
      kollok_t4:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=7b43ae75-0289-47b7-8dc6-25a366b273ad'
    },
    audio: null,
    reports: null
  }
  // ... (остальные уроки добавлять по мере генерации в NotebookLM)
};
