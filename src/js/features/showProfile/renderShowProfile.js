import { isValidUrl } from '../../helpers/checkUrl.js';
import { displayTime } from '../../helpers/timeDisplayer.js';
import { DEFAULT_LISTING_IMAGE } from '../../shared/constants.js';
import { loadFromLocalStorage } from '../../shared/localStorage.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const username = params.get('username');

/**
 * Renders out a user profile to the html page
 * @param {object} profile User profile
 * @param {Array} listings Listings created by corresponding user
 */
export function renderShowProfile(profile, listings) {
  const displayProfile = document.querySelector('.display-profile');
  const pageTitle = document.querySelector('title');

  const editProfileButton = getEditProfileButton();
  const listingsOfferedByUser = getListingsOfferedByUser(listings);

  pageTitle.innerHTML = `${profile.name.toUpperCase()}'s profile`;
  displayProfile.innerHTML = `  

  ${editProfileButton}
  <div class="card bg-white border-1 shadow border-primary mt-3 mx-5 mb-5 rounded-0">
    <div class="card-body text-center">
        <img src="${profile.avatar}" alt="${profile.name}" class="img-profile d-block ms-auto me-auto" width="200px"/>
        <div class="card-title fs-1 text-primary my-2 user-owner">
            ${profile.name}
        </div>
        <div class="card-text fs-4">
            Credits: ${profile.credits}
            <br />
            Listings won: ${profile.wins.length}
            <br />
            Listings offered: ${profile._count.listings}
            <br />
        </div>
    </div>
  </div>
  
<h1 class="text-center mt-4 text-primary fw-bold">
  Listings offered by ${profile.name}
</h1>

<div class="all-profile-listings container my-5 d-flex flex-wrap gap-5 justify-content-around">${listingsOfferedByUser}</div>
`;
}

/**
 * Renders out a 'edit avatar' button design based of if user is logged in or not
 *  * @returns {string} Html code that renders out a button
 */
function getEditProfileButton() {
  let editButton = ``;
  if (username == loadFromLocalStorage('profile').name) {
    editButton = `
      <div class="d-flex justify-content-end me-5 mt-4">
        <a href="/src/html/profile/edit/" class="text-decoration-none" >
          <button
              class="btn btn-secondary edit-avatar"
              type="submit">  Edit avatar
          </button>
        </a>
      </div>`;
  }
  return editButton;
}

/**
 * Structures and creates html code from listings data
 * @param {Array} listings Listings created by user
 * @returns {string} Html code that renders out all the listing
 */
function getListingsOfferedByUser(listings) {
  let listingsOffered = ``;

  listings.forEach((listing) => {
    const mediaImage = isValidUrl(listing.media[0])
      ? listing.media
      : DEFAULT_LISTING_IMAGE;

    listingsOffered += `
        <div class="card border-0 listings-div" style="width: 18rem">
          <a href="/src/html/listing/details/?id=${
            listing.id
          }" class="text-decoration-none">
            <img
              class="card-img-top"
              src="${mediaImage}"
              alt="${listing.title}"
            />
            <div class="card-body">
              <h2 class="card-title text-primary">${listing.title}</h2>
              <p class="card-text text-primary mb-1">Current bid counts: ${
                listing._count.bids
              }</p>
              <p class="card-text text-danger">Ends at: ${displayTime(
                listing.endsAt
              )}</p>
            </div>
          </a>
        </div>
     `;
  });

  return listingsOffered;
}
