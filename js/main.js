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


  // Slick Slider Active In Banner

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed:3000,
    dots: true,
    pauseOnDotsHover: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  });



});