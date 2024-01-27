const favoritesList = document.querySelector('.favorites-list');
const paginationButtons = document.querySelectorAll('.favorites-pagination-block button');

const itemsPerPage = 6;
showPage(1);

paginationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const pageNumber = parseInt(button.textContent);
    showPage(pageNumber);
  });
});

function showPage(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const items = favoritesList.querySelectorAll('.favorites-list-item');
  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  paginationButtons.forEach(button => {
    if (parseInt(button.textContent) === pageNumber) {
      button.classList.add('active-btn');
    } else {
      button.classList.remove('active-btn');
    }
  });
}
