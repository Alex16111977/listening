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
      kontext_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=33692370-4f19-418a-9d61-7e0a1da52814',
      kollok_t4:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=7b43ae75-0289-47b7-8dc6-25a366b273ad'
    },
    audio: null,
    reports: null
  },
  'lesson-05': {
    // Notebook: HörenWeg 5-8 (f42e6a86-eea1-4e36-8e6a-e9b47db0d869)
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=f41c92e1-bf0b-407a-97da-1015548070c0',
      t2: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=4257ccc7-e62b-4f9e-96e4-eabce1ea1d75',
      t3: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=a4aba6b0-7d4e-4d4e-960a-8a848c42b5b3',
      t4: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=810782e2-e7e2-4159-9bc8-824a0494ee49'
    },
    quizzes: {
      perevod_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=981af9ba-7389-4e36-8876-7dae47bbc9dc',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=0bb03fd0-d440-486a-8e9a-b35d52ee4e9b',
      kontext_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=95ae23ed-dc7b-49aa-ab88-f2a9d4922fc2',
      kollok_t1:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=164ad382-12b0-4f38-91e2-a3ce97907131',
      perevod_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=f727e836-b139-466b-b36f-47070b27ebcc',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=5700a5a7-018c-4dd8-b4ce-7cb1de5c5114',
      kontext_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=7b5f199b-fec9-4bfb-9c06-6244fdcd221e',
      kollok_t2:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=d1732b81-20ad-4113-84c6-782122b51d53',
      perevod_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=33be5369-e7fc-4603-8622-eaae724425e8',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=ae7854d1-1449-4ca4-b664-3bd29d115391',
      kontext_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=6b6d62a9-9163-49ae-814c-4cc8f2b7aeba',
      kollok_t3:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=53922486-c451-40f7-be79-2e560c65b654',
      perevod_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=ab272b59-e90b-4c2e-9ad1-3ac6cbd59536',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=1c9f2621-990e-4f15-94ee-7e218c800c8a',
      kontext_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=318f8873-f90b-442c-ba68-d0c342f306e6',
      kollok_t4:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=507cd2e0-1f33-494c-816e-9b8ded1dc478'
    },
    audio: null,
    reports: null
  },
  'lesson-07': {
    // Notebook: HörenWeg 5-8 — SPECIAL CASE: only Teil 1 (5 texts)
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=7f832703-38c3-4248-a142-7381bfd71bd6',
      t2: null, t3: null, t4: null
    },
    quizzes: {
      perevod_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=64283c09-d13a-4594-afd6-0544f34fd71a',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=cc02d636-6620-46a8-8fac-b455d54a27a9',
      kontext_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=be779109-6454-4677-8e2d-cc0df5908a0f',
      kollok_t1:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=ebfa27b0-822d-48d3-b604-8e24b202340f'
    },
    audio: null,
    reports: null
  },
  'lesson-08': {
    // Notebook: HörenWeg 5-8 (f42e6a86-eea1-4e36-8e6a-e9b47db0d869)
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=0b69bb9b-1aed-4d6c-b995-32ae270ba416',
      t2: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=abfd1ee2-eece-413c-940c-00b272e3412e',
      t3: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=8b6610cb-ce96-403d-a7a0-faca84cb9a2c',
      t4: 'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=a485eee0-4229-4d50-b536-5d3aff3689a2'
    },
    quizzes: {
      perevod_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=26c6f76a-c868-4bd8-ace7-f999b4e391e3',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=0e8b1ea6-a3f1-4f48-89fd-542155e06495',
      kontext_t1:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=b6f63b8e-26da-487d-9521-11cfd3a62e17',
      kollok_t1:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=4dd8e06f-0f8e-484a-b253-a47b3ec18d8a',
      perevod_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=1d4458ca-a3fd-42b9-9278-694698d3d9c8',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=76d873b6-fd57-42d6-9957-42921e556d02',
      kontext_t2:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=a038aa49-030c-497f-9d1d-5a3d1fe2aac3',
      kollok_t2:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=c658a029-527a-4df6-8763-c86b6dbad65d',
      perevod_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=bc9ee499-1df6-41b1-86be-921ccc692e42',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=20997b1e-4247-43f5-9e2e-62a1da410047',
      kontext_t3:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=6c4a685b-38a6-49be-a391-34be8e3656f1',
      kollok_t3:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=e0784e31-6c2c-4717-8a31-fa700301fcb7',
      perevod_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=ad53eb89-2e9d-4284-8825-9737cf7374e0',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=23ab945d-034b-4ef9-9cb4-552ada610ec1',
      kontext_t4:  'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=21daf286-7c8a-41b9-a292-0d0cdb704ba6',
      kollok_t4:   'https://notebooklm.google.com/notebook/f42e6a86-eea1-4e36-8e6a-e9b47db0d869?artifactId=6d606560-4e05-4c5c-9d68-892d71447cb9'
    },
    audio: null,
    reports: null
  },
  'lesson-09': {
    // Notebook: HörenWeg 9-12 (78f91e90-1f4e-46fe-b83d-1f3d26d8db3d)
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=84dd9f92-0665-4c27-b0d7-a4082af11709',
      t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=2efc6f20-98be-4db6-806b-00d27f5c7ffb',
      t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=4047f871-7bb6-4c87-8b6a-bc9befe0e6f6',
      t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=39ab8687-d359-4a25-a28c-be876de808e0'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=d327435d-fb1b-42d8-9cc7-2234d7774a94',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=c880050e-8fae-48a8-86c1-1b06ba7d7461',
      kontext_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=db44debf-f552-4738-b04d-615b9fd0996f',
      kollok_t1:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=9d482c1b-ea22-47e1-9f42-cc377be8044f',
      perevod_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=9680dfaf-808c-4b2b-a2f6-932db4b8e8b3',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=bafed01e-9ab6-4a75-b415-7ee6293ec2d9',
      kontext_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=12da50d8-74b1-46b6-ad00-16eb1546cc53',
      kollok_t2:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=2cfa7561-b4f6-41c1-9d78-fede3732aa6f',
      perevod_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=56425c51-4f92-4db6-9879-140f548a6f29',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=2c7eb9f8-d6ba-43f5-847d-0b3a411d8c51',
      kontext_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=373f59eb-4fb8-43cc-abc3-d318a4314a97',
      kollok_t3:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=f89ebb79-e613-459c-9cec-3990b4af528d',
      perevod_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=498fcaef-7cc5-43b9-bc3d-664d385cee4c',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=ef4fcb1a-6a08-4332-8b1f-0a30994e0bd8',
      kontext_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=ca7900f6-d509-407a-86aa-845a20c34474',
      kollok_t4:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=80a9f791-d0ca-4237-86ce-26f827d3517f'
    },
    audio: null, reports: null
  },
  'lesson-10': {
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=c56d024b-74e3-40f2-a12c-c3ac80c01018',
      t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=50a31939-4aff-4df4-a563-fc8e5437d028',
      t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=d5cd49dd-f821-46ab-885c-8859231bc9f3',
      t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=7ccfee8f-0562-4571-a41f-01d54eb85143'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=3e4f565c-2238-4560-9440-9e79a6e37ef9',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=82f66e43-6670-40dd-a130-ea3eefd6264c',
      kontext_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=89a4ab85-d01f-4ccb-897e-bb86c8ec37c6',
      kollok_t1:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=a3465119-a758-4847-933f-8b146147c1e6',
      perevod_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=8af60956-0a03-4d4d-8978-b79e29e79f20',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=1269f9e6-c899-4bc8-8a68-ddadb7d518be',
      kontext_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=484325b1-c574-47de-b33a-9900141f2412',
      kollok_t2:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=483d8fd2-740f-44d5-9714-b552f74a09cc',
      perevod_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=6633b841-eb03-4673-9937-37df84afcd53',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=97cd0cc3-bf73-4f60-b8dc-d9ba147cdf16',
      kontext_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=c92b2617-80eb-430f-b0ce-3ade73a9b2a1',
      kollok_t3:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=3409ecb2-2fac-44c4-992d-2bf411d08151',
      perevod_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=0a143c4c-798f-41a2-9498-081ccc60d986',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=3f3b768e-36c8-4475-8a6c-d39a05946f3f',
      kontext_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=537616f4-e419-4fb7-830f-655eed3c4fbd',
      kollok_t4:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=fbfdcccb-3042-45ce-bb73-8e17c0120155'
    },
    audio: null, reports: null
  },
  'lesson-11': {
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=9e0bdca2-fa3c-421f-9af3-b0346bbc1f4e',
      t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=89a4b1ae-f01d-45e3-9404-0aee356779f5',
      t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=6680d020-966b-4b89-bae9-730a24e0fe59',
      t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=db9ba78e-3bed-49cf-a05c-5bbc25a4572e'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=72452f83-b699-4f09-9e29-54451320d2c6',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=966eda40-9b61-44a3-8e09-eff1b3824d84',
      kontext_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=fe5785f7-2a58-494c-a5c7-3b151a131db3',
      kollok_t1:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=3935025a-84fc-4638-ad44-82d587a8a72d',
      perevod_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=15876d83-c62c-4bd7-bc9c-62612b756e4c',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=15ed2c4c-3510-4e1c-aa0e-4625df98a387',
      kontext_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=9eecb991-5a6b-40ab-8ac8-a419b53c329c',
      kollok_t2:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=193d6606-b8c0-46e7-9d40-ba3bdc864edc',
      perevod_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=5b1562de-bd04-45c1-8777-f25638143b05',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=9566cdaa-5340-4286-befe-118e396d2e77',
      kontext_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=831c7916-d6d4-4434-9d7f-64c78c160e70',
      kollok_t3:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=f56af71b-3bea-4f75-8405-1e04b65187aa',
      perevod_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=794490bb-1b1f-43cd-a602-62afe856d941',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=54b3e92f-7475-4e00-b22c-67f1011d7e31',
      kontext_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=1c70e315-89c4-4b0a-8716-f5b2a6677661',
      kollok_t4:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=bc2f5c1c-57ae-4241-a81d-c9c174f5b68f'
    },
    audio: null, reports: null
  },
  'lesson-12': {
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=5113cfa1-3871-46f7-bf0b-766fda6ef573',
      t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=06421cd4-ed40-4138-8990-4cb413b8eb8b',
      t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=e1e51500-e3c5-4662-adbf-765c270bf537',
      t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=1973673e-3d37-4877-be3d-be0f70c19422'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=45e9e34d-a2e0-4948-9e1a-9726cbe02ff8',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=96962cb9-fae0-4522-9b18-e006f913fb0f',
      kontext_t1: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=9b87508a-295d-443c-ab89-9f0f1ed86dba',
      kollok_t1:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=3b0c1bc8-b5db-4d62-b7e2-8eb8592a5ced',
      perevod_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=658014b1-3109-4760-ab3a-fa7ed7fa2421',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=e5a68ef4-4303-4208-a269-0959a2010628',
      kontext_t2: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=3efaeb38-c759-4d68-a4e4-fce059d42609',
      kollok_t2:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=fc40e158-4222-406c-bbbc-76c38c745869',
      perevod_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=ab7cd9c4-2156-4cf9-833e-4089a91d99a0',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=f00b7cd8-4175-4e0f-b753-abdf27e9af61',
      kontext_t3: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=4a1f4f27-edbf-4caf-bf20-4e54e8b549fb',
      kollok_t3:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=763d4e0b-42ba-4b50-8fee-7227058c1329',
      perevod_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=0b0ca31b-9492-462b-8d23-c20f58157efe',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=09dfae8b-8766-43f4-809d-d8366c87a0ba',
      kontext_t4: 'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=87475b9a-b5a5-4dce-ae48-18a68e0b3746',
      kollok_t4:  'https://notebooklm.google.com/notebook/78f91e90-1f4e-46fe-b83d-1f3d26d8db3d?artifactId=0760f14d-9261-40cb-8377-021a85b3d85e'
    },
    audio: null, reports: null
  },
  'lesson-13': {
    // Notebook: HörenWeg 13-16 — SPECIAL CASE: only Teil 3
    flashcards: {
      t1: null,
      t2: null,
      t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=8a197146-43f2-4043-8317-e93278c74db3',
      t4: null
    },
    quizzes: {
      perevod_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=e4ea4408-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=64789b76-9bc3-4600-8781-7b3274ae44a3',
      kontext_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=f512a33c-eb13-468c-95f6-80fd7149083a',
      kollok_t3:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=d0037aba-e18f-45d0-9d44-a72d2ac23705'
    },
    audio: null, reports: null
  },
  'lesson-14': {
    // Notebook: HörenWeg 13-16
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=b823681c-43f2-4043-8317-e93278c74db3',
      t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=76627591-43f2-4043-8317-e93278c74db3',
      t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=37be677a-43f2-4043-8317-e93278c74db3',
      t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=c8a6f7a1-43f2-4043-8317-e93278c74db3'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=d73bfb93-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=2477699d-ee30-4578-8313-be2d77b37e8d',
      kollok_t1:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=2ccff9a6-ee30-4578-8313-be2d77b37e8d',
      kontext_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=4a9a8111-ee30-4578-8313-be2d77b37e8d',
      perevod_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=c407ff13-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=5563fc0f-ee30-4578-8313-be2d77b37e8d',
      kollok_t2:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=d778506b-ee30-4578-8313-be2d77b37e8d',
      kontext_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=15b017a3-ee30-4578-8313-be2d77b37e8d',
      perevod_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=ed579c2c-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=c6cd78cd-ee30-4578-8313-be2d77b37e8d',
      kollok_t3:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=efb6423c-ee30-4578-8313-be2d77b37e8d',
      kontext_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=47418fa6-ee30-4578-8313-be2d77b37e8d',
      perevod_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=271b794e-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=bca65482-ee30-4578-8313-be2d77b37e8d',
      kollok_t4:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=c0ff97df-ee30-4578-8313-be2d77b37e8d',
      kontext_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=8537a5b2-ee30-4578-8313-be2d77b37e8d'
    },
    audio: null, reports: null
  },
  'lesson-15': {
    // Notebook: HörenWeg 13-16
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=1a038c49-43f2-4043-8317-e93278c74db3',
      t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=97c17efc-43f2-4043-8317-e93278c74db3',
      t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=a82ec6af-43f2-4043-8317-e93278c74db3',
      t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=a765aae2-43f2-4043-8317-e93278c74db3'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=c9557865-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=5f32dc9e-ee30-4578-8313-be2d77b37e8d',
      kollok_t1:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=92f8d611-ee30-4578-8313-be2d77b37e8d',
      kontext_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=bf40e789-ee30-4578-8313-be2d77b37e8d',
      perevod_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=b04d414f-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=2b5bd113-ee30-4578-8313-be2d77b37e8d',
      kollok_t2:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=64aa45c3-ee30-4578-8313-be2d77b37e8d',
      kontext_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=b3ce3670-ee30-4578-8313-be2d77b37e8d',
      perevod_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=d9e645ad-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=46bfe96c-ee30-4578-8313-be2d77b37e8d',
      kollok_t3:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=ee6d48eb-ee30-4578-8313-be2d77b37e8d',
      kontext_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=208430a0-ee30-4578-8313-be2d77b37e8d',
      perevod_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=50120a7b-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=c556841b-ee30-4578-8313-be2d77b37e8d',
      kollok_t4:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=b6ce2412-ee30-4578-8313-be2d77b37e8d',
      kontext_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=e041bc27-ee30-4578-8313-be2d77b37e8d'
    },
    audio: null, reports: null
  },
  'lesson-16': {
    // Notebook: HörenWeg 13-16
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=1d94e64a-43f2-4043-8317-e93278c74db3',
      t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=dd066076-43f2-4043-8317-e93278c74db3',
      t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=c8687b43-43f2-4043-8317-e93278c74db3',
      t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=7eb2bef2-43f2-4043-8317-e93278c74db3'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=3a6bd2c7-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=44e4710a-ee30-4578-8313-be2d77b37e8d',
      kollok_t1:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=3f0a7eb8-ee30-4578-8313-be2d77b37e8d',
      kontext_t1: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=564010ed-ee30-4578-8313-be2d77b37e8d',
      perevod_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=63a3150b-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=e6359e17-ee30-4578-8313-be2d77b37e8d',
      kollok_t2:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=85d725cd-ee30-4578-8313-be2d77b37e8d',
      kontext_t2: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=58c91511-ee30-4578-8313-be2d77b37e8d',
      perevod_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=f2acf78f-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=9c85167f-ee30-4578-8313-be2d77b37e8d',
      kollok_t3:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=d8445493-ee30-4578-8313-be2d77b37e8d',
      kontext_t3: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=61cc32e6-ee30-4578-8313-be2d77b37e8d',
      perevod_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=850ffd55-ee30-4578-8313-be2d77b37e8d',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=7831f37c-ee30-4578-8313-be2d77b37e8d',
      kollok_t4:  'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=fefb296c-ee30-4578-8313-be2d77b37e8d',
      kontext_t4: 'https://notebooklm.google.com/notebook/4cde5d7d-feab-4552-90ee-7193bd513048?artifactId=854733cb-6293-46df-aa98-154077c8a46d'
    },
    audio: null, reports: null
  },
  'lesson-17': {
    // Notebook: HörenWeg 17-20
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=3536ae7f-4f8f-451f-a559-a718b9bff1da',
      t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=5f455233-4f8f-451f-a559-a718b9bff1da',
      t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=addc7aa6-4f8f-451f-a559-a718b9bff1da',
      t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=3de157bf-4f8f-451f-a559-a718b9bff1da'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=f8be3834-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=6dfe0704-4f8f-451f-a559-a718b9bff1da',
      kollok_t1:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=3aaf5344-4f8f-451f-a559-a718b9bff1da',
      kontext_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=b5dd54cd-4f8f-451f-a559-a718b9bff1da',
      perevod_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=730599fc-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=3a22a803-4f8f-451f-a559-a718b9bff1da',
      kollok_t2:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=be199157-4f8f-451f-a559-a718b9bff1da',
      kontext_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=1330dbc7-4f8f-451f-a559-a718b9bff1da',
      perevod_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=0a2e2f2d-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=0fa5970f-4f8f-451f-a559-a718b9bff1da',
      kollok_t3:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=f5c47ea6-4f8f-451f-a559-a718b9bff1da',
      kontext_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=5812d197-4f8f-451f-a559-a718b9bff1da',
      perevod_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=da9a54e7-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=cc91c12f-4f8f-451f-a559-a718b9bff1da',
      kollok_t4:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=79ca8d5c-4f8f-451f-a559-a718b9bff1da',
      kontext_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=87287304-4f8f-451f-a559-a718b9bff1da'
    },
    audio: null, reports: null
  },
  'lesson-18': {
    // Notebook: HörenWeg 17-20
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=31838a5a-4f8f-451f-a559-a718b9bff1da',
      t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=b6e85556-4f8f-451f-a559-a718b9bff1da',
      t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=231d30fe-4f8f-451f-a559-a718b9bff1da',
      t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=de3e0868-4f8f-451f-a559-a718b9bff1da'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=82773732-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=dc9ca056-4f8f-451f-a559-a718b9bff1da',
      kollok_t1:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=b329f2a8-4f8f-451f-a559-a718b9bff1da',
      kontext_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=9fce73bd-4f8f-451f-a559-a718b9bff1da',
      perevod_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=93206294-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=d0f8cb8a-4f8f-451f-a559-a718b9bff1da',
      kollok_t2:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=db2c2c66-4f8f-451f-a559-a718b9bff1da',
      kontext_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=b157a4a7-4f8f-451f-a559-a718b9bff1da',
      perevod_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=3a656e94-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=7cccbc60-4f8f-451f-a559-a718b9bff1da',
      kollok_t3:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=245a4cba-4f8f-451f-a559-a718b9bff1da',
      kontext_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=1db262da-4f8f-451f-a559-a718b9bff1da',
      perevod_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=b19435bc-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=da9676f6-4f8f-451f-a559-a718b9bff1da',
      kollok_t4:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=289c4322-4f8f-451f-a559-a718b9bff1da',
      kontext_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=45746724-4f8f-451f-a559-a718b9bff1da'
    },
    audio: null, reports: null
  },
  'lesson-19': {
    // Notebook: HörenWeg 17-20
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=dc761f4e-4f8f-451f-a559-a718b9bff1da',
      t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=21f03a24-4f8f-451f-a559-a718b9bff1da',
      t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=8f226e6b-4f8f-451f-a559-a718b9bff1da',
      t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=562fe8f1-4f8f-451f-a559-a718b9bff1da'
    },
    quizzes: {
      perevod_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=ba4f2286-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=70bbf658-4f8f-451f-a559-a718b9bff1da',
      kollok_t1:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=dd4cfc18-4f8f-451f-a559-a718b9bff1da',
      kontext_t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=99f383ae-4f8f-451f-a559-a718b9bff1da',
      perevod_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=1ead4ebf-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=0c796033-4f8f-451f-a559-a718b9bff1da',
      kollok_t2:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=02e6219a-4f8f-451f-a559-a718b9bff1da',
      kontext_t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=175c0231-4f8f-451f-a559-a718b9bff1da',
      perevod_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=b775add6-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=edc8c5c3-4f8f-451f-a559-a718b9bff1da',
      kollok_t3:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=8804a43d-4f8f-451f-a559-a718b9bff1da',
      kontext_t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=65345424-4f8f-451f-a559-a718b9bff1da',
      perevod_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=11934526-4f8f-451f-a559-a718b9bff1da',
      syn_ant_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=6efaa138-4f8f-451f-a559-a718b9bff1da',
      kollok_t4:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=e66cc04f-4f8f-451f-a559-a718b9bff1da',
      kontext_t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=b90cefcc-4f8f-451f-a559-a718b9bff1da'
    },
    audio: null, reports: null
  },
  'lesson-20': {
    // Notebook: HörenWeg 17-20
    flashcards: {
      t1: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=dfcfa3c6-e379-4576-8f00-8edcb731bd33',
      t2: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=88f3dae1-f14f-495a-937d-26fd56d977b1',
      t3: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=8c24aaf5-5869-49be-a9c7-72c25d4c126f',
      t4: 'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=81cd0d73-00f4-496e-a962-5ca18d17c2a4'
    },
    quizzes: {
      perevod_t1:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=95903511-0f2b-42e8-bf4f-4b6aa5d83f5f',
      syn_ant_t1:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=c1ddf0a2-c7b9-46e0-afae-f6a8bd77c2ff',
      kontext_t1:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=94e8a548-162a-47bb-99f1-66a0657eb5f4',
      kollok_t1:   'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=85251bc7-9676-4b8d-9d58-a907b87ce34d',
      perevod_t2:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=9b729760-9152-42df-9b76-1991dfd23104',
      syn_ant_t2:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=f03e0347-48a2-4984-bf0b-234653a9d039',
      kontext_t2:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=deb2d65e-32b4-4fef-80c3-44e894fb34ce',
      kollok_t2:   'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=4242fb25-d5b7-4d7e-b255-7143d0c51db3',
      perevod_t3:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=a8f8762c-bbbb-46b0-9d2e-4ab3b51ab5ae',
      syn_ant_t3:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=0409f2a9-8f8d-48af-aa1f-c0806e984059',
      kontext_t3:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=57cb020b-22ab-4c92-8803-ca73a55b3251',
      kollok_t3:   'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=03b4d5e1-b48b-4f8d-a1c1-ac9549dd24da',
      perevod_t4:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=56eb29b5-59c2-4e72-ab17-edabe7fe663f',
      syn_ant_t4:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=9c44a95e-3dd8-46d5-976c-99ce6ae0bdbd',
      kontext_t4:  'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=4cfa7648-b047-4895-8093-8e5c4e7225ce',
      kollok_t4:   'https://notebooklm.google.com/notebook/62bf23f2-4f8f-451f-a559-a718b9bff1da?artifactId=78fb583b-ad9d-4655-ba88-4d4bf8b92373'
    },
    audio: null, reports: null
  }
  // ... (остальные уроки добавлять по мере генерации в NotebookLM)
};
