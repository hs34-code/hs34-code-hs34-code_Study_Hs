/* ========================================================
--------------------- login animation ---------------------
========================================================= */

const floorSet = document.querySelector(".floorSet");
const book = document.querySelector(".loginDesignBook");
const cover = book.querySelector(".designCover");
const pages = book.querySelectorAll(".page");


/* ========== book 이외 클릭시 book close =========== */
floorSet.addEventListener("click", () => {
  book.classList.remove("startBook");
  cover.classList.remove("pageOpen");
  book.classList.remove("coverHidden")
})

/* ========== book 클릭시 book open =========== */
book.addEventListener("click", (e) => {
  e.stopPropagation();
  book.classList.add("startBook");
  cover.classList.add("pageOpen");
})


/* ========================================================
--------------------- page animation ---------------------
========================================================= */
const moveBtns = book.querySelectorAll("[data-move-page]");

moveBtns.forEach((btn, btnIndex) => {
  btn.addEventListener("click", () => {
    const clickIndex = Math.floor(btnIndex/3 +1);

    const targetPageName = book.querySelector(`.page.${btn.dataset.movePage}`);
    const targetIndex = Number(targetPageName.dataset.pageIndex);
    
    // 뒤로 넘겨야 할때
    if(clickIndex < targetIndex){
      book.classList.add("coverHidden"); // ★ 이 줄 추가 (핵심)

      for(let i = clickIndex; i < targetIndex; i++){
        const targetPage = book.querySelector(`.page[data-page-index="${i}"]`);
        targetPage.classList.add("pageOpen");
      }
    }

     // 앞으로 넘겨야 할때
    if(clickIndex > targetIndex){
      book.classList.add("coverHidden"); // ★ 이 줄 추가 (핵심)

      for(let i = clickIndex; i >= targetIndex; i--){
        const targetPage = book.querySelector(`.page[data-page-index="${i}"]`);
        targetPage.classList.remove("pageOpen");
      }
    }
  })
})



/* ========================================================
------------------------ login 기능 ------------------------
========================================================= */

/* ========== password 보기 =========== */
const btnOpenPassword = book.querySelectorAll(".btn-openPassword");

btnOpenPassword.forEach((btn) => {
  btn.addEventListener("click", () => {

    /* ========== password 공개 비공개 전환 =========== */
    const parent = btn.closest(".box");
    const input = parent.querySelector('input[name="password"]');

    input.type = input.type === "password" ? "text" : "password";

    /* ========== password icon 전환 =========== */
    const spans = btn.querySelectorAll("span");

    spans.forEach((span) => {
      span.classList.toggle("none");
    });
  });
})
