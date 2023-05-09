import { loadFromLocalStorage } from '../../shared/localStorage.js';
import { renderShowProfile } from './renderShowProfile.js';

/**
 * Display profile of the logged in user
 */
export function showProfile() {
  const profile = loadFromLocalStorage('profile');

  // const profile2 = api();

  // api(ddsf).then((profile) => render(profile())

  renderShowProfile(profile);
}
