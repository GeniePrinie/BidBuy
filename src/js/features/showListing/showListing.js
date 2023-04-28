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
      const listingData = {
        title: listing.title,
        description: listing.description,
        tags: listing.tags,
        media: listing.media,
        created: listing.created,
        id: listing.id,
        endsAt: listing.endsAt,
        bidCounts: listing._count.bids,
        bidsAmount: listing.bids.amount,
        bidderName: listing.bids.bidderName,
        bidsCreated: listing.bids.created,
        seller: listing.seller.name,
      };
      renderListing(listingData);
    })
    .catch((error) => {
      alert(error);
    });
}
// render out all the results with renderListings.js
