import { getProfile } from '../../controllers/profileController.js';
import { displayError } from '../../helpers/eventDisplayer.js';
import { loadFromLocalStorage } from '../../shared/localStorage.js';
import { renderShowAccount } from './renderShowAccount.js';

/**
 * Displays the username
 */
export function showAccount() {
  const username = loadFromLocalStorage('profile').name;
  getProfile(username)
    .then((profile) => {
      renderShowAccount(profile);
    })

    .catch((error) => {
      displayError(error);
    });
}
