const loveBtn = document.querySelector('.love-me');

let count = 0;
let clickTime = 0;

loveBtn.addEventListener('click', function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  count++;

  const xClient = e.clientX;
  const yClient = e.clientY;

  const xOffset = e.target.offsetLeft;
  const yOffset = e.target.offsetTop;

  const diffX = xClient - xOffset;
  const diffY = yClient - yOffset;

  const heart = document.createElement('i');
  heart.classList.add('fas', 'fa-heart', 'heart');
  heart.style.top = diffY + 'px';
  heart.style.left = diffX + 'px';

  loveBtn.appendChild(heart);
  document.querySelector('.times').innerText = count;
  // setTimeout(() => {
  //   heart.remove();
  // }, 1000);
}
