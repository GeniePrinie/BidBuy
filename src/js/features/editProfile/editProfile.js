import { updateProfileAvatar } from '../../controllers/profileController.js';
import { redirectToProfileDetails } from '../../helpers/redirects.js';
import { isValidUrl } from '../../helpers/checkUrl.js';
import { DEFAULT_AVATAR } from '../../shared/constants.js';
import { loadFromLocalStorage } from '../../shared/localStorage.js';
import {
  displaySuccessful,
  displayError,
} from '../../helpers/eventDisplayer.js';

/**
 * Edit profile avatar based of user input
 */
export function editProfile() {
  const formEditAvatar = document.querySelector('.form-edit-avatar');
  const username = loadFromLocalStorage('profile').name;

  if (formEditAvatar) {
    formEditAvatar.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const avatarData = Object.fromEntries(formData.entries());
      const avatarDataFixed = isValidUrl(avatarData.avatar)
        ? avatarData
        : { avatar: DEFAULT_AVATAR };
      updateProfileAvatar(username, avatarDataFixed)
        .then(() => {
          displaySuccessful(`edited your avatar`, redirectToProfileDetails);
        })
        .catch((error) => {
          displayError(error);
        });
    });
  }
}
