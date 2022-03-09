const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

const imgContainer = document.querySelector('.image-container');

const imgs = document.querySelectorAll('img');

let idx = 0;

let interval = setInterval(run, 3000);

function run() {
  idx++;
  translateImage();
}

function resetInterval() {
  clearInterval(interval);
  setInterval(translateImage, 3000);
}

btnNext.addEventListener('click', () => {
  idx++;
  resetInterval();
  translateImage();
});

btnPrev.addEventListener('click', () => {
  idx--;
  resetInterval();
  translateImage();
});

function translateImage() {
  if (idx >= imgs.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }
  imgContainer.style.transform = `translateX(${-500 * idx}px)`;
}
