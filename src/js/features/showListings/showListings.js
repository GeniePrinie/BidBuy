import { getListings } from '../../controllers/listingController.js';
import { renderListings } from './renderListings.js';

/**
 * Displays all the listings
 */
export function showListings() {
  // get all listings from getListings()
  getListings()
    .then((listings) => {
      renderListings(listings);
    })
    .catch((error) => {
      alert(error);
    });
}
// render out all the results with renderListings.js
