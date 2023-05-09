import { login } from '../../controllers/userController.js';
import { redirectToSearchListings } from '../../helpers/redirects.js';

import {
  displaySuccessful,
  displayError,
} from '../../helpers/eventDisplayer.js';

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
          displaySuccessful(`logged in`, redirectToSearchListings);
        })
        .catch((error) => {
          displayError(error);
        });
    });
  }
}
