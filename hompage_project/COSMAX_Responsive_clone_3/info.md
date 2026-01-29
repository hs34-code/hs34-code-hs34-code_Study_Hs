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
----------------------- 자주 사용 하는 css -----------------
======================================================= -->
/* ========================================================
----------------------- heroBanner ------------------------
======================================================== */
@media screen and (max-width: 768px)


/* ========================================================
--------------------------- main1 -------------------------
======================================================== */
@media screen and (max-width: 768px)


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

<!-- 애니메이션 등장 가로선 -->
<svg class="animationLineX" viewBox="0 0 100 2" preserveAspectRatio="none">
  <line x1="0" y1="1" x2="100" y2="1" vector-effect="non-scaling-stroke" />
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
<div class="desginAnimationCircle left right">
  <svg viewBox="0 0 354 204" preserveAspectRatio="xMidYMid meet">
    <!-- 큰원  -->
    <circle class="baseCircle circleA" cx="102" cy="102" r="100"/>
    <circle class="baseCircle circleB" cx="252" cy="102" r="100"/>
    <!-- 작은 원 도트 -->
    <circle class="orbitDot dotA" cx="202" cy="102" r="2"/>
    <circle class="orbitDot dotB" cx="352" cy="102" r="2"/>
  </svg>
</div>

<!-- 원 6개 나와서 나오는 영상같은거 -->
<div class="desginAnimationArea">
  <svg viewBox="0 0 1150 400" preserveAspectRatio="xMidYMid meet">
    <!-- 메인 원들 (6개) -->
    <circle class="svg-circle" id="circle1" cx="150" cy="200" r="100"/>
    <circle class="svg-circle" id="circle2" cx="320" cy="200" r="100"/>
    <circle class="svg-circle" id="circle3" cx="490" cy="200" r="100"/>
    <circle class="svg-circle" id="circle4" cx="660" cy="200" r="100"/>
    <circle class="svg-circle" id="circle5" cx="830" cy="200" r="100"/>
    <circle class="svg-circle" id="circle6" cx="1000" cy="200" r="100"/>

    <!-- 움직이는 원 (SVG) -->
    <g id="movingCircle">
        <circle class="moving-circle" cx="150" cy="200" r="100"/>
    </g>

    <!-- 텍스트들 -->
    <text class="circle-text" id="text1" x="150" y="200" text-anchor="middle" dominant-baseline="middle">Strategy</text>
    <text class="circle-text" id="text2" x="320" y="200" text-anchor="middle" dominant-baseline="middle">Brand concept</text>
    <text class="circle-text" id="text3" x="490" y="200" text-anchor="middle" dominant-baseline="middle">Design</text>
    <text class="circle-text" id="text4" x="660" y="200" text-anchor="middle" dominant-baseline="middle">Formulation</text>
    <text class="circle-text" id="text5" x="830" y="200" text-anchor="middle" dominant-baseline="middle">Packaging</text>
    <text class="circle-text" id="text6" x="1000" y="200" text-anchor="middle" dominant-baseline="middle">Manufacturing</text>

    <!-- 상단 검정 라인 -->
    <line class="top-line lineHidden topArea" id="topLine" x1="150" y1="100" x2="1000" y2="100"/>

    <!-- 상단 검정 원과 점들 -->
    <circle class="brand-circle lineHidden topArea" id="brandCircle" cx="150" cy="100" r="50"/>
    <text class="brand-text lineHidden topArea" id="brandText" x="150" y="100" text-anchor="middle" dominant-baseline="middle" dominant-baseline="middle">Brand</text>
    
    <circle class="top-dot lineHidden topArea" id="dot1" cx="320" cy="100" r="6"/>
    <circle class="top-dot lineHidden topArea" id="dot2" cx="490" cy="100" r="6"/>
    <circle class="top-dot lineHidden topArea" id="dot3" cx="660" cy="100" r="6"/>
    <circle class="top-dot lineHidden topArea" id="dot4" cx="830" cy="100" r="6"/>
    <circle class="top-dot lineHidden topArea" id="dot5" cx="1000" cy="100" r="6"/>

    <!-- 하단 베이지 라인 -->
    <line class="bottom-line lineHidden bottomArea" id="bottomLine" x1="660" y1="300" x2="1000" y2="300"/>

    <!-- 하단 베이지 원과 점들 -->
    <circle class="product-circle lineHidden bottomArea" id="productCircle" cx="660" cy="300" r="50"/>
    <text class="product-text lineHidden bottomArea" id="productText" x="660" y="300" text-anchor="middle" dominant-baseline="middle">Product</text>
    
    <circle class="bottom-dot lineHidden bottomArea" id="bdot1" cx="830" cy="300" r="6"/>
    <circle class="bottom-dot lineHidden bottomArea" id="bdot2" cx="1000" cy="300" r="6"/>

    <!-- 베이지 테두리 원들 (4, 5, 6번 위치) -->
    <circle class="beige-ring" id="ring1" cx="660" cy="200" r="90"/>
    <circle class="beige-ring" id="ring2" cx="830" cy="200" r="90"/>
    <circle class="beige-ring" id="ring3" cx="1000" cy="200" r="90"/>
  </svg>
</div>

<!-- 가로 스크롤 카드 -->
<section class="main2 horizontalCardScroll">
      <div class="title area">
        <h3 data-i18n="main2.title"></h3>
      </div>
      <svg class="desginLineY" viewBox="0 0 2 100" preserveAspectRatio="none">
        <line x1="1" y1="0" x2="1" y2="100" vector-effect="non-scaling-stroke" />
      </svg>

      <ul class="scrollTrack">

        <li class="card">
          <div class="imgCover"><img src="" alt=""></div>
          <svg class="animationLineX self" viewBox="0 0 100 2" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100" y2="1" vector-effect="non-scaling-stroke" />
          </svg>

          <div class="text">
            <div class="pointCircle"></div>

            <h3 data-i18n="main21.title"></h3>

            <p data-i18n="main21.desc" class="fsNormal"></p>
            <p data-i18n="main22.desc" class="fsNormal"></p>
          </div>
        </li>


      </ul>
    </section>






<!-- 원위에 이미지 한개띵 -->
<section class="main3 wrapper">
      <div class="imgCover">
        <img src="../media/wwd/wwd.odm/main2img1.webp" alt="main2img1">
      </div>

      <div class="desginAnimationCircle right">
        <svg viewBox="0 0 354 204" preserveAspectRatio="xMidYMid meet">
          <!-- 큰원  -->
          <circle class="baseCircle circleA actionCircle" cx="102" cy="102" r="100"/>
          <circle class="baseCircle circleB" cx="252" cy="102" r="100"/>
          <!-- 작은 원 도트 -->
          <circle class="orbitDot dotA" cx="202" cy="102" r="2"/>
          <circle class="orbitDot dotB" cx="252" cy="2" r="2"/>
        </svg>
      </div>

      <div class="content">
        <div class="title">
          <h3 data-i18n="main3.title">Start your beauty journey</h3>
        </div>

        <div class="text">
          <p data-i18n="main3.desc" class="fsNormal">코스맥스 플러스(Cosmax Plus)는 뷰티 전문가들이 직접 개발하고 염선한 다양한 제영, 원료, 패키징 옵션을 바탕으로 고객이 원하는 뷰티 제품을 손쉽게 제작할 수 있는 디지털 플랫폼입니다. 아이디어 단계에서부터 제품 실현까지, 빠르고 효율적으로 고객의 아이디어를 현실로 만들어드립니다.</p>

          <a href="" class="arrowIcon">
            <p class="fsArrowIcon">Cosmax Plus</p>
            <svg viewBox="0 0 100 20">
              <circle class="arrowCircle" cx="10" cy="10" r="5" /> <!-- o -->
              <line class="arrowShaft" x1="5" y1="10" x2="90" y2="10"/> <!-- - -->
              <line class="arrowHead" x1="90" y1="10" x2="75" y2="00"/> <!-- > -->
              <line class="arrowHead" x1="90" y1="10" x2="75" y2="20"/> <!-- > -->
            </svg>
          </a>
        </div>
      </div>
    </section>

    .main3{
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-row: auto;
  overflow: hidden;
}

.main3 .desginAnimationCircle{
  grid-column: 1/2;
  grid-row: 1/2;
}

.main3 .imgCover{
  width: 60%;
  grid-column: 1/2;
  grid-row: 1/2;
  z-index: 1;

  justify-self: center;
}
.main3 .imgCover img{
  width: 100%;
  object-fit: cover;
}
.main3 .content{
  align-self: center;
  grid-column: 2/3;
  grid-row: 1/2;
}
.main3 .title{}
.main3 .text{
  margin-top: var(--fs_h2);
  width: 70%;
}

@media screen and (max-width: 768px){
  .main3{
    grid-template-columns: 100%;
    grid-row: auto auto;
  }

  .main3 .desginAnimationCircle{
    grid-row: 2/3;
  }

  .main3 .imgCover{
    grid-row: 2/3;
      justify-self: end;
  }
  .main3 .imgCover img{}
  .main3 .content{
    grid-column: 1/2;
  }
  .main3 .title{}
  .main3 .text{width: 100%;}
}

// ========================================================
// ----------------------- main 3 -------------------------
// ========================================================

makeDesginAnimationCircle("#wwd_odm .main3 .desginAnimationCircle");

imagesWheelIntroManagerOpacity({
  target: "#wwd_odm .main3 .imgCover",
  // markers:true
})
imagesWheelControlManagerY({
  target: "#wwd_odm .main3 .imgCover",
  fromY: 30, toY: -10,
  // markers:true
})