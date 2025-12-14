//========================================================================
// signUp System
//========================================================================
const signUpForm = document.querySelector(".signup-form");

signUpForm.addEventListener("submit", (e) =>{
  e.preventDefault();

// 전화번호 양식 비교
if(!formatValidation(/^\d{3}-\d{3,4}-\d{4}$/, 
  signUpForm.querySelector("#phoneNumber").value)){
  alert("Invalid phone number format");
  return;
}

// 생년월일 양식 비교
if(!checkDobMatch(signUpForm.querySelector("#dob").value)) return;

// 이메일 양식비교
if(!formatValidation(/^[^\s@]+@[^\s@]+\.[a-zA-Z]+$/,
  signUpForm.querySelector("#email").value)){
    alert("Email format is incorrect");
    return
  }

// 비밀번호 양식 비교
if(!passwordFormatValidation(signUpForm.querySelector("#password").value))return;

// 비밀번호 2개 비교
if(!stringValidation(signUpForm.querySelector("#passwordConfirm").value,
signUpForm.querySelector("#password").value)){
  alert("Passwords do not match");
  return
}

// 이메일 중복 비교
const userInfoList = JSON.parse(localStorage.getItem("users")) || [];
let foundUser = userInfoList.find(user => user.email === 
  signUpForm.querySelector("#email").value);
if(foundUser !== undefined){
  alert("This Email is already in use");
  return
}

// 핸드폰 번호 중복 비교
foundUser = userInfoList.find(user => user.phoneNumber === 
  signUpForm.querySelector("#phoneNumber").value);
if(foundUser !== undefined){
  alert("This Phone number is already in use");
    return
}

  saveUserInfo();
  alert("Your account has been created successfully");
  window.location.href = "login.html";
});


// 2개 검증 비교 함수
function formatValidation(format, input){
  if(!format.test(input)) return false;
  return true;
}

// 문자열 2개 비교 함수
function stringValidation(format, input){
  if(format !== input) return false;
  return true;
}

// password 양식 검증 함수
function passwordFormatValidation(input){
  const foramt1 = /(?=.*[0-9])/;
  const foramt2 = /(?=.*[A-Z])/;
  const foramt3 = /(?=.*[a-z])/;
  const foramt4 = /(?=.*[!*?_\-])/;
  const formatLength = 8;

  if(!foramt1.test(input)){
    alert("Must contain at least one number"); 
    return false;
  }
  if(!foramt2.test(input)){
    alert("Must contain at least one uppercase letter");
    return false;
  }
  if(!foramt3.test(input)){
    alert("Must contain at least one lowercase letter");
    return false;
  }
  if(!foramt4.test(input)){
    alert("Must contain at least one spcial character");
    return false;
  }
  if(input.length < formatLength){
    alert("Password must be at least 8 characters");
    return false;
  }
  return true;
}

// 생년월일 함수
function checkDobMatch(signUpDob){
  if(!signUpDob){
    alert("Please enter your date of birth");
    return false;
  }

  const dobDate = new Date(signUpDob);
  const today = new Date();
  const limitToday = new Date(today);
  limitToday.setFullYear(today.getFullYear()-14);

  if(dobDate > today){
    alert("Future dates cannot be selected");
    return false;
  }
  if(dobDate > limitToday){
    alert("You must be at least 14 years old to create an account");
    return false;
  }
  return true;
}

function saveUserInfo(){
  const name = document.querySelector("#name").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const dob = document.querySelector("#dob").value;
  const address = document.querySelector("#address").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const SignUpInfo = {
    name: `${name}`,
    phoneNumber: `${phoneNumber}`,
    dob: `${dob}`,
    address: `${address}`,
    email: `${email}`,
    password: `${password}`
  }

  let saveInfo = JSON.parse(localStorage.getItem("users")) || [];
  saveInfo.push(SignUpInfo);
  localStorage.setItem("users", JSON.stringify(saveInfo));
}


//========================================================================
// login System
//========================================================================
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginEmail = loginForm.querySelector("#email").value;
  const loginPassword = loginForm.querySelector("#password").value;

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

  //이전 페이지 기록 이 있을 경우
  const redirectPage = localStorage.getItem("redirectAfterLogin");
  if(redirectPage){
    localStorage.removeItem("redirectAfterLogin");
    window.location.href = redirectPage
  } else {
    window.location.href = "index.html";
  }
});



//========================================================================
// 이메일 찾기 비밀번호 찾기
//========================================================================
// 이메일 찾기
const btnFindEmail = document.querySelector(".findEmail-form");

btnFindEmail.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = btnFindEmail.querySelector("#findEmailName").value;
  const inputPhone = btnFindEmail.querySelector("#findEmailNumber").value;
  const inputDob = btnFindEmail.querySelector("#findEmailDob").value;

  const userInfoListEmail = JSON.parse(localStorage.getItem("users")) || [];

  const nameList = userInfoListEmail.filter(user => user.name === inputName);
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

// 비밀번호 찾기
const btnFindPassword = document.querySelector(".findPassword-form");

btnFindPassword.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = btnFindPassword.querySelector("#findPasswordName").value;
  const inputPhone = btnFindPassword.querySelector("#findPasswordNumber").value;
  const inputEmail = btnFindPassword.querySelector("#findPasswordEmail").value;

  const userInfoListPWD = JSON.parse(localStorage.getItem("users")) || [];

  const nameList = userInfoListPWD.filter(user => user.name === inputName);
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


//========================================================================
// 애니메이션
//========================================================================
const btnOpen = document.querySelectorAll(".btn-open");
const exit = document.querySelectorAll(".exit");

exit.forEach(btn => {
  btn.addEventListener("click", () =>{
    btn.parentElement.classList.add("expanded");
  });
});
btnOpen.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetSelector = btn.dataset.btn;
    const section = document.querySelector(targetSelector);
    section.classList.remove("expanded");
  })
})