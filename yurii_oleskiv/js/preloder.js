// function closePreloder() {
//   preloder.style.display = 'none';
// }
// setTimeout(closePreloder, 10000);


window.onload = function(){
  var preloder = document.getElementById('preloder');
  preloder.className += "fadeOut";
  function closePreloder() {
    preloder.style.display = 'none';
  }
  setTimeout(closePreloder, 400);
}
