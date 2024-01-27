import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const footerForm = document.querySelector('.footer-form');

footerForm.addEventListener('submit', function (event) {
  event.preventDefault();
  submitForm();
});

async function submitForm() {
  const formData = new FormData(footerForm);
  const emailValue = formData.get('email');
  const formattedData = { email: emailValue };

  console.log(formattedData);

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
    console.error('Error:', error);
    if (error.response && error.response.status === 409) {
      showError409();
    }
  }
}

function showError409() {
  iziToast.error({
    title: 'Error',
    message: 'Subscription already exists',
    position: 'topRight',
    timeout: 3500,
    progressBar: false,
  });
}

function showSuccess() {
  iziToast.warning({
    title: 'Caution',
    message:
      "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",
    position: 'topRight',
    timeout: 3500,
    progressBar: false,
    color: 'blue',
  });
}
