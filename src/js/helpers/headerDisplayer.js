import { loadFromLocalStorage } from '../shared/localStorage.js';
import { getProfile } from '../controllers/profileController.js';

const header = document.querySelector('header');

if (header) {
  if (loadFromLocalStorage('token')) {
    fetch('/src/html/shared/authenticatedHeader.html')
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
      })
      .then(() => {
        const username = loadFromLocalStorage('profile').name;
        getProfile(username)
          .then((profile) => {
            const displayCredits = document.querySelector('.display-credits');
            displayCredits.innerHTML = `<i class="fa-solid fa-coins"></i> ${profile.credits}`;

            const displayAccount = document.querySelector('.display-user');
            displayAccount.innerHTML = `${profile.name}`;
          })
          .catch((error) => {
            alert(error);
          });
      });
  } else {
    fetch('/src/html/shared/unauthenticatedHeader.html')
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
      });
  }
}
