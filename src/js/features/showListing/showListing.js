import { getListing } from '../../controllers/listingController.js';
import { renderListing } from './renderListing.js';

/**
 * Displays listing based of URL parameter (id) on current page
 */
export function showListing() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get('id');
  getListing(id)
    .then((listing) => {
      renderListing(listing);
    })
    .catch((error) => {
      alert(error);
    });
}
// render out all the results with renderListings.js
