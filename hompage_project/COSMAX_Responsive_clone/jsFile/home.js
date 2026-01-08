// ========================================================
// -------------------- section 1 hero --------------------
// ========================================================

gsap.registerPlugin(ScrollTrigger);

const ScrollSection1Hero = gsap.to(".hero__root .videoArea video", {
  scale: 1.5,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero__root .videoArea",

    start: "top center",   // 영역 A가 화면 아래에 닿기 시작
    end: "center center",     // 영역 A가 화면 위로 빠질 때

    scrub: 0.1,           // 스크롤에 비례
    // markers: true,      // 디버깅용 (확인 후 제거)
  }
});

// ========================================================
// -------------------- section 2 text --------------------
// ========================================================

// ========================= Cricle =========================
const ScrollSection2Cricle = gsap.to(".innovation__root .desginCricle svg circle", {
  strokeDashoffset: 0,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".innovation__root .rightArea", // 이요소가 화면에 들어오면 조건 계산
    start: "top 60%",
    end: "top 60%",
    toggleActions: "play none reverse none",
    // markers: true
    // ↓ 설명
    // enter        : play
    // leave        : reverse
    // enterBack    : play
    // leaveBack    : reverse
  }
});

// ========================= Line =========================
const ScrollSection2Line = gsap.to(".innovation__root .desginLine", {
  scaleY:1,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".innovation__root .rightArea", // 이요소가 화면에 들어오면 조건 계산
    start: "top 60%",
    end: "top 60%",
    toggleActions: "play none reverse none",
    // markers: true
  }
})


// ========================= img1 =========================
const ScrollSection2img1 = gsap.to(
  ".innovation__root .img1", {
  opacity: 1,
  duration: 0.3, // 애니메이션 시간
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".innovation__root .img1", // 이요소가 화면에 들어오면 조건 계산
    start: "top 90%",
    toggleActions: "play none none reverse",
    // markers: true
  }
})
const ScrollSection2img1move = gsap.fromTo(
  ".innovation__root .img1",
  { y: 20 },
  {
    y: -20,
    ease: "none",

    scrollTrigger: {
      trigger: ".innovation__root .img1",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 0.5,
      // markers: true
    }
  }
);



// ========================= img2 =========================
const ScrollSection2img2 = gsap.to(
  ".innovation__root .img2", {
  opacity: 1,
  duration: 0.3, // 애니메이션 시간
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".innovation__root .img2", // 이요소가 화면에 들어오면 조건 계산
    start: "top 90%",
    toggleActions: "play none none reverse",
    // markers: true
  }
})
const ScrollSection2img2move = gsap.fromTo(
  ".innovation__root .img2",
  { y: 20 },
  {
    y: -20,
    ease: "none",

    scrollTrigger: {
      trigger: ".innovation__root .img2",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 0.5,
      // markers: true
    }
  }
);


// ========================================================
// -------------------- section 3  --------------------
// ========================================================

// ========================= Cricle =========================
const ScrollSection3Cricle = gsap.to(".whateWeDo__root .desginCricle svg circle", {
  strokeDashoffset: 0,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".whateWeDo__root .h2Area", // 이요소가 화면에 들어오면 조건 계산
    start: "top 60%",
    end:"top 60%",
    toggleActions: "play none reverse none",
    // markers: true
    // ↓ 설명
    // enter        : play
    // leave        : reverse
    // enterBack    : play
    // leaveBack    : reverse
  }
});

// ========================= Line =========================
const ScrollSection3Line = gsap.to(".whateWeDo__root .textRow .desginLine", {
  scaleY:1,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".whateWeDo__root .textRow", // 이요소가 화면에 들어오면 조건 계산
    start: "top 60%",
    end:"top 60%",
    toggleActions: "play none reverse none",
    // markers: true
  }
})


// ========================= img 순차적 나타나기 =========================
ScrollTrigger.matchMedia({
  // ------------------------- pc -------------------------
  "(min-width: 780px)" : () => {

  const tl = gsap.timeline({ paused: true });
  gsap.utils.toArray(".whateWeDo__root .imgDiv").forEach((el, i) => {
    tl.fromTo(
      el,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      },
      i * 0.1 // ✅ 순차 (등장/사라짐 동일)
    );
  });

  ScrollTrigger.create({
    trigger: ".whateWeDo__root .imgArea", // ✅ 기준점 하나
    start: "top 90%",
    end: "top 90%",
    // markers: true,

    onEnter: () => tl.play(),
    onLeaveBack: () => tl.reverse()
  });
  },
  // ------------------------- mobile -------------------------
  "(max-width: 780px)" : () => {
    gsap.utils.toArray(".whateWeDo__root .imgDiv").forEach((el) => {

    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      el,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      }
    );

    ScrollTrigger.create({
      trigger: el,          // ✅ 각개 imgDiv 기준
      start: "top 98%",
      end: "top 98%",
      // markers: true,

      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse()
    });

  });
  }
})

// ========================= img 내부 휠따라 움직이기 =========================
gsap.utils.toArray(".whateWeDo__root .imgDiv").forEach((el) => {
  const img = el.querySelector("img");

  gsap.fromTo(
    img,
    { y: -40 },
    {
      y: 40,
      ease: "none",

      scrollTrigger: {
        trigger: el,              // imgDiv 기준
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );
});




// ========================================================
// ----------------------- section 4  ---------------------
// ========================================================
const ScrollSection4Cricle = gsap.to(".drivingBeauty_root .desginArea svg circle", {
  strokeDashoffset: 0,
  transformOrigin: "50% 50%",
  rotation: 90,
  duration: 0.7, // 애니메이션 시간
  ease: "none",

  scrollTrigger: {
    trigger: ".drivingBeauty_root .desginArea", // 이요소가 화면에 들어오면 조건 계산
    start: "top 40%",
    end:"top 40%",
    toggleActions: "play none reverse none",
    // markers: true
    // ↓ 설명
    // enter        : play
    // leave        : reverse
    // enterBack    : play
    // leaveBack    : reverse
  }
});


// ========================================================
// ----------------------- section 5  ---------------------
// ========================================================
const ScrollSection5Line = gsap.to(".highQuality_root .desginLine", {
  scaleY:1,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".highQuality_root_wrapper ", // 이요소가 화면에 들어오면 조건 계산
    start: "top 60%",
    end: "top 60%",
    toggleActions: "play none reverse none",
    // markers: true
  }
})

// ========================================================
// ----------------------- section 6  ---------------------
// ========================================================
const ScrollSection6Line = gsap.to(".ourStory_root_wrapper .desginLine", {
  scaleY:1,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".ourStory_root_wrapper .textArea", // 이요소가 화면에 들어오면 조건 계산
    start: "center 60%",
    end: "center 60%",
    toggleActions: "play none reverse none",
    // markers: true
  }
})

const ScrollSection6Cricle = gsap.to(".ourStory_root_wrapper .desginCricle svg circle", {
  strokeDashoffset: 0,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",

  scrollTrigger: {
    trigger: ".ourStory_root_wrapper", // 이요소가 화면에 들어오면 조건 계산
    start: "center 60%",
    end: "center 60%",
    toggleActions: "play none reverse none",
    // markers: true
    // ↓ 설명
    // enter        : play
    // leave        : reverse
    // enterBack    : play
    // leaveBack    : reverse
  }
});


gsap.utils.toArray(".ourStory_root_wrapper .mediaArea img").forEach((img) => {
  gsap.fromTo(
    img,
    {
      y:-10,
      opacity:0
    },
    {
      y: 10,
      opacity: 1,
      duration: 0.5,
      ease: "none",

      scrollTrigger: {
        trigger: img,
        start: "top 70%",
        end: "top 70%",
        toggleActions: "play none reverse none",
        // markers: true
      }
    }
  )
})

// ========================================================
// ----------------------- section 7  ---------------------
// ========================================================
const ScrollSection7Line = gsap.to(".media_root_wrapper .desginLine", {
  scaleY:1,
  duration: 1, // 애니메이션 시간
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".media_root_wrapper", // 이요소가 화면에 들어오면 조건 계산
    start: "top 60%",
    end: "top 60%",
    toggleActions: "play none reverse none",
    // markers: true
  }
})









ScrollTrigger.refresh();