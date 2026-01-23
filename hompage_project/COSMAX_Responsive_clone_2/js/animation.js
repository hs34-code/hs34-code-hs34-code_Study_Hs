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
gsap.utils.toArray(".desginHalfCricleMove:not(.control) circle").forEach((circle) => {
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


// ========================================================
// ----------- img area 내부 휠 반응 위아래 이동 -----------
// ========================================================
gsap.utils.toArray(".imgCover.animationInImg").forEach((inImg) => {
  const img = inImg.querySelector("img");
  gsap.fromTo(
    img,
    { y:-50 },
    {
      y:50,
      scrollTrigger:{
        trigger:inImg,
        start: "top 70%",
        end: "bottom 70%",
        scrub: 0.5,
        // markers: true,
      }
    }
  )
})




// ========================================================
// ------------------ img 순서대로 등장 --------------------
// ========================================================
// img = 기본구조 = #bodyId > imgArea > imgCover > img
// 호출 #bodyId .imgCover.animationOutImg
// pc = 80%
// mobile = 60%
function createScrollTriggerImgShow(img, pc ,mobile){
ScrollTrigger.matchMedia({
  // =================== pc ===================
  "(min-width: 768px)": () => {
    gsap.utils.toArray(img).forEach((el, i) => {
      const delay = i * 0.2;

      ScrollTrigger.create({
        trigger: el,
        start: `top ${pc}`,
        end: `top ${pc}`,
        // markers: true,

        onEnter: () => {
          gsap.killTweensOf(el);
          gsap.delayedCall(delay, () => {
            el.classList.add("is-visible");
          });
        },

        onLeaveBack: () => {
          gsap.killTweensOf(el);  
          gsap.delayedCall(delay, () => {
            el.classList.remove("is-visible");
          });
        }
      });
    });
  },

  // =================== mobile ===================
  "(max-width: 768px)": () => {
    gsap.utils.toArray(img).forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: -20,
        ease: "none",
        duration: 0.5,
        scrollTrigger:{
          trigger:el,
          start: `top ${mobile}`,
          end: `top ${mobile}`,
          toggleActions:"play none reverse none",
          // markers: true,
        }
      }
    )
  })
  }
})// ScrollTrigger.matchMedia 종료,
} // 함수종료



// ========================================================
// ----------- 이미지 한개 휠반응해서 움직이기 -----------
// ========================================================
function animationImgCover1(img) {
  gsap.fromTo(
    img,
    { y:60 },
    {
      y:0,
      scrollTrigger:{
        trigger:img,
        start: "top 70%",
        end: "bottom 70%",
        scrub: 0.5,
        // markers: true,
      }
    }
  )
}