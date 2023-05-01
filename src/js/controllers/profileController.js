import { API_AUCTION_URL } from '../shared/constants.js';
import { loadFromLocalStorage } from '../shared/localStorage.js';

/**
 * Gets all profiles by using a GET api request
 * @returns {Promise} Response data from api
 */
export async function getProfiles() {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(`${API_AUCTION_URL}/profiles?_listings=true`, {
    method: 'POST',
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
 * Gets a profile by using a GET api request
 * @param {object} username User profile
 * @returns {Promise} Response data from api
 */
export async function getProfile(username) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(`${API_AUCTION_URL}/profiles/${username}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + bearerToken,
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }
}

/**
 * Updates a profile by using a PUT api request
 * @param {object} username User profile
 * @param {object} body Listing body
 * @returns {Promise} Response data from api
 */
export async function updateProfileAvatar(username, body) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(
    `${API_AUCTION_URL}/profiles/${username}/media`,
    {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        Authorization: 'Bearer ' + bearerToken,
        'Content-type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }
}

/**
 * Gets all listings for profile by using a GET api request
 * @param {object} username User profile
 * @returns {Promise} Response data from api
 */
export async function getAllListingsForProfile(username) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(
    `${API_AUCTION_URL}/profiles/${username}/listings`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + bearerToken,
        'Content-type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }
}

/**
 * Gets all bids for profile by using a GET api request
 * @param {object} username User profile
 * @returns {Promise} Response data from api
 */
export async function getAllBidsForProfile(username) {
  const bearerToken = loadFromLocalStorage('token');
  const response = await fetch(`${API_AUCTION_URL}/profiles/${username}/bids`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + bearerToken,
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }
}
