const background = document.getElementById('background');

const password = document.getElementById('password');

password.addEventListener('keyup', (e) => {
  const lengthIn = e.target.value;
  changeBlur(lengthIn.length);
});

function changeBlur(length) {
  background.style.filter = `blur(${20 - length * 2}px)`;
}
