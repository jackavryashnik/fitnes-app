const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

const saveThemePreference = theme => {
  localStorage.setItem('theme-preference', theme);
};

const getThemePreference = () => {
  return localStorage.getItem('theme-preference') || 'light';
};

let isThemeDark = getThemePreference() === 'dark';

const togglers = document.querySelectorAll('.theme-toggle');

togglers.forEach(toggler => {
  toggler.checked = isThemeDark;

  toggler.addEventListener('change', () => {
    isThemeDark = toggler.checked;

    togglers.forEach(otherToggler => {
      if (otherToggler !== toggler) {
        otherToggler.checked = isThemeDark;
      }
    });

    document.body.setAttribute('theme', isThemeDark ? 'dark' : 'light');

    if (result === '/page-2.html') {
      document
        .querySelector('.logo')
        .setAttribute('theme', isThemeDark ? 'dark' : 'light');
    }

    saveThemePreference(isThemeDark ? 'dark' : 'light');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.setAttribute('theme', isThemeDark ? 'dark' : 'light');

  if (result === '/page-2.html') {
    document
      .querySelector('.logo')
      .setAttribute('theme', isThemeDark ? 'dark' : 'light');
  }
});
