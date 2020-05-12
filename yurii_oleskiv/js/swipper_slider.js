var swiper = new Swiper('.swiper-container', {
  spaceBetween: 100,
  effect: "coverflow",
  // effect: "flip",
  loop: false,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },
});


$(".swiper-wrapper").wrap("<div class='overflow_hide'></div>");
