const contactModal = document.getElementById("contact_modal");
const ratingButtons = document.querySelectorAll(".rating_button");
const selectedRatingDiv = document.getElementById("rating_value");
const email = document.getElementById("email");
const texField = document.getElementById("text_fieldl");
const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const ratingInputs = document.getElementsByName('rate');


const submitBtn = document.getElementById("submit_btn");
const toggleModal = () => {
    contactModal.classList.toggle("active");
};

document.getElementById("contact_us").addEventListener("click", toggleModal);
document.getElementById("close_modal").addEventListener("click", toggleModal);

ratingButtons.forEach((button, index) => {
    button.addEventListener("change", function () {
        selectedRatingDiv.textContent = button.value;
        button.classList.add("active");
        for (let i = 0; i < index; i++) {
            ratingButtons[i].classList.add("active");
        }
        for (let i = index + 1; i < ratingButtons.length; i++) {
            ratingButtons[i].classList.remove("active");
        }
    });
});

submitBtn.addEventListener("click", e => {
    e.preventDefault()
    if (!emailPattern.test(email.value)) return alert('Incorrect email value')

    axios.post('https://energyflow.b.goit.study/api/Тут запитаєш конкретно який шлях', {
        rate: ratingInputs.value,
        email: email.value,
        review: texField.value
    })
        .then(r =>{
            // Тут показуєш успіх
        })
        .catch(r => {
            // Тут показуєш помилку
        })

});