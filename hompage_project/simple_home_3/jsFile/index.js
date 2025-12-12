/* =================================================
Fade Slider Img 기능
================================================= */
const fadeSlider = document.querySelectorAll(".fadeSlide");
const fadeDot = document.querySelectorAll(".dot_fadeSlide");

let showIndex = 0;
const fadeTime = 3000;
let fadeInterval;

startFadeInterval();

// 화면 보여주기
function showFade(showIndex){
  fadeSlider.forEach(s => s.classList.remove("fadeImg_active"));
  fadeDot.forEach(d => d.classList.remove("fadeDot_active"));

  fadeSlider[showIndex].classList.add("fadeImg_active");
  fadeDot[showIndex].classList.add("fadeDot_active");
}

// 자동 재생
function startFadeInterval(){
  fadeInterval = setInterval(() => {
    showIndex++;
    if(showIndex >= fadeSlider.length) showIndex = 0;
    showFade(showIndex);
  },fadeTime);
}

//버튼을 눌렀을때
fadeDot.forEach(dot => {
  dot.addEventListener("click", () => {
    clearInterval(fadeInterval);
    showIndex = dot.dataset.fade;
    showFade(showIndex);
    startFadeInterval();
  })
})


/* =================================================
Carousel Slider Img 기능
================================================= */
const carousel = document.querySelectorAll(".carousel");

let  carouselSlots = [0, 1, 2, 3, 4];
const carouselTime = 4000;
let carouselInterval;
let carouselAnim = false;

// 최초 실행
render();
startCarouselInterval()

//화면 배치
function render(){
  carouselAnim = true;
  carousel.forEach((card, i) => {
    card.className = "carousel slot-" + carouselSlots[i];
  });
  setTimeout(() => {
    carouselAnim = false;
  }, 600);
}

// 자동 재생
function startCarouselInterval(){
  carouselInterval = setInterval(() => {
    carouselSlots.unshift(carouselSlots.pop());
    render();
  }, carouselTime);
}

//버튼 조작
const btnCarouselLeft = document.querySelector('.btn-carouselLeft');
const btnCarouselRight = document.querySelector('.btn-carouselRight');

btnCarouselLeft.addEventListener("click", () => {
  if(carouselAnim)return;
  clearInterval(carouselInterval);
  carouselSlots.push(carouselSlots.shift());
  render();
  startCarouselInterval();
})

btnCarouselRight.addEventListener("click", () => {
  if(carouselAnim)return;
  clearInterval(carouselInterval);
  carouselSlots.unshift(carouselSlots.pop());
  render();
  startCarouselInterval();
})