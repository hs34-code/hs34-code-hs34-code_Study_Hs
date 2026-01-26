const wwd_OV = document.querySelector("#wwd_OV");
// ========================================================
// --------------------- heroBanner -----------------------
// ========================================================
imagesWheelIntroManagerDelay({
  target: "#wwd_OV .heroBanner .imgCover",
  trigger: "#wwd_OV .heroBanner",
  // markers: true,
})

imagesWheelControlManagerY({
  target: "#wwd_OV .heroBanner .imgCover img",
  start: "top 20%", end: "bottom 20%",
  // markers: true,
})

// ========================================================
// ----------------------- main 1 -------------------------
// ========================================================
ScrollTrigger.matchMedia({
  "(min-width: 768px)": () => { // ==== pc ====

    const ctx = gsap.context(() => {
      imagesWheelIntroManagerDelay({
        target: "#wwd_OV .main1 .img .imgCover",
        trigger: "#wwd_OV .main1 .img",
        // markers: true,
      })
    })
    
    return () => ctx.revert();
  },
  "(max-width: 768px)": () => { // ==== mobile ===

    const ctx = gsap.context(() => {
      imagesWheelIntroManagerOpacity({
        target: "#wwd_OV .main1 .img .imgCover",
        // markers: true,
      })
      imagesWheelIntroManagerY({
        target: "#wwd_OV .main1 .img .imgCover",
        fromY: 60,
        start: "top 85%", end: "top 85%",
        // markers: true,
      })
    })
    
    return () => ctx.revert();
  }
})

imagesWheelControlManagerY({
  target: "#wwd_OV .main1 .imgCover img",
  // markers: true,
})

// ========================================================
// ----------------------- main 2 -------------------------
// ========================================================
const desginAnimationArea = wwd_OV.querySelector(".main2 .desginAnimationArea");
// 감시자 생성
const svgObserver = new IntersectionObserver((entries) => {
  //보이면 실행
  const entry = entries[0]
  svgAnimationCover(entry.isIntersecting);
}, {threshold: 1}) // 전부 보일때 실행
// 감시할 객체 등록
svgObserver.observe(desginAnimationArea);


let moveTimeoutId = null;
let bottomTimeoutId = null;
let ringTimeoutId = null;
let restartTimeoutId = null;
let resetTimeoutId = null;

let centerCricleCount = 1;
function svgAnimationCover(isVisible){
  // movingCricle 그려지기
  const movingCricle = desginAnimationArea.querySelector(".moving-circle");
  const svgCricle = desginAnimationArea.querySelectorAll(".svg-circle")
  const cricleText = desginAnimationArea.querySelectorAll(".circle-text")
  const topArea = desginAnimationArea.querySelectorAll(".topArea");
  const bottomArea = desginAnimationArea.querySelectorAll(".bottomArea");
  const beigeRing = desginAnimationArea.querySelectorAll(".beige-ring");

  if(isVisible){
    if (moveTimeoutId !== null) return;
    movingCricle.classList.add("transition");

    // 원 그려지기 
    movingCricle.style.strokeDashoffset = "0";

    clearInterval(moveTimeoutId);
    clearTimeout(bottomTimeoutId);
    clearTimeout(ringTimeoutId);

    // 원 이동 및 텍스트 출력 반복 (즉 중앙 라인)
    moveTimeoutId = setInterval(() => {
      const movingRight = 170;

      movingCricle.style.transform = `translateX(${movingRight*centerCricleCount}px)`;
      svgCricle[centerCricleCount-1].classList.add("show");
      cricleText[centerCricleCount-1].classList.add("show");

      centerCricleCount++; 
      if(centerCricleCount > 6){
        clearInterval(moveTimeoutId);
        moveTimeoutId = null;

        // 다음 애니메이션 (topLine)
        lineAnimation(true, topArea)

        // 다음 애니메이션 (bottomine)
        bottomTimeoutId = setTimeout(() => {
          lineAnimation(true, bottomArea)
        },1000)

        // 다음 애니메이션 (beigeRing)
        ringTimeoutId = setTimeout(() => {
          beigeRing.forEach((e) => {e.classList.add("show");})
        },2000)

        // 초기화
        movingCricle.style.opacity = 0;
        clearTimeout(resetTimeoutId);
        resetTimeoutId = setTimeout(() => {
          resetAnimation();
        },6500);

        clearTimeout(restartTimeoutId);
        restartTimeoutId = setTimeout(() => {
          svgAnimationCover(true);
        },7000)
      }
    }, 1000);
  }

  if(!isVisible){  
    resetAnimation();
    clearTimeout(restartTimeoutId);
    restartTimeoutId = null;
  }
  function resetAnimation() {
    movingCricle.classList.remove("transition");

    // 원 그려지기 초기화
    movingCricle.style.strokeDashoffset = "628";

    // 타임 시간 대기열 초기화
    clearInterval(moveTimeoutId); 
    clearTimeout(bottomTimeoutId);
    clearTimeout(ringTimeoutId);
    moveTimeoutId = null;
    bottomTimeoutId = null;
    ringTimeoutId = null;
    centerCricleCount = 1;

    // 움직인 원 초기화
    movingCricle.style.transform = "translateX(0px)";
    movingCricle.style.opacity = 1;

    // 원 이동 및 텍스트 출력 반복 (즉 중앙 라인) 초기화
    svgCricle.forEach((e) => e.classList.remove("show"))
    cricleText.forEach((e) => e.classList.remove("show"))

    lineAnimation(false ,topArea);
    lineAnimation(false ,bottomArea);

    beigeRing.forEach((e) => {e.classList.remove("show");})
  }
  return;
}

//top anmd bottom Line animation
function lineAnimation(boolean, area){
  // start
  if(boolean){
    area.forEach((el) => {
      el.classList.add("lineAnimation");
      el.classList.remove("lineHidden");
      el.classList.add("lineShow");
    })
  }
  // reset
  if(!boolean){
    area.forEach((el) => {
      el.classList.remove("lineAnimation");
      el.classList.add("lineHidden");
      el.classList.remove("lineShow");
    })
  }
}

// ========================================================
// ----------------------- main 3 -------------------------
// ========================================================
imagesWheelIntroManagerOpacity({
  target: "#wwd_OV .main3 .imgCover",
  start: "top 80%", end: "top 80%",
  // markers: true,
})
imagesWheelIntroManagerY({
  target: "#wwd_OV .main3 .imgCover.i31",
  start: "top 80%", end: "top 80%",
  // markers: true,
})

imagesWheelControlManagerY({
  target: "#wwd_OV .main3 .imgCover.i32",
  trigger: "#wwd_OV .main3",
  fromY: 40, toY: -40,
  // markers: true,
})

imagesWheelControlManagerY({
  target: "#wwd_OV .main3 .imgCover.i33",
  trigger: "#wwd_OV .main3 .content",
  fromY: 40, toY: -40,
  // markers: true,
})

// ========================================================
// ----------------------- main 7 -------------------------
// ========================================================
ScrollTrigger.matchMedia({
  "(min-width: 768px)": () => { // ==== pc ====
    const ctx = gsap.context(() => {
      imagesWheelIntroManagerDelay({
        target: "#wwd_OV .main7 .desginImg .imgCover",
        trigger: "#wwd_OV .main7 .desginImg",
        // markers: true,
      })
    })
    
    return () => ctx.revert();
  },
  "(max-width: 768px)": () => { // ==== mobile ===
    const ctx = gsap.context(() => {
      imagesWheelIntroManagerOpacity({
        target: "#wwd_OV .main7 .desginImg .imgCover",
        // markers: true,
      })
      imagesWheelIntroManagerY({
        target: "#wwd_OV .main7 .desginImg .imgCover",
        fromY: 60,
        start: "top 85%", end: "top 85%",
        // markers: true,
      })
    })
    
    return () => ctx.revert();
  }
})

imagesWheelControlManagerY({
  target: "#wwd_OV .main7 .desginImg .imgCover img",
  fromY: -30, toY: 30,
  // markers: true,
})