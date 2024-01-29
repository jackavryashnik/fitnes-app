import {fetchData} from "./api";

const storage = "quoteDay";
const storageItem = JSON.parse(localStorage.getItem(storage));
const text = document.querySelector(".quote-container-text")
const author = document.querySelector(".quote-container-author")


const today = new Date()
const date = {date: today.getDate(), month:today.getMonth(), year: today.getFullYear()}

if(!localStorage.getItem(storage) || (date.date !=storageItem.date.date || 
  date.month !=storageItem.date.month || date.year !=storageItem.date.year)){
  localStorage.removeItem(storage);
  fetchData("quote")
  .then(result=>{
    text.textContent = result.quote;
    author.textContent = result.author;
    localStorage.setItem(storage, JSON.stringify({author:result.author, quote:result.quote, date:date }))
  })
  .catch(error =>{console.log(error);
  text.textContent="Sorry, there was an error on the server";});
}
else{
  text.textContent = storageItem.quote;
  author.textContent = storageItem.author;
}
