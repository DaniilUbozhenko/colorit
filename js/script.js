"use strict"

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }

} else {
   document.body.classList.add('_pc');
}

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}

var mySwiper = new Swiper('.main-slider__container', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   effect: "fade",
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
var mySwiper = new Swiper('.popular-slider__container', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   breakpoints: {
      1279.98: {
         slidesPerView: 5,
         spaceBetween: 10
      },
      991.98: {
         slidesPerView: 4,
         spaceBetween: 10
      },
      767.98: {
         slidesPerView: 3,
         spaceBetween: 10
      },
      575.98: {
         slidesPerView: 2,
         spaceBetween: 10
      }
   },
   navigation: {
      nextEl: ".header-popular__next",
      prevEl: ".header-popular__prev",
   },
});