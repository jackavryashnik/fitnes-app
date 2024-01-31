import { infWrapper } from './tags';
const scrollBtn = document.querySelector('.scroll-top-btn');

function showScrollBtn() {
  if (window.scrollY > 700) {
    scrollBtn.classList.remove('is-hidden');
    infWrapper.classList.add('is-hidden');
  } else if (window.scrollY < 700) {
    scrollBtn.classList.add('is-hidden');
  }
}
window.onscroll = showScrollBtn;
scrollBtn.onclick = () => window.scrollTo(0, 0);
