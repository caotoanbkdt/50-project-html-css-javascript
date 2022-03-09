const header = document.querySelector('.card-header');
const title = document.querySelector('#title');
const des = document.querySelector('#des');

const userImg = document.querySelector('#userImg');
const username = document.querySelector('.name');
const date = document.querySelector('.date');

const bgImgs = document.querySelectorAll('.animated-bg');
const bgImgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt="">';

  title.innerHTML = 'Lorem ipsum dolor sit amet.';

  des.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  username.innerHTML = 'Caotoan bkdt';
  userImg.innerHTML =
    '<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">';
  date.innerHTML = 'Oct 08,2020';

  bgImgs.forEach((bgImg) => bgImg.classList.remove('animated-bg'));

  bgImgTexts.forEach((bgImgText) =>
    bgImgText.classList.remove('animated-bg-text')
  );
}
