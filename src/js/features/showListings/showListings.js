import { getListings } from '../../controllers/listingController.js';
import { displayError } from '../../helpers/eventDisplayer.js';
import {
  renderShowListings,
  renderSearchBar,
  renderSearchedListings,
} from './renderShowListings.js';

/**
 * Displays all the listings
 */
export function showListings() {
  getListings()
    .then((listings) => {
      renderShowListings(listings);
      renderSearchBar();
      renderSearchedListings(listings);
    })
    .catch((error) => {
      displayError(error);
    });
}
