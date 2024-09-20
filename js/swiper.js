window.addEventListener("load", function () {
  var swiper = new Swiper(".tourSwiper", {
    slidesPerView: 2.3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1420: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.3,
      },
      350: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    loop: true,
  });
  var bannerswiper = new Swiper(".familySwiper", {
    slidesPerView: 2.3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevt",
    },
    breakpoints: {
      1420: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.3,
      },
      350: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    },
    loop: true,
  });
});
