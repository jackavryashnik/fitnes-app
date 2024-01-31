import { patchData } from './api';
import Swal from 'sweetalert2';

// export function togleRationgModal() {
//   const ratingModal = document.querySelector('.rating-modal');
//   ratingModal.classList.toggle('active');

//   const closeBtn = document.getElementById('close-modal');
//   const ratingForm = document.querySelector('.rating-form');

//   const toggle = () => {
//     ratingModal.classList.toggle('active');
//   };

//   ratingForm.addEventListener('submit', () => {
//     toggle();
//     ratingForm.removeEventListener('submit', toggle);
//     closeBtn.removeEventListener('click', toggle);
//   });
//   closeBtn.addEventListener('click', () => {
//     toggle();
//     ratingForm.removeEventListener('submit', toggle);
//     closeBtn.removeEventListener('click', toggle);
//   });
// }

export function patchRating() {
  const ratingButtons = document.querySelectorAll('.rating-button');
  const selectedRatingDiv = document.getElementById('rating-value');
  const email = document.querySelector('.rating-email-field');
  const texField = document.querySelector('.rating-text-field');
  const ratingForm = document.querySelector('.rating-form');

  const rateStars = document.querySelector('.rate-wrapper');
  rateStars.addEventListener('click', event => {
    const targetValue = event.target.value;
    selectedRatingDiv.textContent = targetValue + '.0';

    ratingButtons.forEach(button => {
      if (button.value <= targetValue) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  });

  ratingForm.addEventListener('submit', event => {
    event.preventDefault();
    ratingModal.classList.remove('active');
    const path = `exercises/${e.id}/rating`;
    const params = {
      rate: targetValue,
      email: email.value,
      review: texField.value,
    };

    patchData(path, params)
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
          text: error.body,
          icon: 'error',
        });
      });

    ratingForm.reset();
  });
}
