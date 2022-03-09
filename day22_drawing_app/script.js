const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const colorEl = document.getElementById('color');
const clear = document.getElementById('clear');
const sizeSet = document.getElementById('size');

let size = +sizeSet.textContent;

console.log(size);
let color = 'black';

let isPressed = false;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
  // chi khi press mouse thi moi ve
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    // gan lai vi tri bat dau ve line moi vi luc dau x,y la gia tri luc mouse down dau tien
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath(); // khoi tao
  // arc(x, y, radius, startAngle, endAngle, counterclockwise)

  ctx.arc(x, y, size, 0, Math.PI * 2, true); // Outer circle
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // di chuyen toi toa do x1,y1
  ctx.lineTo(x2, y2); // ve toi toa do x2 ,y2
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

drawCircle(100, 200);

drawLine(300, 300, 200, 500);

decrease.addEventListener('click', () => {
  size--;
  if (size < 0) size = 20;
  sizeSet.innerText = size;
});

increase.addEventListener('click', () => {
  size++;
  sizeSet.innerText = size;
});

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
