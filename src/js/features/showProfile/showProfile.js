import { displayError } from '../../helpers/eventDisplayer.js';
import { loadFromLocalStorage } from '../../shared/localStorage.js';
import { renderShowProfile } from './renderShowProfile.js';
import {
  getProfile,
  getAllListingsForProfile,
} from '../../controllers/profileController.js';

/**
 * Displays profile based of URL parameter (username) on current page
 */
export function showProfile() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  let username = params.get('username');

  if (!username) {
    username = loadFromLocalStorage('profile').name;
    document.location.href = '/src/html/profile/details/?username=' + username;
  }
  getProfile(username)
    .then((profile) => {
      getAllListingsForProfile(username).then((listings) => {
        renderShowProfile(profile, listings);
      });
    })
    .catch((error) => {
      displayError(error);
    });
}
