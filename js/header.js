$(document).ready(function () {
  // 언어 버튼
  // $(".lang > a").on("click", function (e) {
  //   e.preventDefault();
  //   $(".lang-submenu").toggle();
  // });

  // $(".mb-lang > a").on("click", function (e) {
  //   e.preventDefault();
  //   $(".lang-submenu-mb").toggle();
  // });

  // $(".side-navi-mb").on("click", function () {
  //   $(".side-navi-mb-inner")
  //     .css({
  //       display: "block",
  //       right: "-100%",
  //     })
  //     .animate(
  //       {
  //         right: "0",
  //       },
  //       300
  //     ); // 300ms 동안 오른쪽에서 왼쪽으로 슬라이드
  //   $("body").addClass("no-scroll"); // 스크롤을 없앱니다
  // });
  // $(".mb-close").on("click", function () {
  //   $(".side-navi-mb-inner").animate(
  //     {
  //       right: "-100%",
  //     },
  //     300,
  //     function () {
  //       $(this).css("display", "none");
  //       $("body").removeClass("no-scroll"); // 애니메이션이 끝난 후 요소를 숨깁니다
  //     }
  //   );
  // });
  // $(window).resize(function () {
  //   if ($(window).width() >= 900) {
  //     $(".side-navi-mb-inner").hide(); // 900px 이상일 때 모바일 네비게이션 메뉴를 닫습니다
  //     $("body").removeClass("no-scroll");
  //   }
  // });
  // //

  // $(".header-menu-title-mb").on("click", function (e) {
  //   e.preventDefault();

  //   // 클릭한 요소의 서브메뉴가 열려 있는지 확인
  //   var submenu = $(this).next(".header-menu-submenu-mb");

  //   // 다른 서브메뉴는 모두 닫음
  //   $(".header-menu-submenu-mb").not(submenu).slideUp();

  //   // 클릭한 서브메뉴는 열거나 닫음
  //   submenu.stop().slideToggle();
  // });

  $(".side-navi-mb").on("click", function () {
    $(".side-navi-mb-inner").show();
    $("body").css("overflow", "hidden"); // 스크롤 방지
    $(window).scrollTop(0); // 윈도우 위치를 맨 위로
  });

  // 모바일 네비게이션 메뉴 닫기
  $(".mb-closed").on("click", function () {
    $(".side-navi-mb-inner").hide(); // 메뉴를 숨김
    $("body").css("overflow", "auto"); // 스크롤 허용
  });
  
  // 언어 버튼
  $(".lang > a").on("click", function (e) {
    e.preventDefault();
    $(".lang-submenu").toggle();
  });

  // 언어 선택 서브메뉴 토글
  $(".mb-lang > a").on("click", function (e) {
    e.preventDefault();
    $(".lang-submenu-mb").toggle();
  });

  // 윈도우 크기 변경 시 처리 (900px 이상일 때)
  $(window).resize(function () {
    if ($(window).width() >= 900) {
      $(".side-navi-mb-inner").hide(); // 900px 이상일 때 메뉴 닫기
      $("body").css("overflow", "auto"); // 스크롤 허용
    }
  });
  // 윈도우 크기 변경 시 처리 (900px 이상일 때)
  $(window).resize(function () {
    if ($(window).width() >= 900) {
      $(".side-navi-mb-inner").hide(); // 900px 이상일 때 메뉴 닫기
      $("body").css("overflow", "auto"); // 스크롤 허용
    }
  });
  // 날씨 API 가져오기
  const apiKey = "784ab24ff2ed5d94d4288abed9e25d13"; // 실제 API 키로 변경하세요.
  const city = "Gyeongju"; // 원하는 도시로 변경 가능

  // 날씨 정보 불러오기
  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("날씨 데이터를 불러오는 데 실패했습니다.");
      }

      const data = await response.json();

      const dailyData = data.list
        .filter((reading) => reading.dt_txt.includes("12:00:00"))
        .slice(0, 3); // 3일치 데이터만 가져옴

      displayWeatherData(dailyData);
    } catch (error) {
      console.error(error);
    }
  };

  // 날짜를 "오늘", "내일", "모레"로 표시
  const getDayLabel = (index) => {
    switch (index) {
      case 0:
        return "오늘";
      case 1:
        return "내일";
      case 2:
        return "모래";
      default:
        return "";
    }
  };

  // 날씨 데이터를 HTML에 표시
  const displayWeatherData = (dailyData) => {
    const weatherDiv = $(".weather");
    weatherDiv.empty(); // 기존 데이터를 지우고 새로 추가

    dailyData.forEach((day, index) => {
      const dayLabel = getDayLabel(index);
      const description = day.weather[0].description;
      const temperature = `${Math.round(day.main.temp)} °C`;
      const iconCode = day.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

      // 각 날씨 데이터를 담을 HTML 구조
      const dayHtml = `
        <div class="day">

          <img src="${iconUrl}" alt="${description}" />         
          <h3>${dayLabel}</h3>
          <p class="temperature">${temperature}</p>
        </div>
      `;

      weatherDiv.append(dayHtml); // 날씨 정보를 weather div에 추가
    });
  };

  // 페이지 로드 시 날씨 데이터 가져오기
  getWeatherData();

  // 헤더 스크롤
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const headerBottom = document.querySelector(".header-bottom");
    const logo = document.querySelector(".logo-img");
    const langBtn = document.querySelector(".lang-button");
    const langBtnMb = document.querySelector(".lang-button-mb");
    const submenu = document.querySelectorAll(".header-menu-submenu"); // .header-menu-submenu 요소 선택 console.log("Scroll position:", window.scrollY); // 스크롤 위치 출력

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      headerBottom.style.display = "none";
      logo.src = "images/logo-w.png";
      langBtn.src = "images/button-white.png";

      submenuItems.forEach(function (submenu) {
        submenu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      });
    } else {
      header.classList.remove("scrolled");
      headerBottom.style.display = "flex";
      logo.src = "images/logo3.png";
      langBtn.src = "images/button-black.png";
      submenuItems.forEach(function (submenu) {
        submenu.style.backgroundColor = ""; // 원래 설정으로 되돌리기
      });
    }
  });
});
