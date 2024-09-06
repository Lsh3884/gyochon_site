window.addEventListener("load", function () {
    const tabitem = document.querySelectorAll(".map-nav li a");
    const maps = document.querySelectorAll(".tabitem");
  
    // 첫 번째 탭의 활성화 상태를 설정합니다.
    maps[0].classList.add("active");
  
    tabitem.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault(); 
  
        // 모든 탭 내용을 숨깁니다.
        maps.forEach(function (map) {
          map.classList.remove("active");
          map.style.display = "none"; 
        });
  
        // 클릭된 탭에 해당하는 내용을 표시합니다.
        const target = this.getAttribute("href");
        const targetElement = document.querySelector(target);
        targetElement.style.display = "block";
        targetElement.classList.add("active");
      });
    });
  });

  