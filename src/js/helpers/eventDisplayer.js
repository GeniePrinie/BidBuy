import { createModal } from '../shared/modal.js';

export function displaySuccessful(task, redirect) {
  createModal(`Successfully <em>${task}</em>`);
  const clearForm = document.querySelector('.modal-close');
  clearForm.addEventListener('click', redirect);
}

export function displayError(error) {
  createModal(`Unsuccessful. <em>${error.message}</em>`);
}
