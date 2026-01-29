gsap.registerPlugin(ScrollTrigger);

// ========================================================
// --------------- animationHalfcircleBottom --------------
// ========================================================
gsap.utils.toArray(".animationHalfCircleBottom circle").forEach((circle) => {
  const length = circle.getTotalLength()/2+1;
  gsap.fromTo(
    circle,
    {
      strokeDasharray: length,
      strokeDashoffset: length,
    },
    {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: circle,
        start: "center center",
        end: "center center",
        toggleActions:"play none reverse none",
        // markers: true,
      }
    }
  )
})

// ========================================================
// --------------- animationHalfcircleTop --------------
// ========================================================
ScrollTrigger.matchMedia({
  "(min-width: 768px)": () => { // ==== pc ====
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".animationHalfCircleTop:not(.self) circle").forEach((circle) => {
        const length = circle.getTotalLength()/2+1;
        gsap.fromTo(
          circle,
          {
            strokeDasharray: length,
            strokeDashoffset: length,
          },
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: circle,
              start: "top center",
              end: "top center",
              toggleActions:"play none reverse none",
              // markers: true,
            }
          }
        )
      })
    })
    
    return () => ctx.revert();
  },
  "(max-width: 768px)": () => { // ==== mobile ===
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".animationHalfCircleTop:not(.self) circle").forEach((circle) => {
        const length = circle.getTotalLength()/2+1;
        gsap.fromTo(
          circle,
          {
            strokeDasharray: length,
            strokeDashoffset: length,
          },
          {
            strokeDashoffset: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: circle,
              start: "top bottom",
              end: "top bottom",
              toggleActions:"play none reverse none",
              // markers: true,
            }
          }
        )
      })
    })
    
    return () => ctx.revert();
  }
})

function makeAnimationHalfCircleTop(target){
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => { // ==== pc ====
      const ctx = gsap.context(() => {
        gsap.utils.toArray(target).forEach((circle) => {
          const length = circle.getTotalLength()/2+1;
          gsap.fromTo(
            circle,
            {
              strokeDasharray: length,
              strokeDashoffset: length,
            },
            {
              strokeDashoffset: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: circle,
                start: "top center",
                end: "top center",
                toggleActions:"play none reverse none",
                // markers: true,
              }
            }
          )
        })
      })
      
      return () => ctx.revert();
    },
    "(max-width: 768px)": () => { // ==== mobile ===
      const ctx = gsap.context(() => {
        gsap.utils.toArray(target).forEach((circle) => {
          const length = circle.getTotalLength()/2+1;
          gsap.fromTo(
            circle,
            {
              strokeDasharray: length,
              strokeDashoffset: length,
            },
            {
              strokeDashoffset: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: circle,
                start: "top bottom",
                end: "top bottom",
                toggleActions:"play none reverse none",
                // markers: true,
              }
            }
          )
        })
      })
      
      return () => ctx.revert();
    }
  })
}

// ========================================================
// -------------------- animationLineY --------------------
// ========================================================
gsap.utils.toArray(".animationLineY:not(.self)").forEach((lineY) => {
  gsap.fromTo(
    lineY,
    {
      scaleY: 0,
      transformOrigin: "top",
    },
    {
      scaleY: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: lineY,
        start: "top center",
        end: "top center",
        toggleActions:"play none reverse none",
        // markers: true,
      }
    }
  )
})

function makeAnimationLineY(target){
  gsap.utils.toArray(target).forEach((lineY) => {
    gsap.fromTo(
      lineY,
      {
        scaleY: 0,
        transformOrigin: "top",
      },
      {
        scaleY: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineY,
          start: "top center",
          end: "top center",
          toggleActions:"play none reverse none",
          // markers: true,
        }
      }
    )
  })
}

// ========================================================
// -------------------- animationLineX --------------------
// ========================================================
gsap.utils.toArray(".animationLineX:not(.self)").forEach((lineX) => {
  gsap.fromTo(
    lineX,
    {
      scaleX: 0,
      transformOrigin: "left",
    },
    {
      scaleX: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: lineX,
        start: "top center",
        end: "top center",
        toggleActions:"play none reverse none",
        // markers: true,
      }
    }
  )
})

function makeAnimationLineY(target){
  gsap.utils.toArray(target).forEach((lineX) => {
    gsap.fromTo(
      lineX,
      {
        scaleX: 0,
        transformOrigin: "left",
      },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineX,
          start: "top center",
          end: "top center",
          toggleActions:"play none reverse none",
          // markers: true,
        }
      }
    )
  })
}

// ========================================================
// ----------------- desginAnimationCircle ----------------
// ".desginAnimationCircle"
// ========================================================
function makeDesginAnimationCircle(target){
  const circleAInfo = {cx: 102, cy: 102, r:100}
  const circleBInfo = {cx: 252, cy: 102, r:100}

  // 1) 중심 간 거리 (수평이므로 x 차이만) // d 설명: 두 원 중심 사이 거리
  const d = Math.abs(circleBInfo.cx - circleAInfo.cx);      // 150
  // 2) 교점의 x는 가운데 // midX 설명: 두 중심의 중간 x
  const midX = (circleAInfo.cx + circleBInfo.cx) / 2;       // 177
  // 3) 반쪽 거리 // half 설명: 중심 거리의 절반
  const half = d / 2;                                      // 75
  // 4) 높이 h (피타고라스) // h 설명: 중심선에서 교점까지의 y 거리(위/아래)
  const h = Math.sqrt(circleAInfo.r ** 2 - half ** 2);      // 약 66.143
  // 5) 교점 2개
  const intersection1 = { x: midX, y: circleAInfo.cy - h }; // 위쪽
  const intersection2 = { x: midX, y: circleAInfo.cy + h }; // 아래쪽

  function moveDot(circle, intersection, dotList) {
    const eps = 0.5; // 허용 오차(px)
    dotList[0].style.opacity= 1;

    if (dotList._rafId) {
      cancelAnimationFrame(dotList._rafId);
      dotList._rafId = null;
    }

    const startX = parseFloat(dotList[0].getAttribute("cx"));
    const startY = parseFloat(dotList[0].getAttribute("cy"));
    let angle = Math.atan2(startY - circle.cy, startX - circle.cx);

    function animateDot(){
      angle += 0.01;

      const x = circle.cx + Math.cos(angle) * circle.r;
      const y = circle.cy + Math.sin(angle) * circle.r;

      dotList.forEach((d) => {
        d.setAttribute("cx", x);
        d.setAttribute("cy", y);
      });

      if(
        Math.abs(x- intersection.x) < eps &&
        Math.abs(y- intersection.y) < eps
      ) return;
      dotList._rafId = requestAnimationFrame(animateDot);
    }
    animateDot()
  }

  function stopDot(circle, dotList, startAngle = 0) {
    // RAF 중단
    if (dotList._rafId) {
      cancelAnimationFrame(dotList._rafId);
      dotList._rafId = null;
    }

    // 시작 각도로 위치 복원
    const x = circle.cx + Math.cos(startAngle) * circle.r;
    const y = circle.cy + Math.sin(startAngle) * circle.r;

    dotList.forEach((d) => {
      d.setAttribute("cx", x);
      d.setAttribute("cy", y);
      d.style.opacity = 0; // 필요 없으면 제거
    });
  }

  gsap.utils.toArray(target).forEach((wrapper) => {
    const circles = wrapper.querySelectorAll(".baseCircle");
    const dotA = wrapper.querySelectorAll(".dotA");
    const dotB = wrapper.querySelectorAll(".dotB");
    

    circles.forEach((el) => {
      const length = el.getTotalLength()+1;
      gsap.fromTo(
        el,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
          // opacity: 0,
        },
        {
          strokeDashoffset: 0,
          // opacity: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
            end: "top center",
            toggleActions:"play none reverse none",
            // markers: true,

            onEnter: () => {
              moveDot(circleAInfo, intersection1, dotA);
              moveDot(circleBInfo, intersection2, dotB);
            },
            
            onLeaveBack: () => {
              stopDot(circleAInfo, dotA, Math.PI/2);
              stopDot(circleBInfo, dotB, -Math.PI/2);
            },
          }
        }
      )
    })
  })
}

// ========================================================
// ----------------- desginAnimationArea  -----------------
// ========================================================
const areas = document.querySelectorAll(".desginAnimationArea");

areas.forEach((area) => {
  setupSvgAnimation(area);
});

function setupSvgAnimation(desginAnimationArea){
  // ===== 상태 (각 area 전용) =====
  let moveTimeoutId = null;
  let bottomTimeoutId = null;
  let ringTimeoutId = null;
  let restartTimeoutId = null;
  let resetTimeoutId = null;
  let centerCircleCount = 1;

  // ===== 요소 캐싱 =====
  const movingCircle = desginAnimationArea.querySelector(".moving-circle");
  const svgCircle = desginAnimationArea.querySelectorAll(".svg-circle");
  const CircleText = desginAnimationArea.querySelectorAll(".circle-text");
  const topArea = desginAnimationArea.querySelectorAll(".topArea");
  const bottomArea = desginAnimationArea.querySelectorAll(".bottomArea");
  const beigeRing = desginAnimationArea.querySelectorAll(".beige-ring");

  // ===== observer =====
  const observer = new IntersectionObserver(
    ([entry]) => {
      svgAnimationCover(entry.isIntersecting);
    },
    { threshold: 1 }
  );

  observer.observe(desginAnimationArea);

  // ===== 메인 애니메이션 =====
  function svgAnimationCover(isVisible){
    if(isVisible){
      if (moveTimeoutId !== null) return;

      movingCircle.classList.add("transition");
      movingCircle.style.strokeDashoffset = "0";

      moveTimeoutId = setInterval(() => {
        const movingRight = 170;

        movingCircle.style.transform =
          `translateX(${movingRight * centerCircleCount}px)`;

        svgCircle[centerCircleCount - 1]?.classList.add("show");
        CircleText[centerCircleCount - 1]?.classList.add("show");

        centerCircleCount++;

        if(centerCircleCount > 6){
          clearInterval(moveTimeoutId);
          moveTimeoutId = null;

          lineAnimation(true, topArea);

          bottomTimeoutId = setTimeout(() => {
            lineAnimation(true, bottomArea);
          }, 1000);

          ringTimeoutId = setTimeout(() => {
            beigeRing.forEach(e => e.classList.add("show"));
          }, 2000);

          movingCircle.style.opacity = 0;

          resetTimeoutId = setTimeout(resetAnimation, 6500);
          restartTimeoutId = setTimeout(() => {
            svgAnimationCover(true);
          }, 7000);
        }
      }, 1000);
    }

    if(!isVisible){
      resetAnimation();
      clearTimeout(restartTimeoutId);
      restartTimeoutId = null;
    }
  }

  // ===== 초기화 =====
  function resetAnimation(){
    movingCircle.classList.remove("transition");
    movingCircle.style.strokeDashoffset = "628";
    movingCircle.style.transform = "translateX(0)";
    movingCircle.style.opacity = 1;

    clearInterval(moveTimeoutId);
    clearTimeout(bottomTimeoutId);
    clearTimeout(ringTimeoutId);

    moveTimeoutId = null;
    bottomTimeoutId = null;
    ringTimeoutId = null;
    centerCircleCount = 1;

    svgCircle.forEach(e => e.classList.remove("show"));
    CircleText.forEach(e => e.classList.remove("show"));

    lineAnimation(false, topArea);
    lineAnimation(false, bottomArea);
    beigeRing.forEach(e => e.classList.remove("show"));
  }
}

// ===== 라인 애니메이션 (공용) =====
function lineAnimation(boolean, area){
  area.forEach((el) => {
    el.classList.toggle("lineAnimation", boolean);
    el.classList.toggle("lineShow", boolean);
    el.classList.toggle("lineHidden", !boolean);
  });
}

// ========================================================
// ----------------- horizontalCardScroll -----------------
// ========================================================
function makeHorizontalCardScroll(){
  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => { // ==== pc ====
      const ctx = gsap.context(() => {
        const horizontalCardScroll = document.querySelectorAll(".horizontalCardScroll");

        horizontalCardScroll.forEach((section) => {
          const track = section.querySelector(".scrollTrack");

          const horizontal = gsap.to(
            track,
            {
              x: () => -(track.scrollWidth - window.innerWidth),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () =>  "+=" + (track.scrollWidth - window.innerWidth),
                invalidateOnRefresh: true,
                // markers: true,
              }
            }
          )

          // card gsap
          const sectionCard = gsap.utils.toArray(track.querySelectorAll(".card"));
          const isLastIndex = sectionCard.length-1;
          const isSecondLastIndex = sectionCard.length-2;

          sectionCard.forEach((card, i) => {
            const triggerForImgCover = card.querySelector(".imgCover");
            const isLast = i === isLastIndex;
            const isSecondLast = i === isSecondLastIndex;

            const startPos = 
            isLast ? "left 100%" : 
            isSecondLast ? "left 80%" : "left 60%";

            const endPos = 
            isLast ? "right 100%" : 
            isSecondLast ? "right 80%" : "right 60%";
            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: -50,
              },
              {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                  trigger : triggerForImgCover,
                  containerAnimation: horizontal,
                  start: startPos,
                  end: endPos,
                  scrub: true,
                  // markers: true,
                }
              }
            )

            // animationLineX gsap
            const targetForLine = card.querySelector(".animationLineX");

            const lineStartPos = 
            isLast ? "left 80%" : 
            isSecondLast ? "left 70%" : "left 60%";

            const lineEndPos = 
            isLast ? "right 80%" : 
            isSecondLast ? "right 70%" : "right 60%";

            gsap.fromTo(
              targetForLine,
              {
                x: "10%",
                scaleX: 0,
                transformOrigin: "left",
              },
              {
                scaleX: 1,
                scrollTrigger: {
                  trigger: card,
                  containerAnimation: horizontal,
                  start: lineStartPos,
                  end: lineEndPos,
                  scrub: true,
                  // markers: true,
                }
              }
            )
          })
        })
      })
      
      gsap.set(".horizontalCardScroll .card", {
        clearProps: "opacity,transform"
      });
      return () => ctx.revert();
    },
    "(max-width: 768px)": () => { // ==== mobile ===
      const ctx = gsap.context(() => {

        imagesWheelIntroManagerOpacity({
          target: ".horizontalCardScroll .card .imgCover",
          start: "top 75%", end: "top 75%",
        })

      })
      
      gsap.set(".horizontalCardScroll .card", {
        clearProps: "opacity,transform"
      });
      return () => ctx.revert();
    }
  })
}


// ========================================================
// --------------------- 함수 기능 -------------------------
// 화면 감지 width 몇인지
// ========================================================
// function getViewportWidth(){
//   // console.log(window.innerWidth)
//   return window.innerWidth;
// }

// window.addEventListener("resize", getViewportWidth);

// 최초 1회
// getViewportWidth();

// ========================================================
// --------------------- 함수 외부 -------------------------
// 이미지 휠반응 등장 opacity모션
// 기본 설정 opacity 0 > 1, animationTime 0.5s
// ========================================================
function imagesWheelIntroManagerOpacity({
  target, trigger = null, 
  start= "top 85%", end= "top 85%",
  duration= 0.5,
  toggleActions= "play none reverse none",
  markers= false,
}){
  gsap.utils.toArray(target).forEach((el) => {
    const trigger_ = trigger === "self" ? el : el.closest(".imgCover") || el;
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "none",
        duration,
        scrollTrigger:{
          trigger: trigger_,
          start,
          end,
          toggleActions,
          markers,
        }
      }
    )
  })
}
// ========================================================
// --------------------- 함수 외부 -------------------------
// 이미지 휠반응 등장 Y모션
// 기본 설정 scroub off, 제자리로 위치, animationTime 0.5s
// ========================================================
function imagesWheelIntroManagerY({
  target, trigger = null,
  fromY= 40, toY= 0,
  start= "top 70%", end= "top 70%",
  scrub= false,
  duration= 0.5, toggleActions= "play none reverse none",
  markers= false,
}){
  const isScrub = scrub !== false;
  gsap.utils.toArray(target).forEach((el) => {
    const trigger_ = trigger === "self" ? el : el.closest(".imgCover") || el;
    gsap.fromTo(
      el,
      { y: fromY},
      {
        y: toY,
        ...(isScrub ? {} : {duration}),
        ease: "none",
        scrollTrigger:{
          trigger: trigger_,
          start,
          end,
          scrub,
          ...(isScrub ? {} : {toggleActions}),
          markers,
        }
      }
    )
  })
}

// ========================================================
// --------------------- 함수 외부 -------------------------
// 이미지 휠반응 등장 delay에 따른 Y, opacity 모션
// imgCover, cover 상위 객체 기준 보낼것
// ========================================================
function imagesWheelIntroManagerDelay({
  target, trigger,
  fromY= 50, toY= 0,
  fromOpacity= 0, toOpacity= 1,
  start= "top 75%", end= false,
  duration= 0.5, stagger= 0.1,
  toggleActions= "play reverse play reverse",
  markers= false,
}){
  gsap.fromTo(
  target,
  { 
    opacity: fromOpacity, 
    y: fromY,
  },
  {
    opacity: toOpacity,
    y: toY,
    duration,
    stagger,
    ease: "none",
    scrollTrigger: {
      trigger,
      start,
      end,
      toggleActions,
      markers,
    }
  }
);
}

// ========================================================
// --------------------- 함수 내부 -------------------------
// 이미지 휠반응 내부 및 외부 움직임 단순 Y모션
// 기본 설정 scroub만 있음
// ========================================================
function imagesWheelControlManagerY({
  target, trigger= null,
  fromY= -50, toY= 50,
  start= "top 70%", end= "bottom 70%",
  scrub= 0.7,
  markers= false,
}){
  gsap.utils.toArray(target).forEach((el) => {
    const trigger_ = trigger ?? el.closest(".imgCover")

    gsap.fromTo(
      el,
      { y:fromY},
      {
        y: toY,
        scrollTrigger:{
          trigger : trigger_,
          start,
          end,
          scrub,
          markers,
        }
      }
    )
  })
}