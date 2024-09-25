window.addEventListener("load", function () {
  var swiper = new Swiper(".tourSwiper", {
    // slidesPerView: 2.3,
    spaceBetween: 30,
    breakpoints: {
      1420: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.3,
      },
      350: { spaceBetween: 30, slidesPerView: 1.3 },
      320: {
        spaceBetween: 30,
        slidesPerView: 1.3,
      },
    },
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 슬라이드 전환
      disableOnInteraction: false,
       // 사용자가 터치한 후에도 자동 재생 유지
    },

    
  });
  var bannerswiper = new Swiper(".familySwiper", {
    // slidesPerView: 2.3,
    spaceBetween: 30,

    breakpoints: {
      1420: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.3,
      },
      350: { spaceBetween: 30, slidesPerView: 1.3 },
      320: {
        spaceBetween: 30,
        slidesPerView: 1.3,
      },
    },
    loop: true,
    autoplay: {
      delay: 3000, // 3초마다 슬라이드 전환
      disableOnInteraction: false, // 사용자가 터치한 후에도 자동 재생 유지
    },

  });
});
