// import { getProfile } from '../../controllers/profileController.js';
import { getProfile } from '../../controllers/profileController.js';
import { displayError } from '../../helpers/eventDisplayer.js';
import { loadFromLocalStorage } from '../../shared/localStorage.js';
import { renderShowCredits } from './renderShowCredits.js';

/**
 * Displays the credits
 */
export function showCredits() {
  const username = loadFromLocalStorage('profile').name;
  getProfile(username)
    .then((profile) => {
      renderShowCredits(profile);
    })

    .catch((error) => {
      displayError(error);
    });
}
