/* =================================
이미지 3개 아래 slider 상품 정렬 메뉴 
================================= */
const slider = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;
const intervalTime = 3000;

function showSlide(index){
  slider.forEach(s => s.classList.remove('slide_active'));
  dots.forEach(d => d.classList.remove('active'));

  slider[index].classList.add('slide_active');
  dots[index].classList.add('active');
}

setInterval(() => {
  index++;
  if(index >= slider.length) index = 0;
  showSlide(index);
}, intervalTime);

/* =================================
img track 6개 중 4개 출력 이동
================================= */
const barBackground = document.querySelector('.progress-bar-background');
const bar = document.querySelector('.progress-bar');
const imgTrack = document.querySelector('.img-track');

let dragging = false;
let startX = 0;
let barStartX = 0;

const visibleCount = 4;
const totalCount = 6;
const slideWidth = 240 + 20;
const maxMove = (totalCount - visibleCount) * slideWidth;

bar.addEventListener('mousedown', (e)=>{
  dragging = true;
  startX = e.clientX;
  barStartX = bar.offsetLeft;
});

window.addEventListener('mousemove', (e) =>{
  if(!dragging) return;
  const dx = e.clientX - startX
  let newX = barStartX + dx;

  const bgWidth = barBackground.offsetWidth;
  const barWidth = bar.offsetWidth;

  if(newX < 0) newX = 0;
  if(newX > bgWidth - barWidth) newX = bgWidth - barWidth;

  bar.style.left = newX + 'px';
  const ratio = newX / (bgWidth - barWidth);
  const moveX = -ratio * maxMove;
  imgTrack.style.transform=`translateX(${moveX}px)`;
});

window.addEventListener('mouseup', () =>{
  dragging = false;
})

/* =================================
news card 형식 이미지 출력
================================= */
const newsTrack = document.querySelector('.news-track');
const newsInner = document.querySelector('.news-inner');
const newsCards = Array.from(newsInner.children);

const newsTimer = 1000;
const newsStartX = -10;
const newsMovingX = -25;
let newsMoveX = newsStartX;
let newsIndex = Math.floor(newsCards.length / 2);

newsCards.forEach(card =>{
  const clone = card.cloneNode(true);
  newsInner.appendChild(clone);
  newsInner.style.transform = `translateX(${newsStartX}%)`
})
let allCards = document.querySelectorAll('.card');

function newsSlide(){
  //화면 확대 tag 부여
  allCards.forEach(c => c.classList.remove('main_card'));
  newsIndex++;
  if(newsIndex === 7){
    allCards[2].classList.add('main_card');
    allCards[7].classList.add('main_card');
    newsIndex = Math.floor(newsCards.length / 2);
  }
  allCards[newsIndex].classList.add('main_card');
  
  // 좌로 이동
  newsInner.style.transition = "transform 0.5s ease";  
  newsMoveX += newsMovingX;  
  newsInner.style.transform = `translateX(${newsMoveX}%)`
  
  setTimeout(() =>{
    if(newsMoveX <= (newsMovingX*newsCards.length)){
      newsMoveX = newsStartX;
      newsInner.style.transform = `translateX(${newsStartX}%)`
      newsInner.style.transition = "none"; 
    }
  }, 500);
  
  
}

setInterval(newsSlide, newsTimer);
