gsap.registerPlugin(ScrollTrigger);

// ========================================================
// ------------- desginLineY anmation effect --------------
// ========================================================

// 세로선
gsap.utils.toArray(".desginLineMoveY").forEach((lineY) => {
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
//반원
gsap.utils.toArray(".desginHalfCricleMove circle").forEach((circle) => {
  const length = circle.getTotalLength();
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
        trigger: circle.closest(".desginHalfCricleMove"),
        start: "top center",
        end: "top center",
        toggleActions: "play none reverse none",
        // markers: true,
      }
    }
  )
})


// media type 감지, media일때 실행안되게 할려면 if(isMobile)
const mediaWidth = window.matchMedia("(max-width: 768px)");
let isMobile = mediaWidth.matches;
mediaWidth.addEventListener("change", (e) =>{
  isMobile = e.matches;
})
// ========================================================
// ----------------------- main 1 -------------------------
// ========================================================

// line media 및 window 시작지점 변수화
const main1 = document.querySelector(".main1");
const main1TitleArea = main1.querySelector(".titleArea");

updateTitleHeight();

// height 값 설정 함수
function updateTitleHeight(){
  if(isMobile) {
    main1.style.setProperty("--titleAreaTop", `0px`);
    return;
  } 
  const height = main1TitleArea.offsetHeight;
  main1.style.setProperty("--titleAreaTop", `${height}px`);
}

// height 값 변경시 설정 함수 실행
const resizeObserver = new ResizeObserver(() => {
  updateTitleHeight();
});

//mainTitleArea를 감시시작
resizeObserver.observe(main1TitleArea);

// video Area
gsap.to(".main1 .videoArea video", {
  scale:1.7,
  ease: "none",

  scrollTrigger: {
    trigger:".main1 .videoArea",
    start: "top center",
    end: "bottom center",
    scrub: 0.8,
    // markers: true,
  }
})



// ========================================================
// ----------------------- main 2 -------------------------
// ========================================================

// img 위 아래
gsap.utils.toArray(".main2 .img_wrapper img").forEach((main2Img) => {
  gsap.fromTo(
    main2Img,
    {
      opacity: 0.1,
    },
    {
      opacity: 1,
      ease: "none",
      duration: 0.3,
      scrollTrigger:{
        trigger:main2Img,
        start: "top 85%",
        end: "top 85%",
        toggleActions:"play none reverse none",
        // markers: true,
      }
    }
  )
})
gsap.utils.toArray(".main2 .img_wrapper img").forEach((main2Img) => {
  gsap.fromTo(
    main2Img,
    {
      y: 30,
    },
    {
      y: -40,
      scrollTrigger:{
        trigger:main2Img,
        start: "top 70%",
        end: "bottom 70%",
        scrub: 0.9,
        // markers: true,
      }
    }
  )
})

// ========================================================
// ----------------------- main 3 -------------------------
// ========================================================

// img 3개 위 아래 등장
ScrollTrigger.matchMedia({
  // =================== pc ===================
  "(min-width: 768px)": () => {
    gsap.utils.toArray(".main3 .imgArea").forEach((el, i) => {
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
    gsap.utils.toArray(".main3 .imgArea").forEach((main3Img) => {
    gsap.fromTo(
      main3Img,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger:{
          trigger:main3Img,
          start: "top 60%",
          end: "top 60%",
          toggleActions:"play none reverse none",
          // markers: true,
        }
      }
    )
  })
  }
})

// img 내부 위아래 움직임
gsap.utils.toArray(".main3 .imgArea").forEach((main3Img) => {
  const img = main3Img.querySelector("img");
  gsap.fromTo(
    img,
    { y:-40 },
    {
      y:40,
      scrollTrigger:{
        trigger:main3Img,
        start: "top 70%",
        end: "bottom 70%",
        scrub: 0.5,
        // markers: true,
      }
    }
  )
})


// ========================================================
// ----------------------- main 4 -------------------------
// ========================================================
// 🔧 도트 Q 설정
const dotQ = {
  el: document.querySelector('.dot-q'),
  center: { x: 150, y: 150 },     // 원 중심
  r: 100,                          // 반지름
  end: { x: 225, y: 84 },         // 🔧 도착 위치
  cw: true,                        // 🔧 시계방향 (true) / 반시계방향 (false)
  dur: 2000                        // 🔧 속도 (밀리초)
};

// 🔧 도트 W 설정
const dotW = {
  el: document.querySelector('.dot-w'),
  center: { x: 300, y: 150 },
  r: 100,
  end: { x: 225, y: 216 },        // 🔧 도착 위치
  cw: false,                       // 🔧 시계방향 (true) / 반시계방향 (false)
  dur: 2000                        // 🔧 속도 (밀리초)
};

// 도트 애니메이션
function animate(d) {
  d.el.style.opacity = 1;
  const start = performance.now();
  const endAngle = Math.atan2(d.end.y - d.center.y, d.end.x - d.center.x);
  let rotation = endAngle + Math.PI / 2 + (d.cw ? Math.PI * 2 : -Math.PI * 2);

  function move(t) {
    const p = Math.min((t - start) / d.dur, 1);
    if (p < 1) {
        const a = -Math.PI / 2 + rotation * p;
      d.el.setAttribute('cx', d.center.x + Math.cos(a) * d.r);
      d.el.setAttribute('cy', d.center.y + Math.sin(a) * d.r);
      requestAnimationFrame(move);
    } else {
      d.el.setAttribute('cx', d.end.x);
      d.el.setAttribute('cy', d.end.y);
    }
  }
  requestAnimationFrame(move);
}

initState()
gsap.to(".main4 .desginArea_wrapper", {
  scaleY: 1,
  scrollTrigger: {
    trigger:".main4 .desginArea_wrapper",
    start: "top 90%",
    end: "bottom 10%",
    // markers:true,

    onEnter:startAnimation,
    onEnterBack:startAnimation,

    onLeave: resetAnimation,
    onLeaveBack: resetAnimation,
  }
})

// 🚀 실행 (이 함수를 GSAP에서 호출하면 됨)
function startAnimation() {
  document.querySelector('.circle-a').classList.add('animate');
  document.querySelector('.circle-b').classList.add('animate');
  animate(dotQ);
  animate(dotW);
}

function resetAnimation() {
  const a = document.querySelector('.circle-a');
  const b = document.querySelector('.circle-b');

  a.classList.remove('animate');
  b.classList.remove('animate');

  // 🔑 CSS animation 다시 실행되게 강제 reflow
  void a.offsetWidth;
  void b.offsetWidth;

  dotQ.el.style.opacity = 0;
  dotW.el.style.opacity = 0;
}


function initState() {
  // circle stroke 초기화
  document.querySelector('.circle-a').classList.remove('animate');
  document.querySelector('.circle-b').classList.remove('animate');

  // dot 숨김 + 시작 위치로 복귀
  dotQ.el.style.opacity = 0;
  dotW.el.style.opacity = 0;

  dotQ.el.setAttribute('cx', dotQ.center.x);
  dotQ.el.setAttribute('cy', dotQ.center.y - dotQ.r);

  dotW.el.setAttribute('cx', dotW.center.x);
  dotW.el.setAttribute('cy', dotW.center.y - dotW.r);
}


// ========================================================
// ----------------------- main 6 -------------------------
// ========================================================
gsap.utils.toArray(".main6 .imgArea img").forEach((main6img) => {
  gsap.fromTo(
    main6img,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger:{
        trigger:main6img,
        start: "top 70%",
        end: "top 70%",
        toggleActions:"play none reverse none",
        // markers: true,
      }
    }
  )
})