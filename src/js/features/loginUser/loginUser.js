import { login } from '../../controllers/userController.js';
import { createModal } from '../../shared/modal.js';
import { redirectToSearchListings } from '../../helpers/redirects.js';

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
