const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const pwEl = document.getElementById('length');

const clipbox = document.getElementById('clipbox');

const password = document.querySelector('.password');
const upperEl = document.getElementById('upperCase');
const lowerEl = document.getElementById('lowerCase');
numberEl = document.getElementById('number');

const symbolEl = document.getElementById('symbol');

const btnGenerator = document.getElementById('btn-generator');

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

clipbox.addEventListener('click', () => {
  const textarea = document.createElement('textarea');

  const passwordCopy = password.innerText;

  textarea.value = passwordCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');

  alert('Da copy password');
  textarea.remove();
});

btnGenerator.addEventListener('click', () => {
  const pwLength = +pwEl.value;
  const upper = upperEl.checked;
  const lower = lowerEl.checked;
  const number = numberEl.checked;
  const symbol = symbolEl.checked;
  password.innerText = createPassword(upper, lower, number, symbol, pwLength);
});

function createPassword(lower, upper, number, symbol, pwLength) {
  let pwGenerator = '';
  const typeCount = lower + upper + number + symbol;
  if (typeCount === 0) return '';
  const arrType = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  for (let i = 0; i < pwLength; i += typeCount) {
    arrType.forEach((type) => {
      const fnName = Object.keys(type)[0];
      pwGenerator += randomFunc[fnName]();
    });
  }
  const finalPassword = pwGenerator.slice(0, pwLength);

  return finalPassword;
}
