/* ========================================================
-------------------------- intro --------------------------
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".intro");
  

  /* ========== 1frame 뒤 실행 intro line 확장 =========== */
  requestAnimationFrame(() => {
    intro.style.setProperty("--LineMove", "100%");
    document.body.style.overflow = "hidden";


    /* ========== introLine 확장 된 뒤 page open =========== */
    setTimeout(() => {
      intro.style.setProperty("--blackAreaMove", "100%");
    }, 1000);

    setTimeout(() => {
      intro.style.display = "none";
      document.body.style.overflow = "auto";

    }, 2000);
  });

})