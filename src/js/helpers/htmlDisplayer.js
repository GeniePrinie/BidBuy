import { loadFromLocalStorage } from '../shared/localStorage.js';
// import { getProfile } from '../controllers/profileController.js';

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const modal = document.querySelector('.modal-component');
// const displaySearch = document.querySelector('.display-search');

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

if (footer) {
  fetch('/src/html/shared/footer.html')
    .then((res) => res.text())
    .then((data) => {
      footer.innerHTML = data;
    });
}

if (modal) {
  fetch('/src/html/shared/modal.html')
    .then((res) => res.text())
    .then((data) => {
      modal.innerHTML = data;
    });
}

// if (displaySearch) {
//   displaySearch.innerHTML += `
//   <form role="search">
//     <input
//       type="search"
//       class="form-control search searchInput"
//       placeholder="Search..."
//       aria-label="Search"
//     />
//   </form>`;
// }
