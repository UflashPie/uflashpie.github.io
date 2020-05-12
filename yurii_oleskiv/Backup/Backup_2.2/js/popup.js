$(".popup").hide();

function closePopup() {
   $(".popup").hide();
   $(".body").removeClass("bodyNoScroll");
}

function openPopup(id_of_popUp) {
   $(id_of_popUp).show();
   $(".body").addClass("bodyNoScroll");
}



// Плавний скролл

$(function(){

  var fixed_offset = 40;

  $('.go_anchor').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
        dn = $(sc).offset().top - fixed_offset;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */

    $('html, body').animate({scrollTop: dn}, 1000);

    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});
