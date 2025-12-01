let loginStatus = null;

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

// 로그인 및 로그아웃 전환
const btnLogin = document.querySelector(".login_logout");
btnLogin.addEventListener("click", () => {
  if(loginStatus){
    btnLogin.setAttribute("href", "index.html");
    localStorage.removeItem("loginStatus");
  }
})

// 로그인 아닐 시 아이콘 연해지게
window.addEventListener("DOMContentLoaded", ()=>{
  if(!loginStatus){
    document.querySelectorAll(".site-right a").forEach(link => {
      if(link.classList.contains("login_logout")) return;
      link.style.opacity = "0.3";
    })
  }
});

// 로그인 아닐 시 heat, cart, my 전부 login 연결
const linkIcon = [...document.querySelectorAll(".site-right a")].filter(
  link => !link.classList.contains("login_logout"));

linkIcon.forEach(e => {
  e.addEventListener("click", () => {
    if(!loginStatus){
      e.setAttribute("href", "login.html");
    }
  });
});

// 활동이 없을시 자동 로그아웃
const limit_time = 1 * 60 * 1000;
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
  if(loginStatus && inactive >= limit_time){
    localStorage.removeItem("loginStatus");
    alert("You have been automatically logged out.");
    window.location.href = "index.html";
  }
}, 3000);