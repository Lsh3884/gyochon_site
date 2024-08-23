// 언어 버튼
$(document).ready(function () {
  $(".lang > a").on("click", function (e) {
    e.preventDefault();
    $(".lang-submenu").toggle();
  });
});
