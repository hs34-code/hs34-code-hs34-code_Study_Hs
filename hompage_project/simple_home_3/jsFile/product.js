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

//=====================================================
//cart, heart
//=====================================================
//cart, heart
let userShoppingList  = JSON.parse(localStorage.getItem("userShoppingList")) || [];
//const showProduct = productList.find(item => item.id === getId);

const btnCart = document.querySelector(".btnCart");
const btnHeart = document.querySelector(".btnHeart");

btnCart.addEventListener("click", () => {
  if(loginStatus){ //로그인 감지
    // 로그인이 되어있을시
    let saveMyShoppingHistory = userShoppingList.find(user => user.email === loginStatus.email);
    const saveShoppingList = userShoppingList.filter(user => user.email !== loginStatus.email);
    if(saveMyShoppingHistory){ // 쇼핑기록 검색
      // 기존 shoppLing 기록이 있을 시
      saveMyShoppingHistory.cart.push(showProduct);
    } else {
      // 기존 shoppLing 기록이 없을 시
      saveMyShoppingHistory = saveShopping(loginStatus.name, loginStatus.email, showProduct, null);
    }
    saveShoppingList.push(saveMyShoppingHistory);
    localStorage.setItem("userShoppingList", JSON.stringify(saveShoppingList));
  }else{
    // 로그인이 안되어있을시
    localStorage.setItem("redirectAfterLogin", window.localStorage);
    window.location.href = "login.html";
  }
})

function saveShopping(name, email, cart, heart){ // 안쓰는걸 null로 보내기
  const shopInfo = {
    name: name,
    email: email
  }
  if(cart !== null){
    shopInfo.cart = [];
    shopInfo.cart.push(cart);
  }
  if(heart !== null){
    shopInfo.heart = [];
    shopInfo.heart.push(heart);
  }

  return shopInfo;
}
