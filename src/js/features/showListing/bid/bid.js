import { bidOnListing } from '../../../controllers/listingController.js';
//import { createModal } from '../../shared/modal.js';

//import { getSearchParams } from '../../router/searchParams.js';

export async function bid(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const body = data.get('body');

  const postId = form.dataset.postId;
  const replyToId = getSearchParams().replyToId;
  try {
    await bidOnListing(postId, body, replyToId);
  } catch {
    return alert('There was a problem in your bid');
  }

  form.remove();
  location.reload();
}

export const getSearchParams = () => {
  const url = new URL(window.location);
  return Object.fromEntries(url.searchParams);
};

/**
 * Create entry based of user input
 */
// export function bid() {
//   const formCreateListing = document.querySelector('.form-create-listing');

//   if (formCreateListing) {
//     formCreateListing.addEventListener('submit', (e) => {
//       e.preventDefault();

//       const form = e.target;
//       const formData = new FormData(form);
//       const listingData = Object.fromEntries(formData.entries());
//       const listingDataFixed = restructureUserInput(listingData);

//       bidOnListing(listingDataFixed)
//         .then((listing) => {
//           createModal(
//             `Listing named: <b>${listing.title}</b> successfully created.`
//           );
//           const clearForm = document.querySelector('.modal-close-entry');
//           clearForm.addEventListener('click', );
//         })
//         .catch((error) => {
//           createModal(
//             `<b>Listing not created.</b> <br>Error message: <em>${error.message}</em>.`
//           );
//         });
//     });
//   }
// }
