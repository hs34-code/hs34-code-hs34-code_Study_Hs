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

// 초기 설정 시간, 시작지점, 이동거리
const newsTimer = 3000;
const newsStartX = -10;
const newsMovingX = -25;

let newsMoveX = newsStartX;

// 계산식
const newsOrigin = newsCards.length;
const newsCenter = Math.floor(newsCards.length / 2);
const newsCloneCenter = newsOrigin + newsCenter;

// 시작위치 설정
let newsIndex = newsCenter
let descIndex = newsCenter;


// inner 복사
if(!newsInner.dataset.clonded){
  newsCards.forEach(card =>{
    newsInner.appendChild(card.cloneNode(true));
  })
  newsInner.dataset.clonded = "true";
}

// 복사된 inner card 까지 영역 잡기
newsInner.style.transform = `translateX(${newsStartX}%)`
let allCards = Array.from(newsInner.children);


// descripiton
const currentNumber = document.querySelector('.current');
const totalNumber = document.querySelector('.total');
const descTitle = document.querySelector('.desc-title');
const descCaption = document.querySelector('.desc-caption');

const newsData = [
  // 1
  {
    current:"01",
    title:"img 1",
    caption:"Here is the descripiton of Image 1"
  },
  // 2
  {
    current:"02",
    title:"img 2",
    caption:"Here is the descripiton of Image 2"
  },
  // 3
  {
    current:"03",
    title:"img 3",
    caption:"Here is the descripiton of Image 3"
  },
  // 4
  {
    current:"04",
    title:"img 4",
    caption:"Here is the descripiton of Image 4"
  },
  // 5
  {
    current:"05",
    title:"img 5",
    caption:"Here is the descripiton of Image 5"
  }
]

currentNumber.textContent = newsData[descIndex].current;
totalNumber.textContent = "05";
descTitle.textContent = newsData[descIndex].title;
descCaption.textContent = newsData[descIndex].caption;

function newsSlide(){
  //화면 확대 tag 부여 및 제거
  allCards.forEach(c => c.classList.remove('main_card'));
  newsIndex++;
  if(newsIndex === newsCloneCenter){
    allCards[newsCenter].classList.add('main_card');
    allCards[newsCloneCenter].classList.add('main_card');
    newsIndex = newsCenter;
  }
  allCards[newsIndex].classList.add('main_card');

  // 설명 업데이트
  descIndex++;
  if(descIndex === newsOrigin){
    descIndex = 0;
  }
  currentNumber.textContent = newsData[descIndex].current;
  totalNumber.textContent = "05";
  descTitle.textContent = newsData[descIndex].title;
  descCaption.textContent = newsData[descIndex].caption;

  // 슬라이드 이동
  newsInner.style.transition = "transform 1s ease";  
  newsMoveX += newsMovingX;  
  newsInner.style.transform = `translateX(${newsMoveX}%)`
  
  //원위치 이동
  setTimeout(() =>{
    if(newsMoveX <= (newsMovingX*newsCards.length)){
      newsMoveX = newsStartX;
      newsInner.style.transform = `translateX(${newsStartX}%)`
      newsInner.style.transition = "none"; 
    }
  }, 1000);
}

setInterval(newsSlide, newsTimer);

