const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginEmail = document.querySelector("#email").value;
  const loginPassword = document.querySelector("#password").value;

  let userInfo = JSON.parse(localStorage.getItem("users")) || [];

  // email 존재 여부 확인
  const foundUser = userInfo.find(user => user.email === loginEmail);
  if(foundUser === undefined){
    alert("No account found with this email");
    return;
  }
  
//=========================================================================
// password 일치 여부 확인
  if(loginPassword !== foundUser.password){
    // 로그인 시도 기록 찾기
    let loginFailList = JSON.parse(localStorage.getItem("loginFail")) || [];
    let loginFail = loginFailList.find(item => item.email === loginEmail);

    // 로그인 시도 없을 시 생성
    if(!loginFail){
      loginFail = {
        email: `${loginEmail}`,
        loginTime: `${Date.now()}`,
        failTime: null,
        failcount: 0
      }
      loginFailList.push(loginFail);
    }

    const now = Date.now();
    const five_min = 5 * 60 * 1000;

    //실패 횟수 초기화
    if(now - loginFail.loginTime > five_min){
      loginFail.failcount = 0;
      loginFail.failTime = null;
    }
    
    loginFail.failcount++;
    loginFail.loginTime = now;

    // 시도가 5회 이상이라면
    if(loginFail.failcount >= 5){
      loginFail.failTime = now;
    }

    //로컬스토리지 업데이트
    localStorage.setItem("loginFail",JSON.stringify(loginFailList));

    // 이미 제한이 걸린 상태라면
    if(loginFail.failTime && now - loginFail.failTime < five_min){
      alert("You have exceeded the maximum number of attempts. Try again after 5 minutes.");
      return;
    }

    alert("The password you entered is incorrect");
    return;
  }

  //비밀번호 맞음
  localStorage.setItem("loginStatus", JSON.stringify(foundUser));
  alert(`Welcome ${foundUser.name}`);
  window.location.href = "index.html";
});

// =======================================
// 이메일, 비밀번호 찾기 및 비밀번호 재설정 
// =======================================
const btnOpen = document.querySelectorAll(".btn-open");
const exit = document.querySelectorAll(".exit");
//=========================================================================
// 나가기 (안보이기)
exit.forEach(btn => {
  btn.addEventListener("click", () =>{
    btn.parentElement.classList.add("expanded");
  });
});
//=========================================================================
// 들어가기 (보이기)
btnOpen.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetSelector = btn.dataset.btn;
    const section = document.querySelector(targetSelector);
    section.classList.remove("expanded");
  })
})

//=========================================================================
// 이메일 찾기
const btnFindEmail = document.querySelector(".findEmail-form");

btnFindEmail.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.querySelector("#findEmailName").value;
  const inputPhone = document.querySelector("#findEmailNumber").value;
  const inputDob = document.querySelector("#findEmailDob").value;

  const userInfoList = JSON.parse(localStorage.getItem("users")) || [];

  const nameList = userInfoList.filter(user => user.name === inputName);
  if(nameList.length === 0){
    alert("No matching name found.");
    return;
  }
  const phoneList = nameList.filter(user => user.phoneNumber === inputPhone);
  if(phoneList.length === 0){
    alert("Phone number does not match.");
    return;
  }
  const dobList = phoneList.filter(user => user.dob === inputDob);
  if(dobList.length === 0){
    alert("Date of birth does not match");
    return;
  }

  const foundUserEmail = dobList[0];
  alert(`Your email is : ${foundUserEmail.email}`);
  window.location.href = "login.html";
})

//=========================================================================
//pasword 찾기
const btnFindPassword = document.querySelector(".findPassword-form");

btnFindPassword.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.querySelector("#findPasswordName").value;
  const inputPhone = document.querySelector("#findPasswordNumber").value;
  const inputEmail = document.querySelector("#findPasswordEmail").value;

  const userInfoList = JSON.parse(localStorage.getItem("users")) || [];

  const nameList = userInfoList.filter(user => user.name === inputName);
  if(nameList.length === 0){
    alert("No matching name found.");
    return;
  }
  const phoneList = nameList.filter(user => user.phoneNumber === inputPhone);
  if(phoneList.length === 0){
    alert("Phone number does not match.");
    return;
  }
  const emailList = phoneList.filter(user => user.email === inputEmail);
  if(emailList.length === 0){
    alert("Email does not match");
    return;
  }

  const foundUserPassword = emailList[0];
  alert(`Your password is : ${foundUserPassword.password}`);
  window.location.href = "login.html";
})
