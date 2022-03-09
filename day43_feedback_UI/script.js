const icons = document.querySelectorAll('.icon');

const sendBtn = document.querySelector('.btn');

const container = document.querySelector('.container');

icons.forEach((icon, idx) => {
  icon.addEventListener('click', function () {
    icons.forEach((icon) => {
      icon.classList.remove('active');
    });
    this.classList.add('active');
  });
});

sendBtn.addEventListener('click', (e) => {
  const activeEl = document.querySelector('.active');
  displayResult(activeEl.lastElementChild.innerText);
});

function displayResult(feedback) {
  container.innerHTML = `
    <i class="far fa-heart"></i>
    <span>Thank You!</span>
    <h4>Feedback ${feedback}</h4>
    <p>We'll use you feedback to imporve iur customer support</p>
    `;
}

// const ratings = document.querySelectorAll('.rating');
// const ratingsContainer = document.querySelector('.ratings-container');
// const sendBtn = document.querySelector('#send');
// const panel = document.querySelector('#panel');
// let selectedRating = 'Satisfied';

// ratingsContainer.addEventListener('click', (e) => {
//   if (e.target.parentNode.classList.contains('rating')) {
//     removeActive();
//     e.target.parentNode.classList.add('active');
//     selectedRating = e.target.nextElementSibling.innerHTML;
//   }
// });

// sendBtn.addEventListener('click', (e) => {
//   panel.innerHTML = `
//         <i class="fas fa-heart"></i>
//         <strong>Thank You!</strong>
//         <br>
//         <strong>Feedback: ${selectedRating}</strong>
//         <p>We'll use your feedback to improve our customer support</p>
//     `;
// });

// function removeActive() {
//   for (let i = 0; i < ratings.length; i++) {
//     ratings[i].classList.remove('active');
//   }
// }
