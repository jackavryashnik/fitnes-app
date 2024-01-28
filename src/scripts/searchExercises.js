import {
  filter,
  name,
  currentPage,
  renderWorkoutCards,
  limit,
} from './exercisesFilter';
import { fetchData } from './api';

const searchExercisesForm = document.querySelector('.form-search-exercises');
const cardsWorkoutList = document.querySelector('.cards-workout-list');
const cardsWorkoutPaginationBox = document.querySelector(
  '.pagination-cards-workout-box'
);
const searchInput = searchExercisesForm.elements.search;

searchExercisesForm.addEventListener('submit', searchExercises);

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
