import { patchRating } from './ratingModal';

const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);


if (result === '/page-2.html') {

const ratingForm = document.querySelector('.rating-form');
const closeButtonRating = document.querySelector('.rating-close-modal');
const ratingModal = document.querySelector('.rating-modal');
const addRatingButton = document.querySelector('.ex-rating-button');
const stars = document.querySelectorAll('.ex-rate-icon');
const favorites = document.querySelector(".ex-add-favorities");
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
const list = document.querySelector(".favorites-list");

const fullCards = document.querySelectorAll(".favorites-list-item");

let id, ratingStar;
const activeColor = '#eea10c';
const noActiveColor = '#e8e8e8';
let storage = 'favorites';
let storageItem = localStorage.getItem(storage);
let parsedItem = JSON.parse(storageItem);


list.addEventListener("click", event =>{
    if(event.target.classList.contains("favorites-list-button") ||  event.target.classList.contains("favorites-list-button-icon")){
      id = event.target.dataset.id;
      const index = parsedItem.findIndex(item =>item.id ==id);
      let parsedItemElement = parsedItem[index];
      gif.src = parsedItemElement.gifUrl;
      name.textContent = parsedItemElement.name;
      rating.textContent = parsedItemElement.rating;
      target.textContent = parsedItemElement.target;
      popular.textContent = parsedItemElement.popularity;
      bodyPart.textContent = parsedItemElement.bodyPart;
      equipment.textContent = parsedItemElement.equipment;
      burnedCalories.textContent = parsedItemElement.burnedCalories;
      description.textContent = parsedItemElement.description;
      ratingStar = Math.round(rating.textContent);


      stars.forEach((star, index) => {
        if (index < ratingStar) {
            star.style.fill = activeColor;
        } else {
            star.style.fill = noActiveColor; 
        }
    })
    const existingItem = parsedItem.find(item => item.id === id);
    if (existingItem) {
      favorites.textContent = `Delete from favorites`;
    }
    else{
      favorites.textContent = `Add to favorities`;
    }
    exModal.classList.add("is-open");
  }
})

favorites.addEventListener("click", ()=>{
  if(favorites.textContent.trim()=="Add to favorities"){
    parsedItem.push( {
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
    localStorage.setItem(storage, JSON.stringify(parsedItem))
    favorites.textContent = `Delete from favorites`
  }
  else{
    const index = parsedItem.findIndex(item =>item.id == id);
    parsedItem.splice(index, 1);
    localStorage.setItem(storage, JSON.stringify(parsedItem));
    let cardForDelete;
    favorites.textContent = `Add to favorities`;
    fullCards.forEach(elem=>{
      if(elem.id==id) cardForDelete=elem;
    })
    list.removeChild(cardForDelete);
  }
})
exModal.addEventListener("click", elem => {
  if(elem.target == exModal ||  elem.target.classList.contains("ex-close-btn-icon") ||  elem.target.classList.contains("ex-close-btn") ){
    exModal.classList.remove("is-open");}
})
document.addEventListener('keydown',event=> {
  if (event.key === 'Escape') {
    if(exModal.classList.contains('is-open')){
      exModal.classList.remove('is-open');
    }
    else if (ratingModal.classList.contains('active')){
      ratingModal.classList.remove('active');
      exModal.classList.add('is-open');
      ratingForm.removeEventListener("submit", patchRating);
    }
  }
});
addRatingButton.addEventListener("click", ()=>{
  ratingModal.classList.add('active');
  patchRating(id);
  exModal.classList.remove('is-open');

})

closeButtonRating.addEventListener("click", ()=>{
  ratingModal.classList.remove('active');
  exModal.classList.add('is-open');
  ratingForm.removeEventListener("submit", patchRating);
})
}