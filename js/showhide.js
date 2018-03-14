var buttons = document.querySelectorAll('.read-more');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    var span = event.target.previousElementSibling.querySelector('span');
    span.classList.add('fade-in');
  });
}