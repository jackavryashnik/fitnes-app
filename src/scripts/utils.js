export function toggleButtonsState(container, activeButton) {
  container
    .querySelectorAll('button')
    .forEach(btn => btn.classList.remove('active'));
  activeButton.classList.add('active');
}

export function hideElements(elements = []) {
  elements.forEach(elem => elem.classList.add('is-hidden'));
}

export function showElements(elements = []) {
  elements.forEach(elem => elem.classList.remove('is-hidden'));
}
