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

function checkPhoneNumberMatch(){
  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
  const signUpPhoneNumber = document.querySelector("#phoneNumber").value;
  if (!phoneRegex.test(signUpPhoneNumber)){
    alert("Invalid phone number format");
    return false
  }
  return true;
}

function checkDobMatch(){
  const signUpDob = document.querySelector("#dob").value;
  
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

function checkEmailMatch(){
  const signUpEmail = document.querySelector("#email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]+$/;
  if(!emailRegex.test(signUpEmail)){
    alert("Email format is incorrect");
    return false;
  }
  return true;
}

function checkPasswordStrengthMatch(){
  const signUpPassword = document.querySelector("#password").value;
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

function checkPasswordMatch(){
  const signUpPassword = document.querySelector("#password").value;
  const signUpPasswordConfirm = document.querySelector("#passwordConfirm").value;
  if(signUpPassword !== signUpPasswordConfirm){
    alert("Passwords do not match");
    return false;
  }
  return true;
}

function checkEmailAlready(){
  const signUpEmail = document.querySelector("#email").value;
  let userInfo = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = userInfo.find(user => user.email === signUpEmail);
  if(foundUser !== undefined){
    alert("This Email is already in use");
    return false;
  }
  return true;
}

function checkPhoneNumberAlready(){
  const signUpPhoneNumber = document.querySelector("#phoneNumber").value;
  let userInfo = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = userInfo.find(user => user.phoneNumber === signUpPhoneNumber);
  if(foundUser !== undefined){
    alert("This Phone number is already in use");
    return false;
  }
  return true;
}

function checkAgreeMatch(){
  const signUpAgree = document.querySelector("#agree").checked;
  if(!signUpAgree){
    alert("You must agree to the Terms and Conditions");
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