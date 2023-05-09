import { logout } from '../../controllers/userController.js';
import { redirectToSearchListings } from '../../helpers/redirects.js';

/**
 * Clear local storage and redirect to login page
 */
export function logoutUser() {
  logout();
  redirectToSearchListings();
}
