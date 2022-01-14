$(window).on('scroll', function () {

  // Sticky Navbar Active

  if ($(this).scrollTop() > 25) {
    $('.header').addClass('sticky');
  } else {
    $('.header').removeClass('sticky');
  }


});



$(document).ready(function () {

  // Smooth Scroll And Current Class Active

  $('.header__nav').onePageNav({
    currentClass: 'current'
  });



});