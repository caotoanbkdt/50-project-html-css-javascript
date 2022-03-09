const container = document.querySelector('.container');

const row = document.createElement('div');

const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  let column = document.createElement('div');
  let imgEl = document.createElement('img');

  imgEl.setAttribute(
    'src',
    `https://source.unsplash.com/random/${300 + i}x300`
  );

  // img.src = `https://source.unsplash.com/random/${300 + i}x300`
  row.classList.add('row');
  column.classList.add('column');
  column.appendChild(imgEl);

  row.appendChild(column);
}

container.appendChild(row);
