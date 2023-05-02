import { register } from '../../controllers/userController.js';
import { createModal } from '../../shared/modal.js';
import { redirectToSearchListings } from '../../helpers/redirects.js';

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
          createModal(`User for <b>${user.name}</b> created successfully.`);
          const clearForm = document.querySelector('.modal-close-register');
          clearForm.addEventListener('click', redirectToSearchListings);
        })
        .catch((error) => {
          createModal(
            `User not created. <br>Error message: <em>${error.message}</em>.`
          );
        });
    });
  }
}
