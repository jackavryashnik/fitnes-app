const fullUrl = window.location.pathname;
const lastSlashIndex = fullUrl.lastIndexOf('/');
const result = fullUrl.substring(lastSlashIndex);

if (result === '/page-2.html') {
  document.addEventListener('DOMContentLoaded', function () {
    // Get the favorites list, pagination block, and message info
    const favoritesList = document.querySelector('.favorites-list');
    const paginationBlock = document.querySelector(
      '.favorites-pagination-block'
    );
    const messageInfo = document.querySelector('.message-info');
    const favoritesContainerBlock = document.querySelector(
      '.favorites-contanier-block'
    );

    // Function to show pagination based on screen width
    function togglePagination() {
      const currentPage = window.location.pathname; // Get current page path

      // Check if current page is '/page-2.html' and screen width is less than or equal to 767px
      if (
        currentPage === '/page-2.html' &&
        window.innerWidth <= 767 &&
        isFavoritesListVisible()
      ) {
        // Show pagination for small screens on page 2
        paginationBlock.style.display = 'flex';
      } else {
        // Hide pagination for larger screens or if favorites list is not visible
        paginationBlock.style.display = 'none';
      }
    }

    // Function to check if favorites list is visible
    function isFavoritesListVisible() {
      return favoritesList && favoritesList.offsetParent !== null;
    }

    // Function to handle pagination logic
    function paginate() {
      // Define items per page based on screen width and visibility of favorites list
      const itemsPerPage =
        window.innerWidth <= 767 && isFavoritesListVisible()
          ? 6
          : favoritesList.children.length;

      // Show all items if screen width is greater than 767px
      if (window.innerWidth > 767 && isFavoritesListVisible()) {
        for (let i = 0; i < favoritesList.children.length; i++) {
          favoritesList.children[i].style.display = 'block';
        }
        return;
      }

      const totalPages = Math.ceil(
        favoritesList.children.length / itemsPerPage
      );
      let currentPage = 1;

      // Function to show items for current page
      function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Hide all items
        for (let i = 0; i < favoritesList.children.length; i++) {
          favoritesList.children[i].style.display = 'none';
        }

        // Show items for current page
        for (
          let i = startIndex;
          i < endIndex && i < favoritesList.children.length;
          i++
        ) {
          favoritesList.children[i].style.display = 'block';
        }
      }

      // Show the first page initially
      showPage(currentPage);

      // Event listeners for pagination buttons
      paginationBlock.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
          // Remove active class from all buttons
          const buttons = paginationBlock.querySelectorAll('button');
          buttons.forEach(button => button.classList.remove('active-btn'));

          // Add active class to the clicked button
          event.target.classList.add('active-btn');

          // Show the corresponding page
          currentPage = parseInt(event.target.textContent);
          showPage(currentPage);
        }
      });
    }

    // Check if favorites list is empty and show message accordingly
    // if (!isFavoritesListVisible()) {
    //     messageInfo.style.display = 'block';
    // } else {
    //     messageInfo.style.display = 'none';
    // }

    // Function to handle scroll behavior
    function checkScroll() {
      if (window.matchMedia('(min-width: 768px)').matches) {
        favoritesContainerBlock.style.overflowY = 'scroll';
      } else {
        favoritesContainerBlock.style.overflowY = 'visible';
      }

      if (window.matchMedia('(min-width: 1440px)').matches) {
        favoritesContainerBlock.style.maxHeight = '480px'; // Set maximum height if necessary
      } else {
        favoritesContainerBlock.style.maxHeight = 'none';
      }
    }

    // Check scroll behavior on initial load
    checkScroll();

    // Check pagination visibility on initial load
    togglePagination();

    // Check pagination visibility and initialize pagination on window resize
    window.addEventListener('resize', function () {
      togglePagination();
      paginate();
      checkScroll();
    });

    // Initialize pagination if needed
    if (isFavoritesListVisible() && favoritesList.children.length >= 6) {
      paginate();
    }
  });
}
