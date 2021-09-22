// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
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
