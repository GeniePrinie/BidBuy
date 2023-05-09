const footer = document.querySelector('footer');

if (footer) {
  fetch('/src/html/shared/footer.html')
    .then((res) => res.text())
    .then((data) => {
      footer.innerHTML = data;
    });
}
