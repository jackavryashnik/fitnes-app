import { fetchData } from './api';
import { toggleButtonsState, hideElements, showElements } from './utils';

let buttonsFilterContainer;

let cardsWorkoutList;
let cardsWorkoutPaginationBox;
let slashElem;
let exercisesSubtitle;
let searchExercisesForm;

let hiddenElmenets;
let exercisesList;
let exercisesPaginationBox;
let exercisesPageContainer;
let limit;
export let currentPage;
export let filter;
export let name;

export let detailedExercisesLimit;

const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

if (result === '/index.html' || result === '/') {
  buttonsFilterContainer = document.querySelector('.buttons-filter-container');
  cardsWorkoutList = document.querySelector('.cards-workout-list');
  cardsWorkoutPaginationBox = document.querySelector(
    '.pagination-cards-workout-box'
  );
  slashElem = document.querySelector('.slash');
  exercisesSubtitle = document.querySelector('.exercises-subtitle');
  searchExercisesForm = document.querySelector('.form-search-exercises');
  exercisesList = document.querySelector('.exercises-list');
  exercisesPaginationBox = document.querySelector('.pagination-exercises-box');
  exercisesPageContainer = document.querySelector('.exercises-page-container');
  hiddenElmenets = [
    slashElem,
    exercisesSubtitle,
    searchExercisesForm,
    cardsWorkoutList,
  ];

  limit = innerWidth < 768 ? 8 : 12;
  detailedExercisesLimit = innerWidth < 1440 ? 8 : 9;
  currentPage = 1;
  filter = 'Muscles';

  buttonsFilterContainer.addEventListener('click', filterData);
  exercisesList.addEventListener('click', changeList);

  window.addEventListener('load', loadInitialData);
}

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
  showElements([exercisesList]);

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
    if (i > 3) break;
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

async function changeList(e) {
  const newFilter = e.target.dataset.filter;
  const newName = e.target.dataset.name;
  if (!newFilter) return;

  filter = newFilter;
  name = newName;
  currentPage = 1;
  exercisesPageContainer.scrollIntoView({ behavior: 'smooth' });
  hideElements([exercisesList]);
  showElements(hiddenElmenets);
  try {
    const data = await fetchData(`exercises?${filter}=${name}`, {
      limit: detailedExercisesLimit,
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
                            <use href="./images/sprite.svg#icon-Star-1"></use>
                        </svg>
                        </div>
                    </div>
                
                        <button class="btn-start-workout" type="button">Start
                            <svg class="card-workout-start-icon"
                                width="16"
                                height="16"
                                >
                                <use href="./images/sprite.svg#icon-arrow"></use>
                            </svg>
                        </button>
                </div>
                  
                <div class="card-workout-title">
                    <div class="card-workout-title-icon-box">
                        <svg
                        class="card-workout-title-icon"
                        width="24"
                        height="24">
                        <use href="./images/sprite.svg#icon-human-quo"></use>
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
      limit: detailedExercisesLimit,
      page: currentPage,
    });
    renderWorkoutCards(data.results);
  } catch (error) {
    console.error(error);
  }
}
