import { createModal } from '../shared/modal.js';

/**
 * Displays a message with a modal and navigates to new page
 * @param {string} task Completed task
 * @param {Function} redirect Function that redirects user to desired location
 */
export function displaySuccessful(task, redirect) {
  createModal(`Successfully <em>${task}</em>`);
  const clearForm = document.querySelector('.modal-close');
  clearForm.addEventListener('click', redirect);
}

/**
 * Displays an error message with a modal
 * @param {Error} error Error
 */
export function displayError(error) {
  createModal(`Unsuccessful. <em>${error.message}</em>`);
}
