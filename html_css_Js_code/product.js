// products 에서 보내온 id로 상품 찾기 및
// 상품별 product화면 출력
const url = new URLSearchParams(window.location.search);
const productId = url.get("id");

const products = [
  {
    id: 1, 
    title: "Product 1", 
    price: "10,000", 
    img: "../hompage_project/simple_home_2/img/replace image.png",
    description: "Product Description 1"
  },
  {
    id: 2, 
    title: "Product 2", 
    price: "20,000", 
    img: "../hompage_project/simple_home_2/img/replace image.png",
    description: "Product Description 2"
  },
  {
    id: 3, 
    title: "Product 3", 
    price: "10,050", 
    img: "../hompage_project/simple_home_2/img/replace image.png",
    description: "Product Description 3"
  }
]

const product = products.find(item => item.id == productId);
document.querySelector(".product-title").textContent = product.title;
document.querySelector(".product-price").textContent = product.price;
document.querySelector(".product-image img").src = product.img;
document.querySelector(".product-description").textContent = product.description;

// prdocut cart, heart에 넣기
const btnCart = document.querySelector(".btn-cart");
const btnHeart = document.querySelector(".btn-heart");

btnCart.addEventListener("click", () => {
  let saveCart = JSON.parse(localStorage.getItem("cart")) || [];
  saveCart.push(product);
  localStorage.setItem("cart", JSON.stringify(saveCart));
})

btnHeart.addEventListener("click", () =>{
  let saveHeart = JSON.parse(localStorage.getItem("heart")) || [];
  saveHeart.push(product);
  localStorage.setItem("heart", JSON.stringify(saveHeart));
})
