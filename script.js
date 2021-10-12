// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.top-menu__body',);
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
// Sticky Меню
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("bottom-header");
var sticky = navbar.offsetTop;
function myFunction() {
   if (window.innerWidth <= 767.98) {

   }
   else if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
   }
   else {
      navbar.classList.remove("sticky");
   }
}