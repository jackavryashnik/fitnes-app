export function togleRationgModal() {
  const ratingModal = document.querySelector('.rating-modal');
  ratingModal.classList.toggle('active');

  const closeBtn = document.getElementById('close-modal');
  const ratingForm = document.querySelector('.rating-form');

  const toggle = () => {
    ratingModal.classList.toggle('active');
  };

  ratingForm.addEventListener('submit', () => {
    toggle();
    ratingForm.removeEventListener('submit', toggle);
    closeBtn.removeEventListener('click', toggle);
  });
  closeBtn.addEventListener('click', () => {
    toggle();
    ratingForm.removeEventListener('submit', toggle);
    closeBtn.removeEventListener('click', toggle);
  });
}

export function patchRating() {
  const ratingButtons = document.querySelectorAll('.rating-button');
  const selectedRatingDiv = document.getElementById('rating-value');
  const email = document.querySelector('.rating-email-field');
  const texField = document.querySelector('.rating-text-field');
  const ratingInputs = document.getElementsByName('rate');
  const ratingForm = document.querySelector('.rating-form');

  const rateStars = document.querySelector('.rate-wrapper');
  rateStars.addEventListener('click', event => {
    const targetElementValue = event.targetElement.value;
    console.log(targetElement);
    selectedRatingDiv.textContent = button.value;
    ratingButtons.forEach((button, index) => {
      if (targetElementValue < index) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  });

  // ratingButtons.forEach((button, index) => {
  //   button.addEventListener('change', function () {
  //     selectedRatingDiv.textContent = button.value;
  //     button.classList.add('active');
  //     for (let i = 0; i < index; i++) {
  //       ratingButtons[i].classList.add('active');
  //     }
  //     for (let i = index + 1; i < ratingButtons.length; i++) {
  //       ratingButtons[i].classList.remove('active');
  //     }
  //   });
  // });

  // ratingForm.addEventListener('submit', e => {
  //   e.preventDefault();

  //   axios
  //     .post('https://energyflow.b.goit.study/api/', {
  //       rate: ratingInputs.value,
  //       email: email.value,
  //       review: texField.value,
  //     })
  //     .then(r => {})
  //     .catch(r => {});

  //     ratingForm.reset()
  // });
}
patchRating();
