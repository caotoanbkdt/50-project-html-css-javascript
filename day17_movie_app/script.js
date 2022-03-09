const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector('.row');

const movies = document.querySelectorAll('.movie');
getApi();

async function getApi() {
  try {
    const res = await fetch(API_URL);
    const resJson = await res.json();
    const data = resJson.results;
    showMovies(data);
  } catch (error) {
    console.log(error);
  }
}

document.forms[0].addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(`${SEARCH_API}${e.target.name.value}`);
  const searchRes = await fetch(`${SEARCH_API}${e.target.name.value}`);
  const data = await searchRes.json();
  showMovies(data.results);
  e.target.name.value = '';
});

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { backdrop_path, vote_average, overview, original_title } = movie;

    const classVote = getClassByRate(vote_average);
    const col = document.createElement('div');
    col.classList.add('col');
    col.innerHTML = `
          <div class="movie">
            <img
              src= "${IMG_PATH}/${backdrop_path}"
              alt="">
            <div class="movie-info">
              <h4>${original_title}</h4>
              <span class="rating ${classVote}">${vote_average}</span>
            </div>
            <div class="description">${overview}</div>
        </div>`;
    main.appendChild(col);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
