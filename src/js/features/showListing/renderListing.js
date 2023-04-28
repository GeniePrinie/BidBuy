/**
 * Renders out a listing to the html page
 * @param {Array} listing Listing' data
 */
export function renderListings(listing) {
  const pageTitle = document.querySelector('title');
  const apiListings = document.querySelector('.display-listing');
  // const mediaImages = getMediaImages(listing.media, listing.title);
  //   const listingText = getListingText(
  //     listing.description,
  //     listing.title,
  //     listing.created,
  //     listing.endsAt,
  //     listing._count.bids,
  //     listing.bids.amount,
  //     listing.bids.bidderName,
  //     listing.bids.created,
  //     listing.seller.name
  //   );

  //   const listingTitle = listing.title;
  //   const seller= listing.seller.name;
  //   const bidCounts = listing._count.bids;
  //   const currentBid = listing._count.bids;
  //   const endsAt = listing.endsAt;
  //   const bidder = listing.endsAt;

  pageTitle.innerHTML = `BidBuy | ${listing.title}`;
  apiListings.innerHTML = '';

  //   apiListings.innerHTML += `
  //           ${mediaImages}
  //           ${listingText}
  //        `;
}

/**
 * Creates the listing medias as html code
 * @param {array} media Medias of listing
 * @param {string} title Title of listing
 * @returns {string} Listing
 */
// function getMediaImages(media, title) {
//   return `
// <div class="col-md-5">
//     <div class="container">
//       <div class="row">
//         <div class="col-md-12">
//           <div
//             id="custCarousel"
//             class="carousel slide"
//             data-ride="carousel"
//             align="center"
//           >
//             <!-- slides -->
//             <div class="carousel-inner">
//               <div class="carousel-item active">
//                 <img
//                   src="${media}"
//                   alt="${title}"
//                 />
//               </div>

//               <div class="carousel-item">
//                 <img
//                   src="${media}"
//                   alt="${title}"
//                 />
//               </div>

//               <div class="carousel-item">
//                 <img
//                   src="${media}"
//                   alt="${title}"
//                 />
//               </div>

//               <div class="carousel-item">
//                 <img
//                   src="${media}"
//                   alt="${title}"
//                 />
//               </div>
//             </div>

//             <!-- Left right -->
//             <a
//               class="carousel-control-prev arrow-container bg-primary"
//               href="#custCarousel"
//               data-slide="prev"
//             >
//               <span class="carousel-control-prev-icon"></span>
//             </a>
//             <a
//               class="carousel-control-next arrow-container bg-primary"
//               href="#custCarousel"
//               data-slide="next"
//             >
//               <span class="carousel-control-next-icon"></span>
//             </a>

//             <!-- Thumbnails -->
//             <ol class="carousel-indicators list-inline">
//               <li class="list-inline-item active">
//                 <a
//                   id="carousel-selector-0"
//                   class="selected"
//                   data-slide-to="0"
//                   data-target="#custCarousel"
//                 >
//                   <img
//                     src="${media}"
//                     class="img-fluid"
//                   />
//                 </a>
//               </li>

//               <li class="list-inline-item">
//                 <a
//                   id="carousel-selector-1"
//                   data-slide-to="1"
//                   data-target="#custCarousel"
//                 >
//                   <img
//                     src="${media}"
//                     class="img-fluid"
//                   />
//                 </a>
//               </li>

//               <li class="list-inline-item">
//                 <a
//                   id="carousel-selector-2"
//                   data-slide-to="2"
//                   data-target="#custCarousel"
//                 >
//                   <img
//                     src="${media}"
//                     class="img-fluid"
//                   />
//                 </a>
//               </li>

//               <li class="list-inline-item">
//                 <a
//                   id="carousel-selector-2"
//                   data-slide-to="3"
//                   data-target="#custCarousel"
//                 >
//                   <img
//                     src="${media}"
//                     class="img-fluid"
//                   />
//                 </a>
//               </li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>`;
// }

/**
 * Creates the listing description as html code
 * @param {string} title Title of listing
 * @param {string} description Description of listing
 * @param {string} endsAt endsAt of listing
 *  @param {array} bids bids of listing
 * @returns {string} Listing
 */
// function getListingText(title, description, endsAt, bids) {
//   return `
//  <div class="container-text col-md-7 mb-4">
// <div class="display-text text-start mt-3 mt-md-0 p-4">
//   <h1>${listingTitle}</h1>
//   <div>Sell by ${seller}</div>
//   <div>Bid counts: ${bidCounts}</div>
//   <hr />
//   <p class="fs-2">Current bid: ${currentBid}</p>

//   <p>
//     Lorem Ipsum is simply dummy text of the printing and
//     typesetting industry. Lorem Ipsum has been the industry's
//     standard dummy text ever since the 1500s, when an unknown
//     printer took a galley of type and scrambled it to make a type
//     specimen book.
//   </p>
//   <hr />
//   <p class="text-danger mt-3 fs-4 fw-bold">
//     Closes in ${countDownTime}
//   </p>
//   <div class="d-flex gap-2 mb-4">
//     <div>
//       <input value="1" type="number" class="form-control" />
//     </div>
//     <a class="btn btn-secondary" href="#">Place a bid</a>
//   </div>
//   <hr />
//   <p class="">${user} bids ${bidAmount}</p>
//   <p class="">${user} bids ${bidAmount}</p>
//   <p class="">${user} bids ${bidAmount}</p>
//   <p class="">${user} bids ${bidAmount}</p>
// </div>
// </div> `;
// }
