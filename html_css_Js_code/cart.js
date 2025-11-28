// cart 가져오기
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// cart를 화면에 렌더링
const cartSection = document.querySelector(".cart");

// 기존 화면을 비우고 새로 출력
cartSection.innerHTML = "<h1>Cart</h1>";

cart.forEach((item, index) => {
  cartSection.innerHTML += `
    <div class="cart-item">
      <img src="${item.img}" width="200" height="200">
      <p>${item.title}</p>
      <p>${item.price}</p>
      <button onclick="removeItem(${index})">Delete</button>
    </div>
  `;
});

// 삭제 기능
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
