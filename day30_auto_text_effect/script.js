const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'I studying Javascript';
let speed = 300 / speedEl.value;
speedEl.focus();

let idx = 1;
displayText();

function displayText() {
  textEl.innerText = text.slice(0, idx);

  if (idx > text.length) idx = 1;
  idx++;
  setTimeout(() => {
    displayText();
  }, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
});
