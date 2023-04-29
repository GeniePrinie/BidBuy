/**
 * Renders out a listing to the html page
 * @param {Array} listing Listing' data
 */
export function renderListing(listing) {
  const listingMediaData = {
    title: listing.title,
    media: listing.media,
  };
  const listingTextData = {
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

  for (let i = 0; i < listingTextData.bids.length; i++) {
    const data = listingTextData.bids[i];
    htmlBids += `<p>${data.bidderName} bids ${data.amount} at ${data.created}</p>`;
    if (parseFloat(data.amount) > highestBid) highestBid = data.amount;
  }

  return `
  <div class="container-text col-md-7 mb-4">
    <div class="display-text text-start mt-3 mt-md-0 p-4">
        <h1>${listingTextData.title}</h1>
        <div>Sell by ${listingTextData.seller} from ${listingTextData.created}</div>
        <div>Bid counts: ${listingTextData.bidCount}</div>
        <hr />
        <p class="fs-2">Current highest bid: ${highestBid}</p>
  
        <p>${listingTextData.description}</p>
        <hr />
        <p class="text-danger mt-3 fs-4 fw-bold">Closes in ${listingTextData.endsAt}</p>
        <div class="d-flex gap-2 mb-4">
            <div>
                <input value="1" type="number" class="form-control" />
            </div>
            <a class="btn btn-secondary" href="#">Place a bid</a>
        </div>
        <hr />
        ${htmlBids}
    </div>
  </div>
  `;
}

// /**
//  * Creates the listing description as html code
//  * @param {string} title Title of listing
//  * @param {string} description Description of listing
//  * @param {string} listingCreated Listing created
//  * @param {string} endsAt EndsAt of listing
//  * @param {number} currentBidAmount Bids amount of listing
//  * @param {string} bidder Bidder
//  * @param {string} bidsCreated Bids created
//  * @param {string} seller Seller
//  * @param {number} countBids Counts of bids
//  *
//  * @returns {string} Listing
//  */
// function getListingText(
//   listingTitle,
//   description,
//   listingCreated,
//   endsAt,
//   currentBidAmount,
//   seller,
//   countBids
// ) {
//   return `
//  <div class="container-text col-md-7 mb-4">
// <div class="display-text text-start mt-3 mt-md-0 p-4">
//   <h1>${listingTitle}</h1>
//   <div>Sell by ${seller} from ${listingCreated}</div>
//   <div>Bid counts: ${countBids}</div>
//   <hr />
//   <p class="fs-2">Current bid: ${currentBidAmount}</p>

//   <p>
//   ${description}
//   </p>
//   <hr />
//   <p class="text-danger mt-3 fs-4 fw-bold">
//     Closes in ${endsAt}
//   </p>
//   <div class="d-flex gap-2 mb-4">
//     <div>
//       <input value="1" type="number" class="form-control" />
//     </div>
//     <a class="btn btn-secondary" href="#">Place a bid</a>
//   </div>
//   <hr />
//   ${allBidders}
// </div>
// </div> `;
// }

// /**
//  * Creates the bids from each bidder
//  * @param {array} bids Comments of entry
//  * @returns {string} bids list
//  */
// const allBidders = function getAllBidders(bids) {
//   let buildBids = '';
//   bids.forEach((bid) => {
//     const { bidder, currentBidAmount, bidsCreated } = bid;

//     buildBids += `<p class="">${bidder} bids ${currentBidAmount} at ${bidsCreated}</p>`;
//     return buildBids;
//   });
// };
