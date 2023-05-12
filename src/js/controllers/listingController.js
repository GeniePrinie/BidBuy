import { API_AUCTION_URL } from '../shared/constants.js';
import { loadFromLocalStorage } from '../shared/localStorage.js';

/**
 * Gets all listings by using a GET api request
 * @returns {Promise} Response data from api
 */
export async function getListings() {
  const response = await fetch(
    `${API_AUCTION_URL}/listings?sort=created&sortOrder=desc`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Gets a specific listing by using a GET api request
 * @param {number} id Listing id
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
    throw new Error(`Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Creates a listing by using a POST api request
 * @param {object} body Listing body
 * @returns {Promise} Response data from api
 */
export async function makeListing(body) {
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
    throw new Error(`Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Updates a specific listing by using a PUT api request
 * @param {number} id Listing id
 * @param {object} body Listing body
 * @returns {Promise} Response data from api
 */
export async function updateListing(id, body) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(`${API_AUCTION_URL}/listings/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + bearerToken,
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Removes a specific listing by using a DELETE api request
 * @param {number} id Listing id
 * @returns {Promise} Response data from api
 */
export async function removeListing(id) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(`${API_AUCTION_URL}/listings/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + bearerToken,
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Adds a bid amount to a specific listing by using a POST api request
 * @param {number} id Listing id
 * @param {object} body Listing body
 * @returns {Promise} Response data from api
 */
export async function bidOnListing(id, body) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(`${API_AUCTION_URL}/listings/${id}/bids`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Authorization: 'Bearer ' + bearerToken,
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }

  return await response.json();
}
