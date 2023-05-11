export function renderShowCredits(profile) {
  const displayCredits = document.querySelector('.display-credits');

  displayCredits.innerHTML = `<i class="fa-solid fa-coins"></i> ${profile.credits}`;
}
