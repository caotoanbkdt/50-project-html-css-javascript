const text = document.querySelector('#textarea');
const tagsEl = document.querySelector('#tags');

text.focus();

text.addEventListener('keyup', (e) => {
  createTag(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    setRandom();
  }
});

function createTag(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;

    tagsEl.appendChild(tagEl);
  });
}

function setRandom() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = getRandomTag();
    setHighlight(randomTag);

    setTimeout(() => {
      offHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const random = getRandomTag();
      setHighlight(random);
    }, 100);
  }, times * 100);
}

function getRandomTag() {
  const tagsNode = document.querySelectorAll('.tag');
  return tagsNode[Math.floor(Math.random() * tagsNode.length)];
}

function setHighlight(tag) {
  tag.classList.add('highlight');
}

function offHighlight(tag) {
  tag.classList.remove('highlight');
}
