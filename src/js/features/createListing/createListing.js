import { makeListing } from '../../controllers/listingController.js';
import { createModal } from '../../shared/modal.js';
import { redirectToSearchListings } from '../../helpers/redirects.js';

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
          createModal(
            `Listing named: <b>${listing.title}</b> successfully created.`
          );
          const clearForm = document.querySelector('.modal-close-entry');
          clearForm.addEventListener('click', redirectToSearchListings);
        })
        .catch((error) => {
          createModal(
            `<b>Listing not created.</b> <br>Error message: <em>${error.message}</em>.`
          );
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
  if (listing.title == '') {
    delete listing.title;
  }

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
