import { register } from '../../controllers/userController.js';
import { redirectToLoginUser } from '../../helpers/redirects.js';
import {
  displaySuccessful,
  displayError,
} from '../../helpers/eventDisplayer.js';

/**
 * Register a new account based of user input
 */
export function registerUser() {
  const formNewAccount = document.querySelector('.form-register');

  if (formNewAccount) {
    formNewAccount.addEventListener('submit', (e) => {
      e.preventDefault();
      formNewAccount.checkValidity();
      formNewAccount.classList.add('was-validated');

      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      register(profile)
        .then((user) => {
          displaySuccessful(
            `registered user ${user.name}`,
            redirectToLoginUser
          );
        })
        .catch((error) => {
          displayError(error);
        });
    });
  }
}
