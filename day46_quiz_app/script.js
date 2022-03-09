const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const questionText = document.getElementById('question');
const quiz = document.getElementById('quiz');

const questionA = document.getElementById('a_text');
const questionB = document.getElementById('b_text');
const questionC = document.getElementById('c_text');
const questionD = document.getElementById('d_text');
const btnSubmit = document.querySelector('.btn');

let idx = 0;
let countCorrect = 0;

getQuestion();

btnSubmit.addEventListener('click', () => {
  const { correct } = quizData[idx];
  document.querySelectorAll('input').forEach((input) => {
    if (input.checked) {
      if (input.getAttribute('id') === correct) {
        countCorrect++;
      }
    }
  });
  idx++;
  if (idx > quizData.length - 1) {
    quiz.innerHTML = `<h2>You have finish with ${countCorrect} / ${quizData.length}. Want to reload?</h2>
    <br>
    <button class="btn" onclick="window.location.reload()">Reload</button>
    `;
    idx = 0;
  } else {
    getQuestion();
  }
});

function getQuestion() {
  deselectAnswers();
  const { question, a, b, c, d, correct } = quizData[idx];

  questionText.innerText = question;
  questionA.innerText = a;
  questionB.innerText = b;
  questionC.innerText = c;
  questionD.innerText = d;
}

function deselectAnswers() {
  document
    .querySelectorAll('input')
    .forEach((input) => (input.checked = false));
}
