const productSection = document.querySelector(".products");
const templateCard = document.querySelector(".product_card");

templateCard.style.display = "none";

productList.forEach(item => {

  const cardClone = templateCard.cloneNode(true);
  cardClone.style.display = "block";

  const img = cardClone.querySelector("img");
  const title = cardClone.querySelector("h3");
  const price = cardClone.querySelector("p");

  img.src = item.img;
  title.textContent = item.title;
  price.textContent = item.price+ "원";

  cardClone.querySelector("a").href = `product.html?id=${item.id}`;

  productSection.appendChild(cardClone);
})