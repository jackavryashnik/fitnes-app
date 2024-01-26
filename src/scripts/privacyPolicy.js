export default function privacyModal() {
  const privacy = document.querySelector('.foter-privacy-policy');
  const overlay = document.querySelector('.modal-overlay');

  privacy.addEventListener('click', () => overlay.classList.add('is-open'));
  overlay.addEventListener('click', () => overlay.classList.remove('is-open'));
}

privacyModal();
