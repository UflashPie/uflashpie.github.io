$('.autoplay').slick({
  slidesToShow: 2.99999,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

$(document).ready(function() {
   $('a[href^="#"]').click(function () { 
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
       $('html').animate( { scrollTop: (destination - 175) }, 1100 );
     return false;
   });
 });