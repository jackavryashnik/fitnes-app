import sprite from '../images/sprite.svg'

const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

const messageInfo = document.querySelector('.message-info');

if (result === '/page-2.html') {
  const favoritesList = document.querySelector('.favorites-list');

  let storage = 'favorites';
  let storageItem = localStorage.getItem(storage);

  if (storageItem) {
    try {
      const parsedItem = JSON.parse(storageItem);
      parsedItem.forEach(elem => {
        const markup = `<li class="favorites-list-item id=${elem.id}">
            <div class="favorites-card-header">
                <div class="favorites-oval">
                    <span>WORKOUT</span>
                </div>
                <button class="favorites-icon-svg" aria-label="trash" type="button">
                    <svg width="16" height="16" fill="none">
                        <use href="${sprite}#icon-trash"></use>
                    </svg>
                </button>
                <button
                    data-id="${elem.id}"
                    class="favorites-list-button"
                    aria-label="start"
                    type="button">Start
                        <svg class="favorites-list-button-icon" width="14" height="14" stroke="#1B1B1B">
                            <use href="${sprite}#icon-arrow"></use>
                        </svg>
                </button>
                </div>
                <div class="favorites-list-container">
                    <svg class="favorite-list-svg" width="24" height="24">
                        <use href="${sprite}#icon-human-ex"></use>
                    </svg>
                    <h3 class="favorites-list-text">${elem.name}</h3>
                </div>
                <div class="favorites-card-text">
                <ul class="favorites-card-text-list">
                    <li class="favorites-card-text-item">
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Burned calories:</h4>
                            <p class="favorites-card-text-block">${elem.burnedCalories}</p>
                        </div>
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Body part:</h4>
                            <p class="favorites-card-text-block">${elem.bodyPart}</p>
                        </div>
                        <div class="favorites-card-text-wrapper">
                            <h4 class="favorites-card-text-title">Target:</h4>
                            <p class="favorites-card-text-block">${elem.target}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </li>`;

        favoritesList.insertAdjacentHTML('beforeend', markup);
      });
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  } else if (!storageItem || parsedItem == []) {
    messageInfo.classList.add('is-open-message-info');
  }
}
