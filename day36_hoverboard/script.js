const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// const container = document.querySelector('.container');

// const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
// const number = 20;

// for (let i = 0; i < number * 20; i++) {
//   const square = document.createElement('div');
//   square.classList.add('square');
//   container.appendChild(square);
// }

// const squares = document.querySelectorAll('.square');
// squares.forEach((square) => {
//   square.addEventListener('mouseover', function () {
//     this.style.backgroundColor =
//       colors[Math.floor(Math.random() * colors.length)];
//   });
//   square.addEventListener('mouseout', function () {
//     this.style.backgroundColor = '#1d1d1d';
//   });
// });
