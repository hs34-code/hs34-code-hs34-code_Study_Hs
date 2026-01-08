/* ========================================================
----------------------- main banner -----------------------
========================================================= */
const mainBanner = document.querySelector('.mainBanner');

const banner1 = mainBanner.querySelector(".banner1");
const banner1img = mainBanner.querySelector(".banner1 img");
const banner2 = mainBanner.querySelector(".banner2");
const banner2img = mainBanner.querySelector(".banner2 img");
const banner3 = mainBanner.querySelector(".banner3");
const banner3img = mainBanner.querySelector(".banner3 img");

/* ========== main banner 1 =========== */
banner1.addEventListener("mousemove", (e)=> {
  const rect = banner1.getBoundingClientRect();
  const { x, y } = moveXYanmation(e, rect);

  banner1img.style.transform = `translate(${x}px, ${y}px)`;
})

/* ========== main banner 2 =========== */
banner2.addEventListener("mousemove", (e)=> {
  const rect = banner2.getBoundingClientRect();
  const { x, y } = moveXYanmation(e, rect);

  banner2img.style.transform = `translate(${x}px, ${y}px)`;
})

/* ========== main banner 3 =========== */
banner3.addEventListener("mousemove", (e)=> {
  const rect = banner3.getBoundingClientRect();
  const { x, y } = moveXYanmation(e, rect);

  banner3img.style.transform = `translate(${x}px, ${y}px)`;
})

/* ========== main banner 마우스 커서 xy 계산 함수 =========== */
function moveXYanmation(e, rect) {
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const ratioX = (mouseX - centerX) / centerX; // -1 ~ 1
  const ratioY = (mouseY - centerY) / centerY; // -1 ~ 1

  const moveX = ratioX * -10;
  const moveY = ratioY * -10;

  return {x: moveX, y: moveY};
}

/* ========================================================
---------------------- scroll banner ----------------------
========================================================= */
gsap.registerPlugin(ScrollTrigger);

/* ========== Scrollbanner1 =========== */
const Scrollbanner1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll_1",
    start: "top top",
    end: "bottom bottom",     // scrollBanner(600vh) 끝까지
    scrub: 1,
    pin: ".scroll_1_desc",       // ✅ pin은 딱 1번만
    // markers: true
  }
});

Scrollbanner1
  .fromTo(
    ".scroll_1_desc",
    { opacity: 0, y: 80 },     // ✅ (추가) 아래에서 + 안보임
    { opacity: 1, y: 0, ease: "none", duration: 1 } // ✅ (추가) 올라오며 나타남
  )
  .to(
    ".scroll_1_desc",
    { opacity: 1, y: 0, ease: "none", duration: 1 } // ✅ save 구간 유지
  )
  .to(
    ".scroll_1_desc",
    { opacity: 0, y: -80, ease: "power1.out", duration: 1 } // ✅ (추가) 위로 올라가며 사라짐
  );

/* ========== Scrollbanner2 =========== */  
const Scrollbanner2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll_2",
    start: "top top",
    end: "bottom bottom",     // scrollBanner(600vh) 끝까지
    scrub: 1,
    pin: ".scroll_2_desc",       // ✅ pin은 딱 1번만
    // markers: true
  }
});

Scrollbanner2
  .fromTo(
    ".scroll_2_desc",
    { opacity: 0, y: 80 },     // ✅ (추가) 아래에서 + 안보임
    { opacity: 1, y: 0, ease: "none", duration: 1 } // ✅ (추가) 올라오며 나타남
  )
  .to(
    ".scroll_2_desc",
    { opacity: 1, y: 0, ease: "none", duration: 1 } // ✅ save 구간 유지
  )
  .to(
    ".scroll_2_desc",
    { opacity: 0, y: -80, ease: "power1.out", duration: 1 } // ✅ (추가) 위로 올라가며 사라짐
  );

/* ========== Scrollbanner3 =========== */
  const Scrollbanner3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll_3",
    start: "top top",
    end: "bottom bottom",     // scrollBanner(600vh) 끝까지
    scrub: 1,
    pin: ".scroll_3_desc",       // ✅ pin은 딱 1번만
    // markers: true
  }
});

Scrollbanner3
  .fromTo(
    ".scroll_3_desc",
    { opacity: 0, y: 80 },     // ✅ (추가) 아래에서 + 안보임
    { opacity: 1, y: 0, ease: "none", duration: 1 } // ✅ (추가) 올라오며 나타남
  )
  .to(
    ".scroll_3_desc",
    { opacity: 1, y: 0, ease: "none", duration: 1 } // ✅ save 구간 유지
  )
  .to(
    ".scroll_3_desc",
    { opacity: 0, y: -80, ease: "power1.out", duration: 1 } // ✅ (추가) 위로 올라가며 사라짐
  );


  /* ========================================================
------------------------ hover banner -----------------------
========================================================= */

/* ========== x, y축 좌우 추가로 이동 =========== */
const hoverbanner = document.querySelector(".hoverBanner");
const imgArea = hoverbanner.querySelector(".hoverImgArea"); 

hoverbanner.addEventListener("mousemove", (e) => {
  const rect = hoverbanner.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  const ratioX = (mouseX - centerX) / centerX; // -1 ~ 1
  const ratioY = (mouseY - centerY) / centerY; // -1 ~ 1

  const moveX = ratioX * -40;
  const moveY = ratioY * -40;

  imgArea.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


/* ========== mask시 img open =========== */
const screens = hoverbanner.querySelectorAll(".hoverImg img");

window.addEventListener("mousemove", (e) => {
  screens.forEach(img => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const radius = Math.min(rect.width, rect.height) * 0.95;

    img.style.setProperty("--x", `${x}px`);
    img.style.setProperty("--y", `${y}px`);
    img.style.setProperty("--r", `${radius}px`);
  });
});

/* ========== desgin text animation =========== */
const hoverDesignText = hoverbanner.querySelectorAll('.hoverTextArea p');

hoverDesignText.forEach(p => {
  const text = p.textContent;
  const chars = text.split("");

  p.innerHTML = chars
    .map(char => char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`)
    .join("");

  p.querySelectorAll("span").forEach((span, i) => {
    span.style.setProperty("--i", i);
  });
});
const textAreas = hoverbanner.querySelectorAll(".hoverTextArea");

const observerDesignText = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle(
      "textShow",
      entry.isIntersecting
    );
  });
}, {
  threshold: 0.4
});

textAreas.forEach(area => observerDesignText.observe(area));
