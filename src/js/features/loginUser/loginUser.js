import { login } from '../../controllers/userController.js';
import { createModal } from '../../shared/modal.js';
import { redirectToSearchListings } from '../../helpers/redirects.js';

/**
 * Redirect to home if bearer token already exists
 */
// export function checkIfLoggedOut() {
//   const token = load("token");

//   if (token !== null) {
//     redirectToSearchListings();
//   }
// }

/**
 * Log user into application based of user input
 */
export function loginUser() {
  const formLogin = document.querySelector('.form-login');

  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      formLogin.checkValidity();
      formLogin.classList.add('was-validated');

      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      login(profile)
        .then(() => {
          createModal(`Successful login.`);
          const clearForm = document.querySelector('.modal-close-login');
          clearForm.addEventListener('click', redirectToSearchListings);
        })
        .catch((error) => {
          createModal(
            `Invalid user credentials. <br>Error message: <em>${error.message}</em>.`
          );
        });
    });
  }
}

// /**
//  * Create entry based of user input
//  */
// export function login() {
//   const formCreateListing = document.querySelector('.form-create-listing');

//   if (formCreateListing) {
//     formCreateListing.addEventListener('submit', (e) => {
//       e.preventDefault();

//       const form = e.target;
//       const formData = new FormData(form);
//       const listingData = Object.fromEntries(formData.entries());
//       const listingDataFixed = restructureUserInput(listingData);

//       makeListing(listingDataFixed)
//         .then((listing) => {
//           createModal(
//             `Listing named: <b>${listing.title}</b> successfully created.`
//           );
//           const clearForm = document.querySelector('.modal-close-entry');
//           clearForm.addEventListener('click', redirectToSearchListings);
//         })
//         .catch((error) => {
//           createModal(
//             `<b>Listing not created.</b> <br>Error message: <em>${error.message}</em>.`
//           );
//         });
//     });
//   }
// }

// /**
//  * Validate user input when creating a new entry
//  * @param {object} listing Input data from user to create a new entry
//  * @returns {object} Validated user input
//  */
// function restructureUserInput(listing) {
//   if (listing.title == '') {
//     delete listing.title;
//   }

//   if (listing.description == '') {
//     delete listing.description;
//   }

//   if (listing.media == '') {
//     delete listing.media;
//   } else {
//     listing.media = listing.media.toString().replace(/ /g, '').split(',');
//   }

//   if (listing.tags == '') {
//     delete listing.tags;
//   } else {
//     listing.tags = listing.tags.toString().replace(/ /g, '').split(',');
//   }

//   return listing;
// }
