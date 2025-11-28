const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  const loginEmail = document.querySelector("#email").value;
  const loginPassword = document.querySelector("#password").value;

  let userInfo = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = userInfo.find(user => user.email === loginEmail);

  if(foundUser === undefined){
    alert("No account found with this email");
    return;
  }

  if(loginPassword !== foundUser.password){
    alert("The password you entered is incorrect")
    return;
  }

  alert(`Welcome ${foundUser.name}`);

})