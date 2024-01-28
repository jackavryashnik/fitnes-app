import {
  filter,
  name,
  currentPage,
  renderWorkoutCards,
  limit,
} from './exercisesFilter';
import { fetchData } from './api';

const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

let searchExercisesForm;
let cardsWorkoutList;
let cardsWorkoutPaginationBox;
let searchInput;

if (result === '/index.html' || result === '/') {
  searchExercisesForm = document.querySelector('.form-search-exercises');
  cardsWorkoutList = document.querySelector('.cards-workout-list');
  cardsWorkoutPaginationBox = document.querySelector(
    '.pagination-cards-workout-box'
  );
  searchInput = searchExercisesForm.elements.search;
  searchExercisesForm.addEventListener('submit', searchExercises);
}

async function searchExercises(e) {
  cardsWorkoutList.innerHTML = '';
  cardsWorkoutPaginationBox.innerHTML = '';
  e.preventDefault();
  try {
    const data = await fetchData(`exercises?${filter}=${name}`, {
      page: currentPage,
      limit,
      keyword: searchInput.value,
    });
    renderWorkoutCards(data.results);
  } catch (error) {
    console.log(error);
  }
}
