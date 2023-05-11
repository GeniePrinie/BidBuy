import { loadFromLocalStorage } from '../shared/localStorage.js';

const header = document.querySelector('header');

if (header) {
  if (loadFromLocalStorage('token')) {
    fetch('/src/html/shared/authenticatedHeader.html')
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
      });
  } else {
    fetch('/src/html/shared/unauthenticatedHeader.html')
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
      });
  }
}
