const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 5,
  grabCursor: 'true',
  centerSlide: 'true',
  loop: 'true',
  fade: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,

    },
    // when window width is >= 480px
    520: {
      slidesPerView: 2,

    },
    // when window width is >= 640px
    950: {
      slidesPerView: 3,

    },
  },
});
