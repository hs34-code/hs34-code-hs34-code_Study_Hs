//=====================================================
//dropdown에서 넘어온 url 처리
const params = new URLSearchParams(window.location.search);
const dropdownType = params.get("type") || "All";

groupProductsByType(dropdownType);

//=====================================================
// button 누를 시 해당 제품 type 만 보이기
// button 누를 시 active 추가
const ListNav = document.querySelectorAll(".productsList button");

ListNav.forEach( btn => {
  btn.addEventListener("click", () => {
  ListNav.forEach(b => b.classList.remove("btn-active"));
  btn.classList.add("btn-active");
  groupProductsByType(btn.dataset.showtype);
  });
});

//=====================================================
// 제품 보이기 function (productList 매개변수)
function showProductList(filteredProduct){
  const productSection = document.querySelector(".products");
  const templateCard = document.querySelector(".products_card");
  // 초기화
  productSection.innerHTML = "";


  filteredProduct.forEach(item => {

  const cardClone = templateCard.cloneNode(true);
  cardClone.style.display = "block";

  const img = cardClone.querySelector("img");
  const title = cardClone.querySelector("h3");
  const price = cardClone.querySelector("p");

  img.src = item.mainImg;
  title.textContent = item.title;
  price.textContent = item.price+ "원";
  cardClone.querySelector("a").href = `product.html?id=${item.id}`;

  productSection.appendChild(cardClone);
  });
}

//=====================================================
// 제품 보이는 상품 분류 function (input 매개변수)
function groupProductsByType(input){
  if (input === "All"){
    showProductList(productList);
    document.querySelector(".btn-all").classList.add("btn-active");
  } else {
    const filteredProduct = productList.filter(item => item.type === input);
    showProductList(filteredProduct);
    document.querySelector(".btn-"+input.toLowerCase()).classList.add("btn-active");
  }
}


/* =================================================
side 카테고리  선택
================================================= */
const panel = document.querySelector(".productsList");

let targetY = 0;
let currentY = 0;

window.addEventListener("scroll", () => {
  targetY = window.scrollY;
})

function movePanel() {
  currentY +=  (targetY - currentY) * 0.15;
  panel.style.transform = `translateY(${currentY}px)`;
  requestAnimationFrame(movePanel)
}

movePanel()

