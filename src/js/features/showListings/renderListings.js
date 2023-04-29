/**
 * Renders out listings to the html page
 * @param {Array} listings Listings' data
 */
export function renderListings(listings) {
  const apiListings = document.querySelector('.display-listings');

  if (listings.length == 0) {
    apiListings.innerHTML = 'No listings!'; // Add design!
    return;
  }
  apiListings.innerHTML = '';

  listings.forEach((listing) => {
    const listingTitle = listing.title;
    const mediaImage = listing.media;
    const bidCounts = listing._count.bids;
    const endsAt = listing.endsAt;
    const id = listing.id;

    apiListings.innerHTML += `
        <div class="card border-0" style="width: 18rem">
          <a href="/src/html/listing/details/?id=${id}" class="text-decoration-none">
            <img
              class="card-img-top"
              src="${mediaImage}"
              alt="${listingTitle}"
            />
            <div class="card-body">
              <h2 class="card-title text-primary">${listingTitle}</h2>
              <p class="card-text text-primary mb-1">Current bid counts: ${bidCounts}</p>
              <p class="card-text text-danger">Ends at: ${endsAt}</p>
            </div>
          </a>
        </div>
     `;
  });
}
