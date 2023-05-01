import { getListings } from '../../controllers/listingController.js';
import { renderShowListings } from './renderShowListings.js';

/**
 * Displays all the listings
 */
export function showListings() {
  // get all listings from getListings()
  getListings()
    .then((listings) => {
      renderShowListings(listings);
    })
    .catch((error) => {
      alert(error);
    });
}
// render out all the results with renderListings.js
