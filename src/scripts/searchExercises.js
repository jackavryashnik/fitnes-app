import {
  filter,
  name,
  currentPage,
  renderWorkoutCards,
  detailedExercisesLimit,
  showError,
} from './exercisesFilter';
import { fetchData } from './api';
import { hideElements, showElements } from './utils';

const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

let searchExercisesForm;
let cardsWorkoutList;
let cardsWorkoutPaginationBox;
export let searchInfoMessage;
let searchInput;

if (result === '/index.html' || result === '/') {
  searchExercisesForm = document.querySelector('.form-search-exercises');
  cardsWorkoutList = document.querySelector('.cards-workout-list');
  cardsWorkoutPaginationBox = document.querySelector(
    '.pagination-cards-workout-box'
  );
  searchInfoMessage = document.querySelector('.search-info-message');

  searchInput = searchExercisesForm.elements.search;
  searchExercisesForm.addEventListener('submit', searchExercises);
}

async function searchExercises(e) {
  e.preventDefault();
  hideElements([searchInfoMessage]);
  showElements([cardsWorkoutList]);
  cardsWorkoutList.innerHTML = '';
  cardsWorkoutPaginationBox.innerHTML = '';
  try {
    const data = await fetchData(`exercises?${filter}=${name}`, {
      page: currentPage,
      limit: detailedExercisesLimit,
      keyword: searchInput.value,
    });
    if (!data.results.length) {
      hideElements([cardsWorkoutList]);
      showElements([searchInfoMessage]);
      return;
    }
    renderWorkoutCards(data.results);
  } catch (error) {
    showError();
  } finally {
    searchExercisesForm.reset();
  }
}
