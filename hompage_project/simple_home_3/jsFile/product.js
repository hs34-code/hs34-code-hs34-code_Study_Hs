//=====================================================
//products에서 넘어온 url 처리
const params = new URLSearchParams(window.location.search);
const getId = Number(params.get("id"));

// List에서 id로 찾기
const showProduct = productList.find(item => item.id === getId);

// 화면 반영
const mainImage = document.querySelector(".mainImage img");
const detailImage = document.querySelectorAll(".detailImage img");
const title = document.querySelector(".title");
const info = document.querySelector(".info");
const qty = document.querySelector(".qtantity");
const price = document.querySelector(".price");


mainImage.src = showProduct.mainImg;
for(let i = 0; i < detailImage.length; i++){
  detailImage[i].src = showProduct.detailImg[i];
}
title.textContent = showProduct.title;
info.textContent = showProduct.desc;
qty.textContent = 1;
price.textContent = formatPrice(showProduct.price);


//=====================================================
//qty button
const btnIncrease = document.querySelector(".btn-increase");
const btnDecrease = document.querySelector(".btn-decrease");

// 증가
btnIncrease.addEventListener("click", () => {
  let count = Number(qty.textContent)+1;
  qty.textContent = count;
  price.textContent = formatPrice(Number(showProduct.price)*count);
})

// 감소
btnDecrease.addEventListener("click", () => {
  let count = Number(qty.textContent)-1;
  if(count <= 0){
    count = 1;
  }
  qty.textContent = count;
  price.textContent = formatPrice(Number(showProduct.price)*count);
})

//=====================================================
//price 정규식 입히기 function(변경 값 필요)
function formatPrice(num){
  return num.toLocaleString("ko-KR") + "원";
}



//===================================================================
// -------------------------- cart, heart --------------------------
//===================================================================

// localStorage 에서 가져오기
let userShopLog  = JSON.parse(localStorage.getItem("userShopLog")) || [];

//const showProduct = productList.find(item => item.id === getId);


const btnArea = document.querySelector(".btnArea");
// ============================ heart on off ============================
const btnHeart = btnArea.querySelector(".btnHeart");
const iconHeart = btnArea.querySelectorAll(".heart");
let userShopInfo;


if(loginStatus){ // 로그인 되어있을때만 가능
  console.log("실")  
  const userFind2 = userShopLog.find(user => user.email === loginStatus.email);
  const userFilter2 = userShopLog.filter(user => user.email !== loginStatus.email);
    
  if(!userFind2){ // 없으면 기본 양식 생성
    userShopInfo = {
      name: `${loginStatus.name}`,
      email: `${loginStatus.email}`,
      cart: [],
      heart: []
    };
  }

  userShopInfo.heart.push(showProduct);
  console.log(userShopInfo.heart);



  if(userFind2.heart.find(item => item.id === showProduct.id)){
    iconHeart.forEach(item => {
    item.classList.toggle("choice");
  })
  }
}


btnHeart.addEventListener("click", () => {
  if(!loginStatus){ // 로그인 하세요
    localStorage.setItem("redirectAfterLogin", window.localStorage);
    window.location.href = "login.html";
    return;
  }

  iconHeart.forEach(item => {
    item.classList.toggle("choice");
  })
})

// ============================ cart 넣기 ============================
const btnCart = btnArea.querySelector(".btnCart");

btnCart.addEventListener("click", () => {
// 계정 찾기
  const userFind = userShopLog.find(user => user.email === loginStatus.email);
  const userFilter = userShopLog.filter(user => user.email !== loginStatus.email);

  // 로그인 하세요
  if(!loginStatus){
    localStorage.setItem("redirectAfterLogin", window.localStorage);
    window.location.href = "login.html";
    return;
  }

  // userShgopLog 확인
  if(!userFind){ //없으면 기본 양식 생성
    userShopInfo = {
      name: `${loginStatus.name}`,
      email: `${loginStatus.email}`,
      cart: [],
      heart: []
    };
  }else{  // 있으면 찾았던거 참조 연결
    userShopInfo = userFind;
  }

  // userShopLog에 이번 상품이 있는지 확인
  const existItem = userShopInfo.cart.find(item => item.id === showProduct.id);
  const saveQty = Number(document.querySelector(".qtantity").textContent);

  if(!existItem){ // 없으면 추가
    const productListClone = {...showProduct};
    productListClone.count = saveQty;
    userShopInfo.cart.push(productListClone);
  }else{  // 있으면 수량만 추가
    existItem.count = Number(existItem.count) + saveQty;
  }

  // 전체 업데이트
  userFilter.push(userShopInfo);
  localStorage.setItem("userShopLog", JSON.stringify(userFilter));
  alert("Added to Cart");
})
