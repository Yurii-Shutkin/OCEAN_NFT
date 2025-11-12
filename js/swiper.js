const swiper = new Swiper('.swiper', {
  // observer: true,
  // observeParents: true,
  // observeSlideChildren: true,
})

let nftCardsSwiper;
const initNftCardsSwiper = () => {
  if (nftCardsSwiper) nftCardsSwiper.destroy(true, true);

  nftCardsSwiper = new Swiper('.nft-cards__swiper', {
  slidesPerView: 1.2,
  freeMode: false,
  spaceBetween: 30,
  watchOverflow: true,
  grabCursor: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },

  breakpoints: {
    320: {
      slidesOffsetBefore: 20,
    },
    375: {
      slidesOffsetBefore: 20,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 1.7,
    },
    577: {
      slidesPerView: 2.2,
    },

    769: {
      slidesPerView: 1.8,
      slidesOffsetBefore: 20,
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
}

const collectionSwiper = new Swiper('.collections__swiper', {
  slidesPerView: 1.2,
  freeMode: false,
  grabCursor: true,
  spaceBetween: 30,
  // observer: true,
  // observeParents: true,
  // observeSlideChildren: true,
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      slidesOffsetBefore: 20,
    },
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

initNftCardsSwiper();

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initNftCardsSwiper, 300); 
});
