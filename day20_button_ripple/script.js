const button = document.querySelector('.ripple');

button.addEventListener('click', function (e) {
  const x = e.clientX; // tu click den left
  const y = e.clientY; // tu click den top

  const buttonTop = e.target.offsetTop; // tu button den top khong phu thuoc vi tri click
  const buttonLeft = e.target.offsetLeft;

  // const temp = e.offsetX; offsetX khoang cach vi tri click den element khong tinh border

  const xInside = x - buttonLeft;
  const YInside = y - buttonTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');

  circle.style.top = YInside + 'px';
  circle.style.left = xInside + 'px';

  this.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 500);
});
