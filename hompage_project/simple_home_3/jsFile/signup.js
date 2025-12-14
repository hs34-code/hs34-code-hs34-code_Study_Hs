//===================================================================
//회원가입
//===================================================================

const signUpForm = document.querySelector(".signup-form");

signUpForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  if(!checkPhoneNumberMatch()) return;
  if(!checkDobMatch()) return;
  if(!checkEmailMatch()) return;
  if(!checkPasswordStrengthMatch()) return;
  if(!checkPasswordMatch()) return;
  if(!checkEmailAlready()) return;
  if(!checkPhoneNumberAlready()) return;
  if(!checkAgreeMatch()) return;
  
  saveUserInfo();
  alert("Your account has been created successfully");
  window.location.href = "login.html";
});

//===================================================================
// 전화번호 양식 비교
function checkPhoneNumberMatch(){
  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
  const signUpPhoneNumber = document.querySelector("..signup-form #phoneNumber").value;
  if (!phoneRegex.test(signUpPhoneNumber)){
    alert("Invalid phone number format");
    return false
  }
  return true;
}

//===================================================================
// 생년월일 양식 비교
function checkDobMatch(){
  const signUpDob = document.querySelector(".signup-form #dob").value;
  
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

//===================================================================
// email 양식 비교
function checkEmailMatch(){
  const signUpEmail = document.querySelector(".signup-form #email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]+$/;
  if(!emailRegex.test(signUpEmail)){
    alert("Email format is incorrect");
    return false;
  }
  return true;
}

//===================================================================
// password 양식 비교
function checkPasswordStrengthMatch(){
  const signUpPassword = document.querySelector(".signup-form #password").value;
  const passwordRegexNumber = /(?=.*[0-9])/;
  const passwordRegexUpper = /(?=.*[A-Z])/;
  const passwordRegexLower = /(?=.*[a-z])/;
  const passwordRegexSpecial = /(?=.*[!*?_\-])/;
  
  if(!passwordRegexNumber.test(signUpPassword)){
    alert("Must contain at least one number"); 
    return false;
  }
  if(!passwordRegexUpper.test(signUpPassword)){
    alert("Must contain at least one uppercase letter");
    return false;
  }
  if(!passwordRegexLower.test(signUpPassword)){
    alert("Must contain at least one lowercase letter");
    return false;
  }
  if(!passwordRegexSpecial.test(signUpPassword)){
    alert("Must contain at least one spcial character");
    return false;
  }
  if(signUpPassword.length < 8){
    alert("Password must be at least 8 characters");
    return false;
  }
  return true;
}

//===================================================================
// 2개의 패스워드 일치 비교
function checkPasswordMatch(){
  const signUpPassword = document.querySelector(".signup-form #password").value;
  const signUpPasswordConfirm = document.querySelector(".signup-form #passwordConfirm").value;
  if(signUpPassword !== signUpPasswordConfirm){
    alert("Passwords do not match");
    return false;
  }
  return true;
}

//===================================================================
// 이메일 중복 비교
function checkEmailAlready(){
  const signUpEmail = document.querySelector(".signup-form #email").value;
  let userInfo = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = userInfo.find(user => user.email === signUpEmail);
  if(foundUser !== undefined){
    alert("This Email is already in use");
    return false;
  }
  return true;
}

//===================================================================
// 핸드폰번호 중복 비교
function checkPhoneNumberAlready(){
  const signUpPhoneNumber = document.querySelector(".signup-form #phoneNumber").value;
  let userInfo = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = userInfo.find(user => user.phoneNumber === signUpPhoneNumber);
  if(foundUser !== undefined){
    alert("This Phone number is already in use");
    return false;
  }
  return true;
}

//===================================================================
// 약관동의 체크 
function checkAgreeMatch(){
  const signUpAgree = document.querySelector(".signup-form #agree").checked;
  if(!signUpAgree){
    alert("You must agree to the Terms and Conditions");
    return false;
  }
  return true;
}

//===================================================================
// 계정 만들기 및 로컬스토리지 저장
function saveUserInfo(){
  const name = document.querySelector(".signup-form #name").value;
  const phoneNumber = document.querySelector(".signup-form #phoneNumber").value;
  const dob = document.querySelector(".signup-form #dob").value;
  const address = document.querySelector(".signup-form #address").value;
  const email = document.querySelector(".signup-form #email").value;
  const password = document.querySelector(".signup-form #password").value;

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