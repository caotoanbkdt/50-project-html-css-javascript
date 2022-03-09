const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', (e) => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = 4;
  }

  update();
});

prevBtn.addEventListener('click', (e) => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else if (currentActive === 1) {
    prevBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
