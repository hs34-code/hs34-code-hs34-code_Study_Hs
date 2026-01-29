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
// ----------------------- main 4 -------------------------
// ========================================================
makeDesginAnimationCircle("#wwd_OV .main4 .desginAnimationCircle");

// ========================================================
// ----------------------- main 6 -------------------------
// ========================================================
ScrollTrigger.matchMedia({
  "(min-width: 768px)": () => { // ==== pc ====
    const ctx = gsap.context(() => {
      // ============= 여기부터 =============
        const sections = gsap.utils.toArray(".main6 .scroll");
        const dots = gsap.utils.toArray(".main6 .scrollDot");

        // 초기 상태
        gsap.set(sections, {
          autoAlpha: 0,
          y: 60
        });

        // 첫 dot 활성화
        dots.forEach(dot => dot.classList.remove("show"));
        if (dots[0]) dots[0].classList.add("show");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".main6 .scrollsetting",
            start: "top top",
            end: "+=" + window.innerHeight * (sections.length - 1) * 2,
            pin: true,
            scrub: 0.8,
            // markers: true
          }
        });

      sections.forEach((section, i) => {
        if (i > 0) {
            tl.to(sections[i - 1], {
              autoAlpha: 0,
              y: -60,
              duration: 1
            });
          }

          tl
            .call(() => {
              dots.forEach(dot => dot.classList.remove("show"));
              if (dots[i]) dots[i].classList.add("show");
            })
            .fromTo(
              section,
              { autoAlpha: 0, y: 60 },
              { autoAlpha: 1, y: 0, duration: 1 },
              "<"
            )
            .to({}, { duration: 1 });
      });
      // =============여기까지 =============
    })
    
    return () => ctx.revert();
  },
  "(max-width: 768px)": () => { // ==== mobile ===
    const sections = gsap.utils.toArray(".main6 .scroll");

    gsap.set(sections, {
      autoAlpha: 1,
      y: 0,
      clearProps: "transform"
    });
    const ctx = gsap.context(() => {
      imagesWheelIntroManagerOpacity({
        target:"#wwd_OV .main6 .scroll .imgCover img",
        // markers: true,
      })
      imagesWheelIntroManagerY({
        target:"#wwd_OV .main6 .scroll .imgCover",
        toY: -100,
        // markers: true,
      })
    })
    
    return () => ctx.revert();
  }
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

makeAnimationLineY(".main7 .animationLineY.self");
makeAnimationHalfCircleTop(".main7 .animationHalfCircleTop.self circle");

// ========================================================
// ----------------------- main 8 -------------------------
// ========================================================
makeAnimationLineY(".main8 .content .animationLineY.self");

const main8 = wwd_OV.querySelector(".main8");
const buttons = main8.querySelectorAll(".buttonArea button");

// button에 select 넣기
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("select"));
    btn.classList.add("select");
    findSelect()
  })
})

// select 찾기
function findSelect(){
  const select = main8.querySelector(".select");
  setUpLogoList(select.dataset.logoshow)
}

function setUpLogoList(type){
  const logoArea = main8.querySelector(".logoArea");
  const baselogoCard = logoArea.querySelector(".logoCard.base");

  logoArea.querySelectorAll(".logoCard:not(.base)").forEach(card => card.remove());

  const list = logoList[type];
  if (!list) return; 

  list.forEach(item => {
    const cardClone = baselogoCard.cloneNode(true);
    cardClone.classList.remove("base");
    cardClone.style.display = "block";

    const img = cardClone.querySelector("img");
    img.src = item.img;
    img.alt = item.name;

    logoArea.appendChild(cardClone);
  });

  setUpanimationLineY()
}

function setUpanimationLineY(){
  const logoArea = main8.querySelector(".logoArea");
  const baseAnimationLineY = logoArea.querySelector(".animationLineY.base");

  const cols = Number(
    getComputedStyle(logoArea)
    .getPropertyValue("--cols")
  )

  logoArea.querySelectorAll(".animationLineY:not(.base)").forEach(line => line.remove());
  
  for(let i=0; i < cols+1; i++){
    const coloneLine = baseAnimationLineY.cloneNode(true);
    coloneLine.classList.remove("base");
    

    let LinePosition = 100 / cols * i;
    coloneLine.style.left = `${LinePosition}%`

    logoArea.appendChild(coloneLine);
  }

  makeAnimationLineY(".main8 .logoArea .animationLineY.self");

  imagesWheelIntroManagerOpacity({
    target:".main8 .logoArea .logoCard",
    trigger:"self",
    start: "top 75%", end: "top 75%",
    // markers: true,
  })
  imagesWheelIntroManagerY({
    target:".main8 .logoArea .logoCard",
    trigger:"self",
    start: "top 75%", end: "top 75%",
    // markers: true,
  })
}

setUpanimationLineY()
window.addEventListener("resize", setUpanimationLineY);
findSelect()