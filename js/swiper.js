const swiper = new Swiper('.nft-cards__swiper', {
  slidesPerView: 1.2,
  freeMode: false,
  spaceBetween: 30,
  watchOverflow: true,
  slidesOffsetBefore: -20,
  grabCursor: true,
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },

  breakpoints: {
    375: {
      slidesOffsetBefore: 20,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1.8,
    },

    768: {
      slidesPerView: 2.2,
      slidesOffsetBefore: 0,
    },

    1024: {
      slidesPerView:1.8,
      slidesOffsetBefore: 0,
    },

    1320: {
      slidesPerView:2.5,
      slidesOffsetBefore: 0,
    },

    1440: {
      slidesPerView: 3,
      slidesOffsetBefore: 0,
      spaceBetween: 30,
    },
  },
})

const collectionSwiper = new Swiper('.collections__swiper', {
  slidesPerView: 3.2,
  freeMode: false,
  grabCursor: true,
  spaceBetween: 30,
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1.2,
      slidesOffsetBefore: 20,
  spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.2
    },
    1024: {
      slidesPerView: 1.8
    },
    1440: {
      slidesPerView: 3
    },
  },
})
