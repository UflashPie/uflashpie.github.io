$(".popup").hide();

function closePopup() {
   $(".popup").hide();
   $(".body").removeClass("bodyNoScroll");
}

function openPopup(id_of_popUp) {
   $(id_of_popUp).show();
   $(".body").addClass("bodyNoScroll");
}
