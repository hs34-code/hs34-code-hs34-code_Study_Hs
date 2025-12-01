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
