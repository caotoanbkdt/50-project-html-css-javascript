const btn = document.getElementById('btn');
const toasts = document.querySelector('.toasts');

const messages = ['Message One', 'Message Two', 'Message Three'];
const types = ['success', 'error', 'info'];
btn.addEventListener('click', (e) => {
  const rnd = Math.floor(Math.random() * messages.length);
  createNoti(messages[rnd], types[rnd]);
});

function createNoti(message = null, type = 'info') {
  const messageEl = document.createElement('div');
  messageEl.classList.add('message', type);
  messageEl.textContent = message;
  toasts.appendChild(messageEl);

  setTimeout(() => {
    messageEl.remove();
  }, 3000);
}

// const button = document.getElementById('button');
// const toasts = document.getElementById('toasts');

// const messages = [
//   'Message One',
//   'Message Two',
//   'Message Three',
//   'Message Four',
// ];

// const types = ['info', 'success', 'error'];

// button.addEventListener('click', () => createNotification());

// function createNotification(message = null, type = null) {
//   const notif = document.createElement('div');
//   notif.classList.add('toast');
//   notif.classList.add(type ? type : getRandomType());

//   notif.innerText = message ? message : getRandomMessage();

//   toasts.appendChild(notif);

//   setTimeout(() => {
//     notif.remove();
//   }, 3000);
// }

// function getRandomMessage() {
//   return messages[Math.floor(Math.random() * messages.length)];
// }

// function getRandomType() {
//   return types[Math.floor(Math.random() * types.length)];
// }
