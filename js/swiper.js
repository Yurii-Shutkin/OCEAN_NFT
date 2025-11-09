const swiper = new Swiper('.nft-cards__swiper', {
  slidesPerView: 'auto',
  freeMode: false,
  spaceBetween: 30,
  centeredSlides: true,
  watchOverflow: true,
  slidesOffsetBefore: -20,
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      centeredSlides: false,
      slidesOffsetBefore: 0,
    },
    1440: {
      slidesPerView: 3,
      centeredSlides: false,
      slidesOffsetBefore: 0,
  spaceBetween: 30,

    },
    1170: {
      centeredSlides: false,
      slidesOffsetBefore: 0,
  spaceBetween: 10,

    },
  },
})

const collectionSwiper = new Swiper('.collections__swiper', {
  slidesPerView: 'auto',
  freeMode: false,
  // loop: true,
  centeredSlides: true,

  spaceBetween: 30,
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1.2,
    },
    400: {
      slidesPerView: 1.2,
      centeredSlides: true,
      slidesOffsetBefore: 0,
    },
    768: {
      slidesPerView: 3.2,

    }
  },
})
