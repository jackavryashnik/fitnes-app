const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);


if (result === '/page-2.html') {
  let storage = 'favorites';
  let storageItem = localStorage.getItem(storage);
  let parsedItem = JSON.parse(storageItem);
  let id;
  const messageInfo = document.querySelector('.message-info');
  const ul = document.querySelector(".favorites-list");
  const deleteCards = document.querySelectorAll(".favorites-list-item");
  ul.addEventListener("click", event=>{
    if(event.target.classList.contains("favorites-icon-svg") ||  event.target.classList.contains("favorites-icon-svg-delete")||  event.target.classList.contains("favorites-icon-svg-delete-use")){
      id = event.target.closest('.favorites-list-item').id;
      let cardForDelete;
      const index = parsedItem.findIndex(item =>item.id == id);
      parsedItem.splice(index, 1);
      localStorage.setItem(storage, JSON.stringify(parsedItem));
      deleteCards.forEach(elem=>{
        if(elem.id==id) cardForDelete=elem;
      })
      ul.removeChild(cardForDelete);
      if (!storageItem || parsedItem.length == 0) {
        messageInfo.classList.add('is-open-message-info');
      }
    }
  })
}