window.addEventListener("load",function(){
    var swiper = new Swiper(".tourSwiper", {
        slidesPerView: 2.3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      });
    var swiper = new Swiper(".familySwiper", {
        slidesPerView: 2.3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      });
})