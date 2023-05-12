/**
 * Redirects to login page
 */
export function redirectToLoginUser() {
  window.location.replace('/src/html/user/login/');
}

/**
 * Redirects to home page
 */
export function redirectToSearchListings() {
  window.location.replace('/src/html/listing/search/');
}

/**
 * Redirects to profile page
 */
export function redirectToProfileDetails() {
  window.location.replace('/src/html/profile/details/');
}

/**
 * Redirects to profile page
 */
export function reloadCurrentPage() {
  location.reload();
}
