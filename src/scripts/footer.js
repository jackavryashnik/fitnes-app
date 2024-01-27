import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const footerForm = document.querySelector('.footer-form');

footerForm.addEventListener('submit', function (event) {
  event.preventDefault();
  submitForm();
});

async function submitForm() {
  const formData = new FormData(footerForm);
  const emailValue = formData.get('email');
  const formattedData = { email: emailValue };

  try {
    const response = await axios.post(footerForm.action, formattedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = response.data;
    if (data && data.message) {
      showSuccess();
    }
  } catch (error) {
    showError();
    if (error.response && error.response.status === 409) {
      showError409();
    }
  }
}

function showError() {
  Swal.fire({
    title: 'Bad request',
    text: 'Something went wrong.',
    icon: 'error',
  });
}

function showError409() {
  Swal.fire({
    title: 'Warning!',
    text: 'Subscription already exists',
    icon: 'warning',
  });
}

function showSuccess() {
  Swal.fire({
    title: 'Good job!',
    text: "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",
    icon: 'success',
  });
}
