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
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html') || currentPage == '/fitnes-app/') {
      links[0].classList.add('active-link');
      links[2].classList.add('active-link');
    } else if (currentPage.includes('page-2.html')) {
      links[1].classList.add('active-link');
      links[3].classList.add('active-link');
    }
  });
}

changeActiveLink();
