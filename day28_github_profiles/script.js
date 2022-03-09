form = document.forms[0];
const search = document.getElementById('search');
const URI = 'https://api.github.com/users/';

form.addEventListener('submit', (e) => {
  removeCard();
  getUser(search.value);
  getRepos(search.value);
  search.value = '';

  e.preventDefault();
});

async function getUser(user) {
  try {
    const res = await axios(URI + user);
    createCard(res.data);
  } catch (error) {
    createError();
  }
}

async function getRepos(user) {
  try {
    const res = await axios(URI + user + '/repos');
    createRepos(res.data);
  } catch (error) {
    createError();
  }
}

function createCard(user) {
  const { bio, public_repos, followers, following, avatar_url, login } = user;
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = ` <div class="card-img">
        <div class="img-container">
          <img
            src="${avatar_url}"
            alt="">
        </div>
      </div>
     
      <div class="info">
        <h1 class="name">${login}</h1>
        <p class="description">${bio}
        </p>
        <div class="sns"><span>${following} Followers</span><span>${followers}  Following</span><span>${public_repos} Respos</span></div>
      </div>`;

  document.body.appendChild(card);
}

function createRepos(repos) {
  const projectsEl = document.createElement('div');
  projectsEl.classList.add('projects');
  projectsEl.innerHTML = repos
    .slice(0, 6)
    .map((repos) => {
      return `<a href="${repos.html_url}" class="project">
      ${repos.name}
    </a>`;
    })
    .join('');

  document.querySelector('.info').appendChild(projectsEl);
}

function removeCard() {
  const card = document.querySelector('.card');
  if (card) {
    card.remove();
  }
}

function createError() {
  const card = document.createElement('card');
  card.classList.add('card');
  card.innerHTML = '<h1>Not found</h1>';
  document.body.appendChild(card);
}
