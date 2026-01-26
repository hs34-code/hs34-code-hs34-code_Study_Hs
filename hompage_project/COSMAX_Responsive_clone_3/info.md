html 

대괄호 
<!-- ======================================================
-------------------------- text ---------------------------
======================================================= -->

중간괄호
<!-- ====================== text ====================== -->

소괄호
<!-- ---------------------- text ---------------------- -->



css

대괄호 
/* ========================================================
--------------------------- text --------------------------
======================================================== */

중간괄호
/* ======================== text ======================= */

소괄호
/* ----------------------- text ------------------------ */



js

대괄호 
// ========================================================
// ------------------------- text -------------------------
// ========================================================

중간괄호
// ========================= text =========================

소괄호
// ------------------------- text -------------------------



html 기본 세팅
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- font setting -->
  <link rel="preconnect" href="https://cdn.jsdelivr.net">
  <link rel="stylesheet"href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"/>

  <!-- base setting -->
  <link rel="stylesheet" href="../base/base.css">

  <!-- custom setting -->
  <link rel="stylesheet" href="../css/">

  <title>COSMAX_Responsive_clone_3</title>
</head>

<body id="">
  <main>
    
  </main>
  
  <!-- ICON -->
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
  <!-- GSAP JS -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js"></script>

  <!-- base setting -->
  <script src="../base/base.js"></script>
  <script src="../js/language.js"></script>
  
  <!-- custom setting -->
  <script src="../js/"></script>
</body>
</html>





<!-- ======================================================
----------------------- 자주 사용 하는 tag -----------------
======================================================= -->
<div class="title area">
  <h3 data-i18n="main3.title"></h3>
</div>

<div class="text area">
  <p data-i18n="main3.desc" class="fsNormal"></p>
</div>

<!-- ======================================================
----------------------- 자주 사용 하는 js ------------------
======================================================= -->
ScrollTrigger.matchMedia({
  "(min-width: 768px)": () => { // ==== pc ====
    const ctx = gsap.context(() => {

    })
    
    return () => ctx.revert();
  },
  "(max-width: 768px)": () => { // ==== mobile ===
    const ctx = gsap.context(() => {

    })
    
    return () => ctx.revert();
  }
})
<!-- ======================================================
----------------------- 자주 사용 하는 svg -----------------
======================================================= -->

<!-- 애니메이션 등장 반원 top & bottom -->
<svg class="animationHalfCircleBottom area" viewBox="0 100 200 100" preserveAspectRatio="none">
  <circle cx="100" cy="100" r="99"/>
</svg>

<svg class="animationHalfCircleTop area" viewBox="0 000 200 100" preserveAspectRatio="none">
    <circle cx="100" cy="100" r="99" transform="rotate(-180 100 100)" />
  </svg>

<!-- 일반 세로선 -->
<svg class="desginLineY" viewBox="0 0 2 100" preserveAspectRatio="none">
  <line x1="1" y1="0" x2="1" y2="100" vector-effect="non-scaling-stroke" />
</svg>
<!-- 일반 가로선 -->
<svg class="desginLineX" viewBox="0 0 100 2" preserveAspectRatio="none">
  <line x1="0" y1="1" x2="100" y2="1" vector-effect="non-scaling-stroke" />
</svg>

<!-- 애니메이션 등장 세로선 -->
<svg class="animationLineY" viewBox="0 0 2 100" preserveAspectRatio="none">
  <line x1="1" y1="0" x2="1" y2="100" vector-effect="non-scaling-stroke" />
</svg>

<!-- 화살표 바로가기 -->
<a href="" class="arrowIcon">
  <p class="fsArrowIcon">OUR OFFER</p>
  <svg viewBox="0 0 100 20">
    <circle class="arrowCircle" cx="10" cy="10" r="5" /> <!-- o -->
    <line class="arrowShaft" x1="5" y1="10" x2="90" y2="10"/> <!-- - -->
    <line class="arrowHead" x1="90" y1="10" x2="75" y2="00"/> <!-- > -->
    <line class="arrowHead" x1="90" y1="10" x2="75" y2="20"/> <!-- > -->
  </svg>
</a>

<!-- 큰 원  돌아가는 애니메이션 -->
<div class="desginAnimationCricle left right">
  <svg viewBox="0 0 354 204" preserveAspectRatio="xMidYMid meet">
    <!-- 큰원  -->
    <circle class="baseCircle circleA" cx="102" cy="102" r="100"/>
    <circle class="baseCircle circleB" cx="252" cy="102" r="100"/>
    <!-- 작은 원 도트 -->
    <circle class="orbitDot dotA" cx="202" cy="102" r="2"/>
    <circle class="orbitDot dotB" cx="352" cy="102" r="2"/>
  </svg>
</div>


