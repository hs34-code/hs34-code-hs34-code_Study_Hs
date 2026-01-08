const header = document.querySelector("header");

// ========================================================
// ---------------- header 위휠 아래휠 보이기 --------------
// ========================================================
let navBarOpenToggle = false;
window.addEventListener("wheel", (e) => {
  // page open 시 작동 멈추기
  if(navBarOpenToggle) return;
  
  if(e.deltaY > 0){ // 아래 휠 감지
    header.classList.add("hidden");
  }else{ // 위 휠 감지
    header.classList.remove("hidden");
  }
})

// ========================================================
// ----------------- header button effect  ----------------
// ========================================================
const btnOpen = header.querySelector(".btn_openNav");

btnOpen.addEventListener("click", () => {
  navBarOpenToggle = !navBarOpenToggle;
  btnOpen.classList.toggle("true");
  header.classList.toggle("open");

  header.classList.toggle("aNavPageOpen");
})


// ========================================================
// ---------------- navgation bar page open ---------------
// ============================================ ============

const firstNavBar = header.querySelectorAll(".firstNavBar li a");
const secondNavBar = header.querySelectorAll(".secondNavBar ul");
const navBarWrapper = header.querySelector(".navBar_wrapper");

firstNavBar.forEach((nav) => {
  nav.addEventListener("mouseenter",(e) => {
    const dataTarget = nav.dataset.navtarget;
    const findDataTarget = header.querySelector(`.${dataTarget}`)
    if(!findDataTarget){
      secondNavBar.forEach((nav) => {
      nav.classList.remove("secondOpen");
      })
      return;
    }

    secondNavBar.forEach((ul) => {
      ul.classList.remove("secondOpen");
    })
    findDataTarget.classList.add("secondOpen");
  })
})

navBarWrapper.addEventListener("mouseleave", () => {
  secondNavBar.forEach((nav) => {
    nav.classList.remove("secondOpen");
  })
})


// seconde aNav 열기
