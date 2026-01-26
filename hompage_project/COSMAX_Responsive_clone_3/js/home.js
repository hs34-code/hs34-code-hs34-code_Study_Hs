const home = document.querySelector("#home");

const main1 = home.querySelector(".main1")
const main2 = home.querySelector(".main2")
const main3 = home.querySelector(".main3")
const main4 = home.querySelector(".main4")
const main5 = home.querySelector(".main5")
// ========================================================
// ----------------------- main 1 -------------------------
// ========================================================
gsap.to("#home .main1 .video video", {
  scale:1,
  ease: "none",
  scrollTrigger:{
    trigger:"#home .main1 .video",
    start:"top center",
    end:"40% center",
    scrub: 0.8,
    // markers: true,
  }
})

// ========================================================
// ----------------------- main 2 -------------------------
// ========================================================
imagesWheelIntroManagerOpacity({
  target: "#home .main2 .img .imgCover img",
  // markers: true,
})
imagesWheelIntroManagerY({
  target: "#home .main2 .img .imgCover img",
  toY: -40,
  end: "bottom 70%",
  scrub: 0.7, toggleActions: false,
  // markers: true,
})

// ========================================================
// ----------------------- main 3 -------------------------
// ========================================================
ScrollTrigger.matchMedia({
  // =================== pc ===================
  "(min-width: 768px)": () => {

    const ctx = gsap.context(() => {
      imagesWheelIntroManagerDelay({
        target: "#home .main3 .img .imgCover",
        trigger: "#home .main3 .img",
        // markers: true,
      })
    })
    
    return () => ctx.revert();
  },

  // =================== mobile ===================
  "(max-width: 768px)": () => {

    const ctx = gsap.context(() => {
      imagesWheelIntroManagerOpacity({
        target: "#home .main3 .img .imgCover",
        // markers: true,
      })
      imagesWheelIntroManagerY({
        target: "#home .main3 .img .imgCover",
        fromY: 60,
        start: "top 85%", end: "top 85%",
        // markers: true,
      })
    })

    return () => ctx.revert();
  }
})

imagesWheelControlManagerY({
  target: "#home .main3 .img .imgCover img",
  // markers: true,
})

// ========================================================
// ----------------------- main 6 -------------------------
// ========================================================
imagesWheelIntroManagerOpacity({
  target: "#home .main6 .imgCover",
  // markers: true,
})

imagesWheelIntroManagerY({
  target: "#home .main6 .imgCover",
  toY: -40,
  start: "top 85%", end: "bottom 85%",
  scrub: 0.7,
  // markers: true,
})