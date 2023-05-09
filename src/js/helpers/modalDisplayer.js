const modal = document.querySelector('.modal-component');

if (modal) {
  fetch('/src/html/shared/modal.html')
    .then((res) => res.text())
    .then((data) => {
      modal.innerHTML = data;
    });
}
