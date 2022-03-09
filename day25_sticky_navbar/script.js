const header = document.querySelector('header');

const tags = document.querySelectorAll('ul li a');

window.addEventListener('scroll', (e) => {
  // offsetHeight chieu cao cua element khong bao gom margin
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add('active');
    tags.forEach((tag) => {
      tag.classList.add('second');
    });
  } else {
    header.classList.remove('active');
    tags.forEach((tag) => {
      tag.classList.remove('second');
    });
  }
});
