$(document).ready(function () {
  // 언어 버튼
  $(".lang > a").on("click", function (e) {
    e.preventDefault();
    $(".lang-submenu").toggle();
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
});
