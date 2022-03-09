const screens = document.querySelectorAll('.screen');
const gameContainer = document.querySelector('.game-container');

const startBtn = document.querySelector('.btn');
const message = document.querySelector('.message');
const time = document.querySelector('.time');
const scoreEl = document.querySelector('.score');

startBtn.addEventListener('click', () => {
  screens[0].classList.add('up');
});

let seconds = 0;
let score = 0;
const selectInsect = {};

const select_insect_btns = document.querySelectorAll('.select-insect');

select_insect_btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let img = btn.querySelector('img');
    selectInsect.img = img.getAttribute('src');
    selectInsect.alt = img.getAttribute('alt');
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(startTime, 1000);
}

function startTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  seconds++;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  time.innerHTML = `Time: ${m}:${s}`;
}

function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getLocation();

  insect.innerHTML = `
   <img src="${selectInsect.img}" alt="${
    selectInsect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)">`;
  insect.addEventListener('click', catchInsect);

  insect.style.left = `${x}px`;
  insect.style.top = `${y}px`;

  gameContainer.appendChild(insect);
}

function catchInsect() {
  score++;
  scoreEl.innerText = score;
  if (score > 19) {
    message.classList.add('show');
  }
  this.classList.add('caught');
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function getLocation() {
  let x = Math.random() * (window.innerWidth - 200) + 100;
  let y = Math.random() * (window.innerHeight - 200) + 100;

  return { x, y };
}
