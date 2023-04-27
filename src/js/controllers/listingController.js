import { API_AUCTION_URL } from '../shared/constants.mjs';
import { loadFromLocalStorage } from '../shared/localStorage.js';

/**
 * Gets all listings by using a GET api request
 * @returns {Promise} Response data from api
 */
export async function getListings() {
  const response = await fetch(`${API_AUCTION_URL}/listings`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Invalid endpoint: Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Gets a specific listing by using a GET api request
 * @param {number} id Entry id
 * @returns {Promise} Response data from api
 */
export async function getListing(id) {
  const response = await fetch(
    `${API_AUCTION_URL}/listings/${id}?_bids=true&_seller=true`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Invalid entry id: Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Creates an entry by using a POST api request
 * @param {object} body Entry body
 * @returns {Promise} Response data from api
 */
export async function createListing(body) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(`${API_AUCTION_URL}/listings`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + bearerToken,
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Invalid input data: Http Status ${response.status}`);
  }

  return await response.json();
}

// /**
//  * Updates a specific entry by using a PUT api request
//  * @param {number} id Entry id
//  * @param {object} body Entry body
//  * @returns {Promise} Response data from api
//  */
// export async function updateEntry(id, body) {
//   const apiEndpoint = `${API_SOCIAL_URL}/posts/${id}`;
//   const apiMethod = 'PUT';
//   const apiBody = JSON.stringify(body);

//   const response = await fetchRequestWithToken(apiEndpoint, apiMethod, apiBody);

//   if (!response.ok) {
//     throw new Error(`Invalid input data: Http Status ${response.status}`);
//   }

//   return await response.json();
// }

// /**
//  * Removes a specific entry by using a DELETE api request
//  * @param {number} id Entry id
//  * @returns {Promise} Response data from api
//  */
// export async function removeEntry(id) {
//   const apiEndpoint = `${API_SOCIAL_URL}/posts/${id}`;
//   const apiMethod = 'DELETE';
//   const apiBody = '';

//   const response = await fetchRequestWithToken(apiEndpoint, apiMethod, apiBody);

//   if (!response.ok) {
//     throw new Error(`Invalid entry id: Http Status ${response.status}`);
//   }

//   return await response.json();
// }

// /**
//  * Adds a reaction emoji to a specific entry by using a PUT api request
//  * @param {number} id Entry id
//  * @param {string} emoji Entry emoji
//  * @returns {Promise} Response data from api
//  */
// export async function reactToEntry(id, emoji) {
//   const apiEndpoint = `${API_SOCIAL_URL}/posts/${id}/react/${emoji}`;
//   const apiMethod = 'PUT';
//   const apiBody = '';

//   const response = await fetchRequestWithToken(apiEndpoint, apiMethod, apiBody);

//   if (!response.ok) {
//     throw new Error(`Invalid entry id: Http Status ${response.status}`);
//   }

//   return await response.json();
// }

// /**
//  * Adds a comment to a specific entry by using a POST api request
//  * @param {number} id Entry id
//  * @param {object} body Entry body
//  * @returns {Promise} Response data from api
//  */
// export async function commentOnEntry(id, body) {
//   const apiEndpoint = `${API_SOCIAL_URL}/posts/${id}/comment`;
//   const apiMethod = 'POST';
//   const apiBody = JSON.stringify(body);

//   const response = await fetchRequestWithToken(apiEndpoint, apiMethod, apiBody);

//   if (!response.ok) {
//     throw new Error(`Invalid entry id: Http Status ${response.status}`);
//   }

//   return await response.json();
// }
