const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// const countEls = document.querySelectorAll('#count');

// window.addEventListener('load', (e) => {
//   countEls.forEach((countEl) => {
//     let number = countEl.getAttribute('data-count');
//     count(number, countEl);
//   });
// });

// function count(number, el) {
//   let loop = 1;
//   const interval = setInterval(() => {
//     loop += Math.ceil(+number / 200);
//     el.innerText = loop;
//     if (loop >= +number) {
//       clearInterval(interval);
//     }
//   }, 1);
// }
