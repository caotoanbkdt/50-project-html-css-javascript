const bg = document.querySelector('.bg');
const count = document.querySelector('.count');
var i = 0;

let changeValue = setInterval(() => {
  i++;
  if (i > 99) {
    clearInterval(changeValue);
    count.innerText = '';
  }
  count.innerText = i + '%';
  count.style.opacity = scale(i, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;
}, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
