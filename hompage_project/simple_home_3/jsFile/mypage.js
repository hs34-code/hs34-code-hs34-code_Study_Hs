const user = JSON.parse(localStorage.getItem("loginStatus"));

const userName = document.querySelector(".userName");
const userPhoneNumber = document.querySelector(".userPhoneNumber");
const userDob = document.querySelector(".userDob");
const userEmail = document.querySelector(".userEmail");
const userAddress = document.querySelector(".userAddress");

userName.textContent = user.name;
userPhoneNumber.textContent = user.phoneNumber;
userDob.textContent = user.dob;
userEmail.textContent = user.email;
userAddress.textContent = user.address;




// ==============================================
// 프로필 수정 보이기, 패스워드 수정 보이기, x 버튼
// ==============================================
const btnEdit = document.querySelector(".btn-edit");
btnEdit.addEventListener("click", () => {
  document.querySelector(".profileEdit").classList.remove("expanded");
  document.querySelector("#name").setAttribute("placeholder", `${user.name}`);
  document.querySelector("#phoneNumber").setAttribute("placeholder", `${user.phoneNumber}`);
  document.querySelector("#dob").value= `${user.dob}`;
  document.querySelector("#email").setAttribute("placeholder", `${user.email}`);
  document.querySelector("#address").setAttribute("placeholder", `${user.address}`);
});

const btnChange = document.querySelector(".btn-resetPassword");
btnChange.addEventListener("click", () => {
  document.querySelector(".resetPassword").classList.remove("expanded");
});



const exit = document.querySelectorAll(".exit");
exit.forEach(btn => {
  btn.addEventListener("click", () =>{
    btn.parentElement.classList.add("expanded");
  });
});

// =======================================
// 프로필 수정 검증
// =======================================
const editForm = document.querySelector(".profileEdit-form");
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginStatusList = JSON.parse(localStorage.getItem("loginStatus"));
  const userLocalStorage = JSON.parse(localStorage.getItem("users"));
  let userSaveList = userLocalStorage.filter(user => user.email !== loginStatusList.email);
  let userUpdate = userLocalStorage.find(user =>user.email === loginStatusList.email);

  const inputName = document.querySelector("#name").value;
  if(inputMatch(inputName, loginStatusList.name)){
    userUpdate.name = inputName;
  }

  const inputPhone = document.querySelector("#phoneNumber").value;
  if(!checkPhoneNumber(inputPhone)) return;
  if(inputMatch(inputPhone, loginStatusList.phoneNumber)){
    userUpdate.phoneNumber = inputPhone;
  }

  const inputDob = document.querySelector("#dob").value;
  if(inputMatch(inputDob, loginStatusList.dob)){
    userUpdate.dob = inputDob;
  }

  const inputEmail = document.querySelector("#email").value;
  if(!checkEmail(inputEmail)) return;
  if(inputMatch(inputEmail, loginStatusList.email)){
    userUpdate.email= inputEmail;
  }

  const inputAddress = document.querySelector("#address").value;
  if(inputMatch(inputAddress, loginStatusList.address)){
    userUpdate.address= inputAddress;
  }
  
  // 비밀번호 검사
  const inputPassword = document.querySelector("#passwordMatch").value;
  if(!passwordMatch(inputPassword, loginStatusList.password)){
    alert("Incorrect password. You nedd to try again");
    return;
  }

  userSaveList.push(userUpdate);
  localStorage.setItem("users", JSON.stringify(userSaveList));
  localStorage.setItem("loginStatus", JSON.stringify(userUpdate));
  location.reload();
});

// 비밀번호 검사
function passwordMatch(input, saved){
  if(input !== saved){
    return false;
  }else{
    return true;
  }
}

// 입력이 있는지 없는지 검사
function inputMatch(input, saved){
  if(input.trim() == ""){
    return false;
  }
  if(input === saved){
    return false;
  }
  return true;
}

// 핸드폰 번호 검증
function checkPhoneNumber(input){
  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
  if(input.trim() !== "" && !phoneRegex.test(input)){
    alert("Invalid phone number format");
    return false;
  }
  return true;
}

// 이메일 검증
function checkEmail(input){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]+$/;
  if(input.trim() !== "" && !emailRegex.test(input)){
    alert("Email format is incorrect");
    return false;
  }
  return true;
}

// =======================================
// 비밀번호 재설정
// =======================================
const resetPWDForm = document.querySelector(".resetPassword-form");
resetPWDForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));

  const currentPWD = document.querySelector("#currentPassword").value;  
  if(!passwordMatch(currentPWD, loginStatus.password)){
    alert("Incorrect password")
    return;
  }

  const newPWD = document.querySelector("#newPassword").value;
  if(!PasswordStrengthMatch(newPWD)){
    return;
  }

  if(passwordMatch(currentPWD, newPWD)){
    alert("The new password cannot be the same as the current password")
    return;
  }

  const confirmPWD = document.querySelector("#confirmPassword").value;
  if(!passwordMatch(newPWD, confirmPWD)){
    alert("The entered password do not match")
    return;
  }

  const userLocalStorage = JSON.parse(localStorage.getItem("users"));
  let userSaveList = userLocalStorage.filter(user => user.email !== loginStatus.email);
  let userUpdate = userLocalStorage.find(user =>user.email === loginStatus.email);

  userUpdate.password = newPWD;
  userSaveList.push(userUpdate);
  localStorage.setItem("users", JSON.stringify(userSaveList));
  localStorage.setItem("loginStatus", JSON.stringify(userUpdate));
  alert
  location.reload("Your password has been changed");
})

// 비밀번호 양식
function PasswordStrengthMatch(input){
  const passwordRegexNumber = /(?=.*[0-9])/;
  const passwordRegexUpper = /(?=.*[A-Z])/;
  const passwordRegexLower = /(?=.*[a-z])/;
  const passwordRegexSpecial = /(?=.*[!*?_\-])/;
  
  if(!passwordRegexNumber.test(input)){
    alert("Must contain at least one number"); 
    return false;
  }
  if(!passwordRegexUpper.test(input)){
    alert("Must contain at least one uppercase letter");
    return false;
  }
  if(!passwordRegexLower.test(input)){
    alert("Must contain at least one lowercase letter");
    return false;
  }
  if(!passwordRegexSpecial.test(input)){
    alert("Must contain at least one spcial character");
    return false;
  }
  if(input.length < 8){
    alert("Password must be at least 8 characters");
    return false;
  }
  return true;
}
