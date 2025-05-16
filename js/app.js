// js/app.js

const app = document.getElementById('app');

let state = {
  view: 'login',
  user: null,
  selectedRoute: null,
  selectedLevel: null,
  selectedCourse: null,

  // Para secuenciar materias
  subjectsOrder: [],
  currentSubjectIndex: 0,

  // Preguntas de la materia actual
  questionsList: [],
  currentQuestionIndex: 0,

  score: 0,
  answers: [],

  // Contador de cambios de pestaña
  tabSwitchCount: 0
};

// Listener para contar tab switches
document.addEventListener('visibilitychange', () => {
  if (document.hidden) state.tabSwitchCount++;
});

// Carga preguntas desde localStorage o window.questions
const loadQuestions = () => {
  const stored = localStorage.getItem('questions');
  return stored ? JSON.parse(stored) : window.questions;
};
state.questions = loadQuestions();

// Render global
const render = () => {
  switch (state.view) {
    case 'login':           renderLogin();          break;
    case 'routeSelection':  renderRouteSelection(); break;
    case 'levelSelection':  renderLevelSelection(); break;
    case 'courseSelection': renderCourseSelection();break;
    case 'courseDetail':    renderCourseDetail();   break;
    case 'quiz':            renderQuiz();           break;
    case 'result':          renderResult();         break;
  }
};

// 1) Login
const renderLogin = () => {
  app.innerHTML = `
    <div class="flex justify-center mb-6">
      <img src="colegio_mahanaym.png" alt="Logo" class="h-16 sm:h-20">
    </div>
    <h1 class="text-2xl font-semibold mb-4 text-center">Exámenes de Ingreso</h1>
    <input id="username" type="text" placeholder="Nombre y Apellido" class="border rounded w-full py-2 px-3 mb-4"/>
    <button onclick="login()" class="bg-blue-600 text-white py-2 px-4 rounded w-full">Iniciar Sesión</button>
    <a href="admin-login.html" class="block text-center mt-4 text-green-600">Administrador</a>
  `;
};
const renderRouteSelection = () => {
  app.innerHTML = `
    <h1 class="text-2xl font-semibold mb-4 text-center">Colegio mahanaym</h1>
    <div class="flex flex-col gap-4">
      <button onclick="selectRoute('Matriz')" class="bg-blue-600 text-white py-2 px-4 rounded w-full">Matriz</button>
      <button onclick="selectRoute('Extencion')" class="bg-blue-600 text-white py-2 px-4 rounded w-full">Extencion</button>
    </div>
  `;
};

function selectRoute(r) {
  state.selectedRoute = r;
  state.view = 'levelSelection';
  render();
}

const login = () => {
  const u = document.getElementById('username').value.trim();
  if (!u) return alert('Por favor ingresa tu nombre.');
  state.user = u;
  state.view = 'routeSelection';
  render();
};

// 2) Selección de nivel
const renderLevelSelection = () => {
  const ordered = ['PREPARATORIA','BASICA_ELEMENTAL','BASICA_MEDIA','BASICA_SUPERIOR','BGU'];
  const levels = ordered.filter(l => state.questions[l]);
  app.innerHTML = `
    <h1 class="text-2xl font-semibold mb-4 text-center">Selecciona un Nivel</h1>
    ${levels.map(lvl => `
      <button onclick="selectLevel('${lvl}')" class="bg-blue-600 text-white py-2 px-4 rounded w-full mb-2">
        ${lvl.replace('_',' ')}
      </button>
    `).join('')}
    <button onclick="logout()" class="mt-4 bg-gray-500 text-white py-2 px-4 rounded w-full">Cerrar Sesión</button>
  `;
};
const selectLevel = lvl => {
  state.selectedLevel = lvl;
  state.view = 'courseSelection';
  render();
};

// 3) Selección de curso
const renderCourseSelection = () => {
  const courses = Object.keys(state.questions[state.selectedLevel]);
  app.innerHTML = `
    <h1 class="text-2xl font-semibold mb-4 text-center">
      Cursos de ${state.selectedLevel.replace('_',' ')}
    </h1>
    ${courses.map(c => `
      <button onclick="selectCourse('${c}')" class="bg-blue-600 text-white py-2 px-4 rounded w-full mb-2">
        ${c}
      </button>
    `).join('')}
    <button onclick="backToLevelSelection()" class="mt-4 bg-gray-500 text-white py-2 px-4 rounded w-full">
      Volver
    </button>
  `;
};
const selectCourse = c => {
  state.selectedCourse = c;
  state.view = 'courseDetail';
  render();
};

// 4) Detalle curso
const renderCourseDetail = () => {
  app.innerHTML = `
    <h1 class="text-2xl font-semibold mb-4 text-center">${state.selectedCourse}</h1>
    <button onclick="startExam()" class="bg-green-600 text-white py-2 px-4 rounded w-full mb-2">
      Examen
    </button>
    <button onclick="backToCourseSelection()" class="bg-gray-500 text-white py-2 px-4 rounded w-full">
      Volver
    </button>
  `;
};

// 5) Inicio quiz
const startExam = () => {
  const courseObj = state.questions[state.selectedLevel][state.selectedCourse];
  const materias = Object.keys(courseObj);
  state.subjectsOrder        = materias;
  state.currentSubjectIndex  = 0;
  state.currentQuestionIndex = 0;
  state.score                = 0;
  state.answers              = [];
  state.tabSwitchCount       = 0; // resetear
  // carga primera materia
  const first = materias[0];
  state.questionsList = courseObj[first];
  state.view          = 'quiz';
  
  render();
};



// 6) Render quiz
const renderQuiz = () => {
  const q    = state.questionsList[state.currentQuestionIndex];
  const tot  = state.questionsList.length;
  const prog = ((state.currentQuestionIndex + 1)/tot)*100;
  app.innerHTML = `
    <h1 class="text-lg font-medium mb-4">${state.subjectsOrder[state.currentSubjectIndex]}</h1>
    <p class="mb-4">${state.currentQuestionIndex+1}. ${q.text}</p>
    <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div class="bg-blue-600 h-2 rounded" style="width:${prog}%"></div>
    </div>
    ${q.options.map(opt => `
      <button onclick="answerQuestion('${opt}')" class="block bg-gray-100 text-left w-full py-2 px-3 mb-2 rounded">
        ${opt}
      </button>
    `).join('')}
  `;
};
const answerQuestion = answer => {
  const q = state.questionsList[state.currentQuestionIndex];
  state.answers.push({
    questionId: q.id,
    subject:    state.subjectsOrder[state.currentSubjectIndex],
    answer
  });
  if (answer === q.correct) state.score++;
  state.currentQuestionIndex++;
  if (state.currentQuestionIndex < state.questionsList.length) {
    render();
  } else {
    state.currentSubjectIndex++;
    if (state.currentSubjectIndex < state.subjectsOrder.length) {
      const next = state.subjectsOrder[state.currentSubjectIndex];
      state.questionsList       = state.questions[state.selectedLevel][state.selectedCourse][next];
      state.currentQuestionIndex = 0;
      render();
    } else {
      // fin
      window.saveResult(
        state.user,
        state.selectedLevel,
        state.selectedCourse,
        state.score,
        state.answers.length
      );
      state.view = 'result';
      render();
    }
  }
};

// 7) Render resultado
const renderResult = () => {
  const courseObj = state.questions[state.selectedLevel][state.selectedCourse];
  const summary = state.subjectsOrder.map(sub => {
    const total = courseObj[sub].length;
    const correctas = state.answers.filter(a =>
      a.subject===sub && a.answer===courseObj[sub].find(q=>q.id===a.questionId).correct
    ).length;
    return { sub, total, correctas };
  });
  const totalQ = summary.reduce((s,x)=>s+x.total,0);
  const totalC = summary.reduce((s,x)=>s+x.correctas,0);
  let classification;
  if (totalC<=10) classification='Refuerzo académico';
  else if (totalC<=20) classification='Refuerzo académico';
  else if (totalC<=30) classification='Moderado';
  else classification='Aceptable';
  const score10 = Math.round((totalC/totalQ*10)*10)/10;
  const rows = summary.map(s=>`
    <tr>
      <td class="border px-4 py-2">${s.sub}</td>
      <td class="border px-4 py-2 text-center">${s.correctas} / ${s.total}</td>
    </tr>
  `).join('');
  app.innerHTML = `
    <div class="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 class="text-2xl font-bold mb-1 text-center">Resultado Final</h1>
      <p><strong>Estudiante:</strong> ${state.user}</p>
      <p><strong>Colegio mahanaym:</strong> ${state.selectedRoute}</p>
      <p><strong>Nivel:</strong> ${state.selectedLevel}</p>
      <p><strong>Curso:</strong> ${state.selectedCourse}</p>
      <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>observación:</strong> ${state.tabSwitchCount}</p>
      <table class="w-full table-auto mb-4">
        <thead>
          <tr>
            <th class="px-4 text-left">Materia</th>
            <th class="px-4 text-center">Puntaje</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p><strong>Total:</strong> ${totalC} / ${totalQ}</p>
      <p><strong>Clasificación:</strong> ${classification}</p>
      <p><strong>Puntuación total:</strong> ${score10} / 10</p>
      <button onclick="logout()" class="bg-red-600 text-white py-2 px-4 rounded w-full">Cerrar Sesión</button>
    </div>
  `;
};

// logout y helpers
const backToCourseSelection = () => { state.view='courseDetail'; render(); };
const backToLevelSelection  = () => { state.view='levelSelection'; render(); };
const logout = () => {
  state = { view:'login', user:null, selectedLevel:null, selectedCourse:null,
            subjectsOrder:[], currentSubjectIndex:0,
            questionsList:[], currentQuestionIndex:0,
            score:0, answers:[], tabSwitchCount:0 };
  state.questions = loadQuestions();
  render();
};

// Guardar resultado en localStorage
window.saveResult = function(studentName, level, subject, score, totalQuestions) {
  const results = JSON.parse(localStorage.getItem('examResults')||'[]');
  results.push({
    studentName, level, subject,
    route: state.selectedRoute,
    score, totalQuestions,
    timestamp: new Date().toISOString(),
    tabSwitchCount: state.tabSwitchCount,
    answers: state.answers
  });
  localStorage.setItem('examResults', JSON.stringify(results));
};

console.log('🔍 window.questions:', window.questions);

render();
