$(document).ready(function() {
  console.log('js file loaded');
  console.log('jQuery working');

  //hamburger nav-bar functionality!
  $('.navbar-burger').on('click', function(event) {
    event.preventDefault();
    $('.navbar-burger').toggleClass('is-active');
    $('.navbar-menu').toggleClass('is-active');
  });

  // Opens modal containing success/error response when form submits
  $('#mc-embedded-subscribe-form').on('submit', function(event) {
    $('.modal').toggleClass('is-active');
  });

  // Click function to close modal
  $('.modal-close').on('click', function (event) {
    event.preventDefault();
    $('.modal').toggleClass('is-active');
  });
});