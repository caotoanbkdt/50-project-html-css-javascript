const imgs = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80',
  'https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

const body = document.body;
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');

const silders = document.querySelectorAll('.slider');

body.style.backgroundImage = `url(${imgs[0]})`;
silders[0].classList.add('active');
silders[0].style.backgroundImage = `url(${imgs[0]})`;

let idx = 0;

btnRight.addEventListener('click', () => {
  idx++;
  if (idx > imgs.length - 1) idx = 0;
  changeBackground();
});

btnLeft.addEventListener('click', () => {
  idx--;
  if (idx < 0) idx = imgs.length - 1;
  changeBackground();
});

function changeBackground() {
  silders.forEach((slider) => {
    slider.classList.remove('active');
  });
  body.style.backgroundImage = `url(${imgs[idx]})`;
  silders[idx].classList.add('active');
  silders[idx].style.backgroundImage = `url(${imgs[idx]})`;
}
