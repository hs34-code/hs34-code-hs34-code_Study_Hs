/* =================================================
brand 기능
================================================= */
const hitA = document.querySelector(".hit.a");
const hitB = document.querySelector(".hit.b");
const wrapper = document.querySelector(".brand-wrapper");

const videoA = document.querySelector('[data-video="a"] video');
const videoB = document.querySelector('[data-video="b"] video');

let isHoverActive = false;

/* =================================================
page Lodding */
const params = new URLSearchParams(window.location.search);
const dropdownType = params.get("form");
if(dropdownType){
  clickEventBrand(`click${dropdownType.toUpperCase()}`)
}
console.log(dropdownType)




//hover event
hitA.addEventListener("mouseenter", () => {
  if(isHoverActive) return;

  wrapper.style.setProperty("--left", "20%");
  wrapper.style.setProperty("--right", "0%");

  videoA.classList.remove("filter");
  videoB.classList.add("filter");
})

hitB.addEventListener("mouseenter", () => {
  if(isHoverActive) return;
  
  wrapper.style.setProperty("--left", "0%");
  wrapper.style.setProperty("--right", "20%");

  videoB.classList.remove("filter");
  videoA.classList.add("filter");
})


// click event
hitA.addEventListener("click", () => {
  clickEventBrand("clickA")
})

hitB.addEventListener("click", () => {
  clickEventBrand("clickB")
})

function clickEventBrand(clickButton){
  isHoverActive = true;

  wrapper.style.setProperty("--left", "0%");
  wrapper.style.setProperty("--right", "0%");

  switch(clickButton){
    case "clickA" :
      wrapper.style.setProperty("--left", "90%");
      
      videoB.pause();
      videoB.currentTime = 0;

      videoA.play();
      break;

      case "clickB" :
      wrapper.style.setProperty("--right", "90%");
      videoA.pause();
      videoA.currentTime = 0;
      
      videoB.play();
      break;
  }
}



// 영역 나가면 초기화
wrapper.addEventListener("mouseleave", () => {
  wrapper.style.setProperty("--left", "0%");
  wrapper.style.setProperty("--right", "0%");
  videoB.pause();
  videoA.pause();
})


