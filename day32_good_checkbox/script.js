const goodEl = document.getElementById('good');
const cheapEl = document.getElementById('cheap');
const fastEl = document.getElementById('fast');

let goodAcitve = false;
let cheapAcitve = false;
let fastAcitve = false;

goodEl.addEventListener('change', (e) => {
  goodAcitve = e.target.checked;
  if (fastAcitve && cheapAcitve) {
    fastEl.checked = false;
    fastAcitve = false;
  }
});

cheapEl.addEventListener('change', (e) => {
  cheapAcitve = e.target.checked;

  if (fastAcitve && goodAcitve) {
    goodEl.checked = false;
    goodAcitve = false;
  }
});

fastEl.addEventListener('change', (e) => {
  fastAcitve = e.target.checked;

  if (cheapAcitve && goodAcitve) {
    cheapEl.checked = false;
    cheapAcitve = false;
  }
});

// const toggles = document.querySelectorAll('.toggle');
// const good = document.querySelector('#good');
// const cheap = document.querySelector('#cheap');
// const fast = document.querySelector('#fast');

// toggles.forEach((toggle) =>
//   toggle.addEventListener('change', (e) => doTheTrick(e.target))
// );

// function doTheTrick(theClickedOne) {
//   if (good.checked && cheap.checked && fast.checked) {
//     if (good === theClickedOne) {
//       fast.checked = false;
//     }

//     if (cheap === theClickedOne) {
//       good.checked = false;
//     }

//     if (fast === theClickedOne) {
//       cheap.checked = false;
//     }
//   }
// }
