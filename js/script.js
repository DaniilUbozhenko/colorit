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
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
   }
   else {
      navbar.classList.remove("sticky");
   }
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
   modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
}

