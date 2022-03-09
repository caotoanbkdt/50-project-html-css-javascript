const bottles = document.querySelectorAll('.bottle');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

bottles.forEach((bottle, idx) => {
  bottle.addEventListener('click', () => {
    smallCup(idx);

    const remain = 2000 - 250 * (idx + 1);
    const percent = Math.floor(((250 * (idx + 1)) / 2000) * 100);

    liters.textContent = `${100 - percent}%`;
    if (percent === 100) {
      remained.innerText = '';
    } else {
      remained.innerHTML = `<span id="liters">${
        100 - percent
      }%</span> <small>Remained</small>`;
    }
    percentage.style.height = `${percent}%`;
    percentage.innerText = `${percent}%`;
  });
});

function smallCup(idx) {
  console.log(idx);
  console.log(bottles[idx]);
  console.log(bottles[idx].classList.contains('active'));
  if (idx === 7 && bottles[idx].classList.contains('active')) idx--;
  else if (
    bottles[idx].classList.contains('active') &&
    !bottles[idx].nextElementSibling.classList.contains('active')
  ) {
    idx--;
  }
  console.log(idx);

  bottles.forEach((bottle, idx2) => {
    if (idx2 <= idx) {
      bottle.classList.add('active');
      console.log(bottles[idx]);
    } else {
      bottle.classList.remove('active');
    }
  });
}

// const smallCups = document.querySelectorAll('.cup-small');
// const listers = document.getElementById('liters');
// const percentage = document.getElementById('percentage');
// const remained = document.getElementById('remained');

// updateBigCup();

// smallCups.forEach((cup, idx) => {
//   cup.addEventListener('click', () => highlightCups(idx));
// });

// function highlightCups(idx) {
//   if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
//   else if (
//     smallCups[idx].classList.contains('full') &&
//     !smallCups[idx].nextElementSibling.classList.contains('full')
//   ) {
//     idx--;
//   }

//   smallCups.forEach((cup, idx2) => {
//     if (idx2 <= idx) {
//       cup.classList.add('full');
//     } else {
//       cup.classList.remove('full');
//     }
//   });

//   updateBigCup();
// }

// function updateBigCup() {
//   const fullCups = document.querySelectorAll('.cup-small.full').length;
//   const totalCups = smallCups.length;

//   if (fullCups === 0) {
//     percentage.style.visibility = 'hidden';
//     percentage.style.height = 0;
//   } else {
//     percentage.style.visibility = 'visible';
//     percentage.style.height = `${(fullCups / totalCups) * 330}px`;
//     percentage.innerText = `${(fullCups / totalCups) * 100}%`;
//   }

//   if (fullCups === totalCups) {
//     remained.style.visibility = 'hidden';
//     remained.style.height = 0;
//   } else {
//     remained.style.visibility = 'visible';
//     listers.innerText = `${2 - (250 * fullCups) / 1000}L`;
//   }
// }
