const BASE_URL = 'https://energyflow.b.goit.study/api';

const API_TYPES = {
  FILTERS: 'filters',
  EXERCISES: 'exercises',
};

const EXERCISES_TYPES = {
  Muscles: 'muscles',
  'Body parts': 'bodypart',
  Equipment: 'equipment',
};

class ApiServices {
    constructor(type) {
        this.type = type;
        this.category = 'Muscles';
        this.exercise = '';
        this.page = 1;
        this.search = '';
        this.perPage = 12;
    };

    setCategory(category) {
        this.category = category;
    }

    setPage(page) {
        this.page = page;
    }

    setExercise(exercise) {
        this.exercise = exercise;
    }

    getExercise() {
        return this.exercise;
    }

    setSearch(search) {
        this.search = search;
    }

    setPerPage(perPage) {
        this.perPage = perPage;
    }


    async getExercises() {
        try {
            const res = await axios.get(
                `${BASE_URL}/exercises?${EXERCISES_TYPES[this.category]}=${this.exercise
                }&keyword=${this.search}&page=${this.page}&limit=${this.perPage}`
            );
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

const exercisesCardList = document.querySelector(".exercises-list");
const exercisesListName = document.querySelector(".exercises-list-card");

const energyFlowApiService = new EnergyFlowApiSevice();


const getRenderExercises = (exercises, container) => {
  const markup = exercises.reduce(
    (acc, { rating, target, bodyPart, burnedCalories, name, _id }) => {
      acc += `<li class="card-workout-item" id=${_id}>

                <!--------- workout - rating - btn start -------->
                <div class="card-menu">
                    <div class="card-menu-box">
                
                        <div class="card-menu-workout">workout</div>
                        <div class="card-workout-rating">
                        <p class="card-workout-rating-text">${Math.round(rating)}.0</p>
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
                  

                <!--------- cards - workout - title -------->
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
            

                <!-- info about calories - body part - target -->
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
   exercisesCardList.insertAdjacentHTML("beforeend", markup);
};


const exerciseSearchForm = document.querySelector(".form-search-exercises");
const searchInput = document.querySelector(".form-search-exercises-input");

const stateQuery = {
  searchQuery: '',
};