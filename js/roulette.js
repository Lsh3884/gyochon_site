window.addEventListener("load", function () {
  const $c = document.querySelector("canvas");
  const ctx = $c.getContext("2d");

  const product = [
    "아메리카노1잔 무료",
    "숙박료10%할인",
    "꽝",
    "한복무료대여1인",
    "제휴식당 10%할인",
  ];

  const colors = [
    "#dc0936",
    "#e6471d",
    "#f7a416",
    "#efe61f",
    "#60b236",
    "#209b6c",
  ];

  const updateCanvasSize = () => {
    if (window.innerWidth <= 350) {
      $c.width = 250;
      $c.height = 250;
    } else if (window.innerWidth <= 1450) {
      $c.width = 300;
      $c.height = 300;
    } else {
      $c.width = 400;
      $c.height = 400;
    }

    newMake(); // 크기 변경 후 다시 그리기
  };

  const newMake = () => {
    const [cw, ch] = [$c.width / 2, $c.height / 2];
    const arc = Math.PI / (product.length / 2);

    ctx.clearRect(0, 0, $c.width, $c.height); // 이전 내용을 지우기

    for (let i = 0; i < product.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(cw, ch);
      ctx.arc(cw, ch, cw, arc * i, arc * (i + 1));
      ctx.fill();
      ctx.closePath();
    }

    ctx.fillStyle = "#fff";

    ctx.textAlign = "center";
    ctx.textBaseline = "middle"; // 텍스트 기준을 가운데로 설정
    if (window.innerWidth <= 350) {
      ctx.font = "12px Pretendard"; // 글자 크기를 12px로 변경
    } else {
      ctx.font = "25px Pretendard"; // 기본 글자 크기
    }
    for (let i = 0; i < product.length; i++) {
      const angle = arc * i + arc / 2;

      ctx.save();

      ctx.translate(
        cw + Math.cos(angle) * (cw - 50),
        ch + Math.sin(angle) * (ch - 50)
      );

      ctx.rotate(angle + Math.PI / 2);

      product[i].split(" ").forEach((text, j) => {
        ctx.fillText(text, 0, 30 * j);
      });

      ctx.restore();
    }
  };

  window.rotate = () => {
    $c.style.transform = `initial`;
    $c.style.transition = `initial`;

    setTimeout(() => {
      const ran = Math.floor(Math.random() * product.length);

      const arc = 360 / product.length;
      const rotate = ran * arc + 3000 + arc / 2;

      $c.style.transform = `rotate(-${rotate}deg)`;
      $c.style.transition = `2s`;
      setTimeout(() => {
        const resultText = product[ran];

        // 화면 너비가 450 이하일 때는 팝업으로 표시
        if (window.innerWidth <= 450) {
          const popupOverlay = document.querySelector(".popup-overlay");
          const popupResult = document.querySelector(".popup-result");

          popupResult.textContent = ` ${resultText}`;
          popupOverlay.style.display = "flex";

          // 팝업 닫기
          document
            .querySelector(".popup-close")
            .addEventListener("click", () => {
              popupOverlay.style.display = "none";
            });
        } else {
          document.querySelector(
            ".roulette-result"
          ).innerHTML = `${resultText}`;
        }
      }, 2000);
    }, 1);
  };

  updateCanvasSize(); // 초기 크기 설정

  // 윈도우 리사이즈 이벤트 리스너 추가
  window.addEventListener("resize", updateCanvasSize);

  const roulletteClose = document.querySelector(".roullette-close-button");
  const roulette = document.querySelector(".roulette");

  const updateScroll = () => {
    if (getComputedStyle(roulette).display === "block") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  // 초기 상태 업데이트
  updateScroll();

  roulletteClose.addEventListener("click", function () {
    roulette.style.display = "none";
    updateScroll();
  });

  // MutationObserver를 사용하여 display 속성 변화 감지
  const observer = new MutationObserver(() => {
    updateScroll();
  });

  observer.observe(roulette, {
    attributes: true,
    attributeFilter: ["style"],
  });
});
