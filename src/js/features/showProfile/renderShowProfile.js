// import { isValidUrl } from '../../helpers/checkUrl.js';
// import { DEFAULT_AVATAR } from '../../shared/constants.js';

/**
 * Renders out a user profile to the html page
 * @param {object} profile User profile
 */
export function renderShowProfile(profile) {
  const displayProfile = document.querySelector('.display-profile');

  // const editProfileButton = getEditProfileButton();
  // const offeredByUser = getOfferedByUser(profile.name);

  displayProfile.innerHTML = `  
  <div class="card bg-white border-1 shadow border-primary mt-3 mx-5 mb-5 rounded-0">
    <div class="card-body text-center">
        <img src="${profile.avatar}" alt="${profile.name}" class="img-profile d-block ms-auto me-auto" width="200px"/>
        <div class="card-title fs-1 text-primary my-2 user-owner">
            ${profile.name}
        </div>
        <div class="card-text fs-4">
            Credits: ${profile.credits}
            <br />
            Wins: 
            <br />
            Offer listings: 
            <br />
        </div>
    </div>
  </div>
  
<h1 class="text-center mt-4 text-primary fw-bold">
    Offered by ${profile.name}
</h1>
`;
}

// function getEditProfileButton() {
//   return `
// <div class="d-flex justify-content-end me-5 mt-4">
//     <button
//         class="btn btn-secondary edit-avatar"
//         data-toggle="modal"
//         data-target="#feedbackModal"
//         type="submit">Edit avatar
//     </button>
// </div>`;
// }

// function getOfferedByUser(profileName) {
//   return `
// <div class="all-profile-listings d-flex justify-content-center"></div>
// `;
// }

/**
 * Creates the user profile header as html code
 * @param {string} name Name of user
 * @param {string} avatar Avatar of user
 * @returns {string} User profile header section
 */
// function getProfileHeader(name, avatar) {
//   const avatarImage = isValidUrl(avatar) ? avatar : DEFAULT_AVATAR;

//   return `
//     <div>
//         <div class="card shadow-sm bg-white border-0 mt-1 rounded-0">
//             <div class="card-body">
//                 <img
//                 src="${avatarImage}"
//                 alt="${name}"
//                 class="img-profile d-block ms-auto me-auto"
//                 />
//                 <h1 class="my-2 text-center user-owner">${name}</h1>
//             </div>
//         </div>
//     </div>`;
// }

/**
 * Creates the user profile info as html code
 * @param {string} name Name of user
 * @param {string} email Email of user
 * @returns {string} User profile info section
 */
