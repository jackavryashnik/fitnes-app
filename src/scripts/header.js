function openMenu() {
  const mobileMenu = document.querySelector('.mobile-menu-wrapper');
  const links = document.querySelectorAll('.nav-link');
  const btnOpenMenu = document.querySelector('.burger-menu');
  const btnCloseMenu = document.querySelector('.burger-menu-close');

  btnOpenMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  btnCloseMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });

  links.forEach(link =>
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
    })
  );
}

openMenu();

function changeActiveLink() {
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('load', () => {
    const currentPage = '.' + window.location.pathname; // на живій сторінці на гіті просто працює window.location.pathname

    // на живій сторінці на гіті має спрацювати варіант: currentPage === '/fitnes-app/'
    if (currentPage === './') {
      links[0].classList.add('active-link');
    } else {
      links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active-link');
        }
      });
    }
  });
}

changeActiveLink();
