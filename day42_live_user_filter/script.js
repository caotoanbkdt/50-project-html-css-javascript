const URL_API = 'https://randomuser.me/api/?page=3&results=50';

setTimeout(getUsers, 1000);

const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', (e) => {
  filterUser(e.target.value);
});

async function getUsers() {
  try {
    const res = await fetch(URL_API);
    const data = await res.json();
    if (data.results) {
      const liEl = document.querySelector('.list');
      liEl.innerHTML = '';
    }
    data.results.forEach((user) => createCardUser(user));
  } catch (error) {
    console.log(error);
  }
}

function createCardUser(user) {
  const liEl = document.createElement('li');
  liEl.innerHTML = `
    <a href="#">
          <img src="${user.picture.medium}" alt="">
          <div class="info">
            <span class="name">${user.login.username}</span>
            <small class="nation">${user.location.city},${user.location.country}</small>
          </div>
        </a>
  `;

  document.querySelector('.list').appendChild(liEl);
}

function filterUser(filterValue) {
  const usersEl = document.querySelectorAll('li');
  usersEl.forEach((userEl) => {
    if (userEl.innerText.toLowerCase().includes(filterValue.toLowerCase())) {
      userEl.classList.remove('hidden');
    } else {
      userEl.classList.add('hidden');
    }
  });
}
