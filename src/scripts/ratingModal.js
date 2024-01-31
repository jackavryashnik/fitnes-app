export function togleRationgModal() {
  const ratingModal = document.querySelector('.rating-modal');

  ratingModal.classList.toggle('active');
  
  const closeBtn = document.getElementById('close-modal');
  const ratingForm = document.querySelector('.rating-form');
  
  ratingForm.addEventListener('submit', () => ratingModal.classList.toggle('active'));
  closeBtn.addEventListener('click', () => ratingModal.classList.toggle('active'));
}

export function patchRating() {
  const ratingButtons = document.querySelectorAll('.rating-button');
  const selectedRatingDiv = document.getElementById('rating-value');
  const email = document.querySelector('.rating-email-field');
  const texField = document.querySelector('.rating-text-field');
  const ratingInputs = document.getElementsByName('rate');
  const ratingForm = document.querySelector('.rating-form');

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

  ratingForm.addEventListener('submit', e => {
    e.preventDefault();
    e.reset()
    toggleModal();


    axios
      .post('https://energyflow.b.goit.study/api/', {
        rate: ratingInputs.value,
        email: email.value,
        review: texField.value,
      })
      .then(r => {})
      .catch(r => {});


  });
}
