const loginForm = document.querySelector(".login-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

loginForm.addEventListener("submit", (e) =>{
  if(email.value.trim() === ""){
    e.preventDefault();
    alert("이메일을 입력하세요");
    return;
  }

  if(password.value.trim() === ""){
    e.preventDefault();
    alert("비밀번호를 입력해주세요");
    return;
  }
})

