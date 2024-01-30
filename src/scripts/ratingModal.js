const contactModal = document.getElementById('rating-contact-modal');
const ratingButtons = document.querySelectorAll('.rating-button'); //radio
const selectedRatingDiv = document.getElementById('rating-value');

const toggleModal = () => {
  contactModal.classList.toggle('active');
};

document.getElementById('contact_us').addEventListener('click', toggleModal);
document.getElementById('close_modal').addEventListener('click', toggleModal);

ratingButtons.forEach((button, index) => {
  button.addEventListener('change', function () {
    selectedRatingDiv.textContent = button.value;
    button.classList.add('active');
    for (let i = 0; i < index; i++) {
      ratingButtons[i].classList.add('active');
    }
    for (let i = index + 1; i < ratingButtons.length; i++) {
      ratingButtons[i].classList.remove('active');
    }
  });
});
