const labels = document.querySelectorAll('label');

labels.forEach((label) => {
  let newLabel = label.textContent.split('');
  let tempHtml = document.createElement('label');
  newLabel.forEach((letter, index) => {
    const span = document.createElement('span');
    span.style.transitionDelay = 50 * index + 'ms';
    span.textContent = letter;
    tempHtml.appendChild(span);
  });
  label.innerHTML = tempHtml.innerHTML;
});

// labels.forEach((label) => {
//   label.innerHTML = label.innerText
//     .split('')
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join('');
// });
