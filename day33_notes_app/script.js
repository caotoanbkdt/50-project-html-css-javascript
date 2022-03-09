const addBtn = document.querySelector('.add-btn');
const noteLists = localStorage.getItem('notes')
  ? JSON.parse(localStorage.getItem('notes'))
  : [];

if (noteLists.length > 0) {
  noteLists.forEach((note) => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.innerHTML = `<div class="toolboxs"> 
     <button class="btn edit-btn">
     <i class="fas fa-edit"></i> </button>
     <div class="btn delete-btn">  <i class="fas fa-trash-alt"></i> </div></div>
      <div class="main ${text ? '' : 'hidden'}"></div>
      <textarea class="${
        text ? 'hidden' : ''
      }" cols="30" rows="10" value=${text}></textarea>`;

  const editBtn = noteEl.querySelector('.edit-btn');
  const deleteBtn = noteEl.querySelector('.delete-btn');
  const main = noteEl.querySelector('.main');
  const textarea = noteEl.querySelector('textarea');

  deleteBtn.addEventListener('click', () => {
    noteEl.remove();
    updateLs();
  });

  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });

  textarea.value = text;
  main.innerHTML = marked(text);

  textarea.addEventListener('input', (e) => {
    main.innerHTML = marked(e.target.value);
    updateLs();
  });

  document.body.appendChild(noteEl);
}

function updateLs() {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}
