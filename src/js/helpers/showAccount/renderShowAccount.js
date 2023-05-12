export function renderShowAccount(profile) {
  const displayAccount = document.querySelector('.display-user');

  displayAccount.innerHTML = `${profile.name}`;
}
