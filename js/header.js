window.addEventListener("load", function () {
  // 언어 클릭 시 토글
  const langBtn = document.querySelector(".lang > a");
  const langmenu = document.querySelector(".lang-submenu");

  langBtn.addEventListener("click", function () {
    langmenu.classList.toggle("active");
  });
  document.addEventListener("click", function (e) {
    if (!langBtn.contains(e.target) && !langmenu.contains(e.target)) {
      langmenu.classList.remove("active");
    }
  });

  // 모바일 navi
  const sideNaviMb = document.querySelector(".side-navi-mb");
  const mbHeaderNavi = document.querySelector(".mb-header-navi");
  const closeButton = document.querySelector(".closeBtn");

  // 스크롤 비활성화/활성화 함수
  function toggleBodyScroll(disable) {
    document.body.style.overflow = disable ? "hidden" : ""; // 스크롤 비활성화 또는 활성화
  }

  // 사이드 네비게이션 클릭 시 메뉴 열기/닫기
  sideNaviMb.addEventListener("click", function () {
    mbHeaderNavi.classList.toggle("active");
    toggleBodyScroll(mbHeaderNavi.classList.contains("active"));
    if (mbHeaderNavi.classList.contains("active")) {
      window.scrollTo(0, 0); // 메뉴가 열리면 화면을 맨 위로 이동
    }
  });

  // 닫기 버튼 클릭 시 메뉴 닫기
  closeButton.addEventListener("click", function () {
    mbHeaderNavi.classList.remove("active");
    toggleBodyScroll(false);
  });

  // 모바일 서브메뉴 토글
  const mbnaviTitles = document.querySelectorAll(".header-menu-title-mb");
  const mbSubmenus = document.querySelectorAll(".header-menu-submenu-mb");

  mbnaviTitles.forEach(function (title, index) {
    title.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 동작 방지
      const submenu = mbSubmenus[index];
      if (submenu.classList.contains("active")) {
        submenu.classList.remove("active");
      } else {
        mbSubmenus.forEach(function (submenu) {
          submenu.classList.remove("active");
        });
        submenu.classList.add("active");
      }
    });
  });

  // 창 크기 변경 시 메뉴 자동 닫기
  function handleResize() {
    if (window.innerWidth > 900) {
      mbHeaderNavi.classList.remove("active");
      toggleBodyScroll(false);
    }
  }

  // 윈도우 리사이즈 이벤트 리스너 추가
  window.addEventListener("resize", handleResize);
  handleResize(); // 페이지 로드 시 체크

  // 언어 선택 메뉴 토글
  const mbLog = document.querySelector(".mb-lang");
  const mbLangsubmenu = document.querySelector(".mb-lang-wrap");

  mbLog.addEventListener("click", function () {
    mbLangsubmenu.classList.toggle("active");
  });

  // 언어 선택 메뉴 외부 클릭 시 닫기
  document.addEventListener("click", function (e) {
    // 언어 메뉴 외부 클릭 시 닫기
    if (!mbLog.contains(e.target) && !mbLangsubmenu.contains(e.target)) {
      mbLangsubmenu.classList.remove("active");
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
      const weatherIcon = day.weather[0].icon;
      const dayLabel = getDayLabel(index);
      const description = day.weather[0].description;
      const temperature = `${Math.round(day.main.temp)} °C`;
      // const iconCode = day.weather[0].icon;
      // const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const iconUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

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

  // 스크롤 시 헤더 변경
  const header = document.querySelector(".header");
  const headerTop = document.querySelector(".header-top");
  const headerBottom = document.querySelector(".header-bottom");
  const langBtnImg = document.querySelector(".lang-button");
  const logo = document.querySelector(".logo-img");
  const headerSubmenu = document.querySelectorAll(".header-menu-submenu");
  const hamberherbar = document.querySelector(".side-navi-mb");
  const search = document.querySelector(".search");
  const Langbtn = document.querySelector(".lang-submenu");

  let scy = 0;
  this.window.addEventListener("scroll", function () {
    scy = this.window.document.documentElement.scrollTop;
    if (scy > 0) {
      headerTop.classList.add("scrolled");
      headerBottom.classList.add("scrolled");
      header.classList.add("scrolled");
      langBtnImg.src = "images/button-white.png";
      logo.src = "images/logo-w.png";
      hamberherbar.classList.add("scrolled");
      Langbtn.classList.add("scrolled");
      headerSubmenu.forEach(function (submenu) {
        submenu.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      });
      search.classList.add("scrolled");
    } else {
      headerTop.classList.remove("scrolled");
      header.classList.remove("scrolled");
      hamberherbar.classList.remove("scrolled");
      langBtnImg.src = "images/button-black.png";
      Langbtn.classList.remove("scrolled");
      logo.src = "images/logo3.png";
      headerSubmenu.forEach(function (submenu) {
        submenu.style.backgroundColor = ""; // 원래 설정으로 되돌리기
      });
      search.classList.remove("scrolled");
    }
  });
  const gotop = document.querySelector(".go-top-img");
  const goTopContainer = document.querySelector(".go-top");
  gotop.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY === 0) {
      // Scroll to the bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      // Scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  window.addEventListener("scroll", function () {
    // 사용자가 화면 맨 아래로 스크롤했는지 확인
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      goTopContainer.style.transform = "rotate(0deg)"; // 0도로 회전
    } else {
      goTopContainer.style.transform = "rotate(180deg)"; // 180도로 유지
    }
  });
});
