let menu = document.querySelector(".sidebar__menu");
let width=window.innerWidth
let slidersNum = 2
if (width >= 1024) {
    slidersNum = 5
} else if (width>=768){
  slidersNum = 3
}else if (width>=512){
  slidersNum = 2
}

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
     slidesPerView: slidersNum,
     spaceBetween: 30,
     loop: true,
   });

   var swiper = new Swiper(".day__deals", {
    slidesPerView: slidersNum-0.8,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });