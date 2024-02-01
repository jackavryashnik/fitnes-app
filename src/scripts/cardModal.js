import { fetchData } from './api';
import { patchRating } from './ratingModal';
import sprite from '../images/sprite.svg';

const heartIcon = `
<svg class="favorites-list-heart-icon" width="14" height="14" stroke="#F6F6F6" fill="transparent">
    <use class="favorites-list-heart-icon-use" href="${sprite}#icon-heart"></use>
</svg>`;

const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

if (result === '/index.html' || result === '/') {
  const activeColor = '#eea10c';
  const noActiveColor = '#e8e8e8';
  let id, ratingStar;
  let storage = 'favorites';
  let storageItem = localStorage.getItem(storage);
  if (!storageItem) {
    storageItem = [];
  } else {
    storageItem = JSON.parse(storageItem);
  }

  const ratingForm = document.querySelector('.rating-form');
  const rateStars = document.querySelector('.rate-wrapper');
  
  const closeButtonRating = document.querySelector('.rating-close-modal');
  const ratingModal = document.querySelector('.rating-modal');
  const addRatingButton = document.querySelector('.ex-rating-button');
  const stars = document.querySelectorAll('.ex-rate-icon');
  const favorites = document.querySelector('.ex-add-favorities');
  const list = document.querySelector('.cards-workout-list');
  const exModal = document.querySelector('.ex-backdrop');
  const gif = document.querySelector('.gif-ex');
  const name = document.querySelector('.exercise-name');
  const rating = document.querySelector('.ex-current-rating');
  const target = document.querySelector('.ex-target');
  const bodyPart = document.querySelector('.ex-body-part');
  const equipment = document.querySelector('.ex-equipment');
  const popular = document.querySelector('.ex-popular');
  const burnedCalories = document.querySelector('.ex-burned-calories');
  const description = document.querySelector('.ex-description');

  list.addEventListener('click', async event => {
    if (
      event.target.classList.contains('btn-start-workout') ||
      event.target.classList.contains('card-workout-start-icon')
    ) {
      id = event.target.closest('.card-workout-item').id;
      await fetchData(`exercises/${id}`).then(result => {
        gif.src = result.gifUrl;
        name.textContent = result.name;
        rating.textContent = result.rating;
        target.textContent = result.target;
        popular.textContent = result.popularity;
        bodyPart.textContent = result.bodyPart;
        equipment.textContent = result.equipment;
        burnedCalories.textContent = `${result.burnedCalories} / ${result.time}min`;
        description.textContent = result.description;
        ratingStar = Math.round(rating.textContent);

        stars.forEach((star, index) => {
          if (index < ratingStar) {
            star.style.fill = activeColor;
          } else {
            star.style.fill = noActiveColor;
          }
        });
      });
      const existingItem = storageItem.find(item => item.id === id);
      if (existingItem) {
        favorites.textContent = 'Delete from favorities';
      } else {
        favorites.textContent = 'Add to favorities';
      }
      exModal.classList.add('is-open');
    }
  });
  favorites.addEventListener('click', element => {
    if (favorites.textContent.trim() == 'Add to favorities') {
      storageItem.push({
        id: id,
        gifUrl: gif.src,
        name: name.textContent,
        rating: rating.textContent,
        target: target.textContent,
        popular: popular.textContent,
        bodyPart: bodyPart.textContent,
        equipment: equipment.textContent,
        burnedCalories: burnedCalories.textContent,
        description: description.textContent,
      });
      localStorage.setItem(storage, JSON.stringify(storageItem));
      favorites.textContent = 'Delete from favorities';
    } else {
      const index = storageItem.findIndex(item => item.id == id);
      storageItem.splice(index, 1);
      localStorage.setItem(storage, JSON.stringify(storageItem));
      favorites.textContent = 'Add to favorities';
    }
  });
  exModal.addEventListener('click', elem => {
    if (
      elem.target == exModal ||
      elem.target.classList.contains('ex-close-btn-icon') ||
      elem.target.classList.contains('ex-close-btn')
    ) {
      exModal.classList.remove('is-open');
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (exModal.classList.contains('is-open')) {
        exModal.classList.remove('is-open');
      } else if (ratingModal.classList.contains('active')) {
        ratingModal.classList.remove('active');
        exModal.classList.add('is-open');
        ratingForm.removeEventListener('submit', patchRating);
      }
    }
  });
  addRatingButton.addEventListener('click', () => {
    ratingModal.classList.add('active');
    patchRating(id);
    exModal.classList.remove('is-open');
  });

  closeButtonRating.addEventListener('click', () => {
    ratingModal.classList.remove('active');
    exModal.classList.add('is-open');
    ratingForm.removeEventListener('submit', patchRating);
  });
}
