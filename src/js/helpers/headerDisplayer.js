import { loadFromLocalStorage } from '../shared/localStorage.js';

const header = document.querySelector('header');

if (header) {
  if (loadFromLocalStorage('token')) {
    fetch('/src/html/shared/authenticatedHeader.html')
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
      })
      .then(() => {
        // const displayCredits = document.querySelector('.display-credits');
        // const profile = loadFromLocalStorage('profile');
        // getProfile(profile.name)
        //   .then((profileData) => {
        //     displayCredits.innerHTML = `<i class="fa-solid fa-coins"></i> ${profileData.credits}`;
        //   })
        //   .catch((error) => {
        //     alert('Error = ' + error);
        //   });
      });
  } else {
    fetch('/src/html/shared/unauthenticatedHeader.html')
      .then((res) => res.text())
      .then((data) => {
        header.innerHTML = data;
      });
  }
}
