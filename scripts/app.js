$(document).ready(function() {
  console.log('js file loaded');
  console.log('jQuery working');

  $('.navbar-burger').on('click', function(event) {
    event.preventDefault();
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  // Testing modal open when form submits
  $('#mc-embedded-subscribe-form').on('submit', function(event) {
    $('.modal').toggleClass('is-active');
  });

  // Click function to close modal
  $('.modal-close').on('click', function (event) {
    event.preventDefault();
    $('.modal').toggleClass('is-active');
  });
});