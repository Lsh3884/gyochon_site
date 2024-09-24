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
       350: {spaceBetween: 30,
         slidesPerView: 1.3,
       },
       320: { 
         spaceBetween: 30,
         slidesPerView: 1.3,
       },
     },
     loop: true,
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
      350: {spaceBetween: 30,
        slidesPerView: 1.3,
      },
      320: { 
        spaceBetween: 30,
        slidesPerView: 1.3,
      },
    },
    loop: true,
  });
});
