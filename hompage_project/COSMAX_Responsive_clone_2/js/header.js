const header = document.querySelector("header");


// ========================================================
// ---------------- header 위휠 아래휠 보이기 --------------
// ========================================================
const headerBar = header.querySelector(".headerBar")
let navBarOpenToggle = false;
window.addEventListener("wheel", (e) => {
  // page open 시 작동 멈추기
  if(navBarOpenToggle) return;
  
  if(e.deltaY > 0){ // 아래 휠 감지
    headerBar.classList.add("hidden");
  }else{ // 위 휠 감지
    headerBar.classList.remove("hidden");
  }
})

// ========================================================
// ------------- header page 열기 button effect -----------
// ========================================================
const btnOpen = header.querySelector(".btnOpenNavgationPage");
const navgationPage = header.querySelector(".navgationPage");

btnOpen.addEventListener("click", ()=> {
  navBarOpenToggle = !navBarOpenToggle;
  btnOpen.classList.toggle("click");

  navgationPage.classList.toggle("open");

  navgationDetails.forEach((ul) => {
    ul.classList.remove("open");
  })
  navgation_wraapper.classList.remove("move")
})

// ========================================================
// -------------- navgation title, details open -----------
// ========================================================

const navgationTitle = header.querySelectorAll(".navgationTitle li a");
const navgationDetails = header.querySelectorAll(".navgationDetails ul");
const navgation_wraapper = header.querySelector(".navgation_wraapper");

const navgationTitleItem = header.querySelectorAll(".navgationTitleItem");
const btnBack = header.querySelectorAll(".btn_back");

// 화면 px 기준 모바일및 pc 나누기 
function mobileWidth() {
  return window.innerWidth <= 768;
}

function init() {
  if (mobileWidth()) {
    runMobile();
  } else {
    runPC();
  }
}

init();
window.addEventListener("resize", init);



// 모바일 전용 코드
function runMobile() {
  console.log("모바일 로직 실행");
  
  // ======= title click a tag 막기 =======
  navgationTitleItem.forEach(title => {
    title.addEventListener("click", (e) => {
      e.preventDefault();
    })
  })

  // ======= title click > details open =======
  navgationTitleItem.forEach(title => {
    title.addEventListener("click", () => {
      const data = title.dataset.navtarget
      const findDataTarget = header.querySelector(`.${data}`);

      if(!findDataTarget){
        navgationDetails.forEach((ul) => {
          ul.classList.remove("open");
        })
        return;
      }

      navgation_wraapper.classList.add("move")


      navgationDetails.forEach((ul) => {
        ul.classList.remove("open");
      })

      findDataTarget.classList.add("open");
    })
  })

  // ======= btn click > details close =======
  btnBack.forEach(btn => {
    btn.addEventListener("click", () => {
      navgation_wraapper.classList.remove("move")
    })
  })







}
// pc 전용 코드
function runPC() {
  console.log("PC 로직 실행");

  // ======= title hover > details open =======
  navgationTitle.forEach((title) => {
    title.addEventListener("mouseenter", () => {
      const data = title.dataset.navtarget
      const findDataTarget = header.querySelector(`.${data}`);

      if(!findDataTarget){
        navgationDetails.forEach((ul) => {
          ul.classList.remove("open");
        })
        return;
      }

      navgationDetails.forEach((ul) => {
        ul.classList.remove("open");
      })

      findDataTarget.classList.add("open");
    })
  })
  // ======= title hover > details close =======
  navgation_wraapper.addEventListener("mouseleave", () => {
    navgationDetails.forEach((ul) => {
      ul.classList.remove("open");
    })
  })






}