import { fetchData } from './api';
import { toggleButtonsState, hideElements, showElements } from './utils';

const exercisesList = document.querySelector('.exercises-list');
const buttonsFilterContainer = document.querySelector(
  '.buttons-filter-container'
);
const exercisesPaginationBox = document.querySelector(
  '.pagination-exercises-box'
);
const exercisesPageContainer = document.querySelector(
  '.exercises-page-container'
);
const cardsWorkoutList = document.querySelector('.cards-workout-list');
const cardsWorkoutPaginationBox = document.querySelector(
  '.pagination-cards-workout-box'
);
const slashElem = document.querySelector('.slash');
const exercisesSubtitle = document.querySelector('.exercises-subtitle');
const searchExercisesForm = document.querySelector('.form-search-exercises');

const hiddenElmenets = [slashElem, exercisesSubtitle, searchExercisesForm];

export const limit = innerWidth < 768 ? 8 : 12;
export let currentPage = 1;
export let filter = 'Muscles';
export let name;

buttonsFilterContainer.addEventListener('click', filterData);

window.addEventListener('load', loadInitialData);

async function loadInitialData() {
  try {
    const data = await fetchData(`filters?filter=${filter}`, {
      limit,
      page: currentPage,
    });
    handlePagination(data.totalPages);
    renderExercises(data.results);
  } catch (error) {
    console.error(error);
  }
}

async function filterData(e) {
  const newFilter = e.target.dataset.filter;
  if (!newFilter) return;
  filter = newFilter;
  currentPage = 1;
  toggleButtonsState(buttonsFilterContainer, e.target);
  hideElements(hiddenElmenets);

  try {
    const data = await fetchData(`filters?filter=${filter}`, {
      limit,
      page: currentPage,
    });
    cardsWorkoutList.innerHTML = '';
    cardsWorkoutPaginationBox.innerHTML = '';
    renderExercises(data.results);
    handlePagination(data.totalPages);
  } catch (error) {
    console.error(error);
  }
}

function renderExercises(data) {
  const markup = data.reduce(
    (html, { name, filter, imgUrl }) =>
      html +
      `
  <li data-filter="${
    filter === 'Body parts' ? 'bodypart' : filter.toLowerCase()
  }" data-name="${name}" class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${imgUrl});
background-size: cover;
background-repeat: no-repeat;">
    <div class="exercise-card-desc">
      <h2 class="exercise-card-desc-name">${name}</h2>
      <p class="exercise-card-desc-filter">${filter}</p>
    </div>
  </li>
  `,
    ''
  );
  exercisesList.innerHTML = markup;
}

function handlePagination(totalPages) {
  exercisesPaginationBox.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    // if (i > 3) break;
    const button = document.createElement('button');
    button.textContent = i;
    if (i === 1) {
      button.classList.add('active');
    }
    button.addEventListener('click', e => {
      toggleButtonsState(exercisesPaginationBox, e.target);
      goToPage(i);
    });
    exercisesPaginationBox.appendChild(button);
  }
}

async function goToPage(page) {
  currentPage = page;
  try {
    exercisesPageContainer.scrollIntoView({ behavior: 'smooth' });
    const data = await fetchData(`filters?filter=${filter}`, {
      limit,
      page: currentPage,
    });
    renderExercises(data.results);
  } catch (error) {
    console.error(error);
  }
}

// detailed exercises

exercisesList.addEventListener('click', changeList);

async function changeList(e) {
  const newFilter = e.target.dataset.filter;
  const newName = e.target.dataset.name;
  if (!newFilter) return;

  filter = newFilter;
  name = newName;
  currentPage = 1;
  exercisesPageContainer.scrollIntoView({ behavior: 'smooth' });
  showElements(hiddenElmenets);
  try {
    const data = await fetchData(`exercises?${filter}=${name}`, {
      limit,
      page: currentPage,
    });
    exercisesList.innerHTML = '';
    exercisesPaginationBox.innerHTML = '';
    renderWorkoutCards(data.results);
    handlePagination2(data.totalPages);
  } catch (error) {
    console.log(error);
  }
}

export function renderWorkoutCards(exercises) {
  const markup = exercises.reduce(
    (acc, { rating, target, bodyPart, burnedCalories, name, _id }) => {
      acc += `<li class="card-workout-item" id=${_id}>
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(
                          rating
                        )}.0</p>
                        <svg
                            class="card-workout-rating-icon"
                            width="18"
                            height="18"
                        >
                            <use href="../images/sprite.svg#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="../images/sprite.svg#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="../images/sprite.svg#icon-human"></use>
                        </svg>
                    </div>
                    <p class="card-title-text">${name}</p>
                </div>
            
                <div class="card-workout-info">
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Burned calories:</p>
                        <p class="card-workout-info-data card-time">${burnedCalories} / 3 min</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Body part:</p>
                        <p class="card-workout-info-data">${bodyPart}</p>
                    </div>
                    <div class="card-workout-info-block">
                        <p class="card-workout-info-list">Target:</p>
                        <p class="card-workout-info-data card-target">${target}</p>
                    </div>
                </div>
            </li>`;
      return acc;
    },
    ''
  );
  cardsWorkoutList.innerHTML = markup;
}

function handlePagination2(totalPages) {
  cardsWorkoutPaginationBox.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    if (i > 3) break;
    const button = document.createElement('button');
    button.textContent = i;
    if (i === 1) {
      button.classList.add('active');
    }
    button.addEventListener('click', e => {
      toggleButtonsState(cardsWorkoutPaginationBox, e.target);
      goToPage2(i);
    });
    cardsWorkoutPaginationBox.appendChild(button);
  }
}

async function goToPage2(page) {
  currentPage = page;
  try {
    exercisesPageContainer.scrollIntoView({ behavior: 'smooth' });
    const data = await fetchData(`exercises?${filter}=${name}`, {
      limit,
      page: currentPage,
    });
    renderWorkoutCards(data.results);
  } catch (error) {
    console.error(error);
  }
}
