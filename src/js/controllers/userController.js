import { API_AUCTION_URL } from '../shared/constants.js';
import {
  saveToLocalStorage,
  removeFromLocalStorage,
} from '../shared/localStorage.js';

/**
 * Creates a new user by using a POST api request
 * @param {object} body User profile
 * @returns {Promise} Response data from api
 */
export async function register(body) {
  const response = await fetch(`${API_AUCTION_URL}/auth/register`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }

  return await response.json();
}

/**
 * Gets a bearer token by using a POST api request and saves it in local storage
 * @param {object} body User profile
 */
export async function login(body) {
  const response = await fetch(`${API_AUCTION_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Http Status ${response.status}`);
  }

  const { accessToken, ...user } = await response.json();

  saveToLocalStorage('token', accessToken);
  saveToLocalStorage('profile', user);
}

/**
 * Clears the local storage of bearer token and user profile
 */
export async function logout() {
  removeFromLocalStorage('token');
  removeFromLocalStorage('profile');
}
