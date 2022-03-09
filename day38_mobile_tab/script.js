const tabs = document.querySelectorAll('.tab li');
const images = document.querySelectorAll('.page img');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    tabs.forEach((tab, index) => {
      tab.classList.remove('active');
      images[index].classList.remove('active');
    });
    tabs[index].classList.add('active');
    images[index].classList.add('active');
  });
});
