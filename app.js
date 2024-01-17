let menu = document.querySelector(".sidebar__menu");

function menuHandler() {
  menu.classList.toggle("hidden");
}

var swiper = new Swiper(".banner", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".popular__products", {
     slidesPerView: 5,
     spaceBetween: 30,
     loop: true,
     autoplay: {
       delay: 2500,
       disableOnInteraction: false,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });

   var swiper = new Swiper(".day__deals", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });