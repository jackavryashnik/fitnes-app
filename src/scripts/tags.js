const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);
import { showScrollBtn } from './scrollTopBtn';

let infWrapper;
let wrapperText;
let wrapperSpan;
if (result === '/index.html' || result === '/') {
  infWrapper = document.querySelector('.inf-wrapper');
  wrapperText = document.querySelector('.wrapper-text');
  wrapperSpan = document.querySelector('.wrapper-span');
  const heroTagsList = document.querySelector('.hero-list');
  heroTagsList.addEventListener('click', addtextContent);
  document.addEventListener('click', event => {
    if (!heroTagsList.contains(event.target)) {
      infWrapper.classList.add('is-hidden');
    }
  });
  function hideIfWrapper() {
    if (window.scrollY > 700) {
      infWrapper.classList.add('is-hidden');
    }
  }
  function hideAndShow() {
    hideIfWrapper();
    showScrollBtn();
  }
  window.onscroll = hideAndShow;
}

function addtextContent(event) {
  let itemId = event.target.id;

  switch (itemId) {
    case 'li1':
      infWrapper.classList.remove('is-hidden');
      wrapperSpan.textContent = '#Sport';
      wrapperText.textContent =
        'this is an important aspect of a healthy lifestyle, which can positively affect your well-being. It helps reduce stress, increase energy, and boost self-confidence. Sport also strengthens your body and improves your cardiovascular health, while increasing your self-esteem.';
      break;
    case 'li2':
      infWrapper.classList.remove('is-hidden');
      wrapperSpan.textContent = '#Healthy ';
      wrapperText.textContent =
        'lifestyle this is the key to success in any area of life. It includes a balanced diet, regular exercise, a harmonious lifestyle, and a healthy mindset. A healthy lifestyle helps reduce the risk of chronic diseases, increase energy, and boost self-confidence.';
      break;
    case 'li3':
      infWrapper.classList.remove('is-hidden');
      wrapperSpan.textContent = '#Workout';
      wrapperText.textContent =
        'this is an important part of a healthy lifestyle. It helps strengthen your body, increase energy, and reduce stress. Workout also strengthens your heart and lungs, while increasing your self-esteem.';
      break;
    case 'li4':
      infWrapper.classList.remove('is-hidden');
      wrapperSpan.textContent = '#Diet';
      wrapperText.textContent =
        'this is the key to success in any area of life. A balanced diet includes a variety of foods, a balance of proteins, carbohydrates, and fats, and sufficient water intake. A balanced diet helps reduce the risk of chronic diseases, increase energy, and boost self-confidence.';
      break;
  }
}
