import {fetchData} from "./api";

let id;
let storage = "favorites";
let storageItem = localStorage.getItem(storage);
if (!storageItem) {
    storageItem = [];
} else {
    storageItem = JSON.parse(storageItem);
}

const favorites = document.querySelector(".ex-add-favorities");
const list = document.querySelector(".cards-workout-list");
const exModal = document.querySelector(".ex-backdrop");
const gif = document.querySelector(".gif-ex");
const name = document.querySelector(".exercise-name");
const rating = document.querySelector(".ex-current-rating");
const target = document.querySelector(".ex-target");
const bodyPart = document.querySelector(".ex-body-part");
const equipment = document.querySelector(".ex-equipment");
const popular = document.querySelector(".ex-popular");
const burnedCalories = document.querySelector(".ex-burned-calories");
const description = document.querySelector(".ex-description");

list.addEventListener("click", async event =>{
  if(event.target.classList.contains("btn-start-workout") || event.target.classList.contains("card-workout-start-icon")){
    id = event.target.closest('.card-workout-item').id;
    await fetchData(`exercises/${id}`)
    .then(result => {
      gif.src = result.gifUrl;
      name.textContent = result.name;
      rating.textContent = result.rating;
      target.textContent = result.target;
      popular.textContent = result.popularity;
      bodyPart.textContent = result.bodyPart;
      equipment.textContent = result.equipment;
      burnedCalories.textContent = `${result.burnedCalories} / ${result.time}min`;
      description.textContent = result.description;
    })
    const existingItem = storageItem.find(item => item.id === id);
    if (existingItem) {
      favorites.textContent = "Delete from favorites"
    }
    else{
      favorites.textContent = "Add to favorities";
    }
    exModal.classList.add("is-open")
  }
})
favorites.addEventListener("click", element=>{
  if(favorites.textContent.trim()=="Add to favorities"){
    storageItem.push( {
    id: id, 
    gifUrl:gif.src,
    name: name.textContent,
    rating : rating.textContent,
    target : target.textContent,
    popular : popular.textContent,
    bodyPart : bodyPart.textContent,
    equipment : equipment.textContent,
    burnedCalories : burnedCalories.textContent,
    description : description.textContent
  });
    localStorage.setItem(storage, JSON.stringify(storageItem))
    favorites.textContent = "Delete from favorites"
  }
  else{
    const index = storageItem.findIndex(item =>item.id == id);
    storageItem.splice(index, 1);
    localStorage.setItem(storage, JSON.stringify(storageItem));
    favorites.textContent = "Add to favorities"
  }
})
exModal.addEventListener("click", elem => {
  if(elem.target == exModal || elem.target.classList.contains("ex-close-btn-icon") || elem.target.classList.contains("ex-close-btn") ){
    exModal.classList.remove("is-open");}
})
document.addEventListener('keydown',event=> {
  if (event.key === 'Escape') {
      exModal.classList.remove('is-open');
  }
});