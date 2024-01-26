function openMenu() {
  const mobileMenu = document.querySelector('.wrapper');
  const btnOpenMenu = document.querySelector('.burger-menu');
  const btnCloseMenu = document.querySelector('.burger-menu-close');

  btnOpenMenu.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
  });

  btnCloseMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
}

openMenu();
