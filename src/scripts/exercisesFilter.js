import { fetchData } from './api';

const exercisesList = document.querySelector('.exercises-list'),
  buttonsFilterContainer = document.querySelector('.buttons-filter-container'),
  filterButtons = document.querySelectorAll('.buttons-filter-container button'),
  exercisesPaginationBox = document.querySelector('.pagination-exercises-box');

let limit = innerWidth < 768 ? 8 : 12;
let currentPage = 1;
let filter = 'Muscles';

buttonsFilterContainer.addEventListener('click', filterData);

window.addEventListener('load', loadInitialData);

async function loadInitialData() {
  try {
    const data = await fetchData(filter, { limit, page: currentPage });
    handlePagination(data.totalPages);
    createMarkup(data.results);
  } catch (error) {
    console.error(error);
  }
}

async function filterData(e) {
  const newFilter = e.target.dataset.filter;
  if (!newFilter) return;

  filter = newFilter;

  exercisesList.innerHTML = '';
  toggleButtonsState(filterButtons, e.target);

  try {
    const data = await fetchData(filter, { limit, page: currentPage });
    handlePagination(data.totalPages);
    createMarkup(data.results);
  } catch (error) {
    console.error(error);
  }
}

function createMarkup(data) {
  const markup = data.reduce(
    (html, { name, filter, imgUrl }) =>
      html +
      `
  <li class="exercises-list-card" style="background: linear-gradient(0deg, rgba(16, 16, 16, 0.70) 0%, rgba(16, 16, 16, 0.70) 100%), url(${imgUrl});
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
  renderImages(markup);
}

function renderImages(markup) {
  exercisesList.innerHTML = markup;
}

function toggleButtonsState(buttons, activeButton) {
  buttons.forEach(btn => btn.classList.remove('active'));
  activeButton.classList.add('active');
}

function handlePagination(totalPages) {
  exercisesPaginationBox.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    if (i === 1) {
      button.classList.add('active');
    }
    button.addEventListener('click', e => {
      const pageNumberButtons =
        exercisesPaginationBox.querySelectorAll('button');
      toggleButtonsState(pageNumberButtons, e.target);
      goToPage(i);
    });
    exercisesPaginationBox.appendChild(button);
  }
}

async function goToPage(page) {
  try {
    console.log(filter);
    const data = await fetchData(filter, { limit, page });
    createMarkup(data.results);
  } catch (error) {
    console.error(error);
  }
}
