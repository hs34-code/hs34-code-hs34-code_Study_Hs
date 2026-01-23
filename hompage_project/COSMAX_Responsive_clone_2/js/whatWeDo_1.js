const whatWeDo = document.querySelector("#whatWeDo")
// ========================================================
// ---------------------- heroabanner ---------------------
// ========================================================
const heroBanner = whatWeDo.querySelector(".heroBanner");

// title 올라오기
const heroTitle = heroBanner.querySelector(".heroBanner .titleArea");
gsap.fromTo(
  heroTitle,
  {
    opacity: 0.1,
    y: 40,
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".heroBanner",
      start: "top bottom",
      end: "top bottom",
      toggleActions: "play none play none",
      // markers: true,
    }
  }
)

// 반원 움직이기
const heroCricle = heroBanner.querySelector(".heroBanner .desginHalfCricleMove.control circle");
const heroCricleLength = heroCricle.getTotalLength();
gsap.fromTo(
  heroCricle,
  {
    strokeDasharray: heroCricleLength,
    strokeDashoffset: heroCricleLength,
  },
  {
    strokeDashoffset: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".heroBanner",
      start: "top center",
      end: "top center",
      toggleActions: "play none reverse none",
      // markers: true,
    }
  }
)

// 이미지 올라오기 pc3개, mobile 1개
ScrollTrigger.matchMedia({
  // =================== pc ===================
  "(min-width: 768px)": () => {
    gsap.utils.toArray(".heroBanner .imgCover").forEach((el, i) => {
      const delay = i * 0.2;

      ScrollTrigger.create({
        trigger: el,
        start: "top 75%",
        end: "top 75%",
        // markers: true,

        onEnter: () => {
          gsap.delayedCall(delay, () => {
            el.classList.add("is-visible");
          });
        },

        onLeaveBack: () => {
          gsap.delayedCall(delay, () => {
            el.classList.remove("is-visible");
          });
        }
      });
    });
  },
  // =================== mobile ===================
  "(max-width: 768px)": () => {
    const mediaMain = heroBanner.querySelector(".mediaMain");
    
    ScrollTrigger.create({
      trigger: ".heroBanner",
      start: "top 75%",
      end: "top 75%",
      // markers: true,

      onEnter:() => mediaMain.classList.add("is-visible"),
      onLeaveBack:() => mediaMain.classList.remove("is-visible")
    })
  }
})

// 이미지 휠 반응하기
gsap.utils.toArray(".heroBanner .imgCover").forEach((heroImg) => {
  const img = heroImg.querySelector("img");
  gsap.fromTo(
    img,
    { y:-40 ,
      scale:1.2,
    },
    {
      y:40,
      scale:1.2,
      scrollTrigger:{
        trigger:heroBanner,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
        // markers: true,
      }
    }
  )
})

// ========================================================
// ------------------------- main1 ------------------------
// ========================================================
// img 휠 반응 이동은 animationJs에 있음
// img 차례로 등장
createScrollTriggerImgShow("#whatWeDo .main1 .imgCover.animationOutImg", "80%" ,"70%");

// ========================================================
// ------------------------- main2 ------------------------
// ========================================================

const desginAnimationArea = whatWeDo.querySelector(".main2 .desginAnimationArea");
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
// ------------------------- main3 ------------------------
// ========================================================
// img 휠 반응 이동은 animationJs에 있음
// img 차례로 등장
animationImgCover1("#whatWeDo .main3 .imgCover.img2");






