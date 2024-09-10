window.addEventListener("load", function () {
  var swiper = new Swiper(".tourSwiper", {
    slidesPerView: 2.3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-nextt",
      prevEl: ".swiper-button-prevt",
    },breakpoints:{
      1420 : {
        slidesPerView: 2.3,
      },
      768 : {
        slidesPerView: 2.3,
      },
      350 : {
        slidesPerView: 2,
      },
      320 : {
        slidesPerView: 1,
      }
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
    loop: true,
  });

  // ======================= 배너 스와이퍼
  var visualswiper = new Swiper(".bannerSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
    on: {
      slideChangeTransitionStart: function () {
        // 현재 활성화된 슬라이드를 찾음
        const activeSlide = this.slides[this.activeIndex];
        const h1 = activeSlide.querySelector(".banner-txt h1");
        const p = activeSlide.querySelector(".banner-txt p");

        // 애니메이션 클래스를 제거하여 초기화
        h1.style.animation = "none";
        p.style.animation = "none";

        // 강제로 리플로우를 발생시켜 애니메이션이 제대로 트리거되도록 함
        void h1.offsetWidth;
        void p.offsetWidth;

        // 애니메이션 클래스를 다시 추가하여 재실행
        setTimeout(() => {
          h1.style.animation = "slideUp 0.5s ease-out forwards";
          p.style.animation = "slideUp 1s ease-out forwards";
        }, 10);
      },
    },
  });
});
