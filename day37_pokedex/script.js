const API_URL = 'https://pokeapi.co/api/v2/pokemon';

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const row = document.querySelector('.row');

const fetchPokemons = async () => {
  for (let i = 1; i <= 50; i++) {
    await getData(i);
  }
};

fetchPokemons();

async function getData(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  createCard(data);
}

function createCard(pokemon) {
  const col = document.createElement('div');
  col.classList.add('col', 'col-lg-2', 'col-md-4', 'col-sm-6');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const id = pokemon.id.toString().padStart(3, '0');

  col.innerHTML = ` <div class="card" style="background-color: ${
    colors[pokemon.types[0].type.name]
  }">
          <div class="img-container">
            <img
              src="https://pokeres.bastionbot.org/images/pokemon/${
                pokemon.id
              }.png"">
          </div>
          <div class="info">
            <span class="poke-id">#${id}</span>
            <h3 class="poke-name">${name}</h3>
            <small>Type: <span class="type">${
              pokemon.types[0].type.name
            }</span></small>
          </div>    
        </div>`;
  row.appendChild(col);
}
