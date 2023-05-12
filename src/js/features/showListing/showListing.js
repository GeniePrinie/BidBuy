import { loadFromLocalStorage } from '../../shared/localStorage.js';
import { renderShowListing } from './renderShowListing.js';
import { reloadCurrentPage } from '../../helpers/redirects.js';
import {
  displaySuccessful,
  displayError,
} from '../../helpers/eventDisplayer.js';
import {
  getListing,
  bidOnListing,
} from '../../controllers/listingController.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

/**
 * Displays listing based of URL parameter (id) on current page
 */
export async function showListing() {
  await getListing(id)
    .then((listing) => {
      renderShowListing(listing);
    })
    .catch((error) => {
      alert(error);
    });
}

export function placeBid() {
  const formBidOnListing = document.querySelector('.bid-on-listing');

  if (formBidOnListing) {
    formBidOnListing.addEventListener('submit', (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const bidData = Object.fromEntries(formData.entries());
      const bid = parseFloat(bidData.amount);
      const bidApproved = checkBid(bid);

      if (bidApproved) {
        bidOnListing(id, { amount: bid })
          .then((listing) => {
            displaySuccessful(
              `bid on listing <b>${listing.title}</b>`,
              reloadCurrentPage
            );
          })
          .catch((error) => {
            displayError(error);
          });
      } else {
        displayError(new Error(`Bid too low!`));
      }
    });
  }
}

function checkBid(bid) {
  const highestBid = loadFromLocalStorage(id);
  if (bid > highestBid.amount) return true;

  return false;
}
