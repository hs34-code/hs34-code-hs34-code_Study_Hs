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




// =======================================
// 프로필 수정 보이기 안보이기
// =======================================
const btnEdit = document.querySelector(".btn-edit");
btnEdit.addEventListener("click", () => {
  exit.parentElement.classList.remove("expanded");
  document.querySelector("#name").setAttribute("placeholder", `${user.name}`);
  document.querySelector("#phoneNumber").setAttribute("placeholder", `${user.phoneNumber}`);
  document.querySelector("#dob").value= `${user.dob}`;
  document.querySelector("#email").setAttribute("placeholder", `${user.email}`);
  document.querySelector("#address").setAttribute("placeholder", `${user.address}`);
})

const exit = document.querySelector(".exit");
exit.addEventListener("click", () => {
  exit.parentElement.classList.add("expanded");
})

// =======================================
// 프로필 수정 검증
// =======================================
const editForm = document.querySelector("profileEdit-form");
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.querySelector("#name").value;
  if(inputMatch(inputName, user.name)){
    user.name = inputName;
  }
  
  // 비밀번호 검사
  const inputPassword = document.querySelector("#passwordMatch");
  if(!passwordMatch(inputPassword, user.password)){
    alert("Incorrect password. You nedd to try again");
    return;
  }

})

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
  if(input === null){
    return false;
  }
  if(input === saved){
    return false;
  }
  return true;
}
