const signupForm = document.querySelector(".signup-form");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

signupForm.addEventListener("submit", (e) => {
  if(password.value !== passwordConfirm.value){
    e.preventDefault();
    alert("비밀번호가 일치하지 않습니다");
    return;
  }
  alert("회원가입 완료")
})