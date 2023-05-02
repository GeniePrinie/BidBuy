import { loadFromLocalStorage } from '../shared/localStorage.js';

const header = document.querySelector('header');
const footer = document.querySelector('footer');
// const modal = document.querySelector('.modal-component');

if (header) {
  let url = '';
  if (loadFromLocalStorage('token')) {
    url = '/src/html/shared/authenticatedHeader.html';
  } else {
    url = '/src/html/shared/unauthenticatedHeader.html';
  }
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      header.innerHTML = data;
    });
}

if (footer) {
  fetch('/src/html/shared/footer.html')
    .then((res) => res.text())
    .then((data) => {
      footer.innerHTML = data;
    });
}

// if (modal) {
//   fetch('/src/html/shared/modal.html')
//     .then((res) => res.text())
//     .then((data) => {
//       modal.innerHTML = data;
//     });
// }
