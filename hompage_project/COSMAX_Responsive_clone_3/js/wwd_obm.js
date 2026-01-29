// ========================================================
// ----------------------- main 1 -------------------------
// ========================================================
imagesWheelIntroManagerOpacity({
  target:"#wwd_obm .heroBanner .imgCover",
  start: "top 85%", end: "top 85%",
  // markers: true,
})
imagesWheelIntroManagerY({
  target:"#wwd_obm .heroBanner .imgCover",
  start: "top 85%", end: "top 85%",
  // markers: true,
})

// ========================================================
// ----------------------- main 2 -------------------------
// ========================================================
makeHorizontalCardScroll()

// ========================================================
// ----------------------- main 3 -------------------------
// ========================================================


// ========================================================
// ----------------------- main 4 -------------------------
// ========================================================
makeDesginAnimationCircle("#wwd_obm .main4 .desginAnimationCircle");

imagesWheelIntroManagerOpacity({
  target: "#wwd_obm .main4 .imgCover",
  // markers:true
})
imagesWheelControlManagerY({
  target: "#wwd_obm .main4 .imgCover",
  fromY: 30, toY: -10,
  // markers:true
})