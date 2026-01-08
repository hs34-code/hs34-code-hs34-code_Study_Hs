/* =================================================
hompage 기본 세팅 news 배치 및 조작
================================================= */
showNewsList(newsList);

function showNewsList(newsFile){
  const newsWrapper = document.querySelector(".news-wrapper");

  const newsListEl = newsWrapper.querySelector(".news");

  const newsPreview = newsWrapper.querySelector(".newsPreview");
  const newsPage = newsWrapper.querySelector(".newsPage");

  //원본 제거
  newsPreview.remove();
  newsPage.remove();

// ======================== newsList load 및 기능 ========================
  newsFile.forEach(item => {
    // =================== preview =================== 
    const previewClone = newsPreview.cloneNode(true);

    previewClone.dataset.news = item.data;
    previewClone.querySelector("img").src = item.img;
    previewClone.querySelector("p").textContent = item.name;

    newsListEl.appendChild(previewClone);

    // =================== page =================== 
    const pageClone = newsPage.cloneNode(true);

    pageClone.classList.add(`${item.data}`);
    pageClone.querySelector("img").src = item.img;
    pageClone.querySelector("h2").textContent = item.h2
    pageClone.querySelector("p").textContent = item.desc;

    newsWrapper.appendChild(pageClone);
    // =================== hover event =================== 
    previewClone.addEventListener("click", () => {
      closeAllNews()
      pageClone.classList.add("active");
    });
  });
}

// ======================== 닫기 ========================
const btnExit = document.querySelectorAll(".btn-exit");
btnExit.forEach(btn => {
  btn.addEventListener("click",() => {
    closeAllNews();
  })
})

function closeAllNews(){
  document.querySelectorAll(".newsPage.active").forEach(
    page => page.classList.remove("active"));
}

