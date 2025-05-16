// js/admin-app.js

// --- LOGIN ADMIN ---
function adminLogin() {
  const user = document.getElementById('adminUsername').value.trim();
  const pass = document.getElementById('adminPassword').value.trim();
  if (user === 'admin' && pass === 'admin123') {
    renderAdminResults();
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

// --- LOGOUT ADMIN ---
function logoutAdmin() {
  window.location.reload();
}

// --- STORAGE KEYS ---
const RESULTS_KEY   = 'examResults';
const QUESTIONS_KEY = 'questions';

// --- CONTADOR DE TAB SWITCHES (solo admin) ---
let adminTabSwitchCount = 0;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) adminTabSwitchCount++;
});

// --- ESTADO ADMIN PREGUNTAS ---
let adminState = {
  questions: loadQuestions(),
  level:      null,
  course:     null,
  subject:    null,
  editIndex: -1
};

// --- CARGAR / GUARDAR DATOS ---
function loadAllResults() {
  const raw = localStorage.getItem(RESULTS_KEY);
  return raw ? JSON.parse(raw) : [];
}
function loadQuestions() {
  const raw = localStorage.getItem(QUESTIONS_KEY);
  return raw ? JSON.parse(raw) : window.questions;
}
function saveQuestions(qs) {
  localStorage.setItem(QUESTIONS_KEY, JSON.stringify(qs));
  window.questions = qs;
}

// --- AGRUPAR RESULTADOS ---
function groupResults(results) {
  return results.reduce((acc, r) => {
    acc[r.level] = acc[r.level] || {};
    acc[r.level][r.subject] = acc[r.level][r.subject] || [];
    acc[r.level][r.subject].push(r);
    return acc;
  }, {});
}

// --- TOGGLE SECCIONES ---
function toggleSection(id) {
  document.getElementById(id).classList.toggle('hidden');
}

// --- RENDER ADMIN RESULTS ---
function renderAdminResults() {
  const all     = loadAllResults();      // lee examResults
  const grouped = groupResults(all);     // agrupa por level → subject

  let html = `<h1 class="text-2xl font-semibold mb-4 text-center">
                Resultados de Estudiantes
              </h1>`;

  for (const level of Object.keys(grouped)) {
    html += `
      <button class="w-full text-left font-bold bg-gray-200 py-2 px-4 mt-2"
              onclick="toggleSection('lvl-${level}')">
        ${level.replace('_',' ')}
      </button>
      <div id="lvl-${level}" class="ml-4 mt-2 hidden">`;

    for (const course of Object.keys(grouped[level])) {
      html += `
        <button class="w-full text-left bg-gray-100 py-1 px-4 mt-1"
                onclick="toggleSection('lvl-${level}-${course}')">
          ${course}
        </button>
        <div id="lvl-${level}-${course}" class="ml-4 mt-2 hidden">`;

      // Recorre cada resultado de estudiante en este nivel y curso
      grouped[level][course].forEach(r => {
        // 1) Obtén el "banco" de preguntas para este nivel y curso:
        const bank = window.questions[r.level][r.subject];

        // 2) Construye el resumen por asignatura:
        const summaryArr = Object.entries(bank).map(([asignatura, preguntas]) => {
          const total = preguntas.length;

          // Filtra solo las respuestas que coincidan con nivel, curso y asignatura:
          const respuestas = (r.answers || []).filter(a =>
    a.subject === asignatura
  );

          // Cuenta cuántas de esas respuestas fueron correctas:
          const correctas = respuestas.reduce((acc, a) => {
            const q = preguntas.find(q => String(q.id) === String(a.questionId));
            return acc + (q && a.answer === q.correct ? 1 : 0);
          }, 0);

          return { asignatura, total, correctas };
        });

        // 3) Cálculo de totales generales:
        const totalQ = summaryArr.reduce((s, x) => s + x.total, 0);
        const totalC = summaryArr.reduce((s, x) => s + x.correctas, 0);

        // 4) Clasificación y puntaje en escala 10:
        const classification =
          totalC <= 10 ? 'Refuerzo académico' :
          totalC <= 20 ? 'Refuerzo académico' :
          totalC <= 30 ? 'Moderado' :
                         'Aceptable';
        const score10 = Math.round((totalC / totalQ * 10) * 10) / 10;

        // 5) Genera las filas de la tabla:
        const rowsHtml = summaryArr.map(s => `
          <tr>
            <td class="border px-4 py-2">
              ${s.asignatura.charAt(0).toUpperCase() + s.asignatura.slice(1)}
            </td>
            <td class="border px-4 py-2 text-center">
              ${s.correctas} / ${s.total}
            </td>
          </tr>
        `).join('');

        // 6) Inyecta el bloque HTML de este estudiante:
        html += `
          <div class="border p-4 mb-4 rounded bg-white">
            <p><strong>Estudiante:</strong> ${r.studentName}</p>
            <p><strong>Nivel:</strong> ${r.level.replace('_',' ')}</p>
            <p><strong>Curso:</strong> ${r.subject}</p>
            <p><strong>Colegio mahanaym:</strong> ${r.route}</p>
            <p><strong>Fecha:</strong> ${new Date(r.timestamp).toLocaleString()}</p>
            <p><strong>salio de la pagina:</strong> ${r.tabSwitchCount || adminTabSwitchCount}</p>

            <table class="table-auto w-full mt-2 mb-4 text-sm">
              <thead>
                <tr>
                  <th class="px-4 text-left">Asignatura</th>
                  <th class="px-4 text-center">Correctas / Total</th>
                </tr>
              </thead>
              <tbody>${rowsHtml}</tbody>
            </table>

            <p><strong>Total:</strong> ${totalC} / ${totalQ}</p>
            <p><strong>Clasificación:</strong> ${classification}</p>
            <p><strong>Puntaje total:</strong> ${score10} / 10</p>
          </div>
        `;
      });

      html += `</div>`;
    }

    html += `</div>`;
  }

  html += `
    <div class="mt-6 flex space-x-2">
      <button onclick="renderQuestionAdmin()"
              class="bg-green-600 text-white py-2 px-4 rounded">
        Gestionar Preguntas
      </button>
      <button onclick="logoutAdmin()"
              class="bg-red-600 text-white py-2 px-4 rounded">
        Cerrar Sesión
      </button>
    </div>
  `;

  document.getElementById('adminApp').innerHTML = html;
}

// --- PANEL DE GESTIÓN DE PREGUNTAS ---
function renderQuestionAdmin() {
  adminState.questions = loadQuestions();
  const qs = adminState.questions;

  // SELECTORES de nivel, curso y materia
  const levelOptions = Object.keys(qs)
    .map(l => `<option value="${l}">${l.replace('_',' ')}</option>`)
    .join('');

  let html = `
    <h1 class="text-2xl font-semibold mb-4 text-center">Gestionar Preguntas</h1>
    <div class="space-y-4">
      <div>
        <label class="block mb-1">Nivel:</label>
        <select id="selectLevel" onchange="onLevelChange()" class="border p-1 w-full">
          <option value="">-- Elige Nivel --</option>
          ${levelOptions}
        </select>
      </div>
      <div>
        <label class="block mb-1">Curso:</label>
        <select id="selectCourse" onchange="onCourseChange()" class="border p-1 w-full" disabled>
          <option value="">-- Elige Curso --</option>
        </select>
      </div>
      <div>
        <label class="block mb-1">Materia:</label>
        <select id="selectSubject" onchange="onSubjectChange()" class="border p-1 w-full" disabled>
          <option value="">-- Elige Materia --</option>
        </select>
      </div>
      <div id="question-list"></div>
      <div id="question-form" class="hidden border-t pt-4">
        <h2 class="font-semibold mb-2">Añadir / Editar Pregunta</h2>
        <input id="q-text" placeholder="Texto de la pregunta" class="border p-1 w-full mb-2"/>
        <input id="q-opt1" placeholder="Opción 1" class="border p-1 w-full mb-1"/>
        <input id="q-opt2" placeholder="Opción 2" class="border p-1 w-full mb-1"/>
        <input id="q-opt3" placeholder="Opción 3" class="border p-1 w-full mb-1"/>
        <input id="q-opt4" placeholder="Opción 4" class="border p-1 w-full mb-1"/>
        <select id="q-correct" class="border p-1 w-full mb-2">
          <option value="">-- Opción Correcta --</option>
          <option value="0">Opción 1</option>
          <option value="1">Opción 2</option>
          <option value="2">Opción 3</option>
          <option value="3">Opción 4</option>
          <option value="text">-- Texto Correcto --</option>
        </select>
        <button onclick="saveQuestion()" class="bg-blue-600 text-white py-1 px-3 rounded">
          Guardar
        </button>
        <button onclick="cancelEdit()" class="ml-2 text-gray-600 underline">
          Cancelar
        </button>
      </div>
      <button onclick="renderAdminResults()" class="mt-4 text-gray-600 underline">
        Volver a Resultados
      </button>
    </div>
  `;

  document.getElementById('adminApp').innerHTML = html;
}

function onLevelChange() {
  const lvl = document.getElementById('selectLevel').value;
  adminState.level = lvl;
  adminState.course = adminState.subject = null;
  adminState.editIndex = -1;

  const courseSelect = document.getElementById('selectCourse');
  courseSelect.innerHTML = `<option value="">-- Elige Curso --</option>` +
    Object.keys(adminState.questions[lvl]).map(c => `<option value="${c}">${c}</option>`).join('');
  courseSelect.disabled = false;

  const subjSelect = document.getElementById('selectSubject');
  subjSelect.innerHTML = `<option value="">-- Elige Materia --</option>`;
  subjSelect.disabled = true;

  document.getElementById('question-list').innerHTML = '';
  document.getElementById('question-form').classList.add('hidden');
}

function onCourseChange() {
  const crs = document.getElementById('selectCourse').value;
  adminState.course = crs;
  adminState.subject = null;
  adminState.editIndex = -1;

  const subjSelect = document.getElementById('selectSubject');
  subjSelect.innerHTML = `<option value="">-- Elige Materia --</option>` +
    Object.keys(adminState.questions[adminState.level][crs])
      .map(s => `<option value="${s}">${s}</option>`).join('');
  subjSelect.disabled = false;

  document.getElementById('question-list').innerHTML = '';
  document.getElementById('question-form').classList.add('hidden');
}

function onSubjectChange() {
  adminState.subject = document.getElementById('selectSubject').value;
  adminState.editIndex = -1;
  renderQuestionList();
  document.getElementById('question-form').classList.remove('hidden');
}

function renderQuestionList() {
  const { level, course, subject, questions } = adminState;
  const list = questions[level][course][subject] || [];
  let html = `<h3 class="font-semibold mb-2">Preguntas en ${subject}</h3>`;

  list.forEach((q, idx) => {
    const correctText = (typeof q.correct === 'number')
      ? q.options[q.correct]
      : q.correct;

    html += `
      <div class="border p-2 mb-2 rounded bg-white">
        <p>${idx+1}. ${q.text}</p>
        <p class="text-sm text-gray-600">Opciones: ${q.options.join(' | ')}</p>
        <p class="text-sm text-green-700">Correcta: ${correctText}</p>
        <button onclick="editQuestion(${idx})" class="text-blue-600 underline mr-2">Editar</button>
        <button onclick="deleteQuestion(${idx})" class="text-red-600 underline">Borrar</button>
      </div>
    `;
  });

  document.getElementById('question-list').innerHTML = html;
  cancelEdit();
}

function editQuestion(idx) {
  const { level, course, subject, questions } = adminState;
  const q = questions[level][course][subject][idx];
  document.getElementById('q-text').value = q.text;
  document.getElementById('q-opt1').value = q.options[0];
  document.getElementById('q-opt2').value = q.options[1];
  document.getElementById('q-opt3').value = q.options[2];
  document.getElementById('q-opt4').value = q.options[3];
  document.getElementById('q-correct').value =
    typeof q.correct === 'number' ? q.correct : 'text';
  adminState.editIndex = idx;
}

function deleteQuestion(idx) {
  const { level, course, subject, questions } = adminState;
  if (!confirm('¿Borrar esta pregunta?')) return;
  questions[level][course][subject].splice(idx, 1);
  saveQuestions(questions);
  renderQuestionList();
}

function saveQuestion() {
  const { level, course, subject, questions, editIndex } = adminState;
  const text = document.getElementById('q-text').value.trim();
  const opts = [
    document.getElementById('q-opt1').value.trim(),
    document.getElementById('q-opt2').value.trim(),
    document.getElementById('q-opt3').value.trim(),
    document.getElementById('q-opt4').value.trim()
  ];
  let correct = document.getElementById('q-correct').value;
  if (correct === 'text') {
    correct = opts[0];
  } else {
    correct = parseInt(correct, 10);
  }

  if (!text || opts.some(o => !o) || (correct === '' || correct == null)) {
    return alert('Completa todos los campos');
  }

  const entry = { id: Date.now(), text, options: opts, correct };

  if (editIndex >= 0) {
    questions[level][course][subject][editIndex] = entry;
  } else {
    questions[level][course][subject].push(entry);
  }
  saveQuestions(questions);
  renderQuestionList();
  // → Solo aquí: commitear a GitHub
  commitQuestionsToGitHub(adminState.questions);
}

function cancelEdit() {
  ['q-text','q-opt1','q-opt2','q-opt3','q-opt4','q-correct']
    .forEach(id => document.getElementById(id).value = '');
  adminState.editIndex = -1;
}

// Inicializa solo el listener de login
document.addEventListener('DOMContentLoaded', () => {
  // Espera a que el admin ingrese credenciales
});

// Llama a este proxy para commitear questions.js en GitHub
async function commitQuestionsToGitHub(questionsObj) {
  try {
    // Serializa + Base64
    const json          = JSON.stringify(questionsObj, null, 2);
    const contentBase64 = btoa(unescape(encodeURIComponent(json)));

    // Petición al proxy
    const res = await fetch('http://localhost:3000/api/update-file', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: 'js/questions.js',
        contentBase64,
        commitMessage: '📚 Actualiza questions.js desde Admin'
      })
    });

    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    alert('✅ Preguntas actualizadas en GitHub');
  } catch (err) {
    console.error('Commit failed:', err);
    alert('❌ Error al actualizar en GitHub: ' + err.message);
  }
}
