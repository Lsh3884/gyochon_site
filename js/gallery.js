document.addEventListener("DOMContentLoaded", function () {
  // 이미지 클릭 시 확대 기능
  document.querySelectorAll(".img-container img").forEach((img) => {
    img.addEventListener("click", function () {
      document.getElementById("overlay").style.display = "flex";
      document.getElementById("overlayImg").src = this.src;
    });
  });

  // 닫기 버튼 클릭 시 원래 화면으로 돌아가기
  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlayImg").src = "";
  });

  // 오버레이 배경 클릭 시 원래 화면으로 돌아가기
  document.getElementById("overlay").addEventListener("click", function (e) {
    if (e.target !== document.getElementById("overlayImg")) {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("overlayImg").src = "";
    }
  });
});
