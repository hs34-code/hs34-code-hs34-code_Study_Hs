//===================================================================
// 활동이 없을시 자동 로그아웃

let loginStatus = null;

const limit_time = 5 * 60 * 1000;
let lastActiveTime = Date.now();

function resetTimer() {
  lastActiveTime = Date.now();
}

window.addEventListener("mousemove", resetTimer);
window.addEventListener("click", resetTimer);
window.addEventListener("keydown", resetTimer);
window.addEventListener("scroll", resetTimer);

setInterval(() => {
  const now = Date.now();
  const inactive = now - lastActiveTime;
  loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if(loginStatus && inactive >= limit_time){
    localStorage.removeItem("loginStatus");
    alert("You have been automatically logged out.");
    location.reload();
  }
}, 1000);

//===================================================================
// 로그인 버튼 문구 출력
const btnLoginText = document.querySelector(".login_logout span");
window.addEventListener("DOMContentLoaded", () =>{
  loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if(loginStatus){
    console.log("로그인 됨");
    btnLoginText.textContent = "Logout"
  } else {
    console.log("로그인 안됨");
    btnLoginText.textContent = "Login"
  }
});

//===================================================================
// 로그인 및 로그아웃 전환
const btnLogin = document.querySelector(".login_logout");
btnLogin.addEventListener("click", () => {
  if(loginStatus){
    btnLogin.setAttribute("href", "index.html");
    localStorage.removeItem("loginStatus");
  }
})

//===================================================================
// 로그인 아닐 시 아이콘 연해지게
window.addEventListener("DOMContentLoaded", ()=>{
  if(!loginStatus){
    document.querySelectorAll(".site-right a").forEach(link => {
      if(link.classList.contains("login_logout")) return;
      link.style.opacity = "0.3";
    })
  }
});

//===================================================================
// 로그인 아닐 시 heat, cart, my 전부 login 연결
const linkIcon = [...document.querySelectorAll(".site-right a")].filter(
  link => !link.classList.contains("login_logout"));

linkIcon.forEach(e => {
  e.addEventListener("click", () => {
    if(!loginStatus){
      localStorage.setItem("redirectAfterLogin", window.localStorage);
      e.setAttribute("href", "login.html");
    }
  });
});


// ===============================================
// header dropdown
// ===============================================
const navBar = document.querySelectorAll(".navigationBar li");
const dropdown = document.querySelector(".dropdown");

let activeDropdown = null; // 활성 ul 기억용

document.addEventListener("mousemove", (e) => {
  const navArray = Array.from(navBar);

  //navBar 위에 hover 중인지 확인(e.target)
  const inNavBar = navArray.some(li => li.contains(e.target));

  //navBar 위에 어떤 ul에 hover중인지 확인
  const inNavBarData = (inNavBar ? navArray.find(li => li.contains(e.target)) : null);

  if(inNavBarData) {
    const targetName = ".nav_" + inNavBarData.dataset.nav;

    // 예외 class (공간용 empty)
    const emptySpace1 = ".nav_news";
    const emptySpace2 = ".nav_shopInfo";

    if(targetName === emptySpace1 || targetName === emptySpace2){
      activeDropdown = null; // 예외 영역일시 활성 ul 없음
    } else{
      activeDropdown = document.querySelector(targetName); // ul 활성
    }
  }

  // mouse 가 활성 ul에 있는지 확인
  const inActiveDropdown = (activeDropdown ? activeDropdown.contains(e.target) : false);

  // 영역을 벗어날시 dropdown 종료
  if (!inNavBar && !inActiveDropdown){
    dropdown.classList.add("hidden");
    dropdown.querySelectorAll("ul").forEach(ul => ul.classList.add("hidden"));
    return;
  }

  // navBar 위, 활성 ul일때만 열기
  if(inNavBar && activeDropdown) {
    dropdown.querySelectorAll("ul").forEach(ul => ul.classList.add("hidden"));
    activeDropdown.classList.remove("hidden");
    dropdown.classList.remove("hidden");
  }
})
