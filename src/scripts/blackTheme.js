const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);
const storageKey = "my-custom-theme";

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

let theme = getColorPreference();

const setPreference = () => {
  localStorage.setItem(storageKey, theme);
  reflectPreference();
};

const reflectPreference = () => {
  document.body.setAttribute("theme", theme);
  if (result === '/page-2.html') {
    document
      .querySelector('.logo')
      .setAttribute('theme', getColorPreference() === 'dark' ? 'dark' : 'light');
  }
};

reflectPreference();

window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.querySelectorAll(".toggle").forEach(button => {
    button.addEventListener("click", onClick);
  });
};

const onClick = () => {
  theme = theme === "light" ? "dark" : "light";

  setPreference();
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme = isDark ? "dark" : "light";
    setPreference();
  });