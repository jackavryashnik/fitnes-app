import { patchData } from './api';
import Swal from 'sweetalert2';

export function patchRating(id) {
  const ratingModal = document.querySelector('.rating-modal');
  const ratingButtons = document.querySelectorAll('.rating-button');
  const selectedRatingDiv = document.getElementById('rating-value');
  const email = document.querySelector('.rating-email-field');
  const texField = document.querySelector('.rating-text-field');
  const ratingForm = document.querySelector('.rating-form');
  const rateStars = document.querySelector('.rate-wrapper');
  let targetValue;

  const colorStars = event => {
    targetValue = event.target.value;
    if (!isNaN(targetValue)) selectedRatingDiv.textContent = targetValue + '.0';

    ratingButtons.forEach(button => {
      if (button.value <= targetValue) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  };

  rateStars.addEventListener('click', colorStars);

  const sendRequest = event => {
    event.preventDefault();
    ratingModal.classList.remove('active');
    const path = `exercises/${id}/rating`;
    const params = {
      rate: Number(targetValue),
      email: email.value,
      review: texField.value,
    };

    patchData(path, params, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(succsses => {
        Swal.fire({
          title: 'Success!',
          text: 'Feedback sent successfully.',
          icon: 'success',
        });
      })
      .catch(error => {
        Swal.fire({
          title: 'Bad request',
          text: error.message,
          icon: 'error',
        });
      });

    ratingForm.reset();
    ratingForm.removeEventListener('submit', sendRequest);
    rateStars.removeEventListener('click', colorStars);
  };

  ratingForm.addEventListener('submit', sendRequest);
}
