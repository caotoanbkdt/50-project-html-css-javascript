const inputSearch = document.getElementById('search');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  search.classList.toggle('active');
  inputSearch.focus();
});
