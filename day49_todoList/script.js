const work = document.getElementById('work');
const lists = document.getElementById('lists');
const listsWork = localStorage.getItem('lists')
  ? JSON.parse(localStorage.getItem('lists'))
  : [];
work.focus();

const form = document.forms[0];

if (listsWork) {
  listsWork.forEach((todo) => {
    addWork(todo);
  });
}

form.addEventListener('submit', (e) => {
  addWork();
  e.preventDefault();
});

function addWork(todo) {
  const liEl = document.createElement('li');
  liEl.classList.add(`list-item`);

  if (todo && todo.completed) {
    liEl.innerText = todo.text;
    liEl.classList.add(`completed`);
  } else {
    liEl.innerText = work.value;
    listsWork.push({ text: work.value, completed: false });

    localStorage.setItem('lists', JSON.stringify(listsWork));
  }

  liEl.addEventListener('click', () => {
    liEl.classList.toggle('completed');
    const index = JSON.parse(localStorage.getItem('lists')).findIndex(
      (work) => work.text === liEl.textContent
    );
    const newList = JSON.parse(localStorage.getItem('lists'));
    newList[index].completed = liEl.classList.contains('completed');
    localStorage.setItem('lists', JSON.stringify(newList));
  });

  liEl.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const newList = JSON.parse(localStorage.getItem('lists')).filter(
      (work) => work.text !== liEl.textContent
    );
    localStorage.setItem('lists', JSON.stringify(newList));
    liEl.remove();
  });

  lists.appendChild(liEl);
  work.value = '';
}

// const form = document.getElementById('form');
// const input = document.getElementById('input');
// const todosUL = document.getElementById('todos');

// const todos = JSON.parse(localStorage.getItem('todos'));

// if (todos) {
//   todos.forEach((todo) => addTodo(todo));
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   addTodo();
// });

// function addTodo(todo) {
//   let todoText = input.value;

//   if (todo) {
//     todoText = todo.text;
//   }

//   if (todoText) {
//     const todoEl = document.createElement('li');
//     if (todo && todo.completed) {
//       todoEl.classList.add('completed');
//     }

//     todoEl.innerText = todoText;

//     todoEl.addEventListener('click', () => {
//       todoEl.classList.toggle('completed');
//       updateLS();
//     });

//     todoEl.addEventListener('contextmenu', (e) => {
//       e.preventDefault();

//       todoEl.remove();
//       updateLS();
//     });

//     todosUL.appendChild(todoEl);

//     input.value = '';

//     updateLS();
//   }
// }

// function updateLS() {
//   todosEl = document.querySelectorAll('li');

//   const todos = [];

//   todosEl.forEach((todoEl) => {
//     todos.push({
//       text: todoEl.innerText,
//       completed: todoEl.classList.contains('completed'),
//     });
//   });

//   localStorage.setItem('todos', JSON.stringify(todos));
// }
