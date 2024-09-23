window.addEventListener("load", function () {
  const tabitem = document.querySelectorAll(".map-nav li a");
  const maps = document.querySelectorAll(".tabitem");
  
  // 첫 번째 탭의 활성화 상태를 설정합니다.
  maps[0].classList.add("active");
  tabitem[0].style.borderBottom = "2px solid black"; // 첫 번째 탭에 밑줄 추가

  tabitem.forEach(function (item) {
      item.addEventListener("click", function (e) {
          e.preventDefault(); // 기본 동작(링크 클릭)을 막습니다.

          // 모든 탭 내용을 숨기고, 탭의 밑줄을 제거합니다.
          maps.forEach(function (map) {
              map.classList.remove("active");
              map.style.display = "none"; // 탭 내용을 숨깁니다.
          });
          tabitem.forEach(function (tab) {
              tab.style.borderBottom = "none"; // 모든 탭에서 밑줄 제거
          });

          // 클릭된 탭에 해당하는 내용을 표시합니다.
          const target = this.getAttribute("href");
          const targetElement = document.querySelector(target);

          targetElement.style.display = "block";
          targetElement.classList.add("active");

          // 현재 클릭된 탭에 밑줄 추가
          this.style.borderBottom = "2px solid black";
      });
  });
});
