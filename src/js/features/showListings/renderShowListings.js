import { isValidUrl } from '../../helpers/checkUrl.js';
import { DEFAULT_LISTING_IMAGE } from '../../shared/constants.js';

/**
 * Renders out listings to the html page
 * @param {Array} listings Listings' data
 */
export function renderShowListings(listings) {
  const apiListings = document.querySelector('.display-listings');

  if (listings.length == 0) {
    apiListings.innerHTML = 'No listings!'; // Add design!
    return;
  }
  apiListings.innerHTML = '';

  listings.forEach((listing) => {
    const mediaImage = isValidUrl(listing.media[0])
      ? listing.media
      : DEFAULT_LISTING_IMAGE;

    apiListings.innerHTML += `
        <div class="card border-0 listings-div" style="width: 18rem">
          <a href="/src/html/listing/details/?id=${listing.id}" class="text-decoration-none">
            <img
              class="card-img-top"
              src="${mediaImage}"
              alt="${listing.title}"
            />
            <div class="card-body">
              <h2 class="card-title text-primary">${listing.title}</h2>
              <p class="card-text text-primary mb-1">Current bid counts: ${listing._count.bids}</p>
              <p class="card-text text-danger">Ends at: ${listing.endsAt}</p>
            </div>
          </a>
        </div>
     `;
  });
}

/**
 * Renders out a search bar in the header
 */
export function renderSearchBar() {
  const searchBar = document.querySelector('.display-search');
  searchBar.innerHTML = `
    <form role="search">
      <input
        type="search"
        class="form-control search"
        placeholder="Search..."
        aria-label="Search"
      />
    </form>`;
}

/**
 * Filters listings based on search from user
 * @param {Array} listings Listings' data
 * @returns {Array} Filtered listings
 */
export function renderSearchedListings(listings) {
  const userSearch = document.querySelector('.search');

  userSearch.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredListings = listings.filter((listing) => {
      if (listing.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderShowListings(filteredListings);
  };
}
