document.addEventListener('DOMContentLoaded', function () {
  const taebSwitch = document.querySelector('.taeb-switch');

  taebSwitch.addEventListener('click', function (event) {
    const clickedElement = event.target.closest('.taeb');

    if (!clickedElement || clickedElement.classList.contains('active')) return;

    const direction = clickedElement.getAttribute('taeb-direction');

    taebSwitch.classList.remove('left', 'right');
    taebSwitch.querySelectorAll('.taeb.active').forEach(function (taebElement) {
      taebElement.classList.remove('active');
    });

    clickedElement.classList.add('active');
    taebSwitch.classList.add(direction);
  });
});
