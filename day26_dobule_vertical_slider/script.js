const leftSliders = document.querySelectorAll('.left-slide div');
const leftSlider = document.querySelector('.left-slide');
const rightSlider = document.querySelector('.right-slide');

const downtBtn = document.querySelector('.down-button');
const uptBtn = document.querySelector('.up-button');

let idx = 0;
let lengthslides = leftSliders.length;

leftSlider.style.top = `-${(lengthslides - 1) * 100}vh`;

uptBtn.addEventListener('click', () => changeSlider('up'));
downtBtn.addEventListener('click', () => changeSlider('down'));

function changeSlider(direction) {
  if (direction === 'up') {
    idx++;
    if (idx > leftSliders.length - 1) idx = 0;
  } else if (direction === 'down') {
    idx--;
    if (idx < 0) idx = leftSliders.length - 1;
  }

  leftSlider.style.transform = `translateY(${100 * idx}vh)`;
  rightSlider.style.transform = `translateY(-${100 * idx}vh)`;
}
