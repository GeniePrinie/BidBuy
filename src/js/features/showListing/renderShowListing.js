import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../../shared/localStorage.js';

/**
 * Renders out a listing to the html page
 * @param {Array} listing Listing' data
 */
export function renderShowListing(listing) {
  const listingMediaData = {
    title: listing.title,
    media: listing.media,
  };
  const listingTextData = {
    id: listing.id,
    title: listing.title,
    description: listing.description,
    tags: listing.tags,
    created: listing.created,
    endsAt: listing.endsAt,
    bids: listing.bids,
    seller: listing.seller.name,
    bidCount: listing._count.bids,
  };

  const pageTitle = document.querySelector('title');
  const apiListing = document.querySelector('.display-listing');

  pageTitle.innerHTML = `BidBuy | ${listing.title}`;
  apiListing.innerHTML = '';

  apiListing.innerHTML += `
            ${listingImages(listingMediaData)}
            ${listingText(listingTextData)}
        `;
}

/**
 * Creates the listing medias as html code
 * @param {object} listingMediaData Images and title of listing
 * @returns {string} Listing
 */
function listingImages(listingMediaData) {
  const media = listingMediaData.media;
  const title = listingMediaData.title;

  let htmlSlides = ``;
  let htmlThumbnails = ``;

  for (let i = 0; i < media.length; i++) {
    if (i == 0) {
      htmlSlides += `
    <div class="carousel-item active">
        <img src="${media[i]}" alt="${title}"/>
    </div>`;

      htmlThumbnails += `
    <li class="list-inline-item active">
        <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel">
            <img src="${media[i]}" class="img-fluid"/>
        </a>
    </li>`;
    } else {
      htmlSlides += `
        <div class="carousel-item">
            <img src="${media[i]}" alt="${title}"/>
        </div>`;

      htmlThumbnails += `
        <li class="list-inline-item">
            <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#custCarousel">
                <img src="${media[i]}" class="img-fluid"/>
            </a>
        </li>`;
    }
  }

  return `
<div class="col-md-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            id="custCarousel"
            class="carousel slide"
            data-interval="false"
            data-ride="carousel"
            align="center"
          >
            <!-- slides -->
            <div class="carousel-inner display-carousel-img">
                ${htmlSlides}
            </div>

            <!-- Left right -->
            <a
              class="carousel-control-prev arrow-container bg-primary"
              href="#custCarousel"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a
              class="carousel-control-next arrow-container bg-primary"
              href="#custCarousel"
              data-slide="next"
            >
              <span class="carousel-control-next-icon"></span>
            </a>

            <!-- Thumbnails -->
            <ol class="carousel-indicators list-inline">
                ${htmlThumbnails}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

/**
 * Creates the listing description as html code
 
 * @param {object} listingTextData Detailed info about listing
 * @returns {string} Listing description
 */
function listingText(listingTextData) {
  let htmlBids = ``;
  let highestBid = 0;
  let tags = ``;
  let description = ``;
  let bidButton = ``;

  const closingDate = listingTextData.endsAt.replace('T', ' ').replace('Z', '');

  for (let i = 0; i < listingTextData.bids.length; i++) {
    const data = listingTextData.bids[i];
    htmlBids += `<p>${data.bidderName} bids ${data.amount} at ${data.created}</p>`;
    if (parseFloat(data.amount) > highestBid) highestBid = data.amount;
  }

  saveToLocalStorage(listingTextData.id, { amount: highestBid });
  if (loadFromLocalStorage('token')) {
    bidButton = `<button class="btn btn-secondary"  type="submit" data-toggle="modal" data-target="#feedbackModal">Place a bid</button>`;
  } else {
    bidButton = `<button disabled class="btn btn-dark"  type="submit" >Place a bid</button>`;
  }

  listingTextData.tags.forEach((tag) => {
    tags += `#${tag.toLowerCase()} `;
  });

  if (listingTextData.description)
    description = 'Description: ' + listingTextData.description;

  return `
  <div class="container-text col-md-7 mb-4">
    <div class="display-text text-start mt-3 mt-md-0 p-4">
        <h1>${listingTextData.title}</h1>
        <em class="text-primary" >${tags}</em>
        <hr />
        <div>Listed by: <b>${listingTextData.seller}</b> from ${listingTextData.created}</div>
        <div>Number of bids: ${listingTextData.bidCount}</div>
        <hr />
        <p class="fs-2">Current highest bid: ${highestBid}</p>
  
        <p>${description}</p>
        <hr />
        <p class="text-danger mt-3 fs-4 fw-bold">Bidding closes at ${closingDate}</p>
        
          <form class="d-flex gap-2 mb-4 bid-on-listing">
              <div>
                  <input name="amount" placeholder="amount" type="number" class="form-control" />
              </div>
              ${bidButton}
          </form>
        
        <hr />
        ${htmlBids}
    </div>
  </div>
  `;
}
