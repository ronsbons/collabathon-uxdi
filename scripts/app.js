$(document).ready(function() {
  console.log('js file loaded');
  console.log('jQuery working');

  $('.navbar-burger').on('click', function(event) {
    event.preventDefault();
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  })
});