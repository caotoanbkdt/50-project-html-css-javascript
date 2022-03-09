const boxContainer = document.querySelector('.boxContainer');

const img = document.querySelector('.person img');
const info = document.querySelector('.info');

const persons = [
  {
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    name: 'caotoanbkdt',
    role: 'Engineer',
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    name: 'vuthuyduong',
    role: 'Engineer',
  },
  {
    img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    name: 'diepchi',
    role: 'Engineer',
  },
];

let idx = 1;

setInterval(() => {
  changeBox(persons[idx++]);
  if (idx >= persons.length) idx = 0;
}, 10000);
function changeBox(person) {
  img.src = person.img;
  info.innerHTML = ` <p>${person.name}<br>${person.role}</p>`;
}
