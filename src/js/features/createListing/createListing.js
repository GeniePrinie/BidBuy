import { makeListing } from '../../controllers/listingController.js';
import { redirectToSearchListings } from '../../helpers/redirects.js';
import {
  displaySuccessful,
  displayError,
} from '../../helpers/eventDisplayer.js';

/**
 * Create entry based of user input
 */
export function createListing() {
  const formCreateListing = document.querySelector('.form-create-listing');

  if (formCreateListing) {
    formCreateListing.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const listingData = Object.fromEntries(formData.entries());
      const listingDataFixed = restructureUserInput(listingData);

      makeListing(listingDataFixed)
        .then((listing) => {
          displaySuccessful(
            `created listing <b>${listing.title}</b>`,
            redirectToSearchListings
          );
        })
        .catch((error) => {
          displayError(error);
        });
    });
  }
}

/**
 * Validate user input when creating a new entry
 * @param {object} listing Input data from user to create a new entry
 * @returns {object} Validated user input
 */
function restructureUserInput(listing) {
  if (listing.description == '') {
    delete listing.description;
  }

  if (listing.media == '') {
    delete listing.media;
  } else {
    listing.media = listing.media.toString().replace(/ /g, '').split(',');
  }

  if (listing.tags == '') {
    delete listing.tags;
  } else {
    listing.tags = listing.tags.toString().replace(/ /g, '').split(',');
  }

  return listing;
}
